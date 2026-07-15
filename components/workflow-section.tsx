import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const workflowSteps = [
  {
    number: "01",
    title: "Define the project brief",
    description:
      "Record the building type, users, goals, constraints, and early design requirements.",
  },
  {
    number: "02",
    title: "Organize the room program",
    description:
      "Add rooms, departments, target areas, capacities, and functional requirements.",
  },
  {
    number: "03",
    title: "Set adjacency relationships",
    description:
      "Identify which rooms should be near, separated, connected, or independently accessed.",
  },
  {
    number: "04",
    title: "Study zoning and diagrams",
    description:
      "Review functional groups, zoning relationships, and preliminary bubble diagram outputs.",
  },
  {
    number: "05",
    title: "Review and export",
    description:
      "Prepare organized planning information for reports, presentations, and design development.",
  },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Guided workflow"
          title="Move from project brief to preliminary spatial planning."
          description="SpatialSync AI keeps early architectural decisions organized so the team can understand how spaces, users, and functional relationships connect."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {workflowSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-bold text-blue-600">{step.number}</p>

              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
