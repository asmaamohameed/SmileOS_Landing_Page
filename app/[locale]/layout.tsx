import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { isLocale, site } from "@/config/site";
import { getDictionary } from "@/i18n";
import "../globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const path = `/${locale}`;
  return {
    metadataBase: new URL(site.siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: path,
      languages: {
        ar: "/ar",
        en: "/en",
        "x-default": "/ar",
      },
    },
    openGraph: {
      type: "website",
      url: path,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      siteName: "smileos",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={cairo.variable}>
      <body className="bg-bg font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy focus:px-3 focus:py-2 focus:text-white"
        >
          {dict.a11y.skip}
        </a>
        {children}
        <Analytics />
        <noscript>
          <style>{`.fade-up{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
