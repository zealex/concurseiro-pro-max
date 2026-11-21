import type { ResumoTema } from '../../../types';
import { ATUALIZADO, F_CP, F_D1171, F_D12122, F_L13460, F_L14540, F_L8112, F_L8987 } from './fontes';

export const RESUMOS_3: ResumoTema[] = [
  /* ---------- etp-assedio ---------- */
  {
    temaId: 'etp-assedio',
    titulo: 'Prevenção e enfrentamento do assédio na administração pública',
    resumo:
      'Caem os elementos do crime de assédio sexual (CP, art. 216-A) e sua pena, o alcance da Lei 14.540/2023 (todos os entes) e do Decreto 12.122/2024 (só a administração federal direta, autárquica e fundacional) e os deveres éticos ligados ao tema.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O **assédio sexual** é crime: constranger alguém **com o intuito de obter vantagem ou favorecimento sexual**, prevalecendo-se o agente da sua condição de **superior hierárquico ou ascendência** inerentes ao exercício de emprego, cargo ou função (CP, art. 216-A). A pena é de **detenção, de 1 a 2 anos**, aumentada **em até um terço** se a vítima é menor de 18 anos (§ 2º). O parágrafo único foi vetado.\n\nA **Lei 14.540/2023** instituiu o **Programa de Prevenção e Enfrentamento ao Assédio Sexual e demais Crimes contra a Dignidade Sexual e à Violência Sexual** na administração pública **direta e indireta, federal, estadual, distrital e municipal**. Ele se estende a instituições privadas que prestam serviço público por concessão, permissão, autorização ou outra delegação, conforme regulamentação do ente delegante (arts. 2º, § 1º, e 10). As violências se caracterizam pelas definições do **Código Penal**, da **Lei Maria da Penha** (Lei 11.340/2006) e da **Lei 13.431/2017** (art. 3º).\n\nNa esfera federal, o **Decreto 12.122/2024** criou o **Programa Federal de Prevenção e Enfrentamento do Assédio e da Discriminação**, para a administração **direta, autárquica e fundacional**. Ele alcança assédio moral, assédio sexual e discriminação nas relações de trabalho.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Norma', 'O que traz', 'Pegadinha'],
          linhas: [
            ['CP, art. 216-A', 'Crime de assédio sexual: detenção de 1 a 2 anos; + até 1/3 se a vítima tem menos de 18 anos', 'Exige hierarquia ou ascendência ligada a emprego, cargo ou função'],
            ['Lei 14.540/2023, art. 4º', 'Objetivos: prevenir e enfrentar; capacitar agentes públicos; campanhas educativas', 'Vale para todos os entes, não só a União'],
            ['Lei 14.540/2023, art. 5º', 'Diretrizes: materiais educativos, canais de denúncia, procedimentos com sigilo e devido processo, capacitação com conteúdo mínimo', '§ 1º: quem souber tem o **dever legal de denunciar**; § 2º: apuram-se retaliações'],
            ['Lei 14.540/2023, art. 7º', 'Registros de frequência dos cursos mantidos por 5 anos', '—'],
            ['Decreto 12.122/2024', 'Diretrizes: universalidade, transversalidade, confidencialidade e resolutividade; eixos: prevenção, acolhimento e tratamento de denúncias', 'Só a administração federal direta, autárquica e fundacional; estatais definem ações em ato próprio'],
            ['Lei 8.112, art. 116, XI; Dec. 1.171, XV, b', 'Dever de tratar com urbanidade as pessoas; vedado prejudicar deliberadamente a reputação de servidores ou cidadãos', 'Base ética e disciplinar para condutas de assédio moral'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Terceirizados (Dec. 12.122, art. 3º, § 1º):** a administração promove prevenção, acolhe denunciantes e vítimas e encaminha à empresa contratada a denúncia contra o terceirizado, acompanhando a tramitação.',
          '**Plano setorial (Dec. 12.122, art. 6º):** cada órgão federal elabora o seu em até 120 dias da publicação do plano federal, editado pelo Ministério da Gestão e da Inovação em Serviços Públicos.',
          '**Proteção (Dec. 12.122, art. 2º):** sigilo dos dados dos envolvidos até a decisão final, proteção de denunciantes contra retaliação e processos que evitem nova vitimização.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Escala de plantão em troca de favor sexual',
        enunciado:
          'O chefe do serviço de um hospital federal promete escalas de plantão mais vantajosas a uma médica subordinada se ela aceitar sair com ele, e passa a insistir. Que responsabilidades podem surgir?',
        resolucao:
          'Há hierarquia e intuito de favorecimento sexual: em tese, crime do **art. 216-A do CP**. A esfera penal não impede a apuração **disciplinar** (Lei 8.112) nem a **ética** (Dec. 1.171). Quem souber do fato tem o dever legal de denunciá-lo (Lei 14.540, art. 5º, § 1º), e a vítima deve ser protegida contra retaliação.',
      },
      {
        tipo: 'atencao',
        texto:
          'O art. 216-A exige **superioridade hierárquica ou ascendência** inerente a emprego, cargo ou função e o **intuito de obter vantagem ou favorecimento sexual**. Pena: **detenção de 1 a 2 anos** (não é reclusão). A **Lei 14.540/2023 vale para todos os entes**; o **Decreto 12.122/2024 só para a administração federal direta, autárquica e fundacional**, e trata também de assédio moral e discriminação. Cuidado: o Código Penal tipifica o **assédio sexual**, mas **não tem um crime chamado “assédio moral”**, e a Lei 8.112 também não usa essa expressão. O assédio moral é enfrentado pelo Decreto 12.122 e pelos deveres éticos e disciplinares (urbanidade, Lei 8.112, art. 116, XI; vedação do Dec. 1.171, XV, b).',
      },
    ],
    fontes: [F_CP, F_L14540, F_D12122, F_L8112, F_D1171],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- etp-usuario ---------- */
  {
    temaId: 'etp-usuario',
    titulo: 'Direitos do usuário do serviço público e ouvidoria (Lei 13.460/2017)',
    resumo:
      'Caem os princípios do art. 4º, a Carta de Serviços ao Usuário, as regras das manifestações (identificação, vedação de exigir motivos, proibição de recusa), o prazo da ouvidoria (30 + 30), os conselhos de usuários e a pesquisa de satisfação anual.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A Lei 13.460/2017, conhecida como Código de Defesa do Usuário do Serviço Público, trata da **participação, proteção e defesa dos direitos do usuário** dos serviços públicos. Aplica-se à administração **direta e indireta da União, dos Estados, do DF e dos Municípios** (art. 1º, § 1º), sem afastar normas setoriais nem o **Código de Defesa do Consumidor quando houver relação de consumo** (§ 2º). Aplica-se subsidiariamente aos serviços prestados por particulares (§ 3º).\n\n**Princípios** (art. 4º): **regularidade, continuidade, efetividade, segurança, atualidade, generalidade, transparência e cortesia**. Entre as diretrizes (art. 5º): presunção de **boa-fé** do usuário, atendimento por ordem de chegada (com as prioridades legais), proibição de exigências não previstas em lei, **autenticação de documentos pelo próprio agente** (sem reconhecimento de firma, salvo dúvida de autenticidade) e linguagem simples.\n\nA **Carta de Serviços ao Usuário** (art. 7º) informa os serviços, as formas de acesso e os compromissos e padrões de qualidade. Ela deve ter **atualização periódica** e divulgação permanente no sítio eletrônico do órgão. O usuário também tem deveres (art. 8º): urbanidade e boa-fé, prestar informações, colaborar e preservar os bens públicos.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Ponto', 'Ouvidoria (Lei 13.460)', 'Acesso à informação (LAI)'],
          linhas: [
            ['Objeto', 'Manifestações: reclamações, denúncias, sugestões, elogios e demais pronunciamentos (art. 2º, V)', 'Pedido de informação'],
            ['Prazo', '30 dias, prorrogáveis uma única vez, por igual período, com justificativa (art. 16)', '20 dias + 10 (art. 11)'],
            ['Motivos', 'Vedada exigência relativa aos motivos (art. 10, § 2º)', 'Vedada exigência relativa aos motivos (art. 10, § 3º)'],
            ['Identificação', 'Exigida, mas é informação pessoal protegida (art. 10, § 7º)', 'Exigida, sem requisitos que inviabilizem o pedido (art. 10, § 1º)'],
            ['Recusa', 'Proibida, sob pena de responsabilidade do agente (art. 11)', 'Negativa deve ser fundamentada e informar o recurso'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Manifestação (art. 10):** dirigida à ouvidoria; pode ser feita por meio eletrônico, por correspondência ou verbalmente (reduzida a termo). São vedadas exigências que a inviabilizem.',
          '**Informações internas (art. 16, parágrafo único):** a ouvidoria pode pedir informações a agentes do próprio órgão, que respondem em **20 dias**, prorrogáveis de forma justificada uma única vez, por igual período.',
          '**Ouvidorias (arts. 13 a 15):** promovem a participação, acompanham a prestação, propõem melhorias e fazem mediação e conciliação. O **relatório de gestão** é anual, vai à autoridade máxima e é publicado integralmente na internet.',
          '**Conselhos de usuários (arts. 18 a 21):** órgãos **consultivos**; representantes escolhidos em processo aberto ao público; podem ser consultados sobre a indicação do ouvidor; a participação é **serviço relevante e sem remuneração**.',
          '**Avaliação continuada (art. 23):** pesquisa de satisfação **no mínimo a cada ano** (ou outro meio com significância estatística), com resultados publicados integralmente e ranking das entidades com maior incidência de reclamações.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Reclamação na ouvidoria do SUS municipal',
        enunciado:
          'Um usuário registra na ouvidoria municipal reclamação contra a demora para marcar consulta. O servidor diz que só aceita se ele explicar “para que serve a reclamação” e não dá prazo. Está correto?',
        resolucao:
          'Não. É vedado exigir os motivos da manifestação (art. 10, § 2º), e a manifestação **não pode ser recusada**, sob pena de responsabilidade (art. 11). A ouvidoria deve dar a decisão final em **30 dias**, prorrogáveis uma vez por igual período, com justificativa (art. 16).',
      },
      {
        tipo: 'atencao',
        texto:
          'Ouvidoria: **30 dias, prorrogáveis uma única vez por igual período** (art. 16). LAI: **20 + 10**. Pesquisa de satisfação: **no mínimo anual** (art. 23, § 1º). Conselho de usuários é **consultivo**, e a participação é **não remunerada**. “Modicidade das tarifas” é condição do serviço adequado na lei de concessões (Lei 8.987/1995, art. 6º, § 1º) e **não** aparece entre os princípios do art. 4º da Lei 13.460.',
      },
    ],
    fontes: [F_L13460, F_L8987],
    atualizadoEm: ATUALIZADO,
  },
];
