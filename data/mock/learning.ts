import type { LearningPageData } from "@/types/phase-two";

export const learningPageData = {
  eyebrow: "Knowledge and skills",
  title: "Learning",
  description:
    "A focused page for skills, books, courses, projects, study hours, certifications, and the subjects worth mastering next.",
  primaryLabel: "Learning overview",
  items: [
    {
      title: "Current focus",
      detail:
        "Show the main skill being built, why it matters, and the next practical study block.",
    },
    {
      title: "Progress library",
      detail:
        "Placeholder structure for books read, courses completed, projects built, and certifications.",
    },
    {
      title: "Mastery notes",
      detail:
        "Collect notes, open questions, and the things that need deeper repetition.",
    },
  ],
} satisfies LearningPageData;
