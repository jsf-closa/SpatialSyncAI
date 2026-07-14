$ErrorActionPreference = 'Stop'

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  throw 'GitHub CLI (gh) is required.'
}

gh auth status

$labels = @(
  @{ Name = 'area:frontend'; Color = '1D76DB'; Description = 'Frontend pages, components, and interaction' }
  @{ Name = 'area:backend'; Color = '5319E7'; Description = 'Server routes and backend logic' }
  @{ Name = 'area:ai'; Color = 'A371F7'; Description = 'AI prompts, schemas, and structured outputs' }
  @{ Name = 'area:data'; Color = '0E8A16'; Description = 'Domain models and state management' }
  @{ Name = 'area:diagram'; Color = '006B75'; Description = 'React Flow, graph layout, and diagram behavior' }
  @{ Name = 'area:export'; Color = 'FBCA04'; Description = 'Markdown, Mermaid, and downloadable outputs' }
  @{ Name = 'area:persistence'; Color = 'BFDADC'; Description = 'Local or database persistence' }
  @{ Name = 'area:documentation'; Color = '0075CA'; Description = 'Documentation and developer guidance' }
  @{ Name = 'area:testing'; Color = 'C2E0C6'; Description = 'Tests, quality checks, and CI' }
  @{ Name = 'priority:high'; Color = 'B60205'; Description = 'High-priority work' }
  @{ Name = 'priority:medium'; Color = 'D93F0B'; Description = 'Medium-priority work' }
  @{ Name = 'priority:low'; Color = 'FBCA04'; Description = 'Low-priority work' }
  @{ Name = 'status:blocked'; Color = 'B60205'; Description = 'Blocked by another issue or decision' }
  @{ Name = 'status:ready'; Color = '0E8A16'; Description = 'Ready for implementation' }
  @{ Name = 'status:in-review'; Color = '5319E7'; Description = 'Under review' }
  @{ Name = 'type:feature'; Color = 'A2EEEF'; Description = 'New product behavior' }
  @{ Name = 'type:bug'; Color = 'D73A4A'; Description = 'Defect or regression' }
  @{ Name = 'type:refactor'; Color = 'D4C5F9'; Description = 'Internal restructuring without feature change' }
  @{ Name = 'type:chore'; Color = 'EDEDED'; Description = 'Maintenance or repository work' }
  @{ Name = 'mvp'; Color = '0052CC'; Description = 'Required for the MVP' }
  @{ Name = 'post-mvp'; Color = '7057FF'; Description = 'Optional after the MVP' }
)

foreach ($label in $labels) {
  gh label create $label.Name --color $label.Color --description $label.Description --force
}

$milestones = @(
  'Milestone 1 — Static Product Foundation'
  'Milestone 2 — Deterministic Programming Tools'
  'Milestone 3 — AI-Assisted Workflow'
  'Milestone 4 — Exportable and Persistent MVP'
  'Milestone 5 — Public MVP Release'
  'Milestone 6 — Post-MVP Enhancements'
)

$repo = gh repo view --json nameWithOwner --jq '.nameWithOwner'
foreach ($title in $milestones) {
  $existing = gh api "repos/$repo/milestones?state=all" --jq ".[] | select(.title == '$title') | .number"
  if (-not $existing) {
    gh api --method POST "repos/$repo/milestones" -f title=$title | Out-Null
    Write-Host "Created milestone: $title"
  } else {
    Write-Host "Milestone already exists: $title"
  }
}

Write-Host 'GitHub labels and milestones are ready.'
