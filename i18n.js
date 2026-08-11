/* =====================================================================
   i18n.js — dicionário de idiomas compartilhado por index.html e auditoria.html
   =====================================================================

   COMO ADICIONAR / EDITAR UM IDIOMA
   ---------------------------------
   1. Acrescente o código em LANGS (código, bandeira, nome nativo).
   2. Acrescente o mesmo código em LOCALE (formato de data) e DEC (separador decimal).
   3. Copie o bloco I18N.en inteiro, troque a chave e traduza os valores.
      Qualquer chave que faltar cai automaticamente no inglês (I18N.en).
   4. Acrescente as colunas do idioma na planilha Google:
        aba Perguntas -> categoria_XX e texto_XX
        aba Escopo    -> nome_XX
        aba Textos    -> conteudo_XX
      (XX = o código do idioma. Colunas vazias caem no inglês e, na falta
      dele, no português.)

   ATENÇÃO — PDF: o jsPDF usa a fonte Helvetica padrão, que não desenha
   caracteres chineses/japoneses/coreanos/cirílicos/árabes. Idiomas nessa
   condição devem ser marcados com pdf:'en' em LANGS: a interface aparece
   no idioma escolhido, mas o PDF sai em inglês.
   ===================================================================== */

/* Idiomas oferecidos. pdf: idioma usado no PDF quando este idioma
   não pode ser renderizado pela fonte padrão do jsPDF.               */
var LANGS = [
  { code:'en', flag:'🇺🇸', nome:'English'    },
  { code:'pt', flag:'🇧🇷', nome:'Português'  },
  { code:'es', flag:'🇪🇸', nome:'Español'    },
  { code:'zh', flag:'🇨🇳', nome:'中文',  pdf:'en' },
  { code:'fr', flag:'🇫🇷', nome:'Français'   },
  { code:'it', flag:'🇮🇹', nome:'Italiano'   },
  { code:'de', flag:'🇩🇪', nome:'Deutsch'    }
];

var LANG_DEFAULT = 'en';

/* Locale para data/hora e separador decimal exibido. */
var LOCALE = { en:'en-US', pt:'pt-BR', es:'es-ES', zh:'zh-CN', fr:'fr-FR', it:'it-IT', de:'de-DE' };
var DEC    = { en:'.',     pt:',',     es:',',     zh:'.',     fr:',',     it:',',     de:','     };

/* ---------------------------------------------------------------------
   DICIONÁRIO DA INTERFACE E DOS PDFs
   Chaves com sufixo ".br" são a variante brasileira do campo (CNPJ, UF).
   Chaves txt.* carregam HTML — a aba "Textos" da planilha sobrescreve.
   --------------------------------------------------------------------- */
var I18N = {};

/* ============================== ENGLISH ============================== */
I18N.en = {
  'ui.title'        : 'Supplier Self-Assessment — Perpec Oilfield Supply',
  'hdr.title'       : 'Supplier Self-Assessment',
  'hdr.sub'         : 'Qualification and approval portal',
  'hdr.trace'       : 'Traceability',
  'hdr.required'    : '* Required fields',
  'rt.answered'     : '{a} / {b} answered',

  'lang.title'      : 'Choose your language',
  'lang.sub'        : 'The form and the PDF report you download will be issued in the language you select. You can change it at any time in the top bar.',
  'lang.go'         : 'Continue',
  'lang.label'      : 'Language',

  'card.how'        : 'How to Complete This Questionnaire',
  'card.evid'       : 'Evidence Folder',
  'card.privacy'    : 'Privacy Notice (LGPD / GDPR)',
  'card.ident'      : 'Supplier Identification',
  'card.cert'       : 'Quality Management System Certification',
  'card.scope'      : 'Supply Scope',
  'card.result'     : 'Assessment Result',
  'card.aware'      : 'Acknowledgement on the Submission of Evidence',

  'txt.how'         : 'For each item of the questionnaire, classify the supplier\'s actual situation:'
                    + '<ul><li><strong>Compliant (OK):</strong> formal documentation exists <strong>and</strong> the practice is effectively carried out.</li>'
                    + '<li><strong>Partial:</strong> documentation exists but the practice is not carried out — <strong>or</strong> the practice is carried out but there is no formal documentation.</li>'
                    + '<li><strong>Non-Compliant (NC):</strong> there is no documentation <strong>and</strong> the practice is not carried out.</li>'
                    + '<li><strong>Not Applicable:</strong> the requirement does not apply to the scope of this supply. In this case a justification in the comment field is <strong>mandatory</strong>, or a reference to the evidence placed in the folder indicated below.</li></ul>'
                    + '<p style="margin-top:10px"><strong>Important:</strong> answers marked as "Compliant" must have their evidence described in the notes field or provided in the evidence folder. The score you report is provisional — Perpec may review the evidence and adjust the classification of any item during the audit.</p>',
  'txt.evid'        : '<p>Upload all supporting documents (certificates, procedures, records, photos, etc.) relating to the answers in this questionnaire to the folder below, provided by Perpec specifically for this supplier.</p>',
  'txt.privacy'     : 'Before you start, please read carefully:'
                    + '<ul><li>All documents submitted will be stored securely.</li>'
                    + '<li>The information will be used <strong>exclusively</strong> for supplier qualification, approval and monitoring purposes.</li>'
                    + '<li>Data will be processed in accordance with the Brazilian General Data Protection Law (<strong>LGPD</strong>) and, where applicable, the <strong>GDPR</strong>.</li>'
                    + '<li>The documents submitted will be stored in a controlled corporate environment (<strong>Monday.com</strong>), with access restricted to the supplier management team.</li></ul>',
  'txt.aware'       : 'The qualification process includes the review of documentary evidence supporting the answers given in this questionnaire. Answers classified as <strong>Compliant</strong> or <strong>Partial</strong> must have the corresponding evidence uploaded to the evidence folder linked to this form, or a waiver justification recorded in the comment field of the respective item.'
                    + '<br><br><strong>Insufficient evidence, without an accepted justification, will result in the discontinuation of the qualification process.</strong>',

  'privacy.accept'  : 'I have read and agree to the processing of my data as described above.',
  'aware.accept'    : 'I acknowledge that the qualification process may be discontinued if the evidence or waiver justifications are not provided.',
  'lock.hint'       : 'Tick the privacy acceptance above to unlock the form.',

  'evid.open'       : '⬆ Open Evidence Folder',
  'evid.none'       : '⚠ No evidence folder is linked to this link. Please ask Perpec for the correct access link.',

  'f.trace'         : 'Traceability',
  'f.datetime'      : 'Date and Time of Completion',
  'f.legalName'     : 'Legal Name',
  'f.legalName.ph'  : 'Full registered company name',
  'f.tradeName'     : 'Trade Name',
  'f.tradeName.ph'  : 'Trade name',
  'f.country'       : 'Country',
  'f.country.ph'    : 'Select the country…',
  'f.taxid'         : 'Tax ID / VAT / Company Reg. No.',
  'f.taxid.br'      : 'CNPJ',
  'f.taxid.ph'      : 'Company tax identification number',
  'f.taxid.ph.br'   : '00.000.000/0000-00',
  'f.taxdoc'        : 'Business Registration Document',
  'f.taxdoc.br'     : 'CNPJ Card',
  'f.address'       : 'Address',
  'f.address.ph'    : 'Street, number, district',
  'f.city'          : 'City',
  'f.city.ph'       : 'City',
  'f.state'         : 'State / Province / Region',
  'f.state.br'      : 'State (UF)',
  'f.state.ph'      : 'State, province or region',
  'f.state.ph.br'   : 'UF',
  'f.contact'       : 'Contact Person',
  'f.contact.ph'    : 'Full name',
  'f.role'          : 'Job Title',
  'f.role.ph'       : 'Job title / function',
  'f.email'         : 'E-mail',
  'f.email.ph'      : 'email@company.com',
  'f.phone'         : 'Phone',
  'f.phone.ph'      : '+00 000 000 0000',
  'f.phone.ph.br'   : '(00) 00000-0000',

  'file.pick'       : 'Select file',
  'file.change'     : 'Change file',
  'file.none'       : 'No file',

  'cert.q'          : 'Do you hold a valid Quality Management System certification?',
  'cert.yes'        : 'Yes',
  'cert.no'         : 'No',
  'cert.attach'     : 'Attach the QMS certificate',

  'scope.desc'      : 'Scope pre-defined by the Perpec buyer who sent you this form.',
  'scope.warn'      : '⚠ Scope not defined. Please use the specific link sent by your Perpec buyer to access this questionnaire.',
  'scope.count'     : '{n} selected',
  'scope.tag.produto': 'Product',
  'scope.tag.servico': 'Service',

  'q.ph.comment'    : 'Notes / commented evidence for this question…',
  'q.warn.na'       : '⚠ "Not Applicable" requires a justification in the comment field (or evidence in the folder indicated above).',
  'q.banner.autofill': '✓ Section filled in automatically as <strong>Compliant</strong> based on the QMS certificate you reported. Adjust individual items if needed.',
  'q.sub.prodgeral' : 'Loaded automatically for suppliers of products / manufacturing processes.',
  'q.empty'         : 'Select at least one scope above to load the questionnaire. The QMS questions will appear automatically.',

  'st.Conforme'     : 'Compliant',
  'st.Regular'      : 'Partial',
  'st.Não Conforme' : 'Non-Compliant',
  'st.Não Aplicável': 'Not Applicable',
  'st.short.na'     : 'N/A',

  'tag.SGQ'         : 'QMS',
  'tag.TECNICA'     : 'Technical',

  'res.sgq'         : 'QMS Score (50%)',
  'res.tec'         : 'Technical Score (50%)',
  'res.final'       : 'Final Score',
  'res.waiting'     : 'Awaiting answers… ({a}/{b})',
  'res.done'        : '{label} — {a}/{b} answered',
  'res.certNote'    : ' (guaranteed by a valid QMS certification with evidence)',

  'cls.reprovado'   : 'Not Approved',
  'cls.ressalvas'   : 'Approved with Reservations',
  'cls.aprovado'    : 'Approved',

  'btn.clear'       : 'Clear All',
  'btn.pdf'         : '⬇ Download PDF',
  'btn.send'        : '⬆ Submit Self-Assessment',
  'btn.pdfing'      : '⏳ Generating PDF…',
  'btn.sending'     : '⏳ Sending…',

  'attach.info'     : '📎 {n} attachment(s) · {size} (the PDF report is generated and added to this total upon submission)',

  'toast.pending'   : 'Outstanding items:',
  'toast.more'      : '…and {n} more',
  'toast.ok'        : '✓ Self-assessment submitted!\nData + {n} file(s) ({size}).',
  'toast.noHook'    : 'PDF generated.\n(Make webhook not configured)',
  'toast.failHook'  : 'Failed to send to Make.\nThe PDF was downloaded. Check the webhook URL and try again.',
  'toast.payload'   : 'The total payload ({size}) exceeds the {max} MB limit.\nReduce the size of the registration document and/or the QMS certificate (a lighter photo or scan) and try again.\nThe PDF was downloaded locally.',
  'toast.error'     : 'Error while submitting: {msg}\nThe PDF was downloaded locally.',
  'toast.cleared'   : 'Form cleared.',
  'toast.fileBig'   : 'Warning: "{name}" is {size} (over {max} MB).\nIt will still be sent, but consider reducing the file size.',
  'toast.pdfEn'     : 'Note: your PDF report is issued in English — the PDF font cannot render Chinese characters.',
  'confirm.clear'   : 'Clear the whole form?',

  'err.privacy'     : 'Privacy acceptance',
  'err.aware'       : 'Acknowledgement on the submission of evidence',
  'err.cert'        : 'Do you hold a QMS certification? (Yes/No)',
  'err.certFile'    : 'QMS certificate',
  'err.scope'       : 'At least one supply scope',
  'err.pend'        : '{n} question(s) without a status',
  'err.pendNA'      : '{n} "Not Applicable" question(s) without a justification in the comment',

  'footer'          : 'Perpec Oilfield Supply — Supplier Self-Assessment Portal',

  /* ---- PDF do fornecedor ---- */
  'pdf.title'       : 'Supplier Self-Assessment',
  'pdf.docname'     : 'Supplier Self-Assessment',
  'pdf.ident'       : 'Supplier Identification',
  'pdf.legalName'   : 'Legal Name:',
  'pdf.tradeName'   : 'Trade Name:',
  'pdf.taxid'       : 'Tax ID:',
  'pdf.address'     : 'Address:',
  'pdf.country'     : 'Country:',
  'pdf.contactPer'  : 'Contact Person:',
  'pdf.contact'     : 'Contact:',
  'pdf.cert'        : 'QMS Certification:',
  'pdf.scopes'      : 'Scopes:',
  'pdf.evidFolder'  : 'Evidence Folder:',
  'pdf.result'      : 'ASSESSMENT RESULT',
  'pdf.finalClass'  : 'Final Classification: ',
  'pdf.certFloor'   : '* Final score guaranteed at {n} points due to a valid QMS certification with the evidence provided.',
  'pdf.col.code'    : 'Code',
  'pdf.col.q'       : 'Question',
  'pdf.col.status'  : 'Status',
  'pdf.col.pts'     : 'Pts',
  'pdf.col.comment' : 'Comment',
  'pdf.legend'      : '* "Compliant" without commented evidence — provisional score, subject to verification of the evidence during the audit.',
  'pdf.page'        : 'Page {a} / {b}',

  /* ---- PDF da auditoria ---- */
  'apdf.title'      : 'Audit Report — Self-Assessment',
  'apdf.docname'    : 'Audit Report',
  'apdf.ident'      : 'Audit Identification',
  'apdf.trace'      : 'Traceability:',
  'apdf.auditor'    : 'Lead Auditor:',
  'apdf.date'       : 'Audit Date:',
  'apdf.folder'     : 'Evidence Folder Reviewed:',
  'apdf.certConf'   : 'QMS Certification Confirmed:',
  'apdf.scopes'     : 'Scopes Audited:',
  'apdf.result'     : 'AUDIT RESULT',
  'apdf.col.comment': 'Auditor\'s Opinion',
  'apdf.final'      : 'FINAL AUDIT OPINION'
};

