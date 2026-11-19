import { chaveCargo, normalizar } from './normalize';
import { ajustarTagPorOrgao, classificarCargo, PRIORIDADE_TAG } from './classify';
import type { Cargo, Concurso, Fonte } from './schema';

export const DIAS_NOVO = 7;
const DIA_MS = 86_400_000;

/** Prioridade de fonte quando o mesmo concurso aparece em mais de uma. */
const PRIORIDADE_FONTE: Record<Fonte, number> = {
  manual: 0,
  curadoria: 1,
  pci: 2,
  'concursos-no-brasil': 3,
  fundatec: 4,
  fepese: 5,
};

export function isNovo(firstSeenAt: string, agora: Date, dias = DIAS_NOVO): boolean {
  const t = Date.parse(firstSeenAt);
  if (!Number.isFinite(t)) return false;
  return agora.getTime() - t <= dias * DIA_MS;
}

function preferir<T>(novo: T | null | undefined, antigo: T | null | undefined): T | null {
  return novo ?? antigo ?? null;
}

/** União de cargos por nome normalizado, completando campos vazios. */
export function unirCargos(a: Cargo[], b: Cargo[]): Cargo[] {
  const mapa = new Map<string, Cargo>();
  for (const c of [...a, ...b]) {
    const chave = chaveCargo(c.nome);
    const atual = mapa.get(chave);
    if (!atual) {
      mapa.set(chave, { ...c });
      continue;
    }
    mapa.set(chave, {
      ...atual,
      vagas: preferir(atual.vagas, c.vagas),
      remuneracao: preferir(atual.remuneracao, c.remuneracao),
      cargaHoraria: preferir(atual.cargaHoraria, c.cargaHoraria),
      cadastroReserva: atual.cadastroReserva || c.cadastroReserva,
      subcategoria: preferir(atual.subcategoria, c.subcategoria),
    });
  }
  // Cargo genérico "Médico" some se houver cargos mais específicos.
  const lista = [...mapa.values()];
  const especificos = lista.filter((c) => !/^medic[oa]s?( \(ver edital\))?$/.test(normalizar(c.nome)));
  const base = especificos.length ? especificos : lista;
  // Sobras curtas contidas em nomes mais completos ("Pediatra" × "Médico Pediatra", "Obstetra" × "Médico Ginecologista e Obstetra").
  const chaves = base.map((c) => chaveCargo(c.nome));
  return base.filter((_, i) => {
    const ch = chaves[i] ?? '';
    if (ch.split(' ').length > 2) return true;
    return !chaves.some((outra, j) => j !== i && outra !== ch && ` ${outra} `.includes(` ${ch} `));
  });
}

/**
 * Funde dois registros com o mesmo id (mesma rodada de coleta ou rodada nova × arquivo).
 * `principal` dita a fonte; o outro só completa campos vazios.
 */
export function fundirRegistros(principal: Concurso, outro: Concurso): Concurso {
  const [p, o] =
    PRIORIDADE_FONTE[principal.fonte] <= PRIORIDADE_FONTE[outro.fonte] ? [principal, outro] : [outro, principal];
  const cargos = unirCargos(p.cargos, o.cargos);
  const vagasSomadas = cargos.every((c) => c.vagas !== null)
    ? cargos.reduce((acc, c) => acc + (c.vagas ?? 0), 0)
    : null;
  const relacionados = [...p.relacionados];
  for (const r of o.relacionados) if (!relacionados.some((x) => x.url === r.url)) relacionados.push(r);
  if (o.fonteUrl !== p.fonteUrl && !relacionados.some((x) => x.url === o.fonteUrl)) {
    relacionados.push({ rotulo: `Também em ${o.fonte}`, url: o.fonteUrl });
  }
  return {
    ...p,
    titulo: p.titulo || o.titulo,
    cargos,
    vagasTotal: preferir(p.vagasTotal, o.vagasTotal) ?? vagasSomadas,
    remuneracaoMax: maxNulo(p.remuneracaoMax, o.remuneracaoMax),
    cargaHoraria: preferir(p.cargaHoraria, o.cargaHoraria),
    banca: preferir(p.banca, o.banca),
    inscricoes: {
      inicio: preferir(p.inscricoes.inicio, o.inscricoes.inicio),
      fim: preferir(p.inscricoes.fim, o.inscricoes.fim),
    },
    dataProva: preferir(p.dataProva, o.dataProva),
    editalUrl: preferir(p.editalUrl, o.editalUrl),
    inscricaoUrl: preferir(p.inscricaoUrl, o.inscricaoUrl),
    relacionados,
    observacoes: preferir(p.observacoes, o.observacoes),
    subcategoria: melhorSubcategoria(p, o),
    firstSeenAt: menorData(p.firstSeenAt, o.firstSeenAt),
    lastSeenAt: maiorData(p.lastSeenAt, o.lastSeenAt),
  };
}

