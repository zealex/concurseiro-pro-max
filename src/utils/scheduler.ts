import { PLANO_12_SEMANAS, blocosDaTrilha, getSemana } from '@/data/plano12Semanas';
import { getTema } from '@/data/eixos';
import { capacidadeSemanal, chavePerfil, reforcoPadrao, type PerfilBasicas } from '@/data/selecaoBlocos';
import type { BlocoSemana, Eixo, Trilha } from '@/data/types';
import { TIPOS_PLANTAO } from '@/data/types';
import type { AgendaDia, ConclusaoBloco, FaseAgenda, ItemRevisao, TarefaAgenda } from '@/domain/types';
import { addDays, diffDays, type DateKey } from './dates';
import { ETAPA_LABEL, minutosDaRevisao, revisoesDevidas } from './spacedRepetition';

/**
 * Agendador determinístico: a agenda de um dia é função pura de (data, configuração, progresso).
 *
 * Semana do plano = 7 dias contados da data de início:
 *   dias 1–5 → blocos da semana (ordem pedagógica, carga equilibrada) + Conhecimentos Básicos espalhados
 *   dia 6    → blocos marcados `sabado` (bateria/simulado)
 *   dia 7    → revisões + caderno de erros + redistribuídas
 */

export const TOTAL_SEMANAS_PLANO = 12;
export const ORCAMENTO_MIN = 180;
/** Até 6 h líquidas por dia. */
export const ORCAMENTO_MAX = 360;
/** Opções oferecidas nos seletores de orçamento do Dia Padrão. */
export const OPCOES_ORCAMENTO = [180, 210, 240, 300, 360] as const;
export const ORCAMENTO_PLANTAO = 60;
export const TETO_REDISTRIBUICAO = 60;
const MAX_REVISOES_LISTADAS = 8;

export interface ConfigAgenda {
  trilha: Trilha;
  dataInicio: DateKey;
  orcamentoMin: number;
  diasPlantao: DateKey[];
  provaAlvo: DateKey | null;
  /** Perfil de básicas derivado do edital-alvo (ausente = padrão da trilha). */
  basicas?: PerfilBasicas | null;
}

export interface ProgressoAgenda {
  concluidos: Record<string, ConclusaoBloco>;
  revisoes: ItemRevisao[];
  /** Pior tema (pontos fracos) para a bateria adaptativa. */
  piorTema?: { temaId: string; nome: string } | null;
  /** Flashcards vencidos até a data (gera a tarefa "Flashcards do dia"). */
  flashcardsDevidos?: number;
}

/* ------------------------------------------------------------------ */
/* Mapeamento de semanas (inclui compressão por prova-alvo próxima)    */
/* ------------------------------------------------------------------ */

export interface MapaSemanas {
  totalSemanas: number;
  comprimido: boolean;
  /** semanasPlano[i] = semanas do plano exibidas na semana i+1 desde o início. */
  slots: { semanas: number[]; essencialApenas: boolean }[];
}

export function mapearSemanas(dataInicio: DateKey, provaAlvo: DateKey | null): MapaSemanas {
  const identidade = (): MapaSemanas => ({
    totalSemanas: TOTAL_SEMANAS_PLANO,
    comprimido: false,
    slots: PLANO_12_SEMANAS.map((s) => ({ semanas: [s.semana], essencialApenas: false })),
  });
  if (!provaAlvo) return identidade();
  const dias = diffDays(dataInicio, provaAlvo);
  if (dias < 0) return identidade();
  const n = Math.max(1, Math.ceil((dias + 1) / 7));
  if (n >= TOTAL_SEMANAS_PLANO) return identidade();

  const slots: MapaSemanas['slots'] = [];
  if (n <= 4) {
    // Só dá tempo da reta final: as últimas n semanas do Mês 3.
    for (let i = 0; i < n; i++) slots.push({ semanas: [TOTAL_SEMANAS_PLANO - n + 1 + i], essencialApenas: false });
  } else {
    const m = n - 4;
    for (let j = 1; j <= m; j++) {
      const de = Math.floor(((j - 1) * 8) / m) + 1;
      const ate = Math.floor((j * 8) / m);
      const semanas: number[] = [];
      for (let s = de; s <= Math.max(de, ate); s++) semanas.push(s);
      slots.push({ semanas, essencialApenas: true });
    }
    for (let s = 9; s <= 12; s++) slots.push({ semanas: [s], essencialApenas: false });
  }
  return { totalSemanas: n, comprimido: true, slots };
}

