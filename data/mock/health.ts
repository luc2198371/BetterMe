import type { HealthPageData } from "@/types/phase-two";

export const healthPageData = {
  eyebrow: "Body and wellness",
  title: "Health",
  description:
    "A calm place for sleep, recovery, body markers, nutrition notes, and the health patterns that support the rest of the Life OS.",
  primaryLabel: "Health overview",
  items: [
    {
      title: "Sleep and recovery",
      detail:
        "Placeholder structure for sleep quality, recovery score, stress, and energy trends.",
    },
    {
      title: "Body markers",
      detail:
        "Track weight, steps, water intake, measurements, and practical nutrition notes.",
    },
    {
      title: "Health goals",
      detail:
        "Reserve space for medical notes, health goals, and low-pressure wellness insights.",
    },
  ],
} satisfies HealthPageData;
