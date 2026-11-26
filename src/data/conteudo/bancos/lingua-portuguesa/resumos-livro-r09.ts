import type { ResumoTema } from '../../../types';

const PESTANA = 'PESTANA, Fernando. A Gramática para Concursos Públicos. 5. ed. Rio de Janeiro: Método, 2023 (caps. 17 a 21).';
const HOJE = '2026-11-26';

export const RESUMOS_LIVRO_R09: ResumoTema[] = [
  {
    temaId: 'lp-termos-oracao',
    titulo: 'Termos da oração',
    resumo:
      'As bancas cobram sobretudo o sujeito afastado do verbo, a transitividade verbal, a distinção entre complemento nominal e adjunto adnominal e o aposto. O método é sempre o mesmo: achar o núcleo do predicado, classificar cada termo como essencial, integrante ou acessório e confirmar a análise com o teste da voz passiva.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          '**Sintaxe** é a parte da gramática que estuda a ordem, a relação e a função das palavras e dos grupos de palavras dentro da frase. A ordem usual é sujeito, verbo, complemento e adjunto (S V C A), chamada de **ordem direta**. A ordem inversa é comum em português e é a forma preferida das bancas para esconder o sujeito.\n\n**Frase** é todo enunciado com sentido; pode ser **nominal** (sem verbo) ou **verbal**. **Oração** é a frase verbal, organizada em torno de um verbo ou de uma locução verbal. **Período** é a frase formada por uma ou mais orações: é **simples** quando tem uma só oração e **composto** quando tem mais de uma. Toda oração é frase verbal, mas nem toda frase é oração.\n\nAs frases se classificam em declarativas, interrogativas, exclamativas, imperativas e optativas, conforme o sentido e a pontuação final.',
      },
      {
        tipo: 'lista',
        itens: [
          '**Como achar o sujeito:** pergunte “quem?” ou “o que?” antes do verbo. O verbo concorda em número e pessoa com o núcleo do sujeito, e cada oração tem um sujeito ligado ao seu verbo.',
          '**Sujeito simples:** um só núcleo, ainda que ele venha acompanhado de adjuntos ou de orações adjetivas. Ex.: “As provas corrigidas pela equipe nova saíram hoje.”',
          '**Sujeito composto:** dois ou mais núcleos ligados por “e” ou por vírgula. Ex.: “A caneta e o caderno ficaram na mesa.”',
          '**Sujeito oculto:** o núcleo não aparece, mas é recuperado pelo contexto ou pela terminação do verbo. Ex.: “Chegamos cedo ao local.” (sujeito oculto: nós)',
          '**Sujeito indeterminado:** há agente da ação, mas ele não é identificado. Ocorre em três construções: verbo na 3ª pessoa do plural sem sujeito (“Roubaram meu carro ontem.”); verbo na 3ª pessoa do singular com o índice “se” (“Precisa-se de vendedores.”); e “você” ou “a gente” com valor generalizador no registro coloquial.',
          '**Oração sem sujeito:** verbos impessoais, como haver (no sentido de existir ou de tempo decorrido), fazer e ser (indicando tempo ou fenômenos naturais), não têm sujeito e ficam na 3ª pessoa do singular. Tudo na oração é predicado. A exceção é o verbo ser, que vai ao plural em “São três horas”.',
          '**Sujeito oracional:** o sujeito é uma oração, e o verbo principal fica na 3ª pessoa do singular. Ex.: “Convém estudar todos os dias.”',
          '**Predicado nominal:** verbo de ligação mais predicativo do sujeito; o núcleo é o predicativo. Ex.: “Os candidatos permaneceram calmos.”',
          '**Predicado verbal:** verbo nocional (de ação ou de movimento, não de ligação), sem predicativo; o núcleo é o verbo. Ex.: “Os fiscais recolheram as provas.”',
          '**Predicado verbo-nominal:** verbo nocional mais predicativo, do sujeito ou do objeto. Ex.: “O juiz declarou o réu inocente.” (predicativo do objeto)',
        ],
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Transitividade: o que o verbo exige',
          colunas: ['Classe do verbo', 'Complemento', 'Teste ou pista'],
          linhas: [
            ['De ligação', 'Predicativo do sujeito', 'Liga o sujeito a um estado, qualidade ou condição. Verbos típicos: ser, estar, ficar, permanecer, continuar, parecer, tornar-se.'],
            ['Intransitivo', 'Nenhum; aceita adjunto adverbial', 'Tem sentido completo. Ex.: “O resultado saiu ontem.” Verbos como adoecer e melhorar indicam mudança de estado, mas são intransitivos, não de ligação.'],
            ['Transitivo direto (VTD)', 'Objeto direto, sem preposição obrigatória', 'Passe para a voz passiva analítica: se o complemento vira sujeito, é objeto direto. Ex.: “Os fiscais recolheram as provas.” vira “As provas foram recolhidas pelos fiscais.”'],
            ['Transitivo indireto (VTI)', 'Objeto indireto, com preposição obrigatória', 'Ex.: “Ninguém renunciou ao cargo sem motivo.” Sem a preposição, a estrutura não se sustenta.'],
            ['Transitivo direto e indireto (VTDI)', 'Objeto direto e objeto indireto', 'Ex.: “A coordenação entregou o relatório à equipe.”'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Termos integrantes: completam verbo ou nome',
          colunas: ['Termo', 'Quem exige', 'Marca e teste'],
          linhas: [
            ['Objeto direto', 'Verbo transitivo direto', 'Normalmente sem preposição. Vira sujeito na voz passiva. Pronomes o, a, os, as (e suas variantes lo, la, los, las, no, na, nos, nas) e me, te, se, nos, vos podem ser objeto direto. O pronome lhe nunca é objeto direto.'],
            ['Objeto indireto', 'Verbo transitivo indireto ou transitivo direto e indireto', 'Quase sempre precedido de preposição (a, com, de, em, para, por, sobre). Aceita os pronomes lhe(s), me, te, se, nos, vos.'],
            ['Complemento nominal', 'Nome: substantivo, adjetivo ou advérbio em -mente', 'Sempre preposicionado e de valor passivo, por isso se reescreve na voz passiva. Ex.: “A população está ansiosa por notícias.”'],
            ['Agente da passiva', 'Verbo na voz passiva analítica', 'Introduzido por “por” (raramente “de”). Na voz ativa, vira sujeito. Ex.: “O relatório foi redigido pelos auditores.” vira “Os auditores redigiram o relatório.”'],
          ],
        },
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Termos acessórios e o vocativo',
          colunas: ['Termo', 'O que faz', 'Marca e exemplo'],
          linhas: [
            ['Adjunto adnominal', 'Determina ou caracteriza um substantivo (ou pronome, numeral ou palavra substantivada)', 'Não se separa por vírgula do nome a que se liga. Classes: artigo, pronome, numeral, adjetivo e locução adjetiva. Ex.: “Recebi a notícia de um amigo.”'],
            ['Adjunto adverbial', 'Modifica verbo, adjetivo ou advérbio', 'Expressa circunstâncias de tempo, lugar, modo, causa, finalidade, companhia, meio, instrumento, condição e concessão. Ex.: “Cheguei ao local com antecedência.”'],
            ['Aposto', 'Explica, resume ou desenvolve um termo antecedente; tem sempre valor substantivo', 'Explicativo (entre vírgulas, travessões ou parênteses); especificativo (sem pontuação, como em “meu irmão Carlos”); enumerativo; distributivo; resumitivo; de oração.'],
            ['Vocativo', 'Chama ou invoca um ser; não tem relação sintática com nenhum termo', 'Sempre separado por vírgula e pode se deslocar na frase. Ex.: “Ana, o concurso é amanhã.”'],
          ],
        },
      },
      {
        tipo: 'exemplo',
        titulo: 'Predicativo do objeto ou adjunto adnominal?',
        enunciado:
          'Classifique o termo destacado em “Os candidatos consideraram **longa** a prova.”',
        resolucao:
          'Resposta: predicativo do objeto (termo integrante). O verbo considerar é transobjetivo: pede um objeto seguido de uma característica atribuída a ele. Teste: passe para a voz passiva analítica, “A prova foi considerada longa pelos candidatos.” O adjetivo se separou do nome e virou predicativo do sujeito, o que confirma que, na ativa, era predicativo do objeto. Se o adjetivo continuasse ao lado do nome na passiva, seria adjunto adnominal, como em “Os candidatos fizeram uma prova longa”.',
      },
      {
        tipo: 'atencao',
        texto:
          '**Haver impessoal.** Com sentido de existir ou de tempo decorrido, haver fica sempre na 3ª pessoa do singular, inclusive quando vem com auxiliar (“Deve haver vagas”). O termo que vem depois é objeto direto, não sujeito: em “Houve dois acidentes”, “dois acidentes” é objeto direto. Já o verbo faltar é pessoal: em “Faltam dois anos”, há sujeito.\n\n**Complemento nominal ou adjunto adnominal?** Use a passiva. Se o termo preposicionado ao lado de um substantivo abstrato vira agente na voz ativa, é adjunto adnominal: “A resolução do professor foi ótima” (o professor resolveu). Se vira paciente na passiva, é complemento nominal: “A resolução da questão foi ótima” (a questão foi resolvida). Com substantivo concreto, o termo preposicionado é quase sempre adjunto adnominal: “o material de um site famoso”.\n\n**O se tem funções diferentes.** Pode ser índice de indeterminação (“Vive-se bem aqui”, sujeito indeterminado), partícula apassivadora (“Alugam-se quartos”, com sujeito plural e verbo concordando com ele) ou parte integrante do verbo (queixar-se, arrepender-se). Para separar a parte integrante, coloque um sujeito explícito: “As crianças se queixavam do calor” funciona, e nesse caso o sujeito é oculto. Se a frase fica esdrúxula, como em “As pessoas se necessitavam de ajuda”, o se indetermina o sujeito. A banca costuma cobrar a concordância tradicional em “Vendem-se casas”, mas há gramáticos que veem “casas” como objeto direto; leia a questão com atenção.\n\n**Ir, chegar, morar e voltar.** Pela visão tradicional, esses verbos de deslocamento ou moradia são intransitivos e pedem adjunto adverbial de lugar. Luft e algumas bancas, como FCC e Consulplan, os tratam como transitivos indiretos. Na prova, veja qual visão a banca segue.\n\n**A classe depende do contexto.** “Ele ficou feliz” (de ligação, com predicativo); “Ele ficou em casa” (intransitivo com adjunto adverbial); “Ele ouve bem” (intransitivo); “Ele ouve rádio” (transitivo direto). Não classifique o verbo pelo dicionário; classifique pela frase.\n\n**Lhe.** O pronome lhe nunca é objeto direto. Ele pode ser objeto indireto, complemento nominal, adjunto adnominal de posse (“Roubaram-lhe a carteira”) ou sujeito de infinitivo em construções causativas, interpretação que a maioria das bancas adota.',
      },
    ],
    fontes: [PESTANA],
    atualizadoEm: HOJE,
  },
];
