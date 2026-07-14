import { Container } from "@/components/container";

export default function HomePage() {
  return (
    <main>
      <Container className="py-24">
        <section className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            SpatialSync AI
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white-950 sm:text-6xl">
            Shared application shell ready
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            The header, content width, navigation, and footer are now reusable
            across future pages.
          </p>
        </section>
      </Container>
    </main>
  );
}
