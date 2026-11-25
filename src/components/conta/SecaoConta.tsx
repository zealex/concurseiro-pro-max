import { useRouter } from 'expo-router';
import { LogIn, LogOut } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';
import { Button } from '@/components/ui/Button';
import { Sheet } from '@/components/ui/Controls';
import { Card, Muted, Row, Section, Txt } from '@/components/ui/primitives';
import { sair } from '@/services/auth/acoes';
import { useConta } from '@/services/auth/conta';

const NOME_PROVEDOR: Record<string, string> = { credential: 'e-mail e senha', google: 'Google', apple: 'Apple' };

export function SecaoConta() {
  const router = useRouter();
  const conta = useConta((s) => s.conta);
  const [confirmarSaida, setConfirmarSaida] = useState(false);
  const [saindo, setSaindo] = useState(false);

  if (!conta) return null;

  if (conta.modo === 'local') {
    return (
      <Section titulo="Conta">
        <Card>
          <Txt className="font-medium">Usando sem conta</Txt>
          <Muted className="mt-1">Seu progresso fica só neste aparelho. Crie uma conta para guardá-lo na nuvem e usar também no site.</Muted>
          <Button className="mt-3 self-start px-3 py-2" variante="primario" icone={LogIn} titulo="Criar conta ou entrar" onPress={() => router.push('/entrar')} />
        </Card>
      </Section>
    );
  }

  const provedores = conta.provedores.map((p) => NOME_PROVEDOR[p] ?? p).join(' · ');
  return (
    <Section titulo="Conta">
      <Card>
        <Row className="items-start justify-between">
          <View className="flex-1 pr-3">
            <Txt className="font-medium">{conta.nome || conta.email}</Txt>
            {conta.nome ? <Muted>{conta.email}</Muted> : null}
            {provedores ? <Muted className="mt-1 text-[12px]">Entra com: {provedores}</Muted> : null}
          </View>
          <Button className="px-3 py-1.5" icone={LogOut} titulo="Sair" onPress={() => setConfirmarSaida(true)} />
        </Row>
      </Card>
      <Sheet visivel={confirmarSaida} onFechar={() => setConfirmarSaida(false)} titulo="Sair da conta?">
        <Muted className="mb-4">Seu progresso continua guardado neste aparelho e volta quando você entrar de novo.</Muted>
        <Row className="justify-end gap-2">
          <Button className="px-3 py-2" titulo="Cancelar" onPress={() => setConfirmarSaida(false)} />
          <Button
            className="px-3 py-2"
            variante="perigo"
            titulo="Sair"
            carregando={saindo}
            onPress={async () => {
              setSaindo(true);
              await sair();
            }}
          />
        </Row>
      </Sheet>
    </Section>
  );
}
