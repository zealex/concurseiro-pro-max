import { BACKUP_VERSAO, type Backup } from '@/shared/backup';
import { migrarCronograma, migrarQuestoes, migrarSettings } from './migracoes';

/**
 * Preparação pura de um backup para importação: aplica as mesmas migrações do armazenamento
 * local conforme a versão do arquivo. Sem React Native — testável no Vitest.
 */
export type DadosBackup = Backup['data'];

export interface VersoesStores {
  settings: number;
  questoes: number;
  cronograma: number;
}

/** Versão de cada store gravada dentro de um backup de versão N. */
export const VERSOES_STORES: Record<number, VersoesStores> = {
  1: { settings: 1, questoes: 1, cronograma: 1 },
  2: { settings: 2, questoes: 2, cronograma: 2 },
  3: { settings: 2, questoes: 3, cronograma: 2 },
};

export function versoesDoBackup(schemaVersion: number): VersoesStores {
  return VERSOES_STORES[schemaVersion] ?? VERSOES_STORES[BACKUP_VERSAO]!;
}

export function prepararImportacao(b: Backup): DadosBackup {
  const v = versoesDoBackup(b.schemaVersion);
  return {
    ...b.data,
    settings: b.data.settings ? migrarSettings(b.data.settings, v.settings) : undefined,
    questoes: b.data.questoes ? migrarQuestoes(b.data.questoes, v.questoes) : undefined,
    cronograma: b.data.cronograma ? migrarCronograma(b.data.cronograma, v.cronograma) : undefined,
  };
}
