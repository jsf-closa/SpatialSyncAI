import Link from "next/link";

type ProjectCardProps = {
  id: string;
  name: string;
  buildingType?: string;
  updatedAt: string;
  isDemo?: boolean;
};

export function ProjectCard({
  id,
  name,
  buildingType,
  updatedAt,
  isDemo = false,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          {buildingType && (
            <p className="text-sm font-semibold text-blue-600">
              {buildingType}
            </p>
          )}

          <h2 className="mt-3 text-xl font-semibold text-slate-950">{name}</h2>
        </div>

        {isDemo && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            Demo
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-slate-500">{updatedAt}</p>

      <div className="mt-auto pt-6">
        <Link
          href={`/projects/${id}`}
          className="inline-flex text-sm font-semibold text-blue-700 transition hover:text-blue-800"
        >
          Open workspace →
        </Link>
      </div>
    </article>
  );
}
