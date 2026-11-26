import { chaveCargo, normalizar } from './normalize';
import type { Subcategoria, TagCargo } from './schema';

/**
 * Classificador de vagas médicas.
 * 1. Exclusões (profissões não médicas que contêm "médic", "perito", "plantonista"...).
 * 2. Inclusões (médico/a, medicina, legista, perito médico, especialidades médicas).
 * 3. Tag: medico-legista > pericia-medica > medicina-do-trabalho > medicina-geral-especialidades.
 * 4. Acesso: vagas que o generalista (sem RQE) pode disputar × vagas que exigem especialidade
 *    (ver acessoDe em schema.ts). Médico do Trabalho exige especialização (NR-04 remete ao CFM).
 */

const EXCLUSOES = [
  /veterinari/,
  /enfermeir/,
  /\btecnic[oa]s?\b/,
  /\bauxiliar(es)?\b/,
  /assistente (social|administrativ)/,
  /\bagente\b/,
  /fisic[oa]s? medic/,
  /fisioterapeut/,
  /odontolog/,
  /odontolegist/,
  /dentista/,
  /bucomaxilo/,
  /farmaceutic/,
  /bioquimic/,
  /biomedic/,
  /psicolog/,
  /nutricionista/,
  /fonoaudiolog/,
  /terapeuta ocupacional/,
  /assistente social/,
  /secretari/,
  /recepcionista/,
  /motorista/,
  /socorrista/,
  /condutor/,
  /tecnolog/,
  /instrumentador/,
  /perito criminal/,
  /perito oficial criminal/,
  /papiloscopist/,
  /\bdocente\b|\bprofessor/,
  /estudante|academico|estagi/,
  /residencia medica|residente/,
  /engenheir/,
  /medico[- ]hospitalar|medico[- ]odontolog|medico[- ]social|medico[- ]cirurgic/,
];

/** Palavras que, antes de "Médico", indicam adjetivo ("Laudo Médico") e não cargo. */
const ANTES_ADJETIVO =
  /(atestado|atestados|laudo|laudos|exame|exames|pericia|relatorio|parecer|avaliacao|inspecao|acompanhamento|atendimento|servico|servicos|consultorio|prontuario|plano|convenio|assistencia|tratamento|encaminhamento|afastamento|certificado|boletim|sigilo|auxilio|corpo|area|carater|uso|cuidado|cuidados|seguro|licenca|declaracao|receituario|parecer|ato|atos|conselho|regulacao|orientacao|supervisao|equipe|junta|clinica|residencia)\s*$/;

/** Profissões não médicas que podem anteceder um nome de especialidade ("Enfermeiro Intensivista"). */
const ANTES_PROFISSAO =
  /(enfermeir[oa]s?|fisioterapeutas?|tecnic[oa]s?( em| de)?|engenheir[oa]s?|nutricionistas?|psicolog[oa]s?|farmaceutic[oa]s?|odontolog[oa]s?|dentistas?|fonoaudiolog[oa]s?|biomedic[oa]s?|auxiliar(es)?( de| em)?|enfermagem|fisioterapia|veterinari[oa]s?)\s*$/;

const ESPECIALIDADES = [
  'psiquiatra', 'pediatra', 'neonatologista', 'ginecologista', 'obstetra', 'ginecologista e obstetra',
  'anestesiologista', 'anestesista', 'cardiologista', 'ortopedista', 'traumatologista', 'neurologista',
  'neuropediatra', 'neurocirurgiao', 'dermatologista', 'endocrinologista', 'gastroenterologista',
  'infectologista', 'nefrologista', 'oftalmologista', 'otorrinolaringologista', 'otorrino', 'pneumologista',
  'reumatologista', 'urologista', 'radiologista', 'geriatra', 'hematologista', 'oncologista', 'intensivista',
  'mastologista', 'proctologista', 'coloproctologista', 'angiologista', 'cirurgiao geral', 'cirurgiao vascular',
  'cirurgiao pediatrico', 'cirurgiao plastico', 'cirurgiao toracico', 'cirurgiao cardiovascular',
  'nutrologo', 'homeopata', 'patologista', 'medicina de familia', 'familia e comunidade', 'emergencista',
  'hepatologista', 'alergista', 'imunologista', 'fisiatra', 'ultrassonografista', 'ecografista',
  'endoscopista', 'cancerologista', 'psiquiatra infantil', 'hebiatra',
];
/**
 * Áreas que, no formato "Médico (Área)" (ex.: GHC), são especialidades com residência reconhecidas pelo CFM.
 * Só para classificar: não entram na extração de cargos de texto livre (gerariam falsos cargos).
 */
