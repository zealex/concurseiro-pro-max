import { create } from 'zustand';
import { anunciarAba, iniciarAbaUnica } from '@/services/abaUnica';
import { definirSomenteLeitura } from '@/services/storage/escopo';
import { ESCOPO_LEGADO, type Escopo } from '@/services/storage/keys';
import { abrirEscopoStores, reabrirEscopoStores, type ResultadoAbertura } from './escopoStores';

/**
 * Inicialização do armazenamento (substitui o antigo "espera 4 s e renderiza mesmo assim", que podia
 * mostrar dados vazios e depois gravá-los por cima do progresso real).
 *
 *   carregando → pronto           (leu tudo; gravações liberadas)
 *   carregando → erro             (alguma leitura falhou; nada é gravado; tela com "Tentar de novo")
 *   abaAtiva = false              (web: outra aba assumiu; esta fica só-leitura até "Usar aqui")
 */

export type FaseArmazenamento = 'carregando' | 'pronto' | 'erro';

interface EstadoArmazenamento {
  fase: FaseArmazenamento;
  mensagem: string | null;
  abaAtiva: boolean;
}

export const useEstadoArmazenamento = create<EstadoArmazenamento>(() => ({ fase: 'carregando', mensagem: null, abaAtiva: true }));

let iniciado = false;
/** Escopo usado na inicialização. Enquanto não há contas, é o "legado" (as chaves de sempre). */
let escopoInicial: Escopo = ESCOPO_LEGADO;

function aplicarResultado(r: ResultadoAbertura): void {
  useEstadoArmazenamento.setState(
    r.ok ? { fase: 'pronto', mensagem: null } : { fase: 'erro', mensagem: r.mensagem },
  );
}

async function abrir(op: () => Promise<ResultadoAbertura>): Promise<void> {
  useEstadoArmazenamento.setState({ fase: 'carregando', mensagem: null });
  try {
    aplicarResultado(await op());
  } catch (e) {
    console.error('[armazenamento] Falha ao abrir o armazenamento', e);
    useEstadoArmazenamento.setState({ fase: 'erro', mensagem: (e as Error)?.message ?? String(e) });
  }
}

/** Chamado uma vez pelo layout raiz. */
export async function iniciarArmazenamento(escopo: Escopo = ESCOPO_LEGADO): Promise<void> {
  if (iniciado) return;
  iniciado = true;
  escopoInicial = escopo;
  iniciarAbaUnica((ativa) => useEstadoArmazenamento.setState({ abaAtiva: ativa }));
  await anunciarAba();
  await abrir(() => abrirEscopoStores(escopoInicial));
}

/** Botão "Tentar de novo" da tela de erro. */
export function tentarAbrirDeNovo(): Promise<void> {
  return abrir(() => abrirEscopoStores(escopoInicial));
}

/**
 * Botão "Usar aqui" de uma aba inativa: assume o app e relê o que a outra aba gravou.
 * A releitura acontece por baixo do aviso (sem a tela de "carregando", que desmontaria as rotas e
 * levaria o usuário de volta ao início), e as gravações só voltam depois de ler tudo.
 */
export async function usarEstaAba(): Promise<void> {
  await anunciarAba();
  try {
    const r = await reabrirEscopoStores();
    if (!r.ok) {
      useEstadoArmazenamento.setState({ fase: 'erro', mensagem: r.mensagem });
      return;
    }
    definirSomenteLeitura(false);
    useEstadoArmazenamento.setState({ abaAtiva: true });
  } catch (e) {
    console.error('[armazenamento] Falha ao assumir a aba', e);
    useEstadoArmazenamento.setState({ fase: 'erro', mensagem: (e as Error)?.message ?? String(e) });
  }
}
