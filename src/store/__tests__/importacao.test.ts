import { describe, expect, it } from 'vitest';
import { BACKUP_APP, BACKUP_VERSAO, type Backup } from '@/shared/backup';
import { VERSAO_CRONOGRAMA, VERSAO_QUESTOES, VERSAO_SETTINGS } from '../migracoes';
import { prepararImportacao, VERSOES_STORES } from '../importacao';

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

  it('backup v2 mantém plano e preferências e leva as básicas para o eixo novo', () => {
    const dados = {
      settings: { trilha: 'legista' },
      cronograma: { concluidos: { 's02-b03': { data: '2026-11-20', plantao: false } }, notas: {}, diasAtivos: [] },
      questoes: { sessoes: [{ id: 's', eixo: 'tronco', disciplinaId: 'basicas', temaId: 'portugues', total: 10, acertos: 8 }], erros: [], revisoes: [] },
    };
    const d = prepararImportacao(backup(2, dados));
    expect(d.settings).toEqual(dados.settings);
    expect(d.cronograma).toEqual(dados.cronograma);
    expect((d.questoes?.sessoes as { eixo: string; disciplinaId: string }[])[0]).toMatchObject({ eixo: 'basicos', disciplinaId: 'lingua-portuguesa' });
  });

  it('backup na versão atual passa sem alterações', () => {
    const dados = {
      settings: { trilha: 'clinico', orcamentoMin: 360 },
      questoes: { sessoes: [{ id: 's', eixo: 'basicos', disciplinaId: 'matematica', temaId: 'mat-juros', total: 10, acertos: 8 }], erros: [], revisoes: [] },
    };
    const d = prepararImportacao(backup(BACKUP_VERSAO, dados));
    expect(d.settings).toEqual(dados.settings);
    expect(d.questoes).toEqual(dados.questoes);
  });

  it('a tabela de versões cobre todas as versões aceitas e termina nas versões atuais dos stores', () => {
    for (let v = 1; v <= BACKUP_VERSAO; v++) expect(VERSOES_STORES[v], `backup v${v}`).toBeDefined();
    expect(VERSOES_STORES[BACKUP_VERSAO]).toEqual({ settings: VERSAO_SETTINGS, questoes: VERSAO_QUESTOES, cronograma: VERSAO_CRONOGRAMA });
  });

  it('edital-alvo malformado no backup vira null; válido é mantido', () => {
    const ruim = prepararImportacao(backup(BACKUP_VERSAO, { settings: { trilha: 'clinico', editalAlvo: { nome: 'quebrado' } } }));
    expect(ruim.settings?.editalAlvo).toBeNull();
    const edital = {
      baseId: null,
      nome: 'Meu edital',
      banca: 'X',
      provas: [{ id: 'p', nome: 'Prova', formato: 'multipla', itens: [{ rotulo: 'Português', disciplinaIds: ['lingua-portuguesa'], questoes: 10, peso: 1 }] }],
      minimoTotal: null,
      fases: [],
    };
    const ok = prepararImportacao(backup(BACKUP_VERSAO, { settings: { editalAlvo: edital } }));
    expect(ok.settings?.editalAlvo).toEqual(edital);
  });

  it('stores ausentes continuam ausentes (a tela aplica os padrões)', () => {
    const d = prepararImportacao(backup(2, {}));
    expect(d.settings).toBeUndefined();
    expect(d.questoes).toBeUndefined();
    expect(d.cronograma).toBeUndefined();
  });
});
