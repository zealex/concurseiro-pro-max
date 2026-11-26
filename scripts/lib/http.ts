/**
 * Cliente HTTP "educado" do robô:
 * - User-Agent genérico e identificável;
 * - respeita robots.txt (User-agent: *);
 * - intervalo mínimo entre requisições ao mesmo host;
 * - timeout, novas tentativas com espera crescente;
 * - decodifica UTF-8 ou ISO-8859-1/Windows-1252 conforme cabeçalho/meta.
 */

export const USER_AGENT = 'Mozilla/5.0 (compatible; RadarConcursosMedicosSul/1.0; coleta semanal de editais publicos)';

const INTERVALO_MS = Number(process.env.RADAR_INTERVALO_MS ?? 1500);
const TIMEOUT_MS = 25_000;
const TENTATIVAS = 3;

const ultimoAcesso = new Map<string, number>();
const robotsCache = new Map<string, RegrasRobots>();

interface RegrasRobots {
  disallow: string[];
  allow: string[];
}

const espera = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function respeitarIntervalo(host: string): Promise<void> {
  const ultimo = ultimoAcesso.get(host) ?? 0;
  const falta = ultimo + INTERVALO_MS - Date.now();
  if (falta > 0) await espera(falta);
  ultimoAcesso.set(host, Date.now());
}

/** Interpreta o robots.txt para o grupo "User-agent: *". */
export function interpretarRobots(texto: string): RegrasRobots {
  const regras: RegrasRobots = { disallow: [], allow: [] };
  let grupoAtivo = false;
  let viuDiretiva = false;
  for (const linhaBruta of texto.split(/\r?\n/)) {
    const linha = linhaBruta.replace(/#.*$/, '').trim();
    if (!linha) continue;
    const [chaveBruta, ...resto] = linha.split(':');
    const chave = (chaveBruta ?? '').trim().toLowerCase();
    const valor = resto.join(':').trim();
    if (chave === 'user-agent') {
      if (viuDiretiva) {
        grupoAtivo = false;
        viuDiretiva = false;
      }
      if (valor === '*') grupoAtivo = true;
    } else if (chave === 'disallow' || chave === 'allow') {
      viuDiretiva = true;
      if (grupoAtivo && valor) regras[chave].push(valor);
    }
  }
  return regras;
}

function casaPadrao(caminho: string, padrao: string): boolean {
  const ancorado = padrao.endsWith('$');
  const corpo = (ancorado ? padrao.slice(0, -1) : padrao)
    .split('*')
    .map((p) => p.replace(/[.+?^${}()|[\]\\]/g, '\\$&'))
    .join('.*');
  return new RegExp(`^${corpo}${ancorado ? '$' : ''}`).test(caminho);
}

/** Regra mais específica (padrão mais longo) vence; empate favorece Allow. */
export function permitidoPorRobots(regras: RegrasRobots, caminho: string): boolean {
  let melhor: { tam: number; permitido: boolean } | null = null;
  for (const p of regras.disallow) {
    if (casaPadrao(caminho, p) && (!melhor || p.length > melhor.tam)) melhor = { tam: p.length, permitido: false };
  }
  for (const p of regras.allow) {
    if (casaPadrao(caminho, p) && (!melhor || p.length >= melhor.tam)) melhor = { tam: p.length, permitido: true };
  }
  return melhor ? melhor.permitido : true;
}

async function regrasDoHost(origem: string): Promise<RegrasRobots> {
  const cache = robotsCache.get(origem);
  if (cache) return cache;
  let regras: RegrasRobots = { disallow: [], allow: [] };
  try {
    const host = new URL(origem).host;
    await respeitarIntervalo(host);
    const resp = await fetch(`${origem}/robots.txt`, {
      headers: { 'User-Agent': USER_AGENT },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    // 4xx = sem restrições (convenção dos buscadores); 5xx também não bloqueia a coleta pública.
    if (resp.ok) regras = interpretarRobots(await resp.text());
  } catch {
    // Sem robots acessível → sem restrições declaradas.
  }
  robotsCache.set(origem, regras);
  return regras;
}

export class BloqueadoPorRobots extends Error {
  constructor(url: string) {
    super(`robots.txt não permite ${url}`);
  }
}

function detectarCharset(contentType: string | null, bytes: Uint8Array): string {
  const doHeader = contentType?.match(/charset=([\w-]+)/i)?.[1];
  if (doHeader) return doHeader.toLowerCase();
  const inicio = new TextDecoder('latin1').decode(bytes.slice(0, 4096));
  const doMeta = inicio.match(/<meta[^>]+charset=["']?([\w-]+)/i)?.[1];
  return (doMeta ?? 'utf-8').toLowerCase();
}

export function decodificar(bytes: Uint8Array, contentType: string | null): string {
  const charset = detectarCharset(contentType, bytes);
  const rotulo = /8859-1|latin1|1252/.test(charset) ? 'windows-1252' : 'utf-8';
  return new TextDecoder(rotulo).decode(bytes);
}

/** GET que respeita robots.txt, intervalo por host e decodificação correta. */
export async function buscarTexto(url: string): Promise<string> {
  const u = new URL(url);
  const regras = await regrasDoHost(u.origin);
  if (!permitidoPorRobots(regras, u.pathname + u.search)) throw new BloqueadoPorRobots(url);

  let ultimoErro: unknown;
  for (let tentativa = 1; tentativa <= TENTATIVAS; tentativa++) {
    try {
      await respeitarIntervalo(u.host);
      const resp = await fetch(url, {
        headers: { 'User-Agent': USER_AGENT, Accept: 'text/html,application/xhtml+xml', 'Accept-Language': 'pt-BR,pt;q=0.9' },
        redirect: 'follow',
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
      if (resp.status === 404 || resp.status === 410) throw new Error(`HTTP ${resp.status} em ${url}`);
      if (!resp.ok) throw new Error(`HTTP ${resp.status} em ${url}`);
      const bytes = new Uint8Array(await resp.arrayBuffer());
      return decodificar(bytes, resp.headers.get('content-type'));
    } catch (e) {
      ultimoErro = e;
      // 404/410: não existe; 401/403: o site recusou (bloqueio) — insistir não ajuda e não é educado.
      if (e instanceof Error && /HTTP 40[134]|HTTP 410/.test(e.message)) break;
      if (tentativa < TENTATIVAS) await espera(1000 * 2 ** tentativa);
    }
  }
  throw ultimoErro instanceof Error ? ultimoErro : new Error(String(ultimoErro));
}
