import type { ResumoTema } from '../../../types';

const ATUALIZADO = '2026-11-20';
const CF = 'Constituição Federal de 1988, texto compilado — https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm';
const L8429 = 'Lei 8.429/1992, com a redação da Lei 14.230/2021, texto compilado — https://www.planalto.gov.br/ccivil_03/leis/l8429.htm';
const L9784 = 'Lei 9.784/1999 (processo administrativo federal), texto compilado — https://www.planalto.gov.br/ccivil_03/leis/l9784.htm';
const L14133 = 'Lei 14.133/2021 (licitações e contratos), texto compilado — https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm';
const D12807 = 'Decreto 12.807/2025 (atualiza os valores da Lei 14.133 a partir de 1º/1/2026) — https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/D12807.htm';
const L8112 = 'Lei 8.112/1990, arts. 121 a 126 — https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm';
const D20910 = 'Decreto 20.910/1932, art. 1º — https://www.planalto.gov.br/ccivil_03/decreto/antigos/d20910.htm';
const TEMA940 = 'STF, Tema 940 da repercussão geral (RE 1.027.633) — https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=940';
const TEMA130 = 'STF, Tema 130 da repercussão geral (RE 591.874) — https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=130';
const TEMA592 = 'STF, Tema 592 da repercussão geral (RE 841.526) — https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=592';
const TEMA1199 = 'STF, Tema 1199 da repercussão geral (ARE 843.989), tese no Informativo 1065 — https://www.stf.jus.br/arquivo/informativo/documento/informativo1065.htm';
const TEMA897 = 'STF, Tema 897 da repercussão geral (RE 852.475) — https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=897';
const ADI7042 = 'STF, ADIs 7042 e 7043 (legitimidade da pessoa jurídica interessada), notícia de 31/8/2022 — https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=493313&ori=1';
const ADI7236 = 'STF, ADIs 7156 e 7236 (julgamento concluído em 1º/7/2026), notícia oficial de 1º/7/2026 — https://noticias.stf.jus.br/postsnoticias/stf-invalida-reducao-de-prazo-de-prescricao-prevista-na-reforma-da-lei-de-improbidade-administrativa/';
const INFO1225 = 'STF, Informativo 1225 (ADIs 7156 e 7236) — https://www.stf.jus.br/arquivo/informativo/documento/informativo1225.htm';
const ADI6890 = 'STF, ADI 6890 (recontratação na dispensa emergencial), notícia de 12/9/2024 — https://noticias.stf.jus.br/?p=93808';
const STJ553 = 'STJ, Tema repetitivo 553 (prescrição quinquenal do Decreto 20.910/1932 nas ações indenizatórias contra a Fazenda Pública) — https://processo.stj.jus.br/repetitivos/temas_repetitivos/pesquisa.jsp?novaConsulta=true&tipo_pesquisa=T&cod_tema_inicial=553&cod_tema_final=553';
const SV5 = 'STF, Súmula Vinculante 5 — https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=26&sumula=1199';
const SV21 = 'STF, Súmula Vinculante 21 — https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=26&sumula=1255';
const SUM473 = 'STF, Súmula 473 — https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=30&sumula=1602';

