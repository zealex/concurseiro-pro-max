import { eq } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { userStoreHistory } from '../src/db/schema';
import { HISTORICO } from '../src/sync/repo';
import { criarAmbienteTeste, type AmbienteTeste } from './ambiente';

let A: AmbienteTeste;
let ana: string;
let bia: string;

beforeAll(async () => {
  A = await criarAmbienteTeste();
  ana = await A.usuarioLogado('ana@exemplo.com');
  bia = await A.usuarioLogado('bia@exemplo.com');
});
afterAll(async () => A.fechar());

const put = (cookie: string, store: string, corpo: unknown) => A.req(`/api/sync/${store}`, { method: 'PUT', body: corpo, cookie });
const pull = (cookie: string, revs?: Record<string, number>) => A.req('/api/sync/pull', { body: revs ? { revs } : {}, cookie });

describe('autorização', () => {
  it('sem sessão → 401', async () => {
    expect((await pull('')).status).toBe(401);
    expect((await A.req('/api/sync/checklist', { method: 'PUT', body: { baseRev: 0, schemaVersion: 1, data: {} } })).status).toBe(401);
  });

  it('origem estranha em requisição que grava → 403', async () => {
    const r = await A.req('/api/sync/checklist', { method: 'PUT', body: { baseRev: 0, schemaVersion: 1, data: {} }, cookie: ana, origem: 'https://site-malicioso.example' });
    expect(r.status).toBe(403);
  });

  it('um usuário não lê os documentos de outro', async () => {
    expect((await put(ana, 'cronograma', { baseRev: 0, schemaVersion: 2, data: { notas: { x: 'segredo' } } })).status).toBe(200);
    const docsBia = (await (await pull(bia)).json()) as { docs: { store: string }[] };
    expect(docsBia.docs.find((d) => d.store === 'cronograma')).toBeUndefined();
  });
});

describe('gravação com compare-and-swap', () => {
  it('cria com baseRev 0, avança a revisão e recusa revisão velha com o documento atual', async () => {
    const r1 = await put(ana, 'checklist', { baseRev: 0, schemaVersion: 1, data: { marcados: { a: 'd' } } });
    expect(await r1.json()).toEqual({ rev: 1 });
    const r2 = await put(ana, 'checklist', { baseRev: 1, schemaVersion: 1, data: { marcados: { a: 'd', b: 'd' } } });
    expect(await r2.json()).toEqual({ rev: 2 });

    const velho = await put(ana, 'checklist', { baseRev: 1, schemaVersion: 1, data: { marcados: {} } });
    expect(velho.status).toBe(409);
    const corpo = (await velho.json()) as { codigo: string; doc: { rev: number; data: unknown } };
    expect(corpo.codigo).toBe('conflito');
    expect(corpo.doc.rev).toBe(2);
    expect(corpo.doc.data).toEqual({ marcados: { a: 'd', b: 'd' } });
  });

  it('duas gravações simultâneas com a mesma base: exatamente uma vence', async () => {
    await put(ana, 'focus', { baseRev: 0, schemaVersion: 1, data: { sessoes: [] } });
    const [x, y] = await Promise.all([
      put(ana, 'focus', { baseRev: 1, schemaVersion: 1, data: { sessoes: [{ id: 'x' }] } }),
      put(ana, 'focus', { baseRev: 1, schemaVersion: 1, data: { sessoes: [{ id: 'y' }] } }),
    ]);
    expect([x.status, y.status].sort()).toEqual([200, 409]);
  });

  it('app desatualizado (versão de formato menor) não sobrescreve → 409 versao-antiga', async () => {
    await put(ana, 'questoes', { baseRev: 0, schemaVersion: 3, data: { sessoes: [] } });
    const r = await put(ana, 'questoes', { baseRev: 1, schemaVersion: 2, data: { sessoes: [] } });
    expect(r.status).toBe(409);
    expect(await r.json()).toEqual({ codigo: 'versao-antiga', schemaVersion: 3 });
  });

  it('sem documento no servidor, aceita qualquer base (restaura em vez de apagar)', async () => {
    const r = await put(bia, 'treino', { baseRev: 7, schemaVersion: 1, data: { questoes: {} } });
    expect(await r.json()).toEqual({ rev: 1 });
  });

  it('valida store, corpo e tamanho', async () => {
    expect((await put(ana, 'inexistente', { baseRev: 0, schemaVersion: 1, data: {} })).status).toBe(400);
    expect((await put(ana, 'radar', { baseRev: -1, schemaVersion: 1, data: {} })).status).toBe(400);
    expect((await put(ana, 'radar', { baseRev: 0, schemaVersion: 1, data: [] })).status).toBe(400);
    const grande = await put(ana, 'radar', { baseRev: 0, schemaVersion: 1, data: { x: 'a'.repeat(2 * 1024 * 1024 + 10) } });
    expect(grande.status).toBe(413);
  });
});

