import Link from "next/link";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex flex-col gap-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} SpatialSync AI. Preliminary design
          support only.
        </p>

        <nav aria-label="Footer navigation">
          <div className="flex items-center gap-5">
            <Link href="/" className="transition hover:text-slate-950">
              Home
            </Link>

            <Link
              href="/projects/new"
              className="transition hover:text-slate-950"
            >
              New project
            </Link>
          </div>
        </nav>
      </Container>
    </footer>
  );
}
