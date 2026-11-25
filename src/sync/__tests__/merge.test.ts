import { describe, expect, it } from 'vitest';
import type { ErroCaderno, ItemRevisao, SessaoFoco, SessaoQuestoes } from '@/domain/types';
import type { Concurso } from '@/shared/concursos/schema';
import { iguais } from '../merge/iguais';
import { mesclar } from '../merge/mesclar';
import { mesclarConjunto, mesclarListaPorId, mesclarRegistro } from '../merge/primitivos';
import {
  specChecklist,
  specCronograma,
  specFocus,
  specQuestoes,
  specRadar,
  specSettings,
  specTreino,
  type QuestoesDoc,
  type RadarDoc,
  type SettingsDoc,
  type TreinoDoc,
} from '../specs';

const N = { modo: 'normal', preferir: 'local' } as const;

// ---------- fábricas ----------

function sessao(id: string, extra: Partial<SessaoQuestoes> = {}): SessaoQuestoes {
  return { id, data: '2026-11-20', tipo: 'bateria', eixo: 'basicos', disciplinaId: 'lingua-portuguesa', temaId: null, banca: null, total: 10, acertos: 7, duracaoMin: null, notas: '', criadoEm: `2026-11-20T10:00:00.000Z`, ...extra };
}

function erro(id: string, extra: Partial<ErroCaderno> = {}): ErroCaderno {
  return { id, data: '2026-11-20', eixo: 'basicos', disciplinaId: 'lingua-portuguesa', temaId: null, banca: null, enunciado: 'enunciado', porqueErrei: '', regraCorreta: '', fonte: '', resolvido: false, resolvidoEm: null, criadoEm: '2026-11-20T10:00:00.000Z', ...extra };
}

function revisao(id: string, extra: Partial<ItemRevisao> = {}): ItemRevisao {
  return { id, origem: 'teoria', refId: 's01-b01', temaId: null, eixo: 'basicos', titulo: 't', baseDate: '2026-11-20', etapa: 0, proxima: '2026-11-21', status: 'ativo', historico: [], criadoEm: '2026-11-20T10:00:00.000Z', ...extra };
}

const feito = { data: '2026-11-21', etapa: 0, resultado: 'ok' as const, acerto: null };

function questoes(p: Partial<QuestoesDoc> = {}): QuestoesDoc {
  return { sessoes: [], erros: [], revisoes: [], ...p };
}

function concurso(id: string, lastSeenAt: string): Concurso {
  return { id, lastSeenAt } as unknown as Concurso;
}

// ---------- casos ----------

