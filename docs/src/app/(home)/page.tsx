import { JetBrains_Mono, Inter } from "next/font/google";

import { Footer } from "@/components/footer";
import { Section, SectionBody, SectionTitle } from "@/components/layout";

import {
  CTAButtons,
  HeroBackground,
  HeroImage,
  TerminalCommand,
} from "@/section/home";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const STACK = ["Next.js 16", "React 19", "MUI 6–9", "TypeScript"];

const FEATURES = [
  {
    path: "/theme",
    title: "Integrated MUI theme that actually works with SSR",
    body: "MUI wired to the App Router with the Emotion cache set up correctly — no flash of unstyled content on first paint.",
  },
  {
    path: "/app",
    title: "Built on the top of Next.js App Router",
    body: "The App Router directory arrives empty of sample clutter, so the first thing you delete isn\u2019t everything.",
  },
  {
    path: "/eslint",
    title: "Pre-installed rules that enhances the developer experience ( DX )",
    body: "Native eslint rules are not enough to build faster, so we have extended with supported eslint plugins.",
  },
];

export default function Page() {
  return (
    <div
      className={`${mono.variable} ${inter.variable} min-h-screen`}
      style={{ fontFamily: "var(--font-body, sans-serif)" }}
    >
      <HeroBackground />

      <div className="relative z-10">
        {/* hero */}
        <main className="mx-auto max-w-5xl px-6 pb-24 pt-10 sm:pt-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
            <div>
              <h1
                className="mt-6 max-w-xl text-3xl font-bold leading-tight  sm:text-4xl"
                style={{ fontFamily: "var(--font-mono, monospace)" }}
              >
                Next.js and MUI, wired together in one command.
              </h1>

              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-700 dark:text-slate-400">
                React 19, TypeScript, and a working theme provider — ready the
                moment the install finishes. Nothing to copy-paste from a blog
                post.
              </p>

              <div className="mt-8">
                <TerminalCommand />
              </div>

              <CTAButtons />
            </div>

            <div className="flex justify-center lg:justify-end">
              <HeroImage />
            </div>
          </div>

          {/* stack row, dimension-line style */}
          <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-y border-[#1f3f5f] py-5 text-[12px] tracking-[0.08em] text-slate-800 dark:text-slate-200">
            {STACK.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2"
                style={{ fontFamily: "var(--font-mono, monospace)" }}
              >
                <span className="text-slate-500">|—</span>
                {item}
                <span className="text-slate-500">—|</span>
              </li>
            ))}
          </ul>

          {/* features */}
          <Section>
            <SectionTitle title="Overview" />

            <SectionBody className="grid gap-6 sm:grid-cols-3">
              {FEATURES.map((f) => (
                <div key={f.path} className="relative pl-5">
                  <span className="absolute left-0 top-[7px] h-[7px] w-[7px] rounded-full border border-[#ffb454]" />
                  <span className="absolute left-[3px] top-[14px] h-[calc(100%-14px)] w-px bg-[#1f3f5f]" />
                  <p
                    className="text-[13px] text-rose-500"
                    style={{ fontFamily: "var(--font-mono, monospace)" }}
                  >
                    {f.path}
                  </p>
                  <h3 className="mt-2 text-[15px] font-medium ">{f.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-400">
                    {f.body}
                  </p>
                </div>
              ))}
            </SectionBody>
          </Section>

          <Section>
            <SectionTitle title="Why Next MUI ?" />

            <SectionBody>
              <p className="font-medium">
                You&apos;ve ever experienced the rebuilding exact foundation in
                NextJs with MUI.
              </p>

              <p className="mt-2 text-sm text-slate-700 dark:text-slate-400">
                You got your answer!
              </p>

              <p className="mt-6 text-sm text-slate-700 dark:text-slate-400">
                <span className="font-medium text-black dark:text-white">
                  Next MUI
                </span>
                , solves the exact deficiency of development, also provides a
                very smooth foundation so that you don&apos;t waste your initial
                couple of minutes in writing the same stuff you&apos;re writting
                most of the time.
              </p>
            </SectionBody>
          </Section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
