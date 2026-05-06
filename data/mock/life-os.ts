export const lifeSnapshot = {
  name: "Life Journey Dashboard",
  subtitle: "Personal Life OS",
  dateLabel: "Private daily command center",
  currentFocus: "Build discipline, strength, self-awareness, and calm consistency.",
  identityStatement: "Become focused, capable, healthy, and honest with yourself.",
  stats: [
    {
      label: "Life score",
      value: "74",
      detail: "steady progress",
    },
    {
      label: "Mood",
      value: "Calm",
      detail: "grounded",
    },
    {
      label: "Energy",
      value: "7/10",
      detail: "workable",
    },
    {
      label: "Gym streak",
      value: "4",
      detail: "sessions",
    },
  ],
};

export const dashboard = {
  welcome: {
    eyebrow: "Personal Life OS",
    title: "Welcome back",
    dateLabel: "Wednesday, May 6",
    summary:
      "A calm read on where life stands today: steady discipline, clear priorities, and one honest next action.",
    checkInLabel: "Quick check-in",
  },
  metrics: [
    {
      label: "Life score",
      value: "74",
      unit: "/100",
      detail: "Up 3 points from last week",
      highlight: true,
    },
    {
      label: "Today's mood",
      value: "Calm",
      unit: "",
      detail: "Clear, grounded, slightly tired",
      highlight: false,
    },
    {
      label: "Energy level",
      value: "7",
      unit: "/10",
      detail: "Enough for focused work",
      highlight: false,
    },
    {
      label: "Habit completion",
      value: "82",
      unit: "%",
      detail: "9 of 11 habits completed",
      highlight: false,
    },
    {
      label: "Gym streak",
      value: "4",
      unit: "days",
      detail: "Next session: lower body",
      highlight: false,
    },
  ],
  mainGoal: {
    title: "Build a stronger, calmer, more disciplined identity",
    category: "Current main goal",
    progress: 62,
    why:
      "This goal connects training, daily focus, and self-respect into one repeatable system.",
    nextAction: "Complete the evening review and prepare tomorrow's first task.",
    friction:
      "The main risk is letting a crowded day replace the basic routine.",
  },
  latestJournalEntry: {
    title: "What I noticed today",
    date: "Today / 07:15",
    mood: "Reflective",
    excerpt:
      "I work better when I start with one honest priority instead of a full list. The day feels lighter when I decide what matters before reacting to noise.",
    tags: ["focus", "discipline", "self-awareness"],
    prompt: "What pattern did I interrupt today?",
  },
  nextMilestone: {
    title: "Finish the first complete Life OS review loop",
    date: "May 12",
    category: "Next milestone",
    meaning:
      "One full week of daily check-ins, habit tracking, training review, and a weekly reflection.",
    nextStep: "Review the last seven days and choose one constraint for next week.",
  },
  weeklyProgress: [
    {
      label: "Habits",
      value: 82,
      detail: "Strong consistency across mornings and training.",
    },
    {
      label: "Training",
      value: 71,
      detail: "Four sessions completed with one recovery day protected.",
    },
    {
      label: "Reflection",
      value: 64,
      detail: "Journal entries are useful but still inconsistent.",
    },
    {
      label: "Focus",
      value: 76,
      detail: "Deep work blocks improved after removing extra priorities.",
    },
    {
      label: "Recovery",
      value: 58,
      detail: "Sleep timing needs attention before intensity increases.",
    },
  ],
};

