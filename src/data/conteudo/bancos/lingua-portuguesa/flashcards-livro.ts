import type { Flashcard } from '../../../types';

/** Flashcards do livro de Pestana: fonologia, classes (nomes, pronomes, invariáveis), que/se/como e registros. */
export const FLASHCARDS_LIVRO: Flashcard[] = [
  /* ---------- Fonologia ---------- */
  {
    id: 'lp-fonologia-f01',
    temaId: 'lp-fonologia',
    frente: 'Letra e fonema são a mesma coisa?',
    verso: 'Não. A letra é o sinal gráfico; o fonema é o som. Uma letra pode representar mais de um fonema, e duas letras podem representar um só, como no dígrafo de “chave”.',
  },
  {
    id: 'lp-fonologia-f02',
    temaId: 'lp-fonologia',
    frente: 'O que é dígrafo?',
    verso: 'Um par de letras que representa um único som, como ch, lh, nh, rr, ss e sc: “chave”, “velho”, “ninho”, “carro”, “nascer”.',
  },
  {
    id: 'lp-fonologia-f03',
    temaId: 'lp-fonologia',
    frente: 'Qual a diferença entre hiato e ditongo?',
    verso: 'No hiato, as duas vogais ficam em sílabas diferentes (sa-í-da, po-e-si-a) e se separam na translineação. No ditongo, vogal e semivogal dividem a mesma sílaba (lei-te) e não se separam.',
  },
  {
    id: 'lp-fonologia-f04',
    temaId: 'lp-fonologia',
    frente: 'O que é tritongo?',
    verso: 'Três fonemas numa só sílaba: semivogal, vogal e semivogal. Exemplos são “enxaguei” (en-xa-guei) e “quais”, que também não se separam na translineação.',
  },
  {
    id: 'lp-fonologia-f05',
    temaId: 'lp-fonologia',
    frente: 'Como classificar “lâmpada” quanto à tônica?',
    verso: 'É proparoxítona: a sílaba tônica é a antepenúltima (LÂM-pa-da). Oxítona tem a tônica na última sílaba, e paroxítona, na penúltima.',
  },
  {
    id: 'lp-fonologia-f06',
    temaId: 'lp-fonologia',
    frente: 'Quais são as três classes de fonemas?',
    verso: 'Vogais, produzidas sem obstrução do ar e centro da sílaba; semivogais, com som de i ou u, apoiadas em uma vogal (pai, pão); e consoantes, em que algum órgão da boca (lábios, dentes, língua) obstrui o ar.',
  },
  {
    id: 'lp-fonologia-f07',
    temaId: 'lp-fonologia',
    frente: 'Como separar as sílabas de “obstáculo”?',
    verso: 'obs-tá-cu-lo. O encontro “bs” é imperfeito, pois não é consoante seguida de l ou r, então as consoantes se separam. Em encontro perfeito, como “pla-no”, ficam juntas.',
  },
  {
    id: 'lp-fonologia-f08',
    temaId: 'lp-fonologia',
    frente: 'O que é silabada?',
    verso: 'É deslocar a sílaba tônica da palavra, como dizer “fos-FO-ro” em vez de FÓS-fo-ro. Esse é um problema de prosódia, não de grafia.',
  },

  /* ---------- Substantivo, adjetivo, artigo e numeral ---------- */
  {
    id: 'lp-nomes-f01',
    temaId: 'lp-nomes',
    frente: 'Como identificar a classe de uma palavra?',
    verso: 'Pela função que ela exerce na frase, e não pela posição. Em “o terceiro andar”, “terceiro” continua sendo numeral, mesmo vindo depois do artigo.',
  },
  {
    id: 'lp-nomes-f02',
    temaId: 'lp-nomes',
    frente: 'Artigo definido e indefinido: qual a diferença?',
    verso: 'O definido (o, a, os, as) apresenta algo já conhecido de quem fala e de quem ouve. O indefinido (um, uma, uns, umas) apresenta algo novo ou generaliza. No texto, costuma-se apresentar com indefinido e retomar com definido.',
  },
  {
    id: 'lp-nomes-f03',
    temaId: 'lp-nomes',
    frente: 'Qual o plural de “mão” e de “papel”?',
    verso: 'mão faz mãos (monossílabo em -ão recebe -ãos). papel faz papéis (terminação -el de palavra oxítona ou paroxítona muda para -éis).',
  },
  {
    id: 'lp-nomes-f04',
    temaId: 'lp-nomes',
    frente: 'Qual o plural de “quebra-cabeça” e de “vice-presidente”?',
    verso: 'quebra-cabeças: como é verbo + substantivo, só o substantivo vai ao plural. vice-presidentes: o prefixo vice- não varia, mas o substantivo varia.',
  },
  {
    id: 'lp-nomes-f05',
    temaId: 'lp-nomes',
    frente: 'Qual o plural de “carro-forte” e de “pai de santo”?',
    verso: 'carros-fortes: substantivo + adjetivo, e os dois elementos variam. pais de santo: substantivo + preposição + substantivo, e só o primeiro varia.',
  },
  {
    id: 'lp-nomes-f06',
    temaId: 'lp-nomes',
    frente: 'Testemunha, jacaré e estudante: como se marca o gênero?',
    verso: 'Testemunha é sobrecomum: uma forma serve a qualquer sexo. Jacaré é epiceno: sexo indicado por “macho” ou “fêmea”. Estudante é uniforme: o artigo marca o gênero (o/a estudante).',
  },
  {
    id: 'lp-nomes-f07',
    temaId: 'lp-nomes',
    frente: 'Adjetivo restritivo e explicativo: qual a diferença?',
    verso: 'O restritivo separa o ser dos seus iguais (“a camisa azul”, entre outras cores) e não vem entre vírgulas. O explicativo traz uma qualidade inerente e costuma vir entre vírgulas (“o fogo, quente por natureza”).',
  },
  {
    id: 'lp-nomes-f08',
    temaId: 'lp-nomes',
    frente: 'Qual a diferença entre “um grande amigo” e “um amigo grande”?',
    verso: 'Antes do substantivo, o adjetivo costuma ter valor subjetivo: “grande amigo” é amigo estimado. Depois, costuma ser objetivo: “amigo grande” é alguém de estatura alta.',
  },
  {
    id: 'lp-nomes-f09',
    temaId: 'lp-nomes',
    frente: 'Em “Só um candidato foi aprovado”, o “um” é artigo?',
    verso: 'Não. É numeral, pois admite “só” ou “somente um”. Como artigo indefinido, o “um” apresentaria um candidato novo, sem a ideia de quantidade exata.',
  },
  {
    id: 'lp-nomes-f10',
    temaId: 'lp-nomes',
    frente: 'Qual o plural de “milhão”?',
    verso: 'Milhão, bilhão e trilhão são masculinos e não têm feminino: “dois milhões de pessoas” está certo; “duas milhões” não.',
  },

  /* ---------- Pronomes ---------- */
  {
    id: 'lp-pronome-f01',
    temaId: 'lp-pronome',
    frente: 'Como fica o objeto direto “ele” em “Pegue ele”?',
    verso: 'Na norma culta, o objeto direto usa a forma oblíqua: “Pegue-o”. Pronomes retos, como eu, tu, ele e ela, não funcionam como objeto direto.',
  },
  {
    id: 'lp-pronome-f02',
    temaId: 'lp-pronome',
    frente: 'Como fica o “o” depois de verbo terminado em r, s ou z?',
    verso: 'Vira -lo, -la, -los ou -las, com a consoante final do verbo caindo: “vou fazê-lo”. Depois de ditongo nasal (-am, -em, -ão, -õe), vira -no, -na, -nos ou -nas: “compraram a casa” → “compraram-na”.',
  },
  {
    id: 'lp-pronome-f03',
    temaId: 'lp-pronome',
    frente: 'Com “você”, qual pessoa usar no verbo?',
    verso: 'Você e os demais pronomes de tratamento pedem verbo na 3ª pessoa: “Você nunca fez mal”. Misturar com tu (“você fizeste”) quebra a uniformidade de tratamento.',
  },
  {
    id: 'lp-pronome-f04',
    temaId: 'lp-pronome',
    frente: 'Com “a gente”, como conjugar o verbo?',
    verso: 'A gente equivale a nós, mas o verbo vai na 3ª pessoa do singular: “A gente vai à praia” está certo; “A gente vamos” está errado.',
  },
  {
    id: 'lp-pronome-f05',
    temaId: 'lp-pronome',
    frente: 'Depois de preposição, qual forma pronominal usar?',
    verso: 'A forma tônica: “entre mim e você”, e não “entre eu e você”. A forma reta só aparece depois de preposição quando é sujeito de verbo.',
  },
  {
    id: 'lp-pronome-f06',
    temaId: 'lp-pronome',
    frente: '“Dele” e “dela” são possessivos?',
    verso: 'Não. São pronomes oblíquos tônicos, formados por preposição + pronome. Os possessivos são meu, teu, seu, nosso e vosso, com suas flexões.',
  },
  {
    id: 'lp-pronome-f07',
    temaId: 'lp-pronome',
    frente: 'Como desfazer a ambiguidade do possessivo “seu”?',
    verso: 'Em “prendeu o bandido na casa dele”, o “dele” esclarece quem é o possuidor. Também se resolve com “próprio” ou reorganizando a frase.',
  },
  {
    id: 'lp-pronome-f08',
    temaId: 'lp-pronome',
    frente: 'Qual demonstrativo retoma o termo mais distante?',
    verso: 'Aquele, que costuma apontar para o primeiro termo citado. Já “este” pode anunciar o que vem ou retomar o último termo citado, e “esse” retoma o que já foi dito.',
  },
  {
    id: 'lp-pronome-f09',
    temaId: 'lp-pronome',
    frente: 'Como se trata o juiz no vocativo?',
    verso: 'Por “Meritíssimo” (ou “Meritíssima”), abreviado MM. Não existe “Vossa Meritíssima”, que é forma errada.',
  },

  /* ---------- Advérbio, preposição, conjunção e interjeição ---------- */
  {
    id: 'lp-invariaveis-f01',
    temaId: 'lp-invariaveis',
    frente: 'O que caracteriza o advérbio?',
    verso: 'Modifica verbo, adjetivo, outro advérbio ou uma oração inteira, funcionando como adjunto adverbial. Pela visão tradicional, é invariável: não se flexiona em gênero nem em número.',
  },
  {
    id: 'lp-invariaveis-f02',
    temaId: 'lp-invariaveis',
    frente: 'Todo advérbio terminado em -mente indica modo?',
    verso: 'Não. Esses advérbios vêm de adjetivos e podem marcar tempo (semanalmente), dúvida (provavelmente) ou opinião (lamentavelmente).',
  },
  {
    id: 'lp-invariaveis-f03',
    temaId: 'lp-invariaveis',
    frente: 'Preposição relacional × nocional: qual a diferença?',
    verso: 'A relacional é exigida por verbo, nome ou adjetivo (gostar de, favorável a), e o termo que ela introduz é complemento. A nocional indica tempo, lugar, causa ou modo sem ser exigida, e o termo é adjunto.',
  },
  {
    id: 'lp-invariaveis-f04',
    temaId: 'lp-invariaveis',
    frente: 'Quais são as preposições essenciais?',
    verso: 'a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob e sobre. As acidentais são palavras de outras classes que atuam como preposição, como conforme, mediante, salvo e exceto.',
  },
  {
    id: 'lp-invariaveis-f05',
    temaId: 'lp-invariaveis',
    frente: 'O que faz uma conjunção?',
    verso: 'Liga palavras, orações ou períodos e explicita a relação lógica entre eles (oposição, causa, condição e outras). As coordenativas ligam partes independentes; as subordinativas ligam uma oração dependente à que ela complementa ou modifica.',
  },
  {
    id: 'lp-invariaveis-f06',
    temaId: 'lp-invariaveis',
    frente: '“Desde que” é condicional ou temporal?',
    verso: 'Depende do verbo. Com subjuntivo, é condicional: “Desde que estudes, passarás”. Com indicativo, é temporal: “Desde que se mudou, não nos falamos”.',
  },
  {
    id: 'lp-invariaveis-f07',
    temaId: 'lp-invariaveis',
    frente: '“Não obstante” é adversativa ou concessiva?',
    verso: 'Adversativa com verbo no indicativo (“Ele estudou pouco; não obstante, foi aprovado”). Concessiva com verbo no subjuntivo (“Não obstante esteja cansado, treina todos os dias”).',
  },
  {
    id: 'lp-invariaveis-f08',
    temaId: 'lp-invariaveis',
    frente: 'Como reconhecer uma interjeição?',
    verso: 'É invariável, sem função sintática, e exprime emoção, reação ou apelo, quase sempre com entonação marcada: “Puxa!”, “Cuidado!”, “Meu Deus!”. Pode ser também uma onomatopeia, como “Bum!”.',
  },
  {
    id: 'lp-invariaveis-f09',
    temaId: 'lp-invariaveis',
    frente: 'Quando usar por que, porque, por quê e porquê?',
    verso: '“Por que” inicia pergunta ou equivale a “por qual razão”. “Porque” é conjunção que explica e equivale a “pois”. “Por quê” vem no fim da frase, e “porquê” é substantivo, com artigo: “o porquê”.',
  },
  {
    id: 'lp-invariaveis-f10',
    temaId: 'lp-invariaveis',
    frente: '“Frente a” ou “diante de”: qual o uso oficial?',
    verso: 'O Manual de Redação da Presidência evita “frente a” e prefere “em face de” ou “diante de”. Se a questão cobrar a forma oficial, escolha uma dessas duas.',
  },

  /* ---------- Que, se e como ---------- */
  {
    id: 'lp-que-se-como-f01',
    temaId: 'lp-que-se-como',
    frente: 'Como diferenciar “que” pronome relativo de conjunção integrante?',
    verso: 'O relativo retoma um termo anterior e pode ser trocado por “o qual”. A integrante só introduz uma oração que completa outra, sem retomar nada, e pode ser trocada por “isso”.',
  },
  {
    id: 'lp-que-se-como-f02',
    temaId: 'lp-que-se-como',
    frente: 'Em “Há que estudar”, qual a classe do “que”?',
    verso: 'Preposição acidental, que equivale a “de”, “a” ou “para”. A frase significa que é preciso estudar.',
  },
  {
    id: 'lp-que-se-como-f03',
    temaId: 'lp-que-se-como',
    frente: 'Quando o “que” é partícula expletiva?',
    verso: 'Quando dá realce à frase e pode ser retirado sem alterar a estrutura, como em “Ele que se vire sozinho”.',
  },
  {
    id: 'lp-que-se-como-f04',
    temaId: 'lp-que-se-como',
    frente: 'Quando o “se” é partícula apassivadora?',
    verso: 'Com verbo transitivo direto e sujeito paciente, com o qual o verbo concorda: “Vendem-se casas”, que equivale a “Casas são vendidas”.',
  },
  {
    id: 'lp-que-se-como-f05',
    temaId: 'lp-que-se-como',
    frente: 'Quando o “se” é índice de indeterminação do sujeito?',
    verso: 'Com verbo intransitivo ou transitivo indireto, sem sujeito, sempre no singular: “Precisa-se de médicos”. O teste é inserir “alguém” como sujeito.',
  },
  {
    id: 'lp-que-se-como-f06',
    temaId: 'lp-que-se-como',
    frente: 'Qual o sentido da conjunção condicional “se”?',
    verso: 'Equivale a “caso”: “Se chover, não sairemos” pode ser reescrito como “Caso chova, não sairemos”.',
  },
  {
    id: 'lp-que-se-como-f07',
    temaId: 'lp-que-se-como',
    frente: 'Como diferenciar o “como” causal do comparativo?',
    verso: 'O causal pode ser trocado por “porque” e explica um motivo: “Como não havia vagas, fui embora”. O comparativo introduz o segundo termo de uma comparação: “Ana é tão dedicada como a irmã”.',
  },
  {
    id: 'lp-que-se-como-f08',
    temaId: 'lp-que-se-como',
    frente: 'O “como” conformativo equivale a quê?',
    verso: 'A “conforme” ou “segundo”: “Como o edital previa, a prova terá duas etapas”.',
  },
  {
    id: 'lp-que-se-como-f09',
    temaId: 'lp-que-se-como',
    frente: 'Quando o “como” é pronome relativo?',
    verso: 'Quando retoma palavras como “modo”, “maneira”, “jeito” ou “forma”: “A forma como ele explica é clara”.',
  },

  /* ---------- Registros e variações ---------- */
  {
    id: 'lp-registros-f01',
    temaId: 'lp-registros',
    frente: 'O que é norma culta?',
    verso: 'É o conjunto de regras gramaticais baseado no uso formal da língua por falantes escolarizados. É o padrão cobrado nas provas de correção gramatical.',
  },
  {
    id: 'lp-registros-f02',
    temaId: 'lp-registros',
    frente: 'O que é variação diatópica?',
    verso: 'É a variação pela região, no sotaque, no vocabulário e nas construções. “Aipim”, “macaxeira” e “mandioca” nomeiam a mesma planta em regiões diferentes.',
  },
  {
    id: 'lp-registros-f03',
    temaId: 'lp-registros',
    frente: 'Variação diastrática e diafásica: qual a diferença?',
    verso: 'A diastrática está ligada ao grupo social ou à profissão, com gírias e jargões. A diafásica está ligada à situação e ao grau de formalidade com o interlocutor.',
  },
  {
    id: 'lp-registros-f04',
    temaId: 'lp-registros',
    frente: 'Registro culto e coloquial é o mesmo que fala e escrita?',
    verso: 'Não. O registro é escolhido conforme a situação. Há coloquial escrito (mensagem de aplicativo) e culto falado (discurso formal).',
  },
  {
    id: 'lp-registros-f05',
    temaId: 'lp-registros',
    frente: 'Quais traços diferenciam a língua falada da escrita?',
    verso: 'A falada é mais espontânea e repetitiva, com marcadores como “né” e “tipo”, frases curtas e truncamentos. A escrita costuma ser planejada, com frases mais completas e menos marcadores.',
  },
  {
    id: 'lp-registros-f06',
    temaId: 'lp-registros',
    frente: 'Como fica o “haver” no sentido de existir?',
    verso: 'É impessoal, por isso fica no singular mesmo com complemento plural: “deve haver vagas”, e não “devem haver”. Em locução verbal, o auxiliar também fica no singular.',
  },
  {
    id: 'lp-registros-f07',
    temaId: 'lp-registros',
    frente: 'Por que não misturar “tu” e “você” no mesmo texto?',
    verso: 'Porque quebra a uniformidade de tratamento. Se o texto começa com tu, verbos e pronomes devem seguir essa pessoa até o fim.',
  },
  {
    id: 'lp-registros-f08',
    temaId: 'lp-registros',
    frente: 'Como se acentuam “tem” e “vem” no plural?',
    verso: 'No singular não levam acento. No plural, levam circunflexo diferencial: “eles têm” e “eles vêm”.',
  },
];
