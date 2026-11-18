# Plano de Estudos Periodizado — 90 Dias (12 Semanas)

> Medicina do Trabalho · Médico Legista / Perito Médico-Legista · Concursos médicos municipais e estaduais do Sul (PR, SC, RS)
>
> Este documento é a versão legível do plano embarcado no app (`src/data/plano12Semanas.ts`). A seção "Detalhamento semana a semana" é **gerada automaticamente** a partir dos dados (`npm run docs:plano`), então o que está aqui é exatamente o que aparece no Cronograma.

---

## 1. Lógica da periodização

| Mesociclo | Semanas | Objetivo | Proporção típica (Trilha Híbrida) |
|---|---|---|---|
| **Mês 1 — Base Normativa e Conceitual** | 1–4 | Letra de lei (NRs 01, 04, 05, 06, 07, 09, 15, 16, 17, 32; Lei 8.213; CPP 158–184; CP 121–129; SUS) + traumatologia e tanatologia, a partir de um diagnóstico por questões | 55% teoria · 20% lei seca · 25% questões |
| **Mês 2 — Aprofundamento Técnico e Engenharia Reversa de Bancas** | 5–8 | Toxicologia e clínica ocupacional, asfixiologia, sexologia, antropologia, psicopatologia, ética pericial; baterias massivas filtradas por banca | 40% teoria · 15% lei seca · 45% questões |
| **Mês 3 — Reta Final e Performance** | 9–12 | Simulados cronometrados semanais, revisão espaçada intensiva (D1, D7, D15, D30), leitura rápida de tabelas, zeramento do caderno de erros | 10% teoria · 30% revisão · 60% questões/simulados |

**Por que três mesociclos?** Concurso médico cobra dois tipos de conhecimento: **literal** (norma, artigo, prazo, classificação de autor) e **aplicado** (caso clínico, laudo, nexo). O Mês 1 instala o literal, o Mês 2 aplica e calibra com o estilo das bancas, o Mês 3 converte em desempenho sob tempo.

---

## 2. As quatro trilhas

| Trilha | Para quem | O que entra |
|---|---|---|
| **Híbrida (Med. Trabalho + Legista)** | Quem quer as duas carreiras ou ainda não escolheu edital | Blocos dos eixos Trabalho e Legal + Tronco Comum |
| **Foco Exclusivo: Medicina do Trabalho** | Editais de Médico do Trabalho (EBSERH, TRTs, estatais, prefeituras) | Eixo Trabalho + aprofundamentos exclusivos + Tronco Comum |
| **Foco Exclusivo: Médico Legista** | Polícia Científica do PR, Polícia Científica de SC, IGP-RS, IMLs | Eixo Legal + aprofundamentos exclusivos + Tronco Comum |
| **Foco Edital Municipal / Clínico** | Médico clínico, ESF, plantonista de prefeituras e consórcios | Tronco Comum (SUS, ética, básicas) + Clínica Médica e Saúde Coletiva, incluindo temas recorrentes no Sul (zoonoses, peçonhentos/loxoscelismo, hanseníase) |

No app, a trilha é trocada a qualquer momento (Cronograma → seletor de foco). Ao usar **"Definir como Prova-Alvo"** no Radar, a trilha é ajustada automaticamente pela categoria do cargo (legista → Legista; trabalho → Trabalho; demais → Municipal), com opção de desfazer.

---

## 3. A semana do plano

Cada semana tem **7 dias contados a partir da data de início** (não precisa começar numa segunda-feira):

| Dia | Conteúdo |
|---|---|
| 1 a 5 | Blocos de teoria, lei seca/NR e questões da semana, distribuídos de forma equilibrada e na ordem pedagógica (teoria antes das questões do mesmo tema) |
| 6 | Bateria por banca, engenharia reversa ou **simulado** |
| 7 | Revisões espaçadas devidas (D1/D7/D15/D30) + caderno de erros — dia leve |

Todos os dias o app acrescenta as **revisões espaçadas que vencem hoje** e, se a carga do dia ficar abaixo do orçamento, uma **bateria adaptativa** de questões do seu pior tema (o mesmo do Radar de Pontos Fracos).

---

## 4. Perfis de carga diária

### 4.1 Dia Padrão — 3 h a 4 h líquidas

Orçamento configurável entre 180 e 240 minutos (padrão: 210).

| Ordem | Bloco | Tempo típico |
|---|---|---|
| 1 | Revisões espaçadas devidas (D1/D7/D15/D30) | 15–30 min |
| 2 | Teoria do eixo A | 60–90 min |
| 3 | Teoria do eixo B (ou Tronco) | 45–75 min |
| 4 | Lei seca / NR com checklist | 30–45 min |
| 5 | Questões do dia + registro de erros | 45–60 min |
| 6 | Redistribuídas de dias anteriores (se houver) | até 60 min |

### 4.2 Modo Plantão — 45 a 60 minutos

Ative no topo do dia, no Cronograma. A agenda é recalculada na hora:

1. **Revisões espaçadas devidas** (prioridade máxima — não deixam a curva de esquecimento vencer).
2. **Versões curtas** dos blocos de questões e de lei seca do dia (cada bloco do plano tem uma "alternativa de plantão" de 15–25 min).
3. Teto rígido de **60 minutos**.
4. Os blocos de teoria do dia **não somem**: vão para a fila de **redistribuição**.

### 4.3 Redistribuição automática

- Bloco de dia anterior não concluído entra em "Redistribuídas" no próximo Dia Padrão, do mais antigo para o mais recente.
- Teto de **+60 min/dia** de redistribuídas, para não estourar a rotina.
- Ao final de cada semana, o que sobrou continua na fila — nada é perdido, e o Dashboard mostra o saldo pendente.

### 4.4 Compressão por prova-alvo próxima

Se a prova-alvo cair **antes** de completar as 12 semanas:

- As **últimas 4 semanas antes da prova** sempre viram o Mês 3 (reta final).
- As semanas restantes recebem apenas os blocos marcados como **essenciais** das semanas 1–8, distribuídos proporcionalmente.
- Se faltar menos de 4 semanas, o app vai direto para a reta final.

---

## 5. Revisão espaçada (D1, D7, D15, D30)

| Gatilho | O que acontece |
|---|---|
| Concluir um bloco de **teoria** | Cria um item de revisão com vencimentos em +1, +7, +15 e +30 dias |
| Registrar uma **bateria de questões** com tema | Idem, para o tema da bateria |
| Lançar um erro no **Caderno de Erros** | Idem, para aquele erro |
| Revisar com desempenho **< 70%** ou marcar "difícil" | O ciclo **reinicia** a partir do dia da revisão (D1 de novo) |
| Concluir o D30 com bom desempenho | Item arquivado como dominado |

Como revisar em cada etapa: **D1** — reler o resumo/checklist e refazer 5 questões; **D7** — 10 questões sem consulta; **D15** — cheat sheet de memória e conferência; **D30** — 10 questões mistas da banca-alvo.

---

## 6. Metas de questões e simulados

| Semana | Meta mínima de questões | Simulado/bateria do dia 6 |
|---|---|---|
| 1 | 180 | Correção do diagnóstico |
| 2–3 | 200 | Bateria de 40 questões por banca |
| 4 | 220 | **Simulado 1** — 60 questões em 3 h |
| 5–7 | 240–250 | Engenharia reversa de bancas (50 questões) |
| 8 | 260 | **Simulado 2** — 80 questões em 4 h |
| 9–11 | 300–320 | **Simulados 3, 4 e 5** — prova completa cronometrada |
| 12 | 150 | Simulado curto ou descanso ativo |

**Taxa-alvo**: ≥ 70% por tema até o fim do Mês 2; ≥ 80% nos simulados do Mês 3. Abaixo de 70% com pelo menos 10 questões, o tema aparece no Radar de Pontos Fracos do Dashboard.

---

## 7. Caderno de erros

1. Registre **apenas erros que ensinam algo** (conceito, pegadinha recorrente, número esquecido). Chute certo também entra.
2. Campos: eixo, tema, banca, resumo do enunciado, **por que errei**, **regra correta**, fonte.
3. Cada erro ganha o ciclo D1/D7/D15/D30.
4. Zeramento: **25%** na Semana 9, **50%** na 10, **75%** na 11 e **100%** na 12.

---

## 8. Regras de ouro

- **Questão é a unidade de medida.** Teoria sem questão no mesmo dia vira esquecimento.
- **Lei seca com checklist**, nunca leitura passiva.
- **Não troque de material** no meio do caminho — troque de filtro de questões.
- **Plantão não quebra o plano**: o Modo Plantão existe para manter a ofensiva com 45–60 min.
- **Sono e prova**: os simulados do Mês 3 acontecem no horário real da prova-alvo.

---

## 9. Detalhamento semana a semana

<!-- PLANO:INICIO -->
Legenda das trilhas: **H** Híbrida · **T** Só Medicina do Trabalho · **L** Só Legista · **M** Municipal/Clínico. ★ = bloco essencial (mantido na compressão).

### Mês 1 — Base Normativa e Conceitual

