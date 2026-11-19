import type { ModeloEdital } from './types';

/**
 * Editais reais lidos no PDF oficial (ferramenta `npm run edital`), usados como modelos no "Meu Edital".
 * Cada número abaixo veio do edital (ou do caderno de prova, quando indicado em `observacoes`).
 * Detalhes e links de todos os editais lidos: docs/editais-referencia.md.
 *
 * Convenções: `peso` = pontos por questão; `minimo` de item/prova em PONTOS (o edital às vezes fala em
 * acertos — convertido aqui por acertos × peso). Blocos com mínimo próprio (Conhecimentos Gerais ×
 * Específicos) viram provas separadas.
 */

const CONFERIDO = '2026-11-19';

/** Disciplinas do app que cobrem os "conhecimentos específicos" de cada tipo de cargo. */
const ESP_CLINICO = ['clinica-medica', 'infectologia', 'urgencia', 'aps-ciclos', 'sus', 'epidemiologia', 'etica-medica'];
const ESP_LEGISTA = ['ml-geral', 'traumatologia', 'tanatologia', 'asfixiologia', 'sexologia', 'antropologia', 'psicopatologia', 'direito-penal-processual'];
const ESP_PERITO_FEDERAL = ['pericia-medica', 'previdenciaria', 'nrs', 'clinica-ocupacional', 'toxicologia', 'clinica-medica', 'aps-ciclos', 'epidemiologia', 'etica-medica', 'sus'];
/** "Legislação" de prefeitura: Lei Orgânica, estatuto dos servidores, CF (arts. 1º–41) e improbidade. */
const LEGISLACAO_MUNICIPAL = ['servidor-publico', 'direito-constitucional', 'direito-administrativo'];

