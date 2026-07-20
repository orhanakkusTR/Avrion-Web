# Plan: Integritetspolicy och Villkor

**Generated**: 2026-06-12

## Overview

Create two legal pages for Avrion Service AB's Next.js 16 website:
1. **Integritetspolicy** — GDPR-compliant Swedish privacy policy
2. **Villkor** — Swedish terms & conditions (Konsumentköplagen, Marknadsföringslagen)

Both pages must comply with Swedish law and EU regulations (GDPR / Dataskyddslagen).
After pages are created, update Footer.tsx so the existing `legalLinks` array entries
link to the correct routes instead of `#`.

## Stack context

- Next.js 16 App Router, TypeScript strict mode
- Tailwind v4 — design tokens in `app/globals.css` @theme block
- Colors: `navy-950`, `brand`, `slate-*` — never hardcode hex
- No CMS, no auth, no database
- All UI text in Swedish
- Existing page structure reference: `app/tjanster/page.tsx`
- CLAUDE.md rules apply

## Dependency Graph

```
T1 ──┐
     ├── T3
T2 ──┘
```

## Tasks

### T1: Create Integritetspolicy page
- **depends_on**: []
- **location**: `avrion-service/app/integritetspolicy/page.tsx`
- **description**: >
  Create a full GDPR-compliant Swedish privacy policy page.

  **Legal requirements (GDPR Art. 13/14 + Dataskyddslagen):**
  - Personuppgiftsansvarig: Avrion Service AB, Industrigatan 12, 431 53 Mölndal, info@avrionservice.se, 031-123 45 67
  - Kategorier av personuppgifter: namn, e-post, telefon, bilreg.nr, skadebeskrivning
  - Ändamål och rättslig grund: fullgörande av avtal (Art. 6.1.b), berättigat intresse för marknadsföring (Art. 6.1.f)
  - Lagringstid: bokningsdata 2 år, offertdata 6 månader
  - Mottagare: Resend (e-posttjänst), inga tredjelandsöverföringar utöver standardavtalsklausuler
  - Registrerades rättigheter: tillgång, rättelse, radering, begränsning, dataportabilitet, invändning
  - Rätt att klaga hos IMY (Integritetsskyddsmyndigheten), www.imy.se
  - Kontakt för dataskyddsfrågor: info@avrionservice.se

  **Page layout:**
  - Page hero: `bg-navy-950 py-16`, h1 "Integritetspolicy", subtitle
  - Content: `bg-white` section, `Container`, max-w-3xl mx-auto prose-style layout
  - Sections with h2 headings and paragraphs
  - No custom components needed — plain HTML semantics
  - Metadata: title="Integritetspolicy", description (Swedish)

- **validation**: Page renders at /integritetspolicy, all GDPR-required sections present, uses only Tailwind tokens (no hardcoded colors), TypeScript compiles without error
- **status**: Not Completed
- **log**:
- **files edited/created**:

### T2: Create Villkor page
- **depends_on**: []
- **location**: `avrion-service/app/villkor/page.tsx`
- **description**: >
  Create a Swedish terms & conditions page.

  **Legal requirements:**
  - Konsumentköplagen (2022:260) — consumer rights
  - Marknadsföringslagen (2008:486) — marketing rules
  - Lag om elektronisk handel (2002:562) — online booking obligations
  - Distansavtalslagen (2005:59) — distance contracts, 14-day withdrawal right (undantag: tjänster som påbörjats)

  **Sections to include:**
  1. Företagsinformation (org.nr, adress, kontakt)
  2. Tjänstebeskrivning (lackering, plåt, polering, skadebesiktning)
  3. Priser och betalning (offert krävs, betalning vid avhämtning)
  4. Bokning och avbokning (avbokning senast 24h, annars debiteras uppstartskostnad)
  5. Ångerrätt (14 dagar för konsumenter, undantag när arbete påbörjats med samtycke)
  6. Reklamation och garanti (Konsumentköplagen, 3 år för utfört arbete)
  7. Ansvarsbegränsning (force majeure, indirekta skador)
  8. Tillämplig lag och tvistelösning (svensk rätt, Allmänna reklamationsnämnden ARN)
  9. Ändringar av villkor

  **Page layout:**
  - Same hero pattern as T1 but title "Allmänna villkor"
  - Same content layout (bg-white, Container, max-w-3xl, prose-style)
  - Metadata: title="Allmänna villkor", description (Swedish)

- **validation**: Page renders at /villkor, all required legal sections present, uses only Tailwind tokens, TypeScript compiles without error
- **status**: Not Completed
- **log**:
- **files edited/created**:

### T3: Update Footer legal links
- **depends_on**: [T1, T2]
- **location**: `avrion-service/components/layout/Footer.tsx`
- **description**: >
  The Footer already renders `FOOTER.legalLinks` = ["Integritetspolicy", "Villkor"].
  Currently all links point to `href="#"`.
  
  Update the mapping so:
  - "Integritetspolicy" → href="/integritetspolicy"
  - "Villkor" → href="/villkor"
  
  Use a small lookup object or index-based map — keep it clean.
  Do NOT change any other part of Footer.tsx.

- **validation**: Footer legal links navigate correctly to /integritetspolicy and /villkor
- **status**: Not Completed
- **log**:
- **files edited/created**:

## Parallel Execution Groups

| Wave | Tasks | Can Start When |
|------|-------|----------------|
| 1    | T1, T2 | Immediately (parallel) |
| 2    | T3     | T1 and T2 complete |

## Risks & Mitigations
- Legal content must be realistic and comply with Swedish law — do not invent placeholder text
- No hardcoded colors or fonts — always use Tailwind tokens
- Do not modify lib/content.ts — keep all page content inline in the page files
