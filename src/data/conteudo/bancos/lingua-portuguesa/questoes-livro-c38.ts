import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 38 — Simulado da Banca CQIP), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C38: QuestaoTreino[] = [
  {
    id: 'portugues-qlivro38-01',
    temaId: 'portugues',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Texto (Luis Fernando Veríssimo, Novas comédias da vida pública: a versão dos afogados, 1997): - Me disseram... - Disseram-me. - Hein? - O correto é “disseram-me”. Não “me disseram”. - Eu falo como quero. E te digo mais... Ou “digo-te”? - O quê? - Digo-te que você... - O “te” e o “você” não combinam. - Lhe digo? - Também não. O que você ia me dizer? - Que você tá sendo grosseiro, pedante e chato. E que vou te partir a cara. Lhe partir a cara. Partir a sua cara. Como é que se diz? - Partir-te a cara. - Pois é. Partir-la hei, se você não parar de me corrigir. Ou corrigir-me. - É para o seu bem. - Dispenso as suas correções. Vê se esquece-me. Falo como bem entender. Mais uma correção e eu... - O quê? - O mato. - Que mato? - Mato-o. Mato-lhe. Matar-lhe-ei-te. Ouviu bem? - Eu só estava querendo... - Pois esqueça-o e para-te. Pronome no lugar certo e para elitismo. - Se você prefere falar errado... - Falo como todo mundo fala. O importante é me entenderem. Ou entenderem-me? - No caso... Não sei. - Ah, não sabes? Não o sabes? Sabes-lo não? — Esquece. - Não. Como “esquece”, ou “esqueça”? Ilumine-me. Mo diga. Ensines-lo-me. Vamos. - Depende. - Depende. Perfeito. Não o sabes. Ensinar-me-lo-ias se o soubesse, mas não sabes-o. - Está bem, está bem. Desculpe. Fale como quiser. - Agradeço-lhe a permissão para falar errado que me dás. Mas não posso mais dizer-lo-te o que dizer-te-ia. - Por quê? - Porque, com todo esse papo, esqueci-lo. Pode-se afirmar da leitura do texto que:',
    alternativas: [
      'o conteúdo da conversa que se desejava ter só chegou a se concretizar porque entraram numa discussão linguística sobre regras pronominais.',
      'o objetivo principal do primeiro enunciador era provocar uma discussão linguística relativa a pronomes, por isso iniciou a frase com pródise.',
      'a desavença foi motivada inicialmente pela correção no emprego do pronome, e não na sua colocação, pois o corretor aponta para a posição do pronome.',
      'um dos interlocutores reflete uma visão mais liberal sobre o uso da língua, por isso não demonstra dúvidas ao longo do diálogo, apenas ironias.',
      'aquele que corrige demonstra segurança na maioria dos apontamentos normativos sobre o emprego do pronome oblíquo átono.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está certa: quem corrige acerta a maior parte dos apontamentos, mas hesita em “No caso... Não sei”, o que impede dizer que ele tem segurança total. A é errada porque a conversa nem chega a começar, já que o primeiro falante é interrompido logo de início. B não tem apoio no texto, que não mostra intenção de discutir pronomes; C inverte o problema, pois a correção recai sobre a posição do pronome (próclise ou ênclise), e não sobre o emprego. D também falha, porque o interlocutor “liberal” hesita (“Ou “digo-te”?”, “Ou entenderem-me?”).',
  },
  {
    id: 'portugues-qlivro38-02',
    temaId: 'portugues',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      'Texto (Luis Fernando Veríssimo, Novas comédias da vida pública: a versão dos afogados, 1997): - Me disseram... - Disseram-me. - Hein? - O correto é “disseram-me”. Não “me disseram”. - Eu falo como quero. E te digo mais... Ou “digo-te”? - O quê? - Digo-te que você... - O “te” e o “você” não combinam. - Lhe digo? - Também não. O que você ia me dizer? - Que você tá sendo grosseiro, pedante e chato. E que vou te partir a cara. Lhe partir a cara. Partir a sua cara. Como é que se diz? - Partir-te a cara. - Pois é. Partir-la hei, se você não parar de me corrigir. Ou corrigir-me. - É para o seu bem. - Dispenso as suas correções. Vê se esquece-me. Falo como bem entender. Mais uma correção e eu... - O quê? - O mato. - Que mato? - Mato-o. Mato-lhe. Matar-lhe-ei-te. Ouviu bem? - Eu só estava querendo... - Pois esqueça-o e para-te. Pronome no lugar certo e para elitismo. - Se você prefere falar errado... - Falo como todo mundo fala. O importante é me entenderem. Ou entenderem-me? - No caso... Não sei. - Ah, não sabes? Não o sabes? Sabes-lo não? — Esquece. - Não. Como “esquece”, ou “esqueça”? Ilumine-me. Mo diga. Ensines-lo-me. Vamos. - Depende. - Depende. Perfeito. Não o sabes. Ensinar-me-lo-ias se o soubesse, mas não sabes-o. - Está bem, está bem. Desculpe. Fale como quiser. - Agradeço-lhe a permissão para falar errado que me dás. Mas não posso mais dizer-lo-te o que dizer-te-ia. - Por quê? - Porque, com todo esse papo, esqueci-lo. Aponte a única reescritura gramaticalmente correta dos segmentos retirados do texto:',
    alternativas: [
      '“E te digo mais...” > “E digo-te mais...”',
      '“E que vou te partir a cara” > “E que vou-te partir a cara”',
      '“Partir-la hei” > “Partí-la-ei”',
      '“mas não sabes-o” > “mas não sabe-lo”',
      '“o que dizer-te-ia” > “o que diria-te”',
    ],
    correta: 0,
    comentario:
      'A reescritura A está certa porque, depois da conjunção aditiva “e”, a colocação do pronome é facultativa, e “digo-te” e “te digo” são ambas aceitas. B erra ao ligar o pronome ao verbo auxiliar de uma locução precedida da palavra atrativa “que”. C acentua “partí”, oxítona terminada em i que não recebe acento, e D usa a ênclise “sabe-lo” depois da palavra atrativa “não”, que exige próclise. E erra porque “diria-te” coloca o pronome depois do verbo com a palavra atrativa “que”, o que obriga a próclise (“o que te diria”).',
  },
  {
    id: 'portugues-qlivro38-03',
    temaId: 'portugues',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      'Sobre o segmento “Agradeço-lhe a permissão para falar errado que me dás”, afirma-se incorretamente que:',
    alternativas: [
      'O verbo “agradecer” é bitransitivo, por isso “a permissão para falar errado que me dás” é objeto direto e o “lhe” é objeto indireto.',
      'O pronome “lhe” refere-se ao interlocutor do enunciador da frase acima, e não a uma terceira pessoa.',
      'Se a expressão “para falar errado” for deslocada para depois de “dás”, não vai haver necessidade de emprego de vírgula, no entanto o sentido original será alterado.',
      'O vocábulo “errado”, devido ao contexto empregado, sofreu derivação imprópria, pois sua classificação morfológica original mudou, em virtude de relacionar-se com o verbo “falar”.',
      'Há erro claro de uniformidade de tratamento, haja vista que a forma verbal “dás” não mantém simetria com o outro elemento de interlocução (“lhe”).',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a incorreta: deslocar “para falar errado” para depois de “dás” elimina a necessidade de vírgula, mas não altera o sentido, pois o complemento apenas troca de posição. As demais estão corretas: “agradecer” é bitransitivo, “lhe” equivale a “a você”, “errado” funciona como advérbio de modo junto de “falar” e há falta de uniformidade de tratamento entre “dás” e “lhe”.',
  },
  {
    id: 'portugues-qlivro38-04',
    temaId: 'portugues',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      'Texto “Círculo Vicioso” (Machado de Assis): Bailando no ar, gemia inquieto vagalume: “Quem me dera que eu fosse aquela loira estrela Que arde no eterno azul, como uma eterna vela!” Mas a estrela, fitando a lua, com ciúme: “Pudesse eu copiar-te o transparente lume, Que, da grega coluna à gótica janela, Contemplou, suspirosa, a fronte amada e bela” Mas a lua, fitando o sol com azedume: “Mísera! Tivesse eu aquela enorme, aquela Claridade imortal, que toda a luz resume”! Mas o sol, inclinando a rútila capela: Pesa-me esta brilhante auréola de nume... Enfara-me esta luz e desmedida umbela... Por que não nasci eu um simples vagalume?”... Levando em conta o texto, o título do poema se justifica:',
    alternativas: [
      'porque a grama do vizinho é sempre mais verde que a nossa.',
      'porque o vagalume inveja uma estrela, que inveja a lua, que inveja o sol, que inveja o vagalume.',
      'pois ilustra as relações humanas envolvendo cobiça e invídia.',
      'uma vez que demonstra, alegoricamente, a inerente insatisfação humana.',
      'porquanto explicita a cíclica condição humana de desejar o que não se tem.',
    ],
    correta: 1,
    comentario:
      'A alternativa B está certa: cada astro inveja o que está acima dele na cadeia, e a inveja volta ao vagalume, sem saída, o que justifica “Círculo Vicioso”. A é um provérbio que não aparece no poema, e C fala em relações humanas que o texto não trata. D e E até tocam em insatisfação e desejo, mas não explicam o título, que descreve a circularidade da cadeia.',
  },
  {
    id: 'portugues-qlivro38-05',
    temaId: 'portugues',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Texto “Círculo Vicioso” (Machado de Assis): Bailando no ar, gemia inquieto vagalume: “Quem me dera que eu fosse aquela loira estrela Que arde no eterno azul, como uma eterna vela!” Mas a estrela, fitando a lua, com ciúme: “Pudesse eu copiar-te o transparente lume, Que, da grega coluna à gótica janela, Contemplou, suspirosa, a fronte amada e bela” Mas a lua, fitando o sol com azedume: “Mísera! Tivesse eu aquela enorme, aquela Claridade imortal, que toda a luz resume”! Mas o sol, inclinando a rútila capela: Pesa-me esta brilhante auréola de nume... Enfara-me esta luz e desmedida umbela... Por que não nasci eu um simples vagalume?”... Marque a única afirmação incorreta sobre os elementos linguísticos do texto:',
    alternativas: [
      'Em “Bailando no ar, gemia inquieto vagalume”, há três encontros vocálicos e três dígrafos.',
      'Em “Por que não nasci eu um simples vagalume?”, o emprego do termo destacado foi corretamente empregado por Machado de Assis, pois é uma locução adverbial interrogativa de causa substituível por “Por qual razão”.',
      'O segmento “da grega coluna à gótica janela” apresenta um caso obrigatório de crase: “da X à Y”. Se não houvesse artigo junto com a preposição “de”, não haveria crase: “de X a Y”.',
      'O trecho “Enfara-me esta luz e desmedida umbela” poderia ser reescrito, sem desvio gramatical e sem alteração de sentido, assim: Esta luz e este grandioso enfeite me entediam.',
      'Os vocábulos “inquieto”, “claridade” e “imortal” foram formados pelo mesmo processo de formação de palavras: derivação.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a incorreta: “umbela” não é sinônimo de “enfeite”, pois no poema ela remete à auréola de divindade do sol, e a troca muda o sentido. As demais estão corretas: “ai” é ditongo e “ia” e “ie” são hiatos, com os dígrafos “an”, “in” e “qu”; a crase em “da X à Y” é obrigatória; “por que” pode ser trocado por “por qual razão”; e os três vocábulos são derivados, prefixais ou sufixais.',
  },
  {
    id: 'portugues-qlivro38-06',
    temaId: 'portugues',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      'Aponte o comentário correto sobre os termos destacados em “Quem me dera que eu fosse aquela loira estrela / Que arde no eterno azul, como uma eterna vela!”.',
    alternativas: [
      'A forma verbal “dera” tem valor contextual volitivo, empregado com o mesmo sentido de “deu”, sendo, portanto, intercambiáveis.',
      'O pronome demonstrativo “aquela” tem valor catafórico, pois se refere a “estrela”, termo mencionado mais à frente no texto.',
      'À semelhança do primeiro “que”, o “que” destacado é um pronome relativo, pois retoma o substantivo anterior: “estrela”.',
      'O adjetivo “azul” tem valor qualificador, caracterizando o substantivo “eterno”.',
      'O termo “uma eterna vela” exerce função de sujeito na oração em que se encontra.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está certa: “como” introduz uma comparativa cujo verbo (“arde”) está subentendido, de modo que “uma eterna vela” é o sujeito dessa oração. A erra porque “dera” expressa desejo e “deu” não expressa, logo não são intercambiáveis; B erra porque “aquela” é dêitico, apontando para uma estrela de fora do texto. C erra porque o primeiro “que” é conjunção integrante (“Quem me dera isso”), e D erra porque “azul” é metonímia de céu, sendo “eterno” o adjetivo.',
  },
  {
    id: 'portugues-qlivro38-07',
    temaId: 'portugues',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Texto “A importância do livro”: O livro é de fundamental importância para o desenvolvimento das sociedades e para o crescimento intelectual do indivíduo, pois é ele que permite ao ser humano registrar fatos importantes da sua história e repassá-los às sociedades posteriores, atuando como vetor do conhecimento. Sobre o parágrafo introdutório, aponte a afirmação correta.',
    alternativas: [
      'A conjunção “pois” pode ser substituída por qualquer uma das seguintes: porque, porquanto, visto que, já que, posto que, uma vez que.',
      'Sem que implicasse prejuízo gramatical, o verbo “registrar” poderia assumir sua forma plural (registrarem) para concordar por atração com “fatos importantes”.',
      'O elemento coesivo “los” retoma anaforicamente “ser humano”; só está no plural devido à silepse de número.',
      'O pronome relativo “que”, com função de sujeito da forma verbal “permite”, retoma o pronome reto “ele”.',
      'As características do parágrafo apontam para o seguinte modo de organização discursiva: dissertação argumentativa.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está certa: o parágrafo apresenta uma tese (a importância do livro) e a sustenta com argumentos, o que caracteriza a dissertação argumentativa. A erra porque “posto que” é concessiva, e não causal como o “pois” do texto; B erra porque “fatos importantes” é objeto direto, e o verbo não concorda com objeto. C erra porque “los” retoma “fatos importantes”, e D erra porque o “que” faz parte da construção expletiva “é ele que”, não retomando “ele” como sujeito.',
  },
  {
    id: 'portugues-qlivro38-08',
    temaId: 'portugues',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Texto “A importância do livro”, segundo parágrafo: Após a invenção da escrita, o avanço intelectual que o ser humano teve foi notável. Afinal, foi a partir dela que se pôde catalogar e compartilhar as suas descobertas, dando origem ao que chamamos de livro. Os hebreus, por exemplo, a partir de um conjunto de livros conhecido como Pentateuco, formaram as bases do cristianismo ocidental. Além desses, os escritos fenícios contribuíram para as técnicas de navegação atual. Já os gregos deixaram um legado político e filosófico. Tudo isso só foi possível graças ao conjunto de obras escritas e organizadas em livros, favorecendo as civilizações posteriores. Sobre o segundo parágrafo, só não se pode afirmar que:',
    alternativas: [
      'o autor teve como objetivo expor argumentos em defesa da tese usando as estratégias argumentativas da exemplificação com alusão histórica e testemunho de autoridade.',
      'a vírgula empregada no primeiro período é obrigatória por separar adjunto adverbial de grande extensão.',
      'o verbo “chamar”, no segundo período, por ter sentido de classificar ou nomear, exige um objeto direto, representado pelo pronome relativo “que”, e um predicativo do objeto, representado pelo termo “de livro”.',
      'a oração reduzida “favorecendo as civilizações posteriores” poderia ser corretamente desenvolvida assim: que favoreceu as civilizações posteriores.',
      'a expressão “graças a” tem valor prepositivo equivalente a “por causa de”, e não a “a despeito de”.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a que não se pode afirmar, pois o segundo parágrafo usa exemplificação com alusões históricas (hebreus, fenícios, gregos), mas nenhuma autoridade é citada, logo não há testemunho de autoridade. B, C, D e E são afirmações verdadeiras: a vírgula isola um adjunto adverbial longo, “chamar” no sentido de nomear pede objeto direto e predicativo, a reduzida de gerúndio se desenvolve com relativo e verbo conjugado, e “graças a” indica causa, ao passo que “a despeito de” indica concessão.',
  },
  {
    id: 'portugues-qlivro38-09',
    temaId: 'portugues',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Texto “A importância do livro”, terceiro parágrafo: É desta forma que a humanidade evolui: cada geração acrescenta e registra uma descoberta que será passada para a próxima geração. Além da importância diacrônica de levar o conhecimento de geração a geração, o livro tem uma importância sincrônica fundamental na disseminação do saber, ainda mais com o avanço das novas tecnologias e plataformas de leitura. É o acesso a tudo isso que promove o crescimento intelectual, possibilitando nossa ascensão sociocultural. Levando em conta o terceiro parágrafo, aponte a afirmação gramaticalmente correta.',
    alternativas: [
      'Se a oração “que será passada para a próxima geração” for antecedida de vírgula, vai haver alteração semântica e prejuízo gramatical.',
      'A perífrase verbal “será passada” sinaliza que o verbo está na voz passiva, em que o agente da ação verbal vem retomado pelo relativo “que”.',
      'O segmento que vem após os dois-pontos tem o papel de explicitar o conteúdo da oração anterior a esse sinal de pontuação.',
      'O adjetivo composto “sociocultural” deveria ser escrito por hífen, pois o acordo ortográfico vigente prevê uma separação entre vocábulo que termina em vogal seguido de vocábulo que se inicia por consoante.',
      'Os segmentos destacados em “importância sincrônica fundamental na disseminação do saber, ainda mais com o avanço das novas tecnologias e plataformas de leitura” são classificados sintaticamente como complementos nominais.',
    ],
    correta: 2,
    comentario:
      'A alternativa C está certa: a oração após os dois-pontos esclarece, à maneira de um aposto, o que a anterior afirma sobre a evolução da humanidade. A erra porque a vírgula antes de uma restritiva a torna explicativa, alterando o sentido sem gerar erro gramatical; B erra porque, na voz passiva, o “que” retoma o paciente, e não um agente. D erra porque “sociocultural” não recebe hífen diante de consoante, e E erra porque “de leitura” é adjunto adnominal de “plataformas”, e não complemento nominal.',
  },
  {
    id: 'portugues-qlivro38-10',
    temaId: 'portugues',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      'Texto “A importância do livro”, último parágrafo: Sendo assim, o livro é (senão o principal) um dos principais responsáveis pela sociedade construída até então. O livro é o motor da sociedade civilizada. É graças a ele que todas as áreas do saber evoluem a cada geração, a qual, por sua vez, evolui proporcionalmente, produzindo mais e mais livros. Podem-se fazer as seguintes afirmações corretas a respeito do último parágrafo, exceto:',
    alternativas: [
      'Os parênteses podem ser substituídos por travessões sem que isso implique alteração morfossintática.',
      'Diferentemente de como é usado na frase “Estudei, então passei”, o “então” que finaliza o primeiro período é um advérbio de tempo.',
      'O artigo definido “as” em “todas as áreas do saber” não poderia ser suprimido, pois, se vier um substantivo depois do pronome indefinido “todos(as)”, o artigo antes dele será obrigatório.',
      'A expressão conectora “sendo assim” tem papel coesivo sequenciador, pois liga um parágrafo a outro, estabelecendo uma relação de causalidade.',
      'O último parágrafo é caracterizado predominantemente pela função da linguagem chamada de referencial, pois se centra no referente (no assunto em si), mesmo que haja a figura de linguagem metáfora no segmento “O livro é o motor da sociedade civilizada”, pois se comparam elementos de naturezas distintas (livro = motor).',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a exceção: “sendo assim” é conclusivo, não causal, pois introduz a conclusão das ideias do texto sem indicar causa. As demais estão corretas: os parênteses podem virar travessões sem mudança na estrutura, o “então” final equivale a “neste momento” (advérbio de tempo), e “todas as áreas” exige o artigo porque o indefinido “todos” pede artigo diante do substantivo.',
  },
];
