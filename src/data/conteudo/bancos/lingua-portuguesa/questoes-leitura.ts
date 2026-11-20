import type { QuestaoTreino } from '../../../types';

/**
 * Questões de leitura e pontuação com trecho no próprio enunciado (sem texto-base)
 * e questões mistas no estilo “prova completa” (tema `portugues`).
 */
export const QUESTOES_LEITURA: QuestaoTreino[] = [
  /* ---------- Interpretação ---------- */
  {
    id: 'lp-interpretacao-q09',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Leia o trecho: “A telemedicina ampliou o acesso a especialistas em regiões remotas. Não substitui, contudo, o exame físico quando este é indispensável, nem dispensa a responsabilidade do médico que assina a conduta.”\n\nAnalise as assertivas:\nI. O trecho reconhece um benefício da telemedicina.\nII. O trecho afirma que a telemedicina substitui o exame físico em qualquer situação.\nIII. O trecho atribui ao médico responsabilidade pela conduta também no atendimento a distância.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas I e III.', 'Apenas II.', 'Apenas II e III.', 'I, II e III.'],
    correta: 1,
    comentario:
      'I está correta (“ampliou o acesso a especialistas”). II contraria o texto: a telemedicina não substitui o exame físico “quando este é indispensável”. III está correta: ela não “dispensa a responsabilidade do médico que assina a conduta”.',
  },
  {
    id: 'lp-interpretacao-q10',
    temaId: 'lp-interpretacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Considere o trecho: “Nem todo paciente que falta à consulta é negligente; muitos não conseguem dispensa do trabalho.” Desse trecho se conclui que, para o autor, nenhum paciente que falta à consulta é negligente.',
    gabaritoCE: false,
    comentario:
      'Errado. “Nem todo” nega a generalização, mas não significa “nenhum”: o autor admite que alguns faltosos sejam negligentes e afirma que muitos faltam por não obterem dispensa do trabalho. Cuidado com quantificadores (todo, nenhum, alguns, muitos): a banca troca um pelo outro.',
  },
  {
    id: 'lp-interpretacao-q11',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado: 'Na frase “O hospital voltou a registrar filas na emergência”, a expressão “voltou a” pressupõe que',
    alternativas: [
      'as filas na emergência nunca haviam ocorrido antes.',
      'as filas são permanentes e jamais diminuíram.',
      'o hospital passou a registrar as filas por exigência legal.',
      'as filas ocorreram uma única vez.',
      'as filas já tinham ocorrido antes e, por algum tempo, deixaram de ocorrer.',
    ],
    correta: 4,
    comentario:
      '“Voltar a” é marcador de pressuposição: só se volta a fazer o que já se fez e foi interrompido. Logo, houve filas antes, houve um intervalo sem elas, e agora elas retornaram. A e B contrariam o pressuposto; C e D não decorrem da expressão.',
  },
  {
    id: 'lp-interpretacao-q12',
    temaId: 'lp-interpretacao',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado:
      'Leia: “Quando os sintomas melhoram, muitos pacientes interrompem por conta própria o tratamento prescrito, por julgarem que já estão curados — ainda que a melhora se deva justamente ao medicamento.” A ideia central do trecho é a de que',
    alternativas: [
      'a melhora dos sintomas pode levar o paciente a interromper o tratamento por interpretá-la de modo equivocado.',
      'a melhora dos sintomas indica, em regra, que o tratamento já pode ser suspenso.',
      'os medicamentos costumam provocar sintomas que reduzem a adesão ao tratamento.',
      'o paciente não deve ser informado sobre a evolução dos sintomas.',
      'a adesão ao tratamento aumenta quando o paciente se sente bem.',
    ],
    correta: 0,
    comentario:
      'O trecho mostra um erro de interpretação do paciente: ele atribui a melhora à cura, quando ela se deve ao remédio — “ainda que” introduz essa ressalva concessiva. B e E dizem o contrário do trecho; C e D não têm apoio nele.',
  },

  /* ---------- Tipologia e gêneros ---------- */
  {
    id: 'lp-tipologia-q05',
    temaId: 'lp-tipologia',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 1,
    enunciado: 'Assinalar a alternativa que apresenta um gênero textual em que predomina a sequência injuntiva.',
    alternativas: ['Editorial.', 'Crônica.', 'Notícia.', 'Romance.', 'Receita culinária.'],
    correta: 4,
    comentario:
      'A sequência injuntiva orienta o leitor a agir, com verbos no imperativo ou no infinitivo (“misture”, “asse por 30 minutos”); é típica de receitas, manuais e instruções de uso. O editorial é argumentativo; crônica e romance são, em regra, narrativos; a notícia é narrativo-expositiva.',
  },
  {
    id: 'lp-tipologia-q06',
    temaId: 'lp-tipologia',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'O laudo pericial, como gênero textual, privilegia a linguagem objetiva e impessoal, com predomínio de sequências descritivas e expositivas, ainda que se encerre com uma conclusão fundamentada nos achados.',
    gabaritoCE: true,
    comentario:
      'Certo. O laudo descreve achados (sequência descritiva), expõe e discute dados técnicos (expositiva) e chega a uma conclusão fundamentada. A linguagem deve ser objetiva, impessoal e técnica, ao contrário da do texto literário ou opinativo.',
  },
  {
    id: 'lp-tipologia-q07',
    temaId: 'lp-tipologia',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 1,
    enunciado:
      'Considere o trecho: “A Unidade Básica de Saúde do bairro funcionará em horário estendido a partir de segunda-feira, das 7h às 22h, informou a Secretaria Municipal de Saúde.” O trecho é característico do gênero',
    alternativas: ['notícia.', 'editorial.', 'artigo de opinião.', 'carta pessoal.', 'relato pessoal.'],
    correta: 0,
    comentario:
      'A notícia relata um fato recente de interesse público, em linguagem objetiva e em 3ª pessoa, e atribui a informação à fonte (“informou a Secretaria”). Editorial e artigo de opinião defendem pontos de vista; carta e relato pessoal são marcados pela subjetividade e pela 1ª pessoa.',
  },

  /* ---------- Coesão ---------- */
  {
    id: 'lp-coesao-q08',
    temaId: 'lp-coesao',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'No período “O paciente foi orientado sobre os riscos; ainda assim, recusou a internação”, a expressão “ainda assim” estabelece relação de',
    alternativas: ['causa.', 'conclusão.', 'finalidade.', 'tempo.', 'oposição, com valor concessivo.'],
    correta: 4,
    comentario:
      '“Ainda assim” (= mesmo assim, apesar disso) introduz um fato que contraria a expectativa criada pelo anterior: esperava-se que, orientado, o paciente aceitasse a internação. Não indica causa, conclusão, finalidade nem tempo.',
  },
  {
    id: 'lp-coesao-q09',
    temaId: 'lp-coesao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No período “Os residentes e os preceptores participaram da reunião; estes apresentaram o novo protocolo, e aqueles fizeram perguntas”, o pronome “estes” refere-se aos residentes, e “aqueles”, aos preceptores.',
    gabaritoCE: false,
    comentario:
      'Errado. Na retomada de dois termos já mencionados, “este(s)” remete ao mais próximo (os preceptores) e “aquele(s)”, ao mais distante (os residentes). Assim, os preceptores apresentaram o protocolo, e os residentes fizeram perguntas.',
  },
  {
    id: 'lp-coesao-q10',
    temaId: 'lp-coesao',
    formato: 'multipla',
    estilo: 'ibfc',
    dificuldade: 1,
    enunciado:
      'Assinale a alternativa que preenche corretamente a lacuna, mantendo a coerência: “A demanda dobrou no inverno; ______, a secretaria contratou plantonistas temporários.”',
    alternativas: ['no entanto', 'embora', 'por conseguinte', 'a menos que', 'conquanto'],
    correta: 2,
    comentario:
      'A contratação é consequência do aumento da demanda: “por conseguinte” (= portanto, por isso) é conclusivo. “No entanto” é adversativo; “embora” e “conquanto” são concessivos e exigiriam outra construção; “a menos que” é condicional.',
  },
  {
    id: 'lp-coesao-q11',
    temaId: 'lp-coesao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No período “A enfermagem registra os sinais vitais; a farmácia, a dispensação dos medicamentos”, a vírgula marca a omissão da forma verbal “registra”, recurso coesivo que evita repetição.',
    gabaritoCE: true,
    comentario:
      'Certo. Na segunda oração, omitiu-se o verbo “registra”, recuperável pelo contexto (elipse do tipo zeugma). A elipse é mecanismo de coesão que evita repetição, e a vírgula marca o lugar do termo omitido.',
  },

  /* ---------- Semântica ---------- */
  {
    id: 'lp-semantica-q09',
    temaId: 'lp-semantica',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado: 'Assinalar a alternativa em que a palavra entre aspas está empregada corretamente.',
    alternativas: [
      'O paciente chegou com a face “vultosa”, congestionada e edemaciada.',
      'Segundo o sindicato, a greve era “eminente”.',
      'O perito “retificou” o laudo anterior, confirmando-o integralmente.',
      'O juiz “deferiu” o pedido de perícia, que foi marcada para segunda-feira.',
      'O motorista “infligiu” a lei de trânsito ao avançar o sinal.',
    ],
    correta: 3,
    comentario:
      '“Deferir” é conceder, atender (≠ “diferir”: adiar, ser diferente). A: face congestionada é “vultuosa”; “vultoso” é volumoso, de grande vulto (quantia vultosa). B: prestes a ocorrer é “iminente”; “eminente” é elevado, ilustre. C: confirmar é “ratificar”; “retificar” é corrigir. E: violar a lei é “infringir”; “infligir” é aplicar pena ou castigo.',
  },
  {
    id: 'lp-semantica-q10',
    temaId: 'lp-semantica',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Nas frases “A sessão do conselho começou às 9h” e “A seção de pediatria fica no segundo andar”, as palavras “sessão” e “seção” são sinônimas e poderiam ser trocadas entre si sem alteração de sentido.',
    gabaritoCE: false,
    comentario:
      'Errado. São homônimas homófonas (mesma pronúncia, grafia e sentido diferentes): “sessão” é reunião ou tempo de duração de um evento; “seção” (ou “secção”) é divisão, setor. Há ainda “cessão”, ato de ceder.',
  },
  {
    id: 'lp-semantica-q11',
    temaId: 'lp-semantica',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 2,
    enunciado: 'Assinale a frase em que há metonímia.',
    alternativas: [
      'Aquele cirurgião é uma rocha diante da pressão.',
      'Chorei rios de lágrimas na formatura.',
      'O velho professor partiu desta para melhor.',
      'O vento sussurrava segredos às árvores.',
      'Durante as férias, ele leu Machado de Assis inteiro.',
    ],
    correta: 4,
    comentario:
      'Metonímia é a substituição de um termo por outro com o qual mantém relação de proximidade: o autor pela obra (“leu Machado de Assis” = leu os livros de Machado). A é metáfora; B, hipérbole; C, eufemismo; D, prosopopeia (o vento ganha ação humana). Cuidado com frases como “A cidade dormia”: há quem as leia como metonímia (a cidade pelos moradores), por isso não servem de distrator.',
  },

  /* ---------- Reescrita ---------- */
  {
    id: 'lp-reescrita-q07',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado: 'Assinale a alternativa que transpõe corretamente para a voz passiva a oração “A comissão analisará os prontuários.”',
    alternativas: [
      'Os prontuários foram analisados pela comissão.',
      'Os prontuários serão analisados pela comissão.',
      'Os prontuários seriam analisados pela comissão.',
      'Os prontuários serão analisado pela comissão.',
      'Os prontuários terão sido analisados pela comissão.',
    ],
    correta: 1,
    comentario:
      'Na passiva analítica, o objeto direto vira sujeito, o verbo “ser” assume o tempo do verbo original (futuro do presente: “analisará” → “serão”) e o particípio concorda com o sujeito. A e C mudam o tempo; D erra a concordância do particípio; E usa o futuro composto, que indica ação concluída antes de um momento futuro.',
  },
  {
    id: 'lp-reescrita-q08',
    temaId: 'lp-reescrita',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'A frase O diretor afirmou: “Amanhã assinarei o contrato.” estaria corretamente transposta para o discurso indireto na seguinte redação: O diretor afirmou que no dia seguinte assinaria o contrato.',
    gabaritoCE: true,
    comentario:
      'Certo. No discurso indireto, o futuro do presente (“assinarei”) passa ao futuro do pretérito (“assinaria”), a 1ª pessoa passa à 3ª e “amanhã” se ajusta a “no dia seguinte”, pois a referência temporal deixa de ser o momento da fala.',
  },
  {
    id: 'lp-reescrita-q09',
    temaId: 'lp-reescrita',
    formato: 'multipla',
    estilo: 'aocp',
    dificuldade: 2,
    enunciado:
      'Considere os períodos “Este é o protocolo.” e “Todos os plantonistas precisam do protocolo.” Assinale a alternativa que os une em um só período, de acordo com a norma-padrão.',
    alternativas: [
      'Este é o protocolo que todos os plantonistas precisam.',
      'Este é o protocolo onde todos os plantonistas precisam.',
      'Este é o protocolo de que todos os plantonistas precisam.',
      'Este é o protocolo cujo todos os plantonistas precisam.',
      'Este é o protocolo em que todos os plantonistas precisam.',
    ],
    correta: 2,
    comentario:
      '“Precisar” (= necessitar) rege a preposição “de”, que vem antes do pronome relativo: “de que” (ou “do qual”). A omite a preposição; “onde” só retoma lugar; “cujo” indica posse e exige substantivo depois de si; “em que” traz a preposição errada.',
  },

  /* ---------- Pontuação ---------- */
  {
    id: 'lp-pontuacao-q08',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 1,
    enunciado: 'Assinale a alternativa corretamente pontuada.',
    alternativas: [
      'Dr. Ricardo, o laudo está pronto.',
      'Os pacientes, aguardavam atendimento desde cedo.',
      'O médico entregou, o atestado ao paciente.',
      'A enfermeira que estava de plantão, chamou o médico.',
      'O hospital, contratou novos plantonistas para o verão.',
    ],
    correta: 0,
    comentario:
      'O vocativo (“Dr. Ricardo”) é sempre isolado por vírgula. As demais alternativas separam por vírgula termos ligados diretamente: sujeito e verbo (B, D e E — em D, a oração “que estava de plantão” é restritiva e integra o sujeito) e verbo e objeto (C).',
  },
  {
    id: 'lp-pontuacao-q09',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado:
      'No período “Os médicos que atuam na emergência receberão capacitação”, a inserção de vírgulas isolando a oração “que atuam na emergência” manteria o sentido original.',
    gabaritoCE: false,
    comentario:
      'Errado. Sem vírgulas, a oração é restritiva: só os médicos da emergência serão capacitados. Com vírgulas, ela se torna explicativa e passa a afirmar que todos os médicos de que se fala atuam na emergência e serão capacitados — outro sentido.',
  },
  {
    id: 'lp-pontuacao-q10',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado: 'Assinalar a alternativa em que a vírgula foi empregada INCORRETAMENTE.',
    alternativas: [
      'O exame foi solicitado, mas o resultado ainda não saiu.',
      'Chegou cedo, examinou os pacientes, preencheu os prontuários e saiu às 19h.',
      'Os enfermeiros, porém, não foram consultados.',
      'O residente, que chegou atrasado, perdeu a reunião.',
      'Os documentos necessários para a posse, serão conferidos pela comissão.',
    ],
    correta: 4,
    comentario:
      'Em E, a vírgula separa o sujeito (“Os documentos necessários para a posse”) do verbo (“serão conferidos”) — erro clássico, mesmo com sujeito longo. A: vírgula antes de “mas” adversativo. B: orações coordenadas sem conjunção. C: conjunção adversativa deslocada, entre vírgulas. D: oração adjetiva explicativa.',
  },
  {
    id: 'lp-pontuacao-q11',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Em uma enumeração cujos itens já contêm vírgulas internas, emprega-se adequadamente o ponto e vírgula para separar esses itens, como em: “Participaram da banca o Dr. Paulo, cardiologista; a Dra. Ana, pediatra; e o Dr. Luís, psiquiatra.”',
    gabaritoCE: true,
    comentario:
      'Certo. O ponto e vírgula separa os itens de uma enumeração quando eles já têm vírgulas internas (aqui, os apostos com a especialidade), evitando confusão entre os níveis da enumeração.',
  },
  {
    id: 'lp-pontuacao-q12',
    temaId: 'lp-pontuacao',
    formato: 'multipla',
    estilo: 'fepese',
    dificuldade: 2,
    enunciado:
      'Na frase “O resultado surpreendeu a equipe: a taxa de infecção caiu pela metade”, os dois-pontos poderiam ser substituídos, sem prejuízo do sentido, por',
    alternativas: [
      'vírgula seguida de “porém”.',
      'ponto e vírgula seguido de “embora”.',
      'vírgula seguida de “portanto”.',
      'vírgula seguida de “pois”.',
      'vírgula seguida de “a menos que”.',
    ],
    correta: 3,
    comentario:
      'Os dois-pontos introduzem o esclarecimento do que foi anunciado (por que o resultado surpreendeu): relação explicativa, que “pois” preserva. “Porém” é adversativo, “embora” é concessivo, “portanto” é conclusivo (inverteria a relação) e “a menos que” é condicional.',
  },
  {
    id: 'lp-pontuacao-q13',
    temaId: 'lp-pontuacao',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 3,
    enunciado:
      'No período “O plantonista examinou o paciente, e a enfermeira registrou os sinais vitais”, o emprego da vírgula antes da conjunção “e” justifica-se por ligar orações com sujeitos diferentes.',
    gabaritoCE: true,
    comentario:
      'Certo. Em regra, não se usa vírgula antes de “e” aditivo, mas ela é admitida (e ajuda a clareza) quando as orações coordenadas têm sujeitos diferentes — aqui, “o plantonista” e “a enfermeira”. Também se usa vírgula antes de “e” com valor adversativo e na repetição enfática da conjunção (polissíndeto).',
  },

  /* ---------- Português — questões mistas (prova completa) ---------- */
  {
    id: 'portugues-q01',
    temaId: 'portugues',
    formato: 'multipla',
    estilo: 'fundatec',
    dificuldade: 2,
    enunciado:
      'Analise as frases quanto à norma-padrão:\nI. Haviam muitos pacientes na sala de espera.\nII. Faz dois anos que o hospital foi inaugurado.\nIII. Prefiro trabalhar de dia do que trabalhar à noite.\n\nQuais estão corretas?',
    alternativas: ['Apenas I.', 'Apenas II.', 'Apenas I e III.', 'Apenas II e III.', 'I, II e III.'],
    correta: 1,
    comentario:
      'I: “haver” no sentido de existir é impessoal — “Havia muitos pacientes”. II: correta; “fazer” indicando tempo decorrido é impessoal e fica no singular. III: “preferir” rege a preposição “a” e não admite “do que” — “Prefiro trabalhar de dia a trabalhar à noite”.',
  },
  {
    id: 'portugues-q02',
    temaId: 'portugues',
    formato: 'multipla',
    estilo: 'objetiva',
    dificuldade: 2,
    enunciado: 'Assinalar a alternativa CORRETA quanto ao emprego do acento grave e à acentuação gráfica.',
    alternativas: [
      'A assembléia foi encerrada às 18h.',
      'Fomos à pé até o pronto-socorro.',
      'O vôo dos residentes saiu às 8h.',
      'A proposta foi encaminhada à Vossa Senhoria.',
      'A assembleia começou às 14h e terminou à uma hora da madrugada.',
    ],
    correta: 4,
    comentario:
      'E está correta: “assembleia” perdeu o acento com o Acordo de 1990 (ditongo aberto “ei” em paroxítona), e há crase antes de horas determinadas (“às 14h”, “à uma hora”). A: “assembleia”, sem acento. B: não há crase antes de palavra masculina (“a pé”). C: “voo” perdeu o circunflexo. D: não há crase antes de pronomes de tratamento como “Vossa Senhoria”.',
  },
  {
    id: 'portugues-q03',
    temaId: 'portugues',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 2,
    enunciado: 'A frase “Os laudos foram entregues ao paciente, cujo os exames estavam alterados” está de acordo com a norma-padrão.',
    gabaritoCE: false,
    comentario:
      'Errado. O pronome relativo “cujo” não admite artigo depois de si e concorda com o termo possuído: “ao paciente, cujos exames estavam alterados”. A forma “cujo os” é erro frequente.',
  },
  {
    id: 'portugues-q04',
    temaId: 'portugues',
    formato: 'multipla',
    estilo: 'fgv',
    dificuldade: 3,
    enunciado: 'Assinale a frase que está inteiramente de acordo com a norma-padrão.',
    alternativas: [
      'Me informaram que a escala do mês mudou.',
      'Os candidatos aspiram o cargo de perito há anos.',
      'Esqueci-me de assinar o prontuário, mas corrigi a falha a tempo.',
      'Devem haver vagas remanescentes no próximo edital.',
      'Não lembro do nome do paciente que atendi ontem.',
    ],
    correta: 2,
    comentario:
      'C está correta: “esquecer-se” (pronominal) rege “de”. A: pela norma-padrão, não se inicia oração com pronome oblíquo átono (“Informaram-me”). B: “aspirar”, no sentido de desejar, rege “a” (“aspiram ao cargo”). D: “haver” = existir é impessoal e torna impessoal também o auxiliar (“Deve haver vagas”). E: “lembrar” sem pronome é transitivo direto (“Não lembro o nome”); pronominal, rege “de” (“Não me lembro do nome”).',
  },
  {
    id: 'portugues-q05',
    temaId: 'portugues',
    formato: 'certo-errado',
    estilo: 'cebraspe',
    dificuldade: 1,
    enunciado:
      'Na frase “Seguem anexo os relatórios solicitados por Vossa Senhoria”, o adjetivo “anexo” deveria estar no plural, para concordar com “os relatórios”.',
    gabaritoCE: true,
    comentario:
      'Certo. “Anexo” é adjetivo e concorda com o substantivo a que se refere: “Seguem anexos os relatórios”; “Segue anexa a planilha”. Já a locução “em anexo” é invariável: “Seguem, em anexo, os relatórios”.',
  },
  {
    id: 'portugues-q06',
    temaId: 'portugues',
    formato: 'multipla',
    estilo: 'vunesp',
    dificuldade: 2,
    enunciado: 'Assinale a alternativa em que as formas “por que”, “porque”, “por quê” e “porquê” estão corretamente empregadas em todas as ocorrências.',
    alternativas: [
      'Não sei porque ele faltou; ninguém explicou o porquê.',
      'Ele faltou por quê? Ninguém sabe o porquê da ausência.',
      'Por que o exame atrasou? Atrasou por quê faltou reagente.',
      'O motivo porque ele faltou ainda é desconhecido.',
      'Faltou por que estava doente.',
    ],
    correta: 1,
    comentario:
      'B: “por quê” (acentuado) no fim de frase interrogativa e “porquê” substantivado (precedido de artigo). A: interrogativa indireta pede “por que” (“Não sei por que ele faltou”). C: a causa se introduz com “porque” (“Atrasou porque faltou reagente”). D: “por que” = pelo qual (“O motivo por que ele faltou”). E: conjunção causal é “porque”.',
  },
];
