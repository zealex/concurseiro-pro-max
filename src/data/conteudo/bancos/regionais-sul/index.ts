import type { BancoConteudo } from '../../../types';
import { FLASHCARDS } from './flashcards';
import { QUESTOES_1 } from './questoes-1';
import { QUESTOES_2 } from './questoes-2';
import { RESUMOS_1 } from './resumos-1';
import { RESUMOS_2 } from './resumos-2';
import { RESUMOS_3 } from './resumos-3';
import { TEXTOS } from './textos';

const resumos = [...RESUMOS_1, ...RESUMOS_2, ...RESUMOS_3];
const questoes = [...QUESTOES_1, ...QUESTOES_2];
const textos = TEXTOS;
const flashcards = FLASHCARDS;

const banco: BancoConteudo = { disciplinaId: 'regionais-sul', resumos, questoes, textos, flashcards };
export default banco;
