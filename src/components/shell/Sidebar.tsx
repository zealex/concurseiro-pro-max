import { usePathname, useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { TRILHA_LABEL } from '@/data/types';
import { useContagem, useHoje, useMetricas, useNovosNoRadar } from '@/store/selectors';
import { useSettingsStore } from '@/store/useSettingsStore';
import { useCores } from '@/theme/cores';
import { formatBR } from '@/utils/dates';
import { Label, Muted } from '../ui/primitives';
import { NAV, rotaAtiva } from './nav';

/** Barra lateral fixa no estilo Notion (telas ≥ 768 px). */
export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const cores = useCores();
  const hoje = useHoje();
  const contagem = useContagem(hoje);
  const metricas = useMetricas(hoje);
  const novos = useNovosNoRadar();
  const trilha = useSettingsStore((s) => s.trilha);

  return (
    <View className="w-[248px] border-r border-line bg-side dark:border-line-dark dark:bg-side-dark">
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="flex-row items-center px-4 pb-3 pt-5">
          <View className="mr-2 h-6 w-6 items-center justify-center rounded bg-accent">
            <Text className="text-[13px] font-bold text-white">C</Text>
          </View>
          <Text numberOfLines={1} className="flex-1 text-[14px] font-semibold text-ink dark:text-ink-dark">
            Concurseiro Pro Max
          </Text>
        </View>

        {/* Contagem regressiva e ofensiva */}
        <View className="mx-3 mb-3 rounded-notion border border-line bg-page p-3 dark:border-line-dark dark:bg-page-dark">
          <Label>{contagem.vinculadoAConcurso ? 'Prova-alvo' : 'Plano de 90 dias'}</Label>
          <Text className="mt-0.5 text-[26px] font-bold text-ink dark:text-ink-dark">
            {contagem.dias >= 0 ? contagem.dias : 0}
            <Text className="text-[13px] font-normal text-ink-soft dark:text-ink-dark-soft"> {contagem.dias === 1 ? 'dia' : 'dias'}</Text>
          </Text>
          <Muted numberOfLines={2}>
            {contagem.rotulo} · {formatBR(contagem.data)}
          </Muted>
          <View className="mt-2 flex-row items-center">
            <Text className="text-[13px] text-ink dark:text-ink-dark">🔥 {metricas.ofensiva} {metricas.ofensiva === 1 ? 'dia' : 'dias'} de ofensiva</Text>
          </View>
        </View>

        <View className="px-2">
          {NAV.map((item) => {
            const ativo = rotaAtiva(pathname, item.rota);
            const Icone = item.icone;
            return (
              <Pressable
                key={item.rota}
                accessibilityRole="link"
                accessibilityState={{ selected: ativo }}
                onPress={() => router.navigate(item.rota)}
                className={`mb-0.5 flex-row items-center rounded-notion px-2 py-1.5 hover:bg-hover dark:hover:bg-hover-dark ${ativo ? 'bg-hover dark:bg-hover-dark' : ''}`}
              >
                <Icone size={17} color={ativo ? cores.texto : cores.suave} strokeWidth={2} />
                <Text className={`ml-2.5 flex-1 text-[14px] ${ativo ? 'font-medium text-ink dark:text-ink-dark' : 'text-ink-soft dark:text-ink-dark-soft'}`}>
                  {item.rotulo}
                </Text>
                {item.rota === '/radar' && novos > 0 ? (
                  <View className="rounded-full bg-red-500 px-1.5">
                    <Text className="text-[11px] font-bold text-white">{novos}</Text>
                  </View>
                ) : null}
                {item.rota === '/questoes' && metricas.revisoesHoje > 0 ? (
                  <View className="rounded-full bg-accent px-1.5">
                    <Text className="text-[11px] font-bold text-white">{metricas.revisoesHoje}</Text>
                  </View>
                ) : null}
              </Pressable>
            );
          })}
        </View>

        <View className="mx-4 mt-6">
          <Label className="mb-1">Foco ativo</Label>
          <Muted>{TRILHA_LABEL[trilha]}</Muted>
          {novos > 0 ? <Muted className="mt-3">📡 {novos} {novos === 1 ? 'edital novo' : 'editais novos'} no Sul (7 dias)</Muted> : null}
        </View>
      </ScrollView>
    </View>
  );
}
