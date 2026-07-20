import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Leaf, Calendar, Phone } from "lucide-react";
import { QuoteButton } from "@/components/contact/QuoteButton";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import {
  OM_OSS_PAGE,
  OM_OSS_STORY,
  OM_OSS_STATS,
  OM_OSS_VERKSTAD,
  OM_OSS_KVALITET,
  SERVICES_CTA,
  CONTACT_INFO,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Om oss – Avrion Service AB",
  description:
    "Lär känna Avrion Service AB – vårt team, vår verkstad och våra värderingar. Professionell karosseri och lackering i Mölndal.",
};

const kvalitetIcons = [Leaf, Award, CheckCircle];

/** Renders **bold** markers in content strings as <strong> elements. */
function richText(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-slate-900">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function OmOssPage() {
  return (
    <>
      {/* Hero */}
      <PageHero title={OM_OSS_PAGE.h1} subtitle={OM_OSS_PAGE.subtitle} />

      {/* Vår berättelse */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-slate-900 mb-6">
                {OM_OSS_STORY.h2}
              </h2>
              <div className="space-y-4">
                {OM_OSS_STORY.paragraphs.map((p, i) => (
                  <p key={i} className="text-slate-700 text-base leading-relaxed">
                    {richText(p)}
                  </p>
                ))}
                <p className="text-slate-700 text-base leading-relaxed">
                  {OM_OSS_STORY.outro.before}
                  <Link
                    href="/kontakt"
                    className="text-brand font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                  >
                    {OM_OSS_STORY.outro.linkText}
                  </Link>
                  {OM_OSS_STORY.outro.after}
                </p>
              </div>

              {/* CTA trio */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/boka" variant="primary">
                  <Calendar size={16} aria-hidden="true" />
                  {SERVICES_CTA.ctaPrimary}
                </Button>
                <QuoteButton label={SERVICES_CTA.ctaSecondary} variant="secondary" />
                <Button
                  href={`tel:${CONTACT_INFO.phone.replace(/\s|–|-/g, "")}`}
                  variant="secondary"
                >
                  <Phone size={16} aria-hidden="true" />
                  {SERVICES_CTA.ctaCall}
                </Button>
              </div>
            </div>
            <div className="relative h-72 lg:h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/hero-workshop.png"
                alt="Avrion Service – vår verkstad i Mölndal"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats strip */}
      <section className="bg-navy-950 py-14 border-b-[6px] border-brand">
        <Container>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {OM_OSS_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-1">
                  {stat.value}
                </dt>
                <dd className="text-white/70 text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Vår verkstad */}
      <Section className="bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-72 lg:h-[420px] rounded-2xl overflow-hidden shadow-lg order-last lg:order-first">
              <Image
                src="/professional_car_spray_painting_lackering_in_a_modern_auto_body_shop._a.png"
                alt="Modern lackbox – Avrion Service"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl text-slate-900 mb-4">
                {OM_OSS_VERKSTAD.h2}
              </h2>
              <p className="text-slate-700 text-base leading-relaxed mb-6">
                {OM_OSS_VERKSTAD.text}
              </p>
              <ul className="space-y-3">
                {OM_OSS_VERKSTAD.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-success flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Kvalitet & Miljö */}
      <Section className="bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-bold text-3xl text-slate-900 mb-4">
              {OM_OSS_KVALITET.h2}
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              {OM_OSS_KVALITET.text}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OM_OSS_KVALITET.badges.map((badge, i) => {
              const Icon = kvalitetIcons[i];
              return (
                <div
                  key={badge.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center mb-4">
                    <Icon size={22} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                    {badge.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{badge.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
