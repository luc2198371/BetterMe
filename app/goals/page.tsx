import { PlaceholderPage } from "@/components/ui";

export default function GoalsPage() {
  return (
    <PlaceholderPage
      eyebrow="Direction"
      title="Goals"
      description="A structured view of what matters now, soon, in the future, and in dreams."
      primaryLabel="Goal horizons are ready for Task 5."
      items={[
        {
          title: "Now, Soon, Future, Dream",
          detail:
            "Goal groups will make ambition easier to review without making the page noisy.",
        },
        {
          title: "Why it matters",
          detail:
            "Each goal will connect progress to identity, obstacles, and next action.",
        },
        {
          title: "Progress and status",
          detail:
            "Mock percentages and statuses will drive the first visual system.",
        },
      ]}
    />
  );
}
