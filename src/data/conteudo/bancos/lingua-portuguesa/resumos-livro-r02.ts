import type { ResumoTema } from '../../../types';

const PESTANA = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (caps. 02 e 03).';
const HOJE = '2026-11-26';

export const RESUMOS_LIVRO_R02: ResumoTema[] = [
  {
    temaId: 'lp-ortografia',
    titulo: 'Ortografia e acentuação gráfica',
    resumo:
      'A banca cobra a acentuação pela classe e pela terminação da palavra (com as mudanças do Acordo de 1990), o emprego de E/I, C/Ç, G/J, S/Z/X/CH e o hífen com prefixos. Os verbos ter e vir no plural e os verbos em -ear e -iar são os campeões de erro.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A **ortografia** é o conjunto de regras que orienta a escrita correta. A **acentuação gráfica** é a parte que marca, com sinais, a sílaba tônica de certas palavras.\n\nA grafia vigente é a do **Acordo Ortográfico de 1990**, em vigor no Brasil desde 2009 e obrigatório desde 1º de janeiro de 2016. Na dúvida sobre a grafia de uma palavra, a referência é o **VOLP** (Vocabulário Ortográfico da Língua Portuguesa), da Academia Brasileira de Letras.\n\nPara acentuar, faça sempre duas perguntas: onde está a **sílaba tônica** e qual é a **terminação** da palavra. A maioria das palavras não recebe acento gráfico; por isso, o que a banca explora são as exceções e as palavras que mudam de sentido ou de classe quando acentuadas.\n\nO alfabeto tem **26 letras**. K, W e Y aparecem em símbolos de unidades (kg, W), em palavras estrangeiras (kiwi, webinar) e em nomes próprios estrangeiros e seus derivados.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Acentuação pela classe e pela terminação',
          colunas: ['Caso', 'Acentua-se quando...', 'Exemplos'],
          linhas: [
            ['Monossílabas tônicas', 'terminam em -a(s), -e(s) ou -o(s)', 'pé, nó, mês, pôs'],
            ['Oxítonas', 'terminam em -a(s), -e(s), -o(s) ou -em(ens)', 'sofá, avô, também, ninguém'],
            ['Paroxítonas', 'terminam em ditongo, -ão(s), -ã(s), -l, -n, -r, -x, -i(s), -us, -um, -ps ou outra terminação que não seja -a(s), -e(s), -o(s) e -em(ens)', 'álbum, ágil, bônus, fóssil, hábeis, bíceps'],
            ['Proparoxítonas', 'sempre (são todas acentuadas)', 'ônibus, lâmpada, pássaro'],
            ['Hiato com I ou U tônicos', 'o I ou o U tônico é a segunda vogal do hiato, isolado ou seguido de S (não de Z nem de NH)', 'saúde, país; mas raiz e rainha não recebem acento'],
            ['Ditongos abertos éi, éu, ói', 'em oxítonas e monossílabas (nas paroxítonas, o acento caiu)', 'céu, papéis, anzóis; mas ideia, jiboia'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Caíram** os acentos de *para* (verbo), *polo*, *pelo* (substantivo e contração), *pera* (preposição) e de *enjoo* e *voo*. O trema também saiu de palavras como *linguiça* e *aguentar*, e só permanece em nomes próprios estrangeiros e derivados.',
          '**Continuam** os acentos diferenciais de *pôde* (passado) e *pode* (presente), e de *pôr* (verbo) e *por* (preposição).',
          '**Ter** e **vir** e seus derivados (*manter*, *conter*, *intervir*) recebem circunflexo no plural: ele tem / eles têm; ele vem / eles vêm.',
          '**Facultativos**: *fôrma* e *dêmos* podem levar circunflexo, mas, no Brasil, o uso sem acento é o padrão.',
          'No hiato **EE** e **OO** não há mais circunflexo: *creem*, *leem*, *veem*, *voo*, *enjoo*. Verbos como *arguir* perderam o acento agudo na forma *argui* e no plural: *arguis*, *arguem*.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Letras e grafias que mais geram dúvida',
          colunas: ['Grafia', 'Use quando...', 'Exemplos'],
          linhas: [
            ['E ou I', 'E: -ir (2ª e 3ª pessoa do singular do presente), prefixo ante- (anterioridade), prefixo des- (negação), e -dade após adjetivo em -io. I: 2ª e 3ª pessoa do singular do presente de verbos em -air, -oer e -uir; prefixo anti- (oposição)', 'E: partes, antecâmara, desfazer, seriedade. I: sais, dói, constrói, antibiótico'],
            ['C ou Ç', 'C antes de e/i (som de s) e nas terminações -ecer e -encer. Ç antes de a, o, u, após ditongo, e em palavras derivadas de termos em -to, -tor, -ter', 'cebola, cidade, esquecer; balança, feição, ação (de ato)'],
            ['G ou J', 'G antes de e/i em -agem, -igem, -ugem, -gio, nos verbos em -ger e -gir e em gerir/gestão. J em -jar e -jear e em palavras de origem indígena, africana ou árabe', 'G: viagem (substantivo), fingir, digestão. J: viajem (verbo), laranjeira, ojeriza'],
            ['S, Z, X ou CH', 'S: adjetivos pátrios em -ense e -ês, sufixos -oso/-osa, -isa, substantivos em -ase, -ese, -ise, -ose, e depois de ditongo. Z: -ez(a) em abstratos de adjetivos, -izar de palavra sem S no radical. X: depois de ditongo, de en- e me-, e após bru, gra, la, li, lu. CH: depois de an, en, in, on, un', 'S: fluminense, gostosa, frase, coisa. Z: pobreza, amenizar. X: queixo, enxada, mexer, lixo. CH: concha, encher'],
            ['SS ou SC', 'SS: nomes de verbos em -primir, -meter, -mitir, -ceder, -cutir; prefixo terminado em vogal + S inicial; pretérito imperfeito do subjuntivo. SC: herança do latim', 'SS: impressão, minissaia, fosse. SC: crescer, consciência, nascer'],
            ['-EAR e -IAR', 'Verbos em -ear: acrescenta-se I antes do E nas formas do presente, exceto na 1ª e na 2ª do plural. Verbos em -iar seguem a regra normal. Mediar, ansiar, remediar, incendiar e odiar seguem o modelo de odiar', 'pentear: penteio, penteias, penteia, penteamos, penteais, penteiam; negociar: negocio, negocias'],
            ['H', 'letra sem som, herdada do latim e do grego; inicial de palavras de origem grega, latina ou inglesa; em interjeições (ah, oh, hein); depois de hífen nos prefixos (pré-história); em todo o verbo haver', 'hospital, hemorragia, hein, haver'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Compostos** com acento tônico próprio em cada elemento e sem elemento de ligação levam hífen: arco-íris, beija-flor, segunda-feira.',
          '**Prefixos** diante de H levam hífen (super-homem, pré-história). Se a letra final do prefixo é igual à inicial da palavra, usa-se hífen (micro-ondas, anti-inflamatório). Prefixo terminado em vogal diante de R ou S dobra a consoante e não leva hífen (antirracismo, ultrassom).',
          '**Não** se usa hífen com co- (coautor), com re- (reescrever) e com prefixo terminado em vogal diante de vogal diferente (autoescola).',
          '**Bem** e **mal** levam hífen diante de vogal ou H (bem-estar, mal-humorado). Benfeito, benfeitor e benquisto não levam.',
          '**Pós-, pré- e pró-** com acento tônico próprio levam hífen (pré-vestibular, pós-graduação). Átonos não levam (prever, predizer). Na dúvida, consulte o VOLP.',
          '**Sem hífen** em girassol, mandachuva, paraquedas e em compostos com elemento de ligação (pé de moleque, dia a dia, fim de semana).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — ter e vir no plural',
        enunciado:
          'Complete a frase com a forma correta do verbo entre parênteses: “Os professores da escola __ (manter) o horário mesmo em dias de chuva.”',
        resolucao:
          'Mantêm. O sujeito é “os professores”, no plural, e o verbo *manter* segue o padrão de *ter*: na 3ª pessoa do plural recebe circunflexo. A banca costuma separar o sujeito do verbo, com uma oração longa entre os dois, para que o candidato não perceba o plural.',
      },
      {
        tipo: 'atencao',
        texto:
          'A banca costuma explorar: (a) o verbo **ter** e **vir** com sujeito no plural e distante do verbo; (b) **viagem** (substantivo) e **viajem** (verbo); (c) a grafia de **ojeriza**, com J; (d) os **dígrafos** ch e sc, que não são sinônimos de x e de ss; (e) monossílabas que a banca trata como oxítonas (café, fé), caso em que a questão deve ser lida com atenção ao critério adotado. Lembre-se de que pronomes oblíquos átonos são ignorados na contagem de sílabas (*dá-lo*, *vê-los*) e que o hiato I e U não recebe acento antes de Z (raiz) nem de NH (rainha).',
      },
    ],
    fontes: [PESTANA],
    atualizadoEm: HOJE,
  },
];
