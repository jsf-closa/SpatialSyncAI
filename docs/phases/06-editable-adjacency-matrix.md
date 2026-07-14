# PR 6 — Editable Adjacency Matrix

**Status:** ⬜ Planned  
**Suggested tag:** `v0.7.0`  
**Purpose:** Generate a symmetrical relationship matrix from the room list and allow manual overrides.

**Depends on:** PR 5

## Issue #25 — Define Adjacency Utility Functions

**Goal:** Centralize room-pair and relationship logic.

**Tasks:**

- [ ] Create a canonical room-pair key.
- [ ] Normalize pair order to prevent duplicate A–B and B–A records.
- [ ] Add lookup helpers by room ID.
- [ ] Add create, update, and remove helpers.

**Acceptance criteria:**

- [ ] One relationship record represents both matrix directions.
- [ ] Duplicate pair records are prevented.

## Issue #26 — Render the Matrix From Room and Adjacency Lists

**Goal:** Generate matrix rows and columns dynamically.

**Tasks:**

- [ ] Use rooms for both axes.
- [ ] Render a disabled diagonal for self-relationships.
- [ ] Read each off-diagonal value from the adjacency list.
- [ ] Keep row and column labels visible where practical.

**Acceptance criteria:**

- [ ] Adding or deleting a room changes both matrix axes.
- [ ] A–B and B–A display the same value.

## Issue #27 — Add Adjacency Strength Editing

**Goal:** Let users set `avoid`, `low`, `medium`, or `high` relationships.

**Tasks:**

- [ ] Add cell controls for relationship strength.
- [ ] Update the canonical adjacency record.
- [ ] Mark edited relationships as user overrides.
- [ ] Preserve optional AI reasoning.

**Acceptance criteria:**

- [ ] Editing one matrix direction updates the opposite direction.
- [ ] Manual values persist while switching tabs.

## Issue #28 — Add Adjacency Reason Editing

**Goal:** Let users inspect and revise the reason for each relationship.

**Tasks:**

- [ ] Open a relationship-detail panel from a matrix cell.
- [ ] Display AI or user-provided reason.
- [ ] Allow manual reason editing.
- [ ] Show whether the value came from AI or the user.

**Acceptance criteria:**

- [ ] Each stored relationship can include a reason.
- [ ] Edited reasons do not alter unrelated pairs.

## Issue #29 — Add Matrix Legend and Visual States

**Goal:** Make relationship strengths easy to understand.

**Tasks:**

- [ ] Add a legend for all four strength values.
- [ ] Add distinct text, icon, border, or background treatments.
- [ ] Do not rely on color alone.

**Acceptance criteria:**

- [ ] Users can interpret the matrix without documentation.
- [ ] Strengths remain distinguishable in accessible modes.

## Issue #30 — Add Matrix Filtering or Focus Mode

**Goal:** Keep larger matrices usable.

**Tasks:**

- [ ] Add room-name search or zone filter.
- [ ] Add a focused-room mode showing one room’s relationships.
- [ ] Preserve the complete underlying matrix.

**Acceptance criteria:**

- [ ] Users can inspect a selected room without scanning the entire matrix.

## Issue #31 — Add Adjacency Validation

**Goal:** Prevent invalid or broken adjacency records.

**Tasks:**

- [ ] Reject self-relationships.
- [ ] Reject missing room IDs.
- [ ] Remove duplicate pairs.
- [ ] Validate strength values.

**Acceptance criteria:**

- [ ] Invalid adjacency data cannot enter workspace state through UI actions.

## PR 6 Merge Checklist

- [ ] Matrix is generated from rooms and adjacency records.
- [ ] Matrix is symmetrical.
- [ ] Manual edits override AI suggestions.
- [ ] Reasons and source metadata can be reviewed.

---

---
[← Phase index](../README.md) · [Previous: PR 5](./05-editable-room-schedule.md) · [Next: PR 7](./07-code-generated-bubble-diagram.md)
