@AGENTS.md
@docs/DESIGN_RULES.md

# Avrion Service — Project Rules

This is the **Avrion Service AB** website — a Swedish auto body shop
(lackering / plåt / polering / skadebesiktning). Site content is **Swedish**;
code, comments, and commits are **English**. Design comes from the four
mockups; copy comes from `docs/CONTENT.md`; visuals from `docs/DESIGN_SYSTEM.md`.

## MANDATORY: Design Rules

**Before every UI change**, read and apply `docs/DESIGN_RULES.md`.
The file contains typography hierarchy, color token semantics, spacing scales,
visual hierarchy rules, and a pre-implementation checklist.
No UI code is written until the relevant checklist sections are satisfied.

## Golden rules

1. **Never invent Swedish copy.** Use `docs/CONTENT.md` verbatim. If text is
   missing, add a `{/* TODO: client copy */}` marker — do not make it up.
2. **Never hardcode colors, fonts, or spacing.** Use Tailwind tokens defined
   in `app/globals.css` `@theme`. No raw `#0b1f3f` in JSX.
3. **One section/component per task.** No mega-PRs.
4. **Mobile-first.** Build the 375px layout, then scale up.
5. **Accessibility is not optional.** Semantic HTML, alt text, focus states,
   aria on interactive widgets.

## Stack rules

- **Next.js 16 App Router**, TypeScript strict mode on.
- Prefer **Server Components**; add `"use client"` only when you need state,
  effects, or browser APIs (slider, forms, mobile menu, accordion).
- Styling: **Tailwind v4 only**. No CSS modules, no inline `style={{}}` except
  for truly dynamic values (e.g. slider position %).
- Interactive primitives (accordion, select, dialog): **shadcn/ui** (Radix).
- Icons: **lucide-react** only.
- Forms: **react-hook-form + zod**. Validation messages in Swedish.

## File & naming conventions

```
app/
  layout.tsx
  page.tsx                # Hem
  tjanster/page.tsx
  om-oss/page.tsx
  referenser/page.tsx
  kontakt/page.tsx
  boka/page.tsx
  api/inquiry/route.ts
components/
  layout/Header.tsx, Footer.tsx, MobileNav.tsx
  ui/Button.tsx, Container.tsx, Section.tsx
  home/Hero.tsx, ServiceCards.tsx, BeforeAfter.tsx, Process.tsx, Testimonials.tsx
  services/ServiceCard.tsx
  contact/InquiryForm.tsx, ContactInfo.tsx, Faq.tsx, MapEmbed.tsx
lib/
  content.ts
  utils.ts
docs/
  DESIGN_SYSTEM.md
  CONTENT.md
```

## Things NOT to do

- ❌ Don't add a CMS, auth, database, or payments — not in scope.
- ❌ Don't add animation libraries for simple hovers (use CSS/Tailwind).
- ❌ Don't change brand colors or copy "to look nicer" — ask first.
- ❌ Don't commit secrets or `.env.local`.
- ❌ Don't use `localStorage` for anything required to render.
