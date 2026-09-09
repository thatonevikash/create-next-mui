import { JetBrains_Mono, Inter } from "next/font/google";
import Link from "next/link";

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
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const STACK = ["Next.js App Router", "React 19", "Material UI", "TypeScript"];

const FEATURES = [
  {
    number: "01",
    title: "A dependable starting point",
    body: "Begin with the App Router, Material UI, and a working theme setup already connected. Spend your first hour on product decisions, not plumbing.",
  },
  {
    number: "02",
    title: "A clean, intentional foundation",
    body: "Generated projects stay small and familiar. You get the essentials without sample screens, hidden abstractions, or a template you have to undo.",
  },
  {
    number: "03",
    title: "Tools when your project needs them",
    body: "Add supported features such as React Query, Zustand, or linting with one command, either during setup or as your application grows.",
  },
];

const STEPS = [
  ["01", "Choose your setup", "Use the interactive flow or pass flags for a repeatable scaffold."],
  ["02", "Start building", "Open the generated project with a theme, providers, and scripts ready to use."],
  ["03", "Extend deliberately", "Install official feature integrations only when they solve a real need."],
];

export default function Page() {
  return (
    <div
      className={`${mono.variable} ${inter.variable} min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50`}
      style={{ fontFamily: "var(--font-body, sans-serif)" }}
    >
      <HeroBackground />

      <div className="relative z-10">
        <main className="mx-auto max-w-6xl px-6 pb-24 pt-10 sm:px-8 sm:pt-16">
          <section className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:items-center lg:gap-16">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400"
                style={{ fontFamily: "var(--font-mono, monospace)" }}
              >
                The practical Next.js + MUI starter
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl sm:leading-[1.05] dark:text-white">
                Start with the foundation. Build what matters.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
                create-next-mui is a focused CLI for creating production-ready
                Next.js App Router projects with Material UI already wired in.
                It removes repetitive setup so your team can move from an idea
                to a real interface faster.
              </p>

              <div className="mt-8">
                <TerminalCommand />
              </div>
              <CTAButtons />
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-3 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
                <HeroImage />
              </div>
            </div>
          </section>

          <div className="mt-16 rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium text-slate-600 dark:text-slate-300">
              {STACK.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Section>
            <SectionTitle title="What it solves" />
            <SectionBody>
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  The first setup should not be the hardest part of the project.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                  Combining Next.js and Material UI is straightforward once it is
                  done, but the initial wiring is easy to repeat incorrectly.
                  create-next-mui gives you a consistent, opinionated baseline
                  that stays close to the tools you already know.
                </p>
              </div>
            </SectionBody>
          </Section>

          <Section>
            <SectionTitle title="What you get" />
            <SectionBody className="grid gap-4 md:grid-cols-3">
              {FEATURES.map((feature) => (
                <article
                  key={feature.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <span
                    className="text-xs font-semibold text-slate-400"
                    style={{ fontFamily: "var(--font-mono, monospace)" }}
                  >
                    {feature.number}
                  </span>
                  <h3 className="mt-8 text-lg font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {feature.body}
                  </p>
                </article>
              ))}
            </SectionBody>
          </Section>

          <Section>
            <SectionTitle title="How it works" />
            <SectionBody className="grid gap-6 border-y border-slate-200 py-6 sm:grid-cols-3 dark:border-slate-800">
              {STEPS.map(([number, title, body]) => (
                <div key={number} className="flex gap-4">
                  <span
                    className="text-xs font-semibold text-slate-400"
                    style={{ fontFamily: "var(--font-mono, monospace)" }}
                  >
                    {number}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </SectionBody>
          </Section>

          <section className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 px-6 py-10 text-white sm:px-10 sm:py-12 dark:border-slate-700">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
              style={{ fontFamily: "var(--font-mono, monospace)" }}
            >
              Ready when you are
            </p>
            <div className="mt-5 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  A calm, capable place to begin.
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Read the quick start, run one command, and keep your attention
                  on the product you are building.
                </p>
              </div>
              <Link
                href="/docs"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
              >
                Read the quick start
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
