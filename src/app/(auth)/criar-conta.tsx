import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { Aviso, emailValido, TelaAuth } from '@/components/conta/TelaAuth';
import { Button } from '@/components/ui/Button';
import { Campo } from '@/components/ui/Controls';
import { Muted } from '@/components/ui/primitives';
import { criarConta } from '@/services/auth/acoes';

export default function CriarConta() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);

  const enviar = async () => {
    setErro(null);
    if (!nome.trim()) return setErro('Digite seu nome.');
    if (!emailValido(email)) return setErro('Digite um e-mail válido.');
    if (senha.length < 8) return setErro('A senha precisa ter pelo menos 8 caracteres.');
    if (senha !== confirmacao) return setErro('As senhas não são iguais.');
    setCarregando(true);
    const r = await criarConta(nome, email, senha);
    setCarregando(false);
    if (!r.ok) return setErro(r.mensagem);
    router.replace({ pathname: '/verificar-email', params: { email: email.trim().toLowerCase() } });
  };

  return (
    <TelaAuth
      titulo="Criar conta"
      subtitulo="Com a conta, seu progresso fica guardado na nuvem e sincroniza entre o site e o app."
      rodape={
        <View className="flex-row flex-wrap items-center justify-center">
          <Muted>Já tem conta? </Muted>
          <Link href="/entrar" className="text-[14px] font-medium text-accent">
            Entrar
          </Link>
        </View>
      }
    >
      {erro ? <Aviso tom="erro">{erro}</Aviso> : null}
      <Campo rotulo="Nome" value={nome} onChangeText={setNome} autoComplete="name" textContentType="name" />
      <Campo rotulo="E-mail" value={email} onChangeText={setEmail} autoCapitalize="none" autoComplete="email" keyboardType="email-address" textContentType="emailAddress" inputMode="email" />
      <Campo rotulo="Senha" ajuda="Pelo menos 8 caracteres." value={senha} onChangeText={setSenha} secureTextEntry autoComplete="new-password" textContentType="newPassword" />
      <Campo rotulo="Confirme a senha" value={confirmacao} onChangeText={setConfirmacao} secureTextEntry autoComplete="new-password" textContentType="newPassword" onSubmitEditing={enviar} returnKeyType="go" />
      <Button className="mt-1 py-2.5" variante="primario" titulo="Criar conta" carregando={carregando} disabled={carregando} onPress={enviar} />
      <Muted className="mt-4 text-center text-[12px] leading-4">
        Ao criar a conta você concorda com os{' '}
        <Link href="/termos" className="text-accent">
          Termos de Uso
        </Link>{' '}
        e a{' '}
        <Link href="/privacidade" className="text-accent">
          Política de Privacidade
        </Link>
        .
      </Muted>
    </TelaAuth>
  );
}
