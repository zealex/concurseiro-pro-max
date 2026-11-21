# Guia de conteúdo: resumos, questões autorais e flashcards

Este é o padrão para escrever e revisar os **bancos de conteúdo** do Concurseiro Pro Max. Vale para autores, revisores e subagentes.

Cada banco cobre uma disciplina e traz quatro coisas: resumos teóricos por tema, textos-base, questões autorais comentadas e flashcards. O currículo (eixos, disciplinas, temas e ids) está em `src/data/eixos.ts`. Os tipos estão em `src/data/types.ts`: `BancoConteudo`, `ResumoTema`, `QuestaoTreino`, `TextoBase` e `Flashcard`.

> **Para quem é o conteúdo:** médico generalista ou recém-formado que vai prestar concurso. Ele não é especialista em Português, Matemática ou Direito, mas sabe estudar. Escreva com precisão de professor de cursinho e sem enrolação. O objetivo é **acertar questões de banca**, não fazer tratado.

---

## 1. Onde fica e como o banco é montado

```
src/data/conteudo/bancos/<disciplinaId>/
  index.ts        ← monta o banco (export default)
  resumos.ts      ← ResumoTema[]
  questoes.ts     ← QuestaoTreino[]
  flashcards.ts   ← Flashcard[]
  textos.ts       ← TextoBase[] (pode ser vazio)
```

Modelo do `index.ts`:

```ts
import type { BancoConteudo } from '../../../types';
import { FLASHCARDS } from './flashcards';
import { QUESTOES } from './questoes';
import { RESUMOS } from './resumos';
import { TEXTOS } from './textos';

const banco: BancoConteudo = {
  disciplinaId: 'lingua-portuguesa',
  resumos: RESUMOS,
  questoes: QUESTOES,
  textos: TEXTOS,
  flashcards: FLASHCARDS,
};
export default banco;
```

Regras de arquivo:
- Não importe nada de `bancos/` fora dessa pasta. O app carrega cada banco sob demanda por `src/data/conteudo/carregar.ts`, e um teste barra imports estáticos.
- **Quem cadastra o banco no carregador é o coordenador.** Para validar antes disso, rode `npm run conteudo:validar -- --arquivo src/data/conteudo/bancos/<id>/index.ts`.
- Strings em TypeScript entre aspas simples. Para aspas dentro do texto, use “aspas curvas” ou escape `\'`. Não use crase de template, para evitar `${}` acidental.
- Use somente temas da própria disciplina (`temaId` existente em `eixos.ts`).

## 2. Ids

| Item | Formato | Exemplo |
|---|---|---|
| Questão | `<temaId>-q<NN>` | `lp-crase-q07` |
| Flashcard | `<temaId>-f<NN>` | `etp-lai-f03` |
| Texto-base | `tx-<disciplina-curta>-<NN>` | `tx-lp-02` |

Os ids são permanentes: o progresso do usuário fica gravado por id. Se precisar corrigir uma questão publicada, edite o conteúdo e mantenha o id. Se for remover, não reaproveite o id.

## 3. Resumos (um por tema)

Cada tema não misto tem **um** `ResumoTema`. Os temas mistos `portugues`, `rlm`, `informatica`, `direito-adm`, `etica-servico-publico` e `basicas-mistas` não precisam de resumo.

- `titulo`: o nome do tema, ou uma versão curta dele.
- `resumo`: uma ou duas frases sobre **o que a banca cobra** desse tema.
- `blocos`, na ordem sugerida:
  1. `texto`: conceito em 2 a 4 parágrafos curtos. Use `**negrito**` nas palavras-chave.
  2. `lista` ou `tabela`: as regras, os casos e as exceções. Tabela é ótima para "regra × exemplo × pegadinha".
  3. Pelo menos um `exemplo`, com enunciado e resolução no estilo de banca.
  4. Pelo menos um `atencao`: a pegadinha que as bancas repetem.
  5. `formula`, quando houver: Matemática, juros, estatística.
- Tamanho: 250 a 900 palavras por tema. Temas grandes podem ir até ~1.500 (crase, concordância, regência, atos administrativos, Lei 8.112, Excel).
- `fontes`: fontes reais e verificáveis (seção 8). Lei sempre com o link do Planalto.
- `atualizadoEm`: data `AAAA-MM-DD` de quando o conteúdo foi conferido.
- Tabelas: toda linha tem o mesmo número de células que `colunas`.

## 4. Questões autorais

### 4.1 Regras de ouro

1. **Questão autoral e original.** É proibido copiar ou parafrasear questão de prova oficial. Pode imitar o **formato** da banca:
   - FUNDATEC: "Analise as assertivas… Quais estão corretas?", "EXCETO".
   - Objetiva: "Assinalar a alternativa…".
   - Cebraspe: itens Certo/Errado.
   - FGV: casos longos.
