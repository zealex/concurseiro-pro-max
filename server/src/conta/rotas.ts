import { Hono } from 'hono';
import { z } from 'zod';
import type { Auth } from '../auth/auth';
import type { VarsApi } from '../middleware';
import { BACKUP_APP, BACKUP_VERSAO } from '../sync/contrato';
import type { RepoSync } from '../sync/repo';

const CorpoSenha = z.object({ novaSenha: z.string().min(8).max(128) });

export function rotasConta(auth: Auth, repo: RepoSync) {
  const r = new Hono<VarsApi>();

  /** Portabilidade (LGPD art. 18, V): todo o progresso no formato de backup do app. */
  r.get('/exportar', async (c) => {
    const { docs } = await repo.puxar(c.get('usuario').id);
    const data = Object.fromEntries(docs.map((d) => [d.store, d.data]));
    c.header('Content-Disposition', `attachment; filename="concurseiro-backup-${new Date().toISOString().slice(0, 10)}.json"`);
    return c.json({ app: BACKUP_APP, schemaVersion: BACKUP_VERSAO, exportedAt: new Date().toISOString(), data });
  });

  /** Contas criadas só com Google/Apple ganham uma senha para entrar em outros aparelhos. */
  r.post('/definir-senha', async (c) => {
    const corpo = CorpoSenha.safeParse(await c.req.json().catch(() => null));
    if (!corpo.success) return c.json({ codigo: 'senha-invalida' }, 400);
    try {
      await auth.api.setPassword({ body: { newPassword: corpo.data.novaSenha }, headers: c.req.raw.headers });
      return c.json({ ok: true });
    } catch (e) {
      const msg = (e as { body?: { message?: string } })?.body?.message ?? (e as Error).message;
      return c.json({ codigo: 'nao-foi-possivel', mensagem: msg }, 400);
    }
  });

  return r;
}
