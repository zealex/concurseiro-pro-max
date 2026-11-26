import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 28 — Concordância), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C28: QuestaoTreino[] = [
  {
    id: 'lp-concordancia-qlivro28-01',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FGV — SEFAZ/RJ — Fiscal de Rendas - 2008) “... mostram que um terço dos pagamentos realizados por intermédio de instituições financeiras foi tributado apenas por aquela contribuição...” (l. 67-70) Assinale a alternativa em que, ao se alterar o termo “um terço”, não se tenha mantido a concordância em conformidade com a norma culta. Desconsidere a possibilidade de concordância atrativa.',
    alternativas: [
      'mostram que 0,27% dos pagamentos realizados por intermédio de instituições financeiras foi tributado apenas por aquela contribuição.',
      'mostram que menos de 2% dos pagamentos realizados por intermédio de instituições financeiras foram tributados apenas por aquela contribuição.',
      'mostram que grande parte dos pagamentos realizados por intermédio de instituições financeiras foi tributado apenas por aquela contribuição.',
      'mostram que três quartos dos pagamentos realizados por intermédio de instituições financeiras foram tributados apenas por aquela contribuição.',
      'mostram que 1,6 milhão dos pagamentos realizados por intermédio de instituições financeiras foi tributado apenas por aquela contribuição.',
    ],
    correta: 2,
    comentario:
      'A alternativa C quebra a concordância porque o particípio “tributado” fica no masculino singular, mas “parte” é feminino; o correto seria “foi tributada” (com “parte”) ou “foram tributados” (com “pagamentos”). Nas demais, o verbo e o particípio acompanham corretamente o termo quantificado: 0,27% e 1,6 milhão pedem singular, enquanto “menos de 2%” e “três quartos” pedem plural.',
  },
  {
    id: 'lp-concordancia-qlivro28-02',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - SFC - Analista de Finança e Controle - 2002) Assinale a norma gramatical que justifica, com correção e propriedade, a flexão plural do verbo ser no período abaixo. “Já é mais do que conhecido que o principal problema do sistema tributário nacional são justamente as contribuições, e não os impostos propriamente ditos.” (Revista CNT, “Lixo tributário”)',
    alternativas: [
      '“Com os verbos ser e parecer a concordância se faz de preferência com o predicativo, se este é plural.” (Luiz Antonio Sacconi)',
      '“Nas frases em que ocorre a locução invariável é que, o verbo concorda com o substantivo ou pronome que a precede, pois são eles efetivamente o seu sujeito.” (Celso Cunha e Lindley Cintra)',
      '“Se tanto o sujeito como o predicativo forem personativos e nenhum dos dois for pronome pessoal, a concordância será facultativa (pode-se concordar com o sujeito ou o predicativo).” (Dileta S. Martins e Lúbia S. Zilberknop)',
      '“Expressões de sentido quantitativo (...) acompanhadas de complemento no plural admitem concordância verbal no singular ou no plural.” (Manual de Redação da Presidência da República)',
      '“Se o sujeito composto tem os seus núcleos ligados por série aditiva enfática (...), o verbo concorda com o mais próximo ou vai ao plural (o que é mais comum quando o verbo vem antes do sujeito).” (Evanildo Bechara)',
    ],
    correta: 0,
    comentario:
      'Com o verbo ser, a concordância se faz preferencialmente com o predicativo quando ele está no plural, e é isso que explica “são”: o predicativo “as contribuições” é plural, embora o sujeito “o principal problema” seja singular. As demais citações tratam de outros fenômenos, como a locução “é que”, a concordância facultativa entre sujeito e predicativo personativos, expressões quantitativas e sujeitos compostos com série aditiva enfática.',
  },
  {
    id: 'lp-concordancia-qlivro28-03',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(CEPERJ - Pref. Angra dos Reis/RJ - Professor de Português - 2008) Leia a frase a seguir, atribuída ao autor de Canção do Exílio. “Eu sou poeta e, aos 30 anos, doente, não queremos desperdiçar o tempo.” Nesta frase, a concordância do verbo querer é um exemplo de:',
    alternativas: [
      'silepse de número.',
      'silepse de gênero.',
      'silepse de pessoa.',
      'concordância atrativa.',
      'concordância lógica.',
    ],
    correta: 0,
    comentario:
      'A silepse é a concordância feita pelo sentido, e não pela forma gramatical. O sujeito “eu” é de primeira pessoa do singular e continua sendo a mesma pessoa em “queremos”; só o número muda, do singular para o plural, o que caracteriza a silepse de número, e não a de pessoa.',
  },
  {
    id: 'lp-concordancia-qlivro28-04',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Esaf - SMF/RJ - Fiscal de Rendas - 2010) (Adaptada) “Na teoria clássica, a finalidade do Estado é promover o bem comum da sociedade, considerado como o conjunto de condições que permite aos indivíduos atingirem o seu bem particular. (...)”. A afirmação abaixo está correta ou incorreta? Provoca-se erro gramatical e incoerência textual ao fazer a seguinte substituição no texto: “permite” por permitem e “atingirem” por atingir.',
    gabaritoCE: false,
    comentario:
      'A afirmação é incorreta porque “permitem” é a forma adequada: o relativo “que” tem função de sujeito e retoma “condições”, que é plural. Quanto a “atingirem”, a flexão do infinitivo é aceita e a forma sem flexão também é gramatical nesse contexto, de modo que a substituição não produz erro nem incoerência.',
  },
  {
    id: 'lp-concordancia-qlivro28-05',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf - SMF/RJ - Fiscal de Rendas - 2010) Assinale a opção correta a respeito das relações de concordância no texto. “Os economistas G. Ranis, F. Stewart e A. Ramirez analisaram 76 países durante um período de 32 anos. Dividiram-nos de acordo com dois critérios: desenvolvimento econômico e desenvolvimento humano (nesse caso, medido através de uma combinação de indicadores de educação e saúde). Usando-se essas duas dimensões, pode-se ter duas situações de equilíbrio (quando o lado humano e o econômico são igualmente altos ou baixos) e duas de desequilíbrio (quando o humano é alto e o econômico é baixo, vice-versa). Surgem algumas conclusões interessantes desse estudo. (...) Mais da metade dos países que tinham baixo crescimento e baixo CH em 1960 permanecia na mesma posição na década de 90. (...) A quarta, e mais importante, é que a estratégia de privilegiar o lado humano dá frutos muito melhores do que aquela que enfatiza só o lado econômico”.',
    alternativas: [
      'O plural no pronome em “Dividiram-nos” deve-se à concordância com o sujeito subentendido da oração: “Os economistas G. Ranis, F. Stewart e A. Ramirez”.',
      'A flexão de singular no verbo em “pode-se” faz a concordância com o sujeito indeterminado; mas é igualmente correto flexionar o verbo no plural, fazendo a concordância com “duas situações”: podem-se ter.',
      'A flexão de plural em “Surgem” tanto permite a interpretação como indicação de sujeito indeterminado como admite a inferência de “duas dimensões” como sujeito subentendido da oração.',
      'A flexão de singular em “dá” é determinada por “lado humano”; mas, se fosse usada a expressão aspectos humanos, a coerência do texto não seria prejudicada, desde que o verbo fosse flexionado no plural.',
      'O termo “mais da metade dos países” estabelece duas relações diferentes de concordância: “países” determina a flexão de plural em “tinham”, enquanto “permanecia” faz a concordância com “metade”.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está correta: “que tinham” tem como sujeito o relativo “que”, que retoma “países” e por isso vai ao plural, enquanto “permanecia” concorda com o núcleo “metade” da expressão “mais da metade”. A alternativa A erra porque o sujeito de “Dividiram” está expresso (“os economistas”), não subentendido.',
  },
  {
    id: 'lp-concordancia-qlivro28-06',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf - SUSEP — Analista Técnico — 2010) Assinale a opção incorreta a respeito das relações de concordância no texto abaixo. “Quando se pensa em classe A, vem logo à cabeça a lembrança de gente milionária, que passa todos os fins de semana em Paris e compra as melhores marcas do mundo. No entanto, nossa classe A representa apenas 5% da população e possui rendimentos bem menores do que muita gente imagina. O que acontece frequentemente é uma confusão entre o brasileiro classe A e o consumidor de luxo, este sim cliente de marcas sofisticadas que movimenta um mercado de R$ 6 bilhões anuais”.',
    alternativas: [
      'Preserva-se a coerência entre os argumentos e a correção gramatical do texto ao substituir “gente milionária” por milionários, desde que se flexionasse também “passa” e “compra” no plural, passam e compram.',
      'A forma verbal “possui” estabelece concordância com “da população”; no entanto, também estaria correta a concordância com “5%”, com o uso da flexão de plural, sem prejudicar a coerência do texto.',
      'Preserva-se a coerência na argumentação, bem como a correção nas relações gramaticais do texto, ao retirar o termo “nossa classe A” do texto, deixando-o apenas subentendido na flexão de “representa”.',
      'Seria preservada a coerência na argumentação com a substituição de “uma confusão” por confusões, desde que o verbo ser fosse usado também no plural: são confusões.',
      'A opção pelo uso da flexão de plural em “movimenta”, movimentam, preservaria a correção gramatical do texto, mas alteraria as relações significativas entre os argumentos.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a incorreta: o verbo “possui” tem como sujeito “nossa classe A”, termo singular, e não “da população” nem “5%”, por isso não há concordância possível com esses termos. As demais afirmações estão corretas, pois as trocas propostas mantêm a concordância ou, quando não mantêm, alteram a coerência do texto, como o caso de “passam” e “compram”, que mudariam a relação entre os argumentos.',
  },
  {
    id: 'lp-concordancia-qlivro28-07',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - IFB - Cargos de Nível Médio — 2011) A substituição da forma verbal “parecerem” (“... fazendo as tripulações parecerem anos mais jovens...”) por parecer acarretaria prejuízo para a correção gramatical do texto.',
    gabaritoCE: false,
    comentario:
      'O item está errado porque, depois do verbo causativo “fazer”, o infinitivo cujo sujeito é plural (“as tripulações”) pode ficar no singular ou no plural. Assim, “parecer” é gramatical, e a substituição não prejudica a correção do texto.',
  },
  {
    id: 'lp-concordancia-qlivro28-08',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TJ/ES - Analista Judiciário (Letras) - 2011) Em “... resolvendo-os em suas fontes, que englobam novas ameaças...”, é obrigatória a flexão de plural em “englobam” porque o sujeito da oração, o pronome relativo “que”, refere-se a “fontes”.',
    gabaritoCE: true,
    comentario:
      'O item está certo: quando o relativo “que” tem função de sujeito, o verbo concorda com o antecedente, que é “fontes”, no plural. Por isso “englobam” deve ir ao plural.',
  },
  {
    id: 'lp-concordancia-qlivro28-09',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB - TJ/ES — Analista Judiciário (Letras) — 2011) Com o emprego de “os contextos” (“... leva em conta os contextos histórico, político, econômico, cultural e social de cada sociedade”), no plural, generaliza-se o significado desse termo, que, em seguida, é especificado por meio do trecho “histórico, político, econômico, cultural e social”; estariam preservadas a coerência e a correção gramatical do texto caso se empregasse o referido termo no singular - o contexto.',
    gabaritoCE: true,
    comentario:
      'O item está certo: “os contextos” é objeto do verbo “leva em conta”, e objetos não controlam concordância, de modo que a forma singular “o contexto” não gera erro gramatical. A especificação posterior continua coerente com o termo no singular.',
  },
  {
    id: 'lp-concordancia-qlivro28-10',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TJ/ES — Analista Judiciário (Letras) — 2011) “(...) Aceitar sem discriminação a diversidade é o primeiro identificador para a luta em defesa dos direitos humanos. (...)” Justifica-se a flexão de singular em “é” tanto pelo fato de o sujeito da oração ser oracional quanto pelo fato de o trecho “o primeiro identificador” estar no singular.',
    gabaritoCE: true,
    comentario:
      'O item está certo: o sujeito “aceitar sem discriminação a diversidade” é oracional, e o verbo fica na 3.ª pessoa do singular. O predicativo “o primeiro identificador” também está no singular, o que reforça a flexão de “é”.',
  },
  {
    id: 'lp-concordancia-qlivro28-11',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - FUB — Médico — 2011) No trecho “está diminuindo a nossa capacidade de concentração e contemplação profundas”, a estrutura permaneceria correta caso o termo “profundas” estivesse no singular.',
    gabaritoCE: true,
    comentario:
      'O item está certo: o adjetivo “profundas” vem posposto a dois substantivos femininos e pode concordar com ambos ou apenas com o mais próximo, “contemplação”. Assim, a forma singular “profunda” também é aceita.',
  },
  {
    id: 'lp-concordancia-qlivro28-12',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - FUB — Analista de Tecnologia da Informação — 2011) “Estudos de neurociência já demonstraram que aprender a ler, especialmente na infância, altera a anatomia do cérebro e engrossa uma estrutura chamada corpo caloso... (...)” A inclusão de e a escrever logo após o trecho “já demonstraram que aprender a ler” não implicaria alteração das formas verbais “altera” e “engrossa”, que devem permanecer no singular.',
    gabaritoCE: true,
    comentario:
      'O item está certo: quando os núcleos do sujeito são infinitivos, como em “aprender a ler e a escrever”, a regra geral é manter o verbo no singular. Por isso a inclusão de “e a escrever” não exige que “altera” e “engrossa” vão ao plural.',
  },
  {
    id: 'lp-concordancia-qlivro28-13',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — PC/ES — Perito Criminal Especial — 2011) “(...) Já os crimes cujas armas são os computadores devem, em 2010, ser responsáveis por perdas de 900 milhões de reais... (...)” A forma verbal “são” está no plural porque concorda com o nome “crimes”.',
    gabaritoCE: false,
    comentario:
      'O item está errado porque “são” tem como sujeito “armas”, núcleo da expressão “cujas armas”, e não “crimes”. O plural decorre de “armas”, e a justificativa dada pela afirmação não se sustenta.',
  },
  {
    id: 'lp-concordancia-qlivro28-14',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — FUB — Cargos de Nível Médio — 2011) Em “A maioria, no entanto, acaba deixando o programa...”, dado o sentido da palavra “maioria”, a forma verbal “acaba” poderia, sem prejuízo para a correção gramatical do texto, estar flexionada na 3.ª pessoa do plural.',
    gabaritoCE: false,
    comentario:
      'O item está errado: “a maioria” é o núcleo do sujeito e, sem especificador plural, o verbo concorda com ele no singular. A flexão “acabam” só seria possível com um especificador plural, como em “a maioria de alunos”.',
  },
  {
    id: 'lp-concordancia-qlivro28-15',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — TRE/ES — Técnico — 2011) “(...) Consideram-se remanescentes das comunidades dos quilombos, para os fins deste decreto, os grupos étnico-raciais, segundo critérios de autoatribuição... (...)”. Prejudica-se a correção gramatical do período ao se substituir “Consideram-se” por São considerados.',
    gabaritoCE: false,
    comentario:
      'O item está errado: “Consideram-se” é voz passiva sintética, com o sujeito “os grupos” no plural. A forma analítica “são considerados” é equivalente e concorda com o mesmo sujeito, por isso não prejudica a correção.',
  },
  {
    id: 'lp-concordancia-qlivro28-16',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Vunesp — TJ/SP — Escrevente Técnico Judiciário — 2011) Assinale a alternativa em que a concordância verbal está correta.',
    alternativas: [
      'Haviam cooperativas de catadores na cidade de São Paulo.',
      'O lixo de casas e condomínios vão para aterros.',
      'O tratamento e a destinação corretos do lixo evitaria que 35% deles fosse despejado em aterros.',
      'Fazem dois anos que a prefeitura adia a questão do lixo.',
      'Somos nós quem paga a conta pelo descaso com a coleta de lixo.',
    ],
    correta: 4,
    comentario:
      'Só a alternativa E está correta: “quem” é sujeito e pode concordar na 3.ª pessoa do singular, como se admite com “somos nós quem”. As demais erram em casos básicos: “haviam” deveria ser “havia” (haver com sentido de existir é impessoal), “vão” deveria ser “vai” (sujeito “o lixo”), “evitaria” deveria ser “evitariam” (sujeito composto) e “Fazem” deveria ser “Faz” (tempo decorrido).',
  },
  {
    id: 'lp-concordancia-qlivro28-17',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/SP — Analista Judiciário — 2012) Estão plenamente observadas as normas de concordância verbal na frase:',
    alternativas: [
      'Dentro da elite nunca se criticou, diante da rotina do sistema penitenciário brasileiro, os horrores a que os presos são submetidos.',
      'Reserva-se ao pobre, tantas vezes identificado como potencialmente perigoso, as opções da resignação ou da marginalidade social.',
      'Sem altos investimentos não haverão como minimizar os horrores que vêm caracterizando as nossas penitenciárias.',
      'A nenhum dos intérpretes de um fato faltarão argumentos para considerá-lo segundo seu interesse e sua conveniência.',
      'Ainda que não lhes convenham fazer altos investimentos, as elites terão que calcular os custos de tanta violência.',
    ],
    correta: 3,
    comentario:
      'A alternativa D está correta: o sujeito de “faltarão” é “argumentos”, posposto ao verbo e no plural, e a expressão “a nenhum dos intérpretes” é adjunto. Nas demais, há erros de concordância: em A, o “se” é apassivador e o verbo deveria ir ao plural (“criticaram”); em B, “Reserva-se” deveria ser “Reservam-se”; em C, “haverão” deveria ser “haverá”, pois haver com sentido de existir é impessoal; em E, “convenham” deveria ser “convenha”, porque o sujeito é oracional.',
  },
  {
    id: 'lp-concordancia-qlivro28-18',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/SP - Analista Judiciário - 2012) Estão plenamente observadas as normas de concordância verbal em:',
    alternativas: [
      'À noite, davam-se aos trabalhos de poucos e à diversão de muitos uma trégua oportuna, para tudo recomeçar na manhã seguinte.',
      'Aos esforços brutais da jubarte não correspondiam qualquer efeito prático, nenhum avanço obtinha o gigante encalhado na areia.',
      'Sempre haverá de aparecer aqueles que, diante de um espetáculo trágico, logram explorá-lo como oportunidade de comércio.',
      'Como se vê, cabe aos bons princípios ecológicos estimular a salvação das baleias, seja no alto-mar, seja na areia da praia.',
      'Da baleia encalhada em 1966 não restou, lembra-nos o autor, senão as postas em que a cruel voracidade dos presentes retalhou o animal.',
    ],
    correta: 3,
    comentario:
      'A alternativa D está correta: o sujeito de “cabe” é a oração infinitiva “estimular a salvação das baleias”, por isso o verbo fica no singular. Em A, “davam-se” deveria ser “dava-se”, pois o sujeito é “uma trégua”; em B, “correspondiam” deveria ser “correspondia”, com sujeito “qualquer efeito”; em E, “restou” deveria ser “restaram”, com sujeito “as postas”.',
  },
  {
    id: 'lp-concordancia-qlivro28-19',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FCC - TRE/SP - Analista Judiciário - 2012) O verbo indicado entre parênteses deverá flexionar-se numa forma do plural para preencher de modo adequado a lacuna da seguinte frase:',
    alternativas: [
      'As acusações que...... (promover) quem defende o “assembleísmo” baseiam-se na decantada “soberania” das assembleias.',
      'Não...... (convir) aos radicais da meritocracia admitir que pode haver boas resoluções obtidas pelo critério do voto.',
      'Por que...... (haver) de caber a um simples passageiro as responsabilidades do comando de uma aeronave?',
      'O que aos bons políticos não...... (poder) faltar, sobretudo nos momentos de decisão, é o espírito público.',
      'Não...... (caber) às associações de classe, em assembleias, avaliar o mérito técnico, julgar a qualificação profissional de alguém.',
    ],
    correta: 2,
    comentario:
      'A alternativa C pede o plural “haverão”, porque “haver de caber” é locução verbal cujo auxiliar concorda com o sujeito “as responsabilidades”, posposto e plural. Nas demais, o verbo deve ficar no singular: em A, “promove” concorda com o relativo que é objeto; em B e E, o sujeito é oracional; em D, o sujeito é o relativo “o que”, singular.',
  },
  {
    id: 'lp-concordancia-qlivro28-20',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TCE/SP — Auxiliar de Fiscalização Financeira — 2012) A concordância verbal e nominal está inteiramente respeitada em:',
    alternativas: [
      'Os níveis alarmantes de poluição da água no planeta, resultante da atividade humana, está dando sinais de que ela poderá faltar em boa parte do globo terrestre, que já sofre com sua escassez.',
      'A proporção entre número de habitantes e oferta de recursos naturais estão em descompasso, levando a necessária redução no consumo desses recursos que garantem a vida no planeta.',
      'Ambientalistas já alertam para os perigos à sobrevivência da humanidade, caso os habitantes do planeta continue a consumir de modo irresponsável os recursos naturais, muitos dos quais já escassos.',
      'Existe programas de conscientização da população mundial que busca divulgar formas de consumo sustentável dos recursos naturais e respeito ao ritmo da natureza, para permitir que ela o reponham.',
      'É necessário que haja medidas que busquem controlar o consumo predatório dos recursos da natureza que, cada vez mais escassos, estão sujeitos a uma lenta reposição.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está correta: “É necessário” tem sujeito oracional e fica no singular, e o relativo “que” retoma “recursos”, plural, levando “estão” ao plural. Nas demais, a concordância falha: A (“está” deveria ser “estão”, com sujeito “níveis”), B (“estão” deveria ser “está”, com sujeito “proporção”), C (“continue” deveria ser “continuem”, com sujeito “habitantes”) e D (“Existe” e “busca” deveriam ser “Existem” e “buscam”).',
  },
  {
    id: 'lp-concordancia-qlivro28-21',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC — TRT/PE (6R) — Analista Judiciário - 2012) A concordância verbal está plenamente observada na frase:',
    alternativas: [
      'Provocam muitas polêmicas, entre crentes e materialistas, o posicionamento de alguns religiosos e parlamentares acerca da educação religiosa nas escolas públicas.',
      'Sempre deverão haver bons motivos, junto àqueles que são contra a obrigatoriedade do ensino religioso, para se reservar essa prática a setores da iniciativa privada.',
      'Um dos argumentos trazidos pelo autor do texto, contra os que votam a favor do ensino religioso na escola pública, consistem nos altos custos econômicos que acarretarão tal medida.',
      'O número de templos em atividade na cidade de São Paulo vêm gradativamente aumentando, em proporção maior do que ocorrem com o número de escolas públicas.',
      'Tanto a Lei de Diretrizes e Bases da Educação como a regulação natural do mercado sinalizam para as inconveniências que adviriam da adoção do ensino religioso nas escolas públicas.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está correta: o sujeito composto ligado pela série correlativa “tanto... como” admite o verbo no plural, concordando com ambos os núcleos. As demais erram: em A, “Provocam” deveria ser “Provoca” (sujeito “o posicionamento”); em B, “deverão haver” deveria ser “deve haver”; em C, “consistem” deveria ser “consiste”; em D, “vêm” e “ocorrem” deveriam ser “vem” e “ocorre”.',
  },
  {
    id: 'lp-concordancia-qlivro28-22',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT/PE (6R) — Analista Judiciário - 2012) O verbo indicado entre parênteses deverá ser flexionado no plural para preencher corretamente a lacuna da frase:',
    alternativas: [
      'Nem todos discriminam, numa foto, os predicados mágicos que a ela se...... (atribuir) nesse texto.',
      'Os tempos que......(documentar) uma simples foto, aparentemente congelada, são complexos e estimulantes.',
      'A associação entre músicos e fotógrafos profissionais...... (remeter) às especificidades de cada tipo de sintaxe.',
      'A poucos......(costumar) ocorrer que as fotografias podem enfeixar admiráveis atributos estéticos, como obras de arte que são.',
      'Imaginem-se os sustos que não...... (ter) causado aos nativos de tribos remotas a visão de seus rostos fotografados!',
    ],
    correta: 0,
    comentario:
      'A alternativa A pede o plural “atribuírem”, porque o verbo tem como sujeito “os predicados mágicos”, plural, retomado pelo relativo “que”. Nas demais, o verbo fica no singular: “documentar” é infinitivo sem sujeito próprio, “remeter” concorda com “associação”, e “costumar” está em construção com “a poucos”, que pede a forma singular.',
  },
  {
    id: 'lp-concordancia-qlivro28-23',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC-TRT/AM (11R) - Analista Judiciário - 2012) As normas de concordância verbal encontram-se plenamente observadas em:',
    alternativas: [
      'A utilidade dos dicionários, mormente quando se trata de palavras polissêmicas, manifestam-se nas argumentações ideológicas.',
      'Não se notam, entre os preconceituosos, qualquer disposição para discutir o sentido de um juízo e as consequências de sua difusão.',
      'Não convém aos injustiçados reclamar por igualdade de tratamento quando esta pode levá-los a permanecer na situação de desigualdade.',
      'Como discernimento e preconceito são duas acepções de discriminação, hão que se esclarecer o sentido pretendido.',
      'Uma das maneiras mais odiosas de refutar os argumentos de alguém surgem na utilização de preconceitos já cristalizados.',
    ],
    correta: 2,
    comentario:
      'A alternativa C está correta: “convém” tem como sujeito a oração “reclamar por igualdade de tratamento”, e por isso fica na 3.ª pessoa do singular. Nas demais, há erros: em A, “manifestam-se” deveria ser “manifesta-se”; em B, “notam-se” deveria ser “nota-se”, com objeto “qualquer disposição”; em D, “hão” deveria ser “há”, pois haver é impessoal aqui; em E, “surgem” deveria ser “surge”, com sujeito “uma das maneiras”.',
  },
  {
    id: 'lp-concordancia-qlivro28-24',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC-TRT/AM (1 IR) — Técnico Judiciário — 2012) A frase do texto que, ao ser reescrita, mantém o respeito às regras de concordância e, em linhas gerais, o sentido original é:',
    alternativas: [
      'Outra descoberta foi a de que também existia na figuração de um motivo em que estivesse ausente o ser humano alguns valores profundos.',
      'Uma gama de estados de espírito que não sabemos nomear, apesar de sua grande força, podem ser suscitados pelos artefatos e signos que o homem produz.',
      'É numa concepção de humanidade modificada ao longo do tempo que se assenta noções relativas a uma dimensão humana da arte.',
      'Não fazem muitos anos que na grande arte só se podiam admitir temas heroicos, míticos ou religiosos.',
      'As obras e seu respectivo valor haviam de ser avaliados na medida da importância do tema tratado.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está correta: “haviam de ser avaliados” é locução verbal cujo auxiliar concorda com o sujeito plural “as obras e seu respectivo valor”. Nas demais, a concordância se perde: em A, “existia” deveria ser “existiam”, com sujeito “alguns valores”; em B, “podem” deveria ser “pode”, com sujeito “uma gama”; em C, “se assenta” deveria ser “assentam”; em D, “fazem” deveria ser “faz”, em tempo decorrido.',
  },
  {
    id: 'lp-concordancia-qlivro28-25',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC-TRT/AM (1 IR) - Técnico Judiciário - 2012) O verbo que se mantém corretamente no singular, apesar das alterações propostas entre parênteses para o segmento grifado, está na frase:',
    alternativas: [
      'É o desafio do nosso tempo (os desafios).',
      'E isso quando a própria FAO alerta... (os especialistas da própria FAO).',
      'E que a produção precisará crescer 70% até 2050... (a produção de alimentos).',
      'Tudo acontece num cenário paradoxal. (Todos os problemas).',
      'Um relatório da própria FAO assegura... (Os dados de um relatório).',
    ],
    correta: 2,
    comentario:
      'A alternativa C mantém o verbo no singular porque “a produção de alimentos” continua singular, assim como “a produção”, e o verbo “precisará” concorda com esse núcleo. Nas demais, a alteração do sujeito para o plural exige o verbo no plural (“são”, “alertam”, “acontecem”, “asseguram”).',
  },
  {
    id: 'lp-concordancia-qlivro28-26',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - CMB - Analista (Administrador de Dados) - 2012) No que se refere ao fenômeno da concordância nominal, no subtítulo do texto, o termo textuais também admite a forma singular. O período em que, conforme a norma-padrão, o termo destacado pode assumir tanto a forma singular quanto a plural é:',
    alternativas: [
      'Bastantes poemas foram lidos na aula.',
      'Custam caro os jornais de domingo.',
      'Vendem-se quadros e esculturas usados.',
      'Compramos livro e jornal velhos.',
      'Na estante, dicionário e livros jogados.',
    ],
    correta: 3,
    comentario:
      'A alternativa D admite as duas formas porque o adjetivo “velhos” vem posposto a dois substantivos e pode concordar com ambos, no plural, ou apenas com o mais próximo, “jornal”, no singular. Nas demais, “bastantes” e “caro” não admitem a mesma variação, e as outras construções têm adjetivo ou advérbio sem essa liberdade.',
  },
  {
    id: 'lp-concordancia-qlivro28-27',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - CMB - Auxiliar de Operação Industrial Hidráulica - 2012) Considerando-se que há palavras variáveis e palavras invariáveis na língua portuguesa, qual é a frase que está em DESACORDO com a norma-padrão, no que diz respeito à concordância?',
    alternativas: [
      'Estamos todos alerta em relação ao problema dos menores de rua.',
      'A população está meio descrente em relação a soluções de curto prazo.',
      'As organizações que cuidam das crianças receberam bastantes recursos este ano.',
      'A partir de hoje, é proibido a adoção de crianças que tenham pais biológicos vivos.',
      'No caso de crianças sob maus tratos, muitas vezes, elas próprias fogem para as ruas.',
    ],
    correta: 3,
    comentario:
      'A alternativa D está em desacordo: “proibido” é adjetivo ligado a um substantivo determinado (“a adoção”), por isso deveria concordar com ele: “é proibida a adoção”. Nas demais, “alerta” e “meio” são invariáveis, “bastantes” é adjetivo plural com “recursos” e as demais construções estão corretas.',
  },
  {
    id: 'lp-concordancia-qlivro28-28',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - Petrobras - Geofísico Júnior - 2012) O trecho “O declínio, a decadência alcança maior nitidez na Europa” apresenta um exemplo de um dos casos de concordância verbal vigentes na norma-padrão do Português. Outro exemplo em que a concordância se justifica pelo mesmo motivo é o seguinte:',
    alternativas: [
      'A conciliação, a contenda entre os participantes do bloco do euro tem provocado grande insegurança entre os países do mundo inteiro.',
      'A predisposição, a incapacidade de recuperar a decadência econômica tem provocado crises dos países da zona do euro.',
      'A redistribuição, a concentração de poder entre as grandes potências tem mantido o mundo refém de decisões arbitrárias.',
      'O privilégio, a necessidade de compartilhar decisões com outros países gerou um projeto de integração bem sucedido.',
      'O recrudescimento, a exacerbação da crise econômica provocou uma reação de protecionismo entre as potências tradicionais.',
    ],
    correta: 4,
    comentario:
      'A alternativa E repete o motivo do trecho original: “recrudescimento” e “exacerbação” são sinônimos, e o verbo fica no singular por esse motivo. Nas demais, os núcleos têm sentidos diferentes ou opostos, como “conciliação” e “contenda”, e o verbo deveria ir ao plural.',
  },
  {
    id: 'lp-concordancia-qlivro28-29',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Cesgranrio - Petrobras - Técnico de Exploração de Petróleo Júnior - 2012) A seguinte frase do Texto I apresenta concordância nominal de acordo com as regras da norma-padrão da língua portuguesa, já que o adjetivo anteposto concorda com o primeiro dos dois substantivos que o seguem. “Com esse resultado, renomadas consultorias e bancos começam a revisar a projeção do Produto Interno Bruto (PIB) deste ano”. No caso de um adjetivo vir posposto a dois substantivos, as seguintes expressões apresentam concordância de acordo com a norma-padrão, EXCETO:',
    alternativas: [
      'empresas e consultorias renomadas.',
      'consultorias e bancos renomadas.',
      'consultorias e bancos renomados.',
      'bancos e consultorias renomadas.',
      'economistas e bancos renomados.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a exceção: com dois substantivos de gêneros diferentes posposto ao adjetivo, a concordância deve ser com o masculino plural (“renomados”) ou com o mais próximo, e “consultorias e bancos renomadas” não atende a nenhuma dessas opções. As demais estão de acordo com a regra, seja pela concordância com ambos os substantivos, seja pela concordância com o termo mais próximo.',
  },
  {
    id: 'lp-concordancia-qlivro28-30',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Termobahia - Técnico de Inspeção e Instalação Júnior - 2012) O verbo em destaque no trecho abaixo está no plural concordando com uma determinada palavra. “Segundo ele, as políticas mais adequadas são aquelas que permitem às mulheres fazerem escolhas sobre o número de filhos que querem e o momento certo para engravidar”. Essa palavra é:',
    alternativas: [
      'políticas.',
      'aquelas.',
      'mulheres.',
      'escolhas.',
      'filhos.',
    ],
    correta: 2,
    comentario:
      'O verbo em destaque é o infinitivo “fazerem”, cujo sujeito, “as mulheres”, está no plural e o leva à flexão. Os demais termos não são o sujeito do infinitivo: “políticas” e “aquelas” são o sujeito de “são” e de “permitem”, e “escolhas” e “filhos” são complementos.',
  },
  {
    id: 'lp-concordancia-qlivro28-31',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Termobahia - Engenheiro de Termelétrica Júnior - 2012) Na expressão destacada no trecho “os alimentos processados industrialmente tornaram os surtos de fome ‘nacionais’ mais raros”, a concordância nominal está de acordo com a norma-padrão. Nas frases a seguir, a concordância da palavra destacada está de acordo com a norma padrão, EXCETO em:',
    alternativas: [
      'A demanda econômica está gerando montanhas de lixo cada vez maiores nas grandes cidades.',
      'A ampliação das pesquisas médicas realizadas nas últimas décadas reduziu a mortalidade infantil.',
      'As pesquisas de todo o mundo preveem situações de aglomeração calamitosas nos grandes centros.',
      'O controle dos nascimentos prematuros efetuados pelo governo é imprescindível para as políticas de saúde pública.',
      'O acesso a empregos formais conquistado pela população contribui para melhor qualidade de vida.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a exceção: o particípio “efetuados” deveria concordar com o núcleo do sujeito, “controle”, masculino singular, e a forma correta seria “efetuado”. A concordância de “realizadas” com “pesquisas” e de “conquistado” com “acesso” nas outras frases está adequada.',
  },
  {
    id: 'lp-concordancia-qlivro28-32',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - Liquigás - Oficial de Manutenção 1-2012) Na abordagem da concordância verbal, as gramáticas apresentam casos em que o verbo fica invariável, por ser considerado “impessoal”. O exemplo do texto em que o verbo grifado encontra-se no singular por ser impessoal é:',
    alternativas: [
      '“Será árduo garimpar os números da família, amigos, contatos profissionais.”',
      '“Eu os buscarei, é óbvio.”',
      '“Há alguns anos...”',
      '“Vejo motoristas de táxi...”',
      '“A maioria dos chefes sente-se no direito...”',
    ],
    correta: 2,
    comentario:
      'A alternativa C traz o único verbo impessoal: “haver” com sentido de tempo decorrido é impessoal e fica sempre na 3.ª pessoa do singular. Nas demais, o singular decorre de outros motivos, como o sujeito oracional de “será” e de “é óbvio”, e não da impessoalidade do verbo.',
  },
  {
    id: 'lp-concordancia-qlivro28-33',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Cesgranrio - CEF - Técnico Bancário Novo - 2012) A língua portuguesa conhece situações de dupla possibilidade de concordância. A modificação possível do termo destacado, mantendo-se a concordância, de acordo com a norma-padrão, encontra-se em:',
    alternativas: [
      '“pode” → “podem” (em “Jogar games de computador pode fazer bem à saúde”).',
      '“produzido” → “produzidos” (em “um dos títulos mais populares do gênero no mundo, produzido pela Blizzard”).',
      '“integrar” → “integrarem” (em “escolhidos pelos pesquisadores para integrar o grupo”).',
      '“progrediu” → “progrediram” (em “o grupo de controle não progrediu”).',
      '“interagir” → “interagirem” (em “é preciso interagir socialmente”).',
    ],
    correta: 2,
    comentario:
      'A alternativa C admite duas formas porque o infinitivo “integrar” pode ficar sem flexão ou ir ao plural, concordando com o referente plural “escolhidos”. Nas demais, a troca quebra a concordância: “Jogar games” tem sujeito oracional e fica no singular, e “o grupo” é singular, de modo que “progrediram” está errado.',
  },
  {
    id: 'lp-concordancia-qlivro28-34',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - IRBr - Diplomata - 2012) No período “Mas é assim mesmo que se vive: perdida no tempo e no espaço” (trecho retirado de um registro literário), o particípio do verbo perder, empregado em estrutura de indeterminação do sujeito da oração, poderia, conforme regra de concordância nominal, estar na forma masculina, regra da qual, no entanto, a obra literária prescinde, dada a liberdade que preside a criação artística.',
    gabaritoCE: true,
    comentario:
      'O item está certo: o próprio enunciado reconhece que a regra gramatical admitiria o masculino nesse uso de indeterminação, e a obra literária se afasta dessa norma por liberdade estilística. Como a afirmação descreve corretamente essa situação, ela é verdadeira.',
  },
  {
    id: 'lp-concordancia-qlivro28-35',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - PF - Agente — 2012) No período “Nesse caso, puxar a corda, afiar a faca ou assistir à execução seria simples...”, como o conector “ou” está empregado com sentido aditivo, e não de exclusão, a forma verbal do predicado “seria simples” poderia, conforme faculta a prescrição gramatical, ter sido flexionada na terceira pessoa do plural: seriam.',
    gabaritoCE: false,
    comentario:
      'O item está errado: quando o sujeito é formado por infinitivos, a regra geral é o verbo no singular, e não há a faculdade do plural que a afirmação pressupõe. Por isso “seriam” não é a forma prescrita pela gramática para essa construção.',
  },
  {
    id: 'lp-concordancia-qlivro28-36',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(Cespe/UnB - PF - Agente — 2012) Em “... que fortalezas seguras, que duro peso de algemas, que profundas sepulturas nascidas de vossas penas...”, a forma verbal “nascidas”, apesar de referir-se a todas as expressões nominais que a antecedem, concorda apenas com a mais próxima, conforme faculta regra de concordância nominal.',
    gabaritoCE: false,
    comentario:
      'O item está errado porque a faculdade de concordar apenas com o termo mais próximo não se aplica a esse caso: o particípio “nascidas” se refere às expressões antecedentes, e a regra só permite esse tipo de concordância em situações específicas. Por isso a afirmação descreve incorretamente a regra.',
  },
  {
    id: 'lp-concordancia-qlivro28-37',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - TCDF — Auditor de Controle Externo - 2012) Em “O fim da Idade Média, no século XV, e o ressurgimento... representaram...”, a forma verbal “representaram” está no plural para concordar com o sujeito composto da oração, cujos núcleos são “fim”, “século” e “ressurgimento”.',
    gabaritoCE: false,
    comentario:
      'O item está errado porque “século XV” é adjunto de “fim”, e não núcleo do sujeito. Os núcleos do sujeito composto são “fim” e “ressurgimento”, e é com eles que “representaram” concorda.',
  },
  {
    id: 'lp-concordancia-qlivro28-38',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB - PC/CE — Inspetor — 2012) No trecho “É verdade que a CE vem desenvolvendo novas formas políticas”, o emprego da forma verbal singular “É” justifica-se pelo fato de essa forma verbal não ter sujeito explícito.',
    gabaritoCE: false,
    comentario:
      'O item está errado: “é” tem como sujeito a oração “que a CE vem desenvolvendo novas formas políticas”, um sujeito oracional, e não é verbo sem sujeito. O singular se justifica pelo sujeito oracional, e não pela ausência de sujeito.',
  },
  {
    id: 'lp-concordancia-qlivro28-39',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - MDIC — Analista de Comércio Exterior - 2012) O texto abaixo foi transcrito com adaptações. Assinale a opção que apresenta erro gramatical ou de grafia de palavra que prejudica a coerência textual. “Constata-se (1) uma discrepância nas carteiras dos maiores detentores de dinheiro no mundo rico: uma pequena fração, menos de 10%, está investida (2) nos países emergentes, que, no entanto, já representa (3) mais de 50% do PIB global. Nesse cenário o Brasil continuará a conviver com maciças (4) entradas de recursos, que devem manter o real ainda valorizado. O governo precisa favorecer investimentos diretos e conterfluxos mais especulativos. É tolerável desestimular a entrada de capital aventureiro, mas cumpre evitar exageros que afugentem (5) o dinheiro bom”.',
    alternativas: ['(1)', '(2)', '(3)', '(4)', '(5)'],
    correta: 2,
    comentario:
      'A alternativa (3) é o erro: “representa” tem como sujeito o relativo “que”, que retoma “países emergentes”, plural, por isso deveria ser “representam”. Os demais trechos estão de acordo com a norma: “Constata-se” é voz passiva sintética, “investida” concorda com “fração”, “maciças” concorda com “entradas” e “afugentem” tem sujeito plural.',
  },
  {
    id: 'lp-concordancia-qlivro28-40',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Esaf - CGU — Analista de Finanças e Controle — 2012) Assinale a opção que fornece a correta justificativa para as relações de concordância no texto abaixo. “O bom desempenho do lado real da economia proporcionou um período de vigoroso crescimento da arrecadação. A maior lucratividade das empresas foi decisiva para os resultados fiscais favoráveis. Elevaram-se, de forma significativa e em valores reais, deflacionados pelo índice de Preços ao Consumidor Amplo (IPCA), as receitas do Imposto de Renda Pessoa Jurídica (IRPJ), a Contribuição Social sobre o Lucro Líquido (CSLL), e a Contribuição para o Financiamento da Seguridade Social (Cofins). O crescimento da massa de salários fez aumentar a arrecadação do Imposto de Renda Pessoa Física (IRPF) e a receita de tributação sobre a folha da previdência social. Não menos relevantes foram os elevados ganhos de capital, responsáveis pelo aumento da arrecadação do IRPF”.',
    alternativas: [
      'O uso do plural em “valores” é responsável pela flexão de plural em “deflacionados”.',
      'O plural em “resultados” é responsável pela flexão de plural em “Elevaram-se”.',
      'Emprega-se o singular em “proporcionou” para respeitar as regras de concordância com “economia”.',
      'O singular em “a arrecadação” é responsável pela flexão de singular em “fez aumentar”.',
      'A flexão de plural em “foram” justifica-se pela concordância com “relevantes”.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: “deflacionados” é particípio que se refere a “valores reais”, e o plural desse termo justifica a flexão. As demais atribuem a concordância a termos que não são o controlador: “proporcionou” concorda com “desempenho”, “Elevaram-se” com “receitas” e “foram” com “ganhos”, e não com “relevantes” nem com “resultados”.',
  },
  {
    id: 'lp-concordancia-qlivro28-41',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Esaf - MI-CENAD - Analista de Sistemas - 2012) Assinale a opção correta a respeito das relações de concordância no texto. “A vida em um país nórdico, como a Finlândia, nos faz refletir mais profundamente sobre a relação entre liberdade, igualdade, autonomia e formatos sociais que podem propiciar vidas mais plenas e felizes aos seus cidadãos. Para alguém habituado a desigualdades, uma sociedade igualitária, com amplo respeito pela vida humana, excelentes índices de educação, burocracia inteligente e serviços públicos voltados (de fato) para melhorar a vida do cidadão, soa como um caminho para a produção de seres humanos mais plenos e sociedades mais inspiradoras. (...) A igualdade e a dignidade humana que uma sociedade pode produzir referem-se à possibilidade de o cidadão ter condições materiais e subjetivas à sua disposição, para que, atendidas suas necessidades básicas e diárias de bem-estar, ele se ocupe com questões outras que a sobrevivência. (...) Em outros termos, não foi a igualdade que deixou o país apático. Ademais, sociedades desiguais podem ser tão ou mais acríticas e reprodutoras. O ponto que nos intriga é que a igualdade, o respeito e a dignidade dados a todos não levaram à autonomia, ao pensamento criativo e crítico, e a processos transformadores”.',
    alternativas: [
      'A flexão de singular em “soa” justifica-se pela concordância com “uma sociedade igualitária”.',
      'A enumeração de vários elementos, “liberdade, igualdade, autonomia e formatos sociais” justifica a flexão de plural em “podem”.',
      'Devido ao uso do pronome “se”, o plural em “referem-se” é opcional: estaria igualmente correto empregar o singular: refere-se.',
      'Por se referir a “sociedades desiguais”, o infinitivo em “podem ser” admitiria também a flexão de plural, serem.',
      'O plural no pronome “todos” justifica a flexão de plural em “levaram”.',
    ],
    correta: 0,
    comentario:
      'A alternativa A está correta: “soa” tem como sujeito “uma sociedade igualitária”, com seus adjuntos, por isso fica no singular. As demais indicam termos que não controlam a concordância: “referem-se” tem sujeito composto (“a igualdade e a dignidade”), que não admite a forma singular, e “levaram” concorda com esse mesmo sujeito composto, não com “todos”.',
  },
  {
    id: 'lp-concordancia-qlivro28-42',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRF (5a R) - Técnico Judiciário - 2012) Os folheteiros vivem em feiras, mercados, praças e locais de peregrinação. O verbo da frase acima NÃO pode ser mantido no plural caso o segmento grifado (“Os folheteiros”) seja substituído por:',
    alternativas: [
      'Há folheteiros que.',
      'A maior parte dos folheteiros.',
      'O folheteiro e sua família.',
      'O grosso dos folheteiros.',
      'Cada um dos folheteiros.',
    ],
    correta: 4,
    comentario:
      'A alternativa E exige o verbo no singular, porque “cada um” é núcleo singular do sujeito, e o verbo deveria ser “vive”. Nas demais, o verbo pode permanecer no plural: “Há folheteiros que” tem relativo referente a “folheteiros”, “a maior parte” e “o grosso” admitem concordância com o especificador plural, e “o folheteiro e sua família” é sujeito composto.',
  },
  {
    id: 'lp-concordancia-qlivro28-43',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRE/SP - Técnico Judiciário — 2012) …… tomar medidas que…… a sobrevivência de algumas espécies de aves na região. Assinale a alternativa que completa corretamente as lacunas.',
    alternativas: [
      'Eram necessários; garantissem.',
      'Eram necessárias; garantissem.',
      'Era necessário; garantisse.',
      'Eram necessárias; garantisse.',
      'Era necessário; garantissem.',
    ],
    correta: 4,
    comentario:
      'A alternativa E está correta: “tomar medidas” é sujeito oracional, e por isso “Era necessário” fica no singular masculino; “garantissem” concorda com “medidas”, antecedente do relativo “que”, que é sujeito. As demais falham em um dos dois pontos: as formas “Eram” e “necessárias” não se ajustam ao sujeito oracional, e “garantisse” não concorda com o plural “medidas”.',
  },
  {
    id: 'lp-concordancia-qlivro28-44',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Instituto Cidades - TCM/GO - Auditor de Controle Externo - 2012) Assinale o item que preenche corretamente as lacunas, do ponto de vista da concordância verbal. “Já___ muitos anos que não se lançava nenhum filme mudo, mas____ muitas pessoas que ainda____ por este tipo de filme.”',
    alternativas: [
      'devem fazer, tem, se apaixona.',
      'deve fazer, há, se apaixonam.',
      'deve fazerem, há, se apaixona.',
      'fazem, há, se apaixona.',
      'faz, haviam, se apaixonarão.',
    ],
    correta: 1,
    comentario:
      'A alternativa B é a correta: “fazer” com sentido de tempo decorrido é impessoal e fica no singular (“deve fazer”); “haver” com sentido de existir também é impessoal (“há”); e “muitas pessoas” é sujeito de “se apaixonam”. As demais erram na impessoalidade ou na concordância com o sujeito.',
  },
  {
    id: 'lp-concordancia-qlivro28-45',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE/UnB - CPRM - Analista - 2013) Em “uma expedição com cientistas do Brasil e do Japão, a bordo do equipamento submersível Shinkai 6.500, observou a formação geológica”, a forma verbal “observou” está no singular para concordar com o sujeito da oração, “equipamento submersível Shinkai 6.500”.',
    gabaritoCE: false,
    comentario:
      'O item está errado: o sujeito de “observou” é “uma expedição com cientistas do Brasil e do Japão”, e não o equipamento, que aparece em expressão de lugar (“a bordo do equipamento”). O singular concorda com o núcleo “expedição”.',
  },
  {
    id: 'lp-concordancia-qlivro28-46',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FCC - TRT 2a - Técnico Judiciário (Área Apoio Especializado) - 2014) O verbo empregado no singular que também estaria corretamente empregado no plural, sem que se faça qualquer outra alteração na frase, está grifado em:',
    alternativas: [
      '... mas produz coisas completamente diferentes.',
      'A moda tem uma lógica que anexa objetos e territórios os mais variados...',
      '... que a moda destrói as culturas do passado...',
      '... e, no fundo, coincide com o desenvolvimento da sociedade de consumo...',
      '... na qual a maior parte dos indivíduos pode escolher seus modos de vida...',
    ],
    correta: 4,
    comentario:
      'A alternativa E admite o verbo no singular ou no plural: “a maior parte dos indivíduos” é núcleo partitivo com especificador plural, e o verbo pode concordar com o núcleo ou com o especificador. Nas demais, o sujeito é singular e não admite a flexão plural sem outras alterações na frase.',
  },
  {
    id: 'lp-concordancia-qlivro28-47',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(VUNESP - Câmara Municipal de Descalvado/SP - Secretário Administrativo - 2015) Supondo que as alternativas reproduzam as frases impressas em cartazes afixados nas paredes de uma padaria, é correto afirmar que a frase em conformidade com a norma-padrão da língua portuguesa encontra-se em:',
    alternativas: [
      'Fazem-se sanduíches e bolos decorados.',
      'Faz-se tortas e sobremesas dietéticos.',
      'Preparam-se bandejas com docinhos variado.',
      'Prepara-se bandejas com diversos salgadinhos.',
      'Vende-se pãezinhos e baguetes recheados.',
    ],
    correta: 0,
    comentario:
      'A alternativa A está correta: no “se” apassivador, o verbo concorda com o sujeito paciente plural, “sanduíches e bolos”, por isso “Fazem-se”. Nas demais, a concordância falha: “Faz-se” e “Prepara-se” e “Vende-se” deveriam ir ao plural, e “dietéticos” e “variado” deveriam concordar com os substantivos, no feminino ou no plural.',
  },
  {
    id: 'lp-concordancia-qlivro28-48',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CONSULPLAN - Prefeitura de Cascavel/PR - Técnico em Informática - 2016) “Há famílias em situações de risco e fragilidade?” A concordância do verbo haver foi corretamente empregada no trecho em evidência. Assinale a alternativa em que a concordância em relação ao mesmo verbo está INCORRETA.',
    alternativas: [
      'Houve muitas acusações às famílias.',
      'Na reunião escolar, haviam muitas famílias.',
      'Na competição entre família e escola não há titulares.',
      'As famílias e o estado se houveram bem durante a reunião.',
      'O estado e a escola já haviam se manifestado em relação às famílias.',
    ],
    correta: 1,
    comentario:
      'A alternativa B está incorreta: “haver” com sentido de existir é impessoal e fica sempre no singular, por isso deveria ser “havia muitas famílias”. As demais estão de acordo: “houve” e “não há” são impessoais no singular, “houveram-se” (portar-se) concorda com o sujeito composto, e “haviam” concorda com o sujeito composto “o estado e a escola”.',
  },
  {
    id: 'lp-concordancia-qlivro28-49',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE — SEDF — Professor de Educação Básica — 2017) Seriam mantidos a correção gramatical e o sentido original do texto se o trecho “São duas gramáticas distintas” fosse reescrito da seguinte forma: Tratam-se de duas gramáticas diferentes.',
    gabaritoCE: false,
    comentario:
      'O item está errado: com o “se” de indeterminação do sujeito, o verbo “tratar” fica no singular, e a forma correta seria “Trata-se de duas gramáticas diferentes”. A forma plural “Tratam-se” quebra a concordância.',
  },
  {
    id: 'lp-concordancia-qlivro28-50',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - MPE/PI — Técnico Ministerial (Área Administrativa) — 2018) Em “Saiu a mais nova lista de coisas que devem ou não ser feitas...”, seria incorreto o emprego do verbo “ser” no plural — serem.',
    gabaritoCE: true,
    comentario:
      'O item está certo: “ser” faz parte da locução verbal “devem ser feitas”, e nas locuções verbais o infinitivo não se flexiona. A flexão plural já está no auxiliar “devem”, e “serem” seria incorreta.',
  },
  {
    id: 'lp-concordancia-qlivro28-51',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE — PRF — Policial Rodoviário Federal — 2019) No trecho “Os processos de produção dos objetos que nos cercam movimentam relações diversas entre os indivíduos”, o sujeito da forma verbal “cercam” é “Os processos de produção dos objetos”.',
    gabaritoCE: false,
    comentario:
      'O item está errado: o sujeito de “cercam” é o relativo “que”, que retoma “objetos”. “Os processos de produção dos objetos” é o sujeito de “movimentam”.',
  },
  {
    id: 'lp-concordancia-qlivro28-52',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - MPE/CE — Analista Ministerial (Administração) — 2020) A correção gramatical do texto seria mantida caso a forma “existirem” (“apesar de não existirem, nos animais, traços de preconceito...”) fosse substituída por existir.',
    gabaritoCE: false,
    comentario:
      'O item está errado: o infinitivo “existirem” tem sujeito explícito e plural, “traços de preconceito”, e por isso precisa ir ao plural. A forma “existir” quebra essa concordância.',
  },
  {
    id: 'lp-concordancia-qlivro28-53',
    temaId: 'lp-concordancia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(VUNESP — CODEN — Engenheiro Civil — 2021) Leia: “Para rever a situação, FORAM FEITAS simulações pelo computador. Não BASTAVAM manuais de instruções para salvar o dia. A primeira conclusão era de que EXISTIAM opções mais sensatas a serem tomadas pelo piloto”. De acordo com a concordância verbal e nominal estabelecida pela norma-padrão, as expressões destacadas podem ser substituídas, respectivamente, por:',
    alternativas: [
      'realizou-se; Eram inúteis; havia.',
      'realizou-se; Eram inútil; haviam.',
      'realizaram-se; Eram inúteis; haviam.',
      'realizaram-se; Eram inútil; haviam.',
      'realizaram-se; Eram inúteis; havia.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: “FORAM FEITAS” pede “realizaram-se”, com o sujeito plural “simulações” na voz passiva sintética; “BASTAVAM” pede “Eram inúteis”, com “inúteis” concordando com “manuais”; e “EXISTIAM” pede “havia”, pois haver com sentido de existir é impessoal. As demais erram no singular de “realizou-se”, no “inútil” singular ou no plural de “haviam”.',
  },
  {
    id: 'lp-concordancia-qlivro28-54',
    temaId: 'lp-concordancia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(CESPE - MJSP — Técnico Especializado em Formação e Capacitação - 2022) A substituição da forma verbal “visam” (“um conjunto de estratégias que visam minimizar os danos causados pelo uso de diferentes drogas”) por “visa” manteria a correção gramatical do texto.',
    gabaritoCE: true,
    comentario:
      'O item está certo: com a expressão “um conjunto de” seguida de especificador plural, o verbo pode concordar com o núcleo, “conjunto”, ou com o especificador, “estratégias”. Por isso a forma singular “visa” é igualmente correta.',
  },
];
