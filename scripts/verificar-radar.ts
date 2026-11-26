/**
 * Alarmes do Radar: abre, lembra e fecha issues no GitHub conforme a saúde das fontes.
 *
 *   npx tsx scripts/verificar-radar.ts             # usa o gh CLI (no workflow: GH_TOKEN = GITHUB_TOKEN)
 *   npx tsx scripts/verificar-radar.ts --dry-run   # só mostra o que faria
 *
 * - Fonte essencial (FONTES_ESSENCIAIS) com LIMITE_FALHAS_ALARME execuções seguidas em falha (erro HTTP, HTML que
 *   mudou e deixou a listagem vazia…) → abre a issue "Radar: fonte X com problema". O GitHub avisa por e-mail.
 * - Enquanto continuar falhando: um lembrete por dia (a cada 24 falhas seguidas).
 * - Fonte voltou → fecha a issue com um comentário.
 * Fontes "melhor esforço" (bancas) não geram alarme: aparecem só no resumo do feed e no app.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { carregarEstado, FONTES_ESSENCIAIS, LIMITE_FALHAS_ALARME, type EstadoRadar, type SaudeFonte } from './lib/estado';

const ARQUIVO_ESTADO = resolve(__dirname, 'data', 'radar-estado.json');
const PREFIXO = 'Radar: fonte';

export const tituloAlarme = (fonte: string) => `${PREFIXO} "${fonte}" com problema`;

export type Acao =
  | { tipo: 'abrir'; fonte: string; titulo: string; corpo: string }
  | { tipo: 'lembrar'; fonte: string; numero: number; corpo: string }
  | { tipo: 'fechar'; fonte: string; numero: number; corpo: string };

function descrever(fonte: string, s: SaudeFonte): string {
  return [
    `A fonte **${fonte}** do Radar falhou em **${s.falhasSeguidas} execuções seguidas** (o robô roda de hora em hora).`,
    '',
    `- Último erro: \`${s.ultimoErro ?? 'desconhecido'}\``,
    `- Última coleta bem-sucedida: ${s.ultimoOk ?? 'nenhuma registrada'}`,
    `- Itens na última listagem: ${s.itens}`,
    '',
    'Enquanto isso, concursos publicados só nessa fonte podem não aparecer no app. Possíveis causas: site fora do ar,',
    'bloqueio do IP do GitHub Actions, ou mudança no HTML (o parser em `scripts/lib/sources/` precisa de ajuste).',
    'Veja o log da execução em Actions → "Atualizar Radar de Concursos Médicos". Esta issue fecha sozinha quando a fonte voltar.',
  ].join('\n');
}

/** Decide as ações a partir do estado e das issues de alarme abertas (título → número). */
export function planejarAlarmes(estado: EstadoRadar, abertas: Map<string, number>, essenciais = FONTES_ESSENCIAIS, limite = LIMITE_FALHAS_ALARME): Acao[] {
  const acoes: Acao[] = [];
  for (const fonte of essenciais) {
    const s = estado.fontes[fonte];
    if (!s) continue;
    const titulo = tituloAlarme(fonte);
    const numero = abertas.get(titulo);
    if (s.falhasSeguidas >= limite) {
      if (numero === undefined) acoes.push({ tipo: 'abrir', fonte, titulo, corpo: descrever(fonte, s) });
      else if ((s.falhasSeguidas - limite) % 24 === 0 && s.falhasSeguidas > limite) {
        acoes.push({ tipo: 'lembrar', fonte, numero, corpo: `Continua falhando (${s.falhasSeguidas} execuções seguidas). Último erro: \`${s.ultimoErro ?? 'desconhecido'}\`.` });
      }
    } else if (s.falhasSeguidas === 0 && numero !== undefined) {
      acoes.push({ tipo: 'fechar', fonte, numero, corpo: `A fonte voltou a funcionar em ${s.ultimoOk ?? 'agora'} (${s.itens} itens na listagem). Fechando o alarme.` });
    }
  }
  return acoes;
}

function gh(args: string[]): string {
  return execFileSync('gh', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] });
}

function issuesAbertas(): Map<string, number> {
  const bruto = gh(['issue', 'list', '--state', 'open', '--search', `"${PREFIXO}" in:title`, '--json', 'number,title', '--limit', '100']);
  const lista = JSON.parse(bruto) as { number: number; title: string }[];
  return new Map(lista.filter((i) => i.title.startsWith(PREFIXO)).map((i) => [i.title, i.number]));
}

function main(): void {
  const dryRun = process.argv.includes('--dry-run');
  if (!existsSync(ARQUIVO_ESTADO)) {
    console.log('[alarmes] Sem memória do robô (radar-estado.json) — nada a verificar.');
    return;
  }
  const estado = carregarEstado(JSON.parse(readFileSync(ARQUIVO_ESTADO, 'utf8')));
  for (const [fonte, s] of Object.entries(estado.fontes)) {
    console.log(`[alarmes] ${fonte}: ${s.falhasSeguidas ? `${s.falhasSeguidas} falha(s) seguida(s) — ${s.ultimoErro}` : 'ok'}`);
  }
  const abertas = dryRun ? new Map<string, number>() : issuesAbertas();
  const acoes = planejarAlarmes(estado, abertas);
  if (!acoes.length) {
    console.log('[alarmes] Nenhuma ação.');
    return;
  }
  for (const a of acoes) {
    console.log(`[alarmes] ${a.tipo} → ${a.fonte}`);
    if (dryRun) continue;
    if (a.tipo === 'abrir') gh(['issue', 'create', '--title', a.titulo, '--body', a.corpo]);
    else if (a.tipo === 'lembrar') gh(['issue', 'comment', String(a.numero), '--body', a.corpo]);
    else gh(['issue', 'close', String(a.numero), '--comment', a.corpo]);
  }
}

if (process.argv[1] && /verificar-radar\.ts$/.test(process.argv[1])) {
  try {
    main();
  } catch (e) {
    console.error(e);
    process.exitCode = 1;
  }
}
