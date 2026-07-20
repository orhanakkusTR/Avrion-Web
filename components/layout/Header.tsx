"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Headphones, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/content";
import { MobileNav } from "./MobileNav";
import { ContactDrawer } from "./ContactDrawer";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? "bg-white border-b border-slate-200 shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-20 py-3">
            {/* Logo */}
            <Link
              href="/"
              className={`rounded focus-visible:ring-2 ${
                scrolled ? "focus-visible:ring-brand" : "focus-visible:ring-white"
              }`}
              aria-label="Avrion Service — till startsidan"
            >
              <Image
                src="/avrion-logo.png"
                alt="Avrion Service"
                width={160}
                height={45}
                priority
                className={`h-9 sm:h-10 w-auto transition-all duration-300 ${
                  scrolled ? "" : "brightness-0 invert"
                }`}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Huvudnavigation">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-lg font-medium transition-colors relative group rounded focus-visible:ring-2 ${
                      scrolled
                        ? "text-slate-700 hover:text-slate-900 focus-visible:ring-brand"
                        : "text-white/85 hover:text-white focus-visible:ring-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-brand transition-all duration-200 group-hover:w-full ${
                        active ? "w-full" : "w-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right: contact trigger + phone + CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              {/* Mobile: direct call link — no drawer, just dials */}
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s|–|-/g, "")}`}
                aria-label={`Ring oss: ${CONTACT_INFO.phone}`}
                className={`lg:hidden inline-flex items-center rounded-lg px-3 py-2.5 border transition-all duration-200 focus-visible:ring-2 ${
                  scrolled
                    ? "text-slate-700 hover:text-slate-900 border-slate-300 hover:border-brand/70 hover:bg-brand/5 focus-visible:ring-brand"
                    : "text-white/90 hover:text-white border-white/30 hover:border-brand/70 hover:bg-brand/10 focus-visible:ring-white"
                }`}
              >
                <Phone size={16} aria-hidden="true" />
              </a>

              {/* Desktop: contact drawer trigger — outlined button, pairs with the CTA */}
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label="Öppna kontaktinformation"
                className={`hidden lg:inline-flex items-center gap-2 text-sm font-semibold rounded-lg py-2.5 lg:px-4 transition-all duration-200 focus-visible:ring-2 ${
                  scrolled
                    ? "text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-brand/70 hover:bg-brand/5 focus-visible:ring-brand"
                    : "text-white/90 hover:text-white border border-white/30 hover:border-brand/70 hover:bg-brand/10 focus-visible:ring-white"
                }`}
              >
                <Headphones size={16} aria-hidden="true" />
                <span>{CONTACT_INFO.phone}</span>
              </button>

              {/* Book CTA — desktop only */}
              <Link
                href="/boka"
                className="hidden lg:inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Boka tid
              </Link>

              <MobileNav scrolled={scrolled} />
            </div>
          </div>
        </Container>
      </header>

      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
