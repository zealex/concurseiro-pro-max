import { describe, expect, it } from 'vitest';
import type { QuestaoTreino } from '@/data/types';
import { corrigirTreino, estaCerta, montarTreino, type HistoricoQuestao } from '../treino';

const mult = (id: string, temaId: string, p: Partial<QuestaoTreino> = {}): QuestaoTreino => ({
  id,
  temaId,
  formato: 'multipla',
  dificuldade: 1,
  enunciado: 'e',
  alternativas: ['a', 'b', 'c', 'd', 'e'],
  correta: 2,
  comentario: 'comentário suficientemente longo para o validador do banco.',
  ...p,
});
const ce = (id: string, temaId: string, gabaritoCE: boolean): QuestaoTreino => ({ id, temaId, formato: 'certo-errado', dificuldade: 1, enunciado: 'item', gabaritoCE, comentario: 'x'.repeat(40) });

// Gerador determinístico para os testes.
function semente(s: number): () => number {
  let x = s;
  return () => {
    x = (x * 1103515245 + 12345) % 2147483648;
    return x / 2147483648;
  };
}

const BANCO = [
  mult('t1-q1', 't1'),
  mult('t1-q2', 't1'),
  mult('t1-q3', 't1'),
  mult('t2-q1', 't2'),
  mult('t2-q2', 't2'),
  ce('t2-q3', 't2', true),
  mult('t3-q1', 't3', { textoBaseId: 'tx1' }),
  mult('t3-q2', 't3', { textoBaseId: 'tx1' }),
];

describe('montarTreino', () => {
  it('respeita quantidade, temas e formato, sem repetir questão', () => {
    const r = montarTreino(BANCO, {}, { temas: ['t1', 't2'], quantidade: 4, filtro: 'todas', formato: 'multipla', aleatorio: semente(1) });
    expect(r).toHaveLength(4);
    expect(new Set(r.map((q) => q.id)).size).toBe(4);
    expect(r.every((q) => q.formato === 'multipla' && ['t1', 't2'].includes(q.temaId))).toBe(true);
  });

  it('distribui entre os temas (rodízio)', () => {
    const r = montarTreino(BANCO, {}, { temas: ['t1', 't2'], quantidade: 2, filtro: 'todas', formato: 'todos', aleatorio: semente(7) });
    expect(new Set(r.map((q) => q.temaId))).toEqual(new Set(['t1', 't2']));
  });

  it('filtra inéditas e erradas pelo histórico', () => {
    const h: Record<string, HistoricoQuestao> = {
      't1-q1': { n: 1, acertos: 0, ultima: '2026-11-01', ultimaCerta: false },
      't1-q2': { n: 1, acertos: 1, ultima: '2026-11-01', ultimaCerta: true },
    };
    const ineditas = montarTreino(BANCO, h, { temas: ['t1'], quantidade: 10, filtro: 'ineditas', formato: 'todos', aleatorio: semente(3) });
    expect(ineditas.map((q) => q.id)).toEqual(['t1-q3']);
    const erradas = montarTreino(BANCO, h, { temas: ['t1'], quantidade: 10, filtro: 'erradas', formato: 'todos', aleatorio: semente(3) });
    expect(erradas.map((q) => q.id)).toEqual(['t1-q1']);
  });

  it('mantém juntas as questões do mesmo texto-base', () => {
    const r = montarTreino(BANCO, {}, { temas: ['t3'], quantidade: 2, filtro: 'todas', formato: 'todos', aleatorio: semente(5) });
    expect(r.map((q) => q.id).sort()).toEqual(['t3-q1', 't3-q2']);
  });
});

describe('correção', () => {
  it('múltipla, Certo/Errado e branco', () => {
    expect(estaCerta(BANCO[0]!, 2)).toBe(true);
    expect(estaCerta(BANCO[0]!, 1)).toBe(false);
    expect(estaCerta(BANCO[5]!, true)).toBe(true);
    expect(estaCerta(BANCO[5]!, null)).toBeNull();
  });

  it('nota líquida do Cebraspe desconta erros nos itens C/E', () => {
    const qs = [ce('a-q1', 'a', true), ce('a-q2', 'a', false), ce('a-q3', 'a', true), ce('a-q4', 'a', false)];
    const r = corrigirTreino(qs, { 'a-q1': true, 'a-q2': true, 'a-q3': null, 'a-q4': false }, 0.5);
    expect(r).toMatchObject({ total: 4, acertos: 2, erros: 1, brancos: 1, liquidaCE: 1.5 });
    expect(r.porTema).toEqual([{ temaId: 'a', total: 4, acertos: 2 }]);
  });
});
