import { create } from 'zustand';
import { anunciarAba, iniciarAbaUnica } from '@/services/abaUnica';
import { escopoDaConta, lerContaSalva, useConta, type Conta } from '@/services/auth/conta';
import { definirSomenteLeitura } from '@/services/storage/escopo';
import type { Escopo } from '@/services/storage/keys';
import { abrirEscopoStores, fecharEscopoStores, reabrirEscopoStores, type ResultadoAbertura } from './escopoStores';

/**
 * Inicialização do armazenamento:
 *
 *   carregando → sem-conta   (ninguém logado neste aparelho: tela de login; nenhum escopo aberto)
 *   carregando → pronto      (leu o progresso da conta; gravações liberadas)
 *   carregando → erro        (alguma leitura falhou; nada é gravado; tela com "Tentar de novo")
 *   abaAtiva = false         (web: outra aba assumiu; esta fica só-leitura até "Usar aqui")
 *
 * Nunca há o antigo "espera 4 s e renderiza mesmo assim", que podia gravar dados vazios por cima
 * do progresso real.
 */

export type FaseArmazenamento = 'carregando' | 'sem-conta' | 'pronto' | 'erro';

interface EstadoArmazenamento {
  fase: FaseArmazenamento;
  mensagem: string | null;
  abaAtiva: boolean;
}

export const useEstadoArmazenamento = create<EstadoArmazenamento>(() => ({ fase: 'carregando', mensagem: null, abaAtiva: true }));

let iniciado = false;
let escopoAberto: Escopo | null = null;

const definir = (p: Partial<EstadoArmazenamento>) => useEstadoArmazenamento.setState(p);

function aplicarResultado(r: ResultadoAbertura): void {
  definir(r.ok ? { fase: 'pronto', mensagem: null } : { fase: 'erro', mensagem: r.mensagem });
}

async function abrir(escopo: Escopo): Promise<void> {
  escopoAberto = escopo;
  definir({ fase: 'carregando', mensagem: null });
  try {
    aplicarResultado(await abrirEscopoStores(escopo));
  } catch (e) {
    console.error('[armazenamento] Falha ao abrir o armazenamento', e);
    definir({ fase: 'erro', mensagem: (e as Error)?.message ?? String(e) });
  }
}

async function carregarContaEAbrir(): Promise<void> {
  definir({ fase: 'carregando', mensagem: null });
  try {
    const conta = await lerContaSalva();
    useConta.setState({ conta });
    if (!conta) {
      escopoAberto = null;
      definir({ fase: 'sem-conta' });
      return;
    }
    await abrir(escopoDaConta(conta));
  } catch (e) {
    console.error('[armazenamento] Falha ao ler a conta do aparelho', e);
    definir({ fase: 'erro', mensagem: (e as Error)?.message ?? String(e) });
  }
}

/** Chamado uma vez pelo layout raiz. */
export async function iniciarArmazenamento(): Promise<void> {
  if (iniciado) return;
  iniciado = true;
  iniciarAbaUnica((ativa) => definir({ abaAtiva: ativa }));
  await anunciarAba();
  await carregarContaEAbrir();
}

/** Depois de entrar numa conta (ou escolher o modo sem conta): abre o progresso dela. */
export function abrirArmazenamentoDaConta(conta: Conta): Promise<void> {
  return abrir(escopoDaConta(conta));
}

/** Ao sair: fecha o progresso aberto (com `apagar`, remove do aparelho) e volta à tela de login. */
export async function fecharArmazenamento(op: { apagar?: boolean } = {}): Promise<void> {
  await fecharEscopoStores(op);
  escopoAberto = null;
  definir({ fase: 'sem-conta', mensagem: null });
}

/** Botão "Tentar de novo" da tela de erro. */
export function tentarAbrirDeNovo(): Promise<void> {
  return escopoAberto ? abrir(escopoAberto) : carregarContaEAbrir();
}

/**
 * Botão "Usar aqui" de uma aba inativa: assume o app e relê o que a outra aba gravou.
 * A releitura acontece por baixo do aviso (sem a tela de "carregando", que desmontaria as rotas e
 * levaria o usuário de volta ao início), e as gravações só voltam depois de ler tudo.
 */
export async function usarEstaAba(): Promise<void> {
  await anunciarAba();
  try {
    // A outra aba pode ter entrado/saído de uma conta: relê também o retrato da conta.
    const conta = await lerContaSalva();
    const mudou = (conta ? escopoDaConta(conta) : null)?.tipo !== escopoAberto?.tipo || JSON.stringify(conta) !== JSON.stringify(useConta.getState().conta);
    if (mudou || !escopoAberto) {
      definirSomenteLeitura(false);
      definir({ abaAtiva: true });
      await carregarContaEAbrir();
      return;
    }
    const r = await reabrirEscopoStores();
    if (!r.ok) {
      definir({ fase: 'erro', mensagem: r.mensagem });
      return;
    }
    definirSomenteLeitura(false);
    definir({ abaAtiva: true });
  } catch (e) {
    console.error('[armazenamento] Falha ao assumir a aba', e);
    definir({ fase: 'erro', mensagem: (e as Error)?.message ?? String(e) });
  }
}
