import { Redirect, Slot, Tabs } from 'expo-router';
import { View } from 'react-native';
import { AvisoSessao } from '@/components/conta/AvisoSessao';
import { NAV } from '@/components/shell/nav';
import { Sidebar } from '@/components/shell/Sidebar';
import { useDesktop } from '@/components/ui/Screen';
import { useMetricas, useHoje, useNovosNoRadar } from '@/store/selectors';
import { useConta } from '@/services/auth/conta';
import { useCores } from '@/theme/cores';
import { feedback } from '@/utils/haptics';

/**
 * Shell adaptativo:
 * - ≥ 768 px: barra lateral fixa estilo Notion + conteúdo.
 * - < 768 px: abas inferiores enxutas (Foco e Configurações ficam no cabeçalho das páginas).
 */
export default function TabsLayout() {
  const desktop = useDesktop();
  const cores = useCores();
  const novos = useNovosNoRadar();
  const hoje = useHoje();
  const { revisoesHoje } = useMetricas(hoje);
  const conta = useConta((c) => c.conta);

  // Sem ninguém logado (nem modo sem conta) neste aparelho: tela de login.
  if (!conta) return <Redirect href="/entrar" />;

  if (desktop) {
    return (
      <View className="flex-1 flex-row bg-page dark:bg-page-dark">
        <Sidebar />
        <View className="flex-1">
          <AvisoSessao />
          <Slot />
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-page dark:bg-page-dark">
      <AvisoSessao />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: cores.texto,
          tabBarInactiveTintColor: cores.fraco,
          tabBarStyle: { backgroundColor: cores.lateral, borderTopColor: cores.borda },
          tabBarLabelStyle: { fontSize: 11, fontWeight: '500' },
        }}
        screenListeners={{ tabPress: () => feedback('leve') }}
      >
        {NAV.map((item) => {
          const Icone = item.icone;
          const badge = item.rota === '/radar' && novos > 0 ? novos : item.rota === '/questoes' && revisoesHoje > 0 ? revisoesHoje : undefined;
          return (
            <Tabs.Screen
              key={item.nome}
              name={item.nome}
              options={{
                title: item.rotulo,
                href: item.aba ? undefined : null,
                tabBarIcon: ({ color, size }) => <Icone color={color} size={size - 2} strokeWidth={2} />,
                tabBarBadge: badge,
                tabBarBadgeStyle: { backgroundColor: item.rota === '/radar' ? '#EF4444' : cores.accent, fontSize: 10 },
              }}
            />
          );
        })}
      </Tabs>
    </View>
  );
}
