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
    q: "Hur lång tid tar en lackering?",
    a: "En lackering tar normalt 1–3 arbetsdagar beroende på skadans omfattning. Vi meddelar alltid beräknad tid vid offert.",
  },
  {
    q: "Matchar ni lacken exakt mot originalet?",
    a: "Ja, vi använder digitalt spektrofotometer och databaser med alla biltillverkares originalkulörer för exakt matchning.",
  },
  {
    q: "Ger ni garanti på lackeringsarbetet?",
    a: "Ja, vi lämnar 2 års garanti på material och utfört arbete i enlighet med Konsumentköplagen.",
  },
  {
    q: "Kan jag använda försäkringen för lackering?",
    a: "Ja, vi hjälper dig med all dokumentation som ditt försäkringsbolag behöver och samarbetar med de flesta bolag.",
  },
  {
    q: "Utför ni lackering av hela bilen?",
    a: "Vi lackar allt från enstaka detaljer till hela fordon. Kontakta oss för offert utifrån dina behov.",
  },
] as const;

const PROCESS_STEPS = [
  {
    title: "Skadeanalys & offert",
    text: "Vi besiktar skadan noggrant och ger dig en transparent skriftlig offert utan dolda avgifter.",
  },
  {
    title: "Demontering & förarbete",
    text: "Vi demonterar berörda delar och utför slipning, spackling och grundering för ett perfekt underlag.",
  },
  {
    title: "Lackering i lackbox",
    text: "Lackeringen sker i vår moderna klimatstyrda lackbox med exakt kulöranpassning via digitalt spektrofotometer.",
  },
  {
    title: "Lackfinish & kontroll",
    text: "Vi polerar och finishar lacken till spegelblankt resultat. Kvalitetskontroll innan montering.",
  },
  {
    title: "Montering & leverans",
    text: "Alla delar monteras tillbaka och bilen levereras ren och klar för avhämtning.",
  },
] as const;

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
      mainEntity: FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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

      {/* Hero */}
      <PageHero
        title="Professionell Lackering i Mölndal"
        subtitle="Vi erbjuder professionell lackering med högkvalitativa material och moderna lackboxar för ett perfekt resultat – oavsett skadans omfattning."
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
                Varför välja oss för lackering?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                <RichText text="Avrion Service AB är din lokala specialist på **billackering i Mölndal** och Göteborgsregionen. Med moderna lackboxar, digitalt spektrofotometer för exakt kulörmatchning och erfarna lackerare levererar vi ett resultat som är omöjligt att skilja från fabriksoriginal. Varje arbete avslutas med en noggrann kvalitetskontroll innan bilen lämnar verkstaden." />
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                <RichText text="Lackering behövs ofta efter en karosskada – därför arbetar vi tätt ihop med våra [plåtarbeten|/tjanster/plat] så att hela reparationen sker under ett och samma tak. Du får alltid en **skriftlig offert** i förväg och **2 års garanti** på arbete och material, så att du kan känna dig trygg hela vägen." />
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
          <ServiceFaq title="Vanliga frågor om lackering" items={FAQ_ITEMS} />
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
      <CtaBanner
        title="Behöver du lackering i Mölndal?"
        text="Kontakta oss idag – vi återkommer snabbt med offert och tid."
      />
    </>
  );
}
