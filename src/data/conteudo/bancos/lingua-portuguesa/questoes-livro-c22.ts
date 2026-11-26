import type { QuestaoTreino } from '../../../types';

/** Questões do livro de Pestana (cap. 22 — Orações coordenadas), por tema da Biblioteca. Comentários próprios. */
export const QUESTOES_LIVRO_C22: QuestaoTreino[] = [
  {
    id: 'lp-periodo-composto-qlivro22-01',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CONSULPLAN — Administrador — 2006) A alternativa em que a oração assinalada expressa adição é:',
    alternativas: [
      '“... os ramos industriais em ascensão são aqueles que empregam intensivamente tecnologia...”',
      '“... posição de destaque entre as indústrias brasileiras, e são responsáveis por mais da metade do consumo energético industrial.”',
      '“Contudo, elaborou um novo modelo para o setor elétrico destinado a atrair investidores...”',
      '“Coerente com os objetivos que levaram à sua criação, a Eletrobras passou décadas vendendo energia ao setor industrial.”',
      '“... ajudam a entender o elevado consumo energético do setor enquanto nos países desenvolvidos os ramos industriais em ascensão são aqueles...”',
    ],
    correta: 1,
    comentario:
      'Em B, a oração “e são responsáveis por mais da metade do consumo energético industrial” é coordenada sindética aditiva, pois o “e” acrescenta uma nova informação à anterior. As demais trazem outras relações: oposição (contudo), conformidade ou causa (coerente com), contraste (enquanto) ou subordinação (que empregam), sem valor aditivo.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-02',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(AOCP — Pref. de Caru/BA — Mecânico de Veículos — 2007) Leia a seguinte sentença: “Joana tomou um sonífero e não dormiu.” Assinale a alternativa que classifica corretamente a segunda oração.',
    alternativas: [
      'Oração coordenada assindética aditiva.',
      'Oração coordenada sindética aditiva.',
      'Oração coordenada sindética adversativa.',
      'Oração coordenada sindética explicativa.',
      'Oração coordenada sindética alternativa.',
    ],
    correta: 2,
    comentario:
      'O “e” aparece como conjunção, mas o sentido é de oposição: tomar o remédio levaria ao sono, e a oração seguinte nega esse efeito. Por isso a segunda oração é sindética adversativa, e a classificação só como aditiva ignora o sentido. As demais opções não se aplicam, já que há conjunção explícita e não há explicação nem alternância.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-03',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(AOCP — Pref. de Catu/BA — Bibliotecário — 2007) Leia a seguinte sentença: “Não precisaremos voltar ao médico nem fazer exames.” Assinale a alternativa que classifica corretamente as duas orações.',
    alternativas: [
      'Oração coordenada assindética e oração coordenada adversativa.',
      'Oração principal e oração coordenada sindética aditiva.',
      'Oração coordenada assindética e oração coordenada aditiva.',
      'Oração principal e oração subordinada adverbial consecutiva.',
      'Oração coordenada assindética e oração coordenada adverbial consecutiva.',
    ],
    correta: 2,
    comentario:
      'A primeira oração não tem conjunção, e a segunda é introduzida por “nem”, conjunção aditiva negativa que soma uma negação à anterior. Por isso a alternativa C combina as duas classificações adequadas. As demais atribuem adversativa, consecutiva ou subordinação, que não correspondem ao sentido da frase.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-04',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — IRBr — Diplomata — 2008) É exemplo de paralelismo sintático o estilo de construção do trecho “você e eu, de um e outro lado das palavras. Eu dou as vozes, você dá a escritura”.',
    gabaritoCE: true,
    comentario:
      'Há paralelismo quando estruturas equivalentes se repetem: “você e eu” e “eu dou as vozes, você dá a escritura” repetem o mesmo arranjo de sujeito e verbo, com as mesmas funções. A afirmação está correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-05',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FCC — TRT/GO (18ª R) — Técnico Judiciário — 2008) (Adaptada) Assim, a procura de alimentos de origem animal cresceu naqueles países e criou um desafio para os produtores e também para os plantadores de soja e de cereais usados na fabricação de rações. A afirmação abaixo está correta ou incorreta? Trata-se de um período composto por ter três orações coordenadas entre si.',
    gabaritoCE: false,
    comentario:
      'O período tem duas orações coordenadas, “cresceu ...” e “criou ...”, ligadas pelo “e”. A expressão “usados na fabricação de rações” é uma oração subordinada adjetiva reduzida, que modifica “cereais”, e não uma terceira coordenada. Por isso a afirmação está incorreta.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-06',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(IBFC-ABDI — Assistente Jurídico — 2008) Assinale a alternativa em que o período é composto por coordenação assindética:',
    alternativas: [
      'Dormi tarde, mas acordei muito cedo.',
      'Dormiu pouco, estava, pois, cansado.',
      'O rapaz trouxe a encomenda e já foi embora.',
      'O ônibus chegou, despedimo-nos.',
    ],
    correta: 3,
    comentario:
      'Em D, as duas orações são justapostas, sem conjunção: é coordenação assindética. As demais trazem conjunção explícita: “mas” (adversativa), “pois” (explicativa, no meio da frase) e “e” (aditiva).',
  },
  {
    id: 'lp-periodo-composto-qlivro22-07',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Instituto Cidades — UNIFESP — Analista de TI — 2009) “Voa, coração, que ele não deve demorar”. A oração destacada é corretamente classificada como:',
    alternativas: [
      'coordenada concessiva;',
      'subordinada adverbial temporal;',
      'coordenada explicativa;',
      'subordinada substantiva objetiva direta.',
    ],
    correta: 2,
    comentario:
      'A oração “que ele não deve demorar” explica o motivo do pedido “Voa, coração”, por isso é coordenada sindética explicativa. Ela não exerce função de termo da oração anterior, o que afasta a subordinação substantiva e a temporal.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-08',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(AOCP — CIASC — Analista de Sistemas — 2009) Assinale a alternativa correta. Em “Porém, não podemos festejar a situação presente, pois para o progresso futuro precisamos ser obstinadamente inconformistas”, temos, respectivamente:',
    alternativas: [
      'uma oração coordenada sindética aditiva e uma oração subordinada adverbial causal;',
      'uma oração subordinada adverbial causal e uma oração coordenada sindética explicativa;',
      'uma oração coordenada sindética adversativa e uma oração coordenada sindética explicativa;',
      'uma oração subordinada adverbial concessiva e uma oração subordinada adverbial causal;',
      'uma oração coordenada sindética conclusiva e uma oração subordinada adverbial causal.',
    ],
    correta: 2,
    comentario:
      '“Porém” é conjunção adversativa, que opõe a segunda oração à ideia anterior. Já “pois”, com o sentido de justificativa, liga uma oração coordenada explicativa, e não uma subordinada causal. Por isso a alternativa C é a correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-09',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FAB — EAGS — Sargento — 2009) Em qual alternativa a oração destacada é coordenada conclusiva?',
    alternativas: [
      'Roberto Carlos não só canta mas também compõe.',
      'Cumprimente-o, pois hoje é seu aniversário.',
      'O candidato estava preparado, entretanto não obteve classificação no concurso.',
      'Não tinha mais nenhuma chance com o ex-namorado, portanto desistiu de procurá-lo.',
    ],
    correta: 3,
    comentario:
      'Em D, “portanto” introduz uma conclusão a partir da frase anterior: não havia chance, logo desistiu. Em A, há adição (não só ... mas também); em B, explicação (pois); em C, adversidade (entretanto).',
  },
  {
    id: 'lp-periodo-composto-qlivro22-10',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — TRT 7ª R (RN) — Técnico Judiciário — 2010) A oração “que pagam impostos quando consomem” (... sabem que pagam impostos quando consomem) mantém relação de coordenação com a anterior.',
    gabaritoCE: false,
    comentario:
      'A oração “que pagam impostos quando consomem” completa o verbo “sabem”, funcionando como subordinada substantiva objetiva direta. Ela não é coordenada à oração anterior, e sim dependente dela, por isso a afirmação está errada.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-11',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FUNRIO — SEBRAE/PA — Analista Técnico — 2010) (Adaptada) “Eles furtavam, brigavam nas ruas, xingavam nomes, derrubavam negrinhas no areal, por vezes feriam com navalhas ou punhal homens e polícias. Mas, no entanto, eram bons, uns eram amigos dos outros”. A afirmação abaixo está correta ou incorreta? A combinação de “mas” e “no entanto” tem valor expressivo de reforço da ideia adversativa.',
    gabaritoCE: true,
    comentario:
      'A repetição de dois conectivos de mesmo sentido, “mas” e “no entanto”, reforça a oposição entre o mal praticado e a bondade afirmada. O valor é expressivo, de ênfase, e não muda a classificação adversativa. A afirmação está correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-12',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(FUNIVERSA — GDF — Professor de Língua Portuguesa — 2010) (Adaptada) (...) Não é possível que ele pregue a autonomia, sem ser autónomo; que fale de liberdade, sem experimentar a conquista da independência, que é o saber; que ele queira que seu aluno seja feliz, sem demonstrar afeto. (...) A afirmação abaixo está correta ou incorreta? O período contém, na separação de orações subordinadas, dois sinais de ponto e vírgula, indicativos de pausa mediana, equivalentes a um ponto breve ou a uma vírgula alongada. Isso é possível, em virtude do paralelismo sintático existente: trata-se de orações de mesma natureza.',
    gabaritoCE: true,
    comentario:
      'Os dois ponto e vírgula separam orações subordinadas de mesma natureza, todas introduzidas por “que” e no subjuntivo, o que justifica o uso de sinal de pausa mediana. O paralelismo sintático sustenta a afirmação, que está correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-13',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(FUNIVERSA — GDF — Professor de Língua Portuguesa — 2010) (Adaptada) A afirmação abaixo está correta ou incorreta? O paralelismo sintático está presente na seguinte reescrita: falta o essencial — a emoção, que é própria do homem, o olhar atento do professor, ver o professor gesticular, falar, a interrupção do aluno...',
    gabaritoCE: false,
    comentario:
      'A enumeração reúne construções de natureza diferente: uma oração adjetiva (“que é própria do homem”), um sintagma nominal, um infinitivo e outro sintagma nominal. Essa mistura quebra o paralelismo, por isso a afirmação está incorreta.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-14',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB — EEAR — Sargento — 2010) Observe: I. A curta existência de Álvares de Azevedo, um legítimo representante do Mal do Século, não permitiu que houvesse uma edição de sua obra em vida. II. A maior parte das histórias de Joaquim Manuel de Macedo é ambientada no Rio de Janeiro, e nelas os heróis e as heroínas enfrentam obstáculos para a realização amorosa. III. Castro Alves, a voz mais importante da terceira geração romântica, não apenas defendeu os escravos, mas também escreveu versos expressivos. Constituem períodos compostos por coordenação:',
    alternativas: ['I, II e III;', 'I e II;', 'I e III;', 'II e III.'],
    correta: 3,
    comentario:
      'Em II, o “e” liga duas orações coordenadas, e em III, o par “não apenas ... mas também” também coordena duas orações independentes. Já em I, a oração “não permitiu que houvesse uma edição” depende de subordinação substantiva, por isso não há período composto por coordenação ali.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-15',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(AOCP — Colégio Pedro II — Assistente em Administração — 2010) Em “A quadrilha estava em dois carros e usava armas longas e fuzis”, há:',
    alternativas: [
      'duas orações coordenadas, pois uma não depende sintaticamente da outra;',
      'duas orações subordinadas, pois a segunda completa sintaticamente a primeira;',
      'dois períodos simples, pois há dois verbos e duas orações independentes;',
      'um período simples, independente, e uma oração coordenada, independente;',
      'um período simples, independente, e uma oração subordinada, dependente.',
    ],
    correta: 0,
    comentario:
      'São duas orações coordenadas sindéticas aditivas (estava / usava), ligadas pelo “e”, e nenhuma depende sintaticamente da outra. As alternativas que falam em subordinação ou em período simples estão erradas, porque cada verbo tem sua própria oração.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-16',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(FAB — EEAR — Controlador de Tráfego Aéreo — 2012) Assinale a alternativa em que a relação expressa pela oração coordenada em destaque está correta.',
    alternativas: [
      'A vida parou ou foi o automóvel? (adversidade)',
      'Mude seu pensamento e você mudará o mundo. (alternância)',
      'Nem sempre as esperanças se realizam, contudo sempre as cultivo. (conclusão)',
      'Não só era inteligente, mas também observava tudo com atenção. (adição)',
    ],
    correta: 3,
    comentario:
      'Em D, “não só ... mas também” expressa adição, como indicado. Em A, o “ou” indica alternância, e não adversidade; em B, o “e” é aditivo, não alternativo; em C, “contudo” é adversativo, não conclusivo.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-17',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB — EAGS — Sargento — 2012) Observe os períodos abaixo: I. Venha logo, pois estou ansioso. II. Ele é o homem da casa, logo deve assumir o papel de chefe da família. III. Termine logo esse trabalho, pois quero ir embora para casa. IV. Trabalhei muito, logo mereço aproveitar bastante minhas férias. Assinale a alternativa incorreta.',
    alternativas: [
      'Há, em I, uma oração coordenada sindética explicativa.',
      'Há, em II, uma oração coordenada sindética conclusiva.',
      'Há, em III, uma oração coordenada sindética conclusiva.',
      'Há, em IV, uma oração coordenada sindética conclusiva.',
    ],
    correta: 2,
    comentario:
      'Em III, o “pois” tem valor explicativo, pois justifica o pedido de pressa; por isso a classificação como conclusiva está errada, e essa é a alternativa incorreta. Em I, “pois” também é explicativo, e em II e IV, “logo” introduz conclusão.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-18',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB — EEAR — Controlador de Tráfego Aéreo — 2012) Relacione as colunas de acordo com o valor semântico das conjunções coordenativas e, em seguida, assinale a alternativa com a sequência correta. ( ) O político não agiu com lealdade; perdeu, pois, na disputa para a reeleição. ( ) Não solte balões, que pode causar incêndio. ( ) Choveu vários dias sem parar, por conseguinte houve enchente no sul. ( ) Ele foi eleito, não obstante suas loucuras não tinham o apoio da população. (1) ideia de conclusão (2) ideia de explicação (3) ideia de adversidade',
    alternativas: ['2, 1, 1, 3', '3, 2, 1, 1', '1, 2, 1, 3', '1, 1, 2, 3'],
    correta: 2,
    comentario:
      '“Pois” posposto ao verbo e “por conseguinte” indicam conclusão (1); “que” introduzindo a justificativa indica explicação (2); “não obstante” indica adversidade (3). A sequência 1, 2, 1, 3 é a única que corresponde a essas relações.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-19',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(FAB — EAGS — Sargento — 2012) Considerando-se a relação de sentido estabelecida entre as orações do período composto por coordenação, em qual alternativa não se pode utilizar a conjunção pois?',
    alternativas: [
      'Invadiram meu quarto, pois as minhas roupas desapareceram.',
      'Não conte seus segredos para essa mulher, pois ela não é uma pessoa confiável.',
      'A festa foi planejada durante seis meses; não haverá, pois, surpresas desagradáveis.',
      'A festa foi planejada durante seis meses, pois não haverá surpresas desagradáveis.',
    ],
    correta: 3,
    comentario:
      'Em D, a segunda oração é consequência da primeira, e não sua justificativa: o planejamento leva a não haver surpresas. Como o “pois” explicativo exige que a segunda oração explique a primeira, ele não cabe ali. Nas demais, a segunda oração explica ou conclui o que foi dito antes.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-20',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(CLICK — Pref. Canoinhas — Professor de Português — 2012) Assinale a alternativa que contém uma oração coordenada sindética aditiva:',
    alternativas: [
      'Pedro não veio para aula porque estava doente.',
      'Pedro não foi para a escola e nem para o trabalho.',
      'Pedro está doente, logo não vai para a aula.',
      'Pedro vai para a escola, ou para o trabalho.',
    ],
    correta: 1,
    comentario:
      'Em B, “e nem” soma uma negação à oração anterior, o que caracteriza coordenação sindética aditiva. Em A, “porque” introduz causa (subordinada); em C, “logo” indica conclusão; e em D, “ou” indica alternância.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-21',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(SOLER — Pref. Macaubal/SP — Assistente Administrativo de Trânsito — 2012) Em “No outro dia tomei o trem, ferrei no sono e acordei às dez horas na estação central” (Graciliano Ramos), temos:',
    alternativas: [
      'período simples;',
      'período composto por subordinação;',
      'período composto por coordenação;',
      'período composto por coordenação e subordinação.',
    ],
    correta: 2,
    comentario:
      'O trecho tem três orações independentes: “tomei o trem”, “ferrei no sono” e “acordei às dez horas”. Elas se ligam por justaposição e pelo “e”, sem que nenhuma dependa da outra, o que é coordenação, sem subordinação.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-22',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(SOLER — IPREM — Agente Contábil Previdenciário — 2012) É uma oração coordenada assindética aquela expressa na alternativa:',
    alternativas: [
      '“O homem de juízo aproveita, o tolo desaproveita a experiência própria”.',
      '“Não emprestes, não disputes, não maldigas, e não terá do que arrepender-te.”',
      '“A virtude é comunicável, porém o vício, contagioso.”',
      '“As circunstâncias descobrem ou fazem as grandes personalidades.”',
    ],
    correta: 0,
    comentario:
      'Em A, as duas orações estão justapostas, sem conjunção: é coordenação assindética. As demais trazem conjunção explícita, como “e”, “porém” ou “ou”, e por isso são sindéticas.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-23',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(SOLER — IPREM — Agente Financeiro e RH Previdenciário — 2012) Encontramos um período composto por coordenação na alternativa:',
    alternativas: [
      'Um de seus filhos é muito inteligente.',
      'Ele veio visitar-me, mas não me encontrou.',
      'Os policiais descobriram como foi feito o assalto da casa ao lado da delegacia.',
      'Aqueles que se dedicam ao trabalho vencem na vida.',
    ],
    correta: 1,
    comentario:
      'Em B, “Ele veio visitar-me” e “não me encontrou” são duas orações independentes ligadas pelo “mas”. As demais têm uma só oração ou uma oração subordinada, como “como foi feito” em C e “que se dedicam” em D.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-24',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(SOLER — IPREM — Agente Financeiro e RH Previdenciário — 2012) Temos uma oração coordenada assindética em:',
    alternativas: [
      'Em 1960 — no dia de meu aniversário — houve a inauguração da nova Capital.',
      'Parece que vai chover, esfriar, gear.',
      'É bem verdade que chegamos cedo.',
      'Sabe-se que tudo vai bem.',
    ],
    correta: 1,
    comentario:
      'Em B, as orações “vai chover”, “esfriar” e “gear” estão justapostas, sem conjunção, ligadas à oração principal “parece”. Em A, há uma única oração com um aposto intercalado; em C e D, há oração subordinada substantiva.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-25',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(IDECAN — CREFITO (8ª R) — Assistente Administrativo — 2013) No período “Os Doutores da Alegria despertam o desejo pela vida através do humor e riso, entretanto eles não conseguem melhorar o caos da saúde no Brasil”, a oração destacada é classificada como oração coordenada sindética:',
    alternativas: ['aditiva.', 'conclusiva.', 'explicativa.', 'alternativa.', 'adversativa.'],
    correta: 4,
    comentario:
      'A conjunção “entretanto” expressa oposição: os Doutores despertam o desejo pela vida, mas não conseguem melhorar o caos da saúde. Por isso a oração é coordenada sindética adversativa.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-26',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(UPENET/IAUPE — SES/PE — Assistente em Saúde — 2014) I. As lágrimas não pedem perdão, mas o alcançam. II. Podemos escolher o que semear, mas somos obrigados a colher aquilo que plantamos. Analisando-se os pensamentos acima, encontram-se conectores que ligam, respectivamente, orações',
    alternativas: [
      'independentes e exprimem adição de pensamentos.',
      'independentes e exprimem oposição de pensamentos.',
      'independentes e exprimem conclusão de pensamentos.',
      'dependentes e exprimem oposição de pensamentos.',
      'dependentes e exprimem conclusão de pensamentos.',
    ],
    correta: 1,
    comentario:
      'Em I e II, o “mas” liga duas orações independentes e expressa oposição: não pedem perdão, mas alcançam; podemos escolher, mas somos obrigados. Por isso a alternativa B é a correta.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-27',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Quadrix — CRP/MG — Assistente Administrativo — 2015) Em “A maioria prefere chorar E CONTAR MENTIRAS”, a oração destacada, em relação a “chorar”, classifica-se como:',
    alternativas: [
      'subordinada substantiva objetiva direta.',
      'subordinada adverbial causal.',
      'coordenada sindética aditiva.',
      'coordenada assindética.',
      'coordenada sindética explicativa.',
    ],
    correta: 2,
    comentario:
      'A oração “contar mentiras” é coordenada à oração “chorar”, ligada pelo “e”, que acrescenta uma ação à anterior: prefere chorar e contar mentiras. Como há conjunção aditiva, não é assindética nem subordinada.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-28',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(BIO-RIO — Prefeitura de Mangaratiba/RJ — Assistente Social — 2016) O paralelismo sintático foi desobedecido na seguinte frase:',
    alternativas: [
      '“Sucesso é conseguir o que você quer e felicidade é gostar do que você conseguiu”. (Dale Carnegie)',
      '“Para o otimista todas as portas têm maçanetas e dobradiças, para o pessimista todas as portas têm trincos e fechaduras”. (William Arthur Ward)',
      '“Se não houver frutos, valeu a beleza das flores; se não houver flores, valeu a sombra das folhas; se não houver folhas, valeu a intenção da semente”. (Henfil)',
      '“É barato construir castelos no ar e bem cara a sua destruição”. (F. Mauriac)',
      '“Um acontecimento vivido é finito. Um acontecimento lembrado é ilimitado”. (Walter Benjamin)',
    ],
    correta: 3,
    comentario:
      'Em D, o segundo termo, “bem cara a sua destruição”, não repete a estrutura do primeiro, “barato construir castelos no ar”: um infinitivo se contrapõe a um sintagma nominal, o que quebra o paralelismo. As demais repetem a mesma construção em suas partes, como em “Sucesso é ... e felicidade é ...”.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-29',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(IBFC — EMBASA — Engenheiro (Engenharia Civil/Produção Civil) — 2017) Considere o período, analise as afirmativas a seguir e assinale a alternativa correta. “No dia seguinte, não houve concentração juvenil, mas já na outra tarde, meio cautelosos, eles reapareceram”. I. Trata-se de um período com duas orações, composto por coordenação. II. “Meio” é adjetivo e modifica a palavra “cautelosos”.',
    alternativas: [
      'As afirmativas I e II são corretas.',
      'Apenas a afirmativa I é correta.',
      'Apenas a afirmativa II é correta.',
      'Nenhuma afirmativa é correta.',
    ],
    correta: 1,
    comentario:
      'Só a afirmativa I está correta: o período tem duas orações coordenadas, ligadas pelo “mas”. Na II, “meio” é advérbio, pois modifica o adjetivo “cautelosos”, e advérbios não se referem a substantivos.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-30',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(INSTITUTO AOCP — ADAF/AM — Agente de Fiscalização Agropecuária — 2018) Assinale a alternativa em que só apareçam orações coordenadas assindéticas, ou seja, sem conjunções.',
    alternativas: [
      '“Espere aqui, eu vou te mostrar imediatamente [...]”.',
      '“Nós vamos procurá-lo e eu vou segurar essa borboleta na minha mão o tempo todo.”',
      '“Por isso, não importa que tipo de resposta ele dê, sempre será errada.”',
      '“Que pergunta podemos lhe fazer que ele não será capaz de responder?”',
      '“Como ele podia ver o quanto inquietas eram suas filhas, decidiu enviá-las em um feriado para viver com um velho sábio [...]”.',
    ],
    correta: 0,
    comentario:
      'Em A, as orações “Espere aqui” e “eu vou te mostrar” estão justapostas, sem conjunção, o que é coordenação assindética. As demais trazem conjunções como “e”, “por isso” e “que”, ou subordinação, o que descarta a alternativa.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-31',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(IBFC — Prefeitura de Cuiabá/MT — Analista de Tecnologia da Informação — 2019) Leia com atenção o trecho “tanto o vulgo como os homens de cultura superior dizem ser esse fim a felicidade e identificam o bem viver e o bem agir como o ser feliz”. É correto afirmar que o enunciado acima possui:',
    alternativas: [
      'orações subordinadas assindéticas substantivas.',
      'orações coordenadas sindéticas adverbiais.',
      'orações subordinadas sindéticas explicativas.',
      'orações coordenadas sindéticas aditivas.',
    ],
    correta: 3,
    comentario:
      'O “e” liga “dizem ser esse fim a felicidade” a “identificam o bem viver e o bem agir como o ser feliz”: duas orações coordenadas sindéticas aditivas, sem valor de causa ou de explicação. Por isso a alternativa D é a única que traz essa classificação.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-32',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(Instituto Consulplan — Prefeitura de Formiga/MG — Fiscal de Obras e Postura — 2020) “Na frase ‘O mestre agradeceu a informação, despediu-se e foi embora’, tem-se duas orações coordenadas ____ e uma oração coordenada ____.” Assinale a alternativa que completa correta e sequencialmente a afirmativa anterior.',
    alternativas: [
      'assindéticas / sindética aditiva',
      'sindéticas aditivas / assindética',
      'assindéticas / sindética explicativa',
      'sindéticas explicativas / assindética',
    ],
    correta: 0,
    comentario:
      'As duas primeiras orações, “agradeceu a informação” e “despediu-se”, estão justapostas, sem conjunção, logo são assindéticas. A última, “foi embora”, é ligada pelo “e”, que acrescenta uma ação, por isso é sindética aditiva.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-33',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 2,
    enunciado:
      '(CESPE — SEED-PR — Professor de Língua Portuguesa — 2021) No verso “que esse já não bate nem apanha”, em “Socorro, alguém me dê um coração, que esse já não bate nem apanha”, o termo “que” introduz uma oração',
    alternativas: [
      'coordenada adversativa.',
      'coordenada explicativa.',
      'subordinada adverbial condicional.',
      'subordinada adjetiva restritiva.',
      'subordinada adverbial concessiva.',
    ],
    correta: 1,
    comentario:
      'O “que” inicia uma oração que explica o pedido “alguém me dê um coração”, ou seja, a razão do pedido. Essa relação de explicação caracteriza a coordenada explicativa, e as demais opções pressupõem subordinação ou sentido que não se aplica.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-34',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 1,
    enunciado:
      '(FEPESE — IGP/SC — Auxiliar Médico-Legal — 2022) (Adaptada) No período “Fabiano tomou a cuia, desceu a ladeira, encaminhou-se ao rio seco, achou no bebedouro dos animais um pouco de lama”, há duas orações coordenadas e duas orações subordinadas.',
    gabaritoCE: false,
    comentario:
      'O período tem quatro orações coordenadas assindéticas (tomou, desceu, encaminhou-se, achou), todas independentes, e nenhuma subordinada. Por isso a afirmação está errada.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-35',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 2,
    enunciado:
      '(Cespe/UnB — TRE/AL — Analista Judiciário — 2004) (...) Mas leitura, quer do mundo, quer de livros, só se aprende e se vivencia, de forma plena, coletivamente, em troca contínua de experiências com os outros. (...) No segundo período do texto (acima), a relação entre as orações dá-se por coordenação.',
    gabaritoCE: true,
    comentario:
      'O segundo período começa com “Mas”, conjunção coordenativa adversativa que liga a oração a outra anterior sem depender dela sintaticamente. Como a relação entre as orações é de coordenação, a afirmação está correta. Basta reconhecer a conjunção inicial para responder.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-36',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FUNDATEC — DETRAN/RS — Técnico de nível superior — 2009) Na linha 04 (... cuidar do asfalto e instalar placas...), o elemento coesivo e tem a função de unir:',
    alternativas: [
      'termos de mesmo valor sintático;',
      'orações coordenadas;',
      'orações subordinadas;',
      'termos de mesmo sentido;',
      'expressões semanticamente semelhantes.',
    ],
    correta: 1,
    comentario:
      'O “e” liga duas construções no infinitivo (“cuidar do asfalto” e “instalar placas”), cada uma com valor de oração, e não duas palavras de mesma função. Uma conjunção aditiva que une orações de mesmo nível faz coordenação entre orações. As demais alternativas trazem outras relações, como mesma função sintática, subordinação, sinonímia ou semelhança semântica, que não correspondem ao papel de unir orações.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-37',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 1,
    enunciado:
      '(Cesgranrio — BACEN — Analista — 2010) As duas orações enunciadas estão ligadas por conectivo adequado ao sentido expresso no texto em:',
    alternativas: [
      'Acredito na existência de vida em outros planetas, mas tenho três adolescentes em casa.',
      'Acredito na existência de vida em outros planetas, pois tenho três adolescentes em casa.',
      'Acredito na existência de vida em outros planetas, posto que tenho três adolescentes em casa.',
      'Acredito na existência de vida em outros planetas, porém tenho três adolescentes em casa.',
      'Acredito na existência de vida em outros planetas, não obstante ter três adolescentes em casa.',
    ],
    correta: 1,
    comentario:
      '“Pois” introduz uma explicação para a afirmação anterior, sentido natural para a frase. “Mas”, “porém” e “não obstante” marcam oposição ou concessão, sentido que não combina com a ideia de justificativa. “Posto que” é causal ou concessiva conforme o contexto, e não é a forma mais adequada aqui.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-38',
    temaId: 'lp-periodo-composto',
    formato: 'certo-errado',
    dificuldade: 3,
    enunciado:
      '(FGV — SEFAZ/RJ — Auditor-Fiscal da Receita Estadual — 2011) “Na Espanha, por exemplo, a recentíssima reforma do Código Penal – que atende diretivas da União Europeia sobre o tema – trouxe, no artigo 31 bis, não só a possibilidade de responsabilização penal da pessoa jurídica (por delitos que sejam cometidos no exercício de suas atividades sociais, ou por conta, nome, ou em proveito delas), mas também estabelece regras de como essa responsabilização será aferida nos casos concretos (ela será aplicável [...], em função da inoperância de controles empresariais, sobre atividades desempenhadas pelas pessoas físicas que as dirigem ou que agem em seu nome)”. A respeito do período acima, analise a afirmativa a seguir: Há uma oração coordenada sindética aditiva e uma oração coordenada sindética alternativa.',
    gabaritoCE: true,
    comentario:
      'A afirmação está correta. O período tem coordenação sindética aditiva em “não só … mas também estabelece regras”, em que “mas também” acrescenta uma nova informação, e coordenação sindética alternativa em “ou por conta, nome, ou em proveito delas”, em que “ou” indica alternância entre possibilidades. A questão exige reconhecer o valor semântico de cada conjunção, não só a forma.',
  },
  {
    id: 'lp-periodo-composto-qlivro22-39',
    temaId: 'lp-periodo-composto',
    formato: 'multipla',
    dificuldade: 3,
    enunciado:
      '(FAB — EAGS — Sargento — 2011) Leia: “Você não estuda, nem me deixa estudar. Faça silêncio, que quero ouvir a explicação. Você quer que eu participe de suas brincadeiras durante as aulas, e nenhuma influência externa vai me atrapalhar”. Considerando os períodos compostos por coordenação, há no texto:',
    alternativas: [
      'duas orações aditivas e uma oração explicativa;',
      'uma oração aditiva, uma oração adversativa, uma oração alternativa;',
      'uma oração aditiva, uma oração alternativa, uma oração conclusiva;',
      'uma oração aditiva, uma oração explicativa, uma oração adversativa.',
    ],
    correta: 3,
    comentario:
      'Em “nem me deixa estudar”, o “nem” soma uma negativa à anterior, valor aditivo. Em “que quero ouvir a explicação”, a oração justifica o pedido de silêncio, valor explicativo. O “e” de “e nenhuma influência externa vai me atrapalhar” tem sentido de contraste com a ideia anterior, valor adversativo. Por isso a alternativa D é a única que reúne esses três valores.',
  },
];
