import type { FiltroBancoQuestoes, FonteOficial } from './types';

/** Espelho estruturado das Seções 9 e 10 do guia. */
export const FONTES_OFICIAIS: FonteOficial[] = [
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
    oQueTem: 'Acidente do trabalho, CAT, NTEP, benefícios.',
    comoUsar: 'Leia Arts. 19–23, 26, 59–60, 86 e 118.',
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
    oQueTem: 'Diretrizes, notas técnicas e edital da prova de título.',
    comoUsar: 'Consulta pontual.',
  },
];

export const FILTROS_BANCOS: FiltroBancoQuestoes[] = [
  {
    plataforma: 'Qconcursos',
    url: 'https://www.qconcursos.com',
    passos: [
      'Questões → Filtrar.',
      'Disciplina: "Medicina Legal" (legista) ou "Medicina do Trabalho"/"Segurança e Saúde no Trabalho" (trabalho); SUS: "Saúde Pública"/"Legislação do SUS".',
      'Assunto: apenas os da semana do cronograma (ex.: Tanatologia Forense, NR-07).',
      'Banca: a do edital-alvo; sem edital, FUNDATEC, FEPESE, Objetiva, FURB, NC-UFPR, FAUEL + IBFC ou AOCP.',
      'Cargo: contém "Médico do Trabalho", "Médico Legista" ou "Perito Médico".',
      'Ano: últimos 5–6 anos (normas mudaram em 2020–2022).',
      'Excluir anuladas e desatualizadas.',
      'Salvar o filtro com o nome da semana (ex.: "S03 – PAF + NR-15").',
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
