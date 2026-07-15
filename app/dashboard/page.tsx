import Link from "next/link";
import { Container } from "@/components/container";
import { DashboardEmptyState } from "@/components/dashboard-empty-state";
import { ProjectCard } from "@/components/project-card";

const placeholderProjects = [
  {
    id: "demo",
    name: "Community Health Center",
    buildingType: "Healthcare",
    updatedAt: "Demo project",
    isDemo: true,
  },
  {
    id: "mixed-use-study",
    name: "Mixed-Use Development Study",
    buildingType: "Mixed-use",
    updatedAt: "Updated recently",
  },
];

export default function DashboardPage() {
  const projects = placeholderProjects;

  return (
    <main className="bg-slate-50">
      <Container className="py-12 sm:py-16">
        <section>
          <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Project dashboard
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Your projects
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Create, review, and reopen architectural planning projects from
                one workspace.
              </p>
            </div>

            <Link
              href="/projects/new"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Create new project
            </Link>
          </div>

          {projects.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  buildingType={project.buildingType}
                  updatedAt={project.updatedAt}
                  isDemo={project.isDemo}
                />
              ))}
            </div>
          ) : (
            <DashboardEmptyState />
          )}
        </section>
      </Container>
    </main>
  );
}
