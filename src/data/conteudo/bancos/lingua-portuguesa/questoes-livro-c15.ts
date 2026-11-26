import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 15 — Conjunção), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C15: QuestaoTreino[] = [
  {
    id: 'lp-invariaveis-qlivro15-01',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - AB1N - Oficial de Inteligência - 2008) A relação que a oração iniciada por “e as respostas” (... o mundo tornou-se intensamente complexo e as respostas não são diretas nem estáveis) mantém com a anterior mostra que a função da conjunção “e” corresponde à função de “por isso”.',
    gabaritoCE: true,
    comentario:
      'Certo. A oração “e as respostas não são diretas nem estáveis” decorre do que foi dito antes, que o mundo se tornou complexo, e o “e” assume esse valor conclusivo, equivalente a “por isso”. A conjunção é aditiva em regra, mas o contexto a aproxima da conclusão, e a questão testa justamente essa mudança de sentido.',
  },
  {
    id: 'lp-invariaveis-qlivro15-02',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB - EAGS - Sargento - 2008) Marque a alternativa em que a conjunção coordenativa “e” estabelece somente relação de adição entre as orações.',
    alternativas: [
      'Ia telefonar-lhe e desejar-lhe parabéns.',
      'Ninguém me disse nada, e entendi de imediato.',
      '“O sol ardia sobre o pasto maltratado e secava os lameirões da estrada torta.”',
      'A chuva caiu pela manhã, e a festa de aniversário ao ar livre não foi cancelada.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a única em que o “e” apenas soma duas ações, sem contraste nem conclusão. Em B e D, o “e” pode ser trocado por “mas” sem prejuízo, o que mostra o valor adversativo. Em A, o “e” liga duas ações cuja relação é de finalidade, equivalente a “para desejar-lhe”.',
  },
  {
    id: 'lp-invariaveis-qlivro15-03',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - CBM/ES - Oficial Bombeiro Militar — 2011) A expressão “bem como” (Os condutores de veículos passantes eram obrigados a prestar os serviços que deles fossem exigidos, bem como entregar seus animais) pode ser substituída pela conjunção “e”, com a devida alteração de pontuação, sem prejuízo para o sentido do texto.',
    gabaritoCE: true,
    comentario:
      'Certo. “Bem como” funciona como uma correlação aditiva enfática, que soma as obrigações (prestar os serviços e entregar os animais), e o “e” exerce o mesmo papel de adição. Com a troca e o ajuste da vírgula, o sentido do texto se mantém.',
  },
  {
    id: 'lp-invariaveis-qlivro15-04',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - IRBr - Diplomata — 2009) Fragmento de texto: “As relações sociais institucionalizadas pela participação do homem nas diversas comunidades da contemporaneidade não degradam ou deformam a consciência individual... (...)”. Por fazer parte de uma estrutura sintática negativa, a conjunção “ou”, em “não degradam ou deformam”, equivale semanticamente a “nem”.',
    gabaritoCE: true,
    comentario:
      'Certo. Em uma frase negativa, o “ou” perde o valor alternativo e passa a negar as duas ações ao mesmo tempo, com o sentido de “nem”. A questão mostra que o sentido de uma conjunção depende do contexto, e não apenas da lista de classificação.',
  },
  {
    id: 'lp-invariaveis-qlivro15-05',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - EEAR - Sargento - 2002) Observe o período: “Eu desejava mais uma blusa: quem viaja está sempre pensando em alegrias que, de volta, pode dar aos amigos”. Substituindo-se os dois pontos por uma conjunção ou locução conjuntiva, a relação entre as orações estará correta em:',
    alternativas: [
      'Eu desejava mais uma blusa, assim quem viaja está sempre pensando...',
      'Eu desejava mais uma blusa, na medida em que quem viaja está sempre pensando...',
      'Eu desejava mais uma blusa, desde que quem viaja está sempre pensando...',
      'Eu desejava mais uma blusa, à medida que quem viaja está sempre pensando...',
    ],
    correta: 1,
    comentario:
      'A relação entre as orações é de causa: o desejo de mais uma blusa é explicado pela viagem e pelas alegrias que se pode trazer. “Na medida em que” é locução causal, por isso é a resposta. “À medida que” indica proporção, “desde que” indica condição e “assim” não estabelece causa.',
  },
  {
    id: 'lp-invariaveis-qlivro15-06',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FUMARC - CEMIG/MG - Advogado Jr. - 2018) Atente para a semântica introduzida pelos conectivos (palavras ou locuções) destacados e assinale a afirmação INCORRETA:',
    alternativas: [
      '“O mundo está sem ordem e valores, como disse Dostoievski: ‘Se Deus não existe, tudo é permitido’”. — Ideia de comparação.',
      '“... as luzes da razão poderiam colocar o homem como gerador de sua história. Mas tudo não passou de um sonho, um sonho de verão (parodiando Shakespeare).” — Ideia de adversidade.',
      '“Restou-nos o refúgio nos grandes espetáculos, como os do Coliseu antigo: o pão e o circo, para preencher o vazio da vida.” — Ideia de finalidade.',
      '“Harvey põe o dedo na ferida ao dizer que o projeto do Iluminismo já era, na origem, uma ‘patranha’, na medida em que disparava um discurso redentor para o homem com as luzes da razão, em troca da lenta e gradual perda de sua liberdade.” — Ideia de proporcionalidade.',
    ],
    correta: 0,
    comentario:
      'A afirmação incorreta é a A: o “como” de “como disse Dostoievski” introduz uma citação e tem valor conformativo, não comparativo. As demais têm sentidos adequados quanto ao “mas” e ao “para”. A alternativa D merece atenção, pois “na medida em que” é causal na norma culta, e não proporcional, mas a banca marcou A como resposta.',
  },
  {
    id: 'lp-invariaveis-qlivro15-07',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - EEAR - Sargento - 2000) Assinalar a alternativa em que a conjunção estabelece a mesma relação que se verifica em “Bandeira livre e bandeira oficial foram comuns, posto que em graus diversos, a todo o Brasil”.',
    alternativas: [
      'Fez tudo direito sem que eu lhe ensinasse.',
      'Não sairás daqui sem que antes me confesses tudo.',
      'Não podem ver um brinquedo sem que o queiram comprar.',
      'Sairás sem que te vejam.',
    ],
    correta: 0,
    comentario:
      'No trecho original, “posto que” tem sentido concessivo, equivalente a “embora”. A alternativa A tem “sem que” com o mesmo valor concessivo, pois equivale a “embora eu não lhe ensinasse”. Em B, “sem que” equivale a “se não” e indica condição; em C, indica consequência; e em D, indica modo.',
  },
  {
    id: 'lp-invariaveis-qlivro15-08',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - TRE/PA - Técnico Judiciário - 2011) Ficam hibernando à espera do momento eleitoral quando deveriam estar em praça pública em busca de militantes e se expondo ao debate. A conjunção “quando”, no período acima, tem valor:',
    alternativas: ['proporcional', 'comparativo', 'consecutivo', 'temporal', 'concessivo'],
    correta: 4,
    comentario:
      'A conjunção “quando” aqui marca oposição entre o que os políticos fazem e o que deveriam fazer, com valor concessivo (= embora deveriam). A leitura temporal é a armadilha mais comum, pois “quando” geralmente indica tempo. As demais alternativas (proporção, comparação e consequência) não se ajustam à ideia de contraste do período.',
  },
  {
    id: 'lp-invariaveis-qlivro15-09',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - SEAD/AP - Fiscal da Receita Estadual - 2010) Deve-te isso ao fato de as instituições brasileiras terem sido concebidas de forma coercitiva e unilateral, não havendo diálogo entre governantes e governados, mas apenas a imposição de uma lei e de uma ordem consideradas artificiais, quando não inconvenientes aos interesses das elites políticas e econômicas de então. A respeito do uso do vocábulo “quando” no fragmento acima, pode-se afirmar que se trata de uma conjunção:',
    alternativas: [
      'Subordinativa com valor semântico de condição.',
      'Coordenativa com valor semântico de tempo.',
      'Coordenativa com valor semântico de finalidade.',
      'Subordinativa com valor semântico de concessão.',
      'Coordenativa com valor semântico de explicação.',
    ],
    correta: 0,
    comentario:
      'A conjunção “quando” é subordinativa e, no trecho, indica condição: as instituições seriam inconvenientes se não atendessem aos interesses das elites, o que se lê como hipótese. Por ser subordinativa, descarta as coordenativas B, C e E. A concessão (D) não se sustenta, pois não há ideia de “embora” diante de um fato já admitido.',
  },
  {
    id: 'lp-invariaveis-qlivro15-10',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(ENEM - Vestibular - 2001) O mundo é grande / O mundo é grande e cabe / Nesta janela sobre o mar. / O mar é grande e cabe / Na cama e no colchão de amar. / O amor é grande e cabe / No breve espaço de beijar. ANDRADE, Carlos Drummond de. Poesia e prosa. Rio de Janeiro, Nova Aguilar, 1983. Nesse poema, o poeta realizou uma opção estilística: a reiteração de determinadas construções e expressões linguísticas, como o uso da mesma conjunção para estabelecer a relação entre as frases. Essa conjunção estabelece, entre as ideias relacionadas, um sentido de:',
    alternativas: ['oposição', 'comparação', 'conclusão', 'alternância', 'finalidade'],
    correta: 0,
    comentario:
      'A conjunção “e” tem sentido de oposição, equivalente a “mas”: a grandeza do mundo, do mar e do amor contrasta com a pequenez da janela, da cama e do “breve espaço” do beijo. O sentido aditivo, que seria o comum para o “e”, não traz a tensão que o poema constrói. Comparação, conclusão, alternância e finalidade não descrevem a relação entre as frases.',
  },
  {
    id: 'lp-invariaveis-qlivro15-11',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(UERJ — Vestibular — 2000) “Só não se inventou uma máquina de fazer versos — já havia o poeta parnasiano.” (linha 9) Nesse trecho a opção pelo emprego do travessão evita a utilização explícita de um conectivo entre as duas orações. Mantidos o sentido original e a coerência textual, o autor poderia ter optado pelo uso da seguinte conjunção:',
    alternativas: ['pois', 'quando', 'entretanto', 'se bem que'],
    correta: 0,
    comentario:
      'O travessão substitui uma conjunção que explica a frase anterior: não se inventou a máquina porque o poeta parnasiano já havia feito esse trabalho. “Pois” tem esse valor explicativo e mantém o sentido e a coerência. “Quando” indica tempo, “entretanto” marca oposição e “se bem que” indica concessão, o que alteraria a relação entre as orações.',
  },
  {
    id: 'lp-invariaveis-qlivro15-12',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(ACCESS - Pref. Teresópolis/RJ - Professor II — 2005) Observe a relação semântica existente entre as orações: I. Sofreu tanto. Ficou doente. II. Estou gostando de outro. Já disse. III. A paixão é própria do ser humano. Todos podem senti-la. IV. Nunca mais se apaixonou. Se separou. Para dar sentido a cada item, a sequência correta das conjunções é:',
    alternativas: [
      'ou... ou — porque — quando — em que',
      'que — porque — enquanto — quando',
      'que — como — por isso — desde que',
      'conforme — mas — mas — se',
      'que — por isso — porque — embora',
    ],
    correta: 2,
    comentario:
      'A ordem correta é: I, consequência (“que”, em “tanto... que”); II, conformidade (“como”, em “como já disse”); III, conclusão (“por isso”); IV, tempo (“desde que”). A alternativa B traz “porque”, que é causal, no lugar da conformidade do item II, e as demais trazem conectivos que não formam o sentido pedido nos quatro itens.',
  },
  {
    id: 'lp-invariaveis-qlivro15-13',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(UEG — Núcleo - PC/GO - Delegado de Polícia - 2008) No trecho, “ela [a fortuna] é sempre amiga dos jovens: estes são menos judiciosos, mais aguerridos e mais audazes ao comandá-la”, os dois pontos podem ser substituídos sem prejuízo de sentido por:',
    alternativas: ['já que', 'portanto', 'contudo', 'ainda que'],
    correta: 0,
    comentario:
      'Os dois pontos introduzem a explicação do que foi dito antes: a fortuna é amiga dos jovens porque eles são mais audazes, o que é uma relação causal. “Já que” é causal e preserva esse sentido. “Portanto” indicaria conclusão, “contudo” oposição e “ainda que” concessão, o que alteraria o raciocínio do trecho.',
  },
  {
    id: 'lp-invariaveis-qlivro15-14',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf - Auxiliar Judiciário - 2002) Já foram registradas na floresta amazônica brasileira 2.500 espécies de árvores. Em apenas um hectare são encontradas trezentas espécies de vegetais diferentes. _____________________, o consumo e a miséria são faces da mesma moeda. Alguns recursos naturais, renováveis ou não, são explorados de forma inescrupulosa e consumidos em ritmo superior à capacidade de renovação da natureza. Para unir as duas partes do texto de forma coerente, assinale a expressão correta.',
    alternativas: ['na medida em que', 'assim que', 'por muito que', 'à medida que', 'no entanto'],
    correta: 4,
    comentario:
      'A lacuna liga a riqueza biológica descrita ao problema do consumo, e a relação é de oposição, de quebra de expectativa: “no entanto” introduz a ideia contrária à anterior. “Na medida em que” e “à medida que” exprimem causa e proporção, sentidos que não casam com o trecho; “assim que” é temporal, e “por muito que” é concessiva, exigindo verbo no subjuntivo.',
  },
  {
    id: 'lp-invariaveis-qlivro15-15',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - EEAR - Sargento - 2003) Observe os períodos abaixo: I. Mal o leão se afastou, o rato não teve a menor dúvida. II. “Os animais devem ser adestrados, ao passo que os seres humanos devem ser educados.” III. Não obstante haja concluído um curso superior, é incapaz de redigir uma carta. IV. Pode criticar, desde que fundamente sua crítica em argumentos. As orações sublinhadas exprimem, respectivamente, circunstância de:',
    alternativas: [
      'tempo, proporção, concessão e condição',
      'causa, conformidade, condição e concessão',
      'tempo, proporção, condição e concessão',
      'condição, concessão, tempo e consequência',
    ],
    correta: 0,
    comentario:
      'I expressa tempo (“mal” = logo que), II expressa proporção (“ao passo que”), III é concessiva (“não obstante” com verbo no subjuntivo) e IV é condicional (“desde que” com verbo no subjuntivo indica hipótese). A sequência é tempo, proporção, concessão e condição, da alternativa A. As demais trocam ao menos um sentido, como causa ou conformidade, que não correspondem aos conectivos.',
  },
  {
    id: 'lp-invariaveis-qlivro15-16',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - EEAR - Sargento - 2003) Assinale a alternativa que apresenta a sequência correta quanto às conjunções coordenativas que preenchem adequadamente o texto abaixo, dando-lhe coerência. Ah, nós temos cinema! Todo mundo fala de um renascimento do cinema brasileiro _______ ele parece incontestável _______ ainda falta vencer um obstáculo fundamental o preconceito do espectador brasileiro que continua relutante em sair de casa para assistir a um filme nacional _______ os filmes têm dificuldade de conseguir muitas salas _______ não conseguem o sucesso que mereciam. (Rubens Ewald Filho)',
    alternativas: [
      'e — assim — contudo — por isso',
      'logo — pois — portanto — todavia',
      'e — mas — por isso — e',
      'pois — contudo — entretanto — mas',
    ],
    correta: 2,
    comentario:
      'A sequência que preenche as lacunas é “e”, “mas”, “por isso” e “e”: o primeiro “e” soma a constatação de que todos falam do renascimento, “mas” introduz a ressalva do obstáculo, “por isso” conclui a relação entre a dificuldade de salas e o insucesso, e o último “e” acrescenta uma constatação. As alternativas com “pois”, “logo” ou “portanto” forçam explicações ou conclusões que não cabem no contexto.',
  },
  {
    id: 'lp-invariaveis-qlivro15-17',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - EEAR - Sargento - 2003) A um secretário de escola foi dada a ordem de redigir um ofício para o prefeito da cidade com o seguinte conteúdo: I. Finalidade: pedido de conserto da parte hidráulica do prédio. II. Concessão: impedimento da regularidade das aulas. III. Tempo: o mais rápido possível. IV. Acordo: o previsto em reunião anterior. Utilizando as conjunções e locuções conjuntivas subordinativas, o corpo do texto corretamente produzido deverá ser:',
    alternativas: [
      'Conforme o combinado em assembleia de junho/2000, solicitamos de V.Exª a gentileza de enviar funcionário a esta escola, em caráter de urgência, para que seja feito o conserto da parte hidráulica do prédio. Embora os reparos impeçam o andamento das aulas, não podemos mais adiar a solução desse problema e, por isso, pedimos sua colaboração.',
      'Mesmo que não seja possível, solicitamos de V.Exª a gentileza de enviar funcionário a esta escola a fim de que seja feito o conserto da parte hidráulica do prédio. Contanto que os reparos impeçam o andamento das aulas, não podemos mais adiar a solução desse problema e, por isso, pedimos sua colaboração já que foi combinado em assembleia de junho/2000.',
      'Se for possível, solicitamos de V.Exª a gentileza de enviar funcionário a esta escola à medida que a parte hidráulica do prédio seja consertada. Para que os reparos impeçam o andamento das aulas, não podemos mais adiar a solução desse problema e, por isso, pedimos sua colaboração, apesar do que foi combinado em assembleia de junho/2000.',
      'Visto que é possível, solicitamos de V.Exª a gentileza de enviar funcionário a esta escola, posto que seja feito o conserto da parte hidráulica do prédio. Conforme os reparos impeçam o andamento das aulas, não podemos mais adiar a solução desse problema e, por isso, pedimos sua colaboração, porquanto tenha sido combinado em assembleia de junho/2000.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a que emprega, na ordem pedida, conectivos compatíveis com cada sentido: “conforme” para o acordo, “para que” para a finalidade e “embora” para a concessão. Nas demais, algum sentido aparece com conectivo que não lhe corresponde, como “contanto que” (condição) no lugar da concessão em B, ou “visto que” (causa) no início de D.',
  },
  {
    id: 'lp-invariaveis-qlivro15-18',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB - EEAR - Sargento da Aeronáutica - 2/2005) Observe as orações coordenadas sindéticas destacadas: 1. Ela sempre acende um cigarro, e não fuma. 2. Dormirei com dois cobertores, pois a temperatura diminuirá ainda mais esta noite. A seguir, assinale a alternativa correta quanto a sua classificação, respectivamente.',
    alternativas: [
      'adversativa - conclusiva',
      'aditiva - conclusiva',
      'aditiva - explicativa',
      'adversativa - explicativa',
    ],
    correta: 3,
    comentario:
      'Na oração 1, o “e” liga uma ideia contrária à anterior (acende o cigarro, mas não fuma), o que a torna adversativa, apesar da forma “e”. Na oração 2, o “pois” vem antes do sujeito com o sentido de “porque”, o que a torna explicativa, e não conclusiva. A sequência é adversativa - explicativa, da alternativa D.',
  },
  {
    id: 'lp-invariaveis-qlivro15-19',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(ITA - Vestibular - 2006) Considere as duas frases finais do texto, abaixo reproduzidas: (1) Mas talvez os shoppings, mesmo os mais sofisticados, como o Iguatemi, tenham se tornado democráticos demais para o gosto da classe alta paulista. (2) A cada pequeno entusiasmo econômico, logo a alvoroçada classe média da cidade resolve se intrometer aos bandos nas searas exclusivas dos muito ricos. Nota-se que a frase (2) apresenta uma relação de sentido com a frase (1). Essa relação ficaria explicitada se a frase (2) iniciasse por:',
    alternativas: ['apesar de que', 'tanto assim que', 'além disso', 'por isso', 'já que'],
    correta: 4,
    comentario:
      'A relação entre as frases é de causa: a intromissão da classe média a cada entusiasmo econômico ajuda a explicar a democratização excessiva dos shoppings. “Já que” é a conjunção causal que deixa esse vínculo explícito. “Apesar de que” indica concessão, “além disso” acrescenta uma ideia e “por isso” conclui, sentidos que não formulam a relação do trecho.',
  },
  {
    id: 'lp-invariaveis-qlivro15-20',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Esaf - TCU - Analista de Controle Externo - 2006) (Adaptada) A afirmação abaixo está correta ou incorreta? A conjunção “e” (Eles tentaram se libertar do pesadelo derivado de um dado histórico inequívoco: a voragem exterminista e genocida do capital e do capital financeiro em primeiríssimo lugar. E fracassaram.) pode ser substituída, sem prejuízo para a correção gramatical do período e para o sentido do texto, por “mas”.',
    gabaritoCE: true,
    comentario:
      'Correta. Em “E fracassaram”, o “e” marca oposição à tentativa de libertação, o que permite trocá-lo por “mas” sem prejuízo gramatical ou de sentido. Como a conjunção “e” é aditiva por natureza, esse valor adversativo depende do contexto, e é isso que a questão testa.',
  },
  {
    id: 'lp-invariaveis-qlivro15-21',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - EEAR - Sargento — 2007) “Conjunções (...) São vocábulos que existem para preencher as lacunas do pensamento de quem lê.” Assinale a alternativa que traz a correta sequência de conjunções que podem preencher os parênteses nos textos abaixo. 1. “O átomo é um monumento à sabedoria humana. (*) Um dia poderá ser a lápide de sua insensatez.” (Henry Adams) 2. “O que Deus fez em seis dias! Eu desfaço em um/ (*) Eu sou o lobo homem! Devoro-me a mim mesmo.” (Aridjis) 3. “A literatura deve ser vida. (*) O escritor deve ser o que escreve.” (Guimarães Rosa)',
    alternativas: [
      'e — porque — por isso',
      'porque — portanto — e',
      'mas — como — porquanto',
      'por conseguinte — visto que — pois',
    ],
    correta: 0,
    comentario:
      'A sequência A preenche as lacunas com “e” (soma, no primeiro texto), “porque” (explicação, no segundo) e “por isso” (conclusão, no terceiro). As demais sequências trocam pelo menos um desses valores, como “mas” ou “como” onde a relação é de soma ou explicação, e “portanto” ou “por conseguinte” onde não há conclusão.',
  },
  {
    id: 'lp-invariaveis-qlivro15-22',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(IIA - Vestibular - 2008) Fragmento de texto: “(...) que dizer de técnicos de futebol que vivem de terço na mão e medalhas de santos sob a camisa e que, em face de cada lance decisivo, as puxam para fora, as beijam e murmuram orações? Isso para não falar nos que consultam pais-de-santo e pagam promessas a Iemanjá. É como se dissessem: treino os jogadores, traço o esquema de jogo, armo jogadas, mas, independentemente disso, existem forças imponderáveis que só obedecem aos santos e pais-de-santo; são as forças do acaso. Mas não se pode descartar o fator psicológico que, como se sabe, atua sobre os jogadores de qualquer esporte; (...)”. No penúltimo parágrafo, a conjunção “mas” estabelece com os demais argumentos do texto uma relação de:',
    alternativas: ['restrição', 'adversidade', 'atenuação', 'adição', 'retificação'],
    correta: 3,
    comentario:
      'O “mas” do penúltimo parágrafo tem valor de adição: o autor acrescenta um fator, as forças do acaso, ao conjunto de explicações do desempenho, sem limitar, corrigir ou atenuar a tese anterior. Restrição, adversidade, atenuação e retificação não descrevem essa função de acrescentar um argumento ao texto.',
  },
  {
    id: 'lp-invariaveis-qlivro15-23',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - EAGS - Sargento - 2008) Leia: “Vem contemplar comigo o mar de minha saudade, que em murmurantes ondas canta o amor perdido”. Tomando a oração destacada e substituindo “em” por “as” e “canta” por “cantam”, a oração resultante deverá ser classificada sintaticamente como:',
    alternativas: [
      'subordinada adjetiva explicativa',
      'subordinada adjetiva restritiva',
      'coordenada conclusiva',
      'coordenada explicativa',
    ],
    correta: 3,
    comentario:
      'Com a substituição, a oração passa a ser “que as murmurantes ondas cantam o amor perdido”, com sentido de explicação do que se contempla, equivalente a “pois as ondas cantam o amor perdido”. Por isso a oração é coordenada explicativa, e não adjetiva, já que não qualifica um termo antecedente com valor restritivo. A conclusiva não cabe, pois não há ideia de conclusão.',
  },
  {
    id: 'lp-invariaveis-qlivro15-24',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Esaf - MPOG - Especialista em Políticas Públicas e Gestão Governamental - 2008) (Adaptada) A afirmação abaixo está correta ou incorreta? “(...) Até a pouco tempo atrás, havia sérias dúvidas sobre a capacidade de arregimentação dessas empresas pelo governo chinês. A imagem predominante era a de que elas realizavam incursões esporádicas e oportunistas em vários mercados, sem objetivos comuns. A compra de parte do capital acionário da Rio Tinto, entretanto, passa a mostrar um alinhamento entre os interesses do Estado e os das estatais enquanto empresas, para assegurar o suprimento de commodities que sustente a rápida expansão econômica.” O termo “entretanto” pode, sem prejuízo para a informação original do período, ser substituído por qualquer um dos seguintes: porém, contudo, todavia, conquanto, porquanto.',
    gabaritoCE: false,
    comentario:
      'Errado. “Entretanto” é conjunção adversativa, e porém, contudo e todavia também são adversativas. Já “conquanto” é concessiva e “porquanto” é explicativa (causal), de modo que trocar o conectivo por uma dessas altera a relação lógica do período.',
  },
  {
    id: 'lp-invariaveis-qlivro15-25',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - PROMINP - Administrador de PDMS - 2010) Considere o texto para verificar em que situações a substituição do “se” por “mesmo que” garante a equivalência de sentido entre os enunciados em destaque. I. Ficaria fácil escorrer os grãos se a bacia para lavar o arroz tivesse furinhos. (mesmo que a bacia para lavar o arroz tivesse furinhos). II. A explosão só acontece se há acúmulo de gás dentro da cozinha, (mesmo que haja acúmulo de gás na cozinha). III. Se o gás vazasse, saía para o ambiente externo, (mesmo que o gás vazasse). Há equivalência APENAS no apresentado em:',
    alternativas: ['I', 'II', 'III', 'I e II', 'II e III'],
    correta: 2,
    comentario:
      'Só em III o “se” tem valor concessivo: o gás sai para o ambiente externo independentemente de vazar ou não, o que equivale a “mesmo que”. Em I e II, o “se” exprime condição, pois a facilidade de escorrer e a explosão dependem de uma hipótese, e “mesmo que” introduz concessão, o que altera essa relação. Por isso só a alternativa C garante a equivalência.',
  },
  {
    id: 'lp-invariaveis-qlivro15-26',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Esaf - CVM - Agente Executivo - 2010) (Adaptada) Texto: “Onde as sociedades são mais justas, equilibradas, honestas e onde as necessidades sociais são mais satisfeitas, há menor risco para a atividade jornalística. Com esse cenário, os governos são mais honestos e o Estado é mais transparente; as empresas privadas menos corruptas e corruptoras e os cidadãos mais íntegros. Com isso, a atividade jornalística é mais segura e não necessita ir a fundo e substituir as tarefas delegadas ao Judiciário, à política e à polícia. Nem cobrar do Estado, por meio de estratégias investigativas que, para chegar à denúncia, envolvem o risco físico dos repórteres e jornalistas em geral. Assim, onde há mais corrupção em vários níveis do Estado e onde os negócios públicos são mais obscuros, envolvendo setores privados, todo bom jornalista corre mais risco, porque ele é o último recurso da voz pública, do cidadão, da esperança”. A afirmação abaixo está correta ou incorreta? O termo “Assim” confere ao período a noção de conclusão.',
    gabaritoCE: true,
    comentario:
      'Correta. O “Assim” encerra o raciocínio e apresenta uma conclusão a partir do cenário descrito antes: onde há mais corrupção, o jornalista corre mais risco. A noção é de conclusão, não de conformidade ou de causa.',
  },
  {
    id: 'lp-invariaveis-qlivro15-27',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Esaf - CVM - Agente Executivo - 2010) (Adaptada) Texto: “Onde as sociedades são mais justas, equilibradas, honestas e onde as necessidades sociais são mais satisfeitas, há menor risco para a atividade jornalística. Com esse cenário, os governos são mais honestos e o Estado é mais transparente; as empresas privadas menos corruptas e corruptoras e os cidadãos mais íntegros. Com isso, a atividade jornalística é mais segura e não necessita ir a fundo e substituir as tarefas delegadas ao Judiciário, à política e à polícia. Nem cobrar do Estado, por meio de estratégias investigativas que, para chegar à denúncia, envolvem o risco físico dos repórteres e jornalistas em geral. Assim, onde há mais corrupção em vários níveis do Estado e onde os negócios públicos são mais obscuros, envolvendo setores privados, todo bom jornalista corre mais risco, porque ele é o último recurso da voz pública, do cidadão, da esperança”. A afirmação abaixo está correta ou incorreta? O termo “porque” confere ao período a noção de condição.',
    gabaritoCE: false,
    comentario:
      'Errada. O “porque” introduz uma causa: explica por que o jornalista é o último recurso da voz pública. Uma condição exigiria uma conjunção condicional, como “se”, e o período não apresenta hipótese.',
  },
  {
    id: 'lp-invariaveis-qlivro15-28',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Esaf - MPOG - Analista de Planejamento e Orçamento - 2010) (Adaptada) A afirmação abaixo está correta ou incorreta? Provoca-se erro gramatical ou incoerência ao ligar os dois últimos períodos sintáticos (A evolução da renda per capita dependia das taxas de natalidade e mortalidade. A renda per capita da Inglaterra começou a crescer descolada da demografia...), pela conjunção “porquanto”, escrevendo o artigo em “A renda” com letra minúscula.',
    gabaritoCE: true,
    comentario:
      'Correta. “Porquanto” é conjunção explicativa, e a ligação pretendida cria uma relação de explicação entre a dependência das taxas e o crescimento da renda, que o texto não permite, pois o segundo período marca uma ruptura. A escrita do artigo com letra minúscula no início de frase é a outra incorreção apontada.',
  },
  {
    id: 'lp-invariaveis-qlivro15-29',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobras - Administrador Júnior - 2010) Em “Não minta para você, essa é a forma mais rápida de se perder”, relacionando a 2ª oração com a 1ª, o conectivo que NÃO poderia introduzir a 2ª oração, por provocar alteração do sentido inicial, é:',
    alternativas: ['porquanto', 'que', 'pois', 'logo', 'porque'],
    correta: 3,
    comentario:
      'A relação entre as orações é de explicação: não minta, porque essa é a forma mais rápida de se perder. “Porquanto”, “que”, “pois” e “porque” mantêm esse sentido explicativo ou causal. Só “logo” introduz conclusão, o que muda o sentido do período, por isso é a resposta.',
  },
  {
    id: 'lp-invariaveis-qlivro15-30',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Esaf - MTE - Auditor-Fiscal do Trabalho - 2010) (Adaptada) A afirmação abaixo está correta ou incorreta? “(...) A advertência vale para o Brasil, embora as causas do nosso déficit sejam diferentes das da União Europeia.” Mantém-se a correção gramatical do período e as informações originais ao se substituir “embora” por qualquer um dos seguintes termos: conquanto, se bem que, apesar de que, contanto que, consoante.',
    gabaritoCE: false,
    comentario:
      'Errado. “Conquanto”, “se bem que” e “apesar de que” são concessivas e podem substituir “embora”, mas “contanto que” introduz condição e “consoante” indica conformidade, o que altera o sentido concessivo do período. Basta um dos termos inadequados para tornar a afirmação incorreta.',
  },
  {
    id: 'lp-invariaveis-qlivro15-31',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - SUSEP - Analista Técnico - 2010) Assinale a opção que, ao substituir a oração sublinhada (“se o país não cresceu”), no texto abaixo, provoca erro gramatical e/ou incoerência textual. Sem vitória ou derrota, na comparação entre o pré e o pós-crise, a turbulência financeira que abalou o mundo trouxe perdas ao Brasil, mas no decorrer de 2009 os prejuízos foram recuperados e, se o país não cresceu, conseguiu ao menos fazer com que importantes indicadores econômicos e sociais empatassem com os que eram registrados em 2008 — ano do pico de desenvolvimento brasileiro.',
    alternativas: [
      'caso o país não cresceu.',
      'apesar de o país não crescer.',
      'mesmo o país não crescendo.',
      'embora o país não crescesse.',
      'ainda que o país não tenha crescido.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a que provoca erro gramatical: “caso” exige verbo no subjuntivo, e “não cresceu” no indicativo não pode seguir a conjunção, devendo ser “caso o país não crescesse”. As demais mantêm a correção e um sentido de concessão ou de condição compatível com o texto.',
  },
  {
    id: 'lp-invariaveis-qlivro15-32',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - BNDES - Engenheiro - 2011) “O diabo é que, de tanto ver, a gente banaliza o olhar,” (l. 10-11). Na linha argumentativa do texto, a oração “que a gente banaliza o olhar” em relação à oração “de tanto ver” encerra uma:',
    alternativas: ['causa', 'consequência', 'conformidade', 'condição', 'concessão'],
    correta: 1,
    comentario:
      'A oração “de tanto ver” indica a causa do desgaste do olhar, e “que a gente banaliza o olhar” é o resultado dessa causa: a banalização é consequência do muito ver. A correlação “tanto... que” típica da consequência confirma a leitura, enquanto causa, conformidade, condição e concessão não correspondem ao sentido do trecho.',
  },
  {
    id: 'lp-invariaveis-qlivro15-33',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - BNDES - Engenheiro - 2011) A conjunção/locução conjuntiva entre parênteses que NÃO expressa a mesma relação de sentido da conjunção/locução conjuntiva destacada é:',
    alternativas: [
      '“assim como não estamos aqui,” (l. 5-6) — (bem como)',
      '“...quando procuramos estar com alguém,” (l. 8) — (sempre que)',
      '“...porque gostamos,” (l. 9-10) — (ao passo que)',
      '“...para que elas venham até você.” (l. 25) — (a fim de que)',
      '“mas quem estava procurando por você!” (l. 27-28) — (porém)',
    ],
    correta: 2,
    comentario:
      'A relação de “porque gostamos” é de causa, e “ao passo que” indica proporção ou oposição, sentidos que não coincidem; por isso a alternativa C é a que não mantém o sentido. As demais equivalências se sustentam: “quando” e “sempre que” indicam tempo, “para que” e “a fim de que” indicam finalidade, e “mas” e “porém” indicam oposição.',
  },
  {
    id: 'lp-invariaveis-qlivro15-34',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - SEFAZ/RJ - Auditor-Fiscal da Receita Estadual - 2011) “É certo que a mudança do enfoque sobre o tema, no âmbito das empresas — principalmente, as transnacionais —, decorrerá também de ajustamentos de postura administrativa decorrentes da adoção de critérios de responsabilização penal da pessoa jurídica em seus países de origem. Tais mudanças, inevitavelmente, terão que abranger as práticas administrativas de suas congêneres espalhadas pelo mundo, afim de evitar respingos de responsabilização em sua matriz”. (l. 21-30) No trecho acima, as ocorrências da palavra QUE classificam-se, respectivamente, como:',
    alternativas: [
      'pronome relativo e preposição',
      'conjunção integrante e preposição',
      'conjunção integrante e conjunção integrante',
      'pronome relativo e conjunção integrante',
      'preposição e pronome relativo',
    ],
    correta: 1,
    comentario:
      'A primeira ocorrência, em “É certo que a mudança...”, introduz uma oração subjetiva e é conjunção integrante, pois não retoma nenhum termo anterior. A segunda, em “terão que abranger”, faz parte da locução “ter que” (= ter de) e tem valor de preposição. Nas demais, o pronome relativo não aparece no trecho, e a classificação não se sustenta.',
  },
  {
    id: 'lp-invariaveis-qlivro15-35',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - SEEC/RN - Professor de Língua Portuguesa - 2011) A articulação lógica entre as ideias expressada pelo emprego de conectivos em um texto é um fator de coerência. No trecho do Texto II “No trabalho, em que a comunicação pode custar dinheiro ou mesmo o sucesso profissional, um e-mail deve ser redigido com toda a atenção para não dar margem a mal-entendidos” (l. 14-17), o termo em destaque introduz, em relação à parte inicial, a ideia de:',
    alternativas: ['alternância', 'comparação', 'conclusão', 'contraste', 'proporção'],
    correta: 0,
    comentario:
      'O termo destacado, “ou”, apresenta duas possibilidades para a comunicação: custar dinheiro ou custar o sucesso profissional. Esse é o sentido de alternância, em que uma opção se coloca no lugar da outra. Comparação, conclusão, contraste e proporção não se aplicam a essa estrutura de opção.',
  },
  {
    id: 'lp-invariaveis-qlivro15-36',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - SEEC/RN - Professor de Língua Portuguesa - 2011) Um dos aspectos responsáveis por garantir a coerência textual é a relação lógica que se estabelece entre as ideias. Essa relação pode ser explicitada por conectores ou estar implícita na sequência textual. No trecho a seguir, estabelece-se uma relação lógica implícita entre os dois períodos. Na prática, não há garantia de que aprender uma dada quantidade de técnicas de escrita nos faça escrever melhor. Escrever, como ler, só será efetivamente um hábito qualificado se feito com prazer. Essa relação lógica entre os dois períodos pode ser expressa por:',
    alternativas: ['embora', 'por conseguinte', 'à medida que', 'a fim de que', 'sempre que'],
    correta: 1,
    comentario:
      'O segundo período decorre do primeiro: como não há garantia de melhora apenas pelas técnicas, a escrita só se torna hábito qualificado com prazer, o que é uma conclusão. “Por conseguinte” expressa conclusão e mantém o encadeamento. “Embora” seria concessão, “à medida que” proporção, “a fim de que” finalidade e “sempre que” tempo, nenhum deles adequado.',
  },
  {
    id: 'lp-invariaveis-qlivro15-37',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - SEEC/RN - Professor de Língua Portuguesa - 2011) A relação lógica estabelecida entre as ideias do Texto IV, por meio da palavra ou da expressão destacada, está exemplificada corretamente em:',
    alternativas: [
      'conclusão: “[...] algo que a humanidade vem fazendo há milhares de anos, desde que precisou sobreviver e viver melhor em ambientes diversos [...]” (l. 4-6)',
      'temporalidade: “A Era do Virtual é um caminho para essa perspectiva múltipla, e a mobilidade é um meio para o alcance da liberdade de expressão [...]” (l. 16-19)',
      'comparação: “Tal comportamento independe do que pensamos estar certo ou errado, pois este binômio não é mais aplicável com uma solução razoável.” (l. 27-29)',
      'causalidade: “[...] ampliando o espectro de conhecimentos dos alunos – uma vez que as instituições físicas, apenas mundo real, não serão mais capazes de fazer.” (l. 33-36)',
      'condição: “[...] os conteúdos não são mais simplesmente empacotados do professor para os alunos; mas são conteúdos que permitem a produção de parcelas enormes de contribuições pelo estudante.” (l. 46-49)',
    ],
    correta: 3,
    comentario:
      'A locução “uma vez que” introduz uma causa: as instituições físicas não serão capazes de fazer o que o mundo virtual permite, o que justifica a ampliação do espectro de conhecimentos. A alternativa A atribui conclusão a “desde que”, que indica tempo; B, temporalidade a “e”, que é aditivo; C, comparação a “pois”, que é explicativo; e E, condição a “mas”, que é adversativo.',
  },
  {
    id: 'lp-invariaveis-qlivro15-38',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRE/RN - Analista Judiciário — 2011) Mal sugeria imagem de vida (Embora a figura chorasse). É correto afirmar que a frase entre parênteses tem sentido:',
    alternativas: ['adversativo', 'concessivo', 'conclusivo', 'condicional', 'temporal'],
    correta: 1,
    comentario:
      'O “embora” introduz uma ideia que se opõe à anterior sem invalidá-la: a figura chorava, e isso não impedia que ela sugerisse vida. Esse é o valor concessivo, que o enunciado cobra. A leitura adversativa parece próxima, mas a frase admite o fato sem anular a principal, o que é próprio da concessão.',
  },
  {
    id: 'lp-invariaveis-qlivro15-39',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FAB - EPCAR - 2011/2012) (Adaptada) A afirmação abaixo está correta ou incorreta? “Inimaginável responder de forma mal educada aos mais velhos, professores ou autoridades...” (O conectivo sublinhado estabelece uma relação de inclusão entre os termos.)',
    gabaritoCE: true,
    comentario:
      'Correta. A conjunção “ou”, nesse contexto, liga termos da mesma função sintática (aos mais velhos, professores ou autoridades) e expressa inclusão: qualquer um desses grupos entra na situação descrita, sem exclusão entre eles.',
  },
  {
    id: 'lp-invariaveis-qlivro15-40',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - MI-CENAD - Analista de Sistemas - 2012) Considere o texto abaixo. “A teoria econômica evoluiu muito desde 1776, quando Adam Smith, em célebre obra investigou as causas das riquezas das nações. A teoria mostrou como funcionam os mercados, o papel da produtividade, as formas de aumentá-la e a função das instituições. Contribuiu, assim, para a formulação das políticas que trouxeram mais desenvolvimento e bem-estar. No Brasil, os economistas também contribuem para o desenvolvimento. Acontece que, se defenderem reformas em favor das maiorias, que causam perdas a minorias, os economistas serão rotulados de socialmente insensíveis. Quando um médico prescreve um tratamento, o objetivo é o bem-estar do paciente. Ninguém dirá que ele planeja o sofrimento. Mas, se os economistas sugerem medidas de austeridade para resolver desequilíbrios e restabelecer o crescimento sustentável, diz-se que eles propugnam ações para promover a recessão, o desemprego e a destruição de conquistas sociais. O receituário do médico incorpora esperança e simpatia, pois se sabe que o objetivo dele é a cura da doença. Sua ação é mais percebida por todos. A expectativa maior é de êxito. O diagnóstico é mais preciso, especialmente com os avanços da tecnologia. O economista não tem essas vantagens. No tratamento de crises, lida com incertezas, complexidades e situações inéditas. Os economistas tendem a errar mais que os médicos, mas seu foco jamais será a recessão pela recessão ou a austeridade sem propósito”. Preserva-se a coerência entre os argumentos do texto, bem como sua correção gramatical, ao:',
    alternativas: [
      'empregar um conectivo de valor condicional, como “Se”, em lugar de “Quando”;',
      'substituir a conjunção condicional “se” pelo conectivo “caso”;',
      'explicitar o valor explicativo da oração, inserindo a conjunção “pois” para ligar a oração iniciada por “Sua ação” com a anterior, mudando para minúscula a letra inicial de “Sua”;',
      'ligar as orações iniciadas por “O economista...” e “No tratamento”, em um mesmo período sintático, retirando o ponto-final e mudando para minúscula a letra inicial maiúscula de “No”;',
      'inserir a conjunção “Embora” no início do último período sintático do texto, mudando para minúscula a letra inicial de “Os”.',
    ],
    correta: 0,
    comentario:
      'A alternativa A preserva o sentido: “quando” indica tempo, mas, na frase, a ideia é de hipótese geral, e “se” condicional mantém a relação lógica sem erro gramatical. Em B, “caso” não admite o futuro do subjuntivo (“defenderem”). As alternativas C, D e E alteram a ligação entre as orações ou o sentido do último período sem justificativa no texto.',
  },
  {
    id: 'lp-invariaveis-qlivro15-41',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - CGU - Analista de Finanças e Controle - 2012) Cada alternativa traz um conectivo, que deve ser colocado na lacuna de mesma letra do fragmento. Assinale a opção em que esse preenchimento resulta em erro gramatical ou incoerência textual. A dívida pública brasileira é uma velha herança. (a) ______ aumentou consideravelmente nos anos 80, (b) ______ os juros internacionais subiram muito. Mais de 40 países foram arrastados pela crise da dívida, a partir de 1982. (c) ______ seus governos foram capazes de reorganizar as contas públicas e de reduzir o peso da dívida. (d) ______ o Brasil continuou prisioneiro do endividamento inflado naquele período e, além disso, permitiu o aumento de seu peso nos anos seguintes. (e) ______, a carga tributária brasileira é maior que a de todos ou quase todos os países emergentes e até mais pesada que a de algumas economias avançadas, como os EUA e o Japão.',
    alternativas: ['Portanto', 'quando', 'Porém', 'Mas', 'No entanto'],
    correta: 0,
    comentario:
      'A alternativa A é a que produz incoerência: “portanto” apresenta como conclusão o aumento da dívida nos anos 80, quando a frase anterior apenas diz que a dívida é uma herança, sem levar a essa consequência. Os demais conectivos se encaixam nas lacunas: “quando” liga um fato no tempo, e “porém”, “mas” e “no entanto” introduzem uma oposição coerente com o trecho.',
  },
  {
    id: 'lp-invariaveis-qlivro15-42',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - Pref./SP - Auditor-Fiscal do Município - 2012) O desenvolvimento corresponde a uma matriz endógena, gerada em nossas próprias sociedades, e [que] portanto não é possível importar. Propõe-se outra redação para a frase acima, a ser iniciada com “Não é possível importar o desenvolvimento...”. Para que o sentido e a correção originais sejam mantidos, a conexão desse início com o segmento destacado deve ser feita mediante o uso de:',
    alternativas: ['contudo', 'dado que', 'se bem que', 'no caso de', 'onde'],
    correta: 1,
    comentario:
      'A relação é de causa: o desenvolvimento nasce nas próprias sociedades, e por isso não pode ser importado. “Dado que” é locução que introduz essa causa e preserva o sentido e a correção. “Contudo” e “se bem que” são de oposição e concessão, “no caso de” introduz hipótese e “onde” é locativo, o que altera a relação.',
  },
  {
    id: 'lp-invariaveis-qlivro15-43',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRF (2ª R) - Técnico Judiciário - 2012) Os resultados preocupam. É indiscutível que a prática de esportes, associada a uma alimentação regrada, está diretamente ligada a uma vida mais saudável. Transformando as duas afirmativas acima em um só período, com as alterações necessárias, a conjunção que deverá uni-las está grifada em:',
    alternativas: [
      'Os resultados preocupam, pois é indiscutível ...',
      'Os resultados preocupam, contanto que seja indiscutível ...',
      'Os resultados preocupam, caso seja indiscutível...',
      'Os resultados preocupam, porém é indiscutível ...',
      'Os resultados preocupam, para que seja indiscutível ...',
    ],
    correta: 0,
    comentario:
      'A ligação entre as frases é de explicação: os resultados preocupam porque é indiscutível a relação entre esporte, alimentação e saúde. “Pois” é explicativa e mantém o sentido e a correção. “Contanto que” e “caso” introduzem condição, “porém” oposição e “para que” finalidade, o que não se encaixa no período.',
  },
  {
    id: 'lp-invariaveis-qlivro15-44',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/SP - Técnico Judiciário - 2012) Com o tempo se desenvolveram dentro da modalidade dois tipos de mamulengos. O rural é o mais tradicional, que conserva figuras alegóricas bíblicas, como a alma e o diabo, e cujo universo social reproduz os hábitos cotidianos, os valores culturais, os conflitos entre os humildes e as autoridades nas fazendas e povoados. Já o mamulengo urbano adota novas personagens e circunstâncias relacionadas à dinâmica das cidades e do tempo e mantém um enredo, embora não abra mão do improviso. (último parágrafo) As palavras grifadas acima denotam, considerando-se o contexto em que se apresentam, respectivamente, noção de:',
    alternativas: [
      'consequência da afirmativa anterior e conformidade com o fato expresso no mesmo segmento',
      'comparação com a declaração anterior e conclusão coerente para o que está sendo afirmado',
      'causa que justifica a declaração anterior e sua consequência imediata',
      'temporalidade e oposição ao que vem sendo expresso no parágrafo',
      'oposição ao que foi expresso na afirmativa anterior e ressalva que não invalida a declaração feita',
    ],
    correta: 4,
    comentario:
      'O “Já” inicia uma oposição ao que foi dito sobre o mamulengo rural, marcando a contraposição entre os dois tipos, e o “embora” admite uma ideia (o enredo) sem anular a outra (o improviso), o que é ressalva. Por isso E é a única que reúne oposição e ressalva. As demais atribuem consequência, causa, comparação ou temporalidade que não correspondem aos conectivos.',
  },
  {
    id: 'lp-invariaveis-qlivro15-45',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRF (2ª R) - Analista Judiciário - 2012) Victor fracassou porque cedeu a uma predisposição da natureza humana... O elemento grifado na frase acima tem o mesmo sentido de:',
    alternativas: ['ainda que', 'conquanto', 'enquanto', 'embora', 'uma vez que'],
    correta: 4,
    comentario:
      'O “porque” introduz a causa do fracasso, e “uma vez que” é a locução causal que tem o mesmo valor. As demais são concessivas (“ainda que”, “conquanto” e “embora”), que admitiriam uma ideia contrária sem invalidar o fracasso, ou temporal (“enquanto”), e não atendem ao sentido de causa.',
  },
  {
    id: 'lp-invariaveis-qlivro15-46',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRF (2ª R) - Analista Judiciário - 2012) Atente para estas frases, do 5º parágrafo do texto: I. Não podemos contar com a sorte. II. Daqui para frente, preservar é suor. Para articulá-las de modo a preservar o sentido do contexto, será adequado uni-las por intermédio deste elemento:',
    alternativas: ['no entanto', 'ainda assim', 'haja vista que', 'muito embora', 'por conseguinte'],
    correta: 4,
    comentario:
      'A frase II é consequência da I: se não podemos contar com a sorte, preservar passa a ser o caminho, o que é conclusão. “Por conseguinte” expressa conclusão e liga as ideias com a coerência do contexto. “No entanto”, “ainda assim” e “muito embora” indicam oposição ou concessão, o que contrariaria o encadeamento, e “haja vista que” é causal.',
  },
  {
    id: 'lp-invariaveis-qlivro15-47',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - INSS - Perito Médico Previdenciário - 2012) Com o avançar da idade, eles precisam de mais cálcio e vitaminas... Iniciando o período por “Eles precisam de mais cálcio e vitaminas”, o segmento grifado poderá passar corretamente a:',
    alternativas: [
      'à medida que a idade vai avançando',
      'conquanto a idade avance',
      'se a idade for avançando',
      'ainda que a idade vá avançando',
      'em comparação à idade que avança',
    ],
    correta: 0,
    comentario:
      'O segmento original indica proporção: quanto mais a idade avança, maior a necessidade. “À medida que” é a locução proporcional que preserva esse sentido e a correção, pois as duas situações se alteram juntas. As demais mudam o sentido: “conquanto” e “ainda que” são concessivas, “se” é condicional e “em comparação” não é conjunção, o que quebra a construção.',
  },
  {
    id: 'lp-invariaveis-qlivro15-48',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TCE/AP - Técnico de Controle Externo - 2012) Preços mais altos proporcionam aos agricultores incentivos para produzir mais, o que torna mais fácil a tarefa de alimentar o mundo. Mas eles também impõem custos aos consumidores, aumentando a pobreza e o descontentamento. (início do 2º parágrafo) A 2ª afirmativa introduz, em relação à 1ª, noção de:',
    alternativas: ['condição', 'temporalidade', 'consequência', 'finalidade', 'restrição'],
    correta: 4,
    comentario:
      'O “mas” da segunda afirmativa introduz uma restrição: os preços altos trazem benefícios, mas também custos aos consumidores. Não há condição, tempo, consequência ou finalidade, pois a segunda frase limita o alcance positivo da primeira sem a anular.',
  },
  {
    id: 'lp-invariaveis-qlivro15-49',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - CMB - Assistente Técnico - 2012) Em um texto, as frases relacionam-se umas com as outras, estabelecendo entre si relações que contribuem para a construção do sentido do texto. Essas relações podem não ser explicitadas por meio do uso de um conectivo, como é o caso das duas frases do fragmento abaixo. “Fui logo dizendo que não tinha, certa de que ele estava pedindo dinheiro. Não estava.” (l. 2-4) A relação construída entre essas duas frases pode ser expressa, sem alteração de sentido, pelo seguinte conectivo:',
    alternativas: ['onde', 'como', 'contudo', 'portanto', 'conforme'],
    correta: 2,
    comentario:
      'A segunda frase nega o que a primeira supunha (“certa de que ele estava pedindo dinheiro”), ou seja, há oposição entre a suposição e o fato. “Contudo” expressa essa quebra de expectativa e preserva o sentido. “Onde” é locativo, “como” comparativo ou conformativo, “portanto” conclusivo e “conforme” conformativo, nenhum deles marca oposição.',
  },
  {
    id: 'lp-invariaveis-qlivro15-50',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - IRBr - Diplomata - 2012) Fragmento de texto: “Escrevi para ele dizendo que não conhecia Joyce nem Virgínia Woolf nem Proust quando fiz o livro, porque o diabo do homem só faltou me chamar de representante comercial deles.” No terceiro período do texto, a oração iniciada pelo conector “quando” e a iniciada pelo conector “porque” indicam, respectivamente, as circunstâncias de tempo e causa relacionadas ao fato expresso na oração “que não conhecia Joyce nem Virgínia Woolf nem Proust”.',
    gabaritoCE: false,
    comentario:
      'Errado. O “quando” indica tempo, mas o “porque” não se relaciona à oração “que não conhecia Joyce...”: ele explica a atitude de escrever e de dizer isso, e não o fato de não conhecer os autores. A causa, portanto, não recai sobre o fato indicado.',
  },
  {
    id: 'lp-invariaveis-qlivro15-51',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - PC/CE - Inspetor - 2012) Texto para as questões 40 e 41. “O cientista político Phillippe Schmitter argumentou que, embora a situação europeia seja singular, seu progresso para além do Estado nacional tem uma pertinência mais genérica, pois o contexto contemporâneo favorece sistematicamente a transformação dos Estados em confederatii, condominii ou federatii, numa variedade de contextos”. O conector “embora” introduz um conteúdo que, mesmo sendo contrário à proposição contida no trecho “seu progresso para além do Estado nacional tem uma pertinência mais genérica”, não a invalida.',
    gabaritoCE: true,
    comentario:
      'Certo. “Embora” é concessivo: admite que a situação europeia é singular, o que é contrário ao trecho sobre a pertinência genérica, sem invalidar essa proposição. A concessão é o valor que a conjunção assume aqui, distinto da adversativa, que daria maior peso ao conteúdo seguinte.',
  },
  {
    id: 'lp-invariaveis-qlivro15-52',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - PC/CE - Inspetor - 2012) Texto para as questões 40 e 41. “O cientista político Phillippe Schmitter argumentou que, embora a situação europeia seja singular, seu progresso para além do Estado nacional tem uma pertinência mais genérica, pois o contexto contemporâneo favorece sistematicamente a transformação dos Estados em confederatii, condominii ou federatii, numa variedade de contextos”. O conector “pois” introduz ideia de consequência no trecho em que ocorre.',
    gabaritoCE: false,
    comentario:
      'Errado. O “pois” apresenta uma explicação para a afirmação anterior, ou seja, o progresso tem pertinência genérica porque o contexto favorece a transformação dos Estados. Quando vem depois de vírgula e antes do sujeito, com o sentido de “porque”, a conjunção é explicativa, e não consecutiva.',
  },
  {
    id: 'lp-invariaveis-qlivro15-53',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobras - Analista de Sistemas Júnior - 2012) As seguintes orações “Não ri nem sequer sorri.” (l. 43-44) e “Não faz uma pirueta.” (l. 44) podem ser reescritas em um único período, sem alteração de sentido em:',
    alternativas: [
      'Não ri nem sequer sorri, mas não faz uma pirueta.',
      'Embora não ria nem sequer sorria, não faz uma pirueta.',
      'Não ri nem sequer sorri, e não faz uma pirueta.',
      'Caso não ria nem sequer sorria, não faz uma pirueta.',
      'Não ri nem sequer sorri, porém não faz uma pirueta.',
    ],
    correta: 2,
    comentario:
      'As duas orações são independentes e apenas se somam, sem contraste nem condição, por isso a conjunção “e” é a que preserva o sentido. “Mas” e “porém” criariam oposição, “embora” uma concessão e “caso” uma condição, o que altera a relação entre as orações do original.',
  },
  {
    id: 'lp-invariaveis-qlivro15-54',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(CEPERJ - Degase - Psicólogo - 2012) Fragmento de texto: Título: EXCLUSÃO SOCIAL E VIOLÊNCIA. O acentuado crescimento da violência no Brasil, todos sabemos, tem como causa uma série de determinantes institucionais e fatores sociais... (...) A injustiça social, portanto, tem contribuído para o atual quadro de violência e de desumanidade, ao tempo em que tem transformado a liberdade de ir e vir numa utopia para os excluídos da sociedade. No título, emprega-se a conjunção aditiva “e” para ligar “exclusão” à “violência”. A leitura global do texto, entretanto, revela que não se trata de uma adição. A relação que o autor estabelece entre exclusão e violência, na verdade, é de:',
    alternativas: ['causalidade', 'proporcionalidade', 'temporalidade', 'adversidade', 'finalidade'],
    correta: 0,
    comentario:
      'O texto mostra que a exclusão social é causa da violência (“tem como causa”, “tem contribuído para o atual quadro”), e não uma soma. Por isso a relação é de causalidade, e o “e” do título, aditivo na forma, ganha esse sentido pela leitura global. Proporcionalidade, temporalidade, adversidade e finalidade não descrevem a relação entre as duas ideias.',
  },
  {
    id: 'lp-invariaveis-qlivro15-55',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - CREFITO/SP - Secretário da Presidência - 2012) Leia as frases. I. As novas regras integram um pacote de medidas que o governo estuda para melhorar o acesso a serviços de diagnóstico. II. O governo também quer incentivar cursos de capacitação de técnicos - que, segundo o ministro, são parte importante na qualidade do resultado do exame. As expressões em destaque estabelecem, correta e respectivamente, relação de:',
    alternativas: [
      'finalidade e conformidade',
      'causa e condição',
      'finalidade e consequência',
      'adversidade e adição',
      'temporalidade e conformidade',
    ],
    correta: 0,
    comentario:
      'A primeira expressão, “para melhorar”, indica finalidade: o governo estuda as medidas com o objetivo de melhorar o acesso. A segunda, “segundo o ministro”, indica conformidade, pois a informação é apresentada de acordo com a fala do ministro. A alternativa A é a única que associa essas duas noções na ordem certa.',
  },
  {
    id: 'lp-invariaveis-qlivro15-56',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FDC - Câmara Mun. Duque de Caxias/RJ - Técnico Legislativo - 2012) Altera-se o sentido fundamental de: “Mas, por importante que seja, essa informação pontual não é tudo” (§ 2) reescrevendo-se a oração entre vírgulas como:',
    alternativas: [
      'importante que seja',
      'conquanto muito importante',
      'sendo embora muito importante',
      'por mais que importante',
      'por ser muito importante',
    ],
    correta: 4,
    comentario:
      'A oração original tem valor concessivo: mesmo sendo importante, a informação não é tudo. “Por ser muito importante” muda para causa, e assim o sentido fundamental se altera, pois passa a dizer que a informação não é tudo por causa de sua importância. As demais mantêm a concessão, como “conquanto”, “por mais que” e “sendo embora”.',
  },
  {
    id: 'lp-invariaveis-qlivro15-57',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FDC - Câmara Mun. Duque de Caxias/RJ - Técnico Legislativo - 2012) “(...) A quantidade de livros ruins é uma grandeza, e são famosos os casos de clássicos ou de best-sellers que foram recusados por editora após editora até, finalmente, chamarem a atenção de alguém mais antenado. Ainda assim, um mundo sem editoras seria um caos para nós, leitores, que passaríamos mais tempo peneirando erros do que encontrando acertos. (...)” Na linha de argumentação desenvolvida no texto, a locução destacada em: “AINDA ASSIM, um mundo sem editoras seria um caos para nós, leitores” pode ser substituída, sem que o sentido do enunciado se altere, por:',
    alternativas: ['Sem dúvida', 'Outrossim', 'Por isso mesmo', 'Não obstante', 'Haja vista'],
    correta: 3,
    comentario:
      '“Ainda assim” introduz uma ressalva que contrasta com o que foi dito antes (há muitos livros ruins e casos de recusa), e “não obstante” tem esse valor de oposição ou concessão, equivalendo a “apesar disso”. As demais não têm o mesmo sentido: “sem dúvida” reforça, “outrossim” acrescenta, “por isso mesmo” conclui e “haja vista” é causal.',
  },
  {
    id: 'lp-invariaveis-qlivro15-58',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FIOCRUZ - EPSJV - Técnico (Ensino Médio) — 2011/2012) (...) Faz parte da nossa cultura gostar do local onde nascemos e vivemos, as pessoas são apegadas às suas cidades e querem que haja eventos nela. Só que esse sentimento saudável se transforma numa armadilha contra a própria população. (...). No trecho “Só que esse sentimento saudável se transforma numa armadilha contra a própria população”, a expressão sublinhada liga ideias. Para que mantenha o sentido apresentado no texto, ela pode ser substituída por:',
    alternativas: ['mas', 'embora', 'apesar de', 'e também', 'pois'],
    correta: 0,
    comentario:
      '“Só que” tem valor adversativo: o sentimento é saudável, mas se transforma em armadilha, o que contrasta com o que foi dito antes. “Mas” expressa essa mesma oposição e mantém o sentido do texto. “Embora” e “apesar de” seriam concessivas e mudariam a leitura, “e também” acrescenta e “pois” explica, sentidos que não cabem ao trecho.',
  },
  {
    id: 'lp-invariaveis-qlivro15-59',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(CEPERJ - SEFAZ - Analista de Controle Interno - 2013) “Suas sugestões, no entanto, não encontraram respaldo para serem postas em prática”. Dois conectivos que podem substituir adequadamente o destacado, sem alterar a ordem do segmento, mantendo-se o sentido, são:',
    alternativas: [
      'mas / porém',
      'logo / pois',
      'entretanto / contudo',
      'mesmo que / ainda que',
      'todavia / visto que',
    ],
    correta: 2,
    comentario:
      'Os dois conectivos precisam manter a posição intercalada do original. “Entretanto” e “contudo” são adversativos e podem ser deslocados entre vírgulas, mantendo o sentido. “Mas” não pode ficar no meio da oração, por isso a alternativa A não serve, e “logo” e “pois” não são adversativos.',
  },
  {
    id: 'lp-invariaveis-qlivro15-60',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRF 3ª R - Analista Judiciário - 2014) Reunir-se para ouvir alguém ler tornou-se uma prática necessária e comum no mundo laico da Idade Média. Até a invenção da imprensa, a alfabetização era rara e os livros, propriedade dos ricos, privilégio de um pequeno punhado de leitores. Embora alguns desses senhores afortunados ocasionalmente emprestassem seus livros, eles o faziam para um número limitado de pessoas da própria classe ou família. (Adaptado de: MANGUEL, Alberto, op. cit.) Mantêm-se a correção e as relações de sentido estabelecidas no texto, substituindo-se “Embora” (2º parágrafo) por:',
    alternativas: ['Contudo', 'Desde que', 'Porquanto', 'Uma vez que', 'Conquanto'],
    correta: 4,
    comentario:
      'O “embora” introduz uma concessão, admitindo que alguns senhores emprestavam livros sem que isso mude a restrição geral. “Conquanto” é concessiva e mantém a relação sem alterar a correção. “Contudo” é adversativa, “desde que” condicional, e “porquanto” e “uma vez que” são causais, sentidos que mudariam o encadeamento do parágrafo.',
  },
  {
    id: 'lp-invariaveis-qlivro15-61',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - Prefeitura de Niterói/RJ - Fiscal de Tributos - 2015) “Nunca possuímos tantas coisas como hoje, mesmo que as utilizemos cada vez menos”. A forma de reescrever esse período que indica incorreção ou modificação de seu sentido original é:',
    alternativas: [
      'Nunca possuímos tantas coisas como hoje, conquanto as utilizemos cada vez menos.',
      'Nunca possuímos tantas coisas como hoje, apesar de as utilizarmos cada vez menos.',
      'Nunca possuímos tantas coisas como hoje, não obstante utilizarmo-las cada vez menos.',
      'Nunca possuímos tantas coisas como hoje, malgrado as utilizemos cada vez menos.',
      'Nunca possuímos tantas coisas como hoje, no entretanto as utilizamos cada vez menos.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a incorreta: “no entretanto” não existe na norma culta, pois “entretanto” não admite a preposição “no” antes dela (a forma correta é “no entanto”). As demais locuções concessivas (“conquanto”, “apesar de”, “não obstante”, “malgrado”) mantêm o sentido de “mesmo que” e a correção.',
  },
  {
    id: 'lp-invariaveis-qlivro15-62',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - SEGEP/MA - Técnico da Receita Estadual (TI) - 2016) AINDA ASSIM, atravessou aquele 27 de julho em relativa normalidade. PORÉM, não houve resultado. Sem prejuízo da correção e do sentido, os elementos destacados acima podem ser substituídos, respectivamente, por:',
    alternativas: [
      'Desse modo — Conquanto',
      'Com isso — No entanto',
      'Não obstante — Contudo',
      'Portanto — Embora',
      'Todavia — Porquanto',
    ],
    correta: 2,
    comentario:
      '“Ainda assim” e “porém” são adversativos, e “não obstante” e “contudo” cumprem a mesma função sem alterar o sentido. A alternativa C mantém o contraste nas duas frases; as demais trocam por conclusão (“desse modo”, “com isso”, “portanto”) ou por causa (“porquanto”), ou por concessão (“conquanto”, “embora”), o que altera a relação.',
  },
  {
    id: 'lp-invariaveis-qlivro15-63',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(IBFC - EBSERH - Médico - 2017) A oração “Depois que arrumei ocupação à noite,...” é introduzida por uma locução conjuntiva que apresenta o mesmo valor semântico da seguinte conjunção:',
    alternativas: ['porquanto', 'conforme', 'embora', 'quando', 'pois'],
    correta: 3,
    comentario:
      '“Depois que” é uma locução temporal, que indica o momento em que a ação ocorreu, e “quando” tem o mesmo valor temporal. “Porquanto” e “pois” são causais ou explicativas, “conforme” é conformativa e “embora” é concessiva, nenhuma delas com valor de tempo.',
  },
  {
    id: 'lp-invariaveis-qlivro15-64',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fundep - Codemig - Auditor - 2018) Releia o trecho a seguir: “Não se trata simplesmente de subverter o poder, MAS de pensar de outra maneira [...]”. A palavra destacada confere ao trecho uma ideia de:',
    alternativas: ['retificação', 'oposição', 'contraste', 'compensação'],
    correta: 0,
    comentario:
      'O “mas” corrige a afirmação anterior, substituindo a ideia de subverter o poder por pensar de outra maneira: é a função de retificação, em que a segunda ideia corrige a primeira. Oposição, contraste e compensação são sentidos adversativos gerais, que não dão a ideia de correção de uma afirmação feita.',
  },
  {
    id: 'lp-invariaveis-qlivro15-65',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(VUNESP - TJ/SP - Médico Judiciário - 2019) A alternativa em que a expressão destacada estabelece relação de causa entre as ideias é:',
    alternativas: [
      'No difícil processo de reintegração, a literatura pode ser um meio eficaz visto que devolve à sociedade uma pessoa disposta a reescrever sua história.',
      'No difícil processo de reintegração, a literatura pode ser, portanto, um meio eficaz de devolver à sociedade uma pessoa disposta a reescrever sua história.',
      'Caso haja um difícil processo de reintegração, a literatura pode ser um meio eficaz de devolver à sociedade uma pessoa disposta a reescrever sua história.',
      'À medida que ocorra um difícil processo de reintegração, a literatura pode ser um meio eficaz de devolver à sociedade uma pessoa disposta a reescrever sua história.',
      'A literatura pode ser, no difícil processo de reintegração, um meio eficaz para que se devolva à sociedade uma pessoa disposta a reescrever sua história.',
    ],
    correta: 0,
    comentario:
      '“Visto que” é causal e explica por que a literatura pode ser um meio eficaz. “Portanto” é conclusiva, “caso” condicional, “à medida que” proporcional e “para que” final, por isso nenhuma delas indica causa.',
  },
  {
    id: 'lp-invariaveis-qlivro15-66',
    temaId: 'lp-invariaveis',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE - MPE-CE - Técnico Ministerial - 2020) A substituição da conjunção “porque”, em “essa afirmação pode ser inesperada para muitos, porque tendemos a negar tanto a existência quanto a importância dos rituais na nossa vida cotidiana”, pela locução “de modo que” preservaria os sentidos originais do texto.',
    gabaritoCE: false,
    comentario:
      'Errado. O “porque” introduz uma causa, ou seja, explica por que a afirmação pode parecer inesperada. “De modo que” é consecutiva, e inverte a relação: a inesperabilidade passaria a ser consequência de negar os rituais, o que altera o sentido original.',
  },
  {
    id: 'lp-invariaveis-qlivro15-67',
    temaId: 'lp-invariaveis',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - PC/RJ - Perito Legista - 2021) O valor básico da conjunção E é o de adição e, por isso, os termos unidos por ela, nesse caso, podem ser trocados de posição na frase, sem que se altere o sentido. A frase abaixo que mostra modificação no sentido, em caso de troca da posição dos termos, é:',
    alternativas: [
      'Comprei cravos vermelhos e rosas amarelas.',
      'Vesti a camisa e pus a gravata.',
      'Comprei canetas esferográficas e folhas pautadas.',
      'Comprei móveis novos e aluguei um carro.',
      'Pus os óculos e levantei da cadeira.',
    ],
    correta: 1,
    comentario:
      'Na alternativa B, o “e” aditivo carrega a ideia de sequência temporal: vestir a camisa é normalmente anterior a pôr a gravata, e a troca muda o sentido. As demais não criam essa ordem necessária entre os fatos, por isso a troca de posição não altera o sentido.',
  },
];
