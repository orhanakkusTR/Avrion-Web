import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { HOME_TESTIMONIALS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenser",
  description: "Se vad våra kunder säger om Avrion Service AB.",
};

export default function ReferenserPage() {
  return (
    <>
      <section className="bg-navy-900 border-t-2 border-white/20 pt-24 pb-14">
        <Container>
          <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-3">
            Referenser
          </h1>
          <p className="text-white/70 text-lg">Vad våra kunder säger om oss.</p>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
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
    </>
  );
}
