import type { BancoConteudo } from '../../../types';
import { FLASHCARDS } from './flashcards';
import { RESUMOS } from './resumos';

/** Atualidades: sem banco de questões (conteúdo datado envelhece rápido). */
const banco: BancoConteudo = {
  disciplinaId: 'conhecimentos-gerais',
  resumos: RESUMOS,
  questoes: [],
  textos: [],
  flashcards: FLASHCARDS,
};
export default banco;
