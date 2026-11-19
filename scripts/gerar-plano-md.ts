/**
 * Gera a seção "Detalhamento semana a semana" de docs/plano-estudos-90-dias.md
 * a partir de src/data/plano12Semanas.ts, mantendo documento e app sincronizados.
 *
 * Uso: npx tsx scripts/gerar-plano-md.ts
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { MESOCICLOS, PLANO_12_SEMANAS, minutosDaSemana } from '../src/data/plano12Semanas';
import { EIXO_LABEL, TIPO_BLOCO_LABEL, TRILHAS, type Trilha } from '../src/data/types';

const ARQUIVO = resolve(__dirname, '..', 'docs', 'plano-estudos-90-dias.md');
const INICIO = '<!-- PLANO:INICIO -->';
const FIM = '<!-- PLANO:FIM -->';

const TRILHA_CURTA: Record<Trilha, string> = { generalista: 'G', pericia: 'P', legista: 'L', clinico: 'C' };

function horas(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`;
}

function gerar(): string {
  const out: string[] = [];
  out.push('Legenda das trilhas: **G** Generalista Completo · **P** Perícia Médica (INSS/RPPS) · **L** Médico Legista · **C** Clínico Geral/ESF/Plantonista. ★ = bloco essencial (mantido na compressão).');
  out.push('');
  for (const meso of MESOCICLOS) {
    out.push(`### ${meso.titulo}`);
    out.push('');
    out.push(`_${meso.objetivo}_`);
    out.push('');
    for (const s of PLANO_12_SEMANAS.filter((x) => x.mesociclo === meso.id)) {
      out.push(`#### Semana ${s.semana} — ${s.titulo}`);
      out.push('');
      out.push(`**Objetivo:** ${s.objetivo}`);
      out.push('');
      out.push(`**Bancas-foco:** ${s.bancasFoco.join(', ')} · **Meta de questões:** ${s.metaQuestoes}`);
      out.push('');
      out.push(
        `**Carga planejada:** ${TRILHAS.map((t) => `${TRILHA_CURTA[t]} ${horas(minutosDaSemana(s.semana, t))}`).join(' · ')}`,
      );
      out.push('');
      out.push('| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |');
      out.push('|---|---|---|---|---|---|');
      for (const b of s.blocos) {
        const titulo = `${b.essencial ? '★ ' : ''}**${b.titulo}**${b.sabado ? ' _(dia 6)_' : ''}`;
        const trilhas = b.trilhas.map((t) => TRILHA_CURTA[t]).join(' ');
        const desc = b.descricao.replace(/\|/g, '/');
        out.push(`| ${titulo} | ${EIXO_LABEL[b.eixo]} | ${TIPO_BLOCO_LABEL[b.tipo]} | ${b.minutos} | ${trilhas} | ${desc} |`);
      }
      out.push('');
    }
  }
  return out.join('\n');
}

const atual = readFileSync(ARQUIVO, 'utf8');
const i = atual.indexOf(INICIO);
const f = atual.indexOf(FIM);
if (i < 0 || f < 0 || f < i) throw new Error('Marcadores PLANO:INICIO/FIM não encontrados no documento.');
const novo = `${atual.slice(0, i + INICIO.length)}\n${gerar()}\n${atual.slice(f)}`;
writeFileSync(ARQUIVO, novo, 'utf8');
console.log(`Plano escrito em ${ARQUIVO}`);
