import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 13 — Advérbio), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C13: QuestaoTreino[] = [
  {
    id: 'lp-invariaveis-qlivro13-01',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(ITA - Vestibular - 2007/2008) Qual dos advérbios terminados em -mente incide sobre o conteúdo de toda a frase?',
    alternativas: [
      'fantasticamente (... aumenta fantasticamente...)',
      'abertamente (... evito aderir abertamente...)',
      'independentemente (... treino os jogadores, traço o esquema de jogo, armo jogadas, mas, independentemente disso, existem forças...)',
      'psicologicamente (... psicologicamente preparado...)',
      'imediatamente (... volte para o campo imediatamente...)',
    ],
    correta: 2,
    comentario:
      'A alternativa C traz um advérbio que se relaciona com “disso”, expressão que retoma todo o conteúdo frasal anterior (treinar os jogadores, traçar o esquema, armar jogadas). As demais modificam apenas um verbo (A, B e E) ou um adjetivo (D), por isso não atingem a frase inteira.',
  },
  {
    id: 'lp-invariaveis-qlivro13-02',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - AFA - Oficial - 2011) No contexto do seguinte trecho, extraído do 7º parágrafo do texto, analise a classe gramatical a que pertencem os termos grifados: “... para saber quem grita gol mais alto e prolongado.” Assinale a alternativa em que o termo sublinhado pertence àquela mesma classe.',
    alternativas: [
      '“Não suporto mais ver tantas tragédias, crimes, violências...”',
      '“Fala-se muito, mesmo com a bola rodando.”',
      '“Outra discussão chata, durante e após partidas...”',
      '“Muitas parecem iguais, mas não são.”',
    ],
    correta: 1,
    comentario:
      'Em “grita gol mais alto e prolongado”, os adjetivos “alto” e “prolongado” estão adverbializados, pois modificam o verbo “gritar”. Em B, “muito” também modifica o verbo “falar”, com a mesma função. Nas demais, “chata” é adjetivo, “mais” indica tempo e “muitas” é pronome indefinido.',
  },
  {
    id: 'lp-invariaveis-qlivro13-03',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(NCE/UFRJ - Arquivo Nacional - Agente Administrativo - 2006) Em todos os advérbios terminados em -mente, retirados do texto, vê-se claramente a sua formação a partir da forma feminina do adjetivo, EXCETO em:',
    alternativas: ['predominantemente', 'basicamente', 'negativamente', 'diariamente', 'humanamente'],
    correta: 0,
    comentario:
      '“Predominantemente” vem de “predominante”, adjetivo uniforme, que não tem forma feminina distinta; por isso o sufixo não se apoia num feminino. As demais formam-se de adjetivos de dois gêneros (básica, negativa, diária, humana), e o -mente se acrescenta à forma feminina.',
  },
  {
    id: 'lp-invariaveis-qlivro13-04',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(NCE/UFRJ - Pref. Santana - Professor (Educação Básica) - 2007) A frase abaixo em que o advérbio terminado com o sufixo -mente NÃO é advérbio de modo, mas sim de tempo, é:',
    alternativas: [
      'Ela chegou rapidamente ao estacionamento.',
      'Os veículos estavam erradamente estacionados.',
      'Os funcionários trabalham conscienremente.',
      'O automóvel funcionava eficientemente.',
      'Os veículos estavam temporariamente parados.',
    ],
    correta: 4,
    comentario:
      '“Temporariamente”, na alternativa E, indica o período em que os veículos ficaram parados, ou seja, circunstância de tempo. Nas demais, o advérbio diz como a ação acontece (rapidamente, erradamente, eficientemente), o que caracteriza o modo.',
  },
  {
    id: 'lp-invariaveis-qlivro13-05',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(NCE/UFRJ - Eletrobras - Bacharel em Letras - 2002) “Os organismos geneticamente modificados...”: o item abaixo em que o advérbio sublinhado tem idêntico desempenho sintático ao da frase acima é:',
    alternativas: [
      'O Brasil pretende produzir rapidamente soja transgênica.',
      'Vários governos condenam veementemente os transgênicos.',
      'Atualmente são muitas as pesquisas sobre transgênicos.',
      'Os transgênicos são muito bem aceitos em vários países.',
      'O Brasil deve pesquisar muito para usar os transgênicos.',
    ],
    correta: 3,
    comentario:
      'Na frase de referência, “geneticamente” modifica o adjetivo “modificados”, e a questão cobra essa função sintática, não o sentido. Em D, “bem” também modifica um adjetivo (“aceitos”). As demais alternativas trazem advérbios que modificam verbos ou a oração inteira, o que as afasta da resposta.',
  },
  {
    id: 'lp-invariaveis-qlivro13-06',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - MRE - Assistente de Chancelaria - 2004) Relacione as ações (1), (2), (3) e (4) com o advérbio semanticamente adequado, conforme mostra o modelo, e assinale, a seguir, a sequência correta. Modelo: Falar com orgulho e insolência. / Falar arrogantemente. (1) Exprimir-se com muitas palavras, com palavras em excesso. ( ) sutilmente (2) Agir como criança. ( ) puerilmente (3) Insinuar com perspicácia e delicadeza. ( ) prolixamente (4) Eliminar sem se render a logros. ( ) inexoravelmente. A sequência correta é:',
    alternativas: ['4 3 2 1', '1 2 3 4', '3 4 1 2', '4 2 1 3', '3 2 1 4'],
    correta: 4,
    comentario:
      'Cada advérbio corresponde a uma ação: “prolixamente” (com muitas palavras, ação 1), “puerilmente” (como criança, ação 2), “sutilmente” (com perspicácia e delicadeza, ação 3) e “inexoravelmente” (sem se render, ação 4). Na ordem das lacunas, a sequência é 3, 2, 1, 4, correspondente à alternativa E.',
  },
  {
    id: 'lp-invariaveis-qlivro13-07',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB - IPEA - Técnico de Desenvolvimento e Administração - 2008) No segmento “já não seja mais”, verifica-se redundância no emprego concomitante dos advérbios já e mais, o que permitiria a supressão de qualquer um deles, sem prejuízo para a correção gramatical do trecho.',
    gabaritoCE: true,
    comentario:
      'A afirmação está certa: “já” e “mais” são advérbios de tempo que, nesse contexto negativo, repetem a ideia de não continuidade, de modo que um deles pode sair sem alterar a correção. Em outros contextos, “já” pode indicar contraposição, sentido que não aparece nesse trecho.',
  },
  {
    id: 'lp-invariaveis-qlivro13-08',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - Câmara Municipal de Guarulhos - Taquígrafo - 2002) Assinale a alternativa em que o advérbio grifado expressa ideia de negação.',
    alternativas: [
      'Quando vem aqui, ele sempre nos visita.',
      'Ele sempre agiu diferentemente dos outros empregados.',
      'Eu acredito que jamais ele nos daria apoio.',
      'Casualmente encontramos a lei que você queria.',
      'Ele talvez tenha mudado de opinião.',
    ],
    correta: 2,
    comentario:
      '“Jamais”, na alternativa C, nega a ação verbal, além de ter o valor temporal de nunca; é o único advérbio negativo do conjunto. Em A, “sempre” indica apenas tempo; em B, “diferentemente” indica modo; em D, “casualmente” indica modo; e em E, “talvez” indica dúvida.',
  },
  {
    id: 'lp-invariaveis-qlivro13-09',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(MH Consultoria - Pref. Gararu - Auxiliar de Enfermagem Ambulatorial - 2011) Assinale a alternativa que contém uma frase em que o advérbio expressa simultaneamente ideias de tempo e negação.',
    alternativas: [
      'Falei ontem com os embaixadores.',
      'Não me pergunte as razões da minha atitude.',
      'Eles sempre chegam atrasados.',
      'Jamais acreditei que você viesse.',
      'Agora seremos felizes.',
    ],
    correta: 3,
    comentario:
      '“Jamais” soma a ideia de tempo (nunca, em nenhum momento) à de negação, o que o torna a resposta. Em A, “ontem” é só tempo; em B, “não” é só negação; em C, “sempre” é só tempo; e em E, “agora” indica apenas tempo.',
  },
  {
    id: 'lp-invariaveis-qlivro13-10',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - Sptrans - Agente de Informação - 2007) Leia o texto. Finalmente, a Lei de Uso e Ocupação do Solo privilegia uma ocupação mais horizontal da cidade, o que aumenta a necessidade de investimento por parte do poder público na construção de uma infraestrutura que atenda satisfatoriamente a toda a região metropolitana. Os advérbios Finalmente, mais e satisfatoriamente expressam, respectivamente, ideia de:',
    alternativas: [
      'finalidade, modo, intensidade',
      'tempo, intensidade, modo',
      'finalidade, lugar, modo',
      'tempo, proporção, tempo',
      'consequência, intensidade, tempo',
    ],
    correta: 1,
    comentario:
      '“Finalmente” marca o momento do desfecho na sequência do discurso (tempo); “mais” intensifica o adjetivo “horizontal” (intensidade); e “satisfatoriamente” diz como a infraestrutura atende à região (modo). Só a alternativa B combina essas três circunstâncias.',
  },
  {
    id: 'lp-invariaveis-qlivro13-11',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobras - Cargos de Nível Superior - 2010) Em “afinal, sou humano...” (l. 14), o elemento destacado é um operador argumentativo de:',
    alternativas: ['condição', 'consequência', 'conclusão', 'conformidade', 'concessão'],
    correta: 2,
    comentario:
      '“Afinal” introduz uma conclusão a partir do que foi dito antes, por isso funciona como operador argumentativo de conclusão. Condição, conformidade e concessão não descrevem a relação que o advérbio estabelece com o trecho anterior; consequência é parecida, mas não expressa o desfecho de uma ideia como “afinal” faz.',
  },
  {
    id: 'lp-invariaveis-qlivro13-12',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB - TRT (6R) - Analista Judiciário - 2002) O advérbio “Talvez” (v. 15) admite que a forma verbal “Consinta” (v. 16) seja alterada para Consente, no modo indicativo.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada segundo a banca: quando “talvez” vem anteposto, a norma tradicional exige o verbo no subjuntivo, de modo que “Consinta” não pode virar “Consente”. O indicativo aparece com “talvez” posposto, em dúvida branda, como em “Parto hoje talvez”.',
  },
  {
    id: 'lp-invariaveis-qlivro13-13',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FJPF - CONAB - Técnico Administrativo - 2006) A alternativa em que a palavra muito está sintaticamente empregada como em “parece muito mais fácil que o físico” é a seguinte:',
    alternativas: [
      'Muitos dos que se dizem cidadãos não respeitam sequer as leis do trânsito.',
      'Há muito ainda por realizar no Brasil.',
      'É muito importante este aspecto da questão.',
      'Ao evento compareceram muitos congressistas.',
      'Muita saúva e pouca saúde os males do Brasil são.',
    ],
    correta: 2,
    comentario:
      'Em “muito importante”, “muito” é advérbio de intensidade que modifica o adjetivo, como em “muito mais fácil”. Nas demais, “muito” (ou “muitos”, “muita”) é pronome indefinido, que se refere a um substantivo ou forma a expressão “há muito”.',
  },
  {
    id: 'lp-invariaveis-qlivro13-14',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(NCE/UFRJ - IPJB - Biólogo - 2002) A expressão sublinhada no segmento “Os americanos, atraídos através do radar...”, indica:',
    alternativas: ['lugar', 'instrumento', 'meio', 'causa', 'condição'],
    correta: 2,
    comentario:
      '“Através do radar” indica o meio pelo qual os americanos foram atraídos, e não um objeto concreto usado para realizar um fim; por isso a resposta é meio. Lugar não se aplica, e causa e condição alteram o sentido da frase.',
  },
  {
    id: 'lp-invariaveis-qlivro13-15',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - Senado Federal - Administração - 2012) É questionável ainda a ideia de embalar comida com comida. (L 31-32) Assinale a alternativa em que o termo sublinhado tenha classificação idêntica à do adjunto adverbial sublinhado no período acima.',
    alternativas: [
      'Saíram mais cedo com os amigos.',
      'Encheram a garrafa com funil.',
      'Fizeram os ovos com manteiga.',
      'Massageou os pés com maciez.',
      'Construíram o muro com pedras.',
    ],
    correta: 4,
    comentario:
      'O adjunto “com comida” indica a matéria de que a sacola é feita, e “com pedras”, na alternativa E, tem o mesmo valor: o muro é feito de pedras. A alternativa A expressa companhia, B indica meio, e C e D indicam modo.',
  },
  {
    id: 'lp-invariaveis-qlivro13-16',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(UFSJ - PROGP - Técnico Laboratorial - 2009) Fragmento de texto: “(...) Além das intervenções em saúde, segundo Waleska Caiaffa, professora da Faculdade de Medicina da UFMG e uma das coordenadoras do Observatório de Saúde Urbana de Belo Horizonte (Osubh), há que se pensar em intervenções urbanas não necessariamente relacionadas à saúde, mas que exercem sobre ela impacto positivo. A busca de soluções para que as populações usufruam de mais qualidade de vida na cidade, aliás, é uma das premissas do trabalho desenvolvido pelo Observatório. (...)” A palavra “aliás”, presente no terceiro parágrafo, pode ser analisada como:',
    alternativas: [
      'um elemento de coesão ligando duas orações de sentidos opostos;',
      'um elemento de valor argumentativo que valoriza o trabalho do Osubh;',
      'uma circunstância para que sejam buscadas soluções para o usufruto da qualidade de vida;',
      'uma interjeição que traz o sentimento da autora com relação à importância da qualidade de vida.',
    ],
    correta: 1,
    comentario:
      '“Aliás” introduz um argumento que reforça a importância do trabalho do Observatório, por isso tem valor argumentativo e valoriza o objeto da frase. Não liga orações de sentidos opostos, não é circunstância e não expressa sentimento, como faria uma interjeição.',
  },
  {
    id: 'lp-invariaveis-qlivro13-17',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB - EEAR - Sargento - 2002) A maioria dos advérbios terminados em -mente são classificados como advérbios de modo. Quando aplicados ao texto, pode-se descobrir mais da relação que estabelecem com os termos da oração. Desse modo, relacione a coluna A com a coluna B, de acordo com o que se pede. A: I. advérbio caracterizando finalidade descritiva; II. advérbio caracterizando juízo de valor; III. advérbio caracterizando avaliação de quem fala; IV. advérbio caracterizando um critério. B: ( ) Lamentavelmente, não teremos como concluir os preparativos da festa no prazo previsto. ( ) “A noite obscenamente acesa / Sobre meu país dividido em classes.” (Ferreira Gullar) ( ) Em primeiro lugar observemos o avô. Igualmente, lancemos um olhar para a avó. ( ) Sofregamente, o homem vertia na boca a água que lhe escorria pelo pescoço, pelo corpo, como a matar também a sede da alma. A sequência correta será:',
    alternativas: ['IV-II-I-III', 'III-I-II-IV', 'II-IV-I-III', 'III-II-IV-I'],
    correta: 3,
    comentario:
      '“Lamentavelmente” expressa a avaliação de quem fala (III); “obscenamente” traz um juízo de valor (II); a ordem da exposição, com “igualmente”, é um critério (IV); e “sofregamente” apenas caracteriza descritivamente a ação (I). A sequência III-II-IV-I corresponde à alternativa D.',
  },
  {
    id: 'lp-invariaveis-qlivro13-18',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(UERJ - 1º Exame de Qualificação - Vestibular - 2004) “Já se sentiu vítima de algum tipo de marginalização e/ou discriminação dentro de sua universidade?” “Infelizmente, devo dizer que sim.” O advérbio infelizmente, na resposta do entrevistado, exprime um ponto de vista ou julgamento a respeito dos fatos relatados. A alternativa cujo elemento sublinhado desempenha essa mesma função é:',
    alternativas: [
      '“Já se sentiu vítima de algum tipo de marginalização (...)?”',
      '“que pertencem ao mesmo partido político etc. e que se apoiam mutuamente.”',
      '“Mas, verdade seja dita, trata-se de uma hostilidade.”',
      '“e continua apoiando as reformas que instituí em minha gestão.”',
    ],
    correta: 2,
    comentario:
      'A expressão “verdade seja dita”, como “infelizmente”, traz o ponto de vista de quem fala sobre o fato relatado. As demais alternativas apenas situam, relacionam ou acrescentam informações, sem nenhum julgamento.',
  },
  {
    id: 'lp-invariaveis-qlivro13-19',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(NCE/UFRJ - Eletronorte - Assistente Administrativo - 2006) De todos os advérbios em -mente abaixo sublinhados, o que apresenta valor semântico distinto dos demais é:',
    alternativas: [
      '“extremamente promissoras”',
      '“eticamente inaceitável”',
      '“igualmente descartada”',
      '“o saldo final é, modestamente, bem positivo”',
      '“levar os parlamentares a recuar rapidamente”',
    ],
    correta: 0,
    comentario:
      '“Extremamente” é advérbio de intensidade, que modifica o adjetivo “promissoras”. Os demais têm valor de modo (“eticamente”, “igualmente”, “rapidamente”) ou de modalização (“modestamente”), por isso a intensidade é o valor distinto.',
  },
  {
    id: 'lp-invariaveis-qlivro13-20',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Funiversa - APEX - Analista Sênior - 2006) “A tão difícil arte de amar bonito” / “Talvez seja tão simples, tolo e natural”. A respeito das palavras destacadas, assinale a alternativa correta.',
    alternativas: [
      'As duas são advérbios e modificam adjetivo.',
      'As duas são advérbios e modificam verbo.',
      'As duas são advérbios e modificam outro advérbio.',
      'As duas são adjetivos.',
      'As duas são pronomes de intensidade.',
    ],
    correta: 0,
    comentario:
      '“Tão” modifica o adjetivo “difícil” na primeira frase e “simples” na segunda, ou seja, é advérbio de intensidade que se liga a adjetivos. As demais alternativas erram a classe ou o termo modificado, e “pronome de intensidade” não existe como classe própria.',
  },
  {
    id: 'lp-invariaveis-qlivro13-21',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FGV - SERC/MS - Fiscal de Rendas - 2006) “Tal como está organizada, a sociedade gira em torno do mercado, de acordo com um sistema que alguns chamam de ‘economia de mercado’, e outros, de ‘capitalismo’”. A palavra Tal classifica-se como:',
    alternativas: ['adjetivo', 'advérbio', 'conjunção', 'pronome demonstrativo', 'pronome relativo'],
    correta: 1,
    comentario:
      '“Tal” aparece em “tal como está organizada” e modifica o verbo, expressando modo; por isso é advérbio. Como pronome demonstrativo, acompanharia um substantivo, o que não ocorre aqui, e como conjunção ou relativo não teria a função de modificar a ação.',
  },
  {
    id: 'lp-invariaveis-qlivro13-22',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(MP-RJ - Técnico Administrativo - 2007) Fragmento de texto: “Para muita gente, esta é a semana mais difícil do ano. Você volta das férias, tenta se adaptar de novo à rotina e já pressente as surpresas que vai ter ao receber a conta do cartão de crédito. Quando se dá conta, é mais uma vitima da depressão pós-viagem. Eu só conheço uma maneira de sair dessa: começar a pensar já na próxima. Não, não é cedo demais. (...)” O uso duplo da palavra negativa nesse trecho tem a finalidade de:',
    alternativas: [
      'responder de modo peremptório a uma pergunta anteriormente expressa;',
      'contradizer um argumento levantado pelo próprio autor;',
      'reforçar o tom de diálogo com o leitor, já introduzido no texto;',
      'negar uma opinião contrária expressa na frase anterior;',
      'chamar a atenção do leitor para o caráter ambíguo do que é dito.',
    ],
    correta: 2,
    comentario:
      'O “Não, não” responde a uma possível objeção do leitor e reforça a conversa direta com ele. O autor não nega nenhum argumento seu (B) nem uma opinião da frase anterior (D), e a dupla negativa não cria ambiguidade, o que torna C a resposta.',
  },
  {
    id: 'lp-invariaveis-qlivro13-23',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(MP-RJ - Técnico Administrativo - 2007) Fragmento de texto: “(...) Ao contornar a ilha principal em busca do Ninhal das Fragatas, nosso ponto de ancoragem, demos de cara com a exuberância da fauna, uma espécie de ‘Galápagos’ do litoral paulista. (...)”. No segundo parágrafo, o autor emprega a expressão “demos de cara”, forma popular que transmite a ideia de que a ação descrita ocorreu:',
    alternativas: ['subitamente', 'furtivamente', 'favoravelmente', 'efemeramente', 'mormente'],
    correta: 0,
    comentario:
      '“Demos de cara” significa encontrar algo de repente, sem esperar; por isso o advérbio equivalente é “subitamente”, que indica o modo repentino da ocorrência. Furtivamente (às escondidas), favoravelmente, efemeramente e mormente não têm esse sentido.',
  },
  {
    id: 'lp-invariaveis-qlivro13-24',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(MP/RJ - Técnico Superior Administrativo - 2007) “Dos três irmãos, dois fazem parte de um grupo cada vez mais comum na família brasileira contemporânea.” Assinale a única opção em que a palavra “mais” está empregada com o mesmo valor gramatical da frase acima:',
    alternativas: [
      'Eu espero por você o tempo que for; nós vamos estar juntos mais uma vez.',
      'Não tenho mais dinheiro, atraso o aluguel, não compro alimento.',
      'Estou tão cansado, mas não pra dizer que não acredito mais em você.',
      'Espero que aquela jura não tenha ido para mais ninguém.',
      'E quando o inverno tristonho chegar, mais amor eu vou ter pra lhe dar.',
    ],
    correta: 2,
    comentario:
      'Na frase de referência, “mais” é advérbio, que modifica o adjetivo “comum”. A alternativa C traz o “mais” modificando um verbo, como advérbio. Nas demais, “mais” se refere a um substantivo (dinheiro, ninguém, amor) ou se liga a uma expressão de repetição (“mais uma vez”), o que altera a classe ou a função.',
  },
  {
    id: 'lp-invariaveis-qlivro13-25',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - Senado Federal - Analista de Informática Legislativa - 2008) Fragmentos de texto: “A crise do sistema financeiro internacional, que ameaça lançar o mundo numa profunda recessão, revela a importância do papel do governo no funcionamento da economia em diferentes dimensões, sobretudo na promoção de uma melhor operação dos mercados, da estabilidade e do crescimento económico. Entretanto, após algumas décadas de excessivo crescimento dos gastos governamentais e da crise financeira que se abateu sobre inúmeros governos... (...) Em primeiro lugar, não estão em xeque as inegáveis e insubstituíveis virtudes que os mercados possuem quando funcionam de maneira mais livre, sem interferências externas, na alocação dos recursos. (...) Certamente essas frases devem nos deixar algo perplexos...”. Assinale a alternativa em que a palavra indicada, no texto, se classifique como advérbio.',
    alternativas: ['livre.', 'profunda.', 'melhor.', 'algo.', 'após.'],
    correta: 3,
    comentario:
      '“Algo” aparece modificando o adjetivo “perplexos” com o sentido de “um tanto”, função de advérbio de intensidade. As demais palavras são adjetivos (livre, profunda, melhor) ou preposição (após, que liga “após” a “algumas décadas”).',
  },
  {
    id: 'lp-invariaveis-qlivro13-26',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FCC - MRE - Oficial de Chancelaria - 2009) (Adaptada) A afirmação abaixo está correta ou incorreta? O enunciado “aquilo que o texto nos diz já não constitui o objeto preferido de nossa atenção” contém pressuposto introduzido pelo advérbio já.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: ao usar “já não”, o enunciado pressupõe que antes o texto constituía o objeto de atenção do leitor. Esse pressuposto é introduzido pelo advérbio “já”, o que confirma a afirmação.',
  },
  {
    id: 'lp-invariaveis-qlivro13-27',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado: '(IESES - TJ - Analista Judiciário - 2009) Assinale a alternativa INCORRETA, em relação ao vocábulo mesmo / mesma.',
    alternativas: [
      'A norma culta da língua rejeita o mencionado vocábulo na substituição de pronomes pessoais, como em “O grupo formado por índios, portugueses e africanos influenciou a culinária maranhense e somos agradecidos ao mesmo.”',
      'Em “As cerâmicas maranhenses chegam mesmo a ser vendidas no exterior”, o vocábulo é advérbio e equivale a até.',
      'Em “Um aluno sem a mesma base precoce”, o vocábulo acompanha o substantivo; é adjetivo e equivale a idêntica.',
      'Está correta a frase: “O Bumba Meu Boi é manifestação folclórica diferente das demais do país; a mesma é mais espetacular.”',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a incorreta: a norma culta não aceita “a mesma” como substituto do pronome pessoal (no lugar de “ela”), que é o que a frase faz. A alternativa A descreve corretamente essa rejeição, e B e C classificam bem o vocábulo como advérbio de inclusão e como adjetivo.',
  },
  {
    id: 'lp-invariaveis-qlivro13-28',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE/UnB - Detran/DF - Auxiliar de Trânsito - 2009) Fragmentos de texto: “... nos dias de folia carnavalesca, onde a ingestão de bebidas alcoólicas se eleva...” “... solicito... a presença... na praça do Dl, reduto dos foliões mais intempestivos, onde se verificam muitas ocorrências...” Considerando-se as duas ocorrências do advérbio “onde”, primeiro e terceiro parágrafos do documento, apenas na primeira se respeitam as normas do padrão escrito formal da língua portuguesa para o emprego desse advérbio.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: o “onde” do primeiro trecho indica tempo (dias de folia), uso que o padrão formal não aceita, enquanto o do terceiro indica lugar (praça), emprego correto. Logo, a norma é respeitada no terceiro trecho, e não no primeiro.',
  },
  {
    id: 'lp-invariaveis-qlivro13-29',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB - Detran/DF - Analista de Trânsito - 2009) “(...) Aproveito o ensejo para manifestar-lhe também, outrossim, a intenção de retomar...”. No segundo parágrafo, o advérbio “outrossim”, frequente em expedientes oficiais, está empregado de forma redundante por estar antecedido do advérbio “também”.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: “outrossim” e “também” têm o mesmo valor de adição (= também, igualmente), e o uso de ambos no mesmo trecho é redundante. É um caso típico de duplicidade de advérbios de inclusão.',
  },
  {
    id: 'lp-invariaveis-qlivro13-30',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(CESPE/UnB - Irunetro - Todos os Cargos - 2009) Fragmento de texto: “Consultado por um discípulo sobre as forças dominantes dos destinos dos homens, o grande sábio Pitágoras respondeu: ‘Os números governam o mundo!’. Realmente. O pensamento mais simples não pode ser formulado sem nele se envolver, sob múltiplos aspectos, o conceito fundamental do número. (...)”. Por meio do advérbio “Realmente”, o autor do texto exprime concordância com o enunciado de Pitágoras citado no primeiro parágrafo.',
    gabaritoCE: true,
    comentario:
      '“Realmente” funciona como advérbio de afirmação que confirma o enunciado anterior, portanto expressa a concordância do autor com Pitágoras. A afirmação, assim, está correta.',
  },
  {
    id: 'lp-invariaveis-qlivro13-31',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB - Antaq - Técnico em Regulação - 2009) Fragmento de texto: “Quando as caravelas atracaram nas límpidas águas e areias do litoral brasileiro, que em pequena distância partiu infinito, algo impressionou ainda mais aqueles inegáveis exploradores: uma enorme muralha verde parecia proteger aquelas terras. Densas árvores, rica fauna... Algo jamais visto, algo jamais imaginado. Aos poucos, os portugueses perceberam que ali estava a verdadeira riqueza daquela terra recém-conquistada. (...)”. O advérbio “ali” situa na “muralha verde”, constituída de “Densas árvores” e de “rica fauna”, a “verdadeira riqueza daquela terra”.',
    gabaritoCE: true,
    comentario:
      '“Ali” é advérbio de lugar que retoma, no texto, a “muralha verde” formada por árvores e fauna. Ao dizer que “ali estava a verdadeira riqueza”, o advérbio aponta para o espaço já mencionado, e a afirmação está correta.',
  },
  {
    id: 'lp-invariaveis-qlivro13-32',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Funiversa - MTUR - Agente Administrativo - 2010) O termo “mais”, usado em “O mais renegado dos sete pecados capitais é uma emoção inerente à condição humana, por mais difícil que seja confessá-la”, tem o mesmo valor semântico e morfológico na frase:',
    alternativas: [
      'Não aguentava mais tanto barulho.',
      'E que tudo o mais vá pro inferno!',
      'Cinco mais dois são sete.',
      'Sem mais nem menos, ela sumiu.',
      'Com a chegada do irmão, ela ficou mais nervosa.',
    ],
    correta: 4,
    comentario:
      'Em “por mais difícil”, “mais” é advérbio de intensidade que modifica o adjetivo; em E, “mais nervosa” tem a mesma função. Em A e B, “mais” é pronome indefinido; em C, é o operador de soma; e em D, é substantivo.',
  },
  {
    id: 'lp-invariaveis-qlivro13-33',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Funiversa - Seplag-DF - Analista (ADM.) - 2010) (Adaptada) A afirmação abaixo está correta ou incorreta? O advérbio na construção “reagiu rapidinho” foi usado de acordo com a norma padrão da língua portuguesa, com flexão de diminutivo.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: o diminutivo em advérbio é recurso coloquial, não da norma padrão. O advérbio só varia em grau por derivação dentro de usos formais, e “rapidinho” é um coloquialismo, o que a banca não aceitou.',
  },
  {
    id: 'lp-invariaveis-qlivro13-34',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funiversa - Sejus/DFT - Ciências Contábeis - 2010) A palavra “ainda” em “A entidade também relata as condições das prisões já divulgadas por meio dos mutirões do CNJ e o crescente número de prisões de pessoas acusadas de delitos menores e inocentes. É considerado grave ainda o fato de as detenções gerarem facções criminosas” está empregada com o mesmo sentido na frase:',
    alternativas: [
      'Estou preocupado com Jairo: ele ainda não voltou.',
      'Você ainda vai ser feliz, tenho certeza.',
      'Ninguém acreditou, mas o pássaro ainda voava até aquela hora.',
      'A jovem recebeu acusações injustas e, ainda, foi impedida de se explicar.',
      'Não tinha muito tempo; ainda assim foi visitar a mãe doente.',
    ],
    correta: 3,
    comentario:
      'Na frase de referência, “ainda” tem valor aditivo, equivalente a “além disso”. Em D, “e, ainda,” também acrescenta uma informação, o que mantém o mesmo sentido. Em A, B e C, o advérbio indica tempo, e em E, “ainda assim” indica concessão.',
  },
  {
    id: 'lp-invariaveis-qlivro13-35',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fundep - Pref. Nova Lima - Assistente Social - 2010) “Não ficamos nas preposições, fomos igualmente aos advérbios”. Assinale a alternativa em que se flexionou indevidamente, segundo o texto, um advérbio:',
    alternativas: [
      '“[...] a língua é viva e muda o tempo todo.” / “[...] a língua é viva e muda toda hora”',
      '“[...] a qualquer pretexto [...]” / “[...] sob quaisquer pretextos”',
      '“Afinal, bastante gente fala assim.” / “Afinal, bastantes pessoas falam assim”',
      '“[...] o fato está todo escancarado para qualquer um ver.” / “[...] a coisa está toda escancarada para qualquer um ver.”',
    ],
    correta: 3,
    comentario:
      'Em D, o advérbio “todo”, que modifica o adjetivo “escancarado”, recebe flexão de gênero (“toda”), o que não é permitido, pois advérbio é invariável. Nas demais, a mudança recai sobre pronomes e adjetivos, que variam normalmente.',
  },
  {
    id: 'lp-invariaveis-qlivro13-36',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(AOCP - Pref. Camaçari - Procurador Municipal - 2010) Em “Além disso, foram eliminados órgãos equivalentes às diretorias regionais de ensino”, a expressão destacada:',
    alternativas: [
      'introduz uma explicação;',
      'reitera um argumento citado;',
      'aponta para uma conclusão;',
      'adiciona um argumento;',
      'aponta para uma causa.',
    ],
    correta: 3,
    comentario:
      '“Além disso” acrescenta, sem alterar, um novo argumento à sequência, o que caracteriza adição. Não há explicação, reiteração, conclusão nem causa nesse trecho.',
  },
  {
    id: 'lp-invariaveis-qlivro13-37',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Vunesp - Fundação Casa - Agente Administrativo - 2010) Em “No Brasil, talvez mais que em outros países,...”, o advérbio em destaque expressa sentido de:',
    alternativas: ['causa;', 'afirmação;', 'negação;', 'modo;', 'dúvida.'],
    correta: 4,
    comentario:
      '“Talvez” indica dúvida ou hipótese do enunciador sobre o que afirma, por isso é advérbio de dúvida. Causa, afirmação e negação não aparecem no trecho, e “talvez” não indica modo.',
  },
  {
    id: 'lp-invariaveis-qlivro13-38',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Fadesp - Sespa/PA - Médico - 2010) Fragmentos de texto: “(...) Nem todas as palavras representam ‘coisas’ do mundo exterior à linguagem: palavras puramente gramaticais como preposições, conjunções e artigos são o cimento que une os tijolos da comunicação, como substantivos, adjetivos, verbos e advérbios. Estes são chamados de palavras lexicais, cheias ou exteroceptivas porque nos remetem ao ‘mundo’, a vivências físicas ou mentais que abstraímos e guardamos na mente sob a forma de conceitos. Já as palavras gramaticais são chamadas de vazias ou interoceptivas porque não representam conceitos, só exercem junções na própria língua, como conectar ou substituir palavras cheias. (...) Trata-se de constatar que não podemos conhecer o mundo em que vivemos sem a mediação dos signos. (...) Aliás, as únicas formas de conhecimento a priori, que independem da experiência, são a lógica e a matemática, justamente dois exemplos de linguagem formal. Ou seja, podemos lidar com a linguagem sem a realidade, mas não podemos lidar com a realidade sem a linguagem.” Quanto às relações coesivas, é incorreto afirmar que o(a):',
    alternativas: [
      'conjunção “portanto” sinaliza uma conclusão;',
      'expressão “ou seja” retifica a informação anterior;',
      'advérbio “aliás” introduz um elemento importante ao raciocínio do autor;',
      'vocábulo “já” introduz, na explanação do autor, um elemento novo que se opõe ao anterior.',
    ],
    correta: 1,
    comentario:
      '“Ou seja” introduz uma explicação ou reformulação do que foi dito, sem corrigir a informação anterior; por isso a afirmação de que ela retifica é a incorreta. As demais estão corretas: “portanto” conclui, “aliás” acrescenta um elemento relevante e “já” introduz um elemento que se opõe ao anterior.',
  },
  {
    id: 'lp-invariaveis-qlivro13-39',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEC - MPA - Agente Administrativo - 2010) O advérbio em -mente que traduz uma atitude ou estado psicológico do autor diante do fato por ele enunciado encontra-se na alternativa:',
    alternativas: [
      'Atualmente, tenho ido pescar na região de Ubatuba, em São Paulo.',
      'Seguramente, tiveram tempo para embarcar ao menos duas ou três dezenas de peixes.',
      'Felizmente, sabemos que a enchova é uma espécie que não corre risco de extinção.',
      'Aparentemente, só trinta exemplares.',
      'Principalmente quando se sabe que, no que depender da “colheita” feita por você nesse dia, ainda havia bastante peixe para a próxima pescaria.',
    ],
    correta: 2,
    comentario:
      '“Felizmente” expressa a atitude do autor diante do fato (satisfação de saber que a espécie não corre risco), por isso é advérbio de avaliação. Em A, “atualmente” indica tempo; em B e D, “seguramente” e “aparentemente” expressam certeza ou aparência; e em E, “principalmente” indica realce.',
  },
  {
    id: 'lp-invariaveis-qlivro13-40',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(MOVENS - MD1C - Tecnologia da Informação - 2010) Fragmento de textos: “As operações de importação e exportação sofreram um impacto positivo muito grande... (...) A informatização no segmento de comércio exterior é inevitável, crescente e, principalmente, abrangente. Integridade, agilidade e confiabilidade das informações, controle dos processos e acompanhamento detalhado das etapas de importação e exportação são benefícios da utilização dos softwares, que refletem diretamente em redução de custos, eliminação de erros, e consequentes multas...” A palavra “praticamente” está empregada no texto com valor adverbial, assim como o vocábulo:',
    alternativas: ['crescente;', 'abrangente;', 'consequentes;', 'muito.'],
    correta: 3,
    comentario:
      '“Muito” é advérbio de intensidade, como “praticamente”, e modifica outro termo sem concordar com ele. “Crescente”, “abrangente” e “consequentes” são adjetivos que concordam com substantivos, e não exercem valor adverbial.',
  },
  {
    id: 'lp-invariaveis-qlivro13-41',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(UERJ - 1º Exame de Qualificação - Vestibular - 2011) As palavras classificadas como advérbios agregam noções diversas aos termos a que se ligam na frase, demarcando posições, relativizando ou reforçando sentidos, por exemplo. O advérbio destacado é empregado para relativizar o sentido da palavra a que se refere em:',
    alternativas: [
      'utilizá-las em história presumivelmente verdadeira?',
      'Certamente me irão fazer falta,',
      'Afirmarei que sejam absolutamente exatas?',
      'desenterrarmos pacientemente as condições que a determinaram.',
    ],
    correta: 0,
    comentario:
      '“Presumivelmente” atenua a certeza sobre “verdadeira”, relativizando o sentido do adjetivo, como advérbio de dúvida. Em B, “certamente” afirma com força; em C, “absolutamente” reforça; e em D, “pacientemente” indica modo.',
  },
  {
    id: 'lp-invariaveis-qlivro13-42',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(MP-RS - Assessor - Bacharel em Ciências Jurídicas e Sociais - 2011) Fragmentos de texto: “(...) Muitas vezes, emprega-se a palavra direito em sentido axiológico como sinônimo de justiça. (...) De fato, as normas jurídicas representam as limitações impostas (...) Assim sendo, a saúde, definida como direito, deve inevitavelmente conter aspectos sociais e individuais. (...) Essa é a razão das normas jurídicas que obrigam à vacinação, ao tratamento, e mesmo ao isolamento de certas doenças”. Assinale com V (verdadeiro) ou F (falso) as afirmações abaixo, relativas ao sentido contextual de palavras e expressões do texto. ( ) A expressão Muitas vezes poderia ser substituída, sem alteração de sentido, por Não raro. ( ) A expressão De fato poderia ser substituída, sem alteração de sentido, por Com efeito. ( ) A expressão Assim sendo poderia ser substituída, sem alteração de sentido, por De todo modo. ( ) A palavra mesmo poderia ser substituída, sem alteração de sentido, por igualmente. A sequência correta de preenchimento dos parênteses, de cima para baixo, é:',
    alternativas: ['F-V-F-V', 'V-V-F-F', 'V-F-F-V', 'F-F-V-V', 'V-V-V-F'],
    correta: 1,
    comentario:
      '“Muitas vezes” e “não raro” são equivalentes, assim como “de fato” e “com efeito”, por isso as duas primeiras afirmações são verdadeiras. “Assim sendo” indica conclusão, e não equivale a “de todo modo”; e “mesmo”, aqui, é inclusão, não “igualmente”, o que torna as duas últimas falsas.',
  },
  {
    id: 'lp-invariaveis-qlivro13-43',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - SEFAZ/RJ - Auditor - 2011) Fragmentos de texto: “... é certo que a adoção, na prática, dessa possibilidade vem se dando de forma bastante tímida, muito em razão das inúmeras... ...discussões sobre a ampliação legal do rol das possibilidades desse tipo de responsabilização penal ganhem cada vez mais espaço no Brasil. ...ciclos de debates acerca dos instrumentos de controle da administração empresarial, promovidos por empresas que pretendem implementar, o quanto antes, práticas administrativas voltadas à prevenção de qualquer tipo de responsabilidade penal. Dessa realidade legal e da tendência político-criminal que dela se pode inferir, ganham importância, no espectro de preocupação não só das empresas estrangeiras situadas no Brasil... ... sob pena de serem responsabilizadas penal e administrativamente. (...)”. Assinale a palavra que, no texto, NÃO tenha valor adverbial.',
    alternativas: ['mais.', 'bastante.', 'penal.', 'só.', 'antes.'],
    correta: 0,
    comentario:
      'Em “cada vez mais espaço”, “mais” é pronome indefinido que se refere a “espaço”, e não advérbio. Os demais têm valor adverbial: “bastante” intensifica “tímida”, “só” restringe um termo em “não só das empresas”, “antes” indica tempo e “penal” modifica “responsabilizadas”.',
  },
  {
    id: 'lp-invariaveis-qlivro13-44',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Funiversa - SEPLAG/DF - Auditor Fiscal (Transp.) - 2011) (Adaptada) Sobre o trecho “A leitura, disparado, é a melhor forma de exercitar a memória”, a afirmação abaixo está correta ou incorreta? A construção do texto não seria aceita sob a ótica gramatical ou semântica caso fosse substituído o termo “disparado” por em alta velocidade.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: “disparado” funciona como advérbio de intensidade (equivale a “de longe”), e a locução “em alta velocidade” indica modo. A troca altera o sentido da frase, por isso a construção não se sustentaria.',
  },
  {
    id: 'lp-invariaveis-qlivro13-45',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Cesgranrio - Citepe - Supervisor de Produção Têxtil - 2011) Em “Diz ainda a lenda que a imperatriz fez um fino manto de seda para o imperador”, o elemento destacado é um conector de:',
    alternativas: ['inclusão', 'oposição', 'comparação', 'explicação', 'retificação'],
    correta: 0,
    comentario:
      '“Ainda”, nesse contexto, acrescenta mais uma informação à narrativa, com valor de adição ou inclusão. Oposição, comparação, explicação e retificação não correspondem ao sentido do trecho.',
  },
  {
    id: 'lp-invariaveis-qlivro13-46',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - Unesp - Advogado - 2012) O emprego da palavra meio, como no trecho — “... em linhas de um meio-dia.” —, repete-se, com o mesmo sentido, em:',
    alternativas: [
      'Ele encontrou na aspirina um meio de se livrar da dor de cabeça.',
      'O poeta tomou apenas meio comprimido de aspirina e sentiu-se aliviado.',
      'A indústria farmacêutica anda meio apurada com tanta demanda de remédios.',
      'Em meio à acirrada discussão, saiu do encontro com dor de cabeça.',
      'As pessoas ficam meio dependentes dos efeitos químicos da medicação.',
    ],
    correta: 1,
    comentario:
      '“Meio” em “meio-dia” e em “meio comprimido” tem o sentido de metade, funcionando como numeral. Nas demais, “meio” é substantivo (recurso, em “meio de”, ou ambiente, em “meio à discussão”) ou advérbio de intensidade (“meio apurada”, “meio dependentes”).',
  },
  {
    id: 'lp-invariaveis-qlivro13-47',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB - Instituto Rio Branco - Diplomata - 2013) Fragmento de texto: “Existe um rio secreto estabelecendo entre esses dois acontecimentos e numerosos outros uma revolução lenta, mas segura e concertada, a única que, rigorosamente, temos experimentado em toda a nossa vida nacional. Processa-se, É CERTO, sem o grande alarde de algumas convulsões de superfície, que os historiadores exageram frequentemente em seu zelo.” Sem prejuízo da correção gramatical e do sentido do texto, a expressão “é certo” poderia ser substituída por “corretamente”.',
    gabaritoCE: false,
    comentario:
      'A substituição não é adequada: em “Processa-se, é certo, sem o grande alarde”, a expressão tem valor de afirmação (é verdade, de fato), enquanto “corretamente” indica modo e mudaria o sentido do trecho.',
  },
  {
    id: 'lp-invariaveis-qlivro13-48',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Vunesp - PC/CE - Escrivão - 2015) Considere as frases do texto. • As pessoas são tão egocêntricas. • O mundo seria bem melhor se elas parassem de pensar nelas mesmas... É correto afirmar que os advérbios destacados nas frases expressam circunstância de:',
    alternativas: ['dúvida', 'negação', 'intensidade', 'modo', 'afirmação'],
    correta: 2,
    comentario:
      '“Tão” modifica o adjetivo “egocêntricas” e “bem” modifica o advérbio “melhor”, reforçando o grau em ambos os casos. Por isso expressam intensidade, e não dúvida, negação, modo ou afirmação.',
  },
  {
    id: 'lp-invariaveis-qlivro13-49',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - Compesa - Assistente de Saneamento e Gestão - 2016) A frase em que a palavra MAIS tem sentido diferente do das outras frases é:',
    alternativas: [
      '“A MAIS estranha coisa sobre o futuro é que alguém evocará nossa época como os bons e velhos tempos”.',
      '“O futuro não é MAIS o que costumava ser”.',
      '“Muito poucos são os que vivem no presente, a maioria se prepara para viver MAIS tarde”.',
      '“Devemos procurar MAIS sermos pais de nosso futuro do que filhos de nosso passado”.',
      '“Há ladrões que não castigamos, mas que nos roubam o que é MAIS precioso: o tempo”.',
    ],
    correta: 1,
    comentario:
      'Em B, “mais” equivale a “já não”, indicando que algo deixou de acontecer, sentido temporal que não aparece nas demais. Nas outras frases, “mais” expressa grau ou intensidade (a mais estranha, mais precioso) ou compõe “mais tarde”, sem a ideia de algo que deixou de ocorrer.',
  },
  {
    id: 'lp-invariaveis-qlivro13-50',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB - SEDF - Professor de Educação Básica (Língua Portuguesa) - 2017) Como modificadoras das palavras “prazer” (... me deu muito prazer) e “engraçadinha” (... está muito engraçadinha), a palavra “muito” que as acompanha é, do ponto de vista morfossintático, um advérbio.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: “muito” é advérbio só quando modifica o adjetivo “engraçadinha”; em “muito prazer”, acompanha o substantivo “prazer” e é pronome indefinido.',
  },
  {
    id: 'lp-invariaveis-qlivro13-51',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - PC/SP - Investigador de Polícia - 2018) Muitos adjetivos, permanecendo imóveis na sua flexão de gênero e número, podem passar a funcionar como advérbio. O critério formal de diferenciação das duas classes de modificador é a variabilidade do primeiro e a invariabilidade do segundo. (Evanildo Bechara, Moderna Gramática Portuguesa. Adaptado) A análise do autor, citando o contexto em que um adjetivo pode funcionar como advérbio, está exemplificada com o termo destacado na seguinte passagem:',
    alternativas: [
      '... mais do que o rigor ou o tamanho da pena, é o principal fator de dissuasão.',
      '... levou o país a abrigar a terceira maior população carcerária do mundo...',
      'Deve-se caminhar, ainda, no sentido da integração com a criação de bases de dados...',
      'Tudo isso depende, claro, da superação da crise orçamentária...',
      'Parte considerável das prisões resulta de casos de flagrante...',
    ],
    correta: 3,
    comentario:
      'Em “depende, claro, da superação”, “claro” é adjetivo que funciona como advérbio de afirmação, sem flexão, como no exemplo de Bechara. Nas demais, os termos destacados concordam com substantivos ou pertencem a outra classe.',
  },
  {
    id: 'lp-invariaveis-qlivro13-52',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - TCE/PI - Assistente de Administração - 2021) (Adaptada) Em todas as frases abaixo, há a presença do vocábulo mais. A frase em que esse vocábulo mostra valor diferente dos demais é:',
    alternativas: [
      '“...doenças pulmonares mais obstrutivas...”',
      '“...o emprego de papel mais poroso...”',
      '“...filtros com mais perfurações...”',
      '“...mais profundas e prolongadas as inalações...”',
      '“...falta de instrução das populações mais pobres...”',
    ],
    correta: 2,
    comentario:
      'Nas alternativas A, B, D e E, “mais” modifica um adjetivo (obstrutivas, poroso, profundas, pobres) com valor de grau. Em C, “mais” é pronome indefinido que se refere ao substantivo “perfurações” e expressa quantidade, por isso o sentido é diferente.',
  },
  {
    id: 'lp-invariaveis-qlivro13-53',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - PC/RJ - Perito Legista - 2021) Como é sabido, os adjetivos e advérbios podem receber graus comparativo ou superlativo; a frase abaixo em que ocorre a gradação de um advérbio é:',
    alternativas: [
      'Ela canta bem alto quando toma banho.',
      'Ele agora está muito forte.',
      'Que extraordinariamente amável é sua secretária.',
      'Caminhou bastante tempo até a fábrica.',
      'Não saiu daqui muito convencido.',
    ],
    correta: 0,
    comentario:
      'Em “canta bem alto”, o advérbio “alto” recebe a intensificação de “bem”, o que mostra um advérbio em grau superlativo analítico. Nas demais, a intensificação incide sobre adjetivos (forte, amável, convencido), ou “bastante” modifica um substantivo.',
  },
  {
    id: 'lp-invariaveis-qlivro13-54',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE/UnB - DPE-RS - Defensor Público - 2022) Fragmento de texto: “Nessa sociedade líquido-moderna de hiperconsumidores, o desejo satisfeito pelo consumo gera a sensação de algo ultrapassado; o fim de um consumo significa a vontade de iniciar qualquer outro. Nessa vida de hiperconsumo e para o hiperconsumo, a pessoa natural fica tentada com a gratificação própria imediata, mas, ao mesmo tempo, os cérebros não conseguem compreender o impacto cumulativo em um nível coletivo. Assim, um desejo satisfeito torna-se quase tão prazeroso e excitante quanto uma flor murcha ou uma garrafa de plástico vazia.” No último período do quarto parágrafo, o vocábulo “Assim” é um advérbio que se refere ao modo como um desejo satisfeito torna-se prazeroso e excitante.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada: “assim”, no início do período, não indica modo, e sim conclusão, pois retoma o raciocínio anterior. A comparação que se segue decorre do argumento, e não de uma maneira de agir.',
  },
  {
    id: 'lp-invariaveis-qlivro13-55',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FCC - DPE/SP - Agente de Defensoria - 2010) (Adaptada) Fragmento de texto: “Até umas três gerações atrás, boa parte da sustentação emocional e material das pessoas vinha dos familiares. Hoje convivemos muito mais com amigos e desconhecidos...”. A afirmação abaixo está correta ou incorreta? O emprego da preposição “Até” indica um limite de tempo, que se opõe à afirmativa introduzida pelo advérbio “Hoje”.',
    gabaritoCE: true,
    comentario:
      'Certo. “Até” é preposição que marca o limite final de um intervalo de tempo, contado a partir de “umas três gerações atrás”, e “Hoje” introduz o presente, em oposição a esse período passado. Por isso, o item descreve corretamente a relação de oposição entre as duas expressões de tempo.',
  },
  {
    id: 'lp-invariaveis-qlivro13-56',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Funiversa - Sejus/DFT - Ciências Contábeis - 2010) (Adaptada) Texto para as questões 18 e 19: “Era uma menina morena que chorava muito, ainda com o cordão umbilical, embrulhada em uma sacola de papel.” A afirmação abaixo está correta ou incorreta? A substituição de “ainda” por “ainda que” modifica o sentido da frase em que se insere, porque, no original, o vocábulo “ainda” tem valor de tempo e, na reescrita, passa a estabelecer uma relação de oposição, de concessão.',
    gabaritoCE: true,
    comentario:
      'Certo. No original, “ainda” indica tempo, com o sentido de “até aquele momento”. Na reescrita com “ainda que”, a locução introduz uma oração concessiva, que expressa oposição. Como a troca altera o sentido da frase, a afirmação está correta.',
  },
  {
    id: 'lp-invariaveis-qlivro13-57',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobras - Administrador Júnior - 2010) O termo destacado expressa uma circunstância de causa em:',
    alternativas: [
      '“entretanto, pelas inseguranças, medos e raivas,”',
      '“...que impactam pelo resto da vida,”',
      '“No direito e na medicina isso é mais complexo,”',
      '“pode ser perfeitamente aplicável daqui a um tempo.”',
      '“...e, com absoluta certeza,”',
    ],
    correta: 0,
    comentario:
      'Alternativa A correta: em “pelas inseguranças, medos e raivas”, a expressão indica a causa das reações descritas no período, pois são as inseguranças, os medos e as raivas que motivam o que se afirma. As demais expressões têm outras circunstâncias: “pelo resto da vida” indica tempo, “No direito e na medicina” indica âmbito, “daqui a um tempo” indica tempo futuro, e “com absoluta certeza” indica modo.',
  },
  {
    id: 'lp-invariaveis-qlivro13-58',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - BNDES - Engenheiro - 2011) “...e às vezes lhe passava um recado ou uma correspondência.” / “isso existe às pampas.” Quais as locuções destacadas que encerram, respectivamente, as mesmas circunstâncias das destacadas nos trechos transcritos acima?',
    alternativas: [
      'Aos poucos, ele ia percebendo que não precisava mais dela. / Nada em volta causava mais surpresa.',
      'Saiu às pressas porque tinha um compromisso. / De vez em quando, é preciso repensar as estratégias.',
      'Vá em frente que você encontrará o que procura. / De modo algum aceitarei a proposta feita pelo meu superior.',
      'Em breve, estarei terminando de escrever minha biografia. / Trabalhou em excesso para apresentar seu projeto final.',
      'A notícia chegou de súbito causando, assim, um grande impacto. / Hoje em dia, as pessoas pensam mais nelas próprias.',
    ],
    correta: 3,
    comentario:
      'Alternativa D correta: “Em breve” indica tempo, como “às vezes”, e “em excesso” tem valor de intensidade, como “às pampas” no sentido de abundância. As demais combinações trocam pelo menos uma das circunstâncias do par original, por isso não atendem ao enunciado.',
  },
  {
    id: 'lp-invariaveis-qlivro13-59',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Vunesp - Pref. Sorocaba/SP - Procurador - 2012) Fragmento de texto: “(...) O menor problema do Brasil é se sua economia passará a do Reino Unido, como a mídia britânica noticiou. Um defeito grave por aqui continua sendo a falta de valores civilizatórios – e nenhum sinal de melhora desse cenário no médio prazo. (...)”. Analise as afirmações. I. Na oração – ... parei ontem em frente à rodoviária de Brasília. – (1.º parágrafo), o advérbio em destaque é indicativo de tempo passado. II. Na oração – ... o Brasil termina este ano como a 6.ª maior economia do mundo. – (1.º parágrafo), a expressão em destaque está empregada com valor adverbial, indicativa de lugar. III. Na oração – Um defeito grave por aqui continua sendo a falta de valores civilizatórios... – (2.º parágrafo), o advérbio em destaque refere-se à cidade de Brasília. Está correto o que se afirma em:',
    alternativas: ['I, apenas', 'II, apenas', 'I e III, apenas', 'II e III, apenas', 'I, II e III'],
    correta: 0,
    comentario:
      'Alternativa A correta: apenas a afirmação I está certa, pois “ontem” situa a ação no passado e, por isso, indica tempo passado. A afirmação II não se sustenta, porque a expressão destacada não indica lugar. A III erra ao tomar “aqui” como referência à cidade de Brasília, quando o advérbio se refere ao próprio país.',
  },
  {
    id: 'lp-invariaveis-qlivro13-60',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB - EAGS — Sargento - 2012) Leia: “Viramundo estranhamente se recusava a comer. Afastara-se e contemplava em silêncio a paisagem. Havia nela algo vagamente familiar”. Os advérbios destacados acima indicam, respectivamente, as circunstâncias de:',
    alternativas: [
      'modo, intensidade, finalidade',
      'negação, lugar, intensidade',
      'modo, modo, intensidade',
      'negação, modo, negação',
    ],
    correta: 2,
    comentario:
      'Alternativa C correta: “estranhamente” e “em silêncio” indicam modo, pois descrevem como Viramundo se recusava a comer e como contemplava a paisagem, e “vagamente” intensifica o adjetivo “familiar”, com valor de intensidade. As demais atribuem a essas palavras circunstâncias de negação, lugar ou finalidade que não correspondem ao sentido do trecho.',
  },
  {
    id: 'lp-invariaveis-qlivro13-61',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fundep - Pref. de Bela Vista de MG - Técnico de Enfermagem - 2014) Assinale a alternativa em que a palavra destacada é um advérbio.',
    alternativas: [
      '“Essa definição aparece por último, como informal e recente”',
      '“Nada podia ser igual ao que a realeza usava”',
      '“Não foi possível manter esse controle por muito tempo”',
      '“As classes mais pobres passavam a ter acesso a cópias dos acessórios reais”',
    ],
    correta: 3,
    comentario:
      'Alternativa D correta: em “mais pobres”, o “mais” intensifica o adjetivo “pobres”, função típica de advérbio. Na alternativa A, a palavra destacada é adjetivo (“recente”); em B, “Nada” é pronome indefinido; e em C, “muito” acompanha o substantivo “tempo”, como adjetivo indefinido.',
  },
  {
    id: 'lp-invariaveis-qlivro13-62',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - TJ/SP - Médico Judiciário - 2019) No trecho do último parágrafo – quem controla o robô “ainda” é o ser humano –, o termo destacado apresenta circunstância adverbial de',
    alternativas: [
      'afirmação, como em: “tende a recuperar cada vez mais sua importância”',
      'tempo, como em: “pode discutir, remotamente, diversos casos”',
      'tempo, como em: “Hoje médicos pedem muitos exames”',
      'afirmação, com em: “progressão tecnológica, claro, mas mais importante”',
      'intensidade, como em: “tornando-a mais esperta”',
    ],
    correta: 2,
    comentario:
      'Alternativa C correta: “ainda” indica tempo, ou seja, que a situação continua até o momento, e o exemplo “Hoje médicos pedem muitos exames” ilustra justamente a circunstância de tempo. A alternativa B erra no exemplo, pois “remotamente” indica modo; A e D classificam como afirmação um termo que não tem esse valor; e E atribui intensidade a um exemplo que não corresponde ao termo destacado.',
  },
  {
    id: 'lp-invariaveis-qlivro13-63',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - TJ/RS - Oficial de Justiça - 2020) A frase abaixo em que a substituição do segmento sublinhado por um advérbio foi feita de forma adequada é:',
    alternativas: [
      'Sem que se entendesse o motivo, o convidado aborreceu-se na festa / irresponsavelmente',
      'Ia à academia poucas vezes / habitualmente',
      'Dirigia com toda a atenção / atenciosamente',
      'Mesmo sem estudo realizou a tarefa a contento / intuitivamente',
      'Enfrentou as dificuldades com coragem / ferozmente',
    ],
    correta: 3,
    comentario:
      'Alternativa D correta: “a contento” indica modo, e a troca por “intuitivamente” mantém a ideia de como a tarefa foi realizada, sem estudo prévio. As demais substituições alteram o sentido do segmento original ou a adequação da frase, por isso não são aceitas pelo gabarito.',
  },
];
