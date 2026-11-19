/**
 * Leitor de editais e cadernos de prova em PDF.
 *
 *   npm run edital -- <url|arquivo.pdf>                      # resumo: páginas, quadro de provas, seções
 *   npm run edital -- <url> --quadro                         # trechos com nº de questões por disciplina
 *   npm run edital -- <url> --secao "CONTEÚDO PROGRAMÁTICO"   # texto de uma seção (sem acento/caixa)
 *   npm run edital -- <url> --grep "l[ií]ngua portuguesa" --contexto 3
 *   npm run edital -- <url> --paginas 10-14                  # imprime só essas páginas
 *   npm run edital -- <url> --json                           # saída para automação
 *   npm run edital -- <url> --motor unpdf                    # outro extrator (às vezes alinha melhor tabelas)
 *   Outras: --sem-layout, --ocr (PDF escaneado; = --motor ocr), --forcar (baixa de novo)
 *
 * O PDF baixado e o texto extraído ficam em .cache/editais/ (fora do git).
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { DIR_CACHE, chaveCache, extrairTextoPdf, obterPdf, type Motor } from './lib/edital/extrair';
import {
  buscar,
  contarPaginas,
  encontrarQuadros,
  encontrarSecoes,
  extrairDisciplinasComQuestoes,
  pareceEscaneado,
  recortarPaginas,
  type LinhaEdital,
} from './lib/edital/texto';

interface Opcoes {
  origem: string;
  grep?: string;
  contexto: number;
  secao?: string;
  quadro: boolean;
  paginas?: string;
  json: boolean;
  layout: boolean;
  motor?: Motor;
  forcar: boolean;
}

const FLAGS_COM_VALOR = new Set(['grep', 'contexto', 'secao', 'paginas', 'motor']);
const MOTORES: readonly Motor[] = ['pdftotext', 'unpdf', 'ocr'];

function lerOpcoes(argv: string[]): Opcoes {
  const valores: Record<string, string> = {};
  const marcadas = new Set<string>();
  const posicionais: string[] = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]!;
    if (!a.startsWith('--')) {
      posicionais.push(a);
      continue;
    }
    const [nome, ...resto] = a.slice(2).split('=');
    if (resto.length) valores[nome!] = resto.join('=');
    else if (FLAGS_COM_VALOR.has(nome!) && argv[i + 1] !== undefined) valores[nome!] = argv[++i]!;
    else marcadas.add(nome!);
  }
  const origem = posicionais[0];
  if (!origem) {
    console.error('Uso: npm run edital -- <url|arquivo.pdf> [--quadro] [--secao "NOME"] [--grep REGEX] [--paginas 10-14] [--json] [--motor pdftotext|unpdf|ocr]');
    process.exit(2);
  }
  const motor = (valores.motor ?? (marcadas.has('ocr') ? 'ocr' : undefined)) as Motor | undefined;
  if (motor && !MOTORES.includes(motor)) {
    console.error(`--motor deve ser um de: ${MOTORES.join(', ')}`);
    process.exit(2);
  }
  return {
    origem,
    grep: valores.grep,
    contexto: Number(valores.contexto ?? 2),
    secao: valores.secao,
    quadro: marcadas.has('quadro'),
    paginas: valores.paginas,
    json: marcadas.has('json'),
    layout: !marcadas.has('sem-layout'),
    motor,
    forcar: marcadas.has('forcar'),
  };
}

const SECOES_PADRAO = [
  'CONTEÚDO PROGRAMÁTICO',
  'CONTEÚDOS PROGRAMÁTICOS',
  'OBJETOS DE AVALIAÇÃO',
  'DAS PROVAS',
  'DA PROVA OBJETIVA',
  'DAS FASES',
  'DA AVALIAÇÃO DE TÍTULOS',
  'DA PROVA DE TÍTULOS',
  'TESTE DE APTIDÃO FÍSICA',
  'AVALIAÇÃO PSICOLÓGICA',
  'INVESTIGAÇÃO SOCIAL',
];

function fmt(l: LinhaEdital): string {
  return `p.${String(l.pagina).padStart(3)} | ${l.texto.replace(/\s+$/, '')}`;
}

async function main(): Promise<void> {
  const op = lerOpcoes(process.argv.slice(2));
  const pdf = await obterPdf(op.origem, { forcar: op.forcar });
  const { texto: bruto, motor, executavel } = await extrairTextoPdf(pdf, { layout: op.layout, forcarMotor: op.motor });

  mkdirSync(DIR_CACHE, { recursive: true });
  const sufixo = `${op.layout ? '' : '-raw'}${motor === 'pdftotext' ? '' : `-${motor}`}`;
  const arquivoTxt = join(DIR_CACHE, `${chaveCache(op.origem)}${sufixo}.txt`);
  writeFileSync(arquivoTxt, bruto, 'utf8');

  const texto = op.paginas ? recortarPaginas(bruto, op.paginas) : bruto;
  const paginas = contarPaginas(bruto);
  const escaneado = pareceEscaneado(bruto);

  const quadros = op.quadro || (!op.grep && !op.secao && !op.paginas) ? encontrarQuadros(texto) : [];
  const disciplinas = quadros.flatMap((q) => extrairDisciplinasComQuestoes(q.linhas));
  const secoes = op.secao ? encontrarSecoes(texto, op.secao) : [];
  const ocorrencias = op.grep ? buscar(texto, op.grep, op.contexto) : [];

  if (op.json) {
    console.log(
      JSON.stringify(
        {
          origem: op.origem,
          pdf,
          texto: arquivoTxt,
          motor,
          paginas,
          escaneado,
          quadros: quadros.map((q) => ({ pagina: q.inicio.pagina, linhas: q.linhas.map((l) => l.texto) })),
          disciplinas,
          secoes: secoes.map((s) => ({ titulo: s.titulo.texto.trim(), pagina: s.titulo.pagina, texto: s.linhas.map((l) => l.texto).join('\n') })),
          ocorrencias: ocorrencias.map((o) => ({ pagina: o.pagina, linha: o.linha, texto: o.texto, contexto: o.contexto.map((c) => c.texto) })),
        },
        null,
        2,
      ),
    );
    return;
  }

  console.log(`📄 ${op.origem}`);
  console.log(`   ${paginas} páginas · motor: ${motor}${executavel ? ` (${executavel})` : ''}`);
  console.log(`   texto completo salvo em: ${arquivoTxt}`);
  if (escaneado) {
    console.log('   ⚠ Pouquíssimo texto por página: o PDF parece escaneado. Rode de novo com --ocr.');
  } else if (motor === 'pdftotext') {
    console.log('   (se uma tabela sair desalinhada, tente --motor unpdf)');
  }

  if (op.paginas && !op.grep && !op.secao && !op.quadro) {
    console.log(`\n=== Páginas ${op.paginas} ===\n${texto}`);
    return;
  }

  if (op.grep) {
    console.log(`\n=== ${ocorrencias.length} ocorrência(s) de /${op.grep}/ ===`);
    for (const o of ocorrencias) {
      console.log(`--- linha ${o.linha}`);
      for (const c of o.contexto) console.log((c.linha === o.linha ? '>> ' : '   ') + fmt(c));
    }
  }

  if (op.secao) {
    if (!secoes.length) console.log(`\nNenhuma seção com título contendo "${op.secao}". Tente --grep.`);
    for (const s of secoes) {
      console.log(`\n=== ${s.titulo.texto.trim()} (p.${s.titulo.pagina}) ===`);
      for (const l of s.linhas) if (l.texto.trim()) console.log(fmt(l));
    }
  }

  if (quadros.length) {
    console.log(`\n=== Quadro de provas (${quadros.length} trecho(s) candidato(s)) ===`);
    for (const q of quadros.slice(0, op.quadro ? 20 : 3)) {
      console.log(`--- p.${q.inicio.pagina}`);
      for (const l of q.linhas) if (l.texto.trim()) console.log(fmt(l));
    }
    if (disciplinas.length) {
      console.log('\nDisciplinas × questões (heurística — confira no trecho acima):');
      for (const d of disciplinas) console.log(`   ${d.disciplina}: ${d.questoes}`);
    }
  }

  if (!op.grep && !op.secao && !op.quadro) {
    console.log('\n=== Seções encontradas ===');
    for (const nome of SECOES_PADRAO) {
      for (const s of encontrarSecoes(texto, nome, 1)) console.log(`   p.${String(s.titulo.pagina).padStart(3)}  ${s.titulo.texto.trim()}`);
    }
    console.log('\nDica: --secao "OBJETOS DE AVALIAÇÃO" ou --grep "conhecimentos gerais" para ler o conteúdo.');
  }
}

main().catch((e: unknown) => {
  console.error(`[edital] ${e instanceof Error ? e.message : String(e)}`);
  process.exit(1);
});
