/**
 * Robô do Radar de Concursos Médicos do Sul (PR, SC, RS).
 *
 *   npx tsx scripts/scrape-concursos-sul.ts             # coleta e grava public/data/concursos-sul.json
 *   npx tsx scripts/scrape-concursos-sul.ts --dry-run   # coleta e só mostra o resumo
 *   npx tsx scripts/scrape-concursos-sul.ts --sources=pci,cnb --max-details=30
 *
 * Fontes: PCI Concursos (Sul + Nacional com lotação no Sul), Concursos no Brasil (PR/SC/RS),
 * FUNDATEC e FEPESE (registros próprios quando o título cita médicos; senão, links relacionados).
 * Respeita robots.txt e espera entre requisições. Links atrás de captcha não são contornados.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { textoMencionaMedicina, isCargoMedico } from '../src/shared/concursos/classify';
import { criarGeo, type MunicipiosPorUF } from '../src/shared/concursos/geo';
import { deduplicar, mesclarFeed, precisaReescrever } from '../src/shared/concursos/merge';
import { normalizar } from '../src/shared/concursos/normalize';
import {
  ConcursoSchema,
  parseFeedTolerante,
  UFS,
  type Concurso,
  type Feed,
  type SourceStatus,
  type UF,
} from '../src/shared/concursos/schema';
import { construirConcursos, construirDeBanca, enriquecerComBancas } from './lib/build';
import { buscarTexto } from './lib/http';
import { FEPESE_URL, FUNDATEC_URL, parseFepese, parseFundatec } from './lib/sources/bancas';
import { CNB_LISTAGENS, cnbVaiDetalhar, parseDetalheCnb, parseListagemCnb } from './lib/sources/concursosNoBrasil';
import { parseDetalhePci, parseListagemPci, PCI_LISTAGENS } from './lib/sources/pci';
import type { Detalhe, ItemBanca, ItemListagem } from './lib/sources/types';

const RAIZ = resolve(__dirname, '..');
const ARQUIVO_FEED = resolve(RAIZ, 'public', 'data', 'concursos-sul.json');
const ARQUIVO_MUNICIPIOS = resolve(RAIZ, 'scripts', 'data', 'municipios-sul.json');
const ARQUIVO_CURADORIA = resolve(RAIZ, 'scripts', 'data', 'curadoria-concursos.json');

interface Opcoes {
  dryRun: boolean;
  fontes: Set<string>;
  maxDetalhes: number;
}

function lerOpcoes(argv: string[]): Opcoes {
  const arg = (nome: string) => argv.find((a) => a.startsWith(`--${nome}=`))?.split('=')[1];
  const fontes = (arg('sources') ?? 'pci,cnb,fundatec,fepese').split(',').map((s) => s.trim());
  return {
    dryRun: argv.includes('--dry-run'),
    fontes: new Set(fontes),
    maxDetalhes: Number(arg('max-details') ?? 120),
  };
}

function log(msg: string): void {
  console.log(`[radar-sul] ${msg}`);
}

/** Orçamento global de páginas de detalhe por execução (gentileza com as fontes). */
class Orcamento {
  constructor(private restante: number) {}
  consumir(): boolean {
    if (this.restante <= 0) return false;
    this.restante--;
    return true;
  }
}

async function detalhar(url: string, parser: (html: string) => Detalhe, orcamento: Orcamento): Promise<Detalhe | null> {
  if (!orcamento.consumir()) return null;
  try {
    return parser(await buscarTexto(url));
  } catch (e) {
    log(`  ! detalhe indisponível (${(e as Error).message})`);
    return null;
  }
}

function precisaDetalhePci(item: ItemListagem): boolean {
  const medicoNaListagem = item.cargosTexto.split(',').some((c) => isCargoMedico(c));
  if (medicoNaListagem || textoMencionaMedicina(item.titulo)) return true;
  const superior = /superior/i.test(item.escolaridade);
  const saude = /sa[úu]de|hospital|cons[óo]rcio|upa|samu|ebserh|fundo municipal/i.test(`${item.titulo} ${item.orgao}`);
  return item.incompleto && superior && (saude || (item.remuneracaoMax ?? 0) >= 7000);
}

