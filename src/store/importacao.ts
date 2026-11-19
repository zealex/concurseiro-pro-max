import type { Backup } from '@/shared/backup';
import { migrarCronograma, migrarQuestoes, migrarSettings } from './migracoes';

/**
 * Preparação pura de um backup para importação: aplica as mesmas migrações do armazenamento
 * local conforme a versão do arquivo. Sem React Native — testável no Vitest.
 */
export type DadosBackup = Backup['data'];

export function prepararImportacao(b: Backup): DadosBackup {
  const v = b.schemaVersion;
  return {
    ...b.data,
    settings: b.data.settings ? migrarSettings(b.data.settings, v) : undefined,
    questoes: b.data.questoes ? migrarQuestoes(b.data.questoes, v) : undefined,
    cronograma: b.data.cronograma ? migrarCronograma(b.data.cronograma, v) : undefined,
  };
}
