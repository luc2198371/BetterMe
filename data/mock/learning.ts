import type { LearningPageData } from "@/types/phase-two";

export const learningPageData = {
  header: {
    eyebrow: "Knowledge and skills",
    title: "Learning",
    dateLabel: "Wednesday, May 6 / study review",
    description:
      "Track the skills, books, courses, projects, certifications, and study consistency that turn curiosity into durable capability.",
    actionLabel: "Log study block",
  },
  overview: [
    {
      label: "Active skills",
      value: "5",
      detail: "Across code, design, systems, and writing",
      tone: "foreground",
    },
    {
      label: "Study hours",
      value: "38h",
      detail: "This month against a 48h target",
      tone: "accent",
    },
    {
      label: "Books read",
      value: "6",
      detail: "Finished and summarized",
      tone: "foreground",
    },
    {
      label: "Courses",
      value: "3",
      detail: "Completed with notes",
      tone: "foreground",
    },
    {
      label: "Projects built",
      value: "4",
      detail: "Used as proof of learning",
      tone: "accent",
    },
    {
      label: "Certifications",
      value: "2",
      detail: "One active renewal",
      tone: "muted",
    },
    {
      label: "Current focus",
      value: "Product systems",
      detail: "Connect design, data, and execution",
      tone: "foreground",
    },
  ],
  skills: [
    {
      name: "Full-stack product engineering",
      category: "Code",
      currentLevel: "Intermediate",
      targetLevel: "Advanced",
      progress: 68,
      currentFocus: "Ship complete product slices with cleaner data boundaries.",
      practiceHours: 146,
      resources: ["Next.js docs", "React patterns", "TypeScript handbook"],
    },
    {
      name: "UI/UX product design",
      category: "Design",
      currentLevel: "Intermediate",
      targetLevel: "Advanced",
      progress: 62,
      currentFocus: "Build dense, quiet interfaces that stay readable under real data.",
      practiceHours: 92,
      resources: ["Design systems notes", "Dashboard critiques", "Typography references"],
    },
    {
      name: "Personal systems architecture",
      category: "Systems",
      currentLevel: "Advanced beginner",
      targetLevel: "Advanced",
      progress: 54,
      currentFocus: "Turn reflection into useful loops instead of more dashboards.",
      practiceHours: 74,
      resources: ["Weekly reviews", "Life OS notes", "Habit data"],
    },
    {
      name: "Technical writing",
      category: "Writing",
      currentLevel: "Intermediate",
      targetLevel: "Advanced",
      progress: 57,
      currentFocus: "Explain decisions with fewer words and stronger structure.",
      practiceHours: 63,
      resources: ["Project docs", "Architecture notes", "Daily summaries"],
    },
    {
      name: "Data visualization",
      category: "Analytics",
      currentLevel: "Beginner",
      targetLevel: "Intermediate",
      progress: 36,
      currentFocus: "Use charts only when they clarify a pattern.",
      practiceHours: 28,
      resources: ["Recharts docs", "Dashboard examples", "Chart critique notes"],
    },
  ],
  booksRead: [
    {
      title: "Deep Work",
      author: "Cal Newport",
      status: "Finished",
      notes: "Most useful idea: protect attention before optimizing output.",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      status: "Finished",
      notes: "Identity-based habits connect directly to the Life OS structure.",
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      status: "Finished",
      notes: "Good design makes the next action visible without explanation.",
    },
  ],
  coursesCompleted: [
    {
      title: "Advanced TypeScript Patterns",
      provider: "Self-paced",
      completedAt: "April 2026",
      takeaway: "Prefer narrow domain types over generic object shapes.",
    },
    {
      title: "Product Analytics Fundamentals",
      provider: "Workshop",
      completedAt: "March 2026",
      takeaway: "Metrics need a decision attached or they become decoration.",
    },
    {
      title: "Design Systems for Apps",
      provider: "Independent study",
      completedAt: "February 2026",
      takeaway: "Constraints create coherence when a product keeps growing.",
    },
  ],
  projectsBuilt: [
    {
      title: "Life Journey Dashboard",
      category: "Personal OS",
      status: "Active",
      lesson: "A private tool is useful when every page answers one honest question.",
    },
    {
      title: "Habit consistency grid",
      category: "Data UI",
      status: "Shipped",
      lesson: "Small repeated data needs dense layout, not bigger decoration.",
    },
    {
      title: "Training progress view",
      category: "Health system",
      status: "Shipped",
      lesson: "Charts work best when the user already knows what action follows.",
    },
    {
      title: "Weekly review loop",
      category: "Reflection",
      status: "Building",
      lesson: "Reflection pages need friction removed or they will be skipped.",
    },
  ],
  certifications: [
    {
      title: "Product Analytics Foundations",
      issuer: "Independent program",
      status: "Complete",
      date: "March 2026",
    },
    {
      title: "Frontend Architecture Review",
      issuer: "Internal practice track",
      status: "Active renewal",
      date: "Due June 2026",
    },
  ],
  studyHours: {
    total: 38,
    target: 48,
    trend: [
      { week: "W1", hours: 7, deepWork: 4 },
      { week: "W2", hours: 9, deepWork: 6 },
      { week: "W3", hours: 6, deepWork: 3 },
      { week: "W4", hours: 10, deepWork: 7 },
      { week: "W5", hours: 6, deepWork: 4 },
    ],
  },
  currentFocus: {
    title: "Build product systems that connect design, data, and behavior.",
    why:
      "This is the skill that compounds across the dashboard, career work, and personal systems.",
    nextSession: "Refactor one page into clearer data and view boundaries.",
    constraint: "Do not study more concepts until one concept becomes a working page.",
  },
  notes: [
    {
      title: "Best learning pattern",
      detail: "Read just enough, build immediately, then write the lesson in plain words.",
    },
    {
      title: "Current bottleneck",
      detail: "Too many resources create false progress. One project should drive the next week.",
    },
    {
      title: "Review cue",
      detail: "Every Sunday, choose one thing to keep practicing and one thing to stop collecting.",
    },
  ],
  masteryTargets: [
    {
      title: "Build complete product loops",
      reason: "This combines engineering, design, product judgment, and data structure.",
      nextAction: "Ship one Phase 2 page from mock data to polished dashboard.",
    },
    {
      title: "Explain architecture clearly",
      reason: "Clear explanations reveal weak decisions before they become implementation cost.",
      nextAction: "Write a short technical note after each major page build.",
    },
    {
      title: "Use charts with discipline",
      reason: "A chart should clarify a trend, not decorate a section.",
      nextAction: "Keep every chart tied to one visible decision or insight.",
    },
  ],
} satisfies LearningPageData;
