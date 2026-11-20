import type { ResumoTema } from '../../../types';
import { ATUALIZADO, CF, EC_131, EC_140, EC_141, LC_141, SV_25 } from './fontes';

export const RESUMOS_1: ResumoTema[] = [
  /* ---------- dc-principios ---------- */
  {
    temaId: 'dc-principios',
    titulo: 'Princípios fundamentais (arts. 1º a 4º)',
    resumo:
      'A banca troca itens entre as listas: põe um objetivo no lugar de um fundamento, ou um princípio das relações internacionais no lugar de um objetivo. Quem sabe separar os arts. 1º, 3º e 4º acerta quase tudo.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O Título I da Constituição abre com a identidade do Estado brasileiro. Pelo **art. 1º**, a República Federativa do Brasil é formada pela **união indissolúvel dos Estados e Municípios e do Distrito Federal** e constitui-se em **Estado Democrático de Direito**. “Indissolúvel” quer dizer que não há direito de secessão. Os **Territórios** não aparecem nessa lista: quando existirem, **integram a União** (art. 18, § 2º).\n\nO **parágrafo único do art. 1º** diz que **todo o poder emana do povo**, que o exerce **por meio de representantes eleitos ou diretamente**, nos termos da Constituição. Por isso se fala em democracia semidireta: representação mais plebiscito, referendo e iniciativa popular (art. 14).\n\nO **art. 2º** traz a separação dos Poderes: **Legislativo, Executivo e Judiciário**, “independentes e harmônicos entre si”. O Ministério Público e os Tribunais de Contas **não** são Poderes.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Artigo', 'Conteúdo', 'Como reconhecer', 'Itens'],
          linhas: [
            ['Art. 1º', 'Fundamentos', 'Substantivos (a base do Estado)', 'Soberania; cidadania; dignidade da pessoa humana; valores sociais do trabalho e da livre iniciativa; pluralismo político'],
            ['Art. 3º', 'Objetivos fundamentais', 'Verbos no infinitivo (metas)', 'Construir sociedade livre, justa e solidária; garantir o desenvolvimento nacional; erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais; promover o bem de todos, sem preconceitos'],
            ['Art. 4º', 'Princípios nas relações internacionais', 'Política externa', 'Independência nacional; prevalência dos direitos humanos; autodeterminação dos povos; não intervenção; igualdade entre os Estados; defesa da paz; solução pacífica dos conflitos; repúdio ao terrorismo e ao racismo; cooperação entre os povos; concessão de asilo político'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          'Mnemônico dos fundamentos (art. 1º): **SO-CI-DI-VA-PLU**.',
          'Mnemônico dos objetivos (art. 3º): **CON-GA-ERRA-PRO** (construir, garantir, erradicar, promover).',
          'Art. 3º, IV: promover o bem de todos, sem preconceitos de **origem, raça, sexo, cor, idade** e quaisquer outras formas de discriminação.',
          'Art. 4º, parágrafo único: o Brasil buscará a integração econômica, política, social e cultural dos povos da **América Latina**, visando à formação de uma **comunidade latino-americana de nações**.',
          'Forma de Estado: **federação**. Forma de governo: **república**. Sistema de governo: **presidencialismo**. Regime: **democrático**. A forma federativa é cláusula pétrea (art. 60, § 4º, I).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Fundamento, objetivo ou princípio internacional?',
        enunciado:
          'Classifique: (1) dignidade da pessoa humana; (2) prevalência dos direitos humanos; (3) garantir o desenvolvimento nacional; (4) soberania; (5) independência nacional.',
        resolucao:
          '(1) Fundamento (art. 1º, III). (2) Princípio das relações internacionais (art. 4º, II). (3) Objetivo, pois começa com verbo (art. 3º, II). (4) Fundamento (art. 1º, I). (5) Princípio das relações internacionais (art. 4º, I). Os pares “dignidade × direitos humanos” e “soberania × independência” são as trocas preferidas das bancas.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas clássicas: (a) o art. 3º manda **erradicar** a pobreza e a marginalização, mas só **reduzir** as desigualdades sociais e regionais. “Erradicar as desigualdades” está errado. (b) **Valores sociais do trabalho e da livre iniciativa** formam um único fundamento; a livre iniciativa está no art. 1º, IV. (c) O asilo do art. 4º, X, é o **asilo político**. (d) A integração prevista é com a **América Latina**, e não com o Mercosul ou com “as Américas”. (e) “Todo o poder emana do povo” e é exercido por representantes **ou diretamente**; item que diga “exclusivamente por representantes” está errado.',
      },
    ],
    fontes: [CF],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- dc-direitos-individuais ---------- */
  {
    temaId: 'dc-direitos-individuais',
    titulo: 'Direitos individuais e coletivos (art. 5º) e remédios constitucionais',
    resumo:
      'O art. 5º é o artigo mais cobrado da Constituição. A banca copia o inciso e troca uma palavra: “dia” por “noite”, “aviso” por “autorização”, “imprescritível” por “inafiançável”. Nos remédios, cobra qual ação protege qual direito e quem pode propor.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O **caput do art. 5º** garante aos **brasileiros e aos estrangeiros residentes no País** a inviolabilidade do direito à **vida, à liberdade, à igualdade, à segurança e à propriedade**. Os 79 incisos detalham esses cinco direitos. O inciso mais novo é o **LXXIX** (EC 115/2022): proteção dos dados pessoais, inclusive nos meios digitais.\n\nTrês parágrafos caem muito: **§ 1º**, as normas definidoras dos direitos e garantias fundamentais têm **aplicação imediata**; **§ 2º**, o rol não é taxativo; **§ 3º**, tratados e convenções sobre **direitos humanos** aprovados **em cada Casa do Congresso, em dois turnos, por três quintos** dos votos dos membros equivalem a **emendas constitucionais**.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Inciso', 'Regra', 'Pegadinha'],
          linhas: [
            ['IV', 'Livre manifestação do pensamento, vedado o anonimato', 'Anonimato é vedado, não “permitido em casos de interesse público”'],
            ['XI', 'Casa: sem consentimento, só em flagrante delito, desastre ou para prestar socorro (a qualquer hora) ou, durante o dia, por determinação judicial', 'Ordem judicial só de dia; a polícia sem ordem judicial só entra nas três situações de urgência'],
            ['XII', 'Sigilo das comunicações telefônicas: quebra só por ordem judicial, para investigação criminal ou instrução processual penal', 'Não serve para processo civil ou administrativo'],
            ['XVI', 'Reunião pacífica, sem armas, em locais abertos ao público, independentemente de autorização; exige-se prévio aviso', 'Aviso, não autorização'],
            ['XIX', 'Associação: dissolução compulsória só por decisão judicial transitada em julgado; suspensão das atividades, por decisão judicial', 'Trânsito em julgado só para dissolver'],
            ['XLII', 'Racismo: inafiançável e imprescritível, com reclusão', 'Imprescritíveis: só racismo (XLII) e ação de grupos armados contra a ordem constitucional (XLIV)'],
            ['XLIII', 'Tortura, tráfico de drogas, terrorismo e hediondos: inafiançáveis e insuscetíveis de graça ou anistia', 'Não são imprescritíveis'],
            ['XLVII', 'Não haverá penas de morte (salvo guerra declarada), perpétua, de trabalhos forçados, de banimento ou cruéis', 'A exceção da pena de morte é só a guerra declarada'],
            ['LI', 'Brasileiro nato nunca é extraditado; naturalizado, só por crime comum anterior à naturalização ou tráfico de drogas', 'Para o nato não há exceção'],
            ['LVII', 'Ninguém será considerado culpado até o trânsito em julgado da sentença penal condenatória', 'Não basta condenação em segunda instância'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Remédio', 'Protege', 'Base'],
          linhas: [
            ['Habeas corpus', 'Liberdade de locomoção, contra violência ou coação ilegal (já ocorrida ou ameaçada)', 'Art. 5º, LXVIII; gratuito (LXXVII)'],
            ['Habeas data', 'Conhecer ou retificar informações da própria pessoa em registros ou bancos de dados de entidades governamentais ou de caráter público', 'Art. 5º, LXXII; gratuito (LXXVII)'],
            ['Mandado de segurança', 'Direito líquido e certo não amparado por HC ou HD, contra autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público', 'Art. 5º, LXIX'],
            ['MS coletivo', 'Pode ser impetrado por partido político com representação no Congresso Nacional ou por organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano', 'Art. 5º, LXX'],
            ['Mandado de injunção', 'Falta de norma regulamentadora que torne inviável o exercício de direitos e liberdades constitucionais', 'Art. 5º, LXXI'],
            ['Ação popular', 'Qualquer cidadão pode pedir a anulação de ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural; isento de custas e sucumbência, salvo má-fé', 'Art. 5º, LXXIII'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Qual remédio?',
        enunciado:
          'Um médico aprovado em concurso municipal, dentro do número de vagas e com toda a documentação, tem a posse negada por ato do Secretário de Saúde que contraria o edital. Um paciente quer saber o que consta a seu respeito no cadastro de um órgão público, que se recusa a informar. Quais remédios cabem?',
        resolucao:
          'No primeiro caso, há direito líquido e certo, comprovado por documentos, violado por autoridade pública: **mandado de segurança** (LXIX). No segundo, o paciente quer conhecer informações relativas à própria pessoa em banco de dados de entidade governamental: **habeas data** (LXXII, a). O MS é residual: só cabe quando o direito não é amparado por HC ou HD.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas de remédios e de prisão: (a) só **HC e HD** são gratuitos pela Constituição; (b) a ação popular é do **cidadão**, isto é, do eleitor; pessoa jurídica e estrangeiro não a propõem; (c) o requisito de **um ano de funcionamento** no MS coletivo não se aplica a partido político; (d) o inciso LXVII ainda fala em prisão civil do **depositário infiel**, mas a **Súmula Vinculante 25** do STF diz que essa prisão é ilícita, qualquer que seja a modalidade do depósito. Hoje, só cabe prisão civil do devedor de **alimentos**.',
      },
    ],
    fontes: [CF, SV_25],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- dc-direitos-sociais-politicos ---------- */
  {
    temaId: 'dc-direitos-sociais-politicos',
    titulo: 'Direitos sociais, nacionalidade, direitos políticos e saúde (arts. 6º a 16 e 196 a 200)',
    resumo:
      'A banca cobra o rol do art. 6º, alguns incisos do art. 7º, os cargos privativos de brasileiro nato, as idades mínimas de elegibilidade e as hipóteses do art. 15. Para o médico, os arts. 196 a 200 (saúde) aparecem com frequência.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Art. 6º** (redação da EC 90/2015): são direitos sociais a **educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância e a assistência aos desamparados**. O parágrafo único (EC 114/2021) garante **renda básica familiar** a todo brasileiro em situação de vulnerabilidade social. Propriedade **não** está no art. 6º: é direito individual (art. 5º, XXII).\n\nNo **art. 7º**, os incisos mais cobrados: **XVII**, férias com pelo menos um terço a mais; **XVIII**, licença à gestante de **120 dias**; **XXIX**, prescrição de cinco anos, até o limite de dois anos após a extinção do contrato; **XXXIII**, proibição de trabalho noturno, perigoso ou insalubre a **menores de 18** e de qualquer trabalho a **menores de 16**, salvo aprendiz, **a partir de 14**. O **art. 9º** assegura o direito de greve; para o servidor público, ele é exercido nos termos de **lei específica** (art. 37, VII).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Nacionalidade (art. 12)', 'Regra'],
          linhas: [
            ['Nato (I, a)', 'Nascido no Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país'],
            ['Nato (I, b e c)', 'Nascido no exterior, de pai brasileiro ou mãe brasileira: se qualquer deles estiver a serviço do Brasil (b); ou, não estando, se for registrado em repartição brasileira competente ou vier a residir no Brasil e optar, em qualquer tempo, depois de atingida a maioridade, pela nacionalidade brasileira (c)'],
            ['Naturalizado (II, a)', 'Originários de países de língua portuguesa: residência por um ano ininterrupto e idoneidade moral'],
            ['Naturalizado (II, b)', 'Estrangeiros residentes há mais de 15 anos ininterruptos e sem condenação penal, desde que requeiram'],
            ['Privativos de nato (§ 3º)', 'Presidente e Vice-Presidente da República; Presidente da Câmara; Presidente do Senado; Ministro do STF; carreira diplomática; oficial das Forças Armadas; Ministro de Estado da Defesa'],
            ['Perda (§§ 4º e 5º, EC 131/2023)', 'Cancelamento da naturalização por sentença judicial (fraude no processo ou atentado contra a ordem constitucional e o Estado Democrático) ou pedido expresso de perda, ressalvadas situações que acarretem apatridia. A simples aquisição de outra nacionalidade não gera mais perda, e quem renunciou pode readquirir a nacionalidade originária, nos termos da lei'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Direitos políticos (arts. 14 a 16)', 'Regra'],
          linhas: [
            ['Voto obrigatório', 'Maiores de 18 anos'],
            ['Voto facultativo', 'Analfabetos, maiores de 70 anos e maiores de 16 e menores de 18 anos'],
            ['Inalistáveis', 'Estrangeiros e, durante o serviço militar obrigatório, os conscritos'],
            ['Inelegíveis (§ 4º)', 'Os inalistáveis e os analfabetos'],
            ['Idade mínima', '35 anos: Presidente, Vice e Senador; 30: Governador e Vice; 21: Deputado Federal, Estadual ou Distrital, Prefeito, Vice-Prefeito e juiz de paz; 18: Vereador'],
            ['Perda ou suspensão (art. 15)', 'Cancelamento da naturalização por sentença transitada em julgado; incapacidade civil absoluta; condenação criminal transitada em julgado, enquanto durarem seus efeitos; recusa de cumprir obrigação a todos imposta ou prestação alternativa; improbidade administrativa (art. 37, § 4º). A cassação é vedada'],
            ['Anterioridade eleitoral (art. 16)', 'A lei que altera o processo eleitoral entra em vigor na publicação, mas não se aplica à eleição que ocorra até um ano da data de sua vigência'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Saúde (arts. 196 a 200).** A saúde é **direito de todos e dever do Estado**, garantido por políticas sociais e econômicas e pelo **acesso universal e igualitário** às ações de promoção, proteção e recuperação (art. 196). As ações e serviços de saúde são de **relevância pública** e podem ser executados diretamente ou por terceiros, inclusive pessoa física ou jurídica de direito privado (art. 197).\n\nO **art. 198** organiza o SUS em rede **regionalizada e hierarquizada**, com as diretrizes de **descentralização, com direção única em cada esfera de governo**; **atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais**; **participação da comunidade**; e, desde a **EC 140/2026**, **atuação obrigatória e permanente de agentes comunitários de saúde e de agentes de combate às endemias**, cuja atividade é essencial ao SUS e exclusiva de Estado (inciso IV). A mesma emenda vedou a contratação temporária ou terceirizada desses agentes, salvo emergência em saúde pública (§ 4º-A), e os submeteu ao regime dos servidores de cargo efetivo (§ 4º-B). Quanto ao piso de gastos, a **União** aplica no mínimo **15% da receita corrente líquida** (§ 2º, I); os percentuais de Estados e Municípios ficam para lei complementar (§ 3º, I). A LC 141/2012 fixa **12%** para os Estados (art. 6º) e **15%** para os Municípios (art. 7º).\n\nPelo **art. 199**, a assistência à saúde é livre à iniciativa privada, que participa do SUS de forma **complementar**, mediante **contrato de direito público ou convênio**, com preferência para entidades **filantrópicas e sem fins lucrativos**. São vedados: recursos públicos para auxílios ou subvenções a instituições privadas **com fins lucrativos**; participação de capital estrangeiro, salvo casos previstos em lei; e qualquer comercialização de órgãos, tecidos, sangue e derivados. O **art. 200** lista atribuições do SUS, como executar a vigilância sanitária e epidemiológica e a saúde do trabalhador, ordenar a formação de recursos humanos na área e fiscalizar alimentos, bebidas e águas para consumo humano.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Nato ou não?',
        enunciado:
          'Um item afirma que o cargo de Ministro de Estado da Saúde é privativo de brasileiro nato. Está certo?',
        resolucao:
          'Errado. Entre os Ministros de Estado, só o **da Defesa** é privativo de nato (art. 12, § 3º, VII). Um naturalizado pode ser Ministro da Saúde, Deputado Federal ou Senador, mas não Presidente da Câmara nem do Senado.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) Deputado Federal exige 21 anos; Senador, 35. (b) Analfabeto pode votar (facultativo), mas é **inelegível**. (c) No art. 15, só a incapacidade civil **absoluta** suspende direitos políticos, e a condenação criminal precisa ter **transitado em julgado**. (d) O SUS prioriza as atividades **preventivas**, sem prejuízo das assistenciais; não o contrário. (e) Iniciativa privada no SUS é **complementar**, nunca substitutiva. (f) A **EC 141/2026** (publicada em 16/10/2026) mudou o art. 7º, XIII, para 8 horas diárias e **40 horas semanais**, antes 44. A transição está no art. 6º da própria emenda: limite de **42 horas** dois meses após a publicação e de **40 horas** um ano depois desse primeiro marco. O inciso XV passa a prever “repouso semanal remunerado de **2 (dois) dias**, um dos quais preferencialmente aos domingos”, com vigência dois meses após a publicação (art. 10, I). Confira o edital: provas com edital anterior podem cobrar a redação antiga.',
      },
    ],
    fontes: [CF, EC_131, EC_140, EC_141, LC_141],
    atualizadoEm: ATUALIZADO,
  },
];
