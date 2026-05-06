import {
  BookOpen,
  CalendarCheck,
  ClipboardCheck,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  Map,
  Milestone,
  Repeat,
  Sparkles,
  Target,
  Trophy,
  UsersRound,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    title: "Core",
    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
      },
      {
        title: "Today",
        href: "/today",
        icon: CalendarCheck,
      },
      {
        title: "Weekly Review",
        href: "/weekly-review",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    title: "Growth",
    items: [
      {
        title: "Habits",
        href: "/habits",
        icon: Repeat,
      },
      {
        title: "Goals",
        href: "/goals",
        icon: Target,
      },
      {
        title: "Gym",
        href: "/gym",
        icon: Dumbbell,
      },
      {
        title: "Health",
        href: "/health",
        icon: HeartPulse,
      },
      {
        title: "Learning",
        href: "/learning",
        icon: GraduationCap,
      },
      {
        title: "Finance",
        href: "/finance",
        icon: WalletCards,
      },
      {
        title: "Future Self",
        href: "/future-self",
        icon: Sparkles,
      },
    ],
  },
  {
    title: "Life",
    items: [
      {
        title: "Journal",
        href: "/journal",
        icon: BookOpen,
      },
      {
        title: "Timeline",
        href: "/timeline",
        icon: Milestone,
      },
      {
        title: "Relationships",
        href: "/relationships",
        icon: UsersRound,
      },
      {
        title: "Travel & Memories",
        href: "/travel-memories",
        icon: Map,
      },
      {
        title: "Year-in-Review",
        href: "/year-in-review",
        icon: Trophy,
      },
    ],
  },
];

export const navigationItems = navigationGroups.flatMap((group) => group.items);
