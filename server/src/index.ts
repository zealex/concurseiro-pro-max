import { serve } from '@hono/node-server';
import { criarApp } from './app';
import { criarAuth } from './auth/auth';
import { conectar } from './db/cliente';
import { criarMensageiroConsole, criarMensageiroResend } from './email/enviar';
import { lerAmbiente } from './env';
import { criarRepoSync } from './sync/repo';

const env = lerAmbiente();
const { db, fechar } = conectar(env.DATABASE_URL);

if (env.NODE_ENV === 'production' && !env.RESEND_API_KEY) {
  console.warn('[api] RESEND_API_KEY ausente: e-mails de verificação e de senha só aparecerão no log.');
}
const mensageiro = env.RESEND_API_KEY ? criarMensageiroResend(env.RESEND_API_KEY, env.EMAIL_FROM) : criarMensageiroConsole();
const auth = criarAuth({ db, env, mensageiro });
const app = criarApp({ db, auth, repo: criarRepoSync(db), env });

const servidor = serve({ fetch: app.fetch, port: env.PORT, hostname: '::' }, (info) => {
  console.log(`[api] ouvindo na porta ${info.port} (${env.NODE_ENV})`);
});

let encerrando = false;
async function encerrar(sinal: string) {
  if (encerrando) return;
  encerrando = true;
  console.log(`[api] ${sinal}: encerrando…`);
  servidor.close();
  await fechar();
  process.exit(0);
}
process.on('SIGTERM', () => void encerrar('SIGTERM'));
process.on('SIGINT', () => void encerrar('SIGINT'));
