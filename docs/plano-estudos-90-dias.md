# Plano de Estudos Periodizado — 90 Dias (12 Semanas)

> Para o **médico generalista / recém-formado** (graduação + CRM, sem residência) que vai prestar os concursos que não exigem especialidade: **Perito Médico Federal (INSS)** e peritos de regimes próprios, **Perito Médico-Legista** (Polícia Científica do PR, Polícia Científica de SC, IGP-RS) e, como porta de entrada, **Clínico Geral / ESF / Plantonista** nas prefeituras do Sul (PR, SC, RS).
>
> Este documento é a versão legível do plano embarcado no app (`src/data/plano12Semanas.ts`). A seção "Detalhamento semana a semana" é **gerada automaticamente** a partir dos dados (`npm run docs:plano`), então o que está aqui é exatamente o que aparece no Cronograma.

---

## 1. Lógica da periodização

| Mesociclo | Semanas | Objetivo | Proporção típica (trilha Generalista) |
|---|---|---|---|
| **Mês 1 — Base pericial, Medicina Legal e clínica essencial** | 1–4 | Perícia e incapacidade, Lei 8.213 (benefícios e acidente do trabalho), seguridade e BPC, NR-07; documentos médico-legais, CPP, traumatologia, PAF e tanatologia; clínica cardiometabólica, respiratória e de urgência; leis do SUS — a partir de um diagnóstico por questões | 55% teoria · 20% lei seca · 25% questões |
| **Mês 2 — Aprofundamento e engenharia reversa de bancas** | 5–8 | Nexo causal/NTEP, doenças do trabalho, perícia em saúde mental e do servidor; asfixiologia, sexologia, antropologia, psicopatologia, ética pericial; infectologia, saúde mental, ortopedia, urgência e trauma; baterias filtradas por banca | 40% teoria · 15% lei seca · 45% questões |
| **Mês 3 — Reta final e performance** | 9–12 | Simulados cronometrados semanais, revisão espaçada intensiva (D1, D7, D15, D30), leitura rápida de cheat sheets, zeramento do caderno de erros | 10% teoria · 30% revisão · 60% questões/simulados |

**Por que três mesociclos?** Concurso médico cobra dois tipos de conhecimento: **literal** (lei, artigo, prazo, classificação de autor) e **aplicado** (caso clínico, laudo, nexo, conclusão pericial). O Mês 1 instala o literal, o Mês 2 aplica e calibra com o estilo das bancas, o Mês 3 converte em desempenho sob tempo.

**Os quatro eixos do plano**

| Eixo | O que contém | Por que está no plano do generalista |
|---|---|---|
| **Perícia, Previdência e Trabalho** | Perícia médica, incapacidade, benefícios, BPC/LOAS, perícia do servidor, nexo/NTEP/CAT, NRs essenciais, doenças relacionadas ao trabalho, toxicologia | É o núcleo do Perito Médico Federal e das perícias de regimes próprios. Medicina do Trabalho entra como **conteúdo** — o cargo de Médico do Trabalho exige especialização |
| **Medicina Legal** | Perícia criminal, documentos, traumatologia, PAF, tanatologia, asfixias, sexologia, antropologia, psicopatologia, CPP/CP | Núcleo do Perito Médico-Legista |
| **Clínica Médica e Urgência** | Clínica por sistemas, infectologia, urgência e trauma, saúde mental, ciclos de vida | Base dos editais de Clínico Geral/ESF e metade da prova específica do Perito Médico Federal ("Medicina Geral") |
| **SUS, Ética e Básicas** | Leis do SUS, epidemiologia, ética médica e documentos, Português, RLM, Direito Administrativo | Caem em praticamente todos os editais |

---

## 2. As quatro trilhas

| Trilha | Para quem | O que entra |
|---|---|---|
| **Generalista Completo** (padrão) | Quem ainda não tem edital ou quer as três portas ao mesmo tempo | Todos os eixos: perícia, Medicina Legal, clínica e SUS/ética |
| **Foco: Perícia Médica (INSS / RPPS)** | Perito Médico Federal, médico perito de institutos de previdência e juntas médicas | Perícia/previdência/trabalho + clínica (o edital cobra "Medicina Geral") + SUS/ética + aprofundamentos exclusivos (IN 128/2022, NR-15/16, BPC, servidor, saúde mental pericial) |
| **Foco: Médico Legista** | Polícia Científica do PR, Polícia Científica de SC, IGP-RS | Medicina Legal + SUS/ética + aprofundamentos exclusivos (atlas, bancas policiais, laudos) |
| **Foco: Clínico Geral / ESF / Plantonista** | Prefeituras, consórcios e hospitais municipais | Clínica + SUS/ética + aprofundamentos exclusivos (zoonoses e peçonhentos do Sul, hanseníase, vigilância municipal, gestação de alto risco) |

No app, a trilha é trocada a qualquer momento (Cronograma → seletor de foco). Ao usar **"Definir como Prova-Alvo"** no Radar, a trilha é ajustada automaticamente pela categoria do cargo (legista → Legista; perícia médica → Perícia; clínico/ESF → Clínico; Medicina do Trabalho → Perícia, o conteúdo mais próximo), com opção de desfazer.

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

### 4.1 Dia Padrão — 3 h a 6 h líquidas

Orçamento configurável de 180 a 360 minutos (3h, 3h30, 4h, 5h ou 6h; padrão: 3h30). O orçamento decide quanto de **Conhecimentos Básicos** cabe na semana:

- o **núcleo** (Português e simulados de básicas) entra sempre;
- o **complemento** (Matemática, RLM, Informática, Direito, Legislação, Ética…) entra enquanto couber em 5 × orçamento;
- o **reforço** só entra quando as básicas valem ≥ 50% da prova-alvo (padrão na trilha Clínico, de prefeituras).

Com 6 h por dia, todas as trilhas recebem as básicas completas.

| Ordem | Bloco | Tempo típico |
|---|---|---|
| 1 | Revisões espaçadas devidas (D1/D7/D15/D30) | 15–30 min |
| 2 | Teoria de um eixo (perícia, legal ou clínica) | 60–90 min |
| 3 | Teoria de outro eixo (ou SUS/ética) | 45–75 min |
| 4 | Lei seca com checklist (Lei 8.213, LOAS, Lei 8.112, NRs, CPP/CP) | 30–45 min |
| 5 | Questões do dia + registro de erros | 45–60 min |
| 6 | **Conhecimentos Básicos do dia** (1–3 blocos de 25–40 min, espalhados pela semana) | 30–110 min |
| 7 | Redistribuídas de dias anteriores (se houver; básicas não acumulam) | até 60 min |

> Por que tanto espaço para as básicas? Nas provas de prefeitura do Sul, elas valem de 60% a 75% das questões. Exemplos: FUNDATEC, Xangri-lá/RS 2025, 40 de 60; Objetiva, Cachoeira do Sul/RS 2026, 30 de 40. Nas provas de perito oficial, valem cerca de metade das questões, e há nota mínima no bloco de conhecimentos gerais.

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
Legenda das trilhas: **G** Generalista Completo · **P** Perícia Médica (INSS/RPPS) · **L** Médico Legista · **C** Clínico Geral/ESF/Plantonista. ★ = bloco essencial (mantido na compressão).

Conhecimentos Básicos: **Núcleo** entra sempre · **Complemento** entra se couber no orçamento diário escolhido (até 6 h) · **Reforço** só quando as básicas valem ≥ 50% da prova-alvo (padrão da trilha Clínico). Com edital-alvo no app, entram só as disciplinas do edital. A carga mostra o Dia Padrão de 3h30 → 6h.

### Mês 1 — Base pericial, Medicina Legal e clínica essencial

_Construir a base cobrada em todos os concursos que o generalista pode prestar: perícia e incapacidade laborativa, benefícios da Lei 8.213, seguridade e BPC, NR-07 e acidente do trabalho; fundamentos de Medicina Legal (documentos, CPP, traumatologia, PAF, tanatologia); clínica cardiometabólica, respiratória e de urgência; leis do SUS — partindo de um diagnóstico por questões._

#### Semana 1 — Diagnóstico, perícia e incapacidade, fundamentos de Medicina Legal e clínica cardiometabólica

**Objetivo:** Medir o ponto de partida e assentar os pilares: o que é perícia médica e incapacidade laborativa, a Lei 8.213 dos benefícios por incapacidade, perícia e documentos médico-legais, cadeia de custódia, hipertensão/diabetes e princípios do SUS.

**Bancas-foco:** Diagnóstico misto, CEBRASPE, FUNDATEC · **Meta de questões:** 180

