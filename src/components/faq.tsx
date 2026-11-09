import { ChevronDown } from "lucide-react";
import type { Dictionary } from "@/i18n";
import { faqKeys } from "@/lib/content";

export function Faq({ dict }: { dict: Dictionary["faq"] }) {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="text-3xl font-bold text-navy md:text-4xl">{dict.title}</h2>
      <div className="mt-8 space-y-3">
        {faqKeys.map((key) => (
          <details key={key} name="faq" className="rounded-[10px] border border-line bg-card px-4 py-3">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-navy">
              {dict.items[key].q}
              <ChevronDown className="chevron size-5 shrink-0" aria-hidden="true" />
            </summary>
            <p className="pt-3 leading-7 text-ink">{dict.items[key].a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
