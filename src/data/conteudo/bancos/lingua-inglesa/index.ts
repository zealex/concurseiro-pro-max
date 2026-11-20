import type { BancoConteudo } from '../../../types';
import { FLASHCARDS } from './flashcards';
import { QUESTOES_GRAMATICA } from './questoes-gramatica';
import { QUESTOES_LEITURA } from './questoes-leitura';
import { QUESTOES_VOCABULARIO } from './questoes-vocabulario';
import { RESUMOS } from './resumos';
import { TEXTOS } from './textos';

/**
 * Banco de Língua Inglesa (inglês instrumental): 3 resumos, 6 textos-base próprios, questões autorais
 * (≈40% Certo/Errado no estilo Cebraspe) e flashcards. Carregado sob demanda por src/data/conteudo/carregar.ts.
 */
const banco: BancoConteudo = {
  disciplinaId: 'lingua-inglesa',
  resumos: RESUMOS,
  questoes: [...QUESTOES_LEITURA, ...QUESTOES_VOCABULARIO, ...QUESTOES_GRAMATICA],
  textos: TEXTOS,
  flashcards: FLASHCARDS,
};
export default banco;
