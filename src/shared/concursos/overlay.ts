import { isNovo, ordenar } from './merge';
import { acessoDe, categoriaDe, type Acesso, type Categoria, type Concurso } from './schema';

/** Status pessoal do usuário em cada concurso (colunas do Kanban). */
export const STATUS_PESSOAL = ['radar', 'analisando', 'inscrito', 'prova-agendada', 'finalizado'] as const;
export type StatusPessoal = (typeof STATUS_PESSOAL)[number];
export const STATUS_LABEL: Record<StatusPessoal, string> = {
  radar: 'Novo / Radar',
  analisando: 'Analisando Edital',
  inscrito: 'Inscrito',
  'prova-agendada': 'Prova Agendada',
  finalizado: 'Finalizado',
};

export interface OverlayItem {
  status: StatusPessoal;
  notas: string;
  atualizadoEm: string;
}
export type Overlay = Record<string, OverlayItem>;

export interface ConcursoView extends Concurso {
  status: StatusPessoal;
  notas: string;
  categoria: Categoria;
  /** O generalista (graduação + CRM) pode disputar alguma vaga deste registro? */
  acesso: Acesso;
  /** Saiu do feed remoto mas o usuário tinha status pessoal — mantido localmente. */
  arquivado: boolean;
  manual: boolean;
}

/**
 * Junta feed remoto + concursos manuais + overlay pessoal.
 * - status e notas do usuário nunca são sobrescritos pelo feed;
 * - concurso que sumiu do feed, mas tem status ≠ "radar" (ou notas), é preservado como arquivado
 *   a partir da última cópia conhecida (`conhecidos`);
 * - isNew é recalculado no dispositivo.
 */
export function mesclarComOverlay(params: {
  feed: Concurso[];
  manuais: Concurso[];
  overlay: Overlay;
  conhecidos: Record<string, Concurso>;
  agora: Date;
}): ConcursoView[] {
  const { feed, manuais, overlay, conhecidos, agora } = params;
  const ids = new Set<string>();
  const saida: ConcursoView[] = [];

  const montar = (c: Concurso, arquivado: boolean, manual: boolean): ConcursoView => {
    const o = overlay[c.id];
    return {
      ...c,
      isNew: manual ? false : isNovo(c.firstSeenAt, agora),
      status: o?.status ?? 'radar',
      notas: o?.notas ?? '',
      categoria: categoriaDe(c),
      acesso: acessoDe(c),
      arquivado,
      manual,
    };
  };

  for (const c of feed) {
    if (ids.has(c.id)) continue;
    ids.add(c.id);
    saida.push(montar(c, false, false));
  }
  for (const c of manuais) {
    if (ids.has(c.id)) continue;
    ids.add(c.id);
    saida.push(montar(c, false, true));
  }
  for (const [id, o] of Object.entries(overlay)) {
    if (ids.has(id)) continue;
    const temValorPessoal = o.status !== 'radar' || o.notas.trim().length > 0;
    const copia = conhecidos[id];
    if (temValorPessoal && copia) {
      ids.add(id);
      saida.push(montar(copia, true, false));
    }
  }
  const ordenados = ordenar(saida) as ConcursoView[];
  return ordenados;
}

/** Atualiza o mapa de "conhecidos" (última cópia de cada concurso com status pessoal). */
export function atualizarConhecidos(
  conhecidos: Record<string, Concurso>,
  feed: Concurso[],
  overlay: Overlay,
): Record<string, Concurso> {
  const proximo: Record<string, Concurso> = {};
  for (const [id, c] of Object.entries(conhecidos)) if (overlay[id]) proximo[id] = c;
  for (const c of feed) if (overlay[c.id]) proximo[c.id] = c;
  return proximo;
}
