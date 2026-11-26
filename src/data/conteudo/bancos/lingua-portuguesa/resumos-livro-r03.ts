import type { ResumoTema } from '../../../types';

const PESTANA_C04 = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 4).';
const PESTANA_C32 = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 32).';
const HOJE = '2026-11-26';

/** Resumo do grupo R03: semântica, lexicologia, figuras de linguagem, vícios e pares da língua culta. */
export const RESUMOS_LIVRO_R03: ResumoTema[] = [
  {
    temaId: 'lp-semantica',
    titulo: 'Semântica, lexicologia, figuras e vícios de linguagem',
    resumo:
      'A banca cobra a escolha da palavra adequada ao contexto, as relações de sentido (sinonímia, homonímia, paronímia, polissemia), a identificação de figuras de linguagem e de vícios, e os pares de palavras da língua culta.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A **semântica** estuda a significação das palavras. Separe dois conceitos: o **significado** é o sentido básico, que a palavra tem isolada (o que o dicionário registra); o **sentido** é o que ela assume em um contexto concreto. Por isso uma mesma palavra ganha sentidos secundários conforme a situação.\n\nA significação também muda por fatores gramaticais: acento e posição da sílaba tônica (sábia e sabiá), timbre da vogal (molho aberto e molho fechado), número, gênero, crase, posição de adjetivos (um homem pobre é diferente de um pobre homem), conjunções, preposições, advérbios, pontuação e regência verbal.\n\nA **lexicologia** estuda o léxico, isto é, as palavras quanto à formação e ao sentido. O conjunto das palavras de uma língua é o vocabulário. Como o sentido depende do contexto, a banca avalia a **adequação vocabular**: a palavra precisa combinar com o referente (o assunto) e com a situação de comunicação (quem fala, para quem e em que ambiente, em registro formal ou informal).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Relações de sentido entre palavras',
          colunas: ['Relação', 'O que é', 'Ponto que a banca cobra'],
          linhas: [
            ['Sinonímia', 'Palavras diferentes na forma, com sentidos iguais ou muito próximos', 'Não existe sinônimo perfeito; a escolha depende do contexto e da intenção de quem fala'],
            ['Antonímia', 'Palavras, expressões ou frases com sentidos opostos', 'Costuma se formar com prefixo de sentido contrário (imigrante x emigrante) ou com radicais diferentes'],
            ['Homófonos', 'Mesma pronúncia, grafia diferente', 'Cela (aposento) x sela (arreio); cesta x sesta'],
            ['Homógrafos', 'Mesma grafia, pronúncia diferente (quase sempre pelo timbre)', 'Gosto (timbre aberto, verbo gostar) x gosto (timbre fechado, sabor); o acento gráfico não é o que diferencia'],
            ['Homônimos perfeitos', 'Mesma grafia e mesma pronúncia, sentidos diferentes', 'Manga (fruta) x manga (parte da camisa); leve (adjetivo) x leve (verbo): mudam de classe gramatical'],
            ['Paronímia', 'Palavras parecidas na grafia e na pronúncia, com sentidos diferentes', 'Eminente (notável) x iminente (prestes a ocorrer); deferimento x diferimento. A banca gosta de unir paronímia a flexão verbal (emergir x imergir, ratificar x retificar)'],
            ['Polissemia', 'Uma palavra com vários sentidos, sem mudar de classe gramatical', 'Pé de mesa, pé de alface e pé de gente são sentidos de “pé”, todos substantivos'],
            ['Hiperonímia e hiponímia', 'Hiperônimo: palavra mais abrangente. Hipônimo: palavra mais específica', 'Fruta é hiperônimo de uva; uva é hipônimo de fruta. Há hierarquia entre os termos'],
            ['Campo semântico x campo lexical', 'Semântico: palavras de uma mesma área (futebol: bola, gol, árbitro). Lexical: palavras da mesma família (mar, marinho, marítimo)', 'Alguns autores não distinguem os conceitos; muitos distinguem, e a banca pode cobrar a diferença'],
            ['Denotação e conotação', 'Denotação: sentido literal. Conotação: sentido figurado ou simbólico', 'Uma pedra caiu no rio (denotação) x ele tem coração de pedra (conotação)'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Figuras de linguagem mais cobradas',
          colunas: ['Figura', 'Ideia', 'Exemplo próprio'],
          linhas: [
            ['Metáfora (palavras)', 'Palavra usada fora do sentido básico, por comparação implícita, sem conectivo', 'Aquela professora é um dicionário ambulante'],
            ['Comparação (símile)', 'Relação de semelhança com conectivo explícito (como, tal qual, parece)', 'Ela corre como uma gazela'],
            ['Metonímia', 'Substituição por relação de proximidade: parte pelo todo, autor pela obra, continente pelo conteúdo', 'Ele bebeu dois copos (continente pelo conteúdo); ele tem dez bocas para alimentar (parte pelo todo)'],
            ['Catacrese', 'Metáfora já cristalizada, usada por falta de termo próprio', 'O pé da mesa; a asa da xícara'],
            ['Perífrase', 'Expressão mais longa no lugar de um nome, muitas vezes como apelido', 'A cidade que nunca dorme (São Paulo)'],
            ['Sinestesia', 'Mistura de impressões de sentidos diferentes', 'Um grito azedo tomou conta da sala (audição e paladar)'],
            ['Elipse', 'Omissão de termo que não aparece antes no texto', 'Feliz Natal a todos! (omitido: desejo)'],
            ['Zeugma', 'Omissão de termo que já apareceu antes no texto', 'Ontem fui ao cinema; hoje, à praia (omitido: fui)'],
            ['Pleonasmo (figura)', 'Repetição intencional de uma ideia, para dar ênfase', 'Sonhou um sonho bonito e distante'],
            ['Hipérbato', 'Inversão forte da ordem direta dos termos da oração', 'Cheio de cansaço, voltou para casa o trabalhador (ordem direta: o trabalhador voltou para casa cheio de cansaço)'],
            ['Anacoluto', 'Termo deslocado, sem função sintática na frase, geralmente no início', 'Minha vida, não sei como vou sair desse aperto'],
            ['Assíndeto', 'Ausência de conectivo coordenativo entre termos ou orações', 'Chegou, sentou, pediu, comeu, pagou e saiu'],
            ['Polissíndeto', 'Repetição do conectivo coordenativo', 'Estudou, e leu, e revisou, e dormiu tarde'],
            ['Anáfora (figura)', 'Repetição da mesma palavra no início de versos ou frases', 'Quando chove, eu espero; quando faz sol, eu saio'],
            ['Antítese', 'Contraste entre palavras ou ideias opostas', 'Era pobre de bens e rico de afetos'],
            ['Oxímoro (paradoxo)', 'Duas ideias contraditórias que coexistem', 'Silêncio ensurdecedor'],
            ['Hipérbole', 'Exagero intencional', 'Morri de rir com a piada'],
            ['Gradação', 'Enumeração crescente (clímax) ou decrescente (anticlímax)', 'Dia após dia, semana após semana, mês após mês: a aprovação se aproxima'],
            ['Eufemismo', 'Suavização de uma ideia negativa', 'A empresa passou por uma reestruturação (para demissões)'],
            ['Ironia', 'Dizer o contrário do que se pensa, em tom de deboche', 'Que ótimo trabalho: entregou tudo atrasado'],
            ['Prosopopeia (personificação)', 'Atribuição de características humanas a seres não humanos', 'O vento sussurrava segredos nas folhas'],
            ['Aliteração', 'Repetição sistemática de uma consoante', 'O sapo sábio saltava sem sossego'],
            ['Assonância', 'Repetição sistemática de uma vogal ou de sons vocálicos', 'Lá vai a vaca da vizinha'],
            ['Paronomásia (ou paranomásia)', 'Aproximação de palavras parecidas na forma ou na pronúncia', 'Sem paciência, não há ciência que resista'],
            ['Onomatopeia', 'Palavra que imita um som', 'O trem fazia tchu-tchu sem parar'],
            ['Paralelismo', 'Repetição de estruturas sintáticas semelhantes', 'Quem planta colhe; quem estuda passa'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Vícios de linguagem',
          colunas: ['Vício', 'O que é', 'Exemplo próprio e correção'],
          linhas: [
            ['Ambiguidade (anfibologia)', 'Duplo sentido não intencional, causado pelo contexto ou pela sintaxe', 'O diretor avisou o funcionário que ele seria transferido. Deixe claro quem será transferido'],
            ['Arcaísmo', 'Palavra ou construção fora de uso na norma atual', 'Destarte, retiro-me. (atual: assim)'],
            ['Barbarismo', 'Desvio de ortoepia, prosódia, ortografia, morfologia ou semântica', 'Eu fazi a prova. (correto: fiz, morfologia)'],
            ['Cacofonia', 'Som desagradável, cômico ou obsceno pela união de palavras', 'Frases em que a união de sílabas forma termo cômico ou obsceno: reordene a frase'],
            ['Colisão', 'Combinação desagradável de sons por aliteração de consoantes', 'Pedro pediu, de presente, prata para a pobre prima'],
            ['Parequema', 'Repetição de som ou sílaba do fim de uma palavra com o início da seguinte', 'Comprei a casa antiga'],
            ['Hiato', 'Encontro de vogais idênticas em palavras vizinhas', 'Deu a ajuda a amiga. (correto: deu ajuda à amiga)'],
            ['Solecismo de concordância', 'Desvio na concordância do verbo ou do nome', 'Haviam muitas pessoas na fila. (correto: havia, haver impessoal)'],
            ['Solecismo de regência', 'Desvio na transitividade ou na preposição exigida', 'Assisti o filme. (correto: assisti ao filme, no sentido de ver)'],
            ['Solecismo de colocação', 'Pronome oblíquo fora do lugar', 'Me disseram a verdade. (correto: disseram-me, pois o pronome não inicia a oração)'],
            ['Redundância (tautologia)', 'Pleonasmo vicioso: repete o que já foi dito', 'Entrar para dentro da sala. (correto: entrar na sala)'],
            ['Estrangeirismo', 'Palavra estrangeira desnecessária, quando há equivalente em português', 'Ele deletou o arquivo. (correto: excluiu o arquivo)'],
            ['Prolixidade', 'Excesso de palavras para dizer pouco', 'Em virtude do fato de que o trem se encontrava atrasado. (correto: como o trem estava atrasado)'],
            ['Preciosismo', 'Linguagem rebuscada, com vocábulos incomuns, que prejudica a clareza', 'Meu progenitor adquiriu um veículo automotor. (correto: meu pai comprou um carro)'],
            ['Plebeísmo', 'Gírias e expressões populares em contexto formal', 'Cara, a prova foi massa. (em texto formal, use: a prova foi tranquila)'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Pares de palavras da língua culta',
          colunas: ['Forma', 'Quando usar', 'Exemplo próprio'],
          linhas: [
            ['por que', 'Pronome ou advérbio interrogativo, ou pronome relativo; equivale a “por qual motivo” ou “pelo qual”', 'Por que você saiu cedo? / Não sei o motivo por que ele chegou tarde'],
            ['porque', 'Conjunção que explica ou dá causa (equivale a “pois”)', 'Fiquei em casa porque chovia'],
            ['por quê', 'Fim de frase, antes de pausa marcada ou isolada', 'Você não veio, mas não sei por quê'],
            ['porquê', 'Substantivo, geralmente acompanhado de determinante', 'Quero saber o porquê da demora'],
            ['há x a', 'Há indica tempo passado (equivale a “faz”); a indica tempo futuro ou distância', 'Há dois anos estudo gramática. / A prova será daqui a dois meses'],
            ['se não x senão', 'Se não: condição com negação (se + não). Senão: exceção, “mas sim”, “mas também” ou “do contrário”', 'Se não estudar, não passará. / Ninguém, senão eu, sabe disso. / Estude, senão será reprovado'],
            ['onde x aonde x donde', 'Aonde com verbos de movimento; onde com verbos de permanência; donde equivale a “de onde”', 'Aonde você vai? / Onde você mora? / A cidade donde venho é pequena'],
            ['mal x mau', 'Mal: advérbio (oposto de bem) ou conjunção (assim que). Mau: adjetivo (oposto de bom)', 'Ele dorme mal. / Mal chegou, saiu. / Ele é um mau pagador'],
            ['mais x mas', 'Mais: intensidade ou quantidade. Mas: conjunção adversativa (porém)', 'Estudou mais, mas não passou'],
            ['afim x a fim de', 'Afim: semelhante, com afinidade. A fim de: com a finalidade de', 'Tenho ideias afins às suas. / Estudo a fim de passar'],
            ['em vez de x ao invés de', 'Em vez de: no lugar de. Ao invés de: com sentido contrário', 'Em vez de estudar, dormiu. / Ao invés de elogiar, criticou'],
            ['acerca de x há cerca de x a cerca de', 'Acerca de: sobre. Há cerca de: tempo passado aproximado. A cerca de: distância ou tempo futuro aproximado', 'Falamos acerca de política. / Há cerca de um ano. / Estou a cerca de um mês da prova'],
            ['por ora x por hora', 'Por ora: por enquanto. Por hora: a cada sessenta minutos', 'Por ora, ficaremos aqui. / Ele ganha trinta reais por hora'],
            ['sequer x se quer', 'Sequer: ao menos, pelo menos (costuma vir com nem ou não). Se quer: se + quer (verbo querer)', 'Não há sequer um aluno. / Nem sequer chegou. / Se quer, pode ir'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Ambiguidade na prática',
        enunciado: 'Leia a frase: “Ana quer a viagem logo, mas o irmão não quer.” Qual é o problema?',
        resolucao:
          'A frase não deixa claro o que o irmão recusa: a viagem acontecer logo ou viajar logo. Ao segundo “quer” falta o complemento explícito, e o advérbio “logo” pode modificar dois termos diferentes. Uma reescrita sem ambiguidade seria: “Ana quer viajar logo, mas o irmão prefere esperar.”',
      },
      {
        tipo: 'atencao',
        texto:
          '**Metáfora x comparação**: sem conectivo (como, tal qual, parece) é metáfora; com conectivo, é comparação.\n\n**Zeugma x elipse**: na elipse, o termo omitido não aparece antes no texto; na zeugma, aparece. A banca costuma tratar as duas como elipse.\n\n**Pleonasmo**: é figura quando intencional e expressiva; é vício (redundância) quando desnecessário.\n\n**Oxímoro x paradoxo**: nas provas, costumam ser tratados como a mesma figura.\n\n**Anáfora**: como figura de linguagem, repete a palavra no início de versos ou frases; como processo de coesão, retoma um termo já citado. Não confunda as duas.\n\n**Homônimos perfeitos x polissemia**: se a classe gramatical muda, são homônimos; se a classe permanece e só o sentido muda, é polissemia.\n\n**Estrangeirismo**: gramáticos mais rígidos o condenam como vício, e autores mais modernos discordam. A banca costuma cobrar a troca quando há equivalente em português.\n\n**Acordo Ortográfico de 1990**: não se acentuam mais “para” (verbo parar), “pelo” (cabelo), “pera” e “polo”; “ideia” perdeu o acento. “Pôde” (passado) e “pode” (presente) mantêm o acento diferencial.\n\n**Locuções**: a norma desaconselha “a nível de”; use “em nível de” para hierarquia e “ao nível de” para mesma altura. Onde com sentido figurado (lugar que não é físico) é cobrado pela maioria das bancas como “em que”.',
      },
    ],
    fontes: [PESTANA_C04, PESTANA_C32],
    atualizadoEm: HOJE,
  },
];
