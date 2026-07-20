import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Calendar, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

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
      mainEntity: [
        {
          "@type": "Question",
          name: "Vilka repor kan polering ta bort?",
          acceptedAnswer: { "@type": "Answer", text: "Ytliga repor som sitter i klarlacken kan vanligtvis poleras bort helt. Djupare repor som nått grundfärgen kan minskas men behöver lackeringsbehandling för full reparation." },
        },
        {
          "@type": "Question",
          name: "Hur länge håller poleringsresultatet?",
          acceptedAnswer: { "@type": "Answer", text: "Med lackförsegling håller resultatet 6–12 månader. Med keramiskt skydd (tillval) upp till 2–3 år." },
        },
        {
          "@type": "Question",
          name: "Kan man polera en ny bil?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, ny bilpolering (New Car Protection) rekommenderas för att skydda lacken redan från start och bevara bilens värde." },
        },
        {
          "@type": "Question",
          name: "Ingår invändig rengöring?",
          acceptedAnswer: { "@type": "Answer", text: "Grundläggande invändig rengöring ingår. Komplett interiörbehandling finns som tilläggstjänst." },
        },
        {
          "@type": "Question",
          name: "Hur lång tid tar en polering?",
          acceptedAnswer: { "@type": "Answer", text: "En hel bil tar vanligtvis 4–8 timmar beroende på storlek och lackens skick. Vi informerar alltid om tid vid bokningstillfället." },
        },
      ],
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

      {/* Breadcrumb */}
      <nav aria-label="Brödsmulor" className="bg-navy-950 border-t border-white/10">
        <Container>
          <ol className="flex items-center gap-2 py-3 text-xs text-white/50">
            <li><Link href="/" className="hover:text-white/80">Hem</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/tjanster" className="hover:text-white/80">Tjänster</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-white/80" aria-current="page">Polering</li>
          </ol>
        </Container>
      </nav>

      {/* Hero */}
      <section className="bg-navy-900 border-t-2 border-white/20 pt-16 pb-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Bilpolering & Lackvård i Mölndal
            </h1>
            <p className="text-white/75 text-lg mb-8 leading-relaxed">
              Vi polerar bort repor och ger din bil en djup lyster med invändig och utvändig behandling för en finish i absolut toppklass.
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
                Varför välja oss för polering?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">Avrion Service AB utför professionell bilpolering i Mölndal med maskinpolering i flera steg. Vi tar effektivt bort oxidering, repor och virvelmärken och avslutar med lackförsegling för långvarigt skydd.</p>
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
              <p className="mt-6 text-slate-600 text-sm">
                Läs vad våra kunder säger om oss på vår{" "}
                <Link href="/referenser" className="text-brand font-medium underline underline-offset-2 hover:text-brand/80">
                  referenssida
                </Link>
                .
              </p>
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
              <h3 className="font-heading font-bold text-slate-900 mb-2">Handtvätt & klering</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Bilen tvättas noggrant för hand och lackytan decontamineras med lerplugg och kemisk avfettning.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                2
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Lackbedömning</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Vi mäter lacktjockleken och bedömer grad av oxidering, repor och virvelmärken för rätt poleringsteknik.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                3
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Maskinpolering steg 1–2</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Grövre defekter avlägsnas med korrektionspolering. Steg 2 finpolerar ytan till full spegelblankt finish.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                4
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Lackförsegling</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Vi applicerar lackförsegling eller keramiskt skydd (tillval) för maximal glans och skydd mot smuts och UV.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                5
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Interiör & finish</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Fönsterputs, dörrgångar och interiörrengöring ingår. Bilen lämnas klar och ren.</p>
            </li>
          </ol>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-slate-900 text-center mb-10">
              Vanliga frågor om polering
            </h2>
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Vilka repor kan polering ta bort?</h3>
                <p className="text-slate-600 leading-relaxed">Ytliga repor som sitter i klarlacken kan vanligtvis poleras bort helt. Djupare repor som nått grundfärgen kan minskas men behöver lackeringsbehandling för full reparation.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Hur länge håller poleringsresultatet?</h3>
                <p className="text-slate-600 leading-relaxed">Med lackförsegling håller resultatet 6–12 månader. Med keramiskt skydd (tillval) upp till 2–3 år.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Kan man polera en ny bil?</h3>
                <p className="text-slate-600 leading-relaxed">Ja, ny bilpolering (New Car Protection) rekommenderas för att skydda lacken redan från start och bevara bilens värde.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Ingår invändig rengöring?</h3>
                <p className="text-slate-600 leading-relaxed">Grundläggande invändig rengöring ingår. Komplett interiörbehandling finns som tilläggstjänst.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Hur lång tid tar en polering?</h3>
                <p className="text-slate-600 leading-relaxed">En hel bil tar vanligtvis 4–8 timmar beroende på storlek och lackens skick. Vi informerar alltid om tid vid bokningstillfället.</p>
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
      <section className="bg-navy-950 py-14 mx-[75px] rounded-[15px]">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-heading font-bold text-2xl text-white mb-2">
                Behöver du polering i Mölndal?
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
