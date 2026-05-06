"use client";

import type { ReactElement } from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  LineChart,
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

type SleepPoint = {
  day: string;
  hours: number;
  quality: number;
};

type WeightPoint = {
  week: string;
  weight: number;
};

type ReadinessPoint = {
  day: string;
  energy: number;
  stress: number;
  recovery: number;
};

export function SleepChart({ data }: { data: SleepPoint[] }) {
  return (
    <ChartFrame>
      <ComposedChart data={data}>
        <CartesianGrid
          stroke={chartColors.muted}
          strokeOpacity={0.22}
          vertical={false}
        />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={{ stroke: chartColors.muted, strokeOpacity: 0.5 }}
          tick={{ fill: chartColors.muted, fontSize: 11 }}
        />
        <YAxis
          yAxisId="hours"
          tickLine={false}
          axisLine={false}
          tick={{ fill: chartColors.muted, fontSize: 11 }}
          width={34}
        />
        <YAxis yAxisId="quality" hide domain={[0, 100]} />
        <Tooltip content={<ChartTooltip />} />
        <Bar
          yAxisId="hours"
          dataKey="hours"
          name="Hours"
          fill={chartColors.foreground}
          radius={[3, 3, 0, 0]}
        />
        <Line
          yAxisId="quality"
          type="monotone"
          dataKey="quality"
          name="Quality"
          stroke={chartColors.accent}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: chartColors.accent }}
        />
      </ComposedChart>
    </ChartFrame>
  );
}

export function WeightChart({ data }: { data: WeightPoint[] }) {
  return (
    <ChartFrame>
      <LineChart data={data}>
        <CartesianGrid
          stroke={chartColors.muted}
          strokeOpacity={0.22}
          vertical={false}
        />
        <XAxis
          dataKey="week"
          tickLine={false}
          axisLine={{ stroke: chartColors.muted, strokeOpacity: 0.5 }}
          tick={{ fill: chartColors.muted, fontSize: 11 }}
        />
        <YAxis
          domain={["dataMin - 0.3", "dataMax + 0.3"]}
          tickLine={false}
          axisLine={false}
          tick={{ fill: chartColors.muted, fontSize: 11 }}
          width={42}
        />
        <Tooltip content={<ChartTooltip />} />
        <Line
          type="monotone"
          dataKey="weight"
          name="Weight"
          stroke={chartColors.accent}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: chartColors.accent }}
        />
      </LineChart>
    </ChartFrame>
  );
}

export function ReadinessChart({ data }: { data: ReadinessPoint[] }) {
  return (
    <ChartFrame>
      <LineChart data={data}>
        <CartesianGrid
          stroke={chartColors.muted}
          strokeOpacity={0.22}
          vertical={false}
        />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={{ stroke: chartColors.muted, strokeOpacity: 0.5 }}
          tick={{ fill: chartColors.muted, fontSize: 11 }}
        />
        <YAxis
          domain={[0, 100]}
          tickLine={false}
          axisLine={false}
          tick={{ fill: chartColors.muted, fontSize: 11 }}
          width={36}
        />
        <Tooltip content={<ChartTooltip />} />
        <Line
          type="monotone"
          dataKey="recovery"
          name="Recovery"
          stroke={chartColors.accent}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: chartColors.accent }}
        />
        <Line
          type="monotone"
          dataKey="energy"
          name="Energy"
          stroke={chartColors.foreground}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: chartColors.foreground }}
        />
        <Line
          type="monotone"
          dataKey="stress"
          name="Stress"
          stroke={chartColors.muted}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: chartColors.muted }}
        />
      </LineChart>
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
