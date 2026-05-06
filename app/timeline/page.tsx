import { Image as ImageIcon } from "lucide-react";

import { Card, SectionLabel } from "@/components/ui";
import { timelineEvents } from "@/data/mock/life-os";

type TimelineEvent = (typeof timelineEvents)[number];

const categories = Array.from(
  new Set(timelineEvents.map((event) => event.category)),
);

export default function TimelinePage() {
  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-normal text-muted">
            Autobiography
          </p>
          <h2 className="mt-3 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            Life Timeline
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            Private archive / turning points and identity shifts
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            A personal record of the moments that shaped the current self:
            what happened, what it taught, and what changed afterward.
          </p>
        </div>

        <button
          type="button"
          className="h-11 w-full rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          Review chapter
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryMetric
          label="Recorded events"
          value={`${timelineEvents.length}`}
          detail="Private chapters"
        />
        <SummaryMetric
          label="Categories"
          value={`${categories.length}`}
          detail="Themes across the story"
        />
        <SummaryMetric
          label="Earliest chapter"
          value={timelineEvents[0].date}
          detail={timelineEvents[0].category}
        />
        <SummaryMetric
          label="Current theme"
          value="Trust"
          detail="Actions matching values"
        />
      </div>

      <section className="mt-4">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Chronological record</SectionLabel>
            <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
              The story is not linear, but the evidence is visible.
            </h3>
          </div>
          <p className="font-mono text-xs text-muted">Oldest to newest</p>
        </div>

        <div className="space-y-4">
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={event.id}
              event={event}
              finalItem={index === timelineEvents.length - 1}
            />
          ))}
        </div>
      </section>

      <Card className="mt-4">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <SectionLabel>Pattern read</SectionLabel>
            <h3 className="mt-3 font-mono text-xl font-medium text-foreground">
              The through-line is becoming more honest with reality.
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <ReflectionBlock
              label="What repeats"
              text="Responsibility, discipline, training, calm, and systems all point toward self-trust."
            />
            <ReflectionBlock
              label="What changed"
              text="Growth moved from dramatic resets into quieter evidence that can survive normal days."
            />
            <ReflectionBlock
              label="Next chapter"
              text="Keep the system personal, keep the actions small enough to repeat, and keep telling the truth."
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

function TimelineItem({
  event,
  finalItem,
}: {
  event: TimelineEvent;
  finalItem: boolean;
}) {
  return (
    <article className="grid gap-3 sm:grid-cols-[7.5rem_minmax(0,1fr)] lg:grid-cols-[9rem_1.25rem_minmax(0,1fr)]">
      <div className="flex items-center justify-between gap-3 sm:block">
        <p className="font-mono text-sm text-foreground">{event.date}</p>
        <p className="font-mono text-xs text-muted sm:mt-2">{event.category}</p>
      </div>

      <div className="relative hidden justify-center lg:flex">
        <span className="mt-2 size-3 rounded-full border border-accent bg-background shadow-[0_0_0_4px_var(--color-neutral)]" />
        {finalItem ? null : (
          <span className="absolute bottom-[-1rem] top-6 w-px bg-border" />
        )}
      </div>

      <Card className="min-h-full">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
                {event.category}
              </span>
              <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-foreground">
                {event.date}
              </span>
            </div>

            <h4 className="mt-4 font-mono text-2xl font-medium leading-snug text-foreground">
              {event.title}
            </h4>
            <p className="mt-5 text-sm leading-6 text-muted">{event.story}</p>
          </div>

          <div className="flex min-h-48 flex-col justify-between rounded-md border border-border bg-background p-4 xl:min-h-full">
            <div className="flex items-center justify-between gap-4">
              <SectionLabel>Photo placeholder</SectionLabel>
              <ImageIcon className="text-muted" size={17} strokeWidth={1.8} />
            </div>
            <p className="mt-12 max-w-52 font-mono text-xs leading-5 text-muted">
              {event.photoPlaceholder}
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-5 border-t border-border pt-5 lg:grid-cols-2">
          <ReflectionBlock
            label="Lesson learned"
            text={event.lessonLearned}
          />
          <ReflectionBlock
            label="How it changed me"
            text={event.changedMe}
          />
        </div>
      </Card>
    </article>
  );
}

function ReflectionBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
