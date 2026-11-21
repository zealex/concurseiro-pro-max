import type { BancoConteudo } from '../../../types';
import { FLASHCARDS_1 } from './flashcards-1';
import { FLASHCARDS_2 } from './flashcards-2';
import { QUESTOES_1 } from './questoes-1';
import { QUESTOES_2 } from './questoes-2';
import { QUESTOES_3 } from './questoes-3';
import { QUESTOES_4 } from './questoes-4';
import { QUESTOES_5 } from './questoes-5';
import { RESUMOS_1 } from './resumos-1';
import { RESUMOS_2 } from './resumos-2';
import { TEXTOS } from './textos';

const banco: BancoConteudo = {
  disciplinaId: 'direito-administrativo',
  resumos: [...RESUMOS_1, ...RESUMOS_2],
  questoes: [...QUESTOES_1, ...QUESTOES_2, ...QUESTOES_3, ...QUESTOES_4, ...QUESTOES_5],
  textos: TEXTOS,
  flashcards: [...FLASHCARDS_1, ...FLASHCARDS_2],
};
export default banco;
