/**
 * Extração de texto de PDFs de editais:
 * 1) `pdftotext -layout` (Poppler/Xpdf) — procurado no PATH, no Git for Windows e na instalação do winget;
 * 2) fallback em JS puro (`unpdf`), que também roda no CI;
 * 3) OCR opcional (`pdftoppm` + `tesseract -l por`) para editais escaneados.
 */
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';

export type Motor = 'pdftotext' | 'unpdf' | 'ocr';

const USER_AGENT = 'Mozilla/5.0 (compatible; ConcurseiroProMax/1.0; leitor de editais publicos)';

function existe(p: string | undefined | null): p is string {
  return !!p && existsSync(p);
}

/** Procura um executável no PATH (where/which). */
function noPath(nome: string): string | null {
  const cmd = process.platform === 'win32' ? 'where' : 'which';
  const r = spawnSync(cmd, [nome], { encoding: 'utf8' });
  if (r.status !== 0) return null;
  const primeiro = r.stdout.split(/\r?\n/).map((s) => s.trim()).find(Boolean);
  return primeiro ?? null;
}

/** Diretórios onde o Poppler costuma ficar no Windows (winget, choco, manual). */
function diretoriosPoppler(): string[] {
  const out: string[] = [];
  const local = process.env.LOCALAPPDATA;
  if (local) {
    const pacotes = join(local, 'Microsoft', 'WinGet', 'Packages');
    if (existsSync(pacotes)) {
      for (const p of readdirSync(pacotes).filter((d) => d.toLowerCase().startsWith('oschwartz10612.poppler'))) {
        const base = join(pacotes, p);
        for (const v of readdirSync(base).filter((d) => d.toLowerCase().startsWith('poppler'))) {
          out.push(join(base, v, 'Library', 'bin'));
        }
      }
    }
    out.push(join(local, 'Microsoft', 'WinGet', 'Links'));
  }
  out.push('C:\\ProgramData\\chocolatey\\bin', 'C:\\Program Files\\poppler\\Library\\bin', 'C:\\Program Files\\poppler\\bin');
  return out;
}

export function localizarExecutavel(nome: 'pdftotext' | 'pdftoppm' | 'tesseract'): string | null {
  const exe = process.platform === 'win32' ? `${nome}.exe` : nome;
  const doPath = noPath(nome);
  if (existe(doPath)) return doPath;
  const candidatos: string[] = [];
  if (process.platform === 'win32') {
    candidatos.push(...diretoriosPoppler().map((d) => join(d, exe)));
    if (nome === 'pdftotext') candidatos.push('C:\\Program Files\\Git\\mingw64\\bin\\pdftotext.exe');
    if (nome === 'tesseract') candidatos.push('C:\\Program Files\\Tesseract-OCR\\tesseract.exe');
  } else {
    candidatos.push(`/usr/bin/${nome}`, `/usr/local/bin/${nome}`, `/opt/homebrew/bin/${nome}`);
  }
  return candidatos.find((c) => existsSync(c)) ?? null;
}

export interface ResultadoExtracao {
  texto: string;
  motor: Motor;
  executavel?: string;
}

function comPdftotext(exe: string, pdf: string, layout: boolean): string {
  const args = [...(layout ? ['-layout'] : []), '-enc', 'UTF-8', pdf, '-'];
  const r = spawnSync(exe, args, { maxBuffer: 256 * 1024 * 1024 });
  if (r.status !== 0) throw new Error(`pdftotext falhou (${r.status}): ${r.stderr?.toString().slice(0, 300)}`);
  return r.stdout.toString('utf8');
}

async function comUnpdf(pdf: string): Promise<string> {
  const { extractText, getDocumentProxy } = await import('unpdf');
  const dados = new Uint8Array(readFileSync(pdf));
  const doc = await getDocumentProxy(dados);
  const { text } = await extractText(doc, { mergePages: false });
  return (Array.isArray(text) ? text : [text]).join('\f');
}

