/**
 * Gera a seção "Detalhamento semana a semana" de docs/plano-estudos-90-dias.md
 * a partir de src/data/plano12Semanas.ts, mantendo documento e app sincronizados.
 *
 * Uso: npx tsx scripts/gerar-plano-md.ts
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { MESOCICLOS, PLANO_12_SEMANAS, minutosDaSemana } from '../src/data/plano12Semanas';
import { EIXO_LABEL, TIPO_BLOCO_LABEL, TRILHAS, type NivelBasicas, type Trilha } from '../src/data/types';

const ARQUIVO = resolve(__dirname, '..', 'docs', 'plano-estudos-90-dias.md');
const INICIO = '<!-- PLANO:INICIO -->';
const FIM = '<!-- PLANO:FIM -->';

const TRILHA_CURTA: Record<Trilha, string> = { generalista: 'G', pericia: 'P', legista: 'L', clinico: 'C' };
const NIVEL: Record<NivelBasicas, string> = { nucleo: 'Núcleo', complemento: 'Complemento', reforco: 'Reforço' };

function horas(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`;
}

function gerar(): string {
  const out: string[] = [];
  out.push(
    'Legenda das trilhas: **G** Generalista Completo · **P** Perícia Médica (INSS/RPPS) · **L** Médico Legista · **C** Clínico Geral/ESF/Plantonista. ★ = bloco essencial (mantido na compressão).',
  );
  out.push('');
  out.push(
    'Conhecimentos Básicos: **Núcleo** entra sempre · **Complemento** entra se couber no orçamento diário escolhido (até 6 h) · **Reforço** só quando as básicas valem ≥ 50% da prova-alvo (padrão da trilha Clínico). Com edital-alvo no app, entram só as disciplinas do edital. A carga mostra o Dia Padrão de 3h30 → 6h.',
  );
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
        `**Carga planejada:** ${TRILHAS.map(
          (t) => `${TRILHA_CURTA[t]} ${horas(minutosDaSemana(s.semana, t, { orcamentoMin: 210 }))}→${horas(minutosDaSemana(s.semana, t, { orcamentoMin: 360 }))}`,
        ).join(' · ')}`,
      );
      out.push('');
      out.push('| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |');
      out.push('|---|---|---|---|---|---|');
      for (const b of s.blocos.filter((x) => !x.nivel)) {
        const titulo = `${b.essencial ? '★ ' : ''}**${b.titulo}**${b.sabado ? ' _(dia 6)_' : ''}`;
        const trilhas = b.trilhas.map((t) => TRILHA_CURTA[t]).join(' ');
        const desc = b.descricao.replace(/\|/g, '/');
        out.push(`| ${titulo} | ${EIXO_LABEL[b.eixo]} | ${TIPO_BLOCO_LABEL[b.tipo]} | ${b.minutos} | ${trilhas} | ${desc} |`);
      }
      out.push('');
      const basicas = s.blocos.filter((x) => x.nivel);
      if (basicas.length) {
        out.push('**Conhecimentos Básicos da semana**');
        out.push('');
        out.push('| Bloco | Nível | Tipo | Min | Trilhas |');
        out.push('|---|---|---|---|---|');
        for (const b of basicas) {
          out.push(`| ${b.titulo} | ${NIVEL[b.nivel!]} | ${TIPO_BLOCO_LABEL[b.tipo]} | ${b.minutos} | ${b.trilhas.map((t) => TRILHA_CURTA[t]).join(' ')} |`);
        }
        out.push('');
      }
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
