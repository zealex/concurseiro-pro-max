import type { BancoConteudo } from '../../../types';
import { FLASHCARDS } from './flashcards';
import { QUESTOES_1 } from './questoes-1';
import { QUESTOES_2 } from './questoes-2';
import { QUESTOES_3 } from './questoes-3';
import { RESUMOS_1 } from './resumos-1';
import { RESUMOS_2 } from './resumos-2';
import { TEXTOS } from './textos';

const banco: BancoConteudo = {
  disciplinaId: 'servidor-publico',
  resumos: [...RESUMOS_1, ...RESUMOS_2],
  questoes: [...QUESTOES_1, ...QUESTOES_2, ...QUESTOES_3],
  textos: TEXTOS,
  flashcards: FLASHCARDS,
};
export default banco;
