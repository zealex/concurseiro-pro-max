import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 01 — Fonologia), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C01: QuestaoTreino[] = [
  {
    id: 'lp-fonologia-qlivro01-01',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(FGV - SPTRANS - Especialista em Transportes - 2001) Assinale a alternativa em que o x representa fonema igual ao de “exame”.',
    alternativas: ['exceto.', 'enxame.', 'óxido.', 'exequível.'],
    correta: 3,
    comentario:
      'O “x” de “exame” soa como /z/, o mesmo som do “x” de “exequível”. Em “exceto” o “x” soa /s/, em “enxame” soa /ʃ/ e em “óxido” vale /ks/, por isso a alternativa D é a única correta.',
  },
  {
    id: 'lp-fonologia-qlivro01-02',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(Vunesp - Prefeitura de São Paulo - Auxiliar de Zoonoses - 2002) Assinale a alternativa em que as sílabas de todas as palavras estão separadas corretamente.',
    alternativas: [
      'fi-ngem, no-rte, con-fu-nde.',
      'ex-pres-são, lín-gua, fo-ra.',
      'ali-men-tar, vi-vos, ga-mbá.',
      'qu-an-do, a-ta-ca-dos, i-sso.',
    ],
    correta: 1,
    comentario:
      'Na alternativa B, “ex-pres-são”, “lín-gua” e “fo-ra” seguem a regra: o “ss” não se separa e o “gua” de “língua” fica na mesma sílaba. Em A, “fin-gem”, “nor-te” e “con-fun-de” são divididas de forma errada; em C, “gam-bá” é o correto; em D, “quan-do” é a divisão certa.',
  },
  {
    id: 'lp-fonologia-qlivro01-03',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(FUNDEC -TJ/MG - Oficial de Justiça - 2002) Assinale a alternativa INCORRETA quanto à descrição da palavra.',
    alternativas: [
      'distinguir: um encontro consonantal e dois dígrafos.',
      'cinquentão: dois encontros consonantais, um ditongo crescente e um ditongo decrescente.',
      'quiproquó: dois ditongos crescentes e um encontro consonantal.',
      'antiguidade: dois dígrafos e nenhum ditongo.',
    ],
    correta: 1,
    comentario:
      'A alternativa B está errada: em “cinquentão” não há dois encontros consonantais, porque o “qu” é dígrafo e as consoantes “n” e “t” caem em sílabas diferentes (cin-quen-tão). Para marcar a errada, confira cada item separadamente, lembrando que encontro consonantal exige duas consoantes na mesma sílaba.',
  },
  {
    id: 'lp-fonologia-qlivro01-04',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(FUNDEC - TJ/MG - Oficial de Justiça - 2002) Assinale a alternativa CORRETA quanto à divisão silábica, à ortografia e à análise da estrutura fonética da palavra em destaque.',
    alternativas: [
      'se-ri-ís-si-mo - vocábulo proparoxítono, com um hiato e um dígrafo.',
      'ar-rit-mia - vocábulo oxítono, com dois encontros consonantais e um ditongo crescente.',
      'flu-i-dos - vocábulo paroxítono, com um encontro consonantal e um hiato.',
      'pre-ten-ci-o-so - vocábulo paroxítono, com um encontro consonantal, um dígrafo e um hiato.',
    ],
    correta: 0,
    comentario:
      'Em “se-ri-ís-si-mo” o “i” e o “í” ficam em sílabas separadas (hiato), o “ss” é dígrafo e a tônica está na antepenúltima sílaba, por isso a alternativa A é a correta. Em B, o “rr” de “arritmia” é dígrafo, não encontro consonantal; as demais alternativas trocam a classificação da tonicidade ou dos encontros.',
  },
  {
    id: 'lp-fonologia-qlivro01-05',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(FUMARC - Câmara Municipal de Ouro Preto -Advogado - 2004) Ambas as palavras contêm exemplo de dígrafo em:',
    alternativas: ['magma/massa;', 'nascer/exceto;', 'seccional/barro;', 'afta/minha.'],
    correta: 1,
    comentario:
      'Em “nascer” o “sc” é dígrafo, pois as duas letras, na mesma sílaba, representam um único som /s/; em “exceto” o “xc” também representa um só som. Nas demais alternativas, uma das palavras falha: “magma” e “afta” não têm dígrafo.',
  },
  {
    id: 'lp-fonologia-qlivro01-06',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(Cesgranrio — Assembleia Legislativa/TO — Auxiliar Legislativo (Manutenção e Conservação) — 2005) Há ERRO na separação silábica da palavra:',
    alternativas: ['a-ver-me-lha-do;', 'pi-co-lé;', 'Ro-ra-i-ma;', 'nu-tri-ti-vo;', 'sil-ves-tre.'],
    correta: 2,
    comentario:
      'A separação correta de “Roraima” é “Ro-rai-ma”, porque o “ai” é ditongo decrescente e fica em uma só sílaba. As demais estão certas: “a-ver-me-lha-do”, “pi-co-lé”, “nu-tri-ti-vo” e “sil-ves-tre” respeitam os ditongos, hiatos e dígrafos de cada palavra.',
  },
  {
    id: 'lp-fonologia-qlivro01-07',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(OFFICIUM — TJ/RS — Auxiliar Judiciário — 2005) Assinale a alternativa em que os segmentos destacados representam o mesmo fonema (som).',
    alternativas: [
      'desperdício — desperdiçamos.',
      'júbilo — gargalo.',
      'produção - doses.',
      'reservamos - burocracia.',
      'excessos — xampu.',
    ],
    correta: 0,
    comentario:
      'Em “desperdício” e “desperdiçamos” os segmentos destacados têm o mesmo som /s/. Nas demais, os sons são diferentes: /ʒ/ e /g/ em “júbilo” e “gargalo”, /s/ e /z/ em “produção” e “doses”, /z/ e /s/ em “reservamos” e “burocracia”, /s/ e /ʃ/ em “excessos” e “xampu”.',
  },
  {
    id: 'lp-fonologia-qlivro01-08',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Fepese — Prefeitura de Balneário de Camboriú - Arquiteto — 2008) Observe a frase, retirada do texto: Entreabri os olhos e deparei com uma quantidade enorme de cascalho e areia. Coloque dentro dos parênteses (coluna 2) o número que corresponda à classificação correta dos conjuntos destacados, de acordo com a coluna 1 (não é permitido repetir qualquer número). Coluna 1: 1. hiato; 2. ditongo decrescente; 3. ditongo crescente; 4. grupo consonantal; 5. dígrafo. Coluna 2: ( ) abri; ( ) olhos; ( ) quantidade; ( ) deparei; ( ) entreabri. Assinale agora a resposta que apresenta a sequência correta, de cima para baixo.',
    alternativas: ['1-4-3-2-5.','4-5-3-1-2.', '4-5-3-2-1.', '5-4-3-2-1.', '5-4-2-3-1.'],
    correta: 2,
    comentario:
      'A sequência é 4-5-3-2-1: “abri” tem grupo consonantal (“br”), “olhos” tem dígrafo (“lh”), “quantidade” tem ditongo crescente (“ua”), “deparei” tem ditongo decrescente (“ei”) e “entreabri” tem hiato (“ea”). As demais sequências trocam pelo menos dois desses números.',
  },
  {
    id: 'lp-fonologia-qlivro01-09',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(Cespe/UnB - UEPA — Auxiliar de Laboratório — 2008) Assinale a opção em que as palavras apresentam, em sequência, ditongo / hiato / ditongo.',
    alternativas: ['outra / comeu / coisa.', 'comeu / chorou / rainha.', 'diante / muito / teus.', 'meus / piavam / pai.'],
    correta: 3,
    comentario:
      'Em “meus” há o ditongo “eu”, em “piavam” o “i” e o “a” ficam em sílabas separadas (hiato, pi-a-vam) e em “pai” há o ditongo “ai”. As outras opções erram ao menos uma das três classificações na sequência pedida.',
  },
  {
    id: 'lp-fonologia-qlivro01-10',
    temaId: 'lp-fonologia',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe/UnB - Sebrae/BA - Assistente - 2008) A seguinte separação de palavras polissílabas do texto está correu: tes-tos-te-ro-na; neu-ro-lo-gis-ta; pu-dés-se-mos; sa-be-ri-a-mos.',
    gabaritoCE: true,
    comentario:
      'A separação está correta: “tes-tos-te-ro-na” (5 sílabas), “neu-ro-lo-gis-ta” (5), “pu-dés-se-mos” (4) e “sa-be-ri-a-mos” (5) dividem as sílabas sem romper ditongos nem dígrafos. Todas são polissílabas, pois têm quatro ou mais sílabas.',
  },
  {
    id: 'lp-fonologia-qlivro01-11',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(Cespe/UnB - CEHAP - Auxiliar de Serviços Administrativos - 2009) Assinale a opção que apresenta o vocábulo classificado inadequadamente quanto ao número de sílabas.',
    alternativas: ['acredito — polissílabo.', 'comigo — trissílabo.', 'Rosinha — dissílabo.', 'eu — monossílabo.'],
    correta: 2,
    comentario:
      'A classificação errada é a de “Rosinha”: ro-si-nha tem três sílabas, logo é trissílaba, e não dissílaba. As outras três classificações batem com a contagem de sílabas de cada termo: “acredito” (a-cre-di-to), “comigo” (co-mi-go) e “eu” (monossílaba).',
  },
  {
    id: 'lp-fonologia-qlivro01-12',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(AOCP - Câmara de Paranavaí - Procurador - 2010) Assinale a alternativa correta quanto ao que se afirma a seguir.',
    alternativas: [
      'Na palavra humanos, há 7 letras e 7 fonemas.',
      'Na palavra balança, há 7 letras e 7 fonemas.',
      'Na palavra guerra, há 6 letras e 4 fonemas.',
      'Na palavra campanha, há 8 letras e 7 fonemas.',
      'Na palavra terras, há 6 letras e 6 fonemas.',
    ],
    correta: 2,
    comentario:
      'Em “guerra” há seis letras e quatro fonemas: /g/, /e/, /r/ (o “rr” soa como um só) e /a/, já que o “u” é mudo depois de “g” antes de “e”. Nas demais, a contagem falha: “humanos” tem seis fonemas (o “h” é mudo), “balança” tem seis, “terras” tem cinco e “campanha” não chega a sete.',
  },
  {
    id: 'lp-fonologia-qlivro01-13',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(AOCP — Câmara de Paranavaí—Procurador - 2010) Assinale a alternativa INCORRETA quanto ao que se afirma a seguir.',
    alternativas: [
      'Na palavra detalhamento, há, respectivamente, um dígrafo consonantal e um dígrafo vocálico.',
      'Na palavra promessas, há, respectivamente, um encontro consonantal e um dígrafo consonantal.',
      'Na palavra revanchismo, há, respectivamente, um dígrafo vocálico e um dígrafo consonantal.',
      'Na palavra discussões, há, respectivamente, um dígrafo consonantal e um dígrafo consonantal.',
      'Na palavra programa, há, respectivamente, um encontro consonantal e um encontro consonantal.',
    ],
    correta: 3,
    comentario:
      'A alternativa D é a incorreta: em “discussões” há apenas um dígrafo consonantal, o “ss”, pois o “sc” de “dis-cus” fica dividido entre duas sílabas. As demais descrevem corretamente os encontros e dígrafos das palavras, incluindo o dígrafo vocálico (vogal nasal) de “detalhamento” e de “revanchismo”.',
  },
  {
    id: 'lp-fonologia-qlivro01-14',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(AOCP - Prefeitura Municipal de Camaçari - Procurador Municipal - 2010) Assinale a alternativa em que todas as palavras são proparoxítonas.',
    alternativas: [
      'documentos, dirigentes, pesquisadora.',
      'públicas, pedagógico, física.',
      'adicionais, levantamento, atividades.',
      'contador, eliminados, escolas.',
      'gestores, concentrassem, sistema.',
    ],
    correta: 1,
    comentario:
      'Em “públicas” (pú-bli-cas), “pedagógico” (pe-da-gó-gi-co) e “física” (fí-si-ca) a sílaba tônica é a antepenúltima, o que torna todas proparoxítonas. Nas demais alternativas aparecem paroxítonas, como “documentos” e “escolas”, e oxítonas, como “contador” e “adicionais”.',
  },
  {
    id: 'lp-fonologia-qlivro01-15',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(AOCP - Prefeitura Municipal de Camaçari - Procurador Municipal - 2010) Assinale a única alternativa que apresenta apenas um encontro vocálico.',
    alternativas: ['relatórios.', 'violência.', 'regionais.', 'reuniões.', 'funcionários.'],
    correta: 0,
    comentario:
      'Em “relatórios” há só um encontro vocálico, o “io” de “rios”. Nas demais há dois: “violência” tem “io” e “ia”, “regionais” tem “io” e “ai”, “reuniões” tem “eu” e “õe” e “funcionários” tem “io” duas vezes.',
  },
  {
    id: 'lp-fonologia-qlivro01-16',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 1,
    enunciado: '(Consulplan - Profissional de Área Técnica (PRAT) - 2011) A palavra “horrores” apresenta:',
    alternativas: ['ditongo;', 'dígrafo;', 'tritongo;', 'encontro vocálico;', 'hiato.'],
    correta: 1,
    comentario:
      'Em “horrores” o “rr” é dígrafo, pois duas letras representam um único som. Não há duas vogais juntas na palavra, por isso não existem ditongo, tritongo, encontro vocálico ou hiato.',
  },
  {
    id: 'lp-fonologia-qlivro01-17',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(IPAD - Senac/PE - Auxiliar Administrativo - 2011) O termo que se enquadra na mesma justificativa de tênis quanto à tonicidade, é:',
    alternativas: ['enfatizar;', 'acabar;', 'Natal;', 'consumismo;', 'espiritual.'],
    correta: 3,
    comentario:
      'Em “tênis” a sílaba tônica é a penúltima (tê-nis), o que o torna paroxítona. Entre as opções, só “consumismo” (con-su-mis-mo) também é paroxítona, enquanto “enfatizar”, “acabar”, “Natal” e “espiritual” são oxítonas.',
  },
  {
    id: 'lp-fonologia-qlivro01-18',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(AOCP-Cismepar-Auxiliar de Serviços Gerais - 2011) Assinale a alternativa INCORRETA quanto ao número de sílabas.',
    alternativas: [
      'Redução (trissílaba).',
      'Acontece (polissílaba).',
      'Hipertensão (polissílaba).',
      'Lei (monossílaba).',
      'Saúde (dissílaba).',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a incorreta: “saúde” tem três sílabas (sa-ú-de), por isso é trissílaba, e não dissílaba. Pelo mesmo critério, “redução” (re-du-ção), “acontece” (a-con-te-ce), “hipertensão” (hi-per-ten-são) e “lei” (uma sílaba só) estão corretas.',
  },
  {
    id: 'lp-fonologia-qlivro01-19',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Ceperj - SEAP/RJ — Inspetor de Segurança e Administração Penitenciária - 2012) Na palavra “fazer”, notam-se 5 fonemas. O mesmo número de fonemas ocorre na palavra da seguinte alternativa:',
    alternativas: ['tatuar.', 'quando.', 'doutor.', 'ainda.', 'além.'],
    correta: 1,
    comentario:
      '“Fazer” tem cinco fonemas (/f/, /a/, /z/, /e/, /r/), e “quando” também: /k/, a semivogal de “ua”, a vogal nasal, /d/ e a vogal final. “Tatuar” e “doutor” têm seis fonemas, e “ainda” e “além” têm quatro, por isso só “quando” iguala a contagem.',
  },
  {
    id: 'lp-fonologia-qlivro01-20',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Quadrix - CFP - Analista Técnico (Psicologia) - 2012) Sobre a palavra “pessoa”, analise as seguintes informações: I. Não possui dígrafos ou hiatos. II. É uma paroxítona. III. É trissílaba. Está correto o que se afirma em:',
    alternativas: [
      'somente I e II;',
      'somente II e III;',
      'somente I e III;',
      'todas;',
      'nenhuma.',
    ],
    correta: 1,
    comentario:
      'A afirmação I está errada, porque “pessoa” tem o dígrafo “ss”. A II está certa, pois a tônica cai na penúltima sílaba (pes-SO-a), e a III também, já que a palavra tem três sílabas (pes-so-a).',
  },
  {
    id: 'lp-fonologia-qlivro01-21',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB - EEAr - Controlador de Tráfego Aéreo - 2012) Observe: fre-ar. contém hiato; pou-co-. contém ditongo oral decrescente. Em qual alternativa a palavra não apresenta nenhuma das classificações acima?',
    alternativas: ['aorta.', 'miolo.', 'vaidade.', 'quatro.'],
    correta: 3,
    comentario:
      'Em “quatro” só há o ditongo crescente “ua”, que não é hiato nem ditongo decrescente, por isso é a única palavra sem as classificações do enunciado. “Aorta” e “miolo” têm hiato (a-or-ta, mi-o-lo) e “vaidade” tem o ditongo decrescente “ai”.',
  },
  {
    id: 'lp-fonologia-qlivro01-22',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Instituto AOCP — UFPB — Técnico em Segurança do Trabalho — 2014) Assinale a alternativa em que NÃO há dígrafo na palavra.',
    alternativas: ['Terreno.', 'Pouquinho.', 'Estresse.', 'Cumprimento.', 'Briga.'],
    correta: 4,
    comentario:
      'Em “briga” não há dígrafo: o “br” é encontro consonantal e o “g” seguido de “a” soa /g/. As demais têm dígrafos ou nasalização: “rr” em “terreno”, “qu” e “nh” em “pouquinho”, “ss” em “estresse” e a vogal nasal de “cumprimento”.',
  },
  {
    id: 'lp-fonologia-qlivro01-23',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado: '(AOCP — EBSERH/HU-UFS/SE - Assistente Administrativo — 2014) Temos um hiato na palavra:',
    alternativas: ['ácido.', 'dieta.', 'necessário.', 'está.', 'só.'],
    correta: 1,
    comentario:
      'Em “dieta” o “i” e o “e” estão em sílabas diferentes (di-e-ta), formando hiato. Em “ácido”, “está” e “só” não há duas vogais juntas, e em “necessário” o “io” de “-rio” fica na mesma sílaba, como ditongo decrescente.',
  },
  {
    id: 'lp-fonologia-qlivro01-24',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 1,
    enunciado: '(Fundatec — Pref. Monte Belo do Sul/RS - Agente Comunitário - 2015) A palavra chuvas tem:',
    alternativas: [
      'seis letras e seis fonemas.',
      'seis letras e cinco fonemas.',
      'cinco letras e cinco fonemas.',
      'cinco letras e um fonema.',
      'cinco letras e seis fonemas.',
    ],
    correta: 1,
    comentario:
      'A palavra “chuvas” tem seis letras e cinco fonemas: o dígrafo “ch” representa um só som, /ʃ/, e o “h” não tem som próprio. As demais alternativas erram o número de letras ou de fonemas.',
  },
  {
    id: 'lp-fonologia-qlivro01-25',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Idecan — Prodeb — Assistente (Eletrotécnico) — 2015) Assinale a alternativa em que todas as palavras apresentam a semivogal “u”.',
    alternativas: [
      'continua - algum - muita.',
      'indivíduo — incluir — regular.',
      'confirmou - estabeleceu - pouca.',
      'neurociência - preocupa — graduação.',
    ],
    correta: 2,
    comentario:
      'Em “confirmou”, “estabeleceu” e “pouca” o “u” é semivogal, formando os ditongos “ou” e “eu”. Nas demais alternativas há palavras em que o “u” é vogal de sílaba própria, como em “continua” (con-ti-nu-a), “indivíduo” (in-di-ví-du-o) e “preocupa” (pre-o-cu-pa).',
  },
  {
    id: 'lp-fonologia-qlivro01-26',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Objetiva - Samae de Jaguariaíva/PR - Advogado - 2016) Em relação aos encontros consonantais, analisar os itens abaixo: I - Em encontros como “bs”, “rs”, “ns”, se o “s” for seguido de vogal, separam-se as consoantes. Do contrário, ficam na mesma sílaba: “ab-sol-ver”, mas “abs-ter”; “per-so-na-gem”, mas “pers-pec-ti-va”; “tran-sa-tlân-ti-co”, mas “trans-por-te”. II - São alguns exemplos de encontros consonantais inseparáveis: br - “brin-co”; gl - “gló-ria”; fl - “in-fla-ma-do”.',
    alternativas: [
      'Os itens I e II estão corretos.',
      'Somente o item I está correto.',
      'Somente o item II está correto.',
      'Os itens I e II estão incorretos.',
    ],
    correta: 0,
    comentario:
      'Os dois itens estão corretos: a separação das consoantes depende de a vogal vir depois do “s” (“ab-sol-ver”, “per-so-na-gem”), e os grupos “br”, “gl” e “fl” nunca se separam (“brin-co”, “gló-ria”, “in-fla-ma-do”).',
  },
  {
    id: 'lp-fonologia-qlivro01-27',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Fumarc - Copasa - Agente de Saneamento - 2017) Leia o conceito abaixo: HIATO: quando duas vogais estão juntas na mesma palavra, mas em sílabas diferentes. A partir da leitura do conceito, há hiato em:',
    alternativas: ['adorarei', 'caminhão', 'leitura', 'meia'],
    correta: 3,
    comentario:
      'Em “meia” o “ei” forma ditongo, mas o “i” e o “a” caem em sílabas diferentes (mei-a), o que caracteriza hiato pelo conceito dado. As demais palavras têm apenas ditongos: “rei” em “adorarei”, “ão” em “caminhão” e “lei” em “leitura”.',
  },
  {
    id: 'lp-fonologia-qlivro01-28',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(AOCP - Funpapa - Assistente de Administração - 2018) Assinale a alternativa correta quanto ao que se afirma a respeito das palavras em destaque em “O HOSPITAL Johns Hopkins conseguiu DIMINUIR o tempo de espera por atendimento ao INSTITUIR o PRIMEIRO centro de análise preditiva com foco na experiência dos pacientes”.',
    alternativas: [
      'Em “hospital”, há a mesma quantidade de letras e de fonemas.',
      'Em “hospital”, há um encontro vocálico.',
      'Em “diminuir”, há um ditongo.',
      'Em “instituir”, há um hiato.',
      'Em “primeiro”, há um dígrafo.',
    ],
    correta: 3,
    comentario:
      'Em “instituir” o “u” e o “i” ficam em sílabas separadas (ins-ti-tu-ir), formando hiato. “Hospital” tem oito letras e sete fonemas (o “h” é mudo), “diminuir” não tem ditongo (di-mi-nu-ir) e “primeiro” tem o ditongo “ei”, sem dígrafo.',
  },
  {
    id: 'lp-fonologia-qlivro01-29',
    temaId: 'lp-fonologia',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(Cespe - Prefeitura de São Cristóvão/SE - Professor de Educação Básica - 2019) A palavra “ideias” tem quatro sílabas, portanto se classifica como polissílaba.',
    gabaritoCE: false,
    comentario:
      '“Ideias” tem três sílabas (i-dei-as), e não quatro, pois o “ei” forma um ditongo. Por isso a palavra é trissílaba, e a classificação como polissílaba está errada, já que polissílaba exige quatro ou mais sílabas.',
  },
  {
    id: 'lp-fonologia-qlivro01-30',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Fundatec — Prefeitura de Cristinápolis/SE - Médico do Trabalho — 2020) Analise as assertivas a seguir: I. A palavra “táxis” tem 5 letras e 6 fonemas. II. O vocábulo “trabalho” tem 8 letras e 7 fonemas. III. A palavra “outra” tem 5 letras e 4 fonemas. Quais estão corretas?',
    alternativas: [
      'Apenas I.',
      'Apenas II.',
      'Apenas I e II.',
      'Apenas I e III.',
      'Apenas II e III.',
    ],
    correta: 2,
    comentario:
      'I e II estão corretas: “táxis” tem cinco letras e seis fonemas (o “x” vale /ks/) e “trabalho” tem oito letras e sete fonemas. A III está errada, porque “outra” tem cinco fonemas (o, u como semivogal, t, r e a), e não quatro.',
  },
  {
    id: 'lp-fonologia-qlivro01-31',
    temaId: 'lp-fonologia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FUNDATEC - Prefeitura de Vacaria/RS - Professor de Ensino Fundamental - 2021) (Adaptada) A forma verbal “enxergam” tem mais fonemas que letras.',
    gabaritoCE: false,
    comentario:
      'A afirmação é errada: “enxergam” tem oito letras e cerca de seis ou sete fonemas, porque o “en” inicial e o “am” final viram vogais nasais e o “x” soa /ʃ/. Como o número de fonemas não ultrapassa o de letras, a assertiva não se sustenta.',
  },
  {
    id: 'lp-fonologia-qlivro01-32',
    temaId: 'lp-fonologia',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FAURGS—SES-RS - Técnico de Enfermagem - 2022) (Adaptada) O nome “Hermenegildo” possui mais fonemas do que letras.',
    gabaritoCE: false,
    comentario:
      'A afirmação é errada: “Hermenegildo” tem doze letras, e o “h” inicial é mudo, o que já reduz a contagem de sons. Como as demais letras correspondem, em regra, a um som cada, o total de fonemas fica abaixo do de letras.',
  },
  {
    id: 'lp-fonologia-qlivro01-33',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - Assistente Administrativo - 2010) Assinale a alternativa em que a palavra sublinhada é um ditongo oral crescente. (Palavras destacadas no livro: a) água; b) caos; c) inteiro; d) estação; e) proteína.)',
    alternativas: [
      'Você não contribuiu para a contaminação da água.',
      'Após as chuvas, a cidade está um caos.',
      '... o processo inteiro passou por critérios de proteção ao meio ambiente.',
      '... os alimentos da estação costumam ser mais bonitos e gostosos.',
      'A proteína é necessária para o organismo.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: em “água” o “u” é semivogal diante do “a” na mesma sílaba (á-gua), formando ditongo oral crescente. Em “caos” e “inteiro” os ditongos são decrescentes (“ao” e “ei”), em “estação” o ditongo é nasal decrescente (“ão”), e em “proteína” há hiato (pro-te-í-na).',
  },
  {
    id: 'lp-fonologia-qlivro01-34',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Consulplan - Técnico em Informática - 2011) “Por trás de um pequeno homem talvez exista uma mulherzinha de nada”. As palavras destacadas no livro (trás, pequeno e mulherzinha) apresentam, respectivamente:',
    alternativas: [
      'encontro vocálico / dígrafo / encontros vocálicos;',
      'hiato / dígrafo / encontros consonantais;',
      'encontro consonantal / ditongo / dígrafos;',
      'tritongo / ditongo / dígrafos;',
      'encontro consonantal / dígrafo / dígrafos.',
    ],
    correta: 4,
    comentario:
      'A alternativa E é a correta: em “trás” o “tr” é encontro consonantal, em “pequeno” o “qu” é dígrafo e em “mulherzinha” há dois dígrafos, “lh” e “nh”. Nas outras, “trás” aparece como encontro vocálico, hiato ou tritongo, ou “pequeno” aparece como ditongo, o que não se aplica a essas palavras.',
  },
  {
    id: 'lp-fonologia-qlivro01-35',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(Fumarc - Prefeitura de Nova Lima/MG - Estagiário de Técnico em Administração - 2012) Considere estes grupos de palavras: I. co-lé-gi-o; bra-si-le-i-ras; as-pe-ctos. II. e-nig-ma; pror-ro-gar; ca-ná-rio. III. due-lo; mi-ú-do; su-bli-nhar. IV. in-con-tes-tá-vel; eu-ro-pei-a; i-guais. A correta divisão silábica de todas as palavras pode ser observada:',
    alternativas: ['apenas em II;', 'apenas em II e IV;', 'apenas em III e IV;', 'apenas em I e IV.'],
    correta: 1,
    comentario:
      'A alternativa B é a correta: em II (e-nig-ma, pror-ro-gar, ca-ná-rio) e em IV (in-con-tes-tá-vel, eu-ro-pei-a, i-guais) a divisão está certa. Em I, “bra-si-le-i-ras” separa o ditongo de “lei” (o certo é bra-si-lei-ras) e “as-pe-ctos” deveria ser “as-pec-tos”; em III, “su-bli-nhar” deveria ser “sub-li-nhar”.',
  },
  {
    id: 'lp-fonologia-qlivro01-36',
    temaId: 'lp-fonologia',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Funrio - MPOG - Analista de Tecnologia da Informação - 2013) Sobre a identificação de encontros consonantais, encontros vocálicos e dígrafos é CORRETO afirmar que:',
    alternativas: [
      'há dígrafo nas seguintes palavras: distintos, presidente e imposto.',
      'há ditongo nas seguintes palavras: quando, duas e oposição.',
      'há hiato nas seguintes palavras: negociação, muito e imediato.',
      'há encontro consonantal nas seguintes palavras: conquista, objetivo e aumentos.',
      'há tritongo nas seguintes palavras: imediatamente, titubeante e população.',
    ],
    correta: 0,
    comentario:
      'A alternativa A é a correta: em “distintos”, “presidente” e “imposto” a vogal nasal aparece escrita com duas letras (“in”, “en”, “im”), o que o livro chama de dígrafo vocálico. Nas demais há erro de classificação: em “negociação” e “imediato” há ditongo crescente (“ia”), e não hiato, “muito” tem ditongo (“ui”), e “população” não tem tritongo.',
  },
];
