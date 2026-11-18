import { BookOpen, CalendarCheck, LayoutDashboard, ListChecks, Radar, Settings, Timer, type LucideIcon } from 'lucide-react-native';

export interface ItemNav {
  rota: '/' | '/cronograma' | '/radar' | '/questoes' | '/biblioteca' | '/foco' | '/configuracoes';
  nome: string;
  rotulo: string;
  emoji: string;
  icone: LucideIcon;
  /** Aparece na barra inferior do celular. */
  aba: boolean;
}

export const NAV: ItemNav[] = [
  { rota: '/', nome: 'index', rotulo: 'Início', emoji: '🏠', icone: LayoutDashboard, aba: true },
  { rota: '/cronograma', nome: 'cronograma', rotulo: 'Cronograma', emoji: '🗓️', icone: CalendarCheck, aba: true },
  { rota: '/radar', nome: 'radar', rotulo: 'Radar Sul', emoji: '📡', icone: Radar, aba: true },
  { rota: '/questoes', nome: 'questoes', rotulo: 'Questões', emoji: '🎯', icone: ListChecks, aba: true },
  { rota: '/biblioteca', nome: 'biblioteca', rotulo: 'Biblioteca', emoji: '📚', icone: BookOpen, aba: true },
  { rota: '/foco', nome: 'foco', rotulo: 'Timer de Foco', emoji: '⏱️', icone: Timer, aba: false },
  { rota: '/configuracoes', nome: 'configuracoes', rotulo: 'Configurações', emoji: '⚙️', icone: Settings, aba: false },
];

export function rotaAtiva(pathname: string, rota: ItemNav['rota']): boolean {
  if (rota === '/') return pathname === '/' || pathname === '';
  return pathname === rota || pathname.startsWith(`${rota}/`);
}