const RE_AREA_ESPECIALIDADE = /medicina de emergencia|medicina intensiva|medicina da dor|anestesiologia|medicina do adolescente|terapia intensiva/;
const RE_ESPECIALIDADE = new RegExp(`\\b(${ESPECIALIDADES.map((e) => e.replace(/ /g, '\\s+')).join('|')})s?\\b`);

const RE_MEDICO = /\bmedic[oa]s?\b|\bmedicina\b/;
const RE_LEGISTA = /\blegista\b|perito medico[- ]?legista|perito oficial medico|medicina legal|\biml\b/;
const RE_PERITO_MEDICO = /\bperit[oa]s? medic[oa]s?\b|\bmedic[oa]s? perit[oa]s?\b/;
/** Perícia médica não criminal: INSS/Perícia Médica Federal, RPPS, juntas médicas, auditoria. */
const RE_PERICIA = /pericia medica|\bperit[oa]s? medic[oa]s?\b|\bmedic[oa]s? perit[oa]s?\b|junta medica|\bmedic[oa]s? auditor(es|a|as)?\b|auditoria medica/;
const RE_TRABALHO = /medic[oa]s? do trabalho|medicina do trabalho|saude ocupacional|medicina ocupacional|medic[oa]s? ocupacional|medic[oa]s? do trabalhador/;
const RE_CLINICO_ESF =
  /clinic[oa] geral|clinica medica|medic[oa]s? clinic[oa]|generalista|\besf\b|estrategia (de )?saude da familia|saude da familia|\bpsf\b|plantonista|plantao|\bubs\b|atencao (basica|primaria)|pronto[- ]atendimento|pronto[- ]socorro|\bupa\b|urgencia|emergencia|\bsamu\b|medic[oa]s? (de|da) familia|\bmedic[oa]s?\s*(i{1,3}|iv|20 ?h|40 ?h|20 horas|40 horas|\d+ horas)?\s*$/;
/** Nome que deixa explícito o cargo generalista mesmo citando uma área ("Clínico Geral — Saúde Mental"). */
const RE_GENERALISTA_EXPLICITO = /clinic[oa] geral|generalista|\besf\b|\bpsf\b|saude da familia|atencao (basica|primaria)/;

/** A vaga exige graduação em Medicina? */
export function isCargoMedico(nome: string): boolean {
  const n = normalizar(nome);
  if (!n) return false;
  // "Médico Veterinário", "Técnico em ...", "Físico Médico" etc.
  if (EXCLUSOES.some((re) => re.test(n))) return false;
  if (/cirurgiao[- ]dentista/.test(n)) return false;
  return RE_MEDICO.test(n) || RE_LEGISTA.test(n) || RE_PERITO_MEDICO.test(n) || RE_ESPECIALIDADE.test(n);
}

export interface Classificacao {
  tag: TagCargo;
  subcategoria: Subcategoria | null;
}

