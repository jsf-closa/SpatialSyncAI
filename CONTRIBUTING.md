# Contributing

## Planning Model

- One implementation phase maps to one pull request.
- Each task maps to a GitHub issue.
- Link every PR to all included issues using `Closes #<number>`.
- Keep AI outputs structured; deterministic code owns editing, synchronization, rendering, persistence, and export.

## Branches

Preferred issue branch:

```text
issue-13-domain-types
```

Acceptable phase branch for tightly connected issues:

```text
pr-04-domain-models
```

## Commits

Use conventional, focused commit messages:

```text
feat: add editable room schedule
fix: remove orphaned adjacencies after room deletion
refactor: centralize project workspace state
chore: add React Flow dependency
```

## Pull Requests

1. Start from the correct phase document under `docs/phases/`.
2. Open or assign the planned issues.
3. Complete the acceptance criteria.
4. Update checkboxes in the phase document only when the work is actually complete.
5. Include testing results and screenshots for visible changes.
6. Keep intentionally deferred work under Known Limitations.

## Definition of Done

- All included issue acceptance criteria pass.
- No TypeScript errors are introduced.
- Lint and production build pass once application code exists.
- Loading, empty, and error states are handled where relevant.
- No secret or API key is committed.
- The pull request lists every issue it closes.
