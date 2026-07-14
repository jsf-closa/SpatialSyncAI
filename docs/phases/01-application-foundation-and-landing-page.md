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

---
[← Phase index](../README.md) · [Next: PR 2](./02-dashboard-and-project-navigation.md)