/* ------------------------------------------------------------------ */
/* Distribuição dos blocos de uma semana nos dias                      */
/* ------------------------------------------------------------------ */

export interface OpcoesSlot {
  perfil?: PerfilBasicas | null;
  orcamentoMin?: number;
}

function orcamentoValido(orcamentoMin: number | undefined): number {
  return clamp(orcamentoMin ?? 210, ORCAMENTO_MIN, ORCAMENTO_MAX);
}

export function blocosDoSlot(slot: MapaSemanas['slots'][number], trilha: Trilha, op: OpcoesSlot = {}): BlocoSemana[] {
  const orcamentoMin = orcamentoValido(op.orcamentoMin);
  const sel = { perfil: op.perfil, orcamentoMin, essencialApenas: slot.essencialApenas };
  const porSemana = slot.semanas.map((n) => blocosDaTrilha(n, trilha, sel));
  if (!slot.essencialApenas || porSemana.length <= 1) return porSemana.flat();

  // Várias semanas espremidas numa só: intercala as semanas (1º essencial de cada, depois o 2º…)
  // até a capacidade semanal; do dia 6 fica só o último bloco (simulado/bateria mais avançado).
  // As básicas (núcleo) têm uma reserva própria para não serem cortadas pelo volume médico.
  const capacidade = capacidadeSemanal(orcamentoMin);
  const reforco = op.perfil ? op.perfil.reforco : reforcoPadrao(trilha);
  const sabado = porSemana.flat().filter((b) => b.sabado).slice(-1);
  const filasFlex = porSemana.map((l) => l.filter((b) => !b.sabado && b.nivel));
  const filasFixas = porSemana.map((l) => l.filter((b) => !b.sabado && !b.nivel));
  const escolhidos: BlocoSemana[] = [];
  let carga = 0;
  const intercalar = (filas: BlocoSemana[][], teto: number) => {
    for (let rodada = 0; filas.some((f) => f.length > rodada); rodada++) {
      for (const fila of filas) {
        const b = fila[rodada];
        if (!b || carga + b.minutos > teto) continue;
        escolhidos.push(b);
        carga += b.minutos;
      }
    }
  };
  intercalar(filasFlex, Math.round(capacidade * (reforco ? 0.4 : 0.2)));
  intercalar(filasFixas, capacidade);
  // Mantém a ordem pedagógica original (semana a semana).
  const ordem = new Map(porSemana.flat().map((b, i) => [b.id, i]));
  return [...escolhidos.sort((a, b) => (ordem.get(a.id) ?? 0) - (ordem.get(b.id) ?? 0)), ...sabado];
}

/**
 * Retorna 7 listas (dia 1..7) de blocos.
 * 1ª passada: blocos fixos (médicos) em ordem pedagógica, com carga equilibrada nos dias 1–5.
 * 2ª passada: blocos flexíveis (básicas) no dia útil mais leve, evitando repetir a disciplina no dia;
 * entram depois dos fixos do dia (o dia 1 continua começando pelo diagnóstico).
 */
export function distribuirSemana(blocos: BlocoSemana[]): BlocoSemana[][] {
  const dias: BlocoSemana[][] = [[], [], [], [], [], [], []];
  const sabado = blocos.filter((b) => b.sabado);
  const flex = blocos.filter((b) => !b.sabado && b.nivel);
  const resto = blocos.filter((b) => !b.sabado && !b.nivel);
  const total = resto.reduce((acc, b) => acc + b.minutos, 0);
  const alvo = total / 5;
  let dia = 0;
  let carga = 0;
  for (const b of resto) {
    // Fecha o dia se já atingiu a meta e ainda há dias úteis à frente.
    if (dia < 4 && carga > 0 && carga + b.minutos / 2 > alvo) {
      dia++;
      carga = 0;
    }
    dias[dia]?.push(b);
    carga += b.minutos;
  }

  const cargas = dias.slice(0, 5).map((d) => d.reduce((acc, b) => acc + b.minutos, 0));
  const disciplinasDoDia = dias.slice(0, 5).map(() => new Set<string>());
  for (const b of flex) {
    let melhor = 0;
    for (let d = 1; d < 5; d++) {
      const repeteD = disciplinasDoDia[d]!.has(b.disciplinaId) ? 1 : 0;
      const repeteM = disciplinasDoDia[melhor]!.has(b.disciplinaId) ? 1 : 0;
      if (repeteD < repeteM || (repeteD === repeteM && cargas[d]! < cargas[melhor]!)) melhor = d;
    }
    dias[melhor]!.push(b);
    cargas[melhor]! += b.minutos;
    disciplinasDoDia[melhor]!.add(b.disciplinaId);
  }
  dias[5] = sabado;
  return dias;
}

