import type { QuestaoTreino } from '../../../types';

/* Agentes públicos e responsabilidade civil do Estado */
export const QUESTOES_3: QuestaoTreino[] = [
  /* ---------- da-agentes ---------- */
  {
    id: 'da-agentes-q01',
    temaId: 'da-agentes',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Nos termos da Constituição Federal, o prazo de validade do concurso público será de:',
    alternativas: [
      'um ano, prorrogável uma vez, por igual período.',
      'dois anos, improrrogável.',
      'até dois anos, prorrogável por mais quatro anos.',
      'até quatro anos, prorrogável uma vez.',
      'até dois anos, prorrogável uma vez, por igual período.',
    ],
    correta: 4,
    comentario:
      'O art. 37, III, fixa validade de até dois anos, prorrogável uma vez, por igual período. A prorrogação é única e pelo mesmo prazo escolhido no edital; não existe validade de quatro anos nem prorrogação por prazo diferente.',
    fundamento: 'CF/88, art. 37, III',
  },
  {
    id: 'da-agentes-q02',
    temaId: 'da-agentes',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo, de acordo com a Constituição Federal:\n\nI. As funções de confiança são exercidas exclusivamente por servidores ocupantes de cargo efetivo.\nII. Os cargos em comissão podem destinar-se a atribuições técnicas permanentes, como as de médico assistente de unidade de saúde.\nIII. A investidura em emprego público dispensa concurso, por se tratar de regime celetista.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas I e II.', 'Apenas I e III.', 'Apenas II e III.'],
    correta: 0,
    comentario:
      'Só a I está correta (art. 37, V). A II erra: cargos em comissão e funções de confiança destinam-se apenas a direção, chefia e assessoramento. A III erra: o inciso II exige concurso para cargo “ou emprego”, inclusive em empresas estatais.',
    fundamento: 'CF/88, art. 37, II e V',
  },
  {
    id: 'da-agentes-q03',
    temaId: 'da-agentes',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Um médico ocupante de cargo efetivo em uma prefeitura pretende assumir emprego público de médico em uma empresa pública federal. De acordo com a Constituição Federal, essa acumulação:',
    alternativas: [
      'é vedada, porque a proibição de acumular não admite exceção entre cargo e emprego.',
      'é permitida, havendo compatibilidade de horários, por se tratar de cargos ou empregos privativos de profissionais de saúde com profissão regulamentada.',
      'é permitida independentemente de compatibilidade de horários.',
      'só é permitida se os dois vínculos forem na mesma esfera da Federação.',
      'é permitida apenas se um dos vínculos for de professor.',
    ],
    correta: 1,
    comentario:
      'O art. 37, XVI, “c”, admite acumular dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas, desde que haja compatibilidade de horários. A vedação alcança empregos em estatais (inciso XVII), assim como a exceção. A CF não exige que os vínculos sejam da mesma esfera.',
    fundamento: 'CF/88, art. 37, XVI, “c”, e XVII',
  },
  {
    id: 'da-agentes-q04',
    temaId: 'da-agentes',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'Conforme a Constituição Federal, são estáveis após ________ de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público. Assinale a alternativa que completa a lacuna.',
    alternativas: ['dois anos', 'dezoito meses', 'três anos', 'cinco anos', 'um ano'],
    correta: 2,
    comentario:
      'O art. 41 da CF, com a redação da EC 19/1998, exige três anos de efetivo exercício, além da avaliação especial de desempenho por comissão instituída para essa finalidade (§ 4º). O prazo de dois anos era o da redação original.',
    fundamento: 'CF/88, art. 41, caput e § 4º',
  },
  {
    id: 'da-agentes-q05',
    temaId: 'da-agentes',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'Durante as eleições, uma médica é convocada pela Justiça Eleitoral para atuar como mesária. Na classificação doutrinária dos agentes públicos, nessa atuação ela é:',
    alternativas: [
      'agente política.',
      'servidora estatutária.',
      'empregada pública.',
      'particular em colaboração com o Poder Público.',
      'agente de fato.',
    ],
    correta: 3,
    comentario:
      'Mesários, jurados e conscritos exercem função pública por requisição, sem perder a condição de particulares: são particulares em colaboração. Ainda assim são agentes públicos em sentido amplo, pois exercem função pública, mesmo que transitoriamente e sem remuneração (conceito do art. 2º da Lei 8.429/1992). Não ocupam cargo nem emprego; agente de fato é quem atua com investidura irregular.',
    fundamento: 'Lei 8.429/1992, art. 2º (conceito amplo de agente público)',
  },
  {
    id: 'da-agentes-q06',
    temaId: 'da-agentes',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 3,
    enunciado: 'Sobre a estabilidade do servidor público prevista na Constituição Federal, assinale a alternativa correta.',
    alternativas: [
      'O servidor estável só perde o cargo em virtude de sentença judicial transitada em julgado.',
      'Invalidada por sentença judicial a demissão do servidor estável, ele será indenizado, mas não reintegrado.',
      'Extinto o cargo ou declarada a sua desnecessidade, o servidor estável será imediatamente aproveitado em outro cargo, com remuneração integral.',
      'A avaliação especial de desempenho é facultativa para a aquisição da estabilidade.',
      'O servidor estável pode perder o cargo mediante procedimento de avaliação periódica de desempenho, na forma de lei complementar, assegurada ampla defesa.',
    ],
    correta: 4,
    comentario:
      'A E reproduz o art. 41, § 1º, III. A A erra porque há outras hipóteses de perda: processo administrativo e avaliação periódica (§ 1º), além do excesso de despesa com pessoal (art. 169, § 4º). Anulada a demissão, o servidor é reintegrado (§ 2º). Extinto o cargo, fica em disponibilidade, com remuneração proporcional ao tempo de serviço, até ser aproveitado (§ 3º). A avaliação especial é obrigatória (§ 4º).',
    fundamento: 'CF/88, art. 41, §§ 1º a 4º; art. 169, § 4º',
  },
  {
    id: 'da-agentes-q07',
    temaId: 'da-agentes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A investidura em cargo ou emprego público depende de aprovação prévia em concurso público de provas ou de provas e títulos, ressalvadas as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração.',
    gabaritoCE: true,
    comentario:
      'Certo. É o art. 37, II, da CF. A exigência de concurso abrange cargo e emprego; a exceção é o cargo em comissão de livre nomeação e exoneração.',
    fundamento: 'CF/88, art. 37, II',
  },
  {
    id: 'da-agentes-q08',
    temaId: 'da-agentes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'Segundo a Constituição Federal, os cargos em comissão devem ser preenchidos exclusivamente por servidores ocupantes de cargo efetivo.',
    gabaritoCE: false,
    comentario:
      'Errado. Exclusividade para servidores efetivos é regra das funções de confiança. Os cargos em comissão serão preenchidos por servidores de carreira apenas nos casos, condições e percentuais mínimos previstos em lei; o restante pode ser ocupado por pessoas sem vínculo efetivo.',
    fundamento: 'CF/88, art. 37, V',
  },
  {
    id: 'da-agentes-q09',
    temaId: 'da-agentes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Com a redação dada pela Emenda Constitucional 138/2025, a Constituição Federal passou a admitir, havendo compatibilidade de horários, a acumulação remunerada de um cargo de professor com outro de qualquer natureza.',
    gabaritoCE: true,
    comentario:
      'Certo. A alínea “b” do art. 37, XVI, que antes falava em cargo de professor com outro “técnico ou científico” (redação da EC 19/1998), passou a dizer “com outro de qualquer natureza” (EC 138, de 19/12/2025). Continuam exigidos a compatibilidade de horários e o respeito ao teto do inciso XI.',
    fundamento: 'CF/88, art. 37, XVI, “b” (redação da EC 138/2025)',
  },

  /* ---------- da-responsabilidade ---------- */
  {
    id: 'da-responsabilidade-q01',
    temaId: 'da-responsabilidade',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Segundo o art. 37, § 6º, da Constituição Federal, respondem pelos danos que seus agentes, nessa qualidade, causarem a terceiros:',
    alternativas: [
      'as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos.',
      'apenas as pessoas jurídicas de direito público.',
      'todas as empresas estatais, inclusive as que exploram atividade econômica em regime de concorrência.',
      'somente a União, os Estados, o Distrito Federal e os Municípios.',
      'os próprios agentes, de forma solidária e objetiva com o ente público.',
    ],
    correta: 0,
    comentario:
      'O § 6º abrange as pessoas de direito público e as de direito privado prestadoras de serviço público (como concessionárias). Estatais que exploram atividade econômica seguem o regime das empresas privadas (art. 173, § 1º, II). O agente não responde objetivamente perante a vítima: só em regresso, com dolo ou culpa.',
    fundamento: 'CF/88, art. 37, § 6º',
  },
  {
    id: 'da-responsabilidade-q02',
    temaId: 'da-responsabilidade',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo sobre a responsabilidade civil do Estado:\n\nI. A responsabilidade do Estado por atos comissivos de seus agentes é, em regra, objetiva, com base na teoria do risco administrativo.\nII. A culpa exclusiva da vítima não afasta o dever de indenizar, pois a responsabilidade é objetiva.\nIII. O direito de regresso contra o agente depende da comprovação de dolo ou culpa.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas I e III.', 'Apenas II.', 'Apenas II e III.', 'I, II e III.'],
    correta: 1,
    comentario:
      'I e III estão corretas. A II erra: o risco administrativo admite excludentes do nexo causal, como a culpa exclusiva da vítima, o caso fortuito ou força maior e o fato exclusivo de terceiro. Só a teoria do risco integral as rejeita. O regresso exige dolo ou culpa do agente (art. 37, § 6º).',
    fundamento: 'CF/88, art. 37, § 6º',
  },
  {
    id: 'da-responsabilidade-q03',
    temaId: 'da-responsabilidade',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Uma paciente sofre dano em hospital municipal por conduta de médico servidor e pretende ajuizar ação indenizatória. Segundo a tese fixada pelo STF no Tema 940 da repercussão geral, a ação deve ser proposta:',
    alternativas: [
      'contra o médico, pessoalmente, à escolha da vítima.',
      'contra o médico e o Município, em litisconsórcio obrigatório.',
      'contra o Município, sendo o médico parte ilegítima, assegurado o direito de regresso nos casos de dolo ou culpa.',
      'contra o Conselho Regional de Medicina, que fiscaliza a profissão.',
      'contra o Município, que não terá direito de regresso contra o médico.',
    ],
    correta: 2,
    comentario:
      'No Tema 940, o STF fixou que a ação por danos causados por agente público deve ser ajuizada contra o Estado (ou a prestadora de serviço público), sendo parte ilegítima o autor do ato, assegurado o regresso em caso de dolo ou culpa. É a “dupla garantia”: protege a vítima e o agente. A vítima não pode escolher demandar o médico.',
    fundamento: 'CF/88, art. 37, § 6º; STF, Tema 940 da repercussão geral (RE 1.027.633)',
  },
  {
    id: 'da-responsabilidade-q04',
    temaId: 'da-responsabilidade',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado:
      'Um ônibus de concessionária do transporte coletivo municipal atropela um ciclista que não era usuário do serviço. Quanto à responsabilidade civil da concessionária, é correto afirmar que ela:',
    alternativas: [
      'é subjetiva, pois o ciclista não era usuário do serviço.',
      'inexiste, pois só o Município responde por danos causados a terceiros.',
      'é objetiva apenas perante usuários; perante não usuários, exige prova de culpa.',
      'é objetiva também em relação a terceiros não usuários do serviço.',
      'é subsidiária e depende da prévia insolvência do Município.',
    ],
    correta: 3,
    comentario:
      'No Tema 130 (RE 591.874), o STF fixou que a responsabilidade das pessoas de direito privado prestadoras de serviço público é objetiva relativamente a terceiros usuários e não usuários do serviço, porque o § 6º do art. 37 não distingue. A concessionária responde diretamente; o Município não é o devedor principal.',
    fundamento: 'CF/88, art. 37, § 6º; STF, Tema 130 da repercussão geral (RE 591.874)',
  },
  {
    id: 'da-responsabilidade-q05',
    temaId: 'da-responsabilidade',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Durante chuva de intensidade comum para a época, cai sobre um veículo regularmente estacionado o galho de uma árvore em via pública, comprometida por cupins e objeto de vários pedidos de poda não atendidos pela prefeitura. Considerando a responsabilidade civil do Estado:',
    alternativas: [
      'o Município não responde, porque a chuva caracteriza força maior.',
      'o Município só responde se o proprietário identificar e provar a culpa de um servidor determinado.',
      'o Município não responde, porque danos decorrentes de omissão nunca geram responsabilidade estatal.',
      'a responsabilidade é integral, e o Município não pode alegar nenhuma excludente em casos semelhantes.',
      'o Município responde, porque houve falha no serviço de conservação da arborização, já alertada pelos pedidos de poda, e a chuva comum não rompe o nexo causal.',
    ],
    correta: 4,
    comentario:
      'A resposta é a mesma nas duas correntes sobre omissão. Pela subjetiva, há falta do serviço (culpa anônima), provada pelos pedidos de poda ignorados, sem precisar identificar um servidor. Pela objetiva, houve omissão de dever específico. Chuva comum para a época não é força maior. Omissão pode gerar responsabilidade, e o risco integral não se aplica: o Município poderia alegar excludentes, mas não houve nenhuma.',
    fundamento: 'CF/88, art. 37, § 6º',
  },
  {
    id: 'da-responsabilidade-q06',
    temaId: 'da-responsabilidade',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Pelo Decreto 20.910/1932, em regra, a pretensão indenizatória contra a Fazenda Pública municipal prescreve em:',
    alternativas: [
      'cinco anos, contados da data do ato ou fato do qual se originar.',
      'três anos, contados da ciência do dano.',
      'dez anos, contados do trânsito em julgado da ação penal.',
      'vinte anos, contados do fato.',
      'prazo nenhum, pois a pretensão contra o Estado é imprescritível.',
    ],
    correta: 0,
    comentario:
      'O art. 1º do Decreto 20.910/1932 diz que todo e qualquer direito ou ação contra a Fazenda federal, estadual ou municipal prescreve em cinco anos contados da data do ato ou fato do qual se originar. O STJ (Tema repetitivo 553) aplica esse prazo às ações indenizatórias contra a Fazenda, afastando os três anos do Código Civil (art. 206, § 3º, V), que é a pegadinha da B. Os demais prazos não constam do decreto.',
    fundamento: 'Decreto 20.910/1932, art. 1º; STJ, Tema repetitivo 553',
  },
  {
    id: 'da-responsabilidade-q07',
    temaId: 'da-responsabilidade',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A responsabilidade civil do Estado prevista no art. 37, § 6º, da Constituição Federal adota a teoria do risco integral, razão pela qual não se admitem excludentes como a culpa exclusiva da vítima.',
    gabaritoCE: false,
    comentario:
      'Errado. A regra é a teoria do risco administrativo: responsabilidade objetiva, mas com possibilidade de excluir ou atenuar o dever de indenizar por culpa exclusiva ou concorrente da vítima, caso fortuito ou força maior e fato de terceiro. Risco integral é exceção apontada pela doutrina.',
    fundamento: 'CF/88, art. 37, § 6º',
  },
  {
    id: 'da-responsabilidade-q08',
    temaId: 'da-responsabilidade',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A pessoa jurídica de direito público que indenizar terceiro por dano causado por seu agente poderá exercer o direito de regresso contra ele, desde que comprove que o agente agiu com dolo ou culpa.',
    gabaritoCE: true,
    comentario:
      'Certo. A responsabilidade do agente é subjetiva: o art. 37, § 6º, assegura o regresso “nos casos de dolo ou culpa”. Na Lei 8.112, tratando-se de dano a terceiros, o servidor responde perante a Fazenda Pública em ação regressiva (art. 122, § 2º).',
    fundamento: 'CF/88, art. 37, § 6º; Lei 8.112/1990, art. 122, § 2º',
  },
  {
    id: 'da-responsabilidade-q09',
    temaId: 'da-responsabilidade',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'De acordo com o entendimento do STF, a vítima de dano causado por servidor público no exercício da função pode optar por ajuizar a ação indenizatória diretamente contra o servidor, sem incluir o ente público.',
    gabaritoCE: false,
    comentario:
      'Errado. No Tema 940, o STF afastou a legitimação concorrente: a ação deve ser proposta contra o Estado ou a prestadora de serviço público, e o autor do ato é parte ilegítima. O servidor responde apenas regressivamente, perante a pessoa jurídica, se agiu com dolo ou culpa.',
    fundamento: 'STF, Tema 940 da repercussão geral (RE 1.027.633); CF/88, art. 37, § 6º',
  },
];
