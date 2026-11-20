import { ExternalLink } from 'lucide-react-native';
import { Linking, Pressable, Text } from 'react-native';
import { useCores } from '@/theme/cores';

export function abrirUrl(url: string): void {
  void Linking.openURL(url).catch(() => {});
}

/** Link externo discreto (abre no navegador). */
export function LinkExterno({ url, rotulo }: { url: string; rotulo?: string }) {
  const cores = useCores();
  return (
    <Pressable onPress={() => abrirUrl(url)} className="mt-1 flex-row items-center self-start" accessibilityRole="link">
      <ExternalLink size={13} color={cores.accent} />
      <Text numberOfLines={1} className="ml-1 text-[13px] text-accent">
        {rotulo ?? url.replace(/^https?:\/\//, '').slice(0, 60)}
      </Text>
    </Pressable>
  );
}
