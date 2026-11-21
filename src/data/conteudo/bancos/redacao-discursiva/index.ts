import type { BancoConteudo } from '../../../types';
import { RESUMO_CRITERIOS } from './resumo-criterios';
import { RESUMO_DISSERTACAO } from './resumo-dissertacao';
import { RESUMO_LAUDO } from './resumo-laudo';

/** Redação e Prova Discursiva: só guias e modelos (sem questões; flashcards não exigidos pelo validador). */
const banco: BancoConteudo = {
  disciplinaId: 'redacao-discursiva',
  resumos: [RESUMO_DISSERTACAO, RESUMO_LAUDO, RESUMO_CRITERIOS],
  questoes: [],
  textos: [],
  flashcards: [],
};
export default banco;
