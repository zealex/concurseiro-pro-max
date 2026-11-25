import { expo } from '@better-auth/expo';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import type { BancoDados } from '../db/cliente';
import { schemaAuth } from '../db/schema';
import { enviarEmSegundoPlano, type Mensageiro } from '../email/enviar';
import { emailRedefinirSenha, emailVerificacao } from '../email/modelos';
import { origensPermitidas, type Ambiente } from '../env';

/** Esquema de URL do app nativo (app.json → expo.scheme). */
export const ESQUEMA_APP = 'concurseiropromax';

const DIA = 60 * 60 * 24;

export interface DepsAuth {
  db: BancoDados;
  env: Ambiente;
  mensageiro: Mensageiro;
  /** Liga o limite de tentativas fora de produção (testes). */
  limitarTentativas?: boolean;
}

export function criarAuth({ db, env, mensageiro, limitarTentativas }: DepsAuth) {
  const producao = env.NODE_ENV === 'production';
  return betterAuth({
    appName: 'Concurseiro Pro Max',
    baseURL: env.API_URL,
    basePath: '/api/auth',
    secret: env.BETTER_AUTH_SECRET,
    database: drizzleAdapter(db, { provider: 'pg', schema: schemaAuth, transaction: true }),
    trustedOrigins: [...origensPermitidas(env), `${ESQUEMA_APP}://`, 'https://appleid.apple.com', ...(producao ? [] : ['exp://'])],

    emailAndPassword: {
      enabled: true,
      requireEmailVerification: true,
      minPasswordLength: 8,
      maxPasswordLength: 128,
      revokeSessionsOnPasswordReset: true,
      resetPasswordTokenExpiresIn: 60 * 60,
      sendResetPassword: async ({ user, url }) => enviarEmSegundoPlano(mensageiro, emailRedefinirSenha(user.email, url)),
    },
    emailVerification: {
      sendOnSignUp: true,
      autoSignInAfterVerification: true,
      expiresIn: DIA,
      sendVerificationEmail: async ({ user, url }) => enviarEmSegundoPlano(mensageiro, emailVerificacao(user.email, user.name, url)),
    },

    socialProviders: {
      ...(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET
        ? { google: { clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET, prompt: 'select_account' as const } }
        : {}),
    },

    user: { deleteUser: { enabled: true } },

    session: {
      // Quem estuda offline não pode ser deslogado depois de uma semana sem internet.
      expiresIn: 60 * DIA,
      updateAge: DIA,
      // Ações sensíveis (excluir conta) exigem login nas últimas 24 h.
      freshAge: DIA,
    },

    rateLimit: {
      enabled: limitarTentativas ?? producao,
      storage: 'memory',
      window: 60,
      max: 120,
      customRules: {
        '/sign-in/email': { window: 60, max: 5 },
        '/sign-up/email': { window: 60 * 60, max: 10 },
        '/request-password-reset': { window: 60 * 60, max: 5 },
        '/send-verification-email': { window: 60 * 60, max: 5 },
      },
    },

    advanced: {
      // Atrás do proxy da Railway, o IP do cliente vem no X-Real-IP (o X-Forwarded-For pode ser forjado
      // pelo próprio cliente; fica só como reserva).
      ipAddress: { ipAddressHeaders: ['x-real-ip', 'x-forwarded-for'] },
    },

    plugins: [expo()],
  });
}

export type Auth = ReturnType<typeof criarAuth>;
