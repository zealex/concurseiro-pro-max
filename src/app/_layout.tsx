import '../../global.css';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { ActivityIndicator, Text, View, useColorScheme as useSistemaColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from '@/components/ui/Toast';
import { inicializarRadar, sincronizarRadar } from '@/services/concursosTrackerService';
import { useHidratado } from '@/store/hydration';
import { useSettingsStore } from '@/store/useSettingsStore';
import { useCores } from '@/theme/cores';

export default function RootLayout() {
  const hidratado = useHidratado();
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
    if (!hidratado) return;
    inicializarRadar();
    void sincronizarRadar();
  }, [hidratado]);

  const navTema = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

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
          {hidratado ? (
            <Slot />
          ) : (
            <View className="flex-1 items-center justify-center bg-page dark:bg-page-dark">
              <ActivityIndicator color={cores.accent} />
              <Text className="mt-3 text-[13px] text-ink-soft dark:text-ink-dark-soft">Carregando seu progresso…</Text>
            </View>
          )}
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
