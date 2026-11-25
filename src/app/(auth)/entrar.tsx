import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Platform, Pressable, Text, View } from 'react-native';
import { Aviso, emailValido, TelaAuth } from '@/components/conta/TelaAuth';
import { Button } from '@/components/ui/Button';
import { Campo } from '@/components/ui/Controls';
import { Muted } from '@/components/ui/primitives';
import { entrarComEmail, entrarComGoogle, reenviarVerificacao, tentarRetomarSessao, usarSemConta } from '@/services/auth/acoes';
import { PLATAFORMA_NATIVA } from '@/services/auth/cliente';
import { useConta } from '@/services/auth/conta';
import { useCores } from '@/theme/cores';

type Carregando = null | 'email' | 'google' | 'retomando' | 'local';

export default function Entrar() {
  const router = useRouter();
  const cores = useCores();
  const params = useLocalSearchParams<{ verificado?: string; erro?: string; retorno?: string; email?: string }>();
  const expirada = useConta((s) => s.sessaoExpirada);
  const contaAtual = useConta((s) => s.conta);
  const [email, setEmail] = useState(typeof params.email === 'string' ? params.email : '');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState<Carregando>(PLATAFORMA_NATIVA ? null : 'retomando');
  const [erro, setErro] = useState<string | null>(params.erro ? 'Não foi possível entrar com o Google. Tente de novo.' : null);
  const [naoVerificado, setNaoVerificado] = useState(false);
  const [reenviado, setReenviado] = useState(false);
  // Tentativa de login com Google em andamento (para poder cancelar e ignorar o resultado tardio).
  const tentativaGoogle = useRef(0);

  // Web: voltando do Google ou do link de confirmação, o navegador já tem a sessão — entra direto.
  useEffect(() => {
    if (PLATAFORMA_NATIVA) return;
    let vivo = true;
    void tentarRetomarSessao().finally(() => vivo && setCarregando(null));
    return () => {
      vivo = false;
    };
  }, []);

  const entrar = async () => {
    setErro(null);
    setNaoVerificado(false);
    if (!emailValido(email)) return setErro('Digite um e-mail válido.');
    if (!senha) return setErro('Digite sua senha.');
    setCarregando('email');
    const r = await entrarComEmail(email, senha);
    setCarregando(null);
    if (!r.ok) {
      setErro(r.mensagem);
      setNaoVerificado(r.codigo === 'EMAIL_NOT_VERIFIED');
    }
  };

  const google = async () => {
    setErro(null);
    setCarregando('google');
    const minha = ++tentativaGoogle.current;
    const r = await entrarComGoogle();
    if (minha !== tentativaGoogle.current) return; // cancelada pelo usuário
    // Na web a página é redirecionada; aqui só chega em caso de erro ou no app nativo.
    setCarregando(null);
    if (!r.ok) setErro(r.mensagem);
  };

  const cancelarGoogle = () => {
    tentativaGoogle.current++;
    try {
      WebBrowser.dismissAuthSession();
    } catch {
      /* nada aberto */
    }
    setCarregando(null);
  };

  const reenviar = async () => {
    const r = await reenviarVerificacao(email);
    if (r.ok) setReenviado(true);
    else setErro(r.mensagem);
  };

  if (carregando === 'retomando') {
    return (
      <View className="flex-1 items-center justify-center bg-page dark:bg-page-dark">
        <ActivityIndicator color={cores.accent} />
      </View>
    );
  }

  const ocupado = carregando !== null;
  const ios = Platform.OS === 'ios';

  return (
    <TelaAuth
      titulo={expirada ? 'Entre de novo' : 'Entrar'}
      subtitulo={
        expirada
          ? 'Sua sessão expirou. Seu progresso continua salvo neste aparelho; entre para voltar a sincronizar.'
          : 'Seu progresso fica salvo na nuvem e aparece em todos os seus aparelhos.'
      }
      rodape={
        <View>
          <Row2>
            <Muted>Não tem conta? </Muted>
            <Link href="/criar-conta" className="text-[14px] font-medium text-accent">
              Criar conta
            </Link>
          </Row2>
          {ios && contaAtual?.modo !== 'local' ? (
            <Pressable
              className="mt-4 items-center py-2"
              disabled={ocupado}
              onPress={async () => {
                setCarregando('local');
                await usarSemConta();
              }}
            >
              <Text className="text-[14px] text-ink-soft dark:text-ink-dark-soft">Usar sem conta (só neste aparelho)</Text>
            </Pressable>
          ) : null}
          {contaAtual?.modo === 'local' ? (
            <Pressable className="mt-4 items-center py-2" onPress={() => router.replace('/')}>
              <Text className="text-[14px] text-ink-soft dark:text-ink-dark-soft">Voltar sem entrar</Text>
            </Pressable>
          ) : null}
        </View>
      }
    >
      {params.verificado ? <Aviso tom="ok">E-mail confirmado! Entre com seu e-mail e senha.</Aviso> : null}
      {erro ? (
        <Aviso tom="erro">
          <Text className="text-[14px] text-ink dark:text-ink-dark">{erro}</Text>
          {naoVerificado && !reenviado ? (
            <Pressable className="mt-2" onPress={reenviar}>
              <Text className="text-[14px] font-medium text-accent">Reenviar o e-mail de confirmação</Text>
            </Pressable>
          ) : null}
          {reenviado ? <Text className="mt-2 text-[13px] text-ink-soft dark:text-ink-dark-soft">Enviamos um novo link.</Text> : null}
        </Aviso>
      ) : null}

      <Button className="py-2.5" titulo="Entrar com Google" carregando={carregando === 'google'} disabled={ocupado} onPress={google} />
      {carregando === 'google' && PLATAFORMA_NATIVA ? (
        <Pressable className="mt-2 items-center py-1" onPress={cancelarGoogle}>
          <Text className="text-[13px] text-ink-soft dark:text-ink-dark-soft">Cancelar</Text>
        </Pressable>
      ) : null}

      <View className="my-5 flex-row items-center">
        <View className="h-px flex-1 bg-line dark:bg-line-dark" />
        <Muted className="mx-3">ou com e-mail</Muted>
        <View className="h-px flex-1 bg-line dark:bg-line-dark" />
      </View>

      <Campo rotulo="E-mail" value={email} onChangeText={setEmail} autoCapitalize="none" autoComplete="email" keyboardType="email-address" textContentType="emailAddress" inputMode="email" />
      <Campo rotulo="Senha" value={senha} onChangeText={setSenha} secureTextEntry autoComplete="current-password" textContentType="password" onSubmitEditing={entrar} returnKeyType="go" />
      <Button className="mt-1 py-2.5" variante="primario" titulo="Entrar" carregando={carregando === 'email'} disabled={ocupado} onPress={entrar} />
      <Link href={{ pathname: '/esqueci-senha', params: email ? { email } : {} }} className="mt-4 text-center text-[14px] text-accent">
        Esqueci minha senha
      </Link>
    </TelaAuth>
  );
}

function Row2({ children }: { children: React.ReactNode }) {
  return <View className="flex-row flex-wrap items-center justify-center">{children}</View>;
}