_Construir a base de letra de lei (NRs 01, 04, 05, 06, 07, 09, 15, 16, 17, 32; Lei 8.213; CPP 158–184; CP 121–129; leis do SUS) e os fundamentos de traumatologia e tanatologia, partindo de um diagnóstico por questões._

#### Semana 1 — Diagnóstico, GRO/PGR, PCMSO e fundamentos periciais

**Objetivo:** Medir o ponto de partida e assentar os pilares: NR-01, NR-07 (exames e prazos), perícia e documentos médico-legais, cadeia de custódia e princípios do SUS.

**Bancas-foco:** Diagnóstico misto, FUNDATEC, FEPESE · **Meta de questões:** 180

**Carga planejada:** H 16h · T 13h45 · L 13h15 · M 12h45

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Diagnóstico inicial: 40 questões mistas sem consulta** | Tronco Comum | Diagnóstico | 120 | H T L M | Resolva 40 questões dos eixos da sua trilha (proporção da trilha), sem consulta e cronometrado. Registre cada disciplina separadamente na Central de Questões: é isso que acende os primeiros pontos fracos do Dashboard. |
| ★ **NR-01: GRO, PGR, inventário de riscos e plano de ação** | Medicina do Trabalho | Teoria | 90 | H T | Estrutura da NR-01: GRO como processo e PGR como documento (inventário + plano de ação); identificação de perigos, avaliação (severidade × probabilidade), hierarquia de controle (eliminação → substituição → EPC → administrativas → EPI); revisão a cada 2 anos (3 com certificação); tratamento diferenciado de MEI, ME e EPP. |
| ★ **NR-01: fatores de risco psicossociais e capacitações** | Medicina do Trabalho | Teoria | 45 | H T | Inclusão dos fatores psicossociais no GRO (Portaria MTE 1.419/2024, vigência 26/05/2026 pela Portaria 765/2025), integração com a NR-17; capacitação e treinamentos (Anexo II: EAD e semipresencial). |
| ★ **NR-07 (I): PCMSO, exames clínicos e prazos** | Medicina do Trabalho | Teoria | 90 | H T | Responsabilidades; PCMSO integrado ao PGR; admissional, periódico (anual para expostos, bienal para demais), retorno ao trabalho (afastamento ≥ 30 dias), mudança de risco e demissional (até 10 dias; dispensa se último exame < 135 dias em graus 1–2 ou < 90 dias em graus 3–4); conteúdo do ASO; relatório analítico. |
| ★ **Lei seca: NR-07 — exames, ASO e relatório analítico** | Medicina do Trabalho | Lei seca / NR | 45 | H T | Leitura ativa do texto oficial marcando no checklist do app cada item de prazo e conteúdo do ASO. |
| **Questões: NR-01 e NR-07 (30 questões)** | Medicina do Trabalho | Questões | 60 | H T | Filtro: Medicina do Trabalho / Segurança e Saúde no Trabalho → assuntos NR-01 e NR-07 → bancas do Sul → últimos 6 anos. Erros relevantes vão ao Caderno de Erros. |
| **Aprofundamento: PCMSO na prática** | Medicina do Trabalho | Teoria | 60 | T | Da linha do inventário de riscos ao exame complementar: monte o PCMSO de um hospital fictício (ruído na lavanderia, risco biológico, quimioterápicos) e defina periodicidade e ASO. |
| **Aprofundamento: leitura integral NR-01 (texto oficial)** | Medicina do Trabalho | Lei seca / NR | 60 | T | Leitura integral com marcação de prazos, exceções e termos-chave (perigo, risco, nível de risco, PGR). |
| ★ **Introdução à Medicina Legal: perícia e peritos** | Medicina Legal | Teoria | 60 | H L | Conceito e divisões da Medicina Legal; perito oficial × nomeado (CPP 159: dois portadores de diploma superior na falta de oficial); assistente técnico; quesitos; impedimentos. |
| ★ **Documentos médico-legais** | Medicina Legal | Teoria | 75 | H L | Notificação, atestado, relatório (laudo × auto), parecer e depoimento oral; partes do relatório (preâmbulo, quesitos, histórico, descrição — visum et repertum, discussão, conclusão, respostas aos quesitos); quesitos oficiais de lesão corporal. |
| ★ **CPP Arts. 158–161 e cadeia de custódia (158-A a 158-F)** | Medicina Legal | Teoria | 75 | H L | Exame de corpo de delito direto/indireto; confissão não supre; prioridades do parágrafo único do Art. 158; as 10 etapas da cadeia de custódia; vestígio; central de custódia; fraude processual; laudo em 10 dias. |
| ★ **Lei seca: CPP 158–184 (1ª leitura)** | Medicina Legal | Lei seca / NR | 45 | H L | Leitura integral dos Arts. 158 a 184 com marcação no checklist; atenção a prazos (6 h para autópsia, 10 dias para laudo, 30 dias para exame complementar). |
| **Questões: perícia, documentos e cadeia de custódia (30)** | Medicina Legal | Questões | 60 | H L | Filtro: Medicina Legal → Perícias e peritos, Documentos médico-legais + Direito Processual Penal → Prova pericial / cadeia de custódia. |
| **Aprofundamento: Lei 13.964/2019 e nulidades da prova pericial** | Medicina Legal | Teoria | 60 | L | Cadeia de custódia na prática do IML/IGP: lacres, rastreabilidade, central de custódia, consequências da quebra da cadeia na jurisprudência. |
| **Aprofundamento: laudo-modelo de lesão corporal** | Medicina Legal | Teoria | 45 | L | Redija um laudo curto (preâmbulo → respostas aos quesitos) de uma lesão contusa simples para fixar a estrutura. |
| ★ **CF/88 Arts. 196–200 e Lei 8.080 (princípios e diretrizes)** | Tronco Comum | Teoria | 75 | H T L M | Saúde como direito; relevância pública; diretrizes do Art. 198; complementaridade privada (199); competências do SUS (200, inclusive saúde do trabalhador e meio ambiente do trabalho); Lei 8.080 Arts. 2º a 7º e definição de saúde do trabalhador (Art. 6º §3º). |
| **Questões: SUS (CF + 8.080) e 10 de Português** | Tronco Comum | Questões | 60 | H T L M | 20 questões de SUS da banca-alvo + 10 de Português (concordância e regência). |
| ★ **Clínica: hipertensão arterial na APS** | Tronco Comum | Teoria | 75 | M | Diagnóstico (consultório, MAPA, MRPA), estratificação de risco, metas pressóricas, tratamento não farmacológico e escalonamento farmacológico conforme a diretriz brasileira vigente. |
| ★ **Clínica: diabetes tipo 2 na APS** | Tronco Comum | Teoria | 75 | M | Critérios diagnósticos, metas glicêmicas individualizadas, metformina e intensificação, insulinização basal, rastreamento de complicações (pé, retina, rim). |
| ★ **Clínica: dislipidemia e risco cardiovascular** | Tronco Comum | Teoria | 60 | M | Estratificação de risco, metas de LDL por risco, estatinas, prevenção primária × secundária. |
| ★ **Clínica: rastreamento e prevenção na APS** | Tronco Comum | Teoria | 60 | M | Rastreamentos recomendados pelo Ministério da Saúde (câncer de colo, mama, colorretal; HAS; DM), prevenção quaternária. |
| **Questões: clínica na APS (30)** | Tronco Comum | Questões | 60 | M | Filtro: Medicina/Clínica Médica → HAS, DM, dislipidemia → bancas do Sul → cargo Médico/Clínico Geral/ESF. |
| **Aprofundamento: 30 questões de NR-01 e NR-07 (bancas nacionais)** | Medicina do Trabalho | Questões | 60 | T | CEBRASPE, FGV, IBFC e AOCP: compare a cobrança com as bancas do Sul. |
| **Aprofundamento: 30 questões de perícias e documentos (bancas policiais)** | Medicina Legal | Questões | 60 | L | Perito Médico-Legista de Polícias Civis/Científicas. |
| ★ **Clínica: infecções de vias aéreas superiores e uso racional de antibióticos** | Tronco Comum | Teoria | 60 | M | Faringoamigdalite, rinossinusite, otite média: quando (e quando não) prescrever antibiótico. |
| ★ **Clínica: anemias na APS** | Tronco Comum | Teoria | 60 | M | Ferropriva, megaloblástica e de doença crônica: investigação inicial e reposição. |
| **Correção comentada do diagnóstico e abertura do Caderno de Erros** _(dia 6)_ | Tronco Comum | Caderno de erros | 60 | H T L M | Revise cada erro do diagnóstico, registre os relevantes no Caderno de Erros (o app agenda D1/D7/D15/D30) e confira os pontos fracos no Dashboard. |

#### Semana 2 — Anexos da NR-07, SESMT/CIPA e traumatologia mecânica

**Objetivo:** Fechar a NR-07 (anexos e IBE), dominar NR-04/05 e construir a base de traumatologia por energias mecânicas com a classificação de lesão corporal do CP 129.

**Bancas-foco:** FUNDATEC, FEPESE, Objetiva · **Meta de questões:** 200