function melhorSubcategoria(a: Concurso, b: Concurso): Concurso['subcategoria'] {
  if (a.tag !== 'medicina-geral-especialidades') return null;
  // Se qualquer cargo for clínico/ESF, o registro é clínico (categoria mais ampla para quem procura vaga generalista).
  const todos = [...a.cargos, ...b.cargos];
  if (todos.some((c) => c.subcategoria === 'clinico-esf-plantonista')) return 'clinico-esf-plantonista';
  return a.subcategoria ?? b.subcategoria ?? 'especialidades';
}

function maxNulo(a: number | null, b: number | null): number | null {
  if (a === null) return b;
  if (b === null) return a;
  return Math.max(a, b);
}

function menorData(a: string, b: string): string {
  return Date.parse(a) <= Date.parse(b) ? a : b;
}

function maiorData(a: string, b: string): string {
  return Date.parse(a) >= Date.parse(b) ? a : b;
}

/** Deduplica uma lista (mesma rodada) por id, fundindo registros repetidos. */
export function deduplicar(lista: Concurso[]): Concurso[] {
  const mapa = new Map<string, Concurso>();
  for (const c of lista) {
    const atual = mapa.get(c.id);
    mapa.set(c.id, atual ? fundirRegistros(atual, c) : c);
  }
  return [...mapa.values()];
}

export interface OpcoesPoda {
  /** Remove quando a prova ocorreu há mais de N dias. */
  diasAposProva: number;
  /** Remove registros coletados que não aparecem há mais de N dias. */
  diasSemVer: number;
  /** Remove quando as inscrições terminaram há mais de N dias e não há data de prova. */
  diasAposInscricao: number;
}

export const PODA_PADRAO: OpcoesPoda = { diasAposProva: 60, diasSemVer: 120, diasAposInscricao: 120 };

export function deveSerPodado(c: Concurso, agora: Date, op: OpcoesPoda = PODA_PADRAO): boolean {
  const hoje = agora.getTime();
  if (c.dataProva && hoje - Date.parse(`${c.dataProva}T12:00:00Z`) > op.diasAposProva * DIA_MS) return true;
  if (!c.dataProva && c.inscricoes.fim && hoje - Date.parse(`${c.inscricoes.fim}T12:00:00Z`) > op.diasAposInscricao * DIA_MS) {
    return true;
  }
  const coletado = c.fonte !== 'curadoria' && c.fonte !== 'manual';
  if (coletado && hoje - Date.parse(c.lastSeenAt) > op.diasSemVer * DIA_MS) return true;
  return false;
}

/**
 * Mescla a coleta atual com o arquivo existente:
 * - preserva firstSeenAt dos já conhecidos (é isso que permite destacar os recém-encontrados);
 * - atualiza lastSeenAt dos vistos nesta rodada;
 * - mantém os não vistos (até a poda);
 * - recalcula isNew.
 */
