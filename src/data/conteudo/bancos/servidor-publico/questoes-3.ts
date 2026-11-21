import type { QuestaoTreino } from '../../../types';

/* Legislação municipal (regras constitucionais comuns e estatuto hipotético) e EBSERH */

export const QUESTOES_3: QuestaoTreino[] = [
  /* ---------- srv-municipal ---------- */
  {
    id: 'srv-municipal-q01',
    temaId: 'srv-municipal',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Segundo a Constituição Federal, o Município reger-se-á por lei orgânica:',
    alternativas: [
      'votada em turno único, aprovada por maioria absoluta da Câmara Municipal e sancionada pelo Prefeito.',
      'votada em dois turnos, com interstício de trinta dias, aprovada por três quintos dos vereadores e promulgada pelo Prefeito.',
      'aprovada pela Assembleia Legislativa do Estado, por maioria simples.',
      'votada em dois turnos, com o interstício mínimo de dez dias, e aprovada por dois terços dos membros da Câmara Municipal, que a promulgará.',
      'votada em dois turnos, aprovada por maioria absoluta e sancionada pelo Prefeito.',
    ],
    correta: 3,
    comentario:
      'É a regra do art. 29, caput, da CF: dois turnos, interstício mínimo de 10 dias, aprovação por 2/3 dos membros da Câmara, que a promulga. Não há sanção do Prefeito, e o quórum de 3/5 é o das emendas à Constituição Federal (art. 60, § 2º).',
    fundamento: 'CF/88, art. 29, caput',
  },
  {
    id: 'srv-municipal-q02',
    temaId: 'srv-municipal',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'Segundo a Constituição Federal, o julgamento do Prefeito ocorre perante o Tribunal de Justiça.',
    gabaritoCE: true,
    comentario:
      'O art. 29, X, da CF prevê o julgamento do Prefeito perante o Tribunal de Justiça. As Leis Orgânicas repetem a regra, e as bancas costumam trocar o tribunal (TRF, STJ) ou o órgão (Câmara Municipal) nos distratores.',
    fundamento: 'CF/88, art. 29, X',
  },
  {
    id: 'srv-municipal-q03',
    temaId: 'srv-municipal',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 2,
    enunciado:
      'Considere um estatuto hipotético de servidores do Município X com as seguintes regras: (1) a posse ocorrerá em 20 dias da publicação do ato de nomeação, prorrogáveis por 10 dias a requerimento do interessado; (2) o servidor entrará em exercício em 10 dias contados da posse; (3) será exonerado o servidor que não entrar em exercício no prazo. A nomeação de um médico foi publicada em 1º de março; ele requereu a prorrogação, tomou posse em 25 de março e entrou em exercício em 8 de abril. Com base apenas nesse estatuto, é correto afirmar que:',
    alternativas: [
      'a posse é nula, pois ocorreu após 20 dias da publicação.',
      'a posse e o exercício são válidos, pois o exercício ocorreu dentro de 15 dias da posse.',
      'a posse é válida, mas o servidor deve ser exonerado, pois entrou em exercício depois de 10 dias da posse.',
      'a nomeação deve ser tornada sem efeito, pois o exercício ocorreu mais de 30 dias após a publicação.',
      'a posse é válida, e o atraso no exercício gera apenas advertência.',
    ],
    correta: 2,
    comentario:
      'Com a prorrogação, o prazo de posse foi a 30 dias (até 31 de março), e a posse em 25 de março é válida. O exercício deveria ocorrer até 4 de abril (10 dias da posse); em 8 de abril, venceu, e a regra (3) manda exonerar. Os 15 dias da Lei 8.112 não se aplicam: em questão de estatuto hipotético, vale só o enunciado.',
    fundamento: 'Estatuto hipotético do enunciado (regras 1 a 3); por analogia, Lei 8.112/1990, art. 15, § 2º',
  },
  {
    id: 'srv-municipal-q04',
    temaId: 'srv-municipal',
    formato: 'multipla',
    estilo: 'ibam',
    dificuldade: 2,
    enunciado:
      'Um médico ocupa cargo efetivo de médico em uma prefeitura. Segundo a Constituição Federal, havendo compatibilidade de horários, ele poderá acumular remuneradamente esse cargo com:',
    alternativas: [
      'outro cargo ou emprego privativo de profissional de saúde, com profissão regulamentada.',
      'qualquer outro cargo público, desde que de nível superior.',
      'apenas outro cargo de médico, na mesma esfera de governo.',
      'nenhum outro cargo, pois a acumulação é vedada aos profissionais de saúde.',
      'outro cargo de qualquer natureza, desde que seja em comissão.',
    ],
    correta: 0,
    comentario:
      'O art. 37, XVI, “c”, da CF permite acumular dois cargos ou empregos privativos de profissionais de saúde com profissões regulamentadas, desde que haja compatibilidade de horários e respeito ao teto (inciso XI). Não há exigência de mesma esfera de governo (C), nem basta ser cargo de nível superior (B) ou em comissão (E), e a acumulação na saúde é expressamente permitida (D). Além desta, o médico também poderia acumular com um cargo de professor (alínea “b”, redação da EC 138/2025), hipótese que não está entre as alternativas.',
    fundamento: 'CF/88, art. 37, XVI, “b” e “c”',
  },
  {
    id: 'srv-municipal-q05',
    temaId: 'srv-municipal',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O parecer prévio, emitido pelo órgão competente sobre as contas que o Prefeito deve anualmente prestar, só deixará de prevalecer por decisão da maioria absoluta dos membros da Câmara Municipal.',
    gabaritoCE: false,
    comentario:
      'O quórum é de dois terços dos membros da Câmara Municipal (CF, art. 31, § 2º). O mesmo artigo prevê que as contas fiquem 60 dias por ano à disposição de qualquer contribuinte (§ 3º).',
    fundamento: 'CF/88, art. 31, §§ 2º e 3º',
  },
  {
    id: 'srv-municipal-q06',
    temaId: 'srv-municipal',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado:
      'A Constituição Federal assegura a iniciativa popular de projetos de lei de interesse específico do Município, da cidade ou de bairros, mediante manifestação de, pelo menos:',
    alternativas: [
      '1% do eleitorado nacional.',
      '5% do eleitorado.',
      '10% do eleitorado.',
      '3% do eleitorado, distribuído em pelo menos três bairros.',
      '2% dos eleitores do Município.',
    ],
    correta: 1,
    comentario:
      'O art. 29, XIII, da CF exige 5% do eleitorado. O 1% do eleitorado nacional é o da iniciativa popular de leis federais (art. 61, § 2º). A Lei Orgânica repete a regra municipal e às vezes detalha o procedimento.',
    fundamento: 'CF/88, art. 29, XIII',
  },
  {
    id: 'srv-municipal-q07',
    temaId: 'srv-municipal',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Na redação atual da Constituição Federal, é permitida, havendo compatibilidade de horários, a acumulação remunerada de um cargo de professor com outro de qualquer natureza.',
    gabaritoCE: true,
    comentario:
      'A EC 138/2025, promulgada em 19/12/2025, deu nova redação ao art. 37, XVI, “b”: “a de um cargo de professor com outro de qualquer natureza”. Continuam exigidos a compatibilidade de horários e o teto do inciso XI. Antes, a alínea falava em cargo “técnico ou científico”, redação que ainda aparece em materiais anteriores a 2026.',
    fundamento: 'CF/88, art. 37, XVI, “b” (redação da EC 138/2025)',
  },
  {
    id: 'srv-municipal-q08',
    temaId: 'srv-municipal',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'Segundo a Constituição Federal, extinto o cargo ou declarada a sua desnecessidade, o servidor estável:',
    alternativas: [
      'será exonerado, com indenização de um mês de remuneração por ano de serviço.',
      'ficará em disponibilidade com remuneração integral, até ser aposentado.',
      'será demitido, assegurada a ampla defesa.',
      'será reconduzido automaticamente ao cargo que ocupava anteriormente.',
      'ficará em disponibilidade, com remuneração proporcional ao tempo de serviço, até seu adequado aproveitamento em outro cargo.',
    ],
    correta: 4,
    comentario:
      'É a regra do art. 41, § 3º, da CF, que os estatutos municipais repetem: disponibilidade com remuneração proporcional ao tempo de serviço até o aproveitamento. Exoneração e demissão não se aplicam ao caso, e a recondução tem outras hipóteses (inabilitação em estágio de outro cargo ou reintegração do anterior ocupante).',
    fundamento: 'CF/88, art. 41, § 3º',
  },

  /* ---------- srv-ebserh ---------- */
  {
    id: 'srv-ebserh-q01',
    temaId: 'srv-ebserh',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Nos termos da Lei 12.550/2011, a Empresa Brasileira de Serviços Hospitalares (EBSERH) é:',
    alternativas: [
      'autarquia federal vinculada ao Ministério da Saúde.',
      'fundação pública de direito privado vinculada ao Ministério da Educação.',
      'empresa pública unipessoal, com personalidade jurídica de direito privado e patrimônio próprio, vinculada ao Ministério da Educação.',
      'sociedade de economia mista com participação de estados e municípios.',
      'agência executiva vinculada ao Ministério da Saúde.',
    ],
    correta: 2,
    comentario:
      'O art. 1º da Lei 12.550/2011 autoriza a criação da EBSERH como empresa pública unipessoal, de direito privado, com patrimônio próprio, vinculada ao MEC e com prazo indeterminado. O capital é integralmente da União (art. 2º), o que exclui a sociedade de economia mista.',
    fundamento: 'Lei 12.550/2011, arts. 1º e 2º',
  },
  {
    id: 'srv-ebserh-q02',
    temaId: 'srv-ebserh',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Os empregados do quadro permanente da EBSERH são regidos pela Lei 8.112/1990, por se tratar de entidade vinculada ao Ministério da Educação.',
    gabaritoCE: false,
    comentario:
      'O regime de pessoal permanente da EBSERH é o da CLT, com contratação condicionada a concurso público de provas ou de provas e títulos (art. 10). A vinculação ao MEC não muda a natureza de empresa pública de direito privado.',
    fundamento: 'Lei 12.550/2011, art. 10',
  },
  {
    id: 'srv-ebserh-q03',
    temaId: 'srv-ebserh',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado: 'Sobre a EBSERH, de acordo com a Lei 12.550/2011, assinale a alternativa correta.',
    alternativas: [
      'As atividades de prestação de serviços de assistência à saúde estão inseridas integral e exclusivamente no âmbito do SUS.',
      'Seu capital social pertence majoritariamente à União, admitida a participação privada minoritária.',
      'Pode cobrar dos usuários do SUS pelos atendimentos de alta complexidade.',
      'Sua contratação pela administração pública exige sempre licitação.',
      'Está sujeita apenas ao controle interno do Poder Executivo, sem controle do Tribunal de Contas da União.',
    ],
    correta: 0,
    comentario:
      'O art. 3º, § 1º, insere a assistência integral e exclusivamente no SUS, e os serviços são gratuitos (caput). O capital é integralmente da União (art. 2º); a contratação da EBSERH pela administração dispensa licitação (art. 5º); e há controle externo do Congresso com auxílio do TCU (art. 14).',
    fundamento: 'Lei 12.550/2011, arts. 2º, 3º, 5º e 14',
  },
  {
    id: 'srv-ebserh-q04',
    temaId: 'srv-ebserh',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Segundo a Lei 12.550/2011, a EBSERH será administrada:',
    alternativas: [
      'por um Conselho Curador e por uma Presidência eleita pelos empregados.',
      'por um Conselho de Administração, com funções deliberativas, e por uma Diretoria Executiva, contando ainda com um Conselho Fiscal e um Conselho Consultivo.',
      'por uma Assembleia Geral de acionistas e por um Conselho Fiscal.',
      'pelos reitores das universidades federais contratantes, em sistema de rodízio.',
      'diretamente pelo Ministério da Saúde, por meio de secretaria própria.',
    ],
    correta: 1,
    comentario:
      'O art. 9º prevê Conselho de Administração (deliberativo) e Diretoria Executiva na administração, além de Conselho Fiscal e Conselho Consultivo. A composição e o funcionamento desses órgãos ficam no estatuto social (§ 1º), aprovado por ato do Poder Executivo (§ 5º).',
    fundamento: 'Lei 12.550/2011, art. 9º',
  },
  {
    id: 'srv-ebserh-q05',
    temaId: 'srv-ebserh',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'É dispensada a licitação para a contratação da EBSERH pela administração pública para realizar atividades relacionadas ao seu objeto social.',
    gabaritoCE: true,
    comentario:
      'Reprodução do art. 5º da Lei 12.550/2011. A relação com a universidade é formalizada por contrato com metas, indicadores, prazos e sistemática de avaliação, respeitada a autonomia universitária (art. 6º).',
    fundamento: 'Lei 12.550/2011, arts. 5º e 6º',
  },
  {
    id: 'srv-ebserh-q06',
    temaId: 'srv-ebserh',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Carlos é servidor titular de cargo efetivo de médico em uma universidade federal que firmou contrato com a EBSERH para a gestão do seu hospital universitário. No âmbito desse contrato, Carlos foi cedido à empresa para atividades de assistência à saúde. Segundo a Lei 12.550/2011:',
    alternativas: [
      'Carlos perde o vínculo estatutário e passa automaticamente a empregado celetista da EBSERH.',
      'a cessão é vedada, porque a EBSERH só pode ter pessoal admitido por concurso próprio.',
      'Carlos passa a receber exclusivamente a remuneração dos empregos da EBSERH, sem as vantagens do cargo de origem.',
      'ficam assegurados a Carlos os direitos e as vantagens a que faça jus no órgão ou entidade de origem.',
      'a cessão depende de lei específica para cada servidor cedido.',
    ],
    correta: 3,
    comentario:
      'O art. 7º permite ceder à EBSERH os servidores titulares de cargo efetivo da instituição de ensino que exerçam atividades ligadas ao objeto da empresa, para assistência à saúde e atividades administrativas, assegurados os direitos e vantagens do órgão de origem (§ 1º). A cessão não transforma o vínculo em celetista.',
    fundamento: 'Lei 12.550/2011, art. 7º, caput e § 1º',
  },
  {
    id: 'srv-ebserh-q07',
    temaId: 'srv-ebserh',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'Em relação ao atendimento de consumidores de planos privados de assistência à saúde e seus dependentes, a Lei 12.550/2011 assegura à EBSERH:',
    alternativas: [
      'a cobrança direta do paciente, pela tabela do hospital.',
      'a recusa de atendimento, salvo em urgência.',
      'a reserva de 30% dos leitos para beneficiários de planos privados.',
      'o atendimento em ala privativa, fora do âmbito do SUS.',
      'o ressarcimento das despesas, na forma do art. 32 da Lei 9.656/1998, observados os valores de referência da ANS.',
    ],
    correta: 4,
    comentario:
      'O art. 3º, § 3º, assegura o ressarcimento das despesas pela via do art. 32 da Lei 9.656/1998, com os valores de referência da ANS. A assistência é gratuita e exclusivamente no SUS (art. 3º, caput e § 1º), o que exclui cobrança do paciente, ala privativa e reserva de leitos.',
    fundamento: 'Lei 12.550/2011, art. 3º, caput e §§ 1º e 3º',
  },
];
