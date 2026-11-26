import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 25 — Orações intercaladas), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C25: QuestaoTreino[] = [
  {
    id: 'lp-periodo-composto-qlivro25-01',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — IRBr — Diplomata — 2012) Se o incitavam a falar, exclamava: — Ai! Que preguiça!... e não dizia mais nada. No fragmento, o período iniciado em “Se o incitavam a falar” inclui uma frase em discurso direto como complemento de verbo dicendi, seguida de oração coordenada, que se inicia em outra linha do texto.',
    gabaritoCE: true,
    comentario:
      'O período começa com “Se” e termina no ponto. Dentro dele, a fala “Ai! Que preguiça!...” é complemento do verbo dicendi “exclamava”, com função de objeto direto. Em seguida, “e não dizia mais nada” é oração coordenada sindética aditiva, por isso a afirmação está correta.',
  },
];
