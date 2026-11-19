import type { Trilha } from './types';

/**
 * Carreiras que o médico generalista (graduação + CRM, sem residência/RQE) pode disputar,
 * com requisito, formato de prova e a trilha do plano que prepara para cada uma.
 * Espelho da Seção 2 de docs/guia-cursinhos-bibliografia-e-fontes.md. Requisitos mudam: confirme no edital.
 */
export interface CarreiraGeneralista {
  id: string;
  cargo: string;
  orgaos: string;
  acessivel: boolean;
  requisito: string;
  prova: string;
  conteudo: string[];
  trilha: Trilha;
  historico: string;
}

export const CARREIRAS_GENERALISTA: CarreiraGeneralista[] = [
  {
    id: 'perito-medico-federal',
    cargo: 'Perito Médico Federal',
    orgaos: 'Ministério da Previdência Social (perícia do INSS) — vagas em todos os estados, inclusive PR, SC e RS',
    acessivel: true,
    requisito: 'Graduação em Medicina reconhecida pelo MEC + registro no CRM (edital MPS nº 2/2024). Não exige especialidade.',
    prova: 'CEBRASPE: 120 itens Certo/Errado (50 de conhecimentos gerais + 70 de específicos; cada erro anula meio acerto) + avaliação de títulos. 40 h semanais; remuneração inicial de R$ 14.166,99 no edital de 2024.',
    conteudo: [
      'Medicina Geral: Código de Ética, resoluções do CFM sobre perícia, sigilo, telemedicina (Lei 14.510/2022), epidemiologia, vigilância, PNI, clínica médica e conduta médico-pericial (clínica, cirurgia, GO, psiquiatria, ortopedia, cardio, pneumo, endócrino) e saúde mental.',
      'Medicina do Trabalho: NRs, doenças ocupacionais (LER/DORT, pneumoconioses, PAIR, Burnout), exames ocupacionais, PCMSO, ergonomia, riscos psicossociais e reabilitação.',
      'Direito do Trabalho: CLT, NRs 1, 7, 9, 15, 17, 31 e 32, responsabilidade do empregador, estabilidade do Art. 118, eSocial/CAT, assédio.',
      'Legislação Previdenciária: seguridade, Leis 8.212 e 8.213, EC 103/2019, Decreto 3.048, IN 128/2022, benefícios e BPC, processo administrativo e teleperícia.',
      'SUS (Lei 8.080, Lei 14.289/2022, PCDT, PNAB, RAPS, Rede PcD) e Assistência Social (Lei 8.742, LBI, Decreto 6.214/2007).',
      'Conhecimentos gerais: Português, ética no serviço público, Direito Constitucional e Administrativo (Lei 8.112), Informática, LGPD e LAI.',
    ],
    trilha: 'pericia',
    historico: 'Último concurso: edital MPS nº 2/2024 (dez/2024), prova em 16/02/2025, 250 vagas imediatas (PR 4, SC 2, RS 2) e nomeações em julho/2025. Não há edital novo publicado até a data desta base.',
  },
  {
    id: 'perito-medico-legista',
    cargo: 'Perito Médico-Legista',
    orgaos: 'Polícia Científica do Paraná, Polícia Científica de Santa Catarina e IGP-RS (Instituto-Geral de Perícias)',
    acessivel: true,
    requisito: 'Em regra, graduação em Medicina + CRM. Editais policiais podem exigir CNH, aptidão física/mental, investigação social e curso de formação — confira cada edital.',
    prova: 'Objetiva (e, conforme o edital, discursiva e títulos). Bancas recentes no Sul: FUNDATEC (IGP-RS), FEPESE (Polícia Científica SC), IBFC (Polícia Científica PR, 2017).',
    conteudo: [
      'Medicina Legal completa: perícia e documentos, traumatologia, PAF, tanatologia, asfixiologia, sexologia, antropologia, psicopatologia e toxicologia forense.',
      'Direito Penal e Processual Penal aplicados (CPP 158–184, cadeia de custódia, CP 121–129 e crimes sexuais).',
      'Conhecimentos gerais e legislação estadual conforme o edital.',
    ],
    trilha: 'legista',
    historico: 'IGP-RS 2025 (FUNDATEC, 50 vagas + 4 reservadas); Polícia Científica de SC (FEPESE, edital de 19/12/2025, provas em 22/02/2026); Polícia Científica do PR sem edital de legista desde 2017. Detalhes no guia (Seção 14).',
  },
  {
    id: 'perito-rpps',
    cargo: 'Médico Perito / Junta Médica (regimes próprios)',
    orgaos: 'Institutos de previdência estaduais e municipais, prefeituras, tribunais e secretarias de administração',
    acessivel: true,
    requisito: 'Varia: muitos aceitam graduação + CRM; alguns pedem especialização em perícia, medicina legal ou do trabalho. Leia o requisito antes de se inscrever.',
    prova: 'Bancas regionais (FUNDATEC, FEPESE, Objetiva, FURB, NC-UFPR) ou nacionais, quase sempre com legislação do ente (estatuto do servidor).',
    conteudo: [
      'Perícia do servidor: licenças, junta médica, readaptação, aposentadoria por invalidez (Lei 8.112 como modelo + estatuto local).',
      'Ética médica e documentos; clínica e saúde mental (as causas mais comuns de afastamento).',
      'SUS e legislação municipal.',
    ],
    trilha: 'pericia',
    historico: 'Aparecem no Radar na categoria "Perícia Médica".',
  },
  {
    id: 'clinico-esf',
    cargo: 'Clínico Geral / ESF / Plantonista',
    orgaos: 'Prefeituras, consórcios intermunicipais, fundações e hospitais municipais',
    acessivel: true,
    requisito: 'Graduação em Medicina + CRM. É a porta de entrada mais frequente para o recém-formado.',
    prova: 'Bancas regionais do Sul (FUNDATEC, FEPESE, Objetiva, FURB, NC-UFPR, FAUEL) — enunciados curtos, protocolos do Ministério da Saúde e legislação municipal.',
    conteudo: ['Clínica médica, urgência e emergência, saúde mental, saúde da mulher/criança/idoso, doenças de notificação.', 'SUS, PNAB, ética médica.', 'Português e legislação municipal.'],
    trilha: 'clinico',
    historico: 'São a maioria dos registros do Radar (categoria "Clínico Geral / ESF / Plantonista").',
  },
  {
    id: 'medico-do-trabalho',
    cargo: 'Médico do Trabalho',
    orgaos: 'Empresas públicas, tribunais, universidades, hospitais e prefeituras',
    acessivel: false,
    requisito: 'Exige especialização ou residência em Medicina do Trabalho (a NR-04 remete ao CFM a definição de quem é médico do trabalho). Não é acessível ao recém-formado sem RQE.',
    prova: 'Conteúdo muito próximo ao da perícia (NRs, doenças ocupacionais, legislação).',
    conteudo: ['O conteúdo de saúde do trabalhador do plano (eixo Perícia) é o mesmo — a barreira é o título, não a matéria.'],
    trilha: 'pericia',
    historico: 'Fica no Radar como "exige especialização". Opção para depois da posse: especialização e título da ANAMT.',
  },
];
