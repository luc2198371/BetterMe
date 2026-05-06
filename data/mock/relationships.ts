import type { RelationshipsPageData } from "@/types/phase-two";

export const relationshipsPageData = {
  eyebrow: "People and connection",
  title: "Relationships",
  description:
    "A quiet map of important people, family, friends, mentors, birthdays, last contact, shared memories, and relationship goals.",
  primaryLabel: "Relationship overview",
  items: [
    {
      title: "Important people",
      detail:
        "Placeholder groups for family, friends, mentors, and people to check on soon.",
    },
    {
      title: "Contact rhythm",
      detail:
        "Reserve fields for birthdays, last contact, next check-in, and the relationship context that matters.",
    },
    {
      title: "Lessons from people",
      detail:
        "Capture shared memories, gratitude, patterns, and relationship goals without turning it into social media.",
    },
  ],
} satisfies RelationshipsPageData;
