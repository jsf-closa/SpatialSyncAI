# PR 11 — Markdown and Mermaid Export

**Status:** ⬜ Planned  
**Suggested tag:** `v0.12.0`  
**Purpose:** Convert current project state into portable documentation without relying on image generation.

**Depends on:** PR 10

## Issue #60 — Build the Mermaid Generator

**Goal:** Generate valid Mermaid flowchart text from zones, rooms, and adjacencies.

**Tasks:**

- [ ] Sanitize room IDs for Mermaid syntax.
- [ ] Generate one node per room.
- [ ] Add room area to labels.
- [ ] Group rooms by zone using subgraphs.
- [ ] Generate relationship edges and strength labels.

**Acceptance criteria:**

- [ ] The generated output renders in a Mermaid-compatible editor.
- [ ] Custom room names do not break syntax.

## Issue #61 — Build the Markdown Report Generator

**Goal:** Generate a complete programming report from workspace state.

**Tasks:**

- [ ] Include project name and building type.
- [ ] Include the original brief.
- [ ] Include assumptions and special considerations.
- [ ] Include the room schedule table.
- [ ] Include key adjacencies and reasons.
- [ ] Include zoning summary.
- [ ] Include review notes and missing-space suggestions.
- [ ] Include Mermaid code.
- [ ] Include the professional-review disclaimer.

**Acceptance criteria:**

- [ ] Export reflects current user edits.
- [ ] Empty sections are omitted or clearly marked.

## Issue #62 — Build the Export Tab Preview

**Goal:** Let users inspect output before copying or downloading it.

**Tasks:**

- [ ] Add Markdown preview.
- [ ] Add Mermaid source preview.
- [ ] Add refresh behavior tied to current state.
- [ ] Add clear formatting and code blocks.

**Acceptance criteria:**

- [ ] Preview changes after room, matrix, zoning, or review edits.

## Issue #63 — Add Copy Markdown Action

**Goal:** Copy the complete report to the clipboard.

**Tasks:**

- [ ] Use the Clipboard API.
- [ ] Show success feedback.
- [ ] Show fallback error feedback.

**Acceptance criteria:**

- [ ] Copied content matches the preview exactly.

## Issue #64 — Add Copy Mermaid Action

**Goal:** Copy Mermaid source independently.

**Tasks:**

- [ ] Add a dedicated copy action.
- [ ] Show success feedback.
- [ ] Preserve fenced-code formatting only where appropriate.

**Acceptance criteria:**

- [ ] Copied source renders when pasted into a Mermaid editor.

## Issue #65 — Add Markdown File Download

**Goal:** Download the project as a `.md` file.

**Tasks:**

- [ ] Generate a safe filename from the project name.
- [ ] Create a client-side Blob.
- [ ] Trigger download.
- [ ] Use UTF-8 content.

**Acceptance criteria:**

- [ ] The downloaded file opens correctly in a text editor.
- [ ] The filename is valid on Windows.

## PR 11 Merge Checklist

- [ ] Markdown report is complete and current.
- [ ] Mermaid source is syntactically safe.
- [ ] Copy actions provide feedback.
- [ ] `.md` download works.

---

---
[← Phase index](../README.md) · [Previous: PR 10](./10-functional-zoning-and-ai-layout-review.md) · [Next: PR 12](./12-local-persistence-and-project-lifecycle.md)
