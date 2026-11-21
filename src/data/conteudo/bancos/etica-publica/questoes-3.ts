import type { QuestaoTreino } from '../../../types';

/* LGPD (Lei 13.709/2018), assédio na administração pública e Lei 13.460/2017 */
export const QUESTOES_3: QuestaoTreino[] = [
  /* ---------- etp-lgpd ---------- */
  {
    id: 'etp-lgpd-q01',
    temaId: 'etp-lgpd',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Conforme a Lei 13.709/2018 (LGPD), o dado referente à saúde, quando vinculado a uma pessoa natural, é classificado como:',
    alternativas: [
      'dado anonimizado.',
      'dado pessoal sensível.',
      'dado público por natureza.',
      'informação classificada no grau reservado.',
      'dado pessoal comum, sem proteção diferenciada.',
    ],
    correta: 1,
    comentario:
      'O art. 5º, II, inclui o dado referente à saúde no rol de dados pessoais sensíveis, ao lado de origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, vida sexual e dado genético ou biométrico. Grau reservado é instituto da LAI, e anonimizado é o dado que não permite identificar o titular.',
    fundamento: 'Lei 13.709/2018, art. 5º, II',
  },
  {
    id: 'etp-lgpd-q02',
    temaId: 'etp-lgpd',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O tratamento de dados pessoais sensíveis pode fundamentar-se no legítimo interesse do controlador, desde que não prevaleçam os direitos e as liberdades fundamentais do titular.',
    gabaritoCE: false,
    comentario:
      'Errado. O legítimo interesse (art. 7º, IX) é base legal só para dados pessoais comuns. O art. 11, que trata dos dados sensíveis, não o prevê, assim como não prevê a proteção do crédito. Para dado sensível, sem consentimento, só valem as hipóteses do art. 11, II, a a g.',
    fundamento: 'Lei 13.709/2018, art. 7º, IX, e art. 11',
  },
  {
    id: 'etp-lgpd-q03',
    temaId: 'etp-lgpd',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'Na UBS de um município gaúcho, a médica registra no prontuário eletrônico o diagnóstico de diabetes de um paciente e prescreve o tratamento. Não foi colhido termo de consentimento para o tratamento de dados. À luz da LGPD, o tratamento desse dado:',
    alternativas: [
      'é ilícito, pois dado de saúde só pode ser tratado com consentimento específico e destacado do titular.',
      'é lícito apenas se o paciente for menor de idade.',
      'é lícito com base no legítimo interesse do município.',
      'é lícito sem consentimento, por ser indispensável à tutela da saúde, em procedimento realizado por profissional de saúde, serviço de saúde ou autoridade sanitária.',
      'é lícito somente após autorização prévia da ANPD.',
    ],
    correta: 3,
    comentario:
      'O art. 11, II, f, autoriza o tratamento de dado sensível sem consentimento quando indispensável à tutela da saúde, exclusivamente em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária. O consentimento é só uma das bases (inciso I); a idade do paciente não interfere nessa hipótese; legítimo interesse não serve para dado sensível; não há autorização prévia da ANPD.',
    fundamento: 'Lei 13.709/2018, art. 11, II, f',
  },
  {
    id: 'etp-lgpd-q04',
    temaId: 'etp-lgpd',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'É vedado às operadoras de planos privados de assistência à saúde o tratamento de dados de saúde para a prática de seleção de riscos na contratação de qualquer modalidade, assim como na contratação e exclusão de beneficiários.',
    gabaritoCE: true,
    comentario:
      'Certo. É a regra do art. 11, § 5º, da LGPD. Ela complementa o § 4º, que veda compartilhar dados de saúde para obter vantagem econômica, salvo nas exceções ligadas à prestação de serviços de saúde.',
    fundamento: 'Lei 13.709/2018, art. 11, § 5º',
  },
  {
    id: 'etp-lgpd-q05',
    temaId: 'etp-lgpd',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Sobre a realização de estudos em saúde pública com base em dados pessoais, analise as assertivas à luz da LGPD:\n\nI. Os órgãos de pesquisa podem ter acesso a bases de dados pessoais, que serão tratados exclusivamente dentro do órgão e estritamente para estudos e pesquisas, em ambiente controlado e seguro.\nII. A divulgação dos resultados ou de qualquer excerto do estudo não poderá revelar dados pessoais.\nIII. O órgão de pesquisa pode transferir os dados a terceiros, desde que sejam parceiros do projeto.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas III.', 'Apenas I e II.', 'I, II e III.'],
    correta: 3,
    comentario:
      'I reproduz o caput do art. 13, que pede ainda anonimização ou pseudonimização sempre que possível. II é o § 1º. III está errada: o § 2º torna o órgão de pesquisa responsável pela segurança e veda, em qualquer circunstância, a transferência dos dados a terceiro.',
    fundamento: 'Lei 13.709/2018, art. 13, caput e §§ 1º e 2º',
  },
  {
    id: 'etp-lgpd-q06',
    temaId: 'etp-lgpd',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 1,
    enunciado: 'Entre os direitos do titular de dados pessoais previstos no art. 18 da LGPD, NÃO se inclui:',
    alternativas: [
      'a confirmação da existência de tratamento.',
      'a correção de dados incompletos, inexatos ou desatualizados.',
      'a portabilidade dos dados a outro fornecedor de serviço ou produto, observada a regulamentação.',
      'a revogação do consentimento.',
      'o recebimento de indenização tarifada, fixada na própria lei, a cada acesso aos seus dados.',
    ],
    correta: 4,
    comentario:
      'Confirmação (I), correção (III), portabilidade (V) e revogação do consentimento (IX) estão no art. 18. A LGPD não cria indenização tarifada por acesso. A reparação está nos arts. 42 a 45: o controlador ou o operador que, em violação à legislação de proteção de dados, causar dano patrimonial ou moral, individual ou coletivo, deve repará-lo, sem valor fixado em lei.',
    fundamento: 'Lei 13.709/2018, art. 18, I, III, V e IX, e art. 42',
  },
  {
    id: 'etp-lgpd-q07',
    temaId: 'etp-lgpd',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Quando o titular requer a confirmação de existência ou o acesso a seus dados pessoais por meio de declaração clara e completa, esta deve ser fornecida no prazo de até 15 dias, contado da data do requerimento.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 19 prevê duas formas: formato simplificado, imediatamente (inciso I), ou declaração clara e completa, com origem dos dados, critérios e finalidade, em até 15 dias do requerimento (inciso II).',
    fundamento: 'Lei 13.709/2018, art. 19, I e II',
  },
  {
    id: 'etp-lgpd-q08',
    temaId: 'etp-lgpd',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado:
      'Um hospital municipal, órgão da administração direta, sofreu vazamento de dados de pacientes por falha de segurança. Concluído o processo administrativo pela ANPD, NÃO poderá ser aplicada ao hospital, por se tratar de órgão público, a sanção de:',
    alternativas: [
      'advertência, com indicação de prazo para adoção de medidas corretivas.',
      'publicização da infração após devidamente apurada e confirmada a sua ocorrência.',
      'multa simples de até 2% do faturamento, limitada a R$ 50 milhões por infração.',
      'bloqueio dos dados pessoais a que se refere a infração até a sua regularização.',
      'eliminação dos dados pessoais a que se refere a infração.',
    ],
    correta: 2,
    comentario:
      'O art. 52, § 3º, permite aplicar a órgãos e entidades públicos apenas os incisos I, IV, V, VI, X, XI e XII. As multas simples e diária (incisos II e III) ficam de fora. Advertência, publicização, bloqueio e eliminação são aplicáveis, sem prejuízo da Lei 8.112, da Lei 8.429 e da LAI.',
    fundamento: 'Lei 13.709/2018, art. 52, II e § 3º',
  },
  {
    id: 'etp-lgpd-q09',
    temaId: 'etp-lgpd',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Com a redação dada pela Lei 15.352/2026, o art. 55-A da LGPD passou a prever a Agência Nacional de Proteção de Dados (ANPD), autarquia de natureza especial vinculada ao Ministério da Justiça e Segurança Pública, dotada de autonomia funcional, técnica, decisória, administrativa e financeira.',
    gabaritoCE: true,
    comentario:
      'Certo. A Lei 15.352/2026, conversão da MP 1.317/2025, deu nova redação ao art. 55-A: fica criada a Agência Nacional de Proteção de Dados, com a mesma sigla, nos termos da Lei 13.848/2019 (lei das agências reguladoras). A Agência sucede a antiga Autoridade Nacional de Proteção de Dados (Lei 15.352/2026, art. 15).',
    fundamento: 'Lei 13.709/2018, art. 55-A, com redação da Lei 15.352/2026; Lei 15.352/2026, art. 15',
  },
  {
    id: 'etp-lgpd-q10',
    temaId: 'etp-lgpd',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado: 'Segundo a LGPD, o dado anonimizado:',
    alternativas: [
      'não é considerado dado pessoal, salvo quando o processo de anonimização for revertido, usando exclusivamente meios próprios, ou quando, com esforços razoáveis, puder ser revertido.',
      'é sempre considerado dado pessoal sensível.',
      'é aquele que só pode ser associado ao titular pelo uso de informação adicional mantida separadamente pelo controlador.',
      'só pode ser tratado com consentimento específico do titular.',
      'deve ser eliminado imediatamente após a coleta.',
    ],
    correta: 0,
    comentario:
      'O art. 12 exclui o dado anonimizado do conceito de dado pessoal, salvo se a anonimização puder ser revertida. A alternativa C descreve a pseudonimização (art. 13, § 4º), em que o vínculo com o titular continua possível pela informação adicional guardada à parte.',
    fundamento: 'Lei 13.709/2018, art. 12 e art. 13, § 4º',
  },
  {
    id: 'etp-lgpd-q11',
    temaId: 'etp-lgpd',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'As empresas públicas e as sociedades de economia mista que atuam em regime de concorrência sujeitam-se, em qualquer caso, ao regime de tratamento de dados aplicável aos órgãos e entidades do poder público, ainda que não estejam operacionalizando políticas públicas.',
    gabaritoCE: false,
    comentario:
      'Errado. Pelo art. 24, a estatal em regime de concorrência tem o mesmo tratamento das pessoas jurídicas de direito privado particulares. Só quando operacionaliza políticas públicas, e no âmbito dessa execução, recebe o tratamento do poder público.',
    fundamento: 'Lei 13.709/2018, art. 24',
  },
  {
    id: 'etp-lgpd-q12',
    temaId: 'etp-lgpd',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Um laboratório privado de análises clínicas pretende ceder, mediante pagamento, a base de resultados de exames de seus clientes a uma empresa que vende suplementos alimentares. À luz da LGPD, é correto afirmar que a cessão:',
    alternativas: [
      'é lícita se fundamentada no legítimo interesse do laboratório.',
      'é lícita, pois resultados de exames laboratoriais não são dados sensíveis.',
      'é vedada, pois é proibida a comunicação ou o uso compartilhado entre controladores de dados sensíveis referentes à saúde com objetivo de obter vantagem econômica, ressalvadas hipóteses ligadas à prestação de serviços de saúde, como a portabilidade pedida pelo titular.',
      'é lícita, desde que o laboratório comunique o fato à ANPD em até 15 dias.',
      'é lícita, pois a LGPD não se aplica a pessoas jurídicas de direito privado da área da saúde.',
    ],
    correta: 2,
    comentario:
      'O art. 11, § 4º, veda o compartilhamento de dados de saúde entre controladores com objetivo de vantagem econômica, salvo na prestação de serviços de saúde, assistência farmacêutica e assistência à saúde, em benefício do titular (portabilidade, transações financeiras e administrativas). Dado de saúde é sensível (art. 5º, II), e a LGPD alcança o setor privado (art. 1º).',
    fundamento: 'Lei 13.709/2018, art. 1º, art. 5º, II, e art. 11, § 4º',
  },

  /* ---------- etp-assedio ---------- */
  {
    id: 'etp-assedio-q01',
    temaId: 'etp-assedio',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'O crime de assédio sexual, previsto no art. 216-A do Código Penal, exige que o agente se prevaleça de sua condição de superior hierárquico ou de ascendência inerentes ao exercício de emprego, cargo ou função.',
    gabaritoCE: true,
    comentario:
      'Certo. O tipo exige constranger alguém com o intuito de obter vantagem ou favorecimento sexual, prevalecendo-se o agente da condição de superior hierárquico ou da ascendência inerentes ao exercício de emprego, cargo ou função. Sem essa relação, a conduta não se enquadra no art. 216-A.',
    fundamento: 'Código Penal, art. 216-A, caput',
  },
  {
    id: 'etp-assedio-q02',
    temaId: 'etp-assedio',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'A pena prevista no Código Penal para o crime de assédio sexual (art. 216-A) é de:',
    alternativas: [
      'reclusão, de 2 a 6 anos.',
      'detenção, de 3 meses a 1 ano.',
      'reclusão, de 1 a 4 anos.',
      'detenção, de 1 a 2 anos, aumentada em até um terço se a vítima for menor de 18 anos.',
      'detenção, de 6 meses a 2 anos, sem causa de aumento.',
    ],
    correta: 3,
    comentario:
      'O caput comina detenção de 1 a 2 anos, e o § 2º (incluído pela Lei 12.015/2009) aumenta a pena em até um terço se a vítima é menor de 18 anos. A pena não é de reclusão, e as demais faixas não correspondem ao tipo.',
    fundamento: 'Código Penal, art. 216-A, caput e § 2º',
  },
  {
    id: 'etp-assedio-q03',
    temaId: 'etp-assedio',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A Lei 14.540/2023, que instituiu o Programa de Prevenção e Enfrentamento ao Assédio Sexual e demais Crimes contra a Dignidade Sexual e à Violência Sexual, aplica-se somente à administração pública federal direta, autárquica e fundacional.',
    gabaritoCE: false,
    comentario:
      'Errado. A Lei 14.540/2023 alcança a administração pública direta e indireta, federal, estadual, distrital e municipal (arts. 1º e 2º), e aplica-se também a instituições privadas que prestam serviço público por delegação, após regulamentação do ente delegante (arts. 2º, § 1º, e 10). Quem se limita à administração federal direta, autárquica e fundacional é o Decreto 12.122/2024.',
    fundamento: 'Lei 14.540/2023, arts. 1º, 2º, caput e § 1º, e 10',
  },
  {
    id: 'etp-assedio-q04',
    temaId: 'etp-assedio',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas sobre a Lei 14.540/2023:\n\nI. Qualquer pessoa que tiver conhecimento da prática de assédio sexual tem o dever legal de denunciá-la e de colaborar com os procedimentos administrativos internos e externos.\nII. A caracterização das violências observará as definições do Código Penal, da Lei Maria da Penha e da Lei 13.431/2017.\nIII. A capacitação dos agentes públicos é facultativa e não tem conteúdo mínimo definido em lei.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas I e II.', 'Apenas I e III.', 'Apenas II e III.', 'I, II e III.'],
    correta: 1,
    comentario:
      'I é o art. 5º, § 1º. II é o art. 3º. III está errada: a capacitação é objetivo do programa (art. 4º, II), e o art. 5º, VII, define conteúdo mínimo, como causas estruturantes, consequências para a saúde das vítimas, direitos das vítimas e canais de denúncia.',
    fundamento: 'Lei 14.540/2023, arts. 3º, 4º, II, e 5º, VII e § 1º',
  },
  {
    id: 'etp-assedio-q05',
    temaId: 'etp-assedio',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Sobre o Programa Federal de Prevenção e Enfrentamento do Assédio e da Discriminação, instituído pelo Decreto 12.122/2024, assinale a alternativa correta.',
    alternativas: [
      'Aplica-se a todos os Municípios que recebam transferências voluntárias da União.',
      'Restringe-se ao assédio sexual, deixando o assédio moral e a discriminação para os estatutos locais.',
      'Tem como diretrizes a universalidade, a transversalidade, a confidencialidade e a resolutividade, e organiza-se nos eixos de prevenção, acolhimento e tratamento de denúncias.',
      'Exclui os trabalhadores terceirizados de qualquer ação de prevenção ou acolhimento, por não serem agentes públicos.',
      'Atribui ao Conselho Federal de Medicina a apuração de denúncias contra médicos servidores.',
    ],
    correta: 2,
    comentario:
      'Os arts. 5º e 7º trazem essas diretrizes e eixos. Erros: o decreto vale para a administração federal direta, autárquica e fundacional (art. 1º); trata de assédio moral, sexual e discriminação (art. 2º); para terceirizados, prevê prevenção, acolhimento e encaminhamento da denúncia à empresa (art. 3º, § 1º); não atribui competência ao CFM.',
    fundamento: 'Decreto 12.122/2024, arts. 1º, 2º, 3º, § 1º, 5º e 7º',
  },
  {
    id: 'etp-assedio-q06',
    temaId: 'etp-assedio',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Chefe de serviço de hospital federal que, prevalecendo-se de sua posição hierárquica, constrange médica subordinada com o intuito de obter favorecimento sexual, prometendo-lhe escalas de plantão mais vantajosas, pode responder pelo crime do art. 216-A do Código Penal, sem prejuízo das apurações disciplinar e ética no âmbito da administração.',
    gabaritoCE: true,
    comentario:
      'Certo. Estão presentes a hierarquia e o intuito de favorecimento sexual (CP, art. 216-A). As esferas são independentes: cabe apuração disciplinar pela Lei 8.112 e ética pelo Decreto 1.171. A Lei 14.540/2023 impõe a quem souber do fato o dever de denunciar (art. 5º, § 1º).',
    fundamento: 'Código Penal, art. 216-A; Lei 14.540/2023, art. 5º, § 1º',
  },

  /* ---------- etp-usuario ---------- */
  {
    id: 'etp-usuario-q01',
    temaId: 'etp-usuario',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado: 'Segundo a Lei 13.460/2017, a ouvidoria encaminhará a decisão administrativa final ao usuário no prazo de:',
    alternativas: [
      '20 dias, prorrogável por mais 10 dias.',
      '10 dias, improrrogável.',
      '30 dias, prorrogável de forma justificada uma única vez, por igual período.',
      '15 dias, prorrogável por igual período, sem limite de prorrogações.',
      '60 dias, improrrogável.',
    ],
    correta: 2,
    comentario:
      'O art. 16 fixa 30 dias, prorrogáveis de forma justificada uma única vez, por igual período. “20 + 10” é o prazo da LAI para responder a pedido de informação (art. 11), uma confusão comum. A lei não prevê prazo improrrogável nem prorrogações ilimitadas.',
    fundamento: 'Lei 13.460/2017, art. 16',
  },
  {
    id: 'etp-usuario-q02',
    temaId: 'etp-usuario',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A Lei 13.460/2017 admite que o órgão exija do usuário a indicação dos motivos determinantes da manifestação apresentada à ouvidoria, como condição para seu recebimento.',
    gabaritoCE: false,
    comentario:
      'Errado. O art. 10, § 2º, veda quaisquer exigências relativas aos motivos determinantes da manifestação, e o art. 11 proíbe a recusa de recebimento, sob pena de responsabilidade do agente.',
    fundamento: 'Lei 13.460/2017, art. 10, § 2º, e art. 11',
  },
  {
    id: 'etp-usuario-q03',
    temaId: 'etp-usuario',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'São princípios a serem observados pelos agentes públicos e prestadores na prestação de serviços públicos, conforme o art. 4º da Lei 13.460/2017, EXCETO:',
    alternativas: ['regularidade.', 'continuidade.', 'cortesia.', 'modicidade das tarifas.', 'atualidade.'],
    correta: 3,
    comentario:
      'O art. 4º lista regularidade, continuidade, efetividade, segurança, atualidade, generalidade, transparência e cortesia. Modicidade das tarifas integra o conceito de serviço adequado da lei de concessões (Lei 8.987/1995, art. 6º, § 1º), mas não está no rol da Lei 13.460. Repare também que a Lei 8.987 fala em eficiência, e a Lei 13.460, em efetividade.',
    fundamento: 'Lei 13.460/2017, art. 4º; Lei 8.987/1995, art. 6º, § 1º',
  },
  {
    id: 'etp-usuario-q04',
    temaId: 'etp-usuario',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Segundo a Lei 13.460/2017, a identificação do requerente de manifestação perante a ouvidoria é informação pessoal protegida com restrição de acesso, nos termos da Lei de Acesso à Informação.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 10, § 7º, protege a identificação do requerente como informação pessoal, com restrição de acesso nos termos da Lei 12.527/2011. A identificação pode ser exigida, mas sem requisitos que inviabilizem a manifestação (§ 1º).',
    fundamento: 'Lei 13.460/2017, art. 10, §§ 1º e 7º',
  },
  {
    id: 'etp-usuario-q05',
    temaId: 'etp-usuario',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'A Carta de Serviços ao Usuário informa os serviços prestados pelo órgão ou entidade, as formas de acesso e os compromissos e padrões de qualidade de atendimento. Segundo a Lei 13.460/2017, essa carta deve ser:',
    alternativas: [
      'publicada uma única vez, quando da criação do serviço.',
      'objeto de atualização periódica e de permanente divulgação mediante publicação em sítio eletrônico do órgão ou entidade na internet.',
      'mantida em sigilo, à disposição apenas dos servidores do órgão.',
      'aprovada previamente pelo Tribunal de Contas competente.',
      'substituída pelo relatório anual de gestão da ouvidoria.',
    ],
    correta: 1,
    comentario:
      'O art. 7º, § 4º, exige atualização periódica e divulgação permanente no sítio eletrônico do órgão. A carta é instrumento de transparência para o usuário, e o relatório de gestão da ouvidoria (art. 15) é outro documento.',
    fundamento: 'Lei 13.460/2017, art. 7º, caput e § 4º',
  },
  {
    id: 'etp-usuario-q06',
    temaId: 'etp-usuario',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 3,
    enunciado: 'Sobre os conselhos de usuários previstos na Lei 13.460/2017, assinale a alternativa correta.',
    alternativas: [
      'São órgãos deliberativos, com poder de anular atos do prestador do serviço.',
      'A participação do usuário no conselho é remunerada por jetons.',
      'Seus representantes são indicados livremente pelo dirigente máximo do órgão, dispensado processo aberto ao público.',
      'Não podem ser consultados sobre a indicação do ouvidor.',
      'São órgãos consultivos, e a participação do usuário é considerada serviço relevante e sem remuneração.',
    ],
    correta: 4,
    comentario:
      'O art. 18 define os conselhos como órgãos consultivos, e o art. 21 considera a participação serviço relevante e sem remuneração. Erros: a escolha dos representantes se faz em processo aberto ao público (art. 19, parágrafo único), e o conselho pode ser consultado sobre a indicação do ouvidor (art. 20).',
    fundamento: 'Lei 13.460/2017, arts. 18 a 21',
  },
  {
    id: 'etp-usuario-q07',
    temaId: 'etp-usuario',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'A avaliação continuada dos serviços públicos prevista na Lei 13.460/2017 deve ser feita por pesquisa de satisfação realizada, no mínimo, a cada um ano, ou por qualquer outro meio que garanta significância estatística aos resultados, que serão integralmente publicados na internet.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 23, § 1º, prevê a pesquisa de satisfação no mínimo anual (ou outro meio com significância estatística), e o § 2º manda publicar os resultados integralmente no sítio, com ranking das entidades com maior incidência de reclamações.',
    fundamento: 'Lei 13.460/2017, art. 23, §§ 1º e 2º',
  },
];
