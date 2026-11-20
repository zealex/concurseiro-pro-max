import { describe, expect, it } from 'vitest';
import { EDITAIS_MODELO } from '@/data/editais';
import type { QuestaoTreino } from '@/data/types';
import type { SessaoQuestoes } from '@/domain/types';
import type { EditalAlvo } from '@/shared/edital';
import { editalDoModelo } from '../edital';
import { evolucaoSimulados } from '../metrics';
import { alvoDoItem, corrigirSimulado, duracaoDoEdital, duracaoDoSimulado, idsDoSimulado, montarSimulado, simuladoValidoOuNulo } from '../simulado';

const mult = (id: string, temaId: string): QuestaoTreino => ({
  id,
  temaId,
  formato: 'multipla',
  dificuldade: 1,
  enunciado: 'e',
  alternativas: ['a', 'b', 'c', 'd', 'e'],
  correta: 0,
  comentario: 'x'.repeat(40),
});
const ce = (id: string, temaId: string, gabaritoCE = true): QuestaoTreino => ({ id, temaId, formato: 'certo-errado', dificuldade: 1, enunciado: 'item', gabaritoCE, comentario: 'x'.repeat(40) });

function semente(s: number): () => number {
  let x = s;
  return () => {
    x = (x * 1103515245 + 12345) % 2147483648;
    return x / 2147483648;
  };
}

// 6 de Português (4 C/E + 2 múltipla) e 5 de Matemática (múltipla).
const BANCO: QuestaoTreino[] = [
  ce('lp-1', 'lp-crase'),
  ce('lp-2', 'lp-crase', false),
  ce('lp-3', 'lp-concordancia'),
  ce('lp-4', 'lp-concordancia', false),
  mult('lp-5', 'lp-crase'),
  mult('lp-6', 'lp-concordancia'),
  mult('mat-1', 'mat-juros'),
  mult('mat-2', 'mat-juros'),
  mult('mat-3', 'mat-porcentagem'),
  mult('mat-4', 'mat-porcentagem'),
  mult('mat-5', 'mat-porcentagem'),
];

const EDITAL_MULTIPLA: EditalAlvo = {
  baseId: null,
  nome: 'Prefeitura X',
  banca: 'FUNDATEC',
  minimoTotal: null,
  fases: [],
  provas: [
    {
      id: 'obj',
      nome: 'Objetiva',
      formato: 'multipla',
      duracaoMin: 180,
      minimoPct: 50,
      itens: [
        { rotulo: 'Português', disciplinaIds: ['lingua-portuguesa'], questoes: 4, peso: 1, minimo: 2 },
        { rotulo: 'Matemática', disciplinaIds: ['matematica'], questoes: 4, peso: 1 },
        { rotulo: 'Específicos', disciplinaIds: ['clinica-medica'], questoes: 12, peso: 2 },
      ],
    },
  ],
};

const EDITAL_CE: EditalAlvo = {
  baseId: null,
  nome: 'Cebraspe X',
  banca: 'Cebraspe',
  minimoTotal: 3,
  fases: [],
  provas: [
    {
      id: 'p1',
      nome: 'P1',
      formato: 'certo-errado',
      penalidadeErro: 0.5,
      itens: [{ rotulo: 'Português', disciplinaIds: ['lingua-portuguesa'], questoes: 4, peso: 1 }],
      minimoPontos: 2,
    },
  ],
};

describe('montarSimulado', () => {
  it('sorteia por item, só das disciplinas do item, sem repetir questão', () => {
    const plano = montarSimulado(EDITAL_MULTIPLA, BANCO, {}, { tamanho: 'completo', aleatorio: semente(3) });
    const [pt, mat, esp] = plano.provas[0]!.itens;
    expect(pt!.questaoIds).toHaveLength(4);
    expect(pt!.questaoIds.every((id) => id.startsWith('lp-'))).toBe(true);
    expect(mat!.questaoIds).toHaveLength(4);
    expect(mat!.questaoIds.every((id) => id.startsWith('mat-'))).toBe(true);
    expect(esp!.questaoIds).toHaveLength(0);
    const ids = idsDoSimulado(plano);
    expect(new Set(ids).size).toBe(ids.length);
    expect(plano.cobertura).toBeCloseTo(8 / 20);
  });

  it('prefere o formato da prova e completa com o outro quando falta', () => {
    const multipla = montarSimulado(EDITAL_MULTIPLA, BANCO, {}, { tamanho: 'completo', aleatorio: semente(1) });
    const pt = multipla.provas[0]!.itens[0]!.questaoIds;
    // Só há 2 de múltipla em Português: as outras 2 vêm do Certo/Errado.
    expect(pt.filter((id) => id === 'lp-5' || id === 'lp-6')).toHaveLength(2);

    const cebraspe = montarSimulado(EDITAL_CE, BANCO, {}, { tamanho: 'completo', aleatorio: semente(1) });
    expect(cebraspe.provas[0]!.itens[0]!.questaoIds.sort()).toEqual(['lp-1', 'lp-2', 'lp-3', 'lp-4']);
  });

  it('meia prova pede metade (arredondando para cima) e o tempo é proporcional', () => {
    expect(alvoDoItem({ questoes: 5 }, 'metade')).toBe(3);
    expect(alvoDoItem({ questoes: 1 }, 'metade')).toBe(1);
    const plano = montarSimulado(EDITAL_MULTIPLA, BANCO, {}, { tamanho: 'metade', aleatorio: semente(2) });
    expect(plano.provas[0]!.itens.map((i) => i.questaoIds.length)).toEqual([2, 2, 0]);
    // 180 min para 20 questões → 4 questões = 36 min.
    expect(plano.duracaoMin).toBe(36);
  });

  it('duração: soma das provas ou 3 min/questão; mínimo de 5 min', () => {
    expect(duracaoDoEdital(EDITAL_MULTIPLA)).toBe(180);
    expect(duracaoDoEdital(EDITAL_CE)).toBe(12);
    expect(duracaoDoSimulado(EDITAL_CE, 1)).toBe(5);
    expect(duracaoDoSimulado(EDITAL_CE, 0)).toBe(0);
  });

  it('monta todos os presets sem erro e sem repetir questão', () => {
    for (const m of EDITAIS_MODELO) {
      const plano = montarSimulado(editalDoModelo(m), BANCO, {}, { tamanho: 'completo', aleatorio: semente(5) });
      const ids = idsDoSimulado(plano);
      expect(new Set(ids).size, m.id).toBe(ids.length);
    }
  });
});

