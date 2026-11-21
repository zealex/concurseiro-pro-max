import type { ResumoTema } from '../../../types';
import {
  ATUALIZADO,
  IBGE_CENSO,
  IBGE_ESTIMATIVA,
  IBGE_REGIOES,
  SC_ACORIANOS,
  SC_CONHECA_CONSTITUICAO,
  SC_CONSTITUICAO,
  SC_ECONOMIA,
  SC_EPAGRI,
  SC_GEOGRAFIA,
  SC_HISTORIA,
  SC_JOINVILLE,
  SC_SEF_CAPITAL,
  SC_SIMBOLOS,
  SC_UFSC_FORTALEZAS,
  SC_UFSC_SILVA_PAES,
} from './fontes';

export const RESUMOS_2: ResumoTema[] = [
  /* ---------- reg-sc-historia ---------- */
  {
    temaId: 'reg-sc-historia',
    titulo: 'Santa Catarina: história',
    resumo:
      'A banca cobra a criação da Capitania em 1738 (data magna de 11 de agosto), os açorianos no litoral, a imigração alemã e italiana, a República Juliana (Laguna, 1839), a Guerra do Contestado e a troca do nome Desterro por Florianópolis em 1894.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O litoral catarinense era habitado pelos **Carijós**, do grupo **tupi-guarani**. No planalto e no oeste viviam os **Kaingang** e os **Xokleng (Laklãnõ)**. No século XVI, expedições a serviço da Espanha e de Portugal passaram pela Ilha de Santa Catarina. O nome **Santa Catarina** aparece pela primeira vez no mapa-múndi de Diego Ribeiro, de **1529**. A origem do nome é discutida: a homenagem pode ser a Santa Catarina de Alexandria ou a Catarina Medrano, esposa de Sebastião Caboto.\n\nO povoamento efetivo começou no século XVII com os **vicentistas (bandeirantes)**. Surgiram três núcleos: **Nossa Senhora do Desterro**, atual Florianópolis; **Nossa Senhora da Graça**, atual **São Francisco do Sul**, vila fundada em 1660 e considerada a **cidade mais antiga** do estado; e **Laguna**, o segundo município catarinense, criado em 1714.\n\nPara garantir o sul contra os espanhóis, Portugal criou em **1738 a Capitania de Santa Catarina**, separada de São Paulo e subordinada ao Rio de Janeiro. O primeiro governador, o brigadeiro **José da Silva Paes**, assumiu em 1739 e planejou o sistema de **fortalezas** da ilha, iniciado pela de Santa Cruz de Anhatomirim (1739). Entre **1748 e 1756**, milhares de **açorianos** se fixaram no litoral, de onde vêm a renda de bilro, a pesca artesanal e a Festa do Divino. Em **1777**, os **espanhóis invadiram a ilha**, devolvida a Portugal pelo **Tratado de Santo Ildefonso** no mesmo ano.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Linha do tempo',
          colunas: ['Ano', 'Fato'],
          linhas: [
            ['1738', 'Criação da **Capitania de Santa Catarina**. **11 de agosto** é a data magna. Pela Lei 15.109/2010, São Francisco do Sul é a capital simbólica nesse dia'],
            ['1748–1756', 'Chegada dos **açorianos** ao litoral'],
            ['1777', 'Invasão espanhola da ilha; devolução pelo Tratado de Santo Ildefonso'],
            ['1829', '**São Pedro de Alcântara**: primeira colônia de imigrantes alemães'],
            ['1839', 'Os farrapos tomam **Laguna** e proclamam a **República Juliana**. Anita Garibaldi, nascida na região, une-se a Giuseppe Garibaldi'],
            ['1850', 'Hermann Blumenau funda a colônia de **Blumenau** (Vale do Itajaí)'],
            ['1851', '**Colônia Dona Francisca**, atual **Joinville**: os primeiros imigrantes (alemães, suíços e noruegueses) desembarcaram em 9 de março'],
            ['Década de 1870', 'Início da imigração **italiana**, no Vale do Itajaí e, depois, no sul (região de Urussanga e Criciúma)'],
            ['1894', 'Fim da Revolução Federalista: a capital, Nossa Senhora do Desterro, passa a se chamar **Florianópolis**, em homenagem ao presidente Floriano Peixoto'],
            ['1912–1916', '**Guerra do Contestado**'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          'A **Guerra do Contestado (1912–1916)** aconteceu no meio-oeste e no planalto norte, numa área disputada entre **Paraná e Santa Catarina**. Pesaram vários fatores: a construção da **Estrada de Ferro São Paulo–Rio Grande**, a concessão de terras às margens da ferrovia a empresas estrangeiras (como a madeireira **Lumber**), a expulsão de posseiros e o **messianismo** dos **monges** (José Maria). O primeiro combate foi o do **Irani (1912)**. O conflito terminou em **1916**, e o **acordo de limites** foi assinado em 20 de outubro de 1916 pelos governadores Felipe Schmidt (SC) e Afonso Camargo (PR), com mediação do presidente Venceslau Brás. A maior parte da área ficou com Santa Catarina.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Farroupilha em Santa Catarina',
        enunciado: 'Uma questão pergunta qual cidade catarinense foi sede da República Juliana. Qual é a resposta e a que movimento ela se liga?',
        resolucao:
          '**Laguna**, tomada pelos farrapos em **1839**. A República Juliana é um desdobramento da **Revolução Farroupilha (1835–1845)**, iniciada no Rio Grande do Sul. Não tem relação com o Contestado nem com a Revolução Federalista.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) a cidade mais antiga é **São Francisco do Sul**, e não Florianópolis; (b) Florianópolis chamava-se **Desterro**, e o nome mudou em **1894** (Revolução Federalista), não na Farroupilha; (c) a primeira colônia alemã foi **São Pedro de Alcântara (1829)**, anterior a Blumenau (1850) e Joinville (1851); (d) a República Juliana foi em **Laguna**, e não em Lages; (e) a capitania foi criada em **1738**, e não em 1853 (essa é a data do Paraná).',
      },
    ],
    fontes: [SC_HISTORIA, SC_CONHECA_CONSTITUICAO, SC_SEF_CAPITAL, SC_UFSC_SILVA_PAES, SC_UFSC_FORTALEZAS, SC_ACORIANOS, SC_JOINVILLE],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- reg-sc-geografia ---------- */
  {
    temaId: 'reg-sc-geografia',
    titulo: 'Santa Catarina: geografia e economia',
    resumo:
      'Cai o fato de ser o menor e o mais denso estado do Sul, a capital que não é a maior cidade (Joinville é), as duas vertentes hidrográficas, a neve no Planalto Serrano e a economia regionalizada: agroindústria no oeste, têxtil no Vale do Itajaí, metalmecânica no norte e carvão e cerâmica no sul.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Santa Catarina faz divisa com o **Paraná** (norte) e o **Rio Grande do Sul** (sul), faz fronteira com a **Argentina** (oeste) e é banhada pelo **Atlântico** (leste). É o **menor estado do Sul** em área e o **mais denso**.\n\nO relevo vai da **planície litorânea**, com baías, ilhas, lagoas e a Ilha de Santa Catarina, até as serras do **Mar** e **Geral**. Depois vem o **planalto**, que desce suavemente para o oeste. O **Planalto Serrano** (São Joaquim, Urubici, Urupema) chega a cerca de 1.820 m de altitude e é a região de **maior ocorrência de neve do Brasil**.\n\nO clima é **subtropical úmido**, com chuvas bem distribuídas no ano e quatro estações definidas. Todo o território está no bioma **Mata Atlântica**, com manguezais e restingas no litoral, floresta densa nas encostas, **Floresta com Araucária** e campos de altitude no planalto.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Santa Catarina em números (IBGE)',
          colunas: ['Indicador', 'Valor', 'Como a banca usa'],
          linhas: [
            ['População (Censo 2022)', '7.610.361 hab.', 'Menos populoso do Sul; 10º do país'],
            ['Estimativa 2026', 'cerca de 8,31 milhões', 'Crescimento rápido desde 2022'],
            ['Área', '95.730,690 km²', '**Menor do Sul**'],
            ['Densidade (2022)', '79,50 hab./km²', '**Mais denso do Sul**'],
            ['Municípios', '295', '—'],
            ['Capital', 'Florianópolis: 537.211 hab. (2022)', '2ª cidade do estado'],
            ['Maior cidade', '**Joinville**: 616.317 hab. (2022)', 'A capital não é a maior cidade'],
            ['Outras', 'Blumenau, São José, Itajaí, Chapecó, Palhoça, Criciúma', '—'],
            ['Regiões do IBGE', '6 mesorregiões; 7 regiões intermediárias', 'Oeste, Norte, Serrana, Vale do Itajaí, Grande Florianópolis, Sul'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Hidrografia, duas vertentes:** a **do interior**, com rios que vão para a bacia do Paraná–Uruguai, como o **Uruguai** (formado pelo Pelotas e pelo Canoas, na divisa com o RS), o Iguaçu (divisa com o PR), o Chapecó e o Peixe; e a **atlântica**, com rios curtos que descem direto ao mar, como o **Itajaí-Açu**, o Tubarão, o Araranguá e o Itapocu.',
          '**Oeste** (Chapecó, Concórdia): agroindústria de **suínos** e **aves**, com cooperativas, além de móveis. SC é o **maior produtor e exportador de carne suína do Brasil**, com mais da metade das exportações nacionais do produto em 2025.',
          '**Vale do Itajaí** (Blumenau, Brusque): **têxtil e vestuário**, construção naval e tecnologia. A cultura alemã aparece na Oktoberfest de Blumenau.',
          '**Norte** (Joinville, Jaraguá do Sul, São Bento do Sul): polo **metal-mecânico**, tecnológico e moveleiro.',
          '**Sul** (Criciúma, Tubarão): **carvão mineral**, **cerâmica**, plásticos descartáveis e vestuário.',
          '**Planalto Serrano** (Lages, São Joaquim): papel, celulose e madeira, pecuária e **maçã**. SC é grande produtor nacional de maçã.',
          '**Grande Florianópolis:** tecnologia, serviços, turismo e **maricultura**, com ostras e mexilhões, cultivos em que o estado lidera no país.',
          '**Portos:** Itajaí, Navegantes, Itapoá, São Francisco do Sul e Imbituba.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Região × atividade',
        enunciado: 'Associe: (1) Chapecó; (2) Blumenau; (3) Criciúma; (4) São Joaquim. Atividades: (a) carvão e cerâmica; (b) maçã; (c) agroindústria de carnes; (d) têxtil.',
        resolucao: '1-c, 2-d, 3-a, 4-b. As bancas costumam montar questões de associação com essas quatro regiões, às vezes acrescentando Joinville (metal-mecânica).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) a **capital (Florianópolis) não é a maior cidade**, pois Joinville é mais populosa; (b) SC é o **menor** estado do Sul em área, mas o **mais denso**; (c) o rio **Uruguai** nasce da junção do **Pelotas** com o **Canoas** e marca a divisa SC–RS; (d) o **Itajaí-Açu** pertence à vertente **atlântica**; (e) símbolos (Constituição Estadual, art. 3º): **bandeira, hino, armas e selo**. A bandeira atual vem da Lei nº 975/1953 e a flor-símbolo é a orquídea **Laelia purpurata**.',
      },
    ],
    fontes: [IBGE_CENSO, IBGE_ESTIMATIVA, IBGE_REGIOES, SC_GEOGRAFIA, SC_ECONOMIA, SC_EPAGRI, SC_CONSTITUICAO, SC_SIMBOLOS],
    atualizadoEm: ATUALIZADO,
  },
];
