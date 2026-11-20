import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Pressable } from 'react-native';
import { useCores } from '@/theme/cores';
import { Muted } from '../ui/primitives';

/** "← Biblioteca" (ou o destino informado). */
export function Voltar({ rotulo = 'Biblioteca', destino = '/biblioteca' }: { rotulo?: string; destino?: string }) {
  const router = useRouter();
  const cores = useCores();
  return (
    <Pressable
      onPress={() => (router.canGoBack() ? router.back() : router.replace(destino))}
      className="mb-3 flex-row items-center self-start rounded px-1 py-1 hover:bg-hover dark:hover:bg-hover-dark"
      accessibilityRole="link"
    >
      <ArrowLeft size={16} color={cores.suave} />
      <Muted className="ml-1">{rotulo}</Muted>
    </Pressable>
  );
}

/** Rota do Treino para um conjunto de temas de uma disciplina. */
export function rotaTreino(disciplinaId: string, temas: string[] = []): string {
  const q = temas.length ? `&temas=${encodeURIComponent(temas.join(','))}` : '';
  return `/questoes/treino?disciplina=${encodeURIComponent(disciplinaId)}${q}`;
}

export function rotaFlashcards(disciplinaId?: string): string {
  return disciplinaId ? `/questoes/flashcards?disciplina=${encodeURIComponent(disciplinaId)}` : '/questoes/flashcards';
}
