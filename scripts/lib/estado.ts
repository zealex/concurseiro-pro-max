/**
 * Memória do robô entre execuções (scripts/data/radar-estado.json, commitado pelo workflow).
 *
 * - urls: toda notícia elegível vista nas listagens. Permite abrir TODA notícia nova (sem pré-filtro pelo título)
 *   sem reabrir as mesmas páginas a cada hora: só reabre quando a listagem mudou (retificação), quando o item é
 *   médico e a última visita tem mais de 24 h (datas/vagas atualizadas), ou quando a visita anterior falhou/ficou
 *   para depois por falta de orçamento.
 * - fontes: saúde de cada fonte (falhas seguidas, último sucesso) — base dos alarmes (scripts/verificar-radar.ts).
 */
import { createHash } from 'node:crypto';
import type { ItemListagem } from './sources/types';

export interface EstadoUrl {
  /** Hash do que a listagem mostra (título, cargos, vagas, datas): mudou → reabrir. */
  assinatura: string;
  /** Última vez em que a notícia apareceu numa listagem. */
  vistoEm: string;
  /** Última visita bem-sucedida à notícia (null = ainda não visitada: nova, falhou ou ficou sem orçamento). */
  visitadoEm: string | null;
  /** A última visita gerou registro médico? */
  medico: boolean;
  /** Falhas seguidas ao abrir a notícia. */
  falhas: number;
}

export interface SaudeFonte {
  falhasSeguidas: number;
  ultimoOk: string | null;
  ultimaFalha: string | null;
  ultimoErro: string | null;
  itens: number;
}

export interface EstadoRadar {
  versao: 1;
  urls: Record<string, EstadoUrl>;
  fontes: Record<string, SaudeFonte>;
}

export type MotivoVisita = 'nova' | 'alterada' | 'pendente' | 'revisita';

/** Fontes cuja falha dispara alarme (issue no GitHub). As demais são "melhor esforço". */
export const FONTES_ESSENCIAIS = ['PCI Concursos', 'Concursos no Brasil'];
/** Execuções seguidas com falha (de hora em hora) até abrir o alarme. */
export const LIMITE_FALHAS_ALARME = 3;

const HORA_MS = 3_600_000;
export const REVISITA_MEDICO_HORAS = 24;
export const MAX_FALHAS_VISITA = 5;
export const DIAS_PODA_URL = 30;

export function estadoVazio(): EstadoRadar {
  return { versao: 1, urls: {}, fontes: {} };
}

/** Lê o JSON salvo; qualquer formato inesperado vira estado vazio (o robô reconstrói sozinho). */
export function carregarEstado(raw: unknown): EstadoRadar {
  if (!raw || typeof raw !== 'object') return estadoVazio();
  const r = raw as Partial<EstadoRadar>;
  if (r.versao !== 1 || typeof r.urls !== 'object' || !r.urls) return estadoVazio();
  return { versao: 1, urls: { ...r.urls }, fontes: { ...(r.fontes ?? {}) } };
}

export function assinaturaItem(item: Pick<ItemListagem, 'titulo' | 'cargosTexto' | 'vagas' | 'inscricoes' | 'remuneracaoMax'>): string {
  const base = [item.titulo, item.cargosTexto, item.vagas ?? '', item.inscricoes.inicio ?? '', item.inscricoes.fim ?? '', item.remuneracaoMax ?? ''].join('|');
  return createHash('sha1').update(base).digest('hex').slice(0, 12);
}

/** Precisa abrir a notícia nesta execução? Retorna o motivo (para prioridade e log) ou null. */
export function motivoVisita(estado: EstadoRadar, url: string, assinatura: string, agora: Date): MotivoVisita | null {
  const e = estado.urls[url];
  if (!e) return 'nova';
  if (e.assinatura !== assinatura) return 'alterada';
  if (!e.visitadoEm) return e.falhas >= MAX_FALHAS_VISITA ? null : 'pendente';
  if (e.medico && agora.getTime() - Date.parse(e.visitadoEm) > REVISITA_MEDICO_HORAS * HORA_MS) return 'revisita';
  return null;
}

/** Prioridade na fila de visitas: o que pode ser concurso novo vem antes de revisitas. */
export const PRIORIDADE_MOTIVO: Record<MotivoVisita, number> = { alterada: 0, nova: 1, pendente: 2, revisita: 3 };

/** A notícia apareceu na listagem (visitada ou não nesta execução). */
export function registrarVisto(estado: EstadoRadar, url: string, assinatura: string, agora: Date): void {
  const e = estado.urls[url];
  const iso = agora.toISOString();
  if (!e) {
    estado.urls[url] = { assinatura, vistoEm: iso, visitadoEm: null, medico: false, falhas: 0 };
    return;
  }
  // Assinatura nova sem visita bem-sucedida → continua "alterada" na próxima execução.
  estado.urls[url] = { ...e, vistoEm: iso, ...(e.assinatura !== assinatura ? { visitadoEm: null, falhas: 0, assinatura } : {}) };
}

export function registrarVisita(estado: EstadoRadar, url: string, assinatura: string, medico: boolean, agora: Date): void {
  const iso = agora.toISOString();
  estado.urls[url] = { assinatura, vistoEm: iso, visitadoEm: iso, medico, falhas: 0 };
}

export function registrarFalhaVisita(estado: EstadoRadar, url: string, assinatura: string, agora: Date): void {
  const e = estado.urls[url];
  const iso = agora.toISOString();
  estado.urls[url] = {
    assinatura,
    vistoEm: iso,
    // Mantém a última visita boa (um item médico continua médico enquanto a página estiver fora do ar).
    visitadoEm: e?.assinatura === assinatura ? e.visitadoEm : null,
    medico: e?.medico ?? false,
    falhas: (e?.falhas ?? 0) + 1,
  };
}

/** Remove notícias que sumiram das listagens há mais de N dias (concurso encerrado). */
export function podarEstado(estado: EstadoRadar, agora: Date, dias = DIAS_PODA_URL): number {
  let removidas = 0;
  for (const [url, e] of Object.entries(estado.urls)) {
    if (agora.getTime() - Date.parse(e.vistoEm) > dias * 24 * HORA_MS) {
      delete estado.urls[url];
      removidas++;
    }
  }
  return removidas;
}

export function registrarSaudeFonte(estado: EstadoRadar, nome: string, ok: boolean, itens: number, erro: string | null, agora: Date): SaudeFonte {
  const atual = estado.fontes[nome] ?? { falhasSeguidas: 0, ultimoOk: null, ultimaFalha: null, ultimoErro: null, itens: 0 };
  const iso = agora.toISOString();
  const nova: SaudeFonte = ok
    ? { ...atual, falhasSeguidas: 0, ultimoOk: iso, itens, ultimoErro: null }
    : { ...atual, falhasSeguidas: atual.falhasSeguidas + 1, ultimaFalha: iso, ultimoErro: erro, itens };
  estado.fontes[nome] = nova;
  return nova;
}

/** JSON estável (chaves ordenadas) para o diff do commit ficar pequeno. */
export function serializarEstado(estado: EstadoRadar): string {
  const urls = Object.fromEntries(Object.entries(estado.urls).sort(([a], [b]) => a.localeCompare(b)));
  const fontes = Object.fromEntries(Object.entries(estado.fontes).sort(([a], [b]) => a.localeCompare(b)));
  return `${JSON.stringify({ versao: 1, urls, fontes }, null, 1)}\n`;
}
