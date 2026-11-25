import { describe, expect, it } from 'vitest';
import { BACKUP_APP, BACKUP_VERSAO } from '@/shared/backup';
import { NOMES_STORES } from '@/store/registro';
import * as servidor from '../../../server/src/sync/contrato';
import * as app from '../contrato';
import { SPECS } from '../specs';

describe('contrato app ↔ servidor', () => {
  it('a cópia do servidor é idêntica à do app', () => {
    expect(servidor.CONTRATO_SYNC).toEqual(app.CONTRATO_SYNC);
  });

  it('o formato de exportação do servidor é o mesmo backup do app', () => {
    expect(app.BACKUP_APP).toBe(BACKUP_APP);
    expect(app.BACKUP_VERSAO).toBe(BACKUP_VERSAO);
  });

  it('toda store persistida é sincronizada e tem spec com a versão do persist', () => {
    expect([...app.STORES_SYNC].sort()).toEqual([...NOMES_STORES].sort());
    for (const s of app.STORES_SYNC) expect(SPECS[s].store).toBe(s);
  });
});
