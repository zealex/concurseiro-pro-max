import type { BancoConteudo } from '../../../types';
import { FLASHCARDS_1 } from './flashcards';
import { FLASHCARDS_2 } from './flashcards-2';
import { QUESTOES_GRAMATICA_1 } from './questoes-gramatica-1';
import { QUESTOES_GRAMATICA_2 } from './questoes-gramatica-2';
import { QUESTOES_LIVRO } from './questoes-livro';
import { QUESTOES_LEITURA } from './questoes-leitura';
import { QUESTOES_REDACAO } from './questoes-redacao';
import { QUESTOES_TEXTO } from './questoes-texto';
import { RESUMOS } from './resumos';
import { TEXTOS } from './textos';

/**
 * Banco de Língua Portuguesa: 16 resumos, 8 textos-base, questões autorais (≈30% Certo/Errado no estilo Cebraspe)
 * e flashcards. Carregado sob demanda por src/data/conteudo/carregar.ts.
 */
const banco: BancoConteudo = {
  disciplinaId: 'lingua-portuguesa',
  resumos: RESUMOS,
  questoes: [...QUESTOES_TEXTO, ...QUESTOES_LEITURA, ...QUESTOES_GRAMATICA_1, ...QUESTOES_GRAMATICA_2, ...QUESTOES_REDACAO, ...QUESTOES_LIVRO],
  textos: TEXTOS,
  flashcards: [...FLASHCARDS_1, ...FLASHCARDS_2],
};
export default banco;
