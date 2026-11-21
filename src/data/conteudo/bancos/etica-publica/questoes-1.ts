import type { QuestaoTreino } from '../../../types';

/* Código de Ética (Dec. 1.171/1994) e Sistema de Gestão da Ética (Dec. 6.029/2007) */
export const QUESTOES_1: QuestaoTreino[] = [
  /* ---------- etp-1171 ---------- */
  {
    id: 'etp-1171-q01',
    temaId: 'etp-1171',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'Segundo o Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal (Decreto 1.171/1994), a pena aplicável ao servidor público pela Comissão de Ética é a de:',
    alternativas: [
      'advertência, registrada nos assentamentos funcionais.',
      'suspensão de até 30 dias.',
      'censura, cuja fundamentação constará de parecer assinado por todos os integrantes da Comissão, com ciência do faltoso.',
      'multa, convertida em desconto na remuneração.',
      'demissão, após processo administrativo disciplinar.',
    ],
    correta: 2,
    comentario:
      'O inciso XXII do Anexo prevê uma única pena para a Comissão de Ética: a censura, fundamentada em parecer assinado por todos os integrantes, com ciência do faltoso. Advertência, suspensão e demissão são penalidades disciplinares da Lei 8.112, aplicadas após sindicância ou PAD. Multa não existe no Código.',
    fundamento: 'Decreto 1.171/1994, Anexo, inciso XXII',
  },
  {
    id: 'etp-1171-q02',
    temaId: 'etp-1171',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Médico perito federal que, fora do horário de expediente, apresenta-se habitualmente embriagado em locais públicos da cidade onde atua não comete falta ética à luz do Código de Ética do servidor federal, pois essa vedação se restringe ao ambiente de serviço.',
    gabaritoCE: false,
    comentario:
      'Errado. O inciso XV, n, veda apresentar-se embriagado no serviço ou fora dele habitualmente. O Código alcança a vida privada: a função pública integra a vida particular, e os atos do dia a dia podem acrescer ou diminuir o bom conceito na vida funcional (inciso VI).',
    fundamento: 'Decreto 1.171/1994, Anexo, incisos VI e XV, n',
  },
  {
    id: 'etp-1171-q03',
    temaId: 'etp-1171',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'De acordo com as regras deontológicas do Decreto 1.171/1994, o servidor público deve decidir não somente entre o legal e o ilegal, o justo e o injusto, o conveniente e o inconveniente, o oportuno e o inoportuno, mas principalmente entre:',
    alternativas: [
      'o eficiente e o ineficiente.',
      'o público e o privado.',
      'o moral e o imoral.',
      'o razoável e o desproporcional.',
      'o honesto e o desonesto.',
    ],
    correta: 4,
    comentario:
      'O inciso II diz que o servidor jamais poderá desprezar o elemento ético de sua conduta e deverá decidir principalmente entre o honesto e o desonesto, com remissão ao art. 37, caput e § 4º, da CF. As outras duplas soam plausíveis, mas não são a expressão do Código.',
    fundamento: 'Decreto 1.171/1994, Anexo, inciso II',
  },
  {
    id: 'etp-1171-q04',
    temaId: 'etp-1171',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Conforme o Código de Ética do servidor federal, a publicidade de ato administrativo pode ser restringida em casos de segurança nacional, investigações policiais ou interesse superior do Estado e da Administração Pública, a serem preservados em processo previamente declarado sigiloso, nos termos da lei.',
    gabaritoCE: true,
    comentario:
      'Certo. O inciso VII afirma que a publicidade é requisito de eficácia e moralidade e lista exatamente essas exceções, condicionadas a processo previamente declarado sigiloso, nos termos da lei. Negar publicidade fora dessas hipóteses compromete a ética do servidor.',
    fundamento: 'Decreto 1.171/1994, Anexo, inciso VII',
  },
  {
    id: 'etp-1171-q05',
    temaId: 'etp-1171',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'Em um hospital federal, a médica Lúcia percebe que um colega de plantão vem adulterando registros de frequência. Por espírito de solidariedade, ela decide não comunicar o fato a ninguém. À luz do Decreto 1.171/1994, a conduta de Lúcia:',
    alternativas: [
      'é indiferente ao Código de Ética, pois fraude de frequência é matéria exclusivamente disciplinar.',
      'configura vedação expressa: ser, em função do espírito de solidariedade, conivente com erro ou infração ao Código de Ética ou ao código de ética de sua profissão.',
      'só configura falta ética se Lúcia obtiver vantagem financeira com a omissão.',
      'é permitida, pois o dever de lealdade aos colegas prevalece sobre o dever de comunicar irregularidades.',
      'só pode ser apreciada pelo Conselho Regional de Medicina, por envolver médicos.',
    ],
    correta: 1,
    comentario:
      'O inciso XV, c, veda ser conivente, por espírito de solidariedade, com erro ou infração ao Código ou ao código de ética da profissão. Além disso, é dever comunicar aos superiores ato contrário ao interesse público (XIV, m). A falta ética não depende de vantagem, e a competência do CRM não afasta a da Comissão de Ética do órgão.',
    fundamento: 'Decreto 1.171/1994, Anexo, inciso XIV, m, e inciso XV, c',
  },
  {
    id: 'etp-1171-q06',
    temaId: 'etp-1171',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas sobre os deveres fundamentais do servidor público previstos no Decreto 1.171/1994:\n\nI. Ser assíduo e frequente ao serviço.\nII. Zelar, no exercício do direito de greve, pelas exigências específicas da defesa da vida e da segurança coletiva.\nIII. Abster-se de representar contra comprometimento indevido da estrutura em que se funda o Poder Estatal, em respeito à hierarquia.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas III.', 'Apenas II e III.', 'Apenas I e II.', 'I, II e III.'],
    correta: 3,
    comentario:
      'I e II reproduzem os deveres das alíneas l e j do inciso XIV. III está errada: a alínea h manda respeitar a hierarquia, porém sem nenhum temor de representar contra qualquer comprometimento indevido da estrutura. O respeito à hierarquia não autoriza omissão.',
    fundamento: 'Decreto 1.171/1994, Anexo, inciso XIV, h, j e l',
  },
  {
    id: 'etp-1171-q07',
    temaId: 'etp-1171',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Para fins de apuração do comprometimento ético, o Decreto 1.171/1994 considera servidor público apenas quem ocupa cargo efetivo e recebe remuneração dos cofres públicos.',
    gabaritoCE: false,
    comentario:
      'Errado. O inciso XXIV adota conceito amplo: é servidor todo aquele que, por força de lei, contrato ou qualquer ato jurídico, presta serviço de natureza permanente, temporária ou excepcional, ainda que sem retribuição financeira, ligado direta ou indiretamente a órgão do poder estatal.',
    fundamento: 'Decreto 1.171/1994, Anexo, inciso XXIV',
  },
  {
    id: 'etp-1171-q08',
    temaId: 'etp-1171',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 1,
    enunciado:
      'Segundo o Decreto 1.171/1994, deixar o servidor público qualquer pessoa à espera de solução que compete ao seu setor, permitindo a formação de longas filas ou outra espécie de atraso na prestação do serviço, caracteriza:',
    alternativas: [
      'atitude contra a ética e ato de desumanidade, mas principalmente grave dano moral aos usuários dos serviços públicos.',
      'mera falha administrativa, sem repercussão ética.',
      'crime de prevaricação, a ser apurado pela autoridade policial.',
      'infração sujeita exclusivamente à pena de advertência.',
      'conduta lícita, se houver excesso de demanda no setor.',
    ],
    correta: 0,
    comentario:
      'O inciso X diz que essa conduta não caracteriza apenas atitude contra a ética ou ato de desumanidade, mas principalmente grave dano moral aos usuários. O Código não a trata como crime nem prevê advertência, e o excesso de demanda não a torna lícita.',
    fundamento: 'Decreto 1.171/1994, Anexo, inciso X',
  },
  {
    id: 'etp-1171-q09',
    temaId: 'etp-1171',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Compete à Comissão de Ética fornecer, aos organismos encarregados da execução do quadro de carreira dos servidores, os registros sobre a conduta ética destes, para instruir e fundamentar promoções e demais procedimentos próprios da carreira.',
    gabaritoCE: true,
    comentario:
      'Certo. É o texto do inciso XVIII do Anexo, que permanece vigente (o Decreto 6.029/2007 revogou os incisos XVII, XIX, XX, XXI, XXIII e XXV, não o XVIII). Assim, a conduta ética pesa na vida funcional do servidor.',
    fundamento: 'Decreto 1.171/1994, Anexo, inciso XVIII',
  },
  {
    id: 'etp-1171-q10',
    temaId: 'etp-1171',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado: 'Assinale a alternativa que NÃO corresponde a vedação ao servidor público prevista no Decreto 1.171/1994.',
    alternativas: [
      'Fazer uso de informações privilegiadas obtidas no âmbito interno de seu serviço, em benefício próprio, de parentes, de amigos ou de terceiros.',
      'Retirar da repartição pública, sem estar legalmente autorizado, qualquer documento, livro ou bem pertencente ao patrimônio público.',
      'Deixar de utilizar os avanços técnicos e científicos ao seu alcance ou do seu conhecimento para atendimento do seu mister.',
      'Alterar ou deturpar o teor de documentos que deva encaminhar para providências.',
      'Participar dos movimentos e estudos que se relacionem com a melhoria do exercício de suas funções, tendo por escopo a realização do bem comum.',
    ],
    correta: 4,
    comentario:
      'As quatro primeiras são vedações das alíneas m, l, e e h do inciso XV. A alternativa E não é vedação: é um dos deveres fundamentais do servidor (inciso XIV, o). A pegadinha é que a alternativa C, embora pareça um dever, está redigida como vedação (“deixar de utilizar” os avanços técnicos e científicos, XV, e).',
    fundamento: 'Decreto 1.171/1994, Anexo, inciso XIV, o, e inciso XV, alíneas e, h, l e m',
  },

  /* ---------- etp-6029 ---------- */
  {
    id: 'etp-6029-q01',
    temaId: 'etp-6029',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado: 'Nos termos do Decreto 6.029/2007, a Comissão de Ética Pública (CEP) é integrada por:',
    alternativas: [
      'sete brasileiros de idoneidade moral, reputação ilibada e notória experiência em administração pública, designados pelo Presidente da República para mandatos de três anos não coincidentes, permitida uma única recondução.',
      'cinco membros designados pelo Ministro-Chefe da Casa Civil, com mandato de dois anos.',
      'três membros titulares e três suplentes, servidores do quadro permanente, designados pelo dirigente máximo do órgão.',
      'nove membros indicados pelo Congresso Nacional, com mandato de quatro anos.',
      'sete servidores efetivos da Controladoria-Geral da União, com mandato de três anos, permitidas reconduções sucessivas.',
    ],
    correta: 0,
    comentario:
      'O art. 3º fixa a CEP em sete brasileiros com esses requisitos, designados pelo Presidente da República, com mandato de três anos não coincidentes e uma única recondução. A composição 3 titulares + 3 suplentes é das comissões setoriais (art. 5º). A Casa Civil apenas abriga a Secretaria-Executiva da CEP (art. 4º, parágrafo único); não há indicação pelo Congresso nem membros exclusivos da CGU, e a recondução é única.',
    fundamento: 'Decreto 6.029/2007, arts. 3º, 4º, parágrafo único, e 5º',
  },
  {
    id: 'etp-6029-q02',
    temaId: 'etp-6029',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'As comissões de ética dos órgãos do Poder Executivo federal de que trata o Decreto 1.171/1994 são integradas por três membros titulares e três suplentes, escolhidos entre servidores e empregados do quadro permanente e designados pelo dirigente máximo do órgão ou entidade, para mandatos não coincidentes de três anos.',
    gabaritoCE: true,
    comentario:
      'Certo. É a regra do art. 5º do Decreto 6.029/2007. Não confunda com a CEP: sete membros designados pelo Presidente da República (art. 3º).',
    fundamento: 'Decreto 6.029/2007, art. 5º',
  },
  {
    id: 'etp-6029-q03',
    temaId: 'etp-6029',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'No procedimento de apuração de prática de ato contrário à ética regulado pelo Decreto 6.029/2007, o investigado será notificado para manifestar-se, por escrito, no prazo de:',
    alternativas: ['5 dias.', '15 dias.', '30 dias.', '10 dias.', '20 dias.'],
    correta: 3,
    comentario:
      'O art. 12 prevê notificação do investigado para manifestação escrita em dez dias. Se forem juntadas novas provas, ele terá nova oportunidade, também em dez dias (art. 12, § 3º). Os prazos de 5, 15, 20 e 30 dias não constam do decreto para essa fase (5 e 20 dias lembram prazos da LAI, e 30 dias, o da ouvidoria).',
    fundamento: 'Decreto 6.029/2007, art. 12, caput e § 3º',
  },
  {
    id: 'etp-6029-q04',
    temaId: 'etp-6029',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O procedimento de apuração de infração ética tramita em sigilo permanente, de modo que nem mesmo após a deliberação final da comissão os autos deixam de ser reservados.',
    gabaritoCE: false,
    comentario:
      'Errado. O art. 13 manda manter o procedimento com chancela de reservado até que esteja concluído; após a deliberação, os autos deixam de ser reservados (§ 1º). Ficam protegidos apenas os documentos cobertos por sigilo legal (§§ 2º e 3º).',
    fundamento: 'Decreto 6.029/2007, art. 13, caput e §§ 1º a 3º',
  },
  {
    id: 'etp-6029-q05',
    temaId: 'etp-6029',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'A comissão de ética de uma autarquia federal concluiu, ao fim do procedimento, pela existência de falta ética de servidor que ocupa função de confiança. Segundo o Decreto 6.029/2007, entre as providências cabíveis está:',
    alternativas: [
      'aplicar diretamente ao servidor a pena de suspensão por até 90 dias.',
      'determinar a exoneração do cargo efetivo do servidor.',
      'arquivar o processo, pois a falta ética de ocupante de função de confiança só pode ser apurada pela CEP.',
      'remeter o caso ao Ministério Público, único competente para aplicar sanções éticas.',
      'encaminhar sugestão de exoneração da função de confiança à autoridade hierarquicamente superior, sem prejuízo de encaminhar o caso à CGU ou ao sistema de correição e de recomendar procedimento administrativo, se a gravidade o exigir.',
    ],
    correta: 4,
    comentario:
      'O art. 12, § 5º, lista essas providências: sugestão de exoneração de cargo ou função de confiança (ou devolução ao órgão de origem), encaminhamento à CGU ou à correição e recomendação de procedimento administrativo. A comissão não aplica suspensão nem exonera cargo efetivo, e a CEP não tem competência exclusiva nesse caso.',
    fundamento: 'Decreto 6.029/2007, art. 12, § 5º, I a III',
  },
  {
    id: 'etp-6029-q06',
    temaId: 'etp-6029',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Qualquer cidadão, agente público, pessoa jurídica de direito privado, associação ou entidade de classe pode provocar a atuação da CEP ou de comissão de ética, visando à apuração de infração ética imputada a agente público.',
    gabaritoCE: true,
    comentario:
      'Certo. É o rol do art. 11 do Decreto 6.029/2007. O parágrafo único define agente público de forma ampla, incluindo quem presta serviço, ainda que sem retribuição financeira, à administração federal direta e indireta.',
    fundamento: 'Decreto 6.029/2007, art. 11',
  },
  {
    id: 'etp-6029-q07',
    temaId: 'etp-6029',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Sobre o Sistema de Gestão da Ética do Poder Executivo federal (Decreto 6.029/2007), assinale a alternativa correta.',
    alternativas: [
      'A infração ética cometida por membro de comissão de ética setorial é apurada pela própria comissão a que ele pertence.',
      'Diante de omissão do Código de Ética, a comissão deve deixar de decidir e consultar o Presidente da República.',
      'As decisões das comissões de ética serão resumidas em ementa e, com a omissão dos nomes dos investigados, divulgadas no sítio do próprio órgão, além de remetidas à CEP.',
      'A Secretaria-Executiva da CEP é vinculada à Controladoria-Geral da União.',
      'As normas dos códigos de ética deixam de se aplicar ao agente público enquanto ele estiver em gozo de licença.',
    ],
    correta: 2,
    comentario:
      'O art. 18 manda resumir as decisões em ementa, omitir os nomes dos investigados, divulgar no sítio do órgão e remeter à CEP. Erros: membro de comissão setorial é apurado pela CEP (art. 21); a comissão não pode deixar de decidir, e a omissão se supre por analogia e princípios (art. 16); a Secretaria-Executiva da CEP é vinculada à Casa Civil (art. 4º, parágrafo único); os códigos valem mesmo em licença (art. 24).',
    fundamento: 'Decreto 6.029/2007, arts. 4º, parágrafo único, 16, 18, 21 e 24',
  },
];
