export type PhaseTwoPlaceholderItem = {
  title: string;
  detail: string;
};

type PhaseTwoPlaceholderData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  items: PhaseTwoPlaceholderItem[];
};

export type HealthPageData = PhaseTwoPlaceholderData;
export type LearningPageData = PhaseTwoPlaceholderData;
export type FinancePageData = PhaseTwoPlaceholderData;
export type RelationshipsPageData = PhaseTwoPlaceholderData;
export type TravelMemoriesPageData = PhaseTwoPlaceholderData;
export type FutureSelfPageData = PhaseTwoPlaceholderData;
export type YearInReviewPageData = PhaseTwoPlaceholderData;
