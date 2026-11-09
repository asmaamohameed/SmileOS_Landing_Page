import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ar: `${site.siteUrl}/ar`,
    en: `${site.siteUrl}/en`,
    "x-default": `${site.siteUrl}/ar`,
  };
  return (["ar", "en"] as const).map((locale) => ({
    url: `${site.siteUrl}/${locale}`,
    lastModified: new Date(),
    alternates: { languages },
  }));
}
