import Link from "next/link";
import { Container } from "@/components/container";

export function CtaSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-2xl bg-blue-600 px-6 py-12 text-center shadow-lg sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Start planning
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Create a clearer foundation for your next architectural project.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Begin with the project brief, define the room program, and organize
            the functional relationships that will guide early design work.
          </p>

          <Link
            href="/projects/new"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Create a new project
          </Link>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="text-sm leading-6 text-amber-900">
            <strong>Preliminary-design disclaimer:</strong> SpatialSync AI is a
            planning-support tool. Its outputs are intended for early design
            exploration and must be reviewed by qualified architects, engineers,
            consultants, and relevant authorities before use in detailed design,
            permitting, construction, or regulatory submissions.
          </p>
        </div>
      </Container>
    </section>
  );
}
