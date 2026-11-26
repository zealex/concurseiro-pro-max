import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { FEED_EMBARCADO } from './feedEmbarcado';
import { parseFeedTolerante, type Feed } from '@/shared/concursos/schema';
import { useRadarStore } from '@/store/useRadarStore';
import { useSettingsStore } from '@/store/useSettingsStore';

/**
 * Serviço do Radar (concursos médicos de todo o Brasil).
 * Ordem de tentativa: URL do usuário → EXPO_PUBLIC_CONCURSOS_FEED_URL / app.json → /data/concursos-sul.json (web, mesma origem)
 * → cópia no GitHub (raw). No site, /data/concursos-sul.json já é um proxy do GitHub (infra/web/Caddyfile).
 * Falhou tudo → mantém o último feed em cache (AsyncStorage). Sem cache → JSON embarcado no app nativo (na web, só o feed remoto/cache do service worker).
 * Status pessoais (overlay) e concursos manuais nunca são tocados pela sincronização.
 */

const TIMEOUT_MS = 8000;

/**
 * Cópia do feed direto no GitHub (repositório público). O robô commita aqui de hora em hora; serve de
 * última tentativa quando o site estiver fora do ar.
 */
export const FEED_GITHUB_RAW = 'https://raw.githubusercontent.com/zealex/concurseiro-pro-max/main/public/data/concursos-sul.json';

function baseUrlWeb(): string {
  const extra = (Constants.expoConfig?.extra ?? {}) as { baseUrl?: string };
  return extra.baseUrl ?? (Constants.expoConfig?.experiments as { baseUrl?: string } | undefined)?.baseUrl ?? '';
}

export function urlsDoFeed(urlUsuario: string): string[] {
  const extra = (Constants.expoConfig?.extra ?? {}) as { concursosFeedUrl?: string };
  const candidatas = [
    urlUsuario,
    process.env.EXPO_PUBLIC_CONCURSOS_FEED_URL ?? '',
    extra.concursosFeedUrl ?? '',
    Platform.OS === 'web' && typeof window !== 'undefined' ? `${window.location.origin}${baseUrlWeb()}/data/concursos-sul.json` : '',
    FEED_GITHUB_RAW,
  ];
  return [...new Set(candidatas.map((u) => u.trim()).filter((u) => /^https?:\/\//.test(u)))];
}

async function baixar(url: string): Promise<Feed> {
  const controle = new AbortController();
  const timer = setTimeout(() => controle.abort(), TIMEOUT_MS);
  try {
    const sep = url.includes('?') ? '&' : '?';
    const resp = await fetch(`${url}${sep}t=${Math.floor(Date.now() / 60_000)}`, {
      signal: controle.signal,
      headers: { Accept: 'application/json' },
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const r = parseFeedTolerante(await resp.json());
    if (!r) throw new Error('formato inválido');
    return r.feed;
  } finally {
    clearTimeout(timer);
  }
}

export function feedEmbarcado(): Feed | null {
  return parseFeedTolerante(FEED_EMBARCADO)?.feed ?? null;
}

export interface ResultadoSync {
  ok: boolean;
  origem: 'remoto' | 'cache' | 'embarcado';
  url: string | null;
  total: number;
  erro?: string;
}

/** Garante dados úteis offline na primeira abertura. */
export function inicializarRadar(): void {
  const st = useRadarStore.getState();
  if (st.feed.length > 0) return;
  const f = feedEmbarcado();
  if (f) st.aplicarFeed({ concursos: f.concursos, geradoEm: f.generatedAt, fontes: f.sources, origem: 'embarcado', url: null });
}

let emAndamento: Promise<ResultadoSync> | null = null;

export function sincronizarRadar(): Promise<ResultadoSync> {
  if (emAndamento) return emAndamento;
  emAndamento = (async (): Promise<ResultadoSync> => {
    const st = useRadarStore.getState();
    st.setSincronizando(true);
    const erros: string[] = [];
    try {
      for (const url of urlsDoFeed(useSettingsStore.getState().feedUrl)) {
        try {
          const feed = await baixar(url);
          // Não regride: um feed remoto mais antigo que o embarcado/cache não substitui o atual.
          const atual = useRadarStore.getState();
          if (atual.feedGeradoEm && Date.parse(feed.generatedAt) < Date.parse(atual.feedGeradoEm) && atual.feed.length) {
            erros.push(`${url}: feed mais antigo que o atual`);
            continue;
          }
          atual.aplicarFeed({ concursos: feed.concursos, geradoEm: feed.generatedAt, fontes: feed.sources, origem: 'remoto', url });
          return { ok: true, origem: 'remoto', url, total: feed.concursos.length };
        } catch (e) {
          erros.push(`${url}: ${(e as Error).message}`);
        }
      }
      inicializarRadar();
      const final = useRadarStore.getState();
      const erro = erros.length ? `Sem conexão com o feed remoto (${erros.length} tentativa${erros.length > 1 ? 's' : ''}). Usando dados salvos.` : 'Nenhuma URL de feed configurada. Usando dados salvos.';
      final.registrarFalha(erro);
      return { ok: false, origem: final.origemFeed === 'embarcado' ? 'embarcado' : 'cache', url: null, total: final.feed.length, erro };
    } finally {
      useRadarStore.getState().setSincronizando(false);
      emAndamento = null;
    }
  })();
  return emAndamento;
}
