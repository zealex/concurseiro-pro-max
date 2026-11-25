import { aguardarEscritas, definirSomenteLeitura } from '@/services/storage/escopo';

/**
 * Na web, só uma aba usa o app por vez: a aba mais nova assume e as outras ficam só-leitura
 * (sem isso, duas abas gravariam versões diferentes do progresso uma por cima da outra).
 * Sem BroadcastChannel (Android/iOS), tudo aqui é no-op.
 */

type Mensagem = { tipo: 'assumir'; id: string } | { tipo: 'cedi'; para: string };

const CANAL = 'concurseiro-aba-ativa';
const ESPERA_MS = 250;
const meuId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
let canal: BroadcastChannel | null = null;

/** Começa a ouvir outras abas. `aoMudar(false)` = outra aba assumiu o app. */
export function iniciarAbaUnica(aoMudar: (ativa: boolean) => void): () => void {
  if (typeof BroadcastChannel === 'undefined' || canal) return () => undefined;
  canal = new BroadcastChannel(CANAL);
  canal.onmessage = (ev: MessageEvent<Mensagem>) => {
    const m = ev.data;
    if (m?.tipo !== 'assumir' || m.id === meuId) return;
    definirSomenteLeitura(true);
    aoMudar(false);
    // Avisa a aba nova quando as gravações desta aba terminarem, para ela ler dados atualizados.
    void aguardarEscritas().then(() => canal?.postMessage({ tipo: 'cedi', para: m.id } satisfies Mensagem));
  };
  return () => {
    canal?.close();
    canal = null;
  };
}

/** Anuncia que esta aba vai usar o app e espera (pouco) as outras terminarem de gravar. */
export function anunciarAba(): Promise<void> {
  const c = canal;
  if (!c) return Promise.resolve();
  return new Promise((resolve) => {
    const ouvir = (ev: MessageEvent<Mensagem>) => {
      if (ev.data?.tipo === 'cedi' && ev.data.para === meuId) fim();
    };
    const t = setTimeout(() => fim(), ESPERA_MS);
    function fim() {
      clearTimeout(t);
      c?.removeEventListener('message', ouvir);
      resolve();
    }
    c.addEventListener('message', ouvir);
    c.postMessage({ tipo: 'assumir', id: meuId } satisfies Mensagem);
  });
}
