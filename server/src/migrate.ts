import { fileURLToPath } from 'node:url';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

/** Aplica as migrações SQL de ./drizzle (roda como pre-deploy na Railway). */
const url = process.env.DATABASE_URL;
if (!url) {
  console.error('DATABASE_URL não definida.');
  process.exit(1);
}

const pasta = fileURLToPath(new URL('../drizzle', import.meta.url));
const sql = postgres(url, { max: 1 });
try {
  await migrate(drizzle(sql), { migrationsFolder: pasta });
  console.log('Migrações aplicadas.');
} catch (e) {
  console.error('Falha nas migrações:', e);
  process.exitCode = 1;
} finally {
  await sql.end({ timeout: 5 });
}
