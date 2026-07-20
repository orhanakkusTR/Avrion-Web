import type { Metadata } from "next";
import { Star, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { HOME_TESTIMONIALS } from "@/lib/content";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Referenser",
  description: "Se vad våra kunder säger om Avrion Service AB.",
};

export default function ReferenserPage() {
  return (
    <>
      <PageHero title="Referenser" subtitle="Vad våra kunder säger om oss." />

      <Section className="bg-white">
        <Container>
          {/* Page-under-update notice */}
          <div
            role="status"
            className="flex items-start gap-3 bg-highlight/10 border border-highlight/30 rounded-xl px-5 py-4 mb-10 max-w-3xl"
          >
            <Info size={18} className="text-highlight mt-0.5 shrink-0" aria-hidden="true" />
            <p className="text-slate-700 text-sm leading-relaxed">
              Sidan uppdateras just nu – nya referenser och bilder publiceras löpande.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {HOME_TESTIMONIALS.reviews.map((review) => (
              <article
                key={review.author}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <div className="flex gap-0.5 mb-3" aria-label="5 av 5 stjärnor">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-star text-star"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <footer className="flex items-center justify-between">
                    <cite className="not-italic font-semibold text-slate-900 text-sm">
                      {review.author}
                    </cite>
                    <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {review.source}
                    </span>
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>

          {/* Placeholder for before/after gallery */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center">
            <p className="text-slate-400 italic text-sm">
              {/* TODO: client photos — before/after gallery */}
              Galleri med bilder levereras av kunden.
            </p>
          </div>
        </Container>
      </Section>

      {/* Shared CTA banner */}
      <CtaBanner />
    </>
  );
}