describe('pull', () => {
  it('com revs conhecidas, devolve só o que mudou', async () => {
    const tudo = (await (await pull(ana)).json()) as { docs: { store: string }[]; revs: Record<string, number> };
    expect(tudo.docs.length).toBeGreaterThan(0);
    const nada = (await (await pull(ana, tudo.revs)).json()) as { docs: unknown[] };
    expect(nada.docs).toEqual([]);
    await put(ana, 'checklist', { baseRev: tudo.revs.checklist!, schemaVersion: 1, data: { marcados: {} } });
    const so = (await (await pull(ana, tudo.revs)).json()) as { docs: { store: string }[] };
    expect(so.docs.map((d) => d.store)).toEqual(['checklist']);
  });
});

describe('histórico', () => {
  it('guarda cópias por tempo e quando o documento encolhe, mantendo as 20 mais novas', async () => {
    const cookie = await A.usuarioLogado('hist@exemplo.com');
    let rev = 0;
    const gravar = async (data: unknown) => {
      const r = (await (await put(cookie, 'cronograma', { baseRev: rev, schemaVersion: 2, data })).json()) as { rev: number };
      rev = r.rev;
    };
    const grande = { notas: { a: 'x'.repeat(1000) } };
    await gravar(grande); // cria (sem histórico)
    await gravar(grande); // 1ª substituição → cópia (não havia nenhuma)
    await gravar(grande); // logo em seguida → sem cópia
    let versoes = (await (await A.req('/api/sync/cronograma/historico', { cookie })).json()) as { versoes: { rev: number }[] };
    expect(versoes.versoes.map((v) => v.rev)).toEqual([1]);

    await gravar({ notas: {} }); // encolheu > 50% → cópia da versão grande
    versoes = (await (await A.req('/api/sync/cronograma/historico', { cookie })).json()) as { versoes: { rev: number }[] };
    expect(versoes.versoes.map((v) => v.rev)).toEqual([3, 1]);
    const v3 = (await (await A.req('/api/sync/cronograma/historico/3', { cookie })).json()) as { data: unknown };
    expect(v3.data).toEqual(grande);

    for (let i = 0; i < 25; i++) {
      A.relogio.agora = new Date(A.relogio.agora.getTime() + HISTORICO.intervaloMs);
      await gravar({ notas: { i: String(i) } });
    }
    const linhas = await A.db.select().from(userStoreHistory).where(eq(userStoreHistory.store, 'cronograma'));
    const doUsuario = linhas.filter((l) => l.data && (l.data as { notas?: Record<string, string> }).notas !== undefined);
    expect(doUsuario.length).toBeLessThanOrEqual(HISTORICO.manter + 2); // 20 deste usuário + cópias de outros testes
    const meus = (await (await A.req('/api/sync/cronograma/historico', { cookie })).json()) as { versoes: unknown[] };
    expect(meus.versoes).toHaveLength(HISTORICO.manter);
  });
});

describe('cota por usuário', () => {
  it('recusa quando a soma dos documentos passaria de 10 MB', async () => {
    const cookie = await A.usuarioLogado('cota@exemplo.com');
    const quase2mb = { x: 'a'.repeat(1_950_000) };
    const stores = ['settings', 'cronograma', 'questoes', 'treino', 'radar'];
    for (const s of stores) expect((await put(cookie, s, { baseRev: 0, schemaVersion: 3, data: quase2mb })).status).toBe(200);
    const r = await put(cookie, 'checklist', { baseRev: 0, schemaVersion: 1, data: quase2mb });
    expect(r.status).toBe(413);
    expect(((await r.json()) as { codigo: string }).codigo).toBe('cota');
  });
});
