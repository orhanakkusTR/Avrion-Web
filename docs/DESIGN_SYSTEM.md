# DESIGN_SYSTEM.md

Derived from the four mockups. Tweak hex values once the client supplies exact
brand colors. Paste these into `tailwind.config.ts`.

## Color palette

| Token | Hex (approx) | Use |
|-------|--------------|-----|
| `navy-950` | `#0A1B3D` | Hero & footer background, dark sections |
| `navy-900` | `#0E2247` | Secondary dark surface |
| `brand-blue` | `#1D4FA3` | Primary buttons, icons, links, accents |
| `brand-blue-600` | `#1E5BB8` | Button hover |
| `accent-blue` | `#2563EB` | Highlights / focus |
| `slate-900` | `#0F172A` | Headings on light bg |
| `slate-600` | `#475569` | Body text |
| `slate-400` | `#94A3B8` | Muted text, captions |
| `slate-200` | `#E2E8F0` | Borders, dividers |
| `slate-50`  | `#F8FAFC` | Light section background |
| `white`     | `#FFFFFF` | Cards, light bg |
| `star-gold` | `#FBBF24` | Review stars |
| `success`   | `#16A34A` | Checklist ticks, form success |

```ts
// tailwind.config.ts (theme.extend.colors)
colors: {
  navy: { 900: "#0E2247", 950: "#0A1B3D" },
  brand: { DEFAULT: "#1D4FA3", 600: "#1E5BB8" },
  accent: "#2563EB",
  star: "#FBBF24",
}
```

## Typography

- **Headings:** Plus Jakarta Sans, bold (700/800).
- **Body:** Inter, regular (400) / medium (500).

| Element | Size (desktop) | Weight |
|---------|----------------|--------|
| H1 hero | 56–64px / `text-5xl`–`text-6xl` | 800 |
| H2 section | 32–36px / `text-3xl` | 700 |
| H3 card | 20–22px / `text-xl` | 700 |
| Body | 16px / `text-base` | 400 |
| Small / caption | 13–14px / `text-sm` | 400 |

Hero H1 is tight leading (`leading-tight`) and white on navy.

## Spacing & layout

- Max content width: **1200px** (`max-w-7xl` ~1280 is fine), centered, `px-4 md:px-6`.
- Section vertical padding: `py-16 md:py-24`.
- Card padding: `p-6`. Card radius: `rounded-2xl`. Card border: `1px slate-200`.
- Card shadow: subtle (`shadow-sm`, hover `shadow-md`).
- Grid gaps: `gap-6` (cards), `gap-8` (large sections).

## Buttons

| Variant | Look |
|---------|------|
| Primary | `brand-blue` bg, white text, `rounded-lg`, `px-5 py-3`, hover `brand-600` |
| Secondary | white/transparent bg, `slate-200` border, dark text; on dark bg → translucent border + white text |

Buttons often carry a leading icon (calendar for "Boka tid", document for "Få offert").

## Icons (lucide-react)

| Concept | Icon |
|---------|------|
| Lackering (paint) | `spray-can` / `paintbrush` |
| Plåt (bodywork) | `car` |
| Polering | `sparkles` |
| Skadebesiktning | `clipboard-check` |
| Boka tid | `calendar` |
| Få offert | `file-text` |
| Trust badges | `shield-check`, `clock`, `check-circle` |
| Phone/Mail/Pin/Clock | `phone`, `mail`, `map-pin`, `clock` |

Icons sit in a rounded square chip: `brand-blue` bg, white icon, `rounded-xl`.

## Components inventory

| Component | Where | Notes |
|-----------|-------|-------|
| Header / nav | all | sticky, active underline, "Boka tid" CTA right-aligned |
| MobileNav | all | hamburger → slide-over |
| Hero | home, page heroes | dark car image bg + overlay, left-aligned text |
| TrustBadges | home hero | 3 inline icon+label items |
| ServiceCard | home, services | icon chip, image, title, text, "Läs mer →" / checklist |
| BeforeAfter | home | draggable divider, FÖRE/EFTER tags |
| StatStrip | home | 3 stats: 10+, 2 000+, 98% |
| Process | home | 4 numbered steps with connector arrows |
| TestimonialCard | home | 5 gold stars, quote, name, "Google" tag |
| CtaBanner | services | navy banner + 2 buttons |
| InquiryForm / BookingForm | contact, boka | RHF + Zod, Swedish labels |
| ContactInfo | contact | address/phone/mail/hours rows with icons |
| MapEmbed | contact | Google Maps iframe |
| Faq | contact | accordion (Radix) |
| Footer | all | 4 columns + social icons + legal row |

## Responsive breakpoints

- `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280.
- Service cards: 1 col (mobile) → 3–4 col (`lg`).
- Hero text scales down; image stays as full-bleed background.
- Contact page: form + sidebar stack on mobile, 2-col on `lg`.

## Imagery

- Dark, glossy car photos for heroes (blue-tinted).
- In-shop action shots for service cards (painting, bodywork, polishing).
- Replace stock with client photos in Phase 6. Keep consistent cool/blue grade.
