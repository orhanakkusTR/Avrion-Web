import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  BRAND_NAME,
  CONTACT_INFO,
  FOOTER,
  SERVICES,
} from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80 border-t-[6px] border-white/80">
      <Container>
        {/* Main columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/avrion-logo.png"
              alt={BRAND_NAME}
              width={170}
              height={48}
              className="h-11 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mb-4">{FOOTER.tagline}</p>
            <Link
              href="/boka"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <Calendar size={15} aria-hidden="true" />
              Boka tid
            </Link>
          </div>

          {/* Tjänster */}
          <div>
            <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">
              Tjänster
            </p>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/tjanster#${s.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Om oss */}
          <div>
            <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">
              Om oss
            </p>
            <ul className="space-y-2 text-sm">
              {FOOTER.company.map((item) => (
                <li key={item}>
                  <Link
                    href="/om-oss"
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt & öppettider */}
          <div>
            <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">
              Kontakt
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{BRAND_NAME}<br />{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} aria-hidden="true" />
                <a
                  href={`tel:${CONTACT_INFO.phoneFooter.replace(/\s|-/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phoneFooter}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2 mt-2 pt-2 border-t border-white/10">
                <Clock size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  {CONTACT_INFO.hours}
                  <br />
                  {CONTACT_INFO.hoursSaturday}
                </span>
              </li>
            </ul>
          </div>
        </div>


      </Container>
    </footer>
  );
}
