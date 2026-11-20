import { useRouter } from 'expo-router';
import { EDITAIS_MODELO } from '@/data/editais';
import { TRILHA_CURTA } from '@/data/types';
import { useSettingsStore } from '@/store/useSettingsStore';
import { editalDoModelo, fatiaBasicas, totalQuestoes } from '@/utils/edital';
import { Button } from '../ui/Button';
import { Callout } from '../ui/Controls';
import { LinkExterno } from '../ui/LinkExterno';
import { Card, Muted, Row, Section, Txt } from '../ui/primitives';
import { Screen } from '../ui/Screen';
import { Tag } from '../ui/Tag';
import { Voltar } from './comum';

/** Editais reais lidos no PDF — composição de cada prova (espelho de docs/editais-referencia.md). */
export function PaginaEditais() {
  const router = useRouter();
  const setEditalAlvo = useSettingsStore((s) => s.setEditalAlvo);
  return (
    <Screen emoji="🧾" titulo="Editais de referência" descricao="Composição real de provas de 2024–2026, lida no PDF oficial de cada edital.">
      <Voltar />
      <Callout emoji="📌" tom="azul">
        Prefeituras do Sul: básicas são de 40% a 75% das questões, e várias bancas eliminam quem zera uma disciplina. Perícia oficial: o bloco geral tem nota mínima própria e há redação, TAF, psicológica e toxicológico. Confira sempre o edital do seu concurso.
      </Callout>
      <Section titulo={`${EDITAIS_MODELO.length} editais`}>
        {EDITAIS_MODELO.map((m) => {
          const e = editalDoModelo(m);
          return (
            <Card key={m.id} className="mb-2">
              <Row className="flex-wrap items-center gap-1.5">
                <Tag texto={m.uf} />
                <Tag texto={m.banca} cor="blue" />
                <Tag texto={`Trilha ${TRILHA_CURTA[m.trilhaSugerida]}`} cor="green" />
              </Row>
              <Txt className="mt-1 font-semibold">{m.nome}</Txt>
              <Muted>
                {totalQuestoes(e)} questões · básicas = {Math.round(fatiaBasicas(e) * 100)}% dos pontos
              </Muted>
              {m.provas.map((p) => (
                <Muted key={p.id} className="mt-1">
                  {p.nome}: {p.itens.map((i) => `${i.rotulo} ${i.questoes}`).join(' · ')}
                </Muted>
              ))}
              {m.observacoes ? <Muted className="mt-1 italic">{m.observacoes}</Muted> : null}
              <Row className="mt-2 flex-wrap items-center gap-2">
                <Button
                  pequeno
                  titulo="Usar no Meu Edital"
                  onPress={() => {
                    setEditalAlvo(e);
                    router.push('/edital');
                  }}
                />
                <LinkExterno url={m.fonteUrl} rotulo="Edital (PDF)" />
              </Row>
            </Card>
          );
        })}
      </Section>
    </Screen>
  );
}
