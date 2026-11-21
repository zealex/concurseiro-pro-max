import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Local de crime, vestígios e cadeia de custódia, balística
 * ------------------------------------------------------------------ */

export const QUESTOES_1: QuestaoTreino[] = [
  /* ---------- crim-local ---------- */
  {
    id: 'crim-local-q01',
    temaId: 'crim-local',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'Conforme o Código de Processo Penal, logo que tiver conhecimento da prática da infração penal, a autoridade policial deverá dirigir-se ao local, providenciando para que não se alterem o estado e conservação das coisas até:',
    alternativas: [
      'a chegada dos peritos criminais.',
      'a lavratura do boletim de ocorrência.',
      'a chegada do representante do Ministério Público.',
      'a remoção do cadáver pelo serviço funerário.',
      'a autorização do juiz competente para o início das diligências.',
    ],
    correta: 0,
    comentario:
      'O art. 6º, I, do CPP manda preservar o estado e a conservação das coisas “até a chegada dos peritos criminais”. O marco é a perícia, e não o boletim de ocorrência, o Ministério Público, a remoção do corpo ou uma autorização judicial, que a lei não exige para preservar o local.',
    fundamento: 'CPP, art. 6º, I',
  },
  {
    id: 'crim-local-q02',
    temaId: 'crim-local',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo sobre a classificação doutrinária dos locais de crime:\n\nI. Local mediato é a área adjacente ao local imediato, com continuidade geográfica em relação a ele.\nII. Local relacionado é aquele que, sem continuidade geográfica com o local imediato, guarda relação com o fato.\nIII. O local inidôneo, por ter sido alterado, dispensa o exame pericial, cabendo à autoridade policial registrar as alterações.\nIV. Local interno é aquele situado em ambiente fechado ou abrigado.\n\nQuais estão corretas?',
    alternativas: ['Apenas I e II.', 'Apenas II e III.', 'Apenas I, II e IV.', 'Apenas I, III e IV.', 'I, II, III e IV.'],
    correta: 2,
    comentario:
      'I, II e IV trazem a classificação usada pela doutrina; o POP de Local de Crime do MJSP (2024) define a área mediata pela continuidade geográfica com a imediata. A III está errada: o local inidôneo também é periciado, e são os peritos que registram no laudo as alterações e discutem suas consequências na dinâmica dos fatos (CPP, art. 169, parágrafo único).',
    fundamento: 'CPP, art. 169, parágrafo único; doutrina (Velho, Geiser & Espíndula, Ciências Forenses)',
  },
  {
    id: 'crim-local-q03',
    temaId: 'crim-local',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    enunciado:
      'O princípio segundo o qual “todo contato deixa uma marca”, que fundamenta a busca de vestígios trocados entre autor, vítima e local de crime, é atribuído a:',
    alternativas: ['Alphonse Bertillon.', 'Juan Vucetich.', 'Francis Galton.', 'Paul Kirk.', 'Edmond Locard.'],
    correta: 4,
    comentario:
      'O princípio da troca (também chamado de transferência ou observação, conforme o autor) é de Edmond Locard. Bertillon criou a antropometria de identificação, Vucetich o sistema datiloscópico adotado no Brasil, Galton estudou a individualidade das impressões digitais e Kirk é associado ao princípio da individualidade.',
    fundamento: 'Doutrina (Velho, Geiser & Espíndula, Ciências Forenses)',
  },
  {
    id: 'crim-local-q04',
    temaId: 'crim-local',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Ao chegarem a um local de homicídio, os peritos constatam que familiares mudaram a posição do corpo e recolheram objetos antes do isolamento. Segundo o Código de Processo Penal, os peritos devem:',
    alternativas: [
      'recusar o exame e devolver a requisição, por se tratar de local inidôneo.',
      'registrar no laudo as alterações do estado das coisas e discutir, no relatório, as consequências dessas alterações na dinâmica dos fatos.',
      'recompor o local à situação original antes de fotografá-lo, para que o laudo retrate a cena primitiva.',
      'limitar-se a fotografar o local, pois croquis e esquemas só podem instruir laudos de locais preservados.',
      'suspender o exame e comunicar o fato ao juiz, a quem cabe autorizar a continuidade da perícia.',
    ],
    correta: 1,
    comentario:
      'O art. 169, parágrafo único, do CPP manda registrar as alterações no laudo e discutir suas consequências na dinâmica dos fatos. A lei não autoriza recusar o exame, nem recompor a cena (isso seria uma nova alteração). Fotografias, desenhos e esquemas podem instruir o laudo em qualquer caso (art. 169, caput), e não há exigência de autorização judicial.',
    fundamento: 'CPP, art. 169 e parágrafo único',
  },
  {
    id: 'crim-local-q05',
    temaId: 'crim-local',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado: 'Sobre o levantamento do local de crime e a fixação dos vestígios, assinale a alternativa correta.',
    alternativas: [
      'Na fixação, a ilustração por fotografias é obrigatória, ao passo que a descrição do vestígio no laudo é facultativa.',
      'O croqui substitui a descrição do vestígio no laudo sempre que contiver medidas precisas.',
      'Os cadáveres devem ser fotografados depois de colocados em posição que permita visualizar as lesões.',
      'A descrição detalhada do vestígio e de sua posição é indispensável no laudo, podendo ser ilustrada por fotografias, filmagens ou croqui.',
      'A fotografia do local deve começar pelos detalhes, com escala métrica, e terminar nas vistas gerais.',
    ],
    correta: 3,
    comentario:
      'Pelo art. 158-B, III, a fixação é a descrição detalhada do vestígio e de sua posição, “podendo ser ilustrada” por fotos, filmagens ou croqui, “sendo indispensável a sua descrição no laudo”. Por isso A e B invertem a regra. C contraria o art. 164: os cadáveres são fotografados na posição em que forem encontrados. E inverte a sequência do POP de Local de Crime do MJSP (2024), que manda fotografar do geral para o particular.',
    fundamento: 'CPP, arts. 158-B, III, e 164; POP de Local de Crime, MJSP, 2024',
  },
  {
    id: 'crim-local-q06',
    temaId: 'crim-local',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Policiais militares chegam primeiro a um local de homicídio e encontram uma arma de fogo ao lado do corpo. Conforme o Código de Processo Penal, assinale a alternativa correta.',
    alternativas: [
      'O agente público que reconhecer um elemento como de potencial interesse para a produção da prova pericial fica responsável por sua preservação.',
      'A autoridade policial deve apreender a arma de imediato, antes da chegada dos peritos, para evitar o seu extravio.',
      'O isolamento restringe-se ao ambiente imediato; as áreas mediata e relacionada ficam a cargo da investigação policial.',
      'A cadeia de custódia só começa quando o perito oficial coleta o primeiro vestígio no local.',
      'Se o suspeito confessar no local, o isolamento pode ser desfeito, porque a confissão supre o exame de corpo de delito.',
    ],
    correta: 0,
    comentario:
      'A reproduz o art. 158-A, § 2º. B contraria o art. 6º, II: os objetos só são apreendidos “após liberados pelos peritos criminais”. C contraria o art. 158-B, II, que manda isolar e preservar os ambientes imediato, mediato e relacionado. D erra o marco: a cadeia começa com a preservação do local ou com a detecção do vestígio (art. 158-A, § 1º). E contraria o art. 158: a confissão não supre o exame de corpo de delito.',
    fundamento: 'CPP, arts. 6º, II, 158, 158-A, §§ 1º e 2º, e 158-B, II',
  },
  {
    id: 'crim-local-q07',
    temaId: 'crim-local',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A entrada em local de crime isolado antes da liberação pelo perito responsável é proibida, mas, por falta de previsão legal específica, configura apenas infração disciplinar.',
    gabaritoCE: false,
    comentario:
      'Errado. O art. 158-C, § 2º, do CPP proíbe a entrada em locais isolados e a remoção de vestígios antes da liberação pelo perito e diz expressamente que a conduta é tipificada como fraude processual.',
    fundamento: 'CPP, art. 158-C, § 2º',
  },
  {
    id: 'crim-local-q08',
    temaId: 'crim-local',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Segundo a doutrina da Criminalística, o princípio da individualidade, associado a Paul Kirk, sustenta que:',
    alternativas: [
      'todo contato entre autor, vítima e local deixa uma marca.',
      'a análise pericial deve sempre seguir o método científico.',
      'dois objetos podem ser indistinguíveis, mas nunca idênticos.',
      'todo vestígio deve ser documentado, desde o local até a descrição final no laudo.',
      'o resultado do exame pericial é constante no tempo e deve ser exposto em linguagem técnica e juridicamente adequada.',
    ],
    correta: 2,
    comentario:
      'Segundo a doutrina, a individualidade (que alguns autores chamam de princípio da interpretação) diz que dois objetos podem ser indistinguíveis, mas nunca idênticos. A é o princípio de Locard, chamado de troca, transferência ou observação conforme o autor. B é o princípio da análise, D o da documentação e E o da descrição. Os nomes variam, mas o conteúdo de cada princípio é o mesmo.',
    fundamento: 'Doutrina (Velho, Geiser & Espíndula, Ciências Forenses)',
  },

  /* ---------- crim-vestigios ---------- */
  {
    id: 'crim-vestigios-q01',
    temaId: 'crim-vestigios',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Nos termos do Código de Processo Penal, considera-se vestígio:',
    alternativas: [
      'a circunstância conhecida e provada que, tendo relação com o fato, autorize, por indução, concluir-se a existência de outra ou outras circunstâncias.',
      'o elemento que, depois da análise pericial, se mostrou efetivamente ligado ao fato investigado.',
      'o conjunto de procedimentos utilizados para manter e documentar a história cronológica do material coletado.',
      'todo objeto ou material bruto, visível ou latente, constatado ou recolhido, que se relaciona à infração penal.',
      'apenas o material biológico coletado em vítimas de crimes praticados com violência.',
    ],
    correta: 3,
    comentario:
      'A letra D reproduz o art. 158-A, § 3º, do CPP. A alternativa A é o conceito legal de indício (art. 239), B é o conceito doutrinário de evidência e C é a definição de cadeia de custódia (art. 158-A, caput). E restringe indevidamente um conceito que abrange qualquer objeto ou material, visível ou latente.',
    fundamento: 'CPP, arts. 158-A, caput e § 3º, e 239',
  },
  {
    id: 'crim-vestigios-q02',
    temaId: 'crim-vestigios',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Assinale a alternativa que apresenta etapas da cadeia de custódia na ordem em que aparecem no art. 158-B do Código de Processo Penal.',
    alternativas: [
      'Reconhecimento, fixação, isolamento e coleta.',
      'Isolamento, fixação, coleta e acondicionamento.',
      'Coleta, acondicionamento, recebimento e transporte.',
      'Transporte, processamento, recebimento e armazenamento.',
      'Processamento, armazenamento, recebimento e descarte.',
    ],
    correta: 1,
    comentario:
      'A ordem legal é: reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte. B traz as etapas II a V em sequência. A inverte isolamento e fixação; C e D trocam transporte, recebimento e processamento de lugar; E põe o recebimento depois do processamento.',
    fundamento: 'CPP, art. 158-B, I a X',
  },
  {
    id: 'crim-vestigios-q03',
    temaId: 'crim-vestigios',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'O ato formal de transferência da posse do vestígio, que deve ser documentado com, no mínimo, número de procedimento, local de origem, nome de quem transportou, código de rastreamento, natureza do exame, tipo do vestígio, protocolo, assinatura e identificação de quem o recebeu, corresponde, no art. 158-B do CPP, à etapa de:',
    alternativas: ['recebimento.', 'transporte.', 'acondicionamento.', 'armazenamento.', 'processamento.'],
    correta: 0,
    comentario:
      'É a definição de recebimento (art. 158-B, VII). O transporte (VI) é o deslocamento físico em condições adequadas; o acondicionamento (V) é a embalagem individualizada; o armazenamento (IX) é a guarda vinculada ao número do laudo; o processamento (VIII) é o exame pericial em si.',
    fundamento: 'CPP, art. 158-B, VII',
  },
  {
    id: 'crim-vestigios-q04',
    temaId: 'crim-vestigios',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Sobre a coleta, o acondicionamento e a guarda de vestígios (CPP, arts. 158-C a 158-F), assinale a alternativa correta.',
    alternativas: [
      'A coleta dos vestígios deve ser realizada exclusivamente por perito oficial.',
      'A gestão da central de custódia deve ser vinculada diretamente à autoridade policial que preside o inquérito.',
      'Após a perícia, o material deve ser entregue à autoridade policial, que o manterá junto aos autos do inquérito.',
      'O recipiente pode ser aberto por qualquer servidor do Instituto de Criminalística, desde que registre o ato no protocolo.',
      'Todos os recipientes devem ser selados com lacres de numeração individualizada, de forma a garantir a inviolabilidade e a idoneidade do vestígio durante o transporte.',
    ],
    correta: 4,
    comentario:
      'E reproduz o art. 158-D, § 1º. A coleta é feita preferencialmente, e não exclusivamente, por perito oficial (art. 158-C). A central de custódia se vincula ao órgão central de perícia oficial (art. 158-E). Depois da perícia, o material volta à central de custódia (art. 158-F). O recipiente só é aberto pelo perito que fará a análise ou, motivadamente, por pessoa autorizada (art. 158-D, § 3º).',
    fundamento: 'CPP, arts. 158-C a 158-F',
  },
  {
    id: 'crim-vestigios-q05',
    temaId: 'crim-vestigios',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado:
      'No exame de um local de homicídio, o perito encontra: (1) pegadas deixadas por um socorrista que atendeu a vítima; (2) uma arma colocada pelo autor na mão da vítima para simular suicídio; (3) manchas de sangue da vítima no piso, produzidas durante a agressão. Segundo a classificação doutrinária, esses vestígios são, respectivamente:',
    alternativas: [
      'verdadeiro, forjado e ilusório.',
      'forjado, ilusório e verdadeiro.',
      'ilusório, forjado e verdadeiro.',
      'ilusório, verdadeiro e forjado.',
      'verdadeiro, ilusório e forjado.',
    ],
    correta: 2,
    comentario:
      'Segundo a doutrina, vestígio ilusório não tem relação com o fato e foi produzido sem intenção de enganar, como as pegadas do socorrista. Forjado é produzido de propósito para iludir a investigação, como a arma plantada. Verdadeiro resulta do próprio fato, como o sangue derramado na agressão. As outras alternativas embaralham essas categorias.',
    fundamento: 'Doutrina (Velho, Geiser & Espíndula, Ciências Forenses)',
  },
  {
    id: 'crim-vestigios-q06',
    temaId: 'crim-vestigios',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Segundo o art. 158-A do Código de Processo Penal, a cadeia de custódia documenta a história cronológica do vestígio para rastrear sua posse e manuseio:',
    alternativas: [
      'da coleta pelo perito até a entrega do laudo à autoridade requisitante.',
      'a partir de seu reconhecimento até o descarte.',
      'do isolamento do local até o processamento do vestígio.',
      'da coleta até o armazenamento na central de custódia.',
      'do recebimento na central de custódia até o trânsito em julgado da sentença.',
    ],
    correta: 1,
    comentario:
      'O caput do art. 158-A fala em rastrear posse e manuseio “a partir de seu reconhecimento até o descarte”, que são a primeira e a última etapas do art. 158-B. As demais alternativas tomam etapas intermediárias (isolamento, coleta, recebimento, processamento, armazenamento) ou marcos processuais (laudo, trânsito em julgado) como início ou fim.',
    fundamento: 'CPP, arts. 158-A, caput, e 158-B, I e X',
  },
  {
    id: 'crim-vestigios-q07',
    temaId: 'crim-vestigios',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Rompido o lacre de um recipiente de vestígio, o lacre rompido deve ser acondicionado no interior do novo recipiente, e devem constar da ficha de acompanhamento de vestígio o nome e a matrícula do responsável, a data, o local, a finalidade e as informações referentes ao novo lacre.',
    gabaritoCE: true,
    comentario:
      'Certo. O item junta os §§ 4º e 5º do art. 158-D do CPP: cada rompimento é registrado na ficha de acompanhamento com esses dados, e o lacre rompido vai para dentro do novo recipiente, o que preserva o histórico da embalagem.',
    fundamento: 'CPP, art. 158-D, §§ 4º e 5º',
  },
  {
    id: 'crim-vestigios-q08',
    temaId: 'crim-vestigios',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Quando a infração deixar vestígios, a confissão do acusado poderá suprir o exame de corpo de delito, desde que corroborada por prova testemunhal.',
    gabaritoCE: false,
    comentario:
      'Errado. Pelo art. 158 do CPP, o exame de corpo de delito é indispensável, “não podendo supri-lo a confissão do acusado”. A prova testemunhal só supre a falta do exame quando os vestígios tiverem desaparecido (art. 167).',
    fundamento: 'CPP, arts. 158 e 167',
  },

  /* ---------- crim-balistica ---------- */
  {
    id: 'crim-balistica-q01',
    temaId: 'crim-balistica',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'O ramo da balística forense que estuda a trajetória do projétil desde a boca do cano até o alvo denomina-se balística:',
    alternativas: ['interna.', 'terminal.', 'externa.', 'de efeitos.', 'comparativa.'],
    correta: 2,
    comentario:
      'A balística externa começa quando o projétil deixa a boca do cano e vai até o alvo. A interna estuda o que ocorre dentro da arma. Terminal e de efeitos são nomes do mesmo ramo, que estuda o impacto no alvo. “Comparativa” não é um dos três ramos clássicos; o confronto de projéteis é técnica pericial.',
    fundamento: 'Doutrina (Tocchetto, Balística Forense)',
  },
  {
    id: 'crim-balistica-q02',
    temaId: 'crim-balistica',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado: 'Sobre o calibre das armas de fogo, assinale a alternativa correta.',
    alternativas: [
      'Nas armas de alma lisa, o calibre corresponde ao diâmetro do projétil expresso em milímetros.',
      'Uma espingarda calibre 20 tem cano de diâmetro maior que uma espingarda calibre 12.',
      'O calibre nominal de uma arma raiada sempre coincide com o diâmetro medido entre os cheios.',
      'O raiamento está presente nas armas de alma lisa, para conduzir os bagos de chumbo.',
      'Nas armas de alma lisa, o calibre é, em regra, expresso pelo número de esferas de chumbo, de diâmetro igual ao da alma, necessárias para perfazer uma libra-peso.',
    ],
    correta: 4,
    comentario:
      'Segundo a doutrina, nas armas de alma lisa o calibre é, em regra, o número de esferas de chumbo do diâmetro da alma que formam uma libra-peso (há exceções expressas em fração de polegada). Por isso, quanto maior o número, mais fino o cano, e o 12 é mais largo que o 20 (B errada). A erra o critério, C ignora que o calibre nominal é designação comercial e nem sempre coincide com a medida real, e D contradiz o próprio conceito de alma lisa.',
    fundamento: 'Doutrina (Tocchetto, Balística Forense)',
  },
  {
    id: 'crim-balistica-q03',
    temaId: 'crim-balistica',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'No confronto microbalístico, a conclusão de que determinado projétil foi disparado por certa arma apoia-se principalmente na:',
    alternativas: [
      'coincidência entre o calibre nominal do projétil e o da arma.',
      'coincidência do número e do sentido das raias.',
      'presença de chumbo, bário e antimônio na superfície do projétil.',
      'coincidência das microestrias individualizadoras produzidas pelo raiamento, observadas em microscópio comparador.',
      'igualdade entre a massa do projétil e a indicada pelo fabricante da munição.',
    ],
    correta: 3,
    comentario:
      'A identificação da arma depende das características individualizadoras: as microestrias que o raiamento grava no projétil, comparadas com padrões no microscópio comparador. Calibre e número e sentido das raias são características de classe: servem para excluir, não para identificar. Resíduos e massa do projétil não individualizam a arma.',
    fundamento: 'Doutrina (Tocchetto, Balística Forense)',
  },
  {
    id: 'crim-balistica-q04',
    temaId: 'crim-balistica',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    enunciado:
      'Ao examinar a vítima de um disparo de arma de fogo, o perito observa, ao redor do orifício de entrada, grãos de pólvora incrustados na pele, que não saem com a lavagem. Esse achado corresponde à zona de:',
    alternativas: ['tatuagem.', 'esfumaçamento.', 'enxugo.', 'contusão.', 'câmara de mina.'],
    correta: 0,
    comentario:
      'A tatuagem é formada por grãos de pólvora que se incrustam na pele e não saem com a lavagem. O esfumaçamento é fuligem depositada, que sai com a lavagem. Orla de enxugo e orla de contusão são efeitos do próprio projétil, presentes a qualquer distância. A câmara de mina é achado do tiro encostado sobre plano ósseo.',
    fundamento: 'Doutrina (Tocchetto, Balística Forense)',
  },
  {
    id: 'crim-balistica-q05',
    temaId: 'crim-balistica',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado: 'Sobre os resíduos de disparo de arma de fogo, assinale a alternativa correta.',
    alternativas: [
      'A presença de resíduos nas mãos de um suspeito prova, por si só, que ele efetuou o disparo.',
      'Partículas da mistura iniciadora, que nas munições convencionais costumam conter chumbo, bário e antimônio, podem ser identificadas por microscopia eletrônica de varredura com espectroscopia por dispersão de energia (MEV-EDS).',
      'Os testes colorimétricos têm valor confirmatório e dispensam outras análises.',
      'Os resíduos de disparo provêm exclusivamente do projétil, e não da espoleta.',
      'A ausência de resíduos nas mãos exclui que a pessoa tenha disparado arma de fogo.',
    ],
    correta: 1,
    comentario:
      'O MEV-EDS avalia morfologia e composição das partículas e é a técnica de referência; no local, a coleta se faz com stubs de fita de carbono (POP de Local de Crime, MJSP, 2024). Resíduo nas mãos indica contato com resíduo (disparo, proximidade ou superfície contaminada), não autoria (A errada). A ausência pode decorrer de lavagem, luvas ou do tempo decorrido (E errada). Testes colorimétricos são de orientação (C), e boa parte dos resíduos vem da espoleta (D).',
    fundamento: 'Doutrina (Tocchetto, Balística Forense; Velho, Geiser & Espíndula, Ciências Forenses); POP de Local de Crime, MJSP, 2024',
  },
  {
    id: 'crim-balistica-q06',
    temaId: 'crim-balistica',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Em um local de homicídio, a perícia encontra três estojos deflagrados no chão e nenhum projétil. Sobre esses vestígios, assinale a alternativa correta.',
    alternativas: [
      'Os estojos no chão indicam que a arma usada foi, provavelmente, um revólver, que ejeta o estojo a cada disparo.',
      'Os estojos não servem para identificar a arma, porque as marcas individualizadoras ficam apenas no projétil.',
      'No confronto, comparam-se as marcas deixadas no estojo pelo percussor, pela culatra, pelo extrator e pelo ejetor com as de estojos-padrão obtidos com a arma suspeita.',
      'A coincidência entre o calibre gravado no culote do estojo e o da arma apreendida basta para identificá-la.',
      'Os estojos não podem ser cadastrados no Banco Nacional de Perfis Balísticos, que armazena apenas dados de projéteis.',
    ],
    correta: 2,
    comentario:
      'O estojo recebe marcas individualizadoras do percussor, da culatra, do extrator e do ejetor, comparadas no microscópio comparador com padrões da arma suspeita. A erra: o revólver retém os estojos no tambor; quem os ejeta é a pistola. B ignora essas marcas. D confunde característica de classe (calibre) com individualizadora. E contraria o art. 34-A, § 1º, da Lei 10.826/2003, que inclui os estojos deflagrados.',
    fundamento: 'Doutrina (Tocchetto, Balística Forense); Lei 10.826/2003, art. 34-A, § 1º',
  },
  {
    id: 'crim-balistica-q07',
    temaId: 'crim-balistica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Se um projétil apresenta número e sentido de raias idênticos aos do cano da arma apreendida, a perícia pode concluir, apenas com base nesses dados, que o projétil foi disparado por essa arma.',
    gabaritoCE: false,
    comentario:
      'Errado. Número e sentido das raias são características de classe, compartilhadas por muitas armas do mesmo modelo. A coincidência apenas mantém a arma como possível fonte. A identificação exige o confronto das microestrias individualizadoras.',
    fundamento: 'Doutrina (Tocchetto, Balística Forense)',
  },
  {
    id: 'crim-balistica-q08',
    temaId: 'crim-balistica',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado: 'Conforme o art. 34-A do Estatuto do Desarmamento, incluído pela Lei 13.964/2019, o Banco Nacional de Perfis Balísticos:',
    alternativas: [
      'tem dados públicos, para permitir o controle social das investigações.',
      'armazena apenas características de classe, porque as individualizadoras ficam registradas somente nos laudos.',
      'pode ter sua base de dados comercializada parcialmente a instituições de pesquisa credenciadas.',
      'é gerido pela autoridade policial que presidir o inquérito em que o projétil foi apreendido.',
      'é gerido pela unidade oficial de perícia criminal, e seus dados têm caráter sigiloso.',
    ],
    correta: 4,
    comentario:
      'E junta os §§ 3º e 4º do art. 34-A. A contraria o § 4º (dados sigilosos). B contraria o § 1º, que manda armazenar características de classe e individualizadoras de projéteis e estojos. C contraria o § 5º, que veda a comercialização total ou parcial. D contraria o § 3º: a gestão é da perícia oficial, e não da autoridade policial.',
    fundamento: 'Lei 10.826/2003, art. 34-A, §§ 1º, 3º, 4º e 5º',
  },
];
