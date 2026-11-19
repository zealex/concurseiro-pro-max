import type { FiltroBancoQuestoes, FonteOficial } from './types';

/** Espelho estruturado das Seções 10 e 11 do guia. */
export const FONTES_OFICIAIS: FonteOficial[] = [
  {
    id: 'pmf-2024',
    nome: 'Concurso Perito Médico Federal 2024 (Cebraspe / MPS)',
    url: 'https://www.cebraspe.org.br/concursos/mps_24',
    oQueTem: 'Edital nº 2/2024 com o conteúdo programático completo, provas e gabaritos do último concurso de Perito Médico Federal.',
    comoUsar: 'Baixe a prova e o gabarito: são 120 itens Certo/Errado para treinar o estilo na Semana 1 e nos simulados.',
  },
  {
    id: 'lei-8742',
    nome: 'Lei 8.742/93 — LOAS (Planalto, compilada)',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l8742compilado.htm',
    oQueTem: 'BPC (Arts. 20 a 21-A): renda, família, impedimento de longo prazo, avaliação médica e social.',
    comoUsar: 'Leia o Art. 20 inteiro com o checklist "Lei 8.742/93" aberto.',
  },
  {
    id: 'lei-8112',
    nome: 'Lei 8.112/90 — Estatuto do servidor federal (Planalto)',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm',
    oQueTem: 'Licenças de saúde, junta médica, acidente em serviço, readaptação e aposentadoria por invalidez.',
    comoUsar: 'Arts. 24, 83, 186, 188, 202–206 e 211–214; compare com o estatuto do seu estado ou município.',
  },
  {
    id: 'nrs',
    nome: 'NRs vigentes — Ministério do Trabalho e Emprego',
    url: 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes',
    oQueTem: 'PDF oficial de cada NR com a portaria da última alteração.',
    comoUsar: 'Baixe da lista "vigentes"; desconfie de PDFs de terceiros com redação revogada.',
  },
  {
    id: 'clt',
    nome: 'CLT (Planalto)',
    url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    oQueTem: 'Arts. 154–201 (Segurança e Medicina do Trabalho).',
    comoUsar: 'Ctrl+F "Art. 154"; texto riscado = revogado.',
  },
  {
    id: 'lei-8213',
    nome: 'Lei 8.213/91 (Planalto, compilada)',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm',
    oQueTem: 'Benefícios por incapacidade, carência, acidente do trabalho, CAT, NTEP.',
    comoUsar: 'Leia Arts. 15, 19–27-A, 42–45, 59–62, 86, 101, 118 e 151.',
  },
  {
    id: 'decreto-3048',
    nome: 'Decreto 3.048/99 (Planalto)',
    url: 'https://www.planalto.gov.br/ccivil_03/decreto/d3048.htm',
    oQueTem: 'Regulamento da Previdência; Anexo II (Listas A, B e C).',
    comoUsar: 'Vá direto ao Anexo II e ao Art. 337.',
  },
  {
    id: 'cp',
    nome: 'Código Penal (Planalto, compilado)',
    url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm',
    oQueTem: 'Arts. 26–28, 121–129, 213–217-A.',
    comoUsar: 'Use a versão compilada para ver o Art. 121-A e os §§ do Art. 129.',
  },
  {
    id: 'cpp',
    nome: 'Código de Processo Penal (Planalto)',
    url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm',
    oQueTem: 'Arts. 149–154 (insanidade) e 158–184 (corpo de delito, cadeia de custódia, perícias).',
    comoUsar: 'Imprima só os artigos do checklist.',
  },
  {
    id: 'sus',
    nome: 'Leis do SUS (Planalto)',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l8080.htm',
    oQueTem: 'Lei 8.080/90; Lei 8.142/90 (l8142.htm); Decreto 7.508/11; CF/88 Arts. 196–200.',
    comoUsar: 'Leia com o checklist "SUS" aberto.',
  },
  {
    id: 'fundacentro',
    nome: 'Fundacentro',
    url: 'https://www.gov.br/fundacentro/pt-br',
    oQueTem: 'Normas de Higiene Ocupacional (NHO-01 ruído, NHO-06 calor) e publicações técnicas.',
    comoUsar: 'Consulta pontual em insalubridade e avaliação ambiental.',
  },
  {
    id: 'renast',
    nome: 'RENAST Online (Fiocruz)',
    url: 'https://renastonline.ensp.fiocruz.br/',
    oQueTem: 'Protocolos, materiais de vigilância em saúde do trabalhador e CEREST.',
    comoUsar: 'Busque o protocolo do tema da semana.',
  },
  {
    id: 'ms-st',
    nome: 'Ministério da Saúde — Saúde do Trabalhador',
    url: 'https://www.gov.br/saude/pt-br/composicao/svsa/saude-do-trabalhador',
    oQueTem: 'LDRT (Portaria 1.999/2023), manuais e notificação.',
    comoUsar: 'Baixe a LDRT e o manual de Doenças Relacionadas ao Trabalho.',
  },
  {
    id: 'cfm',
    nome: 'CFM — busca de normas',
    url: 'https://sistemas.cfm.org.br/normas/',
    oQueTem: 'Resoluções 2.217/2018 (CEM), 2.381/2024 (documentos), 1.779/2005 (DO), 2.183/2018 (atendimento ao trabalhador).',
    comoUsar: 'Pesquise pelo número da resolução.',
  },
  {
    id: 'anamt',
    nome: 'ANAMT',
    url: 'https://www.anamt.org.br/portal/',
    oQueTem: 'Diretrizes, notas técnicas e edital da prova de título (caminho para o cargo de Médico do Trabalho).',
    comoUsar: 'Consulta pontual; o título não é exigido para perícia, legista ou clínico.',
  },
];

