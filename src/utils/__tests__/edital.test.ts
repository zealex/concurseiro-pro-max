import { describe, expect, it } from 'vitest';
import { getDisciplina } from '@/data/eixos';
import { EDITAIS_MODELO, getEditalModelo, modelosDaBanca } from '@/data/editais';
import { EditalAlvoSchema, editalValidoOuNulo } from '@/shared/edital';
import {
  desempenhoPorDisciplina,
  editalDoModelo,
  fatiaBasicas,
  minimoDaProva,
  perfilBasicas,
  pontosDaProva,
  pontosMaximos,
  projetarNota,
  statusMinimo,
} from '../edital';

const modelo = (id: string) => {
  const m = getEditalModelo(id);
  if (!m) throw new Error(`preset ${id} não encontrado`);
  return editalDoModelo(m);
};

describe('presets de editais (lidos no PDF)', () => {
  it('ids únicos, disciplinas existentes, fonte https, data de conferência e schema válido', () => {
    const ids = EDITAIS_MODELO.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const e of EDITAIS_MODELO) {
      expect(e.fonteUrl, e.id).toMatch(/^https:\/\//);
      expect(e.conferidoEm, e.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      for (const p of e.provas) for (const i of p.itens) for (const d of i.disciplinaIds) expect(getDisciplina(d), `${e.id}: ${d}`).toBeDefined();
      expect(EditalAlvoSchema.safeParse(editalDoModelo(e)).success, e.id).toBe(true);
    }
  });

  it('mínimos nunca passam do máximo possível', () => {
    for (const e of EDITAIS_MODELO) {
      for (const p of e.provas) {
        const min = minimoDaProva(p);
        if (min !== null) expect(min, `${e.id}/${p.id}`).toBeLessThanOrEqual(pontosDaProva(p));
        for (const i of p.itens) if (i.minimo) expect(i.minimo, `${e.id}/${i.rotulo}`).toBeLessThanOrEqual(i.questoes * i.peso);
      }
      if (e.minimoTotal) expect(e.minimoTotal).toBeLessThanOrEqual(pontosMaximos(e));
    }
  });

  it('pontuação máxima confere com o total declarado no edital', () => {
    const esperado: Record<string, number> = {
      'pmf-2024': 120,
      'pcp-pr-2024': 80,
      'igp-rs-2025': 80,
      'pci-sc-2025': 10,
      'pf-2025-area12': 120,
      'objetiva-ipe-2026': 100,
      'fundatec-nova-padua-2026': 100,
      'fundatec-ijui-2026': 80,
      'legalle-antonio-prado-2026': 90,
      'sctreinamentos-bom-retiro-2026': 100,
      'ibam-fraiburgo-2026': 300,
      'furb-navegantes-2026': 10,
      'fepese-urubici-2026': 10,
      'unicampo-umuarama-2026': 120,
      'fau-paula-freitas-2026': 100,
    };
    for (const [id, total] of Object.entries(esperado)) expect(pontosMaximos(modelo(id)), id).toBeCloseTo(total, 6);
  });

  it('acha modelos pela banca do Radar', () => {
    expect(modelosDaBanca('FUNDATEC').map((m) => m.id)).toContain('fundatec-nova-padua-2026');
    expect(modelosDaBanca('Instituto Objetiva').map((m) => m.id)).toContain('objetiva-ipe-2026');
    expect(modelosDaBanca(null)).toEqual([]);
  });
});

describe('peso das básicas e perfil do cronograma', () => {
  it('fatia das básicas é medida em pontos', () => {
    expect(fatiaBasicas(modelo('fundatec-nova-padua-2026'))).toBeCloseTo(0.625, 6);
    expect(fatiaBasicas(modelo('objetiva-ipe-2026'))).toBeCloseTo(0.44, 6);
    expect(fatiaBasicas(modelo('pmf-2024'))).toBeCloseTo(50 / 120, 6);
  });

  it('reforço só quando as básicas valem ≥ 50% dos pontos (exatamente 50% conta)', () => {
    expect(perfilBasicas(modelo('fundatec-nova-padua-2026'))?.reforco).toBe(true);
    expect(perfilBasicas(modelo('pmf-2024'))?.reforco).toBe(false);
    const meio = {
      provas: [
        {
          id: 'x',
          nome: 'x',
          formato: 'multipla' as const,
          itens: [
            { rotulo: 'Português', disciplinaIds: ['lingua-portuguesa'], questoes: 10, peso: 1 },
            { rotulo: 'Específicos', disciplinaIds: ['clinica-medica'], questoes: 10, peso: 1 },
          ],
        },
      ],
    };
    expect(perfilBasicas(meio)?.reforco).toBe(true);
    expect(perfilBasicas(null)).toBeNull();
  });

  it('perfil lista as disciplinas do edital', () => {
    const p = perfilBasicas(modelo('igp-rs-2025'))!;
    expect(p.disciplinas).toContain('lingua-inglesa');
    expect(p.disciplinas).toContain('criminalistica');
    expect(p.disciplinas).not.toContain('matematica');
  });
});

describe('nota projetada e risco de eliminação', () => {
  const todas = (pct: number, ids: string[]) => Object.fromEntries(ids.map((id) => [id, { acertos: pct * 100, total: 100 }]));

  it('Certo/Errado desconta a penalidade (Cebraspe −0,5)', () => {
    const e = modelo('pmf-2024');
    const ids = e.provas.flatMap((p) => p.itens.flatMap((i) => i.disciplinaIds));
    const r = projetarNota(e, todas(0.8, ids));
    expect(r.provas[0]!.pontos).toBeCloseTo(50 * (0.8 - 0.5 * 0.2), 6);
    expect(r.provas[1]!.pontos).toBeCloseTo(70 * 0.7, 6);
    expect(r.status).toBe('ok');
    expect(r.riscoEliminacao).toBe(false);
  });

  it('zerar uma disciplina com mínimo próprio acusa risco de eliminação', () => {
    const e = modelo('fundatec-nova-padua-2026');
    const ids = e.provas.flatMap((p) => p.itens.flatMap((i) => i.disciplinaIds));
    const d = { ...todas(0.9, ids), 'lingua-portuguesa': { acertos: 0, total: 20 } };
    const r = projetarNota(e, d);
    expect(r.provas[0]!.itens[0]!.status).toBe('abaixo');
    expect(r.riscoEliminacao).toBe(true);
  });

  it('sem dados: nada projetado; dados parciais: estimativa com cobertura', () => {
    const e = modelo('objetiva-ipe-2026');
    const vazio = projetarNota(e, {});
    expect(vazio.pontos).toBeNull();
    expect(vazio.cobertura).toBe(0);
    expect(vazio.provas[0]!.status).toBe('sem-dados');
    const parcial = projetarNota(e, { 'lingua-portuguesa': { acertos: 7, total: 10 } });
    expect(parcial.cobertura).toBeCloseTo(20 / 100, 6);
    expect(parcial.pontos).toBeCloseTo(100 * 0.7, 6);
  });

  it('status com margem de atenção', () => {
    expect(statusMinimo(null, 10)).toBe('sem-dados');
    expect(statusMinimo(5, null)).toBe('sem-minimo');
    expect(statusMinimo(9, 10)).toBe('abaixo');
    expect(statusMinimo(11, 10)).toBe('atencao');
    expect(statusMinimo(12, 10)).toBe('ok');
  });

  it('desempenho por disciplina soma as sessões e ignora sessões vazias', () => {
    const d = desempenhoPorDisciplina([
      { disciplinaId: 'matematica', total: 10, acertos: 6 },
      { disciplinaId: 'matematica', total: 5, acertos: 9 },
      { disciplinaId: 'lingua-portuguesa', total: 0, acertos: 0 },
    ]);
    expect(d).toEqual({ matematica: { acertos: 11, total: 15 } });
  });
});

describe('validação do edital-alvo salvo', () => {
  it('aceita um preset convertido e rejeita lixo', () => {
    expect(editalValidoOuNulo(modelo('pci-sc-2025'))).not.toBeNull();
    expect(editalValidoOuNulo({ nome: 'x' })).toBeNull();
    expect(editalValidoOuNulo(undefined)).toBeNull();
    const ruim = { ...modelo('pci-sc-2025'), provas: [{ ...modelo('pci-sc-2025').provas[0]!, itens: [{ rotulo: 'x', disciplinaIds: ['a'], questoes: 0, peso: 1 }] }] };
    expect(editalValidoOuNulo(ruim)).toBeNull();
  });
});
