import { describe, expect, it } from 'vitest';
import type { StoreSync } from '../contrato';
import { iguais } from '../merge/iguais';
import type { Doc, SpecStore } from '../merge/tipos';
import { criarMotor, type ApiSync, type DocRemoto, type EstadoSyncStore, type MotorSync, type StatusSync, type Temporizador, type Vinculo } from '../motor';
import { SPECS } from '../specs';

/** Só duas stores nos testes: suficiente para exercitar registro e lista por id. */
const STORES = ['checklist', 'questoes'] as const satisfies readonly StoreSync[];
type S = (typeof STORES)[number];

const erro = (name: string, msg = name) => Object.assign(new Error(msg), { name });

/** Servidor falso com a mesma semântica da API: compare-and-swap no rev, "sem doc aceita qualquer base". */
function servidorFake() {
  const docs = new Map<string, { rev: number; schemaVersion: number; data: Doc }>();
  const ctl = { offline: false, sessaoInvalida: false, puts: 0 };
  const api = (): ApiSync => ({
    async puxar(revs) {
      if (ctl.offline) throw erro('ErroRede', 'Sem conexão');
      if (ctl.sessaoInvalida) throw erro('ErroSessao');
      const out: DocRemoto[] = [];
      for (const [store, d] of docs) {
        if (revs[store as S] !== d.rev) out.push({ store: store as S, rev: d.rev, schemaVersion: d.schemaVersion, data: structuredClone(d.data), atualizadoEm: '' });
      }
      return { docs: out, revs: Object.fromEntries([...docs].map(([k, v]) => [k, v.rev])) };
    },
    async gravar(store, corpo) {
      if (ctl.offline) throw erro('ErroRede', 'Sem conexão');
      if (ctl.sessaoInvalida) throw erro('ErroSessao');
      ctl.puts++;
      const atual = docs.get(store);
      if (atual && atual.schemaVersion > corpo.schemaVersion) return { ok: false, codigo: 'versao-antiga', schemaVersion: atual.schemaVersion };
      if (atual && atual.rev !== corpo.baseRev) return { ok: false, codigo: 'conflito', doc: { store, rev: atual.rev, schemaVersion: atual.schemaVersion, data: structuredClone(atual.data), atualizadoEm: '' } };
      const rev = (atual?.rev ?? 0) + 1;
      docs.set(store, { rev, schemaVersion: corpo.schemaVersion, data: structuredClone(corpo.data) });
      return { ok: true, rev };
    },
  });
  return { docs, ctl, api };
}

/** Uma "store" em memória com o mesmo contrato do vínculo real. */
function lojaFake(spec: SpecStore, inicial?: Doc) {
  let estado: Doc = structuredClone(inicial ?? spec.padrao());
  const ouvintes = new Set<() => void>();
  const vinculo: Vinculo = {
    ler: () => spec.projetar(estado),
    aplicar: (d) => {
      estado = { ...estado, ...structuredClone(d) };
      ouvintes.forEach((f) => f());
    },
    assinar: (cb) => {
      ouvintes.add(cb);
      return () => ouvintes.delete(cb);
    },
  };
  return {
    vinculo,
    get: () => estado,
    /** Ação do usuário. */
    mudar: (f: (d: Doc) => Doc) => {
      estado = f(structuredClone(estado));
      ouvintes.forEach((cb) => cb());
    },
  };
}

function temporizadorFake(): Temporizador & { pendentes: Map<number, { fn: () => void; ms: number }> } {
  let id = 0;
  const pendentes = new Map<number, { fn: () => void; ms: number }>();
  return {
    pendentes,
    agora: () => Date.parse('2026-11-25T12:00:00Z'),
    agendar: (fn, ms) => {
      pendentes.set(++id, { fn, ms });
      return id;
    },
    cancelar: (i) => void pendentes.delete(i as number),
  };
}

/** Um aparelho: lojas, estado de sync salvo e um motor. */
function aparelho(api: ApiSync, nome: string, iniciais: Partial<Record<S, Doc>> = {}) {
  const lojas = { checklist: lojaFake(SPECS.checklist, iniciais.checklist), questoes: lojaFake(SPECS.questoes, iniciais.questoes) };
  const salvo = new Map<StoreSync, EstadoSyncStore>();
  const t = temporizadorFake();
  const status: StatusSync[] = [];
  let expirou = false;
  let falharGravacaoDeEstado = 0;
  const criar = (): MotorSync =>
    criarMotor({
      api,
      specs: SPECS,
      vinculos: { ...Object.fromEntries(Object.entries(lojas).map(([k, v]) => [k, v.vinculo])) } as never,
      estado: {
        ler: async (s) => structuredClone(salvo.get(s) ?? null),
        gravar: async (s, e) => {
          if (falharGravacaoDeEstado > 0) {
            falharGravacaoDeEstado--;
            throw new Error('queda simulada');
          }
          salvo.set(s, structuredClone(e));
        },
      },
      aguardarEscritas: async () => undefined,
      deviceId: nome,
      temporizador: t,
      aoMudarStatus: (s) => status.push(s),
      aoSessaoExpirada: () => {
        expirou = true;
      },
      stores: STORES,
    });
  return {
    lojas,
    salvo,
    t,
    status,
    criar,
    expirou: () => expirou,
    falharProximaGravacaoDeEstado: () => {
      falharGravacaoDeEstado = 1;
    },
  };
}

