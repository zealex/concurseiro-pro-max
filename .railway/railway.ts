/**
 * Infraestrutura do Concurseiro Pro Max na Railway (Infrastructure as Code).
 *
 *   railway config plan    → mostra o que mudaria
 *   railway config apply   → aplica no projeto "concurseiro-pro-max"
 *
 * Segredos NUNCA entram aqui: são gravados na Railway (dashboard ou `railway variable set`)
 * e referenciados com preserve().
 */
import { defineRailway, postgres, project, service, volume } from 'railway/iac';

/** us-east (Virgínia): a região da Railway mais próxima do Brasil. */
const REGIAO = 'us-east4-eqdc4a';
const umaReplica = { [REGIAO]: { numReplicas: 1 } };

const WEB_DOMINIO = 'concurseiro.zezasultratools.uk';
const WEB_URL = `https://${WEB_DOMINIO}`;
const PORTA_WEB = '8080';

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
    build: {
      builder: 'DOCKERFILE',
      dockerfilePath: 'infra/web/Dockerfile',
      // Só redeploya quando muda algo que entra no site (inclui o feed do robô em public/data).
      watchPatterns: [
        'src/**',
        'public/**',
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
    },
    // O domínio próprio (WEB_DOMINIO) é registrado com `railway domain`: o IaC não registra domínios próprios.
  });

  return project('concurseiro-pro-max', {
    variables: { managed: true },
    resources: [Postgres, postgresVolume, web],
  });
});
