/** Chaves versionadas do armazenamento local. Mudança incompatível de formato → nova versão + migração. */
export const STORAGE_PREFIX = 'cpm:v1:';

export const STORE_KEYS = {
  settings: 'settings',
  cronograma: 'cronograma',
  questoes: 'questoes',
  radar: 'radar',
  checklist: 'checklist',
  focus: 'focus',
} as const;

export type StoreKey = keyof typeof STORE_KEYS;

export function chaveCompleta(nome: string): string {
  return nome.startsWith(STORAGE_PREFIX) ? nome : `${STORAGE_PREFIX}${nome}`;
}
