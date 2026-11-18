import { normalizar, semAcentos } from './normalize';
import { UFS, type UF } from './schema';

/**
 * Escopo geográfico estrito: PR, SC e RS.
 * A lista de municípios (IBGE) é injetada para que o app não precise embarcá-la.
 */
export type MunicipiosPorUF = Record<UF, string[]>;

export interface Geo {
  /** UF a partir de uma sigla isolada no texto ("- PR", "/SC", "(RS)"). */
  ufPorSigla(texto: string): UF | null;
  /** UF por nome do estado ("Paraná", "Santa Catarina", "Rio Grande do Sul", "gaúcho", "catarinense", "paranaense"). */
  ufPorNomeEstado(texto: string): UF | null;
  /** Nome oficial do município se `nome` for um município da UF. */
  municipioOficial(nome: string, uf: UF): string | null;
  /** UFs em que existe município com esse nome. */
  ufsDoMunicipio(nome: string): UF[];
  /** Melhor cidade encontrada no texto para a UF (padrões explícitos primeiro, depois busca livre). */
  cidadeNoTexto(texto: string, uf: UF): string | null;
  /** Todas as UFs do Sul mencionadas (sigla, nome do estado ou cidades grandes). */
  ufsMencionadas(texto: string): UF[];
}

const NOME_ESTADO: Record<UF, RegExp> = {
  PR: /\bparana\b|\bparanaense/,
  SC: /\bsanta catarina\b|\bcatarinense/,
  RS: /\brio grande do sul\b|\bgauch[oa]/,
};

/** Cidades-polo usadas para detectar lotação de órgãos nacionais (EBSERH, TRTs etc.). */
const POLOS: Record<UF, string[]> = {
  PR: ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Cascavel', 'Foz do Iguaçu', 'Guarapuava'],
  SC: ['Florianópolis', 'Joinville', 'Blumenau', 'Chapecó', 'Criciúma', 'Itajaí', 'Lages'],
  RS: ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Passo Fundo', 'Canoas'],
};

/** Siglas de hospitais universitários/universidades federais do Sul (lotação de EBSERH e afins). */
const SIGLAS_INSTITUICOES: Record<UF, RegExp> = {
  PR: /\b(HC[- ]?UFPR|CHC[- ]?UFPR|UFPR|UTFPR|UNILA|HU[- ]?UEL|HU[- ]?UEM|HU[- ]?UNIOESTE)\b/,
  SC: /\b(HU[- ]?UFSC|UFSC|UFFS|HU[- ]?Polydoro)\b/i,
  RS: /\b(HUSM|UFSM|HU[- ]?FURG|FURG|HE[- ]?UFPel|UFPel|UFRGS|UFCSPA|UNIPAMPA|HCPA|GHC)\b/i,
};

/** Municípios cujo nome é palavra comum demais para busca livre (só valem em padrões explícitos). */
const AMBIGUOS = new Set(
  [
    'Planalto', 'Saudades', 'Progresso', 'Formosa', 'Paraíso', 'Princesa', 'Bandeirante', 'Sertão', 'Itá', 'Ipê',
    'Liberdade', 'Esperança', 'Vitória', 'Bom Jesus', 'Bom Retiro', 'Água Doce', 'Sul Brasil', 'Mato Leitão',
    'Coronel Freitas', 'Nova Prata', 'Iporã', 'Cruzeiro do Sul', 'Salto', 'Barracão', 'Guarani', 'Paraná',
    'Mariópolis', 'Ouro', 'Prata', 'Glória', 'Garibaldi', 'Colorado', 'Imbituva', 'Palmas', 'Cerro Grande',
    'Santo Antônio', 'São João', 'São José', 'São Pedro', 'Serra Alta', 'Rio Bonito', 'Boa Vista', 'Alvorada',
    'Pinhal', 'Ivaí', 'Agudo', 'Estrela', 'Encantado', 'Harmonia', 'Riqueza', 'Tunas', 'Campina', 'Diamante',
    'Ventania', 'Getúlio Vargas', 'Rio Grande', 'Santa Maria', 'Gramado', 'Canela', 'Fortaleza', 'Nova Esperança',
  ].map((n) => normalizar(n)),
);

