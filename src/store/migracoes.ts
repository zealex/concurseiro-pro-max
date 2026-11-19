import { getTema } from '@/data/eixos';
import { EIXOS, TRILHAS, type Eixo, type Trilha } from '@/data/types';

/**
 * Migrações dos dados persistidos (funções puras — testadas e reaproveitadas na importação de backup).
 *
 * v1 → v2 (foco no médico generalista):
 *   - trilhas: hibrida → generalista · trabalho → pericia · municipal → clinico · legista mantém;
 *   - eixos: 'trabalho' → 'pericia'; temas clínicos saíram do tronco para o eixo 'clinica'
 *     (eixo e disciplina são recalculados a partir do tema quando ele existe);
 *   - cronograma: o plano de 12 semanas foi reescrito, então a marcação de blocos (ids "s03-b07")
 *     e as notas por bloco são descartadas; a ofensiva (dias ativos) é preservada.
 */

export const VERSAO_SETTINGS = 2;
export const VERSAO_QUESTOES = 2;
export const VERSAO_CRONOGRAMA = 2;

type Dados = Record<string, unknown>;

const TRILHA_V1: Record<string, Trilha> = { hibrida: 'generalista', trabalho: 'pericia', legista: 'legista', municipal: 'clinico' };
const DISCIPLINA_V1: Record<string, string> = { 'pericia-ocupacional': 'pericia-medica' };

export function migrarTrilha(t: unknown): Trilha {
  if (typeof t === 'string') {
    if ((TRILHAS as readonly string[]).includes(t)) return t as Trilha;
    if (TRILHA_V1[t]) return TRILHA_V1[t];
  }
  return 'generalista';
}

export function migrarEixo(eixo: unknown, temaId: unknown): Eixo {
  const doTema = typeof temaId === 'string' ? getTema(temaId)?.disciplina.eixo : undefined;
  if (doTema) return doTema;
  if (eixo === 'trabalho') return 'pericia';
  if (typeof eixo === 'string' && (EIXOS as readonly string[]).includes(eixo)) return eixo as Eixo;
  return 'tronco';
}

export function migrarDisciplina(disciplinaId: unknown, temaId: unknown): string {
  const doTema = typeof temaId === 'string' ? getTema(temaId)?.disciplina.id : undefined;
  if (doTema) return doTema;
  if (typeof disciplinaId === 'string') return DISCIPLINA_V1[disciplinaId] ?? disciplinaId;
  return 'basicas';
}

function lista(v: unknown): Dados[] {
  return Array.isArray(v) ? v.filter((x): x is Dados => !!x && typeof x === 'object') : [];
}

export function migrarSettings(estado: unknown, versao: number): Dados {
  const s = { ...((estado as Dados) ?? {}) };
  if (versao < 2) s.trilha = migrarTrilha(s.trilha);
  return s;
}

export function migrarQuestoes(estado: unknown, versao: number): Dados {
  const s = { ...((estado as Dados) ?? {}) };
  if (versao < 2) {
    const comEixo = (x: Dados): Dados => ({ ...x, eixo: migrarEixo(x.eixo, x.temaId), disciplinaId: migrarDisciplina(x.disciplinaId, x.temaId) });
    s.sessoes = lista(s.sessoes).map(comEixo);
    s.erros = lista(s.erros).map(comEixo);
    s.revisoes = lista(s.revisoes).map((r) => ({ ...r, eixo: migrarEixo(r.eixo, r.temaId) }));
  }
  return s;
}

export function migrarCronograma(estado: unknown, versao: number): Dados {
  const s = { ...((estado as Dados) ?? {}) };
  if (versao < 2) {
    s.concluidos = {};
    s.notas = {};
    s.diasAtivos = Array.isArray(s.diasAtivos) ? s.diasAtivos : [];
  }
  return s;
}
