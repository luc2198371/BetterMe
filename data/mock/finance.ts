import type { FinancePageData } from "@/types/phase-two";

export const financePageData = {
  header: {
    eyebrow: "Money and responsibility",
    title: "Finance",
    dateLabel: "Wednesday, May 6 / private money review",
    description:
      "A privacy-first view of income, spending, savings, debt, investments, and the financial decisions that build stability without exposing account details.",
    actionLabel: "Review money",
  },
  overview: [
    {
      label: "Income",
      value: "$5k-$6k",
      detail: "Monthly range, rounded",
      tone: "foreground",
    },
    {
      label: "Expenses",
      value: "$3k-$4k",
      detail: "Within planned range",
      tone: "foreground",
    },
    {
      label: "Savings rate",
      value: "28%",
      detail: "Stable this month",
      tone: "accent",
    },
    {
      label: "Budget status",
      value: "On track",
      detail: "No category above hard limit",
      tone: "accent",
    },
    {
      label: "Debt",
      value: "$8k-$10k",
      detail: "42% payoff progress",
      tone: "muted",
    },
    {
      label: "Investments",
      value: "$15k-$20k",
      detail: "Long-term snapshot",
      tone: "foreground",
    },
    {
      label: "Emergency fund",
      value: "64%",
      detail: "3.2 months covered",
      tone: "accent",
    },
  ],
  income: {
    monthlyRange: "$5k-$6k",
    stability: "Stable",
    note:
      "Income is reviewed as a range on purpose. The focus is consistency and allocation, not exposing exact deposits.",
    sources: [
      {
        title: "Primary work",
        range: "$4k-$5k",
        detail: "Stable baseline income for fixed costs and core saving.",
      },
      {
        title: "Project income",
        range: "$500-$1k",
        detail:
          "Variable income reserved for goals, investing, or buffer growth.",
      },
      {
        title: "Other income",
        range: "$0-$500",
        detail: "Small irregular items tracked without depending on them.",
      },
    ],
    trend: [
      { month: "Jan", income: 5200, expenses: 3650, savings: 1550 },
      { month: "Feb", income: 5450, expenses: 3820, savings: 1630 },
      { month: "Mar", income: 5100, expenses: 3480, savings: 1620 },
      { month: "Apr", income: 5700, expenses: 3910, savings: 1790 },
      { month: "May", income: 5520, expenses: 3740, savings: 1780 },
    ],
  },
  expenses: {
    monthlyRange: "$3k-$4k",
    budgetRange: "$4k max",
    note:
      "Spending is controlled enough. The risk is quiet subscription creep and convenience purchases.",
    categories: [
      {
        name: "Housing",
        amount: 1350,
        budget: 1400,
        detail: "Fixed and predictable.",
      },
      {
        name: "Food",
        amount: 680,
        budget: 760,
        detail: "Stable when meals are planned.",
      },
      {
        name: "Transport",
        amount: 260,
        budget: 320,
        detail: "Within normal range.",
      },
      {
        name: "Training",
        amount: 180,
        budget: 220,
        detail: "Worth-it health spending.",
      },
      {
        name: "Learning",
        amount: 140,
        budget: 200,
        detail: "Useful if converted into practice.",
      },
      {
        name: "Flexible",
        amount: 620,
        budget: 750,
        detail: "Watch convenience purchases.",
      },
    ],
    recurring: [
      {
        title: "Rent and utilities",
        range: "$1.3k-$1.5k",
        cadence: "Monthly",
      },
      {
        title: "Core subscriptions",
        range: "$80-$120",
        cadence: "Monthly",
      },
      {
        title: "Gym and health",
        range: "$100-$200",
        cadence: "Monthly",
      },
    ],
  },
  savings: {
    rate: "28%",
    monthlyRange: "$1.5k-$2k",
    note:
      "Savings are strongest when variable income is allocated before it feels available.",
    buckets: [
      {
        title: "Emergency fund",
        range: "$9k-$11k",
        progress: 64,
        detail: "Primary stability buffer.",
      },
      {
        title: "Future move fund",
        range: "$2k-$3k",
        progress: 38,
        detail: "Optionality without pressure.",
      },
      {
        title: "Learning and tools",
        range: "$500-$1k",
        progress: 52,
        detail: "Reserved for high-leverage skill building.",
      },
    ],
  },
  debt: {
    totalRange: "$8k-$10k",
    payoffProgress: 42,
    nextPayment: "$400-$600",
    note:
      "Keep debt payoff boring and automatic. Do not accelerate it by weakening the emergency fund.",
    items: [
      {
        title: "Student balance",
        range: "$6k-$8k",
        progress: 39,
        focus: "Keep automatic payment active.",
      },
      {
        title: "Device payment",
        range: "$1k-$2k",
        progress: 68,
        focus: "Finish before adding new hardware.",
      },
    ],
  },
  investments: {
    range: "$15k-$20k",
    monthlyContribution: "$500-$750",
    note:
      "The investment snapshot is intentionally simple: consistent contributions beat frequent checking.",
    allocation: [
      {
        label: "Broad market",
        percentage: 72,
        detail: "Core long-term holding.",
      },
      {
        label: "Cash reserve",
        percentage: 18,
        detail: "Near-term flexibility.",
      },
      {
        label: "Speculative",
        percentage: 10,
        detail: "Capped by rule.",
      },
    ],
  },
  budget: {
    month: "May 2026",
    plannedRange: "$3.8k-$4.0k",
    actualRange: "$3.6k-$3.8k",
    status: "On track",
    rows: [
      {
        category: "Fixed costs",
        planned: "$1.7k-$1.9k",
        actual: "$1.7k-$1.8k",
        status: "Stable",
      },
      {
        category: "Food",
        planned: "$700-$800",
        actual: "$600-$700",
        status: "Under",
      },
      {
        category: "Health and training",
        planned: "$200-$300",
        actual: "$100-$200",
        status: "Under",
      },
      {
        category: "Flexible",
        planned: "$700-$900",
        actual: "$600-$700",
        status: "Watch",
      },
    ],
  },
  emergencyFund: {
    currentRange: "$9k-$11k",
    targetRange: "$15k-$17k",
    progress: 64,
    monthsCovered: "3.2 months",
    note:
      "The next stable milestone is four months covered before adding new optional commitments.",
  },
  goals: [
    {
      title: "Reach a four-month emergency fund",
      status: "Active",
      progress: 64,
      why: "A larger buffer protects calm decision-making and reduces pressure.",
      nextAction: "Route the next variable income block into the emergency fund.",
    },
    {
      title: "Keep flexible spending below target",
      status: "On track",
      progress: 72,
      why: "Flexible spending is where small leaks become invisible.",
      nextAction: "Review subscriptions before the next billing cycle.",
    },
    {
      title: "Invest every month without checking daily",
      status: "Building",
      progress: 58,
      why: "Consistency matters more than emotional market monitoring.",
      nextAction: "Keep the automatic contribution and skip extra checking this week.",
    },
  ],
  purchases: {
    worthIt: [
      {
        title: "Gym membership",
        range: "$50-$100",
        reason: "Directly supports health, discipline, and training consistency.",
      },
      {
        title: "Quality desk setup",
        range: "$200-$300",
        reason: "Improves daily work posture and focus for repeated use.",
      },
      {
        title: "Technical course",
        range: "$100-$200",
        reason:
          "Converted into a shipped page and better implementation patterns.",
      },
    ],
    regrets: [
      {
        title: "Convenience meals",
        range: "$100-$200",
        lesson: "The cost came from poor planning, not real enjoyment.",
      },
      {
        title: "Unused subscription",
        range: "$20-$50",
        lesson: "Cancel anything that is not used in the same week it renews.",
      },
      {
        title: "Impulse accessories",
        range: "$50-$100",
        lesson: "Wait 48 hours before buying small upgrades.",
      },
    ],
  },
  insights: [
    "The budget is healthy because fixed costs are predictable and savings happen early.",
    "Most regret spending comes from tired decisions, not expensive planned purchases.",
    "The next financial gain is less about earning more and more about protecting variable income.",
  ],
} satisfies FinancePageData;
