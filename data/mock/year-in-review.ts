import type { YearInReviewPageData } from "@/types/phase-two";

export const yearInReviewPageData = {
  eyebrow: "Yearly reflection",
  title: "Year-in-Review",
  description:
    "A yearly reflection surface for the moments, lessons, people, places, completed goals, and themes that shaped the year.",
  primaryLabel: "Year summary",
  items: [
    {
      title: "Moments",
      detail:
        "Placeholder structure for best moments, hardest moments, favorite photos, and important memories.",
    },
    {
      title: "Culture and goals",
      detail:
        "Track books, movies, music, goals completed, places visited, and people who mattered.",
    },
    {
      title: "Change and direction",
      detail:
        "Summarize how life changed this year and choose the next year theme.",
    },
  ],
} satisfies YearInReviewPageData;
