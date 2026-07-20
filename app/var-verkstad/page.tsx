import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { OM_OSS_VERKSTAD, OM_OSS_KVALITET, CONTACT_INFO } from "@/lib/content";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Vår verkstad – Avrion Service AB",
  description:
    "Modern karosseriverkstad i Mölndal med klimatstyrd lackbox, digital kulörmatchning och datoriserat riktningsbord.",
};

export default function VarVerkstadPage() {
  return (
    <>
      {/* Hero */}
      <PageHero title={OM_OSS_VERKSTAD.h2} subtitle={OM_OSS_VERKSTAD.text} />

      {/* Features — image left, text right */}
      <Section className="bg-white pt-12 pb-12 md:pt-16 md:pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-72 lg:h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/hero-workshop.png"
                alt="Avrion Service – vår verkstad i Mölndal"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl text-slate-900 mb-6">
                Det här hittar du hos oss
              </h2>
              <ul className="space-y-4">
                {OM_OSS_VERKSTAD.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-success mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Full-width call button */}
              <Button
                href={`tel:${CONTACT_INFO.phone.replace(/\s|–|-/g, "")}`}
                variant="primary"
                className="w-full mt-8 py-3.5 text-base font-semibold"
              >
                <Phone size={18} aria-hidden="true" />
                Ring oss – {CONTACT_INFO.phone}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Kvalitet teaser — text left, lackbox image right (mirrored) */}
      <Section className="bg-slate-50 pt-12 pb-12 md:pt-16 md:pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-last lg:order-first">
              <h2 className="font-heading font-bold text-3xl text-slate-900 mb-4">
                {OM_OSS_KVALITET.h2}
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 max-w-xl">
                {OM_OSS_KVALITET.text}
              </p>
              <Link
                href="/kvalitet-miljo"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded"
              >
                Läs mer
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <div className="relative h-72 lg:h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/professional_car_spray_painting_lackering_in_a_modern_auto_body_shop._a.png"
                alt="Modern lackbox – Avrion Service"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
