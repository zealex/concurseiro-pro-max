import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 34 — Compreensão/interpretação de textos e tipologia textual), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C34: QuestaoTreino[] = [
  {
    id: 'lp-interpretacao-qlivro34-01',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - ICMS-RJ — Fiscal de Rendas — 2008) Com base na leitura do texto, analise os itens a seguir: I. Em “Portanto, a necessidade de as gerações atuais preservarem recursos para as gerações futuras também se dá no que tange aos recursos públicos” o termo grifado colabora com a identificação de um pressuposto. II. Em “Não mais se concebe uma atuação estatal efetiva sem uma apurada reflexão sobre os gastos públicos, seus limites e sua aplicação”, na identificação dos implícitos, observa-se um pressuposto. III. Em “Enquanto o primeiro, normalmente, se adstringe a situações futuras próximas, o segundo vincula-se a situações futuras a longo prazo”, a leitura só se efetiva se o leitor identificar os subentendidos. Assinale:',
    alternativas: [
      'Se somente os itens II e III estiverem corretos.',
      'Se somente os itens I e II estiverem corretos.',
      'Se todos os itens estiverem corretos.',
      'Se nenhum item estiver correto.',
      'Se somente os itens I e III estiverem corretos.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: o advérbio “também” pressupõe que outros recursos já foram mencionados, e a expressão “não mais” pressupõe que antes se concebia outra atuação estatal. O item III está errado porque os marcadores “normalmente” e “vincular-se” geram pressupostos, decorrentes do sentido das palavras, e não subentendidos, que dependem de dedução subjetiva do interlocutor.',
  },
  {
    id: 'lp-interpretacao-qlivro34-02',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(UERJ - Vestibular (2ª EQ) - 2012) Político que ousou pensar, intelectual que não se omitiu em agir, pensador e ativista com causa, principal artífice da abolição do regime escravocrata no Brasil. (l. 2-4) Na frase acima, Cristovam Buarque define Joaquim Nabuco de quatro maneiras. As três primeiras definições partem de determinadas pressuposições. Uma pressuposição que se pode deduzir da leitura do fragmento é:',
    alternativas: [
      'ativistas têm abraçado muitas causas;',
      'intelectuais costumam resistir à ação;',
      'políticos ousam pensar a respeito de tudo;',
      'pensadores têm lutado pelo fim da escravidão.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: ao definir Nabuco como “intelectual que não se omitiu em agir”, o texto pressupõe que intelectuais costumam se omitir, ou seja, resistir à ação. A alternativa C inverte o pressuposto, pois “político que ousou pensar” pressupõe que políticos não costumam pensar, e não que ousem pensar sobre tudo.',
  },
  {
    id: 'lp-interpretacao-qlivro34-03',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fundação Sousândrade — BNB — Analista Bancário — 2007) A argumentação textual está organizada, principalmente, em torno do sentido de restrição. Assinale a opção em que o termo destacado estabelece uma relação com esse mesmo sentido.',
    alternativas: [
      '“É um indicador usado pelas agências internacionais de classificação de risco para definir os países que, em tese, merecem a confiança dos investidores”.',
      '“O atual é algo que, no idioma de economistas e operadores, recebe o nome de ‘grau de investimento’”.',
      '“São aqueles que, em princípio, têm um ambiente político-econômico mais estável que os demais e pagam em dia seus compromissos externos”.',
      '“Até agora, apesar da consistência da política econômica praticada no país nos últimos anos, o Brasil ainda não conseguiu nota suficiente para ser aprovado no vestibular”.',
      '“Muitos analistas passaram a encarar a obtenção do ‘grau de investimento’ como uma panaceia, algo indispensável para garantir um futuro brilhante para o Brasil”.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: a locução “apesar da consistência” introduz uma ressalva que contraria a expectativa de aprovação, exatamente o sentido de restrição pedido. Em A, “em tese” marca hipótese; em C, “em princípio” marca suposição; em B e E não há marca de restrição, apenas nomeação ou valorização de um conceito.',
  },
  {
    id: 'lp-interpretacao-qlivro34-04',
    temaId: 'lp-interpretacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FCC - MPU — Analista Processual — 2007) (Adaptada) A afirmação abaixo está correta ou incorreta? “(...) A experiência da Europa Central e Oriental no século XX é, genericamente falando, a de tentar atualizar-se mediante a sucessiva adoção e fracasso de vários modelos. (...)” - A expressão genericamente falando constitui estratégia do autor para orientar o processo de leitura do trecho.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. A expressão “genericamente falando” modaliza a generalização e avisa o leitor de que a frase deve ser lida com essa ressalva, o que orienta a leitura do trecho.',
  },
  {
    id: 'lp-interpretacao-qlivro34-05',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - ICMS/SP - Fiscal de Rendas - 2008) “As alternativas atuais para a construção de uma economia sólida e menos suscetível passam necessariamente pelo controle de gastos públicos. Alguns países desenvolvidos, tendo em vista essa perspectiva, buscaram limitar gastos e muitas vezes editaram leis para esse fim. É impossível, na atualidade, visualizar qualquer Estado que se proponha ao desenvolvimento sem um minucioso projeto de controle de gastos públicos”. O segundo período do trecho acima, em relação ao primeiro, constitui uma:',
    alternativas: ['explicação;', 'explicitação;', 'exemplificação;', 'contraposição;', 'retificação.'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: o segundo período traz casos concretos, os países desenvolvidos que limitaram gastos, para ilustrar a afirmação do primeiro. Não há explicação nem explicitação de termo, e tampouco contraposição ou retificação, pois o segundo período reforça o primeiro em vez de contrariá-lo.',
  },
  {
    id: 'lp-interpretacao-qlivro34-06',
    temaId: 'lp-interpretacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - IRBr - Diplomata - 2008) No texto, a oposição ou contraste como estratégia argumentativa pode ser exemplificada em vários enunciados, entre eles: “Não veio salvar o morto. Veio salvar a vida, a nossa vida.” e “encontrará não a folha escrita mas um vazio que você mesmo irá preencher”.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. Os dois enunciados constroem contraste por meio da negação seguida de afirmação, como “não veio salvar o morto” contra “veio salvar a vida”, e “não a folha escrita” contra “um vazio”, que é a própria estratégia de oposição descrita.',
  },
  {
    id: 'lp-interpretacao-qlivro34-07',
    temaId: 'lp-interpretacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - IRBr - Diplomata - 2009) (Adaptada) A afirmação abaixo está correta ou incorreta? “(...) Na oposição que o texto faz entre a arte de falar e a arte de escrever, podemos encontrar não apenas as razões da desqualificação da concepção gramatical da linguagem, mas também a indicação do estatuto que Rousseau confere à linguagem. (...)” Os operadores “não apenas” e “mas também” possibilitam ao autor a apresentação de dois argumentos mutuamente excludentes.',
    gabaritoCE: false,
    comentario:
      'A afirmação está incorreta. Os operadores “não apenas... mas também” são aditivos: somam dois argumentos que se reforçam, e não se excluem. A oposição do trecho está entre a arte de falar e a de escrever, e não entre os dois argumentos.',
  },
  {
    id: 'lp-interpretacao-qlivro34-08',
    temaId: 'lp-interpretacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FCC - MRE - Oficial de Chancelaria - 2009) (Adaptada) A afirmação abaixo está correta ou incorreta? O enunciado “aquilo que o texto nos diz já não constitui o objeto preferido de nossa atenção” contém pressuposto introduzido pelo advérbio já.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. O advérbio “já”, ao indicar que algo deixou de ser objeto de atenção, pressupõe que antes o conteúdo do texto era o foco, e esse pressuposto permanece mesmo se a frase for negada.',
  },
  {
    id: 'lp-interpretacao-qlivro34-09',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FADESP - Pref. Conceição Araguaia/PA - Médico - 2009) No trecho “Em outras palavras, são adolescentes que pela lei ainda não podem ser responsabilizados por seus atos — com atribuições como sustentar uma casa ou mesmo criar filhos”, a locução grifada tem a função de:',
    alternativas: [
      'retomar e reformular a informação anterior;',
      'acrescentar um elemento decisivo à argumentação do autor;',
      'introduzir uma informação de pouca importância para a questão levantada;',
      'assinalar uma estratégia concessiva por meio da qual o autor introduz novas informações.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “em outras palavras” introduz uma reformulação do que foi dito antes, retomando a informação com outros termos. B está errada porque nenhum elemento decisivo é acrescentado, C porque o trecho não diminui a importância do que é dito, e D porque não há concessão nem informação nova.',
  },
  {
    id: 'lp-tipologia-qlivro34-10',
    temaId: 'lp-tipologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(UESPI - PC/PI - Delegado - 2009) Viver em sociedade (1) A sociedade humana é um conjunto de pessoas ligadas pela necessidade de se ajudarem umas às outras, a fim de que possam garantir a continuidade da vida e satisfazer seus interesses e desejos. (2) Sem vida em sociedade, as pessoas não conseguiriam sobreviver, pois o ser humano, durante muito tempo, depende de outros para conseguir alimentação e abrigo. E no mundo moderno, com a grande maioria das pessoas morando na cidade, com hábitos que tornam necessários muitos bens produzidos pela indústria, não há quem não necessite de outros muitas vezes por dia. (3) Mas as necessidades dos seres humanos não são apenas de ordem material, como os alimentos, a roupa, a moradia, os meios de transporte e os cuidados de saúde. Elas são também de ordem espiritual e psicológica. Toda pessoa humana necessita de afeto, precisa amar e sentir-se amada, quer sempre que alguém lhe dê atenção e que todos a respeitem. Além disso, todo ser humano tem suas crenças, tem sua fé em alguma coisa, que é a base de suas esperanças. (4) Os seres humanos não vivem em sociedade, apenas porque escolhem esse modo de vida, mas também porque a vida em sociedade é uma necessidade da natureza humana. Mas, justamente porque vivendo em sociedade é que a pessoa humana pode satisfazer suas necessidades, é preciso que a sociedade seja organizada. E não basta que a vida social permita apenas a satisfação de algumas necessidades da pessoa humana ou de todas as necessidades de apenas algumas pessoas. A sociedade organizada com justiça é aquela em que se procura fazer com que todas as pessoas possam satisfazer todas as suas necessidades; é aquela em que todos têm as mesmas oportunidades, aquela em que os benefícios e encargos são repartidos igualmente entre todos. (5) Para que essa repartição se faça com justiça, é preciso que todos procurem conhecer seus direitos e exijam que eles sejam respeitados; é preciso também que todos conheçam e cumpram seus deveres e suas responsabilidades sociais. O Texto, para ser compreendido com sucesso, deve ser percebido como um texto:',
    alternativas: [
      'Narrativo-descritivo; basta ver o cenário e os personagens que compõem o enredo apresentado.',
      'Expositivo-argumentativo; há a definição de um conceito em torno do qual é construída uma argumentação.',
      'Narrativo-dissertativo; os fatos são propostos ao leitor com uma finalidade claramente dissertativa.',
      'Descritivo-apelativo; predominam no texto estratégias de convencimento, semelhantes àquelas que ocorrem na publicidade.',
      'Expositivo-injuntivo; o texto é construído para indicar etapas e procedimentos que um determinado processo implica.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: o texto define sociedade organizada com justiça e sustenta essa definição com argumentos sobre necessidades materiais, espirituais e a natureza humana. A alternativa A descreve uma narrativa que não existe no texto, C e D apontam sequências que não predominam, e E sugere etapas de procedimento, que o texto não traz.',
  },
  {
    id: 'lp-interpretacao-qlivro34-11',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Cesgranrio - Petrobras - Todos os Cargos (Nível Superior) - 2010) Em “afinal, sou humano...”, o elemento destacado é um operador argumentativo de:',
    alternativas: ['condição;', 'consequência;', 'conclusão;', 'conformidade;', 'concessão.'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “afinal” é operador de conclusão, pois apresenta a ideia final de um raciocínio, como desfecho ou resumo do que foi dito antes. Condição trabalha com hipótese, consequência com efeito de uma causa, conformidade com acordo com algo, e concessão com ressalva ao que se afirma.',
  },
  {
    id: 'lp-interpretacao-qlivro34-12',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(ADVISE - SESC/CE — Biblioteconomista - 2010) A FÉ CURA. Pesquisas sugerem novíssimas evidências de que a religiosidade tem o poder de auxiliar na cura de vários problemas de saúde — de tumores a depressão. por Raquel de Medeiros. A recuperação de pacientes com câncer está diretamente ligada à sua religiosidade. Taxativo assim é o resumo dos resultados de um estudo realizado na Universidade de São Paulo, que foi divulgado há pouco. “Para começar, os pacientes que têm uma crença religiosa se mostram mais confiantes para lutar contra a doença”, explica a psicóloga Joelma Ana Espíndula, que liderou a pesquisa. O trabalho ouviu 12 voluntários em tratamento e 11 especialistas em oncologia do Hospital Beneficência Portuguesa, em Ribeirão Preto, no interior paulista. O surpreendente é que até mesmo os profissionais de saúde entrevistados ressaltaram a importância da religião para a melhora do quadro dos doentes. “A maioria deles acredita que a fé ajuda a superar um problema grave. Os médicos dizem que o sistema imunológico desses indivíduos aparenta ser mais resistente, e talvez por isso eles apresentem uma recuperação mais satisfatória”, conclui Joelma. Outro estudo, que leva a assinatura da Universidade de Toronto, no Canadá, revela que a fé é um santo remédio contra a ansiedade e a depressão. Ele prova que pessoas religiosas ou que apenas acreditam na existência de Deus são menos angustiadas e sentem menor culpa em relação aos próprios erros. Os especialistas avaliaram a mente de 51 universitários por meio de testes e da eletroencefalografia, método que se vale de eletrodos dispostos na cabeça para medir as correntes elétricas do cérebro. A maioria dos participantes era cristã, mas no grupo também havia muçulmanos, hindus, budistas e ateus. “Nossa principal descoberta foi perceber que há um elo entre as crenças religiosas e a atividade de uma parte da massa cinzenta chamada de córtex cingulado anterior”, conta o psicólogo Michael Inzlicht, que coordenou a pesquisa. “Quanto mais as pessoas acreditam em Deus, menos atuante é essa região”. Só para ter uma ideia, o córtex cingulado anterior costuma trabalhar em dobro em indivíduos pra lá de ansiosos. O sentido que a religião dá para a vida dos pacientes pode ser a chave para explicar esse fenômeno. “Suspeitamos que se trata de uma proteção contra a ansiedade e a depressão porque ela dá um significado para a vida”, afirma Inzlicht. A oncologista Nise Yamaguchi, de São Paulo, compartilha da mesma opinião. “A performance física de um indivíduo depende de aspectos emocionais, mentais e espirituais. Quem acredita que a vida continua após a morte tem uma postura diferente da pessoa que não crê na continuidade”, diz Nise, uma das mais conceituadas especialistas em câncer do país. (...) Para dar consistência a seu texto, Raquel Medeiros utiliza-se de estratégias argumentativas. Dentre as estratégias listadas abaixo, qual a autora emprega com mais frequência?',
    alternativas: [
      'relação de causa e consequência;',
      'apelo emocional;',
      'comparação/contraste;',
      'dados estatísticos;',
      'argumentos de autoridade.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: o texto ancora suas afirmações nas falas de especialistas, como a psicóloga que liderou a pesquisa, o psicólogo Michael Inzlicht e a oncologista Nise Yamaguchi, o que caracteriza argumento de autoridade. Os números aparecem de forma pontual, e causa e consequência, comparação e apelo emocional não predominam no desenvolvimento.',
  },
  {
    id: 'lp-tipologia-qlivro34-13',
    temaId: 'lp-tipologia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FCC - TRF (4ª R) - Analista Judiciário (Taquigrafia) - 2010) (Adaptada) A afirmação abaixo está correta ou incorreta? Ao se dirigir ao juiz, pediu-lhe o advogado de defesa que adiasse a sessão, informando ao magistrado que sua principal testemunha estava adoentada e, por essa razão, impossibilitada de comparecer. - Em discurso direto, a fala correta do advogado seria: Solicito-lhe, Meritíssimo, que adie a sessão, uma vez que minha principal testemunha encontra-se adoentada, o que a impede de comparecer.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. No discurso direto, a terceira pessoa passa à primeira, o pretérito do discurso indireto volta ao presente (“adiasse” vira “adie”, “estava” vira “encontra-se”), e o possessivo “sua” vira “minha”, com o vocativo “Meritíssimo” usado pelo advogado ao falar com o juiz.',
  },
  {
    id: 'lp-tipologia-qlivro34-14',
    temaId: 'lp-tipologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - AL-SP — Agente Técnico Legislativo — 2010) O velho e divertido Barão de Itararé já reivindicava (...): “Restaure-se a moralidade, ou então nos locupletemos todos!”. Transpondo-se adequadamente o trecho acima para o discurso indireto, ele ficará: O velho e divertido Barão de Itararé já reivindicava que:',
    alternativas: [
      'ou bem se restaurasse a moralidade, senão nos locupletaríamos todos.',
      'fosse restaurada a moralidade, ou então que nos locupletássemos todos.',
      'seja restaurada a moralidade, ou todos nos locupletávamos.',
      'seria restaurada a moralidade, caso contrário nos locupletássemos.',
      'a moralidade seja restaurada, quando não venhamos a nos locupletar.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “restaure-se” passa para “fosse restaurada” e “nos locupletemos” para “que nos locupletássemos”, mantendo a coordenação com “ou então”. A alternativa A altera a conjunção e o tempo; C mistura modos e tempos; D e E trocam “ou então” por “caso contrário” e “quando não” e alteram o sentido.',
  },
  {
    id: 'lp-tipologia-qlivro34-15',
    temaId: 'lp-tipologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FMZ/AP - SEAD/AP - Agente Penitenciário - 2010) O exercício diário da meditação limpa as impurezas impregnadas em nossa mente, como medo, raiva, ansiedade e culpa. Classificadas na Ayurveda (a tradicional medicina indiana) como as mais perigosas toxinas que existem, essas emoções negativas nos desequilibram e, quando se transformam em hormônios de estresse, causam envelhecimento precoce. Portanto, ao meditar, praticamos um exercício de rejuvenescimento — ao mesmo tempo em que aumentamos a produtividade, a criatividade, a concentração e a inteligência. Mais: a mente apaziguada auxilia na prevenção de doenças e acelera a recuperação física. E ainda é a melhor ferramenta para o autoconhecimento, o autodesenvolvimento e a realização espontânea dos desejos. Agora, vamos à ação: coluna ereta, solas dos pés firmes apoiadas no chão, feche os olhos e coloque atenção na respiração. Observe o ar entrando e saindo dos pulmões. E só. Em inglês, o estado meditativo é definido “restful alertness”, que pode ser traduzido como “estado de alerta relaxado”. Não é uma delícia? Pratique hoje por 5 minutos, e amanhã, e depois, e, gradativamente, vá aumentando esse tempo. O ideal é chegar a meia hora diária. Melhor ainda se conseguir meditar ao amanhecer e no fim do dia. Mas se entre o ideal e o possível a distância é grande, não se incomode. Faça o que der para a sua realidade. Você verá que nesse processo, a cada dia, fica mais fácil viver. Simples assim. Analisando a forma de organização do texto, podemos dizer que ele se estrutura predominantemente por meio de sequências linguístico-textuais, denominadas de:',
    alternativas: [
      'descrição e argumentação;',
      'exposição e injunção;',
      'narração e descrição;',
      'argumentação e narração;',
      'conversa e argumentação.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: o texto expõe informações sobre a meditação, seus efeitos e a definição de “restful alertness”, e sobretudo dá instruções ao leitor, como manter a coluna ereta, fechar os olhos e praticar por cinco minutos, o que é injunção. Não há narração de fatos, nem predominância descritiva ou argumentativa.',
  },
  {
    id: 'lp-interpretacao-qlivro34-16',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf - Auditor-Fiscal do Trabalho - AFT - MTE - 2010) A década de 1980 foi o marco do surgimento de um novo ator social nos países ricos: o novo-pobre (nouveau-pauvre). Corolário do desmoronamento do sistema de proteção social, em um quadro agravado pela revolução tecnológica, que automatizou o sistema produtivo sem gerar novos postos de trabalho, esse novo personagem vai materializar uma inesperada e imprevisível reprodução, no mundo desenvolvido, do problema da desigualdade social, tão comum no terceiro mundo. O novo-pobre é, cada vez mais, a expressão do fenômeno da exclusão social. Não é mais um indivíduo que está à margem, mas, sim, fora do sistema econômico e social prevalente. Não tem acesso ao mercado de trabalho (nem mesmo informal), não tem perspectiva de engajamento (independentemente de seu grau de qualificação profissional) e, cada vez mais, vai ficando de fora dos mecanismos de proteção social do moribundo welfare state. No caso da periferia, o fenômeno global da emergência do novo-pobre, deserdado do neoliberalismo, soma-se ao histórico problema da pobreza. Os velhos-pobres, em países como o Brasil, são atores presentes na formação da sociedade nacional desde seus primórdios. O que se apresenta como fato novo é a constatação de que estes últimos caíram dos patamares da pobreza para os da miséria. E isso é tão evidente como tão mais urbana foi-se tornando a sociedade. Assinale a opção que apresenta ideia que se confirma no texto.',
    alternativas: [
      'A categoria social novo-pobre aplica-se à realidade observada apenas nos países pobres.',
      'O processo de urbanização verificado no mundo na década de 1980 foi o fator principal do surgimento de um novo ator social, fadado à exclusão social.',
      'Os efeitos do neoliberalismo no sistema produtivo são observados, a partir de 1980, tanto em países ricos quanto no terceiro mundo.',
      'A partir da década de 1980, verifica-se a substituição do processo histórico de marginalização social pelo de exclusão, fenômeno que atinge exclusivamente as populações da periferia dos países do terceiro mundo.',
      'Dado estar o neoliberalismo atrelado à exclusão social, não surpreende que seus efeitos se tenham manifestado nos países ricos, nos quais, à semelhança do que ocorreu no terceiro mundo a partir de 1980, a desigualdade social instaurou-se.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: o texto mostra que o novo-pobre surge nos países ricos como reflexo do desmonte da proteção social, enquanto a desigualdade já era comum no terceiro mundo, ou seja, o fenômeno aparece nos dois lados. A alternativa A contraria o texto, que fala de países ricos; B e D exageram ao atribuir causa única ou exclusividade; E inverte a relação entre neoliberalismo e exclusão.',
  },
  {
    id: 'lp-interpretacao-qlivro34-17',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      'Leia: Com devoção e entusiasmo, o sul do mundo copia e multiplica os piores costumes do norte. E do norte não recebe as virtudes, mas o pior: torna suas a religião norte-americana do automóvel e do desprezo pelo transporte público, bem como toda a mitologia da liberdade de mercado e da sociedade de consumo. E o sul também recebe, de braços abertos, as fábricas mais porcas, as mais inimigas da natureza, em troca de salários que dão saudade da escravidão. No entanto, cada habitante do norte consome, em média, dez vezes mais petróleo, gás e carvão; e, no sul, apenas uma de cada cem pessoas tem carro próprio. Gula e jejum do cardápio ambiental: 75% da contaminação do mundo provêm de 25% da população. E, nessa minoria, claro, não figuram o bilhão e duzentos milhões que vivem sem água potável nem o bilhão e cem milhões que, a cada noite, vão dormir de barriga vazia. Não é “a humanidade” a responsável pela devoração dos recursos naturais nem pelo apodrecimento do ar, da terra e da água. O poder encolhe os ombros: quando este planeta deixar de ser rentável, mudo-me para outro. De acordo com o autor do texto, não é um fenômeno positivo que:',
    alternativas: [
      'apenas uma em cada cem pessoas dos países do hemisfério norte possua automóvel.',
      '75% da população mundial utilize água potável e se alimente de forma saudável.',
      'os países do norte do mundo atribuam a culpa por todas as mazelas da sociedade global aos países do hemisfério sul.',
      'o desenvolvimento dos países ricos seja pautado, principalmente, na instalação de indústrias nos países do hemisfério sul.',
      'ações predatórias do modelo de desenvolvimento de países ricos sejam bem recebidas nos países do hemisfério sul.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: o autor critica o fato de o sul receber de braços abertos as fábricas mais poluentes, ou seja, aceitar ações predatórias do norte, o que ele considera um mal e não um fenômeno positivo. A ênfase do texto recai sobre a crítica à poluição e à desigualdade, e não sobre as vantagens das práticas citadas nas demais alternativas.',
  },
  {
    id: 'lp-interpretacao-qlivro34-18',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Em relação às ideias do texto abaixo, assinale a opção correta. Na história do capitalismo, as crenças a respeito da relação entre Estado e mercado seguem uma dinâmica pendular, chegando a atingir os extremos do espectro ideológico. Períodos de maior confiança no livre mercado e na desregulamentação podem permitir intenso crescimento econômico, mas em geral se associam a deslocamentos abruptos e nocivos no tecido social. A reação comum nos momentos subsequentes, em especial após uma crise, é uma meia-volta em favor de maior intervenção do Estado. Depois de 20 anos de marcante crescimento global, quando reinou o ultraliberalismo no Ocidente e irromperam a revolução da tecnologia da informação, a globalização acelerada e o protagonismo da China, nova reviravolta pendular foi deflagrada pela crise financeira de 2008, que fez ressurgir em muitos meios a crença no “Estado grande”. Os adeptos desse slogan em geral colocam Estado e mercado como opostos. É um erro. Trata-se mais de uma simbiose do que de uma luta, pois, longe de existir em si mesmo, o mercado está inserido nas estruturas da sociedade e, por conseguinte, na política. Mas o fato é que, se antes o risco do ultramercadismo prevalecia, agora é a ameaça do ultraestatismo que cabe combater.',
    alternativas: [
      'Predomina na história do capitalismo a ideologia da desregulamentação.',
      'A confiança no livre mercado produz crescimento econômico sem crises.',
      'O ultraliberalismo provocou e intensificou o protagonismo da China.',
      'A crise financeira de 2008 estimulou a crença no intervencionismo do Estado.',
      'O mercado funciona de forma independente em relação ao Estado.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: o texto diz que a crise de 2008 fez ressurgir a crença no “Estado grande”, ou seja, reforçou a defesa da intervenção estatal. A alternativa A contraria a dinâmica pendular descrita, B ignora que o texto associa o livre mercado a abalos sociais, C trata como causa o que o texto apresenta como fatos concomitantes, e E contraria a ideia de simbiose.',
  },
  {
    id: 'lp-interpretacao-qlivro34-19',
    temaId: 'lp-interpretacao',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — Correios — Analista de Correios (Letras) — 2011) “Você não acha que, daqui um tempo, todo mundo vai depender de tecnologias digitais para gerenciar a vida?” É claro que sim. Quem disser que não estará reproduzindo o discurso daquelas pessoas que eram contrárias às linhas férreas, por exemplo. Elas diziam que aquilo não era seguro, que era mais fácil lidar com carroças e cavalos. Isso não existe! Nós vivemos na era da informação e as nações que quiserem realmente estar nesse tempo devem colocar cada vez mais informações na rede. Não acredito que seja possível nos desligarmos dessa dependência tecnológica, ainda mais se nós realmente quisermos nos manter competitivos. O que nós precisamos fazer é nos preparar para essa onda tecnológica. Na argumentação formulada como resposta à indagação proposta no início do fragmento de texto acima, o entrevistado recorre à estratégia de se posicionar a respeito da pergunta feita, tal como se percebe no emprego da expressão “Não acredito”.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. Ao responder “Não acredito que seja possível nos desligarmos dessa dependência”, o entrevistado assume uma posição explícita diante da pergunta, marcada pela primeira pessoa e por um verbo de opinião, o que corresponde à estratégia apontada.',
  },
  {
    id: 'lp-interpretacao-qlivro34-20',
    temaId: 'lp-interpretacao',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB — IFB — Cargos de Nível Médio — 2011) O uso do imperativo “Acalmem-se” é uma das estratégias utilizadas pelo autor para aproximar a linguagem do texto da modalidade oral e para envolver o leitor, pondo-o no centro da mensagem.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. O imperativo “Acalmem-se” dirige-se diretamente ao leitor, em tom de interlocução, o que aproxima o texto da fala e o coloca no centro da mensagem.',
  },
  {
    id: 'lp-tipologia-qlivro34-21',
    temaId: 'lp-tipologia',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB — Analista de Correios (Letras) — 2011) Cinco curiosidades sobre Erasmo de Rotterdam (1467-1536). Nos primeiros anos como seminarista, em Bois le Duc, na Holanda, Erasmo dedicou-se mais à pintura e à música do que à filosofia e à religião. Grande parte do êxito intelectual de Erasmo deu-se ao estudar os grandes clássicos humanistas enquanto seus colegas de monastério estavam nos cultos religiosos. Foi na biblioteca do monastério, durante os estudos, que aprendeu e desenvolveu o domínio do latim — língua que o faria conhecido em toda a Europa. Em 1508, Erasmo foi para Veneza, na Itália, e conheceu o famoso impressor Aldo Manúcio, que havia imprimido o seu livro Adágios. Na Universidade de Oxford, terminou os estudos da língua grega — idioma dominado apenas por eruditos. A partir de então, conheceu o filósofo Juan Colet, que lhe apresentou a primeira versão da Bíblia. O acesso ao livro foi decisivo para Erasmo se afastar da filosofia escolástica. O texto, de caráter informativo, é exemplo do gênero biografia.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. O texto apresenta a trajetória de Erasmo, com fatos de sua vida e de sua formação, em tom informativo, traços típicos do gênero biografia.',
  },
  {
    id: 'lp-tipologia-qlivro34-22',
    temaId: 'lp-tipologia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - STM - Analista Judiciário - 2011) Embora pareça absurdo, por muito tempo os exercícios físico-militares fizeram parte dos currículos das escolas civis brasileiras. Isso ocorreu na passagem do século XIX para o XX, período marcado por uma grande tensão política e militar entre as nações europeias, e que levou à Primeira Guerra Mundial. Os exercícios físico-militares eram ensinados por professores e militares e tinham como objetivo preparar os alunos para que pudessem defender a nação em conflitos armados no futuro. A prática dos exercícios físico-militares nas escolas fazia parte de uma filosofia educacional geralmente desconhecida por regentes e pais. Alguns desses acreditavam que seus filhos corriam o risco de ter de entrar para a carreira militar por estarem participando dessas aulas nas escolas. Também havia aqueles que não viam qualquer sentido ou utilidade nos exercícios. Outros apontavam os riscos para a saúde de crianças e jovens, especialmente por inexistirem espaços físicos para a realização das atividades. A falta de militares, professores mal preparados e a oposição dos pais criaram dificuldades para a realização dos exercícios nas escolas brasileiras. Havia um sentimento generalizado de que essas atividades representavam a formação de um espírito belicista, estranho à realidade brasileira. Em meados do século XX, esses exercícios caíram em desuso nas escolas. O fim da Segunda Guerra Mundial e a necessidade de se estabelecer um ambiente mais pacífico entre as nações certamente contribuíram muito para isso. O texto filia-se ao gênero informativo, o que justifica a predominância do emprego de linguagem denotativa.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. O texto informa fatos sobre os exercícios físico-militares nas escolas com linguagem objetiva e sem marcas de subjetividade, o que é próprio do gênero informativo e da denotação.',
  },
  {
    id: 'lp-tipologia-qlivro34-23',
    temaId: 'lp-tipologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobras - Administração Júnior - 2012) Um circo e um antipalhaço. Em 1954, numa cidadezinha universitária dos Estados Unidos, vi “o maior circo do mundo”, que continua a ser o sucessor do velho Barnum & Bailey, velho conhecido dos meus primeiros dias de estudante nos Estados Unidos. Vi então, com olhos de adolescente ainda um tanto menino, maravilhas que só para os meninos têm plenitude de encanto. Em 1954, revendo “o maior circo do mundo”, confesso que, diante de certas façanhas de acrobatas e domadores, senti-me outra vez menino. (...) O gênio de organização dos anglo-americanos é qualquer coisa de assombrar um latino. Arma e desarma um circo gigante como se armasse ou desarmasse um brinquedo de criança. E o que o faz com os circos, faz com os edifícios, as pontes, as usinas, as fábricas: uma vez planejadas, erguem-se em pouco tempo do solo e tomam como por mágica relevos monumentais. (...) Os trechos de “Em 1954 [...] encanto” e “O gênio de organização [...] monumentais” caracterizam-se, quanto ao tipo de texto predominante, por serem, respectivamente:',
    alternativas: [
      'descrição e narração;',
      'narração e argumentação;',
      'narração e descrição;',
      'argumentação e descrição;',
      'argumentação e narração.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: o primeiro trecho relata uma experiência vivida em 1954, com verbos no passado e sequência de fatos, o que é narração. O segundo emite uma opinião sobre a organização dos anglo-americanos e a sustenta com comparações e argumentos, o que caracteriza argumentação.',
  },
  {
    id: 'lp-tipologia-qlivro34-24',
    temaId: 'lp-tipologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRE-RS - Defensor Público - 2011) A transformação da frase “Eu nunca parei de pensar sobre isso”, disse Goodwin, para discurso indireto é:',
    alternativas: [
      'Goodwin disse que nunca parara de pensar sobre aquilo.',
      'Goodwin diz que nunca tivera parado de pensar sobre aquilo.',
      'Goodwin disse: “Eu nunca parei de pensar sobre isso”.',
      'Goodwin diz: “Eu nunca parei de pensar sobre isso”.',
      'Goodwin disse o que pensava sobre aquilo.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: no discurso indireto, a primeira pessoa passa para a terceira, “isso” vira “aquilo”, e o pretérito perfeito “parei” vai para “parara”. B usa tempo composto indevido; C e D mantêm o discurso direto; E perde a citação do conteúdo.',
  },
  {
    id: 'lp-interpretacao-qlivro34-25',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Texto para as questões de 23 a 25: PLANEJAMENTO PRETENDE DESBUROCRATIZAR. Brasília, 22/12/2011 - Para desburocratizar e modernizar a administração pública federal, o Ministério do Planejamento, Orçamento e Gestão (MPOG) assinou acordo de cooperação com o Instituto Nacional de Tecnologia da Informação (ITI). O objetivo do termo é propor e implementar o Plano Nacional de Desmaterialização de Processos (PNDProc), que prevê a utilização da documentação eletrônica em todos os trâmites de processos. O extrato do pacto entre as entidades foi publicado nesta quarta-feira, 21, no Diário Oficial da União. Delfino Natal de Souza, secretário de logística e tecnologia da informação, defende que esta nova modalidade de gestão de documentos irá modernizar a gestão pública ao permitir que o gerenciamento de processos seja feito de forma eletrônica. “Na prática significa o reconhecimento de um documento digital. Significa nascer, ser encaminhado e decidido sem a utilização de papel”, explica. O acordo, que tem duração de três anos, prevê a criação de normas, implantação de projeto piloto, definição de padrões, metodologias e soluções tecnológicas para a disseminação do plano. Para divulgar o PNDProc, também estão previstas no termo de cooperação a capacitação de servidores públicos que atuam na área de documentação, como os que trabalham em protocolos e secretarias, por exemplo. Como órgão central do Sistema de Administração dos Recursos de Tecnologia da Informação (SISP), a Secretaria de Logística e Tecnologia da Informação (SLTI) deve prover o suporte para a realização das ações do PNDProc. A secretaria deve ainda atender aos Padrões de Interoperabilidade do Governo Eletrônico (e-Ping) e também do Modelo de Acessibilidade de Governo Eletrônico (e-MAG) na implementação do plano. O secretário explica ainda que o acordo não prevê a digitalização de processos antigos. “As ações para a implantação do plano serão feitas no trâmite de novas documentações”, relata. (Ministério do Planejamento) (CEPERJ — SEPLAG — Analista de Planejamento e Orçamento — 2012) O primeiro parágrafo do texto desempenha a função de:',
    alternativas: [
      'despertar a curiosidade do leitor em relação ao conteúdo do texto;',
      'resumir os tópicos mais importantes do projeto publicado;',
      'explicar ao leitor menos informado as finalidades do MPOG;',
      'demonstrar a necessidade do processo de desburocratização proposto;',
      'justificar a necessidade de cooperação do MPOG com o ITI.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: o primeiro parágrafo reúne as informações centrais da notícia, como o acordo entre MPOG e ITI, o objetivo de desburocratizar e o plano PNDProc. As alternativas A e E atribuem ao parágrafo funções de chamada e de justificativa, que não são as principais, e C e D tratam de explicações ou argumentos que o texto desenvolve depois.',
  },
  {
    id: 'lp-interpretacao-qlivro34-26',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      'Texto para as questões de 23 a 25: PLANEJAMENTO PRETENDE DESBUROCRATIZAR. Brasília, 22/12/2011 - Para desburocratizar e modernizar a administração pública federal, o Ministério do Planejamento, Orçamento e Gestão (MPOG) assinou acordo de cooperação com o Instituto Nacional de Tecnologia da Informação (ITI). O objetivo do termo é propor e implementar o Plano Nacional de Desmaterialização de Processos (PNDProc), que prevê a utilização da documentação eletrônica em todos os trâmites de processos. O extrato do pacto entre as entidades foi publicado nesta quarta-feira, 21, no Diário Oficial da União. Delfino Natal de Souza, secretário de logística e tecnologia da informação, defende que esta nova modalidade de gestão de documentos irá modernizar a gestão pública ao permitir que o gerenciamento de processos seja feito de forma eletrônica. “Na prática significa o reconhecimento de um documento digital. Significa nascer, ser encaminhado e decidido sem a utilização de papel”, explica. O acordo, que tem duração de três anos, prevê a criação de normas, implantação de projeto piloto, definição de padrões, metodologias e soluções tecnológicas para a disseminação do plano. Para divulgar o PNDProc, também estão previstas no termo de cooperação a capacitação de servidores públicos que atuam na área de documentação, como os que trabalham em protocolos e secretarias, por exemplo. Como órgão central do Sistema de Administração dos Recursos de Tecnologia da Informação (SISP), a Secretaria de Logística e Tecnologia da Informação (SLTI) deve prover o suporte para a realização das ações do PNDProc. A secretaria deve ainda atender aos Padrões de Interoperabilidade do Governo Eletrônico (e-Ping) e também do Modelo de Acessibilidade de Governo Eletrônico (e-MAG) na implementação do plano. O secretário explica ainda que o acordo não prevê a digitalização de processos antigos. “As ações para a implantação do plano serão feitas no trâmite de novas documentações”, relata. (Ministério do Planejamento) (CEPERJ — SEPLAG — Analista de Planejamento e Orçamento — 2012) O texto apresentado é do tipo informativo. Entre as marcas abaixo, aquela que é inadequada em relação a esse tipo de texto é:',
    alternativas: [
      'O enunciador do texto informativo é dono de um saber desconhecido do público leitor a que o texto se destina.',
      'O conteúdo do texto informativo pressupõe um interesse qualquer por parte do público leitor.',
      'A variedade linguística do texto informativo, pelo próprio fato de pretender que algo seja divulgado, é popular e informal.',
      'O texto informativo tem sua qualidade relacionada à precisão e atualidade das informações prestadas.',
      'A credibilidade e a autoridade do meio de divulgação é parte importante da eficiência do que é informado.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a inadequada: o texto informativo usa, em geral, variedade padrão e linguagem clara e objetiva, porque sua credibilidade depende da precisão e da norma culta, e não de linguagem popular e informal. As demais descrevem traços corretos, como o saber do emissor, o interesse do leitor, a exigência de precisão e a importância da credibilidade do veículo.',
  },
  {
    id: 'lp-interpretacao-qlivro34-27',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Texto para as questões de 23 a 25: PLANEJAMENTO PRETENDE DESBUROCRATIZAR. Brasília, 22/12/2011 - Para desburocratizar e modernizar a administração pública federal, o Ministério do Planejamento, Orçamento e Gestão (MPOG) assinou acordo de cooperação com o Instituto Nacional de Tecnologia da Informação (ITI). O objetivo do termo é propor e implementar o Plano Nacional de Desmaterialização de Processos (PNDProc), que prevê a utilização da documentação eletrônica em todos os trâmites de processos. O extrato do pacto entre as entidades foi publicado nesta quarta-feira, 21, no Diário Oficial da União. Delfino Natal de Souza, secretário de logística e tecnologia da informação, defende que esta nova modalidade de gestão de documentos irá modernizar a gestão pública ao permitir que o gerenciamento de processos seja feito de forma eletrônica. “Na prática significa o reconhecimento de um documento digital. Significa nascer, ser encaminhado e decidido sem a utilização de papel”, explica. O acordo, que tem duração de três anos, prevê a criação de normas, implantação de projeto piloto, definição de padrões, metodologias e soluções tecnológicas para a disseminação do plano. Para divulgar o PNDProc, também estão previstas no termo de cooperação a capacitação de servidores públicos que atuam na área de documentação, como os que trabalham em protocolos e secretarias, por exemplo. Como órgão central do Sistema de Administração dos Recursos de Tecnologia da Informação (SISP), a Secretaria de Logística e Tecnologia da Informação (SLTI) deve prover o suporte para a realização das ações do PNDProc. A secretaria deve ainda atender aos Padrões de Interoperabilidade do Governo Eletrônico (e-Ping) e também do Modelo de Acessibilidade de Governo Eletrônico (e-MAG) na implementação do plano. O secretário explica ainda que o acordo não prevê a digitalização de processos antigos. “As ações para a implantação do plano serão feitas no trâmite de novas documentações”, relata. (Ministério do Planejamento) (CEPERJ — SEPLAG — Analista de Planejamento e Orçamento — 2012) Instituto Nacional da Tecnologia da Informação (ITI) é o nome da instituição com quem o MPOG assinou acordo de cooperação. Pelo que é expresso no texto, esse parceiro se encarregará de:',
    alternativas: [
      'substituir a documentação eletrônica por outra mais moderna;',
      'contornar o desconhecimento de usuários em relação à Informática;',
      'gerenciar os processos de forma a empregar pouco papel;',
      'digitalizar os processos antigos, em algum momento futuro;',
      'capacitar mão de obra para a implantação do projeto.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: o texto diz que o acordo prevê a capacitação de servidores das áreas de documentação para divulgar o PNDProc, o que corresponde a formar mão de obra para o projeto. A alternativa D contraria o texto, que afirma que o acordo não prevê a digitalização de processos antigos, e as demais atribuem ao parceiro tarefas que o texto não lhe confia.',
  },
  {
    id: 'lp-tipologia-qlivro34-28',
    temaId: 'lp-tipologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CEPERJ - ITE/RJ — Analista de Gestão Organizacional (ADM) — 2012) A consolidação da regularização fundiária como política urbana no Brasil. A promulgação da Constituição Federal em 1988 coroou o longo processo de democratização do país iniciado, ainda, no final dos anos 1970. A democratização do país foi a ocasião propícia para uma reflexão mais acurada sobre a integração socioespacial das camadas urbanas mais desprotegidas, tanto no plano jurídico quanto no plano social. Diante das pressões dos movimentos sociais urbanos, o capítulo constitucional sobre a política urbana (artigos 182 e 183) reconheceu que tanto a propriedade quanto a própria cidade devem exercer uma função social. Esse mesmo artigo estabeleceu que o município exerce, de agora em diante, um papel central na elaboração e na aplicação das políticas de desenvolvimento urbano local. O instrumento de base dessa política é doravante o Plano Diretor municipal, exigência constitucional para todas as cidades com mais de 20 mil habitantes. As disposições desse capítulo constitucional se focalizam, assim, na instituição de medidas aptas a dissuadir a concentração especulativa do solo, assim como possibilitar a legalização das formas informais de acesso à moradia. Este último aspecto revela-se crucial diante do índice de informalidade fundiária das cidades brasileiras. Segundo Edésio Fernandes (2002, p.52), essa informalidade pode atingir, por exemplo, quase 50% da população das duas principais metrópoles brasileiras (São Paulo e Rio de Janeiro). Ao regulamentar as disposições do supracitado capítulo constitucional, a lei do Estatuto da Cidade (Lei nº 10.257 de 10 de julho de 2001) contribuiu para consolidar a regularização fundiária como uma das principais diretrizes da política urbana no Brasil. Antes de analisarmos as disposições da legislação brasileira sobre esse assunto, impõe-se, inicialmente, uma breve análise das diferentes questões sociopolíticas relativas à legalização do solo. A regularização fundiária consiste em regularizar a posse dos habitantes e promover a urbanização do local sem recorrer à remoção da população para outras localidades. A regularização fundiária é frequentemente limitada à transferência de títulos fundiários, sobretudo os de propriedade privada. Medida, aliás, preconizada como “solução milagrosa” pelas instituições internacionais e celebrizada, nos últimos anos, pelos trabalhos do economista peruano Hernando de Soto. Os governos dos países em desenvolvimento abandonaram, a partir dos anos 1980, os esforços para a construção em massa de moradias populares na periferia das cidades e se concentraram, sobretudo, na ideia de que a legalização do informal, aliada a uma desregulamentação mais acentuada do mercado imobiliário, poderia atenuar o preço do solo, suscitando, enfim, uma oferta mais consistente de moradias, erguidas, geralmente, pela autoconstrução. O balanço que se obtém 20 anos mais tarde é, todavia, um enorme fracasso. A regularização fundiária, onde foi efetivamente realizada, liberou o solo e desencadeou uma pressão do mercado imobiliário sobre os bairros beneficiados que eram, até então, relativamente protegidos, justamente em razão da sua ilegalidade. O fenômeno atual de segregação urbana torna-se, assim, mais um produto derivado das leis de mercado que o resultado da recusa, por parte das autoridades públicas, do reconhecimento oficial da existência dos bairros informais. A solução do mercado originou outras formas de exclusão que apenas fizeram aumentar o círculo de informalidade, agora concentrado nas regiões cada vez mais periféricas, insalubres e/ou ecologicamente precárias das cidades. Esse modelo, ao menos no caso específico das favelas, foi apenas parcialmente aplicado no Brasil. A política de urbanização das favelas, implementada a partir dos anos 1980, não foi necessariamente seguida da regularização fundiária plena desses espaços. A ilegalidade fundiária, conjugada à violência imposta pelos narcotraficantes num grande número de favelas, desestimula, nos dias atuais, a entrada dos grandes promotores imobiliários no mercado imobiliário das favelas. O fim das políticas de remoções em massa e a ausência de um controle público mais efetivo sobre o crescimento das favelas asseguraram, todavia, a relativa segurança da posse dos habitantes das favelas e o florescimento do mercado imobiliário no interior desses espaços. Esse mercado se apresenta concentrado nas mãos de alguns “latifundiários”, muitas vezes ligados às redes mafiosas locais. A flexibilidade urbanística nas favelas permite, ainda, uma oferta consistente de habitações a preços reduzidos. A despeito da especulação imobiliária, as favelas se revelam, pelo menos por enquanto, um relevante meio de acesso à moradia para as camadas mais desfavorecidas das metrópoles brasileiras. Nesse contexto, a regularização fundiária deve-se concentrar menos sobre uma lógica mercadológica de fluidificação das transações imobiliárias e de alargamento da base fundiária fiscal do município do que sobre a redução da insegurança que afeta as relações fundiárias, como aliás já destacou a campanha pela segurança da posse, promovida pela UN-Habitat, desde 1997. A precariedade jurídica do acesso ao solo nas favelas sempre serviu como justificativa não somente para as expulsões arbitrárias, mas também para a ausência de serviços públicos adequados nesses espaços. A insegurança fundiária também limitou o investimento dos moradores em suas casas e em seus bairros. A regularização fundiária se manifesta, assim, como um elemento imprescindível para se materializar o direito à moradia, integrando, aliás, esse direito específico ao leque de direitos que constitui o direito à cidade. A legalização da moradia garante, de fato, direitos sociopolíticos às populações das favelas que adquirem recursos jurídicos indispensáveis para enfrentar os diferentes conflitos de ordem fundiária/imobiliária, seja entre vizinhos, seja ante os pretensos proprietários dos terrenos ocupados pela favela, ou mesmo ante as autoridades públicas. A regularização fundiária pode, por sua vez, desempenhar um importante papel na planificação urbana, por meio da imposição de regras urbanísticas às construções e ao uso do solo nas favelas. Dependendo da natureza do título outorgado aos habitantes, ela pode até mesmo contribuir ativamente para a gestão do fundiário, limitando tanto a excessiva valorização do solo quanto o aumento da exclusão espacial no interior das metrópoles. O texto é um fragmento de artigo acadêmico. Dentre as características desse gênero, o texto não apresenta:',
    alternativas: [
      'predomínio da impessoalidade;',
      'citações explícitas de outros textos;',
      'preponderância de sequências descritivas;',
      'emprego da norma de prestígio;',
      'presença de argumentação.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: o artigo acadêmico predomina com sequências argumentativas e expositivas, e não descritivas. Os demais traços estão presentes no texto, que usa linguagem impessoal, cita autores como Edésio Fernandes e Hernando de Soto, adota a norma de prestígio e defende uma tese sobre a regularização fundiária.',
  },
  {
    id: 'lp-interpretacao-qlivro34-29',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Texto para as questões de 27 a 29: A Nova Riqueza dos Pobres. Dezembro é o mês das compras, como maio é o das noivas, agosto é o do desgosto, junho é o das fogueiras e fevereiro é o do Carnaval. Os estudantes aguardam dezembro como o mês das férias; as crianças, como o do Natal. Para os trabalhadores, é o mês em que eles pensam que estão mais ricos. Recebem o 13º salário ou parte dele — e compram. A verdade é que já há algum tempo vêm se sentindo menos pobres, vêm comprando. Compram de tudo. Um compra geladeira nova porque a velha, bom, gelar ela gelava direitinho, mas gastava muita energia. Outro compra televisão nova porque a velha não tem tela plana de LCD, 42 polegadas, e a vizinha pensa que é melhor do que a gente só porque comprou uma de 36 polegadas. Compram DVD, celular para a filha adolescente, forno de micro-ondas, MP3, MP4, freezer, videogames, fogão novo, carro. Qual é a mágica? É a prestação que “cabe no bolso”. Perdiam dinheiro para a inflação, agora perdem para os juros. Em vez de guardarem o dinheiro por seis meses e comprarem à vista com desconto, preferem parcelar em doze meses e pagar o dobro, ou em 24 meses e pagar o triplo. Ficam na mão de espertos, aqueles que lucravam com especulações de curto prazo durante a grande inflação e agora lucram financiando prestações. Os novos compradores não fazem essa conta. Cabendo no orçamento do mês, pagam. Querem se sentir parte da grande nação de consumidores, participar da vida colorida dos anúncios da televisão, esquecer por um momento que não têm escola, atendimento médico, transporte, esgoto, segurança... O marido da senhora que faz limpeza na casa de uma amiga esteve desempregado quase um ano. Como não tem nenhum preparo técnico, integrava a turma do bico. Arranjou emprego e, no dia do primeiro pagamento, ele e a mulher compraram uma geladeira nova. Três meses depois, ele estava desempregado outra vez, de volta ao bico. Não se abalaram. O que importa para eles é que a geladeira está em casa há quatro meses e estão conseguindo pagar, seguem tocando a vida. — Se nós não tivesse comprado a geladeira, não ia comprar nunca — diz ela, otimista, bebendo sua água geladinha e mantendo protegido o leite das crianças. Essa atitude otimista acontece em um momento crítico para o trabalhador no mundo. Caem os investimentos e o comércio entre as nações. As indústrias investem em processos de produção que rendem mais e custam menos. Novas tecnologias provocam dispensas, e não só por lá. Resulta o que se poderia chamar de globalização do olho da rua. Mais de 200 milhões de trabalhadores formais perderam o emprego no mundo, segundo a Organização Internacional do Trabalho; quase 1 bilhão de pessoas em condições de trabalhar não encontram vagas, 700 milhões vivem de expedientes, se virando. E a globalização do bico. Milhões sem conta não conseguem nem se virar. É a globalização do dane-se. Os temores que a crise lá de fora desperta nos analistas e alarmistas daqui parecem não atingir os moradores das áreas carentes das grandes cidades brasileiras. É fantástica a capacidade que eles têm de acreditar no melhor, em meio à incerteza. Se alguma conclusão se pode tirar da ingênua tendência compradora daqueles que têm tão pouco, é a de que ela nasce de um incompreensível otimismo — incompreensível para nós, atormentados da classe média. Ao redor deles pipocam dificuldades, mas eles, confiantes, jogam com o destino como se ele fosse uma Mega-Sena que um dia vai dar. (CEPERJ - Degase — Agente Socioeducativo — 2012) O texto é uma crônica, que comenta um aspecto da vida cotidiana a partir da visão do autor. O fragmento que melhor demonstra a presença de uma opinião do autor é:',
    alternativas: [
      '“Dezembro é o mês das compras, como maio é o das noivas...”',
      '“Recebem o 13º salário ou parte dele — e compram.”',
      '“A queda da inflação deixou sobrar no bolso deles a parte do salário que se queimava na fogueira do aumento de preços.”',
      '“Em vez de guardarem o dinheiro por seis meses e comprarem à vista com desconto, preferem parcelar em doze meses e pagar o dobro...”',
      '“As indústrias investem em processos de produção que rendem mais e custam menos.”',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “preferem parcelar... e pagar o dobro” traz a avaliação do cronista sobre um comportamento de consumo, e não apenas um dado. As demais alternativas apresentam informações factuais ou descritivas, como a data do 13º salário, a comparação de meses ou a descrição do funcionamento do mercado.',
  },
  {
    id: 'lp-interpretacao-qlivro34-30',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Texto para as questões de 27 a 29: A Nova Riqueza dos Pobres. Dezembro é o mês das compras, como maio é o das noivas, agosto é o do desgosto, junho é o das fogueiras e fevereiro é o do Carnaval. Os estudantes aguardam dezembro como o mês das férias; as crianças, como o do Natal. Para os trabalhadores, é o mês em que eles pensam que estão mais ricos. Recebem o 13º salário ou parte dele — e compram. A verdade é que já há algum tempo vêm se sentindo menos pobres, vêm comprando. Compram de tudo. Um compra geladeira nova porque a velha, bom, gelar ela gelava direitinho, mas gastava muita energia. Outro compra televisão nova porque a velha não tem tela plana de LCD, 42 polegadas, e a vizinha pensa que é melhor do que a gente só porque comprou uma de 36 polegadas. Compram DVD, celular para a filha adolescente, forno de micro-ondas, MP3, MP4, freezer, videogames, fogão novo, carro. Qual é a mágica? É a prestação que “cabe no bolso”. Perdiam dinheiro para a inflação, agora perdem para os juros. Em vez de guardarem o dinheiro por seis meses e comprarem à vista com desconto, preferem parcelar em doze meses e pagar o dobro, ou em 24 meses e pagar o triplo. Ficam na mão de espertos, aqueles que lucravam com especulações de curto prazo durante a grande inflação e agora lucram financiando prestações. Os novos compradores não fazem essa conta. Cabendo no orçamento do mês, pagam. Querem se sentir parte da grande nação de consumidores, participar da vida colorida dos anúncios da televisão, esquecer por um momento que não têm escola, atendimento médico, transporte, esgoto, segurança... O marido da senhora que faz limpeza na casa de uma amiga esteve desempregado quase um ano. Como não tem nenhum preparo técnico, integrava a turma do bico. Arranjou emprego e, no dia do primeiro pagamento, ele e a mulher compraram uma geladeira nova. Três meses depois, ele estava desempregado outra vez, de volta ao bico. Não se abalaram. O que importa para eles é que a geladeira está em casa há quatro meses e estão conseguindo pagar, seguem tocando a vida. — Se nós não tivesse comprado a geladeira, não ia comprar nunca — diz ela, otimista, bebendo sua água geladinha e mantendo protegido o leite das crianças. Essa atitude otimista acontece em um momento crítico para o trabalhador no mundo. Caem os investimentos e o comércio entre as nações. As indústrias investem em processos de produção que rendem mais e custam menos. Novas tecnologias provocam dispensas, e não só por lá. Resulta o que se poderia chamar de globalização do olho da rua. Mais de 200 milhões de trabalhadores formais perderam o emprego no mundo, segundo a Organização Internacional do Trabalho; quase 1 bilhão de pessoas em condições de trabalhar não encontram vagas, 700 milhões vivem de expedientes, se virando. E a globalização do bico. Milhões sem conta não conseguem nem se virar. É a globalização do dane-se. Os temores que a crise lá de fora desperta nos analistas e alarmistas daqui parecem não atingir os moradores das áreas carentes das grandes cidades brasileiras. É fantástica a capacidade que eles têm de acreditar no melhor, em meio à incerteza. Se alguma conclusão se pode tirar da ingênua tendência compradora daqueles que têm tão pouco, é a de que ela nasce de um incompreensível otimismo — incompreensível para nós, atormentados da classe média. Ao redor deles pipocam dificuldades, mas eles, confiantes, jogam com o destino como se ele fosse uma Mega-Sena que um dia vai dar. A pequena narrativa do caso da senhora que faz limpeza na casa da amiga do cronista cumpre, no texto, a seguinte função:',
    alternativas: [
      'contestar dados estatísticos posteriormente citados.',
      'exemplificar atitude posteriormente descrita.',
      'detalhar casos anteriormente narrados.',
      'contradizer ideia anteriormente exposta.',
      'reforçar discurso constantemente relatado.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: o caso do marido desempregado que compra uma geladeira nova ilustra a atitude de consumo descrita logo depois pelo cronista, como exemplo concreto da tendência geral. As demais não se sustentam, pois o trecho não contesta dados estatísticos, não detalha casos anteriores, não contradiz a ideia anterior e não reforça um discurso como repetição.',
  },
  {
    id: 'lp-interpretacao-qlivro34-31',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      'Texto para as questões de 27 a 29: A Nova Riqueza dos Pobres. Dezembro é o mês das compras, como maio é o das noivas, agosto é o do desgosto, junho é o das fogueiras e fevereiro é o do Carnaval. Os estudantes aguardam dezembro como o mês das férias; as crianças, como o do Natal. Para os trabalhadores, é o mês em que eles pensam que estão mais ricos. Recebem o 13º salário ou parte dele — e compram. A verdade é que já há algum tempo vêm se sentindo menos pobres, vêm comprando. Compram de tudo. Um compra geladeira nova porque a velha, bom, gelar ela gelava direitinho, mas gastava muita energia. Outro compra televisão nova porque a velha não tem tela plana de LCD, 42 polegadas, e a vizinha pensa que é melhor do que a gente só porque comprou uma de 36 polegadas. Compram DVD, celular para a filha adolescente, forno de micro-ondas, MP3, MP4, freezer, videogames, fogão novo, carro. Qual é a mágica? É a prestação que “cabe no bolso”. Perdiam dinheiro para a inflação, agora perdem para os juros. Em vez de guardarem o dinheiro por seis meses e comprarem à vista com desconto, preferem parcelar em doze meses e pagar o dobro, ou em 24 meses e pagar o triplo. Ficam na mão de espertos, aqueles que lucravam com especulações de curto prazo durante a grande inflação e agora lucram financiando prestações. Os novos compradores não fazem essa conta. Cabendo no orçamento do mês, pagam. Querem se sentir parte da grande nação de consumidores, participar da vida colorida dos anúncios da televisão, esquecer por um momento que não têm escola, atendimento médico, transporte, esgoto, segurança... O marido da senhora que faz limpeza na casa de uma amiga esteve desempregado quase um ano. Como não tem nenhum preparo técnico, integrava a turma do bico. Arranjou emprego e, no dia do primeiro pagamento, ele e a mulher compraram uma geladeira nova. Três meses depois, ele estava desempregado outra vez, de volta ao bico. Não se abalaram. O que importa para eles é que a geladeira está em casa há quatro meses e estão conseguindo pagar, seguem tocando a vida. — Se nós não tivesse comprado a geladeira, não ia comprar nunca — diz ela, otimista, bebendo sua água geladinha e mantendo protegido o leite das crianças. Essa atitude otimista acontece em um momento crítico para o trabalhador no mundo. Caem os investimentos e o comércio entre as nações. As indústrias investem em processos de produção que rendem mais e custam menos. Novas tecnologias provocam dispensas, e não só por lá. Resulta o que se poderia chamar de globalização do olho da rua. Mais de 200 milhões de trabalhadores formais perderam o emprego no mundo, segundo a Organização Internacional do Trabalho; quase 1 bilhão de pessoas em condições de trabalhar não encontram vagas, 700 milhões vivem de expedientes, se virando. E a globalização do bico. Milhões sem conta não conseguem nem se virar. É a globalização do dane-se. Os temores que a crise lá de fora desperta nos analistas e alarmistas daqui parecem não atingir os moradores das áreas carentes das grandes cidades brasileiras. É fantástica a capacidade que eles têm de acreditar no melhor, em meio à incerteza. Se alguma conclusão se pode tirar da ingênua tendência compradora daqueles que têm tão pouco, é a de que ela nasce de um incompreensível otimismo — incompreensível para nós, atormentados da classe média. Ao redor deles pipocam dificuldades, mas eles, confiantes, jogam com o destino como se ele fosse uma Mega-Sena que um dia vai dar. “Resulta o que se poderia chamar de globalização do olho da rua. [...] E a globalização do bico. [...] E a globalização do dane-se”. A sequência acima caracteriza a globalização a partir da desestruturação do mundo do trabalho. Do ponto de vista dos recursos da linguagem, é correto afirmar que, no contexto, ocorre uma:',
    alternativas: [
      'gradação, com o aumento progressivo das dificuldades;',
      'contradição, entre os modos de sobrevivência do desempregado;',
      'ênfase, com a intensificação da afirmativa inicial;',
      'retificação, pela correção gradual das informações iniciais;',
      'exemplificação, pelo relato de situações específicas.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: as expressões “olho da rua”, “bico” e “dane-se” formam uma gradação, em que cada termo marca um estágio mais grave do desemprego. A alternativa C fala de ênfase, que não é a figura central da sequência, e D e E não correspondem a correções nem a relatos de situações específicas.',
  },
  {
    id: 'lp-tipologia-qlivro34-32',
    temaId: 'lp-tipologia',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(CEPERJ - Procon/RJ - Agente de Proteção e Defesa do Consumidor — 2012) O LENDÁRIO PAÍS DO RECALL. Moacyr Scliar. MINHA QUERIDA DONA: quem lhe escreve sou eu, a sua fiel e querida boneca, que você não vê há três meses. Sei que você sente muitas saudades, porque eu também sinto saudades de você. Lembro de você me pegando no colo, me chamando de filhinha, me dando papinha... Você era, e é, minha mãezinha querida, e é por isso que estou lhe mandando esta carta, por meio do cara que assina esta coluna e que, sendo escritor, acredita nas coisas da imaginação. Posso lhe dizer, querida, que vivi uma tremenda aventura, uma aventura que em vários momentos me deixou apavorada. Porque tive de viajar para o distante país do recall. Aposto que você nem sabia da existência desse lugar; eu, pelo menos, não sabia. Para lá fui enviada. Não só eu: bonecas defeituosas, ursinhos idem, eletrodomésticos que não funcionavam e peças de automóvel quebradas. Nós todos ali, na traseira de um gigantesco caminhão que andava, andava sem parar. Finalmente chegamos, e ali estávamos, no misterioso e, para mim, assustador país do recall. Um homem nos recebeu e anunciou, muito secamente, que o nosso destino em breve seria traçado: as bonecas (e os ursinhos, e outros brinquedos, e objetos vários) que tivessem conserto seriam consertados e mandados de volta para os donos; quanto tempo isso levaria era imprevisível, mas três meses era o mínimo. Uma boneca que estava do meu lado, a Liloca, perguntou, com os olhos arregalados, o que aconteceria a quem não tivesse conserto. O homem não disse nada, mas seu sorriso sinistro falava por si. Passamos a noite num enorme pavilhão destinado especialmente às bonecas. Éramos centenas ali, algumas com probleminhas pequenos (um braço fora do lugar, por exemplo), outras já num estado lamentável. Estava muito claro que para várias de nós não haveria volta. Naquela noite conversei muito com minha amiga Liloca — sim, querida dona, àquela altura já éramos amigas. O infortúnio tinha nos unido. Outras bonecas juntaram-se a nós e logo formamos um grande grupo. Estávamos preocupadas com o que poderia nos suceder. De repente a Liloca gritou: “Mas, gente, nós não somos obrigados a aceitar isso! Vamos fazer alguma coisa!”. Nós a olhamos, espantadas: fazer alguma coisa? Mas fazer o quê? Liloca tinha uma resposta: vamos tomar o poder. Vamos nos apossar do país do recall. No começo, aquilo nos pareceu absurdo. Mas Liloca sabia do que estava falando. A mãe da dona dela tinha sido uma militante revolucionária e sempre falava nisso, na necessidade de mudar o mundo, de dar o poder aos mais fracos. Ora, dizia Liloca, ninguém mais fraco do que nós, pobres, desamparados e defeituosos brinquedos. Não deveríamos aguardar resignadamente que decidissem o que fazer com a gente. De modo, querida dona, que estamos aqui preparando a revolução. Breve estaremos governando o país do recall. Mas não se preocupe, eu a convidarei para uma visita. Você poderá vir a qualquer hora. E não precisará de recall para isso. O texto enquadra-se no gênero carta, o que pode ser percebido, dentre outros traços, pela seguinte marca linguística:',
    alternativas: [
      'narração detalhada;',
      'citações entre aspas;',
      'interrogações diretas;',
      'recursos de humor;',
      'vocativo inicial.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: a carta começa com o vocativo “MINHA QUERIDA DONA”, marca típica do gênero epistolar dirigido ao destinatário. A narração detalhada e o humor aparecem no texto, mas não definem a carta, e as aspas e as interrogações não são marcas exclusivas desse gênero.',
  },
  {
    id: 'lp-interpretacao-qlivro34-33',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT/PE (6ª R) — Analista Judiciário — 2012) Economia religiosa. Concordo plenamente com Dom Tarcísio Scaramussa, da CNBB, quando ele afirma que não faz sentido nem obrigar uma pessoa a rezar nem proibi-la de fazê-lo. A declaração do prelado vem como crítica à professora de uma escola pública de Minas Gerais que hostilizou um aluno ateu que se recusara a rezar o pai-nosso em sua aula. É uma boa ocasião para discutir o ensino religioso na rede pública, do qual a CNBB é entusiasta. Como ateu, não abraço nenhuma religião, mas, como liberal, não pretendo que todos pensem do mesmo modo. Admitamos, para efeitos de argumentação, que seja do interesse do Estado que os jovens sejam desde cedo expostos ao ensino religioso. Deve-se então perguntar se essa é uma tarefa que cabe à escola pública ou se as próprias organizações são capazes de supri-la, com seus programas de catequese, escolas dominicais etc. A minha impressão é a de que não faltam oportunidades para conhecer as mais diversas mensagens religiosas, onipresentes em rádios, TVs e também nas ruas. Na cidade de São Paulo, por exemplo, existem mais templos (algo em torno de 4.000) do que escolas públicas (cerca de 1.700). Creio que aqui vale a regra econômica, segundo a qual o Estado deve ficar fora das atividades de que o setor privado já dá conta. Outro ponto importante é o dos custos. Não me parece que faça muito sentido gastar recursos com professores de religião, quando faltam os de matemática, português etc. Ao contrário do que se dá com a religião, é difícil aprender física na esquina. Até 1997, a Lei de Diretrizes e Bases da Educação acertadamente estabelecia que o ensino religioso nas escolas oficiais não poderia representar ônus para os cofres públicos. A bancada religiosa emendou a lei para empurrar essa conta para o Estado. Não deixa de ser um caso de esmola com o chapéu alheio. No que diz respeito ao ensino religioso na escola pública, o autor mantém-se:',
    alternativas: [
      'esquivo, pois arrola tanto argumentos que defendem a obrigatoriedade como o caráter facultativo da implementação desse ensino;',
      'intransigente, uma vez que enumera uma série de razões morais para que se proíba o Estado de legislar sobre quaisquer matérias religiosas;',
      'pragmático, já que na base de sua argumentação contra o ensino religioso na escola pública estão razões de ordem jurídica e econômica;',
      'intolerante, dado que deixa de reconhecer, como ateu declarado, o direito que têm as pessoas de decidir sobre essa matéria;',
      'prudente, pois evita pronunciar-se a favor da obrigatoriedade desse ensino, lembrando que ele já vem sendo ministrado por muitas entidades.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: o autor se opõe ao ensino religioso público com base em argumentos econômicos, como o custo dos professores e a prioridade de outras disciplinas, e em razões jurídicas, como a Lei de Diretrizes e Bases. A alternativa B é errada porque ele não enumera razões morais, D porque defende a liberdade de crença, e A e E porque ele se posiciona com clareza.',
  },
  {
    id: 'lp-interpretacao-qlivro34-34',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Economia religiosa. Concordo plenamente com Dom Tarcísio Scaramussa, da CNBB, quando ele afirma que não faz sentido nem obrigar uma pessoa a rezar nem proibi-la de fazê-lo. A declaração do prelado vem como crítica à professora de uma escola pública de Minas Gerais que hostilizou um aluno ateu que se recusara a rezar o pai-nosso em sua aula. É uma boa ocasião para discutir o ensino religioso na rede pública, do qual a CNBB é entusiasta. Como ateu, não abraço nenhuma religião, mas, como liberal, não pretendo que todos pensem do mesmo modo. Admitamos, para efeitos de argumentação, que seja do interesse do Estado que os jovens sejam desde cedo expostos ao ensino religioso. Deve-se então perguntar se essa é uma tarefa que cabe à escola pública ou se as próprias organizações são capazes de supri-la, com seus programas de catequese, escolas dominicais etc. A minha impressão é a de que não faltam oportunidades para conhecer as mais diversas mensagens religiosas, onipresentes em rádios, TVs e também nas ruas. Na cidade de São Paulo, por exemplo, existem mais templos (algo em torno de 4.000) do que escolas públicas (cerca de 1.700). Creio que aqui vale a regra econômica, segundo a qual o Estado deve ficar fora das atividades de que o setor privado já dá conta. Outro ponto importante é o dos custos. Não me parece que faça muito sentido gastar recursos com professores de religião, quando faltam os de matemática, português etc. Ao contrário do que se dá com a religião, é difícil aprender física na esquina. Até 1997, a Lei de Diretrizes e Bases da Educação acertadamente estabelecia que o ensino religioso nas escolas oficiais não poderia representar ônus para os cofres públicos. A bancada religiosa emendou a lei para empurrar essa conta para o Estado. Não deixa de ser um caso de esmola com o chapéu alheio. Atente para estas afirmações: I. Ao se declarar um cidadão ao mesmo tempo ateu e liberal, o autor enaltece essa sua dupla condição pessoal valendo-se do exemplo da própria CNBB. II. A falta de oportunidade para se acessarem mensagens religiosas poderia ser suprida, segundo o autor, pela criação de redes de comunicação voltadas para esse fim. III. Nos dois últimos parágrafos, o autor mostra não reconhecer nem legitimidade nem prioridade para a implementação do ensino religioso na escola pública. Em relação ao texto, está correto o que se afirma em:',
    alternativas: ['I, II e III.', 'I e II, apenas.', 'II e III, apenas.', 'I e III, apenas.', 'III, apenas.'],
    correta: 4,
    comentario:
      'A alternativa E é a correta: apenas a afirmação III procede, pois nos dois últimos parágrafos o autor nega legitimidade e prioridade ao ensino religioso na escola pública. A afirmação I é falsa, já que a CNBB é citada para contextualizar a discussão, e não como exemplo da própria condição do autor; a II é falsa, pois o texto diz que não faltam oportunidades, sem propor redes de comunicação.',
  },
  {
    id: 'lp-interpretacao-qlivro34-35',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Economia religiosa. Concordo plenamente com Dom Tarcísio Scaramussa, da CNBB, quando ele afirma que não faz sentido nem obrigar uma pessoa a rezar nem proibi-la de fazê-lo. A declaração do prelado vem como crítica à professora de uma escola pública de Minas Gerais que hostilizou um aluno ateu que se recusara a rezar o pai-nosso em sua aula. É uma boa ocasião para discutir o ensino religioso na rede pública, do qual a CNBB é entusiasta. Como ateu, não abraço nenhuma religião, mas, como liberal, não pretendo que todos pensem do mesmo modo. Admitamos, para efeitos de argumentação, que seja do interesse do Estado que os jovens sejam desde cedo expostos ao ensino religioso. Deve-se então perguntar se essa é uma tarefa que cabe à escola pública ou se as próprias organizações são capazes de supri-la, com seus programas de catequese, escolas dominicais etc. A minha impressão é a de que não faltam oportunidades para conhecer as mais diversas mensagens religiosas, onipresentes em rádios, TVs e também nas ruas. Na cidade de São Paulo, por exemplo, existem mais templos (algo em torno de 4.000) do que escolas públicas (cerca de 1.700). Creio que aqui vale a regra econômica, segundo a qual o Estado deve ficar fora das atividades de que o setor privado já dá conta. Outro ponto importante é o dos custos. Não me parece que faça muito sentido gastar recursos com professores de religião, quando faltam os de matemática, português etc. Ao contrário do que se dá com a religião, é difícil aprender física na esquina. Até 1997, a Lei de Diretrizes e Bases da Educação acertadamente estabelecia que o ensino religioso nas escolas oficiais não poderia representar ônus para os cofres públicos. A bancada religiosa emendou a lei para empurrar essa conta para o Estado. Não deixa de ser um caso de esmola com o chapéu alheio. Pode-se inferir, com base numa afirmação do texto, que:',
    alternativas: [
      'o ensino religioso demanda profissionais altamente qualificados, que o Estado não teria como contratar;',
      'a bancada religiosa, tal como qualificada no último parágrafo, partilha do mesmo radicalismo de Dom Tarcísio Scaramussa;',
      'as instituições públicas de ensino devem complementar o que já fazem os templos, a exemplo do que ocorre na cidade de São Paulo;',
      'o aprendizado de uma religião não requer instrução tão especializada como a que exigem as ciências exatas;',
      'os membros da bancada religiosa, sobretudo os liberais, buscam favorecer o setor privado na implementação do ensino religioso.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: o autor afirma que “é difícil aprender física na esquina”, enquanto a religião se encontra em toda parte, o que permite inferir que ela exige menos instrução especializada. A alternativa A exagera o texto, que fala de custo e não de qualificação; B e C contrariam o texto; E atribui aos membros da bancada um interesse que o texto não menciona.',
  },
  {
    id: 'lp-interpretacao-qlivro34-36',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(ESAF - MPOG - EPPGG - 2013) Assinale a opção que está de acordo com as informações do texto. Pela PEC 37, os promotores e procuradores só podem supervisionar a atuação da polícia e solicitar ações durante a elaboração de inquéritos policiais, e a investigação criminal é de competência exclusiva da Polícia Federal e da Polícia Civil. Os líderes partidários acham que, se fizerem pequenas alterações no texto da PEC, poderão obter um acordo entre procuradores e delegados. Uma das sugestões é dispor sobre a possibilidade de o Ministério Público fazer investigações em situações excepcionais — como, por exemplo, nos casos em que houver indícios de inércia e inépcia nas investigações realizadas pela polícia. A sugestão, que prevê que as investigações sejam acompanhadas pela Justiça, parece ter agradado aos promotores e procuradores. Mas os representantes dos delegados não se comprometeram com os líderes partidários — segundo eles, a proposta ainda terá de ser submetida às entidades estaduais da categoria. A rivalidade entre delegados e procuradores é antiga. Embora a Constituição de 88 atribua competências específicas aos promotores e procuradores — como patrocinar com exclusividade ações penais públicas, promover inquérito, impetrar ação civil pública e exercer o controle externo da atividade policial —, ela não faz menção às prerrogativas da categoria em matéria de investigação criminal. (O Estado de S. Paulo, Editorial 10.06.2013, com adaptações.)',
    alternativas: [
      'A PEC 37 estabelece que promotores e procuradores tenham ampliados seus poderes de investigação criminal.',
      'A Polícia Federal e a Polícia Civil, conforme disposto na PEC 37, compartilhariam com promotores e procuradores os procedimentos da investigação criminal.',
      'A Constituição de 1988 já definia a investigação criminal como prerrogativa exclusiva de procuradores e promotores.',
      'A proposta de que procuradores e promotores acompanhem as investigações criminais empreendidas pela Polícia Federal e pela Polícia Civil foi imediata e amplamente apoiada pelos delegados.',
      'Está em negociação um acordo entre procuradores e delegados para que o Ministério Público possa fazer investigações criminais em situações excepcionais, como no caso de as ações de investigação realizadas pela polícia se mostrarem insatisfatórias.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: o texto informa que há uma negociação em curso, com a sugestão de que o Ministério Público investigue em casos excepcionais, como a inércia e a inépcia da polícia. A alternativa A contraria o texto, que descreve a PEC como restritiva ao papel dos promotores; B e C também contrariam o texto, e D é falsa, já que os delegados não se comprometeram e a proposta ainda depende das entidades estaduais.',
  },
  {
    id: 'lp-interpretacao-qlivro34-37',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT 16ª - Analista Judiciário (Engenharia) - 2014) Da utilidade dos prefácios. Li outro dia em algum lugar que os prefácios são textos inúteis, já que em 100% dos casos o prefaciador é convocado com o compromisso exclusivo de falar bem do autor e da obra em questão. Garantido o tom elogioso, o prefácio ainda aponta características evidentes do texto que virá, que o leitor poderia ter muito prazer em descobrir sozinho. Nos casos mais graves, o prefácio adianta elementos da história a ser narrada (quando se trata de ficção), ou antecipa estrofes inteiras (quando poesia), ou elenca os argumentos de base a serem desenvolvidos (quando estudos ou ensaios). Quer dizer: mais do que inútil, o prefácio seria um estraga-prazeres.\n\nPois vou na contramão dessa crítica mal-humorada aos prefácios e prefaciadores, embora concorde que muitas vezes ela proceda — o que não justifica a generalização devastadora. Meu argumento é simples e pessoal: em muitos livros que li, a melhor coisa era o prefácio — fosse pelo estilo do prefaciador, muito melhor do que o do autor da obra, fosse pela consistência das ideias defendidas, muito mais sólidas do que as expostas no texto principal. Há casos célebres de bibliografias que indicam apenas o prefácio de uma obra, ficando claro que o restante é desnecessário. E ninguém controla a possibilidade, por exemplo, de o prefaciador ser muito mais espirituoso e inteligente do que o amigo cujo texto ele apresenta. Mas, como argumento final, vou glosar uma observação de Machado de Assis: quando o prefácio e o texto principal são ruins, o primeiro sempre terá sobre o segundo a vantagem de ser bem mais curto. Há muito tempo me deparei com o prefácio que um grande poeta, dos maiores do Brasil, escreveu para um livrinho de poemas bem fraquinhos de uma jovem, linda e famosa modelo. Pois o velho poeta tratava a moça como se fosse uma Cecília Meireles (que, aliás, além de grande escritora era também linda). Não havia dúvida: o poeta, embevecido, estava mesmo era prefaciando o poder de sedução da jovem, linda e nada talentosa poetisa. Mas ele conseguiu inventar tantas qualidades para os poemas da moça que o prefácio acabou sendo, sozinho, mais uma prova da imaginação de um grande gênio poético. (Adérbal Siqueira Justo, inédito.) O primeiro e o segundo parágrafos estabelecem entre si uma relação de:',
    alternativas: [
      'causa e efeito, uma vez que das convicções expressas no primeiro resultam, como consequência natural, as expostas no segundo.',
      'complementaridade, pois o que se afirma no segundo ajuda a compreender a mesma tese defendida e desenvolvida no primeiro.',
      'inteira independência, pois o tema do primeiro não se espelha no segundo, já que o autor do texto quer apenas enumerar diferentes estilos.',
      'contraposição, pois a perspectiva de valor adotada no primeiro é confrontada com outra que a relativiza e nega no segundo.',
      'similitude, pois são ligeiras as variações do argumento central que ambos sustentam em relação à utilidade e à necessidade dos prefácios.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: o primeiro parágrafo afirma que os prefácios são inúteis, e o segundo, com “Pois vou na contramão dessa crítica”, contesta essa visão e defende o valor do prefácio. A alternativa B só valeria se o segundo reforçasse o primeiro, o que não acontece, e A, C e E não se aplicam, pois não há causa, independência nem semelhança entre as ideias.',
  },
  {
    id: 'lp-interpretacao-qlivro34-38',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      'Texto para a questão abaixo: Como estamos às vésperas de celebrar os 500 anos da palavra “utopia” e do romance filosófico de Thomas Morus que a consagrou, o momento é mais do que oportuno para examinar que novas feições ela adquiriu após tantos sonhos desfeitos e outros tantos pervertidos e que atualização lhe deram as expectativas geradas pela informática, pelas biotecnologias, pelas nanociências, pelas ciências cognitivas e as perspectivas de clonagem, ectogênese (fecundação em útero artificial), artificialização dos órgãos do corpo e prolongamento da vida, abertas por elas. Seu étimo grego, significando não lugar, lugar nenhum ou, trocadilhescamente, lugar da felicidade (eutopia), designou primeiro uma ilha dos mares do Novo Mundo, em que foi bater um navegante português ligado a Américo Vespúcio. Terra prodigiosa, em tudo diferente da Europa do século 16, a perfeição imperava em suas cinquenta e poucas cidades. Morus imaginou-a empolgado pela descoberta da América e do “novo homem” que a habitava. Se bem que a República platônica já configurasse uma utopia, foi na ilha “descoberta” por Rafael Hitlodeu que surgiu o conceito de utopia como representação imaginária de uma sociedade que tenha encontrado soluções exemplares para todos os seus problemas. Outras sociedades ideais, fundamentadas em leis justas e instituições político-econômicas comprometidas com o bem-estar da coletividade, nasceram da imaginação de romancistas e pensadores, nos séculos seguintes, com particular insistência no século 19, auge do utopismo socialista de Charles Fourier, Étienne Cabet, Edward Bellamy e William Morris. A esses devaneios igualitários a dupla Marx-Engels combateu e contrapôs outro, supostamente científico, cuja caracterização como utopia pode livrar a cara do comunismo, mas não das sociedades que às suas ideias básicas deram concretude, a partir da revolução bolchevique, uma utopia que virou distopia. A distopia é uma distorção ou uma mutação da utopia, um sonho que se transforma em pesadelo. A ficção científica e a literatura de antecipação são pródigas em fantasias do gênero, de Jules Verne (Capitão Nemo era um utopista) ao Aldous Huxley de Admirável Mundo Novo, ao Orwell de 1984 e ao Ray Bradbury de Fahrenheit 451. Serão todos lembrados ao longo do ciclo. (Adaptação da matéria “Um sonho de 500 anos”, de Sérgio Augusto — jornal O Estado de S. Paulo, 02 de agosto de 2015.) De acordo com as ideias desenvolvidas no texto, assinale a opção incorreta.',
    alternativas: [
      'Thomas Morus escreveu sua obra “Utopia” inspirado na descoberta da América.',
      'Os regimes comunistas não lograram realizar as sociedades utópicas previstas por Marx e Engels.',
      'Os pensadores têm-se ocupado em imaginar as bases para uma sociedade mais justa desde a Grécia Antiga.',
      'Com o desenvolvimento da ciência e da tecnologia, a humanidade caminha para a realização dos ideais utópicos.',
      'Diversos escritores do século XX interpretaram a sociedade contemporânea ou imaginaram as sociedades futuras como distopias.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a incorreta: o texto apenas levanta as expectativas abertas pela ciência e menciona a distopia como risco de a utopia virar pesadelo, sem afirmar que a humanidade caminhe para realizar os ideais utópicos. As demais afirmações estão de acordo com o texto, que relaciona Morus à descoberta da América, aponta o fracasso das sociedades socialistas e cita escritores de distopias do século XX.',
  },
  {
    id: 'lp-interpretacao-qlivro34-39',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(ESAF - AN AC - Analista Administrativo - 2016) Assinale a opção que apresenta informação correta depreendida do texto. Com a pesquisa O Brasil que voa — Perfil dos Passageiros, Aeroportos e Rotas do Brasil é possível saber quem são os passageiros, quais as principais rotas que utilizam, quais as rotas que desejam ver implantadas e quais são os municípios influenciados por cada um dos 65 aeroportos. A pesquisa, feita em parceria com a Empresa de Planejamento e Logística (EPL), confirma que a democratização do transporte aéreo, o mais utilizado hoje pela população, é uma realidade. No ano passado, quase metade dos passageiros (45%) ganhava entre dois e dez salários mínimos — 6,1%, dois; 17,2%, entre dois e cinco; e 21,7%, entre cinco e dez. Enquanto o número de passageiros cresceu 170% entre 2004 e 2014, o preço das passagens caiu 48% no mesmo período. Acesso em: 13.12.2015 (com adaptações).',
    alternativas: [
      'A utilização do transporte aéreo é atualmente uma prerrogativa das classes da população que têm alto poder aquisitivo.',
      'Os municípios de todas as regiões brasileiras se desenvolvem de forma plena independentemente da influência de aeroportos.',
      'O transporte rodoviário ainda é o preferido pelos brasileiros em virtude do menor custo em relação ao transporte aéreo.',
      'A democratização do transporte aéreo se concretiza pelo acesso da população de baixa ou média renda a esse serviço.',
      'Os usuários do transporte aéreo brasileiro são aqueles que pertencem a faixas da população que recebem mais de dez salários mínimos por mês.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: o texto afirma que a democratização do transporte aéreo é uma realidade, com a maioria dos passageiros ganhando entre dois e dez salários mínimos. A alternativa A contraria essa informação, B e C não aparecem no texto, e E erra a faixa de renda, já que a maior parte dos passageiros recebe até dez salários.',
  },
  {
    id: 'lp-tipologia-qlivro34-40',
    temaId: 'lp-tipologia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE — TRF 1ª R — Analista Judiciário — 2017) Texto: Além de ter incorporado, no desempenho de seus cargos, conceitos como os da transparência e da impessoalidade, décadas antes de eles serem consolidados na Constituição Federal de 1988, o renomado escritor Graciliano Ramos foi um gestor em busca da eficiência e que agia com extremo zelo com os recursos públicos. Não se trata apenas do seu combate ao patrimonialismo e ao nepotismo, mas também do que se designa, hoje, de foco no resultado com responsabilidade fiscal. Um exemplo disso é o fato de que, como prefeito de Palmeira dos Índios, município do agreste alagoano, de 1928 a 1930, ele construiu estradas gastando menos da metade do que se costumava gastar por quilômetro construído pela administração do estado. O autor foi, também, um gestor público visionário que investia em planejamento urbano, fiscalizava obras pessoalmente e priorizava medidas preventivas para evitar desastres naturais, como enchentes. O texto trata da biografia de Graciliano Ramos e informa os motivos que o levaram a abandonar o ofício de escritor para se dedicar à política.',
    gabaritoCE: false,
    comentario:
      'A afirmação está errada. O texto destaca a atuação de Graciliano Ramos como gestor público, com foco em eficiência, combate ao patrimonialismo e planejamento, mas não informa que ele abandonou a literatura para entrar na política.',
  },
  {
    id: 'lp-tipologia-qlivro34-41',
    temaId: 'lp-tipologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(IDECAN — IF/PB — Jornalista (Superior) — 2019) “Algum tempo hesitei se devia abrir estas memórias pelo princípio ou pelo fim, isto é, se poria em primeiro lugar o meu nascimento ou a minha morte. Suposto o uso vulgar seja começar pelo nascimento, duas considerações me levaram a adotar diferente método: a primeira é que eu não sou propriamente um autor defunto, mas um defunto autor, para quem a campa foi outro berço; a segunda é que o escrito ficaria assim mais galante e mais novo. Moisés, que também contou a sua morte, não a pôs no introito. Por isto, expirei às duas horas da tarde de uma sexta-feira do mês de agosto de 1869, na minha bela chácara de Catumbi. Tinha uns sessenta e quatro anos, rijos e prósperos, era solteiro, possuía cerca de trezentos contos e fui acompanhado ao cemitério por onze amigos. Onze amigos! Verdade é que não houve cartas nem anúncios. Acresce que chovia — peneirava uma chuvinha miúda, triste e constante, tão constante e tão triste, que levou um daqueles tiéis da última hora a intercalar esta engenhosa ideia no discurso que proferiu à beira de minha cova: ‘Vós, que o conhecestes, meus senhores, vós podeis dizer comigo que a natureza parece estar chorando a perda irreparável de um dos mais belos caracteres que têm honrado a humanidade. Este ar sombrio, estas gotas do céu, aquelas nuvens escuras que cobrem o azul como um crepe funéreo, tudo isso é a dor crua e má que lhe rói à Natureza as mais íntimas entranhas; tudo isso é um sublime louvor ao nosso ilustre finado’. Bom e fiel amigo! Não, não me arrependo das vinte apólices que lhe deixei.” (Machado de Assis. Memórias Póstumas de Brás Cubas.) O gênero textual romance possui características predominantemente narrativas. No excerto acima, a sentença linguística que não consigna essa afirmação, e que — por isso — possui natureza mais descritiva, predominantemente, é:',
    alternativas: [
      '“Algum tempo hesitei se devia abrir estas memórias pelo princípio ou pelo fim...”',
      '“Suposto o uso vulgar seja começar pelo nascimento...”',
      '“Tinha uns sessenta e quatro anos, rijos e prósperos...”',
      '“Moisés, que também contou a sua morte...”',
      '“Verdade é que não houve cartas nem anúncios.”',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “Tinha uns sessenta e quatro anos, rijos e prósperos” caracteriza o narrador por meio de verbo de estado e adjetivos, o que é próprio da descrição. As demais sentenças narram ações, como hesitar, começar, expirar e contar, ou apresentam argumentos, o que as mantém no campo narrativo.',
  },
  {
    id: 'lp-interpretacao-qlivro34-42',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - Câmara de Aracaju/SE — Analista Legislativo — 2021) Uma reportagem sobre robótica começa do seguinte modo: “Soldar e pintar automóveis, realizar uma cirurgia delicada, preparar pizzas ou simplesmente fazer companhia para pessoas solitárias. Tarefas que há poucas décadas eram realizadas por seres humanos estão, cada vez mais, entregues a máquinas que, com a quarta revolução industrial, se aperfeiçoam em ritmo acelerado e desempenham funções só imaginadas em filmes de ficção.” Um texto traz sempre relações implícitas; o que NÃO se pode inferir do texto acima é que:',
    alternativas: [
      'já ocorreram três revoluções industriais;',
      'os filmes de ficção anteciparam temas reais de hoje;',
      'as máquinas vão acabar por substituir os seres humanos;',
      'a ciência ocupa um espaço cada vez maior em nossa vida;',
      'a substituição aludida pode trazer desemprego setorial.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta, pois o texto diz que as máquinas se aperfeiçoam e desempenham funções antes humanas, mas não afirma que elas vão acabar por substituir todos os seres humanos. As demais decorrem do texto: a “quarta revolução industrial” pressupõe três anteriores, as funções “só imaginadas em filmes” sugerem antecipação, e a substituição de tarefas pode gerar desemprego setorial.',
  },
  {
    id: 'lp-interpretacao-qlivro34-43',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FGV — PC/RJ - Auxiliar policial de necropsia de 3ª classe — 2022) Um casal pretendia assistir a determinado filme, mas, à porta do cinema, para sua surpresa, havia uma fila incomensurável de pessoas nos guichês. Diante disso, o marido declarou: — Puxa! Eu esqueci que eram férias das crianças! Com essa frase, o marido indica que:',
    alternativas: [
      'não gostaria de ter vindo em função do grande número de crianças na plateia;',
      'arrependeu-se de não ter trazido o filho para o cinema;',
      'lembrou-se de que o filme a ser assistido era destinado especialmente ao público infantil;',
      'se enganou na opção do filme a ser assistido em função de informações incompletas dos jornais;',
      'entendeu a razão do grande número de pessoas nas filas.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: ao lembrar que era período de férias escolares, o marido explica a razão da grande fila. As demais atribuem ao marido arrependimento, planejamento infantil ou engano por informação de jornal, que a frase não sugere.',
  },
  {
    id: 'lp-tipologia-qlivro34-44',
    temaId: 'lp-tipologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - PROMINP - Nível Superior - Área de Qualidade - 2012) Os extratos 1 e 2 do texto apresentam características que permitem estabelecer diferenças entre a tipologia textual. 1) “Você começa a escrever um e-mail de trabalho, e é interrompido pelo toque do celular. Atende à ligação e, quando desliga, vê avisos de mensagens na telinha. Abre uma delas e, antes mesmo de responder, algum colega chama você para terminar aquela conversa que começaram de manhã...” (linhas 1-5) 2) “Como empreendia seus próprios projetos e trabalhava de casa, o empresário não sabia mais o que era horário de expediente, final de semana ou feriados. Mas reagiu a essa falta de limites e criou espaço para folgas e diversão.” (linhas 30-33) Considerando tais características, constata-se que o extrato:',
    alternativas: [
      '1 é argumentação, e o 2, narração;',
      '1 é narração, e o 2, argumentação;',
      '1 é narração, e o 2, descrição;',
      '1 é descrição, e o 2, argumentação;',
      '1 é descrição, e o 2, narração.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: o extrato 1 descreve uma situação habitual de trabalho, sem um enredo de começo, meio e fim, enquanto o extrato 2 narra fatos ocorridos com o empresário (ele reagiu e criou espaço). As demais combinações atribuem ao extrato 1 a narração ou a argumentação, o que não corresponde à sua organização.',
  },
  {
    id: 'lp-interpretacao-qlivro34-45',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - Tribunal de Justiça do Estado de Santa Catarina - Analista Administrativo - 2018) Observe a charge a seguir: [Charge com a legenda “Stephen Hawking”. À esquerda, o cientista em cadeira de rodas; ao centro, um homem de cabelos despenteados; à direita, um personagem de manto e barba longa. Texto no balão: “Olha, Galileu, a mente brilhante que estávamos esperando!”.] A charge acima é uma homenagem a Stephen Hawking, destacando o fato de o cientista:',
    alternativas: [
      'ter alcançado o céu após sua morte;',
      'mostrar determinação no combate à doença;',
      'ser comparado a cientistas famosos;',
      'ser reconhecido como uma mente brilhante;',
      'localizar seus interesses nos estudos de Física.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: a fala da charge reconhece Hawking como uma mente brilhante, aguardada pelos personagens. A cena após a morte serve apenas de moldura humorística, e a charge não mostra determinação diante da doença, não faz comparação explícita com outros cientistas nem se concentra em seus estudos de Física.',
  },
  {
    id: 'lp-interpretacao-qlivro34-46',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(IDECAN - IF/RR - Técnico em informática (médio) - 2020) [Tirinha de três quadros com um personagem infantil que caminha por uma calçada; no último quadro, ele está diante do poste de uma placa de sinalização com duas indicações: “PUNIR — 2 Km”, com seta para a direita, e “EDUCAR — 60 Km”, com seta para cima.] Assinale a única alternativa que não represente uma interpretação (inclusive de pressupostos, subentendidos e implícitos) coerente da tirinha acima.',
    alternativas: [
      'Punir é bem mais fácil que educar, embora seja menos eficiente.',
      'Ao seguir o caminho de punir, nos desviamos do caminho de educar.',
      'A educação é muito mais demorada que a punição, mas vale mais a pena.',
      'Antes de iniciar o caminho para educar, precisamos passar pelo caminho de punir.',
      'Se desejarmos seguir o caminho de educar, não deveremos passar pelo caminho de punir.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta, por ser incoerente com a tirinha: a placa apresenta “punir” e “educar” como caminhos distintos e alternativos, e não como etapas em que a punição precede a educação. As demais são leituras coerentes: punir é mais próximo e menos eficiente, seguir o caminho de punir desvia do de educar, a educação demora mais, mas compensa, e educar não exige passar pela punição.',
  },
];
