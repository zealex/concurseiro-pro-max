import { Hono } from 'hono';
import { z } from 'zod';
import type { VarsApi } from '../middleware';
import { ehStoreSync, STORES_SYNC } from './contrato';
import type { RepoSync } from './repo';

const CorpoPull = z.object({ revs: z.partialRecord(z.enum(STORES_SYNC), z.number().int().min(0)).optional() });

const CorpoPut = z.object({
  baseRev: z.number().int().min(0),
  schemaVersion: z.number().int().min(1).max(10_000),
  data: z.record(z.string(), z.unknown()),
  deviceId: z.string().max(64).optional(),
});

export function rotasSync(repo: RepoSync) {
  const r = new Hono<VarsApi>();

  r.post('/pull', async (c) => {
    const corpo = CorpoPull.safeParse(await c.req.json().catch(() => ({})));
    if (!corpo.success) return c.json({ codigo: 'corpo-invalido' }, 400);
    return c.json(await repo.puxar(c.get('usuario').id, corpo.data.revs ?? {}));
  });

  r.put('/:store', async (c) => {
    const store = c.req.param('store');
    if (!ehStoreSync(store)) return c.json({ codigo: 'store-invalida' }, 400);
    const corpo = CorpoPut.safeParse(await c.req.json().catch(() => null));
    if (!corpo.success) return c.json({ codigo: 'corpo-invalido' }, 400);
    const res = await repo.gravar(c.get('usuario').id, store, corpo.data);
    if (res.ok) return c.json({ rev: res.rev });
    switch (res.codigo) {
      case 'conflito':
        return c.json({ codigo: 'conflito', doc: res.doc }, 409);
      case 'versao-antiga':
        return c.json({ codigo: 'versao-antiga', schemaVersion: res.schemaVersion }, 409);
      case 'grande-demais':
      case 'cota':
        return c.json({ codigo: res.codigo, bytes: res.bytes, limite: res.limite }, 413);
    }
  });

  r.get('/:store/historico', async (c) => {
    const store = c.req.param('store');
    if (!ehStoreSync(store)) return c.json({ codigo: 'store-invalida' }, 400);
    return c.json({ versoes: await repo.historico(c.get('usuario').id, store) });
  });

  r.get('/:store/historico/:rev', async (c) => {
    const store = c.req.param('store');
    const rev = Number(c.req.param('rev'));
    if (!ehStoreSync(store) || !Number.isInteger(rev) || rev < 1) return c.json({ codigo: 'parametros-invalidos' }, 400);
    const doc = await repo.versao(c.get('usuario').id, store, rev);
    return doc ? c.json(doc) : c.json({ codigo: 'nao-encontrado' }, 404);
  });

  return r;
}
