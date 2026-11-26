import type { ResumoTema } from '../../../types';

const PESTANA_C28 = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 28).';
const PESTANA_C29 = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 29).';
const HOJE = '2026-11-26';

/** Lote R12: concordância (cap. 28) e regência (cap. 29). */
export const RESUMOS_LIVRO_R12: ResumoTema[] = [
  {
    temaId: 'lp-concordancia',
    titulo: 'Concordância verbal e nominal',
    resumo:
      'A banca cobra o verbo que se afasta do sujeito (posposto, intercalado ou oracional), os verbos impessoais, o se apassivador × o se indeterminador e o sujeito composto ligado por “ou” ou “nem… nem”. Também cobra o verbo ser e as palavras que variam ou não (meio, anexo, possível, mesmo, todo).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Concordância verbal** é a adequação do verbo ao sujeito em **pessoa** e **número**. **Concordância nominal** é a adequação de artigos, pronomes, numerais e adjetivos ao substantivo a que se referem, em **gênero** e **número**.\n\nPara resolver a questão, siga a ordem: ache o verbo; pergunte “quem ou o que” pratica a ação para localizar o sujeito; confira se o núcleo do sujeito tem a mesma pessoa e o mesmo número do verbo. O método vale mesmo quando o sujeito vem depois do verbo ou longe dele, separado por adjuntos e orações intercaladas, que é justamente o que as bancas exploram.\n\nHá também a **concordância atrativa**, em que o termo concorda com o elemento mais próximo em vez do núcleo. A norma aceita a atração em vários casos, mas a banca costuma cobrar a concordância com o núcleo quando a questão pede a forma mais tradicional.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Verbo × sujeito: os casos que mais caem',
          colunas: ['Situação', 'Como fica o verbo', 'Exemplo'],
          linhas: [
            ['Sujeito posposto ao verbo', 'Concorda com o sujeito, mesmo vindo depois dele', 'Faltaram duas canetas na sala de provas.'],
            ['Sujeito oracional (uma oração funciona como sujeito)', 'Verbo principal na 3ª pessoa do singular', 'Convém que todos leiam o edital com atenção.'],
            ['Haver e fazer com sentido de existir, ocorrer ou tempo decorrido', 'Sempre na 3ª pessoa do singular', 'Houve muitas dúvidas na prova. Fazia dois anos que não viajávamos.'],
            ['Locução com verbo impessoal', 'Só o auxiliar flexiona, e fica no singular', 'Deve haver vagas remanescentes na lista.'],
            ['Se apassivador (o sujeito é o paciente da ação)', 'Concorda com o sujeito paciente', 'Alugam-se salas comerciais no centro.'],
            ['Se de indeterminação do sujeito (verbo intransitivo ou VTI)', 'Sempre no singular', 'Precisa-se de enfermeiros para o plantão. Trata-se de um tema recorrente.'],
            ['Verbo ser com quem ou que como sujeito', 'Concorda com o predicativo', 'Quem são os responsáveis pela obra?'],
            ['Horas, datas e distâncias com o verbo ser', 'Com horas, concorda com o número; com data, a concordância é facultativa', 'São dez horas. Hoje é (ou são) 12 de março.'],
            ['Pronome de tratamento (Vossa Senhoria, Vossa Excelência)', 'Verbo na 3ª pessoa; o adjetivo segue o gênero de quem é tratado', 'Vossa Senhoria receberá o relatório amanhã.'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Sujeito composto anteposto ao verbo**: o verbo vai ao plural (“O diretor e a coordenadora assinaram o termo.”).',
          '**Sujeito composto posposto**: pode concordar com o núcleo mais próximo ou com todos os núcleos (“Chegou o professor e os alunos.” / “Chegaram o professor e os alunos.”).',
          '**Ligado por “ou” de exclusão**: singular (“Ou ele ou ela assumirá a vaga.”). Quando o “ou” apenas retifica ou repete a mesma coisa, o verbo concorda com o núcleo mais próximo.',
          '**“Nem… nem”**: a preferência é o plural (“Nem o edital nem a banca explicaram a questão.”). Com valor de exclusão, a tradição pede o singular.',
          '**“Um e outro” × “um ou outro”**: “um e outro” aceita singular ou plural; “um ou outro” pede o singular.',
          '**Com, assim como, bem como (entre vírgulas)**: a preferência é concordar com o primeiro elemento (“O governador, com os secretários, anunciou o plano.”). Sem vírgulas, o verbo costuma ir ao plural.',
          '**Núcleos sinônimos ou em gradação**: o singular é o preferido. **Núcleos antônimos** pedem o plural (“A alegria e a tristeza marcaram o dia.”).',
          '**Pessoas gramaticais diferentes**: a 1ª pessoa prevalece sobre a 2ª, e a 2ª sobre a 3ª, sempre no plural (“Eu e você iremos juntos.”).',
          '**Reciprocidade** (verbo com se recíproco): o plural é obrigatório.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Palavras que variam ou não',
          colunas: ['Palavra', 'Quando varia', 'Quando não varia'],
          linhas: [
            ['mesmo', 'Com valor de adjetivo: “as mesmas questões”', 'Com valor de “realmente”: “elas mesmo disseram isso”'],
            ['próprio', 'Sempre, com valor de adjetivo: “as próprias candidatas”', 'Não há caso de invariável'],
            ['só', 'Com valor de “sozinho”: “as crianças ficaram sós”', 'Com valor de “somente”: “as crianças comeram só feijão”'],
            ['junto', 'Adjetivo: “os três viviam juntos”', 'Locução prepositiva: “junto de”, “junto a”'],
            ['meio', 'Numeral: “meia hora”', 'Advérbio (= um pouco): “ela está meio cansada”'],
            ['bastante', 'Adjetivo (= muitos): “havia provas bastantes”', 'Advérbio: “estudamos bastante”'],
            ['caro, barato', 'Adjetivo: “carros caros”', 'Advérbio: “o aluguel saiu caro”'],
            ['obrigado', 'Sempre, pelo gênero de quem fala: “obrigada”', 'Só em leitura que o toma como interjeição (minoritária)'],
            ['anexo, incluso, apenso', 'Adjetivo: “as fotos seguem anexas”', 'Nas locuções “em anexo” e “em apenso”'],
            ['possível', 'No plural: “as melhores opções possíveis”', 'Depois de “o/a mais”, no singular, ou com “quanto”: “o mais possível”, “tão rápido quanto possível”'],
            ['todo', 'Adjetivo diante de substantivo: “toda a turma”', 'Advérbio diante de adjetivo: “ela ficou toda feliz” (a norma culta concorda com o adjetivo)'],
            ['alerta', 'Pelos dicionários, adjetivo', 'Para a maioria das bancas, invariável: “os soldados ficaram alerta”'],
            ['menos, salvo, exceto', 'Nunca', 'Sempre invariáveis: “compre menos frutas”'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Adjetivo anteposto a dois substantivos**: concorda com o mais próximo, pela tradição (“novo cargo e funções”).',
          '**Adjetivo posposto a dois substantivos**: vai ao plural, no masculino se os gêneros forem misturados (“cargos e funções novos”).',
          '**Sentido exigido, sinônimos ou gradação**: o adjetivo concorda só com o mais próximo. **Antônimos**: o adjetivo concorda com ambos.',
          '**Predicativo**: em regra, concorda com todos os termos a que se refere (“Estavam cansados o pai e os filhos.”).',
          '**Expressões genéricas**: “é preciso”, “é necessário”, “é proibido” ficam invariáveis com termo genérico (“É proibido fumar aqui.”) e variam com termo determinado (“É proibida a entrada de animais.”). “Entrada proibida” está correto, pois equivale a “a entrada é proibida”.',
          '**Particípio**: varia como adjetivo na voz passiva analítica e em oração reduzida; não varia na locução de tempo composto (“Os candidatos haviam resolvido as questões.”).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido: sujeito depois do verbo',
        enunciado:
          'Assinale a frase correta: (a) “Faltaram duas canetas na sala de provas.” (b) “Faltou duas canetas na sala de provas.”',
        resolucao:
          'A alternativa (a). Pergunte “o que faltou?”: a resposta, “duas canetas”, é o sujeito, e o verbo deve concordar com ele em número, mesmo vindo depois. Em (b) o verbo ficou no singular, o que quebra a concordância.',
      },
      {
        tipo: 'atencao',
        texto:
          '**O que a banca explora**: sujeito afastado do verbo, verbo impessoal com o auxiliar no plural (“devem haver”, errado), se apassivador tratado como indeterminador, sujeito oracional e “ou”/“nem… nem”. Bancas de prestígio costumam cobrar mais esses pontos do que a concordância adjetiva simples.\n\n**Vir e ter**: no plural recebem circunflexo (vêm, têm), e os derivados seguem o padrão (mantêm, contêm, convêm).\n\n**Acordo Ortográfico (vigente desde 2009)**: “creem”, “leem” e “veem” perderam o acento; “vêm” e “têm” mantêm o acento do plural.\n\n**Silepse**: concordar com o sentido em vez da forma (“A plateia se levantou e aplaudiram.”) é figura de linguagem, não erro. A banca costuma tratá-la como recurso expressivo, não como desvio.\n\n**Dar, bater e soar com horas**: há divergência entre gramáticos. A banca costuma aceitar o verbo concordando com o número de horas (“Deram duas horas”); quando o sujeito é “relógio” ou “sino”, o verbo concorda com ele.',
      },
    ],
    fontes: [PESTANA_C28],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-regencia',
    titulo: 'Regência verbal e nominal',
    resumo:
      'A banca cobra a preposição exigida pelo verbo ou pelo nome, sobretudo antes de pronome relativo (“a quem”, “de que”), os verbos de regência clássica (assistir, visar, obedecer, preferir, implicar, chegar, pagar, esquecer, informar) e o uso de lhe × o/a. Também cai a regência de nomes, como “compatível com”, “residente em” e “preferível a”.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Regência** é a relação entre um termo **regente** (verbo, nome ou advérbio) e o **complemento** que ele exige, com ou sem preposição.\n\nNomes (substantivos, adjetivos e advérbios) exigem complemento sempre preposicionado, exceto quando o complemento é pronome oblíquo átono: nesse caso a preposição já está embutida no pronome (“ele lhe é leal” = “ele é leal a ela”).\n\nVerbos têm regência própria: alguns pedem preposição (“assistir a um jogo”), outros não (“comprar um livro”). Como a regência muda com o sentido, decore o verbo junto com o sentido que aparece na questão.',
      },
      {
        tipo: 'lista',
        itens: [
          'Adjetivos e substantivos pedem a preposição do complemento: “compatível com a lei”, “preferível a outras”, “residente em Goiás”, “favorável à reforma”, “avesso a mudanças”, “ansioso por notícias”.',
          'Advérbios em -mente seguem o adjetivo de origem: “compatível” gera “compativelmente com”; “contrário” gera “contrariamente a”.',
          'Muitos nomes guardam a preposição do prefixo ou da palavra-base: “dependência de”, “convívio com”, “inerente a” (“a responsabilidade é inerente ao cargo”).',
          'Se o nome da oração adjetiva pede preposição, ela vai antes do relativo (“o colega de quem falei”).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido: preposição antes do relativo',
        enunciado:
          'Qual frase mantém a regência correta? (1) “O instrutor a quem nos referimos chegou cedo.” (2) “O instrutor que nos referimos chegou cedo.” (3) “O instrutor que nos referimos a chegou cedo.”',
        resolucao:
          'A frase (1). O verbo “referir-se” pede a preposição “a”, que fica obrigatoriamente antes do relativo (“a quem”). Em (2) a preposição sumiu; em (3) ela foi deslocada para depois do relativo, o que é erro.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Verbos que mais caem (sentido e regência)',
          colunas: ['Verbo e sentido', 'Regência', 'Exemplo'],
          linhas: [
            ['Assistir (ver, presenciar)', 'VTI com a', 'Assisti ao espetáculo ontem. (pronome: assisti a ele, não “lhe”)'],
            ['Assistir (ajudar, apoiar)', 'VTD, preferencialmente', 'A equipe assistiu o paciente durante a noite.'],
            ['Assistir (morar)', 'VI, com adjunto de lugar', 'Assisto em Maringá há dez anos.'],
            ['Aspirar (almejar)', 'VTI com a', 'Aspiro a uma vaga de perito. (pronome: aspiro a ela)'],
            ['Visar (almejar, ter como fim)', 'VTI com a', 'A reforma visa ao equilíbrio das contas.'],
            ['Visar (pôr visto)', 'VTD', 'O gerente visou o contrato.'],
            ['Obedecer / desobedecer', 'VTI com a', 'Obedeci às normas do edital.'],
            ['Preferir', 'VTD, com “a” na comparação', 'Prefiro estudar pela manhã a estudar à noite.'],
            ['Implicar (acarretar)', 'VTD', 'A mudança implicou custos extras.'],
            ['Implicar (zombar, provocar)', 'VTI com', 'Ele vive implicando com o colega.'],
            ['Chegar (alcançar um lugar)', 'VTI com a', 'Cheguei a Curitiba de madrugada.'],
            ['Comunicar', 'Algo a alguém', 'Comuniquei a mudança aos servidores.'],
            ['Pagar / perdoar (coisa)', 'VTD', 'Paguei a dívida.'],
            ['Pagar / perdoar (pessoa)', 'VTI com a', 'Paguei ao credor.'],
            ['Esquecer / lembrar (sem se)', 'VTD', 'Esqueci o endereço da prova.'],
            ['Esquecer-se / lembrar-se', 'VTI com de', 'Lembrei-me da data da prova.'],
            ['Informar', 'Algo a alguém ou alguém de algo', 'Informei o resultado aos candidatos. Informei os candidatos do resultado.'],
            ['Responder (dar resposta a pergunta)', 'VTI com a', 'Respondi às perguntas da banca.'],
            ['Responder (dizer)', 'VTD', 'Respondi que não sabia.'],
            ['Simpatizar / antipatizar', 'VTI com', 'Simpatizo com a nova diretora.'],
            ['Gostar', 'VTI com de', 'Gosto de estudar pela manhã.'],
            ['Atender (dar atenção a pedido ou telefonema)', 'VTI com a', 'Atendi ao pedido do chefe.'],
            ['Precisar (necessitar)', 'VTI com de', 'Preciso de mais tempo para revisar.'],
            ['Proceder (realizar)', 'VTI com a', 'O juiz procedeu ao sorteio.'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**lhe × o/a**: “lhe” é sempre objeto indireto, nunca direto. Com verbo transitivo direto usa-se “o, a, os, as” (“não o vejo há anos”). Não aceitam “lhe”, mas pedem pronome tônico: aludir, anuir, aspirar (almejar), assistir (ver), visar (almejar), proceder, presidir, referir-se (“aspiro a ela”).',
          '**Passiva de verbo transitivo indireto**: a tradição e a maioria das bancas não aceitam passar para a voz passiva um verbo que é só VTI.',
          '**Pronominal × não pronominal**: “arrepender-se de”, “queixar-se de”, “atrever-se a” e “candidatar-se a” são essencialmente pronominais e pedem a preposição. Já simpatizar, antipatizar, consultar e sobressair não são pronominais: “Os jovens procuram sobressair na internet.”',
          '**Crase e paralelismo**: sem artigo antes do objeto direto, não há crase no objeto indireto (“Prefiro Ciências a Matemática”). Com artigo, há crase (“Prefiro a Ciência à Matemática”). Topônimo sem artigo: “Prefiro o Brasil a Cuba”.',
          '**Preferir**: a regência culta é “preferir X a Y”. Construções como “prefiro muito mais X do que Y” não são cultas.',
          '**“Antes morrer do que ser escravizado”**: a construção correta é essa; “antes quero morrer a ser escravizado” não é culta.',
        ],
      },
      {
        tipo: 'texto',
        texto:
          '**Preposição antes de oração subordinada**: pela tradição, a preposição exigida pelo verbo ou pelo nome deve estar explícita antes de oração subordinada substantiva completiva (“lembrou-se de que”; “tenho a impressão de que”). Alguns gramáticos admitem a omissão (“esqueceu-se que…”). A banca costuma cobrar a forma tradicional.\n\n**Sujeito de infinitivo depois de preposição**: pela tradição, não se contrai a preposição com o sujeito do infinitivo (“é chegada a hora de os meninos serem separados”). Outros gramáticos aceitam a contração (“é chegada a hora dos meninos”), e a banca costuma cobrar a versão tradicional.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Armadilhas recorrentes**:\n\n- “Chegar em”, “implicar em” e “assistir o filme” são usos coloquiais ou brasileirismos. A banca costuma cobrar a regência tradicional: chegar a, implicar (= acarretar) sem preposição, assistir a.\n\n- “Comunicar alguém de algo” está errado: o que se comunica é o fato, a alguém.\n\n- Não existe “atender-se” como pronominal: “Ninguém atendeu aos primeiros alarmes” (não “se atendeu”).\n\n- Não confunda complemento nominal ou verbal com adjunto adnominal, adjunto adverbial ou agente da passiva. Todos podem vir preposicionados, mas só o complemento é regido.\n\n- Em “lembrar” e “esquecer”, a mudança de sentido: sem “se” é VTD; com “se”, VTI com de.',
      },
    ],
    fontes: [PESTANA_C29],
    atualizadoEm: HOJE,
  },
];
