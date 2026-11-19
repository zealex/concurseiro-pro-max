import type { Banca } from './types';

/**
 * Espelho estruturado da Seção 5 do guia. O campo `basicas` resume como cada banca cobra os
 * Conhecimentos Básicos, tirado dos editais lidos em 19/11/2026 (docs/editais-referencia.md).
 * Confirme sempre a composição no edital do concurso-alvo — ela muda de um município para outro.
 */
export const BANCAS: Banca[] = [
  {
    id: 'fundatec',
    nome: 'FUNDATEC',
    regiao: 'RS (prefeituras, autarquias e órgãos estaduais gaúchos, IGP-RS)',
    estilo: 'Múltipla escolha com 4 ou 5 alternativas; muitas questões "Analise as assertivas I, II e III — quais estão corretas?"; forte literalidade em lei e NR.',
    comoTreinar: 'Lei seca com atenção a "exceto", prazos e percentuais; resolver provas anteriores no site da banca.',
    basicas:
      'Composição muda por município (40, 60 ou 75 questões), mas costuma exigir ao menos 1 acerto em CADA básica e um mínimo nas específicas. Legislação = Lei Orgânica + estatuto do município + CF (arts. 1º–41) e improbidade; às vezes Lei Maria da Penha. No IGP-RS 2025: Português 10, Legislação 5, Inglês 5, RLM 5 e Informática 5.',
    sul: true,
  },
  {
    id: 'fepese',
    nome: 'FEPESE',
    regiao: 'SC (prefeituras, Polícia Científica e órgãos estaduais catarinenses)',
    estilo: 'Múltipla escolha com 5 alternativas, enunciados diretos, legislação e conceitos clássicos.',
    comoTreinar: 'Questões curtas cronometradas; revisar conceitos-chave de SUS e ética.',
    basicas:
      'Prefeituras: prova curta (30 questões) com "Temas de Atualidade" pesando mais que Português (recorte dos últimos 12 meses), sem Legislação nem Informática; aprovação com nota 6,0. Polícia Científica-SC 2025: Português, Inglês, Matemática/RLM, Penal, Constitucional/Administrativo, Criminalística e Medicina Legal no bloco geral, com mínimo de 50% em cada bloco.',
    sul: true,
  },
  {
    id: 'objetiva',
    nome: 'Objetiva Concursos (Instituto Objetiva)',
    regiao: 'RS, SC e PR (prefeituras)',
    estilo: 'Enunciados curtos e muito literais ("Assinalar a alternativa…"); 4 alternativas; legislação municipal e conhecimentos gerais.',
    comoTreinar: 'Ler o estatuto/lei orgânica do município do edital; questões de lei seca.',
    basicas:
      'Tabela padronizada em 2026 (Ipê, Novo Cabrais, Teutônia): Português 10 × 2,0, Conhecimentos Gerais 8 × 1,5 (atualidades, serviço público, informática e raciocínio lógico), Legislação 6 × 2,0 e Específicas 16 × 3,5; aprovação com 60% sem zerar nenhuma disciplina. Outros editais (ex.: Cachoeira do Sul 2026) usam 10/5/5/10/10.',
    sul: true,
  },
  {
    id: 'legalle',
    nome: 'Legalle Concursos',
    regiao: 'RS e SC (prefeituras)',
    estilo: 'Múltipla escolha com 5 alternativas; Legislação com muitas questões.',
    comoTreinar: 'Estatuto e Lei Orgânica do município + CF; Matemática e Informática têm o mesmo peso de Português.',
    basicas: 'Nível superior (Antônio Prado/RS 2026): Português, Matemática e Informática 10 cada (× 1,25), Legislação 15 (× 1,5), Específicas 15 (× 2,0); 50% para aprovar; títulos.',
    sul: true,
  },
  {
    id: 'sc-treinamentos',
    nome: 'SC Treinamentos',
    regiao: 'SC (prefeituras)',
    estilo: 'Múltipla escolha com 4 alternativas; prova curta.',
    comoTreinar: 'Específicas valem 60% da nota (incluem Legislação e Informática); básicas curtas de Português, Matemática e Atualidades.',
    basicas: 'Bom Retiro/SC 2026: Português 10, Matemática 5, Conhecimentos Gerais e Atualidades 5 (× 2,0); Conhecimentos Técnicos + Legislação + Informática 20 (× 3,0); 50 de 100 pontos.',
    sul: true,
  },
  {
    id: 'ibam',
    nome: 'IBAM',
    regiao: 'SC e outros estados (prefeituras e seleções temporárias)',
    estilo: 'Núcleos com o mesmo número de questões.',
    comoTreinar: 'Garantir o mínimo em cada núcleo (Português e Conhecimentos Gerais pesam tanto quanto as específicas).',
    basicas: 'Fraiburgo/SC 2026: Português 10, Conhecimentos Gerais 10 e Técnico 10 (× 10), com mínimo de 30 pontos em cada núcleo.',
    sul: true,
  },
  {
    id: 'furb',
    nome: 'FURB',
    regiao: 'SC (Vale do Itajaí e prefeituras)',
    estilo: 'Múltipla escolha com 5 alternativas; clínica generalista + SUS.',
    comoTreinar: 'Clínica médica de concurso + SUS.',
    basicas: 'Navegantes/SC 2026: Português 10, Raciocínio Lógico/Matemática 5 e Conhecimentos Gerais 5 (× 0,2); Específicas 20 (× 0,3); nota mínima 5,0.',
    sul: true,
  },
  {
    id: 'unicampo',
    nome: 'Instituto Unicampo',
    regiao: 'PR (prefeituras)',
    estilo: 'Múltipla escolha com 5 alternativas.',
    comoTreinar: 'Específicas pesam dois terços da prova; básicas curtas.',
    basicas: 'Umuarama/PR 2026 (Médico Generalista): Português 10, Matemática 5, Conhecimentos Gerais 5 e Específicas 40, todas × 2,0; 60 de 120 pontos.',
    sul: true,
  },
  {
    id: 'fau-unicentro',
    nome: 'FAU/Unicentro',
    regiao: 'PR (prefeituras do centro-sul)',
    estilo: 'Múltipla escolha com 5 alternativas.',
    comoTreinar: 'Específicas valem 70% da nota.',
    basicas: 'Paula Freitas/PR 2026: Português 5, Matemática/RLM 5, Conhecimentos Gerais 5 (× 2,0) e Específicas 25 (× 2,8); 50%.',
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
    regiao: 'Nacional (polícias, órgãos federais; banca do Perito Médico Federal 2024 e da PF 2025)',
    estilo: 'Certo/Errado (em muitos editais um erro anula meio ou um acerto) ou múltipla escolha; troca de uma palavra muda o gabarito.',
    comoTreinar: 'Não chutar: marcar só com convicção; atenção a generalizações ("sempre", "nunca", "apenas").',
    basicas:
      'Perito Médico Federal 2024: 50 itens de conhecimentos gerais (Português com Redação Oficial, Ética no serviço público, Constitucional, Administrativo com Lei 8.112/improbidade/LGPD, Informática com SEI e IA), mínimo de 10 pontos, erro −0,5. PF 2025: 50 itens básicos (Português 12, Informática 8, Direito 14, Criminalística 5, Direitos Humanos 6, RLM 5), mínimo 10, erro −1.',
    sul: false,
  },
  {
    id: 'fgv',
    nome: 'FGV',
    regiao: 'Nacional (EBSERH 2026)',
    estilo: 'Enunciados longos, casos aplicados, interpretação jurídica.',
    comoTreinar: 'Questões de caso; ler o enunciado inteiro antes das alternativas.',
    basicas: 'EBSERH 2026 (exige residência/especialidade): Português 10 × 0,4, Legislação Ebserh 5 e Políticas Públicas de Saúde e Educação 15.',
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
    regiao: 'Nacional (hospitais universitários, prefeituras, polícias; Polícia Científica-PR 2024)',
    estilo: 'Conceitual, alternativas longas; 5 alternativas.',
    comoTreinar: 'Questões de Medicina Legal e SUS por banca.',
    basicas:
      'Polícia Científica-PR 2024: bloco geral com Português 4, Direito Aplicado 9, Raciocínio Lógico e Científico 5, Informática 5, Legislação Especial 12 e Criminalística/Medicina Legal 5 (× 0,75), mínimo 15; redação de 15–20 linhas.',
    sul: false,
  },
];

/** Lista de nomes usada nos seletores do app (inclui "Outra"). */
export const NOMES_BANCAS: string[] = [...BANCAS.map((b) => b.nome), 'Outra'];
