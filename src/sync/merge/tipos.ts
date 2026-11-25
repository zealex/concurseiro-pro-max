import type { StoreSync } from '../contrato';

/**
 * Merge de 3 vias (base, local, remoto) dos documentos de cada store.
 *
 * base   = último estado combinado com o servidor (null = desconhecido → modo "união");
 * local  = estado atual deste aparelho;
 * remoto = estado atual do servidor.
 *
 * Regra por valor: lado que não mudou em relação à base cede ao que mudou; se os dois mudaram,
 * um "resolvedor" ESCOLHE um dos lados (nunca soma) — assim o merge é idempotente e reaplicá-lo
 * depois de uma queda no meio da sincronização não duplica nada.
 */

export type Doc = Record<string, unknown>;

export interface CtxMerge {
  /** 'normal': há base; 'uniao': base desconhecida (primeiro login) — nada é apagado. */
  modo: 'normal' | 'uniao';
  /** Lado escolhido quando os dois mudaram o mesmo valor e não há resolvedor específico. */
  preferir: 'local' | 'remoto';
}

/** Escolhe um dos lados de forma determinística (não pode combinar/somar). */
export type Resolver<T> = (base: T | undefined, local: T, remoto: T, ctx: CtxMerge) => T;

/** Um lado apagou e o outro editou: 'vence' = fica apagado; 'perde' = a edição sobrevive. */
export type Remocao = 'vence' | 'perde';

export type CampoSpec =
  | { tipo: 'escalar' }
  | { tipo: 'objeto-atomico' }
  | { tipo: 'campos'; grupos?: string[][] }
  | { tipo: 'conjunto'; limite?: number }
  | { tipo: 'registro'; resolver?: Resolver<any>; remocao?: Remocao }
  | { tipo: 'lista-por-id'; insercao: 'inicio' | 'fim'; resolver?: Resolver<any>; remocao?: Remocao };

export interface SpecStore<D extends Doc = Doc> {
  store: StoreSync;
  /** Versão do formato (a mesma do `persist` da store). */
  versao: number;
  campos: { [K in keyof D]: CampoSpec };
  /** Campos escalares que mudam juntos e são mesclados como uma unidade. */
  grupos?: (keyof D & string)[][];
  /** Campos da store que ficam só no aparelho (nunca sobem para a nuvem). */
  locais: readonly string[];
  /** Estado da store → documento sincronizado (só os campos de `campos`). */
  projetar(estado: object): D;
  /** Documento de uma versão anterior → versão atual. */
  migrar(doc: unknown, deVersao: number): D;
  /** Invariantes e cascatas reaplicadas depois de todo merge (determinístico). */
  posMerge(doc: D): D;
  /** O documento tem algo do usuário (não é só o padrão)? */
  temDados(doc: D): boolean;
  padrao(): D;
}
