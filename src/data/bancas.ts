import type { Banca } from './types';

/** Espelho estruturado da Seção 5 do guia. Confirme sempre a banca no edital do concurso-alvo. */
export const BANCAS: Banca[] = [
  {
    id: 'fundatec',
    nome: 'FUNDATEC',
    regiao: 'RS (prefeituras, autarquias e órgãos estaduais gaúchos)',
    estilo: 'Múltipla escolha com 5 alternativas; muitas questões "Analise as assertivas I, II e III — quais estão corretas?"; forte literalidade em lei e NR.',
    comoTreinar: 'Lei seca com atenção a "exceto", prazos e percentuais; resolver provas anteriores no site da banca.',
    sul: true,
  },
  {
    id: 'fepese',
    nome: 'FEPESE',
    regiao: 'SC (prefeituras e órgãos estaduais catarinenses)',
    estilo: 'Múltipla escolha, enunciados diretos, legislação e conceitos clássicos.',
    comoTreinar: 'Questões curtas cronometradas; revisar conceitos-chave de SUS e ética.',
    sul: true,
  },
  {
    id: 'objetiva',
    nome: 'Objetiva Concursos',
    regiao: 'RS, SC e PR (prefeituras)',
    estilo: 'Enunciados curtos e muito literais; legislação municipal e conhecimentos gerais.',
    comoTreinar: 'Ler o estatuto/lei orgânica do município do edital; questões de lei seca.',
    sul: true,
  },
  {
    id: 'furb',
    nome: 'FURB',
    regiao: 'SC (Vale do Itajaí e prefeituras)',
    estilo: 'Múltipla escolha; clínica generalista + SUS.',
    comoTreinar: 'Clínica médica de concurso + SUS.',
    sul: true,
  },
  {
    id: 'nc-ufpr',
    nome: 'NC-UFPR',
    regiao: 'PR (Curitiba e região, universidades)',
    estilo: 'Questões mais elaboradas, com casos clínicos e interpretação.',
    comoTreinar: 'Questões de caso clínico e interpretação de diretrizes.',
    sul: true,
  },
  {
    id: 'fauel',
    nome: 'FAUEL',
    regiao: 'PR (prefeituras do norte/noroeste)',
    estilo: 'Múltipla escolha direta; SUS e clínica.',
    comoTreinar: 'Volume de questões curtas.',
    sul: true,
  },
  {
    id: 'cebraspe',
    nome: 'CEBRASPE',
    regiao: 'Nacional (polícias, órgãos federais; banca do Perito Médico Federal 2024)',
    estilo: 'Certo/Errado (em muitos editais um erro anula um acerto) ou múltipla escolha; troca de uma palavra muda o gabarito.',
    comoTreinar: 'Não chutar: marcar só com convicção; atenção a generalizações ("sempre", "nunca", "apenas").',
    sul: false,
  },
  {
    id: 'fgv',
    nome: 'FGV',
    regiao: 'Nacional',
    estilo: 'Enunciados longos, casos aplicados, interpretação jurídica.',
    comoTreinar: 'Questões de caso; ler o enunciado inteiro antes das alternativas.',
    sul: false,
  },
  {
    id: 'vunesp',
    nome: 'VUNESP',
    regiao: 'SP majoritariamente (ex.: Polícia Civil de SP — Médico Legista)',
    estilo: 'Literal, conceitual, 5 alternativas.',
    comoTreinar: 'Classificações do França; lei seca.',
    sul: false,
  },
  {
    id: 'aocp',
    nome: 'Instituto AOCP',
    regiao: 'Nacional (saúde, hospitais, segurança)',
    estilo: 'Muito literal em legislação; pega detalhe de prazo/percentual.',
    comoTreinar: 'Checklists de NR e de leis.',
    sul: false,
  },
  {
    id: 'ibfc',
    nome: 'IBFC',
    regiao: 'Nacional (hospitais universitários, prefeituras, polícias)',
    estilo: 'Conceitual, alternativas longas.',
    comoTreinar: 'Questões de Medicina Legal e SUS por banca.',
    sul: false,
  },
];

/** Lista de nomes usada nos seletores do app (inclui "Outra"). */
export const NOMES_BANCAS: string[] = [...BANCAS.map((b) => b.nome), 'Outra'];
