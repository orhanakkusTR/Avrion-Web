import type { Metadata } from "next";
import { Leaf, Award, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { OM_OSS_KVALITET } from "@/lib/content";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Kvalitet & Miljö – Avrion Service AB",
  description:
    "Miljögodkända produkter och processer utan kompromisser i slutresultatet – kvalitet och hållbarhet hos Avrion Service i Mölndal.",
};

const badgeIcons = [Leaf, Award, CheckCircle];

export default function KvalitetMiljoPage() {
  return (
    <>
      {/* Hero */}
      <PageHero title={OM_OSS_KVALITET.h2} subtitle={OM_OSS_KVALITET.text} />

      {/* Badges */}
      <Section className="bg-white pt-12 pb-12 md:pt-16 md:pb-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OM_OSS_KVALITET.badges.map((badge, i) => {
              const Icon = badgeIcons[i] ?? CheckCircle;
              return (
                <article
                  key={badge.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand/40 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-slate-900 mb-2">
                    {badge.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{badge.text}</p>
                </article>
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
