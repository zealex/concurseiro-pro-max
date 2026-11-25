import { Link, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Aviso, emailValido, TelaAuth } from '@/components/conta/TelaAuth';
import { Button } from '@/components/ui/Button';
import { Campo } from '@/components/ui/Controls';
import { esqueciSenha } from '@/services/auth/acoes';

export default function EsqueciSenha() {
  const params = useLocalSearchParams<{ email?: string }>();
  const [email, setEmail] = useState(typeof params.email === 'string' ? params.email : '');
  const [erro, setErro] = useState<string | null>(null);
  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const enviar = async () => {
    setErro(null);
    if (!emailValido(email)) return setErro('Digite um e-mail válido.');
    setCarregando(true);
    const r = await esqueciSenha(email);
    setCarregando(false);
    if (r.ok) setEnviado(true);
    else setErro(r.mensagem);
  };

  return (
    <TelaAuth
      titulo="Esqueci minha senha"
      subtitulo="Enviamos um link para você escolher uma nova senha."
      rodape={
        <Link href="/entrar" className="text-center text-[14px] text-accent">
          Voltar para entrar
        </Link>
      }
    >
      {enviado ? (
        <Aviso tom="info">Se houver uma conta com este e-mail, enviamos um link para redefinir a senha. Ele vale por 1 hora (confira também o spam).</Aviso>
      ) : null}
      {erro ? <Aviso tom="erro">{erro}</Aviso> : null}
      <Campo rotulo="E-mail" value={email} onChangeText={setEmail} autoCapitalize="none" autoComplete="email" keyboardType="email-address" textContentType="emailAddress" inputMode="email" onSubmitEditing={enviar} />
      <Button className="mt-1 py-2.5" variante="primario" titulo="Enviar link" carregando={carregando} disabled={carregando} onPress={enviar} />
    </TelaAuth>
  );
}
