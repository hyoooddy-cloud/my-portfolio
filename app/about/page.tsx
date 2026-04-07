import Link from "next/link";

export default function AboutPage() {
  const strengths = [
    "감정이 전달되는 마케팅 비주얼",
    "브랜드 무드와 메시지의 균형",
    "앱 프로모션과 캠페인 구조 설계",
    "작은 디테일까지 정리된 화면 구성",
  ];

  const tools = [
    "Photoshop",
    "Illustrator",
    "Figma",
    "Adobe XD",
    "Notion",
    "ChatGPT",
    "Gemini",
  ];

  const process = [
    {
      step: "01",
      title: "Understand",
      description:
        "브랜드의 목적과 사용자의 맥락을 먼저 이해하고, 화면이 전달해야 하는 핵심 감정을 정리합니다.",
    },
    {
      step: "02",
      title: "Shape",
      description:
        "카피, 레이아웃, 비주얼 요소를 조합해 메시지가 가장 자연스럽게 읽히는 구조를 만듭니다.",
    },
    {
      step: "03",
      title: "Refine",
      description:
        "간격, 타이포, 이미지 밸런스 같은 작은 디테일까지 다듬어 오래 기억되는 결과물로 완성합니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-neutral-900">
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(245,245,247,0.94)_46%,rgba(245,245,247,1)_74%)]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-20 md:px-10 md:pt-16 md:pb-28">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-800 backdrop-blur transition hover:border-neutral-400 hover:bg-white"
            >
              ← Back to Home
            </Link>

            <div className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-500 backdrop-blur">
              About
            </div>
          </div>

          <div className="mt-14 max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Marketing Designer
            </p>

            {/* 🔥 여기만 수정됨 */}
            <h1 className="mt-4 text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[34px] md:text-6xl">
              작은 디테일이 만드는 감정과
              <br />
              오래 남는 화면을 디자인합니다.
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
              브랜드의 메시지가 더 또렷하게 전달되고, 사용자가 더 쉽게
              이해하고 기억할 수 있도록 만드는 디자인을 좋아합니다. 캠페인
              비주얼, 앱 프로모션, 브랜딩 작업을 중심으로 감성과 구조가 함께
              살아 있는 결과물을 만드는 데 집중하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-neutral-200 bg-white/90 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Focus
            </p>
            <p className="mt-4 text-base leading-8 text-neutral-700">
              캠페인 비주얼, 앱 프로모션, 브랜드 무드, 감정이 남는 디지털 경험
            </p>
          </div>

          <div className="rounded-[28px] border border-neutral-200 bg-white/90 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Strength
            </p>
            <p className="mt-4 text-base leading-8 text-neutral-700">
              메시지와 분위기를 동시에 살리면서, 보기 좋고 읽기 좋은 구조로 정리하는 작업
            </p>
          </div>

          <div className="rounded-[28px] border border-neutral-200 bg-white/90 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Goal
            </p>
            <p className="mt-4 text-base leading-8 text-neutral-700">
              예쁜 화면을 넘어 브랜드와 사용자의 감정 사이를 자연스럽게 잇는 경험 만들기
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-4 md:px-10 md:py-8">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[30px] border border-neutral-200 bg-white/90 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              What I value
            </p>

            <div className="mt-6 space-y-4">
              {strengths.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[22px] bg-neutral-50 px-5 py-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-7 text-neutral-700 md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-neutral-200 bg-white/90 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Tools
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}