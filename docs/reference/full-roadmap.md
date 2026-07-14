# SpatialSync AI — PR and Issue Implementation Roadmap

## Document Purpose

This document converts the SpatialSync AI implementation guide into a GitHub-ready development plan.

- Each **phase is delivered through one pull request (PR)**.
- Each **task is tracked as a GitHub issue**.
- Every PR should be small enough to review, test, and merge independently.
- Each issue should produce a clear, verifiable result.
- AI features must return structured data. Deterministic application code must handle editing, synchronization, rendering, saving, and export.

## MVP Outcome

A user should be able to:

1. Create a project from an architectural brief.
2. Analyze the brief into structured rooms and assumptions.
3. Edit a room schedule.
4. Generate and edit adjacency relationships.
5. View an editable bubble diagram.
6. Generate functional zoning and layout-review notes.
7. Export the project as Markdown and Mermaid.

## Current Baseline Assumption

Based on the existing development commits, the following are treated as the current baseline:

- **PR 1:** Application foundation and landing page — completed.
- **PR 2:** Dashboard interface — completed.
- **PR 3:** Project creation workflow and project route — completed.

Before continuing, verify that the repository contains the expected routes and components. If these changes were committed directly to `master`, the PR entries below can be recreated as historical milestones rather than actual merge requests.

## Status Legend

- ✅ Completed baseline
- 🟡 Next implementation work
- ⬜ Planned
- 🔵 Optional after MVP

---

# Development Rules

## Branch Naming

Use one branch per issue when practical:

```txt
issue-13-domain-types
issue-20-edit-room
issue-34-react-flow-canvas
```

For tightly related issues, one PR branch may contain multiple issue commits:

```txt
pr-05-room-schedule
```

## Commit Format

```txt
feat: add editable room schedule
fix: remove orphaned adjacencies after room deletion
refactor: centralize project workspace state
chore: add React Flow dependency
```

## PR Description Requirements

Every pull request should include:

```md
## Purpose
What this PR adds or changes.

## Issues Closed
Closes #00
Closes #00

## Main Changes
- Change one
- Change two

## Testing
- [ ] Manual test completed
- [ ] Lint passes
- [ ] Build passes

## Screenshots
Add screenshots for visible UI changes.

## Known Limitations
List anything intentionally deferred.
```

## Definition of Done for Every PR

- [ ] All included issues meet their acceptance criteria.
- [ ] No TypeScript errors are introduced.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Loading, empty, and error states are handled where relevant.
- [ ] UI changes are usable on desktop and a narrow browser width.
- [ ] No API keys or secrets are committed.
- [ ] The PR description lists all closed issues.

---

# PR 1 — Application Foundation and Landing Page

**Status:** ✅ Completed baseline  
**Suggested tag:** `v0.2.0`  
**Purpose:** Establish the Next.js application, shared styling, navigation, and component-based landing page.

## Issue #1 — Initialize the Next.js Application

**Goal:** Create a working Next.js App Router project with TypeScript and Tailwind CSS.

**Tasks:**

- [ ] Initialize the project with `create-next-app`.
- [ ] Confirm App Router, TypeScript, ESLint, and Tailwind are enabled.
- [ ] Remove unused starter content.
- [ ] Verify the development server runs.

**Acceptance criteria:**

- [ ] `/` loads without runtime errors.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.

## Issue #2 — Create the Shared Application Shell

**Goal:** Add reusable navigation, page-width, and footer components.

**Tasks:**

- [ ] Create a shared header/navigation component.
- [ ] Create a reusable content-container component.
- [ ] Add a basic footer.
- [ ] Establish spacing and typography conventions.

**Acceptance criteria:**

- [ ] Shared shell components are not duplicated across pages.
- [ ] Navigation works on desktop and narrow screens.

## Issue #3 — Build the Landing Page Sections

**Goal:** Explain the product and direct users into the project workflow.

**Tasks:**

- [ ] Add the hero section.
- [ ] Add the workflow explanation.
- [ ] Add feature cards.
- [ ] Add a clear call-to-action linking to `/projects/new`.
- [ ] Add the preliminary-design disclaimer.

**Acceptance criteria:**

- [ ] The page explains rooms, adjacency, zoning, bubble diagrams, and export.
- [ ] The primary call-to-action opens the new-project page.

