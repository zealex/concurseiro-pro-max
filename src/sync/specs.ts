import type { ErroCaderno, ItemRevisao, SessaoFoco, SessaoQuestoes } from '@/domain/types';
import type { Concurso } from '@/shared/concursos/schema';
import type { OverlayItem } from '@/shared/concursos/overlay';
import { editalValidoOuNulo } from '@/shared/edital';
import {
  migrarCronograma,
  migrarQuestoes,
  migrarSettings,
  VERSAO_CHECKLIST,
  VERSAO_CRONOGRAMA,
  VERSAO_FOCUS,
  VERSAO_QUESTOES,
  VERSAO_RADAR,
  VERSAO_SETTINGS,
  VERSAO_TREINO,
} from '@/store/migracoes';
import { checklistPadrao, type ChecklistData } from '@/store/useChecklistStore';
import { cronogramaPadrao, type CronogramaData } from '@/store/useCronogramaStore';
import { focusPadrao, type FocusData } from '@/store/useFocusStore';
import { questoesPadrao, type QuestoesData } from '@/store/useQuestoesStore';
import { radarPadrao, type RadarData } from '@/store/useRadarStore';
import { settingsPadrao, ufsValidas, type SettingsData } from '@/store/useSettingsStore';
import { treinoPadrao, type TreinoData } from '@/store/useTreinoStore';
import type { EstadoCartao } from '@/utils/flashcards';
import type { HistoricoQuestao } from '@/utils/treino';
import type { StoreSync } from './contrato';
import { iguais } from './merge/iguais';
import type { CtxMerge, Doc, Resolver, SpecStore } from './merge/tipos';

/**
 * Como cada store é sincronizada: quais campos sobem para a nuvem, como cada um é mesclado e
 * quais invariantes são refeitas depois do merge. Tudo puro (testado no Vitest).
 */

// ---------- documentos sincronizados (projeções das stores) ----------

export type SettingsDoc = Omit<SettingsData, 'feedUrl'>;
export type CronogramaDoc = Omit<CronogramaData, never>;
export type QuestoesDoc = Omit<QuestoesData, never>;
export type TreinoDoc = Omit<TreinoData, 'simuladoAtivo'>;
export type RadarDoc = Pick<RadarData, 'overlay' | 'manuais' | 'conhecidos'>;
export type ChecklistDoc = Omit<ChecklistData, never>;
export type FocusDoc = Omit<FocusData, 'timer'>;

function pegar<D extends Doc>(estado: object, campos: readonly (keyof D & string)[]): D {
  const e = estado as Record<string, unknown>;
  const out: Record<string, unknown> = {};
  for (const k of campos) out[k] = structuredClone(e[k]);
  return out as D;
}

const preferir = <T>(local: T, remoto: T, ctx: CtxMerge): T => (ctx.preferir === 'local' ? local : remoto);

// ---------- resolvedores (todos escolhem um lado) ----------

/** Histórico por questão: vale o lado com mais respostas; depois a resposta mais recente. */
export const resolverHistoricoQuestao: Resolver<HistoricoQuestao> = (_b, l, r, ctx) => {
  if (l.n !== r.n) return l.n > r.n ? l : r;
  if (l.ultima !== r.ultima) return l.ultima > r.ultima ? l : r;
  return preferir(l, r, ctx);
};

/** Flashcard: vale a revisão mais recente; depois o lado com mais revisões. */
export const resolverCartao: Resolver<EstadoCartao> = (_b, l, r, ctx) => {
  if (l.ultimaRevisao !== r.ultimaRevisao) return l.ultimaRevisao > r.ultimaRevisao ? l : r;
  const nl = l.acertos + l.erros;
  const nr = r.acertos + r.erros;
  if (nl !== nr) return nl > nr ? l : r;
  return preferir(l, r, ctx);
};

/** Item de revisão: vale o que andou mais (histórico mais longo, depois etapa maior). */
export const resolverRevisao: Resolver<ItemRevisao> = (_b, l, r, ctx) => {
  if (l.historico.length !== r.historico.length) return l.historico.length > r.historico.length ? l : r;
  if (l.etapa !== r.etapa) return l.etapa > r.etapa ? l : r;
  return preferir(l, r, ctx);
};

