import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import { QuoteButton } from "@/components/contact/QuoteButton";
import type { SERVICES } from "@/lib/content";

type ServiceData = (typeof SERVICES)[number];

interface ServiceCardProps {
  service: ServiceData;
  /** Position in the services list — drives the stall number and row direction. */
  index: number;
}

const imageMap: Record<string, string> = {
  lackering: "/professional_car_spray_painting_lackering_in_a_modern_auto_body_shop._a.png",
  plat: "/plåt.png",
  polering: "/polering.png",
  skadebesiktning: "/skadebesiktning.png",
};

/**
 * Full-width "workshop station" row: image on one side, content on the
 * other, alternating per row. A large painted stall number overlaps the
 * image corner — the page's signature element.
 */
export function ServiceCard({ service, index }: ServiceCardProps) {
  const reverse = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      id={service.id}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {/* Image side with overlapping stall number */}
      <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          {imageMap[service.id] && (
            <Image
              src={imageMap[service.id]}
              alt={`${service.title} — Avrion Service`}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          )}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"
            aria-hidden="true"
          />
        </div>
        <span
          aria-hidden="true"
          className={`absolute -top-8 font-heading font-extrabold text-7xl lg:text-8xl text-brand select-none leading-none ${
            reverse ? "-right-2 lg:-right-5" : "-left-2 lg:-left-5"
          }`}
        >
          {num}
        </span>
      </div>

      {/* Content side */}
      <div className={reverse ? "lg:order-1" : ""}>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-0.5 bg-brand" aria-hidden="true" />
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">
            Tjänst {num}
          </span>
        </div>

        <h2 className="font-heading font-bold text-3xl text-slate-900 mb-3">
          {service.title}
        </h2>

        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl">{service.text}</p>

        {/* "Work order" panel — checklist as one contained spec sheet */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden mb-8 max-w-xl">
          <p className="font-semibold text-slate-900 text-sm px-5 py-3 border-b border-slate-200 bg-white">
            Detta ingår:
          </p>
          <ul className="divide-y divide-slate-200/70">
            {service.checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-slate-700 px-5 py-2.5"
              >
                <CheckCircle
                  size={15}
                  className="text-success mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href={`/tjanster/${service.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded"
          >
            Läs mer
            <ArrowRight size={15} aria-hidden="true" />
          </Link>

          <QuoteButton label="Få offert" variant="ghost" />
        </div>
      </div>
    </article>
  );
}
