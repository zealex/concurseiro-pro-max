import type { PgDatabase, PgQueryResultHKT } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { schema } from './schema';

/** Banco usado pela API (Postgres em produção; PGlite nos testes). */
export type BancoDados = PgDatabase<PgQueryResultHKT, typeof schema>;

export function conectar(url: string) {
  const sql = postgres(url, { max: 10, idle_timeout: 30, connect_timeout: 15 });
  const db = drizzle(sql, { schema }) as unknown as BancoDados;
  return { db, fechar: () => sql.end({ timeout: 5 }), sql };
}
