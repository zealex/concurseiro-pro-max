/**
 * Valida os bancos de conteúdo (resumos, questões autorais, flashcards).
 *
 *   npm run conteudo:validar                       # todos os bancos cadastrados
 *   npm run conteudo:validar -- lingua-portuguesa  # um banco
 *   npm run conteudo:validar -- --arquivo src/data/conteudo/bancos/matematica/index.ts   # banco ainda não cadastrado
 *
 * Erros reprovam (o teste do CI falha); avisos mostram lacunas de cobertura por tema.
 */
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { getDisciplina } from '../src/data/eixos';
import { CARREGADORES } from '../src/data/conteudo/carregar';
import { validarBanco } from '../src/data/conteudo/validar';
import type { BancoConteudo } from '../src/data/types';

function relatar(id: string, banco: BancoConteudo): number {
  const { erros, avisos } = validarBanco(banco);
  const disc = getDisciplina(banco.disciplinaId);
  const temas = disc ? disc.temas.length : 0;
  console.log(
    `${erros.length ? '✖' : '✔'} ${id}: ${banco.resumos.length} resumos/${temas} temas · ${banco.questoes.length} questões · ${banco.flashcards.length} flashcards · ${banco.textos.length} textos`,
  );
  for (const e of erros) console.log(`   ERRO  ${e}`);
  for (const a of avisos) console.log(`   aviso ${a}`);
  return erros.length;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const iArquivo = args.indexOf('--arquivo');
  if (iArquivo >= 0) {
    const arquivo = args[iArquivo + 1];
    if (!arquivo) throw new Error('Informe o caminho: --arquivo src/data/conteudo/bancos/<disciplina>/index.ts');
    const mod = (await import(pathToFileURL(resolve(arquivo)).href)) as { default?: BancoConteudo };
    const banco = mod.default;
    if (!banco) throw new Error(`${arquivo} não tem export default do banco`);
    if (relatar(banco.disciplinaId, banco)) process.exit(1);
    return;
  }
  const pedidos = args.filter((a) => !a.startsWith('--'));
  const alvos = pedidos.length ? pedidos : Object.keys(CARREGADORES);
  if (!alvos.length) {
    console.log('Nenhum banco cadastrado em src/data/conteudo/carregar.ts.');
    return;
  }
  let totalErros = 0;
  for (const id of alvos) {
    const carregar = CARREGADORES[id];
    if (!carregar) {
      console.log(`✖ ${id}: não está em CARREGADORES (src/data/conteudo/carregar.ts)`);
      totalErros += 1;
      continue;
    }
    totalErros += relatar(id, (await carregar()).default);
  }
  if (totalErros) process.exit(1);
}

main().catch((e: unknown) => {
  console.error(e);
  process.exit(1);
});
