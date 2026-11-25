import { mesclarCampos, mesclarConjunto, mesclarListaPorId, mesclarRegistro, mesclarValor } from './primitivos';
import type { CtxMerge, Doc, SpecStore } from './tipos';

/** Merge de 3 vias de um documento inteiro, campo a campo segundo a spec (sem o pós-merge). */
export function mesclarDoc<D extends Doc>(spec: SpecStore<D>, base: D | null, local: D, remoto: D, ctx: CtxMerge): D {
  const out: Record<string, unknown> = {};
  const agrupados = new Set<string>();

  for (const grupo of spec.grupos ?? []) {
    for (const k of grupo) agrupados.add(k);
    const pegar = (d: D | null) => (d ? Object.fromEntries(grupo.map((k) => [k, d[k]])) : undefined);
    const v = mesclarValor(pegar(base), pegar(local), pegar(remoto), ctx);
    for (const k of grupo) out[k] = v?.[k];
  }

  for (const [k, campo] of Object.entries(spec.campos)) {
    if (agrupados.has(k)) continue;
    const b = base?.[k];
    const l = local[k];
    const r = remoto[k];
    switch (campo.tipo) {
      case 'escalar':
      case 'objeto-atomico':
        out[k] = mesclarValor(b, l, r, ctx);
        break;
      case 'campos':
        out[k] = mesclarCampos((b ?? undefined) as object | undefined, (l ?? {}) as object, (r ?? {}) as object, ctx, campo);
        break;
      case 'conjunto':
        out[k] = mesclarConjunto(b as string[] | undefined, (l ?? []) as string[], (r ?? []) as string[], campo);
        break;
      case 'registro':
        out[k] = mesclarRegistro(b as Record<string, unknown> | undefined, (l ?? {}) as Record<string, unknown>, (r ?? {}) as Record<string, unknown>, ctx, campo);
        break;
      case 'lista-por-id':
        out[k] = mesclarListaPorId(b as { id: string }[] | undefined, (l ?? []) as { id: string }[], (r ?? []) as { id: string }[], ctx, campo);
        break;
    }
  }
  return out as D;
}

/** Merge completo: 3 vias + invariantes da store. */
export function mesclar<D extends Doc>(spec: SpecStore<D>, base: D | null, local: D, remoto: D, ctx: Partial<CtxMerge> = {}): D {
  const c: CtxMerge = { modo: ctx.modo ?? (base ? 'normal' : 'uniao'), preferir: ctx.preferir ?? 'local' };
  return spec.posMerge(mesclarDoc(spec, base, local, remoto, c));
}
