import { defineConfig } from 'drizzle-kit';

/** `npm run db:generate` gera as migrações SQL em ./drizzle a partir de src/db/schema.ts (sem banco). */
export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema.ts',
  out: './drizzle',
});
