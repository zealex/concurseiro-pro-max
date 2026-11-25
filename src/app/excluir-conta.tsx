import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { FormExcluirConta } from '@/components/conta/ExcluirConta';
import { TelaLegal } from '@/components/conta/TelaLegal';
import { Card, H2, Muted } from '@/components/ui/primitives';
import { CONTATO_EMAIL } from '@/legal/textos';
import { useConta } from '@/services/auth/conta';

/**
 * Página pública de exclusão de conta (exigida pela Google Play): funciona logado (exclui na hora)
 * ou deslogado (explica como entrar para excluir, ou pedir por e-mail).
 */
export default function ExcluirContaPagina() {
  const conta = useConta((s) => s.conta);
  return (
    <TelaLegal titulo="Excluir sua conta">
      <Text className="mb-4 text-[15px] leading-6 text-ink dark:text-ink-dark">
        Ao excluir a conta do Concurseiro Pro Max, apagamos na hora a conta, as sessões e todo o progresso guardado na nuvem (inclusive as
        versões anteriores). Não dá para desfazer.
      </Text>
      {conta?.modo === 'usuario' ? (
        <Card className="mb-6">
          <H2 className="mb-1">{conta.email}</H2>
          <FormExcluirConta conta={conta} />
        </Card>
      ) : (
        <Card className="mb-6">
          <Text className="mb-2 text-[15px] leading-6 text-ink dark:text-ink-dark">
            Para excluir, entre na sua conta e volte a esta página (ou use Configurações → Excluir conta no app).
          </Text>
          <Link href="/entrar" className="text-[15px] font-medium text-accent">
            Entrar
          </Link>
        </Card>
      )}
      <View className="mb-2">
        <Muted>
          Não consegue entrar? Envie um e-mail para {CONTATO_EMAIL} a partir do endereço da conta, pedindo a exclusão. Respondemos em até 15
          dias.
        </Muted>
      </View>
    </TelaLegal>
  );
}
