# Optional PR 14 — Supabase Persistence

**Status:** 🔵 Optional after MVP  
**Suggested tag:** `v1.1.0`  
**Purpose:** Replace or supplement browser-only storage with a real PostgreSQL-backed project repository.

**Depends on:** PR 13

## Issue #81 — Create Supabase Project and Environment Configuration

- [ ] Create the Supabase project.
- [ ] Add server and client environment variables appropriately.
- [ ] Add `.env.example` entries without real secrets.
- [ ] Verify development and production configurations.

## Issue #82 — Create Database Tables and Constraints

- [ ] Create `projects` table.
- [ ] Create `rooms` table.
- [ ] Create `adjacencies` table.
- [ ] Create `zones` and zone-membership structure if needed.
- [ ] Create `review_notes` table.
- [ ] Add cascade behavior and relationship constraints.

## Issue #83 — Implement the Supabase Project Repository

- [ ] Implement list, load, create, update, and delete operations.
- [ ] Keep repository methods compatible with the persistence interface from Issue #66.
- [ ] Map database records to domain types.

## Issue #84 — Persist Room and Adjacency Changes

- [ ] Upsert rooms.
- [ ] Delete removed rooms.
- [ ] Upsert canonical adjacency pairs.
- [ ] Persist node positions.

## Issue #85 — Persist Zones and Review Notes

- [ ] Save zones and membership.
- [ ] Save review notes and dismissal state.
- [ ] Preserve user edits and AI source metadata.

## Issue #86 — Add Data Migration From Local Storage

- [ ] Detect local-only projects.
- [ ] Offer migration.
- [ ] Prevent duplicate migration.
- [ ] Preserve a local backup until success.

## Issue #87 — Add Database Error and Offline Handling

- [ ] Show sync failures.
- [ ] Keep edits in memory during temporary failures.
- [ ] Add a retry path.
- [ ] Avoid claiming data is saved before confirmation.

## Optional PR 14 Merge Checklist

- [ ] Existing project workflows work with Supabase.
- [ ] Storage implementation remains isolated behind the repository interface.
- [ ] Project data is not lost during migration.

---

---
[← Phase index](../README.md) · [Previous: PR 13](./13-mvp-quality-documentation-and-deployment.md) · [Next: PR 15](./15-advanced-diagram-assistance.md)
