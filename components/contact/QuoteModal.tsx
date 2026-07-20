"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { InquiryForm } from "./InquiryForm";
import { CONTACT_PAGE } from "@/lib/content";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  /** Heading shown at the top of the dialog. */
  title?: string;
}

export function QuoteModal({ open, onClose, title = "Få offert" }: QuoteModalProps) {
  // Render the portal only after mount so server and client first render match.
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional mount gate for portal hydration safety
    setMounted(true);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Move focus into the dialog when it opens
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Centering wrapper — bottom sheet on mobile, centered card on desktop */}
      <div className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-center sm:p-4 pointer-events-none">
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
          tabIndex={-1}
          inert={!open}
          className={`pointer-events-auto w-full sm:max-w-lg max-h-[92vh] sm:max-h-[90vh] flex flex-col bg-white shadow-2xl rounded-t-2xl sm:rounded-2xl transition-all duration-300 ease-out focus:outline-none ${
            open
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0 sm:translate-y-4"
          }`}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-slate-100">
            <div>
              <h2
                id="quote-modal-title"
                className="font-heading text-2xl text-slate-900"
              >
                {title}
              </h2>
              <p className="mt-1 text-sm text-slate-600">{CONTACT_PAGE.formIntro}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Stäng formulär"
              className="shrink-0 p-1.5 -mr-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-brand"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          {/* Scrollable form body */}
          <div className="px-6 py-6 overflow-y-auto">
            <InquiryForm />
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}
