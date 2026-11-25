import { Redirect, Slot } from 'expo-router';
import { useConta } from '@/services/auth/conta';

/**
 * Telas de conta (entrar, criar conta, verificar e-mail, esqueci a senha).
 * Quem já está logado vai para o app — exceto com a sessão expirada (precisa entrar de novo)
 * ou no modo sem conta (pode criar a conta a qualquer momento).
 */
export default function AuthLayout() {
  const conta = useConta((s) => s.conta);
  const expirada = useConta((s) => s.sessaoExpirada);
  if (conta?.modo === 'usuario' && !expirada) return <Redirect href="/" />;
  return <Slot />;
}
