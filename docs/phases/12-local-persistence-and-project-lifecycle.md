# PR 12 — Local Persistence and Project Lifecycle

**Status:** ⬜ Planned  
**Suggested tag:** `v0.13.0`  
**Purpose:** Preserve projects across browser refreshes without requiring a database for the MVP.

**Depends on:** PR 11

## Issue #66 — Define the Persistence Interface

**Goal:** Keep storage logic replaceable so Supabase can be added later.

**Tasks:**

- [ ] Define load-project function.
- [ ] Define save-project function.
- [ ] Define list-projects function.
- [ ] Define delete-project function.
- [ ] Define persistence error type.

**Acceptance criteria:**

- [ ] Workspace components do not call `localStorage` directly.

## Issue #67 — Implement Local Storage Repository

**Goal:** Save complete project state in the browser.

**Tasks:**

- [ ] Serialize project state.
- [ ] Namespace storage keys.
- [ ] Save project index metadata.
- [ ] Handle missing or corrupt data.
- [ ] Add a simple data-version field.

**Acceptance criteria:**

- [ ] Projects survive a browser refresh.
- [ ] Corrupt storage produces a recoverable error, not a blank crash.

## Issue #68 — Add Autosave and Saved-State Feedback

**Goal:** Save edits without requiring a manual save after every change.

**Tasks:**

- [ ] Debounce project saves.
- [ ] Show Saving, Saved, and Error states.
- [ ] Save after room, adjacency, zone, review, and position changes.

**Acceptance criteria:**

- [ ] Rapid edits do not trigger excessive writes.
- [ ] Users can see whether recent changes are stored.

## Issue #69 — Connect the Dashboard to Saved Projects

**Goal:** Replace placeholder cards with persisted projects.

**Tasks:**

- [ ] Load project summaries.
- [ ] Sort by updated date.
- [ ] Open selected project.
- [ ] Preserve the demo project separately.

**Acceptance criteria:**

- [ ] Newly created projects appear on the dashboard.
- [ ] Reopened projects contain their latest saved data.

## Issue #70 — Add Project Rename and Delete Actions

**Goal:** Complete basic project management.

**Tasks:**

- [ ] Add rename action.
- [ ] Add delete confirmation.
- [ ] Remove deleted projects from storage and dashboard.
- [ ] Handle deletion of the currently open project.

**Acceptance criteria:**

- [ ] Renames are reflected in exports and dashboard cards.
- [ ] Deleted projects cannot be reopened from stale links without a clear not-found state.

## Issue #71 — Add Unsaved or Storage Failure Recovery

**Goal:** Protect users when browser storage fails.

**Tasks:**

- [ ] Catch quota and access errors.
- [ ] Offer copy/export as a recovery path.
- [ ] Preserve in-memory state when saving fails.

**Acceptance criteria:**

- [ ] A storage error does not erase the active project.

## PR 12 Merge Checklist

- [ ] Projects survive refreshes.
- [ ] Dashboard lists saved projects.
- [ ] Autosave state is visible.
- [ ] Storage implementation can later be replaced by Supabase.

---

---
[← Phase index](../README.md) · [Previous: PR 11](./11-markdown-and-mermaid-export.md) · [Next: PR 13](./13-mvp-quality-documentation-and-deployment.md)
