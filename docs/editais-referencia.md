# Editais de referência (composição real das provas)

Editais e cadernos de concursos médicos de 2024–2026, todos lidos no PDF oficial com `npm run edital`. Cada número abaixo vem do documento oficial. Os presets do **Meu Edital** (`src/data/editais.ts`) reproduzem estas tabelas.

Conferência: 19/11/2026. Antes de estudar, confira no edital do seu concurso: a composição muda de um município para outro, até dentro da mesma banca.

## Como ler um edital com o app

```bash
npm run edital -- "<link do PDF>"                          # resumo: páginas, quadro de provas e seções
npm run edital -- "<link do PDF>" --quadro                 # trechos com nº de questões por disciplina
npm run edital -- "<link do PDF>" --secao "CONTEÚDO PROGRAMÁTICO"
npm run edital -- "<link do PDF>" --grep "l[ií]ngua portuguesa" --contexto 3
npm run edital -- "<link do PDF>" --motor unpdf            # outro extrator (alinha melhor algumas tabelas)
npm run edital -- "<link do PDF>" --imagens 12-13          # páginas como imagem (tabelas que não viram texto)
```

O PDF e o texto ficam em `.cache/editais/`, fora do git.

---

## 1. Perícia médica e perícia oficial (aceitam só a graduação em Medicina)

| Concurso | Banca | Composição (questões × pontos) | Mínimos | Outras fases |
|---|---|---|---|---|
| **Perito Médico Federal** — MPS 2024 | Cebraspe | P1 gerais **50 itens C/E** (Português + Redação Oficial, Ética, Constitucional, Administrativo com Lei 8.112/improbidade/LGPD, Informática com SEI e IA); P2 específicos 70 itens; erro **−0,5** | P1 ≥ 10; P2 ≥ 21; total ≥ 36 | Títulos (até 7) |
| **Polícia Científica-PR** — Perito Oficial Criminal, Área 2 (2024) | IBFC | Gerais 40 × 0,75: Português 4, Direito Aplicado 9, Raciocínio Lógico e Científico 5, Informática 5, Legislação Especial 12, Criminalística/ML 5. Específicos 40 × 1,25 (ML, perícia, noções clínicas) | Gerais ≥ 15; específicos ≥ 25; total ≥ 40 | Redação 15–20 linhas (≥ 10/20), TAF, psicológica, investigação social, saúde + toxicológico, títulos (até 10) |
| **IGP-RS** — Perito Médico-Legista (2025) | FUNDATEC | Gerais 30 × 1,0: Português 10, Legislação Aplicada 5, **Inglês 5**, RLM 5, Informática 5. Específicos 40 × 1,25: Criminalística 10, Medicina Legal 30 | Gerais ≥ 15; específicos ≥ 25 | Dissertação 15–30 linhas (≥ 12/20), psicológica, vida pregressa, títulos (até 10), toxicológico na posse, curso de formação (360–720 h) |
| **Polícia Científica-SC** — Perito Oficial Criminal, Medicina Legal (2025) | FEPESE | Gerais 40 × 0,10: Português 5, **Inglês 5**, Matemática e RLM 10, Penal/Processo Penal 5, Constitucional/Administrativo 5, Criminalística 5, ML 5. Específicos 40 × 0,15 | 50% em cada bloco | TAF, psicológica, títulos (só o de maior valor), toxicológico (janela de 180 dias), investigação social, curso de formação (≥ 480 h) |
| **Polícia Federal** — Perito Criminal Federal, Área 12 (2025) | Cebraspe | Básicos 50 itens C/E (no caderno: Português 12, Informática 8, Administrativo 4, Constitucional 4, Penal/Processo Penal 6, Criminalística 5, Direitos Humanos 6, RLM 5); específicos 70; erro **−1** | Básicos ≥ 10; específicos ≥ 21; total ≥ 48 | Discursiva (≤ 30 linhas, ≥ 10/20), TAF com natação, avaliação médica + toxicológico, psicológica, títulos (até 7,5), investigação social, curso de formação |

Leis citadas nas básicas dos editais periciais:
- **PR:** CPP, CP, LEP, CTB, Lei 13.869/2019 (abuso de autoridade); LC 258/2023, Leis estaduais 21.117/2022, **6.174/1970** (estatuto dos servidores do PR), 20.656/2021, 12.030/2009, 13.675/2018, 20.866/2021 e 21.640/2023; redação oficial do Paraná; eProtocolo/PIA/SINESP (Informática).
- **RS:** CF (direitos fundamentais e Administração Pública), Lei 14.133/2021, **LC-RS 10.098/1994** (estatuto dos servidores do RS), Leis-RS 11.770/2002 e 14.519/2014.

## 2. Prefeituras do Sul (cargos de médico clínico/generalista)

