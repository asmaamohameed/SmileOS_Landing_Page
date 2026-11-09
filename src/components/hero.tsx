import Image from "next/image";
import type { Locale } from "@/config/site";
import { whatsappHref } from "@/config/site";
import type { Dictionary } from "@/i18n";
import { getScreenshot } from "@/lib/screenshots";
import { ghostBtn, primaryBtn } from "./styles";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const shot = getScreenshot("dashboard", locale);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 end-0 size-72 rounded-full bg-blue-soft" />
      <div className="pointer-events-none absolute -bottom-24 start-0 size-72 rounded-full bg-coral-soft" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <h1 className="text-3xl font-bold leading-tight text-navy md:text-5xl">{dict.hero.title}</h1>
          <p className="mt-4 text-base leading-7 text-ink-soft md:text-lg">{dict.hero.subtitle}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappHref(locale)} className={primaryBtn}>
              {dict.actions.bookFree}
            </a>
            <a href="#videos" className={ghostBtn}>
              {dict.actions.tour}
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {dict.hero.chips.map((chip) => (
              <li key={chip} className="rounded-lg bg-coral-soft px-3 py-1 text-sm font-semibold text-coral-ink">
                {chip}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[10px] border border-line bg-card shadow-[0_16px_40px_rgba(2,45,88,0.12)]">
            <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
              <span className="size-2.5 rounded-full bg-coral" />
              <span className="size-2.5 rounded-full bg-blue-soft" />
              <span className="size-2.5 rounded-full bg-line" />
            </div>
            {shot ? (
              <div className="relative aspect-[16/10]">
                <Image
                  src={shot.src}
                  alt={dict.hero.visualAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            ) : null}
          </div>
          <p className="z-10 mt-3 rounded-[10px] border border-line bg-card px-3 py-2 text-sm font-semibold text-navy shadow-[0_12px_40px_rgba(2,45,88,0.12)] sm:absolute sm:bottom-3 sm:start-3 sm:mt-0 sm:max-w-[15rem]">
            {dict.hero.cardArrival}
          </p>
          <p className="z-10 mt-2 rounded-[10px] border border-line bg-card px-3 py-2 text-sm font-semibold text-navy shadow-[0_12px_40px_rgba(2,45,88,0.12)] sm:absolute sm:top-12 sm:end-3 sm:mt-0 sm:max-w-[15rem]">
            {dict.hero.cardDrawer}
          </p>
        </div>
      </div>
    </section>
  );
}