export function mesclarFeed(existentes: Concurso[], coletados: Concurso[], agora: Date, op: OpcoesPoda = PODA_PADRAO): Concurso[] {
  const iso = agora.toISOString();
  const mapa = new Map<string, Concurso>(existentes.map((c) => [c.id, c]));
  for (const novo of deduplicar(coletados)) {
    const antigo = mapa.get(novo.id);
    if (!antigo) {
      mapa.set(novo.id, { ...novo, firstSeenAt: iso, lastSeenAt: iso });
    } else {
      const fundido = fundirRegistros({ ...novo, firstSeenAt: antigo.firstSeenAt, lastSeenAt: iso }, antigo);
      mapa.set(novo.id, { ...fundido, firstSeenAt: antigo.firstSeenAt, lastSeenAt: iso });
    }
  }
  return ordenar(
    [...mapa.values()]
      .map(reclassificarCargos)
      .filter((c) => !deveSerPodado(c, agora, op))
      .map((c) => ({ ...c, isNew: isNovo(c.firstSeenAt, agora) })),
  );
}

/**
 * Reaplica o classificador atual aos cargos coletados (as regras evoluem entre execuções) e descarta
 * os que pertencem a outro grupo — o registro daquele grupo existe separadamente. Manuais e curadoria não mudam.
 */
export function reclassificarCargos(c: Concurso): Concurso {
  if (c.fonte === 'manual' || c.fonte === 'curadoria') return c;
  const cargos = c.cargos
    .map((x) => ajustarTagPorOrgao({ ...x, ...classificarCargo(x.nome) }, c.orgao))
    .filter((x) => x.tag === c.tag);
  if (!cargos.length) return c;
  const subcategoria =
    c.tag === 'medicina-geral-especialidades'
      ? cargos.some((x) => x.subcategoria === 'clinico-esf-plantonista')
        ? 'clinico-esf-plantonista'
        : 'especialidades'
      : null;
  const removeu = cargos.length !== c.cargos.length;
  const vagasTotal = removeu && cargos.every((x) => x.vagas !== null) ? cargos.reduce((a, x) => a + (x.vagas ?? 0), 0) : c.vagasTotal;
  return { ...c, cargos, subcategoria, vagasTotal };
}

/** Novos primeiro, depois por data de descoberta (mais recente primeiro), depois por prioridade de tag. */
export function ordenar(lista: Concurso[]): Concurso[] {
  return [...lista].sort((a, b) => {
    if (a.isNew !== b.isNew) return a.isNew ? -1 : 1;
    const d = Date.parse(b.firstSeenAt) - Date.parse(a.firstSeenAt);
    if (d !== 0) return d;
    const t = PRIORIDADE_TAG[a.tag] - PRIORIDADE_TAG[b.tag];
    if (t !== 0) return t;
    return a.id.localeCompare(b.id);
  });
}

/** Assinatura do conteúdo relevante (ignora lastSeenAt/isNew) para decidir se vale reescrever o arquivo. */
export function assinaturaConteudo(lista: Concurso[]): string {
  const limpo = [...lista]
    .map(({ lastSeenAt: _l, isNew: _n, ...resto }) => resto)
    .sort((a, b) => a.id.localeCompare(b.id));
  return JSON.stringify(limpo);
}

/**
 * Reescrever o arquivo só quando: o conteúdo mudou, algum item mudou de "novo" para "antigo",
 * ou o lastSeenAt gravado ficou defasado há mais de 7 dias (mantém a poda funcionando sem commit a cada 12 h).
 */
export function precisaReescrever(anterior: Concurso[], proximo: Concurso[], agora: Date): boolean {
  if (assinaturaConteudo(anterior) !== assinaturaConteudo(proximo)) return true;
  const novosAntes = new Set(anterior.filter((c) => c.isNew).map((c) => c.id));
  const novosDepois = new Set(proximo.filter((c) => c.isNew).map((c) => c.id));
  if (novosAntes.size !== novosDepois.size || [...novosAntes].some((id) => !novosDepois.has(id))) return true;
  const mapaAnt = new Map(anterior.map((c) => [c.id, c]));
  return proximo.some((c) => {
    const ant = mapaAnt.get(c.id);
    return !!ant && Date.parse(c.lastSeenAt) - Date.parse(ant.lastSeenAt) > 7 * DIA_MS;
  });
}
