import cn from "cnfast";
import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  className?: string;
}

export function Section({ className, children }: SectionProps) {
  return <section className={cn("mt-20", className)}>{children}</section>;
}

export function SectionTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-lg tracking-[0.2em] uppercase text-site-muted",
        className,
      )}
      style={{ fontFamily: "var(--font-mono, monospace)" }}
    >
      {title}
    </h2>
  );
}

interface SectionBodyProps extends PropsWithChildren {
  className?: string;
}

export function SectionBody({ className, children }: SectionBodyProps) {
  return <div className={cn("mt-6", className)}>{children}</div>;
}
