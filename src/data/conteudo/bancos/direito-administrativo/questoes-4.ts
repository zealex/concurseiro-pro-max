import type { QuestaoTreino } from '../../../types';

/* Improbidade administrativa e processo administrativo federal */
export const QUESTOES_4: QuestaoTreino[] = [
  /* ---------- da-improbidade ---------- */
  {
    id: 'da-improbidade-q01',
    temaId: 'da-improbidade',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado:
      'Após a Lei 14.230/2021, para a configuração de ato de improbidade administrativa tipificado nos arts. 9º, 10 e 11 da Lei 8.429/1992, exige-se:',
    alternativas: [
      'culpa, em qualquer de suas modalidades.',
      'dolo.',
      'apenas a voluntariedade do agente.',
      'dolo ou culpa grave, nos casos de lesão ao erário.',
      'apenas o resultado danoso, independentemente do elemento subjetivo.',
    ],
    correta: 1,
    comentario:
      'O art. 1º, § 1º, considera atos de improbidade as condutas dolosas dos arts. 9º, 10 e 11, e o § 2º define dolo como vontade livre e consciente de alcançar o resultado ilícito, não bastando a voluntariedade. A modalidade culposa do art. 10 foi extinta, inclusive a culpa grave.',
    fundamento: 'Lei 8.429/1992, art. 1º, §§ 1º e 2º, com redação da Lei 14.230/2021',
  },
  {
    id: 'da-improbidade-q02',
    temaId: 'da-improbidade',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo, com base na Lei 8.429/1992, na redação dada pela Lei 14.230/2021, considerando condutas dolosas:\n\nI. Receber presente de empresa interessada em decisão a ser tomada pelo agente configura ato de improbidade que importa enriquecimento ilícito.\nII. Frustrar, em ofensa à imparcialidade, o caráter concorrencial de concurso público para beneficiar terceiro configura ato que atenta contra os princípios da administração pública.\nIII. Configura ato de improbidade que causa lesão ao erário a mera inobservância de formalidade em uma compra, ainda que sem perda patrimonial efetiva.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas I e II.', 'Apenas II e III.', 'I, II e III.'],
    correta: 2,
    comentario:
      'I corresponde ao art. 9º, I, e II ao art. 11, V. A III erra: o art. 10 exige perda patrimonial efetiva e comprovada, e o § 1º diz que a inobservância de formalidades sem perda patrimonial efetiva não gera ressarcimento.',
    fundamento: 'Lei 8.429/1992, arts. 9º, I, 10, caput e § 1º, e 11, V, com redação da Lei 14.230/2021',
  },
  {
    id: 'da-improbidade-q03',
    temaId: 'da-improbidade',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Ao agente condenado por ato de improbidade que atenta contra os princípios da administração pública (art. 11 da Lei 8.429/1992), podem ser aplicadas, conforme a redação vigente do art. 12:',
    alternativas: [
      'perda da função pública e suspensão dos direitos políticos por até 14 anos.',
      'suspensão dos direitos políticos por até 12 anos e multa equivalente ao dano.',
      'perda dos bens acrescidos ilicitamente e proibição de contratar com o poder público por até 14 anos.',
      'multa civil de até 24 vezes o valor da remuneração do agente e proibição de contratar com o poder público por até 4 anos.',
      'apenas advertência e multa de até 2 vezes a remuneração do agente.',
    ],
    correta: 3,
    comentario:
      'Para o art. 11, o art. 12, III, prevê multa de até 24 vezes a remuneração e proibição de contratar ou receber benefícios por até 4 anos. Perda da função e suspensão dos direitos políticos ficaram para os arts. 9º (até 14 anos) e 10 (até 12 anos). Advertência não é sanção da Lei de Improbidade.',
    fundamento: 'Lei 8.429/1992, art. 12, I, II e III, com redação da Lei 14.230/2021',
  },
  {
    id: 'da-improbidade-q04',
    temaId: 'da-improbidade',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 1,
    enunciado: 'Com a redação dada pela Lei 14.230/2021, a ação para a aplicação das sanções da Lei de Improbidade Administrativa prescreve em:',
    alternativas: [
      'cinco anos após o término do mandato ou do exercício de cargo em comissão.',
      'cinco anos, contados da data do fato.',
      'dez anos, contados da ciência do fato pela autoridade competente.',
      'prazo nenhum, pois a ação de improbidade é imprescritível.',
      'oito anos, contados da ocorrência do fato ou, nas infrações permanentes, do dia em que cessou a permanência.',
    ],
    correta: 4,
    comentario:
      'O art. 23, caput, fixa oito anos a contar do fato ou da cessação da permanência. O prazo de cinco anos após o fim do mandato era da redação original. Imprescritível é apenas a ação de ressarcimento fundada em ato doloso de improbidade (Tema 897 do STF), não a ação sancionatória.',
    fundamento: 'Lei 8.429/1992, art. 23, caput, com redação da Lei 14.230/2021',
  },
  {
    id: 'da-improbidade-q05',
    temaId: 'da-improbidade',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'Em 2018, um agente foi condenado por ato de improbidade culposo (art. 10, na redação original da Lei 8.429/1992), com trânsito em julgado em 2020. Após a Lei 14.230/2021, que extinguiu a modalidade culposa, ele pede a extinção da condenação. Segundo a tese do STF no Tema 1199 da repercussão geral:',
    alternativas: [
      'o pedido não procede, pois a revogação da modalidade culposa é irretroativa e não incide sobre a coisa julgada nem sobre a execução das penas.',
      'o pedido procede, pois a lei sancionadora mais benéfica sempre retroage.',
      'o pedido procede apenas quanto à multa civil.',
      'o pedido procede se o condenado demonstrar que não houve dano ao erário.',
      'a condenação deve ser convertida automaticamente em infração ao art. 11.',
    ],
    correta: 0,
    comentario:
      'O Tema 1199 (ARE 843.989) fixou que a revogação da modalidade culposa é irretroativa, por força do art. 5º, XXXVI, da CF, e não atinge a coisa julgada nem a execução das penas. A lei nova só alcança atos culposos anteriores sem condenação transitada em julgado, cabendo ao juiz analisar eventual dolo.',
    fundamento: 'STF, Tema 1199 da repercussão geral (ARE 843.989); CF/88, art. 5º, XXXVI',
  },
  {
    id: 'da-improbidade-q06',
    temaId: 'da-improbidade',
    formato: 'multipla',
    estilo: 'ibam',
    dificuldade: 2,
    enunciado: 'O particular que, mesmo não sendo agente público, induz ou concorre dolosamente para a prática de ato de improbidade administrativa:',
    alternativas: [
      'não se sujeita à Lei 8.429/1992, por não ser agente público.',
      'sujeita-se às disposições da Lei 8.429/1992, no que couber.',
      'responde apenas na esfera penal.',
      'responde somente se for servidor aposentado.',
      'responde apenas se for pessoa jurídica.',
    ],
    correta: 1,
    comentario:
      'O art. 3º estende a lei, no que couber, a quem, mesmo não sendo agente público, induza ou concorra dolosamente para o ato de improbidade. A responsabilização civil por improbidade não exclui a penal, e o terceiro pode ser pessoa física ou jurídica.',
    fundamento: 'Lei 8.429/1992, art. 3º, com redação da Lei 14.230/2021',
  },
  {
    id: 'da-improbidade-q07',
    temaId: 'da-improbidade',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Considera-se dolo, para os fins da Lei de Improbidade Administrativa, a vontade livre e consciente de alcançar o resultado ilícito tipificado nos arts. 9º, 10 e 11 da lei, não bastando a voluntariedade do agente.',
    gabaritoCE: true,
    comentario:
      'Certo. É o texto do art. 1º, § 2º, incluído pela Lei 14.230/2021. Não basta querer praticar a conduta; é preciso querer o resultado ilícito descrito no tipo.',
    fundamento: 'Lei 8.429/1992, art. 1º, § 2º, com redação da Lei 14.230/2021',
  },
  {
    id: 'da-improbidade-q08',
    temaId: 'da-improbidade',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O rol de condutas do art. 11 da Lei 8.429/1992, que trata dos atos que atentam contra os princípios da administração pública, é meramente exemplificativo, de modo que qualquer violação dolosa a princípio administrativo configura improbidade.',
    gabaritoCE: false,
    comentario:
      'Errado. Após a Lei 14.230/2021, o art. 11 exige que a violação aos deveres de honestidade, imparcialidade e legalidade seja “caracterizada por uma das seguintes condutas”: o rol é taxativo. Ao concluir as ADIs 7156 e 7236 (1º/7/2026), o STF declarou constitucional esse caráter taxativo, mantida a revogação dos antigos incisos I e II (Informativo STF 1225).',
    fundamento: 'Lei 8.429/1992, art. 11, caput, com redação da Lei 14.230/2021; STF, ADIs 7156 e 7236 (Informativo 1225)',
  },
  {
    id: 'da-improbidade-q09',
    temaId: 'da-improbidade',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Nos termos da Lei 8.429/1992, com a redação da Lei 14.230/2021, a nomeação do irmão da autoridade nomeante para cargo em comissão na administração pública municipal está tipificada como ato de improbidade que atenta contra os princípios da administração, exigindo-se, para a condenação, a comprovação do dolo com o fim de obter proveito ou benefício indevido para si ou para outra pessoa.',
    gabaritoCE: true,
    comentario:
      'Certo. O art. 11, XI, tipifica o nepotismo (cônjuge, companheiro ou parente até o terceiro grau; irmão é colateral de segundo grau). O § 1º exige a comprovação do fim de obter proveito ou benefício indevido, e o caput exige conduta dolosa.',
    fundamento: 'Lei 8.429/1992, art. 11, XI e § 1º, com redação da Lei 14.230/2021',
  },

  /* ---------- da-processo ---------- */
  {
    id: 'da-processo-q01',
    temaId: 'da-processo',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Salvo disposição legal específica, o prazo para interposição de recurso administrativo, segundo a Lei 9.784/1999, é de:',
    alternativas: [
      'cinco dias, contados da intimação pessoal.',
      'quinze dias, contados da publicação da decisão.',
      'dez dias, contados a partir da ciência ou divulgação oficial da decisão recorrida.',
      'trinta dias, contados do recebimento dos autos.',
      'cinco dias úteis, contados da decisão.',
    ],
    correta: 2,
    comentario:
      'O art. 59 fixa dez dias, contados da ciência ou divulgação oficial da decisão. Cinco dias é o prazo da autoridade para reconsiderar (art. 56, § 1º); cinco dias úteis, o dos demais interessados para alegações (art. 62); trinta dias, o prazo para decidir o recurso (art. 59, § 1º).',
    fundamento: 'Lei 9.784/1999, art. 59',
  },
  {
    id: 'da-processo-q02',
    temaId: 'da-processo',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as assertivas abaixo, de acordo com a Lei 9.784/1999:\n\nI. O recurso administrativo tramitará no máximo por três instâncias administrativas, salvo disposição legal diversa.\nII. Em regra, o recurso administrativo tem efeito suspensivo.\nIII. O recurso será dirigido à autoridade que proferiu a decisão, a qual, se não a reconsiderar no prazo de cinco dias, o encaminhará à autoridade superior.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas III.', 'Apenas I e III.', 'I, II e III.'],
    correta: 3,
    comentario:
      'I (art. 57) e III (art. 56, § 1º) estão corretas. A II erra: salvo disposição legal em contrário, o recurso não tem efeito suspensivo (art. 61); ele pode ser concedido havendo justo receio de prejuízo de difícil ou incerta reparação.',
    fundamento: 'Lei 9.784/1999, arts. 56, § 1º, 57 e 61',
  },
  {
    id: 'da-processo-q03',
    temaId: 'da-processo',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado: 'Nos termos da Lei 9.784/1999, é impedido de atuar em processo administrativo o servidor ou a autoridade que:',
    alternativas: [
      'tenha amizade íntima com o interessado.',
      'tenha inimizade notória com o cônjuge do interessado.',
      'pertença à mesma carreira do interessado.',
      'já tenha decidido outro processo do mesmo interessado.',
      'esteja litigando judicialmente com o interessado.',
    ],
    correta: 4,
    comentario:
      'Litigar judicial ou administrativamente com o interessado ou seu cônjuge/companheiro é impedimento (art. 18, III). Amizade íntima e inimizade notória são casos de suspeição (art. 20), que deve ser arguida. Ser da mesma carreira ou já ter decidido outro processo não estão na lei.',
    fundamento: 'Lei 9.784/1999, arts. 18 e 20',
  },
  {
    id: 'da-processo-q04',
    temaId: 'da-processo',
    formato: 'multipla',
    estilo: 'legalle',
    dificuldade: 2,
    enunciado: 'Sobre o dever de decidir previsto na Lei 9.784/1999, assinale a alternativa correta.',
    alternativas: [
      'Concluída a instrução, a Administração tem até trinta dias para decidir, salvo prorrogação por igual período expressamente motivada.',
      'A Administração pode deixar de decidir requerimentos que considere manifestamente improcedentes.',
      'O prazo para decidir é de dez dias, improrrogável.',
      'O silêncio da Administração equivale, sempre, ao deferimento do pedido.',
      'O prazo para decidir só começa a correr após o trânsito em julgado de eventual ação judicial sobre o tema.',
    ],
    correta: 0,
    comentario:
      'O art. 48 impõe o dever de emitir decisão explícita, e o art. 49 fixa até trinta dias após a instrução, prorrogáveis por igual período com motivação expressa. A lei não autoriza deixar de decidir, não fixa dez dias improrrogáveis e não atribui ao silêncio efeito de deferimento.',
    fundamento: 'Lei 9.784/1999, arts. 48 e 49',
  },
  {
    id: 'da-processo-q05',
    temaId: 'da-processo',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado:
      'No caso A, um interessado punido com multa recorre, e a autoridade competente para julgar o recurso conclui que a sanção adequada seria mais grave. No caso B, outro interessado, já punido em processo encerrado, pede revisão com base em fato novo. Segundo a Lei 9.784/1999:',
    alternativas: [
      'no caso A é vedado agravar a sanção; no caso B, o agravamento é possível se o fato novo o justificar.',
      'no caso A o agravamento é possível, desde que o recorrente seja cientificado para formular alegações antes da decisão; no caso B, a revisão não pode resultar em agravamento.',
      'em nenhum dos casos pode haver agravamento da sanção.',
      'nos dois casos o agravamento é livre, sem necessidade de nova manifestação do interessado.',
      'o agravamento só é possível no caso B, pois a revisão pode ser pedida a qualquer tempo.',
    ],
    correta: 1,
    comentario:
      'No recurso, o órgão pode modificar a decisão, inclusive para pior, mas deve cientificar o recorrente para que se manifeste antes (art. 64, parágrafo único). Na revisão de processo sancionador, cabível a qualquer tempo diante de fatos novos, é vedado o agravamento (art. 65, parágrafo único).',
    fundamento: 'Lei 9.784/1999, arts. 64, parágrafo único, e 65, parágrafo único',
  },
  {
    id: 'da-processo-q06',
    temaId: 'da-processo',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado: 'Conforme a Lei 9.784/1999, a avocação temporária de competência:',
    alternativas: [
      'é livre, independentemente de justificativa.',
      'pode recair sobre competência de órgão não subordinado hierarquicamente.',
      'é permitida em caráter excepcional e por motivos relevantes devidamente justificados, em relação a órgão hierarquicamente inferior.',
      'é vedada em qualquer hipótese.',
      'depende de prévia autorização judicial.',
    ],
    correta: 2,
    comentario:
      'O art. 15 admite a avocação temporária de competência de órgão hierarquicamente inferior, em caráter excepcional e por motivos relevantes devidamente justificados. Diferentemente da delegação, que pode ser feita a órgão não subordinado (art. 12), a avocação pressupõe hierarquia.',
    fundamento: 'Lei 9.784/1999, arts. 12 e 15',
  },
  {
    id: 'da-processo-q07',
    temaId: 'da-processo',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado: 'No processo administrativo federal, o interessado deve, obrigatoriamente, ser assistido por advogado, sob pena de nulidade.',
    gabaritoCE: false,
    comentario:
      'Errado. A assistência por advogado é facultativa, salvo quando a lei a tornar obrigatória (Lei 9.784, art. 3º, IV). No processo disciplinar, a SV 5 do STF afirma que a falta de defesa técnica por advogado não ofende a Constituição.',
    fundamento: 'Lei 9.784/1999, art. 3º, IV; STF, Súmula Vinculante 5',
  },
  {
    id: 'da-processo-q08',
    temaId: 'da-processo',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'Segundo a Lei 9.784/1999, pode ser arguida a suspeição de autoridade que tenha amizade íntima ou inimizade notória com algum dos interessados, e o indeferimento dessa alegação pode ser objeto de recurso, sem efeito suspensivo.',
    gabaritoCE: true,
    comentario:
      'Certo. Amizade íntima e inimizade notória são hipóteses de suspeição (art. 20), alcançando também cônjuges, companheiros, parentes e afins até o terceiro grau. O indeferimento da alegação admite recurso, sem efeito suspensivo (art. 21).',
    fundamento: 'Lei 9.784/1999, arts. 20 e 21',
  },
  {
    id: 'da-processo-q09',
    temaId: 'da-processo',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'Como o recurso administrativo não tem, em regra, efeito suspensivo, sua admissibilidade pode ser condicionada ao depósito prévio do valor da multa aplicada, desde que isso esteja previsto em ato normativo do órgão.',
    gabaritoCE: false,
    comentario:
      'Errado. A SV 21 do STF declara inconstitucional exigir depósito ou arrolamento prévios de dinheiro ou bens para admitir recurso administrativo — nem mesmo a lei pode fazer essa exigência, muito menos ato normativo do órgão. A ausência de efeito suspensivo (art. 61) não muda isso, e a Lei 9.784 diz que a interposição do recurso independe de caução, salvo exigência legal (art. 56, § 2º).',
    fundamento: 'STF, Súmula Vinculante 21; Lei 9.784/1999, art. 56, § 2º',
  },
];
