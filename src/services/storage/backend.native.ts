import Storage from 'expo-sqlite/kv-store';
import type { BackendKV } from './tipos';

/**
 * Backend de Android/iOS: chave-valor em SQLite (expo-sqlite/kv-store).
 * Sem o teto de 6 MB do AsyncStorage no Android e sem limite de 2 MB por linha.
 */
export async function criarBackendPlataforma(): Promise<BackendKV> {
  return {
    nome: 'sqlite',
    getItem: (chave) => Storage.getItem(chave),
    setItem: (chave, valor) => Storage.setItem(chave, valor),
    removeItem: (chave) => Storage.removeItem(chave),
    chaves: () => Storage.getAllKeys(),
    removerVarias: (chaves) => Storage.multiRemove(chaves),
  };
}
