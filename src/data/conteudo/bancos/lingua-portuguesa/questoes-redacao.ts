import type { QuestaoTreino } from '../../../types';

/**
 * Redação Oficial — conferida no Manual de Redação da Presidência da República, 3ª ed. (2018):
 * itens 3 (atributos), 4.1 (pronomes de tratamento), 4.4 (vocativo), 5 (padrão ofício), 6.2 (exposição de motivos),
 * 6.3 (mensagem) e 6.4 (correio eletrônico).
 */
export const QUESTOES_REDACAO: QuestaoTreino[] = [
  {
    id: 'lp-redacao-oficial-q01',
    temaId: 'lp-redacao-oficial',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'Segundo o Manual de Redação da Presidência da República (3ª ed., 2018), o fecho adequado para um ofício dirigido a autoridade de hierarquia superior à do remetente, inclusive o Presidente da República, é',
    alternativas: ['Atenciosamente,', 'Respeitosamente,', 'Cordialmente,', 'Saudações,', 'Att.,'],
    correta: 1,
    comentario:
      'O Manual estabelece só dois fechos: “Respeitosamente,” para autoridades de hierarquia superior (inclusive o Presidente da República) e “Atenciosamente,” para autoridades de mesma hierarquia, de hierarquia inferior e demais casos. “Cordialmente”, “Saudações” e “Att.” não são fechos oficiais. Comunicações a autoridades estrangeiras seguem rito próprio.',
  },
  {
    id: 'lp-redacao-oficial-q02',
    temaId: 'lp-redacao-oficial',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'De acordo com o Manual de Redação da Presidência da República (3ª ed., 2018), o vocativo adequado em comunicação dirigida a um Ministro de Estado é',
    alternativas: [
      'Excelentíssimo Senhor Ministro,',
      'Ilustríssimo Senhor Ministro,',
      'Senhor Ministro,',
      'Digníssimo Senhor Ministro,',
      'Prezado Ministro de Estado:',
    ],
    correta: 2,
    comentario:
      'O vocativo “Excelentíssimo Senhor” é reservado aos Chefes de Poder (Presidente da República, Presidente do Congresso Nacional e Presidente do STF). As demais autoridades, mesmo as tratadas por Vossa Excelência, recebem “Senhor” ou “Senhora” + cargo, seguido de vírgula: “Senhor Ministro,”. “Ilustríssimo” e “Digníssimo” foram abolidos.',
  },
  {
    id: 'lp-redacao-oficial-q03',
    temaId: 'lp-redacao-oficial',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Conforme o Manual de Redação da Presidência da República (3ª ed., 2018), os tratamentos Digníssimo (DD) e Ilustríssimo (Ilmo.) devem ser empregados nas comunicações dirigidas a autoridades do Poder Judiciário.',
    gabaritoCE: false,
    comentario:
      'Errado. O Manual afirma que, em comunicações oficiais, “está abolido o uso de Digníssimo (DD) e de Ilustríssimo (Ilmo.)” e recomenda evitar o uso indiscriminado de “doutor”: o tratamento por “Senhor” já confere a formalidade desejada. No Executivo federal, o Decreto 9.758/2019 (art. 3º) também veda essas formas, assim como “Vossa Excelência”, “Vossa Senhoria” e “doutor”, salvo as exceções do próprio decreto.',
  },
  {
    id: 'lp-redacao-oficial-q04',
    temaId: 'lp-redacao-oficial',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Segundo o Manual de Redação da Presidência da República (3ª ed., 2018), no endereçamento de ofício dirigido a autoridade tratada por Vossa Excelência, usa-se a forma',
    alternativas: [
      '“A Sua Excelência o Senhor”.',
      '“Ao Excelentíssimo Senhor Doutor”.',
      '“Ilustríssimo Senhor”.',
      '“A Sua Senhoria o Senhor”.',
      '“Digníssimo Senhor”.',
    ],
    correta: 0,
    comentario:
      'Para autoridades tratadas por Vossa Excelência, o endereçamento é “A Sua Excelência o Senhor” (ou “a Senhora”) — sem acento grave, pois pronome de tratamento não admite artigo. Para quem recebe Vossa Senhoria, usa-se “Ao Senhor”/“À Senhora”, e o Manual diz expressamente que não se utiliza “A Sua Senhoria o Senhor”. Ilustríssimo e Digníssimo foram abolidos. Obs.: para agentes públicos federais, o Decreto 9.758/2019 (art. 4º) manda omitir pronome de tratamento e nome no endereçamento, salvo exceções; a questão pede a regra do Manual.',
  },
  {
    id: 'lp-redacao-oficial-q05',
    temaId: 'lp-redacao-oficial',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'Considerando as orientações do Manual de Redação da Presidência da República (3ª ed., 2018) sobre concordância com pronomes de tratamento, assinale a frase correta, dirigida a uma Ministra de Estado.',
    alternativas: [
      'Vossa Excelência estais convidada e podereis levar vossos assessores.',
      'Vossa Excelência está convidado para a solenidade e poderá levar seus assessores.',
      'Vossa Excelência está convidada e poderá levar vossos assessores.',
      'Vossa Excelência está convidada para a solenidade e poderá levar seus assessores.',
      'Vossa Excelência estás convidada e poderás levar teus assessores.',
    ],
    correta: 3,
    comentario:
      'Os pronomes de tratamento levam o verbo e os possessivos para a 3ª pessoa (“está”, “poderá”, “seus”), e o adjetivo concorda com o sexo da pessoa (“convidada”, para uma Ministra). Formas como “estais”, “vossos”, “estás” e “teus” contrariam o Manual (item 4.1.1).',
  },
  {
    id: 'lp-redacao-oficial-q06',
    temaId: 'lp-redacao-oficial',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'Com a 3ª edição do Manual de Redação da Presidência da República (2018), os expedientes antes denominados aviso, ofício e memorando passaram a',
    alternativas: [
      'ser substituídos exclusivamente pelo e-mail institucional.',
      'adotar nomenclatura e diagramação únicas, com o nome “ofício”, no chamado padrão ofício.',
      'ser usados apenas pelo Presidente da República.',
      'manter a distinção anterior, apenas com nova formatação.',
      'ser chamados de “mensagem”.',
    ],
    correta: 1,
    comentario:
      'O Manual aboliu a distinção entre aviso (de Ministro para autoridades de mesma hierarquia), ofício e memorando (entre unidades de um mesmo órgão): adota-se o termo “ofício” nas três hipóteses, com estrutura única — o padrão ofício. A mensagem é outro gênero (comunicação entre Chefes de Poder).',
  },
  {
    id: 'lp-redacao-oficial-q07',
    temaId: 'lp-redacao-oficial',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Segundo o Manual de Redação da Presidência da República (3ª ed., 2018), a grafia “Brasília/DF, 01 de Fevereiro de 2018.” está correta para o local e a data de um ofício.',
    gabaritoCE: false,
    comentario:
      'Errado. O primeiro dia do mês se escreve em numeral ordinal (1º), não se usa zero à esquerda, o mês tem inicial minúscula e não se põe a sigla da unidade da federação depois da cidade: “Brasília, 1º de fevereiro de 2018.” — com ponto-final e alinhado à margem direita.',
  },
  {
    id: 'lp-redacao-oficial-q08',
    temaId: 'lp-redacao-oficial',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 1,
    enunciado: 'Segundo o Manual de Redação da Presidência da República (3ª ed., 2018), NÃO é atributo da redação oficial',
    alternativas: [
      'a clareza e a precisão.',
      'a impessoalidade.',
      'a concisão.',
      'a formalidade e a padronização.',
      'o uso de linguagem figurada e de estilo pessoal.',
    ],
    correta: 4,
    comentario:
      'O Manual lista como atributos: clareza e precisão; objetividade; concisão; coesão e coerência; impessoalidade; formalidade e padronização; e uso da norma-padrão. Linguagem figurada e impressões pessoais são próprias do texto literário e não cabem na redação oficial.',
  },
  {
    id: 'lp-redacao-oficial-q09',
    temaId: 'lp-redacao-oficial',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Segundo o Manual de Redação da Presidência da República (3ª ed., 2018), em relação ao correio eletrônico (e-mail) como documento oficial, é correto afirmar que',
    alternativas: [
      'a abreviação “Att.” é aceita como fecho em e-mails profissionais.',
      'local e data devem ser repetidos no corpo da mensagem.',
      'o fecho padrão é “Atenciosamente”, e a linguagem deve ser formal, como em qualquer documento oficial.',
      'o e-mail sem certificação digital tem sempre valor de documento original.',
      'recomenda-se usar caixa alta para destacar trechos importantes.',
    ],
    correta: 2,
    comentario:
      'O Manual afirma que “Atenciosamente” é o fecho padrão e que, embora o e-mail admita em algumas situações saudação e fecho menos formais, sua linguagem deve ser formal. “Att.”, “Abraços” e “Saudações” não são fechos oficiais; local e data são desnecessários (o sistema já os registra); o valor documental depende de certificação digital (ICP-Brasil); e a caixa alta denota agressividade.',
  },
  {
    id: 'lp-redacao-oficial-q10',
    temaId: 'lp-redacao-oficial',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Segundo o Manual de Redação da Presidência da República (3ª ed., 2018), assinalar a alternativa em que o campo de assunto de um ofício está redigido de acordo com as orientações.',
    alternativas: [
      'Assunto: Solicitamos a aquisição de computadores para o setor de regulação',
      'Assunto: Aquisição de computadores.',
      'ASSUNTO - aquisição de computadores',
      'Assunto: Venho por meio deste solicitar computadores.',
      'Assunto: Encaminhar o relatório anual.',
    ],
    correta: 1,
    comentario:
      'O assunto vem precedido da palavra “Assunto” e de dois-pontos; a descrição começa com maiúscula, não usa verbos, tem de quatro a cinco palavras, vai em negrito e termina com ponto-final. A, D e E usam verbos (D ainda com a fórmula prolixa “venho por meio deste”); C troca os dois-pontos por hífen e foge da grafia indicada.',
  },
  {
    id: 'lp-redacao-oficial-q11',
    temaId: 'lp-redacao-oficial',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Segundo o Manual de Redação da Presidência da República (3ª ed., 2018), no padrão ofício, os parágrafos do texto são numerados apenas quando o documento tem três ou mais parágrafos, e não se numeram o vocativo e o fecho.',
    gabaritoCE: true,
    comentario:
      'Certo. O Manual prevê a numeração dos parágrafos “apenas quando o documento tiver três ou mais parágrafos, desde o primeiro parágrafo”, e determina que não se numeram o vocativo e o fecho.',
  },
  {
    id: 'lp-redacao-oficial-q12',
    temaId: 'lp-redacao-oficial',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 3,
    enunciado: 'Segundo o Manual de Redação da Presidência da República (3ª ed., 2018), assinale a alternativa correta.',
    alternativas: [
      'A exposição de motivos é dirigida ao Presidente ou ao Vice-Presidente da República, em regra por Ministro de Estado, para propor medida, submeter projeto de ato normativo ou informar sobre determinado assunto.',
      'A mensagem é o expediente usado entre unidades administrativas de um mesmo órgão.',
      'A exposição de motivos interministerial dispensa a assinatura dos Ministros envolvidos.',
      'A mensagem traz, ao final, a identificação do signatário com nome e cargo.',
      'O fecho “Atenciosamente” é o adequado na exposição de motivos dirigida ao Presidente da República.',
    ],
    correta: 0,
    comentario:
      'A reproduz a definição do Manual. B: mensagem é a comunicação entre Chefes dos Poderes (em especial do Executivo ao Legislativo). C: a EM interministerial é assinada por todos os Ministros envolvidos. D: a mensagem, como os demais atos assinados pelo Presidente da República, não traz identificação do signatário. E: ao Presidente da República, o fecho é “Respeitosamente”.',
  },
];
