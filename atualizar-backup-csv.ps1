# Atualiza a cópia local (perguntas.csv / escopo.csv) a partir da planilha Google.
# Essa cópia só é usada se a planilha estiver inacessível para o fornecedor
# (ex.: rede que bloqueia o Google). Rode depois de mudanças grandes na
# planilha e publique os dois CSVs junto com o site.
#   Uso:  powershell -ExecutionPolicy Bypass -File .\atualizar-backup-csv.ps1

$ErrorActionPreference = 'Stop'
$sheetId = '1soNX-LdvAit09ja38D3eEFXTEk82oyt_XrhlzJMl05c'   # mesmo de dados.js (FONTE.SHEET_ID)
$abas = @(
  @{ Aba = 'Perguntas'; Arquivo = 'perguntas.csv'; Chave = 'bloco_id' },
  @{ Aba = 'Escopo';    Arquivo = 'escopo.csv';    Chave = 'nome' }
)
$utf8 = New-Object System.Text.UTF8Encoding($false)

foreach ($a in $abas) {
  $url = "https://docs.google.com/spreadsheets/d/$sheetId/gviz/tq?tqx=out:csv&headers=1&sheet=" + [uri]::EscapeDataString($a.Aba)
  $r = Invoke-WebRequest -UseBasicParsing $url
  $csv = [Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray())
  # O Google devolve a 1ª aba quando a aba pedida não existe: confere o cabeçalho.
  $cab = ($csv -split "`n")[0].ToLower()
  if ($cab -notmatch ('"?' + $a.Chave + '"?(,|$)')) {
    Write-Warning "Aba '$($a.Aba)' não encontrada (cabeçalho sem '$($a.Chave)'). $($a.Arquivo) mantido sem alteração."
    continue
  }
  $destino = Join-Path $PSScriptRoot $a.Arquivo
  [IO.File]::WriteAllText($destino, $csv, $utf8)
  $linhas = ($csv -split "`n" | Where-Object { $_.Trim() }).Count - 1
  Write-Host "$($a.Arquivo): $linhas linhas atualizadas."
}
