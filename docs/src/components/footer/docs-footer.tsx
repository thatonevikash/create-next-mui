"use client";

import Link from "fumadocs-core/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { useFooterItems } from "fumadocs-ui/utils/use-footer-items";
import type { FooterProps } from "fumadocs-ui/layouts/docs/page";

function isActive(href: string, pathname: string) {
  const normHref =
    href.length > 1 && href.endsWith("/") ? href.slice(0, -1) : href;
  const normPath =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  return normHref === normPath;
}

export function DocsFooter({
  items,
  children,
  className,
  ...props
}: FooterProps) {
  const footerList = useFooterItems();
  const pathname = usePathname();

  const { previous, next } = useMemo(() => {
    if (items) return items;
    const idx = footerList.findIndex((item) => isActive(item.url, pathname));
    if (idx === -1) return {};
    return {
      previous: footerList[idx - 1],
      next: footerList[idx + 1],
    };
  }, [footerList, items, pathname]);

  if (!previous && !next && !children) return null;

  return (
    <div className={cn("flex flex-col gap-4 mt-8", className)} {...props}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 @container">
        {previous && (
          <Link
            href={previous.url}
            className="group flex flex-col gap-1.5 rounded-lg border border-fd-border p-4 text-sm transition-all hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full"
          >
            <div className="inline-flex items-center gap-1 text-xs text-fd-muted-foreground group-hover:text-fd-accent-foreground/80">
              <ChevronLeft className="size-3.5 -ml-1 shrink-0 rtl:rotate-180 transition-transform group-hover:-translate-x-0.5" />
              <span>Previous</span>
            </div>
            <p className="font-medium text-fd-foreground group-hover:text-fd-accent-foreground line-clamp-1">
              {previous.name}
            </p>
          </Link>
        )}
        {next && (
          <Link
            href={next.url}
            className={cn(
              "group flex flex-col gap-1.5 rounded-lg border border-fd-border p-4 text-sm transition-all hover:bg-fd-accent/80 hover:text-fd-accent-foreground text-end @max-lg:col-span-full",
              !previous && "sm:col-start-2",
            )}
          >
            <div className="inline-flex items-center justify-end gap-1 text-xs text-fd-muted-foreground group-hover:text-fd-accent-foreground/80">
              <span>Next</span>
              <ChevronRight className="size-3.5 -mr-1 shrink-0 rtl:rotate-180 transition-transform group-hover:translate-x-0.5" />
            </div>
            <p className="font-medium text-fd-foreground group-hover:text-fd-accent-foreground line-clamp-1">
              {next.name}
            </p>
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}
