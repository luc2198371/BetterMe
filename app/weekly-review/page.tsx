import { PlaceholderPage } from "@/components/ui";

export default function WeeklyReviewPage() {
  return (
    <PlaceholderPage
      eyebrow="Review"
      title="Weekly Review"
      description="A weekly ritual for wins, lessons, habits, gym consistency, and next focus."
      primaryLabel="Weekly review page is reserved."
      items={[
        {
          title: "Review prompts",
          detail:
            "Task 8 will turn the page into a structured reflection ritual.",
        },
        {
          title: "Weekly summary",
          detail:
            "Habit completion, gym sessions, and mood average will use mock data.",
        },
        {
          title: "Next week focus",
          detail:
            "The page will end with one clear focus instead of a crowded plan.",
        },
      ]}
    />
  );
}
