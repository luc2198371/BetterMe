import { PlaceholderPage } from "@/components/ui";

export default function JournalPage() {
  return (
    <PlaceholderPage
      eyebrow="Reflection"
      title="Journal"
      description="A private editor-like space for entries, moods, tags, prompts, and patterns."
      primaryLabel="Journal structure is ready for entries."
      items={[
        {
          title: "Entries and previews",
          detail:
            "Task 6 will add mock journal entries with mood, tags, and preview text.",
        },
        {
          title: "Search and tags",
          detail:
            "The placeholder reserves the page for fast scanning and private recall.",
        },
        {
          title: "Reflection prompts",
          detail:
            "Prompts will be personal, calm, and focused on self-understanding.",
        },
      ]}
    />
  );
}
