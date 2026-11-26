/**
 * Concursos no Brasil — https://concursosnobrasil.com/concursos/{pr,sc,rs}/
 * Listagem em <table>: órgão (link com title da notícia) + vagas. Cargos só na notícia.
 */
import * as cheerio from 'cheerio';
import { todosReais } from '../../../src/shared/concursos/normalize';
import type { UF } from '../../../src/shared/concursos/schema';
import type { Detalhe, ItemListagem } from './types';

export const CNB_LISTAGENS: Record<UF, string> = {
  PR: 'https://concursosnobrasil.com/concursos/pr/',
  SC: 'https://concursosnobrasil.com/concursos/sc/',
  RS: 'https://concursosnobrasil.com/concursos/rs/',
};

export function parseListagemCnb(html: string, uf: UF): ItemListagem[] {
  const $ = cheerio.load(html);
  const itens: ItemListagem[] = [];
  $('table tbody tr').each((_, tr) => {
    const tds = $(tr).find('td');
    const link = tds.first().find('a').first();
    const url = link.attr('href');
    if (!url?.startsWith('http')) return;
    const orgao = link.text().replace(/\s+/g, ' ').trim();
    const titulo = (link.attr('title') ?? orgao).replace(/\s+/g, ' ').trim();
    const vagasTexto = tds.eq(1).text().replace(/\s+/g, ' ').trim();
    const vagas = /^\d[\d.]*$/.test(vagasTexto) ? Number(vagasTexto.replace(/\./g, '')) : null;
    const reais = todosReais(titulo);
    itens.push({
      fonte: 'concursos-no-brasil',
      url,
      orgao,
      titulo,
      uf,
      cargosTexto: '',
      vagas,
      remuneracaoMax: reais.length ? Math.max(...reais) : null,
      escolaridade: '',
      inscricoes: { inicio: null, fim: null },
      incompleto: true,
    });
  });
  return itens;
}

export function parseDetalheCnb(html: string): Detalhe {
  const $ = cheerio.load(html);
  const artigo = $('article').first();
  artigo.find('script, style, form, .alinhads, .continua, .related-post, .share-bar, .post-list, nav, aside, [class*="newsletter"], .cb-follow').remove();
  const linhas: string[] = [];
  artigo.find('li, td, p, h2, h3').each((_, el) => {
    const t = $(el).text().replace(/\s+/g, ' ').trim();
    if (t && !/^Leia também/i.test(t)) linhas.push(t);
  });
  const titulo = artigo.find('h1').first().text().replace(/\s+/g, ' ').trim() || $('h1').first().text().trim();
  const publicadoEm = $('meta[property="article:published_time"]').attr('content') ?? null;
  return { titulo, texto: [titulo, ...linhas].join('\n'), linhas, publicadoEm, observacoes: [] };
}
