import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectWorkspace } from "@/components/project-workspace";

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
          className="text-sm font-semibold text-blue-700 transition hover:text-blue-800"
        >
          ← Back to dashboard
        </Link>

        <ProjectWorkspace projectId={id} />
      </Container>
    </main>
  );
}
