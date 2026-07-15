"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const PROJECT_NAME_MIN_LENGTH = 3;
const PROJECT_NAME_MAX_LENGTH = 80;
const PROJECT_BRIEF_MIN_LENGTH = 20;
const PROJECT_BRIEF_MAX_LENGTH = 4000;

type FormErrors = {
  projectName?: string;
  projectBrief?: string;
};

function createProjectId(projectName: string) {
  const slug = projectName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);

  return `${slug || "project"}-${Date.now()}`;
}

export function NewProjectForm() {
  const router = useRouter();

  const [projectName, setProjectName] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateForm() {
    const nextErrors: FormErrors = {};
    const trimmedName = projectName.trim();
    const trimmedBrief = projectBrief.trim();

    if (!trimmedName) {
      nextErrors.projectName = "Enter a project name.";
    } else if (trimmedName.length < PROJECT_NAME_MIN_LENGTH) {
      nextErrors.projectName = `Use at least ${PROJECT_NAME_MIN_LENGTH} characters.`;
    } else if (trimmedName.length > PROJECT_NAME_MAX_LENGTH) {
      nextErrors.projectName = `Use no more than ${PROJECT_NAME_MAX_LENGTH} characters.`;
    }

    if (!trimmedBrief) {
      nextErrors.projectBrief = "Enter a project brief.";
    } else if (trimmedBrief.length < PROJECT_BRIEF_MIN_LENGTH) {
      nextErrors.projectBrief = `Use at least ${PROJECT_BRIEF_MIN_LENGTH} characters.`;
    } else if (trimmedBrief.length > PROJECT_BRIEF_MAX_LENGTH) {
      nextErrors.projectBrief = `Use no more than ${PROJECT_BRIEF_MAX_LENGTH} characters.`;
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting || !validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const id = createProjectId(projectName);

    const temporaryProject = {
      id,
      name: projectName.trim(),
      brief: projectBrief.trim(),
      createdAt: new Date().toISOString(),
    };

    sessionStorage.setItem(
      `spatialsync:temporary-project:${id}`,
      JSON.stringify(temporaryProject),
    );

    router.push(`/projects/${id}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div>
        <label
          htmlFor="project-name"
          className="block text-sm font-semibold text-slate-950"
        >
          Project name
        </label>

        <p id="project-name-help" className="mt-1 text-sm text-slate-500">
          Use a short, recognizable name for the project.
        </p>

        <input
          id="project-name"
          name="projectName"
          type="text"
          value={projectName}
          onChange={(event) => {
            setProjectName(event.target.value);

            if (errors.projectName) {
              setErrors((current) => ({
                ...current,
                projectName: undefined,
              }));
            }
          }}
          minLength={PROJECT_NAME_MIN_LENGTH}
          maxLength={PROJECT_NAME_MAX_LENGTH}
          aria-describedby={
            errors.projectName
              ? "project-name-help project-name-error"
              : "project-name-help"
          }
          aria-invalid={Boolean(errors.projectName)}
          className="mt-3 min-h-12 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          placeholder="Example: Community Health Center"
        />

        {errors.projectName && (
          <p
            id="project-name-error"
            className="mt-2 text-sm font-medium text-red-600"
          >
            {errors.projectName}
          </p>
        )}
      </div>

      <div className="mt-6">
        <label
          htmlFor="project-brief"
          className="block text-sm font-semibold text-slate-950"
        >
          Architectural brief
        </label>

        <p id="project-brief-help" className="mt-1 text-sm text-slate-500">
          Describe the users, spaces, goals, constraints, and important
          relationships.
        </p>

        <textarea
          id="project-brief"
          name="projectBrief"
          value={projectBrief}
          onChange={(event) => {
            setProjectBrief(event.target.value);

            if (errors.projectBrief) {
              setErrors((current) => ({
                ...current,
                projectBrief: undefined,
              }));
            }
          }}
          minLength={PROJECT_BRIEF_MIN_LENGTH}
          maxLength={PROJECT_BRIEF_MAX_LENGTH}
          rows={10}
          aria-describedby={
            errors.projectBrief
              ? "project-brief-help project-brief-error"
              : "project-brief-help"
          }
          aria-invalid={Boolean(errors.projectBrief)}
          className="mt-3 w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          placeholder="Describe the proposed project, expected users, required spaces, circulation needs, and any known constraints."
        />

        <div className="mt-2 flex items-start justify-between gap-4">
          <div>
            {errors.projectBrief && (
              <p
                id="project-brief-error"
                className="text-sm font-medium text-red-600"
              >
                {errors.projectBrief}
              </p>
            )}
          </div>

          <p className="text-xs text-slate-500">
            {projectBrief.length}/{PROJECT_BRIEF_MAX_LENGTH}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isSubmitting ? "Creating project..." : "Create project"}
        </button>
      </div>
    </form>
  );
}