/** Erro do caderno: campo a campo, com "resolvido" e "resolvidoEm" sempre juntos. */
export const resolverErro: Resolver<ErroCaderno> = (b, l, r, ctx) => {
  const grupo = ['resolvido', 'resolvidoEm'] as const;
  const out = { ...(preferir(l, r, ctx) as ErroCaderno) } as Record<string, unknown>;
  const bb = b as Record<string, unknown> | undefined;
  const ll = l as unknown as Record<string, unknown>;
  const rr = r as unknown as Record<string, unknown>;
  const escolher = (chaves: readonly string[]) => {
    const pick = (o: Record<string, unknown> | undefined) => (o ? Object.fromEntries(chaves.map((k) => [k, o[k]])) : undefined);
    const pb = pick(bb);
    const pl = pick(ll)!;
    const pr = pick(rr)!;
    const v = iguais(pl, pb) ? pr : iguais(pr, pb) ? pl : preferir(pl, pr, ctx);
    for (const k of chaves) out[k] = v[k];
  };
  escolher(grupo);
  for (const k of new Set([...Object.keys(ll), ...Object.keys(rr)])) {
    if ((grupo as readonly string[]).includes(k)) continue;
    escolher([k]);
  }
  return out as unknown as ErroCaderno;
};

/** Status pessoal de um concurso: vale o mais recente. */
export const resolverOverlay: Resolver<OverlayItem> = (_b, l, r, ctx) => {
  if (l.atualizadoEm !== r.atualizadoEm) return l.atualizadoEm > r.atualizadoEm ? l : r;
  return preferir(l, r, ctx);
};

/** Última cópia conhecida de um concurso: vale a vista mais recentemente no feed. */
export const resolverConhecido: Resolver<Concurso> = (_b, l, r, ctx) => {
  if (l.lastSeenAt !== r.lastSeenAt) return l.lastSeenAt > r.lastSeenAt ? l : r;
  return preferir(l, r, ctx);
};

// ---------- invariantes de questões ----------

function chaveDeCiclo(r: ItemRevisao): string | null {
  if (r.status !== 'ativo') return null;
  if (r.origem === 'teoria') return `teoria:${r.refId}`;
  if (r.origem === 'questoes' && r.temaId) return `questoes:${r.temaId}`;
  return null;
}

/** Ordem de preferência para manter um ciclo duplicado: com histórico, mais antigo, menor id. */
function melhorCiclo(a: ItemRevisao, b: ItemRevisao): ItemRevisao {
  if (a.historico.length !== b.historico.length) return a.historico.length > b.historico.length ? a : b;
  if (a.criadoEm !== b.criadoEm) return a.criadoEm < b.criadoEm ? a : b;
  return a.id < b.id ? a : b;
}

/**
 * Depois do merge de questões:
 *  1. ciclos D1/D7/D15/D30 duplicados (criados offline em dois aparelhos) viram um só — nunca
 *     remove um item que já tem revisões feitas;
 *  2. revisões de erros que não existem mais são removidas (cascata de "excluir erro").
 */
export function posMergeQuestoes(doc: QuestoesDoc): QuestoesDoc {
  const vencedor = new Map<string, ItemRevisao>();
  for (const r of doc.revisoes) {
    const k = chaveDeCiclo(r);
    if (!k) continue;
    const atual = vencedor.get(k);
    vencedor.set(k, atual ? melhorCiclo(atual, r) : r);
  }
  const idsErros = new Set(doc.erros.map((e) => e.id));
  const revisoes = doc.revisoes.filter((r) => {
    if (r.origem === 'erro' && !idsErros.has(r.refId)) return false;
    const k = chaveDeCiclo(r);
    if (!k) return true;
    return vencedor.get(k) === r || r.historico.length > 0;
  });
  return revisoes.length === doc.revisoes.length ? doc : { ...doc, revisoes };
}

// ---------- specs ----------

const CAMPOS_SETTINGS = ['trilha', 'dataInicio', 'orcamentoMin', 'diasPlantao', 'provaAlvo', 'tema', 'bancaAlvo', 'editalAlvo', 'ufsRadar'] as const;

