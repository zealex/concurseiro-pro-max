import type { LucideIcon } from 'lucide-react-native';
import { ActivityIndicator, Pressable, Text, type PressableProps } from 'react-native';
import { useCores } from '@/theme/cores';

type Variante = 'primario' | 'secundario' | 'fantasma' | 'perigo';

const BASE = 'flex-row items-center justify-center rounded-notion';
const VARIANTES: Record<Variante, string> = {
  primario: 'bg-accent active:opacity-80 hover:opacity-90',
  secundario: 'border border-line bg-page active:bg-hover hover:bg-hover dark:border-line-dark dark:bg-page-dark dark:active:bg-hover-dark dark:hover:bg-hover-dark',
  fantasma: 'active:bg-hover hover:bg-hover dark:active:bg-hover-dark dark:hover:bg-hover-dark',
  perigo: 'border border-red-300 bg-page active:bg-red-50 hover:bg-red-50 dark:border-red-900 dark:bg-page-dark dark:hover:bg-red-950',
};
const TEXTO: Record<Variante, string> = {
  primario: 'text-white',
  secundario: 'text-ink dark:text-ink-dark',
  fantasma: 'text-ink-soft dark:text-ink-dark-soft',
  perigo: 'text-red-600 dark:text-red-400',
};

export function Button({
  titulo,
  icone: Icone,
  variante = 'secundario',
  pequeno = false,
  carregando = false,
  className = '',
  disabled,
  ...p
}: PressableProps & {
  titulo: string;
  icone?: LucideIcon;
  variante?: Variante;
  pequeno?: boolean;
  carregando?: boolean;
  className?: string;
}) {
  const cores = useCores();
  const corIcone = variante === 'primario' ? '#FFFFFF' : variante === 'perigo' ? cores.perigo : variante === 'fantasma' ? cores.suave : cores.texto;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={titulo}
      disabled={disabled || carregando}
      className={`${BASE} ${VARIANTES[variante]} ${pequeno ? 'h-8 px-2.5' : 'h-10 px-3.5'} ${disabled ? 'opacity-50' : ''} ${className}`}
      {...p}
    >
      {carregando ? (
        <ActivityIndicator size="small" color={corIcone} />
      ) : Icone ? (
        <Icone size={pequeno ? 15 : 17} color={corIcone} strokeWidth={2} />
      ) : null}
      <Text className={`${Icone || carregando ? 'ml-1.5' : ''} ${pequeno ? 'text-[13px]' : 'text-[14px]'} font-medium ${TEXTO[variante]}`}>{titulo}</Text>
    </Pressable>
  );
}

export function IconButton({
  icone: Icone,
  rotulo,
  cor,
  tamanho = 18,
  className = '',
  ...p
}: PressableProps & { icone: LucideIcon; rotulo: string; cor?: string; tamanho?: number; className?: string }) {
  const cores = useCores();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={rotulo}
      hitSlop={8}
      className={`h-9 w-9 items-center justify-center rounded-notion active:bg-hover hover:bg-hover dark:active:bg-hover-dark dark:hover:bg-hover-dark ${className}`}
      {...p}
    >
      <Icone size={tamanho} color={cor ?? cores.suave} strokeWidth={2} />
    </Pressable>
  );
}
