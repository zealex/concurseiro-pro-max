import { iguais } from './iguais';
import type { CtxMerge, Remocao, Resolver } from './tipos';

/**
 * Primitivos do merge de 3 vias. `undefined` representa "ausente" (sem a chave / sem o item).
 * No modo união a base é `undefined`, então ausência em um lado nunca vira exclusão.
 */

function escolherPorPreferencia<T>(local: T, remoto: T, ctx: CtxMerge): T {
  return ctx.preferir === 'local' ? local : remoto;
}

/**
 * Atalho de todas as estruturas: se um lado não mudou nada em relação à base, vale o outro lado
 * inteiro (inclusive a ordem dos itens). Sem base (modo união) não há atalho.
 */
function ladoQueMudou<T>(base: T | undefined, local: T, remoto: T): T | undefined {
  if (base === undefined) return undefined;
  if (iguais(local, base)) return remoto;
  if (iguais(remoto, base)) return local;
  return undefined;
}

/** Valor atômico (escalar, objeto inteiro, entrada de registro, item de lista). */
export function mesclarValor<T>(base: T | undefined, local: T | undefined, remoto: T | undefined, ctx: CtxMerge, op: { resolver?: Resolver<T>; remocao?: Remocao } = {}): T | undefined {
  if (iguais(local, remoto)) return local;
  if (iguais(local, base)) return remoto; // só o remoto mudou (inclusive apagou)
  if (iguais(remoto, base)) return local; // só o local mudou
  // Os dois mudaram.
  if (local === undefined || remoto === undefined) {
    // Um apagou, o outro editou.
    return (op.remocao ?? 'vence') === 'vence' ? undefined : (local ?? remoto);
  }
  return op.resolver ? op.resolver(base, local, remoto, ctx) : escolherPorPreferencia(local, remoto, ctx);
}

/** Conjunto de strings (ordenado): some se estava na base e algum lado tirou. */
export function mesclarConjunto(base: readonly string[] | undefined, local: readonly string[], remoto: readonly string[], op: { limite?: number } = {}): string[] {
  const limitar = (xs: string[]) => (op.limite !== undefined ? xs.slice(-op.limite) : xs);
  const atalho = ladoQueMudou(base, local, remoto);
  if (atalho) return limitar([...new Set(atalho)].sort());
  const sb = new Set(base ?? []);
  const sl = new Set(local);
  const sr = new Set(remoto);
  const todos = [...new Set([...local, ...remoto])];
  return limitar(todos.filter((x) => !(sb.has(x) && (!sl.has(x) || !sr.has(x)))).sort());
}

/** Registro chave → valor (cada entrada é atômica). Chaves em ordem alfabética (determinístico). */
export function mesclarRegistro<V>(
  base: Readonly<Record<string, V>> | undefined,
  local: Readonly<Record<string, V>>,
  remoto: Readonly<Record<string, V>>,
  ctx: CtxMerge,
  op: { resolver?: Resolver<V>; remocao?: Remocao } = {},
): Record<string, V> {
  const atalho = ladoQueMudou(base, local, remoto);
  if (atalho) return { ...atalho };
  const chaves = new Set([...Object.keys(base ?? {}), ...Object.keys(local), ...Object.keys(remoto)]);
  const out: Record<string, V> = {};
  for (const k of [...chaves].sort()) {
    const v = mesclarValor(base?.[k], local[k], remoto[k], ctx, op);
    if (v !== undefined) out[k] = v;
  }
  return out;
}

function porId<T extends { id: string }>(lista: readonly T[]): Map<string, T> {
  const m = new Map<string, T>();
  for (const item of lista) if (!m.has(item.id)) m.set(item.id, item);
  return m;
}

/**
 * Lista de itens com `id` (cada item é atômico). Mantém a ordem local; itens que só existem no
 * remoto entram no início ou no fim (na ordem do remoto). Ids duplicados: vale o primeiro.
 */
export function mesclarListaPorId<T extends { id: string }>(
  base: readonly T[] | undefined,
  local: readonly T[],
  remoto: readonly T[],
  ctx: CtxMerge,
  op: { insercao: 'inicio' | 'fim'; resolver?: Resolver<T>; remocao?: Remocao },
): T[] {
  const atalho = ladoQueMudou(base, local, remoto);
  if (atalho) return [...atalho];
  const mb = porId(base ?? []);
  const ml = porId(local);
  const mr = porId(remoto);
  const vistos = new Set<string>();
  const mantidos: T[] = [];
  for (const id of ml.keys()) {
    vistos.add(id);
    const v = mesclarValor(mb.get(id), ml.get(id), mr.get(id), ctx, op);
    if (v !== undefined) mantidos.push(v);
  }
  const novos: T[] = [];
  for (const id of mr.keys()) {
    if (vistos.has(id)) continue;
    vistos.add(id);
    const v = mesclarValor(mb.get(id), undefined, mr.get(id), ctx, op);
    if (v !== undefined) novos.push(v);
  }
  return op.insercao === 'inicio' ? [...novos, ...mantidos] : [...mantidos, ...novos];
}

function selecionar(o: Readonly<Record<string, unknown>> | undefined, chaves: readonly string[]): Record<string, unknown> | undefined {
  if (o === undefined) return undefined;
  const out: Record<string, unknown> = {};
  for (const k of chaves) if (o[k] !== undefined) out[k] = o[k];
  return out;
}

/** Objeto mesclado campo a campo; campos de um mesmo grupo mudam juntos (unidade atômica). */
export function mesclarCampos<T extends object>(base: T | undefined, local: T, remoto: T, ctx: CtxMerge, op: { grupos?: readonly (readonly string[])[] } = {}): T {
  const atalho = ladoQueMudou(base, local, remoto);
  if (atalho) return { ...atalho };
  const b = base as Readonly<Record<string, unknown>> | undefined;
  const l = local as Readonly<Record<string, unknown>>;
  const r = remoto as Readonly<Record<string, unknown>>;
  const out: Record<string, unknown> = {};
  const agrupados = new Set<string>();
  for (const grupo of op.grupos ?? []) {
    for (const k of grupo) agrupados.add(k);
    const v = mesclarValor(selecionar(b, grupo), selecionar(l, grupo), selecionar(r, grupo), ctx);
    if (v) for (const k of grupo) if (v[k] !== undefined) out[k] = v[k];
  }
  const chaves = new Set([...Object.keys(b ?? {}), ...Object.keys(l), ...Object.keys(r)]);
  for (const k of [...chaves].sort()) {
    if (agrupados.has(k)) continue;
    const v = mesclarValor(b?.[k], l[k], r[k], ctx);
    if (v !== undefined) out[k] = v;
  }
  return out as T;
}
