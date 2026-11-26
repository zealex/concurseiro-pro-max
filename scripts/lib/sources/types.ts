import type { Fonte, UF } from '../../../src/shared/concursos/schema';

/** Item de listagem bruto, antes de virar Concurso. */
export interface ItemListagem {
  fonte: Fonte;
  /** Página da notícia/concurso na fonte. */
  url: string;
  orgao: string;
  titulo: string;
  uf: UF | null;
  /** Texto de cargos da listagem (pode estar truncado ou ser "Vários Cargos"). */
  cargosTexto: string;
  vagas: number | null;
  remuneracaoMax: number | null;
  escolaridade: string;
  inscricoes: { inicio: string | null; fim: string | null };
  /** Listagem não mostra todos os cargos (precisa da página de detalhe). */
  incompleto: boolean;
}

/** Conteúdo extraído de uma página de detalhe. */
export interface Detalhe {
  titulo: string;
  texto: string;
  /** Itens de lista, células e frases — unidade de busca de cargos. */
  linhas: string[];
  publicadoEm: string | null;
  observacoes: string[];
  /** Link direto do edital (PDF público), quando a fonte expõe; senão, o editalUrl é a própria página. */
  editalUrl?: string | null;
  /** Campos estruturados da página (rótulo → valor), quando a fonte tem (JC Concursos). */
  campos?: Record<string, string>;
}

/** Concurso listado no site de uma banca (usado como registro próprio ou como link relacionado). */
export interface ItemBanca {
  banca: 'FUNDATEC' | 'FEPESE';
  fonte: Fonte;
  orgao: string;
  descricao: string;
  uf: UF | null;
  url: string;
  inscricoesFim: string | null;
}
