import { normalizar, semAcentos } from './normalize';
import { UFS, type UF } from './schema';

/**
 * Geografia do Radar: as 27 UFs. Usada só pelo robô (scripts/) — a lista de municípios do IBGE
 * (scripts/data/municipios-brasil.json) é injetada para que o app não precise embarcá-la.
 */
export type MunicipiosPorUF = Partial<Record<UF, string[]>>;

export interface Geo {
  /** UF a partir de uma sigla isolada no texto ("- PR", "/SC", "(RS)"). */
  ufPorSigla(texto: string): UF | null;
  /** UF por nome do estado ("Paraná", "Santa Catarina", "gaúcho", "capixaba"...). */
  ufPorNomeEstado(texto: string): UF | null;
  /** Nome oficial do município se `nome` for um município da UF. */
  municipioOficial(nome: string, uf: UF): string | null;
  /** UFs em que existe município com esse nome. */
  ufsDoMunicipio(nome: string): UF[];
  /** Melhor cidade encontrada no texto para a UF (padrões explícitos primeiro, depois busca livre). */
  cidadeNoTexto(texto: string, uf: UF): string | null;
  /** Todas as UFs mencionadas (sigla com delimitador, nome do estado, cidades-polo ou instituições). */
  ufsMencionadas(texto: string): UF[];
}

/** Nome do estado e gentílico, no texto normalizado (minúsculo, sem acento). */
const NOME_ESTADO: Record<UF, RegExp> = {
  PR: /\bparana\b|\bparanaense/,
  SC: /\bsanta catarina\b|\bcatarinense/,
  RS: /\brio grande do sul\b|\bgauch[oa]/,
  SP: /\bestado de sao paulo\b|\bpaulista(s)?\b/,
  RJ: /\bestado do rio de janeiro\b|\bfluminense/,
  MG: /\bminas gerais\b|\bmineir[oa]s?\b(?! de)/,
  ES: /\bespirito santo\b(?! d[eo])|\bcapixaba/,
  DF: /\bdistrito federal\b/,
  GO: /\bestado de goias\b|\bgoian[oa]s?\b/,
  MT: /\bmato grosso\b(?! do sul)|\bmato-grossense/,
  MS: /\bmato grosso do sul\b|\bsul-mato-grossense/,
  BA: /\bbahia\b|\bbaian[oa]s?\b/,
  SE: /\bsergipe\b|\bsergipan[oa]/,
  AL: /\balagoas\b|\balagoan[oa]/,
  PE: /\bpernambuco\b|\bpernambucan[oa]/,
  PB: /(?<!vale do )\bparaiba\b(?! do sul)|\bparaiban[oa]/,
  RN: /\brio grande do norte\b|\bpotiguar/,
  CE: /\bceara\b(?!-mirim| mirim)|\bcearense/,
  PI: /\bpiaui\b|\bpiauiense/,
  MA: /\bmaranhao\b|\bmaranhense/,
  AM: /\bamazonas\b|\bamazonense/,
  // "pará" sem acento é a preposição "para": só com contexto explícito.
  PA: /\b(estado|governo|belem|sul|sudeste|norte|nordeste|oeste|interior) do para\b|\bparaense/,
  AC: /\bacre\b|\bacrean[oa]/,
  RO: /\brondonia\b|\brondoniense/,
  RR: /\broraima\b|\broraimense/,
  AP: /\bamapa\b|\bamapaense/,
  TO: /\btocantins\b|\btocantinense/,
};

/**
 * Cidades-polo usadas para detectar a lotação de órgãos nacionais (EBSERH, Ministério da Saúde, TRTs...).
 * Casadas com maiúscula inicial e palavra inteira. Fora da lista: nomes que são palavras comuns ou se repetem
 * em vários estados (Natal, Boa Vista, Campo Grande, Vitória, Palmas, Brasília — esta aparece em toda notícia
 * de órgão federal); esses estados dependem da sigla ou do nome do estado.
 */
