/**
 * Robô do Radar de Concursos Médicos.
 *
 *   npx tsx scripts/scrape-concursos-sul.ts             # coleta e grava public/data/concursos-sul.json
 *   npx tsx scripts/scrape-concursos-sul.ts --dry-run   # coleta e só mostra o resumo
 *   npx tsx scripts/scrape-concursos-sul.ts --sources=pci,cnb --max-details=30
 *
 * Fontes: PCI Concursos (Sul + Nacional com lotação no Sul), Concursos no Brasil (PR/SC/RS),
 * FUNDATEC e FEPESE (registros próprios quando o título cita médicos; senão, links relacionados).
 *
 * Cobertura: toda notícia NOVA ou ALTERADA das listagens é aberta (sem pré-filtro pelo título). A memória entre
 * execuções (scripts/data/radar-estado.json, guardada no cache do GitHub Actions) evita reabrir as mesmas páginas:
 * ver scripts/lib/estado.ts. Fontes de hosts diferentes rodam em paralelo; cada host tem orçamento próprio.
 * Respeita robots.txt e espera entre requisições ao mesmo host. Links atrás de captcha não são contornados.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { isCargoMedico, textoMencionaMedicina } from '../src/shared/concursos/classify';
import { criarGeo, type MunicipiosPorUF } from '../src/shared/concursos/geo';
import { deduplicar, mesclarFeed, precisaReescrever, separarPorEdital } from '../src/shared/concursos/merge';
import { normalizar } from '../src/shared/concursos/normalize';
import {
  ConcursoSchema,
  parseFeedTolerante,
  UFS,
  type Concurso,
  type Feed,
  type SourceStatus,
} from '../src/shared/concursos/schema';
import { construirConcursos, construirDeBanca, enriquecerComBancas } from './lib/build';
import {
  assinaturaItem,
  carregarEstado,
  FONTES_ESSENCIAIS,
  motivoVisita,
  podarEstado,
  PRIORIDADE_MOTIVO,
  registrarFalhaVisita,
  registrarSaudeFonte,
  registrarVisita,
  registrarVisto,
  serializarEstado,
  type EstadoRadar,
  type MotivoVisita,
} from './lib/estado';
import { buscarTexto } from './lib/http';
import { FEPESE_URL, FUNDATEC_URL, parseFepese, parseFundatec } from './lib/sources/bancas';
import { CNB_LISTAGENS, parseDetalheCnb, parseListagemCnb } from './lib/sources/concursosNoBrasil';
import { parseDetalhePci, parseListagemPci, PCI_LISTAGENS } from './lib/sources/pci';
import type { Detalhe, ItemBanca, ItemListagem } from './lib/sources/types';

const RAIZ = resolve(__dirname, '..');
const ARQUIVO_FEED = resolve(RAIZ, 'public', 'data', 'concursos-sul.json');
const ARQUIVO_MUNICIPIOS = resolve(RAIZ, 'scripts', 'data', 'municipios-sul.json');
const ARQUIVO_CURADORIA = resolve(RAIZ, 'scripts', 'data', 'curadoria-concursos.json');
const ARQUIVO_ESTADO = resolve(RAIZ, 'scripts', 'data', 'radar-estado.json');
/** O feed é regravado pelo menos a cada N horas (o app avisa quando ele passa de 12 h sem atualizar). */
const HORAS_BATIMENTO = 6;

interface Opcoes {
  dryRun: boolean;
  fontes: Set<string>;
  /** Páginas de detalhe por host e por execução. */
  maxDetalhes: number;
}

function lerOpcoes(argv: string[]): Opcoes {
  const arg = (nome: string) => argv.find((a) => a.startsWith(`--${nome}=`))?.split('=')[1];
  const fontes = (arg('sources') ?? 'pci,cnb,fundatec,fepese').split(',').map((s) => s.trim());
  return {
    dryRun: argv.includes('--dry-run'),
    fontes: new Set(fontes),
    maxDetalhes: Number(arg('max-details') ?? 150),
  };
}

function log(msg: string): void {
  console.log(`[radar] ${msg}`);
}

/** Orçamento de páginas de detalhe por host: uma fonte grande não deixa as outras sem páginas. */
class Orcamentos {
  private readonly restante = new Map<string, number>();
  constructor(private readonly porHost: number) {}
  consumir(url: string): boolean {
    const host = new URL(url).host;
    const r = this.restante.get(host) ?? this.porHost;
    if (r <= 0) return false;
    this.restante.set(host, r - 1);
    return true;
  }
}

interface Contexto {
  geo: ReturnType<typeof criarGeo>;
  agora: Date;
  estado: EstadoRadar;
  orcamentos: Orcamentos;
  /** Notícias presentes nas listagens desta execução (renovam o lastSeenAt dos registros já conhecidos). */
  urlsVistas: Set<string>;
}

