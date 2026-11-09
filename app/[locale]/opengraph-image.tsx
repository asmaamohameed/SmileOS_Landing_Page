import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { isLocale } from "@/config/site";
import { getDictionary } from "@/i18n";

export const alt = "smileos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "ar";
  const dict = getDictionary(locale);
  const blueCorner = locale === "ar" ? { left: -70 } : { right: -70 };
  const coralCorner = locale === "ar" ? { right: -50 } : { left: -50 };
  const [arabic, latin, logo] = await Promise.all([
    readFile(join(process.cwd(), "src/fonts/Cairo-Arabic-700.ttf")),
    readFile(join(process.cwd(), "src/fonts/Cairo-Latin-700.ttf")),
    readFile(join(process.cwd(), "public/brand/logo.png")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: locale === "ar" ? "flex-end" : "flex-start",
          background: "#FDF7F6",
          padding: "72px",
          direction: locale === "ar" ? "rtl" : "ltr",
          fontFamily: "Cairo",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -90,
            ...blueCorner,
            width: 280,
            height: 280,
            borderRadius: 999,
            background: "#EDF2F7",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -110,
            ...coralCorner,
            width: 300,
            height: 300,
            borderRadius: 999,
            background: "#FBE8E6",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logo.toString("base64")}`} width={198} height={46} alt="" />
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 48,
            fontWeight: 700,
            color: "#022D58",
            lineHeight: 1.35,
            maxWidth: 980,
            direction: locale === "ar" ? "rtl" : "ltr",
            textAlign: locale === "ar" ? "right" : "left",
          }}
        >
          {dict.hero.title}
        </div>
        <div style={{ display: "flex", width: 88, height: 8, marginTop: 32, borderRadius: 8, background: "#F28B82" }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cairo", data: arabic, weight: 700, style: "normal" },
        { name: "Cairo", data: latin, weight: 700, style: "normal" },
      ],
    },
  );
}
