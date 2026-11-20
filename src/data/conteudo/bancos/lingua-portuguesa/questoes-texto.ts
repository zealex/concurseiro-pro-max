import type { QuestaoTreino } from '../../../types';

/** Questões ligadas aos textos-base (interpretação, tipologia, coesão, semântica, reescrita e pontuação). */
export const QUESTOES_TEXTO: QuestaoTreino[] = [
  /* ---------- tx-lp-01 · O sucesso que não aparece ---------- */
  {
    id: 'lp-interpretacao-q01',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    textoBaseId: 'tx-lp-01',
    enunciado: 'De acordo com o texto, o “sucesso invisível” da vacinação contribui para a desconfiança porque',
    alternativas: [
      'as vacinas deixaram de ser gratuitas, o que afastou as famílias das unidades de saúde.',
      'as gerações que não conviveram com a doença tendem a temer mais a vacina do que a própria infecção.',
      'as campanhas nacionais divulgam dados de internação que contradizem a eficácia das vacinas.',
      'a atenção primária deixou de conferir a caderneta de vacinação nas consultas de rotina.',
      'os surtos recentes ocuparam as manchetes e desacreditaram o calendário vacinal.',
    ],
    correta: 1,
    comentario:
      'O 1º parágrafo afirma que, por não produzir notícia, o sucesso da vacinação faz com que gerações que “nunca viram a doença” passem “a temer mais a agulha do que o vírus”. A contraria o texto (as vacinas são gratuitas); C, D e E atribuem ao texto afirmações que ele não faz.',
  },
  {
    id: 'lp-semantica-q01',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-lp-01',
    enunciado:
      'No trecho “A confiança se constrói no varejo, consulta a consulta, e se perde no atacado”, as expressões “no varejo” e “no atacado” foram empregadas em sentido conotativo e estabelecem entre si uma relação de oposição.',
    gabaritoCE: true,
    comentario:
      'Certo. Termos do comércio foram usados em sentido figurado: “no varejo” = aos poucos, em pequenas doses (consulta a consulta); “no atacado” = de uma vez, em grande escala (um boato compartilhado milhares de vezes). A oposição varejo × atacado reforça a antítese entre construir e perder.',
  },
  {
    id: 'lp-coesao-q01',
    temaId: 'lp-coesao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-lp-01',
    enunciado:
      'No segundo parágrafo, os pronomes “lhes” (em “o que lhes falta”) e “as” (em “em quem as orienta”) retomam, respectivamente, “Muitas famílias” e “as vacinas”.',
    gabaritoCE: false,
    comentario:
      'Errado. Os dois pronomes retomam “Muitas famílias”: falta-lhes (às famílias) tempo ou confiança em quem as (as famílias) orienta. Ligar “as” a “as vacinas” não faz sentido, pois quem recebe orientação são as famílias.',
  },
  {
    id: 'lp-reescrita-q01',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    textoBaseId: 'tx-lp-01',
    enunciado:
      'Assinale a alternativa que reescreve o período “Campanhas nacionais são necessárias, mas não bastam” mantendo a correção gramatical e o sentido original.',
    alternativas: [
      'Campanhas nacionais são necessárias, portanto não bastam.',
      'Como campanhas nacionais são necessárias, não bastam.',
      'Campanhas nacionais não bastam, porque são necessárias.',
      'Embora sejam necessárias, campanhas nacionais não bastam.',
      'Se campanhas nacionais são necessárias, não bastam.',
    ],
    correta: 3,
    comentario:
      'A relação original é adversativa (mas): admite-se um fato (são necessárias) e se contrapõe outro (não bastam). A oração concessiva com “embora” + subjuntivo preserva essa relação. “Portanto” (conclusão), “como” (causa), “porque” (causa) e “se” (condição) alteram o sentido.',
  },
  {
    id: 'lp-pontuacao-q01',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    textoBaseId: 'tx-lp-01',
    enunciado:
      'No trecho “a equipe da atenção primária tem papel decisivo: o agente comunitário que conhece a rua, a enfermeira que confere a caderneta, o médico que dedica dois minutos a responder a uma dúvida sem desdém”, os dois-pontos introduzem uma enumeração que especifica os integrantes da equipe mencionada.',
    gabaritoCE: true,
    comentario:
      'Certo. Os dois-pontos anunciam uma enumeração explicativa: os três profissionais detalham quem compõe “a equipe da atenção primária”. As vírgulas, por sua vez, separam os itens dessa enumeração.',
  },

  /* ---------- tx-lp-02 · O Alienista ---------- */
  {
    id: 'lp-interpretacao-q02',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    textoBaseId: 'tx-lp-02',
    enunciado:
      'No primeiro parágrafo e no trecho “demonstrando os teoremas com cataplasmas”, o narrador caracteriza Simão Bacamarte com',
    alternativas: [
      'admiração sincera, apresentando-o como modelo de cientista rigoroso.',
      'hostilidade aberta, acusando-o de charlatanismo diante da Coroa.',
      'ironia, exagerando-lhe os méritos e aproximando a teoria abstrata de um remédio caseiro.',
      'neutralidade documental, limitando-se a transcrever as crônicas da vila.',
      'piedade, lamentando que ele tenha abandonado a carreira em Coimbra.',
    ],
    correta: 2,
    comentario:
      'O exagero (“o maior dos médicos do Brasil, de Portugal e das Espanhas”) e a imagem de “demonstrar teoremas com cataplasmas” (emplastro caseiro) rebaixam, com humor, a pretensão científica do personagem: é a ironia do narrador machadiano. Não há elogio sem ressalva, acusação explícita, neutralidade nem lamento no trecho.',
  },
  {
    id: 'lp-semantica-q02',
    temaId: 'lp-semantica',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    textoBaseId: 'tx-lp-02',
    enunciado:
      'No trecho “a ciência tem o inefável dom de curar todas as mágoas”, o adjetivo “inefável” pode ser substituído, sem alteração de sentido, por',
    alternativas: ['inútil.', 'incerto.', 'inesperado.', 'indizível.', 'inacabado.'],
    correta: 3,
    comentario:
      '“Inefável” é o que não se pode exprimir por palavras: indizível, indescritível, em geral com valor positivo (encantador). As demais alternativas não têm esse sentido; cuidado com a semelhança apenas formal criada pelo prefixo in-.',
  },
  {
    id: 'lp-coesao-q02',
    temaId: 'lp-coesao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-lp-02',
    enunciado:
      'Em “Foi então que um dos recantos desta lhe chamou especialmente a atenção”, o demonstrativo “desta” retoma “medicina”, termo do período anterior.',
    gabaritoCE: true,
    comentario:
      'Certo. “Desta” (de + esta) retoma o termo feminino mais próximo, “medicina”: o “recanto psíquico, o exame de patologia cerebral” é um ramo da medicina que passou a interessar ao médico. Trata-se de coesão referencial anafórica; “lhe” refere-se ao próprio Bacamarte.',
  },
  {
    id: 'lp-pontuacao-q02',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    textoBaseId: 'tx-lp-02',
    enunciado:
      'Em “— A ciência, disse ele a Sua Majestade, é o meu emprego único”, as vírgulas poderiam ser suprimidas sem prejuízo da correção gramatical, pois apenas marcam uma pausa respiratória.',
    gabaritoCE: false,
    comentario:
      'Errado. As vírgulas isolam a intervenção do narrador (“disse ele a Sua Majestade”), oração com verbo de elocução intercalada na fala da personagem. Essa intercalação deve vir entre vírgulas (ou travessões); vírgula não é marca de respiração, e sim de estrutura sintática.',
  },
  {
    id: 'lp-tipologia-q01',
    temaId: 'lp-tipologia',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    textoBaseId: 'tx-lp-02',
    enunciado: 'Quanto à tipologia, o fragmento de “O Alienista” é predominantemente',
    alternativas: [
      'narrativo, com fatos organizados no tempo, narrador e falas de personagens em discurso direto.',
      'injuntivo, pois orienta o leitor a seguir instruções médicas.',
      'dissertativo-argumentativo, pois defende uma tese com dados e conclusão.',
      'descritivo, pois se limita a retratar a vila de Itaguaí sem sucessão de acontecimentos.',
      'expositivo, pois explica conceitos científicos de patologia cerebral.',
    ],
    correta: 0,
    comentario:
      'Há narrador, personagens (Bacamarte, Crispim Soares), progressão temporal (“Aos trinta e quatro anos regressou”; “Foi então que...”) e discurso direto marcado por travessão: sequência narrativa. Não há instruções (injuntivo), tese defendida (argumentativo), mera descrição estática nem exposição de conceitos.',
  },

  /* ---------- tx-lp-03 · Quem aguenta tudo ---------- */
  {
    id: 'lp-interpretacao-q03',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    textoBaseId: 'tx-lp-03',
    enunciado: 'A tese defendida no texto é a de que',
    alternativas: [
      'os médicos jovens devem recusar plantões extras para preservar a própria saúde.',
      'a privação de sono afeta apenas os profissionais sem experiência.',
      'a expressão “ele aguenta tudo” é um elogio adequado a quem demonstra competência.',
      'conselhos individuais para descansar resolvem o problema do cansaço extremo.',
      'o excesso de jornada é sobretudo um problema de organização do trabalho, que expõe o paciente a riscos.',
    ],
    correta: 4,
    comentario:
      'O 2º parágrafo explicita: “Trata-se, portanto, de uma questão de organização do trabalho, e não apenas de força de vontade”; o 3º liga o limite à “segurança do paciente”. A é um conselho individual que o texto relativiza; B generaliza sem base; C contraria o texto (a frase revela uma cultura problemática); D é negada no 2º parágrafo.',
  },
  {
    id: 'lp-coesao-q03',
    temaId: 'lp-coesao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    textoBaseId: 'tx-lp-03',
    enunciado: 'Em “Se a escala é montada com lacunas, alguém as cobrirá”, o pronome “as” retoma “a escala”.',
    gabaritoCE: false,
    comentario:
      'Errado. “As” é pronome oblíquo átono no plural, objeto direto de “cobrirá”, e retoma “lacunas”: alguém cobrirá as lacunas. “A escala” está no singular e não poderia ser retomada por “as”.',
  },
  {
    id: 'lp-semantica-q03',
    temaId: 'lp-semantica',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    textoBaseId: 'tx-lp-03',
    enunciado: 'No texto, as aspas em “ele aguenta tudo” (1º parágrafo) e em “aguenta tudo” (3º parágrafo) foram empregadas para',
    alternativas: [
      'destacar uma expressão estrangeira não aportuguesada.',
      'indicar um neologismo criado pelo autor.',
      'reproduzir uma fala corrente da qual o autor se distancia criticamente.',
      'marcar o título de uma obra citada.',
      'assinalar um erro gramatical que deve ser corrigido.',
    ],
    correta: 2,
    comentario:
      'As aspas marcam a citação de uma fala alheia (“uma frase que circula nos corredores”) e, no 3º parágrafo, assinalam distanciamento crítico: o autor reproduz a expressão para questioná-la. Não se trata de estrangeirismo, neologismo, título nem erro.',
  },
  {
    id: 'lp-tipologia-q02',
    temaId: 'lp-tipologia',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    textoBaseId: 'tx-lp-03',
    enunciado:
      'O texto é predominantemente narrativo, pois relata, em sequência cronológica, a história de um médico que emenda três plantões seguidos.',
    gabaritoCE: false,
    comentario:
      'Errado. O texto é dissertativo-argumentativo: contesta a ideia de que resistência é competência (tese), apoia-se em evidências (privação de sono) e em raciocínio causal (lacunas na escala, remuneração por vínculos) e conclui que valorizar quem “aguenta tudo” premia o risco. O colega do plantão é só uma situação ilustrativa, não um enredo.',
  },
  {
    id: 'lp-reescrita-q02',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    textoBaseId: 'tx-lp-03',
    enunciado:
      'Assinale a alternativa em que a reescrita de “Se a escala é montada com lacunas, alguém as cobrirá” mantém o sentido e a correção gramatical.',
    alternativas: [
      'Caso a escala seja montada com lacunas, alguém as cobrirá.',
      'Caso a escala é montada com lacunas, alguém as cobrirá.',
      'Embora a escala seja montada com lacunas, alguém as cobrirá.',
      'Porque a escala é montada com lacunas, ninguém as cobrirá.',
      'Desde que a escala foi montada com lacunas, alguém as cobrirá.',
    ],
    correta: 0,
    comentario:
      '“Caso” é conjunção condicional, como “se”, mas exige o verbo no subjuntivo (“seja montada”). B erra o modo verbal; C troca condição por concessão; D muda para causa e inverte o sentido; E, com “desde que” + indicativo, passa a indicar tempo.',
  },

  /* ---------- tx-lp-04 · O Cortiço ---------- */
  {
    id: 'lp-semantica-q04',
    temaId: 'lp-semantica',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    textoBaseId: 'tx-lp-04',
    enunciado:
      'Em “o cortiço acordava, abrindo, não os olhos, mas a sua infinidade de portas e janelas alinhadas”, predomina a figura de linguagem denominada',
    alternativas: ['eufemismo.', 'prosopopeia.', 'hipérbole.', 'pleonasmo.', 'catacrese.'],
    correta: 1,
    comentario:
      'Prosopopeia (personificação) atribui ações ou características humanas a seres inanimados: o cortiço “acordava” e abria portas e janelas como quem abre os olhos. Não há suavização (eufemismo), exagero como recurso central (hipérbole), redundância (pleonasmo) nem palavra usada por falta de termo próprio (catacrese).',
  },
  {
    id: 'lp-tipologia-q03',
    temaId: 'lp-tipologia',
    formato: 'multipla',
    estilo: 'nc-ufpr',
    dificuldade: 2,
    textoBaseId: 'tx-lp-04',
    enunciado: 'No fragmento de “O Cortiço”, a sequência textual predominante é a',
    alternativas: [
      'injuntiva, marcada por verbos no imperativo.',
      'argumentativa, com defesa explícita de um ponto de vista.',
      'expositiva, com definição de conceitos.',
      'descritiva, com acúmulo de percepções sensoriais que retratam o despertar do cortiço.',
      'dialogal, com troca de turnos entre personagens.',
    ],
    correta: 3,
    comentario:
      'O trecho é descritivo: verbos no pretérito imperfeito (“surgiam”, “ouviam-se”, “aquecia”) apresentam ações simultâneas, como num quadro, e acumulam percepções sensoriais (bocejos, cheiro do café, choros, cacarejar). Não há ordens, tese, definições nem diálogo.',
  },
  {
    id: 'lp-semantica-q05',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    textoBaseId: 'tx-lp-04',
    enunciado:
      'Em “ouviam-se amplos bocejos, fortes como o marulhar das ondas”, há uma metáfora, pois a aproximação entre os bocejos e o barulho das ondas é feita sem elemento comparativo explícito.',
    gabaritoCE: false,
    comentario:
      'Errado. Há comparação (símile), marcada pelo conectivo explícito “como”. A metáfora faz a aproximação sem conectivo (ex.: “os bocejos eram ondas”).',
  },
  {
    id: 'lp-pontuacao-q03',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-lp-04',
    enunciado:
      'No terceiro parágrafo, os sinais de ponto e vírgula separam orações coordenadas que compõem uma longa enumeração de ações simultâneas; sua substituição por ponto-final, com os devidos ajustes de letras maiúsculas, manteria a correção gramatical do trecho.',
    gabaritoCE: true,
    comentario:
      'Certo. Cada segmento separado por ponto e vírgula é uma oração de sentido completo (“ouviam-se amplos bocejos”, “pigarreava-se grosso por toda a parte”...). O autor preferiu o ponto e vírgula para manter a unidade da cena; o ponto-final seria gramaticalmente possível, embora fragmentasse o quadro.',
  },
  {
    id: 'lp-interpretacao-q04',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 1,
    textoBaseId: 'tx-lp-04',
    enunciado: 'A expressão “sete horas de chumbo” (2º parágrafo) sugere que os moradores do cortiço',
    alternativas: [
      'tiveram um sono pesado e profundo.',
      'trabalharam durante a madrugada em uma fundição.',
      'dormiram mal, acordando várias vezes.',
      'foram intoxicados durante a noite.',
      'acordaram mais tarde do que de costume.',
    ],
    correta: 0,
    comentario:
      '“De chumbo” é metáfora: o chumbo é pesado, logo as sete horas foram de sono pesado, profundo — ideia reforçada por “de uma assentada” (de uma só vez, sem interrupção) e por “acordar alegre e farto”. As demais leituras tomam a expressão ao pé da letra ou contrariam o texto.',
  },

  /* ---------- tx-lp-05 · Correlação não é causa ---------- */
  {
    id: 'lp-interpretacao-q05',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    textoBaseId: 'tx-lp-05',
    enunciado: 'Segundo o texto, os estudos observacionais',
    alternativas: [
      'devem ser abandonados, pois só os ensaios randomizados produzem conhecimento válido.',
      'comprovam relações de causa e efeito quando envolvem grande número de pessoas.',
      'são úteis para levantar hipóteses e, por vezes, são a única evidência possível, mas suas conclusões pedem cautela.',
      'são antiéticos, porque sorteiam pessoas para fumar durante décadas.',
      'dispensam a análise de fatores de confusão quando os resultados são estatisticamente fortes.',
    ],
    correta: 2,
    comentario:
      'O 2º parágrafo afirma que os estudos observacionais “são valiosos para levantar hipóteses e, muitas vezes, são a única evidência disponível”, mas “suas conclusões exigem cautela”. A e E contrariam o texto; B ignora os fatores de confusão; D inverte a ideia: sortear fumantes é que seria antiético, e é justamente isso que o estudo observacional não faz.',
  },
  {
    id: 'lp-coesao-q04',
    temaId: 'lp-coesao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-lp-05',
    enunciado:
      'Em “Esse é o problema dos fatores de confusão”, o pronome “Esse” tem valor catafórico, pois antecipa uma informação que será apresentada adiante no texto.',
    gabaritoCE: false,
    comentario:
      'Errado. “Esse” é anafórico: retoma a situação descrita no 1º parágrafo (o café pode apenas acompanhar a longevidade, sem causá-la). Pela norma, “esse” remete ao que já foi dito; “este” costuma anunciar o que vem a seguir (catáfora).',
  },
  {
    id: 'lp-reescrita-q03',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    textoBaseId: 'tx-lp-05',
    enunciado:
      'Em “reduzem esse viés, embora sejam caros e nem sempre possíveis”, a conjunção “embora” pode ser substituída, sem prejuízo do sentido e da correção gramatical, por',
    alternativas: ['porque.', 'desde que.', 'à medida que.', 'ainda que.', 'contanto que.'],
    correta: 3,
    comentario:
      '“Embora” é concessiva e pede subjuntivo; “ainda que” também é concessiva e combina com “sejam”. “Porque” é causal; “desde que” (com subjuntivo) e “contanto que” são condicionais; “à medida que” é proporcional — todas mudariam a relação lógica.',
  },
  {
    id: 'lp-tipologia-q04',
    temaId: 'lp-tipologia',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-lp-05',
    enunciado:
      'O primeiro parágrafo recorre a uma situação hipotética, introduzida pela forma verbal imperativa “Imagine”, para exemplificar o raciocínio que será generalizado no parágrafo seguinte.',
    gabaritoCE: true,
    comentario:
      'Certo. “Imagine” (imperativo) convida o leitor a considerar um caso hipotético (o estudo do café). No 2º parágrafo, o exemplo é generalizado como “o problema dos fatores de confusão”. É estratégia argumentativa por exemplificação, comum em textos expositivo-argumentativos.',
  },
  {
    id: 'lp-pontuacao-q04',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    textoBaseId: 'tx-lp-05',
    enunciado:
      'A supressão das vírgulas que isolam a oração “nos quais o acaso decide quem recebe a intervenção” manteria a correção gramatical e o sentido original do período.',
    gabaritoCE: false,
    comentario:
      'Errado. Entre vírgulas, a oração adjetiva é explicativa: atribui uma característica a todos os ensaios randomizados. Sem as vírgulas, passaria a restritiva, sugerindo que só alguns ensaios randomizados (aqueles em que o acaso decide) reduzem o viés — mudança de sentido.',
  },

  /* ---------- tx-lp-06 · Os Sertões ---------- */
  {
    id: 'lp-semantica-q06',
    temaId: 'lp-semantica',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    textoBaseId: 'tx-lp-06',
    enunciado: 'A expressão “Hércules-Quasímodo” constrói-se principalmente por meio de',
    alternativas: [
      'aproximação de ideias opostas, ao reunir num só termo a força do herói mitológico e a deformidade do personagem de Victor Hugo.',
      'eufemismo, ao suavizar a descrição negativa do sertanejo.',
      'pleonasmo, ao reforçar com dois nomes a mesma ideia de força.',
      'sinestesia, ao misturar sensações percebidas por sentidos diferentes.',
      'onomatopeia, ao imitar o som dos passos do sertanejo.',
    ],
    correta: 0,
    comentario:
      'Hércules simboliza a força; Quasímodo, o corcunda de “Notre-Dame de Paris”, de Victor Hugo, a deformidade. Unidos num só termo, opõem a força real (“antes de tudo, um forte”) à aparência disforme: aproximação de opostos, que se classifica como antítese ou como oxímoro (paradoxo). Cada nome próprio, isoladamente, vale por uma qualidade (antonomásia), mas o efeito central é a oposição. Não há suavização (B), redundância (C), mistura de sentidos (D) nem imitação de som (E).',
  },
  {
    id: 'lp-interpretacao-q06',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    textoBaseId: 'tx-lp-06',
    enunciado: 'Do fragmento de “Os Sertões”, depreende-se que',
    alternativas: [
      'o sertanejo é fisicamente frágil, como revela sua aparência.',
      'a aparência de cansaço do sertanejo é enganosa, pois esconde uma energia que surge de repente diante de um desafio.',
      'o sertanejo evita qualquer incidente para poupar as energias.',
      'o autor considera a estrutura física do sertanejo idêntica à dos atletas.',
      'o cansaço do sertanejo decorre de doenças típicas da região.',
    ],
    correta: 1,
    comentario:
      'O texto se organiza em contraste: “O sertanejo é, antes de tudo, um forte”, embora a aparência “revele o contrário”; depois, “toda esta aparência de cansaço ilude”, e basta um incidente para que o homem se transfigure. A toma a aparência pela essência; C, D e E não têm apoio no texto (D o contradiz: falta-lhe a estrutura das “organizações atléticas”).',
  },
  {
    id: 'lp-coesao-q05',
    temaId: 'lp-coesao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    textoBaseId: 'tx-lp-06',
    enunciado:
      'Em “Nada é mais surpreendedor do que vê-la desaparecer de improviso”, o pronome “la” retoma “toda esta aparência de cansaço”, expressão do período anterior.',
    gabaritoCE: true,
    comentario:
      'Certo. O pronome oblíquo “a” (que assume a forma “la” depois de verbo terminado em r: ver + a = vê-la) retoma o termo feminino do período anterior: o surpreendente é ver a aparência de cansaço desaparecer.',
  },
  {
    id: 'lp-reescrita-q04',
    temaId: 'lp-reescrita',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-lp-06',
    enunciado:
      'No trecho “A sua aparência, entretanto, ao primeiro lance de vista, revela o contrário”, a substituição de “entretanto” por “no entanto” preservaria a correção gramatical e o sentido adversativo do período.',
    gabaritoCE: true,
    comentario:
      'Certo. “Entretanto” e “no entanto” são conjunções coordenativas adversativas equivalentes e podem vir deslocadas entre vírgulas: “A sua aparência, no entanto, ao primeiro lance de vista, revela o contrário”.',
  },
  {
    id: 'lp-pontuacao-q05',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    textoBaseId: 'tx-lp-06',
    enunciado: 'No período “É desgracioso, desengonçado, torto.”, as vírgulas foram empregadas para',
    alternativas: [
      'isolar um vocativo.',
      'marcar a elipse de um verbo.',
      'isolar uma oração adjetiva explicativa.',
      'separar o sujeito do predicado.',
      'separar termos coordenados de mesma função sintática, sem conjunção.',
    ],
    correta: 4,
    comentario:
      'Os três adjetivos são predicativos do sujeito (oculto: ele, o sertanejo) coordenados sem conjunção (assíndeto); a vírgula separa termos de mesma função numa enumeração. Não há vocativo, elipse verbal nem oração adjetiva, e separar sujeito de predicado por vírgula seria erro.',
  },

  /* ---------- tx-lp-07 · O prontuário não é vitrine ---------- */
  {
    id: 'lp-interpretacao-q07',
    temaId: 'lp-interpretacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-lp-07',
    enunciado:
      'Infere-se do primeiro parágrafo que, para o autor, a falta de sigilo prejudica não só o paciente cuja informação é exposta, mas também a própria assistência, já que pacientes inseguros tendem a omitir informações relevantes.',
    gabaritoCE: true,
    comentario:
      'Certo. O texto afirma que, sem discrição, “o paciente omite sintomas, esconde hábitos” e pode deixar de procurar atendimento; por isso o segredo “não protege apenas o indivíduo; protege a própria possibilidade de cuidar”.',
  },
  {
    id: 'lp-coesao-q06',
    temaId: 'lp-coesao',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    textoBaseId: 'tx-lp-07',
    enunciado: 'Em “Contudo, multiplicou também as portas de acesso” (2º parágrafo), o sujeito da forma verbal “multiplicou” é',
    alternativas: [
      '“diferentes profissionais”, explícito no período anterior.',
      'indeterminado, pois não se sabe quem multiplicou.',
      '“as portas de acesso”, posposto ao verbo.',
      'elíptico e retoma “A informatização”.',
      'inexistente, por se tratar de oração sem sujeito.',
    ],
    correta: 3,
    comentario:
      'O sujeito é elíptico e remete a “A informatização”, que “trouxe ganhos” e, “contudo”, “multiplicou” as portas de acesso: os dois verbos no pretérito marcam o paralelismo (o prontuário aparece com verbos no presente, “evita” e “permite”). A erra porque “diferentes profissionais” está no plural e é sujeito de “acompanhem”; “as portas de acesso” (C) é objeto direto, também no plural. Não há sujeito indeterminado (B) nem oração sem sujeito (E).',
  },
  {
    id: 'lp-semantica-q07',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-lp-07',
    enunciado:
      'No trecho “ela amplia tanto o cuidado quanto o descuido”, o emprego de palavras de sentidos opostos constitui antítese e reforça a ideia de que a tecnologia pode servir tanto à proteção quanto à exposição do paciente.',
    gabaritoCE: true,
    comentario:
      'Certo. “Cuidado” e “descuido” são antônimos (o prefixo des- indica negação). A antítese, marcada pela correlação “tanto... quanto”, resume o argumento: a ferramenta que melhora a assistência também multiplica os riscos de exposição.',
  },
  {
    id: 'lp-reescrita-q05',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 1,
    textoBaseId: 'tx-lp-07',
    enunciado: 'No segundo parágrafo, o conector “Contudo” poderia ser substituído, sem alteração do sentido, por',
    alternativas: ['Portanto,', 'Por exemplo,', 'Além disso,', 'Por isso,', 'No entanto,'],
    correta: 4,
    comentario:
      '“Contudo” é adversativo: contrapõe os “ganhos evidentes” da informatização ao aumento das “portas de acesso”. “No entanto” mantém a oposição. “Portanto” e “por isso” indicam conclusão/consequência, “além disso” é aditivo e “por exemplo” introduz exemplificação.',
  },
  {
    id: 'lp-pontuacao-q06',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    textoBaseId: 'tx-lp-07',
    enunciado:
      'Em “O segredo, assim, não protege apenas o indivíduo; protege a própria possibilidade de cuidar”, as vírgulas que isolam “assim” indicam que o termo foi empregado como conector de valor conclusivo, equivalente a “portanto”, deslocado para o interior da oração.',
    gabaritoCE: true,
    comentario:
      'Certo. O período conclui o raciocínio do parágrafo (sem sigilo, o paciente omite informações; logo, o segredo protege o cuidar). “Assim” equivale a “portanto” e, deslocado entre o sujeito e o verbo, deve vir isolado por vírgulas, como ocorre com as conjunções coordenativas intercaladas.',
  },

  /* ---------- tx-lp-08 · A rua (João do Rio) ---------- */
  {
    id: 'lp-interpretacao-q08',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    textoBaseId: 'tx-lp-08',
    enunciado: 'No texto, o autor sustenta que o amor da rua',
    alternativas: [
      'é um sentimento passageiro, que se transforma como o ódio e o egoísmo.',
      'nasce do sofrimento comum imposto pela lei e pela polícia.',
      'é exclusivo dos moradores das grandes cidades.',
      'é partilhado por aqueles a quem o autor se dirige e permanece através das épocas, ao contrário de outros sentimentos.',
      'foi substituído, com o passar dos séculos, pela ironia.',
    ],
    correta: 3,
    comentario:
      'O autor afirma que esse amor “é partilhado por todos vós” e é “o único que, como a própria vida, resiste às idades e às épocas”, enquanto “tudo se transforma” (o amor, o ódio, o egoísmo). A contraria o texto; B inverte a negação (“não porque soframos [...] a lei e a polícia”); C ignora “nas cidades, nas aldeias, nos povoados”; E não tem apoio no texto.',
  },
  {
    id: 'lp-pontuacao-q07',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-lp-08',
    enunciado:
      'Em “Hoje é mais amargo o riso, mais dolorosa a ironia”, a vírgula marca a omissão da forma verbal “é”, facilmente recuperável pelo contexto.',
    gabaritoCE: true,
    comentario:
      'Certo. Ocorre zeugma (elipse de termo já expresso): “mais dolorosa [é] a ironia”. A vírgula assinala o lugar do verbo omitido, como em “Eu prefiro café; ela, chá”.',
  },
  {
    id: 'lp-coesao-q07',
    temaId: 'lp-coesao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-lp-08',
    enunciado:
      'Em “É este mesmo o sentimento imperturbável e indissolúvel”, o demonstrativo “este” antecipa os sentimentos enumerados adiante — “o amor, o ódio, o egoísmo” —, que o autor considera imperturbáveis.',
    gabaritoCE: false,
    comentario:
      'Errado. “Este” retoma o amor da rua, mencionado no fim do período anterior. Os sentimentos enumerados depois (“o amor, o ódio, o egoísmo”) são justamente os que “se transformam” e “variam”, em oposição ao amor da rua, que resiste às épocas.',
  },
  {
    id: 'lp-semantica-q08',
    temaId: 'lp-semantica',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    textoBaseId: 'tx-lp-08',
    enunciado:
      'Em “Tudo se transforma, tudo varia”, a repetição da mesma palavra no início de orações sucessivas caracteriza a figura de linguagem denominada',
    alternativas: ['anáfora.', 'hipérbato.', 'eufemismo.', 'sinestesia.', 'catacrese.'],
    correta: 0,
    comentario:
      'Anáfora, como figura de linguagem, é a repetição de palavra ou expressão no início de frases ou orações sucessivas (“Tudo..., tudo...”), para dar ênfase. Hipérbato é inversão da ordem; eufemismo, suavização; sinestesia, mistura de sentidos; catacrese, metáfora desgastada pelo uso (“pé da mesa”).',
  },
  {
    id: 'lp-reescrita-q06',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    textoBaseId: 'tx-lp-08',
    enunciado:
      'Assinale a reescrita do trecho “mas porque nos une, nivela e agremia o amor da rua” que preserva o sentido original e a correção gramatical.',
    alternativas: [
      'mas porque nos unem, nivelam e agremiam o amor da rua.',
      'mas porque nós unimos, nivelamos e agremiamos o amor da rua.',
      'mas porque o amor da rua nos une, nivela e agremia.',
      'mas porque une-nos, nivela-nos e agremia-nos o amor da rua.',
      'mas por que nos une, nivela e agremia o amor da rua.',
    ],
    correta: 2,
    comentario:
      'No original, o sujeito “o amor da rua” vem posposto; na ordem direta, os verbos seguem no singular e “nos” continua objeto: “o amor da rua nos une...”. A erra a concordância; B inverte os papéis (nós passaríamos a unir o amor); D usa ênclise depois de “porque”, conjunção subordinativa que exige próclise; E troca a conjunção causal “porque” por “por que”.',
  },
];
