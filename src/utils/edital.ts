import { getDisciplina } from '@/data/eixos';
import type { PerfilBasicas } from '@/data/selecaoBlocos';
import type { ItemEdital, ModeloEdital, ProvaEdital } from '@/data/types';
import type { SessaoQuestoes } from '@/domain/types';
import type { EditalAlvo } from '@/shared/edital';

/**
 * Cálculos do "Meu Edital": peso das básicas, perfil para o cronograma, nota projetada e
 * risco de eliminação. Funções puras (testadas).
 */

/** Básicas pesando ≥ 50% dos pontos ativam o reforço de básicas no cronograma. */
export const LIMIAR_REFORCO = 0.5;
/** Abaixo de 115% do mínimo exigido o app sinaliza atenção. */
export const MARGEM_ATENCAO = 1.15;

export function pontosDoItem(i: ItemEdital): number {
  return i.questoes * i.peso;
}

export function pontosDaProva(p: ProvaEdital): number {
  return p.itens.reduce((a, i) => a + pontosDoItem(i), 0);
}

export function pontosMaximos(e: Pick<EditalAlvo, 'provas'>): number {
  return e.provas.reduce((a, p) => a + pontosDaProva(p), 0);
}

export function totalQuestoes(e: Pick<EditalAlvo, 'provas'>): number {
  return e.provas.reduce((a, p) => a + p.itens.reduce((b, i) => b + i.questoes, 0), 0);
}

/** Item de conhecimentos básicos: todas as disciplinas do item são do eixo "basicos". */
export function itemEhBasico(i: ItemEdital): boolean {
  return i.disciplinaIds.length > 0 && i.disciplinaIds.every((id) => getDisciplina(id)?.eixo === 'basicos');
}

/** Fração dos pontos da prova que vem das básicas (0–1). */
export function fatiaBasicas(e: Pick<EditalAlvo, 'provas'>): number {
  const total = pontosMaximos(e);
  if (!total) return 0;
  const basicas = e.provas.reduce((a, p) => a + p.itens.filter(itemEhBasico).reduce((b, i) => b + pontosDoItem(i), 0), 0);
  return basicas / total;
}

/** Perfil usado pelo cronograma: só as disciplinas do edital; reforço se as básicas pesam ≥ 50%. */
export function perfilBasicas(e: Pick<EditalAlvo, 'provas'> | null): PerfilBasicas | null {
  if (!e) return null;
  const disciplinas = [...new Set(e.provas.flatMap((p) => p.itens.flatMap((i) => i.disciplinaIds)))].sort();
  return { disciplinas, reforco: fatiaBasicas(e) >= LIMIAR_REFORCO };
}

/** Converte um preset (edital lido) no edital-alvo editável do usuário. */
export function editalDoModelo(m: ModeloEdital): EditalAlvo {
  return {
    baseId: m.id,
    nome: m.nome,
    banca: m.banca,
    provas: m.provas.map((p) => ({ ...p, itens: p.itens.map((i) => ({ ...i, disciplinaIds: [...i.disciplinaIds] })) })),
    minimoTotal: m.minimoTotal ?? null,
    fases: m.fases.map((f) => ({ ...f })),
    fonteUrl: m.fonteUrl,
  };
}

/* ------------------------------------------------------------------ */
/* Nota projetada                                                      */
/* ------------------------------------------------------------------ */

export interface Desempenho {
  acertos: number;
  total: number;
}

export type MapaDesempenho = Record<string, Desempenho>;

/** Acertos/total por disciplina, somando todas as sessões registradas (inclusive Treino). */
export function desempenhoPorDisciplina(sessoes: Pick<SessaoQuestoes, 'disciplinaId' | 'total' | 'acertos'>[]): MapaDesempenho {
  const out: MapaDesempenho = {};
  for (const s of sessoes) {
    if (!s.total) continue;
    const d = (out[s.disciplinaId] ??= { acertos: 0, total: 0 });
    d.total += s.total;
    d.acertos += Math.min(s.acertos, s.total);
  }
  return out;
}

/** % de acerto do item = média das disciplinas do item, ponderada pelo nº de questões feitas. */
export function acertoDoItem(i: ItemEdital, desempenho: MapaDesempenho): number | null {
  let acertos = 0;
  let total = 0;
  for (const id of i.disciplinaIds) {
    const d = desempenho[id];
    if (!d) continue;
    acertos += d.acertos;
    total += d.total;
  }
  return total ? acertos / total : null;
}

/**
 * Pontos esperados no item com acerto `p`.
 * Múltipla escolha: questões × peso × p. Certo/Errado com penalidade: cada erro desconta
 * `penalidade` pontos (supondo todos os itens respondidos) → questões × peso × (p − penalidade × (1 − p)).
 */
