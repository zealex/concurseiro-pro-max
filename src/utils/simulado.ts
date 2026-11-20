import { getTema } from '@/data/eixos';
import type { FormatoQuestao, ItemEdital, ProvaEdital, QuestaoTreino } from '@/data/types';
import type { EditalAlvo } from '@/shared/edital';
import { acertoDoItem, minimoDaProva, pontosDaProva, pontosDoItem, pontosEsperados, statusMinimo, totalQuestoes, type MapaDesempenho, type StatusMinimo } from './edital';
import { estaCerta, montarTreino, type HistoricoQuestao, type RespostaTreino } from './treino';

/**
 * Simulado montado a partir de um edital (o "Meu Edital" ou um preset): cada item do edital
 * recebe questões das disciplinas que o cobrem, o tempo é proporcional ao da prova real e a
 * correção usa as regras do edital (penalidade no Certo/Errado, mínimos por item/prova/total).
 * Funções puras (testadas).
 */

/** Sem duração no edital: 3 minutos por questão. */
export const MIN_POR_QUESTAO_PADRAO = 3;
/** Simulados muito curtos ainda recebem um tempo mínimo. */
export const DURACAO_MINIMA_MIN = 5;

export type TamanhoSimulado = 'completo' | 'metade';

export interface ItemSimulado {
  rotulo: string;
  disciplinaIds: string[];
  /** Questões do item no edital. */
  questoesEdital: number;
  peso: number;
  minimo: number | null;
  /** Questões sorteadas para o simulado (pode ser menos que o edital quando falta banco). */
  questaoIds: string[];
}

export interface ProvaSimulado {
  id: string;
  nome: string;
  formato: FormatoQuestao;
  /** Pontos perdidos por erro (só nos itens Certo/Errado). */
  penalidade: number;
  maximo: number;
  minimo: number | null;
  itens: ItemSimulado[];
}

export interface PlanoSimulado {
  provas: ProvaSimulado[];
  minimoTotal: number | null;
  duracaoMin: number;
  /** Questões do simulado ÷ questões que o edital teria nesse tamanho (0–1). */
  cobertura: number;
}

/** Simulado em andamento: sobrevive a recarregar a página; fica fora do backup. */
export interface SimuladoAtivo {
  id: string;
  nome: string;
  banca: string;
  /** Início (epoch ms) — o cronômetro é recalculado a partir dele. */
  inicioMs: number;
  duracaoMin: number;
  plano: PlanoSimulado;
  respostas: Record<string, RespostaTreino>;
  indice: number;
}

/** Conferência leve do simulado salvo — qualquer coisa estranha descarta o simulado (não o histórico). */
export function simuladoValidoOuNulo(v: unknown): SimuladoAtivo | null {
  if (!v || typeof v !== 'object') return null;
  const s = v as Partial<SimuladoAtivo>;
  const ok =
    typeof s.id === 'string' &&
    typeof s.nome === 'string' &&
    typeof s.banca === 'string' &&
    typeof s.inicioMs === 'number' &&
    Number.isFinite(s.inicioMs) &&
    typeof s.duracaoMin === 'number' &&
    s.duracaoMin > 0 &&
    typeof s.indice === 'number' &&
    !!s.respostas &&
    typeof s.respostas === 'object' &&
    !!s.plano &&
    Array.isArray(s.plano.provas) &&
    s.plano.provas.every((p) => Array.isArray(p?.itens) && p.itens.every((i) => Array.isArray(i?.questaoIds)));
  return ok ? (s as SimuladoAtivo) : null;
}

function disciplinaDa(q: QuestaoTreino): string | undefined {
  return getTema(q.temaId)?.disciplina.id;
}

/** Quantas questões do item o tamanho escolhido pede (metade arredonda para cima, mínimo 1). */
export function alvoDoItem(item: Pick<ItemEdital, 'questoes'>, tamanho: TamanhoSimulado): number {
  return tamanho === 'metade' ? Math.max(1, Math.ceil(item.questoes / 2)) : item.questoes;
}

