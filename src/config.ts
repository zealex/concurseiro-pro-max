/**
 * Endereços públicos do app (embutidos no build via EXPO_PUBLIC_*; os padrões são os de produção).
 * Desenvolvimento local: EXPO_PUBLIC_API_URL=http://localhost:3000 npx expo start
 */
const semBarraFinal = (u: string) => u.replace(/\/+$/, '');

export const API_URL = semBarraFinal(process.env.EXPO_PUBLIC_API_URL || 'https://api-concurseiro.zezasultratools.uk');
export const WEB_URL = semBarraFinal(process.env.EXPO_PUBLIC_WEB_URL || 'https://concurseiro.zezasultratools.uk');

/** Esquema de deep link do app nativo (app.json → expo.scheme). */
export const ESQUEMA_APP = 'concurseiropromax';