**Carga planejada:** H 14h15 · T 12h · L 11h15 · M 10h

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **NR-07 Anexos I e II: indicadores biológicos e audiometria** | Medicina do Trabalho | Teoria | 90 | H T | Anexo I: IBE/EE (Quadro 1 — exposição, sem significado diagnóstico) × IBE/SC (Quadro 2 — efeito clínico), momentos de coleta (AJ, FJ, FJFS, NC). Anexo II: audiometria na admissão, 6 meses após, anual e na demissão; repouso auditivo de 14 h; interpretação de traçados. |
| ★ **NR-07 Anexos III, IV e V** | Medicina do Trabalho | Teoria | 45 | H T | Radiografia de tórax padrão OIT e espirometria para poeiras minerais; condições hiperbáricas; substâncias cancerígenas e radiações ionizantes. |
| ★ **NR-04 (SESMT) e NR-05 (CIPA)** | Medicina do Trabalho | Teoria | 90 | H T | SESMT: dimensionamento por grau de risco × número de empregados, composição, SESMT individual e compartilhado. CIPA "e de Assédio": composição, mandato de 1 ano com uma reeleição, garantia de emprego, atribuições, treinamento, nomeado. |
| ★ **Lei seca: NR-04 e NR-05** | Medicina do Trabalho | Lei seca / NR | 45 | H T | Quadros de dimensionamento e itens de mandato, eleição, estabilidade e treinamento. |
| **Questões: NR-04, NR-05 e NR-07 (30)** | Medicina do Trabalho | Questões | 60 | H T | Filtro por assunto NR-04/NR-05/NR-07; inclua questões de audiometria e IBE. |
| **Aprofundamento: audiometria ocupacional** | Medicina do Trabalho | Teoria | 60 | T | Limiares aceitáveis × sugestivos de PAIR, desencadeamento × agravamento, condutas e emissão de CAT; diagnóstico diferencial (presbiacusia, ototóxicos). |
| **Aprofundamento: 30 questões só de NR-07** | Medicina do Trabalho | Questões | 60 | T | Bateria concentrada em prazos, ASO e anexos — o tema mais cobrado da carreira. |
| ★ **Traumatologia I: instrumentos perfurantes, cortantes e contundentes** | Medicina Legal | Teoria | 90 | H L | Lesões punctórias (Leis de Filhos e de Langer), incisas (cauda de escoriação, ausência de pontes), contusas (escoriação, equimose, hematoma, ferida contusa com pontes de tecido), espectro equimótico de Legrand du Saulle. |
| ★ **Traumatologia II: perfurocortantes e cortocontundentes** | Medicina Legal | Teoria | 60 | H L | Ferida perfuroincisa (gume único × duplo), cortocontusa; lesões de defesa; esgorjamento × degolamento × decapitação; elementos de suicídio × homicídio por arma branca. |
| ★ **CP Art. 129 e CPP Art. 168: classificação da lesão corporal** | Medicina Legal | Teoria | 60 | H L | Leve, grave (> 30 dias, perigo de vida, debilidade permanente, aceleração de parto), gravíssima (incapacidade permanente, enfermidade incurável, perda/inutilização, deformidade permanente, aborto), seguida de morte; exame complementar após 30 dias. |
| ★ **Lei seca: CP 129 e CPP 168** | Medicina Legal | Lei seca / NR | 30 | H L | Leitura do Art. 129 completo (incluindo §§ 9º a 13) e do Art. 168 do CPP. |
| **Questões: traumatologia mecânica e lesão corporal (30)** | Medicina Legal | Questões | 60 | H L | Filtro: Medicina Legal → Traumatologia Forense + Direito Penal → Lesão corporal. |
| **Aprofundamento: atlas (Hércules) de lesões mecânicas** | Medicina Legal | Revisão | 45 | L | Reconhecimento visual: escoriação × equimose × ferida contusa × incisa × perfuroincisa. Descreva 5 imagens em linguagem de laudo. |
| **Aprofundamento: 30 questões de traumatologia (banca policial)** | Medicina Legal | Questões | 60 | L | Bancas de carreiras policiais (CEBRASPE, FGV, VUNESP, IBFC, AOCP). |
| ★ **Lei 8.080 (competências e financiamento) e Lei 8.142** | Tronco Comum | Teoria | 75 | H T L M | Competências da União, estados e municípios; CONITEC; Fundo de Saúde; Conferência (a cada 4 anos) e Conselho de Saúde (paritário: usuários 50%); requisitos para transferências. |
| **Questões: SUS e Raciocínio Lógico** | Tronco Comum | Questões | 60 | H T L M | 20 de SUS + 10 de RLM (proposições e equivalências). |
| ★ **Clínica: asma e DPOC** | Tronco Comum | Teoria | 75 | M | Diagnóstico espirométrico, classificação de controle, tratamento de manutenção e da exacerbação, indicações de oxigenoterapia. |
| ★ **Clínica: tuberculose** | Tronco Comum | Teoria | 75 | M | Busca ativa de sintomático respiratório, TRM-TB, esquema básico (RIPE), controle de contatos, ILTB, notificação e TDO. |
| ★ **Clínica: pneumonia adquirida na comunidade** | Tronco Comum | Teoria | 45 | M | CURB-65/CRB-65, local de tratamento e antibioticoterapia empírica. |
| **Questões: respiratória e TB (30)** | Tronco Comum | Questões | 60 | M | Bancas do Sul, cargo Médico/ESF. |
| **Aprofundamento: leitura integral NR-04 e NR-05** | Medicina do Trabalho | Lei seca / NR | 45 | T | Texto oficial com os quadros de dimensionamento. |
| **Aprofundamento: leitura dirigida (França) — traumatologia mecânica** | Medicina Legal | Teoria | 45 | L | Capítulo de energias de ordem mecânica: classificações e sinais epônimos literais. |
| ★ **Clínica: hanseníase** | Tronco Comum | Teoria | 75 | M | Classificação operacional (paucibacilar × multibacilar), diagnóstico clínico, PQT-U, reações hansênicas, avaliação de contatos. |
| ★ **Clínica: dermatoses comuns na APS** | Tronco Comum | Teoria | 45 | M | Escabiose, pediculose, micoses superficiais, piodermites. |
| **Bateria da semana por banca do Sul (40 questões)** _(dia 6)_ | Tronco Comum | Questões | 90 | H T L M | Mistura dos temas da semana da sua trilha, filtrando FUNDATEC, FEPESE e Objetiva. Cronometre 2 min por questão. |

#### Semana 3 — Insalubridade, periculosidade, EPI e projéteis de arma de fogo

**Objetivo:** Dominar NR-15 (anexos e percentuais), NR-16 e NR-06; dominar orifícios de PAF, distância de tiro e energias físicas/químicas; SUS organizativo (7.508 e PNAB).

**Bancas-foco:** FUNDATEC, IBFC, Instituto AOCP · **Meta de questões:** 200

