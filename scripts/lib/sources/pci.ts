/**
 * PCI Concursos — https://www.pciconcursos.com.br
 * Listagens usadas: /concursos/{sul,sudeste,centrooeste,nordeste,norte}/ (UF na coluna .cc) e /concursos/nacional/
 * (órgãos nacionais: a UF vem da lotação citada na notícia). O PCI não tem listagem por estado.
 * Itens da listagem: <div class="na|da|ea" data-url> com .ca (órgão/link), .cc (UF), .cd (vagas/cargos), .ce (datas).
 * Os links de edital (PDF) ficam atrás de captcha e NÃO são contornados: usamos a página da notícia.
 */
import * as cheerio from 'cheerio';
import { parseReais, parseVagas } from '../../../src/shared/concursos/normalize';
import { UFS, type UF } from '../../../src/shared/concursos/schema';
import { periodoListagem } from '../extract';
import type { Detalhe, ItemListagem } from './types';

export const PCI_LISTAGENS = {
  sul: 'https://www.pciconcursos.com.br/concursos/sul/',
  sudeste: 'https://www.pciconcursos.com.br/concursos/sudeste/',
  centrooeste: 'https://www.pciconcursos.com.br/concursos/centrooeste/',
  nordeste: 'https://www.pciconcursos.com.br/concursos/nordeste/',
  norte: 'https://www.pciconcursos.com.br/concursos/norte/',
  nacional: 'https://www.pciconcursos.com.br/concursos/nacional/',
} as const;

/** Listagens regionais (a nacional é tratada à parte). */
export const PCI_REGIOES = ['sul', 'sudeste', 'centrooeste', 'nordeste', 'norte'] as const;

const UF_VALIDAS = new Set<string>(UFS);

export function parseListagemPci(html: string, referencia: Date): ItemListagem[] {
  const $ = cheerio.load(html);
  const itens: ItemListagem[] = [];
  $('div.ca').each((_, el) => {
    const ca = $(el);
    const container = ca.parent();
    const link = ca.find('a').first();
    const url = link.attr('href') ?? container.attr('data-url') ?? '';
    if (!url.startsWith('http')) return;
    const orgao = link.text().replace(/\s+/g, ' ').trim();
    const titulo = (link.attr('title') ?? orgao).replace(/\s+/g, ' ').trim();
    const ufTexto = container.find('div.cc').first().text().trim().toUpperCase();
    const cd = container.find('div.cd').first();
    const primeiraLinha = cheerio.load(`<div>${(cd.html() ?? '').split(/<br\s*\/?>/i)[0] ?? ''}</div>`)('div').text().trim();
    const spanExterno = cd.children('span').first();
    const escolaridade = spanExterno.children('span').first().text().replace(/\s+/g, ' ').trim();
    const cargosTexto = spanExterno.clone().children('span').remove().end().text().replace(/\s+/g, ' ').trim();
    const datas = container.find('div.ce').first().text().replace(/\s+/g, ' ').trim();
    itens.push({
      fonte: 'pci',
      url,
      orgao,
      titulo,
      uf: UF_VALIDAS.has(ufTexto) ? (ufTexto as UF) : null,
      cargosTexto,
      vagas: parseVagas(primeiraLinha),
      remuneracaoMax: parseReais(primeiraLinha),
      escolaridade,
      inscricoes: periodoListagem(datas, referencia),
      incompleto: /v[áa]rios cargos|diversos cargos|diversas [áa]reas|\.\.\.|…|e outros|entre outros/i.test(cargosTexto) || !cargosTexto,
    });
  });
  // A mesma notícia pode aparecer em destaque e na lista.
  const vistos = new Set<string>();
  return itens.filter((i) => (vistos.has(i.url) ? false : (vistos.add(i.url), true)));
}

export function parseDetalhePci(html: string): Detalhe {
  const $ = cheerio.load(html);
  const artigo = $('article#noticia').first().length ? $('article#noticia').first() : $('article').first();
  const corpo = artigo.find('[itemprop="articleBody"]').first().length ? artigo.find('[itemprop="articleBody"]').first() : artigo;
  corpo.find('script, style, ins, .ads10, .ads_mobi').remove();
  const linhas: string[] = [];
  corpo.find('li, td, p, h2, h3').each((_, el) => {
    const t = $(el).text().replace(/\s+/g, ' ').trim();
    if (t) linhas.push(t);
  });
  const titulo = artigo.find('h1').first().text().replace(/\s+/g, ' ').trim();
  const descricao = artigo.find('.description').first().text().replace(/\s+/g, ' ').trim();
  const publicadoEm = $('abbr.published').attr('title') ?? null;
  const observacoes: string[] = [];
  $('.edital-pdf-link').each((_, el) => {
    const t = $(el).text().replace(/\s+/g, ' ').trim();
    if (t) observacoes.push(`${t} — disponível na página da notícia (PCI)`);
  });
  return {
    titulo,
    texto: [titulo, descricao, ...linhas].join('\n'),
    linhas,
    publicadoEm,
    observacoes,
  };
}
