import { Stack } from 'expo-router';
import { useCores } from '@/theme/cores';

export default function RadarLayout() {
  const cores = useCores();
  return <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: cores.fundo } }} />;
}
