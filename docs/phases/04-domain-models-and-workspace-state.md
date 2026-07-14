# PR 4 — Domain Models and Workspace State

**Status:** 🟡 Next implementation work  
**Suggested tag:** `v0.5.0`  
**Purpose:** Establish the source-of-truth data model before adding interactive architectural outputs.

**Depends on:** PR 3

## Issue #13 — Define Core TypeScript Domain Types

**Goal:** Create shared types for projects, rooms, adjacencies, zones, and review notes.

**Tasks:**

- [ ] Create `Project` type.
- [ ] Create `Room` type.
- [ ] Create `Adjacency` type.
- [ ] Create `Zone` type.
- [ ] Create `ReviewNote` type.
- [ ] Export shared union types for priority, adjacency strength, and severity.

**Acceptance criteria:**

- [ ] UI components and utility functions import types from one shared module.
- [ ] No duplicate room or adjacency interfaces remain.

## Issue #14 — Create Workspace State Shape

**Goal:** Define one predictable state object for the complete project workspace.

**Tasks:**

- [ ] Store project metadata.
- [ ] Store rooms.
- [ ] Store adjacencies.
- [ ] Store zones.
- [ ] Store review notes.
- [ ] Store AI assumptions and special considerations.

**Acceptance criteria:**

- [ ] The workspace can be represented by one serializable object.
- [ ] State can later be saved to local storage or Supabase without restructuring.

## Issue #15 — Implement Workspace State Provider

**Goal:** Make workspace data available to all tabs without prop drilling.

**Tasks:**

- [ ] Create a context/provider or reducer-based state module.
- [ ] Add actions for room, adjacency, zone, and review updates.
- [ ] Add typed selector hooks when useful.
- [ ] Keep state mutations immutable.

**Acceptance criteria:**

- [ ] Multiple workspace tabs can read and update the same data.
- [ ] Components do not maintain conflicting copies of project data.

## Issue #16 — Add Demo Project Fixture

**Goal:** Provide realistic data for interface development and testing.

**Tasks:**

- [ ] Add the veterinary-clinic demo brief.
- [ ] Add representative rooms.
- [ ] Add sample adjacencies.
- [ ] Add sample zones and review notes.

**Acceptance criteria:**

- [ ] The fixture can populate all planned workspace tabs.
- [ ] Demo data is isolated from production logic.

## Issue #17 — Build Workspace Tab Navigation

**Goal:** Provide stable navigation across the complete programming workflow.

**Tasks:**

- [ ] Add Brief tab.
- [ ] Add Room Schedule tab.
- [ ] Add Adjacency Matrix tab.
- [ ] Add Bubble Diagram tab.
- [ ] Add Zoning tab.
- [ ] Add Review tab.
- [ ] Add Export tab.

**Acceptance criteria:**

- [ ] Switching tabs does not lose workspace state.
- [ ] The active tab is visually clear.
- [ ] Tab controls are keyboard accessible.

## Issue #18 — Add Shared Workspace Status Components

**Goal:** Standardize loading, error, empty, and unsaved-state feedback.

**Tasks:**

- [ ] Create loading indicator component.
- [ ] Create empty-state component.
- [ ] Create error-message component.
- [ ] Add a reusable status badge.

**Acceptance criteria:**

- [ ] Later features can reuse the components without duplicating markup.

## PR 4 Merge Checklist

- [ ] All domain types are centralized.
- [ ] Workspace state survives tab changes.
- [ ] Demo fixture loads every section.
- [ ] No AI or persistence dependency is required yet.

---

---
[← Phase index](../README.md) · [Previous: PR 3](./03-project-creation-workflow.md) · [Next: PR 5](./05-editable-room-schedule.md)
