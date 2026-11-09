import Image from "next/image";
import type { Locale } from "@/config/site";
import { getScreenshot } from "@/lib/screenshots";

const frame =
  "overflow-hidden rounded-[10px] border border-line bg-card shadow-[0_12px_40px_rgba(2,45,88,0.12)]";

export function Shot({
  screen,
  locale,
  alt,
  sizes,
  fallback,
  crop = false,
  className = "",
}: {
  screen: string;
  locale: Locale;
  alt: string;
  sizes: string;
  fallback?: string;
  crop?: boolean;
  className?: string;
}) {
  const shot = getScreenshot(screen, locale, fallback);
  if (!shot) return null;

  if (crop) {
    return (
      <div className={`relative aspect-video ${frame} ${className}`}>
        <Image src={shot.src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
      </div>
    );
  }

  return (
    <div className={`${frame} ${className}`}>
      <Image
        src={shot.src}
        alt={alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        className="h-auto w-full"
      />
    </div>
  );
}