/* ============================== PORTUGUÊS ============================ */
I18N.pt = {
  'ui.title'        : 'Autoavaliação de Fornecedores — Perpec Oilfield Supply',
  'hdr.title'       : 'Autoavaliação de Fornecedores',
  'hdr.sub'         : 'Portal de qualificação e homologação',
  'hdr.trace'       : 'Rastreabilidade',
  'hdr.required'    : '* Campos obrigatórios',
  'rt.answered'     : '{a} / {b} respondidas',

  'lang.title'      : 'Escolha o seu idioma',
  'lang.sub'        : 'O formulário e o PDF que você baixar serão emitidos no idioma escolhido. Você pode trocar a qualquer momento na barra superior.',
  'lang.go'         : 'Continuar',
  'lang.label'      : 'Idioma',

  'card.how'        : 'Como Responder este Questionário',
  'card.evid'       : 'Pasta de Evidências',
  'card.privacy'    : 'Aviso de Privacidade (LGPD / GDPR)',
  'card.ident'      : 'Identificação do Fornecedor',
  'card.cert'       : 'Certificação de Sistema de Gestão da Qualidade',
  'card.scope'      : 'Escopo de Fornecimento',
  'card.result'     : 'Resultado da Avaliação',
  'card.aware'      : 'Ciência sobre Envio de Evidências',

  'txt.how'         : 'Para cada item do questionário, classifique a situação real do fornecedor:'
                    + '<ul><li><strong>Conforme (OK):</strong> existe documentação formal <strong>e</strong> a prática é efetivamente realizada.</li>'
                    + '<li><strong>Regular:</strong> existe documentação, mas a prática não é realizada — <strong>ou</strong> a prática é realizada, mas não existe documentação formal.</li>'
                    + '<li><strong>Não Conforme (NC):</strong> não existe documentação <strong>e</strong> a prática não é realizada.</li>'
                    + '<li><strong>Não Aplicável:</strong> o requisito não se aplica ao escopo deste fornecimento. Nesse caso é <strong>obrigatório</strong> justificar no campo de comentário, ou referenciar a evidência apresentada na pasta indicada abaixo.</li></ul>'
                    + '<p style="margin-top:10px"><strong>Importante:</strong> respostas marcadas como "Conforme" devem ter a evidência comentada (no campo de observações) ou apresentada na pasta de evidências. A nota informada é provisória — a Perpec poderá conferir as evidências e ajustar a classificação de qualquer item durante a auditoria.</p>',
  'txt.evid'        : '<p>Envie todos os documentos comprobatórios (certificados, procedimentos, registros, fotos etc.) referentes às respostas deste questionário para a pasta abaixo, fornecida pela Perpec especificamente para este fornecedor.</p>',
  'txt.privacy'     : 'Antes de iniciar o preenchimento, leia atentamente:'
                    + '<ul><li>Todos os documentos enviados serão armazenados de forma segura.</li>'
                    + '<li>As informações serão utilizadas <strong>exclusivamente</strong> para fins de qualificação, homologação e monitoramento de fornecedores.</li>'
                    + '<li>Os dados serão tratados em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD)</strong> e, quando aplicável, com o <strong>GDPR</strong>.</li>'
                    + '<li>Os documentos enviados serão armazenados em ambiente corporativo controlado (<strong>Monday.com</strong>), com acesso restrito à equipe responsável pela gestão de fornecedores.</li></ul>',
  'txt.aware'       : 'O processo de qualificação prevê a análise das evidências documentais que comprovem as respostas informadas neste questionário. Respostas classificadas como <strong>Conforme</strong> ou <strong>Regular</strong> devem ter evidência correspondente enviada na pasta de evidências vinculada a este formulário, ou justificativa de dispensa registrada no campo de comentários do respectivo item.'
                    + '<br><br><strong>A ausência de evidências suficientes, sem justificativa aceita, implicará na descontinuação do processo de qualificação.</strong>',

  'privacy.accept'  : 'Li e estou de acordo com o tratamento dos meus dados conforme descrito acima.',
  'aware.accept'    : 'Estou ciente de que o processo de qualificação poderá ser descontinuado caso as evidências ou justificativas de dispensa não sejam apresentadas.',
  'lock.hint'       : 'Marque o aceite de privacidade acima para liberar o formulário.',

  'evid.open'       : '⬆ Abrir Pasta de Evidências',
  'evid.none'       : '⚠ Nenhuma pasta de evidências foi vinculada a este link. Solicite à Perpec o link correto de acesso.',

  'f.trace'         : 'Rastreabilidade',
  'f.datetime'      : 'Data e Hora do Preenchimento',
  'f.legalName'     : 'Razão Social',
  'f.legalName.ph'  : 'Razão social completa',
  'f.tradeName'     : 'Nome Fantasia',
  'f.tradeName.ph'  : 'Nome fantasia',
  'f.country'       : 'País',
  'f.country.ph'    : 'Selecione o país…',
  'f.taxid'         : 'Identificação Fiscal / VAT / Registro da Empresa',
  'f.taxid.br'      : 'CNPJ',
  'f.taxid.ph'      : 'Número de identificação fiscal da empresa',
  'f.taxid.ph.br'   : '00.000.000/0000-00',
  'f.taxdoc'        : 'Documento de Registro da Empresa',
  'f.taxdoc.br'     : 'Cartão CNPJ',
  'f.address'       : 'Endereço',
  'f.address.ph'    : 'Logradouro, nº, bairro',
  'f.city'          : 'Cidade',
  'f.city.ph'       : 'Cidade',
  'f.state'         : 'Estado / Província / Região',
  'f.state.br'      : 'Estado (UF)',
  'f.state.ph'      : 'Estado, província ou região',
  'f.state.ph.br'   : 'UF',
  'f.contact'       : 'Nome do Responsável',
  'f.contact.ph'    : 'Nome completo',
  'f.role'          : 'Cargo',
  'f.role.ph'       : 'Cargo / função',
  'f.email'         : 'E-mail',
  'f.email.ph'      : 'email@empresa.com.br',
  'f.phone'         : 'Telefone',
  'f.phone.ph'      : '+00 000 000 0000',
  'f.phone.ph.br'   : '(00) 00000-0000',

  'file.pick'       : 'Selecionar arquivo',
  'file.change'     : 'Trocar arquivo',
  'file.none'       : 'Nenhum arquivo',

  'cert.q'          : 'Possui certificação de Sistema de Gestão da Qualidade válida?',
  'cert.yes'        : 'Sim',
  'cert.no'         : 'Não',
  'cert.attach'     : 'Anexar certificado de SGQ',

  'scope.desc'      : 'Escopo pré-definido pelo responsável Perpec que enviou este formulário.',
  'scope.warn'      : '⚠ Escopo não definido. Utilize o link específico enviado pelo comprador Perpec para acessar este questionário.',
  'scope.count'     : '{n} selecionado(s)',
  'scope.tag.produto': 'Produto',
  'scope.tag.servico': 'Serviço',

  'q.ph.comment'    : 'Observações / evidência comentada desta pergunta…',
  'q.warn.na'       : '⚠ "Não Aplicável" requer justificativa no campo de comentário (ou evidência na pasta indicada acima).',
  'q.banner.autofill': '✓ Seção preenchida automaticamente como <strong>Conforme</strong> com base no certificado de SGQ informado. Ajuste itens individuais se necessário.',
  'q.sub.prodgeral' : 'Carregado automaticamente para fornecedores de produtos/processos produtivos.',
  'q.empty'         : 'Selecione ao menos um escopo acima para carregar o questionário. As perguntas de SGQ aparecerão automaticamente.',

  'st.Conforme'     : 'Conforme',
  'st.Regular'      : 'Regular',
  'st.Não Conforme' : 'Não Conforme',
  'st.Não Aplicável': 'Não Aplicável',
  'st.short.na'     : 'N/A',

  'tag.SGQ'         : 'SGQ',
  'tag.TECNICA'     : 'Técnica',

  'res.sgq'         : 'Nota SGQ (50%)',
  'res.tec'         : 'Nota Técnica (50%)',
  'res.final'       : 'Nota Final',
  'res.waiting'     : 'Aguardando respostas… ({a}/{b})',
  'res.done'        : '{label} — {a}/{b} respondidas',
  'res.certNote'    : ' (garantida por certificação de SGQ válida com evidência)',

  'cls.reprovado'   : 'Não Aprovado',
  'cls.ressalvas'   : 'Aprovado com Ressalvas',
  'cls.aprovado'    : 'Aprovado',

  'btn.clear'       : 'Limpar Tudo',
  'btn.pdf'         : '⬇ Baixar PDF',
  'btn.send'        : '⬆ Enviar Autoavaliação',
  'btn.pdfing'      : '⏳ Gerando PDF…',
  'btn.sending'     : '⏳ Enviando…',

  'attach.info'     : '📎 {n} anexo(s) · {size} (o relatório PDF é gerado e somado a este total no envio)',

  'toast.pending'   : 'Pendências:',
  'toast.more'      : '…e mais {n}',
  'toast.ok'        : '✓ Autoavaliação enviada!\nDados + {n} arquivo(s) ({size}).',
  'toast.noHook'    : 'PDF gerado.\n(Webhook do Make não configurado)',
  'toast.failHook'  : 'Falha ao enviar ao Make.\nO PDF foi baixado. Verifique a URL do webhook e tente novamente.',
  'toast.payload'   : 'O payload total ({size}) excede o limite de {max} MB.\nReduza o tamanho do documento de registro e/ou do certificado de SGQ (foto ou scan mais leve) e tente novamente.\nO PDF foi baixado localmente.',
  'toast.error'     : 'Erro ao enviar: {msg}\nO PDF foi baixado localmente.',
  'toast.cleared'   : 'Formulário limpo.',
  'toast.fileBig'   : 'Atenção: "{name}" tem {size} (acima de {max} MB).\nSerá enviado, mas considere reduzir o arquivo.',
  'toast.pdfEn'     : 'Observação: o PDF é emitido em inglês — a fonte do PDF não desenha caracteres chineses.',
  'confirm.clear'   : 'Limpar todo o formulário?',

  'err.privacy'     : 'Aceite de privacidade',
  'err.aware'       : 'Ciência sobre envio de evidências',
  'err.cert'        : 'Possui certificação de SGQ? (Sim/Não)',
  'err.certFile'    : 'Certificado de SGQ',
  'err.scope'       : 'Ao menos um escopo de fornecimento',
  'err.pend'        : '{n} pergunta(s) sem status',
  'err.pendNA'      : '{n} pergunta(s) "Não Aplicável" sem justificativa no comentário',

  'footer'          : 'Perpec Oilfield Supply — Portal de Autoavaliação de Fornecedores',

  'pdf.title'       : 'Autoavaliação de Fornecedor',
  'pdf.docname'     : 'Autoavaliação de Fornecedor',
  'pdf.ident'       : 'Identificação do Fornecedor',
  'pdf.legalName'   : 'Razão Social:',
  'pdf.tradeName'   : 'Nome Fantasia:',
  'pdf.taxid'       : 'Identificação Fiscal:',
  'pdf.address'     : 'Endereço:',
  'pdf.country'     : 'País:',
  'pdf.contactPer'  : 'Responsável:',
  'pdf.contact'     : 'Contato:',
  'pdf.cert'        : 'Certificação SGQ:',
  'pdf.scopes'      : 'Escopos:',
  'pdf.evidFolder'  : 'Pasta de Evidências:',
  'pdf.result'      : 'RESULTADO DA AVALIAÇÃO',
  'pdf.finalClass'  : 'Classificação Final: ',
  'pdf.certFloor'   : '* Nota final garantida em {n} pontos devido à certificação de SGQ válida, com evidência apresentada.',
  'pdf.col.code'    : 'Cód.',
  'pdf.col.q'       : 'Pergunta',
  'pdf.col.status'  : 'Status',
  'pdf.col.pts'     : 'Pts',
  'pdf.col.comment' : 'Comentário',
  'pdf.legend'      : '* "Conforme" sem evidência comentada — nota provisória, sujeita a conferência da evidência na auditoria.',
  'pdf.page'        : 'Pág. {a} / {b}',

  'apdf.title'      : 'Relatório de Auditoria — Autoavaliação',
  'apdf.docname'    : 'Relatório de Auditoria',
  'apdf.ident'      : 'Identificação da Auditoria',
  'apdf.trace'      : 'Rastreabilidade:',
  'apdf.auditor'    : 'Auditor Responsável:',
  'apdf.date'       : 'Data da Auditoria:',
  'apdf.folder'     : 'Pasta de Evidências Consultada:',
  'apdf.certConf'   : 'Certificação SGQ Confirmada:',
  'apdf.scopes'     : 'Escopos Auditados:',
  'apdf.result'     : 'RESULTADO DA AUDITORIA',
  'apdf.col.comment': 'Parecer do Auditor',
  'apdf.final'      : 'PARECER FINAL DA AUDITORIA'
};

