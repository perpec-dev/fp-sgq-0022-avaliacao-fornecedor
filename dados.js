/* =====================================================================
   dados.js — FONTE ÚNICA de perguntas e escopos.
   Compartilhado por index.html, auditoria.html e gerar-link.html:
   a planilha, as regras de leitura e a regra "escopo → blocos" ficam
   SOMENTE aqui. Nenhuma página guarda cópia própria do banco.

   ---- Onde editar (só na planilha Google) ---------------------------
   Aba "Perguntas" (obrigatória) — uma linha por pergunta:
     bloco_id | categoria | grupo | bloco_nota | escopo | codigo | texto
     (+ categoria_en, texto_en, categoria_es, texto_es, … opcionais)
     (+ tipo opcional: produto | servico — vale para o bloco inteiro)
     grupo:      SGQ            -> aparece para todo fornecedor
                 PRODUCAO_GERAL -> aparece se algum escopo for "produto"
                 ESCOPO         -> aparece quando o escopo é selecionado
     bloco_nota: SGQ | TECNICA (peso 50/50 da nota final)

   >>> NOVA CATEGORIA: basta acrescentar as linhas na aba "Perguntas"
       com um bloco_id novo e grupo = ESCOPO. O bloco vira um escopo
       automaticamente (nome = coluna "categoria"), aparece no gerador
       de link e as perguntas entram no questionário. Não é preciso
       mexer na aba "Escopo" nem no código.

   Aba "Escopo" (OPCIONAL — só para ajustes finos):
     nome | tipo | blocos  (+ nome_en, nome_es, …)
     Use quando quiser: um nome diferente da categoria, marcar o tipo
     (produto/servico) ou juntar vários blocos num só escopo
     ("14, 15"). Se "blocos" ficar vazio, o escopo é ligado ao bloco
     cuja categoria tem o mesmo nome.

   IMPORTANTE: o NOME do escopo vai dentro do link enviado ao
   fornecedor (?escopos=). Renomear um escopo depois de enviar links
   faz esses links perderem o escopo — prefira traduzir/ajustar nas
   colunas _xx. (A comparação ignora maiúsculas, acentos e espaços.)

   Fallback: se a planilha não responder (ex.: rede que bloqueia o
   Google), as páginas usam perguntas.csv + escopo.csv publicados junto
   do site — cópia gerada por atualizar-backup-csv.ps1.
   ===================================================================== */
const FONTE = {
  SHEET_ID:      "1soNX-LdvAit09ja38D3eEFXTEk82oyt_XrhlzJMl05c",
  ABA_PERGUNTAS: "Perguntas",
  ABA_ESCOPOS:   "Escopo",
  ABA_TEXTOS:    "Textos",
  CSV_PERGUNTAS: "perguntas.csv",
  CSV_ESCOPOS:   "escopo.csv"
};

/* ----- leitura ----------------------------------------------------- */

/* Export CSV de uma aba. headers=1 fixa a 1ª linha como cabeçalho;
   &_ evita cache. */
function urlSheetCSV(aba){
  if(!FONTE.SHEET_ID) return null;
  return 'https://docs.google.com/spreadsheets/d/'+FONTE.SHEET_ID
       + '/gviz/tq?tqx=out:csv&headers=1&sheet='+encodeURIComponent(aba)
       + '&_='+Date.now();
}

async function fetchTexto(url){
  if(!url) return null;
  try{
    const r=await fetch(url,{cache:'no-store'});
    if(!r.ok) return null;
    const txt=await r.text();
    return (txt && txt.trim()) ? txt : null;
  }catch(e){ return null; }
}

/* Lê um CSV e só o aceita se o cabeçalho tiver a coluna-chave.
   Necessário porque o Google devolve a PRIMEIRA aba quando a aba pedida
   não existe — sem essa checagem, uma aba renomeada seria lida como
   se fosse outra. */
async function lerTabela(url, colunaChave){
  const txt=await fetchTexto(url);
  if(!txt) return null;
  const rows=parseCSV(txt);
  return mapaColunas(rows,colunaChave) ? rows : null;
}
function lerAba(aba, colunaChave){ return lerTabela(urlSheetCSV(aba), colunaChave); }

/* Parser de CSV (RFC 4180): aspas, vírgulas dentro de células, quebras de
   linha. Detecta o separador (',' do Google ou ';' de CSV pt-BR). */
