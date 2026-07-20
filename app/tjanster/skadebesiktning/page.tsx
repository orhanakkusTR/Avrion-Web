import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Calendar, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Skadebesiktning Bil Mölndal | Avrion Service AB",
  description: "Professionell skadebesiktning i Mölndal. Fotodokumentation, skaderapport och underlag för försäkringsbolag. Snabb och opartisk utredning.",
  openGraph: {
    title: "Skadebesiktning Bil Mölndal | Avrion Service AB",
    description: "Professionell skadebesiktning i Mölndal. Fotodokumentation, skaderapport och underlag för försäkringsbolag. Snabb och opartisk utredning.",
    type: "website",
    locale: "sv_SE",
    siteName: "Avrion Service AB",
    images: [
      {
        url: "https://avrionservice.se/og-skadebesiktning.jpg",
        width: 1200,
        height: 630,
        alt: "Skadebesiktning hos Avrion Service AB i Mölndal",
      },
    ],
  },
  alternates: {
    canonical: "https://avrionservice.se/tjanster/skadebesiktning",
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
      telephone: "+46311234567", // TODO: replace with real business phone number before going live
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
      name: "Skadebesiktning — Avrion Service AB",
      serviceType: "Vehicle Damage Assessment",
      provider: { "@id": "https://avrionservice.se/#business" },
      areaServed: { "@type": "City", name: "Mölndal" },
      description: "Professionell skadebesiktning i Mölndal. Fotodokumentation, skaderapport och underlag för försäkringsbolag. Snabb och opartisk utredning.",
      url: "https://avrionservice.se/tjanster/skadebesiktning",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: "https://avrionservice.se" },
        { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://avrionservice.se/tjanster" },
        { "@type": "ListItem", position: 3, name: "Skadebesiktning", item: "https://avrionservice.se/tjanster/skadebesiktning" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "När behöver jag en skadebesiktning?",
          acceptedAnswer: { "@type": "Answer", text: "Vid trafikskador, parkeringsskador, köp/sälj av begagnat fordon, efter hagel eller storm, och vid oenighet med försäkringsbolag om skadans omfattning." },
        },
        {
          "@type": "Question",
          name: "Godkänner försäkringsbolagen er rapport?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, vår skaderapport är utformad i enlighet med försäkringsbranschens krav och godkänns av de flesta försäkringsbolag i Sverige." },
        },
        {
          "@type": "Question",
          name: "Kan ni besikta ett begagnat fordon jag funderar på att köpa?",
          acceptedAnswer: { "@type": "Answer", text: "Absolut, vi erbjuder köparbesiktning som ger dig trygghet om fordonets skick innan köp." },
        },
        {
          "@type": "Question",
          name: "Hur lång tid tar en skadebesiktning?",
          acceptedAnswer: { "@type": "Answer", text: "En standardbesiktning tar 30–60 minuter. Rapporten är klar inom 1–2 arbetsdagar." },
        },
        {
          "@type": "Question",
          name: "Kostar skadebesiktning något?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, vi tar en fast avgift per besiktning. Kontakta oss för aktuellt pris. Vid reparation hos oss avräknas besiktningsavgiften." },
        },
      ],
    },
  ],
};

