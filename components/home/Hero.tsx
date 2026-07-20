import Image from "next/image";
import { Calendar, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { QuoteButton } from "@/components/contact/QuoteButton";
import { HOME_HERO, HOME_TRUST_BADGES } from "@/lib/content";

const badgeIcons = [ShieldCheck, Clock, CheckCircle];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-950"
      aria-label="Hjältesektionen"
    >
      {/* Full-screen background car photo */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/hero-car.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay — matches Autentic template rgba(10,5,5,0.85) */}
        <div className="absolute inset-0 bg-black/75" />
        {/* Red accent gradient from bottom-left */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/30 via-transparent to-transparent" />
      </div>

      {/* Decorative dot grid overlay */}
      <div className="absolute inset-0 hero-dot-grid pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Pre-heading tag */}
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
            <span className="w-8 h-0.5 bg-brand" aria-hidden="true" />
            <span className="text-brand text-sm font-semibold uppercase tracking-widest">
              Proffessionell Karosseri
            </span>
          </div>

          <h1 className="font-heading text-5xl lg:text-7xl xl:text-8xl text-white leading-tight mb-6 animate-fade-up">
            {HOME_HERO.h1}
          </h1>
          <p className="text-white/80 text-lg lg:text-xl mb-10 leading-relaxed max-w-xl animate-fade-up delay-100">
            {HOME_HERO.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up delay-200">
            <Button href="/boka" variant="primary" className="text-base px-7 py-4">
              <Calendar size={18} aria-hidden="true" />
              {HOME_HERO.ctaPrimary}
            </Button>
            <QuoteButton
              label={HOME_HERO.ctaSecondary}
              variant="secondary-dark"
              className="text-base px-7 py-4"
            />
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-up delay-300 pt-4 border-t border-white/10">
            {HOME_TRUST_BADGES.map((badge, i) => {
              const Icon = badgeIcons[i];
              return (
                <div key={badge.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-brand" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">
                      {badge.label}
                    </p>
                    <p className="text-white/60 text-xs">{badge.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
