import type { ResumoTema } from '../../../types';
import {
  AG_BRASIL,
  AG_BR_CHUVAS_RS,
  AG_BR_COPA,
  AG_BR_COPOM_NOV26,
  AG_BR_DENGUE_ANVISA,
  AG_BR_ELEICAO,
  AG_BR_GOV_SUL,
  AG_BR_IPCA_2025,
  AG_BR_MADURO,
  AG_BR_PNEUMO20,
  AG_BR_POP26,
  AG_BR_SOFI_2026,
  AG_BR_SUPREMA_CORTE,
  AG_BR_TARIFA_AGO25,
  AG_BR_TFFF,
  AG_BR_TSE_IA,
  AG_CAMARA,
  AG_GOV,
  AG_GOV_COP30,
  AG_GOV_IPCA_OUT26,
  AG_GOV_MERCOSUL,
  AG_GOV_PIB_2025,
  AG_GOV_PNAD_SET26,
  AG_SENADO,
  AG_SENADO_ELEICAO,
  ANPD_ECA,
  ATUALIZADO,
  AU_COP31,
  BCB_COPOM_NOV26,
  CAMARA_ELEICAO,
  CAMARA_REDATA,
  CF_ART82,
  D12797,
  EC_140,
  EC_141,
  FIFA_COPA,
  IBGE_AGENCIA,
  L15190,
  L15211,
  L15233,
  L15270,
  L15352,
  L15504,
  MDIC_TARIFAS_JUL26,
  MDIC_TARIFAS_NOV25,
  MDS_FOME_2025,
  MMA_TFFF_BM,
  MS_DENGUE_PILOTO,
  MS_DENGUE_SUSPENSAO,
  MS_NOTICIAS,
  MS_VIP,
  OMS_EBOLA,
  OMS_EBOLA_DON,
  OMS_MPOX_FIM,
  ONU_MADURO,
  ONU_NEWS,
  OPAS_HIV,
  OSSERVATORE_PAPA,
  PLANALTO_LEGIS,
  RADIOAG_MESSIAS,
  RADIO_SENADO_PL2338,
  RADIO_SENADO_STF,
  SENADO_MERCOSUL,
  SENADO_PL2338,
  SENADO_VERIFICA_IA,
  STF_FACHIN,
  UE_MERCOSUL_MAIO,
  UNFCCC_COP31,
} from './fontes';

