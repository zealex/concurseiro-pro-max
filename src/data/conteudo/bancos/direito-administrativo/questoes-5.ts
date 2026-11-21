import type { QuestaoTreino } from '../../../types';

/* Licitações e contratos (noções) e controle da administração */
export const QUESTOES_5: QuestaoTreino[] = [
  /* ---------- da-licitacoes ---------- */
  {
    id: 'da-licitacoes-q01',
    temaId: 'da-licitacoes',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Assinalar a alternativa que apresenta apenas modalidades de licitação previstas na Lei 14.133/2021:',
    alternativas: [
      'Pregão, concorrência, convite, concurso e leilão.',
      'Pregão, concorrência, tomada de preços, concurso e leilão.',
      'Concorrência, convite, tomada de preços, concurso e leilão.',
      'Pregão, concorrência, concurso, leilão e diálogo competitivo.',
      'Pregão, concorrência, credenciamento, leilão e diálogo competitivo.',
    ],
    correta: 3,
    comentario:
      'O art. 28 prevê cinco modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo. Convite e tomada de preços não existem na nova lei. Credenciamento é procedimento auxiliar (art. 78), não modalidade.',
    fundamento: 'Lei 14.133/2021, art. 28',
  },
  {
    id: 'da-licitacoes-q02',
    temaId: 'da-licitacoes',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo, de acordo com a Lei 14.133/2021:\n\nI. O pregão é a modalidade obrigatória para a aquisição de bens e serviços comuns.\nII. Em regra, a fase de habilitação antecede a fase de julgamento das propostas.\nIII. As licitações serão realizadas preferencialmente sob a forma eletrônica.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas III.', 'Apenas II e III.', 'Apenas I e III.'],
    correta: 4,
    comentario:
      'I (art. 6º, XLI) e III (art. 17, § 2º) estão corretas. A II erra: na sequência do art. 17, o julgamento (inciso IV) vem antes da habilitação (inciso V); a inversão só ocorre por ato motivado e se prevista no edital (§ 1º).',
    fundamento: 'Lei 14.133/2021, arts. 6º, XLI, e 17, caput e §§ 1º e 2º',
  },
  {
    id: 'da-licitacoes-q03',
    temaId: 'da-licitacoes',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Na Lei 14.133/2021, é hipótese de inexigibilidade de licitação:',
    alternativas: [
      'a contratação de parecer técnico, serviço especializado de natureza predominantemente intelectual, com profissional de notória especialização.',
      'a contratação em situação de emergência ou de calamidade pública.',
      'a aquisição de medicamentos destinados exclusivamente ao tratamento de doenças raras definidas pelo Ministério da Saúde.',
      'a contratação de pequeno valor para outros serviços e compras.',
      'a contratação que mantenha as condições de licitação deserta realizada há menos de um ano.',
    ],
    correta: 0,
    comentario:
      'A inexigibilidade decorre da inviabilidade de competição; o art. 74, III, “b”, inclui pareceres com profissionais de notória especialização. Emergência (art. 75, VIII), medicamentos para doenças raras (art. 75, IV, “m”), pequeno valor (art. 75, II) e licitação deserta (art. 75, III) são hipóteses de dispensa.',
    fundamento: 'Lei 14.133/2021, arts. 74, III, “b”, e 75',
  },
  {
    id: 'da-licitacoes-q04',
    temaId: 'da-licitacoes',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 1,
    enunciado: 'Na modalidade pregão, o agente responsável pela condução do certame é designado:',
    alternativas: ['leiloeiro.', 'pregoeiro.', 'comissão permanente de licitação.', 'fiscal do contrato.', 'ordenador de despesas.'],
    correta: 1,
    comentario:
      'O art. 8º, § 5º, diz que, no pregão, o agente de contratação será designado pregoeiro. A licitação é conduzida pelo agente de contratação, servidor efetivo ou empregado público dos quadros permanentes; fiscal e gestor atuam na execução do contrato.',
    fundamento: 'Lei 14.133/2021, art. 8º, caput e § 5º',
  },
  {
    id: 'da-licitacoes-q05',
    temaId: 'da-licitacoes',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Após uma enchente que danificou uma unidade básica de saúde, o Município contrata diretamente, com fundamento em emergência, a obra de reparo. Segundo a Lei 14.133/2021:',
    alternativas: [
      'o contrato pode ser prorrogado sucessivamente enquanto durar a reconstrução, ainda que ultrapassado um ano da enchente.',
      'a mesma empresa pode ser recontratada por novas dispensas emergenciais, sem limite de tempo, até a conclusão da reconstrução.',
      'a dispensa abrange apenas os bens necessários ao atendimento da situação e as parcelas de obras e serviços que possam ser concluídas no prazo máximo de um ano, contado da ocorrência da emergência.',
      'a contratação emergencial dispensa a observância dos preços praticados no mercado.',
      'por se tratar de emergência, a hipótese é de inexigibilidade, e não de dispensa.',
    ],
    correta: 2,
    comentario:
      'O art. 75, VIII, limita a dispensa ao necessário para a situação e às parcelas concluíveis em até um ano da emergência. A lei veda prorrogar o contrato e recontratar a empresa; o STF (ADI 6890, 2024) admitiu as duas na mesma emergência, se o total não passar de um ano — por isso A e B erram nas duas leituras. O § 6º manda observar os preços de mercado. Emergência é dispensa, não inexigibilidade.',
    fundamento: 'Lei 14.133/2021, art. 75, VIII e § 6º; STF, ADI 6890',
  },
  {
    id: 'da-licitacoes-q06',
    temaId: 'da-licitacoes',
    formato: 'multipla',
    estilo: 'ibam',
    dificuldade: 2,
    enunciado:
      'Nas alterações unilaterais, o contratado é obrigado a aceitar, nas mesmas condições contratuais, acréscimos ou supressões de até ________ do valor inicial atualizado do contrato e, no caso de reforma de edifício ou de equipamento, acréscimos de até ________. Assinale a alternativa que completa, correta e respectivamente, as lacunas.',
    alternativas: ['10% – 25%', '20% – 40%', '25% – 25%', '25% – 50%', '50% – 100%'],
    correta: 3,
    comentario:
      'O art. 125 da Lei 14.133/2021 fixa 25% para acréscimos ou supressões em obras, serviços e compras e 50% para acréscimos em reforma de edifício ou equipamento. As alterações unilaterais não podem transfigurar o objeto (art. 126).',
    fundamento: 'Lei 14.133/2021, art. 125',
  },
  {
    id: 'da-licitacoes-q07',
    temaId: 'da-licitacoes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'A Lei 14.133/2021 não prevê as modalidades de licitação convite e tomada de preços.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 28 lista apenas pregão, concorrência, concurso, leilão e diálogo competitivo, e o § 2º proíbe criar outras modalidades ou combinar as existentes.',
    fundamento: 'Lei 14.133/2021, art. 28, caput e § 2º',
  },
  {
    id: 'da-licitacoes-q08',
    temaId: 'da-licitacoes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A sanção de impedimento de licitar e contratar, prevista na Lei 14.133/2021, impede o responsável de licitar ou contratar com a administração pública direta e indireta de todos os entes federativos, pelo prazo mínimo de três e máximo de seis anos.',
    gabaritoCE: false,
    comentario:
      'Errado. O item descreve a declaração de inidoneidade (art. 156, § 5º). O impedimento de licitar e contratar vale só no âmbito da administração direta e indireta do ente que aplicou a sanção, pelo prazo máximo de três anos (art. 156, § 4º).',
    fundamento: 'Lei 14.133/2021, art. 156, §§ 4º e 5º',
  },
  {
    id: 'da-licitacoes-q09',
    temaId: 'da-licitacoes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Em licitação que envolva bens ou serviços especiais, o agente de contratação pode ser substituído por comissão de contratação formada por, no mínimo, três membros, que responderão solidariamente pelos atos praticados pela comissão, ressalvado o membro que expressar posição individual divergente fundamentada e registrada em ata.',
    gabaritoCE: true,
    comentario:
      'Certo. É o art. 8º, § 2º, da Lei 14.133/2021, que exige também a observância dos requisitos do art. 7º para os membros. Já o agente de contratação responde individualmente, salvo se induzido a erro pela equipe de apoio (§ 1º).',
    fundamento: 'Lei 14.133/2021, art. 8º, §§ 1º e 2º',
  },

  /* ---------- da-controle ---------- */
  {
    id: 'da-controle-q01',
    temaId: 'da-controle',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Segundo a Constituição Federal, o controle externo, a cargo do Congresso Nacional, será exercido com o auxílio do(a):',
    alternativas: [
      'Ministério Público Federal.',
      'Supremo Tribunal Federal.',
      'Controladoria-Geral da União.',
      'Advocacia-Geral da União.',
      'Tribunal de Contas da União.',
    ],
    correta: 4,
    comentario:
      'O art. 71 da CF diz que o controle externo, a cargo do Congresso, é exercido com o auxílio do TCU. A CGU é órgão de controle interno do Executivo federal; MPF, STF e AGU têm outras funções constitucionais.',
    fundamento: 'CF/88, art. 71, caput',
  },
  {
    id: 'da-controle-q02',
    temaId: 'da-controle',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo sobre o Tribunal de Contas da União:\n\nI. Compete-lhe julgar as contas dos administradores e demais responsáveis por dinheiros, bens e valores públicos da administração direta e indireta.\nII. Compete-lhe julgar as contas prestadas anualmente pelo Presidente da República.\nIII. Suas decisões de que resulte imputação de débito ou multa não têm eficácia de título executivo.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas I e II.', 'Apenas I e III.', 'I, II e III.'],
    correta: 0,
    comentario:
      'Só a I está correta (art. 71, II). Quanto às contas do Presidente, o TCU apenas as aprecia, mediante parecer prévio em sessenta dias (art. 71, I); o julgamento cabe ao Congresso. As decisões que imputam débito ou multa têm eficácia de título executivo (art. 71, § 3º).',
    fundamento: 'CF/88, art. 71, I, II e § 3º',
  },
  {
    id: 'da-controle-q03',
    temaId: 'da-controle',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'O parecer prévio emitido pelo órgão competente sobre as contas que o prefeito deve prestar anualmente só deixará de prevalecer por decisão de:',
    alternativas: [
      'maioria simples dos vereadores presentes à sessão.',
      'dois terços dos membros da Câmara Municipal.',
      'maioria absoluta dos membros da Câmara Municipal.',
      'três quintos dos membros da Câmara Municipal.',
      'unanimidade dos membros da Câmara Municipal.',
    ],
    correta: 1,
    comentario:
      'O art. 31, § 2º, da CF exige decisão de dois terços dos membros da Câmara Municipal para afastar o parecer prévio. É quórum qualificado, calculado sobre o total de membros, e não sobre os presentes.',
    fundamento: 'CF/88, art. 31, § 2º',
  },
  {
    id: 'da-controle-q04',
    temaId: 'da-controle',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 2,
    enunciado: 'Quanto ao controle judicial dos atos administrativos, é correto afirmar que:',
    alternativas: [
      'o Judiciário pode revogar atos discricionários do Executivo por razões de conveniência.',
      'os atos discricionários estão imunes a qualquer controle judicial.',
      'o Judiciário controla a legalidade dos atos, inclusive dos discricionários, podendo anulá-los por desvio de finalidade ou desproporcionalidade, sem substituir o mérito administrativo.',
      'o controle judicial só pode ser exercido após o esgotamento da via administrativa.',
      'o Judiciário só pode controlar atos vinculados.',
    ],
    correta: 2,
    comentario:
      'A lei não exclui da apreciação do Judiciário lesão ou ameaça a direito (CF, art. 5º, XXXV), o que dispensa, em regra, esgotar a via administrativa. O controle é de legalidade (incluídos finalidade, motivos e proporcionalidade) e alcança atos vinculados e discricionários, mas o mérito e a revogação são da Administração (Súmula 473).',
    fundamento: 'CF/88, art. 5º, XXXV; STF, Súmula 473',
  },
  {
    id: 'da-controle-q05',
    temaId: 'da-controle',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'O TCU verifica ilegalidade em contrato administrativo de órgão federal e assina prazo para correção, que não é atendido. Segundo a Constituição Federal:',
    alternativas: [
      'o próprio TCU susta imediatamente o contrato, comunicando a decisão ao Senado Federal.',
      'a sustação do contrato cabe ao Presidente da República, por decreto.',
      'o TCU deve ajuizar ação judicial para anular o contrato, pois não pode atuar diretamente.',
      'o ato de sustação é adotado diretamente pelo Congresso Nacional e, se o Congresso ou o Executivo não efetivar as medidas em noventa dias, o Tribunal decidirá a respeito.',
      'o contrato permanece válido, pois o TCU não tem competência para fiscalizar contratos.',
    ],
    correta: 3,
    comentario:
      'Para atos, o TCU susta diretamente se não atendido (art. 71, X). Para contratos, a sustação é do Congresso, que solicita ao Executivo as medidas cabíveis (§ 1º); se em noventa dias nenhum dos dois agir, o Tribunal decide (§ 2º). O TCU fiscaliza contratos, sim.',
    fundamento: 'CF/88, art. 71, X e §§ 1º e 2º',
  },
  {
    id: 'da-controle-q06',
    temaId: 'da-controle',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Segundo a Constituição Federal, é parte legítima para, na forma da lei, denunciar irregularidades ou ilegalidades perante o Tribunal de Contas da União:',
    alternativas: [
      'apenas o Ministério Público.',
      'apenas os parlamentares federais.',
      'apenas os responsáveis pelo controle interno.',
      'apenas os partidos políticos com representação no Congresso Nacional.',
      'qualquer cidadão, partido político, associação ou sindicato.',
    ],
    correta: 4,
    comentario:
      'O art. 74, § 2º, legitima qualquer cidadão, partido político, associação ou sindicato. Os responsáveis pelo controle interno têm o dever de comunicar irregularidades ao TCU, sob pena de responsabilidade solidária (§ 1º), mas não são os únicos legitimados.',
    fundamento: 'CF/88, art. 74, §§ 1º e 2º',
  },
  {
    id: 'da-controle-q07',
    temaId: 'da-controle',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'O controle de mérito dos atos administrativos discricionários do Poder Executivo é exercido pelo Poder Judiciário.',
    gabaritoCE: false,
    comentario:
      'Errado. O mérito (conveniência e oportunidade) é controlado pela própria Administração, que pode revogar seus atos. O Judiciário faz controle de legalidade e anula atos ilegais, mas não revoga atos de outro Poder.',
    fundamento: 'Lei 9.784/1999, art. 53; STF, Súmula 473',
  },
  {
    id: 'da-controle-q08',
    temaId: 'da-controle',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Compete ao Tribunal de Contas da União apreciar, para fins de registro, a legalidade dos atos de admissão de pessoal, a qualquer título, na administração direta e indireta, excetuadas as nomeações para cargo de provimento em comissão.',
    gabaritoCE: true,
    comentario:
      'Certo. É o art. 71, III, da CF, que também inclui a apreciação das concessões de aposentadorias, reformas e pensões, ressalvadas as melhorias posteriores que não alterem o fundamento legal do ato concessório.',
    fundamento: 'CF/88, art. 71, III',
  },
  {
    id: 'da-controle-q09',
    temaId: 'da-controle',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Na Lei 14.133/2021, as unidades de assessoramento jurídico e de controle interno do próprio órgão ou entidade integram a terceira linha de defesa das contratações públicas, ao lado do tribunal de contas.',
    gabaritoCE: false,
    comentario:
      'Errado. Assessoramento jurídico e controle interno do próprio órgão formam a segunda linha de defesa (art. 169, II). A terceira é integrada pelo órgão central de controle interno da Administração e pelo tribunal de contas (inciso III); a primeira, pelos servidores, agentes de licitação e autoridades da governança (inciso I).',
    fundamento: 'Lei 14.133/2021, art. 169, I, II e III',
  },
];
