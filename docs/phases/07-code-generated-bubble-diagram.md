# PR 7 — Code-Generated Bubble Diagram

**Status:** ⬜ Planned  
**Suggested tag:** `v0.8.0`  
**Purpose:** Render rooms and relationships as an editable React Flow diagram without AI-generated images.

**Depends on:** PR 6

## Issue #32 — Install and Configure React Flow

**Goal:** Add the interactive diagram canvas.

**Tasks:**

- [ ] Install `@xyflow/react`.
- [ ] Import required styles.
- [ ] Add the diagram canvas to the Bubble Diagram tab.
- [ ] Configure controls, background, and fit view.

**Acceptance criteria:**

- [ ] The canvas renders without hydration or client-component errors.
- [ ] Pan and zoom controls work.

## Issue #33 — Convert Rooms Into Diagram Nodes

**Goal:** Generate one node for every room.

**Tasks:**

- [ ] Map room IDs directly to node IDs.
- [ ] Display room name, area, zone, and department.
- [ ] Apply minimum and maximum node dimensions.
- [ ] Scale node size using room area.

**Acceptance criteria:**

- [ ] Every room produces exactly one node.
- [ ] Room edits update node content.

## Issue #34 — Create the Custom Room Node

**Goal:** Build a bubble-style node suited to architectural programming.

**Tasks:**

- [ ] Add source and target handles.
- [ ] Add readable room metadata.
- [ ] Add zone treatment.
- [ ] Add selected and focused states.

**Acceptance criteria:**

- [ ] Nodes remain readable at normal zoom.
- [ ] Connections can attach reliably.

## Issue #35 — Convert Adjacencies Into Diagram Edges

**Goal:** Render room relationships as graph connections.

**Tasks:**

- [ ] Map each stored adjacency to one edge.
- [ ] Use room IDs as source and target.
- [ ] Display the strength label.
- [ ] Set edge thickness or style by strength.
- [ ] Provide an optional reason tooltip or detail panel.

**Acceptance criteria:**

- [ ] Matrix edits update the related diagram edge.
- [ ] Deleted relationships disappear from the diagram.

## Issue #36 — Implement Zone-Based Initial Layout

**Goal:** Position nodes predictably without over-engineering graph physics.

**Tasks:**

- [ ] Group rooms by zone.
- [ ] Define a stable zone order.
- [ ] Place zones in columns or sections.
- [ ] Place rooms within each zone using a grid.
- [ ] Support unknown or custom zones.

**Acceptance criteria:**

- [ ] Nodes do not initially overlap.
- [ ] Re-running the layout produces predictable results.

## Issue #37 — Save Manual Node Positions

**Goal:** Preserve user adjustments to the bubble diagram.

**Tasks:**

- [ ] Update room position when dragging ends.
- [ ] Store positions in shared workspace state.
- [ ] Reuse saved positions when returning to the tab.
- [ ] Add a Reset Layout action.

**Acceptance criteria:**

- [ ] Dragged nodes remain in place after tab changes.
- [ ] Reset Layout restores the zone-based arrangement.

## Issue #38 — Add Diagram Empty, Loading, and Error States

**Goal:** Handle projects that do not yet have enough data for a diagram.

**Tasks:**

- [ ] Show an empty state when there are no rooms.
- [ ] Show a relationship hint when there are rooms but no adjacencies.
- [ ] Prevent invalid edges from crashing React Flow.

**Acceptance criteria:**

- [ ] The tab remains usable at every project stage.

## PR 7 Merge Checklist

- [ ] Diagram is generated from deterministic project data.
- [ ] Room area affects bubble size.
- [ ] Adjacency strength affects edge appearance.
- [ ] Manual positions are preserved.
- [ ] No AI image generation is used.

---

---
[← Phase index](../README.md) · [Previous: PR 6](./06-editable-adjacency-matrix.md) · [Next: PR 8](./08-ai-brief-analyzer.md)