**Carga planejada:** G 19h35→24h45 · P 18h10→20h45 · L 17h25→17h25 · C 18h15→18h40

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Diagnóstico inicial: 40 questões mistas sem consulta** | SUS, Epidemiologia e Ética Médica | Diagnóstico | 120 | G P L C | Resolva 40 questões dos eixos da sua trilha (proporção da trilha), sem consulta e cronometrado. Registre cada disciplina separadamente na Central de Questões: é isso que acende os primeiros pontos fracos do Dashboard. |
| ★ **Perícia médica: conceitos, ato pericial e o papel do perito** | Perícia, Previdência e Trabalho | Teoria | 75 | G P | Perícia × assistência: o perito não trata e não pode periciar paciente seu, familiar ou pessoa com quem tenha relação que influa no trabalho (CEM Art. 93). Perícia oficial, quesitos e laudo; atribuições do Perito Médico Federal (parecer sobre incapacidade laboral, caracterização da invalidez, auditoria médica, avaliação biopsicossocial da deficiência, FGTS por condição de saúde). |
| ★ **Incapacidade laborativa: DID, DII e classificação** | Perícia, Previdência e Trabalho | Teoria | 75 | G P | Doença não é incapacidade. DID × DII (a DII define direito, carência e preexistência); incapacidade temporária × permanente, parcial × total, uni, multi e omniprofissional; prognóstico, reabilitação e data estimada de cessação (DCB). |
| ★ **Lei seca: Lei 8.213 — benefícios por incapacidade** | Perícia, Previdência e Trabalho | Lei seca / NR | 45 | G P | Arts. 25, 26, 27-A, 42, 45, 59–62, 86, 101 e 151: carência, isenções, preexistência, 15 dias da empresa, DCB de 120 dias, reabilitação e acréscimo de 25%. Marque no checklist. |
| **Questões: perícia e benefícios por incapacidade (30)** | Perícia, Previdência e Trabalho | Questões | 60 | G P | Filtro: Legislação Previdenciária → benefícios por incapacidade + Medicina → perícia médica. Priorize CEBRASPE (banca do último concurso de Perito Médico Federal) e bancas do Sul. |
| ★ **Introdução à Medicina Legal: perícia e peritos** | Medicina Legal | Teoria | 60 | G L | Conceito e divisões da Medicina Legal; perito oficial × nomeado (CPP 159: dois portadores de diploma superior na falta de oficial); assistente técnico; quesitos; impedimentos. |
| ★ **Documentos médico-legais** | Medicina Legal | Teoria | 75 | G L | Notificação, atestado, relatório (laudo × auto), parecer e depoimento oral; partes do relatório (preâmbulo, quesitos, histórico, descrição — visum et repertum, discussão, conclusão, respostas aos quesitos); quesitos oficiais de lesão corporal. |
| ★ **CPP Arts. 158–161 e cadeia de custódia (158-A a 158-F)** | Medicina Legal | Teoria | 60 | G L | Exame de corpo de delito direto/indireto; confissão não supre; prioridades do parágrafo único do Art. 158; as 10 etapas da cadeia de custódia; vestígio; central de custódia; laudo em 10 dias. |
| ★ **Lei seca: CPP 158–184 (1ª leitura)** | Medicina Legal | Lei seca / NR | 30 | G L | Leitura integral com marcação no checklist; atenção a prazos (6 h para autópsia, 10 dias para laudo, 30 dias para exame complementar). |
| **Questões: perícia, documentos e cadeia de custódia (25)** | Medicina Legal | Questões | 45 | G L | Filtro: Medicina Legal → perícias e peritos, documentos médico-legais + Processo Penal → prova pericial e cadeia de custódia. |
| ★ **Clínica: hipertensão arterial** | Clínica Médica e Urgência | Teoria | 75 | G C P | Diagnóstico (consultório, MAPA, MRPA), estratificação de risco, metas pressóricas, tratamento não farmacológico e escalonamento farmacológico conforme a diretriz brasileira vigente; lesão de órgão-alvo (também avaliada na perícia de cardiopatias). |
| ★ **Clínica: diabetes tipo 2** | Clínica Médica e Urgência | Teoria | 75 | G C P | Critérios diagnósticos, metas glicêmicas individualizadas, metformina e intensificação, insulinização basal, rastreamento de complicações (pé, retina, rim). |
| ★ **Clínica: dislipidemia e risco cardiovascular** | Clínica Médica e Urgência | Teoria | 60 | G C P | Estratificação de risco, metas de LDL por risco, estatinas, prevenção primária × secundária. |
| **Questões: clínica cardiometabólica (30)** | Clínica Médica e Urgência | Questões | 60 | G C P | Filtro: Clínica Médica → HAS, DM, dislipidemia → cargos Médico/Clínico Geral/ESF e Perito Médico. |
| ★ **CF/88 Arts. 196–200 e Lei 8.080 (princípios e diretrizes)** | SUS, Epidemiologia e Ética Médica | Teoria | 75 | G P L C | Saúde como direito; relevância pública; diretrizes do Art. 198; complementaridade privada (199); competências do SUS (200, inclusive saúde do trabalhador); Lei 8.080 Arts. 2º a 7º e definição de saúde do trabalhador (Art. 6º, §3º). |
| **Questões: SUS (CF + Lei 8.080)** | SUS, Epidemiologia e Ética Médica | Questões | 45 | G P L C | 30 questões de SUS: CF arts. 196–200 e Lei 8.080 (princípios, competências, participação complementar). |
| **Aprofundamento: o edital de Perito Médico Federal** | Perícia, Previdência e Trabalho | Teoria | 60 | P | Leia o conteúdo programático do último concurso (MPS/Cebraspe, 2024: 50 itens de conhecimentos gerais + 70 de específicos, Certo/Errado com desconto). Marque o que já domina em Medicina Geral, Medicina do Trabalho, Direito do Trabalho, Previdenciário, SUS e Assistência Social. |
| **Aprofundamento: 30 itens Certo/Errado de legislação previdenciária** | Perícia, Previdência e Trabalho | Questões | 60 | P | Estilo CEBRASPE: cada erro anula um acerto pela metade — treine deixar em branco o que não souber. |
| **Aprofundamento: Lei 13.964/2019 e nulidades da prova pericial** | Medicina Legal | Teoria | 60 | L | Cadeia de custódia na prática do IML/IGP: lacres, rastreabilidade, central de custódia, consequências da quebra da cadeia na jurisprudência. |
| **Aprofundamento: laudo-modelo de lesão corporal** | Medicina Legal | Teoria | 45 | L | Redija um laudo curto (preâmbulo → respostas aos quesitos) de uma lesão contusa simples para fixar a estrutura. |
| **Clínica: rastreamento e prevenção na APS** | Clínica Médica e Urgência | Teoria | 60 | C | Rastreamentos recomendados pelo Ministério da Saúde (colo, mama, colorretal; HAS; DM), prevenção quaternária. |
| **Clínica: infecções de vias aéreas superiores e antibióticos** | Clínica Médica e Urgência | Teoria | 60 | C | Faringoamigdalite, rinossinusite, otite média: quando (e quando não) prescrever antibiótico. |
| **Clínica: anemias na APS** | Clínica Médica e Urgência | Teoria | 45 | C | Ferropriva, megaloblástica e de doença crônica: investigação inicial e reposição. |
| **Correção comentada do diagnóstico e abertura do Caderno de Erros** _(dia 6)_ | SUS, Epidemiologia e Ética Médica | Caderno de erros | 60 | G P L C | Revise cada erro do diagnóstico, registre os relevantes no Caderno de Erros (o app agenda D1/D7/D15/D30) e confira os pontos fracos no Dashboard. |

**Conhecimentos Básicos da semana**

| Bloco | Nível | Tipo | Min | Trilhas |
|---|---|---|---|---|
| Português: Ortografia oficial, acentuação, hífen e uso dos porquês | Núcleo | Teoria | 40 | G P L C |
| Português: Classes de palavras e formação de palavras | Núcleo | Teoria | 40 | G P L C |
| Português: interpretação de texto | Complemento | Questões | 30 | G P L C |
| Matemática: Razão, proporção, divisão proporcional e escalas | Complemento | Teoria | 40 | G L C |
| Matemática: Números, operações, frações, MMC/MDC, potências e raízes | Reforço | Teoria | 30 | G L C |
| Raciocínio Lógico: Proposições, conectivos e tabela-verdade | Complemento | Teoria | 35 | G P L C |
| Informática: Segurança da informação: malware, phishing, backup, criptografia e VPN | Complemento | Teoria | 35 | G P L C |
| Informática: Hardware, software e armazenamento | Reforço | Teoria | 25 | G P L C |
| Constitucional: Princípios fundamentais (arts. 1º a 4º) | Complemento | Teoria | 30 | G P L C |
| Administrativo: Administração pública: conceito e princípios | Complemento | Teoria | 30 | G P L |
| Servidor público: Estatuto municipal e Lei Orgânica: como estudar a lei do seu município | Complemento | Teoria | 30 | G P L C |
| Ética e transparência: Código de Ética do servidor federal (Decreto 1.171/1994) | Complemento | Teoria | 30 | G P L |
| História e Geografia do Sul: Município do edital: como estudar história, geografia e dados (IBGE Cidades) | Complemento | Teoria | 30 | G L C |
| Atualidades: Atualidades: como estudar e recorte do edital | Complemento | Teoria | 20 | G C |

#### Semana 2 — Benefícios por incapacidade, NR-07, traumatologia mecânica e doenças respiratórias

**Objetivo:** Dominar os benefícios por incapacidade (espécies, carência, cálculo, reabilitação), os exames ocupacionais da NR-07, a traumatologia por energias mecânicas com o CP 129 e a clínica respiratória.

**Bancas-foco:** CEBRASPE, FUNDATEC, FEPESE · **Meta de questões:** 200

**Carga planejada:** G 18h45→23h20 · P 18h45→18h45 · L 16h50→16h50 · C 16h45→16h45

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Benefícios: auxílio temporário, aposentadoria, auxílio-acidente e acréscimo de 25%** | Perícia, Previdência e Trabalho | Teoria | 75 | G P | Espécies previdenciárias × acidentárias (B31/B91, B32/B92, B36/B94); carência e isenções (Arts. 26 e 151); cálculo pós-EC 103/2019 (60% + 2% ao ano; 100% se acidentária); DCB e pedido de prorrogação; reabilitação profissional (Art. 62); acréscimo de 25% (Anexo I do Decreto 3.048). |
| ★ **NR-07: PCMSO e exames ocupacionais** | Perícia, Previdência e Trabalho | Teoria | 60 | G P | Admissional, periódico (anual para expostos, bienal para demais), retorno ao trabalho (afastamento ≥ 30 dias), mudança de risco e demissional (até 10 dias; dispensa se último exame < 135 dias em graus 1–2 ou < 90 dias em graus 3–4); conteúdo do ASO; aptidão × inaptidão. |
| ★ **Lei seca: NR-07 — exames, ASO e prazos** | Perícia, Previdência e Trabalho | Lei seca / NR | 45 | G P | Leitura ativa do texto oficial marcando cada item de prazo e conteúdo do ASO. |
| **Questões: benefícios e exames ocupacionais (30)** | Perícia, Previdência e Trabalho | Questões | 60 | G P | Benefícios por incapacidade + NR-07; inclua itens Certo/Errado do CEBRASPE. |
| ★ **Traumatologia I: instrumentos perfurantes, cortantes e contundentes** | Medicina Legal | Teoria | 75 | G L | Lesões punctórias (Leis de Filhos e de Langer), incisas (cauda de escoriação, ausência de pontes), contusas (escoriação, equimose, hematoma, ferida contusa com pontes de tecido), espectro equimótico de Legrand du Saulle. |
| ★ **Traumatologia II: perfurocortantes e cortocontundentes** | Medicina Legal | Teoria | 60 | G L | Ferida perfuroincisa (gume único × duplo), cortocontusa; lesões de defesa; esgorjamento × degolamento × decapitação; elementos de suicídio × homicídio por arma branca. |
| ★ **CP Art. 129 e CPP Art. 168: classificação da lesão corporal** | Medicina Legal | Teoria | 60 | G L | Leve, grave (> 30 dias, perigo de vida, debilidade permanente, aceleração de parto), gravíssima (incapacidade permanente, enfermidade incurável, perda/inutilização, deformidade permanente, aborto), seguida de morte; exame complementar após 30 dias. |
| ★ **Lei seca: CP 129 e CPP 168** | Medicina Legal | Lei seca / NR | 30 | G L | Leitura do Art. 129 completo (incluindo §§ 9º a 13) e do Art. 168 do CPP. |
| **Questões: traumatologia mecânica e lesão corporal (25)** | Medicina Legal | Questões | 45 | G L | Filtro: Medicina Legal → Traumatologia Forense + Direito Penal → Lesão corporal. |
| ★ **Clínica: asma e DPOC** | Clínica Médica e Urgência | Teoria | 75 | G C P | Diagnóstico espirométrico, classificação de controle, tratamento de manutenção e da exacerbação, indicações de oxigenoterapia; espirometria também é a base da perícia em pneumopatias. |
| ★ **Clínica: tuberculose** | Clínica Médica e Urgência | Teoria | 75 | G C P | Busca ativa de sintomático respiratório, TRM-TB, esquema básico (RIPE), controle de contatos, ILTB, notificação e TDO. |
| ★ **Clínica: pneumonia adquirida na comunidade** | Clínica Médica e Urgência | Teoria | 45 | G C P | CURB-65/CRB-65, local de tratamento e antibioticoterapia empírica. |
| **Questões: respiratória e TB (30)** | Clínica Médica e Urgência | Questões | 60 | G C P | Bancas do Sul e CEBRASPE; cargos Médico/ESF e Perito Médico. |
| ★ **Lei 8.080 (competências) e Lei 8.142** | SUS, Epidemiologia e Ética Médica | Teoria | 75 | G P L C | Competências da União, estados e municípios; CONITEC; Fundo de Saúde; Conferência (a cada 4 anos) e Conselho de Saúde (paritário: usuários 50%); requisitos para transferências. |
| **Questões: SUS (Lei 8.142 e controle social)** | SUS, Epidemiologia e Ética Médica | Questões | 45 | G P L C | 30 questões de SUS: conferências, conselhos de saúde e transferências (Lei 8.142). |
| **Aprofundamento: casos de DII e preexistência** | Perícia, Previdência e Trabalho | Revisão | 60 | P | Resolva 5 casos: defina DID, DII, se há incapacidade preexistente, a espécie do benefício e se cabe reabilitação. |
| **Aprofundamento: IN PRES/INSS 128/2022 — benefícios por incapacidade** | Perícia, Previdência e Trabalho | Teoria | 60 | P | Leitura dirigida do capítulo de benefícios por incapacidade: requerimento, perícia, prorrogação, recurso e cessação. |
| **Aprofundamento: atlas (Hércules) de lesões mecânicas** | Medicina Legal | Revisão | 45 | L | Reconhecimento visual: escoriação × equimose × ferida contusa × incisa × perfuroincisa. Descreva 5 imagens em linguagem de laudo. |
| **Aprofundamento: 30 questões de traumatologia (banca policial)** | Medicina Legal | Questões | 60 | L | Bancas de carreiras policiais (CEBRASPE, FGV, VUNESP, IBFC, AOCP). |
| **Clínica: hanseníase** | Clínica Médica e Urgência | Teoria | 60 | C | Classificação operacional (paucibacilar × multibacilar), diagnóstico clínico, PQT-U, reações hansênicas, avaliação de contatos. |
| **Clínica: dermatoses comuns na APS** | Clínica Médica e Urgência | Teoria | 45 | C | Escabiose, pediculose, micoses superficiais, piodermites. |
| **Aprofundamento: 20 questões de TB e hanseníase (editais municipais)** | Clínica Médica e Urgência | Questões | 45 | C | Bancas regionais do Sul, cargo Médico/ESF. |
| **Bateria da semana por banca (40 questões)** _(dia 6)_ | SUS, Epidemiologia e Ética Médica | Questões | 90 | G P L C | Mistura dos temas da semana da sua trilha: CEBRASPE para Perícia, FUNDATEC/FEPESE para Legista e Clínico. Cronometre 2 min por questão. |