const cacheDistribuicao = new Map<string, BlocoSemana[][]>();

function distribuicaoDoSlot(mapa: MapaSemanas, slotIdx: number, config: ConfigAgenda): BlocoSemana[][] {
  const slot = mapa.slots[slotIdx];
  if (!slot) return [[], [], [], [], [], [], []];
  const orcamentoMin = orcamentoValido(config.orcamentoMin);
  const chave = `${config.trilha}|${slot.semanas.join(',')}|${slot.essencialApenas}|${chavePerfil(config.basicas)}|${orcamentoMin}`;
  const hit = cacheDistribuicao.get(chave);
  if (hit) return hit;
  const r = distribuirSemana(blocosDoSlot(slot, config.trilha, { perfil: config.basicas, orcamentoMin }));
  cacheDistribuicao.set(chave, r);
  return r;
}

/* ------------------------------------------------------------------ */
/* Agenda do dia                                                       */
/* ------------------------------------------------------------------ */

function tarefaDeBloco(b: BlocoSemana, origem: TarefaAgenda['origem'], concluida: boolean, plantao: boolean): TarefaAgenda {
  const curto = plantao && !!b.plantaoAlternativa;
  return {
    id: b.id,
    origem,
    blocoId: b.id,
    revisaoId: null,
    tipo: b.tipo,
    eixo: b.eixo,
    titulo: b.titulo,
    descricao: curto ? (b.plantaoAlternativa ?? b.descricao) : b.descricao,
    minutos: curto ? Math.min(20, b.minutos) : b.minutos,
    temaIds: b.temaIds,
    refs: b.refs ?? [],
    concluida,
    versaoPlantao: curto,
  };
}

function tarefaDeRevisao(r: ItemRevisao, hoje: DateKey): TarefaAgenda {
  const atraso = diffDays(r.proxima, hoje);
  return {
    id: `rev:${r.id}`,
    origem: 'revisao',
    blocoId: null,
    revisaoId: r.id,
    tipo: 'revisao',
    eixo: r.eixo,
    titulo: `${ETAPA_LABEL[r.etapa] ?? 'D1'} · ${r.titulo}`,
    descricao:
      (r.etapa === 0
        ? 'Releia o resumo/checklist e refaça 5 questões.'
        : r.etapa === 1
          ? '10 questões sem consulta.'
          : r.etapa === 2
            ? 'Refaça o cheat sheet de memória e confira.'
            : '10 questões mistas da banca-alvo.') + (atraso > 0 ? ` (atrasada ${atraso} dia${atraso > 1 ? 's' : ''})` : ''),
    minutos: minutosDaRevisao(r.etapa),
    temaIds: r.temaId ? [r.temaId] : [],
    refs: r.temaId ? (getTema(r.temaId)?.tema.refs ?? []) : [],
    concluida: false,
    versaoPlantao: false,
  };
}

function sintetica(p: {
  id: string;
  origem: TarefaAgenda['origem'];
  tipo: TarefaAgenda['tipo'];
  eixo: Eixo;
  titulo: string;
  descricao: string;
  minutos: number;
  temaIds?: string[];
  concluidos: Record<string, ConclusaoBloco>;
}): TarefaAgenda {
  return {
    id: p.id,
    origem: p.origem,
    blocoId: null,
    revisaoId: null,
    tipo: p.tipo,
    eixo: p.eixo,
    titulo: p.titulo,
    descricao: p.descricao,
    minutos: p.minutos,
    temaIds: p.temaIds ?? [],
    refs: [],
    concluida: !!p.concluidos[p.id],
    versaoPlantao: false,
  };
}

