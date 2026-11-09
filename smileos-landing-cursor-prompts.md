# smileos landing page — Cursor prompts (v2)

New repo: `smileos-landing` (separate from `dental-saas-web`), deployed on Vercel.

## Before Prompt 1
Unzip `smileos-landing-assets.zip` at the repo root. It contains:
```
public/brand/logo.png                     <- logo from the presentation (395x92). Replace with logo.svg if you have it
reference/presentation.html               <- updated presentation (18 pages, 16 sections)
reference/screenshots/
  appointments-ar.jpg   arrival-ar.jpg (reception board per doctor)   waiting-list-ar.jpg
  patient-file-ar.jpg   invoice-ar.jpg        treasury-ar.jpg       treasury-history-ar.jpg
  expenses-ar.jpg       lab-ar.jpg            services-ar.jpg       medicines-ar.jpg
  prescription-ar.jpg   dashboard-ar.jpg      inventory-ar.jpg      staff-ar.jpg
  clinic-hours-ar.jpg   activity-ar.jpg       refunds-ar.jpg
```
Still missing (add later with the same naming, .png or .jpg): `patients` (patients list) and any `-en` versions. The two treasury screenshots will be replaced with realistic numbers.

---

## Prompt 1 — READ-ONLY (send first)

```
You are in a NEW repo "smileos-landing". This step is READ-ONLY: do not create, install or change anything.

1. Open reference/presentation.html. Confirm the brand tokens below match its :root CSS variables, and list its sections (title + bullets, short).
2. List reference/screenshots/ and public/brand/ with pixel sizes. For each screenshot say what it shows.
3. Read the plan in "Prompt 2" (I will paste it next) and report:
   - screenshot → section mapping you will use, and sections that have no screenshot
   - conflicts between the presentation and the plan (prices, names, feature claims)
   - anything in the presentation the plan does not cover
4. Note any screenshot that is too small or too compressed for a 1280px-wide layout.

Stop after the report and wait for my confirmation.
```

---

## Prompt 2 — BUILD (after I confirm Prompt 1's report)

