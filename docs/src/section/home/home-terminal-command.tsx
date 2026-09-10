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
    <div className="w-full max-w-[520px] rounded-xl border border-site-terminal-border bg-site-terminal font-mono text-sm shadow-[0_16px_40px_-24px_rgba(15,23,42,0.7)]">
      <div className="flex items-center justify-between border-b border-site-terminal-divider px-4 py-2">
        <span className="text-[11px] tracking-[0.18em] text-site-terminal-muted">
          TERMINAL
        </span>
        <button
          onClick={handleCopy}
          className="text-[11px] tracking-[0.1em] text-site-terminal-muted transition-colors hover:text-site-terminal-foreground"
          aria-label="Copy command"
        >
          {copied ? "COPIED" : "COPY"}
        </button>
      </div>
      <div className="px-4 py-4 text-site-terminal-foreground">
        <span className="text-site-terminal-muted">$</span> <span>{typed}</span>
        <span
          className={`ml-0.5 inline-block h-[1em] w-[6px] translate-y-[2px] bg-site-terminal-foreground ${
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
