import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Processo Penal: inquérito e ação penal, prisões, provas e perícias
 * ------------------------------------------------------------------ */

export const QUESTOES_2: QuestaoTreino[] = [
  /* ---------- dpp-inquerito-acao ---------- */
  {
    id: 'dpp-inquerito-acao-q01',
    temaId: 'dpp-inquerito-acao',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Segundo a regra geral do Código de Processo Penal, o inquérito policial deve terminar no prazo de:',
    alternativas: [
      '10 dias, se o indiciado estiver preso, contado o prazo da execução da ordem de prisão, ou 30 dias, se estiver solto.',
      '15 dias, se o indiciado estiver preso, ou 30 dias, se estiver solto.',
      '10 dias, contados da instauração, esteja o indiciado preso ou solto.',
      '30 dias, se o indiciado estiver preso, ou 90 dias, se estiver solto.',
      '5 dias, se o indiciado estiver preso, ou 15 dias, se estiver solto.',
    ],
    correta: 0,
    comentario:
      'O art. 10 do CPP fixa 10 dias para o indiciado preso em flagrante ou preventivamente, contados do dia em que se executar a ordem de prisão, e 30 dias para o solto, com ou sem fiança. Os prazos de 30 e 90 dias são da Lei de Drogas (art. 51). Os de 5 e 15 dias são do oferecimento da denúncia (art. 46).',
    fundamento: 'CPP, art. 10',
  },
  {
    id: 'dpp-inquerito-acao-q02',
    temaId: 'dpp-inquerito-acao',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 1,
    enunciado:
      'Concluídas as investigações, o delegado entende que o fato é atípico e pretende encerrar o inquérito. Segundo o CPP, é correto afirmar que',
    alternativas: [
      'o delegado pode arquivar o inquérito, desde que fundamente a atipicidade.',
      'o delegado pode arquivar o inquérito se a vítima concordar expressamente.',
      'o delegado deve aguardar 30 dias e, sem manifestação da vítima, arquivar os autos.',
      'a autoridade policial não pode mandar arquivar autos de inquérito.',
      'o arquivamento, uma vez ordenado, impede novas pesquisas mesmo diante de novas provas.',
    ],
    correta: 3,
    comentario:
      'O art. 17 do CPP veda à autoridade policial mandar arquivar autos de inquérito. Ela elabora o relatório e remete os autos (art. 10, § 1º). Quem promove o arquivamento é o MP, que, segundo o STF, submete sua manifestação ao juiz competente (art. 28). A concordância da vítima ou o decurso de prazo não dão esse poder ao delegado. Mesmo após o arquivamento, a autoridade policial pode fazer novas pesquisas se tiver notícia de outras provas (art. 18).',
    fundamento: 'CPP, arts. 17 e 18',
  },
  {
    id: 'dpp-inquerito-acao-q03',
    temaId: 'dpp-inquerito-acao',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Nos crimes em que a ação penal pública depende de representação do ofendido, o inquérito policial:',
    alternativas: [
      'pode ser instaurado de ofício, devendo a representação ser colhida até o oferecimento da denúncia.',
      'não poderá ser iniciado sem a representação.',
      'pode ser instaurado por requisição do juiz, que supre a representação.',
      'pode ser instaurado a requerimento de qualquer pessoa do povo.',
      'só pode ser instaurado por requisição do Ministro da Justiça.',
    ],
    correta: 1,
    comentario:
      'O art. 5º, § 4º, do CPP é literal: o inquérito, nos crimes em que a ação pública depender de representação, não poderá sem ela ser iniciado. A instauração de ofício e por requisição vale para a ação pública incondicionada (art. 5º, I e II). A requisição do Ministro da Justiça é outra condição de procedibilidade, exigida apenas quando a lei a prevê.',
    fundamento: 'CPP, art. 5º, § 4º',
  },
  {
    id: 'dpp-inquerito-acao-q04',
    temaId: 'dpp-inquerito-acao',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado: 'Sobre a ação penal no Código de Processo Penal, assinale a alternativa correta.',
    alternativas: [
      'A representação é retratável até a sentença de primeiro grau.',
      'O prazo de decadência do direito de representação é de seis meses, contados sempre da data do fato.',
      'Cabe ação penal privada subsidiária da pública sempre que o Ministério Público promover o arquivamento do inquérito.',
      'Nos crimes praticados em detrimento do patrimônio da União, a ação penal depende de representação do ente lesado.',
      'A representação será irretratável depois de oferecida a denúncia.',
    ],
    correta: 4,
    comentario:
      'O art. 25 do CPP torna a representação irretratável depois de oferecida a denúncia. O prazo decadencial de 6 meses conta do dia em que o ofendido soube quem é o autor do crime, não da data do fato (art. 38). A ação privada subsidiária pressupõe inércia do MP no prazo legal, não arquivamento (art. 29). Crimes em detrimento do patrimônio ou interesse da União, Estado ou Município são de ação pública (art. 24, § 2º).',
    fundamento: 'CPP, arts. 24, § 2º, 25, 29 e 38',
  },
  {
    id: 'dpp-inquerito-acao-q05',
    temaId: 'dpp-inquerito-acao',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 1,
    enunciado:
      'O prazo para o oferecimento da denúncia, contado da data em que o Ministério Público recebe os autos do inquérito, é de',
    alternativas: [
      '10 dias com réu preso e 30 dias com réu solto.',
      '15 dias com réu preso e 30 dias com réu solto.',
      '5 dias com réu preso e 15 dias com réu solto ou afiançado.',
      '5 dias com réu preso e 10 dias com réu solto.',
      '3 dias com réu preso e 5 dias com réu solto.',
    ],
    correta: 2,
    comentario:
      'O art. 46 do CPP fixa 5 dias para réu preso e 15 dias para réu solto ou afiançado. Com réu solto, se o inquérito for devolvido para diligências (art. 16), o prazo conta da data em que o MP receber novamente os autos. Os prazos de 10 e 30 dias são de conclusão do inquérito (art. 10). O de 3 dias é o do aditamento da queixa (art. 46, § 2º).',
    fundamento: 'CPP, art. 46',
  },
  {
    id: 'dpp-inquerito-acao-q06',
    temaId: 'dpp-inquerito-acao',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado:
      'De acordo com a redação do art. 28 do CPP dada pela Lei 13.964/2019, se a vítima não concordar com o arquivamento do inquérito policial, ela poderá:',
    alternativas: [
      'interpor recurso em sentido estrito ao juiz, no prazo de 5 dias.',
      'ajuizar desde logo ação penal privada subsidiária da pública.',
      'recorrer ao chefe de Polícia, no prazo de 15 dias.',
      'no prazo de 30 dias do recebimento da comunicação, submeter a matéria à revisão da instância competente do órgão ministerial.',
      'nada fazer, pois apenas o investigado é comunicado do arquivamento.',
    ],
    correta: 3,
    comentario:
      'O art. 28, § 1º, permite à vítima ou ao representante legal, em 30 dias do recebimento da comunicação, submeter a matéria à revisão da instância competente do MP. A ação privada subsidiária exige inércia do MP, não arquivamento. O recurso ao chefe de Polícia (art. 5º, § 2º) ataca o indeferimento de abertura do inquérito. Nas ADIs 6.298, 6.299, 6.300 e 6.305, o STF deu interpretação conforme ao art. 28: o MP submete a manifestação de arquivamento ao juiz, que também pode levar a matéria à revisão ministerial se vir patente ilegalidade ou teratologia.',
    fundamento: 'CPP, art. 28, caput e § 1º',
  },
  {
    id: 'dpp-inquerito-acao-q07',
    temaId: 'dpp-inquerito-acao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Segundo a Lei 9.099/1995, a ação penal relativa ao crime de lesão corporal culposa depende, em regra, de representação do ofendido.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 88 da Lei 9.099/1995 determina que, além das hipóteses do CP e da legislação especial, depende de representação a ação penal relativa aos crimes de lesões corporais leves e lesões culposas. Exceção conhecida: na lesão culposa de trânsito com embriaguez, “racha” ou excesso de mais de 50 km/h, o art. 88 não se aplica (CTB, art. 291, § 1º).',
    fundamento: 'Lei 9.099/1995, art. 88; CTB, art. 291, § 1º',
  },
  {
    id: 'dpp-inquerito-acao-q08',
    temaId: 'dpp-inquerito-acao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'O inquérito policial é peça indispensável ao oferecimento da denúncia pelo Ministério Público.',
    gabaritoCE: false,
    comentario:
      'Errado. O inquérito é dispensável. O MP dispensa o inquérito se a representação traz elementos que o habilitem a promover a ação (art. 39, § 5º), e o prazo da denúncia pode correr a partir das peças de informação (art. 46, § 1º). O inquérito acompanha a denúncia apenas quando lhe serve de base (art. 12).',
    fundamento: 'CPP, arts. 12, 39, § 5º, e 46, § 1º',
  },
  {
    id: 'dpp-inquerito-acao-q09',
    temaId: 'dpp-inquerito-acao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Salvo disposição em contrário, o ofendido decai do direito de representação se não o exercer dentro de seis meses, contados da data em que o crime foi praticado.',
    gabaritoCE: false,
    comentario:
      'Errado. O prazo de 6 meses conta do dia em que o ofendido vier a saber quem é o autor do crime, e não da data do fato (art. 38, caput). Nos crimes de violência doméstica e familiar contra a mulher, o prazo é de 12 meses, com o mesmo termo inicial (art. 38, § 2º, incluído pela Lei 15.438/2026, que também acrescentou o parágrafo único ao art. 103 do CP).',
    fundamento: 'CPP, art. 38, caput e § 2º',
  },
  {
    id: 'dpp-inquerito-acao-q10',
    temaId: 'dpp-inquerito-acao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Logo que tiver conhecimento da prática da infração penal, a autoridade policial deverá dirigir-se ao local, providenciando para que não se alterem o estado e a conservação das coisas até a chegada dos peritos criminais, e apreender os objetos relacionados com o fato após liberados pelos peritos.',
    gabaritoCE: true,
    comentario:
      'Certo. É a redação do art. 6º, I e II, do CPP. A regra conversa com a cadeia de custódia: é proibido entrar em locais isolados ou remover vestígios antes da liberação pelo perito responsável (art. 158-C, § 2º).',
    fundamento: 'CPP, art. 6º, I e II',
  },

  /* ---------- dpp-prisoes ---------- */
  {
    id: 'dpp-prisoes-q01',
    temaId: 'dpp-prisoes',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'Duas horas após um roubo, sem que tenha havido perseguição, a polícia encontra o suspeito com a arma usada e os objetos subtraídos, em situação que faz presumir ser ele o autor. Trata-se de flagrante:',
    alternativas: ['próprio.', 'presumido (ficto).', 'impróprio (quase flagrante).', 'preparado.', 'diferido.'],
    correta: 1,
    comentario:
      'Ser encontrado, logo depois, com instrumentos, armas ou objetos que façam presumir a autoria é o flagrante presumido ou ficto (art. 302, IV). O próprio é o de quem está cometendo ou acaba de cometer a infração (incisos I e II). O impróprio exige perseguição logo após (inciso III). Preparado e diferido são classificações doutrinárias de outras situações.',
    fundamento: 'CPP, art. 302, IV',
  },
  {
    id: 'dpp-prisoes-q02',
    temaId: 'dpp-prisoes',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'Quanto à audiência de custódia, conforme a redação vigente do art. 310 do CPP (alterada pela Lei 15.358/2026), é correto afirmar que',
    alternativas: [
      'deve ser realizada em até 48 horas após a prisão, presencialmente.',
      'é facultativa, a critério do juiz, quando o preso tiver advogado constituído.',
      'deve ser realizada em até 24 horas após a prisão, por videoconferência em tempo real, com a presença do acusado, de seu defensor e do Ministério Público, cabendo ao juiz relaxar a prisão ilegal, convertê-la em preventiva ou conceder liberdade provisória.',
      'é presidida pelo delegado de polícia, que decide sobre a manutenção da prisão.',
      'só ocorre na prisão em flagrante por crime hediondo.',
    ],
    correta: 2,
    comentario:
      'O caput do art. 310, na redação da Lei 15.358/2026, prevê a audiência em até 24 horas após a prisão, por videoconferência em tempo real, com o acusado, seu defensor e o MP. O juiz relaxa a prisão ilegal, converte o flagrante em preventiva ou concede liberdade provisória (incisos I a III). O ato presencial fica para situações excepcionais de força maior (§ 13). Quem preside é o juiz, e não há restrição a crimes hediondos. A regra é questionada no STF (ADIs 7.952 e 7.956, entre outras), ainda sem decisão até a conferência.',
    fundamento: 'CPP, art. 310, caput, I a III e § 13 (Lei 15.358/2026)',
  },
  {
    id: 'dpp-prisoes-q03',
    temaId: 'dpp-prisoes',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Fora das hipóteses de crimes hediondos e equiparados, a prisão temporária prevista na Lei 7.960/1989 tem prazo de:',
    alternativas: [
      '5 dias, prorrogável por igual período em caso de extrema e comprovada necessidade.',
      '10 dias, improrrogável.',
      '30 dias, prorrogável por igual período.',
      '5 dias, improrrogável.',
      '15 dias, prorrogável uma única vez.',
    ],
    correta: 0,
    comentario:
      'O art. 2º da Lei 7.960/1989 fixa 5 dias, prorrogáveis por igual período em caso de extrema e comprovada necessidade. Nos crimes hediondos, na tortura, no tráfico e no terrorismo, o prazo é de 30 dias, prorrogável por igual período (Lei 8.072/1990, art. 2º, § 4º).',
    fundamento: 'Lei 7.960/1989, art. 2º; Lei 8.072/1990, art. 2º, § 4º',
  },
  {
    id: 'dpp-prisoes-q04',
    temaId: 'dpp-prisoes',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado: 'Sobre a prisão preventiva no CPP, assinale a alternativa correta.',
    alternativas: [
      'Pode ser decretada de ofício pelo juiz durante a investigação policial.',
      'É admitida nos crimes dolosos punidos com pena privativa de liberdade máxima superior a 2 anos.',
      'Pode ser decretada como antecipação do cumprimento da pena, se o crime for grave.',
      'Pode ser decretada ainda que as provas indiquem que o agente agiu em legítima defesa.',
      'Decretada, o órgão emissor deve revisar a necessidade de sua manutenção a cada 90 dias, de ofício, sob pena de tornar a prisão ilegal.',
    ],
    correta: 4,
    comentario:
      'O art. 316, parágrafo único, exige revisão a cada 90 dias, de ofício, sob pena de ilegalidade. A preventiva depende de requerimento do MP, do querelante ou do assistente, ou de representação policial (art. 311), sem decretação de ofício. Cabe nos crimes dolosos com pena máxima superior a 4 anos (art. 313, I). É vedada para antecipar pena (art. 313, § 2º) e quando o fato foi praticado sob excludente de ilicitude (art. 314).',
    fundamento: 'CPP, arts. 311, 313, I e § 2º, 314 e 316, parágrafo único',
  },
  {
    id: 'dpp-prisoes-q05',
    temaId: 'dpp-prisoes',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado: 'A autoridade policial poderá conceder fiança nos casos de infração cuja pena privativa de liberdade máxima',
    alternativas: [
      'não seja superior a 2 anos.',
      'seja superior a 4 anos, desde que o crime não seja hediondo.',
      'seja de detenção, qualquer que seja o seu limite.',
      'não seja superior a 4 anos.',
      'não seja superior a 8 anos.',
    ],
    correta: 3,
    comentario:
      'O art. 322 do CPP autoriza a autoridade policial a conceder fiança quando a pena máxima não for superior a 4 anos. Nos demais casos, a fiança é requerida ao juiz, que decide em 48 horas (parágrafo único). O limite de 2 anos define a infração de menor potencial ofensivo (Lei 9.099/1995, art. 61), não a fiança policial.',
    fundamento: 'CPP, art. 322',
  },
  {
    id: 'dpp-prisoes-q06',
    temaId: 'dpp-prisoes',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado:
      'Policiais recebem denúncia anônima de que haverá assalto a uma farmácia. Sem qualquer contato com os suspeitos, posicionam-se nas proximidades e os prendem quando, armados, anunciam o roubo ao balconista. Essa prisão é exemplo de flagrante',
    alternativas: [
      'preparado, que torna o crime impossível, conforme a Súmula 145 do STF.',
      'esperado, válido, pois a polícia apenas aguardou a prática do crime, sem provocá-la.',
      'forjado, pois a polícia tinha informação prévia.',
      'ilegal, pois a polícia deveria ter impedido os atos preparatórios.',
      'presumido, pois os agentes foram encontrados logo depois com armas.',
    ],
    correta: 1,
    comentario:
      'No flagrante esperado, a polícia apenas aguarda o crime, sem induzi-lo: a prisão é válida, aqui no inciso I do art. 302 (estava cometendo a infração). A Súmula 145 do STF trata do flagrante preparado, em que a polícia provoca o crime e torna impossível sua consumação. O flagrante forjado é a criação de provas falsas. O presumido exige que o agente seja encontrado logo depois do crime.',
    fundamento: 'CPP, art. 302, I; Súmula 145 do STF',
  },
  {
    id: 'dpp-prisoes-q07',
    temaId: 'dpp-prisoes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'O juiz pode decretar a prisão temporária de ofício, durante o inquérito policial.',
    gabaritoCE: false,
    comentario:
      'Errado. A temporária é decretada pelo juiz em face da representação da autoridade policial ou de requerimento do MP (Lei 7.960/1989, art. 2º, caput). Na representação policial, o juiz ouve antes o MP (§ 1º).',
    fundamento: 'Lei 7.960/1989, art. 2º, caput e § 1º',
  },
  {
    id: 'dpp-prisoes-q08',
    temaId: 'dpp-prisoes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A prisão preventiva não será decretada se o juiz verificar, pelas provas constantes dos autos, que o agente praticou o fato em legítima defesa.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 314 do CPP proíbe a preventiva quando as provas indicam que o fato foi praticado em estado de necessidade, legítima defesa, estrito cumprimento de dever legal ou exercício regular de direito (CP, art. 23, I a III).',
    fundamento: 'CPP, art. 314',
  },
  {
    id: 'dpp-prisoes-q09',
    temaId: 'dpp-prisoes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Entre as medidas cautelares diversas da prisão está a internação provisória do acusado nos crimes praticados com violência ou grave ameaça, quando os peritos concluírem ser ele inimputável ou semi-imputável e houver risco de reiteração.',
    gabaritoCE: true,
    comentario:
      'Certo. É o art. 319, VII, do CPP, que remete ao art. 26 do CP. A medida depende de conclusão pericial (inimputabilidade ou semi-imputabilidade), crime com violência ou grave ameaça e risco de reiteração.',
    fundamento: 'CPP, art. 319, VII',
  },
  {
    id: 'dpp-prisoes-q10',
    temaId: 'dpp-prisoes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Decorrido o prazo da prisão temporária contido no mandado, a autoridade responsável pela custódia só pode libertar o preso após receber alvará de soltura expedido pelo juiz.',
    gabaritoCE: false,
    comentario:
      'Errado. O art. 2º, § 7º, da Lei 7.960/1989 (redação da Lei 13.869/2019) manda pôr o preso imediatamente em liberdade, independentemente de nova ordem judicial, salvo se já comunicada a prorrogação da temporária ou a decretação da preventiva. O mandado deve conter o período da prisão e o dia da soltura (§ 4º-A).',
    fundamento: 'Lei 7.960/1989, art. 2º, §§ 4º-A e 7º',
  },

  /* ---------- dpp-provas ---------- */
  {
    id: 'dpp-provas-q01',
    temaId: 'dpp-provas',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Quando a infração deixar vestígios, segundo o art. 158 do CPP:',
    alternativas: [
      'a confissão do acusado supre o exame de corpo de delito.',
      'a prova testemunhal sempre pode substituir o exame de corpo de delito.',
      'será indispensável o exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado.',
      'só se admite o exame de corpo de delito direto.',
      'o exame é dispensável se o juiz estiver convencido da materialidade.',
    ],
    correta: 2,
    comentario:
      'O art. 158 torna indispensável o exame de corpo de delito, direto ou indireto, e proíbe supri-lo pela confissão. A prova testemunhal só supre o exame quando os vestígios desapareceram (art. 167), não sempre. A lei admite expressamente o exame indireto.',
    fundamento: 'CPP, arts. 158 e 167',
  },
  {
    id: 'dpp-provas-q02',
    temaId: 'dpp-provas',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Na falta de perito oficial, o exame de corpo de delito será realizado por:',
    alternativas: [
      '2 pessoas idôneas, portadoras de diploma de curso superior preferencialmente na área específica, que prestarão o compromisso de bem e fielmente desempenhar o encargo.',
      '1 pessoa idônea, portadora de diploma de curso superior, independentemente de compromisso.',
      '2 pessoas idôneas, de qualquer grau de escolaridade, escolhidas pela autoridade policial.',
      '3 profissionais de saúde, sendo ao menos um médico.',
      'assistente técnico indicado pelo Ministério Público.',
    ],
    correta: 0,
    comentario:
      'O art. 159, § 1º, prevê 2 pessoas idôneas, com diploma de curso superior preferencialmente na área específica, entre as que tiverem habilitação técnica relacionada à natureza do exame. O § 2º exige o compromisso. O assistente técnico é figura diversa, que atua após o laudo oficial (§ 4º).',
    fundamento: 'CPP, art. 159, §§ 1º e 2º',
  },
  {
    id: 'dpp-provas-q03',
    temaId: 'dpp-provas',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'De acordo com o CPP, o laudo pericial será elaborado no prazo máximo de:',
    alternativas: [
      '5 dias, improrrogável.',
      '30 dias, prorrogável por igual período.',
      '10 dias, improrrogável.',
      '10 dias, podendo o prazo ser prorrogado, em casos excepcionais, a requerimento dos peritos.',
      '15 dias, prorrogável a critério da autoridade policial.',
    ],
    correta: 3,
    comentario:
      'O art. 160, parágrafo único, fixa o prazo máximo de 10 dias, prorrogável em casos excepcionais a requerimento dos peritos. O prazo de 30 dias aparece no exame complementar de lesões (art. 168, § 2º), contado da data do crime.',
    fundamento: 'CPP, art. 160, parágrafo único',
  },
  {
    id: 'dpp-provas-q04',
    temaId: 'dpp-provas',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Na cadeia de custódia, a etapa que consiste na descrição detalhada do vestígio conforme se encontra no local de crime ou no corpo de delito, podendo ser ilustrada por fotografias, filmagens ou croqui, sendo indispensável sua descrição no laudo pericial, denomina-se:',
    alternativas: ['fixação.', 'isolamento.', 'reconhecimento.', 'acondicionamento.', 'processamento.'],
    correta: 0,
    comentario:
      'É a fixação (art. 158-B, III). O isolamento evita a alteração do estado das coisas (II). O reconhecimento distingue o elemento de potencial interesse pericial (I). O acondicionamento é a embalagem individualizada do vestígio (V). O processamento é o exame pericial em si (VIII).',
    fundamento: 'CPP, art. 158-B, III',
  },
  {
    id: 'dpp-provas-q05',
    temaId: 'dpp-provas',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'O laudo de exame de corpo de delito descreve o resultado da agressão sofrida pela vítima. Qual dos resultados abaixo, por si só, caracteriza a lesão corporal gravíssima (art. 129, § 2º, do CP)?',
    alternativas: [
      'Perigo de vida.',
      'Aceleração de parto.',
      'Deformidade permanente.',
      'Debilidade permanente de membro, sentido ou função.',
      'Incapacidade para as ocupações habituais por mais de trinta dias.',
    ],
    correta: 2,
    comentario:
      'A deformidade permanente está no § 2º, IV, com pena de reclusão de 2 a 8 anos. Perigo de vida, aceleração de parto, debilidade permanente e incapacidade para as ocupações habituais por mais de 30 dias qualificam a lesão grave (§ 1º, I a IV), com reclusão de 1 a 5 anos.',
    fundamento: 'CP, art. 129, §§ 1º e 2º',
  },
  {
    id: 'dpp-provas-q06',
    temaId: 'dpp-provas',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado: 'Quanto ao assistente técnico no processo penal, é correto afirmar que ele',
    alternativas: [
      'acompanha a coleta dos vestígios no local de crime desde o reconhecimento, ao lado do perito oficial.',
      'atua a partir de sua admissão pelo juiz e após a conclusão dos exames e a elaboração do laudo pelos peritos oficiais.',
      'é nomeado pela autoridade policial, que fixa seus honorários.',
      'deve ser servidor de órgão oficial de perícia.',
      'não é admitido no processo penal, apenas no processo civil.',
    ],
    correta: 1,
    comentario:
      'O art. 159, § 4º, diz que o assistente técnico atua a partir de sua admissão pelo juiz e após a conclusão dos exames e a elaboração do laudo pelos peritos oficiais. Sua indicação é facultada ao MP, ao assistente de acusação, ao ofendido, ao querelante e ao acusado (§ 3º). Ele não participa da coleta e não precisa ser servidor. O material pode ser examinado por ele no órgão oficial, na presença de perito oficial (§ 6º).',
    fundamento: 'CPP, art. 159, §§ 3º, 4º e 6º',
  },
  {
    id: 'dpp-provas-q07',
    temaId: 'dpp-provas',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado:
      'O primeiro exame de lesões corporais não permitiu concluir se a incapacidade da vítima para as ocupações habituais ultrapassaria trinta dias. Para precisar a classificação do delito no art. 129, § 1º, I, do Código Penal, o exame complementar',
    alternativas: [
      'deve ser feito logo que decorram 30 dias, contados da data do primeiro exame, e sua falta torna obrigatória a classificação como lesão leve.',
      'só pode ser determinado a requerimento do Ministério Público.',
      'deve ser realizado após 60 dias, contados da data do crime.',
      'é dispensável, pois o juiz não fica adstrito ao laudo.',
      'deve ser feito logo que decorra o prazo de 30 dias, contado da data do crime, e sua falta pode ser suprida pela prova testemunhal.',
    ],
    correta: 4,
    comentario:
      'O art. 168, § 2º, manda fazer o exame logo que decorra o prazo de 30 dias, contado da data do crime, e o § 3º permite suprir sua falta pela prova testemunhal. O exame complementar pode ser determinado de ofício pela autoridade policial ou judiciária, ou a requerimento do MP, do ofendido, do acusado ou do defensor (caput). O prazo não conta do primeiro exame, e não há prazo de 60 dias.',
    fundamento: 'CPP, art. 168, caput e §§ 2º e 3º',
  },
  {
    id: 'dpp-provas-q08',
    temaId: 'dpp-provas',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A autópsia será feita pelo menos seis horas depois do óbito, salvo se os peritos, pela evidência dos sinais de morte, julgarem que possa ser feita antes desse prazo, o que declararão no auto.',
    gabaritoCE: true,
    comentario:
      'Certo. É a redação do art. 162, caput, do CPP. O parágrafo único admite o simples exame externo do cadáver na morte violenta quando não houver infração a apurar ou quando as lesões externas permitirem precisar a causa da morte.',
    fundamento: 'CPP, art. 162',
  },
  {
    id: 'dpp-provas-q09',
    temaId: 'dpp-provas',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O recipiente lacrado que contém vestígio pode ser aberto por qualquer agente policial que participe da investigação, e o lacre rompido deve ser descartado para evitar confusão com o novo lacre.',
    gabaritoCE: false,
    comentario:
      'Errado. O recipiente só pode ser aberto pelo perito que vai proceder à análise e, motivadamente, por pessoa autorizada (art. 158-D, § 3º). O lacre rompido deve ser acondicionado no interior do novo recipiente (§ 5º), com registro na ficha de acompanhamento do vestígio (§ 4º).',
    fundamento: 'CPP, art. 158-D, §§ 3º a 5º',
  },
  {
    id: 'dpp-provas-q10',
    temaId: 'dpp-provas',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'O juiz não ficará adstrito ao laudo pericial, podendo aceitá-lo ou rejeitá-lo, no todo ou em parte.',
    gabaritoCE: true,
    comentario:
      'Certo. É o art. 182 do CPP. O laudo não vincula o juiz, que forma sua convicção pela livre apreciação da prova (art. 155), desde que fundamente a decisão.',
    fundamento: 'CPP, art. 182',
  },
];
