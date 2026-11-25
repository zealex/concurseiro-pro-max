import { expoClient } from '@better-auth/expo/client';
import { createAuthClient } from 'better-auth/client';
import { API_URL, ESQUEMA_APP } from '@/config';
import { armazenamentoSessao } from './armazenamentoSessao.native';
import type { ClienteAuth, OpcoesSessao } from './tipos';

/**
 * Cliente de autenticação no Android/iOS: o cookie da sessão fica no cofre do sistema (Keychain/
 * Keystore, com reserva no armazenamento privado do app se o cofre não funcionar — ver
 * armazenamentoSessao.native.ts) e vai num cabeçalho Cookie em cada requisição. Login com Google abre
 * o navegador do sistema (Custom Tabs / ASWebAuthenticationSession) e volta pelo deep link
 * concurseiropromax://.
 */
const cliente = createAuthClient({
  baseURL: API_URL,
  plugins: [expoClient({ scheme: ESQUEMA_APP, storagePrefix: 'concurseiro', storage: armazenamentoSessao })],
});

export const authClient = cliente as unknown as ClienteAuth;

export const PLATAFORMA_NATIVA = true;

export async function opcoesSessao(): Promise<OpcoesSessao> {
  const cookie = await cliente.getCookie();
  return { credentials: 'omit', headers: cookie ? { Cookie: cookie } : {} };
}
