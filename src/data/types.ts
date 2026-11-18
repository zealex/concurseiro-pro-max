/**
 * Tipos do conteúdo pedagógico embarcado.
 * Sem dependências de React Native: usado pelo app, pelos testes e pelos scripts.
 */

export type Eixo = 'trabalho' | 'legal' | 'tronco';

export type Trilha = 'hibrida' | 'trabalho' | 'legista' | 'municipal';

export const TRILHAS: readonly Trilha[] = ['hibrida', 'trabalho', 'legista', 'municipal'] as const;

export const TRILHA_LABEL: Record<Trilha, string> = {
  hibrida: 'Trilha Híbrida (Med. Trabalho + Legista)',
  trabalho: 'Foco Exclusivo: Medicina do Trabalho',
  legista: 'Foco Exclusivo: Médico Legista',
  municipal: 'Foco Edital Municipal / Clínico',
};

export const EIXO_LABEL: Record<Eixo, string> = {
  trabalho: 'Medicina do Trabalho',
  legal: 'Medicina Legal',
  tronco: 'Tronco Comum',
};

export interface Tema {
  id: string;
  nome: string;
  /** Ids de checklists/cheat sheets da Biblioteca úteis para revisar o tema. */
  refs?: string[];
}

export interface Disciplina {
  id: string;
  eixo: Eixo;
  nome: string;
  temas: Tema[];
}

export type TipoBloco =
  | 'diagnostico'
  | 'teoria'
  | 'lei-seca'
  | 'questoes'
  | 'revisao'
  | 'simulado'
  | 'caderno-erros';

export const TIPO_BLOCO_LABEL: Record<TipoBloco, string> = {
  diagnostico: 'Diagnóstico',
  teoria: 'Teoria',
  'lei-seca': 'Lei seca / NR',
  questoes: 'Questões',
  revisao: 'Revisão',
  simulado: 'Simulado',
  'caderno-erros': 'Caderno de erros',
};

/** Tipos que cabem num dia de plantão (45–60 min). */
export const TIPOS_PLANTAO: readonly TipoBloco[] = ['questoes', 'lei-seca', 'revisao', 'caderno-erros'];

export interface BlocoSemana {
  /** Id estável: "s03-b07". Progresso do usuário é indexado por ele. */
  id: string;
  semana: number;
  eixo: Eixo;
  disciplinaId: string;
  temaIds: string[];
  tipo: TipoBloco;
  titulo: string;
  descricao: string;
  minutos: number;
  /** Bloco do "núcleo duro": mantido quando o plano é comprimido por prova-alvo próxima. */
  essencial: boolean;
  trilhas: Trilha[];
  /** Versão de 15–25 min do bloco para dias de plantão. */
  plantaoAlternativa?: string;
  /** Reservado ao 6º dia da semana do plano (bateria/simulado). */
  sabado?: boolean;
  /** Ids da Biblioteca (checklist ou cheat sheet). */
  refs?: string[];
}

export type Mesociclo = 1 | 2 | 3;

export interface SemanaPlano {
  semana: number;
  mesociclo: Mesociclo;
  titulo: string;
  objetivo: string;
  bancasFoco: string[];
  metaQuestoes: number;
  blocos: BlocoSemana[];
}

export interface MesocicloInfo {
  id: Mesociclo;
  titulo: string;
  semanas: [number, number];
  objetivo: string;
}

/* ---------- Biblioteca ---------- */

export interface ChecklistItem {
  id: string;
  /** Ex.: "Art. 19", "Item 7.5.11", "Anexo 1". */
  referencia: string;
  texto: string;
  /** Por que a banca cobra / pegadinha. */
  dica?: string;
}

export interface ChecklistSecao {
  titulo: string;
  itens: ChecklistItem[];
}

export interface ChecklistNorma {
  id: string;
  titulo: string;
  sigla: string;
  eixo: Eixo;
  origem: string;
  url: string;
  secoes: ChecklistSecao[];
}

export interface CheatSheetTabela {
  titulo?: string;
  colunas: string[];
  linhas: string[][];
  nota?: string;
}

export interface CheatSheet {
  id: string;
  titulo: string;
  eixo: Eixo;
  resumo: string;
  tabelas: CheatSheetTabela[];
  pegadinhas: string[];
  fontes: string[];
}

export interface Cursinho {
  id: string;
  nome: string;
  carreiras: ('trabalho' | 'legista' | 'tronco' | 'clinica')[];
  formato: string;
  pontosFortes: string[];
  limitacoes: string[];
  veredito90Dias: string;
  recomendado: boolean;
}

export interface Livro {
  id: string;
  titulo: string;
  autor: string;
  eixo: Eixo;
  porQue: string;
  uso90Dias: string;
  gratuito: boolean;
  url?: string;
}

export interface Banca {
  id: string;
  nome: string;
  regiao: string;
  estilo: string;
  comoTreinar: string;
  sul: boolean;
}

export interface FonteOficial {
  id: string;
  nome: string;
  url: string;
  oQueTem: string;
  comoUsar: string;
}

export interface FiltroBancoQuestoes {
  plataforma: string;
  url: string;
  passos: string[];
}