export const today = {
  header: {
    eyebrow: "Daily command",
    title: "Today",
    dateLabel: "Wednesday, May 6 / private check-in",
    intent:
      "Keep the day honest: know your state, choose the main priority, and close the loop before tomorrow.",
    actionLabel: "Save check-in",
  },
  checkIn: {
    moodOptions: ["Calm", "Focused", "Tired", "Heavy", "Clear"],
    defaultMood: "Calm",
    energy: 7,
    stress: 4,
    focus: 8,
    sleepHours: 7.25,
  },
  planning: {
    mainGoal: {
      title: "Protect one focused work block before reacting to everything else.",
      detail:
        "The win is not a perfect day. The win is making the first priority real before the day gets noisy.",
    },
    tasks: [
      {
        title: "Finish the first deep work block",
        meta: "60 minutes / before messages",
      },
      {
        title: "Review training plan",
        meta: "10 minutes / keep it simple",
      },
      {
        title: "Write the evening reflection",
        meta: "5 minutes / before shutdown",
      },
    ],
    habits: [
      {
        title: "Morning reflection",
        cadence: "Daily",
        streak: 12,
      },
      {
        title: "Train or walk",
        cadence: "5x week",
        streak: 4,
      },
      {
        title: "Deep work block",
        cadence: "Weekdays",
        streak: 8,
      },
      {
        title: "Evening shutdown",
        cadence: "Daily",
        streak: 3,
      },
    ],
  },
  bodyCare: {
    waterTarget: 8,
    waterDefault: 3,
    workout: {
      title: "Lower body strength",
      focus: "Squat pattern, posterior chain, easy conditioning",
      duration: "50 minutes",
      plan: "Warm up, main lift, two accessories, then a short walk.",
    },
  },
  reflection: {
    gratitude: "A steady morning and enough energy to do the important work.",
    learned:
      "Starting with one clear priority removes pressure from the rest of the list.",
    improveTomorrow:
      "Set the first work block before opening messages or planning extras.",
  },
};

export const habits = [
  {
    title: "Morning reflection",
    cadence: "Daily",
    streak: 12,
  },
  {
    title: "Train or walk",
    cadence: "5x week",
    streak: 4,
  },
  {
    title: "Deep work block",
    cadence: "Weekdays",
    streak: 8,
  },
];

export const habitsDashboard = {
  header: {
    eyebrow: "Consistency",
    title: "Habits",
    dateLabel: "Wednesday, May 6 / week 19",
    description:
      "Track the repeated actions that keep the day steady: what happened today, what holds across the week, and what needs attention next.",
    actionLabel: "Review habits",
  },
  weekLabels: ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
  habits: [
    {
      id: "morning-reflection",
      title: "Morning reflection",
      category: "Mind",
      cadence: "Daily",
      target: "5 minutes before planning",
      streak: 12,
      todayDone: true,
      week: [true, true, true, true, true, true, true],
      monthDays: [
        1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 22,
        23, 24, 25, 26, 27, 29, 30,
      ],
      insight: "Most reliable when it happens before messages.",
    },
    {
      id: "train-or-walk",
      title: "Train or walk",
      category: "Body",
      cadence: "5x week",
      target: "Lift, condition, or walk for 30 minutes",
      streak: 4,
      todayDone: false,
      week: [true, false, true, true, true, false, false],
      monthDays: [1, 3, 4, 6, 8, 10, 11, 13, 15, 17, 19, 20, 22, 24, 26, 29],
      insight: "Afternoon plans slip unless training is scheduled early.",
    },
    {
      id: "deep-work",
      title: "Deep work block",
      category: "Focus",
      cadence: "Weekdays",
      target: "One protected 60 minute block",
      streak: 8,
      todayDone: true,
      week: [true, true, false, false, true, true, true],
      monthDays: [
        1, 2, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 26, 27,
        28, 29, 30,
      ],
      insight: "Best results happen when the task is chosen the night before.",
    },
    {
      id: "water",
      title: "Water target",
      category: "Recovery",
      cadence: "Daily",
      target: "8 glasses before evening",
      streak: 6,
      todayDone: true,
      week: [true, true, true, false, true, true, true],
      monthDays: [
        1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22,
        23, 24, 26, 27, 28, 29, 30,
      ],
      insight: "Completion rises when the first two glasses are done early.",
    },
    {
      id: "journal",
      title: "Evening journal",
      category: "Reflection",
      cadence: "4x week",
      target: "One honest paragraph",
      streak: 2,
      todayDone: false,
      week: [false, true, false, true, false, true, false],
      monthDays: [2, 4, 7, 9, 11, 14, 16, 18, 21, 23, 25, 28, 30],
      insight: "The habit fails most often after late shutdowns.",
    },
    {
      id: "shutdown",
      title: "Evening shutdown",
      category: "Planning",
      cadence: "Daily",
      target: "Clear desk and set tomorrow's first task",
      streak: 3,
      todayDone: false,
      week: [true, false, true, false, true, true, false],
      monthDays: [1, 2, 4, 6, 8, 9, 11, 13, 15, 16, 18, 20, 22, 23, 25, 27, 29],
      insight: "The next morning starts cleaner when this takes 10 minutes.",
    },
  ],
  monthlyCalendar: {
    label: "May 2026",
    daysInMonth: 31,
    startsOn: 4,
    today: 6,
    completedDays: [
      1, 2, 3, 4, 5, 6, 8, 9, 11, 12, 13, 15, 16, 18, 19, 20, 22, 23, 25,
      26, 27, 29, 30,
    ],
  },
  bestHabit: {
    title: "Morning reflection",
    value: "100%",
    detail: "7 of 7 days this week",
    reason:
      "It has the strongest cue: it happens before planning and before the day gets crowded.",
    nextAction: "Keep it first. Do not attach extra work to it.",
  },
  weakestHabit: {
    title: "Evening journal",
    value: "43%",
    detail: "3 of 7 days this week",
    reason:
      "It depends on a clean shutdown, so it gets skipped when the day runs late.",
    nextAction: "Move it earlier and write one paragraph before screens.",
  },
  insights: [
    "Morning habits are stable because they have clear triggers.",
    "Evening habits need smaller minimums so tired days still count.",
    "Training consistency improves when the plan is chosen before lunch.",
  ],
};

