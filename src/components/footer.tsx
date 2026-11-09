import Image from "next/image";
import type { Locale } from "@/config/site";
import { site, whatsappHref } from "@/config/site";
import type { Dictionary } from "@/i18n";
import { navItems } from "@/lib/content";
import { LanguageSwitch } from "./language-switch";
import { lightBtn } from "./styles";

export function FinalCta({ locale, dict }: { locale: Locale; dict: Dictionary["cta"] }) {
  return (
    <section id="cta" className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{dict.title}</h2>
        <p className="mt-3 text-lg text-blue-soft">{dict.text}</p>
        <a href={whatsappHref(locale)} className={`${lightBtn} mt-6`}>
          {dict.button}
        </a>
      </div>
    </section>
  );
}

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line pb-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10">
        <a href={`/${locale}`} className="w-fit">
          <Image src="/brand/logo.png" alt={dict.brand} width={395} height={92} className="h-8 w-auto" />
        </a>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label={dict.brand}>
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className="text-sm font-semibold text-navy">
              {dict.nav[item.key]}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <LanguageSwitch locale={locale} label={dict.lang.switch} className="font-semibold text-navy" />
          <a href={whatsappHref(locale)} className="font-semibold text-navy">
            {dict.footer.whatsapp}
          </a>
          <a href={`mailto:${site.email}`} className="font-semibold text-navy">
            {site.email}
          </a>
        </div>
        <p className="text-sm text-ink-soft">
          © {year} smileos. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
