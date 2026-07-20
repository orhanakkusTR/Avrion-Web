"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO, BRAND_NAME } from "@/lib/content";

interface ContactDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function ContactDrawer({ open, onClose }: ContactDrawerProps) {
  // Render the portal only after mount so server and client first render match.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional mount gate for portal hydration safety
    setMounted(true);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  const drawer = (
    <>
      {/* Dark overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sliding panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="İletişim bilgileri"
        className={`fixed top-0 left-0 h-full w-80 z-[9999] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <Link
            href="/"
            onClick={onClose}
            className="rounded focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Avrion Service — till startsidan"
          >
            <Image
              src="/avrion-logo.png"
              alt="Avrion Service"
              width={150}
              height={42}
              className="h-9 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Stäng iletişim paneli"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Contact info */}
        <div className="flex-1 px-6 py-8 overflow-y-auto">
          <h2 className="font-heading text-xl text-slate-900 mb-8">
            İletişim Bilgileri
          </h2>

          <ul className="space-y-8">
            {/* Phone */}
            <li className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-brand/30 flex items-center justify-center">
                <Phone size={22} className="text-brand" aria-hidden="true" />
              </div>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s|–|-/g, "")}`}
                className="text-slate-700 font-medium hover:text-brand transition-colors text-base"
              >
                {CONTACT_INFO.phone}
              </a>
            </li>

            {/* Email */}
            <li className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-brand/30 flex items-center justify-center">
                <Mail size={22} className="text-brand" aria-hidden="true" />
              </div>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-slate-700 font-medium hover:text-brand transition-colors text-base break-all"
              >
                {CONTACT_INFO.email}
              </a>
            </li>

            {/* Address */}
            <li className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-brand/30 flex items-center justify-center">
                <MapPin size={22} className="text-brand" aria-hidden="true" />
              </div>
              <address className="not-italic text-slate-700 text-base">
                {BRAND_NAME}<br />
                {CONTACT_INFO.address}
              </address>
            </li>
          </ul>

          {/* Social icons */}
          <div className="mt-10 pt-8 border-t border-slate-100">
            <div className="flex items-center justify-center gap-3">
              {[
                {
                  label: "Facebook", href: "#",
                  svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                },
                {
                  label: "Instagram", href: "#",
                  svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
                },
                {
                  label: "YouTube", href: "#",
                  svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>,
                },
              ].map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-brand/40 rounded text-brand hover:bg-brand hover:text-white transition-colors flex items-center justify-center"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100">
          <p className="text-center text-xs text-slate-400">
            © {new Date().getFullYear()} {BRAND_NAME}. Alla rättigheter förbehållna.
          </p>
        </div>
      </aside>
    </>
  );

  return createPortal(drawer, document.body);
}
