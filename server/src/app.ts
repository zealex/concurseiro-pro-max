import { sql } from 'drizzle-orm';
import { Hono } from 'hono';
import { bodyLimit } from 'hono/body-limit';
import { compress } from 'hono/compress';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { secureHeaders } from 'hono/secure-headers';
import { ESQUEMA_APP, type Auth } from './auth/auth';
import { rotasConta } from './conta/rotas';
import type { BancoDados } from './db/cliente';
import { origensPermitidas, type Ambiente } from './env';
import { exigirOrigemPermitida, exigirSessao, validarRedirecionamentos, type VarsApi } from './middleware';
import { LIMITE_DOC_BYTES } from './sync/contrato';
import type { RepoSync } from './sync/repo';
import { rotasSync } from './sync/rotas';

export interface DepsApp {
  db: BancoDados;
  auth: Auth;
  repo: RepoSync;
  env: Ambiente;
  /** Log de requisições (só método, rota, status e tempo — nunca corpos). */
  log?: boolean;
}

export function criarApp({ db, auth, repo, env, log = true }: DepsApp) {
  const origens = origensPermitidas(env);
  const app = new Hono();

  if (log) app.use('*', logger());
  app.use('*', secureHeaders({ crossOriginResourcePolicy: 'same-site' }));
  app.use(
    '/api/*',
    cors({
      origin: (o) => (origens.includes(o) ? o : null),
      credentials: true,
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'Authorization', 'expo-origin', 'x-skip-oauth-proxy'],
      maxAge: 600,
    }),
  );
  app.use('/api/*', exigirOrigemPermitida(origens));

  app.get('/health', async (c) => {
    try {
      await db.execute(sql`select 1`);
      return c.json({ ok: true, db: true });
    } catch {
      return c.json({ ok: false, db: false }, 503);
    }
  });

  // Better Auth (cadastro, login, Google/Apple, verificação, senha, exclusão de conta).
  const esquemas = [`${ESQUEMA_APP}://`, ...(env.NODE_ENV === 'production' ? [] : ['exp://'])];
  app.use('/api/auth/*', validarRedirecionamentos(origens, esquemas));
  app.on(['GET', 'POST'], '/api/auth/*', (c) => auth.handler(c.req.raw));

  const api = new Hono<VarsApi>();
  api.use('*', exigirSessao(auth));
  api.use('*', bodyLimit({ maxSize: Math.ceil(LIMITE_DOC_BYTES * 1.25), onError: (c) => c.json({ codigo: 'grande-demais' }, 413) }));
  api.use('*', compress());
  api.route('/sync', rotasSync(repo));
  api.route('/conta', rotasConta(auth, repo));
  app.route('/api', api);

  app.notFound((c) => c.json({ codigo: 'nao-encontrado' }, 404));
  app.onError((e, c) => {
    console.error('[api] erro não tratado', e);
    return c.json({ codigo: 'erro-interno' }, 500);
  });

  return app;
}
