/**
 * Instituto Objetiva (objetivas.com.br) — banca grande no RS, SC e PR, com concursos também em outros estados.
 * Foi quem organizou Chapecó/SC 2026, publicado na home da banca no mesmo dia do edital.
 *
 * - Listagens: "Últimas Notícias" da home (editais recém-publicados, antes mesmo de abrir inscrição) e
 *   concursos.objetivas.com.br/index/abertos/ (inscrições abertas). Ambas apontam para /informacoes/{id}/.
 * - Página do concurso: título "CIDADE/UF - Tipo de órgão - Concurso Público N/AAAA", período de inscrição,
 *   publicações (PDF do edital com link público) e a TABELA DE VAGAS com todos os cargos.
 * Páginas de concursos.objetivas.com.br vêm em ISO-8859-1 (buscarTexto decodifica pelo cabeçalho).
 */
import * as cheerio from 'cheerio';
import { isUF, type UF } from '../../../src/shared/concursos/schema';
import { periodoListagem } from '../extract';
import type { Detalhe, ItemBanca, ItemListagem } from './types';

export const OBJETIVA_LISTAGENS = ['https://www.objetivas.com.br/home', 'https://concursos.objetivas.com.br/index/abertos/'] as const;

const limpar = (s: string) => s.replace(/\s+/g, ' ').trim();

/**
 * "CHAPECÓ/SC - Município - Concurso Público 003/2026" → partes.
 * Órgãos que não são da prefeitura vêm antes da cidade: "EMPRESA PÚBLICA ... (EPTC) - PORTO ALEGRE/RS".
 */
export function partesTituloObjetiva(titulo: string): {
  cidade: string;
  uf: UF | null;
  tipoOrgao: string | null;
  /** Nome próprio do órgão, quando o título o traz antes da cidade. */
  nomeOrgao: string | null;
  resto: string;
} {
  // "/UF" de verdade: duas maiúsculas seguidas de fim, espaço ou hífen ("S/A (EPTC)" não é UF).
  const m = limpar(titulo).match(/^(.+?)\s*\/\s*([A-Z]{2})(?=$|\s|-)\s*(?:-\s*(.*))?$/);
  if (!m) return { cidade: '', uf: null, tipoOrgao: null, nomeOrgao: null, resto: limpar(titulo) };
  const [, antesDaUf = '', ufBruta = '', restoBruto = ''] = m;
  const antes = antesDaUf.split(/\s+-\s+/);
  const cidadeBruta = antes.pop() ?? '';
  const partes = restoBruto.split(/\s+-\s+/);
  const tipoOrgao = partes.length > 1 ? (partes[0] ?? null) : null;
  return {
    cidade: capitalizarNome(cidadeBruta),
    uf: isUF(ufBruta) ? ufBruta : null,
    tipoOrgao,
    nomeOrgao: antes.length ? capitalizarNome(antes.join(' - ')) : null,
    resto: partes.length > 1 ? partes.slice(1).join(' - ') : restoBruto,
  };
}

/** Nome do órgão: o nome próprio, se houver; senão, pelo tipo informado pela banca ("Município" → "Prefeitura de X"). */
export function orgaoObjetiva(cidade: string, tipoOrgao: string | null, nomeOrgao: string | null = null): string {
  if (nomeOrgao) return nomeOrgao;
  const tipo = limpar(tipoOrgao ?? '');
  if (!tipo || /^munic[íi]pio$|^prefeitura/i.test(tipo)) return `Prefeitura de ${cidade}`;
  return `${tipo} de ${cidade}`;
}

/** "Inscrições de 07/12/2026, às 13h, até 07/01/2027" ou "Inscrições de 09/11/2026 a 09/12/2026". */
export function periodoObjetiva(texto: string): { inicio: string; fim: string } | null {
  const m = texto.match(/Inscri[çc][õo]es de\s*(\d{2})\/(\d{2})\/(\d{4}).{0,40}?\s(?:a|at[ée])\s+(\d{2})\/(\d{2})\/(\d{4})/i);
  if (!m) return null;
  const [, d1, m1, a1, d2, m2, a2] = m;
  return { inicio: `${a1}-${m1}-${d1}`, fim: `${a2}-${m2}-${d2}` };
}

