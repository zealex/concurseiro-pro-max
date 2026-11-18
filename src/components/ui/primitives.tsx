import type { ReactNode } from 'react';
import { Pressable, Text, View, type PressableProps, type TextProps, type ViewProps } from 'react-native';

/* Tipografia (escala do Notion) */

export function Txt({ className = '', ...p }: TextProps & { className?: string }) {
  return <Text className={`text-[15px] leading-6 text-ink dark:text-ink-dark ${className}`} {...p} />;
}

export function Muted({ className = '', ...p }: TextProps & { className?: string }) {
  return <Text className={`text-[13px] leading-5 text-ink-soft dark:text-ink-dark-soft ${className}`} {...p} />;
}

export function H1({ className = '', ...p }: TextProps & { className?: string }) {
  return <Text accessibilityRole="header" className={`text-[28px] md:text-[34px] font-bold leading-tight text-ink dark:text-ink-dark ${className}`} {...p} />;
}

export function H2({ className = '', ...p }: TextProps & { className?: string }) {
  return <Text accessibilityRole="header" className={`text-[20px] md:text-[22px] font-semibold text-ink dark:text-ink-dark ${className}`} {...p} />;
}

export function H3({ className = '', ...p }: TextProps & { className?: string }) {
  return <Text accessibilityRole="header" className={`text-[16px] font-semibold text-ink dark:text-ink-dark ${className}`} {...p} />;
}

export function Label({ className = '', ...p }: TextProps & { className?: string }) {
  return <Text className={`text-[12px] font-medium uppercase tracking-wide text-ink-faint dark:text-ink-dark-soft ${className}`} {...p} />;
}

/* Layout */

export function Divider({ className = '' }: { className?: string }) {
  return <View className={`h-px bg-line dark:bg-line-dark ${className}`} />;
}

export function Card({ className = '', children, ...p }: ViewProps & { className?: string; children?: ReactNode }) {
  return (
    <View className={`rounded-notion border border-line bg-page p-4 dark:border-line-dark dark:bg-page-dark ${className}`} {...p}>
      {children}
    </View>
  );
}

export function Row({ className = '', children, ...p }: ViewProps & { className?: string; children?: ReactNode }) {
  return (
    <View className={`flex-row items-center ${className}`} {...p}>
      {children}
    </View>
  );
}

/** Linha clicável com hover (estilo item de lista do Notion). */
export function PressableRow({ className = '', children, ...p }: PressableProps & { className?: string; children?: ReactNode }) {
  return (
    <Pressable
      className={`flex-row items-center rounded-notion px-2 py-1.5 active:bg-hover hover:bg-hover dark:active:bg-hover-dark dark:hover:bg-hover-dark ${className}`}
      {...p}
    >
      {children}
    </Pressable>
  );
}

/** Seção com título pequeno (como os "headings" de database do Notion). */
export function Section({ titulo, acao, children, className = '' }: { titulo: string; acao?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <View className={`mb-6 ${className}`}>
      <Row className="mb-2 justify-between">
        <H3>{titulo}</H3>
        {acao}
      </Row>
      {children}
    </View>
  );
}
