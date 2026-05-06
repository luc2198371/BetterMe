"use client";

import { useState } from "react";

import { Card, SectionLabel } from "@/components/ui";
import { weeklyReview } from "@/data/mock/life-os";
import { cn } from "@/lib/utils";

type ReviewField = keyof typeof weeklyReview.formDefaults;
type HabitReview = (typeof weeklyReview.habitCompletion)[number];
type DayReview = (typeof weeklyReview.days)[number];

const reviewFields: Array<{
  key: ReviewField;
  label: string;
}> = [
  {
    key: "wentWell",
    label: "What went well this week?",
  },
  {
    key: "wentWrong",
    label: "What went wrong?",
  },
  {
    key: "learned",
    label: "What did I learn?",
  },
  {
    key: "hardestHabit",
    label: "What habit was hardest?",
  },
  {
    key: "proudOf",
    label: "What am I proud of?",
  },
  {
    key: "improveNextWeek",
    label: "What should I improve next week?",
  },
  {
    key: "mainFocusNextWeek",
    label: "What is my main focus next week?",
  },
];

export default function WeeklyReviewPage() {
  const [review, setReview] = useState(weeklyReview.formDefaults);

  const setReviewField = (field: ReviewField, value: string) => {
    setReview((current) => ({
      ...current,
      [field]: value,
    }));
  };

  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-normal text-muted">
            {weeklyReview.header.eyebrow}
          </p>
          <h2 className="mt-3 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            {weeklyReview.header.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            {weeklyReview.header.dateLabel}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            {weeklyReview.header.description}
          </p>
        </div>

        <button
          type="button"
          className="h-11 w-full rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          {weeklyReview.header.actionLabel}
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryMetric
          label="Weekly habit completion"
          value={`${weeklyReview.summary.habitCompletion}%`}
          detail={weeklyReview.summary.habitDetail}
        />
        <SummaryMetric
          label="Gym sessions completed"
          value={`${weeklyReview.summary.gymSessionsCompleted}/${weeklyReview.summary.gymSessionTarget}`}
          detail="Strength and recovery work"
        />
        <SummaryMetric
          label="Mood average"
          value={weeklyReview.summary.moodAverage}
          detail={weeklyReview.summary.moodDetail}
        />
        <SummaryMetric
          label="Next week focus"
          value="1"
          detail={weeklyReview.summary.nextWeekFocus}
        />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
        <Card>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Review prompts</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                Write the week clearly before planning the next one.
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">Local state only</p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {reviewFields.map((field) => (
              <ReviewTextarea
                key={field.key}
                label={field.label}
                value={review[field.key]}
                onChange={(value) => setReviewField(field.key, value)}
                large={field.key === "mainFocusNextWeek"}
              />
            ))}
          </div>
        </Card>

        <div className="grid gap-4">
          <SpotlightCard
            label="Best day"
            title={weeklyReview.summary.bestDay}
            text={weeklyReview.summary.bestDayDetail}
          />
          <SpotlightCard
            label="Hardest day"
            title={weeklyReview.summary.hardestDay}
            text={weeklyReview.summary.hardestDayDetail}
          />
          <SpotlightCard
            label="Main lesson"
            title="What the week taught"
            text={weeklyReview.summary.mainLesson}
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Weekly habit completion</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                {weeklyReview.summary.habitCompletion}% across the core habits
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">Tracked checks</p>
          </div>

          <div className="mt-6 space-y-5">
            {weeklyReview.habitCompletion.map((habit) => (
              <HabitProgress key={habit.title} habit={habit} />
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Week by day</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                Best day, hardest day, and the days between.
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">Mood / score</p>
          </div>

          <div className="mt-6 grid gap-3">
            {weeklyReview.days.map((day) => (
              <DayRow key={day.day} day={day} />
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-4">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <SectionLabel>Next week focus</SectionLabel>
            <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
              {review.mainFocusNextWeek}
            </h3>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <ReflectionBlock
              label="Main lesson"
              text={weeklyReview.summary.mainLesson}
            />
            <ReflectionBlock
              label="Improve next week"
              text={review.improveNextWeek}
            />
          </div>
        </div>
      </Card>
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

function ReviewTextarea({
  label,
  value,
  onChange,
  large,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  large: boolean;
}) {
  return (
    <label
      className={cn(
        "block",
        large && "lg:col-span-2",
      )}
    >
      <span className="font-mono text-xs uppercase tracking-normal text-muted">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={large ? 4 : 6}
        className="mt-3 min-h-36 w-full resize-none rounded-md border border-border bg-background p-4 text-sm leading-6 text-foreground outline-none transition placeholder:text-muted focus:border-accent"
      />
    </label>
  );
}

function SpotlightCard({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <Card>
      <SectionLabel>{label}</SectionLabel>
      <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-muted">{text}</p>
    </Card>
  );
}

function HabitProgress({ habit }: { habit: HabitReview }) {
  const percent = Math.round((habit.completed / habit.target) * 100);

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-mono text-sm text-foreground">{habit.title}</p>
            <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.68rem] text-muted">
              {habit.category}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-muted">{habit.insight}</p>
        </div>
        <p className="shrink-0 font-mono text-sm text-muted">
          {habit.completed}/{habit.target}
        </p>
      </div>
      <div className="mt-3 h-2 rounded-sm bg-background">
        <div
          className="h-full rounded-sm bg-foreground"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function DayRow({ day }: { day: DayReview }) {
  const isBestDay = day.day === weeklyReview.summary.bestDay.slice(0, 3);
  const isHardestDay = day.day === weeklyReview.summary.hardestDay.slice(0, 3);

  return (
    <div
      className={cn(
        "rounded-md border bg-background p-4",
        isBestDay || isHardestDay ? "border-foreground" : "border-border",
      )}
    >
      <div className="grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-start">
        <div className="flex size-12 items-center justify-center rounded-md border border-border font-mono text-sm text-foreground">
          {day.day}
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-mono text-sm text-foreground">{day.mood}</p>
            {isBestDay ? (
              <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.68rem] text-muted">
                Best day
              </span>
            ) : null}
            {isHardestDay ? (
              <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.68rem] text-muted">
                Hardest day
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-6 text-muted">{day.detail}</p>
        </div>
        <p className="font-mono text-sm text-muted">{day.score}/10</p>
      </div>
    </div>
  );
}

function ReflectionBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-t border-border pt-4 md:border-t-0 md:border-l md:pl-5 md:pt-0 md:first:border-l-0 md:first:pl-0">
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