**Conhecimentos Básicos da semana**

| Bloco | Nível | Tipo | Min | Trilhas |
|---|---|---|---|---|
| Português: Concordância verbal e nominal | Núcleo | Teoria | 40 | G P L C |
| Português: Verbos: tempos, modos, vozes e correlação | Núcleo | Teoria | 40 | G P L C |
| Português: tipologia e gêneros textuais | Complemento | Questões | 30 | G P L C |
| Matemática: Regra de três simples e composta | Complemento | Teoria | 40 | G L C |
| Matemática: Sistema métrico, medidas de tempo e conversões | Reforço | Teoria | 30 | G L C |
| Raciocínio Lógico: Equivalências e negações (De Morgan, contrapositiva) | Complemento | Teoria | 35 | G P L C |
| Informática: Windows 10/11: arquivos, pastas e atalhos | Complemento | Teoria | 35 | G P L C |
| Informática: Redes e protocolos (TCP/IP, DNS, HTTP/HTTPS, Wi-Fi) | Reforço | Teoria | 25 | G P L C |
| Constitucional: Direitos e deveres individuais e coletivos (art. 5º) e remédios constitucionais | Complemento | Teoria | 35 | G P L C |
| Administrativo: Organização administrativa: direta e indireta | Complemento | Teoria | 30 | G P L |
| Servidor público: Lei 8.112: provimento, posse, exercício, estágio probatório e vacância | Complemento | Teoria | 30 | G P L C |
| Ética e transparência: Sistema de Gestão da Ética (Decreto 6.029/2007) | Complemento | Teoria | 25 | G P L |
| Legislação: Lei Maria da Penha (Lei 11.340/2006) | Complemento | Teoria | 30 | G L C |
| Atualidades: Saúde pública e ciência | Reforço | Teoria | 20 | G C |
| Inglês: Vocabulário médico e forense; falsos cognatos | Complemento | Teoria | 25 | G L |
| Penal e Processo Penal: Direito Penal: princípios, crime, excludentes e imputabilidade | Complemento | Teoria | 30 | G L |

#### Semana 3 — Seguridade social e BPC, projéteis de arma de fogo e urgência cardiovascular

**Objetivo:** Entender a seguridade social, o BPC/LOAS e a avaliação biopsicossocial da deficiência; dominar orifícios de PAF, distância de tiro e energias físicas/químicas; manejar PCR, sepse, SCA e AVC.

**Bancas-foco:** CEBRASPE, IBFC, Instituto AOCP · **Meta de questões:** 200

**Carga planejada:** G 19h→23h05 · P 18h05→18h05 · L 16h35→16h35 · C 16h30→16h30

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Seguridade social: princípios, custeio e qualidade de segurado** | Perícia, Previdência e Trabalho | Teoria | 60 | G P | CF 194–204: saúde, previdência e assistência; princípios do Art. 194 (universalidade, uniformidade, seletividade, irredutibilidade, equidade no custeio, diversidade do financiamento, gestão democrática); Lei 8.212 (custeio); segurados e dependentes; qualidade de segurado e período de graça (Lei 8.213 Art. 15). |
| ★ **BPC/LOAS e avaliação biopsicossocial da deficiência** | Perícia, Previdência e Trabalho | Teoria | 75 | G P | Quem tem direito (pessoa com deficiência e idoso 65+), impedimento de longo prazo (≥ 2 anos), critério de renda (≤ 1/4 do salário-mínimo per capita), conceito de família, avaliação médica (Perícia Médica Federal) + social (INSS), revisão bienal, suspensão por trabalho; modelo biopsicossocial da LBI. |
| ★ **Lei seca: Lei 8.742 Arts. 20–21 e LBI Art. 2º** | Perícia, Previdência e Trabalho | Lei seca / NR | 45 | G P | Marque no checklist cada parágrafo do Art. 20 (renda, família, longo prazo, avaliação). |
| **Questões: seguridade, BPC e LBI (30)** | Perícia, Previdência e Trabalho | Questões | 60 | G P | Filtro: Legislação Previdenciária → seguridade + Assistência Social → BPC/LOAS + Estatuto da Pessoa com Deficiência. |
| ★ **PAF I: orifício de entrada, saída e trajeto** | Medicina Legal | Teoria | 75 | G L | Orla de escoriação/contusão e de enxugo; zonas de tatuagem (grãos incrustados — não sai com lavagem), esfumaçamento (fuligem — sai) e chamuscamento; orifício de saída (maior, irregular, bordas evertidas, sem orlas). |
| ★ **PAF II: distância do disparo e sinais epônimos** | Medicina Legal | Teoria | 60 | G L | Encostado (câmara de mina de Hoffmann, sinal de Werkgaertner, sinal de Benassi), curta distância (efeitos secundários do tiro) e longa distância; funil de Bonnet no osso; projéteis múltiplos (rosa de tiro). |
| ★ **Energias físicas e químicas** | Medicina Legal | Teoria | 60 | G L | Queimaduras (1º a 4º grau, flictena vital), carbonização (atitude de pugilista); eletroplessão (marca de Jellinek) × fulguração (Lichtenberg) × fulminação; baropatias; cáusticos coagulantes × liquefacientes; vitriolagem. |
| ★ **Lei seca: CPP 169–175** | Medicina Legal | Lei seca / NR | 30 | G L | Exame do local, perícias de laboratório (guardar material para contraprova), instrumentos do crime. |
| **Questões: PAF e energias (25)** | Medicina Legal | Questões | 45 | G L | Filtro: Traumatologia Forense → armas de fogo, energias físicas e químicas. |
| ★ **Urgência: PCR, choque e sepse** | Clínica Médica e Urgência | Teoria | 75 | G C P | BLS/ACLS (ritmos chocáveis × não chocáveis, drogas e doses), causas reversíveis; reconhecimento e pacote da primeira hora da sepse; tipos de choque. |
| ★ **Urgência: síndrome coronariana aguda e AVC** | Clínica Médica e Urgência | Teoria | 75 | G C P | ECG na dor torácica, conduta inicial, angioplastia × trombólise (tempos-alvo); AVC: reconhecimento, TC e janela de trombólise. |
| ★ **Clínica: insuficiência cardíaca e fibrilação atrial** | Clínica Médica e Urgência | Teoria | 45 | G C P | Classificação funcional (NYHA — usada também na perícia de cardiopatia), terapia que modifica prognóstico, anticoagulação (CHA2DS2-VASc). |
| **Questões: urgência e cardiologia (30)** | Clínica Médica e Urgência | Questões | 60 | G C P | Bancas do Sul, IBFC e AOCP. |
| ★ **Decreto 7.508/11 e PNAB** | SUS, Epidemiologia e Ética Médica | Teoria | 60 | G P L C | Região de Saúde (serviços mínimos), Portas de Entrada, CIT/CIB/CIR, COAP, RENASES, RENAME; PNAB: ESF, composição de equipes, população adscrita, atribuições. |
| **Questões: Decreto 7.508 e PNAB** | SUS, Epidemiologia e Ética Médica | Questões | 45 | G P L C | 30 questões de SUS organizativo: regiões de saúde, RAS, portas de entrada, COAP e PNAB. |
| **Aprofundamento: NR-15 e NR-16 — insalubridade e periculosidade** | Perícia, Previdência e Trabalho | Teoria | 60 | P | Graus de insalubridade (10/20/40%), ruído (85 dB(A)/8 h), agentes biológicos (Anexo 14), periculosidade (30%), não cumulatividade e caracterização por perícia (CLT 195). |
| **Aprofundamento: Decreto 6.214/2007 (regulamento do BPC)** | Perícia, Previdência e Trabalho | Lei seca / NR | 45 | P | Requerimento, avaliação da deficiência e do grau de impedimento, revisão, suspensão e cessação; BPC não gera pensão nem 13º. |
| **Aprofundamento: atlas de PAF e casos de distância de tiro** | Medicina Legal | Revisão | 45 | L | Classifique 6 imagens de orifícios (entrada/saída; encostado/curta/longa distância) e justifique. |
| **Aprofundamento: 30 questões de PAF (bancas policiais)** | Medicina Legal | Questões | 60 | L | PAF é o tema campeão de Médico Legista; faça até zerar os erros de sinais epônimos. |
| **Clínica: zoonoses do Sul — raiva, leptospirose e hantavirose** | Clínica Médica e Urgência | Teoria | 75 | C | Profilaxia pós-exposição da raiva (tipo de exposição × animal), leptospirose (pós-enchentes, doxiciclina, notificação), hantavirose (quadro cardiopulmonar). |
| **Clínica: acidentes por animais peçonhentos** | Clínica Médica e Urgência | Teoria | 60 | C | Loxoscelismo (aranha-marrom, forma cutânea × cutâneo-visceral), ofidismo (botrópico, crotálico, elapídico — soroterapia), escorpionismo. |
| **Bateria da semana — banca nacional (40 questões)** _(dia 6)_ | SUS, Epidemiologia e Ética Médica | Questões | 90 | G P L C | Temas da semana da sua trilha filtrando CEBRASPE, IBFC e Instituto AOCP. |

**Conhecimentos Básicos da semana**

| Bloco | Nível | Tipo | Min | Trilhas |
|---|---|---|---|---|
| Português: Regência verbal e nominal | Núcleo | Teoria | 40 | G P L C |
| Português: Crase | Núcleo | Teoria | 40 | G P L C |
| Português: coesão e conectores | Complemento | Questões | 30 | G P L C |
| Matemática: Porcentagem, aumentos e descontos sucessivos | Complemento | Teoria | 40 | G L C |
| Matemática: Matemática aplicada à saúde (dose por peso, gotejamento, IMC, diluições) | Reforço | Teoria | 30 | G L C |
| Raciocínio Lógico: Tautologia, contradição e contingência | Complemento | Teoria | 30 | G P L C |
| Informática: Editor de textos (Word/Writer) | Complemento | Teoria | 35 | G P L C |
| Informática: Apresentações (PowerPoint/Impress) | Reforço | Teoria | 25 | G P L C |
| Constitucional: Direitos sociais, nacionalidade e direitos políticos | Complemento | Teoria | 30 | G P L C |
| Administrativo: Poderes administrativos e abuso de poder | Complemento | Teoria | 30 | G P L |
| Servidor público: Lei 8.112: vencimento, vantagens, férias, licenças e afastamentos | Complemento | Teoria | 30 | G P L C |
| Ética e transparência: Conflito de interesses (Lei 12.813/2013) | Complemento | Teoria | 25 | G P L |
| Legislação: Estatuto da Criança e do Adolescente (Lei 8.069/1990) | Complemento | Teoria | 30 | G L C |
| História e Geografia do Sul: Rio Grande do Sul: história | Reforço | Teoria | 25 | G L C |
| Criminalística: Local de crime: isolamento, preservação e levantamento | Complemento | Teoria | 35 | G L |
| Atualidades: Meio ambiente, clima e desastres | Reforço | Teoria | 20 | G C |
| Penal e Processo Penal: Inquérito policial e ação penal | Complemento | Teoria | 30 | G L |

#### Semana 4 — Acidente do trabalho e NRs essenciais, tanatologia, saúde da mulher e Simulado 1

