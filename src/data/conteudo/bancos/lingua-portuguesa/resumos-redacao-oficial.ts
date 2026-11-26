import type { ResumoTema } from '../../../types';

const BECHARA = 'BECHARA, Evanildo. Moderna Gramática Portuguesa (obra de referência).';
const CUNHA_CINTRA = 'CUNHA, Celso; CINTRA, Lindley. Nova Gramática do Português Contemporâneo (obra de referência).';
const MANUAL =
  'BRASIL. Presidência da República. Manual de Redação da Presidência da República. 3ª ed., revista, atualizada e ampliada. Brasília, 2018 — https://www.gov.br/pt-br/servicos/consultar-o-manual-de-redacao-da-presidencia-da-republica';
const DECRETO_9758 = 'Decreto nº 9.758, de 11 de abril de 2019 (formas de tratamento na administração pública federal) — https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/decreto/d9758.htm';
const HOJE = '2026-11-20';

/** Redação Oficial (não coberta pelo livro de Pestana): resumo mantido do banco anterior. */
export const RESUMOS_REDACAO_OFICIAL: ResumoTema[] = [
  {
    temaId: 'lp-redacao-oficial',
    titulo: 'Redação Oficial (Manual da Presidência, 3ª ed., 2018)',
    resumo:
      'A banca cobra atributos da redação oficial, pronomes de tratamento (endereçamento, vocativo, concordância), os dois fechos, a estrutura do padrão ofício, o e-mail e os gêneros exposição de motivos e mensagem — tudo pelo Manual de 2018.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Redação oficial** é a maneira pela qual o Poder Público redige comunicações oficiais e atos normativos. Quem comunica é sempre o serviço público; o assunto é sempre de interesse público. Por isso não há lugar para impressões pessoais.\n\nO Manual lista os **atributos**: clareza e precisão; objetividade; concisão; coesão e coerência; impessoalidade; formalidade e padronização; e uso da norma-padrão da língua portuguesa. Eles decorrem dos princípios do art. 37 da Constituição (legalidade, impessoalidade, moralidade, publicidade e eficiência). Formalidade não é rebuscamento: o jargão burocrático deve ser evitado.\n\nNa introdução do texto, evite “Tenho a honra de”, “Tenho o prazer de” e “Cumpre-me informar que”; prefira a forma direta: **Informo, Solicito, Comunico**.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Pronomes de tratamento — exemplos do Manual (item 4.1)',
          colunas: ['Autoridade', 'Endereçamento', 'Vocativo', 'No corpo do texto', 'Abreviatura'],
          linhas: [
            ['Presidente da República', 'A Sua Excelência o Senhor', 'Excelentíssimo Senhor Presidente da República,', 'Vossa Excelência', 'Não se usa'],
            ['Presidente do Congresso Nacional; Presidente do STF', 'A Sua Excelência o Senhor', 'Excelentíssimo Senhor Presidente do Congresso Nacional, (ou do Supremo Tribunal Federal,)', 'Vossa Excelência', 'Não se usa'],
            ['Vice-Presidente da República', 'A Sua Excelência o Senhor', 'Senhor Vice-Presidente da República,', 'Vossa Excelência', 'V. Exa.'],
            ['Ministro de Estado, Senador, Deputado Federal, Embaixador, Ministro do TCU e dos Tribunais Superiores', 'A Sua Excelência o Senhor', 'Senhor + cargo, (ex.: Senhor Ministro,)', 'Vossa Excelência', 'V. Exa.'],
            ['Oficial-General das Forças Armadas', 'A Sua Excelência o Senhor', 'Senhor + Posto,', 'Vossa Excelência', 'V. Exa.'],
            ['Outros postos militares', 'Ao Senhor', 'Senhor + Posto,', 'Vossa Senhoria', 'V. Sa.'],
          ],
          nota: 'O próprio Manual diz que a lista é exemplificativa: há muitas normas que atribuem “Vossa Excelência” a outras categorias.',
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Concordância**: o pronome de tratamento leva verbo e possessivos para a 3ª pessoa (“Vossa Senhoria designará **seu** substituto”, e não “vosso”); o adjetivo concorda com o **sexo** da pessoa (“Vossa Excelência está atarefado/atarefada”).',
          '**Vossa** × **Sua**: “Vossa Excelência” para falar **com** a autoridade; “Sua Excelência” para falar **dela** (inclusive no endereçamento: “A Sua Excelência o Ministro...”).',
          '**Endereçamento**: “A Sua Excelência o Senhor”/“a Senhora” (sem crase); para Vossa Senhoria, “Ao Senhor”/“À Senhora” — nunca “A Sua Senhoria o Senhor”.',
          '**Vocativo**: sempre seguido de vírgula. “Excelentíssimo Senhor” + cargo só para os Chefes de Poder; demais autoridades, “Senhor/Senhora” + cargo (“Senhora Senadora,”, “Senhor Juiz,”). Particulares: “Senhor/Senhora” + nome ou forma institucional (“Senhor Contribuinte,”, “Senhora Beneficiária,”) ou “Prezado Senhor,”.',
          '**Abolidos**: Digníssimo (DD) e Ilustríssimo (Ilmo.). Evite “doutor” indiscriminadamente — “Senhor” já confere a formalidade.',
          '**Fechos** (só dois): **Respeitosamente,** para autoridades de hierarquia superior, inclusive o Presidente da República; **Atenciosamente,** para mesma hierarquia, hierarquia inferior e demais casos. Autoridades estrangeiras seguem rito próprio.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Padrão ofício — partes e regras (item 5)',
          colunas: ['Parte', 'Regra do Manual'],
          linhas: [
            ['Nomenclatura', 'Aviso e memorando foram abolidos: tudo é “ofício” (variações: ofício circular, conjunto, conjunto circular)'],
            ['Cabeçalho', 'Só na 1ª página: Brasão de Armas da República, órgão principal e secundários (da maior para a menor hierarquia)'],
            ['Identificação', 'Nome do documento em maiúsculas + Nº + número/ano com quatro dígitos/siglas da menor para a maior hierarquia: OFÍCIO Nº 652/2018/SAA/SE/MT, à esquerda'],
            ['Local e data', 'Cidade sem sigla da UF, vírgula; dia 1º em ordinal, demais em cardinal sem zero à esquerda; mês em minúscula; ponto-final; alinhado à direita: Brasília, 2 de fevereiro de 2018.'],
            ['Endereçamento', 'Vocativo de endereçamento, nome, cargo e endereço, à esquerda'],
            ['Assunto', '“Assunto:” + frase com inicial maiúscula, sem verbos, de quatro a cinco palavras, em negrito, com ponto-final'],
            ['Texto', 'Introdução, desenvolvimento e conclusão (encaminhamento: começa citando o documento); parágrafos numerados só se houver três ou mais (vocativo e fecho não se numeram)'],
            ['Formatação', 'Calibri ou Carlito 12 (citações 11, notas 10); papel A4; margem esquerda mínima de 3 cm, direita 1,5 cm, superior e inferior 2 cm; recuo de parágrafo 2,5 cm; destaque só em negrito, sem abuso'],
            ['Signatário', 'Nome em maiúsculas, sem negrito; cargo com iniciais maiúsculas; centralizado. “Interino” e “substituto” depois do cargo, sem hífen, sem vírgula e em minúsculas'],
            ['Páginas', 'Numeração obrigatória só a partir da segunda página, centralizada no rodapé'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Exposição de motivos (EM)**: dirigida ao Presidente ou ao Vice-Presidente da República, em regra por Ministro de Estado, para propor medida, submeter projeto de ato normativo ou informar. Se envolve mais de um ministério, é **interministerial** e assinada por todos. Fecho: Respeitosamente.',
          '**Mensagem**: comunicação entre Chefes dos Poderes, sobretudo do Executivo ao Legislativo (encaminhar projeto, comunicar veto, abrir a sessão legislativa). Não traz identificação do signatário.',
          '**E-mail**: pode ser documento oficial; o endereço deve ser oficial (ex.: “.gov.br”); o assunto deve ser claro e específico; local e data são desnecessários; saudação com vocativo; fecho padrão **Atenciosamente** — “Att.”, “Abraços” e “Saudações” não são fechos oficiais; linguagem formal; sem caixa alta para destaque, emoticons ou abreviações como “vc”. Valor documental: certificação digital da ICP-Brasil (MP 2.200-2/2001).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — monte o início de um ofício',
        enunciado: 'Ofício de um coordenador para uma Ministra de Estado, convidando-a para um evento. Quais são o endereçamento, o vocativo e o fecho?',
        resolucao:
          'Endereçamento: “A Sua Excelência a Senhora [Nome], Ministra de Estado [...]”. Vocativo: “Senhora Ministra,” (Excelentíssima só para Chefes de Poder). No corpo: “Convido Vossa Excelência a participar...”. Fecho: “Respeitosamente,” (autoridade de hierarquia superior). Se o adjetivo se referir a ela: “Vossa Excelência está convidada”.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Decreto nº 9.758/2019**: na administração pública federal, o único pronome de tratamento na comunicação com agentes públicos federais é “senhor” (flexionado em gênero e número), e ficam vedadas Vossa Excelência/Excelentíssimo, Vossa Senhoria, Vossa Magnificência, doutor, ilustre/ilustríssimo, digno/digníssimo e respeitável; no endereçamento, omitem-se pronome e nome do agente, salvo exceções. O decreto não se aplica às comunicações com autoridades estrangeiras e organismos internacionais, nem às com agentes de outros Poderes, Ministério Público, Defensoria, Tribunais de Contas e outros entes federativos quando estes exigirem tratamento especial previsto em norma própria. As provas continuam cobrando o **Manual de 2018**: quando o enunciado citar o Manual, responda pelo Manual. Pegadinhas clássicas: “Excelentíssimo” para Ministro (errado), fecho “Atenciosamente” ao Presidente (errado), “A Sua Senhoria o Senhor” (errado), crase em “À Sua Excelência” (errado) e data “01 de Fevereiro” (errado).',
      },
    ],
    fontes: [MANUAL, DECRETO_9758],
    atualizadoEm: HOJE,
  },
];
