import { describe, expect, it } from 'vitest';
import { BACKUP_APP, validarBackup } from '../backup';

describe('validarBackup', () => {
  it('aceita um backup válido', () => {
    const r = validarBackup(
      JSON.stringify({ app: BACKUP_APP, schemaVersion: 1, exportedAt: '2026-11-18T12:00:00Z', data: { settings: { trilha: 'legista' }, questoes: { sessoes: [] } } }),
    );
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.backup.data.settings?.trilha).toBe('legista');
  });
  it('rejeita JSON inválido', () => {
    expect(validarBackup('{nope')).toEqual({ ok: false, erro: 'O arquivo não é um JSON válido.' });
  });
  it('aceita v3 e v4; a chave "treino" do v4 não é descartada', () => {
    expect(validarBackup(JSON.stringify({ app: BACKUP_APP, schemaVersion: 3, exportedAt: '', data: {} })).ok).toBe(true);
    const r = validarBackup(
      JSON.stringify({ app: BACKUP_APP, schemaVersion: 4, exportedAt: '', data: { treino: { questoes: { 'lp-crase-q01': { n: 1, acertos: 1 } }, cartoes: {}, prefs: {} } } }),
    );
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.backup.data.treino?.questoes).toEqual({ 'lp-crase-q01': { n: 1, acertos: 1 } });
  });
  it('rejeita arquivo de outro app ou de versão futura', () => {
    expect(validarBackup(JSON.stringify({ app: 'outro', schemaVersion: 1, exportedAt: '', data: {} })).ok).toBe(false);
    expect(validarBackup(JSON.stringify({ app: BACKUP_APP, schemaVersion: 99, exportedAt: '', data: {} })).ok).toBe(false);
  });
});