interface Resumo {
  visitadas: number;
  semOrcamento: number;
  falhas: number;
  porMotivo: Partial<Record<MotivoVisita, number>>;
}

function novoResumo(): Resumo {
  return { visitadas: 0, semOrcamento: 0, falhas: 0, porMotivo: {} };
}

function resumoTexto(r: Resumo): string {
  const motivos = Object.entries(r.porMotivo).map(([m, n]) => `${n} ${m}`).join(', ') || 'nenhuma';
  return `${r.visitadas} notícias abertas (${motivos}) · ${r.falhas} falharam · ${r.semOrcamento} ficaram para a próxima execução (orçamento)`;
}

/** A listagem do PCI mostra a lista completa de cargos e nenhum é médico? Então não vale abrir a notícia. */
function precisaDetalhePci(item: ItemListagem): boolean {
  const medicoNaListagem = item.cargosTexto.split(',').some((c) => isCargoMedico(c));
  return medicoNaListagem || textoMencionaMedicina(item.titulo) || item.incompleto;
}

function listagemCitaMedicina(item: ItemListagem): boolean {
  return item.cargosTexto.split(',').some((c) => isCargoMedico(c)) || textoMencionaMedicina(`${item.titulo} ${item.orgao}`);
}

/**
 * Processa os itens de uma listagem: decide o que abrir (estado), prioriza novidades, respeita o orçamento do host
 * e transforma cada notícia em registros. Itens não abertos nesta execução continuam no arquivo (não somem).
 */
async function processarItens(p: {
  rotulo: string;
  itens: ItemListagem[];
  ctx: Contexto;
  resumo: Resumo;
  elegivel: (item: ItemListagem) => boolean;
  parser: (html: string) => Detalhe;
  construir: (item: ItemListagem, detalhe: Detalhe | null) => Concurso[];
}): Promise<Concurso[]> {
  const { ctx, resumo } = p;
  const fila: { item: ItemListagem; assinatura: string; motivo: MotivoVisita }[] = [];
  for (const item of p.itens) {
    if (!p.elegivel(item)) continue;
    const assinatura = assinaturaItem(item);
    const motivo = motivoVisita(ctx.estado, item.url, assinatura, ctx.agora);
    registrarVisto(ctx.estado, item.url, assinatura, ctx.agora);
    ctx.urlsVistas.add(item.url);
    if (motivo) fila.push({ item, assinatura, motivo });
  }
  fila.sort(
    (a, b) =>
      PRIORIDADE_MOTIVO[a.motivo] - PRIORIDADE_MOTIVO[b.motivo] ||
      Number(listagemCitaMedicina(b.item)) - Number(listagemCitaMedicina(a.item)),
  );

  const concursos: Concurso[] = [];
  for (const { item, assinatura, motivo } of fila) {
    if (!ctx.orcamentos.consumir(item.url)) {
      resumo.semOrcamento++;
      continue;
    }
    let detalhe: Detalhe | null = null;
    try {
      detalhe = p.parser(await buscarTexto(item.url));
    } catch (e) {
      resumo.falhas++;
      registrarFalhaVisita(ctx.estado, item.url, assinatura, ctx.agora);
      log(`  ! ${p.rotulo}: notícia indisponível (${(e as Error).message})`);
      // Sem a notícia, ainda dá para aproveitar os cargos médicos que a listagem mostra.
      const daListagem = listagemCitaMedicina(item) ? p.construir(item, null) : [];
      concursos.push(...daListagem);
      continue;
    }
    resumo.visitadas++;
    resumo.porMotivo[motivo] = (resumo.porMotivo[motivo] ?? 0) + 1;
    const novos = p.construir(item, detalhe);
    registrarVisita(ctx.estado, item.url, assinatura, novos.length > 0, ctx.agora);
    if (novos.length) log(`  + ${p.rotulo}: ${item.orgao}${item.uf ? ` (${item.uf})` : ''} → ${novos.map((c) => c.tag).join(', ')} [${motivo}]`);
    concursos.push(...novos);
  }
  return concursos;
}

const RE_ORGAO_NACIONAL = /\b(ibge|minist[ée]rio|ebserh|inss|caixa|banco do brasil|correios|petrobras|uni[ãa]o)\b/i;

