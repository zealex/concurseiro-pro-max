import { chamarApi, ErroHttp } from '@/services/api/http';
import type { StoreSync } from './contrato';
import type { ApiSync, CorpoGravacao, DocRemoto, RespostaGravacao } from './motor';

/** ApiSync sobre HTTP (rotas /api/sync do servidor). Erros de rede/sessão sobem como ErroRede/ErroSessao. */
export const apiSync: ApiSync = {
  puxar(revs) {
    return chamarApi<{ docs: DocRemoto[]; revs: Partial<Record<StoreSync, number>> }>('/api/sync/pull', { corpo: { revs } });
  },
  async gravar(store: StoreSync, corpo: CorpoGravacao): Promise<RespostaGravacao> {
    try {
      const r = await chamarApi<{ rev: number }>(`/api/sync/${store}`, { method: 'PUT', corpo, timeoutMs: 30_000 });
      return { ok: true, rev: r.rev };
    } catch (e) {
      if (e instanceof ErroHttp && (e.status === 409 || e.status === 413)) {
        const c = e.corpo as { codigo?: string; doc?: DocRemoto; schemaVersion?: number; bytes?: number; limite?: number } | null;
        if (c?.codigo === 'conflito' && c.doc) return { ok: false, codigo: 'conflito', doc: c.doc };
        if (c?.codigo === 'versao-antiga') return { ok: false, codigo: 'versao-antiga', schemaVersion: c.schemaVersion ?? 0 };
        if (c?.codigo === 'cota') return { ok: false, codigo: 'cota', bytes: c.bytes, limite: c.limite };
        return { ok: false, codigo: 'grande-demais', bytes: c?.bytes, limite: c?.limite };
      }
      throw e;
    }
  },
};
