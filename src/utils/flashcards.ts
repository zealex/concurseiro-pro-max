import type { Flashcard } from '@/data/types';
import { addDays, type DateKey } from './dates';

/**
 * Flashcards em caixas de Leitner: cada acerto sobe uma caixa (1 → 3 → 7 → 15 → 30 dias até a
 * próxima vez); errar volta para a primeira. Funções puras (testadas).
 */

/** Dias até a próxima revisão em cada caixa (0..4). */
export const CAIXAS = [1, 3, 7, 15, 30] as const;
export const ULTIMA_CAIXA = CAIXAS.length - 1;
export const NOVOS_POR_DIA_PADRAO = 20;

export type RespostaCartao = 'errei' | 'dificil' | 'acertei';

export interface EstadoCartao {
  caixa: number;
  proxima: DateKey;
  introduzidoEm: DateKey;
  ultimaRevisao: DateKey;
  acertos: number;
  erros: number;
}

/**
 * Aplica uma resposta. Cartão novo entra na caixa 0 (volta amanhã). Acertei sobe uma caixa; Difícil
 * mantém a caixa; Errei volta à caixa 0. Responder de novo no mesmo dia não sobe caixa (só um Errei
 * derruba). A próxima data sempre conta a partir de hoje (atraso não agenda no passado).
 */
export function responderCartao(estado: EstadoCartao | undefined, resposta: RespostaCartao, hoje: DateKey): EstadoCartao {
  if (!estado) {
    return { caixa: 0, proxima: addDays(hoje, CAIXAS[0]), introduzidoEm: hoje, ultimaRevisao: hoje, acertos: resposta === 'errei' ? 0 : 1, erros: resposta === 'errei' ? 1 : 0 };
  }
  if (estado.ultimaRevisao === hoje && resposta !== 'errei') return estado;
  let caixa = estado.caixa;
  if (resposta === 'acertei') caixa = Math.min(ULTIMA_CAIXA, caixa + 1);
  if (resposta === 'errei') caixa = 0;
  return {
    ...estado,
    caixa,
    proxima: addDays(hoje, CAIXAS[caixa] ?? 1),
    ultimaRevisao: hoje,
    acertos: estado.acertos + (resposta === 'errei' ? 0 : 1),
    erros: estado.erros + (resposta === 'errei' ? 1 : 0),
  };
}

export function cartaoValido(c: Pick<Flashcard, 'validoAte'>, hoje: DateKey): boolean {
  return !c.validoAte || c.validoAte >= hoje;
}

/** Quantos cartões novos já foram introduzidos hoje. */
export function novosIntroduzidosHoje(estados: Record<string, EstadoCartao>, hoje: DateKey): number {
  return Object.values(estados).filter((e) => e.introduzidoEm === hoje).length;
}

export interface FilaDoDia {
  /** Vencidos (mais atrasados primeiro) e depois os novos do dia. */
  fila: Flashcard[];
  vencidos: number;
  novos: number;
}

export function filaDoDia(cartoes: Flashcard[], estados: Record<string, EstadoCartao>, hoje: DateKey, limiteNovos = NOVOS_POR_DIA_PADRAO): FilaDoDia {
  const validos = cartoes.filter((c) => cartaoValido(c, hoje));
  const vencidos = validos
    .filter((c) => estados[c.id] && estados[c.id]!.proxima <= hoje)
    .sort((a, b) => estados[a.id]!.proxima.localeCompare(estados[b.id]!.proxima) || a.id.localeCompare(b.id));
  const restanteNovos = Math.max(0, limiteNovos - novosIntroduzidosHoje(estados, hoje));
  const novos = validos.filter((c) => !estados[c.id]).slice(0, restanteNovos);
  return { fila: [...vencidos, ...novos], vencidos: vencidos.length, novos: novos.length };
}

/** Cartões vencidos (já vistos) até `hoje` — para o card do Dashboard e a tarefa da agenda. */
export function contarVencidos(estados: Record<string, EstadoCartao>, hoje: DateKey): number {
  return Object.values(estados).filter((e) => e.proxima <= hoje).length;
}
