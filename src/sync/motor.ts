import { STORES_SYNC, type StoreSync } from './contrato';
import { iguais } from './merge/iguais';
import { mesclar } from './merge/mesclar';
import type { Doc, SpecStore } from './merge/tipos';

/**
 * Motor de sincronização (sem React Native: tudo injetado → testável no Vitest).
 *
 * Para cada store guarda { rev, base }: a revisão do servidor e o documento combinado com ele.
 *   - PUXAR: o servidor devolve só o que mudou; cada documento é reconciliado com o local por merge
 *     de 3 vias (base, local, remoto). Ordem segura contra quedas: aplica nas stores → espera gravar
 *     → só então salva { rev, base }. Como o merge é idempotente, repetir depois de uma queda não
 *     duplica nada.
 *   - ENVIAR: se o local difere da base, PUT com baseRev (compare-and-swap). 409 → reconcilia com o
 *     documento atual do servidor e tenta de novo (até 3 vezes).
 *   - Mudanças locais disparam envio com debounce (2,5 s; no máximo 15 s de espera).
 *   - Sem rede: tenta de novo com espera crescente. Sessão recusada (401): pausa tudo, sem apagar.
 *   - Servidor com formato mais novo que o app: aquela store fica bloqueada ("atualize o app").
 */

export interface EstadoSyncStore {
  rev: number;
  schemaVersion: number;
  base: Doc | null;
}

export interface DocRemoto {
  store: StoreSync;
  rev: number;
  schemaVersion: number;
  data: unknown;
  atualizadoEm: string;
}

export interface CorpoGravacao {
  baseRev: number;
  schemaVersion: number;
  data: Doc;
  deviceId: string;
}

export type RespostaGravacao =
  | { ok: true; rev: number }
  | { ok: false; codigo: 'conflito'; doc: DocRemoto }
  | { ok: false; codigo: 'versao-antiga'; schemaVersion: number }
  | { ok: false; codigo: 'grande-demais' | 'cota'; bytes?: number; limite?: number };

export interface ApiSync {
  puxar(revs: Partial<Record<StoreSync, number>>): Promise<{ docs: DocRemoto[]; revs: Partial<Record<StoreSync, number>> }>;
  gravar(store: StoreSync, corpo: CorpoGravacao): Promise<RespostaGravacao>;
}

/** Ponte entre o motor e uma store do app. */
export interface Vinculo {
  /** Documento sincronizável atual (cópia). */
  ler(): Doc;
  /** Aplica um documento na store (os campos só do aparelho ficam como estão). */
  aplicar(doc: Doc): void;
  /** Avisa quando algum campo sincronizável muda. */
  assinar(aoMudar: () => void): () => void;
}

export interface RepoEstadoSync {
  ler(store: StoreSync): Promise<EstadoSyncStore | null>;
  gravar(store: StoreSync, estado: EstadoSyncStore): Promise<void>;
}

export interface Temporizador {
  agora(): number;
  agendar(fn: () => void, ms: number): unknown;
  cancelar(id: unknown): void;
}

export type FaseSync = 'parado' | 'sincronizando' | 'sincronizado' | 'pendente' | 'offline' | 'sessao-expirada' | 'app-desatualizado' | 'erro';

export interface StatusSync {
  fase: FaseSync;
  pendentes: StoreSync[];
  ultimaSync: string | null;
  mensagem: string | null;
}

export const STATUS_INICIAL: StatusSync = { fase: 'parado', pendentes: [], ultimaSync: null, mensagem: null };

/** Erros que o motor sabe distinguir (a camada HTTP do app lança estes nomes). */
const ehErroRede = (e: unknown) => (e as Error)?.name === 'ErroRede';
const ehErroSessao = (e: unknown) => (e as Error)?.name === 'ErroSessao';

export interface DepsMotor {
  api: ApiSync;
  specs: { [S in StoreSync]: SpecStore };
  vinculos: { [S in StoreSync]: Vinculo };
  estado: RepoEstadoSync;
  /** Resolve quando o que foi aplicado nas stores já está no disco. */
  aguardarEscritas(): Promise<void>;
  deviceId: string;
  temporizador: Temporizador;
  aoMudarStatus?(s: StatusSync): void;
  aoSessaoExpirada?(): void;
  stores?: readonly StoreSync[];
}

export interface MotorSync {
  iniciar(): Promise<void>;
  sincronizarAgora(motivo?: string): Promise<void>;
  /** Envia já o que estiver pendente (ex.: app indo para segundo plano). */
  enviarAgora(): Promise<void>;
  parar(op?: { flush?: boolean; timeoutMs?: number }): Promise<{ pendentes: StoreSync[] }>;
  status(): StatusSync;
}

export const DEBOUNCE_MS = 2_500;
export const ESPERA_MAX_MS = 15_000;
export const BACKOFF_MS = [2_000, 5_000, 15_000, 60_000, 300_000] as const;

