import { expoClient } from '@better-auth/expo/client';
import { createAuthClient } from 'better-auth/client';
import * as SecureStore from 'expo-secure-store';
import { API_URL, ESQUEMA_APP } from '@/config';
import type { ClienteAuth, OpcoesSessao } from './tipos';

/**
 * Cliente de autenticação no Android/iOS: o cookie da sessão fica no SecureStore (Keychain/Keystore)
 * e vai num cabeçalho Cookie em cada requisição. Login com Google abre o navegador do sistema
 * (Custom Tabs / ASWebAuthenticationSession) e volta pelo deep link concurseiropromax://.
 */
const cliente = createAuthClient({
  baseURL: API_URL,
  plugins: [expoClient({ scheme: ESQUEMA_APP, storagePrefix: 'concurseiro', storage: SecureStore })],
});

export const authClient = cliente as unknown as ClienteAuth;

export const PLATAFORMA_NATIVA = true;

export async function opcoesSessao(): Promise<OpcoesSessao> {
  const cookie = await cliente.getCookie();
  return { credentials: 'omit', headers: cookie ? { Cookie: cookie } : {} };
}
