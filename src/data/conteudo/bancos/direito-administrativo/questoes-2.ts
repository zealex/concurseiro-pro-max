import type { QuestaoTreino } from '../../../types';

/* Poderes administrativos e atos administrativos */
export const QUESTOES_2: QuestaoTreino[] = [
  /* ---------- da-poderes ---------- */
  {
    id: 'da-poderes-q01',
    temaId: 'da-poderes',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'A vigilância sanitária municipal interdita a cozinha de um restaurante por falta de condições de higiene. Assinalar a alternativa que indica o poder administrativo exercido:',
    alternativas: ['Poder hierárquico.', 'Poder disciplinar.', 'Poder de polícia.', 'Poder regulamentar.', 'Autotutela administrativa.'],
    correta: 2,
    comentario:
      'Limitar a atividade de particular em nome do interesse público (higiene, saúde) é poder de polícia (CTN, art. 78). Não é disciplinar, porque o restaurante não tem vínculo especial com a Administração; não é hierárquico, porque não há relação de subordinação; não é regulamentar, porque não se trata de editar norma; e autotutela é a revisão dos próprios atos da Administração, não a limitação da atividade do particular.',
    fundamento: 'CTN (Lei 5.172/1966), art. 78',
  },
  {
    id: 'da-poderes-q02',
    temaId: 'da-poderes',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo sobre os poderes administrativos:\n\nI. O poder disciplinar permite punir servidores e particulares que mantenham vínculo específico com a Administração, como empresas contratadas.\nII. O poder regulamentar permite ao chefe do Executivo criar, por decreto, obrigações não previstas em lei.\nIII. O poder hierárquico permite à autoridade superior rever atos dos subordinados e avocar competências, nos limites legais.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas III.', 'Apenas I e III.', 'I, II e III.'],
    correta: 3,
    comentario:
      'I e III estão corretas. A II erra: o decreto regulamentar serve à fiel execução da lei (CF, art. 84, IV) e não pode inovar criando obrigação sem base legal. A avocação, prevista no art. 15 da Lei 9.784, é manifestação típica do poder hierárquico.',
    fundamento: 'CF/88, art. 84, IV; Lei 9.784/1999, art. 15',
  },
  {
    id: 'da-poderes-q03',
    temaId: 'da-poderes',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 2,
    enunciado:
      'Um chefe de setor remove um servidor de ofício, alegando “necessidade do serviço”, mas com o real objetivo de puni-lo por críticas feitas em reunião. Nesse caso, ocorreu:',
    alternativas: [
      'excesso de poder, por vício de competência.',
      'vício de forma, por ausência de publicação.',
      'ato válido, pois a remoção de ofício é discricionária.',
      'abuso de poder por omissão.',
      'desvio de finalidade, espécie de abuso de poder.',
    ],
    correta: 4,
    comentario:
      'O agente é competente, mas usou o ato para fim diverso do previsto em lei (punir, e não atender ao serviço): é desvio de finalidade (Lei 4.717/1965, art. 2º, parágrafo único, “e”). Excesso de poder seria ultrapassar os limites da competência. A discricionariedade não autoriza fim ilícito.',
    fundamento: 'Lei 4.717/1965, art. 2º, “e”, e parágrafo único, “e”',
  },
  {
    id: 'da-poderes-q04',
    temaId: 'da-poderes',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    enunciado: 'De acordo com o Código Tributário Nacional, considera-se poder de polícia a atividade da administração pública que:',
    alternativas: [
      'limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou abstenção de fato, em razão de interesse público.',
      'aplica sanções aos servidores públicos pela prática de infrações funcionais.',
      'distribui e escalona as funções de seus órgãos, ordenando a atuação dos agentes.',
      'edita normas gerais para a fiel execução das leis.',
      'apura infrações penais e indica sua autoria ao Ministério Público.',
    ],
    correta: 0,
    comentario:
      'A alternativa A reproduz o núcleo do art. 78 do CTN. Punir servidores é poder disciplinar; escalonar funções é poder hierárquico; editar normas para executar a lei é poder regulamentar; apurar crimes é polícia judiciária, que não se confunde com a polícia administrativa.',
    fundamento: 'CTN (Lei 5.172/1966), art. 78',
  },
  {
    id: 'da-poderes-q05',
    temaId: 'da-poderes',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Lei municipal atribui a uma sociedade de economia mista do Município, de capital majoritariamente público, que presta exclusivamente o serviço de gestão do trânsito em regime não concorrencial, a competência para fiscalizar e aplicar multas de trânsito. À luz da tese fixada pelo STF no Tema 532 da repercussão geral, essa delegação é:',
    alternativas: [
      'inconstitucional, porque o poder de polícia jamais pode ser exercido por pessoa jurídica de direito privado.',
      'constitucional, porque o STF admite a delegação, por lei, a estatais de capital majoritariamente público que prestem exclusivamente serviço público próprio do Estado em regime não concorrencial.',
      'constitucional apenas se a empresa tiver capital majoritariamente privado.',
      'constitucional apenas quanto à edição de normas de trânsito (ordem de polícia), e não quanto às multas.',
      'inconstitucional, porque somente autarquias podem fiscalizar o trânsito.',
    ],
    correta: 1,
    comentario:
      'No Tema 532 (RE 633.782), o STF julgou constitucional delegar o poder de polícia, por lei, a pessoas jurídicas de direito privado da administração indireta, de capital majoritariamente público, que prestem exclusivamente serviço público de atuação própria do Estado em regime não concorrencial. A fase indelegável é justamente a ordem de polícia (legislar), o que torna a D errada.',
    fundamento: 'STF, Tema 532 da repercussão geral (RE 633.782); CTN, art. 78',
  },
  {
    id: 'da-poderes-q06',
    temaId: 'da-poderes',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Nos termos da Lei 9.784/1999, pode ser objeto de delegação:',
    alternativas: [
      'a edição de atos de caráter normativo.',
      'a decisão de recursos administrativos.',
      'parte da competência de um órgão a outro, ainda que não lhe seja hierarquicamente subordinado, por razões de índole técnica ou territorial.',
      'a matéria de competência exclusiva do órgão ou da autoridade.',
      'toda a competência do órgão, em caráter definitivo e irrevogável.',
    ],
    correta: 2,
    comentario:
      'O art. 12 permite delegar parte da competência, mesmo a quem não é subordinado, por razões técnicas, sociais, econômicas, jurídicas ou territoriais. O art. 13 proíbe delegar atos normativos, decisão de recursos e matérias de competência exclusiva. A delegação é parcial e revogável a qualquer tempo (art. 14, § 2º).',
    fundamento: 'Lei 9.784/1999, arts. 12, 13 e 14, § 2º',
  },
  {
    id: 'da-poderes-q07',
    temaId: 'da-poderes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'O excesso de poder ocorre quando o agente, embora competente para praticar o ato, ultrapassa os limites de suas atribuições.',
    gabaritoCE: true,
    comentario:
      'Certo. Excesso de poder é espécie de abuso de poder ligada ao elemento competência: o agente tem atribuição, mas vai além dela. A Lei 4.717/1965 trata a incompetência como causa de nulidade quando o ato não se inclui nas atribuições legais do agente.',
    fundamento: 'Lei 4.717/1965, art. 2º, “a”, e parágrafo único, “a”',
  },
  {
    id: 'da-poderes-q08',
    temaId: 'da-poderes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O poder disciplinar e o poder de polícia confundem-se, pois ambos alcançam indistintamente qualquer particular, independentemente de vínculo específico com a Administração.',
    gabaritoCE: false,
    comentario:
      'Errado. O poder disciplinar alcança servidores e pessoas com vínculo específico com a Administração (contratados, por exemplo); as penalidades disciplinares do servidor estão no art. 127 da Lei 8.112. O poder de polícia atinge os particulares em geral, com base no vínculo genérico de sujeição (CTN, art. 78).',
    fundamento: 'CTN, art. 78; Lei 8.112/1990, art. 127',
  },
  {
    id: 'da-poderes-q09',
    temaId: 'da-poderes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'O desvio de finalidade pode ocorrer mesmo em ato praticado por agente competente e com observância da forma legal, bastando que o fim visado seja diverso daquele previsto, explícita ou implicitamente, na regra de competência.',
    gabaritoCE: true,
    comentario:
      'Certo. O vício está na finalidade, não na competência nem na forma. A definição legal é a da Lei 4.717/1965: o desvio de finalidade se verifica quando o agente pratica o ato visando a fim diverso daquele previsto, explícita ou implicitamente, na regra de competência.',
    fundamento: 'Lei 4.717/1965, art. 2º, parágrafo único, “e”',
  },

  /* ---------- da-atos ---------- */
  {
    id: 'da-atos-q01',
    temaId: 'da-atos',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Assinalar a alternativa que apresenta os elementos (requisitos) do ato administrativo:',
    alternativas: [
      'Presunção de legitimidade, imperatividade, autoexecutoriedade, tipicidade e forma.',
      'Competência, finalidade, imperatividade, motivo e objeto.',
      'Legalidade, impessoalidade, moralidade, publicidade e eficiência.',
      'Competência, finalidade, forma, motivo e objeto.',
      'Competência, motivação, publicidade, motivo e conteúdo.',
    ],
    correta: 3,
    comentario:
      'Os elementos são competência, finalidade, forma, motivo e objeto; a Lei 4.717/1965 (art. 2º) declara nulo o ato com vício em cada um deles. Presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade são atributos; o LIMPE são princípios; motivação é a exposição do motivo, que integra a forma.',
    fundamento: 'Lei 4.717/1965, art. 2º',
  },
  {
    id: 'da-atos-q02',
    temaId: 'da-atos',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo sobre os atributos do ato administrativo, segundo a doutrina majoritária de Direito Administrativo:\n\nI. A presunção de legitimidade é relativa e admite prova em contrário.\nII. A imperatividade está presente em todos os atos administrativos, inclusive em certidões e atestados.\nIII. A autoexecutoriedade permite executar o ato sem ordem judicial, mas não está presente em todos os atos.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas III.', 'Apenas II e III.', 'Apenas I e III.'],
    correta: 4,
    comentario:
      'I e III estão corretas: a presunção de legitimidade é relativa (juris tantum), e a autoexecutoriedade depende de lei ou de urgência — a Lei 9.784 admite providências acauteladoras sem prévia manifestação em caso de risco iminente (art. 45); a cobrança de multa não paga, por exemplo, exige execução judicial. A II erra: atos enunciativos (certidão, atestado, parecer) e os que atendem a pedido do interessado (licença) não impõem obrigação a terceiros, logo não têm imperatividade.',
    fundamento: 'Doutrina sobre os atributos do ato administrativo; Lei 9.784/1999, art. 45',
  },
  {
    id: 'da-atos-q03',
    temaId: 'da-atos',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Sobre a revogação do ato administrativo, é correto afirmar que:',
    alternativas: [
      'decorre de razões de conveniência e oportunidade, produz efeitos para o futuro e deve respeitar os direitos adquiridos.',
      'pode ser feita pelo Poder Judiciário, no exercício da função jurisdicional, sobre atos do Poder Executivo.',
      'recai sobre atos ilegais e produz efeitos retroativos.',
      'alcança inclusive os atos vinculados.',
      'está sujeita ao prazo decadencial de cinco anos do art. 54 da Lei 9.784/1999.',
    ],
    correta: 0,
    comentario:
      'Revogação é juízo de mérito (conveniência e oportunidade), feita pela própria Administração, com efeitos ex nunc e respeito aos direitos adquiridos (Lei 9.784, art. 53; Súmula 473). O Judiciário não revoga atos de outro Poder; ato ilegal é anulado; atos vinculados não se revogam; o prazo do art. 54 é para anular.',
    fundamento: 'Lei 9.784/1999, arts. 53 e 54; STF, Súmula 473',
  },
  {
    id: 'da-atos-q04',
    temaId: 'da-atos',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 2,
    enunciado:
      'Segundo a Lei 9.784/1999, o direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em:',
    alternativas: [
      'dois anos, contados da ciência do vício pela Administração.',
      'cinco anos, contados da data em que foram praticados, salvo comprovada má-fé.',
      'cinco anos, inclusive nos casos de má-fé comprovada.',
      'dez anos, contados da publicação do ato.',
      'prazo nenhum, pois a anulação de ato ilegal pode ocorrer a qualquer tempo.',
    ],
    correta: 1,
    comentario:
      'O art. 54 fixa decadência de cinco anos, contados da prática do ato, para anular atos favoráveis ao destinatário, salvo comprovada má-fé. Não conta da ciência do vício, e a má-fé afasta a decadência. Dizer que a anulação pode ocorrer a qualquer tempo ignora a regra de segurança jurídica do artigo.',
    fundamento: 'Lei 9.784/1999, art. 54',
  },
  {
    id: 'da-atos-q05',
    temaId: 'da-atos',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Em março de 2020, um servidor de autarquia federal passou a receber mensalmente um adicional concedido por ato ilegal, sem ter contribuído para o erro nem agido de má-fé. A Administração identificou o vício em abril de 2026 e, sem ter adotado antes nenhuma medida de impugnação, pretende anular o ato agora. À luz da Lei 9.784/1999:',
    alternativas: [
      'a anulação é obrigatória, pois ato ilegal não gera direitos e pode ser anulado a qualquer tempo.',
      'a anulação é possível, pois o prazo de cinco anos só começa a contar da descoberta do vício.',
      'operou-se a decadência, contada da percepção do primeiro pagamento, e a Administração não pode mais anular o ato.',
      'o ato pode ser revogado, já que a revogação não se sujeita ao prazo decadencial.',
      'a decadência só se aplica a atos vinculados, e não a adicionais remuneratórios.',
    ],
    correta: 2,
    comentario:
      'Com efeitos patrimoniais contínuos, a decadência conta da percepção do primeiro pagamento (art. 54, § 1º): março de 2020 + 5 anos = março de 2025. Sem má-fé e sem medida de impugnação antes disso (§ 2º), decaiu o direito de anular. Revogar ato ilegal não é possível (revogação é para ato válido), e a lei não limita a decadência a atos vinculados.',
    fundamento: 'Lei 9.784/1999, art. 54, caput e §§ 1º e 2º',
  },
  {
    id: 'da-atos-q06',
    temaId: 'da-atos',
    formato: 'multipla',
    estilo: 'ibam',
    dificuldade: 2,
    enunciado:
      'Conforme a Lei 9.784/1999, os atos que apresentarem defeitos sanáveis poderão ser convalidados pela própria Administração em decisão na qual se evidencie que:',
    alternativas: [
      'houve autorização judicial prévia para a convalidação.',
      'o interessado a requereu, ainda que haja prejuízo a terceiros.',
      'o vício atinge a finalidade do ato.',
      'eles não acarretam lesão ao interesse público nem prejuízo a terceiros.',
      'já ocorreu a decadência do direito de anular.',
    ],
    correta: 3,
    comentario:
      'O art. 55 exige que a convalidação não acarrete lesão ao interesse público nem prejuízo a terceiros, e que o defeito seja sanável. Não depende de juiz nem de pedido do interessado. Vício de finalidade, em regra, é insanável. Decadência é outra figura: impede a anulação, mas não é requisito da convalidação.',
    fundamento: 'Lei 9.784/1999, art. 55',
  },
  {
    id: 'da-atos-q07',
    temaId: 'da-atos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A revogação do ato administrativo produz efeitos retroativos (ex tunc), desfazendo todos os efeitos produzidos desde a sua edição.',
    gabaritoCE: false,
    comentario:
      'Errado. A revogação retira ato válido por conveniência e oportunidade e produz efeitos ex nunc (para o futuro), respeitados os direitos adquiridos. Efeitos retroativos, em regra, são próprios da anulação.',
    fundamento: 'Lei 9.784/1999, art. 53; STF, Súmula 473',
  },
  {
    id: 'da-atos-q08',
    temaId: 'da-atos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Pela teoria dos motivos determinantes, a validade do ato administrativo vincula-se aos motivos indicados como seu fundamento, de modo que, se estes forem inexistentes ou falsos, o ato será nulo, ainda que se trate de ato discricionário.',
    gabaritoCE: true,
    comentario:
      'Certo. Declarado o motivo, ele vincula o administrador. A Lei 4.717/1965 considera nulo o ato por inexistência dos motivos, quando a matéria de fato ou de direito é materialmente inexistente ou juridicamente inadequada. A Lei 9.784 (art. 50) exige a indicação dos fatos e fundamentos jurídicos em vários atos.',
    fundamento: 'Lei 4.717/1965, art. 2º, “d”, e parágrafo único, “d”; Lei 9.784/1999, art. 50',
  },
  {
    id: 'da-atos-q09',
    temaId: 'da-atos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'O Poder Judiciário pode revogar ato administrativo discricionário do Poder Executivo que considere inconveniente ou inoportuno, desde que provocado por meio de ação popular.',
    gabaritoCE: false,
    comentario:
      'Errado. Revogação é juízo de conveniência e oportunidade reservado à própria Administração. O Judiciário, provocado, anula atos ilegais — inclusive por ação popular, que visa anular ato lesivo (CF, art. 5º, LXXIII) —, mas não substitui o mérito administrativo.',
    fundamento: 'STF, Súmula 473; CF/88, art. 5º, LXXIII',
  },
];