**Carga planejada:** H 14h · T 11h · L 11h · M 10h

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **NR-15: estrutura, graus e ruído (Anexos 1 e 2)** | Medicina do Trabalho | Teoria | 90 | H T | Graus mínimo/médio/máximo (10/20/40%); Anexo 1: 85 dB(A)/8 h, q = 5, máximo de 115 dB(A); Anexo 2: impacto 130 dB linear ou 120 dB(C); risco grave e iminente. |
| ★ **NR-15: demais anexos** | Medicina do Trabalho | Teoria | 75 | H T | Calor (IBUTG), radiações, hiperbaria, frio, umidade, químicos quantitativos (11) × qualitativos (13), poeiras (12), benzeno (13-A), biológicos (14); Anexo 4 revogado. |
| ★ **NR-16, NR-06 e CLT 189–197** | Medicina do Trabalho | Teoria | 60 | H T | Periculosidade 30% (explosivos, inflamáveis, eletricidade, segurança pessoal/patrimonial, motocicleta, radiações); não cumulatividade; EPI e CA; obrigações do empregador e do empregado; perícia (CLT 195). |
| ★ **Lei seca: quadro de ruído da NR-15 e CLT 189–197** | Medicina do Trabalho | Lei seca / NR | 45 | H T | Decore a tabela de tempos máximos de exposição e os artigos da CLT sobre insalubridade/periculosidade. |
| **Questões: NR-06, NR-15 e NR-16 (30)** | Medicina do Trabalho | Questões | 60 | H T | Atenção a percentuais, base de cálculo e não cumulatividade. |
| **Aprofundamento: caracterização pericial de insalubridade** | Medicina do Trabalho | Teoria | 60 | T | Laudo de insalubridade/periculosidade, NHO-01 (ruído) e NHO-06 (calor) da Fundacentro, neutralização por EPI (Súmula 80 e 289 do TST). |
| ★ **PAF I: orifício de entrada, saída e trajeto** | Medicina Legal | Teoria | 90 | H L | Orla de escoriação/contusão e de enxugo; zonas de tatuagem (grãos incrustados — não sai com lavagem), esfumaçamento (fuligem — sai) e chamuscamento; orifício de saída (maior, irregular, bordas evertidas, sem orlas). |
| ★ **PAF II: distância do disparo e sinais epônimos** | Medicina Legal | Teoria | 60 | H L | Encostado (câmara de mina de Hoffmann, sinal de Werkgaertner, sinal de Benassi), curta distância (efeitos secundários do tiro) e longa distância; funil de Bonnet no osso; projéteis múltiplos (rosa de tiro). |
| ★ **Energias físicas e químicas** | Medicina Legal | Teoria | 60 | H L | Queimaduras (1º a 4º grau, flictena vital), carbonização (atitude de pugilista); eletroplessão (marca de Jellinek) × fulguração (Lichtenberg) × fulminação; baropatias; cáusticos coagulantes × liquefacientes; vitriolagem. |
| ★ **Lei seca: CPP 169–175** | Medicina Legal | Lei seca / NR | 30 | H L | Exame do local, perícias de laboratório (guardar material para contraprova), instrumentos do crime. |
| **Questões: PAF e energias (30)** | Medicina Legal | Questões | 60 | H L | Filtro: Traumatologia Forense → armas de fogo, energias físicas e químicas. |
| **Aprofundamento: atlas de PAF e casos de distância de tiro** | Medicina Legal | Revisão | 45 | L | Classifique 6 imagens de orifícios (entrada/saída; encostado/curta/longa distância) e justifique. |
| **Aprofundamento: 30 questões de PAF (bancas policiais)** | Medicina Legal | Questões | 60 | L | PAF é o tema campeão de Médico Legista; faça até zerar os erros de sinais epônimos. |
| ★ **Decreto 7.508/11 e PNAB** | Tronco Comum | Teoria | 60 | H T L M | Região de Saúde (serviços mínimos), Portas de Entrada, CIT/CIB/CIR, COAP, RENASES, RENAME, Mapa da Saúde; PNAB: ESF, composição de equipes, população adscrita (2.000–3.500), atribuições. |
| **Questões: Decreto 7.508, PNAB e Português** | Tronco Comum | Questões | 60 | H T L M | 20 de SUS organizativo + 10 de Português (crase e pontuação). |
| ★ **Clínica: urgência — PCR, choque e sepse** | Tronco Comum | Teoria | 75 | M | BLS/ACLS (ritmos chocáveis × não chocáveis, drogas), reconhecimento e manejo inicial de choque e sepse. |
| ★ **Clínica: síndrome coronariana aguda e AVC** | Tronco Comum | Teoria | 75 | M | ECG na dor torácica, conduta inicial, trombólise (janelas) e transferência; AVC: reconhecimento e janela terapêutica. |
| ★ **Clínica: insuficiência cardíaca e fibrilação atrial na APS** | Tronco Comum | Teoria | 45 | M | Classificação, terapia que modifica prognóstico, anticoagulação (CHA2DS2-VASc). |
| **Questões: urgência e cardiologia (30)** | Tronco Comum | Questões | 60 | M | Bancas do Sul e IBFC/AOCP. |
| **Aprofundamento: 30 questões de NR-15/NR-16 (incluindo dose de ruído)** | Medicina do Trabalho | Questões | 60 | T | Calcule tempos de exposição pela tabela do Anexo 1. |
| **Aprofundamento: leitura dirigida (França) — energias físicas e químicas** | Medicina Legal | Teoria | 45 | L | Temperatura, eletricidade, pressão e cáusticos: classificações literais. |
| ★ **Clínica: zoonoses do Sul — raiva, leptospirose e hantavirose** | Tronco Comum | Teoria | 75 | M | Profilaxia pós-exposição da raiva (tipo de exposição × animal), leptospirose (pós-enchentes, doxiciclina, notificação), hantavirose (quadro cardiopulmonar). |
| ★ **Clínica: acidentes por animais peçonhentos** | Tronco Comum | Teoria | 60 | M | Loxoscelismo (aranha-marrom, forma cutânea × cutâneo-visceral), ofidismo (botrópico, crotálico, elapídico — soroterapia), escorpionismo. |
| **Bateria da semana — banca nacional (40 questões)** _(dia 6)_ | Tronco Comum | Questões | 90 | H T L M | Temas da semana da sua trilha filtrando IBFC e Instituto AOCP. |

#### Semana 4 — Ergonomia, NR-32, acidente do trabalho, tanatologia e Simulado 1

**Objetivo:** Completar as NRs do mês (17, 09, 32), dominar Lei 8.213 Arts. 19–23 e a tanatologia, revisar ética médica e fechar o mesociclo com o Simulado 1.

**Bancas-foco:** FUNDATEC, FEPESE, CEBRASPE · **Meta de questões:** 220

**Carga planejada:** H 15h15 · T 12h15 · L 11h30 · M 10h

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **NR-17 e NR-09** | Medicina do Trabalho | Teoria | 75 | H T | NR-17: AEP × AET (quando a AET é obrigatória), organização do trabalho, Anexos I (checkout) e II (teleatendimento). NR-09: avaliação e controle de agentes físicos, químicos e biológicos; relação com o PGR; nível de ação. |
| ★ **NR-32: segurança em serviços de saúde** | Medicina do Trabalho | Teoria | 75 | H T | Risco biológico, vacinação gratuita (tétano, difteria, hepatite B + PCMSO), proibição de reencape/desconexão manual de agulhas, adornos, calçados abertos, alimentos; perfurocortantes; quimioterápicos; radiação ionizante (gestante afastada); resíduos. |
| ★ **Lei 8.213 Arts. 19–23: acidente do trabalho** | Medicina do Trabalho | Teoria | 75 | H T | Acidente típico; doença profissional × do trabalho e exclusões (§1º do Art. 20); equiparados (Art. 21, inclusive trajeto); NTEP (21-A); CAT (prazo e quem pode emitir); data da doença (Art. 23). |
| ★ **Lei seca: Lei 8.213 Arts. 19–23 e NR-32 (vacinas e perfurocortantes)** | Medicina do Trabalho | Lei seca / NR | 45 | H T | Marque no checklist: emitentes da CAT, prazos, exclusões do conceito de doença do trabalho. |
| **Questões: NR-17, NR-32 e Lei 8.213 (30)** | Medicina do Trabalho | Questões | 60 | H T | NR-32 e acidente do trabalho são recorrentes em editais de hospitais e prefeituras. |
| **Aprofundamento: benefícios previdenciários acidentários** | Medicina do Trabalho | Teoria | 60 | T | B31 × B91, B94 (auxílio-acidente), garantia de 12 meses (Art. 118), carência dispensada, reabilitação profissional. |
| ★ **Tanatologia I: diagnóstico de morte e fenômenos abióticos** | Medicina Legal | Teoria | 90 | H L | Sinais imediatos; consecutivos: desidratação (Sommer-Larcher), resfriamento, livores (aparecimento e fixação), rigidez (Lei de Nysten) e espasmo cadavérico. |
| ★ **Tanatologia II: fenômenos transformativos e cronotanatognose** | Medicina Legal | Teoria | 75 | H L | Autólise; putrefação (coloração — mancha verde abdominal; gasoso — circulação póstuma de Brouardel; coliquativo; esqueletização); maceração; mumificação, saponificação, corificação; estimativa do intervalo post mortem; Declaração de Óbito em morte violenta (Res. CFM 1.779/2005). |
| ★ **CP Arts. 121–128 e CPP 162–167** | Medicina Legal | Teoria | 45 | H L | Homicídio (formas), feminicídio (Art. 121-A), induzimento ao suicídio/automutilação, infanticídio, aborto; autópsia após 6 h, exame externo em morte violenta, exumação, fotografia do cadáver. |
| ★ **Lei seca: CP 121–128** | Medicina Legal | Lei seca / NR | 30 | H L | Leitura com atenção a qualificadoras e às hipóteses de aborto legal. |
| **Questões: tanatologia e crimes contra a vida (30)** | Medicina Legal | Questões | 60 | H L | Filtro: Tanatologia Forense + Direito Penal → crimes contra a vida. |
| **Aprofundamento: cronotanatognose aplicada** | Medicina Legal | Revisão | 45 | L | Resolva 5 casos estimando o intervalo post mortem a partir de livores, rigidez, temperatura e putrefação, citando a faixa do autor. |
| ★ **Ética médica e documentos** | Tronco Comum | Teoria | 60 | H T L M | CEM: princípios, sigilo (Arts. 73–79), perícia (Arts. 92–98); Res. CFM 2.381/2024 (tipos de documentos e requisitos); Res. CFM 1.779/2005 (DO). |
| **Questões: ética e Direito Administrativo** | Tronco Comum | Questões | 45 | H T L M | 15 de ética + 10 de Direito Administrativo (princípios e atos). |
| ★ **Clínica: saúde da mulher** | Tronco Comum | Teoria | 75 | M | Pré-natal de baixo risco (consultas, exames por trimestre, suplementação), rastreamento de câncer de colo e de mama. |
| ★ **Clínica: saúde da criança** | Tronco Comum | Teoria | 75 | M | Puericultura, marcos do desenvolvimento, calendário vacinal do PNI, IRA e doença diarreica (planos A, B, C). |
| **Questões: saúde da mulher e da criança (30)** | Tronco Comum | Questões | 60 | M | Bancas do Sul. |
| **Aprofundamento: leitura integral da NR-32** | Medicina do Trabalho | Lei seca / NR | 60 | T | Texto oficial, incluindo o anexo de perfurocortantes. |
| **Aprofundamento: 30 questões de tanatologia (bancas policiais)** | Medicina Legal | Questões | 60 | L | Fenômenos cadavéricos e cronotanatognose. |
| ★ **Clínica: planejamento reprodutivo e climatério** | Tronco Comum | Teoria | 60 | M | Métodos contraceptivos (critérios de elegibilidade), DIU, contracepção de emergência; climatério e terapia hormonal. |
| ★ **Clínica: adolescência e violência** | Tronco Comum | Teoria | 45 | M | ECA, notificação de violência interpessoal/autoprovocada, sinais de alerta de abuso. |
| ★ **SIMULADO 1 (fim do Mês 1): 60 questões em 3 h** _(dia 6)_ | Tronco Comum | Simulado | 180 | H T L M | Monte o simulado no banco de questões com a proporção da sua trilha e a banca-alvo. Tempo real, sem consulta, sem pausa. Registre como "simulado" na Central de Questões. |

