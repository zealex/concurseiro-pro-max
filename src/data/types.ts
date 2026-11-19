/**
 * Tipos do conteúdo pedagógico embarcado.
 * Sem dependências de React Native: usado pelo app, pelos testes e pelos scripts.
 *
 * Público-alvo: médico generalista / recém-formado (sem RQE) que presta concursos
 * nas áreas periciais — Perícia Médica (INSS/RPPS), Medicina Legal (Polícia Científica/IGP)
 * e Saúde do Trabalhador — e, como porta de entrada, editais de Clínico Geral/ESF/Plantonista.
 */

/**
 * clinica = Clínica Médica e Urgência · pericia = Perícia Médica, Previdência e Saúde do Trabalhador ·
 * legal = Medicina Legal · tronco = SUS, Epidemiologia e Ética Médica ·
 * basicos = Conhecimentos Básicos e Gerais (Português, Matemática, RLM, Informática, Direito, Legislação, Atualidades…).
 */
export type Eixo = 'clinica' | 'pericia' | 'legal' | 'tronco' | 'basicos';

export const EIXOS: readonly Eixo[] = ['clinica', 'pericia', 'legal', 'tronco', 'basicos'] as const;

export type Trilha = 'generalista' | 'pericia' | 'legista' | 'clinico';

export const TRILHAS: readonly Trilha[] = ['generalista', 'pericia', 'legista', 'clinico'] as const;

export const TRILHA_LABEL: Record<Trilha, string> = {
  generalista: 'Generalista Completo (Perícia + Legal + Clínica)',
  pericia: 'Foco: Perícia Médica (INSS / RPPS)',
  legista: 'Foco: Médico Legista (Polícia Científica / IGP)',
  clinico: 'Foco: Clínico Geral / ESF / Plantonista',
};

/** Rótulo curto (tabelas e chips). */
export const TRILHA_CURTA: Record<Trilha, string> = {
  generalista: 'Generalista',
  pericia: 'Perícia',
  legista: 'Legista',
  clinico: 'Clínico',
};

/** Rótulo curto (seletores compactos). */
export const EIXO_CURTO: Record<Eixo, string> = {
  clinica: 'Clínica',
  pericia: 'Perícia',
  legal: 'Med. Legal',
  tronco: 'SUS/Ética',
  basicos: 'Básicas',
};

export const EIXO_LABEL: Record<Eixo, string> = {
  clinica: 'Clínica Médica e Urgência',
  pericia: 'Perícia, Previdência e Trabalho',
  legal: 'Medicina Legal',
  tronco: 'SUS, Epidemiologia e Ética Médica',
  basicos: 'Conhecimentos Básicos e Gerais',
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
  /**
   * Trilhas em que a disciplina costuma ser cobrada (padrão quando não há edital-alvo).
   * Ausente = segue o padrão do eixo.
   */
  trilhas?: Trilha[];
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
  /**
   * Só nos blocos de básicas: núcleo (sempre entra), complemento (entra se couber no orçamento)
   * ou reforço (só quando as básicas valem ≥ 50% da prova-alvo).
   */
  nivel?: NivelBasicas;
  /** Concluir o bloco não abre ciclo D1/D7/D15/D30 (a retenção fica com os flashcards). */
  semRevisao?: boolean;
}

export type NivelBasicas = 'nucleo' | 'complemento' | 'reforco';

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
  carreiras: ('pericia' | 'legista' | 'clinica' | 'tronco' | 'basicos')[];
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
  /** Como a banca cobra os Conhecimentos Básicos (tirado de editais lidos). */
  basicas?: string;
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

/* ---------- Conteúdo de estudo embarcado (resumos, questões autorais, flashcards) ---------- */

/** Bloco de um resumo teórico. `texto`, `lista` e `atencao` aceitam **negrito**. */
export type BlocoResumo =
  | { tipo: 'texto'; texto: string }
  | { tipo: 'lista'; itens: string[]; ordenada?: boolean }
  | { tipo: 'tabela'; tabela: CheatSheetTabela }
  | { tipo: 'exemplo'; titulo?: string; enunciado: string; resolucao: string }
  | { tipo: 'atencao'; texto: string }
  | { tipo: 'formula'; formula: string; legenda?: string };

