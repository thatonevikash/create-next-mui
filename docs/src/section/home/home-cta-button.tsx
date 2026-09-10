import Link from "next/link";

export function CTAButtons() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 text-[14px]">
      <Link
        href="/docs"
        className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-site-primary px-5 py-2.5 font-semibold text-site-primary-foreground transition-all duration-200 ease-out hover:bg-site-primary hover:shadow-md active:scale-[0.98]"
      >
        Read the docs
        {/* Animated Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-3.5 w-3.5 text-site-subtle transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-site-primary-foreground"
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
        className="inline-flex items-center justify-center rounded-lg border border-site-border bg-site-surface/70 px-5 py-2.5 font-medium text-site-muted backdrop-blur-sm transition-all duration-200 hover:border-site-subtle hover:bg-site-surface hover:text-site-foreground active:scale-[0.98]"
      >
        View source
      </a>
    </div>
  );
}
