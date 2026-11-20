import type { QuestaoTreino } from '../../../types';

const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIAS = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

/** Questões autorais: argumentos, quantificadores e sequências. */
export const QUESTOES_2: QuestaoTreino[] = [
  /* ---------- rl-argumentos ---------- */
  {
    id: 'rl-argumentos-q01',
    temaId: 'rl-argumentos',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado:
      'Considere as premissas:\nP1: Se o exame toxicológico de um candidato é positivo, então ele é eliminado do concurso.\nP2: O exame toxicológico de Lucas foi positivo.\nConclui-se validamente que',
    alternativas: [
      'Lucas não foi eliminado do concurso.',
      'todo candidato eliminado teve exame toxicológico positivo.',
      'o exame de Lucas pode ter sido negativo.',
      'Lucas foi eliminado apenas se teve exame negativo.',
      'Lucas foi eliminado do concurso.',
    ],
    correta: 4,
    comentario:
      'É o modus ponens: p → q e p, logo q. Afirmado o antecedente (exame positivo), conclui-se o consequente: Lucas foi eliminado. B inverte o condicional (outras causas podem eliminar um candidato). A, C e D contrariam as premissas — D significa “se foi eliminado, o exame foi negativo”, o que é falso.',
  },
  {
    id: 'rl-argumentos-q02',
    temaId: 'rl-argumentos',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Considerando verdadeiras as premissas “Se o relatório foi enviado, então o protocolo foi gerado” e “O protocolo não foi gerado”, assinalar a alternativa que apresenta uma conclusão logicamente válida.',
    alternativas: [
      'O relatório foi enviado.',
      'O relatório não foi enviado.',
      'O protocolo foi gerado sem o envio do relatório.',
      'Se o protocolo não foi gerado, então o relatório foi enviado.',
      'Nada se pode concluir sobre o envio do relatório.',
    ],
    correta: 1,
    comentario:
      'Modus tollens: p → q e ~q, logo ~p. Se o relatório tivesse sido enviado, o protocolo teria sido gerado; como não foi, o relatório não foi enviado. E ignora o modus tollens; A e D levam a “relatório enviado” = V, o que tornaria a 1ª premissa V → F; C contradiz a 2ª premissa.',
  },
  {
    id: 'rl-argumentos-q03',
    temaId: 'rl-argumentos',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Assinale a alternativa que apresenta um argumento INVÁLIDO.',
    alternativas: [
      'Se Ana é perita, então Ana é servidora. Ana é servidora. Logo, Ana é perita.',
      'Se Ana é perita, então Ana é servidora. Ana não é servidora. Logo, Ana não é perita.',
      'Ana é perita ou professora. Ana não é professora. Logo, Ana é perita.',
      'Se Ana é perita, então é servidora. Se é servidora, então tem matrícula. Logo, se Ana é perita, então tem matrícula.',
      'Ana é perita e professora. Logo, Ana é professora.',
    ],
    correta: 0,
    comentario:
      'A comete a falácia de afirmar o consequente (p → q; q; logo p): Ana pode ser servidora sem ser perita, com premissas verdadeiras e conclusão falsa. As demais são válidas: B é modus tollens; C, silogismo disjuntivo; D, silogismo hipotético; E, simplificação da conjunção.',
  },
  {
    id: 'rl-argumentos-q04',
    temaId: 'rl-argumentos',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 3,
    enunciado:
      'Considere verdadeiras as premissas:\nP1: Se Bruno faz plantão, então Clara folga.\nP2: Se Clara folga, então Diego viaja.\nP3: Diego não viaja ou Eva trabalha.\nP4: Eva não trabalha.\nÉ correto concluir que',
    alternativas: [
      'Bruno faz plantão e Clara não folga.',
      'Clara folga e Diego não viaja.',
      'Diego viaja e Eva não trabalha.',
      'Bruno não faz plantão e Clara não folga.',
      'Bruno não faz plantão e Diego viaja.',
    ],
    correta: 3,
    comentario:
      'P4 é simples: “Eva trabalha” = F. Em P3 (disjunção V), com uma parte F, a outra é V: Diego não viaja. P2 é V com consequente F, logo o antecedente é F: Clara não folga. P1, pelo mesmo raciocínio (modus tollens), dá: Bruno não faz plantão. Só D é compatível; as demais afirmam algo que as premissas negam.',
  },
  {
    id: 'rl-argumentos-q05',
    temaId: 'rl-argumentos',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Considere o argumento: “Todos os peritos são servidores públicos. Alguns servidores públicos são médicos. Logo, alguns peritos são médicos.” Sobre esse argumento, é correto afirmar que',
    alternativas: [
      'é válido, pois as duas premissas podem ser verdadeiras.',
      'é inválido, pois é possível que as premissas sejam verdadeiras e a conclusão seja falsa.',
      'é válido, pois a conclusão se apoia no termo comum “servidores públicos”.',
      'é inválido, pois a primeira premissa é necessariamente falsa.',
      'é válido, pois toda premissa particular gera uma conclusão particular.',
    ],
    correta: 1,
    comentario:
      'Desenhe os peritos dentro dos servidores e coloque os médicos-servidores na região dos servidores FORA dos peritos: as premissas ficam verdadeiras e a conclusão, falsa. Logo, o argumento é inválido. A confunde verdade das premissas com validade; C e E citam “regras” inexistentes; D erra porque a invalidade não decorre da falsidade de uma premissa.',
  },
  {
    id: 'rl-argumentos-q06',
    temaId: 'rl-argumentos',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 1,
    enunciado: 'Em lógica, um argumento dedutivo é VÁLIDO quando',
    alternativas: [
      'todas as suas premissas e a sua conclusão são verdadeiras.',
      'a sua conclusão é verdadeira no mundo real, ainda que as premissas sejam falsas.',
      'é impossível que todas as premissas sejam verdadeiras e a conclusão seja falsa.',
      'possui pelo menos duas premissas e uma conclusão afirmativa.',
      'a conclusão é aceita pela maioria dos especialistas da área.',
    ],
    correta: 2,
    comentario:
      'Validade é uma propriedade da forma: a verdade das premissas garante a da conclusão, ou seja, não existe caso com premissas V e conclusão F. A e B confundem validade com verdade (há argumentos inválidos com premissas e conclusão verdadeiras). D e E trazem critérios sem relação com validade.',
  },
  {
    id: 'rl-argumentos-q07',
    temaId: 'rl-argumentos',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado:
      'Considere verdadeiras as três afirmações:\n• Se o réu confessar, ele será condenado.\n• Se o réu não confessar, a perícia o incriminará.\n• Se a perícia o incriminar, ele será condenado.\nA partir delas, conclui-se necessariamente que',
    alternativas: [
      'o réu confessará.',
      'a perícia incriminará o réu.',
      'o réu não confessará e será condenado.',
      'se o réu confessar, será absolvido.',
      'o réu será condenado.',
    ],
    correta: 4,
    comentario:
      'Das duas últimas (silogismo hipotético): “se não confessar, será condenado”. Com a primeira, os dois casos possíveis (confessar ou não) levam à condenação — é um dilema construtivo. A, B e C não decorrem, pois não se sabe se ele confessará. D também não: como a condenação é certa, D equivaleria a afirmar que ele não confessará.',
  },
  {
    id: 'rl-argumentos-q08',
    temaId: 'rl-argumentos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O argumento “Se chover, a perícia externa será adiada. Não vai chover. Logo, a perícia externa não será adiada.” é válido.',
    gabaritoCE: false,
    comentario:
      'Errado. É a falácia de negar o antecedente (p → q; ~p; logo ~q). A perícia pode ser adiada por outro motivo: com p = F e q = V, as duas premissas são verdadeiras e a conclusão é falsa. O condicional nada afirma sobre o que acontece quando o antecedente é falso.',
  },
  {
    id: 'rl-argumentos-q09',
    temaId: 'rl-argumentos',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Considere o argumento: “Todo médico é perito. Todo perito é servidor público. Logo, todo médico é servidor público.” Embora a primeira premissa seja falsa no mundo real, o argumento é válido.',
    gabaritoCE: true,
    comentario:
      'Certo. Validade depende da forma, não da verdade das premissas. Se os médicos estão contidos nos peritos, e os peritos nos servidores, os médicos estão contidos nos servidores (transitividade da inclusão). O argumento é válido, mas não é sólido, porque uma das premissas é falsa.',
  },

  /* ---------- rl-quantificadores ---------- */
  {
    id: 'rl-quantificadores-q01',
    temaId: 'rl-quantificadores',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado: 'A negação da proposição “Todos os médicos do hospital são plantonistas” é:',
    alternativas: [
      'Nenhum médico do hospital é plantonista.',
      'Alguns médicos do hospital são plantonistas, e outros não são.',
      'Alguns plantonistas não são médicos do hospital.',
      'Pelo menos um médico do hospital não é plantonista.',
      'Alguns médicos do hospital são plantonistas.',
    ],
    correta: 3,
    comentario:
      'Para negar “Todo A é B”, basta um contraexemplo: “Algum (pelo menos um) A não é B”. A é a proposição contrária, não a negação: as duas podem ser falsas ao mesmo tempo. B exige mais do que a negação: se nenhum médico for plantonista, a original é falsa, mas B também é. C troca os conjuntos; E é compatível com a original.',
  },
  {
    id: 'rl-quantificadores-q02',
    temaId: 'rl-quantificadores',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Assinalar a alternativa que apresenta a negação de “Algum perito é legista”.',
    alternativas: [
      'Nenhum perito é legista.',
      'Algum perito não é legista.',
      'Todo perito é legista.',
      'Algum legista não é perito.',
      'Todo legista é perito.',
    ],
    correta: 0,
    comentario:
      '“Algum A é B” afirma que existe pelo menos um A que é B; para negá-la, é preciso dizer que não existe nenhum: “Nenhum A é B”. B pode ser verdadeira junto com a original (são subcontrárias). C também pode ser verdadeira junto com a original (basta que todos os peritos sejam legistas), logo não a nega. D e E tratam de outra relação entre os conjuntos.',
  },
  {
    id: 'rl-quantificadores-q03',
    temaId: 'rl-quantificadores',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'A negação de “Existe paciente da fila que não foi atendido” é:',
    alternativas: [
      'Todos os pacientes da fila foram atendidos.',
      'Nenhum paciente da fila foi atendido.',
      'Existe paciente da fila que foi atendido.',
      'Todos os pacientes da fila não foram atendidos.',
      'Nem todos os pacientes da fila foram atendidos.',
    ],
    correta: 0,
    comentario:
      'A forma é “Algum A não é B”, cuja negação é “Todo A é B”: todos os pacientes da fila foram atendidos. E é equivalente à original (“nem todos” = “algum não”). B e D dizem que ninguém foi atendido, o que não é a negação. C pode ser verdadeira junto com a original.',
  },
  {
    id: 'rl-quantificadores-q04',
    temaId: 'rl-quantificadores',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado:
      'Considere verdadeiras as afirmações “Todo perito é servidor público” e “Nenhum servidor público é empresário”. Conclui-se necessariamente que',
    alternativas: [
      'algum empresário é perito.',
      'nenhum perito é empresário.',
      'todo servidor público é perito.',
      'algum servidor público é empresário.',
      'algum servidor público não é perito.',
    ],
    correta: 1,
    comentario:
      'O círculo dos peritos está dentro do dos servidores, e o dos servidores não toca o dos empresários; logo, peritos e empresários também não se tocam: nenhum perito é empresário. A e D contrariam as premissas; C inverte “todo perito é servidor”; E supõe que há servidores fora do grupo dos peritos, o que as premissas não garantem (todos os servidores podem ser peritos).',
  },
  {
    id: 'rl-quantificadores-q05',
    temaId: 'rl-quantificadores',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 3,
    enunciado:
      'Considere verdadeiras as afirmações “Alguns médicos são professores” e “Nenhum professor é estudante”. Pode-se concluir, necessariamente, que',
    alternativas: [
      'nenhum médico é estudante.',
      'alguns médicos são estudantes.',
      'nenhum estudante é médico.',
      'alguns médicos não são estudantes.',
      'todos os professores são médicos.',
    ],
    correta: 3,
    comentario:
      'Os médicos que são professores estão fora do conjunto dos estudantes; portanto, existe ao menos um médico que não é estudante. A e C não são necessárias: os médicos que não são professores podem ser estudantes. B também não é garantida (pode não haver médico estudante), e E não decorre de “alguns”.',
  },
  {
    id: 'rl-quantificadores-q06',
    temaId: 'rl-quantificadores',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado: 'É logicamente equivalente à proposição “Nenhum laudo incompleto é aceito”:',
    alternativas: [
      'Todo laudo não aceito é incompleto.',
      'Todo laudo aceito é incompleto.',
      'Se um laudo é aceito, então ele não é incompleto.',
      'Algum laudo aceito é incompleto.',
      'Todo laudo incompleto é aceito.',
    ],
    correta: 2,
    comentario:
      '“Nenhum A é B” equivale a “Nenhum B é A” e a “Se é B, então não é A”: os conjuntos não têm elemento comum. Assim, se um laudo é aceito, ele não é incompleto (contrapositiva de “se é incompleto, não é aceito”). D é a negação da original. A é a recíproca (“se não é aceito, é incompleto”): um laudo completo pode ser recusado por outro motivo. B e E põem um conjunto dentro do outro, enquanto a original diz que eles não têm elemento comum.',
  },
  {
    id: 'rl-quantificadores-q07',
    temaId: 'rl-quantificadores',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'A afirmação “Não é verdade que todo candidato aprovado estudou mais de seis horas por dia” é logicamente equivalente a:',
    alternativas: [
      'Nenhum candidato aprovado estudou mais de seis horas por dia.',
      'Algum candidato aprovado estudou mais de seis horas por dia.',
      'Algum candidato que estudou mais de seis horas por dia não foi aprovado.',
      'Todo candidato que não foi aprovado estudou, no máximo, seis horas por dia.',
      'Algum candidato aprovado não estudou mais de seis horas por dia.',
    ],
    correta: 4,
    comentario:
      '“Não é verdade que todo A é B” nega uma universal afirmativa e equivale a “Algum A não é B”: algum aprovado não estudou mais de seis horas por dia. A exagera (é a contrária da universal): a afirmação só garante UM contraexemplo. B troca o quantificador, mas mantém “estudou mais de seis horas”: ela é verdadeira até quando todos os aprovados estudaram mais de seis horas, então não expressa a negação. C e D trocam os conjuntos.',
  },
  {
    id: 'rl-quantificadores-q08',
    temaId: 'rl-quantificadores',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'A negação da proposição “Todo perito criminal é médico” é “Nenhum perito criminal é médico”.',
    gabaritoCE: false,
    comentario:
      'Errado. A negação de “Todo A é B” é “Algum A não é B”: “Algum perito criminal não é médico”. “Nenhum perito criminal é médico” é a proposição contrária: ambas podem ser falsas ao mesmo tempo (basta haver peritos médicos e peritos não médicos), o que nunca ocorre entre uma proposição e sua negação.',
  },
  {
    id: 'rl-quantificadores-q09',
    temaId: 'rl-quantificadores',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Se as proposições “Todo legista é perito” e “Nenhum perito é advogado” forem verdadeiras, então a proposição “Nenhum legista é advogado” será, necessariamente, verdadeira.',
    gabaritoCE: true,
    comentario:
      'Certo. O conjunto dos legistas está contido no dos peritos, que não tem elemento em comum com o dos advogados. Logo, legistas e advogados também não têm elemento em comum: nenhum legista é advogado. Não há diagrama que torne as premissas verdadeiras e a conclusão falsa.',
  },

  /* ---------- rl-sequencias ---------- */
  {
    id: 'rl-sequencias-q01',
    temaId: 'rl-sequencias',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado: 'Na sequência 7, 12, 17, 22, …, mantida a lei de formação, o 10º termo é:',
    alternativas: ['47', '50', '57', '52', '55'],
    correta: 3,
    comentario:
      'É uma PA de razão 5: aₙ = a₁ + (n − 1)·r = 7 + 9 × 5 = 52. Quem calcula 7 + 10 × 5 = 57 erra o número de saltos: do 1º ao 10º termo há 9 somas, e não 10. 47 é o 9º termo (7 + 8 × 5).',
    verificar: () => 7 + (10 - 1) * 5,
  },
  {
    id: 'rl-sequencias-q02',
    temaId: 'rl-sequencias',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado: 'Observe a sequência: 2, 5, 11, 23, 47, … Mantida a lei de formação, o próximo termo é:',
    alternativas: ['94', '71', '93', '96', '95'],
    correta: 4,
    comentario:
      'Cada termo é o dobro do anterior mais 1: 2 × 2 + 1 = 5; 5 × 2 + 1 = 11; 11 × 2 + 1 = 23; 23 × 2 + 1 = 47; 47 × 2 + 1 = 95. As diferenças (3, 6, 12, 24) dobram, o que confirma: 47 + 48 = 95. 94 esquece o “+ 1”; 71 soma só 24.',
    verificar: () => {
      let a = 2;
      for (let i = 0; i < 5; i += 1) a = 2 * a + 1;
      return a;
    },
  },
  {
    id: 'rl-sequencias-q03',
    temaId: 'rl-sequencias',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Considerando o alfabeto de 26 letras, qual letra completa a sequência A, C, F, J, O, ___?',
    alternativas: ['U', 'T', 'V', 'S', 'X'],
    correta: 0,
    comentario:
      'Convertendo em posições: A = 1, C = 3, F = 6, J = 10, O = 15. Os saltos crescem de 1 em 1 (+2, +3, +4, +5), então o próximo é +6: 15 + 6 = 21, posição da letra U. T (20) resulta de repetir o salto +5; V (22), de um salto +7.',
    verificar: () => ALFABETO.charAt(15 + 6 - 1),
  },
  {
    id: 'rl-sequencias-q04',
    temaId: 'rl-sequencias',
    formato: 'multipla',
    estilo: 'furb',
    dificuldade: 2,
    enunciado:
      'Uma sequência de figuras repete sempre o mesmo padrão: triângulo, círculo, quadrado, quadrado, triângulo, círculo, quadrado, quadrado, … Entre as 50 primeiras figuras, quantas são quadrados?',
    alternativas: ['26', '25', '24', '12', '23'],
    correta: 2,
    comentario:
      'O ciclo tem 4 figuras, sendo 2 quadrados. 50 ÷ 4 = 12 ciclos completos (48 figuras) e resto 2. Os 12 ciclos têm 24 quadrados; as 2 figuras restantes são triângulo e círculo. Total: 24. 25 ou 26 supõem que o resto inclui quadrados; 12 conta um quadrado por ciclo.',
    verificar: () => {
      const ciclo = ['triângulo', 'círculo', 'quadrado', 'quadrado'];
      let n = 0;
      for (let i = 0; i < 50; i += 1) if (ciclo[i % ciclo.length] === 'quadrado') n += 1;
      return n;
    },
  },
  {
    id: 'rl-sequencias-q05',
    temaId: 'rl-sequencias',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Na sequência 3, 4, 7, 11, 18, 29, …, cada termo, a partir do terceiro, é a soma dos dois anteriores. O 9º termo é:',
    alternativas: ['119', '123', '76', '199', '121'],
    correta: 1,
    comentario:
      'Continuando a regra: 7º = 18 + 29 = 47; 8º = 29 + 47 = 76; 9º = 47 + 76 = 123. 76 é o 8º termo (erro de contagem) e 199 é o 10º. 119 e 121 vêm de erros em uma das somas.',
    verificar: () => {
      let a = 3;
      let b = 4;
      for (let i = 3; i <= 9; i += 1) {
        const c = a + b;
        a = b;
        b = c;
      }
      return b;
    },
  },
  {
    id: 'rl-sequencias-q06',
    temaId: 'rl-sequencias',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 1,
    enunciado: 'Hoje é quarta-feira. Daqui a 100 dias, será:',
    alternativas: ['quinta-feira', 'sábado', 'domingo', 'quarta-feira', 'sexta-feira'],
    correta: 4,
    comentario:
      'Os dias da semana se repetem a cada 7 dias. 100 = 7 × 14 + 2: depois de 14 semanas completas, cai de novo numa quarta-feira, e faltam 2 dias. Quarta-feira + 2 dias = sexta-feira. Quinta-feira resulta do erro de contar o dia de hoje como o 1º dos 100.',
    verificar: () => DIAS[(3 + 100) % 7] ?? '',
  },
  {
    id: 'rl-sequencias-q07',
    temaId: 'rl-sequencias',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 3,
    enunciado: 'Observe a sequência: 1, 2, 5, 10, 17, 26, … Mantida a lei de formação, o 15º termo é:',
    alternativas: ['226', '170', '197', '196', '225'],
    correta: 2,
    comentario:
      'As diferenças são 1, 3, 5, 7, 9 (números ímpares), sinal de quadrados: o n-ésimo termo é (n − 1)² + 1 (1º = 0² + 1; 2º = 1² + 1; 6º = 5² + 1 = 26). O 15º é 14² + 1 = 197. 226 = 15² + 1 usa n no lugar de n − 1; 196 esquece o + 1.',
    verificar: () => (15 - 1) ** 2 + 1,
  },
  {
    id: 'rl-sequencias-q08',
    temaId: 'rl-sequencias',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado: 'Considere a sequência A1, C4, E9, G16, … Mantido o padrão (alfabeto de 26 letras), o próximo termo é:',
    alternativas: ['I25', 'H25', 'I24', 'J36', 'H20'],
    correta: 0,
    comentario:
      'Há duas sequências combinadas. Letras: A, C, E, G — pula-se uma letra (posições 1, 3, 5, 7), então a próxima é a 9ª, I. Números: 1, 4, 9, 16, os quadrados perfeitos, então o próximo é 5² = 25. Termo: I25. H25 e H20 não pulam a letra; I24 erra o quadrado; J36 avança demais.',
    verificar: () => ALFABETO.charAt(2 * 4) + String(5 ** 2),
  },
  {
    id: 'rl-sequencias-q09',
    temaId: 'rl-sequencias',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Na sequência 1, 3, 7, 15, 31, …, em que cada termo, a partir do segundo, é igual ao dobro do termo anterior mais 1, o 8º termo é 255.',
    gabaritoCE: true,
    comentario:
      'Certo. Continuando: 31 × 2 + 1 = 63 (6º), 63 × 2 + 1 = 127 (7º) e 127 × 2 + 1 = 255 (8º). Outra forma: o n-ésimo termo é 2ⁿ − 1, e 2⁸ − 1 = 256 − 1 = 255.',
  },
];
