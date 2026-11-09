import type { Locale } from "@/config/site";
import { ar, type Dictionary } from "./ar";
import { en } from "./en";

export type { Dictionary };

export function getDictionary(locale: Locale): Dictionary {
  return locale === "ar" ? ar : en;
}
