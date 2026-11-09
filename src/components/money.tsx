import type { Locale } from "@/config/site";
import type { Dictionary } from "@/i18n";
import { moneyKeys } from "@/lib/content";
import { Shot } from "./shot";

export function Money({ locale, dict }: { locale: Locale; dict: Dictionary["money"] }) {
  return (
    <section id="money" className="bg-navy py-16 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">{dict.title}</h2>
          <p className="mt-3 text-lg text-blue-soft">{dict.subtitle}</p>
          <ul className="mt-6 space-y-3">
            {moneyKeys.map((key) => (
              <li key={key} className="flex items-start gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                <span className="leading-7">{dict.points[key]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative pb-16">
          <Shot screen="treasury" locale={locale} alt={dict.imageAlt} sizes="(min-width: 1024px) 560px, 100vw" />
          <div className="absolute bottom-0 start-6 w-[78%]">
            <Shot screen="treasury-history" locale={locale} alt={dict.historyAlt} sizes="(min-width: 1024px) 420px, 80vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
