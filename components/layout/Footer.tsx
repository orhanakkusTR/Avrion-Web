import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";

/* Brand glyphs — lucide dropped social icons, so these are inline SVGs. */
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
import { Container } from "@/components/ui/Container";
import { QuoteButton } from "@/components/contact/QuoteButton";
import {
  BRAND_NAME,
  CONTACT_INFO,
  FOOTER,
  SERVICES,
} from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80 border-t-[6px] border-brand">
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
            <div className="flex flex-wrap gap-2">
              <Link
                href="/boka"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                <Calendar size={15} aria-hidden="true" />
                Boka tid
              </Link>
              <QuoteButton
                label="Få offert"
                variant="secondary-dark"
                className="px-4 py-2 text-sm font-medium"
              />
            </div>

            {/* Social icons — hrefs TODO: real profile URLs from client */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                aria-label="Avrion Service på Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-brand/70 hover:bg-brand/10 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="#"
                aria-label="Avrion Service på Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-brand/70 hover:bg-brand/10 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
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
                    href={`/tjanster/${s.id}`}
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
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
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

        {/* Bottom bar: copyright + legal links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {BRAND_NAME}. {FOOTER.legal}
          </p>
          <ul className="flex items-center gap-5">
            {FOOTER.legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