/** Duração do caderno real: soma das durações informadas ou 3 min/questão. */
export function duracaoDoEdital(e: Pick<EditalAlvo, 'provas'>): number {
  const informada = e.provas.reduce((a, p) => a + (p.duracaoMin ?? 0), 0);
  return informada > 0 ? informada : totalQuestoes(e) * MIN_POR_QUESTAO_PADRAO;
}

/** Tempo do simulado: proporcional às questões efetivamente sorteadas. */
export function duracaoDoSimulado(e: Pick<EditalAlvo, 'provas'>, questoesSimulado: number): number {
  const total = totalQuestoes(e);
  if (!total || !questoesSimulado) return 0;
  return Math.max(DURACAO_MINIMA_MIN, Math.round((duracaoDoEdital(e) * questoesSimulado) / total));
}

export interface OpcoesSimulado {
  tamanho: TamanhoSimulado;
  aleatorio?: () => number;
}

/**
 * Sorteia as questões item a item. Prefere o formato da prova (Certo/Errado numa prova Cebraspe);
 * se faltar, completa com o outro formato. Uma questão nunca aparece em dois itens.
 */
export function montarSimulado(e: EditalAlvo, questoes: QuestaoTreino[], historico: Record<string, HistoricoQuestao>, op: OpcoesSimulado): PlanoSimulado {
  const usadas = new Set<string>();
  let pedidas = 0;
  let sorteadas = 0;
  const provas: ProvaSimulado[] = e.provas.map((p) => ({
    id: p.id,
    nome: p.nome,
    formato: p.formato,
    penalidade: p.formato === 'certo-errado' ? (p.penalidadeErro ?? 0) : 0,
    maximo: pontosDaProva(p),
    minimo: minimoDaProva(p),
    itens: p.itens.map((item) => {
      const alvo = alvoDoItem(item, op.tamanho);
      pedidas += alvo;
      const discs = new Set(item.disciplinaIds);
      const candidatas = questoes.filter((q) => !usadas.has(q.id) && discs.has(disciplinaDa(q) ?? ''));
      const base = { temas: [], filtro: 'todas' as const, formato: 'todos' as const, aleatorio: op.aleatorio };
      const escolhidas = montarTreino(
        candidatas.filter((q) => q.formato === p.formato),
        historico,
        { ...base, quantidade: alvo },
      );
      if (escolhidas.length < alvo) {
        escolhidas.push(
          ...montarTreino(
            candidatas.filter((q) => q.formato !== p.formato),
            historico,
            { ...base, quantidade: alvo - escolhidas.length },
          ),
        );
      }
      for (const q of escolhidas) usadas.add(q.id);
      sorteadas += escolhidas.length;
      return { rotulo: item.rotulo, disciplinaIds: [...item.disciplinaIds], questoesEdital: item.questoes, peso: item.peso, minimo: item.minimo ?? null, questaoIds: escolhidas.map((q) => q.id) };
    }),
  }));
  return { provas, minimoTotal: e.minimoTotal, duracaoMin: duracaoDoSimulado(e, sorteadas), cobertura: pedidas ? sorteadas / pedidas : 0 };
}

/** Ordem das questões na prova (prova → item → sorteio). */
export function idsDoSimulado(plano: PlanoSimulado): string[] {
  return plano.provas.flatMap((p) => p.itens.flatMap((i) => i.questaoIds));
}

/* ------------------------------------------------------------------ */
/* Correção                                                            */
/* ------------------------------------------------------------------ */

export type FonteNota = 'simulado' | 'historico' | null;

export interface ResultadoItemSimulado {
  rotulo: string;
  maximo: number;
  minimo: number | null;
  feitas: number;
  acertos: number;
  erros: number;
  brancos: number;
  /** Pontos na escala do edital (o simulado parcial é projetado para o nº de questões do edital). */
  pontos: number | null;
  /** De onde veio a nota: questões do simulado, histórico registrado na disciplina, ou nenhuma. */
  fonte: FonteNota;
  status: StatusMinimo;
}

