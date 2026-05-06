"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigationGroups } from "@/data/mock/navigation";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-border bg-background px-5 py-6 lg:flex lg:flex-col">
        <SidebarContent pathname={pathname} />
      </aside>

      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/95 px-4 lg:hidden">
        <Link href="/" className="font-mono text-sm text-foreground">
          Personal Life OS
        </Link>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground transition hover:border-accent hover:text-accent"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {open ? (
        <div className="fixed inset-0 z-30 bg-background px-5 py-6 lg:hidden">
          <div className="mt-12 h-[calc(100%-3rem)]">
            <SidebarContent
              pathname={pathname}
              onNavigate={() => setOpen(false)}
            />
          </div>
        </div>
      ) : null}

      <main className="lg:pl-72">
        <div className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
          {children}
        </div>
      </main>
    </div>
  );
}

function SidebarContent({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="space-y-3 border-b border-border pb-7">
        <p className="font-mono text-xs uppercase tracking-normal text-muted">
          Life Journey
        </p>
        <Link href="/" onClick={onNavigate} className="block">
          <h1 className="font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            Personal Life OS
          </h1>
        </Link>
        <p className="max-w-52 text-sm leading-6 text-muted">
          Private dashboard for reflection, discipline, and becoming.
        </p>
      </div>

      <nav
        className="mt-7 min-h-0 flex-1 overflow-y-auto pr-1"
        aria-label="Primary navigation"
      >
        <div className="space-y-6">
          {navigationGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-2 px-3 font-mono text-xs uppercase tracking-normal text-muted">
                {group.title}
              </p>
              <div className="flex flex-col gap-1">
                {group.items.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onNavigate}
                      className={cn(
                        "flex h-11 items-center gap-3 rounded-md px-3 font-mono text-xs text-muted transition",
                        "hover:bg-surface hover:text-foreground",
                        active &&
                          "border border-accent bg-surface text-accent shadow-[inset_0_0_0_1px_var(--color-accent)]",
                      )}
                    >
                      <Icon size={17} strokeWidth={1.8} />
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>

      <div className="mt-6 border-t border-border pt-6">
        <p className="font-mono text-xs uppercase tracking-normal text-muted">
          Current focus
        </p>
        <p className="mt-3 text-sm leading-6 text-foreground">
          Stay focused in the present. Build the future self.
        </p>
      </div>
    </div>
  );
}
