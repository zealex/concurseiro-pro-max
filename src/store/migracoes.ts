import { getDisciplina, getTema } from '@/data/eixos';
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
 *
 * v2 → v3 (questões — Conhecimentos Básicos completos):
 *   - as básicas saíram do tronco para o eixo 'basicos', com disciplinas próprias (Língua Portuguesa,
 *     Raciocínio Lógico, Informática…). Os temas antigos (portugues, rlm…) continuam existindo dentro
 *     delas; sessões e erros recalculam eixo/disciplina pelo tema (ou pela disciplina, sem tema) e as
 *     revisões herdam o eixo do tema ou do erro/sessão que as originou. Idempotente.
 */

export const VERSAO_SETTINGS = 2;
export const VERSAO_QUESTOES = 3;
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

/** Eixo atual de um registro salvo: pelo tema; sem tema, pela disciplina; senão o valor salvo (validado). */
function eixoAtual(x: Dados): Eixo {
  const doTema = typeof x.temaId === 'string' ? getTema(x.temaId)?.disciplina.eixo : undefined;
  if (doTema) return doTema;
  const daDisciplina = typeof x.disciplinaId === 'string' ? getDisciplina(x.disciplinaId)?.eixo : undefined;
  if (daDisciplina) return daDisciplina;
  return migrarEixo(x.eixo, null);
}

export function migrarQuestoes(estado: unknown, versao: number): Dados {
  const s = { ...((estado as Dados) ?? {}) };
  if (versao < 2) {
    const comEixo = (x: Dados): Dados => ({ ...x, eixo: migrarEixo(x.eixo, x.temaId), disciplinaId: migrarDisciplina(x.disciplinaId, x.temaId) });
    s.sessoes = lista(s.sessoes).map(comEixo);
    s.erros = lista(s.erros).map(comEixo);
    s.revisoes = lista(s.revisoes).map((r) => ({ ...r, eixo: migrarEixo(r.eixo, r.temaId) }));
  }
  if (versao < 3) {
    const ajustar = (x: Dados): Dados => {
      const disciplinaId = migrarDisciplina(x.disciplinaId, x.temaId);
      return { ...x, disciplinaId, eixo: eixoAtual({ ...x, disciplinaId }) };
    };
    s.sessoes = lista(s.sessoes).map(ajustar);
    s.erros = lista(s.erros).map(ajustar);
    const eixoPorRef = new Map<string, Eixo>();
    for (const x of [...(s.sessoes as Dados[]), ...(s.erros as Dados[])]) {
      if (typeof x.id === 'string') eixoPorRef.set(x.id, x.eixo as Eixo);
    }
    s.revisoes = lista(s.revisoes).map((r) => {
      const doTema = typeof r.temaId === 'string' ? getTema(r.temaId)?.disciplina.eixo : undefined;
      const daOrigem = typeof r.refId === 'string' && (r.origem === 'erro' || r.origem === 'questoes') ? eixoPorRef.get(r.refId) : undefined;
      return { ...r, eixo: doTema ?? daOrigem ?? migrarEixo(r.eixo, null) };
    });
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
