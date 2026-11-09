import type { Locale } from "@/config/site";
import { site, whatsappHref } from "@/config/site";
import type { Dictionary } from "@/i18n";
import { founderKeys } from "@/lib/content";
import { fill, formatPrice } from "@/lib/format";
import { primaryBtn } from "./styles";

export function Pricing({ locale, dict }: { locale: Locale; dict: Dictionary["pricing"] }) {
  const offer = site.offer;
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl font-bold text-navy md:text-4xl">{dict.title}</h2>
      {offer.enabled ? (
        <article className="mt-8 rounded-[10px] border border-coral bg-coral-soft p-6">
          <p className="inline-block rounded-lg bg-card px-2.5 py-1 text-sm font-semibold text-coral-ink">{dict.founder.badge}</p>
          <h3 className="mt-3 text-2xl font-bold text-navy">{dict.founder.title}</h3>
          <ul className="mt-4 space-y-2">
            {founderKeys.map((key) => (
              <li key={key} className="flex items-start gap-3 text-ink">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                <span>{dict.founder.points[key]}</span>
              </li>
            ))}
          </ul>
          {typeof offer.spotsLeft === "number" ? (
            <p className="mt-3 font-semibold text-coral-ink">{fill(dict.founder.spotsLeft, offer.spotsLeft)}</p>
          ) : null}
          <p className="mt-3 text-sm text-ink-soft">{dict.founder.note}</p>
          <a href={whatsappHref(locale)} className={`${primaryBtn} mt-5`}>
            {dict.founder.cta}
          </a>
        </article>
      ) : null}
      <ul className="mt-6 grid gap-4 lg:grid-cols-3">
        {site.plans.map((plan) => {
          const users =
            plan.key === "solo" ? fill(dict.usersExact, plan.users) : fill(dict.usersUpTo, plan.users);
          return (
            <li key={plan.key} className="rounded-[10px] border border-line bg-card p-6">
              <h3 className="text-xl font-bold text-navy">{dict.plans[plan.key].name}</h3>
              <p className="mt-4 text-3xl font-bold text-navy">
                {formatPrice(plan.monthly)}{" "}
                <span className="text-base font-semibold text-ink-soft">{dict.perMonth}</span>
              </p>
              <p className="mt-1 text-ink-soft">
                {formatPrice(plan.yearly)} {dict.perYear}
              </p>
              <p className="mt-4 font-semibold text-navy">{users}</p>
            </li>
          );
        })}
      </ul>
      <p className="mt-6 text-ink-soft">{dict.note}</p>
    </section>
  );
}
