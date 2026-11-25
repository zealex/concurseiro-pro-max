import { createAuthClient } from 'better-auth/client';

const criarClienteBase = () => createAuthClient();

/** Tipo comum do cliente de autenticação (web e nativo expõem a mesma interface). */
export type ClienteAuth = ReturnType<typeof criarClienteBase>;

/** Como as requisições à API levam a sessão: cookie do navegador (web) ou cabeçalho Cookie (nativo). */
export interface OpcoesSessao {
  credentials: RequestCredentials;
  headers: Record<string, string>;
}