async function coletarPci(geo: ReturnType<typeof criarGeo>, agora: Date, orcamento: Orcamento) {
  const concursos: Concurso[] = [];
  let itensTotal = 0;

  // Região Sul
  const sul = parseListagemPci(await buscarTexto(PCI_LISTAGENS.sul), agora);
  itensTotal += sul.length;
  log(`PCI Sul: ${sul.length} itens na listagem`);
  for (const item of sul) {
    if (!item.uf || !precisaDetalhePci(item)) continue;
    const detalhe = await detalhar(item.url, parseDetalhePci, orcamento);
    const novos = construirConcursos({ item, detalhe, geo, agora });
    if (novos.length) log(`  + ${item.orgao} (${item.uf}) → ${novos.map((c) => c.tag).join(', ')}`);
    concursos.push(...novos);
  }

  // Nacional: só itens médicos com lotação explícita no Sul
  try {
    const nacional = parseListagemPci(await buscarTexto(PCI_LISTAGENS.nacional), agora);
    itensTotal += nacional.length;
    log(`PCI Nacional: ${nacional.length} itens na listagem`);
    for (const item of nacional) {
      const medico = item.cargosTexto.split(',').some((c) => isCargoMedico(c)) || textoMencionaMedicina(item.titulo);
      if (!medico) continue;
      const detalhe = await detalhar(item.url, parseDetalhePci, orcamento);
      if (!detalhe) continue;
      const ufs = geo.ufsMencionadas(detalhe.texto);
      if (!ufs.length) continue;
      const novos = construirConcursos({ item: { ...item, uf: null }, detalhe, geo, agora, ufs });
      if (novos.length) log(`  + [nacional] ${item.orgao} → ${ufs.join('/')}`);
      concursos.push(...novos);
    }
  } catch (e) {
    log(`  ! PCI Nacional indisponível: ${(e as Error).message}`);
  }
  return { concursos, itensTotal };
}

async function coletarCnb(geo: ReturnType<typeof criarGeo>, agora: Date, orcamento: Orcamento) {
  const concursos: Concurso[] = [];
  let itensTotal = 0;
  let falhas = 0;
  for (const uf of UFS) {
    try {
      const itens = parseListagemCnb(await buscarTexto(CNB_LISTAGENS[uf]), uf);
      itensTotal += itens.length;
      log(`Concursos no Brasil ${uf}: ${itens.length} itens`);
      for (const item of itens) {
        if (!cnbVaiDetalhar(item)) continue;
        const detalhe = await detalhar(item.url, parseDetalheCnb, orcamento);
        if (!detalhe) continue;
        // Itens nacionais aparecem nas páginas estaduais: exige menção ao estado/cidades do Sul.
        const nacional = /\b(ibge|minist[ée]rio|ebserh|inss|caixa|banco do brasil|correios|petrobras|uni[ãa]o)\b/i.test(item.orgao);
        if (nacional && !geo.ufsMencionadas(detalhe.texto).includes(uf)) continue;
        const novos = construirConcursos({ item, detalhe, geo, agora });
        if (novos.length) log(`  + ${item.orgao} (${uf}) → ${novos.map((c) => c.tag).join(', ')}`);
        concursos.push(...novos);
      }
    } catch (e) {
      falhas++;
      log(`  ! Concursos no Brasil ${uf} indisponível: ${(e as Error).message}`);
    }
  }
  if (falhas === UFS.length) throw new Error('todas as listagens estaduais falharam');
  return { concursos, itensTotal };
}

function lerJson<T>(arquivo: string, padrao: T): T {
  if (!existsSync(arquivo)) return padrao;
  return JSON.parse(readFileSync(arquivo, 'utf8')) as T;
}

function lerCuradoria(agora: Date): Concurso[] {
  const brutos = lerJson<unknown[]>(ARQUIVO_CURADORIA, []);
  const validos: Concurso[] = [];
  for (const b of brutos) {
    const r = ConcursoSchema.safeParse({ lastSeenAt: agora.toISOString(), ...(b as object) });
    if (r.success) validos.push(r.data);
    else log(`  ! curadoria inválida ignorada: ${JSON.stringify((b as { id?: string }).id)} — ${r.error.issues[0]?.message}`);
  }
  return validos;
}

