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

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(245,245,247,0.92)_45%,rgba(245,245,247,1)_72%)]" />

        <motion.div className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 text-center">

          <p className="mb-6 text-xs tracking-[0.2em] text-neutral-500">
            MARKETING DESIGNER
          </p>

          {/* 🔥 여기 핵심 수정 */}
          <h1 className="text-3xl leading-tight font-semibold md:text-5xl lg:text-7xl">
            작은 디테일이 만드는 감정과
            <br />
            오래 남는 화면을 디자인 합니다
          </h1>

          {/* 설명 텍스트 */}
          <p className="mx-auto mt-8 max-w-xl text-sm leading-6 text-neutral-600 md:text-base md:leading-7">
            브랜드의 메시지가 더 또렷하게 전달되고,
            사용자가 더 쉽게 이해하고 기억할 수 있도록 만드는 디자인을 좋아합니다.
          </p>

        </motion.div>
      </section>

    </main>
  );
}