import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-8 max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-normal text-muted">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-muted sm:text-[0.92rem]">
        {description}
      </p>
    </header>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-lg border border-border bg-surface p-5 text-foreground sm:p-6",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-normal text-muted">
      {children}
    </p>
  );
}

export function Metric({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <Card>
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-4 font-mono text-3xl font-medium text-foreground">
        {value}
      </p>
      <p className="mt-2 text-sm text-muted">{detail}</p>
    </Card>
  );
}

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  primaryLabel,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  items: Array<{
    title: string;
    detail: string;
  }>;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="min-h-80">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <SectionLabel>Task placeholder</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                {primaryLabel}
              </h3>
            </div>
            <button
              type="button"
              className="h-11 rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90"
            >
              Quick check-in
            </button>
          </div>
          <div className="mt-10 space-y-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="border-t border-border pt-4 first:border-t-0 first:pt-0"
              >
                <p className="font-mono text-sm text-foreground">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <SectionLabel>Future build</SectionLabel>
          <p className="mt-4 text-sm leading-6 text-muted">
            This page is wired into the shell for MVP navigation. Detailed
            tracking, inputs, and insights will be built in its dedicated task.
          </p>
        </Card>
      </div>
    </>
  );
}
