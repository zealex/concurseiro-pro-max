import type { ResumoTema } from '../../../types';

const CAMBRIDGE = 'Cambridge Dictionary (dicionário on-line de inglês e inglês-português) — https://dictionary.cambridge.org';
const MERRIAM = 'Merriam-Webster Dictionary — https://www.merriam-webster.com';
const OXFORD = 'Oxford Learner’s Dictionaries — https://www.oxfordlearnersdictionaries.com';
const SWAN = 'SWAN, Michael. Practical English Usage. Oxford University Press (obra de referência).';
const MURPHY = 'MURPHY, Raymond. English Grammar in Use. Cambridge University Press (obra de referência).';
const NLM = 'U.S. National Library of Medicine — Structured Abstracts (MEDLINE/PubMed) — https://www.nlm.nih.gov/bsd/policy/structured_abstracts.html';
const HOJE = '2026-11-20';

export const RESUMOS: ResumoTema[] = [
  /* ---------- Leitura ---------- */
  {
    temaId: 'ing-leitura',
    titulo: 'Leitura de textos técnicos em inglês',
    resumo:
      'A banca entrega um texto de saúde, ciência forense ou epidemiologia e pergunta ideia principal, detalhes, inferências e a que palavra um pronome se refere. Não é prova de tradução: é prova de localizar o trecho certo e não extrapolar.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Na prova de inglês instrumental você **não precisa entender todas as palavras**. Precisa entender o suficiente para localizar a informação pedida e comparar com a alternativa. Para isso, use duas leituras com objetivos diferentes.\n\n' +
          '**Skimming** é a leitura rápida, de “passar os olhos”: título, primeira frase de cada parágrafo (a **topic sentence**), último parágrafo e palavras que se repetem. Serve para responder “*The text is mainly about…*” e “*The main purpose of the text is…*”. **Scanning** é a busca dirigida: você já sabe o que procura (um número, um nome, uma data, uma palavra do enunciado) e corre o texto até achá-lo. Serve para as questões de detalhe, como “*According to the text, …*”.\n\n' +
          'Ordem que funciona: leia **as questões primeiro**, faça o skimming, depois vá a cada questão com scanning e releia **com atenção só o trecho** que a resolve. Cognatos (*infection, prevention, evidence, analysis*) são seus aliados; os falsos cognatos são a armadilha (veja o tema de vocabulário).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'O que o comando pede',
          colunas: ['Comando típico', 'O que pede', 'Como resolver'],
          linhas: [
            ['The text is mainly about / The main idea is', 'Ideia principal', 'Skimming; descarte o que vale só para um parágrafo (redução)'],
            ['According to the text / The text states', 'Detalhe explícito', 'Scanning; a resposta está escrita, às vezes com sinônimos (paráfrase)'],
            ['It can be inferred / The text implies / suggests', 'Inferência', 'Conclusão que decorre do texto, sem informação externa'],
            ['The word “it/they/which/one” refers to', 'Referência', 'Volte à frase anterior e teste a substituição'],
            ['The author’s attitude / tone', 'Posição do autor', 'Observe adjetivos, advérbios e modais (unfortunately, may, must)'],
            ['Which is NOT mentioned / EXCEPT', 'Exceção', 'Marque no texto cada alternativa que aparece; sobra a ausente'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Referência pronominal.** *Who* retoma pessoa; *which* retoma coisa, animal ou a ideia de uma oração inteira; *it/its* retomam singular; *they/them/their* retomam plural; *one* substitui um substantivo contável já citado (“*a body in a river cools faster than **one** in a warm room*” = *a body*); *the former* = o primeiro mencionado, *the latter* = o último; *such* e *this/these* retomam algo já dito (“*such infections*” = essas infecções).\n\n' +
          '**Texto científico.** O artigo original segue o formato **IMRaD**: *Introduction, Methods, Results and Discussion*. O **abstract estruturado** costuma vir com rótulos: *Background/Objective* (por que e para que), *Methods* (desenho, população, exposição, desfecho, ajuste), *Results* (números: *hazard ratio*, *odds ratio*, *95% confidence interval*, *p value*) e *Conclusions* (interpretação, limitações e implicações).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Linguagem cautelosa (hedging) × afirmação forte',
          colunas: ['O texto diz', 'Significa', 'A alternativa errada transforma em'],
          linhas: [
            ['is associated with', 'há associação estatística', 'causes / leads to'],
            ['suggests / indicates', 'sugere, aponta', 'proves / demonstrates'],
            ['may / might / could', 'possibilidade', 'will / always'],
            ['some / many / most', 'parte, muitos, a maioria', 'all / every'],
            ['does not necessarily mean', 'não implica obrigatoriamente', 'means / proves'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — Cebraspe, inferência × extrapolação',
        enunciado:
          'Trecho: “Night-shift work was associated with a moderately higher risk of occupational injuries. Because this was an observational study, causality cannot be established.” Item: “Os autores concluem que o trabalho noturno causa lesões ocupacionais.”',
        resolucao:
          'Errado. *Associated with* indica associação, e o próprio texto diz que a causalidade *cannot be established*. O item troca associação por causa — extrapolação clássica. Um item correto seria: “Os autores reconhecem que o desenho do estudo não permite afirmar relação causal.”',
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — referência pronominal',
        enunciado:
          'Trecho: “Many of them are transmitted by the hands of health workers, which can carry microorganisms…” A que se refere *which*?',
        resolucao:
          '*Which* não retoma pessoas, logo não pode ser *health workers*. Retoma *the hands (of health workers)*: são as mãos que carregam os microrganismos. Teste a substituição: “the hands can carry microorganisms” faz sentido.',
      },
      {
        tipo: 'atencao',
        texto:
          'No Cebraspe, o item costuma estar **quase** certo: troca um quantificador (*some* → todos), um modal (*may* → certeza), inverte os grupos comparados (médicos × parteiras) ou transforma associação em causa. Leia o item em português, ache o trecho em inglês e compare palavra por palavra. E **não responda com seu conhecimento médico**: vale o que o texto diz, mesmo que você saiba mais sobre o assunto.',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          'Leia as questões e marque o que cada uma pede (ideia geral, detalhe, inferência, referência).',
          'Faça o skimming: título, primeira frase de cada parágrafo e conclusão.',
          'Para cada questão, faça o scanning até o trecho e leia-o com atenção, incluindo a frase anterior e a seguinte.',
          'Desconfie de alternativas com palavras absolutas (*always, never, only, all, prove*).',
          'Na dúvida entre duas, fique com a que está **mais próxima do texto**, não a mais “bonita”.',
        ],
      },
    ],
    fontes: [NLM, CAMBRIDGE, SWAN],
    atualizadoEm: HOJE,
  },

  /* ---------- Vocabulário ---------- */
  {
    temaId: 'ing-vocabulario',
    titulo: 'Vocabulário: cognatos, falsos cognatos e conectivos',
    resumo:
      'A banca cobra o sentido de palavras no contexto, sobretudo falsos cognatos comuns em saúde e conectivos que mudam a lógica do texto (contraste, conclusão, adição, concessão). Também aparecem prefixos, sufixos e phrasal verbs.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Cognatos** são palavras parecidas na forma e no sentido: *infection* (infecção), *diagnosis* (diagnóstico), *evidence* (evidência, prova), *mortality* (mortalidade). O vocabulário médico vem do latim e do grego, e por isso o médico brasileiro lê muito texto técnico sem dicionário.\n\n' +
          '**Falsos cognatos** (*false friends*) parecem uma palavra do português, mas significam outra coisa. São a pegadinha preferida das bancas, porque o candidato traduz no automático. A regra é simples: **se a tradução literal deixa a frase estranha, desconfie**.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Falsos cognatos frequentes em saúde',
          colunas: ['Palavra', 'Significa', 'Não significa (use)'],
          linhas: [
            ['actually', 'na verdade, de fato', 'atualmente (currently, nowadays)'],
            ['pretend', 'fingir', 'pretender (intend, plan)'],
            ['injury', 'lesão, ferimento', 'injúria no sentido de ofensa (insult)'],
            ['sensible', 'sensato', 'sensível (sensitive)'],
            ['exquisite', 'requintado; em clínica: intenso, agudo (exquisite tenderness)', 'esquisito (strange, odd)'],
            ['prescription', 'receita médica', 'prescrição jurídica (statute of limitations)'],
            ['eventually', 'por fim, no final', 'eventualmente (occasionally)'],
            ['physician', 'médico (no inglês britânico, sobretudo o clínico, em oposição a surgeon)', 'físico, o cientista (physicist); física = physics'],
            ['assist', 'ajudar, auxiliar', 'assistir a (watch; attend)'],
            ['lecture', 'palestra, aula expositiva', 'leitura (reading)'],
            ['casualty', 'vítima (ferido ou morto)', 'casualidade (chance, coincidence)'],
            ['compliance', 'adesão (ao tratamento, à higiene das mãos), cumprimento de norma; em fisiologia, complacência (lung compliance)', 'complacência no sentido de indulgência, tolerância (leniency)'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Conectivos que a banca troca entre si',
          colunas: ['Relação', 'Conectivos', 'Exemplo'],
          linhas: [
            ['Contraste', 'however, nevertheless, yet, but, whereas, while', 'PPV falls, whereas NPV rises.'],
            ['Concessão', 'although, even though (+ oração); despite, in spite of (+ nome ou -ing)', 'Despite the treatment, the fever persisted.'],
            ['Conclusão / consequência', 'thus, therefore, hence, consequently, so', 'Thus, programs combine education and feedback.'],
            ['Adição', 'moreover, furthermore, in addition, besides', 'Moreover, capacity may fluctuate.'],
            ['Causa', 'because, since, as (+ oração); because of, due to (+ nome)', 'Since moisture degrades samples, use paper.'],
            ['Exemplo / explicação', 'for instance, such as, e.g. (por exemplo); i.e., that is (isto é)', 'Spore-forming bacteria, such as C. difficile…'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Prefixos e sufixos** permitem deduzir palavras novas. Negação: *un-* (*unwise, unnecessary*), *in-/im-/ir-/il-* (*inadequate, impossible, irreversible, illegal*), *dis-* (*discomfort, disability*), *non-* (*non-invasive*). Grau: *over-* (excesso: *overdose*), *under-* (falta: *underestimate*), *hyper-/hypo-*. Posição e tempo: *pre-*, *post-* (*postmortem*), *re-* (de novo: *reseal, reassess*), *mis-* (errado: *misdiagnosis*). Sufixos: *-less* (sem: *painless, harmless*), *-ful* (com: *harmful*), *-ness* e *-ity* (substantivo: *alertness, capacity*), *-ly* (advérbio: *sharply*), *-able/-ible* (que pode: *treatable*).\n\n' +
          '**Phrasal verbs** comuns em texto técnico: *carry out* (realizar), *rule out* (descartar), *rule in* (confirmar), *find out* (descobrir), *point out* (apontar), *follow up* (acompanhar), *turn out* (revelar-se), *set up* (montar, instituir), *give up* (desistir), *tamper with* (adulterar), *account for* (responder por, representar uma proporção).',
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — falso cognato em contexto',
        enunciado:
          '“The patient actually had a fracture, not a sprain.” Tradução correta?',
        resolucao:
          '“**Na verdade**, o paciente tinha uma fratura, não uma entorse.” *Actually* corrige uma ideia anterior (achava-se que era entorse). “Atualmente” seria *currently* ou *nowadays* e não combina com o contraste *not a sprain*.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — substituição de conectivo',
        enunciado:
          '“Alcohol-based rubs are recommended for most situations. Nevertheless, they are not appropriate in every case.” Qual conectivo substitui *Nevertheless* sem mudar o sentido: *Therefore*, *Moreover* ou *However*?',
        resolucao:
          '*However*. *Nevertheless* marca contraste (apesar disso). *Therefore* indicaria conclusão e *Moreover*, adição — ambos mudariam a lógica da frase.',
      },
      {
        tipo: 'atencao',
        texto:
          'Contexto manda. *Attend* pode ser “comparecer” (*attend a lecture*) ou “prestar assistência” (*a ward attended by midwives*); *drug* é “medicamento” ou “droga ilícita”; *exquisite pain* é dor **intensa**, não “esquisita”. Em questão de sinônimo, **substitua a alternativa na frase** e veja se o sentido se mantém. E cuidado com *since*: pode ser causa (“já que”) ou tempo (“desde”).',
      },
    ],
    fontes: [CAMBRIDGE, MERRIAM, OXFORD],
    atualizadoEm: HOJE,
  },

  /* ---------- Gramática ---------- */
  {
    temaId: 'ing-gramatica',
    titulo: 'Gramática aplicada à leitura',
    resumo:
      'A banca cobra a gramática que muda o sentido do texto: tempo verbal (o que já aconteceu × o que vale sempre), modais (grau de certeza e obrigação), voz passiva, comparações, condicionais e orações relativas.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'No inglês instrumental, gramática serve para **entender**, não para escrever. Você precisa reconhecer o tempo verbal, saber se a frase afirma uma certeza ou uma possibilidade e identificar quem fez o quê numa voz passiva.\n\n' +
          'No artigo científico, cada seção tem seu tempo verbal típico: **simple present** para fatos aceitos (*Night-shift work disrupts circadian rhythms*); **present perfect** para conhecimento acumulado até hoje (*has been associated with*); **simple past** para o que foi feito e encontrado no estudo (*were followed, was found*).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Tempos verbais mais cobrados',
          colunas: ['Tempo', 'Forma', 'Uso', 'Exemplo'],
          linhas: [
            ['Simple present', 'verbo / -s na 3ª pessoa', 'fatos gerais, rotinas', 'Alcohol kills most bacteria.'],
            ['Present continuous', 'am/is/are + -ing', 'ação em curso', 'The patient is bleeding.'],
            ['Simple past', 'verbo + -ed / irregular', 'ação concluída em tempo definido', 'He required handwashing in the 1840s.'],
            ['Present perfect', 'have/has + particípio', 'passado sem data ou que chega ao presente', 'She has been in the ICU since Monday.'],
            ['Past perfect', 'had + particípio', 'passado anterior a outro passado', 'He had died before the team arrived.'],
            ['Future', 'will + verbo; be going to', 'previsão, decisão, plano', 'A body in a cold river will cool faster.'],
            ['Used to', 'used to + verbo', 'hábito passado que acabou', 'Doctors used to go from autopsies to the ward.'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Modais: certeza, possibilidade e obrigação',
          colunas: ['Modal', 'Sentido principal', 'Exemplo'],
          linhas: [
            ['must', 'obrigação forte; ou dedução quase certa', 'Each transfer must be recorded. / He must be tired.'],
            ['should / ought to', 'recomendação, conselho', 'It should be reassessed over time.'],
            ['may', 'possibilidade; ou permissão (formal)', 'Moisture may encourage bacterial growth.'],
            ['might / could', 'possibilidade mais remota', 'Other factors might explain the result.'],
            ['can', 'capacidade ou possibilidade geral', 'False positives can cause anxiety.'],
            ['will / would', 'previsão / hipótese, condicional', 'The test would identify 95 cases.'],
            ['might have / may have + particípio', 'possibilidade no passado', 'Sleep quality might have influenced the results.'],
            ['should have + particípio', 'algo recomendável que não foi feito', 'The seal should have been signed.'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Voz passiva** = *be* (no tempo do verbo) + **particípio** (+ *by* agente, opcional). É muito usada em ciência porque o foco é o processo, não quem o executou: *Samples were collected*, *Hazard ratios were adjusted*, *Causality cannot be established*. Para achar o tempo da passiva, olhe o verbo *be*: *is examined* (presente), *was examined* (passado), *has been examined* (present perfect), *will be examined* (futuro), *must be examined* (modal).\n\n' +
          '**Comparativos**: adjetivos curtos recebem *-er/-est* (*faster, the fastest*); longos, *more/the most* (*more effective, the most effective*); irregulares: *good–better–best*, *bad–worse–worst*. Igualdade: *as … as*. **Condicionais**: tipo 0 (*If + present, present*: verdade geral), tipo 1 (*If + present, will*: real), tipo 2 (*If + past, would*: hipótese no presente), tipo 3 (*If + past perfect, would have + particípio*: hipótese no passado, que não aconteceu).\n\n' +
          '**Orações relativas**: *who* (pessoas), *which* (coisas), *that* (pessoas ou coisas, só em oração restritiva), *whose* (posse), *where* (lugar). A oração **explicativa** (entre vírgulas) não aceita *that*: *The hospital, which was built in 1950, …*',
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — modal e grau de certeza',
        enunciado:
          'Item: “Em ‘unmeasured factors might have influenced the results’, os autores afirmam que fatores não medidos influenciaram os resultados.” Certo ou errado?',
        resolucao:
          'Errado. *Might have* + particípio expressa **possibilidade** no passado (podem ter influenciado), não fato. A afirmação transforma hipótese em certeza.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — voz passiva',
        enunciado: 'Passe para a voz passiva: “The pathologist examined the samples.”',
        resolucao:
          '*The samples **were examined** by the pathologist.* O tempo é o simple past (*examined*), então *be* vai para o passado no plural (*were*) + particípio (*examined*).',
      },
      {
        tipo: 'atencao',
        texto:
          '**Would** não é sempre condicional: pode ser futuro do passado (*the theory would only be accepted decades later* = só seria aceita décadas depois) ou hábito passado (*he would visit the ward every morning*). E **present perfect** com *since/for* indica situação que continua: *has been in the ICU since Monday* = ainda está na UTI.',
      },
    ],
    fontes: [SWAN, MURPHY, CAMBRIDGE],
    atualizadoEm: HOJE,
  },
];
