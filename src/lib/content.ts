export const navItems = [
  { key: "features", href: "#features" },
  { key: "journey", href: "#journey" },
  { key: "money", href: "#money" },
  { key: "videos", href: "#videos" },
  { key: "pricing", href: "#pricing" },
  { key: "faq", href: "#faq" },
] as const;

export const problemKeys = ["papers", "cash", "waiting", "balance"] as const;
export const featureKeys = [
  "analytics",
  "patients",
  "appointments",
  "treatment-plan",
  "prescriptions",
  "treasury",
  "billing",
  "expenses",
  "inventory",
  "lab",
  "staff",
  "activity",
] as const;
export const journeyKeys = [
  "appointments",
  "arrival",
  "patients",
  "treatment-plan",
  "prescriptions",
  "lab",
  "invoice",
] as const;
export const moneyKeys = ["close", "blind", "handover", "totals", "ownerOnly", "refunds"] as const;
export const roleKeys = ["owner", "doctor", "reception", "assistant"] as const;
export const bulletKeys = ["one", "two", "three", "four"] as const;
export const trustKeys = ["one", "two", "three", "four"] as const;
export const founderKeys = ["free", "price", "staff", "features"] as const;
export const faqKeys = ["install", "data", "staff", "language", "letterhead", "drawer", "start"] as const;

export const journeyMedia = {
  appointments: { video: "appointments", shot: "appointments" },
  arrival: { video: "arrival", shot: "arrival" },
  patients: { video: "patients", shot: "patient-file" },
  "treatment-plan": { video: "treatment-plan", shot: "patient-file" },
  prescriptions: { video: "prescriptions", shot: "prescription", fallback: "medicines" },
  lab: { video: "lab", shot: "lab" },
  invoice: { video: null, shot: "invoice" },
} as const;

export const featureShots = {
  analytics: "dashboard",
  "treatment-plan": "patient-file",
} as const;

export const roleShots = {
  owner: "dashboard",
  doctor: "patient-file",
  reception: "arrival",
  assistant: "inventory",
} as const;
