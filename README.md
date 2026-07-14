# SpatialSync AI Implementation Plan

This repository contains the implementation plan for **SpatialSync AI**, organized for issue-driven GitHub development.

There is intentionally no application code in this initial repository. Each implementation phase is one planned pull request, while the tasks inside that phase are numbered GitHub issues.

## Start Here

- [Implementation phases](docs/phases/README.md)
- [Complete issue index](docs/ISSUES.md)
- [Dependencies, labels, and milestones](docs/governance/dependencies-labels-milestones.md)
- [MVP acceptance test](docs/governance/mvp-acceptance-test.md)
- [MVP non-goals](docs/governance/mvp-non-goals.md)
- [Full combined roadmap](docs/reference/full-roadmap.md)
- [Original implementation guide](docs/reference/implementation-guide.md)

## Repository Structure

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── phases/              # One Markdown document per PR phase
│   ├── governance/          # Dependencies, milestones, acceptance, scope
│   ├── reference/           # Combined source documents
│   └── ISSUES.md            # Issue-to-phase index
├── scripts/                 # Optional GitHub CLI setup helpers
├── .editorconfig
├── .gitattributes
├── .gitignore
├── CONTRIBUTING.md
└── README.md
```

## Planned Delivery

- **PR 1–3:** completed baseline milestones
- **PR 4–13:** remaining MVP implementation
- **Optional PR 14–15:** post-MVP enhancements
- **Issues #1–80:** MVP tasks
- **Issues #81–94:** post-MVP tasks

## Git Workflow

```bash
# Create or switch to the issue branch
git switch -c issue-13-domain-types

# Commit focused work
git add .
git commit -m "feat: add project domain types"

# Push and open a PR
git push -u origin issue-13-domain-types
```

A phase may use one shared branch such as `pr-04-domain-models` when its issues are tightly coupled.

## GitHub Setup Helpers

The scripts in `scripts/` use the GitHub CLI (`gh`) to create the suggested labels and milestones. Review them before running:

```powershell
./scripts/setup-github.ps1
```

```bash
./scripts/setup-github.sh
```

## Planning Version

Initial planning repository: `planning-v0.1.0`
