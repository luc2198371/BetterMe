import { Card, SectionLabel } from "@/components/ui";
import { goalsDashboard } from "@/data/mock/life-os";

type Goal = (typeof goalsDashboard.groups)[number]["goals"][number];

export default function GoalsPage() {
  const allGoals = goalsDashboard.groups.flatMap((group) => group.goals);
  const averageProgress = Math.round(
    allGoals.reduce((total, goal) => total + goal.progress, 0) /
      allGoals.length,
  );
  const activeGoals = allGoals.filter((goal) =>
    ["Active", "On track", "Building", "Shaping"].includes(goal.status),
  ).length;
  const nearestGoal = allGoals
    .filter((goal) => goal.deadline !== "Open horizon")
    .sort(
      (first, second) =>
        Date.parse(first.deadline) - Date.parse(second.deadline),
    )[0];

  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-normal text-muted">
            {goalsDashboard.header.eyebrow}
          </p>
          <h2 className="mt-3 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            {goalsDashboard.header.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            {goalsDashboard.header.dateLabel}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            {goalsDashboard.header.description}
          </p>
        </div>

        <button
          type="button"
          className="h-11 w-full rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          {goalsDashboard.header.actionLabel}
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryMetric
          label="Total goals"
          value={`${allGoals.length}`}
          detail="Across four horizons"
        />
        <SummaryMetric
          label="Average progress"
          value={`${averageProgress}%`}
          detail="All active goal cards"
        />
        <SummaryMetric
          label="Active goals"
          value={`${activeGoals}`}
          detail="Moving or shaping now"
        />
        <SummaryMetric
          label="Nearest deadline"
          value={nearestGoal.deadline.split(",")[0]}
          detail={nearestGoal.title}
        />
      </div>

      <div className="mt-4 space-y-4">
        {goalsDashboard.groups.map((group) => (
          <section key={group.horizon}>
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionLabel>{group.horizon}</SectionLabel>
                <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                  {group.summary}
                </h3>
              </div>
              <p className="font-mono text-xs text-muted">
                {group.goals.length} goals
              </p>
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              {group.goals.map((goal) => (
                <GoalCard key={`${group.horizon}-${goal.title}`} goal={goal} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

function SummaryMetric({
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
      <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
    </Card>
  );
}

function GoalCard({ goal }: { goal: Goal }) {
  return (
    <Card className="flex min-h-full flex-col">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
              {goal.category}
            </span>
            <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-foreground">
              {goal.status}
            </span>
          </div>
          <h4 className="mt-4 font-mono text-xl font-medium leading-snug text-foreground">
            {goal.title}
          </h4>
          <p className="mt-3 font-mono text-xs text-muted">
            Deadline / {goal.deadline}
          </p>
        </div>

        <div className="shrink-0 rounded-md border border-border px-4 py-3 text-left sm:text-right">
          <p className="font-mono text-2xl font-medium text-foreground">
            {goal.progress}%
          </p>
          <p className="mt-1 font-mono text-xs text-muted">progress</p>
        </div>
      </div>

      <div className="mt-6 h-2 rounded-sm bg-background">
        <div
          className="h-full rounded-sm bg-foreground"
          style={{ width: `${goal.progress}%` }}
        />
      </div>

      <div className="mt-7 grid gap-5 lg:grid-cols-2">
        <DetailBlock label="Why it matters" text={goal.whyItMatters} />
        <DetailBlock label="Next action" text={goal.nextAction} />
        <DetailBlock label="Obstacles" text={goal.obstacles} />
        <DetailBlock label="Lessons learned" text={goal.lessonsLearned} />
      </div>
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
