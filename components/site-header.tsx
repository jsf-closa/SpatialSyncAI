import Link from "next/link";
import { Container } from "@/components/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-slate-950"
        >
          SpatialSync AI
        </Link>

        <nav aria-label="Primary navigation">
          <div className="flex items-center gap-3 sm:gap-6">
            <Link
              href="#workflow"
              className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-950 sm:inline"
            >
              Workflow
            </Link>

            <Link
              href="#features"
              className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-950 sm:inline"
            >
              Features
            </Link>

            <Link
              href="/projects/new"
              className="inline-flex min-h-10 items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Start project
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
