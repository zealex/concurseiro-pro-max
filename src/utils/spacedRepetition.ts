import type { Eixo } from '@/data/types';
import type { ItemRevisao, OrigemRevisao } from '@/domain/types';
import { addDays, maxKey, type DateKey } from './dates';

/**
 * Motor de revisão espaçada D1 → D7 → D15 → D30, contados a partir da data-base do ciclo.
 * Resultado ruim (< 70% ou "difícil") reinicia o ciclo a partir do dia da revisão.
 */
export const INTERVALOS = [1, 7, 15, 30] as const;
export const ETAPA_LABEL = ['D1', 'D7', 'D15', 'D30'] as const;
export const LIMIAR_ACERTO = 0.7;

export function vencimentoDaEtapa(baseDate: DateKey, etapa: number): DateKey {
  const dias = INTERVALOS[Math.min(Math.max(etapa, 0), INTERVALOS.length - 1)] ?? 1;
  return addDays(baseDate, dias);
}

/** Datas de todas as etapas de um ciclo iniciado em `baseDate`. */
export function cronogramaDoCiclo(baseDate: DateKey): DateKey[] {
  return INTERVALOS.map((_, i) => vencimentoDaEtapa(baseDate, i));
}

export function criarItemRevisao(p: {
  id: string;
  origem: OrigemRevisao;
  refId: string;
  temaId: string | null;
  eixo: Eixo;
  titulo: string;
  data: DateKey;
  agoraIso: string;
}): ItemRevisao {
  return {
    id: p.id,
    origem: p.origem,
    refId: p.refId,
    temaId: p.temaId,
    eixo: p.eixo,
    titulo: p.titulo,
    baseDate: p.data,
    etapa: 0,
    proxima: vencimentoDaEtapa(p.data, 0),
    status: 'ativo',
    historico: [],
    criadoEm: p.agoraIso,
  };
}

export interface ResultadoRevisao {
  dificil?: boolean;
  /** Fração de acerto 0..1, se a revisão foi feita com questões. */
  acerto?: number | null;
}

export function foiRuim(r: ResultadoRevisao): boolean {
  return !!r.dificil || (typeof r.acerto === 'number' && r.acerto < LIMIAR_ACERTO);
}

/** Aplica a revisão feita em `hoje` e devolve o item com a próxima etapa (ou concluído). */
export function concluirRevisao(item: ItemRevisao, hoje: DateKey, r: ResultadoRevisao = {}): ItemRevisao {
  const ruim = foiRuim(r);
  const historico = [
    ...item.historico,
    { data: hoje, etapa: item.etapa, resultado: ruim ? ('dificil' as const) : ('ok' as const), acerto: r.acerto ?? null },
  ];
  if (ruim) {
    return { ...item, baseDate: hoje, etapa: 0, proxima: vencimentoDaEtapa(hoje, 0), status: 'ativo', historico };
  }
  if (item.etapa >= INTERVALOS.length - 1) {
    return { ...item, status: 'concluido', historico };
  }
  const etapa = item.etapa + 1;
  // Se a revisão foi feita com atraso, a próxima nunca fica no passado.
  const proxima = maxKey(vencimentoDaEtapa(item.baseDate, etapa), addDays(hoje, 1));
  return { ...item, etapa, proxima, historico };
}

export interface RevisoesDoDia {
  atrasadas: ItemRevisao[];
  hoje: ItemRevisao[];
  proximas: ItemRevisao[];
}

export function revisoesDoDia(itens: ItemRevisao[], hoje: DateKey, horizonteDias = 7): RevisoesDoDia {
  const ativos = itens.filter((i) => i.status === 'ativo');
  const limite = addDays(hoje, horizonteDias);
  const porData = (a: ItemRevisao, b: ItemRevisao) => a.proxima.localeCompare(b.proxima) || a.titulo.localeCompare(b.titulo);
  return {
    atrasadas: ativos.filter((i) => i.proxima < hoje).sort(porData),
    hoje: ativos.filter((i) => i.proxima === hoje).sort(porData),
    proximas: ativos.filter((i) => i.proxima > hoje && i.proxima <= limite).sort(porData),
  };
}

/** Itens devidos hoje (atrasados primeiro). */
export function revisoesDevidas(itens: ItemRevisao[], hoje: DateKey): ItemRevisao[] {
  const r = revisoesDoDia(itens, hoje, 0);
  return [...r.atrasadas, ...r.hoje];
}

/** Já existe ciclo ativo para esta origem/ref (evita duplicar ao concluir o mesmo bloco duas vezes)? */
export function existeCicloAtivo(itens: ItemRevisao[], origem: OrigemRevisao, chave: { refId?: string; temaId?: string | null }): boolean {
  return itens.some(
    (i) =>
      i.status === 'ativo' &&
      i.origem === origem &&
      ((chave.refId !== undefined && i.refId === chave.refId) || (chave.temaId != null && i.temaId === chave.temaId && origem === 'questoes')),
  );
}

/** Minutos sugeridos para uma revisão conforme a etapa. */
export function minutosDaRevisao(etapa: number): number {
  return etapa <= 1 ? 10 : 15;
}
