import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES_PAGE, SERVICES, SERVICES_CTA } from "@/lib/content";

export const metadata: Metadata = {
  title: "Våra tjänster",
  description:
    "Professionell lackering, plåt och polering för ett resultat som ser bra ut – och håller över tid.",
};

export default function TjansterPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-navy-900 overflow-hidden pt-24 pb-16">
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 hidden lg:block" aria-hidden="true">
          <Image
            src="/hero-car.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/40 to-transparent" />
        </div>
        <Container className="relative z-10">
          <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4 animate-fade-up">
            {SERVICES_PAGE.h1}
          </h1>
          <p className="text-white/80 text-lg max-w-xl animate-fade-up delay-100">{SERVICES_PAGE.subtitle}</p>
        </Container>
      </section>

      {/* Service cards grid */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA banner */}
      <section className="bg-navy-950 py-14 mb-16 mx-[75px] rounded-[15px]">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                {SERVICES_CTA.h3}
              </h3>
              <p className="text-white/70">{SERVICES_CTA.text}</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button href="/boka" variant="primary">
                <Calendar size={16} aria-hidden="true" />
                {SERVICES_CTA.ctaPrimary}
              </Button>
              <Button href="/kontakt" variant="secondary-dark">
                <FileText size={16} aria-hidden="true" />
                {SERVICES_CTA.ctaSecondary}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
