# PR 3 — Project Creation Workflow

**Status:** ✅ Completed baseline  
**Suggested tag:** `v0.4.0`  
**Purpose:** Let users enter a project name and architectural brief, then open the project workspace.

## Issue #9 — Build the New Project Form

**Goal:** Capture the minimum project information.

**Tasks:**

- [ ] Add a project-name field.
- [ ] Add a project-brief textarea.
- [ ] Add field labels and helper text.
- [ ] Add a submit action.

**Acceptance criteria:**

- [ ] Both fields are keyboard accessible.
- [ ] The form prevents an empty submission.

## Issue #10 — Add Form Validation and Feedback

**Goal:** Give clear feedback when project data is invalid.

**Tasks:**

- [ ] Validate required fields.
- [ ] Set reasonable minimum and maximum lengths.
- [ ] Show inline validation messages.
- [ ] Disable duplicate submission while processing.

**Acceptance criteria:**

- [ ] Invalid input does not create a project.
- [ ] Error messages explain how to correct the input.

## Issue #11 — Create the Dynamic Project Workspace Route

**Goal:** Add the main project page at `/projects/[id]`.

**Tasks:**

- [ ] Create the dynamic route.
- [ ] Load a placeholder project using the route ID.
- [ ] Add the workspace header.
- [ ] Add initial workspace sections or tabs.

**Acceptance criteria:**

- [ ] A valid ID loads the workspace.
- [ ] An invalid or missing project has a clear fallback.

## Issue #12 — Connect Project Creation to the Workspace

**Goal:** Route a successful project creation into its workspace.

**Tasks:**

- [ ] Generate a temporary project ID.
- [ ] Preserve the project name and brief in temporary state.
- [ ] Navigate to `/projects/[id]` after submission.

**Acceptance criteria:**

- [ ] Submitted project information appears in the workspace.
- [ ] A user can return to edit the brief.

## PR 3 Merge Checklist

- [ ] Project form validates input.
- [ ] Successful submission opens a project workspace.
- [ ] Workspace contains the submitted brief.

---

---
[← Phase index](../README.md) · [Previous: PR 2](./02-dashboard-and-project-navigation.md) · [Next: PR 4](./04-domain-models-and-workspace-state.md)
