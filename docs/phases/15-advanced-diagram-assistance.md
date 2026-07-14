# Optional PR 15 — Advanced Diagram Assistance

**Status:** 🔵 Optional after MVP  
**Suggested tag:** `v1.2.0`  
**Purpose:** Improve auto-layout and provide user-controlled suggestions based on node positions.

**Depends on:** PR 13

## Issue #88 — Add Dagre Auto-Layout

- [ ] Install and configure Dagre.
- [ ] Convert rooms and relationships into a Dagre graph.
- [ ] Convert calculated positions back into React Flow nodes.
- [ ] Add Run Auto-Layout action.

## Issue #89 — Compare Zone and Dagre Layout Modes

- [ ] Add a layout-mode selector.
- [ ] Preserve user positions separately from generated positions.
- [ ] Document known limitations.

## Issue #90 — Calculate Node Proximity

- [ ] Add distance utility functions.
- [ ] Identify room pairs placed within a configurable threshold.
- [ ] Ignore self and invalid pairs.

## Issue #91 — Generate Drag-Based Adjacency Suggestions

- [ ] Create a suggestion when rooms are moved unusually close.
- [ ] Do not update the matrix automatically.
- [ ] Show the current relationship and proposed relationship.

## Issue #92 — Add Accept or Ignore Controls

- [ ] Accept updates the canonical adjacency record.
- [ ] Ignore dismisses the suggestion.
- [ ] Manual overrides remain marked as user decisions.

## Issue #93 — Add Position-Aware AI Review

- [ ] Include normalized node positions in layout-review requests.
- [ ] Explain that the positions are conceptual, not scaled plans.
- [ ] Avoid geometric or compliance claims unsupported by the diagram.

## Issue #94 — Add Diagram PNG Export Experiment

- [ ] Evaluate client-side React Flow image export.
- [ ] Keep PNG export separate from AI generation.
- [ ] Preserve Markdown and Mermaid as the primary export methods.

## Optional PR 15 Merge Checklist

- [ ] Users explicitly trigger auto-layout.
- [ ] Dragging never silently changes adjacency values.
- [ ] Position-based feedback remains advisory.

---

---
[← Phase index](../README.md) · [Previous: PR 14](./14-supabase-persistence.md)