const CONECTIVOS = new Set(['de', 'da', 'do', 'das', 'dos', 'e']);
/** "SÃO MIGUEL DO OESTE" → "São Miguel do Oeste"; siglas ("S/A", "(EPTC)") ficam em caixa alta. */
function capitalizarNome(s: string): string {
  return limpar(s)
    .split(' ')
    .map((original, i) => {
      if (/^\(?[A-Z0-9]{2,8}\)?$/.test(original) && /[()]/.test(original)) return original;
      if (/\//.test(original)) return original.toUpperCase();
      const w = original.toLowerCase();
      return i > 0 && CONECTIVOS.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ');
}

export function parseListagemObjetiva(html: string, base: string, referencia: Date): ItemListagem[] {
  const $ = cheerio.load(html);
  const itens: ItemListagem[] = [];
  const vistos = new Set<string>();
  $('a[href*="/informacoes/"]').each((_, el) => {
    const a = $(el);
    const href = a.attr('href');
    if (!href) return;
    const url = new URL(href, base).toString().replace(/\/?$/, '/');
    if (vistos.has(url)) return;
    // Home: <a><div class="noticia"><h3>CIDADE/UF</h3><p>texto</p><span>data</span></div></a>
    // Abertos: <h3><a>CIDADE/UF - Câmara Municipal - Concurso Público 01/2026</a></h3> dentro de li.item
    const noticia = a.find('.noticia').first();
    const bloco = noticia.length ? noticia : a.closest('li.item');
    const titulo = limpar(noticia.length ? noticia.find('h3').first().text() : a.text());
    if (!titulo || !/\/[A-Z]{2}\b/.test(titulo)) return;
    const texto = limpar(noticia.length ? noticia.find('p').first().text() : bloco.find('.inscricoes-info-mobile-only, p').text());
    const { cidade, uf, tipoOrgao, nomeOrgao } = partesTituloObjetiva(titulo);
    if (!uf || !cidade) return;
    vistos.add(url);
    itens.push({
      fonte: 'objetiva',
      url,
      orgao: orgaoObjetiva(cidade, tipoOrgao, nomeOrgao),
      titulo: `Instituto Objetiva: ${titulo}${texto ? ` — ${texto}` : ''}`,
      uf,
      cargosTexto: '',
      vagas: null,
      remuneracaoMax: null,
      escolaridade: '',
      inscricoes: periodoObjetiva(texto) ?? periodoListagem(texto.replace(/^.*?Inscri[çc][õo]es de/i, ''), referencia),
      incompleto: true,
    });
  });
  return itens;
}

/**
 * Itens da listagem como "concursos da banca": viram link oficial + prazo nos registros do mesmo órgão/cidade vindos
 * de outras fontes. É o que sobra quando a página do concurso recusa o robô (403 a servidores de datacenter).
 */
export function itensBancaObjetiva(itens: ItemListagem[]): ItemBanca[] {
  return itens.map((i) => ({
    banca: 'Instituto Objetiva',
    fonte: 'objetiva',
    orgao: i.orgao,
    descricao: i.titulo.replace(/^Instituto Objetiva:\s*/, ''),
    uf: i.uf,
    url: i.url,
    inscricoesFim: i.inscricoes.fim,
  }));
}

export function parseDetalheObjetiva(html: string): Detalhe {
  const $ = cheerio.load(html);
  const titulo = limpar($('.dados h2').first().text() || $('h2').first().text());
  const linhas: string[] = [];
  const periodo = limpar($('.periodoInscricoes').first().text());
  if (periodo) linhas.push(periodo);
  // Cargos: uma linha por célula da tabela de vagas.
  $('#blocoListaVagas td').each((_, el) => {
    const t = limpar($(el).text());
    if (t && !/^(vide edital|r\$\s*[\d.,]+)$/i.test(t)) linhas.push(t);
  });
  const publicacoes: { nome: string; url: string | null; data: string | null }[] = [];
  $('#blocoPublicacoes li').each((_, el) => {
    const a = $(el).find('a').first();
    const nome = limpar(a.attr('data-astv') ?? a.text());
    if (!nome) return;
    const data = limpar($(el).text()).match(/(\d{2})\/(\d{2})\/(\d{4})/);
    publicacoes.push({ nome, url: a.attr('href') ?? null, data: data ? `${data[3]}-${data[2]}-${data[1]}` : null });
  });
  for (const p of publicacoes) linhas.push(p.nome);
  const abertura = publicacoes.find((p) => /abertura/i.test(p.nome)) ?? publicacoes.at(-1);
  return {
    titulo,
    texto: [titulo, ...linhas].join('\n'),
    linhas,
    // Data do edital de abertura (meio-dia, fuso de Brasília) → selo NOVO por data de publicação.
    publicadoEm: abertura?.data ? `${abertura.data}T12:00:00-03:00` : null,
    observacoes: abertura ? [`${abertura.nome} — PDF na página do concurso (Instituto Objetiva)`] : [],
    editalUrl: abertura?.url && /^https?:\/\//.test(abertura.url) ? abertura.url : null,
  };
}

