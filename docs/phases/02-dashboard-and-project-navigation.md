# PR 2 — Dashboard and Project Navigation

**Status:** ✅ Completed baseline  
**Suggested tag:** `v0.3.0`  
**Purpose:** Add a dashboard where users can view, create, and reopen projects.

## Issue #5 — Create the Dashboard Route

**Goal:** Add a dashboard page for project management.

**Tasks:**

- [ ] Create `/dashboard` or the selected projects index route.
- [ ] Add page title, description, and create-project action.
- [ ] Add placeholder project cards.

**Acceptance criteria:**

- [ ] The route loads from the main navigation.
- [ ] The page supports empty and populated states.

## Issue #6 — Build the Project Card Component

**Goal:** Represent saved or sample projects consistently.

**Tasks:**

- [ ] Display project name.
- [ ] Display building type when available.
- [ ] Display last-updated information.
- [ ] Add an action to open the workspace.

**Acceptance criteria:**

- [ ] Project cards are reusable.
- [ ] Opening a project routes to `/projects/[id]`.

## Issue #7 — Add Dashboard Empty State

**Goal:** Guide new users who have no projects.

**Tasks:**

- [ ] Add an empty-state illustration or icon treatment.
- [ ] Explain the first project workflow.
- [ ] Link directly to `/projects/new`.

**Acceptance criteria:**

- [ ] The user always has a clear next action.

## Issue #8 — Add Demo Project Navigation

**Goal:** Make it possible to preview the workspace before persistence is complete.

**Tasks:**

- [ ] Add a demo project entry.
- [ ] Route it to a stable demo ID.
- [ ] Clearly label demo data.

**Acceptance criteria:**

- [ ] A user can reach a representative workspace without creating data first.

## PR 2 Merge Checklist

- [ ] Dashboard shows projects or a useful empty state.
- [ ] Project cards open the correct route.
- [ ] Create-project action works.

---

---
[← Phase index](../README.md) · [Previous: PR 1](./01-application-foundation-and-landing-page.md) · [Next: PR 3](./03-project-creation-workflow.md)
