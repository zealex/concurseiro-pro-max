import { TelaLegal } from '@/components/conta/TelaLegal';
import { TERMOS } from '@/legal/textos';

export default function Termos() {
  return <TelaLegal titulo="Termos de Uso" secoes={TERMOS} />;
}
