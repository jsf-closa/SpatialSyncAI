#!/usr/bin/env bash
set -euo pipefail

command -v gh >/dev/null 2>&1 || { echo 'GitHub CLI (gh) is required.' >&2; exit 1; }
gh auth status

gh label create 'area:frontend' --color '1D76DB' --description 'Frontend pages, components, and interaction' --force
gh label create 'area:backend' --color '5319E7' --description 'Server routes and backend logic' --force
gh label create 'area:ai' --color 'A371F7' --description 'AI prompts, schemas, and structured outputs' --force
gh label create 'area:data' --color '0E8A16' --description 'Domain models and state management' --force
gh label create 'area:diagram' --color '006B75' --description 'React Flow, graph layout, and diagram behavior' --force
gh label create 'area:export' --color 'FBCA04' --description 'Markdown, Mermaid, and downloadable outputs' --force
gh label create 'area:persistence' --color 'BFDADC' --description 'Local or database persistence' --force
gh label create 'area:documentation' --color '0075CA' --description 'Documentation and developer guidance' --force
gh label create 'area:testing' --color 'C2E0C6' --description 'Tests, quality checks, and CI' --force
gh label create 'priority:high' --color 'B60205' --description 'High-priority work' --force
gh label create 'priority:medium' --color 'D93F0B' --description 'Medium-priority work' --force
gh label create 'priority:low' --color 'FBCA04' --description 'Low-priority work' --force
gh label create 'status:blocked' --color 'B60205' --description 'Blocked by another issue or decision' --force
gh label create 'status:ready' --color '0E8A16' --description 'Ready for implementation' --force
gh label create 'status:in-review' --color '5319E7' --description 'Under review' --force
gh label create 'type:feature' --color 'A2EEEF' --description 'New product behavior' --force
gh label create 'type:bug' --color 'D73A4A' --description 'Defect or regression' --force
gh label create 'type:refactor' --color 'D4C5F9' --description 'Internal restructuring without feature change' --force
gh label create 'type:chore' --color 'EDEDED' --description 'Maintenance or repository work' --force
gh label create 'mvp' --color '0052CC' --description 'Required for the MVP' --force
gh label create 'post-mvp' --color '7057FF' --description 'Optional after the MVP' --force

repo=$(gh repo view --json nameWithOwner --jq '.nameWithOwner')
milestones=(
  'Milestone 1 — Static Product Foundation'
  'Milestone 2 — Deterministic Programming Tools'
  'Milestone 3 — AI-Assisted Workflow'
  'Milestone 4 — Exportable and Persistent MVP'
  'Milestone 5 — Public MVP Release'
  'Milestone 6 — Post-MVP Enhancements'
)

for title in "${milestones[@]}"; do
  existing=$(gh api "repos/$repo/milestones?state=all" --jq ".[] | select(.title == \"$title\") | .number" || true)
  if [[ -z "$existing" ]]; then
    gh api --method POST "repos/$repo/milestones" -f "title=$title" >/dev/null
    echo "Created milestone: $title"
  else
    echo "Milestone already exists: $title"
  fi
done

echo 'GitHub labels and milestones are ready.'
