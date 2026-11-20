import { describe, expect, it } from 'vitest';
import { PLANO_12_SEMANAS, blocosDaTrilha, minutosDaSemana } from '@/data/plano12Semanas';
import { capacidadeSemanal } from '@/data/selecaoBlocos';
import { TRILHAS, TIPOS_PLANTAO } from '@/data/types';
import { addDays } from '../dates';
import { criarItemRevisao } from '../spacedRepetition';
import {
  blocosDoSlot,
  distribuirSemana,
  filaDeRedistribuicao,
  mapearSemanas,
  montarAgenda,
  ORCAMENTO_MAX,
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
  it('toda semana tem conteúdo para todas as trilhas e carga plausível (210 e 360 min/dia)', () => {
    for (const s of PLANO_12_SEMANAS) {
      for (const t of TRILHAS) {
        for (const orcamentoMin of [210, 360]) {
          const min = minutosDaSemana(s.semana, t, { orcamentoMin });
          expect(min).toBeGreaterThanOrEqual(s.semana === 12 ? 300 : 500);
          expect(min).toBeLessThanOrEqual(7 * ORCAMENTO_MAX);
        }
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
  it('preserva a ordem pedagógica dos blocos médicos (as básicas entram depois, no dia mais leve)', () => {
    const blocos = PLANO_12_SEMANAS[0]!.blocos.filter((b) => b.trilhas.includes('generalista') && !b.sabado);
    const fixos = blocos.filter((b) => !b.nivel);
    expect(distribuirSemana(blocos).flat().filter((b) => !b.nivel).map((b) => b.id)).toEqual(fixos.map((b) => b.id));
    // Os blocos médicos ficam nos mesmos dias com ou sem básicas.
    const comBasicas = distribuirSemana(blocos).map((d) => d.filter((b) => !b.nivel).map((b) => b.id));
    expect(comBasicas).toEqual(distribuirSemana(fixos).map((d) => d.map((b) => b.id)));
  });
  it('em todas as semanas e trilhas, os dias 1–5 diferem no máximo 150 min e a média cabe em 6 h', () => {
    for (const s of PLANO_12_SEMANAS) {
      for (const t of TRILHAS) {
        for (const orcamentoMin of [210, 360]) {
          const dias = distribuirSemana(blocosDaTrilha(s.semana, t, { orcamentoMin }));
          const cargas = dias.slice(0, 5).map((d) => d.reduce((a, b) => a + b.minutos, 0));
          expect(Math.max(...cargas) - Math.min(...cargas), `semana ${s.semana} · ${t} · ${orcamentoMin}`).toBeLessThanOrEqual(150);
          expect(cargas.reduce((a, b) => a + b, 0) / 5, `semana ${s.semana} · ${t} · ${orcamentoMin}`).toBeLessThanOrEqual(ORCAMENTO_MAX);
        }
      }
    }
  });
  it('básicas: evita a mesma disciplina duas vezes no dia e o dia 1 começa pelo diagnóstico', () => {
    const dias = distribuirSemana(blocosDaTrilha(1, 'generalista', { orcamentoMin: 360 }));
    expect(dias[0]![0]!.tipo).toBe('diagnostico');
    for (const d of dias.slice(0, 5)) {
      const flex = d.filter((b) => b.nivel).map((b) => b.disciplinaId);
      const repetidas = flex.filter((x, i) => flex.indexOf(x) !== i);
      // Português tem 3 blocos na semana 1: com 5 dias, nenhuma disciplina precisa se repetir.
      expect(repetidas).toEqual([]);
    }
  });
});

describe('Conhecimentos Básicos no plano', () => {
  const flex = (semana: number, t: (typeof TRILHAS)[number], op = {}) => blocosDaTrilha(semana, t, op).filter((b) => b.nivel);

  it('toda semana tem básicas de núcleo para todas as trilhas', () => {
    for (const s of PLANO_12_SEMANAS) {
      for (const t of TRILHAS) {
        expect(flex(s.semana, t).some((b) => b.nivel === 'nucleo'), `semana ${s.semana} · ${t}`).toBe(true);
      }
    }
  });

  it('orçamento maior traz complemento; orçamento mínimo fica só no núcleo (Generalista)', () => {
    const pouco = flex(1, 'generalista', { orcamentoMin: 180 });
    const muito = flex(1, 'generalista', { orcamentoMin: 360 });
    expect(pouco.every((b) => b.nivel === 'nucleo')).toBe(true);
    expect(muito.some((b) => b.nivel === 'complemento')).toBe(true);
    expect(muito.length).toBeGreaterThan(pouco.length);
  });

  it('reforço: padrão só na trilha Clínico; com edital, só se o perfil pedir', () => {
    expect(flex(1, 'clinico', { orcamentoMin: 360 }).some((b) => b.nivel === 'reforco')).toBe(true);
    expect(flex(1, 'generalista', { orcamentoMin: 360 }).some((b) => b.nivel === 'reforco')).toBe(false);
    const perfil = { disciplinas: ['lingua-portuguesa', 'matematica', 'nocoes-informatica'], reforco: true };
    expect(flex(1, 'pericia', { orcamentoMin: 360, perfil }).some((b) => b.nivel === 'reforco')).toBe(true);
  });

  it('com edital-alvo entram só as disciplinas do edital (ignorando a trilha)', () => {
    const perfil = { disciplinas: ['lingua-portuguesa', 'matematica'], reforco: false };
    const blocos = flex(4, 'pericia', { orcamentoMin: 360, perfil });
    expect(new Set(blocos.map((b) => b.disciplinaId))).toEqual(new Set(['lingua-portuguesa', 'matematica', 'basicas']));
    // Matemática não é da trilha Perícia, mas está no edital.
    expect(blocos.some((b) => b.disciplinaId === 'matematica')).toBe(true);
  });

  it('as trilhas recebem as disciplinas típicas dos seus editais', () => {
    const per = new Set(flex(4, 'pericia', { orcamentoMin: 360 }).map((b) => b.disciplinaId));
    expect(per.has('etica-publica')).toBe(true);
    expect(per.has('matematica')).toBe(false);
    const cli = new Set(flex(4, 'clinico', { orcamentoMin: 360 }).map((b) => b.disciplinaId));
    expect(cli.has('matematica')).toBe(true);
    expect(cli.has('criminalistica')).toBe(false);
    const leg = new Set(flex(4, 'legista', { orcamentoMin: 360 }).map((b) => b.disciplinaId));
    expect(leg.has('criminalistica')).toBe(true);
  });

  it('básicas não vão para a fila de redistribuição', () => {
    const c = cfg({ orcamentoMin: 360 });
    const fila = filaDeRedistribuicao(c, {}, addDays(INICIO, 6));
    expect(fila.length).toBeGreaterThan(0);
    expect(fila.some((b) => b.nivel)).toBe(false);
  });

  it('a agenda muda com o perfil de básicas (cache isolado por perfil e orçamento)', () => {
    const dia = addDays(INICIO, 1);
    const ids = (c: ConfigAgenda) => montarAgenda(dia, c, vazio).tarefas.map((t) => t.id).join(',');
    const semEdital = ids(cfg({ orcamentoMin: 360 }));
    const soPortugues = ids(cfg({ orcamentoMin: 360, basicas: { disciplinas: ['lingua-portuguesa'], reforco: false } }));
    const orcamentoMenor = ids(cfg({ orcamentoMin: 180 }));
    expect(soPortugues).not.toBe(semEdital);
    expect(orcamentoMenor).not.toBe(semEdital);
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
    expect(leg.tarefas.every((t) => t.eixo === 'legal' || t.eixo === 'tronco' || t.eixo === 'basicos')).toBe(true);
    const cli = montarAgenda(addDays(INICIO, 1), cfg({ trilha: 'clinico' }), vazio);
    expect(cli.tarefas.every((t) => t.eixo === 'clinica' || t.eixo === 'tronco' || t.eixo === 'basicos')).toBe(true);
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
    const bloco = (id: string) => PLANO_12_SEMANAS[0]!.blocos.find((b) => b.id === id);
    // Blocos do dia 6 e de básicas não se acumulam.
    expect(fila.map((b) => b.id)).toEqual(naoFeitos.filter((id) => !bloco(id)?.sabado && !bloco(id)?.nivel));
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
  it('plantão empurra a teoria médica do dia para a fila', () => {
    const dia = addDays(INICIO, 1);
    const ehBasica = (id: string | null) => !!PLANO_12_SEMANAS[0]!.blocos.find((b) => b.id === id)?.nivel;
    const padrao = montarAgenda(dia, cfg(), vazio).tarefas.filter((t) => t.origem === 'plano' && t.tipo === 'teoria' && !ehBasica(t.blocoId));
    expect(padrao.length).toBeGreaterThan(0);
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
  it('flashcards vencidos viram a tarefa "Flashcards do dia" (10 min no plantão)', () => {
    const dia = addDays(INICIO, 2);
    const normal = montarAgenda(dia, cfg(), { ...vazio, flashcardsDevidos: 40 });
    const fla = normal.tarefas.find((t) => t.id === `fla:${dia}`);
    expect(fla?.minutos).toBe(20);
    expect(fla?.eixo).toBe('basicos');
    const plantao = montarAgenda(dia, cfg({ diasPlantao: [dia] }), { ...vazio, flashcardsDevidos: 40 });
    expect(plantao.tarefas.find((t) => t.id === `fla:${dia}`)?.minutos).toBe(10);
    expect(montarAgenda(dia, cfg(), vazio).tarefas.some((t) => t.id.startsWith('fla:'))).toBe(false);
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
    for (const orcamentoMin of [210, 360]) {
      const blocos = blocosDoSlot(m.slots[0]!, 'generalista', { orcamentoMin });
      const semSabado = blocos.filter((b) => !b.sabado);
      expect(semSabado.reduce((a, b) => a + b.minutos, 0)).toBeLessThanOrEqual(capacidadeSemanal(orcamentoMin));
      expect(new Set(semSabado.filter((b) => !b.nivel).map((b) => b.semana)).size).toBe(8);
      // As básicas de núcleo têm reserva própria e não somem na compressão.
      expect(semSabado.some((b) => b.nivel === 'nucleo')).toBe(true);
      expect(blocos.filter((b) => b.sabado)).toHaveLength(1);
    }
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
