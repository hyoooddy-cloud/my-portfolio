import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Ryo Portfolio",
  description: "Marketing Designer Portfolio",
  openGraph: {
    title: "Ryo Portfolio",
    description: "Marketing Designer Portfolio",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#f5f5f7] text-neutral-900">
        <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/70 backdrop-blur-md">
          <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-6 md:px-10">
            <Link href="/" className="text-sm font-semibold">
              Ryo
            </Link>

            <nav className="flex items-center gap-3">
              <Link href="/" className="group relative px-4 py-2 text-sm">
                Home
                <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-black transition-all group-hover:w-[70%] -translate-x-1/2" />
              </Link>

              <Link href="/about" className="group relative px-4 py-2 text-sm">
                About
                <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-black transition-all group-hover:w-[70%] -translate-x-1/2" />
              </Link>

              <a
                href="mailto:hyoooddy@gmail.com"
                className="rounded-full border px-4 py-2 text-sm"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        <div className="h-[68px]" />

        {children}
      </body>
    </html>
  );
}