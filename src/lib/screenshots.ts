import type { Locale } from "@/config/site";

export type Shot = { src: string; width: number; height: number };

const shots: Record<string, Shot> = {
  "activity-ar": { src: "/screenshots/activity-ar.jpg", width: 1570, height: 555 },
  "appointments-ar": { src: "/screenshots/appointments-ar.jpg", width: 1570, height: 840 },
  "arrival-ar": { src: "/screenshots/arrival-ar.jpg", width: 1570, height: 405 },
  "clinic-hours-ar": { src: "/screenshots/clinic-hours-ar.jpg", width: 1570, height: 777 },
  "dashboard-ar": { src: "/screenshots/dashboard-ar.jpg", width: 1570, height: 1576 },
  "expenses-ar": { src: "/screenshots/expenses-ar.jpg", width: 1570, height: 840 },
  "inventory-ar": { src: "/screenshots/inventory-ar.jpg", width: 1580, height: 445 },
  "invoice-ar": { src: "/screenshots/invoice-ar.jpg", width: 1570, height: 840 },
  "lab-ar": { src: "/screenshots/lab-ar.jpg", width: 1580, height: 475 },
  "medicines-ar": { src: "/screenshots/medicines-ar.jpg", width: 1580, height: 405 },
  "patient-file-ar": { src: "/screenshots/patient-file-ar.jpg", width: 1570, height: 1415 },
  "prescription-ar": { src: "/screenshots/prescription-ar.jpg", width: 1570, height: 375 },
  "refunds-ar": { src: "/screenshots/refunds-ar.jpg", width: 1570, height: 555 },
  "services-ar": { src: "/screenshots/services-ar.jpg", width: 1580, height: 750 },
  "staff-ar": { src: "/screenshots/staff-ar.jpg", width: 1570, height: 545 },
  "treasury-ar": { src: "/screenshots/treasury-ar.jpg", width: 1562, height: 648 },
  "treasury-history-ar": { src: "/screenshots/treasury-history-ar.jpg", width: 1562, height: 706 },
  "waiting-list-ar": { src: "/screenshots/waiting-list-ar.jpg", width: 1580, height: 345 },
};

const posterScreens: Record<string, string> = {
  appointments: "appointments",
  arrival: "arrival",
  patients: "patient-file",
  "treatment-plan": "patient-file",
  prescriptions: "prescription",
  lab: "lab",
  dashboard: "dashboard",
  services: "services",
  staff: "staff",
  inventory: "inventory",
  expenses: "expenses",
};

const posterKeys = new Set<string>();

export function getScreenshot(screen: string, locale: Locale, fallback?: string): Shot | null {
  if (locale === "en") {
    const en = shots[`${screen}-en`];
    if (en) return en;
  }
  const ar = shots[`${screen}-ar`];
  if (ar) return ar;
  if (fallback) return getScreenshot(fallback, locale);
  return null;
}

export function getPoster(key: string, locale: Locale): Shot | null {
  if (posterKeys.has(key)) {
    return { src: `/videos/posters/${key}.webp`, width: 1280, height: 720 };
  }
  const screen = posterScreens[key];
  if (!screen) return null;
  return getScreenshot(screen, locale);
}