/** Blocos atribuídos a dias anteriores a `hoje` (desde o início) e ainda não concluídos — mais antigos primeiro. */
export function filaDeRedistribuicao(config: ConfigAgenda, concluidos: Record<string, ConclusaoBloco>, hoje: DateKey): BlocoSemana[] {
  const mapa = mapearSemanas(config.dataInicio, config.provaAlvo);
  const decorridos = diffDays(config.dataInicio, hoje);
  if (decorridos <= 0) return [];
  const fila: BlocoSemana[] = [];
  const vistos = new Set<string>();
  const limiteDias = Math.min(decorridos, mapa.slots.length * 7);
  for (let d = 0; d < limiteDias; d++) {
    const slotIdx = Math.floor(d / 7);
    const dia = d % 7;
    for (const b of distribuicaoDoSlot(mapa, slotIdx, config)[dia] ?? []) {
      if (vistos.has(b.id) || concluidos[b.id]) continue;
      // Simulados/baterias do dia 6 não se acumulam: se passaram, o próximo da série cobre.
      if (b.sabado) continue;
      // Básicas não se acumulam (são contínuas: Treino e flashcards cobrem); trocar o edital não inunda a fila.
      if (b.nivel) continue;
      vistos.add(b.id);
      fila.push(b);
    }
  }
  return fila;
}

