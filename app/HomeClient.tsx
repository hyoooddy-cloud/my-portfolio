"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useMemo, useState } from "react";

type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  type: string;
  role: string;
  thumbnail: string;
  overview: string;
  concept: string;
  point1: string;
  point2: string;
  point3: string;
  detailImages: string[];
  cardLabel: string;
};

export default function HomeClient() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.55]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" });

        if (!res.ok) {
          throw new Error("프로젝트 데이터를 불러오지 못했습니다.");
        }

        const data = await res.json();
        setProjects(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  const categories = useMemo(() => {
    const values = projects
      .map((project) => project.category?.trim())
      .filter((value): value is string => Boolean(value));

    return ["All", ...Array.from(new Set(values))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-neutral-900">
      <motion.div
        className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-black"
        style={{ scaleX: scrollYProgress }}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(245,245,247,0.92)_45%,rgba(245,245,247,1)_72%)]" />

        <motion.div
          className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 text-center md:px-10 md:pt-20 md:pb-32"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.p
            className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-neutral-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Marketing Designer
          </motion.p>

          <motion.h1
            className="text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-[92px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Little designs,
            <br />
            big feelings.
          </motion.h1>

          <motion.p
            className="mx-auto mt-10 max-w-2xl text-center text-base leading-8 text-neutral-600 md:text-xl md:leading-9"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            작은 디테일이 만드는 감정의 차이를 중요하게 생각합니다.
            <br />
            보기 좋은 화면을 넘어, 오래 기억되는 경험을 디자인합니다.
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
          >
            <Link
              href="#work"
              className="rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              View Work
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-neutral-300 bg-white px-7 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              About Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        className="border-y border-black/5 bg-white/50 backdrop-blur"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-6 md:px-10">
          <p className="text-center text-sm leading-6 text-neutral-600 md:text-base">
            Campaign visuals, app promotions, branding, and emotionally memorable digital experiences.
          </p>
        </div>
      </motion.section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <motion.div
          className="mb-10 md:mb-12"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Selected Work
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            Recent projects
          </h2>
        </motion.div>

        {!isLoading && categories.length > 1 && (
          <motion.div
            className="mb-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-black text-white shadow-md"
                      : "border border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </motion.div>
        )}

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-[32px] border border-neutral-200 bg-white/90 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="rounded-[24px] bg-neutral-100 p-2.5">
                  <div className="h-[320px] rounded-[20px] bg-neutral-200 animate-pulse" />
                </div>
                <div className="mt-5 h-3 w-20 rounded bg-neutral-200 animate-pulse" />
                <div className="mt-3 h-7 w-2/3 rounded bg-neutral-200 animate-pulse" />
                <div className="mt-3 h-4 w-full rounded bg-neutral-200 animate-pulse" />
                <div className="mt-2 h-4 w-4/5 rounded bg-neutral-200 animate-pulse" />
              </div>
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="rounded-[32px] border border-dashed border-neutral-300 bg-white/70 px-8 py-16 text-center">
            <p className="text-lg font-medium text-neutral-900">
              표시할 프로젝트가 없어요.
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              선택한 카테고리에 해당하는 프로젝트가 아직 없어요.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={`/project/${project.slug}`}
                  className="group flex h-full flex-col rounded-[32px] border border-neutral-200 bg-white/90 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-neutral-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                  <div className="overflow-hidden rounded-[24px] bg-neutral-100 p-2.5">
                    <div className="flex max-h-[360px] min-h-[220px] items-center justify-center overflow-hidden rounded-[20px] bg-[#f7f7f8]">
                      {project.thumbnail ? (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="max-h-[360px] w-full object-contain transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="flex h-[260px] w-full items-center justify-center bg-gradient-to-br from-white via-[#f4f4f6] to-[#e7e7ea]">
                          <span className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                            No Image
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-1 flex-col px-1">
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                      {project.cardLabel || project.category || project.type}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
                      {project.title}
                    </h3>

                    <p className="mt-3 line-clamp-4 text-sm leading-7 text-neutral-600">
                      {project.overview || project.concept || "프로젝트 설명 준비 중"}
                    </p>

                    <div className="mt-6 flex items-center justify-between text-sm font-medium text-neutral-900">
                      <span className="transition group-hover:translate-x-1">
                        View project →
                      </span>
                      <span className="text-neutral-400">{project.year}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <motion.section
        className="bg-white/70"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              About
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              Designing with
              <br />
              clarity and feeling
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-base leading-8 text-neutral-600 md:text-lg">
              마케팅 디자인은 단순히 예쁜 이미지를 만드는 일이 아니라,
              사용자가 더 빠르게 이해하고 더 오래 기억하게 만드는 일이라고
              생각합니다. 브랜드의 분위기와 메시지를 균형 있게 담아내는 작업을
              좋아합니다.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50"
              >
                Go to About
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-28"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
          Let’s make something
          <br />
          meaningful together
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
         작업, 협업, 포트폴리오 관련 문의는 언제든 편하게 연락은 주세요.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hyoooddy@gmail.com"
            className="rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-neutral-800 hover:shadow-lg"
          >
            Send Email
          </a>

          <Link
            href="/about"
            className="rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-medium text-neutral-900 transition duration-300 hover:border-neutral-400 hover:bg-neutral-50"
          >
            More About Me
          </Link>
        </div>
      </motion.section>
    </main>
  );
}