import { ScrollView, Text, View } from 'react-native';
import { Muted } from './primitives';

/** Tabela simples e legível em qualquer largura (rolagem horizontal no celular). */
export function DataTable({ colunas, linhas, nota, larguraMin = 140 }: { colunas: string[]; linhas: string[][]; nota?: string; larguraMin?: number }) {
  return (
    <View className="mb-4">
      <ScrollView horizontal showsHorizontalScrollIndicator>
        <View className="rounded-notion border border-line dark:border-line-dark">
          <View className="flex-row border-b border-line bg-side dark:border-line-dark dark:bg-side-dark">
            {colunas.map((c, i) => (
              <View key={i} className="border-r border-line px-3 py-2 last:border-r-0 dark:border-line-dark" style={{ width: largura(i, colunas.length, larguraMin) }}>
                <Text className="text-[12px] font-semibold uppercase tracking-wide text-ink-soft dark:text-ink-dark-soft">{c}</Text>
              </View>
            ))}
          </View>
          {linhas.map((linha, r) => (
            <View key={r} className={`flex-row ${r < linhas.length - 1 ? 'border-b border-line dark:border-line-dark' : ''}`}>
              {linha.map((cel, i) => (
                <View key={i} className="border-r border-line px-3 py-2 dark:border-line-dark" style={{ width: largura(i, colunas.length, larguraMin) }}>
                  <Text className={`text-[13px] leading-5 text-ink dark:text-ink-dark ${i === 0 ? 'font-medium' : ''}`}>{cel}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      {nota ? <Muted className="mt-2">{nota}</Muted> : null}
    </View>
  );
}

function largura(i: number, n: number, min: number): number {
  if (n <= 2) return i === 0 ? 220 : 420;
  if (n === 3) return i === 0 ? 190 : 280;
  return i === 0 ? 170 : Math.max(min, 200);
}
