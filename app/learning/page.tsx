"use client";

import {
  BookOpen,
  Brain,
  Clock,
  Code2,
  FileBadge,
  GraduationCap,
  Hammer,
  Library,
  Lightbulb,
  NotebookText,
  Target,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { Fragment } from "react";

import { Card, SectionLabel } from "@/components/ui";
import { learningPageData } from "@/data/mock/learning";
import { cn } from "@/lib/utils";

type OverviewMetric = (typeof learningPageData.overview)[number];
type Skill = (typeof learningPageData.skills)[number];
type Book = (typeof learningPageData.booksRead)[number];
type Course = (typeof learningPageData.coursesCompleted)[number];
type Project = (typeof learningPageData.projectsBuilt)[number];
type Certification = (typeof learningPageData.certifications)[number];

const StudyHoursChart = dynamic(
  () =>
    import("./learning-charts").then((module) => module.StudyHoursChart),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  },
);

export default function LearningPage() {
  const studyProgress = Math.round(
    (learningPageData.studyHours.total / learningPageData.studyHours.target) *
      100,
  );

  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md border border-border text-accent">
              <GraduationCap size={18} strokeWidth={1.8} />
            </span>
            <p className="font-mono text-xs uppercase tracking-normal text-muted">
              {learningPageData.header.eyebrow}
            </p>
          </div>
          <h2 className="mt-4 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            {learningPageData.header.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            {learningPageData.header.dateLabel}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            {learningPageData.header.description}
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          <Clock size={16} strokeWidth={2} />
          {learningPageData.header.actionLabel}
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
        {learningPageData.overview.map((metric) => (
          <OverviewCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <SectionHeader
            label="Skills progress"
            title="Skill is measured by repeatable practice."
            icon={Brain}
            meta={`${learningPageData.skills.length} skills`}
          />
          <div className="mt-6 grid gap-4">
            {learningPageData.skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </Card>

        <div className="grid gap-4">
          <Card>
            <SectionHeader
              label="Current learning focus"
              title={learningPageData.currentFocus.title}
              icon={Target}
              meta="Now"
            />
            <div className="mt-6 grid gap-5">
              <DetailBlock label="Why it matters" text={learningPageData.currentFocus.why} />
              <DetailBlock
                label="Next session"
                text={learningPageData.currentFocus.nextSession}
              />
              <DetailBlock
                label="Constraint"
                text={learningPageData.currentFocus.constraint}
              />
            </div>
          </Card>

          <Card>
            <SectionHeader
              label="Study hours chart"
              title={`${learningPageData.studyHours.total} of ${learningPageData.studyHours.target} hours this month`}
              icon={Clock}
              meta={`${studyProgress}% target`}
            />
            <div className="mt-6 h-2 rounded-sm bg-background">
              <div
                className="h-full rounded-sm bg-accent"
                style={{ width: `${Math.min(studyProgress, 100)}%` }}
              />
            </div>
            <StudyHoursChart data={learningPageData.studyHours.trend} />
          </Card>
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <LibraryCard
          label="Books read"
          title="Books that shaped the system."
          icon={BookOpen}
          items={learningPageData.booksRead}
          renderItem={(book) => <BookItem book={book} />}
        />
        <LibraryCard
          label="Courses completed"
          title="Courses converted into notes."
          icon={Library}
          items={learningPageData.coursesCompleted}
          renderItem={(course) => <CourseItem course={course} />}
        />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <SectionHeader
            label="Projects built"
            title="Proof that learning became output."
            icon={Hammer}
            meta={`${learningPageData.projectsBuilt.length} projects`}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {learningPageData.projectsBuilt.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader
            label="Certifications"
            title="Signals worth tracking, not chasing."
            icon={FileBadge}
            meta={`${learningPageData.certifications.length} records`}
          />
          <div className="mt-6 space-y-4">
            {learningPageData.certifications.map((certification) => (
              <CertificationRow
                key={certification.title}
                certification={certification}
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <SectionHeader
            label="Notes"
            title="What the learning loop is teaching."
            icon={NotebookText}
            meta={`${learningPageData.notes.length} notes`}
          />
          <div className="mt-6 space-y-4">
            {learningPageData.notes.map((note) => (
              <div
                key={note.title}
                className="border-t border-border pt-4 first:border-t-0 first:pt-0"
              >
                <p className="font-mono text-sm text-foreground">
                  {note.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {note.detail}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader
            label="Things I want to master"
            title="The next layer of capability."
            icon={Trophy}
            meta={`${learningPageData.masteryTargets.length} targets`}
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {learningPageData.masteryTargets.map((target) => (
              <div key={target.title} className="rounded-md border border-border bg-background p-4">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-sm leading-5 text-foreground">
                    {target.title}
                  </p>
                  <Lightbulb className="text-muted" size={18} strokeWidth={1.8} />
                </div>
                <div className="mt-5 grid gap-4">
                  <DetailBlock label="Reason" text={target.reason} />
                  <DetailBlock label="Next action" text={target.nextAction} />
                </div>
              </div>
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

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className="rounded-md border border-border bg-background p-4">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
              {skill.category}
            </span>
            <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-foreground">
              {skill.currentLevel} to {skill.targetLevel}
            </span>
          </div>
          <h4 className="mt-4 font-mono text-xl font-medium leading-snug text-foreground">
            {skill.name}
          </h4>
        </div>

        <div className="rounded-md border border-border px-4 py-3 text-left lg:text-right">
          <p className="font-mono text-2xl font-medium text-foreground">
            {skill.progress}%
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            {skill.practiceHours}h practice
          </p>
        </div>
      </div>

      <div className="mt-5 h-2 rounded-sm bg-surface">
        <div
          className="h-full rounded-sm bg-foreground"
          style={{ width: `${skill.progress}%` }}
        />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <DetailBlock label="Current focus" text={skill.currentFocus} />
        <div className="border-t border-border pt-4">
          <SectionLabel>Resources</SectionLabel>
          <div className="mt-3 flex flex-wrap gap-2">
            {skill.resources.map((resource) => (
              <span
                key={resource}
                className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted"
              >
                {resource}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function LibraryCard<T extends { title: string }>({
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
      <SectionHeader label={label} title={title} icon={icon} meta={`${items.length} items`} />
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <Fragment key={item.title}>{renderItem(item)}</Fragment>
        ))}
      </div>
    </Card>
  );
}

function BookItem({ book }: { book: Book }) {
  return (
    <div className="border-t border-border pt-4 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-sm text-foreground">{book.title}</p>
          <p className="mt-1 font-mono text-xs text-muted">{book.author}</p>
        </div>
        <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
          {book.status}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{book.notes}</p>
    </div>
  );
}

function CourseItem({ course }: { course: Course }) {
  return (
    <div className="border-t border-border pt-4 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-sm text-foreground">{course.title}</p>
          <p className="mt-1 font-mono text-xs text-muted">{course.provider}</p>
        </div>
        <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
          {course.completedAt}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{course.takeaway}</p>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-md border border-border bg-background p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-sm leading-5 text-foreground">
            {project.title}
          </p>
          <p className="mt-2 font-mono text-xs text-muted">
            {project.category}
          </p>
        </div>
        <Code2 className="text-muted" size={18} strokeWidth={1.8} />
      </div>
      <div className="mt-4 inline-flex rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
        {project.status}
      </div>
      <div className="mt-5 border-t border-border pt-4">
        <SectionLabel>Lesson</SectionLabel>
        <p className="mt-3 text-sm leading-6 text-muted">{project.lesson}</p>
      </div>
    </article>
  );
}

function CertificationRow({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-sm text-foreground">
            {certification.title}
          </p>
          <p className="mt-2 text-sm text-muted">{certification.issuer}</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
            {certification.status}
          </span>
          <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
            {certification.date}
          </span>
        </div>
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

function ChartLoading() {
  return (
    <div className="mt-6 h-72 min-h-72 w-full min-w-0">
      <div className="flex h-full items-center justify-center rounded-md border border-border bg-background">
        <p className="font-mono text-xs text-muted">Loading chart</p>
      </div>
    </div>
  );
}
