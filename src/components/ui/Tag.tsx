import { Pressable, Text, View } from 'react-native';
import { TAG_CLASSES, type CorTag } from '@/theme/cores';

export function Tag({ texto, cor = 'gray', className = '' }: { texto: string; cor?: CorTag; className?: string }) {
  return (
    <View className={`self-start rounded px-1.5 py-0.5 ${TAG_CLASSES[cor]} ${className}`}>
      <Text numberOfLines={1} className="text-[12px] leading-4 text-ink dark:text-ink-dark">
        {texto}
      </Text>
    </View>
  );
}

/** Selo "NOVO" para concursos detectados nos últimos 7 dias. */
export function SeloNovo() {
  return (
    <View className="self-start rounded bg-red-500 px-1.5 py-0.5">
      <Text className="text-[10px] font-bold uppercase tracking-wider text-white">Novo</Text>
    </View>
  );
}

/** Chip de filtro alternável. */
export function Chip({ texto, ativo, onPress, cor }: { texto: string; ativo: boolean; onPress: () => void; cor?: CorTag }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: ativo }}
      onPress={onPress}
      className={`mb-2 mr-2 rounded-full border px-3 py-1 ${
        ativo
          ? `border-transparent ${cor ? TAG_CLASSES[cor] : 'bg-accent-soft dark:bg-accent-dark-soft'}`
          : 'border-line bg-page hover:bg-hover dark:border-line-dark dark:bg-page-dark dark:hover:bg-hover-dark'
      }`}
    >
      <Text className={`text-[13px] ${ativo ? 'font-medium text-ink dark:text-ink-dark' : 'text-ink-soft dark:text-ink-dark-soft'}`}>{texto}</Text>
    </Pressable>
  );
}
