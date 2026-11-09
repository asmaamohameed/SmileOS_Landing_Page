"use client";

import { useState } from "react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/i18n";
import { bulletKeys, roleKeys, roleShots } from "@/lib/content";
import { onTabKey } from "./tabs";
import { Shot } from "./shot";

export function Roles({ locale, dict }: { locale: Locale; dict: Dictionary["roles"] }) {
  const [current, setCurrent] = useState<(typeof roleKeys)[number]>("owner");
  const tab = dict.tabs[current];

  return (
    <section id="roles" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl font-bold text-navy md:text-4xl">{dict.title}</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
        <div>
          <div role="tablist" aria-label={dict.title} className="flex flex-wrap gap-2" onKeyDown={(event) => onTabKey(event, roleKeys, current, setCurrent, "role")}>
            {roleKeys.map((key) => {
              const selected = key === current;
              return (
                <button
                  key={key}
                  id={`tab-role-${key}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-role-${key}`}
                  tabIndex={selected ? 0 : -1}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold ${selected ? "bg-navy text-white" : "bg-tab text-navy"}`}
                  onClick={() => setCurrent(key)}
                >
                  {dict.tabs[key].label}
                </button>
              );
            })}
          </div>
          <div role="tabpanel" id={`panel-role-${current}`} aria-labelledby={`tab-role-${current}`} className="mt-5" tabIndex={0}>
            <ul className="space-y-3">
              {bulletKeys.map((key) => (
                <li key={key} className="flex items-start gap-3 text-ink">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                  <span>{tab.bullets[key]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Shot screen={roleShots[current]} locale={locale} alt={tab.alt} sizes="(min-width: 1024px) 560px, 100vw" />
      </div>
    </section>
  );
}
