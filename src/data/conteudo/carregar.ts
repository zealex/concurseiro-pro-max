import type { BancoConteudo } from '../types';

/**
 * ÚNICO ponto de acesso aos bancos de conteúdo (resumos, questões autorais, flashcards).
 *
 * Cada banco é carregado por `import()` com caminho LITERAL — na web o Metro gera um arquivo
 * separado por disciplina, baixado só quando a disciplina é aberta (e pré-carregado pelo service
 * worker para uso offline). Nunca importe `./bancos/*` estaticamente em outro arquivo: isso puxaria
 * todo o conteúdo para o pacote inicial (há um teste que barra esse tipo de import).
 *
 * Para incluir um banco: crie `bancos/<disciplinaId>.ts` com
 *   `const banco: BancoConteudo = { … }; export default banco;`
 * e acrescente uma linha abaixo.
 */
export const CARREGADORES: Record<string, () => Promise<{ default: BancoConteudo }>> = {
  'lingua-portuguesa': () => import('./bancos/lingua-portuguesa'),
  'lingua-inglesa': () => import('./bancos/lingua-inglesa'),
  matematica: () => import('./bancos/matematica'),
  'raciocinio-logico': () => import('./bancos/raciocinio-logico'),
  'nocoes-informatica': () => import('./bancos/nocoes-informatica'),
  'direito-constitucional': () => import('./bancos/direito-constitucional'),
  'servidor-publico': () => import('./bancos/servidor-publico'),
  'etica-publica': () => import('./bancos/etica-publica'),
  'direito-administrativo': () => import('./bancos/direito-administrativo'),
};

const cache = new Map<string, Promise<BancoConteudo>>();

export function temBanco(disciplinaId: string): boolean {
  return disciplinaId in CARREGADORES;
}

export function disciplinasComBanco(): string[] {
  return Object.keys(CARREGADORES);
}

/** Carrega (uma vez) o banco da disciplina; `null` se ela ainda não tem banco. */
export function carregarBanco(disciplinaId: string): Promise<BancoConteudo | null> {
  const carregar = CARREGADORES[disciplinaId];
  if (!carregar) return Promise.resolve(null);
  let p = cache.get(disciplinaId);
  if (!p) {
    p = carregar().then((m) => m.default);
    // Falha (ex.: offline num app recém-atualizado) não fica presa no cache.
    p.catch(() => cache.delete(disciplinaId));
    cache.set(disciplinaId, p);
  }
  return p;
}

/** Carrega vários bancos em paralelo (ignora disciplinas sem banco). */
export async function carregarBancos(disciplinaIds: string[]): Promise<BancoConteudo[]> {
  const bancos = await Promise.all(disciplinaIds.map((id) => carregarBanco(id)));
  return bancos.filter((b): b is BancoConteudo => b !== null);
}
