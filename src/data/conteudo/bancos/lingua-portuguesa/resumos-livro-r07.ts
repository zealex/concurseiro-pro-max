import type { ResumoTema } from '../../../types';

const PESTANA = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 12).';
const HOJE = '2026-11-26';

/** Resumos do livro (lote R07): verbo (cap. 12). */
export const RESUMOS_LIVRO_R07: ResumoTema[] = [
  {
    temaId: 'lp-verbos',
    titulo: 'Verbos: estrutura, tempos, modos, locução, formas nominais, voz e correlação',
    resumo:
      'A banca cobra a flexão do verbo (modo, tempo, número e pessoa), a escolha correta de tempo e modo, a locução verbal, as formas nominais, a transposição de voz e a correlação entre tempos, além da conjugação de verbos que caem com frequência.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Verbo** é a palavra que indica ação, processo, estado, mudança de estado, fenômeno natural ou existência, sempre situada no tempo. Ele se reconhece pela forma, porque se conjuga: varia em **modo**, **tempo**, **número** e **pessoa** (e, para muitos gramáticos, em **voz**).\n\nNa estrutura de uma forma conjugada aparecem o **radical** (que guarda o sentido), a **vogal temática** (VT), o **tema** (radical mais VT), a **desinência modo-temporal** (DMT) e a **desinência número-pessoal** (DNP). A VT é -a na 1ª conjugação (amar), -e na 2ª (vender) e -i na 3ª (partir). Nem toda forma traz todos esses elementos: a 1ª pessoa do singular do presente do indicativo não tem VT (eu amo) e, no presente do subjuntivo, a DMT ocupa o lugar dela.\n\nTempos e modos derivam de três formas básicas: o **presente do indicativo**, o **pretérito perfeito do indicativo** e o **infinitivo**. Do presente da 1ª pessoa nasce o presente do subjuntivo (eu amo, que eu ame). Do pretérito perfeito nascem o mais-que-perfeito e os dois subjuntivos passados e futuro (amaram, amara; amaste, amasse e amar). Do infinitivo nascem os futuros e os condicionais (amar, amarei, amaria) e o imperfeito do indicativo (amava). Por isso, um verbo irregular costuma errar em cadeia: fazer, faço, faça.\n\nNa oração, o verbo é o núcleo do predicado. A exceção tradicional é o predicado nominal, em que o verbo de ligação só liga o sujeito ao predicativo.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Tempos e modos: valor mais cobrado (o aspecto acompanha cada tempo)',
          colunas: ['Tempo e modo', 'Valor mais cobrado', 'Exemplo'],
          linhas: [
            ['Presente do indicativo', 'Fato atual, habitual ou verdade permanente; ação começada no passado que continua', 'A feira acontece todo sábado.'],
            ['Pretérito perfeito do indicativo', 'Fato concluído no passado (aspecto conclusivo)', 'Ontem revisei o capítulo inteiro.'],
            ['Pretérito imperfeito do indicativo', 'Fato passado não concluído, em andamento, habitual ou descritivo', 'Naquele ano, ela morava perto da praia.'],
            ['Pretérito mais-que-perfeito do indicativo', 'Fato passado anterior a outro fato também passado', 'Quando chegamos, o ônibus já partira.'],
            ['Futuro do presente do indicativo', 'Fato certo, posterior ao momento da fala; em perguntas, fato incerto', 'Amanhã conhecerei o resultado.'],
            ['Futuro do pretérito do indicativo', 'Fato posterior a outro já passado; hipótese não realizada; polidez', 'Ele disse que entregaria o trabalho no sábado.'],
            ['Presente do subjuntivo', 'Desejo, dúvida, possibilidade, exigência ou fato que depende de outro', 'Convém que você revise a lista de verbos.'],
            ['Pretérito imperfeito do subjuntivo', 'Hipótese ou condição não realizada, em qualquer tempo', 'Se eu soubesse a resposta, contaria a você.'],
            ['Futuro do subjuntivo', 'Hipótese eventual no futuro, geralmente após quando, se, enquanto e quem', 'Quem estudar com constância será aprovado.'],
            ['Imperativo afirmativo e negativo', 'Ordem, pedido, conselho ou súplica; o negativo copia o presente do subjuntivo', 'Estude com calma. Não estude de madrugada.'],
            ['Tempos compostos (ter ou haver + particípio)', 'Fato acabado, repetido ou contínuo; no subjuntivo, algo já concluído em relação a outro', 'Tenho estudado muito. Espero que você tenha lido o edital.'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          'Locução verbal é o conjunto de um verbo auxiliar, que se flexiona em pessoa e número, com um verbo principal, que fica no infinitivo, no gerúndio ou no particípio. Conta como uma só oração na análise sintática.',
          'Auxiliares de voz (ser, estar, ficar ou ir/vir + particípio) formam a passiva analítica: “As provas foram corrigidas pela banca.”',
          'Auxiliares de tempo composto (ter ou haver + particípio): “Eles tinham terminado a prova.” Na voz ativa, o particípio não concorda com o sujeito.',
          'Auxiliares de aspecto (começar a, acabar de, deixar de, continuar a, costumar, estar + gerúndio) indicam início, término, continuidade ou repetição: “Começamos a revisar cedo.”',
          'Auxiliares modais (dever, poder, precisar de, ter de, haver de, ir + infinitivo) indicam obrigação, possibilidade, necessidade ou intenção: “Você deve revisar a gramática.”',
          'Ter de e ter que são aceitos pela maioria dos gramáticos e das bancas como locuções modais.',
          'Teste 1: passe a frase da voz ativa para a passiva analítica, se o verbo for transitivo. Se o sentido se mantiver sem absurdo, há locução: “Vou ajudar um amigo” vira “Um amigo vai ser ajudado por mim”. Se a passiva ficar absurda, não há: “Tentei comprar um carro” vira “Um carro tentou ser comprado por mim”.',
          'Teste 2: se o verbo principal puder ser desenvolvido em oração sem perda de sentido, não há locução: “Vejo a menina passar por aqui” equivale a “Vejo que a menina passa por aqui”.',
          'Querer, parecer, tentar, pretender e conseguir são pseudoauxiliares: a tradição gramatical divide-se, e a intenção de quem fala define se há locução ou duas orações. Se a banca cobrar, analise os dois sentidos antes de responder.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Formas nominais: o verbo que age como substantivo, adjetivo ou advérbio',
          colunas: ['Forma', 'Marca', 'Função típica', 'Cuidado'],
          linhas: [
            ['Infinitivo impessoal', '-ar, -er, -ir (sem flexão)', 'Substantivo: “Estudar é preciso.” Ou depois de preposição: “Para vencer, é preciso foco.”', 'Não confundir com o futuro do subjuntivo (ver o bloco de atenção)'],
            ['Infinitivo pessoal', 'Forma do infinitivo com -es, -mos, -des ou -em, quando há sujeito de outra pessoa', 'Sujeito de outra pessoa: “Basta vocês estudarem com método.”', 'Normalmente vem depois de preposição; flexiona-se quando o sujeito é outro'],
            ['Gerúndio', '-ndo', 'Adjunto adverbial reduzido: “Saindo cedo, chegarei a tempo.” (tempo ou condição)', 'Indica ação em curso ou simultânea; o uso excessivo é malvisto em redação'],
            ['Particípio', '-ado, -ido (regular) ou forma irregular (feito, visto, aceito, impresso)', 'Compõe tempos compostos e a voz passiva; vira adjetivo quando só indica estado', 'Regular com ter ou haver (“tinha aceitado”); irregular com ser, estar ou ficar (“foi aceito”)'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Voz verbal** mostra a relação entre o verbo e o sujeito. Verbos de ligação e verbos impessoais não têm voz.\n\n**Voz ativa**: o sujeito pratica a ação: “O candidato revisou o edital.”\n\n**Voz passiva analítica**: o sujeito sofre a ação, com a locução ser (ou estar, ficar) + particípio, que concorda com o sujeito. O agente da passiva vem com “por” (ou, mais raramente, “de”): “As vagas foram preenchidas pelos aprovados.”\n\n**Voz passiva sintética**: verbo transitivo direto (ou transitivo direto e indireto) + o pronome apassivador “se”. O sujeito vem explícito e o verbo concorda com ele, e não há agente da passiva: “Venderam-se os livros usados.” Se o complemento vier preposicionado ou o verbo for intransitivo, o “se” costuma ser índice de indeterminação do sujeito, e não apassivador: “Confia-se em quem cumpre o prazo.”\n\n**Voz reflexiva**: o verbo é transitivo e o pronome reflexivo funciona como objeto; a ação volta ao próprio sujeito: “Ela se penteou com calma.” Na **reflexiva recíproca**, há pelo menos dois sujeitos praticando a ação um sobre o outro: “Os colegas se abraçaram um ao outro.” Verbos pronominais, como queixar-se e arrepender-se, têm o pronome como parte do verbo, sem função sintática.\n\n**Transposição**: só verbos transitivos diretos e transitivos diretos e indiretos passam da voz ativa para a passiva analítica. Não passam os intransitivos, os de ligação, os impessoais (“Houve briga”) e os de sentido passivo, como levar, receber, pesar e conter. Os transitivos indiretos, como responder a e obedecer a, em geral não passam, embora existam concessões polêmicas, como assistir no sentido de ver. Na passiva analítica, mantenha o tempo e o modo do auxiliar: “Espero que as pendências tenham sido resolvidas.”\n\n**Da analítica para a sintética**: elimine o agente da passiva, passe o verbo principal para a 3ª pessoa no mesmo tempo, junte o “se” e deixe o sujeito depois do verbo: “Foram divulgados os resultados” vira “Divulgaram-se os resultados”. Um sujeito determinado (“a banca divulgou os resultados”) não passa para a sintética, e não se explicita agente nela.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Correlação verbal: combinações mais cobradas entre oração principal e subordinada',
          colunas: ['Verbo da oração principal', 'Verbo da subordinada', 'Exemplo'],
          linhas: [
            ['Presente do indicativo', 'Presente do subjuntivo', 'Espero que você leia este resumo com atenção.'],
            ['Pretérito perfeito do indicativo', 'Pretérito imperfeito do subjuntivo', 'Pedi que você me avisasse antes da prova.'],
            ['Futuro do subjuntivo na subordinada, futuro do presente na principal', 'Futuro do presente', 'Quando os alunos entregarem a prova, a banca divulgará o gabarito.'],
            ['Imperfeito do subjuntivo na subordinada hipotética', 'Futuro do pretérito', 'Se eu tivesse tempo, estudaria mais.'],
          ],
        },
      },
      {
        tipo: 'atencao',
        texto:
          '**Haver impessoal**: no sentido de existir, não tem sujeito e fica no singular: “Houve reclamações” (não “Houveram”) e “Deve haver problemas”.\n\n**Futuro do subjuntivo x infinitivo**: “Quando chegar, avise” (conjunção + futuro do subjuntivo) e “Ao chegar, avise” (preposição + infinitivo) têm a mesma forma, mas classificações diferentes. Quem vem depois de “quando”, “se” ou “quem” pede o futuro do subjuntivo.\n\n**Derivados seguem o verbo base**: se ele revir o texto (rever deriva de ver); quando ela intervier (intervir deriva de vir); quem obtiver a nota (obter deriva de ter).\n\n**Imperativo e uniformidade de tratamento**: não misture pessoas. “Venha você também” e “Vem tu também” estão certos; “Vem você também” mistura a 2ª com a 3ª pessoa. O imperativo afirmativo da 2ª pessoa do singular não leva o “s” final.\n\n**Correlação errada**: “Se eu tivesse tempo, eu estudava” é errado; o correto é “estudaria”. O futuro do pretérito se correlaciona com o imperfeito do subjuntivo.\n\n**Gerundismo**: “Vou estar enviando o pedido” é condenado pela norma culta e por parte das bancas; o correto é “Vou enviar”. “Estou estudando” está certo, porque o gerúndio indica continuidade.\n\n**Conjugações que mais caem**: ser, ir, ter, vir, ver, pôr e haver, além de caber, valer, precaver-se, reaver, prover e viger. O pretérito imperfeito de ser, pôr, vir e ter é era, punha, vinha e tinha. No presente do subjuntivo, use esteja, dê, seja, haja, vá e queira, nunca “esteje” ou “seje”. Verbos defectivos como abolir, soer, viger e precaver-se não têm a 1ª pessoa do singular do presente do indicativo, por isso não há presente do subjuntivo para eles. O pronome “vós” é pouco usado na fala, mas as bancas ainda o cobram na conjugação.\n\n**Atualização pelo Acordo Ortográfico (em vigor desde 2009)**: não se usa mais trema em formas como arguir, delinquir e averiguar. Os acentos diferenciais de pôr, pôde, vêm e dê continuam valendo.',
      },
    ],
    fontes: [PESTANA],
    atualizadoEm: HOJE,
  },
];
