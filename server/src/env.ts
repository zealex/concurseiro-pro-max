import { z } from 'zod';

/** Variáveis de ambiente da API (validadas na inicialização: configuração errada não sobe). */
const Env = z
  .object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().int().positive().default(3000),
    DATABASE_URL: z.string().min(1),
    /** Segredo do Better Auth (assina cookies e tokens). Mínimo de 32 caracteres. */
    BETTER_AUTH_SECRET: z.string().min(32),
    /** URL pública desta API, ex.: https://api-concurseiro.zezasultratools.uk */
    API_URL: z.url(),
    /** URL pública do site, ex.: https://concurseiro.zezasultratools.uk */
    WEB_URL: z.url(),
    /** Origens extras permitidas (separadas por vírgula), ex.: um site de testes. */
    ORIGENS_EXTRAS: z.string().default(''),
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
    RESEND_API_KEY: z.string().optional(),
    EMAIL_FROM: z.string().default('Concurseiro Pro Max <nao-responda@concurseiro.zezasultratools.uk>'),
  })
  .superRefine((e, ctx) => {
    if (Boolean(e.GOOGLE_CLIENT_ID) !== Boolean(e.GOOGLE_CLIENT_SECRET)) {
      ctx.addIssue({ code: 'custom', message: 'GOOGLE_CLIENT_ID e GOOGLE_CLIENT_SECRET vão juntos.' });
    }
  });

export type Ambiente = z.infer<typeof Env>;

export function lerAmbiente(fonte: Record<string, string | undefined> = process.env): Ambiente {
  const r = Env.safeParse(fonte);
  if (!r.success) {
    const erros = r.error.issues.map((i) => `${i.path.join('.') || '(geral)'}: ${i.message}`).join('\n  ');
    throw new Error(`Configuração inválida da API:\n  ${erros}`);
  }
  return r.data;
}

/** Origens de navegador autorizadas a chamar a API com cookies. */
export function origensPermitidas(env: Ambiente): string[] {
  const extras = env.ORIGENS_EXTRAS.split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const dev = env.NODE_ENV !== 'production' ? ['http://localhost:8081', 'http://localhost:4173', 'http://localhost:19006'] : [];
  return [...new Set([new URL(env.WEB_URL).origin, ...extras.map((u) => new URL(u).origin), ...dev])];
}
