import { notFound } from "next/navigation";
import { isLocale, site } from "@/config/site";
import { getDictionary } from "@/i18n";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FinalCta, Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Money } from "@/components/money";
import { Pricing } from "@/components/pricing";
import { Problems } from "@/components/problems";
import { Roles } from "@/components/roles";
import { Trust } from "@/components/trust";
import { VideoProvider } from "@/components/video-provider";
import { Videos } from "@/components/videos";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "smileos",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${site.siteUrl}/${locale}`,
    description: dict.meta.description,
    offers: site.plans.flatMap((plan) => [
      {
        "@type": "Offer",
        name: `${dict.pricing.plans[plan.key].name} / ${dict.pricing.perMonth}`,
        price: plan.monthly,
        priceCurrency: "EGP",
      },
      {
        "@type": "Offer",
        name: `${dict.pricing.plans[plan.key].name} / ${dict.pricing.perYear}`,
        price: plan.yearly,
        priceCurrency: "EGP",
      },
    ]),
  };

  return (
    <VideoProvider copy={{ ...dict.videos, close: dict.a11y.close }}>
      <Header locale={locale} dict={dict} />
      <main id="main">
        <Hero locale={locale} dict={dict} />
        <Problems dict={dict.problems} />
        <Journey locale={locale} dict={dict.journey} />
        <Features locale={locale} dict={dict.features} />
        <Money locale={locale} dict={dict.money} />
        <Roles locale={locale} dict={dict.roles} />
        <Videos locale={locale} dict={dict.videos} play={dict.a11y.play} />
        <Trust dict={dict.trust} />
        <Pricing locale={locale} dict={dict.pricing} />
        <Faq dict={dict.faq} />
        <FinalCta locale={locale} dict={dict.cta} />
      </main>
      <Footer locale={locale} dict={dict} />
      <WhatsAppButton locale={locale} label={dict.a11y.whatsapp} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </VideoProvider>
  );
}
