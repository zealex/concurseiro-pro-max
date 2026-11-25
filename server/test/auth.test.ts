import { eq } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { user, userStore } from '../src/db/schema';
import { destinoPermitido } from '../src/middleware';
import { criarAmbienteTeste, SENHA, WEB, type AmbienteTeste } from './ambiente';

let A: AmbienteTeste;

beforeAll(async () => {
  A = await criarAmbienteTeste();
});
afterAll(async () => A.fechar());

describe('cadastro e verificação de e-mail', () => {
  it('não entra antes de confirmar o e-mail; confirma pelo link e entra', async () => {
    const r = await A.cadastrar('nova@exemplo.com');
    expect(r.status).toBe(200);
    expect(A.emails.at(-1)?.assunto).toMatch(/Confirme seu e-mail/);

    const antes = await A.entrar('nova@exemplo.com');
    expect(antes.status).toBe(403);

    const v = await A.verificar('nova@exemplo.com');
    expect(v.status).toBe(302);
    expect(v.headers.get('location')).toBe(`${WEB}/entrar?verificado=1`);

    const depois = await A.entrar('nova@exemplo.com');
    expect(depois.status).toBe(200);
    const cookie = A.cookieDe(depois);
    expect((await A.req('/api/sync/pull', { body: {}, cookie })).status).toBe(200);
  });

  it('senha curta é recusada', async () => {
    expect((await A.cadastrar('curta@exemplo.com', '1234567')).status).toBe(400);
  });

  it('callbackURL de outro site é recusada no cadastro e no link do e-mail (sem redirecionamento aberto)', async () => {
    const r = await A.req('/api/auth/sign-up/email', { body: { email: 'x@exemplo.com', password: SENHA, name: 'X', callbackURL: 'https://site-malicioso.example/roubo' }, ip: A.novoIp() });
    expect(r.status).toBe(400);
    expect(A.emails.find((e) => e.para === 'x@exemplo.com')).toBeUndefined();

    await A.cadastrar('y@exemplo.com');
    const link = await A.ultimoLink('y@exemplo.com');
    link.searchParams.set('callbackURL', '//site-malicioso.example');
    const v = await A.req(`${link.pathname}${link.search}`, { origem: null });
    expect(v.status).toBe(400);
  });

  it('destinos aceitos: caminho relativo, site do app e esquema do app nativo', () => {
    const origens = [WEB];
    const esquemas = ['concurseiropromax://'];
    expect(destinoPermitido('/entrar', origens, esquemas)).toBe(true);
    expect(destinoPermitido(`${WEB}/redefinir-senha`, origens, esquemas)).toBe(true);
    expect(destinoPermitido('concurseiropromax://auth', origens, esquemas)).toBe(true);
    expect(destinoPermitido('//evil.example', origens, esquemas)).toBe(false);
    expect(destinoPermitido('/\\evil.example', origens, esquemas)).toBe(false);
    expect(destinoPermitido('https://evil.example', origens, esquemas)).toBe(false);
    expect(destinoPermitido('javascript:alert(1)', origens, esquemas)).toBe(false);
  });
});

describe('limite de tentativas', () => {
  it('a 6ª tentativa de login no mesmo minuto é bloqueada', async () => {
    await A.usuarioLogado('forca@exemplo.com');
    const ip = '10.9.9.9';
    const status: number[] = [];
    for (let i = 0; i < 6; i++) status.push((await A.entrar('forca@exemplo.com', 'senha-errada', ip)).status);
    expect(status.slice(0, 5).every((s) => s === 401)).toBe(true);
    expect(status[5]).toBe(429);
  });
});

describe('redefinição de senha', () => {
  it('link por e-mail → nova senha; a antiga deixa de valer e as sessões caem', async () => {
    const cookieAntigo = await A.usuarioLogado('esqueci@exemplo.com');
    const pedido = await A.req('/api/auth/request-password-reset', { body: { email: 'esqueci@exemplo.com', redirectTo: `${WEB}/redefinir-senha` }, ip: A.novoIp() });
    expect(pedido.status).toBe(200);
    const link = await A.ultimoLink('esqueci@exemplo.com');
    const ida = await A.req(`${link.pathname}${link.search}`, { origem: null });
    expect(ida.status).toBe(302);
    const destino = new URL(ida.headers.get('location')!);
    expect(destino.origin + destino.pathname).toBe(`${WEB}/redefinir-senha`);
    const token = destino.searchParams.get('token')!;

    const troca = await A.req('/api/auth/reset-password', { body: { newPassword: 'outra-senha-456', token }, ip: A.novoIp() });
    expect(troca.status).toBe(200);
    expect((await A.entrar('esqueci@exemplo.com')).status).toBe(401);
    expect((await A.entrar('esqueci@exemplo.com', 'outra-senha-456')).status).toBe(200);
    expect((await A.req('/api/sync/pull', { body: {}, cookie: cookieAntigo })).status).toBe(401);
  });
});

describe('conta', () => {
  it('exporta o progresso no formato de backup do app', async () => {
    const cookie = await A.usuarioLogado('exporta@exemplo.com');
    await A.req('/api/sync/checklist', { method: 'PUT', body: { baseRev: 0, schemaVersion: 1, data: { marcados: { a: 'd' } } }, cookie });
    const r = await A.req('/api/conta/exportar', { cookie });
    expect(r.status).toBe(200);
    const b = (await r.json()) as { app: string; schemaVersion: number; data: Record<string, unknown> };
    expect(b.app).toBe('concurseiro-pro-max');
    expect(b.schemaVersion).toBe(4);
    expect(b.data.checklist).toEqual({ marcados: { a: 'd' } });
  });

  it('"definir senha" é recusado para quem já tem senha', async () => {
    const cookie = await A.usuarioLogado('temsenha@exemplo.com');
    const r = await A.req('/api/conta/definir-senha', { body: { novaSenha: 'mais-uma-senha-1' }, cookie });
    expect(r.status).toBe(400);
  });

  it('excluir a conta (com a senha) apaga o usuário e todo o progresso dele', async () => {
    const cookie = await A.usuarioLogado('sai@exemplo.com');
    await A.req('/api/sync/settings', { method: 'PUT', body: { baseRev: 0, schemaVersion: 2, data: { tema: 'escuro' } }, cookie });
    const [u] = await A.db.select().from(user).where(eq(user.email, 'sai@exemplo.com'));
    expect((await A.db.select().from(userStore).where(eq(userStore.userId, u!.id))).length).toBe(1);

    const r = await A.req('/api/auth/delete-user', { body: { password: SENHA }, cookie });
    expect(r.status).toBe(200);
    expect(await A.db.select().from(user).where(eq(user.email, 'sai@exemplo.com'))).toEqual([]);
    expect(await A.db.select().from(userStore).where(eq(userStore.userId, u!.id))).toEqual([]);
    expect((await A.req('/api/sync/pull', { body: {}, cookie })).status).toBe(401);
  });
});

describe('saúde', () => {
  it('/health responde com o banco no ar', async () => {
    const r = await A.req('/health', { origem: null });
    expect(await r.json()).toEqual({ ok: true, db: true });
  });
});
