import { and, desc, eq, ne, sql } from 'drizzle-orm';
import type { BancoDados } from '../db/cliente';
import { userStore, userStoreHistory } from '../db/schema';
import { LIMITE_DOC_BYTES, LIMITE_USUARIO_BYTES, type StoreSync } from './contrato';

export interface DocRemoto {
  store: StoreSync;
  rev: number;
  schemaVersion: number;
  data: unknown;
  atualizadoEm: string;
}

export interface Gravacao {
  baseRev: number;
  schemaVersion: number;
  data: Record<string, unknown>;
  deviceId?: string | null;
}

export type ResultadoGravacao =
  | { ok: true; rev: number }
  | { ok: false; codigo: 'conflito'; doc: DocRemoto }
  | { ok: false; codigo: 'versao-antiga'; schemaVersion: number }
  | { ok: false; codigo: 'grande-demais'; bytes: number; limite: number }
  | { ok: false; codigo: 'cota'; bytes: number; limite: number };

/** Política do histórico: uma cópia a cada 30 min, ou quando o documento encolhe pela metade. */
export const HISTORICO = { intervaloMs: 30 * 60 * 1000, encolhimento: 0.5, manter: 20 } as const;

type Linha = typeof userStore.$inferSelect;

function paraDoc(l: Pick<Linha, 'store' | 'rev' | 'schemaVersion' | 'data' | 'updatedAt'>): DocRemoto {
  return { store: l.store as StoreSync, rev: l.rev, schemaVersion: l.schemaVersion, data: l.data, atualizadoEm: l.updatedAt.toISOString() };
}

export function criarRepoSync(db: BancoDados, agora: () => Date = () => new Date()) {
  return {
    /** Documentos do usuário; com `revs`, só os que mudaram desde então. */
    async puxar(userId: string, revs: Partial<Record<StoreSync, number>> = {}): Promise<{ docs: DocRemoto[]; revs: Partial<Record<StoreSync, number>> }> {
      const linhas = await db.select().from(userStore).where(eq(userStore.userId, userId));
      const atuais: Partial<Record<StoreSync, number>> = {};
      for (const l of linhas) atuais[l.store as StoreSync] = l.rev;
      return { docs: linhas.filter((l) => revs[l.store as StoreSync] !== l.rev).map(paraDoc), revs: atuais };
    },

    /**
     * Grava um documento se `baseRev` ainda for a revisão atual (compare-and-swap).
     * Sem documento no servidor, aceita qualquer baseRev (na dúvida, não apaga: restaura).
     */
    async gravar(userId: string, store: StoreSync, g: Gravacao): Promise<ResultadoGravacao> {
      const json = JSON.stringify(g.data);
      const bytes = Buffer.byteLength(json, 'utf8');
      if (bytes > LIMITE_DOC_BYTES) return { ok: false, codigo: 'grande-demais', bytes, limite: LIMITE_DOC_BYTES };

      return db.transaction(async (tx) => {
        const [atual] = await tx
          .select()
          .from(userStore)
          .where(and(eq(userStore.userId, userId), eq(userStore.store, store)))
          .for('update');

        const [{ outros } = { outros: 0 }] = await tx
          .select({ outros: sql<number>`coalesce(sum(${userStore.bytes}), 0)::int` })
          .from(userStore)
          .where(and(eq(userStore.userId, userId), ne(userStore.store, store)));
        if (Number(outros) + bytes > LIMITE_USUARIO_BYTES) return { ok: false, codigo: 'cota', bytes: Number(outros) + bytes, limite: LIMITE_USUARIO_BYTES };

        if (!atual) {
          const inseridos = await tx
            .insert(userStore)
            .values({ userId, store, rev: 1, schemaVersion: g.schemaVersion, data: g.data, bytes, deviceId: g.deviceId ?? null, updatedAt: agora() })
            .onConflictDoNothing()
            .returning({ rev: userStore.rev });
          if (inseridos[0]) return { ok: true, rev: inseridos[0].rev };
          // Outra gravação criou o documento no meio do caminho.
          const [criado] = await tx.select().from(userStore).where(and(eq(userStore.userId, userId), eq(userStore.store, store)));
          return { ok: false, codigo: 'conflito', doc: paraDoc(criado!) };
        }

        if (atual.schemaVersion > g.schemaVersion) return { ok: false, codigo: 'versao-antiga', schemaVersion: atual.schemaVersion };
        if (atual.rev !== g.baseRev) return { ok: false, codigo: 'conflito', doc: paraDoc(atual) };

        // Histórico: guarda a versão que está sendo substituída quando a política pede.
        const [ultima] = await tx
          .select({ criadoEm: userStoreHistory.createdAt })
          .from(userStoreHistory)
          .where(and(eq(userStoreHistory.userId, userId), eq(userStoreHistory.store, store)))
          .orderBy(desc(userStoreHistory.createdAt))
          .limit(1);
        const encolheu = bytes < atual.bytes * HISTORICO.encolhimento;
        const antiga = !ultima || agora().getTime() - ultima.criadoEm.getTime() >= HISTORICO.intervaloMs;
        if (encolheu || antiga) {
          await tx
            .insert(userStoreHistory)
            .values({ userId, store, rev: atual.rev, schemaVersion: atual.schemaVersion, data: atual.data, bytes: atual.bytes, deviceId: atual.deviceId, createdAt: agora() })
            .onConflictDoNothing();
          await tx.execute(sql`
            delete from ${userStoreHistory}
            where ${userStoreHistory.userId} = ${userId} and ${userStoreHistory.store} = ${store}
              and ${userStoreHistory.id} not in (
                select ${userStoreHistory.id} from ${userStoreHistory}
                where ${userStoreHistory.userId} = ${userId} and ${userStoreHistory.store} = ${store}
                order by ${userStoreHistory.createdAt} desc, ${userStoreHistory.id} desc
                limit ${HISTORICO.manter}
              )`);
        }

        const [nova] = await tx
          .update(userStore)
          .set({ rev: atual.rev + 1, schemaVersion: g.schemaVersion, data: g.data, bytes, deviceId: g.deviceId ?? null, updatedAt: agora() })
          .where(and(eq(userStore.userId, userId), eq(userStore.store, store), eq(userStore.rev, atual.rev)))
          .returning({ rev: userStore.rev });
        return { ok: true, rev: nova!.rev };
      });
    },

    async historico(userId: string, store: StoreSync) {
      const linhas = await db
        .select({ rev: userStoreHistory.rev, schemaVersion: userStoreHistory.schemaVersion, bytes: userStoreHistory.bytes, criadoEm: userStoreHistory.createdAt })
        .from(userStoreHistory)
        .where(and(eq(userStoreHistory.userId, userId), eq(userStoreHistory.store, store)))
        .orderBy(desc(userStoreHistory.createdAt), desc(userStoreHistory.id));
      return linhas.map((l) => ({ ...l, criadoEm: l.criadoEm.toISOString() }));
    },

    async versao(userId: string, store: StoreSync, rev: number): Promise<DocRemoto | null> {
      const [l] = await db
        .select()
        .from(userStoreHistory)
        .where(and(eq(userStoreHistory.userId, userId), eq(userStoreHistory.store, store), eq(userStoreHistory.rev, rev)));
      return l ? { store, rev: l.rev, schemaVersion: l.schemaVersion, data: l.data, atualizadoEm: l.createdAt.toISOString() } : null;
    },
  };
}

export type RepoSync = ReturnType<typeof criarRepoSync>;