2. **Uma única resposta correta**, inquestionável pela norma ou pelo texto oficial vigente. Se gramáticos divergem, a questão sai do banco ou deixa explícito "segundo a norma-padrão".
3. Distratores plausíveis, construídos com os **erros típicos** do candidato. Nada de alternativa absurda, nada de "todas/nenhuma das anteriores" e nada de alternativas que se sobrepõem.
4. Sem pegadinha de digitação. Sem tema político opinativo. Atualidades não entram no banco de questões.

### 4.2 Campos

- `formato`:
  - `multipla`: **5 alternativas** (A–E), o padrão das bancas do Sul. Use 4 só para imitar banca de 4.
  - `certo-errado`: item no estilo Cebraspe. Use `gabaritoCE`, sem alternativas.
- `estilo`: id de uma banca cadastrada em `src/data/bancas.ts`: `fundatec`, `objetiva`, `fepese`, `furb`, `nc-ufpr`, `fauel`, `cebraspe`, `fgv`, `vunesp`, `aocp`, `ibfc` e as que forem acrescentadas.
- `dificuldade`: 1 (direta), 2 (exige regra + aplicação), 3 (combina regras ou tem pegadinha). Mistura-alvo: ~30% / 50% / 20%.
- `comentario`: de 40 a ~600 caracteres. Explica **por que a correta está certa** e, em uma frase, onde os distratores erram. Cite a regra.
- `fundamento`: **obrigatório** em Direito Constitucional, Administrativo, Servidor, Ética e Legislação Geral. Formato: `Lei 8.112/1990, art. 20, § 1º`, `CF/88, art. 37, II`.
- `textoBaseId`: em questões de interpretação, aponta para um `TextoBase`.
- `verificar`: **obrigatório nas questões de cálculo** (Matemática e RLM numérico). É uma função que recalcula a resposta e devolve:
  - um **número**: o teste compara com o primeiro número da alternativa correta, com tolerância conforme as casas decimais mostradas; ou
  - uma **string** idêntica à alternativa correta.

  Exemplo: `verificar: () => 1500 * 1.02 ** 3` com a correta `'R$ 1.591,81'`.

### 4.3 Equilíbrio do banco (validado automaticamente)

- Múltipla escolha: nenhuma letra pode ser a correta em mais de 40% das questões do banco. O ideal é ~20% para cada letra.
- Certo/Errado: entre 30% e 70% de "Certo". O ideal é 40–60%.
- Proporção de formatos por disciplina:

| Disciplina | Múltipla | C/E |
|---|---|---|
| Português, Informática, Constitucional, Administrativo, Ética, Servidor | ~70% | ~30% |
| Matemática, Raciocínio Lógico, Legislação Geral, Regionais, Criminalística | ~85–100% | 0–15% |

O C/E aparece nas disciplinas que caem no Perito Médico Federal (Cebraspe).

### 4.4 Português: textos-base

- Cada texto tem de 300 a 1.500 caracteres e ganha de 3 a 5 questões de interpretação, sentido, coesão, reescrita e pontuação.
- Os textos são **próprios** (`autoria: 'Texto elaborado para o Concurseiro Pro Max'`, `dominioPublico: false`) ou de **domínio público**. Domínio público significa autor brasileiro morto há mais de 70 anos (Lei 9.610/98, art. 41): Machado de Assis, Lima Barreto, Euclides da Cunha, Aluísio Azevedo, Raul Pompeia, João do Rio, Olavo Bilac, Monteiro Lobato, Mário de Andrade. Nesse caso, cite obra e ano.
- Nunca use notícia, crônica ou artigo de jornal recente: há direito autoral.
- Temas de texto bons para o público: saúde pública, trabalho, cidade, ciência, ética, cotidiano do SUS.

### 4.5 Matemática e Raciocínio Lógico

- Números em formato brasileiro: vírgula decimal e ponto de milhar (`R$ 1.234,56`, `12,5%`).
- No máximo 2 casas decimais na resposta, ou arredondamento explicitado no enunciado ("arredonde para o inteiro mais próximo").
- Toda questão de conta tem `verificar()`. Em RLM de tabela-verdade ou equivalência, a resposta é textual. Nesse caso, confira a lógica no comentário, com a tabela-verdade se ajudar.
- `mat-saude` (dose, gotejamento, IMC): use fórmulas clássicas e diga as unidades. Gotejamento: macrogotas/min = volume (mL) ÷ (tempo (h) × 3); microgotas/min = volume ÷ tempo (h). O conteúdo serve para treinar conta, não substitui protocolo clínico.

## 5. Flashcards

- **Um conceito por cartão.** A frente é uma pergunta ou uma lacuna ("O prazo da LAI para responder é de ___ dias, prorrogáveis por ___").
- O verso tem até 400 caracteres (ideal até 200), com a resposta e, se couber, o "porquê".
- Cartão de lei leva `fonte` com o artigo.
- Atualidades: todo cartão leva `validoAte` (12 meses depois da conferência) e `fonte` com a data.
- Evite cartões que são só listas longas. Divida em vários.

