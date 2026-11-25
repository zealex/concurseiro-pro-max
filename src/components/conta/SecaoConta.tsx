import { useRouter } from 'expo-router';
import { KeyRound, LogIn, LogOut, RefreshCw, Trash2 } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';
import { Button } from '@/components/ui/Button';
import { Campo, Sheet } from '@/components/ui/Controls';
import { Card, Muted, Row, Section, Txt } from '@/components/ui/primitives';
import { definirSenha, sair } from '@/services/auth/acoes';
import { useConta } from '@/services/auth/conta';
import { sincronizarAgora, useStatusSync } from '@/sync/controle';
import { FormExcluirConta } from './ExcluirConta';
import { descricaoFase, textoUltimaSync } from './IndicadorSync';
import { Aviso } from './TelaAuth';

function FormDefinirSenha({ onConcluir }: { onConcluir: () => void }) {
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');
  const [erro, setErro] = useState<string | null>(null);
  const [salvando, setSalvando] = useState(false);
  const salvar = async () => {
    setErro(null);
    if (senha.length < 8) return setErro('A senha precisa ter pelo menos 8 caracteres.');
    if (senha !== confirmacao) return setErro('As senhas não são iguais.');
    setSalvando(true);
    const r = await definirSenha(senha);
    setSalvando(false);
    if (r.ok) onConcluir();
    else setErro(r.mensagem);
  };
  return (
    <View>
      <Muted className="mb-3">Com uma senha você também entra com e-mail e senha, em qualquer aparelho.</Muted>
      {erro ? <Aviso tom="erro">{erro}</Aviso> : null}
      <Campo rotulo="Nova senha" ajuda="Pelo menos 8 caracteres." value={senha} onChangeText={setSenha} secureTextEntry autoComplete="new-password" textContentType="newPassword" />
      <Campo rotulo="Confirme a senha" value={confirmacao} onChangeText={setConfirmacao} secureTextEntry autoComplete="new-password" textContentType="newPassword" />
      <Row className="justify-end">
        <Button className="px-3 py-2" variante="primario" titulo="Salvar senha" carregando={salvando} disabled={salvando} onPress={salvar} />
      </Row>
    </View>
  );
}

const NOME_PROVEDOR: Record<string, string> = { credential: 'e-mail e senha', google: 'Google', apple: 'Apple' };

export function SecaoConta() {
  const router = useRouter();
  const conta = useConta((s) => s.conta);
  const status = useStatusSync();
  const [confirmarSaida, setConfirmarSaida] = useState(false);
  const [saindo, setSaindo] = useState(false);
  const [sincronizando, setSincronizando] = useState(false);
  const [excluindo, setExcluindo] = useState(false);
  const [definindoSenha, setDefinindoSenha] = useState(false);

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
      <Row className="mt-2 flex-wrap gap-2">
        {!conta.provedores.includes('credential') ? <Button className="px-3 py-1.5" icone={KeyRound} titulo="Definir uma senha" onPress={() => setDefinindoSenha(true)} /> : null}
        <Button className="px-3 py-1.5" variante="perigo" icone={Trash2} titulo="Excluir conta" onPress={() => setExcluindo(true)} />
      </Row>
      <Sheet visivel={excluindo} onFechar={() => setExcluindo(false)} titulo="Excluir sua conta?">
        <FormExcluirConta conta={conta} onCancelar={() => setExcluindo(false)} />
      </Sheet>
      <Sheet visivel={definindoSenha} onFechar={() => setDefinindoSenha(false)} titulo="Definir uma senha">
        <FormDefinirSenha onConcluir={() => setDefinindoSenha(false)} />
      </Sheet>
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
