/**
 * Converte itens brutos (listagem + detalhe) em registros Concurso, um por grupo de cargo (tag).
 */
import {
  ajustarTagPorOrgao,
  classificarCargo,
  isCargoMedico,
  PRIORIDADE_TAG,
  textoMencionaMedicina,
  tituloIndicaVagaMedica,
} from '../../src/shared/concursos/classify';
import { CAPITAL, type Geo } from '../../src/shared/concursos/geo';
import { gerarIdConcurso } from '../../src/shared/concursos/id';
import { unirCargos } from '../../src/shared/concursos/merge';
import { normalizar } from '../../src/shared/concursos/normalize';
import { ConcursoSchema, type Cargo, type Concurso, type TagCargo, type UF } from '../../src/shared/concursos/schema';
import { anoDoEdital, extrairBanca, extrairCargosMedicos, extrairDataProva, extrairInscricoes, numeroEdital, tipoDoTexto } from './extract';
import type { Detalhe, ItemBanca, ItemListagem } from './sources/types';

const RE_ESTADUAL = /\b(estado|estadual|governo do|policia cientifica|\bigp\b|instituto[- ]geral de pericias|\bsesa\b|secretaria de estado|tribunal|detran|\bpcp\b|\bpci\b)/;

/** Data de publicação da notícia (ISO), se válida e não futura; senão, o instante da coleta. */
export function inicioDaNoticia(publicadoEm: string | null | undefined, agora: Date): string {
  const t = publicadoEm ? Date.parse(publicadoEm) : Number.NaN;
  return Number.isFinite(t) && t < agora.getTime() ? new Date(t).toISOString() : agora.toISOString();
}

/** Manchete de seleção de docente/residente/estagiário que não oferece vaga de médico. */
export function tituloDeDocencia(titulo: string): boolean {
  const n = normalizar(titulo);
  if (/residencia medica|\bestagi|bolsist|vestibular/.test(n)) return true;
  return /\bprofessor|\bdocente|magisterio|preceptor|\btutor\b/.test(n) && !/\bmedic[oa]s?\b/.test(n);
}

function cargosDaListagem(cargosTexto: string): Cargo[] {
  return cargosTexto
    .split(/,|;| e (?=[A-ZÀ-Ý])/)
    .map((c) => c.replace(/\s+/g, ' ').trim())
    .filter((c) => c && isCargoMedico(c))
    .map((nome) => ({ nome, ...classificarCargo(nome), vagas: null, cadastroReserva: false, remuneracao: null, cargaHoraria: null }));
}

function cargoGenerico(texto: string): Cargo {
  const { tag, subcategoria } = classificarCargo(texto);
  const nome =
    tag === 'medico-legista'
      ? 'Perito Médico-Legista (ver edital)'
      : tag === 'pericia-medica'
        ? 'Perito Médico (ver edital)'
        : tag === 'medicina-do-trabalho'
          ? 'Médico do Trabalho (ver edital)'
          : 'Médico (ver edital)';
  return { nome, tag, subcategoria, vagas: null, cadastroReserva: false, remuneracao: null, cargaHoraria: null };
}

export function decidirCidade(geo: Geo, uf: UF, textos: string[], orgao: string): string {
  for (const t of textos) {
    const c = t ? geo.cidadeNoTexto(t, uf) : null;
    if (c) return c;
  }
  if (RE_ESTADUAL.test(normalizar(orgao))) return CAPITAL[uf];
  return 'Não informada';
}

function anoDe(...datas: (string | null | undefined)[]): number | null {
  for (const d of datas) {
    const ano = d ? Number(d.slice(0, 4)) : NaN;
    if (Number.isFinite(ano) && ano >= 2000) return ano;
  }
  return null;
}