/* ============================== ESPAÑOL ============================== */
I18N.es = {
  'ui.title'        : 'Autoevaluación de Proveedores — Perpec Oilfield Supply',
  'hdr.title'       : 'Autoevaluación de Proveedores',
  'hdr.sub'         : 'Portal de calificación y homologación',
  'hdr.trace'       : 'Trazabilidad',
  'hdr.required'    : '* Campos obligatorios',
  'rt.answered'     : '{a} / {b} respondidas',

  'lang.title'      : 'Elija su idioma',
  'lang.sub'        : 'El formulario y el informe PDF que descargue se emitirán en el idioma seleccionado. Puede cambiarlo en cualquier momento en la barra superior.',
  'lang.go'         : 'Continuar',
  'lang.label'      : 'Idioma',

  'card.how'        : 'Cómo Responder este Cuestionario',
  'card.evid'       : 'Carpeta de Evidencias',
  'card.privacy'    : 'Aviso de Privacidad (LGPD / GDPR)',
  'card.ident'      : 'Identificación del Proveedor',
  'card.cert'       : 'Certificación del Sistema de Gestión de la Calidad',
  'card.scope'      : 'Alcance del Suministro',
  'card.result'     : 'Resultado de la Evaluación',
  'card.aware'      : 'Conformidad sobre el Envío de Evidencias',

  'txt.how'         : 'Para cada ítem del cuestionario, clasifique la situación real del proveedor:'
                    + '<ul><li><strong>Conforme (OK):</strong> existe documentación formal <strong>y</strong> la práctica se realiza efectivamente.</li>'
                    + '<li><strong>Parcial:</strong> existe documentación pero la práctica no se realiza — <strong>o</strong> la práctica se realiza pero no existe documentación formal.</li>'
                    + '<li><strong>No Conforme (NC):</strong> no existe documentación <strong>y</strong> la práctica no se realiza.</li>'
                    + '<li><strong>No Aplicable:</strong> el requisito no aplica al alcance de este suministro. En ese caso es <strong>obligatorio</strong> justificar en el campo de comentario, o referenciar la evidencia presentada en la carpeta indicada abajo.</li></ul>'
                    + '<p style="margin-top:10px"><strong>Importante:</strong> las respuestas marcadas como "Conforme" deben tener la evidencia comentada (en el campo de observaciones) o presentada en la carpeta de evidencias. La nota informada es provisional — Perpec podrá verificar las evidencias y ajustar la clasificación de cualquier ítem durante la auditoría.</p>',
  'txt.evid'        : '<p>Envíe todos los documentos comprobatorios (certificados, procedimientos, registros, fotos, etc.) referentes a las respuestas de este cuestionario a la carpeta indicada abajo, proporcionada por Perpec específicamente para este proveedor.</p>',
  'txt.privacy'     : 'Antes de comenzar, lea atentamente:'
                    + '<ul><li>Todos los documentos enviados se almacenarán de forma segura.</li>'
                    + '<li>La información se utilizará <strong>exclusivamente</strong> para fines de calificación, homologación y monitoreo de proveedores.</li>'
                    + '<li>Los datos serán tratados conforme a la Ley General de Protección de Datos de Brasil (<strong>LGPD</strong>) y, cuando aplique, al <strong>GDPR</strong>.</li>'
                    + '<li>Los documentos enviados se almacenarán en un entorno corporativo controlado (<strong>Monday.com</strong>), con acceso restringido al equipo de gestión de proveedores.</li></ul>',
  'txt.aware'       : 'El proceso de calificación prevé el análisis de las evidencias documentales que comprueben las respuestas de este cuestionario. Las respuestas clasificadas como <strong>Conforme</strong> o <strong>Parcial</strong> deben tener la evidencia correspondiente enviada a la carpeta de evidencias vinculada a este formulario, o una justificación de dispensa registrada en el campo de comentarios del ítem respectivo.'
                    + '<br><br><strong>La ausencia de evidencias suficientes, sin justificación aceptada, implicará la discontinuación del proceso de calificación.</strong>',

  'privacy.accept'  : 'He leído y estoy de acuerdo con el tratamiento de mis datos según lo descrito anteriormente.',
  'aware.accept'    : 'Soy consciente de que el proceso de calificación podrá ser discontinuado si no se presentan las evidencias o las justificaciones de dispensa.',
  'lock.hint'       : 'Marque la aceptación de privacidad arriba para desbloquear el formulario.',

  'evid.open'       : '⬆ Abrir Carpeta de Evidencias',
  'evid.none'       : '⚠ Ninguna carpeta de evidencias fue vinculada a este enlace. Solicite a Perpec el enlace correcto de acceso.',

  'f.trace'         : 'Trazabilidad',
  'f.datetime'      : 'Fecha y Hora de Cumplimentación',
  'f.legalName'     : 'Razón Social',
  'f.legalName.ph'  : 'Razón social completa',
  'f.tradeName'     : 'Nombre Comercial',
  'f.tradeName.ph'  : 'Nombre comercial',
  'f.country'       : 'País',
  'f.country.ph'    : 'Seleccione el país…',
  'f.taxid'         : 'Identificación Fiscal / NIF / Registro Mercantil',
  'f.taxid.br'      : 'CNPJ',
  'f.taxid.ph'      : 'Número de identificación fiscal de la empresa',
  'f.taxid.ph.br'   : '00.000.000/0000-00',
  'f.taxdoc'        : 'Documento de Registro de la Empresa',
  'f.taxdoc.br'     : 'Tarjeta CNPJ',
  'f.address'       : 'Dirección',
  'f.address.ph'    : 'Calle, número, barrio',
  'f.city'          : 'Ciudad',
  'f.city.ph'       : 'Ciudad',
  'f.state'         : 'Estado / Provincia / Región',
  'f.state.br'      : 'Estado (UF)',
  'f.state.ph'      : 'Estado, provincia o región',
  'f.state.ph.br'   : 'UF',
  'f.contact'       : 'Nombre del Responsable',
  'f.contact.ph'    : 'Nombre completo',
  'f.role'          : 'Cargo',
  'f.role.ph'       : 'Cargo / función',
  'f.email'         : 'Correo electrónico',
  'f.email.ph'      : 'email@empresa.com',
  'f.phone'         : 'Teléfono',
  'f.phone.ph'      : '+00 000 000 0000',
  'f.phone.ph.br'   : '(00) 00000-0000',

  'file.pick'       : 'Seleccionar archivo',
  'file.change'     : 'Cambiar archivo',
  'file.none'       : 'Ningún archivo',

  'cert.q'          : '¿Posee certificación válida de Sistema de Gestión de la Calidad?',
  'cert.yes'        : 'Sí',
  'cert.no'         : 'No',
  'cert.attach'     : 'Adjuntar certificado del SGC',

  'scope.desc'      : 'Alcance predefinido por el responsable de Perpec que envió este formulario.',
  'scope.warn'      : '⚠ Alcance no definido. Utilice el enlace específico enviado por el comprador de Perpec para acceder a este cuestionario.',
  'scope.count'     : '{n} seleccionado(s)',
  'scope.tag.produto': 'Producto',
  'scope.tag.servico': 'Servicio',

  'q.ph.comment'    : 'Observaciones / evidencia comentada de esta pregunta…',
  'q.warn.na'       : '⚠ "No Aplicable" requiere justificación en el campo de comentario (o evidencia en la carpeta indicada arriba).',
  'q.banner.autofill': '✓ Sección completada automáticamente como <strong>Conforme</strong> con base en el certificado del SGC informado. Ajuste ítems individuales si es necesario.',
  'q.sub.prodgeral' : 'Cargado automáticamente para proveedores de productos/procesos productivos.',
  'q.empty'         : 'Seleccione al menos un alcance arriba para cargar el cuestionario. Las preguntas del SGC aparecerán automáticamente.',

  'st.Conforme'     : 'Conforme',
  'st.Regular'      : 'Parcial',
  'st.Não Conforme' : 'No Conforme',
  'st.Não Aplicável': 'No Aplicable',
  'st.short.na'     : 'N/A',

  'tag.SGQ'         : 'SGC',
  'tag.TECNICA'     : 'Técnica',

  'res.sgq'         : 'Nota SGC (50%)',
  'res.tec'         : 'Nota Técnica (50%)',
  'res.final'       : 'Nota Final',
  'res.waiting'     : 'Esperando respuestas… ({a}/{b})',
  'res.done'        : '{label} — {a}/{b} respondidas',
  'res.certNote'    : ' (garantizada por certificación del SGC válida con evidencia)',

  'cls.reprovado'   : 'No Aprobado',
  'cls.ressalvas'   : 'Aprobado con Reservas',
  'cls.aprovado'    : 'Aprobado',

  'btn.clear'       : 'Borrar Todo',
  'btn.pdf'         : '⬇ Descargar PDF',
  'btn.send'        : '⬆ Enviar Autoevaluación',
  'btn.pdfing'      : '⏳ Generando PDF…',
  'btn.sending'     : '⏳ Enviando…',

  'attach.info'     : '📎 {n} adjunto(s) · {size} (el informe PDF se genera y se suma a este total en el envío)',

  'toast.pending'   : 'Pendientes:',
  'toast.more'      : '…y {n} más',
  'toast.ok'        : '✓ ¡Autoevaluación enviada!\nDatos + {n} archivo(s) ({size}).',
  'toast.noHook'    : 'PDF generado.\n(Webhook de Make no configurado)',
  'toast.failHook'  : 'Fallo al enviar a Make.\nEl PDF fue descargado. Verifique la URL del webhook e inténtelo de nuevo.',
  'toast.payload'   : 'El payload total ({size}) excede el límite de {max} MB.\nReduzca el tamaño del documento de registro y/o del certificado del SGC (foto o escaneo más ligero) e inténtelo de nuevo.\nEl PDF fue descargado localmente.',
  'toast.error'     : 'Error al enviar: {msg}\nEl PDF fue descargado localmente.',
  'toast.cleared'   : 'Formulario borrado.',
  'toast.fileBig'   : 'Atención: "{name}" tiene {size} (por encima de {max} MB).\nSerá enviado, pero considere reducir el archivo.',
  'toast.pdfEn'     : 'Nota: el informe PDF se emite en inglés — la fuente del PDF no dibuja caracteres chinos.',
  'confirm.clear'   : '¿Borrar todo el formulario?',

  'err.privacy'     : 'Aceptación de privacidad',
  'err.aware'       : 'Conformidad sobre el envío de evidencias',
  'err.cert'        : '¿Posee certificación del SGC? (Sí/No)',
  'err.certFile'    : 'Certificado del SGC',
  'err.scope'       : 'Al menos un alcance de suministro',
  'err.pend'        : '{n} pregunta(s) sin estado',
  'err.pendNA'      : '{n} pregunta(s) "No Aplicable" sin justificación en el comentario',

  'footer'          : 'Perpec Oilfield Supply — Portal de Autoevaluación de Proveedores',

  'pdf.title'       : 'Autoevaluación de Proveedor',
  'pdf.docname'     : 'Autoevaluación de Proveedor',
  'pdf.ident'       : 'Identificación del Proveedor',
  'pdf.legalName'   : 'Razón Social:',
  'pdf.tradeName'   : 'Nombre Comercial:',
  'pdf.taxid'       : 'Identificación Fiscal:',
  'pdf.address'     : 'Dirección:',
  'pdf.country'     : 'País:',
  'pdf.contactPer'  : 'Responsable:',
  'pdf.contact'     : 'Contacto:',
  'pdf.cert'        : 'Certificación SGC:',
  'pdf.scopes'      : 'Alcances:',
  'pdf.evidFolder'  : 'Carpeta de Evidencias:',
  'pdf.result'      : 'RESULTADO DE LA EVALUACIÓN',
  'pdf.finalClass'  : 'Clasificación Final: ',
  'pdf.certFloor'   : '* Nota final garantizada en {n} puntos debido a la certificación del SGC válida, con evidencia presentada.',
  'pdf.col.code'    : 'Cód.',
  'pdf.col.q'       : 'Pregunta',
  'pdf.col.status'  : 'Estado',
  'pdf.col.pts'     : 'Pts',
  'pdf.col.comment' : 'Comentario',
  'pdf.legend'      : '* "Conforme" sin evidencia comentada — nota provisional, sujeta a verificación de la evidencia en la auditoría.',
  'pdf.page'        : 'Pág. {a} / {b}',

  'apdf.title'      : 'Informe de Auditoría — Autoevaluación',
  'apdf.docname'    : 'Informe de Auditoría',
  'apdf.ident'      : 'Identificación de la Auditoría',
  'apdf.trace'      : 'Trazabilidad:',
  'apdf.auditor'    : 'Auditor Responsable:',
  'apdf.date'       : 'Fecha de la Auditoría:',
  'apdf.folder'     : 'Carpeta de Evidencias Consultada:',
  'apdf.certConf'   : 'Certificación SGC Confirmada:',
  'apdf.scopes'     : 'Alcances Auditados:',
  'apdf.result'     : 'RESULTADO DE LA AUDITORÍA',
  'apdf.col.comment': 'Dictamen del Auditor',
  'apdf.final'      : 'DICTAMEN FINAL DE LA AUDITORÍA'
};

