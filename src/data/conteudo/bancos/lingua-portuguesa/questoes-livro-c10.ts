import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 10 — Numeral), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C10: QuestaoTreino[] = [
  {
    id: 'lp-nomes-qlivro10-01',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(EsSA - Exército Brasileiro - Sargento - 2006) No trecho “Os três atravessam o saião, cuidadosa mas resolutamente...”, os vocábulos grifados são classificados, quanto à morfologia, respectivamente, em:',
    alternativas: [
      'numeral e advérbio.',
      'advérbio e aposto.',
      'substantivo e adjetivo.',
      'vocativo e substantivo.',
      'adjetivo e numeral.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “três” é numeral cardinal, pois quantifica e substitui substantivos subentendidos (três amigos, três rapazes), e “resolutamente” é advérbio que modifica o verbo “atravessam”. As demais classes, como vocativo e aposto, não se aplicam a esse trecho.',
  },
  {
    id: 'lp-nomes-qlivro10-02',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FGV — SPTRANS — Especialista em Transporte — 2001) O emprego do numeral está errado em:',
    alternativas: [
      'vá comprar duzentas gramas de mortadela;',
      'veja o exercício da página vinte e um;',
      'consulte o artigo segundo desse código;',
      'a cidade floresceu no século quinto.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a incorreta: “grama” é substantivo masculino, e o numeral que o acompanha deve concordar no masculino, como em “duzentos gramas”. As demais alternativas usam os numerais conforme a norma tradicional de leitura, como em “artigo segundo” e “século quinto”.',
  },
  {
    id: 'lp-nomes-qlivro10-03',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAEPOL - SSP - Auxiliar de Necropsia - 2002) Na expressão “século XIX”, lê-se o numeral em romanos como cardinal (= dezenove); o item abaixo que deve ser lido como ordinal é:',
    alternativas: ['livro XXIII;', 'livro X;', 'livro XI;', 'livro XL;', 'livro C.'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “livro X” deve ser lido como ordinal (“livro décimo”), indicando a posição do livro numa sequência. As demais são lidas como cardinais, como “vinte e três”, “onze”, “quarenta” e “cem”, que indicam quantidade.',
  },
  {
    id: 'lp-nomes-qlivro10-04',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(NCE/UFRJ - CGJ - Comissário de Justiça da Infância e da Juventude - 2002) “Mas estamos em pleno século XX...”; o item abaixo em que devemos ler o algarismo romano como ordinal é:',
    alternativas: [
      'no século XI antes de Cristo;',
      'o papa recebeu o nome de João XXIII;',
      'no século XII da nossa era;',
      'Inocêncio X foi papa;',
      'Luís XVI foi rei da França.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: em “Inocêncio X”, o algarismo indica a posição do papa na sucessão, e por isso é lido como ordinal (“décimo”). Nas demais, os algarismos romanos indicam quantidade e são lidos como cardinais, como “dezesseis” em “Luís XVI” e “vinte e três” em “João XXIII”.',
  },
  {
    id: 'lp-nomes-qlivro10-05',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(NCE/UFRJ — PC/DF — Policial Civil (Agente) — 2004) “Em oito anos, o número de turistas no Rio de Janeiro dobrou, enquanto os assaltos a turistas foram multiplicados por três, alcançando hoje a média de dez casos por dia. Considerando a importância que o turismo tem para a cidade — que anualmente recebe 5,7 milhões de visitantes de outros estados e do estrangeiro, destes, aliás, quase 40% dos que chegam ao Brasil têm como destino o Rio — é alarmante esse grau crescente de insegurança”; quanto às referências numéricas presentes nesse primeiro parágrafo do texto pode-se dizer que representam numerais de dois tipos:',
    alternativas: [
      'cardinais e ordinais;',
      'cardinais e multiplicativos;',
      'multiplicativos e fracionários;',
      'cardinais e fracionários;',
      'ordinais e multiplicativos.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “oito”, “dez” e “5,7 milhões” são cardinais, pois indicam quantidades exatas, e “quase 40%” é fracionário, pois expressa uma parte de um todo. As demais misturam tipos que não aparecem no parágrafo, como ordinais, ou tratam verbos como numerais.',
  },
  {
    id: 'lp-nomes-qlivro10-06',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(NCE/UFRJ — Infraero — Advogado — 2004) O algarismo romano XIX é lido como numeral cardinal; o item em que o algarismo romano deve ser lido como ordinal é:',
    alternativas: ['Luís XVI;', 'João XXIII;', 'Pio X;', 'século XXI;', 'casa II.'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: em “Pio X”, o algarismo indica a posição do papa na sequência e deve ser lido como “décimo”, ou seja, como ordinal. As demais são lidas como cardinais, como “dezesseis” em “Luís XVI” e “dois” em “casa II”, que indicam quantidade.',
  },
  {
    id: 'lp-nomes-qlivro10-07',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(ACCESS — Pref. Teresópolis/RJ — Dinamizador de Educação Infantil — 2005) Fragmento de texto (adaptado): “A Linguagem Brasileira de Sinais (Libras) passará a ter formação específica nos cursos de Pedagogia e de formação de professores e será uma das especializações dos cursos de Letras, como uma segunda língua. A determinação está no decreto apresentado nesta terça-feira pelo ministro da Educação, Fernando Haddad, e é parte da regulamentação da lei de 2002 que tornou a Libras uma forma nacional de comunicação. As universidades terão dez anos para oferecer o ensino de Libras em todos os seus cursos de formação de professores, mas nos próximos três anos já terão que ter a disciplina em pelo menos 20% dos cursos. Em cinco anos, 60% dos cursos precisarão ter a disciplina”. Assinale a alternativa em que a palavra não seja numeral.',
    alternativas: ['Uma.', 'Segunda.', '2002.', 'Dez.', 'Cinco.'],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “uma”, em “uma segunda língua” e em “uma forma nacional”, é artigo indefinido, pois acompanha o substantivo sem indicar quantidade exata. As demais são numerais: “segunda” indica ordem, “2002” é número de ano, e “dez” e “cinco” indicam quantidades.',
  },
  {
    id: 'lp-nomes-qlivro10-08',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNRIO - Pref. Maricá/RJ - Guarda-Vidas - 2007) No trecho “E já no seu primeiro jogo depois do pacto com o Diabo, Tinho assombrou. Fez cinco gols, dois com cada perna e o quinto com uma cabeceada perfeita”, os vocábulos em destaque são, respectivamente, numerais:',
    alternativas: [
      'ordinal, cardinal, cardinal e ordinal.',
      'cardinal, cardinal, ordinal e ordinal.',
      'cardinal, ordinal, ordinal e cardinal.',
      'cardinal, cardinal, cardinal e cardinal.',
      'ordinal, ordinal, ordinal e ordinal.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “primeiro” (jogo) e “quinto” (gol) indicam ordem, sendo ordinais, enquanto “cinco” e “dois” indicam quantidade, sendo cardinais. As demais invertem esses tipos ou tratam todos os numerais como do mesmo tipo.',
  },
  {
    id: 'lp-nomes-qlivro10-09',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(NCE/UFRJ - Pref. Santana - Professor Educação Básica - 2007) O algarismo romano em “D. João VI” é lido como numeral ordinal; a alternativa abaixo em que o algarismo romano é lido como cardinal é:',
    alternativas: ['Pedro I;', 'Henrique VIII;', 'João Paulo II;', 'Luís XVI;', 'Nicolau III.'],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “Luís XVI” é lido como “Luís dezesseis”, em que o algarismo indica quantidade, portanto cardinal. As demais são lidas como ordinais, indicando a posição do rei ou do papa na sequência, como “Henrique oitavo” e “Nicolau terceiro”.',
  },
  {
    id: 'lp-nomes-qlivro10-10',
    temaId: 'lp-nomes',
    formato: 'certo-errado',
    dificuldade: 2,
    gabaritoCE: false,
    enunciado:
      '(Cespe/UnB — SERPRO — Analista — 2008) O desenvolvimento das ideias do texto permite que se substitua “uma dezena de” pela expressão cerca de dez, sem prejuízo para a correção gramatical e a coerência entre os argumentos.',
    comentario:
      'O item está errado: “uma dezena de” indica exatamente dez, enquanto “cerca de dez” indica uma quantidade aproximada. A troca mantém a gramática, mas altera a precisão do dado, o que prejudica a coerência entre os argumentos.',
  },
  {
    id: 'lp-nomes-qlivro10-11',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEC - CLIN - Operador de Copiadora - 2008) Em “Ambas estão sendo empurradas...”, a palavra grifada pertence à seguinte classe gramatical:',
    alternativas: ['advérbio;', 'numeral;', 'pronome;', 'conjunção;', 'preposição.'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “ambas” indica a quantidade de dois elementos, por isso é classificada como numeral (dual) nessa questão. As demais classes não correspondem à palavra, que não liga termos, não modifica verbos e não introduz complemento.',
  },
  {
    id: 'lp-nomes-qlivro10-12',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(UFRR - Pref. Boa Vista/RR - Professor de Educação Básica - 2008) Uma onça suçuarana de quinze quilos foi morta ontem por três crianças, depois de atacar a menor delas, em Castelo do Piauí. As crianças estavam sozinhas em casa e a onça atacou em primeiro lugar Basílio de seis anos. (Jornal da Tarde — adaptado para fins didáticos.) As palavras grifadas no texto são numerais e podemos classificá-los, respectivamente, como:',
    alternativas: [
      'cardinal e ordinal;',
      'fracionário e cardinal;',
      'ordinal e multiplicativo;',
      'fracionário e multiplicativo;',
      'fracionário e ordinal.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “quinze” indica quantidade exata, sendo cardinal, e “primeiro” indica a ordem em que a onça atacou, sendo ordinal. As demais trazem fracionário ou multiplicativo, que não correspondem aos numerais do trecho.',
  },
  {
    id: 'lp-nomes-qlivro10-13',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - Senado Federal - Policial Legislativo Federal - 2008) A palavra centenário corresponde a cem anos. Assinale a alternativa em que não tenha havido correta associação da noção temporal à palavra indicada.',
    alternativas: [
      '400 anos — quadringentenário.',
      '400 anos — quadricentenário.',
      '600 anos — sesquicentenário.',
      '150 anos — tricinquentenário.',
      '7 anos — septenário.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a incorreta: “sesquicentenário” corresponde a 150 anos, e não a 600. As demais associações estão corretas: “quadringentenário” e “quadricentenário” indicam 400 anos, “tricinquentenário” indica 150 anos e “septenário” indica sete anos.',
  },
  {
    id: 'lp-nomes-qlivro10-14',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FIP - Câmara-SJC - Programador - 2009) Na primeira frase da letra de “Corações a Mil” (Gilberto Gil), “Minhas ambições são dez. Dez corações de uma vez pra eu poder me apaixonar dez vezes a cada dia, setenta a cada semana, trezentas a cada mês”, a palavra “dez”, sublinhada, tem duplo sentido. São eles:',
    alternativas: [
      'o sentido de serem dez ambições (no caso, “dez” seria um numeral) e o sentido de os corações serem apaixonadas (no caso, “dez” seria um adjetivo).',
      'o sentido de serem dez ambições e o sentido de serem dez corações (nos dois casos, “dez” seria um numeral).',
      'o sentido de serem dez corações e o sentido de serem dez vezes a cada dia (nos dois casos, “dez” seria um numeral).',
      'o sentido de serem dez ambições (no caso, “dez” seria um numeral) e o sentido de as ambições serem de extrema qualidade (no caso, “dez” seria um adjetivo).',
      'o sentido de serem dez vontades boas (no caso, “dez” seria um substantivo) e o sentido de totalizarem dez as paixões ambiciosas (no caso, “dez” seria um adjetivo).',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “dez” pode ser numeral, indicando quantidade (dez ambições), ou adjetivo com o sentido de excelente, de extrema qualidade. As demais atribuem a “dez” classes ou sentidos que não se aplicam ao duplo sentido da frase, como substantivo ou duas leituras numerais.',
  },
  {
    id: 'lp-nomes-qlivro10-15',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FIP - Câmara-SJC - Programador - 2009) Pelos sentidos das frases “setenta a cada semana” e “trezentas a cada mês”, no contexto da letra da canção, pode-se concluir que:',
    alternativas: [
      'se cada semana tem setenta paixões, o mês deveria ter duzentas e oitenta e não trezentas;',
      'a semana tem sete dias e o mês indicado, exatos trinta dias;',
      '“setenta” e “trezentas” é só um recurso pleonástico, e o sentido numeral é irrelevante no caso;',
      'cada dia do mês em questão tem dez horas, denotando o sentido ilusório da paixão;',
      'há evidente comparação com a velocidade das paixões, semelhante a 70 km/h e 300 km/h.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: dez paixões por dia, em sete dias, dão setenta por semana, e em trinta dias dão trezentas por mês, o que supõe uma semana de sete dias e um mês de trinta. As demais ignoram essa conta ou inventam dados que não aparecem na letra.',
  },
  {
    id: 'lp-nomes-qlivro10-16',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(UFAL — Vestibular — 2009) Na oração “Andou dois quilômetros e meio a pé!”, os termos destacados pertencem à classe gramatical:',
    alternativas: ['dos substantivos;', 'dos pronomes;', 'dos numerais;', 'dos advérbios;', 'dos adjetivos.'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “dois” é numeral cardinal, e “meio” indica metade de um quilômetro, o que o classifica como numeral fracionário. As demais classes não se aplicam, pois os dois termos indicam quantidade e não nomeiam, substituem, qualificam ou modificam verbos.',
  },
  {
    id: 'lp-nomes-qlivro10-17',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(ZAMBINI - Pref. Campinas/SP - Motorista Especializado - 2009) Em: “Collor apresentou sete coletâneas de artigos, discursos e planos de governo”, as palavras grifadas são, respectivamente:',
    alternativas: [
      'numeral, substantivo e conjunção.',
      'numeral, artigo e preposição.',
      'substantivo, artigo e conjunção.',
      'pronome, artigo e preposição.',
      'numeral, substantivo e preposição.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “sete” é numeral cardinal, “coletâneas” é substantivo, e “de” é preposição que liga “coletâneas” ao complemento “artigos”. As demais trocam a classe de pelo menos uma dessas palavras, como tratar “de” como conjunção ou como artigo.',
  },
  {
    id: 'lp-nomes-qlivro10-18',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(ADVISE - Pref. Santo Amaro das Brotas/SE - Carpinteiro — 2010) Na oração: “Uma criança engana vinte adultos.” O termo sublinhado é um numeral:',
    alternativas: ['ordinal;', 'cardinal;', 'fracionário;', 'multiplicativo;', 'coletivo.'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “vinte” indica uma quantidade exata de adultos, o que caracteriza o numeral cardinal. As demais não se aplicam: o ordinal indicaria posição, o fracionário indicaria parte, o multiplicativo indicaria proporção (dobro, triplo) e o coletivo indicaria um grupo.',
  },
  {
    id: 'lp-nomes-qlivro10-19',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - TSE - Técnico Judiciário - 2012) Assinale a palavra que, no texto, exerça papel adjetivo.',
    alternativas: [
      'dois (“Sempre que misturamos os dois registros...”).',
      'mais (“... ou um perfume um pouco mais caro”).',
      'bem (“... você ficará bem se levar...”).',
      'regido (“Enquanto o primeiro é regido por valores...”).',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: em “os dois registros”, “dois” acompanha e qualifica o substantivo “registros”, funcionando como numeral adjetivo. As demais não exercem papel adjetivo: “mais” e “bem” são advérbios que modificam outro termo, e “regido” forma a voz passiva do verbo.',
  },
  {
    id: 'lp-nomes-qlivro10-20',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp — UNESP — Advogado — 2012) O emprego da palavra meio, como no trecho — “... em linhas de um meio-dia.” —, repete-se, com o mesmo sentido, em:',
    alternativas: [
      'ele encontrou na aspirina um meio de se livrar da dor de cabeça.',
      'o poeta tomou apenas meio comprimido de aspirina e sentiu-se aliviado.',
      'a indústria farmacêutica anda meio apurada com tanta demanda de remédios.',
      'em meio à acirrada discussão, saiu do encontro com dor de cabeça.',
      'as pessoas ficam meio dependentes dos efeitos químicos da medicação.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: em “meio comprimido”, “meio” tem o sentido de metade, como em “meio-dia”, funcionando como numeral fracionário. As demais usam “meio” com outros sentidos: recurso, em “um meio de”; ambiente, em “meio à discussão”; e advérbio de intensidade, em “meio apurada” e “meio dependentes”.',
  },
  {
    id: 'lp-nomes-qlivro10-21',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - UNESP - Vestibular - 2012) Assinale a alternativa cuja frase contém um numeral cardinal empregado como substantivo.',
    alternativas: [
      'Há muitos anos que a política em Portugal apresenta...',
      'Doze ou quinze homens, sempre os mesmos, alternadamente possuem o Poder...',
      '... os cinco que estão no Poder fazem tudo o que podem para continuar...',
      '... são tirados deste grupo de doze ou quinze indivíduos...',
      '... aos quatro cantos de uma sala...',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: em “os cinco que estão no Poder”, “cinco” substitui um substantivo não mencionado (as pessoas) e funciona como substantivo, mantendo a ideia de quantidade. As demais trazem numerais acompanhando um substantivo, como em “doze ou quinze homens” e “quatro cantos”, o que os torna adjetivos.',
  },
  {
    id: 'lp-nomes-qlivro10-22',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(SOLER - Pref. Piraju/SP - Monitor de Projetos Sociais — 2012) A palavra “um” em cada um dos períodos abaixo constitui, respectivamente: “Ele não gastava sequer um centavo de seu salário em luxos desnecessários.” “Um aceno era apenas o que ela esperava.” “Precisou somente de comprar um selo para a correspondência ser postada.”',
    alternativas: [
      'artigo, numeral e pronome;',
      'numeral, numeral e numeral;',
      'numeral, artigo e numeral;',
      'artigo, pronome e numeral.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: em cada frase, “um” indica uma unidade exata, seja um centavo, um aceno ou um selo, o que caracteriza o numeral cardinal. As demais atribuem a “um” função de artigo ou de pronome, o que não se aplica, já que em todos os casos ele conta uma unidade.',
  },
  {
    id: 'lp-nomes-qlivro10-23',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(MS Concursos - Pref. Santa Maria/RS - Auxiliar de Operações 1 - 2012) Leia as frases: I. Paulo, Karen e eu organizamos a festa. II. Nossa equipe foi a terceira colocada no torneio. III. Ana ficou contente com a proposta de emprego. IV. Este novo emprego me cansa muito. Com relação à classe gramatical, as palavras grifadas são, respectivamente, classificadas como:',
    alternativas: [
      'substantivo, pronome, adjetivo e numeral.',
      'substantivo, numeral, pronome e substantivo.',
      'pronome, numeral, adjetivo e substantivo.',
      'pronome, numeral, adjetivo e verbo.',
      'pronome, substantivo, adjetivo e substantivo.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: em “eu”, há pronome pessoal; em “terceira”, numeral ordinal; em “contente”, adjetivo que qualifica “Ana”; e em “emprego”, substantivo. As demais trocam a classe de uma dessas palavras, como tratar “terceira” como adjetivo ou “emprego” como verbo.',
  },
  {
    id: 'lp-nomes-qlivro10-24',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Ana Carolina, “Problemas”) Considere os versos: “Eu te procurei em mim”; “Ninguém vai resolver problemas de nós dois”; “Você muda de sonho e mexe na minha vida”. As palavras “mim”, “dois” e “sonho”, retiradas dos versos, são morfológica e respectivamente classificadas como:',
    alternativas: [
      'substantivo, numeral e verbo.',
      'pronome, substantivo e substantivo.',
      'pronome, substantivo e verbo.',
      'pronome, numeral e substantivo.',
      'substantivo, numeral e substantivo.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “mim” é pronome pessoal, que aparece após preposição; “dois” é numeral cardinal, que indica quantidade; e “sonho” é substantivo, pois nomeia algo. As demais trocam a classe de uma dessas palavras, como tratar “dois” como substantivo ou “sonho” como verbo.',
  },
  {
    id: 'lp-nomes-qlivro10-25',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNRIO - INSS — Analista (Letras) — 2014) A canção composta por Cazuza diz: “Ideologia, eu quero uma pra viver!”. A frase é encabeçada pelo substantivo “ideologia”, mas devemos observar que o verbo “querer” está acompanhado de seu complemento direto. Se considerarmos que “uma” é um numeral cardinal e não um pronome indefinido, estaremos levando em conta um contexto segundo o qual o enunciador quer “uma ideologia” e não:',
    alternativas: [
      'outra ideologia.',
      'uma filosofia.',
      'algumas ideologias.',
      'a morte.',
      'duas ou três.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: como numeral cardinal, “uma” indica exatamente um, e o contraste natural é com outra quantidade exata, como “duas ou três”. As demais opções seriam leituras do pronome indefinido, que não especifica quantidade, como “outra” e “algumas”, ou substituições de sentido que não tratam de quantidade, como “uma filosofia” e “a morte”.',
  },
  {
    id: 'lp-nomes-qlivro10-26',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fundatec - Prefeitura de Capão da Canoa — RS — Assistente Social II — 2019) Do ponto de vista morfológico, o termo “ambos”, em “Ambos os aconselhamentos convergem”, é classificado como sendo um:',
    alternativas: ['advérbio.', 'adjetivo.', 'numeral.', 'substantivo.', 'conjunção.'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “ambos” indica a quantidade de dois elementos e acompanha o substantivo “aconselhamentos”, o que o classifica como numeral (dual). As demais classes não correspondem ao termo, que não modifica verbos, não nomeia nada e não liga orações.',
  },
  {
    id: 'lp-nomes-qlivro10-27',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Instituto Consulplan — Câmara de Amparo — SP - Técnico Administrativo - 2020) Nos trechos “Com 14 anos, Emerson, já um peconheiro experiente, repete pela quinta vez a terceira série” (5º §) e “(...) cresce no máximo até três metros (...)” (6º §), os numerais destacados são classificados, respectivamente, como:',
    alternativas: [
      'ordinal, cardinal e ordinal.',
      'cardinal, ordinal e ordinal.',
      'ordinal, cardinal e cardinal.',
      'cardinal, ordinal e cardinal.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “14” indica quantidade de anos, sendo cardinal; “quinta” indica a posição da repetição, sendo ordinal; e “três” indica quantidade de metros, sendo cardinal. As demais trocam o tipo de um desses numerais.',
  },
  {
    id: 'lp-nomes-qlivro10-28',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Uniaraxá - Vestibular - 2003) Em “... às dez horas”, “sob as olaias” e “Ambos se abanavam”, as palavras grifadas são, respectivamente:',
    alternativas: [
      'artigo - preposição - pronome - numeral - pronome.',
      'artigo - preposição - pronome - numeral - conjunção.',
      'preposição - artigo - preposição - numeral - pronome.',
      'preposição - pronome - preposição - substantivo - conjunção.',
      'preposição - pronome - conjunção - substantivo - pronome.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: em “às dez horas”, “às” é contração de preposição “a” com o artigo “as”, então vêm primeiro a preposição e depois o artigo; “sob” é preposição, “Ambos” é numeral e “se” é pronome. As demais erram ao dar a “às” a classe de artigo, como na A e na B, ou ao classificar “Ambos” como substantivo ou “sob” como conjunção.',
  },
  {
    id: 'lp-nomes-qlivro10-29',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(NCE/UFRJ - CEPEL - Auxiliar de Segurança Patrimonial - 2006) “e no monopólio em 1953”; o numeral relativo ao ano (1953) deve ser lido da seguinte forma:',
    alternativas: [
      'mil e novecentos e cinquenta e três.',
      'mil, novecentos e cinquenta e três.',
      'mil, novecentos e cinquenta três.',
      'um mil, novecentos e cinquenta três.',
      'mil e novecentos, cinquenta três.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: 1953 se lê “mil, novecentos e cinquenta e três”, com a conjunção “e” antes da dezena e antes da unidade. A alternativa A usa “e” depois de “mil”, a C omite o “e” antes de “três”, a D acrescenta “um” antes de “mil” e a E separa de forma errada as classes do numeral.',
  },
  {
    id: 'lp-nomes-qlivro10-30',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(NCE/UFRJ - Eletronorte - Assistente Técnico de Engenharia - 2006) A expressão “mais de cem vezes” apresenta uma quantificação imprecisa; a alternativa que mostra uma forma mais precisa de quantificar é:',
    alternativas: [
      'cerca de 100 vezes.',
      'ambas as vezes.',
      'inúmeras vezes.',
      'uma meia dúzia de vezes.',
      'incontáveis vezes.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “ambas” indica exatamente duas ocasiões, por isso é a quantificação mais precisa. “Cerca de 100” e “uma meia dúzia” são aproximações, e “inúmeras” e “incontáveis” são indefinidas, sem número determinado.',
  },
  {
    id: 'lp-nomes-qlivro10-31',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(NCE/UFRJ - Assembleia Legislativa - Taquígrafo Parlamentar - 2006) No texto há uma série de numerais de diferentes tipos; a frase abaixo que apresenta um numeral ordinal é:',
    alternativas: [
      'O investidor Warren Buffett tem 75 anos bem vividos.',
      'Warren decidiu doar 85% de seus bens.',
      'Para os americanos, fazer filantropia é prioridade a.',
      'Gates é dono de várias obras-primas.',
      'Cerca de três quartos da fortuna foram doados.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: em “prioridade a”, o “a” é a abreviação de “primeira”, numeral ordinal que indica posição na ordem de prioridades. Nas demais, “75” e “85%” são cardinais, “várias” é indefinido e “três quartos” é fracionário, e nenhum deles indica posição em uma sequência.',
  },
  {
    id: 'lp-nomes-qlivro10-32',
    temaId: 'lp-nomes',
    formato: 'certo-errado',
    dificuldade: 3,
    gabaritoCE: false,
    enunciado:
      '(FCC - TRF (2R) - Analista Judiciário - 2007) É correto afirmar: “século XIX”, de acordo com a norma padrão, deve ser escrito por extenso por meio do numeral cardinal – “dezenove” –, assim como deve ocorrer com “século VIII”.',
    comentario:
      'O item está errado: “século XIX” pode ser lido com cardinal (“século dezenove”), mas “século VIII” pede o numeral ordinal (“século oitavo”), já que os séculos de I a X são lidos com ordinal. A afirmação generaliza o cardinal para os dois casos, e isso não atende à norma.',
  },
  {
    id: 'lp-nomes-qlivro10-33',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funcab - SESAU/RO - Técnico de Radiologia - 2009) Assinale a opção que apresenta, correta e respectivamente, a classe gramatical a que pertencem as palavras grifadas no trecho abaixo: “O brasileiro foi um dos primeiros no mundo a reconhecer a tese de que o mosquito era o causador da epidemia.”',
    alternativas: [
      'substantivo - numeral - preposição - artigo - artigo - substantivo.',
      'adjetivo - artigo - artigo - pronome - pronome - adjetivo.',
      'adjetivo - numeral - preposição - artigo - artigo - substantivo.',
      'substantivo - artigo - artigo - artigo - artigo - substantivo.',
      'substantivo - numeral - preposição - preposição - pronome - adjetivo.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “brasileiro” e “epidemia” são substantivos, “um” é numeral, o “a” de “a reconhecer” é preposição, e o “a” de “a tese” e o “o” de “o mosquito” são artigos. As demais erram em pelo menos uma classe, como a B e a C, que dão a “brasileiro” e “epidemia” a classe de adjetivo.',
  },
  {
    id: 'lp-nomes-qlivro10-34',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(UNIT - EAD - Vestibular - 2010) “Três perguntas costumam acompanhar a discussão em torno do aquecimento global.” As palavras grifadas possuem, respectivamente, as seguintes classes gramaticais:',
    alternativas: [
      'numeral - adjetivo - artigo.',
      'substantivo - artigo - substantivo.',
      'numeral - artigo - substantivo.',
      'artigo - substantivo - numeral.',
      'numeral - preposição - adjetivo.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “Três” é numeral cardinal, o “a” de “acompanhar a discussão” é artigo definido que acompanha “discussão”, e “aquecimento” é substantivo. As demais trocam pelo menos uma dessas classes, como a A, que dá a “a” a classe de adjetivo e a “aquecimento” a de artigo.',
  },
  {
    id: 'lp-nomes-qlivro10-35',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - Funarte - Contador - 2014) (Adaptada) Há, abaixo, elementos que expressam quantidade. A alternativa em que o termo destacado NÃO tem esse valor é:',
    alternativas: [
      '“Há em nosso povo duas constantes que nos induzem a sustentar que o Brasil é o único país brasileiro de todo o mundo”.',
      '“Adiamos tudo: o bem e o mal, o bom e o mau, que não se confundem, mas tantas vezes se desemparelham”.',
      '“Só a morte e a promissória são mais ou menos pontuais entre nós”.',
      '“encontrei no fim do volume algumas informações essenciais sobre nós e sobre a nossa terra”.',
      '“Entre poucos endereços de embaixadas e consulados, estatísticas, indicações culinárias, o autor intercalou”.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: em “mais ou menos pontuais”, a locução é adverbial e indica grau de pontualidade, não quantidade de elementos. Nas demais, “duas”, “tantas”, “algumas” e “poucos” quantificam, respectivamente, “constantes”, “vezes”, “informações” e “endereços”.',
  },
];
