import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Direitos sociais, nacionalidade, direitos políticos e saúde;
 * organização do Estado
 * ------------------------------------------------------------------ */

export const QUESTOES_2: QuestaoTreino[] = [
  /* ---------- dc-direitos-sociais-politicos ---------- */
  {
    id: 'dc-direitos-sociais-politicos-q01',
    temaId: 'dc-direitos-sociais-politicos',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    enunciado: 'São direitos sociais expressamente previstos no art. 6º da Constituição Federal, EXCETO:',
    alternativas: ['a saúde.', 'o transporte.', 'a propriedade.', 'o lazer.', 'a alimentação.'],
    correta: 2,
    comentario:
      'A propriedade é direito individual, garantido no art. 5º, caput e XXII; não está no rol do art. 6º. Saúde, transporte, lazer e alimentação constam expressamente do art. 6º, na redação da EC 90/2015.',
    fundamento: 'CF/88, art. 6º',
  },
  {
    id: 'dc-direitos-sociais-politicos-q02',
    temaId: 'dc-direitos-sociais-politicos',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Para concorrer ao cargo de Prefeito, a Constituição Federal exige, como condição de elegibilidade, a idade mínima de:',
    alternativas: ['18 anos.', '21 anos.', '25 anos.', '30 anos.', '35 anos.'],
    correta: 1,
    comentario:
      'Prefeito e Vice-Prefeito exigem 21 anos, assim como Deputado Federal, Estadual ou Distrital e juiz de paz (art. 14, § 3º, VI, c). 18 anos é para Vereador; 30, para Governador; 35, para Presidente, Vice e Senador. A idade de 25 anos não aparece no artigo.',
    fundamento: 'CF/88, art. 14, § 3º, VI, c',
  },
  {
    id: 'dc-direitos-sociais-politicos-q03',
    temaId: 'dc-direitos-sociais-politicos',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 3,
    enunciado: 'De acordo com o art. 12, § 3º, da Constituição Federal, são privativos de brasileiro nato os cargos a seguir, EXCETO o de:',
    alternativas: [
      'Presidente da Câmara dos Deputados.',
      'Ministro do Supremo Tribunal Federal.',
      'oficial das Forças Armadas.',
      'Ministro de Estado da Saúde.',
      'Ministro de Estado da Defesa.',
    ],
    correta: 3,
    comentario:
      'Entre os Ministros de Estado, só o da Defesa é privativo de nato (art. 12, § 3º, VII, incluído pela EC 23/1999). Os demais cargos das alternativas também estão no § 3º. O Ministro da Saúde pode ser brasileiro naturalizado, desde que maior de 21 anos e no exercício dos direitos políticos (art. 87).',
    fundamento: 'CF/88, art. 12, § 3º',
  },
  {
    id: 'dc-direitos-sociais-politicos-q04',
    temaId: 'dc-direitos-sociais-politicos',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Entre as diretrizes que organizam o sistema único de saúde no art. 198 da Constituição Federal, está a:',
    alternativas: [
      'descentralização, com direção única em cada esfera de governo.',
      'centralização da gestão na União, com execução obrigatória pelos Municípios.',
      'prioridade para os serviços assistenciais, sem prejuízo das atividades preventivas.',
      'participação da comunidade restrita aos conselhos de âmbito federal.',
      'direção compartilhada entre União, Estados e Municípios em cada serviço de saúde.',
    ],
    correta: 0,
    comentario:
      'O art. 198, I, prevê descentralização, com direção única em cada esfera de governo. Por isso estão erradas a centralização na União e a direção compartilhada. O inciso II inverte a alternativa C: a prioridade é para as atividades preventivas, sem prejuízo dos serviços assistenciais. O inciso III prevê participação da comunidade, sem restringi-la à esfera federal.',
    fundamento: 'CF/88, art. 198, I a III',
  },
  {
    id: 'dc-direitos-sociais-politicos-q05',
    temaId: 'dc-direitos-sociais-politicos',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado: 'Sobre a participação da iniciativa privada na assistência à saúde, nos termos do art. 199 da Constituição Federal, assinale a alternativa correta.',
    alternativas: [
      'As instituições privadas participam do SUS de forma substitutiva, podendo assumir a gestão do sistema nos Municípios sem rede pública.',
      'É permitida a destinação de recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos, desde que conveniadas ao SUS.',
      'É livre a participação direta de empresas ou capitais estrangeiros na assistência à saúde, independentemente de previsão legal.',
      'A lei pode autorizar a comercialização de sangue e seus derivados, desde que sob fiscalização da vigilância sanitária.',
      'As instituições privadas podem participar do SUS de forma complementar, mediante contrato de direito público ou convênio, tendo preferência as entidades filantrópicas e as sem fins lucrativos.',
    ],
    correta: 4,
    comentario:
      'A alternativa E reproduz o art. 199, § 1º. A participação privada é complementar, não substitutiva. São vedados recursos públicos para auxílios ou subvenções a instituições com fins lucrativos (§ 2º). Capital estrangeiro só entra nos casos previstos em lei (§ 3º). É vedado todo tipo de comercialização de órgãos, tecidos, sangue e derivados (§ 4º).',
    fundamento: 'CF/88, art. 199, §§ 1º a 4º',
  },
  {
    id: 'dc-direitos-sociais-politicos-q06',
    temaId: 'dc-direitos-sociais-politicos',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 3,
    enunciado: 'A Constituição Federal veda a cassação de direitos políticos. Sua perda ou suspensão só se dará, entre outros casos, em razão de:',
    alternativas: [
      'condenação criminal em primeira instância, ainda pendente de recurso.',
      'improbidade administrativa, nos termos do art. 37, § 4º.',
      'incapacidade civil relativa.',
      'não pagamento de multa eleitoral.',
      'cancelamento da naturalização por ato administrativo do Ministro da Justiça.',
    ],
    correta: 1,
    comentario:
      'A improbidade administrativa está no art. 15, V. Os distratores alteram as demais hipóteses: a condenação criminal precisa ter transitado em julgado (III); só a incapacidade civil absoluta suspende os direitos políticos (II); o cancelamento da naturalização exige sentença transitada em julgado (I). Multa eleitoral não consta do rol.',
    fundamento: 'CF/88, art. 15',
  },
  {
    id: 'dc-direitos-sociais-politicos-q07',
    temaId: 'dc-direitos-sociais-politicos',
    formato: 'multipla',
    estilo: 'ibam',
    dificuldade: 2,
    enunciado: 'Nos termos do art. 14 da Constituição Federal, o alistamento eleitoral e o voto são FACULTATIVOS para o:',
    alternativas: [
      'cidadão alfabetizado de 19 anos.',
      'cidadão alfabetizado de 65 anos.',
      'conscrito, durante o período do serviço militar obrigatório.',
      'jovem de 17 anos.',
      'estrangeiro residente no País há mais de quinze anos.',
    ],
    correta: 3,
    comentario:
      'São facultativos para os analfabetos, os maiores de 70 anos e os maiores de 16 e menores de 18 anos (art. 14, § 1º, II). Aos 19 e aos 65 anos, o cidadão alfabetizado é obrigado a votar (§ 1º, I). Conscritos, durante o serviço obrigatório, e estrangeiros não podem se alistar (§ 2º).',
    fundamento: 'CF/88, art. 14, §§ 1º e 2º',
  },
  {
    id: 'dc-direitos-sociais-politicos-q08',
    temaId: 'dc-direitos-sociais-politicos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação.',
    gabaritoCE: true,
    comentario:
      'Certo. É a redação literal do art. 196. Repare nos pares que a banca costuma trocar: acesso “universal e igualitário” (não “seletivo” ou “prioritário”) e ações de “promoção, proteção e recuperação”.',
    fundamento: 'CF/88, art. 196',
  },
  {
    id: 'dc-direitos-sociais-politicos-q09',
    temaId: 'dc-direitos-sociais-politicos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Conforme a Constituição Federal, a União aplicará anualmente em ações e serviços públicos de saúde, no mínimo, 15% da receita corrente líquida do respectivo exercício financeiro, cabendo a lei complementar estabelecer os percentuais mínimos dos estados, do Distrito Federal e dos municípios.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 198, § 2º, I, fixa o mínimo da União em 15% da receita corrente líquida (redação da EC 86/2015). O § 3º, I, remete à lei complementar os percentuais de Estados, DF e Municípios. A LC 141/2012 os fixa em 12% para os Estados (art. 6º) e 15% para os Municípios (art. 7º).',
    fundamento: 'CF/88, art. 198, § 2º, I, e § 3º, I',
  },
  {
    id: 'dc-direitos-sociais-politicos-q10',
    temaId: 'dc-direitos-sociais-politicos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'São condições de elegibilidade, na forma da lei, a nacionalidade brasileira, o pleno exercício dos direitos políticos, o alistamento eleitoral, o domicílio eleitoral na circunscrição e a filiação partidária, sendo exigida a idade mínima de trinta anos para o cargo de senador.',
    gabaritoCE: false,
    comentario:
      'Errado. A lista de condições está correta (art. 14, § 3º, I a V), mas Senador exige 35 anos, como Presidente e Vice (VI, a). Trinta anos é a idade exigida para Governador e Vice-Governador (VI, b).',
    fundamento: 'CF/88, art. 14, § 3º, VI, a e b',
  },

  /* ---------- dc-organizacao-estado ---------- */
  {
    id: 'dc-organizacao-estado-q01',
    temaId: 'dc-organizacao-estado',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Conforme o art. 30 da Constituição Federal, compete aos Municípios:',
    alternativas: [
      'legislar sobre direito do trabalho.',
      'explorar os serviços locais de gás canalizado.',
      'legislar sobre assuntos de interesse local.',
      'emitir moeda.',
      'organizar e manter o Poder Judiciário municipal.',
    ],
    correta: 2,
    comentario:
      'Legislar sobre interesse local é a primeira competência municipal (art. 30, I). Direito do trabalho é competência privativa da União (art. 22, I). O gás canalizado cabe aos Estados (art. 25, § 2º). Emitir moeda é competência da União (art. 21, VII). Não existe Poder Judiciário municipal (art. 92).',
    fundamento: 'CF/88, art. 30, I',
  },
  {
    id: 'dc-organizacao-estado-q02',
    temaId: 'dc-organizacao-estado',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado: 'Nos termos do art. 29 da Constituição Federal, a Lei Orgânica do Município será:',
    alternativas: [
      'votada em turno único e aprovada por maioria absoluta dos membros da Câmara Municipal.',
      'votada em dois turnos, com interstício mínimo de dez dias, aprovada por três quintos dos membros da Câmara e sancionada pelo Prefeito.',
      'elaborada pela Assembleia Legislativa e promulgada pelo Governador do Estado.',
      'votada em dois turnos, com interstício mínimo de dez dias, e aprovada por dois terços dos membros da Câmara Municipal, que a promulgará.',
      'votada em dois turnos, com interstício mínimo de trinta dias, e aprovada por dois terços dos membros da Câmara, cabendo a promulgação ao Prefeito.',
    ],
    correta: 3,
    comentario:
      'O caput do art. 29 exige dois turnos, interstício mínimo de dez dias e aprovação por dois terços dos membros da Câmara Municipal, que a promulga. Não há sanção do Prefeito. O quórum não é 3/5 nem maioria absoluta, e o intervalo não é de 30 dias. A Assembleia Legislativa não elabora a lei orgânica municipal.',
    fundamento: 'CF/88, art. 29, caput',
  },
  {
    id: 'dc-organizacao-estado-q03',
    temaId: 'dc-organizacao-estado',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    enunciado: 'Segundo a Constituição Federal, cuidar da saúde e assistência pública é:',
    alternativas: [
      'competência comum da União, dos Estados, do Distrito Federal e dos Municípios.',
      'competência privativa da União.',
      'competência exclusiva dos Municípios.',
      'competência concorrente apenas dos Estados e do Distrito Federal.',
      'competência residual dos Estados.',
    ],
    correta: 0,
    comentario:
      'O art. 23, II, inclui “cuidar da saúde e assistência pública” entre as competências comuns de todos os entes. Por isso, a responsabilidade pela saúde é compartilhada; o Município, por exemplo, presta os serviços com cooperação técnica e financeira da União e do Estado (art. 30, VII). As demais alternativas atribuem a matéria a um só ente.',
    fundamento: 'CF/88, art. 23, II',
  },
  {
    id: 'dc-organizacao-estado-q04',
    temaId: 'dc-organizacao-estado',
    formato: 'multipla',
    estilo: 'ibam',
    dificuldade: 2,
    enunciado: 'O parecer prévio emitido pelo órgão competente sobre as contas que o Prefeito deve anualmente prestar:',
    alternativas: [
      'vincula a Câmara Municipal, que não pode rejeitá-lo.',
      'só deixará de prevalecer por decisão da maioria absoluta dos membros da Câmara Municipal.',
      'é emitido pelo Tribunal de Justiça do Estado.',
      'só deixará de prevalecer por decisão de dois terços dos membros da Câmara Municipal.',
      'é dispensado nos Municípios com até quinze mil habitantes.',
    ],
    correta: 3,
    comentario:
      'O art. 31, § 2º, exige dois terços dos membros da Câmara para afastar o parecer prévio. Ele não é absolutamente vinculante e não basta maioria absoluta. O parecer é do Tribunal de Contas, e não do TJ (art. 31, § 1º). Não há dispensa por porte do Município.',
    fundamento: 'CF/88, art. 31, § 2º',
  },
  {
    id: 'dc-organizacao-estado-q05',
    temaId: 'dc-organizacao-estado',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 3,
    enunciado: 'No âmbito da competência legislativa concorrente (art. 24 da Constituição Federal), é correto afirmar:',
    alternativas: [
      'Os Municípios estão expressamente arrolados no caput do art. 24 como titulares da competência concorrente.',
      'A superveniência de lei federal sobre normas gerais revoga a lei estadual, no que lhe for contrário.',
      'Inexistindo lei federal sobre normas gerais, os Estados exercerão a competência legislativa plena, para atender a suas peculiaridades.',
      'A competência da União para legislar sobre normas gerais exclui a competência suplementar dos Estados.',
      'A proteção e defesa da saúde é matéria de competência legislativa privativa da União.',
    ],
    correta: 2,
    comentario:
      'A alternativa C reproduz o art. 24, § 3º. A lei federal superveniente suspende a eficácia da lei estadual, não a revoga (§ 4º). As normas gerais da União não excluem a competência suplementar dos Estados (§ 2º). O caput lista só União, Estados e DF. Proteção e defesa da saúde é matéria concorrente (XII).',
    fundamento: 'CF/88, art. 24, XII e §§ 1º a 4º',
  },
  {
    id: 'dc-organizacao-estado-q06',
    temaId: 'dc-organizacao-estado',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 3,
    enunciado: 'A criação, a incorporação, a fusão e o desmembramento de Municípios far-se-ão:',
    alternativas: [
      'por lei complementar federal, após plebiscito envolvendo a população de todo o Estado.',
      'por lei ordinária federal, mediante referendo das populações envolvidas.',
      'por resolução da Assembleia Legislativa, dispensada a consulta popular.',
      'por lei municipal aprovada por dois terços da Câmara, após plebiscito.',
      'por lei estadual, dentro do período determinado por lei complementar federal, e dependerão de consulta prévia, mediante plebiscito, às populações dos Municípios envolvidos, após divulgação dos Estudos de Viabilidade Municipal.',
    ],
    correta: 4,
    comentario:
      'A alternativa E reproduz o art. 18, § 4º (redação da EC 15/1996). A lei complementar federal só fixa o período; o ato de criação é lei estadual. A consulta é plebiscito, e não referendo, e alcança as populações dos Municípios envolvidos, não todo o Estado. Resolução ou lei municipal não criam Município.',
    fundamento: 'CF/88, art. 18, § 4º',
  },
  {
    id: 'dc-organizacao-estado-q07',
    temaId: 'dc-organizacao-estado',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'O Estado poderá intervir em seus Municípios, entre outras hipóteses previstas no art. 35 da Constituição Federal, quando:',
    alternativas: [
      'deixar de ser paga, por um ano, a dívida fundada, ainda que por motivo de força maior.',
      'não tiver sido aplicado o mínimo exigido da receita municipal na manutenção e desenvolvimento do ensino e nas ações e serviços públicos de saúde.',
      'o Prefeito for denunciado por crime comum.',
      'a Câmara Municipal rejeitar o parecer prévio do Tribunal de Contas.',
      'o Município criar distritos sem autorização prévia do Governador.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é o art. 35, III (redação da EC 29/2000), hipótese importante para quem trabalha no SUS. A dívida fundada precisa ficar sem pagamento por dois anos consecutivos, sem motivo de força maior (I). Denúncia do Prefeito e rejeição do parecer não são hipóteses de intervenção. O Município cria distritos observada a legislação estadual (art. 30, IV), sem autorização do Governador.',
    fundamento: 'CF/88, art. 35, I e III',
  },
  {
    id: 'dc-organizacao-estado-q08',
    temaId: 'dc-organizacao-estado',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'A organização político-administrativa da República Federativa do Brasil compreende a União, os estados, o Distrito Federal e os municípios, todos autônomos, nos termos da Constituição Federal.',
    gabaritoCE: true,
    comentario:
      'Certo. É a redação do art. 18, caput. Os municípios são entes federativos autônomos, com lei orgânica própria (art. 29). Os territórios, quando existirem, integram a União (art. 18, § 2º).',
    fundamento: 'CF/88, art. 18, caput',
  },
  {
    id: 'dc-organizacao-estado-q09',
    temaId: 'dc-organizacao-estado',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'As contas dos municípios ficarão, durante noventa dias, anualmente, à disposição de qualquer contribuinte, para exame e apreciação, o qual poderá questionar-lhes a legitimidade, nos termos da lei.',
    gabaritoCE: false,
    comentario:
      'Errado. O prazo do art. 31, § 3º, é de sessenta dias. O restante do item reproduz o dispositivo: qualquer contribuinte pode examinar as contas e questionar sua legitimidade.',
    fundamento: 'CF/88, art. 31, § 3º',
  },
  {
    id: 'dc-organizacao-estado-q10',
    temaId: 'dc-organizacao-estado',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A Constituição Federal permite que municípios com mais de quinhentos mil habitantes criem tribunais de contas municipais próprios para auxiliar a câmara municipal no controle externo.',
    gabaritoCE: false,
    comentario:
      'Errado. O art. 31, § 4º, veda a criação de Tribunais, Conselhos ou órgãos de Contas Municipais, sem exceção por número de habitantes. Desde a EC 139/2026, o § 1º e o art. 75 vedam também a extinção, criação ou instalação desses órgãos de contas. Os que já existiam continuam auxiliando a Câmara.',
    fundamento: 'CF/88, art. 31, §§ 1º e 4º',
  },
];
