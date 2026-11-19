import { describe, expect, it } from 'vitest';
import { PLANO_12_SEMANAS, blocosDaTrilha, minutosDaSemana } from '@/data/plano12Semanas';
import { TRILHAS, TIPOS_PLANTAO } from '@/data/types';
import { addDays } from '../dates';
import { criarItemRevisao } from '../spacedRepetition';
import {
  blocosDoSlot,
  CAPACIDADE_SEMANA_COMPRIMIDA,
  distribuirSemana,
  filaDeRedistribuicao,
  mapearSemanas,
  montarAgenda,
  ORCAMENTO_PLANTAO,
  progressoPorSemana,
  type ConfigAgenda,
} from '../scheduler';

const INICIO = '2026-11-16';
const cfg = (p: Partial<ConfigAgenda> = {}): ConfigAgenda => ({
  trilha: 'generalista',
  dataInicio: INICIO,
  orcamentoMin: 210,
  diasPlantao: [],
  provaAlvo: null,
  ...p,
});
const vazio = { concluidos: {}, revisoes: [] };

describe('dados do plano', () => {
  it('12 semanas, 3 mesociclos, ids únicos e blocos com trilha', () => {
    expect(PLANO_12_SEMANAS).toHaveLength(12);
    expect(PLANO_12_SEMANAS.map((s) => s.mesociclo)).toEqual([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]);
    const ids = PLANO_12_SEMANAS.flatMap((s) => s.blocos.map((b) => b.id));
    expect(new Set(ids).size).toBe(ids.length);
    expect(PLANO_12_SEMANAS.every((s) => s.blocos.every((b) => b.trilhas.length > 0 && b.minutos > 0))).toBe(true);
  });
  it('toda semana tem conteúdo para todas as trilhas e carga plausível', () => {
    for (const s of PLANO_12_SEMANAS) {
      for (const t of TRILHAS) {
        const min = minutosDaSemana(s.semana, t);
        expect(min).toBeGreaterThanOrEqual(s.semana === 12 ? 300 : 500);
        expect(min).toBeLessThanOrEqual(7 * 240);
      }
    }
  });
  it('blocos de questões e lei seca têm versão de plantão', () => {
    const semVersao = PLANO_12_SEMANAS.flatMap((s) => s.blocos).filter((b) => (b.tipo === 'questoes' || b.tipo === 'lei-seca') && !b.plantaoAlternativa);
    expect(semVersao).toEqual([]);
  });
});

describe('distribuição semanal', () => {
  it('dias 1–5 equilibrados, dia 6 só com blocos de sábado, dia 7 livre', () => {
    const blocos = PLANO_12_SEMANAS[1]!.blocos.filter((b) => b.trilhas.includes('generalista'));
    const dias = distribuirSemana(blocos);
    expect(dias.flat()).toHaveLength(blocos.length);
    expect(dias[5]!.every((b) => b.sabado)).toBe(true);
    expect(dias[6]).toEqual([]);
    const cargas = dias.slice(0, 5).map((d) => d.reduce((a, b) => a + b.minutos, 0));
    expect(Math.max(...cargas) - Math.min(...cargas)).toBeLessThanOrEqual(150);
  });
  it('preserva a ordem pedagógica', () => {
    const blocos = PLANO_12_SEMANAS[0]!.blocos.filter((b) => b.trilhas.includes('generalista') && !b.sabado);
    expect(distribuirSemana(blocos).flat().map((b) => b.id)).toEqual(blocos.map((b) => b.id));
  });
  it('em todas as semanas e trilhas, os dias 1–5 diferem no máximo 150 min', () => {
    for (const s of PLANO_12_SEMANAS) {
      for (const t of TRILHAS) {
        const dias = distribuirSemana(blocosDaTrilha(s.semana, t));
        const cargas = dias.slice(0, 5).map((d) => d.reduce((a, b) => a + b.minutos, 0));
        expect(Math.max(...cargas) - Math.min(...cargas), `semana ${s.semana} · ${t}`).toBeLessThanOrEqual(150);
      }
    }
  });
});

