"use client";

import { useState } from "react";

import { Card, SectionLabel } from "@/components/ui";
import { today } from "@/data/mock/life-os";
import { cn } from "@/lib/utils";

export default function TodayPage() {
  const [selectedMood, setSelectedMood] = useState(today.checkIn.defaultMood);
  const [energy, setEnergy] = useState(today.checkIn.energy);
  const [stress, setStress] = useState(today.checkIn.stress);
  const [focus, setFocus] = useState(today.checkIn.focus);
  const [sleepHours, setSleepHours] = useState(today.checkIn.sleepHours);
  const [checkedTasks, setCheckedTasks] = useState<number[]>([0]);
  const [checkedHabits, setCheckedHabits] = useState<number[]>([0, 2]);
  const [waterGlasses, setWaterGlasses] = useState(today.bodyCare.waterDefault);
  const [workoutDone, setWorkoutDone] = useState(false);
  const [gratitude, setGratitude] = useState(today.reflection.gratitude);
  const [learned, setLearned] = useState(today.reflection.learned);
  const [improveTomorrow, setImproveTomorrow] = useState(
    today.reflection.improveTomorrow,
  );

  const taskTotal = today.planning.tasks.length;
  const habitTotal = today.planning.habits.length;

  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-normal text-muted">
            {today.header.eyebrow}
          </p>
          <h2 className="mt-3 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            {today.header.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            {today.header.dateLabel}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            {today.header.intent}
          </p>
        </div>

        <button
          type="button"
          className="h-11 w-full rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          {today.header.actionLabel}
        </button>
      </header>

      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <SectionLabel>Mood check-in</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                How are you arriving today?
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">Reset on refresh</p>
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-5">
            {today.checkIn.moodOptions.map((mood) => {
              const active = selectedMood === mood;

              return (
                <button
                  key={mood}
                  type="button"
                  onClick={() => setSelectedMood(mood)}
                  className={cn(
                    "h-11 rounded-md border px-3 font-mono text-xs transition",
                    active
                      ? "border-accent bg-accent text-on-primary"
                      : "border-border bg-background text-muted hover:text-foreground",
                  )}
                  aria-pressed={active}
                >
                  {mood}
                </button>
              );
            })}
          </div>
        </Card>

        <Card>
          <SectionLabel>Sleep</SectionLabel>
          <div className="mt-4 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-3xl font-medium text-foreground">
                {sleepHours.toFixed(1)}
                <span className="ml-1 text-base text-muted">hours</span>
              </p>
              <p className="mt-2 text-sm text-muted">Last night</p>
            </div>
            <div className="flex items-center rounded-md border border-border">
              <button
                type="button"
                onClick={() =>
                  setSleepHours((value) => Math.max(0, roundHalf(value - 0.5)))
                }
                className="size-11 font-mono text-sm text-muted transition hover:text-foreground"
                aria-label="Decrease sleep hours"
              >
                -
              </button>
              <input
                value={sleepHours}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  setSleepHours(Number.isFinite(value) ? value : 0);
                }}
                type="number"
                min="0"
                max="16"
                step="0.25"
                className="h-11 w-20 border-x border-border bg-background px-2 text-center font-mono text-sm text-foreground outline-none"
                aria-label="Sleep hours"
              />
              <button
                type="button"
                onClick={() =>
                  setSleepHours((value) => Math.min(16, roundHalf(value + 0.5)))
                }
                className="size-11 font-mono text-sm text-muted transition hover:text-foreground"
                aria-label="Increase sleep hours"
              >
                +
              </button>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <RangeMetric
          label="Energy"
          value={energy}
          detail="Available effort"
          onChange={setEnergy}
        />
        <RangeMetric
          label="Stress"
          value={stress}
          detail="Internal pressure"
          onChange={setStress}
        />
        <RangeMetric
          label="Focus"
          value={focus}
          detail="Attention quality"
          onChange={setFocus}
        />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="flex min-h-80 flex-col">
          <SectionLabel>Main goal for today</SectionLabel>
          <h3 className="mt-4 font-mono text-2xl font-medium leading-snug text-foreground">
            {today.planning.mainGoal.title}
          </h3>
          <p className="mt-5 text-sm leading-6 text-muted">
            {today.planning.mainGoal.detail}
          </p>
          <div className="mt-auto pt-8">
            <div className="h-2 rounded-sm bg-background">
              <div className="h-full w-2/3 rounded-sm bg-foreground" />
            </div>
            <p className="mt-3 font-mono text-xs text-muted">
              Keep the plan narrow enough to finish.
            </p>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <SectionLabel>Top 3 tasks</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                {checkedTasks.length} of {taskTotal} complete
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">Today only</p>
          </div>

          <div className="mt-6 space-y-3">
            {today.planning.tasks.map((task, index) => (
              <CheckRow
                key={task.title}
                title={task.title}
                detail={task.meta}
                checked={checkedTasks.includes(index)}
                onChange={() => setCheckedTasks(toggleIndex(index))}
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <SectionLabel>Habit checklist</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                {checkedHabits.length} of {habitTotal} done
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">Cadence / streak</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {today.planning.habits.map((habit, index) => (
              <CheckRow
                key={habit.title}
                title={habit.title}
                detail={`${habit.cadence} / ${habit.streak} day streak`}
                checked={checkedHabits.includes(index)}
                onChange={() => setCheckedHabits(toggleIndex(index))}
              />
            ))}
          </div>
        </Card>

        <Card>
          <SectionLabel>Water intake</SectionLabel>
          <div className="mt-4 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-3xl font-medium text-foreground">
                {waterGlasses}
                <span className="ml-1 text-base text-muted">
                  / {today.bodyCare.waterTarget}
                </span>
              </p>
              <p className="mt-2 text-sm text-muted">Glasses today</p>
            </div>
            <div className="flex rounded-md border border-border">
              <button
                type="button"
                onClick={() =>
                  setWaterGlasses((value) => Math.max(0, value - 1))
                }
                className="size-11 font-mono text-sm text-muted transition hover:text-foreground"
                aria-label="Decrease water"
              >
                -
              </button>
              <button
                type="button"
                onClick={() =>
                  setWaterGlasses((value) =>
                    Math.min(today.bodyCare.waterTarget, value + 1),
                  )
                }
                className="size-11 border-l border-border font-mono text-sm text-muted transition hover:text-foreground"
                aria-label="Increase water"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-8 gap-2">
            {Array.from({ length: today.bodyCare.waterTarget }, (_, index) => {
              const glassNumber = index + 1;
              const active = glassNumber <= waterGlasses;

              return (
                <button
                  key={glassNumber}
                  type="button"
                  onClick={() => setWaterGlasses(glassNumber)}
                  className={cn(
                    "h-11 rounded-sm border font-mono text-xs transition",
                    active
                      ? "border-accent bg-accent text-on-primary"
                      : "border-border bg-background text-muted hover:text-foreground",
                  )}
                  aria-label={`Set water to ${glassNumber} glasses`}
                  aria-pressed={active}
                >
                  {glassNumber}
                </button>
              );
            })}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <SectionLabel>Workout today</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                {today.bodyCare.workout.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setWorkoutDone((value) => !value)}
              className={cn(
                "h-11 rounded-md border px-5 font-mono text-xs transition",
                workoutDone
                  ? "border-accent bg-accent text-on-primary"
                  : "border-border bg-background text-muted hover:text-foreground",
              )}
              aria-pressed={workoutDone}
            >
              {workoutDone ? "Done" : "Mark done"}
            </button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <DetailBlock label="Focus" text={today.bodyCare.workout.focus} />
            <DetailBlock
              label="Duration"
              text={today.bodyCare.workout.duration}
            />
          </div>
          <div className="mt-5 border-t border-border pt-5">
            <SectionLabel>Plan</SectionLabel>
            <p className="mt-3 text-sm leading-6 text-muted">
              {today.bodyCare.workout.plan}
            </p>
          </div>
        </Card>

        <Card>
          <SectionLabel>Reflection</SectionLabel>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <ReflectionField
              label="Gratitude"
              value={gratitude}
              onChange={setGratitude}
            />
            <ReflectionField
              label="One thing learned"
              value={learned}
              onChange={setLearned}
            />
            <ReflectionField
              label="Improve tomorrow"
              value={improveTomorrow}
              onChange={setImproveTomorrow}
            />
          </div>
        </Card>
      </div>
    </>
  );
}

