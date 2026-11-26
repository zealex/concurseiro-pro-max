import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 02 — Acentuação Gráfica), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C02: QuestaoTreino[] = [
  {
    id: 'lp-ortografia-qlivro02-01',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB - EEAr - SARGENTO - 2/2011) A ausência do acento gráfico pode modificar a classe gramatical de uma palavra. Em qual das alternativas há uma palavra que, se não for acentuada, deixa de ser um substantivo e passa a ser um verbo?',
    alternativas: [
      'inocência, ignorância, frequência',
      'carência, fragrância, polícia',
      'comício, fascínio, decência',
      'palácio, domínio, ciência',
    ],
    correta: 1,
    comentario:
      'Sem acento, “policia” é a forma do verbo “policiar” (eu policio, ele policia), enquanto “polícia” é substantivo. As demais alternativas não trazem palavra que vire verbo quando perde o acento, já que suas terminações são de substantivos.',
  },
  {
    id: 'lp-ortografia-qlivro02-02',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB - Instituto Rio Branco - Diplomata - 2008) As palavras “líderes”, “empréstimo”, “Económico” e “públicas” recebem acento gráfico com base na mesma justificativa gramatical.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: “lí-de-res”, “em-prés-ti-mo”, “e-co-nô-mi-co” e “pú-bli-cas” são todas proparoxítonas, com a tônica na antepenúltima sílaba, e por isso recebem acento pela mesma regra.',
  },
  {
    id: 'lp-ortografia-qlivro02-03',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - BB - Escriturário - 2008) “(...) Foi graças ao acúmulo desses recursos que o Brasil pôde decretar o fim da sua dívida externa. (...)”. O acento circunflexo em “pôde” indica que, além de a pronúncia da vogal ser fechada, como em ovo, por exemplo, o verbo está no pretérito, o que, por sua vez, indica que o fim da dívida externa foi decretado.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: o circunflexo em “pôde” marca a vogal tônica fechada, como em “ovo”, e distingue a forma do pretérito perfeito do verbo “poder” da forma do presente “pode”.',
  },
  {
    id: 'lp-ortografia-qlivro02-04',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Prefeitura de Salvador - Professor de Português - 2010) Quanto à acentuação gráfica, a relação de palavras em que todas estão conformes ao atual Acordo Ortográfico é:',
    alternativas: [
      'família - arcaico - espermatozóide - pólo;',
      'epopeia — voo - tranquilo - constrói;',
      'troféu — bilíngue - feiura - entrevêem;',
      'decompor - aguentar - apóio - colmeia;',
      'linguística - joia - refém - assembléia.',
    ],
    correta: 1,
    comentario:
      'A alternativa B segue o Acordo de 2009: “epopeia” e “voo” perderam o acento, “tranquilo” não tem acento, e “constrói” mantém o agudo por ser oxítona terminada em ditongo. Em A, “pólo” perdeu o acento; em C, “entrevêem” perdeu o acento; em D, “apóio”; e em E, “assembléia”, que também não o leva mais.',
  },
  {
    id: 'lp-ortografia-qlivro02-05',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB - Instituto Rio Branco - Diplomata - 2010) Julgue o item quanto à correção gramatical. Todas as línguas indígenas em terras brasileiras tem menos de 40 mil falantes, sendo que a mais forte, a tikúna, falada no alto Solimóes, apenas, ultrapassa os 30 mil. O aspecto mais grave é que muitas dessas línguas contam com menos de 1 mil falantes.',
    gabaritoCE: false,
    comentario:
      'O item está errado: o verbo deveria ser “têm”, concordando com o sujeito plural “todas as línguas”, e “Solimóes” deveria ser grafado “Solimões”, com til.',
  },
  {
    id: 'lp-ortografia-qlivro02-06',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRE/AP — Técnico Judiciário — 2011) Entre as frases que seguem, a única correta é:',
    alternativas: [
      'Ele se esqueceu de que?',
      'Era tão ruim aquele texto, que não deu para distribui-lo entre os presentes.',
      'Embora devessemos, não fomos excessivos nas críticas.',
      'O juiz nunca negou-se a atender às reivindicações dos funcionários.',
      'Não sei por que ele mereceria minha consideração.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a única correta. Em B, “distribui-lo” deveria ser “distribuí-lo”, com acento no “í” tônico; em C, “devessemos” deveria ser “devêssemos”; em D, depois de “nunca” a próclise é obrigatória (“nunca se negou”); e em A a frase termina em “de que?”, deixando a construção do verbo “esquecer-se” incompleta.',
  },
  {
    id: 'lp-ortografia-qlivro02-08',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - Correios — Cargos de Nível Superior - 2011) As palavras “ônibus” e “invioláveis” são acentuadas de acordo com a mesma regra de acentuação gráfica.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: “ônibus” é proparoxítona, com a tônica na antepenúltima sílaba, enquanto “invioláveis” é paroxítona terminada em ditongo (-eis). As duas palavras recebem acento por regras diferentes.',
  },
  {
    id: 'lp-ortografia-qlivro02-09',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TJ/ES - Analista Judiciário — 2011) Os vocábulos “analítica” e “teríamos” recebem acento gráfico com base na mesma regra de acentuação.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: “a-na-lí-ti-ca” e “te-rí-a-mos” são proparoxítonas, com a tônica na antepenúltima sílaba, e por isso recebem acento pela mesma regra.',
  },
  {
    id: 'lp-ortografia-qlivro02-10',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/ UnB -TJ/ES - Cargos de nível superior- 2011) Os vocábulos “países” e “áreas” são acentuados de acordo com a mesma regra de acentuação gráfica.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: “países” (pa-í-ses) recebe acento pela regra do hiato, por ter o “i” tônico depois de outra vogal, e “áreas” (á-re-as) é proparoxítona. Por isso as regras são diferentes.',
  },
  {
    id: 'lp-ortografia-qlivro02-11',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FUNIVERSA—SEPLAG/DF—AFAU (Transportes)—2011) (Adaptada) A afirmação abaixo está correta ou incorreta? — As palavras “ninguém”, “pé” e “você” são acentuadas pela mesma razão.',
    gabaritoCE: false,
    comentario:
      'A afirmação é incorreta: “ninguém” é oxítona terminada em -em, “pé” é monossílabo tônico terminado em -e e “você” é oxítona terminada em -e. As três palavras não recebem acento pela mesma razão.',
  },
  {
    id: 'lp-ortografia-qlivro02-12',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - SEEC/RN - Professor de Português - 2011) Conforme o novo Acordo Ortográfico da Língua Portuguesa, que só entrará plenamente em vigor a partir de 1º de janeiro de 2013, o hífen NÃO deve ser utilizado em:',
    alternativas: [
      'formas compostas que designam espécies botânicas e zoológicas, estejam ou não ligadas por preposição ou qualquer outro elemento;',
      'palavras formadas com o acréscimo de prefixos como anti-, sub-, em que o segundo elemento começa por h;',
      'palavras formadas por prefixo que termina na mesma vogal em que se inicia o segundo elemento;',
      'palavras formadas por prefixo terminado em vogal quando o 2º elemento começa por r ou s;',
      'topônimos iniciados pelos adjetivos grã, grão.',
    ],
    correta: 3,
    comentario:
      'Quando o prefixo termina em vogal e o segundo elemento começa por r ou s, o hífen não é usado e a consoante se dobra (“antirreligioso”, “ultrassom”). As demais estão erradas: plantas e animais compostos mantêm o hífen, prefixos como “anti-” seguidos de h mantêm o hífen e vogal repetida também exige hífen (“micro-ondas”).',
  },
  {
    id: 'lp-ortografia-qlivro02-13',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funcab — MPE/RO—Analista (Administração) — 2012) Assinale a alternativa em que todos os substantivos devem ser acentuados.',
    alternativas: [
      'lapis — bonus — bainha.',
      'serie - aspecto - torax.',
      'álcool - moinho — sucuri.',
      'urubu — egoismo — magoa.',
      'armazém— orgáo — carater.',
    ],
    correta: 4,
    comentario:
      'Em “armazém” (oxítona terminada em -em), “órgão” (paroxítona terminada em -ão) e “caráter” (paroxítona terminada em -r) o acento é obrigatório. Nas demais alternativas aparecem palavras sem acento obrigatório, como “bainha”, “aspecto”, “moinho” e “urubu”.',
  },
  {
    id: 'lp-ortografia-qlivro02-14',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FCC — TCE/AP — Analista de Controle Externo — 2012) (Adaptada) A frase abaixo está correta ou incorreta quanto à acentuação? — Quando entrevisto candidatos, sempre os argúo acerca de sua descrição quanto a assuntos profissionais, pois esse é um dos quesitos avaliados no processo de ascenção na empresa.',
    gabaritoCE: false,
    comentario:
      'A frase está incorreta: “ascenção” não é a grafia certa, pois o substantivo se escreve “ascensão”, com “s”. O erro aparece na palavra da frase, e por isso o item não pode ser aceito como correto.',
  },
  {
    id: 'lp-ortografia-qlivro02-15',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FCC - TCE/SP — Agente de Fiscalização Financeira (ADM) — 2012) (Adaptada) A frase abaixo está correta ou incorreta quanto à acentuação? — Eram vários e bastante distintos os estudos acerca dessas produções populares, uma das quais, nas últimas semanas, vêm merecendo elogios e indicação para publicação.',
    gabaritoCE: false,
    comentario:
      'A frase está incorreta: o sujeito “uma das quais” é singular, e a forma verbal deveria ser “vem”, sem acento circunflexo. O circunflexo de “vêm” marca a terceira pessoa do plural, o que não combina com esse sujeito.',
  },
  {
    id: 'lp-ortografia-qlivro02-16',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC —TRF (2ª R) — Analista Judiciário — 2012) Consideradas as prescrições do Acordo Ortográfico da Língua Portuguesa, em vigor desde janeiro de 2009, a palavra em que o hífen foi empregado de modo INCORRETO é:',
    alternativas: [
      'anti-higiênico;',
      'hiper-realista;',
      'aquém-fronteiras;',
      'bem-visto;',
      'anti-semita.',
    ],
    correta: 4,
    comentario:
      'A forma “anti-semita” está errada: com o prefixo “anti-” seguido de “s”, a grafia correta é “antissemita”, sem hífen e com o “s” dobrado. As demais seguem o Acordo: “anti-higiênico” mantém o hífen diante de h, e “hiper-realista”, “aquém-fronteiras” e “bem-visto” também mantêm o hífen.',
  },
  {
    id: 'lp-ortografia-qlivro02-17',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — MPE/PI — Cargos de Nível Superior — 2012) De acordo com a ortografia oficial vigente, o vocábulo “órgãos” segue a mesma regra de acentuação que o vocábulo “últimos”.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: “órgãos” é paroxítona terminada em -ãos, com acento pela terminação, enquanto “últimos” é proparoxítona, com a tônica na antepenúltima sílaba. As regras são diferentes.',
  },
  {
    id: 'lp-ortografia-qlivro02-18',
    temaId: 'lp-ortografia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — MPE/PI - Cargos de Nível Médio - 2012) Os verbos “comunicar”, “ensinar” e “comandar”, quando complementados pelo pronome a, acentuam-se da mesma forma que “constatá-las”, “designá-las” e “elevá-las”.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: com o pronome “a” (ou “as”), os verbos terminados em -ar ficam oxítonos e recebem acento agudo, como em “comunicá-la”, “ensiná-la” e “comandá-la”, da mesma forma que “constatá-las”, “designá-las” e “elevá-las”.',
  },
  {
    id: 'lp-ortografia-qlivro02-19',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — Liquigás — Profissional Jr. - 2012) De acordo com as regras de acentuação, o grupo de palavras que foi acentuado pela mesma razão é:',
    alternativas: [
      'céu, já, troféu, baú.',
      'herói, já, paraíso, pôde.',
      'jóquei, oásis, saúde, têm.',
      'baía, cafeína, exército, saúde.',
      'amiúde, cafeína, graúdo, sanduíche.',
    ],
    correta: 4,
    comentario:
      'Em “amiúde”, “cafeína”, “graúdo” e “sanduíche” o acento marca a vogal tônica “i” ou “u” em hiato, depois de outra vogal (a-mi-ú-de, ca-fe-í-na, gra-ú-do, san-du-í-che). As demais misturam regras diferentes, como a das oxítonas, a das proparoxítonas e a dos ditongos.',
  },
  {
    id: 'lp-ortografia-qlivro02-20',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC -TST - Analista Judiciário - 2012) Segundo os preceitos da gramática normativa do português do Brasil, a única palavra dentre as citadas abaixo que NÃO deve ser pronunciada com o acento tônico recaindo em posição idêntica àquela em que recai na palavra avaro é:',
    alternativas: ['mister;', 'filantropo;', 'gratuito;', 'maquinaria;', 'ibero.'],
    correta: 0,
    comentario:
      'Em “avaro” a tônica cai na antepenúltima sílaba (ÁVARO). “Mister” é paroxítona (MIS-ter), enquanto “filantropo”, “gratuito”, “maquinaria” e “ibero” têm a tônica na antepenúltima, como “avaro”.',
  },
  {
    id: 'lp-ortografia-qlivro02-21',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Cesgranrio — CMB — Assistente Técnico Administrativo - 2012) Algumas palavras são acentuadas com o objetivo exclusivo de distingui-las de outras. Uma palavra acentuada com esse objetivo é a seguinte:',
    alternativas: ['pôr.', 'ilhéu.', 'sábio.', 'também.', 'lâmpada.'],
    correta: 0,
    comentario:
      '“Pôr” (verbo) recebe acento apenas para se distinguir de “por”, preposição. Nas demais, o acento segue a tonicidade ou a regra de terminação, não existindo a função diferencial.',
  },
  {
    id: 'lp-ortografia-qlivro02-22',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(CEPERJ - Procon/RJ - Advogado - 2012) A palavra do texto que teve sua grafia alterada pelo mais recente acordo ortográfico é:',
    alternativas: ['mídias.', 'álcool.', 'trás.', 'estresse.', 'ideia.'],
    correta: 4,
    comentario:
      'A palavra “ideia” perdeu o acento agudo do ditongo “ei” de paroxítona, antes grafada “idéia”. As demais palavras mantiveram sua grafia no Acordo de 2009.',
  },
  {
    id: 'lp-ortografia-qlivro02-23',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAFIPA — Câmara Municipal de Guairáça/PR - Advogado - 2013) Assinale a alternativa INCORRETA quanto ao emprego do hífen, segundo a nova ortografia da língua portuguesa:',
    alternativas: ['Contrarreforma.', 'Inter-relação.', 'Anti-inflamatório.', 'Semi-reta.'],
    correta: 3,
    comentario:
      'A alternativa D é a incorreta: “semi-reta” perde o hífen, pois o prefixo terminado em vogal seguido de “r” dobra a consoante, e a grafia correta é “semirreta”. “Contrarreforma” também dobra o r, “inter-relação” mantém o hífen diante de r e “anti-inflamatório” mantém o hífen diante da mesma vogal.',
  },
  {
    id: 'lp-ortografia-qlivro02-24',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(IDECAN — Pref. Rio Pomba/MG — Auxiliar Administrativo - 2015) A palavra “eficácia” é acentuada pelo mesmo motivo que a seguinte palavra:',
    alternativas: ['Suíça.', 'útero.', 'câncer.', 'prevalência.'],
    correta: 3,
    comentario:
      '“Eficácia” e “prevalência” são paroxítonas terminadas em ditongo crescente (-cia), e por isso recebem acento pela mesma regra. As demais têm outras razões: “Suíça” tem hiato, “útero” é proparoxítona e “câncer” é paroxítona terminada em -r.',
  },
  {
    id: 'lp-ortografia-qlivro02-25',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - SSP/AM - Técnico de Nível Superior - 2015) “Os bebés têm uma necessidade muito grande de interação”. Sobre os acentos e sinais gráficos presentes nas palavras desse segmento do texto, a afirmação correta é:',
    alternativas: [
      'o vocábulo “bebê” só pode ser grafado com circunflexo;',
      'o vocábulo “têm” recebe acento circunflexo por ter som nasal;',
      'o vocábulo “têm” mostra número plural por meio do acento circunflexo;',
      'no vocábulo “interação”, o til mostra que a vogal a é oral;',
      'no vocábulo “bebés”, o acento mostra que a vogal acentuada deve ser pronunciada fechada.',
    ],
    correta: 2,
    comentario:
      'O circunflexo de “têm” distingue o plural da forma “tem”, do singular, e essa é a afirmação correta. As demais erram: o som nasal não justifica o acento de “têm”, o til de “interação” indica vogal nasal, e o agudo de “bebés” marca vogal aberta, não fechada.',
  },
  {
    id: 'lp-ortografia-qlivro02-26',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - AL/RO - Analista Legislativo (Redação e Revisão) - 2018) Assinale a opção em que a palavra sublinhada está corretamente grafada.',
    alternativas: [
      '“Esse previlégio de sentir-se em casa em qualquer lugar pertence apenas aos reis.”',
      '“A natureza brasileira apresenta aspetos bem diversos.”',
      '“No alto do morro, um palacete com picina.”',
      '“As seções espiritas eram realizadas todos os dias.”',
      '“Na adolecéncia tudo é permitido.”',
    ],
    correta: 1,
    comentario:
      'A opção B está correta: “aspetos” segue a grafia do Acordo de 2009, que eliminou o “c” de “aspecto”. As demais erram a grafia: “previlégio” deveria ser “privilégio”, “picina” deveria ser “piscina”, “espiritas” deveria ser “espíritas” e “adolecéncia” deveria ser “adolescência”.',
  },
  {
    id: 'lp-ortografia-qlivro02-27',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp—TJ/SP - Enfermeiro Judiciário - 2019) Assinale a alternativa em que os termos estão acentuados, correta e respectivamente, a exemplo das palavras: dúvida, abundância e também.',
    alternativas: [
      'exíguo; hemácia; outrem.',
      'trôpego; anúncia; provém.',
      'rúbrica; latência; pajém.',
      'álibi; essência; aquém.',
      'récorde; incônscio; amém.',
    ],
    correta: 3,
    comentario:
      '“Dúvida” é proparoxítona, “abundância” é paroxítona terminada em ditongo (-cia) e “também” é oxítona terminada em -em. Em D, “álibi” (proparoxítona), “essência” (paroxítona em ditongo) e “aquém” (oxítona em -em) seguem essa mesma sequência de regras.',
  },
  {
    id: 'lp-ortografia-qlivro02-28',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Instituto Consulplan - Prefeitura de Formiga/MG - Agente Social — 2020) O verbo “ter” em “Algumas pessoas têm a falsa impressão de que todos os resíduos plásticos são recicláveis, (...)” (2º §) recebe acento circunflexo porque está na 3ª pessoa do plural do presente do indicativo. Observe o emprego deste acento nas orações a seguir. I. Eles vêem o pássaro. II. Os vasos contêm flores. III. Os doces vêm da Argentina. IV. Os livros da biblioteca provêm de doações. Em quais orações os verbos também devem receber acento circunflexo?',
    alternativas: ['I e II.', 'III e IV.', 'I, II e III.', 'II, III e IV.'],
    correta: 3,
    comentario:
      'Devem receber circunflexo “contêm” (II), “vêm” (III) e “provêm” (IV), todos na 3ª pessoa do plural. A oração I está errada, porque “veem”, forma do verbo “ver”, perdeu o acento pelo Acordo de 2009.',
  },
  {
    id: 'lp-ortografia-qlivro02-29',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Idecan - Prefeitura de Campina Grande/PB - Fiscal de Tributos Municipais - 2021) Sobre o emprego do hífen, assinale a alternativa em que a regra de seu uso NÃO tenha sido corretamente observada.',
    alternativas: ['socioeducativo', 'co-réu', 'micro-ondas', 'hiper-realista'],
    correta: 1,
    comentario:
      'A forma “co-réu” contraria a regra: o prefixo “co-” seguido de “r” dobra a consoante, e a grafia correta é “corréu”, sem hífen. As demais seguem o Acordo: “socioeducativo” não tem hífen, “micro-ondas” o tem por repetir a vogal, e “hiper-realista” mantém o hífen diante de r.',
  },
  {
    id: 'lp-ortografia-qlivro02-30',
    temaId: 'lp-ortografia',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FAURGS - SES-RS - Administrador - 2022) Qual dos exemplos abaixo NÃO é um monossílabo tônico?',
    alternativas: ['lei', 'fim', 'mais', 'dos', 'ser'],
    correta: 3,
    comentario:
      '“Dos” é monossílabo átono, resultado da contração de “de” com “os”, por isso não tem tonicidade própria. “Lei”, “fim”, “mais” e “ser” são monossílabos tônicos.',
  },
];
