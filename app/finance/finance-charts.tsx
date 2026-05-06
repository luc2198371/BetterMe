"use client";

import type { ReactElement } from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const chartColors = {
  foreground: "var(--color-primary)",
  muted: "var(--color-secondary)",
  accent: "var(--color-tertiary)",
};

type CashflowPoint = {
  month: string;
  income: number;
  expenses: number;
  savings: number;
};

type CategoryPoint = {
  name: string;
  amount: number;
  budget: number;
};

export function CashflowChart({ data }: { data: CashflowPoint[] }) {
  return (
    <ChartFrame>
      <ComposedChart data={data}>
        <CartesianGrid
          stroke={chartColors.muted}
          strokeOpacity={0.22}
          vertical={false}
        />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={{ stroke: chartColors.muted, strokeOpacity: 0.5 }}
          tick={{ fill: chartColors.muted, fontSize: 11 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: chartColors.muted, fontSize: 11 }}
          width={42}
        />
        <Tooltip content={<ChartTooltip />} />
        <Bar
          dataKey="income"
          name="Income"
          fill={chartColors.foreground}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="expenses"
          name="Expenses"
          fill={chartColors.muted}
          radius={[3, 3, 0, 0]}
        />
        <Line
          type="monotone"
          dataKey="savings"
          name="Savings"
          stroke={chartColors.accent}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: chartColors.accent }}
        />
      </ComposedChart>
    </ChartFrame>
  );
}

export function ExpenseCategoryChart({ data }: { data: CategoryPoint[] }) {
  return (
    <ChartFrame>
      <ComposedChart data={data}>
        <CartesianGrid
          stroke={chartColors.muted}
          strokeOpacity={0.22}
          vertical={false}
        />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={{ stroke: chartColors.muted, strokeOpacity: 0.5 }}
          tick={{ fill: chartColors.muted, fontSize: 11 }}
          interval={0}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: chartColors.muted, fontSize: 11 }}
          width={42}
        />
        <Tooltip content={<ChartTooltip />} />
        <Bar
          dataKey="budget"
          name="Budget"
          fill={chartColors.muted}
          radius={[3, 3, 0, 0]}
        />
        <Line
          type="monotone"
          dataKey="amount"
          name="Actual"
          stroke={chartColors.accent}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: chartColors.accent }}
        />
      </ComposedChart>
    </ChartFrame>
  );
}

function ChartFrame({ children }: { children: ReactElement }) {
  return (
    <div className="mt-6 h-72 min-h-72 w-full min-w-0">
      <ResponsiveContainer
        width="100%"
        height="100%"
        minWidth={1}
        minHeight={1}
        initialDimension={{ width: 720, height: 288 }}
      >
        {children}
      </ResponsiveContainer>
    </div>
  );
}

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{
    name?: string;
    value?: number | string;
  }>;
  label?: string;
}) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-md border border-border bg-background p-3 shadow-none">
      <p className="font-mono text-xs text-foreground">{label}</p>
      <div className="mt-2 space-y-1">
        {payload.map((item) => (
          <div
            key={`${item.name}-${item.value}`}
            className="flex items-center justify-between gap-4"
          >
            <span className="font-mono text-xs text-muted">{item.name}</span>
            <span className="font-mono text-xs text-foreground">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