export const RESUMOS: ResumoTema[] = [
  /* ---------- cg-metodo ---------- */
  {
    temaId: 'cg-metodo',
    titulo: 'Atualidades: como estudar e recorte do edital',
    resumo:
      'Atualidades cobra fatos recentes: datas, números oficiais, nomes, sedes de eventos e leis novas. Quem delimita o período pelo edital, estuda por fontes oficiais e revisa toda semana acerta mais e perde menos tempo.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O primeiro passo é o **recorte temporal**. Muitos editais trazem uma frase como “fatos e acontecimentos a partir de [data]” ou “veiculados nos últimos 12 meses”. Leia o seu edital e anote essa data na capa do caderno. Se o edital não fixar período, trabalhe com os **12 meses anteriores à prova** e dê prioridade aos últimos 6.\n\nO segundo passo é a **fonte**. Banca séria formula a questão a partir de dado oficial: o número do **IBGE**, a decisão do **Banco Central**, o texto da lei no **Planalto**, o comunicado da **OMS** ou da **ONU**. Por isso, estude pelas mesmas fontes. Portal de notícia comum serve para descobrir o assunto; o número que vai para o flashcard vem da fonte oficial.\n\nO terceiro passo é a **revisão curta e constante**. Atualidade estudada só na véspera vira confusão de datas. Trinta minutos por semana, com cartões datados, rendem mais que uma maratona no fim.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Fonte', 'O que buscar', 'Endereço'],
          linhas: [
            ['Agência Brasil / Agência Gov (EBC)', 'Resumo diário de fatos do governo e do país', 'agenciabrasil.ebc.com.br / agenciagov.ebc.com.br'],
            ['IBGE — Agência de Notícias', 'PIB, IPCA, desemprego (PNAD), população', 'agenciadenoticias.ibge.gov.br'],
            ['Banco Central', 'Decisões do Copom (Selic), atas', 'bcb.gov.br'],
            ['Agência Senado e Agência Câmara', 'Leis aprovadas, sabatinas, PECs', 'senado.leg.br/noticias / camara.leg.br/noticias'],
            ['Planalto — Legislação', 'Texto e data exata das leis e emendas', 'planalto.gov.br/ccivil_03'],
            ['ONU News e OMS/OPAS', 'Clima, emergências sanitárias, conflitos', 'news.un.org/pt / paho.org/pt'],
            ['Ministério da Saúde', 'Vacinas, calendário vacinal, programas do SUS', 'gov.br/saude'],
            ['TSE', 'Calendário e resultados eleitorais', 'tse.jus.br'],
          ],
        },
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          '**Minutos 0–10:** leia as manchetes da semana na Agência Brasil e nas agências do Senado e da Câmara. Marque só o que tem data, número ou nome.',
          '**Minutos 10–20:** confira os indicadores divulgados na semana (calendário do IBGE e do Copom). Anote o valor **e a data da divulgação**.',
          '**Minutos 20–25:** abra o Planalto e veja as leis e emendas novas. Anote número, data e apelido (ex.: “ECA Digital”).',
          '**Minutos 25–30:** escreva de 3 a 5 flashcards no formato pergunta → resposta + data + fonte. Uma vez por mês, descarte os cartões fora do recorte do edital.',
        ],
      },
      {
        tipo: 'texto',
        texto:
          '**Como a banca cobra.** As questões de Atualidades costumam pedir: (1) **dados** (“o PIB cresceu X% em 2025”); (2) **nomes** (quem preside, quem foi eleito); (3) **eventos** (sede e número da COP, campeão da Copa); (4) **leis novas** (número, apelido, o que mudou); (5) a **relação entre o fato e um conceito** (o que é uma emergência de saúde pública de importância internacional, o que é uma NDC). O formato FUNDATEC “Analise as assertivas” mistura um item verdadeiro com outro de data trocada; a Objetiva costuma pedir “assinale a alternativa correta” sobre um único fato.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Divulgação × período de referência',
        enunciado:
          'Item: “Em março de 2026, o IBGE informou que a economia brasileira cresceu 2,3% em 2026.” Certo ou errado?',
        resolucao:
          'Errado. Em 3/03/2026 o IBGE divulgou o PIB **de 2025** (alta de 2,3%). O ano de referência e a data de divulgação são coisas diferentes, e a banca troca uma pela outra.',
      },
      {
        tipo: 'atencao',
        texto:
          'Armadilhas recorrentes: (a) **números arredondados**: 51,79% vira “cerca de 52%” na alternativa certa, mas “52,8%” é errado; (b) **parcial × final**: apuração parcial e resultado oficial diferem; (c) **sanção × vigência**: o ECA Digital foi sancionado em 17/09/2025 e só entrou em vigor em 17/03/2026; (d) **assinatura × vigência**: acordo internacional assinado ainda não está valendo; (e) **fake news e prints**: se o número não está em fonte oficial, não vá para o cartão.',
      },
    ],
    fontes: [AG_BRASIL, AG_GOV, IBGE_AGENCIA, AG_SENADO, AG_CAMARA, PLANALTO_LEGIS, ONU_NEWS, MS_NOTICIAS],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- cg-saude-ciencia ---------- */
  {
    temaId: 'cg-saude-ciencia',
    titulo: 'Saúde pública e ciência (2025–2026)',
    resumo:
      'Para o médico, este é o tema mais rentável: programas do SUS, vacinas incorporadas, certificações da OMS e emergências sanitárias internacionais. A banca pede data, nome do programa e o que mudou.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'No SUS, o destaque legislativo é o **Programa Agora Tem Especialistas**, criado pela MP 1.301/2025 e convertido na **Lei 15.233, de 7/10/2025**. Entre os objetivos do art. 1º estão **reduzir o tempo de espera** por consultas, exames e procedimentos especializados e ampliar a oferta de leitos e de serviços.\n\nNa ciência, a **Anvisa aprovou em 26/11/2025** a **Butantan-DV**, do Instituto Butantan, **primeira vacina de dose única contra a dengue**, para pessoas de **12 a 59 anos** (eficácia global de 74,7% no estudo clínico). No SUS, a aplicação começou em **17/01/2026**, em estratégia-piloto para pessoas de **15 a 59 anos** em Maranguape (CE) e Nova Lima (MG); Botucatu (SP) começou no dia 18. Em seguida, as doses foram destinadas a profissionais da atenção primária. Em **8/06/2026**, o Ministério da Saúde **suspendeu temporariamente**, por precaução, a estratégia de vacinação com a Butantan-DV, após 42 casos com sinais de alerta (três graves, com dois óbitos) em investigação, sem conclusão sobre a relação com a vacina. Cerca de 500 mil doses tinham sido aplicadas.\n\nNo calendário vacinal, duas mudanças de 2026: a **pneumocócica 20-valente (VPC20)** começou a ser aplicada em menores de 5 anos em **20/06/2026**, substituindo a 10-valente; e, desde **3/08/2026**, há **2º reforço da VIP aos 4 anos** (esquema exclusivamente com VIP: 2, 4 e 6 meses, reforço aos 15 meses e aos 4 anos).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Data', 'Fato', 'Fonte'],
          linhas: [
            ['05/09/2025', 'OMS encerra a emergência de saúde pública de importância internacional (ESPII) por **mpox**, declarada em agosto de 2024', 'OMS'],
            ['07/10/2025', '**Lei 15.233** institui o Programa **Agora Tem Especialistas** (conversão da MP 1.301/2025)', 'Planalto'],
            ['26/11/2025', 'Anvisa aprova a **Butantan-DV**, vacina de dose única contra a dengue, para 12 a 59 anos', 'Agência Brasil'],
            ['18/12/2025', 'OMS certifica o Brasil pela **eliminação da transmissão vertical do HIV**: primeiro país com mais de 100 milhões de habitantes a alcançar a meta', 'OPAS/OMS'],
            ['17/01/2026', 'Butantan-DV começa a ser aplicada no SUS (piloto em Maranguape/CE e Nova Lima/MG, para 15 a 59 anos)', 'Ministério da Saúde'],
            ['17/05/2026', 'OMS declara **ESPII** pela doença do vírus **Bundibugyo** (ebola) na **RD Congo e em Uganda**; não se enquadrou como emergência pandêmica', 'OMS'],
            ['08/06/2026', 'Ministério da Saúde **suspende temporariamente** a estratégia de vacinação com a Butantan-DV, por precaução', 'Ministério da Saúde'],
            ['20/06/2026', 'SUS começa a aplicar a **Pneumo 20 (VPC20)** em menores de 5 anos', 'Agência Brasil'],
            ['03/08/2026', '**2º reforço da VIP aos 4 anos** entra no calendário', 'Ministério da Saúde'],
            ['16/10/2026', '**EC 140**: aposentadoria diferenciada de ACS e ACE e efetivação dos vínculos precários até 31/12/2028', 'Planalto'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Como cobrar — padrão 1:** “O programa federal que busca reduzir o tempo de espera por atendimento especializado no SUS é…” (Agora Tem Especialistas).',
          '**Padrão 2:** característica marcante da vacina (Butantan-DV: dose única, desenvolvida pelo Instituto Butantan).',
          '**Padrão 3:** conceito + fato: a ESPII é declarada pelo **diretor-geral da OMS** com base no Regulamento Sanitário Internacional, em regra ouvido o Comitê de Emergência.',
          '**Padrão 4:** certificações da OMS/OPAS (transmissão vertical do HIV).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo FUNDATEC',
        enunciado:
          'Analise: I. Em 2025, a Anvisa aprovou vacina de dose única contra a dengue desenvolvida pelo Instituto Butantan. II. Em 2026, a OMS declarou emergência internacional por mpox. III. Em dezembro de 2025, o Brasil foi certificado pela eliminação da transmissão vertical do HIV. Quais estão corretas?',
        resolucao:
          'I e III. O item II troca a doença: em 2026 a ESPII declarada foi a do **ebola (vírus Bundibugyo)**; a de mpox foi **encerrada** em setembro de 2025.',
      },
      {
        tipo: 'atencao',
        texto:
          'Não confunda **registro na Anvisa** (26/11/2025) com **início da vacinação no SUS** (17/01/2026), nem com a **suspensão temporária** da estratégia (8/06/2026), que não cancelou o registro. Antes da prova, confira no Ministério da Saúde se a vacinação foi retomada. Também não confunda a Butantan-DV (dose única) com a **QDenga** (duas doses), que o SUS oferece para 10 a 14 anos. E lembre: encerrar uma ESPII não significa que a doença acabou.',
      },
    ],
    fontes: [L15233, AG_BR_DENGUE_ANVISA, MS_DENGUE_PILOTO, MS_DENGUE_SUSPENSAO, OPAS_HIV, OMS_MPOX_FIM, OMS_EBOLA, OMS_EBOLA_DON, AG_BR_PNEUMO20, MS_VIP, EC_140],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- cg-meio-ambiente ---------- */
  {
    temaId: 'cg-meio-ambiente',
    titulo: 'Meio ambiente, clima e desastres (2025–2026)',
    resumo:
      'A COP30 em Belém é o fato ambiental mais provável na prova: sede, datas, presidente e resultados (Pacote de Belém, Decisão Mutirão, adaptação, TFFF). No Sul, as bancas gostam de desastres climáticos e da nova lei de licenciamento.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A **COP30** (30ª Conferência das Partes da Convenção-Quadro das Nações Unidas sobre Mudança do Clima) foi realizada em **Belém (PA)** e presidida pelo diplomata **André Corrêa do Lago**. Programada para terminar em 21/11/2025, encerrou-se no **sábado, 22/11/2025**, com o **Pacote de Belém**: **29 decisões aprovadas por consenso** por **195 países**. O ano marcou também os 10 anos do Acordo de Paris.\n\nUm dos textos do pacote é a **Decisão Mutirão**, que reafirma o aumento da ambição coletiva e a passagem “da negociação para a implementação”. Entre os resultados: compromisso de **triplicar o financiamento da adaptação até 2035**, um **mecanismo de transição justa** e **59 indicadores voluntários** para a Meta Global de Adaptação. Um **mapa do caminho para o fim dos combustíveis fósseis** não obteve consenso, mas teve a adesão de mais de 80 países.\n\nEm **6/11/2025**, durante a Cúpula de Líderes em Belém, foi lançado oficialmente o **Fundo Florestas Tropicais para Sempre (TFFF)**, proposto pelo Brasil, que paga por resultado aos países que mantêm suas florestas tropicais em pé. O **Banco Mundial** é o administrador e anfitrião interino do fundo. Segundo o balanço oficial do encerramento da COP, o fundo mobilizou mais de **US$ 6,7 bilhões** na primeira fase, com o endosso de 63 países. Houve ainda o **Plano de Ação de Saúde de Belém**, endossado por mais de 30 países e 50 organizações.\n\nA **COP31** foi programada para **9 a 20/11/2026**, em **Antália, na Turquia**, país-sede. A **Austrália preside as negociações**, e a pré-COP foi prevista para o Pacífico.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Data', 'Fato', 'Fonte'],
          linhas: [
            ['08/08/2025', '**Lei 15.190** — Lei Geral do Licenciamento Ambiental (vigência 180 dias após a publicação)', 'Planalto'],
            ['06/11/2025', 'Lançamento do **TFFF** na Cúpula de Líderes, em Belém', 'Agência Brasil'],
            ['10 a 22/11/2025', '**COP30** em Belém, presidida por André Corrêa do Lago', 'Agência Gov'],
            ['22/11/2025', '**Pacote de Belém**: 29 decisões, 195 países; Decisão Mutirão; triplicar o financiamento da adaptação até 2035', 'Agência Gov'],
            ['27/07/2026', 'Chuvas no **RS**: 59.967 pessoas e 218 municípios afetados; 488 desabrigados e 762 desalojados; 91,6% dos desabrigados no **Vale do Taquari**', 'Agência Brasil (dados da Defesa Civil do RS)'],
            ['9 a 20/11/2026', '**COP31** em Antália (Turquia), com a Austrália presidindo as negociações', 'UNFCCC; Governo da Austrália'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Como cobrar:** “A COP30 ocorreu em ___” (Belém); “o fundo lançado em Belém para florestas tropicais é o ___” (TFFF); “a meta de adaptação é ___” (triplicar o financiamento até 2035).',
          'Pegadinha de ordinal: COP28 foi em Dubai (2023), COP29 em Baku (2024), **COP30 em Belém (2025)**, **COP31 em Antália (2026)**.',
          'Desastres no Sul: a banca pede a região mais atingida (Vale do Taquari) e o órgão que consolida os números (Defesa Civil estadual).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo Objetiva',
        enunciado:
          'Assinalar a alternativa correta sobre a COP30: (A) ocorreu em Manaus; (B) aprovou a eliminação obrigatória dos combustíveis fósseis até 2035; (C) terminou com o Pacote de Belém, que prevê triplicar o financiamento da adaptação até 2035; (D) foi presidida pela Austrália; (E) lançou o Acordo de Paris.',
        resolucao:
          'C. A COP foi em Belém; não houve consenso sobre um roteiro para os fósseis; a Austrália preside as negociações da COP31; o Acordo de Paris é de 2015 (COP21).',
      },
      {
        tipo: 'atencao',
        texto:
          'Na COP31 há **dois papéis**: a **Turquia sedia** o evento, e a **Austrália preside as negociações**. Questão que diga “COP31 na Austrália” está errada. E cuidado com o valor do TFFF: o número muda conforme a data do balanço; use o do encerramento oficial da COP30 (mais de US$ 6,7 bilhões, 22/11/2025).',
      },
    ],
    fontes: [AG_GOV_COP30, AG_BR_TFFF, MMA_TFFF_BM, UNFCCC_COP31, AU_COP31, L15190, AG_BR_CHUVAS_RS],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- cg-economia-sociedade ---------- */
  {
    temaId: 'cg-economia-sociedade',
    titulo: 'Economia e sociedade brasileira (2025–2026)',
    resumo:
      'A banca pede o indicador, o valor e quem divulga: PIB e IPCA (IBGE), Selic (Copom/BCB), desemprego (PNAD Contínua), população estimada (IBGE). Também cai a mudança no Imposto de Renda e o salário mínimo.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Em **3/03/2026**, o IBGE divulgou que o **PIB de 2025 cresceu 2,3%** e chegou a **R$ 12,7 trilhões**. A agropecuária liderou (+11,7%), seguida de serviços (+1,8%) e indústria (+1,4%). Foi o quinto ano seguido de alta, mas abaixo de 2024 (3,4%); o IBGE atribuiu a desaceleração do consumo das famílias principalmente à política monetária contracionista (juros altos).\n\nA inflação oficial (**IPCA**) fechou **2025 em 4,26%** (divulgação de 9/01/2026), dentro do intervalo da meta (centro de 3%, tolerância de 1,5 ponto). Em **12/11/2026**, o IBGE informou IPCA de **0,14% em outubro** e **4,63% em 12 meses**, acima do teto de 4,5%.\n\nA **Selic** ficou em 15% ao ano de junho de 2025 a março de 2026; depois vieram cinco cortes seguidos. Na reunião de **3 e 4/11/2026**, o Copom **manteve a taxa em 13,75%**, por unanimidade, interrompendo a sequência de cortes.\n\nNo mercado de trabalho, a **PNAD Contínua** (divulgada em 30/10/2026) mostrou **desocupação de 5,2%** no trimestre encerrado em setembro, a menor para esse período desde 2012, e **103,6 milhões de ocupados**, recorde da série. A população estimada em 1º/07/2026 é de **214,2 milhões** (IBGE, 28/08/2026), com crescimento de 0,37%, cada vez mais lento.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Data', 'Fato', 'Fonte'],
          linhas: [
            ['28/07/2025', 'Relatório SOFI 2025 (FAO e outras agências da ONU): Brasil volta a sair do **Mapa da Fome** (média 2022–2024 abaixo de 2,5% de subalimentação)', 'MDS'],
            ['26/11/2025', '**Lei 15.270**: IRPF zerado para rendimentos de até **R$ 5.000/mês** (redução parcial até R$ 7.350) a partir de jan./2026, e tributação mínima para rendas acima de R$ 600 mil/ano', 'Planalto'],
            ['23/12/2025', '**Decreto 12.797** fixa o salário mínimo de 2026 em **R$ 1.621**', 'Planalto'],
            ['09/01/2026', '**IPCA 2025: 4,26%**', 'Agência Brasil (dados do IBGE)'],
            ['03/03/2026', '**PIB 2025: +2,3%**, R$ 12,7 trilhões', 'Agência Gov (dados do IBGE)'],
            ['21/07/2026', 'SOFI 2026: Brasil **continua fora do Mapa da Fome** (triênio 2023–2025)', 'Agência Brasil'],
            ['28/08/2026', 'População estimada: **214,2 milhões** (crescimento de 0,37%)', 'Agência Brasil (dados do IBGE)'],
            ['30/10/2026', 'Desocupação de **5,2%** no 3º trimestre; 103,6 milhões de ocupados', 'Agência Gov (dados do IBGE)'],
            ['04/11/2026', 'Copom mantém a **Selic em 13,75%** ao ano', 'BCB (ata da 282ª reunião)'],
            ['12/11/2026', 'IPCA de outubro: 0,14%; **4,63% em 12 meses**', 'Agência Gov (dados do IBGE)'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Como cobrar:** “Qual órgão divulga o IPCA?” (IBGE). “Quem define a Selic?” (Copom, do Banco Central). Trocar IBGE por BCB é a pegadinha mais comum.',
          'Valor com período: “PIB **de 2025**”, “IPCA **acumulado em 12 meses** até outubro de 2026”.',
          'Lei nova com apelido: a Lei 15.270/2025 ficou conhecida como a da **isenção do IR para quem ganha até R$ 5 mil**.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo FUNDATEC',
        enunciado:
          'Analise: I. O IPCA de 2025 ficou acima do teto da meta. II. O PIB de 2025 cresceu 2,3%, segundo o IBGE. III. Em novembro de 2026, o Copom manteve a Selic em 13,75% ao ano. Quais estão corretas?',
        resolucao:
          'II e III. O IPCA de 2025 (4,26%) ficou **dentro** do intervalo da meta (teto de 4,5%). Quem passou do teto foi o acumulado em 12 meses até outubro de 2026 (4,63%).',
      },
      {
        tipo: 'atencao',
        texto:
          'Desemprego de 5,2% é o **menor para um trimestre encerrado em setembro** desde 2012, não necessariamente o menor de toda a série. A banca adora tirar o qualificador. E a isenção da Lei 15.270 vale para rendimentos **mensais** de até R$ 5.000; acima disso, a redução diminui até zerar em R$ 7.350.',
      },
    ],
    fontes: [AG_GOV_PIB_2025, AG_BR_IPCA_2025, AG_GOV_IPCA_OUT26, BCB_COPOM_NOV26, AG_BR_COPOM_NOV26, AG_GOV_PNAD_SET26, AG_BR_POP26, D12797, L15270, MDS_FOME_2025, AG_BR_SOFI_2026],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- cg-politica ---------- */
  {
    temaId: 'cg-politica',
    titulo: 'Política e instituições (2025–2026)',
    resumo:
      'Fatos institucionais neutros: resultado oficial das eleições de 2026, datas de posse, governadores do Sul, emendas constitucionais novas e mudanças no STF. A banca pede datas, números e cargos, nunca opinião.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'As **eleições gerais de 2026** tiveram o 1º turno em **4/10/2026** e o 2º turno em **25/10/2026**. Na disputa presidencial, nenhum candidato teve maioria absoluta dos votos válidos no 1º turno. No 2º turno, **Luiz Inácio Lula da Silva (PT)** foi reeleito com **51,79% dos votos válidos** (64.256.232 votos), contra **48,21%** de **Flávio Bolsonaro (PL)**. O vice eleito é **Geraldo Alckmin (PSB)**. Será o quarto mandato de Lula.\n\nPela redação dada pela **EC 111/2021**, a posse do presidente passa a ser em **5 de janeiro** do ano seguinte à eleição (art. 82 da CF) e a dos governadores em **6 de janeiro** (art. 28). A posse de 2027 é a primeira nessas datas, e não mais em 1º de janeiro.\n\nNo Sul, os três governadores foram eleitos no **1º turno**, em 4/10/2026, todos do PL: **Sergio Moro** no Paraná, **Luciano Zucco** no Rio Grande do Sul e **Jorginho Mello**, reeleito, em Santa Catarina.\n\nNo Legislativo, a **EC 141, de 16/10/2026**, alterou o art. 7º da CF: jornada máxima de **8 horas diárias e 40 semanais** e **repouso semanal remunerado de 2 dias**, um deles preferencialmente aos domingos, sem redução de salário. A transição prevê limite de 42 horas semanais dois meses após a publicação e de 40 horas um ano depois disso.\n\nNo Judiciário, **Edson Fachin** tomou posse como presidente do STF em **29/09/2025** (biênio 2025–2027), com Alexandre de Moraes como vice. Em **29/04/2026**, o Senado **rejeitou**, por **42 votos a 34**, a indicação de Jorge Messias para a vaga aberta pela aposentadoria de Luís Roberto Barroso: foi a primeira rejeição de um indicado ao STF desde 1894. Em 27/10/2026, a vaga seguia aberta.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Data', 'Fato', 'Fonte'],
          linhas: [
            ['29/09/2025', '**Edson Fachin** assume a Presidência do STF (2025–2027)', 'STF'],
            ['29/04/2026', 'Senado rejeita Jorge Messias para o STF (42 × 34); primeira rejeição desde 1894', 'Radioagência Nacional (EBC)'],
            ['04/10/2026', '1º turno; governadores do Sul eleitos: Moro (PR), Zucco (RS), Jorginho Mello (SC), todos do PL', 'Agência Brasil'],
            ['16/10/2026', '**EC 141**: 40 h semanais e 2 dias de repouso remunerado', 'Planalto'],
            ['16/10/2026', '**EC 140**: aposentadoria diferenciada de ACS e ACE', 'Planalto'],
            ['25/10/2026', '2º turno: Lula reeleito com 51,79% dos válidos; Flávio Bolsonaro, 48,21%', 'Agência Brasil; Agência Câmara'],
            ['27/10/2026', 'Vaga de Barroso no STF segue aberta', 'Rádio Senado'],
            ['05/01/2027', 'Posse presidencial (primeira na nova data da EC 111/2021)', 'CF, art. 82'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Como cobrar:** data de posse (5/1 presidente; 6/1 governadores), turno em que cada governador do Sul foi eleito, número e conteúdo da emenda nova.',
          'O STF tem **11 ministros**, indicados pelo presidente e aprovados pela **maioria absoluta do Senado** (41 votos) após sabatina na CCJ (CF, art. 101).',
          'Para vencer no 1º turno é preciso **maioria absoluta dos votos válidos**; brancos e nulos não contam.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo Objetiva',
        enunciado:
          'Assinalar a alternativa correta: (A) a posse presidencial de 2027 será em 1º de janeiro; (B) o governador do RS foi eleito no 2º turno; (C) a EC 141/2026 fixou jornada máxima de 40 horas semanais; (D) o Senado aprovou Jorge Messias para o STF em 2026; (E) o 2º turno presidencial ocorreu em 4 de outubro.',
        resolucao:
          'C. A posse é em 5 de janeiro; Zucco venceu no 1º turno; o Senado rejeitou Messias; 4/10 foi o 1º turno (o 2º foi em 25/10).',
      },
      {
        tipo: 'atencao',
        texto:
          'Use **o resultado final**, não a parcial: durante a apuração os percentuais mudaram, e reportagens da noite citaram 51,75% ou 51,78%. O número final com 100% das seções, divulgado pela Agência Brasil e pela Agência Câmara, é **51,79% × 48,21%**. No STF, antes da prova, confira na página do tribunal se a vaga de Barroso já foi preenchida.',
      },
    ],
    fontes: [AG_BR_ELEICAO, CAMARA_ELEICAO, AG_SENADO_ELEICAO, AG_BR_GOV_SUL, CF_ART82, EC_141, EC_140, RADIOAG_MESSIAS, RADIO_SENADO_STF, STF_FACHIN],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- cg-tecnologia ---------- */
  {
    temaId: 'cg-tecnologia',
    titulo: 'Tecnologia e inteligência artificial (2024–2026)',
    resumo:
      'Cobra-se a regulação do mundo digital: ECA Digital, papel da ANPD, regras do TSE para IA nas eleições, incentivo a data centers (Redata) e a tramitação do marco legal da IA.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O **ECA Digital** (Estatuto Digital da Criança e do Adolescente, **Lei 15.211, de 17/09/2025**) trata da proteção de crianças e adolescentes em ambientes digitais. A vigência foi fixada pela **Lei 15.352/2026** em **17/03/2026**. A mesma Lei 15.352, de **25/02/2026**, transformou a **ANPD** (Agência Nacional de Proteção de Dados) em **autarquia de natureza especial**, vinculada ao Ministério da Justiça e Segurança Pública, incluída na lei geral das agências reguladoras (Lei 13.848/2019) e com carreira própria de regulação e fiscalização. Desde o Decreto 12.622/2025, a ANPD é a autoridade que fiscaliza o ECA Digital.\n\nNas eleições, o **TSE** aprovou em **2/03/2026**, por unanimidade, regras para **IA na propaganda eleitoral** (Resolução 23.755/2026, que alterou a Resolução 23.610/2019): conteúdo gerado ou manipulado por IA deve trazer **aviso claro** de que foi fabricado ou alterado; nas **72 horas antes e nas 24 horas depois** da votação, é proibido publicar conteúdo novo feito com IA que use imagem ou voz de candidatos ou de pessoas públicas; sistemas de IA **não podem recomendar candidatos**, mesmo a pedido do usuário; e provedores podem ser responsabilizados se não retirarem conteúdo irregular.\n\nNa infraestrutura, a **Lei 15.504, de 15/09/2026**, criou o **Redata** (Regime Especial de Tributação para Serviços de Datacenter), que suspende PIS/Cofins, IPI e Imposto de Importação sobre equipamentos, com contrapartidas: destinar ao menos 10% da capacidade ao mercado interno, investir 2% em pesquisa, desenvolvimento e inovação e usar energia renovável ou de baixa emissão. Ele substituiu a MP 1.318/2025, que perdeu a validade.\n\nO **marco legal da IA (PL 2.338/2023)** foi aprovado pelo **Senado em 10/12/2024** e seguiu para a **Câmara**, onde uma comissão especial o analisa. Em agosto de 2026, o projeto ainda aguardava votação na Câmara.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Data', 'Fato', 'Fonte'],
          linhas: [
            ['10/12/2024', 'Senado aprova o **PL 2.338/2023** (regulação da IA); texto segue à Câmara', 'Agência Senado'],
            ['17/09/2025', 'Sancionado o **ECA Digital** (Lei 15.211)', 'Planalto'],
            ['25/02/2026', '**Lei 15.352**: reestrutura a ANPD e fixa a vigência do ECA Digital', 'Planalto'],
            ['02/03/2026', 'TSE aprova regras de **IA nas eleições** (aviso obrigatório; veto 72 h antes/24 h depois)', 'Agência Brasil; Senado Verifica'],
            ['17/03/2026', 'ECA Digital **entra em vigor**', 'Planalto (Lei 15.352)'],
            ['03/08/2026', 'PL 2.338/2023 ainda aguarda votação na Câmara', 'Rádio Senado'],
            ['15/09/2026', '**Lei 15.504** cria o **Redata** (data centers)', 'Planalto; Agência Câmara'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Como cobrar:** apelido × número da lei (ECA Digital = Lei 15.211/2025).',
          'Data de sanção × data de vigência (17/09/2025 × 17/03/2026).',
          'Janela da IA nas eleições: **72 horas antes** e **24 horas depois** do pleito.',
          'Órgão fiscalizador do ECA Digital: **ANPD**, não a Anatel nem o CGI.br.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo FUNDATEC (EXCETO)',
        enunciado:
          'Sobre as regras do TSE para IA nas eleições de 2026, todas estão corretas, EXCETO: (A) exigem aviso em conteúdo manipulado por IA; (B) vedam conteúdo novo com IA usando imagem ou voz de candidatos nas 72 horas anteriores ao pleito; (C) permitem que chatbots recomendem candidatos quando o eleitor pedir; (D) permitem responsabilizar provedores que não removem conteúdo irregular; (E) alteraram a Resolução 23.610/2019.',
        resolucao:
          'C. A recomendação de candidatos por sistemas de IA é vedada **mesmo a pedido do usuário**.',
      },
      {
        tipo: 'atencao',
        texto:
          'O marco legal da IA **não** é lei em vigor: até a última conferência deste resumo (nov./2026), não localizamos aprovação final em fonte oficial. Se a banca disser “o Brasil aprovou em 2024 sua lei de IA”, desconfie: em 2024 houve só a aprovação no Senado.',
      },
    ],
    fontes: [L15211, L15352, ANPD_ECA, AG_BR_TSE_IA, SENADO_VERIFICA_IA, L15504, CAMARA_REDATA, SENADO_PL2338, RADIO_SENADO_PL2338],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- cg-mundo ---------- */
  {
    temaId: 'cg-mundo',
    titulo: 'Brasil e o mundo (2025–2026)',
    resumo:
      'Fatos internacionais com reflexo no Brasil: acordo Mercosul–União Europeia, tarifas dos EUA, crise na Venezuela, novo papa e grandes eventos. A banca cobra datas, locais e a sequência assinatura → ratificação → vigência.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O **acordo Mercosul–União Europeia**, negociado por cerca de 25 anos, foi **assinado em 17/01/2026, em Assunção (Paraguai)**: um Acordo de Associação e um Acordo Interino de Comércio. No Brasil, o Congresso **promulgou o decreto legislativo** em **17/03/2026**, e o acordo comercial passou a ser **aplicado provisoriamente desde 1º/05/2026** entre a UE e Brasil, Argentina, Uruguai e Paraguai.\n\nCom os **Estados Unidos**, a tensão comercial começou em 2025. Em **6/08/2025**, entrou em vigor a sobretaxa adicional de **40%** criada pela ordem executiva de 30/07/2025, que elevou a **50%** a tarifa sobre parte das exportações brasileiras (cerca de 36% do que o Brasil vendia aos EUA). Uma ordem executiva de **20/11/2025** retirou a sobretaxa de 40% de produtos como **café, carnes, frutas, sucos e cacau**, com efeito retroativo a 13/11; pescados, cereais, mel, açúcar e tabaco continuaram sujeitos a ela. Em **20/02/2026**, a **Suprema Corte dos EUA**, por 6 votos a 3, derrubou as tarifas impostas com base na lei de poderes econômicos de emergência (IEEPA). Em julho de 2026, os EUA aplicaram novas sobretaxas a produtos brasileiros com base na Seção 301 (25% em vigor desde 22/07/2026).\n\nNa vizinhança, em **3/01/2026**, uma operação militar dos EUA em Caracas resultou na **captura de Nicolás Maduro**, levado a Nova York para responder a acusações na Justiça americana, entre elas narcoterrorismo. O secretário-geral da ONU, António Guterres, afirmou que os acontecimentos constituíam “um precedente perigoso”.\n\nNa Igreja Católica, o cardeal americano **Robert Francis Prevost** foi eleito papa em **8/05/2025** e adotou o nome **Leão XIV**: o primeiro papa nascido nos EUA, com longa carreira no Peru. No esporte, a **Espanha** venceu a **Argentina por 1 a 0, na prorrogação**, e conquistou a **Copa do Mundo de 2026** (final em 19/07/2026, em Nova Jersey), seu segundo título.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Data', 'Fato', 'Fonte'],
          linhas: [
            ['08/05/2025', 'Eleição do papa **Leão XIV** (Robert Francis Prevost)', 'L’Osservatore Romano'],
            ['06/08/2025', 'Entra em vigor a tarifa de **50%** dos EUA sobre parte das exportações brasileiras', 'Agência Brasil'],
            ['20/11/2025', 'EUA retiram a sobretaxa de 40% de café, carnes, frutas e outros itens (efeito retroativo a 13/11)', 'MDIC'],
            ['03/01/2026', 'Operação dos EUA em Caracas captura **Nicolás Maduro**', 'Agência Brasil; ONU News'],
            ['17/01/2026', 'Assinatura do acordo **Mercosul–UE** em Assunção', 'Agência Gov'],
            ['20/02/2026', 'Suprema Corte dos EUA derruba as tarifas baseadas na IEEPA (6 × 3)', 'Agência Brasil'],
            ['17/03/2026', 'Congresso promulga o decreto legislativo do acordo', 'Agência Senado'],
            ['01/05/2026', 'Início da **aplicação provisória** do acordo comercial', 'Comissão Europeia'],
            ['19/07/2026', '**Espanha** campeã da Copa de 2026 (1 a 0 na Argentina, na prorrogação)', 'Agência Brasil; FIFA'],
            ['22/07/2026', 'Entra em vigor sobretaxa de 25% dos EUA (Seção 301) sobre parte dos produtos brasileiros', 'MDIC'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Como cobrar:** local de assinatura (Assunção, não Montevidéu nem Foz do Iguaçu).',
          'Sequência do tratado: assinatura (jan.) → aprovação pelo Congresso (decreto legislativo, mar.) → aplicação provisória (maio).',
          'Nome civil × nome papal: Prevost = Leão XIV.',
          'Sede da Copa 2026: **EUA, México e Canadá** (primeira com 48 seleções).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Estilo Objetiva',
        enunciado:
          'Assinalar a alternativa correta sobre o acordo Mercosul–União Europeia: (A) foi assinado em Bruxelas em 2025; (B) foi assinado em Assunção, em janeiro de 2026, e começou a ser aplicado provisoriamente em maio de 2026; (C) dispensou aprovação do Congresso Nacional; (D) inclui os Estados Unidos; (E) foi rejeitado pelo Senado brasileiro.',
        resolucao:
          'B. Tratado depende de aprovação do Congresso (CF, art. 49, I), feita por decreto legislativo promulgado em 17/03/2026.',
      },
      {
        tipo: 'atencao',
        texto:
          'Tarifas dos EUA mudaram várias vezes entre 2025 e 2026: guarde a **data** de cada medida e confira no MDIC a situação vigente antes da prova. A emergência internacional de 2026 declarada pela OMS foi a do **ebola (vírus Bundibugyo) na RD Congo e em Uganda**, em 17/05/2026; não confunda com a de mpox, encerrada em 2025. Em temas de conflito, a banca cobra **fatos e datas**, não juízo de valor: responda pelo que a fonte oficial registrou.',
      },
    ],
    fontes: [AG_GOV_MERCOSUL, SENADO_MERCOSUL, UE_MERCOSUL_MAIO, AG_BR_TARIFA_AGO25, MDIC_TARIFAS_NOV25, AG_BR_SUPREMA_CORTE, MDIC_TARIFAS_JUL26, AG_BR_MADURO, ONU_MADURO, OSSERVATORE_PAPA, AG_BR_COPA, FIFA_COPA, OMS_EBOLA],
    atualizadoEm: ATUALIZADO,
  },
];
