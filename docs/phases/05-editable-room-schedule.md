# PR 5 — Editable Room Schedule

**Status:** ⬜ Planned  
**Suggested tag:** `v0.6.0`  
**Purpose:** Make the room schedule the source of truth for all project spaces.

**Depends on:** PR 4

## Issue #19 — Render the Room Schedule Table

**Goal:** Display project rooms in a clear architectural-programming table.

**Tasks:**

- [ ] Add Room Name column.
- [ ] Add Area column in square metres.
- [ ] Add Zone column.
- [ ] Add Department column.
- [ ] Add Priority column.
- [ ] Add Notes column.
- [ ] Add Actions column.

**Acceptance criteria:**

- [ ] All demo rooms appear correctly.
- [ ] Numeric area values are formatted consistently.
- [ ] The table remains usable on narrow screens.

## Issue #20 — Add Room Creation

**Goal:** Let users manually add missing spaces.

**Tasks:**

- [ ] Add an Add Room action.
- [ ] Create a modal, drawer, or inline form.
- [ ] Validate room name and area.
- [ ] Generate a stable room ID.
- [ ] Add the room to workspace state.

**Acceptance criteria:**

- [ ] A valid room appears immediately in the schedule.
- [ ] A newly added room becomes available to the matrix and diagram data layers.

## Issue #21 — Add Room Editing

**Goal:** Let users correct AI suggestions and project information.

**Tasks:**

- [ ] Edit room name.
- [ ] Edit area.
- [ ] Edit zone.
- [ ] Edit department.
- [ ] Edit priority.
- [ ] Edit notes.

**Acceptance criteria:**

- [ ] Changes appear immediately across the workspace state.
- [ ] Invalid area values cannot be saved.

## Issue #22 — Add Room Deletion With Dependency Cleanup

**Goal:** Delete rooms safely without leaving broken relationships.

**Tasks:**

- [ ] Add delete action.
- [ ] Show a confirmation message.
- [ ] Remove adjacencies connected to the room.
- [ ] Remove the room from zone membership.
- [ ] Remove the room from review-note references when relevant.

**Acceptance criteria:**

- [ ] Deleted rooms disappear from the schedule.
- [ ] No orphaned adjacency references remain.
- [ ] The matrix and diagram do not crash after deletion.

## Issue #23 — Add Room Schedule Totals and Summary

**Goal:** Give users an immediate summary of the program.

**Tasks:**

- [ ] Show total room count.
- [ ] Show total programmed area.
- [ ] Optionally summarize area by zone.

**Acceptance criteria:**

- [ ] Totals update after add, edit, and delete operations.

## Issue #24 — Add Room Schedule Empty and Error States

**Goal:** Keep the tab usable before AI analysis or manual entry.

**Tasks:**

- [ ] Add an empty schedule message.
- [ ] Add a direct Add Room action.
- [ ] Handle malformed room data defensively.

**Acceptance criteria:**

- [ ] An empty project has a clear next action.
- [ ] One malformed record does not break the entire page.

## PR 5 Merge Checklist

- [ ] Room schedule supports create, read, update, and delete.
- [ ] Room deletions clean dependent data.
- [ ] Room changes are reflected in shared state.
- [ ] Schedule totals are correct.

---

---
[← Phase index](../README.md) · [Previous: PR 4](./04-domain-models-and-workspace-state.md) · [Next: PR 6](./06-editable-adjacency-matrix.md)
