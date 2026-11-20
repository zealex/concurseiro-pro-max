import type { BancoConteudo } from '../../../types';
import { FLASHCARDS } from './flashcards';
import { QUESTOES_1 } from './questoes-1';
import { QUESTOES_2 } from './questoes-2';
import { QUESTOES_3 } from './questoes-3';
import { QUESTOES_4 } from './questoes-4';
import { RESUMOS } from './resumos';
import { TEXTOS } from './textos';

const banco: BancoConteudo = {
  disciplinaId: 'matematica',
  resumos: RESUMOS,
  questoes: [...QUESTOES_1, ...QUESTOES_2, ...QUESTOES_3, ...QUESTOES_4],
  textos: TEXTOS,
  flashcards: FLASHCARDS,
};
export default banco;