describe('agenda do dia', () => {
  it('antes do início não há tarefas', () => {
    expect(montarAgenda('2026-11-10', cfg(), vazio).fase).toBe('antes');
  });
  it('dia 1 começa pelo diagnóstico na semana 1', () => {
    const a = montarAgenda(INICIO, cfg(), vazio);
    expect(a.semanaIndice).toBe(1);
    expect(a.diaDaSemana).toBe(1);
    expect(a.tarefas[0]?.tipo).toBe('diagnostico');
    expect(a.mesociclo).toBe(1);
  });
  it('filtra por trilha', () => {
    const leg = montarAgenda(INICIO, cfg({ trilha: 'legista' }), vazio);
    expect(leg.tarefas.every((t) => t.eixo === 'legal' || t.eixo === 'tronco')).toBe(true);
    const cli = montarAgenda(addDays(INICIO, 1), cfg({ trilha: 'clinico' }), vazio);
    expect(cli.tarefas.every((t) => t.eixo === 'clinica' || t.eixo === 'tronco')).toBe(true);
    const per = montarAgenda(addDays(INICIO, 1), cfg({ trilha: 'pericia' }), vazio);
    expect(per.tarefas.every((t) => t.eixo !== 'legal')).toBe(true);
  });
  it('Modo Plantão: teto de 60 min, só tipos curtos e revisões primeiro', () => {
    const dia = addDays(INICIO, 2);
    const rev = criarItemRevisao({ id: 'r', origem: 'teoria', refId: 'x', temaId: 'nr07', eixo: 'pericia', titulo: 'NR-07', data: addDays(dia, -1), agoraIso: '' });
    const a = montarAgenda(dia, cfg({ diasPlantao: [dia] }), { concluidos: {}, revisoes: [rev] });
    expect(a.modo).toBe('plantao');
    expect(a.minutosPlanejados).toBeLessThanOrEqual(ORCAMENTO_PLANTAO);
    expect(a.tarefas[0]?.origem).toBe('revisao');
    expect(a.tarefas.every((t) => t.origem === 'revisao' || TIPOS_PLANTAO.includes(t.tipo) || t.origem === 'adaptativa')).toBe(true);
  });
  it('teoria de um dia não concluída é redistribuída depois (teto +60 min)', () => {
    const dia1 = montarAgenda(INICIO, cfg(), vazio);
    const naoFeitos = dia1.tarefas.filter((t) => t.origem === 'plano').map((t) => t.blocoId!);
    const fila = filaDeRedistribuicao(cfg(), {}, addDays(INICIO, 1));
    expect(fila.map((b) => b.id)).toEqual(naoFeitos.filter((id) => !PLANO_12_SEMANAS[0]!.blocos.find((b) => b.id === id)?.sabado));
    const dia2 = montarAgenda(addDays(INICIO, 1), cfg(), vazio);
    const redistribuidas = dia2.tarefas.filter((t) => t.origem === 'redistribuida');
    expect(redistribuidas.length).toBeGreaterThan(0);
    const soma = redistribuidas.reduce((a, t) => a + t.minutos, 0);
    expect(soma <= 60 || redistribuidas.length === 1).toBe(true);
    expect(dia2.pendentesNaFila).toBeGreaterThan(0);
  });
  it('blocos concluídos saem da fila', () => {
    const dia1 = montarAgenda(INICIO, cfg(), vazio);
    const concluidos = Object.fromEntries(dia1.tarefas.filter((t) => t.blocoId).map((t) => [t.blocoId!, { data: INICIO, plantao: false }]));
    expect(filaDeRedistribuicao(cfg(), concluidos, addDays(INICIO, 1))).toEqual([]);
  });
  it('plantão empurra a teoria do dia para a fila', () => {
    const dia = addDays(INICIO, 1);
    const padrao = montarAgenda(dia, cfg(), vazio).tarefas.filter((t) => t.origem === 'plano' && t.tipo === 'teoria');
    const fila = filaDeRedistribuicao(cfg({ diasPlantao: [dia] }), {}, addDays(dia, 1)).map((b) => b.id);
    for (const t of padrao) expect(fila).toContain(t.blocoId);
  });
  it('bateria adaptativa completa o orçamento usando o pior tema', () => {
    const dia = addDays(INICIO, 5 * 7 + 6 - 1); // dia 6 da semana 6 (só bateria de sábado)
    // Usuário em dia: tudo dos dias anteriores concluído.
    const concluidos = Object.fromEntries(filaDeRedistribuicao(cfg(), {}, dia).map((b) => [b.id, { data: addDays(dia, -1), plantao: false }]));
    const a = montarAgenda(dia, cfg(), { concluidos, revisoes: [], piorTema: { temaId: 'paf', nome: 'Projéteis de arma de fogo' } });
    const ada = a.tarefas.find((t) => t.origem === 'adaptativa');
    expect(ada?.titulo).toContain('Projéteis');
    expect(a.minutosPlanejados).toBeLessThanOrEqual(240);
  });
  it('dia 7 traz revisão semanal + caderno de erros', () => {
    const a = montarAgenda(addDays(INICIO, 6), cfg(), vazio);
    expect(a.diaDaSemana).toBe(7);
    expect(a.tarefas.some((t) => t.tipo === 'caderno-erros')).toBe(true);
  });
  it('depois das 12 semanas entra em manutenção; depois da prova não há agenda', () => {
    expect(montarAgenda(addDays(INICIO, 84), cfg(), vazio).fase).toBe('manutencao');
    expect(montarAgenda('2027-03-01', cfg({ provaAlvo: '2027-02-01' }), vazio).fase).toBe('apos-prova');
  });
});

