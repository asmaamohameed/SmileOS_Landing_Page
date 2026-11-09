import type { Dictionary } from "@/i18n";
import { trustKeys } from "@/lib/content";
import { Fade } from "./fade";

export function Trust({ dict }: { dict: Dictionary["trust"] }) {
  const columns = [dict.look, dict.safe];
  return (
    <section id="trust" className="mx-auto max-w-7xl px-4 py-16">
      <Fade>
        <div className="grid gap-4 md:grid-cols-2">
          {columns.map((column) => (
            <article key={column.title} className="rounded-[10px] border border-line bg-card p-6">
              <h2 className="text-2xl font-bold text-navy">{column.title}</h2>
              <ul className="mt-4 space-y-3">
                {trustKeys.map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                    <span className="leading-7 text-ink">{column.points[key]}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Fade>
    </section>
  );
}
