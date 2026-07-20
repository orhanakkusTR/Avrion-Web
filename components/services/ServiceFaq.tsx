"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ServiceFaqProps {
  title: string;
  items: ReadonlyArray<{ q: string; a: string }>;
}

/**
 * Accordion FAQ for service sub-pages — same visual language as the
 * contact-page Faq (rounded bordered rows, tinted answer zone).
 */
export function ServiceFaq({ title, items }: ServiceFaqProps) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <div>
      <h2 className="font-heading font-bold text-3xl text-slate-900 text-center mb-10">
        {title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
        {items.map((item, i) => {
          const isOpen = open === i;
          const panelId = `sfaq-panel-${i}`;
          const btnId = `sfaq-btn-${i}`;

          return (
            <div
              key={item.q}
              className="rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                id={btnId}
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-slate-900 hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
              >
                {item.q}
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                hidden={!isOpen}
                className="px-5 py-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/60"
              >
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
