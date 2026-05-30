#!/usr/bin/env bash
SOURCE="README.md"
OUTPUT="kafka-handbook.pdf"

if ! command -v pandoc >/dev/null 2>&1; then
  echo "Pandoc not found. Install pandoc and a LaTeX engine (e.g., texlive or TinyTeX)." >&2
  exit 1
fi

echo "Generating PDF from $SOURCE -> $OUTPUT"
pandoc "$SOURCE" -o "$OUTPUT" --pdf-engine=xelatex
echo "Done: $OUTPUT"