### Mês 2 — Aprofundamento Técnico e Engenharia Reversa de Bancas

_Dominar a clínica e a toxicologia ocupacional, a asfixiologia, a sexologia, a antropologia e a psicopatologia forense, a ética pericial e o estilo de cada banca por baterias massivas filtradas._

#### Semana 5 — NTEP, LDRT, CLT e asfixiologia

**Objetivo:** Fechar a legislação previdenciária/trabalhista (Decreto 3.048, NTEP, LDRT, CLT 154–201), dominar as asfixias e a vigilância em saúde do trabalhador; engenharia reversa de FUNDATEC e FEPESE.

**Bancas-foco:** FUNDATEC, FEPESE · **Meta de questões:** 240

**Carga planejada:** H 12h45 · T 11h30 · L 10h15 · M 9h

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Decreto 3.048: Anexo II, NTEP e FAP** | Medicina do Trabalho | Teoria | 75 | H T | Listas A (agentes × doenças), B (doenças × agentes) e C (CNAE × CID do NTEP); Art. 337; FAP (0,5 a 2,0) sobre o RAT (1, 2 ou 3%); contestação do NTEP pela empresa. |
| ★ **LDRT — Portaria GM/MS 1.999/2023** | Medicina do Trabalho | Teoria | 45 | H T | Estrutura da lista, agravos incluídos (transtornos mentais, Burnout), uso na vigilância e na emissão de CAT. |
| ★ **CLT Arts. 154–201** | Medicina do Trabalho | Teoria | 60 | H T | Deveres da empresa e do empregado (Arts. 157–158), embargo/interdição (161), SESMT/CIPA (162–165), EPI (166–167), exames médicos (168), notificação (169), insalubridade/periculosidade (189–197), peso (198), NRs (200). |
| ★ **Lei seca: CLT 154–201** | Medicina do Trabalho | Lei seca / NR | 45 | H T | Leitura integral com marcação no checklist. |
| **Questões: legislação previdenciária e trabalhista — FUNDATEC/FEPESE (40)** | Medicina do Trabalho | Questões | 75 | H T | Analise o padrão: como cada banca cobra NTEP, CAT e insalubridade. |
| **Aprofundamento: estabelecimento de nexo causal** | Medicina do Trabalho | Teoria | 60 | T | Classificação de Schilling (I, II, III), critérios de Bradford Hill, Res. CFM 2.183/2018 (o que o médico deve considerar para o nexo). |
| **Aprofundamento: 30 questões de Decreto 3.048 e LDRT** | Medicina do Trabalho | Questões | 60 | T | Foco em listas do Anexo II e NTEP. |
| ★ **Asfixiologia I: classificação e constrição do pescoço** | Medicina Legal | Teoria | 90 | H L | Sinais gerais (cianose, petéquias de Tardieu, congestão); enforcamento (sulco oblíquo, descontínuo, sinal de Amussat) × estrangulamento (sulco horizontal, contínuo) × esganadura (estigmas ungueais; sempre homicida). |
| ★ **Asfixiologia II: afogamento, sufocação e gases** | Medicina Legal | Teoria | 60 | H L | Afogamento (cogumelo de espuma, manchas de Paltauf, diatomáceas; azul × branco), sufocação direta e indireta (máscara de Morestin), soterramento, confinamento, CO. |
| ★ **Lei seca: CPP 176–184** | Medicina Legal | Lei seca / NR | 30 | H L | Quesitos, precatória, divergência entre peritos, juiz não adstrito ao laudo (Art. 182). |
| **Questões: asfixias (30)** | Medicina Legal | Questões | 60 | H L | Filtro: Asfixiologia Forense — inclua FUNDATEC e FEPESE se houver. |
| **Aprofundamento: suicídio × homicídio × acidente nas asfixias** | Medicina Legal | Revisão | 45 | L | Monte uma tabela de elementos de diferenciação (local, nó, lesões de defesa, intoxicações associadas). |
| **Aprofundamento: 30 questões de asfixias (bancas policiais)** | Medicina Legal | Questões | 60 | L | Até zerar erros de sinais epônimos. |
| ★ **RENAST, CEREST, PNSTT e notificação** | Tronco Comum | Teoria | 60 | H T L M | RENAST (Portaria 1.679/2002) e CEREST; Política Nacional de Saúde do Trabalhador e da Trabalhadora (Portaria 1.823/2012); notificação de acidentes e doenças relacionadas ao trabalho no SINAN. |
| **Questões: saúde do trabalhador no SUS e Português** | Tronco Comum | Questões | 45 | H T L M | 15 de RENAST/vigilância + 10 de Português. |
| ★ **Clínica: HIV e sífilis** | Tronco Comum | Teoria | 75 | M | Diagnóstico (testes rápidos), TARV inicial, PEP e PrEP; sífilis adquirida, gestacional e congênita (tratamento e seguimento). |
| ★ **Clínica: arboviroses e hepatites virais** | Tronco Comum | Teoria | 75 | M | Dengue (classificação de risco e manejo por grupos A–D), chikungunya, zika; hepatites B e C (rastreamento, marcadores, encaminhamento). |
| **Questões: infectologia — FUNDATEC/FEPESE (30)** | Tronco Comum | Questões | 60 | M | Cargo Médico/ESF. |
| **Aprofundamento: fluxos de CAT e notificação no SINAN** | Medicina do Trabalho | Teoria | 45 | T | Quem emite, prazos, CAT de reabertura e de óbito; ficha SINAN de acidente de trabalho e de exposição a material biológico. |
| **Aprofundamento: leitura dirigida (França) — asfixiologia** | Medicina Legal | Teoria | 45 | L | Classificação e sinais epônimos literais. |
| ★ **Clínica: influenza, COVID-19 e meningites** | Tronco Comum | Teoria | 60 | M | Síndrome gripal × SRAG, oseltamivir (indicações), meningites (quimioprofilaxia de contatos). |
| ★ **Clínica: vacinação do adulto e do profissional de saúde** | Tronco Comum | Teoria | 45 | M | Calendário do adulto, hepatite B (anti-HBs), dT/dTpa, influenza. |
| **Engenharia reversa: 50 questões FUNDATEC + FEPESE** _(dia 6)_ | Tronco Comum | Questões | 120 | H T L M | Resolva e classifique cada questão: literal × aplicada, assunto, pegadinha. Anote os 5 padrões mais frequentes no campo de notas deste bloco. |

#### Semana 6 — Toxicologia ocupacional e sexologia forense

**Objetivo:** Dominar metais, solventes, agrotóxicos e IBE; dominar sexologia forense (crimes sexuais, himenologia, gravidez, aborto, infanticídio); engenharia reversa das bancas regionais.

**Bancas-foco:** Objetiva, FURB, NC-UFPR, FAUEL · **Meta de questões:** 240

