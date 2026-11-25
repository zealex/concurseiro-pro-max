import type { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Callout } from '@/components/ui/Controls';
import { H1, Muted } from '@/components/ui/primitives';

/** Moldura das telas de conta: marca, título, descrição e um cartão centralizado. */
export function TelaAuth({ titulo, subtitulo, children, rodape }: { titulo: string; subtitulo?: string; children: ReactNode; rodape?: ReactNode }) {
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView className="flex-1 bg-page dark:bg-page-dark" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 20, paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full max-w-[400px] self-center">
          <View className="mb-6 flex-row items-center">
            <View className="h-9 w-9 items-center justify-center rounded-lg bg-accent">
              <Text className="text-[17px] font-bold text-white">C</Text>
            </View>
            <Text className="ml-2 text-[15px] font-semibold text-ink dark:text-ink-dark">Concurseiro Pro Max</Text>
          </View>
          <H1>{titulo}</H1>
          {subtitulo ? <Muted className="mt-1 text-[14px] leading-5">{subtitulo}</Muted> : null}
          <View className="mt-5">{children}</View>
          {rodape ? <View className="mt-6">{rodape}</View> : null}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

/** Mensagem de erro/aviso/sucesso padronizada. */
export function Aviso({ tom, children }: { tom: 'erro' | 'info' | 'ok'; children: ReactNode }) {
  const mapa = { erro: { emoji: '⚠️', tom: 'vermelho' }, info: { emoji: '✉️', tom: 'azul' }, ok: { emoji: '✅', tom: 'verde' } } as const;
  return (
    <Callout emoji={mapa[tom].emoji} tom={mapa[tom].tom}>
      {children}
    </Callout>
  );
}

/** Validação simples de e-mail (a definitiva é a do servidor). */
export function emailValido(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
