import Link from "next/link";

export function DashboardEmptyState() {
  return (
    <section className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
      <div
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl font-bold text-blue-600"
        aria-hidden="true"
      >
        +
      </div>

      <h2 className="mt-6 text-2xl font-semibold text-slate-950">
        Create your first project
      </h2>

      <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-600">
        Start with a project brief, define the building type, and continue into
        the architectural programming workspace.
      </p>

      <Link
        href="/projects/new"
        className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      >
        Start a new project
      </Link>
    </section>
  );
}
