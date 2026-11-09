"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { site } from "@/config/site";
import { whatsappHref } from "@/config/site";
import { navItems } from "@/lib/content";
import type { Dictionary } from "@/i18n";
import { LanguageSwitch } from "./language-switch";
import { ghostBtn, primaryBtn } from "./styles";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4">
        <a href={`/${locale}`} className="shrink-0 rounded-lg">
          <Image src="/brand/logo.png" alt={dict.brand} width={395} height={92} className="h-8 w-auto" />
        </a>
        <nav className="ms-4 hidden items-center gap-5 lg:flex" aria-label={dict.nav.features}>
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className="text-sm font-semibold text-navy">
              {dict.nav[item.key]}
            </a>
          ))}
        </nav>
        <div className="ms-auto flex items-center gap-2">
          <LanguageSwitch locale={locale} label={dict.lang.switch} className="px-2 text-sm font-semibold text-navy" />
          <a href={site.appUrl} className={`${ghostBtn} hidden sm:inline-flex`}>
            {dict.actions.login}
          </a>
          <a href={whatsappHref(locale)} className={`${primaryBtn} hidden sm:inline-flex`}>
            {dict.actions.book}
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-[10px] border border-line bg-card text-navy lg:hidden"
            aria-label={dict.a11y.openMenu}
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="menu lg:hidden"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Image src="/brand/logo.png" alt="" width={395} height={92} className="h-8 w-auto" />
          <button
            ref={closeRef}
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-[10px] text-navy"
            aria-label={dict.a11y.closeMenu}
            onClick={() => setOpen(false)}
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <nav className="mx-auto mt-4 flex max-w-7xl flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-[10px] px-3 py-3 text-base font-semibold text-navy hover:bg-blue-soft"
              onClick={() => setOpen(false)}
            >
              {dict.nav[item.key]}
            </a>
          ))}
          <a href={site.appUrl} className={`${ghostBtn} mt-3`}>
            {dict.actions.login}
          </a>
          <a href={whatsappHref(locale)} className={`${primaryBtn} mt-2`}>
            {dict.actions.book}
          </a>
        </nav>
      </dialog>
    </header>
  );
}
