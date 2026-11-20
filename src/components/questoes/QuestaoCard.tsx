import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { rotaResumo } from '@/data/biblioteca';
import { BANCAS } from '@/data/bancas';
import { getTema } from '@/data/eixos';
import type { QuestaoTreino, TextoBase } from '@/data/types';
import { estaCerta, letra, type RespostaTreino } from '@/utils/treino';
import { TextoRico } from '../conteudo/BlocosResumo';
import { Button } from '../ui/Button';
import { Callout, Toggle } from '../ui/Controls';
import { Card, Muted, Row, Txt } from '../ui/primitives';
import { Tag } from '../ui/Tag';

const NOME_BANCA = new Map(BANCAS.map((b) => [b.id, b.nome]));
const DIFICULDADE = ['', 'Fácil', 'Média', 'Difícil'];

/**
 * Uma questão do Treino/Simulado. `revelar` mostra gabarito e comentário (modo estudo ou correção).
 */
export function QuestaoCard({
  questao,
  texto,
  resposta,
  revelar,
  permitirBranco = false,
  onResponder,
}: {
  questao: QuestaoTreino;
  texto?: TextoBase;
  resposta: RespostaTreino | undefined;
  revelar: boolean;
  permitirBranco?: boolean;
  onResponder: (r: RespostaTreino) => void;
}) {
  const router = useRouter();
  const tema = getTema(questao.temaId);
  const certa = resposta === undefined ? null : estaCerta(questao, resposta);
  const bloqueada = revelar;

  const estiloAlternativa = (i: number) => {
    const marcada = resposta === i;
    if (revelar && i === questao.correta) return 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950';
    if (revelar && marcada) return 'border-red-400 bg-red-50 dark:bg-red-950';
    if (marcada) return 'border-accent bg-accent-soft dark:bg-accent-dark-soft';
    return 'border-line bg-page hover:bg-hover dark:border-line-dark dark:bg-page-dark dark:hover:bg-hover-dark';
  };

  return (
    <Card>
      <Row className="mb-2 flex-wrap gap-1.5">
        {tema ? <Tag texto={tema.tema.nome} cor="orange" /> : null}
        {questao.estilo ? <Tag texto={`estilo ${NOME_BANCA.get(questao.estilo) ?? questao.estilo}`} /> : null}
        <Tag texto={DIFICULDADE[questao.dificuldade] ?? ''} cor={questao.dificuldade === 3 ? 'red' : questao.dificuldade === 2 ? 'yellow' : 'green'} />
        {questao.formato === 'certo-errado' ? <Tag texto="Certo ou Errado" cor="purple" /> : null}
      </Row>

      {texto ? (
        <Toggle titulo={`📄 ${texto.titulo}`} subtitulo={texto.autoria} inicialAberto>
          <Text selectable className="text-[14px] leading-6 text-ink dark:text-ink-dark">
            {texto.texto}
          </Text>
        </Toggle>
      ) : null}

      <Text selectable className="mb-3 mt-1 text-[15px] leading-6 text-ink dark:text-ink-dark">
        {questao.enunciado}
      </Text>

      {questao.formato === 'multipla' ? (
        <View className="gap-2">
          {(questao.alternativas ?? []).map((alt, i) => (
            <Pressable
              key={i}
              disabled={bloqueada}
              onPress={() => onResponder(i)}
              accessibilityRole="radio"
              accessibilityState={{ checked: resposta === i }}
              className={`flex-row rounded-notion border px-3 py-2.5 ${estiloAlternativa(i)}`}
            >
              <Text className="mr-2 font-semibold text-ink dark:text-ink-dark">{letra(i)})</Text>
              <Text className="flex-1 text-[15px] text-ink dark:text-ink-dark">{alt}</Text>
            </Pressable>
          ))}
        </View>
      ) : (
        <Row className="flex-wrap gap-2">
          {[true, false].map((v) => (
            <Pressable
              key={String(v)}
              disabled={bloqueada}
              onPress={() => onResponder(v)}
              accessibilityRole="radio"
              accessibilityState={{ checked: resposta === v }}
              className={`min-w-[120px] flex-1 items-center rounded-notion border px-3 py-3 ${
                revelar && questao.gabaritoCE === v
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950'
                  : revelar && resposta === v
                    ? 'border-red-400 bg-red-50 dark:bg-red-950'
                    : resposta === v
                      ? 'border-accent bg-accent-soft dark:bg-accent-dark-soft'
                      : 'border-line bg-page hover:bg-hover dark:border-line-dark dark:bg-page-dark dark:hover:bg-hover-dark'
              }`}
            >
              <Text className="text-[15px] font-semibold text-ink dark:text-ink-dark">{v ? 'Certo' : 'Errado'}</Text>
            </Pressable>
          ))}
          {permitirBranco && !revelar ? <Button titulo="Deixar em branco" variante={resposta === null ? 'primario' : 'secundario'} onPress={() => onResponder(null)} /> : null}
        </Row>
      )}

      {revelar ? (
        <View className="mt-3">
          <Callout emoji={certa === true ? '✅' : certa === false ? '❌' : '⏭️'} tom={certa === true ? 'verde' : certa === false ? 'vermelho' : 'neutro'}>
            <Txt className="mb-1 font-semibold">
              {certa === true ? 'Acertou!' : certa === false ? 'Errou.' : 'Em branco.'}{' '}
              {questao.formato === 'multipla' ? `Gabarito: ${letra(questao.correta ?? 0)}` : `Gabarito: ${questao.gabaritoCE ? 'Certo' : 'Errado'}`}
            </Txt>
            <TextoRico texto={questao.comentario} className="text-[14px] leading-6" />
          </Callout>
          {questao.fundamento ? <Muted>Fundamento: {questao.fundamento}</Muted> : null}
          {tema ? (
            <Pressable onPress={() => router.push(rotaResumo(questao.temaId))} className="mt-1 self-start" accessibilityRole="link">
              <Text className="text-[13px] text-accent">📘 Rever o resumo do tema</Text>
            </Pressable>
          ) : null}
        </View>
      ) : null}
    </Card>
  );
}
