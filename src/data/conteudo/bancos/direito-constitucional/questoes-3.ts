import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Administração pública (arts. 37 a 41); Poderes e controle
 * ------------------------------------------------------------------ */

export const QUESTOES_3: QuestaoTreino[] = [
  /* ---------- dc-administracao-publica ---------- */
  {
    id: 'dc-administracao-publica-q01',
    temaId: 'dc-administracao-publica',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Um médico ocupa cargo efetivo de médico em uma prefeitura, com jornada de 20 horas semanais, e foi aprovado em outro concurso público. Conforme o art. 37, XVI, da Constituição Federal, havendo compatibilidade de horários e observado o teto remuneratório, ele poderá acumular o cargo de médico com:',
    alternativas: [
      'um cargo de médico e outro de professor, simultaneamente, totalizando três cargos.',
      'um cargo de técnico administrativo de nível superior, sem relação com a área da saúde.',
      'outro cargo ou emprego privativo de profissional de saúde, com profissão regulamentada.',
      'qualquer cargo público, desde que a soma das jornadas não ultrapasse 60 horas semanais.',
      'um cargo em comissão, ainda que haja incompatibilidade de horários.',
    ],
    correta: 2,
    comentario:
      'A alínea “c” do inciso XVI permite dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas. As exceções admitem dois vínculos, nunca três. Cargo administrativo só seria acumulável se o outro fosse de professor (alínea b). A Constituição não fixa limite de horas nem libera “qualquer cargo”. A compatibilidade de horários é exigida em todos os casos.',
    fundamento: 'CF/88, art. 37, XVI, c',
  },
  {
    id: 'dc-administracao-publica-q02',
    temaId: 'dc-administracao-publica',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Conforme o art. 37, III, da Constituição Federal, o prazo de validade do concurso público será de:',
    alternativas: [
      'até dois anos, prorrogável uma vez, por igual período.',
      'dois anos, improrrogável.',
      'até quatro anos, prorrogável uma vez, por igual período.',
      'até um ano, prorrogável por mais dois anos.',
      'até dois anos, prorrogável sucessivas vezes, a critério da administração.',
    ],
    correta: 0,
    comentario:
      'O inciso III diz: “até dois anos, prorrogável uma vez, por igual período”. O edital pode fixar prazo menor (“até”), e a prorrogação, se houver, é única e pelo mesmo tempo. As demais alternativas mudam o prazo, a quantidade de prorrogações ou a duração delas.',
    fundamento: 'CF/88, art. 37, III',
  },
  {
    id: 'dc-administracao-publica-q03',
    temaId: 'dc-administracao-publica',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'São estáveis após ______ de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público. Como condição para a aquisição da estabilidade, é obrigatória ______.\n\nAssinale a alternativa que preenche corretamente as lacunas.',
    alternativas: [
      'dois anos – a aprovação em curso de formação',
      'três anos – a avaliação especial de desempenho por comissão instituída para essa finalidade',
      'três anos – a avaliação periódica de desempenho, na forma de lei complementar',
      'cinco anos – a avaliação especial de desempenho por comissão instituída para essa finalidade',
      'três anos – a homologação do estágio pelo Tribunal de Contas',
    ],
    correta: 1,
    comentario:
      'O art. 41, caput, fixa três anos de efetivo exercício, e o § 4º exige a avaliação especial de desempenho por comissão. A avaliação periódica, na forma de lei complementar, é hipótese de perda do cargo do servidor já estável (§ 1º, III). Dois e cinco anos não constam do texto vigente.',
    fundamento: 'CF/88, art. 41, caput e § 4º',
  },
  {
    id: 'dc-administracao-publica-q04',
    temaId: 'dc-administracao-publica',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Servidor público municipal ocupante de cargo efetivo foi eleito Vereador. Havendo compatibilidade de horários, segundo o art. 38 da Constituição Federal, ele:',
    alternativas: [
      'será afastado do cargo, sendo-lhe facultado optar pela sua remuneração.',
      'será exonerado do cargo efetivo na data da posse no mandato.',
      'ficará afastado do cargo, sem remuneração, contando-se o tempo apenas para aposentadoria.',
      'perceberá as vantagens de seu cargo, sem prejuízo da remuneração do cargo eletivo.',
      'deverá optar entre o cargo e o mandato, vedada a acumulação em qualquer hipótese.',
    ],
    correta: 3,
    comentario:
      'O art. 38, III, permite ao Vereador, com compatibilidade de horários, receber as vantagens do cargo e a remuneração do mandato. Sem compatibilidade, aplica-se a regra do Prefeito: afastamento com opção pela remuneração (II). Não há exoneração, e o tempo de afastamento conta para todos os efeitos, exceto promoção por merecimento (IV).',
    fundamento: 'CF/88, art. 38, II, III e IV',
  },
  {
    id: 'dc-administracao-publica-q05',
    temaId: 'dc-administracao-publica',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 3,
    enunciado:
      'Analise as afirmativas a seguir:\n\nI. As funções de confiança são exercidas exclusivamente por servidores ocupantes de cargo efetivo.\nII. Os cargos em comissão destinam-se às atribuições de direção, chefia, assessoramento e execução técnica.\nIII. Segundo súmula vinculante do STF, viola a Constituição a nomeação de parente colateral de terceiro grau da autoridade nomeante para cargo em comissão.\nIV. A remuneração dos servidores públicos somente poderá ser fixada ou alterada por lei específica, assegurada revisão geral anual, sempre na mesma data e sem distinção de índices.\n\nEstão corretas:',
    alternativas: ['Apenas I e II.', 'Apenas I e III.', 'Apenas II e IV.', 'Apenas II, III e IV.', 'Apenas I, III e IV.'],
    correta: 4,
    comentario:
      'I reproduz o art. 37, V, e IV reproduz o inciso X. III está correta: a Súmula Vinculante 13 alcança parentes em linha reta, colateral ou por afinidade até o terceiro grau, inclusive. A II está errada: funções de confiança e cargos em comissão destinam-se apenas a direção, chefia e assessoramento (art. 37, V); “execução técnica” não consta.',
    fundamento: 'CF/88, art. 37, V e X; STF, Súmula Vinculante 13',
  },
  {
    id: 'dc-administracao-publica-q06',
    temaId: 'dc-administracao-publica',
    formato: 'multipla',
    estilo: 'ibam',
    dificuldade: 3,
    enunciado:
      'Segundo o art. 37, § 4º, da Constituição Federal, os atos de improbidade administrativa importarão, na forma e gradação previstas em lei, sem prejuízo da ação penal cabível:',
    alternativas: [
      'a suspensão dos direitos políticos, a perda da função pública, a indisponibilidade dos bens e o ressarcimento ao erário.',
      'a cassação dos direitos políticos, a perda da função pública, a indisponibilidade dos bens e o ressarcimento ao erário.',
      'a suspensão dos direitos políticos, a perda da função pública, o confisco dos bens e a prisão administrativa.',
      'a perda definitiva dos direitos políticos, a demissão a bem do serviço público e a multa civil, exclusivamente.',
      'a suspensão dos direitos políticos e a perda da função pública, vedada a indisponibilidade de bens antes do trânsito em julgado.',
    ],
    correta: 0,
    comentario:
      'O § 4º prevê suspensão dos direitos políticos, perda da função pública, indisponibilidade dos bens e ressarcimento ao erário. A cassação de direitos políticos é vedada (art. 15), e a improbidade gera suspensão, não perda definitiva. Confisco e prisão administrativa não constam do dispositivo, que também não veda a indisponibilidade antes do trânsito em julgado.',
    fundamento: 'CF/88, art. 37, § 4º',
  },
  {
    id: 'dc-administracao-publica-q07',
    temaId: 'dc-administracao-publica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'É permitida a acumulação remunerada de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas, quando houver compatibilidade de horários, observado o teto remuneratório constitucional.',
    gabaritoCE: true,
    comentario:
      'Certo. É a alínea “c” do art. 37, XVI (redação da EC 34/2001), combinada com o caput do inciso, que exige compatibilidade de horários e observância do inciso XI (teto). É a regra que permite ao médico ter dois vínculos públicos.',
    fundamento: 'CF/88, art. 37, XVI, c',
  },
  {
    id: 'dc-administracao-publica-q08',
    temaId: 'dc-administracao-publica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Na redação vigente da Constituição Federal, é admitida a acumulação remunerada de um cargo de professor com outro de qualquer natureza, desde que haja compatibilidade de horários.',
    gabaritoCE: true,
    comentario:
      'Certo. A EC 138/2025 alterou a alínea “b” do art. 37, XVI: antes, a acumulação era de professor com outro cargo “técnico ou científico”; hoje, é com outro “de qualquer natureza”. Continuam valendo a compatibilidade de horários e o teto (inciso XI).',
    fundamento: 'CF/88, art. 37, XVI, b (redação da EC 138/2025)',
  },
  {
    id: 'dc-administracao-publica-q09',
    temaId: 'dc-administracao-publica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável independentemente de dolo ou culpa.',
    gabaritoCE: false,
    comentario:
      'Errado. A responsabilidade da pessoa jurídica perante a vítima é objetiva, mas o regresso contra o agente exige dolo ou culpa: “assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa” (art. 37, § 6º).',
    fundamento: 'CF/88, art. 37, § 6º',
  },
  {
    id: 'dc-administracao-publica-q10',
    temaId: 'dc-administracao-publica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Invalidada por sentença judicial a demissão do servidor estável, ele será reconduzido ao cargo, e o eventual ocupante da vaga, se estável, será reintegrado ao cargo de origem, com direito a indenização.',
    gabaritoCE: false,
    comentario:
      'Errado. O item troca os institutos. O servidor cuja demissão foi invalidada é reintegrado; o ocupante da vaga, se estável, é reconduzido ao cargo de origem, sem direito a indenização, ou aproveitado em outro cargo ou posto em disponibilidade (art. 41, § 2º).',
    fundamento: 'CF/88, art. 41, § 2º',
  },

  /* ---------- dc-poderes-controle ---------- */
  {
    id: 'dc-poderes-controle-q01',
    temaId: 'dc-poderes-controle',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Conforme o art. 46 da Constituição Federal, cada Estado e o Distrito Federal elegerão:',
    alternativas: [
      'dois Senadores, com mandato de oito anos.',
      'três Senadores, com mandato de quatro anos.',
      'três Senadores, com mandato de oito anos.',
      'quatro Senadores, com mandato de quatro anos.',
      'número de Senadores proporcional à população, com mandato de oito anos.',
    ],
    correta: 2,
    comentario:
      'São três Senadores por Estado e pelo DF, com mandato de oito anos (art. 46, § 1º), eleitos pelo princípio majoritário. A representação é renovada a cada quatro anos, alternadamente, por um e dois terços (§ 2º). Proporcionalidade à população é critério da Câmara dos Deputados (art. 45).',
    fundamento: 'CF/88, art. 46, § 1º',
  },
  {
    id: 'dc-poderes-controle-q02',
    temaId: 'dc-poderes-controle',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado: 'A proposta de emenda à Constituição será discutida e votada em cada Casa do Congresso Nacional:',
    alternativas: [
      'em turno único, considerando-se aprovada se obtiver a maioria absoluta dos votos.',
      'em dois turnos, considerando-se aprovada se obtiver, em ambos, três quintos dos votos dos respectivos membros.',
      'em dois turnos, considerando-se aprovada se obtiver, em ambos, dois terços dos votos dos respectivos membros.',
      'em dois turnos, com aprovação por maioria absoluta e posterior sanção presidencial.',
      'em sessão conjunta, em turno único, por três quintos dos votos.',
    ],
    correta: 1,
    comentario:
      'O art. 60, § 2º, exige dois turnos em cada Casa, com três quintos dos votos dos membros em ambos. A emenda é promulgada pelas Mesas da Câmara e do Senado (§ 3º), sem sanção presidencial. Maioria absoluta é o quórum da lei complementar (art. 69). Dois terços é o quórum para admitir acusação contra o Presidente (art. 86).',
    fundamento: 'CF/88, art. 60, §§ 2º e 3º',
  },
  {
    id: 'dc-poderes-controle-q03',
    temaId: 'dc-poderes-controle',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'NÃO pode propor ação direta de inconstitucionalidade perante o Supremo Tribunal Federal, segundo o art. 103 da Constituição Federal:',
    alternativas: [
      'o Governador de Estado.',
      'o Conselho Federal da Ordem dos Advogados do Brasil.',
      'o partido político com representação no Congresso Nacional.',
      'o Prefeito Municipal.',
      'a confederação sindical.',
    ],
    correta: 3,
    comentario:
      'O rol do art. 103 não inclui o Prefeito nem a Câmara Municipal. Governador (V), Conselho Federal da OAB (VII), partido com representação no Congresso (VIII) e confederação sindical ou entidade de classe de âmbito nacional (IX) são legitimados.',
    fundamento: 'CF/88, art. 103',
  },
  {
    id: 'dc-poderes-controle-q04',
    temaId: 'dc-poderes-controle',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Sobre as medidas provisórias, é correto afirmar, nos termos do art. 62 da Constituição Federal:',
    alternativas: [
      'Podem ser editadas sobre direito penal, desde que presentes a relevância e a urgência.',
      'Têm sua votação iniciada no Senado Federal.',
      'Podem ser reeditadas na mesma sessão legislativa em que tiverem sido rejeitadas.',
      'Seu prazo de vigência corre normalmente durante os períodos de recesso do Congresso Nacional.',
      'Perdem eficácia, desde a edição, se não forem convertidas em lei no prazo de sessenta dias, prorrogável uma vez por igual período.',
    ],
    correta: 4,
    comentario:
      'A alternativa E reflete o art. 62, §§ 3º e 7º. Direito penal está entre as matérias vedadas (§ 1º, I, b). A votação começa na Câmara dos Deputados (§ 8º). A reedição na mesma sessão legislativa é vedada (§ 10), e o prazo fica suspenso no recesso (§ 4º).',
    fundamento: 'CF/88, art. 62, §§ 1º, 3º, 4º, 7º, 8º e 10',
  },
  {
    id: 'dc-poderes-controle-q05',
    temaId: 'dc-poderes-controle',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 3,
    enunciado:
      'Admitida a acusação contra o Presidente da República por ______ da Câmara dos Deputados, será ele submetido a julgamento perante o ______, nos crimes de responsabilidade.\n\nAssinale a alternativa que preenche corretamente as lacunas.',
    alternativas: [
      'dois terços – Senado Federal',
      'maioria absoluta – Supremo Tribunal Federal',
      'três quintos – Senado Federal',
      'dois terços – Supremo Tribunal Federal',
      'maioria simples – Congresso Nacional, em sessão conjunta',
    ],
    correta: 0,
    comentario:
      'O art. 86 exige dois terços da Câmara para admitir a acusação. O julgamento cabe ao Senado nos crimes de responsabilidade e ao STF nas infrações penais comuns. A alternativa D troca o tribunal. Nos crimes de responsabilidade, o Presidente fica suspenso após a instauração do processo pelo Senado (§ 1º, II).',
    fundamento: 'CF/88, art. 86, caput e § 1º',
  },
  {
    id: 'dc-poderes-controle-q06',
    temaId: 'dc-poderes-controle',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 3,
    enunciado: 'Sobre o controle de constitucionalidade na Constituição Federal, assinale a alternativa correta.',
    alternativas: [
      'Os tribunais podem declarar a inconstitucionalidade de lei pelo voto da maioria simples de qualquer de seus órgãos fracionários.',
      'A súmula vinculante pode ser aprovada pela maioria absoluta dos Ministros do STF, após uma única decisão sobre a matéria.',
      'Compete ao Presidente da República suspender a execução de lei declarada inconstitucional por decisão definitiva do STF.',
      'As decisões definitivas de mérito do STF nas ações diretas de inconstitucionalidade e nas ações declaratórias de constitucionalidade produzem eficácia contra todos e efeito vinculante em relação aos demais órgãos do Poder Judiciário e à administração pública direta e indireta.',
      'Somente o Procurador-Geral da República pode propor ação direta de inconstitucionalidade.',
    ],
    correta: 3,
    comentario:
      'A alternativa D reproduz o art. 102, § 2º. Os tribunais só declaram a inconstitucionalidade pela maioria absoluta de seus membros ou do órgão especial (art. 97). A súmula vinculante exige dois terços e reiteradas decisões (art. 103-A). Quem suspende a execução da lei é o Senado (art. 52, X). O rol de legitimados do art. 103 tem nove incisos.',
    fundamento: 'CF/88, arts. 52, X, 97, 102, § 2º, 103 e 103-A',
  },
  {
    id: 'dc-poderes-controle-q07',
    temaId: 'dc-poderes-controle',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'O Tribunal de Contas da União auxilia o Congresso Nacional no controle externo e aprecia as contas prestadas anualmente pelo presidente da República mediante parecer prévio, que deverá ser elaborado em sessenta dias a contar de seu recebimento.',
    gabaritoCE: true,
    comentario:
      'Certo. É o art. 71, caput e inciso I. Atenção ao verbo: o TCU aprecia as contas do Presidente por parecer prévio; quem as julga é o Congresso Nacional. Já as contas dos administradores e demais responsáveis por dinheiros públicos, o TCU julga (art. 71, II).',
    fundamento: 'CF/88, art. 71, I',
  },
  {
    id: 'dc-poderes-controle-q08',
    temaId: 'dc-poderes-controle',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O veto presidencial será apreciado em sessão conjunta, dentro de trinta dias a contar de seu recebimento, só podendo ser rejeitado pelo voto da maioria absoluta dos deputados e senadores.',
    gabaritoCE: true,
    comentario:
      'Certo. É a redação do art. 66, § 4º (redação da EC 76/2013). Se o prazo se esgotar sem deliberação, o veto entra na ordem do dia da sessão imediata, sobrestadas as demais proposições (§ 6º).',
    fundamento: 'CF/88, art. 66, §§ 4º e 6º',
  },
  {
    id: 'dc-poderes-controle-q09',
    temaId: 'dc-poderes-controle',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'As comissões parlamentares de inquérito serão criadas mediante requerimento da maioria absoluta dos membros da Casa, para a apuração de fato determinado e por prazo certo, cabendo-lhes promover diretamente a responsabilidade civil e criminal dos infratores.',
    gabaritoCE: false,
    comentario:
      'Errado. O requerimento é de um terço dos membros, e não da maioria absoluta. A CPI também não promove a responsabilização: suas conclusões são encaminhadas, se for o caso, ao Ministério Público, que promove a responsabilidade civil ou criminal dos infratores (art. 58, § 3º).',
    fundamento: 'CF/88, art. 58, § 3º',
  },
  {
    id: 'dc-poderes-controle-q10',
    temaId: 'dc-poderes-controle',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Em caso de impedimento do presidente e do vice-presidente da República, serão sucessivamente chamados ao exercício da Presidência o presidente do Senado Federal, o da Câmara dos Deputados e o do Supremo Tribunal Federal.',
    gabaritoCE: false,
    comentario:
      'Errado. A ordem do art. 80 é: Presidente da Câmara dos Deputados, depois o do Senado Federal e, por fim, o do STF. A banca costuma inverter Câmara e Senado.',
    fundamento: 'CF/88, art. 80',
  },
];
