import Image from "next/image";
import { Calendar, FileText, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CallbackForm } from "@/components/contact/CallbackForm";
import { SERVICES_CTA, CONTACT_INFO } from "@/lib/content";

interface CtaBannerProps {
  /** Page-specific heading; falls back to the shared SERVICES_CTA copy. */
  title?: string;
  text?: string;
}

/**
 * Shared bottom CTA banner: dark card with the hero car photo, three CTAs
 * on the left and the quick callback form on the right. Full-width on
 * mobile, rounded inset card on desktop.
 */
export function CtaBanner({ title, text }: CtaBannerProps) {
  return (
    <section className="relative bg-navy-950 py-14 overflow-hidden lg:mx-[75px] lg:rounded-[15px] lg:mb-16">
      {/* Background car photo, darkened to keep text readable */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/hero-car.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 90vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/55" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-heading font-bold text-2xl text-white mb-2">
              {title ?? SERVICES_CTA.h3}
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">{text ?? SERVICES_CTA.text}</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/boka" variant="primary">
                <Calendar size={16} aria-hidden="true" />
                {SERVICES_CTA.ctaPrimary}
              </Button>
              <Button href="/kontakt" variant="secondary-dark">
                <FileText size={16} aria-hidden="true" />
                {SERVICES_CTA.ctaSecondary}
              </Button>
              <Button
                href={`tel:${CONTACT_INFO.phone.replace(/\s|–|-/g, "")}`}
                variant="secondary-dark"
              >
                <Phone size={16} aria-hidden="true" />
                {SERVICES_CTA.ctaCall}
              </Button>
            </div>
          </div>

          <CallbackForm />
        </div>
      </Container>
    </section>
  );
}
