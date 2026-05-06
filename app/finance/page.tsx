"use client";

import {
  Banknote,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleDollarSign,
  CreditCard,
  Landmark,
  LockKeyhole,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  Target,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import dynamic from "next/dynamic";

import { Card, SectionLabel } from "@/components/ui";
import { financePageData } from "@/data/mock/finance";
import { cn } from "@/lib/utils";

type OverviewMetric = (typeof financePageData.overview)[number];
type Goal = (typeof financePageData.goals)[number];
type Bucket = (typeof financePageData.savings.buckets)[number];
type DebtItem = (typeof financePageData.debt.items)[number];
type WorthItPurchase = (typeof financePageData.purchases.worthIt)[number];
type RegretPurchase = (typeof financePageData.purchases.regrets)[number];

const CashflowChart = dynamic(
  () => import("./finance-charts").then((module) => module.CashflowChart),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  },
);

const ExpenseCategoryChart = dynamic(
  () =>
    import("./finance-charts").then((module) => module.ExpenseCategoryChart),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  },
);

export default function FinancePage() {
  return (
    <>
      <header className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md border border-border text-accent">
              <LockKeyhole size={18} strokeWidth={1.8} />
            </span>
            <p className="font-mono text-xs uppercase tracking-normal text-muted">
              {financePageData.header.eyebrow}
            </p>
          </div>
          <h2 className="mt-4 font-mono text-[1.75rem] font-medium leading-tight text-foreground">
            {financePageData.header.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            {financePageData.header.dateLabel}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[0.92rem]">
            {financePageData.header.description}
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 font-mono text-xs text-on-primary transition hover:opacity-90 sm:w-auto"
        >
          <ShieldCheck size={16} strokeWidth={2} />
          {financePageData.header.actionLabel}
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
        {financePageData.overview.map((metric) => (
          <OverviewCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <SectionHeader
            label="Income tracker"
            title={`${financePageData.income.monthlyRange} monthly range`}
            icon={Banknote}
            meta={financePageData.income.stability}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {financePageData.income.sources.map((source) => (
              <PrivateSourceCard
                key={source.title}
                title={source.title}
                value={source.range}
                detail={source.detail}
              />
            ))}
          </div>
          <CashflowChart data={financePageData.income.trend} />
          <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-muted">
            {financePageData.income.note}
          </p>
        </Card>

        <Card>
          <SectionHeader
            label="Monthly budget"
            title={financePageData.budget.status}
            icon={ReceiptText}
            meta={financePageData.budget.month}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <PrivateSourceCard
              title="Planned"
              value={financePageData.budget.plannedRange}
              detail="Target range"
            />
            <PrivateSourceCard
              title="Actual"
              value={financePageData.budget.actualRange}
              detail="Current spend"
            />
          </div>
          <div className="mt-6 space-y-3">
            {financePageData.budget.rows.map((row) => (
              <BudgetRow key={row.category} row={row} />
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <SectionHeader
            label="Expense tracker"
            title={`${financePageData.expenses.monthlyRange} current range`}
            icon={CreditCard}
            meta={financePageData.expenses.budgetRange}
          />
          <ExpenseCategoryChart data={financePageData.expenses.categories} />
          <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-muted">
            {financePageData.expenses.note}
          </p>
        </Card>

        <Card>
          <SectionHeader
            label="Recurring expenses"
            title="Known commitments stay visible."
            icon={WalletCards}
            meta={`${financePageData.expenses.recurring.length} items`}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3 xl:grid-cols-1">
            {financePageData.expenses.recurring.map((expense) => (
              <PrivateSourceCard
                key={expense.title}
                title={expense.title}
                value={expense.range}
                detail={expense.cadence}
              />
            ))}
          </div>
          <div className="mt-6 grid gap-3">
            {financePageData.expenses.categories.map((category) => {
              const progress = Math.round(
                (category.amount / category.budget) * 100,
              );

              return (
                <ProgressRow
                  key={category.name}
                  label={category.name}
                  value={`${progress}%`}
                  detail={category.detail}
                  progress={progress}
                />
              );
            })}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <SectionHeader
            label="Savings tracker"
            title={`${financePageData.savings.rate} savings rate`}
            icon={PiggyBank}
            meta={financePageData.savings.monthlyRange}
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {financePageData.savings.buckets.map((bucket) => (
              <BucketCard key={bucket.title} bucket={bucket} />
            ))}
          </div>
          <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-muted">
            {financePageData.savings.note}
          </p>
        </Card>

        <Card>
          <SectionHeader
            label="Emergency fund"
            title={financePageData.emergencyFund.currentRange}
            icon={Landmark}
            meta={financePageData.emergencyFund.monthsCovered}
          />
          <div className="mt-6 rounded-md border border-border bg-background p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <SectionLabel>Progress</SectionLabel>
                <p className="mt-3 font-mono text-2xl font-medium text-foreground">
                  {financePageData.emergencyFund.progress}%
                </p>
              </div>
              <p className="font-mono text-xs text-muted">
                Target / {financePageData.emergencyFund.targetRange}
              </p>
            </div>
            <div className="mt-5 h-2 rounded-sm bg-surface">
              <div
                className="h-full rounded-sm bg-accent"
                style={{
                  width: `${financePageData.emergencyFund.progress}%`,
                }}
              />
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">
            {financePageData.emergencyFund.note}
          </p>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <SectionHeader
            label="Debt tracker"
            title={financePageData.debt.totalRange}
            icon={CircleDollarSign}
            meta={`Next / ${financePageData.debt.nextPayment}`}
          />
          <div className="mt-6 grid gap-4">
            <ProgressRow
              label="Total payoff"
              value={`${financePageData.debt.payoffProgress}%`}
              detail={financePageData.debt.note}
              progress={financePageData.debt.payoffProgress}
            />
            {financePageData.debt.items.map((item) => (
              <DebtCard key={item.title} item={item} />
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader
            label="Investment snapshot"
            title={financePageData.investments.range}
            icon={ChartNoAxesCombined}
            meta={`Monthly / ${financePageData.investments.monthlyContribution}`}
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {financePageData.investments.allocation.map((item) => (
              <div
                key={item.label}
                className="rounded-md border border-border bg-background p-4"
              >
                <SectionLabel>{item.label}</SectionLabel>
                <p className="mt-3 font-mono text-2xl font-medium text-foreground">
                  {item.percentage}%
                </p>
                <div className="mt-4 h-2 rounded-sm bg-surface">
                  <div
                    className="h-full rounded-sm bg-foreground"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-muted">
            {financePageData.investments.note}
          </p>
        </Card>
      </div>

      <Card className="mt-4">
        <SectionHeader
          label="Financial goals"
          title="Stability before optional complexity."
          icon={Target}
          meta={`${financePageData.goals.length} active`}
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {financePageData.goals.map((goal) => (
            <GoalCard key={goal.title} goal={goal} />
          ))}
        </div>
      </Card>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <PurchaseCard
          label="Worth-it purchases"
          title="Spending that paid for itself in use."
          icon={BriefcaseBusiness}
          items={financePageData.purchases.worthIt}
          field="reason"
        />
        <PurchaseCard
          label="Regret purchases"
          title="Spending patterns to interrupt earlier."
          icon={TrendingUp}
          items={financePageData.purchases.regrets}
          field="lesson"
        />
      </div>

      <Card className="mt-4">
        <SectionHeader
          label="Spending insights"
          title="Read the pattern before tightening the rules."
          icon={ShieldCheck}
          meta="Private read"
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {financePageData.insights.map((insight, index) => (
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

function PrivateSourceCard({
  title,
  value,
  detail,
}: {
  title: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <SectionLabel>{title}</SectionLabel>
      <p className="mt-3 font-mono text-xl font-medium text-foreground">
        {value}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
    </div>
  );
}

function BudgetRow({
  row,
}: {
  row: (typeof financePageData.budget.rows)[number];
}) {
  return (
    <div className="grid gap-3 rounded-md border border-border bg-background p-4 lg:grid-cols-[minmax(0,1fr)_auto_auto_auto] lg:items-center">
      <p className="font-mono text-sm text-foreground">{row.category}</p>
      <MetricPair label="Planned" value={row.planned} />
      <MetricPair label="Actual" value={row.actual} />
      <span className="w-fit rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted">
        {row.status}
      </span>
    </div>
  );
}

function MetricPair({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[0.68rem] uppercase text-muted">{label}</p>
      <p className="mt-1 font-mono text-sm text-foreground">{value}</p>
    </div>
  );
}

function ProgressRow({
  label,
  value,
  detail,
  progress,
}: {
  label: string;
  value: string;
  detail: string;
  progress: number;
}) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-sm text-foreground">{label}</p>
        <p className="font-mono text-sm text-muted">{value}</p>
      </div>
      <div className="mt-3 h-2 rounded-sm bg-surface">
        <div
          className="h-full rounded-sm bg-foreground"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
    </div>
  );
}

function BucketCard({ bucket }: { bucket: Bucket }) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-foreground">{bucket.title}</p>
          <p className="mt-2 font-mono text-xs text-muted">{bucket.range}</p>
        </div>
        <p className="font-mono text-sm text-muted">{bucket.progress}%</p>
      </div>
      <div className="mt-4 h-2 rounded-sm bg-surface">
        <div
          className="h-full rounded-sm bg-accent"
          style={{ width: `${bucket.progress}%` }}
        />
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{bucket.detail}</p>
    </div>
  );
}

function DebtCard({ item }: { item: DebtItem }) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-foreground">{item.title}</p>
          <p className="mt-2 font-mono text-xs text-muted">{item.range}</p>
        </div>
        <p className="font-mono text-sm text-muted">{item.progress}%</p>
      </div>
      <div className="mt-4 h-2 rounded-sm bg-surface">
        <div
          className="h-full rounded-sm bg-foreground"
          style={{ width: `${item.progress}%` }}
        />
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{item.focus}</p>
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

type PurchaseCardProps =
  | {
      label: string;
      title: string;
      icon: LucideIcon;
      items: WorthItPurchase[];
      field: "reason";
    }
  | {
      label: string;
      title: string;
      icon: LucideIcon;
      items: RegretPurchase[];
      field: "lesson";
    };

function PurchaseCard(props: PurchaseCardProps) {
  const { label, title, icon, items } = props;

  return (
    <Card>
      <SectionHeader label={label} title={title} icon={icon} meta={`${items.length} items`} />
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="border-t border-border pt-4 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <p className="font-mono text-sm text-foreground">{item.title}</p>
              <p className="font-mono text-xs text-muted">{item.range}</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">
              {"reason" in item ? item.reason : item.lesson}
            </p>
          </div>
        ))}
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

function ChartLoading() {
  return (
    <div className="mt-6 h-72 min-h-72 w-full min-w-0">
      <div className="flex h-full items-center justify-center rounded-md border border-border bg-background">
        <p className="font-mono text-xs text-muted">Loading chart</p>
      </div>
    </div>
  );
}