export default function SkadebesiktningPage() {
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
            <li className="text-white/80" aria-current="page">Skadebesiktning</li>
          </ol>
        </Container>
      </nav>

      {/* Hero */}
      <section className="bg-navy-900 border-t-2 border-white/20 pt-16 pb-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Skadebesiktning & Skadeutredning i Mölndal
            </h1>
            <p className="text-white/75 text-lg mb-8 leading-relaxed">
              Vi besiktar och dokumenterar skador på ditt fordon professionellt – med fotografering, skaderapport och underlag anpassat för försäkringsbolag.
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
                Varför välja oss för skadebesiktning?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Avrion Service AB erbjuder professionell skadebesiktning i Mölndal och Göteborgsregionen sedan över 10 år. Vår opartiska skadeutredning ger dig ett tydligt underlag för försäkringsärenden, begagnatköp eller reparationsplanering.{" "}
                <Link href="/om-oss" className="underline text-brand hover:text-brand/80">Läs mer om oss</Link>.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-success mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-slate-700">Certifierade tekniker — auktoriserade av Bilskadeförbundet (BSF)</span>
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

              {/* Customer testimonial */}
              <blockquote className="mt-8 border-l-4 border-brand pl-4">
                <div className="flex gap-0.5 mb-1" aria-label="5 av 5 stjärnor">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 italic text-sm leading-relaxed">
                  ”Professionell och snabb besiktning. Rapporten godkändes direkt av mitt försäkringsbolag.”
                </p>
                <cite className="mt-1 block text-slate-500 text-xs not-italic">— {/* TODO: client name */}</cite>
              </blockquote>
              <Link href="/referenser" className="inline-block mt-3 text-sm text-brand underline hover:text-brand/80">
                Fler kundrecensioner →
              </Link>
            </div>
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/skadebesiktning.png"
                alt="Skadebesiktning & Skadeutredning i Mölndal — Avrion Service AB, Mölndal"
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
              <h3 className="font-heading font-bold text-slate-900 mb-2">Visuell genomgång</h3>
              <p className="text-slate-600 text-sm leading-relaxed">En erfaren tekniker genomför en strukturerad visuell besiktning av hela fordonet eller angiven skada.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                2
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Fotodokumentation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Vi fotograferar alla skador systematiskt i hög upplösning med tydliga referenspunkter.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                3
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Skaderapport</h3>
              <p className="text-slate-600 text-sm leading-relaxed">En detaljerad skrivna rapport upprättas med beskrivning av varje skada, berörd del och bedömd åtgärd.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                4
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Försäkringsunderlag</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Rapporten formateras enligt försäkringsbolagens krav och skickas direkt om önskat.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                5
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Rådgivning</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Vi går igenom fynden med dig och rekommenderar lämpliga nästa steg – reparation, ersättningskrav eller fortsatt körning.</p>
            </li>
          </ol>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-slate-900 text-center mb-10">
              Vanliga frågor om skadebesiktning
            </h2>
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">När behöver jag en skadebesiktning?</h3>
                <p className="text-slate-600 leading-relaxed">Vid trafikskador, parkeringsskador, köp/sälj av begagnat fordon, efter hagel eller storm, och vid oenighet med försäkringsbolag om skadans omfattning.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Godkänner försäkringsbolagen er rapport?</h3>
                <p className="text-slate-600 leading-relaxed">Ja, vår skaderapport är utformad i enlighet med försäkringsbranschens krav och godkänns av de flesta försäkringsbolag i Sverige.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Kan ni besikta ett begagnat fordon jag funderar på att köpa?</h3>
                <p className="text-slate-600 leading-relaxed">Absolut, vi erbjuder köparbesiktning som ger dig trygghet om fordonets skick innan köp.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Hur lång tid tar en skadebesiktning?</h3>
                <p className="text-slate-600 leading-relaxed">En standardbesiktning tar 30–60 minuter. Rapporten är klar inom 1–2 arbetsdagar.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Kostar skadebesiktning något?</h3>
                <p className="text-slate-600 leading-relaxed">Ja, vi tar en fast avgift per besiktning. Kontakta oss för aktuellt pris. Vid reparation hos oss avräknas besiktningsavgiften.</p>
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
              href="/tjanster/plat"
              className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-800 font-medium hover:border-brand hover:text-brand transition-colors shadow-sm"
            >
              Plåt <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/tjanster/lackering"
              className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-800 font-medium hover:border-brand hover:text-brand transition-colors shadow-sm"
            >
              Lackering <ArrowRight size={16} aria-hidden="true" />
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
                Behöver du skadebesiktning i Mölndal?
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
