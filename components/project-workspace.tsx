"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

type TemporaryProject = {
  id: string;
  name: string;
  brief: string;
  createdAt: string;
};

type ProjectWorkspaceProps = {
  projectId: string;
};

const demoProject: TemporaryProject = {
  id: "demo",
  name: "Community Health Center",
  brief:
    "A representative healthcare project used to preview the SpatialSync AI workspace.",
  createdAt: new Date(0).toISOString(),
};

function subscribeToBrowserState() {
  return () => {};
}

function readStoredProject(projectId: string): TemporaryProject | null {
  const storageKey = `spatialsync:temporary-project:${projectId}`;
  const storedProject = sessionStorage.getItem(storageKey);

  if (!storedProject) {
    return null;
  }

  try {
    const parsedProject = JSON.parse(storedProject) as TemporaryProject;

    if (
      parsedProject.id !== projectId ||
      typeof parsedProject.name !== "string" ||
      typeof parsedProject.brief !== "string" ||
      typeof parsedProject.createdAt !== "string"
    ) {
      return null;
    }

    return parsedProject;
  } catch {
    return null;
  }
}

export function ProjectWorkspace({ projectId }: ProjectWorkspaceProps) {
  const isBrowser = useSyncExternalStore(
    subscribeToBrowserState,
    () => true,
    () => false,
  );

  const [editedBrief, setEditedBrief] = useState("");
  const [isEditingBrief, setIsEditingBrief] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [storageVersion, setStorageVersion] = useState(0);

  let project: TemporaryProject | null = null;

  if (projectId === "demo") {
    project = demoProject;
  } else if (isBrowser) {
    // storageVersion intentionally causes this value to be read again
    // after a successful save.
    void storageVersion;
    project = readStoredProject(projectId);
  }

  function handleStartEditing() {
    if (!project || projectId === "demo") {
      return;
    }

    setEditedBrief(project.brief);
    setSaveMessage("");
    setIsEditingBrief(true);
  }

  function handleSaveBrief() {
    if (!project || projectId === "demo") {
      return;
    }

    const trimmedBrief = editedBrief.trim();

    if (trimmedBrief.length < 20) {
      setSaveMessage("Use at least 20 characters for the project brief.");
      return;
    }

    const updatedProject: TemporaryProject = {
      ...project,
      brief: trimmedBrief,
    };

    sessionStorage.setItem(
      `spatialsync:temporary-project:${projectId}`,
      JSON.stringify(updatedProject),
    );

    setEditedBrief(trimmedBrief);
    setIsEditingBrief(false);
    setSaveMessage("Brief updated.");
    setStorageVersion((current) => current + 1);
  }

  function handleCancelEditing() {
    if (!project) {
      return;
    }

    setEditedBrief(project.brief);
    setIsEditingBrief(false);
    setSaveMessage("");
  }

  if (!isBrowser && projectId !== "demo") {
    return (
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-slate-600">Loading project workspace...</p>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
          Project not found
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
          This temporary project is unavailable.
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-slate-700">
          The project may have been created in another browser tab or removed
          from temporary session storage. Create a new project to continue.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/projects/new"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create a new project
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Return to dashboard
          </Link>
        </div>
      </section>
    );
  }

  const isDemo = projectId === "demo";

  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Project workspace
        </p>

        {isDemo && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            Demo data
          </span>
        )}
      </div>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {project.name}
      </h1>

      <p className="mt-3 text-sm text-slate-500">
        Project ID: <span className="font-mono">{project.id}</span>
      </p>

      <div className="mt-8 border-t border-slate-200 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">
              Architectural brief
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              This brief will guide the room schedule and later analysis.
            </p>
          </div>

          {!isDemo && !isEditingBrief && (
            <button
              type="button"
              onClick={handleStartEditing}
              className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Edit brief
            </button>
          )}
        </div>

        {isEditingBrief ? (
          <div className="mt-5">
            <label htmlFor="workspace-brief" className="sr-only">
              Architectural brief
            </label>

            <textarea
              id="workspace-brief"
              value={editedBrief}
              onChange={(event) => {
                setEditedBrief(event.target.value);
                setSaveMessage("");
              }}
              rows={10}
              className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            {saveMessage && (
              <p className="mt-2 text-sm font-medium text-red-600">
                {saveMessage}
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleSaveBrief}
                className="inline-flex min-h-10 items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Save brief
              </button>

              <button
                type="button"
                onClick={handleCancelEditing}
                className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Cancel editing
              </button>
            </div>
          </div>
        ) : (
          <p className="mt-5 whitespace-pre-wrap leading-7 text-slate-700">
            {project.brief}
          </p>
        )}

        {!isEditingBrief && saveMessage && (
          <p className="mt-3 text-sm font-medium text-emerald-700">
            {saveMessage}
          </p>
        )}
      </div>

      <div className="mt-8 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">
        {["Room Schedule", "Adjacency Matrix", "Bubble Diagram"].map(
          (section) => (
            <div
              key={section}
              className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5"
            >
              <h3 className="font-semibold text-slate-950">{section}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                This workspace section will be implemented in a later PR.
              </p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
