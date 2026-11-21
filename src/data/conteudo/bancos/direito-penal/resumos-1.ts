import type { ResumoTema } from '../../../types';
import { ABUSO, ATUALIZADO, CP, CTB, DROGAS, L14843, LEP, STF_HC_97710 } from './fontes';

export const RESUMOS_1: ResumoTema[] = [
  /* ---------- dp-parte-geral ---------- */
  {
    temaId: 'dp-parte-geral',
    titulo: 'Parte geral: lei penal, crime, excludentes e imputabilidade',
    resumo:
      'A banca cobra a letra dos arts. 1º a 33 do CP: tempo e lugar do crime, dolo e culpa, tentativa e desistência, as quatro excludentes de ilicitude e, sobretudo para o perito, a imputabilidade do art. 26 (inimputável × semi-imputável) e a embriaguez do art. 28.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Legalidade e anterioridade** (art. 1º): não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal. A lei que **deixa de considerar o fato crime** faz cessar a execução e os efeitos penais da sentença; a que **de qualquer modo favorece** o agente retroage, mesmo após o trânsito em julgado (art. 2º). A lei **excepcional ou temporária** aplica-se aos fatos praticados durante sua vigência (art. 3º).\n\n**Tempo do crime**: momento da ação ou omissão, ainda que outro seja o do resultado (art. 4º, teoria da **atividade**). **Lugar do crime**: onde ocorreu a ação ou omissão, no todo ou em parte, ou onde se produziu ou deveria produzir-se o resultado (art. 6º, **ubiquidade**).\n\nNa visão analítica cobrada em prova, crime é **fato típico** (conduta, resultado, nexo causal e tipicidade), **ilícito** e **culpável**. É **doloso** quando o agente quis o resultado (dolo direto) ou **assumiu o risco** de produzi-lo (dolo eventual); **culposo**, quando deu causa ao resultado por **imprudência, negligência ou imperícia** (art. 18). O crime culposo só existe quando a lei o prevê expressamente (art. 18, parágrafo único).\n\n**Omissão imprópria** (art. 13, § 2º): responde pelo resultado quem **devia e podia agir** para evitá-lo: quem tem por lei obrigação de cuidado, proteção ou vigilância, quem de outra forma assumiu a responsabilidade de impedir o resultado ou quem criou o risco. É o **garantidor**, como o plantonista responsável pelo paciente.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Iter criminis (arts. 14 a 17 do CP)',
          colunas: ['Instituto', 'Regra', 'Consequência'],
          linhas: [
            ['Consumação (art. 14, I)', 'Reúnem-se todos os elementos da definição legal', 'Pena integral'],
            ['Tentativa (art. 14, II)', 'Iniciada a execução, não se consuma por circunstâncias alheias à vontade do agente', 'Pena do consumado diminuída de 1/3 a 2/3'],
            ['Desistência voluntária e arrependimento eficaz (art. 15)', 'O agente desiste de prosseguir ou impede o resultado', 'Responde só pelos atos já praticados'],
            ['Arrependimento posterior (art. 16)', 'Crime sem violência ou grave ameaça; repara o dano até o recebimento da denúncia ou queixa', 'Redução de 1/3 a 2/3'],
            ['Crime impossível (art. 17)', 'Ineficácia absoluta do meio ou absoluta impropriedade do objeto', 'Não se pune a tentativa'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Excludentes de ilicitude (art. 23): “não há crime”',
          colunas: ['Excludente', 'Requisitos na letra da lei', 'Ponto de prova'],
          linhas: [
            ['Estado de necessidade (art. 24)', 'Perigo atual, não provocado por sua vontade, inevitável de outro modo; sacrifício não razoável de exigir', 'Quem tem o **dever legal de enfrentar o perigo** não pode alegá-lo (§ 1º)'],
            ['Legítima defesa (art. 25)', 'Uso moderado dos meios necessários contra **injusta agressão, atual ou iminente**', 'Agressão futura ou passada não autoriza'],
            ['Estrito cumprimento de dever legal', 'Agente cumpre dever imposto por lei', 'Excesso doloso ou culposo é punível (art. 23, parágrafo único)'],
            ['Exercício regular de direito', 'Conduta autorizada pelo ordenamento', 'A doutrina majoritária enquadra aqui a **intervenção médico-cirúrgica consentida**'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Intervenção médica na letra do CP.** Não configura constrangimento ilegal a intervenção médica ou cirúrgica **sem o consentimento** do paciente ou de seu representante legal, **se justificada por iminente perigo de vida**, nem a coação exercida para impedir suicídio (art. 146, § 3º). Também não se pune o aborto praticado por médico se não há outro meio de salvar a vida da gestante ou se a gravidez resulta de estupro e há consentimento da gestante ou, quando incapaz, de seu representante legal (art. 128).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Imputabilidade (arts. 26 a 28): o tema do perito psiquiatra',
          colunas: ['Situação', 'Consequência legal'],
          linhas: [
            ['Doença mental ou desenvolvimento mental incompleto ou retardado + **inteiramente incapaz** de entender o caráter ilícito ou de determinar-se (art. 26, caput)', '**Isento de pena** (inimputável); recebe medida de segurança (art. 97)'],
            ['Perturbação da saúde mental ou desenvolvimento incompleto/retardado + **não inteiramente capaz** (art. 26, parágrafo único)', 'Pena **reduzida de 1/3 a 2/3** (semi-imputável) ou substituída por medida de segurança (art. 98)'],
            ['Menor de 18 anos (art. 27)', 'Inimputável; sujeito à legislação especial'],
            ['Emoção, paixão ou embriaguez voluntária ou culposa (art. 28, I e II)', 'Não excluem a imputabilidade'],
            ['Embriaguez **completa** por caso fortuito ou força maior, com inteira incapacidade (art. 28, § 1º)', 'Isento de pena'],
            ['Embriaguez por caso fortuito ou força maior sem a plena capacidade (art. 28, § 2º)', 'Pena reduzida de 1/3 a 2/3'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Medida de segurança** (arts. 96 e 97): internação em hospital de custódia ou tratamento ambulatorial (possível se o fato é punível com **detenção**). Dura até a perícia constatar a **cessação de periculosidade**; prazo mínimo de **1 a 3 anos**; perícia ao fim do prazo mínimo, **repetida de ano em ano**.',
          '**Concurso de pessoas** (art. 29): quem de qualquer modo concorre para o crime incide nas suas penas, na medida de sua culpabilidade; participação de **menor importância** reduz de 1/6 a 1/3; quem quis participar de crime menos grave recebe a pena deste (aumentada até metade se o mais grave era previsível).',
          '**Circunstâncias pessoais** não se comunicam, **salvo quando elementares** do crime (art. 30). Ajuste, instigação e auxílio não são puníveis se o crime não chega a ser tentado (art. 31).',
          '**Penas** (art. 32): privativas de liberdade, restritivas de direitos e multa. Reclusão admite regime fechado, semiaberto ou aberto; detenção, semiaberto ou aberto, salvo transferência ao fechado. Regime inicial: pena > 8 anos, fechado; não reincidente com pena > 4 até 8, semiaberto; não reincidente com pena ≤ 4, aberto (art. 33).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Inimputável ou semi-imputável?',
        enunciado:
          'O laudo conclui que o réu, com esquizofrenia, entendia o caráter ilícito do fato, mas tinha a autodeterminação parcialmente prejudicada. Qual a consequência?',
        resolucao:
          'Ele **não era inteiramente incapaz** de determinar-se: é **semi-imputável** (art. 26, parágrafo único). Responde com pena reduzida de 1/3 a 2/3, substituível por medida de segurança se precisar de especial tratamento curativo (art. 98). Só a incapacidade **inteira** leva à isenção de pena do caput.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas clássicas: (1) **embriaguez voluntária não isenta de pena**, só a completa por caso fortuito ou força maior; (2) basta faltar **uma** das capacidades (entender **ou** determinar-se); (3) na tentativa a pena **diminui de 1/3 a 2/3**, enquanto na desistência voluntária o agente responde apenas pelos atos já praticados.',
      },
    ],
    fontes: [CP],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- dp-crimes-adm-publica ---------- */
  {
    temaId: 'dp-crimes-adm-publica',
    titulo: 'Crimes contra a administração pública e crimes do médico',
    resumo:
      'Cai o verbo de cada tipo (apropriar, exigir, solicitar, oferecer, retardar), o conceito penal de funcionário público (art. 327) e os crimes próprios do médico: atestado falso, omissão de notificação compulsória, violação de segredo, omissão de socorro e exigência de caução.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Para efeitos penais, **funcionário público** é quem, **embora transitoriamente ou sem remuneração**, exerce cargo, emprego ou função pública (CP, art. 327). **Equipara-se** a ele quem exerce cargo, emprego ou função em entidade paraestatal e quem trabalha para **empresa prestadora de serviço contratada ou conveniada** para executar atividade típica da Administração (§ 1º). A pena aumenta da **terça parte** para ocupantes de cargo em comissão ou função de direção ou assessoramento (§ 2º).\n\nNa prática, o médico do SUS (servidor, empregado público ou contratado por entidade conveniada) pode responder por peculato, concussão ou corrupção passiva. O STF já aplicou a equiparação ao médico que atende pelo SUS em hospital privado conveniado (HC 97.710). O condenado por crime contra a administração pública só progride de regime se **reparar o dano** ou devolver o produto do ilícito (art. 33, § 4º).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Crimes funcionais mais cobrados',
          colunas: ['Crime', 'Núcleo do tipo', 'Pena', 'Pegadinha'],
          linhas: [
            ['Peculato (art. 312)', '**Apropriar-se** ou **desviar** bem de que tem a posse em razão do cargo; § 1º: **subtrair** valendo-se da facilidade do cargo (peculato-furto)', 'Reclusão, 2 a 12 anos, e multa', 'Bem pode ser público ou **particular**'],
            ['Peculato culposo (art. 312, § 2º)', 'Concorrer culposamente para o crime de outrem', 'Detenção, 3 meses a 1 ano', 'Reparação **antes** da sentença irrecorrível extingue a punibilidade; depois, reduz a pena de metade'],
            ['Peculato mediante erro de outrem (art. 313)', 'Apropriar-se do que recebeu por erro de outrem', 'Reclusão, 1 a 4 anos, e multa', 'Também chamado peculato-estelionato'],
            ['Concussão (art. 316)', '**Exigir** vantagem indevida, ainda que fora da função ou antes de assumi-la, mas em razão dela', 'Reclusão, 2 a 12 anos, e multa', 'Exigir = impor; a pena foi elevada pela Lei 13.964/2019'],
            ['Corrupção passiva (art. 317)', '**Solicitar** ou **receber** vantagem indevida, ou **aceitar promessa**', 'Reclusão, 2 a 12 anos, e multa', '+1/3 se retarda ou deixa de praticar ato de ofício (§ 1º); § 2º: cede a pedido ou influência de outrem'],
            ['Prevaricação (art. 319)', 'Retardar ou deixar de praticar ato de ofício, ou praticá-lo contra lei, para satisfazer **interesse ou sentimento pessoal**', 'Detenção, 3 meses a 1 ano, e multa', 'Não há vantagem de terceiro: o móvel é pessoal'],
            ['Condescendência criminosa (art. 320)', 'Deixar, **por indulgência**, de responsabilizar subordinado ou de levar o fato à autoridade competente', 'Detenção, 15 dias a 1 mês, ou multa', 'O móvel é a **indulgência**; pena mínima do capítulo, igual à dos arts. 323 e 324'],
            ['Corrupção ativa (art. 333)', 'Particular **oferece ou promete** vantagem a funcionário para praticar, omitir ou retardar ato de ofício', 'Reclusão, 2 a 12 anos, e multa', '“Dar” após exigência do funcionário não está no tipo'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Crimes ligados à atividade médica',
          colunas: ['Crime', 'Texto legal (essência)', 'Pena e observação'],
          linhas: [
            ['Omissão de socorro (art. 135)', 'Deixar de prestar assistência, **quando possível fazê-lo sem risco pessoal**, a pessoa ferida, inválida ou em grave e iminente perigo, ou não pedir o socorro da autoridade pública', 'Detenção, 1 a 6 meses, ou multa; aumenta de **metade** se resulta lesão grave e **triplica** se resulta morte'],
            ['Condicionamento de atendimento emergencial (art. 135-A)', 'Exigir **cheque-caução, nota promissória ou qualquer garantia**, ou o **preenchimento prévio de formulários administrativos**, como condição do atendimento médico-hospitalar emergencial', 'Detenção, 3 meses a 1 ano, e multa; **até o dobro** se resulta lesão grave e **até o triplo** se resulta morte'],
            ['Violação do segredo profissional (art. 154)', 'Revelar, **sem justa causa**, segredo conhecido em razão de função, ministério, ofício ou profissão, cuja revelação possa produzir dano', 'Detenção, 3 meses a 1 ano, ou multa; **só se procede mediante representação**'],
            ['Omissão de notificação de doença (art. 269)', 'Deixar **o médico** de denunciar à autoridade pública doença de **notificação compulsória**', 'Detenção, 6 meses a 2 anos, e multa; crime próprio do médico'],
            ['Falsidade de atestado médico (art. 302)', 'Dar **o médico**, no exercício da profissão, **atestado falso**', 'Detenção, 1 mês a 1 ano; com **fim de lucro**, aplica-se também multa'],
            ['Falso testemunho ou falsa perícia (art. 342)', 'Fazer afirmação falsa, negar ou calar a verdade como testemunha ou **perito** em processo judicial, administrativo, inquérito ou juízo arbitral', 'Reclusão, 2 a 4 anos, e multa; deixa de ser punível se o agente se **retrata antes da sentença** (§ 2º)'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Exigir ou solicitar?',
        enunciado:
          'Médico de hospital público diz ao paciente que só fará a cirurgia eletiva pela fila do SUS se receber R$ 3.000,00 “por fora”, deixando claro que, sem o pagamento, o procedimento não sai. Qual o crime?',
        resolucao:
          'O verbo é **exigir**: há imposição, o paciente fica sem alternativa. É **concussão** (art. 316). Se o médico apenas **pedisse** ou **aceitasse** a oferta, seria **corrupção passiva** (art. 317). O paciente que cede à exigência não comete corrupção ativa, porque o art. 333 pune quem **oferece ou promete**.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) no **peculato culposo**, a reparação do dano **antes da sentença irrecorrível** extingue a punibilidade, e a posterior reduz a pena de metade; no doloso, não há essa regra; (2) a pena do art. 135-A aumenta **até o dobro** ou **até o triplo**, mas a do art. 135 aumenta **de metade** ou **triplica**; (3) o atestado falso do art. 302 exige que o autor seja **médico** e esteja no exercício da profissão; (4) a ação do art. 154 é **pública condicionada à representação**.',
      },
    ],
    fontes: [CP, STF_HC_97710],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- dp-leis-especiais ---------- */
  {
    temaId: 'dp-leis-especiais',
    titulo: 'Leis especiais: abuso de autoridade, trânsito, execução penal e drogas',
    resumo:
      'Nos editais de perícia (“Direito Aplicado”), caem o dolo específico do abuso de autoridade, os crimes do CTB e a prova da embriaguez (art. 306, §§ 1º e 2º), o exame criminológico da LEP após a Lei 14.843/2024 e os laudos de constatação e definitivo da Lei de Drogas.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Abuso de autoridade (Lei 13.869/2019).** O sujeito ativo é **qualquer agente público, servidor ou não**, de qualquer Poder e ente federativo, inclusive quem exerce a função transitoriamente ou sem remuneração (art. 2º). Só há crime se o agente atua com a **finalidade específica** de prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou por **mero capricho ou satisfação pessoal** (art. 1º, § 1º). A **divergência na interpretação de lei ou na avaliação de fatos e provas não configura** abuso (art. 1º, § 2º). A ação penal é **pública incondicionada** (art. 3º). Perda do cargo e inabilitação dependem de **reincidência** e não são automáticas (art. 4º, parágrafo único).',
      },
      {
        tipo: 'lista',
        itens: [
          '**Art. 24**: constranger, com violência ou grave ameaça, funcionário de **hospital** a admitir para tratamento **pessoa já morta**, para alterar local ou momento de crime. Detenção de 1 a 4 anos e multa, além da pena da violência.',
          '**Art. 15**: constranger a depor, sob ameaça de prisão, quem deve guardar **segredo profissional**, como o médico.',
          '**Art. 13**: constranger o preso a exibir o corpo à curiosidade pública ou a situação vexatória.',
          '**Art. 22, § 1º, III**: cumprir mandado de busca domiciliar **após as 21h ou antes das 5h**. Não há crime se o ingresso for para **prestar socorro** ou em flagrante ou desastre (§ 2º).',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Crimes de trânsito (CTB)',
          colunas: ['Dispositivo', 'Regra', 'Pena'],
          linhas: [
            ['Art. 302', 'Homicídio culposo na direção de veículo automotor', 'Detenção, 2 a 4 anos, + suspensão ou proibição de habilitação'],
            ['Art. 302, § 3º', 'Homicídio culposo conduzindo **sob influência de álcool** ou outra substância psicoativa', 'Reclusão, 5 a 8 anos'],
            ['Art. 303', 'Lesão corporal culposa na direção', 'Detenção, 6 meses a 2 anos'],
            ['Art. 303, § 2º', 'Capacidade psicomotora alterada + lesão **grave ou gravíssima**', 'Reclusão, 2 a 5 anos'],
            ['Art. 306', 'Conduzir com **capacidade psicomotora alterada** por álcool ou substância psicoativa', 'Detenção, 6 meses a 3 anos, multa e suspensão ou proibição'],
            ['Art. 301', 'Condutor que presta **pronto e integral socorro** à vítima', 'Não se impõe prisão em flagrante nem se exige fiança'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Prova da embriaguez no art. 306.** A conduta é constatada por (§ 1º): **I** – concentração **igual ou superior a 6 decigramas de álcool por litro de sangue** ou **igual ou superior a 0,3 miligrama por litro de ar alveolar**; ou **II** – **sinais** que indiquem, na forma do Contran, alteração da capacidade psicomotora. A verificação pode ser feita por teste de alcoolemia ou toxicológico, **exame clínico, perícia, vídeo, prova testemunhal** ou outros meios admitidos, **observado o direito à contraprova** (§ 2º). Na esfera administrativa, **qualquer concentração** de álcool sujeita às penalidades do art. 165 (art. 276), e a recusa ao teste gera as sanções do art. 165-A (art. 277, § 3º).\n\n**Execução penal (LEP).** O condenado em regime **fechado** **será** submetido a **exame criminológico** para classificação e individualização da execução; no **semiaberto**, **poderá** ser (art. 8º). A Comissão Técnica de Classificação tem, no mínimo, dois chefes de serviço, **um psiquiatra**, um psicólogo e um assistente social (art. 7º). Desde a **Lei 14.843/2024**, a progressão de regime exige boa conduta carcerária **e os resultados do exame criminológico** (art. 112, § 1º), e o ingresso no regime aberto também considera esse exame (art. 114, II). Para crimes anteriores a essa lei, o STJ entende que a exigência não retroage. Na medida de segurança, o relatório sobre a cessação da periculosidade é instruído com **laudo psiquiátrico** (art. 175, II).\n\n**Drogas (Lei 11.343/2006).** Para lavrar o auto de prisão em flagrante e estabelecer a materialidade, basta o **laudo de constatação** da natureza e quantidade da droga, firmado por **perito oficial** ou, na falta, por **pessoa idônea** (art. 50, § 1º). O perito que o subscreve **não fica impedido** de participar do **laudo definitivo** (§ 2º). O juiz, em 10 dias, certifica a regularidade do laudo de constatação e determina a destruição da droga, **guardando amostra** para o laudo definitivo (§ 3º). O inquérito termina em **30 dias** (preso) ou **90 dias** (solto), prazos que o juiz pode **duplicar** (art. 51). Para o médico: **prescrever ou ministrar culposamente** droga sem necessidade, em dose excessiva ou em desacordo com a norma é crime (art. 38), e o juiz comunica a condenação ao conselho profissional.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Recusou o etilômetro: há prova do crime?',
        enunciado:
          'Motorista com hálito etílico, fala pastosa e marcha cambaleante recusa o etilômetro e o exame de sangue. O médico perito faz exame clínico e descreve os sinais. É possível o crime do art. 306?',
        resolucao:
          'Sim. O § 1º, II admite a constatação por **sinais** de alteração da capacidade psicomotora, e o § 2º aceita **exame clínico, perícia, vídeo e prova testemunhal**, observado o direito à contraprova. A recusa ao teste também gera, na esfera administrativa, as penalidades do art. 165-A.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) no **crime** do art. 306 os índices são **≥ 6 dg/L de sangue ou ≥ 0,3 mg/L de ar alveolar**; na **infração administrativa**, qualquer concentração basta; (2) o exame criminológico é **obrigatório** no fechado e **facultativo** no semiaberto (art. 8º); (3) o laudo de constatação pode ser firmado por **pessoa idônea** na falta de perito oficial; (4) a Lei de Abuso exige **dolo específico**, e divergência de interpretação não é crime.',
      },
    ],
    fontes: [ABUSO, CTB, LEP, L14843, DROGAS, CP],
    atualizadoEm: ATUALIZADO,
  },
];
