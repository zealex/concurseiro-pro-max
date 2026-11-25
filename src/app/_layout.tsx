import '../../global.css';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { ActivityIndicator, Text, View, useColorScheme as useSistemaColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@/components/ui/Button';
import { ToastProvider } from '@/components/ui/Toast';
import { validarSessaoEmSegundoPlano } from '@/services/auth/acoes';
import { inicializarRadar, sincronizarRadar } from '@/services/concursosTrackerService';
import { iniciarArmazenamento, tentarAbrirDeNovo, useEstadoArmazenamento, usarEstaAba } from '@/store/hydration';
import { useSettingsStore } from '@/store/useSettingsStore';
import { useCores } from '@/theme/cores';

function TelaCentral({ children }: { children: React.ReactNode }) {
  return <View className="flex-1 items-center justify-center bg-page px-6 dark:bg-page-dark">{children}</View>;
}

export default function RootLayout() {
  const { fase, mensagem, abaAtiva } = useEstadoArmazenamento();
  const tema = useSettingsStore((s) => s.tema);
  const sistema = useSistemaColorScheme();
  const { colorScheme, setColorScheme } = useColorScheme();
  const cores = useCores();

  // Esquema sempre explícito: garante que classes `dark:` (CSS) e cores de ícones (JS) concordem.
  const efetivo = tema === 'sistema' ? (sistema === 'dark' ? 'dark' : 'light') : tema === 'escuro' ? 'dark' : 'light';
  useEffect(() => {
    setColorScheme(efetivo);
  }, [efetivo, setColorScheme]);

  useEffect(() => {
    void iniciarArmazenamento();
  }, []);

  useEffect(() => {
    if (fase !== 'pronto') return;
    inicializarRadar();
    void sincronizarRadar();
    void validarSessaoEmSegundoPlano();
  }, [fase]);

  const navTema = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  let conteudo: React.ReactNode;
  if (fase === 'carregando') {
    conteudo = (
      <TelaCentral>
        <ActivityIndicator color={cores.accent} />
        <Text className="mt-3 text-[13px] text-ink-soft dark:text-ink-dark-soft">Carregando seu progresso…</Text>
      </TelaCentral>
    );
  } else if (fase === 'erro') {
    conteudo = (
      <TelaCentral>
        <Text className="text-center text-[17px] font-semibold text-ink dark:text-ink-dark">Não consegui ler seu progresso neste aparelho</Text>
        <Text className="mt-2 max-w-[420px] text-center text-[13px] leading-5 text-ink-soft dark:text-ink-dark-soft">
          Para não apagar nada, o app não vai gravar enquanto a leitura não funcionar. Feche outras abas ou apps que possam estar usando o
          armazenamento e tente de novo.
        </Text>
        {mensagem ? <Text className="mt-2 max-w-[420px] text-center text-[11px] text-ink-faint dark:text-ink-dark-soft">{mensagem}</Text> : null}
        <Button className="mt-4 px-4 py-2" variante="primario" titulo="Tentar de novo" onPress={() => void tentarAbrirDeNovo()} />
      </TelaCentral>
    );
  } else {
    conteudo = (
      <View className="flex-1">
        <Slot />
        {!abaAtiva ? (
          <View className="absolute inset-0 items-center justify-center bg-page/95 px-6 dark:bg-page-dark/95">
            <Text className="text-center text-[17px] font-semibold text-ink dark:text-ink-dark">O Concurseiro está aberto em outra aba</Text>
            <Text className="mt-2 max-w-[420px] text-center text-[13px] leading-5 text-ink-soft dark:text-ink-dark-soft">
              Para seu progresso não ser gravado duas vezes, só uma aba fica ativa por vez.
            </Text>
            <Button className="mt-4 px-4 py-2" variante="primario" titulo="Usar aqui" onPress={() => void usarEstaAba()} />
          </View>
        ) : null}
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider
        value={{
          ...navTema,
          colors: { ...navTema.colors, background: cores.fundo, card: cores.fundo, border: cores.borda, primary: cores.accent, text: cores.texto },
        }}
      >
        <ToastProvider>
          <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
          {conteudo}
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
