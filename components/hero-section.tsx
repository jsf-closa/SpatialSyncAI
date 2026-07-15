import Link from "next/link";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-white">
      <Container className="grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Architectural planning assistant
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            Turn project requirements into an organized early design workflow.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            SpatialSync AI helps you organize rooms, define adjacency
            requirements, study zoning relationships, generate bubble diagrams,
            and prepare preliminary planning outputs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects/new"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Start a project
            </Link>

            <a
              href="#workflow"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              See how it works
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Built for architects, students, planners, and early-stage design
            teams.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 shadow-xl sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-5">
            <div>
              <p className="text-sm font-semibold text-white">
                Community Health Center
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Preliminary programming workspace
              </p>
            </div>

            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              In progress
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Rooms
              </p>
              <p className="mt-2 text-3xl font-bold text-white">28</p>
              <p className="mt-1 text-sm text-slate-400">
                Program spaces defined
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Relationships
              </p>
              <p className="mt-2 text-3xl font-bold text-white">46</p>
              <p className="mt-1 text-sm text-slate-400">
                Adjacencies recorded
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Current workflow
            </p>

            <div className="mt-4 space-y-3">
              {[
                "Project brief completed",
                "Room program organized",
                "Adjacency matrix reviewed",
                "Bubble diagram ready",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-lg bg-slate-950 px-4 py-3"
                >
                  <span className="text-sm text-slate-300">{item}</span>
                  <span className="text-xs font-semibold text-blue-300">
                    {index < 3 ? "Done" : "Next"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
