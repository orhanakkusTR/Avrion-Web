"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Phone, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { QuoteButton } from "@/components/contact/QuoteButton";
import { HOME_BEFORE_AFTER, CONTACT_INFO } from "@/lib/content";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  const onMouseDown = () => {
    dragging.current = true;
    const onMove = (e: MouseEvent) => { if (dragging.current) updatePos(e.clientX); };
    const onUp = () => { dragging.current = false; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    updatePos(e.touches[0].clientX);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
  };

  return (
    <Section className="bg-navy-900">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Slider */}
          <div>
            <div
              ref={sliderRef}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none bg-navy-950 border border-white/10 shadow-2xl shadow-navy-950/60"
              onMouseDown={onMouseDown}
              onTouchMove={onTouchMove}
              onTouchStart={(e) => updatePos(e.touches[0].clientX)}
              role="separator"
              aria-label="Jämförelsereglage — FÖRE och EFTER"
              aria-valuenow={Math.round(pos)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-orientation="horizontal"
              tabIndex={0}
              onKeyDown={onKeyDown}
            >
              {/* BEFORE panel — left half of image */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-[200%]">
                  <Image
                    src="/öncesonra.png"
                    alt="Före lackering"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 200vw, 100vw"
                    draggable={false}
                  />
                </div>
              </div>

              {/* AFTER panel — right half of image, clipped */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
                aria-hidden="true"
              >
                <div className="absolute top-0 bottom-0 right-0 w-[200%]">
                  <Image
                    src="/öncesonra.png"
                    alt="Efter lackering"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 200vw, 100vw"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Tags — fade out when the divider reaches their side */}
              <span
                className={`absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white/90 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full transition-opacity duration-200 ${
                  pos < 18 ? "opacity-0" : "opacity-100"
                }`}
              >
                {HOME_BEFORE_AFTER.tagBefore}
              </span>
              <span
                className={`absolute top-4 right-4 bg-brand/90 backdrop-blur-sm text-white text-xs font-bold tracking-widest px-3 py-1.5 rounded-full transition-opacity duration-200 ${
                  pos > 82 ? "opacity-0" : "opacity-100"
                }`}
              >
                {HOME_BEFORE_AFTER.tagAfter}
              </span>

              {/* Divider + arrow handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-lg shadow-navy-950/50"
                style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
                aria-hidden="true"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 bg-brand rounded-full border-2 border-white/90 shadow-lg shadow-navy-950/50 transition-transform duration-200 hover:scale-110">
                  <ChevronLeft size={18} className="text-white -mr-1" strokeWidth={2.5} />
                  <ChevronRight size={18} className="text-white -ml-1" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Copy + stats */}
          <div>
            {/* Handwritten accent above the heading */}
            <span
              className="inline-block font-script text-brand text-2xl -rotate-3 mb-1"
              aria-hidden="true"
            >
              En av Mölndals mest anlitade
            </span>
            <h2 className="font-heading text-3xl text-white mb-3">
              {HOME_BEFORE_AFTER.h2}
            </h2>
            <p className="text-white/65 leading-relaxed mb-8">
              {HOME_BEFORE_AFTER.text}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {HOME_BEFORE_AFTER.stats.map((stat) => (
                <div 
                  key={stat.label} 
                  className="text-center bg-navy-950/40 p-4 rounded-xl border border-white/5 hover:border-brand/40 hover:bg-navy-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10 group cursor-default"
                >
                  <p className="font-heading text-3xl text-brand transition-transform duration-300 group-hover:scale-110">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm mt-2 transition-colors duration-300 group-hover:text-white/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs — aligned with the stats grid above */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button
                href="/boka"
                variant="primary"
                className="w-full py-3.5 text-base font-semibold"
              >
                <CalendarDays size={18} aria-hidden="true" />
                {HOME_BEFORE_AFTER.ctaBook}
              </Button>
              <Button
                href={`tel:${CONTACT_INFO.phone.replace(/\s|–|-/g, "")}`}
                variant="secondary-dark"
                className="w-full py-3.5 text-base font-semibold border-white/20 bg-navy-950/40 hover:border-brand/40 hover:bg-navy-950"
              >
                <Phone size={18} aria-hidden="true" />
                {HOME_BEFORE_AFTER.ctaCall}
              </Button>
              <QuoteButton
                label={HOME_BEFORE_AFTER.ctaOffert}
                variant="secondary-dark"
                className="w-full py-3.5 text-base font-semibold border-white/20 bg-navy-950/40 hover:border-brand/40 hover:bg-navy-950"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
