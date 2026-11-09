import type { Locale } from "@/config/site";
import type { Dictionary } from "@/i18n";
import { featureKeys, featureShots } from "@/lib/content";
import { Fade } from "./fade";
import { KeyIcon } from "./icons";
import { Shot } from "./shot";

export function Features({ locale, dict }: { locale: Locale; dict: Dictionary["features"] }) {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16">
      <Fade>
        <h2 className="text-3xl font-bold text-navy md:text-4xl">{dict.title}</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureKeys.map((key) => {
            const item = dict.items[key];
            const shot = key === "analytics" || key === "treatment-plan" ? featureShots[key] : null;
            return (
              <li
                key={key}
                className={`flex flex-col rounded-[10px] border border-line bg-card p-5 ${shot ? "sm:col-span-2" : ""}`}
              >
                <span className="grid size-10 place-items-center rounded-[10px] bg-blue-soft text-navy">
                  <KeyIcon name={key} className="size-5" />
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-1 leading-7 text-ink-soft">{item.text}</p>
                {shot ? (
                  <Shot screen={shot} locale={locale} alt={item.title} sizes="(min-width: 1024px) 560px, 100vw" crop className="mt-4" />
                ) : null}
              </li>
            );
          })}
        </ul>
      </Fade>
    </section>
  );
}
