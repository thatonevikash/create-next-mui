"use client";

import { useEffect, useState } from "react";

const COMMAND = "npx create-next-mui my-app";

export function TerminalCommand() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setTyped(COMMAND);
      setDone(true);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  return (
    <div className="w-full max-w-[520px] rounded-[2px] border border-zinc-700 bg-slate-950 dark:bg-zinc-200 font-mono text-sm shadow-[0_0_0_1px_rgba(207,232,255,0.05)]">
      <div className="flex items-center justify-between border-b border-zinc-700 px-4 py-2">
        <span className="text-[11px] tracking-[0.18em] text-slate-400 dark:text-slate-500">
          TERMINAL
        </span>
        <button
          onClick={handleCopy}
          className="text-[11px] tracking-[0.1em] text-slate-400 dark:text-slate-500 transition-colors hover:text-[#ffb454]"
          aria-label="Copy command"
        >
          {copied ? "COPIED" : "COPY"}
        </button>
      </div>
      <div className="px-4 py-4 text-slate-100 dark:text-slate-800">
        <span className="text-[#ffb454]">$</span> <span>{typed}</span>
        <span
          className={`ml-0.5 inline-block h-[1em] w-[6px] translate-y-[2px] bg-slate-100 dark:bg-slate-800 ${
            done ? "animate-[blink_1s_steps(1)_infinite]" : ""
          }`}
        />
      </div>
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