**Objetivo:** Dominar Lei 8.213 Arts. 19–23 (acidente do trabalho e CAT), as NRs citadas nos editais periciais (01, 17, 32), a tanatologia, a saúde da mulher e da criança e a ética médica; fechar o mesociclo com o Simulado 1.

**Bancas-foco:** FUNDATEC, FEPESE, CEBRASPE · **Meta de questões:** 220

**Carga planejada:** G 20h30→24h50 · P 19h50→19h50 · L 19h20→19h20 · C 17h10→17h10

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Lei 8.213 Arts. 19–23: acidente do trabalho e CAT** | Perícia, Previdência e Trabalho | Teoria | 75 | G P | Acidente típico; doença profissional × do trabalho e exclusões (§1º do Art. 20); equiparados (Art. 21, inclusive concausa e trajeto); NTEP (21-A); CAT (prazo e quem pode emitir); data da doença (Art. 23); estabilidade de 12 meses (Art. 118). |
| ★ **NR-01 (GRO/PGR e riscos psicossociais), NR-17 e NR-32** | Perícia, Previdência e Trabalho | Teoria | 60 | G P | GRO e PGR, inventário de riscos e plano de ação, fatores psicossociais (vigência 26/05/2026); NR-17: AEP × AET e teletrabalho; NR-32: risco biológico, vacinação, perfurocortantes e radiação ionizante. |
| ★ **Lei seca: Lei 8.213 Arts. 19–23 e 118** | Perícia, Previdência e Trabalho | Lei seca / NR | 45 | G P | Marque no checklist: emitentes da CAT, prazos, exclusões do conceito de doença do trabalho. |
| **Questões: acidente do trabalho e NRs (30)** | Perícia, Previdência e Trabalho | Questões | 60 | G P | Acidente do trabalho, CAT e NR-32 são recorrentes em perícia, hospitais e prefeituras. |
| ★ **Tanatologia I: diagnóstico de morte e fenômenos abióticos** | Medicina Legal | Teoria | 75 | G L | Sinais imediatos; consecutivos: desidratação (Sommer-Larcher), resfriamento, livores (aparecimento e fixação), rigidez (Lei de Nysten) e espasmo cadavérico. |
| ★ **Tanatologia II: fenômenos transformativos e cronotanatognose** | Medicina Legal | Teoria | 75 | G L | Autólise; putrefação (coloração — mancha verde abdominal; gasoso — circulação póstuma de Brouardel; coliquativo; esqueletização); maceração; mumificação, saponificação, corificação; Declaração de Óbito em morte violenta (Res. CFM 1.779/2005). |
| ★ **CP Arts. 121–128 e CPP 162–167** | Medicina Legal | Teoria | 45 | G L | Homicídio (formas), feminicídio (Art. 121-A), induzimento ao suicídio/automutilação, infanticídio, aborto; autópsia após 6 h, exame externo em morte violenta, exumação. |
| ★ **Lei seca: CP 121–128** | Medicina Legal | Lei seca / NR | 30 | G L | Leitura com atenção a qualificadoras e às hipóteses de aborto legal. |
| **Questões: tanatologia e crimes contra a vida (25)** | Medicina Legal | Questões | 45 | G L | Filtro: Tanatologia Forense + Direito Penal → crimes contra a vida. |
| ★ **Clínica: saúde da mulher e pré-natal** | Clínica Médica e Urgência | Teoria | 75 | G C P | Pré-natal de baixo risco (consultas, exames por trimestre, suplementação), rastreamento de câncer de colo e de mama. |
| ★ **Clínica: saúde da criança e PNI** | Clínica Médica e Urgência | Teoria | 60 | G C P | Puericultura, marcos do desenvolvimento, calendário vacinal do PNI, IRA e doença diarreica (planos A, B, C). |
| **Questões: saúde da mulher e da criança (30)** | Clínica Médica e Urgência | Questões | 60 | G C P | Bancas do Sul. |
| ★ **Ética médica e documentos** | SUS, Epidemiologia e Ética Médica | Teoria | 60 | G P L C | CEM: princípios, sigilo (Arts. 73–79), perícia e auditoria (Arts. 92–98); Res. CFM 2.381/2024 (tipos de documentos e requisitos); Res. CFM 1.779/2005 (DO); Lei 14.289/2022 (sigilo da condição de saúde). |
| **Questões: ética médica e documentos** | SUS, Epidemiologia e Ética Médica | Questões | 45 | G P L C | 25 questões de Código de Ética Médica, sigilo e documentos médicos (atestado, declaração, relatório). |
| **Aprofundamento: leitura integral da NR-32** | Perícia, Previdência e Trabalho | Lei seca / NR | 60 | P | Texto oficial, incluindo o anexo de perfurocortantes. |
| **Aprofundamento: CLT 154–201 e responsabilidade do empregador** | Perícia, Previdência e Trabalho | Teoria | 60 | P | Deveres da empresa e do empregado, exames médicos (Art. 168), insalubridade/periculosidade; responsabilidade objetiva × subjetiva em acidentes e doenças ocupacionais. |
| **Aprofundamento: cronotanatognose aplicada** | Medicina Legal | Revisão | 45 | L | Resolva 5 casos estimando o intervalo post mortem a partir de livores, rigidez, temperatura e putrefação, citando a faixa do autor. |
| **Aprofundamento: 30 questões de tanatologia (bancas policiais)** | Medicina Legal | Questões | 60 | L | Fenômenos cadavéricos e cronotanatognose. |
| **Clínica: planejamento reprodutivo e climatério** | Clínica Médica e Urgência | Teoria | 60 | C | Métodos contraceptivos (critérios de elegibilidade), DIU, contracepção de emergência; climatério e terapia hormonal. |
| **Clínica: adolescência e violência** | Clínica Médica e Urgência | Teoria | 45 | C | ECA, notificação de violência interpessoal/autoprovocada, sinais de alerta de abuso. |
| ★ **SIMULADO 1 (fim do Mês 1): 60 questões em 3 h** _(dia 6)_ | SUS, Epidemiologia e Ética Médica | Simulado | 180 | G P L C | Monte o simulado com a proporção da sua trilha e a banca-alvo. Tempo real, sem consulta, sem pausa. Registre como "simulado" na Central de Questões. |

**Conhecimentos Básicos da semana**

| Bloco | Nível | Tipo | Min | Trilhas |
|---|---|---|---|---|
| Português: Pontuação | Núcleo | Teoria | 40 | G P L C |
| Português: Termos da oração (período simples) | Núcleo | Teoria | 35 | G P L C |
| Simulado de básicas nº 1 | Núcleo | Simulado | 60 | G P L C |
| Matemática: Juros simples e compostos | Complemento | Teoria | 40 | G L C |
| Matemática: Funções: afim, quadrática, exponencial e logarítmica (noções) | Reforço | Teoria | 30 | G L C |
| Raciocínio Lógico: Argumentos, validade e silogismos | Complemento | Teoria | 35 | G P L C |
| Informática: Planilhas (Excel/Calc): fórmulas, referências e funções | Complemento | Teoria | 40 | G P L C |
| Informática: Linux (noções) | Reforço | Teoria | 25 | G P L C |
| Constitucional: Administração pública na Constituição (arts. 37 a 41) | Complemento | Teoria | 35 | G P L C |
| Administrativo: Atos administrativos | Complemento | Teoria | 40 | G P L |
| Servidor público: Lei 8.112: deveres, proibições, penalidades, sindicância e PAD | Complemento | Teoria | 35 | G P L C |
| Ética e transparência: Lei de Acesso à Informação (Lei 12.527/2011) | Complemento | Teoria | 30 | G P L |
| Legislação: Estatuto da Pessoa Idosa (Lei 10.741/2003) | Complemento | Teoria | 25 | G L C |
| História e Geografia do Sul: Rio Grande do Sul: geografia e economia | Reforço | Teoria | 25 | G L C |
| Criminalística: Vestígios, evidências e indícios | Complemento | Teoria | 30 | G L |
| Atualidades: Economia e sociedade brasileira | Reforço | Teoria | 20 | G C |
| Inglês: Gramática instrumental: tempos verbais, modais, voz passiva e conectivos | Complemento | Teoria | 25 | G L |
| Penal e Processo Penal: Prisões, medidas cautelares e liberdade provisória | Complemento | Teoria | 30 | G L |

### Mês 2 — Aprofundamento e engenharia reversa de bancas

_Dominar nexo causal/NTEP, doenças relacionadas ao trabalho, perícia em saúde mental e do servidor público, asfixiologia, sexologia, antropologia e psicopatologia forense, infectologia, saúde mental, ortopedia e urgência — treinando o estilo de cada banca (CEBRASPE, FUNDATEC, FEPESE, regionais do Sul, FGV, VUNESP, AOCP, IBFC)._

#### Semana 5 — Nexo causal e NTEP, asfixiologia, infectologia e epidemiologia

**Objetivo:** Estabelecer nexo causal (Schilling, Anexo II, NTEP, Res. CFM 2.183/2018), dominar as asfixias e as doenças infecciosas de notificação; engenharia reversa de FUNDATEC e FEPESE.

**Bancas-foco:** FUNDATEC, FEPESE · **Meta de questões:** 240