describe('igualdade JSON', () => {
  it('propriedade undefined é igual a ausente; ordem de chaves não importa; ordem de arrays importa', () => {
    expect(iguais({ a: undefined }, {})).toBe(true);
    expect(iguais({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
    expect(iguais([1, 2], [2, 1])).toBe(false);
    expect(iguais(null, undefined)).toBe(false);
  });
});

describe('listas por id', () => {
  it('1. inclusões dos dois lados são mantidas (remotas no início das sessões)', () => {
    const b = questoes({ sessoes: [sessao('s0')] });
    const l = questoes({ sessoes: [sessao('sL'), sessao('s0')] });
    const r = questoes({ sessoes: [sessao('sR'), sessao('s0')] });
    expect(mesclar(specQuestoes, b, l, r).sessoes.map((s) => s.id)).toEqual(['sR', 'sL', 's0']);
  });

  it('2. exclusão local com remoto intacto → some', () => {
    const b = questoes({ sessoes: [sessao('s1'), sessao('s2')] });
    const l = questoes({ sessoes: [sessao('s2')] });
    expect(mesclar(specQuestoes, b, l, b).sessoes.map((s) => s.id)).toEqual(['s2']);
  });

  it('3. exclusão local vence a edição remota', () => {
    const b = questoes({ sessoes: [sessao('s1')] });
    const l = questoes();
    const r = questoes({ sessoes: [sessao('s1', { notas: 'editada' })] });
    expect(mesclar(specQuestoes, b, l, r).sessoes).toEqual([]);
  });

  it('4. erros: edição local e "resolvido" remoto convivem, com resolvido+resolvidoEm coerentes', () => {
    const b = questoes({ erros: [erro('e1')] });
    const l = questoes({ erros: [erro('e1', { porqueErrei: 'confundi crase' })] });
    const r = questoes({ erros: [erro('e1', { resolvido: true, resolvidoEm: '2026-11-22' })] });
    const [e] = mesclar(specQuestoes, b, l, r).erros;
    expect(e).toMatchObject({ porqueErrei: 'confundi crase', resolvido: true, resolvidoEm: '2026-11-22' });
  });

  it('5. revisões alteradas dos dois lados: vale a de histórico mais longo', () => {
    const b = questoes({ revisoes: [revisao('r1')] });
    const l = questoes({ revisoes: [revisao('r1', { titulo: 'renomeada' })] });
    const r = questoes({ revisoes: [revisao('r1', { historico: [feito], etapa: 1 })] });
    expect(mesclar(specQuestoes, b, l, r).revisoes[0]).toMatchObject({ etapa: 1, titulo: 't' });
    expect(mesclar(specQuestoes, b, r, l).revisoes[0]).toMatchObject({ etapa: 1, titulo: 't' });
  });

  it('6. cascata: excluir o erro localmente leva junto a revisão que o remoto concluiu', () => {
    const b = questoes({ erros: [erro('e1')], revisoes: [revisao('r1', { origem: 'erro', refId: 'e1' })] });
    const l = questoes();
    const r = questoes({ erros: [erro('e1')], revisoes: [revisao('r1', { origem: 'erro', refId: 'e1', historico: [feito], etapa: 1 })] });
    const m = mesclar(specQuestoes, b, l, r);
    expect(m.erros).toEqual([]);
    expect(m.revisoes).toEqual([]);
  });

  it('7. revisão nova do remoto para um erro excluído localmente é descartada', () => {
    const b = questoes({ erros: [erro('e1')] });
    const l = questoes();
    const r = questoes({ erros: [erro('e1')], revisoes: [revisao('r9', { origem: 'erro', refId: 'e1' })] });
    expect(mesclar(specQuestoes, b, l, r).revisoes).toEqual([]);
  });

  it('8. ciclos duplicados criados offline viram um só (o mesmo nos dois sentidos); com histórico nunca some', () => {
    const b = questoes();
    const l = questoes({ revisoes: [revisao('rA', { refId: 's02-b03', criadoEm: '2026-11-20T08:00:00.000Z' })] });
    const r = questoes({ revisoes: [revisao('rB', { refId: 's02-b03', criadoEm: '2026-11-20T09:00:00.000Z' })] });
    expect(mesclar(specQuestoes, b, l, r).revisoes.map((x) => x.id)).toEqual(['rA']);
    expect(mesclar(specQuestoes, b, r, l).revisoes.map((x) => x.id)).toEqual(['rA']);

    const r2 = questoes({ revisoes: [revisao('rB', { refId: 's02-b03', historico: [feito], etapa: 1 })] });
    expect(mesclar(specQuestoes, b, l, r2).revisoes.map((x) => x.id)).toEqual(['rB']);
    const l2 = questoes({ revisoes: [revisao('rA', { refId: 's02-b03', historico: [feito], etapa: 1 })] });
    expect(mesclar(specQuestoes, b, l2, r2).revisoes.map((x) => x.id).sort()).toEqual(['rA', 'rB']);
  });
});

describe('registros e conjuntos', () => {
  it('9. desmarcar localmente enquanto o remoto marca outro bloco', () => {
    const b = { concluidos: { 's01-b01': { data: '2026-11-20', plantao: false } }, notas: {}, diasAtivos: [] };
    const l = { ...b, concluidos: {} };
    const r = { ...b, concluidos: { ...b.concluidos, 's01-b02': { data: '2026-11-21', plantao: true } } };
    expect(Object.keys(mesclar(specCronograma, b, l, r).concluidos)).toEqual(['s01-b02']);
  });

  it('10. checklist marcado e desmarcado dos dois lados', () => {
    const b = { marcados: { a: '2026-11-20', b: '2026-11-20' } };
    const l = { marcados: { a: '2026-11-20', c: '2026-11-21' } }; // tirou b, pôs c
    const r = { marcados: { b: '2026-11-20', d: '2026-11-21' } }; // tirou a, pôs d
    expect(mesclar(specChecklist, b, l, r).marcados).toEqual({ c: '2026-11-21', d: '2026-11-21' });
  });

  it('11. conjunto: remoção de um lado e inclusão do outro; limite de 200 mantém os mais recentes', () => {
    expect(mesclarConjunto(['d1', 'd3'], ['d3'], ['d1', 'd2', 'd3'])).toEqual(['d2', 'd3']);
    const muitos = Array.from({ length: 205 }, (_, i) => `2026-01-${String(i).padStart(3, '0')}`);
    expect(mesclarConjunto([], muitos, [], { limite: 200 })).toEqual(muitos.slice(-200));
  });

  it('notas: edição vence exclusão (texto não se perde)', () => {
    const b = { concluidos: {}, notas: { x: 'antiga' }, diasAtivos: [] };
    const l = { ...b, notas: {} };
    const r = { ...b, notas: { x: 'nova' } };
    expect(mesclar(specCronograma, b, l, r).notas).toEqual({ x: 'nova' });
  });
});

describe('settings', () => {
  const base: SettingsDoc = specSettings.padrao();

  it('12. prova-alvo, trilha e banca mudam juntas (nunca mistura metade de cada lado)', () => {
    const l: SettingsDoc = { ...base, trilha: 'legista' };
    const r: SettingsDoc = { ...base, trilha: 'pericia', bancaAlvo: 'FUNDATEC', provaAlvo: { data: '2027-03-01', rotulo: 'IGP-RS', concursoId: 'c1' } };
    const m = mesclar(specSettings, base, l, r);
    expect([m.trilha, m.bancaAlvo, m.provaAlvo]).toEqual(['legista', base.bancaAlvo, base.provaAlvo]);
    const mr = mesclar(specSettings, base, l, r, { preferir: 'remoto' });
    expect([mr.trilha, mr.bancaAlvo, mr.provaAlvo?.rotulo]).toEqual(['pericia', 'FUNDATEC', 'IGP-RS']);
  });

  it('campos diferentes de cada lado se combinam; a data de início sozinha não conta como dado', () => {
    const m = mesclar(specSettings, base, { ...base, tema: 'escuro' }, { ...base, orcamentoMin: 360 });
    expect([m.tema, m.orcamentoMin]).toEqual(['escuro', 360]);
    expect(specSettings.temDados({ ...base, dataInicio: '2020-01-01' })).toBe(false);
    expect(specSettings.temDados({ ...base, tema: 'escuro' })).toBe(true);
  });
});

describe('treino', () => {
  const b: TreinoDoc = specTreino.padrao();

  it('13. histórico por questão: maior n; flashcard: revisão mais recente', () => {
    const l: TreinoDoc = {
      ...b,
      questoes: { q1: { n: 3, acertos: 2, ultima: '2026-11-21', ultimaCerta: true } },
      cartoes: { f1: { caixa: 2, proxima: '2026-11-24', introduzidoEm: '2026-11-20', ultimaRevisao: '2026-11-21', acertos: 1, erros: 0 } },
    };
    const r: TreinoDoc = {
      ...b,
      questoes: { q1: { n: 5, acertos: 3, ultima: '2026-11-20', ultimaCerta: false } },
      cartoes: { f1: { caixa: 1, proxima: '2026-11-23', introduzidoEm: '2026-11-20', ultimaRevisao: '2026-11-22', acertos: 0, erros: 1 } },
    };
    const m = mesclar(specTreino, b, l, r);
    expect(m.questoes.q1!.n).toBe(5);
    expect(m.cartoes.f1!.ultimaRevisao).toBe('2026-11-22');
  });

  it('preferências: campo a campo', () => {
    const m = mesclar(specTreino, b, { ...b, prefs: { ...b.prefs, quantidade: 30 } }, { ...b, prefs: { ...b.prefs, modo: 'prova' } });
    expect(m.prefs).toMatchObject({ quantidade: 30, modo: 'prova' });
  });
});

describe('radar', () => {
  const b: RadarDoc = specRadar.padrao();

  it('14. status pessoal: vale o mais recente; status de concurso manual excluído some', () => {
    const l: RadarDoc = { ...b, overlay: { c1: { status: 'inscrito', notas: '', atualizadoEm: '2026-11-22T10:00:00Z' } } };
    const r: RadarDoc = { ...b, overlay: { c1: { status: 'analisando', notas: '', atualizadoEm: '2026-11-23T10:00:00Z' } } };
    expect(mesclar(specRadar, b, l, r).overlay.c1!.status).toBe('analisando');

    const comManual: RadarDoc = { ...b, manuais: [concurso('manual-x', '2026-11-20')], overlay: { 'manual-x': { status: 'radar', notas: '', atualizadoEm: '2026-11-20T00:00:00Z' } } };
    const semManual: RadarDoc = { ...comManual, manuais: [], overlay: {} };
    const r2: RadarDoc = { ...comManual, overlay: { 'manual-x': { status: 'inscrito', notas: 'x', atualizadoEm: '2026-11-25T00:00:00Z' } } };
    const m = mesclar(specRadar, comManual, semManual, r2);
    expect(m.manuais).toEqual([]);
    expect(m.overlay).toEqual({});
  });

  it('conhecidos: vale a cópia vista mais recentemente', () => {
    const l: RadarDoc = { ...b, conhecidos: { c1: concurso('c1', '2026-11-20') } };
    const r: RadarDoc = { ...b, conhecidos: { c1: concurso('c1', '2026-11-24') } };
    expect(mesclar(specRadar, null, l, r).conhecidos.c1!.lastSeenAt).toBe('2026-11-24');
  });
});

describe('campos só do aparelho', () => {
  it('15. nunca entram no documento sincronizado', () => {
    expect(specSettings.projetar({ ...specSettings.padrao(), feedUrl: 'https://x' })).not.toHaveProperty('feedUrl');
    expect(specTreino.projetar({ ...specTreino.padrao(), simuladoAtivo: { id: 's' } })).not.toHaveProperty('simuladoAtivo');
    expect(specFocus.projetar({ ...specFocus.padrao(), timer: { fase: 'foco' } })).not.toHaveProperty('timer');
    const radar = specRadar.projetar({ ...specRadar.padrao(), feed: [1], ultimaSync: 'x', sincronizando: true });
    expect(Object.keys(radar).sort()).toEqual(['conhecidos', 'manuais', 'overlay']);
  });
});

describe('modo união (primeiro login, sem base)', () => {
  it('16. nada é apagado e itens idênticos não duplicam', () => {
    const l = questoes({ sessoes: [sessao('s1'), sessao('s2')] });
    const r = questoes({ sessoes: [sessao('s2'), sessao('s3')] });
    expect(mesclar(specQuestoes, null, l, r).sessoes.map((s) => s.id)).toEqual(['s3', 's1', 's2']);
    expect(mesclar(specChecklist, null, { marcados: { a: 'd' } }, { marcados: { b: 'd' } }).marcados).toEqual({ a: 'd', b: 'd' });
  });
});

describe('migração antes do merge', () => {
  it('19. documento remoto de questões v2 é migrado para v3', () => {
    const v2 = { sessoes: [{ id: 's1', eixo: 'tronco', disciplinaId: 'basicas', temaId: 'portugues', total: 10, acertos: 6 }], erros: [], revisoes: [] };
    const m = specQuestoes.migrar(v2, 2);
    expect(m.sessoes[0]).toMatchObject({ eixo: 'basicos', disciplinaId: 'lingua-portuguesa' });
  });
});

describe('primitivos', () => {
  it('lista com inserção no fim (revisões) e registro com exclusão que perde', () => {
    const r = mesclarListaPorId([{ id: 'a' }], [{ id: 'a' }, { id: 'l' }], [{ id: 'a' }, { id: 'r' }], N, { insercao: 'fim' });
    expect(r.map((x) => x.id)).toEqual(['a', 'l', 'r']);
    expect(mesclarRegistro({ k: 1 }, {}, { k: 2 }, N, { remocao: 'perde' })).toEqual({ k: 2 });
    expect(mesclarRegistro({ k: 1 }, {}, { k: 2 }, N, { remocao: 'vence' })).toEqual({});
  });
});

// ---------- propriedades (gerador aleatório com semente fixa) ----------

function prng(semente: number) {
  let a = semente >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Rand = () => number;
const escolha = <T,>(rnd: Rand, xs: readonly T[]): T => xs[Math.floor(rnd() * xs.length)]!;

function revisaoAleatoria(rnd: Rand, id: string): ItemRevisao {
  const origem = escolha(rnd, ['teoria', 'questoes', 'erro'] as const);
  const n = Math.floor(rnd() * 3);
  return revisao(id, {
    origem,
    refId: origem === 'erro' ? escolha(rnd, ['e1', 'e2', 'e3']) : escolha(rnd, ['b1', 'b2']),
    temaId: origem === 'questoes' ? escolha(rnd, ['t1', 't2']) : null,
    status: rnd() < 0.8 ? 'ativo' : 'concluido',
    etapa: n,
    historico: Array.from({ length: n }, () => feito),
    criadoEm: `2026-11-2${Math.floor(rnd() * 9)}T00:00:00.000Z`,
  });
}

function questoesAleatorias(rnd: Rand): QuestoesDoc {
  return specQuestoes.posMerge({
    sessoes: ['s1', 's2', 's3'].filter(() => rnd() < 0.7).map((id) => sessao(id, { notas: escolha(rnd, ['', 'a', 'b']) })),
    erros: ['e1', 'e2', 'e3'].filter(() => rnd() < 0.7).map((id) => erro(id, { porqueErrei: escolha(rnd, ['', 'x']), resolvido: rnd() < 0.3 })),
    revisoes: ['r1', 'r2', 'r3', 'r4'].filter(() => rnd() < 0.7).map((id) => revisaoAleatoria(rnd, id)),
  });
}

/** Deriva um lado a partir da base: apaga, edita e cria itens (ids novos com prefixo do lado). */
function variar(rnd: Rand, b: QuestoesDoc, lado: string): QuestoesDoc {
  const mexer = <T extends { id: string }>(xs: T[], editar: (x: T) => T, criar: (id: string) => T): T[] => {
    const out = xs.filter(() => rnd() > 0.25).map((x) => (rnd() < 0.3 ? editar(x) : x));
    if (rnd() < 0.5) out.unshift(criar(`${lado}${Math.floor(rnd() * 3)}`));
    if (rnd() < 0.2) out.unshift(criar('comum')); // mesmo id nos dois lados
    return out;
  };
  return specQuestoes.posMerge({
    sessoes: mexer(b.sessoes, (s) => ({ ...s, notas: `${s.notas}${lado}` }), (id) => sessao(id)),
    erros: mexer(b.erros, (e) => (rnd() < 0.5 ? { ...e, porqueErrei: lado } : { ...e, resolvido: !e.resolvido, resolvidoEm: e.resolvido ? null : '2026-11-25' }), (id) => erro(id)),
    revisoes: mexer(b.revisoes, (r) => ({ ...r, historico: [...r.historico, feito], etapa: r.etapa + 1 }), (id) => revisaoAleatoria(rnd, id)),
  });
}

describe('propriedades do merge (questões, 300 casos aleatórios)', () => {
  const rnd = prng(20261125);
  const casos = Array.from({ length: 300 }, () => {
    const b = questoesAleatorias(rnd);
    return { b, l: variar(rnd, b, 'L'), r: variar(rnd, b, 'R') };
  });

  it('17. identidade: merge(B,B,B)=B · merge(B,L,B)=L · merge(B,B,R)=R', () => {
    for (const { b, l, r } of casos) {
      expect(iguais(mesclar(specQuestoes, b, b, b), b)).toBe(true);
      expect(iguais(mesclar(specQuestoes, b, l, b), l)).toBe(true);
      expect(iguais(mesclar(specQuestoes, b, b, r), r)).toBe(true);
    }
  });

  it('18. idempotência: reaplicar o merge depois de uma queda não muda o resultado', () => {
    for (const { b, l, r } of casos) {
      const m = mesclar(specQuestoes, b, l, r);
      expect(iguais(mesclar(specQuestoes, b, m, r), m)).toBe(true);
      expect(iguais(mesclar(specQuestoes, null, m, r), mesclar(specQuestoes, null, m, r))).toBe(true);
    }
  });

  it('convergência: depois que um aparelho envia o resultado, o outro chega ao mesmo estado', () => {
    for (const { b, l, r } of casos) {
      // A (local=l) mescla com o servidor (r) e envia M. B, que tinha enviado r, não mudou nada → recebe M.
      const m = mesclar(specQuestoes, b, l, r);
      expect(iguais(mesclar(specQuestoes, r, r, m), m)).toBe(true);
    }
  });

  it('invariantes: nenhuma revisão de erro órfã e no máximo um ciclo ativo sem histórico por chave', () => {
    for (const { b, l, r } of casos) {
      const m = mesclar(specQuestoes, b, l, r);
      const erros = new Set(m.erros.map((e) => e.id));
      expect(m.revisoes.every((x) => x.origem !== 'erro' || erros.has(x.refId))).toBe(true);
      const chaves = m.revisoes
        .filter((x) => x.status === 'ativo' && x.historico.length === 0 && x.origem !== 'erro')
        .map((x) => (x.origem === 'teoria' ? `t:${x.refId}` : `q:${x.temaId}`))
        .filter((k) => k !== 'q:null');
      const comHistorico = new Set(
        m.revisoes.filter((x) => x.status === 'ativo' && x.historico.length > 0).map((x) => (x.origem === 'teoria' ? `t:${x.refId}` : `q:${x.temaId}`)),
      );
      expect(new Set(chaves).size).toBe(chaves.length);
      expect(chaves.every((k) => !comHistorico.has(k))).toBe(true);
    }
  });
});

describe('leis de identidade nas demais stores', () => {
  const docs = {
    cronograma: { concluidos: { a: { data: 'd', plantao: false } }, notas: { a: 'n' }, diasAtivos: ['d'] },
    checklist: { marcados: { a: 'd' } },
    treino: specTreino.padrao(),
    radar: specRadar.padrao(),
    focus: { ...specFocus.padrao(), sessoes: [{ id: 'f1', data: 'd', inicio: 'i', minutos: 50, eixo: null, disciplinaId: null, rotulo: 'Foco' } satisfies SessaoFoco] },
    settings: specSettings.padrao(),
  };
  it.each([
    ['cronograma', specCronograma],
    ['checklist', specChecklist],
    ['treino', specTreino],
    ['radar', specRadar],
    ['focus', specFocus],
    ['settings', specSettings],
  ] as const)('%s: merge(B,B,B) = B e merge(B,L,B) = L', (nome, spec) => {
    const b = docs[nome] as never;
    const l = spec.padrao() as never;
    expect(iguais(mesclar(spec as never, b, b, b), b)).toBe(true);
    expect(iguais(mesclar(spec as never, b, l, b), spec.posMerge(l))).toBe(true);
    expect(iguais(mesclar(spec as never, b, b, l), spec.posMerge(l))).toBe(true);
  });
});
