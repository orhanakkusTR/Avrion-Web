import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Calendar, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RichText } from "@/components/ui/RichText";
import { QuoteButton } from "@/components/contact/QuoteButton";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { PageHero } from "@/components/layout/PageHero";

const FAQ_ITEMS = [
  {
    q: "Vilka repor kan polering ta bort?",
    a: "Ytliga repor som sitter i klarlacken kan vanligtvis poleras bort helt. Djupare repor som nått grundfärgen kan minskas men behöver lackeringsbehandling för full reparation.",
  },
  {
    q: "Hur länge håller poleringsresultatet?",
    a: "Med lackförsegling håller resultatet 6–12 månader. Med keramiskt skydd (tillval) upp till 2–3 år.",
  },
  {
    q: "Kan man polera en ny bil?",
    a: "Ja, ny bilpolering (New Car Protection) rekommenderas för att skydda lacken redan från start och bevara bilens värde.",
  },
  {
    q: "Ingår invändig rengöring?",
    a: "Grundläggande invändig rengöring ingår. Komplett interiörbehandling finns som tilläggstjänst.",
  },
  {
    q: "Hur lång tid tar en polering?",
    a: "En hel bil tar vanligtvis 4–8 timmar beroende på storlek och lackens skick. Vi informerar alltid om tid vid bokningstillfället.",
  },
] as const;

const PROCESS_STEPS = [
  {
    title: "Handtvätt & klering",
    text: "Bilen tvättas noggrant för hand och lackytan decontamineras med lerplugg och kemisk avfettning.",
  },
  {
    title: "Lackbedömning",
    text: "Vi mäter lacktjockleken och bedömer grad av oxidering, repor och virvelmärken för rätt poleringsteknik.",
  },
  {
    title: "Maskinpolering steg 1–2",
    text: "Grövre defekter avlägsnas med korrektionspolering. Steg 2 finpolerar ytan till full spegelblankt finish.",
  },
  {
    title: "Lackförsegling",
    text: "Vi applicerar lackförsegling eller keramiskt skydd (tillval) för maximal glans och skydd mot smuts och UV.",
  },
  {
    title: "Interiör & finish",
    text: "Fönsterputs, dörrgångar och interiörrengöring ingår. Bilen lämnas klar och ren.",
  },
] as const;