function parseCSV(text){
  text=String(text||'').replace(/^﻿/,'');
  const head=(text.split('\n')[0]||'');
  const sep=((head.split(';').length-1)>(head.split(',').length-1))?';':',';
  const rows=[]; let row=[],val='',q=false;
  for(let i=0;i<text.length;i++){
    const ch=text[i];
    if(q){
      if(ch==='"'){ if(text[i+1]==='"'){val+='"';i++;} else q=false; }
      else val+=ch;
    }else{
      if(ch==='"') q=true;
      else if(ch===sep){ row.push(val); val=''; }
      else if(ch==='\n'){ row.push(val); rows.push(row); row=[]; val=''; }
      else if(ch==='\r'){ /* ignora */ }
      else val+=ch;
    }
  }
  if(val!==''||row.length){ row.push(val); rows.push(row); }
  return rows.filter(r=>r.some(c=>String(c).trim()!==''));
}

/* Colunas localizadas pelo NOME do cabeçalho (ordem livre na planilha). */
function mapaColunas(rows, colunaChave){
  if(!rows.length) return null;
  const head=rows[0].map(c=>String(c||'').trim().toLowerCase());
  if(head.indexOf(colunaChave)<0) return null;
  const map={};
  head.forEach((nome,i)=>{ if(nome && !(nome in map)) map[nome]=i; });
  return map;
}
function celula(row, map, nome){
  const i=map[nome];
  return (i==null) ? '' : String(row[i]==null?'':row[i]).trim();
}
/* Campo multilíngue: "<base>" é o português; cada "<base>_<idioma>"
   preenchida vira uma tradução. Qualquer idioma novo é achado sozinho. */
function campoI18n(row, map, base){
  const obj={ pt: celula(row,map,base) };
  const pref=base+'_';
  Object.keys(map).forEach(col=>{
    if(col.indexOf(pref)!==0) return;
    const lang=col.slice(pref.length);
    if(!/^[a-z]{2,3}(-[a-z0-9]+)?$/.test(lang)) return;
    const v=celula(row,map,col);
    if(v) obj[lang]=v;
  });
  return obj;
}

/* Normaliza para comparar nomes: sem acentos, maiúsculas, traços ou
   espaços extras. "Matéria-Prima  Metálica" == "materia-prima metalica". */
function normNome(s){
  return String(s==null?'':s).normalize('NFD').replace(/[̀-ͯ]/g,'')
    .replace(/[–—]/g,'-').replace(/\s+/g,' ').trim().toLowerCase();
}
/* "Produção Geral" / "producao_geral" -> "PRODUCAO_GERAL" */
function normCodigo(s){
  return normNome(s).replace(/[\s-]+/g,'_').toUpperCase();
}
function normTipo(s){
  return /^servi/.test(normNome(s)) ? 'servico' : 'produto';
}

/* ----- montagem do banco ------------------------------------------- */

function parsePerguntas(rows){
  const map=mapaColunas(rows,'bloco_id');
  const mapa={}, ordem=[];
  rows.forEach((c,i)=>{
    if(i===0) return;                                       // cabeçalho
    const id=celula(c,map,'bloco_id'); if(!id || /^bloco_id$/i.test(id)) return;
    const cod=celula(c,map,'codigo'), texto=celula(c,map,'texto');
    if(!cod && !texto) return;                              // linha sem pergunta
    if(!mapa[id]){
      mapa[id]={id,
                categoria:celula(c,map,'categoria'),
                categoria_i18n:campoI18n(c,map,'categoria'),
                grupo:normCodigo(celula(c,map,'grupo'))||'ESCOPO',
                bloco_nota:normCodigo(celula(c,map,'bloco_nota'))||'TECNICA',
                escopo:celula(c,map,'escopo'),
                tipo:celula(c,map,'tipo'),
                perguntas:[]};
      ordem.push(id);
    }else if(!mapa[id].tipo){
      mapa[id].tipo=celula(c,map,'tipo');
    }
    mapa[id].perguntas.push({c:cod, t:texto, t_i18n:campoI18n(c,map,'texto')});
  });
  return ordem.map(id=>mapa[id]);
}

function parseLinhasEscopo(rows){
  const map=mapaColunas(rows,'nome');
  const out=[];
  rows.forEach((c,i)=>{
    if(i===0) return;
    const nome=celula(c,map,'nome'); if(!nome || /^nome$/i.test(nome)) return;
    out.push({nome,
              nome_i18n:campoI18n(c,map,'nome'),
              tipo:celula(c,map,'tipo'),
              blocos:celula(c,map,'blocos').split(/[,;|\/\s]+/).map(x=>x.trim()).filter(Boolean)});
  });
  return out;
}

/* Lista final de escopos = linhas da aba "Escopo" + um escopo automático
   para cada bloco de grupo ESCOPO que nenhuma linha cobriu. */
