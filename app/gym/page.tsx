import { PlaceholderPage } from "@/components/ui";

export default function GymPage() {
  return (
    <PlaceholderPage
      eyebrow="Training"
      title="Gym / Training"
      description="A disciplined training dashboard for workouts, strength, consistency, and body progress."
      primaryLabel="Training system is ready for Task 9."
      items={[
        {
          title: "Workout overview and split",
          detail:
            "Task 9 will add the training split, streaks, last workout, and next workout.",
        },
        {
          title: "Workout log",
          detail:
            "Exercises will include sets, reps, weight, and RPE using mock data.",
        },
        {
          title: "Strength and body progress",
          detail:
            "Charts and progress summaries will stay restrained and practical.",
        },
      ]}
    />
  );
}
