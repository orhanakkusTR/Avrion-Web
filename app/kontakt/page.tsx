import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { Faq } from "@/components/contact/Faq";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { CONTACT_PAGE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakta oss",
  description: "Boka tid eller begär offert – vi hjälper dig gärna.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy-900 border-t-2 border-white/20 pt-24 pb-14">
        <Container>
          <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-3">
            {CONTACT_PAGE.h1}
          </h1>
          <p className="text-white/70 text-lg">{CONTACT_PAGE.subtitle}</p>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form — left/wider */}
            <div className="lg:col-span-3">
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-1">
                {CONTACT_PAGE.formTitle}
              </h2>
              <p className="text-slate-500 text-sm mb-6">{CONTACT_PAGE.formIntro}</p>
              <InquiryForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <ContactInfo />
              <MapEmbed />
            </div>
          </div>

          <div className="mt-14">
            <Faq />
          </div>
        </Container>
      </Section>

      {/* Shared CTA banner */}
      <CtaBanner />
    </>
  );
}
