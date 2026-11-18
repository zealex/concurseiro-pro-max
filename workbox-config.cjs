/**
 * Service worker do PWA (gerado após `expo export -p web`).
 * - Precache do app (JS, CSS, fontes, ícones) → abre offline.
 * - Feed do Radar Sul: NetworkFirst (tenta atualizar; sem rede usa a última cópia).
 */
const base = (process.env.EXPO_BASE_URL || '').replace(/\/$/, '');

module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,css,html,ico,png,svg,ttf,woff,woff2,json}'],
  globIgnores: ['data/concursos-sul.json', '404.html'],
  maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
  swDest: 'dist/sw.js',
  navigateFallback: `${base}/index.html`,
  navigateFallbackDenylist: [/\/data\//, /\.json$/],
  cleanupOutdatedCaches: true,
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: ({ url }) => url.pathname.endsWith('/data/concursos-sul.json') || url.hostname === 'raw.githubusercontent.com',
      handler: 'NetworkFirst',
      options: {
        cacheName: 'radar-sul-feed',
        networkTimeoutSeconds: 6,
        expiration: { maxEntries: 5, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
  ],
};
