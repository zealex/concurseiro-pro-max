import { describe, expect, it } from 'vitest';
import { migrarCronograma, migrarEixo, migrarQuestoes, migrarSettings, migrarTrilha } from '../migracoes';

describe('migrações v1 → v2 (foco no generalista)', () => {
  it('trilhas antigas viram as equivalentes', () => {
    expect(migrarTrilha('hibrida')).toBe('generalista');
    expect(migrarTrilha('trabalho')).toBe('pericia');
    expect(migrarTrilha('municipal')).toBe('clinico');
    expect(migrarTrilha('legista')).toBe('legista');
    expect(migrarTrilha('pericia')).toBe('pericia');
    expect(migrarTrilha(undefined)).toBe('generalista');
  });

  it('settings: só a trilha muda, e só na versão antiga', () => {
    expect(migrarSettings({ trilha: 'hibrida', orcamentoMin: 200 }, 1)).toEqual({ trilha: 'generalista', orcamentoMin: 200 });
    expect(migrarSettings({ trilha: 'clinico' }, 2)).toEqual({ trilha: 'clinico' });
  });

  it('eixo é recalculado pelo tema; sem tema, trabalho → pericia', () => {
    expect(migrarEixo('tronco', 'cm-urgencia')).toBe('clinica');
    expect(migrarEixo('trabalho', 'nr07')).toBe('pericia');
    expect(migrarEixo('trabalho', null)).toBe('pericia');
    expect(migrarEixo('legal', 'tema-que-nao-existe')).toBe('legal');
    expect(migrarEixo('xyz', null)).toBe('tronco');
  });

  it('questões: sessões, erros e revisões ganham eixo/disciplina novos', () => {
    const r = migrarQuestoes(
      {
        sessoes: [
          { id: 's1', eixo: 'tronco', disciplinaId: 'clinica-medica', temaId: 'cm-infecto', total: 10, acertos: 7 },
          { id: 's2', eixo: 'trabalho', disciplinaId: 'pericia-ocupacional', temaId: null, total: 5, acertos: 5 },
        ],
        erros: [{ id: 'e1', eixo: 'trabalho', disciplinaId: 'pericia-ocupacional', temaId: 'nexo-causal' }],
        revisoes: [{ id: 'r1', eixo: 'tronco', temaId: 'cm-saude-mental' }],
      },
      1,
    );
    const sessoes = r.sessoes as { eixo: string; disciplinaId: string; total: number }[];
    expect(sessoes[0]).toMatchObject({ eixo: 'clinica', disciplinaId: 'infectologia', total: 10 });
    expect(sessoes[1]).toMatchObject({ eixo: 'pericia', disciplinaId: 'pericia-medica' });
    expect((r.erros as { disciplinaId: string }[])[0]?.disciplinaId).toBe('pericia-medica');
    expect((r.revisoes as { eixo: string }[])[0]?.eixo).toBe('clinica');
  });

  it('cronograma: descarta blocos marcados do plano antigo e preserva a ofensiva', () => {
    const r = migrarCronograma({ concluidos: { 's01-b02': { data: '2026-11-18' } }, notas: { 's01-b02': 'x' }, diasAtivos: ['2026-11-18'] }, 1);
    expect(r).toEqual({ concluidos: {}, notas: {}, diasAtivos: ['2026-11-18'] });
    const atual = { concluidos: { 's01-b02': { data: '2026-11-19' } }, notas: {}, diasAtivos: [] };
    expect(migrarCronograma(atual, 2)).toEqual(atual);
  });
});
