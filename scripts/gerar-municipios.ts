/**
 * Gera scripts/data/municipios-brasil.json (todos os municípios do Brasil por UF) a partir da API do IBGE.
 *
 *   npx tsx scripts/gerar-municipios.ts
 *
 * Rodar de novo só quando o IBGE criar municípios (raro). O robô do Radar usa o arquivo para validar a cidade.
 */
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const URL_IBGE = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios';
const SAIDA = resolve(__dirname, 'data', 'municipios-brasil.json');

interface MunicipioIbge {
  nome: string;
  microrregiao?: { mesorregiao?: { UF?: { sigla?: string } } } | null;
  'regiao-imediata'?: { 'regiao-intermediaria'?: { UF?: { sigla?: string } } } | null;
}

async function main(): Promise<void> {
  const resp = await fetch(URL_IBGE, { headers: { Accept: 'application/json' } });
  if (!resp.ok) throw new Error(`IBGE respondeu HTTP ${resp.status}`);
  const lista = (await resp.json()) as MunicipioIbge[];
  const porUf: Record<string, string[]> = {};
  for (const m of lista) {
    const uf = m.microrregiao?.mesorregiao?.UF?.sigla ?? m['regiao-imediata']?.['regiao-intermediaria']?.UF?.sigla;
    if (!uf) throw new Error(`Município sem UF na resposta do IBGE: ${m.nome}`);
    (porUf[uf] ??= []).push(m.nome);
  }
  const ordenado = Object.fromEntries(
    Object.keys(porUf)
      .sort()
      .map((uf) => [uf, [...new Set(porUf[uf])].sort((a, b) => a.localeCompare(b, 'pt-BR'))]),
  );
  const total = Object.values(ordenado).reduce((n, l) => n + l.length, 0);
  if (Object.keys(ordenado).length !== 27 || total < 5500) throw new Error(`Resposta incompleta: ${Object.keys(ordenado).length} UFs, ${total} municípios`);
  writeFileSync(SAIDA, `${JSON.stringify({ fonte: 'IBGE API v1 localidades', obtidoEm: new Date().toISOString().slice(0, 10), municipios: ordenado })}\n`, 'utf8');
  console.log(`Gravado ${SAIDA}: ${total} municípios em 27 UFs.`);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
