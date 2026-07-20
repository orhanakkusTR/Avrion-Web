import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Calendar, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Lackering Mölndal & Göteborg | Avrion Service AB",
  description: "Professionell billackering i Mölndal. Vi matchar exakt kulör, moderna lackboxar och 2 års garanti. Boka offert idag – snabb leverans.",
  openGraph: {
    title: "Lackering Mölndal & Göteborg | Avrion Service AB",
    description: "Professionell billackering i Mölndal. Vi matchar exakt kulör, moderna lackboxar och 2 års garanti. Boka offert idag – snabb leverans.",
    type: "website",
    locale: "sv_SE",
    siteName: "Avrion Service AB",
    url: 'https://avrionservice.se/tjanster/lackering',
    images: [{ url: '/og/lackering.jpg', width: 1200, height: 630, alt: 'Professionell billackering i Mölndal — Avrion Service AB' }],
  },
  alternates: {
    canonical: "https://avrionservice.se/tjanster/lackering",
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
      name: "Lackering — Avrion Service AB",
      serviceType: "Auto Body Painting",
      provider: { "@id": "https://avrionservice.se/#business" },
      areaServed: { "@type": "City", name: "Mölndal" },
      description: "Professionell billackering i Mölndal. Vi matchar exakt kulör, moderna lackboxar och 2 års garanti. Boka offert idag – snabb leverans.",
      url: "https://avrionservice.se/tjanster/lackering",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: "https://avrionservice.se" },
        { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://avrionservice.se/tjanster" },
        { "@type": "ListItem", position: 3, name: "Lackering", item: "https://avrionservice.se/tjanster/lackering" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hur lång tid tar en lackering?",
          acceptedAnswer: { "@type": "Answer", text: "En lackering tar normalt 1–3 arbetsdagar beroende på skadans omfattning. Vi meddelar alltid beräknad tid vid offert." },
        },
        {
          "@type": "Question",
          name: "Matchar ni lacken exakt mot originalet?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, vi använder digitalt spektrofotometer och databaser med alla biltillverkares originalkulörer för exakt matchning." },
        },
        {
          "@type": "Question",
          name: "Ger ni garanti på lackeringsarbetet?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, vi lämnar 2 års garanti på material och utfört arbete i enlighet med Konsumentköplagen." },
        },
        {
          "@type": "Question",
          name: "Kan jag använda försäkringen för lackering?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, vi hjälper dig med all dokumentation som ditt försäkringsbolag behöver och samarbetar med de flesta bolag." },
        },
        {
          "@type": "Question",
          name: "Utför ni lackering av hela bilen?",
          acceptedAnswer: { "@type": "Answer", text: "Vi lackar allt från enstaka detaljer till hela fordon. Kontakta oss för offert utifrån dina behov." },
        },
      ],
    },
  ],
};

export default function LackeringPage() {
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
            <li className="text-white/80" aria-current="page">Lackering</li>
          </ol>
        </Container>
      </nav>

      {/* Hero */}
      <section className="bg-navy-900 border-t-2 border-white/20 pt-16 pb-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Professionell Lackering i Mölndal
            </h1>
            <p className="text-white/75 text-lg mb-8 leading-relaxed">
              Vi erbjuder professionell lackering med högkvalitativa material och moderna lackboxar för ett perfekt resultat – oavsett skadans omfattning.
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
                Varför välja oss för lackering?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">Avrion Service AB är din lokala specialist på billackering i Mölndal och Göteborgsregionen. Med modern utrustning, exakt kulörmatching och erfarna lackerare levererar vi ett resultat som är omöjligt att skilja från fabriksoriginal.</p>
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
            </div>
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/professional_car_spray_painting_lackering_in_a_modern_auto_body_shop._a.png"
                alt="Professionell Lackering i Mölndal — Avrion Service AB, Mölndal"
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
              <h3 className="font-heading font-bold text-slate-900 mb-2">Skadeanalys & offert</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Vi besiktar skadan noggrant och ger dig en transparent skriftlig offert utan dolda avgifter.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                2
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Demontering & förarbete</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Vi demonterar berörda delar och utför slipning, spackling och grundering för ett perfekt underlag.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                3
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Lackering i lackbox</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Lackeringen sker i vår moderna klimatstyrda lackbox med exakt kulöranpassning via digitalt spektrofotometer.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                4
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Lackfinish & kontroll</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Vi polerar och finishar lacken till spegelblankt resultat. Kvalitetskontroll innan montering.</p>
            </li>
            <li className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-flex w-8 h-8 rounded-full bg-brand text-white text-sm font-bold items-center justify-center mb-3">
                5
              </span>
              <h3 className="font-heading font-bold text-slate-900 mb-2">Montering & leverans</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Alla delar monteras tillbaka och bilen levereras ren och klar för avhämtning.</p>
            </li>
          </ol>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-slate-900 text-center mb-10">
              Vanliga frågor om lackering
            </h2>
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Hur lång tid tar en lackering?</h3>
                <p className="text-slate-600 leading-relaxed">En lackering tar normalt 1–3 arbetsdagar beroende på skadans omfattning. Vi meddelar alltid beräknad tid vid offert.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Matchar ni lacken exakt mot originalet?</h3>
                <p className="text-slate-600 leading-relaxed">Ja, vi använder digitalt spektrofotometer och databaser med alla biltillverkares originalkulörer för exakt matchning.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Ger ni garanti på lackeringsarbetet?</h3>
                <p className="text-slate-600 leading-relaxed">Ja, vi lämnar 2 års garanti på material och utfört arbete i enlighet med Konsumentköplagen.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Kan jag använda försäkringen för lackering?</h3>
                <p className="text-slate-600 leading-relaxed">Ja, vi hjälper dig med all dokumentation som ditt försäkringsbolag behöver och samarbetar med de flesta bolag.</p>
              </div>
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Utför ni lackering av hela bilen?</h3>
                <p className="text-slate-600 leading-relaxed">Vi lackar allt från enstaka detaljer till hela fordon. Kontakta oss för offert utifrån dina behov.</p>
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
              href="/tjanster/polering"
              className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-800 font-medium hover:border-brand hover:text-brand transition-colors shadow-sm"
            >
              Polering <ArrowRight size={16} aria-hidden="true" />
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
                Behöver du lackering i Mölndal?
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
