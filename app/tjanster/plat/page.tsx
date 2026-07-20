import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Calendar, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

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
      telephone: "+46311234567",
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
      mainEntity: [
        {
          "@type": "Question",
          name: "Hur snabbt kan ni reparera en plåtskada?",
          acceptedAnswer: { "@type": "Answer", text: "Mindre plåtskador klarar vi ofta på 1–2 dagar. Större reparationer tar 3–5 dagar. Vi ger alltid en tidsuppskattning vid offerten." },
        },
        {
          "@type": "Question",
          name: "Går det att reparera en allvarlig kollisionsskada?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, i de flesta fall. Vi utför en noggrann skadeanalys och informerar om reparation är kostnadseffektivt jämfört med totalskadevärdering." },
        },
        {
          "@type": "Question",
          name: "Kan ni hjälpa med försäkringsärenden?",
          acceptedAnswer: { "@type": "Answer", text: "Absolut. Vi hjälper med skadedokumentation, kontaktar försäkringsbolaget och samordnar hela processen åt dig." },
        },
        {
          "@type": "Question",
          name: "Ger ni garanti på plåtarbetet?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, vi lämnar 2 års garanti på utfört plåtarbete och använda material." },
        },
        {
          "@type": "Question",
          name: "Reparerar ni även rostskador?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, vi åtgärdar och skyddar mot rost. Tidig behandling förhindrar att skadan sprider sig vidare." },
        },
      ],
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

      {/* Breadcrumb */}
      <nav aria-label="Brödsmulor" className="bg-navy-950 border-t border-white/10">
        <Container>
          <ol className="flex items-center gap-2 py-3 text-xs text-white/50">
            <li><Link href="/" className="hover:text-white/80">Hem</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/tjanster" className="hover:text-white/80">Tjänster</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-white/80" aria-current="page">Plåt</li>
          </ol>
        </Container>
      </nav>

      {/* Hero */}
      <section className="bg-navy-900 border-t-2 border-white/20 pt-16 pb-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Plåtreparation & Karossarbete i Mölndal
            </h1>
            <p className="text-white/75 text-lg mb-8 leading-relaxed">
              Vi reparerar och riktar alla typer av karosskador med noggrant hantverk och modern utrustning för ett säkert och hållbart resultat.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/boka" variant="primary">
                <Calendar size={16} aria-hidden="true" />
                Boka tid
              </Button>
              <Button href="/kontakt" variant="secondary-dark">
                Begär offert
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro + image */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-slate-900 mb-4">
                Varför välja oss för plåt?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">Avrion Service AB är specialister på plåtreparation och karossarbete i Mölndal. Oavsett om det gäller en liten buckla, en parkeringsskada eller en större kollisionsskada – vi återställer din bil med precision och gedigen erfarenhet.</p>
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

              {/* E-E-A-T trust block */}
              <div className="mt-8 p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <p className="text-sm text-slate-700">
                  <strong>Etablerade 2009.</strong> Våra tekniker är certifierade plåtslagare med lång erfarenhet och medlemmar i <strong>Bilskadeförbundet</strong>.
                </p>
                <Link
                  href="/referenser"
                  className="flex items-center gap-2 text-sm text-slate-700 hover:text-brand transition-colors"
                  aria-label="Läs kundrecensioner på vår referenssida"
                >
                  <span className="text-amber-400 tracking-tight" aria-hidden="true">★★★★★</span>
                  <span className="font-medium">4,9 / 5</span>
                  <span className="text-slate-500">— Läs kundrecensioner</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
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
      <Section className="bg-slate-50">
        <Container>
          <h2 className="font-heading font-bold text-3xl text-slate-900 text-center mb-10">
            Vår process – steg för steg
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                1
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Skadeanalys & kostnadsförslag</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Vi analyserar skadan noggrant med mätverktyg och ger ett skriftligt kostnadsförslag.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                2
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Riktning & formning</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Med modern riktningsutrustning återställer vi karossens geometri till ursprungliga mått.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                3
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Byte av plåtdelar</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Skadade detaljer som dörrar, skärmar och tröskelplåtar byts mot nya originaldelar eller godkänt alternativ.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                4
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Svetsning & fogskydd</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Alla skarvar svetsas enligt fabriksmetod och behandlas med rostskydd och fogmassa.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                5
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Kontrollmätning & godkännande</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Slutkontroll med kontrollmätutrustning säkerställer att bilen uppfyller alla krav.</p>
            </li>
          </ol>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-slate-900 text-center mb-10">
              Vanliga frågor om plåt
            </h2>
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Hur snabbt kan ni reparera en plåtskada?</h3>
                <p className="text-slate-600 leading-relaxed">Mindre plåtskador klarar vi ofta på 1–2 dagar. Större reparationer tar 3–5 dagar. Vi ger alltid en tidsuppskattning vid offerten.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Går det att reparera en allvarlig kollisionsskada?</h3>
                <p className="text-slate-600 leading-relaxed">Ja, i de flesta fall. Vi utför en noggrann skadeanalys och informerar om reparation är kostnadseffektivt jämfört med totalskadevärdering.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Kan ni hjälpa med försäkringsärenden?</h3>
                <p className="text-slate-600 leading-relaxed">Absolut. Vi hjälper med skadedokumentation, kontaktar försäkringsbolaget och samordnar hela processen åt dig.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Ger ni garanti på plåtarbetet?</h3>
                <p className="text-slate-600 leading-relaxed">Ja, vi lämnar 2 års garanti på utfört plåtarbete och använda material.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Reparerar ni även rostskador?</h3>
                <p className="text-slate-600 leading-relaxed">Ja, vi åtgärdar och skyddar mot rost. Tidig behandling förhindrar att skadan sprider sig vidare.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related services */}
      <Section className="bg-slate-50">
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
      <section className="bg-navy-950 py-14 mx-[75px] rounded-[15px]">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-heading font-bold text-2xl text-white mb-2">
                Behöver du plåt i Mölndal?
              </h2>
              <p className="text-white/70">Kontakta oss idag – vi återkommer snabbt med offert och tid.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button href="/boka" variant="primary">
                <Calendar size={16} aria-hidden="true" />
                Boka tid
              </Button>
              <a
                href="tel:+46311234567"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-medium px-5 py-3 rounded-lg transition-colors"
              >
                <Phone size={16} aria-hidden="true" />
                031-123 45 67
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
