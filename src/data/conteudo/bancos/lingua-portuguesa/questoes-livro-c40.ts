import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 40 — Questões mal formuladas e polêmicas gramaticais), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C40: QuestaoTreino[] = [
  {
    id: 'portugues-qlivro40-01',
    temaId: 'portugues',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - ALESE - Técnico Legislativo (Apoio Técnico-Administrativo) - 2018) Embora controverso, na maioria dos festivais de cinema, é conferido o prêmio do público. Enquanto alguns enaltecem o prêmio do público, há aqueles que consideram o prêmio do público pouco representativo da qualidade de um filme; outros, ainda, interpretam o prêmio do público como mera estratégia mercadológica. Os elementos sublinhados acima podem ser substituídos, respectivamente, por:',
    alternativas: [
      'lhe enaltecem – consideram-no – o interpretam',
      'enaltecem-no – o consideram – interpretam-no',
      'enaltecem-no – lhe consideram – lhe interpretam',
      'o enaltecem – consideram-lhe – interpretam-lhe',
      'enaltecem-lhe – consideram-no – interpretam-lhe',
    ],
    correta: 1,
    comentario:
      'O autor contesta o gabarito oficial, a alternativa B, e chama a escolha de absurdo: para ele, diante de pronome indefinido a próclise é obrigatória (“Enquanto alguns o enaltecem”), e a alternativa D está errada porque “lhe” não complementa verbos transitivos diretos como “considerar” e “interpretar”. Por essa leitura, nenhuma alternativa estaria correta e a questão deveria ter sido anulada. A correta, pelo gabarito oficial que o livro cita, é a B.',
  },
  {
    id: 'portugues-qlivro40-02',
    temaId: 'portugues',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(CESPE/CEBRASPE - Prefeitura de São Luís/MA - Técnico Municipal (Nível Médio) - 2017) Tinha chegado o tempo da colheita, era uma manhã risonha, e bela, como o rosto de um infante, entretanto eu tinha um peso enorme no coração. Sim, eu estava triste, e não sabia a que atribuir minha tristeza. Era a primeira vez que me afligia tão incompreensível pesar. Minha filha sorria para mim, era ela gentilzinha, e em sua inocência semelhava um anjo. Desgraçada de mim! Deixei-a nos braços de minha mãe e fui-me à roça colher milho. Ah! Nunca mais devia eu vê-la... (...) Foi embalde que supliquei, em nome de minha filha, que me restituíssem a liberdade: os bárbaros sorriam-se das minhas lágrimas e me olhavam sem compaixão. Julguei enlouquecer, julguei morrer, mas não me foi possível... a sorte me reservava ainda longos caminhos. (...) É horrível lembrar que criaturas humanas tratem a seus semelhantes assim e que não lhes doa a consciência de levá-los à sepultura, asfixiados e famintos. Maria Firmina dos Reis. Úrsula. Florianópolis: Ed. Mulheres, 2004, p. 116-7 (com adaptações). A correção gramatical do texto seria prejudicada caso fosse:',
    alternativas: [
      'empregado o sinal indicativo de crase no “a”, em “a que atribuir”.',
      'inserido o vocábulo “de” logo após “lembrar”.',
      'inserido o vocábulo “para” imediatamente antes de “colher”.',
      'suprimido o pronome “me”, em “fui-me”.',
      'suprimido o pronome “se”, em “sorriam-se”.',
    ],
    correta: 0,
    comentario:
      'O autor contesta o gabarito oficial, a alternativa A, porque entende que a questão tem duplo gabarito e deveria ter sido anulada. Segundo ele, a alternativa B também prejudicaria a correção, pois “lembrar” só pede a preposição “de” quando é pronominal (“lembrar-se de”), e o acréscimo de “de” logo após o verbo cria uma incorreção. Pelo gabarito oficial que o livro cita, a correta é a A.',
  },
  {
    id: 'portugues-qlivro40-03',
    temaId: 'portugues',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - IBGE - Analista - Processos Administrativos e Disciplinares - 2016) “Havia um cego sentado numa calçada em Paris. A seus pés, um boné e um cartaz em madeira escrito com giz branco gritava: ‘Por favor, ajude-me. Sou cego’”. A respeito dos componentes e do sentido desse segmento do texto, é correto afirmar que:',
    alternativas: [
      'o cego gritava para ser ouvido pelos transeuntes;',
      'as palavras gritadas pelo cego tentavam convencer o público que passava;',
      'as palavras do cartaz apelavam para a caridade religiosa das pessoas;',
      'a segunda frase do cartaz do cego funciona como consequência da primeira;',
      'o cartaz “gritava” porque o giz branco se destacava no fundo preto.',
    ],
    correta: 4,
    comentario:
      'O autor contesta o gabarito oficial, a alternativa E, e diz que a questão não tem resposta. Ele observa que o texto não informa que o fundo era preto, e que as demais alternativas também estariam erradas: quem grita é o cartaz, numa prosopopeia, e não o cego, o cartaz não faz alusão religiosa, e “Sou cego” é o motivo do pedido, não consequência da primeira frase. Por isso, classifica a questão como mal formulada. Pelo gabarito oficial que o livro cita, a correta é a E.',
  },
];
