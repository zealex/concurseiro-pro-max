import type { CheatSheet } from './types';

/**
 * Cheat sheets de revisão rápida.
 * Intervalos de tempo em tanatologia variam com clima, compleição, vestes e causa da morte;
 * as faixas abaixo seguem a doutrina brasileira clássica (França) e a banca cobra a faixa do autor.
 */
export const CHEAT_SHEETS: CheatSheet[] = [
  {
    id: 'cronotanatognose',
    titulo: 'Cronotanatognose e fenômenos cadavéricos',
    eixo: 'legal',
    resumo:
      'Estimativa do intervalo post mortem pela combinação de fenômenos abióticos consecutivos (resfriamento, livores, rigidez, desidratação) e transformativos (putrefação). Nenhum sinal isolado é preciso: o laudo usa a convergência de vários.',
    tabelas: [
      {
        titulo: 'Fenômenos abióticos consecutivos',
        colunas: ['Fenômeno', 'Início / aparecimento', 'Evolução', 'Pontos de prova'],
        linhas: [
          ['Resfriamento (algor mortis)', 'Logo após a morte', '≈ 0,5 °C/h nas primeiras 3 h; depois ≈ 1 °C/h até equilibrar com o ambiente', 'Mais lento em obesos, vestidos e ambiente quente; medida retal'],
          ['Livores de hipóstase', 'Primeiras horas (manchas isoladas)', 'Confluem nas horas seguintes; fixam-se por volta de 8–12 h', 'Antes da fixação mudam com a posição do corpo; livores em local incompatível = corpo movido'],
          ['Rigidez cadavérica (rigor mortis)', '1–2 h (mandíbula e nuca)', 'Generaliza-se em ≈ 6–8 h; desfaz-se em ≈ 24–48 h com a putrefação', 'Lei de Nysten: mandíbula/nuca → membros superiores → tronco → membros inferiores; desaparece na mesma ordem'],
          ['Espasmo cadavérico', 'Instantâneo', 'Rigidez sem flacidez prévia', 'Mortes súbitas com grande tensão (ex.: arma empunhada)'],
          ['Mancha negra da esclerótica (Sommer-Larcher)', 'Algumas horas, com olhos abertos', 'Triangular, de base voltada para a córnea', 'Sinal de desidratação'],
          ['Turvação da córnea', 'Poucas horas com olhos abertos', 'Até ≈ 24 h com olhos fechados', 'Desidratação'],
        ],
      },
      {
        titulo: 'Putrefação (fenômeno transformativo destrutivo)',
        colunas: ['Período', 'Quando', 'Sinais'],
        linhas: [
          ['Coloração', '≈ 18–24 h (mais cedo no verão)', 'Mancha verde abdominal na fossa ilíaca direita (no afogado começa no tórax/esterno)'],
          ['Gasoso (enfisematoso)', 'A partir do 2º–3º dia, por cerca de uma semana ou mais', 'Circulação póstuma de Brouardel, flictenas, enfisema, face e genitais volumosos, protrusão de língua e olhos'],
          ['Coliquativo', 'Semanas', 'Dissolução pútrida das partes moles; cristais de Westenhöffer-Rocha-Valverde no sangue putrefeito'],
          ['Esqueletização', 'Meses a anos (≈ 3 anos em sepultura comum)', 'Ossos livres de partes moles'],
        ],
      },
      {
        titulo: 'Fenômenos conservadores',
        colunas: ['Fenômeno', 'Condição ambiental', 'Aspecto'],
        linhas: [
          ['Mumificação', 'Quente, seco e ventilado', 'Pele dura, escura, aderida aos ossos; corpo leve'],
          ['Saponificação (adipocera)', 'Úmido, argiloso, pouco arejado', 'Substância untuosa, amarelada, com odor rançoso'],
          ['Corificação', 'Urnas metálicas hermeticamente fechadas', 'Pele com aspecto de couro curtido'],
          ['Calcificação', 'Feto morto retido', 'Litopédio'],
          ['Maceração', 'Meio líquido (asséptica: feto morto retido; séptica: afogados)', 'Destacamento da epiderme, "mãos de lavadeira"'],
        ],
      },
    ],
    pegadinhas: [
      'Livores e rigidez são abióticos CONSECUTIVOS — não imediatos.',
      'Espasmo cadavérico não passa pela fase de flacidez.',
      'Autólise e putrefação são transformativos DESTRUTIVOS; mumificação e saponificação, CONSERVADORES.',
      'Mancha verde começa na fossa ilíaca direita, exceto no afogado (tórax).',
      'Declaração de Óbito em morte violenta ou suspeita: médico legista do IML (Res. CFM 1.779/2005).',
    ],
    fontes: ['Genival Veloso de França — Medicina Legal', 'Hygino de C. Hércules — Medicina Legal: Texto e Atlas', 'Resolução CFM 1.779/2005'],
  },
  {
    id: 'paf',
    titulo: 'Orifícios de projétil de arma de fogo (PAF)',
    eixo: 'legal',
    resumo:
      'O PAF produz ferida perfurocontusa. O orifício de entrada carrega as orlas (ação do projétil) e, a curta distância, as zonas (efeitos secundários do tiro: gases, fuligem, grãos de pólvora, chama).',
    tabelas: [
      {
        titulo: 'Entrada × saída',
        colunas: ['Característica', 'Entrada', 'Saída'],
        linhas: [
          ['Forma', 'Arredondada (tiro perpendicular) ou ovalada (oblíquo)', 'Irregular, estrelada, em fenda'],
          ['Bordas', 'Invertidas (voltadas para dentro)', 'Evertidas (voltadas para fora)'],
          ['Tamanho', 'Em geral menor que o projétil (elasticidade da pele)', 'Em geral maior que a entrada'],
          ['Orla de escoriação (contusão)', 'Presente', 'Ausente (exceto pele apoiada em superfície rígida)'],
          ['Orla de enxugo', 'Presente (projétil "limpa" impurezas na pele)', 'Ausente'],
          ['Zonas de tatuagem/esfumaçamento', 'Presentes a curta distância', 'Ausentes'],
          ['Sangramento', 'Menor', 'Maior'],
        ],
      },
      {
        titulo: 'Distância do disparo',
        colunas: ['Distância', 'Achados'],
        linhas: [
          ['Encostado', 'Gases penetram no subcutâneo: ferida irregular; câmara de mina de Hoffmann (sobre plano ósseo); sinal de Werkgaertner (impressão da boca do cano e da massa de mira); sinal de Benassi (fuligem na tábua óssea externa)'],
          ['Curta distância (dentro do alcance dos resíduos)', 'Orlas + zona de tatuagem (grãos incrustados — NÃO sai na lavagem) + zona de esfumaçamento (fuligem — sai na lavagem) ± zona de chamuscamento (chama)'],
          ['Longa distância (fora do alcance dos resíduos)', 'Apenas orlas de escoriação e de enxugo; sem tatuagem nem esfumaçamento'],
        ],
        nota: 'O alcance dos resíduos depende da arma e da munição — por isso a perícia compara com disparos-teste.',
      },
      {
        titulo: 'Sinais em osso',
        colunas: ['Sinal', 'Significado'],
        linhas: [
          ['Funil (cone) de Bonnet', 'Orifício ósseo em tronco de cone com a base maior voltada para o sentido do disparo: na entrada do crânio, bisel na tábua interna; na saída, na tábua externa'],
          ['Sinal de Benassi', 'Halo de fuligem na tábua externa ao redor do orifício — disparo encostado'],
        ],
      },
    ],
    pegadinhas: [
      'Tatuagem não sai na lavagem; esfumaçamento sai.',
      'Ausência de tatuagem/esfumaçamento não prova longa distância se havia anteparo (roupa) entre a arma e a pele.',
      'Câmara de mina de Hoffmann = disparo encostado sobre plano ósseo.',
      'Orifício de saída pode ter orla de escoriação quando a pele está apoiada (ex.: encostada na parede).',
      'Projéteis múltiplos (espingarda): a dispersão dos bagos ("rosa de tiro") estima a distância.',
    ],
    fontes: ['Genival Veloso de França — Medicina Legal', 'Hygino de C. Hércules — Medicina Legal: Texto e Atlas'],
  },
  {
    id: 'asfixias',
    titulo: 'Asfixias mecânicas',
    eixo: 'legal',
    resumo:
      'Sinais gerais (cianose, petéquias — manchas de Tardieu, congestão polivisceral, sangue escuro e fluido) são inespecíficos; o diagnóstico vem dos sinais próprios de cada modalidade.',
    tabelas: [
      {
        titulo: 'Constrição do pescoço',
        colunas: ['', 'Enforcamento', 'Estrangulamento', 'Esganadura'],
        linhas: [
          ['Agente constritor', 'Laço + peso do próprio corpo', 'Laço + força alheia (ou do próprio)', 'Mãos'],
          ['Direção do sulco', 'Oblíquo ascendente', 'Horizontal', 'Sem sulco'],
          ['Continuidade', 'Descontínuo (interrompido no nó)', 'Contínuo', '—'],
          ['Profundidade', 'Desigual (maior no lado oposto ao nó)', 'Uniforme', '—'],
          ['Altura', 'Acima da cartilagem tireoide', 'Na altura ou abaixo da tireoide', 'Lesões no pescoço anterior e lateral'],
          ['Fundo', 'Apergaminhado', 'Menos apergaminhado', 'Estigmas ungueais (escoriações semilunares) e equimoses digitais'],
          ['Etiologia mais comum', 'Suicídio', 'Homicídio', 'Sempre homicídio'],
          ['Sinais clássicos', 'Amussat (rotura transversal da íntima da carótida); livores em membros inferiores na suspensão completa', 'Face cianótica e petéquias acentuadas', 'Fraturas de hioide e cartilagem tireoide'],
        ],
      },
      {
        titulo: 'Outras asfixias',
        colunas: ['Modalidade', 'Mecanismo', 'Achados'],
        linhas: [
          ['Afogamento', 'Penetração de líquido nas vias aéreas', 'Cogumelo de espuma, manchas de Paltauf (subpleurais), enfisema aquoso, água no estômago, diatomáceas em órgãos; afogado azul (asfíctico) × branco (sincopal)'],
          ['Sufocação direta', 'Oclusão de boca/narinas ou corpo estranho nas vias aéreas', 'Lesões perioral/nasal; corpo estranho'],
          ['Sufocação indireta', 'Compressão do tórax/abdome', 'Máscara equimótica de Morestin (cianose cervicofacial com petéquias)'],
          ['Soterramento', 'Vias aéreas obstruídas por material sólido/pulverulento', 'Material nas vias aéreas e no estômago (sinal de vida)'],
          ['Confinamento', 'Ambiente fechado sem renovação de ar', 'Sinais gerais de asfixia'],
        ],
      },
    ],
    pegadinhas: [
      'Não existe esganadura suicida.',
      'Sulco de enforcamento é oblíquo e descontínuo; de estrangulamento, horizontal e contínuo.',
      '"Mãos de lavadeira" indicam permanência na água, não afogamento em vida.',
      'Petéquias de Tardieu são sinal geral (inespecífico) de asfixia.',
    ],
    fontes: ['Genival Veloso de França — Medicina Legal', 'Hygino de C. Hércules — Medicina Legal: Texto e Atlas'],
  },
  {
    id: 'ibe',
    titulo: 'Indicadores biológicos de exposição (NR-07, Anexo I)',
    eixo: 'trabalho',
    resumo:
      'Quadro 1 = IBE/EE (exposição excessiva; sem significado diagnóstico). Quadro 2 = IBE/SC (significado clínico; indica disfunção/efeito). Valores transcritos da Portaria MTP 567/2022 — confira no texto oficial antes de usar profissionalmente.',
    tabelas: [
      {
        titulo: 'Principais agentes',
        colunas: ['Agente', 'Indicador', 'Coleta', 'Valor', 'Quadro'],
        linhas: [
          ['Chumbo inorgânico', 'Chumbo no sangue (Pb-S)', 'NC', '60 µg/100 mL', '2 (IBE/SC)'],
          ['Mercúrio metálico', 'Mercúrio na urina', 'AJ', '20 µg/g creatinina', '1 (IBE/EE)'],
          ['Benzeno', 'Ácido S-fenilmercaptúrico (S-PMA) na urina', 'FJ', '45 µg/g creatinina', '1'],
          ['Benzeno', 'Ácido trans,trans-mucônico (TTMA) na urina', 'FJ', '750 µg/g creatinina', '1'],
          ['Tolueno', 'Tolueno no sangue', 'AJFS', '0,02 mg/L', '1'],
          ['Tolueno', 'Tolueno na urina', 'FJ', '0,03 mg/L', '1'],
          ['Tolueno', 'Orto-cresol na urina (H)', 'FJ', '0,3 mg/g creatinina', '1'],
          ['Xilenos', 'Ácidos metil-hipúricos na urina', 'FJ', '1,5 g/g creatinina', '1'],
          ['n-Hexano', '2,5-hexanodiona na urina (SH)', 'FJ', '0,5 mg/L', '1'],
          ['Estireno', 'Ácidos mandélico + fenilglioxílico na urina', 'FJ', '400 mg/g creatinina', '1'],
          ['Monóxido de carbono', 'Carboxi-hemoglobina', 'FJ', '3,5% da hemoglobina (não fumantes)', '1'],
          ['Inseticidas inibidores da colinesterase', 'Acetilcolinesterase eritrocitária', 'FJ', '70% da atividade basal', '2 (IBE/SC)'],
          ['Inseticidas inibidores da colinesterase', 'Butilcolinesterase plasmática/sérica', 'FJ', '60% da atividade basal', '2 (IBE/SC)'],
          ['Cádmio', 'Cádmio na urina', 'NC', '5 µg/g creatinina', '2 (IBE/SC)'],
          ['Cromo hexavalente', 'Cromo na urina', 'FJFS', '25 µg/L', '1'],
          ['Metanol', 'Metanol na urina', 'FJ', '15 mg/L', '1'],
          ['Arsênio', 'Arsênio inorgânico + metabólitos metilados na urina', 'FS', '35 µg/L', '1'],
          ['Fenol', 'Fenol na urina (H)', 'FJ', '250 mg/g creatinina', '1'],
          ['Tricloroetileno', 'Ácido tricloroacético na urina', 'FJFS', '15 mg/L', '1'],
        ],
        nota: 'Mulheres em idade fértil com Pb-S a partir de 30 µg/100 mL devem ser afastadas da exposição. Atividade basal das colinesterases = pré-ocupacional, após ≥ 30 dias sem exposição.',
      },
      {
        titulo: 'Momentos de coleta',
        colunas: ['Sigla', 'Significado'],
        linhas: [
          ['AJ', 'Antes da jornada'],
          ['FJ', 'Final da jornada'],
          ['AJFS', 'Início da última jornada da semana'],
          ['FJFS', 'Final do último dia de jornada da semana'],
          ['FS', 'Após 4 ou 5 jornadas consecutivas'],
          ['AJ48', 'Antes da jornada, com no mínimo 48 h sem exposição'],
          ['NC', 'Não crítica — qualquer momento, desde que o trabalhador esteja em atividade nas últimas semanas'],
        ],
      },
    ],
    pegadinhas: [
      'IBE/EE não tem significado diagnóstico — indica exposição acima do esperado.',
      'Chumbo no sangue e colinesterases estão no Quadro 2 (significado clínico).',
      'Organofosforados: inibição irreversível; carbamatos: reversível.',
      'Benzeno: S-PMA e TTMA são coletados no final da jornada.',
    ],
    fontes: ['NR-07, Anexo I — redação da Portaria MTP 567/2022'],
  },
  {
    id: 'lesao-corporal',
    titulo: 'Lesão corporal (CP Art. 129) e quesitos',
    eixo: 'legal',
    resumo: 'A natureza da lesão é definida pelo resultado. O laudo responde aos quesitos oficiais; o "mais de 30 dias" exige exame complementar (CPP 168).',
    tabelas: [
      {
        titulo: 'Classificação',
        colunas: ['Natureza', 'Resultados'],
        linhas: [
          ['Leve (caput)', 'Residual: não se enquadra em grave nem em gravíssima'],
          ['Grave (§1º)', 'Incapacidade para as ocupações habituais por mais de 30 dias · perigo de vida · debilidade permanente de membro, sentido ou função · aceleração de parto'],
          ['Gravíssima (§2º)', 'Incapacidade permanente para o trabalho · enfermidade incurável · perda ou inutilização do membro, sentido ou função · deformidade permanente · aborto'],
          ['Seguida de morte (§3º)', 'Lesão dolosa com resultado morte culposo'],
        ],
      },
      {
        titulo: 'Pares que a banca troca',
        colunas: ['Grave', 'Gravíssima'],
        linhas: [
          ['Incapacidade para ocupações habituais > 30 dias', 'Incapacidade permanente para o trabalho'],
          ['Debilidade permanente', 'Perda ou inutilização'],
          ['Aceleração de parto', 'Aborto'],
        ],
      },
      {
        titulo: 'Quesitos oficiais clássicos (modelo; podem variar por estado)',
        colunas: ['Nº', 'Quesito'],
        linhas: [
          ['1º', 'Há ofensa à integridade corporal ou à saúde do(a) examinado(a)?'],
          ['2º', 'Qual o instrumento ou meio que produziu a ofensa?'],
          ['3º', 'Foi produzida por meio de veneno, fogo, explosivo, asfixia ou tortura, ou por outro meio insidioso ou cruel?'],
          ['4º', 'Resultou incapacidade para as ocupações habituais por mais de trinta dias?'],
          ['5º', 'Resultou perigo de vida?'],
          ['6º', 'Resultou debilidade permanente de membro, sentido ou função?'],
          ['7º', 'Resultou incapacidade permanente para o trabalho, enfermidade incurável, perda ou inutilização de membro, sentido ou função?'],
          ['8º', 'Resultou deformidade permanente?'],
          ['9º', 'Resultou aceleração de parto ou aborto?'],
        ],
      },
    ],
    pegadinhas: [
      '"Ocupações habituais" não é sinônimo de trabalho remunerado (inclui criança e aposentado).',
      'Perigo de vida exige risco concreto, demonstrado no exame — não basta a sede da lesão.',
      'Exame complementar logo após decorridos 30 dias da data do crime (CPP 168, §2º).',
    ],
    fontes: ['Código Penal, Art. 129', 'Código de Processo Penal, Art. 168', 'Genival Veloso de França — Medicina Legal'],
  },
  {
    id: 'nr-prazos',
    titulo: 'NRs e legislação — prazos e percentuais',
    eixo: 'trabalho',
    resumo: 'Os números que mais derrubam candidatos em Medicina do Trabalho, reunidos numa tabela de leitura rápida.',
    tabelas: [
      {
        colunas: ['Assunto', 'Número', 'Fonte'],
        linhas: [
          ['Revisão da avaliação de riscos do PGR', '2 anos (3 anos com certificação em gestão de SST)', 'NR-01'],
          ['Vigência dos riscos psicossociais no GRO', '26/05/2026', 'NR-01 (Portarias 1.419/2024 e 765/2025)'],
          ['Mandato da CIPA', '1 ano, uma reeleição', 'NR-05'],
          ['Garantia de emprego do cipeiro eleito', 'Registro da candidatura até 1 ano após o mandato', 'NR-05 / ADCT Art. 10'],
          ['Exame de retorno ao trabalho', 'Afastamento ≥ 30 dias (doença ou acidente, ocupacional ou não)', 'NR-07'],
          ['Exame periódico', 'Expostos: anual (ou menos); demais: 2 anos', 'NR-07'],
          ['Exame demissional', 'Até 10 dias após o término do contrato', 'NR-07'],
          ['Dispensa do demissional', 'Último exame < 135 dias (graus 1–2) ou < 90 dias (graus 3–4)', 'NR-07'],
          ['Audiometria', 'Admissão, 6 meses após, anual, demissão; repouso auditivo de 14 h', 'NR-07 Anexo II'],
          ['Guarda do prontuário', '20 anos após o desligamento', 'NR-07'],
          ['Insalubridade', '10% / 20% / 40%', 'NR-15 e CLT 192'],
          ['Ruído contínuo', '85 dB(A) por 8 h; q = 5; máximo 115 dB(A)', 'NR-15 Anexo 1'],
          ['Ruído de impacto', '130 dB linear ou 120 dB(C); risco grave e iminente > 140 dB linear (130 dB(C))', 'NR-15 Anexo 2'],
          ['Periculosidade', '30% do salário-base', 'NR-16 e CLT 193'],
          ['Emissão da CAT', '1º dia útil seguinte; morte: imediatamente', 'Lei 8.213 Art. 22'],
          ['Auxílio por incapacidade temporária', 'Incapacidade > 15 dias; empresa paga os 15 primeiros', 'Lei 8.213 Arts. 59–60'],
          ['Auxílio-acidente', '50% do salário de benefício', 'Lei 8.213 Art. 86'],
          ['Garantia de emprego acidentária', '12 meses após cessar o benefício', 'Lei 8.213 Art. 118'],
          ['FAP × RAT', 'FAP 0,5 a 2,0 sobre RAT de 1%, 2% ou 3%', 'Decreto 3.048'],
          ['Peso máximo (remoção individual)', '60 kg', 'CLT Art. 198'],
          ['Laudo pericial (CPP)', 'Até 10 dias', 'CPP Art. 160'],
          ['Autópsia', 'Pelo menos 6 h após o óbito', 'CPP Art. 162'],
          ['Exame complementar de lesão', 'Após 30 dias da data do crime', 'CPP Art. 168'],
        ],
      },
    ],
    pegadinhas: [
      'Insalubridade + periculosidade não se acumulam (o trabalhador opta).',
      'Anexo 4 da NR-15 (iluminamento) está revogado.',
      'Demissional: 10 dias; dispensa: 135/90 dias — não confundir os números.',
    ],
    fontes: ['NRs vigentes (gov.br/MTE)', 'Lei 8.213/91', 'Decreto 3.048/99', 'CLT', 'CPP'],
  },
];

export function getCheatSheet(id: string): CheatSheet | undefined {
  return CHEAT_SHEETS.find((c) => c.id === id);
}
