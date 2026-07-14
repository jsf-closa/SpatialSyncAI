# PR 9 — AI Adjacency Suggestions

**Status:** ⬜ Planned  
**Suggested tag:** `v0.10.0`  
**Purpose:** Generate validated room-to-room relationship suggestions and let users accept or override them.

**Depends on:** PR 6 and PR 8

## Issue #46 — Define the Adjacency Generation Schema

**Goal:** Validate the relationship suggestions returned by AI.

**Tasks:**

- [ ] Define from-room name.
- [ ] Define to-room name.
- [ ] Define relationship strength.
- [ ] Define reason.
- [ ] Prevent unsupported strength values.

**Acceptance criteria:**

- [ ] The schema only allows `avoid`, `low`, `medium`, and `high`.

## Issue #47 — Implement `POST /api/generate-adjacencies`

**Goal:** Generate relationship suggestions from the building type and room list.

**Tasks:**

- [ ] Validate the request body.
- [ ] Send only the data required by the model.
- [ ] Return schema-valid suggestions.
- [ ] Exclude self-relationships.
- [ ] Limit duplicate or redundant pairs.

**Acceptance criteria:**

- [ ] The demo veterinary clinic produces reasonable relationship suggestions.

## Issue #48 — Map AI Room Names to Room IDs

**Goal:** Convert model output into stable application references.

**Tasks:**

- [ ] Normalize room names for matching.
- [ ] Map names to current room IDs.
- [ ] Reject or flag unmatched rooms.
- [ ] Prevent duplicate canonical pairs.

**Acceptance criteria:**

- [ ] Stored adjacencies reference IDs, not room names.
- [ ] Unmatched suggestions do not corrupt state.

## Issue #49 — Add Adjacency Suggestion Review UI

**Goal:** Let users inspect suggestions before they become project data.

**Tasks:**

- [ ] Display suggested pair, strength, and reason.
- [ ] Add Accept action per suggestion.
- [ ] Add Reject action per suggestion.
- [ ] Add Accept All action.
- [ ] Identify conflicts with manual relationships.

**Acceptance criteria:**

- [ ] Existing user overrides are not silently replaced.
- [ ] Accepted suggestions appear in the matrix and diagram.

## Issue #50 — Track AI and User Sources

**Goal:** Preserve whether a relationship is an AI suggestion or manual decision.

**Tasks:**

- [ ] Add source metadata to adjacency records.
- [ ] Add overridden flag or timestamp.
- [ ] Display source in relationship details.

**Acceptance criteria:**

- [ ] A user can tell which relationships were manually changed.

## Issue #51 — Add Regenerate and Merge Behavior

**Goal:** Safely regenerate suggestions after room changes.

**Tasks:**

- [ ] Add Generate or Regenerate action.
- [ ] Preserve manual relationships.
- [ ] Show new, changed, and conflicting suggestions.
- [ ] Avoid deleting existing data without confirmation.

**Acceptance criteria:**

- [ ] Regeneration never silently overwrites user decisions.

## PR 9 Merge Checklist

- [ ] AI adjacency results are validated.
- [ ] Room names are mapped to stable IDs.
- [ ] Users approve suggestions before application.
- [ ] Manual overrides remain authoritative.

---

---
[← Phase index](../README.md) · [Previous: PR 8](./08-ai-brief-analyzer.md) · [Next: PR 10](./10-functional-zoning-and-ai-layout-review.md)
