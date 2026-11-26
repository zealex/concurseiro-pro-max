import type { ResumoTema } from '../../../types';

const PESTANA_C30 = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 30).';
const PESTANA_C31 = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (cap. 31).';
const HOJE = '2026-11-26';

export const RESUMOS_LIVRO_R13: ResumoTema[] = [
  {
    temaId: 'lp-crase',
    titulo: 'Crase',
    resumo:
      'A banca cobra a regra básica (preposição a + artigo feminino a) e, sobretudo, as exceções: palavra masculina, verbo, pronomes, “uma”, horas, locuções femininas, topônimos e os casos facultativos (possessivo, nome próprio, “até”).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A **crase** é a fusão de duas vogais “a” iguais: a **preposição a**, exigida por um verbo ou por um nome, com o **artigo feminino a(s)** ou com o **pronome demonstrativo** que começa por “a” (**aquele(s), aquela(s), aquilo**). O fenômeno é a crase; o sinal gráfico que a indica é o **acento grave** (à, às). Por isso, o nome do acento é “grave”, e não “crase”.\n\nDuas perguntas resolvem a maior parte das questões, nesta ordem: o termo anterior **pede a preposição a**? e o termo seguinte **aceita o artigo feminino a**? Se as duas respostas forem sim, há crase. A banca, porém, quase sempre testa uma exceção, por isso o quadro abaixo é o que mais rende na prova.',
      },
      {
        tipo: 'lista',
        ordenada: true,
        itens: [
          '**Identifique o regente**: verbo, nome ou locução. Verbos como ir, voltar, referir-se, dar, pertencer e assistir (no sentido de ver) pedem a preposição “a”.',
          '**Veja o termo seguinte**: se cabe o artigo “a” antes dele (“a sala”, “a empresa”), a fusão é possível.',
          '**Faça o teste do masculino**: troque o termo por uma palavra masculina. Se no lugar do “à” couber “ao”, a crase costuma estar correta. Se não couber “ao”, em regra não há crase.',
          '**Confira as exceções do quadro antes de marcar**: é nelas que a prova costuma errar.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Quadro de decisão',
          colunas: ['Situação', 'Crase', 'Exemplo'],
          linhas: [
            ['Locução adverbial, adjetiva, prepositiva ou conjuntiva com núcleo feminino (à vista, à noite, à espera de, à medida que)', 'Obrigatória', 'Pagou à vista e saiu à noite.'],
            ['Hora indicada pelo relógio', 'Obrigatória', 'A reunião começa às 8h e termina à uma hora da tarde.'],
            ['“à moda de” ou “à maneira de” subentendido, com adjetivo feminino', 'Obrigatória', 'Pediu o filé à milanesa.'],
            ['Antes de palavra masculina', 'Proibida (salvo se houver feminino subentendido)', 'Viajei a pé até o sítio.'],
            ['Antes de verbo no infinitivo', 'Proibida', 'Começou a estudar cedo.'],
            ['Antes do artigo indefinido “uma(s)”', 'Proibida', 'Refiro-me a uma pessoa de confiança.'],
            ['Antes de pronome pessoal, indefinido, interrogativo, relativo ou demonstrativo (exceto aquele, aquela, aquilo)', 'Proibida', 'Entreguei o recado a ele. A quem você se referiu?'],
            ['Antes de pronome de tratamento (senhora, dona, dama)', 'Obrigatória (exceção)', 'Respondi à senhora que me procurou.'],
            ['Antes de indefinido no plural (poucas, muitas, demais, outras, várias)', 'Obrigatória (exceção)', 'Dediquei-me às muitas tarefas da semana.'],
            ['Antes de demonstrativo aquele(s), aquela(s), aquilo', 'Obrigatória', 'Refiro-me àquela empresa.'],
            ['Antes de “a qual”, “as quais” (relativo com preposição exigida pelo verbo ou nome)', 'Obrigatória', 'A instituição à qual pertenço é antiga.'],
            ['Feminino genérico, sem artigo nem especificação', 'Proibida', 'Ela se dedica a pesquisa científica.'],
            ['Feminino especificado (com artigo, adjetivo ou oração que o delimite)', 'Obrigatória', 'Ela se dedica à pesquisa científica que fez em Minas.'],
            ['Topônimo que aceita artigo (a Bahia, a França)', 'Obrigatória', 'Fui à Bahia e voltei da Bahia.'],
            ['Topônimo sem artigo (Lisboa, Curitiba)', 'Proibida', 'Fui a Lisboa e voltei de Lisboa.'],
            ['Correlação “de ... a” com determinante contraído', 'Obrigatória', 'Trabalha da segunda à sexta.'],
            ['Locução “à distância” sem especificação (tradição gramatical)', 'Proibida', 'Fez um curso a distância.'],
            ['Possessivo adjetivo feminino (a sua, a nossa)', 'Facultativa', 'Enviei o pedido a/à nossa empresa.'],
            ['Possessivo substantivo (sem nome depois, “a sua” = a sua empresa)', 'Obrigatória', 'Entreguei o relatório a diversos setores, mas não à sua.'],
            ['Nome próprio feminino (Marta, Juliana)', 'Facultativa', 'Escrevi à/a Marta ontem.'],
            ['“até” + a(s) (até a porta, até às 22h)', 'Facultativa', 'Caminhei até à padaria.'],
            ['Hora depois de outra preposição (desde, após, para, entre)', 'Proibida', 'Após as 22h, a portaria fecha.'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Locuções de meio ou instrumento** (à máquina, à caneta, à mão) dividem os gramáticos: uns exigem o acento por tradição, outros o dispensam. A banca costuma cobrar o acento nesses casos e é a escolha mais segura quando houver ambiguidade. Se a questão for controversa, siga a posição que a banca adotou em questões semelhantes.\n\n**Paralelismo em coordenação**: há quatro construções aceitáveis. Com preposição e artigo em todos os termos (à leitura, à discussão e à compreensão); com preposição e artigo só no primeiro e omissão a partir do segundo (à leitura, discussão e compreensão); com preposição sem artigo em todos (a leitura, a discussão e a compreensão); ou com preposição omitida a partir do segundo (a leitura, discussão e compreensão). O erro é misturar: “à leitura, a discussão” está errado. A banca cobra muito esse ponto, e nem sempre é coerente, então confira o paralelismo antes de decidir.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — três acentos em uma frase',
        enunciado:
          'Complete as lacunas: “Ela se dirigiu ___ sala de reunião ___ 9h e, ___ medida que o assunto avançava, ficou mais segura.”',
        resolucao:
          '1) “à sala”: dirigir-se pede a preposição “a” e “sala” aceita o artigo “a”, então A + A = À. Teste: “sala” vira “salão”, e aqui cabe “ao salão”. 2) “às 9h”: hora indicada pelo relógio tem crase obrigatória; “às nove horas” é a + as. 3) “à medida”: locução conjuntiva com núcleo feminino, crase obrigatória.',
      },
      {
        tipo: 'atencao',
        texto:
          'Três pegadinhas recorrentes: (a) “entre as 14h e as 18h” não tem crase, porque a correlação não é “de ... a”, e os “as” são apenas artigos; (b) “há uma hora” (tempo decorrido) e “daqui a uma hora” (tempo impreciso) não têm crase, enquanto “à uma hora” (hora do relógio) tem; (c) “à distância” ganha o acento apenas quando especificada: “à distância de cem metros”. Nunca decida pelo “parece certo”: aplique o teste do masculino e confira a exceção.',
      },
      {
        tipo: 'atencao',
        texto:
          'Armadilhas de sentido: “casa” no sentido de lar não recebe crase (“voltei a casa cedo”), salvo se vier especificada (“voltei à casa da minha avó”). “Terra”, em oposição a bordo, também não recebe crase (“os marinheiros retornaram a terra”), mas, se especificada (“à terra natal”), recebe. A palavra “mulher” ou “criança” precedida de “a” pode ser genérica (sem crase) ou definida (com crase): “Ele se refere a estudante em geral” (sem crase) x “Ele se refere à estudante da turma B” (com crase).',
      },
    ],
    fontes: [PESTANA_C30],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-que-se-como',
    titulo: 'Que, se e como: classes e emprego',
    resumo:
      'A banca cobra a classificação correta de cada vocábulo pelo sentido e pela função. No “que”, a distinção entre conjunção integrante e pronome relativo; no “se”, as partículas apassivadora, indeterminadora e a conjunção condicional; no “como”, as conjunções comparativa, causal e conformativa.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O **que** tem muitas classificações, mas, em concurso, importam sobretudo duas: **conjunção integrante** e **pronome relativo**. Para decidir, primeiro veja se o “que” retoma um termo da oração anterior ou apenas introduz uma oração.\n\nSe o “que” retoma um termo antecedente e exerce função dentro da oração que ele inicia, é **pronome relativo**. Se ele apenas introduz uma oração que completa outra (sujeito ou objeto), sem retomar nada, é **conjunção integrante**.',
      },
      {
        tipo: 'lista',
        itens: [
          '**Teste do “o qual”**: se “o qual”, “a qual”, “os quais” ou “as quais” puder substituir o “que” com o mesmo sentido, é pronome relativo. O teste só vale se houver um termo antecedente.',
          '**Teste do “isso”**: se a oração iniciada por “que” puder ser trocada por “isso”, é conjunção integrante. Exemplo: “Espero que ele venha” → “Espero isso”.',
          '**Preposição antes do relativo**: se o verbo ou o nome pede preposição, ela fica antes do pronome relativo: “a cidade na qual nasci” (nascer em).',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Outras classificações do “que”',
          colunas: ['Classe', 'Como reconhecer', 'Exemplo'],
          linhas: [
            ['Substantivo', 'Precedido de determinante; significa algo indefinido', 'Ele tem um quê de mistério.'],
            ['Interjeição', 'Exclamação de espanto; recebe acento', 'Quê? Não acredito!'],
            ['Advérbio de intensidade', 'Modifica adjetivo ou advérbio e equivale a “quão”', 'Que bonita ficou a cidade!'],
            ['Pronome indefinido', 'Modifica substantivo e equivale a “quanto” ou “qual”', 'Que alegria rever você!'],
            ['Pronome interrogativo', 'Pergunta direta ou indireta; em fim de frase é tônico e recebe acento', 'Você precisa de quê?'],
            ['Preposição acidental', 'Em “ter/haver + que + infinitivo”, equivale a “de”, “a” ou “para”', 'Há que estudar todos os dias.'],
            ['Partícula expletiva', 'Dá ênfase e pode ser retirada sem prejuízo da estrutura', 'Ele que se vire sozinho.'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Conjunções do “que” (coordenativas e subordinativas)',
          colunas: ['Tipo', 'Equivale a', 'Exemplo'],
          linhas: [
            ['Aditiva (coordenativa)', 'e', 'Chorou que chorou e não conseguiu parar.'],
            ['Adversativa (coordenativa)', 'mas', 'Foi você, que eu não fui.'],
            ['Alternativa (coordenativa)', 'ou... ou', 'Que ele fique, que vá embora, não me importa.'],
            ['Explicativa (coordenativa)', 'porque, pois', 'Vamos embora, que já é tarde.'],
            ['Causal', 'porque', 'Dormiu no ponto, que trabalhara a noite toda.'],
            ['Consecutiva', 'de modo que', 'Estava tão cansada que caiu no sofá.'],
            ['Comparativa', 'do que', 'Ela é mais atenta que a irmã.'],
            ['Concessiva', 'embora', 'Estude sempre, que o cansaço venha.'],
            ['Final', 'para que', 'Falou alto que todos ouvissem.'],
            ['Temporal', 'depois que, logo que', 'Encerrada que foi a reunião, todos saíram.'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — integrante ou relativo?',
        enunciado: 'Classifique os dois “que” em: “Espero que o ônibus que passa aqui chegue cedo.”',
        resolucao:
          '1º “que” (espero que…): teste do “isso”, pois “Espero isso” faz sentido. É conjunção integrante. 2º “que” (ônibus que passa): retoma “ônibus”, e “o qual” substitui sem prejuízo. É pronome relativo, sujeito de “passa”.',
      },
      {
        tipo: 'atencao',
        texto:
          'Armadilhas do “que”: (a) em “é que” de ênfase, o “que” é expletivo e a locução pode sair da frase; já “é que” com verbo vicário equivale a uma conjunção causal, como em “Ele não apareceu, é que perdeu o ônibus” (= porque perdeu o ônibus). (b) Em frases optativas, como “Que Deus o abençoe!”, a análise admite mais de uma leitura; quando a questão trouxer esse caso, a banca costuma aceitar a classificação que ela mesma adotou. (c) O acento de “quê” permanece em interjeição, em substantivo e em pronome interrogativo no fim da frase.',
      },
      {
        tipo: 'texto',
        texto:
          'O **se** pode ser substantivo, pronome oblíquo átono ou conjunção. As três classificações que mais caem são a **partícula apassivadora**, o **índice de indeterminação do sujeito** e a **conjunção condicional**. Para separá-las, veja primeiro se o verbo tem sujeito explícito e se esse sujeito sofre a ação.\n\n**Partícula apassivadora**: o verbo é transitivo direto e tem sujeito explícito paciente. Teste: passe para a voz passiva analítica (ser + particípio). “Vendem-se casas” → “Casas são vendidas”. O verbo concorda com o sujeito.\n\n**Índice de indeterminação do sujeito**: o verbo fica sempre na 3ª pessoa do singular, sem sujeito explícito. Teste: insira “alguém” como sujeito. “Vive-se bem aqui” → “Alguém vive bem aqui”.\n\n**Conjunção condicional**: equivale a “caso”. Exemplo: “Se chover, não sairemos” → “Caso chova, não sairemos”.',
      },
      {
        tipo: 'lista',
        itens: [
          '**Se integrante**: troque a oração por “isso”. “Não sei se ele vem” → “Não sei isso”.',
          '**Indeterminação com objeto preposicionado**: no VTD com objeto preposicionado, o “se” indetermina o sujeito. “Respeita-se aos professores” é indeterminação; “Respeitam-se os professores” é apassivação.',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Outras classificações do “se”',
          colunas: ['Classe', 'Como reconhecer', 'Exemplo'],
          linhas: [
            ['Pronome reflexivo', 'O sujeito pratica e recebe a ação; se houver mais de um ser, é recíproco', 'Ela se penteou antes da festa. Os irmãos se abraçaram.'],
            ['Parte integrante do verbo', 'Verbo pronominal que não se conjuga sem o “se”', 'Ele se queixou do barulho.'],
            ['Partícula expletiva (de realce)', 'Com verbo intransitivo; pode ser retirada', 'Os visitantes se foram cedo. (= foram cedo)'],
            ['Substantivo', 'Precedido de determinante', 'Não há um se na sua resposta.'],
            ['Conjunção causal', 'equivale a “já que”', 'Se o prazo acabou, não adianta insistir.'],
            ['Conjunção concessiva', 'equivale a “embora”', 'Se bem que cansado, ele continuou.'],
            ['Conjunção temporal', 'equivale a “quando”, com verbo no presente', 'Se entro na sala, cumprimento todos.'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — três “se” em uma frase',
        enunciado: 'Classifique os três “se”: “Se houver vagas, precisa-se de voluntários, e alugam-se salas.”',
        resolucao:
          '1) “Se houver vagas”: equivale a “caso haja”, logo é conjunção condicional. 2) “precisa-se de voluntários”: verbo intransitivo de sujeito indeterminado (precisar de), no singular; “Alguém precisa de voluntários” confirma. Índice de indeterminação do sujeito. 3) “alugam-se salas”: “salas” é sujeito paciente e o verbo concorda com ele no plural. Partícula apassivadora.',
      },
      {
        tipo: 'atencao',
        texto:
          'Descarte o reflexivo antes de classificar: se o sujeito pratica e sofre a ação ao mesmo tempo (ela se machucou; os amigos se abraçaram), o “se” é reflexivo ou recíproco, mesmo que o sujeito seja plural. Também não confunda “se não” com “senão”, que é outra palavra. A banca cobra, sobretudo, a conjunção condicional e a diferença entre apassivadora e indeterminadora; a construção “se caso” é pleonasmo, e deve-se usar “se” ou “caso”, nunca os dois.',
      },
      {
        tipo: 'texto',
        texto:
          'O **como** tem muitas classificações, mas a prova cobra sobretudo três conjunções: **comparativa**, **causal** e **conformativa**. Como as três dependem do sentido da oração que o “como” inicia, leia a oração inteira e teste a substituição antes de classificar.\n\n**Causal**: pode ser trocado por “porque” ou “já que”; explica o motivo do que foi dito. “Como não havia vagas, fui embora.”\n\n**Comparativa**: introduz o segundo termo de uma comparação, geralmente com “tão”, “tanto”, “mais” ou “menos” na oração principal. “Ana é tão dedicada como a irmã.”\n\n**Conformativa**: equivale a “conforme” ou “segundo”. “Como o edital previa, a prova terá duas etapas.”',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Outras classificações do “como”',
          colunas: ['Classe', 'Como reconhecer', 'Exemplo'],
          linhas: [
            ['Advérbio de modo (interrogativo)', 'Pergunta sobre o modo; adjunto adverbial', 'Como você resolveu o problema?'],
            ['Advérbio de intensidade', 'Equivale a “quão” ou “quanto”, junto de adjetivo ou advérbio', 'Como o mar está bonito hoje!'],
            ['Substantivo', 'Vem determinado por artigo ou pronome', 'O como da questão confundiu os alunos.'],
            ['Interjeição', 'Exclamação de espanto', 'Como?! Repita, por favor.'],
            ['Verbo', 'Primeira pessoa do singular do presente de “comer” (sem acento)', 'Eu como pouco no café da manhã.'],
            ['Preposição acidental', 'Equivale a “por” ou “na condição de”', 'Foi contratado como consultor.'],
            ['Pronome relativo', 'Retoma “modo”, “maneira”, “jeito” ou “forma”', 'A forma como ele explica é clara.'],
            ['Conjunção aditiva', 'Em correlação (“não só... como também”); equivale a “e também”', 'Não só os alunos como também os professores gostaram.'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — qual conjunção?',
        enunciado:
          'Classifique o “como” em cada oração: (1) “Como não me avisaram, não compareci.” (2) “Ela corre como uma atleta experiente.” (3) “Faremos como o edital determina.”',
        resolucao:
          '(1) causal: equivale a “porque” e explica o motivo de não ter comparecido. (2) comparativa: compara o modo de correr com o de uma atleta. (3) conformativa: equivale a “conforme”.',
      },
      {
        tipo: 'atencao',
        texto:
          'Cuidados com o “como”: “como se” (com verbo no imperfeito do subjuntivo) costuma indicar comparação hipotética, como em “Falou como se soubesse tudo”. Entre causal e comparativa, o teste da substituição decide: se a troca por “porque” soar bem, é causal; se a troca por “assim como” soar bem, é comparativa. Em “como” de início de oração, a banca costuma explorar a confusão entre causal e conformativa. E não confunda o “como” interrogativo de modo (“Como resolver?”) com a conjunção causal: são classes diferentes.',
      },
    ],
    fontes: [PESTANA_C31],
    atualizadoEm: HOJE,
  },
];
