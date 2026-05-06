export type PhaseTwoPlaceholderItem = {
  title: string;
  detail: string;
};

type PhaseTwoPlaceholderData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  items: PhaseTwoPlaceholderItem[];
};

export type HealthPageData = {
  header: {
    eyebrow: string;
    title: string;
    dateLabel: string;
    description: string;
    actionLabel: string;
  };
  overview: Array<{
    label: string;
    value: string;
    detail: string;
    tone: "accent" | "foreground" | "muted";
  }>;
  sleep: {
    average: string;
    quality: string;
    target: string;
    insight: string;
    trend: Array<{
      day: string;
      hours: number;
      quality: number;
    }>;
  };
  weight: {
    current: string;
    change: string;
    target: string;
    note: string;
    trend: Array<{
      week: string;
      weight: number;
    }>;
  };
  hydration: {
    current: number;
    target: number;
    unit: string;
    note: string;
    week: Array<{
      day: string;
      value: number;
    }>;
  };
  steps: {
    current: number;
    target: number;
    note: string;
    week: Array<{
      day: string;
      value: number;
    }>;
  };
  readiness: {
    energy: number;
    stress: number;
    recovery: number;
    note: string;
    trend: Array<{
      day: string;
      energy: number;
      stress: number;
      recovery: number;
    }>;
  };
  bodyMeasurements: Array<{
    label: string;
    value: string;
    change: string;
  }>;
  nutritionNotes: Array<{
    title: string;
    detail: string;
  }>;
  medicalNotes: Array<{
    title: string;
    detail: string;
    date: string;
  }>;
  goals: Array<{
    title: string;
    status: string;
    progress: number;
    why: string;
    nextAction: string;
  }>;
  insights: string[];
};

export type LearningPageData = {
  header: {
    eyebrow: string;
    title: string;
    dateLabel: string;
    description: string;
    actionLabel: string;
  };
  overview: Array<{
    label: string;
    value: string;
    detail: string;
    tone: "accent" | "foreground" | "muted";
  }>;
  skills: Array<{
    name: string;
    category: string;
    currentLevel: string;
    targetLevel: string;
    progress: number;
    currentFocus: string;
    practiceHours: number;
    resources: string[];
  }>;
  booksRead: Array<{
    title: string;
    author: string;
    status: string;
    notes: string;
  }>;
  coursesCompleted: Array<{
    title: string;
    provider: string;
    completedAt: string;
    takeaway: string;
  }>;
  projectsBuilt: Array<{
    title: string;
    category: string;
    status: string;
    lesson: string;
  }>;
  certifications: Array<{
    title: string;
    issuer: string;
    status: string;
    date: string;
  }>;
  studyHours: {
    total: number;
    target: number;
    trend: Array<{
      week: string;
      hours: number;
      deepWork: number;
    }>;
  };
  currentFocus: {
    title: string;
    why: string;
    nextSession: string;
    constraint: string;
  };
  notes: Array<{
    title: string;
    detail: string;
  }>;
  masteryTargets: Array<{
    title: string;
    reason: string;
    nextAction: string;
  }>;
};
export type FinancePageData = {
  header: {
    eyebrow: string;
    title: string;
    dateLabel: string;
    description: string;
    actionLabel: string;
  };
  overview: Array<{
    label: string;
    value: string;
    detail: string;
    tone: "accent" | "foreground" | "muted";
  }>;
  income: {
    monthlyRange: string;
    stability: string;
    note: string;
    sources: Array<{
      title: string;
      range: string;
      detail: string;
    }>;
    trend: Array<{
      month: string;
      income: number;
      expenses: number;
      savings: number;
    }>;
  };
  expenses: {
    monthlyRange: string;
    budgetRange: string;
    note: string;
    categories: Array<{
      name: string;
      amount: number;
      budget: number;
      detail: string;
    }>;
    recurring: Array<{
      title: string;
      range: string;
      cadence: string;
    }>;
  };
  savings: {
    rate: string;
    monthlyRange: string;
    note: string;
    buckets: Array<{
      title: string;
      range: string;
      progress: number;
      detail: string;
    }>;
  };
  debt: {
    totalRange: string;
    payoffProgress: number;
    nextPayment: string;
    note: string;
    items: Array<{
      title: string;
      range: string;
      progress: number;
      focus: string;
    }>;
  };
  investments: {
    range: string;
    monthlyContribution: string;
    note: string;
    allocation: Array<{
      label: string;
      percentage: number;
      detail: string;
    }>;
  };
  budget: {
    month: string;
    plannedRange: string;
    actualRange: string;
    status: string;
    rows: Array<{
      category: string;
      planned: string;
      actual: string;
      status: string;
    }>;
  };
  emergencyFund: {
    currentRange: string;
    targetRange: string;
    progress: number;
    monthsCovered: string;
    note: string;
  };
  goals: Array<{
    title: string;
    status: string;
    progress: number;
    why: string;
    nextAction: string;
  }>;
  purchases: {
    worthIt: Array<{
      title: string;
      range: string;
      reason: string;
    }>;
    regrets: Array<{
      title: string;
      range: string;
      lesson: string;
    }>;
  };
  insights: string[];
};
export type RelationshipsPageData = PhaseTwoPlaceholderData;
export type TravelMemoriesPageData = PhaseTwoPlaceholderData;
export type FutureSelfPageData = PhaseTwoPlaceholderData;
export type YearInReviewPageData = PhaseTwoPlaceholderData;
