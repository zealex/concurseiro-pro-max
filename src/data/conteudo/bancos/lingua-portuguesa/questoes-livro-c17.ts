import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 17 — Sintaxe), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C17: QuestaoTreino[] = [
  {
    id: 'lp-termos-oracao-qlivro17-01',
    temaId: 'lp-termos-oracao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(NCE/UFRJ - BNDES - Análise de Sistemas - 2005) O segmento inicial de nosso Hino Nacional diz o seguinte: “Ouviram do Ipiranga as margens plácidas De um povo heroico o brado retumbante”. Se colocados na ordem direta, os termos desses dois versos estariam assim dispostos:',
    alternativas: [
      'As margens plácidas do Ipiranga ouviram / O brado retumbante de um povo heroico',
      'As margens plácidas ouviram do Ipiranga / O heroico brado retumbante de um povo',
      'As margens plácidas do Ipiranga ouviram / O heroico brado retumbante de um povo',
      'Do Ipiranga as margens plácidas ouviram / O brado retumbante de um povo heroico',
      'Ouviram as margens plácidas do Ipiranga / De um povo o heroico brado retumbante',
    ],
    correta: 0,
    comentario:
      'A ordem direta é sujeito, verbo, complemento e adjunto. Aqui o sujeito é “as margens plácidas do Ipiranga”, o verbo é “ouviram” e o complemento é “o brado retumbante de um povo heroico”, e a alternativa A reorganiza os termos nessa sequência. As demais deixam o sujeito incompleto, como em B, ou deslocam o adjetivo “heroico”, que qualifica o povo, para junto de “brado”, como em C, e ainda começam por adjunto ou pelo verbo, como em D e E.',
  },
  {
    id: 'lp-termos-oracao-qlivro17-02',
    temaId: 'lp-termos-oracao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - IRBr - Diplomata - 2006) A inversão sintática observada em “O que principalmente sou?” (l. 1) condiz com a estrutura gramatical interrogativa e apresenta-se como legítimo recurso de ênfase.',
    gabaritoCE: true,
    comentario:
      'Certo. Na ordem direta, a frase seria “Sou o quê principalmente?”, e a inversão que leva o termo para o início da frase o realça, pois ele “sai” de sua posição original. A estrutura interrogativa explica o deslocamento do pronome “o que” para o começo da frase.',
  },
  {
    id: 'lp-termos-oracao-qlivro17-03',
    temaId: 'lp-termos-oracao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(MPE/SC - MPE/SC - PROMOTOR DE JUSTIÇA - 2013) Em “A sentença, já a escrevi várias vezes, mas ainda sinto-me confuso”, os termos destacados, na morfossintaxe, são pronomes oblíquos e objeto direto.',
    gabaritoCE: true,
    comentario:
      'Certo. O termo “a” de “já a escrevi” é pronome oblíquo átono e funciona como objeto direto do verbo “escrevi”, o que confirma a análise morfossintática do enunciado. A frase está correta quanto à classe gramatical e à função sintática dos termos destacados.',
  },
];