export interface ResumoTema {
  temaId: string;
  titulo: string;
  /** Uma ou duas frases: o que a banca cobra e por quê. */
  resumo: string;
  blocos: BlocoResumo[];
  fontes: string[];
  /** YYYY-MM-DD */
  atualizadoEm: string;
}

export type FormatoQuestao = 'multipla' | 'certo-errado';

/**
 * Questão AUTORAL no estilo das bancas (nunca cópia de prova oficial).
 * Múltipla escolha: `alternativas` + `correta` (índice). Certo/Errado: `gabaritoCE`.
 */
export interface QuestaoTreino {
  /** Prefixado pela disciplina: "lp-crase-003". */
  id: string;
  temaId: string;
  formato: FormatoQuestao;
  /** Id da banca (BANCAS) cujo estilo a questão imita. */
  estilo?: string;
  dificuldade: 1 | 2 | 3;
  textoBaseId?: string;
  enunciado: string;
  alternativas?: string[];
  correta?: number;
  gabaritoCE?: boolean;
  comentario: string;
  /** Base normativa ("CF/88, art. 37, II"). Obrigatória nas questões de lei. */
  fundamento?: string;
  /** Questões de cálculo: recalcula a resposta (o teste compara com a alternativa correta). */
  verificar?: () => string | number;
}

/** Texto de apoio para interpretação — próprio ou de domínio público (autor morto há mais de 70 anos). */
export interface TextoBase {
  id: string;
  titulo: string;
  autoria: string;
  dominioPublico: boolean;
  texto: string;
}

export interface Flashcard {
  id: string;
  temaId: string;
  frente: string;
  verso: string;
  fonte?: string;
  /** Conteúdo datado (atualidades): some do baralho depois desta data (YYYY-MM-DD). */
  validoAte?: string;
}

/** Banco de conteúdo de uma disciplina — carregado sob demanda (src/data/conteudo/carregar.ts). */
export interface BancoConteudo {
  disciplinaId: string;
  resumos: ResumoTema[];
  questoes: QuestaoTreino[];
  textos: TextoBase[];
  flashcards: Flashcard[];
}

/* ---------- Editais (composição da prova-alvo) ---------- */

export interface ItemEdital {
  /** Como aparece no edital ("Língua Portuguesa", "Legislação"). */
  rotulo: string;
  /** Disciplinas do app que cobrem o item (o desempenho é a média ponderada delas). */
  disciplinaIds: string[];
  questoes: number;
  /** Valor de cada questão/item. */
  peso: number;
  /** Mínimo de pontos no item, se o edital exigir. */
  minimo?: number | null;
}

export interface ProvaEdital {
  id: string;
  nome: string;
  formato: FormatoQuestao;
  /** Nº de alternativas (múltipla escolha). */
  alternativas?: number;
  /** Pontos perdidos por erro (Cebraspe: 0,5 ou 1). */
  penalidadeErro?: number;
  duracaoMin?: number;
  itens: ItemEdital[];
  minimoPontos?: number | null;
  /** Mínimo em % da prova. */
  minimoPct?: number | null;
}

export type TipoFase =
  | 'objetiva'
  | 'discursiva'
  | 'titulos'
  | 'taf'
  | 'psicologica'
  | 'investigacao-social'
  | 'saude'
  | 'pratica'
  | 'curso-formacao';

export interface FaseConcurso {
  tipo: TipoFase;
  carater: string;
  detalhe?: string;
}

/** Composição real de um edital lido (preset do "Meu Edital"). */
export interface ModeloEdital {
  id: string;
  nome: string;
  orgao: string;
  banca: string;
  ano: number;
  uf: string;
  cargo: string;
  fonteUrl: string;
  /** Data em que conferimos no PDF (YYYY-MM-DD). */
  conferidoEm: string;
  provas: ProvaEdital[];
  minimoTotal?: number | null;
  fases: FaseConcurso[];
  trilhaSugerida: Trilha;
  observacoes?: string;
}

/** Guia de uma fase do concurso ou de estratégia (Biblioteca). */
export interface GuiaFase {
  id: string;
  titulo: string;
  emoji: string;
  resumo: string;
  secoes: { titulo: string; blocos: BlocoResumo[] }[];
  fontes: string[];
  atualizadoEm: string;
}
