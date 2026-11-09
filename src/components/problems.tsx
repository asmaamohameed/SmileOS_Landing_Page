import type { Dictionary } from "@/i18n";
import { problemKeys } from "@/lib/content";
import { Fade } from "./fade";

export function Problems({ dict }: { dict: Dictionary["problems"] }) {
  return (
    <section id="problems" className="mx-auto max-w-7xl px-4 py-16">
      <Fade>
        <h2 className="text-3xl font-bold text-navy md:text-4xl">{dict.title}</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {problemKeys.map((key) => (
            <li key={key} className="rounded-[10px] border border-line bg-card p-5">
              <span className="block size-2 rounded-full bg-coral" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-bold text-navy">{dict.items[key].title}</h3>
              <p className="mt-1 leading-7 text-ink-soft">{dict.items[key].text}</p>
            </li>
          ))}
        </ul>
      </Fade>
    </section>
  );
}
