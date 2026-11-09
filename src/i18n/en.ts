import type { Dictionary } from "./ar";

export const en: Dictionary = {
  meta: {
    title: "smileos — your whole dental clinic in one place",
    description:
      "smileos is an Arabic-first dental clinic system: appointments, patient files and X-rays, per-tooth treatment plans, prescriptions on your letterhead, installment billing, and a daily cash drawer that adds up to the pound.",
  },
  a11y: {
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    close: "Close",
    play: "Play",
    whatsapp: "Message us on WhatsApp",
  },
  lang: { switch: "العربية" },
  nav: {
    features: "Features",
    journey: "Patient journey",
    money: "Money control",
    videos: "Videos",
    pricing: "Pricing",
    faq: "FAQ",
  },
  actions: {
    login: "Login",
    book: "Book a demo",
    bookFree: "Book a free demo",
    tour: "Take the tour",
  },
  brand: "smileos",
  hero: {
    title: "Your whole dental clinic in one place — from booking to closing the drawer",
    subtitle:
      "smileos is an Arabic-first dental clinic system: appointments, patient files and X-rays, per-tooth treatment plans, prescriptions on your letterhead, installment billing, and a daily cash drawer that adds up to the pound.",
    chips: ["Arabic & English", "Laptop, tablet and mobile", "Nothing to install", "Permissions per staff member"],
    visualAlt: "smileos financial analytics dashboard",
    cardArrival: "Patient arrived → sent to the doctor",
    cardDrawer: "Today's drawer closed ✓",
  },
  problems: {
    title: "Problems every clinic knows",
    items: {
      papers: {
        title: "Notebooks, paper and lost files",
        text: "Patient history and X-rays are scattered and never there when you need them.",
      },
      cash: {
        title: "Cash doesn't add up at day end",
        text: "And no one knows who took what or where the difference came from.",
      },
      waiting: {
        title: "The patient waits, the doctor searches",
        text: "Reception calls out and the doctor hunts for the file.",
      },
      balance: {
        title: "Who paid, who still owes?",
        text: "Installments over many sessions with no clear balance.",
      },
    },
  },
  journey: {
    title: "A patient's day at your clinic",
    watch: "Watch",
    steps: {
      appointments: {
        title: "Booking",
        text: "Weekly, monthly and list views, a color per doctor, and free slots based on clinic hours.",
      },
      arrival: {
        title: "Arrival",
        text: "Reception marks the patient as arrived and picks the doctor; the name appears on the doctor's screen instantly.",
      },
      patients: {
        title: "Patient file",
        text: "Details, allergies, chronic conditions, X-rays and every visit on one screen.",
      },
      "treatment-plan": {
        title: "Treatment plan",
        text: "An FDI odontogram: the doctor picks the tooth and the service, and each tooth is planned, in progress or done.",
      },
      prescriptions: {
        title: "Prescription",
        text: "From your clinic's medicine library with doses, printed on your letterhead or sent to the patient as an image.",
      },
      lab: {
        title: "Lab work",
        text: "What went to the lab and what came back, so nothing gets lost or forgotten.",
      },
      invoice: {
        title: "Invoice & payment",
        text: "One invoice per treatment plan, payments in installments, and the visit fee added automatically on arrival.",
      },
    },
  },
  features: {
    title: "Everything your clinic needs",
    items: {
      analytics: {
        title: "Financial analytics",
        text: "Net collected, expenses, cash flow and patient balances.",
      },
      patients: {
        title: "Patient files & X-rays",
        text: "Full medical history with X-rays on the patient file.",
      },
      appointments: {
        title: "Appointments & waiting list",
        text: "Weekly, monthly and list views, plus a waiting list for patients waiting for a slot.",
      },
      "treatment-plan": {
        title: "Odontogram & treatment plans",
        text: "Follow every tooth and every session, with date and doctor.",
      },
      prescriptions: { title: "Prescriptions on your letterhead", text: "Print it or send it as an image." },
      treasury: { title: "Daily cash drawer", text: "Automatic daily close, cash count and drawer handover." },
      billing: { title: "Billing & installments", text: "Payments, refunds and a clear balance." },
      expenses: { title: "Expenses", text: "Every expense with its category and payment method." },
      inventory: { title: "Inventory", text: "Alerts for low stock and expiring items." },
      lab: { title: "Lab work", text: "What went to the lab and what came back." },
      staff: { title: "Team & permissions", text: "The owner sets what each role can do." },
      activity: { title: "Audit log", text: "Who did what, when, and exactly what changed." },
    },
  },
  money: {
    title: "Know who handled every pound in the drawer",
    subtitle: "A daily cash drawer built for clinics where reception staff change.",
    imageAlt: "Daily cash drawer",
    historyAlt: "Cash drawer history",
    points: {
      close: "Automatic close after clinic hours — nobody forgets, and closed days can't be edited.",
      blind: "Blind count: reception counts cash without seeing the expected amount.",
      handover: "Drawer handover between receptionists, with a count on both sides.",
      totals: "The owner sees per-person totals and any difference.",
      ownerOnly: "Discounts, refunds, voids and cash out are owner-only unless granted.",
      refunds: "Refunds go back the way they were paid, and a double click never records a payment twice.",
    },
  },
  roles: {
    title: "A screen for every role",
    tabs: {
      owner: {
        label: "Owner",
        alt: "Owner financial analytics",
        bullets: {
          one: "Financial analytics",
          two: "Daily drawer and differences",
          three: "Permissions per role",
          four: "Audit log",
        },
      },
      doctor: {
        label: "Doctor",
        alt: "Patient file and treatment plan",
        bullets: {
          one: "Waiting patients live",
          two: "Start and finish the visit",
          three: "Odontogram and treatment plans",
          four: "Prescriptions",
        },
      },
      reception: {
        label: "Reception",
        alt: "Patient arrival board",
        bullets: {
          one: "Booking and calendar",
          two: "Patient arrival and choosing the doctor",
          three: "Payments and invoices",
          four: "Drawer handover",
        },
      },
      assistant: {
        label: "Assistant",
        alt: "Inventory screen",
        bullets: {
          one: "Helps the doctor with patient files",
          two: "Booking and arrival",
          three: "Inventory",
          four: "No access to money",
        },
      },
    },
  },
  videos: {
    title: "A tour of the system",
    tabJourney: "Patient journey",
    tabManagement: "Clinic management",
    arabicBadge: "Walkthrough in Arabic",
    items: {
      dashboard: { title: "Dashboard", description: "Net collected, expenses, cash flow and patient balances." },
      patients: {
        title: "Patients",
        description: "Details, allergies, chronic conditions, X-rays and every visit on one screen.",
      },
      appointments: {
        title: "Appointments",
        description: "Weekly, monthly and list views, a color per doctor, and free slots based on clinic hours.",
      },
      inventory: { title: "Inventory", description: "Alerts for low stock and expiring items." },
      services: { title: "Services", description: "Visit and treatment services, each with its duration and price." },
      staff: { title: "Medical staff", description: "The owner sets what each role can do." },
      lab: {
        title: "Lab work",
        description: "What went to the lab and what came back, so nothing gets lost or forgotten.",
      },
      expenses: { title: "Expenses", description: "Every expense with its category and payment method." },
      "treatment-plan": {
        title: "Treatment plan",
        description:
          "An FDI odontogram: the doctor picks the tooth and the service, and each tooth is planned, in progress or done.",
      },
      arrival: {
        title: "Patient arrival",
        description:
          "Reception marks the patient as arrived and picks the doctor; the name appears on the doctor's screen instantly.",
      },
      prescriptions: {
        title: "Prescriptions",
        description:
          "From your clinic's medicine library with doses, printed on your letterhead or sent to the patient as an image.",
      },
    },
  },
  trust: {
    look: {
      title: "Arabic & English, your clinic's look",
      points: {
        one: "Arabic-first, with English",
        two: "Your clinic's logo and colors",
        three: "Prescriptions on your letterhead",
        four: "Dark mode",
      },
    },
    safe: {
      title: "Your data is safe",
      points: {
        one: "Each clinic's data fully separated",
        two: "Permissions per role",
        three: "An audit log of every change",
        four: "X-rays stored privately",
      },
    },
  },
  pricing: {
    title: "Plans",
    note: "Every plan has every feature; only the number of users changes.",
    perMonth: "EGP / month",
    perYear: "EGP / year",
    usersExact: "{n} users",
    usersUpTo: "Up to {n} users",
    plans: {
      solo: { name: "Solo" },
      basic: { name: "Basic" },
      advanced: { name: "Advanced" },
    },
    founder: {
      badge: "First 10 clinics only",
      title: "Founder offer",
      points: {
        free: "First 3 months free",
        price: "Then EGP 500/month or EGP 5,000/year (save EGP 1,000)",
        staff: "Unlimited staff",
        features: "All features",
      },
      note: "The yearly plan starts after the 3 free months.",
      cta: "Claim your spot on WhatsApp",
      spotsLeft: "{n} spots left",
    },
  },
  faq: {
    title: "Common questions",
    items: {
      install: {
        q: "Do I need to install anything?",
        a: "No, it runs in the browser on a laptop, tablet or phone.",
      },
      data: {
        q: "Is my clinic's data safe?",
        a: "Each clinic's data is fully separated, every staff member sees only what they're allowed to, and every change is logged.",
      },
      staff: {
        q: "Can I add several doctors and receptionists?",
        a: "Yes, staff is unlimited in the founder offer.",
      },
      language: {
        q: "Is it Arabic only?",
        a: "Arabic and English; each staff member picks their language.",
      },
      letterhead: {
        q: "Can prescriptions use my letterhead?",
        a: "Yes, we set up your letterhead and the system fills in the patient, date and medicines.",
      },
      drawer: {
        q: "What if reception staff change during the day?",
        a: "Each person hands over the drawer with a count, and the owner sees every person's totals and any difference.",
      },
      start: {
        q: "How do I start?",
        a: "Message us on WhatsApp; we'll demo the system and set up your clinic.",
      },
    },
  },
  cta: {
    title: "Start with smileos",
    text: "Message us on WhatsApp; we'll demo the system and set up your clinic.",
    button: "Book a free demo",
  },
  footer: {
    rights: "All rights reserved.",
    email: "Email",
    whatsapp: "WhatsApp",
  },
};
