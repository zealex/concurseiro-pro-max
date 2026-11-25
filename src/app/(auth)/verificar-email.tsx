import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Aviso, TelaAuth } from '@/components/conta/TelaAuth';
import { Button } from '@/components/ui/Button';
import { Txt } from '@/components/ui/primitives';
import { reenviarVerificacao } from '@/services/auth/acoes';

const ESPERA_S = 60;

export default function VerificarEmail() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email?: string }>();
  const [espera, setEspera] = useState(ESPERA_S);
  const [msg, setMsg] = useState<{ tom: 'ok' | 'erro'; texto: string } | null>(null);

  useEffect(() => {
    if (espera <= 0) return;
    const t = setTimeout(() => setEspera((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [espera]);

  const reenviar = async () => {
    if (!email) return;
    const r = await reenviarVerificacao(email);
    setMsg(r.ok ? { tom: 'ok', texto: 'Enviamos um novo link.' } : { tom: 'erro', texto: r.mensagem });
    setEspera(ESPERA_S);
  };

  return (
    <TelaAuth titulo="Confirme seu e-mail" subtitulo="Falta só um passo para ativar sua conta.">
      <Aviso tom="info">
        <Txt>
          Enviamos um link de confirmação para <Txt className="font-semibold">{email ?? 'o seu e-mail'}</Txt>. Abra o e-mail (confira também o spam) e
          toque em "Confirmar e-mail".
        </Txt>
      </Aviso>
      {msg ? <Aviso tom={msg.tom}>{msg.texto}</Aviso> : null}
      <Button className="py-2.5" variante="primario" titulo="Já confirmei — entrar" onPress={() => router.replace({ pathname: '/entrar', params: email ? { email } : {} })} />
      <Button
        className="mt-3 py-2.5"
        titulo={espera > 0 ? `Reenviar e-mail (${espera}s)` : 'Reenviar e-mail'}
        disabled={espera > 0 || !email}
        onPress={reenviar}
      />
    </TelaAuth>
  );
}
