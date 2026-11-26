import type { ResumoTema } from '../../../types';

const PESTANA = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (caps. 07 a 10).';
const HOJE = '2026-11-26';

/** Resumo de gramática (R05): substantivo, adjetivo, artigo e numeral (caps. 07 a 10 do livro). */
export const RESUMOS_LIVRO_R05: ResumoTema[] = [
  {
    temaId: 'lp-nomes',
    titulo: 'Substantivo, adjetivo, artigo e numeral',
    resumo:
      'A banca cobra sobretudo a identificação de cada classe (artigo x pronome, numeral e preposição), o plural de substantivos simples e compostos, o gênero dos substantivos e o valor do adjetivo no texto.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'As quatro classes trabalham dentro do **sintagma nominal**, o grupo de palavras centrado em um substantivo. O **substantivo** é o núcleo: nomeia seres, ações, estados, qualidades e conceitos. O **adjetivo** caracteriza esse núcleo (ou outra palavra de valor substantivo). O **artigo** antecede o substantivo e é sempre adjunto adnominal. O **numeral** indica quantidade, ordem, multiplicação ou fração.\n\nPara identificar a classe, observe a **função da palavra na frase**, não apenas a posição. Nem toda palavra depois de artigo vira substantivo: em “o terceiro andar” e “o meu carro”, “terceiro” continua numeral e “meu” continua pronome. A **substantivação** ocorre quando a palavra passa a nomear algo e recebe um determinante: “O bonito da festa foi a comida”.\n\n**Artigo**: o definido (o, a, os, as) apresenta um ser já conhecido de quem fala e de quem ouve; o indefinido (um, uma, uns, umas) apresenta um ser novo ou generaliza. A técnica do texto é apresentar com indefinido e retomar com definido. Não confunda o artigo com pronome oblíquo (“Vi-os na praça”, junto ao verbo), pronome demonstrativo (“as que chegaram”, equivale a “aquelas”), preposição (a) ou numeral e pronome indefinido (“um” equivale a “somente um” ou está em paralelo com “outro”).\n\n**Uso do artigo**: aparece com países e estados (“o Brasil”, “a Bahia”) e com cidades que têm nome de substantivo comum (“o Rio de Janeiro”); em geral, não aparece com cidades como “São Paulo”. É dispensado antes de meses e de nomes próprios de pessoas, salvo em tom afetivo ou familiar.\n\n**Numeral**: cardinal (dois, cem), ordinal (segundo), multiplicativo (dobro, triplo) e fracionário (meio, terço). Em reis, papas e séculos, use o ordinal até décimo e o cardinal a partir de onze, quando o numeral vem depois do nome: “o rei Carlos quinto” e “o rei Carlos onze”. O primeiro dia do mês leva ordinal: “1º de janeiro”.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Plural dos substantivos simples',
          colunas: ['Terminação do singular', 'Plural', 'Exemplos'],
          linhas: [
            ['Vogal ou ditongo', '+ s', 'cadeira → cadeiras; rua → ruas'],
            ['-ão oxítono (a maioria)', '-ões', 'balcão → balcões; mamão → mamões'],
            ['-ão monossílabo ou paroxítono', '-ãos', 'órfão → órfãos; mão → mãos'],
            ['-ão com plural irregular', '-ãos, -ães ou -ões', 'consulte o VOLP antes de marcar'],
            ['-al, -el, -ol (oxítono ou paroxítono)', '-ais, -éis, -óis', 'jornal → jornais; papel → papéis; sol → sóis'],
            ['-il oxítono', '-is', 'fuzil → fuzis'],
            ['-m', '-ns', 'item → itens; álbum → álbuns'],
            ['-s monossílabo ou oxítono', '-es', 'gás → gases'],
            ['-s não tônico', 'invariável', 'lápis; vírus'],
            ['-z', '-es', 'luz → luzes; vez → vezes'],
            ['-r', '-es', 'mulher → mulheres; açúcar → açúcares'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Verbo + substantivo**: só o substantivo varia. “quebra-cabeça” vira “quebra-cabeças”.',
          '**Substantivo + adjetivo**: os dois elementos variam. “carro-forte” vira “carros-fortes”.',
          '**Substantivo + preposição + substantivo**: só o primeiro varia. “pai de santo” vira “pais de santo”.',
          '**Prefixo + substantivo** (vice-, ex-): o prefixo não varia. “vice-presidente” vira “vice-presidentes”.',
          '**Adjetivo + adjetivo**: só o último varia. “relações político-econômicas”.',
          '**Adjetivo composto com substantivo** (verde-oliva, verde-garrafa): invariável. “camisas verde-oliva”.',
          '**Sem-** (sem-terra, sem-teto): invariável no plural, pois é adjetivo composto substantivado.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Gênero dos substantivos',
          colunas: ['Tipo', 'Como se marca o gênero', 'Exemplos'],
          linhas: [
            ['Biforme', 'Muda de forma (troca de terminação ou outro radical)', 'aluno / aluna; ator / atriz; cavalo / égua'],
            ['Uniforme (comum de dois gêneros)', 'Uma só forma para os dois sexos; o determinante indica o gênero', 'o/a estudante; o/a dentista; o/a jovem'],
            ['Sobrecomum', 'Só se refere a pessoas; uma forma serve a qualquer sexo', 'a testemunha; a vítima'],
            ['Epiceno', 'Refere-se a animais; o sexo vem indicado por “macho” ou “fêmea”', 'a baleia macho; o jacaré fêmea'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          'O **adjetivo** exerce duas funções: **adjunto adnominal**, quando está dentro do sintagma nominal (“a *nova* biblioteca”), ou **predicativo**, quando fica fora dele e liga-se ao verbo ou ao objeto (“a biblioteca estava *lotada*”). Se retirar o adjetivo quase não muda a informação essencial, ele tende a ser adjunto.\n\n**Restritivo x explicativo**: o restritivo separa o ser dos seus iguais (“Comprei a camisa azul”, entre outras cores). O explicativo traz uma qualidade inerente ao ser, costuma vir entre vírgulas e não restringe nada (“O fogo, quente por natureza, aquece”).\n\n**Posição e sentido**: antes do substantivo, o adjetivo costuma ter valor subjetivo; depois, costuma ser objetivo e descritivo. Por isso “um grande amigo” (estimado) é diferente de “um amigo grande” (de estatura). Quando o adjetivo caracteriza uma oração inteira, como em “Foi bom que todos viessem”, fica no masculino singular.\n\n**Graus**: o comparativo usa “tão... quanto” (igualdade), “mais... do que” (superioridade) e “menos... do que” (inferioridade). O superlativo absoluto é analítico (“muito fiel”) ou sintético (“fidelíssimo”), e o relativo usa “o mais/o menos... de”. Bom, mau, grande e pequeno têm formas próprias: melhor, pior, maior e menor no comparativo; ótimo, péssimo, máximo e mínimo no superlativo absoluto sintético.\n\n**Pátrio e gentílico** (“pão francês”, “queijo mineiro”) indicam origem. A **locução adjetiva** (“relatório sobre finanças”) equivale a um adjetivo (“relatório financeiro”), mas sem sufixo.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Classificando o “um”',
        enunciado:
          'Classifique o “um” em cada frase: (1) “Só um candidato foi aprovado.” (2) “Um candidato foi aprovado com nota máxima.” (3) “Um sabe a resposta; outro, não.”',
        resolucao:
          '(1) Numeral: indica quantidade e aceita “só”, “somente” ou “apenas”. (2) Artigo indefinido: apresenta um candidato ainda não identificado e pode ser omitido sem perder a ideia central. (3) Pronome indefinido: aparece em paralelo com “outro” e substitui o substantivo. Teste prático: se “um” puder ser trocado por “somente um”, é numeral; se alternar com “o”, é artigo; se estiver em paralelo com “outro” e sem substantivo, é pronome.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Milhão, bilhão e trilhão** são masculinos e não recebem feminino: “dois milhões de pessoas” está certo; “duas milhões de pessoas” não.\n\n**Comparativo com bom e mau**: “Este plano é melhor que o outro” está certo. “Mais bom” só cabe ao comparar duas qualidades de um mesmo ser (“ele é mais bom que mau”).\n\n**Gênero que muda o sentido**: o capital (dinheiro) x a capital (cidade); o moral (ânimo) x a moral (valores); o grama (unidade de massa) x a grama (relva); o caixa (funcionário) x a caixa (objeto).\n\n**Ambiguidade**: em “A venda do imóvel rendeu muito” não se sabe se o imóvel foi vendido ou se alguém o vendeu. A frase precisa de contexto para mostrar se o termo é agente ou paciente.\n\n**Artigo e preposição**: a contração (do, na, pelo) é a regra geral. Antes de infinitivo com sujeito próprio, gramáticos divergem; a banca costuma cobrar a forma sem contração (“Falou-se muito de o clima mudar”).\n\n**“Presidenta”**: o VOLP registra a forma, mas há divergência entre gramáticos sobre o uso. Siga a forma adotada pelo enunciado da questão.\n\n**“Ambos os dois”** é tratado por parte dos gramáticos como redundância. Prefira “ambos” ou “os dois”.\n\n**Acordo Ortográfico de 1990** (em vigor no Brasil desde 2009): “para” perdeu o acento também em compostos, por isso se escreve “para-choque” e “para-brisa”.',
      },
    ],
    fontes: [PESTANA],
    atualizadoEm: HOJE,
  },
];
