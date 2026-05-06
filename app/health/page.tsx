"use client";

import {
  Activity,
  Droplets,
  HeartPulse,
  Moon,
  Ruler,
  Scale,
  ShieldCheck,
  Soup,
  Stethoscope,
  Target,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import dynamic from "next/dynamic";

import { Card, SectionLabel } from "@/components/ui";
import { healthPageData } from "@/data/mock/health";
import { cn } from "@/lib/utils";

type OverviewMetric = (typeof healthPageData.overview)[number];
type Measurement = (typeof healthPageData.bodyMeasurements)[number];
type HealthGoal = (typeof healthPageData.goals)[number];

const SleepChart = dynamic(
  () => import("./health-charts").then((module) => module.SleepChart),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  },
);

const WeightChart = dynamic(
  () => import("./health-charts").then((module) => module.WeightChart),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  },
);

const ReadinessChart = dynamic(
  () => import("./health-charts").then((module) => module.ReadinessChart),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  },
);

export default function HealthPage() {
  const hydrationProgress = Math.round(
    (healthPageData.hydration.current / healthPageData.hydration.target) * 100,
  );
  const stepsProgress = Math.round(
    (healthPageData.steps.current / healthPageData.steps.target) * 100,
  );

  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md border border-border text-accent">
              <HeartPulse size={18} strokeWidth={1.8} />
            </span>
            <p className="font-mono text-xs uppercase tracking-normal text-muted">
              {healthPageData.header.eyebrow}
            </p>
          </div>
          <h2 className="mt-4 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            {healthPageData.header.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            {healthPageData.header.dateLabel}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            {healthPageData.header.description}
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          <HeartPulse size={16} strokeWidth={2} />
          {healthPageData.header.actionLabel}
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
        {healthPageData.overview.map((metric) => (
          <OverviewCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <SectionHeader
            label="Sleep tracker"
            title="Recovery starts with the night before."
            icon={Moon}
            meta={healthPageData.sleep.target}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <SmallStat
              label="Average sleep"
              value={healthPageData.sleep.average}
              detail="Seven day mean"
            />
            <SmallStat
              label="Sleep quality"
              value={healthPageData.sleep.quality}
              detail="Subjective score"
            />
            <SmallStat
              label="Read"
              value="7 days"
              detail="Current window"
            />
          </div>
          <SleepChart data={healthPageData.sleep.trend} />
          <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-muted">
            {healthPageData.sleep.insight}
          </p>
        </Card>

        <Card>
          <SectionHeader
            label="Weight tracker"
            title="Slow trend, low drama."
            icon={Scale}
            meta={healthPageData.weight.target}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <SmallStat
              label="Current weight"
              value={healthPageData.weight.current}
              detail={healthPageData.weight.change}
            />
            <SmallStat
              label="Target"
              value="80.0kg"
              detail="Steady cut"
            />
          </div>
          <WeightChart data={healthPageData.weight.trend} />
          <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-muted">
            {healthPageData.weight.note}
          </p>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
          <ProgressTracker
            icon={Droplets}
            label="Water intake"
            value={`${healthPageData.hydration.current}/${healthPageData.hydration.target}`}
            unit={healthPageData.hydration.unit}
            progress={hydrationProgress}
            note={healthPageData.hydration.note}
            rows={healthPageData.hydration.week.map((day) => ({
              label: day.day,
              value: `${day.value}`,
              progress: Math.round(
                (day.value / healthPageData.hydration.target) * 100,
              ),
            }))}
          />
          <ProgressTracker
            icon={Activity}
            label="Steps"
            value={formatNumber(healthPageData.steps.current)}
            unit={`${formatNumber(healthPageData.steps.target)} target`}
            progress={stepsProgress}
            note={healthPageData.steps.note}
            rows={healthPageData.steps.week.map((day) => ({
              label: day.day,
              value: formatNumber(day.value),
              progress: Math.round(
                (day.value / healthPageData.steps.target) * 100,
              ),
            }))}
          />
        </div>

        <Card>
          <SectionHeader
            label="Energy, stress, recovery"
            title="The body is ready enough, not unlimited."
            icon={ShieldCheck}
            meta="Seven day trend"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <SmallStat
              label="Energy level"
              value={`${healthPageData.readiness.energy}/10`}
              detail="Available effort"
            />
            <SmallStat
              label="Stress level"
              value={`${healthPageData.readiness.stress}/10`}
              detail="Internal pressure"
            />
            <SmallStat
              label="Recovery score"
              value={`${healthPageData.readiness.recovery}%`}
              detail="Training readiness"
            />
          </div>
          <ReadinessChart data={healthPageData.readiness.trend} />
          <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-muted">
            {healthPageData.readiness.note}
          </p>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <SectionHeader
            label="Body measurements"
            title="Useful markers, not a verdict."
            icon={Ruler}
            meta={`${healthPageData.bodyMeasurements.length} markers`}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {healthPageData.bodyMeasurements.map((measurement) => (
              <MeasurementCard
                key={measurement.label}
                measurement={measurement}
              />
            ))}
          </div>
        </Card>

        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-1">
          <NotesCard
            label="Nutrition notes"
            title="Keep food practical and repeatable."
            icon={Soup}
            items={healthPageData.nutritionNotes}
          />
          <MedicalNotesCard />
        </div>
      </div>

      <Card className="mt-4">
        <SectionHeader
          label="Health goals"
          title="Goals that support discipline without adding pressure."
          icon={Target}
          meta={`${healthPageData.goals.length} active`}
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {healthPageData.goals.map((goal) => (
            <GoalCard key={goal.title} goal={goal} />
          ))}
        </div>
      </Card>

      <Card className="mt-4">
        <SectionHeader
          label="Health insights"
          title="Read the pattern before changing the plan."
          icon={TrendingUp}
          meta="Current read"
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {healthPageData.insights.map((insight, index) => (
            <div
              key={insight}
              className="border-t border-border pt-4 lg:border-t-0 lg:border-l lg:pl-5 lg:pt-0 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="font-mono text-sm text-foreground">
                Insight {index + 1}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">{insight}</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

function OverviewCard({ metric }: { metric: OverviewMetric }) {
  return (
    <Card>
      <SectionLabel>{metric.label}</SectionLabel>
      <p
        className={cn(
          "mt-4 font-mono text-2xl font-medium leading-tight",
          metric.tone === "accent"
            ? "text-accent"
            : metric.tone === "muted"
              ? "text-muted"
              : "text-foreground",
        )}
      >
        {metric.value}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{metric.detail}</p>
    </Card>
  );
}

function SectionHeader({
  label,
  title,
  icon: Icon,
  meta,
}: {
  label: string;
  title: string;
  icon: LucideIcon;
  meta: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <SectionLabel>{label}</SectionLabel>
        <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
          {title}
        </h3>
      </div>
      <div className="flex items-center gap-3 text-muted">
        <p className="font-mono text-xs">{meta}</p>
        <Icon size={18} strokeWidth={1.8} />
      </div>
    </div>
  );
}

function SmallStat({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-3 font-mono text-xl font-medium text-foreground">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
    </div>
  );
}

function ProgressTracker({
  icon: Icon,
  label,
  value,
  unit,
  progress,
  note,
  rows,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  unit: string;
  progress: number;
  note: string;
  rows: Array<{
    label: string;
    value: string;
    progress: number;
  }>;
}) {
  return (
    <Card>
      <SectionHeader label={label} title={value} icon={Icon} meta={unit} />
      <div className="mt-6 h-2 rounded-sm bg-background">
        <div
          className="h-full rounded-sm bg-accent"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{note}</p>
      <div className="mt-6 grid gap-3">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-xs text-foreground">{row.label}</p>
              <p className="font-mono text-xs text-muted">{row.value}</p>
            </div>
            <div className="mt-2 h-1.5 rounded-sm bg-background">
              <div
                className="h-full rounded-sm bg-foreground"
                style={{ width: `${Math.min(row.progress, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function MeasurementCard({ measurement }: { measurement: Measurement }) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <SectionLabel>{measurement.label}</SectionLabel>
      <p className="mt-3 font-mono text-xl font-medium text-foreground">
        {measurement.value}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted">
        {measurement.change}
      </p>
    </div>
  );
}

function NotesCard({
  label,
  title,
  icon,
  items,
}: {
  label: string;
  title: string;
  icon: LucideIcon;
  items: Array<{
    title: string;
    detail: string;
  }>;
}) {
  return (
    <Card>
      <SectionHeader label={label} title={title} icon={icon} meta="Mock notes" />
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="border-t border-border pt-4 first:border-t-0 first:pt-0"
          >
            <p className="font-mono text-sm text-foreground">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function MedicalNotesCard() {
  return (
    <Card>
      <SectionHeader
        label="Medical notes"
        title="Practical notes to follow up."
        icon={Stethoscope}
        meta="Private log"
      />
      <div className="mt-6 space-y-4">
        {healthPageData.medicalNotes.map((note) => (
          <div
            key={note.title}
            className="border-t border-border pt-4 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <p className="font-mono text-sm text-foreground">{note.title}</p>
              <p className="font-mono text-xs text-muted">{note.date}</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">{note.detail}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function GoalCard({ goal }: { goal: HealthGoal }) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-sm leading-5 text-foreground">
            {goal.title}
          </p>
          <p className="mt-2 font-mono text-xs text-muted">{goal.status}</p>
        </div>
        <p className="font-mono text-sm text-muted">{goal.progress}%</p>
      </div>
      <div className="mt-4 h-2 rounded-sm bg-surface">
        <div
          className="h-full rounded-sm bg-foreground"
          style={{ width: `${goal.progress}%` }}
        />
      </div>
      <div className="mt-5 grid gap-4">
        <div className="border-t border-border pt-4">
          <SectionLabel>Why it matters</SectionLabel>
          <p className="mt-3 text-sm leading-6 text-muted">{goal.why}</p>
        </div>
        <div className="border-t border-border pt-4">
          <SectionLabel>Next action</SectionLabel>
          <p className="mt-3 text-sm leading-6 text-muted">
            {goal.nextAction}
          </p>
        </div>
      </div>
    </div>
  );
}

function ChartLoading() {
  return (
    <div className="mt-6 h-72 min-h-72 w-full min-w-0">
      <div className="flex h-full items-center justify-center rounded-md border border-border bg-background">
        <p className="font-mono text-xs text-muted">Loading chart</p>
      </div>
    </div>
  );
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}