export function criarGeo(municipios: MunicipiosPorUF): Geo {
  const porUf = new Map<UF, Map<string, string>>();
  const ufsPorNome = new Map<string, UF[]>();
  for (const uf of UFS) {
    const mapa = new Map<string, string>();
    for (const nome of municipios[uf] ?? []) {
      const chave = normalizar(nome);
      mapa.set(chave, nome);
      ufsPorNome.set(chave, [...(ufsPorNome.get(chave) ?? []), uf]);
    }
    porUf.set(uf, mapa);
  }

  // Para busca livre: nomes ordenados do mais longo para o mais curto ("São José dos Pinhais" antes de "São José").
  const buscaLivre = new Map<UF, { chave: string; re: RegExp; nome: string }[]>();
  for (const uf of UFS) {
    const lista = [...(porUf.get(uf)?.entries() ?? [])]
      .filter(([chave]) => !AMBIGUOS.has(chave) && chave.length >= 5)
      .sort((a, b) => b[0].length - a[0].length)
      .map(([chave, nome]) => ({
        chave,
        nome,
        // Casa no texto sem acentos, respeitando maiúscula inicial de cada palavra.
        re: new RegExp(`(^|[^A-Za-z])${escapeRe(semAcentos(nome))}(?![A-Za-z])`),
      }));
    buscaLivre.set(uf, lista);
  }

  function municipioOficial(nome: string, uf: UF): string | null {
    return porUf.get(uf)?.get(normalizar(nome)) ?? null;
  }

  function ufsDoMunicipio(nome: string): UF[] {
    return ufsPorNome.get(normalizar(nome)) ?? [];
  }

  function ufPorSigla(texto: string): UF | null {
    const m = texto.match(/(?:^|[\s(/\-–,])(PR|SC|RS)(?=$|[\s)/\-–,.:;])/);
    return (m?.[1] as UF | undefined) ?? null;
  }

  function ufPorNomeEstado(texto: string): UF | null {
    const n = normalizar(texto);
    for (const uf of UFS) if (NOME_ESTADO[uf].test(n)) return uf;
    return null;
  }

  function cidadeNoTexto(texto: string, uf: UF): string | null {
    const limpo = texto.replace(/\s+/g, ' ');
    const PALAVRA = `[A-ZÀ-Ý][\\wÀ-ÿ'’-]*`;
    const CONECTIVO = `(?:d[eoa]s?|e|D'|d')`;
    const NOME = `${PALAVRA}(?: (?:${CONECTIVO} )?${PALAVRA}){0,4}`;

    // 1. "Prefeitura (Municipal) de X", "Câmara de X", "município/cidade de X" → testa prefixos do candidato
    const porPrefixo = [
      new RegExp(`(?:Prefeitura|C[âa]mara|Munic[íi]pio|Fundo Municipal de Sa[úu]de|Secretaria Municipal de Sa[úu]de)(?: Municipal)? d[eoa]s? (${NOME})`, 'g'),
      new RegExp(`(?:munic[íi]pio|cidade) de (${NOME})`, 'g'),
    ];
    for (const re of porPrefixo) {
      for (const m of limpo.matchAll(re)) {
        const palavras = (m[1] ?? '').trim().split(' ');
        for (let n = palavras.length; n >= 1; n--) {
          const oficial = municipioOficial(palavras.slice(0, n).join(' '), uf);
          if (oficial) return oficial;
        }
      }
    }

    // 2. "X/UF", "X - UF", "X (UF)" → testa sufixos, ignorando nomes de instituição
    //    ("Fundação Hospitalar Getúlio Vargas - RS" não é o município de Getúlio Vargas).
    const INSTITUICAO =
      /^(Funda[çc][ãa]o|Hospital|Instituto|Universidade|Cons[óo]rcio|Associa[çc][ãa]o|Secretaria|Companhia|Servi[çc]o|Departamento|Empresa|Centro|Conselho|Pol[íi]cia|Tribunal|Minist[ée]rio|Superintend[êe]ncia|Ag[êe]ncia|Autarquia|Faculdade|Escola|Grupo|Complexo|Irmandade|Santa Casa|Caixa|Banco)\b/;
    const porSufixo = new RegExp(`(${NOME}) ?(?:\\/| - | – |\\()(?:PR|SC|RS)\\b`, 'g');
    for (const m of limpo.matchAll(porSufixo)) {
      const candidato = (m[1] ?? '').trim();
      if (!candidato || INSTITUICAO.test(candidato)) continue;
      const palavras = candidato.split(' ');
      for (let ini = 0; ini < palavras.length; ini++) {
        const oficial = municipioOficial(palavras.slice(ini).join(' '), uf);
        if (oficial) return oficial;
      }
    }
    // 2. Busca livre por nomes não ambíguos
    const textoSemAcento = semAcentos(limpo);
    for (const { re, nome } of buscaLivre.get(uf) ?? []) {
      if (re.test(textoSemAcento)) return nome;
    }
    return null;
  }

  function ufsMencionadas(texto: string): UF[] {
    const achadas = new Set<UF>();
    const sigla = texto.matchAll(/(?:^|[\s(/\-–,])(PR|SC|RS)(?=$|[\s)/\-–,.:;])/g);
    for (const m of sigla) achadas.add(m[1] as UF);
    const n = normalizar(texto);
    for (const uf of UFS) {
      if (NOME_ESTADO[uf].test(n)) achadas.add(uf);
      if (POLOS[uf].some((c) => n.includes(normalizar(c)))) achadas.add(uf);
      if (SIGLAS_INSTITUICOES[uf].test(texto)) achadas.add(uf);
    }
    return UFS.filter((u) => achadas.has(u));
  }

  return { ufPorSigla, ufPorNomeEstado, municipioOficial, ufsDoMunicipio, cidadeNoTexto, ufsMencionadas };
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Capital de cada UF — usada como cidade de órgãos estaduais sem município explícito. */
export const CAPITAL: Record<UF, string> = { PR: 'Curitiba', SC: 'Florianópolis', RS: 'Porto Alegre' };
