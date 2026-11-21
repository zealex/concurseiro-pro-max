import { getCheatSheet } from './cheatSheets';
import { getChecklist } from './checklistsLeiSeca';
import { DISCIPLINAS, getDisciplina, getTema } from './eixos';
import type { Disciplina } from './types';

/**
 * Registro central da Biblioteca: resolve qualquer referência (`refs` de temas e blocos) para um
 * título e uma rota. Aceita ids de checklist e cheat sheet (legado) e os prefixos
 * `resumo:<temaId>` e `disciplina:<id>`.
 */

export type TipoRef = 'checklist' | 'cheat' | 'resumo' | 'disciplina';

export interface RefBiblioteca {
  id: string;
  tipo: TipoRef;
  rotulo: string;
  rota: string;
}

export const rotaResumo = (temaId: string) => `/biblioteca/resumo-${temaId}`;
export const rotaDisciplina = (disciplinaId: string) => `/biblioteca/disciplina-${disciplinaId}`;

export function resolverRef(id: string): RefBiblioteca | null {
  if (id.startsWith('resumo:')) {
    const temaId = id.slice('resumo:'.length);
    const t = getTema(temaId);
    return t ? { id, tipo: 'resumo', rotulo: `📘 ${t.tema.nome}`, rota: rotaResumo(temaId) } : null;
  }
  if (id.startsWith('disciplina:')) {
    const d = getDisciplina(id.slice('disciplina:'.length));
    return d ? { id, tipo: 'disciplina', rotulo: `📚 ${d.nome}`, rota: rotaDisciplina(d.id) } : null;
  }
  const c = getChecklist(id);
  if (c) return { id, tipo: 'checklist', rotulo: `☑️ ${c.sigla}`, rota: `/biblioteca/checklist-${id}` };
  const s = getCheatSheet(id);
  if (s) return { id, tipo: 'cheat', rotulo: `📄 ${s.titulo}`, rota: `/biblioteca/cheat-${id}` };
  return null;
}

/** Disciplinas da seção "Conhecimentos Básicos" da Biblioteca (inclui Criminalística, do eixo legal). */
export const DISCIPLINAS_BASICAS: Disciplina[] = [
  ...DISCIPLINAS.filter((d) => d.eixo === 'basicos' && d.id !== 'basicas'),
  ...DISCIPLINAS.filter((d) => d.id === 'criminalistica'),
];

export const EMOJI_DISCIPLINA: Record<string, string> = {
  'lingua-portuguesa': '✍️',
  matematica: '🔢',
  'raciocinio-logico': '🧩',
  'lingua-inglesa': '🇬🇧',
  'nocoes-informatica': '💻',
  'direito-constitucional': '📜',
  'direito-administrativo': '🏛️',
  'direito-penal': '⚖️',
  'servidor-publico': '🪪',
  'etica-publica': '🤝',
  'legislacao-geral': '🛡️',
  'regionais-sul': '🗺️',
  'conhecimentos-gerais': '📰',
  'redacao-discursiva': '📝',
  criminalistica: '🔬',
};
