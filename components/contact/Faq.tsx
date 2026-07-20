"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CONTACT_PAGE } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <div>
      <h2 className="font-heading font-bold text-2xl text-slate-900 mb-6">
        {CONTACT_PAGE.faqTitle}
      </h2>

      <div className="space-y-2">
        {CONTACT_PAGE.faq.map((item, i) => {
          const isOpen = open === i;
          const panelId = `faq-panel-${i}`;
          const btnId = `faq-btn-${i}`;

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
                className="px-5 pb-4 text-sm text-slate-600 leading-relaxed"
              >
                {item.a ?? (
                  <span className="italic text-slate-400">
                    {/* TODO: client copy */}
                    Svar kommer snart.
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
