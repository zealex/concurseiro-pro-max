import type { ResumoTema } from '../../../types';
import { ATUALIZADO, LEI_10741, LEI_10778, LEI_11340, LEI_13431, LEI_14344, LEI_8069 } from './fontes';

export const RESUMOS_1: ResumoTema[] = [
  /* ---------- lg-maria-penha ---------- */
  {
    temaId: 'lg-maria-penha',
    titulo: 'Lei Maria da Penha (Lei 11.340/2006)',
    resumo:
      'A banca cobra o conceito de violência doméstica (art. 5º), as formas de violência do art. 7º, as medidas protetivas e os deveres da saúde: atendimento prioritário no SUS, profilaxias após violência sexual e a notificação compulsória da Lei 10.778/2003. As alterações de 2023 a 2026 caem muito.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Pelo **art. 5º**, configura violência doméstica e familiar contra a mulher qualquer **ação ou omissão baseada no gênero** que lhe cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial, em três âmbitos: **unidade doméstica** (convívio permanente, com ou sem vínculo familiar, inclusive pessoas esporadicamente agregadas), **família** e **qualquer relação íntima de afeto**, em que o agressor conviva ou tenha convivido com a ofendida, **independentemente de coabitação**. As relações independem de **orientação sexual** (parágrafo único).\n\nO **art. 40-A** (Lei 14.550/2023) manda aplicar a lei a todas as situações do art. 5º, **independentemente da causa ou da motivação** dos atos de violência e da condição do ofensor ou da ofendida. O **art. 41** afasta a **Lei 9.099/1995** nesses crimes, **qualquer que seja a pena**, e o **art. 17** proíbe **cesta básica**, outras prestações pecuniárias e **multa isolada**.\n\nPara o médico, o ponto central é o **art. 9º**: a assistência à mulher é prestada **em caráter prioritário no SUS** e no Susp (redação da Lei 14.887/2024). Nos casos de violência sexual, a assistência compreende **contracepção de emergência**, **profilaxia das IST e do HIV/aids** e outros procedimentos médicos necessários (§ 3º). O agressor deve **ressarcir o SUS** pelos custos do tratamento, conforme a tabela SUS (§ 4º), sem que isso funcione como atenuante (§ 6º).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Forma (art. 7º)', 'Conceito resumido', 'Exemplo'],
          linhas: [
            ['I — Física', 'Conduta que ofenda a integridade ou a saúde corporal', 'Empurrões, socos, queimaduras'],
            ['II — Psicológica', 'Dano emocional, diminuição da autoestima, controle de ações e decisões por ameaça, humilhação, isolamento, vigilância constante, perseguição contumaz etc.', 'Proibir de ver a família, vigiar o celular'],
            ['III — Sexual', 'Constranger a presenciar, manter ou participar de relação não desejada; impedir método contraceptivo; forçar matrimônio, gravidez, aborto ou prostituição', 'Esconder o anticoncepcional da companheira'],
            ['IV — Patrimonial', 'Retenção, subtração ou destruição de objetos, instrumentos de trabalho, documentos, bens e recursos', 'Reter os documentos e o cartão do salário'],
            ['V — Moral', 'Calúnia, difamação ou injúria', 'Espalhar que a mulher furtou o patrão'],
            ['VI — Vicária (Lei 15.384/2026)', 'Violência contra descendente, ascendente, dependente, enteado, parente, pessoa sob guarda da mulher ou de sua rede de apoio, com vistas a atingi-la', 'Agredir o filho para fazer a mãe sofrer'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Regra', 'Conteúdo', 'Base'],
          linhas: [
            ['Notificação compulsória', 'Casos com indícios ou confirmação de violência contra a mulher atendida em serviço de saúde público ou privado', 'Lei 10.778/2003, art. 1º'],
            ['Comunicação à polícia', 'Os mesmos casos são comunicados à autoridade policial em até 24 horas, para providências e fins estatísticos', 'Lei 10.778/2003, art. 1º, § 4º'],
            ['Sigilo', 'A notificação compulsória tem caráter sigiloso e obriga as autoridades sanitárias que a recebem', 'Lei 10.778/2003, art. 3º'],
            ['Prova', 'Laudos ou prontuários médicos de hospitais e postos de saúde são admitidos como meio de prova', 'Art. 12, § 3º'],
            ['Polícia', 'Encaminhar a ofendida ao hospital ou posto de saúde e ao IML; determinar o exame de corpo de delito', 'Arts. 11, II, e 12, IV'],
            ['Expediente ao juiz', 'A autoridade policial remete o pedido de medidas protetivas em 48 horas; o juiz decide em 48 horas', 'Arts. 12, III, e 18'],
            ['Afastamento imediato do lar', 'Pelo juiz; pelo delegado, se o Município não for sede de comarca; pelo policial, se também não houver delegado disponível. Juiz comunicado em 24 horas', 'Art. 12-C'],
            ['Monitoração eletrônica', 'Medida protetiva do art. 22, VIII, com dispositivo que alerta a vítima; havendo risco atual ou iminente, o agressor é submetido de imediato à monitoração pelo juiz ou, se o Município não for sede de comarca, pelo delegado (Lei 15.383/2026)', 'Arts. 12-D e 22, VIII'],
            ['Descumprimento de medida protetiva', 'Crime: reclusão de 2 a 5 anos e multa; em flagrante, só o juiz concede fiança', 'Art. 24-A'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          'Medidas protetivas: concedidas pelo juiz a requerimento do **Ministério Público** ou a **pedido da ofendida**, de imediato, **sem audiência das partes** (art. 19, § 1º).',
          'Elas valem **independentemente** da tipificação penal, de ação penal ou cível, de inquérito ou de **boletim de ocorrência**, e vigoram **enquanto persistir o risco** (art. 19, §§ 5º e 6º).',
          'Medidas que obrigam o agressor (art. 22): restrição de armas, afastamento do lar, proibição de aproximação e de contato, restrição de visitas, alimentos, reeducação, acompanhamento psicossocial e monitoração eletrônica.',
          'Medidas à ofendida (art. 23): entre outras, separação de corpos e **auxílio-aluguel por até 6 meses**.',
          'A renúncia à representação só é admitida **perante o juiz**, em audiência designada para isso, **antes do recebimento da denúncia** (art. 16).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Plantão de pronto-socorro',
        enunciado:
          'Mulher de 28 anos chega ao PS após violência sexual praticada pelo ex-namorado, com quem nunca morou. Ela não quer registrar ocorrência. Quais deveres e direitos se aplicam?',
        resolucao:
          'É violência doméstica (relação íntima de afeto, independentemente de coabitação — art. 5º, III). Ela tem atendimento prioritário no SUS, com contracepção de emergência e profilaxia de IST/HIV (art. 9º, § 3º). O serviço faz a notificação compulsória e a comunicação à autoridade policial em 24 horas (Lei 10.778/2003, art. 1º e § 4º). A falta de boletim de ocorrência não impede medida protetiva (art. 19, § 5º).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) o rol do art. 7º é **exemplificativo** (“entre outras”); (b) não é preciso **coabitação** nem relação heterossexual; (c) a medida protetiva **não depende de B.O.** nem de inquérito; (d) o crime do art. 24-A hoje tem pena de **reclusão de 2 a 5 anos** (Lei 14.994/2024), e não mais detenção de 3 meses a 2 anos; (e) a **violência vicária** (inciso VI, Lei 15.384/2026) é a forma mais nova; (f) a Lei 9.099 não se aplica aos crimes com violência doméstica contra a mulher **independentemente da pena prevista**, ainda que baixa (art. 41).',
      },
    ],
    fontes: [LEI_11340, LEI_10778],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- lg-eca ---------- */
  {
    temaId: 'lg-eca',
    titulo: 'ECA (Lei 8.069/1990), escuta especializada e Lei Henry Borel',
    resumo:
      'Para o médico, o ECA cai em três pontos: a comunicação obrigatória ao Conselho Tutelar (art. 13), a infração administrativa do art. 245 e os deveres dos hospitais (arts. 10 e 12). Completam o tema a escuta especializada e o depoimento especial (Lei 13.431/2017) e a Lei Henry Borel (Lei 14.344/2022).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O ECA adota a **proteção integral**. **Criança** é a pessoa até **12 anos incompletos**; **adolescente**, entre **12 e 18 anos** (art. 2º). Excepcionalmente, nos casos expressos em lei, o Estatuto se aplica a pessoas entre 18 e 21 anos. O **art. 4º** impõe à família, à comunidade, à sociedade e ao poder público a **absoluta prioridade**, que inclui a **primazia de receber proteção e socorro** e a **precedência de atendimento** nos serviços públicos.\n\nO **art. 13** é o mais cobrado: os casos de **suspeita ou confirmação** de **castigo físico, tratamento cruel ou degradante e maus-tratos** contra criança ou adolescente serão **obrigatoriamente comunicados ao Conselho Tutelar** da respectiva localidade, sem prejuízo de outras providências legais. Basta a suspeita: o médico não precisa ter certeza nem provas.\n\nQuem se omite responde pelo **art. 245**, uma **infração administrativa** (não é crime): deixar o **médico, professor ou responsável por estabelecimento de atenção à saúde** e de ensino fundamental, pré-escola ou creche de comunicar à autoridade competente os casos de suspeita ou confirmação de maus-tratos. Pena: **multa de 3 a 20 salários de referência**, aplicada em **dobro** na reincidência. Já a **Lei Henry Borel** criou um **crime** (art. 26): deixar de comunicar à autoridade pública a prática de violência contra criança ou adolescente, com detenção de 6 meses a 3 anos.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Dever do serviço de saúde', 'Conteúdo', 'Base'],
          linhas: [
            ['Prontuário de gestantes', 'Hospitais e estabelecimentos de atenção à gestante mantêm prontuários individuais por 18 anos', 'ECA, art. 10, I'],
            ['Identificação do RN', 'Impressão plantar e digital do recém-nascido e digital da mãe', 'ECA, art. 10, II'],
            ['Triagem neonatal', 'Exames para diagnóstico de anormalidades do metabolismo do RN, com orientação aos pais', 'ECA, art. 10, III'],
            ['Alojamento conjunto', 'Permanência do neonato junto à mãe', 'ECA, art. 10, V'],
            ['Acompanhante', 'Condições para a permanência em tempo integral de um dos pais ou responsável na internação de criança ou adolescente', 'ECA, art. 12'],
            ['Acompanhante da gestante', 'Um acompanhante de sua preferência no pré-natal, no trabalho de parto e no pós-parto imediato', 'ECA, art. 8º, § 6º'],
            ['Entrega para adoção', 'Gestante ou mãe que manifeste interesse é encaminhada, sem constrangimento, à Justiça da Infância e da Juventude', 'ECA, art. 13, § 1º'],
            ['Vacinação', 'Obrigatória nos casos recomendados pelas autoridades sanitárias', 'ECA, art. 14, § 1º'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Instituto', 'O que é', 'Base'],
          linhas: [
            ['Escuta especializada', 'Entrevista sobre a violência perante órgão da rede de proteção (saúde, assistência, escola), com relato limitado ao estritamente necessário', 'Lei 13.431/2017, art. 7º'],
            ['Depoimento especial', 'Oitiva da criança ou do adolescente perante autoridade policial ou judiciária, gravada em áudio e vídeo', 'Lei 13.431/2017, arts. 8º e 12, VI'],
            ['Rito cautelar obrigatório', 'Antecipação de prova quando a vítima tiver menos de 7 anos ou em caso de violência sexual', 'Lei 13.431/2017, art. 11, § 1º'],
            ['Dever de comunicar', 'Qualquer pessoa que presencie ou saiba de violência comunica ao serviço de denúncias, ao Conselho Tutelar ou à polícia', 'Lei 13.431/2017, art. 13; Lei 14.344/2022, art. 23'],
            ['Vestígios', 'Coleta e guarda de material com vestígios pelo IML ou por serviço de saúde credenciado mais próximo', 'Lei 13.431/2017, art. 18'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Fratura suspeita na UBS',
        enunciado:
          'Médica de UBS atende criança de 3 anos com fratura de úmero e equimoses em diferentes fases. A mãe diz que a criança “caiu do sofá”. A médica pode aguardar exames para ter certeza antes de comunicar?',
        resolucao:
          'Não. O art. 13 do ECA exige a comunicação ao Conselho Tutelar já na **suspeita**. Se ela deixar de comunicar, incorre na infração administrativa do art. 245 (multa de 3 a 20 salários de referência). A criança tem menos de 7 anos: se houver depoimento especial, seguirá o rito cautelar de antecipação de prova (Lei 13.431/2017, art. 11, § 1º, I).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) o art. 245 é **infração administrativa punida com multa**, e não crime; o crime de omissão de comunicar está no **art. 26 da Lei Henry Borel**; (b) o destinatário do art. 13 é o **Conselho Tutelar**, e não o juiz ou o Ministério Público; (c) o Conselho Tutelar é **órgão permanente e autônomo, não jurisdicional** (art. 131), com **5 membros** e mandato de **4 anos** (art. 132); (d) o afastamento da criança do convívio familiar é de **competência exclusiva do juiz** (art. 101, § 2º); (e) o art. 233 do ECA (tortura contra criança) foi **revogado** pela Lei 9.455/1997.',
      },
    ],
    fontes: [LEI_8069, LEI_13431, LEI_14344],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- lg-pessoa-idosa ---------- */
  {
    temaId: 'lg-pessoa-idosa',
    titulo: 'Estatuto da Pessoa Idosa (Lei 10.741/2003)',
    resumo:
      'A banca cobra as idades (60, 65 e 80 anos), a prioridade, os direitos na saúde (acompanhante, opção de tratamento) e a notificação compulsória da violência (art. 19). Atenção à nomenclatura “pessoa idosa” (Lei 14.423/2022) e às mudanças penais da Lei 15.163/2025.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O Estatuto regula os direitos das pessoas com idade **igual ou superior a 60 anos** (art. 1º). Desde a **Lei 14.423/2022**, o texto usa “**pessoa idosa**” no lugar de “idoso”. Família, comunidade, sociedade e poder público devem assegurar à pessoa idosa, com **absoluta prioridade**, os direitos fundamentais (art. 3º). Entre as pessoas idosas, os **maiores de 80 anos** têm **prioridade especial** (art. 3º, § 2º), inclusive em todo atendimento de saúde, **exceto em caso de emergência** (art. 15, § 7º).\n\nNa saúde, o **art. 15** garante atenção integral pelo SUS, fornecimento gratuito de medicamentos (sobretudo os de uso continuado), órteses e próteses, e veda a cobrança de valores diferenciados **em razão da idade** pelos planos de saúde (§ 3º). A pessoa idosa enferma não pode ser obrigada a comparecer a órgão público (§ 5º).\n\nO **art. 19** é o dever mais importante para o médico: os casos de **suspeita ou confirmação de violência** contra pessoa idosa são objeto de **notificação compulsória** pelos serviços de saúde públicos e privados **à autoridade sanitária** e, além disso, **obrigatoriamente comunicados** à autoridade policial, ao Ministério Público ou aos Conselhos Municipal, Estadual ou Nacional da Pessoa Idosa. Violência, aqui, é qualquer ação ou omissão, em local público ou privado, que cause morte, dano ou sofrimento físico ou psicológico (§ 1º).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Idade', 'Regra', 'Base'],
          linhas: [
            ['60 anos ou mais', 'Sujeito do Estatuto; prioridade na tramitação de processos judiciais e administrativos', 'Arts. 1º e 71'],
            ['65 anos ou mais', 'Benefício mensal de 1 salário mínimo (Loas), se não houver meios de subsistência', 'Art. 34'],
            ['65 anos ou mais', 'Gratuidade no transporte coletivo público urbano e semiurbano; entre 60 e 65 anos, depende da legislação local', 'Art. 39 e § 3º'],
            ['80 anos ou mais', 'Prioridade especial sobre as demais pessoas idosas, inclusive nos processos e no atendimento de saúde (salvo emergência)', 'Arts. 3º, § 2º; 15, § 7º; 71, § 5º'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Acompanhante** (art. 16): à pessoa idosa internada ou em observação; cabe ao profissional de saúde responsável **autorizar** o acompanhamento ou, se impossível, **justificar por escrito**.',
          '**Opção de tratamento** (art. 17): a pessoa idosa lúcida escolhe o tratamento. Se não puder, decide o **curador** (se interditada), os **familiares** (sem curador ou sem contato a tempo), o **médico** em iminente risco de vida sem tempo de consulta, ou o **médico** quando não houver curador nem familiar conhecido — neste caso, ele **comunica o Ministério Público**.',
          '**Infração administrativa** (art. 57): profissional de saúde ou responsável por estabelecimento de saúde ou ILPI que deixa de comunicar crimes contra pessoa idosa: multa de R$ 500 a R$ 3.000, em dobro na reincidência.',
          '**Crimes**: são de **ação penal pública incondicionada** (art. 95). Desde a Lei 15.163/2025, **não se aplica a Lei 9.099/1995** aos crimes do Estatuto nem aos crimes praticados com violência contra a pessoa idosa (art. 94, parágrafo único).',
          'Art. 97: deixar de prestar assistência à pessoa idosa em perigo, ou **recusar, retardar ou dificultar sua assistência à saúde** sem justa causa: detenção de 6 meses a 1 ano e multa.',
          'Art. 98: **abandonar** a pessoa idosa em hospitais, casas de saúde ou ILPI: detenção de 6 meses a 3 anos e multa.',
          'Art. 99: expor a perigo a integridade e a saúde da pessoa idosa, com condições desumanas ou privação de alimentos e cuidados: **reclusão de 2 a 5 anos** (Lei 15.163/2025).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Idosa com lesões e desnutrição',
        enunciado:
          'Médico de pronto atendimento recebe mulher de 82 anos, levada pela vizinha, com úlceras de pressão infectadas, desnutrição e relato de que fica trancada sozinha. O que a lei exige do serviço?',
        resolucao:
          'Há suspeita de violência (negligência e maus-tratos). O serviço faz a **notificação compulsória à autoridade sanitária** e a **comunicação obrigatória** a um dos órgãos do art. 19 (polícia, MP ou Conselho da Pessoa Idosa). Se o profissional deixar de comunicar crime contra pessoa idosa, responde pela infração do art. 57. Por ter mais de 80 anos, ela tem preferência especial, salvo diante de uma emergência de outro paciente.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) o Estatuto começa aos **60 anos**; o BPC e a gratuidade plena no transporte, aos **65**; a prioridade especial, aos **80**; (b) a notificação do art. 19 vai à **autoridade sanitária**, e a comunicação vai a **qualquer** dos órgãos listados — não é preciso comunicar a todos; (c) a prioridade dos maiores de 80 anos **cede diante de emergência**; (d) o art. 57 é **multa administrativa**, enquanto os arts. 96 a 108 são crimes; (e) a pena do art. 99 subiu para **reclusão de 2 a 5 anos** em 2025.',
      },
    ],
    fontes: [LEI_10741],
    atualizadoEm: ATUALIZADO,
  },
];
