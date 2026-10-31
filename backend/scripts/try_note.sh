#!/usr/bin/env bash
# Send a corpus article (by number from docs/corpus-prueba.md) through the pipeline and print results.
# Usage: scripts/try_note.sh 07 [published_at, e.g. 2026-10-27]
set -euo pipefail
API=${API:-http://127.0.0.1:8000}
root=$(cd "$(dirname "$0")/../.." && pwd)
f=$(ls "$root"/corpus/notas/txt/"$1"-*.txt 2>/dev/null | head -1) || true
[ -n "$f" ] || { echo "no article $1 in corpus/notas/txt" >&2; exit 1; }
echo "→ $(head -1 "$f")" >&2
id=$(jq -n --rawfile b "$f" --arg d "${2:-}" '{title: ($b|split("\n")[0]), body: $b} + (if $d == "" then {} else {published_at: $d} end)' \
  | curl -sf -X POST "$API/articles" -H 'content-type: application/json' -d @- | jq -r .id)
echo "id: $id" >&2
while curl -sf "$API/articles/$id" | jq -e '[.enrichments[].status] | any(. == "pending" or . == "running")' >/dev/null; do
  curl -sf "$API/articles/$id" | jq -r '[.enrichments[] | "\(.kind)=\(.status)"] | join("  ")' >&2
  sleep 5
done
curl -sf "$API/articles/$id" | jq '{niche: .article.niche, enrichments: [.enrichments[] | {kind, status, error, data}]}'
