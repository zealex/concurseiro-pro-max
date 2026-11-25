/**
 * Infraestrutura do Concurseiro Pro Max na Railway (Infrastructure as Code).
 *
 *   railway config plan    → mostra o que mudaria
 *   railway config apply   → aplica no projeto "concurseiro-pro-max"
 *
 * Segredos NUNCA entram aqui: são gravados na Railway (dashboard ou `railway variable set`)
 * e referenciados com preserve().
 */
import { defineRailway, github, postgres, preserve, project, service, volume } from 'railway/iac';

/** us-east (Virgínia): a região da Railway mais próxima do Brasil. */
const REGIAO = 'us-east4-eqdc4a';
const umaReplica = { [REGIAO]: { numReplicas: 1 } };

const WEB_DOMINIO = 'concurseiro.zezasultratools.uk';
const WEB_URL = `https://${WEB_DOMINIO}`;
const PORTA_WEB = '8080';

const API_DOMINIO = 'api-concurseiro.zezasultratools.uk';
const API_URL = `https://${API_DOMINIO}`;
const PORTA_API = '8080';

/** Deploy automático a cada push em main, só depois do CI (GitHub Actions) passar. */
const REPO = 'zealex/concurseiro-pro-max';
const repo = github(REPO, { branch: 'main', checkSuites: true });

export default defineRailway(() => {
  const Postgres = postgres('Postgres', { region: REGIAO });
  Postgres.deploy = { multiRegionConfig: umaReplica };
  Postgres.networking = { privateNetworkEndpoint: 'postgres' };
  const postgresVolume = volume('postgres-volume', {
    alerts: { usage: { '100': {}, '80': {}, '95': {} } },
    allowOnlineResize: true,
    region: REGIAO,
    sizeMB: 5000,
  });

  /** Site/PWA: expo export web + Workbox, servido pelo Caddy (infra/web). */
  const web = service('web', {
    source: repo,
    build: {
      builder: 'DOCKERFILE',
      dockerfilePath: 'infra/web/Dockerfile',
      // Só redeploya quando muda algo que entra no site. O feed do robô (public/data/**) fica DE FORA:
      // o Caddy o busca direto no GitHub (infra/web/Caddyfile), e commits do robô (autor fora do
      // workspace) ficavam presos em "NEEDS_APPROVAL" na Railway. Arquivo novo em public/ → listar aqui.
      watchPatterns: [
        'src/**',
        'public/index.html',
        'public/manifest.json',
        'public/icons/**',
        'assets/**',
        'infra/web/**',
        'app.json',
        'app.config.ts',
        'package.json',
        'package-lock.json',
        'babel.config.js',
        'metro.config.js',
        'tailwind.config.js',
        'global.css',
        'nativewind-env.d.ts',
        'tsconfig.json',
        'workbox-config.cjs',
        'scripts/postbuild-web.mjs',
        '.dockerignore',
      ],
    },
    deploy: {
      multiRegionConfig: umaReplica,
      healthcheckPath: '/',
      healthcheckTimeout: 60,
      restartPolicyType: 'ON_FAILURE',
      restartPolicyMaxRetries: 5,
      sleepApplication: false,
    },
    env: {
      PORT: PORTA_WEB,
      EXPO_PUBLIC_WEB_URL: WEB_URL,
      EXPO_PUBLIC_API_URL: API_URL,
    },
    // O domínio próprio (WEB_DOMINIO) é registrado com `railway domain`: o IaC não registra domínios próprios.
  });

  /** API: contas (Better Auth) + sincronização (server/). Migrações rodam antes de cada deploy. */
  const api = service('api', {
    source: github(REPO, { branch: 'main', checkSuites: true, rootDirectory: '/server' }),
    build: {
      builder: 'DOCKERFILE',
      dockerfilePath: 'Dockerfile',
      watchPatterns: ['/server/**'],
    },
    deploy: {
      multiRegionConfig: umaReplica,
      preDeployCommand: ['node dist/migrate.js'],
      healthcheckPath: '/health',
      healthcheckTimeout: 60,
      restartPolicyType: 'ON_FAILURE',
      restartPolicyMaxRetries: 5,
      sleepApplication: false,
    },
    env: {
      NODE_ENV: 'production',
      PORT: PORTA_API,
      DATABASE_URL: Postgres.env.DATABASE_URL,
      API_URL,
      WEB_URL,
      // Segredos: gravados direto na Railway, nunca neste arquivo.
      BETTER_AUTH_SECRET: preserve(),
      GOOGLE_CLIENT_ID: preserve(),
      GOOGLE_CLIENT_SECRET: preserve(),
      RESEND_API_KEY: preserve(),
    },
    // Domínio próprio (API_DOMINIO) registrado com `railway domain`.
  });

  return project('concurseiro-pro-max', {
    variables: { managed: true },
    resources: [Postgres, postgresVolume, web, api],
  });
});
