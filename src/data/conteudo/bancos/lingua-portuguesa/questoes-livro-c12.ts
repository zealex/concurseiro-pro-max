import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 12 — Verbo), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C12: QuestaoTreino[] = [
  {
    id: 'lp-verbos-qlivro12-01',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(INSTITUTO AOCP - UFMT - EBSERH (Enfermeiro Assistencial) - 2014) A expressão destacada que NÃO constitui locução verbal se encontra em',
    alternativas: [
      '“Philae terá que usar uma combinação...”',
      '“...uma sonda criada por nós pode pousar...”',
      '“...e seu material começa a sublimar.”',
      '“Imagine pilotar um robô a essa distância...”',
      '“...enquanto ele vai se aproximando do Sol.”',
    ],
    correta: 3,
    comentario:
      'O teste da oração desenvolvida ajuda a identificar a locução: em “Imagine pilotar um robô”, a forma “Imagine que um robô seja pilotado” mostra que o verbo imaginar não é auxiliar, e pilotar não é verbo principal de uma locução. Nas demais alternativas, ter, poder, começar e ir atuam como auxiliares e formam locução com o verbo principal.',
  },
  {
    id: 'lp-verbos-qlivro12-02',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funrio - Sebrae/PA — Analista Técnico (Contabilidade) — 2010) É comum a sensação de que o estudo dos verbos não dá conta de tudo aquilo de que precisamos para a expressão exata das ações em seus modos e configurações particulares. O português não tem uma flexão própria para indicar o aspecto, possível razão de a gramática tradicional não propor o seu estudo sistemático, mas é fato que, mesmo de maneira intuitiva, todos fazemos uso dessa categoria. O aspecto indica a duração de um processo verbal ou o modo da ação, que em português, expressa-se geralmente por meio de construções perifrásticas (ou locuções verbais), mas está presente também em alguns morfemas verbais, sufixos e prefixos. (Fonte: Thais Nicoleti de Camargo. Folha de S.Paulo, 13/12/2001.) Por exemplo, as frases “Ele tornou a dizer isso”, “Ele pretendia dizer isso” e “Ele começou a dizer isso” mostram o uso de verbos auxiliares para representar, respectivamente, os seguintes valores aspectuais:',
    alternativas: [
      'conativo, cessativo e perfectivo',
      'iterativo, desiderativo e incoativo',
      'habitual, durativo e progressivo',
      'imperfectivo, pontual e comunicativo',
      'cooperativo, optativo e imperativo',
    ],
    correta: 1,
    comentario:
      '“Tornou a dizer” indica repetição, o aspecto iterativo; “pretendia dizer” expressa desejo ou intenção, o desiderativo; e “começou a dizer” marca o início da ação, o incoativo. A alternativa B reúne esses três valores na ordem correta. As demais associam nomes de aspectos que não descrevem essas construções.',
  },
  {
    id: 'lp-verbos-qlivro12-03',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV — IBGE — Coordenador Censitário — 2020) A frase em que o emprego do gerúndio mostra adequação é:',
    alternativas: [
      'Entrou na sala, sentando-se na primeira fila;',
      'Nasceu em Curitiba, sendo filho de imigrantes;',
      'Repreendeu a torcida, condenando as ofensas;',
      'Desceu as escadas, chegando rapidamente ao térreo;',
      'Saiu da festa, pegando um táxi na porta.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a indicada pela banca: em “condenando as ofensas”, o gerúndio expressa ação simultânea à repreensão, que é o uso adequado. A questão é controversa, pois as alternativas A, D e E também empregam o gerúndio de posterioridade sem erro, como o próprio livro observa, o que sugere que ela deveria ter sido anulada.',
  },
  {
    id: 'lp-verbos-qlivro12-04',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Vunesp - TJ/SP - Escrevente - 2004) O uso indiscriminado do gerúndio tem-se constituído num problema para a expressão culta da língua. Indique a única alternativa em que ele está empregado conforme o padrão culto.',
    alternativas: [
      'Após aquele treinamento, a corretora está falando muito bem.',
      'Nós vamos estar analisando seus dados cadastrais ainda hoje.',
      'Não haverá demora, o senhor pode estar aguardando na linha.',
      'No próximo sábado, procuraremos estar liberando o seu carro.',
      'Breve, queremos estar entregando as chaves de sua nova casa.',
    ],
    correta: 0,
    comentario:
      '“Está falando” é locução de aspecto durativo, em que o gerúndio mostra uma ação em curso, uso aceito pela norma culta. As demais alternativas usam a construção estar + gerúndio depois de ir, poder, procurar ou querer, o chamado gerundismo, que expressa ação futura de forma desnecessariamente longa e é condenado na norma culta.',
  },
  {
    id: 'lp-verbos-qlivro12-05',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funcab - Pref. Anápolis/GO — Auditor-Fiscal de Tributos Municipais — 2012) Considere o uso do gerúndio nas frases abaixo e analise os itens. “Estou falando isso para mostrar o tamanho do desafio para um jovem dos trópicos...” “... floresta morrendo de falta de inteligência humana e boate fechando por falta de energia elétrica...” I. Na frase 1, tem-se uma locução verbal construída com dois verbos auxiliares, o primeiro flexionado, e o segundo, no gerúndio. II. Na frase 2, os dois verbos empregados no gerúndio têm valor adjetivo: “floresta morrendo” (= floresta morta) e “boate fechando” (= boate fechada). III. Em ambas as frases, há a ocorrência de gerundismo nas três locuções verbais, o que corresponde ao uso de forma composta, preterindo, assim, a forma simples do verbo. Assinale a alternativa que aponta os itens corretos:',
    alternativas: [
      'Somente II e III estão corretos.',
      'Somente I e III estão corretos.',
      'Somente I e II estão corretos.',
      'Somente I está correto.',
      'Somente II está correto.',
    ],
    correta: 4,
    comentario:
      'Apenas o item II está correto: nas duas expressões, os gerúndios “morrendo” e “fechando” equivalem a adjetivos, como “floresta morta” e “boate fechada”. O item I é falso, pois “Estou falando” tem um único verbo auxiliar, e o item III também é falso, porque não há gerundismo nessas construções.',
  },
  {
    id: 'lp-verbos-qlivro12-06',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - EAGS - Sargento - 2001) Leia com atenção. I. Lúcia apaixonou-se por João. — voz passiva sintética. Lúcia sofre a ação de apaixonar-se por alguém; uso do pronome apassivador “se”. II. Os criminosos devem receber castigo por seus atos. — voz ativa com verbo de sentido passivo. III. Isso foi sabido de todos. — voz ativa; embora haja na oração locução verbal, não há agente da passiva. Não está(ão) correto(s) o(s) comentário(s) de',
    alternativas: ['I e III.', 'II e III.', 'I apenas.', 'I, II e III.'],
    correta: 0,
    comentario:
      'Os comentários I e III estão errados: “apaixonar-se” é verbo pronominal, sem voz passiva, e “foi sabido” é voz passiva analítica, formada por ser e particípio. O comentário II está correto segundo Bechara, que classifica como voz ativa os verbos de sentido passivo, como “receber”. Por isso a resposta é a alternativa A.',
  },
  {
    id: 'lp-verbos-qlivro12-07',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TRE/ES - Técnico Judiciário - 2011) Empregando-se a voz ativa e mantendo-se os tempos verbais empregados, o trecho “O local das reuniões era a antiga cadeia pública, que, em 1808, havia sido remodelada pelo vice-rei conde dos Arcos” (1.24-25) seria, corretamente, reescrito da seguinte forma: O local das reuniões era a antiga cadeia pública, que, em 1808, o vice-rei conde dos Arcos remodelou.',
    gabaritoCE: false,
    comentario:
      'A reescrita está errada porque, na voz ativa, o tempo composto “havia sido remodelada” deve virar o mais-que-perfeito composto: “o vice-rei conde dos Arcos havia remodelado”. Ao retirar apenas o “sido” e usar “remodelou”, o verbo passa ao pretérito perfeito simples, o que altera o tempo exigido pela questão.',
  },
  {
    id: 'lp-verbos-qlivro12-08',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Cesgranrio - BNDES - Profissional Básico (Analista de Sist. e Sup.) - 2010) A passagem que NÃO admite, segundo o registro culto e formal da língua, a transposição para a voz passiva é:',
    alternativas: [
      '“Este ano vou arranjar um bom trabalho.”',
      '“...que para fazer uma vida nova...”',
      '“Ela responde aos porquês.”',
      '“Fazemos isso o tempo todo com os outros,”',
      '“descobrimos coisas...”',
    ],
    correta: 2,
    comentario:
      'O verbo “responder”, em “Ela responde aos porquês”, é transitivo indireto, pois o complemento vem preposicionado, e por isso não passa para a voz passiva analítica. Os verbos das demais passagens (arranjar, fazer, fazemos e descobrimos) são transitivos diretos, e o objeto direto pode virar sujeito da passiva.',
  },
  {
    id: 'lp-verbos-qlivro12-09',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FCC - TRE/PB — Analista Judiciário - 2007) A construção que NÃO admite transposição para a voz passiva é:',
    alternativas: [
      'Os astrônomos antigos colocaram-na no centro do universo.',
      'A mensagem chegou com o título de “A Bela Azul”.',
      'O coração coloca as razões do amor no centro do universo.',
      'Anunciam os cientistas a agonia de nossa Bela Azul.',
      'A presença da natureza por vezes nos desvia da leitura de um livro.',
    ],
    correta: 1,
    comentario:
      'O verbo “chegar” é intransitivo: em “A mensagem chegou com o título”, não há objeto direto que possa virar sujeito da passiva. As demais frases têm verbos transitivos diretos, como colocar, anunciar e desviar, cujo objeto pode passar a sujeito.',
  },
  {
    id: 'lp-verbos-qlivro12-10',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FCC — TRE/AM — Analista Judiciário — 2010) A frase que admite transposição para a voz passiva é:',
    alternativas: [
      'Perto da Igreja, todos os poderosos do mundo parecem diletantes.',
      'A Concordata poderá incluir o retorno do ensino religioso.',
      'Há estatísticas controvertidas sobre esse poder eclesiástico.',
      'Não são incomuns atos religiosos com finalidade política.',
      'O Brasil é um país estratégico para a Igreja Católica.',
    ],
    correta: 1,
    comentario:
      'Na alternativa B, “incluir” é transitivo direto, com objeto “o retorno do ensino religioso”, e a passiva é possível: “O retorno do ensino religioso poderá ser incluído na Concordata”. As demais têm verbos de ligação, como parecer e ser, ou haver no sentido de existir, que não admitem passiva.',
  },
  {
    id: 'lp-verbos-qlivro12-11',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB — EAGS - Sargento — 2010) Quanto à voz verbal, coloque (P) voz passiva, (A) voz ativa e (R) voz reflexiva para as frases abaixo. A seguir, assinale a alternativa com a sequência correta. ( ) O petróleo é formado da decomposição de matérias orgânicas, como animais e plantas soterrados. ( ) Com a descoberta do petróleo, criaram-se máquinas movidas a óleo, gasolina e querosene. ( ) Vários países neste século têm se esforçado na busca de alternativas para a escassez de petróleo. ( ) Devido ao crescente consumo mundial de petróleo, os países superpopulosos já se veem à margem do desenvolvimento.',
    alternativas: ['A-R-P-R.', 'P-A-R-P.', 'A-R-R-A.', 'P-P-A-R.'],
    correta: 3,
    comentario:
      'A primeira frase é passiva analítica (é formado) e a segunda é passiva sintética (criaram-se), o que dá P-P. A terceira é ativa, pois o sujeito “vários países” pratica a ação de esforçar-se, e a quarta é reflexiva, porque o sujeito “os países” se vê a si mesmo, o que completa a sequência P-P-A-R.',
  },
  {
    id: 'lp-verbos-qlivro12-12',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf — CGU — Técnico em Finanças e Controle — 2008) Abaixo estão recomendações para evitar o estresse. Assinale a opção na qual os verbos estão conjugados, corretamente, na terceira pessoa do singular.',
    alternativas: [
      'Saboreie a vida, dai mais valor a suas experiências.',
      'Aprende a dizer não. Peça ajuda sempre que necessário.',
      'Pára e medite. Põe uma uva passa na boca. Note textura, cheiro e sabor.',
      'Fique atenta à respiração. Inspira e expira lentamente.',
      'Invista em prazeres: ouça música, leia, dê-se o direito de não fazer nada.',
    ],
    correta: 4,
    comentario:
      'Na alternativa E, “invista”, “ouça”, “leia” e “dê-se” estão na terceira pessoa do singular do imperativo, como pede a questão. As demais trazem formas de segunda pessoa, como “dai”, “aprende”, “pára”, “põe” e “inspira”, ou misturam pessoas gramaticais.',
  },
  {
    id: 'lp-verbos-qlivro12-13',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      'Esta tem sido uma prática que tem ajudado na construção de uma democracia participativa. A correção gramatical, a coerência e o sentido seriam mantidos caso a forma verbal “tem ajudado” fosse substituída por “vem ajudando”.',
    gabaritoCE: true,
    comentario:
      'A troca é possível porque o tempo composto “tem ajudado” (presente do indicativo mais particípio) pode ser substituído por “vem ajudando” (vir no presente mais gerúndio) sem alterar o aspecto nem o sentido de uma ação que se prolonga até o presente. Assim, a correção, a coerência e o sentido se mantêm.',
  },
  {
    id: 'lp-verbos-qlivro12-14',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRE/SP — Técnico Judiciário — 2012) Muitos anos depois, ele morreria num acidente de helicóptero, em Angra dos Reis, no Rio, e seu corpo desapareceria no mar para sempre. Com relação aos verbos grifados acima, é correto dizer que o emprego do tempo e modo em que estão conjugados indica:',
    alternativas: [
      'Ação posterior à época de que se fala.',
      'Incerteza sobre fato passado.',
      'Ação ocorrida antes de outra passada.',
      'Fato que depende de certa condição.',
      'Forma polida de abordar um fato trágico.',
    ],
    correta: 0,
    comentario:
      '“Morreria” e “desapareceria” estão no futuro do pretérito do indicativo, que, em narrativa, marca um fato posterior a outro já situado no passado. Por isso a alternativa A está correta: a morte e o desaparecimento são posteriores à época de que se fala. As demais atribuem a essas formas valores de incerteza, condição ou polidez, que não se aplicam ao contexto.',
  },
  {
    id: 'lp-verbos-qlivro12-15',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - ALESE - Técnico Legislativo - 2018) ... uma tendência que já coroava as edições anteriores do prêmio. O verbo flexionado nos mesmos tempo e modo do que se encontra acima está sublinhado em:',
    alternativas: [
      'por meio do qual definia uma suposta obra de arte',
      'o novo prêmio atenderia ao mercado',
      'ou o que o contraria',
      'o leitor elegerá títulos apenas entre os finalistas',
      'ele contempla os títulos com mais chances',
    ],
    correta: 0,
    comentario:
      '“Coroava” está no pretérito imperfeito do indicativo, marcado pela desinência -va, e “definia” tem a mesma forma, com -ia. Por isso a alternativa A repete o tempo e o modo do verbo sublinhado. As demais trazem futuro do pretérito, futuro do presente ou presente do indicativo.',
  },
  {
    id: 'lp-verbos-qlivro12-16',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - SABESP - Técnico em Sistemas de Saneamento - 2018) ... que reflita sobre o sentido de seu comportamento. O verbo flexionado nos mesmos tempo e modo do sublinhado acima está na frase:',
    alternativas: [
      '... que o retira do mundo.',
      '... venha a ser mais tolerante às opiniões alheias...',
      '... como se fossem meras opiniões, isoladas de seus pressupostos...',
      '... que inverte o sentido original de suas práticas...',
      'A palavra grega filosofia significa “amigo da sabedoria”...',
    ],
    correta: 1,
    comentario:
      '“Reflita” é presente do subjuntivo, com a desinência -e, e “venha” tem a mesma forma verbal nesse tempo e modo. Por isso a alternativa B repete o presente do subjuntivo. As demais trazem presente do indicativo ou pretérito imperfeito do subjuntivo, que não coincidem com o verbo sublinhado.',
  },
  {
    id: 'lp-verbos-qlivro12-17',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Esaf- SRF - Auditor-Fiscal da Receita Federal - 2009) (Adaptada) A afirmação abaixo está correta ou incorreta! (...) Para piorar, as fontes de energia se tornaram mais “sujas”, com o aumento de 122% do CO2 lançado na atmosfera, percentual muito acima dos 71% da ampliação da geração no período. (...) — Em “se tornaram” o pronome “se” indica voz passiva.',
    gabaritoCE: false,
    comentario:
      'A afirmação está incorreta. Em “se tornaram”, o verbo tornar-se é pronominal, e o “se” é parte integrante do verbo, não pronome apassivador; por isso não há voz passiva sintética nessa construção.',
  },
  {
    id: 'lp-verbos-qlivro12-18',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Esaf- SRF - Auditor-Fiscal da Receita Federal - 2009) (Adaptada) A afirmação abaixo está correta ou incorreta? (...) Esses números tornam a internet o segundo meio de comunicação mais abrangente do Brasil, atrás apenas da televisão. Chegou-se a dizer que esse é um meio elitizado, utilizado apenas pelas classes A e B. Mas uma pesquisa mostra que as classes C e D utilizam amplamente a internet. (...) — Em “Chegou-se”, o “-se” indica voz passiva.',
    gabaritoCE: false,
    comentario:
      'A afirmação está incorreta. Em “Chegou-se a dizer”, o “se” é índice de indeterminação do sujeito, não apassivador, pois a construção “chegar a dizer” é intransitiva e não tem objeto direto que se torne sujeito de uma passiva.',
  },
  {
    id: 'lp-verbos-qlivro12-19',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - MTE - Auditor-Fiscal do Trabalho - 2009) Assinale a opção que, ao substituir elemento destacado no texto, acarreta erro gramatical. Entre as diversas providências que o Conselho Nacional de Justiça (CNJ) vem tomando com o objetivo de tornar mais transparente e eficiente a administração do Poder Judiciário, uma das mais simples começará a ser adotada brevemente. Trata-se da divulgação, pela internet, de todas as despesas de custeio e de investimento da Justiça Federal, da Justiça do Trabalho, das Justiças estaduais, da Justiça Eleitoral e da Justiça Militar. Até hoje, só alguns tribunais vinham divulgando suas contas. A medida, juntamente com os indicadores de desempenho funcional e as inspeções da Corregedoria Nacional de Justiça, permitirá identificar os casos de má gestão financeira, de arbitrariedades, de malversação de recursos públicos e de gastos perdulários. Por gastar excessivamente com a manutenção dos gabinetes de seus dirigentes, por exemplo, alguns Tribunais de Justiça estaduais não dispunham de recursos suficientes para manter as varas judiciais, prejudicando com isso o atendimento à população. Contribuindo para racionalizar a gestão dos recursos financeiros dos tribunais, as novas regras do CNJ ajudarão o Judiciário a melhorar sua imagem perante a opinião pública. Há dois meses, a pesquisa índice Latino-americano de Transparência Orçamentária, realizada em 12 países, apontou o Judiciário como o mais “opaco” dos Três Poderes. Quanto mais transparente for a Justiça, maior será sua credibilidade.',
    alternativas: [
      '“vem tomando” > tem tomado',
      '“vinham divulgando” > tem divulgado',
      '“permitirá identificar” > vai permitir que se identifiquem',
      '“prejudicando com isso” > o que tem prejudicado',
      '“Contribuindo” > Ao contribuir',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a indicada pelo livro: o imperfeito “vinham divulgando” descreve ação que se prolongava no passado, e a troca por “tem divulgado” altera a relação temporal do trecho. A questão é discutível, pois “tem divulgado” também poderia ser aceito com “até hoje”, o que torna o gabarito contestável.',
  },
  {
    id: 'lp-verbos-qlivro12-20',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Esaf — MTE - Auditor-Fiscal do Trabalho - 2009) (Adaptada) Em relação às estruturas do texto abaixo, julgue se a afirmativa é correta ou incorreta. Para que a cobertura mínima oferecida pelos planos de saúde aos seus segurados inclua as tecnologias, os tratamentos e os equipamentos que entraram em uso recentemente, a Agência Nacional de Saúde Suplementar (ANS) acrescentou 73 novos procedimentos à lista de exames, consultas, cirurgias e outros serviços que as operadoras são obrigadas a oferecer. (...) O emprego do modo subjuntivo em “inclua” justifica-se por se tratar de uma oração subordinada que apresenta um fato hipotético ou provável.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. A oração introduzida por “Para que” é final, e a finalidade, ainda não realizada, pede o subjuntivo em “inclua”; a explicação de fato hipotético ou provável é coerente com esse uso.',
  },
  {
    id: 'lp-verbos-qlivro12-21',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Esaf - MTE - Auditor-Fiscal do Trabalho - 2009) (Adaptada) Em relação aos elementos do texto, julgue se a afirmativa é correta ou incorreta. (...) Isso se traduziu como forte pressão sobre as finanças públicas, que estão acusando déficits muito elevados. A substituição de “se traduziu” por “foi traduzido” prejudica a correção gramatical do período.',
    gabaritoCE: false,
    comentario:
      'A afirmação está incorreta, pois a troca não prejudica a correção. “Se traduziu” (voz passiva sintética) e “foi traduzido” (voz passiva analítica) têm o mesmo sentido, e o sujeito “isso”, singular, concorda com o verbo nas duas formas.',
  },
  {
    id: 'lp-verbos-qlivro12-22',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FDC - Mapa - Administrador - 2010) Observe a flexão do verbo MAPEAR no trecho “sendo o alicerce para que as empresas MAPEIEM seu roteiro futuro” (1º parágrafo). Em português, os verbos terminados no infinitivo em -ear e alguns terminados em -iar apresentam ditongação em determinadas formas. Nesse sentido, pode-se afirmar que está INCORRETA a seguinte frase imperativa:',
    alternativas: [
      'Não odeies teus inimigos.',
      'Refreia os teus impulsos.',
      'Não negoceies sem considerar teus princípios éticos.',
      'Desnorteia quem te persegue.',
      'Principia a frase com a letra de teu nome.',
    ],
    correta: 2,
    comentario:
      'Na alternativa C, “negoceies” está incorreto: o imperativo negativo de tu, com o verbo negociar (-iar), deve ser “não negocies”. As demais frases seguem as regras de flexão de tu indicadas no enunciado.',
  },
  {
    id: 'lp-verbos-qlivro12-23',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FDC - Funasa — Administrador — 2010) Com a forma verbal grifada em “Os estudos serão apresentados ao Ministério da Saúde...”, o autor do texto pretende dizer ao leitor que os estudos referidos:',
    alternativas: [
      'devem ser publicados e discutidos em congressos futuramente.',
      'serão apresentados futuramente, ainda que sem data certa.',
      'em futuro bem próximo, os estudos serão apresentados.',
      'serão obrigatoriamente apresentados às autoridades.',
      'serão apresentados em um ato oficial.',
    ],
    correta: 1,
    comentario:
      'O futuro do presente “serão” indica fato futuro sem data determinada, o que é expresso na alternativa B: os estudos serão apresentados em momento futuro, ainda que não se saiba quando. A alternativa C fixa um futuro próximo sem base no texto, e as demais acrescentam obrigação ou ato oficial que não estão na forma verbal.',
  },
  {
    id: 'lp-verbos-qlivro12-24',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FDC - Funasa - Administrador — 2010) A frase “Os estudos serão apresentados ao Ministério da Saúde” equivale semanticamente a:',
    alternativas: [
      'O Ministério da Saúde apresentará os estudos.',
      'Apresentar-se-ão os estudos ao Ministério da Saúde.',
      'Ao Ministério da Saúde cabe apresentar os estudos.',
      'Por meio dos estudos, o Ministério da Saúde será informado.',
      'O Ministério da Saúde será o encarregado de apresentar os estudos.',
    ],
    correta: 1,
    comentario:
      'A alternativa B mantém a mesma voz passiva e o mesmo sentido, trocando a passiva analítica “serão apresentados” pela sintética “apresentar-se-ão”, com o mesmo futuro e o mesmo sujeito paciente “os estudos”. As demais mudam o agente ou o sentido da frase, o que as torna não equivalentes.',
  },
  {
    id: 'lp-verbos-qlivro12-25',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FDC — Câmara Municipal de Petrópolis — Arquivista — 2010) Suponha que, quando os policiais chegaram ao local do incidente, flagraram uma pessoa a retirar pertence de Dario, dando ao larápio voz de prisão nos seguintes termos: “Levanta suas mãos para o alto. Afaste-se da vítima e não mexa em seus pertences. Passa teus documentos e considere-se preso”. Para que a voz de prisão esteja rigorosamente de acordo com a norma culta da língua e em tratamento formal, os termos terão de ser expressos da seguinte forma:',
    alternativas: [
      'Levanta suas mãos para o alto. Afasta-te da vítima e não mexa em teus pertences. Passa teus documentos e considere-se preso.',
      'Levante tuas mãos para o alto. Afaste-se da vítima e não mexas em seus pertences. Passai teus documentos e considere-te preso.',
      'Levante suas mãos para o alto. Afastai-vos da vítima e não mexais em seus pertences. Passe teus documentos e considere-se preso.',
      'Levanta tuas mãos para o alto. Afasta-te da vítima e não mexas em teus pertences. Passa teus documentos e considera-te preso.',
      'Levantai tuas mãos para o alto. Afaste-se da vítima e não mexe em teus pertences. Passe seus documentos e considera-te preso.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a única em que as formas verbais de tu estão corretas do começo ao fim: “levanta”, “afasta-te”, “não mexas”, “passa” e “considera-te”, com “tuas” e “teus” combinando com o tratamento. As demais misturam tratamentos, como “Levante tuas mãos” ou “Passai teus documentos”, ou usam formas de você com pronome de tu.',
  },
  {
    id: 'lp-verbos-qlivro12-26',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - Instituto Rio Branco — Diplomata - 2011) Seriam mantidos o sentido e a correção gramatical do texto se os infinitivos flexionados fossem substituídos pelas respectivas formas do infinitivo não flexionado no segmento “Ficamos a olhar o verde do jardim, as gotas a evaporarem, as lesmas a prepararem os corpos para novas caminhadas”.',
    gabaritoCE: true,
    comentario:
      'A substituição é possível: “a evaporarem” e “a prepararem” são infinitivos flexionados cujo sujeito próprio é o do próprio infinitivo, e a flexão é facultativa nesses casos. Trocá-los pelas formas não flexionadas não altera o sentido nem a correção do segmento.',
  },
  {
    id: 'lp-verbos-qlivro12-27',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TJ/ES - Analista Judiciário (Letras) - 2011) Na linha 11 (A indispensabilidade da teoria política viria dessa necessidade de autoconhecimento dos indivíduos), o uso do futuro do pretérito em “viria” sugere a intenção do autor de manter distanciamento em relação à ideia da “necessidade de autoconhecimento dos indivíduos”.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. O futuro do pretérito “viria” pode indicar hipótese ou atenuação, o que sugere que o autor não assume integralmente a afirmação e mantém distanciamento em relação a ela. Esse efeito de sentido é compatível com o uso de uma forma modalizadora.',
  },
  {
    id: 'lp-verbos-qlivro12-28',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - TJ/ES - Analista Judiciário (Letras) - 2011) “A questão da desigualdade, finalmente, está produzindo estudos focados em entender como os abismos sociais afetam a realidade das pessoas — estejam elas no topo ou na base” (...) A obrigatoriedade do emprego da forma verbal “estejam”, no modo subjuntivo, decorre da relação sintática entre essa forma verbal e o trecho “como os abismos sociais afetam a realidade das pessoas”.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: o subjuntivo “estejam” não se explica pela relação sintática com “como os abismos sociais afetam”, pois essa oração é independente da expressão. O modo se explica pelo valor de hipótese ou indeterminação de “estejam elas no topo ou na base”, que apresenta situações possíveis, e não fatos realizados.',
  },
  {
    id: 'lp-verbos-qlivro12-29',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TJ/ES - Analista Judiciário (Letras) - 2011) “A escola da era da globalização, tecnologia e informação deve preparar o educando para intervir criticamente na realidade e transformá-la, e não apenas para integrá-lo ao mercado de trabalho. Esse aluno deverá ter o perfil do cidadão engajado na luta pela justiça social” (...) Do ponto de vista argumentativo, o uso reiterado do verbo auxiliar dever, como em “deve preparar” e “deverá ter”, indica grande probabilidade de os objetivos associados a essas formas verbais se tornarem realidade.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada, porque, nesse contexto, o verbo dever expressa obrigação ou necessidade, e não probabilidade. A repetição do auxiliar apresenta o que se prescreve ou se espera da escola e do aluno, sem garantir que os objetivos se realizem.',
  },
  {
    id: 'lp-verbos-qlivro12-30',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB - TJ/ES — Analista Judiciário (Letras) - 2011) (...) Ela é o nosso radar para o perigo. Se nós, ou nossos ancestrais, fôssemos aguardar que a mente racional tomasse uma decisão, teríamos, provavelmente, não só cometido erros, mas também desaparecido como espécie. O emprego das formas verbais no subjuntivo “fôssemos” e “tomasse” deve-se à presença do elemento gramatical “se”.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. A conjunção “se” introduz oração condicional que expressa hipótese, e essa hipótese não realizada é marcada pelo subjuntivo, como em “fôssemos” e “tomasse”.',
  },
  {
    id: 'lp-verbos-qlivro12-31',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - STM - Analista Judiciário - 2011) (...) Quando a polícia reage, os vândalos voltam a se misturar à massa de gente que protesta pacificamente, na esperança de, com isso, provocar um tumulto e incitar outros manifestantes a entrar no confronto. (...) As formas verbais infinitivas “misturar” e “provocar” poderiam ser corretamente substituídas por suas formas flexionadas, misturarem e provocarem.',
    gabaritoCE: false,
    comentario:
      'A substituição está errada: nesses casos, os infinitivos não têm sujeito próprio, pois o sujeito é o mesmo da oração principal (os vândalos). A flexão do infinitivo só é possível quando ele tem sujeito diferente do da principal, e aqui isso não ocorre.',
  },
  {
    id: 'lp-verbos-qlivro12-32',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - Correios — Analista (Letras) — 2011) (...) O debate voltou à tona após policiais da Delegacia Antipirataria apreenderem, no mês passado, mais de duzentas pastas com textos para serem reproduzidos em uma universidade do Rio de Janeiro, sob a alegação de crime de direitos autorais. (...) A forma verbal “apreenderem” poderia ser corretamente substituída pela forma verbal composta terem apreendido.',
    gabaritoCE: true,
    comentario:
      '“Apreenderem” é infinitivo pessoal, e o infinitivo composto “terem apreendido” expressa o mesmo fato concluído no passado, sem alterar o sentido nem a correção do trecho.',
  },
  {
    id: 'lp-verbos-qlivro12-33',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      'Texto para as questões 19 e 20: Da memória e da reminiscência. A fenomenologia da memória aqui proposta estrutura-se em torno de duas perguntas: De que há lembrança? De quem é a memória? Essas duas perguntas são formuladas dentro do espírito da fenomenologia husserliana. Privilegiou-se, nessa herança, a indagação colocada sob o adágio bem conhecido segundo o qual toda consciência é consciência de alguma coisa. (...) Se nos apressarmos a dizer que o sujeito da memória é o eu, na primeira pessoa do singular, a noção de memória coletiva poderá apenas desempenhar o papel analógico, ou até mesmo de corpo estranho na fenomenologia da memória. (...) Estaria mantida a correção gramatical se as formas verbais “são formuladas” e “Privilegiou-se” fossem substituídas, respectivamente, por formulam-se e foi privilegiada.',
    gabaritoCE: true,
    comentario:
      'A troca é correta: “são formuladas”, voz passiva analítica, passa a “formulam-se”, passiva sintética, com o sujeito “essas duas perguntas” concordando com o verbo. Já “Privilegiou-se”, passiva sintética, passa a “foi privilegiada”, concordando com “a indagação”, e o sentido se mantém.',
  },
  {
    id: 'lp-verbos-qlivro12-34',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - Correios — Analista (Letras) - 2011) Ainda com relação a esse texto, julgue os itens a seguir. Se a conjunção “Se” fosse substituída por Caso, deveria ser alterado o tempo e mantido o modo verbal empregado na oração condicional.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. Com a conjunção “caso”, a oração condicional pede o futuro do subjuntivo, e não o imperfeito, de modo que o tempo muda; o modo subjuntivo, porém, permanece.',
  },
  {
    id: 'lp-verbos-qlivro12-35',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - Correios - Analista (Letras) - 2011) (...) “A nova sociedade de redes favorecerá o advento de um mundo menos marcado pelos desequilíbrios sociais ou reforçará as desigualdades planetárias, criando excluídos da modernidade digital? (...) Ao empregar o futuro do presente do indicativo em “favorecerá” e “reforçará”, o autor faz uma previsão de duas características que distinguirão da sociedade atual a “nova sociedade”.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada, pois o trecho é uma pergunta retórica, e o futuro do presente apresenta hipóteses que o autor levanta, sem afirmar como previsão que as características se realizarão. Por isso, não se trata de previsão afirmada.',
  },
  {
    id: 'lp-verbos-qlivro12-36',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - Correios - Analista (Letras) - 2011) A locução verbal “havia imprimido” pode ser substituída por imprimira, sem prejuízo para a correção gramatical e para o sentido do texto.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. O mais-que-perfeito composto “havia imprimido” e a forma simples “imprimira” expressam o mesmo fato anterior a outro fato passado, sem mudança de sentido. Na norma culta, as duas formas são intercambiáveis.',
  },
  {
    id: 'lp-verbos-qlivro12-37',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB-Correios-Analista (Letras)-2011) “Nós vivemos na era da informação e as nações que quiserem realmente estar nesse tempo devem colocar cada vez mais informações na rede.” O emprego do modo subjuntivo em “quiserem” revela que, na construção da textualidade, a intenção do autor do argumento é sugerir que há nações que resistem a “estar nesse tempo”.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada. O subjuntivo em “quiserem” indica condição ou hipótese, ou seja, nações que, eventualmente, desejem estar nesse tempo, e não afirma a existência de nações que resistem. O uso do modo, por si só, não revela essa intenção do autor.',
  },
  {
    id: 'lp-verbos-qlivro12-38',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - FUB - Médico - 2011) Na oração “que tenha sido completamente formada na era da Internet”, a forma verbal “tenha” poderia ser substituída por haja, sem alteração do sentido ou da correção gramatical do texto.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. “Tenha” é auxiliar do tempo composto “tenha sido formada”, e “haja” é a forma equivalente do verbo haver, que também forma o tempo composto na voz passiva. A troca não altera sentido nem correção.',
  },
  {
    id: 'lp-verbos-qlivro12-39',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Funiversa - Seplag/DF — Auditor Fiscal de Atividades Urbanas - 2011) (Adaptada) Fragmento de texto: Por outro lado, para o cientista, não existe dúvida de que o aspecto mais notável da memória é o esquecimento. Afinal, se uma pessoa se lembrasse de tudo, em todos os pormenores, não conseguiria pensar de forma genérica. Se as mulheres conseguissem reproduzir por completo os momentos da dor do parto, nenhuma teria mais de um filho. A afirmação abaixo está correta ou incorreta? A troca de “lembrasse” por lembrar altera o sentido da frase e exige mudança em outro termo do enunciado.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. “Lembrasse” é pretérito imperfeito do subjuntivo, usado na oração condicional introduzida por “se”. Trocá-la por “lembrar” exigiria uma nova estrutura, e outro termo teria de se ajustar para manter a coerência.',
  },
  {
    id: 'lp-verbos-qlivro12-40',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB — TJ/ES — Analista (Direito) — 2011) No trecho “Se Mubarak caísse, o que viria em seu lugar”, estaria mantida a correção gramatical do texto caso se substituíssem as formas verbais “caísse” e “viria” por cair e virá, respectivamente.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. “Cair” é futuro do subjuntivo e “virá” é futuro do presente, o que forma a correlação adequada nas orações condicionais com “se”. O sentido de hipótese se mantém.',
  },
  {
    id: 'lp-verbos-qlivro12-41',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/PE — Analista Judiciário - 2011) Estão plenamente adequadas a flexão e a correlação entre tempos e modos dos verbos na frase:',
    alternativas: [
      'As ponderações de Kucinski seriam úteis se acatadas por todos os que estivessem envolvidos no campo de atuação que ele analisou.',
      'Todo louvor aos que se disporem a assumir valores éticos, sem que se importassem com os sacrifícios que isso representaria.',
      'Teria sido o mercado, e não a fraqueza moral de cada um, o fator que levará os jovens a uma competição cada vez mais violenta.',
      'Os jovens jornalistas agem hoje como se nunca houvera necessidade de sobreviver ao tempo em que trabalhassem os veteranos.',
      'Caso ninguém venha a se preocupar com a ética no trabalho, seria inútil que os velhos profissionais venham a nos lembrar o nome de Pulitzer.',
    ],
    correta: 0,
    comentario:
      'A alternativa A está correta: “seriam úteis” (futuro do pretérito) se relaciona com “estivessem” (imperfeito do subjuntivo) na condicional com “se”, e a correlação é adequada. As demais apresentam quebras de correlação, com formas como “houvera”, “levará” e “se importassem” em desacordo com os tempos das orações.',
  },
  {
    id: 'lp-verbos-qlivro12-42',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT/SE (20R) - Analista Judiciário - 2011) Paulo Honório (querer) contar a própria vida, mas, julgando que não o (conseguir), (pedir) ao jornalista Gondim que o (fazer). Os verbos indicados entre parênteses estarão adequadamente correlacionados na frase acima caso se flexionem nas seguintes formas:',
    alternativas: [
      'quisera - conseguirá - pedisse - faria;',
      'queria - conseguiria - pediu - fizesse;',
      'queria - conseguisse - pedia - faça;',
      'quis - consegue - pede - fizesse;',
      'quis - conseguiu - pediu - faça.',
    ],
    correta: 1,
    comentario:
      'A alternativa B forma a correlação adequada: “queria” (imperfeito, desejo no passado), “conseguiria” (futuro do pretérito, depois de verbo no passado), “pediu” (pretérito perfeito) e “fizesse” (imperfeito do subjuntivo, após verbo no passado). As demais usam presente do subjuntivo depois de verbo no passado, como em “faça”, ou invertem tempos, como em “consegue” e “pede”.',
  },
  {
    id: 'lp-verbos-qlivro12-43',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'A transposição para a voz ativa da frase “Foi assim que sempre se fez a literatura” tem como resultado:',
    alternativas: [
      'Sempre foi assim que a literatura fez.',
      'Assim é que sempre foi feita a literatura.',
      'Terá sido feito sempre assim, a literatura.',
      'Foi sempre assim que a literatura tem feito.',
      'Foi assim que sempre fizeram a literatura.',
    ],
    correta: 4,
    comentario:
      'Na voz ativa, o “se” apassivador da frase original dá lugar a um sujeito agente plural, e o verbo volta ao pretérito perfeito: “se fez” passa a “fizeram”, mantendo a estrutura de realce “foi assim que”. A alternativa E é a única que preserva esse tempo e a estrutura da frase.',
  },
  {
    id: 'lp-verbos-qlivro12-44',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRT/SE (20R) — Técnico Judiciário - 2011) ... a leitura em profundidade foi substituída pela massa de informações, em sua maioria superficiais... Com a transposição da frase acima para a voz ativa, o verbo passará a ser:',
    alternativas: ['substituíram;', 'substituiu;', 'substituíra;', 'tinham substituído;', 'substituiriam.'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “foi substituída”, voz passiva analítica no pretérito perfeito, passa para a ativa como “substituiu”, com o mesmo tempo e o sujeito “a massa de informações” como agente. As demais mudam o tempo ou o número, como “substituíram”, que não concorda com o sujeito singular.',
  },
  {
    id: 'lp-verbos-qlivro12-45',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRT/SE (20R) - Técnico Judiciário - 2011) O ex-ministro da Agricultura, Roberto Rodrigues, afirma que os ganhos da produtividade na pecuária poderiam liberar terras suficientes para dobrar a área plantada com alimentos. O emprego da forma verbal grifada acima indica, considerando-se o contexto:',
    alternativas: [
      'certeza que consolida a afirmativa feita;',
      'ação habitual e repetitiva, em relação à pecuária;',
      'fato histórico, constante no tempo;',
      'realidade a ser confirmada num futuro imediato;',
      'hipótese, a partir de certa condição implícita.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “poderiam” é futuro do pretérito, usado para expressar hipótese dependente de uma condição implícita, como se houvesse ganhos de produtividade. As demais atribuem à forma valor de certeza, hábito ou fato histórico, que não se aplicam a esse condicional.',
  },
  {
    id: 'lp-verbos-qlivro12-46',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRT/SE (20R) - Técnico Judiciário — 2011) A expectativa é de que o Brasil tenha de arcar com 40% desse aumento. O verbo flexionado nos mesmos tempo e modo em que se encontra o grifado acima está também grifado na frase:',
    alternativas: [
      'Embora domine as técnicas mais modernas, na média, a produtividade da agropecuária brasileira ainda está distante de alcançar seu pleno potencial.',
      'Grosso modo, as pastagens brasileiras possuem uma unidade animal por hectare.',
      'Para isso, terá dois caminhos ...',
      '... esse investimento muitas vezes não se justifica do ponto de vista estritamente econômico.',
      '“Além disso, o Brasil ainda pode aumentar muito a produtividade de grãos, como o milho, o trigo e o feijão”, afirma.',
    ],
    correta: 0,
    comentario:
      '“Tenha” está no presente do subjuntivo, e “domine”, na alternativa A, também está nesse tempo e modo, na oração concessiva introduzida por “embora”. As demais alternativas trazem presente do indicativo, futuro do presente ou outras formas que não coincidem com o verbo grifado.',
  },
  {
    id: 'lp-verbos-qlivro12-47',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRT/AL (19R) — Técnico Judiciário — 2011) ... que pouco conhecia sobre ciência. O verbo flexionado nos mesmos tempo e modo que o da frase acima está em:',
    alternativas: [
      '... embora uma corrente de autores continuem...',
      '... escritores do século XIX elogiaram as realizações de Leonardo...',
      'Os relatos do século XIX sobre Leonardo enfatizavam o fato...',
      'Pelo contrário, se ele não realizou coisa alguma...',
      'O poderoso mito de Leonardo alcança esse patamar...',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “enfatizavam” está no pretérito imperfeito do indicativo, o mesmo tempo e modo de “conhecia”. As demais trazem pretérito perfeito, como “elogiaram” e “realizou”, presente do subjuntivo, como “continuem”, ou presente do indicativo, como “alcança”.',
  },
  {
    id: 'lp-verbos-qlivro12-48',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRE/RN — Técnico Judiciário - 2011) É comum que, durante suas brincadeiras, as crianças se ...... para um universo mágico e ...... a identidade de uma personagem admirada, ........ um super-herói ou uma figura da realeza. Preenche corretamente as lacunas da frase acima, na ordem dada, o que está em:',
    alternativas: [
      'transportam - assumem - seja;',
      'transportem - assumem - seria;',
      'transportem - assumam - seja;',
      'transportam - assumiriam - sendo;',
      'transportariam - assumiriam - seria.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “é comum que” pede o subjuntivo, por isso “transportem” e “assumam”, e “seja”, no presente do subjuntivo, expressa a alternativa hipotética ligada a “ou”. As demais trazem indicativo ou condicional onde o contexto exige subjuntivo.',
  },
  {
    id: 'lp-verbos-qlivro12-49',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/RN - Técnico Judiciário -2011) Observe o texto: “João e Maria / Agora eu era o herói / E o meu cavalo só falava inglês / A noiva do cowboy era você / Além das outras três / Eu enfrentava os batalhões / Os alemães e seus canhões / Guardava o meu bodoque / E ensaiava um rock / Para as matinês (...) / Não, não fuja não / Finja que agora eu era o seu brinquedo / Eu era o seu pião / O seu bicho preferido / Sim, me dê a mão / A gente agora já não tinha medo / No tempo da maldade / Acho que a gente nem tinha nascido” (Chico Buarque e Sivuca). I. Nos versos “Agora eu era o herói” e “A gente agora já não tinha medo”, o uso do advérbio agora mostra-se inadequado, pois os verbos conjugados no pretérito imperfeito designam fatos transcorridos no tempo passado. II. Em “Finja que agora eu era o seu brinquedo” e “Sim, me dê a mão”, os verbos grifados estão flexionados no mesmo modo. III. Substituindo-se a expressão a gente pelo pronome nós nos versos “A gente agora já não tinha medo” e “Acho que a gente nem tinha nascido”, a forma verbal resultante, sem alterar o contexto, será teríamos. Está correto o que se afirma em:',
    alternativas: ['I, apenas.', 'II, apenas.', 'III, apenas.', 'I e II, apenas.', 'I, II e III.'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “Finja” e “dê” estão no mesmo modo (imperativo ou subjuntivo de tratamento de você), o que torna o item II verdadeiro. O item I é falso, pois o advérbio “agora” pode marcar, na narração, a reatualização de uma lembrança passada. O item III é falso, porque a troca de “a gente” por “nós” daria “tínhamos”, não “teríamos”.',
  },
  {
    id: 'lp-verbos-qlivro12-50',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC — TRE/AP — Técnico Judiciário — 2011) Está corretamente empregada a palavra destacada na frase:',
    alternativas: [
      'Constitue uma grande tarefa transportar todo aquele material.',
      'As pessoas mais conscientes requereram anulação daquele privilégio.',
      'Os fiscais reteram o material dos artistas.',
      'Quando ele vir até aqui, trataremos do assunto.',
      'Se eles porem as pastas na caixa ainda hoje, pode despachá-la imediatamente.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “requereram”, pretérito perfeito do verbo regular requerer, concorda com “as pessoas” e está na forma adequada. As demais trazem erros de flexão, como “constitue” (correto: constitui), “reteram” (correto: retiveram) e “porem” (correto: puserem).',
  },
  {
    id: 'lp-verbos-qlivro12-51',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRT/MT (23R) — Analista Judiciário — 2011) Tanto as fontes quanto a própria historiografia falavam a linguagem do poder... Transpondo-se a frase acima para a voz passiva, a forma verbal resultante será:',
    alternativas: ['eram faladas;', 'foi falada;', 'se falaram;', 'era falada;', 'tinha-se falado.'],
    correta: 3,
    comentario:
      'A alternativa D é a correta: na voz passiva analítica, “falavam” vira “era falada”, com o verbo ser no imperfeito e o particípio concordando com o sujeito singular “a linguagem do poder”. As demais alteram o tempo, como “foi falada”, que é pretérito perfeito, ou concordam mal com o sujeito, como “eram faladas”.',
  },
  {
    id: 'lp-verbos-qlivro12-52',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRT/MT (23R) - Analista Judiciário - 2011) O verbo corretamente empregado e flexionado está grifado em:',
    alternativas: [
      'É de se imaginar que, se os viajantes setecentistas antevessem as dificuldades que iriam deparar, muitos deles desistiriam da aventura antes mesmo de embarcar.',
      'O que quer que os compelisse, cabe admirar a coragem desses homens que partiam para o desconhecido sem saber o que os aguardava a cada volta do rio.',
      'Caso não se surtisse com os mantimentos necessários para o longo percurso, o viajante corria o risco de literalmente morrer de fome antes de chegar ao destino.',
      'Se não maldiziam os santos, é bastante provável que muitos dos viajantes maldizessem ao menos o destino diante das terríveis tribulações que deviam enfrentar.',
      'Na história da humanidade, desbravadores foram não raro aqueles que sobreporam o desejo de enriquecer à relativa segurança de uma vida sedentária.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “compelisse”, no imperfeito do subjuntivo, está na forma adequada, e “partiam” e “aguardava” também estão corretos. As demais apresentam erros de flexão ou de correlação verbal, como “antevessem”, “surtisse”, “maldiziam” e “sobreporam”.',
  },
  {
    id: 'lp-verbos-qlivro12-53',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — DPE/RS — Defensor Público - 2011) Há verbos supostamente ativos que não expressam ação realizada, alterando a flexão dos verbos haver e expressar para o pretérito perfeito do indicativo, tem-se:',
    alternativas: [
      'havia verbos supostamente ativos que não expressavam ação realizada;',
      'houve verbos supostamente ativos que não expressaram ação realizada;',
      'houveram verbos supostamente ativos que não expressavam ação realizada;',
      'haviam verbos supostamente ativos que não expressavam ação realizada;',
      'houve verbos supostamente ativos que não expressavam ação realizada.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “haver” no sentido de existir é impessoal e fica no singular (“houve”), enquanto “expressar”, que concorda com o sujeito “verbos”, vai ao plural no pretérito perfeito (“expressaram”). As demais mantêm o imperfeito ou usam “houveram” e “haviam”, que concordam mal com o verbo impessoal.',
  },
  {
    id: 'lp-verbos-qlivro12-54',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — BB — Escriturário — 2011) É irrelevante que entrem na faculdade, que ganhem muito ou pouco dinheiro, que sejam bem-sucedidos na profissão. (3º parágrafo) O emprego das formas verbais grifadas acima denota:',
    alternativas: [
      'hipótese passível de realização;',
      'fato real e definido no tempo;',
      'condição de realização de um fato;',
      'finalidade das ações apontadas no segmento;',
      'temporalidade que situa as ações no passado.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “entrem”, “ganhem” e “sejam” estão no presente do subjuntivo, que apresenta as ações como hipóteses ainda não realizadas, passíveis de acontecer. As demais atribuem valor de fato real, condição, finalidade ou passado, que não se aplicam ao subjuntivo do trecho.',
  },
  {
    id: 'lp-verbos-qlivro12-55',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRE/TO — Analista Judiciário — 2011) Minha outra mulher teve uma educação rigorosa, mas mesmo assim mamãe nunca entendeu por que eu escolhera justamente aquela, entre tantas meninas de uma família distinta. O verbo grifado na frase acima pode ser substituído, sem que se altere o sentido e a correção originais, e o modo verbal, por:',
    alternativas: ['escolheria;', 'havia escolhido;', 'houvera escolhido;', 'escolhesse;', 'teria escolhido.'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “escolhera”, pretérito mais-que-perfeito simples, equivale a “havia escolhido”, mais-que-perfeito composto, no mesmo modo indicativo, sem prejuízo do sentido. As demais mudam o modo, como “escolhesse”, ou o tempo, como “escolheria” e “teria escolhido”.',
  },
  {
    id: 'lp-verbos-qlivro12-56',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — Petrobras - Administrador Júnior — 2011) Leia: Sob Medida (Chico Buarque) — Se você crê em Deus / Erga as mãos para os céus e agradeça / Quando me cobiçou / Sem querer acertou na cabeça. No fragmento acima, passando as formas verbais destacadas para a segunda pessoa do singular, a sequência correta é:',
    alternativas: [
      'crês, ergues, agradecei, cobiçais, acertai;',
      'crês, ergue, agradece, cobiçaste, acertaste;',
      'credes, ergueis, agradeceis, cobiçaste, acertaste;',
      'credes, ergas, agradeças, cobiçais, acertais;',
      'creis, ergues, agradeces, cobiçaste, acertaste.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta, pois, para tu, “crês”, “ergue”, “agradece”, “cobiçaste” e “acertaste” seguem a flexão de segunda pessoa do singular. As demais trocam formas de vós, como “credes” e “ergueis”, ou formas de você do subjuntivo, como “ergas” e “agradeças”.',
  },
  {
    id: 'lp-verbos-qlivro12-57',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio-Transpetro- Administrador Júnior -2011) O trecho em que se encontra voz passiva pronominal é:',
    alternativas: [
      '“feito hamsters que se alimentam de sua própria agitação”',
      '“Recolher-se em casa,”',
      '“sinal de que não se arrumou ninguém”',
      '“Mas, se a gente aprende a gostar (...)”',
      '“nela a gente se refaz (...)”',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: em “não se arrumou ninguém”, o “se” é apassivador, pois o verbo arrumar é transitivo direto e o sujeito “ninguém” é o paciente. As demais têm “se” ligado a verbos pronominais, como recolher-se e refazer-se, ou a outras funções, como a reflexiva e a indeterminadora.',
  },
  {
    id: 'lp-verbos-qlivro12-58',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - Transpetro - Administrador Júnior — 2011) A sentença em que o verbo entre parênteses está corretamente flexionado é:',
    alternativas: [
      'O coordenador reveu as necessidades dos grupos, (rever)',
      'A impaciência deteu as pessoas, (deter)',
      'Eu reavejo minhas convicções diariamente, (reaver)',
      'Quando você se opor à minha solidão, ficarei aborrecido, (opor)',
      'Nós apreciamos os bons alunos, (apreciar)',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “apreciamos” é a primeira pessoa do plural do presente do indicativo de apreciar, verbo regular. As demais trazem erros: “reveu” deveria ser “reviu”, “deteu” deveria ser “deteve”, “reavejo” não existe, pois reaver não tem essa forma no presente, e “opor”, no futuro do subjuntivo, deveria ser “opuser”.',
  },
  {
    id: 'lp-verbos-qlivro12-59',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT/RS (4R) - Analista Judiciário - 2011) A conciliação, antes de tudo, tem proporcionado às partes o efetivo acesso à Justiça, pois elas participam diretamente no resultado apaziguador do conflito. Transpondo o segmento destacado na frase acima para a voz passiva, a forma verbal resultante é:',
    alternativas: ['têm proporcionado;', 'tem sido proporcionado;', 'tinham proporcionado;', 'era proporcionado;', 'foi proporcionado.'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: a locução “tem proporcionado” passa para a voz passiva como “tem sido proporcionado”, com o auxiliar ter no singular, concordando com “a conciliação”, e o verbo ser no particípio. As demais mudam o tempo ou o número, como “têm proporcionado”, que vai ao plural.',
  },
  {
    id: 'lp-verbos-qlivro12-60',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT/RS (4R) — Analista Judiciário — 2011) Observe o texto: “(…) é uma história da Bossa Nova e dos dois rapazes e moças que a fizeram, quando eles tinham entre quinze e trinta anos. É também um livro que se pretende o mais factual e objetivo possível. Evidente que, tendo sido escrito por alguém que vem ouvindo Bossa Nova desde que ela ganhou este nome (e que nunca se conformou quando o Brasil começou a trocá-la por exotismos), uma certa dose de paixão acabou se intrometendo na receita — sem interferir, espero, pró ou contra, na descrição da trajetória de qualquer personagem. Os seres humanos, assim como os LPs, têm lados A e B, e houve um esforço máximo para que ambos fossem mostrados. (...)” O segmento que expressa uma ação durativa que se prolonga do passado até ao momento da fala do autor é:',
    alternativas: ['tendo sido escrito;', 'vem ouvindo;', 'começou a trocá-la;', 'acabou se intrometendo;', 'têm.'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “vem ouvindo” é locução no presente com gerúndio, que expressa ação durativa iniciada no passado e prolongada até o momento da fala. As demais expressam ação concluída, como “começou” e “acabou”, ou forma composta ligada a outro momento, como “tendo sido escrito”.',
  },
  {
    id: 'lp-verbos-qlivro12-61',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC — TRE/SP — Analista Judiciário — 2012) Está inadequada a correlação entre tempos e modos verbais no seguinte caso:',
    alternativas: [
      'Muitos se lembrariam da alegria voraz com que eram disputadas as toneladas da vítima.',
      'Foi salva graças à religião ecológica que andava na moda e que por um momento estabelecera uma trégua entre todos.',
      'Um malvado sugere que se dê por perdida a batalha e comecemos logo a repartir os bifes.',
      'Depois de se haver debatido por três dias na areia da praia a jubarte acabara sendo salva por uma traineira que vinha socorrê-la.',
      'Já informado do salvamento da baleia, o cronista teve um sonho em que o animal lhe surgiu com a força de um símbolo.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a indicada como inadequada: o infinitivo composto “haver debatido” não mantém a relação temporal esperada com o mais-que-perfeito “acabara”, na sequência de tempos da frase. As demais mantêm correlações aceitas pela norma culta.',
  },
  {
    id: 'lp-verbos-qlivro12-62',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FCC — TRE/SP — Técnico Judiciário - 2012) em que as melhores cadências do samba e da canção se aliaram com naturalidade às deformações normais do português brasileiro... O verbo flexionado nos mesmos tempo e modo que o grifado acima está em:',
    alternativas: [
      'São Paulo muda muito...',
      '... para nos porem no Alto da Mooca...',
      'Talvez João Rubinato não exista...',
      '... Adoniran não a deixará acabar...',
      'Mas a cidade que nossa geração conheceu...',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “conheceu” está no pretérito perfeito do indicativo, o mesmo tempo e modo de “se aliaram”. As demais trazem presente do indicativo, como “muda”, presente do subjuntivo, como “exista”, futuro do presente, como “deixará”, ou infinitivo.',
  },
  {
    id: 'lp-verbos-qlivro12-63',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC — TRF/2R — Analista Judiciário (ADM) — 2012) O emprego, a grafia e a flexão dos verbos estão corretos em:',
    alternativas: [
      'A revalorização e a nova proeminência de Paraty não prescindiram e não requiseram mais do que o esquecimento e a passagem do tempo.',
      'Quando se imaginou que Paraty havia sido para sempre renegada a um segundo plano, eis que ela imerge do esquecimento, em 1974.',
      'A cada novo ciclo econômico retificava-se a importância estratégica de Paraty, até que, a partir de 1855, sobreviram longos anos de esquecimento.',
      'A Casa Azul envidará todos os esforços, refreando as ações predatórias, para que a cidade não sucumba aos atropelos do turismo selvagem.',
      'Paraty imbuiu da sorte e do destino os meios para que obtesse, agora em definitivo, o prestígio de um polo turístico de inegável valor histórico.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “envidará”, futuro do presente, e “sucumba”, presente do subjuntivo depois de “para que”, estão empregados e grafados corretamente. As demais trazem erros, como “imerge”, que deveria ser “emerge”, “sobreviram”, que deveria ser “sobrevieram”, e “obtesse”, que deveria ser “obtivesse”.',
  },
  {
    id: 'lp-verbos-qlivro12-64',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC-TCE/SP-Auxiliar de Fiscalização Financeira-2012) ... deve cuidar para que os impactos ambientais sejam mitigados e compensados. O verbo flexionado nos mesmos tempo e modo em que se encontra o grifado acima está em:',
    alternativas: [
      'Quando se tem em conta ...',
      '... ainda que nem todo o potencial lá existente venha a ser desenvolvido.',
      'As questões que se contrapõem ...',
      '... não podemos abrir mão de nenhum dos dois objetivos.',
      '... que podem ser feitos na direção de...',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “venha” está no presente do subjuntivo, o mesmo tempo e modo de “sejam”, na oração concessiva introduzida por “ainda que”. As demais trazem presente do indicativo, como “tem”, “podemos” e “podem”, ou “se contrapõem”, que também é indicativo.',
  },
  {
    id: 'lp-verbos-qlivro12-65',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/PR - Analista Judiciário - 2012) Fragmento de texto: A discussão sobre “centro” e “periferia” no pensamento brasileiro vincula-se a elaborações que se dão num âmbito mais amplo, latino-americano. (...) No entanto, a elaboração anterior à CEPAL preocupava-se principalmente com os países capitalistas avançados, interessando-se pelos países “atrasados” na medida em que desenvolvimentos ocorridos neles repercutissem para além deles. (...) Assim, o marxismo, a teoria da modernização e a economia neoclássica tendiam a considerar que os mesmos caminhos seguidos pelas sociedades em que foram formulados teriam que ser trilhados pelo resto do mundo, “atrasado”. A única afirmação INCORRETA sobre a forma transcrita do texto é',
    alternativas: [
      'vincula-se / O tempo e o modo verbais indicam que a ideia é tomada como verdadeira.',
      'preocupava-se / A forma verbal designa que o fato é concebido como contínuo.',
      'interessando-se / Esse gerúndio, colocado depois do verbo principal - preocupava-se -, indica uma ação simultânea ou posterior, e pode ser legitimamente considerado equivalente a “e interessava-se”.',
      'repercutissem / Essa forma subjuntiva enuncia a ação do verbo como eventual.',
      'teriam / Constitui forma polida de presente, atenuando a ideia de obrigação ou dever.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a incorreta, por isso é a resposta: “teriam” é futuro do pretérito, que expressa fato futuro visto a partir do passado, e não forma polida de presente. As demais afirmações estão corretas, como a da forma subjuntiva “repercutissem”, que apresenta a ação como eventual.',
  },
  {
    id: 'lp-verbos-qlivro12-66',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Prefeitura Municipal/SP - Auditor-Fiscal Tributário Municipal I (Gestão Tributária) - 2012) Fragmento de texto: “Precisamos levar sempre em conta os traços culturais que nos caracterizam, que hão de alimentar a busca de soluções endógenas, que nem sempre têm por que coincidir com as do mundo altamente industrializado”. (...) O que há de extraordinário nessa citação? Nada, exceto a data. Ela não foi redigida no princípio do século XIX e sim no dia 29 de maio de 1993, exatamente um mês antes da redação deste artigo. Trata-se de um documento aprovado por vários intelectuais ibero-americanos, na Guatemala, como parte da preparação da III Conferência de Cúpula da região, a realizar-se em Salvador, na Bahia. (...) Ao que parece, nada envelheceu nessas palavras. Quase todos os brasileiros se orgulhariam de repeti-las, como se elas fossem novas e matinais, como se fôssemos contemporâneos do grito do Ipiranga. (...) Só uma coisa não mudou: o nacionalismo cultural. Continuamos repetindo, ritualmente, que a cultura brasileira (ou latino-americana) deve desfazer-se dos modelos importados e voltar-se para sua própria tradição cultural. O texto legitima o seguinte comentário:',
    alternativas: [
      'Em “Continuamos repetindo”, a ideia de ação em processo é decorrência exclusiva da forma “Continuamos”.',
      'A forma verbal “foi redigida” exprime fato passado considerado contínuo.',
      'A forma “a realizar-se em Salvador” exprime fato futuro em relação à data de redação do documento, mas passado em relação à data do artigo.',
      'Em “se orgulhariam de repeti-las”, tem-se a expressão de um fato possível, mas considerado de pouca probabilidade.',
      'Em “hão de alimentar”, a forma verbal exprime, além da ideia de futuro, a de que o evento é desejado.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: a locução “hão de alimentar” exprime futuro, mas também a ideia de que o evento é desejado, o que se confirma pelo contexto de valorização das soluções endógenas. As demais atribuem às formas valores que não se confirmam no texto, como a exclusividade de “Continuamos” ou a continuidade de “foi redigida”.',
  },
  {
    id: 'lp-verbos-qlivro12-67',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FDC - Prefeitura Itaboraí/RJ - Fiscal de Tributos - 2012) A frase que se encontra integralmente na voz ativa é:',
    alternativas: [
      '“Talvez o Brasil já tenha acabado e a gente não perceba isso”. (Paulo Francis)',
      '“De dez em dez anos toda a burocracia precisa ser fuzilada e trocada”. (Stalin)',
      '“O Brasil é a melhor piada que já foi contada por um português”. (Fernando Pedreira)',
      '“Advogados são as únicas pessoas cuja ignorância da lei não é punida com cadeia”. (Jeremy Bentham)',
      '“O Brasil é um país perigosamente gasoso. Os problemas são detectados, mas ninguém sabe resolvê-los”. (Arnaldo Jabor)',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “Talvez o Brasil já tenha acabado e a gente não perceba isso” tem todos os verbos na voz ativa, sem locução passiva nem pronome apassivador. As demais têm passivas, como “precisa ser fuzilada”, “foi contada”, “são as únicas” com “é punida” e “são detectados”.',
  },
  {
    id: 'lp-verbos-qlivro12-68',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '“Honrarás pai e mãe!” Esse é um mandamento da Igreja Católica, que poderia ser ampliado a todas as igrejas. Nesse caso, o emprego do futuro do presente do indicativo tem valor de:',
    alternativas: ['incentivo;', 'conselho;', 'pedido;', 'alerta;', 'ordem.'],
    correta: 4,
    comentario:
      'A alternativa E é a correta: no mandamento, o futuro do presente “honrarás” assume valor imperativo de ordem, com caráter normativo e obrigatório. As demais alternativas descrevem usos mais brandos ou de advertência, que não se aplicam ao tom mandatório do texto.',
  },
  {
    id: 'lp-verbos-qlivro12-69',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Ceperj - Procon/RJ - Técnico em Contabilidade - 2012) Dentre os verbos irregulares há aqueles que apresentam alguma variação no radical, ou seja, na “base” da palavra. Um exemplo de verbo irregular encontra-se no seguinte exemplo do texto:',
    alternativas: [
      '“quem lhe escreve”;',
      '“vivi uma tremenda aventura”;',
      '“quanto tempo isso levaria”;',
      '“Éramos centenas ali”;',
      '“sempre falava nisso”.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “Éramos” é forma do verbo ser no pretérito imperfeito, cujo radical (era-) difere do radical do infinitivo (ser-), o que caracteriza a irregularidade no radical. As demais formas, como “escreve”, “vivi”, “levaria” e “falava”, seguem o radical do infinitivo.',
  },
  {
    id: 'lp-verbos-qlivro12-70',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — PF — Agente — 2012) Fragmento do poema: “Ó grandes oportunistas... que calculais... / Ó personagens solenes (...) / Ó soberbos titulares”. No poema, que apresenta uma denúncia de atos de abuso de poder, foram utilizados os seguintes recursos que permitem que a poeta se dirija diretamente a um interlocutor: emprego de vocativo nos versos 1, 9 e 33 e de verbos na segunda pessoa do plural, todos no imperativo afirmativo.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: os verbos de segunda pessoa do plural citados, como “calculais”, estão no presente do indicativo, e não no imperativo afirmativo. O emprego de vocativos é real, mas o modo indicado não corresponde aos verbos do poema.',
  },
  {
    id: 'lp-verbos-qlivro12-71',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — MPE/PI — Analista Ministerial — 2012) Fragmento de texto: “(…) de palhaço, eles aproveitam o tempo dos carros parados no semáforo para cumprir essa missão. Com cartazes educativos, ocupam a faixa de pedestres, fazem performances e brincam com os motoristas.” Sem prejuízo semântico para o texto, as formas verbais “fazem” e “brincam” poderiam ser substituídas pelas formas fazendo e brincando, respectivamente.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: “fazem” e “brincam” são verbos coordenados que indicam ações simultâneas à de “ocupam”, e o gerúndio pode expressar essa mesma simultaneidade sem prejuízo do sentido. Por isso a substituição é possível.',
  },
  {
    id: 'lp-verbos-qlivro12-72',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(AOCP — BRDE — Analista de Sistemas — 2012) Assinale a alternativa cuja sequência verbal destacada constitui um exemplo de tempo composto.',
    alternativas: [
      '“Não estou afirmando que os poetas atuais são tradicionalistas”',
      '“...um arquivo atemporal, ao qual recorre a produção poética para continuar proliferando”',
      '“as formas poéticas deixaram de ser valores que cobram adesão à experiência histórica”',
      '“Pode parecer um paradoxo que a poesia desse período, a mesma que tem continuidade”',
      '“... tenha passado a fazer um uso relutantemente crítico, ou acrítico, da tradição”',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “tenha passado” é pretérito perfeito composto do subjuntivo, formado por ter no subjuntivo mais o particípio. As demais têm locuções com verbo principal no infinitivo ou no gerúndio, ou formas simples, que não são tempos compostos.',
  },
  {
    id: 'lp-verbos-qlivro12-73',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Funcab - MPE/RO - Técnico em Contabilidade - 2012) Em “(...) A empregada já HAVIA CHEGADO e estava no portão, olhando o movimento. (...)”, o tempo verbal mostra uma ação:',
    alternativas: [
      'iniciada no passado, continuada no presente;',
      'realizada em futuro próximo;',
      'subordinada a uma ação futura;',
      'repetida, independente da ação passada;',
      'já terminada.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “havia chegado” é pretérito mais-que-perfeito composto, que expressa ação anterior a outra passada e já concluída. As demais atribuem à forma valores de continuidade, futuro próximo, dependência de ação futura ou repetição, que não correspondem ao mais-que-perfeito composto.',
  },
  {
    id: 'lp-verbos-qlivro12-74',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Funcab - MPE/RO — Analista - 2012) Assinale a alternativa em que o verbo em destaque foi corretamente conjugado.',
    alternativas: [
      'Se você INTERPOR um recurso, talvez consiga reverter a situação.',
      'Ele INTERVIU assim que a situação piorou.',
      'Se você VER que a situação piorou, volte para cá.',
      'Quando você VIM para cá, traga a pasta da diretoria.',
      'Você só será respeitado se se IMPUSER.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “impuser” é o futuro do subjuntivo de impor, usado na oração condicional introduzida por “se”. As demais erram: “interpor” deveria ser “interpuser”, “interviu” deveria ser “interveio”, “ver” deveria ser “vir” e “vim” deveria ser “vier”.',
  },
  {
    id: 'lp-verbos-qlivro12-75',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TJ/PE - Técnico Judiciário - 2012) “No meu tempo, já existiam velhos, mas poucos”. A frase de Machado de Assis nos leva a supor que havia mais velhos quando ele próprio se tornou um velho. E hoje, muito mais ainda, embora os manuais de redação recomendem que não se fale mais em “velhos”, mas em “idosos”. (Carlos Heitor Cony, “Prazo de validade”. Folha de S. Paulo, A2 opinião, 27/10/2011) No fragmento acima, as formas verbais havia e se tornou foram empregadas para:',
    alternativas: [
      'indicar, respectivamente, uma ação provável e uma ação efetivamente realizada no passado;',
      'indicar, entre ações simultâneas passadas, uma que estava se processando quando sobreveio a outra;',
      'denotar que ambas as ações tiveram a mesma duração momentânea;',
      'substituir, ambas, o futuro do pretérito;',
      'denotar fatos que foram um (o segundo) a consequência do outro (o primeiro).',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “havia” (imperfeito) mostra a ação que estava em curso no passado, e “se tornou” (pretérito perfeito) é a ação que sobreveio e se concluiu. As demais atribuem às formas valores de probabilidade, duração igual ou consequência, que não se aplicam ao texto.',
  },
  {
    id: 'lp-verbos-qlivro12-76',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Ceperj - Procon/RJ — Advogado — 2012) “todos que são impactados pelas mídias de massa” O fragmento transcrito acima apresenta uma construção na voz passiva do verbo. Outro exemplo de voz passiva encontra-se em:',
    alternativas: [
      '“As crianças brasileiras influenciam 80% das decisões de compra de uma família”',
      '“A publicidade na TV é a principal ferramenta do mercado para a persuasão do público infantil”',
      '“evidenciaram outros fatores que influenciam as crianças brasileiras nas práticas de consumo.”',
      '“Elas são assediadas pelo mercado”',
      '“valores distorcidos são de fato um problema de ordem ética”',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “são assediadas” é voz passiva analítica, formada por ser e particípio concordando com o sujeito “elas”, como ocorre em “são impactados”. As demais têm verbos na voz ativa, como “influenciam” e “evidenciaram”, ou predicados de ligação, que não formam passiva.',
  },
  {
    id: 'lp-verbos-qlivro12-77',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(MPE/SC - Promotor de Justiça - 2012) O verbo, quando usado no modo imperativo, torna o texto mais vigoroso e com forte teor de persuasão, porém precisa ser usado corretamente, de acordo com o sujeito a que se refere. Identifique, pois, a(s) alternativa(s) em que o sujeito apresentado correspondente à flexão do verbo: I. Chora, grita, esperneia, mas demonstra alguma reação, (sujeito: você) II. Confira detalhadamente toda a documentação anexa ao processo, (sujeito: você) III. Não demonstres qualquer reação durante o depoimento das testemunhas, (sujeito: tu) IV. Compreende que a decisão tomada pelo juiz foi bastante coerente, (sujeito: tu) V. Sê cuidadoso com tudo o que é dito ou escrito, (sujeito: tu)',
    alternativas: [
      'Apenas as assertivas I e II estão corretas.',
      'Apenas as assertivas III, IV e V estão corretas.',
      'Apenas as assertivas II, III, IV e V estão corretas.',
      'Apenas as assertivas I, II e IV estão corretas.',
      'Todas as assertivas estão corretas.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: II (“confira”, para você), III (“demonstres”, para tu), IV (“compreende”, para tu) e V (“sê”, para tu) estão adequados. O item I é falso, porque “demonstra” é indicativo e não imperativo, e não concorda com a forma de imperativo que se aplica a você.',
  },
  {
    id: 'lp-verbos-qlivro12-78',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf — MI-CENAD — Estatístico — 2012) Assinale a opção que, na sequência, preenche corretamente as lacunas do texto, de modo a manter o correto uso dos modos e tempos verbais e a coerência entre as ideias. Assim que o governo divulgou o crescimento zero do produto interno bruto brasileiro no terceiro semestre, não faltaram prognósticos negativos a respeito da economia do país e houve até quem _____ (1) _____ em risco de recessão no futuro próximo. Basta um olhar mais atento aos números de 2011 para _____ (2) _____ o pessimismo não se justifica. Entre os empresários não são poucas as vozes que _____ (3) _____ os alarmistas. Não faltam motivos para supor que, em 2011, os números da economia brasileira _____ (4) _____ vir ainda mais fortes. Além dos juros menores, conforme _____ (5) _____ a maioria dos economistas, do crédito em expansão, e dos incentivos fiscais, está previsto para janeiro um reajuste no salário mínimo, o que _____ (6) _____ impactos significativos à renda dos trabalhadores e aposentados. Nesse (…), o mercado interno seguirá aquecido.',
    alternativas: [
      'fale / percebermos / discordassem / possam / preverá / trará',
      'falasse / perceberem / discordassem / pudessem / prevê / trouxera',
      'falasse / perceber / discordam / possam / prevê / trará',
      'filiou / percebermos / discordaram / podem / preverá / traria',
      'falou / perceberem / discordaram / podem / previssem / trouxera',
    ],
    correta: 2,
    comentario:
      'A alternativa C preenche as lacunas com coerência: “falasse” (subjuntivo depois de “houve até quem”), “perceber” (infinitivo depois de “para”), “discordam” (indicativo em oração de fato real), “possam” (hipótese depois de “os números”), “prevê” (indicativo, em “conforme prevê a maioria”) e “trará” (futuro do presente de consequência). As demais trocam tempos ou modos sem justificativa no contexto.',
  },
  {
    id: 'lp-verbos-qlivro12-79',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - BNDES - Técnico Administrativo - 2013) Que forma verbal está empregada no mesmo tempo e modo que “pudemos”?',
    alternativas: ['Forem', 'Cresceu', 'Será', 'Deixem', 'Indicam'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “cresceu” está no pretérito perfeito do indicativo, o mesmo tempo e modo de “pudemos”. As demais estão em outros tempos ou modos: “forem” é futuro do subjuntivo, “será” é futuro do presente, “deixem” é presente do subjuntivo e “indicam” é presente do indicativo.',
  },
  {
    id: 'lp-verbos-qlivro12-80',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TCE/SP - Agente de Fiscalização Financeira - 2012) “Não sei se V. Exa. Revma. é como eu. Eu gosto de contemplar o passado, de viver a vida que foi, de pensar nos homens que antes de nós, ou honraram a cadeira que V. Exa. Revma. ocupa, ou espreitaram, como eu, as vidas alheias. Outras vezes estendo o olhar pelo futuro adiante, e vejo o que há de ser esta boa cidade de S. Sebastião, um século mais tarde, quando o bonde for um veículo tão desacreditado como a gôndola, e o atual chapéu masculino uma simples reminiscência histórica. Podia contar-lhe em duas ou três colunas o que vejo no futuro e o que revejo no passado; mas, além de que não quisera tomar o precioso tempo de V. Exa. Reverendíssima, tenho pressa de chegar ao ponto principal desta carta, com que abro a minha crônica. E vou já a ele.” Sobre a forma verbal indicada, é INCORRETO afirmar:',
    alternativas: [
      'honraram / Exprime ação completamente concluída.',
      'for / Indica um fato possível, considerado altamente provável.',
      'estendo / Enuncia um fato que ocorre exclusivamente no momento em que o missivista se expressa.',
      'vou / Marca um fato futuro, mas bastante próximo, como o confirma o emprego de já.',
      'podia / Está empregado com valor de futuro do pretérito.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a incorreta, e por isso é a resposta: “estendo” está no presente do indicativo e pode indicar hábito, como mostra o próprio texto em “Outras vezes estendo o olhar”, e não apenas o momento da fala. As demais estão corretas: “honraram” indica ação concluída, “for” é futuro do subjuntivo com valor de hipótese, “vou” é futuro próximo e “podia” tem valor de futuro do pretérito.',
  },
  {
    id: 'lp-verbos-qlivro12-81',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — Câmara Municipal de São Paulo — Consultor Técnico Legislativo — 2014) A seguinte frase NÃO admite transposição para a voz passiva:',
    alternativas: [
      'Ele alcançou sucesso exclusivamente por sua competência.',
      'O poeta Ferreira Gullar acabou de contar um caso exemplar para a nossa tese sobre a fama vazia.',
      'A mídia cria inúmeros deuses, todos incapazes de qualquer grandeza efetiva.',
      'Muitas revistas sobrevivem graças ao culto irrefreável das celebridades.',
      'A celebração pela mídia atrai tanto as pessoas ingênuas como as mais maliciosas.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “sobrevivem” é verbo intransitivo, sem objeto direto, e por isso não admite passagem para a voz passiva. As demais têm verbos transitivos diretos, como alcançar, contar, criar e atrair, cujo objeto pode virar sujeito da passiva.',
  },
  {
    id: 'lp-verbos-qlivro12-82',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV — SSP/AM — Técnico de Nível Superior — 2015) O segmento que exemplifica voz ativa e não passiva é:',
    alternativas: [
      '“a televisão não pode ser melhorada”.',
      '“este instrumento de massas deveria ser eliminado”.',
      '“nunca antes dele tinham sido relacionados”.',
      '“todas as tecnologias são ‘neutras’”.',
      '“é assim abertamente posta em causa nesta obra”.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “são” é verbo de ligação, e a oração não exprime ação sofrida pelo sujeito, nem forma de passiva. As demais têm locuções de voz passiva com ser ou ter sido, como em “pode ser melhorada” e “deveria ser eliminado”.',
  },
  {
    id: 'lp-verbos-qlivro12-83',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(IBFC — EBSERH — Assistente Administrativo (HUPEST-UFSC) - 2016) Em “Entre a fuga do vento Nordeste e o primeiro sopro frio do Sudoeste, há um instante vazio e ansioso: as cigarras calam, se eriçam as águas da lagoa e as casuarinas, que se balançavam indolentes, imobilizam-se na rigidez morta e reta dos ciprestes. Os urubus debandam das palmeiras, os pescadores recolhem as velas, e daqui da varanda vejo os lagartos procurarem medrosos os seus esconderijos. ‘E o sudoeste’, penso, e logo ele chega carpindo penas e desgraças que não são suas”, o emprego recorrente do presente do indicativo sugere:',
    alternativas: [
      'uma ação do momento da enunciação.',
      'uma ideia que ainda ocorrerá.',
      'uma ação que se limita ao passado.',
      'um caráter atemporal.',
      'um sentido de possibilidade.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: o presente do indicativo, em “calam”, “debandam” e “recolhem”, descreve fatos recorrentes e sem marcação temporal precisa, como na descrição de um fenômeno natural. As demais atribuem ao presente valor de momento da fala, de futuro ou de passado, o que não se aplica à descrição.',
  },
  {
    id: 'lp-verbos-qlivro12-84',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Idecan — INCA - Analista em Ciência e Tecnologia Júnior - 2017) Considerando a ocorrência de uma relação semântica entre agente, paciente e instrumento da ação verbal, temos a construção do predicado relacionada com distinções de voz. Deste modo, assinale, a seguir, o trecho selecionado cuja reescrita na voz passiva é possível:',
    alternativas: [
      '“Nisso ele errou, [...]”',
      '“Já alguns países têm avançado nessa direção.”',
      '“[...] se sem o trabalhador não se produz riqueza [...]”',
      '“[...] Karl Marx foi uma personalidade excepcional, [...]”',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “se produz riqueza” é voz ativa com verbo transitivo direto, cujo objeto “riqueza” pode virar sujeito de uma passiva: “riqueza não é produzida”. As demais têm verbos intransitivos, como “errou” e “avançado”, ou de ligação, como “foi”, que não admitem voz passiva.',
  },
  {
    id: 'lp-verbos-qlivro12-85',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe — BNB — Especialista Técnico (Analista de Sistema) — 2018) Nas locuções “tinha botado” e “tinha posto”, a substituição da forma verbal “tinha” por “havia” não prejudicaria a correção gramatical e o sentido original do texto.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: “tinha” e “havia” são formas equivalentes do verbo auxiliar ter ou haver no pretérito imperfeito do indicativo, que, com o particípio, forma o mais-que-perfeito composto. A troca mantém o tempo e o sentido das locuções.',
  },
  {
    id: 'lp-verbos-qlivro12-86',
    temaId: 'lp-verbos',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — AFAP - Assistente Administrativo de Fomento — 2019) Fragmento de texto: “A agência da ONU para informação e comunicação, a UIT, indicou que, até o final de 2018, 51,2% da população mundial estará usando a internet. ‘Até o final de 2018, teremos ultrapassado a marca de 50% do uso da internet’, afirmou o diretor da UIT, Houlin Zhou, em um comunicado’. O futuro do indicativo em “estará usando” e “teremos ultrapassado” serve ao propósito discursivo de',
    alternativas: [
      'constatar fatos ocorridos.',
      'retificar propósitos.',
      'sinalizar prognósticos.',
      'apresentar sugestões.',
      'evocar experiências.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: os futuros “estará usando” e “teremos ultrapassado” apresentam previsões sobre o que deve ocorrer, o que caracteriza um prognóstico. As demais não se aplicam: esses futuros não constatam fatos já ocorridos, não retificam propósitos, não sugerem ações e não evocam experiências passadas.',
  },
  {
    id: 'lp-verbos-qlivro12-87',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe - MPE/CE - Analista Ministerial (Administração) - 2020) Fragmento de texto: “... a ciência e os especialistas caminham para o entendimento de que o preconceito seja um conceito aprendido.” A substituição da forma verbal “seja” por “é” manteria a coerência e a correção gramatical do texto.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: a completiva “de que o preconceito é um conceito aprendido” pode apresentar o conteúdo como algo assumido pelo entendimento científico, e a troca não compromete a coerência nem a correção. A banca considerou a substituição possível.',
  },
  {
    id: 'lp-verbos-qlivro12-88',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Instituto AOCP - Funpresp-JUD - Analista em Gestão de Pessoas - 2021) “(...) Pode até ser que o homem, através de seus desenhos estivesse desenvolvendo uma teoria filosófica sobre a incomunicabilidade dos seres humanos. (...) Avançando nessa teoria, chegaríamos à conclusão de que tudo o que é coletivo resvala no pessoal (...)” Na frase “Avançando nessa teoria, chegaríamos à conclusão [...]”, tanto o verbo no gerúndio quanto o verbo no futuro do pretérito prestam-se à criação do sentido hipotético expresso pelo enunciado.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: o gerúndio “avançando” introduz uma condição hipotética, equivalente a “se avançássemos”, e o futuro do pretérito “chegaríamos” marca a consequência dessa hipótese. Ambos os recursos criam o sentido hipotético do enunciado.',
  },
  {
    id: 'lp-verbos-qlivro12-89',
    temaId: 'lp-verbos',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe - DPE-RS - Defensor Público — 2022) Fragmento de texto: “O consumismo é uma economia do logro, do excesso e do lixo, pois faz que o ser humano trabalhe duro para adquirir mais coisas, mas traz a sensação de insatisfação porque sempre há alguma coisa melhor, maior e mais rápida do que no presente. Ao mesmo tempo, as coisas que se possuem e se consomem enchem não apenas os armários, as garagens, as casas e as vidas, mas também as mentes das pessoas.” Sem prejuízo da correção gramatical e da coerência do texto, a oração “que se possuem e se consomem” poderia ser reescrita da seguinte maneira: que são possuídas e consumidas.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: “que se possuem e se consomem” são construções de voz passiva sintética, com o pronome “se” apassivador, e “que são possuídas e consumidas” é a passiva analítica equivalente. Como o sujeito “as coisas” é paciente nas duas formas, a troca preserva a correção e a coerência.',
  },
];