**Carga planejada:** G 19h20→23h25 · P 18h55→18h55 · L 17h25→17h25 · C 16h25→16h25

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Nexo causal: Schilling, Anexo II, NTEP e Res. CFM 2.183/2018** | Perícia, Previdência e Trabalho | Teoria | 75 | G P | Nexo profissional (Listas A e B), NTEP (Lista C: CNAE × CID) e nexo individual; classificação de Schilling (I, II, III); critérios de Bradford Hill; o que o médico deve considerar para o nexo; contestação do NTEP pela empresa. |
| ★ **LDRT, CAT no eSocial e notificação de agravos relacionados ao trabalho** | Perícia, Previdência e Trabalho | Teoria | 60 | G P | Lista de Doenças Relacionadas ao Trabalho (Portaria GM/MS 1.999/2023: transtornos mentais, Burnout); CAT (evento S-2210) inicial, de reabertura e de óbito; notificação no SINAN; RENAST e CEREST. |
| ★ **Lei seca: Decreto 3.048 (Anexo II, Art. 337) e CLT 154–201** | Perícia, Previdência e Trabalho | Lei seca / NR | 45 | G P | Leitura com marcação no checklist; atenção ao FAP/RAT e aos exames médicos da CLT (Art. 168). |
| **Questões: nexo, NTEP e legislação — FUNDATEC/FEPESE (30)** | Perícia, Previdência e Trabalho | Questões | 60 | G P | Analise o padrão: como cada banca cobra NTEP, CAT e doença do trabalho. |
| ★ **Asfixiologia I: classificação e constrição do pescoço** | Medicina Legal | Teoria | 75 | G L | Sinais gerais (cianose, petéquias de Tardieu, congestão); enforcamento (sulco oblíquo, descontínuo, sinal de Amussat) × estrangulamento (sulco horizontal, contínuo) × esganadura (estigmas ungueais; sempre homicida). |
| ★ **Asfixiologia II: afogamento, sufocação e gases** | Medicina Legal | Teoria | 60 | G L | Afogamento (cogumelo de espuma, manchas de Paltauf, diatomáceas; azul × branco), sufocação direta e indireta (máscara de Morestin), soterramento, confinamento, CO. |
| ★ **Lei seca: CPP 176–184** | Medicina Legal | Lei seca / NR | 30 | G L | Quesitos, precatória, divergência entre peritos, juiz não adstrito ao laudo (Art. 182). |
| **Questões: asfixias (25)** | Medicina Legal | Questões | 45 | G L | Filtro: Asfixiologia Forense — inclua FUNDATEC e FEPESE se houver. |
| ★ **Infectologia: HIV e sífilis** | Clínica Médica e Urgência | Teoria | 75 | G C P | Diagnóstico (testes rápidos), TARV inicial, PEP e PrEP; sífilis adquirida, gestacional e congênita (tratamento e seguimento). |
| ★ **Infectologia: arboviroses e hepatites virais** | Clínica Médica e Urgência | Teoria | 75 | G C P | Dengue (classificação de risco e manejo por grupos A–D), chikungunya, zika; hepatites B e C (rastreamento, marcadores, encaminhamento). |
| ★ **Infectologia: influenza, COVID-19 e meningites** | Clínica Médica e Urgência | Teoria | 60 | G C P | Síndrome gripal × SRAG, oseltamivir (indicações), síndrome pós-COVID, meningites (quimioprofilaxia de contatos). |
| **Questões: infectologia — FUNDATEC/FEPESE (30)** | Clínica Médica e Urgência | Questões | 60 | G C P | Cargos Médico/ESF e Perito Médico. |
| ★ **Epidemiologia: indicadores de saúde e vigilância** | SUS, Epidemiologia e Ética Médica | Teoria | 60 | G P L C | Coeficientes de mortalidade e morbidade, incidência × prevalência, transição epidemiológica e demográfica; vigilância epidemiológica, sanitária, ambiental e do trabalhador. |
| **Questões: epidemiologia** | SUS, Epidemiologia e Ética Médica | Questões | 45 | G P L C | 25 questões de indicadores de saúde, transição epidemiológica e desenhos de estudo. |
| **Aprofundamento: estabeleça o nexo em 5 casos** | Perícia, Previdência e Trabalho | Revisão | 60 | P | Para cada caso, aplique Schilling, verifique Listas A/B/C e conclua: nexo profissional, NTEP, individual ou ausência de nexo. |
| **Aprofundamento: indenizações e prescrição em acidentes do trabalho** | Perícia, Previdência e Trabalho | Teoria | 45 | P | Danos morais e materiais, teoria do risco, prazos de prescrição e decadência em processos trabalhistas e previdenciários — tópicos do edital de Perito Médico Federal. |
| **Aprofundamento: suicídio × homicídio × acidente nas asfixias** | Medicina Legal | Revisão | 45 | L | Monte uma tabela de elementos de diferenciação (local, nó, lesões de defesa, intoxicações associadas). |
| **Aprofundamento: 30 questões de asfixias (bancas policiais)** | Medicina Legal | Questões | 60 | L | Até zerar erros de sinais epônimos. |
| **Aprofundamento: leitura dirigida (França) — asfixiologia** | Medicina Legal | Teoria | 45 | L | Classificação e sinais epônimos literais. |
| **Clínica: vacinação do adulto e do profissional de saúde** | Clínica Médica e Urgência | Teoria | 45 | C | Calendário do adulto, hepatite B (anti-HBs), dT/dTpa, influenza. |
| **Vigilância no município: notificação imediata × semanal** | SUS, Epidemiologia e Ética Médica | Teoria | 45 | C | Lista nacional de notificação compulsória, investigação de surtos e fluxo do SINAN na unidade de saúde. |
| **Engenharia reversa: 50 questões FUNDATEC + FEPESE** _(dia 6)_ | SUS, Epidemiologia e Ética Médica | Questões | 120 | G P L C | Resolva e classifique cada questão: literal × aplicada, assunto, pegadinha. Anote os 5 padrões mais frequentes no campo de notas deste bloco. |

**Conhecimentos Básicos da semana**

| Bloco | Nível | Tipo | Min | Trilhas |
|---|---|---|---|---|
| Português: Período composto: coordenação e subordinação | Núcleo | Teoria | 40 | G P L C |
| Português: Colocação pronominal | Núcleo | Teoria | 35 | G P L C |
| Português: reescrita de frases | Complemento | Questões | 30 | G P L C |
| Matemática: Equações, inequações e sistemas (1º e 2º graus) | Complemento | Teoria | 40 | G L C |
| Matemática: Progressões aritméticas e geométricas | Reforço | Teoria | 30 | G L C |
| Raciocínio Lógico: Quantificadores e diagramas lógicos | Complemento | Teoria | 35 | G P L C |
| Informática: Internet, intranet, extranet, navegadores e URLs | Complemento | Teoria | 35 | G P L C |
| Informática: SEI — Sistema Eletrônico de Informações | Reforço | Teoria | 25 | G P L C |
| Constitucional: Organização do Estado: União, estados e municípios | Complemento | Teoria | 30 | G P L C |
| Administrativo: Agentes públicos: espécies, cargo, emprego e função | Complemento | Teoria | 30 | G P L |
| Servidor público: Estatutos dos servidores do PR, SC e RS | Complemento | Teoria | 30 | G P L C |
| Ética e transparência: LGPD (Lei 13.709/2018) e dados pessoais de saúde | Complemento | Teoria | 30 | G P L |
| Legislação: Estatuto da Igualdade Racial (Lei 12.288/2010) e crimes de racismo | Complemento | Teoria | 25 | G L C |
| História e Geografia do Sul: Santa Catarina: história | Reforço | Teoria | 25 | G L C |
| Criminalística: Balística forense | Complemento | Teoria | 30 | G L |
| Discursiva: Texto dissertativo-argumentativo | Complemento | Teoria | 40 | G L |
| Atualidades: Política e instituições | Reforço | Teoria | 20 | G C |
| Penal e Processo Penal: Provas no processo penal (CPP, arts. 155 a 250) | Complemento | Teoria | 30 | G L |

#### Semana 6 — Doenças do trabalho e saúde mental, sexologia forense e psiquiatria

**Objetivo:** Dominar LER/DORT, PAIR, pneumoconioses e Burnout; sexologia forense; e a saúde mental que domina a perícia (depressão, ansiedade, bipolar, psicoses, substâncias); engenharia reversa das bancas regionais.

**Bancas-foco:** Objetiva, FURB, NC-UFPR, FAUEL · **Meta de questões:** 240

**Carga planejada:** G 19h25→23h25 · P 18h40→18h40 · L 18h10→18h10 · C 16h25→16h25

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Doenças relacionadas ao trabalho I: LER/DORT, PAIR e pneumoconioses** | Perícia, Previdência e Trabalho | Teoria | 75 | G P | LER/DORT (De Quervain, epicondilites, túnel do carpo, manguito rotador, dedo em gatilho — testes clínicos); PAIR (características audiométricas, diagnóstico diferencial); silicose, asbestose e classificação radiológica da OIT. |
| ★ **Burnout, assédio e transtornos mentais relacionados ao trabalho** | Perícia, Previdência e Trabalho | Teoria | 60 | G P | Burnout (CID-11 QD85) e outros transtornos da LDRT; assédio moral e sexual (prevenção na CIPA, Lei 14.457/2022); avaliação do nexo em saúde mental. |
| ★ **Leitura dirigida: critérios de nexo dos protocolos do Ministério da Saúde** | Perícia, Previdência e Trabalho | Lei seca / NR | 30 | G P | Releia apenas os critérios diagnósticos e de nexo de PAIR, LER/DORT e pneumoconioses. |
| **Questões: doenças do trabalho e saúde mental ocupacional (30)** | Perícia, Previdência e Trabalho | Questões | 60 | G P | Bancas regionais do Sul + CEBRASPE. |
| ★ **Sexologia I: crimes sexuais e himenologia** | Medicina Legal | Teoria | 75 | G L | CP 213 (estupro), 215, 217-A (vulnerável); conjunção carnal × ato libidinoso; tipos de hímen, hímen complacente, rotura × entalhe; exame e coleta de vestígios. |
| ★ **Sexologia II: gravidez, parto, aborto e infanticídio** | Medicina Legal | Teoria | 60 | G L | Sinais de gravidez e de parto recente; aborto (CP 124–128, ADPF 54); infanticídio (CP 123 — estado puerperal) e docimásia hidrostática de Galeno. |
| ★ **Lei seca: CP 213–217-A e 123–128** | Medicina Legal | Lei seca / NR | 30 | G L | Atenção aos elementos de cada tipo penal. |
| **Questões: sexologia forense (25)** | Medicina Legal | Questões | 45 | G L | Filtro: Sexologia Forense + Direito Penal → crimes contra a dignidade sexual. |
| ★ **Saúde mental: depressão, ansiedade e risco de suicídio** | Clínica Médica e Urgência | Teoria | 75 | G C P | Diagnóstico e tratamento inicial de depressão e transtornos de ansiedade, avaliação de risco de suicídio, uso racional de antidepressivos e benzodiazepínicos — os diagnósticos mais frequentes na perícia por incapacidade. |
| ★ **Saúde mental: transtorno bipolar, psicoses e uso de substâncias** | Clínica Médica e Urgência | Teoria | 60 | G C P | Transtorno bipolar (estabilizadores), esquizofrenia e outros transtornos psicóticos, álcool e outras drogas, transtornos de personalidade; RAPS e internações (Lei 10.216/2001). |
| ★ **Clínica: saúde do idoso** | Clínica Médica e Urgência | Teoria | 45 | G C P | Polifarmácia (critérios de Beers), quedas, demência, avaliação multidimensional. |
| **Questões: saúde mental e idoso — Objetiva/FURB/NC-UFPR (30)** | Clínica Médica e Urgência | Questões | 60 | G C P | Bancas regionais. |
| ★ **RAPS e Rede de Cuidados à Pessoa com Deficiência** | SUS, Epidemiologia e Ética Médica | Teoria | 45 | G P L C | Componentes da Rede de Atenção Psicossocial (CAPS, leitos, residências terapêuticas) e da Rede de Cuidados à Pessoa com Deficiência. |
| **Questões: Direito Administrativo e Lei 8.112** | Conhecimentos Básicos e Gerais | Questões | 45 | G P L C | Agentes públicos, regime jurídico do servidor federal, princípios da administração. |
| ★ **Básicas: Raciocínio Lógico e Informática** | Conhecimentos Básicos e Gerais | Teoria | 45 | G P L C | Porcentagem, regra de três, proposições e equivalências; segurança da informação (phishing, malware, backup). |
| **Aprofundamento: perícia em saúde mental** | Perícia, Previdência e Trabalho | Teoria | 60 | P | Diretrizes de Apoio à Decisão Médico-Pericial em Psiquiatria (INSS): exame do estado mental, gravidade × incapacidade, tempo estimado de afastamento, simulação e dissimulação. |
| **Aprofundamento: toxicologia ocupacional e indicadores biológicos** | Perícia, Previdência e Trabalho | Teoria | 60 | P | Chumbo, mercúrio, benzeno, tolueno, n-hexano, organofosforados, CO; Quadros 1 e 2 do Anexo I da NR-07. |
| **Aprofundamento: perícia em violência sexual** | Medicina Legal | Teoria | 45 | L | Lei 12.845/2013 (atendimento obrigatório e integral pelo SUS) e Decreto 7.958/2013 (registro de informações e coleta de vestígios na rede SUS). |
| **Aprofundamento: 30 questões de sexologia e aborto** | Medicina Legal | Questões | 60 | L | Bancas policiais. |
| **Aprofundamento: infanticídio e docimásias** | Medicina Legal | Teoria | 45 | L | Estado puerperal, prova de vida extrauterina, docimásia hidrostática de Galeno e suas fases. |
| **Clínica: cefaleia, tontura e epilepsia** | Clínica Médica e Urgência | Teoria | 60 | C | Sinais de alarme da cefaleia, enxaqueca × tensional, vertigem periférica × central, manejo inicial da epilepsia. |
| **Clínica: cuidados paliativos e atenção domiciliar** | Clínica Médica e Urgência | Teoria | 45 | C | Controle de sintomas, escada analgésica, comunicação de más notícias. |
| **Engenharia reversa: 50 questões Objetiva, FURB, NC-UFPR e FAUEL** _(dia 6)_ | SUS, Epidemiologia e Ética Médica | Questões | 120 | G P L C | Mesma análise de padrões da semana anterior; compare com FUNDATEC/FEPESE. |

**Conhecimentos Básicos da semana**

