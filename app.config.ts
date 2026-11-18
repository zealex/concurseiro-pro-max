import type { ConfigContext, ExpoConfig } from 'expo/config';

/**
 * Estende o app.json com valores vindos do ambiente:
 * - EXPO_BASE_URL: subcaminho do GitHub Pages (ex.: "/concurseiro-pro-max");
 * - EXPO_PUBLIC_CONCURSOS_FEED_URL: URL padrão do feed do Radar Sul.
 */
export default ({ config }: ConfigContext): ExpoConfig => {
  const baseUrl = process.env.EXPO_BASE_URL?.replace(/\/$/, '') ?? '';
  return {
    ...(config as ExpoConfig),
    experiments: {
      ...config.experiments,
      ...(baseUrl ? { baseUrl } : {}),
    },
    extra: {
      ...config.extra,
      baseUrl,
      concursosFeedUrl: process.env.EXPO_PUBLIC_CONCURSOS_FEED_URL ?? config.extra?.concursosFeedUrl ?? '',
    },
  };
};
