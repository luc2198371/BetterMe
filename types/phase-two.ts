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
export type RelationshipsPageData = {
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
  importantPeople: Array<{
    name: string;
    role: string;
    group: "Family" | "Friend" | "Mentor";
    lastTalked: string;
    nextCheckIn: string;
    whyTheyMatter: string;
    privateNote: string;
  }>;
  family: Array<{
    name: string;
    relationship: string;
    lastTalked: string;
    nextAction: string;
    sharedMemory: string;
  }>;
  friends: Array<{
    name: string;
    rhythm: string;
    lastTalked: string;
    nextAction: string;
    note: string;
  }>;
  mentors: Array<{
    name: string;
    lesson: string;
    lastContact: string;
    nextThoughtfulAction: string;
  }>;
  checkOn: Array<{
    name: string;
    reason: string;
    suggestedAction: string;
    timing: string;
  }>;
  birthdays: Array<{
    name: string;
    date: string;
    plan: string;
  }>;
  lastTalked: Array<{
    name: string;
    date: string;
    context: string;
  }>;
  sharedMemories: Array<{
    title: string;
    people: string;
    date: string;
    meaning: string;
  }>;
  lessons: Array<{
    person: string;
    lesson: string;
    howItChangedMe: string;
  }>;
  goals: Array<{
    title: string;
    status: string;
    progress: number;
    why: string;
    nextAction: string;
  }>;
  reconnectReminders: Array<{
    name: string;
    reminder: string;
    nextStep: string;
  }>;
};
export type TravelMemoriesPageData = {
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
  countriesVisited: Array<{
    country: string;
    visits: string;
    firstVisited: string;
    memory: string;
  }>;
  citiesLivedIn: Array<{
    city: string;
    years: string;
    season: string;
    lesson: string;
  }>;
  favoritePlaces: Array<{
    name: string;
    location: string;
    feeling: string;
    memory: string;
  }>;
  plannedTrips: Array<{
    title: string;
    window: string;
    status: string;
    intention: string;
  }>;
  bucketListDestinations: Array<{
    destination: string;
    reason: string;
    firstStep: string;
  }>;
  memoryArchive: Array<{
    title: string;
    date: string;
    place: string;
    type: string;
    meaning: string;
  }>;
  photoPlaceholders: Array<{
    title: string;
    date: string;
    caption: string;
  }>;
  videoPlaceholders: Array<{
    title: string;
    duration: string;
    caption: string;
  }>;
  letters: Array<{
    title: string;
    date: string;
    recipient: string;
    note: string;
  }>;
  voiceNotes: Array<{
    title: string;
    date: string;
    length: string;
    note: string;
  }>;
  favoriteQuotes: Array<{
    quote: string;
    source: string;
    why: string;
  }>;
  importantMemories: Array<{
    title: string;
    date: string;
    place: string;
    whyItMatters: string;
  }>;
  onThisDay: {
    date: string;
    title: string;
    place: string;
    yearsAgo: string;
    memory: string;
  };
  travelMap: {
    title: string;
    description: string;
    markers: Array<{
      label: string;
      x: number;
      y: number;
      type: "visited" | "lived" | "planned" | "dream";
    }>;
  };
};
export type FutureSelfPageData = {
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
  oneYearSelf: {
    title: string;
    identity: string;
    habits: string[];
    evidence: string;
    nextAction: string;
  };
  fiveYearSelf: {
    title: string;
    identity: string;
    capabilities: string[];
    environment: string;
    nextAction: string;
  };
  tenYearVision: {
    title: string;
    identity: string;
    lifeShape: string;
    contribution: string;
    nonNegotiable: string;
  };
  idealDay: Array<{
    time: string;
    title: string;
    detail: string;
  }>;
  dreamLifestyle: Array<{
    title: string;
    detail: string;
  }>;
  coreValues: Array<{
    value: string;
    definition: string;
    practice: string;
  }>;
  personalRules: Array<{
    rule: string;
    reason: string;
  }>;
  personToBecome: {
    title: string;
    statement: string;
    traits: Array<{
      label: string;
      detail: string;
    }>;
  };
  letterToFutureMe: {
    date: string;
    title: string;
    body: string;
  };
  letterFromPastMe: {
    date: string;
    title: string;
    body: string;
  };
  legacyStatement: {
    title: string;
    statement: string;
    proof: string[];
  };
};
export type YearInReviewPageData = PhaseTwoPlaceholderData;
