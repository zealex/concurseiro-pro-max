import type { QuestaoTreino } from '../../../types';

/* Lei 8.112/1990 — regime disciplinar e PAD; estatutos do PR, SC e RS */

export const QUESTOES_2: QuestaoTreino[] = [
  /* ---------- srv-8112-disciplinar ---------- */
  {
    id: 'srv-8112-disciplinar-q01',
    temaId: 'srv-8112-disciplinar',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'Segundo a Lei 8.112/1990, o prazo para a conclusão do processo disciplinar, contado da data de publicação do ato que constituir a comissão, não excederá:',
    alternativas: [
      '60 dias, admitida a prorrogação por igual prazo, quando as circunstâncias o exigirem.',
      '30 dias, prorrogáveis por igual período.',
      '90 dias, improrrogáveis.',
      '120 dias, prorrogáveis por mais 60.',
      '60 dias, improrrogáveis.',
    ],
    correta: 0,
    comentario:
      'O PAD tem 60 dias, prorrogáveis por igual prazo (art. 152). Os 30 + 30 dias são da sindicância (art. 145, parágrafo único). O rito sumário tem 30 dias, prorrogáveis por até 15 (art. 133, § 7º).',
    fundamento: 'Lei 8.112/1990, art. 152',
  },
  {
    id: 'srv-8112-disciplinar-q02',
    temaId: 'srv-8112-disciplinar',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Da sindicância poderá resultar o arquivamento do processo, a aplicação de penalidade de advertência ou de suspensão de até trinta dias, ou a instauração de processo disciplinar.',
    gabaritoCE: true,
    comentario:
      'São exatamente os três resultados do art. 145. Suspensão acima de 30 dias, demissão, cassação e destituição exigem obrigatoriamente PAD (art. 146).',
    fundamento: 'Lei 8.112/1990, arts. 145 e 146',
  },
  {
    id: 'srv-8112-disciplinar-q03',
    temaId: 'srv-8112-disciplinar',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'De acordo com a Lei 8.112/1990, entende-se por inassiduidade habitual a falta ao serviço, sem causa justificada, por:',
    alternativas: [
      'mais de 30 dias consecutivos.',
      '30 dias, interpoladamente, durante o período de 6 meses.',
      '60 dias, interpoladamente, durante o período de 12 meses.',
      '60 dias consecutivos.',
      '90 dias, interpoladamente, durante o período de 24 meses.',
    ],
    correta: 2,
    comentario:
      'Inassiduidade habitual: 60 dias de faltas injustificadas, interpoladamente, em 12 meses (art. 139). Ausência intencional por mais de 30 dias consecutivos é abandono de cargo (art. 138). Ambas levam à demissão (art. 132, II e III) e seguem o rito sumário (art. 140).',
    fundamento: 'Lei 8.112/1990, arts. 138 e 139',
  },
  {
    id: 'srv-8112-disciplinar-q04',
    temaId: 'srv-8112-disciplinar',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Servidor federal, sem antecedentes, ausentou-se do serviço durante o expediente, sem prévia autorização do chefe imediato. Segundo a Lei 8.112/1990, a penalidade cabível é:',
    alternativas: [
      'advertência.',
      'suspensão de até 15 dias.',
      'suspensão de até 90 dias.',
      'demissão.',
      'destituição de função comissionada.',
    ],
    correta: 0,
    comentario:
      'A conduta é a proibição do art. 117, I. As violações dos incisos I a VIII e XIX do art. 117 são punidas com advertência (art. 129). A reincidência levaria à suspensão (art. 130). A suspensão de até 15 dias é a prevista para quem se recusa à inspeção médica (art. 130, § 1º).',
    fundamento: 'Lei 8.112/1990, art. 117, I; art. 129',
  },
  {
    id: 'srv-8112-disciplinar-q05',
    temaId: 'srv-8112-disciplinar',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado: 'Nos termos da Lei 8.112/1990, será aplicada a pena de demissão ao servidor que:',
    alternativas: [
      'recusar fé a documentos públicos.',
      'promover manifestação de apreço ou desapreço no recinto da repartição.',
      'recusar-se a atualizar seus dados cadastrais quando solicitado.',
      'proceder de forma desidiosa.',
      'cometer a outro servidor atribuições estranhas ao cargo que ocupa, fora de situações de emergência e transitórias.',
    ],
    correta: 3,
    comentario:
      'Proceder de forma desidiosa é o art. 117, XV, e a transgressão dos incisos IX a XVI gera demissão (art. 132, XIII). Recusar fé a documentos (III), manifestação de apreço (V) e recusa de atualizar dados (XIX) geram advertência (art. 129). Cometer atribuições estranhas (XVII) gera suspensão (art. 130).',
    fundamento: 'Lei 8.112/1990, art. 117; arts. 129, 130 e 132, XIII',
  },
  {
    id: 'srv-8112-disciplinar-q06',
    temaId: 'srv-8112-disciplinar',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A ação disciplinar prescreverá em dois anos quanto à advertência e em cinco anos quanto à suspensão.',
    gabaritoCE: false,
    comentario:
      'Os prazos do art. 142 são: 180 dias para a advertência, 2 anos para a suspensão e 5 anos para demissão, cassação de aposentadoria ou disponibilidade e destituição de cargo em comissão. O item desloca cada prazo uma faixa acima.',
    fundamento: 'Lei 8.112/1990, art. 142, I a III',
  },
  {
    id: 'srv-8112-disciplinar-q07',
    temaId: 'srv-8112-disciplinar',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A responsabilidade administrativa do servidor será afastada no caso de absolvição criminal por insuficiência de provas.',
    gabaritoCE: false,
    comentario:
      'As instâncias são independentes (art. 125). A responsabilidade administrativa só é afastada pela absolvição criminal que negue a existência do fato ou a sua autoria (art. 126). Absolvição por falta de provas não impede a punição disciplinar.',
    fundamento: 'Lei 8.112/1990, arts. 125 e 126',
  },
  {
    id: 'srv-8112-disciplinar-q08',
    temaId: 'srv-8112-disciplinar',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'No processo disciplinar regido pela Lei 8.112/1990, havendo dois ou mais indiciados, o prazo para apresentação de defesa escrita será:',
    alternativas: [
      'comum e de 10 dias.',
      'sucessivo, de 10 dias para cada indiciado.',
      'comum e de 15 dias.',
      'de 30 dias, improrrogável.',
      'comum e de 20 dias.',
    ],
    correta: 4,
    comentario:
      'Com um indiciado, a defesa tem 10 dias (art. 161, § 1º); com dois ou mais, o prazo é comum e de 20 dias (§ 2º). Pode ser prorrogado pelo dobro para diligências indispensáveis (§ 3º). Os 15 dias valem para o indiciado citado por edital (art. 163, parágrafo único).',
    fundamento: 'Lei 8.112/1990, art. 161, §§ 1º a 3º; art. 163',
  },
  {
    id: 'srv-8112-disciplinar-q09',
    temaId: 'srv-8112-disciplinar',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Ana ocupa o cargo efetivo de médica em um órgão federal e outro cargo efetivo federal de natureza administrativa, sem relação com a saúde e sem atribuição de magistério. Detectada a acumulação ilegal, ela foi notificada para optar e se omitiu, o que levou à instauração do procedimento sumário. Ana apresentou a opção por um dos cargos no último dia do prazo para a defesa. Segundo a Lei 8.112/1990:',
    alternativas: [
      'Ana deverá ser demitida dos dois cargos, porque a acumulação ilegal é punida com demissão independentemente de má-fé.',
      'a opção configura boa-fé e se converte automaticamente em pedido de exoneração do outro cargo.',
      'a opção só seria válida se apresentada nos 10 dias da notificação inicial; depois disso, aplica-se a demissão.',
      'a comissão do procedimento sumário deve ser composta por três servidores estáveis.',
      'o procedimento sumário tem prazo de 60 dias, prorrogáveis por igual período.',
    ],
    correta: 1,
    comentario:
      'A opção até o último dia do prazo de defesa configura boa-fé e se converte automaticamente em pedido de exoneração do outro cargo (art. 133, § 5º). A demissão só cabe com má-fé provada (§ 6º). No rito sumário, a comissão tem dois servidores estáveis (inciso I) e o prazo é de 30 dias, prorrogáveis por até 15 (§ 7º).',
    fundamento: 'Lei 8.112/1990, art. 133, I e §§ 5º a 7º',
  },
  {
    id: 'srv-8112-disciplinar-q10',
    temaId: 'srv-8112-disciplinar',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Como medida cautelar e a fim de que o servidor não venha a influir na apuração da irregularidade, a autoridade instauradora do processo disciplinar poderá afastá-lo do exercício do cargo pelo prazo de até sessenta dias, sem remuneração, prorrogável por igual prazo.',
    gabaritoCE: false,
    comentario:
      'O afastamento preventivo é de até 60 dias, prorrogável por igual prazo, mas sem prejuízo da remuneração (art. 147). Por ser cautelar, não é pena. Findo o prazo, cessam os efeitos, ainda que o processo não tenha terminado (parágrafo único).',
    fundamento: 'Lei 8.112/1990, art. 147',
  },
  {
    id: 'srv-8112-disciplinar-q11',
    temaId: 'srv-8112-disciplinar',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 1,
    enunciado: 'Segundo a Lei 8.112/1990, o processo disciplinar será conduzido por comissão composta de:',
    alternativas: [
      'dois servidores estáveis.',
      'três servidores, estáveis ou não.',
      'cinco servidores ocupantes de cargo efetivo.',
      'três servidores estáveis designados pela autoridade competente.',
      'três servidores ocupantes de cargo em comissão.',
    ],
    correta: 3,
    comentario:
      'O art. 149 exige três servidores estáveis, um deles presidente, com cargo efetivo superior ou de mesmo nível, ou escolaridade igual ou superior à do indiciado. Dois servidores estáveis compõem a comissão do rito sumário (art. 133, I). Parentes do acusado até o 3º grau não podem participar (art. 149, § 2º).',
    fundamento: 'Lei 8.112/1990, art. 149',
  },
  {
    id: 'srv-8112-disciplinar-q12',
    temaId: 'srv-8112-disciplinar',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado:
      'Sobre a competência para aplicar penalidades a servidor do Poder Executivo federal, analise as assertivas:\n\nI. A demissão é aplicada pelo Presidente da República.\nII. A suspensão superior a 30 dias é aplicada pelas autoridades administrativas de hierarquia imediatamente inferior à do Presidente da República.\nIII. A destituição de cargo em comissão é aplicada pela autoridade que houver feito a nomeação.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas III.', 'Apenas I e II.', 'Apenas II e III.', 'I, II e III.'],
    correta: 4,
    comentario:
      'As três assertivas reproduzem o art. 141: I corresponde ao inciso I (demissão e cassação), II ao inciso II (suspensão acima de 30 dias) e III ao inciso IV (destituição de cargo em comissão). Advertência e suspensão de até 30 dias cabem ao chefe da repartição e outras autoridades previstas em regimento (inciso III).',
    fundamento: 'Lei 8.112/1990, art. 141',
  },
  {
    id: 'srv-8112-disciplinar-q13',
    temaId: 'srv-8112-disciplinar',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No processo revisional, o ônus da prova cabe ao requerente, e da revisão do processo disciplinar não poderá resultar agravamento de penalidade.',
    gabaritoCE: true,
    comentario:
      'O art. 175 atribui o ônus da prova ao requerente, e o art. 182, parágrafo único, veda o agravamento. A revisão pode ser pedida a qualquer tempo diante de fatos novos (art. 174), mas a simples alegação de injustiça da pena não basta (art. 176).',
    fundamento: 'Lei 8.112/1990, arts. 174 a 176 e 182',
  },

  /* ---------- srv-estatutos-sul ---------- */
  {
    id: 'srv-estatutos-sul-q01',
    temaId: 'srv-estatutos-sul',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Segundo a Lei Complementar 10.098/1994, estatuto dos servidores civis do Estado do Rio Grande do Sul, a posse será formalizada no prazo de:',
    alternativas: [
      '15 dias a contar da nomeação, prorrogável por igual período a pedido do interessado.',
      '30 dias da publicação do ato de provimento, prorrogáveis por igual período.',
      '15 dias da publicação do ato, improrrogáveis.',
      '30 dias da nomeação, improrrogáveis.',
      '10 dias úteis contados da nomeação.',
    ],
    correta: 0,
    comentario:
      'No RS, a posse ocorre em 15 dias a contar da nomeação, prorrogável por igual período a pedido do interessado (LC 10.098/1994, art. 18). Se não houver posse, a nomeação é tornada sem efeito (art. 20). Os 30 dias da publicação são da Lei 8.112 (art. 13, § 1º): é a troca que a banca explora.',
    fundamento: 'LC-RS 10.098/1994, arts. 18 e 20',
  },
  {
    id: 'srv-estatutos-sul-q02',
    temaId: 'srv-estatutos-sul',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado:
      'Na redação vigente da Lei Complementar 10.098/1994 (RS), a aplicação da pena de repreensão prescreve em:',
    alternativas: ['6 meses.', '12 meses.', '18 meses.', '24 meses.', '5 anos.'],
    correta: 1,
    comentario:
      'A LC 14.821/2015 deu nova redação ao art. 197: repreensão prescreve em 12 meses (I); suspensão, multa e demissão por abandono ou ausências, em 24 meses (II); demissão, cassação e destituição, em 5 anos (III). Os 6 meses eram o prazo da repreensão na redação anterior (LC 11.928/2003), e os 18 meses, o do abandono nessa mesma redação revogada. 24 meses e 5 anos são prazos de outras penas na redação vigente.',
    fundamento: 'LC-RS 10.098/1994, art. 197, I (redação da LC 14.821/2015)',
  },
  {
    id: 'srv-estatutos-sul-q03',
    temaId: 'srv-estatutos-sul',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No Estatuto dos Servidores Públicos Civis do Estado de Santa Catarina (Lei 6.745/1985), a demissão qualificada incompatibiliza o ex-funcionário com o exercício de cargo ou emprego público pelo período de dois a quatro anos.',
    gabaritoCE: false,
    comentario:
      'O período de 2 a 4 anos é o da demissão simples (art. 139). A demissão qualificada incompatibiliza por 5 a 10 anos (art. 138), conforme atenuantes e agravantes. A demissão qualificada cabe, por exemplo, em lesão aos cofres públicos e improbidade (art. 137, I).',
    fundamento: 'Lei SC 6.745/1985, arts. 137, 138 e 139',
  },
  {
    id: 'srv-estatutos-sul-q04',
    temaId: 'srv-estatutos-sul',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Segundo a Lei 6.745/1985, estatuto dos servidores públicos civis de Santa Catarina, NÃO é pena disciplinar:',
    alternativas: [
      'a repreensão verbal.',
      'a repreensão escrita.',
      'a demissão qualificada.',
      'a cassação de disponibilidade.',
      'a advertência.',
    ],
    correta: 4,
    comentario:
      'O art. 136 da lei catarinense lista: repreensão verbal, repreensão escrita, suspensão, destituição de cargo de confiança, demissão simples, demissão qualificada, cassação de aposentadoria e cassação de disponibilidade. “Advertência” é nome usado na Lei 8.112 e no estatuto do Paraná, não no de SC.',
    fundamento: 'Lei SC 6.745/1985, art. 136',
  },
  {
    id: 'srv-estatutos-sul-q05',
    temaId: 'srv-estatutos-sul',
    formato: 'multipla',
    estilo: 'nc-ufpr',
    dificuldade: 2,
    enunciado:
      'De acordo com a Lei 6.174/1970, estatuto dos funcionários civis do Poder Executivo do Paraná, a posse terá lugar no prazo de ______ da publicação do ato de provimento, e o exercício terá início no prazo de ______ contados da data da posse.',
    alternativas: ['30 dias — 15 dias', '30 dias — 30 dias', '15 dias — 30 dias', '15 dias — 15 dias', '60 dias — 30 dias'],
    correta: 1,
    comentario:
      'No PR, tanto a posse (art. 41) quanto o início do exercício (art. 46, II) têm 30 dias, cada prazo prorrogável por até mais 30 dias a pedido (art. 41, § 1º, e art. 46, § 1º). A combinação 30/15 é a da Lei 8.112; a 15/30, a do RS.',
    fundamento: 'Lei PR 6.174/1970, arts. 41 e 46',
  },
  {
    id: 'srv-estatutos-sul-q06',
    temaId: 'srv-estatutos-sul',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'O texto do estatuto dos funcionários civis do Paraná (Lei 6.174/1970) ainda prevê estabilidade após dois anos de exercício; entretanto, por força do art. 41 da Constituição Federal, com a redação da EC 19/1998, a estabilidade depende de três anos de efetivo exercício e de avaliação especial de desempenho.',
    gabaritoCE: true,
    comentario:
      'O art. 136 da Lei 6.174/1970 continua com “dois anos”, e o art. 43 fixa o estágio em dois anos. A regra constitucional, porém, é de três anos e avaliação especial obrigatória (CF, art. 41, caput e § 4º), e a CF prevalece. Por isso, leia o comando: “segundo o estatuto” pede o texto; a aquisição da estabilidade hoje segue a CF.',
    fundamento: 'Lei PR 6.174/1970, arts. 43 e 136; CF/88, art. 41',
  },
  {
    id: 'srv-estatutos-sul-q07',
    temaId: 'srv-estatutos-sul',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado:
      'Sobre a LC 10.098/1994, estatuto dos servidores civis do Rio Grande do Sul, analise as assertivas:\n\nI. O estágio probatório é o período de 3 anos durante o qual se verifica a conveniência da confirmação do servidor no cargo.\nII. O processo administrativo disciplinar é conduzido por comissão de 3 servidores estáveis, com formação superior, sendo pelo menos um com titulação em Ciências Jurídicas e Sociais.\nIII. A sindicância deve ser concluída em 30 dias corridos, improrrogáveis.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas III.', 'Apenas I e II.', 'I, II e III.'],
    correta: 3,
    comentario:
      'I está no art. 28 (redação da LC 15.450/2020) e II no art. 206. A III erra duas vezes: a sindicância tem prazo máximo de 30 dias úteis, prorrogável por até igual período (art. 201).',
    fundamento: 'LC-RS 10.098/1994, arts. 28, 201 e 206',
  },
  {
    id: 'srv-estatutos-sul-q08',
    temaId: 'srv-estatutos-sul',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado:
      'Segundo a Lei 6.745/1985 (SC), após cada quinquênio de serviço público estadual, o servidor ocupante de cargo de provimento efetivo faz jus a licença-prêmio:',
    alternativas: [
      'de 1 mês, convertível em dinheiro a pedido do servidor.',
      'de 6 meses, sem remuneração.',
      'de 3 meses, com remuneração, vedada a conversão em pecúnia e admitido o gozo em parcelas não inferiores a 15 dias.',
      'de 3 meses, gozada obrigatoriamente de uma só vez.',
      'de 90 dias a cada decênio, com remuneração.',
    ],
    correta: 2,
    comentario:
      'O art. 78 prevê 3 meses de licença remunerada a cada quinquênio. A LC 605/2013 incluiu a vedação de conversão em pecúnia (§ 1º) e o gozo parcelado em períodos não inferiores a 15 dias (§ 2º). A contagem do quinquênio é interrompida por suspensão ou por mais de 10 faltas injustificadas (art. 79).',
    fundamento: 'Lei SC 6.745/1985, arts. 78 e 79',
  },
  {
    id: 'srv-estatutos-sul-q09',
    temaId: 'srv-estatutos-sul',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'No estatuto do Paraná (Lei 6.174/1970), considera-se abandono de cargo a ausência ao serviço, sem justa causa, por trinta dias consecutivos, e será também demitido o funcionário que, durante o período de doze meses, faltar ao serviço sessenta dias interpoladamente, sem causa justificada.',
    gabaritoCE: true,
    comentario:
      'Reprodução do art. 293, §§ 1º e 2º, da lei paranaense. A lógica dos 30 dias consecutivos e dos 60 dias intercalados em 12 meses se repete na Lei 8.112 (arts. 138 e 139) e nos estatutos de SC e do RS, com pequenas variações de redação.',
    fundamento: 'Lei PR 6.174/1970, art. 293, §§ 1º e 2º',
  },
];