function RangeMetric({
  label,
  value,
  detail,
  onChange,
}: {
  label: string;
  value: number;
  detail: string;
  onChange: (value: number) => void;
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <SectionLabel>{label}</SectionLabel>
          <p className="mt-4 font-mono text-3xl font-medium text-foreground">
            {value}
            <span className="ml-1 text-base text-muted">/10</span>
          </p>
        </div>
        <p className="font-mono text-xs text-muted">{detail}</p>
      </div>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-6 h-2 w-full cursor-pointer accent-accent"
        aria-label={label}
      />
    </Card>
  );
}

function CheckRow({
  title,
  detail,
  checked,
  onChange,
}: {
  title: string;
  detail: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex min-h-16 cursor-pointer items-start gap-3 rounded-md border border-border bg-background p-4 transition hover:text-foreground">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-1 size-4 shrink-0 accent-accent"
      />
      <span className="min-w-0">
        <span
          className={cn(
            "block font-mono text-sm leading-5",
            checked ? "text-foreground" : "text-muted",
          )}
        >
          {title}
        </span>
        <span className="mt-1 block text-sm leading-6 text-muted">{detail}</span>
      </span>
    </label>
  );
}

function ReflectionField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-normal text-muted">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={7}
        className="mt-3 min-h-40 w-full resize-none rounded-md border border-border bg-background p-4 text-sm leading-6 text-foreground outline-none transition placeholder:text-muted focus:border-accent"
      />
    </label>
  );
}

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-t border-border pt-4 first:border-t-0 first:pt-0 sm:first:border-t sm:first:pt-4">
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}

function toggleIndex(index: number) {
  return (values: number[]) =>
    values.includes(index)
      ? values.filter((value) => value !== index)
      : [...values, index];
}

function roundHalf(value: number) {
  return Math.round(value * 2) / 2;
}