export const RESUMOS_2: ResumoTema[] = [
  /* ---------- da-responsabilidade ---------- */
  {
    temaId: 'da-responsabilidade',
    titulo: 'Responsabilidade civil do Estado',
    resumo:
      'A banca cobra o art. 37, § 6º, da CF: quem responde objetivamente, a teoria do risco administrativo e suas excludentes, a ação de regresso contra o agente (dolo ou culpa), a tese da “dupla garantia” (Tema 940 do STF) e a responsabilidade das concessionárias perante não usuários.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Pelo **art. 37, § 6º, da CF**, as **pessoas jurídicas de direito público** e as **de direito privado prestadoras de serviços públicos** respondem pelos danos que seus **agentes, nessa qualidade**, causarem a **terceiros**, assegurado o **direito de regresso** contra o responsável **nos casos de dolo ou culpa**.\n\nA regra adota a **teoria do risco administrativo**: a vítima não precisa provar culpa do Estado. Basta demonstrar **conduta** do agente, **dano** e **nexo causal**. A responsabilidade é **objetiva** para a pessoa jurídica e **subjetiva** para o agente, que só responde, em regresso, se agiu com dolo ou culpa.\n\nComo é “risco administrativo” e não “risco integral”, o Estado pode **afastar ou reduzir** o dever de indenizar provando uma **excludente do nexo causal**: **culpa exclusiva da vítima**, **caso fortuito ou força maior** e **fato exclusivo de terceiro**. A **culpa concorrente** da vítima não exclui, mas **reduz** a indenização. A doutrina chama de **risco integral** as hipóteses excepcionais em que não se admitem excludentes; a CF, por exemplo, diz que a responsabilidade por **danos nucleares independe de culpa** (art. 21, XXIII, “d”).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Quem responde e como',
          colunas: ['Situação', 'Regra', 'Fundamento'],
          linhas: [
            ['Ato de agente de pessoa jurídica de direito público (União, Município, autarquia)', 'Objetiva (risco administrativo)', 'CF, art. 37, § 6º'],
            ['Concessionária ou permissionária de serviço público (ex.: empresa de ônibus)', 'Objetiva perante usuários **e não usuários**', 'CF, art. 37, § 6º; STF, Tema 130'],
            ['Estatal que explora atividade econômica (ex.: banco estatal)', 'Fora do § 6º; regime das empresas privadas', 'CF, art. 173, § 1º, II'],
            ['Agente causador do dano', 'Só em regresso, se houve dolo ou culpa; não pode ser acionado diretamente pela vítima', 'CF, art. 37, § 6º; STF, Tema 940; Lei 8.112, art. 122, § 2º'],
            ['Morte de preso sob custódia', 'Estado responde se descumpriu o dever específico de proteção', 'CF, art. 5º, XLIX; STF, Tema 592'],
            ['Erro judiciário ou prisão além do tempo fixado', 'Estado indeniza', 'CF, art. 5º, LXXV'],
          ],
        },
      },
      {
        tipo: 'texto',
        texto:
          '**Dupla garantia (Tema 940):** o STF fixou que a ação por danos causados por agente público deve ser ajuizada **contra o Estado** ou contra a pessoa jurídica de direito privado prestadora de serviço público, sendo **parte ilegítima** o autor do ato, assegurado o regresso nos casos de dolo ou culpa. A garantia protege a vítima (que cobra de quem tem patrimônio) e o agente (que só responde perante a própria pessoa jurídica).\n\n**Omissão:** quando o dano decorre de **não agir**, a doutrina tradicional exige demonstrar a **falta do serviço** (culpa anônima: o serviço não funcionou, funcionou mal ou tarde), sem precisar identificar o servidor culpado. Quando o Estado tem **dever específico** de agir, como na **custódia de presos**, o STF reconhece a responsabilidade com base no art. 37, § 6º (Tema 592), salvo prova de causa que rompa o nexo. Como as correntes divergem, as boas questões trazem casos em que a resposta é a mesma nas duas.\n\n**Prazo:** ações contra a Fazenda Pública prescrevem, em regra, em **5 anos** contados do ato ou fato (Decreto 20.910/1932, art. 1º). O STJ (Tema repetitivo 553) aplica esse prazo às ações indenizatórias, e não os 3 anos do Código Civil.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Questão de banca resolvida',
        enunciado:
          'Uma ambulância do SAMU municipal, em atendimento, avança o sinal com cautela e colide com um carro estacionado irregularmente na faixa de pedestres. O dono do carro quer processar o motorista da ambulância. Como resolver?',
        resolucao:
          'A ação deve ser proposta contra o Município (pessoa jurídica de direito público), que responde objetivamente; o motorista é parte ilegítima (Tema 940). O Município pode alegar culpa concorrente da vítima, que estacionou irregularmente, para reduzir a indenização. Se pagar e provar dolo ou culpa do motorista, cabe ação regressiva contra ele.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) responsabilidade objetiva **não é** risco integral — admite excludentes; (2) regresso contra o agente exige **dolo ou culpa** (responsabilidade subjetiva); (3) a vítima **não** escolhe processar o agente diretamente (Tema 940); (4) concessionária responde objetivamente também perante **não usuário** (Tema 130); (5) o § 6º fala em agente “**nessa qualidade**”: servidor de folga que causa dano em assunto particular, sem qualquer relação com a função, não atrai a regra; (6) estatal **exploradora de atividade econômica** não está no § 6º.',
      },
    ],
    fontes: [CF, TEMA940, TEMA130, TEMA592, L8112, D20910, STJ553],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- da-improbidade ---------- */
  {
    temaId: 'da-improbidade',
    titulo: 'Improbidade administrativa (Lei 8.429/1992, com a Lei 14.230/2021)',
    resumo:
      'Depois da Lei 14.230/2021, a banca cobra sobretudo: só há improbidade com **dolo**; os três tipos (arts. 9, 10 e 11) e suas sanções; o rol taxativo do art. 11; a prescrição de 8 anos; o acordo de não persecução civil; e a tese do STF sobre retroatividade (Tema 1199).',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A base é o **art. 37, § 4º, da CF**: atos de improbidade importam **suspensão dos direitos políticos, perda da função pública, indisponibilidade dos bens e ressarcimento ao erário**, na forma e gradação da lei, **sem prejuízo da ação penal**. A Lei 8.429/1992 foi profundamente alterada pela **Lei 14.230/2021**.\n\n**Dolo obrigatório:** são atos de improbidade as **condutas dolosas** dos arts. 9º, 10 e 11 (art. 1º, § 1º). Dolo é a **vontade livre e consciente de alcançar o resultado ilícito**, não bastando a voluntariedade do agente (§ 2º). O mero exercício da função, sem prova de ato doloso com fim ilícito, afasta a responsabilidade (§ 3º). A modalidade **culposa** do art. 10 **deixou de existir**.\n\n**Sujeitos:** agente público em sentido amplo, ainda que transitório ou sem remuneração (art. 2º), e o terceiro que **induza ou concorra dolosamente** para o ato (art. 3º). O herdeiro responde só pela reparação, até o limite da herança (art. 8º).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Os três tipos e as sanções (art. 12)',
          colunas: ['Tipo', 'Núcleo', 'Exemplos (incisos)', 'Sanções máximas'],
          linhas: [
            ['Art. 9º — enriquecimento ilícito', 'Auferir vantagem patrimonial indevida em razão do cargo, mediante ato doloso', 'Receber presente de quem tem interesse na decisão (I); usar servidores ou bens públicos em obra particular (IV); patrimônio desproporcional à renda (VII)', 'Perda dos bens acrescidos, perda da função, suspensão dos direitos políticos até 14 anos, multa igual ao acréscimo, proibição de contratar até 14 anos'],
            ['Art. 10 — lesão ao erário', 'Ação ou omissão dolosa que cause, efetiva e comprovadamente, perda patrimonial, desvio, apropriação, malbaratamento ou dilapidação', 'Compra acima do preço de mercado (V); frustrar licitação ou dispensá-la indevidamente, com perda patrimonial efetiva (VIII)', 'Perda da função, suspensão dos direitos políticos até 12 anos, multa igual ao dano, proibição de contratar até 12 anos'],
            ['Art. 11 — violação de princípios', 'Ação ou omissão dolosa que viole honestidade, imparcialidade e legalidade, caracterizada por uma das condutas do rol', 'Revelar segredo funcional (III); negar publicidade fora das exceções legais (IV); frustrar o caráter concorrencial de concurso (V); nepotismo (XI); publicidade de promoção pessoal (XII)', 'Multa de até 24 vezes a remuneração e proibição de contratar até 4 anos (sem perda da função nem suspensão dos direitos políticos)'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Art. 11 é rol taxativo:** a conduta tem de estar em um dos incisos (“caracterizada por uma das seguintes condutas”). O STF declarou constitucional esse caráter taxativo nas ADIs 7156 e 7236 (1º/7/2026). Exige-se o **fim de obter proveito ou benefício indevido** (§ 1º) e **lesividade relevante**, mesmo sem dano ao erário (§ 4º).',
          '**Art. 10 exige dano efetivo:** formalidade descumprida sem perda patrimonial efetiva não gera ressarcimento (§ 1º).',
          '**Independência:** as sanções independem de dano efetivo (salvo ressarcimento e art. 10) e da aprovação ou rejeição das contas pelo Tribunal de Contas (art. 21, I e II).',
          '**Trânsito em julgado:** perda da função e suspensão dos direitos políticos só se efetivam após o trânsito em julgado (art. 20).',
          '**Ação e acordo:** a lei atribui a ação ao Ministério Público (art. 17), mas o STF (ADIs 7042 e 7043, 2022) reconheceu também a legitimidade da **pessoa jurídica interessada**. O **acordo de não persecução civil** exige, ao menos, **integral ressarcimento** e **reversão da vantagem indevida**, com **homologação judicial** (art. 17-B).',
        ],
      },
      {
        tipo: 'texto',
        texto:
          '**Prescrição (art. 23):** a ação prescreve em **8 anos**, contados da **ocorrência do fato** ou, nas infrações permanentes, do dia em que cessou a permanência. O § 4º lista os marcos de interrupção, como o ajuizamento da ação e a sentença condenatória (o STF os declarou constitucionais). Atenção: o § 5º prevê que, interrompido o prazo, ele recomeça **pela metade** (4 anos); ao concluir as **ADIs 7156 e 7236 em 1º/7/2026**, o STF declarou **inconstitucional** a expressão “pela metade do prazo”: após a interrupção, o prazo recomeça **integral**, com limite total de **20 anos** (Informativo STF 1225). Já a ação de **ressarcimento** fundada em ato **doloso** de improbidade é **imprescritível** (Tema 897 do STF; CF, art. 37, § 5º).\n\n**Retroatividade — Tema 1199 do STF (ARE 843.989, 2022):** (1) exige-se **dolo**; (2) a revogação da modalidade culposa é **irretroativa**: não atinge a **coisa julgada** nem a execução das penas; (3) alcança atos culposos anteriores **sem trânsito em julgado**, cabendo ao juiz analisar eventual dolo; (4) o **novo regime prescricional não retroage**.',
      },
      {
        tipo: 'exemplo',
        titulo: 'Questão de banca resolvida',
        enunciado:
          'Um diretor de hospital municipal, por descuido, deixa de exigir uma certidão em uma compra, sem prejuízo ao erário e sem favorecer ninguém. Há improbidade?',
        resolucao:
          'Não. Sem dolo não há improbidade (art. 1º, §§ 1º a 3º); a conduta culposa não é mais punida. Também não há art. 10, porque não houve perda patrimonial efetiva (art. 10, caput e § 1º). Pode haver, conforme o caso, apuração disciplinar.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) **não existe mais improbidade culposa**; (2) o art. 11 **não** prevê perda da função nem suspensão dos direitos políticos — só multa (até 24 vezes a remuneração) e proibição de contratar (até 4 anos); (3) suspensão dos direitos políticos: **até 14 anos** (art. 9º) e **até 12 anos** (art. 10), sem mínimo legal; (4) o prazo de prescrição é **8 anos a contar do fato**, não mais do fim do mandato; (5) a Lei 14.230 **não retroage** para desfazer condenações transitadas em julgado (Tema 1199); (6) o STF, nas ADIs 7156 e 7236 (1º/7/2026), manteve o dolo e o rol taxativo do art. 11, mas invalidou ou reinterpretou outros pontos da reforma (prescrição pela metade, indisponibilidade de bens, perda da função, responsabilização de sócios de pessoas jurídicas, entre outros): veja se a banca cobra a **letra da lei** ou o **STF**.',
      },
    ],
    fontes: [CF, L8429, TEMA1199, TEMA897, ADI7042, ADI7236, INFO1225],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- da-processo ---------- */
  {
    temaId: 'da-processo',
    titulo: 'Processo administrativo federal (Lei 9.784/1999)',
    resumo:
      'Caem os prazos (5, 10, 15 e 30 dias), as regras de delegação e avocação, impedimento × suspeição, o recurso administrativo (10 dias, 3 instâncias, reconsideração em 5 dias, efeito só devolutivo), a decadência de 5 anos para anular e a revisão sem agravamento.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A Lei 9.784/1999 regula o processo administrativo na **Administração Federal direta e indireta** e se aplica também aos **Poderes Legislativo e Judiciário da União** quando exercem função administrativa (art. 1º, § 1º). Processos específicos (como o PAD da Lei 8.112) seguem lei própria, com aplicação **subsidiária** da Lei 9.784 (art. 69). Estados e Municípios precisam de lei própria, mas as bancas do Sul copiam muito esse modelo.\n\nO processo pode começar **de ofício ou a pedido** (art. 5º). O administrado tem direito a ter vista dos autos, formular alegações e fazer-se assistir **facultativamente** por advogado, salvo quando a lei exigir (art. 3º). No PAD, a **SV 5** do STF diz que a falta de defesa técnica por advogado não ofende a Constituição. É proibida a cobrança de despesas processuais, salvo previsão legal (art. 2º, parágrafo único, XI), e a **SV 21** veda exigir **depósito ou arrolamento prévio** de dinheiro ou bens para admitir recurso administrativo.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Prazos que mais caem',
          colunas: ['Prazo', 'Para quê', 'Artigo'],
          linhas: [
            ['5 dias', 'Prática de atos quando não há prazo específico (pode ser dilatado até o dobro, com justificação)', 'Art. 24'],
            ['3 dias úteis', 'Antecedência mínima da intimação para comparecimento ou para prova/diligência', 'Arts. 26, § 2º, e 41'],
            ['15 dias', 'Parecer de órgão consultivo obrigatório, salvo norma especial', 'Art. 42'],
            ['10 dias', 'Manifestação do interessado após encerrada a instrução', 'Art. 44'],
            ['30 dias (+30)', 'Decidir após concluída a instrução, prorrogável por igual período motivadamente', 'Art. 49'],
            ['10 dias', 'Interpor recurso, contados da ciência ou divulgação oficial', 'Art. 59'],
            ['5 dias', 'Autoridade recorrida reconsiderar antes de encaminhar ao superior', 'Art. 56, § 1º'],
            ['5 dias úteis', 'Demais interessados apresentarem alegações após o recurso', 'Art. 62'],
            ['30 dias (+30)', 'Decidir o recurso, a partir do recebimento dos autos', 'Art. 59, §§ 1º e 2º'],
            ['5 anos', 'Decadência para anular ato favorável, salvo má-fé', 'Art. 54'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Delegação (arts. 12 a 14):** possível mesmo a quem **não é subordinado**, por razões técnicas, sociais, econômicas, jurídicas ou territoriais; o ato deve ser **publicado**, é **revogável a qualquer tempo**, e a decisão tomada por delegação considera-se **editada pelo delegado**. **Não se delegam:** atos normativos, decisão de recursos e matérias de competência exclusiva (art. 13).',
          '**Avocação (art. 15):** excepcional, por motivos relevantes justificados, **temporária**, e só de competência de órgão **hierarquicamente inferior**.',
          '**Impedimento (art. 18) — presunção absoluta, dever de se afastar:** interesse direto ou indireto na matéria; ter participado ou vir a participar como perito, testemunha ou representante (ou cônjuge, companheiro, parente ou afim até o 3º grau nessas situações); litigar judicial ou administrativamente com o interessado ou seu cônjuge/companheiro. Omitir o impedimento é **falta grave** (art. 19, parágrafo único).',
          '**Suspeição (art. 20) — pode ser arguida:** **amizade íntima ou inimizade notória** com interessado ou com cônjuges, companheiros, parentes e afins até o 3º grau. O indeferimento da suspeição admite recurso **sem efeito suspensivo** (art. 21).',
          '**Recurso (arts. 56 a 65):** cabe por razões de **legalidade e de mérito**; dirigido à autoridade que decidiu, que pode reconsiderar em 5 dias; tramita por **no máximo três instâncias**, salvo lei diversa; independe de caução, salvo exigência legal; **em regra sem efeito suspensivo** (pode ser concedido havendo justo receio de prejuízo de difícil reparação). Não é conhecido se intempestivo, perante órgão incompetente, por ilegítimo ou após exaurida a esfera administrativa (art. 63).',
          '**Reformatio in pejus:** no recurso, a decisão pode ser agravada, mas o recorrente deve ser cientificado para alegar antes (art. 64, parágrafo único). Na **revisão** de processo sancionador (a qualquer tempo, por fatos novos), **não** pode haver agravamento (art. 65).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Questão de banca resolvida',
        enunciado:
          'O servidor designado para instruir um processo é inimigo declarado do interessado. O interessado pede o afastamento dele. Trata-se de impedimento ou suspeição, e qual o efeito de eventual indeferimento?',
        resolucao:
          'Suspeição (art. 20: inimizade notória). Se o pedido for indeferido, cabe recurso sem efeito suspensivo (art. 21). Impedimento seria, por exemplo, se o servidor tivesse atuado como perito no mesmo caso (art. 18, II).',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) prazo geral para **recorrer é 10 dias**; **reconsiderar, 5 dias**; **decidir o recurso, 30 dias**; (2) recurso **não** tem efeito suspensivo como regra; (3) **três instâncias**, não duas; (4) a decisão de **recurso não se delega**; (5) **amizade íntima/inimizade notória = suspeição**; interesse na matéria, atuação como perito/testemunha e litígio com o interessado = **impedimento**; (6) prazos em dias contam-se de modo **contínuo**, excluindo o dia do começo e incluindo o do vencimento (art. 66); (7) não atender à intimação **não** importa confissão nem renúncia a direito (art. 27).',
      },
    ],
    fontes: [L9784, SV5, SV21, SUM473],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- da-licitacoes ---------- */
  {
    temaId: 'da-licitacoes',
    titulo: 'Licitações e contratos (Lei 14.133/2021 — noções)',
    resumo:
      'Em nível de noções, a banca cobra: as cinco modalidades e o fim do convite e da tomada de preços; os critérios de julgamento; as fases em sequência (julgamento antes da habilitação); dispensa × inexigibilidade; o agente de contratação; limites de alteração contratual e sanções.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A Lei 14.133/2021 é a **lei geral** de licitações e contratos da administração **direta, autárquica e fundacional** de todos os entes (art. 1º). **Não** se aplica às empresas públicas e sociedades de economia mista, regidas pela **Lei 13.303/2016** (art. 1º, § 1º, com a ressalva do art. 178). A CF exige licitação pública que assegure igualdade de condições, ressalvados os casos especificados na legislação (art. 37, XXI).\n\nO art. 5º lista os princípios — além do LIMPE: interesse público, probidade, igualdade, **planejamento**, transparência, eficácia, **segregação de funções**, motivação, **vinculação ao edital**, **julgamento objetivo**, segurança jurídica, razoabilidade, competitividade, proporcionalidade, celeridade, economicidade e **desenvolvimento nacional sustentável**, além das disposições da LINDB.\n\n**Fases, em sequência (art. 17):** preparatória → divulgação do edital → apresentação de propostas e lances → **julgamento** → **habilitação** → recursal → homologação. A habilitação pode vir antes das propostas e do julgamento, por ato motivado e se prevista no edital (§ 1º). A licitação é **preferencialmente eletrônica**; a presencial exige motivação e gravação em áudio e vídeo (§ 2º).',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Modalidades (art. 28) — convite e tomada de preços não existem mais',
          colunas: ['Modalidade', 'Para quê (art. 6º)', 'Critérios de julgamento'],
          linhas: [
            ['Pregão', 'Obrigatório para bens e serviços **comuns** (padrões objetivamente definíveis por especificações usuais)', 'Menor preço ou maior desconto'],
            ['Concorrência', 'Bens e serviços **especiais** e obras e serviços **comuns e especiais de engenharia**', 'Menor preço, melhor técnica ou conteúdo artístico, técnica e preço, maior retorno econômico ou maior desconto'],
            ['Concurso', 'Escolha de trabalho técnico, científico ou artístico, com prêmio ou remuneração', 'Melhor técnica ou conteúdo artístico'],
            ['Leilão', 'Alienação de imóveis ou de móveis inservíveis ou legalmente apreendidos', 'Maior lance'],
            ['Diálogo competitivo', 'Objetos com inovação, em que a Administração dialoga com licitantes pré-selecionados para desenvolver alternativas', 'Definidos no edital da fase competitiva'],
          ],
          nota: 'É vedado criar outras modalidades ou combinar as existentes (art. 28, § 2º). O pregão não se aplica a serviços técnicos especializados de natureza predominantemente intelectual nem a obras e serviços de engenharia, exceto os serviços comuns de engenharia (art. 29, parágrafo único).',
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Inexigibilidade (art. 74) = competição inviável:** fornecedor exclusivo (vedada a preferência por marca); artista consagrado pela crítica ou pela opinião pública; serviços técnicos especializados de natureza predominantemente intelectual com **notória especialização** (vedada para publicidade e divulgação); objetos contratáveis por **credenciamento**; imóvel cujas características tornem necessária sua escolha. O rol é **exemplificativo** (“em especial”).',
          '**Dispensa (art. 75) = competição possível, mas a lei permite não licitar:** rol **taxativo**. Exemplos: pequeno valor (inciso I para obras, serviços de engenharia e manutenção de veículos; inciso II, com limite menor, para outros serviços e compras); licitação deserta ou fracassada há menos de 1 ano; **emergência ou calamidade pública**, com obras e serviços concluídos em até **1 ano**; a lei veda a prorrogação e a recontratação da mesma empresa (inciso VIII), mas o STF (ADI 6890, 2024) admitiu ambas, na mesma emergência, desde que o total não passe de 1 ano; medicamentos exclusivamente para **doenças raras** definidas pelo Ministério da Saúde (IV, “m”); transferência de tecnologia de produtos estratégicos para o SUS (XII).',
          '**Valores atualizados:** os limites do art. 75, I e II (no texto original, R$ 100 mil e R$ 50 mil) são corrigidos todo 1º de janeiro por decreto (art. 182). Para 2026, o Decreto 12.807/2025 fixou R$ 130.984,20 e R$ 65.492,11. Os limites são **duplicados** para consórcios públicos e agências executivas (art. 75, § 2º).',
          '**Equipamentos para o SUS (art. 44-A, incluído pela Lei 15.210/2025):** na compra de equipamento para procedimento diagnóstico ou terapêutico no SUS acima do limite do art. 75, II, deve-se considerar o aproveitamento ao longo da vida útil, e o edital deve demonstrar a capacidade instalada para operá-lo ou apresentar plano para atender aos requisitos de operação.',
          '**Licitação dispensada (art. 76):** casos de alienação de bens em que a lei já dispensa (doação a outro órgão, permuta etc.). Não confundir com “dispensável” (art. 75).',
          '**Agente de contratação (art. 8º):** servidor efetivo ou empregado público dos quadros permanentes que conduz a licitação até a homologação; no pregão, chama-se **pregoeiro**. Em bens ou serviços especiais, pode ser substituído por **comissão de contratação** de no mínimo 3 membros, que respondem solidariamente, salvo quem registrar divergência em ata (§ 2º).',
          '**Contratos:** a Administração pode impor acréscimos ou supressões de até **25%** do valor inicial atualizado; em **reforma** de edifício ou equipamento, acréscimos até **50%** (art. 125). Serviços e fornecimentos contínuos: contratos de até **5 anos** (art. 106), prorrogáveis até **10 anos** (art. 107).',
          '**Sanções (art. 156):** advertência; multa (de 0,5% a 30% do valor do contrato); **impedimento** de licitar e contratar no **próprio ente**, por até **3 anos**; **declaração de inidoneidade** para licitar ou contratar com **todos os entes**, de **3 a 6 anos**.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Questão de banca resolvida',
        enunciado:
          'Um Município precisa comprar luvas de procedimento e seringas, itens com especificação usual de mercado, em valor acima do limite de dispensa. Qual modalidade e qual critério?',
        resolucao:
          'Pregão, obrigatório para bens comuns (art. 6º, XLI, e art. 29), com critério de menor preço ou maior desconto. Se fosse uma epidemia com urgência real de atendimento, poderia caber dispensa por emergência (art. 75, VIII), limitada ao necessário para a situação.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) **convite e tomada de preços foram extintos**; (2) na regra, o **julgamento vem antes da habilitação**; (3) **inexigibilidade** = competição inviável (rol exemplificativo); **dispensa** = competição viável, mas a lei permite contratar direto (rol taxativo); (4) o **pregão** não é para obras nem para serviços técnicos intelectuais; (5) **impedimento** vale no ente que aplicou (até 3 anos); **inidoneidade**, em todos os entes (3 a 6 anos); (6) contratação direta indevida com dolo, fraude ou erro grosseiro gera responsabilidade **solidária** do contratado e do agente pelo dano (art. 73).',
      },
    ],
    fontes: [L14133, D12807, ADI6890, CF],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- da-controle ---------- */
  {
    temaId: 'da-controle',
    titulo: 'Controle da administração pública',
    resumo:
      'A banca cobra as classificações do controle (interno × externo, legalidade × mérito, prévio × concomitante × posterior), a autotutela, o papel do Tribunal de Contas (arts. 70 e 71 da CF), o controle municipal (art. 31), os limites do controle judicial e as linhas de defesa da Lei 14.133.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Controle é o conjunto de mecanismos para verificar se a Administração age conforme a lei e o interesse público. Classificações mais cobradas:\n\n• **Quanto ao órgão:** **administrativo** (a própria Administração), **legislativo** (Parlamento, com auxílio do Tribunal de Contas) e **judicial**.\n• **Quanto à posição:** **interno** (dentro do mesmo Poder ou estrutura) e **externo** (um Poder sobre outro, como o Legislativo e o Tribunal de Contas sobre o Executivo, ou o Judiciário sobre os atos administrativos). O **controle social** (cidadão, conselhos de saúde, ouvidoria) completa o sistema.\n• **Quanto ao momento:** **prévio** (preventivo), **concomitante** (durante) e **posterior** (corretivo).\n• **Quanto ao aspecto:** de **legalidade** (feito pela Administração e pelo Judiciário) e de **mérito** (conveniência e oportunidade, feito só pela própria Administração).\n\nO **controle administrativo** decorre da **autotutela** (Lei 9.784, art. 53; Súmula 473 do STF): anular atos ilegais e revogar os inconvenientes. Sobre a administração indireta, o ente central exerce **tutela** (supervisão ministerial, controle finalístico), não hierarquia. O **recurso hierárquico** é **próprio** quando dirigido à autoridade superior na mesma pessoa jurídica e **impróprio** quando dirigido a órgão de outra pessoa jurídica, o que só cabe se a lei prever.',
      },
      {
        tipo: 'tabela',
        tabela: {
          titulo: 'Tribunal de Contas da União (CF, art. 71) — o que pode e o que não pode',
          colunas: ['Competência', 'Detalhe que cai'],
          linhas: [
            ['Apreciar as contas do Presidente da República', 'Emite **parecer prévio** em 60 dias; quem **julga** é o Congresso (inciso I)'],
            ['Julgar as contas dos administradores e responsáveis por dinheiros públicos', 'Aqui o TCU **julga** (inciso II)'],
            ['Apreciar, para registro, admissões de pessoal e concessões de aposentadorias, reformas e pensões', 'Exceto nomeações para cargo em comissão (inciso III)'],
            ['Aplicar sanções, como multa proporcional ao dano', 'Decisões que imputem débito ou multa têm eficácia de **título executivo** (§ 3º)'],
            ['Assinar prazo e, se não atendido, sustar **ato**', 'Comunica à Câmara e ao Senado (incisos IX e X)'],
            ['Sustar **contrato**', 'Cabe ao **Congresso Nacional**; se ele e o Executivo não agirem em 90 dias, o Tribunal decide (§§ 1º e 2º)'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Controle externo federal (CF, art. 70):** fiscalização contábil, financeira, orçamentária, operacional e patrimonial quanto à **legalidade, legitimidade e economicidade**, aplicação de subvenções e renúncia de receitas, pelo **Congresso Nacional**, com auxílio do TCU, e pelo sistema de controle interno de cada Poder. Presta contas **qualquer pessoa**, física ou jurídica, pública ou privada, que utilize ou administre dinheiros, bens e valores públicos.',
          '**Controle interno (art. 74):** os responsáveis que souberem de irregularidade e não derem ciência ao TCU respondem **solidariamente** (§ 1º). Qualquer **cidadão, partido político, associação ou sindicato** pode denunciar irregularidades ao TCU (§ 2º).',
          '**Município (art. 31):** fiscalização pela **Câmara Municipal** (controle externo), com auxílio do Tribunal de Contas competente, e pelo controle interno do Executivo. O **parecer prévio** sobre as contas do prefeito só deixa de prevalecer por decisão de **dois terços** da Câmara (§ 2º). As contas ficam **60 dias** por ano à disposição de qualquer contribuinte (§ 3º). É **vedada a criação** de Tribunais, Conselhos ou órgãos de Contas Municipais (§ 4º). A **EC 139/2026** alterou os arts. 31, § 1º, e 75 para tratar os Tribunais de Contas como instituições permanentes e essenciais ao controle externo.',
          '**Controle judicial:** examina a **legalidade** (inclusive razoabilidade, proporcionalidade, motivos e finalidade), **não o mérito**. Instrumentos: mandado de segurança, ação popular (qualquer cidadão, para anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural — CF, art. 5º, LXXIII), ação civil pública e ação de improbidade.',
          '**Linhas de defesa nas contratações (Lei 14.133, art. 169):** 1ª — servidores, agentes de licitação e autoridades da governança do órgão; 2ª — assessoramento jurídico e controle interno do próprio órgão; 3ª — órgão central de controle interno e tribunal de contas.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Questão de banca resolvida',
        enunciado:
          'O Tribunal de Contas do Estado emite parecer prévio pela rejeição das contas anuais de um prefeito. A Câmara de Vereadores, com 9 membros, vota: 5 pela aprovação e 4 pela rejeição. As contas foram aprovadas?',
        resolucao:
          'Não. O parecer prévio só deixa de prevalecer por decisão de dois terços dos membros da Câmara (CF, art. 31, § 2º): seriam necessários 6 votos de 9. Com 5 votos, prevalece o parecer pela rejeição.',
      },
      {
        tipo: 'atencao',
        texto:
          'Pegadinhas: (1) o TCU **aprecia** (parecer prévio) as contas do Presidente e **julga** as dos demais administradores; (2) sustação de **contrato** é do **Congresso**; de **ato**, do TCU; (3) o Judiciário **não revoga** ato de outro Poder — controla legalidade, não mérito; (4) admissão para **cargo em comissão** não passa por registro no TCU; (5) a Câmara afasta o parecer prévio por **2/3**, não por maioria simples; (6) o controle sobre a indireta é **finalístico** (tutela), não hierárquico.',
      },
    ],
    fontes: [CF, L9784, SUM473, L14133],
    atualizadoEm: ATUALIZADO,
  },
];