## Issue #4 — Refactor Landing Page Into Reusable Components

**Goal:** Keep the landing page maintainable and component-based.

**Tasks:**

- [ ] Extract repeated card and section patterns.
- [ ] Keep page-level content in `app/page.tsx` concise.
- [ ] Remove unnecessary duplicated classes.

**Acceptance criteria:**

- [ ] Landing-page sections are composed from reusable components.
- [ ] No visible regression is introduced.

## PR 1 Merge Checklist

- [ ] Landing page is complete.
- [ ] CTA reaches the project workflow.
- [ ] Shared shell is reusable by later pages.

---

# PR 2 — Dashboard and Project Navigation

**Status:** ✅ Completed baseline  
**Suggested tag:** `v0.3.0`  
**Purpose:** Add a dashboard where users can view, create, and reopen projects.

## Issue #5 — Create the Dashboard Route

**Goal:** Add a dashboard page for project management.

**Tasks:**

- [ ] Create `/dashboard` or the selected projects index route.
- [ ] Add page title, description, and create-project action.
- [ ] Add placeholder project cards.

**Acceptance criteria:**

- [ ] The route loads from the main navigation.
- [ ] The page supports empty and populated states.

## Issue #6 — Build the Project Card Component

**Goal:** Represent saved or sample projects consistently.

**Tasks:**

- [ ] Display project name.
- [ ] Display building type when available.
- [ ] Display last-updated information.
- [ ] Add an action to open the workspace.

**Acceptance criteria:**

- [ ] Project cards are reusable.
- [ ] Opening a project routes to `/projects/[id]`.

## Issue #7 — Add Dashboard Empty State

**Goal:** Guide new users who have no projects.

**Tasks:**

- [ ] Add an empty-state illustration or icon treatment.
- [ ] Explain the first project workflow.
- [ ] Link directly to `/projects/new`.

**Acceptance criteria:**

- [ ] The user always has a clear next action.

## Issue #8 — Add Demo Project Navigation

**Goal:** Make it possible to preview the workspace before persistence is complete.

**Tasks:**

- [ ] Add a demo project entry.
- [ ] Route it to a stable demo ID.
- [ ] Clearly label demo data.

**Acceptance criteria:**

- [ ] A user can reach a representative workspace without creating data first.

## PR 2 Merge Checklist

- [ ] Dashboard shows projects or a useful empty state.
- [ ] Project cards open the correct route.
- [ ] Create-project action works.

---

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

# PR 8 — AI Brief Analyzer

**Status:** ⬜ Planned  
**Suggested tag:** `v0.9.0`  
**Purpose:** Convert a project brief into validated structured programming data.

**Depends on:** PR 5; PR 7 is not required for the API but allows full visualization.

## Issue #39 — Install AI and Schema Dependencies

**Goal:** Add the Vercel AI SDK, OpenAI provider, and Zod.

**Tasks:**

- [ ] Install `ai`.
- [ ] Install `@ai-sdk/openai`.
- [ ] Install `zod`.
- [ ] Document `OPENAI_API_KEY` in `.env.example`.
- [ ] Confirm secrets are excluded from Git.

**Acceptance criteria:**

- [ ] The application builds without exposing the API key to client bundles.

## Issue #40 — Define the Brief Analysis Schema

**Goal:** Enforce predictable AI output.

**Tasks:**

- [ ] Define building type.
- [ ] Define summary.
- [ ] Define room array.
- [ ] Define special considerations.
- [ ] Define assumptions.
- [ ] Add validation limits for names, notes, and area values.

**Acceptance criteria:**

- [ ] Invalid AI output is rejected before it reaches workspace state.

## Issue #41 — Implement `POST /api/analyze-brief`

**Goal:** Analyze a brief using server-side structured generation.

**Tasks:**

- [ ] Validate request body.
- [ ] Reject empty or excessively long briefs.
- [ ] Call the selected OpenAI model through the AI SDK.
- [ ] Return only schema-valid JSON.
- [ ] Return safe error responses.

**Acceptance criteria:**

- [ ] The endpoint returns structured JSON for the demo brief.
- [ ] The endpoint never returns an unstructured paragraph as the main response.

## Issue #42 — Create the Architectural Programming Prompt

**Goal:** Produce useful preliminary recommendations without making unsafe claims.

**Tasks:**

