import { Link, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Aviso, TelaAuth } from '@/components/conta/TelaAuth';
import { Button } from '@/components/ui/Button';
import { Campo } from '@/components/ui/Controls';
import { redefinirSenha } from '@/services/auth/acoes';

/** Página aberta pelo link do e-mail de redefinição (pública: funciona logado ou não). */
export default function RedefinirSenha() {
  const { token, error } = useLocalSearchParams<{ token?: string; error?: string }>();
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');
  const [erro, setErro] = useState<string | null>(error || !token ? 'Este link é inválido ou expirou. Peça um novo em "Esqueci minha senha".' : null);
  const [feito, setFeito] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const enviar = async () => {
    setErro(null);
    if (senha.length < 8) return setErro('A senha precisa ter pelo menos 8 caracteres.');
    if (senha !== confirmacao) return setErro('As senhas não são iguais.');
    if (!token) return;
    setCarregando(true);
    const r = await redefinirSenha(token, senha);
    setCarregando(false);
    if (r.ok) setFeito(true);
    else setErro(r.mensagem);
  };

  if (feito) {
    return (
      <TelaAuth titulo="Senha alterada">
        <Aviso tom="ok">Pronto! Use a nova senha para entrar. Por segurança, os outros aparelhos precisarão entrar de novo.</Aviso>
        <Link href="/entrar" className="text-center text-[15px] font-medium text-accent">
          Entrar
        </Link>
      </TelaAuth>
    );
  }

  return (
    <TelaAuth
      titulo="Nova senha"
      rodape={
        <Link href="/esqueci-senha" className="text-center text-[14px] text-accent">
          Pedir um novo link
        </Link>
      }
    >
      {erro ? <Aviso tom="erro">{erro}</Aviso> : null}
      <Campo rotulo="Nova senha" ajuda="Pelo menos 8 caracteres." value={senha} onChangeText={setSenha} secureTextEntry autoComplete="new-password" textContentType="newPassword" />
      <Campo rotulo="Confirme a nova senha" value={confirmacao} onChangeText={setConfirmacao} secureTextEntry autoComplete="new-password" textContentType="newPassword" onSubmitEditing={enviar} />
      <Button className="mt-1 py-2.5" variante="primario" titulo="Salvar nova senha" carregando={carregando} disabled={carregando || !token} onPress={enviar} />
    </TelaAuth>
  );
}