```
Build the smileos marketing landing page in this repo using the confirmed screenshot mapping. Keep it simple: no backend, no database, no forms, no CMS, no heavy UI kit, no animation library.

## Stack
- Next.js (latest, App Router) + TypeScript strict + Tailwind CSS. lucide-react for icons. @vercel/analytics.
- Font via next/font/google: Cairo (weights 400/600/700) for both Arabic and Latin, same as the presentation and the product.
- Static output for every page (generateStaticParams, dynamicParams = false). Must deploy on Vercel with zero config.
- Do not commit. I commit myself.

## Brand tokens (from the presentation; define as CSS variables + Tailwind theme colors)
--navy #022D58 (primary, headings, primary buttons)
--ink #1F2A44 (body text)
--muted #7A8499 (secondary text)
--bg #FDF7F6 (page background, warm off-white)
--card #FFFFFF, --line #ECE8EC (card border)
--coral #F28B82 (accent: bullets, highlights, badges), --coral-soft #FBE8E6, --coral-ink #B23F36 (text on coral-soft)
--blue-soft #EDF2F7, --tab #F3F5F9
Style cues from the presentation: cards with a small radius (~10px) and a 1px --line border, round navy number badges, coral dot bullets, coral-soft badges with a small radius (~8px, not pills), large soft circles (blue-soft top corner, coral-soft bottom corner) as background decoration. Screenshots sit in white frames with a thin border and a light navy shadow.

## i18n (Arabic default + English)
- Routes: /ar and /en via app/[locale]. app/[locale]/layout.tsx is the root layout (no app/layout.tsx) and sets <html lang dir> (ar → rtl, en → ltr).
- next.config redirect "/" → "/ar" (permanent: false). No middleware/proxy.
- Dictionaries: src/i18n/ar.ts and src/i18n/en.ts. en must satisfy the type of ar (type Dictionary = typeof ar) so a missing key fails the build. All visible text, alt text and aria-labels come from the dictionaries.
- Language switcher in header and footer keeps the current #hash.
- RTL: only logical utilities (ms/me/ps/pe/start/end/text-start), never left/right. Directional icons flip with rtl:rotate-180.
- Western digits (0-9) in both languages, including prices.

## Config (single place to edit)
src/config/site.ts:
- siteUrl: "https://smileos.org"
- appUrl: "<APP_LOGIN_URL>" (Login button)
- whatsappNumber: "<20XXXXXXXXXX>" (international, digits only)
- email: "<EMAIL>"
- whatsapp prefilled message per locale:
  ar: "مرحبًا، عايز أحجز عرض تجريبي لنظام smileos لعيادتي"
  en: "Hi, I'd like a demo of smileos for my clinic"
  link = https://wa.me/{number}?text={encodeURIComponent(message)}
- offer: { enabled: true, spotsTotal: 10, spotsLeft: null }  // show "spots left" only when spotsLeft is a number
- plans: [
    { key: "solo",     monthly: 500,  yearly: 5000,  users: 3 },
    { key: "basic",    monthly: 750,  yearly: 7500,  users: 6 },
    { key: "advanced", monthly: 1200, yearly: 12000, users: 15 },
  ]  // currency EGP; plan names and "up to N users" text come from the dictionaries

src/config/videos.ts — array of { key, driveId, youtubeId?: string, group: "journey" | "management" }:
  appointments   1uXLxNf2QrnSuyIEq1tRnUMxHa5GFFcJo   journey
  arrival        1pCXMWCy65kmALpR2KVYvBwaxBlqObpOE   journey
  patients       1_e8UKX1ycxwNi6PXU88aUs1eS27SaaVR   journey
  treatment-plan 1PUfVpRNoE5MU_4GDCkNb_eDEduXuyuYT   journey
  prescriptions  1t-kYyE7EeSnHhX8KhTjZL7unwoP6RmCU   journey
  lab            1W8G0ERY61u6mCtZfBzqTQA1S4iMeSKJ8   journey
  dashboard      1srHScGGRpAETe40vRthIBNprpaB63h6c   management
  services       1nQ3_2veqtTh7bdUpNgMzH68xyZrcDPL5   management
  staff          12Sw65wUur6I_F3Jts_JV_OtYYPP2JaFK   management
  inventory      1nOgZ4SvRRylhJZJ7YtH2cFwugidtSonC   management
  expenses       1DE3oNqahQB8VhqKQg0uepWUpT1tekSHG   management
Titles/descriptions come from the dictionaries by key.

## Screenshots
- Copy the files from reference/screenshots/ to public/screenshots/ (keep names). Use them via next/image (width/height set, sizes set), priority only for the hero.
- Helper getScreenshot(screen, locale): use <screen>-en.* on /en when it exists, else <screen>-ar.*. If a screen has no file, the component renders without the image (no broken image).
- Do not copy reference/presentation.html into public/.

## Video player (performance matters)
- VideoCard: poster image + play button + title. Poster = public/videos/posters/{key}.webp if present, else the matching screenshot, else a navy gradient tile with the icon.
- Click opens an accessible modal (native <dialog>, Esc and backdrop close, focus returns to the card). Only then render the iframe:
  - youtubeId set → https://www.youtube-nocookie.com/embed/{id}?autoplay=1
  - else → https://drive.google.com/file/d/{driveId}/preview  (allow="autoplay; fullscreen", allowFullScreen)
- Never render any iframe on page load.
- On /en show a small badge "Walkthrough in Arabic".
- Any "watch" button elsewhere on the page opens the same modal for its key.

## Sections (in this order, each with an id for anchors)
1. Header (sticky, blurred background): logo, nav (Features, Patient journey, Money control, Videos, Pricing, FAQ), language switch, "Login" (ghost → appUrl), "Book a demo" (primary → WhatsApp). Mobile: menu sheet.
2. #hero: headline, subheadline, CTAs (Book a free demo on WhatsApp / Take the tour → #videos), 4 trust chips. Visual: dashboard-ar screenshot (crop to its top part with object-cover/object-top, ~16:10) in a browser frame, with 2 small floating HTML cards (not images): "Patient arrived → sent to the doctor" and "Today's drawer closed ✓". Soft circles in the background like the presentation cover.
3. #problems: 4 pain-point cards.
4. #journey (signature section): one patient's day as a stepper, horizontal on desktop, vertical on mobile, with navy number badges. 7 steps; each has title, one line, and a "Watch" button when it has a video. Clicking a step shows its screenshot next to the stepper when one exists.
5. #features: bento grid of 12 features (icon, title, one line). Larger tiles with screenshots for treatment plan (patient-file) and analytics (dashboard).
6. #money: navy band. Headline + 6 points + treasury-ar screenshot, with treasury-history-ar as a second smaller frame (offset/stacked). Coral bullets.
7. #roles: tabs Owner / Doctor / Reception / Assistant, each with 4 bullets and a screenshot (owner: dashboard, doctor: patient-file, reception: arrival, assistant: inventory).
8. #videos: tabs "Patient journey" / "Clinic management", grid of VideoCards.
9. #trust: two columns: "Arabic & English, your clinic's look" and "Your data is safe".
10. #pricing: founder offer card first (hidden if offer.enabled is false), then the 3 regular plans as cards (monthly + yearly price, users), with a line under them: all plans include every feature, the difference is the number of users.
11. #faq: accordion (native <details>).
12. Final CTA band + footer (logo, nav, language, WhatsApp, email, © year).
+ Floating WhatsApp button (bottom end corner, respects RTL).

## Design
- Use the brand tokens and presentation style above. Clean, warm, medical SaaS feel: lots of whitespace, max-w-7xl container.
- Real screenshots only, no stock photos of people.
- Light mode only.
- Small fade-up on scroll with IntersectionObserver + CSS, disabled with prefers-reduced-motion.
- Mobile first. Check 360px, 768px, 1280px in both directions.

## SEO
- generateMetadata per locale: title, description, canonical, alternates.languages (ar, en, x-default → /ar), openGraph, twitter card.
- OG image per locale with app/[locale]/opengraph-image.tsx (next/og): bg --bg, logo, the hero title, navy/coral accents.
- app/sitemap.ts (both locales), app/robots.ts, favicon/icons from the logo.
- JSON-LD SoftwareApplication (applicationCategory BusinessApplication, operatingSystem Web, offers in EGP from config.plans).

## Quality
- Lighthouse mobile ≥ 90 on Performance, Accessibility, Best Practices, SEO.
- AA contrast (check coral text: use --coral-ink for text, --coral only for dots/decoration), visible focus states, every image has alt text, keyboard-usable modal/tabs/accordion.
- npm run build and npm run lint pass with no errors.
- README: run locally, where to edit text (dictionaries), links/prices (site.ts), videos (videos.ts), screenshots naming, how to deploy on Vercel.

## Copy (use as is; tweak only for length/fit, keep the meaning)

### Hero
ar.title: "عيادتك كلها في مكان واحد — من الحجز لحد قفل الخزنة"
ar.subtitle: "smileos سيستم عربي لإدارة عيادات الأسنان: مواعيد، ملفات مرضى وأشعة، خطط علاج على كل سنّة، روشتات على ورق عيادتك، فواتير بالتقسيط، وخزنة يومية مضبوطة بالجنيه."
ar.ctaPrimary: "احجز عرض تجريبي مجاني"  ar.ctaSecondary: "شوف جولة في السيستم"
ar.chips: ["عربي وإنجليزي", "على اللابتوب والتابلت والموبايل", "من غير تثبيت برامج", "صلاحيات لكل موظف"]
en.title: "Your whole dental clinic in one place — from booking to closing the drawer"
en.subtitle: "smileos is an Arabic-first dental clinic system: appointments, patient files and X-rays, per-tooth treatment plans, prescriptions on your letterhead, installment billing, and a daily cash drawer that adds up to the pound."
en.ctaPrimary: "Book a free demo"  en.ctaSecondary: "Take the tour"
en.chips: ["Arabic & English", "Laptop, tablet and mobile", "Nothing to install", "Permissions per staff member"]

### Problems (title ar: "مشاكل كل عيادة عارفاها" / en: "Problems every clinic knows")
1. ar: "دفاتر وورق وملفات بتضيع" — "تاريخ المريض وأشعته متفرقين ومش لاقيينهم وقت ما تحتاجهم."
   en: "Notebooks, paper and lost files" — "Patient history and X-rays are scattered and never there when you need them."
2. ar: "الفلوس آخر اليوم مش مظبوطة" — "ومحدش عارف مين استلم إيه ولا الفرق جه منين."
   en: "Cash doesn't add up at day end" — "And no one knows who took what or where the difference came from."
3. ar: "المريض مستني والدكتور بيدوّر" — "الاستقبال ينادي والدكتور يدوّر على الملف."
   en: "The patient waits, the doctor searches" — "Reception calls out and the doctor hunts for the file."
4. ar: "مين دفع ومين عليه باقي؟" — "تقسيط على جلسات كتير من غير حساب واضح."
   en: "Who paid, who still owes?" — "Installments over many sessions with no clear balance."

### Journey (title ar: "يوم المريض في عيادتك" / en: "A patient's day at your clinic")
1. appointments (screenshot appointments) — ar: "الحجز" — "تقويم أسبوعي وشهري وقائمة، بلون لكل دكتور، ومواعيد متاحة حسب ساعات العيادة."
   en: "Booking" — "Weekly, monthly and list views, a color per doctor, and free slots based on clinic hours."
2. arrival (screenshot arrival) — ar: "وصول المريض" — "الاستقبال يضغط «وصل المريض» ويختار الدكتور، فاسم المريض يظهر عند الدكتور فورًا."
   en: "Arrival" — "Reception marks the patient as arrived and picks the doctor; the name appears on the doctor's screen instantly."
3. patients (screenshot patient-file) — ar: "ملف المريض" — "البيانات والحساسية والأمراض المزمنة والأشعة وكل الزيارات في شاشة واحدة."
   en: "Patient file" — "Details, allergies, chronic conditions, X-rays and every visit on one screen."
4. treatment-plan (screenshot patient-file) — ar: "خطة العلاج" — "خريطة أسنان بترقيم FDI، والدكتور يختار السنّة والخدمة، وكل سنّة ليها حالة: مخطط، جاري، تم."
   en: "Treatment plan" — "An FDI odontogram: the doctor picks the tooth and the service, and each tooth is planned, in progress or done."
5. prescriptions (screenshot prescription, fallback medicines) — ar: "الروشتة" — "من مكتبة أدوية العيادة بالجرعات، مطبوعة على ورق عيادتك أو صورة تتبعت للمريض."
   en: "Prescription" — "From your clinic's medicine library with doses, printed on your letterhead or sent to the patient as an image."
6. lab (screenshot lab) — ar: "أعمال المعمل" — "إيه اللي اتبعت للمعمل وإيه اللي رجع، فمفيش حاجة بتضيع أو تتنسي."
   en: "Lab work" — "What went to the lab and what came back, so nothing gets lost or forgotten."
7. (no video, screenshot invoice) — ar: "الفاتورة والدفع" — "فاتورة لكل خطة علاج، والمريض يدفع على دفعات، وسعر الكشف بيتضاف تلقائيًا عند الوصول."
   en: "Invoice & payment" — "One invoice per treatment plan, payments in installments, and the visit fee added automatically on arrival."

### Features (title ar: "كل اللي العيادة محتاجاه" / en: "Everything your clinic needs")
1. analytics — "التحليلات المالية" / "Financial analytics": "صافي المحصّل والمصروفات والتدفق النقدي والمستحق على المرضى." / "Net collected, expenses, cash flow and patient balances."
2. patients — "ملفات المرضى والأشعة" / "Patient files & X-rays": "تاريخ طبي كامل وأشعة محفوظة على ملف المريض." / "Full medical history with X-rays on the patient file."
3. appointments — "المواعيد وقائمة الانتظار" / "Appointments & waiting list": "عرض أسبوعي وشهري وقائمة، وقائمة انتظار للي مستنيين ميعاد." / "Weekly, monthly and list views, plus a waiting list for patients waiting for a slot."
4. treatment-plan — "خريطة الأسنان وخطط العلاج" / "Odontogram & treatment plans": "متابعة كل سنّة وكل جلسة بتاريخها والدكتور." / "Follow every tooth and every session, with date and doctor."
5. prescriptions — "روشتات على ورق عيادتك" / "Prescriptions on your letterhead": "طباعة أو صورة للمريض." / "Print it or send it as an image."
6. treasury — "الخزينة اليومية" / "Daily cash drawer": "قفل تلقائي كل يوم، وجرد، وتسليم درج." / "Automatic daily close, cash count and drawer handover."
7. billing — "الفواتير والتقسيط" / "Billing & installments": "دفعات ومرتجعات ومتبقي واضح." / "Payments, refunds and a clear balance."
8. expenses — "المصروفات" / "Expenses": "كل مصروف بفئته وطريقة دفعه." / "Every expense with its category and payment method."
9. inventory — "المخزون" / "Inventory": "تنبيه لما صنف يقل عن الحد أو يقرب ينتهي." / "Alerts for low stock and expiring items."
10. lab — "أعمال المعمل" / "Lab work": "اللي راح للمعمل واللي رجع." / "What went to the lab and what came back."
11. staff — "الفريق والصلاحيات" / "Team & permissions": "صاحب العيادة يحدد صلاحيات كل دور." / "The owner sets what each role can do."
12. activity — "سجل التدقيق" / "Audit log": "مين عمل إيه وإمتى، وإيه اللي اتغير بالظبط." / "Who did what, when, and exactly what changed."

### Money control
ar.title: "كل جنيه في الدرج معروف مين استلمه"
ar.subtitle: "خزينة يومية معمولة مخصوص للعيادات اللي الاستقبال فيها بيتغير."
en.title: "Know who handled every pound in the drawer"
en.subtitle: "A daily cash drawer built for clinics where reception staff change."
points (ar / en):
- "قفل تلقائي بعد آخر ساعات العيادة — محدش ينسى، وبعد القفل مفيش تعديل." / "Automatic close after clinic hours — nobody forgets, and closed days can't be edited."
- "جرد أعمى: الاستقبال يعدّ الفلوس من غير ما يشوف المبلغ المتوقع." / "Blind count: reception counts cash without seeing the expected amount."
- "تسليم الدرج بين موظفين الاستقبال، والاتنين بيعدّوا." / "Drawer handover between receptionists, with a count on both sides."
- "صاحب العيادة يشوف إجمالي كل شخص وأي فرق." / "The owner sees per-person totals and any difference."
- "الخصم والاسترداد والإلغاء وسحب الفلوس لصاحب العيادة بس، إلا لو سمح لحد." / "Discounts, refunds, voids and cash out are owner-only unless granted."
- "الاسترداد بنفس طريقة الدفع، والضغط مرتين مش بيسجل الدفعة مرتين." / "Refunds go back the way they were paid, and a double click never records a payment twice."

### Roles
Owner / "صاحب العيادة": financial analytics; daily drawer and differences; permissions per role; audit log.
Doctor / "الدكتور": waiting patients live; start and finish the visit; odontogram & treatment plans; prescriptions.
Reception / "الاستقبال": booking & calendar; patient arrival and choosing the doctor; payments & invoices; drawer handover.
Assistant / "المساعد": helps the doctor with patient files; booking & arrival; inventory; no access to money.
(Write each bullet in both languages, short.)

### Trust
"Arabic & English, your clinic's look" / "عربي وإنجليزي وبشكل عيادتك": Arabic-first with English; your clinic's logo and colors; prescriptions on your letterhead; dark mode.
"Your data is safe" / "بياناتك في أمان": each clinic's data fully separated; permissions per role; audit log of every change; X-rays stored privately.

### Pricing
Founder offer:
ar.badge: "لأول 10 عيادات بس"  ar.title: "عرض المؤسسين"
ar.points: ["أول 3 شهور مجانًا", "بعدها 500 جنيه في الشهر أو 5000 جنيه في السنة (توفير 1000 جنيه)", "عدد الموظفين غير محدود", "كل المميزات"]
ar.note: "الاشتراك السنوي يبدأ بعد الـ3 شهور المجانية."
ar.cta: "احجز مكانك على واتساب"
en.badge: "First 10 clinics only"  en.title: "Founder offer"
en.points: ["First 3 months free", "Then EGP 500/month or EGP 5,000/year (save EGP 1,000)", "Unlimited staff", "All features"]
en.note: "The yearly plan starts after the 3 free months."
en.cta: "Claim your spot on WhatsApp"
Plans (title ar: "خطط الأسعار" / en: "Plans"; subtitle ar: "كل الخطط بكل المميزات، والفرق في عدد المستخدمين بس." / en: "Every plan has every feature; only the number of users changes."):
solo: ar "الفردي" / en "Solo" — 3 users
basic: ar "أساسية" / en "Basic" — up to 6 users
advanced: ar "متقدمة" / en "Advanced" — up to 15 users
Price labels: ar "جنيه / الشهر", "جنيه / السنة"; en "EGP / month", "EGP / year".

### FAQ (ar / en)
1. "محتاج أنزّل برنامج؟" — "لا، السيستم بيشتغل من المتصفح على اللابتوب أو التابلت أو الموبايل."
   "Do I need to install anything?" — "No, it runs in the browser on a laptop, tablet or phone."
2. "بيانات عيادتي في أمان؟" — "بيانات كل عيادة منفصلة تمامًا، وكل موظف بيشوف اللي مسموح له بيه بس، وكل تعديل متسجل."
   "Is my clinic's data safe?" — "Each clinic's data is fully separated, every staff member sees only what they're allowed to, and every change is logged."
3. "ينفع أكتر من دكتور واستقبال؟" — "أيوه، وعدد الموظفين غير محدود في عرض المؤسسين."
   "Can I add several doctors and receptionists?" — "Yes, staff is unlimited in the founder offer."
4. "السيستم عربي بس؟" — "عربي وإنجليزي، وكل موظف يختار اللغة اللي تريحه."
   "Is it Arabic only?" — "Arabic and English; each staff member picks their language."
5. "ينفع أطبع الروشتة على ورق عيادتي؟" — "أيوه، بنركّب ورق عيادتك والسيستم يكتب عليه اسم المريض والتاريخ والأدوية."
   "Can prescriptions use my letterhead?" — "Yes, we set up your letterhead and the system fills in the patient, date and medicines."
6. "لو الريسبشن اتغير، الفلوس هتتظبط إزاي؟" — "كل موظف بيسلّم الدرج بجرد، وصاحب العيادة بيشوف إجمالي كل شخص وأي فرق."
   "What if reception staff change during the day?" — "Each person hands over the drawer with a count, and the owner sees every person's totals and any difference."
7. "أبدأ إزاي؟" — "كلمنا على واتساب، نعرض لك السيستم ونجهّز عيادتك."
   "How do I start?" — "Message us on WhatsApp; we'll demo the system and set up your clinic."

### Video titles (ar / en)
dashboard "الشاشة الرئيسية" / "Dashboard"; patients "المرضى" / "Patients"; appointments "الحجوزات" / "Appointments"; inventory "المخزون" / "Inventory"; services "الخدمات" / "Services"; staff "الكادر الطبي" / "Medical staff"; lab "أعمال المعمل" / "Lab work"; expenses "المصروفات" / "Expenses"; treatment-plan "خطة العلاج" / "Treatment plan"; arrival "وصول المريض" / "Patient arrival"; prescriptions "الروشتات" / "Prescriptions".

## When done, report
- files created (tree), how to run, build/lint result
- placeholders still left (<APP_LOGIN_URL>, WhatsApp number, email, missing screenshots/posters)
- any copy you shortened and why
```