async function main(): Promise<void> {
  const opcoes = lerOpcoes(process.argv.slice(2));
  const agora = new Date();
  const municipios = lerJson<{ municipios: MunicipiosPorUF }>(ARQUIVO_MUNICIPIOS, { municipios: { PR: [], SC: [], RS: [] } });
  const geo = criarGeo(municipios.municipios);
  const orcamento = new Orcamento(opcoes.maxDetalhes);

  const status: SourceStatus[] = [];
  const coletados: Concurso[] = [];
  const itensBanca: ItemBanca[] = [];

  const executar = async (nome: string, chave: string, fn: () => Promise<{ concursos: Concurso[]; itensTotal: number }>) => {
    if (!opcoes.fontes.has(chave)) return;
    try {
      const r = await fn();
      coletados.push(...r.concursos);
      status.push({ nome, ok: true, itens: r.itensTotal, medicos: r.concursos.length, erro: null });
    } catch (e) {
      status.push({ nome, ok: false, itens: 0, medicos: 0, erro: (e as Error).message.slice(0, 200) });
      log(`FALHA ${nome}: ${(e as Error).message}`);
    }
  };

  await executar('PCI Concursos', 'pci', () => coletarPci(geo, agora, orcamento));
  await executar('Concursos no Brasil', 'cnb', () => coletarCnb(geo, agora, orcamento));
  await executar('FUNDATEC', 'fundatec', async () => {
    const itens = parseFundatec(await buscarTexto(FUNDATEC_URL), geo, agora);
    itensBanca.push(...itens);
    const proprios = itens.flatMap((i) => construirDeBanca(i, geo, agora));
    log(`FUNDATEC: ${itens.length} concursos abertos, ${proprios.length} com médicos no título`);
    return { concursos: proprios, itensTotal: itens.length };
  });
  await executar('FEPESE', 'fepese', async () => {
    const itens = parseFepese(await buscarTexto(FEPESE_URL), geo);
    itensBanca.push(...itens);
    const proprios = itens.flatMap((i) => construirDeBanca(i, geo, agora));
    log(`FEPESE: ${itens.length} destaques, ${proprios.length} com médicos no título`);
    return { concursos: proprios, itensTotal: itens.length };
  });

  const ativas = status.filter((s) => s.ok);
  if (status.length && !ativas.length) {
    log('Todas as fontes falharam — arquivo mantido sem alterações.');
    process.exitCode = 1;
    return;
  }

  const curadoria = lerCuradoria(agora);
  const daRodada = enriquecerComBancas(deduplicar([...coletados, ...curadoria]), itensBanca, geo);

  const anterior = parseFeedTolerante(lerJson<unknown>(ARQUIVO_FEED, null));
  const existentes = anterior?.feed.concursos ?? [];
  const proximos = mesclarFeed(existentes, daRodada, agora);

  const novos = proximos.filter((c) => !existentes.some((e) => e.id === c.id));
  log('—'.repeat(40));
  log(`Coletados nesta rodada: ${daRodada.length} · no arquivo: ${proximos.length} · novos: ${novos.length}`);
  for (const uf of UFS) log(`  ${uf}: ${proximos.filter((c) => c.uf === uf).length}`);
  for (const n of novos) log(`  NOVO ${n.uf} · ${n.cidade} · ${n.orgao} · ${n.cargos.map((c) => c.nome).join(', ')}`);
  for (const s of status) log(`  fonte ${s.nome}: ${s.ok ? 'ok' : 'FALHA'} (${s.itens} itens, ${s.medicos} médicos)${s.erro ? ` — ${s.erro}` : ''}`);

  if (opcoes.dryRun) {
    log('--dry-run: nada foi gravado.');
    return;
  }
  if (anterior && !precisaReescrever(existentes, proximos, agora)) {
    log('Sem mudanças relevantes — arquivo mantido (evita commit vazio).');
    return;
  }
  const feed: Feed = {
    version: 1,
    generatedAt: agora.toISOString(),
    escopo: 'Concursos e processos seletivos que exigem graduação em Medicina, com lotação em PR, SC ou RS',
    sources: status,
    concursos: proximos,
  };
  writeFileSync(ARQUIVO_FEED, `${JSON.stringify(feed, null, 2)}\n`, 'utf8');
  log(`Gravado ${ARQUIVO_FEED}`);
}

// Exportado para testes de integração leves.
export const __test = { precisaDetalhePci, normalizar };

if (process.argv[1] && /scrape-concursos-sul\.ts$/.test(process.argv[1])) {
  main().catch((e) => {
    console.error(e);
    process.exitCode = 1;
  });
}
