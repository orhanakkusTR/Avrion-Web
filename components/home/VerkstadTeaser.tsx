import Image from "next/image";
import { CheckCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { OM_OSS_VERKSTAD, CONTACT_INFO } from "@/lib/content";

/**
 * Workshop features — image left, checklist + call button right.
 * Shared by the home page and /var-verkstad; mirrors KvalitetTeaser.
 */
export function VerkstadTeaser() {
  return (
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

            {/* Ghost call link — same language as "Läs mer" above */}
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s|–|-/g, "")}`}
              className="inline-flex items-center gap-1.5 mt-8 text-sm font-semibold text-brand hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded"
            >
              <Phone size={15} aria-hidden="true" />
              Ring oss – {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