export function pontosEsperados(i: ItemEdital, prova: Pick<ProvaEdital, 'formato' | 'penalidadeErro'>, p: number): number {
  const pen = prova.formato === 'certo-errado' ? (prova.penalidadeErro ?? 0) : 0;
  return i.questoes * i.peso * (p - pen * (1 - p));
}

export type StatusMinimo = 'ok' | 'atencao' | 'abaixo' | 'sem-dados' | 'sem-minimo';

export function statusMinimo(pontos: number | null, minimo: number | null | undefined): StatusMinimo {
  if (minimo === null || minimo === undefined) return 'sem-minimo';
  if (pontos === null) return 'sem-dados';
  if (pontos < minimo) return 'abaixo';
  if (pontos < minimo * MARGEM_ATENCAO) return 'atencao';
  return 'ok';
}

export interface ProjecaoItem {
  rotulo: string;
  maximo: number;
  pct: number | null;
  pontos: number | null;
  minimo: number | null;
  status: StatusMinimo;
}

export interface ProjecaoProva {
  id: string;
  nome: string;
  maximo: number;
  /** Estimativa: itens sem dados herdam o acerto médio dos itens com dados. */
  pontos: number | null;
  /** Fração dos pontos da prova com dados reais (0–1). */
  cobertura: number;
  minimo: number | null;
  status: StatusMinimo;
  itens: ProjecaoItem[];
}

export interface ProjecaoEdital {
  maximo: number;
  pontos: number | null;
  cobertura: number;
  minimoTotal: number | null;
  status: StatusMinimo;
  provas: ProjecaoProva[];
  /** Algum mínimo (item, prova ou total) projetado abaixo do exigido. */
  riscoEliminacao: boolean;
}

export function minimoDaProva(p: ProvaEdital): number | null {
  if (p.minimoPontos !== null && p.minimoPontos !== undefined) return p.minimoPontos;
  if (p.minimoPct !== null && p.minimoPct !== undefined) return (pontosDaProva(p) * p.minimoPct) / 100;
  return null;
}

export function projetarNota(e: EditalAlvo, desempenho: MapaDesempenho): ProjecaoEdital {
  const provas: ProjecaoProva[] = e.provas.map((p) => {
    const itensBase = p.itens.map((i) => ({ i, pct: acertoDoItem(i, desempenho) }));
    const comDados = itensBase.filter((x) => x.pct !== null);
    const maximo = pontosDaProva(p);
    const maxComDados = comDados.reduce((a, x) => a + pontosDoItem(x.i), 0);
    const pctMedio = maxComDados ? comDados.reduce((a, x) => a + pontosDoItem(x.i) * (x.pct as number), 0) / maxComDados : null;
    const itens: ProjecaoItem[] = itensBase.map(({ i, pct }) => {
      const pontos = pct === null ? null : pontosEsperados(i, p, pct);
      const minimo = i.minimo ?? null;
      return { rotulo: i.rotulo, maximo: pontosDoItem(i), pct, pontos, minimo, status: statusMinimo(pontos, minimo) };
    });
    const pontos = pctMedio === null ? null : p.itens.reduce((a, i, k) => a + pontosEsperados(i, p, itens[k]!.pct ?? pctMedio), 0);
    const minimo = minimoDaProva(p);
    return { id: p.id, nome: p.nome, maximo, pontos, cobertura: maximo ? maxComDados / maximo : 0, minimo, status: statusMinimo(pontos, minimo), itens };
  });
  const maximo = provas.reduce((a, p) => a + p.maximo, 0);
  const comDados = provas.filter((p) => p.pontos !== null);
  const pontos = comDados.length === provas.length ? provas.reduce((a, p) => a + (p.pontos as number), 0) : null;
  const cobertura = maximo ? provas.reduce((a, p) => a + p.cobertura * p.maximo, 0) / maximo : 0;
  const status = statusMinimo(pontos, e.minimoTotal);
  const riscoEliminacao = status === 'abaixo' || provas.some((p) => p.status === 'abaixo' || p.itens.some((i) => i.status === 'abaixo'));
  return { maximo, pontos, cobertura, minimoTotal: e.minimoTotal, status, provas, riscoEliminacao };
}

/** Divisão de tempo sugerida por item: proporcional aos pontos, com +50% para itens com mínimo próprio. */
export function divisaoDeTempo(e: Pick<EditalAlvo, 'provas'>): { rotulo: string; fatia: number; basico: boolean }[] {
  const brutos = e.provas.flatMap((p) => p.itens.map((i) => ({ rotulo: i.rotulo, basico: itemEhBasico(i), peso: pontosDoItem(i) * (i.minimo ? 1.5 : 1) })));
  const soma = brutos.reduce((a, x) => a + x.peso, 0) || 1;
  return brutos.map((x) => ({ rotulo: x.rotulo, basico: x.basico, fatia: x.peso / soma }));
}