- [ ] Instruct the model to act as an architectural programming assistant.
- [ ] Request realistic preliminary areas in square metres.
- [ ] Request assumptions for missing information.
- [ ] Prohibit code-compliance or professional-approval claims.
- [ ] Keep the prompt in a dedicated module for versioning.

**Acceptance criteria:**

- [ ] Output uses preliminary language.
- [ ] The response includes assumptions when the brief is incomplete.

## Issue #43 — Connect Analyze Brief to Project Creation

**Goal:** Run analysis from the new-project workflow.

**Tasks:**

- [ ] Submit the brief to `/api/analyze-brief`.
- [ ] Show an analyzing state.
- [ ] Prevent duplicate requests.
- [ ] Populate project building type, rooms, assumptions, and considerations.
- [ ] Route to the workspace after success.

**Acceptance criteria:**

- [ ] The room schedule is populated from AI output.
- [ ] A failed request preserves the user’s entered brief.

## Issue #44 — Add Review Step Before Accepting AI Rooms

**Goal:** Keep the user in control of generated program data.

**Tasks:**

- [ ] Show extracted rooms before final acceptance, or clearly mark them as suggestions.
- [ ] Allow room edits and deletion.
- [ ] Add Accept Analysis action.
- [ ] Preserve the original brief.

**Acceptance criteria:**

- [ ] AI output is not presented as professionally approved.
- [ ] Users can correct the schedule before continuing.

## Issue #45 — Add AI Route Error Handling and Retry

**Goal:** Make the analyzer resilient to network, provider, and schema failures.

**Tasks:**

- [ ] Handle missing API key.
- [ ] Handle provider failure.
- [ ] Handle invalid structured output.
- [ ] Add a retry action.
- [ ] Avoid exposing internal error details.

**Acceptance criteria:**

- [ ] The UI provides a recoverable error state.
- [ ] No partial invalid data is inserted into the project.

## PR 8 Merge Checklist

- [ ] Brief analyzer returns validated structured data.
- [ ] Rooms populate the schedule.
- [ ] Original brief remains editable.
- [ ] AI limitations and assumptions are visible.
- [ ] API key remains server-side.

---

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

# PR 12 — Local Persistence and Project Lifecycle

**Status:** ⬜ Planned  
**Suggested tag:** `v0.13.0`  
**Purpose:** Preserve projects across browser refreshes without requiring a database for the MVP.

**Depends on:** PR 11

## Issue #66 — Define the Persistence Interface

**Goal:** Keep storage logic replaceable so Supabase can be added later.

**Tasks:**

- [ ] Define load-project function.
- [ ] Define save-project function.
- [ ] Define list-projects function.
- [ ] Define delete-project function.
- [ ] Define persistence error type.

**Acceptance criteria:**

- [ ] Workspace components do not call `localStorage` directly.

## Issue #67 — Implement Local Storage Repository

**Goal:** Save complete project state in the browser.

**Tasks:**

- [ ] Serialize project state.
- [ ] Namespace storage keys.
- [ ] Save project index metadata.
- [ ] Handle missing or corrupt data.
- [ ] Add a simple data-version field.

**Acceptance criteria:**

- [ ] Projects survive a browser refresh.
- [ ] Corrupt storage produces a recoverable error, not a blank crash.

## Issue #68 — Add Autosave and Saved-State Feedback

**Goal:** Save edits without requiring a manual save after every change.

**Tasks:**

- [ ] Debounce project saves.
- [ ] Show Saving, Saved, and Error states.
- [ ] Save after room, adjacency, zone, review, and position changes.

**Acceptance criteria:**

- [ ] Rapid edits do not trigger excessive writes.
- [ ] Users can see whether recent changes are stored.

## Issue #69 — Connect the Dashboard to Saved Projects

**Goal:** Replace placeholder cards with persisted projects.

**Tasks:**

- [ ] Load project summaries.
- [ ] Sort by updated date.
- [ ] Open selected project.
- [ ] Preserve the demo project separately.

**Acceptance criteria:**

- [ ] Newly created projects appear on the dashboard.
- [ ] Reopened projects contain their latest saved data.

## Issue #70 — Add Project Rename and Delete Actions

**Goal:** Complete basic project management.

**Tasks:**

- [ ] Add rename action.
- [ ] Add delete confirmation.
- [ ] Remove deleted projects from storage and dashboard.
- [ ] Handle deletion of the currently open project.

