import type { ResumoTema } from '../../../types';
import { ATUALIZADO, F_D1171, F_D6029, F_L12813, F_L8112 } from './fontes';

export const RESUMOS_1: ResumoTema[] = [
  /* ---------- etp-1171 ---------- */
  {
    temaId: 'etp-1171',
    titulo: 'Código de Ética do servidor federal (Decreto 1.171/1994)',
    resumo:
      'A banca cobra o texto do Anexo quase literalmente: regras deontológicas (honesto × desonesto, bem comum, publicidade, verdade, filas como dano moral), alíneas de deveres e vedações e a única pena da Comissão de Ética, a censura.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O Decreto 1.171/1994 aprova o **Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal**, que está no **Anexo**. O Capítulo I traz as **regras deontológicas** (Seção I, incisos I a XIII), os **principais deveres** (Seção II, inciso XIV, alíneas) e as **vedações** (Seção III, inciso XV, alíneas). O Capítulo II trata das **Comissões de Ética** (incisos XVI a XXV). Os incisos XVII, XIX, XX, XXI, XXIII e XXV foram **revogados pelo Decreto 6.029/2007**, que hoje regula o funcionamento das comissões.\n\nA ideia central está no inciso II: o servidor não decide somente entre o legal e o ilegal, o justo e o injusto, o conveniente e o inconveniente, o oportuno e o inoportuno, mas **principalmente entre o honesto e o desonesto** (com remissão ao art. 37, caput e § 4º, da CF). A moralidade não se limita à distinção entre o bem e o mal: o fim é sempre o **bem comum** (III).\n\nO Código alcança a **vida privada**: a função pública integra a vida particular, e os fatos da conduta do dia a dia **podem acrescer ou diminuir o bom conceito na vida funcional** (VI). O conceito de **servidor** é amplo (XXIV): quem, por força de lei, contrato ou qualquer ato jurídico, presta serviço de natureza **permanente, temporária ou excepcional**, **ainda que sem retribuição financeira**, ligado direta ou indiretamente a órgão do poder estatal.',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Inciso', 'Regra deontológica', 'Como a banca cobra'],
          linhas: [
            ['I', 'Dignidade, decoro, zelo, eficácia e consciência dos princípios morais, no cargo ou fora dele', 'Vale também fora do serviço'],
            ['II', 'Escolher principalmente entre o honesto e o desonesto', 'Ser legal não basta'],
            ['III', 'Moralidade não se limita a bem × mal; o fim é o bem comum', 'Equilíbrio entre legalidade e finalidade'],
            ['IV', 'Remuneração custeada por tributos pagos por todos, inclusive pelo servidor', 'Moralidade como elemento indissociável do Direito'],
            ['VII', 'Publicidade é requisito de eficácia e moralidade', 'Exceções: segurança nacional, investigações policiais ou interesse superior do Estado e da Administração, em processo previamente declarado sigiloso'],
            ['VIII', 'Direito à verdade: o servidor não pode omiti-la nem falseá-la', 'Ainda que contrária aos interesses da pessoa ou da Administração'],
            ['X', 'Deixar o usuário à espera, com filas ou atrasos', 'Atitude antiética, ato de desumanidade e, principalmente, grave dano moral'],
            ['XII', 'Toda ausência injustificada do local de trabalho', 'Fator de desmoralização do serviço público'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Deveres (XIV) mais cobrados:** desempenhar a tempo as atribuições (a); resolver situações procrastinatórias, principalmente filas (b); ser **probo, reto, leal e justo** (c); ser cortês, sem preconceito de raça, sexo, nacionalidade, cor, idade, religião, cunho político e posição social (g); respeitar a hierarquia, **porém sem nenhum temor de representar** contra comprometimento indevido da estrutura (h); resistir a pressões por vantagens indevidas e denunciá-las (i); no **direito de greve**, zelar pela defesa da vida e da segurança coletiva (j); ser **assíduo e frequente** (l); comunicar aos superiores ato contrário ao interesse público (m); exercer com **estrita moderação** as prerrogativas funcionais (t).',
          '**Vedações (XV) mais cobradas:** usar cargo, amizades ou influência para obter favorecimento (a); prejudicar deliberadamente a reputação de servidores ou cidadãos (b); ser, por **espírito de solidariedade, conivente** com erro ou infração a este Código ou ao código de ética da sua profissão (c); deixar de usar os avanços técnicos e científicos ao seu alcance (e); pleitear, solicitar, provocar, sugerir ou receber vantagem para cumprir a missão (g); alterar ou deturpar documentos (h); retirar da repartição, sem autorização, documento ou bem público (l); usar **informação privilegiada** obtida no serviço (m); **apresentar-se embriagado no serviço ou fora dele habitualmente** (n).',
          '**Comissões de Ética (XVI, XVIII e XXII):** devem existir nos órgãos e entidades da administração federal direta, indireta autárquica e fundacional, ou em qualquer órgão ou entidade que exerça atribuições delegadas pelo poder público, para orientar sobre ética profissional e conhecer de imputação suscetível de **censura**; fornecem aos órgãos de carreira os **registros de conduta ética**, para instruir promoções; aplicam a **pena de censura**, em parecer fundamentado assinado por todos os integrantes, com ciência do faltoso.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Perito, fila e censura',
        enunciado:
          'Um perito médico federal deixa segurados aguardando por horas sem justificativa e, ao atendê-los, faz comentários depreciativos. Denunciado, quais normas do Código foram violadas e que pena a Comissão de Ética pode aplicar?',
        resolucao:
          'Violação dos incisos IX e X (cortesia; filas e atrasos como grave dano moral) e dos deveres de rapidez (XIV, b) e de cortesia (XIV, g). A Comissão de Ética só aplica **censura** (XXII). Se houver infração disciplinar, a apuração e as penas (advertência, suspensão, demissão) seguem a Lei 8.112, em sindicância ou PAD.',
      },
      {
        tipo: 'atencao',
        texto:
          'A Comissão de Ética **não aplica advertência, suspensão nem demissão**: a única pena do Código é a **censura** (XXII). E o Código alcança a vida particular: a embriaguez é vedada **no serviço ou fora dele habitualmente** (XV, n). Detalhe de prova: a lista de deveres do inciso XIV **pula a alínea “k”** (vai de “j” para “l”).',
      },
    ],
    fontes: [F_D1171, F_L8112],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- etp-6029 ---------- */
  {
    temaId: 'etp-6029',
    titulo: 'Sistema de Gestão da Ética (Decreto 6.029/2007)',
    resumo:
      'Caem a composição da CEP e das comissões setoriais (quantos membros, quem designa, mandato), os princípios e prazos do procedimento ético (10 dias para manifestação, rito reservado até a conclusão) e as providências quando há falta ética.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O Decreto 6.029/2007 institui o **Sistema de Gestão da Ética do Poder Executivo Federal**, para promover atividades que dispõem sobre a conduta ética (art. 1º). Entre as finalidades: integrar órgãos, programas e ações de ética pública e contribuir para políticas públicas tendo a **transparência e o acesso à informação** como instrumentos fundamentais.\n\nO Sistema é integrado (art. 2º) pela **Comissão de Ética Pública (CEP)**, pelas **Comissões de Ética do Decreto 1.171/1994** e pelas demais comissões de ética e equivalentes dos órgãos e entidades. Há também a **Rede de Ética** do Executivo federal, que se reúne ao menos uma vez por ano sob coordenação da CEP (art. 9º).\n\nNa posse, investidura ou contratação, o agente presta **compromisso solene** de observar o Código de Conduta da Alta Administração Federal, o Código de Ética do Decreto 1.171 e o código de ética do órgão (art. 15). Os códigos aplicam-se **mesmo em gozo de licença** (art. 24).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Item', 'Comissão de Ética Pública (CEP)', 'Comissão de Ética setorial'],
          linhas: [
            ['Composição', '7 brasileiros de idoneidade moral, reputação ilibada e notória experiência em administração pública (art. 3º)', '3 titulares e 3 suplentes, do quadro permanente (art. 5º)'],
            ['Quem designa', 'Presidente da República', 'Dirigente máximo do órgão ou entidade'],
            ['Mandato', '3 anos, não coincidentes, com uma única recondução', '3 anos, não coincidentes'],
            ['Remuneração / prioridade', 'Não remunerada; prestação relevante de serviço público (art. 3º, § 1º)', 'Trabalho considerado relevante, com prioridade sobre as atribuições do cargo quando o membro não atua com exclusividade na comissão (art. 19)'],
            ['Papel', 'Instância consultiva do Presidente e dos Ministros; administra o Código de Conduta da Alta Administração; dirime dúvidas do Dec. 1.171; coordena o Sistema (art. 4º)', 'Instância consultiva no órgão; aplica o Código de Ética do Dec. 1.171; apura condutas; representa o órgão na Rede de Ética (art. 7º)'],
            ['Secretaria-Executiva', 'Vinculada à Casa Civil', 'Vinculada administrativamente à instância máxima do órgão'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Quem provoca (art. 11):** qualquer cidadão, agente público, pessoa jurídica de direito privado, associação ou entidade de classe.',
          '**Princípios (art. 10):** celeridade; proteção à **honra e imagem do investigado**; proteção à **identidade do denunciante**, mantida sob reserva se ele desejar; independência e imparcialidade dos membros.',
          '**Rito (art. 12):** instauração de ofício ou por denúncia fundamentada, com contraditório e ampla defesa. O investigado se manifesta **por escrito em 10 dias**; se surgirem novas provas, nova manifestação em 10 dias.',
          '**Reserva (art. 13):** o procedimento é **reservado até a conclusão**; depois, deixa de sê-lo (documentos com sigilo legal continuam protegidos). O investigado pode saber o que lhe é imputado, ter vista dos autos e obter cópias, mesmo antes de notificado (art. 14).',
          '**Lacuna (art. 16):** a comissão não pode deixar de decidir por omissão do código; usa analogia e os princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência.',
          '**Falta ética (art. 12, § 5º):** sugestão de exoneração de cargo ou função de confiança (ou devolução ao órgão de origem); encaminhamento à CGU ou ao sistema de correição; recomendação de procedimento administrativo, se a gravidade exigir. Indícios de crime, improbidade ou infração disciplinar: cópia dos autos às autoridades competentes (art. 17).',
          '**Publicidade (art. 18):** as decisões são resumidas em ementa e, sem os nomes dos investigados, divulgadas no sítio do órgão e remetidas à CEP. A CEP mantém **banco de dados de sanções** (art. 22).',
          '**Membro de comissão infrator (art. 21):** a infração ética é apurada pela **CEP**.',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Denúncia em hospital universitário federal',
        enunciado:
          'Uma usuária denuncia à comissão de ética de um hospital federal a conduta de um servidor e pede que seu nome não seja revelado. O servidor, ainda não notificado, pede vista dos autos. Como fica?',
        resolucao:
          'A identidade da denunciante fica **sob reserva**, porque ela assim deseja (art. 10, II). O servidor tem direito de saber o que lhe é imputado e de ter vista dos autos **mesmo antes de notificado** (art. 14). Notificado, terá **10 dias** para manifestação escrita (art. 12).',
      },
      {
        tipo: 'atencao',
        texto:
          'Não troque os números: **CEP = 7 membros, designados pelo Presidente da República**, mandato de 3 anos com **uma única recondução**; **comissão setorial = 3 titulares + 3 suplentes**, designados pelo **dirigente máximo**. O procedimento é **reservado só até a conclusão**, e falta ética de membro de comissão setorial é apurada pela **CEP**, não pela própria comissão.',
      },
    ],
    fontes: [F_D6029, F_D1171],
    atualizadoEm: ATUALIZADO,
  },

  /* ---------- etp-conflito ---------- */
  {
    temaId: 'etp-conflito',
    titulo: 'Conflito de interesses (Lei 12.813/2013)',
    resumo:
      'O Cebraspe cobra os conceitos (conflito e informação privilegiada), a regra de que o conflito independe de dano ou vantagem, as situações durante e após o exercício, a quarentena de 6 meses, a divisão CEP × CGU e as sanções.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'A Lei 12.813/2013 regula as situações de **conflito de interesses** no Poder Executivo federal, os impedimentos posteriores ao exercício do cargo e as competências de fiscalização (art. 1º).\n\n**Conflito de interesses** é a situação gerada pelo confronto entre interesses públicos e privados que possa comprometer o interesse coletivo ou influenciar, de maneira imprópria, o desempenho da função pública (art. 3º, I). **Informação privilegiada** é a que diz respeito a assunto sigiloso ou relevante ao processo de decisão no Executivo federal, com repercussão econômica ou financeira, e que não seja de amplo conhecimento público (art. 3º, II).\n\nO agente deve agir para prevenir ou impedir o conflito; na dúvida, consulta a **CEP** ou a **CGU** (art. 4º, § 1º). E o ponto mais cobrado: o conflito **independe de lesão ao patrimônio público e do recebimento de qualquer vantagem** pelo agente ou por terceiro (art. 4º, § 2º).',
      },
      {
        tipo: 'tabela',
        tabela: {
          colunas: ['Quem', 'A que regras se sujeita', 'Quem fiscaliza'],
          linhas: [
            ['Ministros; cargos de natureza especial; presidentes, vices e diretores de autarquias, fundações, empresas públicas e SEM; DAS 6 e 5 ou equivalentes (art. 2º, I a IV)', 'Toda a lei: arts. 5º e 6º (inclusive a quarentena), declaração anual, agenda pública diária', 'CEP (art. 8º, parágrafo único)'],
            ['Quem tem acesso a informação privilegiada, conforme regulamento (art. 2º, parágrafo único)', 'Arts. 5º e 6º (inclusive a quarentena) e declaração anual; a agenda diária é só dos incisos I a IV', 'CGU'],
            ['Demais agentes públicos do Executivo federal (art. 10)', 'Arts. 4º e 5º e inciso I do art. 6º', 'CGU'],
          ],
        },
      },
      {
        tipo: 'lista',
        itens: [
          '**Durante o exercício (art. 5º):** divulgar ou usar informação privilegiada (I); prestar serviço ou manter negócio com quem tenha interesse em decisão do agente ou de colegiado de que participe (II); exercer atividade incompatível com o cargo, inclusive em áreas correlatas (III); atuar, ainda que informalmente, como procurador, consultor, assessor ou intermediário de interesses privados na administração (IV); praticar ato em benefício de pessoa jurídica de que participem o agente, cônjuge, companheiro ou parentes até o 3º grau (V); receber presente de quem tenha interesse em decisão, fora dos limites do regulamento (VI); prestar serviço, ainda que eventual, a empresa controlada, fiscalizada ou regulada pelo ente a que se vincula (VII). Vale também em **licença ou afastamento**.',
          '**Após o exercício (art. 6º):** a **qualquer tempo**, divulgar ou usar informação privilegiada (I); nos **6 meses** contados da dispensa, exoneração, destituição, demissão ou aposentadoria, salvo autorização da CEP ou da CGU: prestar serviço a quem se relacionou com ele em razão do cargo, aceitar cargo de administrador ou conselheiro em entidade da área de competência, celebrar contratos de consultoria com órgãos a que estava vinculado ou intervir em favor de interesse privado perante eles (II).',
          '**Deveres (art. 9º e 11):** declaração anual à CEP ou à CGU (patrimônio, participações societárias, atividades e parentes até o 3º grau em atividades com potencial conflito); comunicar proposta de trabalho no setor privado; agentes do art. 2º, I a IV, divulgam a **agenda de compromissos públicos diariamente** na internet.',
          '**Sanções (art. 12):** improbidade administrativa (art. 11 da Lei 8.429/1992), quando não caracterizada conduta dos arts. 9º ou 10 daquela lei, e **demissão** (Lei 8.112, arts. 127, III, e 132) ou medida equivalente. A Lei 8.112 continua aplicável (art. 13).',
        ],
      },
      {
        tipo: 'exemplo',
        titulo: 'Perito médico e consultoria privada',
        enunciado:
          'Um perito médico federal, servidor efetivo sem cargo em comissão, é convidado a dar consultoria remunerada, nas horas vagas, a um escritório que representa segurados em pedidos de benefício por incapacidade, alguns dos quais passarão por perícia com ele. Há conflito de interesses?',
        resolucao:
          'Sim. O art. 10 estende o art. 5º a **todos** os agentes do Executivo federal, e prestar serviço a quem tem interesse em decisão do agente é conflito (art. 5º, II); a atividade também pode ser incompatível com o cargo (art. 5º, III). Não importa que não haja dano nem vantagem comprovada (art. 4º, § 2º). Na dúvida, ele consulta a **CGU**, competente por ele não estar no art. 2º, I a IV.',
      },
      {
        tipo: 'atencao',
        texto:
          'Conflito **não exige dano ao erário nem vantagem** (art. 4º, § 2º). A **quarentena de 6 meses** (art. 6º, II) alcança os agentes do art. 2º, mas a proibição de usar **informação privilegiada vale a qualquer tempo e para todo agente do Executivo federal** (art. 6º, I, c/c art. 10). O impedimento pode ser dispensado pela CEP ou pela CGU quando verificada a inexistência de conflito ou sua irrelevância (art. 8º, VI).',
      },
    ],
    fontes: [F_L12813],
    atualizadoEm: ATUALIZADO,
  },
];