| Bloco | Nível | Tipo | Min | Trilhas |
|---|---|---|---|---|
| Português: Coesão, coerência e conectores | Núcleo | Teoria | 40 | G P L C |
| Português: Semântica e figuras de linguagem | Núcleo | Teoria | 35 | G P L C |
| Português: interpretação de texto (textos longos) | Complemento | Questões | 30 | G P L C |
| Matemática: Estatística descritiva, tabelas e gráficos | Complemento | Teoria | 40 | G L C |
| Raciocínio Lógico: Sequências lógicas de números, letras e figuras | Complemento | Teoria | 30 | G P L C |
| Informática: Correio eletrônico | Complemento | Teoria | 30 | G P L C |
| Informática: Noções de inteligência artificial | Reforço | Teoria | 25 | G P L C |
| Constitucional: Organização dos Poderes e controle de constitucionalidade (noções) | Complemento | Teoria | 30 | G P L C |
| Administrativo: Responsabilidade civil do Estado | Complemento | Teoria | 30 | G P L |
| Servidor público: EBSERH: Lei 12.550/2011, estatuto social e código de ética | Reforço | Teoria | 25 | G P L C |
| Ética e transparência: Prevenção e enfrentamento do assédio na administração pública | Complemento | Teoria | 25 | G P L |
| Legislação: Estatuto da Pessoa com Deficiência (Lei 13.146/2015) | Complemento | Teoria | 25 | G L C |
| História e Geografia do Sul: Santa Catarina: geografia e economia | Reforço | Teoria | 25 | G L C |
| Criminalística: Papiloscopia e identificação humana | Complemento | Teoria | 30 | G L |
| Discursiva: Laudo, parecer e relatório na prova discursiva | Complemento | Teoria | 40 | G L |
| Atualidades: Tecnologia e inteligência artificial | Reforço | Teoria | 20 | G C |
| Inglês: Leitura e interpretação de textos técnicos em inglês | Complemento | Teoria | 30 | G L |
| Penal e Processo Penal: Crimes contra a administração pública | Complemento | Teoria | 30 | G L |
| Raciocínio Lógico: Raciocínio científico: método, hipóteses, causalidade e vieses | Complemento | Teoria | 30 | G P L C |

#### Semana 7 — Perícia do servidor público, ortopedia pericial, antropologia e psicopatologia forense

**Objetivo:** Dominar licenças, junta médica, readaptação e aposentadoria do servidor (Lei 8.112 e RPPS), as doenças ortopédicas que mais geram perícia, a antropologia e a psicopatologia forense; treinar o estilo CEBRASPE/FGV.

**Bancas-foco:** CEBRASPE, FGV · **Meta de questões:** 250

**Carga planejada:** G 19h15→23h45 · P 19h05→19h05 · L 18h→18h · C 15h45→15h45

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Perícia do servidor público: Lei 8.112, junta médica e RPPS** | Perícia, Previdência e Trabalho | Teoria | 75 | G P | Licença para tratamento de saúde (perícia oficial; junta médica acima de 120 dias em 12 meses), licença por doença em familiar, acidente em serviço, readaptação, licença de até 24 meses antes da aposentadoria por invalidez, doenças graves do Art. 186; perícia em regimes próprios estaduais e municipais. |
| ★ **Doenças relacionadas ao trabalho II: dermatoses, câncer e intoxicações** | Perícia, Previdência e Trabalho | Teoria | 60 | G P | Dermatite de contato irritativa × alérgica (cimento/cromo, níquel, borracha), cloracne; carcinógenos ocupacionais (benzeno, asbesto, sílica); intoxicações por metais e solventes. |
| ★ **Lei seca: Lei 8.112 — saúde do servidor** | Perícia, Previdência e Trabalho | Lei seca / NR | 45 | G P | Arts. 24, 83, 186, 188, 202–206 e 211–214 no checklist. |
| **Questões: perícia do servidor e doenças ocupacionais — estilo CEBRASPE (30)** | Perícia, Previdência e Trabalho | Questões | 60 | G P | Certo/Errado: marque só com convicção; anote as generalizações que derrubaram você. |
| ★ **Antropologia forense** | Medicina Legal | Teoria | 75 | G L | Identidade × identificação; médico-legal (espécie, sexo, idade, estatura, sinais individuais, odontolegal, DNA) × judiciária (datiloscopia — Vucetich); requisitos de um bom método. |
| ★ **Psicopatologia forense** | Medicina Legal | Teoria | 60 | G L | CP 26 (critério biopsicológico), semi-imputabilidade, CP 27 e 28 (emoção, paixão, embriaguez), medida de segurança, incidente de insanidade (CPP 149–154), capacidade civil. |
| ★ **Toxicologia forense: embriaguez e drogas de abuso** | Medicina Legal | Teoria | 45 | G L | Fases da embriaguez alcoólica, alcoolemia e exame clínico; CTB Arts. 165 e 306; principais drogas de abuso. |
| **Questões: antropologia, psicopatologia e embriaguez — FGV/CEBRASPE (25)** | Medicina Legal | Questões | 45 | G L | Treine leitura de enunciado longo (FGV) e Certo/Errado (CEBRASPE). |
| ★ **Ortopedia e reumato que mais geram perícia** | Clínica Médica e Urgência | Teoria | 75 | G C P | Lombalgia e lombociatalgia (sinais de alerta), cervicalgia, ombro doloroso, gonartrose, túnel do carpo, gota e osteoartrite: diagnóstico clínico, exames que realmente mudam conduta e tempo de recuperação. |
| ★ **Clínica: nefro e gastro** | Clínica Médica e Urgência | Teoria | 75 | G C P | DRC (estadiamento por TFG e albuminúria, nefroproteção), ITU, DRGE, dispepsia e H. pylori, esteatose e cirrose. |
| ★ **Clínica: tireoide e obesidade** | Clínica Médica e Urgência | Teoria | 45 | G C P | Hipo e hipertireoidismo, obesidade (abordagem e farmacoterapia). |
| **Questões: clínica — CEBRASPE/FGV (30)** | Clínica Médica e Urgência | Questões | 60 | G C P | Casos clínicos longos. |
| ★ **Epidemiologia: desenhos de estudo e testes diagnósticos** | SUS, Epidemiologia e Ética Médica | Teoria | 60 | G P L C | Coorte, caso-controle, transversal e ensaio clínico; risco relativo e razão de chances; sensibilidade, especificidade e valores preditivos. |
| **Português: interpretação de texto (FGV)** | Conhecimentos Básicos e Gerais | Questões | 45 | G P L C | 10 questões de interpretação com textos longos. |
| **Aprofundamento: Manual de Perícia Oficial em Saúde do Servidor** | Perícia, Previdência e Trabalho | Teoria | 60 | P | Leitura dirigida dos capítulos de licenças, junta oficial, readaptação e aposentadoria; compare com o regime próprio do seu estado ou município-alvo. |
| **Aprofundamento: reabilitação profissional e retorno ao trabalho** | Perícia, Previdência e Trabalho | Teoria | 45 | P | Programa de reabilitação do INSS, adaptação do posto, readaptação, inclusão da pessoa com deficiência no trabalho. |
| **Aprofundamento: identificação em cadáveres desconhecidos e desastres** | Medicina Legal | Revisão | 45 | L | Fluxo de identificação (datiloscopia → odontologia → DNA), estimativa de sexo/idade pelo esqueleto. |
| **Aprofundamento: 30 questões de psicopatologia forense** | Medicina Legal | Questões | 60 | L | CP 26–28 em letra de lei e casos. |
| **Aprofundamento: 20 questões de antropologia forense** | Medicina Legal | Questões | 45 | L | Métodos de identificação e estimativas antropológicas. |
| **Clínica: urgências na APS** | Clínica Médica e Urgência | Teoria | 60 | C | Anafilaxia (adrenalina IM), crise hipertensiva, hipoglicemia, intoxicações exógenas. |
| **Clínica: gestação de alto risco** | Clínica Médica e Urgência | Teoria | 60 | C | Pré-eclâmpsia (sulfato de magnésio), diabetes gestacional, sífilis na gestação, critérios de encaminhamento. |
| **Engenharia reversa: 50 questões CEBRASPE (C/E) e FGV** _(dia 6)_ | SUS, Epidemiologia e Ética Médica | Questões | 120 | G P L C | Meça quantas erraria por "chute": em C/E, deixe em branco o que não souber. |

**Conhecimentos Básicos da semana**

| Bloco | Nível | Tipo | Min | Trilhas |
|---|---|---|---|---|
| Português: Compreensão e interpretação de textos | Núcleo | Teoria | 40 | G P L C |
| Português: Tipologia e gêneros textuais | Núcleo | Teoria | 35 | G P L C |
| Português: prova mista de Português | Complemento | Questões | 30 | G P L C |
| Matemática: Análise combinatória e probabilidade | Complemento | Teoria | 40 | G L C |
| Raciocínio Lógico: Associação lógica, verdades e mentiras | Complemento | Teoria | 35 | G P L C |
| Informática: Nuvem e colaboração (OneDrive, Google Drive, Microsoft 365, Teams) | Complemento | Teoria | 30 | G P L C |
| Constitucional: CF arts. 1º a 5º | Complemento | Lei seca / NR | 30 | G P L C |
| Administrativo: Improbidade administrativa (Lei 8.429/1992) | Complemento | Teoria | 35 | G P L |
| Servidor público: Lei 8.112/1990 (ou o estatuto do seu edital) | Complemento | Lei seca / NR | 30 | G P L C |
| Ética e transparência: LAI e LGPD | Complemento | Lei seca / NR | 30 | G P L |
| Legislação: Tortura (Lei 9.455/1997), abuso de autoridade (Lei 13.869/2019) e Protocolo de Istambul | Complemento | Teoria | 30 | G L C |
| História e Geografia do Sul: Paraná: história | Reforço | Teoria | 25 | G L C |
| Criminalística: Genética forense e DNA | Complemento | Teoria | 30 | G L |
| Discursiva: Critérios de correção e gestão do tempo | Complemento | Teoria | 30 | G L |
| Atualidades: Brasil e o mundo | Reforço | Teoria | 20 | G C |
| Penal e Processo Penal: Leis penais especiais: drogas, armas, trânsito e execução penal (noções) | Complemento | Teoria | 30 | G L |
| Ética e transparência: Direitos do usuário do serviço público e ouvidoria (Lei 13.460/2017) | Complemento | Teoria | 25 | G P L |

#### Semana 8 — Ética pericial, telemedicina, trauma no pronto atendimento, revisão integrada e Simulado 2

**Objetivo:** Fechar ética do perito e teleperícia, revisar integradamente incapacidade → benefício → nexo e traumatologia → tanatologia, consolidar urgência e trauma e medir a evolução com o Simulado 2.

**Bancas-foco:** VUNESP, Instituto AOCP, IBFC · **Meta de questões:** 260

