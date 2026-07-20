import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { OM_OSS_KVALITET } from "@/lib/content";

/**
 * Kvalitet & Miljö teaser — text left, lackbox photo right, linking to
 * /kvalitet-miljo. Shared by the home page and /var-verkstad.
 */
export function KvalitetTeaser() {
  return (
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
  );
}