**Acceptance criteria:**

- [ ] Renames are reflected in exports and dashboard cards.
- [ ] Deleted projects cannot be reopened from stale links without a clear not-found state.

## Issue #71 — Add Unsaved or Storage Failure Recovery

**Goal:** Protect users when browser storage fails.

**Tasks:**

- [ ] Catch quota and access errors.
- [ ] Offer copy/export as a recovery path.
- [ ] Preserve in-memory state when saving fails.

**Acceptance criteria:**

- [ ] A storage error does not erase the active project.

## PR 12 Merge Checklist

- [ ] Projects survive refreshes.
- [ ] Dashboard lists saved projects.
- [ ] Autosave state is visible.
- [ ] Storage implementation can later be replaced by Supabase.

---

# PR 13 — MVP Quality, Documentation, and Deployment

**Status:** ⬜ Planned  
**Suggested tag:** `v1.0.0`  
**Purpose:** Prepare a stable, understandable, and demonstrable MVP.

**Depends on:** PR 12

## Issue #72 — Add the Guided Demo Brief

**Goal:** Make the main workflow easy to demonstrate.

**Tasks:**

- [ ] Add the veterinary-clinic sample brief.
- [ ] Add Use Sample Brief action.
- [ ] Ensure the resulting output exercises every tab.

**Acceptance criteria:**

- [ ] A new user can populate the form with one click.

## Issue #73 — Standardize Loading, Empty, and Error States

**Goal:** Remove unfinished-feeling states across the app.

**Tasks:**

- [ ] Audit every route and tab.
- [ ] Add missing loading indicators.
- [ ] Add empty-state next actions.
- [ ] Add recoverable error messages.

**Acceptance criteria:**

- [ ] No section displays a blank panel during normal use.

## Issue #74 — Add Safety and Accuracy Disclaimers

**Goal:** Clearly define the app as a preliminary design aid.

**Tasks:**

- [ ] Add the main disclaimer to the workspace.
- [ ] Include the disclaimer in exports.
- [ ] Review AI prompts for prohibited approval claims.
- [ ] Review UI copy for terms such as “approved” or “guaranteed.”

**Acceptance criteria:**

- [ ] The app does not claim professional certification or code compliance.

## Issue #75 — Add Responsive and Accessibility Improvements

**Goal:** Make the MVP usable on common laptop and narrow-browser layouts.

**Tasks:**

- [ ] Audit keyboard navigation.
- [ ] Add visible focus states.
- [ ] Add labels for controls.
- [ ] Check color contrast.
- [ ] Make tables horizontally scrollable where needed.
- [ ] Make dialog focus behavior usable.

**Acceptance criteria:**

- [ ] Core workflow can be completed using keyboard and mouse.
- [ ] Narrow layouts do not hide critical actions.

## Issue #76 — Add Application Metadata and Branding

**Goal:** Present SpatialSync AI consistently.

**Tasks:**

- [ ] Add page titles and descriptions.
- [ ] Add favicon or application icon.
- [ ] Add social-preview metadata if desired.
- [ ] Confirm naming is consistent across UI and export.

**Acceptance criteria:**

- [ ] Browser title and application identity are correct on main routes.

## Issue #77 — Write the Project README

**Goal:** Explain the product, architecture, setup, and limitations.

**Tasks:**

- [ ] Add product summary.
- [ ] Add feature list.
- [ ] Add tech stack.
- [ ] Explain structured AI output and deterministic diagrams.
- [ ] Add local setup instructions.
- [ ] Add environment-variable instructions.
- [ ] Add architecture overview.
- [ ] Add future improvements and non-goals.

**Acceptance criteria:**

- [ ] A new developer can install and run the app from the README.

## Issue #78 — Add Automated Quality Checks

**Goal:** Catch basic regressions before merge.

**Tasks:**

- [ ] Add unit tests for adjacency pair utilities.
- [ ] Add unit tests for Mermaid generation.
- [ ] Add unit tests for Markdown generation.
- [ ] Add schema tests for API output contracts.
- [ ] Add GitHub Actions for lint and build if repository hosting permits.

**Acceptance criteria:**

- [ ] Tests cover the highest-risk deterministic utilities.
- [ ] CI fails on lint or build errors.

## Issue #79 — Deploy the MVP to Vercel

