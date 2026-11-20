import { useRouter } from 'expo-router';
import { getGuia, GUIAS_FASES, rotaGuia } from '@/data/guiasFases';
import { formatBR } from '@/utils/dates';
import { BlocosResumo, TextoRico } from '../conteudo/BlocosResumo';
import { Button } from '../ui/Button';
import { Callout } from '../ui/Controls';
import { Divider, Muted, Row, Section } from '../ui/primitives';
import { Screen } from '../ui/Screen';
import { Voltar } from './comum';

export function PaginaGuia({ id }: { id: string }) {
  const router = useRouter();
  const guia = getGuia(id);
  if (!guia) {
    return (
      <Screen emoji="🔎" titulo="Guia não encontrado">
        <Voltar />
      </Screen>
    );
  }
  const outros = GUIAS_FASES.filter((g) => g.id !== id);
  return (
    <Screen emoji={guia.emoji} titulo={guia.titulo} descricao="Guias das fases do concurso">
      <Voltar />
      <Callout emoji="🧭" tom="azul">
        <TextoRico texto={guia.resumo} />
      </Callout>
      {guia.secoes.map((s) => (
        <Section key={s.titulo} titulo={s.titulo}>
          <BlocosResumo blocos={s.blocos} />
        </Section>
      ))}
      <Divider />
      <Section titulo="Fontes">
        {guia.fontes.map((f) => (
          <Muted key={f} className="mb-1">
            • {f}
          </Muted>
        ))}
        <Muted className="mt-1">Atualizado em {formatBR(guia.atualizadoEm)}. Em caso de divergência, vale o edital do seu concurso.</Muted>
      </Section>
      <Section titulo="Outros guias">
        <Row className="flex-wrap gap-2">
          {outros.map((g) => (
            <Button key={g.id} pequeno titulo={`${g.emoji} ${g.titulo}`} onPress={() => router.replace(rotaGuia(g.id))} />
          ))}
        </Row>
      </Section>
    </Screen>
  );
}
