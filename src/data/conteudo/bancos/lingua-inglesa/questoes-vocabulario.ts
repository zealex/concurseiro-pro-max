import type { QuestaoTreino } from '../../../types';

/** Questões de vocabulário em contexto: falsos cognatos, conectivos, prefixos e phrasal verbs. */
export const QUESTOES_VOCABULARIO: QuestaoTreino[] = [
  /* ---------- Ligadas aos textos-base ---------- */
  {
    id: 'ing-vocabulario-q01',
    temaId: 'ing-vocabulario',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    textoBaseId: 'tx-ing-01',
    enunciado:
      'In the sentence “Workers may forget, feel that they lack time, or underestimate the risk”, the verb “lack” means',
    alternativas: ['excedem.', 'não têm, carecem de.', 'desperdiçam.', 'controlam.', 'contam.'],
    correta: 1,
    comentario:
      '“Lack” significa não ter, carecer de: os profissionais sentem que não têm tempo. Os demais verbos não cabem no contexto, que enumera motivos para a baixa adesão (esquecer, falta de tempo, subestimar o risco).',
  },
  {
    id: 'ing-vocabulario-q02',
    temaId: 'ing-vocabulario',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    textoBaseId: 'tx-ing-01',
    enunciado:
      'In “Nevertheless, they are not appropriate in every case”, the connector “Nevertheless” could be replaced, without change in meaning, by',
    alternativas: ['Therefore.', 'Moreover.', 'For instance.', 'However.', 'Because of this.'],
    correta: 3,
    comentario:
      '“Nevertheless” marca contraste (apesar disso): as soluções alcoólicas são recomendadas, porém não servem para todos os casos. “However” mantém o contraste. “Therefore” e “Because of this” indicam conclusão/consequência; “Moreover”, adição; “For instance”, exemplo.',
  },
  {
    id: 'ing-vocabulario-q03',
    temaId: 'ing-vocabulario',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    textoBaseId: 'tx-ing-01',
    enunciado:
      'Em “maternal deaths in that ward fell sharply”, o advérbio “sharply” indica que a queda das mortes maternas foi discreta e gradual.',
    gabaritoCE: false,
    comentario:
      'Errado. “Sharply” (de “sharp”, afiado, abrupto) indica queda acentuada, abrupta. O sentido de “discreta e gradual” seria expresso por “slightly” ou “gradually”.',
  },
  {
    id: 'ing-vocabulario-q04',
    temaId: 'ing-vocabulario',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    textoBaseId: 'tx-ing-02',
    enunciado:
      'In “A gap in the chain does not necessarily mean that the evidence was tampered with”, the expression “tampered with” is closest in meaning to',
    alternativas: ['collected.', 'sealed.', 'improperly altered.', 'analyzed.', 'stored.'],
    correta: 2,
    comentario:
      '“Tamper with” significa mexer indevidamente, adulterar. O contexto confirma: a lacuna permite à defesa questionar a “integrity” da prova. Coletar, lacrar, analisar e armazenar são etapas legítimas da cadeia, citadas no próprio texto.',
  },
  {
    id: 'ing-vocabulario-q05',
    temaId: 'ing-vocabulario',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-ing-02',
    enunciado:
      'No trecho “the court may decide to give the evidence less weight”, a palavra “weight” foi empregada em sentido figurado, equivalente a valor ou importância atribuída à prova.',
    gabaritoCE: true,
    comentario:
      'Certo. “Weight” (peso) está em sentido figurado: o tribunal pode dar menos valor probatório à evidência. O sentido literal (massa física) não cabe numa decisão judicial sobre a prova.',
  },
  {
    id: 'ing-vocabulario-q06',
    temaId: 'ing-vocabulario',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    textoBaseId: 'tx-ing-03',
    enunciado:
      'In the Methods section, the statement that the participants “were followed for 24 months” means that they',
    alternativas: [
      'were monitored over a 24-month period.',
      'obeyed a strict protocol for 24 months.',
      'were treated for 24 months.',
      'were selected 24 months before the study began.',
      'worked night shifts for 24 consecutive months.',
    ],
    correta: 0,
    comentario:
      'Em epidemiologia, “follow” / “follow-up” é o seguimento: os participantes foram acompanhados durante 24 meses para registrar os desfechos. B toma “follow” no sentido de obedecer; C, D e E acrescentam informações que não estão no texto.',
  },
  {
    id: 'ing-vocabulario-q07',
    temaId: 'ing-vocabulario',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    textoBaseId: 'tx-ing-04',
    enunciado:
      'In “even when their choices seem unwise to the doctor”, “unwise” means “not wise”: “un-” is a negative prefix. In which of the words below does “un-” also mean “not”?',
    alternativas: ['union.', 'undergo.', 'uncle.', 'understand.', 'unnecessary.'],
    correta: 4,
    comentario:
      '“Unnecessary” = not necessary: “un-” nega o adjetivo, como em “unwise” (= not wise). Nos distratores, o “un” inicial não é prefixo negativo: “union” vem do latim “unus” (um); em “undergo” e “understand”, a parte inicial é “under”; e “uncle” (tio) é palavra simples, sem prefixo. Teste: retire o “un-” e veja se sobra uma palavra cujo sentido é negado.',
  },
  {
    id: 'ing-vocabulario-q08',
    temaId: 'ing-vocabulario',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-ing-04',
    enunciado:
      'Em “competent adults have the right to decide what is done to their own bodies”, o adjetivo “competent” qualifica adultos que têm capacidade de tomar decisões sobre si mesmos — noção que o texto detalha adiante como “decision-making capacity” —, e não adultos profissionalmente qualificados.',
    gabaritoCE: true,
    comentario:
      'Certo. O texto trata do direito do paciente de decidir sobre o próprio corpo e, no 2º parágrafo, explica o requisito: “decision-making capacity, that is, the ability to understand the relevant information, weigh it and communicate a choice”. “Competent” tem aqui o sentido ético-jurídico de apto a decidir; o sentido de “competente no trabalho” não cabe, pois nada no texto fala de desempenho profissional.',
  },
  {
    id: 'ing-vocabulario-q09',
    temaId: 'ing-vocabulario',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    textoBaseId: 'tx-ing-05',
    enunciado: 'In the text, “algor mortis”, “livor mortis” and “rigor mortis” refer, respectively, to the',
    alternativas: [
      'cooling of the body, discoloration caused by settling blood, stiffening of the muscles.',
      'stiffening of the muscles, cooling of the body, discoloration caused by settling blood.',
      'discoloration caused by settling blood, stiffening of the muscles, cooling of the body.',
      'cooling of the body, stiffening of the muscles, decomposition.',
      'decomposition, discoloration caused by settling blood, cooling of the body.',
    ],
    correta: 0,
    comentario:
      'O texto define cada termo por aposto: “Algor mortis, the cooling of the body”; “Livor mortis, the purplish discoloration caused by the settling of blood”; “Rigor mortis, the stiffening of the muscles”. As demais alternativas trocam a ordem ou incluem a decomposição, que não é nenhum dos três.',
  },
  {
    id: 'ing-vocabulario-q10',
    temaId: 'ing-vocabulario',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-ing-06',
    enunciado:
      'Em “a negative result useful for ruling the disease out”, o phrasal verb “rule out” equivale a descartar a doença.',
    gabaritoCE: true,
    comentario:
      'Certo. “Rule out” = descartar, excluir uma hipótese. O texto opõe essa expressão a “rule in” (confirmar): o teste muito sensível ajuda a descartar; o muito específico ajuda a confirmar.',
  },

  /* ---------- Sem texto-base ---------- */
  {
    id: 'ing-vocabulario-q11',
    temaId: 'ing-vocabulario',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado: 'Assinale a tradução correta de: “The patient actually had a fracture, not a sprain.”',
    alternativas: [
      'Atualmente, o paciente tinha uma fratura, não uma entorse.',
      'Na verdade, o paciente tinha uma fratura, não uma entorse.',
      'O paciente tinha uma fratura atual, não uma entorse antiga.',
      'O paciente fingia ter uma fratura, não uma entorse.',
      'O paciente ainda tinha uma fratura, não uma entorse.',
    ],
    correta: 1,
    comentario:
      '“Actually” é falso cognato: significa “na verdade, de fato”. “Atualmente” seria “currently” ou “nowadays” (A e C). D confunde com “pretend” (fingir); E traduz como se fosse “still”.',
  },
  {
    id: 'ing-vocabulario-q12',
    temaId: 'ing-vocabulario',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado:
      'Which of the words below is a false cognate (false friend) for a Brazilian reader of a medical report?',
    alternativas: ['hospital', 'diagnosis', 'symptom', 'vaccine', 'sensible'],
    correta: 4,
    comentario:
      '“Sensible” significa sensato, razoável (“a sensible decision” = uma decisão sensata), e não “sensível”, que em inglês é “sensitive” (“a highly sensitive test”). As demais são cognatos verdadeiros: hospital, diagnóstico, sintoma e vacina.',
  },
  {
    id: 'ing-vocabulario-q13',
    temaId: 'ing-vocabulario',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Em inglês, “pretend” significa “pretender”, no sentido de ter a intenção de; para dizer “fingir”, usa-se o verbo “intend”.',
    gabaritoCE: false,
    comentario:
      'Errado. É o inverso: “pretend” = fingir (“He pretended to be asleep”); “intend” = pretender, ter a intenção (“We intend to publish the results”). Falso cognato clássico.',
  },
  {
    id: 'ing-vocabulario-q14',
    temaId: 'ing-vocabulario',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    enunciado:
      'Choose the connector that best completes the sentence: “The new drug reduced mortality; ______, it caused severe nausea in some patients.”',
    alternativas: ['therefore', 'however', 'moreover', 'thus', 'for instance'],
    correta: 1,
    comentario:
      'A segunda oração traz um efeito negativo que contrasta com o benefício da primeira: pede conectivo de contraste, “however”. “Therefore” e “thus” indicam conclusão; “moreover”, adição de argumento no mesmo sentido; “for instance”, exemplo.',
  },
  {
    id: 'ing-vocabulario-q15',
    temaId: 'ing-vocabulario',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'No relato clínico “On examination, the patient showed exquisite tenderness in the right lower quadrant”, o adjetivo “exquisite” equivale a “esquisita, estranha”.',
    gabaritoCE: false,
    comentario:
      'Errado. “Exquisite” é falso cognato. No uso geral, significa requintado, primoroso; no jargão clínico, “exquisite tenderness/pain” é dor à palpação intensa, aguda e bem localizada. “Esquisito” seria “strange” ou “odd”.',
  },
];