/** Classifica uma vaga já reconhecida como médica. */
export function classificarCargo(nome: string): Classificacao {
  const n = normalizar(nome);
  if (RE_LEGISTA.test(n)) return { tag: 'medico-legista', subcategoria: null };
  if (RE_PERICIA.test(n)) return { tag: 'pericia-medica', subcategoria: null };
  if (RE_TRABALHO.test(n)) return { tag: 'medicina-do-trabalho', subcategoria: null };
  // "Médico Plantonista Pediatra" é vaga de especialista; "Clínico Geral" nunca é.
  if ((RE_ESPECIALIDADE.test(n) || RE_AREA_ESPECIALIDADE.test(n)) && !RE_GENERALISTA_EXPLICITO.test(n)) {
    return { tag: 'medicina-geral-especialidades', subcategoria: 'especialidades' };
  }
  if (RE_CLINICO_ESF.test(n) || /^medic[oa]s?$/.test(n)) {
    return { tag: 'medicina-geral-especialidades', subcategoria: 'clinico-esf-plantonista' };
  }
  if (RE_ESPECIALIDADE.test(n)) return { tag: 'medicina-geral-especialidades', subcategoria: 'especialidades' };
  // "Médico Cardiologista" já cai em especialidade; "Médico" + palavra desconhecida → especialidade.
  const resto = n.replace(/\bmedic[oa]s?\b/g, '').trim();
  return {
    tag: 'medicina-geral-especialidades',
    subcategoria: resto.length > 2 ? 'especialidades' : 'clinico-esf-plantonista',
  };
}

/** Texto livre (título/manchete) menciona vagas médicas? Usado para decidir buscar a página de detalhe. */
export function textoMencionaMedicina(texto: string): boolean {
  const n = normalizar(texto)
    .replace(/medic[oa]s? veterinari\w*/g, ' ')
    .replace(/medicina veterinaria/g, ' ')
    .replace(/fisic[oa]s? medic[oa]s?/g, ' ')
    .replace(/(tecnic[oa]s?|auxiliar(es)?|assistentes?) (de |em )?(consultorio )?medic[oa]s?/g, ' ');
  return /\bmedic[oa]s?\b|\bmedicina\b|\blegista\b|perito medico|pericia medica/.test(n) || RE_ESPECIALIDADE.test(n);
}

/**
 * Manchete indica vaga para médico (e não docência/residência/estágio em Medicina)?
 * Usado quando a listagem não traz o nome do cargo e criamos um cargo genérico "Médico (ver edital)".
 */
export function tituloIndicaVagaMedica(titulo: string): boolean {
  if (!textoMencionaMedicina(titulo)) return false;
  const n = normalizar(titulo);
  return !/(professor|docente|magisterio|residencia|estagi|academic|bolsist|curso de medicina|vestibular|tutor\b)/.test(n);
}

/** Prioridade entre tags quando um registro agrega cargos de tags diferentes. */
export const PRIORIDADE_TAG: Record<TagCargo, number> = {
  'medico-legista': 0,
  'pericia-medica': 1,
  'medicina-do-trabalho': 2,
  'medicina-geral-especialidades': 3,
};

const RE_ORGAO_PERICIA_CRIMINAL = /policia (cientifica|civil)|\bigp\b|instituto[- ]geral de pericias|\biml\b|instituto medico[- ]legal|pericia oficial|superintendencia de policia tecnico/;

/**
 * "Perito Médico" num órgão de perícia criminal (Polícia Científica, IGP, IML) é o médico-legista;
 * nos demais órgãos (INSS, institutos de previdência, prefeituras) é perícia médica administrativa.
 */
export function ajustarTagPorOrgao<T extends { tag: TagCargo; subcategoria: Subcategoria | null }>(cargo: T, orgao: string): T {
  if (cargo.tag === 'pericia-medica' && RE_ORGAO_PERICIA_CRIMINAL.test(normalizar(orgao))) {
    return { ...cargo, tag: 'medico-legista', subcategoria: null };
  }
  return cargo;
}

/**
 * Extrai nomes de cargos médicos de linhas de texto livre (itens de lista, células, frases).
 * Ex.: "Médico Generalista, 20 horas semanais (2 vagas)" → "Médico Generalista".
 */
