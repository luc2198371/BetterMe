import {
  BookOpen,
  CalendarCheck,
  ClipboardCheck,
  Dumbbell,
  LayoutDashboard,
  Milestone,
  Repeat,
  Target,
} from "lucide-react";

export const navigationItems = [
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
    title: "Weekly Review",
    href: "/weekly-review",
    icon: ClipboardCheck,
  },
  {
    title: "Gym",
    href: "/gym",
    icon: Dumbbell,
  },
] as const;