/* =============================== 中文 ================================ */
/* PDF sai em inglês (pdf:'en' em LANGS) — a fonte padrão do jsPDF não
   desenha caracteres chineses. Só a interface é traduzida.            */
I18N.zh = {
  'ui.title'        : '供应商自评 — Perpec Oilfield Supply',
  'hdr.title'       : '供应商自评',
  'hdr.sub'         : '资格认证与批准门户',
  'hdr.trace'       : '追溯编号',
  'hdr.required'    : '* 必填项',
  'rt.answered'     : '已回答 {a} / {b}',

  'lang.title'      : '请选择您的语言',
  'lang.sub'        : '表单将以您选择的语言显示。请注意：PDF 报告将以英文出具，因为 PDF 字体无法显示中文字符。您可以随时在顶部栏更改语言。',
  'lang.go'         : '继续',
  'lang.label'      : '语言',

  'card.how'        : '如何填写本问卷',
  'card.evid'       : '证据文件夹',
  'card.privacy'    : '隐私声明 (LGPD / GDPR)',
  'card.ident'      : '供应商标识',
  'card.cert'       : '质量管理体系认证',
  'card.scope'      : '供货范围',
  'card.result'     : '评估结果',
  'card.aware'      : '关于提交证据的确认',

  'txt.how'         : '请针对问卷中的每一项，对供应商的实际情况进行分类：'
                    + '<ul><li><strong>符合 (OK)：</strong>存在正式文件<strong>且</strong>实际执行该做法。</li>'
                    + '<li><strong>部分符合：</strong>存在文件但未执行该做法 —— <strong>或</strong>执行了该做法但没有正式文件。</li>'
                    + '<li><strong>不符合 (NC)：</strong>既没有文件<strong>也</strong>未执行该做法。</li>'
                    + '<li><strong>不适用：</strong>该要求不适用于本次供货范围。此时<strong>必须</strong>在备注栏说明理由，或引用下方指定文件夹中提交的证据。</li></ul>'
                    + '<p style="margin-top:10px"><strong>重要提示：</strong>标记为"符合"的回答必须在备注栏说明证据，或将证据上传至证据文件夹。您填报的分数为临时分数 —— Perpec 可在审核过程中核查证据并调整任何项目的分类。</p>',
  'txt.evid'        : '<p>请将与本问卷回答相关的所有证明文件（证书、程序文件、记录、照片等）上传至下方文件夹。该文件夹由 Perpec 专门为本供应商提供。</p>',
  'txt.privacy'     : '开始填写前，请仔细阅读：'
                    + '<ul><li>所有提交的文件将被安全存储。</li>'
                    + '<li>相关信息将<strong>仅</strong>用于供应商资格认证、批准与监控。</li>'
                    + '<li>数据处理遵守巴西《通用数据保护法》(<strong>LGPD</strong>)，并在适用时遵守 <strong>GDPR</strong>。</li>'
                    + '<li>提交的文件存储于受控的企业环境 (<strong>Monday.com</strong>)，仅供应商管理团队可访问。</li></ul>',
  'txt.aware'       : '资格认证流程包括对支持本问卷回答的书面证据进行审查。分类为<strong>符合</strong>或<strong>部分符合</strong>的回答，必须将相应证据上传至与本表单关联的证据文件夹，或在该项目的备注栏中记录豁免理由。'
                    + '<br><br><strong>若证据不足且无可接受的理由，资格认证流程将被终止。</strong>',

  'privacy.accept'  : '我已阅读并同意按上述方式处理我的数据。',
  'aware.accept'    : '我了解，若未提供证据或豁免理由，资格认证流程可能被终止。',
  'lock.hint'       : '请勾选上方的隐私声明以解锁表单。',

  'evid.open'       : '⬆ 打开证据文件夹',
  'evid.none'       : '⚠ 此链接未关联任何证据文件夹。请向 Perpec 索取正确的访问链接。',

  'f.trace'         : '追溯编号',
  'f.datetime'      : '填写日期与时间',
  'f.legalName'     : '公司注册名称',
  'f.legalName.ph'  : '完整的公司注册名称',
  'f.tradeName'     : '商号名称',
  'f.tradeName.ph'  : '商号名称',
  'f.country'       : '国家',
  'f.country.ph'    : '请选择国家…',
  'f.taxid'         : '税号 / VAT / 公司注册号',
  'f.taxid.br'      : 'CNPJ',
  'f.taxid.ph'      : '公司税务识别号',
  'f.taxid.ph.br'   : '00.000.000/0000-00',
  'f.taxdoc'        : '公司注册证明文件',
  'f.taxdoc.br'     : 'CNPJ 卡',
  'f.address'       : '地址',
  'f.address.ph'    : '街道、门牌号、区',
  'f.city'          : '城市',
  'f.city.ph'       : '城市',
  'f.state'         : '省 / 州 / 地区',
  'f.state.br'      : '州 (UF)',
  'f.state.ph'      : '省、州或地区',
  'f.state.ph.br'   : 'UF',
  'f.contact'       : '负责人姓名',
  'f.contact.ph'    : '全名',
  'f.role'          : '职务',
  'f.role.ph'       : '职务 / 职能',
  'f.email'         : '电子邮箱',
  'f.email.ph'      : 'email@company.com',
  'f.phone'         : '电话',
  'f.phone.ph'      : '+00 000 000 0000',
  'f.phone.ph.br'   : '(00) 00000-0000',

  'file.pick'       : '选择文件',
  'file.change'     : '更换文件',
  'file.none'       : '未选择文件',

  'cert.q'          : '贵公司是否持有有效的质量管理体系认证？',
  'cert.yes'        : '是',
  'cert.no'         : '否',
  'cert.attach'     : '上传质量管理体系证书',

  'scope.desc'      : '由发送本表单的 Perpec 负责人预先设定的范围。',
  'scope.warn'      : '⚠ 未定义供货范围。请使用 Perpec 采购员发送的专属链接访问本问卷。',
  'scope.count'     : '已选 {n} 项',
  'scope.tag.produto': '产品',
  'scope.tag.servico': '服务',

  'q.ph.comment'    : '本问题的备注 / 证据说明…',
  'q.warn.na'       : '⚠ "不适用"必须在备注栏填写理由（或在上方指定的文件夹中提供证据）。',
  'q.banner.autofill': '✓ 根据您填报的质量管理体系证书，本节已自动标记为<strong>符合</strong>。如有需要可逐项调整。',
  'q.sub.prodgeral' : '为产品/生产过程类供应商自动加载。',
  'q.empty'         : '请在上方至少选择一个供货范围以加载问卷。质量管理体系相关问题将自动显示。',

  'st.Conforme'     : '符合',
  'st.Regular'      : '部分符合',
  'st.Não Conforme' : '不符合',
  'st.Não Aplicável': '不适用',
  'st.short.na'     : 'N/A',

  'tag.SGQ'         : '质量体系',
  'tag.TECNICA'     : '技术',

  'res.sgq'         : '质量体系得分 (50%)',
  'res.tec'         : '技术得分 (50%)',
  'res.final'       : '最终得分',
  'res.waiting'     : '等待回答… ({a}/{b})',
  'res.done'        : '{label} — 已回答 {a}/{b}',
  'res.certNote'    : '（由带证据的有效质量管理体系认证保证）',

  'cls.reprovado'   : '未通过',
  'cls.ressalvas'   : '有保留通过',
  'cls.aprovado'    : '通过',

  'btn.clear'       : '全部清空',
  'btn.pdf'         : '⬇ 下载 PDF',
  'btn.send'        : '⬆ 提交自评',
  'btn.pdfing'      : '⏳ 正在生成 PDF…',
  'btn.sending'     : '⏳ 正在发送…',

  'attach.info'     : '📎 {n} 个附件 · {size}（提交时会生成 PDF 报告并计入此总量）',

  'toast.pending'   : '待完成项：',
  'toast.more'      : '…还有 {n} 项',
  'toast.ok'        : '✓ 自评已提交！\n数据 + {n} 个文件 ({size})。',
  'toast.noHook'    : 'PDF 已生成。\n(未配置 Make webhook)',
  'toast.failHook'  : '发送至 Make 失败。\nPDF 已下载。请检查 webhook 地址后重试。',
  'toast.payload'   : '总数据量 ({size}) 超过 {max} MB 上限。\n请减小注册证明文件和/或质量体系证书的体积（使用更小的照片或扫描件）后重试。\nPDF 已保存在本地。',
  'toast.error'     : '提交出错：{msg}\nPDF 已保存在本地。',
  'toast.cleared'   : '表单已清空。',
  'toast.fileBig'   : '注意："{name}" 大小为 {size}（超过 {max} MB）。\n仍会发送，但建议压缩文件。',
  'toast.pdfEn'     : '提示：您的 PDF 报告以英文出具 —— PDF 字体无法显示中文字符。',
  'confirm.clear'   : '确定清空整个表单吗？',

  'err.privacy'     : '隐私声明确认',
  'err.aware'       : '关于提交证据的确认',
  'err.cert'        : '是否持有质量管理体系认证？(是/否)',
  'err.certFile'    : '质量管理体系证书',
  'err.scope'       : '至少一个供货范围',
  'err.pend'        : '{n} 个问题未选择状态',
  'err.pendNA'      : '{n} 个"不适用"问题未在备注中说明理由',

  'footer'          : 'Perpec Oilfield Supply — 供应商自评门户',

  /* Os rótulos de PDF ficam em inglês de propósito (fonte sem CJK). */
  'pdf.title'       : 'Supplier Self-Assessment',
  'pdf.docname'     : 'Supplier Self-Assessment',
  'pdf.ident'       : 'Supplier Identification',
  'pdf.legalName'   : 'Legal Name:',
  'pdf.tradeName'   : 'Trade Name:',
  'pdf.taxid'       : 'Tax ID:',
  'pdf.address'     : 'Address:',
  'pdf.country'     : 'Country:',
  'pdf.contactPer'  : 'Contact Person:',
  'pdf.contact'     : 'Contact:',
  'pdf.cert'        : 'QMS Certification:',
  'pdf.scopes'      : 'Scopes:',
  'pdf.evidFolder'  : 'Evidence Folder:',
  'pdf.result'      : 'ASSESSMENT RESULT',
  'pdf.finalClass'  : 'Final Classification: ',
  'pdf.certFloor'   : '* Final score guaranteed at {n} points due to a valid QMS certification with the evidence provided.',
  'pdf.col.code'    : 'Code',
  'pdf.col.q'       : 'Question',
  'pdf.col.status'  : 'Status',
  'pdf.col.pts'     : 'Pts',
  'pdf.col.comment' : 'Comment',
  'pdf.legend'      : '* "Compliant" without commented evidence — provisional score, subject to verification of the evidence during the audit.',
  'pdf.page'        : 'Page {a} / {b}'
};

