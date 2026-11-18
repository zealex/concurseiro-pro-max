import * as DocumentPicker from 'expo-document-picker';
import { File, Paths } from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Platform } from 'react-native';
import { BACKUP_APP, BACKUP_VERSAO, validarBackup, type Backup } from '@/shared/backup';
import { checklistPadrao, useChecklistStore } from '@/store/useChecklistStore';
import { cronogramaPadrao, useCronogramaStore } from '@/store/useCronogramaStore';
import { focusPadrao, useFocusStore } from '@/store/useFocusStore';
import { questoesPadrao, useQuestoesStore } from '@/store/useQuestoesStore';
import { radarPadrao, useRadarStore } from '@/store/useRadarStore';
import { settingsPadrao, useSettingsStore } from '@/store/useSettingsStore';
import { armazenamento } from '@/services/storage/repository';
import { todayKey } from '@/utils/dates';

/** Backup portátil (.json) de todo o progresso local. */
export { validarBackup, type Backup };

function somenteDados<T extends object>(estado: T): Record<string, unknown> {
  return Object.fromEntries(Object.entries(estado).filter(([, v]) => typeof v !== 'function'));
}

export function montarBackup(): Backup {
  const radar = somenteDados(useRadarStore.getState());
  delete radar.sincronizando;
  return {
    app: BACKUP_APP,
    schemaVersion: BACKUP_VERSAO,
    exportedAt: new Date().toISOString(),
    data: {
      settings: somenteDados(useSettingsStore.getState()),
      cronograma: somenteDados(useCronogramaStore.getState()),
      questoes: somenteDados(useQuestoesStore.getState()),
      radar,
      checklist: somenteDados(useChecklistStore.getState()),
      focus: somenteDados(useFocusStore.getState()),
    },
  };
}

/** Substitui o estado local pelo do backup (campos ausentes voltam ao padrão). */
export function aplicarBackup(b: Backup): void {
  const d = b.data;
  useSettingsStore.setState({ ...settingsPadrao(), ...(d.settings ?? {}) });
  useCronogramaStore.setState({ ...cronogramaPadrao(), ...(d.cronograma ?? {}) });
  useQuestoesStore.setState({ ...questoesPadrao(), ...(d.questoes ?? {}) });
  useRadarStore.setState({ ...radarPadrao(), ...(d.radar ?? {}), sincronizando: false });
  useChecklistStore.setState({ ...checklistPadrao(), ...(d.checklist ?? {}) });
  useFocusStore.setState({ ...focusPadrao(), ...(d.focus ?? {}) });
}

/** Volta tudo ao estado inicial (memória + armazenamento local). */
export async function resetarTudo(): Promise<void> {
  aplicarBackup({ app: BACKUP_APP, schemaVersion: BACKUP_VERSAO, exportedAt: new Date().toISOString(), data: {} });
  await armazenamento.limparTudo();
  // Regrava os padrões para que a próxima abertura não dependa de estado em memória.
  aplicarBackup({ app: BACKUP_APP, schemaVersion: BACKUP_VERSAO, exportedAt: new Date().toISOString(), data: {} });
}

export function nomeDoArquivo(): string {
  return `concurseiro-backup-${todayKey()}.json`;
}

export async function exportarBackup(): Promise<{ ok: boolean; mensagem: string }> {
  const json = JSON.stringify(montarBackup(), null, 2);
  const nome = nomeDoArquivo();
  try {
    if (Platform.OS === 'web') {
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = nome;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      return { ok: true, mensagem: `Backup salvo como ${nome}.` };
    }
    const arquivo = new File(Paths.cache, nome);
    if (arquivo.exists) arquivo.delete();
    arquivo.create();
    await arquivo.write(json);
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(arquivo.uri, { mimeType: 'application/json', dialogTitle: 'Salvar backup', UTI: 'public.json' });
      return { ok: true, mensagem: 'Backup gerado — escolha onde salvar.' };
    }
    return { ok: true, mensagem: `Backup salvo em ${arquivo.uri}` };
  } catch (e) {
    return { ok: false, mensagem: `Não foi possível exportar: ${(e as Error).message}` };
  }
}

/** Abre o seletor de arquivos e devolve o backup validado (sem aplicar — a tela pede confirmação). */
export async function escolherBackup(): Promise<{ ok: true; backup: Backup } | { ok: false; erro: string } | null> {
  const r = await DocumentPicker.getDocumentAsync({ type: ['application/json', 'text/plain', '*/*'], copyToCacheDirectory: true, multiple: false });
  if (r.canceled || !r.assets?.[0]) return null;
  const asset = r.assets[0];
  try {
    let texto: string;
    if (Platform.OS === 'web' && asset.file) texto = await asset.file.text();
    else if (Platform.OS === 'web') texto = await (await fetch(asset.uri)).text();
    else texto = await new File(asset.uri).text();
    return validarBackup(texto);
  } catch (e) {
    return { ok: false, erro: `Não foi possível ler o arquivo: ${(e as Error).message}` };
  }
}
