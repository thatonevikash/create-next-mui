import Link from "next/link";

export function CTAButtons() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 text-[14px]">
      <Link
        href="/docs"
        className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 font-semibold text-white transition-all duration-200 ease-out hover:bg-slate-700 hover:shadow-md active:scale-[0.98] dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
      >
        Read the docs
        {/* Animated Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-white dark:text-slate-500 dark:group-hover:text-slate-950"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>

      {/* Secondary CTA (View Source) */}
      <a
        href="https://github.com/thatonevikash/create-next-mui"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/70 px-5 py-2.5 font-medium text-slate-700 backdrop-blur-sm transition-all duration-200 hover:border-slate-400 hover:bg-white hover:text-slate-950 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-900 dark:hover:text-white"
      >
        View source
      </a>
    </div>
  );
}
