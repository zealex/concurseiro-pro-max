import type { Eixo, TipoBloco, Trilha } from '@/data/types';
import type { DateKey } from '@/utils/dates';

/** Tipos dos dados do usuário (persistidos localmente). */

export type ModoDia = 'padrao' | 'plantao';

export interface ProvaAlvo {
  data: DateKey;
  rotulo: string;
  concursoId: string | null;
}

/* ---------------- Questões, simulados e caderno de erros ---------------- */

export interface SessaoQuestoes {
  id: string;
  data: DateKey;
  tipo: 'bateria' | 'simulado';
  eixo: Eixo;
  disciplinaId: string;
  temaId: string | null;
  banca: string | null;
  total: number;
  acertos: number;
  duracaoMin: number | null;
  notas: string;
  criadoEm: string;
}

export interface ErroCaderno {
  id: string;
  data: DateKey;
  eixo: Eixo;
  disciplinaId: string;
  temaId: string | null;
  banca: string | null;
  enunciado: string;
  porqueErrei: string;
  regraCorreta: string;
  fonte: string;
  resolvido: boolean;
  resolvidoEm: DateKey | null;
  criadoEm: string;
}

/* ---------------- Revisão espaçada ---------------- */

export type OrigemRevisao = 'teoria' | 'questoes' | 'erro';

export interface RegistroRevisao {
  data: DateKey;
  etapa: number;
  resultado: 'ok' | 'dificil';
  acerto: number | null;
}

export interface ItemRevisao {
  id: string;
  origem: OrigemRevisao;
  /** Id do bloco do plano, da sessão de questões ou do erro. */
  refId: string;
  temaId: string | null;
  eixo: Eixo;
  titulo: string;
  /** Data-base do ciclo atual (D1/D7/D15/D30 contam a partir dela). */
  baseDate: DateKey;
  /** 0 = D1, 1 = D7, 2 = D15, 3 = D30. */
  etapa: number;
  proxima: DateKey;
  status: 'ativo' | 'concluido';
  historico: RegistroRevisao[];
  criadoEm: string;
}

/* ---------------- Cronograma ---------------- */

export interface ConclusaoBloco {
  data: DateKey;
  /** Concluído na versão curta de plantão. */
  plantao: boolean;
}

export type OrigemTarefa = 'plano' | 'redistribuida' | 'revisao' | 'adaptativa' | 'manutencao';

export interface TarefaAgenda {
  /** Id usado para marcar como concluída (blocoId, revisão ou sintético por data). */
  id: string;
  origem: OrigemTarefa;
  blocoId: string | null;
  revisaoId: string | null;
  tipo: TipoBloco;
  eixo: Eixo;
  titulo: string;
  descricao: string;
  minutos: number;
  temaIds: string[];
  refs: string[];
  concluida: boolean;
  /** Mostrando a versão curta do Modo Plantão. */
  versaoPlantao: boolean;
}

export type FaseAgenda = 'antes' | 'plano' | 'manutencao' | 'apos-prova';

export interface AgendaDia {
  data: DateKey;
  fase: FaseAgenda;
  modo: ModoDia;
  /** Índice da semana desde o início (1, 2, …) — "Semana 3 de 12". */
  semanaIndice: number | null;
  totalSemanas: number;
  /** Semanas do plano cujo conteúdo cai nesta semana (compressão pode juntar várias). */
  semanasPlano: number[];
  diaDaSemana: number | null;
  mesociclo: 1 | 2 | 3 | null;
  comprimido: boolean;
  tarefas: TarefaAgenda[];
  minutosPlanejados: number;
  minutosConcluidos: number;
  orcamento: number;
  pendentesNaFila: number;
  minutosNaFila: number;
  revisoesExtras: number;
}

/* ---------------- Foco (Pomodoro) ---------------- */

export interface SessaoFoco {
  id: string;
  data: DateKey;
  inicio: string;
  minutos: number;
  eixo: Eixo | null;
  disciplinaId: string | null;
  rotulo: string;
}

export interface ConfigPomodoro {
  focoMin: number;
  pausaCurtaMin: number;
  pausaLongaMin: number;
  ciclosAtePausaLonga: number;
}

export type FaseTimer = 'foco' | 'pausa-curta' | 'pausa-longa';

export interface TimerEmAndamento {
  fase: FaseTimer;
  /** Instante (ms) em que a fase termina; null se pausado. */
  terminaEm: number | null;
  /** Ms restantes quando pausado. */
  restanteMs: number;
  duracaoMs: number;
  inicioFase: string;
  cicloAtual: number;
  disciplinaId: string | null;
  eixo: Eixo | null;
}

export type { Trilha };
