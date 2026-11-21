import type { ResumoTema } from '../../../types';
import { ATUALIZADO, CPP, D7950, L10826, L12037, L15295, LEP, POP_GENETICA, POP_LOCAL, POP_PAPILO, TOCCHETTO, VELHO } from './fontes';

export const RESUMOS_2: ResumoTema[] = [
  /* ---------- crim-balistica ---------- */
  {
    temaId: 'crim-balistica',
    titulo: 'Balística forense',
    resumo:
      'A banca cobra a divisão em balística interna, externa e terminal, o raiamento e o calibre, as partes do cartucho, os resíduos de disparo, o confronto microbalístico e a diferença entre as zonas de esfumaçamento e de tatuagem na estimativa da distância do tiro.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Balística forense** estuda as armas de fogo, as munições e os fenômenos do disparo para responder a questões da Justiça: qual arma disparou, se ela funciona, de onde e de que distância partiu o tiro. O CPP manda examinar os instrumentos empregados na infração “a fim de se lhes verificar a **natureza e a eficiência**” (art. 175).\n\nA divisão clássica (doutrina; ex.: Tocchetto) tem três ramos. Alguns autores acrescentam uma balística de transição entre a interna e a externa.\n\nDesde a Lei 13.964/2019, o **Banco Nacional de Perfis Balísticos** armazena características de classe e individualizadoras de projéteis e estojos deflagrados ligados a crimes. É sigiloso e gerido pela unidade oficial de perícia criminal (Lei 10.826/2003, art. 34-A).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Ramo', 'O que estuda', 'Exemplos de tema'],
          linhas: [
            ['Interna', 'O que acontece **dentro da arma**, da percussão da espoleta até a saída do projétil pela boca do cano', 'Funcionamento do mecanismo, queima do propelente, pressão dos gases'],
            ['Externa', 'A trajetória do projétil **desde a boca do cano até o alvo**', 'Gravidade, resistência do ar, estabilidade, alcance'],
            ['Terminal (de efeitos)', 'Os **efeitos do projétil no alvo**', 'Perfurações, ricochetes, lesões'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Alma raiada × alma lisa:** revólveres, pistolas, carabinas e fuzis têm cano raiado; espingardas, em regra, têm alma lisa.',
          '**Raiamento:** sulcos helicoidais (**raias**) separados por **cheios**. Imprimem rotação ao projétil, o que dá estabilidade giroscópica. Deixam no projétil marcas de **classe** (número, largura e sentido das raias, dextrogiro ou sinistrogiro) e **microestrias** individualizadoras.',
          '**Calibre nas armas raiadas:** diâmetro interno do cano. Segundo a doutrina, o calibre real se mede entre cheios opostos; o nominal é a designação comercial (.38, 9 mm, .40), que nem sempre coincide com a medida real.',
          '**Calibre nas armas de alma lisa:** em regra, é o número de esferas de chumbo, de diâmetro igual ao da alma, que perfazem uma libra-peso (há exceções designadas em fração de polegada). Quanto **maior o número, menor o diâmetro**: o calibre 12 é mais largo que o 20.',
          '**Cartucho:** estojo, espoleta (mistura iniciadora), carga de projeção (pólvora) e projétil. No cartucho de espingarda há também bucha e bagos de chumbo. A percussão pode ser **central** (espoleta no centro do culote) ou **radial**, também chamada anelar ou periférica (mistura na borda, como no .22).',
        ],
      },
      {
        tipo: 'texto',
        texto:
          '**Resíduos de disparo:** o tiro libera gases, fuligem, grãos de pólvora e partículas da mistura iniciadora. Nas munições convencionais, essas partículas costumam conter **chumbo, bário e antimônio**. A técnica de referência para identificá-las é a **microscopia eletrônica de varredura com espectroscopia por dispersão de energia (MEV-EDS)**, que avalia morfologia e composição. No local, o POP de Local de Crime (MJSP, 2024) manda coletar esses resíduos com **stubs** (fita adesiva de carbono pressionada contra a superfície, sem esfregar), um para cada mão do suspeito. Testes colorimétricos são apenas de orientação. Resíduo nas mãos indica **contato com resíduo**: a pessoa pode ter atirado, estado perto do disparo ou tocado superfície contaminada. Sozinho, ele **não prova a autoria**.\n\n**Confronto microbalístico:** o perito compara o projétil ou estojo questionado com padrões obtidos ao disparar a arma suspeita em meio de recolhimento (tanque de água, por exemplo), usando o **microscópio comparador balístico**. No projétil, compara as microestrias do raiamento. No estojo, as marcas do **percussor**, da **culatra**, do **extrator** e do **ejetor**. Características de classe divergentes **excluem** a arma; só as individualizadoras permitem **identificá-la**. A pistola ejeta os estojos no local; o revólver os retém no tambor.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Distância do tiro: efeitos na pele (noções, segundo a doutrina; detalhes na Medicina Legal)',
          colunas: ['Tiro', 'Achados típicos'],
          linhas: [
            ['Encostado', 'Gases entram no ferimento; sobre plano ósseo, ferida irregular (câmara de mina de Hoffmann); pode haver impressão da boca do cano na pele (sinal de Puppe-Werkgaertner)'],
            ['A curta distância', 'Além das orlas do projétil, zonas de **chamuscamento** (chama), **esfumaçamento** (fuligem depositada, que sai com lavagem) e **tatuagem** (grãos de pólvora incrustados, que não saem com lavagem)'],
            ['A distância', 'Só os efeitos do próprio projétil (orlas de contusão e de enxugo), sem esfumaçamento ou tatuagem'],
          ],
          nota: 'O alcance de cada zona depende da arma, da munição e do comprimento do cano. A estimativa pericial se faz com disparos-teste usando a mesma arma e munição. Roupas podem reter os resíduos.',
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Excluir ou identificar?',
        enunciado:
          'Projétil retirado da vítima tem seis raias com sentido à direita. O revólver apreendido tem cano com cinco raias à esquerda. É possível concluir algo sem microscópio comparador?',
        resolucao:
          'Sim. Número e sentido das raias são **características de classe**. Se divergem, a arma fica **excluída** como fonte do projétil. Se coincidissem, isso não bastaria para identificá-la: seria preciso confrontar as microestrias individualizadoras.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) a balística **interna** termina quando o projétil sai do cano, e a **externa** começa ali. (b) **Esfumaçamento** sai com lavagem; **tatuagem** não sai. (c) Em espingarda, calibre de número maior significa cano mais **fino**. (d) Revólver **não ejeta** estojos. (e) Resíduo de disparo nas mãos **não prova** que a pessoa atirou. (f) Características de classe **excluem**; as individualizadoras **identificam**.',
      },
    ],
    fontes: [CPP, L10826, POP_LOCAL, TOCCHETTO, VELHO],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- crim-papiloscopia ---------- */
  {
    temaId: 'crim-papiloscopia',
    titulo: 'Papiloscopia e identificação humana',
    resumo:
      'A banca cobra os princípios das impressões papilares (perenidade, imutabilidade, variabilidade e classificabilidade), os quatro tipos fundamentais de Vucetich com seus símbolos, os pontos característicos e os métodos de revelação de latentes conforme a superfície.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Papiloscopia** é a ciência da identificação humana pelos desenhos formados pelas **cristas papilares** e pelos sulcos da pele. Divide-se em **datiloscopia** (dedos), **quiroscopia** (palmas das mãos) e **podoscopia** (plantas dos pés). A **poroscopia**, estudo dos poros sobre as cristas, atribuída a Locard, funciona como complemento.\n\nAs impressões podem ser **visíveis** (deixadas com sangue, tinta, graxa), **moldadas** (em material plástico, como massa ou cera) ou **latentes** (invisíveis a olho nu, formadas por suor e gordura, que precisam ser reveladas).\n\nNa lei, o **civilmente identificado** não é submetido a identificação criminal, salvo nos casos da Lei 12.037/2009 (art. 1º). Quando cabe, a identificação criminal **inclui o processo datiloscópico e o fotográfico** (art. 5º). A Lei 13.964/2019 autorizou o **Banco Nacional Multibiométrico e de Impressões Digitais**, no Ministério da Justiça e Segurança Pública (art. 7º-C).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Princípios (postulados) das impressões papilares',
          colunas: ['Princípio', 'Significado'],
          linhas: [
            ['Perenidade', 'Os desenhos existem desde a vida intrauterina e persistem até a decomposição do cadáver'],
            ['Imutabilidade', 'Não mudam de forma ao longo da vida, só crescem proporcionalmente. Lesão que atinja a derme deixa cicatriz, mas não altera o restante do desenho'],
            ['Variabilidade', 'Não há dois desenhos iguais, nem entre dedos da mesma pessoa, nem entre gêmeos univitelinos'],
            ['Classificabilidade', 'Os desenhos podem ser classificados e arquivados, o que permite a busca em arquivos'],
          ],
          nota: 'Alguns autores acrescentam a praticabilidade: a coleta é simples e barata.',
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Sistema datiloscópico de Vucetich: tipos fundamentais (doutrina)',
          colunas: ['Tipo', 'Delta', 'Polegar', 'Demais dedos'],
          linhas: [
            ['Arco', 'Nenhum (linhas paralelas arqueadas)', 'A', '1'],
            ['Presilha interna', 'Um, à **direita** do observador (laçadas voltadas para a esquerda do observador)', 'I', '2'],
            ['Presilha externa', 'Um, à **esquerda** do observador (laçadas voltadas para a direita do observador)', 'E', '3'],
            ['Verticilo', 'Dois, um de cada lado (núcleo central em espiral ou círculos)', 'V', '4'],
          ],
          nota: 'Polegares recebem letra; os demais dedos, número. A fórmula é uma fração: no numerador, a série (mão direita); no denominador, a seção (mão esquerda), sempre do polegar ao mínimo. Ex.: V-4343 / E-3222 = mão direita com polegar e indicador em verticilo, médio em presilha externa, anular em verticilo e mínimo em presilha externa; mão esquerda com polegar e indicador em presilha externa e os demais em presilha interna. A grafia (hífen ou espaço) varia entre autores.',
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Pontos característicos** (minúcias) são acidentes das cristas, como ponto, ilhota, linha cortada (que termina), bifurcação, forquilha e encerro. A identificação resulta do confronto entre a impressão questionada e a padrão: os pontos devem coincidir em **natureza e localização**, sem divergência inexplicável. Sistemas automatizados (AFIS) selecionam candidatos, mas a conclusão é do papiloscopista ou perito.\n\n**Revelação de latentes** (POP de Papiloscopia, MJSP, 2024): o método depende da superfície. Em superfície **lisa e não porosa** (vidro, plástico rígido, superfície pintada ou envernizada), o POP indica **pós**, reagente de pequenas partículas, iodo e **cianoacrilato** (que polimeriza sobre os resíduos numa câmara de fumigação), com corantes fluorescentes. Em superfície **porosa** (papel, papelão, tecido, madeira sem acabamento), indica **iodo**, **ninidrina** (reage com os aminoácidos do suor), **DFO**, **nitrato de prata**, revelador físico e pós. Ninidrina, DFO e nitrato de prata são os típicos das porosas; o cianoacrilato, das não porosas; pós e iodo aparecem nos dois grupos. A revelação pelo iodo é temporária, por isso o POP manda fotografar imediatamente.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Classificando um polegar',
        enunciado:
          'O polegar direito apresenta um único delta, situado à esquerda de quem observa a impressão, com laçadas que se abrem para a direita do observador. Qual o símbolo?',
        resolucao:
          'Um delta só indica **presilha**. Com o delta à **esquerda** do observador, é **presilha externa**. Por ser polegar, o símbolo é a letra **E**; em outro dedo seria o número **3**.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) **arco** não tem delta; **verticilo** tem dois. (b) Presilha **interna** tem o delta à **direita** do observador; presilha **externa**, à **esquerda**. (c) Polegar recebe letra (A, I, E, V), os demais dedos recebem número (1 a 4). (d) A variabilidade vale até para **gêmeos univitelinos**, que têm o mesmo perfil de DNA nuclear. (e) Ninidrina, DFO e nitrato de prata são reveladores de superfícies **porosas**; o cianoacrilato, de **não porosas**. Cuidado com “exclusivamente”: pós e iodo constam do POP para os dois tipos. (f) O civilmente identificado só é identificado criminalmente nos casos da lei.',
      },
    ],
    fontes: [L12037, POP_PAPILO, VELHO],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- crim-genetica ---------- */
  {
    temaId: 'crim-genetica',
    titulo: 'Genética forense e DNA',
    resumo:
      'A banca cobra as diferenças entre DNA nuclear, mitocondrial e do cromossomo Y, o que são os STR, os cuidados de coleta e preservação e as regras do Banco Nacional de Perfis Genéticos (Lei 12.037/2009 e LEP, art. 9º-A), que mudaram com a Lei 15.295/2025.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A genética forense compara o **perfil genético** de um vestígio (sangue, sêmen, saliva, pelo com bulbo, osso, dente, células deixadas pelo toque) com o de uma **amostra de referência** ou com os perfis de um banco de dados.\n\nO marcador padrão é o **STR** (*short tandem repeat*): trechos curtos de DNA repetidos em sequência, cujo **número de repetições** varia entre as pessoas. Cada variante é um alelo. Em cada marcador autossômico a pessoa tem **até dois alelos**, um herdado da mãe e outro do pai. O laboratório amplifica vários marcadores ao mesmo tempo por **PCR**, inclui a amelogenina (marcador de sexo) e separa os fragmentos por **eletroforese capilar**. Pelo POP de Genética Forense do MJSP (2024), **três ou mais alelos em um ou mais marcadores** sugerem **mistura** de material de duas ou mais pessoas. O próprio POP alerta que amostras degradadas, inibidas ou com DNA em pouca ou excessiva quantidade podem imitar esse padrão sem ser mistura.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Tipo de DNA', 'Herança', 'Ponto forte', 'Limite'],
          linhas: [
            ['Nuclear autossômico (STR)', 'Biparental', 'Alto poder de individualização; é o perfil dos bancos de dados', 'Precisa de célula com núcleo e sofre mais com a degradação; não distingue gêmeos univitelinos'],
            ['Mitocondrial (mtDNA)', 'Materna', 'Muitas cópias por célula: útil em amostras degradadas, ossos, dentes e **pelos sem bulbo**', 'Não individualiza: é compartilhado por toda a linhagem materna'],
            ['Cromossomo Y (Y-STR)', 'Paterna (só homens)', 'Isola o perfil masculino em misturas com muito material feminino, como em crimes sexuais', 'Não individualiza: é compartilhado por toda a linhagem paterna'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Contaminação:** EPI completo e luvas trocadas a cada vestígio; cada vestígio manuseado e embalado **individualmente** (POP de Genética, 2024).',
          '**Coleta** (POPs de Local de Crime e de Genética, 2024): fluido biológico úmido se coleta com ao menos dois swabs secos. Mancha seca em superfície não absorvente, com swabs levemente umedecidos ou por raspagem com lâmina estéril; para DNA de toque, swab único ou duplo swab (úmido e depois seco). Em tecido, swab úmido ou recorte do fragmento.',
          '**Preservação:** o POP de Genética (2024) manda deixar os swabs secarem naturalmente, à temperatura ambiente e protegidos da luz solar, antes de acondicioná-los em envelopes de papel ou porta-swabs, e evitar umidade e calor, que favorecem a degradação. O POP de Local de Crime manda secar vestes em varais, em cômodo limpo, e refrigerar as amostras biológicas durante o transporte.',
          '**Referência:** colhem-se amostras de referência da vítima, do suspeito e, quando preciso, de pessoas para eliminação (por exemplo, quem manuseou o local).',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Banco Nacional de Perfis Genéticos: o que diz a lei vigente',
          colunas: ['Dispositivo', 'Regra'],
          linhas: [
            ['Lei 12.037, art. 5º, §§ 1º e 2º (red. Lei 15.295/2025)', 'A identificação criminal **incluirá** coleta de material biológico para perfil genético: (i) quando for essencial às investigações, por despacho judicial (art. 3º, IV); (ii) no recebimento da denúncia por crime com grave violência contra a pessoa, crime contra a liberdade sexual ou sexual contra vulnerável, certos crimes do ECA ou organização criminosa armada (art. 3º, VII); (iii) na prisão em flagrante por esses crimes'],
            ['Lei 12.037, art. 5º-A', 'Banco gerenciado por **unidade oficial de perícia criminal**. Não pode revelar traços somáticos ou comportamentais, **exceto determinação genética de gênero**. Dados **sigilosos**. Coincidência de perfis vai para **laudo de perito oficial** habilitado'],
            ['Lei 12.037, art. 7º-A', 'Exclusão do perfil: na **absolvição**; ou, na condenação, **a requerimento, após 20 anos do cumprimento da pena**'],
            ['LEP, art. 9º-A, caput', 'O **condenado à pena de reclusão em regime inicial fechado** é submetido obrigatoriamente à identificação do perfil genético, por técnica **adequada e indolor**, ao **ingressar no estabelecimento prisional**'],
            ['LEP, art. 9º-A, §§ 5º a 9º', 'Amostra só para identificação, **vedada a fenotipagem genética**; descartada após obtido o perfil, guardando-se material para nova perícia; coleta por agente público treinado, com cadeia de custódia; recusa = **falta grave** (também no art. 50, VIII); laudo por perito oficial'],
            ['LEP, art. 9º-A, § 10 (incl. Lei 15.295/2025)', 'Nos crimes **hediondos e equiparados**, o processamento dos vestígios e a inclusão dos perfis no banco devem ocorrer, **se possível, em até 30 dias** do recebimento da amostra pelo laboratório'],
            ['Decreto 7.950/2013', 'Institui, no MJSP, o **BNPG** e a **Rede Integrada de Bancos de Perfis Genéticos (RIBPG)**, que compartilha perfis da União, dos Estados e do DF. O BNPG é administrado por perito criminal federal com experiência em genética'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Qual DNA pedir?',
        enunciado:
          'Num local de crime foram achados só fios de cabelo sem bulbo, e a vítima de um estupro tem swab vaginal com muito material dela e pouco do agressor. Que análises fazem sentido?',
        resolucao:
          'Pelo **sem bulbo** quase não tem DNA nuclear: indica-se o **mitocondrial**, que só aponta a linhagem materna. No swab, o **Y-STR** isola o perfil masculino em meio ao material feminino, mas também não individualiza: aponta a linhagem paterna.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (a) mtDNA vem da **mãe** e o Y vem do **pai**, e nenhum dos dois individualiza. (b) **Gêmeos univitelinos** têm o mesmo perfil STR, mas impressões digitais diferentes. (c) O banco **não pode** revelar traços somáticos ou comportamentais, exceto o **gênero**. (d) **Redação vigente da LEP:** desde a Lei 15.295/2025 (em vigor desde janeiro de 2026), o critério do art. 9º-A é a **reclusão em regime inicial fechado**. A redação anterior falava em crime doloso com violência grave contra a pessoa, crime contra a vida, contra a liberdade sexual ou sexual contra vulnerável, e material antigo ainda traz esse texto. O § 5º hoje veda só a **fenotipagem genética**. (e) Recusa do condenado é **falta grave**.',
      },
    ],
    fontes: [L12037, LEP, L15295, D7950, POP_GENETICA, VELHO],
    atualizadoEm: ATUALIZADO,
  },
];
