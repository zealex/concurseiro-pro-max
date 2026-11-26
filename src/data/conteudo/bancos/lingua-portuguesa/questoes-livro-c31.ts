import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 31 — Que, se e como), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C31: QuestaoTreino[] = [
  {
    id: 'lp-que-se-como-qlivro31-01',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB - EEAR - Sargento - 2002) “Convive com teus poemas, antes de escrevê-los. Tem paciência, se obscuros. Calma, se te provocam. Espera que cada um se realize e consuma com seu poder de palavras e seu poder de silêncio (...)”. (C. D. Andrade) As palavras grifadas, no poema, classificam-se, respectivamente, como:',
    alternativas: [
      'conjunção integrante, conjunção integrante;',
      'conjunção adverbial condicional, conjunção adverbial condicional;',
      'partícula expletiva, partícula expletiva;',
      'pronome reflexivo, conjunção adverbial condicional.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: nas duas ocorrências, “se” inicia uma oração de condição (“se forem obscuros”, “se te provocam”), o que caracteriza a conjunção subordinativa adverbial condicional. A alternativa A trata o “se” como integrante, o que não cabe nesses contextos; C atribui valor de realce; e D toma o “se” como pronome reflexivo, que não aparece nessas posições.',
  },
  {
    id: 'lp-que-se-como-qlivro31-02',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Trecho de Novas Cartas Portuguesas) “Minha querida Mariana: Só hoje consegui autorização da tua Madre Superiora para te escrever, às escondidas de teus pais e meu marido, que embora não te conheça a ti não pode de ti ouvir, sem raiva, certamente pela amizade que sabe eu te dedicar e isso o enfurece (...)”. Observando-se a natureza morfológica e a função sintática dos termos em destaque, é correto afirmar que são, respectivamente:',
    alternativas: [
      'conjunção integrante e sujeito; pronome relativo e objeto direto;',
      'pronome relativo e sujeito; pronome relativo e objeto direto;',
      'conjunção integrante e objeto direto; conjunção integrante e sujeito;',
      'pronome relativo e sujeito, pronome relativo e sujeito.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: o primeiro “que” retoma “meu marido” e é sujeito de “não pode ouvir”; o segundo retoma “a amizade” e é objeto direto de “sabe... dedicar”. A alternativa A classifica o primeiro “que” como integrante, quando ele retoma um antecedente; C e D repetem a mesma confusão entre integrante e relativo.',
  },
  {
    id: 'lp-que-se-como-qlivro31-03',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - Senado Federal - Analista Legislativo - 2008) “Outro aspecto que configura alguns desafios ainda não resolvidos na atual Constituição é a existência de muitos dispositivos a reclamar leis que lhes deem eficácia plena. A propósito, convém recordar que, promulgado o diploma constitucional, o Ministério da Justiça realizou levantamento de que resultou a publicação do livro ‘Leis a Elaborar’”. Em relação às ocorrências da palavra QUE no trecho acima, é correto afirmar que há:',
    alternativas: [
      'duas conjunções subordinativas, um pronome relativo e uma conjunção integrante;',
      'três conjunções subordinativas e um pronome relativo;',
      'três conjunções integrantes e uma conjunção subordinativa;',
      'dois pronomes relativos e duas conjunções integrantes;',
      'três pronomes relativos e uma conjunção integrante.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: há três pronomes relativos (“que configura”, “que lhes deem” e “de que resultou”), cada um retomando um antecedente, e uma conjunção integrante (“convém recordar que, promulgado...”). As demais alternativas erram ao contar as ocorrências ou ao atribuir subordinação a um “que” que é relativo.',
  },
  {
    id: 'lp-que-se-como-qlivro31-04',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - Senado Federal - Analista de Relações Públicas - 2008) “Ainda não é o fim do capitalismo, mas talvez seja a agonia do caráter neoliberal que hipertrofiou o sistema financeiro. Acumular fortunas tornou-se mais importante que produzir bens e serviços”. Assinale a alternativa em que estejam corretamente classificadas, respectivamente, as ocorrências da palavra QUE no trecho acima.',
    alternativas: [
      'pronome relativo - conjunção subordinativa.',
      'conjunção integrante - conjunção integrante.',
      'pronome relativo - pronome relativo.',
      'conjunção integrante - conjunção subordinativa.',
      'conjunção subordinativa - pronome relativo.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: o primeiro “que” (“o caráter neoliberal que hipertrofiou”) é pronome relativo, que retoma “caráter neoliberal”; o segundo, em “mais importante que produzir”, introduz comparação e é conjunção subordinativa. As demais alteram uma das duas classificações.',
  },
  {
    id: 'lp-que-se-como-qlivro31-05',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - MEC - Analista de Sistemas - 2009) “À evidência imposta, que presume que a única forma aceitável de organização de uma sociedade é a regulação pelo mercado, podemos opor a proposta de organizar as sociedades e o mundo a partir do acesso para todos aos direitos fundamentais”. As ocorrências da palavra QUE no trecho acima são classificadas como:',
    alternativas: [
      'conjunção integrante e conjunção integrante;',
      'pronome relativo e conjunção integrante;',
      'pronome relativo e pronome relativo;',
      'conjunção subordinativa e conjunção subordinativa;',
      'conjunção integrante e pronome relativo.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “que presume” é pronome relativo, retomando “evidência imposta”, e “que a única forma aceitável...” é conjunção integrante, pois completa o sentido de “presume”. As demais atribuem a mesma classe às duas ocorrências ou invertem a ordem das classes.',
  },
  {
    id: 'lp-que-se-como-qlivro31-06',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(UFF - UFF - Administrador - 2009) A conjunção “como” está empregada no período: “Aliás, é quase consenso que uma das maiores falhas dos Estados Unidos é não terem um sistema de saúde como o europeu e o canadense” com o mesmo valor significativo que no período:',
    alternativas: [
      'Não constitui novidade para mim, pois várias vezes já ouvi essa “teoria”, como ele a chama.',
      'Como anoitecesse, recolhi-me pouco depois e deitei-me.',
      'Sua força vinha dos olhos, vivos e inquiridores como os de um cachorro fiel.',
      'Como terá conseguido vencer, se tudo lhe eram obstáculos?',
      'Homem de poucas letras, queria saber como devia expressar o que sentia por ela.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “como os de um cachorro fiel” compara os olhos da força a outros olhos, a mesma relação de comparação do trecho-base. A alternativa A expressa conformidade, B tem valor causal ou temporal, D é causal ou interrogativo e E indica modo.',
  },
  {
    id: 'lp-que-se-como-qlivro31-07',
    temaId: 'lp-que-se-como',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - IRBr - Diplomata - 2009) (Adaptada) A afirmação abaixo está correta ou incorreta? Em “O que é importante notar aqui é que a oposição entre falar e escrever não se funda mais na oposição entre presença e ausência”, a expressão “é que” é expletiva.',
    gabaritoCE: false,
    comentario:
      'Errado. Nesse período, o “que” introduz a oração completiva que funciona como complemento de “é importante notar”, sendo conjunção integrante. Uma expletiva poderia ser retirada sem alterar a estrutura, o que não ocorre aqui.',
  },
  {
    id: 'lp-que-se-como-qlivro31-08',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNCAB - Pref. Porto Velho/RO - Médico - 2009) Assinale a opção em que a palavra grifada é uma conjunção subordinativa adverbial condicional.',
    alternativas: [
      '“Outro dia, um amigo biólogo me perguntou se eu gostaria de conviver bilhões de anos ao lado dos ectoplasmas de macaco...”',
      '“O cientista Carl Sagan adverte, como muitos outros, que vida só se tem uma...”',
      '“Resolver essa dúvida religiosa logo no início da vida adulta é mais importante do que se imagina.”',
      '“... poderá vir a ser o bisavô daquela moça que vai um dia se casar com seu bisneto.”',
      '“Se não transmitirmos uma ética robusta a eles, nosso DNA terá curta duração.”',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “Se não transmitirmos uma ética robusta” inicia oração condicional, com valor de “caso”. Em A, o “se” introduz oração integrante; em B, o “se” é partícula de indeterminação do sujeito; em C, a relação é de comparação com “do que”; e em D, o “se” é pronome que acompanha o verbo “casar”.',
  },
  {
    id: 'lp-que-se-como-qlivro31-09',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - IBGE - Analista Agrícola - 2010) “Nenhum bicho venenoso pode alegar que a luta pela vida o fez assim. Que ele foi ficando venenoso com o tempo, que só descobriu que sua picada era tóxica por acidente, que nunca pensou etc.”. No trecho acima, o cronista faz uso do termo “que”, repetidamente. A passagem na qual o termo “que” apresenta a mesma classificação gramatical daquela desempenhada no trecho destacado é:',
    alternativas: [
      '“as características que garantem a sua sobrevivência”;',
      '“a arma ou o disfarce que o salva dos seus predadores”;',
      '“E o que vale para serpentes vale para o ser humano”;',
      '“o fato é que não dá para evitar a constatação”;',
      '“A pura maldade inerente a tanto que se vê”.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: em “o fato é que não dá para evitar”, o “que” é conjunção integrante, como o “que” que introduz a oração de “pode alegar que a luta...”. As demais trazem pronomes relativos (A, B, E) ou o “o que” relativo (C).',
  },
  {
    id: 'lp-que-se-como-qlivro31-10',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNCAB - DETRAN/PE - Analista de Trânsito - 2010) Marque a opção que apresenta, respectivamente, a ideia expressa pela conjunção “como” em cada uma das frases abaixo. I. “Até aparelhos que deixam as mãos livres, como o bluetooth, não eliminam os riscos”. II. “Como a legislação difere entre os estados americanos, pesquisas frequentes ajudam a estimular o debate”. III. “... como eu ia dizendo, é muito mais econômico você andar devagar e ser assaltado por mim do que correr e ser assaltado pelo radar”.',
    alternativas: [
      'comparação — causa — conformidade.',
      'comparação — comparação — conformidade.',
      'conformidade — causa — comparação.',
      'causa — conformidade — causa.',
      'causa — conformidade — conformidade.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: em I, “como o bluetooth” compara e exemplifica; em II, “Como a legislação difere” indica causa; em III, “como eu ia dizendo” expressa conformidade (= conforme). As demais atribuem a I ou a II sentidos que não se encaixam.',
  },
  {
    id: 'lp-que-se-como-qlivro31-11',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEC - MPA - Agente Administrativo - 2010) A conjunção “como”, nas orações “como mostramos todos os meses em nossa revista” e “Como sempre digo”, tem o mesmo valor significativo que em:',
    alternativas: [
      'Como foi combinado, partimos bem cedo.',
      'Como fazia calor, abrimos as janelas.',
      'Não sei como ela suportou tanta injustiça.',
      'Era tão alto como o irmão.',
      'Saltava pelo campo como uma lebre.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “Como foi combinado” tem valor conformativo, como “como mostramos” e “como sempre digo”, equivalendo a “conforme”. B é causal; C é modal ou interrogativa; D e E são comparativas.',
  },
  {
    id: 'lp-que-se-como-qlivro31-12',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Bacen - Técnico - 2010) No fragmento “O novo acordo precisa ir muito além de Kyoto, se a meta for impedir que o aumento da temperatura média da atmosfera ultrapasse 2 °C de aquecimento neste século, como recomenda a maioria dos climatologistas”, o termo “se” tem o sentido equivalente ao de:',
    alternativas: [
      'logo que;',
      'à medida que;',
      'no caso de;',
      'apesar de;',
      'uma vez que.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: a oração “se a meta for impedir...” expressa hipótese, e “no caso de” traduz esse valor condicional. As demais correspondem a temporal (A), proporcional (B), concessivo (D) e causal (E), sentidos que não cabem na hipótese do trecho.',
  },
  {
    id: 'lp-que-se-como-qlivro31-13',
    temaId: 'lp-que-se-como',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FUNRIO - SEBRAE/PA - Analista Técnico - 2010) (Adaptada) Considere o trecho: “(...) Se faziam tudo aquilo é que não tinham casa... (...)”. A afirmação abaixo está correta ou incorreta? O uso do pronome SE no início da terceira frase é uma marca de oralidade tipicamente brasileira.',
    gabaritoCE: false,
    comentario:
      'Errado. O “Se” inicial é conjunção subordinativa condicional, e não pronome; a afirmação atribui ao uso uma marca de oralidade que o trecho não comprova.',
  },
  {
    id: 'lp-que-se-como-qlivro31-14',
    temaId: 'lp-que-se-como',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FUNRIO - SEBRAE/PA - Analista Técnico - 2010) (Adaptada) Considere o trecho: “(...) Se faziam tudo aquilo é que não tinham casa... (...)”. A afirmação abaixo está correta ou incorreta? A expressão É QUE usada na terceira frase é expletiva e pode ser retirada do período sem prejuízo de sentido.',
    gabaritoCE: false,
    comentario:
      'Errado. Nesse período, “é que” não é partícula expletiva: sua retirada desfaz a relação de causa entre as duas partes da frase, o que prejudica o sentido.',
  },
  {
    id: 'lp-que-se-como-qlivro31-15',
    temaId: 'lp-que-se-como',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TRE/ES - Técnico Judiciário - 2011) Em “inspirar-se” (Os participantes... bem poderiam... inspirar-se na última reunião sobre diversidade.), a partícula “se” indica que o sujeito da oração é indeterminado.',
    gabaritoCE: false,
    comentario:
      'Errado. O “se” de “inspirar-se” faz parte do verbo pronominal, e o sujeito da oração é “Os participantes”, explícito. Não há indeterminação do sujeito.',
  },
  {
    id: 'lp-que-se-como-qlivro31-16',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - SEFAZ/RJ - Auditor-Fiscal da Receita Estadual - 2011) É certo que a mudança do enfoque sobre o tema, no âmbito das empresas — principalmente, as transnacionais —, decorrerá também de ajustamentos de postura administrativa decorrentes da adoção de critérios de responsabilização penal da pessoa jurídica em seus países de origem. Tais mudanças, inevitavelmente, terão que abranger as práticas administrativas de suas congêneres espalhadas pelo mundo, a fim de evitar respingos de responsabilização em sua matriz. No trecho acima, as ocorrências da palavra QUE classificam-se, respectivamente, como:',
    alternativas: [
      'pronome relativo e preposição;',
      'conjunção integrante e preposição;',
      'conjunção integrante e conjunção integrante;',
      'pronome relativo e conjunção integrante;',
      'preposição e pronome relativo.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: o primeiro “que” (“É certo que a mudança...”) é conjunção integrante, e o segundo (“terão que abranger”) é preposição acidental, com valor de “de”, na locução “ter que + infinitivo”. As demais atribuem pronome relativo a uma ocorrência que não retoma antecedente, ou repetem a classe integrante.',
  },
  {
    id: 'lp-que-se-como-qlivro31-17',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - AFA - Oficial - 2011) Assinale a única alternativa em que a palavra SE recebe a mesma classificação morfossintática que a destacada em: “Outra discussão chata, durante e após as partidas, é se um jogador teve a intenção...”.',
    alternativas: [
      '“...ambiente bélico em que se transformou o futebol, dentro e fora de campo.”',
      '“Impressiona-me como se formam conceitos...”',
      '“Se dizem que a imagem vale mais que mil palavras, por que se fala e se grita tanto?”',
      '“Não dá para o árbitro saber se a falta foi intencional ou não.”',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: nos dois casos, “se” introduz oração substantiva e é conjunção subordinativa integrante, podendo ser substituído por “isso” (“é isso”, “saber isso”). As demais trazem “se” pronominal (A, C) ou conjunção comparativa (B).',
  },
  {
    id: 'lp-que-se-como-qlivro31-18',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      'Assinale a alternativa na qual a palavra QUE tem a mesma classificação morfológica que a destacada em: “... baseados em estatísticas que têm pouca ou nenhuma importância.”',
    alternativas: [
      '“... ambiente bélico em que se transformou o futebol.”',
      '“É óbvio que informações e estatísticas são importantíssimas.”',
      '“Se dizem que a imagem vale mais que mil palavras...”',
      '“... para achar que todas as faltas violentas são involuntárias.”',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “em que” é pronome relativo, que retoma “ambiente bélico”, como o “que” de “estatísticas que têm” retoma “estatísticas”. B e D trazem conjunção integrante, e C combina integrante com o “mais que” comparativo.',
  },
  {
    id: 'lp-que-se-como-qlivro31-19',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEC/UFF - PC/RJ - Inspetor de Polícia Civil - 2012) Na frase: “Elas fracassarão COMO construtoras de conhecimento de alto nível”, a palavra em destaque expressa noção idêntica à que se lê em:',
    alternativas: [
      'Como lhe disse, estou cansado de trabalhar.',
      'Como chegou tarde, não pode entrar em sala.',
      'Ele é tão trabalhador como o pai.',
      'Venceu, mas como, se nunca quis nada?',
      'Para mim, isto não diz nada como poesia.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “como poesia” tem valor de preposição acidental (= na qualidade de), como “como construtoras” no trecho-base. A: conformidade; B: causal; C: comparativa; D: interrogativo-adversativo.',
  },
  {
    id: 'lp-que-se-como-qlivro31-20',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - Pref. Suzano/SP - Médico Cardiologista - 2012) Leia as frases do segundo parágrafo: “Como todo remédio, o tempo precisa ser bem administrado. Como ainda não inventaram uma categoria na medicina para tratar disso, cabe a nós mesmos saber diferenciar um do outro.” O termo Como, destacado nas frases, introduz, respectivamente, ideias de:',
    alternativas: [
      'comparação e alternância;',
      'concessão e condição;',
      'comparação e causa;',
      'concessão e alternância;',
      'consequência e condição.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “Como todo remédio” compara o tempo a um remédio, e “Como ainda não inventaram” expressa causa, equivalendo a “porque”. As demais trazem alternância, concessão, condição ou consequência, que não correspondem a essas frases.',
  },
  {
    id: 'lp-que-se-como-qlivro31-21',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FUNCAB - MPE/RO - Técnico em Contabilidade - 2012) Em relação ao SE em “(...) Se a mãe estivesse em casa, ela teria dado uma ideia (...)”, é correto afirmar que, morfologicamente, o termo é:',
    alternativas: [
      'uma conjunção subordinativa integrante, ou seja, é elemento de ligação entre a oração subordinada substantiva direta e a oração principal;',
      'uma conjunção subordinativa adverbial condicional, ou seja, é elemento de ligação entre a oração subordinada adverbial condicional e a oração principal;',
      'pronome reflexivo, pois indica que a ação expressa volta-se sobre o próprio sujeito da ação verbal, nele se refletindo;',
      'índice de indeterminação do sujeito, porque serve para deixar indeterminado um sujeito de 3ª pessoa, junto ao verbo intransitivo;',
      'pronome apassivador, porque associa-se ao verbo transitivo para garantir o sentido passivo pretendido para a voz verbal, ou seja, contribui para a caracterização da voz do verbo.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “Se a mãe estivesse em casa” é oração subordinada condicional, e o “se” é conjunção que a liga à principal. A: a oração não é substantiva; C: não há reflexividade; D: o verbo não é intransitivo nem indetermina sujeito; E: não há verbo transitivo com voz passiva.',
  },
  {
    id: 'lp-que-se-como-qlivro31-22',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CONSULPLAN - Pref. Barra Velha/SC - Agente Controle Interno - 2012) Dentre os elementos em destaque, só NÃO exerce papel pronominal:',
    alternativas: [
      '“um pesadelo que me atormentou por mais de um ano”.',
      '“A história que agora passo a narrar”.',
      '“decidiram em assembleia que esperariam”.',
      '“essas criaturas que adotamos”.',
      '“mundo cão em que vivemos”.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “que esperariam” é conjunção integrante, que não exerce papel pronominal. As demais trazem “que” ou “em que” como pronome relativo, que retoma um antecedente e atua como termo da oração adjetiva.',
  },
  {
    id: 'lp-que-se-como-qlivro31-23',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(CONSULPLAN - TSE - Analista Judiciário - 2012) Verdade é que (1) a ação em nome de um universal por si só caracteriza qualquer moral. É por meio dela que (2) se faz o cálculo do “sentido” no qual, fora da vantagem que (3) define a regra, o sujeito honesto se transfigura imediatamente em otário. A respeito das ocorrências do QUE no período anterior, é correto afirmar que se trata de conjunção em:',
    alternativas: [
      '(1), apenas.',
      '(3), apenas.',
      'todas.',
      '(2), apenas.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: só o primeiro “que” (“Verdade é que”) é conjunção integrante, pois introduz a oração que completa a afirmação. Em (2), o “que” é pronome relativo (“por meio da qual”), e em (3) ele retoma “vantagem”, também como relativo.',
  },
  {
    id: 'lp-que-se-como-qlivro31-24',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - Liquigás - Profissional Júnior - 2012) A opção por uma linguagem informal, em algumas passagens do texto, permite jogos de palavras como o que se verifica no emprego de Se nas seguintes frases: “Se o cinema está cheio, a gente senta na primeira fila e torce um pouco o pescoço”. “A gente se acostuma para não se ralar na aspereza, para preservar a pele. Se acostuma para evitar feridas, sangramentos...”. Nos trechos acima, as palavras em destaque classificam-se, respectivamente, como:',
    alternativas: [
      'conjunção e pronome;',
      'conjunção e preposição;',
      'pronome e preposição;',
      'pronome e conjunção;',
      'conjunção e conjunção.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: no primeiro trecho, “Se o cinema está cheio” é conjunção condicional; no segundo, “Se acostuma” é pronome, pois o “se” faz parte da forma pronominal do verbo. As demais atribuem preposição ou conjunção aos dois casos, o que não se sustenta.',
  },
  {
    id: 'lp-que-se-como-qlivro31-25',
    temaId: 'lp-que-se-como',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TRE/RJ - Técnico Judiciário - 2012) Em “volume que se mantém”, o elemento sublinhado indica sujeito indeterminado.',
    gabaritoCE: false,
    comentario:
      'Errado. Em “volume que se mantém”, o “se” é parte integrante do verbo pronominal “manter-se”, e o sujeito é o próprio “volume”, retomado pelo relativo “que”. Não há sujeito indeterminado.',
  },
  {
    id: 'lp-que-se-como-qlivro31-26',
    temaId: 'lp-que-se-como',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      'Em “se soube” (Sempre se soube que um dos principais entraves...) e em “se supunha” (... o problema é muito mais grave do que se supunha.), o termo “se” confere às formas verbais a noção de reflexividade.',
    gabaritoCE: false,
    comentario:
      'Errado. Nesses exemplos o “se” não indica reflexividade: é partícula de indeterminação do sujeito, pois a ação não tem agente identificado e não volta sobre quem a pratica.',
  },
  {
    id: 'lp-que-se-como-qlivro31-27',
    temaId: 'lp-que-se-como',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - STJ - Todos os Cargos - 2012) A partícula “se”, em “Tratava-se” (Tratava-se então de uma biblioteca imaginária...) e em “se encontravam” (... descreviam o lugar em que se encontravam centenas de milhares de rolos...), classifica-se como pronome reflexivo e retoma, respectivamente, “uma biblioteca imaginária” e “centenas de milhares de rolos”.',
    gabaritoCE: false,
    comentario:
      'Errado. Em “tratava-se” e “se encontravam”, o “se” é parte integrante do verbo pronominal, e não pronome reflexivo, que faria a ação voltar ao sujeito de forma transitiva.',
  },
  {
    id: 'lp-que-se-como-qlivro31-28',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(NUCEPE - PM/PI - Agente de Polícia - 2012) “Se for assaltado, não reaja - entregue tudo”. Nesse trecho, o termo destacado sugere uma:',
    alternativas: [
      'afirmação categórica;',
      'dúvida;',
      'condição;',
      'explicação;',
      'negação.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “Se for assaltado” introduz uma condição hipotética, equivalente a “caso”. A: afirmação categórica não cabe a uma hipótese; B: a dúvida seria o valor do “se” interrogativo indireto; D e E não correspondem ao sentido condicional.',
  },
  {
    id: 'lp-que-se-como-qlivro31-29',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRF (5ª R) - Analista Judiciário - 2012) Não teria graça se só melhorasse. O elemento grifado na frase acima pode ser corretamente substituído por:',
    alternativas: [
      'conquanto;',
      'porquanto;',
      'caso;',
      'pois;',
      'embora.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: o “se” condicional pode ser trocado por “caso” sem mudança de sentido (“Não teria graça caso só melhorasse”). “Conquanto” e “embora” são concessivos; “porquanto” e “pois” são causais ou explicativos, que não cabem na hipótese do trecho.',
  },
  {
    id: 'lp-que-se-como-qlivro31-30',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - SAP/SP - Agente de Segurança Penitenciária (I) - 2012) No comentário de Cayatte — “Se o réu é culpado, a pena foi pouca. Se o réu é inocente, a pena foi muita.” — as orações iniciadas pela conjunção Se expressam sentido de:',
    alternativas: [
      'conclusão;',
      'consequência;',
      'conformidade;',
      'condição;',
      'concessão.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “Se o réu é culpado” é oração condicional, equivalente a “caso o réu seja”. Conclusão e consequência não se aplicam, pois nada decorre da frase anterior; conformidade e concessão não encaixam no sentido de hipótese.',
  },
  {
    id: 'lp-que-se-como-qlivro31-31',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Vunesp - Pref. Sertãozinho/SP - Agente de Trânsito - 2012) No trecho “... mas o tempo passou, não há nada a fazer, então fico pensando em como seria minha vida, hoje, se tivesse feito tudo como deveria.”, o termo “como” de “tudo como deveria” expressa ideia de:',
    alternativas: [
      'finalidade;',
      'causa;',
      'modo;',
      'intensidade;',
      'oposição.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “como deveria” indica o modo como a ação devia ter sido feita, com valor de advérbio modal. As demais (finalidade, causa, intensidade e oposição) não se ajustam ao contexto da frase.',
  },
  {
    id: 'lp-que-se-como-qlivro31-32',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Vunesp - CREFITO/SP - Almoxarife - 2012) No penúltimo verso (“Depressa, que o amor não pode esperar.”), a conjunção “que” está empregada com sentido de:',
    alternativas: [
      'explicação;',
      'causa;',
      'conclusão;',
      'adição;',
      'condição.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “que o amor não pode esperar” explica o motivo da pressa expressa em “Depressa”, com valor de “pois”. A causa é o sentido mais próximo, mas a banca registra a explicativa; conclusão, adição e condição não cabem no verso.',
  },
  {
    id: 'lp-que-se-como-qlivro31-33',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB - EAGS - Sargento - 2012) A conjunção subordinativa em destaque estabelece que tipo de relação de sentido entre as orações por ela conectadas? “Como as organizações ambientalistas têm denunciado, os países industrializados são os que mais poluem o meio ambiente”.',
    alternativas: [
      'Conformidade.',
      'Comparação.',
      'Finalidade.',
      'Condição.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “Como as organizações ... têm denunciado” equivale a “conforme”, ideia de conformidade. Comparação exigiria confronto entre dois termos, e finalidade e condição têm outros sentidos.',
  },
  {
    id: 'lp-que-se-como-qlivro31-34',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(MARINHA - Colégio Naval - 2012) Dentre as frases apresentadas abaixo, retiradas do texto I, assinale a opção na qual a palavra QUE remete a um antecedente.',
    alternativas: [
      '“Ele afirmava que o desejo é a regência do mundo.”',
      '“Esta insaciabilidade do ser humano é que o vai manter preso à infelicidade.”',
      '“[...] mais do que ajudar em uma reflexão mais profunda, tornam-se barreiras [...].”',
      '“[...] o assunto me ocorre ao me lembrar de que vivemos em uma sociedade [...].”',
      '“[...] desejamos o que não temos.”',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: em “o que não temos”, o “que” é pronome relativo que retoma o antecedente “o” (= aquilo). Em A e D, o “que” é conjunção integrante; em B, ele faz parte da expressão “é que”; e em C, é conjunção comparativa.',
  },
  {
    id: 'lp-que-se-como-qlivro31-35',
    temaId: 'lp-que-se-como',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe - STF - Analista Judiciário - 2013) Em “E o mesmo se aplica aos meus parceiros na comunicação via ciberespaço. Não há como ter certeza de quem sejam, de que sejam ‘realmente’ como se descrevem, ou de saber se existe uma pessoa ‘real’ por trás da ‘persona online’”, o termo “se” exerce função de pronome apassivador da forma verbal “descrevem”.',
    gabaritoCE: false,
    comentario:
      'Errado. No verbo “descrevem”, o “se” é pronome reflexivo, pois os sujeitos praticam a ação sobre si mesmos. Para ser apassivador, o “se” exigiria verbo transitivo direto com sujeito paciente, o que não ocorre aqui.',
  },
  {
    id: 'lp-que-se-como-qlivro31-36',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(CONSULPLAN - CBTU - Técnico de Enfermagem do Trabalho - 2014) O vocábulo “que” desempenha, na Língua Portuguesa, funções morfossintáticas diferentes. Releia, então, os seguintes trechos do texto: 1. “Minha filha chega da escola dizendo que há revolução na rua.” 2. “Acreditava, até então, que dificilmente se deteria um exército com dois paralelepípedos [...].” Com base nos trechos apresentados, analise as afirmativas. I. O trecho 1 é formado por três verbos e o trecho 2, por dois verbos. II. Nos dois trechos, o vocábulo “que” desempenha a mesma função sintática. III. O vocábulo “que” foi usado, em ambos os trechos, para retomar informações anteriormente expressas. Está(ão) correta(s) a(s) afirmativa(s):',
    alternativas: [
      'I, II e III.',
      'I, apenas.',
      'I e II, apenas.',
      'II e III, apenas.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: o trecho 1 tem três verbos (“chega”, “dizendo”, “há”) e o 2 tem dois (“acreditava”, “deteria”), e em ambos o “que” é conjunção integrante, com a mesma função sintática. A afirmativa III é falsa, pois em nenhum dos casos o “que” retoma informação anterior.',
  },
  {
    id: 'lp-que-se-como-qlivro31-37',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - Prefeitura de Cuiabá/MT - Técnico em Administração Escolar - 2015) O segmento do texto em que o vocábulo QUE tem classe diferente das demais é:',
    alternativas: [
      '“Diogo Machado já sabia QUE projeto desenvolver”.',
      '“estava cansado de ouvir reclamações de alunos QUE perdiam arquivos”.',
      '“Informática se baseava em clouding computing (ou computação em nuvem), tecnologia QUE é aposta de gigantes como a Apple”.',
      '“Diogo desenvolveu o Escola na Nuvem, um portal em QUE estudantes e professores se cadastram”.',
      '“tinham dados QUE seriam necessários no futuro”.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: em “sabia que projeto desenvolver”, o “que” é pronome interrogativo (= qual), que acompanha o substantivo, e não relativo. As demais são pronomes relativos que retomam um antecedente.',
  },
  {
    id: 'lp-que-se-como-qlivro31-38',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FUNCAB - PC/PA - Investigador de Polícia Civil - 2016) No período: “E como o psiquismo é responsável pelo modo de agir, por conseguinte, temos em todos os crimes, obrigatoriamente e sempre, elementos objetivos da mente de quem os praticou”, a conjunção “como” está empregada com o mesmo valor relacional que em:',
    alternativas: [
      'Procedia sempre COMO manda a lei.',
      'Era um psiquiatra tão bom COMO o pai.',
      'COMO estava ferido, pediu socorro.',
      'COMO um cão, vivia farejando pistas.',
      'Eis o modo COMO o delito foi praticado.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “Como estava ferido” é oração causal, com o mesmo valor de “já que” que o “como” tem no trecho-base. A: conformidade; B: comparação; D: comparação; E: pronome relativo.',
  },
  {
    id: 'lp-que-se-como-qlivro31-39',
    temaId: 'lp-que-se-como',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE - TCE/PE - Analista de Controle Externo - 2017) Fragmento de texto: “Assim, caminha-se em direção ao controle do mérito das atividades governamentais. Quando se anula um contrato ou se edita medida preventiva, impedindo-se a sua consumação por ser antieconômica, afirma-se que os benefícios decorrentes do projeto ou da ação governamental não justificam os custos. Anula-se, em outras palavras, por má gestão administrativa”. No segundo parágrafo, a partícula “se”, em todas as suas ocorrências, foi empregada para indeterminar o sujeito das orações em que ocorre.',
    gabaritoCE: false,
    comentario:
      'Errado. A ocorrência “impedindo-se a sua consumação” é partícula apassivadora, pois a consumação é impedida, e não indeterminadora do sujeito. A afirmação generaliza indevidamente.',
  },
  {
    id: 'lp-que-se-como-qlivro31-40',
    temaId: 'lp-que-se-como',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE - STM - Analista Judiciário (Revisão de Texto) - 2018) Fragmento de texto: “Quem não sabe deve perguntar, ter essa humildade, e uma precaução tão elementar deveria tê-la sempre presente o revisor, tanto mais que nem sequer precisaria sair de sua casa, do escritório onde agora está trabalhando, pois não faltam aqui os livros que o elucidariam se tivesse tido a sageza e prudência de não acreditar cegamente naquilo que supõe saber, que daí é que vêm os enganos piores, não da ignorância”. O vocábulo “que” recebe a mesma classificação em ambas as ocorrências no trecho “que daí é que vêm os enganos piores”.',
    gabaritoCE: false,
    comentario:
      'Errado. O primeiro “que” liga a oração com valor explicativo, enquanto o segundo, em “é que”, é partícula expletiva de realce. Por isso as classificações diferem.',
  },
  {
    id: 'lp-que-se-como-qlivro31-41',
    temaId: 'lp-que-se-como',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - Prefeitura de Boa Vista/RR - Procurador Municipal - 2019) No trecho “... e o ato que ela executa”, o pronome “que” é empregado tanto como conectivo, já que liga duas orações, quanto como elemento referencial, ao retomar o antecedente “o ato”.',
    gabaritoCE: true,
    comentario:
      'Certo. O “que” é pronome relativo: liga a oração adjetiva à principal (função de conectivo) e retoma o antecedente “o ato” (função referencial), como o livro explica para os relativos.',
  },
  {
    id: 'lp-que-se-como-qlivro31-42',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FUNDATEC - Câmara de Imbé/RS - Advogado - 2020) Considerando o emprego da palavra “Se” (“Se uma mulher é bem-sucedida e mãe, frequentemente ela será julgada...”), analise as assertivas a seguir: I. Trata-se de conjunção subordinativa e introduz a ideia de condição ao período. II. Na oração “não se sabem os motivos da interrupção do sinal”, temos a palavra “se” sendo empregada na mesma função da palavra destacada no texto. III. Na oração “não sabemos se os motivos da interrupção do sinal são normais”, não temos a palavra “se” sendo empregada na mesma função da palavra destacada no texto. Quais estão corretas?',
    alternativas: [
      'Apenas I.',
      'Apenas II.',
      'Apenas III.',
      'Apenas I e II.',
      'Apenas I e III.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: I está certa, pois o “Se” inicial é conjunção subordinativa condicional; III também, pois em “sabemos se os motivos” o “se” é conjunção integrante, função diferente. II é falsa, porque em “não se sabem” o “se” é índice de indeterminação do sujeito, e não condicional.',
  },
  {
    id: 'lp-que-se-como-qlivro31-43',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(IDECAN - IF-CE - Analista de Tecnologia da Informação - 2021) “Apenas quando toda a área fosse devidamente escavada que a produção tinha início.” O QUE do período acima se classifica morfologicamente como:',
    alternativas: [
      'conjunção integrante.',
      'pronome relativo.',
      'conjunção subordinativa.',
      'palavra expletiva.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: o “que” é partícula expletiva de realce, que reforça “apenas quando” e pode ser retirado sem prejuízo da estrutura. A: não há oração substantiva completando um verbo; B: não há antecedente retomado; C: o “que” não atua como conjunção subordinativa, e sim como realce da expressão.',
  },
  {
    id: 'lp-que-se-como-qlivro31-44',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(VUNESP - Câmara de Suzano/SP - Telefonista - 2022) “... e depois o sorriso malandro e aliviado porque ninguém SE zangou...” O vocábulo destacado foi empregado com a mesma função encontrada em:',
    alternativas: [
      'Não me importa se ela foi demitida do trabalho.',
      'Os garotos machucaram-se jogando bola.',
      'Aprovou-se a nova legislação.',
      'Se chegarmos atrasados não poderemos entrar.',
      'Estou analisando se devo aceitar a proposta.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: em “ninguém se zangou”, o “se” é parte integrante do verbo pronominal (zangar-se), a mesma função de “machucaram-se”. A e E são conjunções integrantes; C é partícula apassivadora; D é conjunção condicional.',
  },
  {
    id: 'lp-que-se-como-qlivro31-45',
    temaId: 'lp-que-se-como',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB - EEAR - Sargento - 2001) Estabelecer a correlação entre o sentido e o termo grifado. Em seguida, assinalar a alternativa que apresenta a sequência correta: 1. Causa 2. Comparação 3. Conformidade ( ) Confesso que eu escrevo de palpite, como outras pessoas tocam piano de ouvido. ( ) Vinham em bandos, descansavam e, como em redor não havia comida, seguiam viagem para o Sul. ( ) Como era muito seco de maneiras, tinha inimigos que chegavam a acusá-lo de bárbaro. ( ) Não me respeitava a adolescência, como não respeitava a batina do irmão... ( ) O diabo não é tão feio como o pintam.',
    alternativas: ['2 - 3 - 1 - 1 - 2.', '1 - 2 - 3 - 2 - 3.', '2 - 1 - 1 - 2 - 3.', '3 - 1 - 2 - 1 - 2.'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “como outras pessoas tocam piano” compara (2) e “como o pintam” expressa conformidade (3), pois o diabo é retratado de certo modo. Já “como em redor não havia comida” e “Como era muito seco de maneiras” têm valor causal (1), e “como não respeitava a batina” também compara (2), confrontando duas condutas. As demais sequências trocam uma dessas classificações.',
  },
];
