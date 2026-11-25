/**
 * Chaves versionadas do armazenamento local. Mudança incompatível de formato → nova versão + migração.
 *
 * Layout das chaves (tudo sob o prefixo "cpm:v1:"):
 *   cpm:v1:<store>                 escopo "legado" (dados de antes das contas)
 *   cpm:v1:u:<uid>:<store>         escopo de um usuário logado
 *   cpm:v1:local:<store>           escopo "sem conta" (só neste aparelho)
 *   cpm:v1:global:<nome>           dados do aparelho, fora de qualquer escopo (ex.: conta atual)
 */
export const STORAGE_PREFIX = 'cpm:v1:';

export const STORE_KEYS = {
  settings: 'settings',
  cronograma: 'cronograma',
  questoes: 'questoes',
  radar: 'radar',
  checklist: 'checklist',
  focus: 'focus',
  treino: 'treino',
} as const;

export type StoreKey = keyof typeof STORE_KEYS;

export type Escopo = { tipo: 'legado' } | { tipo: 'usuario'; uid: string } | { tipo: 'local' };

export const ESCOPO_LEGADO: Escopo = { tipo: 'legado' };
export const ESCOPO_LOCAL: Escopo = { tipo: 'local' };

/** Segmentos reservados logo após o prefixo — nunca pertencem ao escopo legado. */
const SEGMENTOS_RESERVADOS = ['u:', 'local:', 'global:'];

const UID_VALIDO = /^[A-Za-z0-9_-]{1,128}$/;

export function escopoUsuario(uid: string): Escopo {
  if (!UID_VALIDO.test(uid)) throw new Error(`Identificador de usuário inválido para o armazenamento: "${uid}"`);
  return { tipo: 'usuario', uid };
}

export function prefixoDoEscopo(e: Escopo): string {
  switch (e.tipo) {
    case 'legado':
      return STORAGE_PREFIX;
    case 'local':
      return `${STORAGE_PREFIX}local:`;
    case 'usuario':
      return `${STORAGE_PREFIX}u:${e.uid}:`;
  }
}

export function chaveNoEscopo(e: Escopo, nome: string): string {
  return `${prefixoDoEscopo(e)}${nome}`;
}

export function chaveGlobal(nome: string): string {
  return `${STORAGE_PREFIX}global:${nome}`;
}

/** A chave completa pertence ao escopo? (o legado exclui os segmentos reservados dos outros escopos) */
export function pertenceAoEscopo(chave: string, e: Escopo): boolean {
  const prefixo = prefixoDoEscopo(e);
  if (!chave.startsWith(prefixo)) return false;
  if (e.tipo !== 'legado') return true;
  const resto = chave.slice(prefixo.length);
  return !SEGMENTOS_RESERVADOS.some((s) => resto.startsWith(s));
}

export function mesmoEscopo(a: Escopo | null, b: Escopo | null): boolean {
  if (!a || !b) return a === b;
  return prefixoDoEscopo(a) === prefixoDoEscopo(b);
}

export function descreverEscopo(e: Escopo): string {
  return e.tipo === 'usuario' ? `usuário ${e.uid}` : e.tipo;
}
