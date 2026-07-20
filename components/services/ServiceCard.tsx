import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Paintbrush, Car, Sparkles, ClipboardCheck, ArrowRight } from "lucide-react";
import type { SERVICES } from "@/lib/content";

type ServiceData = (typeof SERVICES)[number];

interface ServiceCardProps {
  service: ServiceData;
}

const iconMap: Record<string, React.ElementType> = {
  lackering: Paintbrush,
  plat: Car,
  polering: Sparkles,
  skadebesiktning: ClipboardCheck,
};

const imageMap: Record<string, string> = {
  lackering: "/professional_car_spray_painting_lackering_in_a_modern_auto_body_shop._a.png",
  plat: "/plåt.png",
  polering: "/polering.png",
  skadebesiktning: "/skadebesiktning.png",
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.id] ?? Paintbrush;

  return (
    <article
      id={service.id}
      className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      {/* Service image with zoom on hover */}
      <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
        {imageMap[service.id] && (
          <Image
            src={imageMap[service.id]}
            alt={`${service.title} — Avrion Service`}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        {/* Dark gradient overlay at bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
            <Icon size={22} className="text-white" aria-hidden="true" />
          </div>
          <h2 className="font-heading font-bold text-xl text-slate-900">
            {service.title}
          </h2>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-5">{service.text}</p>

        <p className="font-semibold text-slate-900 text-sm mb-3">Detta ingår:</p>
        <ul className="space-y-2 mb-6">
          {service.checklist.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle
                size={15}
                className="text-success mt-0.5 shrink-0"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        <Link
          href={`/tjanster/${service.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded"
        >
          Läs mer
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
