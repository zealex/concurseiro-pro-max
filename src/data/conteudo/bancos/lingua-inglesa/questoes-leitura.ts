import type { QuestaoTreino } from '../../../types';

/** Questões de leitura e interpretação, todas ligadas aos textos-base. */
export const QUESTOES_LEITURA: QuestaoTreino[] = [
  /* ---------- tx-ing-01 · Clean hands, safer care ---------- */
  {
    id: 'ing-leitura-q01',
    temaId: 'ing-leitura',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 1,
    textoBaseId: 'tx-ing-01',
    enunciado: 'The main purpose of the text is to',
    alternativas: [
      'describe the life and career of the physician Ignaz Semmelweis.',
      'argue that alcohol-based hand rubs should replace soap and water in all situations.',
      'present hand hygiene as a key measure against healthcare-associated infections and discuss how it is put into practice.',
      'explain why the germ theory of disease was rejected in the nineteenth century.',
      'compare infection rates in hospitals of different countries.',
    ],
    correta: 2,
    comentario:
      'O texto abre com a tese (hand hygiene é “one of the simplest and most effective measures”), usa Semmelweis como antecedente histórico e trata das práticas atuais e da adesão. A reduz o texto ao exemplo histórico; B contraria o 3º parágrafo (“not appropriate in every case”); D e E não são tratados.',
  },
  {
    id: 'ing-leitura-q02',
    temaId: 'ing-leitura',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    textoBaseId: 'tx-ing-01',
    enunciado:
      'De acordo com o texto, Semmelweis observou que as mulheres atendidas por parteiras morriam de febre puerperal com frequência muito maior do que as atendidas por médicos e estudantes de medicina.',
    gabaritoCE: false,
    comentario:
      'Errado. O item inverte os grupos. O texto diz que as mulheres da enfermaria “attended by doctors and medical students died of puerperal fever far more often than those attended by midwives”. As parteiras (midwives) eram o grupo com menos mortes.',
  },
  {
    id: 'ing-leitura-q03',
    temaId: 'ing-leitura',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-ing-01',
    enunciado:
      'Depreende-se do texto que a lavagem das mãos com água e sabão continua indicada em determinadas situações, como quando as mãos estão visivelmente sujas ou quando há suspeita de infecção por Clostridioides difficile.',
    gabaritoCE: true,
    comentario:
      'Certo. O 3º parágrafo diz que, “when hands are visibly soiled, they should be washed with soap and water”, e que, porque algumas bactérias, como o C. difficile, “form spores that alcohol does not reliably kill”, “washing is also preferred when this pathogen is suspected”.',
  },
  {
    id: 'ing-leitura-q04',
    temaId: 'ing-leitura',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    textoBaseId: 'tx-ing-01',
    enunciado: 'According to the last paragraph, successful hand hygiene programs',
    alternativas: [
      'depend mainly on punishing workers who do not comply.',
      'usually combine education, easy access to hand rub at the point of care and feedback on performance.',
      'have already solved the problem of compliance in most hospitals.',
      'show that health workers rarely underestimate the risk of infection.',
      'replace education with the installation of sinks in every room.',
    ],
    correta: 1,
    comentario:
      'O trecho final afirma: “successful programs usually combine education, easy access to hand rub at the point of care, and regular feedback on performance”. A e E trazem medidas não citadas; C contradiz “Compliance remains the main challenge”; D contradiz “or underestimate the risk”.',
  },
  {
    id: 'ing-leitura-q05',
    temaId: 'ing-leitura',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    textoBaseId: 'tx-ing-01',
    enunciado:
      'No primeiro parágrafo, o pronome “which”, em “which can carry microorganisms from one patient to another”, retoma “health workers”.',
    gabaritoCE: false,
    comentario:
      'Errado. “Which” não se refere a pessoas (para pessoas, usa-se “who”). O pronome retoma “the hands (of health workers)”: são as mãos que carregam microrganismos de um paciente a outro ou das superfícies para o paciente.',
  },

  /* ---------- tx-ing-02 · The chain of custody ---------- */
  {
    id: 'ing-leitura-q06',
    temaId: 'ing-leitura',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    textoBaseId: 'tx-ing-02',
    enunciado: 'According to the text, the purpose of the chain of custody is to',
    alternativas: [
      'demonstrate that the item analyzed is the same one collected at the scene and that it has not been altered.',
      'speed up the analysis of evidence in the forensic laboratory.',
      'prevent the defense from having access to the evidence.',
      'replace the laboratory examination with written records.',
      'identify which professional is responsible for the crime.',
    ],
    correta: 0,
    comentario:
      'O 1º parágrafo diz: “Its purpose is to demonstrate that the item examined in the laboratory is the same item collected at the scene and that it has not been altered, replaced or contaminated”. B, D e E não aparecem no texto; C não tem apoio no texto, que só menciona a defesa questionando a integridade da prova quando há lacuna na cadeia.',
  },
  {
    id: 'ing-leitura-q07',
    temaId: 'ing-leitura',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-ing-02',
    enunciado:
      'Segundo o texto, uma lacuna no registro da cadeia de custódia comprova que a evidência foi adulterada e obriga o tribunal a excluí-la do processo.',
    gabaritoCE: false,
    comentario:
      'Errado. O texto diz o contrário: “A gap in the chain does not necessarily mean that the evidence was tampered with”. A lacuna abre espaço para a defesa questionar, e o tribunal “may” (pode) dar menos peso à prova ou excluí-la — possibilidade, não obrigação.',
  },
  {
    id: 'ing-leitura-q08',
    temaId: 'ing-leitura',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    textoBaseId: 'tx-ing-02',
    enunciado:
      'O texto informa que amostras biológicas costumam ser acondicionadas em papel, e não em plástico, porque a umidade retida no plástico pode favorecer o crescimento de bactérias e fungos e degradar o material.',
    gabaritoCE: true,
    comentario:
      'Certo. Paráfrase fiel de “Biological samples […] are usually packaged in paper rather than plastic, since moisture trapped in plastic may encourage the growth of bacteria and fungi and degrade the material”. “Since”, aqui, é causal (já que).',
  },

  /* ---------- tx-ing-03 · Hypothetical abstract ---------- */
  {
    id: 'ing-leitura-q09',
    temaId: 'ing-leitura',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    textoBaseId: 'tx-ing-03',
    enunciado:
      'In the abstract, the section that describes the participants, the length of follow-up and how exposure was defined is',
    alternativas: ['Background.', 'Conclusions.', 'Results.', 'Methods.', 'Discussion.'],
    correta: 3,
    comentario:
      'É em Methods que estão a população (2,400 nurses and nursing assistants), o seguimento (24 months) e a definição de exposição (at least four night shifts per month). Background justifica o estudo; Results traz os números; Conclusions interpreta; Discussion é seção do artigo completo, não aparece neste abstract.',
  },
  {
    id: 'ing-leitura-q10',
    temaId: 'ing-leitura',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    textoBaseId: 'tx-ing-03',
    enunciado:
      'Os autores concluem que o trabalho noturno causa aumento das lesões ocupacionais, já que o intervalo de confiança do risco ajustado não inclui o valor 1.',
    gabaritoCE: false,
    comentario:
      'Errado. O intervalo (1.15 to 1.83) indica associação estatisticamente significativa, mas as conclusões dizem expressamente: “Because this was an observational study, causality cannot be established”. O item troca “was associated with” por relação de causa.',
  },
  {
    id: 'ing-leitura-q11',
    temaId: 'ing-leitura',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    textoBaseId: 'tx-ing-03',
    enunciado: 'Which of the following statements is supported by the Results section?',
    alternativas: [
      'Night-shift workers had significantly more falls than day-shift workers.',
      'Day-shift workers had a higher risk of injury than night-shift workers.',
      'Fewer than 300 injuries were recorded during follow-up.',
      'The association between night shifts and injuries disappeared after adjustment.',
      'Needlestick injuries accounted for the largest proportion of events in both groups.',
    ],
    correta: 4,
    comentario:
      'O texto afirma: “Needlestick injuries accounted for the largest proportion of events in both groups”. A contraria “No significant association was found between night-shift work and falls”; B inverte os grupos; C erra o total (312); D contraria o hazard ratio ajustado de 1.45, com intervalo acima de 1.',
  },
  {
    id: 'ing-leitura-q12',
    temaId: 'ing-leitura',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-ing-03',
    enunciado:
      'No resumo, os autores admitem que fatores não medidos, como a qualidade do sono fora do trabalho, podem ter influenciado os resultados.',
    gabaritoCE: true,
    comentario:
      'Certo. As conclusões dizem que “unmeasured factors, such as sleep quality outside work, might have influenced the results”. “Might have” + particípio expressa possibilidade no passado, que o item traduziu corretamente por “podem ter influenciado”.',
  },

  /* ---------- tx-ing-04 · Informed consent ---------- */
  {
    id: 'ing-leitura-q13',
    temaId: 'ing-leitura',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    textoBaseId: 'tx-ing-04',
    enunciado:
      'According to the text, all the alternatives below are elements of valid consent, EXCEPT:',
    alternativas: [
      'Decision-making capacity.',
      'Information about benefits, material risks and reasonable alternatives.',
      'A decision free from coercion or undue pressure.',
      'A written signature witnessed by a relative.',
      'Information about the option of no treatment.',
    ],
    correta: 3,
    comentario:
      'O texto cita capacidade (A), informação adequada, inclusive sobre a opção de não tratar (B e E), e voluntariedade (C). A assinatura com testemunha não é requisito no texto, que afirma: “Consent is therefore not a signature on a form but a process of communication”.',
  },
  {
    id: 'ing-leitura-q14',
    temaId: 'ing-leitura',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    textoBaseId: 'tx-ing-04',
    enunciado:
      'Conforme o texto, a capacidade de decisão é específica para cada decisão e pode oscilar, razão pela qual deve ser reavaliada ao longo do tempo.',
    gabaritoCE: true,
    comentario:
      'Certo. O 3º parágrafo afirma: “Capacity is decision-specific” (o paciente pode não decidir sobre cirurgia complexa e ainda assim recusar um exame de sangue) e “it may fluctuate, as in delirium, so it should be reassessed over time”.',
  },

  /* ---------- tx-ing-05 · Estimating the time since death ---------- */
  {
    id: 'ing-leitura-q15',
    temaId: 'ing-leitura',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 2,
    textoBaseId: 'tx-ing-05',
    enunciado: 'According to the text, the estimation of the postmortem interval',
    alternativas: [
      'can be determined to the minute by body temperature alone.',
      'depends only on the cause of death.',
      'should combine several methods and be expressed as a range.',
      'relies mainly on forensic entomology in the first hours after death.',
      'is not affected by clothing or ambient temperature.',
    ],
    correta: 2,
    comentario:
      'O texto diz: “Experienced examiners combine several methods and express the result as a range rather than an exact time”. A contraria a advertência sobre o laudo com “3:15 a.m.”; B e E contrariam a lista de variáveis do 1º parágrafo; D erra a fase: a entomologia é útil “in later stages”.',
  },

  /* ---------- tx-ing-06 · Screening ---------- */
  {
    id: 'ing-leitura-q16',
    temaId: 'ing-leitura',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    textoBaseId: 'tx-ing-06',
    enunciado: 'Based on the hypothetical example in the text, it is correct to conclude that',
    alternativas: [
      'about 95% of the people who tested positive actually had the disease.',
      'the test failed to detect 495 people who had the disease.',
      'the negative predictive value falls when prevalence is low.',
      'the test should be abandoned because its specificity is too low.',
      'most positive results were false, because the disease was uncommon in the population tested.',
    ],
    correta: 4,
    comentario:
      'Com 95 verdadeiros positivos e 495 falsos positivos, só “95 of the 590 positive results, about 16%” estariam certos: “most of the positive results would be wrong”, porque só 100 de 10,000 pessoas tinham a doença. A confunde sensibilidade (95%) com valor preditivo positivo (95 ÷ 590 ≈ 16%); B: os 495 são falsos positivos, não casos perdidos (foram 5); C inverte o texto (“the negative predictive value rises”); D não é dito — o texto recomenda confirmação, não abandono.',
  },
];
