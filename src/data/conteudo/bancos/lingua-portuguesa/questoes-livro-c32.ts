import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 32 — Estilística), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C32: QuestaoTreino[] = [
  {
    id: 'lp-semantica-qlivro32-01',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB - TRT (16ª R) - Analista Judiciário - 2005) A palavra “stress” está destacada, pois trata-se de um estrangeirismo e sua grafia não está registrada de acordo com as normas ortográficas da língua portuguesa.',
    gabaritoCE: true,
    comentario:
      'Estrangeirismo é a palavra de outra língua incorporada ao português, e “stress” aparece sem a adaptação gráfica “estresse”, que é a forma registrada pelas normas. Por isso a palavra destacada justifica a marcação, e a afirmação está certa.',
  },
  {
    id: 'lp-semantica-qlivro32-02',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(IBFC - ABDI - Assistente Jurídico - 2008) Assinale a alternativa que indica corretamente a figura de linguagem presente na oração: “O cavaleiro enterrou a espada no dragão”.',
    alternativas: ['catacrese.', 'antítese.', 'zeugma.', 'eufemismo.'],
    correta: 0,
    comentario:
      'Enterrar uma espada não tem a palavra própria de perfurar ou cravar, e o verbo “enterrar” é usado por empréstimo de sentido, o que caracteriza catacrese. A antítese exige oposição entre termos, a zeugma é omissão de termo já expresso e o eufemismo suaviza uma ideia negativa, nenhuma delas presente na oração.',
  },
  {
    id: 'lp-semantica-qlivro32-03',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNRIO - PRF - Policial Rodoviário Federal - 2009) Observe o trecho de “O Cortiço”, de Aluísio de Azevedo: “Eram cinco horas da manhã e o cortiço acordava, Um acordar alegre e farto de quem dormiu de uma assentada sete horas de chumbo”. Seu autor utiliza o seguinte recurso estilístico:',
    alternativas: ['eufemismo;', 'gradação;', 'comparação;', 'antítese;', 'personificação.'],
    correta: 4,
    comentario:
      'O cortiço, ser inanimado, recebe a ação de acordar, típica de seres humanos, o que caracteriza personificação. Não há conectivo comparativo que configure comparação, nem oposição de termos para antítese, nem sequência crescente ou decrescente para gradação, e o trecho não suaviza ideia alguma.',
  },
  {
    id: 'lp-semantica-qlivro32-04',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FIP - Câmara-SfC - Analista de Sistemas - 2009) Observe a sequência de frases abaixo e responda a seguir. (1) E no dia lindo vi que vinhas vindo, minha vida. (Guilherme de Almeida) (2) Conhecerás as manhas e as manhãs. (Almir Sater e Renato Teixeira) (3) E as cantilenas de serenos sons amenos fogem fluidas. (Eugênio de Castro) Nas frases apresentadas em (1), (2) e (3), temos, respectivamente, as seguintes figuras de estilo que exploram a sonoridade das palavras:',
    alternativas: [
      'Assonância, paranomásia e aliteração.',
      'Onomatopeia, assonância e paranomásia.',
      'Aliteração, onomatopeia e assonância.',
      'Paranomásia, assonância e aliteração.',
      'Assonância, onomatopeia e paranomásia.',
    ],
    correta: 0,
    comentario:
      'Em (1), a repetição da vogal tônica i em “dia lindo vi” e “vinhas vindo” é assonância. Em (2), “manhas” e “manhãs” são parônimos que se aproximam pela forma, o que é paranomásia. Em (3), a repetição de consoantes como s e f caracteriza aliteração, e por isso a resposta é a alternativa a.',
  },
  {
    id: 'lp-semantica-qlivro32-05',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FIP — Câmara-SJC — Programador - 2009) Observe a sequência de frases abaixo e responda a seguir: (1) Onde estão todos? Estão todos dormindo. Estão todos deitados. Dormindo. (Manuel Bandeira) (2) Dona Cômoda tem três gavetas. E um ar confortável de senhora rica. (Mário Quintana) (3) Vieram os gentios, e tornaram-se fiéis; vieram idólatras, e tornaram-se cristãos. (António Vieira) Nas frases apresentadas em (1), (2) e (3), temos, respectivamente, as seguintes figuras de pensamento:',
    alternativas: [
      'Alegoria, eufemismo e antítese.',
      'Eufemismo, ironia e prosopopeia.',
      'Prosopopeia, antítese e alegoria.',
      'Eufemismo, alegoria e prosopopeia.',
      'Eufemismo, prosopopeia e antítese.',
    ],
    correta: 4,
    comentario:
      'Em (1), “dormindo” suaviza a ideia de morte, o que é eufemismo. Em (2), a cômoda recebe características humanas, como ter “ar de senhora rica”, o que é prosopopeia. Em (3), “gentios” e “idólatras” se opõem a “fiéis” e “cristãos”, configurando antítese, o que leva à alternativa e.',
  },
  {
    id: 'lp-semantica-qlivro32-06',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(NCE/UFRJ — UFRJ — Médico — 2009) “Toda obra de um homem... é sempre um auto-retrato”; nesse segmento há a presença de um tipo de linguagem figurada denominado:',
    alternativas: ['hipérbato;', 'metáfora;', 'metonímia;', 'comparação;', 'pleonasmo.'],
    correta: 1,
    comentario:
      'A frase identifica a obra com o autorretrato sem usar conectivo de comparação, o que caracteriza metáfora. Não há inversão de ordem (hipérbato), relação de parte pelo todo (metonímia), conectivo comparativo nem repetição de sentido (pleonasmo). Por isso a resposta é a alternativa b.',
  },
  {
    id: 'lp-semantica-qlivro32-07',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(TJ/SC — TJ/SC - Juiz — 2009) Marque a única alternativa que NÃO contém nenhum erro gramatical considerado barbarismo:',
    alternativas: [
      'Quando nada mais couber, bastará uma telefonema — de forma expontânea — do seu procurador.',
      'Caso eles virem armados, serão pegos pela polícia.',
      'Com o pronto-socorro grátis ao jornalista, a categoria terá cobertura quando, no exercício de sua profissão, se vir, por qualquer meio legal ou abusivo, tolhida no seu direito de informar.',
      'Se o advogado não intervir a tempo, ninguém reaverá o investimento feito e o montante que já tinha gastado.',
      'Qualquer economista que se dispor a analisar os dados pedirá que o governo afroxe as medidas objetivando a contenção das despesas.',
    ],
    correta: 2,
    comentario:
      'Barbarismo é o desvio ortográfico, morfológico ou prosódico, e a alternativa c é a única sem esse tipo de erro. As demais trazem desvios como “uma telefonema” (gênero), “expontânea” (grafia), “virem” em vez de “vierem” (conjugação) e “afroxe” em vez de “afrouxe” (grafia do verbo).',
  },
  {
    id: 'lp-semantica-qlivro32-08',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(FAB - Epcar - 2009) (Adaptada) A afirmação abaixo está correta ou incorreta? “(...) Ah, minha Senhora, já viste tantas coisas! Quantos segredos ouviste e não contaste a ninguém. Quantos amores teus já partiram sem que derramasses uma única lágrima. Quantos meninos de olhos assustados transformaste em homens de coragem incontestável na arte de pilotar um avião ou enaltecer a vida civil. Quantos destinos aqui se cruzaram. Quantos anos se passaram... Em cada canto um nome, uma história para contar. (...)”. - A anáfora é uma figura de linguagem marcante no período acima.',
    gabaritoCE: true,
    comentario:
      'A repetição de “Quantos” no início de várias frases é justamente a anáfora, que consiste em repetir uma palavra no começo de frases ou versos. A afirmação está correta, e o reconhecimento se faz pela estrutura do texto, não pelo sentido.',
  },
  {
    id: 'lp-semantica-qlivro32-09',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - DETRAN/RN — Assessor Técnico — 2010) Há um exemplo de prosopopeia em:',
    alternativas: [
      '“Como eu invejo os que não esqueceram a cor das primeiras calças que vestiram!”',
      '“E antes seja olvido que confusão; explico-me”.',
      '“Os rios, as montanhas, as igrejas que não vi nas folhas lidas”.',
      '“Não, não, a minha memória não é boa”.',
      '“... e os clarins soltam as notas que dormiam no metal, e tudo marcha com uma alma imprevista”.',
    ],
    correta: 4,
    comentario:
      'A prosopopeia atribui características humanas a seres não humanos, e em “os clarins soltam as notas” e “tudo marcha com uma alma imprevista” os instrumentos e as coisas agem e têm alma, como pessoas. As demais alternativas não atribuem ação ou sentimento humano a objetos ou a seres inanimados.',
  },
  {
    id: 'lp-semantica-qlivro32-10',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funiversa - MPE/GO - Engenheiro Ambiental - 2010) Diz-se que há personificação quando houver atribuição de sentimentos, traços psicológicos e(ou) comportamento humanos a seres inanimados e a animais. Assinale a alternativa que apresenta exemplo de personificação.',
    alternativas: [
      '“de mãos dadas, marcharemos todos pela vida verdadeira”.',
      '“as janelas devem permanecer, o dia inteiro, abertas para o verde onde cresce a esperança”.',
      '“o homem confiará no homem como a palmeira confia no vento”.',
      '“o lobo e o cordeiro pastarão juntos”.',
      '“Fica decretado, por definição, que o homem é um animal que ama”.',
    ],
    correta: 2,
    comentario:
      'Na alternativa c, a palmeira confia no vento, ação de confiança própria de seres humanos, o que caracteriza personificação. A alternativa d fala de animais em cena sem atribuir a eles traço humano, e a e define o homem por um traço, o que é descrição e não personificação. Por isso a resposta é a alternativa c.',
  },
  {
    id: 'lp-semantica-qlivro32-11',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Funiversa - MTur - Agente Administrativo - 2010) (Adaptada) A afirmação abaixo está correta ou incorreta? “(...) Assim como o ciúme é querer manter o que se tem e a cobiça é desejar aquilo que não lhe pertence, a inveja é não querer que o outro tenha. O mais renegado dos sete pecados capitais é uma emoção inerente à condição humana, por mais difícil que seja confessá-la. (...)” - A figura de palavra conhecida como perífrase está ilustrada na frase “O mais renegado dos sete pecados capitais é uma emoção inerente à condição humana, por mais difícil que seja confessá-la”.',
    gabaritoCE: true,
    comentario:
      'A expressão “o mais renegado dos sete pecados capitais” substitui a palavra “inveja” por um conjunto maior de termos, e essa substituição é a perífrase. A afirmação está correta.',
  },
  {
    id: 'lp-semantica-qlivro32-12',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobras — Profissional Jr. - 2010) Antítese é uma figura de linguagem com a qual se salienta uma oposição de ideias por meio de sentenças ou palavras. O fragmento que contém uma antítese é:',
    alternativas: [
      '“Somos artesãos, meio como as formigas,”',
      '“vemos nossas obras destruídas em segundos por cataclismos naturais,”',
      '“se pensamos que cada estrela é um sol, e que tantas delas têm sua corte de planetas, fica difícil evitar a questão da nossa existência cósmica,”',
      '“Ao olhar para o Universo, o homem é nada. Ao olhar para o Universo, o homem é tudo.”',
      '“somos como o Universo pensa sobre si mesmo.”',
    ],
    correta: 3,
    comentario:
      'Na alternativa d, “é nada” e “é tudo” são termos opostos repetidos na mesma estrutura, o que produz a antítese. A alternativa a traz comparação com “como”, a b e a c expõem fatos ou raciocínios sem oposição entre termos, e a e é comparação com o Universo, sem contraste.',
  },
  {
    id: 'lp-semantica-qlivro32-13',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fundep — TJ/MG — Oficial de Apoio Judicial - 2010) Assinale a alternativa em que se encontra uma gradação.',
    alternativas: [
      '“[...] será o incentivo à violência o resultado único desse processo de informação em escala mundial?”',
      '“[...] a violência aumenta em proporções assustadoras, tanto no resto do mundo como aqui bem perto, em cada esquina.”',
      '“[...] reflexão de um amigo meu, médico de meia idade, sabedoria e ciência.”',
      '“Está se conhecendo em seus máximos e em seus mínimos [...].”',
    ],
    correta: 1,
    comentario:
      'Na alternativa b, a violência é apresentada em uma sequência crescente de alcance, do resto do mundo a aqui bem perto e, por fim, a cada esquina, o que é gradação. As demais trazem pergunta retórica, aposição de qualidades ou contraste de termos, sem escalada de intensidade.',
  },
  {
    id: 'lp-semantica-qlivro32-14',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cetap-AL/RR — Analista de Sistemas — 2010) A figura de linguagem presente em “Durante séculos, a Inglaterra dominou os mares...” é:',
    alternativas: ['Metáfora.', 'Silepse.', 'Antítese.', 'Metonímia.', 'Ironia.'],
    correta: 3,
    comentario:
      '“A Inglaterra” está no lugar de seus navegantes ou de sua marinha, ou seja, o nome do país designa os habitantes ou o poder que ele tem, o que é metonímia. Metáfora exige comparação implícita entre universos distintos, antítese e ironia exigem oposição ou sentido contrário, e silepse é concordância feita pelo sentido, o que não ocorre aqui.',
  },
  {
    id: 'lp-semantica-qlivro32-15',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - Bahiagás — Analista de Processos Organizacionais - 2010) A construção de uma frase pode resultar em ambiguidade, ensejando duplo sentido. Isso NÃO ocorre apenas em:',
    alternativas: [
      'Desde meninos, os pais aconselham os filhos a não brincarem com o fogo.',
      'Por ser muito perigoso, o filho é aconselhado a não brincar com o fogo.',
      'Porquanto seja perigoso, deve-se evitar uma criança próxima do fogo.',
      'Caso bem prevenida contra o perigo do fogo, a criança não se queimará.',
      'Uma vez esclarecida sobre o fogo, a criança não terá como queimar-se.',
    ],
    correta: 3,
    comentario:
      'Na alternativa d, a frase tem uma única leitura: a criança é quem está prevenida e não se queimará. As demais admitem mais de uma interpretação, pois o sujeito de “aconselham”, quem é o perigoso ou quem está esclarecido pode ser entendido de modos diferentes, o que gera o duplo sentido.',
  },
  {
    id: 'lp-semantica-qlivro32-16',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(TJ/SC - TJ/SC - Técnico Judiciário - 2010) Aponte a alternativa que NÃO apresenta solecismo:',
    alternativas: [
      'Às vezes queremos ter tudo sem pensar que podemos se arrepender depois.',
      'Ele pediu pra mim não deixar meu paletó na cadeira.',
      'Acabamos jantando no restaurante do Lauro, onde fomos muito bem atendidos.',
      'Eu lhe abracei muito quando lhe vi na rodoviária.',
      'Por que fosses dizer que a gente não vamos sair?',
    ],
    correta: 2,
    comentario:
      'Solecismo é o desvio de sintaxe, ligado a colocação, regência ou concordância. A alternativa c está de acordo com a norma, e por isso é a única sem solecismo. As demais apresentam desvios como a colocação em “podemos se arrepender” e a concordância em “a gente não vamos sair”.',
  },
  {
    id: 'lp-semantica-qlivro32-17',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(TJ/SC - TJ/SC - Técnico Judiciário - 2010) A frase “Este tribunal recebeu a informação de que a empresa Marca X estaria sendo vendida por volta das 21 horas de terça-feira” apresenta o vício de linguagem denominado:',
    alternativas: ['Cacofonia.', 'Eco.', 'Pleonasmo.', 'Ambiguidade.', 'Barbarismo.'],
    correta: 3,
    comentario:
      'O adjunto “por volta das 21 horas de terça-feira” pode se ligar tanto à venda quanto ao recebimento da informação, o que gera duas leituras. Esse problema de referência é ambiguidade, e não cacofonia, eco, pleonasmo ou barbarismo, que tratam de som, repetição de sons, redundância de ideias ou desvio de palavra.',
  },
  {
    id: 'lp-semantica-qlivro32-18',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Vunesp - MPE/SP - Analista de Promotoria - 2010) Observe as frases, títulos de matérias da revista, e analise as afirmações. Por que o Brasil toma tanto Rivotril Cores que enganam seu cérebro (Superinteressante, julho de 2010) I. Na primeira frase, a figura de linguagem presente é a metonímia, já que o termo Brasil está empregado no lugar de brasileiros. II. Na segunda frase, a figura de linguagem presente é a hipérbole, já que o verbo enganar representa uma ação exagerada. III. Na primeira frase, sem alteração da ordem dos termos, também estaria correto o uso da forma Por qué. Está correto o que se afirma em:',
    alternativas: ['I, apenas.', 'III, apenas.', 'I e II, apenas.', 'II e III, apenas.', 'I, II e III.'],
    correta: 0,
    comentario:
      'A afirmação I está correta: “o Brasil” designa os brasileiros, o que é metonímia de lugar pelos habitantes. A II está errada, pois “enganar” não traz exagero, e a figura não é hipérbole. A III também está errada, porque “Por qué” não é grafia da norma, e a forma correta da pergunta é “Por que”.',
  },
  {
    id: 'lp-semantica-qlivro32-19',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(FGV — TRE/PA - Técnico Judiciário — 2011) (Adaptada) A afirmação abaixo está correta ou incorreta? O Fundo Partidário será, em 2011, de R$ 301 milhões. Isso porque foi aprovado a nove dias do fim do ano o reforço de R$ 100 milhões. Desse valor, R$ 265 milhões são oriundos do Orçamento da União e R$ 36 milhões referentes à arrecadação de multas previstas na legislação eleitoral. Mas, afinal, qual a razão para se aumentar de forma tão extraordinária a dotação dos partidos? Muito simples: a necessidade de eles pagarem as dívidas de campanha. — No terceiro período, há um caso de zeugma.',
    gabaritoCE: true,
    comentario:
      'No terceiro período, a expressão “R$ 36 milhões referentes à arrecadação” omite o verbo “são”, já expresso antes na mesma construção. Essa omissão de termo já mencionado é zeugma, e a afirmação está correta.',
  },
  {
    id: 'lp-semantica-qlivro32-20',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - IRBr - Diplomata - 2011) Nos dois primeiros versos (Através de grossas portas, sentem-se luzes acesas), o eu lírico alude ao sigilo dos inconfidentes por meio de paradoxo e sinestesia.',
    gabaritoCE: true,
    comentario:
      '“Sentem-se luzes” mistura o tato, expresso por “sentir”, com a visão, expressa por “luzes”, o que caracteriza sinestesia. A ideia de luz acesa atrás de portas grossas gera o paradoxo de algo oculto e visível ao mesmo tempo. A afirmação está certa.',
  },
  {
    id: 'lp-semantica-qlivro32-21',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV — TRE/PA — Analista Judiciário — 2011) “(...) Infelizmente, ainda hoje assistimos no Brasil a fenômenos que há muito deveriam ter sido excluídos da vida política nacional, como a compra de votos e a atitude de diversos candidatos, durante as campanhas eleitorais, de “doar” cestas básicas e toda a sorte de brindes em troca da promessa de voto dos eleitores. (...)” No último parágrafo, as aspas em doar confirmam, para o vocábulo, seu aspecto de:',
    alternativas: ['polifonia;', 'coloquialismo;', 'antonímia;', 'metáfora;', 'ironia.'],
    correta: 4,
    comentario:
      'As aspas em “doar” sinalizam que o termo é usado em sentido contrário ao literal, já que não há doação genuína numa compra de votos. Esse uso contrário ao sentido próprio é ironia. Polifonia, coloquialismo, antonímia e metáfora não explicam o emprego das aspas nesse contexto.',
  },
  {
    id: 'lp-semantica-qlivro32-22',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Ainda com relação às figuras de linguagem, em “... a memória os atira nos abismos do esquecimento” é correto afirmar que:',
    alternativas: [
      'Há uma comparação entre dois elementos.',
      'Opera-se uma personificação pela atribuição de característica própria dos seres humanos.',
      'Há uma sequência de palavras sinônimas que promovem a intensificação de uma ideia.',
      'O vocábulo “abismos” foi usado com um sentido conotativo de sátira.',
      'Há uma redundância para enfatizar uma ideia importante.',
    ],
    correta: 1,
    comentario:
      'A memória, ser inanimado, recebe a ação de atirar, própria de seres humanos, o que configura personificação. Não há conectivo comparativo, sequência de sinônimos, sátira ou redundância no trecho, por isso a alternativa b está correta.',
  },
  {
    id: 'lp-semantica-qlivro32-23',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - Carreira Universitária (Analista Administrativo) - Nível Superior - 2011) “Entra ano sai ano, as tempestades de verão continuam atormentando a vida de milhares de pessoas nos estados do sul e sudeste do país”. O excerto anterior constitui um exemplo de figura de linguagem denominada:',
    alternativas: ['Paronomásia.', 'Antonomásia.', 'Perífrase.', 'Metonímia.', 'Prosopopeia.'],
    correta: 4,
    comentario:
      'As tempestades são fenômenos inanimados, e a ação de atormentar a vida das pessoas é atributo humano, o que configura prosopopeia. Paronomásia exige palavras parônimas, antonomásia troca um nome por apelido, perífrase usa mais palavras que o necessário e metonímia substitui um termo por outro de relação de parte e todo.',
  },
  {
    id: 'lp-semantica-qlivro32-24',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - CHESF - Profissional de Nível Superior - 2012) As palavras podem assumir sentidos figurados, ou seja, significados diferentes das acepções e usos previstos pelos dicionários, embora facilmente compreensíveis no contexto específico em que se encontram. A passagem do texto em que uma palavra em sentido figurado está presente é:',
    alternativas: [
      '“Daí esta avalanche, este tsunami de informações.”',
      '“O estado de nossas células cerebrais, as nossas emoções; tudo isso pode representar uma limitação para nossa capacidade de lembrar.”',
      '“Para quem, como eu, viaja bastante e tem de trabalhar em aviões ou em hotéis, é um recurso precioso.”',
      '“Mas não encontrei pen drive algum.”',
      '“Perguntei no aeroporto, entrei em contato com o táxi que me trouxera, liguei para casa: nada.”',
    ],
    correta: 0,
    comentario:
      'As palavras “avalanche” e “tsunami” são usadas para indicar uma enorme quantidade de informações, sem sentido literal, o que as torna figuradas. As demais passagens empregam termos em sentido próprio, como células cerebrais, aviões, pen drive, aeroporto e táxi.',
  },
  {
    id: 'lp-semantica-qlivro32-25',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Unicentro - Vestibular - 2012) O fragmento que ilustra a linguagem conotativa é o transcrito na alternativa:',
    alternativas: [
      '“pelo uso dos aviões sequestrados como arma.”',
      '“A derrubada do Taleban, que governava o país centro-asiático, contribuiu de modo decisivo para debilitar aquele grupo terrorista.”',
      '“uma guerra injustificável contra o Iraque.”',
      '“como alegou então, por má-fé e paranoia, o governo americano.”',
      '“Produziu até agora apenas dois outros atentados de vulto.”',
    ],
    correta: 1,
    comentario:
      'Na alternativa b, “derrubada” e “debilitar” são usados em sentido figurado, para falar do fim de um poder e do enfraquecimento de um grupo, o que caracteriza linguagem conotativa. As demais alternativas são predominantemente denotativas, com aviões, guerra, governo e atentados em seus sentidos literais.',
  },
  {
    id: 'lp-semantica-qlivro32-26',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CEV/Urca - Vestibular - 2012) “Chico passou por maus bocados, andou gastando mais de cinco litros de saliva para reconquistar a mulher”. A construção em destaque é própria da linguagem literária e caracteriza-se como:',
    alternativas: ['Hipérbole.', 'Eufemismo.', 'Catacrese.', 'Anáfora.', 'Elipse.'],
    correta: 0,
    comentario:
      'O exagero de “gastando mais de cinco litros de saliva” intensifica o esforço de conquista além do real, o que é hipérbole. Catacrese é o empréstimo de sentido por falta de termo próprio, eufemismo suaviza, anáfora é repetição no início de frases e elipse é omissão de termo.',
  },
  {
    id: 'lp-semantica-qlivro32-27',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(FCC - TST - Analista Judiciário - 2012) (Adaptada) A afirmação abaixo está correta ou incorreta? “(...) Relação de pessoas ou de assuntos vetados ou ‘indesejáveis’ em um órgão de imprensa...” É aceitável entender-se “indesejáveis” como forma de eufemismo.',
    gabaritoCE: true,
    comentario:
      'A palavra “indesejáveis”, usada no lugar de vetados ou proibidos, suaviza a ideia de censura, o que é eufemismo. A afirmação está correta.',
  },
  {
    id: 'lp-semantica-qlivro32-28',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — TRE/RJ — Técnico Judiciário — 2012) “(...) Novas pesquisas... revelam que o problema é muito mais grave... A mais recente, elaborada pelo Instituto... (...)” Em “A mais recente”, ocorre elipse da palavra pesquisa, que pode ser subentendida a partir do antecedente “pesquisas”.',
    gabaritoCE: true,
    comentario:
      'A palavra “pesquisa” fica omitida em “A mais recente”, e o antecedente “pesquisas” permite recuperar o termo sem prejuízo de sentido. Isso caracteriza elipse, e a afirmação está certa.',
  },
  {
    id: 'lp-semantica-qlivro32-29',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(PaqTcPB - UEPB - Técnico de Enfermagem - 2012) “Tomar uma decisão envolve uma disputa com 3 participantes: dois deles (instinto e experiência) cuidam de seu presente, o outro (razão) pensa no seu futuro. (...)” A utilização dos termos “participantes”, “cuidam” e “pensa” contribui para estabelecer, no texto, uma relação de sentido denominada:',
    alternativas: ['Ambiguidade.', 'Sinonímia.', 'Paráfrase.', 'Oposição.', 'Metáfora.'],
    correta: 4,
    comentario:
      'Ao tratar instinto, experiência e razão como participantes de uma disputa que cuidam e pensam, o texto transfere para a decisão um sentido de competição humana. Essa transposição de sentido sem conectivo é metáfora. Ambiguidade, sinonímia, paráfrase e oposição não explicam a sequência de termos.',
  },
  {
    id: 'lp-semantica-qlivro32-30',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funcab - MPE/RO - Técnico em Contabilidade - 2012) Pleonasmo é uma figura de linguagem que tem como marca a repetição de palavras ou expressões, aparentemente desnecessárias, para enfatizar uma ideia. No entanto, alguns pleonasmos são considerados “vícios de linguagem” por informarem uma obviedade e não desempenharem função expressiva no enunciado. Considerando esta afirmação, assinale a alternativa que possui exemplo de pleonasmo vicioso.',
    alternativas: [
      '“(...) E então abriu a torneira: a água espalhou-se (...)”',
      '“(...) O jeito era ir comprar um pão na padaria. (...)”',
      '“(...) Matá-la, não ia; não, não faria isso. (...)”',
      '“(...) Traíra é duro de morrer, nunca vi um peixe assim. (...)”',
      '“(...) Tirou para fora os outros peixes: lambaris, chorões, piaus; (...)”',
    ],
    correta: 4,
    comentario:
      'Em “tirou para fora”, o verbo tirar já traz a ideia de sair, e “para fora” apenas repete essa informação de forma óbvia, sem função expressiva, o que é pleonasmo vicioso. As demais alternativas não trazem repetição inútil de ideia ou têm repetição com função expressiva.',
  },
  {
    id: 'lp-semantica-qlivro32-31',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - EAGS - Sargento - 2012) Quanto à classificação das figuras de linguagem, coloque (1) para antítese, (2) para hipérbole, (3) para metonímia e (4) para metáfora. Depois assinale a alternativa com a sequência correta. I. ( ) “Trabalhava arduamente, pois tinha de alimentar quatro bocas.” II. ( ) “Eu, que era branca e linda, eis-me medonha e escura.” III. ( ) “Um mundo de ideias havia em minha cabeça.” IV. ( ) “Meu coração é um campo minado.”',
    alternativas: ['2, 1, 3, 4.', '3, 1, 2, 4.', '1, 2, 4, 3.', '3, 4, 1, 2.'],
    correta: 1,
    comentario:
      'Em I, “bocas” designa pessoas, o que é metonímia (3). Em II, “branca e linda” contrasta com “medonha e escura”, caracterizando antítese (1). Em III, “um mundo de ideias” exagera a quantidade, o que é hipérbole (2), e em IV o coração é comparado a um campo minado, por metáfora (4). A sequência 3, 1, 2, 4 é a da alternativa b.',
  },
  {
    id: 'lp-semantica-qlivro32-32',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB — EEAr - Controlador de Tráfego Aéreo - 2012) Assinale a alternativa em que não se verifica a presença de metáfora.',
    alternativas: [
      '“Deus, antes de ser homem, era sol sem sombra.” (Pe. Vieira)',
      '“As tuas saudades ficam onde deixas o coração.” (Camilo Castelo Branco)',
      '“Tem nas faces o branco das areias que bordam o mar.” (José de Alencar)',
      '“...meu pensamento vadio era uma borboleta serena que não pousava em nada.” (Bernardo Élis)',
    ],
    correta: 1,
    comentario:
      'Na alternativa b a saudade é dita como algo que fica onde se deixa o coração, uma expressão afetiva sem transposição clara entre universos de sentido, por isso não se classifica como metáfora. As demais transferem sentido de um universo a outro: o Deus como sol sem sombra, as faces com o branco das areias e o pensamento como borboleta.',
  },
  {
    id: 'lp-semantica-qlivro32-33',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNCAB - SEMAD - Engenharia Agronômica - 2013) A figura de linguagem presente em “Houve uma mulher que amou um amor de verdade” é:',
    alternativas: ['prosopopeia.', 'pleonasmo.', 'sinestesia.', 'hipérbole.'],
    correta: 1,
    comentario:
      'A expressão “amou um amor” repete o conceito de amor, criando uma repetição de significado que reforça a ideia, o que é pleonasmo. Não há atribuição de traço humano a coisa, mistura de sensações nem exagero no trecho, por isso a resposta é a alternativa b.',
  },
  {
    id: 'lp-semantica-qlivro32-34',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV — Prefeitura de Florianópolis/SC — Fiscal de Serviços Públicos — 2014) Ao dizer que os psicopatas assumem o papel de parasitas e predadores, o autor do texto 1 apelou para uma figura de linguagem denominada:',
    alternativas: ['metonímia;', 'pleonasmo;', 'anacoluto;', 'eufemismo;', 'metáfora.'],
    correta: 4,
    comentario:
      'Chamar os psicopatas de parasitas e predadores transfere, sem conectivo, nomes de animais para pessoas, o que é metáfora. Metonímia substitui por relação de parte e todo, pleonasmo repete ideia, anacoluto quebra a estrutura sintática e eufemismo suaviza uma ideia negativa.',
  },
  {
    id: 'lp-semantica-qlivro32-35',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV — TCE/SE - Médico — 2015) A redundância significa “um excesso de palavras, de expressões, prolixidade”, segundo Houaiss; a frase do texto 2 que mostra, em si mesma, um excesso de palavras, é:',
    alternativas: [
      '“Dizem que todos os dias você deve comer uma maçã por causa do ferro”;',
      '“E uma banana pelo potássio”;',
      '“E também uma laranja pela vitamina C”;',
      '“Uma xícara de chá verde sem açúcar para prevenir a diabetes”;',
      '“Todos os dias deve-se tomar um Yakult pelos lactobacilos”.',
    ],
    correta: 2,
    comentario:
      'A alternativa c traz a expressão “E também”, que acrescenta palavras sem informação nova depois de uma enumeração já anunciada, o que é prolixidade. As demais são enunciados mais enxutos, em que cada termo traz uma informação própria.',
  },
  {
    id: 'lp-semantica-qlivro32-36',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(IBFC - EBSERH - Advogado (HUPEST-UFSC) - 2016) Em “O homem maduro é de uma imaturidade a toda prova” (19°§), para provocar expressividade, foi empregada uma figura de estilo que se caracteriza, sobretudo:',
    alternativas: [
      'pela comparação implícita entre objetos concretos.',
      'por uma associação lógica de uma parte que remete ao todo.',
      'pela tentativa de suavização de uma ideia considerada ilógica.',
      'pelo emprego de palavras que apontam para sentidos contrários.',
      'pela atribuição de características humanas a seres inanimados.',
    ],
    correta: 3,
    comentario:
      'A expressão junta “maduro” e “imaturidade”, palavras de sentidos opostos, para produzir expressividade, o que caracteriza a antítese ou o paradoxo. A alternativa d descreve esse emprego de palavras que apontam para sentidos contrários. As demais descrevem comparação, metonímia, eufemismo e prosopopeia, que não se aplicam ao trecho.',
  },
  {
    id: 'lp-semantica-qlivro32-37',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(IBFC - TJ/PE - Analista Judiciário - 2017) Considere o fragmento abaixo para responder a questão. “A conclusão óbvia é que uma língua não é como nos ensinaram: clara e relacionada diretamente a um fato ou situação que ela representa como um espelho.” (3°§) Ao aproximar, semanticamente, a língua de um espelho, o autor emprega a seguinte figura de linguagem:',
    alternativas: ['Hipérbole.', 'Metáfora.', 'Eufemismo.', 'Símile.', 'Prosopopeia.'],
    correta: 3,
    comentario:
      'A aproximação entre língua e espelho vem explicitada pelo conectivo “como”, o que caracteriza comparação, também chamada símile. A metáfora dispensaria esse conectivo, enquanto hipérbole, eufemismo e prosopopeia tratam de exagero, suavização e atribuição de traço humano, que não aparecem no trecho.',
  },
  {
    id: 'lp-semantica-qlivro32-38',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(SEDUC/PA - Professor Classe I (Português) - 2018) Segundo o autor, “Quis o irónico destino, uns anos mais tarde, que eu fosse professor da Escola de Administração da Universidade Federal da Bahia” (3º§). O sujeito da primeira oração do trecho destacado remete-nos ao emprego de figura de linguagem que demonstra:',
    alternativas: ['Ironia.', 'Exagero.', 'Metáfora.', 'Personificação.'],
    correta: 3,
    comentario:
      'Ao dar ao “destino” a ação de querer, uma capacidade humana, o autor atribui características de pessoa a algo abstrato, o que caracteriza personificação. A ironia é a fala de sentido oposto, o exagero seria hipérbole e a metáfora exigiria uma comparação entre seres, sem atribuir vontade ao destino.',
  },
  {
    id: 'lp-semantica-qlivro32-39',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CESPE - SEFAZ/RS — Auditor Fiscal da Receita Estadual - 2019) Fragmento de texto: “Pixis foi um músico medíocre, mas teve seu dia de glória no distante ano de 1837. (...) Em um concerto em Paris, Franz Liszt tocou uma peça do (hoje) desconhecido compositor, junto com outra, do admirável, maravilhoso e extraordinário Beethoven... (...) Desconsiderar, no fenômeno estético, os mecanismos de recepção é correr o risco de aplaudir Pixis como se fosse Beethoven.” No trecho “aplaudir Pixis como se fosse Beethoven”, observa-se a figura de linguagem:',
    alternativas: ['catacrese.', 'metonímia.', 'eufemismo.', 'pleonasmo.', 'personificação.'],
    correta: 1,
    comentario:
      '“Aplaudir Pixis” designa a obra do compositor pelo nome do autor, uma substituição por relação de sentido entre a pessoa e o que ela produz, o que é metonímia. Catacrese é falta de termo próprio, eufemismo suaviza, pleonasmo repete ideia e personificação atribui traço humano, e nada disso ocorre no trecho.',
  },
  {
    id: 'lp-semantica-qlivro32-40',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Instituto Consulplan - Prefeitura de Formiga - MG - Farmacêutico - 2020) Releia os seguintes trechos do texto: “(...) o plugin é uma espécie de caixa de marca do seu site”; e, “(...) depois de três séculos de minutos pensando (...)”. Nesses dois trechos, o autor utilizou recursos expressivos próprios da linguagem conotativa para explicar, de forma inusitada, o funcionamento dos plugins. Assinale a alternativa que identifica, correta e respectivamente, os dois recursos expressivos utilizados pelo autor.',
    alternativas: [
      'Ironia e metáfora.',
      'Metáfora e ironia.',
      'Metáfora e hipérbole.',
      'Comparação e hipérbole.',
    ],
    correta: 2,
    comentario:
      'No primeiro trecho, o plugin é apresentado como “caixa de marca”, uma transposição de sentido sem conectivo, o que é metáfora. No segundo, “três séculos de minutos” exagera o tempo de modo intencional, o que é hipérbole. A sequência correta é metáfora e hipérbole, alternativa c.',
  },
  {
    id: 'lp-semantica-qlivro32-41',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - PC/RJ — Perito Legista — 2021) Um pleonasmo é uma figura que repete termos; um anacoluto é marcado por uma interrupção. A frase abaixo que contém um anacoluto, e não um pleonasmo, é:',
    alternativas: [
      'As mulheres, não se pode dar um elogio atualmente;',
      'Os livros, o aluno não os trouxe para a aula;',
      'Paisagens, quero-as comigo por toda a vida;',
      'Ao homem mesquinho, basta-lhe pouquinho;',
      'A mim até me pareceu que ia chover forte.',
    ],
    correta: 0,
    comentario:
      'Na alternativa a, “As mulheres” fica deslocado no início da frase, sem retomada e sem função sintática na oração, o que quebra a estrutura e caracteriza anacoluto. As demais repetem o termo com pronome que retoma o antecedente, como em “os... não os” e “quero-as”, por isso são pleonasmos.',
  },
  {
    id: 'lp-semantica-qlivro32-42',
    temaId: 'lp-semantica',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNDATEC — IPE Saúde — Técnico de Gestão em Saúde - 2022) Assinale a alternativa que indica a figura de linguagem correta e presente no trecho “alguns pontos ainda são sensíveis” do segmento “Todas as alterações foram feitas para evitar a propagação do vírus. Mas, como não houve muito tempo para uma preparação em larga escala, alguns pontos ainda são sensíveis”.',
    alternativas: [
      'Prosopopeia, pois atribui uma característica humana a um elemento inanimado.',
      'Gradação, pois indica um decréscimo de uma sensação.',
      'Hipérbole, por se tratar de um exagero.',
      'Paradoxo, por trazer duas ideias semelhantes.',
      'Sinestesia, pois apresenta mistura de sensações de diferentes sentidos.',
    ],
    correta: 0,
    comentario:
      'Atribuir a “pontos”, que são inanimados, a característica humana de serem sensíveis é uma personificação. A gradação exige sequência de intensidade, a hipérbole é exagero, o paradoxo reúne ideias opostas e a sinestesia mistura sensações, e nenhuma delas está presente no trecho.',
  },
];
