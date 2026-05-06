import type { TravelMemoriesPageData } from "@/types/phase-two";

export const travelMemoriesPageData = {
  eyebrow: "Places and memory",
  title: "Travel & Memories",
  description:
    "A personal archive for countries, cities, favorite places, planned trips, memory artifacts, and the moments worth preserving.",
  primaryLabel: "Travel and memory overview",
  items: [
    {
      title: "Places",
      detail:
        "Placeholder structure for countries visited, cities lived in, favorite places, and bucket-list destinations.",
    },
    {
      title: "Memory archive",
      detail:
        "Reserve slots for photo placeholders, video placeholders, letters, voice notes, quotes, and important memories.",
    },
    {
      title: "On this day",
      detail:
        "Future space for a travel map placeholder and recurring memories from previous years.",
    },
  ],
} satisfies TravelMemoriesPageData;
