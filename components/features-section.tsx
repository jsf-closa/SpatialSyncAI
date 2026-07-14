import { Container } from "@/components/container";

const features = [
  {
    title: "Room programming",
    description:
      "Build structured room lists with target areas, capacities, departments, and planning notes.",
    icon: "01",
  },
  {
    title: "Adjacency planning",
    description:
      "Record desired relationships between rooms and identify critical functional connections.",
    icon: "02",
  },
  {
    title: "Functional zoning",
    description:
      "Group spaces into public, private, service, clinical, residential, or custom zones.",
    icon: "03",
  },
  {
    title: "Bubble diagrams",
    description:
      "Translate room and adjacency data into early relationship diagrams for design exploration.",
    icon: "04",
  },
  {
    title: "Design review",
    description:
      "Review incomplete room data, conflicting requirements, and important planning decisions.",
    icon: "05",
  },
  {
    title: "Export-ready outputs",
    description:
      "Prepare structured project information for reports, presentations, spreadsheets, and later design work.",
    icon: "06",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="scroll-mt-20 border-y border-slate-200 bg-white py-20 sm:py-24"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Core capabilities
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Keep early design information connected and understandable.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Instead of managing disconnected notes and spreadsheets, SpatialSync
            AI brings room data, adjacency logic, zoning, diagrams, and export
            preparation into one workflow.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-950">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