export function montarAgenda(data: DateKey, config: ConfigAgenda, progresso: ProgressoAgenda): AgendaDia {
  const mapa = mapearSemanas(config.dataInicio, config.provaAlvo);
  const plantao = config.diasPlantao.includes(data);
  const orcamento = plantao ? ORCAMENTO_PLANTAO : clamp(config.orcamentoMin, ORCAMENTO_MIN, ORCAMENTO_MAX);
  const decorridos = diffDays(config.dataInicio, data);
  const { concluidos } = progresso;

  let fase: FaseAgenda = 'plano';
  if (decorridos < 0) fase = 'antes';
  else if (config.provaAlvo && data > config.provaAlvo) fase = 'apos-prova';
  else if (decorridos >= mapa.slots.length * 7) fase = 'manutencao';

  const base: AgendaDia = {
    data,
    fase,
    modo: plantao ? 'plantao' : 'padrao',
    semanaIndice: fase === 'antes' ? null : Math.floor(decorridos / 7) + 1,
    totalSemanas: mapa.totalSemanas,
    semanasPlano: [],
    diaDaSemana: fase === 'antes' ? null : (decorridos % 7) + 1,
    mesociclo: null,
    comprimido: mapa.comprimido,
    tarefas: [],
    minutosPlanejados: 0,
    minutosConcluidos: 0,
    orcamento,
    pendentesNaFila: 0,
    minutosNaFila: 0,
    revisoesExtras: 0,
  };
  if (fase === 'antes' || fase === 'apos-prova') return base;

  const tarefas: TarefaAgenda[] = [];

  // 1. Revisões espaçadas devidas (prioridade máxima, inclusive no plantão)
  const devidas = revisoesDevidas(progresso.revisoes, data);
  const limiteRev = plantao ? 3 : MAX_REVISOES_LISTADAS;
  for (const r of devidas.slice(0, limiteRev)) tarefas.push(tarefaDeRevisao(r, data));
  base.revisoesExtras = Math.max(0, devidas.length - limiteRev);

  let blocosHoje: BlocoSemana[] = [];
  if (fase === 'plano') {
    const slotIdx = Math.floor(decorridos / 7);
    const dia = decorridos % 7;
    const slot = mapa.slots[slotIdx];
    base.semanasPlano = slot?.semanas ?? [];
    base.mesociclo = (getSemana(slot?.semanas.at(-1) ?? 1)?.mesociclo ?? null) as AgendaDia['mesociclo'];
    blocosHoje = distribuicaoDoSlot(mapa, slotIdx, config)[dia] ?? [];
  }

  // 2. Blocos do dia
  if (plantao) {
    for (const b of blocosHoje) {
      if (!TIPOS_PLANTAO.includes(b.tipo) && !(b.tipo === 'simulado' && b.plantaoAlternativa)) continue;
      tarefas.push(tarefaDeBloco(b, 'plano', !!concluidos[b.id], true));
    }
  } else {
    for (const b of blocosHoje) {
      const feitoEm = concluidos[b.id];
      // Bloco concluído antecipadamente em outro dia não reaparece.
      if (feitoEm && feitoEm.data !== data) continue;
      tarefas.push(tarefaDeBloco(b, 'plano', !!feitoEm, false));
    }
  }

  // 3. Fila de redistribuição (exibida só em Dia Padrão; teto de +60 min)
  const fila = fase === 'plano' || fase === 'manutencao' ? filaDeRedistribuicao(config, concluidos, data) : [];
  const idsHoje = new Set(tarefas.map((t) => t.id));
  const filaPendente = fila.filter((b) => !idsHoje.has(b.id));
  // Concluídas hoje a partir da fila continuam visíveis (marcadas).
  for (const b of distribuicaoTodosDias(config, mapa, data)) {
    const c = concluidos[b.id];
    if (c?.data === data && !idsHoje.has(b.id) && !blocosHoje.some((x) => x.id === b.id)) {
      tarefas.push(tarefaDeBloco(b, 'redistribuida', true, c.plantao));
      idsHoje.add(b.id);
    }
  }
  if (!plantao) {
    let acumulado = 0;
    for (const b of filaPendente) {
      if (acumulado > 0 && acumulado + b.minutos > TETO_REDISTRIBUICAO) break;
      tarefas.push(tarefaDeBloco(b, 'redistribuida', false, false));
      acumulado += b.minutos;
      idsHoje.add(b.id);
      if (acumulado >= TETO_REDISTRIBUICAO) break;
    }
  }
  const restantes = filaPendente.filter((b) => !idsHoje.has(b.id));
  base.pendentesNaFila = restantes.length;
  base.minutosNaFila = restantes.reduce((acc, b) => acc + b.minutos, 0);

  // 4. Dia 7 do plano e modo manutenção: tarefas sintéticas
  const diaSemana = base.diaDaSemana ?? 0;
  if (fase === 'plano' && diaSemana === 7 && !plantao) {
    tarefas.push(
      sintetica({
        id: `sem:${data}:caderno`,
        origem: 'manutencao',
        tipo: 'caderno-erros',
        eixo: 'tronco',
        titulo: 'Revisão semanal + Caderno de Erros',
        descricao: 'Refaça os erros da semana, atualize o caderno e confira os pontos fracos no Dashboard.',
        minutos: 45,
        concluidos,
      }),
    );
  }
  if (fase === 'manutencao') {
    const sabado = diaSemana === 6;
    tarefas.push(
      sintetica({
        id: `man:${data}:${sabado ? 'simulado' : 'bateria'}`,
        origem: 'manutencao',
        tipo: sabado ? 'simulado' : 'questoes',
        eixo: 'tronco',
        titulo: sabado ? 'Simulado de manutenção (prova completa)' : 'Bateria de manutenção: 40 questões da banca-alvo',
        descricao: sabado
          ? 'O plano de 12 semanas terminou: mantenha um simulado completo por semana até a prova.'
          : 'Plano concluído — mantenha o ritmo com questões mistas e revisões.',
        minutos: plantao ? 20 : sabado ? 180 : 60,
        concluidos,
      }),
      sintetica({
        id: `man:${data}:caderno`,
        origem: 'manutencao',
        tipo: 'caderno-erros',
        eixo: 'tronco',
        titulo: 'Caderno de erros',
        descricao: 'Refaça 10 itens do caderno de erros.',
        minutos: plantao ? 15 : 30,
        concluidos,
      }),
    );
  }

  // 4b. Flashcards vencidos (repetição espaçada das básicas): 10–30 min; 10 min no plantão.
  const devidos = progresso.flashcardsDevidos ?? 0;
  if (devidos > 0) {
    tarefas.push(
      sintetica({
        id: `fla:${data}`,
        origem: 'adaptativa',
        tipo: 'revisao',
        eixo: 'basicos',
        titulo: `Flashcards do dia (${devidos})`,
        descricao: 'Cartões vencidos: Questões → Flashcards. Acertou, o cartão volta mais tarde (1 → 3 → 7 → 15 → 30 dias); errou, volta amanhã.',
        minutos: plantao ? 10 : Math.min(30, Math.max(10, Math.round(devidos / 10) * 5)),
        concluidos,
      }),
    );
  }

  // 5. Bateria adaptativa para completar o orçamento (ou garantir algo no plantão)
  let planejado = tarefas.reduce((acc, t) => acc + t.minutos, 0);
  const folga = orcamento - planejado;
  const tema = progresso.piorTema;
  if ((!plantao && folga >= 30 && diaSemana !== 7) || (plantao && tarefas.length === 0)) {
    const minutos = plantao ? 20 : Math.min(60, Math.floor(folga / 15) * 15);
    tarefas.push(
      sintetica({
        id: `ada:${data}`,
        origem: 'adaptativa',
        tipo: 'questoes',
        eixo: tema ? (getTema(tema.temaId)?.disciplina.eixo ?? 'tronco') : 'tronco',
        titulo: tema ? `Bateria adaptativa: ${tema.nome}` : 'Bateria adaptativa: questões mistas da banca-alvo',
        descricao: tema
          ? `Seu tema com menor taxa de acerto. ${Math.round(minutos / 2)} questões com correção imediata; registre na Central de Questões.`
          : `${Math.round(minutos / 2)} questões mistas da sua trilha; registre o resultado para o app identificar seus pontos fracos.`,
        minutos,
        temaIds: tema ? [tema.temaId] : [],
        concluidos,
      }),
    );
    planejado += minutos;
  }

  // No plantão, respeita o teto rígido de 60 min (revisões primeiro).
  let finais = tarefas;
  if (plantao) {
    finais = [];
    let soma = 0;
    for (const t of tarefas) {
      if (soma + t.minutos > ORCAMENTO_PLANTAO && finais.length > 0) continue;
      finais.push(t);
      soma += t.minutos;
    }
  }

  base.tarefas = finais;
  base.minutosPlanejados = finais.reduce((acc, t) => acc + t.minutos, 0);
  base.minutosConcluidos = finais.filter((t) => t.concluida).reduce((acc, t) => acc + t.minutos, 0);
  return base;
}