const marcar = (id: string) => (d: Doc) => ({ ...d, marcados: { ...(d.marcados as Record<string, string>), [id]: '2026-11-25' } });
const desmarcar = (id: string) => (d: Doc) => {
  const m = { ...(d.marcados as Record<string, string>) };
  delete m[id];
  return { ...d, marcados: m };
};
const sessao = (id: string) => ({ id, data: '2026-11-25', tipo: 'bateria', eixo: 'basicos', disciplinaId: 'x', temaId: null, banca: null, total: 10, acertos: 5, duracaoMin: null, notas: '', criadoEm: id });
const addSessao = (id: string) => (d: Doc) => ({ ...d, sessoes: [sessao(id), ...(d.sessoes as unknown[])] });

describe('motor de sincronização', () => {
  it('primeiro uso com servidor vazio: cria os documentos e fica sincronizado', async () => {
    const srv = servidorFake();
    const a = aparelho(srv.api(), 'A', { checklist: { marcados: { x: 'd' } } });
    const m = a.criar();
    await m.iniciar();
    expect(srv.docs.get('checklist')?.data).toEqual({ marcados: { x: 'd' } });
    expect(srv.docs.get('questoes')?.rev).toBe(1);
    expect(m.status().fase).toBe('sincronizado');
    expect(a.salvo.get('checklist')?.rev).toBe(1);
  });

  it('mudança local agenda envio com debounce e sobe ao disparar', async () => {
    const srv = servidorFake();
    const a = aparelho(srv.api(), 'A');
    const m = a.criar();
    await m.iniciar();
    a.lojas.checklist.mudar(marcar('nr1'));
    expect(m.status().fase).toBe('pendente');
    expect([...a.t.pendentes.values()].some((p) => p.ms <= 2_500)).toBe(true);
    await m.enviarAgora();
    expect(srv.docs.get('checklist')?.data).toEqual({ marcados: { nr1: '2026-11-25' } });
    expect(m.status().fase).toBe('sincronizado');
  });

  it('aparelho novo (vazio) recebe os dados da nuvem sem sobrescrevê-los com o padrão', async () => {
    const srv = servidorFake();
    const a = aparelho(srv.api(), 'A', { checklist: { marcados: { x: 'd' } }, questoes: { sessoes: [sessao('s1')], erros: [], revisoes: [] } });
    await a.criar().iniciar();
    const putsAntes = srv.ctl.puts;
    const b = aparelho(srv.api(), 'B');
    await b.criar().iniciar();
    expect(b.lojas.checklist.get().marcados).toEqual({ x: 'd' });
    expect((b.lojas.questoes.get().sessoes as { id: string }[]).map((s) => s.id)).toEqual(['s1']);
    expect(srv.ctl.puts).toBe(putsAntes);
  });

  it('primeiro login com progresso dos dois lados: une tudo, sem apagar nada', async () => {
    const srv = servidorFake();
    const a = aparelho(srv.api(), 'A', { checklist: { marcados: { nuvem: 'd' } }, questoes: { sessoes: [sessao('s-nuvem')], erros: [], revisoes: [] } });
    await a.criar().iniciar();
    const b = aparelho(srv.api(), 'B', { checklist: { marcados: { local: 'd' } }, questoes: { sessoes: [sessao('s-local')], erros: [], revisoes: [] } });
    await b.criar().iniciar();
    expect(Object.keys(b.lojas.checklist.get().marcados as object).sort()).toEqual(['local', 'nuvem']);
    expect((srv.docs.get('questoes')!.data.sessoes as { id: string }[]).map((s) => s.id).sort()).toEqual(['s-local', 's-nuvem']);
  });

  it.each(['A depois B', 'B depois A'])('dois aparelhos editando offline convergem (%s)', async (ordem) => {
    const srv = servidorFake();
    const A = aparelho(srv.api(), 'A', { checklist: { marcados: { comum: 'd', tira: 'd' } } });
    const mA = A.criar();
    await mA.iniciar();
    const B = aparelho(srv.api(), 'B');
    const mB = B.criar();
    await mB.iniciar();

    srv.ctl.offline = true;
    A.lojas.checklist.mudar(marcar('deA'));
    A.lojas.checklist.mudar(desmarcar('tira'));
    A.lojas.questoes.mudar(addSessao('sA'));
    B.lojas.checklist.mudar(marcar('deB'));
    B.lojas.questoes.mudar(addSessao('sB'));
    srv.ctl.offline = false;

    const [primeiro, segundo] = ordem === 'A depois B' ? [mA, mB] : [mB, mA];
    await primeiro.sincronizarAgora();
    await segundo.sincronizarAgora();
    await primeiro.sincronizarAgora();

    const final = srv.docs.get('checklist')!.data;
    expect(Object.keys(final.marcados as object).sort()).toEqual(['comum', 'deA', 'deB']);
    expect(iguais(A.lojas.checklist.vinculo.ler(), final)).toBe(true);
    expect(iguais(B.lojas.checklist.vinculo.ler(), final)).toBe(true);
    const sessoes = (srv.docs.get('questoes')!.data.sessoes as { id: string }[]).map((s) => s.id).sort();
    expect(sessoes).toEqual(['sA', 'sB']);
    expect(iguais(A.lojas.questoes.vinculo.ler(), B.lojas.questoes.vinculo.ler())).toBe(true);
  });

  it('sem rede: fica "offline", mantém pendências e agenda nova tentativa', async () => {
    const srv = servidorFake();
    const a = aparelho(srv.api(), 'A');
    const m = a.criar();
    await m.iniciar();
    srv.ctl.offline = true;
    a.lojas.checklist.mudar(marcar('x'));
    await m.enviarAgora();
    expect(m.status().fase).toBe('offline');
    expect(m.status().pendentes).toContain('checklist');
    expect([...a.t.pendentes.values()].some((p) => p.ms === 2_000)).toBe(true);
    srv.ctl.offline = false;
    await m.sincronizarAgora();
    expect(srv.docs.get('checklist')?.data).toEqual({ marcados: { x: '2026-11-25' } });
  });

  it('sessão recusada (401): pausa, avisa e não apaga nada', async () => {
    const srv = servidorFake();
    const a = aparelho(srv.api(), 'A', { checklist: { marcados: { x: 'd' } } });
    const m = a.criar();
    await m.iniciar();
    srv.ctl.sessaoInvalida = true;
    a.lojas.checklist.mudar(marcar('y'));
    await m.enviarAgora();
    expect(m.status().fase).toBe('sessao-expirada');
    expect(a.expirou()).toBe(true);
    expect(Object.keys(a.lojas.checklist.get().marcados as object).sort()).toEqual(['x', 'y']);
  });

  it('servidor com formato mais novo: a store fica bloqueada e nada é enviado para ela', async () => {
    const srv = servidorFake();
    srv.docs.set('checklist', { rev: 5, schemaVersion: 99, data: { marcados: { futuro: 'd' } } });
    const a = aparelho(srv.api(), 'A', { checklist: { marcados: { x: 'd' } } });
    const m = a.criar();
    await m.iniciar();
    expect(m.status().fase).toBe('app-desatualizado');
    expect(srv.docs.get('checklist')).toEqual({ rev: 5, schemaVersion: 99, data: { marcados: { futuro: 'd' } } });
    expect(srv.docs.get('questoes')?.rev).toBe(1);
  });

  it('queda entre aplicar e salvar o estado: ao reabrir, converge sem duplicar', async () => {
    const srv = servidorFake();
    const nuvem = aparelho(srv.api(), 'N', { questoes: { sessoes: [sessao('s1'), sessao('s2')], erros: [], revisoes: [] } });
    await nuvem.criar().iniciar();

    const a = aparelho(srv.api(), 'A', { questoes: { sessoes: [sessao('s3')], erros: [], revisoes: [] } });
    a.falharProximaGravacaoDeEstado();
    await a.criar().iniciar(); // falha no meio (estado de sync não salvo)
    await a.criar().iniciar(); // "reabriu o app"
    const ids = (a.lojas.questoes.get().sessoes as { id: string }[]).map((s) => s.id).sort();
    expect(ids).toEqual(['s1', 's2', 's3']);
    expect((srv.docs.get('questoes')!.data.sessoes as { id: string }[]).map((s) => s.id).sort()).toEqual(['s1', 's2', 's3']);
  });

  it('parar com flush envia o pendente; offline devolve a lista do que ficou', async () => {
    const srv = servidorFake();
    const a = aparelho(srv.api(), 'A');
    const m = a.criar();
    await m.iniciar();
    a.lojas.checklist.mudar(marcar('antes-de-sair'));
    expect((await m.parar({ flush: true })).pendentes).toEqual([]);
    expect(srv.docs.get('checklist')?.data).toEqual({ marcados: { 'antes-de-sair': '2026-11-25' } });

    const b = aparelho(srv.api(), 'B');
    const mb = b.criar();
    await mb.iniciar();
    srv.ctl.offline = true;
    b.lojas.checklist.mudar(marcar('offline'));
    expect((await mb.parar({ flush: true })).pendentes).toEqual(['checklist']);
  });
});
