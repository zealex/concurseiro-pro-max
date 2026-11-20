import type { ResumoTema } from '../../../types';

const BECHARA = 'BECHARA, Evanildo. Moderna Gramática Portuguesa (obra de referência).';
const CUNHA_CINTRA = 'CUNHA, Celso; CINTRA, Lindley. Nova Gramática do Português Contemporâneo (obra de referência).';
const ACORDO =
  'Acordo Ortográfico da Língua Portuguesa (1990), promulgado pelo Decreto nº 6.583/2008 — https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/decreto/d6583.htm';
const VOLP = 'Academia Brasileira de Letras. Vocabulário Ortográfico da Língua Portuguesa (VOLP) — https://www.academia.org.br/nossa-lingua/busca-no-vocabulario';
const MANUAL = 'BRASIL. Presidência da República. Manual de Redação da Presidência da República. 3ª ed. Brasília, 2018 (cap. III, item 9.1 — hífen).';
const HOJE = '2026-11-20';

/** Resumos de gramática (1): ortografia, classes, verbos, termos da oração e período composto. */
export const RESUMOS_GRAMATICA_1: ResumoTema[] = [
  {
    temaId: 'lp-ortografia',
    titulo: 'Ortografia, acentuação, hífen e porquês',
    resumo:
      'A banca cobra as regras de acentuação (com as mudanças do Acordo de 1990), o hífen com prefixos, os quatro porquês e pares como mal/mau, há/a e senão/se não.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O **Acordo Ortográfico de 1990** é obrigatório no Brasil desde 2016. Na dúvida sobre a grafia de uma palavra, a referência é o **VOLP**, da Academia Brasileira de Letras.\n\nA acentuação segue a **sílaba tônica** e a **terminação** da palavra. Decore as regras por classe (oxítona, paroxítona, proparoxítona) e depois as regras especiais (hiatos, ditongos abertos, acentos diferenciais) — são estas que o Acordo mudou e que a banca mais cobra.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Regras de acentuação',
          colunas: ['Caso', 'Acentua quando...', 'Exemplos'],
          linhas: [
            ['Proparoxítonas', 'Sempre', 'médico, cáustico, síndrome'],
            ['Oxítonas', 'Terminam em a(s), e(s), o(s), em, ens', 'sofá, café, cipó, também, parabéns'],
            ['Paroxítonas', 'Terminam em l, n, r, x, ps, i(s), us, um/uns, ã(s), ão(s), ditongo', 'fácil, hífen, caráter, tórax, bíceps, júri, vírus, álbum, órfã, órgão, história'],
            ['Paroxítonas sem acento', 'Terminam em a(s), e(s), o(s), em, ens', 'item, itens, hifens, polens, jovem'],
            ['Monossílabos tônicos', 'Terminam em a(s), e(s), o(s)', 'pá, pé, pó, mês, três'],
            ['Hiato com i/u tônico', 'Ficam sozinhos na sílaba ou com s', 'saúde, saída, baú, país, juízes'],
            ['Hiato sem acento', 'i/u seguido de nh; com l, m, n, r, z na mesma sílaba; paroxítona com i/u após ditongo', 'rainha, ruim, juiz, raiz, feiura, bocaiuva'],
            ['Ditongos abertos éi, ói, éu', 'Só em oxítonas e monossílabos', 'papéis, herói, chapéu, dói (mas ideia, heroico, jiboia)'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'O que o Acordo de 1990 mudou',
          colunas: ['Regra', 'Antes', 'Agora'],
          linhas: [
            ['Ditongo aberto ei/oi em paroxítona', 'idéia, heróico, assembléia', 'ideia, heroico, assembleia (exceção: destróier, por terminar em r)'],
            ['Hiato oo e eem', 'vôo, enjôo, lêem, vêem, crêem, dêem', 'voo, enjoo, leem, veem, creem, deem'],
            ['i/u tônico após ditongo em paroxítona', 'feiúra, baiúca', 'feiura, baiuca (oxítona mantém: Piauí, tuiuiú)'],
            ['Acentos diferenciais abolidos', 'pára, pêlo, pólo, pêra', 'para, pelo, polo, pera'],
            ['Diferenciais mantidos', '—', 'pôde × pode; pôr × por; têm × tem; vêm × vem (contém × contêm); fôrma facultativo'],
            ['Trema', 'freqüência, lingüiça', 'frequência, linguiça (mantém-se em nomes estrangeiros: Müller)'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Hífen com prefixos',
          colunas: ['Situação', 'Regra', 'Exemplos'],
          linhas: [
            ['Segundo elemento com h', 'Hífen', 'anti-higiênico, super-homem, pré-história'],
            ['Prefixo termina na mesma vogal', 'Hífen', 'micro-ondas, anti-inflamatório, contra-ataque'],
            ['Vogais diferentes', 'Junto', 'autoescola, antiaéreo, infraestrutura, autoimune'],
            ['Prefixo em vogal + r ou s', 'Junto, dobrando a consoante', 'contrarregra, antissocial, ultrassom, minissaia'],
            ['hiper-, inter-, super- + r', 'Hífen', 'inter-racial, super-resistente, hiper-realista'],
            ['ex-, vice-, pré-, pós-, pró- (tônicos)', 'Sempre hífen', 'ex-diretor, vice-presidente, pré-natal, pós-operatório'],
            ['circum-, pan- + vogal, m, n, h', 'Hífen', 'pan-americano, circum-navegação'],
            ['Prefixo co-', 'Em geral, junto', 'coordenar, cooperar, coautor'],
            ['mal- + vogal, h ou l; bem-', 'Hífen (bem- quase sempre)', 'mal-estar, mal-humorado, bem-vindo (mas malcriado)'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Os quatro porquês',
          colunas: ['Forma', 'Uso', 'Exemplo'],
          linhas: [
            ['por que', 'Pergunta (direta ou indireta) e = pelo qual / pela qual', 'Por que faltou? Não sei por que faltou. O motivo por que faltou.'],
            ['por quê', 'No fim da frase, antes de pontuação', 'Faltou por quê?'],
            ['porque', 'Conjunção causal ou explicativa (= pois)', 'Faltou porque estava doente.'],
            ['porquê', 'Substantivo (com artigo ou determinante)', 'Ninguém sabe o porquê da falta.'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**mal × mau**: mal opõe-se a bem (passou mal; mal-humorado); mau opõe-se a bom (mau humor).',
          '**há × a**: há = faz, tempo passado (há dez anos); a = tempo futuro ou distância (daqui a dez dias; a 2 km).',
          '**senão × se não**: senão = a não ser, caso contrário; se não = caso não (se não chover).',
          '**a fim de × afim**: finalidade × semelhante (áreas afins).',
          '**acerca de × há cerca de**: sobre × faz aproximadamente.',
          '**ao encontro de × de encontro a**: a favor de × contra, chocando-se com.',
          '**onde × aonde**: lugar em que × lugar a que, com verbos de movimento (aonde vai?).',
          '**s × z nos verbos**: analisar (de análise), pesquisar (de pesquisa); atualizar, realizar (sufixo -izar, sem s no radical).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — acentuação pós-Acordo',
        enunciado: 'Qual palavra está incorreta: herói, heroico, pôde, pára (verbo), feiura?',
        resolucao:
          '“Pára” está incorreta: o acento diferencial do verbo “parar” foi abolido (“Ele não para”). Herói mantém o acento (oxítona com ditongo aberto); heroico perdeu (paroxítona); pôde mantém o diferencial; feiura perdeu o acento (u tônico após ditongo em paroxítona).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas frequentes: **hífen** tem acento, mas **hifens** não; **pôde** (passado) continua acentuado; **têm/vêm** (plural) continuam com circunflexo; **Piauí** mantém o acento (oxítona), mas **feiura** não; e **destróier** conserva o acento por terminar em r. Em “mal-humorado”, o hífen aparece porque “humorado” começa com h.',
      },
    ],
    fontes: [ACORDO, VOLP, MANUAL],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-classes',
    titulo: 'Classes de palavras e formação de palavras',
    resumo:
      'A banca cobra a classificação de palavras no contexto — sobretudo os valores de “que”, “se” e “como” — e os processos de formação (derivação e composição).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'São **dez classes**: seis variáveis (substantivo, adjetivo, artigo, numeral, pronome e verbo) e quatro invariáveis (advérbio, preposição, conjunção e interjeição). A classe depende do **contexto**: “o jantar” (substantivo) × “vamos jantar” (verbo); “falou alto” (advérbio, invariável) × “voz alta” (adjetivo, varia).\n\nTeste prático: se a palavra **varia** acompanhando um substantivo, é adjetivo ou pronome adjetivo (muitos pacientes); se é **invariável** e modifica verbo, adjetivo ou advérbio, é advérbio (muito ansiosos).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Valores de “que” e “se”',
          colunas: ['Palavra', 'Classificação', 'Exemplo e teste'],
          linhas: [
            ['que', 'Pronome relativo', 'O laudo que o perito emitiu (= o qual)'],
            ['que', 'Conjunção integrante', 'Sei que o laudo saiu (= sei isso)'],
            ['que', 'Conjunção consecutiva', 'Estava tão cansado que dormiu'],
            ['que', 'Conjunção explicativa', 'Saia, que vai chover (= pois)'],
            ['se', 'Pronome apassivador', 'Alugam-se salas (= salas são alugadas; VTD, verbo concorda)'],
            ['se', 'Índice de indeterminação do sujeito', 'Precisa-se de médicos (VTI ou VI; verbo no singular)'],
            ['se', 'Conjunção condicional', 'Se houver vaga, interne'],
            ['se', 'Conjunção integrante', 'Não sei se ele vem (= não sei isso)'],
            ['se', 'Pronome reflexivo', 'O residente se cortou (a si mesmo)'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Formação de palavras',
          colunas: ['Processo', 'Como funciona', 'Exemplos'],
          linhas: [
            ['Derivação prefixal', 'Acrescenta prefixo', 'desleal, reler, infeliz'],
            ['Derivação sufixal', 'Acrescenta sufixo', 'felizmente, lealdade'],
            ['Prefixal e sufixal', 'Prefixo e sufixo, mas cada um pode sair sozinho', 'infelizmente (infeliz / felizmente), deslealdade'],
            ['Parassintética', 'Prefixo e sufixo ao mesmo tempo; nenhum pode sair', 'entristecer, anoitecer, emagrecer, desalmado'],
            ['Regressiva', 'Reduz a palavra (substantivo a partir de verbo)', 'combate (combater), ataque, debate, pesca'],
            ['Imprópria', 'Muda a classe sem mudar a forma', 'o jantar, um não, o sim'],
            ['Composição por justaposição', 'Junta palavras sem perda de sons', 'girassol, passatempo, guarda-chuva'],
            ['Composição por aglutinação', 'Junta com perda de sons', 'planalto (plano + alto), embora (em boa hora), aguardente'],
            ['Hibridismo', 'Elementos de línguas diferentes', 'automóvel, sociologia, televisão'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Pronomes pessoais**: depois de preposição, oblíquo tônico (entre mim e você; para mim); antes de infinitivo, como sujeito, caso reto (para eu assinar).',
          '**Objeto direto** é o (a, os, as); objeto indireto de pessoa é lhe: “Encontrei-o”, “Entreguei-lhe o laudo”.',
          '**Demonstrativos**: este (perto de quem fala; o que vem), esse (perto de quem ouve; o que já foi dito), aquele (distante).',
          '**“Cujo”** indica posse, concorda com o possuído e não aceita artigo depois: o paciente cujos exames chegaram.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — “se” apassivador ou índice de indeterminação?',
        enunciado: 'Classifique o “se” em: (1) “Vendem-se apartamentos” e (2) “Trata-se de casos graves”.',
        resolucao:
          '(1) Apassivador: “vender” é transitivo direto, e a frase equivale a “apartamentos são vendidos”; o verbo concorda com “apartamentos”. (2) Índice de indeterminação: “tratar-se de” é transitivo indireto; o verbo fica no singular, mesmo com “casos” no plural.',
      },
      {
        tipo: 'atencao',
        texto:
          'Parassíntese × prefixal e sufixal: retire o prefixo e depois o sufixo. Se ambas as formas existirem (infeliz, felizmente), é prefixal e sufixal; se nenhuma existir (entriste, tristecer), é parassíntese. E “bastante”, “muito”, “meio”: variam quando acompanham substantivo (bastantes leitos) e são invariáveis como advérbios (bastante cansadas, meio nervosa).',
      },
    ],
    fontes: [BECHARA, CUNHA_CINTRA],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-verbos',
    titulo: 'Verbos: tempos, modos, vozes e correlação',
    resumo:
      'A banca cobra a conjugação de irregulares e derivados (ver, vir, pôr, ter, intervir, manter, propor), particípios duplos, vozes verbais (transposição ativa → passiva) e correlação entre tempos.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Os **modos** são três: **indicativo** (certeza: faço, fiz, farei), **subjuntivo** (hipótese, desejo: que eu faça, se eu fizesse, quando eu fizer) e **imperativo** (ordem, pedido: faça). As **formas nominais** são infinitivo, gerúndio e particípio.\n\nOs **derivados conjugam-se como o verbo primitivo**: intervir e provir como vir; manter, deter, reter e conter como ter; propor, dispor, compor e supor como pôr; prever e rever como ver. Essa regra resolve a maioria das questões de conjugação.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Formas que mais caem',
          colunas: ['Verbo', 'Pretérito perfeito (ele/eles)', 'Futuro do subjuntivo (quando ele / eles)'],
          linhas: [
            ['ver / prever', 'viu, viram / previu, previram', 'vir, virem / previr, previrem'],
            ['vir / intervir', 'veio, vieram / interveio, intervieram', 'vier, vierem / intervier, intervierem'],
            ['ter / manter / deter', 'teve / manteve / deteve', 'tiver / mantiver / detiver'],
            ['pôr / propor / dispor', 'pôs / propôs / dispôs', 'puser / propuser / dispuser'],
            ['fazer / satisfazer', 'fez / satisfez', 'fizer / satisfizer'],
            ['requerer', 'requereu (regular; não segue querer)', 'requerer'],
            ['prover', 'proveu (regular no pretérito)', 'prover'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**MARIO**: mediar, ansiar, remediar, incendiar e odiar conjugam-se como os verbos em -ear nas formas rizotônicas: medeio, anseia, remedeiam, incendeia, odeio.',
          '**Defectivos**: reaver só tem as formas em que haver mantém o v (reavemos, reouve) — não existe “reavejo”; use “recupero”. Precaver não tem “precavejo”.',
          '**Particípios duplos**: com ter/haver, o regular (tinha aceitado, tinha elegido, tinha imprimido); com ser/estar, o irregular (foi aceito, foi eleito, foi impresso). “Tinha aceito” também aparece no uso culto, mas a banca segue a regra tradicional. “Chegar” só tem “chegado”.',
          '**Haver** = existir, ocorrer ou tempo decorrido: impessoal (houve falhas; havia dúvidas; deve haver vagas). Como auxiliar (haviam saído), concorda normalmente.',
          '**Futuro do subjuntivo × infinitivo**: em “quando o resultado sair”, “sair” é futuro do subjuntivo; troque por irregular para testar (“quando o resultado vier”).',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Vozes verbais e transposição',
          colunas: ['Voz', 'Estrutura', 'Exemplo'],
          linhas: [
            ['Ativa', 'Sujeito pratica a ação', 'O auditor examinou as contas.'],
            ['Passiva analítica', 'ser + particípio + agente da passiva', 'As contas foram examinadas pelo auditor.'],
            ['Passiva sintética', 'VTD + se (verbo concorda com o sujeito)', 'Examinaram-se as contas.'],
            ['Reflexiva', 'Sujeito pratica e recebe a ação', 'O residente feriu-se.'],
            ['Transposição de tempo composto', '“ter” mantém o tempo + sido + particípio', 'tinha examinado → tinham sido examinadas'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Correlação**: se + pretérito imperfeito do subjuntivo → futuro do pretérito (Se tivesse leitos, a fila seria menor).',
          'Se/quando + futuro do subjuntivo → futuro do presente (Se tiver leitos, a fila será menor).',
          'Verbo principal no presente → presente do subjuntivo (É necessário que venha); no pretérito → imperfeito do subjuntivo (Era necessário que viesse).',
          '“Caso” pede presente ou imperfeito do subjuntivo (caso intervenha / caso interviesse), nunca futuro (“caso intervier” está errado).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — passiva com tempo composto',
        enunciado: 'Passe para a voz passiva: “O perito tinha revisado os laudos”.',
        resolucao:
          '“Os laudos tinham sido revisados pelo perito.” O objeto direto vira sujeito (os laudos); o auxiliar “ter” vai para o plural e mantém o tempo (tinham); entra “sido”; o particípio concorda com o sujeito (revisados); o antigo sujeito vira agente da passiva (pelo perito).',
      },
      {
        tipo: 'atencao',
        texto:
          'As pegadinhas campeãs: “se ele **ver**” (certo: vir), “quando ele **vir**” no sentido de vir (certo: vier), “o sindicato **interviu**” (certo: interveio), “se ele **propor**” (certo: propuser), “quando **manterem**” (certo: mantiverem) e “eu **requero**” (certo: requeiro).',
      },
    ],
    fontes: [BECHARA, CUNHA_CINTRA],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-termos-oracao',
    titulo: 'Termos da oração (período simples)',
    resumo:
      'A banca cobra tipos de sujeito (inclusive indeterminado e oração sem sujeito), tipos de predicado, objeto direto e indireto, predicativos, complemento nominal × adjunto adnominal, aposto e vocativo.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Os termos dividem-se em **essenciais** (sujeito e predicado), **integrantes** (objeto direto, objeto indireto, complemento nominal, agente da passiva) e **acessórios** (adjunto adnominal, adjunto adverbial, aposto). O **vocativo** fica fora da estrutura da oração: é um chamamento.\n\nPara achar o sujeito, pergunte ao verbo “quem?” ou “o quê?” e confira a concordância: o sujeito concorda com o verbo, mesmo posposto (“Chegaram os resultados”).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Tipos de sujeito',
          colunas: ['Tipo', 'Característica', 'Exemplo'],
          linhas: [
            ['Simples', 'Um núcleo', 'O perito assinou o laudo.'],
            ['Composto', 'Dois ou mais núcleos', 'O diretor e a coordenadora aprovaram.'],
            ['Oculto (desinencial)', 'Identificado pela terminação do verbo', 'Estudamos à noite. (nós)'],
            ['Indeterminado', 'Verbo na 3ª do plural sem referente, ou VTI/VI + se', 'Disseram que a escala mudou. Precisa-se de médicos.'],
            ['Oração sem sujeito', 'Verbos impessoais: fenômenos naturais, haver = existir, fazer/haver = tempo, ser = hora/data', 'Choveu. Há vagas. Faz dois anos. São 10 horas.'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Predicado e complementos',
          colunas: ['Termo', 'O que é', 'Exemplo'],
          linhas: [
            ['Predicado verbal', 'Núcleo é um verbo de ação', 'O médico examinou o paciente.'],
            ['Predicado nominal', 'Verbo de ligação + predicativo do sujeito', 'O paciente está estável.'],
            ['Predicado verbo-nominal', 'Verbo de ação + predicativo', 'O paciente chegou inconsciente. A junta considerou o servidor apto.'],
            ['Objeto direto', 'Completa verbo sem preposição obrigatória', 'Entreguei o laudo.'],
            ['Objeto indireto', 'Completa verbo com preposição exigida', 'Entreguei o laudo ao perito.'],
            ['Complemento nominal', 'Completa nome (substantivo abstrato, adjetivo, advérbio) com preposição; é o alvo', 'obediência às normas; medo de agulha; favorável ao réu'],
            ['Adjunto adnominal', 'Caracteriza o substantivo; com preposição, indica posse ou agente', 'a chegada do médico; o consultório da clínica'],
            ['Agente da passiva', 'Quem pratica a ação na voz passiva', 'O laudo foi assinado pelo perito.'],
            ['Aposto', 'Explica ou resume outro termo; em geral entre vírgulas', 'Dra. Helena, a coordenadora, aprovou.'],
            ['Vocativo', 'Chamamento do interlocutor; sempre isolado por vírgula', 'Dra. Helena, o laudo está pronto.'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — complemento nominal ou adjunto adnominal?',
        enunciado: 'Classifique “do cientista” e “da vacina” em: “A invenção do cientista” e “A invenção da vacina”.',
        resolucao:
          '“Do cientista” é adjunto adnominal: é o agente (o cientista inventou). “Da vacina” é complemento nominal: é o alvo, o que foi inventado (inventar a vacina). Teste: transforme o substantivo em verbo — quem pratica é adjunto; quem sofre é complemento.',
      },
      {
        tipo: 'atencao',
        texto:
          '“Precisa-se de técnicos” tem sujeito **indeterminado** (verbo no singular); “Alugam-se salas” tem sujeito **simples** (salas), porque “se” é apassivador. Objeto direto **pleonástico** repete o objeto por ênfase (“O laudo, o perito o assinou”); objeto direto **preposicionado** traz preposição não exigida pelo verbo (“amar a Deus”).',
      },
    ],
    fontes: [BECHARA, CUNHA_CINTRA],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-periodo-composto',
    titulo: 'Período composto: coordenação e subordinação',
    resumo:
      'A banca cobra a classificação das orações (coordenadas, substantivas, adjetivas, adverbiais), o valor das conjunções e a diferença entre restritiva e explicativa.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Na **coordenação**, as orações são sintaticamente independentes (“Chegou, examinou e saiu”). Na **subordinação**, uma oração exerce função sintática na outra: sujeito, objeto, adjunto adnominal ou adjunto adverbial. Por isso as subordinadas se classificam pela função que exercem: **substantivas** (funções de substantivo), **adjetivas** (de adjetivo) e **adverbiais** (de advérbio).\n\nOrações **reduzidas** não têm conectivo e trazem o verbo no infinitivo, gerúndio ou particípio (“Terminada a cirurgia, ...” = Quando a cirurgia terminou).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Coordenadas sindéticas',
          colunas: ['Tipo', 'Conjunções', 'Exemplo'],
          linhas: [
            ['Aditiva', 'e, nem, não só... mas também', 'Examinou e medicou.'],
            ['Adversativa', 'mas, porém, contudo, todavia, entretanto, no entanto', 'Estudou, mas não passou.'],
            ['Alternativa', 'ou... ou, ora... ora, quer... quer', 'Ou interna, ou transfere.'],
            ['Conclusiva', 'logo, portanto, por isso, pois (posposto ao verbo)', 'A sala é estéril; vista, pois, o avental.'],
            ['Explicativa', 'pois (anteposto ao verbo), porque, que', 'Vista o avental, pois a sala é estéril.'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Subordinadas substantivas (testa-se trocando por “isso”)',
          colunas: ['Tipo', 'Função', 'Exemplo'],
          linhas: [
            ['Subjetiva', 'Sujeito', 'É fundamental que todos usem EPI.'],
            ['Objetiva direta', 'Objeto direto', 'O médico disse que o exame estava normal.'],
            ['Objetiva indireta', 'Objeto indireto', 'Lembro-me de que houve reunião.'],
            ['Completiva nominal', 'Complemento nominal', 'Tenho certeza de que o laudo sairá.'],
            ['Predicativa', 'Predicativo do sujeito', 'O problema é que faltam leitos.'],
            ['Apositiva', 'Aposto', 'Só desejo isto: que todos se recuperem.'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Subordinadas adverbiais',
          colunas: ['Tipo', 'Conjunções', 'Exemplo'],
          linhas: [
            ['Causal', 'porque, como (anteposto), já que, visto que', 'Como o sistema caiu, as receitas foram manuais.'],
            ['Concessiva', 'embora, ainda que, mesmo que, conquanto (+ subjuntivo)', 'Embora exausto, concluiu a evolução.'],
            ['Condicional', 'se, caso, desde que (+ subjuntivo), contanto que', 'O exame sai desde que haja pedido.'],
            ['Final', 'para que, a fim de que', 'Explicou para que a família entendesse.'],
            ['Temporal', 'quando, assim que, logo que, desde que (+ indicativo)', 'Quando o laudo ficou pronto, avisamos.'],
            ['Consecutiva', 'tão/tanto/tal... que', 'Estava tão cansado que dormiu.'],
            ['Proporcional', 'à medida que, à proporção que', 'À medida que a febre cedia, ele melhorava.'],
            ['Conformativa', 'conforme, segundo, consoante, como', 'Conforme prevê o edital, ...'],
            ['Comparativa', 'como, (mais/menos)... (do) que', 'Estudou mais do que o irmão.'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Adjetiva restritiva** (sem vírgulas): delimita o termo — “Os médicos que atuam na emergência serão capacitados” (só esses).',
          '**Adjetiva explicativa** (entre vírgulas): acrescenta característica de todo o termo — “O Brasil, que tem dimensões continentais, ...”.',
          'Pôr ou tirar as vírgulas de uma adjetiva **muda o sentido** — é a pegadinha mais comum de pontuação e reescrita.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — o valor de “desde que”',
        enunciado: 'Classifique: (1) “Desde que chegou, trabalha no pronto-socorro.” (2) “O exame será liberado desde que o paciente apresente o pedido.”',
        resolucao:
          '(1) Temporal: verbo no indicativo (“chegou”), equivale a “a partir do momento em que”. (2) Condicional: verbo no subjuntivo (“apresente”), equivale a “contanto que”. O modo verbal decide o valor.',
      },
      {
        tipo: 'atencao',
        texto:
          '“Como” muda de valor: causal quando anteposto à principal (“Como chovia, ...”), conformativo quando equivale a “conforme” (“Como determina a lei”) e comparativo (“Agiu como um especialista”). E “pois”: antes do verbo explica; depois do verbo, entre vírgulas, conclui.',
      },
    ],
    fontes: [BECHARA, CUNHA_CINTRA],
    atualizadoEm: HOJE,
  },
];