**Carga planejada:** G 21h30→25h05 · P 20h35→20h35 · L 19h05→19h05 · C 17h25→17h25

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Ética do perito: CEM, resoluções do CFM e sigilo** | Perícia, Previdência e Trabalho | Teoria | 60 | G P | CEM Cap. XI (perícia e auditoria), vedações do perito, sigilo profissional e Lei 14.289/2022, responsabilidade civil e penal, combate a fraudes; LGPD aplicada à perícia. |
| ★ **Telemedicina e teleperícia** | Perícia, Previdência e Trabalho | Teoria | 45 | G P | Lei 14.510/2022 (telessaúde): princípios, consentimento, registro em prontuário; teleperícia e seus limites. |
| **Revisão integrada: incapacidade → benefício → nexo** | Perícia, Previdência e Trabalho | Revisão | 60 | G P | Refaça o fluxo de memória (DII → espécie → carência → nexo → estabilidade) e resolva 15 questões. |
| **Questões gerais de perícia e previdenciário — VUNESP/AOCP/IBFC (30)** | Perícia, Previdência e Trabalho | Questões | 60 | G P | Misture todos os temas já estudados. |
| ★ **Ética pericial** | Medicina Legal | Teoria | 60 | G L | CEM Cap. XI (Arts. 92–98), sigilo pericial, perito × assistente técnico, impedimento e suspeição de peritos. |
| ★ **Cadeia de custódia aprofundada, local de crime e exumação** | Medicina Legal | Teoria | 60 | G L | Revisão das 10 etapas com casos; isolamento e preservação do local; exumação e reconhecimento. |
| **Revisão integrada: traumatologia + tanatologia** | Medicina Legal | Revisão | 60 | G L | Refaça os cheat sheets de PAF e cronotanatognose sem consulta; resolva 15 questões. |
| **Questões gerais de Medicina Legal — VUNESP/AOCP/IBFC (25)** | Medicina Legal | Questões | 45 | G L | Misture todos os temas já estudados. |
| ★ **Trauma e intoxicações no pronto atendimento** | Clínica Médica e Urgência | Teoria | 60 | G C P | Atendimento inicial ao politraumatizado (ABCDE), escala de Glasgow, choque hemorrágico; intoxicações frequentes (organofosforados, paracetamol, benzodiazepínicos, álcool) e antídotos. |
| ★ **Clínica: anemias, anticoagulação e prescrição segura** | Clínica Médica e Urgência | Teoria | 60 | G C P | Investigação de anemias, varfarina × DOACs, interações frequentes, RENAME. |
| **Revisão: urgências (PCR, sepse, SCA, AVC, anafilaxia)** | Clínica Médica e Urgência | Revisão | 60 | G C P | Preencha de memória a tabela do cheat sheet de urgências e confira. |
| **Questões: urgência, trauma e hemato — VUNESP/AOCP/IBFC (30)** | Clínica Médica e Urgência | Questões | 60 | G C P | Todos os temas clínicos já vistos. |
| **Revisão: ética médica e documentos** | SUS, Epidemiologia e Ética Médica | Revisão | 45 | G P L C | CEM, Res. 2.381/2024 e Res. 1.779/2005 (DO). |
| **Básicas da banca-alvo: Português, RLM, ética no serviço público** | Conhecimentos Básicos e Gerais | Questões | 45 | G P L C | 15 questões no formato da banca-alvo (inclua LAI e LGPD se o edital cobrar). |
| **Aprofundamento: tabela-resumo de prazos e números** | Perícia, Previdência e Trabalho | Revisão | 60 | P | Use os cheat sheets "Perícia previdenciária" e "NRs — prazos e percentuais" e complete o que faltar. |
| **Aprofundamento: aptidão, inaptidão e retorno ao trabalho** | Perícia, Previdência e Trabalho | Teoria | 60 | P | Casos de ASO (inapto temporário × definitivo), readaptação, retorno após afastamento previdenciário, limbo previdenciário. |
| **Aprofundamento: laudo de necropsia** | Medicina Legal | Teoria | 45 | L | Estrutura do laudo, causa médica × causa jurídica da morte (homicídio, suicídio, acidente, indeterminada). |
| **Aprofundamento: 30 questões de ética pericial e documentos** | Medicina Legal | Questões | 60 | L | CEM Cap. XI e documentos médico-legais. |
| **Questões: zoonoses, peçonhentos, hanseníase e dermatoses (30)** | Clínica Médica e Urgência | Questões | 60 | C | Temas que as bancas do Sul repetem em editais municipais. |
| **Vigilância epidemiológica no município: surtos e indicadores** | SUS, Epidemiologia e Ética Médica | Teoria | 45 | C | Investigação de surtos, indicadores de saúde do município e metas pactuadas. |
| ★ **SIMULADO 2 (fim do Mês 2): 80 questões em 4 h** _(dia 6)_ | SUS, Epidemiologia e Ética Médica | Simulado | 240 | G P L C | Proporção da trilha, banca-alvo, tempo real. Compare com o Simulado 1 na Central de Questões. |

**Conhecimentos Básicos da semana**

| Bloco | Nível | Tipo | Min | Trilhas |
|---|---|---|---|---|
| Português: Reescrita e substituição de trechos | Núcleo | Teoria | 40 | G P L C |
| Português: Redação Oficial (Manual da Presidência da República) | Núcleo | Teoria | 40 | G P L C |
| Simulado de básicas nº 2 | Núcleo | Simulado | 60 | G P L C |
| Matemática: Geometria plana e espacial (áreas, volumes, Pitágoras) | Complemento | Teoria | 40 | G L C |
| Raciocínio Lógico: Conjuntos e problemas com diagramas de Venn | Complemento | Teoria | 30 | G P L C |
| Informática: Excel e planilhas | Complemento | Questões | 30 | G P L C |
| Constitucional: CF arts. 37 a 41 | Complemento | Lei seca / NR | 30 | G P L C |
| Administrativo: Processo administrativo federal (Lei 9.784/1999) | Complemento | Teoria | 30 | G P L |
| Servidor público: regime jurídico do servidor | Complemento | Questões | 30 | G P L C |
| Ética e transparência: ética, LAI e LGPD (Certo/Errado) | Complemento | Questões | 30 | G P L |
| Legislação: Direitos humanos: DUDH e Convenção Americana (Pacto de San José) | Complemento | Teoria | 25 | G L C |
| História e Geografia do Sul: Paraná: geografia e economia | Reforço | Teoria | 25 | G L C |
| Criminalística: noções de criminalística | Complemento | Questões | 30 | G L |
| Discursiva: laudo ou parecer cronometrado | Complemento | Questões | 45 | G L |
| Atualidades: atualidades da semana | Reforço | Revisão | 20 | G C |
| Inglês: textos técnicos em inglês | Complemento | Questões | 25 | G L |

### Mês 3 — Reta final e performance

_Simulados cronometrados semanais, revisão espaçada intensiva (D1, D7, D15, D30), leitura rápida de checklists e cheat sheets (benefícios, nexo, NRs, fenômenos cadavéricos, PAF, urgências) e zeramento do caderno de erros._

#### Semana 9 — Reta final I — perícia/previdência, tanatologia/traumatologia e clínica de alto rendimento

**Objetivo:** Revisão por tabelas e questões na banca-alvo; começar o zeramento do caderno de erros; Simulado 3 cronometrado.

**Bancas-foco:** Banca-alvo · **Meta de questões:** 300

**Carga planejada:** G 21h15→21h40 · P 18h05→18h05 · L 17h25→17h25 · C 14h40→14h40

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Revisão: benefícios, carência e conceitos periciais** | Perícia, Previdência e Trabalho | Revisão | 60 | G P | Cheat sheet "Perícia previdenciária" + checklist da Lei 8.213 (benefícios). |
| ★ **Revisão: NR-07, exames ocupacionais e tabela de prazos** | Perícia, Previdência e Trabalho | Revisão | 45 | G P | Itens de exames, ASO e prazos. |
| **Questões: 40 de perícia e previdenciário na banca-alvo** | Perícia, Previdência e Trabalho | Questões | 60 | G P | Tempo de prova: 2 min por questão (ou 1,5 min por item C/E). |
| ★ **Lei seca rápida: Lei 8.213 (benefícios e acidente do trabalho)** | Perícia, Previdência e Trabalho | Lei seca / NR | 30 | G P | Só os itens marcados como difíceis no checklist. |
| ★ **Revisão: fenômenos cadavéricos e cronotanatognose** | Medicina Legal | Revisão | 60 | G L | Cheat sheet completo; preencha a tabela de memória antes de conferir. |
| ★ **Revisão: traumatologia mecânica e PAF** | Medicina Legal | Revisão | 60 | G L | Cheat sheets de PAF e lesão corporal. |
| **Questões: 40 de tanatologia e traumatologia na banca-alvo** | Medicina Legal | Questões | 60 | G L | Tempo de prova. |
| ★ **Lei seca rápida: CPP 158–184** | Medicina Legal | Lei seca / NR | 30 | G L | Itens marcados como difíceis. |
| ★ **Revisão clínica: cardiometabólica e respiratória** | Clínica Médica e Urgência | Revisão | 60 | G C P | HAS, DM, dislipidemia, IC, asma, DPOC, TB. |
| ★ **Revisão clínica: infectologia e urgência** | Clínica Médica e Urgência | Revisão | 60 | G C P | HIV, sífilis, arboviroses, PCR, sepse, SCA, AVC. |
| **Questões: clínica na banca-alvo (30)** | Clínica Médica e Urgência | Questões | 60 | G C P | Tempo de prova. |
| **Revisão do SUS por questões na banca-alvo (30)** | SUS, Epidemiologia e Ética Médica | Questões | 60 | G P L C | CF, 8.080, 8.142, 7.508, PNAB. |
| ★ **Caderno de erros: zerar 25%** | SUS, Epidemiologia e Ética Médica | Caderno de erros | 60 | G P L C | Refaça as questões do caderno; marque como resolvidas as que acertar com segurança. |
| **Aprofundamento: BPC/LBI e servidor público** | Perícia, Previdência e Trabalho | Revisão | 60 | P | Checklists da Lei 8.742 e da Lei 8.112; refaça os casos de DII. |
| **Aprofundamento: 40 questões de Lei 8.213 e Decreto 3.048** | Perícia, Previdência e Trabalho | Questões | 60 | P | Banca-alvo, tempo de prova. |
| **Aprofundamento: asfixias + sexologia** | Medicina Legal | Revisão | 60 | L | Refaça a tabela comparativa de asfixias de memória. |
| **Aprofundamento: 40 questões de PAF e lesão corporal** | Medicina Legal | Questões | 60 | L | Banca-alvo, tempo de prova. |
| ★ **Revisão clínica: zoonoses, peçonhentos, hanseníase e dermatoses** | Clínica Médica e Urgência | Revisão | 60 | C | Raiva (PEP), leptospirose, loxoscelismo, hanseníase (PQT-U). |
| **Questões: SUS municipal e clínica na banca-alvo (30)** | SUS, Epidemiologia e Ética Médica | Questões | 60 | C | Inclua legislação do município do edital, se cobrada. |
| ★ **SIMULADO 3 cronometrado (prova completa)** _(dia 6)_ | SUS, Epidemiologia e Ética Médica | Simulado | 240 | G P L C | Reproduza a prova-alvo: número de questões, tempo e horário reais. Registre por disciplina. |

**Conhecimentos Básicos da semana**

| Bloco | Nível | Tipo | Min | Trilhas |
|---|---|---|---|---|
| Português: bateria da banca-alvo | Núcleo | Questões | 40 | G P L C |
| Português: flashcards de Português | Complemento | Revisão | 20 | G P L C |
| Matemática: bateria mista | Complemento | Questões | 30 | G L C |
| Raciocínio Lógico: bateria mista | Complemento | Questões | 30 | G P L C |
| Informática: bateria mista | Complemento | Questões | 30 | G P L C |
| Administrativo: Licitações e contratos (Lei 14.133/2021 — noções) | Complemento | Teoria | 30 | G P L |
| Administrativo: Direito Constitucional e Administrativo (Certo/Errado) | Complemento | Questões | 30 | G P L |
| Servidor público: lei do seu município | Complemento | Questões | 25 | G P L C |
| Ética e transparência: bateria mista | Complemento | Questões | 25 | G P L |
| Legislação: estatutos e Maria da Penha | Complemento | Questões | 25 | G L C |
| Discursiva: laudo ou parecer cronometrado | Complemento | Questões | 45 | G L |
| Atualidades: atualidades da semana | Reforço | Revisão | 20 | G C |
| Penal e Processo Penal: bateria mista | Complemento | Questões | 25 | G L |

#### Semana 10 — Reta final II — nexo e doenças do trabalho, asfixias/sexologia e ciclos de vida

**Objetivo:** Revisão por tabelas e questões; mais 25% do caderno de erros; Simulado 4.

**Bancas-foco:** Banca-alvo · **Meta de questões:** 300