export const specSettings: SpecStore<SettingsDoc> = {
  store: 'settings',
  versao: VERSAO_SETTINGS,
  campos: {
    trilha: { tipo: 'escalar' },
    dataInicio: { tipo: 'escalar' },
    orcamentoMin: { tipo: 'escalar' },
    diasPlantao: { tipo: 'conjunto', limite: 200 },
    provaAlvo: { tipo: 'objeto-atomico' },
    tema: { tipo: 'escalar' },
    bancaAlvo: { tipo: 'escalar' },
    editalAlvo: { tipo: 'objeto-atomico' },
    ufsRadar: { tipo: 'conjunto', limite: 27 },
  },
  // "Definir como prova-alvo" muda os três juntos.
  grupos: [['provaAlvo', 'trilha', 'bancaAlvo']],
  locais: ['feedUrl'],
  projetar: (e) => pegar<SettingsDoc>(e, CAMPOS_SETTINGS),
  migrar: (doc, de) => ({ ...padraoSettings(), ...(migrarSettings(doc, de) as Partial<SettingsDoc>) }) as SettingsDoc,
  posMerge: (d) => ({
    ...d,
    diasPlantao: [...new Set(d.diasPlantao)].sort().slice(-200),
    editalAlvo: editalValidoOuNulo(d.editalAlvo),
    ufsRadar: ufsValidas(d.ufsRadar),
  }),
  // A data de início muda sozinha (padrão = hoje): não conta como "dado do usuário".
  temDados: (d) => !iguais({ ...d, dataInicio: '' }, { ...padraoSettings(), dataInicio: '' }),
  padrao: padraoSettings,
};

function padraoSettings(): SettingsDoc {
  return pegar<SettingsDoc>(settingsPadrao(), CAMPOS_SETTINGS);
}

export const specCronograma: SpecStore<CronogramaDoc> = {
  store: 'cronograma',
  versao: VERSAO_CRONOGRAMA,
  campos: {
    concluidos: { tipo: 'registro', remocao: 'vence' },
    notas: { tipo: 'registro', remocao: 'perde' },
    diasAtivos: { tipo: 'conjunto' },
  },
  locais: [],
  projetar: (e) => pegar<CronogramaDoc>(e, ['concluidos', 'notas', 'diasAtivos']),
  migrar: (doc, de) => ({ ...cronogramaPadrao(), ...(migrarCronograma(doc, de) as Partial<CronogramaDoc>) }),
  posMerge: (d) => d,
  temDados: (d) => Object.keys(d.concluidos).length > 0 || Object.keys(d.notas).length > 0 || d.diasAtivos.length > 0,
  padrao: cronogramaPadrao,
};

export const specQuestoes: SpecStore<QuestoesDoc> = {
  store: 'questoes',
  versao: VERSAO_QUESTOES,
  campos: {
    sessoes: { tipo: 'lista-por-id', insercao: 'inicio', remocao: 'vence' },
    erros: { tipo: 'lista-por-id', insercao: 'inicio', resolver: resolverErro, remocao: 'vence' },
    revisoes: { tipo: 'lista-por-id', insercao: 'fim', resolver: resolverRevisao, remocao: 'vence' },
  },
  locais: [],
  projetar: (e) => pegar<QuestoesDoc>(e, ['sessoes', 'erros', 'revisoes']),
  migrar: (doc, de) => ({ ...questoesPadrao(), ...(migrarQuestoes(doc, de) as Partial<QuestoesDoc>) }),
  posMerge: posMergeQuestoes,
  temDados: (d) => d.sessoes.length > 0 || d.erros.length > 0 || d.revisoes.length > 0,
  padrao: questoesPadrao,
};

export const specTreino: SpecStore<TreinoDoc> = {
  store: 'treino',
  versao: VERSAO_TREINO,
  campos: {
    questoes: { tipo: 'registro', resolver: resolverHistoricoQuestao, remocao: 'perde' },
    cartoes: { tipo: 'registro', resolver: resolverCartao, remocao: 'perde' },
    prefs: { tipo: 'campos' },
  },
  locais: ['simuladoAtivo'],
  projetar: (e) => pegar<TreinoDoc>(e, ['questoes', 'cartoes', 'prefs']),
  migrar: (doc) => ({ ...padraoTreino(), ...((doc ?? {}) as Partial<TreinoDoc>) }),
  posMerge: (d) => d,
  temDados: (d) => Object.keys(d.questoes).length > 0 || Object.keys(d.cartoes).length > 0 || !iguais(d.prefs, padraoTreino().prefs),
  padrao: padraoTreino,
};

