# Portal de Qualificação de Fornecedores Críticos — Perpec

Documento de apoio: FP-SGQ-0015. Este repositório contém três páginas HTML estáticas (sem backend próprio) publicadas via GitHub Pages, mais os bancos de dados de apoio em CSV.

## Arquivos

| Arquivo | Para quem | O que faz |
|---|---|---|
| `gerar-link.html` | Equipe Perpec | Gera o link único do formulário para um fornecedor específico, já com a pasta de evidências dele embutida. |
| `index.html` | Fornecedor | Formulário de autoavaliação. O fornecedor responde, anexa documentos e envia (via Make → Monday.com). |
| `auditoria.html` | Equipe Perpec | Painel interno para conferir as evidências do fornecedor e gerar o PDF do relatório de auditoria. |
| `dados.js` | — | **Fonte única** usada pelas três páginas: endereço da planilha Google, leitura das abas e a regra "escopo → perguntas". |
| `perguntas.csv` / `escopo.csv` | — | Cópia de segurança da planilha, usada só se o Google estiver inacessível. Gerada por `atualizar-backup-csv.ps1` — não edite à mão. |
| `atualizar-backup-csv.ps1` | Equipe Perpec | Baixa a planilha e regrava os dois CSVs de segurança. |
| `PERPEC - LOGO PRINCIPAL.png` | — | Logo usado no cabeçalho das páginas e no PDF. |

## Como funciona o cálculo da nota

- Cada pergunta vale: **Conforme = 100**, **Regular = 75**, **Não Conforme = 0**. "Não Aplicável" não entra no cálculo.
- A nota de cada bloco (SGQ e Técnica) é a **média simples** das perguntas respondidas daquele bloco.
- A nota final é a média entre os dois blocos (peso 50%/50%, configurável).
- **Exceção:** se a certificação de SGQ é confirmada como válida com evidência, a nota final tem um piso mínimo de 80 pontos (aprovação garantida), mesmo que o cálculo normal resulte em menos.
- Faixas finais: **0–59,9 Não Aprovado** · **60–79,9 Aprovado com Ressalvas** · **80–100 Aprovado**.

No formulário do fornecedor (`index.html`), a nota de cada item é a informada por ele (autodeclarada — provisória, sujeita a auditoria). No painel de auditoria (`auditoria.html`), a nota é a que o auditor da Perpec julgar com base na evidência real.

## Como editar os parâmetros

Tudo que precisa de ajuste fica no topo do `<script>` de cada arquivo (`index.html` e `auditoria.html` têm os mesmos blocos, mantenha os dois sincronizados):

```js
const CONFIG = {
  WEBHOOK_URL: "...",       // só em index.html — URL do webhook do Make
  LOGO_URL:          "PERPEC - LOGO PRINCIPAL.png",
  DOC_REF: "FP-SGQ-0015 RevForm.00"   // referência exibida no cabeçalho/PDF
};

const SCORING = {
  CONFORME: 100, REGULAR: 75, NC: 0,
  PESO_SGQ: 0.5, PESO_TECNICA: 0.5,   // pesos da nota final (some 1.0)
  PISO_CERT_SGQ: 80                   // nota mínima garantida com cert. SGQ válida
};

const FAIXAS = [ /* min, max, label, cor — faixas de classificação final */ ];
```

Perguntas e escopos **não ficam mais no código**: tudo é editado só na planilha Google (ID em `dados.js` → `FONTE.SHEET_ID`, compartilhada como "Qualquer pessoa com o link → Leitor"). As páginas leem a planilha ao abrir. O gerador de link também se atualiza sozinho a cada minuto e sempre que você volta para a aba dele.

- **Nova categoria/escopo:** na aba **Perguntas**, acrescente as linhas com um `bloco_id` novo, `grupo = ESCOPO` e a `categoria` (nome). Só isso: o bloco vira um escopo automaticamente, aparece no gerador de link e as perguntas entram no questionário e na auditoria.
- **Editar perguntas:** aba **Perguntas** (colunas `bloco_id, categoria, grupo, bloco_nota, escopo, codigo, texto`, mais as traduções opcionais `categoria_en, texto_en, …`, e `tipo` opcional = `produto`/`servico`).
- **Aba Escopo (opcional):** colunas `nome, tipo, blocos` (+ `nome_en, …`). Use só para dar um nome diferente da categoria, definir o `tipo` ou juntar vários blocos num escopo (`14, 15`). Escopos do tipo `produto` carregam também o bloco de grupo `PRODUCAO_GERAL`, se existir. Blocos sem linha nesta aba entram como `produto`.
- **Atenção:** o nome do escopo vai dentro do link enviado ao fornecedor. Renomear um escopo depois de enviar links faz esses links perderem o escopo. Diferenças só de maiúsculas, acentos ou espaços são toleradas.
- **Avisos no gerador:** escopos sem perguntas aparecem desabilitados, com um aviso do que corrigir. Ao marcar escopos, o gerador mostra a lista exata de blocos e perguntas que o fornecedor vai receber.
- **Cópia de segurança:** depois de mudanças grandes, rode `atualizar-backup-csv.ps1` e publique os CSVs junto do site.
- **Mudar pesos ou faixas de aprovação:** altere `SCORING` e `FAIXAS` — replique a mudança nos dois arquivos.

## Manual de uso (passo a passo)

1. **Gerar o link do fornecedor.** Acesse `gerar-link.html`, cole o link da pasta de evidências específica daquele fornecedor e clique em "Gerar Link". Copie o link gerado.
2. **Enviar ao fornecedor.** Mande esse link por e-mail/WhatsApp ao fornecedor. Ao abrir, o formulário (`index.html`) já vem com a pasta de evidências dele vinculada.
3. **Fornecedor preenche e envia.** Ele responde o questionário, anexa Cartão CNPJ e (se aplicável) Certificado de SGQ, e envia. Os dados e arquivos vão automaticamente para o Make, que cria/atualiza o item no Monday.com.
4. **Auditoria.** A equipe Perpec abre `auditoria.html`, digita o protocolo (RQF) do fornecedor, confere a pasta de evidências e o certificado, e reavalia item a item com base no que foi realmente comprovado. Escreve o parecer final.
5. **Gerar e anexar o relatório.** Clica em "Baixar PDF do Relatório de Auditoria". O PDF é baixado localmente — anexe-o manualmente à coluna de arquivos do item no Monday.
6. **Fechar o registro.** Preencha manualmente no Monday a nota final oficial e a classificação (Aprovado / Aprovado com Ressalvas / Não Aprovado), com base no relatório de auditoria — essa é a nota que vale, não a autodeclarada pelo fornecedor.