export const metadata: Metadata = {
  title: "Bilpolering Mölndal & Göteborg | Avrion Service AB",
  description: "Professionell bilpolering i Mölndal av certifierade tekniker. Vi tar bort repor och ger djupglans med maskinpolering i flera steg. 2 års garanti. Boka tid idag!",
  openGraph: {
    title: "Bilpolering Mölndal & Göteborg | Avrion Service AB",
    description: "Professionell bilpolering i Mölndal av certifierade tekniker. Vi tar bort repor och ger djupglans med maskinpolering i flera steg. 2 års garanti. Boka tid idag!",
    type: "website",
    locale: "sv_SE",
    siteName: "Avrion Service AB",
    url: "https://avrionservice.se/tjanster/polering",
    images: [
      {
        url: "https://avrionservice.se/og-polering.jpg",
        width: 1200,
        height: 630,
        alt: "Bilpolering Mölndal — Avrion Service AB",
      },
    ],
  },
  alternates: {
    canonical: "https://avrionservice.se/tjanster/polering",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://avrionservice.se/#business",
      name: "Avrion Service AB",
      url: "https://avrionservice.se",
      telephone: "+46738339966",
      email: "info@avrionservice.se",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Industrigatan 12",
        addressLocality: "Mölndal",
        postalCode: "431 53",
        addressCountry: "SE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 57.6561,
        longitude: 12.0149,
      },
      areaServed: ["Mölndal", "Göteborg", "Kungsbacka", "Härryda", "Partille"],
      priceRange: "$$",
    },
    {
      "@type": "Service",
      name: "Polering — Avrion Service AB",
      serviceType: "Auto Detailing",
      provider: { "@id": "https://avrionservice.se/#business" },
      areaServed: { "@type": "City", name: "Mölndal" },
      description: "Professionell bilpolering i Mölndal. Vi tar bort repor, ger djupglans och skyddar lacken. Maskinpolering i flera steg – boka nu.",
      url: "https://avrionservice.se/tjanster/polering",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: "https://avrionservice.se" },
        { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://avrionservice.se/tjanster" },
        { "@type": "ListItem", position: 3, name: "Polering", item: "https://avrionservice.se/tjanster/polering" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function PoleringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <PageHero
        title="Bilpolering & Lackvård i Mölndal"
        subtitle="Vi polerar bort repor och ger din bil en djup lyster med invändig och utvändig behandling för en finish i absolut toppklass."
      >
        <Button href="/boka" variant="primary">
          <Calendar size={16} aria-hidden="true" />
          Boka tid
        </Button>
        <Button href="/kontakt" variant="secondary-dark">
          Begär offert
        </Button>
      </PageHero>

      {/* Intro + image */}
      <Section className="bg-white pt-12 pb-12 md:pt-16 md:pb-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-slate-900 mb-4">
                Varför välja oss för polering?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                <RichText text="Avrion Service AB utför **professionell bilpolering** i Mölndal med maskinpolering i flera steg. Vi tar effektivt bort oxidering, repor och virvelmärken och avslutar med lackförsegling för ett långvarigt skydd. Resultatet är en djup lyster som lyfter hela bilens intryck." />
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                <RichText text="Varje bil bedöms individuellt – lackens skick avgör hur många steg som behövs, och du får alltid en **skriftlig offert** innan vi börjar. Med **10+ års erfarenhet** vet vi vad som krävs för en finish i toppklass. Osäker på vad din bil behöver? [Kontakta oss|/kontakt] så hjälper vi dig vidare." />
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-success mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">Certifierade och erfarna tekniker</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-success mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">2 års garanti på arbete och material</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-success mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">Transparenta priser – skriftlig offert alltid</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-success mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">Hjälp med försäkringsärenden</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-success mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">Snabb handläggningstid</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-success mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">Meguiar’s Detailing Partner — godkänd produktpartner för professionell polering</span>
                </li>
              </ul>

              {/* CTA trio */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/boka" variant="primary">
                  <Calendar size={16} aria-hidden="true" />
                  Boka tid
                </Button>
                <QuoteButton label="Få offert" variant="secondary" />
                <Button href="tel:+46738339966" variant="secondary">
                  <Phone size={16} aria-hidden="true" />
                  Ring oss
                </Button>
              </div>
            </div>
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/polering.png"
                alt="Polering & Lackvård i Mölndal — Avrion Service AB, Mölndal"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-slate-50 pt-12 pb-12 md:pt-16 md:pb-16">
        <Container>
          <h2 className="font-heading font-bold text-3xl text-slate-900 text-center mb-10">
            Vår process – steg för steg
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:border-brand/40 hover:shadow-md transition-all overflow-hidden"
              >
                <span
                  className="absolute top-2 right-4 font-heading font-extrabold text-6xl text-brand/15 leading-none select-none"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="font-heading font-bold text-slate-900 mb-2 relative">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed relative">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-white pt-12 pb-12 md:pt-16 md:pb-16">
        <Container>
          <ServiceFaq title="Vanliga frågor om polering" items={FAQ_ITEMS} />
        </Container>
      </Section>

      {/* Related services */}
      <Section className="bg-slate-50 pt-12 pb-12 md:pt-16 md:pb-16">
        <Container>
          <h2 className="font-heading font-bold text-2xl text-slate-900 text-center mb-8">
            Relaterade tjänster
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tjanster/lackering"
              className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-800 font-medium hover:border-brand hover:text-brand transition-colors shadow-sm"
            >
              Lackering <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/tjanster/plat"
              className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-800 font-medium hover:border-brand hover:text-brand transition-colors shadow-sm"
            >
              Plåt <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/tjanster"
              className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-800 font-medium hover:border-brand hover:text-brand transition-colors shadow-sm"
            >
              Alla tjänster <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CtaBanner
        title="Behöver du polering i Mölndal?"
        text="Kontakta oss idag – vi återkommer snabbt med offert och tid."
      />
    </>
  );
}
