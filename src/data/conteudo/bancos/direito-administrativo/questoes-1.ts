import type { QuestaoTreino } from '../../../types';

/* Princípios e organização administrativa */
export const QUESTOES_1: QuestaoTreino[] = [
  /* ---------- da-principios ---------- */
  {
    id: 'da-principios-q01',
    temaId: 'da-principios',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Assinalar a alternativa que apresenta apenas princípios expressos no caput do art. 37 da Constituição Federal:',
    alternativas: [
      'Legalidade, impessoalidade, moralidade, publicidade e eficiência.',
      'Legalidade, impessoalidade, moralidade, publicidade e razoabilidade.',
      'Legalidade, supremacia do interesse público, moralidade, publicidade e eficiência.',
      'Legalidade, impessoalidade, motivação, publicidade e eficiência.',
      'Legalidade, impessoalidade, moralidade, proporcionalidade e eficiência.',
    ],
    correta: 0,
    comentario:
      'O caput do art. 37 traz o LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência. Razoabilidade, proporcionalidade e motivação estão expressas na Lei 9.784/1999 (art. 2º), não no art. 37; a supremacia do interesse público é princípio implícito, reconhecido pela doutrina.',
    fundamento: 'CF/88, art. 37, caput',
  },
  {
    id: 'da-principios-q02',
    temaId: 'da-principios',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo sobre os princípios da administração pública:\n\nI. O princípio da eficiência integra o texto original da Constituição Federal de 1988.\nII. Os princípios do art. 37 da Constituição obrigam também as empresas públicas e as sociedades de economia mista.\nIII. Pelo princípio da legalidade, o administrador público pode fazer tudo o que a lei não proíbe.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas III.', 'Apenas I e II.', 'Apenas II e III.'],
    correta: 1,
    comentario:
      'Só a II está correta: o art. 37 vincula a administração direta e indireta, o que inclui as estatais. A I erra porque a eficiência foi incluída pela EC 19/1998. A III descreve a legalidade do particular; o administrador só pode fazer o que a lei autoriza.',
    fundamento: 'CF/88, art. 37, caput (redação da EC 19/1998)',
  },
  {
    id: 'da-principios-q03',
    temaId: 'da-principios',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'O § 1º do art. 37 da Constituição Federal proíbe que a publicidade de atos, programas, obras, serviços e campanhas dos órgãos públicos contenha nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores. Essa regra é expressão direta do princípio da:',
    alternativas: ['legalidade.', 'eficiência.', 'impessoalidade.', 'continuidade do serviço público.', 'autotutela.'],
    correta: 2,
    comentario:
      'A vedação à promoção pessoal concretiza a impessoalidade: o ato é do órgão, não do agente, e a publicidade oficial deve ter caráter educativo, informativo ou de orientação social. Legalidade e eficiência têm outro núcleo; continuidade e autotutela tratam, respectivamente, da não interrupção do serviço e do poder de rever os próprios atos.',
    fundamento: 'CF/88, art. 37, § 1º',
  },
  {
    id: 'da-principios-q04',
    temaId: 'da-principios',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 1,
    enunciado:
      'A possibilidade de a Administração anular seus próprios atos ilegais e revogar os inconvenientes ou inoportunos, sem precisar recorrer ao Poder Judiciário, decorre do princípio da:',
    alternativas: [
      'indisponibilidade do interesse público.',
      'continuidade do serviço público.',
      'publicidade.',
      'autotutela.',
      'especialidade.',
    ],
    correta: 3,
    comentario:
      'É a autotutela, prevista no art. 53 da Lei 9.784/1999 e na Súmula 473 do STF: a Administração deve anular atos ilegais e pode revogar os inconvenientes ou inoportunos, respeitados os direitos adquiridos. Os demais princípios não tratam da revisão dos próprios atos.',
    fundamento: 'Lei 9.784/1999, art. 53; STF, Súmula 473',
  },
  {
    id: 'da-principios-q05',
    temaId: 'da-principios',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 3,
    enunciado: 'Sobre os princípios da administração pública, assinalar a alternativa INCORRETA:',
    alternativas: [
      'A Lei 9.784/1999 prevê expressamente os princípios da razoabilidade, da proporcionalidade e da segurança jurídica.',
      'A Lei 9.784/1999 veda a aplicação retroativa de nova interpretação da norma administrativa.',
      'A nomeação de parente em linha reta da autoridade nomeante para cargo em comissão viola a Constituição, conforme a Súmula Vinculante 13.',
      'A publicidade dos atos oficiais admite exceções, como as informações cujo sigilo seja imprescindível à segurança da sociedade e do Estado.',
      'A vedação ao nepotismo da Súmula Vinculante 13 alcança parentes até o segundo grau, sem incluir os parentes por afinidade.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a incorreta: a SV 13 alcança cônjuge, companheiro e parentes em linha reta, colateral ou por afinidade até o terceiro grau, inclusive. As demais estão certas: o art. 2º da Lei 9.784 traz razoabilidade, proporcionalidade e segurança jurídica e veda a retroação de nova interpretação (parágrafo único, XIII); a CF ressalva o sigilo (art. 5º, XXXIII).',
    fundamento: 'STF, Súmula Vinculante 13; Lei 9.784/1999, art. 2º; CF/88, art. 5º, XXXIII',
  },
  {
    id: 'da-principios-q06',
    temaId: 'da-principios',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'A Lei 9.784/1999 determina a “adequação entre meios e fins, vedada a imposição de obrigações, restrições e sanções em medida superior àquelas estritamente necessárias ao atendimento do interesse público”. Esse critério concretiza o princípio da:',
    alternativas: ['proporcionalidade.', 'publicidade.', 'impessoalidade.', 'eficiência.', 'segurança jurídica.'],
    correta: 0,
    comentario:
      'Adequação entre meios e fins e vedação ao excesso são o núcleo da proporcionalidade (e da razoabilidade). Publicidade trata da transparência; impessoalidade, da finalidade sem favorecimento; eficiência, do resultado; segurança jurídica, da estabilidade das relações e da vedação de retroagir nova interpretação.',
    fundamento: 'Lei 9.784/1999, art. 2º, parágrafo único, VI',
  },
  {
    id: 'da-principios-q07',
    temaId: 'da-principios',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A administração pública direta e indireta de qualquer dos Poderes da União, dos estados, do Distrito Federal e dos municípios obedece aos princípios da legalidade, da impessoalidade, da moralidade, da publicidade e da eficiência.',
    gabaritoCE: true,
    comentario:
      'Certo. É a transcrição do caput do art. 37 da CF: os cinco princípios valem para a administração direta e indireta, de todos os Poderes e de todos os entes federados.',
    fundamento: 'CF/88, art. 37, caput',
  },
  {
    id: 'da-principios-q08',
    temaId: 'da-principios',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Em razão do princípio da publicidade, todos os atos administrativos devem ser divulgados, sem exceção, sendo vedado à lei estabelecer hipóteses de sigilo.',
    gabaritoCE: false,
    comentario:
      'Errado. A publicidade não é absoluta. A CF ressalva as informações cujo sigilo seja imprescindível à segurança da sociedade e do Estado (art. 5º, XXXIII), e a Lei 9.784 manda divulgar os atos “ressalvadas as hipóteses de sigilo previstas na Constituição”.',
    fundamento: 'CF/88, art. 5º, XXXIII; Lei 9.784/1999, art. 2º, parágrafo único, V',
  },
  {
    id: 'da-principios-q09',
    temaId: 'da-principios',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'De acordo com o enunciado da Súmula Vinculante 13, a nomeação, por secretário municipal, do sobrinho de um servidor do mesmo município investido em cargo de chefia, para exercer cargo em comissão, viola a Constituição Federal, ainda que o secretário não tenha nenhum parentesco com o nomeado.',
    gabaritoCE: true,
    comentario:
      'Certo. O enunciado da SV 13 veda a nomeação de parente até o terceiro grau não só da autoridade nomeante, mas também de servidor da mesma pessoa jurídica investido em cargo de direção, chefia ou assessoramento. Sobrinho é parente colateral de terceiro grau. A conduta dolosa também está tipificada no art. 11, XI, da Lei 8.429/1992.',
    fundamento: 'STF, Súmula Vinculante 13; Lei 8.429/1992, art. 11, XI, com redação da Lei 14.230/2021',
  },

  /* ---------- da-organizacao ---------- */
  {
    id: 'da-organizacao-q01',
    temaId: 'da-organizacao',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'De acordo com a Constituição Federal, somente por lei específica poderá ser ________ autarquia e ________ a instituição de empresa pública, de sociedade de economia mista e de fundação.\n\nAssinale a alternativa que preenche, correta e respectivamente, as lacunas.',
    alternativas: ['autorizada – criada', 'criada – autorizada', 'criada – criada', 'autorizada – autorizada', 'criada – regulamentada'],
    correta: 1,
    comentario:
      'O art. 37, XIX, diz que a lei específica cria a autarquia e autoriza a instituição das demais entidades (empresa pública, sociedade de economia mista e fundação), cabendo à lei complementar definir as áreas de atuação da fundação. Inverter os verbos é a pegadinha clássica.',
    fundamento: 'CF/88, art. 37, XIX',
  },
  {
    id: 'da-organizacao-q02',
    temaId: 'da-organizacao',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Um Município cria, dentro da estrutura da Secretaria de Saúde, um novo departamento de vigilância epidemiológica, sem personalidade jurídica própria, subordinado ao secretário. Assinalar a alternativa que nomeia corretamente essa técnica de organização:',
    alternativas: [
      'Descentralização por outorga.',
      'Descentralização por delegação.',
      'Desconcentração.',
      'Concentração administrativa.',
      'Descentralização territorial.',
    ],
    correta: 2,
    comentario:
      'Distribuir competências dentro da mesma pessoa jurídica, criando órgão sem personalidade e com hierarquia, é desconcentração. Descentralização (por outorga ou delegação) transfere a atividade para outra pessoa. Concentração é o movimento inverso, de extinguir órgãos e reunir competências.',
    fundamento: 'Lei 9.784/1999, art. 1º, § 2º, I e II (órgão × entidade)',
  },
  {
    id: 'da-organizacao-q03',
    temaId: 'da-organizacao',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Assinale a alternativa correta a respeito da sociedade de economia mista.',
    alternativas: [
      'É pessoa jurídica de direito público, criada diretamente por lei.',
      'Pode adotar qualquer das formas societárias admitidas em direito.',
      'Seu capital deve ser integralmente público.',
      'Deve ter a forma de sociedade anônima, com a maioria das ações com direito a voto pertencente ao ente federado ou a entidade da administração indireta.',
      'Seus empregados são estatutários, regidos pelo estatuto dos servidores do ente que a controla.',
    ],
    correta: 3,
    comentario:
      'A Lei 13.303/2016 (art. 4º) define a sociedade de economia mista como pessoa de direito privado, com criação autorizada por lei, sob a forma de sociedade anônima, com a maioria das ações com voto do ente público. Admite capital privado. Qualquer forma societária e capital integralmente público são traços da empresa pública. O pessoal é celetista.',
    fundamento: 'Lei 13.303/2016, art. 4º; CF/88, art. 37, XIX',
  },
  {
    id: 'da-organizacao-q04',
    temaId: 'da-organizacao',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado: 'A Empresa Brasileira de Serviços Hospitalares (EBSERH), que administra hospitais universitários federais, é:',
    alternativas: [
      'autarquia federal vinculada ao Ministério da Saúde, com servidores estatutários.',
      'fundação pública de direito público vinculada ao Ministério da Educação.',
      'sociedade de economia mista com participação de capital privado.',
      'órgão da administração direta do Ministério da Educação, sem personalidade jurídica.',
      'empresa pública unipessoal, de direito privado, com capital integralmente da União, vinculada ao Ministério da Educação.',
    ],
    correta: 4,
    comentario:
      'A Lei 12.550/2011 autorizou a criação da EBSERH como empresa pública unipessoal, com personalidade de direito privado, vinculada ao Ministério da Educação (art. 1º), e capital integralmente da União (art. 2º). Seu pessoal é celetista, admitido por concurso (art. 10). Não é autarquia, fundação, sociedade de economia mista nem órgão.',
    fundamento: 'Lei 12.550/2011, arts. 1º, 2º e 10',
  },
  {
    id: 'da-organizacao-q05',
    temaId: 'da-organizacao',
    formato: 'multipla',
    estilo: 'ibam',
    dificuldade: 3,
    enunciado: 'Sobre os consórcios públicos regidos pela Lei 11.107/2005, é correto afirmar que:',
    alternativas: [
      'o consórcio constituído como associação pública tem personalidade jurídica de direito público e integra a administração indireta de todos os entes consorciados.',
      'o consórcio público é sempre pessoa jurídica de direito privado e não integra a administração pública.',
      'o contrato de consórcio é celebrado com a simples assinatura do protocolo de intenções pelos chefes do Executivo, sem participação do Legislativo.',
      'o consórcio com personalidade de direito privado não precisa observar as normas de licitação.',
      'na área da saúde, os consórcios públicos ficam dispensados de observar as normas do SUS.',
    ],
    correta: 0,
    comentario:
      'Correta a A (art. 6º, I e § 1º). O consórcio pode ser associação pública ou pessoa de direito privado; o contrato depende de ratificação do protocolo de intenções por lei (art. 5º); mesmo o de direito privado segue normas de direito público em licitação, contratos e prestação de contas (art. 6º, § 2º); e, na saúde, deve obedecer às normas do SUS (art. 1º, § 3º).',
    fundamento: 'Lei 11.107/2005, arts. 1º, § 3º, 5º e 6º',
  },
  {
    id: 'da-organizacao-q06',
    temaId: 'da-organizacao',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'A relação entre um Ministério e uma autarquia federal a ele vinculada caracteriza-se por:',
    alternativas: [
      'subordinação hierárquica plena da autarquia ao Ministério.',
      'vinculação, com controle finalístico (supervisão ministerial), sem hierarquia.',
      'ausência de qualquer controle, em razão da autonomia da autarquia.',
      'controle exclusivamente judicial.',
      'subordinação apenas quanto aos atos de mérito da autarquia.',
    ],
    correta: 1,
    comentario:
      'Entidades da administração indireta têm personalidade própria e se vinculam ao Ministério da área (DL 200/1967, art. 4º, parágrafo único). Há controle finalístico (tutela, supervisão), limitado ao que a lei prevê, e não hierarquia. Dizer que não há controle algum também está errado.',
    fundamento: 'Decreto-Lei 200/1967, art. 4º, parágrafo único',
  },
  {
    id: 'da-organizacao-q07',
    temaId: 'da-organizacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'Empresa pública é pessoa jurídica de direito público, criada diretamente por lei, com capital exclusivamente público.',
    gabaritoCE: false,
    comentario:
      'Errado. Empresa pública é pessoa jurídica de direito privado, com criação autorizada por lei (CF, art. 37, XIX; Lei 13.303, art. 3º). O capital é integralmente público, mas a personalidade é de direito privado e a lei apenas autoriza sua instituição.',
    fundamento: 'Lei 13.303/2016, art. 3º; CF/88, art. 37, XIX',
  },
  {
    id: 'da-organizacao-q08',
    temaId: 'da-organizacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'As empresas públicas e as sociedades de economia mista não se submetem às regras de licitação da Lei 14.133/2021, pois seguem o regime da Lei 13.303/2016, ressalvada disposição específica da própria Lei 14.133/2021.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 1º, § 1º, da Lei 14.133/2021 exclui de seu alcance as empresas públicas, as sociedades de economia mista e suas subsidiárias, regidas pela Lei 13.303/2016, ressalvado o disposto no art. 178 (crimes em licitações).',
    fundamento: 'Lei 14.133/2021, art. 1º, § 1º',
  },
  {
    id: 'da-organizacao-q09',
    temaId: 'da-organizacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Na desconcentração administrativa, a atividade é transferida a uma nova pessoa jurídica, criada por lei, que passa a se sujeitar ao controle hierárquico do ente que a criou.',
    gabaritoCE: false,
    comentario:
      'Errado, por dois motivos. Transferir a atividade para nova pessoa jurídica é descentralização, não desconcentração (que cria órgãos dentro da mesma pessoa). E, entre o ente e a entidade descentralizada, há vinculação e controle finalístico, não hierarquia.',
    fundamento: 'Lei 9.784/1999, art. 1º, § 2º; Decreto-Lei 200/1967, art. 4º',
  },
];
