import { fileURLToPath } from 'node:url';
import { PGlite } from '@electric-sql/pglite';
import { drizzle } from 'drizzle-orm/pglite';
import { migrate } from 'drizzle-orm/pglite/migrator';
import { criarApp } from '../src/app';
import { criarAuth } from '../src/auth/auth';
import type { BancoDados } from '../src/db/cliente';
import { schema } from '../src/db/schema';
import type { Email } from '../src/email/enviar';
import { lerAmbiente } from '../src/env';
import { criarRepoSync } from '../src/sync/repo';

export const WEB = 'http://localhost:8081';
export const API = 'http://localhost:3000';
export const SENHA = 'senha-forte-123';

/** API completa sobre um Postgres em memória (PGlite), com e-mails capturados e relógio controlável. */
export async function criarAmbienteTeste() {
  const cliente = new PGlite();
  await migrate(drizzle(cliente), { migrationsFolder: fileURLToPath(new URL('../drizzle', import.meta.url)) });
  const db = drizzle(cliente, { schema }) as unknown as BancoDados;

  const emails: Email[] = [];
  const mensageiro = {
    async enviar(e: Email) {
      emails.push(e);
    },
  };
  const env = lerAmbiente({ NODE_ENV: 'test', DATABASE_URL: 'pglite', BETTER_AUTH_SECRET: 'teste-'.padEnd(48, 'x'), API_URL: API, WEB_URL: WEB });
  const relogio = { agora: new Date('2026-11-25T12:00:00Z') };
  const auth = criarAuth({ db, env, mensageiro, limitarTentativas: true });
  const repo = criarRepoSync(db, () => relogio.agora);
  const app = criarApp({ db, auth, repo, env, log: false });

  let ip = 1;
  /** Cada chamada usa um IP diferente, para o limite de tentativas não vazar entre testes. */
  const novoIp = () => `10.0.0.${ip++}`;

  async function req(caminho: string, init: { method?: string; body?: unknown; cookie?: string; origem?: string | null; ip?: string } = {}) {
    const headers = new Headers({ 'x-forwarded-for': init.ip ?? '10.0.0.250' });
    if (init.origem !== null) headers.set('origin', init.origem ?? WEB);
    if (init.cookie) headers.set('cookie', init.cookie);
    if (init.body !== undefined) headers.set('content-type', 'application/json');
    return app.request(caminho, { method: init.method ?? (init.body !== undefined ? 'POST' : 'GET'), headers, body: init.body !== undefined ? JSON.stringify(init.body) : undefined }, {});
  }

  const tick = () => new Promise((r) => setTimeout(r, 0));

  function cookieDe(resp: Response): string {
    return resp.headers
      .getSetCookie()
      .map((c) => c.split(';')[0]!)
      .filter((c) => !c.endsWith('='))
      .join('; ');
  }

  async function ultimoLink(para: string): Promise<URL> {
    await tick();
    const e = [...emails].reverse().find((x) => x.para === para);
    if (!e) throw new Error(`nenhum e-mail para ${para}`);
    const m = e.texto.match(/https?:\/\/\S+/);
    if (!m) throw new Error('e-mail sem link');
    return new URL(m[0]);
  }

  async function cadastrar(email: string, senha = SENHA, nome = 'Teste') {
    return req('/api/auth/sign-up/email', { body: { email, password: senha, name: nome, callbackURL: `${WEB}/entrar?verificado=1` }, ip: novoIp() });
  }

  async function verificar(email: string) {
    const link = await ultimoLink(email);
    return req(`${link.pathname}${link.search}`, { origem: null });
  }

  async function entrar(email: string, senha = SENHA, ipFixo?: string) {
    return req('/api/auth/sign-in/email', { body: { email, password: senha }, ip: ipFixo ?? novoIp() });
  }

  /** Cadastra, confirma o e-mail e entra; devolve o cabeçalho Cookie da sessão. */
  async function usuarioLogado(email: string): Promise<string> {
    await cadastrar(email);
    await verificar(email);
    const r = await entrar(email);
    if (r.status !== 200) throw new Error(`login falhou: ${r.status} ${await r.text()}`);
    return cookieDe(r);
  }

  return { app, db, auth, repo, env, emails, relogio, req, cookieDe, ultimoLink, cadastrar, verificar, entrar, usuarioLogado, novoIp, fechar: () => cliente.close() };
}

export type AmbienteTeste = Awaited<ReturnType<typeof criarAmbienteTeste>>;
