/**
 * JC Concursos — https://jcconcursos.com.br/concursos/inscricoes-abertas (lista nacional de concursos com inscrições
 * abertas, numa página só). Terceiro agregador independente: se PCI ou Concursos no Brasil mudarem o HTML, o Radar
 * continua enxergando os concursos maiores.
 *
 * Página do concurso (/concurso/{slug}): tabela de campos (Orgão, Cargos, Organizadora, Estados com Vagas, Cidades),
 * agenda (abertura/encerramento das inscrições, prova) e o resumo do edital com os cargos.
 * Os campos "Estágio"/"Empregos" e concursos só de nível médio ficam de fora pela escolaridade.
 */
import * as cheerio from 'cheerio';
import { isUF, UFS, type UF } from '../../../src/shared/concursos/schema';
import { todosReais } from '../../../src/shared/concursos/normalize';
import type { Detalhe, ItemListagem } from './types';

export const JC_BASE = 'https://jcconcursos.com.br';
export const JC_ABERTOS = `${JC_BASE}/concursos/inscricoes-abertas`;

const limpar = (s: string) => s.replace(/[​-‍﻿]/g, '').replace(/\s+/g, ' ').trim();
const RE_UF_SLUG = new RegExp(`-(${UFS.map((u) => u.toLowerCase()).join('|')})-(?:.*-)?\\d+$`);

/** UF do título "Aparecida de Goiânia (GO) 2026" ou do slug "concurso-aparecida-de-goiania-go-81274". */
export function ufDoItemJc(titulo: string, slug: string): UF | null {
  const doTitulo = titulo.match(/\(([A-Z]{2})\)/)?.[1];
  if (doTitulo && isUF(doTitulo)) return doTitulo;
  const doSlug = slug.match(RE_UF_SLUG)?.[1]?.toUpperCase();
  return doSlug && isUF(doSlug) ? doSlug : null;
}

export function parseListagemJc(html: string): ItemListagem[] {
  const $ = cheerio.load(html);
  const itens: ItemListagem[] = [];
  const vistos = new Set<string>();
  $('div.row.border-bottom').each((_, el) => {
    const bloco = $(el);
    const a = bloco.find('a[href^="/concurso/"]').first();
    const href = a.attr('href');
    if (!href) return;
    const url = `${JC_BASE}${href}`;
    if (vistos.has(url)) return;
    vistos.add(url);
    const h2 = a.find('h2').first().clone();
    h2.find('.badge').remove();
    const titulo = limpar(h2.text());
    const noticia = limpar(bloco.find('h3').first().text());
    const escolaridade = limpar(bloco.find('h3').first().nextAll('span').first().text());
    const badges = bloco.find('.salario_vaga_badge').map((__, b) => limpar($(b).text())).get();
    const salario = badges.find((b) => /at[ée]|de\s/i.test(b) && !/vagas?/i.test(b)) ?? '';
    const reais = todosReais(`R$ ${salario.replace(/^.*?(?:at[ée]|de)\s*/i, '')}`);
    const vagasTexto = badges.find((b) => /vagas?/i.test(b))?.match(/[\d.]+/)?.[0];
    itens.push({
      fonte: 'jc-concursos',
      url,
      orgao: titulo.replace(/\s*\([A-Z]{2}\)\s*/, ' ').replace(/\s+\d{4}\s*$/, '').trim(),
      titulo: noticia ? `${titulo} — ${noticia}` : titulo,
      uf: ufDoItemJc(titulo, href),
      cargosTexto: '',
      vagas: vagasTexto ? Number(vagasTexto.replace(/\./g, '')) : null,
      remuneracaoMax: reais.length ? Math.max(...reais) : null,
      escolaridade,
      inscricoes: { inicio: null, fim: null },
      incompleto: true,
    });
  });
  return itens;
}

/** "09/11/2026" → "2026-11-09". */
function dataIso(texto: string | undefined): string | null {
  const m = texto?.match(/(\d{2})\/(\d{2})\/(\d{4})/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : null;
}

export function parseDetalheJc(html: string): Detalhe {
  const $ = cheerio.load(html);
  const titulo = limpar($('h1').first().text());
  const campos: Record<string, string> = {};
  $('table tr').each((_, tr) => {
    const tds = $(tr).find('td');
    if (tds.length < 2) return;
    const rotulo = limpar(tds.first().text()).replace(/:$/, '');
    const valor = limpar(tds.eq(1).text());
    if (rotulo && valor && !(rotulo in campos)) campos[rotulo] = valor;
  });
  const inicio = dataIso(campos['Abertura das inscrições']);
  const fim = dataIso(campos['Encerramento das inscrições']);
  const prova = dataIso(campos.Prova);
  const linhas: string[] = [];
  if (inicio || fim) linhas.push(`Inscrições de ${campos['Abertura das inscrições'] ?? '?'} a ${campos['Encerramento das inscrições'] ?? '?'}`);
  if (prova) linhas.push(`Data da prova: ${campos.Prova}`);
  if (campos.Organizadora) linhas.push(`Banca organizadora: ${campos.Organizadora}`);
  if (campos.Cidades) linhas.push(`Cidades: ${campos.Cidades}`);
  // "Cargos: Médico, Técnico, Analista" — categorias genéricas; os nomes completos vêm do resumo do edital.
  if (campos.Cargos) linhas.push(...campos.Cargos.split(/\s*,\s*/));
  const corpo = $('.col-content').first();
  corpo.find('script, style, ins, [data-mobile], .banner-lg').remove();
  // Tabelas do resumo (cargos, vagas, salários): uma linha por célula, menos a tabela de campos já lida acima.
  corpo.find('table').first().remove();
  corpo.find('li, p, h2, h3, td').each((_, el) => {
    const t = limpar($(el).text());
    if (t && t.length < 600) linhas.push(t);
  });
  return {
    titulo,
    texto: [titulo, ...linhas].join('\n'),
    linhas,
    // A data de publicação da página JC é a da 1ª notícia (às vezes meses antes do edital): não serve para o selo NOVO.
    publicadoEm: null,
    observacoes: [],
    campos: { ...campos, ...(inicio ? { inicioIso: inicio } : {}), ...(fim ? { fimIso: fim } : {}), ...(prova ? { provaIso: prova } : {}) },
  };
}

/** "Prefeitura Aparecida de Goiânia" → "Prefeitura de Aparecida de Goiânia" (padrão das outras fontes). */
export function orgaoJc(orgao: string): string {
  return limpar(orgao).replace(/^(Prefeitura|C[âa]mara)( Municipal)?\s+(?!d[eoa]s?\s)/i, (_m, tipo: string, mun: string | undefined) => `${tipo}${mun ?? ''} de `);
}

/** UFs listadas em "Estados com Vagas" ("GO", "SP, RJ, MG"). */
export function ufsDoCampoJc(valor: string | undefined): UF[] {
  return [...new Set((valor ?? '').match(/\b[A-Z]{2}\b/g) ?? [])].filter(isUF);
}
