import { getTema } from './eixos';
import type { BlocoSemana, NivelBasicas, TipoBloco, Trilha } from './types';
import { TRILHAS } from './types';

/* =============================================================================
 * Conhecimentos Básicos no plano de 12 semanas.
 *
 * Os blocos daqui têm id EXPLÍCITO ("s03-k07") — os 244 blocos médicos continuam com os ids
 * posicionais de sempre ("s03-b07"), então o progresso salvo não se desloca.
 *
 * Nível de cada bloco (ver src/data/selecaoBlocos.ts):
 *   núcleo      → sempre entra (Português e simulados de básicas);
 *   complemento → entra se couber no orçamento diário escolhido (5 × orçamento por semana);
 *   reforço     → só quando as básicas pesam ≥ 50% da prova-alvo (padrão da trilha Clínico/prefeituras).
 * Com edital-alvo definido, entram só as disciplinas do edital (independente da trilha).
 * Os blocos não abrem ciclo D1/D7/D15/D30 (a retenção fica com os flashcards) e não vão para a
 * fila de redistribuição.
 * ========================================================================== */

export type BlocoBasico = Omit<BlocoSemana, 'semana'>;

/** Rótulo curto da disciplina no título do bloco. */
const ROTULO: Record<string, string> = {
  'lingua-portuguesa': 'Português',
  matematica: 'Matemática',
  'raciocinio-logico': 'Raciocínio Lógico',
  'nocoes-informatica': 'Informática',
  'direito-constitucional': 'Constitucional',
  'direito-administrativo': 'Administrativo',
  'servidor-publico': 'Servidor público',
  'etica-publica': 'Ética e transparência',
  'legislacao-geral': 'Legislação',
  'regionais-sul': 'História e Geografia do Sul',
  'conhecimentos-gerais': 'Atualidades',
  'redacao-discursiva': 'Discursiva',
  criminalistica: 'Criminalística',
  'lingua-inglesa': 'Inglês',
  'direito-penal': 'Penal e Processo Penal',
  basicas: 'Básicas',
};

interface OptsK {
  trilhas?: Trilha[];
  refs?: string[];
  plantao?: string;
}

function k(
  id: string,
  nivel: NivelBasicas,
  tipo: TipoBloco,
  minutos: number,
  titulo: string,
  descricao: string,
  temaIds: string[],
  opts: OptsK = {},
): BlocoBasico {
  if (!/^s\d{2}-k\d{2}$/.test(id)) throw new Error(`Id de bloco de básicas inválido: ${id}`);
  const primeiro = getTema(temaIds[0] ?? '');
  if (!primeiro) throw new Error(`Tema inexistente no bloco ${id}: ${temaIds[0]}`);
  for (const t of temaIds) if (!getTema(t)) throw new Error(`Tema inexistente no bloco ${id}: ${t}`);
  const disc = primeiro.disciplina;
  const refs = opts.refs ?? primeiro.tema.refs;
  return {
    id,
    eixo: disc.eixo,
    disciplinaId: disc.id,
    temaIds,
    tipo,
    titulo,
    descricao,
    minutos,
    essencial: nivel === 'nucleo',
    trilhas: opts.trilhas ?? disc.trilhas ?? [...TRILHAS],
    plantaoAlternativa: opts.plantao ?? `15 min de flashcards: ${primeiro.tema.nome}.`,
    nivel,
    semRevisao: true,
    ...(refs && refs.length ? { refs } : {}),
  };
}

function rotulo(temaId: string): string {
  const t = getTema(temaId);
  return ROTULO[t?.disciplina.id ?? ''] ?? t?.disciplina.nome ?? 'Básicas';
}

function nomeTema(temaId: string): string {
  return getTema(temaId)?.tema.nome ?? temaId;
}

/** Estudo de um tema: resumo + exemplos + questões + flashcards novos. */
function estudo(id: string, nivel: NivelBasicas, temaId: string, minutos: number): BlocoBasico {
  return k(
    id,
    nivel,
    'teoria',
    minutos,
    `${rotulo(temaId)}: ${nomeTema(temaId)}`,
    'Leia o resumo do tema (Biblioteca → Conhecimentos Básicos), refaça os exemplos resolvidos, resolva 10 questões do tema e adicione os flashcards novos.',
    [temaId],
  );
}

/** Bateria de questões (modo prova). */
function bateria(id: string, nivel: NivelBasicas, temaIds: string[], minutos: number, titulo: string, descricao?: string): BlocoBasico {
  return k(
    id,
    nivel,
    'questoes',
    minutos,
    `${rotulo(temaIds[0]!)}: ${titulo}`,
    descricao ?? `${Math.round(minutos / 2.5)} questões cronometradas no formato da sua banca-alvo; mande os erros para o caderno.`,
    temaIds,
    { plantao: `10 questões rápidas: ${titulo.toLowerCase()}.` },
  );
}

