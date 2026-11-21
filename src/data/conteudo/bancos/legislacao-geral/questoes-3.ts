import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Tortura, abuso de autoridade, Protocolo de Istambul, DUDH e Pacto de São José
 * ------------------------------------------------------------------ */

export const QUESTOES_3: QuestaoTreino[] = [
  /* ---------- lg-tortura-abuso ---------- */
  {
    id: 'lg-tortura-abuso-q01',
    temaId: 'lg-tortura-abuso',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'Constitui crime de tortura, nos termos do art. 1º, I, da Lei 9.455/1997, constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental, com a finalidade de:',
    alternativas: [
      'obter informação, declaração ou confissão da vítima ou de terceira pessoa.',
      'obter para si indevida vantagem econômica.',
      'satisfazer a lascívia própria ou de outrem.',
      'vingar-se por motivo fútil.',
      'discriminar a vítima em razão de sua orientação sexual.',
    ],
    correta: 0,
    comentario:
      'O art. 1º, I, prevê três finalidades: obter informação, declaração ou confissão (a), provocar ação ou omissão criminosa (b) e discriminação racial ou religiosa (c). A vantagem econômica caracteriza a extorsão; a lascívia remete aos crimes sexuais. A alínea “c” não menciona orientação sexual.',
    fundamento: 'Lei 9.455/1997, art. 1º, I, “a” a “c”',
  },
  {
    id: 'lg-tortura-abuso-q02',
    temaId: 'lg-tortura-abuso',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo sobre a Lei 9.455/1997:\n\nI. Aquele que se omite em face das condutas de tortura, quando tinha o dever de evitá-las ou apurá-las, incorre na pena de detenção de 1 a 4 anos.\nII. O crime de tortura é inafiançável e insuscetível de graça ou anistia.\nIII. Todos os condenados pela lei, inclusive pela omissão, iniciam o cumprimento da pena em regime fechado.\nIV. A pena é aumentada de 1/6 até 1/3 se o crime é cometido por agente público.\n\nQuais estão corretas?',
    alternativas: ['Apenas I e II.', 'Apenas I, II e IV.', 'Apenas II e III.', 'Apenas I, III e IV.', 'Apenas II, III e IV.'],
    correta: 1,
    comentario:
      'I é o § 2º; II, o § 6º (e a CF, art. 5º, XLIII); IV, o § 4º, I. A III está errada: o § 7º manda iniciar em regime fechado, “salvo a hipótese do § 2º”, isto é, a omissão, punida com detenção.',
    fundamento: 'Lei 9.455/1997, art. 1º, §§ 2º, 4º, I, 6º e 7º',
  },
  {
    id: 'lg-tortura-abuso-q03',
    temaId: 'lg-tortura-abuso',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'O chamado Protocolo de Istambul é:',
    alternativas: [
      'um tratado da Organização dos Estados Americanos que tipifica o crime de tortura para os países do continente.',
      'uma resolução do Conselho Federal de Medicina que regula o exame de corpo de delito em presos.',
      'um manual das Nações Unidas que estabelece padrões internacionais para a investigação e a documentação eficazes, legais e médico-legais, de alegações de tortura e de outros tratamentos ou penas cruéis, desumanos ou degradantes.',
      'a lei turca que serviu de modelo para a Lei 9.455/1997.',
      'um protocolo adicional à Convenção Europeia de Direitos Humanos, sem aplicação fora da Europa.',
    ],
    correta: 2,
    comentario:
      'O Protocolo de Istambul é o “Manual sobre Investigação e Documentação Eficazes de Tortura e Outras Penas ou Tratamentos Cruéis, Desumanos ou Degradantes” (tradução do CNJ, 2024). Endossado pela Alta Comissária da ONU em 1999, entrou na série de capacitação profissional do OHCHR em 2001, foi atualizado em 2004 e revisto em 2022. Não é tratado, lei turca, protocolo europeu nem norma do CFM: é um manual de padrões internacionais.',
    fundamento: 'Protocolo de Istambul (ONU/OHCHR, 2022; trad. CNJ, 2024), apresentação',
  },
  {
    id: 'lg-tortura-abuso-q04',
    temaId: 'lg-tortura-abuso',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado:
      'Segundo o Protocolo de Istambul, ao interpretar os achados clínicos, o perito classifica como ______ o achado que poderia ter sido causado pela tortura alegada, havendo poucas outras causas possíveis. Assinale a alternativa que preenche corretamente a lacuna.',
    alternativas: ['“consistente com”', '“típico de”', '“diagnóstico de”', '“altamente consistente com”', '“não consistente com”'],
    correta: 3,
    comentario:
      'O par. 380 traz cinco níveis de consistência: “não consistente com” (não pode ter sido causado pela tortura alegada); “consistente com” (pode, mas é inespecífico e há muitas outras causas); “altamente consistente com” (pode, e há poucas outras causas); “típico de” (normalmente observado nesse tipo de tortura, mas há outras causas); “diagnóstico de” (não poderia ter sido causado de outra forma).',
    fundamento: 'Protocolo de Istambul (ONU/OHCHR, 2022; trad. CNJ, 2024), cap. IV, par. 380',
  },
  {
    id: 'lg-tortura-abuso-q05',
    temaId: 'lg-tortura-abuso',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado: 'Sobre a Lei de Abuso de Autoridade (Lei 13.869/2019), assinale a alternativa correta.',
    alternativas: [
      'Os crimes nela previstos são de ação penal pública condicionada à representação do ofendido.',
      'Admite-se a modalidade culposa em todos os crimes de abuso de autoridade.',
      'Só pode ser sujeito ativo o servidor público ocupante de cargo efetivo.',
      'A perda do cargo é efeito automático já na primeira condenação.',
      'A divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade.',
    ],
    correta: 4,
    comentario:
      'O art. 1º, § 2º, afasta o crime na divergência interpretativa, e o § 1º exige finalidade específica de prejudicar, beneficiar ou agir por capricho ou satisfação pessoal — não há forma culposa. A ação é pública incondicionada (art. 3º); o sujeito ativo é qualquer agente público, servidor ou não (art. 2º); a perda do cargo depende de reincidência e de declaração motivada (art. 4º, parágrafo único).',
    fundamento: 'Lei 13.869/2019, arts. 1º, §§ 1º e 2º; 2º; 3º; 4º, parágrafo único',
  },
  {
    id: 'lg-tortura-abuso-q06',
    temaId: 'lg-tortura-abuso',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Agente público, mediante grave ameaça, obriga o plantonista de um hospital a registrar a admissão para tratamento de pessoa que já chegou morta, com o fim de alterar o local e o momento de um crime e prejudicar sua apuração. A conduta do agente configura:',
    alternativas: [
      'crime de abuso de autoridade, punido com detenção de 1 a 4 anos e multa, além da pena correspondente à violência.',
      'crime de tortura, por causar sofrimento mental ao médico.',
      'mera infração disciplinar, sem repercussão penal.',
      'crime de prevaricação, pois o agente deixou de praticar ato de ofício.',
      'fato atípico, pois o médico poderia ter recusado a admissão.',
    ],
    correta: 0,
    comentario:
      'É o tipo do art. 24 da Lei 13.869/2019: constranger, sob violência ou grave ameaça, funcionário ou empregado de instituição hospitalar pública ou privada a admitir para tratamento pessoa cujo óbito já tenha ocorrido, para alterar local ou momento de crime. A pena é detenção de 1 a 4 anos e multa, além da pena da violência. A finalidade descrita não é a da tortura.',
    fundamento: 'Lei 13.869/2019, art. 24',
  },
  {
    id: 'lg-tortura-abuso-q07',
    temaId: 'lg-tortura-abuso',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A Lei 9.455/1997 prevê como crime de tortura submeter mulher, reiteradamente, a intenso sofrimento físico ou mental, no contexto de violência doméstica e familiar, sem prejuízo das penas correspondentes a outras infrações penais.',
    gabaritoCE: true,
    comentario:
      'Certo. O inciso III do art. 1º foi incluído pela Lei 15.410/2026, com a mesma pena das demais formas: reclusão de 2 a 8 anos. O tipo exige reiteração e o contexto de violência doméstica e familiar.',
    fundamento: 'Lei 9.455/1997, art. 1º, III',
  },
  {
    id: 'lg-tortura-abuso-q08',
    temaId: 'lg-tortura-abuso',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Perito examina pessoa que alega ter sido torturada há vários meses e não encontra lesões físicas nem achados psicológicos relevantes. Segundo o Protocolo de Istambul (2022), o perito deve:',
    alternativas: [
      'concluir que a tortura não ocorreu, pois o laudo deve basear-se exclusivamente em achados objetivos.',
      'classificar a alegação como “não consistente com” tortura, já que nada foi encontrado.',
      'emitir opinião sobre a credibilidade do examinado, já que não há evidência clínica.',
      'registrar que a ausência de evidências físicas ou psicológicas não significa que a tortura não tenha ocorrido e documentar os fatores que podem explicar essa ausência.',
      'descartar a alegação se não houver critérios diagnósticos de transtorno de estresse pós-traumático.',
    ],
    correta: 3,
    comentario:
      'O par. 390 afirma que a ausência de evidência física ou psicológica não significa que a tortura não ocorreu e que documentar os fatores dessa ausência ajuda a corroborar a alegação. Usar a falta de achados, inclusive de critérios de TEPT, para exonerar acusados é uso indevido do Protocolo. “Não consistente com” qualifica um achado que não pode ter sido causado pela tortura alegada (par. 380), e não a falta de achados. O clínico não deve opinar sobre credibilidade (par. 389).',
    fundamento: 'Protocolo de Istambul (ONU/OHCHR, 2022; trad. CNJ, 2024), cap. IV, pars. 380, 389 e 390',
  },
  {
    id: 'lg-tortura-abuso-q09',
    temaId: 'lg-tortura-abuso',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    enunciado: 'Segundo os Princípios de Istambul, reproduzidos no Protocolo de Istambul (2022), o exame médico de pessoa que alega ter sofrido tortura:',
    alternativas: [
      'exige consentimento informado prévio e deve ser realizado em privado, sob o controle do perito e fora da presença de agentes de segurança e de outros funcionários do governo.',
      'deve ser acompanhado pelos agentes da escolta, para garantir a segurança do perito.',
      'dispensa o consentimento informado quando requisitado por autoridade policial.',
      'deve ser feito na presença do suposto agressor, para assegurar o contraditório.',
      'dispensa relatório escrito quando não houver lesões aparentes.',
    ],
    correta: 0,
    comentario:
      'O par. 199 manda o perito obter consentimento informado antes de qualquer exame e realizá-lo em privado, sob seu controle e fora da presença de agentes de segurança e de outros funcionários do governo. Por isso a presença da escolta ou do suposto agressor e a dispensa de consentimento estão erradas. O mesmo parágrafo exige que o perito prepare prontamente um relatório escrito preciso, haja ou não lesões.',
    fundamento: 'Protocolo de Istambul (ONU/OHCHR, 2022; trad. CNJ, 2024), cap. III, seção B, par. 199',
  },

  /* ---------- lg-direitos-humanos ---------- */
  {
    id: 'lg-direitos-humanos-q01',
    temaId: 'lg-direitos-humanos',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'A Declaração Universal dos Direitos Humanos foi:',
    alternativas: [
      'assinada em 1969, em São José da Costa Rica, pelos Estados americanos.',
      'proclamada pela Assembleia Geral das Nações Unidas em 10 de dezembro de 1948, por meio da Resolução 217 A (III).',
      'promulgada no Brasil pelo Decreto 678/1992, com status de emenda constitucional.',
      'aprovada pelo Conselho de Segurança da ONU em 1945, junto com a Carta das Nações Unidas.',
      'elaborada pela Corte Interamericana de Direitos Humanos em 1978.',
    ],
    correta: 1,
    comentario:
      'A DUDH foi adotada e proclamada pela Assembleia Geral da ONU em 10/12/1948, pela Resolução 217 A (III). A Convenção Americana é de 22/11/1969 e foi promulgada no Brasil pelo Decreto 678/1992. A Carta da ONU é de 1945, e a Corte Interamericana não elabora declarações.',
    fundamento: 'DUDH, preâmbulo (Resolução 217 A (III), de 10/12/1948)',
  },
  {
    id: 'lg-direitos-humanos-q02',
    temaId: 'lg-direitos-humanos',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo sobre a Convenção Americana sobre Direitos Humanos e o Brasil:\n\nI. A Convenção foi promulgada no Brasil pelo Decreto 678/1992.\nII. Ao aderir, o Brasil declarou que as visitas e inspeções in loco da Comissão Interamericana dependem de sua anuência expressa.\nIII. O Brasil reconheceu a competência obrigatória da Corte Interamericana para fatos posteriores a 10 de dezembro de 1998.\nIV. A Convenção foi aprovada pelo rito do art. 5º, § 3º, da Constituição e equivale a emenda constitucional.\n\nQuais estão corretas?',
    alternativas: ['Apenas I e II.', 'Apenas I e IV.', 'Apenas I, II e III.', 'Apenas II, III e IV.', 'I, II, III e IV.'],
    correta: 2,
    comentario:
      'I e II estão no Decreto 678/1992 (arts. 1º e 2º); III, no Decreto 4.463/2002. A IV está errada: a Convenção é anterior à EC 45/2004 e não passou pelo rito do art. 5º, § 3º; o STF lhe reconhece status supralegal (RE 466.343), entendimento reafirmado pela Súmula Vinculante 25.',
    fundamento: 'Decreto 678/1992, arts. 1º e 2º; Decreto 4.463/2002, art. 1º; CF/88, art. 5º, § 3º; STF, RE 466.343',
  },
  {
    id: 'lg-direitos-humanos-q03',
    temaId: 'lg-direitos-humanos',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Quanto à prisão por dívida, a Convenção Americana sobre Direitos Humanos estabelece que:',
    alternativas: [
      'ninguém deve ser detido por dívida, princípio que não limita os mandados judiciais expedidos em virtude de inadimplemento de obrigação alimentar.',
      'a prisão civil é admitida para o devedor de alimentos e para o depositário infiel.',
      'a prisão por dívida é vedada em qualquer hipótese, inclusive a alimentar.',
      'a prisão civil é admitida para dívidas fiscais, desde que decretada por juiz.',
      'cada Estado pode prever livremente a prisão civil, por se tratar de matéria interna.',
    ],
    correta: 0,
    comentario:
      'O art. 7.7 da Convenção proíbe a detenção por dívida, ressalvando apenas o inadimplemento de obrigação alimentar. Por isso o STF editou a Súmula Vinculante 25, que declara ilícita a prisão civil do depositário infiel, embora o art. 5º, LXVII, da CF ainda a mencione.',
    fundamento: 'Decreto 678/1992 (Convenção Americana), art. 7.7; Súmula Vinculante 25',
  },
  {
    id: 'lg-direitos-humanos-q04',
    temaId: 'lg-direitos-humanos',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Pela Convenção Americana sobre Direitos Humanos, têm direito de submeter caso à decisão da Corte Interamericana de Direitos Humanos:',
    alternativas: [
      'qualquer pessoa, grupo de pessoas ou organização não governamental.',
      'apenas a vítima da violação, por meio de advogado.',
      'os Ministérios Públicos dos Estados-Partes.',
      'somente os Estados-Partes e a Comissão Interamericana.',
      'o Secretário-Geral da ONU e a Assembleia Geral da OEA.',
    ],
    correta: 3,
    comentario:
      'O art. 61.1 reserva aos Estados-Partes e à Comissão o direito de submeter casos à Corte, depois de esgotados os procedimentos dos arts. 48 a 50. Pessoas, grupos e ONGs apresentam petições à Comissão (art. 44), e não diretamente à Corte.',
    fundamento: 'Decreto 678/1992 (Convenção Americana), arts. 44 e 61',
  },
  {
    id: 'lg-direitos-humanos-q05',
    temaId: 'lg-direitos-humanos',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado: 'Sobre o direito à vida na Convenção Americana sobre Direitos Humanos (art. 4º), é correto afirmar que',
    alternativas: [
      'a pena de morte pode ser restabelecida nos Estados que a aboliram, desde que por lei anterior ao delito.',
      'a pena de morte pode ser aplicada a delitos políticos, se graves.',
      'a vida deve ser protegida pela lei, obrigatoriamente, desde o nascimento com vida.',
      'a pena de morte pode ser executada enquanto pendente pedido de indulto, se a sentença for final.',
      'não se deve impor a pena de morte a pessoa que, no momento do delito, for menor de 18 ou maior de 70 anos, nem aplicá-la a mulher em estado de gravidez.',
    ],
    correta: 4,
    comentario:
      'É o art. 4.5. O art. 4.3 proíbe restabelecer a pena de morte onde abolida; o 4.4 a veda para delitos políticos e comuns conexos; o 4.1 protege a vida “em geral, desde o momento da concepção”; e o 4.6 impede a execução enquanto pendente pedido de anistia, indulto ou comutação.',
    fundamento: 'Decreto 678/1992 (Convenção Americana), art. 4º, itens 1 a 6',
  },
  {
    id: 'lg-direitos-humanos-q06',
    temaId: 'lg-direitos-humanos',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'Uma médica de família prepara uma roda de conversa sobre saúde e direitos humanos com gestantes da sua área. Está de acordo com a Declaração Universal dos Direitos Humanos a seguinte afirmação:',
    alternativas: [
      'A educação deve ser gratuita em todos os graus, inclusive o superior.',
      'A maternidade e a infância têm direito a cuidados e assistência especiais, e todas as crianças, nascidas dentro ou fora do matrimônio, gozam da mesma proteção social.',
      'O direito de procurar asilo pode ser invocado também em caso de perseguição legitimamente motivada por crimes de direito comum.',
      'A pessoa acusada de ato delituoso deve provar sua inocência em julgamento público.',
      'Ninguém será privado de sua nacionalidade, sendo vedado mudar de nacionalidade.',
    ],
    correta: 1,
    comentario:
      'É o art. XXV, que também garante padrão de vida capaz de assegurar saúde e bem-estar, inclusive cuidados médicos. A educação é gratuita pelo menos nos graus elementares e fundamentais, e a superior é acessível com base no mérito (XXVI). O asilo não pode ser invocado por perseguição motivada por crimes de direito comum (XIV). O acusado é presumido inocente (XI). Ninguém será arbitrariamente privado da nacionalidade nem do direito de mudá-la (XV).',
    fundamento: 'DUDH, arts. XI, XIV, XV, XXV e XXVI',
  },
  {
    id: 'lg-direitos-humanos-q07',
    temaId: 'lg-direitos-humanos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Segundo a Convenção Americana sobre Direitos Humanos, a Comissão Interamericana compõe-se de sete membros, e qualquer pessoa, grupo de pessoas ou entidade não governamental legalmente reconhecida pode apresentar-lhe petições com denúncias de violação da Convenção por um Estado-Parte.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 34 fixa em sete o número de membros da Comissão, e o art. 44 assegura a qualquer pessoa, grupo de pessoas ou ONG legalmente reconhecida o direito de petição. A Corte também tem sete juízes (art. 52).',
    fundamento: 'Decreto 678/1992 (Convenção Americana), arts. 34 e 44',
  },
  {
    id: 'lg-direitos-humanos-q08',
    temaId: 'lg-direitos-humanos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A Declaração Universal dos Direitos Humanos é um tratado internacional ratificado pelo Brasil, promulgado por decreto presidencial e incorporado ao ordenamento com status de emenda constitucional.',
    gabaritoCE: false,
    comentario:
      'Errado. A DUDH é uma resolução da Assembleia Geral da ONU (Resolução 217 A (III), de 1948), proclamada como ideal comum a ser atingido por todos os povos; não é tratado sujeito a ratificação nem foi aprovada pelo rito do art. 5º, § 3º, da CF.',
    fundamento: 'DUDH, preâmbulo; CF/88, art. 5º, § 3º',
  },
  {
    id: 'lg-direitos-humanos-q09',
    temaId: 'lg-direitos-humanos',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Em caso de guerra, de perigo público ou de outra emergência que ameace a independência ou a segurança do Estado-Parte, a Convenção Americana sobre Direitos Humanos permite suspender certas obrigações (art. 27). Entre os direitos que NÃO podem ser suspensos estão:',
    alternativas: [
      'a liberdade de pensamento e de expressão e o direito de reunião.',
      'o direito à vida, o direito de circulação e de residência e o direito de reunião.',
      'o direito à vida, o direito à integridade pessoal e a proibição da escravidão e da servidão.',
      'a liberdade de associação, o direito à propriedade privada e a liberdade de expressão.',
      'o direito à integridade pessoal, o direito à propriedade privada e o direito de circulação.',
    ],
    correta: 2,
    comentario:
      'O art. 27.2 proíbe suspender os direitos dos arts. 3 (personalidade jurídica), 4 (vida), 5 (integridade pessoal), 6 (escravidão e servidão), 9 (legalidade), 12 (consciência e religião), 17 (família), 18 (nome), 19 (criança), 20 (nacionalidade) e 23 (políticos), além das garantias indispensáveis a eles. Expressão (13), reunião (15), associação (16), propriedade (21) e circulação e residência (22) não estão nessa lista.',
    fundamento: 'Decreto 678/1992 (Convenção Americana), art. 27, itens 1 e 2',
  },
];
