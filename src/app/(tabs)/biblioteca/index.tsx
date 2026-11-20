import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { Muted, PressableRow, ProgressBar, Screen, Section } from '@/components/ui';
import { DISCIPLINAS_BASICAS, EMOJI_DISCIPLINA, rotaDisciplina } from '@/data/biblioteca';
import { temBanco } from '@/data/conteudo/carregar';
import { CHEAT_SHEETS } from '@/data/cheatSheets';
import { CHECKLISTS, totalItens } from '@/data/checklistsLeiSeca';
import { EIXO_LABEL } from '@/data/types';
import { useChecklistStore } from '@/store/useChecklistStore';
import { useCores } from '@/theme/cores';

const PAGINAS = [
  { slug: 'concursos-generalista', emoji: '🩺', titulo: 'Concursos para o generalista', desc: 'Perito Médico Federal, legista, perito de RPPS e clínico: requisitos, prova e trilha.' },
  { slug: 'plano', emoji: '🗺️', titulo: 'Plano de 90 dias', desc: 'Mesociclos, perfis de carga, Modo Plantão e regras de revisão.' },
  { slug: 'cursinhos', emoji: '🎓', titulo: 'Cursinhos e kit para 90 dias', desc: 'Comparativo e custo-benefício para o generalista.' },
  { slug: 'bibliografia', emoji: '📖', titulo: 'Bibliografia', desc: 'Manuais de perícia do INSS, França, Hércules, Duncan e materiais gratuitos do MS.' },
  { slug: 'bancas', emoji: '🏛️', titulo: 'Perfil das bancas', desc: 'FUNDATEC, FEPESE, Objetiva, Legalle, FURB, IBAM e nacionais — e como cada uma cobra as básicas.' },
  { slug: 'editais', emoji: '🧾', titulo: 'Editais de referência', desc: 'Composição real de 15 provas (prefeituras, perícia oficial, Perito Médico Federal, PF).' },
  { slug: 'fontes', emoji: '🔗', titulo: 'Fontes oficiais gratuitas', desc: 'gov.br (Previdência, INSS, MTE), Planalto, CFM, Fundacentro, RENAST.' },
  { slug: 'filtros', emoji: '🔎', titulo: 'Filtros nos bancos de questões', desc: 'Qconcursos, TEC, Estratégia/Gran Questões passo a passo.' },
] as const;

export default function Biblioteca() {
  const router = useRouter();
  const cores = useCores();
  const marcados = useChecklistStore((s) => s.marcados);

  return (
    <Screen emoji="📚" titulo="Biblioteca Estratégica" descricao="Wiki de estudos embarcada — funciona offline. Tudo foi conferido nas fontes oficiais citadas em cada página." larga>
      <Section titulo="Conhecimentos Básicos">
        <View className="flex-row flex-wrap gap-2">
          {DISCIPLINAS_BASICAS.map((d) => (
            <Pressable
              key={d.id}
              onPress={() => router.push(rotaDisciplina(d.id))}
              className="min-w-[240px] flex-1 flex-row items-center rounded-notion border border-line p-3 hover:bg-hover dark:border-line-dark dark:hover:bg-hover-dark"
              accessibilityRole="link"
            >
              <Text className="mr-3 text-[22px]">{EMOJI_DISCIPLINA[d.id] ?? '📚'}</Text>
              <View className="flex-1">
                <Text className="text-[15px] font-medium text-ink dark:text-ink-dark">{d.nome}</Text>
                <Muted>
                  {d.temas.length} temas · {temBanco(d.id) ? 'resumos, questões e flashcards' : 'conteúdo em produção'}
                </Muted>
              </View>
              <ChevronRight size={16} color={cores.fraco} />
            </Pressable>
          ))}
        </View>
      </Section>

      <View className="gap-6 lg:flex-row">
        <View className="flex-1">
          <Section titulo="Estratégia">
            {PAGINAS.map((p) => (
              <PressableRow key={p.slug} onPress={() => router.push(`/biblioteca/${p.slug}`)} className="py-2">
                <Text className="mr-3 text-[20px]">{p.emoji}</Text>
                <View className="flex-1">
                  <Text className="text-[15px] font-medium text-ink dark:text-ink-dark">{p.titulo}</Text>
                  <Muted>{p.desc}</Muted>
                </View>
                <ChevronRight size={16} color={cores.fraco} />
              </PressableRow>
            ))}
          </Section>

          <Section titulo="Cheat sheets">
            {CHEAT_SHEETS.map((c) => (
              <PressableRow key={c.id} onPress={() => router.push(`/biblioteca/cheat-${c.id}`)} className="py-2">
                <Text className="mr-3 text-[20px]">📄</Text>
                <View className="flex-1">
                  <Text className="text-[15px] font-medium text-ink dark:text-ink-dark">{c.titulo}</Text>
                  <Muted>{EIXO_LABEL[c.eixo]}</Muted>
                </View>
                <ChevronRight size={16} color={cores.fraco} />
              </PressableRow>
            ))}
          </Section>
        </View>

        <View className="flex-1">
          <Section titulo="Checklists de lei seca & NRs">
            {CHECKLISTS.map((c) => {
              const ids = c.secoes.flatMap((s) => s.itens.map((i) => i.id));
              const feitos = ids.filter((id) => marcados[id]).length;
              const total = totalItens(c);
              return (
                <PressableRow key={c.id} onPress={() => router.push(`/biblioteca/checklist-${c.id}`)} className="py-2">
                  <Text className="mr-3 text-[20px]">☑️</Text>
                  <View className="flex-1">
                    <Text className="text-[15px] font-medium text-ink dark:text-ink-dark">
                      {c.sigla} <Text className="font-normal text-ink-soft dark:text-ink-dark-soft">— {c.titulo}</Text>
                    </Text>
                    <View className="mt-1 flex-row items-center gap-2">
                      <ProgressBar valor={total ? feitos / total : 0} className="flex-1" cor={feitos === total ? 'bg-emerald-500' : 'bg-accent'} />
                      <Muted>
                        {feitos}/{total}
                      </Muted>
                    </View>
                  </View>
                  <ChevronRight size={16} color={cores.fraco} />
                </PressableRow>
              );
            })}
          </Section>
        </View>
      </View>
    </Screen>
  );
}
