"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/config/site";
import { videos, type VideoGroup } from "@/config/videos";
import type { Dictionary } from "@/i18n";
import { getPoster } from "@/lib/screenshots";
import { KeyIcon } from "./icons";
import { onTabKey } from "./tabs";
import { useWatch } from "./video-provider";

const groups = ["journey", "management"] as const;

export function Videos({
  locale,
  dict,
  play,
}: {
  locale: Locale;
  dict: Dictionary["videos"];
  play: string;
}) {
  const [group, setGroup] = useState<VideoGroup>("journey");
  const watch = useWatch();
  const labels = { journey: dict.tabJourney, management: dict.tabManagement };

  return (
    <section id="videos" className="bg-tab py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-navy md:text-4xl">{dict.title}</h2>
        <div
          role="tablist"
          aria-label={dict.title}
          className="mt-6 flex flex-wrap gap-2"
          onKeyDown={(event) => onTabKey(event, groups, group, setGroup, "videos")}
        >
          {groups.map((key) => {
            const selected = key === group;
            return (
              <button
                key={key}
                id={`tab-videos-${key}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-videos-${key}`}
                tabIndex={selected ? 0 : -1}
                className={`rounded-lg px-3 py-2 text-sm font-semibold ${selected ? "bg-navy text-white" : "bg-card text-navy"}`}
                onClick={() => setGroup(key)}
              >
                {labels[key]}
              </button>
            );
          })}
        </div>
        <div role="tabpanel" id={`panel-videos-${group}`} aria-labelledby={`tab-videos-${group}`} className="mt-6">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos
              .filter((video) => video.group === group)
              .map((video) => {
                const item = dict.items[video.key];
                const poster = getPoster(video.key, locale);
                return (
                  <li key={video.key}>
                    <button
                      type="button"
                      onClick={() => watch(video.key)}
                      className="w-full overflow-hidden rounded-[10px] border border-line bg-card text-start shadow-[0_12px_40px_rgba(2,45,88,0.08)]"
                    >
                      <span className="relative block aspect-video bg-navy">
                        {poster ? (
                          <Image
                            src={poster.src}
                            alt={item.description}
                            fill
                            sizes="(min-width: 1024px) 360px, 50vw"
                            className="object-cover object-top"
                          />
                        ) : (
                          <span className="flex h-full items-center justify-center bg-[linear-gradient(160deg,var(--navy),#24558e)] text-white">
                            <KeyIcon name={video.key} className="size-8" />
                          </span>
                        )}
                        <span className="absolute inset-0 grid place-items-center">
                          <span className="grid size-12 place-items-center rounded-full bg-navy/90 text-white">
                            <Play className="size-5 rtl:rotate-180" aria-hidden="true" />
                          </span>
                        </span>
                        {locale === "en" ? (
                          <span className="absolute top-2 start-2 rounded-lg bg-coral-soft px-2 py-1 text-xs font-semibold text-coral-ink">
                            {dict.arabicBadge}
                          </span>
                        ) : null}
                      </span>
                      <span className="block px-3 py-3 font-semibold text-navy">
                        <span className="sr-only">{play} </span>
                        {item.title}
                      </span>
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
}
