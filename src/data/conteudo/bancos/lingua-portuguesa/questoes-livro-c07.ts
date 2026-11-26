import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 07 — Substantivo), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C07: QuestaoTreino[] = [
  {
    id: 'lp-nomes-qlivro07-01',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(NCE/UFRJ - TRT/9R - Técnico Judiciário - 1998) Fragmento de texto: (...) Mais adiante, para não achincalhar a todos, indistintamente, com a pecha infamante de “subdesenvolvido”, premiou-se os melhores com o gentil “em desenvolvimento”. Tais países não eram mais “sub”, não estavam mais tão por baixo. Nos últimos anos, substituiu-se o “em desenvolvimento” por “emergente”, palavra que igualmente se opõe ao “sub”. (...) A expressão “em desenvolvimento” apresenta valor:',
    alternativas: ['adjetivo', 'substantivo', 'adverbial', 'prepositivo', 'conjuntivo'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: a expressão “em desenvolvimento” está substantivada, pois recebe determinantes como “o” e “o gentil”, e passa a nomear um conceito, como faria qualquer substantivo. As demais classes não se aplicam, já que a expressão não modifica um nome como adjetivo, não modifica um verbo como advérbio e não liga termos como conjunção ou preposição.',
  },
  {
    id: 'lp-nomes-qlivro07-02',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB - EAGS - Sargento da Aeronáutica - 2010) Observe: José,____ testemunha, chegou ao tribunal com_____ sósia como acompanhante e também com_____champanha embaixo do braço. Resolveu dar____ telefonema surpreendente, ocasião em que tropeçou, obtendo_____entorse no joelho. Qual alternativa preenche correta e respectivamente as lacunas do texto acima?',
    alternativas: ['o, o, o, um, uma', 'o, a, a, uma, um', 'a, o, o, um, uma', 'a, a, a, uma, um'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “a testemunha” usa o artigo feminino, já que “testemunha” é comum de dois gêneros e o artigo indica o gênero do referente; “o champanha” é masculino; “um telefonema” é masculino; e “uma entorse” é feminino. As demais trocam o gênero de algum substantivo, como em “o testemunha”, “a champanha”, “uma telefonema” ou “um entorse”.',
  },
  {
    id: 'lp-nomes-qlivro07-03',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(NCE/UFRJ — UFRJ — Técnico em Farmácia — 2009) “...vive pertinho do céu”; o valor do diminutivo no vocábulo sublinhado se repete em:',
    alternativas: [
      'A favela é um lugarzinho bonito.',
      'Os barracõezinhos das favelas cariocas são coloridos.',
      'A subida para os morros está coberta de papeizinhos.',
      'A polícia chegou rapidinho ao morro.',
      'A lourinha ganhou o concurso de beleza.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: em “rapidinho”, o sufixo -inho intensifica o advérbio, como em “pertinho” (muito perto), sem trazer valor afetivo. Nas demais, o diminutivo vem em substantivos e indica afetividade (“lugarzinho”, “barracõezinhos”) ou pequenez (“papeizinhos”), e a alternativa E não traz diminutivo com intensificação.',
  },
  {
    id: 'lp-nomes-qlivro07-04',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(MPE-RJ (NCE) — Corregedoria Geral da Justiça/RJ — 1998) “Consistem meramente de demarcações...”; o vocábulo demarcação tem seu plural corretamente formado no texto. O item abaixo em que há um vocábulo cuja forma plural é unanimemente considerada como equivocada é:',
    alternativas: [
      'escrivães — tabeliães — cidadãos',
      'aldeãos — aldeões — aldeães',
      'artesãos — camaleões — vulcões',
      'artesões — corrimãos — verões',
      'guardiões — guardiães — charlatãos',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “charlatãos” é plural errado, pois o plural de charlatão segue o modelo de capitão (charlatães), e não o de irmão (irmãos). As formas “guardiões” e “guardiães” são ambas usadas na norma, de modo que o erro está em “charlatãos”.',
  },
  {
    id: 'lp-nomes-qlivro07-05',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FGV - SPTrans - Especialista em Transporte - 2001) Os substantivos “prancheta, lobaz, muralha, nódulo” estão, respectivamente, nos graus:',
    alternativas: [
      'aumentativo, aumentativo, diminutivo, aumentativo',
      'diminutivo, diminutivo, aumentativo, aumentativo',
      'diminutivo, aumentativo, aumentativo, diminutivo',
      'aumentativo, diminutivo, diminutivo, aumentativo',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “prancheta” é diminutivo de “prancha”, “lobaz” traz o sufixo aumentativo -az, “muralha” é aumentativo de “muro” e “nódulo” é diminutivo de “nó”. Nas demais, pelo menos um dos substantivos recebe um grau trocado, o que não corresponde à formação de cada palavra.',
  },
  {
    id: 'lp-nomes-qlivro07-06',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(MP-RJ - Secretário de Promotoria e Curadoria I - 2002) "...por que passam milhões de crianças brasileiras...”; observe as formas abaixo: I. as milhões de crianças brasileiras. II. os milhões de crianças brasileiras. III. as milhares de crianças brasileiras. IV. os milhares de crianças brasileiras. As formas corretas são somente:',
    alternativas: ['I-II', 'I-III', 'II-IV', 'III-IV', 'I-II-III-IV'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “milhão” e “milhar” são substantivos masculinos, por isso pedem o artigo “os” (II e IV). As formas com o artigo feminino “as” (I e III) estão erradas, porque o artigo deve concordar com o gênero masculino dos dois substantivos.',
  },
  {
    id: 'lp-nomes-qlivro07-07',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(NCE/UFRJ - MPE/RJ - Secretário de Procuradoria - 2002) A frase em que a substituição do verbo pelo substantivo cognato correspondente é feita de forma INCORRETA é:',
    alternativas: [
      '“Compreender como usar nossa força para superar nossa fraqueza...” — A compreensão de como usar nossa força para a superação de nossa fraqueza.',
      '“Estão prontas para crescer quando assegurarmos as condições para diminuir os juros e para simplificar os tributos.” — Estão prontas para o crescimento quando assegurarmos as condições para a diminuição dos juros e para a simplicidade dos tributos.',
      '“E nossos bancos, entre os mais eficientes do mundo, têm tudo para mudar de ramo, passando a financiar a produção.” — E nossos bancos, entre os mais eficientes do mundo, têm tudo para a mudança de ramo, passando ao financiamento da produção.',
      '“Nossas instituições ainda não estão organizadas para apoiar esse impulso construtivo.” — Nossas instituições ainda não estão organizadas para o apoiamento desse impulso construtivo.',
      '“...dá sinais de optar por ideal pequeno-burguês.” — dá sinais de opção por ideal pequeno-burguês.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a incorreta: o substantivo cognato de “simplificar” é “simplificação”, e não “simplicidade”, que é outra palavra, de sentido diferente. As demais trocas respeitam o sentido do verbo, como “compreender” por “compreensão”, “mudar” por “mudança” e “financiar” por “financiamento”.',
  },
  {
    id: 'lp-nomes-qlivro07-08',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT (20R) - Técnico Judiciário - 2002) Assinale a frase em que o plural do substantivo composto está INCORRETO:',
    alternativas: [
      'Os brasileiros não são cucas-frescas, como se pensa.',
      'Esses são pontos-chave para evitar o nervosismo.',
      'São coletes salvam-vidas contra os fatores de stress.',
      'Os chefes são geralmente todo-poderosos no serviço.',
      'As causas de sofrimento não são simples lugares-comuns.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a incorreta: em “salva-vidas”, o primeiro elemento é uma forma verbal e fica invariável, por isso o correto é “coletes salva-vidas”, e não “salvam-vidas”. As demais estão de acordo com a regra de flexão dos compostos, como em “cucas-frescas”, “todo-poderosos” e “lugares-comuns”.',
  },
  {
    id: 'lp-nomes-qlivro07-09',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT (5R) - Auxiliar Judiciário - 2003) Na época em que alguns trabalhadores recebiam suas..... não existiam os......... ',
    alternativas: [
      'meia-tigelas - vale-refeições',
      'meia-tigelas - valem-refeição',
      'meias-tigelas - vales-refeições',
      'meias-tigelas - valem-refeições',
      'meias-tigela - vales-refeição',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: em “meias-tigelas”, os dois elementos vão ao plural, pois “meia” funciona como adjetivo; em “vales-refeições”, os dois substantivos se flexionam. As demais erram ao usar a forma verbal “valem” no lugar do substantivo “vale” ou ao deixar um dos elementos no singular.',
  },
  {
    id: 'lp-nomes-qlivro07-10',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Cesgranrio - MPE/RO - Analista de Sistemas - 2005) Dentre os plurais dos nomes compostos, o único flexionado de modo adequado é:',
    alternativas: ['guarda-chuvas', 'olhos azuis-turquezas', 'escolas-modelos', 'surdo-mudos', 'pores-dos-sóis'],
    correta: 0,
    comentario:
      'A alternativa A é a correta: em “guarda-chuva”, o verbo “guarda” é invariável e só o substantivo “chuva” vai ao plural. As demais erram na flexão: “surdo-mudo” pede “surdos-mudos”, e “pôr-do-sol” pede “pores-do-sol”, sem o artigo flexionado.',
  },
  {
    id: 'lp-nomes-qlivro07-11',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT/MS (24R) - Auxiliar Judiciário - 2006) O município de Bonito é exemplo de preservação de suas belezas naturais, com...... de visão magnífica, verdadeiros...........',
    alternativas: [
      'quedas d’água - cartões-postal',
      'quedas d’água - cartões-postais',
      'queda d’águas - cartões-postais',
      'quedas d’água - cartão-postais',
      'queda d’água - cartão-postais',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: em “quedas d’água”, o núcleo “queda” vai ao plural e “água” fica no singular; em “cartões-postais”, o substantivo “cartão” e o adjetivo “postal” se flexionam. As demais erram no número de “queda”, de “água” ou de “cartão”, como em “cartão-postal”, que deveria estar no plural.',
  },
  {
    id: 'lp-nomes-qlivro07-12',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(NCE/UFRJ - Eletrobras - Letras (Espanhol) - 2007) O vocábulo telefonema pertence ao gênero masculino, como mostra o texto. A alternativa abaixo que mostra um substantivo do gênero feminino é:',
    alternativas: ['champanha / clã', 'mármore / guaraná', 'apetite / suéter', 'pijama / saca-rolhas', 'milhar / cal'],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “cal” é substantivo feminino (a cal), enquanto “milhar” é masculino. As demais reúnem apenas substantivos masculinos, como “clã”, “mármore”, “suéter” e “pijama”, por isso não mostram um feminino.',
  },
  {
    id: 'lp-nomes-qlivro07-13',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Instituto Ludus - CRO — Auxiliar de Serviços Gerais - 2008) Quantos substantivos há no período “Um anjo de asas azuis, todo vestido de luz, sussurrou-lhe num segredo os mistérios de outra vida”?',
    alternativas: ['seis', 'cinco', 'quatro', 'sete', 'três'],
    correta: 0,
    comentario:
      'A alternativa A é a correta: os substantivos são “anjo”, “asas”, “luz”, “segredo”, “mistérios” e “vida”, totalizando seis. As demais contagens deixam de fora algum desses nomes ou incluem palavras como “azuis” e “vestido”, que são adjetivos.',
  },
  {
    id: 'lp-nomes-qlivro07-14',
    temaId: 'lp-nomes',
    formato: 'certo-errado',
    dificuldade: 2,
    gabaritoCE: true,
    enunciado:
      '(Cespe — Instituto Rio Branco — Diplomata — 2008) Fragmento de texto: O soldado e o marinheiro permutaram bofetadas, mais ou menos teóricas, numa esquina de minha rua por causa da namorada comum, que devia chamar-se Marlene. O duelo durou vinte minutos, e cinquenta pessoas assistiram. (...) Acerca dos sentidos e dos elementos de coesão e de referenciação presentes no texto, julgue (C ou E) os itens subsequentes. O substantivo “duelo” resume, com certa dose de ironia, o episódio narrado no primeiro período do texto.',
    comentario:
      'O item está certo: “duelo” é um substantivo resumitivo, que retoma em uma só palavra toda a briga do primeiro período. A ironia vem do contraste entre a palavra formal e uma briga feita de bofetadas, o que o próprio texto sugere ao falar em “mais ou menos teóricas”.',
  },
  {
    id: 'lp-nomes-qlivro07-15',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado: '(Cesgranrio — Casa da Moeda — Advogado — 2009) Há três substantivos em:',
    alternativas: [
      '“... com sérias dificuldades financeiras”',
      '“... não conseguiu prever nem a crise econômica atual”',
      '“... vai tornar inúteis arquivos e bibliotecas”',
      '“... precisa da confirmação e do endosso do ‘impresso’”',
      '“Muitos dos blogs e sites mais influentes...”',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “confirmação”, “endosso” e “impresso” são os três substantivos. Na alternativa A, há só “dificuldades”, pois “sérias” e “financeiras” são adjetivos; na C e na E, há apenas dois substantivos em cada uma.',
  },
  {
    id: 'lp-nomes-qlivro07-16',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/RS - Técnico Judiciário - 2010) Considerada a flexão, a frase que está em total concordância com o padrão culto escrito é:',
    alternativas: [
      'Os tabeliães reúnem-se sempre às quinta-feiras.',
      'Nos últimos botas-foras, houve grande confusão, pois a agência de turismo não reteu os que não possuíam ingresso.',
      'Na delegacia, não tinha ainda reavido os documentos que perdera, quando entrou o rapaz considerado a testemunha mais importante de famoso crime.',
      'Se não se conterem roubos de obras-primas, gerações futuras serão privadas de grandes realizações do espírito humano.',
      'Os lusos-africanos ostentavam no braço fitinhas verde-amarela.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “tinha reavido” e “perdera” estão no tempo verbal adequado, e “considerado” concorda com “rapaz”, no masculino singular. As demais erram na flexão: “às quinta-feiras” deveria ser “às quintas-feiras”, “reteu” deveria ser “reteve” e “verde-amarela” deveria ser “verde-amarelas”.',
  },
  {
    id: 'lp-nomes-qlivro07-17',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan — Advogado — 2010) “Que emigrado da roça não sentiu uma indefinível estranheza e talvez um secreto mal-estar a primeira vez...”. Assinale a alternativa que faz o plural da mesma forma que a palavra sublinhada anteriormente:',
    alternativas: ['guarda-civil', 'amor-perfeito', 'guarda-roupa', 'obra-prima', 'pombo-correio'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: em “mal-estar”, o advérbio “mal” fica invariável e só o substantivo “estar” vai ao plural (“mal-estares”), o mesmo padrão de “guarda-roupa”, que faz “guarda-roupas”. As demais flexionam os dois elementos, como em “guardas-civis”, “amores-perfeitos”, “obras-primas” e “pombos-correios”.',
  },
  {
    id: 'lp-nomes-qlivro07-18',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(MP-SP — Analista de Promotoria I (Assistente Social) — 2011) Leia o poema de Paulo Leminski: “via sem saída via bem / via aqui via além não via o trem / via sem saída via tudo não via a vida / via tudo que havia não via a vida a vida havia”. Considere as afirmações que seguem. I. A palavra via aparece no poema tanto como substantivo quanto como verbo. II. O verbo via encontra-se no pretérito imperfeito do indicativo. Está correto o que se afirma em:',
    alternativas: ['somente I', 'somente II', 'I e II', 'nenhuma'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: na expressão “via sem saída”, “via” é substantivo, no sentido de caminho, e nos demais usos é o verbo ver no pretérito imperfeito do indicativo. As duas afirmações são verdadeiras, e as demais alternativas ignoram uma delas.',
  },
  {
    id: 'lp-nomes-qlivro07-19',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - Carreira Univ. (Analista Administrativo) - 2011) “[...] que foi moldada, durante anos, pela ação dos ventos e da água.” Se pluralizarmos o vocábulo em destaque obteremos a forma “ações”. A alternativa que contém um vocábulo que admite duas formas de plural é:',
    alternativas: ['construção', 'verão', 'cidadão', 'especulação', 'região'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “verão” admite os plurais “verões” e “verãos”, ambos aceitos. As demais têm plural único: “construções”, “cidadãos”, “especulações” e “regiões”.',
  },
  {
    id: 'lp-nomes-qlivro07-20',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Cesgranrio - Petrobras — Técnico de Adm. e Controle Jr. — 2011) A flexão de número dos substantivos está correta em:',
    alternativas: [
      'florezinhas - troféis',
      'salário-famílias - coraçãozinhos',
      'os vaivéns — anães',
      'paisezinhos - beija-flores',
      'limáos - abdómenes',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “beija-flores” pluraliza o segundo elemento, como em “quebra-cabeças”. As demais erram: “troféis” deveria ser “troféus”, “salário-famílias” deveria ser “salários-família” e “limáos” deveria ser “limões”.',
  },
  {
    id: 'lp-nomes-qlivro07-21',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - SEEC/RN - Professor de Língua Portuguesa - 2011) Quanto à formação do plural de substantivos compostos, algumas normas devem ser observadas. O grupo de palavras compostas que seguem a mesma regra de flexão de número de lugares-comuns é:',
    alternativas: [
      'obra-prima, navio-petroleiro, água-marinha',
      'amor-próprio, vice-presidente, beija-flor',
      'salário-mínimo, cartão-postal, sempre-viva',
      'segunda-feira, bate-boca, tenente-coronel',
      'vitória-régia, amor-perfeito, abaixo-assinado',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: em “lugares-comuns”, os dois elementos são substantivo e adjetivo e se flexionam, o mesmo ocorre com “obras-primas”, “navios-petroleiros” e “águas-marinhas”. As demais misturam regras diferentes, como “vice-presidentes”, em que o prefixo fica invariável, e “beija-flores”, em que só o segundo elemento vai ao plural.',
  },
  {
    id: 'lp-nomes-qlivro07-22',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(BIOR1O — Pref. Mesquita/RJ — Agente Administrativo — 2012) Dado o período “A verdade é que nunca fui muito bom de memória”, a oração destacada exerce a mesma função de um:',
    alternativas: ['adjetivo', 'advérbio de lugar', 'advérbio de modo', 'substantivo', 'advérbio de intensidade'],
    correta: 3,
    comentario:
      'A alternativa D é a correta: a oração “que nunca fui muito bom de memória” completa o sentido de “A verdade é” como predicativo, e exerce a função de um substantivo, nomeando o que a verdade é. As demais estão erradas porque a oração não modifica um nome como adjetivo e não expressa lugar, modo ou intensidade como advérbio.',
  },
  {
    id: 'lp-nomes-qlivro07-23',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(CEPERJ — Degase — Técnico de Suporte e Comunicação — 2012) O plural dos nomes terminados em ão pode se fazer de maneiras diferentes. Das palavras abaixo, retiradas do texto, a única que não possui, no plural, a mesma terminação que “prestações” é:',
    alternativas: ['televisão', 'mão', 'produção', 'organização', 'conclusão'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “mão” faz o plural em “mãos”, com a terminação -os, enquanto “televisões”, “produções”, “organizações” e “conclusões” formam o plural em -ões, como “prestações”. Os nomes em -ão podem fazer o plural em -ãos, -ões ou -ães, e cada caso depende da palavra.',
  },
  {
    id: 'lp-nomes-qlivro07-24',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funcab - Pref. Búzios/RJ - Administrador - 2012) O uso das formas sintéticas do diminutivo em “A NEGRINHA, contida na sua expectativa, olha a garrafa de Coca-Cola e o PRATINHO que o garçom deixou à sua frente”, no contexto, tem conotação:',
    alternativas: ['afetiva', 'depreciativa', 'pejorativa', 'objetiva', 'negativa'],
    correta: 0,
    comentario:
      'A alternativa A é a correta: os diminutivos “negrinha” e “pratinho” expressam carinho ou afeto do narrador, e não desprezo ou valor negativo. As demais (depreciativa, pejorativa e negativa) trazem a ideia de desprezo, que não aparece no trecho, e “objetiva” descreve uma conotação que o diminutivo não tem aqui.',
  },
  {
    id: 'lp-nomes-qlivro07-25',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fundação Sousândrade - Pref. Estreito/MA - Supervisor Escolar — 2012) “O menino Joaquim Barbosa nunca se acomodou àquilo que o destino parecia lhe reservar. Filho de um pedreiro, cresceu ouvindo dos adultos que nas festas de aniversário de famílias mais abastadas deveria ficar sempre no fundo do salão. (...)”. Sobre as relações coesivas que estabeleçam no texto, o termo “O menino Joaquim Barbosa”, do primeiro período, é retomado no segundo por um(a):',
    alternativas: ['expressão sinonímica', 'pronome relativo', 'expressão nominal', 'pronome oblíquo', 'advérbio intensificador'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “Filho de um pedreiro” é uma expressão nominal que retoma “O menino Joaquim Barbosa” no segundo período, sem repetir o nome. As demais não se aplicam: não há pronome relativo, pronome oblíquo nem advérbio retomando o termo, e a expressão sinonímica exigiria um sinônimo do nome, que não aparece.',
  },
  {
    id: 'lp-nomes-qlivro07-26',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB — EEAr — Controlador de Tráfego Aéreo — 2012) Complete as lacunas com o ou a e, a seguir, assinale a alternativa com a sequência de substantivos masculino, feminino, masculino.',
    alternativas: [
      '___ eclipse, ___ dinamite, ___ derme',
      '___ magma, ___ libido, ___ pernoite',
      '___ aneurisma, ___ fonema, ___ clã',
      '___ pane, ___ ênfase, ___ dó',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “o magma”, “a libido” e “o pernoite” seguem a sequência masculino, feminino, masculino. As demais falham em um dos nomes: “derme” é feminino, “fonema” é masculino e “pane” é feminino.',
  },
  {
    id: 'lp-nomes-qlivro07-27',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp — TJ/SP — Escrevente Técnico Judiciário — 2014) Fragmento de texto: Anteontem aconteceu o que era inevitável, mas que nos encantou como se fosse inesperado: meu pé de milho pendoou. Há muitas flores belas no mundo, e a flor do meu pé de milho não será a mais linda. Mas aquele pendão firme, vertical, beijado pelo vento do mar, veio enriquecer nosso canteirinho vulgar com uma força e uma alegria que fazem bem. Na passagem do terceiro parágrafo — “... veio enriquecer nosso canteirinho vulgar...” —, o substantivo, empregado no diminutivo, contribui para expressar a ideia de:',
    alternativas: ['exatidão.', 'desprezo.', 'simplicidade.', 'soberba.', 'abundância.'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: o diminutivo “canteirinho” apresenta o canteiro de forma simples e modesta, sem desprezo. As demais ideias não se encaixam no trecho: a exatidão é precisão numérica ou técnica, o desprezo e a soberba são julgamentos negativos, e a abundância seria o oposto da modéstia do canteiro.',
  },
  {
    id: 'lp-nomes-qlivro07-28',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobras - Nível Médio - 2014) O fragmento do texto em que o vocábulo em destaque foi substantivado é:',
    alternativas: [
      '“sua imagem foi literalmente apagada de fotografias dos líderes da revolução”.',
      '“A técnica usada para eliminar o Trotsky”.',
      '“Existe até uma técnica para retocar a imagem em movimento”.',
      '“Se a prova fotográfica não vale mais nada nestes novos tempos inconfiáveis, a assinatura muito menos”.',
      '“E se eu estiver fazendo a barba e escovando os dentes de um impostor, de um eu apócrifo?”',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: em “um eu apócrifo”, o pronome “eu” vem precedido de artigo e de adjunto, passando a nomear uma identidade, como faria um substantivo. As demais alternativas trazem palavras que mantêm sua classe original, sem artigo que as transforme em nome.',
  },
  {
    id: 'lp-nomes-qlivro07-29',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - TJ/PI - Analista Judiciário (Escrivão Judicial) - 2015) Quando o autor de um texto emprega um substantivo coletivo que não é específico, necessita especificá-lo, que é o que ocorre em “frota de veículos”; o mesmo ocorre no seguinte caso:',
    alternativas: [
      'uso de equipamentos.',
      'equipes de técnicos.',
      'parceria das universidades.',
      'procedimentos de emergência.',
      'circulação de veículos.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “equipes” é um coletivo que precisa de complemento específico (“de técnicos”), como “frota” em “frota de veículos”. Nas demais, o substantivo ou já é específico ou não é coletivo, por isso não há a mesma necessidade de especificação.',
  },
  {
    id: 'lp-nomes-qlivro07-30',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(IBFC — EBSERH — Advogado - 2016) O vocábulo destacado em “E o AMARRAR do sapato pode ser mais tranquilo” deve ser classificado morfologicamente como:',
    alternativas: ['verbo.', 'adjetivo.', 'substantivo.', 'advérbio.', 'pronome.'],
    correta: 2,
    comentario:
      'A alternativa C é a correta: precedido do artigo “o” e funcionando como nome da ação, “AMARRAR” foi substantivado, e não está usado como forma verbal. As demais classes não se aplicam, pois adjetivos e advérbios não recebem artigo nesse uso e pronomes não nomeiam ações.',
  },
  {
    id: 'lp-nomes-qlivro07-31',
    temaId: 'lp-nomes',
    formato: 'certo-errado',
    dificuldade: 3,
    gabaritoCE: false,
    enunciado:
      '(CESPE - TRF 1ª R - Técnico Judiciário (Taquigrafia) - 2017) Haveria prejuízo gramatical para o texto caso a palavra “procedimentos-padrão” fosse alterada para procedimentos-padrões.',
    comentario:
      'O item está errado: a troca de “procedimentos-padrão” por “procedimentos-padrões” não causa prejuízo gramatical que comprometa o texto, pois as duas formas são aceitas pela norma, e não há erro de concordância ou de flexão na alteração. Por isso a afirmação de que haveria prejuízo não se sustenta.',
  },
  {
    id: 'lp-nomes-qlivro07-32',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - MPE/AL - Analista do Ministério Público - Administrador de Rede - 2018) Em muitos casos, os infinitivos podem ser substituídos por substantivos cognatos. Assinale a opção que apresenta, em função do contexto, a substituição inadequada.',
    alternativas: [
      '“... interessados em se beneficiar do barateamento do combustível” / interessados no benefício do barateamento do combustível.',
      '“... para desgastar governantes” / para o desgaste dos governantes.',
      '“... com o objetivo de obter apoio a candidatos” / com o objetivo de obtenção de apoio a candidatos.',
      '“... para se aproveitar da crise” / para o proveito da crise.',
      '“... e reforçar seus projetos de poder” / e reforço de seus projetos de poder.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “aproveitar” significa tirar vantagem de algo, e a substituição por “proveito” muda o sentido para a vantagem em si, o que não equivale ao verbo; o substantivo adequado seria “aproveitamento”. As demais substituições mantêm o sentido do verbo no contexto.',
  },
  {
    id: 'lp-nomes-qlivro07-33',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fundatec - Prefeitura de Campo Bom/RS - Técnico em Contabilidade - 2019) A qual classe gramatical pertence a palavra “bastante”, em “Os nossos tempos estão carentes de pessoas corajosas o bastante para abraçar alguém”?',
    alternativas: ['Substantivo.', 'Adjetivo.', 'Pronome.', 'Advérbio.', 'Conjunção.'],
    correta: 0,
    comentario:
      'A alternativa A é a correta: precedida do artigo “o”, a palavra “bastante” funciona como substantivo, com o sentido de “o suficiente”. As demais classes não se aplicam: como adjetivo ela concordaria com um substantivo, como advérbio modificaria um verbo, e pronome e conjunção não são seu papel aqui.',
  },
  {
    id: 'lp-nomes-qlivro07-34',
    temaId: 'lp-nomes',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FGV - TJ-RS — Oficial de Justiça - 2020) Observe a frase a seguir: “É importante aprender muitas coisas” / “É importante o aprendizado de muitas coisas”. O mesmo processo de substituição de um verbo por um substantivo correspondente foi feito de forma adequada em:',
    alternativas: [
      '“É impossível ocultar a desonestidade” / “É impossível o ocultismo da desonestidade”.',
      '“Morrer é o ato final da existência humana” / “A mortandade é o ato final da existência humana”.',
      '“Enfrentar as dificuldades é o caminho da felicidade” / “O enfrentamento das dificuldades é o caminho da felicidade”.',
      '“Oferecer amizade é atitude rara” / “O ofertório de amizade é atitude rara”.',
      '“O mais difícil é viver” / “O mais difícil é a vivacidade”.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a correta: “enfrentar” gera o cognato “enfrentamento”, que mantém o sentido da ação. As demais erram o substantivo correspondente: “ocultar” gera “ocultação”, e não “ocultismo”; “morrer” gera “morte”, e não “mortandade”; “oferecer” gera “oferta”, e não “ofertório”; e “viver” não tem como cognato “vivacidade”, que significa outra coisa.',
  },
];
