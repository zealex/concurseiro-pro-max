/**
 * Diários Oficiais dos Municípios na plataforma SIGPub (www.diariomunicipal.com.br) — associações de municípios de
 * ~18 estados (FAMURS/RS, AMP/PR, AMM-MG, APRECE/CE, FAMUP/PB, AMUPE/PE...). É onde o edital sai PRIMEIRO: muitas
 * prefeituras pequenas só publicam ali. robots.txt permite; a busca é um GET simples, sem captcha.
 *
 * Fluxo: busca "médico" em matérias com "edital" no título dos últimos dias → descarta pelo título o que claramente
 * não é abertura (convocação, resultado, licitação...) → abre a matéria (texto integral do edital) → só vira registro
 * se o texto for de ABERTURA de seleção e oferecer vaga de médico.
 *
 * Fora do Radar (verificado em 25/11/2026): DOU/in.gov.br e DOM/SC (diariomunicipal.sc.gov.br) proíbem robôs no
 * robots.txt; a API do Querido Diário (api.queridodiario.org.br) estava fora do ar (HTTP 503).
 */
import * as cheerio from 'cheerio';
import type { Detalhe, ItemListagem } from './types';

export const DIARIO_BASE = 'https://www.diariomunicipal.com.br';

/** Associações/entidades com diário na plataforma (a UF vem da própria matéria: "ESTADO DE MINAS GERAIS"). */
export const ENTIDADES_DIARIO = [
  'famurs', 'amp', 'amm-mg', 'amm-mt', 'aemerj', 'agm', 'fgm', 'ama', 'amupe', 'famup', 'femurn', 'aprece', 'apm',
  'appm', 'famep', 'aam', 'arom', 'amr', 'ms', 'sergipe',
] as const;

/** Dias para trás em cada busca (o robô roda de hora em hora; a janela cobre atrasos do cron e fins de semana). */
export const DIAS_JANELA_DIARIO = 3;
export const MAX_PAGINAS_DIARIO = 4;

const limpar = (s: string) => s.replace(/\s+/g, ' ').trim();
/** Data no fuso de Brasília (UTC−3): o site rejeita "data final" no futuro — às 22h de Brasília já é amanhã em UTC. */
const iso = (d: Date) => new Date(d.getTime() - 3 * 3_600_000).toISOString().slice(0, 10);

export function urlBuscaDiario(entidade: string, agora: Date, pagina = 1): string {
  const inicio = new Date(agora.getTime() - DIAS_JANELA_DIARIO * 86_400_000);
  const q = new URLSearchParams({
    'busca_avancada[texto]': 'médico',
    'busca_avancada[titulo]': 'edital',
    'busca_avancada[dataInicio]': iso(inicio),
    'busca_avancada[dataFim]': iso(agora),
    'busca_avancada[pagina]': String(pagina),
  });
  return `${DIARIO_BASE}/${entidade}/pesquisar?${q.toString()}`;
}

/** Títulos que nunca são abertura de seleção (o resto é aberto e conferido pelo texto). */
const RE_RUIDO_TITULO =
  /convoca|nomea|\bposse\b|resultado|classifica|homologa|retifica|deferi|gabarito|\bnotas?\b|licita|preg[ãa]o|credenciamento|aditivo|extrato de contrato|\bcontratos?\b(?!\s+tempor)|\bata\b|registro de pre|chamamento|\bchamada\b|inexigibilidade|dispensa|cancelamento|anula|revoga|suspens|prorroga|recurso|lota[çc][ãa]o|exonera|aposentadoria|portaria/i;

export function tituloPodeSerAbertura(titulo: string): boolean {
  return !RE_RUIDO_TITULO.test(titulo);
}

export interface ResultadoBuscaDiario {
  itens: ItemListagem[];
  total: number;
  ate: number;
}