describe('compressão por prova-alvo', () => {
  it('sem prova ou prova distante = 12 semanas normais', () => {
    expect(mapearSemanas(INICIO, null).comprimido).toBe(false);
    expect(mapearSemanas(INICIO, addDays(INICIO, 120)).comprimido).toBe(false);
  });
  it('prova em 8 semanas: 4 semanas essenciais cobrindo 1–8 + reta final 9–12', () => {
    const m = mapearSemanas(INICIO, addDays(INICIO, 8 * 7 - 1));
    expect(m.totalSemanas).toBe(8);
    expect(m.slots.map((s) => s.semanas)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9], [10], [11], [12]]);
    expect(m.slots.slice(0, 4).every((s) => s.essencialApenas)).toBe(true);
  });
  it('semana que espreme várias semanas respeita a capacidade semanal e cobre todas elas', () => {
    const m = mapearSemanas(INICIO, addDays(INICIO, 5 * 7 - 1)); // 5 semanas → 1 slot com as semanas 1–8
    expect(m.slots[0]?.semanas).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    const blocos = blocosDoSlot(m.slots[0]!, 'generalista');
    const semSabado = blocos.filter((b) => !b.sabado);
    expect(semSabado.reduce((a, b) => a + b.minutos, 0)).toBeLessThanOrEqual(CAPACIDADE_SEMANA_COMPRIMIDA);
    expect(new Set(semSabado.map((b) => b.semana)).size).toBe(8);
    expect(blocos.filter((b) => b.sabado)).toHaveLength(1);
  });
  it('prova em 3 semanas: só a reta final', () => {
    const m = mapearSemanas(INICIO, addDays(INICIO, 20));
    expect(m.slots.map((s) => s.semanas)).toEqual([[10], [11], [12]]);
  });
  it('semanas comprimidas trazem apenas blocos essenciais (e o do dia 6)', () => {
    const c = cfg({ provaAlvo: addDays(INICIO, 8 * 7 - 1) });
    const p = progressoPorSemana(c, {});
    expect(p).toHaveLength(8);
    const completo = PLANO_12_SEMANAS[0]!.blocos.filter((b) => b.trilhas.includes('generalista')).length + PLANO_12_SEMANAS[1]!.blocos.filter((b) => b.trilhas.includes('generalista')).length;
    expect(p[0]!.total).toBeLessThan(completo);
  });
});
