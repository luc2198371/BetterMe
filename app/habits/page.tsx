"use client";

import { useState } from "react";

import { Card, SectionLabel } from "@/components/ui";
import { habitsDashboard } from "@/data/mock/life-os";
import { cn } from "@/lib/utils";

type Habit = (typeof habitsDashboard.habits)[number];

export default function HabitsPage() {
  const [completedToday, setCompletedToday] = useState<string[]>(
    habitsDashboard.habits
      .filter((habit) => habit.todayDone)
      .map((habit) => habit.id),
  );

  const habitCount = habitsDashboard.habits.length;
  const doneToday = completedToday.length;
  const weeklyConsistency = Math.round(
    (habitsDashboard.habits.reduce(
      (total, habit) => total + habit.week.filter(Boolean).length,
      0,
    ) /
      (habitCount * habitsDashboard.weekLabels.length)) *
      100,
  );
  const monthlyConsistency = Math.round(
    (habitsDashboard.monthlyCalendar.completedDays.length /
      habitsDashboard.monthlyCalendar.daysInMonth) *
      100,
  );
  const activeStreakTotal = habitsDashboard.habits.reduce(
    (total, habit) =>
      completedToday.includes(habit.id) ? total + habit.streak : total,
    0,
  );

  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-normal text-muted">
            {habitsDashboard.header.eyebrow}
          </p>
          <h2 className="mt-3 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            {habitsDashboard.header.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            {habitsDashboard.header.dateLabel}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            {habitsDashboard.header.description}
          </p>
        </div>

        <button
          type="button"
          className="h-11 w-full rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          {habitsDashboard.header.actionLabel}
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryMetric
          label="Done today"
          value={`${doneToday}/${habitCount}`}
          detail="Daily checkboxes"
        />
        <SummaryMetric
          label="Active streak total"
          value={`${activeStreakTotal}`}
          detail="Checked habits only"
        />
        <SummaryMetric
          label="Weekly consistency"
          value={`${weeklyConsistency}%`}
          detail="Across all habits"
        />
        <SummaryMetric
          label="Monthly consistency"
          value={`${monthlyConsistency}%`}
          detail={habitsDashboard.monthlyCalendar.label}
        />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Habit list</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                Today is {doneToday} of {habitCount} complete
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">Local state only</p>
          </div>

          <div className="mt-6 space-y-3">
            {habitsDashboard.habits.map((habit) => (
              <HabitRow
                key={habit.id}
                habit={habit}
                checked={completedToday.includes(habit.id)}
                onToggle={() => setCompletedToday(toggleHabit(habit.id))}
              />
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <SectionLabel>Weekly consistency</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                {weeklyConsistency}% this week
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">7 day window</p>
          </div>

          <div className="mt-6 space-y-5">
            {habitsDashboard.habits.map((habit) => {
              const completed = habit.week.filter(Boolean).length;
              const percent = Math.round(
                (completed / habitsDashboard.weekLabels.length) * 100,
              );

              return (
                <div key={habit.id}>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-sm text-foreground">
                      {habit.title}
                    </p>
                    <p className="font-mono text-sm text-muted">{percent}%</p>
                  </div>
                  <div className="mt-3 h-2 rounded-sm bg-background">
                    <div
                      className="h-full rounded-sm bg-foreground"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    {completed} of {habitsDashboard.weekLabels.length} days
                  </p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <SectionLabel>Monthly calendar</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                {habitsDashboard.monthlyCalendar.label}
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">
              {monthlyConsistency}% complete
            </p>
          </div>

          <MonthlyCalendar />
        </Card>

        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-1">
          <SpotlightCard
            label="Best habit"
            title={habitsDashboard.bestHabit.title}
            value={habitsDashboard.bestHabit.value}
            detail={habitsDashboard.bestHabit.detail}
            reason={habitsDashboard.bestHabit.reason}
            nextAction={habitsDashboard.bestHabit.nextAction}
          />
          <SpotlightCard
            label="Weakest habit"
            title={habitsDashboard.weakestHabit.title}
            value={habitsDashboard.weakestHabit.value}
            detail={habitsDashboard.weakestHabit.detail}
            reason={habitsDashboard.weakestHabit.reason}
            nextAction={habitsDashboard.weakestHabit.nextAction}
          />
        </div>
      </div>

      <Card className="mt-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Habit insights</SectionLabel>
            <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
              Practical read on the pattern
            </h3>
          </div>
          <p className="font-mono text-xs text-muted">No scoring pressure</p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {habitsDashboard.insights.map((insight, index) => (
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
      <p className="mt-2 text-sm text-muted">{detail}</p>
    </Card>
  );
}

function HabitRow({
  habit,
  checked,
  onToggle,
}: {
  habit: Habit;
  checked: boolean;
  onToggle: () => void;
}) {
  const weekCompleted = habit.week.filter(Boolean).length;
  const weekPercent = Math.round(
    (weekCompleted / habitsDashboard.weekLabels.length) * 100,
  );

  return (
    <label className="block cursor-pointer rounded-md border border-border bg-background p-4 transition hover:text-foreground">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="flex min-w-0 items-start gap-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={onToggle}
            className="mt-1 size-4 shrink-0 accent-foreground"
          />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p
                className={cn(
                  "font-mono text-sm leading-5",
                  checked ? "text-foreground" : "text-muted",
                )}
              >
                {habit.title}
              </p>
              <p className="font-mono text-xs text-muted">{habit.category}</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">{habit.target}</p>
            <p className="mt-2 font-mono text-xs text-muted">
              {habit.cadence} / {habit.insight}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-[auto_minmax(11rem,1fr)] sm:items-center lg:w-80">
          <div className="rounded-md border border-border px-4 py-3">
            <p className="font-mono text-2xl font-medium text-foreground">
              {habit.streak}
            </p>
            <p className="mt-1 font-mono text-xs text-muted">day streak</p>
          </div>
          <div>
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-xs text-muted">{weekPercent}% week</p>
              <p className="font-mono text-xs text-muted">
                {weekCompleted}/{habitsDashboard.weekLabels.length}
              </p>
            </div>
            <div className="mt-3 grid grid-cols-7 gap-1">
              {habit.week.map((done, index) => (
                <div key={`${habit.id}-${habitsDashboard.weekLabels[index]}`}>
                  <div
                    className={cn(
                      "h-7 rounded-sm border",
                      done
                        ? "border-foreground bg-foreground"
                        : "border-border bg-surface",
                    )}
                    title={habitsDashboard.weekLabels[index]}
                  />
                  <p className="mt-1 text-center font-mono text-[0.62rem] text-muted">
                    {habitsDashboard.weekLabels[index].slice(0, 1)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}

function MonthlyCalendar() {
  const { daysInMonth, startsOn, today, completedDays } =
    habitsDashboard.monthlyCalendar;
  const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const calendarCells = [
    ...Array.from({ length: startsOn }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];

  return (
    <div className="mt-6">
      <div className="grid grid-cols-7 gap-2">
        {weekdayLabels.map((label) => (
          <p
            key={label}
            className="text-center font-mono text-[0.68rem] uppercase text-muted"
          >
            {label}
          </p>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-2">
        {calendarCells.map((day, index) => {
          const completed = day ? completedDays.includes(day) : false;
          const current = day === today;

          return (
            <div
              key={day ?? `empty-${index}`}
              className={cn(
                "flex aspect-square min-h-10 items-center justify-center rounded-sm border font-mono text-xs",
                day
                  ? completed
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-muted"
                  : "border-transparent bg-transparent",
                current && "outline outline-1 outline-offset-2 outline-border",
              )}
            >
              {day}
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex flex-wrap gap-4 font-mono text-xs text-muted">
        <span>{completedDays.length} complete days</span>
        <span>{daysInMonth - completedDays.length} lighter days</span>
      </div>
    </div>
  );
}

function SpotlightCard({
  label,
  title,
  value,
  detail,
  reason,
  nextAction,
}: {
  label: string;
  title: string;
  value: string;
  detail: string;
  reason: string;
  nextAction: string;
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <SectionLabel>{label}</SectionLabel>
          <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
            {title}
          </h3>
        </div>
        <div className="rounded-md border border-border px-4 py-3 text-right">
          <p className="font-mono text-2xl font-medium text-foreground">
            {value}
          </p>
          <p className="mt-1 font-mono text-xs text-muted">{detail}</p>
        </div>
      </div>
      <div className="mt-6 border-t border-border pt-5">
        <SectionLabel>Reason</SectionLabel>
        <p className="mt-3 text-sm leading-6 text-muted">{reason}</p>
      </div>
      <div className="mt-5 border-t border-border pt-5">
        <SectionLabel>Next action</SectionLabel>
        <p className="mt-3 text-sm leading-6 text-foreground">{nextAction}</p>
      </div>
    </Card>
  );
}

function toggleHabit(id: string) {
  return (values: string[]) =>
    values.includes(id)
      ? values.filter((value) => value !== id)
      : [...values, id];
}