export const goals = [
  {
    title: "Build a stronger body",
    horizon: "Now",
    progress: 62,
  },
  {
    title: "Create a consistent life review system",
    horizon: "Soon",
    progress: 38,
  },
  {
    title: "Write a private autobiography",
    horizon: "Future",
    progress: 14,
  },
];

export const goalsDashboard = {
  header: {
    eyebrow: "Direction",
    title: "Goals",
    dateLabel: "Wednesday, May 6 / horizon review",
    description:
      "A structured read on what matters now, what is coming soon, what belongs to the future, and what still deserves to be held as a dream.",
    actionLabel: "Review goals",
  },
  groups: [
    {
      horizon: "Now",
      summary: "Active goals that shape this week and need visible movement.",
      goals: [
        {
          title: "Build a stronger body",
          category: "Health",
          whyItMatters:
            "Strength makes the rest of life feel more capable, grounded, and self-respecting.",
          deadline: "May 31, 2026",
          progress: 62,
          nextAction: "Complete the next lower body session and log the main lift.",
          obstacles:
            "Late nights and crowded afternoons make training easier to postpone.",
          lessonsLearned:
            "Simple sessions done consistently beat ambitious plans that depend on perfect energy.",
          status: "On track",
        },
        {
          title: "Protect one focused work block daily",
          category: "Focus",
          whyItMatters:
            "The day feels honest when the most important work happens before noise takes over.",
          deadline: "May 12, 2026",
          progress: 76,
          nextAction: "Choose tomorrow's first task before ending today.",
          obstacles:
            "Messages and small admin tasks create false urgency in the morning.",
          lessonsLearned:
            "A defined first task removes most of the friction from starting.",
          status: "Active",
        },
      ],
    },
    {
      horizon: "Soon",
      summary: "Near-term systems that should become easier to repeat.",
      goals: [
        {
          title: "Create a consistent life review system",
          category: "Reflection",
          whyItMatters:
            "A repeatable review loop turns scattered effort into visible patterns and better choices.",
          deadline: "June 15, 2026",
          progress: 38,
          nextAction: "Finish one full weekly review using the same prompts.",
          obstacles:
            "Too many prompts can make the review feel heavier than the benefit.",
          lessonsLearned:
            "Short reviews are more useful when they end with one constraint for the next week.",
          status: "Building",
        },
        {
          title: "Stabilize evening shutdown",
          category: "Planning",
          whyItMatters:
            "A clean shutdown protects sleep, reduces morning friction, and keeps tomorrow clear.",
          deadline: "June 30, 2026",
          progress: 44,
          nextAction: "Set a 10 minute shutdown block before the final screen session.",
          obstacles:
            "When the evening runs late, the habit feels optional and gets skipped.",
          lessonsLearned:
            "The shutdown works best as a small reset, not a full review.",
          status: "Needs attention",
        },
      ],
    },
    {
      horizon: "Future",
      summary: "Longer commitments that need patience and steady evidence.",
      goals: [
        {
          title: "Write a private autobiography",
          category: "Identity",
          whyItMatters:
            "Writing the story clearly makes lessons, turning points, and values easier to understand.",
          deadline: "December 31, 2026",
          progress: 14,
          nextAction: "Draft the outline for the first five life chapters.",
          obstacles:
            "The project can feel too large without a narrow chapter structure.",
          lessonsLearned:
            "Specific memories are easier to write than broad summaries.",
          status: "Exploring",
        },
        {
          title: "Build a durable personal operating system",
          category: "Systems",
          whyItMatters:
            "A durable system keeps goals, habits, training, and reflection connected instead of scattered.",
          deadline: "September 30, 2026",
          progress: 27,
          nextAction: "Connect weekly review insights back into goals and habits.",
          obstacles:
            "Too many dashboards can become another place to manage instead of a tool to think.",
          lessonsLearned:
            "The system is strongest when each page answers one practical question.",
          status: "Shaping",
        },
      ],
    },
    {
      horizon: "Dream",
      summary: "Ambitions worth preserving even before they become active plans.",
      goals: [
        {
          title: "Design a life with more location freedom",
          category: "Freedom",
          whyItMatters:
            "More control over place and time creates room for deeper work, health, and relationships.",
          deadline: "Open horizon",
          progress: 9,
          nextAction: "Define the minimum income, routine, and constraints for a trial month.",
          obstacles:
            "The dream is vague until the practical requirements are written down.",
          lessonsLearned:
            "Freedom needs structure first, otherwise it stays abstract.",
          status: "Dreaming",
        },
        {
          title: "Create work that compounds for years",
          category: "Legacy",
          whyItMatters:
            "Compounding work creates value beyond daily output and reflects the person being built.",
          deadline: "Open horizon",
          progress: 6,
          nextAction: "List three project ideas that could still matter in five years.",
          obstacles:
            "Short-term urgency can crowd out slow, meaningful creation.",
          lessonsLearned:
            "The best ideas usually connect skill, usefulness, and lived experience.",
          status: "Incubating",
        },
      ],
    },
  ],
};

