import { Settings, Timer } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import type { ReactNode } from 'react';
import { RefreshControl, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconButton } from './Button';
import { H1, Muted, Row } from './primitives';

export const LARGURA_DESKTOP = 768;

export function useDesktop(): boolean {
  const { width } = useWindowDimensions();
  return width >= LARGURA_DESKTOP;
}

/** Página no estilo Notion: ícone grande, título, descrição e conteúdo centralizado com largura máxima. */
export function Screen({
  emoji,
  titulo,
  descricao,
  acoes,
  children,
  larga = false,
  onRefresh,
  atualizando = false,
}: {
  emoji?: string;
  titulo: string;
  descricao?: string;
  acoes?: ReactNode;
  children: ReactNode;
  larga?: boolean;
  onRefresh?: () => void;
  atualizando?: boolean;
}) {
  const insets = useSafeAreaInsets();
  const desktop = useDesktop();
  const router = useRouter();
  return (
    <ScrollView
      className="flex-1 bg-page dark:bg-page-dark"
      contentContainerStyle={{ paddingBottom: insets.bottom + 96 }}
      keyboardShouldPersistTaps="handled"
      refreshControl={onRefresh ? <RefreshControl refreshing={atualizando} onRefresh={onRefresh} /> : undefined}
    >
      <View
        className={`w-full self-center px-4 md:px-12 ${larga ? 'max-w-[1240px]' : 'max-w-page'}`}
        style={{ paddingTop: (desktop ? 40 : insets.top + 12) }}
      >
        <Row className="mb-1 items-start justify-between">
          <View className="flex-1 pr-2">
            {emoji ? <Text className="mb-2 text-[40px] md:text-[54px]">{emoji}</Text> : null}
            <H1>{titulo}</H1>
          </View>
          {!desktop ? (
            <Row>
              <IconButton icone={Timer} rotulo="Timer de foco" onPress={() => router.push('/foco')} />
              <IconButton icone={Settings} rotulo="Configurações" onPress={() => router.push('/configuracoes')} />
            </Row>
          ) : null}
        </Row>
        {descricao ? <Muted className="mb-3 text-[14px]">{descricao}</Muted> : null}
        {acoes ? <View className="mb-4 flex-row flex-wrap items-center gap-2">{acoes}</View> : <View className="mb-3" />}
        {children}
      </View>
    </ScrollView>
  );
}
