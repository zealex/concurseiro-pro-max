import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Princípios fundamentais e direitos individuais (art. 5º)
 * ------------------------------------------------------------------ */

export const QUESTOES_1: QuestaoTreino[] = [
  /* ---------- dc-principios ---------- */
  {
    id: 'dc-principios-q01',
    temaId: 'dc-principios',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Assinalar a alternativa que apresenta um dos fundamentos da República Federativa do Brasil, conforme o art. 1º da Constituição Federal.',
    alternativas: [
      'Erradicar a pobreza e a marginalização.',
      'Prevalência dos direitos humanos.',
      'O pluralismo político.',
      'Garantir o desenvolvimento nacional.',
      'Independência nacional.',
    ],
    correta: 2,
    comentario:
      'O pluralismo político é fundamento (art. 1º, V). Erradicar a pobreza e garantir o desenvolvimento nacional são objetivos fundamentais (art. 3º, III e II), por isso começam com verbo. Prevalência dos direitos humanos e independência nacional são princípios das relações internacionais (art. 4º, II e I).',
    fundamento: 'CF/88, art. 1º, V',
  },
  {
    id: 'dc-principios-q02',
    temaId: 'dc-principios',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo sobre os objetivos fundamentais da República Federativa do Brasil (art. 3º da CF/88):\n\nI. Construir uma sociedade livre, justa e solidária.\nII. Erradicar as desigualdades sociais e regionais.\nIII. Promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.\nIV. Garantir a soberania nacional.\n\nQuais estão corretas?',
    alternativas: ['Apenas I e III.', 'Apenas II e IV.', 'Apenas I, II e III.', 'Apenas I, III e IV.', 'I, II, III e IV.'],
    correta: 0,
    comentario:
      'I e III reproduzem o art. 3º, I e IV. A II está errada: o texto manda erradicar a pobreza e a marginalização e apenas reduzir as desigualdades sociais e regionais (art. 3º, III). A IV também está errada: a soberania é fundamento (art. 1º, I), e o objetivo do inciso II do art. 3º é garantir o desenvolvimento nacional.',
    fundamento: 'CF/88, art. 3º, I a IV',
  },
  {
    id: 'dc-principios-q03',
    temaId: 'dc-principios',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    enunciado: 'Nas suas relações internacionais, a República Federativa do Brasil rege-se, entre outros, pelo princípio da:',
    alternativas: ['cidadania.', 'livre iniciativa.', 'dignidade da pessoa humana.', 'soberania popular.', 'concessão de asilo político.'],
    correta: 4,
    comentario:
      'A concessão de asilo político é o último princípio do art. 4º (inciso X). Cidadania e dignidade da pessoa humana são fundamentos (art. 1º, II e III). A livre iniciativa integra o fundamento do art. 1º, IV. A soberania popular aparece no art. 14, sobre direitos políticos.',
    fundamento: 'CF/88, art. 4º, X',
  },
  {
    id: 'dc-principios-q04',
    temaId: 'dc-principios',
    formato: 'multipla',
    estilo: 'ibam',
    dificuldade: 2,
    enunciado: 'Segundo o parágrafo único do art. 1º da Constituição Federal, todo o poder emana do povo, que o exerce:',
    alternativas: [
      'exclusivamente por meio de representantes eleitos pelo voto direto.',
      'por meio de representantes eleitos ou diretamente, nos termos da Constituição.',
      'diretamente, por meio de plebiscito, sendo a representação política excepcional.',
      'por meio dos Poderes Legislativo e Executivo, apenas.',
      'por meio de representantes eleitos, sendo vedada a participação direta em âmbito municipal.',
    ],
    correta: 1,
    comentario:
      'O texto combina representação e participação direta: “por meio de representantes eleitos ou diretamente, nos termos desta Constituição”. É a democracia semidireta, com plebiscito, referendo e iniciativa popular (art. 14). As alternativas que dizem “exclusivamente”, “apenas” ou “vedada” contrariam o texto. A representação também não é excepcional.',
    fundamento: 'CF/88, art. 1º, parágrafo único',
  },
  {
    id: 'dc-principios-q05',
    temaId: 'dc-principios',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado: 'Sobre os arts. 1º e 2º da Constituição Federal, assinalar a alternativa CORRETA.',
    alternativas: [
      'A República Federativa do Brasil é formada pela união indissolúvel dos Estados, dos Municípios, do Distrito Federal e dos Territórios.',
      'São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo, o Judiciário e o Ministério Público.',
      'A República Federativa do Brasil é formada pela união dos Estados, admitido o direito de secessão mediante plebiscito.',
      'A República Federativa do Brasil constitui-se em Estado Democrático de Direito.',
      'Os valores sociais do trabalho são fundamento da República, mas a livre iniciativa não é mencionada no art. 1º.',
    ],
    correta: 3,
    comentario:
      'O art. 1º, caput, afirma que a República constitui-se em Estado Democrático de Direito. Os Territórios não compõem a união do art. 1º (integram a União, art. 18, § 2º). O Ministério Público não é Poder (art. 2º). A união é indissolúvel, por isso não há secessão. O inciso IV fala em “valores sociais do trabalho e da livre iniciativa”.',
    fundamento: 'CF/88, arts. 1º e 2º',
  },
  {
    id: 'dc-principios-q06',
    temaId: 'dc-principios',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado:
      'Assinale a alternativa que associa CORRETAMENTE o enunciado à sua natureza na Constituição Federal: fundamento (art. 1º), objetivo fundamental (art. 3º) ou princípio das relações internacionais (art. 4º).',
    alternativas: [
      'Dignidade da pessoa humana – princípio das relações internacionais.',
      'Garantir o desenvolvimento nacional – objetivo fundamental.',
      'Repúdio ao terrorismo e ao racismo – fundamento.',
      'Soberania – objetivo fundamental.',
      'Pluralismo político – princípio das relações internacionais.',
    ],
    correta: 1,
    comentario:
      'Garantir o desenvolvimento nacional é objetivo fundamental (art. 3º, II). A dignidade da pessoa humana, a soberania e o pluralismo político são fundamentos (art. 1º, III, I e V). O repúdio ao terrorismo e ao racismo é princípio das relações internacionais (art. 4º, VIII). Dica: objetivos começam com verbo.',
    fundamento: 'CF/88, arts. 1º, 3º e 4º',
  },
  {
    id: 'dc-principios-q07',
    temaId: 'dc-principios',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 1,
    enunciado: 'De acordo com o parágrafo único do art. 4º da Constituição Federal, a República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos:',
    alternativas: [
      'do Mercosul, visando à formação de um mercado comum.',
      'das Américas, visando à formação de uma zona de livre comércio.',
      'de língua portuguesa, visando à formação de uma comunidade lusófona.',
      'do Hemisfério Sul, visando à cooperação econômica.',
      'da América Latina, visando à formação de uma comunidade latino-americana de nações.',
    ],
    correta: 4,
    comentario:
      'O texto fala dos povos da América Latina e da formação de uma comunidade latino-americana de nações. O Mercosul não é citado na Constituição; as demais alternativas trocam a região ou a finalidade.',
    fundamento: 'CF/88, art. 4º, parágrafo único',
  },
  {
    id: 'dc-principios-q08',
    temaId: 'dc-principios',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'A forma federativa de Estado, adotada pela Constituição Federal de 1988, não pode ser objeto de proposta de emenda constitucional tendente a aboli-la.',
    gabaritoCE: true,
    comentario:
      'Certo. A forma federativa é cláusula pétrea: não será objeto de deliberação a proposta de emenda tendente a abolir a forma federativa de Estado (art. 60, § 4º, I). Isso reforça a “união indissolúvel” do art. 1º.',
    fundamento: 'CF/88, art. 60, § 4º, I',
  },
  {
    id: 'dc-principios-q09',
    temaId: 'dc-principios',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'Entre os objetivos fundamentais da República Federativa do Brasil, inclui-se a prevalência dos direitos humanos.',
    gabaritoCE: false,
    comentario:
      'Errado. A prevalência dos direitos humanos é princípio das relações internacionais (art. 4º, II). Os objetivos fundamentais estão no art. 3º e são expressos por verbos: construir, garantir, erradicar e reduzir, promover.',
    fundamento: 'CF/88, art. 4º, II',
  },
  {
    id: 'dc-principios-q10',
    temaId: 'dc-principios',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Embora o art. 1º da Constituição Federal mencione a união indissolúvel dos estados, dos municípios e do Distrito Federal, os territórios federais não são entes federativos autônomos, pois integram a União.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 18 lista como entes autônomos a União, os Estados, o DF e os Municípios. O § 2º do mesmo artigo diz que os Territórios Federais integram a União, e sua criação, transformação em Estado ou reintegração ao Estado de origem é regulada em lei complementar.',
    fundamento: 'CF/88, art. 1º, caput, e art. 18, caput e § 2º',
  },

  /* ---------- dc-direitos-individuais ---------- */
  {
    id: 'dc-direitos-individuais-q01',
    temaId: 'dc-direitos-individuais',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Conforme o art. 5º da Constituição Federal, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:',
    alternativas: [
      'por determinação judicial, a qualquer hora do dia ou da noite.',
      'em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.',
      'por determinação de autoridade policial, durante o dia.',
      'em caso de flagrante delito, somente durante o dia.',
      'por determinação da autoridade sanitária, em qualquer horário, para fins de vigilância epidemiológica.',
    ],
    correta: 1,
    comentario:
      'O inciso XI admite a entrada sem consentimento em flagrante delito, desastre ou para prestar socorro, a qualquer hora, e por determinação judicial só durante o dia. A ordem judicial não autoriza entrada à noite. Ordem policial ou sanitária não substitui a judicial. O flagrante autoriza a entrada também à noite.',
    fundamento: 'CF/88, art. 5º, XI',
  },
  {
    id: 'dc-direitos-individuais-q02',
    temaId: 'dc-direitos-individuais',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Um paciente pretende conhecer as informações relativas à sua pessoa constantes de banco de dados de uma entidade governamental, que se recusou a fornecê-las. O remédio constitucional adequado é o:',
    alternativas: ['mandado de segurança.', 'habeas corpus.', 'mandado de injunção.', 'ação popular.', 'habeas data.'],
    correta: 4,
    comentario:
      'O habeas data serve para assegurar o conhecimento de informações relativas à pessoa do impetrante em registros ou bancos de dados de entidades governamentais ou de caráter público (art. 5º, LXXII, a). O MS é residual: só cabe para direito não amparado por HC ou HD. O HC protege a locomoção. O MI supre falta de norma regulamentadora. A ação popular anula ato lesivo ao patrimônio público.',
    fundamento: 'CF/88, art. 5º, LXXII, a',
  },
  {
    id: 'dc-direitos-individuais-q03',
    temaId: 'dc-direitos-individuais',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Nos termos do art. 5º, LXX, da Constituição Federal, o mandado de segurança coletivo pode ser impetrado por:',
    alternativas: [
      'partido político com representação no Congresso Nacional.',
      'qualquer cidadão, em defesa do patrimônio público.',
      'associação legalmente constituída e em funcionamento há pelo menos seis meses.',
      'Ministério Público, exclusivamente.',
      'organização sindical, desde que em funcionamento há pelo menos dois anos.',
    ],
    correta: 0,
    comentario:
      'O inciso LXX legitima o partido político com representação no Congresso Nacional e a organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano. Seis meses e dois anos não estão no texto. O cidadão propõe ação popular, não MS coletivo, e o MP não é legitimado exclusivo.',
    fundamento: 'CF/88, art. 5º, LXX',
  },
  {
    id: 'dc-direitos-individuais-q04',
    temaId: 'dc-direitos-individuais',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'De acordo com o art. 5º da Constituição Federal, constitui crime inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei:',
    alternativas: ['a tortura.', 'o tráfico ilícito de entorpecentes.', 'a prática do racismo.', 'o terrorismo.', 'os crimes definidos como hediondos.'],
    correta: 2,
    comentario:
      'O racismo é inafiançável e imprescritível, sujeito a reclusão (art. 5º, XLII). Tortura, tráfico, terrorismo e hediondos são inafiançáveis e insuscetíveis de graça ou anistia (XLIII), mas a Constituição não os declara imprescritíveis. O outro crime imprescritível é a ação de grupos armados contra a ordem constitucional (XLIV).',
    fundamento: 'CF/88, art. 5º, XLII e XLIII',
  },
  {
    id: 'dc-direitos-individuais-q05',
    temaId: 'dc-direitos-individuais',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 3,
    enunciado:
      'Analise as afirmativas a seguir, com base no art. 5º da Constituição Federal:\n\nI. É livre a manifestação do pensamento, sendo vedado o anonimato.\nII. Todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, mediante prévia autorização da autoridade competente.\nIII. As associações só poderão ser compulsoriamente dissolvidas por decisão judicial transitada em julgado.\nIV. Nenhum brasileiro será extraditado, salvo o naturalizado, em caso de crime comum praticado antes da naturalização ou de comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins, na forma da lei.\n\nEstão corretas:',
    alternativas: ['Apenas I e II.', 'Apenas II e IV.', 'Apenas II, III e IV.', 'Apenas I, III e IV.', 'I, II, III e IV.'],
    correta: 3,
    comentario:
      'I reproduz o inciso IV; III, o XIX; IV, o LI. A II está errada: a reunião independe de autorização, exigindo-se apenas prévio aviso à autoridade competente e que não frustre outra reunião convocada antes para o mesmo local (XVI).',
    fundamento: 'CF/88, art. 5º, IV, XVI, XIX e LI',
  },
  {
    id: 'dc-direitos-individuais-q06',
    temaId: 'dc-direitos-individuais',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Nos termos do art. 5º, LXXIII, da Constituição Federal, é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público ou à moralidade administrativa:',
    alternativas: [
      'qualquer pessoa jurídica de direito privado.',
      'apenas o Ministério Público.',
      'apenas partido político com representação no Congresso Nacional.',
      'qualquer estrangeiro residente no País.',
      'qualquer cidadão.',
    ],
    correta: 4,
    comentario:
      'A Constituição diz que qualquer cidadão é parte legítima para a ação popular, ficando isento de custas e de sucumbência, salvo má-fé comprovada (LXXIII). Cidadão é quem está no gozo dos direitos políticos. O texto não restringe a ação ao MP nem a partido político; o partido aparece como legitimado do MS coletivo (LXX). Pessoa jurídica e estrangeiro não são cidadãos.',
    fundamento: 'CF/88, art. 5º, LXXIII',
  },
  {
    id: 'dc-direitos-individuais-q07',
    temaId: 'dc-direitos-individuais',
    formato: 'multipla',
    estilo: 'ibam',
    dificuldade: 1,
    enunciado: 'Segundo a Constituição Federal, são gratuitas as ações de:',
    alternativas: [
      'mandado de segurança e mandado de injunção.',
      'habeas corpus e habeas data.',
      'mandado de segurança e ação popular, em qualquer caso.',
      'habeas corpus e mandado de segurança.',
      'habeas data e mandado de injunção.',
    ],
    correta: 1,
    comentario:
      'O inciso LXXVII declara gratuitas as ações de habeas corpus e habeas data e, na forma da lei, os atos necessários ao exercício da cidadania. O texto não declara gratuitos o MS e o MI. Na ação popular, o autor só fica isento de custas e sucumbência salvo má-fé, o que exclui o “em qualquer caso”.',
    fundamento: 'CF/88, art. 5º, LXXVII',
  },
  {
    id: 'dc-direitos-individuais-q08',
    temaId: 'dc-direitos-individuais',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Segundo o texto constitucional, a prática da tortura, o tráfico ilícito de entorpecentes, o terrorismo e os crimes hediondos são inafiançáveis e insuscetíveis de graça ou anistia, sendo também, por expressa previsão constitucional, imprescritíveis.',
    gabaritoCE: false,
    comentario:
      'Errado. O inciso XLIII só os torna inafiançáveis e insuscetíveis de graça ou anistia. A Constituição reserva a imprescritibilidade ao racismo (XLII) e à ação de grupos armados contra a ordem constitucional e o Estado Democrático (XLIV).',
    fundamento: 'CF/88, art. 5º, XLII, XLIII e XLIV',
  },
  {
    id: 'dc-direitos-individuais-q09',
    temaId: 'dc-direitos-individuais',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Embora o art. 5º, LXVII, da Constituição Federal ainda mencione a prisão civil do depositário infiel, o Supremo Tribunal Federal, por meio de súmula vinculante, considera ilícita essa prisão, qualquer que seja a modalidade do depósito.',
    gabaritoCE: true,
    comentario:
      'Certo. O texto do inciso LXVII prevê a prisão civil do devedor de alimentos e do depositário infiel. A Súmula Vinculante 25 do STF, porém, afirma que “é ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade de depósito”. Na prática, resta só a prisão do devedor de alimentos.',
    fundamento: 'CF/88, art. 5º, LXVII; STF, Súmula Vinculante 25',
  },
  {
    id: 'dc-direitos-individuais-q10',
    temaId: 'dc-direitos-individuais',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros serão equivalentes às emendas constitucionais.',
    gabaritoCE: true,
    comentario:
      'Certo. É a redação do § 3º do art. 5º, incluído pela EC 45/2004. O rito é o mesmo da emenda constitucional (art. 60, § 2º): dois turnos, em cada Casa, por 3/5.',
    fundamento: 'CF/88, art. 5º, § 3º',
  },
];
