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

describe('migração v2 → v3 (Conhecimentos Básicos)', () => {
  const v2 = {
    sessoes: [
      { id: 's1', eixo: 'tronco', disciplinaId: 'basicas', temaId: 'portugues', total: 10, acertos: 6 },
      { id: 's2', eixo: 'tronco', disciplinaId: 'basicas', temaId: null, total: 20, acertos: 15 },
      { id: 's3', eixo: 'tronco', disciplinaId: 'sus', temaId: 'lei8080', total: 10, acertos: 9 },
      { id: 's4', eixo: 'tronco', disciplinaId: 'basicas', temaId: 'rlm', total: 5, acertos: 2 },
    ],
    erros: [{ id: 'e1', eixo: 'tronco', disciplinaId: 'basicas', temaId: 'informatica' }],
    revisoes: [
      { id: 'r1', origem: 'erro', refId: 'e1', eixo: 'tronco', temaId: 'informatica' },
      { id: 'r2', origem: 'questoes', refId: 's2', eixo: 'tronco', temaId: null },
      { id: 'r3', origem: 'teoria', refId: 's06-b15', eixo: 'tronco', temaId: 'rlm' },
      { id: 'r4', origem: 'teoria', refId: 's01-b05', eixo: 'tronco', temaId: 'lei8080' },
    ],
  };

  it('temas de básicas vão para o eixo basicos com a disciplina nova', () => {
    const r = migrarQuestoes(v2, 2);
    const sessoes = r.sessoes as { id: string; eixo: string; disciplinaId: string }[];
    expect(sessoes[0]).toMatchObject({ eixo: 'basicos', disciplinaId: 'lingua-portuguesa' });
    expect(sessoes[1]).toMatchObject({ eixo: 'basicos', disciplinaId: 'basicas' });
    expect(sessoes[2]).toMatchObject({ eixo: 'tronco', disciplinaId: 'sus' });
    expect(sessoes[3]).toMatchObject({ eixo: 'basicos', disciplinaId: 'raciocinio-logico' });
    expect((r.erros as { eixo: string; disciplinaId: string }[])[0]).toMatchObject({ eixo: 'basicos', disciplinaId: 'nocoes-informatica' });
  });

  it('revisões herdam o eixo do tema ou do erro/sessão de origem', () => {
    const r = migrarQuestoes(v2, 2);
    expect((r.revisoes as { eixo: string }[]).map((x) => x.eixo)).toEqual(['basicos', 'basicos', 'basicos', 'tronco']);
  });

  it('é idempotente e não mexe em dados já na v3', () => {
    const uma = migrarQuestoes(v2, 2);
    expect(migrarQuestoes(uma, 2)).toEqual(uma);
    expect(migrarQuestoes(uma, 3)).toEqual(uma);
  });

  it('v1 chega à v3 passando pelas duas etapas', () => {
    const r = migrarQuestoes({ sessoes: [{ id: 'x', eixo: 'tronco', disciplinaId: 'basicas', temaId: 'etica-servico-publico', total: 4, acertos: 4 }] }, 1);
    expect((r.sessoes as { eixo: string; disciplinaId: string }[])[0]).toMatchObject({ eixo: 'basicos', disciplinaId: 'etica-publica' });
  });

  it('entrada inválida não quebra', () => {
    expect(migrarQuestoes(null, 2)).toEqual({ sessoes: [], erros: [], revisoes: [] });
    expect(migrarQuestoes({ sessoes: 'lixo', erros: [null, 3] }, 2)).toEqual({ sessoes: [], erros: [], revisoes: [] });
  });
});
