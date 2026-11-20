import { getDisciplina, getTema } from '@/data/eixos';
import { EIXOS, type Eixo } from '@/data/types';
import type { SessaoFoco, SessaoQuestoes } from '@/domain/types';
import { addDays, diffDays, startOfIsoWeek, type DateKey } from './dates';

export const LIMIAR_PONTO_FRACO = 0.7;
export const MIN_QUESTOES_PONTO_FRACO = 10;

export interface Placar {
  total: number;
  acertos: number;
  /** 0..1, null se não há questões. */
  pct: number | null;
}

export function placar(sessoes: Pick<SessaoQuestoes, 'total' | 'acertos'>[]): Placar {
  const total = sessoes.reduce((a, s) => a + s.total, 0);
  const acertos = sessoes.reduce((a, s) => a + Math.min(s.acertos, s.total), 0);
  return { total, acertos, pct: total > 0 ? acertos / total : null };
}

function agrupar<K extends string>(sessoes: SessaoQuestoes[], chave: (s: SessaoQuestoes) => K | null): Record<K, Placar> {
  const grupos = new Map<K, SessaoQuestoes[]>();
  for (const s of sessoes) {
    const k = chave(s);
    if (k === null) continue;
    grupos.set(k, [...(grupos.get(k) ?? []), s]);
  }
  const out = {} as Record<K, Placar>;
  for (const [k, lista] of grupos) out[k] = placar(lista);
  return out;
}

export function porEixo(sessoes: SessaoQuestoes[]): Record<Eixo, Placar> {
  const vazio: Placar = { total: 0, acertos: 0, pct: null };
  const g: Partial<Record<Eixo, Placar>> = agrupar(sessoes, (s) => s.eixo);
  return Object.fromEntries(EIXOS.map((e) => [e, g[e] ?? vazio])) as Record<Eixo, Placar>;
}

export function porDisciplina(sessoes: SessaoQuestoes[]): { disciplinaId: string; nome: string; eixo: Eixo; placar: Placar }[] {
  return Object.entries(agrupar(sessoes, (s) => s.disciplinaId))
    .map(([id, p]) => {
      const d = getDisciplina(id);
      return { disciplinaId: id, nome: d?.nome ?? id, eixo: d?.eixo ?? 'tronco', placar: p };
    })
    .sort((a, b) => b.placar.total - a.placar.total);
}

export function porBanca(sessoes: SessaoQuestoes[]): { banca: string; placar: Placar }[] {
  return Object.entries(agrupar(sessoes, (s) => (s.banca?.trim() ? s.banca.trim() : null)))
    .map(([banca, p]) => ({ banca, placar: p }))
    .sort((a, b) => b.placar.total - a.placar.total);
}

export interface PontoFraco {
  temaId: string;
  nome: string;
  eixo: Eixo;
  refs: string[];
  placar: Placar;
}

/** Temas com acerto < 70% e amostra mínima de 10 questões, do pior para o "menos pior". */
export function pontosFracos(
  sessoes: SessaoQuestoes[],
  op: { limiar?: number; minQuestoes?: number; max?: number } = {},
): PontoFraco[] {
  const limiar = op.limiar ?? LIMIAR_PONTO_FRACO;
  const minQ = op.minQuestoes ?? MIN_QUESTOES_PONTO_FRACO;
  return Object.entries(agrupar(sessoes, (s) => s.temaId))
    .filter(([, p]) => p.total >= minQ && p.pct !== null && p.pct < limiar)
    .map(([temaId, p]) => {
      const t = getTema(temaId);
      return { temaId, nome: t?.tema.nome ?? temaId, eixo: t?.disciplina.eixo ?? ('tronco' as Eixo), refs: t?.tema.refs ?? [], placar: p };
    })
    .sort((a, b) => (a.placar.pct ?? 0) - (b.placar.pct ?? 0) || b.placar.total - a.placar.total)
    .slice(0, op.max ?? 3);
}

/** Minutos líquidos na semana ISO (seg–dom) que contém `hoje`. */
export function minutosNaSemana(focos: Pick<SessaoFoco, 'data' | 'minutos'>[], hoje: DateKey, extras: { data: DateKey; minutos: number }[] = []): number {
  const ini = startOfIsoWeek(hoje);
  const fim = addDays(ini, 6);
  return [...focos, ...extras].filter((f) => f.data >= ini && f.data <= fim).reduce((a, f) => a + f.minutos, 0);
}

/**
 * Ofensiva (streak): dias consecutivos com atividade terminando hoje.
 * Se hoje ainda não teve atividade, conta até ontem (o dia não está perdido).
 */
export function ofensiva(diasAtivos: Iterable<DateKey>, hoje: DateKey): number {
  const set = new Set(diasAtivos);
  let cursor = set.has(hoje) ? hoje : addDays(hoje, -1);
  let n = 0;
  while (set.has(cursor)) {
    n++;
    cursor = addDays(cursor, -1);
  }
  return n;
}

export function maiorOfensiva(diasAtivos: Iterable<DateKey>): number {
  const dias = [...new Set(diasAtivos)].sort();
  let melhor = 0;
  let atual = 0;
  let anterior: DateKey | null = null;
  for (const d of dias) {
    atual = anterior && diffDays(anterior, d) === 1 ? atual + 1 : 1;
    melhor = Math.max(melhor, atual);
    anterior = d;
  }
  return melhor;
}

/** Dias até a prova (0 = hoje; negativo = já passou). */
export function diasAteProva(hoje: DateKey, prova: DateKey): number {
  return diffDays(hoje, prova);
}

/**
 * Um ponto por simulado. O simulado do app vira várias sessões (uma por tema) com o mesmo `lote`,
 * que são somadas; simulados registrados à mão (sem lote) contam um a um.
 */
export function evolucaoSimulados(sessoes: SessaoQuestoes[]): { data: DateKey; pct: number; total: number }[] {
  const grupos = new Map<string, { data: DateKey; acertos: number; total: number }>();
  for (const s of sessoes) {
    if (s.tipo !== 'simulado' || s.total <= 0) continue;
    const chave = s.lote ? `lote:${s.lote}` : `sessao:${s.id}`;
    const g = grupos.get(chave);
    if (g) {
      g.acertos += Math.min(s.acertos, s.total);
      g.total += s.total;
      if (s.data < g.data) g.data = s.data;
    } else grupos.set(chave, { data: s.data, acertos: Math.min(s.acertos, s.total), total: s.total });
  }
  return [...grupos.values()].sort((a, b) => a.data.localeCompare(b.data)).map((g) => ({ data: g.data, pct: g.acertos / g.total, total: g.total }));
}

export function formatPct(p: number | null): string {
  return p === null ? '—' : `${Math.round(p * 100)}%`;
}
