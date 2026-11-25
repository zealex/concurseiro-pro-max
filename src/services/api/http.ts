import { API_URL } from '@/config';
import { opcoesSessao } from '@/services/auth/cliente';

/** Sem conexão, tempo esgotado ou servidor fora do ar. */
export class ErroRede extends Error {
  override name = 'ErroRede';
}

/** 401: a sessão não vale mais (expirou, foi revogada ou a conta foi excluída). */
export class ErroSessao extends Error {
  override name = 'ErroSessao';
}

/** Resposta de erro da API (409, 413, 400, 5xx…). */
export class ErroHttp extends Error {
  override name = 'ErroHttp';
  constructor(
    readonly status: number,
    readonly corpo: unknown,
  ) {
    super(`HTTP ${status}`);
  }
}

export interface OpcoesApi {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  corpo?: unknown;
  timeoutMs?: number;
}

/** Chamada à API com a sessão do usuário (cookie na web; cabeçalho Cookie no nativo). */
export async function chamarApi<T>(caminho: string, op: OpcoesApi = {}): Promise<T> {
  const sessao = await opcoesSessao();
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), op.timeoutMs ?? 20_000);
  let resp: Response;
  try {
    resp = await fetch(`${API_URL}${caminho}`, {
      method: op.method ?? (op.corpo !== undefined ? 'POST' : 'GET'),
      credentials: sessao.credentials,
      headers: { ...sessao.headers, ...(op.corpo !== undefined ? { 'Content-Type': 'application/json' } : {}) },
      body: op.corpo !== undefined ? JSON.stringify(op.corpo) : undefined,
      signal: ctrl.signal,
    });
  } catch (e) {
    throw new ErroRede((e as Error)?.name === 'AbortError' ? 'Tempo esgotado' : 'Sem conexão com o servidor');
  } finally {
    clearTimeout(timer);
  }
  if (resp.status === 401) throw new ErroSessao('Sessão expirada');
  const dados: unknown = await resp.json().catch(() => null);
  if (!resp.ok) {
    if (resp.status >= 500) throw new ErroRede(`Servidor respondeu ${resp.status}`);
    throw new ErroHttp(resp.status, dados);
  }
  return dados as T;
}
