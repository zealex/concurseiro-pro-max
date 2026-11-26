import type { SourceStatus } from '@/shared/concursos/schema';

/**
 * Saúde do Radar vista pelo app. O robô roda de hora em hora e regrava o feed pelo menos a cada 6 h
 * (batimento), então um feed com mais de 12 h indica robô parado — não "falta de concursos novos".
 */
export const HORAS_RADAR_DESATUALIZADO = 12;

export interface SaudeRadar {
  /** Horas desde a geração do feed (null = sem feed). */
  horas: number | null;
  desatualizado: boolean;
  /** Fontes principais que falharam na última coleta. */
  fontesFora: string[];
}

export function saudeDoRadar(geradoEm: string | null, fontes: SourceStatus[], agora = Date.now()): SaudeRadar {
  const t = geradoEm ? Date.parse(geradoEm) : NaN;
  const horas = Number.isFinite(t) ? Math.max(0, (agora - t) / 3_600_000) : null;
  return {
    horas,
    desatualizado: horas !== null && horas > HORAS_RADAR_DESATUALIZADO,
    fontesFora: fontes.filter((s) => s.essencial && !s.ok).map((s) => s.nome),
  };
}

/** "há 3 h", "há 2 dias". */
export function tempoDesde(horas: number): string {
  if (horas < 48) return `há ${Math.max(1, Math.round(horas))} h`;
  return `há ${Math.round(horas / 24)} dias`;
}