export interface ResultadoProvaSimulado {
  id: string;
  nome: string;
  maximo: number;
  /** Soma dos itens com nota (parcial quando `completa` é falso). */
  pontos: number;
  completa: boolean;
  minimo: number | null;
  status: StatusMinimo;
  itens: ResultadoItemSimulado[];
}

export interface ResultadoSimulado {
  provas: ResultadoProvaSimulado[];
  maximo: number;
  pontos: number;
  completa: boolean;
  minimoTotal: number | null;
  status: StatusMinimo;
  riscoEliminacao: boolean;
  feitas: number;
  acertos: number;
  erros: number;
  brancos: number;
}

/**
 * Corrige o simulado. Itens com questões: pontos = peso × questões do edital × (acertos − penalidade ×
 * erros Certo/Errado) ÷ questões feitas. Itens sem questões no app usam o desempenho registrado nas
 * disciplinas (Central de Questões); sem histórico, ficam sem nota e a prova é marcada como parcial.
 */
export function corrigirSimulado(
  plano: PlanoSimulado,
  questoes: ReadonlyMap<string, QuestaoTreino>,
  respostas: Record<string, RespostaTreino>,
  desempenho: MapaDesempenho,
): ResultadoSimulado {
  let feitas = 0;
  let acertosT = 0;
  let errosT = 0;
  let brancosT = 0;
  const provas: ResultadoProvaSimulado[] = plano.provas.map((p) => {
    const itens: ResultadoItemSimulado[] = p.itens.map((item) => {
      let acertos = 0;
      let erros = 0;
      let errosCE = 0;
      let n = 0;
      for (const id of item.questaoIds) {
        const q = questoes.get(id);
        if (!q) continue;
        n += 1;
        const c = estaCerta(q, respostas[id] ?? null);
        if (c === true) acertos += 1;
        else if (c === false) {
          erros += 1;
          if (q.formato === 'certo-errado') errosCE += 1;
        }
      }
      const brancos = n - acertos - erros;
      feitas += n;
      acertosT += acertos;
      errosT += erros;
      brancosT += brancos;
      const itemEdital: ItemEdital = { rotulo: item.rotulo, disciplinaIds: item.disciplinaIds, questoes: item.questoesEdital, peso: item.peso };
      let pontos: number | null = null;
      let fonte: FonteNota = null;
      if (n > 0) {
        pontos = (item.peso * item.questoesEdital * (acertos - p.penalidade * errosCE)) / n;
        fonte = 'simulado';
      } else {
        const pct = acertoDoItem(itemEdital, desempenho);
        if (pct !== null) {
          const prova: Pick<ProvaEdital, 'formato' | 'penalidadeErro'> = { formato: p.formato, penalidadeErro: p.penalidade };
          pontos = pontosEsperados(itemEdital, prova, pct);
          fonte = 'historico';
        }
      }
      return {
        rotulo: item.rotulo,
        maximo: pontosDoItem(itemEdital),
        minimo: item.minimo,
        feitas: n,
        acertos,
        erros,
        brancos,
        pontos,
        fonte,
        status: statusMinimo(pontos, item.minimo),
      };
    });
    const completa = itens.every((i) => i.pontos !== null);
    const pontos = itens.reduce((a, i) => a + (i.pontos ?? 0), 0);
    return { id: p.id, nome: p.nome, maximo: p.maximo, pontos, completa, minimo: p.minimo, status: statusMinimo(completa ? pontos : null, p.minimo), itens };
  });
  const completa = provas.every((p) => p.completa);
  const pontos = provas.reduce((a, p) => a + p.pontos, 0);
  const status = statusMinimo(completa ? pontos : null, plano.minimoTotal);
  const riscoEliminacao = status === 'abaixo' || provas.some((p) => p.status === 'abaixo' || p.itens.some((i) => i.status === 'abaixo'));
  return {
    provas,
    maximo: provas.reduce((a, p) => a + p.maximo, 0),
    pontos,
    completa,
    minimoTotal: plano.minimoTotal,
    status,
    riscoEliminacao,
    feitas,
    acertos: acertosT,
    erros: errosT,
    brancos: brancosT,
  };
}
