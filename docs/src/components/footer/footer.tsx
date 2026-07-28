import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-dashed border-[#1f3f5f]">
      <div className="mx-auto flex max-w-full flex-col items-center justify-between gap-3 px-20 py-6 text-[12px] text-slate-800 dark:text-slate-200 sm:flex-row">
        <span
          style={{ fontFamily: "var(--font-mono, monospace)" }}
          className="flex items-center gap-2"
        >
          <img src="/logo.svg" alt="logo" className="w-6 h-6 rounded-md" />
          MIT Licensed
        </span>
        <div className="flex items-center gap-5">
          <Link href="/docs" className="transition-colors hover:text-rose-500">
            Docs
          </Link>
          <a
            href="https://github.com/thatonevikash/create-next-mui"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-rose-500 flex items-center"
          >
            GitHub
            <ArrowUpRight className="w-4 h-4 inline ml-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
