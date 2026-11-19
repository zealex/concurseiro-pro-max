import { describe, expect, it } from 'vitest';
import { getCheatSheet } from '../cheatSheets';
import { getChecklist } from '../checklistsLeiSeca';
import { DISCIPLINAS, getTema } from '../eixos';
import { PLANO_12_SEMANAS } from '../plano12Semanas';
import { EIXOS, TRILHAS } from '../types';

const existeNaBiblioteca = (id: string) => !!getChecklist(id) || !!getCheatSheet(id);

describe('integridade do conteúdo', () => {
  it('ids de temas são únicos e todo eixo tem disciplinas', () => {
    const ids = DISCIPLINAS.flatMap((d) => d.temas.map((t) => t.id));
    expect(new Set(ids).size).toBe(ids.length);
    for (const e of EIXOS) expect(DISCIPLINAS.some((d) => d.eixo === e)).toBe(true);
  });

  it('toda referência de tema e de bloco aponta para um checklist ou cheat sheet existente', () => {
    const quebradas = [
      ...DISCIPLINAS.flatMap((d) => d.temas.flatMap((t) => (t.refs ?? []).filter((r) => !existeNaBiblioteca(r)).map((r) => `${t.id} → ${r}`))),
      ...PLANO_12_SEMANAS.flatMap((s) => s.blocos.flatMap((b) => (b.refs ?? []).filter((r) => !existeNaBiblioteca(r)).map((r) => `${b.id} → ${r}`))),
    ];
    expect(quebradas).toEqual([]);
  });

  it('todos os temas dos blocos existem e o eixo do bloco bate com o do 1º tema', () => {
    for (const s of PLANO_12_SEMANAS) {
      for (const b of s.blocos) {
        for (const t of b.temaIds) expect(getTema(t), `${b.id}: ${t}`).toBeDefined();
        expect(getTema(b.temaIds[0] ?? '')?.disciplina.eixo, `${b.id} (${b.titulo})`).toBe(b.eixo);
      }
    }
  });

  it('foco no generalista: perícia, legal e clínica aparecem toda semana na trilha Generalista', () => {
    for (const s of PLANO_12_SEMANAS) {
      const eixos = new Set(s.blocos.filter((b) => b.trilhas.includes('generalista')).map((b) => b.eixo));
      for (const e of ['pericia', 'legal', 'clinica'] as const) expect(eixos.has(e), `semana ${s.semana} sem ${e}`).toBe(true);
    }
  });

  it('trilha Perícia cobre os temas do edital de Perito Médico Federal', () => {
    const temas = new Set(PLANO_12_SEMANAS.flatMap((s) => s.blocos.filter((b) => b.trilhas.includes('pericia')).flatMap((b) => b.temaIds)));
    for (const t of ['incapacidade-laboral', 'pericia-previdenciaria', 'pericia-deficiencia-bpc', 'pericia-servidor', 'nexo-causal', 'lei8213', 'loas', 'nr07', 'cm-saude-mental', 'cm-musculoesqueletico']) {
      expect(temas.has(t), t).toBe(true);
    }
    expect(TRILHAS).toContain('pericia');
  });
});
