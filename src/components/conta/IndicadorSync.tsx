import { Pressable, Text } from 'react-native';
import { useConta } from '@/services/auth/conta';
import { sincronizarAgora, useStatusSync } from '@/sync/controle';
import type { FaseSync } from '@/sync/motor';

const ROTULO: Record<FaseSync, { icone: string; texto: string }> = {
  parado: { icone: '☁️', texto: 'Sincronização pausada' },
  sincronizando: { icone: '🔄', texto: 'Sincronizando…' },
  sincronizado: { icone: '☁️', texto: 'Tudo salvo na nuvem' },
  pendente: { icone: '⏳', texto: 'Alterações a enviar' },
  offline: { icone: '📴', texto: 'Sem internet — salvo neste aparelho' },
  'sessao-expirada': { icone: '🔒', texto: 'Entre de novo para sincronizar' },
  'app-desatualizado': { icone: '⬆️', texto: 'Atualize o app para sincronizar' },
  erro: { icone: '⚠️', texto: 'Erro ao sincronizar' },
};

/** Linha compacta com o estado da sincronização (toque = sincronizar agora). */
export function IndicadorSync({ className = '' }: { className?: string }) {
  const conta = useConta((s) => s.conta);
  const fase = useStatusSync((s) => s.fase);
  if (conta?.modo !== 'usuario') {
    return conta?.modo === 'local' ? <Text className={`text-[12px] text-ink-soft dark:text-ink-dark-soft ${className}`}>📱 Sem conta — só neste aparelho</Text> : null;
  }
  const r = ROTULO[fase];
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={`${r.texto}. Sincronizar agora`} onPress={() => void sincronizarAgora()} className={className}>
      <Text className="text-[12px] text-ink-soft dark:text-ink-dark-soft">
        {r.icone} {r.texto}
      </Text>
    </Pressable>
  );
}

export function textoUltimaSync(iso: string | null): string {
  if (!iso) return 'ainda não sincronizado';
  const min = Math.round((Date.now() - Date.parse(iso)) / 60000);
  if (min < 1) return 'agora mesmo';
  if (min < 60) return `há ${min} min`;
  const h = Math.round(min / 60);
  return h < 24 ? `há ${h} h` : new Date(iso).toLocaleDateString('pt-BR');
}

export const descricaoFase = (fase: FaseSync) => ROTULO[fase].texto;