/** Leitura de lei seca. */
function leiSeca(id: string, nivel: NivelBasicas, temaId: string, minutos: number, titulo: string, descricao: string): BlocoBasico {
  return k(id, nivel, 'lei-seca', minutos, `${rotulo(temaId)}: ${titulo}`, descricao, [temaId], {
    plantao: `15 min de lei seca: ${titulo}.`,
  });
}

/** Sessão de flashcards (revisão da disciplina). */
function cartoes(id: string, nivel: NivelBasicas, temaIds: string[], minutos: number, titulo: string): BlocoBasico {
  return k(
    id,
    nivel,
    'revisao',
    minutos,
    `${rotulo(temaIds[0]!)}: ${titulo}`,
    'Flashcards vencidos e novos da disciplina; anote no caderno o que errar duas vezes.',
    temaIds,
    { plantao: `10 min de flashcards: ${titulo.toLowerCase()}.` },
  );
}

/** Simulado de básicas (formato do edital-alvo, ou 30 questões mistas). */
function simulado(id: string, numero: number, minutos = 60): BlocoBasico {
  return k(
    id,
    'nucleo',
    'simulado',
    minutos,
    `Simulado de básicas nº ${numero}`,
    'Simulado cronometrado só de conhecimentos básicos, na composição do seu edital-alvo (ou 30 questões mistas: Português, RLM/Matemática, Informática e Legislação). Corrija, registre e mande os erros para o caderno.',
    ['basicas-mistas'],
    { plantao: 'Simulado curto: 12 questões mistas de básicas.' },
  );
}

/** Discursiva cronometrada (Polícia Científica/IGP e editais com prova discursiva). */
function discursiva(id: string, minutos = 45): BlocoBasico {
  return k(
    id,
    'complemento',
    'questoes',
    minutos,
    'Discursiva: laudo ou parecer cronometrado',
    'Escreva 1 laudo/parecer (ou dissertação) no tempo da prova, compare com o modelo e os critérios de correção do guia de Discursiva.',
    ['red-laudo-parecer'],
    { plantao: 'Esboce o roteiro de 1 laudo/parecer (10 min).' },
  );
}

/** Atualidades da semana (sem banco de questões: conteúdo datado). */
function atualidades(id: string, minutos = 20): BlocoBasico {
  return cartoes(id, 'reforco', ['cg-metodo'], minutos, 'atualidades da semana');
}

const N: NivelBasicas = 'nucleo';
const C: NivelBasicas = 'complemento';
const R: NivelBasicas = 'reforco';