**Carga planejada:** G 21h25→21h25 · P 17h25→17h25 · L 17h10→17h10 · C 14h45→14h45

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Revisão: nexo, NTEP, CAT e doenças do trabalho** | Perícia, Previdência e Trabalho | Revisão | 60 | G P | Cheat sheet "Nexo causal, NTEP e CAT"; PAIR, LER/DORT, pneumoconioses e Burnout. |
| ★ **Revisão: perícia em saúde mental e do servidor** | Perícia, Previdência e Trabalho | Revisão | 45 | G P | Gravidade × incapacidade; licenças, junta médica e readaptação. |
| **Questões: 40 de nexo, doenças do trabalho e servidor** | Perícia, Previdência e Trabalho | Questões | 60 | G P | Banca-alvo. |
| ★ **Lei seca rápida: Lei 8.742, LBI e Lei 8.112** | Perícia, Previdência e Trabalho | Lei seca / NR | 30 | G P | Itens marcados como difíceis. |
| ★ **Revisão: asfixias e sexologia** | Medicina Legal | Revisão | 60 | G L | Cheat sheet de asfixias; crimes sexuais e himenologia. |
| ★ **Revisão: antropologia, psicopatologia e embriaguez** | Medicina Legal | Revisão | 60 | G L | CP 26–28 em letra de lei; métodos de identificação. |
| **Questões: 40 de asfixias, sexologia, antropologia e psicopatologia** | Medicina Legal | Questões | 60 | G L | Banca-alvo. |
| ★ **Lei seca rápida: CP 121–129 e 213–217-A** | Medicina Legal | Lei seca / NR | 30 | G L | Itens marcados como difíceis. |
| ★ **Revisão clínica: saúde mental, mulher, criança e idoso** | Clínica Médica e Urgência | Revisão | 60 | G C P | Depressão, risco de suicídio, bipolar, psicoses; pré-natal, PNI, puericultura, polifarmácia. |
| ★ **Revisão clínica: ortopedia, nefro/gastro, endócrino e neuro** | Clínica Médica e Urgência | Revisão | 60 | G C P | Lombalgia, ombro, DRC, DRGE, tireoide, cefaleias. |
| **Questões: clínica na banca-alvo (30)** | Clínica Médica e Urgência | Questões | 60 | G C P | Tempo de prova. |
| **Questões: ética, documentos e epidemiologia (20)** | SUS, Epidemiologia e Ética Médica | Questões | 45 | G P L C | CEM, Res. 2.381/2024, DO, indicadores e testes diagnósticos. |
| ★ **Caderno de erros: zerar mais 25% (total 50%)** | SUS, Epidemiologia e Ética Médica | Caderno de erros | 60 | G P L C | Priorize os itens com mais revisões falhas. |
| **Aprofundamento: toxicologia, NR-15 e NR-16** | Perícia, Previdência e Trabalho | Revisão | 60 | P | Refaça de memória a tabela de indicadores biológicos e os graus de insalubridade. |
| **Aprofundamento: 40 questões de doenças do trabalho** | Perícia, Previdência e Trabalho | Questões | 60 | P | Banca-alvo, tempo de prova. |
| **Aprofundamento: documentos médico-legais e ética pericial** | Medicina Legal | Revisão | 60 | L | Estrutura do relatório, tipos de documento, CEM Arts. 92–98. |
| **Aprofundamento: 40 questões de asfixias e sexologia** | Medicina Legal | Questões | 60 | L | Banca-alvo, tempo de prova. |
| ★ **Leitura: calendário do PNI e lista de notificação compulsória** | Clínica Médica e Urgência | Lei seca / NR | 45 | C | Calendário vigente e agravos de notificação imediata. |
| **Aprofundamento: 30 questões do pior tema clínico** | Clínica Médica e Urgência | Questões | 60 | C | Use a tela de Desempenho para escolher o tema. |
| ★ **SIMULADO 4 cronometrado (prova completa)** _(dia 6)_ | SUS, Epidemiologia e Ética Médica | Simulado | 240 | G P L C | Mesmas condições do Simulado 3; compare acerto por disciplina. |

**Conhecimentos Básicos da semana**

| Bloco | Nível | Tipo | Min | Trilhas |
|---|---|---|---|---|
| Português: bateria da banca-alvo | Núcleo | Questões | 40 | G P L C |
| Simulado de básicas nº 3 | Núcleo | Simulado | 60 | G P L C |
| Matemática: bateria mista | Complemento | Questões | 30 | G L C |
| Raciocínio Lógico: bateria mista | Complemento | Questões | 30 | G P L C |
| Informática: bateria mista | Complemento | Questões | 30 | G P L C |
| Administrativo: Controle da administração pública | Complemento | Teoria | 25 | G P L |
| Servidor público: prazos do estatuto | Complemento | Revisão | 20 | G P L C |
| Legislação: bateria mista | Complemento | Questões | 25 | G L C |
| Discursiva: laudo ou parecer cronometrado | Complemento | Questões | 45 | G L |
| Criminalística: bateria mista | Complemento | Questões | 25 | G L |
| Atualidades: atualidades da semana | Reforço | Revisão | 20 | G C |
| Inglês: textos técnicos em inglês | Complemento | Questões | 25 | G L |

#### Semana 11 — Reta final III — pontos fracos e performance

**Objetivo:** Atacar os 3 pontos fracos do Dashboard, volume alto de questões na banca-alvo, 75% do caderno de erros zerado e Simulado 5.

**Bancas-foco:** Banca-alvo · **Meta de questões:** 320

**Carga planejada:** G 16h50→16h50 · P 16h30→16h30 · L 14h35→14h35 · C 14h20→14h20

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Ataque aos 3 pontos fracos do Dashboard** | SUS, Epidemiologia e Ética Médica | Revisão | 90 | G P L C | Abra o Radar de Pontos Fracos no Dashboard; para cada tema, leia o cheat sheet/checklist indicado e resolva 10 questões. |
| **Questões: 60 mistas de perícia e previdenciário na banca-alvo** | Perícia, Previdência e Trabalho | Questões | 75 | G P | Tempo de prova; registre por tema. |
| ★ **Leitura rápida: benefícios, nexo e NRs** | Perícia, Previdência e Trabalho | Lei seca / NR | 30 | G P | Cheat sheets "Perícia previdenciária", "Nexo causal, NTEP e CAT" e "NRs — prazos e percentuais". |
| **Questões: 60 mistas de Medicina Legal na banca-alvo** | Medicina Legal | Questões | 75 | G L | Tempo de prova; registre por tema. |
| ★ **Leitura rápida: fenômenos cadavéricos, PAF e asfixias** | Medicina Legal | Lei seca / NR | 30 | G L | Três cheat sheets em sequência. |
| **Questões: 60 mistas de clínica na banca-alvo** | Clínica Médica e Urgência | Questões | 75 | G C P | Tempo de prova; registre por tema. |
| ★ **Revisão: urgências no pronto atendimento** | Clínica Médica e Urgência | Revisão | 60 | G C P | PCR, anafilaxia, sepse, SCA, AVC, trauma, intoxicações. |
| ★ **Caderno de erros: zerar mais 25% (total 75%)** | SUS, Epidemiologia e Ética Médica | Caderno de erros | 60 | G P L C | Itens restantes mais antigos primeiro. |
| **Básicas de sobrevivência: Português e RLM** | Conhecimentos Básicos e Gerais | Questões | 45 | G P L C | Garanta a nota mínima: 20 questões da banca-alvo. |
| **Aprofundamento: questões extras de perícia** | Perícia, Previdência e Trabalho | Questões | 60 | P | Somente assuntos com menos de 75% de acerto. |
| **Aprofundamento: caderno de erros de perícia** | Perícia, Previdência e Trabalho | Caderno de erros | 45 | P | Somente os itens deste eixo, do mais antigo ao mais recente. |
| **Aprofundamento: questões extras de tanatologia e traumatologia** | Medicina Legal | Questões | 60 | L | Somente assuntos com menos de 75% de acerto. |
| **Aprofundamento: caderno de erros de Medicina Legal** | Medicina Legal | Caderno de erros | 45 | L | Somente os itens deste eixo, do mais antigo ao mais recente. |
| ★ **Leitura rápida: protocolos clínicos do MS** | Clínica Médica e Urgência | Lei seca / NR | 30 | C | HAS, DM, pré-natal, calendário do PNI, dengue. |
| **Aprofundamento: questões extras de clínica** | Clínica Médica e Urgência | Questões | 60 | C | Somente assuntos com menos de 75% de acerto. |
| ★ **SIMULADO 5 cronometrado (prova completa)** _(dia 6)_ | SUS, Epidemiologia e Ética Médica | Simulado | 240 | G P L C | Último simulado completo: treine também alimentação, pausas e gestão do tempo. |

**Conhecimentos Básicos da semana**

| Bloco | Nível | Tipo | Min | Trilhas |
|---|---|---|---|---|
| Português: bateria final | Núcleo | Questões | 40 | G P L C |
| Simulado de básicas nº 4 | Núcleo | Simulado | 60 | G P L C |
| Raciocínio Lógico: bateria final de RLM e Matemática | Complemento | Questões | 30 | G P L C |
| Informática: bateria final | Complemento | Questões | 30 | G P L C |
| Administrativo: bateria final de Direito | Complemento | Questões | 30 | G P L |
| Ética e transparência: prazos de LAI e LGPD | Complemento | Revisão | 20 | G P L |
| Legislação: leis especiais | Complemento | Revisão | 20 | G L C |
| Atualidades: atualidades da semana | Reforço | Revisão | 20 | G C |

#### Semana 12 — Véspera — polimento, caderno zerado e logística

**Objetivo:** Sem conteúdo novo: caderno de erros 100% zerado, leituras finais de checklists e cheat sheets, questões leves e logística da prova.

**Bancas-foco:** Banca-alvo · **Meta de questões:** 150

**Carga planejada:** G 10h05→10h05 · P 8h35→8h35 · L 7h05→7h05 · C 7h05→7h05

| Bloco | Eixo | Tipo | Min | Trilhas | Conteúdo |
|---|---|---|---|---|---|
| ★ **Caderno de erros: zerar 100%** | SUS, Epidemiologia e Ética Médica | Caderno de erros | 90 | G P L C | Todo item pendente refeito; o que ainda errar vira uma linha num resumo de 1 página. |
| ★ **Leitura final: Lei 8.213, LOAS e Lei 8.112** | Perícia, Previdência e Trabalho | Lei seca / NR | 45 | G P | Somente checklists e cheat sheets, sem livro. |
| **Questões leves: 30 de revisão (perícia)** | Perícia, Previdência e Trabalho | Questões | 45 | G P | Questões já acertadas antes: objetivo é confiança e ritmo. |
| ★ **Leitura final: CPP 158–184, CP 121–129 e cheat sheets** | Medicina Legal | Lei seca / NR | 45 | G L | Somente checklists e tabelas. |
| **Questões leves: 30 de revisão (Medicina Legal)** | Medicina Legal | Questões | 45 | G L | Ritmo e confiança. |
| ★ **Leitura final: urgências e protocolos clínicos** | Clínica Médica e Urgência | Lei seca / NR | 45 | G C P | Cheat sheet de urgências e resumo de 1 página por área clínica. |
| **Questões leves de clínica (30)** | Clínica Médica e Urgência | Questões | 45 | G C P | Ritmo e confiança. |
| ★ **Leitura final: SUS e ética** | SUS, Epidemiologia e Ética Médica | Lei seca / NR | 45 | G P L C | Checklist das leis do SUS e artigos do CEM. |
| ★ **Logística da prova** | SUS, Epidemiologia e Ética Médica | Revisão | 30 | G P L C | Local e trajeto, documento com foto, caneta transparente, horário de abertura dos portões, sono regular nos 3 dias anteriores, refeição testada nos simulados. |
| **Simulado curto (2 h) ou descanso ativo** _(dia 6)_ | SUS, Epidemiologia e Ética Médica | Revisão | 120 | G P L C | Se a prova for em até 3 dias, descanse; senão, faça um simulado curto só para manter o ritmo. |

**Conhecimentos Básicos da semana**

| Bloco | Nível | Tipo | Min | Trilhas |
|---|---|---|---|---|
| Português: revisão leve de Português | Núcleo | Revisão | 20 | G P L C |
| Básicas: flashcards dos pontos fracos | Complemento | Revisão | 30 | G P L C |

<!-- PLANO:FIM -->
