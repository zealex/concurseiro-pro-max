import { describe, expect, it } from 'vitest';
import type { SessaoQuestoes } from '@/domain/types';
import { diasAteProva, maiorOfensiva, minutosNaSemana, ofensiva, placar, pontosFracos, porBanca, porEixo } from '../metrics';

let n = 0;
const s = (p: Partial<SessaoQuestoes>): SessaoQuestoes => ({
  id: `s${n++}`,
  data: '2026-11-18',
  tipo: 'bateria',
  eixo: 'trabalho',
  disciplinaId: 'nrs',
  temaId: 'nr07',
  banca: 'FUNDATEC',
  total: 10,
  acertos: 8,
  duracaoMin: null,
  notas: '',
  criadoEm: '',
  ...p,
});

describe('placar', () => {
  it('soma e calcula %', () => {
    expect(placar([s({ total: 10, acertos: 7 }), s({ total: 30, acertos: 21 })])).toEqual({ total: 40, acertos: 28, pct: 0.7 });
    expect(placar([]).pct).toBeNull();
  });
  it('por eixo sempre devolve os três eixos', () => {
    const r = porEixo([s({ eixo: 'legal', total: 20, acertos: 10 })]);
    expect(r.legal.pct).toBe(0.5);
    expect(r.trabalho.total).toBe(0);
    expect(r.tronco.pct).toBeNull();
  });
  it('por banca ignora banca vazia', () => {
    expect(porBanca([s({ banca: 'FEPESE' }), s({ banca: '' }), s({ banca: null })]).map((b) => b.banca)).toEqual(['FEPESE']);
  });
});

describe('pontos fracos', () => {
  it('só temas abaixo de 70% e com pelo menos 10 questões; no máximo 3, do pior ao melhor', () => {
    const sessoes = [
      s({ temaId: 'paf', eixo: 'legal', total: 20, acertos: 8 }), // 40%
      s({ temaId: 'nr15', total: 10, acertos: 6 }), // 60%
      s({ temaId: 'nr07', total: 10, acertos: 5 }), // 50%
      s({ temaId: 'asfixias-constricao', eixo: 'legal', total: 10, acertos: 6.9 }), // 69%
      s({ temaId: 'lei8080', eixo: 'tronco', total: 5, acertos: 0 }), // amostra pequena
      s({ temaId: 'nr32', total: 10, acertos: 7 }), // 70% → não é fraco
    ];
    const r = pontosFracos(sessoes);
    expect(r.map((p) => p.temaId)).toEqual(['paf', 'nr07', 'nr15']);
    expect(r[0]?.refs).toContain('paf');
  });
});

describe('ofensiva e horas', () => {
  it('conta dias consecutivos até hoje (ou até ontem se hoje ainda não estudou)', () => {
    expect(ofensiva(['2026-11-16', '2026-11-17', '2026-11-18'], '2026-11-18')).toBe(3);
    expect(ofensiva(['2026-11-16', '2026-11-17'], '2026-11-18')).toBe(2);
    expect(ofensiva(['2026-11-15', '2026-11-17'], '2026-11-18')).toBe(1);
    expect(ofensiva([], '2026-11-18')).toBe(0);
    expect(maiorOfensiva(['2026-11-01', '2026-11-02', '2026-11-03', '2026-11-10'])).toBe(3);
  });
  it('minutos da semana ISO (seg–dom)', () => {
    const focos = [
      { data: '2026-11-16', minutos: 50 }, // segunda
      { data: '2026-11-22', minutos: 25 }, // domingo
      { data: '2026-11-15', minutos: 999 }, // domingo anterior
    ];
    expect(minutosNaSemana(focos, '2026-11-18')).toBe(75);
  });
  it('dias até a prova', () => {
    expect(diasAteProva('2026-11-18', '2027-02-16')).toBe(90);
  });
});