/** Registros (um por tag) a partir de listagem + detalhe. `ufs` sobrepõe a UF da listagem (órgãos nacionais). */
export function construirConcursos(p: {
  item: ItemListagem;
  detalhe: Detalhe | null;
  geo: Geo;
  agora: Date;
  ufs?: UF[];
}): Concurso[] {
  const { item, detalhe, geo, agora } = p;
  const ufs = p.ufs ?? (item.uf ? [item.uf] : []);
  if (!ufs.length) return [];

  const referencia = detalhe?.publicadoEm ? new Date(detalhe.publicadoEm) : agora;
  const doDetalhe = detalhe ? extrairCargosMedicos(detalhe.linhas) : [];
  let cargos = unirCargos(cargosDaListagem(item.cargosTexto), doDetalhe);
  if (!cargos.length && tituloIndicaVagaMedica(`${item.titulo} ${detalhe?.titulo ?? ''}`)) {
    cargos = [cargoGenerico(`${item.titulo} ${detalhe?.titulo ?? ''}`)];
  }
  // Seleção de professor/residência "de Medicina" (ex.: UFFS 2026): especialidades soltas no texto são áreas de
  // docência, não vagas. Só sobram cargos que dizem "Médico"/"Perito"/"Legista" com todas as letras.
  if (tituloDeDocencia(`${item.titulo} ${detalhe?.titulo ?? ''}`)) {
    cargos = cargos.filter((c) => /\bmedic[oa]s?\b|perit[oa]|legista/.test(normalizar(c.nome)));
  }
  if (!cargos.length) return [];
  // "Perito Médico" da Polícia Científica/IGP é o legista.
  cargos = cargos.map((c) => ajustarTagPorOrgao(c, item.orgao));

  const textoDetalhe = detalhe?.texto ?? '';
  const inscDetalhe = detalhe ? extrairInscricoes(textoDetalhe, referencia) : { inicio: null, fim: null };
  const inscricoes = {
    inicio: item.inscricoes.inicio ?? inscDetalhe.inicio,
    fim: item.inscricoes.fim ?? inscDetalhe.fim,
  };
  const dataProva = detalhe ? extrairDataProva(textoDetalhe, referencia, inscricoes.fim) : null;
  const banca = detalhe ? extrairBanca(textoDetalhe) : null;
  const tipo = tipoDoTexto(`${item.titulo} ${detalhe?.titulo ?? ''}`);
  // Ano do certame: número do edital > publicação da notícia > inscrições > prova (a prova pode cair no ano seguinte).
  const ano =
    anoDoEdital(`${item.titulo}\n${textoDetalhe}`) ??
    anoDe(detalhe?.publicadoEm, inscricoes.inicio, inscricoes.fim, dataProva) ??
    agora.getUTCFullYear();
  const todosMedicos = item.cargosTexto && !item.incompleto && cargosDaListagem(item.cargosTexto).length === item.cargosTexto.split(',').length;

  const grupos = new Map<TagCargo, Cargo[]>();
  for (const c of cargos) grupos.set(c.tag, [...(grupos.get(c.tag) ?? []), c]);
  const iso = agora.toISOString();
  const saida: Concurso[] = [];

  for (const uf of ufs) {
    const cidade = decidirCidade(geo, uf, [`${item.orgao} - ${uf}`, item.titulo, detalhe?.titulo ?? '', ufs.length === 1 ? textoDetalhe : ''], item.orgao);
    for (const [tag, lista] of [...grupos.entries()].sort((a, b) => PRIORIDADE_TAG[a[0]] - PRIORIDADE_TAG[b[0]])) {
      const vagasConhecidas = lista.every((c) => c.vagas !== null);
      const vagasTotal = vagasConhecidas
        ? lista.reduce((acc, c) => acc + (c.vagas ?? 0), 0)
        : grupos.size === 1 && todosMedicos
          ? item.vagas
          : null;
      const remuneracoes = lista.map((c) => c.remuneracao).filter((v): v is number => v !== null);
      const subcategoria =
        tag === 'medicina-geral-especialidades'
          ? lista.some((c) => c.subcategoria === 'clinico-esf-plantonista')
            ? 'clinico-esf-plantonista'
            : 'especialidades'
          : null;
      const bruto = {
        id: gerarIdConcurso({ uf, cidade, orgao: item.orgao, tag, ano }),
        titulo: item.titulo,
        orgao: item.orgao,
        cidade,
        uf,
        tipo,
        tag,
        subcategoria,
        cargos: lista,
        vagasTotal,
        remuneracaoMax: remuneracoes.length ? Math.max(...remuneracoes) : item.remuneracaoMax,
        cargaHoraria: lista.find((c) => c.cargaHoraria)?.cargaHoraria ?? null,
        banca,
        inscricoes,
        dataProva,
        editalUrl: detalhe?.editalUrl ?? item.url,
        inscricaoUrl: null,
        relacionados: [],
        fonte: item.fonte,
        fonteUrl: item.url,
        ano,
        edital: numeroEdital(`${item.titulo}\n${detalhe?.titulo ?? ''}\n${textoDetalhe}\n${detalhe?.observacoes.join('\n') ?? ''}`),
        // Data da notícia, quando a fonte informa: um edital antigo encontrado agora (ex.: ao ampliar a cobertura)
        // não ganha o selo NOVO; "novo" = publicado nos últimos 7 dias.
        firstSeenAt: inicioDaNoticia(detalhe?.publicadoEm, agora),
        lastSeenAt: iso,
        isNew: true,
        observacoes: detalhe?.observacoes.length ? detalhe.observacoes.join(' · ') : null,
      };
      const r = ConcursoSchema.safeParse(bruto);
      if (r.success) saida.push(r.data);
      else {
        const problema = r.error.issues[0];
        console.log(`[radar]   ! registro descartado (${item.orgao} · ${tag}): ${problema?.path.join('.')} — ${problema?.message}`);
      }
    }
  }
  return saida;
}

