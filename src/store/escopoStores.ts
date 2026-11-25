import {
  aguardarEscritas,
  bloquearEscopo,
  definirEscopo,
  escopoAtual,
  falhasDeHidratacao,
  fecharEscopo,
  iniciarBackend,
  limparEscopo,
  marcarAberto,
} from '@/services/storage/escopo';
import { descreverEscopo, type Escopo } from '@/services/storage/keys';
import { NOMES_STORES, resetarStoresParaPadrao, STORES_PERSISTIDAS } from './registro';

/**
 * Troca de escopo das stores, sempre nesta ordem (nunca mistura dados de dois usuários):
 *   1. espera as gravações pendentes do escopo anterior;
 *   2. fecha o escopo (nada lido/gravado) e volta a memória ao padrão — essas gravações são descartadas;
 *   3. abre o novo escopo e relê as 7 stores;
 *   4. qualquer falha de leitura BLOQUEIA o escopo (sem gravações) e é reportada.
 * Operações são serializadas: duas trocas simultâneas nunca se intercalam.
 */

export type ResultadoAbertura = { ok: true } | { ok: false; falhas: string[]; mensagem: string };

let fila: Promise<unknown> = Promise.resolve();

function serializar<T>(op: () => Promise<T>): Promise<T> {
  const p = fila.then(op, op);
  fila = p.catch(() => undefined);
  return p;
}

export function abrirEscopoStores(novo: Escopo): Promise<ResultadoAbertura> {
  return serializar(async () => {
    await iniciarBackend();
    await aguardarEscritas();
    fecharEscopo();
    resetarStoresParaPadrao();
    definirEscopo(novo);
    await Promise.all(STORES_PERSISTIDAS.map((s) => s.store.persist.rehydrate()));

    const falhas = new Set(falhasDeHidratacao(NOMES_STORES).map((f) => f.nome));
    for (const s of STORES_PERSISTIDAS) if (!s.store.persist.hasHydrated()) falhas.add(s.nome);
    if (falhas.size > 0) {
      bloquearEscopo();
      const detalhes = falhasDeHidratacao(NOMES_STORES).map((f) => `${f.nome}: ${(f.erro as Error)?.message ?? String(f.erro)}`);
      console.error(`[armazenamento] Falha ao ler ${descreverEscopo(novo)} — gravações bloqueadas.`, detalhes);
      return { ok: false, falhas: [...falhas], mensagem: detalhes.join(' · ') || 'leitura não concluída' };
    }
    marcarAberto();
    return { ok: true };
  });
}

/** Reabre o escopo atual relendo tudo do disco (ex.: depois que outra aba gravou). */
export function reabrirEscopoStores(): Promise<ResultadoAbertura> {
  const atual = escopoAtual();
  if (!atual) return Promise.resolve({ ok: false, falhas: [], mensagem: 'nenhum escopo aberto' });
  return abrirEscopoStores(atual);
}

/** Fecha o escopo atual; com `apagar`, remove do aparelho todos os dados dele. */
export function fecharEscopoStores(op: { apagar?: boolean } = {}): Promise<void> {
  return serializar(async () => {
    const atual = escopoAtual();
    await aguardarEscritas();
    fecharEscopo();
    resetarStoresParaPadrao();
    if (op.apagar && atual) await limparEscopo(atual);
  });
}

/** Apaga do disco os dados do escopo atual, mantendo-o aberto (usado por "Apagar meu progresso"). */
export async function limparEscopoAtual(): Promise<void> {
  const atual = escopoAtual();
  if (atual) await limparEscopo(atual);
}
