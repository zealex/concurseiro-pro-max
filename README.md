# Concurseiro Pro Max 🩺

Preparação intensiva de **90 dias** para o **médico generalista / recém-formado** (graduação + CRM, sem residência) que vai prestar os concursos que não exigem especialidade — **Perito Médico Federal (INSS)** e peritos de regimes próprios, **Perito Médico-Legista** (Polícia Científica/IGP) e **Clínico Geral / ESF / Plantonista** — com Medicina Legal, perícia, previdência e saúde do trabalhador como eixos centrais. App universal (iOS, Android e navegador/PWA) no estilo Notion, com um **robô gratuito** que rastreia concursos médicos em PR, SC e RS a cada 12 horas, destacando as vagas abertas ao generalista (as de especialidade continuam no Radar).

Além da parte médica, o app cobre os **Conhecimentos Básicos e Gerais** que decidem (e eliminam) nos concursos: Língua Portuguesa, Matemática, Raciocínio Lógico, Informática, Inglês, Direito Constitucional, Administrativo e Penal, regime do servidor, Ética/LAI/LGPD, legislação geral, regionais do Sul, atualidades e redação. Cada disciplina tem resumos, questões autorais comentadas no estilo das bancas e flashcards; o **Meu Edital** pesa o plano pela prova real (em prefeituras, as básicas chegam a 60–75% dos pontos) e o **Simulado** reproduz o formato do edital, com a penalidade do Certo/Errado e os mínimos de cada disciplina.

| Entrega | Onde está |
|---|---|
| Guia de cursinhos, bibliografia, bancas e fontes oficiais | [docs/guia-cursinhos-bibliografia-e-fontes.md](docs/guia-cursinhos-bibliografia-e-fontes.md) |
| Plano periodizado de 12 semanas (trilhas Generalista, Perícia, Legista e Clínico; Modo Plantão; revisões) | [docs/plano-estudos-90-dias.md](docs/plano-estudos-90-dias.md) |
| Conteúdo tipado usado pelo app (plano, carreiras do generalista, checklists de leis/NRs, cheat sheets, editais, guias das fases) | [src/data/](src/data/) |
| Bancos das básicas (resumos, questões comentadas, flashcards), carregados sob demanda | [src/data/conteudo/bancos/](src/data/conteudo/bancos/) · regras: [docs/guia-de-conteudo.md](docs/guia-de-conteudo.md) |
| Composição real de 15 editais (questões, pesos, mínimos, fases) | [docs/editais-referencia.md](docs/editais-referencia.md) · [src/data/editais.ts](src/data/editais.ts) |
| App universal (Expo + Expo Router + NativeWind) | [src/app/](src/app/) |
| Robô do Radar Sul + base de concursos | [scripts/scrape-concursos-sul.ts](scripts/scrape-concursos-sul.ts) · [public/data/concursos-sul.json](public/data/concursos-sul.json) |
| Automação (a cada 12 h) e publicação web | [.github/workflows/](.github/workflows/) |
| Arquitetura e decisões | [ARCHITECTURE.md](ARCHITECTURE.md) |

---

## 1. Rodar agora no navegador

Requisitos: **Node.js 20 ou mais novo** (recomendado: Node 24 LTS) e npm.

```bash
npm install
npm run web          # = npx expo start --web
```

O Expo abre o app em `http://localhost:8081`. Tudo funciona offline depois de carregado: o progresso fica salvo no próprio navegador.

> Já existe uma base real de concursos embarcada (`public/data/concursos-sul.json`, gerada pelo robô em 18/11/2026), então o Radar abre com dados úteis desde o primeiro uso.

## 2. Instalar como app no computador (PWA)

```bash
npm run build:web     # exporta o site + gera o service worker (offline)
npm run preview:web   # serve a pasta dist/ em http://localhost:4173
```

- **Chrome/Edge (Windows, Mac, Linux):** abra `http://localhost:4173` → ícone **Instalar** na barra de endereço (ou menu ⋮ → *Instalar Concurseiro Pro Max*).
- **iPhone/iPad (Safari):** abra a URL publicada (seção 3.3) → Compartilhar → **Adicionar à Tela de Início**.
- **Android (Chrome):** menu ⋮ → **Instalar app**.

Depois de instalado, o app abre em janela própria e funciona sem internet (o Radar usa a última cópia salva).

## 3. Ativar o robô automático do Radar Sul (grátis, via GitHub)

O robô (`scripts/scrape-concursos-sul.ts`) varre PCI Concursos (Sul + Nacional com lotação no Sul), Concursos no Brasil (PR/SC/RS), FUNDATEC e FEPESE; filtra vagas que exigem Medicina; classifica em `pericia-medica`, `medico-legista`, `medicina-do-trabalho` ou `medicina-geral-especialidades` (clínico/ESF × especialidades) e marca se a vaga **aceita o generalista** ou **exige especialidade**; deduplica; e grava `public/data/concursos-sul.json`.

### 3.1 Subir o projeto

