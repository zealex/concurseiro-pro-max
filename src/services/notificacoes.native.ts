import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

/**
 * Aviso de fim de fase do Pomodoro no Android/iOS: notificação local agendada para o horário de
 * término (dispara mesmo com o app em segundo plano). Com o app aberto, a própria tela já avisa,
 * então a notificação não aparece em primeiro plano.
 */

let idAgendado: string | null = null;
let preparado = false;

async function preparar(): Promise<boolean> {
  if (!preparado) {
    preparado = true;
    Notifications.setNotificationHandler({
      handleNotification: async () => ({ shouldShowBanner: false, shouldShowList: true, shouldPlaySound: false, shouldSetBadge: false }),
    });
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('foco', { name: 'Timer de foco', importance: Notifications.AndroidImportance.HIGH, vibrationPattern: [0, 250, 250, 250] });
    }
  }
  const atual = await Notifications.getPermissionsAsync();
  if (atual.granted) return true;
  if (!atual.canAskAgain) return false;
  return (await Notifications.requestPermissionsAsync()).granted;
}

export async function agendarFimDaFase(terminaEm: number, fase: 'foco' | 'pausa-curta' | 'pausa-longa'): Promise<void> {
  await cancelarFimDaFase();
  if (terminaEm <= Date.now() + 1000) return;
  if (!(await preparar())) return;
  idAgendado = await Notifications.scheduleNotificationAsync({
    content: {
      title: fase === 'foco' ? 'Foco concluído!' : 'Pausa encerrada',
      body: fase === 'foco' ? 'Hora da pausa. Abra o app para registrar a sessão.' : 'Bora voltar ao foco.',
      ...(Platform.OS === 'android' ? { channelId: 'foco' } : {}),
    },
    trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: new Date(terminaEm) },
  });
}

export async function cancelarFimDaFase(): Promise<void> {
  if (!idAgendado) return;
  const id = idAgendado;
  idAgendado = null;
  await Notifications.cancelScheduledNotificationAsync(id).catch(() => undefined);
}