async function coletarPci(ctx: Contexto) {
  const resumo = novoResumo();
  const sul = parseListagemPci(await buscarTexto(PCI_LISTAGENS.sul), ctx.agora);
  log(`PCI Sul: ${sul.length} itens na listagem`);
  const concursos = await processarItens({
    rotulo: 'PCI',
    itens: sul,
    ctx,
    resumo,
    elegivel: (item) => !!item.uf && precisaDetalhePci(item),
    parser: parseDetalhePci,
    construir: (item, detalhe) => construirConcursos({ item, detalhe, geo: ctx.geo, agora: ctx.agora }),
  });
  let itensTotal = sul.length;

  // Nacional: só itens médicos com lotação explícita no Sul
  try {
    const nacional = parseListagemPci(await buscarTexto(PCI_LISTAGENS.nacional), ctx.agora);
    itensTotal += nacional.length;
    log(`PCI Nacional: ${nacional.length} itens na listagem`);
    concursos.push(
      ...(await processarItens({
        rotulo: 'PCI Nacional',
        itens: nacional,
        ctx,
        resumo,
        elegivel: listagemCitaMedicina,
        parser: parseDetalhePci,
        construir: (item, detalhe) => {
          if (!detalhe) return [];
          const ufs = ctx.geo.ufsMencionadas(detalhe.texto);
          return ufs.length ? construirConcursos({ item: { ...item, uf: null }, detalhe, geo: ctx.geo, agora: ctx.agora, ufs }) : [];
        },
      })),
    );
  } catch (e) {
    log(`  ! PCI Nacional indisponível: ${(e as Error).message}`);
  }
  log(`PCI: ${resumoTexto(resumo)}`);
  return { concursos, itensTotal };
}

