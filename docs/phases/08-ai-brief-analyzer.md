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

---
[← Phase index](../README.md) · [Previous: PR 7](./07-code-generated-bubble-diagram.md) · [Next: PR 9](./09-ai-adjacency-suggestions.md)
