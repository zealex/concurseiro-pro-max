import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 06 — Estrutura e Processo de Formação de Palavras), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C06: QuestaoTreino[] = [
  {
    id: 'lp-classes-qlivro06-01',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(FAB - EEAr - Sargento - 2007) A palavra que sofreu o mesmo processo de formação de supra-sumo é:',
    alternativas: ['manga-rosa', 'trigêmeo', 'belas-artes', 'extra-oficial'],
    correta: 3,
    comentario:
      'A resposta é d: “supra” e “extra” são prefixos, e “extra-oficial” forma-se por prefixação, como “supra-sumo”. Em a e c, há composição por justaposição (manga-rosa e belas-artes); em b, o “tri-” de “trigêmeo” foi tratado pela banca como radical, e não como prefixo, por isso a palavra não serve.',
  },
  {
    id: 'lp-classes-qlivro06-02',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(TJ/RS - Tribunal de Justiça - Juiz Estadual - 2009) O prefixo que ocorre na palavra desativado também está presente em:',
    alternativas: ['reativado', 'ativismo', 'desastrado', 'demasiado', 'desventura'],
    correta: 4,
    comentario:
      'A resposta é e: pelo critério sincrônico, o “des-” de “desativado” é prefixo com valor de negação, o mesmo que aparece em “desventura”. Em reativado o prefixo é re-, em ativismo não há prefixo, em demasiado o prefixo é de-, e em desastrado o “des-” já está incorporado ao radical “desastr-”.',
  },
  {
    id: 'lp-classes-qlivro06-03',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(EEAr - 1/2011) Leia: O acesso de jovens à internet consagrou uma bem-humorada modalidade de escrita: o miguchês. Acompanhe o transcurso de criação dessa palavra: amigo > migo > migucho > miguchês. Considerando-se apenas os elementos em negrito, é correto afirmar que miguchês foi formada por:',
    alternativas: ['aglutinação', 'justaposição', 'derivação sufixal', 'derivação imprópria'],
    correta: 2,
    comentario:
      'A resposta é c: “miguchês” deriva de “migucho”, diminutivo de “migo”, que recebe o sufixo -ês, indicativo de origem; a formação é por sufixação. As demais não servem: não há junção de palavras inteiras (justaposição) nem fusão de duas palavras (aglutinação), e a imprópria exigiria mudança de classe sem acréscimo de sufixo.',
  },
  {
    id: 'lp-classes-qlivro06-04',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(FGV - PC/RJ - Inspetor - 2008) Em xenofobia, há a seguinte combinação de sentidos: estrangeiro + aversão. Assinale a alternativa em que a explicação do sentido do elemento que antecede -fobia não tenha sido feita corretamente.',
    alternativas: [
      'pantofobia (pantera)',
      'estasiofobia (permanecer de pé)',
      'fotofobia (luz)',
      'ictiofobia (peixe)',
      'gamofobia (casamento)',
    ],
    correta: 0,
    comentario:
      'A resposta é a: em “pantofobia”, o elemento “pant(o)-” significa tudo, e não pantera, como indicado. As demais explicações estão corretas: “estasi-” (parada, permanência em pé), “foto-” (luz), “ictio-” (peixe) e “gamo-” (casamento), todos elementos gregos da formação de palavras.',
  },
  {
    id: 'lp-classes-qlivro06-05',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - Analista de Informática (SDS-SC) - 2008) A alternativa em que todas as palavras são formadas pelo mesmo processo de formação é:',
    alternativas: [
      'responsabilidade, musicalidade, defeituoso',
      'cativeiro, incorruptíveis, desfazer',
      'deslealdade, colunista, incrível',
      'anoitecer, festeiro, infeliz',
      'reeducação, dignidade, enriquecer',
    ],
    correta: 0,
    comentario:
      'A resposta é a: em “responsabilidade”, “musicalidade” e “defeituoso”, há apenas o acréscimo de sufixo a um radical, o que caracteriza a derivação sufixal. Nas demais alternativas, aparece pelo menos um prefixo ou uma formação parassintética, como em “anoitecer” e “enriquecer”, o que muda o processo.',
  },
  {
    id: 'lp-classes-qlivro06-06',
    temaId: 'lp-classes',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - Instituto Rio Branco - Diplomata - 2008) O recurso a processos de formação de palavras derivadas pode ser exemplificado em “habitável porém inabitado”.',
    gabaritoCE: true,
    comentario:
      'O item está certo. Em “habitável”, o sufixo -ável forma adjetivo a partir de “habitar”; em “inabitado”, o prefixo in- indica negação. Os dois casos são derivações, o que confirma o exemplo.',
  },
  {
    id: 'lp-classes-qlivro06-07',
    temaId: 'lp-classes',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FGV - TCM/PA - Auditor - 2008) (Adaptada) Julgue como correto ou incorreto o item a seguir no que diz respeito à estrutura do texto. “A palavra ‘financeirização’ foi posta entre aspas por se tratar de um neologismo.”',
    gabaritoCE: true,
    comentario:
      'O item está correto. As aspas servem para destacar uma palavra nova, ainda não consagrada nos dicionários, como “financeirização”, o que caracteriza um neologismo. A explicação do item é coerente com o uso desse recurso gráfico.',
  },
  {
    id: 'lp-classes-qlivro06-08',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - TJ/MS - Juiz de Direito (Substituto de Carreira) - 2008) Utilizou-se corretamente a regra moderna de grafia de siglas em OMC, ONU e FMI. Assinale a alternativa em que isso não tenha ocorrido.',
    alternativas: ['AGU', 'ADI', 'Ernerj', 'EMATRA', 'PIS'],
    correta: 3,
    comentario:
      'A resposta é d: pela regra atual, siglas lidas soletradas vão em maiúsculas, como OMC, ONU e FMI, e siglas lidas como palavra recebem apenas a inicial maiúscula, como em “Ernerj”. “EMATRA”, lida como palavra, deveria seguir a segunda forma e não a primeira.',
  },
  {
    id: 'lp-classes-qlivro06-09',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fadems - TJ/MS - Analista de Sistema Computacional - 2009) Assinale a alternativa em que o processo de formação de palavras está corretamente indicado:',
    alternativas: [
      'sociologia = derivação prefixal ou prefixação.',
      '“redondo” (em “Skol, a cerveja que desce redondo”) = derivação sufixal ou sufixação.',
      'enlouquecer = parassíntese.',
      'combate (do verbo “combater”) = derivação imprópria.',
      '“pobre” (em “O pobre merece ajuda”) = derivação regressiva.',
    ],
    correta: 2,
    comentario:
      'A resposta é c: “enlouquecer” junta o prefixo en- e o sufixo -ecer ao radical “louc-” de uma só vez, o que caracteriza a parassíntese. Em a, “sociologia” é composição (sócio + logia); em b, “redondo” é advérbio sem sufixo; em d, “combate” é derivação regressiva; e em e, “pobre” substantivado é derivação imprópria.',
  },
  {
    id: 'lp-classes-qlivro06-10',
    temaId: 'lp-classes',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - Instituto Rio Branco - Diplomata - 2010) Os vocábulos “instabilidade”, “imperfeita”, “inçados” e “impõe” são formados por prefixo cujo valor semântico denota privação ou negação.',
    gabaritoCE: false,
    comentario:
      'O item está errado. Em “impõe”, o prefixo im- não nega nada: “impor” é colocar algo sobre outra coisa, com o sentido de “em” ou “sobre”. Nas demais palavras, o prefixo tem valor de negação, o que não basta para validar a afirmação.',
  },
  {
    id: 'lp-classes-qlivro06-11',
    temaId: 'lp-classes',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - Instituto Rio Branco - Diplomata - 2010) O vocábulo “inaturável” é formado por derivação e tem o mesmo radical do vocábulo desnaturado.',
    gabaritoCE: false,
    comentario:
      'O item está errado. “Inaturável” vem de “aturar”, e seu radical é “atur-”, e não “natur-”; já “desnaturado” tem o radical “natur-”. Por isso, os dois vocábulos não compartilham o mesmo radical.',
  },
  {
    id: 'lp-classes-qlivro06-12',
    temaId: 'lp-classes',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado: 'O vocábulo “agravada” tem o mesmo radical que os vocábulos gravidez e gravidade.',
    gabaritoCE: true,
    comentario:
      'O item está certo. Em “agravada”, o prefixo a- não altera o radical, que é “grav-”, o mesmo de “gravidez” e “gravidade”. Esses vocábulos formam uma família de palavras com a mesma base.',
  },
  {
    id: 'lp-classes-qlivro06-13',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Instituto Zambini - Pref. Taboão da Serra/SP - Professor III - 2010) Assinale a alternativa em que a palavra não é formada por derivação parassintética.',
    alternativas: ['enriquecer.', 'entardecer.', 'avermelhar.', 'descobrimento.', 'N.DA.'],
    correta: 3,
    comentario:
      'A resposta é d: “descobrimento” é formado por sufixação a partir do verbo “descobrir”, com o sufixo -mento, sem acréscimo simultâneo de prefixo e sufixo. Já “enriquecer”, “entardecer” e “avermelhar” juntam prefixo e sufixo de uma vez a um adjetivo ou substantivo, o que caracteriza a parassíntese.',
  },
  {
    id: 'lp-classes-qlivro06-14',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Ima - Pref. Boa Hora/PI - Procurador Municipal - 2010) A palavra “olhar” em (meu olhar) é um exemplo de palavra formada por derivação:',
    alternativas: ['parassintética.', 'prefixal.', 'sufixal.', 'imprópria.', 'regressiva.'],
    correta: 3,
    comentario:
      'A resposta é d: “olhar”, em “meu olhar”, é o verbo usado como substantivo, sem acréscimo de afixo nem perda de terminação, o que caracteriza a derivação imprópria, também chamada conversão. As demais exigem afixos ou a supressão da terminação verbal.',
  },
  {
    id: 'lp-classes-qlivro06-15',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Integri - Pref. Carapicuíba/SP - Procurador Municipal - 2010) Mas, em uma era de globalização e de sociedades multiconfessionais, a criação do capital exige não apenas tolerância, mas também o respeito pelas pessoas de outras confissões. As palavras sublinhadas são formadas pelo mesmo processo de derivação, exceto:',
    alternativas: ['globalização.', 'sociedades.', 'criação.', 'multiconfessionais.'],
    correta: 3,
    comentario:
      'A resposta é d: “multiconfessionais” junta o prefixo multi- e o sufixo -ais ao radical “confess-”, sendo formada por prefixação e sufixação. As demais recebem apenas um sufixo sobre um radical (-ização, -dade, -ção), e por isso seguem outro processo.',
  },
  {
    id: 'lp-classes-qlivro06-16',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - Codesp - Arquiteto - 2010) Assinale o par de vocábulos em que seus elementos mórficos destacados NÃO tenham o mesmo sentido.',
    alternativas: [
      'metropolitana - metrologia.',
      'economia - ecologia.',
      'telecomunicações - telepatia.',
      'petróleo - purificar.',
      'sintonia - sinergia.',
    ],
    correta: 0,
    comentario:
      'A resposta é a: em “metropolitana”, o elemento “metro-” significa cidade, como em metrópole, enquanto em “metrologia” significa medida. Nos demais pares, os elementos têm o mesmo sentido, como “eco-” (casa) em economia e ecologia, “tele-” (distância) e “sin-” (junto).',
  },
  {
    id: 'lp-classes-qlivro06-17',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - SEAD/AP - Auditor da Receita Estadual - 2010) Com relação aos processos de formação de palavras, analise as afirmativas a seguir: I. Na palavra jeitinho, o sufixo -inho significa “diminuição”. II. Denomina-se composição o processo de formação da palavra utilitarista. III. A palavra analfabetismo forma-se por derivação prefixal e sufixal, a partir do radical alfabet-. Assinale a alternativa correta.',
    alternativas: [
      'se somente a afirmativa I estiver correta.',
      'se somente a afirmativa II estiver correta.',
      'se somente a afirmativa III estiver correta.',
      'se somente as afirmativas II e III estiverem corretas.',
      'se todas as afirmativas estiverem corretas.',
    ],
    correta: 2,
    comentario:
      'A resposta é c: apenas a III está correta, pois “analfabetismo” tem o prefixo a- (negação) e o sufixo -ismo sobre o radical “alfabet-”. A I é falsa, porque em “jeitinho” o -inho não indica diminuição, e a II também é falsa, porque “utilitarista” é formada por sufixação de “utilitário”, e não por composição.',
  },
  {
    id: 'lp-classes-qlivro06-18',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - DPE/RS - Defensor Público - 2011) Das palavras a seguir, a única formada por derivação prefixal e sufixal é:',
    alternativas: ['destinação', 'desocupação', 'criminológico', 'carcereiro', 'preventivamente'],
    correta: 1,
    comentario:
      'A resposta é b: “desocupação” junta o prefixo des- ao radical ocup- e ao sufixo -ação, por isso há prefixação e sufixação. As demais recebem apenas sufixo, como “destinação” (destinar + -ação), “criminológico” (crime + -ológico), “carcereiro” (cárcere + -eiro) e “preventivamente” (prevent- + -ivo + -mente).',
  },
  {
    id: 'lp-classes-qlivro06-19',
    temaId: 'lp-classes',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - STM - Analista Judiciário - 2011) As palavras “desertor” e “integrantes” são ambas formadas por processo de derivação sufixal em que os respectivos sufixos evidenciam o sentido de agente.',
    gabaritoCE: true,
    comentario:
      'O item está certo. Em “desertor”, o sufixo -or forma nomes de agente a partir do verbo “desertar”; em “integrantes”, o sufixo -ante indica quem integra, ou seja, quem pratica a ação. Ambas são formadas por sufixação com sentido de agente.',
  },
  {
    id: 'lp-classes-qlivro06-20',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - ECT - Agente dos Correios - 2011) A palavra “trem-baía” é composta por justaposição, tal qual o vocábulo:',
    alternativas: ['governança.', 'ilimitado.', 'passatempo.', 'superprodução.', 'faturamento.'],
    correta: 2,
    comentario:
      'A resposta é c: “passatempo” junta a forma verbal “passa” e o substantivo “tempo”, sem perda de elementos, por justaposição, como ocorre em “trem-baía”. As demais são formadas por afixos: “ilimitado” tem prefixo e sufixo, “superprodução” tem prefixo, e “governança” e “faturamento” têm sufixo.',
  },
  {
    id: 'lp-classes-qlivro06-21',
    temaId: 'lp-classes',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - ECT - Formação: Letras - 2011) No processo de formação dos vocábulos “integração”, “impulsiona”, “indefectivelmente” e “imprudências”, identifica-se o prefixo in-, que neles expressa a noção de mudança de estado.',
    gabaritoCE: false,
    comentario:
      'O item está errado. Nesses vocábulos, o prefixo in- (ou im-) não expressa mudança de estado: em “imprudências” e “indefectivelmente”, a ideia é de negação, e em “integração” e “impulsiona” o sentido é de posição interior ou de ação, sem transformação de estado.',
  },
  {
    id: 'lp-classes-qlivro06-22',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funcab - Prefeitura Municipal de Valença - Biólogo - 2012) No processo de formação da palavra “desfavoravelmente”, pode ser identificado o tipo de derivação:',
    alternativas: ['sufixal.', 'prefixal e sufixal.', 'parassintética.', 'regressiva.', 'prefixal.'],
    correta: 1,
    comentario:
      'A resposta é b: “favorável” já existe na língua e recebe o prefixo des-, formando “desfavorável”, e depois o sufixo -mente. Há, portanto, prefixação e sufixação em etapas, e não parassíntese, que exigiria acréscimo simultâneo de prefixo e sufixo a uma palavra primitiva.',
  },
  {
    id: 'lp-classes-qlivro06-23',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Consulplan - TSE - Analista Judiciário - 2012) Assinale a alternativa em que o elemento destacado NÃO tem o mesmo sentido que o de trans-, em transvalorada.',
    alternativas: ['transbordar.', 'trasantontem.', 'tresnoitar.', 'trastejar.'],
    correta: 3,
    comentario:
      'A resposta é d: em “transvalorada”, o elemento trans- indica ideia de além de, de passagem para além de algo. Em transbordar, trasantontem e tresnoitar, o elemento tem esse sentido de ultrapassagem, enquanto em trastejar o elemento tras- traz ideia de atrás ou de trás, sentido diferente.',
  },
  {
    id: 'lp-classes-qlivro06-24',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Instituto Ludus - Pref. Mun. Aroazes - Professor de Português II - 2012) Doçura e interinidade são substantivos abstratos derivados de adjetivo. Marque o item em que todos os substantivos são abstratos derivados de adjetivo.',
    alternativas: [
      'Mortalidade, mesquinhez, umidade, escuridão.',
      'Infância, paciência, publicidade, justiça.',
      'Perfeição, baixeza, compensação, dificuldade.',
      'Ambição, amor, mistério, oportunidade.',
      'Alegria, amor, mistério, oportunidade.',
    ],
    correta: 0,
    comentario:
      'A resposta é a: “mortalidade”, “mesquinhez”, “umidade” e “escuridão” são substantivos abstratos formados a partir de adjetivos (mortal, mesquinho, úmido, escuro) pelos sufixos -idade, -ez e -idão. Nas demais, há palavras que vêm de substantivos (infância, de infante), de verbos (compensação, de compensar) ou que não são derivadas de adjetivo (amor, de amar).',
  },
  {
    id: 'lp-classes-qlivro06-25',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - Pref. Barra Velha/SC - Agente Administrativo - 2012) Os termos Ibama (4ª §) e ararinha (2ª §) são formados, respectivamente, pelos processos de:',
    alternativas: [
      'siglonimização e derivação sufixal.',
      'derivação regressiva e onomatopeia.',
      'derivação prefixal e abreviação.',
      'derivação parassintética e derivação imprópria.',
      'composição por justaposição e hibridismo.',
    ],
    correta: 0,
    comentario:
      'A resposta é a: “Ibama” é uma sigla formada pelas iniciais de um órgão (siglonimização), e “ararinha” vem de “arara” pelo sufixo -inha, de valor diminutivo, o que caracteriza a derivação sufixal. As demais combinações não se aplicam: não há regressão, abreviação, parassíntese nem composição por justaposição nessas palavras.',
  },
  {
    id: 'lp-classes-qlivro06-26',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado: '(Ceperj - Cedae - Operador de Tratamento de Água - 2012) A palavra formada pelo acréscimo de um sufixo é:',
    alternativas: ['imprensa', 'descobrir', 'reforma', 'irracional', 'rigidez'],
    correta: 4,
    comentario:
      'A resposta é e: “rigidez” vem do adjetivo “rígido” com o acréscimo do sufixo -ez, sem prefixo. As demais têm prefixo, como im- em “imprensa”, des- em “descobrir” e ir- em “irracional”, ou então “reforma” é derivada por regressão do verbo reformar.',
  },
  {
    id: 'lp-classes-qlivro06-27',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Ceperj - SEAP - Inspetor de Segurança e Administração Penitenciária - 2012) A palavra descriminalizar é formada pelo mesmo tipo de derivação observado na palavra da seguinte alternativa:',
    alternativas: ['espetar.', 'familiarizar.', 'tatuar.', 'recusar.', 'reanimar.'],
    correta: 4,
    comentario:
      'A resposta é e: “descriminalizar” combina prefixo (des-) e sufixo (-izar), e “reanimar” junta o prefixo re- a um verbo já formado (animar), num tipo de derivação prefixal. As demais recebem apenas sufixo, como “familiarizar”, “tatuar” e “espetar”, ou têm formação diferente.',
  },
  {
    id: 'lp-classes-qlivro06-28',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(Ceperj - Degase - Enfermeiro do Trabalho - 2012) Um exemplo do texto em que a palavra é formada pela adição de sufixo e prefixo é:',
    alternativas: ['cotidianamente', 'oportunidade', 'responsáveis', 'infelizmente', 'sucateados'],
    correta: 3,
    comentario:
      'A resposta é d: “infelizmente” recebe o prefixo in- (negação) sobre “feliz” e o sufixo -mente, formando um advérbio com prefixo e sufixo. As demais recebem apenas sufixo, como “oportunidade” (oportuno + -dade) e “sucateados” (sucata + -ear + -ado), ou são apenas o plural de um termo, como “responsáveis”.',
  },
  {
    id: 'lp-classes-qlivro06-29',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(Ceperj - SEFAZ - Analista de Controle Interno - 2012) Entre os vocábulos abaixo, aquele que possui uma formação diferente dos demais é:',
    alternativas: ['repercussões', 'desdobramentos', 'favorável', 'recentemente', 'despreocupar'],
    correta: 4,
    comentario:
      'A resposta é e: “despreocupar” é formada apenas pelo prefixo des- sobre o verbo “preocupar”, sem sufixo. As demais recebem sufixos, como -ão, -amento, -ável e -mente, o que as diferencia do processo de “despreocupar”.',
  },
  {
    id: 'lp-classes-qlivro06-30',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funcab - Pref. Magé/RJ - Administrador - 2012) Formam substantivos de adjetivos, exprimindo a noção de “estado ou qualidade de”, ambos os sufixos destacados nas seguintes palavras do texto:',
    alternativas: [
      'igualdade - sentimental.',
      'ligamento - esterilização.',
      'sentimentalismo - governante.',
      'pobreza - hipocrisia.',
      'jornalístico - adolescente.',
    ],
    correta: 3,
    comentario:
      'A resposta é d: “pobreza” (de pobre, com -eza) e “hipocrisia” (de hipócrita, com -ia) são substantivos abstratos que indicam estado ou qualidade. Nas demais, há adjetivos (sentimental, jornalístico), um substantivo derivado de verbo (ligamento) ou um agente (governante), que não se encaixam na noção pedida.',
  },
  {
    id: 'lp-classes-qlivro06-31',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funcab - Pref. Sooretama/ES - Administrador de Empresa - 2012) As palavras destacadas em “Tanto andam agora preocupados em definir o conto [...]” / “Uma ternura imensa, [...]” se formaram, respectivamente, por:',
    alternativas: [
      'composição por aglutinação e derivação sufixal.',
      'derivação regressiva e derivação regressiva.',
      'composição por justaposição e derivação imprópria.',
      'derivação regressiva e derivação sufixal.',
      'composição por justaposição e derivação parassintética.',
    ],
    correta: 3,
    comentario:
      'A resposta é d: “conto”, substantivo derivado do verbo “contar”, forma-se por derivação regressiva, com perda da terminação verbal; e “ternura” vem do adjetivo “terno” pelo sufixo -ura. As demais combinações de processos não correspondem a essas duas palavras.',
  },
  {
    id: 'lp-classes-qlivro06-32',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funcab - MPE/RO - Analista Administrativo - 2012) Aponte o significado do prefixo da palavra destacada em “(...) praticam o exorcismo em Kerala, (...)”.',
    alternativas: ['mudança.', 'separação.', 'para fora.', 'para trás.', 'através de.'],
    correta: 2,
    comentario:
      'A resposta é c: em “exorcismo”, o prefixo ex- indica movimento para fora, como na ideia de expulsar o espírito. As demais opções trazem sentidos de outros prefixos: mudança, separação, movimento para trás e através de.',
  },
  {
    id: 'lp-classes-qlivro06-33',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - AL/MT - Editor de Textos - 2013) Há uma série de substantivos no texto que são derivados de verbos. Assinale a alternativa em que a correspondência substantivo/verbo não é adequada.',
    alternativas: [
      '“... defendem na FALTA de uma ideia melhor” / faltar.',
      '“... mesmo antes da ENTRADA em vigor das leis...” / entrar.',
      '“... só possa ser vendida por PRESCRIÇÃO médica” / prescrever.',
      '“... nos estados americanos existe uma PROVISÃO para avaliar...” / provir.',
      '“... da venda e do CONSUMO da Cannabis...” / consumir.',
    ],
    correta: 3,
    comentario:
      'A resposta é d: “provisão”, no sentido de ato de prover ou providenciar, vem de “prover”, e não de “provir”, que significa vir de algum lugar. As demais correspondências são adequadas: “falta” vem de faltar, “entrada” de entrar, “prescrição” de prescrever e “consumo” de consumir.',
  },
  {
    id: 'lp-classes-qlivro06-34',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funcab - Detran/PB - Agente de Trânsito - 2013) Das palavras extraídas do texto, indique aquela que destoa das demais quanto ao processo de formação pelo qual foi constituída.',
    alternativas: ['perigoso.', 'motorista.', 'velocidade.', 'imprudente.', 'responsabilidade.'],
    correta: 3,
    comentario:
      'A resposta é d: “imprudente” é formada pelo prefixo im- (negação) sobre “prudente”, sem sufixo. As demais são formadas por sufixação: perigoso (perigo + -oso), motorista (motor + -ista), velocidade (veloz + -idade) e responsabilidade (responsável + -idade).',
  },
  {
    id: 'lp-classes-qlivro06-35',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(IBFC - Amazul - Assistente de Administração - Técnico de Contabilidade - 2014) Sobre a estrutura e formação do vocábulo “biocremação”, é correto afirmar que:',
    alternativas: [
      'é uma palavra primitiva.',
      'apresenta, em sua estrutura, os processos de composição e derivação.',
      'foi formado, exclusivamente, por derivação.',
      'foi formado, exclusivamente, por composição.',
    ],
    correta: 1,
    comentario:
      'A resposta é b: “biocremação” une o elemento “bio-” (vida) ao radical “cremação”, o que é composição, e “cremação” é derivada do verbo “cremar” pelo sufixo -ção, o que é derivação. Por isso a palavra combina os dois processos, e não se explica por apenas um deles.',
  },
  {
    id: 'lp-classes-qlivro06-36',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(AOCP - EBSERH Nacional - Analista Administrativo - Administração Hospitalar - 2015) As palavras “relacionamento”, “intelectualmente” e “profundamente” são formadas por:',
    alternativas: [
      'derivação prefixal e sufixal.',
      'derivação sufixal.',
      'derivação prefixal.',
      'composição por aglutinação.',
      'composição por justaposição.',
    ],
    correta: 1,
    comentario:
      'A resposta é b: “relacionamento”, “intelectualmente” e “profundamente” recebem apenas um sufixo cada (-mento, -mente) sobre um radical, sem prefixo. Assim, o processo é só de sufixação, e não há prefixação nem composição.',
  },
  {
    id: 'lp-classes-qlivro06-37',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - Prefeitura de Niterói/RJ - Fiscal de Posturas - 2015) Entre os pares de palavras abaixo, aquelas que são formadas por processos de formação diferentes são:',
    alternativas: [
      'publicidade / consumidores.',
      'desejo / inveja.',
      'avareza / poupança.',
      'descalcificar / inúmeros.',
      'preguiça / passeio.',
    ],
    correta: 4,
    comentario:
      'A resposta é e: nesse par, “passeio” vem do verbo passear por derivação regressiva, e “preguiça” não tem a mesma formação, por isso os processos são diferentes. Nos demais pares, os dois termos de cada dupla seguem o mesmo processo, como no caso de “desejo” e “inveja”, ambos derivados de verbo por regressão.',
  },
  {
    id: 'lp-classes-qlivro06-38',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAU - Prefeitura de Piraquara/PR - Assistente Operacional - 2016) As palavras “pontiagudo, gostoso e enobrecer” são formadas, respectivamente, pelos seguintes processos de formação de palavras:',
    alternativas: [
      'Composição por aglutinação — derivação sufixal — derivação parassintética.',
      'Derivação sufixal — derivação sufixal — derivação prefixal e sufixal.',
      'Composição por justaposição — derivação imprópria — derivação prefixal.',
      'Derivação prefixal e sufixal — derivação sufixal — composição por aglutinação.',
      'Derivação prefixal — composição por aglutinação — derivação imprópria.',
    ],
    correta: 0,
    comentario:
      'A resposta é a: “pontiagudo” junta “ponta” e “agudo” com perda de elementos, o que é composição por aglutinação; “gostoso” recebe o sufixo -oso; e “enobrecer” junta en- e -ecer ao radical “nobre” de uma só vez, por parassíntese.',
  },
  {
    id: 'lp-classes-qlivro06-39',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - MPE/BA - Analista Técnico (Psicologia) - 2017) A palavra abaixo que apresenta um processo de formação distinto dos demais é:',
    alternativas: ['chineses.', 'recentemente.', 'milenar.', 'desagregadores.', 'imediatismo.'],
    correta: 3,
    comentario:
      'A resposta é d: “desagregadores” junta o prefixo des- ao radical agreg-, e o sufixo -dor, formando um vocábulo com prefixação e sufixação. As demais recebem apenas sufixo, como “chineses”, “recentemente” (recente + -mente), “milenar” e “imediatismo” (imediato + -ismo).',
  },
  {
    id: 'lp-classes-qlivro06-40',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Instituto AOCP - PC/ES - Assistente Social - 2019) Dentre os processos existentes para formar novas palavras, verifica-se que o substantivo “responsa” é formado por:',
    alternativas: [
      'derivação prefixal.',
      'derivação parassintética.',
      'redução.',
      'hibridismo.',
      'composição por aglutinação.',
    ],
    correta: 2,
    comentario:
      'A resposta é c: “responsa” é uma redução de “responsabilidade”, por supressão da parte final da palavra, sem acréscimo de afixo. As demais opções exigem prefixo, parassíntese, hibridismo ou composição, que não ocorrem nesse caso.',
  },
  {
    id: 'lp-classes-qlivro06-41',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Fundatec - Prefeitura de Panambi/RS - Contador - 2020) Assinale a alternativa em que há INCORREÇÃO quanto ao que se diz sobre a morfologia de palavras do texto.',
    alternativas: [
      'enviesadas (há derivação parassintética).',
      'reestabelecesse (há desinência de tempo e modo verbal).',
      'colaterais (há supressão da consoante final para inserção de vogal de ligação e de desinência de número).',
      'documentado (há sufixo formador de adjetivo ou particípio).',
      'insanidade (há prefixo de negação e sufixo formador de adjetivo).',
    ],
    correta: 4,
    comentario:
      'A resposta é e: em “insanidade”, há o prefixo de negação in- e o sufixo -idade, que forma substantivo, e não adjetivo; por isso a afirmação está incorreta. As demais afirmações descrevem corretamente a morfologia das palavras citadas.',
  },
  {
    id: 'lp-classes-qlivro06-42',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FGV - Câmara de Aracaju/SE - Redator - 2021) A frase abaixo em que o estrangeirismo destacado mostra uma incorporação completa ao nosso idioma é:',
    alternativas: [
      'Após o cinema, fui comer um HAMBURGER.',
      'O SHOW foi um sucesso absoluto.',
      'O SHOPPING fica aberto até as 22h.',
      'Faço ginástica no meu CLUBE.',
      'Gosto de jogar VIDEOGAME.',
    ],
    correta: 3,
    comentario:
      'A resposta é d: “clube” é a forma aportuguesada de “club”, com grafia e pronúncia adaptadas, e por isso está incorporada ao idioma. As demais mantêm a forma original, como “hamburger”, “show”, “shopping” e “videogame”, sem adaptação completa.',
  },
  {
    id: 'lp-classes-qlivro06-43',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fundatec - SPGG/RS - Analista de Planejamento, Orçamento e Gestão - 2022) No que se refere à estrutura e aos processos de formação de palavras, avalie as afirmações que seguem: I. Os vocábulos “profundamente” e “resolvermos” são formados por sufixação. II. Em “ilimitado” ocorrem prefixo e sufixo. III. A palavra “automóveis” é exemplo de hibridismo, nome dado à formação de palavras com elementos de idiomas diferentes. Quais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas III.', 'Apenas I e II.', 'Apenas II e III.'],
    correta: 4,
    comentario:
      'A resposta é e: a II está certa, pois “ilimitado” tem o prefixo i- e o sufixo -ado; a III também está certa, pois “automóveis” junta o elemento grego “auto” e o latino “móvel”, o que é hibridismo. A I é falsa, porque “resolvermos” tem o prefixo re- além dos sufixos, e não se forma só por sufixação.',
  },
  {
    id: 'lp-classes-qlivro06-44',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - Caern - Agente Administrativo - 2010) Assinale a palavra que seja formada pelo mesmo processo que megalópoles.',
    alternativas: ['internacional', 'sustentabilidade', 'saneamento', 'obrigatoriedade', 'olímpicos'],
    correta: 0,
    comentario:
      'O gabarito do livro é a letra a, “internacional”, mas a comparação é questionável: “megalópoles” é formada por composição de radicais gregos (mega + polis), enquanto “internacional” junta o prefixo inter- e o sufixo -al a um radical. Por isso, vale conferir o processo de formação de cada palavra antes de marcar a alternativa.',
  },
  {
    id: 'lp-classes-qlivro06-45',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - TRE/PA - Analista Judiciário - 2011) Assinale a palavra em que o prefixo tenha o mesmo valor semântico que o de dissociação.',
    alternativas: ['dissolver', 'dispor', 'discordar', 'disenteria', 'dissimular'],
    correta: 2,
    comentario:
      'O gabarito do livro é a letra c, “discordar”, mas a questão é controversa: em “dissociação”, o dis- indica separação, sentido que aparece também em “dissolver” (a), enquanto em “discordar” o prefixo marca oposição ou negação. Assim, a alternativa a parece mais coerente com o sentido do prefixo, e o gabarito merece conferência.',
  },
  {
    id: 'lp-classes-qlivro06-46',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Instituto AOCP - TRT/1ª R (RJ) - Analista Judiciário (Oficial de Justiça Avaliador Federal) - 2018) O processo de derivação imprópria de palavras compreende a mudança de classe de uma palavra, estendendo-lhe a significação. Assinale a alternativa cujo excerto apresenta tal processo de derivação na palavra em destaque:',
    alternativas: [
      '“A cultura é o sedimento da tentativa incessante de tornar possível [...]”',
      '“[...] o lugar que ele ocupa na existência [...]”',
      '“[...] todo tipo de sociedade e toda época histórica têm os seus próprios medos [...]”',
      '“Os medos que o poder transforma em mercadoria política e comercial [...]”',
      '“[...] a necessidade de preencher o abismo que separa o transitório do eterno [...]”',
    ],
    correta: 4,
    comentario:
      'A resposta é e: em “o transitório do eterno”, o adjetivo “transitório” passa a funcionar como substantivo, com artigo, e assume o sentido de “aquilo que é transitório”. Isso é derivação imprópria, ou conversão, sem acréscimo de afixo. Nas demais alternativas, as palavras destacadas mantêm sua classe original, o que descarta a mudança pedida.',
  },
  {
    id: 'lp-classes-qlivro06-47',
    temaId: 'lp-classes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Consulplan - Assistente Administrativo - 2011) Assinale a opção na qual o vocábulo tem o mesmo processo de formação da palavra “endurecimento”.',
    alternativas: ['Descarregar', 'Dentista', 'Pescaria', 'Desalmado', 'Jogador'],
    correta: 3,
    comentario:
      'O gabarito do livro é a letra d, “desalmado”, mas o próprio autor questiona a resposta: “endurecimento” é derivação sufixal (endurecer + -mento), e “desalmado” é tido como parassintético (des- + alma + -ado). Além disso, “dentista”, “pescaria” e “jogador” também são formados por sufixação, o que deixa a questão sem alternativa exata.',
  },
];
