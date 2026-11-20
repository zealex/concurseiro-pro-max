import type { QuestaoTreino } from '../../../types';

/** Questões autorais: proposições, equivalências/negações e tautologia. */
export const QUESTOES_1: QuestaoTreino[] = [
  /* ---------- rl-proposicoes ---------- */
  {
    id: 'rl-proposicoes-q01',
    temaId: 'rl-proposicoes',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado: 'Assinale a alternativa que apresenta uma proposição.',
    alternativas: [
      'Que plantão tranquilo hoje!',
      'Curitiba é a capital de Santa Catarina.',
      'Você já conferiu o prontuário do leito 4?',
      'x + 5 = 12',
      'Preencha o laudo até as 18 h.',
    ],
    correta: 1,
    comentario:
      'Proposição é a sentença declarativa que admite um, e só um, valor lógico (V ou F). “Curitiba é a capital de Santa Catarina” é declarativa e falsa — e proposição falsa continua sendo proposição. A (exclamativa), C (interrogativa) e E (imperativa) não têm valor lógico; D é sentença aberta: o valor depende de x.',
  },
  {
    id: 'rl-proposicoes-q02',
    temaId: 'rl-proposicoes',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Considere as proposições p: “O exame de imagem foi solicitado”, verdadeira, e q: “O paciente recebeu alta”, falsa. Assinalar a alternativa que apresenta uma proposição composta VERDADEIRA.',
    alternativas: ['p ∧ q', 'p → q', 'p ↔ q', 'q → ~p', '~p ∧ ~q'],
    correta: 3,
    comentario:
      'Com p = V e q = F: em q → ~p, o antecedente q é falso, e condicional com antecedente falso é sempre verdadeiro (F → F = V). As demais são falsas: p ∧ q exige as duas V; p → q é V → F, o único caso falso do condicional; p ↔ q tem valores diferentes; em ~p ∧ ~q, ~p = F, e basta uma parte falsa para a conjunção ser falsa.',
  },
  {
    id: 'rl-proposicoes-q03',
    temaId: 'rl-proposicoes',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    enunciado: 'Quantas linhas tem a tabela-verdade da proposição composta (P ∧ Q) → [(R ∨ ~S) ∨ (P ↔ ~R)]?',
    alternativas: ['16', '8', '32', '12', '64'],
    correta: 0,
    comentario:
      'O número de linhas é 2ⁿ, em que n é o número de proposições simples DISTINTAS. Aparecem P, Q, R e S — repetições (P, R) e negações (~S, ~R) não criam proposições novas. Logo, 2⁴ = 16 linhas. 8 corresponderia a 3 proposições; 32 e 64 surgem quando se contam as repetições.',
    verificar: () => 2 ** 4,
  },
  {
    id: 'rl-proposicoes-q04',
    temaId: 'rl-proposicoes',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado:
      'Sabe-se que é FALSA a proposição: “Se o laudo foi entregue no prazo, então o processo foi arquivado”. Com base apenas nessa informação, é correto concluir que',
    alternativas: [
      'o laudo não foi entregue no prazo e o processo foi arquivado.',
      'o laudo não foi entregue no prazo e o processo não foi arquivado.',
      'o laudo foi entregue no prazo e o processo foi arquivado.',
      'se o processo não foi arquivado, então o laudo não foi entregue no prazo.',
      'o laudo foi entregue no prazo e o processo não foi arquivado.',
    ],
    correta: 4,
    comentario:
      'O condicional p → q só é falso quando o antecedente é V e o consequente é F (V → F). Assim, “o laudo foi entregue no prazo” é V e “o processo foi arquivado” é F, como diz E. A alternativa D é a contrapositiva (~q → ~p), equivalente ao condicional original — portanto, também falsa. A, B e C contrariam os valores obtidos.',
  },
  {
    id: 'rl-proposicoes-q05',
    temaId: 'rl-proposicoes',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Sejam A, B e C proposições simples com valores lógicos V, F e V, respectivamente. Os valores lógicos de (A ∨ B) → ~C, de ~(A ∧ B) ↔ C e de (B → A) ∧ (C → B) são, nessa ordem:',
    alternativas: ['V, V e F.', 'F, F e V.', 'F, V e F.', 'V, F e F.', 'F, V e V.'],
    correta: 2,
    comentario:
      '1ª: A ∨ B = V e ~C = F, logo V → F = F. 2ª: A ∧ B = F, sua negação é V, e V ↔ V (C) = V. 3ª: B → A = F → V = V; C → B = V → F = F; V ∧ F = F. Sequência: F, V e F. Erros típicos: considerar V → F verdadeiro ou esquecer que a conjunção exige as duas partes verdadeiras.',
  },
  {
    id: 'rl-proposicoes-q06',
    temaId: 'rl-proposicoes',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Considere a proposição “Ou Marta é perita, ou Marta é legista”, em que a expressão “ou… ou…” indica disjunção exclusiva. Essa proposição é FALSA quando',
    alternativas: [
      'as duas componentes têm o mesmo valor lógico: Marta é perita e legista, ou não é nenhuma das duas.',
      'Marta é perita e não é legista.',
      'Marta não é perita e é legista.',
      'Marta é perita, seja ou não legista.',
      'Marta não é legista, seja ou não perita.',
    ],
    correta: 0,
    comentario:
      'A disjunção exclusiva p ⊻ q é verdadeira só quando as componentes têm valores DIFERENTES; é falsa quando ambas são V ou ambas são F. B e C descrevem justamente os casos verdadeiros. D e E misturam um caso falso com um verdadeiro (por exemplo, “perita e não legista” torna a proposição verdadeira), então não garantem a falsidade.',
  },
  {
    id: 'rl-proposicoes-q07',
    temaId: 'rl-proposicoes',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'Sabe-se que as três proposições a seguir são verdadeiras:\nI. Se Ana é médica, então Bruno é enfermeiro.\nII. Bruno não é enfermeiro ou Carla é farmacêutica.\nIII. Carla não é farmacêutica.\nCom base nessas informações, conclui-se corretamente que',
    alternativas: [
      'Ana é médica e Bruno não é enfermeiro.',
      'Ana não é médica e Bruno é enfermeiro.',
      'Ana é médica e Carla não é farmacêutica.',
      'Ana não é médica e Bruno não é enfermeiro.',
      'Bruno é enfermeiro e Carla não é farmacêutica.',
    ],
    correta: 3,
    comentario:
      'Comece pela simples: III dá “Carla é farmacêutica” = F. Em II (disjunção V), se uma parte é F, a outra é V: “Bruno não é enfermeiro” = V. Em I (condicional V) com consequente F, o antecedente tem de ser F (senão seria V → F): Ana não é médica. As demais alternativas contrariam algum desses valores.',
  },
  {
    id: 'rl-proposicoes-q08',
    temaId: 'rl-proposicoes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'A sentença “x é um número primo maior que 2” é uma proposição simples, pois pode ser verdadeira ou falsa.',
    gabaritoCE: false,
    comentario:
      'Errado. Trata-se de sentença aberta: o valor lógico depende do valor atribuído à variável x (V para x = 3, F para x = 4). Sem esse valor, não há como classificá-la como V ou F, por isso não é proposição. Ela passa a ser proposição se x for substituído por um número ou se a sentença for quantificada (“existe x tal que…”).',
  },
  {
    id: 'rl-proposicoes-q09',
    temaId: 'rl-proposicoes',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'A tabela-verdade da proposição (P ∨ Q) ∧ ~R possui 8 linhas, e essa proposição é verdadeira em exatamente 3 delas.',
    gabaritoCE: true,
    comentario:
      'Certo. São 3 proposições simples: 2³ = 8 linhas. A conjunção é V quando P ∨ Q = V e ~R = V (isto é, R = F). P ∨ Q é V em 3 das 4 combinações de P e Q (só falha em F, F), e R = F em metade das linhas. Linhas verdadeiras: (V, V, F), (V, F, F) e (F, V, F) — exatamente 3.',
  },

  /* ---------- rl-equivalencias ---------- */
  {
    id: 'rl-equivalencias-q01',
    temaId: 'rl-equivalencias',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado: 'A negação da proposição “O médico está de plantão e o hospital está lotado” é:',
    alternativas: [
      'O médico não está de plantão e o hospital não está lotado.',
      'O médico não está de plantão ou o hospital não está lotado.',
      'Se o médico está de plantão, então o hospital está lotado.',
      'O médico está de plantão ou o hospital não está lotado.',
      'O médico não está de plantão e o hospital está lotado.',
    ],
    correta: 1,
    comentario:
      'Pela lei de De Morgan, ~(p ∧ q) ≡ ~p ∨ ~q: negam-se as duas partes e troca-se “e” por “ou”. A erra ao manter o “e” (essa seria a negação de “p ou q”). C é o condicional p → q, que não equivale à negação. D e E negam só uma das partes.',
  },
  {
    id: 'rl-equivalencias-q02',
    temaId: 'rl-equivalencias',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado:
      'Assinalar a alternativa que apresenta uma proposição logicamente equivalente a “Se o teste rápido deu positivo, então o caso será notificado”.',
    alternativas: [
      'Se o caso for notificado, então o teste rápido deu positivo.',
      'Se o teste rápido não deu positivo, então o caso não será notificado.',
      'O teste rápido deu positivo e o caso não será notificado.',
      'O teste rápido deu positivo ou o caso será notificado.',
      'O teste rápido não deu positivo ou o caso será notificado.',
    ],
    correta: 4,
    comentario:
      'Vale p → q ≡ ~p ∨ q: nega-se o antecedente, mantém-se o consequente e troca-se “se… então” por “ou”. A é a recíproca (q → p) e B, a inversa (~p → ~q): nenhuma equivale ao original. C é a negação (p ∧ ~q). D (p ∨ q) não nega o antecedente e é falsa quando p e q são F, caso em que o condicional é verdadeiro.',
  },
  {
    id: 'rl-equivalencias-q03',
    temaId: 'rl-equivalencias',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    enunciado: 'Uma proposição logicamente equivalente a “Se Joana estudou, então ela foi aprovada” é:',
    alternativas: [
      'Se Joana foi aprovada, então ela estudou.',
      'Se Joana não estudou, então ela não foi aprovada.',
      'Se Joana não foi aprovada, então ela não estudou.',
      'Joana estudou e não foi aprovada.',
      'Joana estudou se, e somente se, foi aprovada.',
    ],
    correta: 2,
    comentario:
      'A contrapositiva ~q → ~p (inverte a ordem e nega as duas partes) é equivalente a p → q. A é a recíproca e B, a inversa: as duas falham quando Joana foi aprovada sem estudar, caso em que o original é verdadeiro. D é a negação do condicional. E (bicondicional) afirma mais do que o original.',
  },
  {
    id: 'rl-equivalencias-q04',
    temaId: 'rl-equivalencias',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado: 'A negação de “Se o perito chegou, então a perícia começou” é:',
    alternativas: [
      'Se o perito não chegou, então a perícia não começou.',
      'O perito não chegou ou a perícia começou.',
      'Se a perícia não começou, então o perito não chegou.',
      'O perito chegou e a perícia não começou.',
      'O perito não chegou e a perícia não começou.',
    ],
    correta: 3,
    comentario:
      'A negação do condicional é ~(p → q) ≡ p ∧ ~q: mantém-se o antecedente, nega-se o consequente e usa-se “e” (macete MA-NÉ). A negação de um “se… então” nunca é outro condicional. B é equivalente ao próprio original (~p ∨ q), C é a contrapositiva (também equivalente), e A e E negam indevidamente o antecedente.',
  },
  {
    id: 'rl-equivalencias-q05',
    temaId: 'rl-equivalencias',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Assinale a alternativa que apresenta a negação de “Paulo é cirurgião ou Rita é pediatra”.',
    alternativas: [
      'Paulo não é cirurgião e Rita não é pediatra.',
      'Paulo não é cirurgião ou Rita não é pediatra.',
      'Paulo é cirurgião e Rita não é pediatra.',
      'Se Paulo não é cirurgião, então Rita é pediatra.',
      'Paulo não é cirurgião e Rita é pediatra.',
    ],
    correta: 0,
    comentario:
      'De Morgan: ~(p ∨ q) ≡ ~p ∧ ~q — a disjunção só é falsa quando as duas partes são falsas. B mantém o “ou” (seria a negação de “p e q”). C e E negam só uma parte. D (~p → q) é EQUIVALENTE à proposição original, pois p ∨ q ≡ ~p → q.',
  },
  {
    id: 'rl-equivalencias-q06',
    temaId: 'rl-equivalencias',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado: 'É logicamente equivalente à proposição “Se o paciente não fez jejum, então o exame será remarcado”:',
    alternativas: [
      'O paciente fez jejum e o exame será remarcado.',
      'Se o paciente fez jejum, então o exame não será remarcado.',
      'O paciente fez jejum ou o exame será remarcado.',
      'Se o exame não for remarcado, então o paciente não fez jejum.',
      'Se o exame for remarcado, então o paciente não fez jejum.',
    ],
    correta: 2,
    comentario:
      'Com j = “fez jejum” e r = “será remarcado”, a frase é ~j → r. Usando p → q ≡ ~p ∨ q: ~(~j) ∨ r ≡ j ∨ r, ou seja, “o paciente fez jejum ou o exame será remarcado”. B é a inversa e E, a recíproca. D erra a contrapositiva: a correta é ~r → j (“se não for remarcado, o paciente fez jejum”), pois negar “não fez jejum” dá “fez jejum”. A é uma conjunção, que afirma mais do que o condicional.',
  },
  {
    id: 'rl-equivalencias-q07',
    temaId: 'rl-equivalencias',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado: 'A negação da proposição “O alarme toca se, e somente se, a porta é aberta” é logicamente equivalente a:',
    alternativas: [
      'O alarme não toca se, e somente se, a porta não é aberta.',
      'O alarme não toca e a porta não é aberta.',
      'Se o alarme toca, então a porta não é aberta.',
      'O alarme toca e a porta é aberta.',
      'O alarme toca se, e somente se, a porta não é aberta.',
    ],
    correta: 4,
    comentario:
      'O bicondicional p ↔ q é V quando os valores são iguais; sua negação é V quando são diferentes: ~(p ↔ q) ≡ p ⊻ q ≡ p ↔ ~q. A (~p ↔ ~q) equivale ao próprio original. C (p → ~q) falha na linha p = F, q = F: C fica V, mas a negação é F. B e D descrevem casos em que o original é verdadeiro.',
  },
  {
    id: 'rl-equivalencias-q08',
    temaId: 'rl-equivalencias',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'Considere a afirmação: “Ser aprovado na prova objetiva é condição necessária para ser convocado para o teste físico”. Uma forma equivalente de expressá-la é:',
    alternativas: [
      'O candidato foi convocado para o teste físico e não foi aprovado na prova objetiva.',
      'Se o candidato não foi aprovado na prova objetiva, então não será convocado para o teste físico.',
      'O candidato é aprovado na prova objetiva se, e somente se, é convocado para o teste físico.',
      'Ser convocado para o teste físico é condição necessária para ser aprovado na prova objetiva.',
      'Ser aprovado na prova objetiva é condição suficiente para ser convocado para o teste físico.',
    ],
    correta: 1,
    comentario:
      'Em p → q, p é condição suficiente e q é condição necessária. Se a aprovação é necessária para a convocação, temos “convocado → aprovado”, cuja contrapositiva é “não aprovado → não convocado”. A é a negação (convocado e não aprovado), e não uma equivalência; D e E expressam a recíproca (aprovado → convocado); C é bicondicional e afirma mais do que o enunciado.',
  },
  {
    id: 'rl-equivalencias-q09',
    temaId: 'rl-equivalencias',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A negação da proposição “O laudo está correto e o perito o assinou” pode ser corretamente expressa por “Se o laudo está correto, então o perito não o assinou”.',
    gabaritoCE: true,
    comentario:
      'Certo. Por De Morgan, ~(p ∧ q) ≡ ~p ∨ ~q. Como a ∨ b ≡ ~a → b, temos ~p ∨ ~q ≡ p → ~q: “Se o laudo está correto, então o perito não o assinou”. Na tabela, p → ~q só é F em p = V e q = V — exatamente a única linha em que p ∧ q é V.',
  },
  {
    id: 'rl-equivalencias-q10',
    temaId: 'rl-equivalencias',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A proposição “Não é verdade que o réu é culpado ou que a testemunha mentiu” é equivalente a “O réu não é culpado ou a testemunha não mentiu”.',
    gabaritoCE: false,
    comentario:
      'Errado. “Não é verdade que (p ou q)” é ~(p ∨ q), que, por De Morgan, equivale a ~p ∧ ~q: “O réu não é culpado E a testemunha não mentiu”. A versão com “ou” (~p ∨ ~q) é a negação de “p e q” e é verdadeira, por exemplo, quando só o réu é culpado — caso em que a proposição original é falsa.',
  },

  /* ---------- rl-tautologia ---------- */
  {
    id: 'rl-tautologia-q01',
    temaId: 'rl-tautologia',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado: 'Assinale a alternativa que apresenta uma tautologia.',
    alternativas: ['p ∧ ~p', 'p → ~p', 'p ∨ q', 'p → (p ∧ q)', '(p ∧ q) → p'],
    correta: 4,
    comentario:
      '(p ∧ q) → p só seria falsa com antecedente V e consequente F; mas p ∧ q = V exige p = V, então o consequente nunca é F: tautologia (regra da simplificação). A é contradição; B é F quando p = V; C é F quando p e q são F; D é F quando p = V e q = F — B, C e D são contingências.',
  },
  {
    id: 'rl-tautologia-q02',
    temaId: 'rl-tautologia',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado: 'Assinalar a alternativa que apresenta uma CONTRADIÇÃO.',
    alternativas: ['(p → q) ∧ (p ∧ ~q)', '(p → q) ∨ (p ∧ ~q)', 'p ↔ ~(~p)', '(p ∨ q) ∧ ~p', '~(p ∧ q)'],
    correta: 0,
    comentario:
      'p ∧ ~q é exatamente a negação de p → q. Assim, A tem a forma X ∧ ~X, falsa em todas as linhas: contradição. B tem a forma X ∨ ~X: tautologia. C também é tautologia (dupla negação). D é V quando p = F e q = V, e E é V em três linhas: ambas são contingências.',
  },
  {
    id: 'rl-tautologia-q03',
    temaId: 'rl-tautologia',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Analise as proposições compostas a seguir:\nI. p ∨ ~(p ∧ q)\nII. (p → q) ↔ (~p ∨ q)\nIII. (p ∨ q) → p\nIV. ~(p → p)\nQuais são tautologias?',
    alternativas: ['Apenas I.', 'Apenas III.', 'Apenas I e II.', 'Apenas II e IV.', 'Apenas I, II e III.'],
    correta: 2,
    comentario:
      'I: se p = V, a disjunção é V; se p = F, p ∧ q = F e sua negação é V — sempre V. II: p → q ≡ ~p ∨ q, e o bicondicional entre proposições equivalentes é tautologia. III é F para p = F e q = V: contingência. IV: p → p é sempre V, logo sua negação é contradição. Tautologias: I e II.',
  },
  {
    id: 'rl-tautologia-q04',
    temaId: 'rl-tautologia',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado: 'Na tabela-verdade da proposição (p → q) ∧ (q → r), quantas linhas apresentam valor lógico verdadeiro?',
    alternativas: ['3', '4', '5', '6', '2'],
    correta: 1,
    comentario:
      'São 8 linhas. A conjunção é V quando os dois condicionais são V, ou seja, quando não há nenhum “V → F” na cadeia p, q, r. Isso ocorre em (V, V, V), (F, V, V), (F, F, V) e (F, F, F): 4 linhas. Nas outras 4 há p = V com q = F, ou q = V com r = F. A proposição é, portanto, uma contingência.',
    verificar: () => {
      let n = 0;
      for (const p of [true, false])
        for (const q of [true, false])
          for (const r of [true, false]) if ((!p || q) && (!q || r)) n += 1;
      return n;
    },
  },
  {
    id: 'rl-tautologia-q05',
    temaId: 'rl-tautologia',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Uma proposição composta é classificada como contingência quando',
    alternativas: [
      'é verdadeira em todas as linhas de sua tabela-verdade.',
      'é falsa em todas as linhas de sua tabela-verdade.',
      'é formada apenas pelos conectivos de conjunção e disjunção.',
      'apresenta pelo menos um valor V e pelo menos um valor F em sua tabela-verdade.',
      'sua negação é uma tautologia.',
    ],
    correta: 3,
    comentario:
      'Contingência é a proposição cuja última coluna da tabela-verdade mistura V e F. A define tautologia; B, contradição; E também descreve uma contradição (a negação de uma contradição é tautologia). C é irrelevante: a classificação depende dos valores lógicos, não dos conectivos usados.',
  },
  {
    id: 'rl-tautologia-q06',
    temaId: 'rl-tautologia',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 3,
    enunciado: 'São tautologias as proposições a seguir, EXCETO:',
    alternativas: [
      '[(p → q) ∧ p] → q',
      '[(p → q) ∧ ~q] → ~p',
      '[(p → q) ∧ q] → p',
      '[(p ∨ q) ∧ ~p] → q',
      '[(p → q) ∧ (q → r)] → (p → r)',
    ],
    correta: 2,
    comentario:
      'C corresponde à falácia de afirmar o consequente: com p = F e q = V, o antecedente (V ∧ V) é V e o consequente p é F, resultando em V → F = F. Logo, C é contingência. As demais são regras de inferência válidas: modus ponens (A), modus tollens (B), silogismo disjuntivo (D) e silogismo hipotético (E).',
  },
  {
    id: 'rl-tautologia-q07',
    temaId: 'rl-tautologia',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'A proposição (P → Q) ↔ (~Q → ~P) é uma tautologia.',
    gabaritoCE: true,
    comentario:
      'Certo. ~Q → ~P é a contrapositiva de P → Q, e as duas têm a mesma tabela-verdade (só são F na linha P = V, Q = F). Como o bicondicional entre proposições de mesmo valor em todas as linhas é sempre V, a proposição é tautologia — é assim que se prova uma equivalência.',
  },
  {
    id: 'rl-tautologia-q08',
    temaId: 'rl-tautologia',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado: 'A proposição [P ∧ (P → Q)] → ~Q é uma contradição.',
    gabaritoCE: false,
    comentario:
      'Errado. O antecedente P ∧ (P → Q) só é V quando P = V e Q = V; nessa linha, ~Q = F e a proposição vale V → F = F. Nas outras três linhas o antecedente é F, e o condicional é V. Como há V e F na tabela, trata-se de contingência, e não de contradição.',
  },
];
