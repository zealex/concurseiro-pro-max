import { describe, expect, it } from 'vitest';
import type { Flashcard } from '@/data/types';
import { CAIXAS, contarVencidos, filaDoDia, responderCartao, type EstadoCartao } from '../flashcards';

const HOJE = '2026-11-20';
const cartao = (id: string, p: Partial<Flashcard> = {}): Flashcard => ({ id, temaId: 'lp-crase', frente: 'f', verso: 'v', ...p });

describe('caixas de Leitner', () => {
  it('cartão novo entra na caixa 0 e volta amanhã', () => {
    const e = responderCartao(undefined, 'acertei', HOJE);
    expect(e).toMatchObject({ caixa: 0, proxima: '2026-11-21', introduzidoEm: HOJE, acertos: 1, erros: 0 });
  });

  it('acertos sobem 1 → 3 → 7 → 15 → 30 dias e param na última caixa', () => {
    let e = responderCartao(undefined, 'acertei', '2026-01-01');
    const proximas: string[] = [];
    let dia = '2026-01-02';
    for (let i = 0; i < 6; i++) {
      e = responderCartao(e, 'acertei', dia);
      proximas.push(e.proxima);
      dia = e.proxima;
    }
    expect(e.caixa).toBe(CAIXAS.length - 1);
    expect(proximas.slice(0, 4)).toEqual(['2026-01-05', '2026-01-12', '2026-01-27', '2026-02-26']);
  });

  it('errar volta para a caixa 0; difícil mantém a caixa', () => {
    const base: EstadoCartao = { caixa: 3, proxima: HOJE, introduzidoEm: '2026-10-01', ultimaRevisao: '2026-11-05', acertos: 4, erros: 0 };
    expect(responderCartao(base, 'errei', HOJE)).toMatchObject({ caixa: 0, proxima: '2026-11-21', erros: 1 });
    expect(responderCartao(base, 'dificil', HOJE)).toMatchObject({ caixa: 3, proxima: '2026-12-05' });
  });

  it('cartão atrasado agenda a partir de hoje (nunca no passado)', () => {
    const atrasado: EstadoCartao = { caixa: 1, proxima: '2026-10-01', introduzidoEm: '2026-09-01', ultimaRevisao: '2026-09-28', acertos: 2, erros: 0 };
    expect(responderCartao(atrasado, 'acertei', HOJE).proxima).toBe('2026-11-27');
  });

  it('responder de novo no mesmo dia não sobe caixa nem conta em dobro', () => {
    const e1 = responderCartao(undefined, 'acertei', HOJE);
    const e2 = responderCartao(e1, 'acertei', HOJE);
    expect(e2).toBe(e1);
    expect(responderCartao(e1, 'errei', HOJE).erros).toBe(1);
  });
});

describe('fila do dia', () => {
  const cartoes = [cartao('a'), cartao('b'), cartao('c'), cartao('d'), cartao('velho', { validoAte: '2026-01-01' })];

  it('vencidos primeiro (mais atrasados antes), depois novos até o limite', () => {
    const estados: Record<string, EstadoCartao> = {
      b: { caixa: 1, proxima: '2026-11-19', introduzidoEm: '2026-11-01', ultimaRevisao: '2026-11-16', acertos: 1, erros: 0 },
      c: { caixa: 1, proxima: '2026-11-10', introduzidoEm: '2026-11-01', ultimaRevisao: '2026-11-07', acertos: 1, erros: 0 },
      d: { caixa: 2, proxima: '2026-12-01', introduzidoEm: '2026-11-01', ultimaRevisao: '2026-11-24', acertos: 2, erros: 0 },
    };
    const f = filaDoDia(cartoes, estados, HOJE, 1);
    expect(f.fila.map((c) => c.id)).toEqual(['c', 'b', 'a']);
    expect(f.vencidos).toBe(2);
    expect(f.novos).toBe(1);
  });

  it('o limite de novos desconta os já introduzidos hoje e cartões vencidos de validade somem', () => {
    const estados: Record<string, EstadoCartao> = { a: { caixa: 0, proxima: '2026-11-21', introduzidoEm: HOJE, ultimaRevisao: HOJE, acertos: 1, erros: 0 } };
    expect(filaDoDia(cartoes, estados, HOJE, 1).novos).toBe(0);
    expect(filaDoDia(cartoes, {}, HOJE, 10).fila.map((c) => c.id)).not.toContain('velho');
    expect(contarVencidos(estados, '2026-11-21')).toBe(1);
  });
});
