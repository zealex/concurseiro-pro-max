import { useRouter } from 'expo-router';
import { LogIn, LogOut, RefreshCw } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';
import { Button } from '@/components/ui/Button';
import { Sheet } from '@/components/ui/Controls';
import { Card, Muted, Row, Section, Txt } from '@/components/ui/primitives';
import { sair } from '@/services/auth/acoes';
import { useConta } from '@/services/auth/conta';
import { sincronizarAgora, useStatusSync } from '@/sync/controle';
import { descricaoFase, textoUltimaSync } from './IndicadorSync';

const NOME_PROVEDOR: Record<string, string> = { credential: 'e-mail e senha', google: 'Google', apple: 'Apple' };

export function SecaoConta() {
  const router = useRouter();
  const conta = useConta((s) => s.conta);
  const status = useStatusSync();
  const [confirmarSaida, setConfirmarSaida] = useState(false);
  const [saindo, setSaindo] = useState(false);
  const [sincronizando, setSincronizando] = useState(false);

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
  const pendentes = status.pendentes.length;
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
        <View className="mt-3 border-t border-line pt-3 dark:border-line-dark">
          <Row className="items-center justify-between">
            <View className="flex-1 pr-3">
              <Txt className="text-[14px]">{descricaoFase(status.fase)}</Txt>
              <Muted className="text-[12px]">
                Última sincronização: {textoUltimaSync(status.ultimaSync)}
                {pendentes > 0 ? ` · ${pendentes} ${pendentes === 1 ? 'parte' : 'partes'} a enviar` : ''}
              </Muted>
              {status.fase === 'erro' && status.mensagem ? <Muted className="text-[12px] text-red-600">{status.mensagem}</Muted> : null}
            </View>
            <Button
              className="px-3 py-1.5"
              icone={RefreshCw}
              titulo="Sincronizar agora"
              carregando={sincronizando || status.fase === 'sincronizando'}
              onPress={async () => {
                setSincronizando(true);
                await sincronizarAgora();
                setSincronizando(false);
              }}
            />
          </Row>
        </View>
      </Card>
      <Sheet visivel={confirmarSaida} onFechar={() => setConfirmarSaida(false)} titulo="Sair da conta?">
        <Muted className="mb-4">
          {pendentes > 0 || status.fase === 'offline'
            ? 'Algumas alterações ainda não chegaram à nuvem (sem internet?). Elas ficam guardadas neste aparelho e sobem quando você entrar de novo.'
            : 'Seu progresso está salvo na nuvem e volta quando você entrar de novo, aqui ou em outro aparelho.'}
        </Muted>
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
