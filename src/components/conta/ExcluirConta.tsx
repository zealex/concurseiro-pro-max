import { Download } from 'lucide-react-native';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from '@/components/ui/Button';
import { Campo } from '@/components/ui/Controls';
import { Muted, Row } from '@/components/ui/primitives';
import { excluirConta } from '@/services/auth/acoes';
import type { ContaUsuario } from '@/services/auth/conta';
import { exportarBackup } from '@/services/backupService';
import { Aviso } from './TelaAuth';

/** Formulário de exclusão de conta (usado nas Configurações e na página /excluir-conta). */
export function FormExcluirConta({ conta, onCancelar }: { conta: ContaUsuario; onCancelar?: () => void }) {
  const temSenha = conta.provedores.includes('credential');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState<string | null>(null);
  const [excluindo, setExcluindo] = useState(false);
  const [exportado, setExportado] = useState<string | null>(null);

  const excluir = async () => {
    setErro(null);
    if (temSenha && !senha) return setErro('Digite sua senha para confirmar.');
    setExcluindo(true);
    const r = await excluirConta(temSenha ? senha : undefined);
    setExcluindo(false);
    if (!r.ok) setErro(r.mensagem);
  };

  return (
    <View>
      <Muted className="mb-3 leading-5">
        Isso apaga sua conta, todo o progresso guardado na nuvem e os dados desta conta neste aparelho. Não dá para desfazer.
      </Muted>
      <Button
        className="mb-4 self-start px-3 py-2"
        icone={Download}
        titulo="Baixar meu progresso antes (.json)"
        onPress={async () => setExportado((await exportarBackup()).mensagem)}
      />
      {exportado ? <Muted className="-mt-2 mb-3 text-[12px]">{exportado}</Muted> : null}
      {erro ? <Aviso tom="erro">{erro}</Aviso> : null}
      {temSenha ? (
        <Campo rotulo="Senha" value={senha} onChangeText={setSenha} secureTextEntry autoComplete="current-password" textContentType="password" />
      ) : (
        <Text className="mb-3 text-[13px] text-ink-soft dark:text-ink-dark-soft">
          Por segurança, se você entrou há mais de 24 horas, saia e entre de novo com o Google antes de excluir.
        </Text>
      )}
      <Row className="justify-end gap-2">
        {onCancelar ? <Button className="px-3 py-2" titulo="Cancelar" onPress={onCancelar} /> : null}
        <Button className="px-3 py-2" variante="perigo" titulo="Excluir conta definitivamente" carregando={excluindo} disabled={excluindo} onPress={excluir} />
      </Row>
    </View>
  );
}
