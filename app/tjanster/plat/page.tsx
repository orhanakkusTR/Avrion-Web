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
    q: "Hur snabbt kan ni reparera en plåtskada?",
    a: "Mindre plåtskador klarar vi ofta på 1–2 dagar. Större reparationer tar 3–5 dagar. Vi ger alltid en tidsuppskattning vid offerten.",
  },
  {
    q: "Går det att reparera en allvarlig kollisionsskada?",
    a: "Ja, i de flesta fall. Vi utför en noggrann skadeanalys och informerar om reparation är kostnadseffektivt jämfört med totalskadevärdering.",
  },
  {
    q: "Kan ni hjälpa med försäkringsärenden?",
    a: "Absolut. Vi hjälper med skadedokumentation, kontaktar försäkringsbolaget och samordnar hela processen åt dig.",
  },
  {
    q: "Ger ni garanti på plåtarbetet?",
    a: "Ja, vi lämnar 2 års garanti på utfört plåtarbete och använda material.",
  },
  {
    q: "Reparerar ni även rostskador?",
    a: "Ja, vi åtgärdar och skyddar mot rost. Tidig behandling förhindrar att skadan sprider sig vidare.",
  },
] as const;

const PROCESS_STEPS = [
  {
    title: "Skadeanalys & kostnadsförslag",
    text: "Vi analyserar skadan noggrant med mätverktyg och ger ett skriftligt kostnadsförslag.",
  },
  {
    title: "Riktning & formning",
    text: "Med modern riktningsutrustning återställer vi karossens geometri till ursprungliga mått.",
  },
  {
    title: "Byte av plåtdelar",
    text: "Skadade detaljer som dörrar, skärmar och tröskelplåtar byts mot nya originaldelar eller godkänt alternativ.",
  },
  {
    title: "Svetsning & fogskydd",
    text: "Alla skarvar svetsas enligt fabriksmetod och behandlas med rostskydd och fogmassa.",
  },
  {
    title: "Kontrollmätning & godkännande",
    text: "Slutkontroll med kontrollmätutrustning säkerställer att bilen uppfyller alla krav.",
  },
] as const;

export const metadata: Metadata = {
  title: "Plåtreparation Mölndal & Göteborg | Avrion Service AB",
  description: "Expert på plåtreparation och karossarbete i Mölndal och Göteborg. Vi riktar och reparerar alla skador – snabbt, med 2 års garanti. Boka tid idag.",
  openGraph: {
    title: "Plåtreparation Mölndal & Göteborg | Avrion Service AB",
    description: "Expert på plåtreparation och karossarbete i Mölndal och Göteborg. Vi riktar och reparerar alla skador – snabbt, med 2 års garanti. Boka tid idag.",
    type: "website",
    locale: "sv_SE",
    siteName: "Avrion Service AB",
    url: "https://avrionservice.se/tjanster/plat",
    images: [
      {
        url: "https://avrionservice.se/og/plat.jpg",
        width: 1200,
        height: 630,
        alt: "Plåtreparation och karossarbete hos Avrion Service AB i Mölndal",
      },
    ],
  },
  alternates: {
    canonical: "https://avrionservice.se/tjanster/plat",
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
      foundingDate: "2009",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 8 },
    },
    {
      "@type": "Service",
      name: "Plåt — Avrion Service AB",
      serviceType: "Auto Body Repair",
      provider: { "@id": "https://avrionservice.se/#business" },
      areaServed: { "@type": "City", name: "Mölndal" },
      description: "Expert på plåtreparation och karossarbete i Mölndal. Vi riktar och reparerar alla skador – snabbt, säkert och med garanti. Boka idag.",
      url: "https://avrionservice.se/tjanster/plat",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: "https://avrionservice.se" },
        { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://avrionservice.se/tjanster" },
        { "@type": "ListItem", position: 3, name: "Plåt", item: "https://avrionservice.se/tjanster/plat" },
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

export default function PlatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <PageHero
        title="Plåtreparation & Karossarbete i Mölndal"
        subtitle="Vi reparerar och riktar alla typer av karosskador med noggrant hantverk och modern utrustning för ett säkert och hållbart resultat."
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
                Varför välja oss för plåt?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                <RichText text="Avrion Service AB är specialister på **plåtreparation och karossarbete** i Mölndal. Oavsett om det gäller en liten buckla, en parkeringsskada eller en större kollisionsskada återställer vi din bil med precision och gedigen erfarenhet. Modern riktningsutrustning och kontrollmått säkerställer ett säkert och hållbart resultat." />
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                <RichText text="Efter plåtarbetet tar våra lackerare vid, så att karossreparation och [lackering|/tjanster/lackering] flyter ihop till ett sömlöst slutresultat. Vi hjälper dig gärna med **försäkringsärenden** och du får alltid en **skriftlig offert** innan arbetet påbörjas – transparent och utan överraskningar. **Etablerade 2009.** Våra tekniker är certifierade plåtslagare med lång erfarenhet och medlemmar i **Bilskadeförbundet**." />
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
                src="/plåt.png"
                alt="Plåtreparation & Karossarbete i Mölndal — Avrion Service AB, Mölndal"
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
          <ServiceFaq title="Vanliga frågor om plåt" items={FAQ_ITEMS} />
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
              href="/tjanster/skadebesiktning"
              className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-800 font-medium hover:border-brand hover:text-brand transition-colors shadow-sm"
            >
              Skadebesiktning <ArrowRight size={16} aria-hidden="true" />
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
        title="Behöver du plåt i Mölndal?"
        text="Kontakta oss idag – vi återkommer snabbt med offert och tid."
      />
    </>
  );
}