| Edital | Banca | Básicas | Específicas | Aprovação |
|---|---|---|---|---|
| Ipê/RS 2026 (mesma tabela de Novo Cabrais e Teutônia) | Objetiva | Português 10 × 2,0 · Conhecimentos Gerais 8 × 1,5 · Legislação 6 × 2,0 | 16 × 3,5 | 60%, sem zerar disciplina |
| Cachoeira do Sul/RS 2026 (caderno de prova) | Objetiva | Português 10 · Matemática/RLM 5 · Conhecimentos Gerais 5 · Legislação 10 | 10 | — |
| Nova Pádua/RS 2026 | FUNDATEC | Português 10 · Legislação 10 · Matemática/RLM 5 (× 2,5) | 15 × 2,5 | 1 acerto por básica, 7 nas específicas, 50/100 |
| Ijuí/RS 2026 (Plantonista) | FUNDATEC | Atualidades/Português 20 × 0,51 · Legislação Municipal 15 × 1,0 · Informática/Matemática 13 × 1,1 | 27 × 1,5 | 1 acerto por básica, 13 nas específicas, 48/80; títulos |
| Xangri-lá/RS 2025 (caderno de prova) | FUNDATEC | Português 10 · Legislação 10 · Informática 10 · RLM 10 | 20 | — |
| Antônio Prado/RS 2026 (modelo da banca) | Legalle | Português, Matemática e Informática 10 × 1,25 · Legislação 15 × 1,5 | 15 × 2,0 | 45/90; títulos |
| Bom Retiro/SC 2026 | SC Treinamentos | Português 10 · Matemática 5 · Conhecimentos Gerais/Atualidades 5 (× 2,0) | 20 × 3,0 (inclui Legislação e Informática) | 50/100 |
| Fraiburgo/SC 2026 (seleção) | IBAM | Português 10 · Conhecimentos Gerais 10 (× 10) | 10 × 10 | 30 pontos em cada núcleo |
| Navegantes/SC 2026 (seleção) | FURB | Português 10 · RLM/Matemática 5 · Conhecimentos Gerais 5 (× 0,2) | 20 × 0,3 | 5,0/10 |
| Urubici/SC 2026 | FEPESE | Português 5 × 0,2 · Matemática 5 × 0,2 · Temas de Atualidade 10 × 0,3 (últimos 12 meses) | 10 × 0,5 | 6,0/10 |
| Umuarama/PR 2026 (Médico Generalista) | Instituto Unicampo | Português 10 · Matemática 5 · Conhecimentos Gerais 5 (× 2,0) | 40 × 2,0 | 60/120 |
| Paula Freitas/PR 2026 | FAU/Unicentro | Português 5 · Matemática/RLM 5 · Conhecimentos Gerais 5 (× 2,0) | 25 × 2,8 | 50% |

O que se repete nas prefeituras:
- **Legislação**, em 8 de 13 editais: Lei Orgânica do Município + estatuto/regime jurídico dos servidores do município + CF (em geral arts. 1º–6º, 18–19, 29–31, 37–41) + Lei 8.429/1992 (improbidade).
- **Conhecimentos Gerais**: atualidades, mais história e geografia do município/estado. Na Objetiva também entram serviço público, informática e RLM.
- **Específicas** de médico: Lei 8.080/90 e Decreto 7.508/11 (6 editais), Lei 8.142/90, PNAB (Portaria 2.436/2017), Lei 13.146/15, Lei 12.288/10, Lei 10.741/03, NR 32, CF arts. 193–232, Código de Ética Médica. Às vezes entra a Lei 11.340/06 (Maria da Penha).
- **Só em Caxias do Sul/RS**: CP arts. 312–327 (crimes contra a administração pública), ECA, Pessoa Idosa, Igualdade Racial, LAI, Lei 13.460/2017 (direitos do usuário do serviço público), LGPD.

## 3. Lidos, mas não acessíveis ao generalista sem residência

| Concurso | Banca | Por quê | Composição (para referência) |
|---|---|---|---|
| EBSERH 01/2026 — Área Médica | FGV | Todos os cargos médicos exigem residência ou título de especialista | Português 10 × 0,4 · Legislação Ebserh 5 · Políticas Públicas de Saúde e Educação 15 · Específicos 30 × 1,2; mínimo 30 de 60; títulos |
| GHC 03/2026 | FUNDATEC | Só especialidades (36 cargos) | Políticas Públicas de Saúde 5 × 1,85 · Específicos 35 × 2,25; 4 alternativas; médicos não fazem Português |
| Caxias do Sul/RS 2026 — Médico ESF | FUNDATEC | Exige RQE em Medicina de Família e Comunidade | Português 7 · RLM e Informática 5 · Atendimento ao Cidadão/Governança 7 · Desenvolvimento Urbano 5 (× 1,5) · Específicos 16 × 4,0 |

## 4. O que muda no estudo

1. **Prefeitura:** as básicas são de 40% a 75% das questões. Em pontos, pesam de 30% a 63%, porque as específicas costumam valer mais por questão. Muitas bancas eliminam quem zera uma disciplina: Objetiva e FUNDATEC.
2. **Perícia oficial:** o bloco geral tem **nota mínima própria**, de 15 de 30 pontos no PR e no RS, ou 50% em SC. Há redação ou dissertação, TAF, psicológica e toxicológico. Inglês cai no RS e em SC.
3. **Perito Médico Federal e PF (Cebraspe):** Certo/Errado com desconto por erro. Chutar só compensa se P(acerto) > 1/3 (−0,5) ou > 1/2 (−1).
