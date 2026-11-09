import type { Locale } from "@/config/site";
import { whatsappHref } from "@/config/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export function WhatsAppButton({ locale, label }: { locale: Locale; label: string }) {
  return (
    <a
      href={whatsappHref(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-4 end-4 z-30 grid size-14 place-items-center rounded-full bg-[#075E54] text-white shadow-[0_12px_40px_rgba(2,45,88,0.25)]"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
