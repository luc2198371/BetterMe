import { PlaceholderPage } from "@/components/ui";

export default function TimelinePage() {
  return (
    <PlaceholderPage
      eyebrow="Autobiography"
      title="Life Timeline"
      description="A private record of events, lessons, turning points, and identity shifts."
      primaryLabel="Timeline route is ready for life events."
      items={[
        {
          title: "Date, title, category",
          detail:
            "Task 7 will present key life moments as meaningful chronological entries.",
        },
        {
          title: "Story and lesson learned",
          detail:
            "Each event will capture what happened and how it changed you.",
        },
        {
          title: "Photo placeholder",
          detail:
            "The first version will stay mock-data only with deliberate empty media slots.",
        },
      ]}
    />
  );
}
