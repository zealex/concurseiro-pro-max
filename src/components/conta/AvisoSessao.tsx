import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { useConta } from '@/services/auth/conta';

/** Faixa no topo quando o servidor recusou a sessão: nada é apagado, a sincronização só pausa. */
export function AvisoSessao() {
  const router = useRouter();
  const expirada = useConta((s) => s.sessaoExpirada);
  if (!expirada) return null;
  return (
    <View className="flex-row flex-wrap items-center justify-center gap-x-2 bg-tag-yellow px-4 py-2 dark:bg-tag-yellow-dark">
      <Text className="text-[13px] text-ink dark:text-ink-dark">Sua sessão expirou. Seu progresso continua salvo aqui; entre de novo para sincronizar.</Text>
      <Pressable onPress={() => router.push('/entrar')}>
        <Text className="text-[13px] font-semibold text-accent">Entrar</Text>
      </Pressable>
    </View>
  );
}