export function criarMotor(deps: DepsMotor): MotorSync {
  const stores = deps.stores ?? STORES_SYNC;
  const t = deps.temporizador;
  const estados = new Map<StoreSync, EstadoSyncStore | null>();
  const pendentes = new Set<StoreSync>();
  const bloqueadas = new Set<StoreSync>();
  const filas = new Map<StoreSync, Promise<unknown>>();
  let desinscrever: (() => void)[] = [];
  let ativo = false;
  let sessaoExpirada = false;
  let timerEnvio: unknown = null;
  let primeiraPendenciaEm: number | null = null;
  let timerRetry: unknown = null;
  let falhasSeguidas = 0;
  let status: StatusSync = { ...STATUS_INICIAL };

  const definirStatus = (p: Partial<StatusSync>) => {
    status = { ...status, ...p, pendentes: [...pendentes] };
    deps.aoMudarStatus?.(status);
  };

  /** Uma operação por store por vez (envio e reconciliação nunca se intercalam). */
  function naFila<T>(s: StoreSync, op: () => Promise<T>): Promise<T> {
    const anterior = filas.get(s) ?? Promise.resolve();
    const p = anterior.then(op, op);
    filas.set(
      s,
      p.catch(() => undefined),
    );
    return p;
  }

  function faseEstavel(): FaseSync {
    if (bloqueadas.size > 0) return 'app-desatualizado';
    return pendentes.size > 0 ? 'pendente' : 'sincronizado';
  }

  function mudouLocalmente(s: StoreSync): boolean {
    const base = estados.get(s)?.base ?? null;
    return !base || !iguais(deps.vinculos[s].ler(), base);
  }

  function baseMigrada(s: StoreSync): Doc | null {
    const e = estados.get(s);
    if (!e?.base) return null;
    const spec = deps.specs[s];
    return e.schemaVersion < spec.versao ? spec.migrar(e.base, e.schemaVersion) : e.base;
  }

  /** Reconcilia o local com um documento do servidor. Devolve true se o local tem algo a enviar. */
  async function reconciliar(s: StoreSync, remoto: DocRemoto): Promise<boolean> {
    const spec = deps.specs[s];
    if (remoto.schemaVersion > spec.versao) {
      bloqueadas.add(s);
      return false;
    }
    const R = spec.migrar(remoto.data, remoto.schemaVersion);
    const B = baseMigrada(s);
    const L = deps.vinculos[s].ler();
    let M: Doc;
    if (B && iguais(L, B)) M = R;
    else if (!B && !spec.temDados(L)) M = R;
    // Sem base (primeiro login/aparelho novo): união; nas preferências vale a nuvem.
    else M = mesclar(spec, B, L, R, { preferir: B ? 'local' : 'remoto' });
    if (!iguais(M, L)) {
      deps.vinculos[s].aplicar(M);
      await deps.aguardarEscritas();
    }
    const novo: EstadoSyncStore = { rev: remoto.rev, schemaVersion: spec.versao, base: R };
    estados.set(s, novo);
    await deps.estado.gravar(s, novo);
    return !iguais(M, R);
  }

  async function enviar(s: StoreSync): Promise<void> {
    if (bloqueadas.has(s)) return;
    const spec = deps.specs[s];
    for (let tentativa = 0; tentativa < 3; tentativa++) {
      const est = estados.get(s) ?? null;
      const L = deps.vinculos[s].ler();
      if (est?.base && iguais(L, est.base)) {
        pendentes.delete(s);
        return;
      }
      const r = await deps.api.gravar(s, { baseRev: est?.rev ?? 0, schemaVersion: spec.versao, data: L, deviceId: deps.deviceId });
      if (r.ok) {
        const novo: EstadoSyncStore = { rev: r.rev, schemaVersion: spec.versao, base: L };
        estados.set(s, novo);
        await deps.estado.gravar(s, novo);
        // Se mudou de novo durante o envio, continua pendente para o próximo ciclo.
        if (iguais(deps.vinculos[s].ler(), L)) pendentes.delete(s);
        return;
      }
      if (r.codigo === 'conflito') {
        await reconciliar(s, r.doc);
        continue;
      }
      if (r.codigo === 'versao-antiga') {
        bloqueadas.add(s);
        return;
      }
      throw Object.assign(new Error(r.codigo === 'cota' ? 'Limite de armazenamento da conta atingido.' : 'Dados grandes demais para sincronizar.'), {
        name: 'ErroDados',
      });
    }
  }

  async function enviarPendentes(): Promise<void> {
    for (const s of [...pendentes]) await naFila(s, () => enviar(s));
  }

  function tratarErro(e: unknown): void {
    if (ehErroSessao(e)) {
      sessaoExpirada = true;
      definirStatus({ fase: 'sessao-expirada', mensagem: 'Sessão expirada' });
      deps.aoSessaoExpirada?.();
      return;
    }
    if (ehErroRede(e)) {
      const espera = BACKOFF_MS[Math.min(falhasSeguidas, BACKOFF_MS.length - 1)]!;
      falhasSeguidas++;
      definirStatus({ fase: 'offline', mensagem: (e as Error).message });
      if (ativo) {
        if (timerRetry) t.cancelar(timerRetry);
        timerRetry = t.agendar(() => {
          timerRetry = null;
          void sincronizarAgora('nova-tentativa');
        }, espera);
      }
      return;
    }
    definirStatus({ fase: 'erro', mensagem: (e as Error)?.message ?? String(e) });
  }

  let emAndamento: Promise<void> | null = null;

  async function sincronizarAgora(_motivo = 'manual'): Promise<void> {
    if (!ativo || sessaoExpirada) return;
    // Um ciclo por vez; pedidos durante um ciclo esperam o atual e não repetem.
    if (emAndamento) return emAndamento;
    emAndamento = (async () => {
      definirStatus({ fase: 'sincronizando' });
      try {
        const revs: Partial<Record<StoreSync, number>> = {};
        for (const s of stores) {
          const rev = estados.get(s)?.rev ?? 0;
          if (rev > 0) revs[s] = rev;
        }
        const r = await deps.api.puxar(revs);
        for (const doc of r.docs) {
          if (!stores.includes(doc.store)) continue;
          const enviarDepois = await naFila(doc.store, () => reconciliar(doc.store, doc));
          if (enviarDepois) pendentes.add(doc.store);
        }
        for (const s of stores) if (mudouLocalmente(s) && !bloqueadas.has(s)) pendentes.add(s);
        await enviarPendentes();
        falhasSeguidas = 0;
        definirStatus({ fase: faseEstavel(), ultimaSync: new Date(t.agora()).toISOString(), mensagem: null });
      } catch (e) {
        tratarErro(e);
      } finally {
        emAndamento = null;
      }
    })();
    return emAndamento;
  }

  async function cicloEnvio(): Promise<void> {
    if (!ativo || sessaoExpirada || pendentes.size === 0) return;
    if (emAndamento) await emAndamento;
    definirStatus({ fase: 'sincronizando' });
    try {
      await enviarPendentes();
      falhasSeguidas = 0;
      definirStatus({ fase: faseEstavel(), ultimaSync: new Date(t.agora()).toISOString(), mensagem: null });
    } catch (e) {
      tratarErro(e);
    }
  }

  function marcarPendente(s: StoreSync): void {
    if (!ativo || bloqueadas.has(s)) return;
    pendentes.add(s);
    if (status.fase !== 'sincronizando') definirStatus({ fase: sessaoExpirada ? 'sessao-expirada' : status.fase === 'offline' ? 'offline' : 'pendente' });
    const agora = t.agora();
    primeiraPendenciaEm ??= agora;
    if (timerEnvio) t.cancelar(timerEnvio);
    const espera = Math.max(0, Math.min(DEBOUNCE_MS, primeiraPendenciaEm + ESPERA_MAX_MS - agora));
    timerEnvio = t.agendar(() => {
      timerEnvio = null;
      primeiraPendenciaEm = null;
      void cicloEnvio();
    }, espera);
  }

  return {
    async iniciar() {
      for (const s of stores) estados.set(s, await deps.estado.ler(s));
      ativo = true;
      sessaoExpirada = false;
      desinscrever = stores.map((s) => deps.vinculos[s].assinar(() => marcarPendente(s)));
      await sincronizarAgora('inicio');
    },
    sincronizarAgora,
    async enviarAgora() {
      if (timerEnvio) {
        t.cancelar(timerEnvio);
        timerEnvio = null;
        primeiraPendenciaEm = null;
      }
      await cicloEnvio();
    },
    async parar(op = {}) {
      const estavaAtivo = ativo;
      if (timerEnvio) t.cancelar(timerEnvio);
      if (timerRetry) t.cancelar(timerRetry);
      timerEnvio = timerRetry = null;
      desinscrever.forEach((d) => d());
      desinscrever = [];
      if (estavaAtivo && op.flush && !sessaoExpirada) {
        for (const s of stores) if (mudouLocalmente(s) && !bloqueadas.has(s)) pendentes.add(s);
        if (pendentes.size > 0) {
          let timer: unknown = null;
          const limite = new Promise<void>((resolve) => {
            timer = t.agendar(resolve, op.timeoutMs ?? 8_000);
          });
          await Promise.race([enviarPendentes().catch(() => undefined), limite]);
          t.cancelar(timer);
        }
      }
      ativo = false;
      if (emAndamento) await emAndamento.catch(() => undefined);
      definirStatus({ fase: 'parado' });
      return { pendentes: [...pendentes] };
    },
    status: () => status,
  };
}
