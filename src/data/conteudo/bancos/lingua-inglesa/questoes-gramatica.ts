import type { QuestaoTreino } from '../../../types';

/** Questões de gramática aplicada à leitura: tempos verbais, modais, voz passiva, referência, condicionais e relativas. */
export const QUESTOES_GRAMATICA: QuestaoTreino[] = [
  /* ---------- Ligadas aos textos-base ---------- */
  {
    id: 'ing-gramatica-q01',
    temaId: 'ing-gramatica',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    textoBaseId: 'tx-ing-01',
    enunciado:
      'In “hand hygiene is widely regarded as one of the simplest and most effective measures”, the verb form “is regarded” is in the',
    alternativas: [
      'simple present, active voice.',
      'simple present, passive voice.',
      'present perfect, passive voice.',
      'simple past, passive voice.',
      'present continuous, active voice.',
    ],
    correta: 1,
    comentario:
      '“Is regarded” = verbo “be” no simple present (is) + particípio (regarded): voz passiva no presente (“é considerada”). Present perfect exigiria “has been regarded”; simple past, “was regarded”; present continuous, “is regarding”.',
  },
  {
    id: 'ing-gramatica-q02',
    temaId: 'ing-gramatica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    textoBaseId: 'tx-ing-01',
    enunciado:
      'Em “the germ theory of disease would only be accepted decades later”, a forma verbal “would be accepted” expressa, na voz passiva, um fato futuro em relação ao passado narrado, e não uma condição hipotética.',
    gabaritoCE: true,
    comentario:
      'Certo. Aqui “would” é o futuro do passado: a narrativa está nos anos 1840, e a aceitação da teoria dos germes ocorreu depois (“só seria aceita décadas mais tarde”). Não há oração condicional. “Be accepted” (be + particípio) marca a voz passiva.',
  },
  {
    id: 'ing-gramatica-q03',
    temaId: 'ing-gramatica',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    textoBaseId: 'tx-ing-01',
    enunciado:
      'In the third paragraph, the pronoun “they” in “because they act quickly” and the pronoun “they” in “they are not appropriate in every case” refer, respectively, to',
    alternativas: [
      'alcohol-based hand rubs / alcohol-based hand rubs.',
      'clinical situations / hands.',
      'health workers / alcohol-based hand rubs.',
      'alcohol-based hand rubs / hands.',
      'hands / clinical situations.',
    ],
    correta: 0,
    comentario:
      'Nos dois casos, “they” retoma “alcohol-based hand rubs”: são as soluções que agem rápido e que não são adequadas em todos os casos. O terceiro “they” do parágrafo (“they should be washed”) é que retoma “hands” — daí o distrator D.',
  },
  {
    id: 'ing-gramatica-q04',
    temaId: 'ing-gramatica',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    textoBaseId: 'tx-ing-02',
    enunciado: 'In “Each transfer must be recorded”, the modal verb “must” expresses',
    alternativas: ['possibility.', 'ability.', 'permission.', 'obligation.', 'a past habit.'],
    correta: 3,
    comentario:
      '“Must” indica obrigação: cada transferência tem de ser registrada, exigência da cadeia de custódia. Possibilidade seria “may/might”; capacidade, “can”; permissão, “may/can”; hábito passado, “used to/would”.',
  },
  {
    id: 'ing-gramatica-q05',
    temaId: 'ing-gramatica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    textoBaseId: 'tx-ing-02',
    enunciado:
      'Em “moisture trapped in plastic may encourage the growth of bacteria and fungi”, o modal “may” indica certeza de que o crescimento microbiano ocorrerá.',
    gabaritoCE: false,
    comentario:
      'Errado. “May” expressa possibilidade (“pode favorecer”), não certeza. Para certeza, o texto usaria “will” ou o presente simples (“encourages”).',
  },
  {
    id: 'ing-gramatica-q06',
    temaId: 'ing-gramatica',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    textoBaseId: 'tx-ing-03',
    enunciado:
      'In the Conclusions, the structure “unmeasured factors […] might have influenced the results” expresses',
    alternativas: [
      'a certainty about a past event.',
      'an obligation that was not fulfilled.',
      'a possibility referring to the past.',
      'a prohibition imposed by the authors.',
      'an intention for future research.',
    ],
    correta: 2,
    comentario:
      '“Might have” + particípio = possibilidade no passado (“podem ter influenciado”). Certeza seria o simple past (“influenced”); obrigação não cumprida, “should have influenced”; proibição, “must not”; intenção futura, “will/intend to”.',
  },
  {
    id: 'ing-gramatica-q07',
    temaId: 'ing-gramatica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-ing-03',
    enunciado:
      'Em “Workers exposed to night shifts had a higher risk of injury than those who worked day shifts only”, há uma comparação de superioridade, e o pronome “those” retoma “workers”.',
    gabaritoCE: true,
    comentario:
      'Certo. “Higher … than” é comparativo de superioridade (high + -er). “Those who worked day shifts only” = “os (trabalhadores) que trabalhavam só de dia”: “those” evita repetir “workers”.',
  },
  {
    id: 'ing-gramatica-q08',
    temaId: 'ing-gramatica',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    textoBaseId: 'tx-ing-05',
    enunciado:
      'In “a body found in a cold river will cool much faster than one lying in a warm room”, the word “one” replaces',
    alternativas: ['river.', 'room.', 'temperature.', 'person.', 'body.'],
    correta: 4,
    comentario:
      '“One” substitui um substantivo contável já citado para evitar repetição: “a body found in a cold river” × “one (a body) lying in a warm room”. A comparação é entre dois corpos em ambientes diferentes, não entre rio e quarto.',
  },
  {
    id: 'ing-gramatica-q09',
    temaId: 'ing-gramatica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-ing-05',
    enunciado:
      'No período “A report that states that death occurred ‘at 3:15 a.m.’ on the basis of body temperature alone should be regarded with suspicion”, a primeira ocorrência de “that” é conjunção que introduz o conteúdo do que o laudo afirma, e a segunda é pronome relativo que retoma “report”.',
    gabaritoCE: false,
    comentario:
      'Errado. O item inverte as funções. O primeiro “that” é pronome relativo: retoma “report” e é sujeito de “states” (“um laudo que afirma…”). O segundo “that” é conjunção: introduz o que o laudo afirma (“that death occurred at 3:15 a.m.”) e não retoma nenhum termo. O verbo principal do período é “should be regarded”.',
  },
  {
    id: 'ing-gramatica-q10',
    temaId: 'ing-gramatica',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    textoBaseId: 'tx-ing-06',
    enunciado: 'In “The test would correctly identify 95 of the 100 cases”, the modal “would” is used to',
    alternativas: [
      'express a past habit.',
      'make a polite request.',
      'describe the hypothetical result of an imagined situation.',
      'express an obligation.',
      'give permission.',
    ],
    correta: 2,
    comentario:
      'O parágrafo propõe um cenário imaginário (“Consider a hypothetical test…”), e “would” descreve o resultado dessa situação hipotética. Não há hábito passado, pedido, obrigação (“must”) nem permissão (“may/can”).',
  },

  /* ---------- Sem texto-base ---------- */
  {
    id: 'ing-gramatica-q11',
    temaId: 'ing-gramatica',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado: 'Complete the sentence correctly: “If the patient had received the vaccine, he ______ the disease.”',
    alternativas: [
      'would not have developed',
      'will not develop',
      'would not develop',
      'does not develop',
      'had not developed',
    ],
    correta: 0,
    comentario:
      '“If + past perfect” (had received) forma a condicional do tipo 3, hipótese sobre o passado que não aconteceu; a oração principal pede “would have + particípio”. B é tipo 1; C, tipo 2 (pede “If + simple past”); D é tipo 0; E repete o past perfect na oração principal.',
  },
  {
    id: 'ing-gramatica-q12',
    temaId: 'ing-gramatica',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Choose the passive voice of “The pathologist examined the samples.”',
    alternativas: [
      'The samples are examined by the pathologist.',
      'The samples have been examining by the pathologist.',
      'The samples was examined by the pathologist.',
      'The samples were examined by the pathologist.',
      'The pathologist was examined by the samples.',
    ],
    correta: 3,
    comentario:
      'A ativa está no simple past (examined); na passiva, “be” vai para o passado e concorda com o plural “samples” (were) + particípio. A muda o tempo; B usa -ing no lugar do particípio; C erra a concordância (was); E inverte agente e paciente.',
  },
  {
    id: 'ing-gramatica-q13',
    temaId: 'ing-gramatica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A frase “The results must be interpreted with caution” está na voz passiva e expressa necessidade ou obrigação.',
    gabaritoCE: true,
    comentario:
      'Certo. “Must be interpreted” = modal + be + particípio, a voz passiva com modal (“devem ser interpretados”). “Must” indica obrigação ou necessidade.',
  },
  {
    id: 'ing-gramatica-q14',
    temaId: 'ing-gramatica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Na frase “The patient has been in the ICU since Monday”, o present perfect indica que o paciente já recebeu alta da UTI.',
    gabaritoCE: false,
    comentario:
      'Errado. Present perfect com “since” indica situação que começou no passado e continua: o paciente está na UTI desde segunda e ainda permanece lá. A alta seria expressa, por exemplo, por “was discharged from the ICU”.',
  },
  {
    id: 'ing-gramatica-q15',
    temaId: 'ing-gramatica',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado: 'Choose the sentence in which the relative pronoun is used correctly.',
    alternativas: [
      'The doctor which examined the body wrote the report.',
      'The victim, whose wallet was missing, was identified by fingerprints.',
      'The samples who were collected at the scene were sent to the laboratory.',
      'The hospital, that was built in 1950, will be renovated.',
      'The nurse whom gave the injection was well trained.',
    ],
    correta: 1,
    comentario:
      '“Whose” indica posse (a vítima cuja carteira sumira) e está correto. A: para pessoa, “who”, não “which”; C: para coisas, “which/that”, não “who”; D: oração explicativa (entre vírgulas) não aceita “that”, e sim “which”; E: o pronome é sujeito de “gave”, então pede “who”, não “whom”.',
  },
];
