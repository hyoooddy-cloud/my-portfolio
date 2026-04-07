import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../lib/notion";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Ryo Portfolio`,
    description:
      project.overview || project.concept || `${project.title} project detail`,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const designPoints = [project.point1, project.point2, project.point3].filter(
    Boolean
  );

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-neutral-900">
      {/* top area */}
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(245,245,247,0.94)_46%,rgba(245,245,247,1)_74%)]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-16 md:px-10 md:pt-14 md:pb-20">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-800 backdrop-blur transition hover:border-neutral-400 hover:bg-white"
            >
              ← Back to Home
            </Link>

            <div className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-500 backdrop-blur">
              Project Detail
            </div>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                {project.cardLabel || project.category || "Project"}
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
                {project.overview || project.concept || "프로젝트 설명 준비 중입니다."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-[28px] border border-black/6 bg-white/70 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                  Category
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-900">
                  {project.category || "-"}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                  Year
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-900">
                  {project.year || "-"}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                  Type
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-900">
                  {project.type || "-"}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                  Role
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-900">
                  {project.role || "-"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* hero image */}
      <section className="mx-auto max-w-6xl px-6 pt-10 md:px-10 md:pt-14">
        <div className="overflow-hidden rounded-[32px] border border-black/6 bg-white/80 p-3 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <div className="overflow-hidden rounded-[24px] bg-[#ececef]">
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full object-contain"
              />
            ) : (
              <div className="flex h-[420px] items-center justify-center bg-gradient-to-br from-white via-[#f4f4f6] to-[#e7e7ea]">
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                  No Image
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* content */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-black/6 bg-white/80 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Overview
              </p>
              <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
                {project.overview || "내용 준비 중입니다."}
              </p>
            </div>

            <div className="rounded-[28px] border border-black/6 bg-white/80 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Concept
              </p>
              <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
                {project.concept || "내용 준비 중입니다."}
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/6 bg-white/80 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Design Points
            </p>

            {designPoints.length > 0 ? (
              <div className="mt-6 space-y-4">
                {designPoints.map((point, index) => (
                  <div
                    key={`${project.slug}-point-${index}`}
                    className="rounded-[22px] bg-neutral-50 px-5 py-4"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      <p className="pt-1 text-sm leading-7 text-neutral-700 md:text-base">
                        {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                아직 등록된 디자인 포인트가 없어요.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* detail images */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Visual Details
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Project visuals
          </h2>
        </div>

        {project.detailImages.length > 0 ? (
          <div className="grid gap-6">
            {project.detailImages.map((image, index) => (
              <div
                key={`${project.slug}-detail-${index}`}
                className="overflow-hidden rounded-[30px] border border-black/6 bg-white/80 p-3 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="overflow-hidden rounded-[22px] bg-[#ececef]">
                  <img
                    src={image}
                    alt={`${project.title} detail ${index + 1}`}
                    className="w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[30px] border border-dashed border-neutral-300 bg-white/70 px-8 py-16 text-center">
            <p className="text-lg font-medium text-neutral-900">
              추가 이미지가 아직 없어요.
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Notion의 DetailImage1, DetailImage2를 채우면 여기에 표시돼.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}