**Carga planejada:** H 12h45 · T 11h · L 10h · M 8h45

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Toxicologia I: metais** | Medicina do Trabalho | Teoria | 75 | H T | Chumbo (saturnismo: ALA-U, protoporfirina-zinco, orla de Burton, punho caído; Pb-S 60 µg/100 mL), mercúrio (tremor, eretismo; Hg-U 20 µg/g creat. AJ), cádmio, cromo hexavalente, manganês (parkinsonismo). |
| ★ **Toxicologia II: solventes** | Medicina do Trabalho | Teoria | 75 | H T | Benzeno (mielotoxicidade, LMA, Anexo 13-A; S-PMA e TTMA), tolueno (SNC, ototoxicidade), xileno (ácido metil-hipúrico), n-hexano (neuropatia; 2,5-hexanodiona), metanol. |
| ★ **Toxicologia III: agrotóxicos e gases** | Medicina do Trabalho | Teoria | 60 | H T | Organofosforados (inibição irreversível da colinesterase, atropina + oxima) × carbamatos (reversível); piretroides; paraquat; glifosato; CO (carboxi-hemoglobina, O2 hiperbárico); cianeto. |
| ★ **Tabela: Quadros 1 e 2 do Anexo I da NR-07** | Medicina do Trabalho | Lei seca / NR | 45 | H T | Decore substância → indicador → momento de coleta → valor dos principais agentes (cheat sheet "Indicadores Biológicos"). |
| **Questões: toxicologia ocupacional (30)** | Medicina do Trabalho | Questões | 60 | H T | Bancas regionais do Sul (Objetiva, FURB, NC-UFPR, FAUEL) + nacionais. |
| **Aprofundamento: protocolos MS de benzeno e agrotóxicos** | Medicina do Trabalho | Teoria | 60 | T | Vigilância de expostos ao benzeno (hemograma seriado, afastamento) e atenção à intoxicação por agrotóxicos. |
| ★ **Sexologia I: crimes sexuais e himenologia** | Medicina Legal | Teoria | 75 | H L | CP 213 (estupro), 215, 217-A (vulnerável); conjunção carnal × ato libidinoso; tipos de hímen, hímen complacente, rotura × entalhe; exame e coleta de vestígios. |
| ★ **Sexologia II: gravidez, parto, aborto e infanticídio** | Medicina Legal | Teoria | 60 | H L | Sinais de gravidez e de parto recente; aborto (CP 124–128, ADPF 54); infanticídio (CP 123 — estado puerperal) e docimásia hidrostática de Galeno. |
| ★ **Lei seca: CP 213–217-A e 123–128** | Medicina Legal | Lei seca / NR | 30 | H L | Atenção aos elementos de cada tipo penal. |
| **Questões: sexologia forense (30)** | Medicina Legal | Questões | 60 | H L | Filtro: Sexologia Forense + Direito Penal → crimes contra a dignidade sexual. |
| **Aprofundamento: perícia em violência sexual** | Medicina Legal | Teoria | 45 | L | Lei 12.845/2013 (atendimento obrigatório e integral pelo SUS) e Decreto 7.958/2013 (registro de informações e coleta de vestígios na rede SUS). |
| **Aprofundamento: 30 questões de sexologia e aborto** | Medicina Legal | Questões | 60 | L | Bancas policiais. |
| ★ **Básicas: Raciocínio Lógico e Informática** | Tronco Comum | Teoria | 60 | H T L M | Porcentagem, regra de três, proposições e equivalências; segurança da informação (phishing, malware, backup). |
| **Questões: Direito Constitucional e Administrativo** | Tronco Comum | Questões | 45 | H T L M | Agentes públicos, servidores, princípios da administração. |
| ★ **Clínica: saúde mental na APS** | Tronco Comum | Teoria | 75 | M | Depressão e ansiedade (diagnóstico e tratamento inicial), avaliação de risco de suicídio, álcool e outras drogas, uso racional de psicofármacos, RAPS. |
| ★ **Clínica: saúde do idoso** | Tronco Comum | Teoria | 60 | M | Polifarmácia (critérios de Beers), quedas, demência, avaliação multidimensional. |
| **Questões: saúde mental e idoso — Objetiva/FURB/NC-UFPR (30)** | Tronco Comum | Questões | 60 | M | Bancas regionais. |
| **Aprofundamento: 30 questões de toxicologia e IBE** | Medicina do Trabalho | Questões | 60 | T | Foco em substância → indicador → momento de coleta. |
| **Aprofundamento: infanticídio e docimásias** | Medicina Legal | Teoria | 45 | L | Estado puerperal, prova de vida extrauterina, docimásia hidrostática de Galeno e suas fases. |
| ★ **Clínica: cefaleia, tontura e epilepsia na APS** | Tronco Comum | Teoria | 60 | M | Sinais de alarme da cefaleia, enxaqueca × tensional, vertigem periférica × central, manejo inicial da epilepsia. |
| ★ **Clínica: cuidados paliativos e atenção domiciliar** | Tronco Comum | Teoria | 45 | M | Controle de sintomas, escada analgésica, comunicação de más notícias. |
| **Engenharia reversa: 50 questões Objetiva, FURB, NC-UFPR e FAUEL** _(dia 6)_ | Tronco Comum | Questões | 120 | H T L M | Mesma análise de padrões da semana anterior; compare com FUNDATEC/FEPESE. |

#### Semana 7 — Doenças ocupacionais, antropologia e psicopatologia forense

**Objetivo:** Consolidar a clínica ocupacional (pneumoconioses, PAIR, LER/DORT, dermatoses, câncer, Burnout) e fechar antropologia, psicopatologia e toxicologia forense; treinar o estilo CEBRASPE/FGV.

**Bancas-foco:** CEBRASPE, FGV · **Meta de questões:** 250

**Carga planejada:** H 12h45 · T 10h45 · L 10h15 · M 9h

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Pneumoconioses** | Medicina do Trabalho | Teoria | 75 | H T | Silicose (formas, casca de ovo, tuberculose), asbestose (placas pleurais, mesotelioma), PTC, síndrome de Caplan, beriliose; classificação radiológica da OIT; Anexo III da NR-07. |
| ★ **PAIR e LER/DORT** | Medicina do Trabalho | Teoria | 75 | H T | PAIR: características audiométricas e diagnóstico diferencial. LER/DORT: De Quervain, epicondilites, túnel do carpo, manguito rotador, dedo em gatilho; testes clínicos; conduta e retorno ao trabalho. |
| ★ **Dermatoses, câncer ocupacional e saúde mental** | Medicina do Trabalho | Teoria | 60 | H T | Dermatite de contato irritativa × alérgica (cimento/cromo, níquel, borracha), elaioconiose, cloracne; carcinógenos ocupacionais; Burnout (CID-11 QD85) e outros transtornos mentais relacionados ao trabalho. |
| ★ **Leitura dirigida: critérios dos protocolos do Ministério da Saúde** | Medicina do Trabalho | Lei seca / NR | 30 | H T | Releia apenas os critérios diagnósticos e de nexo de PAIR, LER/DORT e pneumoconioses. |
| **Questões: clínica ocupacional — estilo CEBRASPE (30)** | Medicina do Trabalho | Questões | 60 | H T | Certo/Errado: marque só com convicção; anote as generalizações que derrubaram você. |
| **Aprofundamento: Protocolos de Complexidade Diferenciada (MS)** | Medicina do Trabalho | Teoria | 60 | T | LER/DORT, PAIR, pneumoconioses e dermatoses: fluxos de diagnóstico, notificação e afastamento. |
| ★ **Antropologia forense** | Medicina Legal | Teoria | 75 | H L | Identidade × identificação; médico-legal (espécie, sexo, idade, estatura, sinais individuais, odontolegal, DNA) × judiciária (datiloscopia — Vucetich); requisitos de um bom método. |
| ★ **Psicopatologia forense** | Medicina Legal | Teoria | 60 | H L | CP 26 (critério biopsicológico), semi-imputabilidade, CP 27 e 28 (emoção, paixão, embriaguez), medida de segurança, incidente de insanidade (CPP 149–154), capacidade civil. |
| ★ **Toxicologia forense: embriaguez e drogas de abuso** | Medicina Legal | Teoria | 45 | H L | Fases da embriaguez alcoólica, alcoolemia e exame clínico; CTB Arts. 165 e 306; principais drogas de abuso. |
| **Questões: antropologia, psicopatologia e embriaguez — FGV/CEBRASPE (30)** | Medicina Legal | Questões | 60 | H L | Treine leitura de enunciado longo (FGV) e Certo/Errado (CEBRASPE). |
| **Aprofundamento: identificação em cadáveres desconhecidos e desastres** | Medicina Legal | Revisão | 45 | L | Fluxo de identificação (datiloscopia → odontologia → DNA), estimativa de sexo/idade pelo esqueleto. |
| **Aprofundamento: 30 questões de psicopatologia forense** | Medicina Legal | Questões | 60 | L | CP 26–28 em letra de lei e casos. |
| **Revisão do SUS por questões — CEBRASPE e FGV** | Tronco Comum | Questões | 60 | H T L M | 30 questões cobrindo CF, 8.080, 8.142, 7.508 e PNAB. |
| **Português: interpretação de texto (FGV)** | Tronco Comum | Questões | 45 | H T L M | 10 questões de interpretação com textos longos. |
| ★ **Clínica: nefro e gastro na APS** | Tronco Comum | Teoria | 75 | M | DRC (estadiamento por TFG e albuminúria, nefroproteção), ITU, DRGE, dispepsia e H. pylori, esteatose hepática. |
| ★ **Clínica: rastreamento revisitado e prevenção quaternária** | Tronco Comum | Teoria | 60 | M | Critérios para rastrear, sobrediagnóstico, exames desnecessários. |
| **Questões: clínica — CEBRASPE/FGV (30)** | Tronco Comum | Questões | 60 | M | Casos clínicos longos. |
| **Aprofundamento: 30 questões de clínica ocupacional** | Medicina do Trabalho | Questões | 60 | T | Pneumoconioses, PAIR, LER/DORT e dermatoses. |
| **Aprofundamento: 20 questões de antropologia forense** | Medicina Legal | Questões | 45 | L | Métodos de identificação e estimativas antropológicas. |
| ★ **Clínica: urgências na APS** | Tronco Comum | Teoria | 60 | M | Anafilaxia (adrenalina IM), crise hipertensiva, hipoglicemia, intoxicações exógenas. |
| ★ **Clínica: gestação de alto risco** | Tronco Comum | Teoria | 60 | M | Pré-eclâmpsia (sulfato de magnésio), diabetes gestacional, sífilis na gestação, critérios de encaminhamento. |
| **Engenharia reversa: 50 questões CEBRASPE (C/E) e FGV** _(dia 6)_ | Tronco Comum | Questões | 120 | H T L M | Meça quantas erraria por "chute": em C/E, deixe em branco o que não souber. |

