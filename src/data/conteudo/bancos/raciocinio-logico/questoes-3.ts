import type { QuestaoTreino } from '../../../types';

/** Questões autorais: associação lógica, conjuntos, raciocínio científico e mistas (rlm). */
export const QUESTOES_3: QuestaoTreino[] = [
  /* ---------- rl-associacao ---------- */
  {
    id: 'rl-associacao-q01',
    temaId: 'rl-associacao',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Lia, Mara e Nina são peritas e trabalham em cidades diferentes — Pelotas, Santa Maria e Caxias do Sul —, cada uma com um carro de cor diferente: branco, preto ou prata. Sabe-se que:\n• a dona do carro branco trabalha em Pelotas;\n• Mara trabalha em Caxias do Sul;\n• Nina não tem carro preto e não trabalha em Pelotas.\nÉ correto afirmar que',
    alternativas: [
      'Mara tem carro prata.',
      'Nina trabalha em Santa Maria e tem carro prata.',
      'Lia trabalha em Caxias do Sul.',
      'a dona do carro preto trabalha em Pelotas.',
      'Nina tem carro branco.',
    ],
    correta: 1,
    comentario:
      'Mara = Caxias do Sul. Nina não trabalha em Pelotas, então Nina = Santa Maria e Lia = Pelotas. A dona do carro branco trabalha em Pelotas: Lia = branco. Nina não tem preto, logo Nina = prata, e Mara = preto. Só B confere; A, C, D e E contrariam essa solução, que é única.',
  },
  {
    id: 'rl-associacao-q02',
    temaId: 'rl-associacao',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado:
      'Um equipamento do laboratório foi danificado, e sabe-se que exatamente um entre André, Bruno e Carlos o danificou. Questionados, disseram:\nAndré: “Foi o Bruno.”\nBruno: “Eu não fui.”\nCarlos: “Eu não fui.”\nSabendo que apenas um dos três disse a verdade, conclui-se que',
    alternativas: [
      'André danificou o equipamento, e Bruno disse a verdade.',
      'Bruno danificou o equipamento, e André disse a verdade.',
      'Carlos danificou o equipamento e disse a verdade.',
      'Carlos danificou o equipamento, e Bruno disse a verdade.',
      'Bruno danificou o equipamento, e Carlos disse a verdade.',
    ],
    correta: 3,
    comentario:
      'Teste cada culpado. Se foi André: Bruno e Carlos dizem a verdade (2 verdades) — descartado. Se foi Bruno: André e Carlos dizem a verdade (2) — descartado. Se foi Carlos: André mente, Bruno diz a verdade e Carlos mente (1 verdade) — confere. Culpado: Carlos; único sincero: Bruno.',
  },
  {
    id: 'rl-associacao-q03',
    temaId: 'rl-associacao',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Cinco pacientes — P, Q, R, S e T — aguardam em uma fila única, um atrás do outro. Sabe-se que:\n• T é o último da fila;\n• R está imediatamente atrás de P;\n• Q está à frente de P;\n• S não é o primeiro da fila;\n• P e S não ocupam posições vizinhas.\nAssinalar a alternativa que indica quem ocupa a 3ª posição da fila.',
    alternativas: ['P', 'Q', 'R', 'S', 'T'],
    correta: 2,
    comentario:
      'T = 5º. Como R vem logo atrás de P e Q está à frente de P, P não pode ser 1º nem 4º. Se P fosse 3º, R seria 4º, e Q e S ocupariam 1º e 2º; como S não é o primeiro, S seria 2º, vizinho de P — proibido. Logo, P = 2º, R = 3º, Q = 1º e S = 4º. A 3ª posição é de R.',
  },
  {
    id: 'rl-associacao-q04',
    temaId: 'rl-associacao',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Em um grupo, cada pessoa ou sempre diz a verdade ou sempre mente. Ana afirma: “Bia e eu somos mentirosas.” Conclui-se que',
    alternativas: [
      'Ana e Bia sempre dizem a verdade.',
      'Ana mente e Bia diz a verdade.',
      'Ana diz a verdade e Bia mente.',
      'Ana e Bia mentem.',
      'Ana mente, mas não é possível saber se Bia mente.',
    ],
    correta: 1,
    comentario:
      'Se Ana dissesse a verdade, ela seria mentirosa — absurdo; logo, Ana mente. Então a frase “Bia e eu somos mentirosas” é falsa, isto é, NÃO são as duas mentirosas. Como Ana é, Bia tem de dizer a verdade. E erra: o tipo de Bia fica determinado pela falsidade da conjunção.',
  },
  {
    id: 'rl-associacao-q05',
    temaId: 'rl-associacao',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Davi, Elisa, Fábio e Gil fazem plantão, cada um em um dia diferente, de segunda a quinta-feira. Sabe-se que:\n• Elisa dá plantão em algum dia depois de Fábio;\n• Gil dá plantão na quarta-feira;\n• Davi não dá plantão na segunda-feira nem na quinta-feira.\nÉ correto afirmar que',
    alternativas: [
      'Fábio dá plantão na terça-feira.',
      'Davi dá plantão na quarta-feira.',
      'Elisa dá plantão na segunda-feira.',
      'Elisa dá plantão na quinta-feira.',
      'Gil dá plantão no dia seguinte ao de Elisa.',
    ],
    correta: 3,
    comentario:
      'Davi só pode ficar com terça ou quarta; como quarta é de Gil, Davi = terça. Sobram segunda e quinta para Elisa e Fábio; como Elisa vem depois de Fábio, Fábio = segunda e Elisa = quinta. A, B e C contrariam essa distribuição; em E, Gil (quarta) vem antes de Elisa (quinta).',
  },
  {
    id: 'rl-associacao-q06',
    temaId: 'rl-associacao',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Um entre quatro amigos — Ari, Beto, Caio e Davi — quebrou um aparelho. Cada um fez uma afirmação:\nAri: “Foi o Beto.”\nBeto: “Foi o Davi.”\nCaio: “Não fui eu.”\nDavi: “O Beto está mentindo.”\nSabendo que apenas um deles mente, é correto afirmar que',
    alternativas: [
      'Beto quebrou o aparelho, e o mentiroso é Beto.',
      'Davi quebrou o aparelho, e o mentiroso é Davi.',
      'Beto quebrou o aparelho, e o mentiroso é Davi.',
      'Davi quebrou o aparelho, e o mentiroso é Ari.',
      'Caio quebrou o aparelho, e o mentiroso é Caio.',
    ],
    correta: 0,
    comentario:
      'Beto e Davi se contradizem (Davi diz que Beto mente), então exatamente um dos dois mente. Como há só um mentiroso, Ari e Caio dizem a verdade: foi o Beto. Então “Foi o Davi” é falso — o mentiroso é Beto — e Davi diz a verdade. Conferindo: uma única mentira. C acerta o culpado, mas erra o mentiroso (com Beto culpado, Davi fala a verdade). B, D e E geram dois ou mais mentirosos.',
  },
  {
    id: 'rl-associacao-q07',
    temaId: 'rl-associacao',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'Hugo, Íris e Júlio são médicos de especialidades diferentes — legista, psiquiatra e ortopedista — e têm idades diferentes: 30, 40 e 50 anos. Sabe-se que:\n• Íris tem 50 anos;\n• o psiquiatra é o mais novo dos três;\n• o legista é mais velho que Hugo;\n• nem Hugo nem Júlio são ortopedistas.\nPode-se afirmar que',
    alternativas: [
      'Júlio tem 30 anos.',
      'Íris é legista.',
      'Hugo tem 40 anos.',
      'o ortopedista tem 40 anos.',
      'Júlio é legista e tem 40 anos.',
    ],
    correta: 4,
    comentario:
      'Se nem Hugo nem Júlio são ortopedistas, Íris é a ortopedista (50 anos). O legista é mais velho que Hugo, então Hugo não é o legista: Hugo é o psiquiatra e, portanto, o mais novo (30). Júlio é o legista, com 40 anos. A, B, C e D contrariam essa solução.',
  },
  {
    id: 'rl-associacao-q08',
    temaId: 'rl-associacao',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Três caixas fechadas têm os rótulos “Luvas”, “Máscaras” e “Luvas e máscaras”. Uma delas contém só luvas, outra só máscaras e outra, luvas e máscaras, mas TODOS os rótulos estão errados (nenhuma caixa tem o rótulo correspondente ao seu conteúdo). Retirou-se um único item da caixa rotulada “Luvas e máscaras”, e ele era uma máscara. Com isso, é correto afirmar que',
    alternativas: [
      'a caixa rotulada “Máscaras” contém só máscaras.',
      'a caixa rotulada “Luvas” contém luvas e máscaras.',
      'a caixa rotulada “Luvas” contém só máscaras.',
      'a caixa rotulada “Luvas e máscaras” contém só luvas.',
      'a caixa rotulada “Máscaras” contém luvas e máscaras.',
    ],
    correta: 1,
    comentario:
      'A caixa rotulada “Luvas e máscaras” não pode ter a mistura (rótulo errado); como saiu uma máscara, ela tem só máscaras. Restam “só luvas” e “mistura” para as caixas rotuladas “Luvas” e “Máscaras”. A rotulada “Luvas” não pode ter só luvas: tem a mistura. A rotulada “Máscaras” tem só luvas.',
  },
  {
    id: 'rl-associacao-q09',
    temaId: 'rl-associacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Cada uma de três pessoas — X, Y e Z — sempre diz a verdade ou sempre mente. X afirma: “Y mente”; Y afirma: “Z mente”; Z afirma: “X e Y mentem”. Nessa situação, Y é o único dos três que diz a verdade.',
    gabaritoCE: true,
    comentario:
      'Certo. Se Y diz a verdade, Z mente; X, que disse “Y mente”, também mente; e a fala de Z (“X e Y mentem”) é falsa, pois Y não mente — coerente com Z mentiroso. Se Y mentisse, X diria a verdade, e Z também (pois “Z mente” seria falso); mas então “X e Y mentem” seria falso, contradição. Só a primeira situação é possível.',
  },

  /* ---------- rl-conjuntos ---------- */
  {
    id: 'rl-conjuntos-q01',
    temaId: 'rl-conjuntos',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'Em um órgão com 120 servidores, 70 fizeram o curso de primeiros socorros, 50 fizeram o curso de prevenção de incêndio e 20 fizeram os dois cursos. Quantos servidores não fizeram nenhum dos dois cursos?',
    alternativas: ['20', '0', '40', '30', '10'],
    correta: 0,
    comentario:
      'n(A ∪ B) = 70 + 50 − 20 = 100 servidores fizeram pelo menos um curso. Não fizeram nenhum: 120 − 100 = 20. Quem responde 0 soma 70 + 50 = 120 sem descontar os 20 que fizeram os dois cursos, contando-os duas vezes.',
    verificar: () => 120 - (70 + 50 - 20),
  },
  {
    id: 'rl-conjuntos-q02',
    temaId: 'rl-conjuntos',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Em uma pesquisa com 200 médicos sobre o uso de três plataformas de estudo (A, B e C), obteve-se: 90 usam A, 80 usam B, 70 usam C, 30 usam A e B, 25 usam A e C, 20 usam B e C e 10 usam as três. Quantos médicos não usam nenhuma das três plataformas?',
    alternativas: ['15', '35', '20', '30', '25'],
    correta: 4,
    comentario:
      'Pela inclusão-exclusão: n(A ∪ B ∪ C) = 90 + 80 + 70 − 30 − 25 − 20 + 10 = 175. Não usam nenhuma: 200 − 175 = 25. Esquecer de somar de volta a interseção tripla dá 165 na união e 35 na resposta.',
    verificar: () => 200 - (90 + 80 + 70 - 30 - 25 - 20 + 10),
  },
  {
    id: 'rl-conjuntos-q03',
    temaId: 'rl-conjuntos',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 3,
    enunciado:
      'Os 100 alunos de um cursinho estudaram pelo menos uma destas disciplinas: Português, Matemática e Informática. Sabe-se que 60 estudaram Português, 50 Matemática e 40 Informática; 25 estudaram Português e Matemática; 20, Português e Informática; 15, Matemática e Informática; e 10 estudaram as três. Quantos alunos estudaram exatamente uma disciplina?',
    alternativas: ['45', '50', '70', '60', '30'],
    correta: 3,
    comentario:
      'De dentro para fora: centro = 10; só P e M = 15; só P e I = 10; só M e I = 5. Só P = 60 − 15 − 10 − 10 = 25; só M = 50 − 15 − 5 − 10 = 20; só I = 40 − 10 − 5 − 10 = 15. Exatamente uma: 25 + 20 + 15 = 60. Conferência: 60 + 30 + 10 = 100. A alternativa 30 é o número dos que estudaram exatamente duas.',
    verificar: () => {
      const tres = 10;
      const pm = 25 - tres;
      const pi = 20 - tres;
      const mi = 15 - tres;
      return 60 - pm - pi - tres + (50 - pm - mi - tres) + (40 - pi - mi - tres);
    },
  },
  {
    id: 'rl-conjuntos-q04',
    temaId: 'rl-conjuntos',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 1,
    enunciado: 'Dados os conjuntos A = {1, 2, 3, 4, 5} e B = {4, 5, 6, 7}, o conjunto A − B é:',
    alternativas: ['{4, 5}', '{6, 7}', '{1, 2, 3}', '{1, 2, 3, 6, 7}', '{1, 2, 3, 4, 5, 6, 7}'],
    correta: 2,
    comentario:
      'A − B reúne os elementos que estão em A e NÃO estão em B: retirando 4 e 5 de A, sobra {1, 2, 3}. {4, 5} é A ∩ B; {6, 7} é B − A; {1, 2, 3, 6, 7} é a diferença simétrica; e a última alternativa é A ∪ B.',
    verificar: () => '{' + [1, 2, 3, 4, 5].filter((x) => ![4, 5, 6, 7].includes(x)).join(', ') + '}',
  },
  {
    id: 'rl-conjuntos-q05',
    temaId: 'rl-conjuntos',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Um conjunto A tem 5 elementos. O número de subconjuntos de A, incluindo o conjunto vazio e o próprio A, é:',
    alternativas: ['25', '10', '31', '16', '32'],
    correta: 4,
    comentario:
      'Cada elemento pode estar ou não em um subconjunto: 2 possibilidades para cada um dos 5 elementos, ou seja, 2⁵ = 32 subconjuntos. 31 seria o número de subconjuntos não vazios; 25 = 5² e 10 vêm de fórmulas erradas; 16 = 2⁴ corresponderia a 4 elementos.',
    verificar: () => 2 ** 5,
  },
  {
    id: 'rl-conjuntos-q06',
    temaId: 'rl-conjuntos',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Em um ambulatório, 50 pacientes foram avaliados: 28 são hipertensos, 20 são diabéticos e 12 não têm nenhuma das duas condições. Quantos pacientes são apenas hipertensos?',
    alternativas: ['10', '16', '28', '18', '8'],
    correta: 3,
    comentario:
      'Têm pelo menos uma condição: 50 − 12 = 38. Interseção: 28 + 20 − 38 = 10 pacientes com as duas. Apenas hipertensos: 28 − 10 = 18. A alternativa 10 é a interseção (e também o número de apenas diabéticos); 28 inclui os hipertensos que também são diabéticos.',
    verificar: () => 28 - (28 + 20 - (50 - 12)),
  },
  {
    id: 'rl-conjuntos-q07',
    temaId: 'rl-conjuntos',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado:
      'Em um grupo de 40 peritos, 25 leem textos técnicos em inglês e 30 leem textos técnicos em espanhol. O número MÍNIMO de peritos desse grupo que leem nos dois idiomas é:',
    alternativas: ['10', '5', '15', '25', '20'],
    correta: 2,
    comentario:
      'Como n(I ∪ E) não pode passar de 40, n(I ∩ E) = 25 + 30 − n(I ∪ E) ≥ 25 + 30 − 40 = 15. O mínimo, 15, ocorre quando todos os 40 leem pelo menos um idioma. O máximo seria 25 (todos os que leem inglês também leem espanhol).',
    verificar: () => Math.max(0, 25 + 30 - 40),
  },
  {
    id: 'rl-conjuntos-q08',
    temaId: 'rl-conjuntos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'Se A = {x ∈ ℕ | x < 5} e B = {2, 4, 6}, então o conjunto A ∩ B possui exatamente 2 elementos.',
    gabaritoCE: true,
    comentario:
      'Certo. A = {0, 1, 2, 3, 4} (ou {1, 2, 3, 4}, se a convenção adotada excluir o zero de ℕ). A convenção não altera a resposta, pois 0 não pertence a B: os elementos comuns são 2 e 4, e A ∩ B = {2, 4} tem 2 elementos. O 6 não pertence a A, pois não é menor que 5.',
  },
  {
    id: 'rl-conjuntos-q09',
    temaId: 'rl-conjuntos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Em uma turma de 60 alunos, 35 gostam de Lógica, 30 gostam de Português e 10 não gostam de nenhuma dessas duas disciplinas. Nesse caso, 20 alunos gostam de ambas.',
    gabaritoCE: false,
    comentario:
      'Errado. Gostam de pelo menos uma: 60 − 10 = 50. Pela fórmula da união, n(L ∩ P) = 35 + 30 − 50 = 15. Portanto, 15 alunos gostam das duas disciplinas, e não 20.',
  },

  /* ---------- rl-cientifico ---------- */
  {
    id: 'rl-cientifico-q01',
    temaId: 'rl-cientifico',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'No método científico, a explicação provisória, testável e passível de refutação, formulada para responder a um problema de pesquisa, denomina-se',
    alternativas: ['hipótese.', 'lei científica.', 'teoria científica.', 'variável dependente.', 'axioma.'],
    correta: 0,
    comentario:
      'Hipótese é a resposta provisória a um problema, da qual se deduzem previsões testáveis. Lei descreve uma regularidade observada; teoria é um sistema explicativo amplo e bem corroborado; variável dependente é o efeito medido; axioma é uma premissa aceita sem demonstração (típica da matemática), e não algo a testar.',
  },
  {
    id: 'rl-cientifico-q02',
    temaId: 'rl-cientifico',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Em um estudo experimental com modelos de laboratório, pesquisadores avaliaram se a temperatura ambiente altera a velocidade de resfriamento corporal post mortem, mantendo constantes a massa e a vestimenta dos modelos. Nesse estudo, a variável independente e a variável dependente são, respectivamente,',
    alternativas: [
      'a velocidade de resfriamento e a temperatura ambiente.',
      'a temperatura ambiente e a velocidade de resfriamento.',
      'a massa e a vestimenta.',
      'a vestimenta e a temperatura ambiente.',
      'a temperatura ambiente e a massa.',
    ],
    correta: 1,
    comentario:
      'Variável independente é a que o pesquisador manipula para observar o efeito (temperatura ambiente); dependente é o efeito medido (velocidade de resfriamento). Massa e vestimenta, mantidas constantes, são variáveis controladas. A inverte os papéis; C, D e E tratam variáveis controladas como se fossem as testadas.',
  },
  {
    id: 'rl-cientifico-q03',
    temaId: 'rl-cientifico',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Para validar um novo reagente para detecção de sangue latente, peritos o aplicaram em amostras sabidamente contendo sangue e em amostras sabidamente sem sangue. As amostras sabidamente sem sangue funcionam como',
    alternativas: [
      'variável independente do experimento.',
      'amostra de conveniência, que enviesa o resultado.',
      'grupo experimental principal.',
      'controle negativo, que permite identificar resultados falso-positivos.',
      'controle positivo, que confirma que o reagente é capaz de reagir.',
    ],
    correta: 3,
    comentario:
      'O controle negativo é a amostra que NÃO deve reagir: se reagir, o teste produz falso-positivo (ou há contaminação). As amostras com sangue são o controle positivo, que mostra que o reagente funciona e evita falso-negativo — E descreve essas amostras, e não as sem sangue. A, B e C não descrevem a função de um controle.',
  },
  {
    id: 'rl-cientifico-q04',
    temaId: 'rl-cientifico',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'Um levantamento estadual constatou que os municípios com mais hospitais registram, em números absolutos, mais óbitos por ano. Diante disso, a conclusão metodologicamente mais adequada é:',
    alternativas: [
      'os hospitais causam óbitos, o que justificaria reduzir o número de leitos.',
      'os óbitos causam a abertura de hospitais, o que explica a associação.',
      'a associação provavelmente decorre de uma variável de confusão, como o tamanho da população, que aumenta as duas contagens.',
      'como a correlação é positiva e forte, a relação de causa e efeito está demonstrada.',
      'a correlação é falsa, pois variáveis sem relação causal direta não podem variar juntas.',
    ],
    correta: 2,
    comentario:
      'Municípios mais populosos têm mais hospitais e mais óbitos em números absolutos: a população é uma variável de confusão que produz a correlação. Correlação, mesmo forte, não demonstra causalidade (D). A e B afirmam causalidade sem evidência; E erra porque variáveis sem relação causal direta podem, sim, variar juntas.',
  },
  {
    id: 'rl-cientifico-q05',
    temaId: 'rl-cientifico',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Ao examinar um local de morte, um perito que chegou convencido da hipótese de suicídio passa a buscar e valorizar apenas os vestígios compatíveis com ela e a desconsiderar os que sugerem a participação de terceiros. Esse comportamento exemplifica',
    alternativas: [
      'a falácia de apelo à autoridade.',
      'o viés de confirmação.',
      'a heurística da disponibilidade.',
      'a falácia do espantalho.',
      'a generalização apressada.',
    ],
    correta: 1,
    comentario:
      'Viés de confirmação é a tendência de buscar, interpretar e valorizar as evidências que confirmam a crença prévia, desprezando as que a contrariam. Disponibilidade é julgar pela facilidade de lembrar; generalização apressada é tirar uma regra geral de poucos casos; apelo à autoridade (aceitar algo por quem disse) e espantalho (distorcer o argumento alheio) são falácias de argumentação, que não aparecem na situação.',
  },
  {
    id: 'rl-cientifico-q06',
    temaId: 'rl-cientifico',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Considere os tipos de raciocínio: dedutivo (a conclusão decorre necessariamente das premissas), indutivo (generalização a partir de casos observados) e abdutivo (inferência da hipótese que melhor explica os fatos observados). Associe cada raciocínio ao seu tipo.\nI. Todas as ampolas do lote L estão vencidas. Esta ampola é do lote L. Logo, esta ampola está vencida.\nII. Em todos os 300 frascos do reagente R testados no laboratório, a reação ocorreu em menos de um minuto. Logo, provavelmente todo frasco desse reagente reage em menos de um minuto.\nIII. Diante de febre, rigidez de nuca e petéquias, o médico conclui que a doença meningocócica é a hipótese que melhor explica o quadro.\nA sequência correta é:',
    alternativas: [
      'I – dedutivo; II – abdutivo; III – indutivo.',
      'I – indutivo; II – dedutivo; III – abdutivo.',
      'I – abdutivo; II – indutivo; III – dedutivo.',
      'I – dedutivo; II – dedutivo; III – abdutivo.',
      'I – dedutivo; II – indutivo; III – abdutivo.',
    ],
    correta: 4,
    comentario:
      'I parte de uma regra geral para um caso particular, com conclusão necessária: dedução. II generaliza a partir de casos observados, com conclusão apenas provável: indução (300 casos não garantem o próximo, por isso D erra). III vai dos sinais à hipótese que melhor os explica, sem garantia (outras causas podem produzir o quadro) e sem generalizar casos: abdução, a inferência típica do diagnóstico.',
  },
  {
    id: 'rl-cientifico-q07',
    temaId: 'rl-cientifico',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Um médico atendeu, na semana anterior, dois casos graves e marcantes de dengue e passou a superestimar a probabilidade de dengue em todo paciente febril, porque esses casos lhe vêm facilmente à memória. O viés descrito é',
    alternativas: [
      'a heurística da disponibilidade.',
      'o viés de ancoragem.',
      'o viés de confirmação.',
      'a falácia post hoc ergo propter hoc.',
      'o viés de seleção amostral.',
    ],
    correta: 0,
    comentario:
      'Na heurística da disponibilidade, a probabilidade de um evento é julgada pela facilidade com que exemplos vêm à mente (casos recentes ou marcantes), e não pela frequência real. Ancoragem é prender-se a uma informação inicial; confirmação é buscar só dados favoráveis; post hoc é inferir causa pela sequência temporal; viés de seleção é distorção na composição da amostra.',
  },
  {
    id: 'rl-cientifico-q08',
    temaId: 'rl-cientifico',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Segundo a concepção de Karl Popper, uma hipótese só é científica se puder, em princípio, ser refutada por observação ou experimento; por isso, uma série de resultados favoráveis não prova definitivamente a sua verdade.',
    gabaritoCE: true,
    comentario:
      'Certo. O critério de demarcação de Popper é a falseabilidade: a hipótese deve proibir certos resultados, que, se observados, a refutariam. Resultados favoráveis apenas a corroboram; nenhum número finito de confirmações garante a verdade de uma afirmação universal, ao passo que uma refutação sólida pode derrubá-la.',
  },
  {
    id: 'rl-cientifico-q09',
    temaId: 'rl-cientifico',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Na ciência, a lei é uma hipótese que ainda não foi testada; à medida que se acumulam evidências favoráveis, a lei transforma-se em teoria.',
    gabaritoCE: false,
    comentario:
      'Errado. Lei e teoria não são etapas de uma hierarquia. A lei descreve uma regularidade observada, muitas vezes em linguagem matemática (como a lei do resfriamento de Newton); a teoria explica por que os fenômenos ocorrem, integrando fatos, leis e hipóteses testadas. A explicação ainda não testada é a hipótese.',
  },
  {
    id: 'rl-cientifico-q10',
    temaId: 'rl-cientifico',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 1,
    enunciado:
      'Depois que passou a usar uma pulseira magnética, um paciente notou melhora da dor lombar e concluiu que a pulseira curou a dor. Esse raciocínio constitui',
    alternativas: [
      'um raciocínio dedutivo válido.',
      'a falácia post hoc ergo propter hoc.',
      'a falácia ad hominem.',
      'um apelo legítimo à autoridade.',
      'uma generalização a partir de amostra representativa.',
    ],
    correta: 1,
    comentario:
      'Post hoc ergo propter hoc (“depois disso, logo por causa disso”) é concluir que A causou B só porque B veio depois de A. A dor lombar pode melhorar espontaneamente, por outros tratamentos ou por efeito placebo. Não há dedução, ataque à pessoa (ad hominem), autoridade invocada nem amostra: é um caso isolado.',
  },

  /* ---------- rlm (questões mistas) ---------- */
  {
    id: 'rlm-q01',
    temaId: 'rlm',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas a seguir:\nI. A negação de “Todo perito é médico” é “Algum perito não é médico”.\nII. A proposição “Se p, então q” é equivalente a “Se não q, então não p”.\nIII. A negação de “p ou q” é “não p ou não q”.\nQuais estão corretas?',
    alternativas: ['Apenas I e II.', 'Apenas I.', 'Apenas II.', 'Apenas III.', 'I, II e III.'],
    correta: 0,
    comentario:
      'I está correta: nega-se “todo” com “algum… não”. II está correta: é a contrapositiva, equivalente ao condicional. III está incorreta: por De Morgan, ~(p ∨ q) ≡ ~p ∧ ~q (“não p E não q”); “não p ou não q” é a negação de “p e q”.',
  },
  {
    id: 'rlm-q02',
    temaId: 'rlm',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Dos 80 inscritos em uma seleção para perito, 45 são médicos e 50 têm pós-graduação. Sabendo que 10 inscritos não são médicos nem têm pós-graduação, quantos médicos têm pós-graduação?',
    alternativas: ['15', '20', '25', '30', '35'],
    correta: 2,
    comentario:
      'São médicos ou têm pós-graduação: 80 − 10 = 70. Pela fórmula da união, n(M ∩ P) = 45 + 50 − 70 = 25. Conferindo: só médicos = 20, só pós-graduados = 25, ambos = 25 e nenhum = 10, total 80. 15 surge quando se esquecem os 10 que estão fora dos dois grupos (45 + 50 − 80); 20 é o número de médicos sem pós-graduação.',
    verificar: () => 45 + 50 - (80 - 10),
  },
  {
    id: 'rlm-q03',
    temaId: 'rlm',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 3,
    enunciado:
      'Um médico segue uma escala em que trabalha um dia e folga dois, repetidamente. No mês considerado, que tem 31 dias, seu primeiro plantão foi no dia 2, uma segunda-feira. Quantos plantões desse médico, nesse mês, caem em uma segunda-feira?',
    alternativas: ['1', '3', '4', '5', '2'],
    correta: 4,
    comentario:
      'Os plantões caem nos dias 2, 5, 8, …, de 3 em 3; as segundas-feiras, nos dias 2, 9, 16, 23 e 30, de 7 em 7. As duas sequências coincidem a cada mmc(3, 7) = 21 dias: dias 2 e 23 (o próximo seria o dia 44). Logo, 2 plantões caem em segunda-feira. 5 é o total de segundas-feiras do mês, e não de plantões nelas; 1 esquece a coincidência do dia 23.',
    verificar: () => {
      let n = 0;
      for (let d = 2; d <= 31; d += 3) if ((d - 2) % 7 === 0) n += 1;
      return n;
    },
  },
  {
    id: 'rlm-q04',
    temaId: 'rlm',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Um perito raciocina: “Se houver sangue humano na amostra, o teste presuntivo dará positivo. O teste deu positivo. Logo, há sangue humano na amostra.” Esse raciocínio é',
    alternativas: [
      'válido, por modus ponens.',
      'válido, por modus tollens.',
      'inválido, pois nega o antecedente.',
      'inválido, pois afirma o consequente: o positivo pode ter outra causa.',
      'válido, pois a conclusão é provavelmente verdadeira.',
    ],
    correta: 3,
    comentario:
      'A forma é p → q; q; logo p — falácia de afirmação do consequente. O condicional não diz que só o sangue humano dá positivo; aliás, teste presuntivo não é específico e pode reagir com outras substâncias, por isso o resultado exige exame confirmatório. A e B citam regras válidas que não se aplicam (modus ponens exigiria afirmar o antecedente); C nomeia a falácia errada; E confunde validade com probabilidade da conclusão.',
  },
  {
    id: 'rlm-q05',
    temaId: 'rlm',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Considere as proposições P: “Todo perito é servidor” e Q: “Algum servidor não é perito”. Nesse caso, a negação de P é “Nenhum perito é servidor”, e a proposição P → Q é verdadeira sempre que P for falsa.',
    gabaritoCE: false,
    comentario:
      'Errado. A segunda parte está correta (condicional com antecedente falso é verdadeiro), mas a primeira não: a negação de “Todo perito é servidor” é “Algum perito não é servidor”. “Nenhum perito é servidor” é a contrária de P, e não sua negação.',
  },
];
