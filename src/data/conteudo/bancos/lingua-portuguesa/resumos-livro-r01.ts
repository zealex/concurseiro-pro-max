import type { ResumoTema } from '../../../types';

const PESTANA = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 01).';
const HOJE = '2026-11-26';

/** Resumo do lote R01 (cap. 01 do livro de Pestana): Fonologia. */
export const RESUMOS_LIVRO_R01: ResumoTema[] = [
  {
    temaId: 'lp-fonologia',
    titulo: 'Fonologia',
    resumo:
      'A banca cobra a diferença entre letra e fonema, a contagem de letras e fonemas e a classificação de vogais, semivogais e consoantes. Também pede hiato, ditongo, tritongo, separação silábica e a posição da sílaba tônica, que sustentam a ortografia e a acentuação.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A **Fonologia** estuda os sons da língua pelo papel que eles desempenham: como se combinam para formar palavras e como servem para distinguir significados. Não se confunde com a **Fonética**, que descreve a produção física dos sons; para concursos, o foco é a Fonologia.\n\nO **fonema** é a menor unidade sonora da palavra. Trocar um único fonema muda o sentido: em **pato** e **gato** a diferença está apenas no primeiro som.\n\nA **letra** é o sinal gráfico que representa um som. Letra e fonema não são a mesma coisa: uma letra pode representar mais de um fonema, e um fonema pode ser representado por duas letras (dígrafo). Por isso, o número de letras e o número de fonemas de uma palavra nem sempre batem.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Letras, dígrafos e dífonos',
          colunas: ['Caso', 'Como funciona', 'Exemplos'],
          linhas: [
            ['Dígrafo consonantal', 'Duas letras que representam um só som: ch, lh, nh, rr, ss, sc, sç, xc', 'chave, velho, nhoque, carro, assado, nascer'],
            ['Dígrafo com gu e qu', 'O u é apenas apoio antes de e ou i, por isso não é pronunciado', 'guerra, queijo (em água, o u é pronunciado)'],
            ['Vogal nasal com m ou n', 'O m ou o n na mesma sílaba só marcam a nasalização da vogal; não são consoantes', 'campo, anta'],
            ['Dífono', 'Uma letra com dois sons: o x que soa como ks', 'táxi, fixo'],
            ['Letra sem som', 'O h não representa fonema, exceto quando forma ch, lh ou nh', 'hoje tem 4 letras e 3 fonemas'],
            ['Letra com sons variados', 'O x muda de som conforme a palavra', 'xadrez (som de ch), exemplo (som de z), próximo (som de s), táxi (som de ks)'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          'Os fonemas são de três tipos.\n\n**Vogais** são sons produzidos sem obstrução do ar. São o centro da sílaba e as mais fortes na pronúncia. Podem ser orais (o a de casa) ou nasais (o a de cama).\n\n**Semivogais** têm som de I ou de U e ficam apoiadas em uma vogal, na mesma sílaba. São mais fracas que as vogais, como o i de pai, o o de pão e o e de mãe. Letras como M, N, W e Y também podem assumir esse papel.\n\n**Consoantes** são sons produzidos com a participação de algum órgão da boca, como lábios, dentes ou língua. São as letras que representam os demais sons, como b, c, d, f, p, t e v.\n\n**Sílaba** é o grupo de fonemas em torno de uma vogal, pronunciado em uma só emissão de voz. Sem vogal não há sílaba. Para separar as sílabas, pronuncie a palavra devagar: ca-ne-ta. Cada palavra tem uma só sílaba tônica, a de maior intensidade; o acento agudo ou circunflexo, quando existe, marca essa sílaba.',
      },
      {
        tipo: 'lista',
        itens: [
          '**Monossílaba**: tem uma só sílaba, como em chá.',
          '**Dissílaba**: tem duas sílabas, como em mesa.',
          '**Trissílaba**: tem três sílabas, como em cadeira.',
          '**Polissílaba**: tem mais de três sílabas, como em planejamento.',
          '**Oxítona**: a sílaba tônica é a última, como em café.',
          '**Paroxítona**: a sílaba tônica é a penúltima, como em lápis.',
          '**Proparoxítona**: a sílaba tônica é a antepenúltima, como em lâmpada.',
        ],
        ordenada: false,
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Encontros vocálicos',
          colunas: ['Encontro', 'Como identificar', 'Exemplos'],
          linhas: [
            ['Hiato', 'Duas vogais em sílabas diferentes (V + V)', 'sa-í-da, po-e-si-a, rio (ri-o)'],
            ['Ditongo crescente', 'Semivogal antes da vogal, na mesma sílaba (SV + V)', 'cá-rie, á-gua'],
            ['Ditongo decrescente', 'Vogal antes da semivogal, na mesma sílaba (V + SV)', 'lei-te, pau-sa, on-tem (ditongo nasal)'],
            ['Tritongo', 'Semivogal, vogal e semivogal na mesma sílaba (SV + V + SV)', 'en-xa-guei, quais'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          'Separar sílabas é a base da translineação e de questões sobre contagem de sílabas.\n\n**Hiatos se separam**: po-e-si-a, sa-í-da. **Ditongos e tritongos não se separam**: lei-te, en-xa-guei.\n\n**Dígrafos**: ch, lh, nh, qu e gu ficam juntos (ve-lho, quei-jo); já rr, ss, sc, sç, xc e xs são separados (car-ro, nas-cer, ex-ces-so).\n\n**Encontros consonantais**: quando as duas consoantes formam um encontro perfeito (consoante + l ou r, como em pla-no), ficam na mesma sílaba. Quando o encontro é imperfeito, separam-se: rit-mo, obs-tá-cu-lo.\n\n**Prefixos**: se o prefixo termina em consoante e a palavra seguinte começa por vogal, essa consoante vai para a sílaba da vogal (bi-sa-vô, de-su-ma-no). Se a palavra seguinte começa por consoante, a consoante do prefixo fica com a sílaba anterior (sub-ter-râ-neo).\n\nNa translineação de um texto formal, evite deixar uma vogal isolada no início ou no fim da linha: escreva óti-mo, e não ó-timo.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Ortoépia e prosódia**: ortoépia é a pronúncia correta dos sons; prosódia trata da posição correta da sílaba tônica. Desviar a tônica é a **silabada**: fósforo se fala FÓS-fo-ro (não fos-FO-ro), ônibus se fala ÔNI-bus e lâmpada se fala LÂM-pa-da.\n\n**Nasal não é consoante**: em campo, o m não forma encontro consonantal com o p; ele só marca a nasalização da vogal anterior.\n\n**Acordo Ortográfico de 1990** (em vigor no Brasil desde 2009): o trema foi abolido, exceto em nomes próprios estrangeiros e seus derivados (Müller, mülleriano). Também não se acentuam mais os ditongos abertos ei e oi em paroxítonas: assembleia, jiboia, heroico.\n\n**Ditongos finais**: palavras como cárie e área são lidas como paroxítonas com ditongo crescente (cá-rie, á-rea), e não como proparoxítonas com hiato. É a leitura que a banca costuma usar.\n\n**Divergências**: a classificação do L em fim de sílaba (sal, mal) como semivogal e o timbre aberto ou fechado de e e o dividem gramáticos. A banca costuma cobrar esses pontos pouco e não os trata como regra geral. Em boa parte do Brasil, o e e o o finais soam como i e u (pente, povo), mas isso é pronúncia, não grafia.',
      },
    ],
    fontes: [PESTANA],
    atualizadoEm: HOJE,
  },
];
