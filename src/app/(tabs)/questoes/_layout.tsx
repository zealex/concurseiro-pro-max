import { Stack } from 'expo-router';
import { useCores } from '@/theme/cores';

/** Links diretos (Dashboard, Cronograma, Biblioteca) para treino/flashcards voltam para a Central de Questões. */
export const unstable_settings = { initialRouteName: 'index' };

export default function QuestoesLayout() {
  const cores = useCores();
  return <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: cores.fundo } }} />;
}