const POLOS: Record<UF, string[]> = {
  PR: ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Cascavel', 'Foz do Iguaçu', 'Guarapuava'],
  SC: ['Florianópolis', 'Joinville', 'Blumenau', 'Chapecó', 'Criciúma', 'Itajaí', 'Lages'],
  RS: ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Passo Fundo', 'Canoas'],
  SP: ['São Paulo', 'Campinas', 'Ribeirão Preto', 'Santos', 'São José dos Campos', 'Sorocaba', 'Botucatu'],
  RJ: ['Rio de Janeiro', 'Niterói', 'Duque de Caxias', 'Nova Iguaçu', 'Campos dos Goytacazes'],
  MG: ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora', 'Montes Claros', 'Uberaba'],
  ES: ['Vila Velha', 'Cariacica', 'Linhares', 'Cachoeiro de Itapemirim'],
  DF: ['Taguatinga', 'Ceilândia'],
  GO: ['Goiânia', 'Anápolis', 'Aparecida de Goiânia'],
  MT: ['Cuiabá', 'Rondonópolis', 'Várzea Grande', 'Sinop'],
  MS: ['Dourados', 'Três Lagoas', 'Corumbá'],
  BA: ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Ilhéus', 'Itabuna'],
  SE: ['Aracaju', 'Nossa Senhora do Socorro'],
  AL: ['Maceió', 'Arapiraca'],
  PE: ['Recife', 'Caruaru', 'Petrolina', 'Olinda', 'Jaboatão dos Guararapes'],
  PB: ['João Pessoa', 'Campina Grande'],
  RN: ['Mossoró', 'Parnamirim'],
  CE: ['Fortaleza', 'Juazeiro do Norte', 'Sobral'],
  PI: ['Teresina', 'Parnaíba'],
  MA: ['São Luís', 'Imperatriz', 'Timon'],
  AM: ['Manaus', 'Parintins'],
  PA: ['Belém', 'Ananindeua', 'Santarém', 'Marabá'],
  AC: ['Rio Branco'],
  RO: ['Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Vilhena'],
  RR: [],
  AP: ['Macapá'],
  TO: ['Araguaína', 'Gurupi'],
};

/** Siglas de hospitais universitários e universidades federais (lotação de EBSERH e afins). */
const SIGLAS_INSTITUICOES: Partial<Record<UF, RegExp>> = {
  PR: /\b(HC[- ]?UFPR|CHC[- ]?UFPR|UFPR|UTFPR|UNILA|HU[- ]?UEL|HU[- ]?UEM|HU[- ]?UNIOESTE)\b/,
  SC: /\b(HU[- ]?UFSC|UFSC|UFFS|HU[- ]?Polydoro)\b/i,
  RS: /\b(HUSM|UFSM|HU[- ]?FURG|FURG|HE[- ]?UFPel|UFPel|UFRGS|UFCSPA|UNIPAMPA|HCPA|GHC)\b/i,
  SP: /\b(UNIFESP|UFSCar|HU[- ]?UFSCar|HC[- ]?FMUSP|HCFMRP)\b/,
  RJ: /\b(UFRJ|UNIRIO|HUGG|HUAP|UFF|UFRRJ)\b/,
  MG: /\b(UFMG|HC[- ]?UFMG|UFJF|HU[- ]?UFJF|UFU|HC[- ]?UFU|UFTM|HC[- ]?UFTM|UFSJ|UFOP|UFV|UFLA|UFVJM|UNIFAL)\b/,
  ES: /\b(UFES|HUCAM)\b/,
  DF: /\b(UnB|HUB)\b/,
  GO: /\b(UFG|HC[- ]?UFG|UFJ)\b/,
  MT: /\b(UFMT|HUJM)\b/,
  MS: /\b(UFMS|HUMAP|UFGD|HU[- ]?UFGD)\b/,
  BA: /\b(UFBA|HUPES|UFRB|UFOB|UNIVASF)\b/,
  SE: /\b(UFS|HU[- ]?UFS)\b/,
  AL: /\b(UFAL|HUPAA)\b/,
  PE: /\b(UFPE|HC[- ]?UFPE|UFRPE)\b/,
  PB: /\b(UFPB|HULW|UFCG|HUAC|HUJB)\b/,
  RN: /\b(UFRN|HUOL|MEJC|HUAB|UFERSA)\b/,
  CE: /\b(HUWC|MEAC|UFCA)\b/,
  PI: /\b(UFPI|HU[- ]?UFPI)\b/,
  MA: /\b(UFMA|HU[- ]?UFMA)\b/,
  AM: /\b(UFAM|HUGV)\b/,
  PA: /\b(UFPA|HUJBB|HUBFS|UFOPA|UNIFESSPA)\b/,
  AC: /\b(UFAC)\b/,
  RO: /\b(UNIR)\b/,
  RR: /\b(UFRR|HU[- ]?UFRR)\b/,
  AP: /\b(UNIFAP|HU[- ]?UNIFAP)\b/,
  TO: /\b(UFT|HDT[- ]?UFT|UFNT)\b/,
};

