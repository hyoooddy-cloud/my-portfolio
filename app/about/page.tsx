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

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
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
                  className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
                >
                  {tool}
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-neutral-200 pt-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Working Style
              </p>
              <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
                빠르게 방향을 잡고, 여러 시안을 비교하면서 가장 설득력 있는 결과를 찾는 방식을 선호합니다. 디테일 수정도 꼼꼼하게 보는 편입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            How I work
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {process.map((item) => (
            <div
              key={item.step}
              className="rounded-[30px] border border-neutral-200 bg-white/90 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                {item.step}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20 text-center md:px-10 md:pb-28">
        <div className="rounded-[34px] border border-neutral-200 bg-white/90 px-8 py-14 shadow-[0_10px_40px_rgba(0,0,0,0.05)] md:px-12 md:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
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
              className="rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Send Email
            </a>

            <Link
              href="/"
              className="rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              View Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}