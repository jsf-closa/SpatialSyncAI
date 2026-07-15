import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { NewProjectForm } from "@/components/new-project-form";

export const metadata: Metadata = {
  title: "Create Project",
  description:
    "Create a SpatialSync AI project from an architectural programming brief.",
};

export default function NewProjectPage() {
  return (
    <main className="bg-slate-50">
      <Container className="py-12 sm:py-16">
        <Link
          href="/dashboard"
          className="text-sm font-semibold text-blue-700 transition hover:text-blue-800"
        >
          ← Back to dashboard
        </Link>

        <section className="mx-auto mt-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            New project
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Start with the architectural brief.
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Give the project a clear name and describe the users, required
            spaces, functional goals, and known constraints.
          </p>

          <NewProjectForm />
        </section>
      </Container>
    </main>
  );
}