/** Extrai texto com o melhor motor disponível. `forcarMotor` serve para testes/diagnóstico. */
export async function extrairTextoPdf(
  pdf: string,
  op: { layout?: boolean; forcarMotor?: Motor } = {},
): Promise<ResultadoExtracao> {
  const layout = op.layout ?? true;
  if (op.forcarMotor === 'ocr') return ocrPdf(pdf);
  if (op.forcarMotor !== 'unpdf') {
    const exe = localizarExecutavel('pdftotext');
    if (exe) return { texto: comPdftotext(exe, pdf, layout), motor: 'pdftotext', executavel: exe };
    if (op.forcarMotor === 'pdftotext') throw new Error('pdftotext não encontrado. Instale: winget install -e --id oschwartz10612.Poppler');
  }
  return { texto: await comUnpdf(pdf), motor: 'unpdf' };
}

/** OCR página a página: pdftoppm (PNG 200 dpi) + tesseract (português). */
export function ocrPdf(pdf: string): ResultadoExtracao {
  const ppm = localizarExecutavel('pdftoppm');
  const tes = localizarExecutavel('tesseract');
  if (!ppm || !tes) {
    throw new Error(
      'OCR precisa de pdftoppm e tesseract. Instale: winget install -e --id oschwartz10612.Poppler ' +
        'e winget install -e --id UB-Mannheim.TesseractOCR (com o idioma "por").',
    );
  }
  const dir = join(tmpdir(), `edital-ocr-${Date.now()}`);
  mkdirSync(dir, { recursive: true });
  try {
    const r = spawnSync(ppm, ['-r', '200', '-png', pdf, join(dir, 'p')], { maxBuffer: 64 * 1024 * 1024 });
    if (r.status !== 0) throw new Error(`pdftoppm falhou: ${r.stderr?.toString().slice(0, 300)}`);
    const imagens = readdirSync(dir).filter((f) => f.endsWith('.png')).sort();
    const paginas = imagens.map((img) => {
      const t = spawnSync(tes, [join(dir, img), 'stdout', '-l', 'por'], { maxBuffer: 64 * 1024 * 1024 });
      if (t.status !== 0) throw new Error(`tesseract falhou em ${img}: ${t.stderr?.toString().slice(0, 300)}`);
      return t.stdout.toString('utf8');
    });
    return { texto: paginas.join('\f'), motor: 'ocr', executavel: tes };
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

export const DIR_CACHE = resolve(__dirname, '..', '..', '..', '.cache', 'editais');

export function chaveCache(origem: string): string {
  return createHash('sha1').update(origem).digest('hex').slice(0, 12);
}

/** Baixa (ou reaproveita do cache) o PDF de uma URL; devolve o caminho local. */
export async function obterPdf(origem: string, op: { forcar?: boolean } = {}): Promise<string> {
  if (!/^https?:\/\//i.test(origem)) {
    const local = resolve(origem);
    if (!existsSync(local)) throw new Error(`Arquivo não encontrado: ${local}`);
    return local;
  }
  mkdirSync(DIR_CACHE, { recursive: true });
  const destino = join(DIR_CACHE, `${chaveCache(origem)}.pdf`);
  if (!op.forcar && existsSync(destino)) return destino;
  const resp = await fetch(origem, {
    headers: { 'User-Agent': USER_AGENT, Accept: 'application/pdf,*/*' },
    redirect: 'follow',
    signal: AbortSignal.timeout(60_000),
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status} ao baixar ${origem}`);
  const bytes = new Uint8Array(await resp.arrayBuffer());
  // Alguns servidores (ex.: FEPESE) mandam bytes extras antes do cabeçalho "%PDF-".
  const inicio = new TextDecoder('latin1').decode(bytes.slice(0, 1024));
  const pos = inicio.indexOf('%PDF-');
  if (pos < 0) {
    throw new Error(`O endereço não devolveu um PDF (começa com "${inicio.slice(0, 5)}"). Abra a página do edital e copie o link direto do PDF.`);
  }
  writeFileSync(destino, pos > 0 ? bytes.slice(pos) : bytes);
  writeFileSync(`${destino}.url`, origem);
  return destino;
}
