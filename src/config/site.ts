export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return value === "ar" || value === "en";
}

export const plans = [
  { key: "solo", monthly: 500, yearly: 5000, users: 3 },
  { key: "basic", monthly: 750, yearly: 7500, users: 6 },
  { key: "advanced", monthly: 1200, yearly: 12000, users: 15 },
] as const;

export type PlanKey = (typeof plans)[number]["key"];

export const site = {
  siteUrl: "https://smileos.org",
  appUrl: "<APP_LOGIN_URL>",
  whatsappNumber: "<20XXXXXXXXXX>",
  email: "<EMAIL>",
  whatsappMessage: {
    ar: "مرحبًا، عايز أحجز عرض تجريبي لنظام smileos لعيادتي",
    en: "Hi, I'd like a demo of smileos for my clinic",
  },
  offer: {
    enabled: true,
    spotsTotal: 10,
    spotsLeft: null as number | null,
  },
  plans,
};

export function whatsappHref(locale: Locale) {
  const text = encodeURIComponent(site.whatsappMessage[locale]);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
