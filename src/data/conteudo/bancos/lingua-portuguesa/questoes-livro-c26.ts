import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 26 — Período misto), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C26: QuestaoTreino[] = [
  {
    id: 'lp-periodo-composto-qlivro26-01',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - SEFAZ/RJ - Fiscal de Rendas - 2007) Observe atentamente o trecho a seguir: “(...) A reflexão jurídica sobre o assunto, contudo, não se tem mostrado tão farta quanto aquela encontrada na economia. Isso se deve, talvez, à associação feita ao tema dos efeitos na utilização de recursos entre gerações especificamente na década de 70, quando o movimento ambientalista passou a formular um discurso jurídico mais sólido, angariando adeptos das mais variadas formações, em diversas partes do planeta. (...)”. Analise sua estrutura sintática e avalie as afirmativas a seguir: I. O primeiro período é composto por três orações. II. No segundo período encontram-se orações reduzidas de particípio e de gerúndio. III. No segundo período ocorrem dois casos de oração coordenada. IV. A oração “quando o movimento ambientalista passou a formular um discurso jurídico mais sólido” classifica-se como subordinada adjetiva. Assinale:',
    alternativas: [
      'se somente as afirmativas I e II estiverem corretas;',
      'se somente as afirmativas III e IV estiverem corretas;',
      'se somente as afirmativas II e III estiverem corretas;',
      'se somente as afirmativas I, II e IV estiverem corretas;',
      'se todas as afirmativas estiverem corretas.',
    ],
    correta: 3,
    comentario:
      'A alternativa D indica que I, II e IV estão corretas, e III não. A oração “quando o movimento ambientalista...” qualifica “a década de 70”, por isso é subordinada adjetiva (IV), e o segundo período traz as reduzidas de particípio (“associação feita”) e de gerúndio (“angariando adeptos”), como diz II. A III é a incorreta, pois o segundo período não tem dois casos de coordenação.',
  },
  {
    id: 'lp-periodo-composto-qlivro26-02',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - SEFAZ/RJ - Fiscal de Rendas - 2008) “É importante que os contribuintes percebam que a política tributária é justa, a administração fiscal é proba, sensível e confiável, e os recursos arrecadados são corretamente aplicados”. A respeito da estrutura sintática do período acima, é correto afirmar que há:',
    alternativas: [
      'cinco orações subordinadas e duas coordenadas entre si',
      'quatro orações subordinadas e três coordenadas entre si',
      'quatro orações subordinadas e duas coordenadas entre si',
      'cinco orações subordinadas e três coordenadas entre si',
      'três orações subordinadas e somente uma coordenada',
    ],
    correta: 1,
    comentario:
      'A alternativa B descreve a estrutura: a subordinação começa na oração “que os contribuintes percebam”, e as três orações que vêm depois dela (“que a política tributária é justa”, “a administração fiscal é proba” e “os recursos... são aplicados”) estão coordenadas entre si. As demais alternativas trocam o número de subordinadas ou de coordenadas, o que não corresponde à leitura do período.',
  },
  {
    id: 'lp-periodo-composto-qlivro26-03',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - SSP/RJ - Inspetor de Polícia Civil - 2008) “Conduzo tua lisa mão / Por uma escada espiral / E no alto da torre exibo-te o varal / Onde balança ao léu mintíalma”. Tomando o trecho acima como um período composto, há:',
    alternativas: [
      'três orações, sendo duas subordinadas',
      'três orações, sendo uma subordinada',
      'quatro orações, sendo duas coordenadas',
      'quatro orações, sendo uma coordenada',
      'duas orações, sendo uma coordenada',
    ],
    correta: 1,
    comentario:
      'O trecho tem três verbos (conduzo, exibo, balança), logo três orações: a principal “Conduzo tua lisa mão”, a coordenada “E no alto da torre exibo-te o varal” e a subordinada adjetiva que qualifica o varal. Há, portanto, três orações, sendo uma subordinada, como indica a alternativa B. A expressão “Por uma escada espiral” não tem verbo, por isso não conta como oração.',
  },
  {
    id: 'lp-periodo-composto-qlivro26-04',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - Senado Federal - Técnico Legislativo - Administração - 2008) “Aqueles com aptidão a ajudá-los, se não estimulados por cenários competitivos, estarão fadados a não encontrar motivação para o exercício de suas funções”. A respeito do período acima, analise os itens a seguir: I. O período é composto por quatro orações. II. Há três orações reduzidas. III. Há uma oração coordenada. Assinale:',
    alternativas: [
      'se todos os itens estiverem corretos;',
      'se somente o item II estiver correto;',
      'se somente o item III estiver correto;',
      'se somente o item I estiver correto;',
      'se nenhum item estiver correto.',
    ],
    correta: 3,
    comentario:
      'Somente o item I está correto, pois o período tem quatro orações. O item II não se sustenta na contagem das reduzidas, e o III afirma a existência de uma coordenada que não aparece no período. Por isso a resposta é a alternativa D.',
  },
  {
    id: 'lp-periodo-composto-qlivro26-05',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - Prefeitura de Angra dos Reis/RJ - Fiscal de Rendas - 2010) “(...) Da mesma forma, diarreias epidêmicas, parasitoses intestinais e outras enfermidades transmissíveis por mão da água contaminada têm sua incidência aumentada, tanto por causa das dificuldades de saneamento nas secas, quanto por contaminação com esgotos, lixo e dejetos de animais durante as enchentes. (...)” O período acima:',
    alternativas: [
      'é composto por coordenação;',
      'é composto por subordinação;',
      'é composto por coordenação e subordinação;',
      'é simples;',
      'apresenta orações reduzidas.',
    ],
    correta: 3,
    comentario:
      'O período é simples: há um único predicado, “têm ... aumentada”, e as expressões “tanto por causa... quanto por contaminação” são adjuntos adverbiais, não orações. Por isso a resposta é a alternativa D. As demais supõem orações que não existem no período, como uma coordenada ou uma subordinada introduzida pelo “quanto”.',
  },
  {
    id: 'lp-periodo-composto-qlivro26-06',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - TJ/SP - Agente de Fiscalização Judiciária - 2010) No trecho “... a empresa gostaria que o jogo fosse refeito, que a trapaça não tivesse acontecido.” têm-se, além de uma oração principal:',
    alternativas: [
      'duas orações coordenadas e três subordinadas',
      'três orações coordenadas e uma subordinada',
      'três orações subordinadas',
      'três orações coordenadas',
      'duas orações subordinadas coordenadas entre si',
    ],
    correta: 4,
    comentario:
      'Além da principal “a empresa gostaria”, há duas orações subordinadas substantivas objetivas diretas, “que o jogo fosse refeito” e “que a trapaça não tivesse acontecido”, que estão coordenadas entre si, ligadas apenas pela vírgula. Por isso a alternativa E descreve corretamente o trecho. As demais inventam uma subordinada a mais ou tratam as orações como coordenadas da principal.',
  },
  {
    id: 'lp-periodo-composto-qlivro26-07',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - CODESP - Administrador - 2010) “(...) São numerosas oportunidades perdidas que se multiplicarão, se a economia brasileira continuar com seu impulso de crescimento — e a qualidade da educação continuar baixa.” A respeito da composição do período acima, analise as afirmativas a seguir: I. Há uma oração principal. II. Há duas orações subordinadas adverbiais. III. O período é composto por coordenação e subordinação. Assinale:',
    alternativas: [
      'se apenas as afirmativas I e III estiverem corretas;',
      'se apenas as afirmativas I e II estiverem corretas;',
      'se todas as afirmativas estiverem corretas;',
      'se nenhuma alternativa estiver correta;',
      'se apenas as afirmativas II e III estiverem corretas.',
    ],
    correta: 2,
    comentario:
      'Todas as afirmativas são verdadeiras. A principal é “São numerosas oportunidades perdidas”, a oração “que se multiplicarão” é subordinada adjetiva, e as duas condicionais, a primeira introduzida por “se” e a segunda ligada a ela pelo “e”, são subordinadas adverbiais, o que combina coordenação entre elas com subordinação das demais orações. Por isso a alternativa C é a correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro26-08',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - TRE/PA - Técnico Judiciário - 2011) “Minha proposta é a de que o fundo partidário seja composto por uma quantia mínima para o partido manter uma estrutura básica”. A respeito do período acima, analise as afirmativas a seguir: I. O período poderia ser redigido, sem incorrer em inadequação gramatical ou semântica, da seguinte maneira: “Minha proposta é que o fundo partidário seja composto por uma quantia mínima para o partido manter uma estrutura básica”. II. O período é composto por três orações. III. No período há uma oração reduzida de particípio. Assinale:',
    alternativas: [
      'se apenas as afirmativas I e III estiverem corretas;',
      'se apenas as afirmativas II e III estiverem corretas;',
      'se nenhuma afirmativa estiver correta;',
      'se todas as afirmativas estiverem corretas;',
      'se apenas as afirmativas I e II estiverem corretas.',
    ],
    correta: 4,
    comentario:
      'A resposta é a alternativa E: I e II estão corretas, e III não. A reescrita com “que” no lugar de “a de que” mantém a gramática e o sentido. O período tem três orações: a principal “Minha proposta é”, a subordinada “que o fundo ... seja composto” e a reduzida de infinitivo “para o partido manter”, mas não há particípio reduzido, o que torna a III falsa.',
  },
  {
    id: 'lp-periodo-composto-qlivro26-09',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - SEFAZ/RJ - Auditor-Fiscal da Receita Estadual - 2011) Na Espanha, por exemplo, a recentíssima reforma do Código Penal — que atende diretivas da União Europeia sobre o tema — trouxe, no artigo 31 bis, não só a possibilidade de responsabilização penal da pessoa jurídica (por delitos que sejam cometidos no exercício de suas atividades sociais, ou por conta, nome, ou em proveito delas), mas também estabelece regras de como essa responsabilização será aferida nos casos concretos (ela será aplicável [...], em junção da inoperância de controles empresariais, sobre atividades desempenhadas pelas pessoas físicas que as dirigem ou que agem em seu nome). A respeito do período acima, analise as afirmativas a seguir: I. Há uma oração coordenada sindética aditiva e uma oração coordenada sindética alternativa. II. Há três orações na voz passiva, mas somente uma com agente da passiva explícito. III. Há quatro orações subordinadas adjetivas desenvolvidas e uma oração subordinada adjetiva reduzida. Assinale:',
    alternativas: [
      'se apenas as afirmativas I e II estiverem corretas;',
      'se apenas as afirmativas II e III estiverem corretas;',
      'se apenas as afirmativas I e III estiverem corretas;',
      'se nenhuma afirmativa estiver correta;',
      'se todas as afirmativas estiverem corretas.',
    ],
    correta: 4,
    comentario:
      'Todas as afirmativas são verdadeiras, por isso a resposta é a alternativa E. O período reúne coordenação aditiva (“não só ... mas também”) e alternativa (“ou por conta”), várias orações na voz passiva e subordinadas adjetivas, desenvolvidas e reduzidas, e cada afirmativa se confirma na análise. As alternativas que excluem alguma afirmativa não se sustentam.',
  },
  {
    id: 'lp-periodo-composto-qlivro26-10',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(CONSULPLAN - TSE - Analista Judiciário - 2012) Aquele que age na direção da lei como que age contra a moral caracterizada pelo “fazer como a grande maioria”, levando em conta que no âmbito da corrupção se entende que o que a maioria quer é “dinheiro”. A respeito do período anterior, analise as afirmativas a seguir. I. O período apresenta orações coordenadas e subordinadas. II. Há ocorrência de exemplo de oração reduzida. III. Há ocorrência de exemplo de oração subordinada substantiva objetiva direta. Assinale:',
    alternativas: [
      'se todas as afirmativas estiverem corretas;',
      'se apenas as afirmativas II e III estiverem corretas;',
      'se apenas as afirmativas I e II estiverem corretas;',
      'se apenas as afirmativas I e III estiverem corretas;',
    ],
    correta: 1,
    comentario:
      'Apenas II e III são verdadeiras, e a resposta é a alternativa B. “Levando em conta” é uma oração reduzida de gerúndio, e “que a maioria quer é dinheiro” é subordinada substantiva objetiva direta de “se entende”. O período não tem nenhuma conjunção coordenativa, por isso a afirmativa I é falsa.',
  },
];
