"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Headphones } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/content";
import { MobileNav } from "./MobileNav";
import { ContactDrawer } from "./ContactDrawer";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
            ? "bg-navy-950/98 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-20 py-3">
            {/* Logo */}
            <Link
              href="/"
              className="focus-visible:ring-2 focus-visible:ring-white rounded"
              aria-label="Avrion Service — till startsidan"
            >
              <Image
                src="/avrion-logo.png"
                alt="Avrion Service"
                width={160}
                height={45}
                priority
                className="h-9 sm:h-10 w-auto brightness-0 invert"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Huvudnavigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/85 hover:text-white text-2xl font-medium transition-colors relative group focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-brand transition-all duration-200 group-hover:w-full"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </nav>

            {/* Right: contact trigger + phone + CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              {/* Contact drawer trigger — headset icon + phone */}
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label="Öppna kontaktinformation"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
              >
                <span className="w-9 h-9 rounded-full border border-white/30 group-hover:border-brand/70 group-hover:bg-brand/10 flex items-center justify-center transition-all duration-200">
                  <Headphones size={16} aria-hidden="true" />
                </span>
                <span className="hidden lg:block text-sm font-medium">
                  {CONTACT_INFO.phone}
                </span>
              </button>

              {/* Book CTA — desktop only */}
              <Link
                href="/boka"
                className="hidden lg:inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-white"
              >
                Boka tid
              </Link>

              <MobileNav />
            </div>
          </div>
        </Container>
      </header>

      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