## 6. Atualidades (Conhecimentos Gerais)

- Não há questões no banco. O conteúdo datado envelhece rápido, e questão errada por defasagem prejudica o aluno.
- Resumos com fatos **datados e com fonte**: Agência Brasil, gov.br, IBGE, ONU, Agência Senado/Câmara. Mais a seção "como estudar": recorte temporal do edital, fontes confiáveis e revisão semanal.
- Flashcards com `validoAte`.

## 7. Volumes-alvo por disciplina

| Disciplina | Questões (meta) | Flashcards (meta) | Publicado (nov./2026) |
|---|---|---|---|
| Língua Portuguesa | ~170 (≈8 textos-base) | ~150 | 177 q · 157 f · 8 textos |
| Matemática | ~110 | ~70 | 112 q · 75 f |
| Raciocínio Lógico | ~80 | ~50 | 87 q · 62 f |
| Noções de Informática | ~120 | ~140 | 128 q · 145 f |
| Língua Inglesa | ~45 (≈6 textos-base) | ~45 | 46 q · 47 f · 6 textos |
| Direito Constitucional | ~60 | ~60 | 60 q · 60 f |
| Direito Administrativo | ~90 | ~80 | 90 q · 80 f |
| Direito Penal e Processual Penal | ~60 | ~60 | 60 q · 60 f |
| Regime Jurídico do Servidor | ~60 | ~60 | 60 q · 65 f |
| Ética, Transparência e LGPD | ~60 | ~70 | 61 q · 81 f |
| Legislação Geral e Direitos Humanos | ~60 | ~60 | 60 q · 67 f |
| História e Geografia do Sul | ~50 | ~50 | 50 q · 53 f |
| Noções de Criminalística | ~40 | ~40 | 40 q · 46 f |
| Conhecimentos Gerais e Atualidades | — | ~40 (datados) | 52 f (com `validoAte`) |
| Redação e Prova Discursiva | — (guias e modelos) | — | 3 resumos com modelos |
| **Total** | **~1.000** | **~1.000** | **1.031 questões · 1.050 flashcards · 118 resumos** |

Todo banco passou por um autor e por um revisor independente, que resolveu os gabaritos do zero e conferiu as normas no texto vigente. Atualidades e normas recém-alteradas (ECs e leis de 2025–2026) devem ser reconferidas a cada semestre.

O validador também exige uma cobertura mínima **por tema**: resumo, mais pelo menos 4 questões e 4 flashcards. A exceção são Atualidades (só flashcards) e Redação (só resumo).

## 8. Fontes aceitas

| Assunto | Fontes |
|---|---|
| Leis, decretos, CF | **Planalto**, `planalto.gov.br/ccivil_03/...`, sempre o **texto compilado vigente** |
| Redação Oficial | *Manual de Redação da Presidência da República*, 3ª ed. (2018) |
| Ortografia | VOLP (ABL) e o Acordo Ortográfico de 1990 |
| Gramática | Gramáticas de referência, citadas como referência: Bechara, *Moderna Gramática Portuguesa*; Cunha & Cintra, *Nova Gramática do Português Contemporâneo*. Nunca invente página ou edição |
| Informática | Suporte oficial da Microsoft (Windows 11, Microsoft 365), ajuda do LibreOffice, *Cartilha de Segurança para Internet* do CERT.br, portal do SEI (gov.br) |
| Dados do Sul | IBGE (Cidades, Censo 2022), sites oficiais dos governos de PR, SC e RS, Assembleias Legislativas |
| Ética e LGPD | Planalto (Dec. 1.171/1994, Dec. 6.029/2007, Lei 12.813/2013, Lei 12.527/2011, Lei 13.709/2018), Comissão de Ética Pública, ANPD |

**Nada inventado.** Número, prazo, percentual, artigo ou data que você não conseguiu confirmar fica de fora.

## 9. Checklist do revisor

1. `npm run conteudo:validar -- --arquivo src/data/conteudo/bancos/<id>/index.ts` sem nenhum **ERRO**. Depois, reduza os avisos de cobertura.
2. Para cada questão:
   - existe uma única correta?
   - o gabarito confere com a norma ou o texto **vigente**? Abra o Planalto e confira o artigo do `fundamento`;
   - o comentário explica a regra certa?
   - há ambiguidade? Se há divergência entre gramáticos ou entre versões de software, reescreva ou remova.
3. Matemática: todo `verificar()` bate. Refaça mentalmente 1 em cada 5 contas.
4. Informática: atalho, função ou menu conferido no suporte oficial. Evite detalhes que mudam entre versões, ou cite a versão ("no Excel do Microsoft 365").
5. Português do próprio texto: ortografia do Acordo de 1990, acentuação, crase e concordância. **O material de Português não pode ter erro de Português.**
6. Flashcards: um conceito por cartão e verso enxuto.
7. Corrija direto nos arquivos e liste no relatório final o que mudou e por quê, por id.