export const FILTROS_BANCOS: FiltroBancoQuestoes[] = [
  {
    plataforma: 'Qconcursos',
    url: 'https://www.qconcursos.com',
    passos: [
      'Questões → Filtrar.',
      'Disciplina: "Medicina Legal" (legista); "Perícia Médica", "Direito Previdenciário" e "Medicina do Trabalho" (perícia); "Medicina"/"Clínica Médica" (clínico); "Saúde Pública"/"Legislação do SUS" (todos).',
      'Assunto: apenas os da semana do cronograma (ex.: Tanatologia Forense, NR-07).',
      'Banca: a do edital-alvo; sem edital, CEBRASPE para perícia e FUNDATEC, FEPESE, Objetiva, FURB, NC-UFPR, FAUEL para legista e clínico.',
      'Cargo: contém "Perito Médico", "Médico Legista", "Médico Clínico"/"Clínico Geral" ou "Médico ESF"; órgão INSS/MPS para o Perito Médico Federal.',
      'Ano: últimos 5–6 anos (normas mudaram em 2020–2022).',
      'Excluir anuladas e desatualizadas.',
      'Salvar o filtro com o nome da semana (ex.: "S03 – PAF + BPC").',
    ],
  },
  {
    plataforma: 'TEC Concursos',
    url: 'https://www.tecconcursos.com.br',
    passos: [
      'Cadernos → Novo caderno.',
      'Matéria + assunto da semana; banca; cargo; ano.',
      'Excluir anuladas/desatualizadas; no treino, "não resolvidas por mim".',
      'Use "Desempenho por assunto" para preencher o campo Tema no app.',
    ],
  },
  {
    plataforma: 'Estratégia Questões / Gran Questões',
    url: 'https://www.estrategiaconcursos.com.br',
    passos: [
      'Filtre pelo concurso-alvo (puxa banca e cargo).',
      'Temas novos: só questões comentadas por professor; revisão: desative para ganhar velocidade.',
      'Registre cada bateria no app (eixo, tema, banca, total, acertos).',
    ],
  },
];
