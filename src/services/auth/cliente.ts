import { createAuthClient } from 'better-auth/client';
import { API_URL } from '@/config';
import type { ClienteAuth, OpcoesSessao } from './tipos';

/**
 * Cliente de autenticação na WEB: a sessão é um cookie do domínio da API, enviado pelo navegador
 * (credentials: 'include'). O site e a API são o mesmo "site" (zezasultratools.uk), então o cookie
 * SameSite=Lax funciona sem cookies de terceiros. Android/iOS usam cliente.native.ts.
 */
export const authClient: ClienteAuth = createAuthClient({ baseURL: API_URL, fetchOptions: { credentials: 'include' } });

export const PLATAFORMA_NATIVA = false;

export async function opcoesSessao(): Promise<OpcoesSessao> {
  return { credentials: 'include', headers: {} };
}
