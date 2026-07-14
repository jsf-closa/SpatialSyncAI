# PR Dependency Summary

```txt
PR 1 Foundation
  ↓
PR 2 Dashboard
  ↓
PR 3 Project Creation
  ↓
PR 4 Domain Models and Workspace State
  ↓
PR 5 Room Schedule
  ↓
PR 6 Adjacency Matrix
  ↓
PR 7 Bubble Diagram
  ↓
PR 8 AI Brief Analyzer
  ↓
PR 9 AI Adjacency Suggestions
  ↓
PR 10 Zoning and Layout Review
  ↓
PR 11 Export
  ↓
PR 12 Local Persistence
  ↓
PR 13 MVP Quality and Deployment
  ├── Optional PR 14 Supabase Persistence
  └── Optional PR 15 Advanced Diagram Assistance
```

PR 7 and PR 8 may be developed in parallel after the room schedule exists, but merging them in the listed order makes testing simpler.

---

# Suggested GitHub Labels

```txt
area:frontend
area:backend
area:ai
area:data
area:diagram
area:export
area:persistence
area:documentation
area:testing
priority:high
priority:medium
priority:low
status:blocked
status:ready
status:in-review
type:feature
type:bug
type:refactor
type:chore
mvp
post-mvp
```

# Suggested Milestones

## Milestone 1 — Static Product Foundation

Includes PR 1 through PR 4.

## Milestone 2 — Deterministic Programming Tools

Includes PR 5 through PR 7.

## Milestone 3 — AI-Assisted Workflow

Includes PR 8 through PR 10.

## Milestone 4 — Exportable and Persistent MVP

Includes PR 11 and PR 12.

## Milestone 5 — Public MVP Release

Includes PR 13.

## Milestone 6 — Post-MVP Enhancements

Includes optional PR 14 and PR 15.

---