export function parseBuscaDiario(html: string): ResultadoBuscaDiario {
  const $ = cheerio.load(html);
  const itens: ItemListagem[] = [];
  $('li.materia-card').each((_, li) => {
    const a = $(li).find('.materia-card__titulo a').first();
    const href = a.attr('href');
    const titulo = limpar(a.text());
    if (!href || !titulo) return;
    itens.push({
      fonte: 'diario-oficial',
      url: new URL(href, DIARIO_BASE).toString(),
      orgao: capitalizarEntidade(limpar($(li).find('.materia-card__entidade').first().text())),
      titulo,
      uf: null,
      cargosTexto: '',
      vagas: null,
      remuneracaoMax: null,
      escolaridade: '',
      inscricoes: { inicio: null, fim: null },
      incompleto: true,
    });
  });
  const resumo = limpar($('.busca-avancada__resumo').first().text());
  const nums = resumo.match(/a\s+(\d+)\s+de\s+(\d+)/);
  return { itens, ate: nums ? Number(nums[1]) : itens.length, total: nums ? Number(nums[2]) : itens.length };
}

const CONECTIVOS = new Set(['de', 'da', 'do', 'das', 'dos', 'e']);
/** "PREFEITURA MUNICIPAL DE SALTO DO LONTRA" → "Prefeitura Municipal de Salto do Lontra" (só se vier em caixa alta). */
export function capitalizarEntidade(s: string): string {
  if (s !== s.toUpperCase()) return s;
  return s
    .toLowerCase()
    .split(' ')
    .map((w, i) => (i > 0 && CONECTIVOS.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

export function parseMateriaDiario(html: string): Detalhe {
  const $ = cheerio.load(html);
  const titulo = limpar($('title').first().text().replace(/\s+[—-]\s+Di[áa]rio Oficial.*$/i, ''));
  const data = ($('meta[name="description"]').attr('content') ?? '').match(/(\d{2})\/(\d{2})\/(\d{4})/);
  const corpo = $('#materia').length ? $('#materia') : $('article').first();
  corpo.find('script, style').remove();
  const linhas: string[] = [];
  // Elementos "folha" (sem blocos dentro): cada parágrafo/célula vira uma linha.
  corpo.find('p, li, td, h1, h2, h3, h4, div, span').each((_, el) => {
    if ($(el).children('p, div, table, ul, ol').length) return;
    const t = limpar($(el).text());
    if (t && (linhas.at(-1) ?? '') !== t) linhas.push(t);
  });
  return {
    titulo,
    texto: [titulo, ...linhas].join('\n'),
    linhas,
    publicadoEm: data ? `${data[3]}-${data[2]}-${data[1]}T12:00:00-03:00` : null,
    observacoes: [],
    campos: {
      estado: limpar($('.documento__uf').first().text()),
      entidade: limpar($('.documento__entidade').first().text()),
    },
  };
}

/** O texto é de ABERTURA de seleção (e não convocação, resultado, licitação)? */
export function atoDeAbertura(texto: string): boolean {
  return /abert[ao]s?\s+(?:as\s+)?inscri|inscri[çc][õo]es\s+(?:estar[ãa]o\s+|ficam\s+|est[ãa]o\s+)?abertas|torna[m]?\s+p[úu]blic[oa][^.]{0,200}(?:abertura|realiza[çc][ãa]o|inscri)|edital\s+de\s+abertura|per[íi]odo\s+de\s+inscri|inscri[çc][õo]es\s+(?:poder[ãa]o\s+ser\s+feitas|ser[ãa]o\s+realizadas)/i.test(
    texto,
  );
}

/** Oferece vaga de médico (e não só cita "atestado médico")? Cargo/vaga perto da palavra, ou salário/jornada na linha. */
export function ofereceVagaMedica(texto: string): boolean {
  const semVeterinario = texto.replace(/m[ée]dic[oa]s?\s+veterin[áa]ri[oa]s?/gi, ' ');
  return (
    /\b(?:cargos?|fun[çc][ãa]o|fun[çc][õo]es|empregos?|vagas?|especialidades?)\b[^.\n]{0,160}\bm[ée]dic[oa]s?\b/i.test(semVeterinario) ||
    /\bm[ée]dic[oa]s?\b[^.\n]{0,100}(?:R\$|\d+\s*(?:h\b|horas)|vagas?|cadastro\s+reserva|\bCR\b)/i.test(semVeterinario)
  );
}
