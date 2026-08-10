import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { PageHero } from "@/components/layout/PageHero";
import { REFERENCES_PAGE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenser",
  description:
    "Bilhandlare och verkstäder i Göteborgsregionen som Avrion Service AB arbetar för.",
};

export default function ReferenserPage() {
  return (
    <>
      {/* TODO: client copy — subtitle for the hero */}
      <PageHero title={REFERENCES_PAGE.h1} />

      <Section className="bg-slate-50">
        <Container>
          <h2 className="font-heading font-bold text-3xl text-slate-900 mb-10 lg:mb-14">
            {REFERENCES_PAGE.h2}
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {REFERENCES_PAGE.clients.map((client) => (
              <li key={client}>
                <div className="flex h-full min-h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-7 text-center shadow-sm transition-[box-shadow,border-color] hover:border-brand/40 hover:shadow-md">
                  <span className="font-semibold text-lg text-slate-900 leading-snug">
                    {client}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Shared CTA banner */}
      <CtaBanner />
    </>
  );
}
