import { sql } from 'drizzle-orm';
import { bigserial, boolean, check, index, integer, jsonb, pgTable, primaryKey, smallint, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';
import { STORES_SYNC } from '../sync/contrato';

const quando = (nome: string) => timestamp(nome, { withTimezone: true, mode: 'date' });

// ---------- Better Auth (tabelas do núcleo: user, session, account, verification) ----------

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull().default(false),
  image: text('image'),
  createdAt: quando('created_at').notNull().defaultNow(),
  updatedAt: quando('updated_at').notNull().defaultNow(),
});

export const session = pgTable(
  'session',
  {
    id: text('id').primaryKey(),
    expiresAt: quando('expires_at').notNull(),
    token: text('token').notNull().unique(),
    createdAt: quando('created_at').notNull().defaultNow(),
    updatedAt: quando('updated_at').notNull().defaultNow(),
    ipAddress: text('ip_address'),
    userAgent: text('user_agent'),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
  },
  (t) => [index('session_user_id_idx').on(t.userId)],
);

export const account = pgTable(
  'account',
  {
    id: text('id').primaryKey(),
    accountId: text('account_id').notNull(),
    providerId: text('provider_id').notNull(),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    accessToken: text('access_token'),
    refreshToken: text('refresh_token'),
    idToken: text('id_token'),
    accessTokenExpiresAt: quando('access_token_expires_at'),
    refreshTokenExpiresAt: quando('refresh_token_expires_at'),
    scope: text('scope'),
    password: text('password'),
    createdAt: quando('created_at').notNull().defaultNow(),
    updatedAt: quando('updated_at').notNull().defaultNow(),
  },
  (t) => [index('account_user_id_idx').on(t.userId)],
);

export const verification = pgTable(
  'verification',
  {
    id: text('id').primaryKey(),
    identifier: text('identifier').notNull(),
    value: text('value').notNull(),
    expiresAt: quando('expires_at').notNull(),
    createdAt: quando('created_at').notNull().defaultNow(),
    updatedAt: quando('updated_at').notNull().defaultNow(),
  },
  (t) => [index('verification_identifier_idx').on(t.identifier)],
);

// ---------- Sincronização ----------

const listaStores = sql.raw(STORES_SYNC.map((s) => `'${s}'`).join(', '));

/** Um documento por (usuário, store); `rev` aumenta a cada gravação (compare-and-swap). */
export const userStore = pgTable(
  'user_store',
  {
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    store: text('store').notNull(),
    rev: integer('rev').notNull(),
    schemaVersion: smallint('schema_version').notNull(),
    data: jsonb('data').notNull(),
    bytes: integer('bytes').notNull(),
    deviceId: text('device_id'),
    updatedAt: quando('updated_at').notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.store] }), check('user_store_store_valida', sql`${t.store} in (${listaStores})`)],
);

/** Cópias anteriores (para recuperar de um erro de sincronização ou de um "apagar" por engano). */
export const userStoreHistory = pgTable(
  'user_store_history',
  {
    id: bigserial('id', { mode: 'number' }).primaryKey(),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    store: text('store').notNull(),
    rev: integer('rev').notNull(),
    schemaVersion: smallint('schema_version').notNull(),
    data: jsonb('data').notNull(),
    bytes: integer('bytes').notNull(),
    deviceId: text('device_id'),
    createdAt: quando('created_at').notNull().defaultNow(),
  },
  (t) => [uniqueIndex('user_store_history_rev_uq').on(t.userId, t.store, t.rev), index('user_store_history_recentes_idx').on(t.userId, t.store, t.createdAt)],
);

export const schemaAuth = { user, session, account, verification };
export const schema = { ...schemaAuth, userStore, userStoreHistory };
