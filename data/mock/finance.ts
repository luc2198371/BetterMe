import type { FinancePageData } from "@/types/phase-two";

export const financePageData = {
  eyebrow: "Money and responsibility",
  title: "Finance",
  description:
    "A private financial overview for income, expenses, savings, debt, investments, budget discipline, and lessons from purchases.",
  primaryLabel: "Finance overview",
  items: [
    {
      title: "Monthly picture",
      detail:
        "Placeholder structure for income, expenses, savings rate, budget status, and emergency fund.",
    },
    {
      title: "Long-term responsibility",
      detail:
        "Track debt, investments, financial goals, and the next careful money decision.",
    },
    {
      title: "Spending insight",
      detail:
        "Separate worth-it purchases from regret purchases so patterns become easier to see.",
    },
  ],
} satisfies FinancePageData;
