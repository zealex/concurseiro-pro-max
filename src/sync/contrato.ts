/**
 * Contrato de sincronização entre o app e o servidor (server/src/sync/contrato.ts tem uma cópia;
 * um teste garante que as duas são iguais). Mudou aqui → mude lá.
 */
export const STORES_SYNC = ['settings', 'cronograma', 'questoes', 'treino', 'radar', 'checklist', 'focus'] as const;

export type StoreSync = (typeof STORES_SYNC)[number];

/** Tamanho máximo de um documento de store (JSON) aceito pelo servidor. */
export const LIMITE_DOC_BYTES = 2 * 1024 * 1024;

/** Soma máxima dos documentos de um usuário. */
export const LIMITE_USUARIO_BYTES = 10 * 1024 * 1024;

export const CONTRATO_SYNC = {
  versao: 1,
  stores: STORES_SYNC,
  limiteDocBytes: LIMITE_DOC_BYTES,
  limiteUsuarioBytes: LIMITE_USUARIO_BYTES,
} as const;

export function ehStoreSync(valor: unknown): valor is StoreSync {
  return typeof valor === 'string' && (STORES_SYNC as readonly string[]).includes(valor);
}
