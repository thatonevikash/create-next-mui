import Link from "next/link";
import { JetBrains_Mono, Inter } from "next/font/google";
import TerminalCommand from "@/components/home/terminal-command";
import ScaffoldDiagram from "@/components/home/scaffold-diagram";
import CTAButtons from "@/components/home/cta-buttons";

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
    title: "A theme provider that actually works with SSR",
    body: "MUI wired to the App Router with the Emotion cache set up correctly — no flash of unstyled content on first paint.",
  },
  {
    path: "/app",
    title: "A clean starting route, not a demo you have to gut",
    body: "The App Router directory arrives empty of sample clutter, so the first thing you delete isn\u2019t everything.",
  },
  {
    path: "/components",
    title: "A couple of real components to build from",
    body: "Working examples that show how MUI and the App Router are meant to talk to each other, not a blank folder.",
  },
];

const STEPS = [
  { n: "1", label: "Run the command", code: "npx create-next-mui my-app" },
  { n: "2", label: "Move into the project", code: "cd my-app" },
  { n: "3", label: "Start the dev server", code: "npm run dev" },
];

export default function Page() {
  return (
    <div
      className={`${mono.variable} ${inter.variable} min-h-screen`}
      style={{ fontFamily: "var(--font-body, sans-serif)" }}
    >
      {/* fine blueprint grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 [--grid-color:rgba(15,23,42,0.08)] dark:[--grid-color:rgba(207,232,255,0.06)]"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

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

              {/* <div className="mt-5 flex items-center gap-2 text-[14px]">
                <Link
                  href="/docs"
                  className="text-blue-500 underline decoration-blue-500/40 underline-offset-4 transition-colors hover:decoration-blue-500"
                >
                  Read the docs
                </Link>
                <span className="text-slate-800 dark:text-slate-200">·</span>
                <a
                  href="https://github.com/thatonevikash/create-next-mui"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-800 dark:text-slate-200 transition-colors hover:text-blue-500"
                >
                  View source
                </a>
              </div> */}
            </div>

            <div className="flex justify-center lg:justify-end">
              <ScaffoldDiagram />
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
          <section className="mt-20">
            <h2
              className="text-[11px] tracking-[0.2em] text-slate-800 dark:text-slate-200"
              style={{ fontFamily: "var(--font-mono, monospace)" }}
            >
              WHAT GETS GENERATED
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
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
            </div>
          </section>
        </main>

        {/* footer */}
        <footer className="border-t border-dashed border-[#1f3f5f]">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-6 text-[12px] text-slate-800 dark:text-slate-200 sm:flex-row">
            <span style={{ fontFamily: "var(--font-mono, monospace)" }}>
              MIT Licensed
            </span>
            <div className="flex items-center gap-5">
              <Link
                href="/docs"
                className="transition-colors hover:text-[#ffb454]"
              >
                Docs
              </Link>
              <a
                href="https://github.com/thatonevikash/create-next-mui"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#ffb454]"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