/* ============================== FRANÇAIS ============================= */
I18N.fr = {
  'ui.title'        : 'Auto-évaluation Fournisseur — Perpec Oilfield Supply',
  'hdr.title'       : 'Auto-évaluation Fournisseur',
  'hdr.sub'         : 'Portail de qualification et d\'homologation',
  'hdr.trace'       : 'Traçabilité',
  'hdr.required'    : '* Champs obligatoires',
  'rt.answered'     : '{a} / {b} répondues',

  'lang.title'      : 'Choisissez votre langue',
  'lang.sub'        : 'Le formulaire et le rapport PDF que vous téléchargez seront émis dans la langue choisie. Vous pouvez la changer à tout moment dans la barre supérieure.',
  'lang.go'         : 'Continuer',
  'lang.label'      : 'Langue',

  'card.how'        : 'Comment Remplir ce Questionnaire',
  'card.evid'       : 'Dossier de Preuves',
  'card.privacy'    : 'Avis de Confidentialité (LGPD / RGPD)',
  'card.ident'      : 'Identification du Fournisseur',
  'card.cert'       : 'Certification du Système de Management de la Qualité',
  'card.scope'      : 'Périmètre de Fourniture',
  'card.result'     : 'Résultat de l\'Évaluation',
  'card.aware'      : 'Reconnaissance sur la Remise des Preuves',

  'txt.how'         : 'Pour chaque point du questionnaire, classez la situation réelle du fournisseur :'
                    + '<ul><li><strong>Conforme (OK) :</strong> une documentation formelle existe <strong>et</strong> la pratique est effectivement réalisée.</li>'
                    + '<li><strong>Partiel :</strong> la documentation existe mais la pratique n\'est pas réalisée — <strong>ou</strong> la pratique est réalisée mais sans documentation formelle.</li>'
                    + '<li><strong>Non Conforme (NC) :</strong> il n\'y a pas de documentation <strong>et</strong> la pratique n\'est pas réalisée.</li>'
                    + '<li><strong>Non Applicable :</strong> l\'exigence ne s\'applique pas au périmètre de cette fourniture. Dans ce cas, une justification dans le champ commentaire est <strong>obligatoire</strong>, ou une référence à la preuve déposée dans le dossier indiqué ci-dessous.</li></ul>'
                    + '<p style="margin-top:10px"><strong>Important :</strong> les réponses marquées « Conforme » doivent avoir leur preuve commentée (dans le champ observations) ou déposée dans le dossier de preuves. La note déclarée est provisoire — Perpec pourra vérifier les preuves et ajuster le classement de tout point lors de l\'audit.</p>',
  'txt.evid'        : '<p>Déposez tous les documents justificatifs (certificats, procédures, enregistrements, photos, etc.) relatifs aux réponses de ce questionnaire dans le dossier ci-dessous, fourni par Perpec spécifiquement pour ce fournisseur.</p>',
  'txt.privacy'     : 'Avant de commencer, veuillez lire attentivement :'
                    + '<ul><li>Tous les documents transmis seront conservés de manière sécurisée.</li>'
                    + '<li>Les informations seront utilisées <strong>exclusivement</strong> à des fins de qualification, d\'homologation et de suivi des fournisseurs.</li>'
                    + '<li>Les données seront traitées conformément à la loi brésilienne sur la protection des données (<strong>LGPD</strong>) et, le cas échéant, au <strong>RGPD</strong>.</li>'
                    + '<li>Les documents transmis seront stockés dans un environnement d\'entreprise contrôlé (<strong>Monday.com</strong>), avec un accès restreint à l\'équipe de gestion des fournisseurs.</li></ul>',
  'txt.aware'       : 'Le processus de qualification prévoit l\'analyse des preuves documentaires justifiant les réponses de ce questionnaire. Les réponses classées <strong>Conforme</strong> ou <strong>Partiel</strong> doivent avoir la preuve correspondante déposée dans le dossier de preuves lié à ce formulaire, ou une justification de dispense enregistrée dans le champ commentaire du point concerné.'
                    + '<br><br><strong>L\'absence de preuves suffisantes, sans justification acceptée, entraînera l\'arrêt du processus de qualification.</strong>',

  'privacy.accept'  : 'J\'ai lu et j\'accepte le traitement de mes données tel que décrit ci-dessus.',
  'aware.accept'    : 'Je reconnais que le processus de qualification pourra être interrompu si les preuves ou les justifications de dispense ne sont pas fournies.',
  'lock.hint'       : 'Cochez l\'acceptation de confidentialité ci-dessus pour déverrouiller le formulaire.',

  'evid.open'       : '⬆ Ouvrir le Dossier de Preuves',
  'evid.none'       : '⚠ Aucun dossier de preuves n\'est lié à ce lien. Demandez à Perpec le lien d\'accès correct.',

  'f.trace'         : 'Traçabilité',
  'f.datetime'      : 'Date et Heure de Remplissage',
  'f.legalName'     : 'Raison Sociale',
  'f.legalName.ph'  : 'Raison sociale complète',
  'f.tradeName'     : 'Nom Commercial',
  'f.tradeName.ph'  : 'Nom commercial',
  'f.country'       : 'Pays',
  'f.country.ph'    : 'Sélectionnez le pays…',
  'f.taxid'         : 'Identifiant Fiscal / TVA / N° d\'Immatriculation',
  'f.taxid.br'      : 'CNPJ',
  'f.taxid.ph'      : 'Numéro d\'identification fiscale de l\'entreprise',
  'f.taxid.ph.br'   : '00.000.000/0000-00',
  'f.taxdoc'        : 'Document d\'Immatriculation de l\'Entreprise',
  'f.taxdoc.br'     : 'Carte CNPJ',
  'f.address'       : 'Adresse',
  'f.address.ph'    : 'Rue, numéro, quartier',
  'f.city'          : 'Ville',
  'f.city.ph'       : 'Ville',
  'f.state'         : 'État / Province / Région',
  'f.state.br'      : 'État (UF)',
  'f.state.ph'      : 'État, province ou région',
  'f.state.ph.br'   : 'UF',
  'f.contact'       : 'Nom du Responsable',
  'f.contact.ph'    : 'Nom complet',
  'f.role'          : 'Fonction',
  'f.role.ph'       : 'Poste / fonction',
  'f.email'         : 'E-mail',
  'f.email.ph'      : 'email@entreprise.com',
  'f.phone'         : 'Téléphone',
  'f.phone.ph'      : '+00 000 000 0000',
  'f.phone.ph.br'   : '(00) 00000-0000',

  'file.pick'       : 'Sélectionner un fichier',
  'file.change'     : 'Changer de fichier',
  'file.none'       : 'Aucun fichier',

  'cert.q'          : 'Disposez-vous d\'une certification valide de Système de Management de la Qualité ?',
  'cert.yes'        : 'Oui',
  'cert.no'         : 'Non',
  'cert.attach'     : 'Joindre le certificat SMQ',

  'scope.desc'      : 'Périmètre prédéfini par le responsable Perpec qui a envoyé ce formulaire.',
  'scope.warn'      : '⚠ Périmètre non défini. Utilisez le lien spécifique envoyé par votre acheteur Perpec pour accéder à ce questionnaire.',
  'scope.count'     : '{n} sélectionné(s)',
  'scope.tag.produto': 'Produit',
  'scope.tag.servico': 'Service',

  'q.ph.comment'    : 'Observations / preuve commentée pour cette question…',
  'q.warn.na'       : '⚠ « Non Applicable » exige une justification dans le champ commentaire (ou une preuve dans le dossier indiqué ci-dessus).',
  'q.banner.autofill': '✓ Section remplie automatiquement comme <strong>Conforme</strong> sur la base du certificat SMQ déclaré. Ajustez les points individuels si nécessaire.',
  'q.sub.prodgeral' : 'Chargé automatiquement pour les fournisseurs de produits / procédés de fabrication.',
  'q.empty'         : 'Sélectionnez au moins un périmètre ci-dessus pour charger le questionnaire. Les questions SMQ apparaîtront automatiquement.',

  'st.Conforme'     : 'Conforme',
  'st.Regular'      : 'Partiel',
  'st.Não Conforme' : 'Non Conforme',
  'st.Não Aplicável': 'Non Applicable',
  'st.short.na'     : 'N/A',

  'tag.SGQ'         : 'SMQ',
  'tag.TECNICA'     : 'Technique',

  'res.sgq'         : 'Note SMQ (50%)',
  'res.tec'         : 'Note Technique (50%)',
  'res.final'       : 'Note Finale',
  'res.waiting'     : 'En attente de réponses… ({a}/{b})',
  'res.done'        : '{label} — {a}/{b} répondues',
  'res.certNote'    : ' (garantie par une certification SMQ valide avec preuve)',

  'cls.reprovado'   : 'Non Approuvé',
  'cls.ressalvas'   : 'Approuvé avec Réserves',
  'cls.aprovado'    : 'Approuvé',

  'btn.clear'       : 'Tout Effacer',
  'btn.pdf'         : '⬇ Télécharger le PDF',
  'btn.send'        : '⬆ Envoyer l\'Auto-évaluation',
  'btn.pdfing'      : '⏳ Génération du PDF…',
  'btn.sending'     : '⏳ Envoi…',

  'attach.info'     : '📎 {n} pièce(s) jointe(s) · {size} (le rapport PDF est généré et ajouté à ce total lors de l\'envoi)',

  'toast.pending'   : 'Points en attente :',
  'toast.more'      : '…et {n} de plus',
  'toast.ok'        : '✓ Auto-évaluation envoyée !\nDonnées + {n} fichier(s) ({size}).',
  'toast.noHook'    : 'PDF généré.\n(Webhook Make non configuré)',
  'toast.failHook'  : 'Échec de l\'envoi vers Make.\nLe PDF a été téléchargé. Vérifiez l\'URL du webhook et réessayez.',
  'toast.payload'   : 'La charge totale ({size}) dépasse la limite de {max} Mo.\nRéduisez la taille du document d\'immatriculation et/ou du certificat SMQ (photo ou scan plus léger) et réessayez.\nLe PDF a été téléchargé localement.',
  'toast.error'     : 'Erreur lors de l\'envoi : {msg}\nLe PDF a été téléchargé localement.',
  'toast.cleared'   : 'Formulaire effacé.',
  'toast.fileBig'   : 'Attention : « {name} » fait {size} (au-dessus de {max} Mo).\nIl sera envoyé, mais envisagez de réduire le fichier.',
  'toast.pdfEn'     : 'Note : le rapport PDF est émis en anglais — la police du PDF ne peut pas afficher les caractères chinois.',
  'confirm.clear'   : 'Effacer tout le formulaire ?',

  'err.privacy'     : 'Acceptation de confidentialité',
  'err.aware'       : 'Reconnaissance sur la remise des preuves',
  'err.cert'        : 'Disposez-vous d\'une certification SMQ ? (Oui/Non)',
  'err.certFile'    : 'Certificat SMQ',
  'err.scope'       : 'Au moins un périmètre de fourniture',
  'err.pend'        : '{n} question(s) sans statut',
  'err.pendNA'      : '{n} question(s) « Non Applicable » sans justification dans le commentaire',

  'footer'          : 'Perpec Oilfield Supply — Portail d\'Auto-évaluation Fournisseur',

  'pdf.title'       : 'Auto-évaluation Fournisseur',
  'pdf.docname'     : 'Auto-evaluation Fournisseur',
  'pdf.ident'       : 'Identification du Fournisseur',
  'pdf.legalName'   : 'Raison Sociale :',
  'pdf.tradeName'   : 'Nom Commercial :',
  'pdf.taxid'       : 'Identifiant Fiscal :',
  'pdf.address'     : 'Adresse :',
  'pdf.country'     : 'Pays :',
  'pdf.contactPer'  : 'Responsable :',
  'pdf.contact'     : 'Contact :',
  'pdf.cert'        : 'Certification SMQ :',
  'pdf.scopes'      : 'Périmètres :',
  'pdf.evidFolder'  : 'Dossier de Preuves :',
  'pdf.result'      : 'RÉSULTAT DE L\'ÉVALUATION',
  'pdf.finalClass'  : 'Classement Final : ',
  'pdf.certFloor'   : '* Note finale garantie à {n} points en raison d\'une certification SMQ valide, preuve fournie.',
  'pdf.col.code'    : 'Code',
  'pdf.col.q'       : 'Question',
  'pdf.col.status'  : 'Statut',
  'pdf.col.pts'     : 'Pts',
  'pdf.col.comment' : 'Commentaire',
  'pdf.legend'      : '* « Conforme » sans preuve commentée — note provisoire, sous réserve de vérification de la preuve lors de l\'audit.',
  'pdf.page'        : 'Page {a} / {b}',

  'apdf.title'      : 'Rapport d\'Audit — Auto-évaluation',
  'apdf.docname'    : 'Rapport d\'Audit',
  'apdf.ident'      : 'Identification de l\'Audit',
  'apdf.trace'      : 'Traçabilité :',
  'apdf.auditor'    : 'Auditeur Responsable :',
  'apdf.date'       : 'Date de l\'Audit :',
  'apdf.folder'     : 'Dossier de Preuves Consulté :',
  'apdf.certConf'   : 'Certification SMQ Confirmée :',
  'apdf.scopes'     : 'Périmètres Audités :',
  'apdf.result'     : 'RÉSULTAT DE L\'AUDIT',
  'apdf.col.comment': 'Avis de l\'Auditeur',
  'apdf.final'      : 'AVIS FINAL DE L\'AUDIT'
};