function padraoTreino(): TreinoDoc {
  return pegar<TreinoDoc>(treinoPadrao(), ['questoes', 'cartoes', 'prefs']);
}

export const specRadar: SpecStore<RadarDoc> = {
  store: 'radar',
  versao: VERSAO_RADAR,
  campos: {
    overlay: { tipo: 'registro', resolver: resolverOverlay, remocao: 'vence' },
    manuais: { tipo: 'lista-por-id', insercao: 'inicio', remocao: 'vence' },
    conhecidos: { tipo: 'registro', resolver: resolverConhecido, remocao: 'vence' },
  },
  locais: ['feed', 'feedGeradoEm', 'fontes', 'origemFeed', 'urlFeed', 'ultimaSync', 'ultimoErro', 'sincronizando'],
  projetar: (e) => pegar<RadarDoc>(e, ['overlay', 'manuais', 'conhecidos']),
  migrar: (doc) => ({ ...padraoRadar(), ...((doc ?? {}) as Partial<RadarDoc>) }),
  // Excluir um concurso manual apaga também o status pessoal dele.
  posMerge: (d) => {
    const manuais = new Set(d.manuais.map((m) => m.id));
    const orfaos = Object.keys(d.overlay).filter((id) => id.startsWith('manual-') && !manuais.has(id));
    if (orfaos.length === 0) return d;
    const overlay = { ...d.overlay };
    for (const id of orfaos) delete overlay[id];
    return { ...d, overlay };
  },
  temDados: (d) => Object.keys(d.overlay).length > 0 || d.manuais.length > 0 || Object.keys(d.conhecidos).length > 0,
  padrao: padraoRadar,
};

function padraoRadar(): RadarDoc {
  return pegar<RadarDoc>(radarPadrao(), ['overlay', 'manuais', 'conhecidos']);
}

export const specChecklist: SpecStore<ChecklistDoc> = {
  store: 'checklist',
  versao: VERSAO_CHECKLIST,
  campos: { marcados: { tipo: 'registro', remocao: 'vence' } },
  locais: [],
  projetar: (e) => pegar<ChecklistDoc>(e, ['marcados']),
  migrar: (doc) => ({ ...checklistPadrao(), ...((doc ?? {}) as Partial<ChecklistDoc>) }),
  posMerge: (d) => d,
  temDados: (d) => Object.keys(d.marcados).length > 0,
  padrao: checklistPadrao,
};

export const specFocus: SpecStore<FocusDoc> = {
  store: 'focus',
  versao: VERSAO_FOCUS,
  campos: {
    config: { tipo: 'campos' },
    sessoes: { tipo: 'lista-por-id', insercao: 'inicio', remocao: 'vence' },
  },
  locais: ['timer'],
  projetar: (e) => pegar<FocusDoc>(e, ['config', 'sessoes']),
  migrar: (doc) => ({ ...padraoFocus(), ...((doc ?? {}) as Partial<FocusDoc>) }),
  posMerge: (d) => d,
  temDados: (d) => d.sessoes.length > 0 || !iguais(d.config, padraoFocus().config),
  padrao: padraoFocus,
};

function padraoFocus(): FocusDoc {
  return pegar<FocusDoc>(focusPadrao(), ['config', 'sessoes']);
}

/** Todas as specs, por store. */
export const SPECS: { [S in StoreSync]: SpecStore } = {
  settings: specSettings as unknown as SpecStore,
  cronograma: specCronograma as unknown as SpecStore,
  questoes: specQuestoes as unknown as SpecStore,
  treino: specTreino as unknown as SpecStore,
  radar: specRadar as unknown as SpecStore,
  checklist: specChecklist as unknown as SpecStore,
  focus: specFocus as unknown as SpecStore,
};

// Tipos usados só nos testes (evita import circular de tipos de domínio lá).
export type { SessaoFoco, SessaoQuestoes };
