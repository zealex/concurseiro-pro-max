import type { ResumoTema } from '../../../types';
import { ATUALIZADO, CFM_2381, CFM_2430, CP, CPP, CROCE, FRANCA, HERCULES } from './fontes';

export const RESUMO_LAUDO: ResumoTema = {
  temaId: 'red-laudo-parecer',
  titulo: 'Laudo, parecer e relatório na prova discursiva',
  resumo:
    'Nas provas de perícia oficial, a discursiva pode pedir um laudo ou um parecer a partir de um caso. A banca avalia a estrutura clássica, a separação entre descrição objetiva e interpretação, a resposta fundamentada aos quesitos e a linguagem técnica.',
  blocos: [
    {
      tipo: 'texto',
      texto:
        'No processo penal, o exame de corpo de delito e as demais perícias são feitos por **perito oficial**, portador de diploma de curso superior (CPP, **art. 159**). O **art. 160** define o núcleo do documento: os peritos elaboram o **laudo pericial**, no qual “descreverão minuciosamente o que examinarem, e responderão aos quesitos formulados”, no prazo máximo de **10 dias**, prorrogável em casos excepcionais, a requerimento dos peritos. Nas lesões corporais, se o primeiro exame tiver sido incompleto, faz-se **exame complementar** (art. 168). Quando o objetivo é verificar a incapacidade para as ocupações habituais por mais de trinta dias (CP, art. 129, § 1º, I), esse exame deve ser feito logo que decorram **30 dias da data do crime** (art. 168, § 2º).\n\nNo plano ético, a **Resolução CFM nº 2.381/2024** define os documentos médicos e exige, em todos eles, entre outros itens, a identificação do médico (nome e CRM/UF) e do paciente, a data de emissão e a assinatura (art. 2º, § 1º). A **Resolução CFM nº 2.430/2025**, que trata do ato médico pericial, torna obrigatória no laudo a exposição da **metodologia**, do **objeto da perícia**, da **análise técnica e científica** e da **resposta aos quesitos**, quando apresentados; todas as conclusões devem ter correlação direta e lógica com os achados (art. 8º, caput e § 2º).',
    },
    {
      tipo: 'tabela',
      tabela: {
        titulo: 'Estrutura clássica do laudo médico-legal',
        colunas: ['Parte', 'O que contém', 'Erro comum'],
        linhas: [
          ['Preâmbulo', 'Órgão, autoridade requisitante, perito, examinado, data, hora e local', 'Omitir a autoridade ou a data'],
          ['Quesitos', 'Transcrição integral dos quesitos, na ordem', 'Resumir ou reescrever os quesitos'],
          ['Histórico', 'Relato do fato atribuído à fonte: “Refere o examinado que…”', 'Tratar a versão do examinado como fato provado'],
          ['Descrição', 'O exame: estado geral e cada lesão com tipo, forma, dimensões, cor, localização e orientação', 'Interpretar aqui (“lesão causada por soco”)'],
          ['Discussão', 'Interpretação: natureza da lesão, instrumento, compatibilidade com o histórico, evolução', 'Repetir a descrição sem analisar'],
          ['Conclusão', 'Síntese do que o exame permite afirmar', 'Concluir além do que os achados sustentam'],
          ['Resposta aos quesitos', 'Resposta direta a cada quesito, na ordem', 'Deixar quesito sem resposta'],
        ],
        nota: 'Estrutura dos manuais de Medicina Legal (França; Hércules; Croce). A descrição, chamada classicamente de “visum et repertum” (visto e referido), é a parte mais importante. Na prova, siga o modelo que o comando indicar.',
      },
    },
    {
      tipo: 'tabela',
      tabela: {
        titulo: 'Laudo, auto, parecer e relatório',
        colunas: ['Documento', 'Quem elabora e como', 'Característica'],
        linhas: [
          ['Laudo', 'O próprio perito redige, depois do exame', 'Forma usual hoje; o CPP fala em “laudo pericial” (art. 160)'],
          ['Auto', 'O perito dita a um escrivão, perante a autoridade', 'Mesmo conteúdo do laudo; o CPP menciona o “auto de corpo de delito” (art. 168, § 1º)'],
          ['Parecer médico-legal', 'Especialista consultado sobre um caso, em regra a partir de documentos', 'Opinativo; não há exame próprio, e o núcleo é a discussão (“parecer técnico”: Res. CFM 2.381/2024, art. 4º, IX; Res. CFM 2.430/2025, art. 7º, I)'],
          ['Relatório médico circunstanciado', 'Médico que presta ou prestou atendimento ao paciente', 'Assistencial: evolução, terapêutica, prognóstico e diagnóstico, este só com autorização expressa do paciente (Res. CFM 2.381/2024, art. 4º, VII)'],
        ],
        nota: 'Na doutrina clássica, “relatório médico-legal” é o gênero que abrange o auto e o laudo (França); não confunda com o relatório assistencial da Res. CFM 2.381/2024. No processo, o assistente técnico indicado pelas partes pode apresentar parecer (CPP, art. 159, § 5º, II).',
      },
    },
    {
      tipo: 'tabela',
      tabela: {
        titulo: 'Descrição objetiva × interpretação',
        colunas: ['Descrição (o que se vê e se mede)', 'Discussão (o que se conclui)'],
        linhas: [
          ['Equimose violácea, arredondada, de 3,0 cm de diâmetro, na região zigomática direita', 'Lesão produzida por ação contundente; a cor é compatível com lesão recente, ressalvada a variação individual'],
          ['Ferida de bordas irregulares e escoriadas, com pontes de tecido no fundo, de 2,5 cm de comprimento, no couro cabeludo da região parietal esquerda', 'Ferida contusa: as pontes de tecido indicam instrumento contundente, e não cortante'],
        ],
        nota: 'Para cada lesão: tipo, forma, dimensões em centímetros, cor, localização anatômica (região, face, terço e lado), orientação e características (bordas, fundo, crosta). “Agressão”, “soco” e “vítima” não entram na descrição; use “examinado(a)”.',
      },
    },
    {
      tipo: 'lista',
      itens: [
        '**“Sim” ou “Não”:** quando os achados permitem afirmar ou negar. Nos quesitos abertos, a resposta é específica e curta: “Instrumento contundente”.',
        '**“Prejudicado”:** o quesito perde o objeto por causa de outra resposta ou de um dado do caso. Se o 1º quesito (há ofensa?) for “Não”, os demais ficam prejudicados; o do aborto fica prejudicado em examinado do sexo masculino.',
        '**“Sem elementos para responder no momento”** (ou “aguardar exame complementar”): o exame ainda não permite concluir. É a resposta usual ao quesito da incapacidade por mais de trinta dias quando, no exame inicial, essa evolução ainda não pode ser afastada.',
        'Nunca deixe quesito em branco nem responda “talvez”: a dúvida técnica vira “sem elementos”, explicada na discussão.',
        '**Os quesitos variam:** a redação, a ordem e o agrupamento dos quesitos oficiais mudam de um estado para outro (e de um instituto para outro). Na prova, transcreva e responda exatamente os que o comando trouxer.',
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Modelo fictício: laudo de exame de lesão corporal',
      enunciado:
        '(Caso, pessoas e localidade fictícios. Os quesitos abaixo são um exemplo; a redação oficial varia entre os estados.)\n\n**Preâmbulo.** Aos dez dias do mês de março de 2026, às 14h30, no Posto Médico-Legal de Vale Sereno, o perito médico-legista abaixo assinado, designado pela direção do órgão, procedeu ao exame de corpo de delito em J. P. R., sexo masculino, 34 anos, identificado por documento oficial com foto, para atender à requisição do Delegado de Polícia de Vale Sereno e responder aos quesitos a seguir.\n\n**Quesitos.** 1º) Há ofensa à integridade corporal ou à saúde do examinado? 2º) Qual o instrumento ou meio que produziu a ofensa? 3º) Foi produzida por meio de veneno, fogo, explosivo, asfixia ou tortura, ou por outro meio insidioso ou cruel? 4º) Resultou incapacidade para as ocupações habituais por mais de trinta dias? 5º) Resultou perigo de vida? 6º) Resultou debilidade permanente de membro, sentido ou função? 7º) Resultou incapacidade permanente para o trabalho, enfermidade incurável, perda ou inutilização de membro, sentido ou função? 8º) Resultou deformidade permanente? 9º) Resultou aceleração de parto ou aborto?\n\n**Histórico.** Refere o examinado que, na noite de 8 de março de 2026, foi agredido por terceiro com socos e com um pedaço de madeira, em via pública. Apresenta documento de pronto atendimento que registra “sutura de ferimento contuso em couro cabeludo, cinco pontos”. Nega perda de consciência e alterações visuais.\n\n**Descrição.** Examinado lúcido, orientado, deambulando sem auxílio, em bom estado geral. Apresenta: a) ferida linear suturada com cinco pontos, de 3,0 cm de comprimento, na região parietal esquerda do couro cabeludo, em área recoberta por cabelos, sem secreção; b) equimose violácea, ovalada, de 4,0 cm × 2,5 cm, na região periorbitária direita, nas pálpebras superior e inferior, sem alteração aparente da motilidade ocular; c) escoriação linear com crosta hemática, de 5,0 cm × 0,3 cm, na face posterior do terço médio do antebraço esquerdo, com eixo oblíquo. Demais segmentos sem lesões aparentes.\n\n**Discussão.** A equimose e a escoriação resultam de ação contundente. A sutura prévia impede a análise das bordas originais da ferida do couro cabeludo; o documento de atendimento a descreve como contusa, o que é coerente com os demais achados. O conjunto é compatível com o histórico. A cor da equimose e a crosta da escoriação são compatíveis com lesões recentes. Não há elementos que indiquem perigo de vida. As lesões são superficiais e não comprometem membro, sentido ou função; a futura cicatriz é pequena e fica em área recoberta por cabelos, sem potencial de dano estético relevante. A duração da incapacidade para as ocupações habituais, que não foram informadas, depende da evolução da ferida; indica-se exame complementar logo que decorridos trinta dias da data do fato.\n\n**Conclusão.** O examinado apresenta lesões corporais recentes, produzidas por instrumento contundente, compatíveis com o histórico.\n\n**Resposta aos quesitos.** 1º) Sim. 2º) Instrumento contundente. 3º) Não. 4º) Sem elementos para responder no momento; aguardar exame complementar. 5º) Não. 6º) Não. 7º) Não. 8º) Não. 9º) Prejudicado.\n\n[Local, data, assinatura, nome e CRM/UF; na prova, só a identificação permitida pelo comando]',
      resolucao:
        '**Por que pontua:** preâmbulo completo; quesitos transcritos na íntegra e na ordem; histórico **atribuído** ao examinado (“refere”, “nega”) e ao documento (“registra”); descrição só com dados observáveis (tipo, forma, medidas, cor, região, face, terço e lado), sem “soco” nem “agressão”; discussão que liga achados, instrumento e histórico e **justifica** cada resposta; respostas curtas e coerentes com a discussão.\n\n**Coerência com o art. 129 do CP:** os quesitos 4º a 9º cobrem todos os resultados dos §§ 1º e 2º (incapacidade por mais de trinta dias, perigo de vida, debilidade permanente, aceleração de parto, incapacidade permanente para o trabalho, enfermidade incurável, perda ou inutilização, deformidade permanente e aborto). O 3º não corresponde a nenhum inciso do art. 129, mas aparece em muitos modelos de quesitos. No caso, o 4º fica em aberto porque a evolução da ferida suturada e a ocupação do examinado ainda não permitem concluir (CPP, art. 168, § 2º); o 6º e o 7º são “Não” porque a discussão mostra lesões superficiais, sem repercussão em membro, sentido ou função; o 8º é “Não” porque a cicatriz é pequena e oculta pelos cabelos. Se a ferida estivesse no rosto, “aguardar exame complementar” seria a resposta prudente para o 8º, já que a repercussão estética só se avalia depois da cicatrização. O 9º é “Prejudicado” porque o examinado é do sexo masculino.\n\n**Na prova:** use apenas os dados do caso, sem acrescentar lesão, exame ou documento. Se faltar um dado necessário, responda “sem elementos” e explique na discussão.',
    },
    {
      tipo: 'exemplo',
      titulo: 'Modelo fictício e resumido: parecer médico-legal',
      enunciado:
        '**Consulta.** A defesa de A. B. C. pergunta se a equimose descrita em laudo oficial como “amarelo-esverdeada, na coxa direita”, observada cerca de duas horas depois do fato narrado, é compatível com lesão produzida nesse intervalo.\n\n**Documentos analisados.** Cópia do laudo constante dos autos; o parecerista não examinou a pessoa.\n\n**Discussão.** A doutrina médico-legal descreve a mudança de cor da equimose à medida que o sangue extravasado é degradado: dos tons avermelhados e violáceos iniciais para tons esverdeados e amarelados, próprios de fases mais tardias da evolução. Profundidade, extensão, região e fatores individuais tornam essa evolução variável e impedem datar a lesão com precisão pela cor. Ainda assim, a coloração amarelo-esverdeada não corresponde ao aspecto esperado logo após o trauma.\n\n**Conclusão.** A coloração descrita não corresponde ao aspecto esperado de uma equimose produzida cerca de duas horas antes do exame, o que sugere lesão anterior ao fato narrado, ressalvadas a variação individual e as limitações de um parecer baseado apenas em documentos.\n\n[Local, data, assinatura, nome e CRM/UF]',
      resolucao:
        'Estrutura: **consulta** (o que se pergunta e por quem), **documentos analisados** (o parecer, em regra, dispensa o exame direto), **discussão** fundamentada e **conclusão** com as limitações declaradas. Nos manuais clássicos, as partes do parecer são preâmbulo, exposição (a consulta), discussão e conclusão; não há descrição de exame próprio, e é a discussão que dá valor ao parecer.',
    },
    {
      tipo: 'atencao',
      texto:
        'Os erros que mais tiram ponto no laudo: **interpretar na descrição** (“equimose causada por soco”), **afirmar como fato o que é relato** (“foi agredido”, em vez de “refere ter sido agredido”) e **responder a quesito sem base na discussão**. O perito descreve o resultado; a classificação jurídica da lesão como “grave” cabe à autoridade. E nada de inventar: dado que o caso não fornece vira “sem elementos”.',
    },
  ],
  fontes: [CPP, CP, CFM_2381, CFM_2430, FRANCA, HERCULES, CROCE],
  atualizadoEm: ATUALIZADO,
};
