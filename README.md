# smileos landing

Marketing site for smileos. Arabic is the default (`/ar`). English is at `/en`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). It redirects to `/ar`.

```bash
npm run lint
npm run build
```

## Where to edit

- Text, alt text, and labels: `src/i18n/ar.ts` and `src/i18n/en.ts`. `en` is typed from `ar`, so a missing key fails the build.
- Links, prices, founder offer, WhatsApp number, and email: `src/config/site.ts`.
- Videos: `src/config/videos.ts`. Set `youtubeId` on an item to use YouTube; otherwise the Google Drive preview is used.
- Screenshots: put `{name}-ar.jpg` (or `.png`) in `public/screenshots/`. Add `{name}-en.jpg` when an English shot exists; `/en` uses it and falls back to the Arabic file. If a screen has no file, that image is skipped.
- Video posters: add `public/videos/posters/{key}.webp`, then add the key to `posterKeys` in `src/lib/screenshots.ts`. Until then, the matching screenshot is the poster.

## Deploy

Push the repo to Vercel. No extra config. The site URL in `src/config/site.ts` is `https://smileos.org`.