export const EDITAIS_MODELO: ModeloEdital[] = [
  /* ============================ PERÍCIA MÉDICA ============================ */
  {
    id: 'pmf-2024',
    nome: 'Perito Médico Federal — MPS 2024',
    orgao: 'Ministério da Previdência Social',
    banca: 'Cebraspe',
    ano: 2024,
    uf: 'BR',
    cargo: 'Perito Médico Federal',
    fonteUrl: 'https://cdn.cebraspe.org.br/concursos/mps_24/arquivos/ED_2_MPS_24_ABERTURA.PDF',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'pericia',
    provas: [
      {
        id: 'p1',
        nome: 'P1 — Conhecimentos gerais',
        formato: 'certo-errado',
        penalidadeErro: 0.5,
        duracaoMin: 240,
        itens: [
          {
            rotulo: 'Português, Ética no serviço público, Constitucional, Administrativo (Lei 8.112, improbidade, LGPD) e Informática',
            disciplinaIds: ['lingua-portuguesa', 'etica-publica', 'direito-constitucional', 'direito-administrativo', 'servidor-publico', 'nocoes-informatica'],
            questoes: 50,
            peso: 1,
          },
        ],
        minimoPontos: 10,
      },
      {
        id: 'p2',
        nome: 'P2 — Conhecimentos específicos',
        formato: 'certo-errado',
        penalidadeErro: 0.5,
        itens: [{ rotulo: 'Medicina geral, perícia, medicina e direito do trabalho', disciplinaIds: ESP_PERITO_FEDERAL, questoes: 70, peso: 1 }],
        minimoPontos: 21,
      },
    ],
    minimoTotal: 36,
    fases: [
      { tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '120 itens Certo/Errado em 4 h; cada erro desconta 0,5.' },
      { tipo: 'titulos', carater: 'classificatório', detalhe: 'Até 7 pontos.' },
    ],
  },

  /* ============================ PERÍCIA OFICIAL (LEGISTA) ============================ */
  {
    id: 'pcp-pr-2024',
    nome: 'Polícia Científica do Paraná — Perito Oficial Criminal (Área 2, médico) 2024',
    orgao: 'Polícia Científica do Paraná',
    banca: 'IBFC',
    ano: 2024,
    uf: 'PR',
    cargo: 'Perito Oficial Criminal 40h — Área 2 (Medicina)',
    fonteUrl: 'https://policiacientifica.pr.gov.br/sites/policia-cientifica/arquivos_restritos/files/documento/2024-09/edital_retificado.pdf',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'legista',
    provas: [
      {
        id: 'gerais',
        nome: 'Conhecimentos Gerais',
        formato: 'multipla',
        alternativas: 5,
        duracaoMin: 300,
        itens: [
          { rotulo: 'Língua Portuguesa', disciplinaIds: ['lingua-portuguesa'], questoes: 4, peso: 0.75 },
          { rotulo: 'Direito Aplicado (CPP, CP, LEP, CTB, abuso de autoridade)', disciplinaIds: ['direito-penal', 'legislacao-geral'], questoes: 9, peso: 0.75 },
          { rotulo: 'Raciocínio Lógico e Científico', disciplinaIds: ['raciocinio-logico'], questoes: 5, peso: 0.75 },
          { rotulo: 'Informática', disciplinaIds: ['nocoes-informatica'], questoes: 5, peso: 0.75 },
          { rotulo: 'Legislação Especial (estatutos e leis estaduais)', disciplinaIds: ['servidor-publico', 'legislacao-geral'], questoes: 12, peso: 0.75 },
          { rotulo: 'Noções de Criminalística e Medicina Legal', disciplinaIds: ['criminalistica', 'ml-geral'], questoes: 5, peso: 0.75 },
        ],
        minimoPontos: 15,
      },
      {
        id: 'especificos',
        nome: 'Conhecimentos Específicos — Área 2',
        formato: 'multipla',
        alternativas: 5,
        itens: [
          {
            rotulo: 'Medicina Legal (traumatologia, tanatologia, sexologia, antropologia, psicopatologia, toxicologia e genética)',
            disciplinaIds: ['traumatologia', 'tanatologia', 'sexologia', 'antropologia', 'psicopatologia', 'asfixiologia', 'ml-geral', 'criminalistica'],
            questoes: 22,
            peso: 1.25,
          },
          {
            rotulo: 'Medicina pericial, infortunística, saúde ocupacional e legislação correlata',
            disciplinaIds: ['pericia-medica', 'clinica-ocupacional', 'direito-penal-processual'],
            questoes: 8,
            peso: 1.25,
          },
          {
            rotulo: 'Noções de clínica, pediatria, obstetrícia, psiquiatria e patologia',
            disciplinaIds: ['clinica-medica', 'urgencia', 'aps-ciclos', 'infectologia'],
            questoes: 10,
            peso: 1.25,
          },
        ],
        minimoPontos: 25,
      },
    ],
    minimoTotal: 40,
    fases: [
      { tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '80 questões, 5 alternativas; objetiva + redação em 5 h.' },
      { tipo: 'discursiva', carater: 'eliminatório e classificatório', detalhe: 'Redação de 15–20 linhas (defesa de ponto de vista), 0–20 pontos, mínimo 10.' },
      { tipo: 'taf', carater: 'eliminatório', detalhe: 'Barra (masc. 4 repetições; fem. 20 s), salto em distância (1,60 m / 1,30 m) e corrida de 12 min (2.000 m / 1.700 m).' },
      { tipo: 'psicologica', carater: 'eliminatório' },
      { tipo: 'investigacao-social', carater: 'eliminatório' },
      { tipo: 'saude', carater: 'eliminatório', detalhe: 'Inspeção de saúde com exames e toxicológico em queratina (janela de 90 dias).' },
      { tipo: 'titulos', carater: 'classificatório', detalhe: 'Até 10 pontos (doutorado 2,5; mestrado 1,5; especialização 1,0; experiência pericial).' },
    ],
  },
  {
    id: 'igp-rs-2025',
    nome: 'IGP-RS — Perito Médico-Legista 2025',
    orgao: 'Instituto-Geral de Perícias do RS',
    banca: 'FUNDATEC',
    ano: 2025,
    uf: 'RS',
    cargo: 'Perito Médico-Legista',
    fonteUrl: 'https://concursos-publicacoes.s3.amazonaws.com/986/publico/edital_abertura/edital_abertura_98669e928d336f42.pdf',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'legista',
    provas: [
      {
        id: 'gerais',
        nome: 'Conhecimentos Gerais',
        formato: 'multipla',
        alternativas: 5,
        duracaoMin: 300,
        itens: [
          { rotulo: 'Língua Portuguesa', disciplinaIds: ['lingua-portuguesa'], questoes: 10, peso: 1 },
          { rotulo: 'Legislação Aplicada (CF, Lei 14.133, LC-RS 10.098/94 e leis do IGP)', disciplinaIds: ['direito-constitucional', 'direito-administrativo', 'servidor-publico'], questoes: 5, peso: 1 },
          { rotulo: 'Língua Inglesa', disciplinaIds: ['lingua-inglesa'], questoes: 5, peso: 1 },
          { rotulo: 'Raciocínio Lógico', disciplinaIds: ['raciocinio-logico'], questoes: 5, peso: 1 },
          { rotulo: 'Informática', disciplinaIds: ['nocoes-informatica'], questoes: 5, peso: 1 },
        ],
        minimoPontos: 15,
      },
      {
        id: 'especificos',
        nome: 'Conhecimentos Específicos',
        formato: 'multipla',
        alternativas: 5,
        itens: [
          { rotulo: 'Criminalística', disciplinaIds: ['criminalistica'], questoes: 10, peso: 1.25 },
          { rotulo: 'Medicina Legal', disciplinaIds: ESP_LEGISTA, questoes: 30, peso: 1.25 },
        ],
        minimoPontos: 25,
      },
    ],
    minimoTotal: null,
    fases: [
      { tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '70 questões, 5 alternativas; objetiva + redação em 5 h.' },
      { tipo: 'discursiva', carater: 'eliminatório e classificatório', detalhe: 'Dissertação de 15–30 linhas, 0–20 pontos, mínimo 12.' },
      { tipo: 'psicologica', carater: 'eliminatório' },
      { tipo: 'investigacao-social', carater: 'eliminatório', detalhe: 'Análise de vida pregressa.' },
      { tipo: 'titulos', carater: 'classificatório', detalhe: 'Até 10 pontos (doutorado 3; mestrado 2; especialização 1; experiência pericial até 4).' },
      { tipo: 'saude', carater: 'requisito de posse', detalhe: 'Laudo de aptidão e toxicológico (cabelo/pelos, janela ≥ 90 dias).' },
      { tipo: 'curso-formacao', carater: 'eliminatório (após a posse)', detalhe: '360 a 720 horas-aula.' },
    ],
  },
  {
    id: 'pci-sc-2025',
    nome: 'Polícia Científica de SC — Perito Oficial Criminal (Medicina Legal) 2025',
    orgao: 'Polícia Científica de Santa Catarina',
    banca: 'FEPESE',
    ano: 2025,
    uf: 'SC',
    cargo: 'Perito Oficial Criminal — área Medicina Legal',
    fonteUrl: 'https://2025pciperito.fepese.org.br/?go=download&arquivo=2025_001_CP_PCI_TR_01_02_03_04_05.pdf&inline=1',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'legista',
    provas: [
      {
        id: 'gerais',
        nome: 'Conhecimentos Gerais',
        formato: 'multipla',
        alternativas: 5,
        duracaoMin: 300,
        itens: [
          { rotulo: 'Língua Portuguesa', disciplinaIds: ['lingua-portuguesa'], questoes: 5, peso: 0.1 },
          { rotulo: 'Língua Inglesa', disciplinaIds: ['lingua-inglesa'], questoes: 5, peso: 0.1 },
          { rotulo: 'Matemática e Raciocínio Lógico', disciplinaIds: ['matematica', 'raciocinio-logico'], questoes: 10, peso: 0.1 },
          { rotulo: 'Noções de Direito Penal e Processual Penal', disciplinaIds: ['direito-penal', 'direito-penal-processual'], questoes: 5, peso: 0.1 },
          { rotulo: 'Noções de Direito Constitucional e Administrativo', disciplinaIds: ['direito-constitucional', 'direito-administrativo'], questoes: 5, peso: 0.1 },
          { rotulo: 'Noções de Criminalística', disciplinaIds: ['criminalistica'], questoes: 5, peso: 0.1 },
          { rotulo: 'Noções de Medicina Legal', disciplinaIds: ['ml-geral', 'traumatologia', 'tanatologia'], questoes: 5, peso: 0.1 },
        ],
        minimoPct: 50,
      },
      {
        id: 'especificos',
        nome: 'Conhecimentos Específicos (Medicina Legal)',
        formato: 'multipla',
        alternativas: 5,
        itens: [{ rotulo: 'Medicina Legal', disciplinaIds: ESP_LEGISTA, questoes: 40, peso: 0.15 }],
        minimoPct: 50,
      },
    ],
    minimoTotal: null,
    fases: [
      { tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '80 questões, 5 alternativas, 5 h; mínimo de 50% em cada bloco.' },
      { tipo: 'taf', carater: 'eliminatório', detalhe: 'Impulsão (1,60 m / 1,30 m), barra (masc. 2 flexões; fem. 15 s) e corrida de 12 min (1.800 m / 1.500 m).' },
      { tipo: 'psicologica', carater: 'eliminatório' },
      { tipo: 'titulos', carater: 'classificatório', detalhe: 'Só o título de maior valor (especialização 2; mestrado 4; doutorado 6) + experiência pericial até 4.' },
      { tipo: 'saude', carater: 'eliminatório', detalhe: 'Toxicológico como etapa própria (janela ≥ 180 dias).' },
      { tipo: 'investigacao-social', carater: 'eliminatório' },
      { tipo: 'curso-formacao', carater: 'eliminatório e classificatório (após a posse)', detalhe: 'Mínimo de 480 horas-aula na Academia de Perícia.' },
    ],
  },
  {
    id: 'pf-2025-area12',
    nome: 'Polícia Federal — Perito Criminal Federal, Área 12 (Medicina Legal) 2025',
    orgao: 'Polícia Federal',
    banca: 'Cebraspe',
    ano: 2025,
    uf: 'BR',
    cargo: 'Perito Criminal Federal — Área 12',
    fonteUrl: 'https://www.gov.br/pf/pt-br/acesso-a-informacao/servidores/concursos/edital/carreira-policial-2025/editais/edital-no-1_2025-dgp-pf.pdf',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'legista',
    observacoes:
      'O edital define só os blocos (50 básicos + 70 específicos). A divisão por disciplina dos itens básicos foi contada no caderno aplicado em 27/07/2025 e pode mudar no próximo concurso.',
    provas: [
      {
        id: 'basicos',
        nome: 'Conhecimentos Básicos',
        formato: 'certo-errado',
        penalidadeErro: 1,
        duracaoMin: 270,
        itens: [
          { rotulo: 'Língua Portuguesa (com Redação Oficial)', disciplinaIds: ['lingua-portuguesa'], questoes: 12, peso: 1 },
          { rotulo: 'Informática', disciplinaIds: ['nocoes-informatica'], questoes: 8, peso: 1 },
          { rotulo: 'Noções de Direito Administrativo', disciplinaIds: ['direito-administrativo'], questoes: 4, peso: 1 },
          { rotulo: 'Noções de Direito Constitucional', disciplinaIds: ['direito-constitucional'], questoes: 4, peso: 1 },
          { rotulo: 'Noções de Direito Penal e Processual Penal', disciplinaIds: ['direito-penal'], questoes: 6, peso: 1 },
          { rotulo: 'Noções de Criminalística', disciplinaIds: ['criminalistica'], questoes: 5, peso: 1 },
          { rotulo: 'Direitos Humanos', disciplinaIds: ['legislacao-geral'], questoes: 6, peso: 1 },
          { rotulo: 'Raciocínio Lógico', disciplinaIds: ['raciocinio-logico'], questoes: 5, peso: 1 },
        ],
        minimoPontos: 10,
      },
      {
        id: 'especificos',
        nome: 'Conhecimentos Específicos — Medicina Legal',
        formato: 'certo-errado',
        penalidadeErro: 1,
        itens: [{ rotulo: 'Medicina Legal', disciplinaIds: ESP_LEGISTA, questoes: 70, peso: 1 }],
        minimoPontos: 21,
      },
    ],
    minimoTotal: 48,
    fases: [
      { tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '120 itens Certo/Errado; cada erro anula um acerto (−1).' },
      { tipo: 'discursiva', carater: 'eliminatório e classificatório', detalhe: 'Texto de até 30 linhas sobre a área, 20 pontos, mínimo 10; erros de língua descontam.' },
      { tipo: 'taf', carater: 'eliminatório', detalhe: 'Barra (masc. 5 flexões; fem. 15 s), impulsão (2,05 m / 1,56 m), natação 50 m (≤ 56 s / 64 s) e corrida de 12 min (2.300 m / 1.800 m).' },
      { tipo: 'saude', carater: 'eliminatório', detalhe: 'Avaliação médica com exames e toxicológico em queratina.' },
      { tipo: 'psicologica', carater: 'eliminatório no 2º momento (durante o curso)' },
      { tipo: 'titulos', carater: 'classificatório', detalhe: 'Até 7,5 pontos.' },
      { tipo: 'investigacao-social', carater: 'eliminatório' },
      { tipo: 'curso-formacao', carater: 'eliminatório', detalhe: 'Academia Nacional de Polícia (Brasília), tempo integral.' },
    ],
  },

  /* ============================ PREFEITURAS DO SUL ============================ */
  {
    id: 'objetiva-ipe-2026',
    nome: 'Objetiva — Prefeitura de Ipê/RS, Médico 2026 (tabela padrão da banca)',
    orgao: 'Prefeitura de Ipê',
    banca: 'Objetiva Concursos',
    ano: 2026,
    uf: 'RS',
    cargo: 'Médico 40 h / 20 h',
    fonteUrl: 'https://anexos-r2.selecao.net.br/uploads/361/concursos/2629/anexos/d7d4b2b7-a8ea-4a5e-a196-977eabe0b24b.pdf',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'clinico',
    observacoes: 'A mesma tabela aparece em Novo Cabrais/RS e Teutônia/RS (2026). "Conhecimentos Gerais" reúne atualidades, serviço público, informática e raciocínio lógico.',
    provas: [
      {
        id: 'objetiva',
        nome: 'Prova Objetiva',
        formato: 'multipla',
        alternativas: 4,
        duracaoMin: 180,
        itens: [
          { rotulo: 'Língua Portuguesa', disciplinaIds: ['lingua-portuguesa'], questoes: 10, peso: 2, minimo: 2 },
          { rotulo: 'Conhecimentos Gerais', disciplinaIds: ['conhecimentos-gerais', 'nocoes-informatica', 'raciocinio-logico', 'etica-publica'], questoes: 8, peso: 1.5, minimo: 1.5 },
          { rotulo: 'Legislação (Lei Orgânica, estatuto e CF)', disciplinaIds: ['servidor-publico', 'direito-constitucional'], questoes: 6, peso: 2, minimo: 2 },
          { rotulo: 'Conhecimentos Específicos', disciplinaIds: ESP_CLINICO, questoes: 16, peso: 3.5, minimo: 3.5 },
        ],
        minimoPct: 60,
      },
    ],
    minimoTotal: null,
    fases: [{ tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '40 questões; aprovação com 60% e sem zerar nenhuma disciplina.' }],
  },
  {
    id: 'fundatec-nova-padua-2026',
    nome: 'FUNDATEC — Prefeitura de Nova Pádua/RS, Médico Clínico Geral 2026',
    orgao: 'Prefeitura de Nova Pádua',
    banca: 'FUNDATEC',
    ano: 2026,
    uf: 'RS',
    cargo: 'Médico Clínico Geral',
    fonteUrl: 'https://concursos-publicacoes.s3.amazonaws.com/1127/publico/edital_abertura/edital_abertura_11276ae376566cd19.pdf',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'clinico',
    provas: [
      {
        id: 'objetiva',
        nome: 'Prova Teórico-Objetiva',
        formato: 'multipla',
        alternativas: 4,
        duracaoMin: 180,
        itens: [
          { rotulo: 'Língua Portuguesa', disciplinaIds: ['lingua-portuguesa'], questoes: 10, peso: 2.5, minimo: 2.5 },
          { rotulo: 'Legislação (Lei Orgânica, estatuto, CF e improbidade)', disciplinaIds: LEGISLACAO_MUNICIPAL, questoes: 10, peso: 2.5, minimo: 2.5 },
          { rotulo: 'Matemática / Raciocínio Lógico', disciplinaIds: ['matematica', 'raciocinio-logico'], questoes: 5, peso: 2.5, minimo: 2.5 },
          { rotulo: 'Conhecimentos Específicos', disciplinaIds: ESP_CLINICO, questoes: 15, peso: 2.5, minimo: 17.5 },
        ],
        minimoPontos: 50,
      },
    ],
    minimoTotal: null,
    fases: [
      { tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '40 questões, 4 alternativas; ao menos 1 acerto em cada básica e 7 nas específicas; 50 de 100 pontos.' },
      { tipo: 'psicologica', carater: 'eliminatório' },
    ],
  },
  {
    id: 'fundatec-ijui-2026',
    nome: 'FUNDATEC — Prefeitura de Ijuí/RS, Médico Plantonista 2026',
    orgao: 'Prefeitura de Ijuí',
    banca: 'FUNDATEC',
    ano: 2026,
    uf: 'RS',
    cargo: 'Médico Plantonista',
    fonteUrl: 'https://concursos-publicacoes.s3.amazonaws.com/1120/publico/edital_abertura/edital_abertura_11206af76f56916fb.pdf',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'clinico',
    observacoes: 'O edital não diz como as 20 questões de "Atualidades / Língua Portuguesa" se dividem.',
    provas: [
      {
        id: 'objetiva',
        nome: 'Prova Teórico-Objetiva',
        formato: 'multipla',
        alternativas: 4,
        duracaoMin: 300,
        itens: [
          { rotulo: 'Atualidades / Língua Portuguesa', disciplinaIds: ['lingua-portuguesa', 'conhecimentos-gerais'], questoes: 20, peso: 0.51, minimo: 0.51 },
          { rotulo: 'Legislação Municipal', disciplinaIds: ['servidor-publico'], questoes: 15, peso: 1, minimo: 1 },
          { rotulo: 'Informática / Matemática', disciplinaIds: ['nocoes-informatica', 'matematica'], questoes: 13, peso: 1.1, minimo: 1.1 },
          { rotulo: 'Legislação e Conhecimentos Específicos', disciplinaIds: ESP_CLINICO, questoes: 27, peso: 1.5, minimo: 19.5 },
        ],
        minimoPontos: 48,
      },
    ],
    minimoTotal: null,
    fases: [
      { tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '75 questões, 4 alternativas, 5 h; 1 acerto em cada básica, 13 nas específicas e 48 de 80 pontos.' },
      { tipo: 'titulos', carater: 'classificatório', detalhe: 'Até 20 pontos.' },
    ],
  },
  {
    id: 'legalle-antonio-prado-2026',
    nome: 'Legalle — Prefeitura de Antônio Prado/RS, Médico 2026 (modelo da banca)',
    orgao: 'Prefeitura de Antônio Prado',
    banca: 'Legalle Concursos',
    ano: 2026,
    uf: 'RS',
    cargo: 'Médico (Ginecologista, Pediatra, Psiquiatra)',
    fonteUrl: 'https://editais.legalleconcursos.com.br/arquivo.php?file=edital/1/2571/049a65cec7531aa2ec1479d94bbf4d28.pdf',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'clinico',
    observacoes: 'Este edital só tem cargos de especialista; use-o como modelo das básicas da Legalle (nível superior) e troque as específicas pelas do seu cargo.',
    provas: [
      {
        id: 'objetiva',
        nome: 'Prova Teórico-Objetiva',
        formato: 'multipla',
        alternativas: 5,
        duracaoMin: 180,
        itens: [
          { rotulo: 'Língua Portuguesa', disciplinaIds: ['lingua-portuguesa'], questoes: 10, peso: 1.25 },
          { rotulo: 'Matemática', disciplinaIds: ['matematica'], questoes: 10, peso: 1.25 },
          { rotulo: 'Informática', disciplinaIds: ['nocoes-informatica'], questoes: 10, peso: 1.25 },
          { rotulo: 'Legislação (Lei Orgânica, estatuto, CF e improbidade)', disciplinaIds: LEGISLACAO_MUNICIPAL, questoes: 15, peso: 1.5 },
          { rotulo: 'Conhecimentos Específicos', disciplinaIds: ESP_CLINICO, questoes: 15, peso: 2 },
        ],
        minimoPontos: 45,
      },
    ],
    minimoTotal: null,
    fases: [
      { tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '60 questões, 5 alternativas; 50% dos 90 pontos.' },
      { tipo: 'titulos', carater: 'classificatório', detalhe: 'Até 10 pontos.' },
    ],
  },
  {
    id: 'sctreinamentos-bom-retiro-2026',
    nome: 'SC Treinamentos — Prefeitura de Bom Retiro/SC, Médico 2026',
    orgao: 'Prefeitura de Bom Retiro',
    banca: 'SC Treinamentos',
    ano: 2026,
    uf: 'SC',
    cargo: 'Médico',
    fonteUrl: 'https://sctreinamentos.selecao.site/arquivo.php?file=edital/1/801/aa00a3650cf98fd1037f53dbafe5832a.pdf',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'clinico',
    provas: [
      {
        id: 'objetiva',
        nome: 'Prova Objetiva',
        formato: 'multipla',
        alternativas: 4,
        duracaoMin: 180,
        itens: [
          { rotulo: 'Língua Portuguesa', disciplinaIds: ['lingua-portuguesa'], questoes: 10, peso: 2 },
          { rotulo: 'Matemática', disciplinaIds: ['matematica'], questoes: 5, peso: 2 },
          { rotulo: 'Conhecimentos Gerais e Atualidades', disciplinaIds: ['conhecimentos-gerais', 'regionais-sul'], questoes: 5, peso: 2 },
          { rotulo: 'Conhecimentos Técnicos, Legislação e Informática', disciplinaIds: [...ESP_CLINICO, 'servidor-publico', 'nocoes-informatica'], questoes: 20, peso: 3 },
        ],
        minimoPontos: 50,
      },
    ],
    minimoTotal: null,
    fases: [{ tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '40 questões, 4 alternativas; 50 de 100 pontos.' }],
  },
  {
    id: 'ibam-fraiburgo-2026',
    nome: 'IBAM — Prefeitura de Fraiburgo/SC, Médico Clínico Geral 2026 (seleção)',
    orgao: 'Prefeitura de Fraiburgo',
    banca: 'IBAM',
    ano: 2026,
    uf: 'SC',
    cargo: 'Médico Clínico Geral / Saúde da Família',
    fonteUrl: 'https://www.ibam-concursos.org.br/documento/editg.psfrai26.pdf',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'clinico',
    observacoes: 'Processo seletivo temporário; o edital não informa o número de alternativas.',
    provas: [
      {
        id: 'objetiva',
        nome: 'Prova Objetiva',
        formato: 'multipla',
        duracaoMin: 150,
        itens: [
          { rotulo: 'Conhecimento Técnico Profissional', disciplinaIds: ESP_CLINICO, questoes: 10, peso: 10, minimo: 30 },
          { rotulo: 'Conhecimentos Gerais', disciplinaIds: ['conhecimentos-gerais', 'direito-constitucional', 'direito-administrativo'], questoes: 10, peso: 10, minimo: 30 },
          { rotulo: 'Português', disciplinaIds: ['lingua-portuguesa'], questoes: 10, peso: 10, minimo: 30 },
        ],
        minimoPontos: 90,
      },
    ],
    minimoTotal: null,
    fases: [{ tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '30 questões em 2h30; mínimo de 30 pontos em cada núcleo.' }],
  },
  {
    id: 'furb-navegantes-2026',
    nome: 'FURB — Prefeitura de Navegantes/SC, Médico Clínico Geral e ESF 2026 (seleção)',
    orgao: 'Prefeitura de Navegantes',
    banca: 'FURB',
    ano: 2026,
    uf: 'SC',
    cargo: 'Médico Clínico Geral / ESF',
    fonteUrl: 'https://anexos-r2.selecao.net.br/uploads/342/concursos/579/anexos/5e21661c-60c2-4607-8628-787d9bffc7c5.pdf',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'clinico',
    observacoes: 'Processo seletivo temporário.',
    provas: [
      {
        id: 'objetiva',
        nome: 'Prova Objetiva',
        formato: 'multipla',
        alternativas: 5,
        duracaoMin: 180,
        itens: [
          { rotulo: 'Língua Portuguesa', disciplinaIds: ['lingua-portuguesa'], questoes: 10, peso: 0.2 },
          { rotulo: 'Raciocínio Lógico e Matemático', disciplinaIds: ['raciocinio-logico', 'matematica'], questoes: 5, peso: 0.2 },
          { rotulo: 'Conhecimentos Gerais', disciplinaIds: ['conhecimentos-gerais', 'regionais-sul'], questoes: 5, peso: 0.2 },
          { rotulo: 'Conhecimentos Específicos', disciplinaIds: ESP_CLINICO, questoes: 20, peso: 0.3 },
        ],
        minimoPontos: 5,
      },
    ],
    minimoTotal: null,
    fases: [{ tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '40 questões, 5 alternativas; nota mínima 5,0 de 10.' }],
  },
  {
    id: 'fepese-urubici-2026',
    nome: 'FEPESE — Prefeitura de Urubici/SC, Médico 2026',
    orgao: 'Prefeitura de Urubici',
    banca: 'FEPESE',
    ano: 2026,
    uf: 'SC',
    cargo: 'Médico',
    fonteUrl: 'https://2026cpmedicourubici.fepese.org.br/?go=download&arquivo=2026_001_SEAD_CP%20Urubici_Medico.pdf&inline=1',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'clinico',
    observacoes: 'Temas de Atualidade com recorte dos últimos 12 meses.',
    provas: [
      {
        id: 'objetiva',
        nome: 'Prova Objetiva',
        formato: 'multipla',
        alternativas: 5,
        duracaoMin: 180,
        itens: [
          { rotulo: 'Língua Portuguesa', disciplinaIds: ['lingua-portuguesa'], questoes: 5, peso: 0.2 },
          { rotulo: 'Noções de Matemática', disciplinaIds: ['matematica'], questoes: 5, peso: 0.2 },
          { rotulo: 'Temas de Atualidade', disciplinaIds: ['conhecimentos-gerais'], questoes: 10, peso: 0.3 },
          { rotulo: 'Conhecimentos Específicos', disciplinaIds: ESP_CLINICO, questoes: 10, peso: 0.5 },
        ],
        minimoPontos: 6,
      },
    ],
    minimoTotal: null,
    fases: [{ tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '30 questões, 5 alternativas; nota mínima 6,0 de 10.' }],
  },
  {
    id: 'unicampo-umuarama-2026',
    nome: 'Instituto Unicampo — Prefeitura de Umuarama/PR, Médico Generalista 2026',
    orgao: 'Prefeitura de Umuarama',
    banca: 'Instituto Unicampo',
    ano: 2026,
    uf: 'PR',
    cargo: 'Médico Generalista',
    fonteUrl:
      'https://institutounicampo.com.br/concurso/processo-de-selecao-de-pessoal-psp-concurso-publico-regime-estatutario-do-municipio-de-umuarama-pr/edital-n-130-2026-edital-de-abertura-umuarama-completo-com-anexos',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'clinico',
    provas: [
      {
        id: 'objetiva',
        nome: 'Prova Objetiva',
        formato: 'multipla',
        alternativas: 5,
        duracaoMin: 180,
        itens: [
          { rotulo: 'Língua Portuguesa', disciplinaIds: ['lingua-portuguesa'], questoes: 10, peso: 2 },
          { rotulo: 'Matemática', disciplinaIds: ['matematica'], questoes: 5, peso: 2 },
          { rotulo: 'Conhecimentos Gerais', disciplinaIds: ['conhecimentos-gerais', 'regionais-sul'], questoes: 5, peso: 2 },
          { rotulo: 'Conhecimentos Específicos', disciplinaIds: ESP_CLINICO, questoes: 40, peso: 2 },
        ],
        minimoPontos: 60,
      },
    ],
    minimoTotal: null,
    fases: [
      { tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '60 questões, 5 alternativas; 60 de 120 pontos.' },
      { tipo: 'saude', carater: 'eliminatório', detalhe: 'Avaliação médica e psicológica admissional.' },
    ],
  },
  {
    id: 'fau-paula-freitas-2026',
    nome: 'FAU/Unicentro — Prefeitura de Paula Freitas/PR, Médico Clínico Geral 2026',
    orgao: 'Prefeitura de Paula Freitas',
    banca: 'FAU/Unicentro',
    ano: 2026,
    uf: 'PR',
    cargo: 'Médico Clínico Geral',
    fonteUrl: 'https://www.concursosfau.com.br//sistema/uploads/EDITAL_CONCURSO_PUBLICO_-_PAULA_FREITAS.pdf',
    conferidoEm: CONFERIDO,
    trilhaSugerida: 'clinico',
    provas: [
      {
        id: 'objetiva',
        nome: 'Prova Objetiva',
        formato: 'multipla',
        alternativas: 5,
        duracaoMin: 240,
        itens: [
          { rotulo: 'Língua Portuguesa', disciplinaIds: ['lingua-portuguesa'], questoes: 5, peso: 2 },
          { rotulo: 'Matemática / Raciocínio Lógico', disciplinaIds: ['matematica', 'raciocinio-logico'], questoes: 5, peso: 2 },
          { rotulo: 'Conhecimentos Gerais', disciplinaIds: ['conhecimentos-gerais', 'regionais-sul'], questoes: 5, peso: 2 },
          { rotulo: 'Conhecimentos Específicos', disciplinaIds: ESP_CLINICO, questoes: 25, peso: 2.8 },
        ],
        minimoPct: 50,
      },
    ],
    minimoTotal: null,
    fases: [{ tipo: 'objetiva', carater: 'eliminatório e classificatório', detalhe: '40 questões, 5 alternativas; 50% dos 100 pontos.' }],
  },
];

export function getEditalModelo(id: string): ModeloEdital | undefined {
  return EDITAIS_MODELO.find((e) => e.id === id);
}

/** Modelos da mesma banca (para o atalho "Montar meu edital" do Radar). */
export function modelosDaBanca(banca: string | null | undefined): ModeloEdital[] {
  if (!banca) return [];
  const chave = banca
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
  return EDITAIS_MODELO.filter((e) => {
    const b = e.banca
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase();
    return chave.includes(b.split(/[\s/]/)[0]!) || b.includes(chave.split(/[\s/]/)[0]!);
  });
}
