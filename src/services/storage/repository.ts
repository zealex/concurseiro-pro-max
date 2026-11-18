import AsyncStorage from '@react-native-async-storage/async-storage';
import { chaveCompleta, STORAGE_PREFIX } from './keys';

/**
 * Camada de repositório tipada sobre o AsyncStorage
 * (iOS/Android: armazenamento nativo · Web: localStorage).
 * Todas as operações são tolerantes a falhas: armazenamento indisponível não derruba o app.
 */

export interface Envelope<T> {
  v: number;
  data: T;
}

export interface Repository<T> {
  get(): Promise<T | null>;
  set(valor: T): Promise<void>;
  remove(): Promise<void>;
}

export interface OpcoesRepositorio<T> {
  versao: number;
  /** Converte dados de versões anteriores; retorna null para descartar. */
  migrar?: (bruto: unknown, versaoAntiga: number) => T | null;
  /** Valida o formato atual; retorna null se inválido. */
  validar?: (bruto: unknown) => T | null;
}

export function criarRepositorio<T>(nome: string, op: OpcoesRepositorio<T>): Repository<T> {
  const chave = chaveCompleta(nome);
  return {
    async get() {
      try {
        const texto = await AsyncStorage.getItem(chave);
        if (!texto) return null;
        const env = JSON.parse(texto) as Partial<Envelope<unknown>>;
        const versao = typeof env.v === 'number' ? env.v : 0;
        if (versao !== op.versao) return op.migrar ? op.migrar(env.data, versao) : null;
        return op.validar ? op.validar(env.data) : (env.data as T);
      } catch {
        return null;
      }
    },
    async set(valor) {
      try {
        await AsyncStorage.setItem(chave, JSON.stringify({ v: op.versao, data: valor } satisfies Envelope<T>));
      } catch {
        // Cota cheia ou armazenamento indisponível: o estado continua em memória.
      }
    },
    async remove() {
      try {
        await AsyncStorage.removeItem(chave);
      } catch {
        /* ignora */
      }
    },
  };
}

/** Acesso bruto (usado pelo adaptador do Zustand e pelo backup). */
export const armazenamento = {
  async getItem(nome: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(chaveCompleta(nome));
    } catch {
      return null;
    }
  },
  async setItem(nome: string, valor: string): Promise<void> {
    try {
      await AsyncStorage.setItem(chaveCompleta(nome), valor);
    } catch {
      /* ignora */
    }
  },
  async removeItem(nome: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(chaveCompleta(nome));
    } catch {
      /* ignora */
    }
  },
  async chaves(): Promise<string[]> {
    try {
      return (await AsyncStorage.getAllKeys()).filter((k) => k.startsWith(STORAGE_PREFIX));
    } catch {
      return [];
    }
  },
  async limparTudo(): Promise<void> {
    const chaves = await armazenamento.chaves();
    try {
      await AsyncStorage.multiRemove(chaves);
    } catch {
      /* ignora */
    }
  },
};
