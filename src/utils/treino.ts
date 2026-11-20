import type { FormatoQuestao, QuestaoTreino } from '@/data/types';
import type { DateKey } from './dates';

/**
 * Seleção e correção das questões do Treino interno. Funções puras (testadas).
 */

export interface HistoricoQuestao {
  n: number;
  acertos: number;
  ultima: DateKey;
  ultimaCerta: boolean;
}

export type FiltroTreino = 'todas' | 'ineditas' | 'erradas';

export interface OpcoesTreino {
  temas: string[];
  quantidade: number;
  filtro: FiltroTreino;
  formato: 'todos' | FormatoQuestao;
  /** Gerador aleatório (0–1) — injetável para testes. */
  aleatorio?: () => number;
}

function embaralhar<T>(lista: T[], aleatorio: () => number): T[] {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(aleatorio() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/**
 * Monta o treino: filtra por tema/formato/histórico, prioriza inéditas e distribui entre os temas
 * escolhidos (rodízio), para não cair tudo de um tema só. Questões com o mesmo texto-base ficam juntas.
 */
export function montarTreino(questoes: QuestaoTreino[], historico: Record<string, HistoricoQuestao>, op: OpcoesTreino): QuestaoTreino[] {
  const aleatorio = op.aleatorio ?? Math.random;
  const temas = new Set(op.temas);
  let candidatas = questoes.filter((q) => (temas.size === 0 || temas.has(q.temaId)) && (op.formato === 'todos' || q.formato === op.formato));
  if (op.filtro === 'ineditas') candidatas = candidatas.filter((q) => !historico[q.id]);
  if (op.filtro === 'erradas') candidatas = candidatas.filter((q) => historico[q.id] && !historico[q.id]!.ultimaCerta);

  // Rodízio por tema; dentro do tema, inéditas primeiro (embaralhadas).
  const porTema = new Map<string, QuestaoTreino[]>();
  for (const q of embaralhar(candidatas, aleatorio)) {
    const lista = porTema.get(q.temaId) ?? [];
    lista.push(q);
    porTema.set(q.temaId, lista);
  }
  for (const [t, lista] of porTema) porTema.set(t, [...lista.filter((q) => !historico[q.id]), ...lista.filter((q) => historico[q.id])]);
  const filas = embaralhar([...porTema.values()], aleatorio);
  const escolhidas: QuestaoTreino[] = [];
  const vistos = new Set<string>();
  while (escolhidas.length < op.quantidade && filas.some((f) => f.length)) {
    for (const f of filas) {
      const q = f.shift();
      if (!q || vistos.has(q.id)) continue;
      // Traz junto as questões do mesmo texto-base que também são candidatas.
      const grupo = q.textoBaseId ? candidatas.filter((x) => x.textoBaseId === q.textoBaseId && !vistos.has(x.id)) : [q];
      for (const g of grupo) {
        if (escolhidas.length >= op.quantidade && g.id !== q.id) break;
        escolhidas.push(g);
        vistos.add(g.id);
      }
      if (escolhidas.length >= op.quantidade) break;
    }
  }
  return escolhidas;
}

/** Resposta: índice da alternativa (múltipla), true/false (C/E) ou null (em branco). */
export type RespostaTreino = number | boolean | null;

export function estaCerta(q: QuestaoTreino, r: RespostaTreino): boolean | null {
  if (r === null) return null;
  if (q.formato === 'multipla') return typeof r === 'number' && r === q.correta;
  return typeof r === 'boolean' && r === q.gabaritoCE;
}

export interface ResultadoTreino {
  total: number;
  acertos: number;
  erros: number;
  brancos: number;
  /** Nota líquida no padrão Cebraspe (acertos − penalidade × erros) para os itens C/E. */
  liquidaCE: number | null;
  porTema: { temaId: string; total: number; acertos: number }[];
}

export function corrigirTreino(questoes: QuestaoTreino[], respostas: Record<string, RespostaTreino>, penalidadeCE = 0): ResultadoTreino {
  let acertos = 0;
  let erros = 0;
  let brancos = 0;
  let ceAcertos = 0;
  let ceErros = 0;
  let temCE = false;
  const porTema = new Map<string, { total: number; acertos: number }>();
  for (const q of questoes) {
    const certa = estaCerta(q, respostas[q.id] ?? null);
    const t = porTema.get(q.temaId) ?? { total: 0, acertos: 0 };
    t.total += 1;
    if (certa === true) {
      acertos += 1;
      t.acertos += 1;
    } else if (certa === false) erros += 1;
    else brancos += 1;
    porTema.set(q.temaId, t);
    if (q.formato === 'certo-errado') {
      temCE = true;
      if (certa === true) ceAcertos += 1;
      if (certa === false) ceErros += 1;
    }
  }
  return {
    total: questoes.length,
    acertos,
    erros,
    brancos,
    liquidaCE: temCE ? ceAcertos - penalidadeCE * ceErros : null,
    porTema: [...porTema.entries()].map(([temaId, v]) => ({ temaId, ...v })),
  };
}

export function letra(i: number): string {
  return 'ABCDE'[i] ?? String(i + 1);
}
