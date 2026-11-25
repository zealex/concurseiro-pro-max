import { WEB_URL } from '@/config';
import { chamarApi, ErroSessao } from '@/services/api/http';
import { abrirArmazenamentoDaConta, fecharArmazenamento, useEstadoArmazenamento } from '@/store/hydration';
import type { StoreSync } from '@/sync/contrato';
import { desligarSync } from '@/sync/controle';
import { authClient, PLATAFORMA_NATIVA } from './cliente';
import { adotarDadosDoAparelho, salvarConta, useConta, type Conta, type ContaUsuario } from './conta';

/** Fluxos de conta usados pelas telas (entrar, criar conta, Google, senha, sair, modo sem conta). */

export type Resultado = { ok: true } | { ok: false; codigo: string; mensagem: string };

interface ErroAuth {
  status?: number;
  code?: string;
  message?: string;
}

const MENSAGENS: Record<string, string> = {
  EMAIL_NOT_VERIFIED: 'Confirme seu e-mail antes de entrar. Procure o link na sua caixa de entrada (e no spam).',
  INVALID_EMAIL_OR_PASSWORD: 'E-mail ou senha incorretos.',
  INVALID_PASSWORD: 'Senha incorreta.',
  INVALID_EMAIL: 'Este e-mail não parece válido.',
  PASSWORD_TOO_SHORT: 'A senha precisa ter pelo menos 8 caracteres.',
  PASSWORD_TOO_LONG: 'A senha pode ter no máximo 128 caracteres.',
  USER_ALREADY_EXISTS: 'Já existe uma conta com este e-mail. Entre ou use "Esqueci minha senha".',
  INVALID_TOKEN: 'Este link é inválido ou expirou. Peça um novo.',
  ACCOUNT_NOT_LINKED: 'Já existe uma conta com este e-mail. Entre com e-mail e senha (confirme o e-mail antes, se ainda não confirmou).',
};

export function traduzirErro(e: ErroAuth | null | undefined): { codigo: string; mensagem: string } {
  const codigo = e?.code ?? (e?.status ? `HTTP_${e.status}` : 'DESCONHECIDO');
  if (e?.code && MENSAGENS[e.code]) return { codigo, mensagem: MENSAGENS[e.code]! };
  if (e?.status === 429) return { codigo, mensagem: 'Muitas tentativas. Espere um minuto e tente de novo.' };
  if (!e?.status || e.status >= 500) return { codigo, mensagem: 'Sem conexão com o servidor. Verifique a internet e tente de novo.' };
  return { codigo, mensagem: e.message || 'Não foi possível concluir. Tente de novo.' };
}

const falha = (e: ErroAuth | null | undefined): Resultado => ({ ok: false, ...traduzirErro(e) });

const normalizarEmail = (email: string) => email.trim().toLowerCase();

/**
 * Com a sessão já criada no servidor: monta o retrato da conta e abre o progresso dela.
 * Se já havia outra conta (ou o modo sem conta) aberta, fecha antes; o progresso que estava no
 * aparelho sem dono é adotado pela conta se ela ainda não tem nada aqui.
 */
async function concluirLogin(): Promise<Resultado> {
  const s = await authClient.getSession();
  const u = s.data?.user;
  if (!u) return falha(s.error ?? { message: 'Não foi possível confirmar o login.' });
  const contas = await authClient.listAccounts().catch(() => null);
  const conta: ContaUsuario = {
    modo: 'usuario',
    userId: u.id,
    email: u.email,
    nome: u.name ?? '',
    provedores: (contas?.data ?? []).map((a: { providerId: string }) => a.providerId),
    atualizadoEm: new Date().toISOString(),
  };
  const atual = useConta.getState().conta;
  const mesmaConta = atual?.modo === 'usuario' && atual.userId === conta.userId;
  if (mesmaConta && useEstadoArmazenamento.getState().fase === 'pronto') {
    // Reautenticação (sessão tinha expirado): o progresso já está aberto.
    await salvarConta(conta);
    useConta.setState({ sessaoExpirada: false });
    return { ok: true };
  }
  if (atual) await fecharArmazenamento();
  await adotarDadosDoAparelho(conta);
  await salvarConta(conta);
  await abrirArmazenamentoDaConta(conta);
  return { ok: true };
}

export async function entrarComEmail(email: string, senha: string): Promise<Resultado> {
  const r = await authClient.signIn.email({ email: normalizarEmail(email), password: senha });
  if (r.error) return falha(r.error);
  return concluirLogin();
}

export async function criarConta(nome: string, email: string, senha: string): Promise<Resultado> {
  const r = await authClient.signUp.email({
    name: nome.trim(),
    email: normalizarEmail(email),
    password: senha,
    callbackURL: `${WEB_URL}/entrar?verificado=1`,
  });
  return r.error ? falha(r.error) : { ok: true };
}

export async function reenviarVerificacao(email: string): Promise<Resultado> {
  const r = await authClient.sendVerificationEmail({ email: normalizarEmail(email), callbackURL: `${WEB_URL}/entrar?verificado=1` });
  return r.error ? falha(r.error) : { ok: true };
}

