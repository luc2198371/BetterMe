import type { HealthPageData } from "@/types/phase-two";

export const healthPageData = {
  header: {
    eyebrow: "Body and wellness",
    title: "Health",
    dateLabel: "Wednesday, May 6 / recovery review",
    description:
      "Track the body signals that make discipline sustainable: sleep, hydration, movement, stress, recovery, nutrition, and practical health notes.",
    actionLabel: "Log health check",
  },
  overview: [
    {
      label: "Sleep",
      value: "7.2h",
      detail: "Average over 7 days",
      tone: "foreground",
    },
    {
      label: "Weight",
      value: "82.4kg",
      detail: "Down 0.3kg this month",
      tone: "foreground",
    },
    {
      label: "Water",
      value: "6/8",
      detail: "Glasses logged today",
      tone: "accent",
    },
    {
      label: "Steps",
      value: "8,420",
      detail: "84% of daily target",
      tone: "foreground",
    },
    {
      label: "Energy",
      value: "7/10",
      detail: "Useful, not wired",
      tone: "foreground",
    },
    {
      label: "Stress",
      value: "4/10",
      detail: "Manageable pressure",
      tone: "muted",
    },
    {
      label: "Recovery",
      value: "78%",
      detail: "Good enough to train",
      tone: "accent",
    },
  ],
  sleep: {
    average: "7.2h",
    quality: "82%",
    target: "7.5h target",
    insight:
      "Sleep is strongest when the evening shutdown happens before the final screen block.",
    trend: [
      { day: "Thu", hours: 6.8, quality: 74 },
      { day: "Fri", hours: 7.1, quality: 79 },
      { day: "Sat", hours: 7.6, quality: 86 },
      { day: "Sun", hours: 7.8, quality: 88 },
      { day: "Mon", hours: 6.9, quality: 75 },
      { day: "Tue", hours: 7.3, quality: 83 },
      { day: "Wed", hours: 7.2, quality: 82 },
    ],
  },
  weight: {
    current: "82.4kg",
    change: "-0.3kg / month",
    target: "80.0kg steady cut",
    note:
      "The trend is slow and acceptable. Keep protein stable before reducing food further.",
    trend: [
      { week: "W1", weight: 83.1 },
      { week: "W2", weight: 82.9 },
      { week: "W3", weight: 82.8 },
      { week: "W4", weight: 82.6 },
      { week: "W5", weight: 82.5 },
      { week: "W6", weight: 82.4 },
    ],
  },
  hydration: {
    current: 6,
    target: 8,
    unit: "glasses",
    note: "Hydration is reliable on training days and weaker on desk-heavy days.",
    week: [
      { day: "Thu", value: 7 },
      { day: "Fri", value: 6 },
      { day: "Sat", value: 8 },
      { day: "Sun", value: 7 },
      { day: "Mon", value: 5 },
      { day: "Tue", value: 6 },
      { day: "Wed", value: 6 },
    ],
  },
  steps: {
    current: 8420,
    target: 10000,
    note: "Short walks after meals are doing more for consistency than long catch-up walks.",
    week: [
      { day: "Thu", value: 9200 },
      { day: "Fri", value: 7600 },
      { day: "Sat", value: 11800 },
      { day: "Sun", value: 10100 },
      { day: "Mon", value: 6900 },
      { day: "Tue", value: 8800 },
      { day: "Wed", value: 8420 },
    ],
  },
  readiness: {
    energy: 7,
    stress: 4,
    recovery: 78,
    note:
      "Energy is workable and stress is contained. Recovery supports a normal session, not a max-effort day.",
    trend: [
      { day: "Thu", energy: 6, stress: 5, recovery: 70 },
      { day: "Fri", energy: 7, stress: 4, recovery: 74 },
      { day: "Sat", energy: 8, stress: 3, recovery: 82 },
      { day: "Sun", energy: 8, stress: 3, recovery: 86 },
      { day: "Mon", energy: 6, stress: 6, recovery: 66 },
      { day: "Tue", energy: 7, stress: 4, recovery: 76 },
      { day: "Wed", energy: 7, stress: 4, recovery: 78 },
    ],
  },
  bodyMeasurements: [
    {
      label: "Waist",
      value: "86cm",
      change: "-1cm / 30 days",
    },
    {
      label: "Chest",
      value: "104cm",
      change: "stable",
    },
    {
      label: "Shoulders",
      value: "122cm",
      change: "+0.5cm / 60 days",
    },
    {
      label: "Resting heart rate",
      value: "58bpm",
      change: "-2bpm / month",
    },
  ],
  nutritionNotes: [
    {
      title: "Protein baseline",
      detail:
        "Keep protein anchored at each meal before adjusting calories or meal timing.",
    },
    {
      title: "Evening hunger",
      detail:
        "Late hunger rises when lunch is light. Add a steadier lunch before changing the night routine.",
    },
    {
      title: "Simple meals",
      detail:
        "Repeatable meals are working better than variety when training weeks are busy.",
    },
  ],
  medicalNotes: [
    {
      title: "Annual bloodwork",
      detail: "Next routine check should include vitamin D, iron, lipids, and glucose markers.",
      date: "Due / June 2026",
    },
    {
      title: "Mobility attention",
      detail: "Right hip feels tight after long sitting blocks. Add short mobility before lower days.",
      date: "Noted / May 5",
    },
    {
      title: "Recovery boundary",
      detail: "Avoid stacking hard training after nights below 6.5 hours of sleep.",
      date: "Active rule",
    },
  ],
  goals: [
    {
      title: "Average 7.5 hours of sleep",
      status: "Building",
      progress: 72,
      why:
        "Better sleep makes training, focus, mood, and appetite easier to regulate.",
      nextAction: "Start shutdown 20 minutes earlier on weeknights.",
    },
    {
      title: "Reach 80kg without rushing",
      status: "On track",
      progress: 46,
      why:
        "The goal is a leaner body while preserving strength and daily energy.",
      nextAction: "Keep the current food structure for another full week.",
    },
    {
      title: "Walk 10k steps on weekdays",
      status: "Needs attention",
      progress: 58,
      why:
        "Daily movement supports recovery and keeps health from depending only on gym sessions.",
      nextAction: "Add a 10 minute walk after lunch before returning to work.",
    },
  ],
  insights: [
    "Recovery rises most when sleep and hydration are both steady, not when training intensity drops.",
    "Steps are the easiest health lever to miss because they require no scheduled session.",
    "Nutrition is currently stable enough; the next improvement is timing, not stricter rules.",
  ],
} satisfies HealthPageData;
