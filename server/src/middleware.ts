import type { MiddlewareHandler } from 'hono';
import type { Auth } from './auth/auth';

export interface UsuarioSessao {
  id: string;
  email: string;
  name: string;
  emailVerified: boolean;
}

export type VarsApi = { Variables: { usuario: UsuarioSessao } };

/** Exige sessão válida (cookie no navegador; cabeçalho Cookie enviado pelo app nativo). */
export function exigirSessao(auth: Auth): MiddlewareHandler<VarsApi> {
  return async (c, next) => {
    const s = await auth.api.getSession({ headers: c.req.raw.headers });
    if (!s) return c.json({ codigo: 'nao-autenticado' }, 401);
    c.set('usuario', { id: s.user.id, email: s.user.email, name: s.user.name, emailVerified: s.user.emailVerified });
    await next();
  };
}

const CAMPOS_REDIRECIONAMENTO = ['callbackURL', 'redirectTo', 'errorCallbackURL', 'newUserCallbackURL'] as const;

/** Destino de redirecionamento aceitável: caminho relativo, origem permitida ou esquema do app. */
export function destinoPermitido(valor: string, origens: readonly string[], esquemas: readonly string[]): boolean {
  if (valor.startsWith('/') && !valor.startsWith('//') && !valor.startsWith('/\\')) return true;
  if (esquemas.some((e) => valor.startsWith(e))) return true;
  try {
    return origens.includes(new URL(valor).origin);
  } catch {
    return false;
  }
}

/**
 * Impede redirecionamento aberto nas rotas de autenticação: sem isto, alguém poderia cadastrar o
 * e-mail de outra pessoa com `callbackURL` apontando para um site falso, e o link legítimo do e-mail
 * de verificação levaria a vítima até lá. Vale para a URL (links de e-mail) e para o corpo JSON.
 */
export function validarRedirecionamentos(origens: readonly string[], esquemas: readonly string[]): MiddlewareHandler {
  return async (c, next) => {
    const valores: string[] = [];
    const url = new URL(c.req.url);
    for (const campo of CAMPOS_REDIRECIONAMENTO) {
      const v = url.searchParams.get(campo);
      if (v) valores.push(v);
    }
    if (c.req.method === 'POST' && c.req.header('content-type')?.includes('application/json')) {
      const corpo = (await c.req.raw.clone().json().catch(() => null)) as Record<string, unknown> | null;
      for (const campo of CAMPOS_REDIRECIONAMENTO) {
        const v = corpo?.[campo];
        if (typeof v === 'string' && v) valores.push(v);
      }
    }
    if (valores.some((v) => !destinoPermitido(v, origens, esquemas))) return c.json({ codigo: 'redirecionamento-invalido' }, 400);
    await next();
  };
}

/**
 * Proteção extra contra CSRF: requisições que mudam dados vindas de navegador precisam ser de uma
 * origem permitida. Requisições sem Origin (app nativo) passam — elas não carregam cookies de site.
 */
export function exigirOrigemPermitida(origens: readonly string[]): MiddlewareHandler {
  return async (c, next) => {
    if (c.req.method !== 'GET' && c.req.method !== 'HEAD' && c.req.method !== 'OPTIONS') {
      const origem = c.req.header('origin');
      if (origem && !origens.includes(origem)) return c.json({ codigo: 'origem-nao-permitida' }, 403);
    }
    await next();
  };
}