/** Item do site de banca que já cita médicos no título → registro próprio. */
export function construirDeBanca(item: ItemBanca, geo: Geo, agora: Date): Concurso[] {
  if (!item.uf) return [];
  const [orgaoLimpo = item.orgao, ...resto] = item.orgao.split(/\s{2,}| — | – /);
  const textoCargos = [resto.join(' '), item.descricao].join(' ');
  if (!textoMencionaMedicina(textoCargos) && !textoMencionaMedicina(orgaoLimpo)) return [];
  const listagem: ItemListagem = {
    fonte: item.fonte,
    url: item.url,
    orgao: orgaoLimpo.replace(/\/(PR|SC|RS)\b/, '').trim(),
    titulo: `${item.banca}: ${item.orgao.replace(/\s+/g, ' ')}${item.descricao ? ` — ${item.descricao}` : ''}`,
    uf: item.uf,
    cargosTexto: textoCargos.replace(/\s+e\s+/g, ', '),
    vagas: null,
    remuneracaoMax: null,
    escolaridade: '',
    inscricoes: { inicio: null, fim: item.inscricoesFim },
    incompleto: true,
  };
  return construirConcursos({ item: listagem, detalhe: null, geo, agora }).map((c) => ({
    ...c,
    banca: item.banca,
    inscricaoUrl: item.url,
    cidade: c.cidade === 'Não informada' ? (geo.cidadeNoTexto(item.orgao, item.uf as UF) ?? c.cidade) : c.cidade,
  }));
}

/** Liga concursos de outras fontes às páginas oficiais das bancas do mesmo órgão/cidade. */
export function enriquecerComBancas(concursos: Concurso[], itens: ItemBanca[], geo: Geo): Concurso[] {
  return concursos.map((c) => {
    const relacionados = [...c.relacionados];
    let inscricaoUrl = c.inscricaoUrl;
    for (const b of itens) {
      if (b.uf !== c.uf) continue;
      const cidadeBanca = geo.cidadeNoTexto(b.orgao, c.uf) ?? geo.municipioOficial(b.orgao.replace(/^(Prefeitura|C[âa]mara|Munic[íi]pio)( Municipal)? d[eoa]s? /i, '').replace(/\/(PR|SC|RS).*$/, ''), c.uf);
      if (!cidadeBanca || cidadeBanca !== c.cidade) continue;
      const mesmoTipoOrgao =
        /c[âa]mara/i.test(b.orgao) === /c[âa]mara/i.test(c.orgao) && /hospital|funda[çc][ãa]o|cons[óo]rcio/i.test(b.orgao) === /hospital|funda[çc][ãa]o|cons[óo]rcio/i.test(c.orgao);
      if (!mesmoTipoOrgao) continue;
      if (c.banca === b.banca && !inscricaoUrl) inscricaoUrl = b.url;
      if (relacionados.some((r) => r.url === b.url)) continue;
      const prazo = b.inscricoesFim ? ` (inscrições até ${b.inscricoesFim.split('-').reverse().slice(0, 2).join('/')})` : '';
      relacionados.push({ rotulo: `${b.banca} — ${b.orgao.replace(/\s+/g, ' ')}${b.descricao ? `: ${b.descricao}` : ''}${prazo}`, url: b.url });
    }
    return { ...c, relacionados, inscricaoUrl };
  });
}
