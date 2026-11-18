import { Platform } from 'react-native';
import * as Haptics from 'expo-haptics';

/** Feedback tátil com fallback seguro: no navegador (e em aparelhos sem motor) é um no-op. */
export function feedback(tipo: 'leve' | 'medio' | 'sucesso' | 'aviso' = 'leve'): void {
  if (Platform.OS === 'web') return;
  try {
    if (tipo === 'sucesso') void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    else if (tipo === 'aviso') void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
    else void Haptics.impactAsync(tipo === 'medio' ? Haptics.ImpactFeedbackStyle.Medium : Haptics.ImpactFeedbackStyle.Light).catch(() => {});
  } catch {
    /* sem suporte */
  }
}