#### Semana 8 — Perícia, ética pericial, revisão integrada e Simulado 2

**Objetivo:** Fechar perícia previdenciária/trabalhista, ética pericial e documentos; revisar integradamente os dois eixos e medir a evolução com o Simulado 2.

**Bancas-foco:** VUNESP, Instituto AOCP, IBFC · **Meta de questões:** 260

**Carga planejada:** H 13h45 · T 11h45 · L 11h15 · M 10h

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Perícia médica previdenciária e trabalhista** | Medicina do Trabalho | Teoria | 75 | H T | Incapacidade temporária × permanente, parcial × total, uniprofissional × multiprofissional; reabilitação profissional; nexo técnico; perícia judicial trabalhista. |
| ★ **Ética do médico do trabalho** | Medicina do Trabalho | Teoria | 60 | H T | Res. CFM 2.183/2018; CEM Art. 76 (sigilo do exame de trabalhadores); ASO e atestados (Res. CFM 2.381/2024). |
| **Revisão integrada: NR-01 + NR-07 + NR-09 (PGR ↔ PCMSO)** | Medicina do Trabalho | Revisão | 60 | H T | Refaça o esquema "perigo → risco → controle → exame" e resolva 15 questões. |
| **Questões gerais de Medicina do Trabalho — VUNESP/AOCP/IBFC (30)** | Medicina do Trabalho | Questões | 60 | H T | Misture todos os temas já estudados. |
| **Aprofundamento: tabela-resumo de prazos e percentuais das NRs** | Medicina do Trabalho | Revisão | 60 | T | Use o cheat sheet "NRs — prazos e percentuais" e complete o que faltar. |
| ★ **Ética pericial** | Medicina Legal | Teoria | 60 | H L | CEM Cap. XI (Arts. 92–98), sigilo pericial, perito × assistente técnico, impedimento e suspeição de peritos. |
| ★ **Cadeia de custódia aprofundada, local de crime e exumação** | Medicina Legal | Teoria | 60 | H L | Revisão das 10 etapas com casos; isolamento e preservação do local; exumação e reconhecimento. |
| **Revisão integrada: traumatologia + tanatologia** | Medicina Legal | Revisão | 60 | H L | Refaça os cheat sheets de PAF e cronotanatognose sem consulta; resolva 15 questões. |
| **Questões gerais de Medicina Legal — VUNESP/AOCP/IBFC (30)** | Medicina Legal | Questões | 60 | H L | Misture todos os temas já estudados. |
| **Aprofundamento: laudo de necropsia** | Medicina Legal | Teoria | 45 | L | Estrutura do laudo, causa médica × causa jurídica da morte (homicídio, suicídio, acidente, indeterminada). |
| **Revisão: ética médica e documentos** | Tronco Comum | Revisão | 45 | H T L M | CEM, Res. 2.381/2024 e Res. 1.779/2005 (DO). |
| **Básicas da banca-alvo: Português, RLM e Direito Administrativo** | Tronco Comum | Questões | 45 | H T L M | 15 questões no formato da banca-alvo. |
| ★ **Clínica: tireoide, obesidade e musculoesquelético** | Tronco Comum | Teoria | 60 | M | Hipo e hipertireoidismo, obesidade (abordagem e farmacoterapia), lombalgia (sinais de alerta), gota e osteoartrite. |
| ★ **Vigilância epidemiológica no município** | Tronco Comum | Teoria | 45 | M | Notificação compulsória (imediata × semanal), investigação de surtos, indicadores de saúde. |
| **Questões: clínica — VUNESP/AOCP/IBFC (30)** | Tronco Comum | Questões | 60 | M | Todos os temas clínicos já vistos. |
| **Aprofundamento: aptidão, inaptidão e retorno ao trabalho** | Medicina do Trabalho | Teoria | 60 | T | Casos de ASO (inapto temporário × definitivo), readaptação, retorno após afastamento previdenciário. |
| **Aprofundamento: 30 questões de ética pericial e documentos** | Medicina Legal | Questões | 60 | L | CEM Cap. XI e documentos médico-legais. |
| ★ **Clínica: anticoagulação e prescrição segura na APS** | Tronco Comum | Teoria | 45 | M | Varfarina × DOACs, interações frequentes, RENAME. |
| **Questões: zoonoses, peçonhentos, hanseníase e dermatoses (30)** | Tronco Comum | Questões | 60 | M | Temas que as bancas do Sul repetem em editais municipais. |
| ★ **SIMULADO 2 (fim do Mês 2): 80 questões em 4 h** _(dia 6)_ | Tronco Comum | Simulado | 240 | H T L M | Proporção da trilha, banca-alvo, tempo real. Compare com o Simulado 1 na Central de Questões. |

### Mês 3 — Reta Final e Performance

_Simulados cronometrados semanais, revisão espaçada intensiva (D1, D7, D15, D30), leitura rápida das tabelas de NRs e de fenômenos cadavéricos e zeramento do caderno de erros._

#### Semana 9 — Reta final I — NRs e tanatologia/traumatologia

**Objetivo:** Revisão por tabelas e questões na banca-alvo; começar o zeramento do caderno de erros; Simulado 3 cronometrado.

**Bancas-foco:** Banca-alvo · **Meta de questões:** 300

**Carga planejada:** H 13h · T 11h30 · L 11h30 · M 11h

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Revisão rápida: tabela de NRs (prazos, percentuais, composição)** | Medicina do Trabalho | Revisão | 60 | H T | Cheat sheet "NRs — prazos e percentuais" + checklists de NR-01/04/05/07/15/16/32. |
| ★ **Revisão: NR-07 completa + indicadores biológicos** | Medicina do Trabalho | Revisão | 60 | H T | Itens de exames, ASO, anexos e Quadros 1 e 2. |
| **Questões: 40 de NRs na banca-alvo** | Medicina do Trabalho | Questões | 60 | H T | Tempo de prova: 2 min por questão. |
| ★ **Lei seca rápida: Lei 8.213 Arts. 19–23, 59–60, 86 e 118** | Medicina do Trabalho | Lei seca / NR | 30 | H T | Só os itens marcados como difíceis no checklist. |
| **Aprofundamento: toxicologia + pneumoconioses** | Medicina do Trabalho | Revisão | 60 | T | Refaça os cheat sheets de memória e confira. |
| ★ **Revisão: fenômenos cadavéricos e cronotanatognose** | Medicina Legal | Revisão | 60 | H L | Cheat sheet completo; preencha a tabela de memória antes de conferir. |
| ★ **Revisão: traumatologia mecânica e PAF** | Medicina Legal | Revisão | 60 | H L | Cheat sheets de PAF e lesão corporal. |
| **Questões: 40 de tanatologia e traumatologia na banca-alvo** | Medicina Legal | Questões | 60 | H L | Tempo de prova. |
| ★ **Lei seca rápida: CPP 158–184** | Medicina Legal | Lei seca / NR | 30 | H L | Itens marcados como difíceis. |
| **Aprofundamento: asfixias + sexologia** | Medicina Legal | Revisão | 60 | L | Refaça a tabela comparativa de asfixias de memória. |
| **Revisão do SUS por questões na banca-alvo (30)** | Tronco Comum | Questões | 60 | H T L M | CF, 8.080, 8.142, 7.508, PNAB. |
| ★ **Caderno de erros: zerar 25%** | Tronco Comum | Caderno de erros | 60 | H T L M | Refaça as questões do caderno; marque como resolvidas as que acertar com segurança. |
| ★ **Revisão clínica: cardiometabólica e respiratória** | Tronco Comum | Revisão | 60 | M | HAS, DM, dislipidemia, asma, DPOC, TB. |
| ★ **Revisão clínica: infectologia e urgência** | Tronco Comum | Revisão | 60 | M | HIV, sífilis, arboviroses, PCR, sepse, SCA, AVC. |
| **Questões: clínica na banca-alvo (30)** | Tronco Comum | Questões | 60 | M | Tempo de prova. |
| **Aprofundamento: 40 questões de Lei 8.213 e Decreto 3.048** | Medicina do Trabalho | Questões | 60 | T | Banca-alvo, tempo de prova. |
| **Aprofundamento: 40 questões de PAF e lesão corporal** | Medicina Legal | Questões | 60 | L | Banca-alvo, tempo de prova. |
| ★ **Revisão clínica: zoonoses, peçonhentos, hanseníase e dermatoses** | Tronco Comum | Revisão | 60 | M | Raiva (PEP), leptospirose, loxoscelismo, hanseníase (PQT-U). |
| **Questões: SUS municipal e clínica na banca-alvo (30)** | Tronco Comum | Questões | 60 | M | Inclua legislação do município do edital, se cobrada. |
| ★ **SIMULADO 3 cronometrado (prova completa)** _(dia 6)_ | Tronco Comum | Simulado | 240 | H T L M | Reproduza a prova-alvo: número de questões, tempo e horário reais. Registre por disciplina. |

#### Semana 10 — Reta final II — clínica ocupacional e asfixias/sexologia