function montarEscopos(blocos, linhas){
  const porId={}, porCategoria={};
  blocos.forEach(b=>{ porId[b.id]=b; porCategoria[normNome(b.categoria)]=b; });
  const coberto={}, porNome={}, out=[];

  linhas.forEach(l=>{
    let ids=l.blocos;
    if(!ids.length){ const b=porCategoria[normNome(l.nome)]; if(b) ids=[b.id]; }
    const validos=ids.filter(id=>porId[id]);
    const e={nome:l.nome, nome_i18n:l.nome_i18n,
             tipo:normTipo(l.tipo || (validos[0] && porId[validos[0]].tipo)),
             blocos:validos,
             blocosInexistentes:ids.filter(id=>!porId[id]),
             auto:false};
    validos.forEach(id=>coberto[id]=true);
    porNome[normNome(e.nome)]=e;
    out.push(e);
  });

  blocos.forEach(b=>{
    if(b.grupo!=='ESCOPO' || coberto[b.id]) return;
    const nome=b.categoria || ('Bloco '+b.id);
    const existente=porNome[normNome(nome)];
    if(existente){ existente.blocos.push(b.id); return; }
    const e={nome, nome_i18n:b.categoria_i18n, tipo:normTipo(b.tipo),
             blocos:[b.id], blocosInexistentes:[], auto:true};
    porNome[normNome(nome)]=e;
    out.push(e);
  });

  out.forEach(e=>{
    e.qtdPerguntas=e.blocos.reduce((n,id)=>n+porId[id].perguntas.length,0);
    e.semPerguntas=!e.qtdPerguntas;
  });
  // Ordem da planilha (pelo nº do 1º bloco); escopos sem perguntas no fim.
  const ordemDe=e=>e.semPerguntas ? Infinity : Math.min.apply(null,e.blocos.map(id=>parseFloat(id)||0));
  return out.map((e,i)=>({e,i}))
            .sort((a,b)=>(ordemDe(a.e)-ordemDe(b.e)) || (a.i-b.i))
            .map(x=>x.e);
}

/* Carrega perguntas + escopos. As duas fontes vêm SEMPRE do mesmo lugar
   (planilha OU cópia local), para nunca misturar numerações diferentes.
   Retorna {blocos, escopos, origem: 'planilha' | 'backup' | 'erro'}. */
async function carregarBaseDados(){
  let origem='planilha';
  let [rowsP, rowsE]=await Promise.all([
    lerAba(FONTE.ABA_PERGUNTAS,'bloco_id'),
    lerAba(FONTE.ABA_ESCOPOS,'nome')            // aba opcional
  ]);
  if(!rowsP){
    origem='backup';
    [rowsP, rowsE]=await Promise.all([
      lerTabela(FONTE.CSV_PERGUNTAS,'bloco_id'),
      lerTabela(FONTE.CSV_ESCOPOS,'nome')
    ]);
  }
  if(!rowsP) return {blocos:[], escopos:[], origem:'erro'};
  const blocos=parsePerguntas(rowsP);
  const escopos=montarEscopos(blocos, rowsE ? parseLinhasEscopo(rowsE) : []);
  return {blocos, escopos, origem};
}

/* ----- regras de uso ----------------------------------------------- */

/* Converte os nomes vindos do link (?escopos=) nos nomes oficiais da
   planilha, tolerando diferença de maiúsculas/acentos/espaços e nomes
   traduzidos. Nome desconhecido é mantido como veio. */
function resolverEscopos(nomes, escopos){
  const idx={};
  escopos.forEach(e=>{
    idx[normNome(e.nome)]=e.nome;
    Object.keys(e.nome_i18n||{}).forEach(l=>{
      const k=normNome(e.nome_i18n[l]); if(k && !(k in idx)) idx[k]=e.nome;
    });
  });
  const out=[];
  nomes.forEach(n=>{
    const nome=idx[normNome(n)] || n;
    if(out.indexOf(nome)<0) out.push(nome);
  });
  return out;
}

/* Blocos do questionário para os escopos selecionados:
   SGQ sempre; Produção Geral se houver escopo "produto"; e os blocos
   ligados a cada escopo selecionado. */
function blocosDosEscopos(sel, escopos, blocos){
  const escSel=escopos.filter(e=>sel.indexOf(e.nome)>=0);
  const ids={};
  escSel.forEach(e=>e.blocos.forEach(id=>{ ids[id]=true; }));
  const temProduto=escSel.some(e=>e.tipo==='produto');
  const selNorm=sel.map(normNome);
  return blocos.filter(b=>{
    if(b.grupo==='SGQ')            return true;
    if(b.grupo==='PRODUCAO_GERAL') return temProduto;
    if(ids[b.id])                  return true;
    return !!b.escopo && selNorm.indexOf(normNome(b.escopo))>=0;
  });
}
