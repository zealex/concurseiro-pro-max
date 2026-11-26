import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 23 — Orações Subordinadas), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C23: QuestaoTreino[] = [
  {
    id: 'lp-periodo-composto-qlivro23-01',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado: '(Empasial - TJ/SP - Oficial de Justiça - 1999) Indique a oração coordenada sindética explicativa:',
    alternativas: [
      'O paciente salvou-se porque não bebia.',
      'Não fui à escola porque fiquei doente.',
      'Não beba, porque você se salvará.',
      'Não posso receber mais inscrições porque não há mais vagas.',
      'Fomos bem recebidos porque trazíamos boas notícias.',
    ],
    correta: 2,
    comentario:
      'A explicativa coordenada costuma vir depois de um imperativo ou de uma ordem, como em “Não beba, porque você se salvará”. Nas demais, o porque introduz a causa de um fato já ocorrido, o que caracteriza oração subordinada adverbial causal.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-02',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Empasial - TJ/SP - Escrevente Judiciário - 1999) Analise sintaticamente a oração em destaque: “Bem-aventurados os que ficam, porque eles serão recompensados”. (Machado de Assis)',
    alternativas: [
      'oração subordinada substantiva completiva nominal.',
      'oração subordinada adverbial causal.',
      'oração subordinada adverbial temporal desenvolvida.',
      'oração coordenada sindética conclusiva.',
      'oração coordenada sindética explicativa.',
    ],
    correta: 4,
    comentario:
      'O porque introduz uma explicação para a afirmação anterior, sem ser complemento nem circunstância de causa da ação de ficar. Por ser uma oração independente ligada pela conjunção explicativa, não é subordinada, o que afasta as alternativas a, b e c. A conclusiva seria iniciada por “portanto” ou “logo”, não por “porque”.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-03',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - EAGS - Sargento - 2003) Observe o termo em destaque no trecho a seguir e assinale a alternativa que traz a correta consideração a seu respeito quanto à justificativa de sua grafia. “Por isso os antigos sabiamente pintaram o amor menino; porque não há amor tão robusto que chegue a ser velho”. (Pe. Antônio Vieira)',
    alternativas: [
      'Trata-se de uma interrogativa indireta.',
      'Porque é uma conjunção explicativa, e somente neste caso justifica-se tal grafia.',
      'Busca-se explicitar o motivo do que se afirma na primeira oração.',
      'A palavra porque introduz um enunciado afirmativo, e, neste caso, fez-se uso de conjunção, seja explicativa, seja causal.',
    ],
    correta: 3,
    comentario:
      'Escrito junto e sem acento, o porque é conjunção, e não pronome interrogativo. Como introduz uma afirmação, pode ser explicativa ou causal, e a grafia não distingue as duas. A alternativa a erra ao falar em interrogativa, e a b restringe o uso à explicativa, o que a própria grafia não permite distinguir.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-04',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB - AFA - Oficial - 2005) Leia o fragmento abaixo transcrito. “Por que Lais não chegou ainda? — Ela não chegou porque o carro que a conduzia quebrou. — Gostaria que ela chegasse logo porque preciso dela aqui!” Os termos destacados devem ser classificados, respectivamente, como:',
    alternativas: [
      'Advérbio; conjunção coordenativa explicativa; conjunção subordinativa causal.',
      'Advérbio; conjunção subordinativa causal; conjunção coordenativa explicativa.',
      'Preposição acidental; conjunção subordinativa causal; conjunção coordenativa conclusiva.',
      'Preposição acidental; conjunção subordinativa causal; conjunção coordenativa explicativa.',
    ],
    correta: 1,
    comentario:
      'O “Por que” interrogativo que abre o fragmento é advérbio de causa. Na primeira resposta, o porque introduz a causa do atraso, o que caracteriza subordinada causal; na segunda, o desejo expresso por “Gostaria” seguido de justificativa é explicativa coordenada. A alternativa b reúne essas duas classificações.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-05',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(Esaf - IRB Brasil Seguros - Analista - 2006) Assinale a opção que apresenta truncamento sintático.',
    alternativas: [
      'Duas pesquisas, divulgadas nos últimos dias, mostram que as políticas sociais e de combate à fome implementadas pelo governo federal começam a apresentar resultados concretos na melhoria das condições de vida do povo brasileiro.',
      'Um estudo da Fundação Getúlio Vargas, intitulado “Miséria em Queda”, baseado em dados da Pesquisa Nacional por Amostra de Domicílio (Pnad), do IBGE, confirmando que a miséria no Brasil caiu em 2004, e atingiu o nível mais baixo desde 1992.',
      'O número de pessoas que estão abaixo da linha da pobreza passou de 27,26% da população, em 2003, para 25,08% em 2004. Em 1992, esse percentual era de 35,87%.',
      'É considerado abaixo da linha da pobreza quem pertence a uma família com renda inferior a R$ 115 mensais, valor considerado o mínimo para garantir a alimentação de uma família. O estudo da FGV mostrou que o índice de miséria no Brasil caiu 8% de 2003 para 2004, deixando o país com a menor proporção de miseráveis desde 1992.',
      'A redução da taxa foi fortemente influenciada pela queda na distância entre os ricos e pobres no Brasil, registrada em três anos consecutivos. Somente em 2004, a desigualdade caiu duas vezes mais do que no ano anterior.',
    ],
    correta: 1,
    comentario:
      'Há truncamento quando uma oração fica sem um termo essencial, como o verbo principal. Na alternativa b, o sujeito “Um estudo...” nunca recebe verbo principal: o gerúndio “confirmando” não basta, e a oração fica incompleta. As demais alternativas têm verbos principais e orações completas.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-06',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(EJEF - TJ/MG - Analista Judiciário - 2007) Assinale a alternativa em que o pronome assinalado NÃO preenche, na frase em que se encontra, a mesma função sintática exercida pelos que estão destacados nas demais frases.',
    alternativas: [
      '“E o universo em que vivemos hoje [...] é [...] diferente do de uma pessoa de 1650.”',
      '“Ela é verdadeira [...] para sacerdotes egípcios que viveram há quatro mil anos.”',
      '“No topo, ficam as verdades absolutas, que transcendem o elemento humano.”',
      '“São as verdades matemáticas, as que podem ser afirmadas categoricamente.”',
    ],
    correta: 0,
    comentario:
      'O método é substituir cada pronome pelo termo a que se refere e comparar a função sintática desse termo nas quatro frases. A alternativa a é a que destoa das demais, com função diferente da dos pronomes destacados nas outras frases. As outras três cumprem a mesma função e, por isso, não podem ser a resposta.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-07',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - Senado Federal - Técnico Legislativo - Administração - 2008) “Mas o fato é que transparência deixou de ser um processo de observação cristalina para assumir um discurso de políticas de averiguação de custos engessadas que pouco ou quase nada retratam as necessidades de populações distintas”. A oração grifada no trecho acima classifica-se como:',
    alternativas: [
      'subordinada substantiva predicativa;',
      'subordinada adjetiva restritiva;',
      'subordinada substantiva subjetiva;',
      'subordinada substantiva objetiva direta;',
      'subordinada adjetiva explicativa.',
    ],
    correta: 0,
    comentario:
      'Quando o sujeito da principal vem com artigo (“O fato”) e a oração completa o verbo de ligação ser, a subordinada é predicativa, e não subjetiva. As alternativas c e d erram por tratar a oração como sujeito ou complemento do verbo, e b e e por classificá-la como adjetiva, que exige antecedente modificado.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-08',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - IRBr - Diplomata - 2009) “Se recebo um presente dado com carinho por pessoa de quem não gosto - como se chama o que sinto? Uma pessoa de quem não se gosta mais e que não gosta mais da gente - como se chama essa mágoa e esse rancor? (...)” Nos segmentos “como se chama o que sinto?” e “e que não gosta mais da gente”, os pronomes relativos exercem a mesma função sintática.',
    gabaritoCE: false,
    comentario:
      'Em “o que sinto”, o relativo “o que” é objeto direto do verbo sinto. Em “que não gosta mais da gente”, o “que” é sujeito do verbo não gosta. Como as funções são diferentes, o item está errado; a substituição do relativo pelo antecedente deixa isso claro.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-09',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV - SEFAZ/RJ - Fiscal de Rendas — 2009) A sociedade não tem lado de fora. O que está fora da sociedade seria desumano, pois ela nada mais é que a relação entre os humanos. A respeito do uso do vocábulo pois no fragmento acima, pode-se afirmar que se trata de:',
    alternativas: [
      'uma conjunção subordinativa que estabelece conexão entre as orações introduzindo valor de explicação;',
      'uma preposição que estabelece conexão entre períodos coordenativos introduzindo valor de consequência;',
      'uma conjunção coordenativa que estabelece conexão entre as orações introduzindo valor de alternância;',
      'um pronome relativo que introduz a oração relativa explicativa, retomando a expressão sociedade;',
      'uma conjunção coordenativa que estabelece conexão entre as orações introduzindo valor de explicação.',
    ],
    correta: 4,
    comentario:
      'O “pois” vem depois de uma afirmação e introduz a explicação do que foi dito: o que está fora da sociedade seria desumano porque a sociedade é a relação entre humanos. Como conjunção coordenativa explicativa, liga orações independentes, o que afasta a alternativa a. As demais atribuem valor de consequência, alternância ou uma função que o vocábulo não tem.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-10',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - DETRAN/AC — Advogado — 2009) O barulho no local era tão alto que o homem, coitado, saiu rápido. Indique o único período que mantém exatamente o mesmo sentido da oração apresentada acima, embora com outra estrutura.',
    alternativas: [
      'Quando o barulho ficou muito alto, o homem coitado saiu rápido.',
      'O homem, que era muito rápido, saiu por causa do barulho tão alto no local.',
      'O homem saiu rápido porque no local o barulho era muito alto. Coitado.',
      'Depois de ouvir um barulho muito alto, o homem rápido saiu.',
      'No local, o barulho, coitado, era tão alto que o homem saiu rápido.',
    ],
    correta: 2,
    comentario:
      'A frase original expressa causa e consequência: o barulho era tão alto que o homem saiu rápido. A alternativa c mantém a mesma relação com outra estrutura, com o barulho como causa. As demais mudam a relação lógica (tempo nas alternativas a e d) ou deslocam o “coitado” para o barulho, o que altera o sentido (e).',
  },
  {
    id: 'lp-periodo-composto-qlivro23-11',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FUNCAB - Pref. Porto Velho/RO - Médico - 2009) No trecho abaixo, as orações introduzidas pelos termos grifados são classificadas, em relação às imediatamente anteriores, como: “Não há dúvida de que precisaremos curtir mais o dia a dia, mas nunca à custa de nossos filhos...”',
    alternativas: [
      'subordinada substantiva objetiva indireta e coordenada sindética adversativa;',
      'subordinada adjetiva restritiva e coordenada sindética explicativa;',
      'subordinada adverbial conformativa e subordinada adverbial concessiva;',
      'subordinada substantiva completiva nominal e coordenada sindética adversativa;',
      'subordinada adjetiva restritiva e subordinada adverbial concessiva.',
    ],
    correta: 3,
    comentario:
      '“Dúvida” é substantivo que pede complemento preposicionado, e a oração “de que precisaremos curtir...” completa esse nome: é completiva nominal. O “mas” liga duas orações independentes com ideia de oposição, o que caracteriza coordenada sindética adversativa. A alternativa a erra ao chamar a primeira de objetiva indireta.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-12',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(TJ/SC - TJ/SC - Analista Jurídico - 2009) Há exemplo de oração subordinada adjetiva restritiva em:',
    alternativas: [
      'Esse fóssil se compõe de exemplares de Paleodictyon nodosum, que, por viverem em condições extremas no fundo dos oceanos, acabaram protegidos dos ciclos predatórios.',
      'O magistrado afirma que os tribunais devem fixar prazo ao Poder competente para a adoção das providências necessárias.',
      'Estuda-se o incentivo fiscal às empresas que, possuindo mais de 20 funcionários, tenham no mínimo 20% de negros em seu quadro profissional.',
      'Quando um ciclone nasce e se desenvolve no Oceano Atlântico, ele é chamado furacão.',
      'A comunicação com o usuário se processa através dos famigerados call centers, cujos serviços são terceirizados.',
    ],
    correta: 2,
    comentario:
      'A restritiva delimita o grupo de empresas (só as que têm mais de 20 funcionários), o que caracteriza a alternativa c. Nas alternativas a e e, a oração vem separada por vírgula e tem valor explicativo; a alternativa d traz oração adverbial temporal; e na b, a oração que se destaca é uma completiva, não adjetiva.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-13',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - ADAGRI/CE - Agente Estadual Agropecuário - 2009) O segmento “que agravam o efeito estufa” (... emissões de gases que agravam o efeito estufa...) constitui oração subordinada adjetiva restritiva.',
    gabaritoCE: true,
    comentario:
      'A oração “que agravam o efeito estufa” delimita quais gases estão em questão, já que nem todos os gases agravam o efeito estufa. Não há vírgula separando a oração, o que confirma a classificação como restritiva. O item está certo.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-14',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - BNDES - Técnico Administrativo - 2010) O pronome relativo que difere dos demais, nos trechos listados abaixo, quanto à função sintática, é:',
    alternativas: [
      '“...que aliado ao conhecimento e habilidades pode transformar-se...”',
      '“...que tiverem atitude e criatividade,”',
      '“...que passaram a existir.”',
      '“...que ninguém está conseguindo ver.”',
      '“...que duvidou e provou o contrário.”',
    ],
    correta: 3,
    comentario:
      'Nas alternativas a, b, c e e, o relativo “que” é sujeito do verbo seguinte (pode, tiverem, passaram, duvidou). Em “que ninguém está conseguindo ver”, o “que” é objeto direto de ver, função diferente das demais.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-15',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - Instituto Rio Branco - Diplomata - 2010) A oração “que se tornariam centrais na produção intelectual e artística do século XX” (Euclides realizara um mapeamento de temas que se tornariam centrais na produção intelectual e artística do século XX) tem, no período em que se insere, sentido explicativo.',
    gabaritoCE: false,
    comentario:
      'A oração restringe o substantivo “temas”, indicando quais temas foram mapeados: é adjetiva restritiva. Para ser explicativa, precisaria vir separada por vírgula e acrescentar um comentário sobre o conjunto de temas, o que não ocorre. O item está errado.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-16',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - EEAR - Controlador de tráfego Aéreo - 2010) Observe: I. ZTw não sei Se vem de Deus Do céu ficar azul II. Se desmorono ou se edifico Se permaneço ou me desfaço, - Não sei, não sei. III. Mundo mundo vasto mundo, Se eu me chamasse Raimundo Seria uma rima, não seria uma solução IV. Meu Deus, por que me abandonaste Se sabias que eu não era Deus Se sabias que eu era fraco. Assinale a alternativa em que todas as afirmações estão corretas.',
    alternativas: [
      'Em IV, há duas orações subordinadas adverbiais condicionais. Em III, há uma oração subordinada adverbial condicional.',
      'Em I, há uma oração subordinada substantiva objetiva direta. Em IV, há duas orações subordinadas adverbiais causais.',
      'Em II, há uma oração subordinada substantiva objetiva direta. Em III, há uma oração subordinada adverbial causal.',
      'Em III, há uma oração subordinada substantiva objetiva direta. Em I, há uma oração subordinada adverbial causal.',
    ],
    correta: 1,
    comentario:
      'Em I, o verbo “não sei” pede complemento introduzido por “se”, o que forma uma oração objetiva direta. Em IV, “por que me abandonaste” e “se sabias” expressam causa. A alternativa b é a única que combina corretamente essas classificações.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-17',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Cesgranrio - Eletrobras Eletronuclear - Analista (Meteorologia) — 2010) “Se falharmos aí, trairemos o compromisso com a saúde e com a vida do planeta”. A primeira oração do período, destacada acima, liga-se à segunda oração, estabelecendo uma relação de sentido. A relação de sentido entre as orações é de:',
    alternativas: ['comparação;', 'proporção;', 'conformidade;', 'condição;', 'finalidade.'],
    correta: 3,
    comentario:
      'A oração iniciada por “se”, com verbo no futuro do subjuntivo, expressa uma hipótese da qual depende o que acontecerá na segunda oração. Trata-se de condição. Comparação, proporção, conformidade e finalidade exigiriam outros conectivos, como “como”, “à medida que”, “conforme” e “para que”.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-18',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - TJ/SP - Escrevente Técnico Judiciário - 2010) A alternativa que reescreve corretamente o período “É preciso ensaiar para não fazer em campo apenas as jogadas ensaiadas” iniciando-o com a ideia de finalidade, é:',
    alternativas: [
      'Para que não se façam em campo apenas jogadas ensaiadas, é preciso ensaiar.',
      'Embora não se façam em campo apenas jogadas ensaiadas, é preciso ensaiar.',
      'Ainda que não se façam em campo apenas jogadas ensaiadas, é preciso ensaiar.',
      'Por mais que não se façam em campo apenas jogadas ensaiadas, é preciso ensaiar.',
      'Contanto que não se façam em campo apenas jogadas ensaiadas, é preciso ensaiar.',
    ],
    correta: 0,
    comentario:
      'A finalidade é expressa por “para que” seguido de subjuntivo, mantendo a ideia de objetivo do ensaio. As demais locuções expressam concessão (embora, ainda que, por mais que) ou condição (contanto que), o que altera o sentido do período.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-19',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp - TJ/SP - Agente de Fiscalização Judiciária - 2010) Considere este trecho “os brasileiros são obrigados a ser mais flexíveis com os horários porque a infraestrutura não ajuda”. A oração que tem a mesma natureza sintática da oração subordinada “porque a infraestrutura não ajuda” é:',
    alternativas: [
      'uma vez que a infraestrutura não ajuda;',
      'embora a infraestrutura não ajude;',
      'a infraestrutura, pois, não ajuda;',
      'muitas vezes a infraestrutura não ajuda;',
      'como a infraestrutura não ajuda.',
    ],
    correta: 0,
    comentario:
      'A oração “porque a infraestrutura não ajuda” é adverbial causal, e “uma vez que” é a locução causal de mesma natureza. A alternativa b é concessiva, e a c usa “pois”, conjunção coordenativa explicativa que não subordina nada. Na d, “muitas vezes” é adjunto adverbial, e não oração.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-20',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(ACEP - Pref. Quixadá/CE - Psicólogo - 2010) No período “O essencial é o seguinte: //nunca antes neste país houve um governo tão imbuído da ideia // de que veio // para recomeçar a história”, a oração sublinhada é classificada como:',
    alternativas: [
      'coordenada assindética;',
      'subordinada substantiva completiva nominal;',
      'subordinada substantiva objetiva indireta;',
      'subordinada substantiva apositiva.',
    ],
    correta: 1,
    comentario:
      'A oração “de que veio” completa o substantivo “ideia”, que exige complemento preposicionado, por isso é completiva nominal. A objetiva indireta completaria um verbo, e a apositiva viria explicando um termo, separada por dois-pontos ou travessão. A alternativa a está errada porque há conectivo subordinativo.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-21',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNCAB - SESAP/RN - Médico - 2010) A oração grifada em: “...e até mesmo em locais ao ar livre, caso se comprove que a fumaça não se dispersa com facilidade”, classifica-se como subordinada:',
    alternativas: [
      'substantiva subjetiva;',
      'substantiva objetiva direta;',
      'substantiva completiva nominal;',
      'adjetiva restritiva;',
      'adjetiva explicativa.',
    ],
    correta: 0,
    comentario:
      'No “se comprove”, o verbo está na voz passiva sintética, e a oração “que a fumaça não se dispersa com facilidade” é o sujeito dele: é substantiva subjetiva. Como não há um nome que peça complemento nem um antecedente modificado, as alternativas c, d e e não se aplicam.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-22',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(MPE/SC - MPE/SC — Promotor de Justiça — 2010) (Adaptada) Julgue a afirmativa abaixo: Imponho-lhe somente um objetivo: que administre bem o patrimônio público. O sinal de dois pontos foi usado para separar uma oração subordinada substantiva apositiva, tal como pode ocorrer com o aposto.',
    gabaritoCE: true,
    comentario:
      'A oração “que administre bem o patrimônio público” explica o termo “um objetivo” e vem depois de dois-pontos, como ocorre com o aposto. Ela é substantiva apositiva, e a afirmativa está correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-23',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FGV - SEFAZ/RJ - Fiscal de Rendas — 2010) (Adaptada) Vê-se, pois, que o plano ético permeia todas as ações humanas. Com relação à frase transcrita e a análise sintática tradicional, considere a afirmativa a seguir. I. O vocábulo que é uma conjunção integrante e presta-se a articular a oração subjetiva ao núcleo verbal que a subordina.',
    gabaritoCE: true,
    comentario:
      'Nessa frase, o “que” é conjunção integrante, sem função sintática própria: apenas liga a oração “que o plano ético permeia todas as ações humanas” ao verbo “Vê-se”, que a subordina. A oração é subjetiva, e a afirmativa está correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-24',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - TJ/ES — Cargos de Nível Superior — 2011) No desenvolvimento da argumentação do texto, a oração “A semana terminou sem que estivesse claro o futuro político do maior aliado dos Estados Unidos da América (EUA)” expressa circunstância de causa em relação à oração que a antecede.',
    gabaritoCE: false,
    comentario:
      'A locução “sem que” inicia oração adverbial modal, que indica o modo como a semana terminou (sem clareza), e não a causa. Por isso o item está errado, e a pegadinha está em confundir a modal com a causal.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-25',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — CBM/DF — Bombeiro — 2011) O trecho “que a bactéria em questão — Escherichia coli - somente é transmitida a um cultivo quando, nele, estão presentes fezes - animais ou humanas” exerce a função de sujeito da locução “É sabido”.',
    gabaritoCE: true,
    comentario:
      'Em “É sabido que...”, o predicado é formado por verbo de ligação e adjetivo, e a oração introduzida por “que” é o sujeito desse predicado: oração substantiva subjetiva. Por isso o item está correto.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-26',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB — CBM/DF — Bombeiro — 2011) A oração “que pôs a Europa em estado de emergência médica” (A bactéria que pôs a Europa em estado de emergência médica...) tem caráter explicativo e, por isso, poderia ser empregada entre vírgulas, mantendo-se a correção gramatical e o sentido original do texto.',
    gabaritoCE: false,
    comentario:
      'A oração delimita qual bactéria está em questão, já que há outras bactérias: é adjetiva restritiva. Colocá-la entre vírgulas a transformaria em explicativa e alteraria o sentido original do texto. Por isso o item está errado.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-27',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(AOCP - BRDE — Analista de Sistemas — 2012) “Não implica, tampouco, autoconsciência crítica ou consciência histórica, nem a necessidade de identificar se existe uma tendência”. No fragmento anterior, as orações de identificar e se existe uma tendência são, respectivamente:',
    alternativas: [
      'oração subordinada substantiva objetiva direta e oração subordinada substantiva objetiva direta;',
      'oração subordinada substantiva completiva nominal e oração subordinada substantiva objetiva direta;',
      'oração subordinada substantiva objetiva indireta e oração subordinada adverbial condicional;',
      'oração subordinada substantiva completiva nominal e oração subordinada adverbial condicional;',
      'oração subordinada substantiva objetiva indireta e oração subordinada substantiva objetiva direta.',
    ],
    correta: 1,
    comentario:
      'A oração “identificar” completa o substantivo “necessidade”, que pede complemento preposicionado, por isso é completiva nominal. Já “se existe uma tendência” é o objeto direto de identificar, com a conjunção integrante “se”: objetiva direta.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-28',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fadems - TJ/MS - Analista Judiciário - 2012) A alternativa que traz a análise correta da oração “por que ‘velho’ é politicamente incorreto”, em “Não entendo por que ‘velho’ é politicamente incorreto”, é:',
    alternativas: [
      'subordinada substantiva objetiva direta;',
      'subordinada adverbial causal;',
      'subordinada adjetiva explicativa;',
      'subordinada substantiva predicativa;',
      'coordenada sindética explicativa.',
    ],
    correta: 0,
    comentario:
      'O verbo “entendo” pede um complemento, e a oração “por que ‘velho’ é politicamente incorreto” ocupa esse lugar, como objeto direto. Não há valor de causa, porque a oração não explica o fato principal, o que afasta a alternativa b. As demais classificações exigem outra relação sintática.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-29',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB - AFA - Oficial - 2012) As palavras abaixo destacadas foram utilizadas para introduzir orações subordinadas substantivas. Porém, em somente uma opção, essa relação sintática foi estabelecida por uma conjunção integrante própria. Assinale-a.',
    alternativas: [
      '“Impressiona-me como se formam conceitos, são opiniões, baseados em estatísticas...”',
      '“Parece haver uma disputa para saber quem dá mais informações e estatísticas...”',
      'Estou sem paciência para assistir a tantas partidas tumultuadas no Brasil.',
      '“Na partida entre Escócia e Brasil, um repórter da TV Globo deu a ‘grande notícia’, que Neymar foi o primeiro jogador brasileiro...”',
    ],
    correta: 3,
    comentario:
      'Em d, o “que” é conjunção integrante própria e introduz a oração “Neymar foi o primeiro jogador brasileiro”, que completa “grande notícia”. Nas demais, o conectivo é um pronome ou advérbio interrogativo (como, quem), ou nem há oração substantiva, como em c.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-30',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - TCDF - Auditor de Controle Externo - 2012) Fragmento de texto: “(...) A primeira convicção política incutida em meu espírito foi que o município não tinha recursos, e que por esse motivo andava descalço, ou devia o calçado; (...)”. A “primeira convicção política” do narrador é constituída, de fato, por duas convicções, que completam o sentido da forma verbal “foi”: “que o município não tinha recursos” e “que por esse motivo andava descalço, ou devia o calçado”.',
    gabaritoCE: false,
    comentario:
      'O item está errado: as duas orações não completam o verbo “foi” como complementos independentes, mas formam o predicativo do sujeito (“A primeira convicção política”), ligadas pelo “e”. O item confunde a função de predicativo com a de complemento verbal.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-31',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — PC/CE — Inspetor - 2012) No trecho “É verdade que a CE vem desenvolvendo novas formas políticas”, o emprego da forma verbal singular “É” justifica-se pelo fato de essa forma verbal não ter sujeito explícito.',
    gabaritoCE: false,
    comentario:
      'A forma “É” fica no singular porque o sujeito é a oração subjetiva “que a CE vem desenvolvendo novas formas políticas”, e não porque falta sujeito. A justificativa do item está errada, ainda que a concordância no singular esteja correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-32',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - IRBr - Diplomata - 2012) Na linha 12 (Ficava no canto da maloca, trepado no jirau de paxiúba, espiando o trabalho dos outros e principalmente os dois manos que tinha), a oração “que tinha”, sintática e semanticamente dispensável para o texto, caracteriza-se por ter um pronome relativo como sujeito sintático.',
    gabaritoCE: false,
    comentario:
      'Em “os dois manos que tinha”, o relativo “que” retoma “manos” e é objeto direto do verbo ter (ele tinha os dois manos), e não sujeito. Por isso o item está errado, ainda que a oração seja dispensável no texto.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-33',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNCAB - MPE/RO — Analista (ADM) — 2012) Em “(...) Garanto: naquela região se operam, de fato, milagres QUE SALVAM VIDAS DIARIAMENTE. (...)”, a oração em destaque classifica-se como:',
    alternativas: [
      'subordinada substantiva subjetiva;',
      'subordinada substantiva predicativa;',
      'coordenada sindética explicativa;',
      'subordinada adjetiva restritiva;',
      'subordinada adjetiva explicativa.',
    ],
    correta: 3,
    comentario:
      'O “que” retoma “milagres” e é sujeito de “salvam”. A oração restringe o sentido de “milagres” (apenas os que salvam vidas) e não vem separada por vírgula, o que a torna adjetiva restritiva. A explicativa comentaria todos os milagres, o que não é o caso.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-34',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Dom Cintra - Pref. Itaboraí/RJ - Agente de Adm. Previdenciária — 2012) “...as mudanças feitas por ele no planeta têm sido tão rápidas que agora elas ameaçam não só a humanidade mas também muitas espécies...”; a oração negritada mostra a ideia de:',
    alternativas: ['consequência;', 'comparação;', 'concessão;', 'modo;', 'causa.'],
    correta: 0,
    comentario:
      'A oração “que agora elas ameaçam...” exprime o efeito da rapidez das mudanças, introduzida pelo “tão... que”, o que caracteriza consequência. Comparação exigiria “como” ou “do que”; concessão, “embora”; e causa, “porque”. Por isso a alternativa a é a correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-35',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FUNDEP - GASMIG - Técnico em Administração - 2012) “[...] aceleram novas descobertas que, por sua vez, servem de ferramenta [...]”. Considerando o pronome sublinhado nessa frase, é correto afirmar que ele exerce a função sintática de:',
    alternativas: [
      'sujeito indeterminado;',
      'sujeito inexistente;',
      'sujeito oculto;',
      'sujeito simples.',
    ],
    correta: 3,
    comentario:
      'O pronome relativo “que” retoma “novas descobertas” e funciona como sujeito do verbo “servem”. Por ter um único núcleo, é sujeito simples. Sujeito indeterminado, inexistente e oculto não se aplicam, já que há sujeito expresso pelo relativo.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-36',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe - STF - Analista Judiciário - 2013) A oração introduzida pelo pronome “que” (“... e eu recomeçava na rua a andar pulando, que era o meu modo estranho de andar pelas ruas de Recife”) tem caráter restritivo, visto que especifica a ação expressa pela locução “andar pulando”.',
    gabaritoCE: false,
    comentario:
      'A oração “que era o meu modo estranho de andar” acrescenta um comentário sobre a ação, sem limitar um conjunto de possibilidades: é explicativa, e vem separada por vírgula. Por isso o item está errado.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-37',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(IDECAN - DETRAN/RO - Administrador - 2014) Relacione adequadamente a classificação das orações subordinadas substantivas às respectivas orações. (1) Subjetiva. (2) Objetiva direta. (3) Objetiva indireta. (4) Completiva nominal. (5) Predicativa. (6) Apositiva. ( ) Cada situação permite que se aprenda algo novo. ( ) Só quero uma coisa: que tires a tua carteira. ( ) Tenho esperança de que o trânsito melhore. ( ) É importante que todos colaborem. ( ) Meu desejo é que sejas classificado. ( ) Lembrei-me de que já estava errado. A sequência está correta em:',
    alternativas: ['1, 6, 3, 5, 2, 4.', '2, 6, 4, 1, 5, 3.', '1, 2, 3, 4, 5, 6.', '6, 5, 4, 3, 2, 1.', '2, 6, 4, 1, 3, 5.'],
    correta: 1,
    comentario:
      'Na ordem das frases, a sequência é 2, 6, 4, 1, 5, 3. “Permite que se aprenda” é objetiva direta; “que tires a tua carteira” explica “uma coisa”, sendo apositiva; “esperança de que” é completiva nominal; “É importante que” é subjetiva; “Meu desejo é que” é predicativa; e “Lembrei-me de que” é objetiva indireta.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-38',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - SEFAZ/PE — Auditor Fiscal do Tesouro Estadual — 2014) “Não obstante, se não houvesse nele profundidade de pensamento, lirismo, ternura, seria levado por esse processo de criação à vulgaridade dos artistas medíocres que condescendem com o fácil gosto do público”. Na frase acima, a oração subordinada destacada tem valor:',
    alternativas: ['condicional.', 'conformativo.', 'adversativo.', 'concessivo.', 'explicativo.'],
    correta: 0,
    comentario:
      'A oração “se não houvesse nele profundidade de pensamento...” apresenta uma hipótese, da qual depende o resultado da principal: é condicional. Conformativo exigiria “conforme” ou “como”; adversativo e concessivo, “mas”, “embora” ou “ainda que”; e explicativo, “porque” ou “que”.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-39',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe - TCE/RN - Engenheiro Civil - 2015) A oração “que os consultores apresentaram regime de trabalho incompatível com a realidade” funciona como complemento da forma verbal “constatou-se” (“constatou-se que os consultores apresentaram regime de trabalho incompatível com a realidade”).',
    gabaritoCE: false,
    comentario:
      'Em “constatou-se que...”, o “se” é partícula apassivadora, e a oração é o sujeito da voz passiva: substantiva subjetiva, e não complemento. Por isso o item está errado.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-40',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Quadrix - CRMV/TO - Assistente Administrativo — 2016) O primeiro verso do poema é uma oração inteira: “QUANDO EU TINHA SEIS ANOS / Ganhei um porquinho-da-índia”. Assinale a alternativa que a classifique corretamente.',
    alternativas: [
      'Oração subordinada adverbial causal.',
      'Oração coordenada sindética explicativa.',
      'Oração subordinada adverbial condicional.',
      'Oração coordenada sindética temporal.',
      'Oração subordinada adverbial temporal.',
    ],
    correta: 4,
    comentario:
      '“Quando eu tinha seis anos” indica o tempo em que ocorre a ação da principal, por isso é subordinada adverbial temporal, introduzida pela conjunção “quando”. Não é coordenada, pois depende da oração principal, e não expressa causa nem condição.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-41',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Pref. RJ - Assistente Administrativo — 2016) A conjunção “porque” tem diferentes valores. No segmento “No entanto, ali na praia do Pinto é evidente que as crianças estão desnutridas, pálidas, magras, roídas de verminoses. Por quê? PORQUE seus pais não sabem selecionar o leite e o queijo entre os principais alimentos”, ela tem o mesmo valor que apresenta na seguinte frase:',
    alternativas: [
      'As pessoas alimentam-se mal também porque não têm recursos.',
      'Mude a sua alimentação, porque isso lhe fará bem.',
      'Devemos adotar medidas sérias porque essa situação se modifique.',
      'A crítica ao nosso descuido com a alimentação é justa, porque isso até saiu no jornal.',
    ],
    correta: 0,
    comentario:
      'No segmento do enunciado, o “PORQUE” responde ao “Por quê?” e introduz a causa do estado das crianças. A alternativa a tem o mesmo valor causal. As alternativas b e d trazem “porque” explicativo, que justifica uma ordem ou uma opinião, e a c traz valor final.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-42',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - TRF 1ª R — Cargos de Nível Médio — 2017) Fragmento de texto: “Para o filósofo grego, o papel do educador é, portanto, o de ajudar o discípulo a caminhar nesse sentido, despertando sua cooperação para que ele consiga, por si próprio, iluminar sua inteligência e sua consciência.” O trecho “para que ele consiga, por si próprio, iluminar sua inteligência e sua consciência” expressa uma condição em relação à oração “despertando sua cooperação”.',
    gabaritoCE: false,
    comentario:
      'A oração “para que ele consiga...” expressa finalidade, indicando o objetivo de despertar a cooperação. Para ser condicional, precisaria de “se” ou de outra conjunção de hipótese. Por isso o item está errado.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-43',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(INSTITUTO AOCP - ITEP/RN - Agente de Necrópsia - 2018) Em relação ao excerto “As famílias que têm idosos acamados enfrentam desafios ainda maiores quando não encontram suporte e orientação nos sistemas de saúde”, é correto afirmar que há, dentre outras, uma oração',
    alternativas: [
      'subordinada adjetiva restritiva.',
      'subordinada adverbial concessiva introduzida por uma conjunção.',
      'subordinada objetiva indireta complementando sintaticamente um verbo.',
      'subordinada substantiva predicativa.',
      'subordinada adjetiva explicativa.',
    ],
    correta: 0,
    comentario:
      'A oração “que têm idosos acamados” restringe o sentido de “famílias”, pois fala apenas das famílias com idosos acamados, e não vem separada por vírgula. A oração “quando não encontram...” é adverbial temporal, não concessiva, e o excerto não traz objetiva indireta nem predicativa.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-44',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(CESPE - SEFAZ/RS — Auditor Fiscal da Receita Estadual — 2019) A oração “se o Estado reduzisse a tributação de determinado setor da economia, os custos desse setor diminuiriam” apresenta, no período em que se insere, noção de',
    alternativas: [
      'concessão, uma vez que representa uma exceção às regras de tributação do país.',
      'explicação, uma vez que esclarece uma ação que diminuiria os custos do referido setor.',
      'proporcionalidade, uma vez que os custos do referido setor diminuiriam à medida que se diminuísse a tributação.',
      'tempo, uma vez que a diminuição dos custos do referido setor ocorreria somente após a redução da tributação sobre ele.',
      'condição, uma vez que a diminuição dos custos do referido setor dependeria da redução da tributação sobre ele.',
    ],
    correta: 4,
    comentario:
      'A oração iniciada por “se” expressa uma hipótese: a diminuição dos custos depende de o Estado reduzir a tributação. Isso é condição. As demais noções (concessão, explicação, proporcionalidade e tempo) não descrevem essa relação de dependência.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-45',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRT/15ª R — Técnico Judiciário - Área Administrativa — 2018) O segmento destacado em “pontos de partida, sobre os quais o aprendizado e a experiência podem agir” possui função equivalente ao que se encontra destacado em:',
    alternativas: [
      'investigar, por exemplo, a ativação em seu cérebro enquanto ele mesmo pensa',
      'homens possuem em média uns quatro bilhões de neurônios a mais',
      'Essa diferença casa bem com observações da psicologia',
      'por que bocejo contagia, se café vicia, o endereço do senso de humor',
      'Muitos se queixam da ausência de uma teoria da mente satisfatória',
    ],
    correta: 4,
    comentario:
      'A oração “sobre os quais o aprendizado e a experiência podem agir” é adjetiva, e funciona como adjunto adnominal de “pontos de partida”. Na alternativa e, o adjetivo “satisfatória” também funciona como adjunto adnominal de “teoria da mente”, por isso é a equivalente.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-46',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(INSTITUTO AOCP - Prefeitura de Betim/MG - Auditor Fiscal de Tributos Municipais - 2020) Assinale a alternativa que classifica corretamente a oração subordinada do trecho “[...] quanto mais longe enxergamos, mais ao passado voltamos”.',
    alternativas: [
      'Oração subordinada adverbial proporcional.',
      'Oração subordinada adverbial consecutiva.',
      'Oração subordinada substantiva objetiva direta.',
      'Oração subordinada substantiva completiva nominal.',
      'Oração subordinada adjetiva restritiva.',
    ],
    correta: 0,
    comentario:
      'A locução “quanto mais” inicia uma oração que indica proporção: à medida que enxergamos mais longe, voltamos mais ao passado. Não há efeito de intensidade que caracterize consecutiva, e o “quanto” não é relativo nem integrante, o que afasta as demais alternativas.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-47',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - SEDUC-AL - Professor de Português — 2021) Em “se a literatura francesa é particularmente importante, isso não quer dizer que a língua francesa seja superior às outras línguas para a expressão literária”, a conjunção se introduz uma oração subordinada adverbial condicional.',
    gabaritoCE: true,
    comentario:
      'O “se” inicia a oração “se a literatura francesa é particularmente importante”, que expressa uma hipótese da qual depende a afirmação da principal. Trata-se de oração adverbial condicional, e o item está correto.',
  },
  {
    id: 'lp-periodo-composto-qlivro23-48',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(CESPE - DPE-RS — Defensor Público — 2022) No trecho “Um registro de mutações ligadas ao mundo eletrônico se refere ao que chamo de a ordem das propriedades”, o verbo “chamar”, que está empregado com o mesmo sentido de classificar, denominar, tem dois complementos: um direto, que está elíptico, e outro indireto, que é o termo “de a ordem das propriedades”.',
    gabaritoCE: false,
    comentario:
      'Com o sentido de denominar, “chamar” é transitivo direto e predicativo (chamar algo de algo). Por isso “de a ordem das propriedades” é predicativo do objeto, e não complemento indireto. O item está errado.',
  },
];
