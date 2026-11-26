/**
 * Na web o feed NÃO vai no bundle (com o Brasil todo passa de 1 MB): o site lê /data/concursos-sul.json da mesma
 * origem, e o service worker guarda a última cópia para uso offline.
 */
export const FEED_EMBARCADO: unknown = null;
