import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 11 — Pronome), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C11: QuestaoTreino[] = [
  /* ---------- Exemplos com gabarito dentro da teoria ---------- */
  {
    id: 'lp-pronome-qlivro11-01',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf - SMF — Pref. RJ — Fiscal de Rendas - 2010) “Durante muito tempo, a tributação foi vista apenas como um instrumento de receita do Estado. Apesar desta missão ser, por si só, relevante, (...)” Preservam-se a coerência textual e a correção gramatical ao substituir:',
    alternativas: [
      'exerça (1.5) por exercesse',
      'desta (1.3) por de esta',
      'se pode (1.11) por pode-se',
      'ser ressaltado (1.14) por ser ressaltada',
      'em instrumento (1.15) por de instrumento',
    ],
    correta: 1,
    comentario:
      'Alternativa B correta: a banca entendeu que tanto a contração da preposição com o sujeito de infinitivo (“desta missão ser”) quanto a não contração (“de esta missão ser”) respeitam a norma, de modo que a troca preserva a correção e o sentido. As demais substituições alteram a correção gramatical ou a coerência do trecho.',
  },
  {
    id: 'lp-pronome-qlivro11-02',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — TJ/ES — Cargos de Nível Superior — 2011) No trecho “enquanto os protestos se espalhavam pelas ruas da capital egípcia”, a próclise do pronome “se” justifica-se pela natureza subordinada da oração, explicitada pela conjunção temporal “enquanto”.',
    gabaritoCE: true,
    comentario:
      'Certo. A conjunção “enquanto” é palavra atrativa e introduz oração subordinada adverbial temporal, o que exige a próclise do pronome “se” antes do verbo “espalhavam”. A justificativa apresentada no item está correta.',
  },
  {
    id: 'lp-pronome-qlivro11-03',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNDEP - MP/MG - Oficial - 2012) “Alega a vítima que Fulano de tal, o agressor, seu ex-amásio, a tem perseguido de forma constrangedora em via pública [...]” (linhas 16-17). O trecho sublinhado (“a tem perseguido”) pode ser corretamente substituído por:',
    alternativas: [
      'tem perseguido-a',
      'lhe tem perseguido',
      'tem perseguido ela',
      'tem-na perseguido',
    ],
    correta: 3,
    comentario:
      'Alternativa D correta: o “que” inicial atrai o pronome, e a intercalação “o agressor, seu ex-amásio” permite colocá-lo depois do verbo auxiliar, como em “tem-na perseguido”. A ênclise ao particípio (“perseguido-a”) não é admitida, “lhe” é forma de objeto indireto que não substitui um complemento direto, e “ela” é pronome tônico que não ocupa posição átona.',
  },
  {
    id: 'lp-pronome-qlivro11-04',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(AOCP - BRDE - Assistente Administrativo - 2012) Em “Ora, para mim isso configura um crime”, a expressão destacada funciona como',
    alternativas: [
      'introdutor de conformidade',
      'objeto indireto',
      'adjunto adnominal',
      'complemento nominal',
      'dativo de opinião',
    ],
    correta: 4,
    comentario:
      'Alternativa E correta: “para mim” é pronome oblíquo tônico preposicionado que expressa o ponto de vista de quem fala sobre o fato, o chamado dativo de opinião. Alguns gramáticos o tratam como objeto indireto por extensão, mas a classificação mais específica é a de dativo de opinião; as demais funções não se aplicam à expressão.',
  },
  {
    id: 'lp-pronome-qlivro11-05',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB - EAGS — Sargento da Aeronáutica — 2010) Com relação ao emprego correto dos pronomes em destaque, marque C para certo, E para errado e, em seguida, assinale a alternativa com a sequência correta. ( ) Meu pai trouxe chocolates para mim comer. ( ) A professora ficou aborrecida com nós todos. ( ) É melhor que não pairem dúvidas entre ti e ele. ( ) Esse dinheiro é para ti pagares tua faculdade.',
    alternativas: ['C-E-E-C', 'E-C-C-E', 'C-E-C-E', 'E-E-C-C'],
    correta: 1,
    comentario:
      'Alternativa B correta (sequência E-C-C-E). Nos itens 1 e 4, “mim” e “ti” exercem função de sujeito de verbo no infinitivo (“comer”, “pagares”), o que só admite pronome reto (eu, tu). Já “com nós todos” e “entre ti e ele” são aceitos: “nós” pode ser usado com a palavra “todos”, e “ti”, depois de preposição, é forma oblíqua tônica regular.',
  },
  {
    id: 'lp-pronome-qlivro11-06',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(EAGS — Sargento da Aeronáutica — 2011) Assinale a alternativa em que o valor característico do pronome indefinido destacado está incorreto.',
    alternativas: [
      'Algo de especial está para acontecer (ausência de pessoa)',
      'O garoto era todo gentilezas com a menina que lhe sorria (totalidade, intensidade)',
      'Estava madura. Apesar disso, havia ainda o seu jeito uma certa graça de quando moça (ausência de particularização)',
      'Andava a conversar aqui e acolá, buscando arranjar alguma coisa com que pagar o aluguel de seu quartinho (significação afirmativa, positiva)',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a incorreta, e por isso é o gabarito: em “uma certa graça”, o indefinido indica quantidade indeterminada, não ausência de particularização. As demais estão adequadas: “algo” refere-se a coisas e indica ausência de pessoa; “todo” expressa totalidade ou intensidade; e “alguma” anteposto ao substantivo tem valor positivo.',
  },
  {
    id: 'lp-pronome-qlivro11-07',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — IRBr — Diplomata — 2012) No período “Que Demócrito não risse, eu o provo”, o verbo provar complementa-se com uma estrutura em forma de objeto direto pleonástico, com uma oração servindo de referente para um pronome.',
    gabaritoCE: true,
    comentario:
      'Certo. A oração “Que Demócrito não risse” funciona como objeto direto do verbo “provar”, antecipado, e o pronome “o” (= isso) o repete pleonasticamente, como ensina Bechara. Por isso, a estrutura descrita no item corresponde ao fenômeno apresentado.',
  },
  {
    id: 'lp-pronome-qlivro11-08',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - Potigás — Contador Jr. — 2006) A diplomacia é exatamente isto: a arte de usar sinais e palavras para manifestar agrados e desagrados, defender interesses e estabelecer limites, construir respeito recíproco e negociar parcerias. (L.37-40) O pronome destacado (“isto”) no trecho acima exerce função:',
    alternativas: ['anafórica', 'dêitica', 'epanafórica', 'catafórica', 'díctica'],
    correta: 3,
    comentario:
      'Alternativa D correta: “isto” antecipa a ideia que vem logo depois (a arte de usar sinais e palavras...), o que caracteriza a função catafórica. A anafórica retoma algo já dito; a dêitica e a díctica se referem a elementos extratextuais, do espaço ou do tempo; e a epanafórica é figura de repetição, não função pronominal.',
  },
  /* ---------- Questões de Concursos (seção do capítulo) ---------- */
  {
    id: 'lp-pronome-qlivro11-09',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - CVM - Agente Executivo - 2010) Em relação aos elementos coesivos do texto, assinale a opção correta. “Hoje não há mais dúvida a respeito do aquecimento global e de outros problemas gerados pelo consumo de energia e pela industrialização. Não se pode deter o desenvolvimento e não se pode mantê-lo sem aumento do consumo global de energia. A principal fonte de energia hoje são os combustíveis fósseis e o maior vilão dessa história é a emissão de CO2 na atmosfera (embora não seja o único). Parece irreversível a tendência à sua redução pela adoção de novas e mais eficientes tecnologias e fontes de energia. Acabar drasticamente e de imediato com as emissões de CO2 e com a utilização de combustíveis fósseis não é possível. Por outro lado, adotar novas tecnologias que aumentem ou estimulem ainda mais o seu consumo, nem pensar. O século XX viu a consolidação da Era do Petróleo, motor do desenvolvimento mundial desde o final do século XIX até hoje, no começo do século XXI. Esse ciclo de predominância do petróleo deve ser aos poucos substituído por um predomínio do gás natural (...)”',
    alternativas: [
      'Em “mantê-lo”, o pronome “-lo” retoma o antecedente “consumo”.',
      'A expressão “dessa história” retoma o antecedente “consumo global de energia”.',
      'Em “seu consumo”, “seu” refere-se a “combustíveis fósseis”.',
      'Em “sua redução”, “sua” refere-se a “industrialização”.',
      'A expressão “Esse ciclo” retoma o antecedente “começo do século XXI”.',
    ],
    correta: 2,
    comentario:
      'Alternativa C correta: o possessivo “seu” em “o seu consumo” retoma “combustíveis fósseis”, cujo uso as novas tecnologias poderiam estimular. A alternativa A erra porque “-lo” retoma “desenvolvimento”, e não “consumo”; a D erra porque “sua redução” se refere às emissões de CO2, e não à industrialização.',
  },
  {
    id: 'lp-pronome-qlivro11-10',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - EBC — Gestor de Atividade Jornalística — 2011) Texto 1 — São Paulo, 18 novembro 1925. Carlos, Dá-se isto: ontem me apareceu um dos redatores da Noite do Rio aqui em casa e, além de me pedir uma entrevista pra tal, propôs o seguinte: a Noite organiza um Mês Modernista. Durante um mês todos os dias o jornal publicará um artiguete de meia coluna assinado por um modernista qualquer. O artiguete poderá ser crítica, fantasia, versos, o que a gente quiser. Pagam 50$ por artigo. Os escolhidos são: Manuel Bandeira e Prudente de Morais no Rio, eu e Sérgio Milliet em São Paulo, você e o Martins de Almeida em Minas. Me mande com absoluta urgência uma linha sobre isto falando que aceitam, pra eu dispor as coisas logo. Estou esperando. Ciao. Mário. Texto 2 — Belo Horizonte, 20 novembro 1925. Mário, Salve. Recebi hoje tua expressa fazendo o amável — e gostoso — convite para escrever umas besteiras na Noite. Aceito. O Martins de Almeida, avisado, também aceitou. Diga para quando é a joça, que estamos prontos. E desde já te agradeço o reclame e os cobres, pois estou certo que foi você que se lembrou do meu nome. Depois escreverei mais longamente. Um abraço forte do Carlos. Os dois textos diferem quanto à colocação dos pronomes átonos: no texto 1, a colocação é livre, alternando-se usos prescritos e não prescritos pela norma culta; no texto 2, a posição dos pronomes átonos está de acordo com a norma culta.',
    gabaritoCE: true,
    comentario:
      'Certo. No texto 1, a colocação dos pronomes alterna usos prescritos e não prescritos, como em “Me mande”, que inicia período sem palavra atrativa anterior e, por isso, pede a ênclise. Já o texto 2 segue a norma, como em “desde já te agradeço”, em que o advérbio “já” atrai o pronome para antes do verbo.',
  },
  {
    id: 'lp-pronome-qlivro11-11',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — Correios — Analista de Correios (Letras) — 2011) A colocação pronominal em “caracteriza-se” (“Essa revolução caracteriza-se simultaneamente por uma série...”) indica a escolha dos autores por um registro mais formal de linguagem; o emprego desse pronome antes da forma verbal, além de caracterizar desrespeito às regras gramaticais do registro padrão da linguagem, representaria, no contexto, uso inadequado da linguagem, dado o caráter institucional do texto.',
    gabaritoCE: false,
    comentario:
      'Errado. Com sujeito explícito de núcleo substantivo (“essa revolução”) e sem palavra atrativa, a próclise e a ênclise são facultativas na norma culta, de modo que o pronome antes do verbo não desrespeita o registro padrão. Por isso, a afirmação de que o uso seria inadequado está incorreta.',
  },
  {
    id: 'lp-pronome-qlivro11-12',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - CNPQ - Analista Ciência Tecnologia Jr. - 2011) “(...) A ciência moderna ensinou-nos a rejeitar o senso comum conservador, o que em si é positivo, mas insuficiente. (...) O conhecimento-emancipação só se constitui como tal na medida em que se converte em senso comum. (...) O conhecimento-emancipação, ao tornar-se senso comum, não despreza o conhecimento que produz tecnologia, (...)”. Devido à estrutura sintática em que ocorrem, o emprego dos pronomes após o verbo em “ensinou-nos” e em “tornar-se” é obrigatório; por isso, a correção gramatical do texto seria prejudicada se esses pronomes fossem utilizados como em “se constitui”.',
    gabaritoCE: false,
    comentario:
      'Errado. Em “ensinou-nos” e “ao tornar-se”, a ênclise é a colocação prescrita, pois não há palavra atrativa e o infinitivo vem após preposição. Já em “só se constitui”, o advérbio “só” é palavra atrativa e exige a próclise, de modo que essa construção não prejudica a correção do texto.',
  },
  {
    id: 'lp-pronome-qlivro11-13',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - Instituto Rio Branco - Diplomata - 2011) “(...) Oscar não acredita em Papai do Céu, nem que estará um dia construindo brasílias angélicas nas verdes pastagens do Paraíso. Põe ele, como um verdadeiro homem, a felicidade do seu semelhante no aproveitamento das pastagens verdes da Terra; no exemplo do trabalho para o bem comum e na criação de condições urbanas e rurais, em estreita intercorrência, que estimulem e desenvolvam este nobre fim: fazer o homem feliz dentro do curto prazo que lhe foi dado para viver. (...)”. A elipse em “nem que estará” e o emprego do pronome anafórico “ele” são mecanismos de coesão utilizados para referenciar o substantivo “Oscar”.',
    gabaritoCE: true,
    comentario:
      'Certo. Na oração “nem que estará”, o sujeito está elíptico e recuperável por “Oscar”, e o pronome “ele” de “Põe ele” retoma o mesmo referente, de modo que ambos funcionam como recursos de coesão referencial. O item está correto.',
  },
  {
    id: 'lp-pronome-qlivro11-14',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - Instituto Rio Branco - Diplomata - 2011) Dada a propriedade que assume o pronome “este” nos mecanismos coesivos empregados no trecho “que estimulem e desenvolvam este nobre fim”, não é facultada a seguinte reescrita: que estimulem este nobre fim e o desenvolvam.',
    gabaritoCE: true,
    comentario:
      'Certo. A reescrita proposta repete o pronome “o” após o segundo verbo, quando no original um único complemento, “este nobre fim”, serve aos dois verbos por elipse coesiva; por isso a substituição não é facultada, como afirma o item.',
  },
  {
    id: 'lp-pronome-qlivro11-15',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - TJ/ES - Analista Judiciário (Letras) - 2011) “O fato de que o homem vê o mundo por meio de sua cultura tem como consequência a propensão do homem a considerar o seu modo de vida como o mais correto e o mais natural. Tal tendência, denominada etnocentrismo, é responsável, em seus casos extremos, pela ocorrência de numerosos conflitos sociais. O etnocentrismo, de fato, é um fenômeno universal. É comum a crença de que sua própria sociedade é o centro da humanidade, ou mesmo a sua única expressão. (...) Comportamentos etnocêntricos resultam também em apreciações negativas dos padrões culturais de povos diferentes. Práticas de outros sistemas culturais são catalogadas como absurdas, deprimentes e imorais”. Na organização textual, o pronome “sua” em ambas as ocorrências retoma “etnocentrismo”.',
    gabaritoCE: false,
    comentario:
      'Errado. Nas duas ocorrências, “sua” refere-se ao homem, que vê o mundo pela própria cultura e acredita na centralidade da própria sociedade, e não ao substantivo “etnocentrismo”. O possessivo retoma o agente humano de cada referência, e não o nome abstrato citado antes.',
  },
  {
    id: 'lp-pronome-qlivro11-16',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TJ/ES — Analista Judiciário (Letras) — 2011) Fragmento de texto: “Cultura de paz, para mim, não é um objeto profissional, é um meio de vida. Aprendi muito cedo em casa, com a família, que a paz é a coisa mais importante do mundo. Sua cultura tem base em tolerância e solidariedade. Ela respeita os direitos individuais, assegura e sustenta a liberdade de opinião e se empenha em prevenir conflitos...”. No desenvolvimento do texto, o pronome “Ela” remete a “Sua cultura”, que, por sua vez, refere-se à cultura de paz.',
    gabaritoCE: true,
    comentario:
      'Certo. O pronome “Ela” retoma “Sua cultura”, que, por sua vez, remete à cultura de paz citada no início do fragmento, formando uma cadeia de referências anafóricas. O item descreve corretamente essa cadeia.',
  },
  {
    id: 'lp-pronome-qlivro11-17',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT/MS (24ª R) - Técnico Judiciário - 2011) O emprego dos pronomes de tratamento está inteiramente correto na frase:',
    alternativas: [
      'A Vossa Excelência, como Membro deste Tribunal, será encaminhado o processo em que devereis anexar vosso Parecer.',
      'Esperamos que V. Sa, aceiteis o convite que ora lhe fazemos, e que nos honrará com vossa presença nesse evento.',
      'V. Excia., Senhor Conselheiro deste Tribunal, deverá emitir a orientação a ser seguida por sua equipe de auxiliares.',
      'Solicitamos a vós todos, nobres senhores Deputados, que vos unis a nós em defesa dos direitos estabelecidos pela Constituição.',
      'É para vós, Vossa Senhoria, que dirigimos nossa solicitação, no sentido de nossa equipe ser recebida em vosso escritório.',
    ],
    correta: 2,
    comentario:
      'Alternativa C correta: “V. Excia.” pede verbo e possessivo de terceira pessoa (“deverá”, “sua equipe”), e a frase mantém essa uniformidade. As demais misturam o tratamento cerimonioso com formas de segunda pessoa (“devereis”, “vosso”, “aceiteis”, “vos unis”) ou combinam tratamentos incompatíveis entre si, como “vós” e “Vossa Senhoria” no mesmo período.',
  },
  {
    id: 'lp-pronome-qlivro11-18',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(FCC - Infraero - Administrador - 2011) Está correto o emprego do elemento sublinhado em:',
    alternativas: [
      'O Príncipe é um símbolo reincidente, a cujo nome pessoal talvez nem mesmo a Branca de Neve tenha conhecimento.',
      'A necessidade de bajular o poder é um vício de que muita gente da imprensa não consegue se esquivar.',
      'A trama com a qual o personagem anônimo participa jamais seria a mesma sem o seu concurso.',
      'Em dois segundos o lenhador tomou uma decisão na qual decorreria toda a trama já conhecida de Branca de Neve.',
      'Os figurantes anônimos muitas vezes são responsáveis por uma ação em que irão depender todas as demais.',
    ],
    correta: 1,
    comentario:
      'Alternativa B correta: “esquivar-se de” exige a preposição “de”, que aparece antes do relativo em “vício de que”. As demais trocam ou omitem a preposição exigida pelo verbo ou pelo nome: “ter conhecimento de”, “participar de”, “decorrer de” e “depender de” pedem “de” ou “de que”, e não as formas empregadas nas alternativas.',
  },
  {
    id: 'lp-pronome-qlivro11-19',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/PE - Técnico Judiciário — 2011) “... nem por isso deixa de cultuar Delacroix ...”; “Cézanne admira a maestria plástica de Rubens ...”; “... já encontramos a chave do enigma cézanneano.” A substituição dos elementos grifados nas frases acima pelos pronomes correspondentes, com os necessários ajustes, terá como resultado, respectivamente:',
    alternativas: [
      'nem por isso deixa de cultuar-lhe / Cézanne a admira / já a encontramos',
      'nem por isso deixa de cultuá-lo / Cézanne lhe admira / já lhe encontramos',
      'nem por isso deixa de lhe cultuar / Cézanne a admira / já encontramos-na',
      'nem por isso deixa de a cultuar / Cézanne lhe admira / já lhe encontramos',
      'nem por isso deixa de cultuá-lo / Cézanne a admira / já a encontramos',
    ],
    correta: 4,
    comentario:
      'Alternativa E correta: “Delacroix” é masculino e, após verbo terminado em -r, passa a “-lo” (cultuá-lo); “a maestria” e “a chave” são femininos e viram “a”, com a próclise pela palavra atrativa “já” na última oração. As demais erram o gênero do pronome ou a colocação, como o uso de “lhe” para complemento direto.',
  },
  {
    id: 'lp-pronome-qlivro11-20',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(FCC - TRT/SE (20ª R) - Analista Judiciário - 2011) Está correto o emprego do elemento sublinhado na frase:',
    alternativas: [
      'Não deu certo o tal do método prático em cuja eficiência Paulo Honório chegou a acreditar.',
      'Para o jornalista, a criação da língua literária requer uma técnica sofisticada em que nenhum escritor pode abdicar.',
      'Quando Paulo Honório leu os dois capítulos datilografados, sentiu neles um artificialismo verbal de que jamais toleraria.',
      'Se literatura fosse um arranjo de palavras difíceis, os dicionaristas fariam poemas de cujo brilho ninguém superaria.',
      'A linguagem com que Paulo Honório de fato aspirava era simples, direta, e não uma coleção de figuras retóricas.',
    ],
    correta: 0,
    comentario:
      'Alternativa A correta: “acreditar em” exige a preposição “em”, e o relativo “cuja”, que concorda com “eficiência” e não admite artigo, traz essa preposição antes de si. As demais erram a regência: “abdicar de” pede “de que” (b), “tolerar” e “superar” são transitivos diretos e não admitem preposição (c e d), e “aspirar a” pede “a que” (e).',
  },
  {
    id: 'lp-pronome-qlivro11-21',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT/SE (20ª R) - Técnico Judiciário — 2011) “o cérebro é uma orquestra sinfônica em que os instrumentos vão se modificando à medida que são tocados”. A expressão pronominal em que, grifada acima, preenche corretamente a lacuna da frase:',
    alternativas: [
      'As questões...... se preocupam os cientistas dizem respeito às alterações cerebrais devidas ao uso indiscriminado da internet.',
      'É incalculável o número de informações, sobre os mais diversos temas,...... o cérebro humano é capaz de processar.',
      'As hipóteses aventadas........ se baseiam os especialistas, devem ainda ser comprovadas por exames acurados.',
      'As implicações causadas pela onipresença da internet,...... está sujeito o cérebro humano, são objeto de preocupação de cientistas.',
      'As informações...... dispõem os usuários da comunicação eletrônica são múltiplas, embora sejam superficiais.',
    ],
    correta: 2,
    comentario:
      'Alternativa C correta: “basear-se em” pede a preposição “em”, e o relativo “em que” a retoma (“as hipóteses em que se baseiam”). As demais exigem outras preposições ou regências: “preocupar-se com” (a), “processar” sem preposição (b), “sujeito a” (d) e “dispor de” (e).',
  },
  {
    id: 'lp-pronome-qlivro11-22',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - Infraero - Auditor - 2011) A substituição do elemento grifado pelo pronome correspondente, com os necessários ajustes, foi realizada de modo INCORRETO em:',
    alternativas: [
      'O tratamento que é dado aos temas = O tratamento que lhes é dado',
      'que circunscreve seus míticos personagens = que os circunscreve',
      'para começar a entender Guimarães Rosa = para começar a entendê-lo',
      'sua obra criou um âmbito próprio = sua obra criou-o',
      'Guimarães Rosa mantém seu estilo próprio = Guimarães Rosa lhe mantém',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a incorreta, e por isso é o gabarito: sem palavra atrativa antes do verbo, a ênclise é a colocação prescrita, e a forma correta seria “mantém-lhe”. As demais substituições estão adequadas: “lhes” para “aos temas”, “os” para “personagens”, “-lo” para “Guimarães Rosa” e “-o” para “âmbito”.',
  },
  {
    id: 'lp-pronome-qlivro11-23',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/AP - Analista Judiciário - 2011) Considere as afirmações que seguem. I. A sequência na política, na religião, na ciência, na arte, na imprensa, na literatura, na filosofia, até na cozinha constitui elenco de profissões que tiveram de se associar ao domínio da cultura para atingir a economia do estrelato. II. Em “A própria literatura consagra escritores no mercado internacional, os quais negociam seus direitos por intermédio de agentes, segundo o sistema que prevalece nas indústrias do espetáculo”, a expressão em destaque foi obrigatoriamente empregada para evitar a ambiguidade que ocorreria se, em seu lugar, fosse usado o pronome “que”. III. Em “A própria literatura consagra escritores no mercado internacional, os quais negociam seus direitos por intermédio de agentes, segundo o sistema que prevalece nas indústrias do espetáculo”, o segmento destacado poderia ser substituído por “prevalecente”, sem prejuízo do sentido e da correção originais. O texto legitima:',
    alternativas: [
      'I, somente;',
      'II, somente;',
      'III, somente;',
      'I e III, somente;',
      'I, II e III.',
    ],
    correta: 2,
    comentario:
      'Alternativa C correta: apenas a afirmação III se sustenta, pois “prevalecente” pode substituir “que prevalece” sem prejuízo do sentido ou da correção. A afirmação II exagera ao tratar o uso de “os quais” como obrigatório, já que o relativo “que” poderia ser trocado sem erro gramatical.',
  },
  {
    id: 'lp-pronome-qlivro11-24',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/RN - Técnico Judiciário - 2011) A reconstrução de um segmento do texto, com um diferente emprego pronominal, que mantém a correção e o sentido originais é:',
    alternativas: [
      'o corvo, então, tentou virá-lo = O corvo, então, lhe tentou virar',
      'pegando-as uma a uma = pegando-lhes uma a uma',
      'não havia meio de alcançá-la = não havia como alcançar-lhe',
      'o jarro era pesado demais para ele = o jarro lhe era por demais pesado',
      'atirando-as dentro do jarro = atirando-lhes para dentro do jarro',
    ],
    correta: 3,
    comentario:
      'Alternativa D correta: “lhe” equivale a “para ele” e substitui o termo preposicionado sem alterar o sentido. As demais erram o caso ou a regência: em C, “alcançar” é transitivo direto e pede “-la”, não “lhe”; nas demais, o pronome dativo é usado no lugar de objeto direto ou de termo que não admite essa substituição.',
  },
  {
    id: 'lp-pronome-qlivro11-25',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - Nossa Caixa Desenvolvimento — Contador — 2011) Está adequado o emprego de ambos os elementos sublinhados na frase:',
    alternativas: [
      'A obsolescência e o anacronismo, atributos nos quais os americanos manifestam todo seu desprezo, passaram a se enfeixar com a expressão dez de setembro.',
      'O estado de psicose, ao qual imergiram tantos americanos, levou à adoção de medidas de segurança em cuja radicalidade muitos recriminam.',
      'A sensação de que o 11/9 foi um prólogo de algo ao qual ninguém se arrisca a pronunciar é um indício do pasmo no qual foram tomados tantos americanos.',
      'Não é à descrença, sentimento com que nos sentimos invadidos depois de uma tragédia, é na esperança que queremos nos apegar.',
      'Fatos como os de 11/9, com que ninguém espera se deparar, são também lições terríveis, de cujo significado não se deve esquecer.',
    ],
    correta: 4,
    comentario:
      'Alternativa E correta: “deparar-se com” exige “com que”, e “esquecer de” pede a preposição “de”, reunida ao possessivo relativo em “de cujo significado”. As demais alternativas trazem preposições que não correspondem à regência dos verbos ou dos nomes a que se ligam.',
  },
  {
    id: 'lp-pronome-qlivro11-26',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — Petrobras — Administrador Júnior — 2011) A colocação do pronome átono destacado está INCORRETA em:',
    alternativas: [
      'Quando se tem dúvida, é necessário refletir mais a respeito.',
      'Tudo se disse e nada ficou acordado.',
      'Disse que, por vezes, temos equivocado-nos nesse assunto.',
      'Alguém nos informará o valor do prêmio.',
      'Não devemos preocupar-nos tanto com ela.',
    ],
    correta: 2,
    comentario:
      'Alternativa C incorreta, por isso é o gabarito: em locução formada por “ter” e particípio não se usa ênclise ao particípio, e a forma correta seria “nos temos equivocado” ou “temos-nos equivocado”. As demais estão corretas: “tudo” e “alguém” atraem o pronome para antes do verbo, e em “não devemos preocupar-nos” a colocação posposta ao verbo principal é admitida com a palavra atrativa.',
  },
  {
    id: 'lp-pronome-qlivro11-27',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FDC - CREMERJ — Administrador — 2011) “As drogas medicinais ou ‘drogas da virtude’, prescritas pelos físicos, odontólogos e médicos homeopatas ou alopatas eram manipuladas por boticários, que importavam remédios europeus e usavam produtos nativos em sua formulação.” No texto há um conjunto de elementos que se prendem a termos anteriores a fim de produzir coesão (ligações formais e semânticas) entre esses elementos. A indicação INCORRETA de um desses termos é:',
    alternativas: [
      'o pronome possessivo sua tem como referente “remédios europeus”;',
      'o particípio prescritas refere-se às duas espécies de drogas mencionadas antes;',
      'o conectivo por une a forma verbal eram manipuladas a seu agente;',
      'a forma verbal usavam repete o mesmo sujeito de importavam;',
      'o pronome relativo que refere-se a boticários.',
    ],
    correta: 1,
    comentario:
      'Alternativa B incorreta, por isso é o gabarito: “drogas medicinais” e “drogas da virtude” são duas denominações de um mesmo grupo, e não duas espécies, de modo que “prescritas” retoma esse conjunto único. As demais indicações de referência estão corretas, inclusive a do relativo “que” a “boticários”.',
  },
  {
    id: 'lp-pronome-qlivro11-28',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funiversa - SES/DF - Enfermeiro - 2011) Assinale a alternativa que apresenta reescrita correta de passagem do texto.',
    alternativas: [
      '“Trata-se do único relato dessa natureza em toda biologia.” (Trata-se do único relato dessa natureza em toda a biologia)',
      '“na sua cadeia genética” (em sua cadeia genética)',
      '“por que ele iria suportar” (como ele iria suportar)',
      '“mais população é resultado de mais consumo, o que significa mais devastação e mais lixo” (mais população, mais consumo, ou seja, mais devastação, mais lixo)',
      '“suportar a dor das perdas prematuras a qual” (suportar a dor das perdas prematuras que)',
    ],
    correta: 1,
    comentario:
      'Alternativa B correta: “na” é a contração de “em + a”, e a reescrita “em sua cadeia” mantém a preposição e o sentido do original. A alternativa A altera o sentido ao acrescentar artigo a “toda”, que sem artigo significa “qualquer”; as demais trocam conectivos ou relativos sem manter o sentido, como “por que” por “como”.',
  },
  {
    id: 'lp-pronome-qlivro11-29',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — Petrobras — Analista de Sistemas Júnior — 2012) Aos trechos abaixo, retirados do texto, foram propostas alterações na colocação do pronome. Tal alteração está de acordo com a norma-padrão em:',
    alternativas: [
      '“foram se fechando” — foram fechando-se',
      '“Pensa-se logo num palhaço” — Se pensa logo num palhaço',
      '“ninguém lhe esquece a tristeza” — ninguém esquece-lhe a tristeza',
      '“Trata-se na verdade” — Se trata na verdade',
      '“que quase se limita a olhar” — que quase limita-se a olhar',
    ],
    correta: 0,
    comentario:
      'Alternativa A correta: na locução “foram fechando”, sem palavra atrativa, o pronome pode ficar depois do verbo principal, como em “foram fechando-se”. As demais erram: em B e D, “logo” e “na verdade” não são atrativas, e o pronome deve ficar após o verbo; em C e E, há palavras atrativas (“ninguém”, “que”) que exigem a próclise.',
  },
  {
    id: 'lp-pronome-qlivro11-30',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/SP - Analista Judiciário - 2012) Está correto o emprego de ambos os elementos sublinhados na frase:',
    alternativas: [
      'A argumentação na qual se valeu o ministro baseava-se numa analogia em cuja pretendia confundir função técnica com função política.',
      'As funções para cujo desempenho exige-se alta habilitação jamais caberão a quem se promova apenas pela aclamação do voto.',
      'Para muitos, seria preferível uma escolha baseada no consenso do voto do que a promoção pelo mérito onde nem todos confiam.',
      'A má reputação de que se imputa ao “assembleísmo” é análoga àquela em que se reveste a “meritocracia”.',
      'A convicção de cuja não se afasta o autor do texto é a de que a adoção de um ou outro critério se faça segundo à natureza do caso.',
    ],
    correta: 1,
    comentario:
      'Alternativa B correta: a expressão “para cujo desempenho” une a preposição “para”, exigida pela construção, ao possessivo “cujo”, que concorda com “desempenho” e indica a posse das funções. As demais trocam a preposição exigida pelo verbo ou pelo nome, ou usam “onde” e “de cuja” em lugar do relativo adequado.',
  },
  {
    id: 'lp-pronome-qlivro11-31',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TCE/SP - Agente de Fiscalização Financeira - 2012) “Isso talvez nos explique por que os gregos, estes que teriam inventado a democracia ocidental com seus valores, na verdade, legaram-nos apenas um valor fundamental: a suspeita de si”. Considerada a frase anterior, em seu contexto, o ÚNICO comentário que o texto NÃO legitima é o seguinte:',
    alternativas: [
      'Isso remete ao que se expõe anteriormente na frase iniciada por isso.',
      'A forma verbal explique é exigida por estar presente no enunciado uma ideia de possibilidade, não de certeza.',
      'Na construção adotada no enunciado, o emprego da próclise pronominal — “nos legaram” — é legítimo.',
      'A forma verbal teriam inventado exprime um fato suposto.',
      'Está em conformidade com o padrão culto escrito esta redação alternativa à do segmento destacado: “o motivo dos gregos legarem-nos apenas um valor fundamental”.',
    ],
    correta: 4,
    comentario:
      'Alternativa E é a afirmação que o texto não legitima, e por isso é o gabarito: a redação proposta, com o pronome posposto a infinitivo flexionado precedido de preposição, não se mostra em conformidade com o padrão culto indicado pelo enunciado. As demais afirmações são legítimas: “isso” retoma a ideia anterior, “explique” expressa possibilidade, “teriam inventado” exprime fato suposto e a próclise em “nos legaram” é admitida pela palavra atrativa “que”.',
  },
  {
    id: 'lp-pronome-qlivro11-32',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — Instituto Rio Branco — Diplomata — 2012) A inadequação no emprego do pronome de tratamento em “Morro de medo de comparecer diante de um Juiz. Meritíssimo, dá licença de eu fumar?” é sanada pela escritora no período “Obrigada, Vossa Eminência”, o que evidencia o deliberado desrespeito a padrões normativos da língua portuguesa.',
    gabaritoCE: false,
    comentario:
      'Errado. “Vossa Eminência” é tratamento reservado a cardeais e não se aplica a juízes; a troca, portanto, não sana a inadequação, e a afirmação sobre desrespeito deliberado não se sustenta.',
  },
  {
    id: 'lp-pronome-qlivro11-33',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TC/DF - Auditor de Controle Externo - 2012) O pronome “o” (“... o poder do rei passou a ser um tanto limitado pelos nobres, que o obrigaram a...”) retoma, por coesão, a expressão “o poder do rei”.',
    gabaritoCE: false,
    comentario:
      'Errado. O pronome “o” em “que o obrigaram” retoma “rei”, que é o complemento de sentido da ação de obrigar, e não “o poder do rei”, que não exerce essa função no período.',
  },
  {
    id: 'lp-pronome-qlivro11-34',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - Pref. São José dos Campos/SP - Analista em Gestão Municipal — 2012) Na frase “Os suspeitos são os de sempre...”, a palavra em destaque tem o mesmo emprego que se verifica na palavra destacada em:',
    alternativas: [
      'Os carros estavam em alta velocidade, quando policiais os interceptaram.',
      'Quem poderia fazer o favor de me encomendar o novo dicionário?',
      'Alguns funcionários perguntaram se os salários atrasariam naquele mês.',
      'Todos os alunos fizeram a prova, mas só alguns assinaram a presença.',
      'Aqueles que precisavam de mais informações foram auxiliados.',
    ],
    correta: 4,
    comentario:
      'Alternativa E correta: em “Os suspeitos são os de sempre”, o “os” equivale a “aqueles” e tem valor de pronome demonstrativo, o mesmo de “Aqueles” em “Aqueles que precisavam...”. As demais palavras destacadas são pronome oblíquo átono (A), pronome relativo (B), conjunção (C) e pronome indefinido (D).',
  },
  {
    id: 'lp-pronome-qlivro11-35',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf — MDIC — Analista de Comércio Exterior — 2012) Para preservar a coerência e a correção gramatical do texto, assinale a opção que corresponde ao termo a que se refere o elemento coesivo constituído pelo pronome “-la”. “A reciprocidade de tratamento é tradicional princípio da liturgia diplomática. Esse pressuposto consagrado na relação entre as nações — econômicas e migratórias, entre outras — é determinante para estimular o equilíbrio e afastar a tensão na convivência entre os países, colaborando para mantê-la em desejável harmonia. É hipocrisia, por exemplo, cobrar de uma parceria obediência a normas de bom trato (ou de acolhimento) se o outro lado da fronteira não é contemplado com o respeito ao protocolo da civilidade.”',
    alternativas: ['convivência', 'liturgia', 'reciprocidade', 'tensão', 'hipocrisia'],
    correta: 0,
    comentario:
      'Alternativa A correta: o pronome “-la” de “mantê-la” retoma “convivência”, o termo que se mantém em harmonia entre os países. As demais são termos do texto, mas não são o antecedente do pronome: “reciprocidade” e “liturgia” aparecem em outro contexto, “tensão” é o que se afasta e “hipocrisia” nomeia a atitude de cobrar sem reciprocidade.',
  },
  {
    id: 'lp-pronome-qlivro11-36',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf — MI-CENAD — Engenheiro de Telecomunicações — 2012) Fragmento de texto: “(...) A igualdade e a dignidade humana que uma sociedade pode produzir referem-se à possibilidade de o cidadão ter condições materiais e subjetivas à sua disposição, para que, atendidas suas necessidades básicas e diárias de bem-estar, ele se ocupe com questões outras que a sobrevivência. (...) No entanto, a Finlândia tornou-se uma sociedade tão igualitária quanto apática. Pouco criativa, reproduz o mundo com extrema facilidade, mas tem limitada capacidade transformadora. A maioria de seus educados cidadãos são seres pouquíssimo críticas: questionam pouco a vida que levam e são fisicamente contidos. E isso não parece ter forte relação com o frio. É um acomodamento social, um respeito quase inexorável pelas regras. Esse resultado não foi causado, é evidente, pelo formato social igualitário. Em outros termos, não foi a igualdade que deixou o país apático. Ademais, sociedades desiguais podem ser tão ou mais acríticas e reprodutoras. O ponto que nos intriga é que a igualdade, o respeito e a dignidade dados a todos não levaram à autonomia, ao pensamento criativo e crítico, e a processos transformadores.” Na organização das relações de coesão e coerência do texto,',
    alternativas: [
      'O pronome “todos” retoma e sintetiza os termos da enumeração “a igualdade, o respeito e a dignidade”.',
      'a expressão “tem limitada capacidade transformadora” retoma, com outras palavras, a ideia de “reproduz o mundo com extrema facilidade”.',
      'o substantivo “seres” e o pronome “que” retomam a expressão “seus educados cidadãos”.',
      'a expressão “Esse resultado” retoma a ideia de “sociedade tão igualitária”, já sintetizada em “isso”.',
      'os pronomes “sua”, “suas”, “ele” e “se” referem-se a “o cidadão”.',
    ],
    correta: 4,
    comentario:
      'Alternativa E correta: “sua”, “suas”, “ele” e “se” retomam “o cidadão”, sujeito das condições materiais e das necessidades descritas no primeiro período. As demais atribuem a retomada a referentes que não correspondem ao texto, como a enumeração inteira ou a expressão “seus educados cidadãos”.',
  },
  {
    id: 'lp-pronome-qlivro11-37',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Ceperj - Iterj/RJ — Analista de Gestão Organizacional — 2012) “Antes de analisarmos as disposições da legislação brasileira sobre esse assunto, impõe-se, inicialmente, uma breve análise das diferentes questões sociopolíticas relativas à legalização do solo.” No fragmento acima reproduzido, o emprego da 1ª pessoa do plural tem o papel de:',
    alternativas: [
      'designar um sujeito coletivo que se responsabiliza pelo que foi dito.',
      'incluir enunciador e leitor, para aproximá-los.',
      'evitar a 1ª pessoa do singular como estratégia de polidez.',
      'marcar um sujeito institucional, representado pela universidade.',
      'indicar um enunciador coletivo, mas difuso e amplificado.',
    ],
    correta: 2,
    comentario:
      'Alternativa C correta: a forma “analisarmos”, na primeira pessoa do plural, substitui a primeira do singular e cria um tom de polidez e modéstia, como no plural de modéstia. As demais descrevem usos que não se aplicam ao fragmento, que não inclui o leitor nem uma instituição representada.',
  },
  {
    id: 'lp-pronome-qlivro11-38',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/PR — Técnico Judiciário — 2012) “Um conjunto recente de pesquisas na área da neurociência sugere uma reflexão acerca dos efeitos devastadores do computador sobre a tradição da escrita em papel. Por meio da observação do cérebro de crianças e adultos, verificou-se de forma bastante clara que a escrita de próprio punho provoca, na região dedicada ao processamento das informações armazenadas na memória, uma atividade significativamente mais intensa do que a da digitação, o que tem conexão direta com a elaboração e a expressão de ideias. (...)”. No trecho “o que tem conexão direta com a elaboração e a expressão de ideias”, o pronome grifado substitui, especificamente:',
    alternativas: [
      'um conjunto recente de pesquisas na área da neurociência;',
      'uma reflexão acerca dos efeitos devastadores do computador;',
      'a tradição da escrita em papel;',
      'a observação do cérebro de crianças e adultos;',
      'a escrita de próprio punho provoca (...) uma atividade significativamente mais intensa do que a da digitação.',
    ],
    correta: 4,
    comentario:
      'Alternativa E correta: o “que” é relativo e retoma a oração inteira “a escrita de próprio punho provoca ... uma atividade ... mais intensa”, pois é essa atividade que tem conexão com a elaboração das ideias. As demais são antecedentes distantes ou de outra oração, que não correspondem ao sentido do trecho.',
  },
  {
    id: 'lp-pronome-qlivro11-39',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(AOCP - BRDE - Analista de Sistemas - 2012) Nos fragmentos abaixo, extraídos do texto, a colocação pronominal foi alterada. Assinale a única alternativa correta.',
    alternativas: [
      'Ou que voltaram-se todos para o passado...',
      'Maior do que esperaria-se...',
      'Tradição é o que cultua-se por todos os lados...',
      'E seguiu-se a manifestações antiformalistas...',
      'Não trata-se de um tradicionalismo conservador...',
    ],
    correta: 3,
    comentario:
      'Alternativa D correta: a conjunção coordenativa “e” não é palavra atrativa, de modo que a ênclise “seguiu-se” é aceita, e a próclise também seria facultativa. Nas demais, há palavra atrativa (“que”, “do que”, “o que”, “não”) que exige a próclise, e a ênclise está errada.',
  },
  {
    id: 'lp-pronome-qlivro11-40',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fumarc - TJ/MG — Oficial Judiciário — 2012) Assinale a CORRETA correspondência entre o termo em negrito e o substantivo a que ele se refere:',
    alternativas: [
      '“(...) tamanhos avanços tecnológicos provocam o distanciamento dos jovens em vez de aproximá-los...” § 6 (jovens).',
      '“nos colégios e clubes, mesmo após meses de convívio, eles têm dificuldade de se aproximar dos colegas”. § 6 (pais).',
      '“(...) são incapazes de descobrir a viagem mágica no mergulho da boa leitura...” § 7 (colegas).',
      '“Aí, certamente, haverá prazer de ler Machado de Assis, Ignácio de Loyola Brandão, Marina Colasanti, Adélia Prado, Nélida Pinon e muitos outros”. § 9 (contos).',
    ],
    correta: 0,
    comentario:
      'Alternativa A correta: o pronome “-los” retoma “jovens”, objeto de “aproximar” no sentido indicado pelo trecho, pois os jovens são os que se distanciam. As demais associam pronomes e referentes que não correspondem ao contexto citado em cada alternativa.',
  },
  {
    id: 'lp-pronome-qlivro11-41',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fumarc - TJ/MG - Técnico Judiciário - 2012) O elemento de ligação MAIS adequado para reunir, na mesma sequência, os pensamentos, é: I. O nome da cidade é Nadópolis. II. A população da cidade a respeita muito.',
    alternativas: ['onde', 'que', 'cuja', 'quanto'],
    correta: 2,
    comentario:
      'Alternativa C correta: “cuja” é o relativo possessivo que liga as duas ideias, pois “a cidade” é o possuidor de “nome” e de “população”, produzindo “a cidade cujo nome é Nadópolis é muito respeitada pela sua população”. As demais não estabelecem a relação de posse exigida pelo período.',
  },
  {
    id: 'lp-pronome-qlivro11-42',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(PaqTcPB — UEPB — Técnico em Informática — 2012) “(...) Só duas loiras, parecidas entre si, estão por lá. São grandes as chances de o rapaz se interessar por uma das loiras, porque é mais fácil para o cérebro compará-las do que comparar dezenas de morenas (...)”. Em “porque é mais fácil para o cérebro compará-las”, o termo “-las” refere-se a:',
    alternativas: [
      'uma das loiras;',
      'uma loira e uma morena;',
      'duas loiras;',
      'dezenas de morenas;',
      'uma das morenas.',
    ],
    correta: 2,
    comentario:
      'Alternativa C correta: “-las” é pronome oblíquo feminino plural que retoma “duas loiras”, complemento de “comparar” nessa oração. As demais alternativas indicam termos que não são o complemento de “compará-las”, como as morenas ou uma única loira.',
  },
  {
    id: 'lp-pronome-qlivro11-43',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Ceperj - Procon/RJ - Técnico em Contabilidade - 2012) “a sua fiel e querida boneca, que você não vê há três meses”. No exemplo acima, o vocábulo “que” substitui um termo antecedente (“boneca”) e é classificado, por isso, como pronome relativo. Outro exemplo no qual o vocábulo “que” funciona como pronome relativo está em:',
    alternativas: [
      '“Sei que você sente muitas saudades”;',
      '“Aposto que você nem sabia”;',
      '“eletrodomésticos que não funcionavam”;',
      '“ninguém mais fraco do que nós”;',
      '“Não deveríamos aguardar resignadamente que decidissem”.',
    ],
    correta: 2,
    comentario:
      'Alternativa C correta: o “que” retoma “eletrodomésticos” e inicia oração adjetiva, função de pronome relativo. Nas demais, o “que” é conjunção integrante (A, B e E), ou compõe a locução comparativa “do que” (D), sem substituir termo antecedente.',
  },
  {
    id: 'lp-pronome-qlivro11-44',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Ceperj — Procon/RJ — Técnico em Contabilidade - 2012) A substituição da expressão grifada por um pronome pessoal está corretamente realizada em:',
    alternativas: [
      'assina esta coluna — assina-lhe',
      'formamos um grande grupo — formamo-nos',
      'vamos tomar o poder — vamos tomá-lo',
      'mudar o mundo — mudar-se',
      'preparando a revolução — preparando-na',
    ],
    correta: 2,
    comentario:
      'Alternativa C correta: “o poder” é masculino e, como complemento direto do infinitivo “tomar”, vira “-lo” (tomá-lo). As demais erram a função ou o gênero: “esta coluna” pede “-a” (e não “-lhe”, que é indireto), “um grande grupo” não é reflexivo, “mudar o mundo” pede “mudá-lo”, e “preparando-na” contrai “em + a” sem razão, pois o correto é “preparando-a”.',
  },
  {
    id: 'lp-pronome-qlivro11-45',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TJ/RJ — Comissário da Infância e da Juventude — 2012) O restaurante Reis, ...... o poeta era assíduo frequentador, ficava no velho centro do Rio. Preenche corretamente a lacuna da frase acima:',
    alternativas: ['o qual', 'no qual', 'de que', 'de cujo', 'em que'],
    correta: 2,
    comentario:
      'Alternativa C correta: “ser assíduo frequentador de” pede a preposição “de”, que se junta ao relativo “que” em “de que”, com valor de “do qual”. As demais trazem preposição inadequada ao verbo ou nome (“no qual” e “em que”) ou sem a preposição exigida (“o qual”), e “de cujo” exige um possessivo que não se aplica ao contexto.',
  },
  {
    id: 'lp-pronome-qlivro11-46',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe - CPRM - Técnico de Geociências - 2013) Feitas as necessárias alterações na grafia das palavras, o deslocamento do vocábulo “certa” (“Apesar de certa retenção em 2012...”) para logo após o substantivo a que se refere manteria a correção gramatical e o sentido original do texto.',
    gabaritoCE: false,
    comentario:
      'Errado. Anteposto ao substantivo, “certa” tem valor de indefinido (“uma retenção qualquer”); posposto, assume valor qualificativo de “certeza” ou “exata”, o que altera o sentido original do trecho.',
  },
  {
    id: 'lp-pronome-qlivro11-47',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - SAP/SP - Agente de Escolta e Vigilância Sanitária - 2015) Assinale a alternativa correta quanto à colocação pronominal.',
    alternativas: [
      'Ainda têm-se notícias de pessoas afetadas pelas diversas formas contemporâneas de escravidão.',
      'A sociedade não conscientizou-se plenamente ainda da importância do combate à escravidão.',
      'Se encontram no mundo contemporâneo muitas pessoas afetadas pelas diversas formas de escravidão.',
      'A sociedade contemporânea agora se vê com o grande desafio de combater a escravidão.',
      'O mundo atual tem caracterizado-se por uma série de ações de combate a todas as formas de escravidão.',
    ],
    correta: 3,
    comentario:
      'Alternativa D correta: o advérbio “agora” é palavra atrativa e exige a próclise “se vê”. As demais erram: em A, “ainda” também atrai o pronome, que deveria vir antes do verbo; em B, a negação “não” exige a próclise; em C, o pronome não pode iniciar a oração; e em E, a locução “tem caracterizado” não admite o pronome depois do particípio.',
  },
  {
    id: 'lp-pronome-qlivro11-48',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Copeve-Ufal - Uncisal - Nível Superior - 2015) Os pronomes demonstrativos estabelecem referências espaciais e temporais em relação às pessoas do discurso. Qual alternativa apresenta o uso correto desses pronomes?',
    alternativas: [
      'Nesse ano estou estudando mais.',
      'Sombra e água fresca; é disto que preciso.',
      'Essa cicatriz no meu braço eu ganhei na infância.',
      'Estas são as frutas de que gosto: banana, maçã e melancia.',
      'Gosto muito de teatro e música: este porque encanta; aquela porque instrui.',
    ],
    correta: 3,
    comentario:
      'Alternativa D correta: “estas” indica seres próximos do falante, e “de que” reúne o relativo à preposição exigida por “gostar”. As demais empregam demonstrativos em desacordo com a referência de proximidade ou com a retomada dos termos citados, como a cicatriz no próprio braço, que pede “esta”.',
  },
  {
    id: 'lp-pronome-qlivro11-49',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - Codeba - Analista Portuário (Economista) - 2016) As virtudes e os perfumes são da natureza; _____ duram pouco e _____ perduram por longo tempo, mas ambos perdem a essência quando expostos. As formas dos demonstrativos que preenchem corretamente as lacunas são:',
    alternativas: [
      'estes / aqueles',
      'aqueles / estes',
      'esses / aqueles',
      'estes / aquelas',
      'esses / aquelas',
    ],
    correta: 3,
    comentario:
      'Alternativa D correta: “estes” retoma o termo mais próximo e último citado, “perfumes”, que duram pouco; “aquelas” retoma o termo mais distante e primeiro citado, “virtudes”, feminino, que perduram por longo tempo. As demais inverteram a relação de proximidade ou a concordância de gênero.',
  },
  {
    id: 'lp-pronome-qlivro11-50',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe - Instituto Rio Branco - Diplomata — 2017) Fragmento de texto: “É hostil, como conjunto, ao ócio dos homens de renda e ao prestígio do estamento político, que maneja o poder do alto e de cima, sem consultar-lhe as preferências nem lhe pedir orientação e conselho.” Tendo o pronome oblíquo sentido possessivo em “sem consultar-lhe as preferências”, tal trecho poderia ser substituído por “sem consultar as suas preferências”, mantendo-se, com isso, a correção gramatical e o sentido do texto.',
    gabaritoCE: true,
    comentario:
      'Certo. O pronome “lhe” tem valor possessivo (“as preferências dele”), e a substituição por “as suas preferências” mantém a correção e o sentido, pois o possessivo de terceira pessoa é a forma equivalente nesse contexto.',
  },
  {
    id: 'lp-pronome-qlivro11-51',
    temaId: 'lp-pronome',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe — ABIN — Oficial Técnico de Inteligência — 2018) A próclise observada em “se multiplicam” (“... crescem e se multiplicam as agências...”) e “se desenvolve” (“Essa modalidade de guerra se desenvolve...”) é opcional, de modo que o emprego da ênclise nesses dois casos também seria correto — multiplicam-se e desenvolve-se, respectivamente.',
    gabaritoCE: true,
    comentario:
      'Certo. Em “crescem e se multiplicam”, a conjunção coordenativa “e” não é palavra atrativa; em “Essa modalidade de guerra se desenvolve”, o sujeito explícito de núcleo substantivo, sem atrativa, admite próclise facultativa. Logo, a ênclise também é correta nos dois casos.',
  },
  {
    id: 'lp-pronome-qlivro11-52',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp — Seduc/SP — Oficial Administrativo - 2019) Considere as frases do texto: “Tenho amigos que não leem e não frequentam livrarias.” “Lá dentro, ninguém nos obriga a comprar um livro.” Assinale a alternativa em que os pronomes que substituem as expressões destacadas estão empregados em conformidade com a norma-padrão da língua.',
    alternativas: [
      'não as frequentam / comprá-lo.',
      'não as frequentam / comprar-lhe.',
      'não lhes frequentam / comprá-lo.',
      'não frequentam elas / comprar-lhe.',
      'não lhes frequentam / comprar ele.',
    ],
    correta: 0,
    comentario:
      'Alternativa A correta: “livrarias”, feminino plural, vira “as”, antecedido pela palavra atrativa “não”; e “um livro”, masculino, vira “-lo” após a preposição “a” do infinitivo. As demais erram o gênero ou a função: “lhes” é dativo e não substitui objeto direto, e “comprar-lhe” pede pronome de objeto direto para “um livro”.',
  },
  {
    id: 'lp-pronome-qlivro11-53',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Advise — Prefeitura de Coremas — PB — Advogado — 2021) “Juntos há 47 anos, eles não podem se encontrar pessoalmente...” (linhas 4 e 5). Sobre a colocação pronominal, analise o trecho acima retirado do Texto e, em seguida, assinale a alternativa CORRETA.',
    alternativas: [
      'Há um caso obrigatório de próclise.',
      'Em geral, toda ênclise a um verbo no infinitivo é correta, ainda que exista um fator de próclise.',
      'Poderia ser corretamente substituído por “encontrar-se-iam”.',
      'Há erro de colocação pronominal no trecho em questão.',
      'Não é permitido próclise a um verbo no infinitivo.',
    ],
    correta: 1,
    comentario:
      'Alternativa B correta: em locução formada por “não podem” e infinitivo, o pronome pode ficar depois do verbo principal mesmo havendo palavra atrativa, como em “podem encontrar-se”. As demais afirmações são falsas, pois a colocação do trecho é admitida e a próclise não é obrigatória nem proibida nesse caso.',
  },
  {
    id: 'lp-pronome-qlivro11-54',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Instituto Consulplan - Prefeitura de Formiga - MG - Agente Social - 2020) Nas orações “ALGUMAS pessoas têm a falsa impressão de que todos os resíduos plásticos são recicláveis, (...)” (2° §) e “VÁRIOS países já estão adotando medidas que proíbem a utilização de produtos plásticos descartáveis.” (3° §), as palavras destacadas são pronomes indefinidos. Em qual das orações a palavra destacada NÃO se trata de pronome indefinido?',
    alternativas: [
      'Tem ALGO para fazer?',
      'QUALQUER atitude sua é desprezível.',
      'As pessoas CERTAS sempre têm razão.',
      'CADA pessoa deverá seguir a sua intuição.',
    ],
    correta: 2,
    comentario:
      'Alternativa C correta: em “pessoas certas”, o vocábulo “certas” é adjetivo posposto ao substantivo, com sentido qualificativo (pessoas adequadas), e não de quantidade indeterminada. Nas demais, “algo”, “qualquer” e “cada” são pronomes indefinidos, com valor de indeterminação.',
  },
  {
    id: 'lp-pronome-qlivro11-55',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - TCE/PI - Assistente de Administração — 2021) “Antes que comecem os mimimis, um aviso: não tenho absolutamente nada contra aqueles que fumam.” Nesse primeiro segmento do texto 2, o autor usa adequadamente o demonstrativo “aqueles”, referindo-se a pessoas indeterminadas; a frase abaixo em que o emprego dos demonstrativos se mostra adequado é:',
    alternativas: [
      'João e Pedro são fumantes; este, de cigarros; esse, de charutos.',
      'João, Pedro e Fernando são fumantes; este, de cigarros; esse, de cachimbo e aquele, de charutos.',
      'João e Maria são fumantes; esta, de cigarros; aquele, de charutos.',
      'Maria e Fernando são fumantes; este, de charutos; aquele, de cigarros.',
      'João, Pedro e Maria são fumantes; esta, de cigarros; esse, de charutos e aquele, de cachimbo.',
    ],
    correta: 2,
    comentario:
      'Alternativa C correta: “esta” retoma o último citado (Maria) e “aquele” retoma o primeiro (João), que é a convenção de este e aquele na retomada de dois referentes. As demais usam três referentes com dois ou mais demonstrativos, ou invertem a ordem de retomada, o que não tem respaldo gramatical.',
  },
  {
    id: 'lp-pronome-qlivro11-56',
    temaId: 'lp-pronome',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - Prefeitura de Jundiaí/SP - Farmacêutico - 2022) Assinale a alternativa em que, com a alteração da posição do pronome oblíquo, conforme indicado nos parênteses, a redação permanece em conformidade com a norma-padrão.',
    alternativas: [
      'Ainda me lembro de meu pai. (Ainda lembro-me)',
      '... meu pai não se importava, (não importava-se)',
      'Sentava-se numa cadeira ou passeava... (Se sentava)',
      'Eu o amava porque o que eu queria fazer ele consentia... (Eu amava-o)',
      'E o abraço doloroso que me deu nessa ocasião! (que deu-me)',
    ],
    correta: 3,
    comentario:
      'Alternativa D correta: sem palavra atrativa antes do verbo “amava”, a ênclise “amava-o” é a colocação prescrita, e a mudança preserva a correção. As demais erram: em A, “ainda” é advérbio atrativo que exige a próclise; em B, “não” também exige próclise; e em E, “que” atrai o pronome para antes do verbo.',
  },
];
