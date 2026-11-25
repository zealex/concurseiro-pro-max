import { Link } from 'expo-router';
import type { ReactNode } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { H1, H2, Muted } from '@/components/ui/primitives';
import { ATUALIZADO_EM, type SecaoLegal } from '@/legal/textos';

/** Página pública de texto (privacidade, termos, exclusão de conta). */
export function TelaLegal({ titulo, secoes, children }: { titulo: string; secoes?: SecaoLegal[]; children?: ReactNode }) {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView className="flex-1 bg-page dark:bg-page-dark" contentContainerStyle={{ paddingTop: insets.top + 24, paddingBottom: insets.bottom + 48 }}>
      <View className="w-full max-w-[720px] self-center px-5">
        <Link href="/" className="mb-6 text-[14px] text-accent">
          ← Concurseiro Pro Max
        </Link>
        <H1>{titulo}</H1>
        <Muted className="mb-6 mt-1">Atualizado em {ATUALIZADO_EM}</Muted>
        {children}
        {secoes?.map((s) => (
          <View key={s.titulo} className="mb-5">
            <H2 className="mb-2">{s.titulo}</H2>
            {s.paragrafos.map((p, i) => (
              <Text key={i} className="mb-2 text-[15px] leading-6 text-ink dark:text-ink-dark">
                {p}
              </Text>
            ))}
          </View>
        ))}
        <View className="mt-6 flex-row flex-wrap gap-x-4 border-t border-line pt-4 dark:border-line-dark">
          <Link href="/privacidade" className="text-[13px] text-accent">
            Privacidade
          </Link>
          <Link href="/termos" className="text-[13px] text-accent">
            Termos de uso
          </Link>
          <Link href="/excluir-conta" className="text-[13px] text-accent">
            Excluir conta
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