**Goal:** Produce a shareable live application.

**Tasks:**

- [ ] Connect the repository to Vercel.
- [ ] Configure environment variables securely.
- [ ] Verify production API routes.
- [ ] Test the complete workflow in production.
- [ ] Add the live URL to the README.

**Acceptance criteria:**

- [ ] The deployed app completes the demo workflow.
- [ ] No secret appears in source or browser output.

## Issue #80 — Prepare Demo Assets

**Goal:** Complete the proof-of-work deliverables.

**Tasks:**

- [ ] Capture landing-page screenshot.
- [ ] Capture room-schedule screenshot.
- [ ] Capture matrix screenshot.
- [ ] Capture bubble-diagram screenshot.
- [ ] Record a two- to three-minute demo video.
- [ ] Prepare a concise architecture explanation.

**Acceptance criteria:**

- [ ] Demo shows brief analysis, schedule, matrix, diagram, zoning/review, and export.

## PR 13 Merge Checklist

- [ ] Full demo workflow works in production.
- [ ] README is complete.
- [ ] Safety language is visible.
- [ ] Core deterministic utilities are tested.
- [ ] Live link, screenshots, and demo video are ready.

---

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

# PR Dependency Summary

```txt
PR 1 Foundation
  ↓
PR 2 Dashboard
  ↓
PR 3 Project Creation
  ↓
PR 4 Domain Models and Workspace State
  ↓
PR 5 Room Schedule
  ↓
PR 6 Adjacency Matrix
  ↓
PR 7 Bubble Diagram
  ↓
PR 8 AI Brief Analyzer
  ↓
PR 9 AI Adjacency Suggestions
  ↓
PR 10 Zoning and Layout Review
  ↓
PR 11 Export
  ↓
PR 12 Local Persistence
  ↓
PR 13 MVP Quality and Deployment
  ├── Optional PR 14 Supabase Persistence
  └── Optional PR 15 Advanced Diagram Assistance
```

PR 7 and PR 8 may be developed in parallel after the room schedule exists, but merging them in the listed order makes testing simpler.

---

# Suggested GitHub Labels

```txt
area:frontend
area:backend
area:ai
area:data
area:diagram
area:export
area:persistence
area:documentation
area:testing
priority:high
priority:medium
priority:low
status:blocked
status:ready
status:in-review
type:feature
type:bug
type:refactor
type:chore
mvp
post-mvp
```

# Suggested Milestones

## Milestone 1 — Static Product Foundation

Includes PR 1 through PR 4.

## Milestone 2 — Deterministic Programming Tools

Includes PR 5 through PR 7.

## Milestone 3 — AI-Assisted Workflow

Includes PR 8 through PR 10.

## Milestone 4 — Exportable and Persistent MVP

Includes PR 11 and PR 12.

## Milestone 5 — Public MVP Release

Includes PR 13.

## Milestone 6 — Post-MVP Enhancements

Includes optional PR 14 and PR 15.

---

# MVP Acceptance Test

The MVP is complete when this full scenario succeeds:

1. Open the deployed SpatialSync AI app.
2. Start a new project.
3. Use or paste the veterinary-clinic brief.
4. Run AI brief analysis.
5. Review and edit the generated rooms.
6. Generate adjacency suggestions.
7. Accept selected suggestions.
8. Edit at least one matrix relationship manually.
9. Open the bubble diagram and confirm the matching edge updates.
10. Drag a room and confirm its position is preserved.
11. Generate zoning suggestions.
12. Generate layout-review notes.
13. Add one missing-space suggestion to the room schedule.
14. Copy Mermaid output.
15. Download the Markdown report.
16. Refresh the browser and reopen the saved project.
17. Confirm the app displays the preliminary-design disclaimer.

---

# Explicit MVP Non-Goals

Do not add these to the main roadmap unless the project lead approves a scope change:

- AI image generation for diagrams
- CAD or Revit integration
- OCR or PDF brief parsing
- full bidirectional geometry-to-matrix synchronization
- advanced force-directed physics
- multi-user collaboration
- payments
- authentication
- Python or FastAPI backend
- automatic code-compliance certification
- professional architectural approval claims
- full PDF report export

The product principle remains:

> AI interprets and recommends structured data. The application owns the data model, user edits, synchronization, diagrams, persistence, and export.
