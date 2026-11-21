import type { QuestaoTreino } from '../../../types';

/* Lei 8.112/1990 — provimento e vacância; direitos e vantagens */

export const QUESTOES_1: QuestaoTreino[] = [
  /* ---------- srv-8112-provimento ---------- */
  {
    id: 'srv-8112-provimento-q01',
    temaId: 'srv-8112-provimento',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Segundo a Lei 8.112/1990, assinalar a alternativa que indica corretamente o prazo para a posse em cargo público.',
    alternativas: [
      '15 dias, contados da data da nomeação.',
      '30 dias, contados da publicação do ato de provimento.',
      '30 dias, contados da nomeação, prorrogáveis por igual período.',
      '15 dias, contados da publicação do ato de provimento.',
      '45 dias, contados da homologação do concurso.',
    ],
    correta: 1,
    comentario:
      'A posse ocorre no prazo de 30 dias contados da publicação do ato de provimento (art. 13, § 1º). Os 15 dias são do exercício, contados da posse (art. 15, § 1º). A lei não prevê prorrogação do prazo de posse nem contagem a partir da homologação.',
    fundamento: 'Lei 8.112/1990, art. 13, § 1º',
  },
  {
    id: 'srv-8112-provimento-q02',
    temaId: 'srv-8112-provimento',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas sobre posse e exercício na Lei 8.112/1990:\n\nI. Só haverá posse nos casos de provimento de cargo por nomeação.\nII. A posse poderá dar-se mediante procuração específica.\nIII. O servidor empossado que não entrar em exercício no prazo legal terá o ato de provimento tornado sem efeito.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas I e II.', 'Apenas II e III.', 'I, II e III.'],
    correta: 2,
    comentario:
      'I e II reproduzem o art. 13, §§ 4º e 3º. A III troca as consequências: tornar sem efeito o provimento é o efeito da falta de posse (art. 13, § 6º). Quem tomou posse e não entra em exercício no prazo é exonerado (art. 15, § 2º).',
    fundamento: 'Lei 8.112/1990, art. 13, §§ 3º, 4º e 6º; art. 15, § 2º',
  },
  {
    id: 'srv-8112-provimento-q03',
    temaId: 'srv-8112-provimento',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'É de quinze dias o prazo para o servidor empossado em cargo público entrar em exercício, contados da data de publicação do ato de nomeação.',
    gabaritoCE: false,
    comentario:
      'O prazo é de fato de 15 dias, mas é contado da data da posse, e não da publicação da nomeação (art. 15, § 1º). A publicação do ato é o marco inicial dos 30 dias para a posse (art. 13, § 1º).',
    fundamento: 'Lei 8.112/1990, art. 15, § 1º',
  },
  {
    id: 'srv-8112-provimento-q04',
    temaId: 'srv-8112-provimento',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Durante o estágio probatório previsto na Lei 8.112/1990, a aptidão e a capacidade do servidor são avaliadas com base em fatores definidos em lei. Assinale a alternativa que NÃO corresponde a um desses fatores.',
    alternativas: ['Assiduidade.', 'Disciplina.', 'Capacidade de iniciativa.', 'Idoneidade moral.', 'Responsabilidade.'],
    correta: 3,
    comentario:
      'O art. 20 lista cinco fatores: assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade. Idoneidade moral não está na 8.112; ela aparece em estatutos estaduais, como o do Paraná (Lei 6.174/1970, art. 43) e o de Santa Catarina (Lei 6.745/1985, art. 15), o que torna o distrator perigoso para quem estuda vários estatutos.',
    fundamento: 'Lei 8.112/1990, art. 20, I a V',
  },
  {
    id: 'srv-8112-provimento-q05',
    temaId: 'srv-8112-provimento',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Segundo a Constituição Federal, são estáveis após três anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público, sendo obrigatória, como condição para a aquisição da estabilidade, a avaliação especial de desempenho por comissão instituída para essa finalidade.',
    gabaritoCE: true,
    comentario:
      'É a redação do art. 41, caput e § 4º, da CF, dada pela EC 19/1998. O art. 21 da Lei 8.112 ainda menciona 2 anos, mas a Constituição prevalece: hoje a estabilidade exige 3 anos de efetivo exercício e aprovação na avaliação especial.',
    fundamento: 'CF/88, art. 41, caput e § 4º',
  },
  {
    id: 'srv-8112-provimento-q06',
    temaId: 'srv-8112-provimento',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado:
      'O art. 20 da Lei 8.112/1990 fixa o estágio probatório em 24 meses, e o art. 21 fala em estabilidade após 2 anos de efetivo exercício. Considerando a Constituição Federal vigente, assinale a alternativa correta.',
    alternativas: [
      'A estabilidade do servidor federal continua a ser adquirida após 2 anos, porque a Lei 8.112 é norma especial em relação à Constituição.',
      'O estágio probatório foi extinto pela EC 19/1998, restando apenas a avaliação periódica de desempenho.',
      'O servidor adquire estabilidade automaticamente após 3 anos, ainda que não tenha passado pela avaliação especial de desempenho.',
      'O prazo do estágio probatório é fixado livremente por cada órgão federal, entre 24 e 36 meses.',
      'A CF, art. 41, exige 3 anos de efetivo exercício e aprovação em avaliação especial de desempenho, feita por comissão instituída para essa finalidade, como condição para a estabilidade.',
    ],
    correta: 4,
    comentario:
      'A EC 19/1998 elevou para 3 anos o prazo da estabilidade e tornou obrigatória a avaliação especial (CF, art. 41, caput e § 4º). No Executivo federal, o Decreto 12.374/2025 (art. 2º) fixou o estágio em 36 meses para os nomeados após a sua publicação. Erros: lei ordinária não prevalece sobre a CF (A); o estágio não foi extinto (B); a avaliação especial é condição da estabilidade (C); e não há prazo livre por órgão (D).',
    fundamento: 'CF/88, art. 41, caput e § 4º; Lei 8.112/1990, arts. 20 e 21; Decreto 12.374/2025, arts. 2º e 24',
  },
  {
    id: 'srv-8112-provimento-q07',
    temaId: 'srv-8112-provimento',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 1,
    enunciado:
      'A investidura do servidor em cargo de atribuições e responsabilidades compatíveis com a limitação que tenha sofrido em sua capacidade física ou mental, verificada em inspeção médica, denomina-se:',
    alternativas: ['Readaptação.', 'Reversão.', 'Recondução.', 'Reintegração.', 'Aproveitamento.'],
    correta: 0,
    comentario:
      'É o conceito literal de readaptação (art. 24). Reversão é o retorno do aposentado (art. 25); recondução, a volta do estável ao cargo anterior (art. 29); reintegração, a reinvestidura após demissão invalidada (art. 28); aproveitamento, o retorno de quem está em disponibilidade (art. 30).',
    fundamento: 'Lei 8.112/1990, art. 24',
  },
  {
    id: 'srv-8112-provimento-q08',
    temaId: 'srv-8112-provimento',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado:
      'Servidor federal estável teve a demissão invalidada por decisão judicial. O cargo que ocupava está provido por outro servidor, também estável. De acordo com a Lei 8.112/1990:',
    alternativas: [
      'o servidor demitido será posto em disponibilidade até que o cargo fique vago.',
      'o servidor será reintegrado sem ressarcimento, pois não prestou serviço no período do afastamento.',
      'o servidor será reintegrado, com ressarcimento de todas as vantagens, e o ocupante será reconduzido ao cargo de origem, sem direito a indenização, aproveitado em outro cargo ou posto em disponibilidade.',
      'o servidor será readaptado em cargo de atribuições afins, como excedente.',
      'o ocupante do cargo será exonerado de ofício, com direito a indenização.',
    ],
    correta: 2,
    comentario:
      'A reintegração devolve o estável ao cargo, com ressarcimento de todas as vantagens (art. 28, caput). Se o cargo estiver provido, o ocupante é reconduzido ao cargo de origem sem indenização, aproveitado em outro ou posto em disponibilidade (art. 28, § 2º). A disponibilidade do reintegrado só ocorre se o cargo tiver sido extinto (§ 1º).',
    fundamento: 'Lei 8.112/1990, art. 28, caput e §§ 1º e 2º',
  },
  {
    id: 'srv-8112-provimento-q09',
    temaId: 'srv-8112-provimento',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A recondução é o retorno do servidor estável ao cargo anteriormente ocupado e decorre de inabilitação em estágio probatório relativo a outro cargo ou de reintegração do anterior ocupante.',
    gabaritoCE: true,
    comentario:
      'Conceito e hipóteses literais do art. 29, I e II. Se o cargo de origem estiver provido, o servidor é aproveitado em outro (parágrafo único). Note que a recondução exige estabilidade: o servidor ainda não estável e reprovado no estágio é exonerado (art. 20, § 2º).',
    fundamento: 'Lei 8.112/1990, art. 29',
  },
  {
    id: 'srv-8112-provimento-q10',
    temaId: 'srv-8112-provimento',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado: 'De acordo com a Lei 8.112/1990, NÃO constitui hipótese de vacância do cargo público:',
    alternativas: ['a promoção.', 'a readaptação.', 'a posse em outro cargo inacumulável.', 'o falecimento.', 'a reversão.'],
    correta: 4,
    comentario:
      'O art. 33 lista: exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento. A reversão é forma de provimento (art. 8º, VI), pois traz o aposentado de volta. Promoção e readaptação aparecem nas duas listas: provêm o novo cargo e vagam o antigo.',
    fundamento: 'Lei 8.112/1990, arts. 8º e 33',
  },
  {
    id: 'srv-8112-provimento-q11',
    temaId: 'srv-8112-provimento',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Pode reverter, no interesse da administração, o servidor aposentado por invalidez que solicite a reversão, desde que a aposentadoria tenha ocorrido nos cinco anos anteriores à solicitação e haja cargo vago.',
    gabaritoCE: false,
    comentario:
      'A reversão no interesse da administração exige, entre outros requisitos, que a aposentadoria tenha sido voluntária e que o servidor fosse estável na atividade (art. 25, II, “b” e “c”). O aposentado por invalidez reverte por outra via: quando junta médica oficial declara insubsistentes os motivos da aposentadoria (art. 25, I), e aí nem precisa haver vaga (§ 3º).',
    fundamento: 'Lei 8.112/1990, art. 25, I e II, e § 3º',
  },
  {
    id: 'srv-8112-provimento-q12',
    temaId: 'srv-8112-provimento',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado:
      'Segundo a Lei 8.112/1990, ao servidor em estágio probatório somente poderão ser concedidas determinadas licenças e afastamentos. Entre as licenças permitidas estão as licenças:',
    alternativas: [
      'por motivo de doença em pessoa da família e por motivo de afastamento do cônjuge ou companheiro.',
      'para capacitação e para tratar de interesses particulares.',
      'para desempenho de mandato classista e para capacitação.',
      'para tratar de interesses particulares e para atividade política.',
      'para capacitação e por motivo de doença em pessoa da família.',
    ],
    correta: 0,
    comentario:
      'O art. 20, § 4º, permite as licenças do art. 81, I a IV (doença em pessoa da família, afastamento do cônjuge, serviço militar e atividade política) e os afastamentos dos arts. 94, 95 e 96, além do curso de formação. Capacitação (inciso V), interesses particulares (VI) e mandato classista (VII) ficam de fora; a de interesses particulares é expressamente vedada no art. 91.',
    fundamento: 'Lei 8.112/1990, art. 20, § 4º; art. 81; art. 91',
  },

  /* ---------- srv-8112-direitos ---------- */
  {
    id: 'srv-8112-direitos-q01',
    temaId: 'srv-8112-direitos',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Segundo a Lei 8.112/1990, o serviço extraordinário será remunerado com acréscimo, em relação à hora normal de trabalho, de:',
    alternativas: [
      '25%, limitado a 2 horas por jornada.',
      '100%, sem limite fixado em lei.',
      '50%, limitado a 4 horas por jornada.',
      '50%, limitado a 2 horas por jornada.',
      '1/3, limitado a 10 horas semanais.',
    ],
    correta: 3,
    comentario:
      'O acréscimo é de 50% (art. 73), e o serviço extraordinário só é permitido para situações excepcionais e temporárias, com limite de 2 horas por jornada (art. 74). 25% é o adicional noturno (art. 75); 1/3 é o adicional de férias (art. 76).',
    fundamento: 'Lei 8.112/1990, arts. 73 e 74',
  },
  {
    id: 'srv-8112-direitos-q02',
    temaId: 'srv-8112-direitos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'O serviço noturno, prestado entre as 22 horas de um dia e as 5 horas do dia seguinte, terá o valor-hora acrescido de 25%, computando-se cada hora como 52 minutos e 30 segundos.',
    gabaritoCE: true,
    comentario:
      'Reprodução do art. 75. Se o serviço noturno for também extraordinário, o acréscimo de 25% incide sobre a hora já acrescida dos 50% do art. 73 (parágrafo único).',
    fundamento: 'Lei 8.112/1990, art. 75',
  },
  {
    id: 'srv-8112-direitos-q03',
    temaId: 'srv-8112-direitos',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas sobre férias na Lei 8.112/1990:\n\nI. Para o primeiro período aquisitivo de férias, serão exigidos 12 meses de exercício.\nII. As férias podem ser acumuladas até o máximo de três períodos, no caso de necessidade do serviço.\nIII. As férias poderão ser parceladas em até três etapas, desde que requeridas pelo servidor e no interesse da administração.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas I e III.', 'Apenas II e III.', 'I, II e III.'],
    correta: 2,
    comentario:
      'I está no art. 77, § 1º, e III no art. 77, § 3º. A II erra o limite: a acumulação é de no máximo dois períodos (art. 77, caput). O número três é o das etapas de parcelamento, e a banca mistura os dois.',
    fundamento: 'Lei 8.112/1990, art. 77, caput e §§ 1º e 3º',
  },
  {
    id: 'srv-8112-direitos-q04',
    temaId: 'srv-8112-direitos',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'A licença por motivo de doença em pessoa da família, incluídas as prorrogações, poderá ser concedida, a cada período de 12 meses, nas seguintes condições:',
    alternativas: [
      'por até 60 dias, consecutivos ou não, mantida a remuneração, e por até 90 dias, consecutivos ou não, sem remuneração.',
      'por até 30 dias com remuneração e por até 60 dias sem remuneração.',
      'por até 90 dias com remuneração e por até 60 dias sem remuneração.',
      'por até 120 dias com remuneração, prorrogáveis por igual período.',
      'por até 60 dias com remuneração, vedada a concessão de licença sem remuneração.',
    ],
    correta: 0,
    comentario:
      'O art. 83, § 2º, fixa até 60 dias com remuneração e até 90 dias sem remuneração por período de 12 meses, contado do deferimento da primeira licença (§ 3º). A soma das licenças no período não pode ultrapassar esses limites (§ 4º). Os 120 dias são o marco da junta médica na licença para tratamento da própria saúde (art. 203, § 4º).',
    fundamento: 'Lei 8.112/1990, art. 83, §§ 2º a 4º',
  },
  {
    id: 'srv-8112-direitos-q05',
    temaId: 'srv-8112-direitos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A licença para tratar de interesses particulares pode ser concedida, a critério da administração, ao servidor em estágio probatório, pelo prazo de até três anos consecutivos, sem remuneração.',
    gabaritoCE: false,
    comentario:
      'O prazo (até 3 anos consecutivos) e a ausência de remuneração estão corretos, mas a licença é concedida ao ocupante de cargo efetivo desde que não esteja em estágio probatório (art. 91). O art. 20, § 4º, também não a inclui entre as licenças permitidas ao servidor em estágio.',
    fundamento: 'Lei 8.112/1990, art. 91; art. 20, § 4º',
  },
  {
    id: 'srv-8112-direitos-q06',
    temaId: 'srv-8112-direitos',
    formato: 'multipla',
    estilo: 'ibam',
    dificuldade: 1,
    enunciado:
      'Segundo a Lei 8.112/1990, sem qualquer prejuízo, o servidor poderá ausentar-se do serviço por 8 dias consecutivos em razão de:',
    alternativas: ['doação de sangue.', 'casamento.', 'alistamento eleitoral.', 'mudança de domicílio.', 'nascimento de neto.'],
    correta: 1,
    comentario:
      'O art. 97, III, prevê 8 dias consecutivos por casamento e por falecimento de cônjuge, companheiro, pais, madrasta ou padrasto, filhos, enteados, menor sob guarda ou tutela e irmãos. Doação de sangue dá 1 dia (inciso I); alistamento ou recadastramento eleitoral, até 2 dias (inciso II). Mudança de domicílio e nascimento de neto não estão no artigo.',
    fundamento: 'Lei 8.112/1990, art. 97',
  },
  {
    id: 'srv-8112-direitos-q07',
    temaId: 'srv-8112-direitos',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado:
      'Complete: “Após cada quinquênio de efetivo exercício, o servidor poderá, no interesse da Administração, afastar-se do exercício do cargo efetivo, com a respectiva remuneração, por até ______, para participar de curso de capacitação profissional. Os períodos dessa licença ______ acumuláveis.”',
    alternativas: ['três meses — são', 'três meses — não são', 'seis meses — não são', 'um mês — são', 'dois anos — são'],
    correta: 1,
    comentario:
      'É a licença para capacitação: até 3 meses a cada quinquênio, com remuneração (art. 87, caput), e os períodos não são acumuláveis (parágrafo único). Quem não usa a licença de um quinquênio não soma com a do seguinte.',
    fundamento: 'Lei 8.112/1990, art. 87',
  },
  {
    id: 'srv-8112-direitos-q08',
    temaId: 'srv-8112-direitos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A licença para acompanhar cônjuge ou companheiro deslocado para outro ponto do território nacional, para o exterior ou para o exercício de mandato eletivo dos Poderes Executivo e Legislativo será por prazo indeterminado e sem remuneração.',
    gabaritoCE: true,
    comentario:
      'Art. 84, caput e § 1º. Se o cônjuge também for servidor público, de qualquer Poder ou ente, pode haver exercício provisório em órgão federal, em atividade compatível com o cargo (§ 2º). Essa licença está entre as que suspendem o estágio probatório (art. 20, § 5º).',
    fundamento: 'Lei 8.112/1990, art. 84, caput e § 1º',
  },
  {
    id: 'srv-8112-direitos-q09',
    temaId: 'srv-8112-direitos',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado:
      'Um servidor federal foi escolhido em convenção partidária como candidato a vereador em outro município. Sobre a licença para atividade política, assinale a alternativa correta.',
    alternativas: [
      'Entre a escolha em convenção e a véspera do registro da candidatura, terá licença com remuneração integral.',
      'A licença remunerada se estende até o trigésimo dia seguinte ao da eleição.',
      'Não há licença para atividade política na Lei 8.112; o servidor deve pedir exoneração.',
      'A partir do registro da candidatura e até o décimo dia seguinte ao da eleição, fará jus à licença, assegurados os vencimentos do cargo efetivo, somente pelo período de três meses.',
      'Toda a licença para atividade política é sem remuneração.',
    ],
    correta: 3,
    comentario:
      'O art. 86 divide a licença em duas fases: da escolha em convenção até a véspera do registro, licença sem remuneração (caput); do registro até o 10º dia seguinte ao da eleição, licença com os vencimentos do cargo efetivo, somente por 3 meses (§ 2º). O marco final é o décimo dia, não o trigésimo.',
    fundamento: 'Lei 8.112/1990, art. 86, caput e § 2º',
  },
  {
    id: 'srv-8112-direitos-q10',
    temaId: 'srv-8112-direitos',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Segundo a Lei 8.112/1990, constituem indenizações ao servidor, EXCETO:',
    alternativas: ['ajuda de custo.', 'diárias.', 'auxílio-moradia.', 'indenização de transporte.', 'gratificação natalina.'],
    correta: 4,
    comentario:
      'O art. 51 lista como indenizações: ajuda de custo, diárias, transporte e auxílio-moradia. A gratificação natalina está entre as retribuições, gratificações e adicionais do art. 61, II. Diferença prática: indenizações não se incorporam ao vencimento para nenhum efeito (art. 49, § 1º).',
    fundamento: 'Lei 8.112/1990, arts. 49, 51 e 61',
  },
  {
    id: 'srv-8112-direitos-q11',
    temaId: 'srv-8112-direitos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'A licença para tratamento da própria saúde é considerada de efetivo exercício até o limite de vinte e quatro meses, cumulativo ao longo do tempo de serviço público prestado à União em cargo efetivo; o tempo que exceder esse limite é contado apenas para efeito de aposentadoria e disponibilidade.',
    gabaritoCE: true,
    comentario:
      'O art. 102, VIII, “b”, considera de efetivo exercício a licença para tratamento da própria saúde até 24 meses cumulativos. O excedente entra no art. 103, VII, que lista o que conta apenas para aposentadoria e disponibilidade.',
    fundamento: 'Lei 8.112/1990, art. 102, VIII, “b”; art. 103, VII',
  },
];