export function extrairNomesCargosMedicos(linhaOriginal: string): string[] {
  const nomes = new Map<string, string>();
  const adicionar = (nome: string) => {
    const chave = chaveCargo(nome);
    if (!nomes.has(chave)) nomes.set(chave, nome);
  };
  // Tabelas de edital em CAIXA ALTA ("MÉDICO CLÍNICO GERAL") → "Médico Clínico Geral" (mesmo comprimento).
  const linha = ajustarCaixa(linhaOriginal);
  // Mesmo comprimento do original: índices são reaproveitados entre as duas versões.
  const semAcento = linha.normalize('NFD').replace(/[̀-ͯ]/g, '');
  const linhaComparavel = semAcento.length === linha.length ? semAcento : linha;
  const cobertos: [number, number][] = [];

  // "Médico (Especialidade)" ou "Médico(a) [do|da|de] Palavra..." até 5 palavras.
  // "e" só conecta especialidades compostas (Ginecologista e Obstetra, Ortopedista e Traumatologista).
  const reMedico =
    /\b(?:Perit[oa]\s+)?M[ée]dic[oa]s?(?![- ](?:[Hh]ospitalar|[Oo]dontol|[Ss]ocial|[Cc]ir[úu]rgic))(?:[- ](?:Legista|Perito))?(?:\s*\((?=[A-ZÀ-Ý])(?!CR\))[^()\n]{2,80}\)|(?:[ \t]+(?:(?:do|da|de|dos|das|em)[ \t]+|e[ \t]+(?=Obstetr|Traumatolog))?(?:[A-ZÀ-Ý][\wÀ-ÿ'-]*|ESF|PSF|UBS|UPA|SAMU|I{1,3}|IV)){0,5}(?:[ \t]*\((?=[A-ZÀ-Ý])(?!CR\)|Cadastro|Ver\b|Vide\b)[^()\n]{2,60}\))?)/g;
  for (const m of linha.matchAll(reMedico)) {
    const idx = m.index ?? 0;
    const antes = normalizar(linhaComparavel.slice(Math.max(0, idx - 25), idx));
    if (ANTES_ADJETIVO.test(antes)) continue;
    cobertos.push([idx, idx + m[0].length]);
    const nome = limparNomeCargo(m[0]);
    if (nome && isCargoMedico(nome)) adicionar(nome);
  }
  // Texto corrido em minúsculas ("vagas para médico clínico geral e médica de família"): só com qualificador conhecido.
  const minusculas = linhaComparavel.toLowerCase();
  for (const m of minusculas.matchAll(RE_MEDICO_MINUSCULO)) {
    const idx = m.index ?? 0;
    if (cobertos.some(([a, b]) => idx >= a && idx < b)) continue;
    if (ANTES_ADJETIVO.test(normalizar(linhaComparavel.slice(Math.max(0, idx - 25), idx)))) continue;
    cobertos.push([idx, idx + m[0].length]);
    const nome = limparNomeCargo(capitalizarCargo(linha.slice(idx, idx + m[0].length)));
    if (nome && isCargoMedico(nome)) adicionar(nome);
  }
  // Especialistas sem a palavra "Médico" ("Psiquiatra", "Pediatra 20h")
  const reEsp = new RegExp(`\\b(${ESPECIALIDADES.map((e) => e.replace(/ /g, '\\s+')).join('|')})s?\\b`, 'gi');
  for (const m of linhaComparavel.matchAll(reEsp)) {
    const idx = m.index ?? 0;
    // Parte de "Médico X e Y" ou de "Médico Ginecologista/Obstetra"
    if (cobertos.some(([a, b]) => idx >= a && idx <= b + 2)) continue;
    const antes = normalizar(linhaComparavel.slice(Math.max(0, idx - 30), idx)).replace(/[^a-z]+$/, '');
    if (ANTES_PROFISSAO.test(antes)) continue;
    let inicio = idx;
    if (/medic[oa]s?(\s+e)?$/.test(antes)) {
      // "médico pediatra" em minúsculas (a regex principal só pega "Médico" capitalizado) → "Médico Pediatra".
      const prefixo = /m[ée]dic[oa]s?[ \t]+$/i.exec(linha.slice(Math.max(0, idx - 12), idx));
      if (!prefixo) continue;
      inicio = idx - prefixo[0].length;
      if (ANTES_ADJETIVO.test(normalizar(linhaComparavel.slice(Math.max(0, inicio - 25), inicio)))) continue;
    }
    const original = linha.slice(inicio, idx + m[0].length);
    const nome = limparNomeCargo(capitalizarCargo(original));
    if (nome && isCargoMedico(nome)) adicionar(nome);
  }
  return [...nomes.values()];
}

/** "médico" + qualificador de cargo generalista/área (texto sem acento, minúsculo). */
const RE_MEDICO_MINUSCULO =
  /\bmedic[oa]s?[ \t]+(?:(?:do|da|de|dos|das)[ \t]+)?(?:clinic[oa][ \t]+geral|clinica[ \t]+medica|generalista|plantonista|estrategia[ \t]+(?:de[ \t]+)?saude[ \t]+da[ \t]+familia|saude[ \t]+da[ \t]+familia|familia(?:[ \t]+e[ \t]+comunidade)?|esf|psf|trabalho|perit[oa]|legista|auditor|regulador|intervencionista|intensivista|emergencista)(?:e?s)?\b/g;

/** Siglas mantidas em caixa alta quando uma linha em CAIXA ALTA é normalizada. */
const SIGLAS_CAIXA = new Set([
  'ESF', 'PSF', 'UBS', 'UPA', 'SAMU', 'CAPS', 'SUS', 'NASF', 'UTI', 'CTI', 'RQE', 'PCD', 'CR', 'APS', 'CRM', 'CLT',
  'II', 'III', 'IV', 'VI', 'VII', 'VIII', 'IX', 'XI', 'XII', 'XIII', 'XIV', 'XV',
]);
const CONECTIVOS = new Set(['de', 'da', 'do', 'dos', 'das', 'e', 'em']);

/**
 * Palavras inteiras em caixa alta viram "Capitalizadas" (siglas conhecidas ficam, conectivos ficam minúsculos).
 * Preserva o comprimento da linha (os índices das regex são reaproveitados).
 */
export function ajustarCaixa(linha: string): string {
  if (!/[A-ZÀ-Þ]{3,}/.test(linha)) return linha;
  return linha.replace(/[A-Za-zÀ-ÖØ-öø-ÿ]+/g, (w) => {
    if (w !== w.toUpperCase() || w === w.toLowerCase()) return w;
    if (CONECTIVOS.has(w.toLowerCase())) return w.toLowerCase();
    // Até 3 letras em caixa alta costuma ser sigla (UBS, GHC, HU) — fica como está.
    if (w.length <= 3 || SIGLAS_CAIXA.has(w)) return w;
    const t = w.charAt(0) + w.slice(1).toLowerCase();
    return t.length === w.length ? t : w;
  });
}

function capitalizar(s: string): string {
  return s.replace(/\S+/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
}

/** Capitaliza um nome de cargo mantendo conectivos minúsculos e siglas em caixa alta ("médico da esf" → "Médico da ESF"). */
function capitalizarCargo(s: string): string {
  return capitalizar(s).replace(/\S+/g, (w) => {
    const baixa = w.toLowerCase();
    if (CONECTIVOS.has(baixa)) return baixa;
    return SIGLAS_CAIXA.has(w.toUpperCase()) && w.length <= 4 ? w.toUpperCase() : w;
  });
}

function limparNomeCargo(bruto: string): string {
  return bruto
    .replace(/\s+/g, ' ')
    .replace(/\s+(e|de|da|do|dos|das|em)$/i, '')
    .replace(/\s+(Salário|Remuneração|Vagas?|Carga|Jornada|Horas?|Inscrições|Edital|Concurso|Processo|Prefeitura|Para|Com|No|Na)\b.*$/i, '')
    .trim();
}