export const journalEntries = [
  {
    title: "What I noticed today",
    mood: "Reflective",
    excerpt:
      "I work better when I start with one honest priority instead of a full list.",
  },
  {
    title: "Pattern to change",
    mood: "Focused",
    excerpt:
      "Avoiding small discomfort creates larger pressure later. Start earlier.",
  },
];

export const journalDashboard = {
  header: {
    eyebrow: "Reflection",
    title: "Journal",
    dateLabel: "Wednesday, May 6 / private archive",
    description:
      "Search, revisit, and mark the entries that explain the pattern behind the day.",
    actionLabel: "New entry",
  },
  prompts: [
    "What did I avoid today, and what did it cost?",
    "Where did I act like the person I am trying to become?",
    "What pattern showed up again?",
    "What should tomorrow protect before anything else?",
  ],
  tags: [
    "focus",
    "discipline",
    "self-awareness",
    "training",
    "recovery",
    "planning",
    "identity",
  ],
  moods: ["Reflective", "Focused", "Calm", "Heavy", "Clear"],
  entries: [
    {
      id: "noticed-today",
      title: "What I noticed today",
      date: "May 6, 2026",
      time: "07:15",
      mood: "Reflective",
      tags: ["focus", "discipline", "self-awareness"],
      prompt: "What pattern did I interrupt today?",
      excerpt:
        "I work better when I start with one honest priority instead of a full list.",
      body:
        "I work better when I start with one honest priority instead of a full list. The day feels lighter when I decide what matters before reacting to noise. The pattern I interrupted was checking everything before choosing anything.",
      favorite: true,
      wordCount: 42,
    },
    {
      id: "pattern-to-change",
      title: "Pattern to change",
      date: "May 5, 2026",
      time: "21:40",
      mood: "Focused",
      tags: ["discipline", "planning"],
      prompt: "What small discomfort did I delay?",
      excerpt:
        "Avoiding small discomfort creates larger pressure later. Start earlier.",
      body:
        "Avoiding small discomfort creates larger pressure later. Start earlier, while the work is still small enough to handle calmly. The evening showed me that waiting for the right mood is just another way to lose time.",
      favorite: false,
      wordCount: 37,
    },
    {
      id: "training-after-work",
      title: "Training after work",
      date: "May 4, 2026",
      time: "18:05",
      mood: "Clear",
      tags: ["training", "discipline", "recovery"],
      prompt: "What helped me follow through?",
      excerpt:
        "The session happened because the plan was already decided before energy dropped.",
      body:
        "The session happened because the plan was already decided before energy dropped. I did not need to negotiate with myself. The lesson is to choose the minimum plan early, then let execution be almost boring.",
      favorite: true,
      wordCount: 36,
    },
    {
      id: "quiet-morning",
      title: "Quiet morning",
      date: "May 3, 2026",
      time: "08:20",
      mood: "Calm",
      tags: ["recovery", "self-awareness"],
      prompt: "What made the morning feel steady?",
      excerpt:
        "Less input gave me more room to hear what I already knew needed attention.",
      body:
        "Less input gave me more room to hear what I already knew needed attention. The quiet did not solve anything by itself, but it made the next honest action visible. I want more mornings like this.",
      favorite: false,
      wordCount: 36,
    },
    {
      id: "shutdown-worked",
      title: "Shutdown worked",
      date: "May 2, 2026",
      time: "22:10",
      mood: "Clear",
      tags: ["planning", "focus"],
      prompt: "What made tomorrow easier?",
      excerpt:
        "Writing tomorrow's first task removed a small but real layer of morning friction.",
      body:
        "Writing tomorrow's first task removed a small but real layer of morning friction. It took less than ten minutes. The value was not in planning the whole day, but in deciding where the first clean move begins.",
      favorite: true,
      wordCount: 39,
    },
    {
      id: "heavy-afternoon",
      title: "Heavy afternoon",
      date: "May 1, 2026",
      time: "16:35",
      mood: "Heavy",
      tags: ["recovery", "self-awareness"],
      prompt: "What did my energy teach me?",
      excerpt:
        "The low-energy block was not laziness. It was a signal that recovery had been underpriced.",
      body:
        "The low-energy block was not laziness. It was a signal that recovery had been underpriced. I kept pushing with a tired mind and then judged the result. The better move is to plan recovery before intensity decides for me.",
      favorite: false,
      wordCount: 42,
    },
    {
      id: "identity-note",
      title: "Identity note",
      date: "April 30, 2026",
      time: "06:55",
      mood: "Reflective",
      tags: ["identity", "discipline"],
      prompt: "Who am I becoming through repetition?",
      excerpt:
        "Discipline feels less dramatic when I treat it as identity evidence, not punishment.",
      body:
        "Discipline feels less dramatic when I treat it as identity evidence, not punishment. Each small repeat is a vote. I do not need the day to feel inspiring; I need the next action to be aligned.",
      favorite: true,
      wordCount: 37,
    },
    {
      id: "attention-audit",
      title: "Attention audit",
      date: "April 29, 2026",
      time: "20:25",
      mood: "Focused",
      tags: ["focus", "planning", "self-awareness"],
      prompt: "Where did my attention leak?",
      excerpt:
        "The biggest leak was not distraction itself. It was switching without deciding.",
      body:
        "The biggest leak was not distraction itself. It was switching without deciding. I moved between tasks as if motion meant progress. Tomorrow needs fewer open loops and a clearer end point for the first work block.",
      favorite: false,
      wordCount: 39,
    },
  ],
};

export const timelineEvents = [
  {
    date: "Past",
    title: "Lessons that shaped me",
    category: "Identity",
  },
  {
    date: "Present",
    title: "Systems over moods",
    category: "Discipline",
  },
  {
    date: "Future",
    title: "Person I am becoming",
    category: "Vision",
  },
];

export const weeklyReview = {
  wins: ["Kept training consistent", "Reflected before reacting"],
  lessons: ["Energy management matters", "Simple plans are easier to repeat"],
  nextFocus: "Protect the first hour of the day.",
};

export const gymSnapshot = {
  split: "Upper / Lower / Conditioning",
  lastWorkout: "Upper strength",
  nextWorkout: "Lower body",
  streak: 4,
};
