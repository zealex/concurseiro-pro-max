import { chaveOrgao, slug } from './normalize';
import type { TagCargo, UF } from './schema';

/**
 * Id determinístico: slug(uf + cidade + órgão + cargoChave + ano).
 * cargoChave = tag do grupo de cargos (estável mesmo se o texto da listagem mudar).
 */
export function gerarIdConcurso(p: { uf: UF; cidade: string; orgao: string; tag: TagCargo; ano: number }): string {
  return slug(`${p.uf} ${p.cidade} ${chaveOrgao(p.orgao)} ${p.tag} ${p.ano}`);
}

/** Id de concurso cadastrado manualmente — prefixo garante que nunca colide com o feed. */
export function gerarIdManual(p: { uf: UF; cidade: string; orgao: string; ano: number }, sufixo: string): string {
  return `manual-${slug(`${p.uf} ${p.cidade} ${chaveOrgao(p.orgao)} ${p.ano}`)}-${slug(sufixo).slice(0, 8)}`;
}
