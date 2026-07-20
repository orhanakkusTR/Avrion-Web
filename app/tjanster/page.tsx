import { Fragment } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { SERVICES_PAGE, SERVICES } from "@/lib/content";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Våra tjänster",
  description:
    "Professionell lackering, plåt och polering för ett resultat som ser bra ut – och håller över tid.",
};

export default function TjansterPage() {
  return (
    <>
      {/* Page hero */}
      <PageHero title={SERVICES_PAGE.h1} subtitle={SERVICES_PAGE.subtitle} />

      {/* Service cards grid */}
      <Section className="bg-white">
        <Container>
          <div>
            {SERVICES.map((service, i) => (
              <Fragment key={service.id}>
                {i > 0 && (
                  <div
                    className="mx-auto my-16 lg:my-20 h-px w-1/2 bg-gradient-to-r from-transparent via-brand/30 to-transparent"
                    aria-hidden="true"
                  />
                )}
                <ServiceCard service={service} index={i} />
              </Fragment>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA banner — text + CTAs left, quick callback form right */}
      <CtaBanner />
    </>
  );
}
