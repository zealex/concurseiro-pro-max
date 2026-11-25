/**
 * Armazenamento chave-valor de baixo nível, implementado por plataforma
 * (web: IndexedDB · Android/iOS: SQLite). Ao contrário da camada antiga, falhas de leitura
 * LANÇAM erro: "não consegui ler" nunca pode ser confundido com "não há dados".
 */
export interface BackendKV {
  /** Nome curto para diagnóstico (ex.: "indexeddb"). */
  readonly nome: string;
  getItem(chave: string): Promise<string | null>;
  setItem(chave: string, valor: string): Promise<void>;
  removeItem(chave: string): Promise<void>;
  chaves(): Promise<string[]>;
  removerVarias(chaves: string[]): Promise<void>;
}

/** BackendKV em memória (testes e último recurso quando nenhum armazenamento funciona). */
export function criarBackendMemoria(nome = 'memoria'): BackendKV & { dados: Map<string, string> } {
  const dados = new Map<string, string>();
  return {
    nome,
    dados,
    async getItem(chave) {
      return dados.get(chave) ?? null;
    },
    async setItem(chave, valor) {
      dados.set(chave, valor);
    },
    async removeItem(chave) {
      dados.delete(chave);
    },
    async chaves() {
      return [...dados.keys()];
    },
    async removerVarias(chaves) {
      for (const c of chaves) dados.delete(c);
    },
  };
}