/** Todos os blocos atribuídos até `hoje` (para achar concluídos hoje vindos da fila). */
function distribuicaoTodosDias(config: ConfigAgenda, mapa: MapaSemanas, hoje: DateKey): BlocoSemana[] {
  const decorridos = Math.min(diffDays(config.dataInicio, hoje), mapa.slots.length * 7 - 1);
  const out: BlocoSemana[] = [];
  for (let d = 0; d <= decorridos; d++) out.push(...(distribuicaoDoSlot(mapa, Math.floor(d / 7), config)[d % 7] ?? []));
  return out;
}

/** Visão das semanas para a tela do Cronograma: blocos por dia com datas reais. */
export function visaoDaSemana(semanaIndice: number, config: ConfigAgenda): { data: DateKey; dia: number; blocos: BlocoSemana[] }[] {
  const mapa = mapearSemanas(config.dataInicio, config.provaAlvo);
  const dist = distribuicaoDoSlot(mapa, semanaIndice - 1, config);
  return dist.map((blocos, i) => ({ data: addDays(config.dataInicio, (semanaIndice - 1) * 7 + i), dia: i + 1, blocos }));
}

/** Progresso por semana (blocos concluídos / total) na trilha ativa. */
export function progressoPorSemana(config: ConfigAgenda, concluidos: Record<string, ConclusaoBloco>): { semanaIndice: number; semanas: number[]; feitos: number; total: number }[] {
  const mapa = mapearSemanas(config.dataInicio, config.provaAlvo);
  return mapa.slots.map((slot, i) => {
    const blocos = blocosDoSlot(slot, config.trilha, { perfil: config.basicas, orcamentoMin: config.orcamentoMin });
    return { semanaIndice: i + 1, semanas: slot.semanas, feitos: blocos.filter((b) => concluidos[b.id]).length, total: blocos.length };
  });
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}