**Objetivo:** Revisão por tabelas e questões; mais 25% do caderno de erros; Simulado 4.

**Bancas-foco:** Banca-alvo · **Meta de questões:** 300

**Carga planejada:** H 12h30 · T 11h · L 11h15 · M 9h30

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Revisão: clínica ocupacional** | Medicina do Trabalho | Revisão | 60 | H T | PAIR, LER/DORT, pneumoconioses, dermatoses, câncer ocupacional, Burnout. |
| ★ **Revisão: Decreto 3.048/NTEP e CLT 154–201** | Medicina do Trabalho | Revisão | 45 | H T | Checklists de Decreto 3.048 e CLT. |
| **Questões: 40 de clínica ocupacional e legislação previdenciária** | Medicina do Trabalho | Questões | 60 | H T | Banca-alvo. |
| ★ **Lei seca rápida: NR-15 (Anexos 1, 2 e 14) e NR-16** | Medicina do Trabalho | Lei seca / NR | 30 | H T | Tabela de ruído e graus de insalubridade. |
| **Aprofundamento: perícia previdenciária e nexo** | Medicina do Trabalho | Revisão | 60 | T | Casos de nexo (Schilling) e de classificação de incapacidade. |
| ★ **Revisão: asfixias e sexologia** | Medicina Legal | Revisão | 60 | H L | Cheat sheet de asfixias; crimes sexuais e himenologia. |
| ★ **Revisão: antropologia, psicopatologia e embriaguez** | Medicina Legal | Revisão | 60 | H L | CP 26–28 em letra de lei; métodos de identificação. |
| **Questões: 40 de asfixias, sexologia, antropologia e psicopatologia** | Medicina Legal | Questões | 60 | H L | Banca-alvo. |
| ★ **Lei seca rápida: CP 121–129 e 213–217-A** | Medicina Legal | Lei seca / NR | 30 | H L | Itens marcados como difíceis. |
| **Aprofundamento: documentos médico-legais e ética pericial** | Medicina Legal | Revisão | 60 | L | Estrutura do relatório, tipos de documento, CEM Arts. 92–98. |
| **Questões: ética e documentos médicos (20)** | Tronco Comum | Questões | 45 | H T L M | CEM, Res. 2.381/2024, DO. |
| ★ **Caderno de erros: zerar mais 25% (total 50%)** | Tronco Comum | Caderno de erros | 60 | H T L M | Priorize os itens com mais revisões falhas. |
| ★ **Revisão clínica: mulher, criança, idoso e saúde mental** | Tronco Comum | Revisão | 60 | M | Pré-natal, PNI, puericultura, polifarmácia, depressão, risco de suicídio. |
| **Questões: clínica na banca-alvo (30)** | Tronco Comum | Questões | 60 | M | Tempo de prova. |
| **Aprofundamento: 40 questões de toxicologia e NR-15** | Medicina do Trabalho | Questões | 60 | T | Banca-alvo, tempo de prova. |
| **Aprofundamento: 40 questões de asfixias e sexologia** | Medicina Legal | Questões | 60 | L | Banca-alvo, tempo de prova. |
| ★ **Revisão clínica: nefro/gastro, endócrino, neuro e musculoesquelético** | Tronco Comum | Revisão | 60 | M | DRC, DRGE, tireoide, cefaleias, lombalgia. |
| ★ **Leitura: calendário do PNI e lista de notificação compulsória** | Tronco Comum | Lei seca / NR | 45 | M | Calendário vigente e agravos de notificação imediata. |
| ★ **SIMULADO 4 cronometrado (prova completa)** _(dia 6)_ | Tronco Comum | Simulado | 240 | H T L M | Mesmas condições do Simulado 3; compare acerto por disciplina. |

#### Semana 11 — Reta final III — pontos fracos e performance

**Objetivo:** Atacar os 3 pontos fracos do Dashboard, volume alto de questões na banca-alvo, 75% do caderno de erros zerado e Simulado 5.

**Bancas-foco:** Banca-alvo · **Meta de questões:** 320

**Carga planejada:** H 10h45 · T 10h45 · L 10h45 · M 11h

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Ataque aos 3 pontos fracos do Dashboard** | Tronco Comum | Revisão | 90 | H T L M | Abra o Radar de Pontos Fracos no Dashboard; para cada tema, leia o cheat sheet/checklist indicado e resolva 10 questões. |
| **Questões: 60 mistas de Medicina do Trabalho na banca-alvo** | Medicina do Trabalho | Questões | 75 | H T | Tempo de prova; registre por tema. |
| ★ **Leitura rápida: tabelas de NRs e IBE** | Medicina do Trabalho | Lei seca / NR | 30 | H T | Cheat sheets "NRs — prazos e percentuais" e "Indicadores Biológicos". |
| **Aprofundamento: questões extras de NR-07, NR-15 e NR-32** | Medicina do Trabalho | Questões | 60 | T | Somente erros e assuntos com menos de 75% de acerto. |
| **Questões: 60 mistas de Medicina Legal na banca-alvo** | Medicina Legal | Questões | 75 | H L | Tempo de prova; registre por tema. |
| ★ **Leitura rápida: fenômenos cadavéricos, PAF e asfixias** | Medicina Legal | Lei seca / NR | 30 | H L | Três cheat sheets em sequência. |
| **Aprofundamento: questões extras de tanatologia e traumatologia** | Medicina Legal | Questões | 60 | L | Somente assuntos com menos de 75% de acerto. |
| ★ **Caderno de erros: zerar mais 25% (total 75%)** | Tronco Comum | Caderno de erros | 60 | H T L M | Itens restantes mais antigos primeiro. |
| **Básicas de sobrevivência: Português e RLM** | Tronco Comum | Questões | 45 | H T L M | Garanta a nota mínima: 20 questões da banca-alvo. |
| **Questões: 60 mistas de clínica e SUS na banca-alvo** | Tronco Comum | Questões | 75 | M | Tempo de prova. |
| ★ **Leitura rápida: protocolos clínicos do MS** | Tronco Comum | Lei seca / NR | 30 | M | HAS, DM, pré-natal, calendário do PNI, dengue. |
| **Aprofundamento: caderno de erros de Medicina do Trabalho** | Medicina do Trabalho | Caderno de erros | 45 | T | Somente os itens deste eixo, do mais antigo ao mais recente. |
| **Aprofundamento: caderno de erros de Medicina Legal** | Medicina Legal | Caderno de erros | 45 | L | Somente os itens deste eixo, do mais antigo ao mais recente. |
| ★ **Revisão: urgências na APS e no pronto atendimento** | Tronco Comum | Revisão | 60 | M | PCR, anafilaxia, sepse, SCA, AVC, intoxicações. |
| **Questões: 30 extras do pior tema clínico** | Tronco Comum | Questões | 60 | M | Use a tela de Desempenho para escolher o tema. |
| ★ **SIMULADO 5 cronometrado (prova completa)** _(dia 6)_ | Tronco Comum | Simulado | 240 | H T L M | Último simulado completo: treine também alimentação, pausas e gestão do tempo. |

#### Semana 12 — Véspera — polimento, caderno zerado e logística

**Objetivo:** Sem conteúdo novo: caderno de erros 100% zerado, leituras finais de checklists e cheat sheets, questões leves e logística da prova.

**Bancas-foco:** Banca-alvo · **Meta de questões:** 150

**Carga planejada:** H 7h45 · T 6h15 · L 6h15 · M 6h15

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Caderno de erros: zerar 100%** | Tronco Comum | Caderno de erros | 90 | H T L M | Todo item pendente refeito; o que ainda errar vira uma linha num resumo de 1 página. |
| ★ **Leitura final: NR-07, NR-15 e Lei 8.213** | Medicina do Trabalho | Lei seca / NR | 45 | H T | Somente checklists, sem livro. |
| **Questões leves: 30 de revisão (Medicina do Trabalho)** | Medicina do Trabalho | Questões | 45 | H T | Questões já acertadas antes: objetivo é confiança e ritmo. |
| ★ **Leitura final: CPP 158–184, CP 121–129 e cheat sheets** | Medicina Legal | Lei seca / NR | 45 | H L | Somente checklists e tabelas. |
| **Questões leves: 30 de revisão (Medicina Legal)** | Medicina Legal | Questões | 45 | H L | Ritmo e confiança. |
| ★ **Leitura final: SUS e ética** | Tronco Comum | Lei seca / NR | 45 | H T L M | Checklist das leis do SUS e artigos do CEM. |
| ★ **Leitura final: protocolos clínicos** | Tronco Comum | Lei seca / NR | 45 | M | Resumo de 1 página por área clínica. |
| **Questões leves de clínica (30)** | Tronco Comum | Questões | 45 | M | Ritmo e confiança. |
| ★ **Logística da prova** | Tronco Comum | Revisão | 30 | H T L M | Local e trajeto, documento com foto, caneta transparente, horário de abertura dos portões, sono regular nos 3 dias anteriores, refeição testada nos simulados. |
| **Simulado curto (2 h) ou descanso ativo** _(dia 6)_ | Tronco Comum | Revisão | 120 | H T L M | Se a prova for em até 3 dias, descanse; senão, faça um simulado curto só para manter o ritmo. |

<!-- PLANO:FIM -->
