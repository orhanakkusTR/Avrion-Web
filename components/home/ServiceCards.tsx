import Link from "next/link";
import Image from "next/image";
import { Paintbrush, Car, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HOME_SERVICE_CARDS } from "@/lib/content";

const icons = [Paintbrush, Car, Sparkles];

const cardImages = [
  "/professional_car_spray_painting_lackering_in_a_modern_auto_body_shop._a.png",
  "/plåt.png",
  "/polering.png",
];

export function ServiceCards() {
  return (
    <Section className="bg-navy-950">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOME_SERVICE_CARDS.map((card, i) => {
            const Icon = icons[i];
            const img = cardImages[i];
            return (
              <article
                key={card.title}
                className="rounded-3xl bg-navy-900 border border-white/10 shadow-lg hover:shadow-brand/10 hover:shadow-xl transition-all duration-300 overflow-hidden flex min-h-[260px] hover:-translate-y-1 hover:border-brand/30 group"
              >
                {/* Left: content */}
                <div className="flex flex-col p-5 w-[60%] flex-shrink-0">
                  {/* Icon + Title row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                      <Icon size={24} className="text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl text-white leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-white/60 text-base leading-relaxed mb-4 flex-1">
                    {card.text}
                  </p>

                  <Link
                    href={card.href}
                    className="text-brand font-bold text-sm hover:underline transition-colors focus-visible:ring-2 focus-visible:ring-brand rounded"
                    aria-label={`Läs mer om ${card.title}`}
                  >
                    {card.cta}
                  </Link>
                </div>

                {/* Right: image — dark fade from card bg into image */}
                {img && (
                  <div className="relative flex-1">
                    <Image
                      src={img}
                      alt={`${card.title} — Avrion Service`}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 42vw, 14vw"
                    />
                    <div
                      className="absolute inset-y-0 left-0 w-full"
                      style={{
                        background:
                          'linear-gradient(to right, #1f2e30 0%, rgba(31,46,48,0.85) 15%, rgba(31,46,48,0.3) 40%, transparent 60%)',
                      }}
                      aria-hidden="true"
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