1. Crie um repositório **público** no GitHub (ex.: `concurseiro-pro-max`).
   - Público porque o app lê o feed pela URL "raw" sem token. Em repositório privado o robô funciona, mas o app não consegue baixar o feed.
2. No terminal, dentro da pasta do projeto:

```bash
git add .
git commit -m "Concurseiro Pro Max"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/concurseiro-pro-max.git
git push -u origin main
```

### 3.2 Ligar o GitHub Actions

1. No repositório: **Settings → Actions → General → Workflow permissions → "Read and write permissions"** → Save (o robô precisa fazer commit do JSON).
2. Aba **Actions** → se aparecer um aviso, clique em **"I understand my workflows, go ahead and enable them"**.
3. Abra **"Atualizar Radar de Concursos Médicos (Sul)"** → **Run workflow** para a primeira execução.
4. Pronto: ele roda sozinho **a cada 12 horas** (00:00 e 12:00 UTC) e só faz commit quando há mudança.

> Em repositórios públicos o GitHub pausa agendamentos após 60 dias sem atividade no repositório. Os próprios commits do robô contam como atividade; se ele for pausado mesmo assim, basta reativar na aba Actions.

### 3.3 (Opcional) Publicar o app no GitHub Pages

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. O workflow **"Publicar app web (GitHub Pages)"** roda a cada push e depois de cada atualização do Radar.
3. O app fica em `https://SEU-USUARIO.github.io/concurseiro-pro-max/` — instalável como PWA em qualquer dispositivo e já lendo o feed da mesma origem.

### 3.4 Apontar o app para o seu feed

No app: **Configurações → Radar Sul — feed remoto** → cole:

```
https://raw.githubusercontent.com/SEU-USUARIO/concurseiro-pro-max/main/public/data/concursos-sul.json
```

→ **Salvar e testar**. Alternativa sem digitar: crie um arquivo `.env` com `EXPO_PUBLIC_CONCURSOS_FEED_URL=<a URL acima>` antes de rodar/compilar o app.

Ordem de leitura do app: URL configurada → `EXPO_PUBLIC_CONCURSOS_FEED_URL` → `/data/concursos-sul.json` da mesma origem (web) → cópia offline no aparelho → base embarcada. **Status pessoais** (Analisando, Inscrito, Prova Agendada…), notas e editais cadastrados à mão **nunca são sobrescritos** pela atualização.

### 3.5 Rodar o robô localmente

```bash
npm run scrape:dry    # coleta e mostra o resumo, sem gravar
npm run scrape        # coleta e grava public/data/concursos-sul.json
npx tsx scripts/scrape-concursos-sul.ts --sources=pci,cnb --max-details=40
```

Boas práticas embutidas: respeita `robots.txt`, espera 1,5 s entre requisições ao mesmo site, usa User-Agent identificável e **não contorna captchas** (quando o PDF do edital está protegido, o link aponta para a página pública da notícia).

**Curadoria manual (opcional):** concursos que você quiser fixar na base de todos os usuários podem ser adicionados em `scripts/data/curadoria-concursos.json` (mesmo formato de um item do feed, com `"fonte": "curadoria"` e `fonteUrl` real). Eles entram em toda execução e só saem quando a prova passar.

## 4. Testar no celular (iOS e Android) com Expo Go

1. Instale o **Expo Go** na App Store ou Google Play.
2. No computador: `npm start`.
3. Escaneie o QR code (Android: pelo Expo Go; iPhone: pela câmera).
   - Celular e computador na **mesma rede Wi-Fi**. Em redes corporativas/universitárias, use `npx expo start --tunnel`.

## 5. Gerar o app instalável (.apk / .ipa) com EAS Build

```bash
npm install -g eas-cli
eas login                      # conta gratuita da Expo
eas build:configure            # vincula o projeto (uma vez)

# Android — APK para instalar direto no aparelho
eas build -p android --profile preview

# iOS — requer conta Apple Developer (paga) para instalar em iPhone físico
eas build -p ios --profile preview      # distribuição interna (registre os aparelhos com `eas device:create`)
eas build -p ios --profile production   # para TestFlight / App Store (depois: eas submit -p ios)
```

Antes de publicar em loja, troque o identificador `br.com.concurseiropromax.app` em `app.json` (`ios.bundleIdentifier` e `android.package`) por um domínio seu.

## 6. Comandos úteis

