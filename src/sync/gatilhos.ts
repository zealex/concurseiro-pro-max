import * as Network from 'expo-network';
import { AppState, Platform } from 'react-native';
import type { MotorSync } from './motor';

const INTERVALO_MS = 3 * 60 * 1000;

/**
 * Quando sincronizar além das mudanças locais:
 *  - app volta ao primeiro plano → puxa; vai para segundo plano → envia o pendente;
 *  - conexão volta → sincroniza;
 *  - a cada 3 minutos com o app aberto.
 */
export function ligarGatilhos(motor: MotorSync): () => void {
  const desligar: (() => void)[] = [];

  const sub = AppState.addEventListener('change', (estado) => {
    if (estado === 'active') void motor.sincronizarAgora('foco');
    else void motor.enviarAgora();
  });
  desligar.push(() => sub.remove());

  if (Platform.OS === 'web') {
    const online = () => void motor.sincronizarAgora('online');
    const saindo = () => void motor.enviarAgora();
    window.addEventListener('online', online);
    window.addEventListener('pagehide', saindo);
    desligar.push(() => {
      window.removeEventListener('online', online);
      window.removeEventListener('pagehide', saindo);
    });
  } else {
    const rede = Network.addNetworkStateListener((s) => {
      if (s.isInternetReachable) void motor.sincronizarAgora('online');
    });
    desligar.push(() => rede.remove());
  }

  const intervalo = setInterval(() => {
    if (AppState.currentState === 'active') void motor.sincronizarAgora('intervalo');
  }, INTERVALO_MS);
  desligar.push(() => clearInterval(intervalo));

  return () => desligar.forEach((d) => d());
}
