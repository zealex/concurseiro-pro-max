import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Estatuto da Pessoa Idosa, igualdade racial e racismo, LBI
 * ------------------------------------------------------------------ */

export const QUESTOES_2: QuestaoTreino[] = [
  /* ---------- lg-pessoa-idosa ---------- */
  {
    id: 'lg-pessoa-idosa-q01',
    temaId: 'lg-pessoa-idosa',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'O Estatuto da Pessoa Idosa (Lei 10.741/2003) é destinado a regular os direitos assegurados às pessoas com idade:',
    alternativas: [
      'igual ou superior a 60 anos.',
      'superior a 60 anos.',
      'igual ou superior a 65 anos.',
      'igual ou superior a 70 anos.',
      'superior a 80 anos.',
    ],
    correta: 0,
    comentario:
      'O art. 1º alcança as pessoas com idade igual ou superior a 60 anos. O marco de 65 anos aparece em direitos específicos (BPC, art. 34; gratuidade plena no transporte, art. 39), e o de 80 anos marca a prioridade especial (art. 3º, § 2º). “Superior a 60” exclui quem tem exatamente 60 anos.',
    fundamento: 'Lei 10.741/2003, art. 1º',
  },
  {
    id: 'lg-pessoa-idosa-q02',
    temaId: 'lg-pessoa-idosa',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo sobre o art. 19 do Estatuto da Pessoa Idosa:\n\nI. Os casos de suspeita ou confirmação de violência contra pessoas idosas são objeto de notificação compulsória pelos serviços de saúde públicos e privados à autoridade sanitária.\nII. Esses casos também devem ser obrigatoriamente comunicados a qualquer dos seguintes órgãos: autoridade policial, Ministério Público ou Conselhos Municipal, Estadual ou Nacional da Pessoa Idosa.\nIII. Só os casos confirmados por exame pericial geram o dever de notificar.\nIV. Considera-se violência contra a pessoa idosa qualquer ação ou omissão praticada em local público ou privado que lhe cause morte, dano ou sofrimento físico ou psicológico.\n\nQuais estão corretas?',
    alternativas: ['Apenas I e II.', 'Apenas I e III.', 'Apenas II e IV.', 'Apenas I, II e III.', 'Apenas I, II e IV.'],
    correta: 4,
    comentario:
      'I e II reproduzem o caput do art. 19, e IV, o § 1º. A III está errada: a notificação é exigida já na suspeita, sem necessidade de confirmação pericial. Note que a notificação vai à autoridade sanitária e a comunicação, a qualquer dos órgãos listados.',
    fundamento: 'Lei 10.741/2003, art. 19, caput, I a V, e § 1º',
  },
  {
    id: 'lg-pessoa-idosa-q03',
    temaId: 'lg-pessoa-idosa',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Pessoa idosa chega desacompanhada e inconsciente ao hospital, sem curador e sem familiar conhecido, e precisa decidir-se sobre o tratamento. Segundo o art. 17 do Estatuto da Pessoa Idosa, a opção pelo tratamento será feita:',
    alternativas: [
      'pelo diretor clínico, após autorização do juiz.',
      'pelo próprio médico, que deverá comunicar o fato ao Ministério Público.',
      'pelo Conselho Municipal da Pessoa Idosa, no prazo de 24 horas.',
      'pela assistente social do hospital, após localizar parentes.',
      'pelo Ministério Público, a quem o médico deve pedir autorização antes de tratar.',
    ],
    correta: 1,
    comentario:
      'O art. 17, parágrafo único, IV, prevê que o próprio médico fará a opção quando não houver curador ou familiar conhecido, devendo comunicar o fato ao Ministério Público. A comunicação é posterior, e não autorização prévia. Antes dessa hipótese, a ordem é: curador (se interditada), familiares e, em iminente risco de vida sem tempo de consulta, o médico.',
    fundamento: 'Lei 10.741/2003, art. 17, parágrafo único, I a IV',
  },
  {
    id: 'lg-pessoa-idosa-q04',
    temaId: 'lg-pessoa-idosa',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Sobre o direito a acompanhante da pessoa idosa internada ou em observação, assinale a alternativa correta.',
    alternativas: [
      'O direito só existe para maiores de 80 anos.',
      'O acompanhante pode permanecer apenas no horário de visitas, por decisão da administração do hospital.',
      'O direito vale somente em hospitais públicos, não alcançando a rede privada.',
      'Cabe ao profissional de saúde responsável pelo tratamento conceder autorização para o acompanhamento ou, no caso de impossibilidade, justificá-la por escrito.',
      'A recusa do acompanhante pode ser feita verbalmente pela enfermagem, sem registro.',
    ],
    correta: 3,
    comentario:
      'O art. 16 assegura à pessoa idosa internada ou em observação o direito a acompanhante, com condições para permanência em tempo integral, segundo o critério médico. O parágrafo único atribui ao profissional responsável pelo tratamento autorizar o acompanhamento ou justificar por escrito a impossibilidade. A regra não depende da idade de 80 anos nem distingue rede pública e privada.',
    fundamento: 'Lei 10.741/2003, art. 16 e parágrafo único',
  },
  {
    id: 'lg-pessoa-idosa-q05',
    temaId: 'lg-pessoa-idosa',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 3,
    enunciado: 'De acordo com o Estatuto da Pessoa Idosa, é correto afirmar:',
    alternativas: [
      'O benefício mensal de um salário mínimo da Loas é assegurado às pessoas idosas a partir de 60 anos.',
      'A gratuidade no transporte coletivo público urbano é obrigatória, em todo o país, a partir dos 60 anos.',
      'Em todo atendimento de saúde, os maiores de 80 anos terão preferência especial sobre as demais pessoas idosas, exceto em caso de emergência.',
      'A preferência especial dos maiores de 80 anos prevalece inclusive sobre as emergências de pacientes mais jovens.',
      'A prioridade na tramitação dos processos judiciais começa aos 65 anos.',
    ],
    correta: 2,
    comentario:
      'O art. 15, § 7º, dá preferência especial aos maiores de 80 anos em todo atendimento de saúde, exceto em caso de emergência. O BPC começa aos 65 anos (art. 34); a gratuidade obrigatória no transporte, aos 65, ficando a faixa de 60 a 65 a critério da lei local (art. 39, § 3º); a prioridade processual, aos 60 (art. 71).',
    fundamento: 'Lei 10.741/2003, arts. 15, § 7º; 34; 39; 71',
  },
  {
    id: 'lg-pessoa-idosa-q06',
    temaId: 'lg-pessoa-idosa',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Aos crimes previstos no Estatuto da Pessoa Idosa e aos crimes praticados com violência contra a pessoa idosa, independentemente da pena prevista, não se aplica a Lei 9.099/1995.',
    gabaritoCE: true,
    comentario:
      'Certo. É o parágrafo único do art. 94, incluído pela Lei 15.163/2025. Antes, o art. 94 mandava aplicar o procedimento da Lei 9.099 aos crimes do Estatuto com pena máxima de até 4 anos; essa regra não vale mais.',
    fundamento: 'Lei 10.741/2003, art. 94, parágrafo único',
  },
  {
    id: 'lg-pessoa-idosa-q07',
    temaId: 'lg-pessoa-idosa',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'Os crimes definidos no Estatuto da Pessoa Idosa são de ação penal pública condicionada à representação da vítima.',
    gabaritoCE: false,
    comentario:
      'Errado. Pelo art. 95, os crimes do Estatuto são de ação penal pública incondicionada, e não se aplicam a eles as imunidades dos arts. 181 e 182 do Código Penal (crimes patrimoniais entre parentes).',
    fundamento: 'Lei 10.741/2003, art. 95',
  },
  {
    id: 'lg-pessoa-idosa-q08',
    temaId: 'lg-pessoa-idosa',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado:
      'O profissional de saúde que deixa de comunicar à autoridade competente os casos de crimes contra pessoa idosa de que tiver conhecimento sujeita-se, segundo o Estatuto da Pessoa Idosa, a:',
    alternativas: [
      'crime punido com detenção de 6 meses a 1 ano e multa.',
      'crime punido com reclusão de 2 a 5 anos.',
      'infração administrativa punida com multa de R$ 500,00 a R$ 3.000,00, aplicada em dobro no caso de reincidência.',
      'infração administrativa punida com multa de 3 a 20 salários de referência.',
      'sanção exclusivamente ética, a cargo do conselho profissional.',
    ],
    correta: 2,
    comentario:
      'O art. 57 está entre as infrações administrativas e alcança o profissional de saúde e o responsável por estabelecimento de saúde ou ILPI. Detenção de 6 meses a 1 ano e multa é a pena do art. 97 (recusar ou retardar assistência à saúde); reclusão de 2 a 5 anos, a do art. 99 (exposição a perigo, Lei 15.163/2025). A multa de 3 a 20 salários de referência é a do art. 245 do ECA.',
    fundamento: 'Lei 10.741/2003, arts. 57, 97 e 99; Lei 8.069/1990, art. 245',
  },

  /* ---------- lg-igualdade-racial ---------- */
  {
    id: 'lg-igualdade-racial-q01',
    temaId: 'lg-igualdade-racial',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Para efeito do Estatuto da Igualdade Racial (Lei 12.288/2010), considera-se população negra:',
    alternativas: [
      'o conjunto de pessoas classificadas como pretas pelo agente público, com base em critérios fenotípicos.',
      'o conjunto de pessoas que se autodeclaram pretas e pardas, conforme o quesito cor ou raça usado pelo IBGE, ou que adotam autodefinição análoga.',
      'apenas as pessoas descendentes de comunidades remanescentes de quilombos.',
      'o conjunto de pessoas que comprovem ascendência africana por documento oficial.',
      'as pessoas que se autodeclaram pretas, excluídas as pardas.',
    ],
    correta: 1,
    comentario:
      'O art. 1º, parágrafo único, IV, adota a autodeclaração de pretos e pardos, conforme o quesito cor ou raça do IBGE, ou autodefinição análoga. O critério não é a classificação por terceiros nem a prova documental de ascendência, e os quilombolas são apenas uma parte dessa população.',
    fundamento: 'Lei 12.288/2010, art. 1º, parágrafo único, IV',
  },
  {
    id: 'lg-igualdade-racial-q02',
    temaId: 'lg-igualdade-racial',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado:
      'Analise as assertivas abaixo sobre a Lei 7.716/1989, com as alterações da Lei 14.532/2023:\n\nI. Injuriar alguém, ofendendo-lhe a dignidade ou o decoro, em razão de raça, cor, etnia ou procedência nacional é crime punido com reclusão de 2 a 5 anos e multa.\nII. A injúria que utiliza elementos referentes à religião passou a integrar o mesmo tipo penal da injúria racial.\nIII. A pena da injúria racial é aumentada de metade se o crime for cometido mediante concurso de 2 ou mais pessoas.\nIV. Os crimes da Lei 7.716/1989 têm as penas aumentadas de 1/3 até a metade quando ocorrem em contexto ou com intuito de descontração, diversão ou recreação.\n\nQuais estão corretas?',
    alternativas: ['Apenas I e II.', 'Apenas II e IV.', 'Apenas I e III.', 'Apenas I, II e III.', 'Apenas I, III e IV.'],
    correta: 4,
    comentario:
      'I e III reproduzem o art. 2º-A e seu parágrafo único; IV é o art. 20-A (racismo recreativo). A II está errada: o art. 2º-A fala em raça, cor, etnia ou procedência nacional; a injúria com elementos de religião continua no art. 140, § 3º, do Código Penal, com reclusão de 1 a 3 anos e multa.',
    fundamento: 'Lei 7.716/1989, arts. 2º-A e 20-A; CP, art. 140, § 3º',
  },
  {
    id: 'lg-igualdade-racial-q03',
    temaId: 'lg-igualdade-racial',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Constitui objetivo da Política Nacional de Saúde Integral da População Negra, segundo o Estatuto da Igualdade Racial:',
    alternativas: [
      'a melhoria da qualidade dos sistemas de informação do SUS no que tange à coleta, ao processamento e à análise dos dados desagregados por cor, etnia e gênero.',
      'a criação de serviços de saúde separados e exclusivos para a população negra.',
      'a dispensa do registro do quesito cor nos sistemas de informação, para evitar discriminação.',
      'a substituição das políticas universais de saúde por planos privados subsidiados.',
      'a transferência da gestão da saúde quilombola para as próprias comunidades, sem participação do poder público.',
    ],
    correta: 0,
    comentario:
      'O art. 8º, II, lista entre os objetivos da política a melhoria dos dados do SUS desagregados por cor, etnia e gênero. O art. 6º garante a saúde da população negra por políticas universais, no SUS, e não por serviços segregados. Os quilombolas recebem incentivos específicos do poder público (art. 8º, parágrafo único).',
    fundamento: 'Lei 12.288/2010, arts. 6º e 8º, II',
  },
  {
    id: 'lg-igualdade-racial-q04',
    temaId: 'lg-igualdade-racial',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Nos termos do art. 5º, XLII, da Constituição Federal, a prática do racismo constitui crime:',
    alternativas: [
      'afiançável e imprescritível, sujeito à pena de detenção.',
      'inafiançável e prescritível, sujeito à pena de reclusão.',
      'inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei.',
      'insuscetível de graça ou anistia, mas prescritível.',
      'hediondo, sujeito à pena de prisão perpétua.',
    ],
    correta: 2,
    comentario:
      'O inciso XLII declara o racismo inafiançável e imprescritível, sujeito à pena de reclusão. A fórmula “insuscetível de graça ou anistia” é do inciso XLIII (tortura, tráfico, terrorismo e hediondos). A Constituição veda a prisão perpétua (art. 5º, XLVII).',
    fundamento: 'CF/88, art. 5º, XLII',
  },
  {
    id: 'lg-igualdade-racial-q05',
    temaId: 'lg-igualdade-racial',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Servidor público condenado por crime previsto na Lei 7.716/1989. Quanto à perda do cargo como efeito da condenação, assinale a alternativa correta.',
    alternativas: [
      'É efeito automático da condenação, dispensando menção na sentença.',
      'Não existe na Lei 7.716/1989, dependendo sempre de processo administrativo disciplinar.',
      'Só ocorre se a pena aplicada for superior a 4 anos.',
      'É efeito da condenação que não é automático, devendo ser motivadamente declarado na sentença.',
      'É substituída pela suspensão do servidor por até 3 meses.',
    ],
    correta: 3,
    comentario:
      'O art. 16 prevê a perda do cargo ou função pública para o servidor e a suspensão do estabelecimento particular por até 3 meses. O art. 18 diz que esses efeitos não são automáticos e devem ser motivadamente declarados na sentença. A suspensão de até 3 meses refere-se ao estabelecimento, e não ao servidor.',
    fundamento: 'Lei 7.716/1989, arts. 16 e 18',
  },
  {
    id: 'lg-igualdade-racial-q06',
    temaId: 'lg-igualdade-racial',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Para o Estatuto da Igualdade Racial, ações afirmativas são os programas e medidas especiais adotados exclusivamente pelo Estado para a correção das desigualdades raciais e para a promoção da igualdade de oportunidades.',
    gabaritoCE: false,
    comentario:
      'Errado. O art. 1º, parágrafo único, VI, define ações afirmativas como os programas e medidas especiais adotados pelo Estado e pela iniciativa privada. O que se restringe ao Estado é o conceito de políticas públicas (inciso V).',
    fundamento: 'Lei 12.288/2010, art. 1º, parágrafo único, VI',
  },
  {
    id: 'lg-igualdade-racial-q07',
    temaId: 'lg-igualdade-racial',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'Uma pessoa publica em rede social mensagem que incita o preconceito contra os seguidores de determinada religião, sem ofender pessoa específica. Segundo a Lei 7.716/1989, com a redação da Lei 14.532/2023, a conduta',
    alternativas: [
      'é atípica, pois a Lei 7.716/1989 protege apenas raça e cor.',
      'configura o crime do art. 20, na forma do § 2º, com reclusão de 2 a 5 anos e multa, por ter sido cometida por publicação em rede social.',
      'configura injúria do art. 140, § 3º, do Código Penal, com reclusão de 1 a 3 anos e multa.',
      'configura o crime do art. 20, caput, com reclusão de 1 a 3 anos e multa, pois o meio empregado não altera a pena.',
      'configura injúria racial do art. 2º-A, com a pena aumentada de metade.',
    ],
    correta: 1,
    comentario:
      'Os arts. 1º e 20 da Lei 7.716 incluem a religião. Praticar, induzir ou incitar discriminação ou preconceito tem pena de reclusão de 1 a 3 anos e multa, que passa a 2 a 5 anos se o crime é cometido por meios de comunicação social, redes sociais ou internet (§ 2º). A injúria (CP, art. 140, § 3º, ou Lei 7.716, art. 2º-A) ofende a honra de pessoa determinada; o art. 2º-A nem abrange religião, e o aumento de metade é para o concurso de 2 ou mais pessoas.',
    fundamento: 'Lei 7.716/1989, arts. 1º, 2º-A e 20, caput e § 2º; CP, art. 140, § 3º',
  },
  {
    id: 'lg-igualdade-racial-q08',
    temaId: 'lg-igualdade-racial',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A injúria racial e o crime de praticar, induzir ou incitar a discriminação ou o preconceito, previstos na Lei 7.716/1989, têm as penas aumentadas de 1/3 até a metade quando praticados por funcionário público, no exercício de suas funções ou a pretexto de exercê-las.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 20-B, incluído pela Lei 14.532/2023, prevê esse aumento para os crimes dos arts. 2º-A e 20, usando o conceito de funcionário público do Código Penal.',
    fundamento: 'Lei 7.716/1989, art. 20-B',
  },

  /* ---------- lg-pcd ---------- */
  {
    id: 'lg-pcd-q01',
    temaId: 'lg-pcd',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Segundo o art. 2º da Lei 13.146/2015, considera-se pessoa com deficiência aquela que tem:',
    alternativas: [
      'qualquer limitação física, mesmo transitória, atestada por médico.',
      'doença crônica que exija tratamento contínuo, independentemente de barreiras.',
      'incapacidade civil declarada judicialmente.',
      'perda funcional constatada exclusivamente por perícia médica.',
      'impedimento de longo prazo de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas.',
    ],
    correta: 4,
    comentario:
      'O art. 2º adota o modelo social: impedimento de longo prazo mais interação com barreiras. Limitação transitória não basta; a deficiência não afeta a capacidade civil (art. 6º); e a avaliação, quando necessária, é biopsicossocial e multiprofissional (§ 1º), e não exclusivamente médica.',
    fundamento: 'Lei 13.146/2015, art. 2º',
  },
  {
    id: 'lg-pcd-q02',
    temaId: 'lg-pcd',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'A avaliação da deficiência, quando necessária, será biopsicossocial, realizada por equipe multiprofissional e interdisciplinar. Analise os itens abaixo e indique quais estão entre os elementos que essa avaliação considerará, segundo o art. 2º, § 1º, da Lei 13.146/2015:\n\nI. Os impedimentos nas funções e nas estruturas do corpo.\nII. Os fatores socioambientais, psicológicos e pessoais.\nIII. A limitação no desempenho de atividades.\nIV. A renda familiar per capita.\n\nQuais estão corretos?',
    alternativas: ['Apenas I, II e III.', 'Apenas I e II.', 'Apenas I e IV.', 'Apenas II, III e IV.', 'I, II, III e IV.'],
    correta: 0,
    comentario:
      'O § 1º lista quatro elementos: impedimentos nas funções e estruturas do corpo; fatores socioambientais, psicológicos e pessoais; limitação no desempenho de atividades; e restrição de participação. A renda familiar não integra a avaliação biopsicossocial da deficiência.',
    fundamento: 'Lei 13.146/2015, art. 2º, § 1º, I a IV',
  },
  {
    id: 'lg-pcd-q03',
    temaId: 'lg-pcd',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'De acordo com a Lei Brasileira de Inclusão, a pessoa com deficiência somente será atendida sem seu consentimento prévio, livre e esclarecido:',
    alternativas: [
      'sempre que a família autorizar, independentemente da situação clínica.',
      'em casos de risco de morte e de emergência em saúde, resguardado seu superior interesse e adotadas as salvaguardas legais cabíveis.',
      'quando se tratar de deficiência intelectual de qualquer grau.',
      'em procedimentos eletivos realizados no SUS.',
      'quando o médico julgar o tratamento conveniente, ainda que não haja urgência.',
    ],
    correta: 1,
    comentario:
      'O art. 13 limita o atendimento sem consentimento ao risco de morte e à emergência em saúde. O art. 12 exige consentimento prévio, livre e esclarecido para tratamento, procedimento, hospitalização e pesquisa, e o art. 11 proíbe intervenção, tratamento ou institucionalização forçada. Deficiência intelectual, por si só, não afasta o consentimento.',
    fundamento: 'Lei 13.146/2015, arts. 11, 12 e 13',
  },
  {
    id: 'lg-pcd-q04',
    temaId: 'lg-pcd',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado:
      'Os casos de suspeita ou de confirmação de violência praticada contra a pessoa com deficiência serão objeto de notificação compulsória pelos serviços de saúde públicos e privados:',
    alternativas: [
      'apenas à autoridade sanitária, vedada a comunicação a outros órgãos.',
      'ao Conselho Tutelar, qualquer que seja a idade da vítima.',
      'somente após o consentimento expresso da vítima ou de seu curador.',
      'à autoridade policial e ao Ministério Público, além dos Conselhos dos Direitos da Pessoa com Deficiência.',
      'somente nos casos confirmados por laudo pericial.',
    ],
    correta: 3,
    comentario:
      'O art. 26 manda notificar a autoridade policial e o Ministério Público, além dos Conselhos dos Direitos da Pessoa com Deficiência, já na suspeita. Não confunda com o Estatuto da Pessoa Idosa, em que a notificação vai à autoridade sanitária (art. 19). O Conselho Tutelar atua quando a vítima é criança ou adolescente (ECA, art. 13).',
    fundamento: 'Lei 13.146/2015, art. 26',
  },
  {
    id: 'lg-pcd-q05',
    temaId: 'lg-pcd',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado: 'Conforme a Lei 13.146/2015, a curatela da pessoa com deficiência',
    alternativas: [
      'abrange todos os atos da vida civil, inclusive o direito ao voto e ao casamento.',
      'é medida ordinária e de duração indeterminada.',
      'afeta tão somente os atos relacionados aos direitos de natureza patrimonial e negocial, não alcançando o direito ao próprio corpo, à sexualidade e à saúde.',
      'permite ao curador autorizar a esterilização do curatelado sem sua participação.',
      'é exigida para a emissão de documentos oficiais.',
    ],
    correta: 2,
    comentario:
      'O art. 85 restringe a curatela aos atos patrimoniais e negociais, e o § 1º exclui o direito ao próprio corpo, à sexualidade, ao matrimônio, à privacidade, à educação, à saúde, ao trabalho e ao voto. A curatela é medida extraordinária e dura o menor tempo possível (art. 84, § 3º); a esterilização compulsória é vedada (art. 6º, IV); e não se exige curatela para emitir documentos (art. 86).',
    fundamento: 'Lei 13.146/2015, arts. 6º, IV; 84, § 3º; 85; 86',
  },
  {
    id: 'lg-pcd-q06',
    temaId: 'lg-pcd',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Nos serviços de emergência públicos e privados, a prioridade de atendimento da pessoa com deficiência prevalece sobre os protocolos de atendimento médico.',
    gabaritoCE: false,
    comentario:
      'Errado. O art. 9º, § 2º, diz o contrário: nos serviços de emergência, a prioridade conferida pela LBI é condicionada aos protocolos de atendimento médico. A gravidade clínica define a ordem de atendimento.',
    fundamento: 'Lei 13.146/2015, art. 9º, § 2º',
  },
  {
    id: 'lg-pcd-q07',
    temaId: 'lg-pcd',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A deficiência não afeta a plena capacidade civil da pessoa, que tem assegurado, entre outros, o direito de conservar sua fertilidade, sendo vedada a esterilização compulsória.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 6º, IV, garante à pessoa com deficiência conservar sua fertilidade e veda a esterilização compulsória. O mesmo artigo assegura casar-se, exercer direitos sexuais e reprodutivos e decidir sobre o número de filhos.',
    fundamento: 'Lei 13.146/2015, art. 6º, IV',
  },
  {
    id: 'lg-pcd-q08',
    temaId: 'lg-pcd',
    formato: 'multipla',
    estilo: 'nc-ufpr',
    dificuldade: 3,
    enunciado:
      'Segundo a Lei 13.146/2015, os direitos de atendimento prioritário da pessoa com deficiência estendem-se ao seu acompanhante ou atendente pessoal, EXCETO quanto:',
    alternativas: [
      'à proteção e ao socorro em quaisquer circunstâncias.',
      'ao atendimento em todas as instituições e serviços de atendimento ao público.',
      'ao acesso a informações e à disponibilização de recursos de comunicação acessíveis.',
      'à disponibilização de recursos humanos e tecnológicos que garantam atendimento em igualdade de condições.',
      'ao recebimento de restituição de imposto de renda e à tramitação processual e aos procedimentos judiciais e administrativos.',
    ],
    correta: 4,
    comentario:
      'O art. 9º, § 1º, estende ao acompanhante ou atendente pessoal os direitos de prioridade do artigo, exceto os dos incisos VI (restituição de imposto de renda) e VII (tramitação processual e procedimentos judiciais e administrativos). As demais alternativas reproduzem os incisos I, II, V e III, que se estendem ao acompanhante.',
    fundamento: 'Lei 13.146/2015, art. 9º, I a VII, e § 1º',
  },
];