/** Siglas que não são palavras comuns: valem também depois de espaço ou vírgula ("Chapecó, SC"). */
const SIGLAS_FORTES: readonly UF[] = ['PR', 'SC', 'RS', 'SP', 'RJ', 'MG', 'DF', 'MS', 'RN', 'RR', 'BA', 'PB'];
/** As demais (ES, AL, PA, MA, SE, TO, AM, AP, PI, CE, PE, GO, AC, MT, RO) só com "/", "-" ou "(" antes. */
const FIM_SIGLA = '(?=$|[\\s)/\\-–,.:;])';
const RE_SIGLA = new RegExp(
  `(?:(?:^|[\\s,])(${SIGLAS_FORTES.join('|')})${FIM_SIGLA}|(?:\\/|\\(|-|–)\\s?(${UFS.join('|')})${FIM_SIGLA})`,
  'g',
);

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
    // Brasil
    'Natal', 'Salvador', 'Belém', 'Campo Grande', 'Rio Branco', 'Serra', 'Bonito', 'Central', 'Independência',
    'Feliz', 'Jardim', 'Lagoa', 'Campos', 'Alegre', 'Brasil', 'União', 'Presidente', 'Governador', 'Itaú',
    'Paulista', 'Mineiros', 'Cristal', 'Arroio', 'Areia', 'Pedra', 'Pedras', 'Ribeirão', 'Tabuleiro', 'Floresta',
    'Brejo', 'Vertentes', 'Canaã', 'Nazaré', 'Aurora', 'Horizonte', 'Estância', 'Goiás', 'Bahia', 'Tocantins',
    'Amazonas', 'Acre', 'Sergipe', 'Alagoas', 'Pernambuco', 'Paraíba', 'Ceará', 'Piauí', 'Maranhão', 'Rondônia',
    'Mirador', 'Socorro', 'Conquista', 'Triunfo', 'Lajes', 'Novo Horizonte', 'Santana', 'Santa Rita',
    'Santa Luzia', 'Santa Helena', 'Cachoeira', 'Capela', 'Carmo', 'Coração de Jesus', 'Divino', 'Messias',
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

  const polos = new Map<UF, RegExp[]>(
    UFS.map((uf) => [uf, POLOS[uf].map((c) => new RegExp(`(^|[^A-Za-z])${escapeRe(semAcentos(c))}(?![A-Za-z])`))]),
  );

  function municipioOficial(nome: string, uf: UF): string | null {
    return porUf.get(uf)?.get(normalizar(nome)) ?? null;
  }

  function ufsDoMunicipio(nome: string): UF[] {
    return ufsPorNome.get(normalizar(nome)) ?? [];
  }

  function siglasNoTexto(texto: string): UF[] {
    return [...texto.matchAll(RE_SIGLA)].map((m) => (m[1] ?? m[2]) as UF);
  }

  function ufPorSigla(texto: string): UF | null {
    return siglasNoTexto(texto)[0] ?? null;
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
    const porSufixo = new RegExp(`(${NOME}) ?(?:\\/| - | – |\\()(?:${UFS.join('|')})\\b`, 'g');
    for (const m of limpo.matchAll(porSufixo)) {
      const candidato = (m[1] ?? '').trim();
      if (!candidato || INSTITUICAO.test(candidato)) continue;
      const palavras = candidato.split(' ');
      for (let ini = 0; ini < palavras.length; ini++) {
        const oficial = municipioOficial(palavras.slice(ini).join(' '), uf);
        if (oficial) return oficial;
      }
    }
    // 3. Busca livre por nomes não ambíguos
    const textoSemAcento = semAcentos(limpo);
    for (const { re, nome } of buscaLivre.get(uf) ?? []) {
      if (re.test(textoSemAcento)) return nome;
    }
    return null;
  }

  function ufsMencionadas(texto: string): UF[] {
    const achadas = new Set<UF>(siglasNoTexto(texto));
    const n = normalizar(texto);
    const semAcento = semAcentos(texto);
    for (const uf of UFS) {
      if (NOME_ESTADO[uf].test(n)) achadas.add(uf);
      if (polos.get(uf)?.some((re) => re.test(semAcento))) achadas.add(uf);
      if (SIGLAS_INSTITUICOES[uf]?.test(texto)) achadas.add(uf);
    }
    return UFS.filter((u) => achadas.has(u));
  }

  return { ufPorSigla, ufPorNomeEstado, municipioOficial, ufsDoMunicipio, cidadeNoTexto, ufsMencionadas };
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Capital de cada UF — usada como cidade de órgãos estaduais sem município explícito. */
export const CAPITAL: Record<UF, string> = {
  PR: 'Curitiba', SC: 'Florianópolis', RS: 'Porto Alegre',
  SP: 'São Paulo', RJ: 'Rio de Janeiro', MG: 'Belo Horizonte', ES: 'Vitória',
  DF: 'Brasília', GO: 'Goiânia', MT: 'Cuiabá', MS: 'Campo Grande',
  BA: 'Salvador', SE: 'Aracaju', AL: 'Maceió', PE: 'Recife', PB: 'João Pessoa', RN: 'Natal', CE: 'Fortaleza', PI: 'Teresina', MA: 'São Luís',
  AM: 'Manaus', PA: 'Belém', AC: 'Rio Branco', RO: 'Porto Velho', RR: 'Boa Vista', AP: 'Macapá', TO: 'Palmas',
};
