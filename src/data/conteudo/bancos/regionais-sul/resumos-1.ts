import type { ResumoTema } from '../../../types';
import {
  ATUALIZADO,
  IBGE_CENSO,
  IBGE_ESTIMATIVA,
  IBGE_REGIOES,
  PR_AEN_171,
  PR_AEN_FRANGO,
  PR_AEN_KLABIN,
  PR_AEN_PARANAGUA,
  PR_CONSTITUICAO,
  PR_CURITIBA_HIST,
  PR_IAT_PICO,
  PR_LEI_704,
  PR_UEM_TROPICO,
  PR_UNIOESTE_POSSEIROS,
} from './fontes';

export const RESUMOS_1: ResumoTema[] = [
  /* ---------- reg-pr-historia ---------- */
  {
    temaId: 'reg-pr-historia',
    titulo: 'Paraná: história',
    resumo:
      'A banca cobra a emancipação de 1853 (lei, data e primeiro presidente), a sequência dos ciclos econômicos (ouro, tropeirismo, erva-mate, madeira, café), os grupos de imigrantes e os conflitos com reflexo no estado: Cerco da Lapa e Contestado.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Antes dos europeus, o território era ocupado por povos indígenas dos grupos **Guarani** e **Kaingang**, além dos **Xetá**, no noroeste. O Censo 2022 contou cerca de 30 mil indígenas no estado (30.466 pessoas). A ocupação portuguesa começou pelo **litoral**: a busca de **ouro de aluvião** fez surgir **Paranaguá**, elevada a **vila em 1648**, a primeira do atual Paraná.\n\nDo litoral, os mineradores subiram a Serra do Mar e chegaram ao planalto. Ali, em **29 de março de 1693**, foi instalada a Câmara da vila de **Nossa Senhora da Luz dos Pinhais**, que mais tarde passou a se chamar **Curitiba**. Por mais de dois séculos, a região foi a **5ª Comarca da Capitania (depois Província) de São Paulo**. Em 1812, a sede da comarca passou de Paranaguá para Curitiba.\n\nNo século XVIII, o planalto viveu do **tropeirismo**: tropas de gado e mulas vinham do Rio Grande do Sul para a feira de **Sorocaba (SP)**, pelo **Caminho de Viamão**. Os **Campos Gerais** serviam de invernada, onde o gado descansava e engordava. Cidades como **Castro, Lapa e Ponta Grossa** nasceram desses pousos.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Emancipação política',
          colunas: ['Fato', 'Dado oficial'],
          linhas: [
            ['Lei de criação', '**Lei Imperial nº 704, de 29 de agosto de 1853**, sancionada por D. Pedro II: eleva a comarca de Curitiba a província'],
            ['Instalação', '**19 de dezembro de 1853**: posse do 1º presidente, **Zacarias de Góis e Vasconcelos**. É a data comemorada como emancipação'],
            ['Desmembrado de', 'Província de **São Paulo**'],
            ['Tentativas anteriores', 'Paranaguá pediu a separação em 1811, sem sucesso. Houve nova tentativa nos anos 1840, no contexto da Revolução Liberal de Sorocaba (SP). O projeto de lei só tramitou a partir de 1850'],
            ['Situação em 1853', 'Cerca de 70 mil habitantes e 7 municípios (Paranaguá, Curitiba, Lapa, Antonina, Morretes, Castro e Guaratuba). Economia baseada na invernada do gado vindo do RS e no mate'],
            ['Capital', '**Curitiba**, que é a capital até hoje (Constituição Estadual, art. 5º)'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Ciclos econômicos e povoamento',
          colunas: ['Período', 'Ciclo / fato', 'Região'],
          linhas: [
            ['Século XVII', 'Ouro de aluvião', 'Litoral (Paranaguá) e Primeiro Planalto'],
            ['Século XVIII–XIX', 'Tropeirismo (Caminho de Viamão)', 'Campos Gerais (Castro, Lapa, Ponta Grossa)'],
            ['Século XIX–XX', 'Erva-mate e madeira (araucária)', 'Planaltos e Curitiba'],
            ['Século XIX–XX', 'Imigração europeia: poloneses, ucranianos, alemães, italianos, holandeses', 'Curitiba, Campos Gerais e sul do estado'],
            ['Século XX', 'Café, com colonização planejada por companhias de terras (Londrina, Maringá) e imigração japonesa', 'Norte e noroeste'],
            ['Meados do século XX', 'Migração gaúcha e catarinense; soja e trigo', 'Oeste e sudoeste'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Revolução Federalista, Cerco da Lapa (1894):** as tropas legalistas do coronel **Gomes Carneiro** resistiram por **26 dias** aos federalistas (maragatos) de **Gumercindo Saraiva**. Gomes Carneiro morreu no cerco, mas a resistência atrasou o avanço federalista rumo a São Paulo.',
          '**Guerra do Contestado (1912–1916):** conflito na região disputada por **Paraná e Santa Catarina**. O primeiro combate foi o do **Irani (1912)**, em que morreu o monge **José Maria**. O **acordo de limites** foi assinado em **1916**.',
          '**Revolta dos Posseiros (1957):** levante de colonos do **sudoeste** contra as companhias de terras que disputavam a posse da região. Em outubro de 1957, os posseiros tomaram Pato Branco e Francisco Beltrão. A titulação das posses começou em 1962.',
          '**Itaipu Binacional:** usina de Brasil e Paraguai no **rio Paraná**, em Foz do Iguaçu, construída nas décadas de 1970 e 1980.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Data da lei × data da instalação',
        enunciado: 'Item de prova: “O Paraná comemora sua emancipação política em 29 de agosto, data da instalação da província.” Certo ou errado?',
        resolucao:
          'Errado. **29 de agosto de 1853** é a data da **lei** (Lei nº 704). A **instalação**, com a posse de Zacarias de Góis e Vasconcelos, foi em **19 de dezembro de 1853**, e é essa a data comemorada como emancipação política.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) o Paraná se separou de **São Paulo**, e não de Santa Catarina nem do Rio Grande do Sul; (b) a lei é de **1853**, durante o **Império**, e não da República; (c) a primeira vila foi **Paranaguá (1648)**, e não Curitiba (1693); (d) a Guerra do Contestado envolveu **PR e SC**, enquanto o Cerco da Lapa pertence à **Revolução Federalista**; (e) o norte do estado foi colonizado pelo **café**, e não pela erva-mate.',
      },
    ],
    fontes: [PR_AEN_171, PR_LEI_704, PR_CURITIBA_HIST, PR_CONSTITUICAO, PR_UNIOESTE_POSSEIROS, IBGE_CENSO],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- reg-pr-geografia ---------- */
  {
    temaId: 'reg-pr-geografia',
    titulo: 'Paraná: geografia e economia',
    resumo:
      'Cai o relevo em degraus (litoral, Serra do Mar e três planaltos), os rios que correm para o interior, o Pico Paraná, os números do Censo 2022 (o mais populoso do Sul) e a economia: agroindústria, frango, Itaipu, Porto de Paranaguá e indústria automotiva.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O Paraná faz divisa com **São Paulo** (norte e nordeste), **Mato Grosso do Sul** (noroeste) e **Santa Catarina** (sul). Faz fronteira com o **Paraguai** (oeste) e a **Argentina** (sudoeste), e é banhado pelo **Oceano Atlântico** (leste). É o único estado do Sul que faz fronteira com o Paraguai. A **Tríplice Fronteira** (Brasil, Paraguai e Argentina) fica em **Foz do Iguaçu**.\n\nO relevo sobe do mar para o interior em degraus. Do **litoral** (baía de Paranaguá) sobe-se a **Serra do Mar**, onde está o **Pico Paraná (1.877 m)**, o **ponto mais alto da Região Sul**. Depois vêm três planaltos: o **Primeiro Planalto**, de Curitiba; o **Segundo Planalto**, de Ponta Grossa e dos Campos Gerais, separado do primeiro pela **Escarpa Devoniana**; e o **Terceiro Planalto**, de Guarapuava, Cascavel, Londrina e Maringá, separado do segundo pela **Serra Geral**, sobre rochas basálticas que formam a **terra roxa**.\n\nQuase todos os rios correm para o **interior** (oeste), rumo ao **rio Paraná**: Iguaçu, Tibagi, Ivaí, Piquiri e Paranapanema, este último na divisa com SP. No rio Iguaçu ficam as **Cataratas do Iguaçu** (Parque Nacional do Iguaçu, Patrimônio Natural da UNESCO). No rio Paraná fica **Itaipu**.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Paraná em números (IBGE)',
          colunas: ['Indicador', 'Valor', 'Como a banca usa'],
          linhas: [
            ['População (Censo 2022)', '11.444.380 hab.', '**Mais populoso do Sul**; ultrapassou o RS. 5º do país'],
            ['Estimativa 2026', 'cerca de 11,95 milhões', 'Sempre diga o ano do dado'],
            ['Área', '199.298,981 km²', '2º maior do Sul (o RS é o maior)'],
            ['Densidade (2022)', '57,42 hab./km²', 'Fica entre SC (maior) e RS (menor)'],
            ['Municípios', '399', '—'],
            ['Capital', 'Curitiba: 1.773.718 hab. (2022)', 'Maior cidade do Sul'],
            ['Outras grandes cidades', 'Londrina, Maringá, Ponta Grossa, Cascavel, São José dos Pinhais, Foz do Iguaçu', 'Londrina é a 2ª do estado'],
            ['Regiões do IBGE', '10 mesorregiões; 6 regiões intermediárias', 'Mesorregiões, ex.: Norte Pioneiro, Oeste, Sudoeste, Centro Oriental (Campos Gerais)'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Clima:** subtropical na maior parte do estado, com geadas nos planaltos mais altos (Curitiba, Guarapuava). O **Trópico de Capricórnio** (cerca de 23°26′ S) corta o norte do estado, na altura de Maringá. O norte e o noroeste têm o clima mais quente, de transição para o tropical.',
          '**Bioma:** praticamente todo o território está na **Mata Atlântica**. Há floresta ombrófila densa na Serra do Mar, **Floresta com Araucária (ombrófila mista)** nos planaltos, campos naturais nos Campos Gerais e floresta estacional no oeste e no norte. A **araucária (pinheiro-do-paraná)** é símbolo do estado e aparece na bandeira.',
          '**Economia agropecuária:** grãos (soja, milho, trigo), **frango**, suínos e leite. O Paraná é o **maior produtor de carne de frango do país** (34,4% dos frangos abatidos no Brasil em 2025). O **Porto de Paranaguá** é a principal saída das exportações brasileiras de frango: cerca de 44% do total em 2025.',
          '**Indústria e energia:** polo **automotivo** na Região Metropolitana de Curitiba (São José dos Pinhais), agroindústria cooperativista no oeste e no norte, **papel e celulose** nos Campos Gerais (Telêmaco Borba e Ortigueira) e geração hidrelétrica (Itaipu e as usinas do rio Iguaçu).',
          '**Turismo:** Cataratas e Itaipu (Foz do Iguaçu), Ilha do Mel, Parque Estadual de Vila Velha (arenitos, em Ponta Grossa) e a Estrada da Graciosa.',
          '**Símbolos (Constituição Estadual, art. 6º):** Bandeira, Hino, Brasão de Armas e **Sinete**.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Qual planalto?',
        enunciado: 'Uma questão descreve “planalto de Guarapuava e Cascavel, sobre derrames basálticos que originam a terra roxa”. De qual unidade se trata?',
        resolucao:
          '**Terceiro Planalto** (planalto de Guarapuava ou Trapp do Paraná). O Primeiro é o de Curitiba. O Segundo é o de Ponta Grossa e dos Campos Gerais, entre a Escarpa Devoniana e a Serra Geral.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) o **Pico Paraná** fica na **Serra do Mar**, e não na Serra Geral; (b) os rios paranaenses correm, em sua maioria, para o **interior**, e não para o Atlântico; (c) no Censo 2022 o Paraná passou a ser o **mais populoso do Sul**, mas o **maior em área** é o RS e o **mais denso** é SC; (d) o Trópico de Capricórnio passa pelo **norte** do estado, e não por Curitiba; (e) Itaipu é **binacional (Brasil–Paraguai)** e fica no **rio Paraná**, não no Iguaçu.',
      },
    ],
    fontes: [IBGE_CENSO, IBGE_ESTIMATIVA, IBGE_REGIOES, PR_IAT_PICO, PR_AEN_FRANGO, PR_AEN_PARANAGUA, PR_AEN_KLABIN, PR_UEM_TROPICO, PR_CONSTITUICAO],
    atualizadoEm: ATUALIZADO,
  },
];
