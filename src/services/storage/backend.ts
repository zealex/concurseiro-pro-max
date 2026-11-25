import { createStore, del, delMany, get, keys, set, type UseStore } from 'idb-keyval';
import { fonteDoLocalStorage, migrarDeLocalStorage } from './migracaoLocalStorage';
import { criarBackendMemoria, type BackendKV } from './tipos';

/**
 * Backend da WEB: IndexedDB (cota bem maior que os ~5 MB do localStorage).
 * Android/iOS usam backend.native.ts (SQLite). Se o IndexedDB não funcionar, cai para o localStorage.
 */

function backendIndexedDB(store: UseStore): BackendKV {
  return {
    nome: 'indexeddb',
    async getItem(chave) {
      const v = await get<string>(chave, store);
      return v ?? null;
    },
    setItem: (chave, valor) => set(chave, valor, store),
    removeItem: (chave) => del(chave, store),
    async chaves() {
      return (await keys(store)).filter((k): k is string => typeof k === 'string');
    },
    removerVarias: (chaves) => delMany(chaves, store),
  };
}

function backendLocalStorage(ls: Storage): BackendKV {
  return {
    nome: 'localstorage',
    async getItem(chave) {
      return ls.getItem(chave);
    },
    async setItem(chave, valor) {
      ls.setItem(chave, valor);
    },
    async removeItem(chave) {
      ls.removeItem(chave);
    },
    async chaves() {
      return fonteDoLocalStorage(ls).chaves();
    },
    async removerVarias(chaves) {
      for (const c of chaves) ls.removeItem(c);
    },
  };
}

async function sondar(b: BackendKV): Promise<void> {
  const chave = 'cpm:sonda';
  await b.setItem(chave, '1');
  if ((await b.getItem(chave)) !== '1') throw new Error('leitura da sonda não confere');
  await b.removeItem(chave);
}

export async function criarBackendPlataforma(): Promise<BackendKV> {
  // Pede armazenamento persistente: sem isso, Safari/Chrome podem apagar dados de sites pouco usados.
  try {
    await navigator.storage?.persist?.();
  } catch {
    /* opcional */
  }
  if (typeof indexedDB !== 'undefined') {
    try {
      const b = backendIndexedDB(createStore('concurseiro-pro-max', 'kv'));
      await sondar(b);
      if (typeof localStorage !== 'undefined') await migrarDeLocalStorage(fonteDoLocalStorage(localStorage), b);
      return b;
    } catch (e) {
      console.warn('[armazenamento] IndexedDB indisponível; usando localStorage.', e);
    }
  }
  if (typeof localStorage !== 'undefined') return backendLocalStorage(localStorage);
  console.warn('[armazenamento] Nenhum armazenamento persistente disponível; os dados ficarão só na memória.');
  return criarBackendMemoria();
}