/**
 * Login com Google. Na web a página inteira vai ao Google e volta para /entrar (que retoma a sessão);
 * no app nativo abre o navegador do sistema e volta pelo deep link.
 */
export async function entrarComGoogle(): Promise<Resultado> {
  if (!PLATAFORMA_NATIVA) {
    const r = await authClient.signIn.social({
      provider: 'google',
      callbackURL: `${WEB_URL}/entrar?retorno=google`,
      errorCallbackURL: `${WEB_URL}/entrar?erro=google`,
    });
    return r.error ? falha(r.error) : { ok: true };
  }
  const r = await authClient.signIn.social({ provider: 'google', callbackURL: '/entrar' });
  if (r.error) return falha(r.error);
  return concluirLogin();
}

/** Web: se o navegador já tem sessão (voltou do Google ou do link de confirmação), entra direto. */
export async function tentarRetomarSessao(): Promise<boolean> {
  const s = await authClient.getSession().catch(() => null);
  if (!s?.data?.user) return false;
  return (await concluirLogin()).ok;
}

export async function esqueciSenha(email: string): Promise<Resultado> {
  const r = await authClient.requestPasswordReset({ email: normalizarEmail(email), redirectTo: `${WEB_URL}/redefinir-senha` });
  return r.error ? falha(r.error) : { ok: true };
}

export async function redefinirSenha(token: string, novaSenha: string): Promise<Resultado> {
  const r = await authClient.resetPassword({ newPassword: novaSenha, token });
  return r.error ? falha(r.error) : { ok: true };
}

/** iOS: usar o app sem conta, com o progresso só neste aparelho (dá para criar a conta depois). */
export async function usarSemConta(): Promise<void> {
  const conta: Conta = { modo: 'local', atualizadoEm: new Date().toISOString() };
  await adotarDadosDoAparelho(conta);
  await salvarConta(conta);
  await abrirArmazenamentoDaConta(conta);
}

/**
 * Sair. Antes, envia o que estiver pendente. Se tudo chegou à nuvem, os dados da conta saem deste
 * aparelho (voltam ao entrar de novo); se algo ficou pendente (sem internet), continuam guardados
 * aqui, separados de outras contas, e sobem no próximo login.
 */
export async function sair(): Promise<{ pendentes: StoreSync[] }> {
  const conta = useConta.getState().conta;
  const { pendentes } = conta?.modo === 'usuario' ? await desligarSync({ flush: true }) : { pendentes: [] as StoreSync[] };
  if (conta?.modo === 'usuario') await authClient.signOut().catch(() => undefined);
  await fecharArmazenamento({ apagar: conta?.modo === 'usuario' && pendentes.length === 0 });
  await salvarConta(null);
  return { pendentes };
}

/**
 * Exclui a conta: no servidor (conta, sessões e todo o progresso na nuvem) e neste aparelho.
 * Conta com senha confirma pela senha; conta só Google/Apple precisa de login recente (24 h).
 */
export async function excluirConta(senha?: string): Promise<Resultado> {
  const r = await authClient.deleteUser(senha ? { password: senha } : {});
  if (r.error) {
    const e = r.error as ErroAuth;
    if (e.code === 'SESSION_EXPIRED' || e.code === 'SESSION_NOT_FRESH' || /fresh/i.test(e.message ?? '')) {
      return { ok: false, codigo: 'LOGIN_RECENTE', mensagem: 'Por segurança, saia e entre de novo antes de excluir a conta.' };
    }
    return falha(e);
  }
  await desligarSync({ flush: false });
  await fecharArmazenamento({ apagar: true });
  await salvarConta(null);
  return { ok: true };
}

/** Contas criadas só com Google/Apple: define uma senha para entrar também com e-mail. */
export async function definirSenha(novaSenha: string): Promise<Resultado> {
  try {
    await chamarApi('/api/conta/definir-senha', { corpo: { novaSenha } });
  } catch (e) {
    const corpo = (e as { corpo?: { mensagem?: string } }).corpo;
    return { ok: false, codigo: 'DEFINIR_SENHA', mensagem: corpo?.mensagem ?? 'Não foi possível definir a senha. Tente de novo.' };
  }
  const conta = useConta.getState().conta;
  if (conta?.modo === 'usuario' && !conta.provedores.includes('credential')) await salvarConta({ ...conta, provedores: [...conta.provedores, 'credential'] });
  return { ok: true };
}

/** Confere a sessão no servidor sem bloquear o app. Sem internet, não muda nada. */
export async function validarSessaoEmSegundoPlano(): Promise<void> {
  const conta = useConta.getState().conta;
  if (conta?.modo !== 'usuario') return;
  try {
    const s = await chamarApi<{ user?: { id: string } } | null>('/api/auth/get-session');
    useConta.setState({ sessaoExpirada: !s?.user || s.user.id !== conta.userId });
  } catch (e) {
    if (e instanceof ErroSessao) useConta.setState({ sessaoExpirada: true });
  }
}
