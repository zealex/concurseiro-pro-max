import type { BancoConteudo } from '../../../types';
import { FLASHCARDS_1 } from './flashcards-1';
import { FLASHCARDS_2 } from './flashcards-2';
import { QUESTOES_1 } from './questoes-1';
import { QUESTOES_2 } from './questoes-2';
import { QUESTOES_3 } from './questoes-3';
import { RESUMOS_1 } from './resumos-1';
import { RESUMOS_2 } from './resumos-2';
import { RESUMOS_3 } from './resumos-3';
import { TEXTOS } from './textos';

const banco: BancoConteudo = {
  disciplinaId: 'etica-publica',
  resumos: [...RESUMOS_1, ...RESUMOS_2, ...RESUMOS_3],
  questoes: [...QUESTOES_1, ...QUESTOES_2, ...QUESTOES_3],
  textos: TEXTOS,
  flashcards: [...FLASHCARDS_1, ...FLASHCARDS_2],
};
export default banco;
