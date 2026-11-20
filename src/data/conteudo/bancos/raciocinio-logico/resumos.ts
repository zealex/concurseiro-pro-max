import type { ResumoTema } from '../../../types';

const CONFERIDO = '2026-11-20';

const CARVALHO_CAMPOS = 'CARVALHO, Sérgio; CAMPOS, Weber. Raciocínio Lógico Simplificado, vol. 1 (referência geral para concursos).';
const ALENCAR = 'ALENCAR FILHO, Edgard de. Iniciação à Lógica Matemática (referência geral).';
const COPI = 'COPI, Irving M. Introdução à Lógica (referência geral).';
const IEZZI_1 = 'IEZZI, Gelson; MURAKAMI, Carlos. Fundamentos de Matemática Elementar, vol. 1: Conjuntos e Funções (referência geral).';

export const RESUMOS: ResumoTema[] = [
  /* ---------- rl-proposicoes ---------- */
  {
    temaId: 'rl-proposicoes',
    titulo: 'Proposições, conectivos e tabela-verdade',
    resumo:
      'A banca pede para reconhecer proposições, calcular o valor lógico de proposições compostas e contar as linhas da tabela-verdade. É a base de todo o Raciocínio Lógico.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Uma **proposição** é uma sentença **declarativa** que pode ser classificada como **verdadeira (V)** ou **falsa (F)** — nunca as duas coisas ao mesmo tempo (**princípio da não contradição**) e sempre uma delas (**princípio do terceiro excluído**). “Curitiba é a capital do Paraná” é uma proposição verdadeira; “Curitiba é a capital de Santa Catarina” é uma proposição falsa. Ser falsa não a desqualifica.',
      },
      {
        tipo: 'texto',
        texto:
          '**Não são proposições:** perguntas (“Você leu o edital?”), ordens (“Preencha o laudo.”), exclamações (“Que plantão!”), desejos e **sentenças abertas**, que têm uma variável sem valor definido (“x + 3 = 7”, “Ele é perito”). Paradoxos como “Esta frase é falsa” também ficam de fora, porque não admitem um valor lógico consistente.',
      },
      {
        tipo: 'texto',
        texto:
          'Proposições **simples** são representadas por letras (p, q, r). As **compostas** ligam proposições simples por meio de **conectivos**, e o seu valor depende só dos valores das simples e do conectivo usado.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Os conectivos',
          colunas: ['Conectivo', 'Símbolo', 'Leitura', 'Verdadeira quando', 'Falsa quando'],
          linhas: [
            ['Negação', '~p', 'não p', 'p é F', 'p é V'],
            ['Conjunção', 'p ∧ q', 'p e q', 'as duas são V', 'pelo menos uma é F'],
            ['Disjunção inclusiva', 'p ∨ q', 'p ou q', 'pelo menos uma é V', 'as duas são F'],
            ['Disjunção exclusiva', 'p ⊻ q', 'ou p, ou q', 'os valores são diferentes', 'os valores são iguais'],
            ['Condicional', 'p → q', 'se p, então q', 'em todos os demais casos', 'só quando p é V e q é F'],
            ['Bicondicional', 'p ↔ q', 'p se, e somente se, q', 'os valores são iguais', 'os valores são diferentes'],
          ],
          nota: 'Algumas bancas escrevem a negação como ¬p.',
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Tabela-verdade dos conectivos',
          colunas: ['p', 'q', 'p ∧ q', 'p ∨ q', 'p ⊻ q', 'p → q', 'p ↔ q'],
          linhas: [
            ['V', 'V', 'V', 'V', 'F', 'V', 'V'],
            ['V', 'F', 'F', 'V', 'V', 'F', 'F'],
            ['F', 'V', 'F', 'V', 'V', 'V', 'F'],
            ['F', 'F', 'F', 'F', 'F', 'V', 'V'],
          ],
          nota: 'Decore a linha V → F: é o único caso em que o condicional é falso.',
        },
      },
      {
        tipo: 'formula',
        formula: 'Número de linhas da tabela-verdade = 2ⁿ',
        legenda:
          'n = número de proposições simples DISTINTAS. Repetições e negações (p, ~p) não contam como proposições novas. 3 proposições → 8 linhas; 4 → 16; 5 → 32.',
      },
      {
        tipo: 'texto',
        texto:
          'No **condicional** p → q, p é o **antecedente** e q é o **consequente**. Pense numa promessa: “Se chover, levo o guarda-chuva”. Ela só é quebrada se chover e eu não levar (V → F). Em dia de sol (antecedente falso), a promessa não é desmentida, leve eu ou não o guarda-chuva: o condicional é **verdadeiro**. Outras formas de dizer p → q: “quando p, q”, “p implica q”, “q, se p”, “p somente se q”, “p é condição suficiente para q”, “q é condição necessária para p”.',
      },
      {
        tipo: 'texto',
        texto:
          'Ordem usual de resolução: **parênteses**, depois **negação**, depois **conjunção e disjunção**, depois **condicional** e, por fim, **bicondicional**. Na prova, as bancas costumam usar parênteses para evitar dúvida.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Valor lógico de uma composta',
        enunciado: 'Sendo p verdadeira, q falsa e r verdadeira, determine o valor lógico de (p ∨ q) → (q ↔ ~r).',
        resolucao:
          'p ∨ q = V ∨ F = V. Como r = V, ~r = F, e q ↔ ~r = F ↔ F = V (valores iguais). Por fim, V → V = V. A proposição é verdadeira.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Partindo do valor da composta',
        enunciado: 'Sabe-se que é falsa a proposição “Se Ana é perita, então Beto é legista”. O que se conclui sobre Ana e Beto?',
        resolucao: 'O condicional só é falso em V → F. Logo, “Ana é perita” é V e “Beto é legista” é F: Ana é perita e Beto não é legista.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Pegadinhas clássicas:** (1) proposição falsa continua sendo proposição; (2) “ou… ou…” indica disjunção **exclusiva**, enquanto o “ou” isolado, salvo aviso em contrário, é **inclusivo**; (3) condicional com antecedente falso é sempre verdadeiro; (4) para contar linhas, conte apenas as letras **distintas**.',
      },
    ],
    fontes: [CARVALHO_CAMPOS, ALENCAR],
    atualizadoEm: CONFERIDO,
  },

  /* ---------- rl-equivalencias ---------- */
  {
    temaId: 'rl-equivalencias',
    titulo: 'Equivalências e negações',
    resumo:
      'É um dos assuntos mais cobrados de RLM: negar proposições compostas (De Morgan, negação do condicional) e reconhecer formas equivalentes do “se… então”. A banca adora trocar a contrapositiva pela recíproca.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Duas proposições são **equivalentes** (≡) quando têm a **mesma tabela-verdade**: em todas as linhas, o mesmo valor. Na prática, dizem a mesma coisa com outras palavras. A **negação** de uma proposição tem o valor **oposto** ao dela em todas as linhas.',
      },
      {
        tipo: 'texto',
        texto:
          'As bancas cobram dois movimentos: (1) achar uma frase **equivalente** a um condicional e (2) achar a **negação** de conjunção, disjunção, condicional ou bicondicional. O método seguro é passar o enunciado e cada alternativa para símbolos e comparar com as tabelas abaixo.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Negações',
          colunas: ['Proposição', 'Negação', 'Como lembrar'],
          linhas: [
            ['p ∧ q', '~p ∨ ~q', 'De Morgan: nega as duas e troca “e” por “ou”'],
            ['p ∨ q', '~p ∧ ~q', 'De Morgan: nega as duas e troca “ou” por “e”'],
            ['p → q', 'p ∧ ~q', 'Mantém a 1ª, nega a 2ª e usa “e” (MA-NÉ)'],
            ['p ↔ q', 'p ⊻ q (ou p ↔ ~q)', 'O bicondicional vira “ou… ou…”'],
            ['p ⊻ q', 'p ↔ q', 'O caminho inverso da linha anterior'],
            ['~p', 'p', 'Dupla negação'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'O que equivale a p → q?',
          colunas: ['Forma', 'Equivale?', 'Observação'],
          linhas: [
            ['~q → ~p (contrapositiva)', 'Sim', 'Inverte a ordem e nega as duas partes'],
            ['~p ∨ q', 'Sim', 'Nega o antecedente, mantém o consequente, troca por “ou”'],
            ['q → p (recíproca)', 'Não', 'O erro mais comum'],
            ['~p → ~q (inversa)', 'Não', 'Equivale à recíproca, não ao original'],
            ['p ↔ q', 'Não', 'O bicondicional afirma mais que o condicional'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          'Outras equivalências úteis: **p ∨ q ≡ ~p → q** (“se não for um, é o outro”); **p ↔ q ≡ (p → q) ∧ (q → p)**; e as distributivas p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r) e p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r). Linguagem: em p → q, p é **condição suficiente** e q é **condição necessária**. “Só é convocado quem é aprovado” significa “se foi convocado, então foi aprovado”.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Negação de condicional',
        enunciado: 'Negue: “Se o perito assinou o laudo, então o delegado o recebeu”.',
        resolucao:
          'Forma p → q; negação p ∧ ~q: “O perito assinou o laudo e o delegado não o recebeu”. Errado seria “Se o perito não assinou, então o delegado não recebeu”: isso é a inversa, que nem sequer é negação.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Equivalente com negação no antecedente',
        enunciado: 'Qual frase equivale a “Se não há jejum, o exame é remarcado”?',
        resolucao:
          'Forma ~j → r. Pela regra p → q ≡ ~p ∨ q: ~(~j) ∨ r ≡ j ∨ r, ou seja, “Há jejum ou o exame é remarcado”. Pela contrapositiva: ~r → j, “Se o exame não é remarcado, há jejum”.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Pegadinhas:** (1) negar “p e q” como “não p e não q” está **errado** — o conectivo tem de mudar; (2) a negação de um condicional **não é** outro condicional: é uma conjunção; (3) recíproca e inversa nunca equivalem ao condicional; (4) “Não é verdade que…” nega a frase inteira: aplique De Morgan; (5) ~p ↔ ~q é equivalente a p ↔ q, e não à sua negação.',
      },
    ],
    fontes: [CARVALHO_CAMPOS, ALENCAR],
    atualizadoEm: CONFERIDO,
  },

  /* ---------- rl-tautologia ---------- */
  {
    temaId: 'rl-tautologia',
    titulo: 'Tautologia, contradição e contingência',
    resumo:
      'A banca pede para classificar uma proposição composta, muitas vezes sem tempo de montar a tabela inteira. Conhecer as tautologias clássicas (as regras de inferência) e os atalhos poupa minutos preciosos.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Toda proposição composta cai em uma de três classes, conforme a **última coluna** da sua tabela-verdade: **tautologia** (só V), **contradição** (só F) ou **contingência** (V e F misturados). A classificação depende só da estrutura lógica, nunca do assunto da frase.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'As três classes',
          colunas: ['Classe', 'Última coluna', 'Exemplo', 'Por quê'],
          linhas: [
            ['Tautologia', 'Só V', 'p ∨ ~p', 'Uma das duas partes é sempre V'],
            ['Contradição', 'Só F', 'p ∧ ~p', 'As duas partes nunca são V juntas'],
            ['Contingência', 'V e F', 'p → q', 'É F apenas na linha V → F'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Prova de que (p ∧ q) → p é tautologia',
          colunas: ['p', 'q', 'p ∧ q', '(p ∧ q) → p'],
          linhas: [
            ['V', 'V', 'V', 'V'],
            ['V', 'F', 'F', 'V'],
            ['F', 'V', 'F', 'V'],
            ['F', 'F', 'F', 'V'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Atalhos.** (1) Para testar se um **condicional** é tautologia, tente fazer o antecedente V e o consequente F; se for impossível, é tautologia. (2) Para testar se uma **conjunção** é contradição, tente fazer as duas partes V ao mesmo tempo; se for impossível, é contradição. (3) A **negação** de uma tautologia é contradição, e vice-versa; a negação de uma contingência continua sendo contingência. (4) Se A ≡ B, então A ↔ B é tautologia.',
      },
      {
        tipo: 'lista',
        itens: [
          '**Modus ponens:** [(p → q) ∧ p] → q',
          '**Modus tollens:** [(p → q) ∧ ~q] → ~p',
          '**Silogismo hipotético:** [(p → q) ∧ (q → r)] → (p → r)',
          '**Silogismo disjuntivo:** [(p ∨ q) ∧ ~p] → q',
          '**Simplificação:** (p ∧ q) → p · **Adição:** p → (p ∨ q)',
          '**Equivalências viram tautologias:** (p → q) ↔ (~q → ~p); ~(p ∧ q) ↔ (~p ∨ ~q)',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Classificar sem tabela',
        enunciado: 'Classifique [p ∧ (p → q)] → q.',
        resolucao:
          'Para ser F, o antecedente teria de ser V e q, F. Antecedente V exige p = V e p → q = V, o que força q = V — contradição com q = F. Não existe linha falsa: tautologia (é o modus ponens).',
      },
      {
        tipo: 'exemplo',
        titulo: 'Reconhecer X ∧ ~X',
        enunciado: 'Classifique (p ∨ q) ∧ (~p ∧ ~q).',
        resolucao: 'Por De Morgan, ~p ∧ ~q é exatamente a negação de p ∨ q. A expressão tem a forma X ∧ ~X, falsa em todas as linhas: contradição.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Pegadinhas:** (1) [(p → q) ∧ q] → p parece modus ponens, mas é a falácia de **afirmar o consequente** e falha em p = F, q = V — é contingência; (2) basta **uma** linha F para deixar de ser tautologia; (3) não confunda **contradição** (proposição sempre falsa) com proposições **contraditórias** (um par em que uma é a negação da outra).',
      },
    ],
    fontes: [CARVALHO_CAMPOS, ALENCAR],
    atualizadoEm: CONFERIDO,
  },

  /* ---------- rl-argumentos ---------- */
  {
    temaId: 'rl-argumentos',
    titulo: 'Argumentos, validade e silogismos',
    resumo:
      'Cai reconhecer argumentos válidos, achar a conclusão que decorre de premissas verdadeiras e identificar falácias formais. Lembre: validade é questão de forma, não da verdade das premissas.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Um **argumento** é um conjunto de **premissas** (P1, P2, …) apresentadas como apoio a uma **conclusão**. Ele é **válido** quando é **impossível** que todas as premissas sejam verdadeiras e a conclusão seja falsa. A validade depende só da **forma**.',
      },
      {
        tipo: 'texto',
        texto:
          'Por isso, um argumento válido pode ter premissa falsa (“Todo médico é perito; todo perito é servidor; logo, todo médico é servidor” é válido), e um argumento inválido pode ter conclusão verdadeira. O argumento válido **com premissas verdadeiras** é chamado **sólido** (ou correto) e garante uma conclusão verdadeira.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Formas que você precisa reconhecer',
          colunas: ['Nome', 'Forma', 'Válido?'],
          linhas: [
            ['Modus ponens', 'p → q; p; logo q', 'Sim'],
            ['Modus tollens', 'p → q; ~q; logo ~p', 'Sim'],
            ['Silogismo hipotético', 'p → q; q → r; logo p → r', 'Sim'],
            ['Silogismo disjuntivo', 'p ∨ q; ~p; logo q', 'Sim'],
            ['Dilema (prova por casos)', 'p → r; ~p → r; logo r', 'Sim'],
            ['Afirmação do consequente', 'p → q; q; logo p', 'Não (falácia)'],
            ['Negação do antecedente', 'p → q; ~p; logo ~q', 'Não (falácia)'],
          ],
        },
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          '**Achar a conclusão:** comece pela premissa **simples** (uma afirmação isolada, como “Eva não trabalha”) ou por uma conjunção — ela é V.',
          'Use esse valor para “destravar” as compostas: num condicional V com consequente F, o antecedente é F (tollens); com antecedente V, o consequente é V (ponens); numa disjunção V com uma parte F, a outra é V.',
          'Siga a cadeia até conhecer o valor de todas as proposições simples.',
          'Teste as alternativas com esses valores: a conclusão válida é a que fica obrigatoriamente V.',
        ],
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          '**Testar validade:** suponha a conclusão F.',
          'Tente tornar todas as premissas V ao mesmo tempo.',
          'Se conseguir, o argumento é **inválido**; se surgir contradição, é **válido**.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Cadeia de condicionais',
        enunciado: 'P1: Se Bruno faz plantão, Clara folga. P2: Se Clara folga, Diego viaja. P3: Diego não viaja. O que se conclui?',
        resolucao:
          'P3: “Diego viaja” = F. P2 é V com consequente F, então “Clara folga” = F. P1 é V com consequente F, então “Bruno faz plantão” = F. Conclusão válida: Bruno não faz plantão e Clara não folga.',
      },
      {
        tipo: 'texto',
        texto:
          'Silogismos com “todo”, “algum” e “nenhum” testam-se com **diagramas**: desenhe as premissas de todos os modos possíveis; se houver um desenho em que a conclusão falha, o argumento é inválido (veja o tema de quantificadores).',
      },
      {
        tipo: 'atencao',
        texto:
          '**Pegadinhas:** (1) premissas verdadeiras não tornam um argumento válido, e premissa falsa não o torna inválido; (2) “Se chover, adio. Não choveu. Logo, não adiei” é **negação do antecedente** — inválido; (3) “Se chover, adio. Adiei. Logo, choveu” é **afirmação do consequente** — inválido; (4) a conclusão precisa ser **necessária**: algo apenas compatível com as premissas não basta.',
      },
    ],
    fontes: [CARVALHO_CAMPOS, COPI],
    atualizadoEm: CONFERIDO,
  },

  /* ---------- rl-quantificadores ---------- */
  {
    temaId: 'rl-quantificadores',
    titulo: 'Quantificadores e diagramas lógicos',
    resumo:
      'Cai a negação de “todo”, “algum” e “nenhum” e a análise de silogismos por diagramas. Trocar “todo” por “nenhum” na negação é a pegadinha número um.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Proposições **categóricas** relacionam duas classes por meio de **quantificadores**: universais (**todo**, **nenhum**) e existenciais (**algum**, **existe**, **pelo menos um**). Em lógica, “algum” significa **pelo menos um, podendo ser todos**: “Algum médico é perito” não afirma que algum médico deixa de ser perito.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'As quatro formas e suas negações',
          colunas: ['Forma', 'Exemplo', 'Diagrama', 'Negação'],
          linhas: [
            ['Todo A é B', 'Todo perito é servidor', 'A inteiro dentro de B', 'Algum A não é B'],
            ['Nenhum A é B', 'Nenhum perito é réu', 'A e B separados', 'Algum A é B'],
            ['Algum A é B', 'Algum médico é legista', 'A e B com interseção não vazia', 'Nenhum A é B'],
            ['Algum A não é B', 'Algum médico não é legista', 'Parte de A fora de B', 'Todo A é B'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          'Equivalências frequentes: “Nenhum A é B” ≡ “Nenhum B é A” ≡ “Se é A, então não é B”. “Todo A é B” ≡ “Se é A, então é B” ≡ “Todo não B é não A”. Já “Todo A é B” **não** equivale a “Todo B é A”. E “Nem todo A é B” ≡ “Algum A não é B”.',
      },
      {
        tipo: 'lista',
        itens: [
          '**Todo A é B:** desenhe A inteiro dentro de B; B pode ter elementos fora de A.',
          '**Nenhum A é B:** círculos separados, sem interseção.',
          '**Algum A é B:** círculos que se cruzam, com um elemento marcado na interseção.',
          '**Testar conclusão:** procure um desenho compatível com as premissas em que ela seja falsa. Se achar, a conclusão não é necessária.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Conclusão que não se sustenta',
        enunciado: '“Todo legista é perito” e “Algum perito é professor”. Conclui-se que algum legista é professor?',
        resolucao:
          'Não. Desenhe os legistas dentro dos peritos e coloque os professores na parte dos peritos FORA dos legistas: as premissas continuam verdadeiras e a conclusão falha. O argumento é inválido.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Conclusão necessária',
        enunciado: '“Alguns médicos são professores” e “Nenhum professor é estudante”. O que se conclui necessariamente?',
        resolucao:
          'Os médicos que são professores estão fora dos estudantes. Logo, “Alguns médicos não são estudantes” é necessária. “Nenhum médico é estudante” não é: os demais médicos podem ser estudantes.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Pegadinhas:** (1) a negação de “Todo A é B” é “Algum A não é B”, **nunca** “Nenhum A é B” — esta é a **contrária**, e as duas podem ser falsas ao mesmo tempo; (2) a negação de “Algum A é B” é “Nenhum A é B”, e não “Algum A não é B”; (3) num silogismo com duas premissas particulares (as duas com “algum”), nenhuma conclusão sobre os termos que não se repetem é garantida.',
      },
    ],
    fontes: [CARVALHO_CAMPOS, COPI],
    atualizadoEm: CONFERIDO,
  },

  /* ---------- rl-sequencias ---------- */
  {
    temaId: 'rl-sequencias',
    titulo: 'Sequências de números, letras e figuras',
    resumo:
      'Questão rápida e frequente nas bancas do Sul: descobrir a lei de formação de sequências numéricas, de letras ou de figuras e achar um termo distante. O segredo é testar os padrões em ordem.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Toda sequência de prova tem uma **lei de formação**. A banca mostra alguns termos e pede o próximo, um termo distante (o 50º, o 100º) ou a contagem de certos elementos. Teste os padrões do mais simples ao mais elaborado e confirme o padrão escolhido em **todos** os termos dados.',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          '**Diferenças** entre termos consecutivos: constantes (PA), crescentes (+1, +2, +3…) ou formando outra sequência.',
          '**Razões:** cada termo multiplicado pelo mesmo número (PG) ou por números crescentes.',
          '**Operação mista:** ×2 + 1, ×3 − 2…',
          '**Soma dos anteriores** (tipo Fibonacci): 3, 4, 7, 11, 18…',
          '**Quadrados, cubos e primos:** 1, 4, 9, 16…; n² + 1; 2, 3, 5, 7, 11…',
          '**Intercaladas:** os termos de posição ímpar seguem uma regra, e os de posição par, outra.',
          '**Cíclicas:** o padrão se repete a cada k termos (figuras, dias da semana).',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Padrões mais cobrados',
          colunas: ['Tipo', 'Exemplo', 'Lei', 'Próximo'],
          linhas: [
            ['PA', '4, 9, 14, 19', '+5', '24'],
            ['PG', '3, 6, 12, 24', '×2', '48'],
            ['Diferenças crescentes', '1, 2, 4, 7, 11', '+1, +2, +3, +4', '16'],
            ['Operação mista', '1, 4, 13, 40', '×3 + 1', '121'],
            ['Tipo Fibonacci', '2, 5, 7, 12, 19', 'soma dos dois anteriores', '31'],
            ['n² + 1', '2, 5, 10, 17', '1² + 1, 2² + 1, 3² + 1…', '26'],
            ['Letras', 'B, E, H, K', '+3 posições', 'N'],
          ],
        },
      },
      {
        tipo: 'formula',
        formula: 'PA: aₙ = a₁ + (n − 1)·r     PG: aₙ = a₁ · qⁿ⁻¹',
        legenda: 'r = razão da PA; q = razão da PG. Do 1º ao n-ésimo termo há n − 1 saltos.',
      },
      {
        tipo: 'texto',
        texto:
          '**Sequências cíclicas:** se o padrão tem k elementos, o termo da posição n é o que ocupa, dentro do ciclo, a posição igual ao **resto de n ÷ k** (resto 0 = último elemento do ciclo). Para dias da semana, k = 7. Para letras, converta cada letra na sua posição no alfabeto (A = 1, B = 2 … Z = 26) e procure o padrão numérico.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Dia da semana',
        enunciado: 'Hoje é segunda-feira. Que dia da semana será daqui a 45 dias?',
        resolucao: '45 = 7 × 6 + 3. Depois de 6 semanas completas, é segunda-feira de novo; faltam 3 dias. Segunda + 3 = quinta-feira.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Termo distante em sequência cíclica',
        enunciado: 'Na sequência azul, verde, verde, vermelho, azul, verde, verde, vermelho…, qual é a cor do 39º termo?',
        resolucao: 'O ciclo tem 4 cores. 39 = 4 × 9 + 3, resto 3. A 3ª cor do ciclo é verde.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Pegadinhas:** (1) o alfabeto oficial tem **26 letras** (K, W e Y incluídos) — confira se o enunciado diz outra coisa; (2) em “daqui a n dias”, não conte o dia de hoje; (3) do 1º ao 10º termo há **9** saltos, não 10; (4) não pare no primeiro padrão que “quase” funciona.',
      },
    ],
    fontes: [CARVALHO_CAMPOS, 'IEZZI, Gelson; HAZZAN, Samuel. Fundamentos de Matemática Elementar, vol. 4: Sequências, Matrizes, Determinantes e Sistemas (referência geral).'],
    atualizadoEm: CONFERIDO,
  },

  /* ---------- rl-associacao ---------- */
  {
    temaId: 'rl-associacao',
    titulo: 'Associação lógica, verdades e mentiras',
    resumo:
      'Problemas de “quem é quem” (pessoas, profissões, cidades, posições numa fila) e de verdades e mentiras. Exigem organização, não fórmula: tabela de dupla entrada e teste de hipóteses.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Em **associação lógica**, cada elemento de um grupo corresponde a exatamente um elemento de outro (cada pessoa tem uma profissão, uma cidade, uma posição). As pistas eliminam possibilidades até sobrar uma só. Questão bem formulada tem **solução única** — se sobrar mais de uma, alguma pista ficou sem uso.',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Monte uma tabela com as pessoas nas linhas e os atributos nas colunas.',
          'Registre primeiro as pistas **diretas e afirmativas** (✓) e elimine o resto da linha e da coluna.',
          'Registre as pistas **negativas** (✗).',
          'Use as pistas **relativas** (“mais velho que”, “imediatamente atrás de”, “a dona do carro branco mora em…”) para cruzar atributos.',
          'Quando uma linha ou coluna tiver um só espaço livre, ele é ✓.',
          'Confira a solução final contra **todas** as pistas.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Tabela de associação',
        enunciado:
          'Rui, Sara e Téo trabalham no protocolo, no arquivo e na recepção, nos turnos da manhã, da tarde e da noite (um setor e um turno para cada). Sara trabalha no arquivo. Quem trabalha na recepção cumpre o turno da noite. Rui não trabalha na recepção nem à tarde. Quem faz o quê?',
        resolucao:
          'Sara = arquivo. Rui não é da recepção, então Rui = protocolo e Téo = recepção, logo Téo = noite. Rui não trabalha à tarde nem à noite: Rui = manhã. Sobra a tarde para Sara.',
      },
      {
        tipo: 'texto',
        texto:
          '**Verdades e mentiras.** Há dois formatos: (a) pessoas que **sempre** dizem a verdade ou **sempre** mentem; (b) afirmações em que “só uma é verdadeira” ou “só um mente”. A técnica é **testar hipóteses**: suponha “o culpado é X” (ou “A diz a verdade”) e verifique se a quantidade de verdades bate com o enunciado.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Exemplo — Dora: “Eli é inocente”; Eli: “Fábio é o culpado”; Fábio: “Eu sou inocente” (há um só culpado e só um diz a verdade)',
          colunas: ['Hipótese de culpado', 'Dora', 'Eli', 'Fábio', 'Nº de verdades'],
          linhas: [
            ['Dora', 'V', 'F', 'V', '2'],
            ['Eli', 'F', 'F', 'V', '1'],
            ['Fábio', 'V', 'V', 'F', '2'],
          ],
          nota: 'Só a hipótese “Eli é o culpado” produz exatamente uma verdade (a de Fábio).',
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Atalho das contraditórias:** se duas afirmações são contraditórias (uma nega a outra, como “foi X” × “não foi X”, ou “Beto mente” × a fala de Beto), exatamente uma delas é verdadeira. Em “só um mente”, o mentiroso está entre as duas, e todas as outras afirmações são verdadeiras — comece por elas.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Pegadinhas:** (1) “só um mente” e “só um diz a verdade” são condições diferentes: releia o enunciado; (2) ninguém, veraz ou mentiroso, pode afirmar “eu sou mentiroso”; (3) se “A diz: A e B somos mentirosos”, A mente e B é veraz; (4) teste todas as hipóteses antes de marcar.',
      },
    ],
    fontes: [CARVALHO_CAMPOS],
    atualizadoEm: CONFERIDO,
  },

  /* ---------- rl-conjuntos ---------- */
  {
    temaId: 'rl-conjuntos',
    titulo: 'Conjuntos e diagramas de Venn',
    resumo:
      'Problemas de pesquisa (“quantos usam só A”, “quantos não usam nenhum”) com dois ou três conjuntos, além de operações básicas e número de subconjuntos. Preencher o diagrama de dentro para fora resolve quase tudo.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Conjunto** é uma coleção de elementos. As operações básicas são: **união** (A ∪ B: está em A ou em B, ou em ambos), **interseção** (A ∩ B: está nos dois), **diferença** (A − B: está em A e não está em B) e **complementar** (o que está no universo e fora do conjunto).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Operações com A = {1, 2, 3, 4} e B = {3, 4, 5}',
          colunas: ['Operação', 'Notação', 'Resultado'],
          linhas: [
            ['União', 'A ∪ B', '{1, 2, 3, 4, 5}'],
            ['Interseção', 'A ∩ B', '{3, 4}'],
            ['Diferença', 'A − B', '{1, 2}'],
            ['Diferença', 'B − A', '{5}'],
            ['Número de subconjuntos de B', '2ⁿ', '2³ = 8'],
          ],
        },
      },
      { tipo: 'formula', formula: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)', legenda: 'Desconta-se a interseção, que seria contada duas vezes.' },
      {
        tipo: 'formula',
        formula: 'n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)',
        legenda: 'Princípio da inclusão-exclusão para três conjuntos.',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Coloque a interseção dos três conjuntos no centro.',
          'Em cada interseção dupla, desconte o centro (“só A e B” = n(A ∩ B) − centro).',
          'Em cada conjunto, desconte as regiões já preenchidas (“só A”).',
          'Fora dos círculos: total − n(união).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Três conjuntos',
        enunciado:
          'Em 70 pacientes, 40 têm hipertensão (H), 30 diabetes (D) e 25 dislipidemia (L); 15 têm H e D, 12 têm H e L, 10 têm D e L, e 5 têm as três. Quantos não têm nenhuma das três condições?',
        resolucao:
          'Centro = 5. Só H e D = 15 − 5 = 10; só H e L = 12 − 5 = 7; só D e L = 10 − 5 = 5. Só H = 40 − 10 − 7 − 5 = 18; só D = 30 − 10 − 5 − 5 = 10; só L = 25 − 7 − 5 − 5 = 8. União = 5 + 10 + 7 + 5 + 18 + 10 + 8 = 63 (confere com a fórmula). Nenhuma = 70 − 63 = 7.',
      },
      {
        tipo: 'texto',
        texto:
          'Quando a **interseção é a incógnita**, use n(A ∩ B) = n(A) + n(B) − n(A ∪ B), lembrando que n(A ∪ B) = total − “nenhum”. Para o **mínimo** de interseção, calcule n(A) + n(B) − total (se der negativo, o mínimo é 0); o **máximo** é o menor dos dois conjuntos.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Pegadinhas:** (1) “usam A” inclui quem também usa B; “usam **só** A” não; (2) somar n(A) + n(B) sem descontar a interseção conta duas vezes quem está nos dois; (3) número de subconjuntos é 2ⁿ (com o vazio), e os não vazios são 2ⁿ − 1; (4) A − B é diferente de B − A.',
      },
    ],
    fontes: [IEZZI_1, CARVALHO_CAMPOS],
    atualizadoEm: CONFERIDO,
  },

  /* ---------- rl-cientifico ---------- */
  {
    temaId: 'rl-cientifico',
    titulo: 'Raciocínio científico: método, causalidade e vieses',
    resumo:
      'Faz parte do conteúdo de “Raciocínio Lógico e Científico” da perícia oficial (Polícia Científica-PR 2024, IBFC): etapas do método científico, hipótese × teoria × lei, variáveis e controles, correlação × causalidade, tipos de raciocínio, falácias e vieses cognitivos, com exemplos periciais e médicos.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O **método científico** organiza a investigação em etapas: **observação** de um fenômeno, formulação de um **problema**, proposição de uma **hipótese**, **previsão** do que deveria ocorrer se a hipótese fosse verdadeira, **teste** (experimento ou observação controlada), **análise** dos dados e **conclusão** (a hipótese é corroborada ou refutada), seguida de **comunicação** e **replicação** por outros pesquisadores.',
      },
      {
        tipo: 'texto',
        texto:
          'Na perícia, a lógica é a mesma: o vestígio é a observação; as possíveis dinâmicas do fato são **hipóteses concorrentes**; os exames testam as previsões de cada uma. Para Karl Popper, uma hipótese científica precisa ser **falseável**: deve ser possível imaginar um resultado que a refute. Confirmações acumuladas **corroboram** a hipótese, mas não a provam definitivamente.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Hipótese, teoria e lei',
          colunas: ['Conceito', 'O que é', 'Exemplo'],
          linhas: [
            ['Hipótese', 'Explicação provisória e testável para um problema', '“O reagente X detecta sangue diluído 1:1.000”'],
            ['Teoria', 'Explicação ampla e bem corroborada, que integra muitos fatos e leis', 'Teoria microbiana das doenças'],
            ['Lei', 'Descrição de uma regularidade, muitas vezes matemática, sem explicar o porquê', 'Lei do resfriamento de Newton'],
            ['Fato (observação)', 'Dado registrado e verificável', 'Temperatura retal medida às 8 h'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Elementos de um experimento — estudo “a dose de um analgésico altera o tempo até o alívio da dor?”',
          colunas: ['Elemento', 'Definição', 'No exemplo'],
          linhas: [
            ['Variável independente', 'O que o pesquisador manipula', 'Dose do analgésico'],
            ['Variável dependente', 'O efeito medido', 'Tempo até o alívio da dor'],
            ['Variáveis controladas', 'Mantidas iguais entre os grupos', 'Tipo de dor, faixa etária, horário'],
            ['Grupo controle', 'Não recebe a intervenção (ou recebe placebo)', 'Grupo placebo'],
            ['Controle positivo', 'Deve dar positivo; mostra que o método funciona (evita falso-negativo)', 'Num teste de laboratório: amostra sabidamente com a substância'],
            ['Controle negativo', 'Deve dar negativo; revela falso-positivo ou contaminação', 'Num teste de laboratório: amostra sabidamente sem a substância'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Correlação não é causalidade.** Duas variáveis podem variar juntas por **acaso**, por **causalidade reversa** (B causa A) ou por uma **variável de confusão** que causa ambas: a venda de sorvetes e os afogamentos aumentam juntos no verão por causa do calor. Evidência causal vem de experimentos randomizados ou, em estudos observacionais, de critérios como **temporalidade** (a causa vem antes do efeito), força da associação, gradiente dose-resposta, consistência e plausibilidade (critérios de Bradford Hill, 1965).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Tipos de raciocínio',
          colunas: ['Tipo', 'Direção', 'Força da conclusão', 'Exemplo'],
          linhas: [
            ['Dedutivo', 'Do geral para o particular', 'Necessária, se as premissas forem verdadeiras', 'Todo servidor do órgão tem matrícula; Ana é servidora do órgão; logo, Ana tem matrícula'],
            ['Indutivo', 'De casos particulares para uma generalização', 'Provável; um novo caso pode derrubá-la', 'Todos os cisnes observados eram brancos; logo, todo cisne é branco'],
            ['Abdutivo', 'Dos efeitos (sinais) para a melhor explicação', 'Plausível; é a lógica do diagnóstico e da hipótese pericial', 'Febre, tosse produtiva e crepitações localizadas: pneumonia é a hipótese que melhor explica o quadro'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Vieses cognitivos e falácias',
          colunas: ['Nome', 'O que é', 'Exemplo'],
          linhas: [
            ['Viés de confirmação', 'Buscar e valorizar só o que confirma a hipótese inicial', 'Examinador que já “sabe” quem é o suspeito realça semelhanças e minimiza divergências'],
            ['Ancoragem', 'Prender-se à primeira informação recebida e ajustar pouco', 'Manter o diagnóstico da triagem apesar de exames que o contradizem'],
            ['Disponibilidade', 'Julgar mais provável o que vem fácil à memória', 'Após um caso raro e marcante, superestimar sua frequência'],
            ['Post hoc ergo propter hoc', 'Concluir causa só pela sequência temporal', '“Tomou o chá e a febre passou; o chá curou”'],
            ['Ad hominem', 'Atacar a pessoa, e não o argumento', '“O laudo está errado porque o perito é jovem”'],
            ['Apelo à autoridade', 'Aceitar algo só por quem disse, sem evidência', '“Uma celebridade disse que o tratamento funciona”'],
            ['Generalização apressada', 'Tirar uma regra de poucos casos', '“Dois pacientes melhoraram; o remédio funciona”'],
            ['Falso dilema', 'Apresentar só duas opções quando há outras', '“Ou foi homicídio, ou foi acidente” (e o suicídio?)'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Identificando a falha',
        enunciado:
          'Um estudo mostra que, nos meses de maior venda de sorvete, há mais afogamentos. Um gestor propõe proibir a venda de sorvete nas praias para reduzir afogamentos. Qual é o erro?',
        resolucao:
          'Tratar correlação como causalidade. O calor (variável de confusão) aumenta tanto o consumo de sorvete quanto a ida à praia e, com ela, o risco de afogamento. Proibir sorvete não atua sobre a causa.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Pegadinhas:** (1) lei **não** é teoria “promovida”, nem teoria é hipótese “quase provada”: lei descreve, teoria explica; (2) correlação forte continua não provando causa; (3) a indução amplia o conhecimento, mas não garante a conclusão; a dedução garante, mas não vai além do que está nas premissas; (4) controle negativo detecta **falso-positivo**; controle positivo detecta **falso-negativo**.',
      },
    ],
    fontes: [
      'POPPER, Karl. A Lógica da Pesquisa Científica (referência geral).',
      'KAHNEMAN, Daniel. Rápido e Devagar: Duas Formas de Pensar (referência geral).',
      'TVERSKY, Amos; KAHNEMAN, Daniel. Judgment under Uncertainty: Heuristics and Biases. Science, v. 185, n. 4157, p. 1124–1131, 1974.',
      'HILL, Austin Bradford. The Environment and Disease: Association or Causation? Proceedings of the Royal Society of Medicine, v. 58, p. 295–300, 1965.',
      'MARCONI, Marina de Andrade; LAKATOS, Eva Maria. Fundamentos de Metodologia Científica (referência geral).',
      COPI,
    ],
    atualizadoEm: CONFERIDO,
  },
];
