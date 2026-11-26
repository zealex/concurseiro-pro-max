import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 29 — Regência), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C29: QuestaoTreino[] = [
  {
    id: 'lp-regencia-qlivro29-01',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      'Informei aos alunos aquela notícia tão aguardada. Levando-se em conta a regência verbal, as reescrituras possíveis da frase acima são: I - Informei-lhes aquela notícia tão aguardada. II - Informei-a aos alunos. III - Informei-os daquela notícia tão aguardada. IV - Informei-lhes daquela notícia tão aguardada.',
    alternativas: ['I e II.', 'II e III.', 'III e IV.', 'I, II e III.', 'II, III e IV.'],
    correta: 3,
    comentario:
      'A resposta é “I, II e III”: “informar” é transitivo direto e indireto, e as três reescrituras preservam um objeto direto (lhes, a, os) e um indireto (aos alunos ou de algo). A IV falha ao usar “lhes” para os dois complementos, já que o verbo não admite dois objetos indiretos.',
  },
  {
    id: 'lp-regencia-qlivro29-02',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      'Os assuntos gramaticais de que venho tratando aqui são muito importantes. Assinale a alternativa que apresenta regência adequada, como na frase acima.',
    alternativas: [
      'Respeitar padrões morais é uma qualidade da qual não abrem mão certos homens.',
      'A força do nosso trabalho, de que não relutamos em vender, dificilmente será paga.',
      'A barbaridade de que serviu ao poeta de tema não espantou os civilizados.',
      'O autor do texto, de cuja convicção estamos longe de alcançar, desconfia de tudo.',
      'Os maus tempos dos quais estamos atravessando devem-se a uma falta de previsão.',
    ],
    correta: 0,
    comentario:
      'A alternativa A está adequada porque “abrir mão de” exige a preposição “de”, que fica obrigatoriamente antes do relativo “qual”. Nas demais, nenhum verbo ou nome da oração adjetiva pede preposição, de modo que o relativo deveria aparecer sem ela, como em “a barbaridade que serviu ao poeta de tema”.',
  },
  {
    id: 'lp-regencia-qlivro29-03',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf - IRB - Analista de Sistemas - 2004) Identifique a letra em que uma das frases apresenta erro de regência verbal.',
    alternativas: [
      'Atender uma explicação. / Atender a um conselho.',
      'O diretor atendeu aos interessados. / O diretor atendeu-os no que foi possível.',
      'Atender às condições do mercado. / Os requerentes foram atendidos pelo juiz.',
      'Atender o telefone. / Atender ao telefone.',
      'Ninguém atendeu para os primeiros sintomas da doença. / Ninguém se atendeu aos primeiros alarmes de incêndio.',
    ],
    correta: 4,
    comentario:
      'A alternativa E traz o erro: no sentido de atentar ou reparar, “atender” é transitivo indireto com “a”, “em” ou “para”, e não é pronominal, de modo que “se atendeu” não existe. A forma correta seria “Ninguém atendeu aos (ou para os, nos) primeiros alarmes de incêndio”.',
  },
  {
    id: 'lp-regencia-qlivro29-04',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - SEE/AL - Professor de Língua Portuguesa - 2013) Fragmento de texto: “... a educação como prática da liberdade... implica a negação do homem abstrato...”. Na linha 8, a forma verbal “implica” aceita dupla regência, razão pela qual pode ser seguida por “a”, como no texto, ou por “na”, ao reger o elemento “negação”.',
    gabaritoCE: false,
    comentario:
      'O item está errado porque, na visão tradicional que a banca segue, “implicar” com o sentido de acarretar é transitivo direto, sem preposição. A dupla regência com “em” é uma variante não ortodoxa, que o examinador não aceita como equivalente.',
  },
  {
    id: 'lp-regencia-qlivro29-05',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRE/MG - Técnico Judiciário - 2005) As liberdades...... se refere o autor dizem respeito a direitos se ocupa a nossa Constituição. Preenchem de modo correto as lacunas da frase acima, na ordem dada, as expressões:',
    alternativas: [
      'a que — de que.',
      'de que — com que.',
      'a cujas — de cujos.',
      'à que — em que.',
      'em que — aos quais.',
    ],
    correta: 0,
    comentario:
      'A alternativa A completa a frase com “a que”, exigido por “referir-se a”, e com “de que”, exigido por “ocupar-se de”. As demais trazem preposições que não correspondem à regência dos verbos das orações adjetivas (“com que”, “em que”, “aos quais”) ou um relativo com artigo que não se encaixa na construção.',
  },
  {
    id: 'lp-regencia-qlivro29-06',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf — ANEEL — Técnico Administrativo — 2006) Para cada lacuna abaixo são propostas duas formas de preenchimento. Assinale a opção em que as duas propostas complementam de maneira coerente e gramaticalmente correta o texto. O Brasil está assumindo papel___(a) liderança no fornecimento de energia de fonte renovável,___(b) o álcool chamou, por isso,___(c) atenção do mundo desenvolvido e há países negociando a compra do produto nacional. Problemas como o do preço interno devem ser administrados com responsabilidade para não corrermos o risco de perder a oportunidade, rara,___(d) fixar papel preponderante___(e)___ setor essencial como o energético.',
    alternativas: ['na/da.', 'como/para.', 'a/à.', 'de/para.', 'em/pelo.'],
    correta: 3,
    comentario:
      'A alternativa D completa a lacuna (d) com “de”, que introduz a oração “fixar papel preponderante” (oportunidade de fazer algo), e a lacuna (e) com “para”, pedido por “papel preponderante para um setor essencial”. As demais combinações quebram a regência de “assumir papel”, de “oportunidade” ou de “preponderante”.',
  },
  {
    id: 'lp-regencia-qlivro29-07',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - CGU - Analista de Finanças e Controle - 2008) Assinale o trecho do texto adaptado do Jornal do Commercio (PE), de 12/01/2008, que apresenta erro de regência.',
    alternativas: [
      'Depois de um longo período em que apresentou taxas de crescimento econômico que não iam além dos 3%, o Brasil fecha o ano de 2007 com uma expansão de 5,3%, certamente a maior taxa registrada na última década.',
      'Os dados ainda não são definitivos, mas tudo sugere que serão confirmados. A entidade responsável pelo estudo foi a conhecida Comissão Econômica para a América Latina (CEPAL).',
      'Não há dúvida de que os números são bons, num momento em que atingimos um bom superávit em conta-corrente, em que se revela queda no desemprego e até se anuncia a ampliação de nossas reservas monetárias, além da descoberta de novas fontes de petróleo.',
      'Mesmo assim, olhando-se para os vizinhos de continente, percebe-se que nossa performance é inferior a que foi atribuída a Argentina (8,6%) e a alguns outros países com participação menor no conjunto dos bens produzidos pela América Latina.',
      'Nem é preciso olhar os exemplos da China, Índia e Rússia, com crescimento acima desses patamares. Ao conjunto inteiro da América Latina, o organismo internacional está atribuindo um crescimento médio, em 2007, de 5,6%, um pouco maior do que o do Brasil.',
    ],
    correta: 3,
    comentario:
      'A alternativa D traz o erro de regência: a comparação “inferior a que foi atribuída à Argentina” pede a forma com crase, “inferior à que”, porque o termo comparado é a taxa atribuída a Argentina. As demais trechos mantêm a regência adequada de seus verbos e nomes.',
  },
  {
    id: 'lp-regencia-qlivro29-08',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/ UnB - AB1N - Oficial Técnico de Inteligência - 2010) Na linha 31 (... são instrumentos legais de que dispõe o Estado...), a preposição “de” empregada antes de “que” é exigência sintática da forma verbal dispõe; portanto, sua retirada implicaria prejuízo à correção gramatical do período.',
    gabaritoCE: true,
    comentario:
      'O item está certo: “dispor” pede a preposição “de” (dispor de algo), e ela deve vir antes do relativo “que”. Retirá-la deixaria o período gramaticalmente incorreto.',
  },
  {
    id: 'lp-regencia-qlivro29-09',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - Instituto Rio Branco — Diplomata — 2010) A Convenção lida com muitas formas de expressão cultural que resultam da criatividade de... (...) Em “resultam da”, o vocábulo “da”, resultante da junção da preposição de com o artigo definido a, pode ser substituído por na sem que se altere o sentido original do texto.',
    gabaritoCE: false,
    comentario:
      'O item está errado: “resultar de” indica a origem, e a preposição “de” é a regência pedida pelo sentido. Trocar por “na” (em + a) muda a relação sintática e o sentido do período.',
  },
  {
    id: 'lp-regencia-qlivro29-10',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - MPU - Analista de Informática - 2010) “Hipermodernidade é o termo usado para denominar a realidade contemporânea, caracterizada pela cultura do excesso, do acréscimo sempre quantitativo de bens materiais, de coisas consumíveis e descartáveis. (...)”. A repetição da preposição de em “do acréscimo”, “de bens materiais” e “de coisas” indica que esses termos são empregados, no texto, como complementos de “cultura”, vocábulo que tem como primeiro complemento “do excesso”.',
    gabaritoCE: false,
    comentario:
      'O item está errado porque a repetição de “de” não faz de todos os termos complementos de “cultura”: “de bens materiais” completa “acréscimo”, e “de coisas” completa “bens”. A função sintática de cada termo depende de quem ele complementa, e não apenas da preposição repetida.',
  },
  {
    id: 'lp-regencia-qlivro29-11',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - ANEEL — Analista Administrativo (Arquivologia) - 2010) A supressão da preposição antes dos vocábulos “antecipação” e “voluntarismo” (A palavra “projeto” remete-se à antecipação e, em boa parte, ao voluntarismo), com a manutenção dos artigos definidos, não acarretaria prejuízo sintático ao texto.',
    gabaritoCE: false,
    comentario:
      'O item está errado: “remeter-se a” é regido pela preposição “a”, que liga o verbo aos complementos “antecipação” e “voluntarismo”. Sua supressão causaria prejuízo sintático, pois o verbo ficaria sem a regência exigida.',
  },
  {
    id: 'lp-regencia-qlivro29-12',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FDC - Mapa — Administrador — 2010) Das alterações feitas abaixo na redação do trecho “O processo de globalização e a mundialização aos quais as organizações têm sido submetidas” (2.º parágrafo), está INCORRETA, quanto ao emprego do pronome relativo, de acordo com as normas de regência, a seguinte:',
    alternativas: [
      'O processo de globalização e a mundialização dos quais as organizações têm sido vítimas.',
      'O processo de globalização e a mundialização sobre os quais as organizações têm tido alguma influência.',
      'O processo de globalização e a mundialização com cujos parâmetros as organizações procuram imitar.',
      'O processo de globalização e a mundialização para os quais as organizações têm voltado sua atenção.',
      'O processo de globalização e a mundialização por cujos princípios as organizações procuram guiar-se.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é a incorreta: “imitar” é transitivo direto, de modo que o complemento não pede a preposição “com”; a forma adequada seria “cujos parâmetros as organizações procuram imitar”. As demais respeitam a regência de “ser vítima de”, “ter influência sobre”, “voltar a atenção para” e “guiar-se por”.',
  },
  {
    id: 'lp-regencia-qlivro29-13',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fundação Dom Cintra — Câmara Municipal de Petrópolis/RJ - Arquivista - 2010) De acordo com a norma culta da língua, a frase “O carro negro investiu a multidão” (9.º parágrafo) também poderia ser redigida, sem alteração de sentido, na forma “O carro negro investiu contra a multidão”, caracterizando uma situação de verbo de regência variada. Das opções abaixo, aquela em que a segunda forma NÃO caracteriza situação de verbo de regência variada, mas constitui erro, pois é regência NÃO admitida pela norma culta, é:',
    alternativas: [
      'Nenhum médico apareceu para assistir-lhe naquele momento. / Nenhum médico apareceu para assisti-lo naquele momento.',
      'Remover o cadáver implicava uma responsabilidade que ninguém queria assumir. / Remover o cadáver implicava numa responsabilidade que ninguém queria assumir.',
      'Para muitos transeuntes, o morto estava ali a importuná-los. / Para muitos transeuntes, o morto estava ali a importunar-lhes.',
      'A confusão provocada pelo defunto influiu no ambiente tranquilo da rua, tumultuando-o. / A confusão provocada pelo defunto influiu sobre o ambiente tranquilo da rua, tumultuando-o.',
      'O fim a que todos visavam era depenar por completo o morto. / O fim que todos visavam era depenar por completo o morto.',
    ],
    correta: 2,
    comentario:
      'A alternativa C traz a regência não admitida: “importunar” é transitivo direto, de modo que o complemento deve ser o pronome “os” (importuná-los), e não o objeto indireto “lhes” da segunda forma. As demais são variações admitidas pela norma, como “implicar em”, “influir sobre” e “assistir”.',
  },
  {
    id: 'lp-regencia-qlivro29-14',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — Petroquímica Suape - Engenheiro de Manutenção Pleno - 2011) “Outra fonte de renda é o valor do ingresso, que custa R$ 35:” Quanto à sintaxe de regência, o trecho que apresenta um verbo com regência semelhante à do termo destacado na passagem transcrita acima é:',
    alternativas: [
      '“...de quem procura a reserva para comprar artesanato,”',
      '“para levar um casal de amigos.”',
      '“Scavello considera positiva a implantação do sistema na aldeia:”',
      '“Não somos assalariados,”',
      '“pois não caçamos mais,”',
    ],
    correta: 4,
    comentario:
      'A alternativa E traz o verbo “caçar”, transitivo direto sem preposição, com regência semelhante à de “custar” no sentido de valor, que alguns dicionários de regência tratam como transitivo direto. Nas demais, os verbos têm regências diversas, como “comprar”, “levar” e “considerar”, que não se assemelham ao do enunciado.',
  },
  {
    id: 'lp-regencia-qlivro29-15',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — Petrobras — Inspetor de Segurança Interna Jr. — 2011) Considere as frases abaixo. I. Manuel aspira......... cargo de gerente na empresa. II. Quem quiser assistir......... filme, deve permanecer em silêncio. III. Certamente, essa decisão implicará......... dissolução do grupo. IV. Ao chegar.......... casa, verificarei se os documentos estão em ordem alfabética. Em relação à regência verbal, a sequência que preenche corretamente as lacunas é:',
    alternativas: [
      'o — ao — na — em.',
      'o — o — a — a.',
      'ao — o — na — em.',
      'ao — ao — a — a.',
      'ao — ao — na — em.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “aspirar” (almejar) pede “ao cargo”, “assistir” (ver) pede “ao filme”, “implicar” (acarretar) é transitivo direto e pede “a dissolução”, e “chegar” pede “a casa”. Por isso a sequência é “ao, ao, a, a”.',
  },
  {
    id: 'lp-regencia-qlivro29-16',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — Transpetro - Técnico Ambiental Jr. - 2011) A sentença em que a expressão em negrito está usada de acordo com a norma-padrão é:',
    alternativas: [
      'O provedor que comprei o plano demonstra eficiência.',
      'As pessoas dos quais compareceram desconheciam informática.',
      'O desejo de que a Internet ficasse mais rápida se realizou.',
      'O menino, o cujo pai trabalha em informática, virá ajudar-nos.',
      'A matéria aonde me dei mal foi programação.',
    ],
    correta: 2,
    comentario:
      'A alternativa C está de acordo com a norma: “realizar-se” no sentido de concretizar-se não exige complemento, e a oração “de que a Internet ficasse mais rápida” completa o nome “desejo” com a preposição exigida. As demais erram ao omitir a preposição do verbo, como em “comprei de” (o provedor de que comprei), ou ao usar “cujo” com artigo e “aonde” no lugar de “em que”.',
  },
  {
    id: 'lp-regencia-qlivro29-17',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — Finep — Técnico (Apoio Adm. e Secr.) — 2011) Dentre os períodos compostos abaixo, qual foi elaborado de acordo com a norma-padrão da língua?',
    alternativas: [
      'Entrei e saí do escritório hoje correndo.',
      'O relatório que te falei está em cima da mesa.',
      'Esse é o colega que dei meu endereço novo.',
      'O manual por que aprendeu a usar a máquina é ruim.',
      'A ilha que eu mudei minha residência oficial é grande.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a única conforme a norma: o relativo “por que” (pelo qual) traz a preposição necessária ao complemento de “aprender”. As demais deixam de usar a preposição regida (“falar de”, “dar a quem”, “mudar em”), ou usam o relativo “que” onde a regência pede outra preposição.',
  },
  {
    id: 'lp-regencia-qlivro29-18',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — Petrobras — Técnico de Informática — 2011) Em qual das sentenças abaixo, a regência verbal está em DESACORDO com a norma-padrão?',
    alternativas: [
      'Esqueci-me dos livros hoje.',
      'Sempre devemos aspirar a coisas boas.',
      'Sinto que o livro não agradou aos alunos.',
      'Ele lembrou os filhos dos anos de tristeza.',
      'Fomos no cinema ontem assistir o filme.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está em desacordo: “assistir” no sentido de ver pede a preposição “a” (assistir a um filme), e a frase também usa “no cinema” com “ir a”, que deveria ser “ao cinema”. As demais estão de acordo com a norma: “esquecer-se de”, “aspirar a”, “agradar a” e “lembrar” como transitivo direto.',
  },
  {
    id: 'lp-regencia-qlivro29-19',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio — Petrobras — Técnico Manutenção Jr. — 2011) Substituindo o verbo destacado por outro, a frase, quanto à regência verbal, torna-se INCORRETA em:',
    alternativas: [
      'O líder da equipe, finalmente, viu a apresentação do projeto. / O líder da equipe, finalmente, assistiu à apresentação do projeto.',
      'Mesmo não concordando, ele acatou as ordens do seu superior. / Mesmo não concordando, ele obedeceu às ordens do seu superior.',
      'Gostava de recordar os fatos de sua infância. / Gostava de lembrar dos fatos de sua infância.',
      'O candidato desejava uma melhor colocação no ranking. / O candidato aspirava a uma melhor colocação no ranking.',
      'Naquele momento, o empresário trocou a família pela carreira. / Naquele momento, o empresário preferiu a carreira à família.',
    ],
    correta: 2,
    comentario:
      'A alternativa C fica incorreta na substituição: “lembrar”, quando não é pronominal, é transitivo direto, de modo que “lembrar dos fatos” está errado e a forma correta seria “lembrar os fatos”. As demais substituições mantêm a regência correta dos verbos propostos.',
  },
  {
    id: 'lp-regencia-qlivro29-20',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - EBC - Cargos de Nível Superior - 2011) Em “Kant inicia a exposição da ética, que ele chama metafísica dos costumes”, o trecho em itálico, que exerce, na oração, a função de complemento verbal, deveria estar precedido da preposição de.',
    gabaritoCE: false,
    comentario:
      'O item está errado: “chamar” no sentido de nomear é transitivo direto, e o complemento “metafísica dos costumes” não pede preposição. A exigência de “de” não se aplica a esse verbo com esse sentido.',
  },
  {
    id: 'lp-regencia-qlivro29-21',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - FUB — Analista de Tecnologia da Informação - 2011) A retirada da preposição “de” em “A indicação inicial é a de que, sim, a rede está alterando (...)” não implicaria alteração do texto, quer do ponto de vista semântico, quer sintático.',
    gabaritoCE: false,
    comentario:
      'O item está errado: a preposição “de” faz parte da construção “é a de que”, que liga o termo ao relativo. Sua retirada muda a estrutura sintática e pode alterar o sentido, por isso não é uma supressão neutra.',
  },
  {
    id: 'lp-regencia-qlivro29-22',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - Instituto Rio Branco — Diplomata — 2011) Os vocábulos “decorrência” (E a decorrência natural da sua constituição...), “condizente” (... procurou a forma condizente com sua mensagem...) e “irreprimível” (... a voz irreprimível dos fantasmas...) regem termos que lhes complementam, necessariamente, o sentido.',
    gabaritoCE: false,
    comentario:
      'O item está errado porque a afirmação de que esses termos exigem necessariamente o complemento é falsa: nos exemplos, os complementos acrescentam sentido, mas não são indispensáveis para completar a palavra. A regência existe, mas não é obrigatória no sentido afirmado.',
  },
  {
    id: 'lp-regencia-qlivro29-23',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - Infraero - Analista de Sistemas -2011) Considere as frases abaixo, construídas com palavras retiradas do texto (grafadas em negrito). A frase cuja redação está inteiramente de acordo com a norma culta é:',
    alternativas: [
      'Alguns acreditam que com o advento da chamada globalização o mundo foi reduzido entre uma pequena aldeia.',
      'É notável a submissão de certos animais acerca do dono.',
      'Não se pode afirmar que não haja legitimação sobre regras morais na sociedade contemporânea.',
      'Parece razoável propor que em todas as áreas do conhecimento há certa dicotomia à teoria e prática.',
      'Alguns críticos acreditam que a sensibilidade é inerente nos grandes artistas.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está de acordo com a norma: “inerente” admite “a” ou “em” (inerente a ou em), e a frase usa “nos grandes artistas”, com a preposição “em”. As demais usam regências inadequadas, como “reduzido a” (não “entre”), “submissão a”, “legitimação de” e “dicotomia entre”.',
  },
  {
    id: 'lp-regencia-qlivro29-24',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRT/MT (23R) — Analista Judiciário — 2011) Está adequado o emprego de ambos os elementos sublinhados na frase:',
    alternativas: [
      'Os argumentos de que devemos nos agarrar devem se pautar nos limites da racionalidade e da justiça.',
      'Os casos históricos em que Voltaire recorre em seu texto ajudam-no a demonstrar de que a pena de morte é ineficaz.',
      'A pena de talião é um recurso de cuja eficácia muitos defendem, ninguém se abale em tentar demonstrá-la.',
      'Os castigos a que se submetem os criminosos devem corresponder à gravidade de que se reveste o crime.',
      'As ideias liberais, de cuja propagação Voltaire se lançou, estimulam legisladores em quem não falte o senso de justiça.',
    ],
    correta: 3,
    comentario:
      'A alternativa D está adequada: “submeter-se a” pede “a que” e “revestir-se de” pede “de que”, com a preposição antes do relativo, como exige a regência de cada verbo. As demais trazem preposições que não correspondem à regência dos verbos das orações adjetivas, como “agarrar-se a” e “recorrer a”.',
  },
  {
    id: 'lp-regencia-qlivro29-25',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TJ/AP - Titular Serviços de Nota e Registros - 2011) ... a assunção de convicções individuais, bem como o silêncio e a solidão cederam passo a uma posição passiva... (2.º parágrafo). A regência determinada pelo verbo grifado acima se reproduz em:',
    alternativas: [
      '... que são enviadas em processo contínuo de transmissão durante todo dia...',
      '... na medida em que penetra nossa existência em todos os instantes...',
      '... vê-se televisão a todo tempo.',
      '... a televisão é uma imposição de modos de ser, de pensar...',
      '... que deverá pautar sua ação em código de conduta do órgão de imprensa...',
    ],
    correta: 4,
    comentario:
      'A alternativa E reproduz a regência do verbo grifado, que pede um objeto direto e um complemento preposicionado, como em “pautar a ação em código”. As demais usam verbos transitivos diretos ou intransitivos, ou com regências distintas, que não reproduzem a estrutura do enunciado.',
  },
  {
    id: 'lp-regencia-qlivro29-26',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - Infraero — Administrador — 2011) Está correto o emprego do elemento sublinhado em:',
    alternativas: [
      'O Príncipe é um símbolo reincidente, a cujo nome pessoal talvez nem mesmo a Branca de Neve tenha conhecimento.',
      'A necessidade de bajular o poder é um vício de que muita gente da imprensa não consegue se esquivar.',
      'A trama com a qual o personagem anônimo participa jamais seria a mesma sem o seu concurso.',
      'Em dois segundos o lenhador tomou uma decisão na qual decorreria toda a trama já conhecida de Branca de Neve.',
      'Os figurantes anônimos muitas vezes são responsáveis por uma ação em que irão depender todas as demais.',
    ],
    correta: 1,
    comentario:
      'A alternativa B está correta: “esquivar-se de” pede a preposição “de”, e o relativo “de que” a mantém antes dele. Nas demais, há erros de regência: “ter conhecimento de” e “participar de” (não “com”), “decorrer de” e “depender de” exigem outras preposições.',
  },
  {
    id: 'lp-regencia-qlivro29-27',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT/SE (20R) - Analista Judiciário - 2011) Está correto o emprego do elemento sublinhado na frase:',
    alternativas: [
      'Não deu certo o tal do método prático em cuja eficiência Paulo Honório chegou a acreditar.',
      'Para o jornalista, a criação da língua literária requer uma técnica sofisticada em que nenhum escritor pode abdicar.',
      'Quando Paulo Honório leu os dois capítulos datilografados, sentiu neles um artificialismo verbal de que jamais toleraria.',
      'Se literatura fosse um arranjo de palavras difíceis, os dicionaristas fariam poemas de cujo brilho ninguém superaria.',
      'A linguagem com que Paulo Honório de fato aspirava era simples, direta, e não uma coleção de figuras retóricas.',
    ],
    correta: 0,
    comentario:
      'A alternativa A está correta: “acreditar em” pede a preposição “em”, que vem antes do relativo “cuja”. Nas demais, a preposição exigida está faltando ou é outra: “abdicar de”, “tolerar” (transitivo direto) e “aspirar a”.',
  },
  {
    id: 'lp-regencia-qlivro29-28',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT/SE (20R) - Técnico Judiciário - 2011) “o cérebro é uma orquestra sinfônica em que os instrumentos vão se modificando à medida que são tocados”. A expressão pronominal em que, grifada acima, preenche corretamente a lacuna da frase:',
    alternativas: [
      'As questões...... se preocupam os cientistas dizem respeito às alterações cerebrais devidas ao uso indiscriminado da internet.',
      'É incalculável o número de informações, sobre os mais diversos temas,...... o cérebro humano é capaz de processar.',
      'As hipóteses aventadas,...... se baseiam os especialistas, devem ainda ser comprovadas por exames acurados.',
      'As implicações causadas pela onipresença da internet......... está sujeito o cérebro humano, são objeto de preocupação de cientistas.',
      'As informações......... dispõem os usuários da comunicação eletrônica são múltiplas, embora sejam superficiais.',
    ],
    correta: 2,
    comentario:
      'A alternativa C completa a lacuna com “em que”, exigido por “basear-se em”, cuja preposição fica antes do relativo. Nas demais, a preposição exigida pelo verbo da oração adjetiva está faltando ou é outra, como em “preocupar-se com”, “estar sujeito a” e “dispor de”.',
  },
  {
    id: 'lp-regencia-qlivro29-29',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC — Nossa Caixa Desenvolvimento — Contador — 2011) Está adequado o emprego de ambos os elementos sublinhados na frase:',
    alternativas: [
      'A obsolescência e o anacronismo, atributos nos quais os americanos manifestam todo seu desprezo, passaram a se enfeixar com a expressão dez de setembro.',
      'O estado de psicose, ao qual imergiram tantos americanos, levou à adoção de medidas de segurança em cuja radicalidade muitos recriminam.',
      'A sensação de que o 11/9 foi um prólogo de algo ao qual ninguém se arrisca a pronunciar é um indício do pasmo no qual foram tomados tantos americanos.',
      'Não é à descrença, sentimento com que nos sentimos invadidos depois de uma tragédia, é na esperança que queremos nos apegar.',
      'Fatos como os de 11/9, com que ninguém espera se deparar, são também lições terríveis, de cujo significado não se deve esquecer.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está adequada: “deparar-se com” pede “com que”, e “esquecer-se de” pede “de cujo”, com a preposição antes do relativo. As demais trazem preposições ou relativos que não correspondem à regência dos verbos: “imergir em” (não “ao qual”) e “tomar de” (pasmo) são exemplos.',
  },
  {
    id: 'lp-regencia-qlivro29-30',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB - CNPQ — Analista em Ciência e Tecnologia Júnior — 2011) “(...) A história das teorias consiste, em grande parte, na reelaboração e em novas formas de usos de conceitos. (...)” O emprego da preposição em antes de “reelaboração” e “novas formas” deve-se à relação de regência do verbo consistir, do qual esses termos são, no texto, complementos.',
    gabaritoCE: true,
    comentario:
      'O item está certo: “consistir” rege a preposição “em” (consistir em algo), e “reelaboração” e “novas formas” são seus complementos. A preposição aparece exatamente por essa regência.',
  },
  {
    id: 'lp-regencia-qlivro29-31',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Esaf — MI-CENAD — Analista de Sistemas — 2012) (Adaptada) A afirmação abaixo está correta ou incorreta? “Em última instância, uma importante decisão política deve ser tomada em relação ao modelo de cidade em que queremos viver e ao destino dos investimentos públicos em mobilidade”. O emprego da preposição a antes de “o destino” indica que esse termo complementa a expressão “em relação”, assim como “o modelo” também a complementa.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta: a expressão “em relação a” rege a preposição “a”, e os dois termos, “o modelo” e “o destino”, complementam essa locução ligados pela mesma preposição.',
  },
  {
    id: 'lp-regencia-qlivro29-32',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — MPE/PI — Analista Ministerial — 2012) No trecho “somado aos que vinham sendo realizados nos últimos anos”, o elemento “aos” poderia ser corretamente substituído por àqueles.',
    gabaritoCE: true,
    comentario:
      'O item está certo: “aos” é a contração de “a” com “os”, e a preposição “a” é exigida por “somar a”. A forma “àqueles” mantém a mesma regência, com crase, e a mesma relação com o relativo “que”.',
  },
  {
    id: 'lp-regencia-qlivro29-33',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FCC — TJ/PE — Analista Judiciário — 2012) As ideias estão articuladas de modo claro e correto na seguinte frase: “Mesmo sendo ele um hábil articulador e a despeito do grande prestígio de que gozava, não obteve êxito na transação, pois a verdadeira natureza do negócio lhe escapara”?',
    gabaritoCE: true,
    comentario:
      'A frase está correta: “gozar de” pede a preposição “de”, presente no relativo “de que”, e o verbo “escapar”, com o pronome “lhe” como objeto indireto, no sentido de não ser percebido, está de acordo com a norma. As ideias também se articulam de modo coerente.',
  },
  {
    id: 'lp-regencia-qlivro29-34',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TCE/SP - Agente de Fiscalização Financeira - 2012) A frase em que a regência está em conformidade com o padrão culto escrito é:',
    alternativas: [
      'Em seu fingimento, só restou de que dissesse ao ex-sócio que sentia saudades dele.',
      'Tudo isso considerado, é necessário fazer que ele sinta o peso da responsabilidade.',
      'Em atenção por seu talento indiscutível, o pouparam as devidas multas.',
      'Passou os documentos a mão do técnico e não os perdeu de vista até ao final da reunião.',
      'Inconformado de que eles propalavam injúrias a seu respeito, decidiu denunciá-los.',
    ],
    correta: 1,
    comentario:
      'A alternativa B está de acordo com a norma: “fazer que” é a construção padrão, sem preposição. As demais erram: “restou de que” (a regência de “restar” não se aplica), “Em atenção a” (não “por”), “a mão” (deveria ser “à mão”) e “Inconformado com” (não “de”).',
  },
  {
    id: 'lp-regencia-qlivro29-35',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - ISS/SP - Auditor-Fiscal Tributário Municipal I - 2012) A frase em que a palavra destacada está empregada corretamente é:',
    alternativas: [
      'Só mesmo ele, com sua ousadia, podia ter-se arrogado em certos direitos.',
      'Percebeu que o que fizera era uma exorbitância com suas funções.',
      'No dia seguinte da postagem da carta, ela já a recebia em casa.',
      'Sua função lhe incompatibilizou com muitos colegas.',
      'Depois de anos, resignou-se definitivamente àquele modo de vida precário.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está correta: “resignar-se a” pede a preposição “a”, e a crase em “àquele” é obrigatória. As demais trazem regência ou emprego da preposição inadequados, como “No dia seguinte da postagem”, que pede “ao”, e “incompatibilizou com” sem a forma pronominal.',
  },
  {
    id: 'lp-regencia-qlivro29-36',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - BB - Escriturário - 2012) A frase em que a presença ou ausência da preposição está de acordo com a norma-padrão é:',
    alternativas: [
      'A certeza que a sorte chegará para mim é grande.',
      'Preciso de que me arranjem um emprego.',
      'Convidei à Maria para vir ao escritório.',
      'A necessidade que ele viesse me ajudar me fez chamá-lo.',
      'Às dez horas em ponto, estarei à sua casa.',
    ],
    correta: 1,
    comentario:
      'A alternativa B está correta: “precisar de” exige a preposição “de”, e a oração que segue é o complemento. As demais erram: “certeza de que” (não “que”), “convidei a Maria” (sem crase antes de nome de pessoa), “necessidade de que” e “estarei em sua casa”.',
  },
  {
    id: 'lp-regencia-qlivro29-37',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Petrobrás - Economista Jr. - 2012) A frase cuja regência do verbo respeita a norma-padrão é:',
    alternativas: [
      'Esquecemo-nos daquelas regras gramaticais.',
      'Os professores avisaram aos alunos da prova.',
      'Deve-se obedecer o português padrão.',
      'Assistimos uma aula brilhante.',
      'Todos aspiram o término do curso.',
    ],
    correta: 0,
    comentario:
      'A alternativa A está correta: “esquecer-se de” pede a preposição “de”, e a forma pronominal “Esquecemo-nos daquelas” a mantém. As demais erram: “obedecer a” (não o), “assistir a” (no sentido de ver), e “aspirar a” (não “aspiram o”).',
  },
  {
    id: 'lp-regencia-qlivro29-38',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Liquigás - Profissional Jr. - 2012) A leitura do trecho “A gente se acostuma a pagar por tudo o que deseja e o de que necessita. E a lutar para ganhar o dinheiro com que pagar” permite concluir que as preposições são exigidas, respectivamente, pelos seguintes verbos:',
    alternativas: [
      'desejar e ganhar.',
      'desejar e pagar.',
      'pagar e desejar.',
      'necessitar e ganhar.',
      'necessitar e pagar.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “necessitar” exige a preposição “de” (o de que necessita), e “pagar” exige “com” (dinheiro com que pagar). Em “o que deseja”, o verbo “desejar” é transitivo direto, sem preposição, e por isso não entra na resposta.',
  },
  {
    id: 'lp-regencia-qlivro29-39',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TST - Analista Judiciário — 2012) A frase que, segundo os preceitos da gramática normativa do português do Brasil, está correta quanto à regência é:',
    alternativas: [
      'A cada pequena discussão, costumava lhe chamar de aventureiro e até como irresponsável, e disso já se havia coletado muitas provas.',
      'Nada daquela maluca versão interessava a ele, principal testemunha do caso, e por isso manifestou-se quanto à imediata retirada do indesejável depoimento.',
      'A afinidade entre os colegas intensificava-se ao mesmo tempo que seus estudos se desenvolviam, e disso surgiu uma amizade que todos tinham orgulho.',
      'Sua obra é daquelas que se pode dizer tudo, menos que passará despercebida a futuras gerações, seja para negar-lhe méritos, seja para reconhecê-los.',
      'Aquele professor é a verdadeira razão de que muitos estudantes decidiram dedicar-se à pesquisa, o que lhe faz ser constantemente mencionado como exemplo a ser seguido.',
    ],
    correta: 1,
    comentario:
      'A alternativa B está correta: “interessar a alguém” e “manifestar-se quanto a” seguem a regência da norma, com o pronome “lhe” e as preposições no lugar certo. As demais trazem erros típicos, como “orgulho de” (não “que”), “razão de que” com sujeito deslocado, e “lhe chamar de como”, que exige outra regência.',
  },
  {
    id: 'lp-regencia-qlivro29-40',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TST - Técnico Judiciário - 2012) Cronistas de reinos passados, gênios das navegações [...] não falam de discos, pratos ou charutos voadores... O verbo que NÃO foi empregado com o mesmo tipo de complemento que o verbo grifado acima está em:',
    alternativas: [
      'Começou com um piloto norte-americano de caças...',
      '... que simplesmente desistimos deles?',
      '... sequer pensarmos em outros mundos...',
      'Enjoaram de nós?',
      'Venceu a hipótese de naves...',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a resposta: o verbo grifado, “falar”, é transitivo indireto (falar de algo), e “começar com”, “desistir de” e “enjoar de” também são transitivos indiretos. Em “venceu a hipótese”, “vencer” é transitivo direto, com complemento sem preposição.',
  },
  {
    id: 'lp-regencia-qlivro29-41',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TST - Analista Judiciário - 2012) “O que definia o século XIX era a mudança: mudança em termos de e em função dos objetivos das regiões dinâmicas do Atlântico norte, que eram, à época, o núcleo do capitalismo mundial”. Estrutura que considera, como a destacada acima, corretamente as regências, encontra-se em frases que seguem, com EXCEÇÃO desta única:',
    alternativas: [
      'Comprovou que e alegou de que os documentos eram originais.',
      'Segurou o menino com e pela mão esquerda.',
      'Por conta de e para saldar as dívidas, penhorou seu único imóvel.',
      'Necessitava de e exigia os documentos que haviam ficado retidos indevidamente.',
      'Os estados se unificaram em e por uma sólida confederação.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a exceção: “comprovar” e “alegar” são usados com preposições diferentes na mesma estrutura, sem que a regência de cada verbo se preserve. Nas demais, cada termo coordenado recebe a preposição que lhe cabe, como em “com e pela mão” e em “necessitava de e exigia”.',
  },
  {
    id: 'lp-regencia-qlivro29-42',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CEPERJ - DEGASE - Psicólogo - 2012) “É forçoso reconhecer que razão assiste ao magistrado”. A frase acima exemplifica um uso mais formal da língua, escolhido pelo autor deste texto, que foi originalmente publicado em uma seção voltada para questões de Direito e Justiça de um jornal. No contexto da frase, o significado do verbo “assistir” é:',
    alternativas: ['comparecer.', 'acompanhar.', 'faltar.', 'caber.', 'permanecer.'],
    correta: 3,
    comentario:
      'A alternativa D é a correta: “assistir” no sentido de caber ou competir (a razão assiste ao magistrado) equivale a “a razão cabe ao magistrado”. As demais são sentidos comuns do verbo, mas não se aplicam à frase, em que o verbo não significa comparecer, acompanhar, faltar ou permanecer.',
  },
  {
    id: 'lp-regencia-qlivro29-43',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(MPE/SC — Promotor de Justiça — 2012) Na Língua Portuguesa, é primordial o conhecimento da sintaxe de regência, isto é, a relação sintática de dependência que se estabelece entre nomes e verbos e seu complemento, com a presença ou não de preposição. Essa preposição pode estar associada ao pronome relativo. Assim, assinale o(s) item(ns) que contempla(m) duas versões da mesma frase consideradas corretas: I. Prefiro ser um bom advogado a um mau juiz. / Prefiro ser um bom advogado do que um mal juiz. II. Os livros já foram, um dia, objeto sagrado onde o acesso era permitido a poucos. / Os livros já foram, um dia, objeto sagrado cujo acesso era permitido a poucos. III. Haverá recursos do Estado para a associação de cuja parte nós fazemos. / A associação de que fazemos parte receberá recursos do Estado. IV. Causou polêmica a medida provisória que autoriza o plantio de soja transgênica no país. / Causou polêmica a medida provisória a qual autoriza o plantio de soja transgênica no país. V. O dinheiro que o político dispõe para a campanha política é bem mais que ele receberá em salário. / O dinheiro de que o político dispõe para a campanha política é bem mais do que ele receberá em salário.',
    alternativas: [
      'Apenas as assertivas III e IV estão corretas.',
      'Apenas as assertivas I e IV estão corretas.',
      'Apenas as assertivas II e V estão corretas.',
      'Apenas as assertivas I, III, IV e V estão corretas.',
      'Todas as assertivas estão corretas.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: em III e IV, as duas versões mantêm a regência (de cuja parte e de que fazemos parte; a medida que autoriza). Em I, “um mal juiz” é erro de adjetivo (deveria ser “mau”), e em V a primeira versão omite a preposição “de” exigida por “dispor”.',
  },
  {
    id: 'lp-regencia-qlivro29-44',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TCE/AP — Analista de Controle Externo — 2012) Do ponto de vista da regência, a frase redigida em conformidade com o padrão culto escrito é:',
    alternativas: [
      'Vive dizendo que, para ele, nos fins de semana, nada melhor como pegar um bom livro e lê-lo até o fim.',
      'Depois de tanto esforço dos que o acolheram, nem sequer se dignou de apresentar pessoalmente suas despedidas.',
      'O exagero no consumo de bebidas alcoólicas na formatura ocasionou em um fim trágico.',
      'As vítimas mais graves do engavetamento foram atendidas ao Hospital das Clínicas.',
      'Acredito, sinceramente, de que o melhor a fazer é afastá-lo da comissão.',
    ],
    correta: 1,
    comentario:
      'A alternativa B está correta: “dignar-se de” pede a preposição “de” na forma pronominal, como em “se dignou de apresentar”. As demais erram: “nada melhor do que” (não “como”), “ocasionou um fim” sem preposição, “atendidas no Hospital” (não “ao”) e “acredito que” (sem “de”).',
  },
  {
    id: 'lp-regencia-qlivro29-45',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEC — PC — Inspetor de Polícia Civil (6.ª Classe) — 2012) A alternativa em que a duplicidade de regência verbal documentada é INACEITÁVEL no português culto é a seguinte:',
    alternativas: [
      '“refletir sobre o significado das favelas” / refletir no significado das favelas.',
      '“desfrutando da sua beleza singular” / desfrutando a sua beleza singular.',
      '“oferecer melhores condições de vida para os seus moradores” / oferecer (...) aos seus moradores.',
      '“entender que os moradores dessas comunidades possuem histórias de vida” / entender de que os moradores.',
      '“Vivemos em uma época de profundas transformações” / Vivemos uma época.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a inaceitável: “entender de que” não é a regência culta do verbo “entender” com oração objetiva direta, e a construção sem preposição é a única aceita. As demais duplicidades (“refletir sobre”/“no”, “desfrutar da”/“a”, “oferecer para”/“a”) são regências documentadas e aceitas em alguma tradição gramatical.',
  },
  {
    id: 'lp-regencia-qlivro29-46',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB - STF - Técnico Judiciário - 2013) A correção gramatical do texto seria preservada caso se eliminasse a preposição “de” (“Pois há uma única coisa de que Deus está privado:...”).',
    gabaritoCE: false,
    comentario:
      'O item está errado: “privado” é adjetivo que exige a preposição “de” (privado de algo), e ela deve aparecer antes do relativo “que”. Eliminá-la torna a regência incorreta.',
  },
  {
    id: 'lp-regencia-qlivro29-47',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT (16a R) - Analista Judiciário - 2014) O segmento do verbete que apresenta descuido quanto à regência é: a) Adoção [...] de políticas e práticas organizacionais socialmente responsáveis. b) Seu objetivo básico é atuar no meio ambiente [...], inter-relacionando-se com o equilíbrio ecológico, com o desenvolvimento econômico e com o equilíbrio social. c) A organização que exerce sua responsabilidade social procura respeitar e cuidar da comunidade. d) A organização que exerce sua responsabilidade social procura [...] conservar a vitalidade da terra e a biodiversidade. e) A organização que exerce sua responsabilidade social procura [...] promover o desenvolvimento sustentável, o bem-estar e a qualidade de vida.',
    alternativas: [
      'Adoção [...] de políticas e práticas organizacionais socialmente responsáveis.',
      'Seu objetivo básico é atuar no meio ambiente [...], inter-relacionando-se com o equilíbrio ecológico, com o desenvolvimento econômico e com o equilíbrio social.',
      'A organização que exerce sua responsabilidade social procura respeitar e cuidar da comunidade.',
      'A organização que exerce sua responsabilidade social procura [...] conservar a vitalidade da terra e a biodiversidade.',
      'A organização que exerce sua responsabilidade social procura [...] promover o desenvolvimento sustentável, o bem-estar e a qualidade de vida.',
    ],
    correta: 2,
    comentario:
      'A alternativa C é apontada como o segmento com descuido de regência: nela, os verbos coordenados “respeitar” (transitivo direto) e “cuidar” (transitivo indireto, com “de”) têm regências diferentes, e a coordenação exige atenção a cada um. As demais mantêm a regência de seus verbos e nomes.',
  },
  {
    id: 'lp-regencia-qlivro29-48',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(IBFC - SSA/HMDCC - Analista Administrativo - 2015) “Mas, uma vez satisfeitas todas essas necessidades, será que ainda resta alguma coisa de que todo mundo precise?” Assinale a alternativa em que se faz um comentário sintático INCORRETO sobre o trecho em análise.',
    alternativas: [
      'Existe apenas uma oração subordinada introduzida pela conjunção integrante “que”.',
      '“alguma coisa” cumpre a função sintática de sujeito simples do verbo “resta”.',
      'O adjetivo “satisfeitas” exerce, no contexto, a função sintática de predicativo.',
      'O emprego da preposição “de” após o substantivo “coisa” obedece à regência desse nome.',
    ],
    correta: 3,
    comentario:
      'Na alternativa D está o comentário incorreto: a preposição “de” é exigida pelo verbo “precisar” da oração relativa (“precise de”), e não pelo substantivo “coisa”. O item trata da regência do verbo, e não da do nome, por isso a afirmação sobre o substantivo é a falsa.',
  },
  {
    id: 'lp-regencia-qlivro29-49',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CESGRANRIO — IBGE — Supervisor de Pesquisas (T1C) — 2016) A regência nominal está adequada à norma-padrão em:',
    alternativas: [
      'Os pobres são ávidos por melhores condições de vida.',
      'Os catadores sentem desejo com uma vida melhor.',
      'Muitos catadores têm orgulho em seu ofício.',
      'Parte da população é sensível para a pobreza.',
      'Vários dejetos são inúteis para com a reutilização.',
    ],
    correta: 0,
    comentario:
      'A alternativa A está adequada: “ávido” admite “por” (ávido por algo), e a regência está de acordo com a norma. As demais trazem regências inadequadas: a forma correta é “desejo de”, “orgulho de” e “sensível a”, e não “com”, “em” ou “para”.',
  },
  {
    id: 'lp-regencia-qlivro29-50',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - SEDF - Professor de Educação Básica (Língua Portuguesa) - 2017) Considerando-se as regências do verbo “esquecer” prescritas para o português, estaria correta a seguinte reescrita para a oração “Já esqueci a língua”: Já esqueci da língua.',
    gabaritoCE: false,
    comentario:
      'O item está errado: na forma não pronominal, “esquecer” é transitivo direto (esqueci a língua), e a preposição “de” só aparece na forma pronominal “esquecer-se de”. Por isso “esqueci da língua” está incorreto.',
  },
  {
    id: 'lp-regencia-qlivro29-51',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - PF - Escrivão de Polícia Federal - 2018) A supressão da preposição “de” empregada logo após “ferocidade”, no trecho “acostumando os espectadores a uma ferocidade de que todos queriam vê-los afastados”, manteria a correção gramatical do texto.',
    gabaritoCE: false,
    comentario:
      'O item está errado: a preposição “de” liga o nome “ferocidade” ao relativo, numa construção de regência nominal. Sua retirada torna a estrutura incorreta.',
  },
  {
    id: 'lp-regencia-qlivro29-52',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(VUNESP - TJ/SP - Enfermeiro Judiciário - 2019) Assinale a alternativa em que a regência está em conformidade com a norma-padrão.',
    alternativas: [
      'Embora as nações aspirem cobertura universal de saúde, precisamos reconhecer de que ela ainda não chegou em todos os habitantes do planeta.',
      'Embora as nações aspirem na cobertura universal de saúde, precisamos reconhecer de que ela ainda não chegou a todos os habitantes do planeta.',
      'Embora as nações aspirem pela cobertura universal de saúde, precisamos reconhecer que ela ainda não chegou em todos os habitantes do planeta.',
      'Embora as nações aspirem à cobertura universal de saúde, precisamos reconhecer que ela ainda não chegou a todos os habitantes do planeta.',
      'Embora as nações aspirem por cobertura universal de saúde, precisamos reconhecer que ela ainda não chegou com todos os habitantes do planeta.',
    ],
    correta: 3,
    comentario:
      'A alternativa D está de acordo com a norma: “aspirar a” (almejar) pede “à cobertura”, e “chegar a” pede “a todos”. As demais trazem “aspirar na”, “aspirar pela”, “chegar em” e “chegar com”, que não correspondem à regência desses verbos.',
  },
  {
    id: 'lp-regencia-qlivro29-53',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(VUNESP - FITO - Técnico em Gestão (Assistência Administrativa) - 2020) Está em conformidade com a norma-padrão de regência verbal e nominal a frase:',
    alternativas: [
      'Quem vai nos Estados Unidos não pode deixar de provar o cheesecake.',
      'Antes da viagem, Antonio estava ávido a provar as especialidades culinárias.',
      'Os legumes têm nutrientes a que o corpo não pode abrir mão.',
      'Amizade é uma das coisas por que mais prezo na vida.',
      'Antonio Prata implicou com os tomates brasileiros por serem inferiores.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está de acordo com a norma: “implicar com” (zombar, hostilizar) pede “com”, e a oração “por serem inferiores” está bem construída. As demais erram: “vai nos Estados Unidos” (ir a), “ávido a” (ávido de), “a que o corpo” (de que, com “abrir mão de”) e “por que mais prezo” (de que, com “prezar”).',
  },
  {
    id: 'lp-regencia-qlivro29-54',
    temaId: 'lp-regencia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(IADES - Instituto Rio Branco - Diplomata - 2021) A supressão da preposição “de” (“Convenci-me de que aquela era a língua mais fácil do mundo...”) manteria a correção gramatical e o sentido original do texto.',
    gabaritoCE: true,
    comentario:
      'O item está certo: diante de oração subordinada substantiva objetiva indireta, a preposição exigida pelo verbo pode ficar implícita, como admitem gramáticos como Cegalla e Luft. Por isso a supressão não prejudica a correção nem o sentido.',
  },
  {
    id: 'lp-regencia-qlivro29-55',
    temaId: 'lp-regencia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FEPESE - IGP-SC - Auxiliar Médico-Legal - 2022) Assinale a alternativa correta quanto à regência nominal e verbal.',
    alternativas: [
      'De acordo com documentos que os jornalistas tiveram acesso, ainda falta incluir o relatório do escritório de contabilidade que fica à Rua São Judas Tadeu, no Centro.',
      'Em busca da realização profissional e pessoal, os jovens escolhem a dedo aonde trabalhar, priorizando às empresas com atuação social.',
      'Informo aos interessados de que não ocorreu, na reunião, nenhuma alusão à tão delicado assunto, nem houve qualquer declaração de desagravo aqueles que foram injustamente acusados.',
      'Como era orgulhoso, preferiu antes declarar falida a firma do que aceitar qualquer ajuda do sogro, a cujo património era bastante robusto.',
      'Os interessados em conhecer a maricultura local devem se dirigir à Praia do Badejo, de onde partem as embarcações que conduzem os turistas para uma visita monitorada, cuja duração é de, aproximadamente, duas horas.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está correta: “dirigir-se a” pede a preposição “a”, “de onde” substitui corretamente “do qual” após “partem”, e “cuja duração” concorda com o termo a que se refere. As demais erram na regência de “acesso a”, “priorizar”, “informar” e “desagravo a”, e no relativo “aonde” ou “a cujo”.',
  },
];
