import type { QuestaoTreino } from '../../../types';

/* ------------------------------------------------------------------
 * Papiloscopia e genética forense
 * ------------------------------------------------------------------ */

export const QUESTOES_2: QuestaoTreino[] = [
  /* ---------- crim-papiloscopia ---------- */
  {
    id: 'crim-papiloscopia-q01',
    temaId: 'crim-papiloscopia',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'No sistema datiloscópico de Vucetich, o datilograma que não apresenta delta é denominado:',
    alternativas: ['verticilo.', 'arco.', 'presilha interna.', 'presilha externa.', 'ilhota.'],
    correta: 1,
    comentario:
      'O arco é o único tipo fundamental sem delta. As presilhas têm um delta (à direita do observador na interna, à esquerda na externa) e o verticilo tem dois. Ilhota não é tipo fundamental: é um ponto característico (minúcia).',
    fundamento: 'Doutrina (Velho, Geiser & Espíndula, Ciências Forenses); POP de Papiloscopia, MJSP, 2024',
  },
  {
    id: 'crim-papiloscopia-q02',
    temaId: 'crim-papiloscopia',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'O princípio segundo o qual os desenhos papilares não se repetem, nem entre os dedos de uma mesma pessoa nem entre gêmeos univitelinos, é o da:',
    alternativas: ['perenidade.', 'imutabilidade.', 'classificabilidade.', 'variabilidade.', 'praticabilidade.'],
    correta: 3,
    comentario:
      'Variabilidade é a ausência de dois desenhos iguais. Perenidade é a permanência da vida intrauterina até a decomposição; imutabilidade é a manutenção da forma ao longo da vida; classificabilidade é a possibilidade de classificar e arquivar; praticabilidade é a facilidade e o baixo custo da coleta.',
    fundamento: 'Doutrina (Velho, Geiser & Espíndula, Ciências Forenses)',
  },
  {
    id: 'crim-papiloscopia-q03',
    temaId: 'crim-papiloscopia',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Na fórmula datiloscópica de Vucetich, uma presilha interna no polegar e uma presilha interna no indicador são representadas, respectivamente, por:',
    alternativas: ['I e 2.', 'E e 3.', 'I e 3.', 'E e 2.', '2 e I.'],
    correta: 0,
    comentario:
      'Polegares recebem letra e os demais dedos, número: arco A/1, presilha interna I/2, presilha externa E/3, verticilo V/4. Presilha interna é I no polegar e 2 no indicador. E e 3 correspondem à presilha externa, e a última alternativa inverte letra e número.',
    fundamento: 'Doutrina (Velho, Geiser & Espíndula, Ciências Forenses)',
  },
  {
    id: 'crim-papiloscopia-q04',
    temaId: 'crim-papiloscopia',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Uma carta em papel comum, apreendida em local de crime, será examinada em busca de impressões papilares latentes. Considerando a natureza da superfície, é técnica adequada a:',
    alternativas: [
      'fumigação com cianoacrilato, que é de uso exclusivo em superfícies porosas.',
      'aplicação de pó magnético, que é indicada exclusivamente para papel.',
      'aplicação de ninidrina, que reage com aminoácidos presentes no suor.',
      'lavagem prévia da superfície com água, para remover a sujidade antes de qualquer revelação.',
      'aplicação de luminol, que é o reagente padrão para revelar latentes em papel.',
    ],
    correta: 2,
    comentario:
      'O papel é superfície porosa, e o POP de Papiloscopia do MJSP (2024) indica para ela iodo, ninidrina, DFO, nitrato de prata, revelador físico e pós. A ninidrina reage com os aminoácidos do suor. A erra porque o cianoacrilato é indicado para superfícies não porosas; B, porque o pó não é exclusivo de papel (serve também para vidro e plástico); D, porque lavar destruiria a latente; E, porque o luminol é teste de orientação para sangue.',
    fundamento: 'POP de Papiloscopia, MJSP, 2024',
  },
  {
    id: 'crim-papiloscopia-q05',
    temaId: 'crim-papiloscopia',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado:
      'Um datilograma colhido do dedo médio da mão esquerda apresenta um único delta, situado à direita do observador, e laçadas voltadas para a esquerda do observador. Pelo sistema de Vucetich, sua classificação e seu símbolo são:',
    alternativas: ['presilha externa, 3.', 'presilha externa, E.', 'presilha interna, I.', 'verticilo, 4.', 'presilha interna, 2.'],
    correta: 4,
    comentario:
      'Um delta indica presilha; com o delta à direita do observador, é presilha interna. Como não é polegar, o símbolo é numérico: 2. A letra I seria usada no polegar. Presilha externa tem o delta à esquerda do observador, e verticilo tem dois deltas.',
    fundamento: 'Doutrina (Velho, Geiser & Espíndula, Ciências Forenses)',
  },
  {
    id: 'crim-papiloscopia-q06',
    temaId: 'crim-papiloscopia',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Em um arrombamento, o perito encontra, na massa de vidraceiro ainda fresca de uma janela, a reprodução em relevo das cristas papilares de um dedo. Quanto à forma como foi produzida, essa impressão é classificada, segundo a doutrina, como:',
    alternativas: ['latente.', 'moldada.', 'visível.', 'padrão.', 'poroscópica.'],
    correta: 1,
    comentario:
      'Segundo a doutrina, a impressão moldada (ou plástica) fica gravada em relevo em material maleável, como massa, cera ou sabão. A latente é invisível a olho nu e precisa ser revelada; a visível é deixada por dedo sujo de sangue, tinta ou graxa. “Padrão” é a impressão colhida da pessoa para confronto, e não um vestígio de local; poroscopia é o estudo dos poros, não um tipo de impressão.',
    fundamento: 'Doutrina (Velho, Geiser & Espíndula, Ciências Forenses)',
  },
  {
    id: 'crim-papiloscopia-q07',
    temaId: 'crim-papiloscopia',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'De acordo com a Lei 12.037/2009, a identificação criminal incluirá o processo datiloscópico e o fotográfico, que serão juntados aos autos da comunicação da prisão em flagrante, do inquérito policial ou de outra forma de investigação.',
    gabaritoCE: true,
    comentario:
      'Certo. O item reproduz o caput do art. 5º da Lei 12.037/2009. Lembre que o civilmente identificado só passa pela identificação criminal nas hipóteses da própria lei (art. 1º).',
    fundamento: 'Lei 12.037/2009, art. 5º, caput',
  },
  {
    id: 'crim-papiloscopia-q08',
    temaId: 'crim-papiloscopia',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado:
      'Na individual datiloscópica de uma pessoa, foram classificados os seguintes tipos:\n\nMão direita: polegar, verticilo; indicador, presilha interna; médio, arco; anular, verticilo; mínimo, presilha externa.\nMão esquerda: polegar, presilha externa; indicador, presilha interna; médio, presilha interna; anular, verticilo; mínimo, presilha interna.\n\nPelo sistema de Vucetich, a fórmula datiloscópica é:',
    alternativas: ['V-2143 / E-2242', 'E-2242 / V-2143', '4-2143 / 3-2242', 'V-3142 / I-3343', 'V-2143 / I-2242'],
    correta: 0,
    comentario:
      'No numerador vai a série (mão direita) e no denominador a seção (mão esquerda), sempre com o polegar primeiro, em letra, e os demais dedos em número: A/1, I/2, E/3, V/4. Direita: V, 2, 1, 4, 3. Esquerda: E, 2, 2, 4, 2. B inverte as mãos; C usa número no polegar; D troca presilha interna por externa; E registra o polegar esquerdo como presilha interna.',
    fundamento: 'Doutrina (Velho, Geiser & Espíndula, Ciências Forenses)',
  },

  /* ---------- crim-genetica ---------- */
  {
    id: 'crim-genetica-q01',
    temaId: 'crim-genetica',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'Em um local de crime, os únicos vestígios biológicos são fios de cabelo sem bulbo. A análise genética mais indicada nesse caso, cujo resultado aponta a linhagem materna, é a do DNA:',
    alternativas: [
      'nuclear autossômico, por STR.',
      'do cromossomo Y, por Y-STR.',
      'do cromossomo X, por STR.',
      'nuclear, apenas pelo marcador amelogenina.',
      'mitocondrial.',
    ],
    correta: 4,
    comentario:
      'O pelo sem bulbo tem pouco ou nenhum DNA nuclear, mas conserva DNA mitocondrial, que tem muitas cópias por célula e herança materna. O POP de Genética Forense do MJSP (2024) recomenda essa metodologia para pelos sem bulbo. O STR autossômico precisa de DNA nuclear, o Y-STR aponta a linhagem paterna e a amelogenina indica apenas o sexo.',
    fundamento: 'POP de Genética Forense, MJSP, 2024; doutrina (Velho, Geiser & Espíndula, Ciências Forenses)',
  },
  {
    id: 'crim-genetica-q02',
    temaId: 'crim-genetica',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo sobre os bancos de dados de perfis genéticos, conforme o art. 5º-A da Lei 12.037/2009:\n\nI. As informações genéticas não poderão revelar traços somáticos ou comportamentais das pessoas, exceto determinação genética de gênero.\nII. Os dados constantes dos bancos de perfis genéticos terão caráter sigiloso.\nIII. O banco será gerenciado pela autoridade policial que presidiu o inquérito em que houve a coleta.\nIV. As informações obtidas a partir da coincidência de perfis genéticos deverão ser consignadas em laudo pericial firmado por perito oficial devidamente habilitado.\n\nQuais estão corretas?',
    alternativas: ['Apenas I, II e IV.', 'Apenas I e II.', 'Apenas II, III e IV.', 'Apenas I e IV.', 'I, II, III e IV.'],
    correta: 0,
    comentario:
      'I, II e IV reproduzem os §§ 1º, 2º e 3º do art. 5º-A. A III está errada: pelo caput, o banco é gerenciado por unidade oficial de perícia criminal, e não pela autoridade policial.',
    fundamento: 'Lei 12.037/2009, art. 5º-A, caput e §§ 1º a 3º',
  },
  {
    id: 'crim-genetica-q03',
    temaId: 'crim-genetica',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'No exame de um vestígio, o perfil genético obtido mostra três alelos distintos em vários marcadores STR autossômicos. A interpretação mais adequada é:',
    alternativas: [
      'o doador tem trissomia em todos os cromossomos analisados.',
      'há indicação de mistura de material genético de duas ou mais pessoas.',
      'o material pertence a um homem, pois só homens apresentam três alelos.',
      'houve degradação da amostra, que sempre gera alelos adicionais.',
      'o perfil é de gêmeos univitelinos.',
    ],
    correta: 1,
    comentario:
      'Cada pessoa tem até dois alelos por marcador autossômico, um materno e um paterno. O POP de Genética Forense do MJSP (2024) aponta três ou mais alelos em um ou mais marcadores como parâmetro de mistura. Trissomia em todos os cromossomos não explica o achado (A); o sexo não muda o número de alelos autossômicos (C); a degradação pode gerar artefatos, mas não “sempre” alelos extras, e costuma causar perda de alelos (D); gêmeos univitelinos têm um único perfil, igual entre si (E).',
    fundamento: 'POP de Genética Forense, MJSP, 2024',
  },
  {
    id: 'crim-genetica-q04',
    temaId: 'crim-genetica',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 3,
    enunciado:
      'Pela redação vigente do art. 9º-A da Lei de Execução Penal, será submetido obrigatoriamente à identificação do perfil genético, por ocasião do ingresso no estabelecimento prisional, o condenado:',
    alternativas: [
      'por qualquer crime doloso, independentemente da pena aplicada.',
      'por crime hediondo, somente após o trânsito em julgado e mediante autorização judicial específica.',
      'exclusivamente por crime doloso praticado com violência grave contra a pessoa, crime contra a vida, contra a liberdade sexual ou crime sexual contra vulnerável.',
      'à pena de reclusão em regime inicial fechado.',
      'à pena de detenção em regime semiaberto, se reincidente.',
    ],
    correta: 3,
    comentario:
      'Desde a Lei 15.295/2025, o art. 9º-A da LEP alcança o condenado à pena de reclusão em regime inicial fechado. A alternativa C reproduz a redação anterior, dada pela Lei 13.964/2019, e por isso cai muito em material desatualizado. As demais não têm base no texto legal.',
    fundamento: 'Lei 7.210/1984 (LEP), art. 9º-A, caput, com redação da Lei 15.295/2025',
  },
  {
    id: 'crim-genetica-q05',
    temaId: 'crim-genetica',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Sobre a coleta e a preservação de vestígios biológicos para exame de DNA, assinale a alternativa correta.',
    alternativas: [
      'As mesmas luvas podem ser usadas durante toda a coleta, desde que sejam estéreis.',
      'Vestígios de origens diferentes devem ser reunidos na mesma embalagem, para preservar o contexto do local.',
      'O material biológico úmido deve, em regra, secar ao ar e longe do sol antes de ser embalado, pois a umidade em embalagem fechada favorece a degradação.',
      'O exame dispensa cuidados contra contaminação, porque a PCR distingue automaticamente o DNA de quem fez a coleta.',
      'Manchas em tecido só podem ser coletadas por raspagem com bisturi, sendo vedado o recorte do fragmento.',
    ],
    correta: 2,
    comentario:
      'O POP de Genética Forense do MJSP (2024) manda deixar os swabs secarem naturalmente, à temperatura ambiente e protegidos da luz solar, antes de acondicioná-los, e evitar umidade e calor; o POP de Local de Crime manda secar as vestes em varais. O mesmo POP de Genética manda manusear cada vestígio individualmente, trocando as luvas a cada manipulação (A e B erradas). A PCR amplifica qualquer DNA presente, inclusive o do coletor (D). Em tecido, admitem-se swab úmido ou recorte (E).',
    fundamento: 'POPs de Genética Forense e de Local de Crime, MJSP, 2024',
  },
  {
    id: 'crim-genetica-q06',
    temaId: 'crim-genetica',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Dois irmãos gêmeos univitelinos são suspeitos de um crime, e o perfil genético do vestígio coincide com o de ambos. Entre os exames de rotina abaixo, qual permite distinguir um irmão do outro?',
    alternativas: [
      'STR autossômico com maior número de marcadores.',
      'DNA mitocondrial.',
      'Y-STR.',
      'Confronto de impressões papilares.',
      'Amelogenina.',
    ],
    correta: 3,
    comentario:
      'Gêmeos univitelinos vêm do mesmo zigoto e têm o mesmo perfil STR, mas, pelo princípio da variabilidade, suas impressões papilares são diferentes. Aumentar o número de STR não resolve (A). O mtDNA é o mesmo para toda a linhagem materna (B) e o Y-STR para toda a linhagem paterna (C). A amelogenina só indica o sexo, igual nos dois (E).',
    fundamento: 'Doutrina (Velho, Geiser & Espíndula, Ciências Forenses)',
  },
  {
    id: 'crim-genetica-q07',
    temaId: 'crim-genetica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Segundo a Lei 12.037/2009, o perfil genético incluído no banco de dados será excluído somente ao término do prazo estabelecido em lei para a prescrição do delito.',
    gabaritoCE: false,
    comentario:
      'Errado. Essa era a redação original do art. 7º-A, dada pela Lei 12.654/2012. Desde a Lei 13.964/2019, a exclusão ocorre na absolvição do acusado ou, em caso de condenação, a requerimento, depois de 20 anos do cumprimento da pena.',
    fundamento: 'Lei 12.037/2009, art. 7º-A, I e II',
  },
  {
    id: 'crim-genetica-q08',
    temaId: 'crim-genetica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'Constitui falta grave a recusa do condenado em submeter-se ao procedimento de identificação do perfil genético.',
    gabaritoCE: true,
    comentario:
      'Certo. É o texto do art. 9º-A, § 8º, da LEP, incluído pela Lei 13.964/2019 e não alterado pela Lei 15.295/2025. A mesma lei de 2019 incluiu a conduta no rol de faltas graves do art. 50 (inciso VIII).',
    fundamento: 'Lei 7.210/1984 (LEP), arts. 9º-A, § 8º, e 50, VIII',
  },
];
