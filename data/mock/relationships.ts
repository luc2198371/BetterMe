import type { RelationshipsPageData } from "@/types/phase-two";

export const relationshipsPageData = {
  header: {
    eyebrow: "People and connection",
    title: "Relationships",
    dateLabel: "Wednesday, May 6 / private connection review",
    description:
      "A warm, private place to remember the people who matter, notice who needs care, and choose thoughtful next actions without turning relationships into a system of transactions.",
    actionLabel: "Plan check-in",
  },
  overview: [
    {
      label: "Important people",
      value: "12",
      detail: "Family, friends, mentors",
      tone: "foreground",
    },
    {
      label: "Check on soon",
      value: "4",
      detail: "Small thoughtful actions",
      tone: "accent",
    },
    {
      label: "Upcoming birthdays",
      value: "3",
      detail: "Next 45 days",
      tone: "foreground",
    },
    {
      label: "Last deep talk",
      value: "8d",
      detail: "Meaningful conversation",
      tone: "muted",
    },
    {
      label: "Relationship goals",
      value: "3",
      detail: "Active intentions",
      tone: "accent",
    },
    {
      label: "Shared memories",
      value: "7",
      detail: "Moments worth preserving",
      tone: "foreground",
    },
  ],
  importantPeople: [
    {
      name: "Maya",
      role: "Older sister",
      group: "Family",
      lastTalked: "May 2",
      nextCheckIn: "This weekend",
      whyTheyMatter:
        "She knows the older versions of me and can tell when I am pretending to be fine.",
      privateNote:
        "Ask how she is actually doing, not only how work and home are going.",
    },
    {
      name: "Daniel",
      role: "Close friend",
      group: "Friend",
      lastTalked: "April 28",
      nextCheckIn: "Friday evening",
      whyTheyMatter:
        "The friendship feels honest because we can be direct without performing.",
      privateNote:
        "Send the voice note before overthinking it. Keep it simple and real.",
    },
    {
      name: "Elena",
      role: "Mentor",
      group: "Mentor",
      lastTalked: "April 16",
      nextCheckIn: "Next week",
      whyTheyMatter:
        "She asks better questions than most people and notices unclear thinking fast.",
      privateNote:
        "Share one concrete update and one question, not a long status report.",
    },
  ],
  family: [
    {
      name: "Maya",
      relationship: "Sister",
      lastTalked: "May 2",
      nextAction: "Ask about the thing she sounded tired about last time.",
      sharedMemory: "Late kitchen talks after everyone else had gone quiet.",
    },
    {
      name: "Mom",
      relationship: "Parent",
      lastTalked: "May 4",
      nextAction: "Call without multitasking and let the conversation breathe.",
      sharedMemory: "Weekend breakfast routines and small ordinary care.",
    },
    {
      name: "Uncle Samir",
      relationship: "Family elder",
      lastTalked: "April 12",
      nextAction: "Send a short message and ask about his health.",
      sharedMemory: "His stories about staying patient through difficult seasons.",
    },
  ],
  friends: [
    {
      name: "Daniel",
      rhythm: "Every 2-3 weeks",
      lastTalked: "April 28",
      nextAction: "Suggest a walk or long call this weekend.",
      note: "Good conversations happen when there is enough time, not when squeezed in.",
    },
    {
      name: "Ari",
      rhythm: "Monthly",
      lastTalked: "March 30",
      nextAction: "Send the article that made me think of them.",
      note: "The friendship stays alive through small specific messages.",
    },
    {
      name: "Jonas",
      rhythm: "Irregular",
      lastTalked: "February 19",
      nextAction: "Reach out without apologizing too much for the gap.",
      note: "Do not let awkward delay become permanent distance.",
    },
  ],
  mentors: [
    {
      name: "Elena",
      lesson:
        "Clear thinking usually sounds simple after the hard part is done.",
      lastContact: "April 16",
      nextThoughtfulAction:
        "Send one specific progress update and ask for critique on the next decision.",
    },
    {
      name: "Marcus",
      lesson:
        "Do not confuse intensity with commitment. Commitment is what repeats.",
      lastContact: "March 21",
      nextThoughtfulAction:
        "Thank him for the advice that changed my training consistency.",
    },
  ],
  checkOn: [
    {
      name: "Ari",
      reason: "They sounded stretched thin last time.",
      suggestedAction: "Send a quiet message and ask about the week.",
      timing: "Today",
    },
    {
      name: "Uncle Samir",
      reason: "Health update has been on my mind.",
      suggestedAction: "Short call, no agenda.",
      timing: "This weekend",
    },
    {
      name: "Jonas",
      reason: "Long gap since the last real conversation.",
      suggestedAction: "Suggest coffee or a walk.",
      timing: "Next week",
    },
    {
      name: "Elena",
      reason: "A mentor update would be respectful and useful.",
      suggestedAction: "Send concise update and one question.",
      timing: "Next week",
    },
  ],
  birthdays: [
    {
      name: "Maya",
      date: "May 22",
      plan: "Write a personal message before buying anything.",
    },
    {
      name: "Daniel",
      date: "June 3",
      plan: "Plan a low-key dinner or long walk.",
    },
    {
      name: "Mom",
      date: "June 17",
      plan: "Call early and make the day feel remembered.",
    },
  ],
  lastTalked: [
    {
      name: "Mom",
      date: "May 4",
      context: "Short evening call about home and energy.",
    },
    {
      name: "Maya",
      date: "May 2",
      context: "Voice notes after a long week.",
    },
    {
      name: "Daniel",
      date: "April 28",
      context: "Honest conversation about discipline and pressure.",
    },
    {
      name: "Elena",
      date: "April 16",
      context: "Feedback on choosing fewer priorities.",
    },
  ],
  sharedMemories: [
    {
      title: "The long walk after a hard week",
      people: "Daniel",
      date: "2025",
      meaning:
        "A reminder that friendship can feel light even when the topic is heavy.",
    },
    {
      title: "Kitchen conversation before moving",
      people: "Maya",
      date: "2024",
      meaning:
        "She helped me name what I was afraid to admit out loud.",
    },
    {
      title: "Advice that became a rule",
      people: "Marcus",
      date: "2023",
      meaning:
        "He made consistency feel less dramatic and more self-respecting.",
    },
  ],
  lessons: [
    {
      person: "Mom",
      lesson: "Care is often practical before it is spoken.",
      howItChangedMe:
        "I notice small acts of support more and try not to dismiss ordinary love.",
    },
    {
      person: "Elena",
      lesson: "A good question can save months of unclear effort.",
      howItChangedMe:
        "I ask what decision a page or system is supposed to support.",
    },
    {
      person: "Daniel",
      lesson: "Honesty is easier when there is no performance in the room.",
      howItChangedMe:
        "I want fewer shallow updates and more real conversations.",
    },
  ],
  goals: [
    {
      title: "Call family without multitasking",
      status: "Active",
      progress: 58,
      why:
        "Attention is the part of the call that makes it feel like care, not obligation.",
      nextAction: "Set the phone down and call Mom after dinner.",
    },
    {
      title: "Reconnect with one old friend",
      status: "Needs courage",
      progress: 34,
      why:
        "Distance grows when I wait for the perfect message instead of a real one.",
      nextAction: "Send Jonas a simple invitation for coffee or a walk.",
    },
    {
      title: "Preserve meaningful memories",
      status: "Building",
      progress: 42,
      why:
        "Important moments become easier to understand when I write what they meant.",
      nextAction: "Add one shared memory after the weekly review.",
    },
  ],
  reconnectReminders: [
    {
      name: "Jonas",
      reminder: "The silence has become longer than intended.",
      nextStep: "Send a short message without making the delay the center.",
    },
    {
      name: "Ari",
      reminder: "They may need encouragement more than advice.",
      nextStep: "Ask one real question and leave room for a real answer.",
    },
    {
      name: "Marcus",
      reminder: "A thank-you would mean more than another update.",
      nextStep: "Tell him which piece of advice I still use.",
    },
  ],
} satisfies RelationshipsPageData;
