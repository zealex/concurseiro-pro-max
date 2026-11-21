import type { QuestaoTreino } from '../../../types';

/* Conflito de interesses (Lei 12.813/2013) e LAI (Lei 12.527/2011 e Dec. 7.724/2012) */
export const QUESTOES_2: QuestaoTreino[] = [
  /* ---------- etp-conflito ---------- */
  {
    id: 'etp-conflito-q01',
    temaId: 'etp-conflito',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Nos termos da Lei 12.813/2013, a ocorrência de conflito de interesses independe da existência de lesão ao patrimônio público, bem como do recebimento de qualquer vantagem ou ganho pelo agente público ou por terceiro.',
    gabaritoCE: true,
    comentario:
      'Certo. É a literalidade do art. 4º, § 2º. A lei é preventiva: basta o confronto entre interesse público e privado capaz de comprometer o interesse coletivo ou influenciar indevidamente a função (art. 3º, I).',
    fundamento: 'Lei 12.813/2013, art. 4º, § 2º',
  },
  {
    id: 'etp-conflito-q02',
    temaId: 'etp-conflito',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'Médico que ocupava o cargo de diretor de autarquia federal foi exonerado. Segundo a Lei 12.813/2013, salvo autorização da CEP, ele não poderá, no período de ________ contado da exoneração, aceitar cargo de administrador ou conselheiro em pessoa jurídica que desempenhe atividade relacionada à área de competência do cargo que ocupava. Assinale a alternativa que preenche a lacuna.',
    alternativas: ['30 dias', '3 meses', '6 meses', '1 ano', '2 anos'],
    correta: 2,
    comentario:
      'Diretor de autarquia está no art. 2º, III, e se sujeita ao impedimento posterior do art. 6º, II, b: seis meses contados da dispensa, exoneração, destituição, demissão ou aposentadoria, salvo autorização da CEP ou da CGU, conforme o caso. Os outros prazos não constam da lei.',
    fundamento: 'Lei 12.813/2013, art. 2º, III, e art. 6º, II, b',
  },
  {
    id: 'etp-conflito-q03',
    temaId: 'etp-conflito',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Após o exercício de cargo no Poder Executivo federal, divulgar ou fazer uso de informação privilegiada obtida em razão das atividades exercidas configura conflito de interesses apenas nos seis meses seguintes ao desligamento.',
    gabaritoCE: false,
    comentario:
      'Errado. O art. 6º, I, veda divulgar ou usar informação privilegiada a qualquer tempo. O prazo de seis meses vale para as condutas do inciso II (prestar serviço, aceitar cargo em empresa da área, celebrar contratos ou intervir em favor de interesse privado).',
    fundamento: 'Lei 12.813/2013, art. 6º, I e II',
  },
  {
    id: 'etp-conflito-q04',
    temaId: 'etp-conflito',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Carlos é perito médico federal, servidor efetivo, sem cargo em comissão. Ele recebe convite para prestar, nas horas vagas, consultoria remunerada a um escritório de advocacia que representa segurados em pedidos de benefício por incapacidade, emitindo pareceres sobre a incapacidade dos clientes. Alguns desses clientes serão submetidos a perícias feitas pelo próprio Carlos. À luz da Lei 12.813/2013, é correto afirmar que:',
    alternativas: [
      'a situação configura conflito de interesses, pois Carlos prestaria serviço a quem tem interesse em decisão sua, e as hipóteses de conflito durante o exercício estendem-se a todos os agentes públicos do Executivo federal; na dúvida, a consulta deve ser feita à CGU.',
      'não há conflito de interesses, pois a Lei 12.813/2013 só se aplica a ministros e a ocupantes de cargos de direção.',
      'só haveria conflito se Carlos recebesse a remuneração durante o horário de expediente.',
      'só haveria conflito se ficasse comprovado prejuízo ao patrimônio público.',
      'a avaliação do caso compete exclusivamente à Comissão de Ética Pública, por envolver servidor de carreira.',
    ],
    correta: 0,
    comentario:
      'O art. 10 estende os arts. 4º e 5º a todos os agentes do Executivo federal, e prestar serviço a pessoa que tenha interesse em decisão do agente é conflito (art. 5º, II). Erros: a lei não se limita à alta administração; horário e prejuízo são irrelevantes, pois o conflito independe de dano ou vantagem (art. 4º, § 2º); como Carlos não está no art. 2º, I a IV, a competência é da CGU, não da CEP (arts. 4º, § 1º, e 8º, parágrafo único).',
    fundamento: 'Lei 12.813/2013, arts. 4º, §§ 1º e 2º, 5º, II, 8º, parágrafo único, e 10',
  },
  {
    id: 'etp-conflito-q05',
    temaId: 'etp-conflito',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Em matéria de conflito de interesses, os ocupantes de cargos em comissão do grupo DAS de níveis 6 e 5, ou equivalentes, submetem-se à atuação da Comissão de Ética Pública, cabendo à Controladoria-Geral da União atuar em relação aos demais agentes públicos do Executivo federal não enumerados nos incisos I a IV do art. 2º da Lei 12.813/2013.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 8º, parágrafo único, atribui à CEP os agentes dos incisos I a IV do art. 2º (entre eles, DAS 6 e 5 ou equivalentes, inciso IV) e à CGU os demais.',
    fundamento: 'Lei 12.813/2013, art. 2º, IV, e art. 8º, parágrafo único',
  },
  {
    id: 'etp-conflito-q06',
    temaId: 'etp-conflito',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'De acordo com a Lei 12.813/2013, configuram conflito de interesses no exercício de cargo ou emprego no Executivo federal as situações abaixo, EXCETO:',
    alternativas: [
      'receber presente de quem tenha interesse em decisão do agente público, fora dos limites e condições estabelecidos em regulamento.',
      'prestar serviços, ainda que eventuais, a empresa cuja atividade seja controlada, fiscalizada ou regulada pelo ente ao qual o agente está vinculado.',
      'atuar, ainda que informalmente, como procurador, consultor, assessor ou intermediário de interesses privados nos órgãos ou entidades da administração pública.',
      'praticar ato em benefício de interesse de pessoa jurídica de que participe o cônjuge do agente e que possa ser por ele beneficiada.',
      'consultar a Controladoria-Geral da União, em caso de dúvida, sobre como prevenir ou impedir situação que possa configurar conflito de interesses.',
    ],
    correta: 4,
    comentario:
      'As alternativas A a D reproduzem o art. 5º, VI, VII, IV e V. A alternativa E não é conflito: é justamente a conduta que a lei manda adotar em caso de dúvida (art. 4º, § 1º), consultando a CEP ou a CGU, conforme o caso (art. 8º, parágrafo único).',
    fundamento: 'Lei 12.813/2013, arts. 4º, § 1º, e 5º, IV a VII',
  },
  {
    id: 'etp-conflito-q07',
    temaId: 'etp-conflito',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 1,
    enunciado:
      'Segundo a Lei 12.813/2013, os Ministros de Estado, os ocupantes de cargos de natureza especial, os presidentes, vice-presidentes e diretores de entidades da administração indireta e os ocupantes de DAS 6 e 5 ou equivalentes deverão divulgar, na internet, sua agenda de compromissos públicos:',
    alternativas: [
      'diariamente.',
      'semanalmente.',
      'mensalmente.',
      'somente quando requerida com base na Lei de Acesso à Informação.',
      'anualmente, no relatório de gestão do órgão.',
    ],
    correta: 0,
    comentario:
      'O art. 11 obriga os agentes dos incisos I a IV do art. 2º a divulgar, diariamente, a agenda de compromissos públicos na internet. É transparência ativa: não depende de pedido pela LAI, e a lei não admite periodicidade semanal, mensal ou anual.',
    fundamento: 'Lei 12.813/2013, art. 11',
  },
  {
    id: 'etp-conflito-q08',
    temaId: 'etp-conflito',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'O impedimento de seis meses posterior ao exercício previsto na Lei 12.813/2013 alcança indistintamente todos os agentes públicos do Poder Executivo federal, uma vez que o art. 10 da lei estende a todos eles a integralidade das regras sobre situações que configuram conflito de interesses após o exercício do cargo.',
    gabaritoCE: false,
    comentario:
      'Errado. O art. 10 estende a todos os agentes apenas os arts. 4º e 5º e o inciso I do art. 6º (informação privilegiada, a qualquer tempo). A quarentena do art. 6º, II, recai sobre os agentes do art. 2º.',
    fundamento: 'Lei 12.813/2013, arts. 2º, 6º e 10',
  },
  {
    id: 'etp-conflito-q09',
    temaId: 'etp-conflito',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado:
      'Quanto às consequências previstas na Lei 12.813/2013 para o agente público que praticar os atos de conflito de interesses descritos em seus arts. 5º e 6º, assinale a alternativa correta.',
    alternativas: [
      'Incorre apenas em infração ética, punível com censura pela comissão de ética.',
      'Incorre em improbidade administrativa, nos termos do art. 11 da Lei 8.429/1992, quando não caracterizada conduta dos arts. 9º ou 10 daquela lei, e fica sujeito também à penalidade de demissão da Lei 8.112/1990, ou medida equivalente.',
      'Fica sujeito somente a multa aplicada pela CGU, de até 2% da remuneração anual.',
      'Responde exclusivamente na esfera penal, por crime de conflito de interesses.',
      'Não sofre sanção se devolver a vantagem recebida antes da instauração do processo.',
    ],
    correta: 1,
    comentario:
      'O art. 12 enquadra as condutas como improbidade (art. 11 da Lei 8.429/1992), quando não couber enquadramento mais grave nos arts. 9º ou 10, e o parágrafo único sujeita o agente à demissão (Lei 8.112, arts. 127, III, e 132) ou medida equivalente. A lei não cria multa da CGU nem crime, e a devolução de vantagem não afasta a sanção.',
    fundamento: 'Lei 12.813/2013, art. 12, caput e parágrafo único',
  },

  /* ---------- etp-lai ---------- */
  {
    id: 'etp-lai-q01',
    temaId: 'etp-lai',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'Conforme a Lei 12.527/2011, não sendo possível conceder o acesso imediato à informação, o órgão deverá atender ao pedido em prazo não superior a ____ dias, prorrogável por mais ____ dias, mediante justificativa expressa, da qual será cientificado o requerente. Assinale a alternativa que preenche as lacunas, na ordem.',
    alternativas: ['10 – 5', '15 – 15', '20 – 10', '30 – 30', '20 – 20'],
    correta: 2,
    comentario:
      'O art. 11, § 1º, fixa até 20 dias, e o § 2º admite prorrogação por mais 10 dias, com justificativa expressa e ciência do requerente. O “30 – 30” é o prazo da ouvidoria na Lei 13.460/2017; “10 – 5” lembra os prazos de recurso da LAI.',
    fundamento: 'Lei 12.527/2011, art. 11, §§ 1º e 2º',
  },
  {
    id: 'etp-lai-q02',
    temaId: 'etp-lai',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Para requerer a hospital universitário federal informação de interesse público, como o número de leitos de UTI disponíveis, o cidadão deve apresentar os motivos determinantes do pedido, sob pena de indeferimento.',
    gabaritoCE: false,
    comentario:
      'Errado. O art. 10, § 3º, veda quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público. O requerente só precisa se identificar e especificar a informação (art. 10, caput).',
    fundamento: 'Lei 12.527/2011, art. 10, caput e § 3º',
  },
  {
    id: 'etp-lai-q03',
    temaId: 'etp-lai',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Conforme a Lei de Acesso à Informação, os prazos máximos de restrição de acesso à informação classificada como ultrassecreta, secreta e reservada são, respectivamente:',
    alternativas: ['25, 15 e 5 anos.', '50, 25 e 10 anos.', '100, 50 e 25 anos.', '20, 10 e 5 anos.', '25, 10 e 5 anos.'],
    correta: 0,
    comentario:
      'O art. 24, § 1º, fixa 25 anos (ultrassecreta), 15 anos (secreta) e 5 anos (reservada), contados da data de produção. Os 100 anos são da informação pessoal (art. 31), que não recebe grau de sigilo.',
    fundamento: 'Lei 12.527/2011, art. 24, § 1º',
  },
  {
    id: 'etp-lai-q04',
    temaId: 'etp-lai',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Informações pessoais relativas à intimidade, como as registradas no prontuário de paciente atendido em hospital público, têm acesso restrito a agentes públicos legalmente autorizados e à pessoa a que se referem pelo prazo máximo de 100 anos a contar da data de sua produção, independentemente de classificação de sigilo.',
    gabaritoCE: true,
    comentario:
      'Certo. É a regra do art. 31, § 1º, I. A informação pessoal não é classificada (não é ultrassecreta, secreta nem reservada): tem restrição própria. Terceiros só têm acesso com previsão legal ou consentimento expresso (art. 31, § 1º, II).',
    fundamento: 'Lei 12.527/2011, art. 31, § 1º, I e II',
  },
  {
    id: 'etp-lai-q05',
    temaId: 'etp-lai',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Segundo a Lei 12.527/2011, o consentimento expresso da pessoa a que se refere a informação pessoal NÃO será exigido quando as informações forem necessárias:',
    alternativas: [
      'à divulgação em campanha institucional do órgão, desde que a pessoa seja servidora.',
      'à prevenção e ao diagnóstico médico, quando a pessoa estiver física ou legalmente incapaz, e para utilização única e exclusivamente para o tratamento médico.',
      'à elaboração de reportagem jornalística de interesse do público, com identificação do paciente.',
      'à instrução de processo seletivo para contratação de pessoal pelo órgão.',
      'à pesquisa científica de interesse privado, com identificação dos titulares para posterior contato.',
    ],
    correta: 1,
    comentario:
      'O art. 31, § 3º, I, dispensa o consentimento para prevenção e diagnóstico médico de pessoa física ou legalmente incapaz, com uso exclusivo no tratamento. A pesquisa dispensada é a de evidente interesse público ou geral, vedada a identificação (inciso II). As demais hipóteses não estão na lei.',
    fundamento: 'Lei 12.527/2011, art. 31, § 3º, I e II',
  },
  {
    id: 'etp-lai-q06',
    temaId: 'etp-lai',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'Negado o acesso à informação, o requerente poderá interpor recurso no prazo de ________, a contar da sua ciência, dirigido à autoridade hierarquicamente superior à que exarou a decisão impugnada, que deverá manifestar-se no prazo de ________. Assinale a alternativa que completa o texto da Lei 12.527/2011.',
    alternativas: ['10 dias – 5 dias', '5 dias – 10 dias', '15 dias – 15 dias', '10 dias – 10 dias', '30 dias – 5 dias'],
    correta: 0,
    comentario:
      'O art. 15 dá 10 dias para recorrer, contados da ciência, e o parágrafo único dá 5 dias para a autoridade superior se manifestar. Inverter os números (5 e 10) é o erro mais comum.',
    fundamento: 'Lei 12.527/2011, art. 15, caput e parágrafo único',
  },
  {
    id: 'etp-lai-q07',
    temaId: 'etp-lai',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Município com população de até 10.000 habitantes fica integralmente dispensado de divulgar informações na internet, inclusive as relativas à execução orçamentária e financeira.',
    gabaritoCE: false,
    comentario:
      'Errado. O art. 8º, § 4º, dispensa esses municípios da divulgação obrigatória na internet, mas mantém a obrigação de divulgar em tempo real as informações sobre execução orçamentária e financeira, nos termos do art. 73-B da Lei de Responsabilidade Fiscal.',
    fundamento: 'Lei 12.527/2011, art. 8º, § 4º',
  },
  {
    id: 'etp-lai-q08',
    temaId: 'etp-lai',
    formato: 'multipla',
    estilo: 'nc-ufpr',
    dificuldade: 2,
    enunciado:
      'No âmbito da administração pública federal, é autoridade competente para classificar informação no grau ultrassecreto, conforme a Lei 12.527/2011:',
    alternativas: [
      'o dirigente de autarquia federal.',
      'o presidente de sociedade de economia mista.',
      'o ocupante de cargo em comissão DAS 101.5.',
      'o Comandante do Exército.',
      'o superintendente de hospital universitário federal.',
    ],
    correta: 3,
    comentario:
      'O art. 27, I, reserva o grau ultrassecreto ao Presidente, ao Vice, aos Ministros e equiparados, aos Comandantes da Marinha, do Exército e da Aeronáutica e aos chefes de missões diplomáticas e consulares permanentes no exterior. Titulares de autarquias, fundações, empresas públicas e sociedades de economia mista classificam até secreto (II); quem exerce direção, comando ou chefia DAS 101.5 ou superior, só reservado (III). O superintendente de hospital universitário não está no rol do inciso I.',
    fundamento: 'Lei 12.527/2011, art. 27, I a III',
  },
  {
    id: 'etp-lai-q09',
    temaId: 'etp-lai',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Segundo o Decreto 7.724/2012, não serão atendidos pedidos de acesso à informação genéricos, desproporcionais ou desarrazoados, bem como os que exijam trabalhos adicionais de análise, interpretação ou consolidação de dados e informações.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 13 do decreto lista essas hipóteses (incisos I a III). No caso de trabalho adicional, o órgão deve indicar, se souber, onde estão as informações a partir das quais o requerente pode fazer a análise (parágrafo único).',
    fundamento: 'Decreto 7.724/2012, art. 13',
  },
  {
    id: 'etp-lai-q10',
    temaId: 'etp-lai',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Sobre a Lei de Acesso à Informação, assinale a alternativa correta.',
    alternativas: [
      'A LAI não se aplica às empresas públicas nem às sociedades de economia mista.',
      'O serviço de busca e de fornecimento da informação é sempre cobrado, para ressarcir os custos do órgão.',
      'Informações sobre condutas que impliquem violação de direitos humanos praticada por agentes públicos podem ser classificadas como reservadas.',
      'Vencido o prazo de classificação, a informação permanece sigilosa até ato expresso de desclassificação.',
      'Entidades privadas sem fins lucrativos que recebam recursos públicos submetem-se à LAI, no que couber, e a publicidade restringe-se à parcela dos recursos recebidos e à sua destinação.',
    ],
    correta: 4,
    comentario:
      'É o art. 2º e seu parágrafo único. Erros: estatais estão no art. 1º, parágrafo único, II; o serviço é gratuito, salvo custo de reprodução (art. 12); informação sobre violação de direitos humanos não pode ser restringida (art. 21, parágrafo único); vencido o prazo, a informação se torna pública automaticamente (art. 24, § 4º).',
    fundamento: 'Lei 12.527/2011, arts. 1º, 2º, 12, 21 e 24, § 4º',
  },
];
