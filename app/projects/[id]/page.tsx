import Link from "next/link";
import { Container } from "@/components/container";

type ProjectWorkspacePageProps = {
  params: Promise<{
    id: string;
  }>;
};

const demoProject = {
  name: "Community Health Center",
  buildingType: "Healthcare",
  rooms: 28,
  relationships: 46,
  status: "Preliminary planning",
};

export default async function ProjectWorkspacePage({
  params,
}: ProjectWorkspacePageProps) {
  const { id } = await params;
  const isDemo = id === "demo";

  return (
    <main className="bg-slate-50">
      <Container className="py-12 sm:py-16">
        <Link
          href="/dashboard"
          className="text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          ← Back to dashboard
        </Link>

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

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
            {isDemo ? demoProject.name : id}
          </h1>

          <p className="mt-3 text-slate-600">
            {isDemo
              ? `${demoProject.buildingType} project prepared for workspace preview.`
              : "This workspace is a temporary placeholder for project data."}
          </p>

          {isDemo ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Rooms</p>
                <p className="mt-2 text-2xl font-bold text-slate-950">
                  {demoProject.rooms}
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Relationships</p>
                <p className="mt-2 text-2xl font-bold text-slate-950">
                  {demoProject.relationships}
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Status</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {demoProject.status}
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-8 rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-500">
              Room programming, adjacency tools, zoning, and diagrams will be
              added in later PRs.
            </div>
          )}
        </section>
      </Container>
    </main>
  );
}