describe('corrigirSimulado', () => {
  const mapa = new Map(BANCO.map((q) => [q.id, q]));

  it('Certo/Errado: cada erro desconta a penalidade; branco não desconta', () => {
    const plano = montarSimulado(EDITAL_CE, BANCO, {}, { tamanho: 'completo', aleatorio: semente(1) });
    // lp-1 (C) certo, lp-2 (E) errado, lp-3 em branco, lp-4 (E) certo.
    const r = corrigirSimulado(plano, mapa, { 'lp-1': true, 'lp-2': true, 'lp-3': null, 'lp-4': false }, {});
    const item = r.provas[0]!.itens[0]!;
    expect([item.acertos, item.erros, item.brancos]).toEqual([2, 1, 1]);
    expect(item.pontos).toBeCloseTo(1.5);
    expect(r.provas[0]!.status).toBe('abaixo'); // mínimo 2
    expect(r.status).toBe('abaixo'); // mínimo total 3
    expect(r.riscoEliminacao).toBe(true);
  });

  it('projeta o item parcial para o nº de questões do edital e usa o histórico onde não há banco', () => {
    const plano = montarSimulado(EDITAL_MULTIPLA, BANCO, {}, { tamanho: 'metade', aleatorio: semente(2) });
    const respostas = Object.fromEntries(idsDoSimulado(plano).map((id) => [id, 0 as const]));
    // Clínica: 60% de acerto registrado → 12 × 2 × 0,6 = 14,4.
    const r = corrigirSimulado(plano, mapa, respostas, { 'clinica-medica': { acertos: 6, total: 10 } });
    const [pt, mat, esp] = r.provas[0]!.itens;
    expect(mat!.fonte).toBe('simulado');
    expect(mat!.pontos).toBeCloseTo(4); // 2/2 certas → 4 de 4
    expect(esp!.fonte).toBe('historico');
    expect(esp!.pontos).toBeCloseTo(14.4);
    expect(pt!.minimo).toBe(2);
    expect(r.provas[0]!.completa).toBe(true);
    expect(r.provas[0]!.minimo).toBe(16); // 50% de 32
  });

  it('sem histórico: item sem nota e prova parcial (sem julgar o mínimo da prova)', () => {
    const plano = montarSimulado(EDITAL_MULTIPLA, BANCO, {}, { tamanho: 'completo', aleatorio: semente(4) });
    const r = corrigirSimulado(plano, mapa, {}, {});
    const esp = r.provas[0]!.itens[2]!;
    expect(esp.pontos).toBeNull();
    expect(esp.fonte).toBeNull();
    expect(r.provas[0]!.completa).toBe(false);
    expect(r.provas[0]!.status).toBe('sem-dados');
    // Português em branco (0 < mínimo 2) já elimina.
    expect(r.provas[0]!.itens[0]!.status).toBe('abaixo');
    expect(r.riscoEliminacao).toBe(true);
    expect(r.brancos).toBe(8);
  });
});

describe('evolucaoSimulados', () => {
  const s = (p: Partial<SessaoQuestoes>): SessaoQuestoes => ({
    id: Math.random().toString(36),
    data: '2026-11-10',
    tipo: 'simulado',
    eixo: 'basicos',
    disciplinaId: 'matematica',
    temaId: null,
    banca: null,
    total: 10,
    acertos: 5,
    duracaoMin: null,
    notas: '',
    criadoEm: '',
    ...p,
  });

  it('soma as sessões do mesmo lote num ponto só; manuais contam um a um', () => {
    const r = evolucaoSimulados([
      s({ lote: 'L1', total: 10, acertos: 8, data: '2026-11-12' }),
      s({ lote: 'L1', total: 30, acertos: 12, data: '2026-11-12' }),
      s({ total: 20, acertos: 10, data: '2026-11-11' }),
      s({ tipo: 'bateria', total: 50, acertos: 50 }),
    ]);
    expect(r).toEqual([
      { data: '2026-11-11', pct: 0.5, total: 20 },
      { data: '2026-11-12', pct: 0.5, total: 40 },
    ]);
  });
});

describe('simuladoValidoOuNulo', () => {
  it('aceita o formato salvo e descarta lixo', () => {
    const plano = montarSimulado(EDITAL_CE, BANCO, {}, { tamanho: 'completo', aleatorio: semente(1) });
    const ok = { id: 's', nome: 'n', banca: 'b', inicioMs: 1, duracaoMin: 10, plano, respostas: {}, indice: 0 };
    expect(simuladoValidoOuNulo(ok)).toEqual(ok);
    expect(simuladoValidoOuNulo(null)).toBeNull();
    expect(simuladoValidoOuNulo({ ...ok, duracaoMin: 0 })).toBeNull();
    expect(simuladoValidoOuNulo({ ...ok, plano: { provas: [{ itens: [{}] }] } })).toBeNull();
  });
});
