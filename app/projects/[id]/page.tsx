import Link from "next/link";
import { Container } from "@/components/container";

type ProjectWorkspacePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectWorkspacePage({
  params,
}: ProjectWorkspacePageProps) {
  const { id } = await params;

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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Project workspace
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
            {id}
          </h1>

          <p className="mt-4 text-slate-600">
            This workspace is a temporary placeholder. Room programming,
            adjacency tools, zoning, and diagrams will be added in later PRs.
          </p>
        </section>
      </Container>
    </main>
  );
}