/* ============================== ITALIANO ============================= */
I18N.it = {
  'ui.title'        : 'Autovalutazione Fornitori — Perpec Oilfield Supply',
  'hdr.title'       : 'Autovalutazione Fornitori',
  'hdr.sub'         : 'Portale di qualifica e omologazione',
  'hdr.trace'       : 'Tracciabilità',
  'hdr.required'    : '* Campi obbligatori',
  'rt.answered'     : '{a} / {b} risposte',

  'lang.title'      : 'Scegli la tua lingua',
  'lang.sub'        : 'Il modulo e il report PDF che scaricherai saranno emessi nella lingua scelta. Puoi cambiarla in qualsiasi momento nella barra in alto.',
  'lang.go'         : 'Continua',
  'lang.label'      : 'Lingua',

  'card.how'        : 'Come Compilare questo Questionario',
  'card.evid'       : 'Cartella delle Evidenze',
  'card.privacy'    : 'Informativa sulla Privacy (LGPD / GDPR)',
  'card.ident'      : 'Identificazione del Fornitore',
  'card.cert'       : 'Certificazione del Sistema di Gestione della Qualità',
  'card.scope'      : 'Ambito di Fornitura',
  'card.result'     : 'Risultato della Valutazione',
  'card.aware'      : 'Presa d\'Atto sull\'Invio delle Evidenze',

  'txt.how'         : 'Per ogni voce del questionario, classifica la situazione reale del fornitore:'
                    + '<ul><li><strong>Conforme (OK):</strong> esiste documentazione formale <strong>e</strong> la pratica è effettivamente attuata.</li>'
                    + '<li><strong>Parziale:</strong> esiste la documentazione ma la pratica non è attuata — <strong>oppure</strong> la pratica è attuata ma non esiste documentazione formale.</li>'
                    + '<li><strong>Non Conforme (NC):</strong> non esiste documentazione <strong>e</strong> la pratica non è attuata.</li>'
                    + '<li><strong>Non Applicabile:</strong> il requisito non si applica all\'ambito di questa fornitura. In tal caso è <strong>obbligatorio</strong> motivare nel campo commento, oppure richiamare l\'evidenza caricata nella cartella indicata sotto.</li></ul>'
                    + '<p style="margin-top:10px"><strong>Importante:</strong> le risposte contrassegnate come "Conforme" devono avere l\'evidenza commentata (nel campo note) o caricata nella cartella delle evidenze. Il punteggio dichiarato è provvisorio — Perpec potrà verificare le evidenze e modificare la classificazione di qualsiasi voce durante l\'audit.</p>',
  'txt.evid'        : '<p>Carica tutti i documenti giustificativi (certificati, procedure, registrazioni, foto, ecc.) relativi alle risposte di questo questionario nella cartella indicata sotto, fornita da Perpec specificamente per questo fornitore.</p>',
  'txt.privacy'     : 'Prima di iniziare la compilazione, leggi attentamente:'
                    + '<ul><li>Tutti i documenti inviati saranno conservati in modo sicuro.</li>'
                    + '<li>Le informazioni saranno utilizzate <strong>esclusivamente</strong> per la qualifica, l\'omologazione e il monitoraggio dei fornitori.</li>'
                    + '<li>I dati saranno trattati in conformità alla legge brasiliana sulla protezione dei dati (<strong>LGPD</strong>) e, ove applicabile, al <strong>GDPR</strong>.</li>'
                    + '<li>I documenti inviati saranno conservati in un ambiente aziendale controllato (<strong>Monday.com</strong>), con accesso riservato al team di gestione fornitori.</li></ul>',
  'txt.aware'       : 'Il processo di qualifica prevede l\'analisi delle evidenze documentali a supporto delle risposte fornite in questo questionario. Le risposte classificate come <strong>Conforme</strong> o <strong>Parziale</strong> devono avere la relativa evidenza caricata nella cartella delle evidenze collegata a questo modulo, oppure una motivazione di esonero registrata nel campo commento della voce corrispondente.'
                    + '<br><br><strong>L\'assenza di evidenze sufficienti, senza una motivazione accettata, comporterà l\'interruzione del processo di qualifica.</strong>',

  'privacy.accept'  : 'Ho letto e accetto il trattamento dei miei dati come descritto sopra.',
  'aware.accept'    : 'Sono consapevole che il processo di qualifica potrà essere interrotto qualora le evidenze o le motivazioni di esonero non vengano presentate.',
  'lock.hint'       : 'Spunta l\'accettazione della privacy qui sopra per sbloccare il modulo.',

  'evid.open'       : '⬆ Apri la Cartella delle Evidenze',
  'evid.none'       : '⚠ Nessuna cartella delle evidenze è collegata a questo link. Richiedi a Perpec il link di accesso corretto.',

  'f.trace'         : 'Tracciabilità',
  'f.datetime'      : 'Data e Ora di Compilazione',
  'f.legalName'     : 'Ragione Sociale',
  'f.legalName.ph'  : 'Ragione sociale completa',
  'f.tradeName'     : 'Nome Commerciale',
  'f.tradeName.ph'  : 'Nome commerciale',
  'f.country'       : 'Paese',
  'f.country.ph'    : 'Seleziona il paese…',
  'f.taxid'         : 'Codice Fiscale / P. IVA / N. Registro Imprese',
  'f.taxid.br'      : 'CNPJ',
  'f.taxid.ph'      : 'Numero di identificazione fiscale dell\'azienda',
  'f.taxid.ph.br'   : '00.000.000/0000-00',
  'f.taxdoc'        : 'Documento di Registrazione dell\'Impresa',
  'f.taxdoc.br'     : 'Tessera CNPJ',
  'f.address'       : 'Indirizzo',
  'f.address.ph'    : 'Via, numero, quartiere',
  'f.city'          : 'Città',
  'f.city.ph'       : 'Città',
  'f.state'         : 'Stato / Provincia / Regione',
  'f.state.br'      : 'Stato (UF)',
  'f.state.ph'      : 'Stato, provincia o regione',
  'f.state.ph.br'   : 'UF',
  'f.contact'       : 'Nome del Referente',
  'f.contact.ph'    : 'Nome completo',
  'f.role'          : 'Ruolo',
  'f.role.ph'       : 'Ruolo / funzione',
  'f.email'         : 'E-mail',
  'f.email.ph'      : 'email@azienda.com',
  'f.phone'         : 'Telefono',
  'f.phone.ph'      : '+00 000 000 0000',
  'f.phone.ph.br'   : '(00) 00000-0000',

  'file.pick'       : 'Seleziona file',
  'file.change'     : 'Cambia file',
  'file.none'       : 'Nessun file',

  'cert.q'          : 'Possiede una certificazione valida del Sistema di Gestione della Qualità?',
  'cert.yes'        : 'Sì',
  'cert.no'         : 'No',
  'cert.attach'     : 'Allega il certificato SGQ',

  'scope.desc'      : 'Ambito predefinito dal referente Perpec che ha inviato questo modulo.',
  'scope.warn'      : '⚠ Ambito non definito. Utilizza il link specifico inviato dal buyer Perpec per accedere a questo questionario.',
  'scope.count'     : '{n} selezionato/i',
  'scope.tag.produto': 'Prodotto',
  'scope.tag.servico': 'Servizio',

  'q.ph.comment'    : 'Note / evidenza commentata per questa domanda…',
  'q.warn.na'       : '⚠ "Non Applicabile" richiede una motivazione nel campo commento (o un\'evidenza nella cartella indicata sopra).',
  'q.banner.autofill': '✓ Sezione compilata automaticamente come <strong>Conforme</strong> in base al certificato SGQ dichiarato. Modifica le singole voci se necessario.',
  'q.sub.prodgeral' : 'Caricato automaticamente per fornitori di prodotti / processi produttivi.',
  'q.empty'         : 'Seleziona almeno un ambito qui sopra per caricare il questionario. Le domande SGQ compariranno automaticamente.',

  'st.Conforme'     : 'Conforme',
  'st.Regular'      : 'Parziale',
  'st.Não Conforme' : 'Non Conforme',
  'st.Não Aplicável': 'Non Applicabile',
  'st.short.na'     : 'N/A',

  'tag.SGQ'         : 'SGQ',
  'tag.TECNICA'     : 'Tecnica',

  'res.sgq'         : 'Punteggio SGQ (50%)',
  'res.tec'         : 'Punteggio Tecnico (50%)',
  'res.final'       : 'Punteggio Finale',
  'res.waiting'     : 'In attesa di risposte… ({a}/{b})',
  'res.done'        : '{label} — {a}/{b} risposte',
  'res.certNote'    : ' (garantito da certificazione SGQ valida con evidenza)',

  'cls.reprovado'   : 'Non Approvato',
  'cls.ressalvas'   : 'Approvato con Riserve',
  'cls.aprovado'    : 'Approvato',

  'btn.clear'       : 'Cancella Tutto',
  'btn.pdf'         : '⬇ Scarica PDF',
  'btn.send'        : '⬆ Invia Autovalutazione',
  'btn.pdfing'      : '⏳ Generazione PDF…',
  'btn.sending'     : '⏳ Invio…',

  'attach.info'     : '📎 {n} allegato/i · {size} (il report PDF viene generato e sommato a questo totale all\'invio)',

  'toast.pending'   : 'Voci mancanti:',
  'toast.more'      : '…e altre {n}',
  'toast.ok'        : '✓ Autovalutazione inviata!\nDati + {n} file ({size}).',
  'toast.noHook'    : 'PDF generato.\n(Webhook Make non configurato)',
  'toast.failHook'  : 'Invio a Make non riuscito.\nIl PDF è stato scaricato. Verifica l\'URL del webhook e riprova.',
  'toast.payload'   : 'Il payload totale ({size}) supera il limite di {max} MB.\nRiduci la dimensione del documento di registrazione e/o del certificato SGQ (foto o scansione più leggera) e riprova.\nIl PDF è stato scaricato localmente.',
  'toast.error'     : 'Errore durante l\'invio: {msg}\nIl PDF è stato scaricato localmente.',
  'toast.cleared'   : 'Modulo cancellato.',
  'toast.fileBig'   : 'Attenzione: "{name}" pesa {size} (oltre {max} MB).\nSarà inviato, ma valuta di ridurre il file.',
  'toast.pdfEn'     : 'Nota: il report PDF è emesso in inglese — il font del PDF non può rendere i caratteri cinesi.',
  'confirm.clear'   : 'Cancellare tutto il modulo?',

  'err.privacy'     : 'Accettazione della privacy',
  'err.aware'       : 'Presa d\'atto sull\'invio delle evidenze',
  'err.cert'        : 'Possiede una certificazione SGQ? (Sì/No)',
  'err.certFile'    : 'Certificato SGQ',
  'err.scope'       : 'Almeno un ambito di fornitura',
  'err.pend'        : '{n} domanda/e senza stato',
  'err.pendNA'      : '{n} domanda/e "Non Applicabile" senza motivazione nel commento',

  'footer'          : 'Perpec Oilfield Supply — Portale di Autovalutazione Fornitori',

  'pdf.title'       : 'Autovalutazione Fornitore',
  'pdf.docname'     : 'Autovalutazione Fornitore',
  'pdf.ident'       : 'Identificazione del Fornitore',
  'pdf.legalName'   : 'Ragione Sociale:',
  'pdf.tradeName'   : 'Nome Commerciale:',
  'pdf.taxid'       : 'Codice Fiscale:',
  'pdf.address'     : 'Indirizzo:',
  'pdf.country'     : 'Paese:',
  'pdf.contactPer'  : 'Referente:',
  'pdf.contact'     : 'Contatto:',
  'pdf.cert'        : 'Certificazione SGQ:',
  'pdf.scopes'      : 'Ambiti:',
  'pdf.evidFolder'  : 'Cartella delle Evidenze:',
  'pdf.result'      : 'RISULTATO DELLA VALUTAZIONE',
  'pdf.finalClass'  : 'Classificazione Finale: ',
  'pdf.certFloor'   : '* Punteggio finale garantito a {n} punti per certificazione SGQ valida, con evidenza presentata.',
  'pdf.col.code'    : 'Cod.',
  'pdf.col.q'       : 'Domanda',
  'pdf.col.status'  : 'Stato',
  'pdf.col.pts'     : 'Pti',
  'pdf.col.comment' : 'Commento',
  'pdf.legend'      : '* "Conforme" senza evidenza commentata — punteggio provvisorio, soggetto a verifica dell\'evidenza durante l\'audit.',
  'pdf.page'        : 'Pag. {a} / {b}',

  'apdf.title'      : 'Report di Audit — Autovalutazione',
  'apdf.docname'    : 'Report di Audit',
  'apdf.ident'      : 'Identificazione dell\'Audit',
  'apdf.trace'      : 'Tracciabilità:',
  'apdf.auditor'    : 'Auditor Responsabile:',
  'apdf.date'       : 'Data dell\'Audit:',
  'apdf.folder'     : 'Cartella delle Evidenze Consultata:',
  'apdf.certConf'   : 'Certificazione SGQ Confermata:',
  'apdf.scopes'     : 'Ambiti Auditati:',
  'apdf.result'     : 'RISULTATO DELL\'AUDIT',
  'apdf.col.comment': 'Parere dell\'Auditor',
  'apdf.final'      : 'PARERE FINALE DELL\'AUDIT'
};

