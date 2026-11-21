import type { ResumoTema } from '../../../types';
import {
  ATUALIZADO,
  CF,
  IBGE_CENSO,
  IBGE_CIDADES,
  IBGE_ESTIMATIVA,
  IBGE_REGIOES,
  RS_ATLAS,
  RS_CONSTITUICAO,
  RS_RIO_GRANDE,
  RS_SIMBOLOS,
  RS_UFRGS_1923,
} from './fontes';

export const RESUMOS_3: ResumoTema[] = [
  /* ---------- reg-rs-historia ---------- */
  {
    temaId: 'reg-rs-historia',
    titulo: 'Rio Grande do Sul: história',
    resumo:
      'O assunto mais cobrado é a Revolução Farroupilha (1835–1845), com o 20 de setembro, a data magna. Também caem as Missões, as disputas com a Espanha, o charque, a imigração alemã (1824) e italiana (1875), a Revolução Federalista (maragatos × pica-paus) e o protagonismo gaúcho em 1930 e na Legalidade (1961).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Quando os europeus chegaram, o território era habitado por povos como **Charruas, Minuanos, Kaingang, Tapes, Carijós e Arachanes**, ligados aos grupos guarani e jê. As **reduções jesuíticas** espanholas, fundadas a partir de **1626**, foram os primeiros núcleos estáveis de povoamento. Depois de um recuo, os jesuítas voltaram no fim do século XVII e organizaram os **Sete Povos das Missões**, centros que produziam erva-mate, couro e gado. As ruínas de **São Miguel Arcanjo** são **Patrimônio Mundial da UNESCO**.\n\nO território foi disputado por Portugal e Espanha. O **Tratado de Madri (1750)** trocou os Sete Povos pela Colônia do Sacramento, e a resistência dos indígenas deu origem à **Guerra Guaranítica (1754–1756)**. Para garantir a posse, Portugal instalou acampamentos militares, fortes e presídios e distribuiu **sesmarias**. Em **1737**, a construção do **Forte de Jesus-Maria-José** deu origem à povoação de **Rio Grande**. Os **açorianos** chegaram a partir de **1752** e se fixaram em Rio Grande, Porto Alegre, Taquari, Santo Antônio da Patrulha e outros núcleos, onde plantavam trigo.\n\nAté meados do século XIX, a riqueza veio da pecuária e do **charque**, com centro em **Pelotas**, Rio Grande e Bagé. A imigração europeia veio depois: **alemães a partir de 1824**, em **São Leopoldo** e no Vale do Sinos, e **italianos a partir de 1875**, na **Serra Gaúcha** (Caxias do Sul, Bento Gonçalves, Garibaldi). Os dois grupos ocuparam o nordeste do estado em pequenas propriedades.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Conflitos que mais caem',
          colunas: ['Conflito', 'Período', 'Lados / líderes', 'Desfecho'],
          linhas: [
            ['**Revolução Farroupilha**', '1835–1845', 'Farrapos (Bento Gonçalves, Antônio de Souza Netto, David Canabarro) × Império', 'Começou em **20 de setembro de 1835** com a tomada de Porto Alegre. A **República Rio-Grandense** foi proclamada em 1836. Terminou com a **Paz de Ponche Verde (1845)**, negociada com **Caxias**'],
            ['**Revolução Federalista**', '1893–1895', '**Maragatos** (federalistas: Gaspar Silveira Martins, Gumercindo Saraiva) × **pica-paus** (republicanos de **Júlio de Castilhos**)', 'Vitória dos republicanos; ficou marcada pela prática da degola. Espalhou-se por SC e PR'],
            ['Revolução de 1923', '1923', '**Chimangos** (Borges de Medeiros) × maragatos (Assis Brasil)', '**Pacto de Pedras Altas** (dezembro de 1923): Borges concluiu o mandato, mas ficou impedido de nova reeleição'],
            ['Revolução de 1930', '1930', 'Aliança Liberal, liderada pelo gaúcho **Getúlio Vargas**', 'Vargas assume o governo federal'],
            ['**Campanha da Legalidade**', '1961', 'Governador **Leonel Brizola**', 'Garantiu a posse de **João Goulart** após a renúncia de Jânio'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Data magna:** **20 de setembro**, feriado estadual (Constituição Estadual, art. 6º, § 1º, renumerado pela EC nº 83/2023; antes era o parágrafo único). É o início da Farroupilha, lembrado na Semana Farroupilha.',
          '**Capital:** **Porto Alegre** (Constituição Estadual, art. 4º).',
          '**Símbolos (art. 6º):** **Bandeira Rio-Grandense, Hino Farroupilha e Armas tradicionais**. A bandeira vem da época farroupilha e foi adotada oficialmente pela Constituição Estadual de 14 de julho de 1891. Os símbolos foram suspensos no Estado Novo e restabelecidos pela **Lei nº 5.213/1966**. Desde a EC nº 83/2023, só podem ser alterados por lei aprovada pela maioria absoluta da Assembleia (art. 6º, § 2º).',
          '**Lema:** **“Liberdade, Igualdade, Humanidade”**. “Humanidade” foi incluída por Júlio de Castilhos, de inspiração **positivista**.',
          '**Hino:** letra de **Francisco Pinto da Fontoura**, música de **Joaquim José Mendanha** e harmonização de **Antônio Corte Real**.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Maragatos ou farrapos?',
        enunciado: '“Conflito de 1893 a 1895 entre federalistas, chamados maragatos, e republicanos castilhistas, chamados pica-paus.” Qual é o movimento?',
        resolucao:
          '**Revolução Federalista**. A Farroupilha (1835–1845) foi contra o **Império**, e seus combatentes eram os **farrapos**. Na Federalista, a disputa era entre gaúchos sobre o modelo de governo estadual da **República**. O Cerco da Lapa (PR) e a mudança do nome de Desterro (SC) são episódios dela.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) a Farroupilha durou **10 anos** (o “Decênio Heroico”, 1835–1845) e foi contra o **Império**, não contra a República; (b) **maragatos × pica-paus** é a Federalista (1893), e **chimangos × maragatos** é 1923; (c) os alemães chegaram em **1824** (São Leopoldo), antes dos italianos (**1875**, Serra); (d) a Legalidade (1961) defendeu a posse de **Jango**, não a de Vargas; (e) a data magna é **20 de setembro**, e não 7 de setembro.',
      },
    ],
    fontes: [RS_ATLAS, RS_CONSTITUICAO, RS_SIMBOLOS, RS_RIO_GRANDE, RS_UFRGS_1923],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- reg-rs-geografia ---------- */
  {
    temaId: 'reg-rs-geografia',
    titulo: 'Rio Grande do Sul: geografia e economia',
    resumo:
      'Cai a divisão do relevo em unidades geomorfológicas, o bioma Pampa (exclusivo do RS no Brasil, cerca de 69% do estado), a laguna dos Patos, as três regiões hidrográficas, o clima subtropical com geada e neve, e a economia: arroz, soja, fumo, vinho, calçados, metalmecânica e o porto de Rio Grande.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O Rio Grande do Sul é o estado mais meridional do Brasil. Faz divisa só com **Santa Catarina** (norte), faz fronteira com a **Argentina** (oeste e noroeste, pelo rio Uruguai) e com o **Uruguai** (sul) e é banhado pelo **Atlântico**. É o **único estado brasileiro que faz fronteira com o Uruguai** e o **maior estado do Sul** em área.\n\nO Atlas Socioeconômico do RS descreve **cinco unidades geomorfológicas**. O **Planalto Meridional**, no norte, é formado por **derrames basálticos** da era Mesozoica. Suas bordas formam a **Serra Geral**, e o ponto mais alto, a nordeste, é o **Monte Negro (1.398 m)**, em **São José dos Ausentes**. Na extremidade oeste, a erosão diferencial formou a **Cuesta do Haedo**. A **Depressão Central** é um corredor baixo de rochas sedimentares no centro do estado. O **Escudo Sul-Rio-Grandense** (Serras de Sudeste) tem rochas cristalinas pré-cambrianas, muito desgastadas, e não passa de 600 m. A **Planície Costeira**, do Quaternário, é uma faixa arenosa de 622 km, com a **laguna dos Patos** e a **lagoa Mirim**.\n\nO clima é **subtropical (mesotérmico úmido)**, com chuvas bem distribuídas no ano, verões quentes e invernos rigorosos, com **geadas** e neve eventual nas partes altas. A precipitação é maior no nordeste, na encosta do planalto.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Rio Grande do Sul em números (IBGE e Atlas Socioeconômico)',
          colunas: ['Indicador', 'Valor', 'Como a banca usa'],
          linhas: [
            ['População (Censo 2022)', '10.882.965 hab.', '6º do país; 2º do Sul (era o 1º em 2010)'],
            ['Estimativa 2026', 'cerca de 11,23 milhões', 'Sempre diga o ano do dado'],
            ['Área', '281.707,151 km² (inclui as lagunas)', '**Maior do Sul**'],
            ['Densidade (2022)', '38,63 hab./km²', '**Menos denso do Sul**'],
            ['Municípios', '497', 'Mais municípios entre os três'],
            ['Capital', 'Porto Alegre: 1.332.845 hab. (2022)', '2ª maior cidade do Sul'],
            ['Outras', 'Caxias do Sul, Canoas, Pelotas, Santa Maria, Gravataí, Novo Hamburgo', 'Caxias é a 2ª do estado'],
            ['Biomas', '**Pampa**, cerca de 69% (193.836 km²); **Mata Atlântica**, cerca de 31%', 'O Pampa só existe no RS dentro do Brasil'],
            ['Regiões do IBGE', '7 mesorregiões; 8 regiões intermediárias', 'Ex.: Campanha (Sudoeste), Serra (Nordeste)'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Hidrografia, três regiões hidrográficas:** **Uruguai**, a oeste, com os rios Ibicuí, Ijuí e Quaraí; **Guaíba**, com o Jacuí, Taquari, Caí, Sinos e Gravataí desaguando no Guaíba diante de Porto Alegre, a região mais povoada e industrializada; e **Litorânea**, com a laguna dos Patos, a lagoa Mirim e o rio Camaquã.',
          '**Pampa (Campanha):** campos nativos em relevo suave, com pecuária extensiva de bovinos e ovinos em grandes propriedades. A paisagem se estende ao Uruguai e à Argentina.',
          '**Arroz:** o RS é o **maior produtor de arroz do Brasil**, com lavouras irrigadas no sul e no sudoeste (Uruguaiana, Santa Vitória do Palmar, Itaqui, Alegrete).',
          '**Outras atividades:** soja e trigo no planalto norte (Passo Fundo, Ijuí); **fumo** no Vale do Rio Pardo (Santa Cruz do Sul); **uva e vinho** na Serra Gaúcha (Bento Gonçalves, Caxias); **calçados e couro** no Vale do Sinos (Novo Hamburgo); **metalmecânica** em Caxias do Sul; **petroquímica** em Triunfo; refino em Canoas.',
          '**Porto de Rio Grande:** principal porto marítimo do estado, no canal que liga a laguna dos Patos ao oceano.',
          '**Ocupação × rede urbana:** no **sul**, as grandes propriedades geraram poucas cidades, distantes umas das outras. No **norte**, a pequena propriedade colonial gerou muitos municípios próximos.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Qual unidade de relevo?',
        enunciado: '“Terrenos de baixa altitude, de rochas sedimentares, formando um corredor no centro do estado, entre o planalto e o escudo.” Qual é a unidade?',
        resolucao:
          '**Depressão Central**. O Planalto Meridional é basáltico e fica no norte. O Escudo Sul-Rio-Grandense é cristalino e antigo e fica no sul. A Planície Costeira é arenosa e recente (Quaternário).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) o ponto mais alto do RS é o **Monte Negro (1.398 m)**, mas o ponto mais alto do **Sul** é o **Pico Paraná (PR)**; (b) o Pampa ocupa a **metade sul** do estado, e não o norte; (c) a Mata Atlântica gaúcha conserva só cerca de 8% de remanescentes; (d) o RS é o **maior** estado do Sul em área, mas, desde o Censo 2022, **não é o mais populoso** (o PR é); (e) “laguna dos Patos” é a forma usada pelo Atlas do governo do RS.',
      },
    ],
    fontes: [IBGE_CENSO, IBGE_ESTIMATIVA, IBGE_REGIOES, RS_ATLAS],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- reg-municipio ---------- */
  {
    temaId: 'reg-municipio',
    titulo: 'Município do edital: como estudar',
    resumo:
      'Editais de prefeitura do Sul (FUNDATEC, Objetiva, FEPESE, FURB, Legalle, IBAM) costumam cobrar “aspectos históricos, geográficos, econômicos e culturais do município”. As questões repetem sempre os mesmos dados: emancipação, colonização, população, economia, limites e símbolos. Com um método, uma página de fichamento basta.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Não existe livro do seu município. A prova tira as perguntas de **fontes oficiais curtas**, quase sempre o **site da prefeitura** (aba “História” ou “O Município”) e o **IBGE Cidades**. Por isso, estude **pelas mesmas fontes** que o examinador provavelmente usou e anote o **ano** de cada número.\n\nNo Sul, cada município foi **criado por lei estadual**. A Constituição Federal (art. 18, § 4º) exige lei estadual, dentro do período fixado em lei complementar federal, **plebiscito** com as populações envolvidas e **Estudo de Viabilidade Municipal**. Por isso, quase todo município tem duas datas: a da **lei de criação** e a da **instalação** (posse do primeiro prefeito e dos vereadores). A banca adora trocar uma pela outra.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Onde pesquisar',
          colunas: ['Fonte', 'O que tirar dela', 'Cuidado'],
          linhas: [
            ['**IBGE Cidades** (cidades.ibge.gov.br) → Panorama', 'População do Censo 2022, estimativa mais recente, área, densidade, PIB per capita, IDHM, bioma', 'Diferencie censo de estimativa e anote o ano'],
            ['IBGE Cidades → **Histórico**', 'Formação administrativa: distrito, município-mãe, lei de criação, instalação, gentílico', 'O texto é antigo; confira a data com a lei'],
            ['**Site da prefeitura**', 'História, colonização, festas, pontos turísticos, símbolos (hino, bandeira, brasão)', 'Fonte preferida das bancas'],
            ['**Câmara de Vereadores**', '**Lei Orgânica** (símbolos, data magna) e leis dos símbolos', 'A Lei Orgânica é a “constituição” do município'],
            ['**Assembleia Legislativa / legislação estadual**', 'Texto da **lei de criação** (data, município de origem, limites)', 'É a fonte da data oficial'],
            ['Governo do estado e associação de municípios', 'Região, microrregião, consórcios', 'Nome da região varia conforme a fonte'],
          ],
        },
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          '**Identificação:** nome, gentílico, região do estado, distância da capital.',
          '**Datas:** lei de criação (número e data), instalação e aniversário oficial, além do município do qual se desmembrou.',
          '**Povoamento:** povos indígenas, primeiros moradores, tropeiros, ferrovia, imigrantes (origem e ano) e origem do nome.',
          '**Números (IBGE):** população no Censo 2022 e estimativa recente, área (km²) e densidade, com os anos.',
          '**Geografia:** **municípios limítrofes**, rios principais, relevo/altitude, clima e bioma.',
          '**Economia:** 3 ou 4 atividades principais (ex.: soja, leite, frango, indústria moveleira, turismo).',
          '**Cultura e símbolos:** festas, padroeiro, hino (autores), bandeira, brasão e pontos turísticos.',
          '**Política:** prefeito atual e número de vereadores. Confira na véspera, porque muda a cada eleição.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Fichamento de 1 página (município fictício)',
        enunciado:
          'Município fictício de “Serra Azul do Sul”: criado pela Lei Estadual nº 9.999, de 12/05/1988, desmembrado de “Campo Largo do Oeste”; instalado em 01/01/1989; colonização italiana (1900); Censo 2022: 8.200 hab.; limites: A, B, C e D; economia: leite, uva e turismo rural. Como organizar?',
        resolucao:
          'Em uma folha, faça 8 caixas na ordem da lista acima. Na de **Datas**: “Lei 9.999 de 12/05/1988 (criação) ≠ 01/01/1989 (instalação); mãe: Campo Largo do Oeste”. Na de **Números**: “8.200 hab. (Censo 2022)”. Na de **Limites**: os quatro nomes, de preferência em sentido horário a partir do norte. Revise a folha 3 vezes na semana da prova: limites e datas são os itens que mais derrubam candidatos.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) **data da lei ≠ data da instalação**; (b) **população do Censo 2022 ≠ estimativa** (o IBGE atualiza a estimativa todo ano), e o enunciado costuma dizer qual quer; (c) a lista de **limítrofes** costuma vir com um município **vizinho do vizinho** como intruso; (d) “colonização alemã” e “imigração italiana” não se confundem, porque muitos municípios do Sul tiveram as duas, em ondas diferentes; (e) prefeito e vice mudam a cada quatro anos, então confira antes da prova.',
      },
    ],
    fontes: [IBGE_CIDADES, IBGE_CENSO, CF],
    atualizadoEm: ATUALIZADO,
  },
];
