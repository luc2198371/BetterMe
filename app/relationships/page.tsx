import {
  CalendarHeart,
  HandHeart,
  HeartHandshake,
  History,
  MessageCircleHeart,
  NotebookText,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card, SectionLabel } from "@/components/ui";
import { relationshipsPageData } from "@/data/mock/relationships";
import { cn } from "@/lib/utils";

type OverviewMetric = (typeof relationshipsPageData.overview)[number];
type ImportantPerson = (typeof relationshipsPageData.importantPeople)[number];
type Goal = (typeof relationshipsPageData.goals)[number];

export default function RelationshipsPage() {
  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md border border-border text-accent">
              <HeartHandshake size={18} strokeWidth={1.8} />
            </span>
            <p className="font-mono text-xs uppercase tracking-normal text-muted">
              {relationshipsPageData.header.eyebrow}
            </p>
          </div>
          <h2 className="mt-4 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            {relationshipsPageData.header.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            {relationshipsPageData.header.dateLabel}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            {relationshipsPageData.header.description}
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          <MessageCircleHeart size={16} strokeWidth={2} />
          {relationshipsPageData.header.actionLabel}
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {relationshipsPageData.overview.map((metric) => (
          <OverviewCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <SectionHeader
            label="Important people"
            title="The people who deserve more than automatic replies."
            icon={UsersRound}
            meta={`${relationshipsPageData.importantPeople.length} highlighted`}
          />
          <div className="mt-6 grid gap-4">
            {relationshipsPageData.importantPeople.map((person) => (
              <ImportantPersonCard key={person.name} person={person} />
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader
            label="People I should check on"
            title="Care shows up as a small specific action."
            icon={HandHeart}
            meta={`${relationshipsPageData.checkOn.length} reminders`}
          />
          <div className="mt-6 space-y-4">
            {relationshipsPageData.checkOn.map((item) => (
              <CareReminder
                key={item.name}
                title={item.name}
                meta={item.timing}
                detail={item.reason}
                action={item.suggestedAction}
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        <PeopleGroupCard
          label="Family"
          title="Steady care, not rushed updates."
          icon={HeartHandshake}
          items={relationshipsPageData.family}
          renderItem={(item) => (
            <div>
              <p className="font-mono text-sm text-foreground">
                {item.name} / {item.relationship}
              </p>
              <p className="mt-2 font-mono text-xs text-muted">
                Last talked / {item.lastTalked}
              </p>
              <DetailBlock label="Next action" text={item.nextAction} />
              <DetailBlock label="Shared memory" text={item.sharedMemory} />
            </div>
          )}
        />
        <PeopleGroupCard
          label="Friends"
          title="Real conversations over shallow catch-ups."
          icon={MessageCircleHeart}
          items={relationshipsPageData.friends}
          renderItem={(item) => (
            <div>
              <p className="font-mono text-sm text-foreground">{item.name}</p>
              <p className="mt-2 font-mono text-xs text-muted">
                Rhythm / {item.rhythm} / Last talked / {item.lastTalked}
              </p>
              <DetailBlock label="Next action" text={item.nextAction} />
              <DetailBlock label="Private note" text={item.note} />
            </div>
          )}
        />
        <PeopleGroupCard
          label="Mentors"
          title="People whose questions changed my direction."
          icon={Sparkles}
          items={relationshipsPageData.mentors}
          renderItem={(item) => (
            <div>
              <p className="font-mono text-sm text-foreground">{item.name}</p>
              <p className="mt-2 font-mono text-xs text-muted">
                Last contact / {item.lastContact}
              </p>
              <DetailBlock label="Lesson" text={item.lesson} />
              <DetailBlock
                label="Thoughtful action"
                text={item.nextThoughtfulAction}
              />
            </div>
          )}
        />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <SectionHeader
            label="Upcoming birthdays"
            title="Remember early enough to be thoughtful."
            icon={CalendarHeart}
            meta={`${relationshipsPageData.birthdays.length} coming up`}
          />
          <div className="mt-6 space-y-4">
            {relationshipsPageData.birthdays.map((birthday) => (
              <CareReminder
                key={birthday.name}
                title={birthday.name}
                meta={birthday.date}
                detail={birthday.plan}
                action="Prepare before the day arrives."
              />
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader
            label="Last time we talked"
            title="Distance is easier to notice when it is written down."
            icon={History}
            meta={`${relationshipsPageData.lastTalked.length} recent notes`}
          />
          <div className="mt-6 grid gap-3">
            {relationshipsPageData.lastTalked.map((item) => (
              <div
                key={`${item.name}-${item.date}`}
                className="grid gap-3 rounded-md border border-border bg-background p-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center"
              >
                <div>
                  <p className="font-mono text-sm text-foreground">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.context}
                  </p>
                </div>
                <p className="font-mono text-xs text-muted">{item.date}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <SectionHeader
            label="Shared memories"
            title="Moments that explain why these people matter."
            icon={NotebookText}
            meta={`${relationshipsPageData.sharedMemories.length} memories`}
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {relationshipsPageData.sharedMemories.map((memory) => (
              <div
                key={memory.title}
                className="rounded-md border border-border bg-background p-4"
              >
                <p className="font-mono text-sm leading-5 text-foreground">
                  {memory.title}
                </p>
                <p className="mt-2 font-mono text-xs text-muted">
                  {memory.people} / {memory.date}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  {memory.meaning}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader
            label="Reconnect reminders"
            title="Small bridges before distance hardens."
            icon={MessageCircleHeart}
            meta={`${relationshipsPageData.reconnectReminders.length} reminders`}
          />
          <div className="mt-6 space-y-4">
            {relationshipsPageData.reconnectReminders.map((reminder) => (
              <CareReminder
                key={reminder.name}
                title={reminder.name}
                meta="Reconnect"
                detail={reminder.reminder}
                action={reminder.nextStep}
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <SectionHeader
            label="Lessons from people"
            title="What relationships have taught me."
            icon={Sparkles}
            meta={`${relationshipsPageData.lessons.length} lessons`}
          />
          <div className="mt-6 space-y-4">
            {relationshipsPageData.lessons.map((item) => (
              <div
                key={item.person}
                className="border-t border-border pt-4 first:border-t-0 first:pt-0"
              >
                <p className="font-mono text-sm text-foreground">
                  {item.person}
                </p>
                <DetailBlock label="Lesson" text={item.lesson} />
                <DetailBlock
                  label="How it changed me"
                  text={item.howItChangedMe}
                />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader
            label="Relationship goals"
            title="Intentions that make care more visible."
            icon={Target}
            meta={`${relationshipsPageData.goals.length} active`}
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {relationshipsPageData.goals.map((goal) => (
              <GoalCard key={goal.title} goal={goal} />
            ))}
          </div>
        </Card>
      </div>
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

function ImportantPersonCard({ person }: { person: ImportantPerson }) {
  return (
    <article className="rounded-md border border-border bg-background p-4">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
              {person.group}
            </span>
            <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-foreground">
              {person.role}
            </span>
          </div>
          <h4 className="mt-4 font-mono text-xl font-medium text-foreground">
            {person.name}
          </h4>
        </div>
        <div className="rounded-md border border-border px-4 py-3 text-left lg:text-right">
          <p className="font-mono text-sm text-foreground">
            {person.nextCheckIn}
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            Last talked / {person.lastTalked}
          </p>
        </div>
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <DetailBlock label="Why they matter" text={person.whyTheyMatter} />
        <DetailBlock label="Private note" text={person.privateNote} />
      </div>
    </article>
  );
}

function PeopleGroupCard<T>({
  label,
  title,
  icon,
  items,
  renderItem,
}: {
  label: string;
  title: string;
  icon: LucideIcon;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}) {
  return (
    <Card>
      <SectionHeader label={label} title={title} icon={icon} meta={`${items.length} people`} />
      <div className="mt-6 space-y-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-t border-border pt-5 first:border-t-0 first:pt-0"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </Card>
  );
}

function CareReminder({
  title,
  meta,
  detail,
  action,
}: {
  title: string;
  meta: string;
  detail: string;
  action: string;
}) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <p className="font-mono text-sm text-foreground">{title}</p>
        <p className="font-mono text-xs text-muted">{meta}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
      <div className="mt-4 border-t border-border pt-4">
        <SectionLabel>Next thoughtful action</SectionLabel>
        <p className="mt-3 text-sm leading-6 text-foreground">{action}</p>
      </div>
    </div>
  );
}

function GoalCard({ goal }: { goal: Goal }) {
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
        <DetailBlock label="Why it matters" text={goal.why} />
        <DetailBlock label="Next action" text={goal.nextAction} />
      </div>
    </div>
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
