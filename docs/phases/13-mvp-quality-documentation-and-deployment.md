# PR 13 — MVP Quality, Documentation, and Deployment

**Status:** ⬜ Planned  
**Suggested tag:** `v1.0.0`  
**Purpose:** Prepare a stable, understandable, and demonstrable MVP.

**Depends on:** PR 12

## Issue #72 — Add the Guided Demo Brief

**Goal:** Make the main workflow easy to demonstrate.

**Tasks:**

- [ ] Add the veterinary-clinic sample brief.
- [ ] Add Use Sample Brief action.
- [ ] Ensure the resulting output exercises every tab.

**Acceptance criteria:**

- [ ] A new user can populate the form with one click.

## Issue #73 — Standardize Loading, Empty, and Error States

**Goal:** Remove unfinished-feeling states across the app.

**Tasks:**

- [ ] Audit every route and tab.
- [ ] Add missing loading indicators.
- [ ] Add empty-state next actions.
- [ ] Add recoverable error messages.

**Acceptance criteria:**

- [ ] No section displays a blank panel during normal use.

## Issue #74 — Add Safety and Accuracy Disclaimers

**Goal:** Clearly define the app as a preliminary design aid.

**Tasks:**

- [ ] Add the main disclaimer to the workspace.
- [ ] Include the disclaimer in exports.
- [ ] Review AI prompts for prohibited approval claims.
- [ ] Review UI copy for terms such as “approved” or “guaranteed.”

**Acceptance criteria:**

- [ ] The app does not claim professional certification or code compliance.

## Issue #75 — Add Responsive and Accessibility Improvements

**Goal:** Make the MVP usable on common laptop and narrow-browser layouts.

**Tasks:**

- [ ] Audit keyboard navigation.
- [ ] Add visible focus states.
- [ ] Add labels for controls.
- [ ] Check color contrast.
- [ ] Make tables horizontally scrollable where needed.
- [ ] Make dialog focus behavior usable.

**Acceptance criteria:**

- [ ] Core workflow can be completed using keyboard and mouse.
- [ ] Narrow layouts do not hide critical actions.

## Issue #76 — Add Application Metadata and Branding

**Goal:** Present SpatialSync AI consistently.

**Tasks:**

- [ ] Add page titles and descriptions.
- [ ] Add favicon or application icon.
- [ ] Add social-preview metadata if desired.
- [ ] Confirm naming is consistent across UI and export.

**Acceptance criteria:**

- [ ] Browser title and application identity are correct on main routes.

## Issue #77 — Write the Project README

**Goal:** Explain the product, architecture, setup, and limitations.

**Tasks:**

- [ ] Add product summary.
- [ ] Add feature list.
- [ ] Add tech stack.
- [ ] Explain structured AI output and deterministic diagrams.
- [ ] Add local setup instructions.
- [ ] Add environment-variable instructions.
- [ ] Add architecture overview.
- [ ] Add future improvements and non-goals.

**Acceptance criteria:**

- [ ] A new developer can install and run the app from the README.

## Issue #78 — Add Automated Quality Checks

**Goal:** Catch basic regressions before merge.

**Tasks:**

- [ ] Add unit tests for adjacency pair utilities.
- [ ] Add unit tests for Mermaid generation.
- [ ] Add unit tests for Markdown generation.
- [ ] Add schema tests for API output contracts.
- [ ] Add GitHub Actions for lint and build if repository hosting permits.

**Acceptance criteria:**

- [ ] Tests cover the highest-risk deterministic utilities.
- [ ] CI fails on lint or build errors.

## Issue #79 — Deploy the MVP to Vercel

**Goal:** Produce a shareable live application.

**Tasks:**

- [ ] Connect the repository to Vercel.
- [ ] Configure environment variables securely.
- [ ] Verify production API routes.
- [ ] Test the complete workflow in production.
- [ ] Add the live URL to the README.

**Acceptance criteria:**

- [ ] The deployed app completes the demo workflow.
- [ ] No secret appears in source or browser output.

## Issue #80 — Prepare Demo Assets

**Goal:** Complete the proof-of-work deliverables.

**Tasks:**

- [ ] Capture landing-page screenshot.
- [ ] Capture room-schedule screenshot.
- [ ] Capture matrix screenshot.
- [ ] Capture bubble-diagram screenshot.
- [ ] Record a two- to three-minute demo video.
- [ ] Prepare a concise architecture explanation.

**Acceptance criteria:**

- [ ] Demo shows brief analysis, schedule, matrix, diagram, zoning/review, and export.

## PR 13 Merge Checklist

- [ ] Full demo workflow works in production.
- [ ] README is complete.
- [ ] Safety language is visible.
- [ ] Core deterministic utilities are tested.
- [ ] Live link, screenshots, and demo video are ready.

---

---
[← Phase index](../README.md) · [Previous: PR 12](./12-local-persistence-and-project-lifecycle.md) · [Next: PR 14](./14-supabase-persistence.md)
