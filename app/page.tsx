import { dashboard } from "@/data/mock/life-os";
import { Card, SectionLabel } from "@/components/ui";

export default function Home() {
  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-normal text-muted">
            {dashboard.welcome.eyebrow}
          </p>
          <h2 className="mt-3 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            {dashboard.welcome.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            {dashboard.welcome.dateLabel}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            {dashboard.welcome.summary}
          </p>
        </div>

        <button
          type="button"
          className="h-11 w-full rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          {dashboard.welcome.checkInLabel}
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {dashboard.metrics.map((metric) => (
          <DashboardMetric key={metric.label} {...metric} />
        ))}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="flex min-h-96 flex-col">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <SectionLabel>{dashboard.mainGoal.category}</SectionLabel>
              <h3 className="mt-4 max-w-3xl font-mono text-2xl font-medium leading-snug text-foreground">
                {dashboard.mainGoal.title}
              </h3>
            </div>
            <div className="rounded-md border border-border px-4 py-3 text-right">
              <p className="font-mono text-2xl font-medium text-foreground">
                {dashboard.mainGoal.progress}%
              </p>
              <p className="mt-1 font-mono text-xs text-muted">progress</p>
            </div>
          </div>

          <div className="mt-8 h-2 rounded-sm bg-background">
            <div
              className="h-full rounded-sm bg-foreground"
              style={{ width: `${dashboard.mainGoal.progress}%` }}
            />
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <DetailBlock label="Why it matters" text={dashboard.mainGoal.why} />
            <DetailBlock
              label="Next action"
              text={dashboard.mainGoal.nextAction}
            />
            <DetailBlock label="Friction" text={dashboard.mainGoal.friction} />
          </div>
        </Card>

        <Card className="min-h-96">
          <SectionLabel>Latest journal entry</SectionLabel>
          <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
            <span>{dashboard.latestJournalEntry.date}</span>
            <span>/</span>
            <span>{dashboard.latestJournalEntry.mood}</span>
          </div>
          <h3 className="mt-5 font-mono text-xl font-medium text-foreground">
            {dashboard.latestJournalEntry.title}
          </h3>
          <p className="mt-5 text-sm leading-6 text-muted">
            {dashboard.latestJournalEntry.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {dashboard.latestJournalEntry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-border pt-5">
            <SectionLabel>Reflection cue</SectionLabel>
            <p className="mt-3 text-sm leading-6 text-foreground">
              {dashboard.latestJournalEntry.prompt}
            </p>
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
        <Card>
          <SectionLabel>{dashboard.nextMilestone.category}</SectionLabel>
          <p className="mt-4 font-mono text-xs text-muted">
            {dashboard.nextMilestone.date}
          </p>
          <h3 className="mt-4 font-mono text-xl font-medium leading-snug text-foreground">
            {dashboard.nextMilestone.title}
          </h3>
          <p className="mt-5 text-sm leading-6 text-muted">
            {dashboard.nextMilestone.meaning}
          </p>
          <div className="mt-8 border-t border-border pt-5">
            <SectionLabel>Next step</SectionLabel>
            <p className="mt-3 text-sm leading-6 text-foreground">
              {dashboard.nextMilestone.nextStep}
            </p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Weekly progress</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                The week is moving in the right direction.
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">5 core areas</p>
          </div>

          <div className="mt-7 space-y-5">
            {dashboard.weeklyProgress.map((item, index) => (
              <ProgressRow
                key={item.label}
                {...item}
                emphasized={index === 0}
              />
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

function DashboardMetric({
  label,
  value,
  unit,
  detail,
  highlight,
}: {
  label: string;
  value: string;
  unit: string;
  detail: string;
  highlight: boolean;
}) {
  return (
    <Card>
      <SectionLabel>{label}</SectionLabel>
      <p
        className={`mt-4 font-mono text-3xl font-medium ${
          highlight ? "text-accent" : "text-foreground"
        }`}
      >
        {value}
        {unit ? (
          <span className="ml-1 text-base text-muted">{unit}</span>
        ) : null}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
    </Card>
  );
}

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-t border-border pt-4">
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}

function ProgressRow({
  label,
  value,
  detail,
  emphasized,
}: {
  label: string;
  value: number;
  detail: string;
  emphasized: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-sm text-foreground">{label}</p>
        <p
          className={`font-mono text-sm ${
            emphasized ? "text-foreground" : "text-muted"
          }`}
        >
          {value}%
        </p>
      </div>
      <div className="mt-3 h-2 rounded-sm bg-background">
        <div
          className={`h-full rounded-sm ${
            emphasized ? "bg-foreground" : "bg-muted"
          }`}
          style={{ width: `${value}%` }}
        />
      </div>
      <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
    </div>
  );
}
