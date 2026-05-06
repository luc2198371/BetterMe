"use client";

import {
  Activity,
  CalendarCheck,
  Dumbbell,
  Flame,
  HeartPulse,
  Target,
  Timer,
  TrendingUp,
} from "lucide-react";
import dynamic from "next/dynamic";

import { Card, SectionLabel } from "@/components/ui";
import { gymDashboard } from "@/data/mock/life-os";
import { cn } from "@/lib/utils";

type WorkoutLog = (typeof gymDashboard.workoutLog)[number];
type Exercise = WorkoutLog["exercises"][number];
type TrainingGoal = (typeof gymDashboard.goals)[number];

const StrengthChart = dynamic(
  () => import("./training-charts").then((module) => module.StrengthChart),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  },
);

const ConsistencyChart = dynamic(
  () => import("./training-charts").then((module) => module.ConsistencyChart),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  },
);

export default function GymPage() {
  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md border border-border text-accent">
              <Dumbbell size={18} strokeWidth={1.8} />
            </span>
            <p className="font-mono text-xs uppercase tracking-normal text-muted">
              {gymDashboard.header.eyebrow}
            </p>
          </div>
          <h2 className="mt-4 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            {gymDashboard.header.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            {gymDashboard.header.dateLabel}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            {gymDashboard.header.description}
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          <Dumbbell size={16} strokeWidth={2} />
          {gymDashboard.header.actionLabel}
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <OverviewMetric
          label="Current training split"
          value={gymDashboard.overview.split}
          detail="Four day rhythm"
          icon={Dumbbell}
        />
        <OverviewMetric
          label="Weekly workout completion"
          value={`${gymDashboard.overview.completedWorkouts}/${gymDashboard.overview.plannedWorkouts}`}
          detail={`${gymDashboard.overview.weeklyCompletion}% complete`}
          icon={CalendarCheck}
        />
        <OverviewMetric
          label="Current gym streak"
          value={`${gymDashboard.overview.streak}`}
          detail="Sessions kept in rhythm"
          icon={Flame}
        />
        <OverviewMetric
          label="Average workout duration"
          value={gymDashboard.overview.averageDuration}
          detail="Useful, repeatable sessions"
          icon={Timer}
        />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="flex min-h-full flex-col">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <SectionLabel>Training goal</SectionLabel>
              <h3 className="mt-3 font-mono text-2xl font-medium leading-snug text-foreground">
                {gymDashboard.overview.trainingGoal}
              </h3>
            </div>
            <div className="rounded-md border border-border px-4 py-3 text-left sm:text-right">
              <p className="font-mono text-2xl font-medium text-foreground">
                {gymDashboard.overview.monthlyConsistency}%
              </p>
              <p className="mt-1 font-mono text-xs text-muted">
                monthly consistency
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <WorkoutSnapshot
              label="Last workout"
              title={gymDashboard.overview.lastWorkout.title}
              date={gymDashboard.overview.lastWorkout.date}
              duration={gymDashboard.overview.lastWorkout.duration}
              focus={gymDashboard.overview.lastWorkout.focus}
            />
            <WorkoutSnapshot
              label="Next workout"
              title={gymDashboard.overview.nextWorkout.title}
              date={gymDashboard.overview.nextWorkout.date}
              duration={gymDashboard.overview.nextWorkout.duration}
              focus={gymDashboard.overview.nextWorkout.focus}
            />
          </div>
        </Card>

        <Card>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Weekly workout completion</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                Four sessions completed. Recovery stays protected.
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">Week view</p>
          </div>

          <div className="mt-6 grid gap-3">
            {gymDashboard.weeklyWorkouts.map((workout) => (
              <WeeklyWorkoutRow key={workout.day} workout={workout} />
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Current training split</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                Simple enough to repeat, complete enough to progress.
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">
              {gymDashboard.trainingSplit.length} blocks
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {gymDashboard.trainingSplit.map((split) => (
              <div
                key={split.day}
                className="border-t border-border pt-4 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <p className="font-mono text-sm text-foreground">
                    {split.day}
                  </p>
                  <p className="font-mono text-xs text-muted">{split.focus}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {split.intent}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Strength progress</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                Key lifts are moving steadily.
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">Top sets / kg</p>
          </div>

          <StrengthChart data={gymDashboard.strengthProgress} />
        </Card>
      </div>

      <Card className="mt-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Workout log</SectionLabel>
            <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
              Recent sessions with working details.
            </h3>
          </div>
          <p className="font-mono text-xs text-muted">
            Sets / reps / weight / RPE / rest
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {gymDashboard.workoutLog.map((workout) => (
            <WorkoutLogCard key={`${workout.date}-${workout.workout}`} workout={workout} />
          ))}
        </div>
      </Card>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Monthly consistency</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                Completion and duration are stable enough to build on.
              </h3>
            </div>
            <p className="font-mono text-xs text-muted">Six week trend</p>
          </div>

          <ConsistencyChart data={gymDashboard.consistencyTrend} />
        </Card>

        <Card>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Body progress</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                Practical health markers, not pressure.
              </h3>
            </div>
            <HeartPulse className="text-muted" size={18} strokeWidth={1.8} />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {gymDashboard.bodyProgress.map((item) => (
              <div key={item.label} className="border-t border-border pt-4">
                <SectionLabel>{item.label}</SectionLabel>
                <p className="mt-3 font-mono text-xl font-medium text-foreground">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <SectionLabel>Training plan</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                The session structure stays boring on purpose.
              </h3>
            </div>
            <Activity className="text-muted" size={18} strokeWidth={1.8} />
          </div>

          <div className="mt-6 space-y-4">
            {gymDashboard.trainingPlan.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-3 border-t border-border pt-4 first:border-t-0 first:pt-0 sm:grid-cols-[2.5rem_minmax(0,1fr)]"
              >
                <p className="font-mono text-sm text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="font-mono text-sm text-foreground">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Gym goals</SectionLabel>
              <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
                Goals that keep training useful and sustainable.
              </h3>
            </div>
            <Target className="text-muted" size={18} strokeWidth={1.8} />
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {gymDashboard.goals.map((goal) => (
              <GoalCard key={goal.title} goal={goal} />
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Gym insights</SectionLabel>
            <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
              Read the pattern before adding more work.
            </h3>
          </div>
          <TrendingUp className="text-muted" size={18} strokeWidth={1.8} />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {gymDashboard.insights.map((insight, index) => (
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

function OverviewMetric({
  label,
  value,
  detail,
  icon: Icon,
}: {
  label: string;
  value: string;
  detail: string;
  icon: typeof Dumbbell;
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <SectionLabel>{label}</SectionLabel>
        <Icon className="text-muted" size={18} strokeWidth={1.8} />
      </div>
      <p className="mt-4 font-mono text-2xl font-medium leading-tight text-foreground">
        {value}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
    </Card>
  );
}

function WorkoutSnapshot({
  label,
  title,
  date,
  duration,
  focus,
}: {
  label: string;
  title: string;
  date: string;
  duration: string;
  focus: string;
}) {
  return (
    <div className="border-t border-border pt-4">
      <SectionLabel>{label}</SectionLabel>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <p className="font-mono text-xl font-medium text-foreground">{title}</p>
        <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.68rem] text-muted">
          {date}
        </span>
        <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.68rem] text-muted">
          {duration}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{focus}</p>
    </div>
  );
}

function WeeklyWorkoutRow({
  workout,
}: {
  workout: (typeof gymDashboard.weeklyWorkouts)[number];
}) {
  const complete = workout.status === "Complete";
  const protectedDay = workout.status === "Protected";

  return (
    <div className="grid gap-3 rounded-md border border-border bg-background p-4 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-center">
      <p className="font-mono text-sm text-foreground">{workout.day}</p>
      <div className="min-w-0">
        <p className="font-mono text-sm text-foreground">{workout.title}</p>
        <p className="mt-1 text-sm text-muted">
          {workout.duration > 0 ? `${workout.duration} minutes` : "No session"}
        </p>
      </div>
      <span
        className={cn(
          "rounded-sm border px-2.5 py-1 font-mono text-xs",
          complete
            ? "border-foreground text-foreground"
            : protectedDay
              ? "border-border text-foreground"
              : "border-border text-muted",
        )}
      >
        {workout.status}
      </span>
    </div>
  );
}

function WorkoutLogCard({ workout }: { workout: WorkoutLog }) {
  return (
    <article className="rounded-md border border-border bg-background p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
              {workout.date}
            </span>
            <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
              {workout.duration}
            </span>
            <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-foreground">
              {workout.readiness}
            </span>
          </div>
          <h4 className="mt-3 font-mono text-xl font-medium text-foreground">
            {workout.workout}
          </h4>
        </div>
        <p className="font-mono text-xs text-muted">
          {workout.exercises.length} exercises
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        {workout.exercises.map((exercise) => (
          <ExerciseRow key={`${workout.date}-${exercise.name}`} exercise={exercise} />
        ))}
      </div>
    </article>
  );
}

function ExerciseRow({ exercise }: { exercise: Exercise }) {
  return (
    <div className="grid gap-4 rounded-md border border-border bg-surface p-4 lg:grid-cols-[minmax(0,1.15fr)_repeat(5,minmax(4.5rem,auto))] lg:items-center">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-mono text-sm text-foreground">{exercise.name}</p>
          {exercise.pr ? (
            <span className="rounded-sm border border-accent px-2 py-0.5 font-mono text-[0.68rem] text-accent">
              PR
            </span>
          ) : null}
        </div>
      </div>
      <ExerciseStat label="Sets" value={`${exercise.sets}`} />
      <ExerciseStat label="Reps" value={exercise.reps} />
      <ExerciseStat label="Weight" value={exercise.weight} />
      <ExerciseStat label="RPE" value={`${exercise.rpe}`} />
      <ExerciseStat label="Rest" value={exercise.rest} />
    </div>
  );
}

function ExerciseStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[0.68rem] uppercase text-muted">{label}</p>
      <p className="mt-1 font-mono text-sm text-foreground">{value}</p>
    </div>
  );
}

function GoalCard({ goal }: { goal: TrainingGoal }) {
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
      <div className="mt-4 border-t border-border pt-4">
        <SectionLabel>Next action</SectionLabel>
        <p className="mt-3 text-sm leading-6 text-muted">{goal.nextAction}</p>
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
