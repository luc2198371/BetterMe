import {
  BookOpenText,
  CalendarDays,
  CircleCheck,
  Compass,
  Feather,
  Flag,
  Hourglass,
  Landmark,
  ListChecks,
  Mountain,
  PenLine,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card, SectionLabel } from "@/components/ui";
import { futureSelfPageData } from "@/data/mock/future-self";
import { cn } from "@/lib/utils";

type OverviewMetric = (typeof futureSelfPageData.overview)[number];
type Horizon =
  | typeof futureSelfPageData.oneYearSelf
  | typeof futureSelfPageData.fiveYearSelf
  | typeof futureSelfPageData.tenYearVision;
type IdealDayItem = (typeof futureSelfPageData.idealDay)[number];
type LifestyleItem = (typeof futureSelfPageData.dreamLifestyle)[number];
type CoreValue = (typeof futureSelfPageData.coreValues)[number];
type PersonalRule = (typeof futureSelfPageData.personalRules)[number];
type BecomeTrait =
  (typeof futureSelfPageData.personToBecome.traits)[number];

export default function FutureSelfPage() {
  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md border border-border text-accent">
              <Sparkles size={18} strokeWidth={1.8} />
            </span>
            <p className="font-mono text-xs uppercase tracking-normal text-muted">
              {futureSelfPageData.header.eyebrow}
            </p>
          </div>
          <h2 className="mt-4 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            {futureSelfPageData.header.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            {futureSelfPageData.header.dateLabel}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            {futureSelfPageData.header.description}
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          <Compass size={16} strokeWidth={2} />
          {futureSelfPageData.header.actionLabel}
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {futureSelfPageData.overview.map((metric) => (
          <OverviewCard key={metric.label} metric={metric} />
        ))}
      </div>

      <Card className="mt-4">
        <SectionHeader
          label="Future self horizons"
          title="The direction is long-term, but the evidence is daily."
          icon={Hourglass}
          meta="1 / 5 / 10 years"
        />
        <div className="mt-6 grid gap-4 xl:grid-cols-3">
          <HorizonCard
            horizon={futureSelfPageData.oneYearSelf}
            icon={CalendarDays}
            meta="Near identity"
          />
          <HorizonCard
            horizon={futureSelfPageData.fiveYearSelf}
            icon={Mountain}
            meta="Compounding direction"
          />
          <HorizonCard
            horizon={futureSelfPageData.tenYearVision}
            icon={Landmark}
            meta="Life shape"
          />
        </div>
      </Card>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <SectionHeader
            label="Ideal day"
            title="A normal day that proves the future is real."
            icon={BookOpenText}
            meta={`${futureSelfPageData.idealDay.length} anchors`}
          />
          <div className="mt-6 space-y-4">
            {futureSelfPageData.idealDay.map((item) => (
              <IdealDayRow key={`${item.time}-${item.title}`} item={item} />
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader
            label="Dream lifestyle"
            title="A life with depth, margin, and useful work."
            icon={Flag}
            meta={`${futureSelfPageData.dreamLifestyle.length} principles`}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {futureSelfPageData.dreamLifestyle.map((item) => (
              <LifestyleCard key={item.title} item={item} />
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <SectionHeader
            label="Core values"
            title="Values are useful only when they decide behavior."
            icon={ShieldCheck}
            meta={`${futureSelfPageData.coreValues.length} values`}
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-5">
            {futureSelfPageData.coreValues.map((value) => (
              <CoreValueCard key={value.value} value={value} />
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader
            label="Personal rules"
            title="Guardrails for staying honest when motivation fades."
            icon={ListChecks}
            meta={`${futureSelfPageData.personalRules.length} rules`}
          />
          <div className="mt-6 space-y-3">
            {futureSelfPageData.personalRules.map((rule, index) => (
              <PersonalRuleRow
                key={rule.rule}
                index={index + 1}
                rule={rule}
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <SectionHeader
            label="Person I want to become"
            title={futureSelfPageData.personToBecome.title}
            icon={Target}
            meta={`${futureSelfPageData.personToBecome.traits.length} traits`}
          />
          <p className="mt-6 text-sm leading-6 text-muted">
            {futureSelfPageData.personToBecome.statement}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {futureSelfPageData.personToBecome.traits.map((trait) => (
              <BecomeTraitCard key={trait.label} trait={trait} />
            ))}
          </div>
        </Card>

        <div className="grid gap-4">
          <LetterCard
            label="Letter to future me"
            title={futureSelfPageData.letterToFutureMe.title}
            date={futureSelfPageData.letterToFutureMe.date}
            body={futureSelfPageData.letterToFutureMe.body}
            icon={PenLine}
          />
          <LetterCard
            label="Letter from past me"
            title={futureSelfPageData.letterFromPastMe.title}
            date={futureSelfPageData.letterFromPastMe.date}
            body={futureSelfPageData.letterFromPastMe.body}
            icon={Feather}
          />
        </div>
      </div>

      <Card className="mt-4">
        <SectionHeader
          label="Legacy statement"
          title={futureSelfPageData.legacyStatement.title}
          icon={CircleCheck}
          meta="Private standard"
        />
        <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <p className="font-mono text-xl font-medium leading-8 text-foreground">
            {futureSelfPageData.legacyStatement.statement}
          </p>
          <div className="grid gap-3">
            {futureSelfPageData.legacyStatement.proof.map((item, index) => (
              <div
                key={item}
                className="grid gap-3 rounded-md border border-border bg-background p-4 sm:grid-cols-[auto_minmax(0,1fr)]"
              >
                <p className="font-mono text-sm text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-sm leading-6 text-muted">{item}</p>
              </div>
            ))}
          </div>
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
        <h3 className="mt-3 font-mono text-xl font-medium leading-snug text-foreground">
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

function HorizonCard({
  horizon,
  icon: Icon,
  meta,
}: {
  horizon: Horizon;
  icon: LucideIcon;
  meta: string;
}) {
  const supportingItems =
    "habits" in horizon
      ? horizon.habits
      : "capabilities" in horizon
        ? horizon.capabilities
        : [horizon.lifeShape, horizon.contribution, horizon.nonNegotiable];

  return (
    <article className="rounded-md border border-border bg-background p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-sm leading-5 text-foreground">
            {horizon.title}
          </p>
          <p className="mt-2 font-mono text-xs text-muted">{meta}</p>
        </div>
        <Icon className="text-muted" size={18} strokeWidth={1.8} />
      </div>
      <p className="mt-5 text-sm leading-6 text-muted">{horizon.identity}</p>
      <div className="mt-5 space-y-3 border-t border-border pt-4">
        {supportingItems.map((item) => (
          <div key={item} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            <p className="text-sm leading-6 text-muted">{item}</p>
          </div>
        ))}
      </div>
      {"nextAction" in horizon ? (
        <DetailBlock label="Next action" text={horizon.nextAction} />
      ) : null}
      {"evidence" in horizon ? (
        <DetailBlock label="Evidence" text={horizon.evidence} />
      ) : null}
      {"environment" in horizon ? (
        <DetailBlock label="Environment" text={horizon.environment} />
      ) : null}
    </article>
  );
}

function IdealDayRow({ item }: { item: IdealDayItem }) {
  return (
    <div className="grid gap-3 rounded-md border border-border bg-background p-4 sm:grid-cols-[auto_minmax(0,1fr)]">
      <p className="font-mono text-sm text-accent">{item.time}</p>
      <div>
        <p className="font-mono text-sm text-foreground">{item.title}</p>
        <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
      </div>
    </div>
  );
}

function LifestyleCard({ item }: { item: LifestyleItem }) {
  return (
    <article className="rounded-md border border-border bg-background p-4">
      <p className="font-mono text-sm leading-5 text-foreground">
        {item.title}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
    </article>
  );
}

function CoreValueCard({ value }: { value: CoreValue }) {
  return (
    <article className="rounded-md border border-border bg-background p-4">
      <p className="font-mono text-sm text-foreground">{value.value}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{value.definition}</p>
      <DetailBlock label="Practice" text={value.practice} />
    </article>
  );
}

function PersonalRuleRow({
  index,
  rule,
}: {
  index: number;
  rule: PersonalRule;
}) {
  return (
    <div className="grid gap-3 rounded-md border border-border bg-background p-4 sm:grid-cols-[auto_minmax(0,1fr)]">
      <p className="font-mono text-sm text-muted">
        {String(index).padStart(2, "0")}
      </p>
      <div>
        <p className="font-mono text-sm leading-5 text-foreground">
          {rule.rule}
        </p>
        <p className="mt-2 text-sm leading-6 text-muted">{rule.reason}</p>
      </div>
    </div>
  );
}

function BecomeTraitCard({ trait }: { trait: BecomeTrait }) {
  return (
    <article className="rounded-md border border-border bg-background p-4">
      <p className="font-mono text-sm text-foreground">{trait.label}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{trait.detail}</p>
    </article>
  );
}

function LetterCard({
  label,
  title,
  date,
  body,
  icon: Icon,
}: {
  label: string;
  title: string;
  date: string;
  body: string;
  icon: LucideIcon;
}) {
  return (
    <Card>
      <SectionHeader label={label} title={title} icon={Icon} meta={date} />
      <div className="mt-6 rounded-md border border-border bg-background p-4">
        <p className="text-sm leading-7 text-muted">{body}</p>
      </div>
    </Card>
  );
}

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-4 border-t border-border pt-4">
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
