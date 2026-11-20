import type { ResumoTema } from '../../../types';

const BECHARA = 'BECHARA, Evanildo. Moderna Gramática Portuguesa (obra de referência).';
const CUNHA_CINTRA = 'CUNHA, Celso; CINTRA, Lindley. Nova Gramática do Português Contemporâneo (obra de referência).';
const MANUAL =
  'BRASIL. Presidência da República. Manual de Redação da Presidência da República. 3ª ed. Brasília, 2018 (item 4.1.1 — concordância com pronomes de tratamento).';
const HOJE = '2026-11-20';

/** Resumos de gramática (2): pontuação, concordância, regência, crase e colocação pronominal. */
export const RESUMOS_GRAMATICA_2: ResumoTema[] = [
  {
    temaId: 'lp-pontuacao',
    titulo: 'Pontuação',
    resumo:
      'A banca cobra sobretudo a vírgula: proibida entre termos essenciais ligados, obrigatória em aposto, vocativo, explicativas e termos deslocados — e o efeito de pôr ou tirar vírgulas no sentido. Também caem ponto e vírgula, dois-pontos e travessão.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Pontuação é **sintaxe**, não respiração. A regra de ouro: **não se separam por vírgula** termos que se ligam diretamente — sujeito e verbo, verbo e complemento, nome e complemento nominal —, mesmo quando o sujeito é longo.\n\nA vírgula aparece para **isolar** o que está fora da ordem direta ou o que é acessório (aposto, vocativo, adjunto deslocado, oração explicativa) e para **separar** elementos coordenados (enumeração, orações coordenadas).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Vírgula: usos e proibições',
          colunas: ['Caso', 'Regra', 'Exemplo'],
          linhas: [
            ['Sujeito × verbo', 'Proibida', 'Os documentos necessários para a posse serão conferidos. (sem vírgula)'],
            ['Verbo × complemento', 'Proibida', 'O médico entregou o atestado ao paciente.'],
            ['Vocativo', 'Obrigatória', 'Dr. Ricardo, o laudo está pronto.'],
            ['Aposto explicativo', 'Obrigatória', 'Dra. Helena, a coordenadora, aprovou a escala.'],
            ['Oração adjetiva explicativa', 'Obrigatória', 'O Brasil, que tem dimensões continentais, ...'],
            ['Oração adjetiva restritiva', 'Não se usa', 'Os médicos que atuam na emergência ...'],
            ['Adjunto adverbial deslocado', 'Facultativa se curto; recomendada se longo; entre vírgulas se intercalado', 'No plantão de ontem, foram atendidos trinta pacientes.'],
            ['Conjunção deslocada', 'Entre vírgulas', 'Os enfermeiros, porém, não foram consultados.'],
            ['Antes de “mas”', 'Usa-se', 'O exame foi pedido, mas o resultado não saiu.'],
            ['Antes de “e”', 'Em regra, não; sim com sujeitos diferentes, valor adversativo ou polissíndeto', 'O plantonista examinou, e a enfermeira registrou.'],
            ['Elipse do verbo (zeugma)', 'Marca o verbo omitido', 'Eu prefiro café; ela, chá.'],
            ['Oração adverbial anteposta', 'Recomendada', 'Quando o laudo ficou pronto, avisamos a família.'],
            ['Expressões explicativas', 'Isoladas', 'isto é, ou seja, por exemplo, aliás'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Ponto e vírgula**: separa orações coordenadas longas ou que já têm vírgulas; separa itens de enumeração com vírgulas internas (“o Dr. Paulo, cardiologista; a Dra. Ana, pediatra”); separa itens de incisos em normas.',
          '**Dois-pontos**: anunciam enumeração, citação, explicação ou consequência (“O resultado surpreendeu: a infecção caiu pela metade”).',
          '**Travessão**: isola comentário ou realce (como parênteses ou vírgulas) e marca fala em discurso direto. Não use hífen no lugar de travessão.',
          '**Aspas**: citação, fala alheia, ironia ou distanciamento, termos em sentido especial.',
          '**Parênteses**: intercalam explicação, data, referência ou sigla.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — vírgula que muda o sentido',
        enunciado:
          'Compare: (1) “Os pacientes que estavam em jejum fizeram o exame.” (2) “Os pacientes, que estavam em jejum, fizeram o exame.” Qual a diferença?',
        resolucao:
          'Em (1), a oração é restritiva: só os pacientes em jejum fizeram o exame (havia outros). Em (2), é explicativa: todos os pacientes estavam em jejum e todos fizeram o exame. Mesmas palavras, sentidos diferentes.',
      },
      {
        tipo: 'atencao',
        texto:
          'A pegadinha mais cobrada é a **vírgula entre sujeito longo e verbo** (“A enfermeira que estava de plantão, chamou o médico” — errado). Outra: dizer que a retirada de vírgulas de uma oração explicativa “mantém o sentido” — não mantém, ela vira restritiva. E o vocativo nunca dispensa a vírgula.',
      },
    ],
    fontes: [BECHARA, CUNHA_CINTRA],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-concordancia',
    titulo: 'Concordância verbal e nominal',
    resumo:
      'A banca cobra sujeito posposto, verbos impessoais (haver, fazer), voz passiva sintética × índice de indeterminação, expressões partitivas, verbo “ser” e as palavras que variam ou não (anexo, meio, bastante, menos, obrigado, proibido).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Concordância verbal**: o verbo concorda com o sujeito em número e pessoa — inclusive quando o sujeito vem **depois** do verbo (“Faltaram dois médicos”). Por isso, ache o sujeito antes de tudo.\n\n**Concordância nominal**: artigos, adjetivos, pronomes e numerais concordam em gênero e número com o substantivo a que se referem. Advérbios são invariáveis — o segredo das palavras “meio”, “bastante” e “muito” é descobrir se são adjetivos/pronomes (variam) ou advérbios (não variam).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Concordância verbal — casos de prova',
          colunas: ['Caso', 'Regra', 'Exemplo correto'],
          linhas: [
            ['Sujeito posposto', 'Verbo concorda com ele', 'Chegaram os novos residentes.'],
            ['Haver = existir, ocorrer, tempo', 'Impessoal (singular), inclusive o auxiliar', 'Havia vagas. Houve falhas. Deve haver leitos.'],
            ['Existir, ocorrer, acontecer', 'Pessoais (concordam)', 'Existem casos. Devem existir opções.'],
            ['Fazer (tempo, clima)', 'Impessoal', 'Faz três meses. Fez dias frios.'],
            ['VTD + se (passiva sintética)', 'Concorda com o sujeito', 'Alugam-se salas. Consertam-se aparelhos.'],
            ['VTI/VI + se (indeterminação)', 'Singular', 'Precisa-se de técnicos. Trata-se de casos graves.'],
            ['Sujeito composto anteposto', 'Plural', 'O diretor e a coordenadora aprovaram.'],
            ['Sujeito composto posposto', 'Plural ou concordância com o mais próximo', 'Saiu o laudo e a receita. / Saíram o laudo e a receita.'],
            ['Pessoas diferentes', 'Prevalece a 1ª; depois a 2ª', 'O médico e eu discutimos o caso.'],
            ['A maioria de, grande parte de + plural', 'Singular ou plural', 'A maioria dos candidatos chegou/chegaram.'],
            ['Mais de um', 'Singular (em regra)', 'Mais de um paciente reclamou.'],
            ['Pronome relativo “que”', 'Concorda com o antecedente', 'Fomos nós que organizamos.'],
            ['Nome próprio no plural com artigo', 'Plural', 'Os Estados Unidos anunciaram.'],
            ['Dar, bater, soar + horas', 'Concorda com as horas (se não houver outro sujeito)', 'Deram três horas. / O relógio deu três horas.'],
            ['Sujeito oracional', 'Singular', 'Foi necessário revisar o orçamento.'],
            ['Pronome de tratamento', 'Verbo na 3ª pessoa', 'Vossa Excelência está convidado.'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Verbo “ser”',
          colunas: ['Situação', 'Concorda com', 'Exemplo'],
          linhas: [
            ['Horas e distâncias', 'O numeral', 'São dez horas. É uma hora. É meio-dia. São dois quilômetros.'],
            ['Datas', '“Dia” (se expresso) ou o numeral', 'Hoje é dia 10. / Hoje são 10 de março.'],
            ['Quantidade (preço, peso) vista como um todo', 'Singular', 'Cem reais é pouco. Dois quilos é suficiente.'],
            ['Pronome interrogativo quem/que + plural', 'O predicativo', 'Quem eram os responsáveis?'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Concordância nominal — palavras que caem',
          colunas: ['Palavra', 'Regra', 'Exemplo'],
          linhas: [
            ['anexo, incluso, quite, obrigado, mesmo, próprio', 'Adjetivos: concordam', 'Seguem anexas as cópias. Estamos quites. Elas mesmas. Obrigada (mulher).'],
            ['em anexo', 'Locução invariável', 'Seguem, em anexo, as cópias.'],
            ['meio', 'Numeral varia (metade); advérbio não varia (um pouco)', 'meia dúzia; meio-dia e meia; meio nervosa'],
            ['bastante', 'Adjetivo varia (= muitos); advérbio não', 'bastantes leitos; bastante cansadas'],
            ['menos', 'Sempre invariável', 'menos pessoas (nunca “menas”)'],
            ['é proibido / é necessário / é bom', 'Variam se o substantivo tiver determinante', 'É proibida a entrada. / É proibido entrada.'],
            ['só', 'Varia se = sozinho; invariável se = somente', 'Elas ficaram sós. / Só elas vieram.'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — passiva sintética ou indeterminação?',
        enunciado: 'Corrija, se necessário: (1) “Vende-se equipamentos usados.” (2) “Precisam-se de voluntários.”',
        resolucao:
          '(1) “Vendem-se equipamentos usados”: vender é VTD, o “se” é apassivador e o sujeito é “equipamentos” (= equipamentos são vendidos). (2) “Precisa-se de voluntários”: precisar é VTI (precisar de), o “se” indetermina o sujeito e o verbo fica no singular.',
      },
      {
        tipo: 'atencao',
        texto:
          'Haver impessoal **contamina o auxiliar**: “Deve haver”, “Vai haver”, “Pode haver” — nunca “devem haver”. Já com **existir** o auxiliar vai ao plural: “Devem existir”. Com pronomes de tratamento, o adjetivo concorda com o **sexo** da pessoa, segundo o Manual de Redação (“Vossa Senhoria será informado”, a um homem).',
      },
    ],
    fontes: [BECHARA, CUNHA_CINTRA, MANUAL],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-regencia',
    titulo: 'Regência verbal e nominal',
    resumo:
      'A banca cobra os verbos de regência clássica (assistir, aspirar, visar, obedecer, preferir, implicar, chegar/ir, esquecer/lembrar, pagar/perdoar, informar), a preposição antes do pronome relativo e a regência de nomes (preferível a, compatível com, residente em).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Regência** é a relação entre um termo que exige complemento (verbo ou nome) e esse complemento, com ou sem preposição. Muitos verbos **mudam de sentido conforme a regência**: “aspirar o ar” (sorver) × “aspirar ao cargo” (desejar).\n\nAs questões seguem a **norma-padrão tradicional**, ainda que o uso coloquial seja diferente (“assisti o filme”, “chegou no hospital”). Quando a banca escreve “segundo a norma-padrão”, é a regência tradicional que vale.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Verbos de regência clássica',
          colunas: ['Verbo', 'Sentido e regência', 'Exemplo'],
          linhas: [
            ['assistir', 'ver, presenciar: VTI (a), não aceita “lhe”; caber, pertencer: VTI (a); dar assistência: VTD', 'Assisti ao debate. Assiste ao servidor o direito de recorrer. O médico assistiu o paciente.'],
            ['aspirar', 'sorver: VTD; desejar: VTI (a), não aceita “lhe”', 'Aspirou a secreção. Aspira ao cargo (aspira a ele).'],
            ['visar', 'mirar, rubricar: VTD; objetivar: VTI (a), na gramática tradicional (parte dos gramáticos modernos aceita também VTD)', 'Visou o documento. O programa visa ao bem-estar.'],
            ['obedecer / desobedecer', 'VTI (a)', 'Obedeça ao protocolo; obedeço-lhe.'],
            ['preferir', 'VTDI (algo a algo); sem “mais”, “antes”, “do que”', 'Prefiro o dia à noite.'],
            ['implicar', 'acarretar: VTD (sem “em”)', 'A decisão implicou atrasos.'],
            ['chegar, ir, voltar, levar', 'Movimento: preposição “a”', 'Chegou ao hospital. Vou ao posto.'],
            ['morar, residir', 'Preposição “em”', 'Mora na Rua das Flores.'],
            ['esquecer / lembrar', 'Sem pronome: VTD; pronominais: VTI (de)', 'Esqueci o prazo. Esqueci-me do prazo.'],
            ['pagar / perdoar', 'VTD (coisa) e VTI (pessoa)', 'Perdoou a dívida ao devedor. Pagou a consulta ao médico.'],
            ['informar, avisar, certificar', 'Algo a alguém OU alguém de/sobre algo (nunca dois indiretos)', 'Informou o resultado ao paciente. / Informou o paciente do resultado.'],
            ['comunicar', 'Algo a alguém (não “comunicar alguém de algo”)', 'Comunicou a mudança aos servidores.'],
            ['proceder', 'realizar: VTI (a)', 'A comissão procederá à análise.'],
            ['responder', 'dar resposta, ser réu: VTI (a)', 'Respondeu ao ofício. Responde a processo.'],
            ['simpatizar / antipatizar', 'VTI (com), não pronominal', 'Simpatizei com a coordenadora.'],
            ['agradecer', 'Algo a alguém', 'Agradeci ao médico a atenção.'],
            ['suceder', 'substituir: VTI (a)', 'Sucedeu ao colega na chefia.'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Regência nominal frequente',
          colunas: ['Nome', 'Preposição', 'Exemplo'],
          linhas: [
            ['preferível', 'a', 'O tratamento é preferível à cirurgia.'],
            ['compatível', 'com', 'compatível com as normas'],
            ['favorável / contrário', 'a', 'favorável aos pacientes'],
            ['obediência / obediente', 'a', 'obediência às regras'],
            ['residente, situado, domiciliado', 'em', 'residente na Rua XV'],
            ['acessível', 'a', 'acessível a todos'],
            ['em conformidade', 'com', 'em conformidade com a lei'],
            ['apto', 'a, para', 'apto ao trabalho / para o trabalho'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Preposição antes do relativo**: o verbo da oração adjetiva manda — “a norma **de que** precisamos” (precisar de), “o cargo **a que** aspiro”, “o filme **a que** assisti”, “a pessoa **a quem** me referi”.',
          '**Onde × aonde**: “onde” para lugar em que (estar, morar); “aonde” com verbos de movimento (ir, chegar). “Onde” não retoma termo que não seja lugar.',
          '**Lhe** substitui objeto indireto de pessoa (obedeço-lhe, falo-lhe); **o/a** substitui objeto direto (vi-o, convidei-a).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — junção com pronome relativo',
        enunciado: 'Una em um período: “Este é o protocolo.” + “Todos os plantonistas precisam do protocolo.”',
        resolucao:
          '“Este é o protocolo de que (ou do qual) todos os plantonistas precisam.” O verbo “precisar” exige a preposição “de”, que vai para antes do relativo. Erros típicos: “que todos precisam” (sem preposição), “onde todos precisam” (não é lugar).',
      },
      {
        tipo: 'atencao',
        texto:
          'Regência e crase andam juntas: se o verbo ou nome exige “a” e o termo seguinte é feminino com artigo, há crase (“visa à agilidade”, “obedeceu às normas”, “preferível à cirurgia”). E cuidado com o “do que” depois de **preferir** e **preferível** — está sempre errado na norma-padrão.',
      },
    ],
    fontes: [BECHARA, CUNHA_CINTRA],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-crase',
    titulo: 'Crase',
    resumo:
      'A banca cobra os casos obrigatórios (preposição + artigo, horas, locuções femininas, “àquele”), os proibidos (masculino, verbo, pronomes, “uma”, plural sem artigo) e os facultativos (possessivo, nome de mulher, “até”).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Crase** é a fusão de duas vogais “a”: em geral, a **preposição a** (exigida por um verbo ou nome) + o **artigo feminino a(s)**. Ela é marcada pelo **acento grave** (à, às). Também ocorre com os demonstrativos **aquele(s), aquela(s), aquilo** (àquele, àquilo) e com o pronome **a** = aquela (“igual à que comprei”).\n\nO raciocínio tem dois passos: (1) o termo anterior exige a preposição “a”? (2) o termo seguinte admite o artigo “a”? Só com os dois “sim” há crase. Teste prático: troque a palavra feminina por uma masculina; se aparecer “ao”, há crase (“fui à farmácia” → “fui ao hospital”).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Crase obrigatória',
          colunas: ['Caso', 'Exemplo'],
          linhas: [
            ['Preposição exigida + artigo feminino', 'Fui à farmácia. Obedeceu às normas. Visa à agilidade.'],
            ['Horas determinadas', 'às 14h; à uma hora; das 8h às 18h; à meia-noite'],
            ['Locuções adverbiais, prepositivas e conjuntivas femininas', 'à noite, às pressas, às vezes, à direita, à espera, à beira de, à custa de, à procura de, à medida que, à proporção que'],
            ['Locução terminada em “a” + palavra feminina com artigo', 'devido à chuva, graças à equipe, em relação à escala, junto à recepção (mas: devido a problemas)'],
            ['a + aquele, aquela, aquilo', 'Refiro-me àquele paciente; àquilo que disse.'],
            ['a + a (pronome = aquela)', 'Esta escala é igual à que foi publicada.'],
            ['“À moda de”, “à maneira de” subentendida', 'gol à Pelé, bife à milanesa, frango à passarinho'],
            ['Nome de lugar que admite artigo (volto DA)', 'Fui à Bahia (volto da Bahia).'],
            ['“Casa” e “terra” determinadas', 'Foi à casa dos pais. Voltou à terra natal.'],
            ['Distância determinada', 'Parou à distância de cinquenta metros.'],
            ['Antes de “senhora”, “senhorita”', 'Disse à senhora que aguardasse.'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Crase proibida',
          colunas: ['Caso', 'Exemplo correto'],
          linhas: [
            ['Palavra masculina', 'a pé, a prazo, a respeito de, a cavalo'],
            ['Verbo', 'começou a chover; a partir de hoje'],
            ['Pronomes pessoais e de tratamento (exceto senhora/senhorita)', 'a ela, a você, a Vossa Excelência, a Vossa Senhoria'],
            ['Pronomes indefinidos e demonstrativos sem artigo', 'a todas, a qualquer, a cada, a esta, a essa, a quem'],
            ['Artigo indefinido “uma”', 'Fui a uma reunião. (Mas: à uma hora)'],
            ['“a” singular antes de palavra no plural', 'Refiro-me a pacientes internados.'],
            ['Palavras repetidas', 'cara a cara, gota a gota, frente a frente'],
            ['Nome de lugar sem artigo (volto DE)', 'Fui a Curitiba, a Porto Alegre, a Santa Catarina.'],
            ['“Casa” (lar) e “terra” (chão firme) sem determinante', 'Voltou a casa cedo.'],
            ['Tempo futuro e distância com numeral sem artigo', 'daqui a duas semanas; a dez quilômetros'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Facultativa** antes de pronome possessivo feminino singular: entreguei à (a) minha coordenadora.',
          '**Facultativa** antes de nome próprio feminino de pessoa: entreguei à (a) Mariana.',
          '**Facultativa** depois de “até”: foi até à (a) porta.',
          'Com possessivo no **plural**, a regra volta ao normal: “às minhas colegas” (preposição + artigo) × “a minhas colegas” (só preposição, sem artigo).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — teste do masculino e do “volto”',
        enunciado: 'Há crase? (1) “Fui __ Curitiba.” (2) “Fui __ Bahia.” (3) “Pediu informações __ respeito do edital.” (4) “Assistiu __ palestra.”',
        resolucao:
          '(1) Não: volto “de” Curitiba (sem artigo). (2) Sim: volto “da” Bahia → à Bahia. (3) Não: “respeito” é masculino. (4) Sim: assistir (= ver) exige “a” + “a palestra” → à palestra (troque por masculino: assistiu ao debate).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas campeãs: crase antes de **Vossa Excelência/Senhoria** (errado), antes de **verbo** (“à partir de”, errado), antes de **“uma”** artigo (errado; mas “à uma hora” está certo), e **“a” singular + plural** (“à pacientes”, errado). Na redação oficial, o endereçamento “A Sua Excelência o Senhor” vai **sem** crase.',
      },
    ],
    fontes: [BECHARA, CUNHA_CINTRA],
    atualizadoEm: HOJE,
  },
  {
    temaId: 'lp-colocacao',
    titulo: 'Colocação pronominal',
    resumo:
      'A banca cobra as palavras que atraem o pronome (próclise), a proibição de iniciar oração com pronome átono, a mesóclise com futuro, a ênclise com imperativo e infinitivo e a colocação em locuções verbais.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Os pronomes oblíquos átonos (me, te, se, o, a, lhe, nos, vos, os, as, lhes) podem vir **antes** do verbo (**próclise**: “não **me** disse”), **depois** (**ênclise**: “disse-**me**”) ou **no meio** (**mesóclise**: “dir-**me**-á”).\n\nNa norma-padrão, a lógica é: havendo **palavra atrativa**, usa-se próclise; não havendo, a posição neutra é a ênclise — exceto no futuro do presente e do pretérito, que pedem mesóclise. E **não se inicia oração com pronome átono** (“Me disseram” é coloquial; o padrão é “Disseram-me”).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Próclise — palavras e situações que atraem o pronome',
          colunas: ['Atrativo', 'Exemplo'],
          linhas: [
            ['Palavras negativas (não, nunca, jamais, ninguém, nada)', 'Nunca se viu tanta procura. Ninguém me avisou.'],
            ['Advérbios sem vírgula (já, aqui, talvez, sempre, ainda)', 'Já me contaram. Talvez se resolva.'],
            ['Pronomes relativos (que, quem, onde, cujo)', 'Os documentos que nos enviaram...'],
            ['Pronomes indefinidos (tudo, todos, alguém, algo)', 'Tudo se resolveu.'],
            ['Pronomes e advérbios interrogativos', 'Quem te avisou? Por que se atrasou?'],
            ['Conjunções subordinativas (que, quando, se, embora, porque)', 'Espero que o encontre. Quando o vi, acenei.'],
            ['Orações optativas (desejo)', 'Deus o abençoe.'],
            ['Em + gerúndio', 'Em se tratando de urgência, ...'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Ênclise e mesóclise',
          colunas: ['Situação', 'Colocação', 'Exemplo'],
          linhas: [
            ['Início de oração, sem atrativo', 'Ênclise', 'Disseram-me que a escala mudou.'],
            ['Imperativo afirmativo', 'Ênclise', 'Sente-se e aguarde.'],
            ['Gerúndio (sem “em”)', 'Ênclise', 'Tratando-se de urgência, ...'],
            ['Advérbio seguido de vírgula', 'Ênclise (a pausa anula a atração)', 'Ontem, encontrei-o.'],
            ['Futuro do presente ou do pretérito, sem atrativo', 'Mesóclise', 'Far-se-á a vistoria. Dir-se-ia que...'],
            ['Futuro com atrativo', 'Próclise', 'Não se fará alteração.'],
            ['Particípio', 'Nunca ênclise ao particípio', 'Tinha-se feito / não se tinha feito'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Locução com infinitivo ou gerúndio**: “Quero-lhe dizer” / “Quero dizer-lhe”; com atrativo, também “Não lhe quero dizer”.',
          '**Locução com particípio**: o pronome fica junto do auxiliar — “Tinha-lhe feito um pedido” (nunca “tinha feito-lhe”).',
          '**Formas lo, la, no, na**: verbo terminado em r, s ou z perde a consoante e o pronome vira lo/la (avaliá-lo, fi-lo, encontramo-lo); verbo terminado em som nasal pede no/na (consertam-no, põe-na).',
          'Nunca há **ênclise com futuro**: “informarei-lhe” e “diria-se” estão errados.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Resolvido — qual colocação?',
        enunciado: 'Corrija, se necessário: (1) “Me avise do resultado.” (2) “Não esqueça-se do crachá.” (3) “Informarei-lhe amanhã.” (4) “Ontem, encontrei-o.”',
        resolucao:
          '(1) “Avise-me do resultado” (não se inicia oração com átono; imperativo pede ênclise). (2) “Não se esqueça do crachá” (negação atrai). (3) “Informar-lhe-ei amanhã” (futuro sem atrativo: mesóclise). (4) Correto: o advérbio isolado por vírgula não atrai.',
      },
      {
        tipo: 'atencao',
        texto:
          'Conjunção **coordenativa** (e, mas, ou) não é palavra atrativa obrigatória, mas **subordinativa** é (que, quando, se, porque, embora). Por isso “mas porque une-nos” está errado (o “porque” atrai: “porque nos une”). E pronome relativo sempre atrai: “que nos enviaram”, nunca “que enviaram-nos”.',
      },
    ],
    fontes: [BECHARA, CUNHA_CINTRA],
    atualizadoEm: HOJE,
  },
];
