/**
 * Sites de bancas do Sul.
 * - FUNDATEC: https://www.fundatec.org.br/portal/concursos/ (caixas "Inscrições abertas"; página em ISO-8859-1).
 * - FEPESE:   https://fepese.org.br/concursos/ (destaques com link para o portal de cada concurso).
 * As páginas das bancas não listam cargos em HTML (estão no edital em PDF); por isso:
 *   - se o título já cita médicos → vira registro próprio;
 *   - caso contrário → vira "link relacionado" em concursos do mesmo órgão/cidade vindos de outras fontes.
 */
import * as cheerio from 'cheerio';
import type { Geo } from '../../../src/shared/concursos/geo';
import { periodoListagem } from '../extract';
import type { ItemBanca } from './types';

export const FUNDATEC_URL = 'https://www.fundatec.org.br/portal/concursos/';
export const FEPESE_URL = 'https://fepese.org.br/concursos/';

export function parseFundatec(html: string, geo: Geo, referencia: Date): ItemBanca[] {
  const $ = cheerio.load(html);
  const itens: ItemBanca[] = [];
  $('.box-inscricoes-abertas').each((_, el) => {
    const box = $(el);
    const titulo = box.find('.box-title').first().text().replace(/\s+/g, ' ').trim();
    const subtitulo = box.find('.box-subtitle').first().text().replace(/\s+/g, ' ').trim();
    const href = box.find('a[href*="index_concursos"]').first().attr('href');
    if (!titulo || !href) return;
    const url = new URL(href, FUNDATEC_URL).toString();
    const uf = geo.ufPorSigla(titulo) ?? geo.ufPorNomeEstado(titulo);
    const fim = periodoListagem(subtitulo.replace(/^.*Inscri[çc][õo]es at[ée]/i, ''), referencia).fim;
    itens.push({
      banca: 'FUNDATEC',
      fonte: 'fundatec',
      orgao: titulo,
      descricao: subtitulo.replace(/Inscri[çc][õo]es at[ée].*$/i, '').trim(),
      uf,
      url,
      inscricoesFim: /Inscri[çc][õo]es at[ée]/i.test(subtitulo) ? fim : null,
    });
  });
  return itens;
}

export function parseFepese(html: string, geo: Geo): ItemBanca[] {
  const $ = cheerio.load(html);
  const itens: ItemBanca[] = [];
  $('.highlight').each((_, el) => {
    const bloco = $(el);
    const titulo = bloco.find('strong').first().text().replace(/\s+/g, ' ').trim();
    const href = bloco.find('a[href]').first().attr('href');
    if (!titulo || !href?.startsWith('http')) return;
    const descricao = bloco.find('p').first().text().replace(/\s+/g, ' ').trim();
    const orgao = titulo.replace(/^\d{4}\s*-\s*/, '');
    // FEPESE atua majoritariamente em SC; confirmamos pela lista de municípios.
    const cidade = orgao.replace(/^(Prefeitura|C[âa]mara|Munic[íi]pio)( Municipal)?( d[eoa]s?)? /i, '');
    const ufs = geo.ufsDoMunicipio(cidade);
    const uf = geo.ufPorSigla(titulo) ?? (ufs.includes('SC') ? 'SC' : ufs[0] ?? null);
    itens.push({ banca: 'FEPESE', fonte: 'fepese', orgao, descricao, uf, url: href, inscricoesFim: null });
  });
  const vistos = new Set<string>();
  return itens.filter((i) => (vistos.has(i.url) ? false : (vistos.add(i.url), true)));
}
