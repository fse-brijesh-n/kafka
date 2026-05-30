param(
    [string]$source = "README.md",
    [string]$output = "kafka-handbook.pdf"
)

if (-not (Get-Command pandoc -ErrorAction SilentlyContinue)) {
    Write-Error "Pandoc not found. Install Pandoc and a LaTeX engine (e.g., TinyTeX or TeX Live)."
    exit 1
}

Write-Host "Generating PDF from $source -> $output"
pandoc $source -o $output --pdf-engine=xelatex
Write-Host "Done: $output"
