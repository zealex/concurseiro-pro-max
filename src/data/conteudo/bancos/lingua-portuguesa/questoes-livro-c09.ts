import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 09 — Artigo), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C09: QuestaoTreino[] = [
  {
    id: 'lp-nomes-qlivro09-01',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf — INSS — Auditor-Fiscal da Previdência Social — 2002) Em relação às lacunas do texto, assinale a opção correta. A questão da Previdência Social deve ser recolocada na sucessão presidencial. Não é possível que uma questão dessa magnitude — o pacto entre gerações, que interessa às passadas, presentes e futuras — continue, como sempre aconteceu, fora da pauta da sucessão presidencial. Uma questão que diz respeito_______ 20 milhões de beneficiários - aposentados e pensionistas;_____ 26,7 milhões de contribuintes ativos, só no Sistema Geral de Previdência Social - o INSS; ____ 60,0 milhões de brasileiros que estão na População Economicamente Ativa — PEA, mas excluídos do INSS, entre os quais os 40 milhões da economia informal;____ 4 milhões da Previdência Complementar aberta;______ 6,6 milhões da Previdência Complementar fechada - 1,7 milhões de participantes ativos, 4,4 milhões de participantes dependentes e 558 mil participantes assistidos;______ 10 milhões de servidores públicos civis e militares, da União (1,8 milhão), de estados (4,0 milhões, em 97) e municípios (4,0 milhões, em 97), aproximadamente.',
    alternativas: [
      'Como são informações de natureza numérica, o artigo masculino é obrigatório.',
      'Já que todas as informações têm a mesma função sintática, basta preencher as lacunas com o artigo feminino singular.',
      'Devido à regência da forma verbal “diz” todas as lacunas devem ser preenchidas com a preposição de.',
      'A regência da palavra “respeito” exige que as duas primeiras lacunas sejam preenchidas com em e as seguintes com de.',
      'Todas as lacunas podem ser preenchidas com preposição e artigo masculino plural: aos.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “diz respeito a” rege a preposição “a”, que se combina com o artigo masculino plural “os” em “aos”, e essa forma serve a todas as lacunas, já que todas se referem a quantidades no plural. As demais estão erradas: o artigo masculino não é obrigatório só porque há números, a regência de “respeito” não exige “em” nem “de”, e a função sintática não impõe artigo feminino singular.',
  },
  {
    id: 'lp-nomes-qlivro09-02',
    temaId: 'lp-nomes',
    formato: 'certo-errado',
    dificuldade: 3,
    gabaritoCE: false,
    enunciado:
      '(Cespe/UnB — SEFAZ - Técnico — 2002) Os três sinais indicativos de crase nas linhas 7 e 8 (Cumpre permitir à sociedade o acesso às informações relativas à boa ou má utilização das verbas públicas) podem ser suprimidos, sem que a coerência textual fique prejudicada, pois são três casos em que o artigo definido pode ser omitido.',
    comentario:
      'O item está errado: em “permitir à sociedade”, a preposição “a” é exigida pela regência do verbo, e não se pode suprimi-la sem prejuízo gramatical. A crase marca a união dessa preposição com o artigo feminino, e a omissão do artigo não elimina a preposição que a estrutura pede, por isso a supressão dos três sinais não é possível.',
  },
  {
    id: 'lp-nomes-qlivro09-03',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV — BESC — Advogado — 2004) Assinale a alternativa em que o termo grifado seja artigo definido.',
    alternativas: [
      '“... o que os empurra a dar crédito para o setor privado e para as pessoas físicas.”',
      '“O que se faz?”',
      '“O que está ocorrendo é que os interesses que prevaleceram...”',
      '“... agora, o que se está fazendo é buscar “acalmar” os que temem perder lucros na fase de transição.”',
      '“Ou seja, há uma possibilidade, não desprezível, de o país perder, mais uma vez, uma janela de oportunidade.”',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: em “de o país”, o “o” é artigo definido, pois antecede o substantivo “país”, sem se fundir com a preposição. As demais trazem o “o” dentro de “o que”, em que a palavra funciona como pronome, e não como artigo.',
  },
  {
    id: 'lp-nomes-qlivro09-04',
    temaId: 'lp-nomes',
    formato: 'certo-errado',
    dificuldade: 2,
    gabaritoCE: true,
    enunciado:
      '(Cespe/UnB — Instituto Rio Branco — Diplomata — 2004) Os vocábulos “dos” e “da” (... valores que diferem nitidamente dos da Idade Média...) provêm ambos da contração da preposição de com outro vocábulo: em “dos”, com um pronome demonstrativo e, em “da”, com um artigo definido.',
    comentario:
      'O item está certo: “dos” resulta da contração de “de” com “os”, que aqui é pronome demonstrativo (equivale a “daqueles”), e “da” resulta da contração de “de” com o artigo definido “a”. A frase do texto, “dos da Idade Média”, mostra exatamente essa diferença entre as duas formas.',
  },
  {
    id: 'lp-nomes-qlivro09-05',
    temaId: 'lp-nomes',
    formato: 'certo-errado',
    dificuldade: 1,
    gabaritoCE: true,
    enunciado:
      '(Ccspe - MPE - Analista Ministerial - 2006) Preservando-se o sentido do texto III, uma opção gramaticalmente correta para a frase “poderá importar em um perigoso recuo do Estado” é: poderá importar num perigoso recuo do Estado.',
    comentario:
      'O item está certo: “num” resulta da contração da preposição “em” com o artigo indefinido “um”, o que mantém a correção gramatical e o sentido da frase. A forma contraída é a usual e não exige mudança de sentido.',
  },
  {
    id: 'lp-nomes-qlivro09-06',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(ESPP - MGS — Analista de Sistemas — 2006) Considere o período: Os dois passaram a discutir a questão da verba disponível. Os termos destacados são, respectivamente:',
    alternativas: ['preposição; artigo definido.', 'artigo definido; preposição.', 'pronome; artigo definido.', 'preposição; pronome.'],
    correta: 0,
    comentario:
      'A alternativa A é a correta: no período, o primeiro “a”, em “passaram a discutir”, é preposição, ligando o verbo ao complemento; o segundo, em “a questão”, é artigo definido, que acompanha o substantivo feminino. As demais invertem a ordem ou trocam a classe de um dos termos.',
  },
  {
    id: 'lp-nomes-qlivro09-07',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(EsPCEx - Exército Brasileiro - Cadetes do Exército - 2007) Considere a frase: “Ele fez críticas a algumas pessoas”. Assinale a alternativa em que o “a” possui a mesma classificação morfológica apresentada na frase acima.',
    alternativas: [
      'Não a vi da janela.',
      'Depois da chuva, voltei a casa.',
      'A tardinha está deliciosa.',
      'A noite é sempre assim: linda!',
      'Voltamos com a sombra das nuvens.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: em “voltei a casa”, o “a” é preposição, como em “críticas a algumas pessoas”, pois liga o termo ao complemento. As demais trazem “a” como pronome oblíquo, em “a vi”, ou como artigo definido, em “A tardinha”, “A noite” e “a sombra”.',
  },
  {
    id: 'lp-nomes-qlivro09-08',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Moura Melo — Pref. São Bernardo Campo/SP — Técnico — 2007) Assinale a alternativa cujo contexto possui o uso incorreto do artigo:',
    alternativas: [
      'Nunca penetrei na alma ressequida do meu tio.',
      'A ilha a mais paradisíaca pede regulamentação.',
      'A ilha deve ser selvagem o quanto possível.',
      'NDA (nenhuma das alternativas).',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: em “A ilha a mais paradisíaca”, o artigo “a” aparece depois do substantivo e antes de “mais”, o que duplica o determinante; a construção adequada seria “A ilha mais paradisíaca”. As demais estão corretas, pois o artigo aparece no lugar esperado, como em “a alma ressequida” e em “o quanto possível”.',
  },
  {
    id: 'lp-nomes-qlivro09-09',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - FNDE - Técnico - 2007) “A primeira é tecnológica: a internet começou, há vários anos, a erodir a receita da indústria cultural.” No trecho acima, é correto afirmar que estão presentes:',
    alternativas: [
      'três artigos definidos e duas preposições.',
      'três artigos definidos e três preposições.',
      'cinco artigos definidos e uma preposição.',
      'três artigos definidos e uma preposição.',
      'quatro artigos definidos e duas preposições.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: há quatro artigos definidos (“A primeira”, “a internet”, “a receita” e o “a” de “da indústria”) e duas preposições (o “a” de “a erodir” e o “de” da contração “da”). As demais erram a contagem de artigos ou de preposições, deixando de lado a contração “da”, que junta preposição e artigo.',
  },
  {
    id: 'lp-nomes-qlivro09-10',
    temaId: 'lp-nomes',
    formato: 'certo-errado',
    dificuldade: 3,
    gabaritoCE: false,
    enunciado:
      '(Cespe/UnB — Pref. São Luís/TO - Técnico Municipal - 2008) Na expressão “A expectativa de vida vem crescendo em todo o mundo”, mantêm-se a coerência e a correção gramatical, bem como o sentido do texto, se for retirado o artigo “o”.',
    comentario:
      'O item está errado: retirar o artigo de “todo o mundo” produz “todo mundo”, que significa “todas as pessoas”, e não “o planeta inteiro”. A correção gramatical pode até se manter, mas o sentido do texto muda, o que torna a afirmação falsa.',
  },
  {
    id: 'lp-nomes-qlivro09-11',
    temaId: 'lp-nomes',
    formato: 'certo-errado',
    dificuldade: 2,
    gabaritoCE: true,
    enunciado:
      '(Cespe/UnB — Pref. São Luís/TO - Técnico Municipal - 2008) Mantém-se o sentido original do texto se o trecho “aos medicamentos” (... ampliar o acesso da população aos medicamentos considerados essenciais...) for substituído por “a medicamentos”.',
    comentario:
      'O item está certo: em “aos medicamentos”, a preposição “a” se combina com o artigo plural “os”, mas a preposição sozinha também introduz o complemento de “acesso”. Ao retirar o artigo, a frase continua gramatical e o sentido de acesso geral aos medicamentos é preservado.',
  },
  {
    id: 'lp-nomes-qlivro09-12',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - Analista de Informática (SDS-SC) - 2008) Observe as frases: 1. “Já com avião a catástrofe é cinematográfica...” 2. “... para não ser mais uma colunista a apontar os defeitos alheios...” 3. Os agentes a encontraram desacordada. Os termos grifados são, respectivamente:',
    alternativas: [
      'artigo, pronome, pronome.',
      'artigo, preposição, pronome.',
      'artigo, pronome, preposição.',
      'pronome, preposição, artigo.',
      'preposição, artigo, pronome.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: na frase 1, o “a” antecede o substantivo “catástrofe”, sendo artigo; na frase 2, o “a” liga o nome “colunista” ao verbo “apontar”, sendo preposição; na frase 3, o “a” substitui “os agentes”, sendo pronome oblíquo. As demais trocam a classe de pelo menos uma dessas ocorrências.',
  },
  {
    id: 'lp-nomes-qlivro09-13',
    temaId: 'lp-nomes',
    formato: 'certo-errado',
    dificuldade: 2,
    gabaritoCE: false,
    enunciado:
      '(Cespe/UnB — PM — SOLDADO — 2009) Em “acesso a” (O acesso a revólver, pistola...), “a” funciona como artigo feminino singular.',
    comentario:
      'O item está errado: em “acesso a revólver”, o “a” é preposição, pois liga o substantivo “acesso” ao seu complemento. Além disso, “revólver” é masculino e não admitiria artigo feminino, o que confirma que não se trata de artigo.',
  },
  {
    id: 'lp-nomes-qlivro09-14',
    temaId: 'lp-nomes',
    formato: 'certo-errado',
    dificuldade: 3,
    gabaritoCE: true,
    enunciado:
      '(Esaf — ANA — Analista Administrativo - 2009) (Adaptada) A afirmação abaixo está correta ou incorreta? “O tratamento de esgotos é fundamental para qualquer programa de despoluição das águas. Em grande parte das situações, a viabilidade econômica das estações de tratamento de esgotos (ETE) é reconhecidamente reduzida, em razão dos altos investimentos iniciais necessários à sua construção e, em alguns casos, dos altos custos operacionais. (...)” O emprego do sinal indicativo de crase em “à sua construção” é opcional porque é opcional a presença de artigo definido singular feminino antes de “sua”.',
    comentario:
      'O item está certo: diante de pronome possessivo feminino, como “sua”, o artigo é facultativo, e a crase em “à sua construção” depende da presença desse artigo. Por isso, a frase pode ser escrita como “a sua construção”, sem o sinal, sem prejuízo para a correção.',
  },
  {
    id: 'lp-nomes-qlivro09-15',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Movens — MDIC — Grupo I — 2010) Quanto ao emprego dos artigos no texto, julgue os itens abaixo como Verdadeiros (V) ou Falsos (F) e, em seguida, assinale a opção correta. I. No trecho “Estamos a um passo dessa convergência”, há dois artigos. II. Em “O sol brilha em todo o mundo”, a retirada do artigo que antecede a palavra “mundo” não acarretaria erro gramatical, mas mudaria o sentido do texto. III. Na linha 11, em “O vento sopra pela Terra todo dia”, há contração da preposição por com o artigo a. A sequência correta é:',
    alternativas: ['V, F, F.', 'V, F, V.', 'F, V, F.', 'F, V, V.'],
    correta: 3,
    comentario:
      'A alternativa D é a correta: o item I é falso, pois em “a um passo” o “a” é preposição e só há um artigo, “um”; o item II é verdadeiro, porque retirar o “o” de “todo o mundo” gera “todo mundo”, que muda o sentido sem erro gramatical; e o item III é verdadeiro, já que “pela” contrai a preposição “por” com o artigo “a”. As demais combinações trocam pelo menos um desses julgamentos.',
  },
  {
    id: 'lp-nomes-qlivro09-16',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Consulplan - Educador de nível médio - 2010) Há ERRO quanto ao emprego do artigo na seguinte afirmativa:',
    alternativas: [
      'O Brasil é um país maravilhoso.',
      'O juiz solicitou a presença de ambos os cônjuges.',
      'Esta é a mulher cujo o amigo desapareceu.',
      'Faltaram uns dez alunos.',
      'O menino fugiu.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a que traz o erro: “cujo” já equivale a “de quem o”, por isso não admite o artigo “o” depois dele; a forma correta seria “cujo amigo desapareceu”. As demais estão corretas, com os artigos no lugar esperado, como em “o Brasil”, “ambos os cônjuges”, “uns dez alunos” e “o menino”.',
  },
  {
    id: 'lp-nomes-qlivro09-17',
    temaId: 'lp-nomes',
    formato: 'certo-errado',
    dificuldade: 2,
    gabaritoCE: true,
    enunciado:
      '(Adaptada) (...) A palavra paraíso é de origem persa—pairidaeza, que quer dizer “jardim murado”; e sua representação, seu símbolo, é um jardim, o lugar onde se deu a criação, o país originário de Adão e Eva, enfim o centro do cosmos, que remete a um estado de perfeição. (...) A reescritura abaixo, no lugar do trecho destacado, estará correta ou incorreta? “... e a sua representação, o seu símbolo, é um jardim...”',
    comentario:
      'O item está certo: antes de possessivo, o artigo é facultativo, de modo que “a sua representação” e “o seu símbolo” equivalem a “sua representação” e “seu símbolo”, sem prejuízo para a correção ou para o sentido. A inserção dos artigos apenas torna a frase mais explícita.',
  },
  {
    id: 'lp-nomes-qlivro09-18',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan — Técnico em Processamento de Dados — 2011) “Receio que a gente esteja cometendo um triste engano.” As palavras destacadas no trecho anterior são, respectivamente:',
    alternativas: [
      'pronome, artigo indefinido, advérbio, substantivo.',
      'artigo indefinido, adjetivo, pronome, substantivo.',
      'artigo definido, artigo indefinido, adjetivo, substantivo.',
      'pronome, artigo definido, adjetivo, substantivo.',
      'artigo definido, adjetivo, advérbio, substantivo.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: o “a” de “a gente” é artigo definido, “um” é artigo indefinido, “triste” é adjetivo que qualifica “engano”, e “engano” é substantivo. As demais misturam classes, como pronome no primeiro termo ou advérbio no lugar do adjetivo.',
  },
  {
    id: 'lp-nomes-qlivro09-19',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - Codificador Censitário - 2011) Está correta a afirmativa referente aos segmentos: “Igual a como” / “Como a alegria”',
    alternativas: [
      'O “a” pertence à mesma classe de palavras nos dois registros.',
      'O primeiro “a” é classificado como artigo definido.',
      'O vocábulo “como”, nas duas ocorrências, pertence à classe de palavras dos adjetivos.',
      'Na segunda ocorrência, o “a” é classificado como artigo definido, o que não ocorre para o primeiro registro.',
      'A palavra “igual” não pode substituir “como” em “como a alegria”.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: em “Como a alegria”, o “a” é artigo definido, que acompanha o substantivo “alegria”; em “Igual a como”, o “a” é preposição, que liga “igual” ao termo seguinte. As demais erram ao tratar os dois “a” como da mesma classe ou ao classificar “como” como adjetivo.',
  },
  {
    id: 'lp-nomes-qlivro09-20',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FDC - Pref. Itaboraí/RJ — Fiscal de Tributos — 2012) Um homem entrou num bar e pediu três doses de uísque. Bebeu depressa, uma depois da outra. Quando terminou a última, pediu mais três. O funcionário do bar disse: - Isso não lhe faz bem, sabe? - Eu sei - respondeu o homem — especialmente com o que eu tenho. - O que é que o senhor tem? — perguntou o garçom. - Só um real. (Andy Rooney, “Tribune Media Services”) A afirmativa correta sobre o emprego dos artigos negritados no texto acima é:',
    alternativas: [
      'Nos termos “o funcionário” e “o homem”, o emprego do artigo definido é justificado pela mesma razão.',
      'Nos termos “o funcionário” e “o bar”, os artigos definidos mostram que os termos determinados por eles já foram enunciados antes.',
      'Termos como “um homem” e “um bar” nunca podem aparecer textualmente como termos que se referem a outros termos anteriores.',
      'No termo “o funcionário”, o emprego do artigo definido se justifica pelo fato de o termo determinado ter sido enunciado pela primeira vez.',
      'Nos termos “um homem” e “um bar”, o emprego do artigo indefinido indica, além do conhecimento dos seres determinados, a sua quantidade.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: o artigo indefinido apresenta um referente pela primeira vez no texto, como em “um homem” e “um bar”, por isso não retoma um termo já mencionado. As demais erram ao atribuir ao artigo definido uma justificativa que não se aplica, como em “o funcionário”, que é apresentado pela primeira vez.',
  },
  {
    id: 'lp-nomes-qlivro09-21',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FDC - Pref. Itaboraí/RJ — Fiscal de Tributos — 2012) O emprego do artigo negritado é optativo na seguinte frase:',
    alternativas: [
      '“A descoberta do clarinete por Mozart foi uma contribuição maior do que toda a África nos deu até hoje.” (Paulo Francis)',
      '“Nunca minta para o seu médico, para o seu confessor ou para o seu advogado.” (George Herbert)',
      '“Não confio num banco que me empresta dinheiro sem a menor garantia.” (Robert Benchley)',
      '“O Brasil é a melhor piada que já foi contada por um português.” (Fernando Pedreira)',
      '“De dez em dez anos toda a burocracia precisa ser fuzilada e trocada.” (Stalin)',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: antes de pronome possessivo, como “seu”, o artigo é facultativo, de modo que “para seu médico” e “para o seu médico” são equivalentes. As demais trazem artigos obrigatórios, como em “toda a África” e “toda a burocracia”, cuja omissão quebraria a gramática.',
  },
  {
    id: 'lp-nomes-qlivro09-22',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(IBFC - PC/RJ - Oficial de Cartório - 2013) Assinale a alternativa em que o vocábulo “a”, destacado nas opções abaixo, seja exclusivamente um artigo.',
    alternativas: [
      '“conta A um jornal sua conversa com um índio jivaro”',
      '“desses que sabem reduzir A cabeça de um morto”',
      '“Queria assistir A uma dessas operações”',
      '“ele tinha contas A acertar com um inimigo”',
      '“uma viagem de exploração À América do Sul”',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: em “reduzir A cabeça”, o “a” é artigo definido, pois acompanha o substantivo feminino “cabeça” e não liga termos. Nas demais, o “a” é preposição exigida pelo verbo ou pelo substantivo (“conta a um jornal”, “assistir a uma operação”, “contas a acertar”), e em “À América” há crase, isto é, preposição com artigo.',
  },
  {
    id: 'lp-nomes-qlivro09-23',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(AOCP - UFS - Técnico em Segurança do Trabalho - 2014) Todas as expressões destacadas a seguir funcionam como artigo definido, EXCETO:',
    alternativas: [
      '“... sendo os humanos do jeito que são...”',
      '“... confrontarmos os desafios da vida...”',
      '“... são os que tiveram que trabalhar...”',
      '“... ensinar os menos habilidosos...”',
      '“... são os ídolos de todos...”',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a exceção: em “são os que tiveram que trabalhar”, o “os” é pronome demonstrativo, equivalente a “aqueles”, e introduz a oração “que tiveram que trabalhar”, sem acompanhar um substantivo. As demais trazem “os” como artigo definido, acompanhando “humanos”, “desafios”, “menos habilidosos” e “ídolos”.',
  },
  {
    id: 'lp-nomes-qlivro09-24',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Instituto AOCP - EBSERH - Advogado (HDT-UFT) - 2015) Assinale a alternativa cujo termo destacado NÃO exerce função de artigo.',
    alternativas: [
      '“Os livros de colorir para adultos”',
      '“Os livros de colorir para adultos se tornaram um fenômeno de vendas”',
      '“... lápis de cor, canetinhas, tintas e o que mais a criatividade permitir”',
      '“... evitando o consumismo exacerbado”',
      '“Os temas dos desenhos tendem a despertar a vontade de pesquisar”',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: em “o que mais a criatividade permitir”, o “o” é pronome, equivalente a “aquilo”, pois introduz uma oração e não acompanha um substantivo. As demais têm “o” ou “os” como artigo definido, acompanhando “livros”, “consumismo” e “temas”.',
  },
  {
    id: 'lp-nomes-qlivro09-25',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - SEE/PE - Professor de Matemática - 2016) Assinale a opção que apresenta o segmento do texto em que o emprego do artigo definido é optativo.',
    alternativas: [
      '“O único consolo”',
      '“ao pensar”',
      '“inevitabilidade da minha morte”',
      '“quando o barco está em perigo”',
      '“todos na mesma situação”',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: diante do possessivo “minha”, o artigo “a”, contraído em “da”, é facultativo, de modo que “a inevitabilidade da minha morte” pode ser lido com ou sem o artigo, sem prejuízo gramatical. As demais trazem artigo obrigatório, como em “o único consolo”, “ao pensar”, “o barco” e “na mesma situação”.',
  },
  {
    id: 'lp-nomes-qlivro09-26',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - CFESS — Assistente Técnico Administrativo - 2017) “O que leva a crer no desaparecimento do bem-te-vi são as mudanças...”. A partícula grifada no excerto anterior, classifica-se como',
    alternativas: ['artigo definido.', 'pronome pessoal.', 'pronome demonstrativo.', 'pronome de tratamento.'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: o “O” inicial equivale a “aquilo que” e faz papel de pronome demonstrativo, pois introduz a oração “que leva a crer...”. As demais não se aplicam: não acompanha um substantivo, como faria um artigo, e pronomes pessoais e de tratamento têm outras funções.',
  },
  {
    id: 'lp-nomes-qlivro09-27',
    temaId: 'lp-nomes',
    formato: 'certo-errado',
    dificuldade: 3,
    gabaritoCE: false,
    enunciado:
      '(Cespe - Instituto Rio Branco - Diplomata - 2018) No trecho “toda uma camada quer os bens da vida”, o artigo indefinido foi empregado como item de realce, razão por que sua eliminação não prejudicaria a correção gramatical nem o sentido original do texto.',
    comentario:
      'O item está errado: em “toda uma camada”, o “uma” não é mero realce, pois indica unidade e reforça a ideia de totalidade do grupo. Sem ele, a expressão “toda camada” muda a ênfase do texto, o que altera o sentido original.',
  },
  {
    id: 'lp-nomes-qlivro09-28',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Idecan - IF-AM - Professor de Biologia — 2019) “Joseph, um quarentão que trabalha num banco de investimentos, começou a frequentar o consultório após um ataque de ansiedade.” No trecho acima, há',
    alternativas: [
      'quatro artigos e cinco preposições.',
      'um artigo e três preposições.',
      'dois artigos e quatro preposições.',
      'dois artigos e três preposições.',
      'quatro artigos e três preposições.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: há quatro artigos (“um quarentão”, “num”, “o consultório” e “um ataque”) e três preposições (“de investimentos”, “a frequentar” e “após”), considerando “num” como artigo, por ser a contração de “em” com “um”. As demais trocam o número de artigos ou de preposições.',
  },
  {
    id: 'lp-nomes-qlivro09-29',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Fundatec - Câmara de Imbé - RS - Assistente Administrativo — 2020) Assinale a alternativa que indica o número correto de artigos presentes no trecho a seguir: “Só assim a pandemia deixará uma herança valiosa para a educação”',
    alternativas: ['0.', '1.', '2.', '3.', '4.'],
    correta: 3,
    comentario:
      'A alternativa D é a correta: há três artigos, “a” de “a pandemia”, “uma” de “uma herança” e “a” de “a educação”. As demais contagens deixam de fora algum artigo, e a palavra “para” é preposição, não artigo.',
  },
  {
    id: 'lp-nomes-qlivro09-30',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - Prefeitura de Jundiaí - SP - Farmacêutico - 2022) Considere as frases do 1º parágrafo: “... o algoritmo não ficou feliz com esse post”; “... sei muito bem o que é um algoritmo”; “... nunca esperei que algum deles ficasse feliz...”. Os termos destacados nas frases referem-se, respectivamente, a algoritmos:',
    alternativas: [
      'determinado; indeterminado; indefinido.',
      'determinado; indeterminado; definido.',
      'determinado; determinado; definido.',
      'indeterminado; determinado; definido.',
      'indeterminado; indeterminado; indefinido.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: em “o algoritmo”, o artigo definido se refere a um algoritmo já conhecido, ou seja, determinado; em “um algoritmo”, o artigo indefinido apresenta um algoritmo qualquer, indeterminado; e em “algum deles”, o indefinido também não especifica qual. As demais combinações trocam esses valores.',
  },
  {
    id: 'lp-nomes-qlivro09-31',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - BESC - Assistente Administrativo - 2004) “... por outro lado, a taxa Selic continuará a ser reduzida a partir do patamar de 16,5% a que chegou no fim do ano passado...”. Os termos grifados no trecho acima classificam-se, respectivamente, como:',
    alternativas: [
      'artigo - artigo - preposição - preposição.',
      'preposição - artigo - preposição - artigo.',
      'artigo - preposição - preposição - artigo.',
      'artigo - preposição - preposição - preposição.',
      'preposição - preposição - artigo - artigo.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: o primeiro “a”, em “a taxa Selic”, é artigo definido, e os três seguintes são preposições, regidas por verbo ou locução: “continuará a ser” (o verbo pede a preposição), “a partir” (locução prepositiva) e “chegou a 16,5%” (regência de “chegar”). As demais alternativas erram ao classificar o primeiro “a” como preposição ou o último como artigo.',
  },
  {
    id: 'lp-nomes-qlivro09-32',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - Aneel - Técnico Administrativo - 2006) Verifique quantas alterações propostas para o texto preservam sua coerência e correção gramatical. “Não é a violência nem as turbulências da economia e muito menos a saúde. A maior preocupação do brasileiro é o trabalho. A conclusão é resultado de uma consulta realizada com 23,5 mil pessoas de 42 países. Num suposto ranking mundial de pessimismo em relação às oportunidades de trabalho, o brasileiro apareceria nas primeiras posições. Na média global, o emprego seguro é citado por 21% dos entrevistados, ficando em segundo lugar entre as preocupações de curto prazo, depois da economia”. I. Retirar os artigos antes de “violência”, “turbulências” e “saúde”. II. Substituir o sinal de ponto pelo de dois-pontos depois de “saúde”, grafando a palavra seguinte com letra inicial minúscula. III. Inserir a preposição com antes de “resultado”. IV. Substituir “Num” por Em um. V. Retirar o artigo definido antes de “oportunidades”, escrevendo apenas à. VI. Substituir a preposição “entre” pela preposição em, o que resulta na contração nas. A quantidade de itens corretos é:',
    alternativas: ['1 item.', '2 itens.', '3 itens.', '4 itens.', '5 itens.'],
    correta: 3,
    comentario:
      'A alternativa D é a correta: as alterações I, II, IV e VI preservam a gramática e o sentido, enquanto a III e a V quebram a norma, pois “é resultado de” não aceita “com” e, sem o artigo, “às oportunidades” viraria “à oportunidades”, com a concordância errada. Por isso são quatro itens corretos, e não cinco nem três.',
  },
  {
    id: 'lp-nomes-qlivro09-33',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Upenet/Iaupe - Pref. Olinda/PE - Assistente Social - 2006) Partindo-se do princípio de que CRASE é o fenômeno resultante da fusão da preposição “a” e do artigo “a”, assinale a alternativa cujo termo sublinhado se classifica apenas como artigo, daí justificar a inexistência desse fenômeno.',
    alternativas: [
      '“Todos os estudos feitos nos anos 1990 (...) continuam a mostrar...”.',
      '“... enquanto que 70 a 80 por cento das mulheres afirmam...”.',
      '“A exemplo de seu ancestral, ele quer ficar sentado em uma pedra...”.',
      '“... afirmam que a família é prioridade absoluta.”.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: em “a família”, o “a” só pode ser artigo definido, pois antecede o substantivo sem ser regido por verbo ou nome. Nas demais, o “a” é preposição: em “continuam a mostrar” ela é regida pelo verbo, em “70 a 80” indica intervalo e em “A exemplo de” compõe locução prepositiva.',
  },
  {
    id: 'lp-nomes-qlivro09-34',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - TJ - Analista Judiciário - 2008) Assinale a opção em que a partícula “o” sublinhada aparece com o mesmo emprego que se apresenta no seguinte trecho do texto: “A primeira é o que queremos dizer”.',
    alternativas: [
      'Eles devem realizar logo o projeto do grupo.',
      'Responda-me: o que você tem com isso?',
      'Seu sucesso depende de o livro ser aceito.',
      'É preciso conhecer a rotina do laboratório.',
      'Este livro foi o que você indicou.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: em “foi o que você indicou”, o “o” é pronome demonstrativo, com o sentido de “aquilo”, como no trecho do enunciado. Nas alternativas A, C e D, o “o” é artigo definido, que acompanha um substantivo ou um verbo no infinitivo.',
  },
  {
    id: 'lp-nomes-qlivro09-35',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - Auxiliar Administrativo - 2010) Assinale a alternativa que apresenta ERRO quanto ao uso do artigo:',
    alternativas: [
      'Avisei a ela que não haveria a reunião.',
      'Feliz o pai cujos filhos são ajuizados.',
      'Li a notícia no “Estado de Sergipe”.',
      'Ambos os casos merecem consideração.',
      'Discutia os assuntos mais profundos.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: o nome do jornal é “O Estado de Sergipe”, e o artigo “O” faz parte do título, por isso a forma “no Estado de Sergipe” apresenta o erro, já que omite esse artigo. As demais usam corretamente o artigo: “a” antes de “reunião” e “notícia”, “o” antes de “pai”, “os” antes de “casos” e “assuntos”.',
  },
  {
    id: 'lp-nomes-qlivro09-36',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - Finep - Nível Superior - 2014) (Adaptada) O artigo definido em destaque tem papel de estabelecer retomada de expressão:',
    alternativas: [
      '“Num país em que a Justiça é caolha, não dá para liberar geral”.',
      '“O desprezo e o desrespeito pelos direitos humanos resultaram em atos bárbaros”.',
      '“Naquela ocasião, percebi claramente que os fantasmas dos traumas”.',
      '“Segundo a declaração, são consideradas intoleráveis as interferências”.',
      '“O presidente do Supremo Tribunal Federal, Joaquim Barbosa, sugeriu”.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: em “a declaração”, o artigo definido retoma uma expressão já citada no texto, o que cria coesão por retomada. Nas demais, o artigo acompanha termos que ainda não foram mencionados ou que apresentam novos referentes, e por isso não estabelece retomada.',
  },
  {
    id: 'lp-nomes-qlivro09-37',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - Imbel - Engenheiro de Materiais - 2021) “O valor de todo conhecimento está no seu vínculo com as nossas necessidades, as nossas aspirações e ações; de modo diferente, o conhecimento torna-se um simples lastro de memória.” Nesse pensamento foi utilizada corretamente o indefinido todo, sem artigo após ele; assinale a opção em que o emprego desse indefinido também está correto.',
    alternativas: [
      '“Não, senhor meu amigo; algum dia, sim, é possível que componha um abreviado do que ali vi e vivi, das pessoas que tratei, dos costumes, de todo resto.”',
      '“Assim devia ser, mas um fluido particular que me correu todo corpo desviou de mim a conclusão que deixo escrita.”',
      '“Outrossim, ria largo, se era preciso, de um grande riso sem vontade, mas comunicativo, a tal ponto as bochechas, os dentes, os olhos, toda a cara, toda a pessoa, todo mundo pareciam rir nele.”',
      '“Novamente me recomendou que não me desse por achado, e recapitulou todo mal que pensava de José Dias, e não era pouco, um intrigante, um bajulador, um especulador, e, apesar da casca de polidez, um grosseirão.”',
      '“Esta fórmula era melhor, e tinha a vantagem de me fortalecer o coração contra a investidura eclesiástica. Juramos pela segunda fórmula, e ficamos tão felizes que todo receio de perigo desapareceu.”',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: em “todo receio de perigo”, o indefinido “todo” vem sem artigo e tem o sentido de “qualquer”, como no pensamento do enunciado. Nas demais, “todo” aparece com o sentido de “inteiro”, que pede o artigo, como em “todo o corpo” e “todo o resto”, ou se combina com outro termo de modo diferente.',
  },
];
