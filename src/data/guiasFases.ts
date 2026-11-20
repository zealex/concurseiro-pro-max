import type { GuiaFase, TipoFase } from './types';

/**
 * Guias das fases do concurso e da estratégia de prova (Biblioteca → "Guias das fases").
 * Regras que variam entre editais aparecem como "confira no edital": o guia ensina o método,
 * o edital manda nos números.
 */

const ATUALIZADO = '2026-11-20';

export const GUIAS_FASES: GuiaFase[] = [
  {
    id: 'estrategia-prova',
    titulo: 'Estratégia de prova objetiva',
    emoji: '🎯',
    resumo:
      'Como transformar conhecimento em pontos no dia da prova: ordem de resolução, gestão do tempo, quando chutar (e quando deixar em branco no Certo/Errado) e como não ser eliminado por uma disciplina "pequena".',
    secoes: [
      {
        titulo: 'Antes de começar: leia as regras do caderno',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              '**Tempo total** e se ele inclui o preenchimento do cartão-resposta (em geral inclui).',
              '**Penalidade por erro**: existe no Certo/Errado do Cebraspe (no PMF 2024, cada erro desconta 0,5); em múltipla escolha, normalmente não existe.',
              '**Mínimos**: por disciplina, por prova e no total. Ficar abaixo de qualquer um elimina, mesmo com nota total alta.',
              '**Peso** de cada bloco: em prefeituras, 10 questões de Português podem valer tanto quanto 20 de específicas.',
            ],
          },
          { tipo: 'atencao', texto: 'O mínimo por disciplina é a armadilha clássica do médico: vai bem em Clínica e é eliminado em Informática ou Legislação. Use o **Meu Edital** para ver onde está o risco.' },
        ],
      },
      {
        titulo: 'Ordem de resolução e tempo',
        blocos: [
          {
            tipo: 'lista',
            ordenada: true,
            itens: [
              '**Primeira passada**: resolva só o que você sabe de cara. Marque as duvidosas no caderno e siga em frente; não brigue com uma questão.',
              '**Segunda passada**: volte às marcadas, eliminando alternativas.',
              '**Reserve tempo para o cartão-resposta** (15 a 20 minutos é uma margem prudente). Cartão em branco não pontua, por melhor que esteja o caderno.',
              'Comece pelo bloco que tem **mínimo mais apertado** ou pelo que você domina melhor — o importante é decidir antes, não no dia.',
            ],
          },
          {
            tipo: 'formula',
            formula: 'tempo por questão ≈ (tempo total − reserva do cartão) ÷ nº de questões',
            legenda: 'Ex.: 4 h para 120 itens, reservando 20 min → (240 − 20) ÷ 120 ≈ 1,8 min por item.',
          },
        ],
      },
      {
        titulo: 'Chutar ou deixar em branco?',
        blocos: [
          {
            tipo: 'texto',
            texto:
              'Na **múltipla escolha sem penalidade**, nunca deixe em branco: o chute só pode somar. No **Certo/Errado com penalidade**, o chute tem valor esperado. Se cada acerto vale 1 e cada erro desconta 0,5, marcar compensa quando a chance de acertar for maior que 1/3.',
          },
          { tipo: 'formula', formula: 'ganho esperado = p × 1 − (1 − p) × 0,5 > 0  ⇔  p > 1/3', legenda: 'p = sua probabilidade de acertar o item.' },
          {
            tipo: 'tabela',
            tabela: {
              colunas: ['Sua confiança no item', 'Decisão (erro = −0,5)'],
              linhas: [
                ['Sabe a resposta', 'Marque'],
                ['Eliminou o raciocínio, mas ficou entre C e E (~50%)', 'Marque: ganho esperado +0,25'],
                ['Não faz ideia (chute puro, 50%)', 'Matematicamente ainda compensa (+0,25), mas atenção ao mínimo da prova'],
                ['Acha que sabe, mas já errou esse assunto várias vezes (< 1/3)', 'Deixe em branco'],
              ],
              nota: 'Se a penalidade for de 1 ponto por erro (algumas provas antigas), o limite sobe para p > 1/2.',
            },
          },
          {
            tipo: 'atencao',
            texto: 'No Cebraspe, palavras absolutas ("sempre", "nunca", "exclusivamente") costumam tornar o item errado, mas **não é regra**: a lei também usa termos absolutos. Decida pelo conteúdo, não pela palavra.',
          },
        ],
      },
      {
        titulo: 'Leitura do comando',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Sublinhe **INCORRETA**, **EXCETO** e **NÃO** — é onde mais se perde ponto bobo.',
              'Em questões de texto, volte ao texto: a resposta precisa estar nele, não no seu conhecimento prévio.',
              'Em lei seca, desconfie de prazos e números trocados (30 × 15 dias; 1/3 × 2/3).',
            ],
          },
        ],
      },
    ],
    fontes: ['Regras de penalidade e mínimos: editais dos concursos (ver Biblioteca → Editais de referência).'],
    atualizadoEm: ATUALIZADO,
  },
  {
    id: 'recursos',
    titulo: 'Recurso contra gabarito',
    emoji: '📮',
    resumo:
      'Depois do gabarito preliminar, há um prazo curto para pedir anulação ou alteração de questões. Um recurso bem fundamentado pode valer pontos decisivos — para você e para todos.',
    secoes: [
      {
        titulo: 'Prazo e forma',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'O prazo, o canal (geralmente o site da banca) e o formato estão no **edital**; costuma ser de poucos dias a partir da divulgação do gabarito preliminar. Anote a data assim que o edital sair.',
              'Muitas bancas proíbem que o candidato se identifique no texto do recurso — leia a regra para não ter o recurso desconsiderado.',
              'Um recurso por questão, objetivo e impessoal.',
            ],
          },
        ],
      },
      {
        titulo: 'Estrutura de um bom recurso',
        blocos: [
          {
            tipo: 'lista',
            ordenada: true,
            itens: [
              '**Pedido**: anulação da questão ou alteração do gabarito para a alternativa X.',
              '**Fundamento**: o erro técnico, citando a fonte (artigo de lei vigente, manual oficial, diretriz, doutrina de referência), de preferência com a citação literal.',
              '**Ligação com o edital**: se o assunto não está no conteúdo programático, diga qual item do edital foi extrapolado.',
              '**Conclusão** curta, repetindo o pedido.',
            ],
          },
          {
            tipo: 'exemplo',
            titulo: 'Modelo enxuto',
            enunciado: 'Questão 27 — gabarito preliminar: B.',
            resolucao:
              'Requer-se a alteração do gabarito para D. A alternativa B afirma prazo de 15 dias para a posse; o art. 13, § 1º, da Lei 8.112/1990 estabelece 30 dias contados da publicação do ato de provimento. A alternativa D reproduz o texto legal. Pede-se, portanto, a alteração do gabarito ou, subsidiariamente, a anulação da questão.',
          },
        ],
      },
      {
        titulo: 'Depois do resultado',
        blocos: [
          {
            tipo: 'texto',
            texto:
              'Questões anuladas seguem a regra do edital — em muitas bancas, os pontos são atribuídos a todos os candidatos. Alteração de gabarito vale para todos. Guarde os recursos: são ótimo material de revisão sobre o que a banca considera certo.',
          },
        ],
      },
    ],
    fontes: ['Lei 8.112/1990 (exemplo de fundamentação), planalto.gov.br', 'Regras de recurso: edital de cada concurso.'],
    atualizadoEm: ATUALIZADO,
  },
  {
    id: 'discursiva',
    titulo: 'Prova discursiva e redação (inclui laudo e parecer)',
    emoji: '✍️',
    resumo:
      'Algumas provas para médico têm etapa discursiva: redação dissertativa, estudo de caso ou elaboração de laudo/parecer (comum em perícia). O que pontua é atender ao comando, organizar o texto e escrever com correção.',
    secoes: [
      {
        titulo: 'Regras que eliminam (leia no edital)',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              '**Identificação** do candidato fora do local permitido costuma zerar a prova.',
              '**Fuga ao tema** ou texto que não atende ao comando costuma zerar ou derrubar a nota.',
              '**Limites de linhas** (mínimo e máximo): o que passa do máximo não é corrigido.',
              'Só vale o texto na **folha definitiva**, com a caneta indicada no edital; o rascunho não é corrigido.',
            ],
          },
        ],
      },
      {
        titulo: 'Como as bancas corrigem',
        blocos: [
          {
            tipo: 'tabela',
            tabela: {
              colunas: ['Aspecto', 'O que o corretor procura'],
              linhas: [
                ['Conteúdo', 'Responde a todos os pontos do comando, com domínio técnico'],
                ['Estrutura', 'Introdução com tese, desenvolvimento em parágrafos, conclusão'],
                ['Língua', 'Ortografia, concordância, regência, pontuação (erros costumam ser descontados um a um)'],
              ],
              nota: 'A grade exata (pesos e descontos) é publicada no edital ou no espelho de correção.',
            },
          },
        ],
      },
      {
        titulo: 'Laudo médico-legal na discursiva',
        blocos: [
          {
            tipo: 'texto',
            texto:
              'A estrutura clássica do laudo, ensinada nos manuais de Medicina Legal, é: **preâmbulo** (autoridade, peritos, examinado, data), **quesitos**, **histórico**, **descrição** (o exame, sem interpretação), **discussão**, **conclusão** e **respostas aos quesitos**.',
          },
          {
            tipo: 'atencao',
            texto: 'A descrição deve ser objetiva (forma, dimensões, localização anatômica, cor). A interpretação vai na discussão. Misturar as duas é erro comum, e o corretor percebe.',
          },
        ],
      },
      {
        titulo: 'Treino',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Faça uma discursiva por semana na reta final, cronometrada e à mão.',
              'Planeje 5 minutos antes de escrever: tese + 3 argumentos + conclusão.',
              'Revise com o checklist de Português (crase, concordância, vírgula antes de "que" restritivo/explicativo).',
            ],
          },
        ],
      },
    ],
    fontes: ['Regras e critérios: editais dos concursos', 'Estrutura do laudo: manuais de Medicina Legal (França; Hércules)'],
    atualizadoEm: ATUALIZADO,
  },
  {
    id: 'titulos',
    titulo: 'Prova de títulos',
    emoji: '🎓',
    resumo:
      'Fase classificatória (raramente eliminatória) que soma pontos por formação e experiência. Para o generalista recém-formado, vale pouco — mas o que você tiver precisa estar documentado do jeito que o edital pede.',
    secoes: [
      {
        titulo: 'O que costuma pontuar',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Residência médica e especialização (certificado ou título de especialista).',
              'Mestrado e doutorado (diploma; alguns editais aceitam ata de defesa).',
              'Experiência profissional comprovada (carteira de trabalho, contrato, declaração do órgão).',
              'Publicações, aprovação em concurso anterior e cursos — só se o edital listar.',
            ],
          },
          { tipo: 'atencao', texto: 'Há sempre um **teto de pontos** por item e no total (no Perito Médico Federal 2024, até 7 pontos). Não adianta juntar dez cursos se o item vale no máximo um.' },
        ],
      },
      {
        titulo: 'Organize desde já',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Digitalize diplomas e certificados em PDF legível, frente e verso.',
              'Peça declarações de tempo de serviço com data de início, carga horária e função.',
              'Diploma estrangeiro exige revalidação ou tradução, conforme o edital.',
              'Respeite o formato e o prazo de envio: documento fora do padrão não é pontuado, e o prazo costuma ser curto.',
            ],
          },
        ],
      },
    ],
    fontes: ['Editais dos concursos (ver Editais de referência)'],
    atualizadoEm: ATUALIZADO,
  },
  {
    id: 'taf',
    titulo: 'Teste de aptidão física (TAF)',
    emoji: '🏃',
    resumo:
      'Aparece em carreiras policiais (inclusive em algumas de perito). É eliminatório: não basta ir bem na prova escrita. Os exercícios e índices mudam por edital, sexo e, às vezes, idade.',
    secoes: [
      {
        titulo: 'Provas mais comuns',
        blocos: [
          {
            tipo: 'tabela',
            tabela: {
              colunas: ['Teste', 'O que mede'],
              linhas: [
                ['Corrida (tempo fixo ou distância)', 'Resistência aeróbia'],
                ['Barra fixa ou flexão de braços', 'Força de membros superiores'],
                ['Abdominal', 'Resistência do core'],
                ['Impulsão horizontal / natação (alguns editais)', 'Potência / adaptação aquática'],
              ],
              nota: 'Índices mínimos: consulte a tabela do edital-alvo — eles variam bastante entre concursos.',
            },
          },
        ],
      },
      {
        titulo: 'Preparação',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Comece cedo: ganhos de resistência e força levam semanas. Não deixe para depois do resultado da objetiva.',
              'Treine o **protocolo exato** do edital (posição, cadência, o que invalida a repetição).',
              'Faça avaliações simuladas a cada 2–3 semanas.',
              'O edital costuma exigir **atestado médico** específico para a data do teste — veja o modelo e a validade.',
            ],
          },
          { tipo: 'atencao', texto: 'Como médico, você conhece os riscos: aumente a carga gradualmente, durma bem e não estreie tênis ou suplemento no dia.' },
        ],
      },
    ],
    fontes: ['Editais das carreiras policiais (Polícia Federal, Polícias Científicas e IGPs)'],
    atualizadoEm: ATUALIZADO,
  },
  {
    id: 'psicologica',
    titulo: 'Avaliação psicológica',
    emoji: '🧠',
    resumo:
      'Etapa comum em carreiras policiais. Verifica se o perfil do candidato é compatível com o cargo, com testes padronizados e critérios definidos no edital.',
    secoes: [
      {
        titulo: 'Base legal e direitos',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              '**Súmula Vinculante 44 (STF)**: "Só por lei se pode sujeitar a exame psicotécnico a habilitação de candidato a cargo público."',
              'O edital deve trazer critérios objetivos e o perfil exigido.',
              'Em geral, há **entrevista devolutiva** e prazo para recurso, que pode ser acompanhado por psicólogo de sua escolha — confira no edital.',
            ],
          },
        ],
      },
      {
        titulo: 'Como se preparar',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Durma bem na véspera e chegue cedo: atenção e ritmo contam.',
              'Siga as instruções à risca (tempo, forma de marcar, ritmo do traçado).',
              'Nos questionários de personalidade, responda com sinceridade e coerência: há escalas que detectam respostas "ensaiadas".',
            ],
          },
        ],
      },
    ],
    fontes: ['Súmula Vinculante 44, STF (portal.stf.jus.br)', 'Editais das carreiras policiais'],
    atualizadoEm: ATUALIZADO,
  },
  {
    id: 'investigacao-social',
    titulo: 'Investigação social (vida pregressa)',
    emoji: '🔍',
    resumo:
      'Fase em que o órgão verifica antecedentes e conduta do candidato, comum nas carreiras policiais. A causa mais frequente de eliminação é a omissão de informação no formulário.',
    secoes: [
      {
        titulo: 'O que costuma ser pedido',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Formulário detalhado com endereços, empregos, escolas e referências dos últimos anos.',
              'Certidões criminais da Justiça Estadual, Federal, Militar e Eleitoral dos locais onde morou.',
              'Certidões de órgãos de classe — para você, a **certidão ético-profissional do CRM**.',
            ],
          },
        ],
      },
      {
        titulo: 'Cuidados',
        blocos: [
          {
            tipo: 'atencao',
            texto: 'Preencha **tudo** e com verdade: omitir um fato costuma pesar mais que o próprio fato. Guarde cópia do que enviou.',
          },
          {
            tipo: 'texto',
            texto:
              'Peça as certidões assim que o edital sair, porque algumas demoram. Se houver algo a esclarecer (processo antigo, protesto, sindicância), junte documentos que mostrem a situação atual e, se necessário, procure orientação jurídica.',
          },
        ],
      },
    ],
    fontes: ['Editais das carreiras policiais'],
    atualizadoEm: ATUALIZADO,
  },
  {
    id: 'posse',
    titulo: 'Nomeação, posse e documentos',
    emoji: '🪪',
    resumo:
      'Aprovado e nomeado: agora os prazos são curtos e o órgão exige documentos e inspeção médica. Perder o prazo da posse torna a nomeação sem efeito.',
    secoes: [
      {
        titulo: 'Prazos (regime federal — Lei 8.112/1990)',
        blocos: [
          {
            tipo: 'tabela',
            tabela: {
              colunas: ['Etapa', 'Regra'],
              linhas: [
                ['Posse', '30 dias contados da publicação do ato de provimento (art. 13, § 1º)'],
                ['Sem posse no prazo', 'O ato de provimento é tornado sem efeito (art. 13, § 6º)'],
                ['Inspeção médica', 'A posse depende de prévia inspeção médica oficial (art. 14)'],
                ['Exercício', '15 dias contados da data da posse (art. 15, § 1º)'],
              ],
              nota: 'Estados e municípios seguem o próprio estatuto: confira os prazos na lei local e no edital.',
            },
          },
        ],
      },
      {
        titulo: 'Documentos que o médico precisa ter em mãos',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Identidade, CPF, título de eleitor com quitação eleitoral e, para homens, quitação militar.',
              'Diploma de Medicina e **inscrição no CRM do estado** onde vai atuar (ou inscrição secundária).',
              'Certidões negativas exigidas pelo edital e declaração de bens.',
              '**Declaração de acumulação de cargos**: a CF permite acumular dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas, desde que haja compatibilidade de horários (art. 37, XVI, c).',
              'Exames do admissional, conforme a lista do órgão.',
            ],
          },
          { tipo: 'atencao', texto: 'Se já tiver outro vínculo público, organize a escala antes da posse: a compatibilidade de horários será analisada.' },
        ],
      },
    ],
    fontes: ['Lei 8.112/1990, arts. 13 a 15 — planalto.gov.br/ccivil_03/leis/l8112cons.htm', 'Constituição Federal, art. 37, XVI, c — planalto.gov.br'],
    atualizadoEm: ATUALIZADO,
  },
];

export function getGuia(id: string): GuiaFase | undefined {
  return GUIAS_FASES.find((g) => g.id === id);
}

export const rotaGuia = (id: string) => `/biblioteca/guia-${id}`;

/** Guia correspondente a cada fase do edital (Meu Edital). */
export const GUIA_DA_FASE: Partial<Record<TipoFase, string>> = {
  objetiva: 'estrategia-prova',
  discursiva: 'discursiva',
  titulos: 'titulos',
  taf: 'taf',
  psicologica: 'psicologica',
  'investigacao-social': 'investigacao-social',
  saude: 'posse',
};
