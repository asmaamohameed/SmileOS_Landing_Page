"use client";

import { useState } from "react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/i18n";
import { journeyKeys, journeyMedia } from "@/lib/content";
import { Shot } from "./shot";
import { useWatch } from "./video-provider";

export function Journey({ locale, dict }: { locale: Locale; dict: Dictionary["journey"] }) {
  const [active, setActive] = useState<(typeof journeyKeys)[number]>("appointments");
  const watch = useWatch();
  const media = journeyMedia[active];
  const step = dict.steps[active];

  return (
    <section id="journey" className="bg-tab py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-navy md:text-4xl">{dict.title}</h2>
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
          <ol className="flex flex-1 flex-col gap-2 lg:flex-row lg:flex-wrap lg:content-start">
            {journeyKeys.map((key, index) => {
              const item = dict.steps[key];
              const video = journeyMedia[key].video;
              const selected = key === active;
              return (
                <li
                  key={key}
                  className={`rounded-[10px] border bg-card p-3 lg:w-[calc(50%-0.25rem)] ${selected ? "border-navy" : "border-line"}`}
                >
                  <button type="button" className="w-full text-start" aria-pressed={selected} onClick={() => setActive(key)}>
                    <span className="grid size-8 place-items-center rounded-full bg-navy text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="mt-2 block font-bold text-navy">{item.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-ink-soft">{item.text}</span>
                  </button>
                  {video ? (
                    <button
                      type="button"
                      className="mt-2 text-sm font-semibold text-navy underline-offset-2 hover:underline"
                      onClick={() => {
                        setActive(key);
                        watch(video);
                      }}
                    >
                      {dict.watch}
                    </button>
                  ) : null}
                </li>
              );
            })}
          </ol>
          <div className="w-full lg:sticky lg:top-24 lg:w-[46%] lg:shrink-0">
            <Shot
              screen={media.shot}
              fallback={"fallback" in media ? media.fallback : undefined}
              locale={locale}
              alt={step.title}
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
