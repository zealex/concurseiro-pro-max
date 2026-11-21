import type { ResumoTema } from '../../../types';
import { ATUALIZADO, CPP, POP_LOCAL, VELHO } from './fontes';

export const RESUMOS_1: ResumoTema[] = [
  /* ---------- crim-local ---------- */
  {
    temaId: 'crim-local',
    titulo: 'Local de crime: isolamento, preservação e levantamento',
    resumo:
      'A banca cobra as classificações do local (idôneo × inidôneo; imediato, mediato e relacionado; interno × externo), quem deve isolar e preservar (CPP, arts. 6º, I, e 169), as formas de fixação (fotografia, croqui e descrição) e os princípios da Criminalística, com Locard à frente.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Local de crime** é a área onde ocorreu um fato que, em tese, configura infração penal, junto com as adjacências e os demais pontos ligados a ele que possam conter vestígios. É ali que nasce a prova material e, desde a Lei 13.964/2019, também a **cadeia de custódia**: ela começa “com a preservação do local de crime” (CPP, art. 158-A, § 1º).\n\nO dever de preservar é da **autoridade policial**. Logo que souber da infração, ela deve “dirigir-se ao local, providenciando para que não se alterem o estado e conservação das coisas, **até a chegada dos peritos criminais**” (CPP, **art. 6º, I**), e só apreende os objetos “**após liberados pelos peritos criminais**” (art. 6º, II). O **art. 169** repete a ordem e permite aos peritos instruir o laudo com **fotografias, desenhos ou esquemas elucidativos**. O parágrafo único manda os peritos **registrarem no laudo as alterações** do estado das coisas e **discutirem no relatório as consequências** dessas alterações na dinâmica dos fatos.\n\nO art. 158-C, § 2º, completa o quadro: é **proibida a entrada em locais isolados** e a **remoção de vestígios** antes da liberação pelo perito responsável. Quem faz isso pratica **fraude processual**.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Classificações do local de crime (doutrina e POP de Local de Crime, MJSP, 2024)',
          colunas: ['Critério', 'Classificação', 'Significado'],
          linhas: [
            ['Preservação', 'Idôneo (preservado)', 'Mantido como o autor o deixou até a chegada da perícia'],
            ['Preservação', 'Inidôneo (violado, prejudicado)', 'Alterado por curiosos, socorristas, policiais, chuva etc. A perícia é feita mesmo assim, e o perito registra e discute as alterações (art. 169, parágrafo único)'],
            ['Extensão', 'Imediato', 'Área onde o fato ocorreu; presume-se ali a maior concentração de vestígios'],
            ['Extensão', 'Mediato', 'Adjacências do imediato, **com continuidade geográfica** em relação a ele'],
            ['Extensão', 'Relacionado', 'Área **sem continuidade geográfica** com o imediato, mas ligada ao fato (ex.: onde o carro da vítima foi abandonado)'],
            ['Ambiente', 'Interno', 'Ambiente fechado ou abrigado: residência, loja, escritório'],
            ['Ambiente', 'Externo', 'Ambiente aberto, exposto às intempéries: via pública, terreno baldio, mata'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Fotografia:** vai do geral para o particular (POP de Local de Crime, 2024). Primeiro as vistas panorâmicas e gerais (com pontos de referência), depois as médias (relação entre objetos) e, por fim, as de detalhe, com escala métrica. “Os cadáveres serão sempre fotografados na posição em que forem encontrados” (CPP, art. 164).',
          '**Croqui:** esboço do local com os objetos e vestígios constatados e a sua disposição, mais as anotações dos peritos (POP de Local de Crime, 2024). Fixa posições e medidas que a fotografia distorce.',
          '**Descrição:** o laudo descreve minuciosamente o que foi examinado (CPP, art. 160). Na etapa de **fixação** da cadeia de custódia, foto, filmagem e croqui **podem** ilustrar, mas a descrição no laudo é **indispensável** (art. 158-B, III).',
          '**Métodos de busca:** o POP de Local de Crime (2024) cita espiral, por quadrantes, linha cruzada e varredura. A doutrina acrescenta variações (faixas, grade, setores), e a escolha depende do tamanho e do tipo do local.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Princípios da Criminalística (doutrina; ex.: Velho, Geiser & Espíndula)',
          colunas: ['Princípio', 'Enunciado'],
          linhas: [
            ['Troca, transferência ou observação (Locard)', '“Todo contato deixa uma marca”: autor, vítima e local trocam vestígios entre si'],
            ['Análise', 'A análise pericial deve sempre seguir o método científico'],
            ['Individualidade ou interpretação (Kirk)', 'Dois objetos podem ser indistinguíveis, mas nunca idênticos'],
            ['Descrição', 'O resultado do exame é constante no tempo e deve ser exposto em linguagem técnica e juridicamente adequada'],
            ['Documentação', 'Todo vestígio deve ser documentado, do local até a análise e a descrição final; é a base da cadeia de custódia'],
          ],
          nota: 'Tudo aqui é doutrina, e a nomenclatura varia entre autores: o princípio de Locard aparece como troca, transferência ou observação; o da individualidade (associado a Paul Kirk), também como interpretação. Em prova, guarde o conteúdo de cada princípio, e não só o nome. O par mais cobrado é Locard = troca de vestígios pelo contato.',
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Classificando um local',
        enunciado:
          'Homicídio em apartamento. A vítima está na sala, há gotas de sangue no corredor do prédio e o carro da vítima foi achado incendiado em outro bairro. Antes da polícia, o síndico cobriu o corpo com um lençol. Classifique os locais.',
        resolucao:
          'Sala: local **imediato** e **interno**. Corredor: **mediato**, porque há continuidade geográfica com a sala. Carro em outro bairro: **relacionado**, ligado ao fato sem continuidade geográfica. Como o síndico mexeu na cena, o local é **inidôneo**: a perícia é feita, e o perito registra a alteração no laudo e discute as suas consequências (CPP, art. 169, parágrafo único).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) quem providencia a preservação até a chegada dos peritos é a **autoridade policial** (art. 6º, I), e a apreensão de objetos só ocorre **depois** da liberação pelos peritos (art. 6º, II). (b) Local **inidôneo** não dispensa a perícia. (c) O mediato tem continuidade geográfica com o imediato; o relacionado não tem. (d) Na fixação, a descrição no laudo é indispensável; foto, filmagem e croqui são ilustrativos. (e) Locard é o princípio da **troca**; “indistinguíveis, mas nunca idênticos” é o da **individualidade**. (f) Entrar em local isolado ou remover vestígio antes da liberação pelo perito é **fraude processual** (art. 158-C, § 2º).',
      },
    ],
    fontes: [CPP, POP_LOCAL, VELHO],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- crim-vestigios ---------- */
  {
    temaId: 'crim-vestigios',
    titulo: 'Vestígios, evidências, indícios e cadeia de custódia',
    resumo:
      'A banca cobra a diferença entre vestígio, evidência e indício (CPP, arts. 158-A, § 3º, e 239) e, sobretudo, a cadeia de custódia dos arts. 158-A a 158-F: as 10 etapas do art. 158-B, quem coleta, os lacres e a central de custódia. As trocas preferidas são entre etapas vizinhas e entre “preferencialmente” e “exclusivamente”.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Vestígio** é “todo objeto ou material bruto, visível ou latente, constatado ou recolhido, que se relaciona à infração penal” (CPP, **art. 158-A, § 3º**). **Evidência**, para a doutrina, é o vestígio que, depois da análise pericial, se mostrou efetivamente ligado ao fato. **Indício** é conceito legal e processual: “a circunstância conhecida e provada, que, tendo relação com o fato, autorize, **por indução**, concluir-se a existência de outra ou outras circunstâncias” (CPP, **art. 239**).\n\nSegundo a doutrina, os vestígios podem ser **verdadeiros** (resultam do próprio fato, produzidos pelo autor ou pela vítima), **ilusórios** (sem relação com o fato, deixados sem intenção de enganar, como os de socorristas ou os que já estavam no local) e **forjados** (produzidos de propósito para iludir a investigação, como a arma plantada para simular suicídio).\n\nA regra-mãe é o **art. 158**: quando a infração deixar vestígios, o **exame de corpo de delito**, direto ou indireto, é indispensável, e **a confissão do acusado não o supre**. Se os vestígios desaparecerem, a **prova testemunhal** poderá suprir a falta (art. 167). O exame é feito por **perito oficial** com diploma de curso superior; na falta dele, por **duas pessoas idôneas** com diploma superior, preferencialmente na área específica (art. 159, caput e § 1º). Nas perícias de laboratório, os peritos guardam **material suficiente** para eventual nova perícia (art. 170).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Cadeia de custódia: as 10 etapas do art. 158-B do CPP',
          colunas: ['Etapa', 'Definição legal (resumida)'],
          linhas: [
            ['I – Reconhecimento', 'Distinguir um elemento como de potencial interesse para a prova pericial'],
            ['II – Isolamento', 'Evitar que se altere o estado das coisas, isolando e preservando o ambiente imediato, mediato e relacionado'],
            ['III – Fixação', 'Descrição detalhada do vestígio e da sua posição; pode ser ilustrada por fotografias, filmagens ou croqui; a descrição no laudo é indispensável'],
            ['IV – Coleta', 'Recolher o vestígio, respeitando suas características e natureza'],
            ['V – Acondicionamento', 'Embalar cada vestígio de forma individualizada, com data, hora e nome de quem coletou e acondicionou'],
            ['VI – Transporte', 'Transferir o vestígio em condições adequadas (embalagens, veículos, temperatura), com controle da posse'],
            ['VII – Recebimento', 'Ato formal de transferência da posse, documentado (procedimento, origem, quem transportou, código de rastreamento, protocolo, assinatura de quem recebeu)'],
            ['VIII – Processamento', 'O exame pericial em si, formalizado em laudo produzido por perito'],
            ['IX – Armazenamento', 'Guarda em condições adequadas do material a processar, guardado para contraperícia, descartado ou transportado, vinculado ao número do laudo'],
            ['X – Descarte', 'Liberação do vestígio, respeitando a legislação e, quando pertinente, mediante autorização judicial'],
          ],
          nota: 'Conceito (art. 158-A): procedimentos para manter e documentar a história cronológica do vestígio, rastreando posse e manuseio **do reconhecimento até o descarte**.',
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Início** (art. 158-A, § 1º): com a preservação do local de crime ou com procedimentos policiais ou periciais em que se detecte vestígio. Quem reconhece o elemento fica responsável por preservá-lo (§ 2º).',
          '**Coleta** (art. 158-C): **preferencialmente por perito oficial**, que encaminha o vestígio à central de custódia, mesmo quando houver exames complementares.',
          '**Recipiente** (art. 158-D): definido pela natureza do material; selado com **lacre de numeração individualizada**; deve individualizar o vestígio, preservar suas características, impedir contaminação e vazamento, ter resistência adequada e espaço para registro.',
          '**Abertura** (art. 158-D, §§ 3º a 5º): só pelo perito que fará a análise e, motivadamente, por pessoa autorizada. Cada rompimento vai para a **ficha de acompanhamento** (nome e matrícula, data, local, finalidade e novo lacre), e o **lacre rompido vai dentro do novo recipiente**.',
          '**Central de custódia** (art. 158-E): obrigatória em todos os Institutos de Criminalística, com gestão vinculada diretamente ao **órgão central de perícia oficial de natureza criminal**. Entrada e saída protocoladas; quem acessa o vestígio é identificado, com data e hora.',
          '**Depois da perícia** (art. 158-F): o material volta à central de custódia e nela permanece. Sem espaço, a autoridade policial ou judiciária determina o depósito em outro local, a requerimento do diretor do órgão central de perícia.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Lacre rompido para exame complementar',
        enunciado:
          'O perito de genética precisa abrir o recipiente de uma faca já periciada pela balística para um exame de DNA. O que a lei exige?',
        resolucao:
          'Só o perito que vai proceder à análise (ou pessoa autorizada, motivadamente) pode abrir o recipiente. Na ficha de acompanhamento registram-se nome e matrícula do responsável, data, local, finalidade e os dados do novo lacre. O lacre rompido é guardado **dentro** do novo recipiente (art. 158-D, §§ 3º a 5º). Concluído o exame, o material volta à central de custódia (art. 158-F).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) a cadeia vai do **reconhecimento até o descarte**, e não “da coleta até o laudo”. (b) A coleta é **preferencialmente**, e não exclusivamente, por perito oficial. (c) **Isolamento** é evitar alteração; **fixação** é descrever e registrar a posição; **coleta** é recolher. (d) O acondicionamento é **individualizado**. (e) **Recebimento** é ato formal de transferência da posse; **processamento** é o exame em si. (f) O descarte exige autorização judicial **quando pertinente**, e não sempre. (g) A central de custódia se vincula ao órgão central de **perícia**, e não à delegacia. (h) Indício é raciocínio **indutivo** a partir de circunstância provada (art. 239).',
      },
    ],
    fontes: [CPP, POP_LOCAL, VELHO],
    atualizadoEm: ATUALIZADO,
  },
];