/* =============================== DEUTSCH ============================= */
I18N.de = {
  'ui.title'        : 'Lieferanten-Selbstbewertung — Perpec Oilfield Supply',
  'hdr.title'       : 'Lieferanten-Selbstbewertung',
  'hdr.sub'         : 'Portal für Qualifizierung und Freigabe',
  'hdr.trace'       : 'Rückverfolgbarkeit',
  'hdr.required'    : '* Pflichtfelder',
  'rt.answered'     : '{a} / {b} beantwortet',

  'lang.title'      : 'Wählen Sie Ihre Sprache',
  'lang.sub'        : 'Das Formular und der PDF-Bericht, den Sie herunterladen, werden in der gewählten Sprache ausgestellt. Sie können sie jederzeit in der oberen Leiste ändern.',
  'lang.go'         : 'Weiter',
  'lang.label'      : 'Sprache',

  'card.how'        : 'So füllen Sie diesen Fragebogen aus',
  'card.evid'       : 'Nachweisordner',
  'card.privacy'    : 'Datenschutzhinweis (LGPD / DSGVO)',
  'card.ident'      : 'Lieferantenidentifikation',
  'card.cert'       : 'Zertifizierung des Qualitätsmanagementsystems',
  'card.scope'      : 'Lieferumfang',
  'card.result'     : 'Bewertungsergebnis',
  'card.aware'      : 'Kenntnisnahme zur Einreichung von Nachweisen',

  'txt.how'         : 'Bewerten Sie für jede Position des Fragebogens die tatsächliche Situation des Lieferanten:'
                    + '<ul><li><strong>Konform (OK):</strong> es liegt eine formale Dokumentation vor <strong>und</strong> die Praxis wird tatsächlich umgesetzt.</li>'
                    + '<li><strong>Teilweise:</strong> Dokumentation liegt vor, die Praxis wird jedoch nicht umgesetzt — <strong>oder</strong> die Praxis wird umgesetzt, es fehlt aber die formale Dokumentation.</li>'
                    + '<li><strong>Nicht konform (NC):</strong> es liegt keine Dokumentation vor <strong>und</strong> die Praxis wird nicht umgesetzt.</li>'
                    + '<li><strong>Nicht anwendbar:</strong> die Anforderung gilt nicht für den Umfang dieser Lieferung. In diesem Fall ist eine Begründung im Kommentarfeld <strong>zwingend erforderlich</strong> oder ein Verweis auf den im unten angegebenen Ordner hinterlegten Nachweis.</li></ul>'
                    + '<p style="margin-top:10px"><strong>Wichtig:</strong> Als "Konform" markierte Antworten müssen den Nachweis im Bemerkungsfeld beschreiben oder im Nachweisordner hinterlegen. Die angegebene Bewertung ist vorläufig — Perpec kann die Nachweise prüfen und die Einstufung jeder Position im Audit anpassen.</p>',
  'txt.evid'        : '<p>Laden Sie alle Nachweisdokumente (Zertifikate, Verfahren, Aufzeichnungen, Fotos usw.) zu den Antworten dieses Fragebogens in den unten angegebenen Ordner hoch, den Perpec speziell für diesen Lieferanten bereitgestellt hat.</p>',
  'txt.privacy'     : 'Bitte lesen Sie vor dem Ausfüllen aufmerksam:'
                    + '<ul><li>Alle übermittelten Dokumente werden sicher gespeichert.</li>'
                    + '<li>Die Informationen werden <strong>ausschließlich</strong> zur Qualifizierung, Freigabe und Überwachung von Lieferanten verwendet.</li>'
                    + '<li>Die Daten werden gemäß dem brasilianischen Datenschutzgesetz (<strong>LGPD</strong>) und, soweit anwendbar, der <strong>DSGVO</strong> verarbeitet.</li>'
                    + '<li>Die übermittelten Dokumente werden in einer kontrollierten Unternehmensumgebung (<strong>Monday.com</strong>) mit auf das Lieferantenmanagement-Team beschränktem Zugriff gespeichert.</li></ul>',
  'txt.aware'       : 'Der Qualifizierungsprozess umfasst die Prüfung der dokumentarischen Nachweise zu den in diesem Fragebogen gegebenen Antworten. Für Antworten mit der Einstufung <strong>Konform</strong> oder <strong>Teilweise</strong> muss der entsprechende Nachweis in den mit diesem Formular verknüpften Nachweisordner hochgeladen oder eine Befreiungsbegründung im Kommentarfeld der jeweiligen Position hinterlegt werden.'
                    + '<br><br><strong>Unzureichende Nachweise ohne akzeptierte Begründung führen zum Abbruch des Qualifizierungsprozesses.</strong>',

  'privacy.accept'  : 'Ich habe die Hinweise gelesen und stimme der Verarbeitung meiner Daten wie oben beschrieben zu.',
  'aware.accept'    : 'Mir ist bekannt, dass der Qualifizierungsprozess abgebrochen werden kann, wenn die Nachweise oder Befreiungsbegründungen nicht vorgelegt werden.',
  'lock.hint'       : 'Bestätigen Sie oben den Datenschutzhinweis, um das Formular freizuschalten.',

  'evid.open'       : '⬆ Nachweisordner öffnen',
  'evid.none'       : '⚠ Diesem Link ist kein Nachweisordner zugeordnet. Bitte fordern Sie bei Perpec den korrekten Zugangslink an.',

  'f.trace'         : 'Rückverfolgbarkeit',
  'f.datetime'      : 'Datum und Uhrzeit der Ausfüllung',
  'f.legalName'     : 'Firmenname',
  'f.legalName.ph'  : 'Vollständiger eingetragener Firmenname',
  'f.tradeName'     : 'Handelsname',
  'f.tradeName.ph'  : 'Handelsname',
  'f.country'       : 'Land',
  'f.country.ph'    : 'Land auswählen…',
  'f.taxid'         : 'Steuer-ID / USt-IdNr. / Handelsregisternr.',
  'f.taxid.br'      : 'CNPJ',
  'f.taxid.ph'      : 'Steuerliche Identifikationsnummer des Unternehmens',
  'f.taxid.ph.br'   : '00.000.000/0000-00',
  'f.taxdoc'        : 'Handelsregisterauszug',
  'f.taxdoc.br'     : 'CNPJ-Karte',
  'f.address'       : 'Adresse',
  'f.address.ph'    : 'Straße, Hausnummer, Stadtteil',
  'f.city'          : 'Stadt',
  'f.city.ph'       : 'Stadt',
  'f.state'         : 'Bundesland / Provinz / Region',
  'f.state.br'      : 'Bundesstaat (UF)',
  'f.state.ph'      : 'Bundesland, Provinz oder Region',
  'f.state.ph.br'   : 'UF',
  'f.contact'       : 'Name des Ansprechpartners',
  'f.contact.ph'    : 'Vollständiger Name',
  'f.role'          : 'Position',
  'f.role.ph'       : 'Position / Funktion',
  'f.email'         : 'E-Mail',
  'f.email.ph'      : 'email@firma.com',
  'f.phone'         : 'Telefon',
  'f.phone.ph'      : '+00 000 000 0000',
  'f.phone.ph.br'   : '(00) 00000-0000',

  'file.pick'       : 'Datei auswählen',
  'file.change'     : 'Datei ändern',
  'file.none'       : 'Keine Datei',

  'cert.q'          : 'Verfügen Sie über eine gültige Zertifizierung des Qualitätsmanagementsystems?',
  'cert.yes'        : 'Ja',
  'cert.no'         : 'Nein',
  'cert.attach'     : 'QMS-Zertifikat anhängen',

  'scope.desc'      : 'Umfang, der von der Perpec-Kontaktperson vorgegeben wurde, die dieses Formular gesendet hat.',
  'scope.warn'      : '⚠ Umfang nicht definiert. Bitte verwenden Sie den spezifischen Link Ihres Perpec-Einkäufers, um auf diesen Fragebogen zuzugreifen.',
  'scope.count'     : '{n} ausgewählt',
  'scope.tag.produto': 'Produkt',
  'scope.tag.servico': 'Dienstleistung',

  'q.ph.comment'    : 'Bemerkungen / kommentierter Nachweis zu dieser Frage…',
  'q.warn.na'       : '⚠ "Nicht anwendbar" erfordert eine Begründung im Kommentarfeld (oder einen Nachweis im oben angegebenen Ordner).',
  'q.banner.autofill': '✓ Abschnitt auf Basis des angegebenen QMS-Zertifikats automatisch als <strong>Konform</strong> ausgefüllt. Einzelne Positionen bei Bedarf anpassen.',
  'q.sub.prodgeral' : 'Wird automatisch für Lieferanten von Produkten / Fertigungsprozessen geladen.',
  'q.empty'         : 'Wählen Sie oben mindestens einen Umfang aus, um den Fragebogen zu laden. Die QMS-Fragen erscheinen automatisch.',

  'st.Conforme'     : 'Konform',
  'st.Regular'      : 'Teilweise',
  'st.Não Conforme' : 'Nicht konform',
  'st.Não Aplicável': 'Nicht anwendbar',
  'st.short.na'     : 'N/A',

  'tag.SGQ'         : 'QMS',
  'tag.TECNICA'     : 'Technisch',

  'res.sgq'         : 'QMS-Bewertung (50%)',
  'res.tec'         : 'Technische Bewertung (50%)',
  'res.final'       : 'Endbewertung',
  'res.waiting'     : 'Warte auf Antworten… ({a}/{b})',
  'res.done'        : '{label} — {a}/{b} beantwortet',
  'res.certNote'    : ' (garantiert durch gültige QMS-Zertifizierung mit Nachweis)',

  'cls.reprovado'   : 'Nicht freigegeben',
  'cls.ressalvas'   : 'Freigegeben mit Vorbehalten',
  'cls.aprovado'    : 'Freigegeben',

  'btn.clear'       : 'Alles löschen',
  'btn.pdf'         : '⬇ PDF herunterladen',
  'btn.send'        : '⬆ Selbstbewertung senden',
  'btn.pdfing'      : '⏳ PDF wird erstellt…',
  'btn.sending'     : '⏳ Senden…',

  'attach.info'     : '📎 {n} Anhang/Anhänge · {size} (der PDF-Bericht wird erzeugt und beim Senden zu dieser Summe addiert)',

  'toast.pending'   : 'Offene Punkte:',
  'toast.more'      : '…und {n} weitere',
  'toast.ok'        : '✓ Selbstbewertung gesendet!\nDaten + {n} Datei(en) ({size}).',
  'toast.noHook'    : 'PDF erzeugt.\n(Make-Webhook nicht konfiguriert)',
  'toast.failHook'  : 'Senden an Make fehlgeschlagen.\nDas PDF wurde heruntergeladen. Prüfen Sie die Webhook-URL und versuchen Sie es erneut.',
  'toast.payload'   : 'Die Gesamtgröße ({size}) überschreitet das Limit von {max} MB.\nVerkleinern Sie den Handelsregisterauszug und/oder das QMS-Zertifikat (leichteres Foto oder Scan) und versuchen Sie es erneut.\nDas PDF wurde lokal heruntergeladen.',
  'toast.error'     : 'Fehler beim Senden: {msg}\nDas PDF wurde lokal heruntergeladen.',
  'toast.cleared'   : 'Formular gelöscht.',
  'toast.fileBig'   : 'Achtung: "{name}" hat {size} (über {max} MB).\nDie Datei wird gesendet, eine Verkleinerung wird aber empfohlen.',
  'toast.pdfEn'     : 'Hinweis: Der PDF-Bericht wird auf Englisch ausgestellt — die PDF-Schrift kann keine chinesischen Zeichen darstellen.',
  'confirm.clear'   : 'Das gesamte Formular löschen?',

  'err.privacy'     : 'Datenschutz-Zustimmung',
  'err.aware'       : 'Kenntnisnahme zur Einreichung von Nachweisen',
  'err.cert'        : 'Verfügen Sie über eine QMS-Zertifizierung? (Ja/Nein)',
  'err.certFile'    : 'QMS-Zertifikat',
  'err.scope'       : 'Mindestens ein Lieferumfang',
  'err.pend'        : '{n} Frage(n) ohne Status',
  'err.pendNA'      : '{n} Frage(n) "Nicht anwendbar" ohne Begründung im Kommentar',

  'footer'          : 'Perpec Oilfield Supply — Portal für Lieferanten-Selbstbewertung',

  'pdf.title'       : 'Lieferanten-Selbstbewertung',
  'pdf.docname'     : 'Lieferanten-Selbstbewertung',
  'pdf.ident'       : 'Lieferantenidentifikation',
  'pdf.legalName'   : 'Firmenname:',
  'pdf.tradeName'   : 'Handelsname:',
  'pdf.taxid'       : 'Steuer-ID:',
  'pdf.address'     : 'Adresse:',
  'pdf.country'     : 'Land:',
  'pdf.contactPer'  : 'Ansprechpartner:',
  'pdf.contact'     : 'Kontakt:',
  'pdf.cert'        : 'QMS-Zertifizierung:',
  'pdf.scopes'      : 'Umfänge:',
  'pdf.evidFolder'  : 'Nachweisordner:',
  'pdf.result'      : 'BEWERTUNGSERGEBNIS',
  'pdf.finalClass'  : 'Endklassifizierung: ',
  'pdf.certFloor'   : '* Endbewertung auf {n} Punkte garantiert aufgrund einer gültigen QMS-Zertifizierung mit vorgelegtem Nachweis.',
  'pdf.col.code'    : 'Code',
  'pdf.col.q'       : 'Frage',
  'pdf.col.status'  : 'Status',
  'pdf.col.pts'     : 'Pkt',
  'pdf.col.comment' : 'Kommentar',
  'pdf.legend'      : '* "Konform" ohne kommentierten Nachweis — vorläufige Bewertung, vorbehaltlich der Nachweisprüfung im Audit.',
  'pdf.page'        : 'Seite {a} / {b}',

  'apdf.title'      : 'Auditbericht — Selbstbewertung',
  'apdf.docname'    : 'Auditbericht',
  'apdf.ident'      : 'Audit-Identifikation',
  'apdf.trace'      : 'Rückverfolgbarkeit:',
  'apdf.auditor'    : 'Verantwortlicher Auditor:',
  'apdf.date'       : 'Auditdatum:',
  'apdf.folder'     : 'Geprüfter Nachweisordner:',
  'apdf.certConf'   : 'QMS-Zertifizierung bestätigt:',
  'apdf.scopes'     : 'Auditierte Umfänge:',
  'apdf.result'     : 'AUDITERGEBNIS',
  'apdf.col.comment': 'Beurteilung des Auditors',
  'apdf.final'      : 'ABSCHLIESSENDE AUDITBEURTEILUNG'
};