| Comando | O que faz |
|---|---|
| `npm run web` / `npm start` | Servidor de desenvolvimento (web / QR code para celular) |
| `npm test` | Testes (revisão espaçada, agenda, métricas, edital/nota projetada, simulado, treino, flashcards, bancos de conteúdo, migrações, classificador, deduplicação, parsers com HTML real, leitor de editais, backup) |
| `npm run typecheck` | TypeScript estrito (`tsc --noEmit`) |
| `npm run build:web` | Build web + PWA em `dist/` |
| `npm run scrape` / `npm run scrape:dry` | Robô do Radar Sul |
| `npm run docs:plano` | Regera o detalhamento semanal de `docs/plano-estudos-90-dias.md` a partir de `src/data/plano12Semanas.ts` |
| `npm run conteudo:validar` | Valida os bancos de conteúdo (gabaritos equilibrados, `verificar()` das contas, `fundamento` nas questões de lei, cobertura por tema); `-- --arquivo <banco>/index.ts` valida um banco ainda não registrado |
| `npm run edital -- <url\|pdf> [--grep re] [--secao "CONTEÚDO PROGRAMÁTICO"] [--quadro] [--paginas a-b] [--imagens a-b]` | Lê o PDF de um edital (pdftotext/Poppler, com `unpdf` como alternativa) e extrai seções, quadro de provas e páginas como imagem |
| `npm run icons` | Regera ícones do app e do PWA |
| `npm run doctor` | Verifica compatibilidade das dependências com o SDK do Expo |

## 7. Como o app funciona (resumo)

- **Dashboard de Prontidão:** contagem regressiva (90 dias ou a prova escolhida no Radar), questões, % de acerto global e nos cinco eixos (Perícia, Medicina Legal, Clínica, SUS/Ética, Conhecimentos Básicos), atalho para o Meu Edital, horas líquidas da semana, ofensiva, os 3 temas abaixo de 70% e os últimos editais do Sul **abertos ao generalista**.
- **Cronograma:** checklist diário gerado do plano de 12 semanas para a trilha escolhida, com **básicas todos os dias** (núcleo, complemento e reforço conforme o edital-alvo) e orçamento diário de **3 h a 6 h**; botão **Modo Plantão** (45–60 min); blocos não feitos são **redistribuídos** nos próximos dias (até +1 h/dia); se a prova-alvo estiver perto, o plano é **comprimido** automaticamente; tarefa **Flashcards do dia** quando há cartões vencidos.
- **Meu Edital:** escolha um dos editais de referência (ou monte o seu) com questões, pesos, mínimos e fases. O app mostra o peso das básicas, a divisão de tempo, a **nota projetada** com o seu desempenho e o **risco de eliminação** por disciplina, e ajusta o cronograma.
- **Radar Sul:** abre em **"Para generalista"** (perícia, legista, clínico/ESF) com um toque para **Todos** ou **Especialidades**; tabela (desktop) ou lista (celular) e **Kanban** (*Novo/Radar → Analisando → Inscrito → Prova Agendada → Finalizado*), filtros por estado, cidade/órgão, categoria (Clínico/ESF, Perícia Médica, Médico Legista, Medicina do Trabalho, Especialidades), banca e status, selo **NOVO** (7 dias), **Definir como Prova-Alvo** (com desfazer) e cadastro manual.
- **Questões:** **Treino** com questões autorais comentadas (modo estudo com correção na hora ou modo prova com cronômetro), **Flashcards** com caixas de Leitner (1/3/7/15/30 dias), **Simulado** no formato do edital (tempo proporcional, Certo/Errado com −0,5, resultado por prova com mínimos), registro rápido de baterias feitas em outros bancos, desempenho por disciplina e banca, **revisões D1/D7/D15/D30** e **Caderno de Erros**.
- **Biblioteca:** **Conhecimentos Básicos** (página por disciplina com resumos por tema, treino e flashcards), **Guias das fases** (estratégia de prova, recursos, discursiva/laudo, títulos, TAF, psicológica, investigação social, posse), **Editais de referência**, **Concursos para o generalista** (requisitos, prova e trilha de cada carreira), cursinhos, bibliografia, bancas, fontes oficiais, filtros de bancos de questões, **checklists interativos** (Lei 8.213 — benefícios e acidente; Lei 8.742 — BPC; Lei 8.112 — saúde do servidor; Decreto 3.048; CLT 154–201; NRs 01, 04, 05, 06, 07, 09, 15, 16, 17, 32; CPP 158–184; CP 121–129; SUS) e **cheat sheets** (perícia previdenciária, nexo/NTEP/CAT, urgências do plantão, cronotanatognose, PAF, asfixias, indicadores biológicos, lesão corporal, prazos de NRs).
- **Timer de Foco:** Pomodoro por timestamp (não perde tempo ao trocar de aba) vinculado à disciplina.
- **Backup:** Configurações → Exportar/Importar progresso (`.json`), incluindo o histórico do Treino e dos flashcards; backups de versões anteriores continuam importáveis.

## 8. Privacidade

Não há servidor nem conta. Todo o progresso fica no dispositivo (AsyncStorage/localStorage). A única requisição de rede do app é a leitura do arquivo público de concursos.

## 9. Avisos

- Os dados do Radar são extraídos automaticamente de notícias e páginas públicas: **confirme datas, vagas, requisitos e banca no edital oficial** antes de se inscrever.
- O conteúdo normativo foi conferido nas fontes oficiais citadas (NRs no gov.br, leis no Planalto, Resoluções do CFM). Normas mudam: em caso de dúvida, vale o texto oficial vigente.
