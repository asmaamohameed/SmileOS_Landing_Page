"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/config/site";

export function LanguageSwitch({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const other: Locale = locale === "ar" ? "en" : "ar";
  const [href, setHref] = useState(`/${other}`);

  useEffect(() => {
    const sync = () => setHref(`/${other}${window.location.hash}`);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [other]);

  return (
    <a href={href} hrefLang={other} className={className}>
      {label}
    </a>
  );
}
