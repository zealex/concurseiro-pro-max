import { View } from 'react-native';
import { disciplinasDoEixo, getDisciplina } from '@/data/eixos';
import { EIXO_CURTO, EIXOS, type Eixo } from '@/data/types';
import { Segmented, Seletor } from '../ui/Controls';
import { Label } from '../ui/primitives';

export interface SelecaoTema {
  eixo: Eixo;
  disciplinaId: string;
  temaId: string | null;
}

export function selecaoInicial(eixo: Eixo = 'pericia'): SelecaoTema {
  return { eixo, disciplinaId: disciplinasDoEixo(eixo)[0]?.id ?? '', temaId: null };
}

/** Eixo → disciplina → tema (opcional). */
export function TemaPicker({ valor, onChange }: { valor: SelecaoTema; onChange: (v: SelecaoTema) => void }) {
  const disciplinas = disciplinasDoEixo(valor.eixo);
  const temas = getDisciplina(valor.disciplinaId)?.temas ?? [];
  return (
    <View>
      <Label className="mb-1">Eixo</Label>
      <View className="mb-3">
        <Segmented<Eixo>
          rolavel
          valor={valor.eixo}
          onChange={(eixo) => onChange(selecaoInicial(eixo))}
          opcoes={EIXOS.map((e) => ({ valor: e, rotulo: EIXO_CURTO[e] }))}
        />
      </View>
      <Seletor
        rotulo="Disciplina"
        valor={valor.disciplinaId}
        opcoes={disciplinas.map((d) => ({ valor: d.id, rotulo: d.nome }))}
        onChange={(disciplinaId) => onChange({ ...valor, disciplinaId, temaId: null })}
      />
      <Seletor
        rotulo="Tema (recomendado — alimenta pontos fracos e revisões)"
        valor={valor.temaId ?? '__nenhum'}
        opcoes={[{ valor: '__nenhum', rotulo: 'Sem tema específico' }, ...temas.map((t) => ({ valor: t.id, rotulo: t.nome }))]}
        onChange={(t) => onChange({ ...valor, temaId: t === '__nenhum' ? null : t })}
      />
    </View>
  );
}
