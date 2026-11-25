import { STORAGE_PREFIX } from './keys';
import type { BackendKV } from './tipos';

/** Fonte síncrona no formato do localStorage (injetável para testes). */
export interface FonteLocalStorage {
  chaves(): string[];
  ler(chave: string): string | null;
  remover(chave: string): void;
}

export function fonteDoLocalStorage(ls: Storage): FonteLocalStorage {
  return {
    chaves: () => Array.from({ length: ls.length }, (_, i) => ls.key(i)).filter((k): k is string => k !== null),
    ler: (k) => ls.getItem(k),
    remover: (k) => ls.removeItem(k),
  };
}

/**
 * Cópia única dos dados antigos (localStorage, usado pela versão anterior do app web) para o
 * backend novo. Só copia se o destino ainda não tem nenhuma chave do app — assim nunca sobrescreve
 * dados mais novos. As chaves antigas só saem do localStorage depois de gravadas e conferidas.
 * Retorna quantas chaves foram migradas.
 */
export async function migrarDeLocalStorage(origem: FonteLocalStorage, destino: BackendKV): Promise<number> {
  const antigas = origem.chaves().filter((k) => k.startsWith(STORAGE_PREFIX));
  if (antigas.length === 0) return 0;
  const existentes = (await destino.chaves()).filter((k) => k.startsWith(STORAGE_PREFIX));
  if (existentes.length > 0) return 0;

  const copiadas: string[] = [];
  for (const chave of antigas) {
    const valor = origem.ler(chave);
    if (valor === null) continue;
    await destino.setItem(chave, valor);
    if ((await destino.getItem(chave)) !== valor) throw new Error(`Falha ao conferir a cópia de ${chave}`);
    copiadas.push(chave);
  }
  for (const chave of copiadas) origem.remover(chave);
  return copiadas.length;
}