/* =====================================================================
   HELPERS
   ===================================================================== */

/* Idioma corrente da página (definido por index.html / auditoria.html). */
var APP_LANG = LANG_DEFAULT;

/* Tradução explícita: T('pt','btn.send'). Cai em inglês e, por fim,
   devolve a própria chave (fica evidente na tela o que falta traduzir). */
function T(lang, key, vars){
  var dic = I18N[lang] || I18N[LANG_DEFAULT];
  var s = dic[key];
  if(s === undefined) s = I18N[LANG_DEFAULT][key];
  if(s === undefined) s = key;
  if(vars){
    for(var k in vars){
      if(Object.prototype.hasOwnProperty.call(vars,k))
        s = s.split('{'+k+'}').join(String(vars[k]));
    }
  }
  return s;
}

/* Tradução no idioma corrente da página. */
function t(key, vars){ return T(APP_LANG, key, vars); }

/* Idioma efetivo do PDF: alguns idiomas caem no inglês porque a fonte
   padrão do jsPDF não desenha os seus caracteres (ver LANGS[].pdf). */
function pdfLangOf(lang){
  for(var i=0;i<LANGS.length;i++) if(LANGS[i].code===lang) return LANGS[i].pdf || lang;
  return LANG_DEFAULT;
}
function langInfo(code){
  for(var i=0;i<LANGS.length;i++) if(LANGS[i].code===code) return LANGS[i];
  return LANGS[0];
}
function isLangValid(code){
  for(var i=0;i<LANGS.length;i++) if(LANGS[i].code===code) return true;
  return false;
}

/* Campo multilíngue vindo da planilha: {pt:'…', en:'…', es:'…'}.
   Cadeia de fallback: idioma pedido -> inglês -> português -> 1º não vazio. */
function tField(obj, lang){
  if(obj == null) return '';
  if(typeof obj === 'string') return obj;
  if(obj[lang]) return obj[lang];
  if(obj.en) return obj.en;
  if(obj.pt) return obj.pt;
  for(var k in obj){ if(obj[k]) return obj[k]; }
  return '';
}

/* Formata nota com o separador decimal do idioma. */
function fmtNotaL(n, lang){
  if(n == null) return '—';
  return (Math.round(n*10)/10).toString().replace('.', DEC[lang] || '.');
}

/* Data/hora local do idioma escolhido. */
function fmtDataHora(date, lang){
  try{ return date.toLocaleString(LOCALE[lang] || 'en-US'); }
  catch(e){ return date.toLocaleString(); }
}

/* =====================================================================
   PAÍSES — códigos ISO 3166-1 alpha-2.
   O nome é resolvido em tempo de execução por Intl.DisplayNames, que já
   vem no navegador: nenhuma tabela de nomes precisa ser mantida aqui.
   countryName(cod,'pt') -> "Brasil" | countryName(cod,'en') -> "Brazil"
   ===================================================================== */
var ISO_COUNTRIES = [
 'AD','AE','AF','AG','AI','AL','AM','AO','AR','AT','AU','AW','AZ','BA','BB','BD','BE','BF','BG','BH',
 'BI','BJ','BM','BN','BO','BQ','BR','BS','BT','BW','BY','BZ','CA','CD','CF','CG','CH','CI','CK','CL',
 'CM','CN','CO','CR','CU','CV','CW','CY','CZ','DE','DJ','DK','DM','DO','DZ','EC','EE','EG','ER','ES',
 'ET','FI','FJ','FK','FM','FO','FR','GA','GB','GD','GE','GF','GG','GH','GI','GL','GM','GN','GP','GQ',
 'GR','GT','GU','GW','GY','HK','HN','HR','HT','HU','ID','IE','IL','IM','IN','IQ','IR','IS','IT','JE',
 'JM','JO','JP','KE','KG','KH','KI','KM','KN','KP','KR','KW','KY','KZ','LA','LB','LC','LI','LK','LR',
 'LS','LT','LU','LV','LY','MA','MC','MD','ME','MG','MH','MK','ML','MM','MN','MO','MQ','MR','MT','MU',
 'MV','MW','MX','MY','MZ','NA','NC','NE','NG','NI','NL','NO','NP','NR','NU','NZ','OM','PA','PE','PF',
 'PG','PH','PK','PL','PR','PS','PT','PW','PY','QA','RE','RO','RS','RU','RW','SA','SB','SC','SD','SE',
 'SG','SI','SK','SL','SM','SN','SO','SR','SS','ST','SV','SX','SY','SZ','TC','TD','TG','TH','TJ','TL',
 'TM','TN','TO','TR','TT','TV','TW','TZ','UA','UG','US','UY','UZ','VA','VC','VE','VG','VI','VN','VU',
 'WS','YE','ZA','ZM','ZW'
];

var _dnCache = {};
function countryName(code, lang){
  if(!code) return '';
  var loc = LOCALE[lang] || 'en-US';
  try{
    if(!_dnCache[loc]) _dnCache[loc] = new Intl.DisplayNames([loc], {type:'region'});
    return _dnCache[loc].of(code) || code;
  }catch(e){ return code; }   // navegador antigo: mostra o código ISO
}

/* Lista [{code,name}] ordenada alfabeticamente no idioma pedido. */
function countryList(lang){
  var arr = ISO_COUNTRIES.map(function(c){ return {code:c, name:countryName(c, lang)}; });
  try{ arr.sort(function(a,b){ return a.name.localeCompare(b.name, LOCALE[lang]||'en'); }); }
  catch(e){ arr.sort(function(a,b){ return a.name < b.name ? -1 : 1; }); }
  return arr;
}