async function coletarCnb(ctx: Contexto) {
  const resumo = novoResumo();
  const concursos: Concurso[] = [];
  let itensTotal = 0;
  let falhas = 0;
  for (const uf of UFS) {
    try {
      const itens = parseListagemCnb(await buscarTexto(CNB_LISTAGENS[uf]), uf);
      itensTotal += itens.length;
      log(`Concursos no Brasil ${uf}: ${itens.length} itens`);
      concursos.push(
        ...(await processarItens({
          rotulo: `CNB ${uf}`,
          itens,
          ctx,
          resumo,
          // A listagem não traz cargos: toda notícia nova é aberta.
          elegivel: () => true,
          parser: parseDetalheCnb,
          construir: (item, detalhe) => {
            if (!detalhe) return [];
            // Itens nacionais aparecem nas páginas estaduais: exige menção ao estado/cidades do Sul.
            if (RE_ORGAO_NACIONAL.test(item.orgao) && !ctx.geo.ufsMencionadas(detalhe.texto).includes(uf)) return [];
            return construirConcursos({ item, detalhe, geo: ctx.geo, agora: ctx.agora });
          },
        })),
      );
    } catch (e) {
      falhas++;
      log(`  ! Concursos no Brasil ${uf} indisponível: ${(e as Error).message}`);
    }
  }
  if (falhas === UFS.length) throw new Error('todas as listagens estaduais falharam');
  log(`Concursos no Brasil: ${resumoTexto(resumo)}`);
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

interface ResultadoFonte {
  nome: string;
  chave: string;
  concursos: Concurso[];
  status: SourceStatus;
}

async function main(): Promise<void> {
  const opcoes = lerOpcoes(process.argv.slice(2));
  const agora = new Date();
  const municipios = lerJson<{ municipios: MunicipiosPorUF }>(ARQUIVO_MUNICIPIOS, { municipios: { PR: [], SC: [], RS: [] } });
  const estado = carregarEstado(lerJson<unknown>(ARQUIVO_ESTADO, null));
  log(`Memória: ${Object.keys(estado.urls).length} notícias conhecidas`);
  const ctx: Contexto = {
    geo: criarGeo(municipios.municipios),
    agora,
    estado,
    orcamentos: new Orcamentos(opcoes.maxDetalhes),
    urlsVistas: new Set(),
  };
  const itensBanca: ItemBanca[] = [];

  const executar = async (
    nome: string,
    chave: string,
    fn: () => Promise<{ concursos: Concurso[]; itensTotal: number }>,
  ): Promise<ResultadoFonte | null> => {
    if (!opcoes.fontes.has(chave)) return null;
    const essencial = FONTES_ESSENCIAIS.includes(nome);
    try {
      const r = await fn();
      // Listagem vazia quase sempre é HTML que mudou — conta como falha (alarme), sem derrubar as outras fontes.
      const erro = r.itensTotal === 0 ? 'listagem vazia (o site mudou o HTML?)' : null;
      if (erro) log(`FALHA ${nome}: ${erro}`);
      return { nome, chave, concursos: r.concursos, status: { nome, ok: !erro, itens: r.itensTotal, medicos: r.concursos.length, erro, essencial } };
    } catch (e) {
      log(`FALHA ${nome}: ${(e as Error).message}`);
      return { nome, chave, concursos: [], status: { nome, ok: false, itens: 0, medicos: 0, erro: (e as Error).message.slice(0, 200), essencial } };
    }
  };

  // Hosts diferentes em paralelo (cada host mantém seu intervalo entre requisições).
  const resultados = (
    await Promise.all([
      executar('PCI Concursos', 'pci', () => coletarPci(ctx)),
      executar('Concursos no Brasil', 'cnb', () => coletarCnb(ctx)),
      executar('FUNDATEC', 'fundatec', async () => {
        const itens = parseFundatec(await buscarTexto(FUNDATEC_URL), ctx.geo, agora);
        itensBanca.push(...itens);
        const proprios = itens.flatMap((i) => construirDeBanca(i, ctx.geo, agora));
        log(`FUNDATEC: ${itens.length} concursos abertos, ${proprios.length} com médicos no título`);
        return { concursos: proprios, itensTotal: itens.length };
      }),
      executar('FEPESE', 'fepese', async () => {
        const itens = parseFepese(await buscarTexto(FEPESE_URL), ctx.geo);
        itensBanca.push(...itens);
        const proprios = itens.flatMap((i) => construirDeBanca(i, ctx.geo, agora));
        log(`FEPESE: ${itens.length} destaques, ${proprios.length} com médicos no título`);
        return { concursos: proprios, itensTotal: itens.length };
      }),
    ])
  ).filter((r): r is ResultadoFonte => r !== null);

  const status = resultados.map((r) => r.status);
  const coletados = resultados.flatMap((r) => r.concursos);
  for (const s of status) registrarSaudeFonte(estado, s.nome, s.ok, s.itens, s.erro, agora);
  const podadas = podarEstado(estado, agora);

  const salvarEstado = () => {
    if (opcoes.dryRun) return;
    mkdirSync(dirname(ARQUIVO_ESTADO), { recursive: true });
    writeFileSync(ARQUIVO_ESTADO, serializarEstado(estado), 'utf8');
  };

  if (status.length && !status.some((s) => s.ok)) {
    log('Todas as fontes falharam — feed mantido sem alterações.');
    salvarEstado();
    process.exitCode = 1;
    return;
  }

  const anterior = parseFeedTolerante(lerJson<unknown>(ARQUIVO_FEED, null));
  const existentes = anterior?.feed.concursos ?? [];
  const curadoria = lerCuradoria(agora);
  const daRodada = enriquecerComBancas(deduplicar(separarPorEdital([...coletados, ...curadoria], existentes)), itensBanca, ctx.geo);

  // Registros conhecidos cuja notícia continua nas listagens seguem "vistos", mesmo sem reabrir a página.
  const iso = agora.toISOString();
  const existentesVistos = existentes.map((c) =>
    ctx.urlsVistas.has(c.fonteUrl) || c.relacionados.some((r) => ctx.urlsVistas.has(r.url)) ? { ...c, lastSeenAt: iso } : c,
  );
  const proximos = mesclarFeed(existentesVistos, daRodada, agora);

  const novos = proximos.filter((c) => !existentes.some((e) => e.id === c.id));
  log('—'.repeat(40));
  log(`Coletados nesta rodada: ${daRodada.length} · no arquivo: ${proximos.length} · novos: ${novos.length} · memória: ${Object.keys(estado.urls).length} notícias (${podadas} podadas)`);
  for (const uf of UFS) log(`  ${uf}: ${proximos.filter((c) => c.uf === uf).length}`);
  for (const n of novos) log(`  NOVO ${n.uf} · ${n.cidade} · ${n.orgao} · ${n.cargos.map((c) => c.nome).join(', ')}`);
  for (const s of status) log(`  fonte ${s.nome}: ${s.ok ? 'ok' : 'FALHA'} (${s.itens} itens, ${s.medicos} médicos)${s.erro ? ` — ${s.erro}` : ''}`);

  salvarEstado();
  if (opcoes.dryRun) {
    log('--dry-run: nada foi gravado.');
    return;
  }
  // Batimento: mesmo sem novidades, regrava a cada 6 h — o app usa o generatedAt para avisar que o Radar parou.
  const batimento = !!anterior && agora.getTime() - Date.parse(anterior.feed.generatedAt) > HORAS_BATIMENTO * 3_600_000;
  // Fonte que caiu ou voltou também vale um commit (o app mostra o aviso); contagens de itens não.
  const saudeDe = (lista: SourceStatus[]) => JSON.stringify(lista.map((s) => [s.nome, s.ok]));
  const statusMudou = saudeDe(anterior?.feed.sources ?? []) !== saudeDe(status);
  if (anterior && !precisaReescrever(existentes, proximos, agora) && !batimento && !statusMudou) {
    log('Sem mudanças relevantes — feed mantido (evita commit vazio).');
    return;
  }
  if (anterior && batimento && !precisaReescrever(existentes, proximos, agora)) log(`Sem novidades, mas o feed tem mais de ${HORAS_BATIMENTO} h — regravando (batimento).`);
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
