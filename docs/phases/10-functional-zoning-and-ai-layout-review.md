# PR 10 — Functional Zoning and AI Layout Review

**Status:** ⬜ Planned  
**Suggested tag:** `v0.11.0`  
**Purpose:** Generate functional zones, missing-space suggestions, and preliminary layout review notes.

**Depends on:** PR 8 and PR 9

## Issue #52 — Define the Zoning Schema

**Goal:** Validate AI-generated functional zones.

**Tasks:**

- [ ] Define zone name.
- [ ] Define zone description.
- [ ] Define room-name membership.
- [ ] Add schema limits.

**Acceptance criteria:**

- [ ] Invalid zone structures are rejected.

## Issue #53 — Implement `POST /api/generate-zoning`

**Goal:** Generate functional groups from project rooms and adjacencies.

**Tasks:**

- [ ] Validate the input.
- [ ] Generate a concise set of zones.
- [ ] Return room names in each zone.
- [ ] Include descriptions explaining access or function.

**Acceptance criteria:**

- [ ] The veterinary demo separates public, clinical, staff, and service functions where appropriate.

## Issue #54 — Map Zone Room Names to Room IDs

**Goal:** Store stable zone membership.

**Tasks:**

- [ ] Normalize generated names.
- [ ] Map each name to an existing room ID.
- [ ] Flag unmatched rooms.
- [ ] Prevent duplicate room membership within one zone.

**Acceptance criteria:**

- [ ] Zone records store room IDs.
- [ ] Unknown AI names do not create ghost rooms automatically.

## Issue #55 — Build the Zoning Tab

**Goal:** Display and edit functional zones.

**Tasks:**

- [ ] Display zone cards or sections.
- [ ] Show zone description.
- [ ] Show member rooms.
- [ ] Allow zone renaming.
- [ ] Allow room reassignment.

**Acceptance criteria:**

- [ ] User edits update room zone information or an explicitly defined zone mapping.
- [ ] Diagram zone treatment updates after edits.

## Issue #56 — Define the Layout Review Schema

**Goal:** Validate review notes and missing-space suggestions.

**Tasks:**

- [ ] Define review-note severity.
- [ ] Define message.
- [ ] Define related room names.
- [ ] Define missing-space name and reason.

**Acceptance criteria:**

- [ ] Severity only accepts `info`, `warning`, or `critical`.

## Issue #57 — Implement `POST /api/review-layout`

**Goal:** Review rooms, relationships, zones, and optional node positions.

**Tasks:**

- [ ] Validate project data.
- [ ] Send room and adjacency data.
- [ ] Include node positions only when useful.
- [ ] Request workflow, separation, and missing-space observations.
- [ ] Prohibit claims of approval or code compliance.

**Acceptance criteria:**

- [ ] The demo warns about isolation/public-area conflicts where appropriate.
- [ ] Results are framed as preliminary review notes.

## Issue #58 — Build the Review Tab

**Goal:** Present review notes in a useful, prioritized format.

**Tasks:**

- [ ] Group or sort notes by severity.
- [ ] Display related rooms.
- [ ] Display missing-space suggestions separately.
- [ ] Add actions to dismiss a note.
- [ ] Add an Add Suggested Room action.

**Acceptance criteria:**

- [ ] Adding a missing-space suggestion creates a normal editable room.
- [ ] Dismissed notes do not immediately reappear until regeneration.

## Issue #59 — Add Zoning and Review Regeneration Controls

**Goal:** Re-run AI features after users change the program.

**Tasks:**

- [ ] Add Generate or Regenerate controls.
- [ ] Show loading and error states separately for zoning and review.
- [ ] Preserve manual edits where practical.
- [ ] Warn before replacing edited zone descriptions.

**Acceptance criteria:**

- [ ] Regeneration is deliberate and does not silently erase manual work.

## PR 10 Merge Checklist

- [ ] Functional zones are generated and editable.
- [ ] Review notes are validated and prioritized.
- [ ] Missing rooms can be added to the room schedule.
- [ ] Outputs use preliminary, professional-review language.

---

---
[← Phase index](../README.md) · [Previous: PR 9](./09-ai-adjacency-suggestions.md) · [Next: PR 11](./11-markdown-and-mermaid-export.md)
