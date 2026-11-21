import type { ResumoTema } from '../../../types';
import { ATUALIZADO, F_8112, F_CF, F_D12374, F_STJ635 } from './fontes';

/* Lei 8.112/1990 — provimento, direitos e regime disciplinar */

export const RESUMOS_1: ResumoTema[] = [
  /* ---------- srv-8112-provimento ---------- */
  {
    temaId: 'srv-8112-provimento',
    titulo: 'Lei 8.112: provimento, posse, exercício, estágio probatório e vacância',
    resumo:
      'A banca cobra prazos (posse em 30 dias, exercício em 15), as formas de provimento e de vacância, a consequência de perder cada prazo e o conflito entre os 24 meses de estágio da lei e os 3 anos de estabilidade da CF.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A Lei 8.112/1990 é o estatuto dos servidores **civis da União, das autarquias e das fundações públicas federais** (art. 1º). Servidor é quem ocupa **cargo público**, criado por lei, com denominação própria e vencimento pago pelos cofres públicos (arts. 2º e 3º).\n\n**Provimento** é o ato que preenche o cargo. As formas vigentes estão no art. 8º: **nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução**. Ascensão e transferência foram revogadas pela Lei 9.527/1997 e aparecem como distrator.\n\nA **investidura** acontece com a **posse** (art. 7º). A nomeação para cargo efetivo depende de concurso de provas ou de provas e títulos, com validade de **até 2 anos, prorrogável uma única vez por igual período** (arts. 10 e 12).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Etapa', 'Prazo e regra', 'Se o prazo for perdido'],
          linhas: [
            ['Posse (art. 13)', '30 dias da publicação do ato de provimento; cabe procuração específica; só há posse na nomeação', 'O ato de provimento é tornado sem efeito (§ 6º)'],
            ['Inspeção médica (art. 14)', 'Prévia à posse; só é empossado quem for julgado apto', 'Não há posse'],
            ['Exercício (art. 15)', '15 dias contados da posse', 'Servidor é exonerado (§ 2º)'],
            ['Mudança de sede (art. 18)', 'Mínimo de 10 e máximo de 30 dias da publicação do ato, incluído o deslocamento', 'O servidor pode declinar desses prazos (§ 2º)'],
            ['Jornada (art. 19)', 'Máximo de 40 h semanais; mínimo de 6 h e máximo de 8 h diárias', 'Leis especiais podem fixar outra jornada'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Estágio probatório (art. 20):** o texto da lei fala em **24 meses**, com avaliação de **assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade**. A avaliação é submetida à homologação **4 meses antes** do fim do período. Reprovado, o servidor é **exonerado** ou, se já for estável, **reconduzido** ao cargo anterior.\n\n**Estabilidade:** o art. 21 da lei ainda diz 2 anos, mas a **CF, art. 41** (redação da EC 19/1998), exige **3 anos de efetivo exercício** e **avaliação especial de desempenho** por comissão (§ 4º). No Executivo federal, o **Decreto 12.374/2025** fixou o estágio em **36 meses** (art. 2º) para os servidores nomeados após a sua publicação (art. 24). Na prova, leia o comando: “segundo a Lei 8.112” pede o texto literal (24 meses e 2 anos); “segundo a CF” pede 3 anos para a estabilidade.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Forma', 'Conceito-chave', 'Pegadinha'],
          linhas: [
            ['Readaptação (art. 24)', 'Cargo compatível com limitação física ou mental verificada em inspeção médica', 'Se incapaz para o serviço público, é aposentado; sem vaga, atua como excedente'],
            ['Reversão (art. 25)', 'Retorno do aposentado: por invalidez (junta declara insubsistentes os motivos) ou no interesse da administração', 'No interesse da administração exige pedido, aposentadoria voluntária, estabilidade, aposentadoria nos 5 anos anteriores e cargo vago'],
            ['Reintegração (art. 28)', 'Volta do estável quando a demissão é invalidada, com ressarcimento de todas as vantagens', 'Cargo extinto: disponibilidade; cargo ocupado: o ocupante é reconduzido, aproveitado ou posto em disponibilidade'],
            ['Recondução (art. 29)', 'Retorno do estável ao cargo anterior', 'Duas causas: inabilitação em estágio de outro cargo ou reintegração do anterior ocupante'],
            ['Aproveitamento (art. 30)', 'Retorno obrigatório de quem está em disponibilidade', 'Sem efeito se não entrar em exercício no prazo, salvo doença comprovada por junta (art. 32)'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Vacância (art. 33):** exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento.',
          '**Promoção e readaptação** são, ao mesmo tempo, forma de provimento (do novo cargo) e de vacância (do cargo antigo).',
          '**Exoneração de ofício** do efetivo (art. 34): quando não satisfeitas as condições do estágio ou quando, empossado, não entra em exercício no prazo.',
          '**Cargo em comissão** (art. 35): exoneração a juízo da autoridade competente ou a pedido.',
          '**Exoneração não é pena.** Demissão é penalidade e exige processo disciplinar.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Prazos em sequência',
        enunciado:
          'O ato de nomeação de uma médica foi publicado em 2 de março. Ela tomou posse no 28º dia e entrou em exercício 20 dias depois da posse. Qual a consequência, segundo a Lei 8.112?',
        resolucao:
          'A posse foi válida, dentro dos 30 dias do art. 13, § 1º. O exercício, porém, ultrapassou os 15 dias do art. 15, § 1º. Como já houve posse, ela é **exonerada** (art. 15, § 2º). Tornar sem efeito é a consequência da falta de posse, não da falta de exercício.',
      },
      {
        tipo: 'atencao',
        texto:
          'Não troque as consequências: **sem posse no prazo → ato de provimento tornado sem efeito**; **sem exercício no prazo → exoneração**. E não some os prazos: os 15 dias do exercício contam da **posse**, não da publicação. Outra pegadinha clássica: a **readaptação** não depende de vaga (o servidor atua como excedente), e a **reversão por invalidez** também não.',
      },
    ],
    fontes: [F_8112, F_CF, F_D12374],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- srv-8112-direitos ---------- */
  {
    temaId: 'srv-8112-direitos',
    titulo: 'Lei 8.112: vencimento, vantagens, férias, licenças e afastamentos',
    resumo:
      'Cai a lista de licenças do art. 81 com prazos e remuneração, as concessões do art. 97, as regras de férias e os percentuais dos adicionais (hora extra, noturno, férias).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Vencimento** é a retribuição pelo cargo, fixada em lei (art. 40). **Remuneração** é o vencimento mais as vantagens pecuniárias permanentes (art. 41). O vencimento acrescido das vantagens permanentes é **irredutível**, e nenhum servidor recebe remuneração inferior ao salário mínimo (art. 41, §§ 3º e 5º).\n\nAs **vantagens** são indenizações, gratificações e adicionais (art. 49). **Indenizações não se incorporam** ao vencimento para nenhum efeito; gratificações e adicionais se incorporam nos casos previstos em lei. Indenizações: **ajuda de custo, diárias, transporte e auxílio-moradia** (art. 51).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Vantagem', 'Regra da Lei 8.112', 'Artigo'],
          linhas: [
            ['Serviço extraordinário', 'Acréscimo de 50% sobre a hora normal; limite de 2 horas por jornada', 'Arts. 73 e 74'],
            ['Adicional noturno', 'Das 22 h às 5 h; valor-hora + 25%; hora de 52 min 30 s', 'Art. 75'],
            ['Adicional de férias', '1/3 da remuneração do período, pago independentemente de pedido', 'Art. 76'],
            ['Gratificação natalina', '1/12 da remuneração de dezembro por mês de exercício; fração de 15 dias ou mais conta como mês; paga até 20 de dezembro', 'Arts. 63 e 64'],
            ['Insalubridade × periculosidade', 'Quem tem direito aos dois deve optar por um', 'Art. 68, § 1º'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Férias (arts. 77 a 80):** 30 dias por ano, acumuláveis até **2 períodos** por necessidade do serviço. O primeiro período exige **12 meses de exercício**. Podem ser **parceladas em até 3 etapas**, se o servidor pedir e houver interesse da administração. É vedado descontar faltas das férias. A remuneração é paga até **2 dias antes** do início. A interrupção só ocorre por calamidade pública, comoção interna, convocação para júri, serviço militar ou eleitoral, ou necessidade do serviço declarada pela autoridade máxima.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Licença (art. 81)', 'Prazo', 'Remuneração'],
          linhas: [
            ['Doença em pessoa da família (art. 83)', 'A cada 12 meses: até 60 dias remunerados + até 90 dias sem remuneração; exige perícia', 'Parte com, parte sem'],
            ['Afastamento do cônjuge (art. 84)', 'Prazo indeterminado', 'Sem remuneração'],
            ['Serviço militar (art. 85)', 'Na forma da lei específica; depois, até 30 dias sem remuneração para reassumir', 'Conforme legislação'],
            ['Atividade política (art. 86)', 'Sem remuneração da convenção até a véspera do registro; do registro até o 10º dia após a eleição, com vencimentos por até 3 meses', 'Parte com, parte sem'],
            ['Capacitação (art. 87)', 'Até 3 meses após cada quinquênio, no interesse da administração; não acumulável', 'Com remuneração'],
            ['Interesses particulares (art. 91)', 'Até 3 anos consecutivos, a critério da administração; vedada em estágio probatório', 'Sem remuneração'],
            ['Mandato classista (art. 92)', 'Duração do mandato, renovável na reeleição', 'Sem remuneração'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Concessões (art. 97)**, sem qualquer prejuízo: **1 dia** para doar sangue; até **2 dias** para alistamento ou recadastramento eleitoral; **8 dias consecutivos** por casamento ou falecimento de cônjuge, companheiro, pais, madrasta ou padrasto, filhos, enteados, menor sob guarda ou tutela e irmãos.',
          '**Horário especial** (art. 98): ao estudante, com compensação; ao servidor com deficiência ou com cônjuge, filho ou dependente com deficiência, sem compensação, comprovada a necessidade por junta médica oficial.',
          '**Seguridade (arts. 202 a 211):** licença para tratamento de saúde com base em perícia (mais de 120 dias em 12 meses exige junta médica); gestante 120 dias; paternidade 5 dias; acidente em serviço com remuneração integral.',
          '**Afastamentos:** cessão (art. 93), mandato eletivo (art. 94), estudo ou missão no exterior até 4 anos (art. 95), organismo internacional com perda total da remuneração (art. 96) e pós-graduação stricto sensu no país (art. 96-A).',
          '**Direito de petição:** reconsideração e recurso em **30 dias** (art. 108); o direito de requerer prescreve em 5 anos (demissão, cassação, interesse patrimonial) ou em 120 dias nos demais casos (art. 110).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Licença por doença em pessoa da família',
        enunciado:
          'Um servidor precisou cuidar do pai internado e já usou 60 dias de licença remunerada no período de 12 meses. Pode obter mais licença pelo mesmo motivo no mesmo período?',
        resolucao:
          'Sim, mas **sem remuneração**: o art. 83, § 2º, admite até 60 dias com remuneração e até 90 dias sem remuneração a cada 12 meses, contados do deferimento da primeira licença. A assistência precisa ser indispensável e incompatível com o exercício do cargo ou com a compensação de horário (art. 83, § 1º).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas frequentes: a **licença para capacitação é remunerada** e a de **interesses particulares não é**; **licença ao cônjuge não tem prazo** e é sem remuneração; o servidor em **estágio probatório** só pode obter as licenças do art. 81, I a IV (família, cônjuge, serviço militar e atividade política) e os afastamentos dos arts. 94, 95 e 96, além de curso de formação (art. 20, § 4º). Hora extra é **50%**; adicional noturno é **25%**.',
      },
    ],
    fontes: [F_8112],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- srv-8112-disciplinar ---------- */
  {
    temaId: 'srv-8112-disciplinar',
    titulo: 'Lei 8.112: deveres, proibições, penalidades, sindicância e PAD',
    resumo:
      'É o tema mais cobrado da lei: qual pena cabe em cada infração, quem aplica, prazos de prescrição e os prazos de sindicância (30 + 30), PAD (60 + 60), defesa (10 dias) e julgamento (20 dias).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O servidor responde **civil, penal e administrativamente** (art. 121), e as sanções podem se **cumular**, sendo independentes entre si (art. 125). A responsabilidade administrativa só é afastada pela **absolvição criminal que negue a existência do fato ou a autoria** (art. 126). Absolvição por falta de provas não afasta a punição administrativa.\n\nOs **deveres** estão no art. 116 (zelo, lealdade, cumprir ordens salvo as manifestamente ilegais, sigilo, assiduidade, urbanidade, representar contra ilegalidade). As **proibições**, no art. 117. A **acumulação** de cargos é vedada salvo nos casos da CF e depende sempre de compatibilidade de horários (art. 118).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Penalidade (art. 127)', 'Quando cabe', 'Prescrição (art. 142)'],
          linhas: [
            ['Advertência (art. 129)', 'Por escrito: proibições do art. 117, I a VIII e XIX, e dever funcional sem gravidade maior', '180 dias'],
            ['Suspensão (art. 130)', 'Reincidência em falta de advertência e demais proibições sem demissão; máximo de 90 dias', '2 anos'],
            ['Demissão (art. 132)', 'Crime contra a administração, abandono, inassiduidade habitual, improbidade, corrupção, acumulação ilegal, art. 117, IX a XVI etc.', '5 anos'],
            ['Cassação de aposentadoria ou disponibilidade (art. 134)', 'Inativo que praticou, na atividade, falta punível com demissão', '5 anos'],
            ['Destituição de cargo em comissão (art. 135)', 'Não ocupante de cargo efetivo que comete infração sujeita a suspensão ou demissão', '5 anos'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Abandono de cargo** (art. 138): ausência **intencional** por **mais de 30 dias consecutivos**.',
          '**Inassiduidade habitual** (art. 139): **60 dias** de falta sem causa justificada, **interpoladamente**, em 12 meses.',
          '**Suspensão por recusa à inspeção médica** (art. 130, § 1º): até 15 dias, cessando quando cumprida a determinação. A suspensão pode virar **multa de 50%** por dia, com o servidor em serviço (§ 2º).',
          '**Cancelamento de registros** (art. 131): advertência após 3 anos e suspensão após 5 anos de efetivo exercício sem nova infração, sem efeito retroativo.',
          '**Competência** (art. 141): demissão e cassação pelo Presidente da República, presidentes das Casas Legislativas e dos tribunais federais e PGR; suspensão acima de 30 dias pela autoridade imediatamente inferior; advertência e suspensão até 30 dias pelo chefe da repartição; destituição de cargo em comissão por quem nomeou.',
          '**Prescrição:** corre da data em que o fato se tornou conhecido; a abertura de sindicância ou PAD **interrompe** até a decisão final (art. 142, §§ 1º e 3º). Segundo a **Súmula 635 do STJ**, o prazo começa quando a autoridade competente para instaurar o procedimento toma conhecimento do fato, é interrompido pelo primeiro ato de instauração válido (sindicância de caráter punitivo ou PAD) e volta a correr por inteiro após 140 dias da interrupção.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Procedimento', 'Prazo', 'Detalhe que cai'],
          linhas: [
            ['Sindicância (art. 145)', '30 dias, prorrogáveis por igual período', 'Pode resultar em arquivamento, advertência, suspensão até 30 dias ou abertura de PAD'],
            ['PAD (art. 152)', '60 dias da publicação do ato que constitui a comissão, prorrogáveis por igual prazo', 'Obrigatório para suspensão acima de 30 dias, demissão, cassação e destituição (art. 146)'],
            ['Afastamento preventivo (art. 147)', 'Até 60 dias, prorrogável por igual prazo, sem prejuízo da remuneração', 'É medida cautelar, não pena'],
            ['Defesa escrita (art. 161)', '10 dias; 20 dias (comum) se houver dois ou mais indiciados; 15 dias se citado por edital', 'Pode ser prorrogada pelo dobro para diligências'],
            ['Julgamento (art. 167)', '20 dias do recebimento do processo', 'Julgamento fora do prazo não gera nulidade (art. 169, § 1º)'],
            ['Rito sumário (art. 133)', 'Até 30 dias, prorrogáveis por até 15', 'Acumulação ilegal, abandono e inassiduidade; comissão de 2 servidores estáveis'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          'O PAD é conduzido por **comissão de 3 servidores estáveis**; o presidente deve ocupar cargo efetivo superior ou de mesmo nível, ou ter escolaridade igual ou superior à do indiciado (art. 149). Fases: **instauração, inquérito (instrução, defesa e relatório) e julgamento** (art. 151). O relatório é sempre conclusivo, e o julgamento acata o relatório, salvo se contrário às provas dos autos (art. 168). Na **revisão** (arts. 174 a 182), o ônus da prova é do requerente e não pode haver agravamento da pena.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Qual a pena?',
        enunciado:
          'Um servidor federal mantém o irmão como seu assessor direto em função de confiança. Foi a primeira infração. Qual penalidade a Lei 8.112 prevê?',
        resolucao:
          'Manter sob chefia imediata, em cargo ou função de confiança, cônjuge, companheiro ou parente até o 2º grau é proibição do **art. 117, VIII**. As proibições dos incisos I a VIII e XIX geram **advertência** (art. 129). Na reincidência, suspensão (art. 130). Já valer-se do cargo para proveito pessoal (inciso IX) gera demissão (art. 132, XIII).',
      },
      {
        tipo: 'atencao',
        texto:
          'Memorize as faixas do art. 117: **I a VIII e XIX → advertência**; **IX a XVI → demissão**; **XVII e XVIII → suspensão**. Sindicância só aplica **até 30 dias** de suspensão: acima disso é PAD. E cuidado: abandono exige **mais de 30 dias consecutivos**, enquanto inassiduidade são **60 dias intercalados** em 12 meses.',
      },
    ],
    fontes: [F_8112, F_STJ635],
    atualizadoEm: ATUALIZADO,
  },
];
