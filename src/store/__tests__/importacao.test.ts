import { describe, expect, it } from 'vitest';
import { BACKUP_APP, type Backup } from '@/shared/backup';
import { prepararImportacao } from '../importacao';

const backup = (schemaVersion: number, data: Backup['data']): Backup => ({ app: BACKUP_APP, schemaVersion, exportedAt: '2026-11-19T12:00:00Z', data });

describe('prepararImportacao', () => {
  it('backup v1: migra trilha, eixo pelo tema e zera a marcação do plano antigo', () => {
    const d = prepararImportacao(
      backup(1, {
        settings: { trilha: 'hibrida', orcamentoMin: 210 },
        questoes: { sessoes: [{ id: 's1', eixo: 'trabalho', disciplinaId: 'x', temaId: 'nr07', total: 10, acertos: 7 }], erros: [], revisoes: [] },
        cronograma: { concluidos: { 's01-b01': { data: '2026-01-01', plantao: false } }, notas: { 's01-b01': 'ok' }, diasAtivos: ['2026-01-01'] },
        checklist: { marcados: { 'nr07-1': '2026-01-01' } },
      }),
    );
    expect(d.settings?.trilha).toBe('generalista');
    const s = (d.questoes?.sessoes as { eixo: string; disciplinaId: string }[])[0]!;
    expect(s.eixo).toBe('pericia');
    expect(s.disciplinaId).toBe('nrs');
    expect(d.cronograma?.concluidos).toEqual({});
    expect(d.cronograma?.diasAtivos).toEqual(['2026-01-01']);
    expect(d.checklist).toEqual({ marcados: { 'nr07-1': '2026-01-01' } });
  });

  it('backup na versão atual passa sem alterações', () => {
    const dados = {
      settings: { trilha: 'legista' },
      cronograma: { concluidos: { 's02-b03': { data: '2026-11-20', plantao: false } }, notas: {}, diasAtivos: [] },
    };
    const d = prepararImportacao(backup(2, dados));
    expect(d.settings).toEqual(dados.settings);
    expect(d.cronograma).toEqual(dados.cronograma);
  });

  it('stores ausentes continuam ausentes (a tela aplica os padrões)', () => {
    const d = prepararImportacao(backup(2, {}));
    expect(d.settings).toBeUndefined();
    expect(d.questoes).toBeUndefined();
    expect(d.cronograma).toBeUndefined();
  });
});
