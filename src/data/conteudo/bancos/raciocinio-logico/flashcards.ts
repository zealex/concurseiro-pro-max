import type { Flashcard } from '../../../types';

export const FLASHCARDS: Flashcard[] = [
  /* ---------- rl-proposicoes ---------- */
  {
    id: 'rl-proposicoes-f01',
    temaId: 'rl-proposicoes',
    frente: 'O que é uma proposição?',
    verso:
      'Sentença declarativa que admite um, e só um, valor lógico: V ou F. Perguntas, ordens, exclamações e sentenças abertas (com variável, como “x + 2 = 5”) não são proposições. Proposição falsa continua sendo proposição.',
  },
  {
    id: 'rl-proposicoes-f02',
    temaId: 'rl-proposicoes',
    frente: 'Quando a conjunção p ∧ q (“p e q”) é verdadeira?',
    verso: 'Só quando p e q são ambas verdadeiras. Basta uma parte falsa para a conjunção ser falsa.',
  },
  {
    id: 'rl-proposicoes-f03',
    temaId: 'rl-proposicoes',
    frente: 'Quando a disjunção inclusiva p ∨ q (“p ou q”) é falsa?',
    verso: 'Só quando p e q são ambas falsas. Basta uma parte verdadeira para a disjunção ser verdadeira.',
  },
  {
    id: 'rl-proposicoes-f04',
    temaId: 'rl-proposicoes',
    frente: 'Qual é o único caso em que o condicional p → q é falso?',
    verso: 'V → F: antecedente verdadeiro e consequente falso. Com antecedente falso, o condicional é sempre verdadeiro.',
  },
  {
    id: 'rl-proposicoes-f05',
    temaId: 'rl-proposicoes',
    frente: 'Quando o bicondicional p ↔ q é verdadeiro?',
    verso: 'Quando p e q têm o MESMO valor lógico (ambas V ou ambas F). Com valores diferentes, o bicondicional é falso.',
  },
  {
    id: 'rl-proposicoes-f06',
    temaId: 'rl-proposicoes',
    frente: 'Quantas linhas tem a tabela-verdade de uma proposição com n proposições simples distintas?',
    verso: '2ⁿ. Ex.: 3 proposições → 8 linhas; 4 → 16; 5 → 32. Repetições e negações (p, ~p) não contam como proposições novas.',
  },
  {
    id: 'rl-proposicoes-f07',
    temaId: 'rl-proposicoes',
    frente: 'Em p → q, quem é condição suficiente e quem é condição necessária?',
    verso: 'p (antecedente) é condição suficiente para q; q (consequente) é condição necessária para p. “p somente se q” também significa p → q.',
  },
  {
    id: 'rl-proposicoes-f08',
    temaId: 'rl-proposicoes',
    frente: 'Quando a disjunção exclusiva p ⊻ q (“ou p, ou q”) é verdadeira?',
    verso: 'Quando p e q têm valores DIFERENTES (uma V e a outra F). Se as duas forem V ou as duas forem F, ela é falsa — o oposto do bicondicional.',
  },

  /* ---------- rl-equivalencias ---------- */
  {
    id: 'rl-equivalencias-f01',
    temaId: 'rl-equivalencias',
    frente: 'Negação de “p e q” (De Morgan)?',
    verso: '“~p ou ~q”: negam-se as duas partes e troca-se “e” por “ou”. Ex.: a negação de “Ana é médica e Rui é perito” é “Ana não é médica ou Rui não é perito”.',
  },
  {
    id: 'rl-equivalencias-f02',
    temaId: 'rl-equivalencias',
    frente: 'Negação de “p ou q” (De Morgan)?',
    verso: '“~p e ~q”: negam-se as duas partes e troca-se “ou” por “e”.',
  },
  {
    id: 'rl-equivalencias-f03',
    temaId: 'rl-equivalencias',
    frente: 'Contrapositiva de p → q. Ela é equivalente ao original?',
    verso: '~q → ~p (inverte a ordem e nega as duas partes). Sim, é equivalente. A recíproca (q → p) e a inversa (~p → ~q) NÃO são equivalentes ao original.',
  },
  {
    id: 'rl-equivalencias-f04',
    temaId: 'rl-equivalencias',
    frente: 'p → q equivale a qual disjunção?',
    verso: '~p ∨ q: nega-se o antecedente, mantém-se o consequente e troca-se “se… então” por “ou”. Ex.: “Se chove, levo guarda-chuva” ≡ “Não chove ou levo guarda-chuva”.',
  },
  {
    id: 'rl-equivalencias-f05',
    temaId: 'rl-equivalencias',
    frente: 'Negação de p → q?',
    verso: 'p ∧ ~q: mantém-se o antecedente, nega-se o consequente e usa-se “e” (macete MA-NÉ). A negação de um condicional nunca é outro condicional.',
  },
  {
    id: 'rl-equivalencias-f06',
    temaId: 'rl-equivalencias',
    frente: 'Negação de p ↔ q?',
    verso: 'p ⊻ q (“ou p, ou q”), que também equivale a p ↔ ~q e a ~p ↔ q. Atenção: ~p ↔ ~q é equivalente ao ORIGINAL, não à negação.',
  },
  {
    id: 'rl-equivalencias-f07',
    temaId: 'rl-equivalencias',
    frente: 'p ∨ q equivale a qual condicional?',
    verso: '~p → q (“se não for um, é o outro”). Ex.: “Paulo estuda ou trabalha” ≡ “Se Paulo não estuda, então trabalha”.',
  },

  /* ---------- rl-tautologia ---------- */
  {
    id: 'rl-tautologia-f01',
    temaId: 'rl-tautologia',
    frente: 'O que é tautologia? Dê um exemplo.',
    verso: 'Proposição composta verdadeira em todas as linhas da tabela-verdade, quaisquer que sejam os valores das simples. Ex.: p ∨ ~p; (p ∧ q) → p.',
  },
  {
    id: 'rl-tautologia-f02',
    temaId: 'rl-tautologia',
    frente: 'O que é contradição? Dê um exemplo.',
    verso: 'Proposição composta falsa em todas as linhas da tabela-verdade. Ex.: p ∧ ~p; (p → q) ∧ (p ∧ ~q).',
  },
  {
    id: 'rl-tautologia-f03',
    temaId: 'rl-tautologia',
    frente: 'O que é contingência?',
    verso: 'Proposição com pelo menos um V e pelo menos um F na última coluna da tabela-verdade. Ex.: p → q (é F só em V → F).',
  },
  {
    id: 'rl-tautologia-f04',
    temaId: 'rl-tautologia',
    frente: 'Qual é a relação entre equivalência lógica e tautologia?',
    verso: 'A ≡ B exatamente quando A ↔ B é tautologia. E A implica logicamente B quando A → B é tautologia.',
  },
  {
    id: 'rl-tautologia-f05',
    temaId: 'rl-tautologia',
    frente: 'A negação de uma tautologia é…? E a de uma contingência?',
    verso: 'A negação de uma tautologia é uma contradição (e vice-versa). A negação de uma contingência continua sendo contingência.',
  },
  {
    id: 'rl-tautologia-f06',
    temaId: 'rl-tautologia',
    frente: 'Atalho para testar se A → B é tautologia sem montar a tabela inteira?',
    verso: 'Procure uma linha com A verdadeiro e B falso. Se ela existir, não é tautologia; se for impossível (dá contradição), é tautologia.',
  },

  /* ---------- rl-argumentos ---------- */
  {
    id: 'rl-argumentos-f01',
    temaId: 'rl-argumentos',
    frente: 'Quando um argumento é válido?',
    verso: 'Quando é impossível que todas as premissas sejam verdadeiras e a conclusão seja falsa. A validade depende da FORMA, não da verdade real das premissas.',
  },
  {
    id: 'rl-argumentos-f02',
    temaId: 'rl-argumentos',
    frente: 'Qual é a forma do modus ponens?',
    verso: 'p → q; p; logo q. Afirmado o antecedente, conclui-se o consequente. É válido.',
  },
  {
    id: 'rl-argumentos-f03',
    temaId: 'rl-argumentos',
    frente: 'Quais são as duas falácias formais do condicional?',
    verso: 'Afirmar o consequente (p → q; q; logo p) e negar o antecedente (p → q; ~p; logo ~q). Ambas são inválidas.',
  },
  {
    id: 'rl-argumentos-f04',
    temaId: 'rl-argumentos',
    frente: 'Qual é a forma do silogismo disjuntivo?',
    verso: 'p ∨ q; ~p; logo q. Numa disjunção verdadeira, se uma parte é falsa, a outra é verdadeira. É válido.',
  },
  {
    id: 'rl-argumentos-f05',
    temaId: 'rl-argumentos',
    frente: 'Método prático para testar a validade de um argumento?',
    verso: 'Suponha a conclusão falsa e tente tornar todas as premissas verdadeiras. Se conseguir, o argumento é inválido; se surgir contradição, é válido.',
  },
  {
    id: 'rl-argumentos-f06',
    temaId: 'rl-argumentos',
    frente: 'Por onde começar quando a questão pede a conclusão a partir de premissas verdadeiras?',
    verso: 'Pela premissa simples (ou conjunção): ela é V. Depois use modus ponens, modus tollens e silogismo disjuntivo para descobrir o valor de cada proposição simples.',
  },
  {
    id: 'rl-argumentos-f07',
    temaId: 'rl-argumentos',
    frente: 'Argumento válido × argumento sólido',
    verso: 'Válido: a forma garante a conclusão se as premissas forem V. Sólido (ou correto): válido E com premissas verdadeiras — só ele garante conclusão verdadeira.',
  },
  {
    id: 'rl-argumentos-f08',
    temaId: 'rl-argumentos',
    frente: 'Qual é a forma do modus tollens?',
    verso: 'p → q; ~q; logo ~p. Negado o consequente, nega-se o antecedente. É válido.',
  },
  {
    id: 'rl-argumentos-f09',
    temaId: 'rl-argumentos',
    frente: 'Qual é a forma do silogismo hipotético?',
    verso: 'p → q; q → r; logo p → r (transitividade do condicional). É válido.',
  },

  /* ---------- rl-quantificadores ---------- */
  {
    id: 'rl-quantificadores-f01',
    temaId: 'rl-quantificadores',
    frente: 'Negação de “Todo A é B”?',
    verso: '“Algum A não é B” (= pelo menos um A não é B = nem todo A é B). NUNCA “Nenhum A é B”, que é a proposição contrária.',
  },
  {
    id: 'rl-quantificadores-f02',
    temaId: 'rl-quantificadores',
    frente: 'Negação de “Algum A é B”?',
    verso: '“Nenhum A é B” (não existe A que seja B). “Algum A não é B” não serve: pode ser verdadeira junto com a original.',
  },
  {
    id: 'rl-quantificadores-f03',
    temaId: 'rl-quantificadores',
    frente: 'Negação de “Nenhum A é B”?',
    verso: '“Algum A é B” (existe pelo menos um A que é B).',
  },
  {
    id: 'rl-quantificadores-f04',
    temaId: 'rl-quantificadores',
    frente: 'Negação de “Algum A não é B”?',
    verso: '“Todo A é B”.',
  },
  {
    id: 'rl-quantificadores-f05',
    temaId: 'rl-quantificadores',
    frente: 'Como se desenha “Todo A é B” no diagrama?',
    verso: 'Círculo A inteiro dentro do círculo B. Isso não garante que todo B seja A: B pode ter elementos fora de A.',
  },
  {
    id: 'rl-quantificadores-f06',
    temaId: 'rl-quantificadores',
    frente: '“Todo A é B” e “Algum B é C” garantem “Algum A é C”?',
    verso: 'Não. Os elementos de B que são C podem estar fora de A. Para derrubar uma conclusão, desenhe um caso compatível com as premissas em que ela falhe.',
  },

  /* ---------- rl-sequencias ---------- */
  {
    id: 'rl-sequencias-f01',
    temaId: 'rl-sequencias',
    frente: 'Primeiro passo diante de uma sequência numérica?',
    verso: 'Calcule as diferenças entre termos consecutivos (e as diferenças das diferenças). Sem padrão? Teste razões (×, ÷), operação mista (×2 + 1), soma dos anteriores, quadrados e sequências intercaladas.',
  },
  {
    id: 'rl-sequencias-f02',
    temaId: 'rl-sequencias',
    frente: 'Termo geral da PA e da PG',
    verso: 'PA: aₙ = a₁ + (n − 1)·r. PG: aₙ = a₁ · qⁿ⁻¹. Do 1º ao n-ésimo termo há n − 1 saltos.',
  },
  {
    id: 'rl-sequencias-f03',
    temaId: 'rl-sequencias',
    frente: 'Sequência cíclica: como achar o termo da posição n?',
    verso: 'Divida n pelo tamanho do ciclo; o resto indica a posição dentro do ciclo (resto 0 = último elemento do ciclo).',
  },
  {
    id: 'rl-sequencias-f04',
    temaId: 'rl-sequencias',
    frente: 'Sequência de letras: qual é o primeiro cuidado?',
    verso: 'Converter letras em posições (A = 1 … Z = 26, no alfabeto de 26 letras, com K, W e Y) e procurar o padrão numérico.',
  },
  {
    id: 'rl-sequencias-f05',
    temaId: 'rl-sequencias',
    frente: 'Que dia da semana será daqui a n dias?',
    verso: 'Use o resto de n ÷ 7 e avance esse número de dias a partir de hoje. Ex.: 100 dias = 14 semanas + 2 dias → quarta-feira vira sexta-feira. Não conte o dia de hoje.',
  },
  {
    id: 'rl-sequencias-f06',
    temaId: 'rl-sequencias',
    frente: 'Diferenças 1, 3, 5, 7, 9… (ímpares) indicam o quê?',
    verso: 'Quadrados perfeitos na lei de formação (n², ou n² ± constante). Ex.: 1, 2, 5, 10, 17 = (n − 1)² + 1.',
  },

  /* ---------- rl-associacao ---------- */
  {
    id: 'rl-associacao-f01',
    temaId: 'rl-associacao',
    frente: 'Método da tabela em associação lógica',
    verso: 'Monte uma grade (pessoas × atributos), marque ✗ nas impossibilidades e ✓ nas certezas. Cada ✓ elimina o resto da linha e da coluna; uma linha com um só espaço livre é ✓.',
  },
  {
    id: 'rl-associacao-f02',
    temaId: 'rl-associacao',
    frente: 'Por qual pista começar em associação lógica?',
    verso: 'Pela afirmativa e direta (“Mara trabalha em Caxias”), depois pelas negativas, e por fim pelas relativas (“mais velho que”, “imediatamente atrás de”).',
  },
  {
    id: 'rl-associacao-f03',
    temaId: 'rl-associacao',
    frente: 'Verdades e mentiras com “só um diz a verdade”: técnica',
    verso: 'Teste cada hipótese (ex.: “o culpado é X”) e conte quantas afirmações ficam verdadeiras. Fica a hipótese cuja contagem bate com o enunciado.',
  },
  {
    id: 'rl-associacao-f04',
    temaId: 'rl-associacao',
    frente: 'Duas afirmações contraditórias entre si em problema de “só um mente”',
    verso: 'Exatamente uma delas é verdadeira, então o mentiroso está entre as duas — e todas as outras afirmações são verdadeiras. Comece por elas.',
  },
  {
    id: 'rl-associacao-f05',
    temaId: 'rl-associacao',
    frente: 'Veraz × mentiroso: A diz “A e B somos mentirosos”. O que se conclui?',
    verso: 'A é mentiroso (um veraz não diria que mente) e, como a frase é falsa, B é veraz. Lembre: ninguém pode afirmar “eu sou mentiroso”.',
  },
  {
    id: 'rl-associacao-f06',
    temaId: 'rl-associacao',
    frente: 'Caixas com todos os rótulos errados: de qual retirar um item?',
    verso: 'Da caixa rotulada “mistura”: como o rótulo está errado, ela tem um só tipo de item, e uma retirada revela o conteúdo de todas.',
  },

  /* ---------- rl-conjuntos ---------- */
  {
    id: 'rl-conjuntos-f01',
    temaId: 'rl-conjuntos',
    frente: 'Fórmula da união de dois conjuntos',
    verso: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Desconta-se a interseção, que seria contada duas vezes.',
  },
  {
    id: 'rl-conjuntos-f02',
    temaId: 'rl-conjuntos',
    frente: 'Fórmula da união de três conjuntos',
    verso: 'n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C).',
  },
  {
    id: 'rl-conjuntos-f03',
    temaId: 'rl-conjuntos',
    frente: 'Ordem de preenchimento do diagrama de Venn',
    verso: 'De dentro para fora: interseção dos três; interseções duplas menos o centro; “só A”, “só B”, “só C”; por fim, os de fora (total − união).',
  },
  {
    id: 'rl-conjuntos-f04',
    temaId: 'rl-conjuntos',
    frente: 'Número de subconjuntos de um conjunto com n elementos',
    verso: '2ⁿ, incluindo o vazio e o próprio conjunto. Subconjuntos não vazios: 2ⁿ − 1.',
  },
  {
    id: 'rl-conjuntos-f05',
    temaId: 'rl-conjuntos',
    frente: 'O que é A − B?',
    verso: 'Os elementos que estão em A e não estão em B. Atenção: A − B é diferente de B − A.',
  },
  {
    id: 'rl-conjuntos-f06',
    temaId: 'rl-conjuntos',
    frente: 'Interseção mínima e máxima de A e B num universo U',
    verso: 'Mínima: n(A) + n(B) − n(U), se o resultado for positivo (senão, 0). Máxima: o menor entre n(A) e n(B).',
  },

  /* ---------- rl-cientifico ---------- */
  {
    id: 'rl-cientifico-f01',
    temaId: 'rl-cientifico',
    frente: 'Hipótese × teoria × lei',
    verso: 'Hipótese: explicação provisória e testável. Teoria: explicação ampla e bem corroborada, que integra fatos e leis. Lei: descreve uma regularidade (muitas vezes em fórmula), sem explicar o porquê. Uma não “vira” a outra.',
  },
  {
    id: 'rl-cientifico-f02',
    temaId: 'rl-cientifico',
    frente: 'Variável independente × dependente × controlada',
    verso: 'Independente: a que o pesquisador manipula (a causa testada). Dependente: o efeito medido. Controladas: mantidas constantes para não confundir o resultado.',
  },
  {
    id: 'rl-cientifico-f03',
    temaId: 'rl-cientifico',
    frente: 'Controle positivo × controle negativo',
    verso: 'Positivo: amostra que deve reagir; mostra que o método funciona (evita falso-negativo). Negativo: amostra que não deve reagir; revela falso-positivo ou contaminação.',
  },
  {
    id: 'rl-cientifico-f04',
    temaId: 'rl-cientifico',
    frente: 'Correlação implica causalidade?',
    verso: 'Não. A associação pode vir do acaso, de causalidade reversa ou de uma variável de confusão (ex.: tamanho da população). Causalidade exige desenho adequado e critérios como temporalidade e dose-resposta (Bradford Hill).',
  },
  {
    id: 'rl-cientifico-f05',
    temaId: 'rl-cientifico',
    frente: 'Dedução × indução × abdução',
    verso: 'Dedução: do geral ao particular, conclusão necessária. Indução: de casos observados a uma generalização provável. Abdução: dos sinais à hipótese que melhor os explica (lógica do diagnóstico).',
  },
  {
    id: 'rl-cientifico-f06',
    temaId: 'rl-cientifico',
    frente: 'Viés de confirmação × ancoragem × disponibilidade',
    verso: 'Confirmação: buscar e valorizar só o que apoia a hipótese. Ancoragem: prender-se à primeira informação e ajustar pouco. Disponibilidade: julgar provável o que vem fácil à memória.',
  },
  {
    id: 'rl-cientifico-f07',
    temaId: 'rl-cientifico',
    frente: 'Falseabilidade (Karl Popper)',
    verso: 'Uma hipótese é científica se puder ser refutada por observação ou experimento. Confirmações a corroboram, mas não a provam em definitivo; uma refutação sólida a derruba.',
  },
  {
    id: 'rl-cientifico-f08',
    temaId: 'rl-cientifico',
    frente: 'Falácia post hoc ergo propter hoc',
    verso: '“Depois disso, logo por causa disso”: concluir que A causou B só porque B veio depois de A. Ex.: “Tomei o chá e a febre passou; o chá curou.”',
  },
];
