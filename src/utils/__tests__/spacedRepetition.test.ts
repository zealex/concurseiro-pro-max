import { describe, expect, it } from 'vitest';
import {
  concluirRevisao,
  criarItemRevisao,
  cronogramaDoCiclo,
  existeCicloAtivo,
  revisoesDevidas,
  revisoesDoDia,
} from '../spacedRepetition';

const base = () =>
  criarItemRevisao({
    id: 'r1',
    origem: 'teoria',
    refId: 's04-b07',
    temaId: 'tanato-fenomenos',
    eixo: 'legal',
    titulo: 'Tanatologia I',
    data: '2026-11-18',
    agoraIso: '2026-11-18T10:00:00.000Z',
  });

describe('ciclo D1/D7/D15/D30', () => {
  it('agenda as quatro etapas a partir da data-base', () => {
    expect(cronogramaDoCiclo('2026-11-18')).toEqual(['2026-11-19', '2026-11-25', '2026-12-03', '2026-12-18']);
  });
  it('atravessa virada de mês e de ano', () => {
    expect(cronogramaDoCiclo('2026-12-20')).toEqual(['2026-12-21', '2026-12-27', '2027-01-04', '2027-01-19']);
    expect(cronogramaDoCiclo('2028-02-28')[0]).toBe('2028-02-29'); // ano bissexto
  });
  it('novo item vence no D1', () => {
    const i = base();
    expect(i.etapa).toBe(0);
    expect(i.proxima).toBe('2026-11-19');
  });
  it('concluir avança D1 → D7 → D15 → D30 → concluído', () => {
    let i = base();
    i = concluirRevisao(i, '2026-11-19');
    expect([i.etapa, i.proxima]).toEqual([1, '2026-11-25']);
    i = concluirRevisao(i, '2026-11-25');
    expect([i.etapa, i.proxima]).toEqual([2, '2026-12-03']);
    i = concluirRevisao(i, '2026-12-03');
    expect([i.etapa, i.proxima]).toEqual([3, '2026-12-18']);
    i = concluirRevisao(i, '2026-12-18', { acerto: 0.9 });
    expect(i.status).toBe('concluido');
    expect(i.historico).toHaveLength(4);
  });
  it('acerto < 70% ou "difícil" reinicia o ciclo a partir do dia da revisão', () => {
    let i = concluirRevisao(base(), '2026-11-19');
    i = concluirRevisao(i, '2026-11-25', { acerto: 0.6 });
    expect([i.etapa, i.baseDate, i.proxima]).toEqual([0, '2026-11-25', '2026-11-26']);
    i = concluirRevisao(i, '2026-11-26', { dificil: true });
    expect([i.etapa, i.baseDate]).toEqual([0, '2026-11-26']);
    expect(i.historico.at(-1)?.resultado).toBe('dificil');
  });
  it('70% exatos não reinicia', () => {
    const i = concluirRevisao(base(), '2026-11-19', { acerto: 0.7 });
    expect(i.etapa).toBe(1);
  });
  it('revisão feita com atraso nunca agenda a próxima no passado', () => {
    let i = concluirRevisao(base(), '2026-11-19');
    i = concluirRevisao(i, '2026-12-05'); // D7 feito 10 dias atrasado
    expect(i.etapa).toBe(2);
    expect(i.proxima).toBe('2026-12-06'); // D15 original (03/12) já passou
  });
});

describe('listas do dia', () => {
  it('separa atrasadas, de hoje e próximas', () => {
    const a = { ...base(), id: 'a', proxima: '2026-11-17' };
    const b = { ...base(), id: 'b', proxima: '2026-11-18' };
    const c = { ...base(), id: 'c', proxima: '2026-11-22' };
    const d = { ...base(), id: 'd', proxima: '2026-12-30' };
    const e = { ...base(), id: 'e', proxima: '2026-11-10', status: 'concluido' as const };
    const r = revisoesDoDia([a, b, c, d, e], '2026-11-18');
    expect(r.atrasadas.map((x) => x.id)).toEqual(['a']);
    expect(r.hoje.map((x) => x.id)).toEqual(['b']);
    expect(r.proximas.map((x) => x.id)).toEqual(['c']);
    expect(revisoesDevidas([a, b, c], '2026-11-18').map((x) => x.id)).toEqual(['a', 'b']);
  });
  it('detecta ciclo ativo duplicado', () => {
    expect(existeCicloAtivo([base()], 'teoria', { refId: 's04-b07' })).toBe(true);
    expect(existeCicloAtivo([base()], 'teoria', { refId: 'outro' })).toBe(false);
  });
});
