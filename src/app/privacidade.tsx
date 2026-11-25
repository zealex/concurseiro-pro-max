import { TelaLegal } from '@/components/conta/TelaLegal';
import { PRIVACIDADE } from '@/legal/textos';

export default function Privacidade() {
  return <TelaLegal titulo="Política de Privacidade" secoes={PRIVACIDADE} />;
}
