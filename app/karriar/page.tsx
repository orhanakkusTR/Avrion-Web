import type { Metadata } from "next";
import { Wrench, TrendingUp, Users, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { RichText } from "@/components/ui/RichText";
import { CONTACT_INFO } from "@/lib/content";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Karriär – Avrion Service AB",
  description:
    "Vill du arbeta med bilar där hantverket kommer först? Skicka en spontanansökan till Avrion Service i Mölndal.",
};

const VALUES = [
  {
    icon: Wrench,
    title: "Hantverk i fokus",
    text: "Vi kompromissar aldrig med detaljerna – varje bil som lämnar verkstaden ska hålla högsta kvalitet.",
  },
  {
    icon: TrendingUp,
    title: "Utveckling på jobbet",
    text: "Vi investerar löpande i utbildning och modern utrustning så att du kan växa i ditt yrke.",
  },
  {
    icon: Users,
    title: "Ett lag som håller ihop",
    text: "Vi arbetar tätt tillsammans, hjälper varandra och är stolta över det vi levererar – varje dag.",
  },
] as const;

export default function KarriarPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Karriär"
        subtitle="Vill du arbeta med bilar i en verkstad där hantverket alltid kommer först? Då kan Avrion Service vara rätt plats för dig."
      />

      {/* Intro */}
      <Section className="bg-white pt-12 pb-12 md:pt-16 md:pb-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-slate-700 leading-relaxed mb-4">
              <RichText text="Hos Avrion Service i Mölndal arbetar vi varje dag med lackering, plåt, polering och skadebesiktning – alltid med kravet att resultatet ska bli lika bra som om det vore vår egen bil. Vi är ett sammansvetsat team som värdesätter **noggrant hantverk** och hjälper varandra att utvecklas. Här får du arbeta med modern utrustning och kollegor som delar din passion för bilar." />
            </p>
            <p className="text-slate-700 leading-relaxed">
              <RichText text="Just nu har vi inga utannonserade tjänster, men vi är alltid intresserade av att komma i kontakt med duktiga hantverkare. Skicka gärna en **spontanansökan** med ditt CV och några rader om dig själv – så hör vi av oss när en roll som matchar din profil öppnas." />
            </p>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-slate-50 pt-12 pb-12 md:pt-16 md:pb-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <article
                key={v.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand/40 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <v.icon size={22} aria-hidden="true" />
                </div>
                <h2 className="font-heading font-bold text-xl text-slate-900 mb-2">
                  {v.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">{v.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application CTA */}
      <section className="bg-navy-950 py-14 overflow-hidden lg:mx-[75px] lg:rounded-[15px] lg:mb-16">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-white mb-3">
              Låter det som något för dig?
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Skicka din spontanansökan idag.
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Spontanans%C3%B6kan`}
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white text-base font-semibold px-8 py-3.5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-white"
            >
              <Mail size={18} aria-hidden="true" />
              {CONTACT_INFO.email}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