/** Blocos de básicas de cada semana do plano (índice 0 = semana 1). */
export const BASICAS_POR_SEMANA: BlocoBasico[][] = [
  /* -------- Semana 1 — Mês 1: base -------- */
  [
    estudo('s01-k01', N, 'lp-ortografia', 40),
    estudo('s01-k02', N, 'lp-classes', 40),
    bateria('s01-k03', C, ['lp-interpretacao'], 30, 'interpretação de texto', '1 texto-base + 5 questões de compreensão; sublinhe no texto a prova de cada resposta.'),
    estudo('s01-k04', C, 'mat-razao-proporcao', 40),
    estudo('s01-k05', R, 'mat-operacoes', 30),
    estudo('s01-k06', C, 'rl-proposicoes', 35),
    estudo('s01-k07', C, 'inf-seguranca', 35),
    estudo('s01-k08', R, 'inf-hardware', 25),
    estudo('s01-k09', C, 'dc-principios', 30),
    estudo('s01-k10', C, 'da-principios', 30),
    estudo('s01-k11', C, 'srv-municipal', 30),
    estudo('s01-k12', C, 'etp-1171', 30),
    estudo('s01-k13', C, 'reg-municipio', 30),
    estudo('s01-k14', C, 'cg-metodo', 20),
  ],
  /* -------- Semana 2 -------- */
  [
    estudo('s02-k01', N, 'lp-concordancia', 40),
    estudo('s02-k02', N, 'lp-verbos', 40),
    bateria('s02-k03', C, ['lp-tipologia'], 30, 'tipologia e gêneros textuais'),
    estudo('s02-k04', C, 'mat-regra-tres', 40),
    estudo('s02-k05', R, 'mat-medidas', 30),
    estudo('s02-k06', C, 'rl-equivalencias', 35),
    estudo('s02-k07', C, 'inf-windows', 35),
    estudo('s02-k08', R, 'inf-redes', 25),
    estudo('s02-k09', C, 'dc-direitos-individuais', 35),
    estudo('s02-k10', C, 'da-organizacao', 30),
    estudo('s02-k11', C, 'srv-8112-provimento', 30),
    estudo('s02-k12', C, 'etp-6029', 25),
    estudo('s02-k13', C, 'lg-maria-penha', 30),
    estudo('s02-k14', R, 'cg-saude-ciencia', 20),
    estudo('s02-k15', C, 'ing-vocabulario', 25),
    estudo('s02-k16', C, 'dp-parte-geral', 30),
  ],
  /* -------- Semana 3 -------- */
  [
    estudo('s03-k01', N, 'lp-regencia', 40),
    estudo('s03-k02', N, 'lp-crase', 40),
    bateria('s03-k03', C, ['lp-coesao'], 30, 'coesão e conectores'),
    estudo('s03-k04', C, 'mat-porcentagem', 40),
    estudo('s03-k05', R, 'mat-saude', 30),
    estudo('s03-k06', C, 'rl-tautologia', 30),
    estudo('s03-k07', C, 'inf-word', 35),
    estudo('s03-k08', R, 'inf-powerpoint', 25),
    estudo('s03-k09', C, 'dc-direitos-sociais-politicos', 30),
    estudo('s03-k10', C, 'da-poderes', 30),
    estudo('s03-k11', C, 'srv-8112-direitos', 30),
    estudo('s03-k12', C, 'etp-conflito', 25),
    estudo('s03-k13', C, 'lg-eca', 30),
    estudo('s03-k14', R, 'reg-rs-historia', 25),
    estudo('s03-k15', C, 'crim-local', 35),
    estudo('s03-k16', R, 'cg-meio-ambiente', 20),
    estudo('s03-k17', C, 'dpp-inquerito-acao', 30),
  ],
  /* -------- Semana 4 -------- */
  [
    estudo('s04-k01', N, 'lp-pontuacao', 40),
    estudo('s04-k02', N, 'lp-termos-oracao', 35),
    simulado('s04-k03', 1),
    estudo('s04-k04', C, 'mat-juros', 40),
    estudo('s04-k05', R, 'mat-funcoes', 30),
    estudo('s04-k06', C, 'rl-argumentos', 35),
    estudo('s04-k07', C, 'inf-excel', 40),
    estudo('s04-k08', R, 'inf-linux', 25),
    estudo('s04-k09', C, 'dc-administracao-publica', 35),
    estudo('s04-k10', C, 'da-atos', 40),
    estudo('s04-k11', C, 'srv-8112-disciplinar', 35),
    estudo('s04-k12', C, 'etp-lai', 30),
    estudo('s04-k13', C, 'lg-pessoa-idosa', 25),
    estudo('s04-k14', R, 'reg-rs-geografia', 25),
    estudo('s04-k15', C, 'crim-vestigios', 30),
    estudo('s04-k16', R, 'cg-economia-sociedade', 20),
    estudo('s04-k17', C, 'ing-gramatica', 25),
    estudo('s04-k18', C, 'dpp-prisoes', 30),
  ],
  /* -------- Semana 5 — Mês 2: aprofundamento -------- */
  [
    estudo('s05-k01', N, 'lp-periodo-composto', 40),
    estudo('s05-k02', N, 'lp-colocacao', 35),
    bateria('s05-k03', C, ['lp-reescrita'], 30, 'reescrita de frases'),
    estudo('s05-k04', C, 'mat-equacoes', 40),
    estudo('s05-k05', R, 'mat-sequencias', 30),
    estudo('s05-k06', C, 'rl-quantificadores', 35),
    estudo('s05-k07', C, 'inf-internet', 35),
    estudo('s05-k08', R, 'inf-sei', 25),
    estudo('s05-k09', C, 'dc-organizacao-estado', 30),
    estudo('s05-k10', C, 'da-agentes', 30),
    estudo('s05-k11', C, 'srv-estatutos-sul', 30),
    estudo('s05-k12', C, 'etp-lgpd', 30),
    estudo('s05-k13', C, 'lg-igualdade-racial', 25),
    estudo('s05-k14', R, 'reg-sc-historia', 25),
    estudo('s05-k15', C, 'crim-balistica', 30),
    estudo('s05-k16', C, 'red-dissertacao', 40),
    estudo('s05-k17', R, 'cg-politica', 20),
    estudo('s05-k18', C, 'dpp-provas', 30),
  ],
  /* -------- Semana 6 -------- */
  [
    estudo('s06-k01', N, 'lp-coesao', 40),
    estudo('s06-k02', N, 'lp-semantica', 35),
    bateria('s06-k03', C, ['lp-interpretacao'], 30, 'interpretação de texto (textos longos)'),
    estudo('s06-k04', C, 'mat-estatistica', 40),
    estudo('s06-k05', C, 'rl-sequencias', 30),
    estudo('s06-k06', C, 'inf-email', 30),
    estudo('s06-k07', R, 'inf-ia', 25),
    estudo('s06-k08', C, 'dc-poderes-controle', 30),
    estudo('s06-k09', C, 'da-responsabilidade', 30),
    estudo('s06-k10', R, 'srv-ebserh', 25),
    estudo('s06-k11', C, 'etp-assedio', 25),
    estudo('s06-k12', C, 'lg-pcd', 25),
    estudo('s06-k13', R, 'reg-sc-geografia', 25),
    estudo('s06-k14', C, 'crim-papiloscopia', 30),
    estudo('s06-k15', C, 'red-laudo-parecer', 40),
    estudo('s06-k16', R, 'cg-tecnologia', 20),
    estudo('s06-k17', C, 'ing-leitura', 30),
    estudo('s06-k18', C, 'dp-crimes-adm-publica', 30),
    estudo('s06-k19', C, 'rl-cientifico', 30),
  ],
  /* -------- Semana 7 -------- */
  [
    estudo('s07-k01', N, 'lp-interpretacao', 40),
    estudo('s07-k02', N, 'lp-tipologia', 35),
    bateria('s07-k03', C, ['portugues'], 30, 'prova mista de Português'),
    estudo('s07-k04', C, 'mat-contagem-probabilidade', 40),
    estudo('s07-k05', C, 'rl-associacao', 35),
    estudo('s07-k06', C, 'inf-nuvem', 30),
    leiSeca('s07-k07', C, 'dc-direitos-individuais', 30, 'CF arts. 1º a 5º', 'Leitura ativa dos arts. 1º a 5º da Constituição, marcando incisos que a banca troca (prazos, “salvo”, “exceto”).'),
    estudo('s07-k08', C, 'da-improbidade', 35),
    leiSeca('s07-k09', C, 'srv-8112-provimento', 30, 'Lei 8.112/1990 (ou o estatuto do seu edital)', 'Leia provimento, posse, exercício, estágio probatório, vacância, licenças e penalidades; anote os prazos.'),
    leiSeca('s07-k10', C, 'etp-lai', 30, 'LAI e LGPD', 'Prazos da LAI (pedido, prorrogação, recurso, sigilo) e bases legais/dados sensíveis da LGPD.'),
    estudo('s07-k11', C, 'lg-tortura-abuso', 30),
    estudo('s07-k12', R, 'reg-pr-historia', 25),
    estudo('s07-k13', C, 'crim-genetica', 30),
    estudo('s07-k14', C, 'red-criterios', 30),
    estudo('s07-k15', R, 'cg-mundo', 20),
    estudo('s07-k16', C, 'dp-leis-especiais', 30),
    estudo('s07-k17', C, 'etp-usuario', 25),
  ],
  /* -------- Semana 8 -------- */
  [
    estudo('s08-k01', N, 'lp-reescrita', 40),
    estudo('s08-k02', N, 'lp-redacao-oficial', 40),
    simulado('s08-k03', 2),
    estudo('s08-k04', C, 'mat-geometria', 40),
    estudo('s08-k05', C, 'rl-conjuntos', 30),
    bateria('s08-k06', C, ['inf-excel'], 30, 'Excel e planilhas'),
    leiSeca('s08-k07', C, 'dc-administracao-publica', 30, 'CF arts. 37 a 41', 'Princípios, acesso a cargos, acumulação, estabilidade e responsabilidade civil do Estado — letra da lei.'),
    estudo('s08-k08', C, 'da-processo', 30),
    bateria('s08-k09', C, ['srv-8112-provimento', 'srv-8112-direitos', 'srv-8112-disciplinar'], 30, 'regime jurídico do servidor'),
    bateria('s08-k10', C, ['etica-servico-publico'], 30, 'ética, LAI e LGPD (Certo/Errado)'),
    estudo('s08-k11', C, 'lg-direitos-humanos', 25),
    estudo('s08-k12', R, 'reg-pr-geografia', 25),
    bateria('s08-k13', C, ['crim-local', 'crim-vestigios', 'crim-balistica', 'crim-papiloscopia', 'crim-genetica'], 30, 'noções de criminalística'),
    discursiva('s08-k14'),
    atualidades('s08-k15'),
    bateria('s08-k16', C, ['ing-leitura', 'ing-vocabulario'], 25, 'textos técnicos em inglês'),
  ],
  /* -------- Semana 9 — Mês 3: reta final -------- */
  [
    bateria('s09-k01', N, ['portugues'], 40, 'bateria da banca-alvo'),
    cartoes('s09-k02', C, ['portugues'], 20, 'flashcards de Português'),
    bateria('s09-k03', C, ['mat-porcentagem', 'mat-regra-tres', 'mat-juros'], 30, 'bateria mista'),
    bateria('s09-k04', C, ['rlm'], 30, 'bateria mista'),
    bateria('s09-k05', C, ['informatica'], 30, 'bateria mista'),
    estudo('s09-k06', C, 'da-licitacoes', 30),
    bateria('s09-k07', C, ['direito-adm'], 30, 'Direito Constitucional e Administrativo (Certo/Errado)'),
    bateria('s09-k08', C, ['srv-municipal'], 25, 'lei do seu município', '15 itens de lei seca do estatuto e da Lei Orgânica do município do edital (monte-os a partir do texto oficial).'),
    bateria('s09-k09', C, ['etica-servico-publico'], 25, 'bateria mista'),
    bateria('s09-k10', C, ['lg-maria-penha', 'lg-eca', 'lg-pessoa-idosa'], 25, 'estatutos e Maria da Penha'),
    discursiva('s09-k11'),
    atualidades('s09-k12'),
    bateria('s09-k13', C, ['dp-parte-geral', 'dpp-inquerito-acao', 'dpp-prisoes', 'dpp-provas'], 25, 'bateria mista'),
  ],
  /* -------- Semana 10 -------- */
  [
    bateria('s10-k01', N, ['portugues'], 40, 'bateria da banca-alvo'),
    simulado('s10-k02', 3),
    bateria('s10-k03', C, ['mat-equacoes', 'mat-estatistica', 'mat-contagem-probabilidade'], 30, 'bateria mista'),
    bateria('s10-k04', C, ['rlm'], 30, 'bateria mista'),
    bateria('s10-k05', C, ['informatica'], 30, 'bateria mista'),
    estudo('s10-k06', C, 'da-controle', 25),
    cartoes('s10-k07', C, ['srv-8112-disciplinar', 'srv-8112-provimento'], 20, 'prazos do estatuto'),
    bateria('s10-k08', C, ['lg-igualdade-racial', 'lg-pcd', 'lg-tortura-abuso', 'lg-direitos-humanos'], 25, 'bateria mista'),
    discursiva('s10-k09'),
    bateria('s10-k10', C, ['crim-local', 'crim-vestigios', 'crim-balistica'], 25, 'bateria mista'),
    atualidades('s10-k11'),
    bateria('s10-k12', C, ['ing-leitura', 'ing-gramatica'], 25, 'textos técnicos em inglês'),
  ],
  /* -------- Semana 11 -------- */
  [
    bateria('s11-k01', N, ['portugues'], 40, 'bateria final'),
    simulado('s11-k02', 4),
    bateria('s11-k03', C, ['rlm', 'mat-porcentagem'], 30, 'bateria final de RLM e Matemática'),
    bateria('s11-k04', C, ['informatica'], 30, 'bateria final'),
    bateria('s11-k05', C, ['direito-adm'], 30, 'bateria final de Direito'),
    cartoes('s11-k06', C, ['etica-servico-publico', 'etp-lai', 'etp-lgpd'], 20, 'prazos de LAI e LGPD'),
    cartoes('s11-k07', C, ['lg-maria-penha', 'lg-eca'], 20, 'leis especiais'),
    atualidades('s11-k08'),
  ],
  /* -------- Semana 12 — véspera -------- */
  [
    cartoes('s12-k01', N, ['portugues'], 20, 'revisão leve de Português'),
    cartoes('s12-k02', C, ['basicas-mistas'], 30, 'flashcards dos pontos fracos'),
  ],
];

const indice = new Map<string, BlocoBasico>();
for (const lista of BASICAS_POR_SEMANA) {
  for (const b of lista) {
    if (indice.has(b.id)) throw new Error(`Id de bloco de básicas duplicado: ${b.id}`);
    indice.set(b.id, b);
  }
}

/** Blocos de básicas da semana `n` (1..12), com o campo `semana` preenchido. */
export function basicasDaSemana(n: number): BlocoSemana[] {
  const nn = String(n).padStart(2, '0');
  return (BASICAS_POR_SEMANA[n - 1] ?? []).map((b) => {
    if (!b.id.startsWith(`s${nn}-k`)) throw new Error(`Bloco ${b.id} está na semana ${n}`);
    return { ...b, semana: n };
  });
}
