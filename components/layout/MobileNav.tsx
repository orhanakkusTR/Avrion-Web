"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional mount gate for portal hydration safety
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigeringsmeny"
      className={`fixed inset-0 z-[9999] bg-navy-950 flex flex-col transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <Image
          src="/avrion-logo.png"
          alt="Avrion Service"
          width={150}
          height={42}
          className="h-9 w-auto brightness-0 invert"
        />
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Stäng meny"
          className="p-2 text-white/70 hover:text-white focus-visible:ring-2 focus-visible:ring-white rounded-md"
        >
          <X size={22} aria-hidden="true" />
        </button>
      </div>

      <nav className="flex-1 px-6 py-8 space-y-1">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="block py-4 text-white/80 hover:text-white text-2xl font-bold border-b border-white/10 focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="px-6 py-8">
        <Link
          href="/boka"
          onClick={() => setOpen(false)}
          className="block w-full text-center bg-brand hover:bg-brand-600 text-white font-semibold py-4 rounded-xl transition-colors text-lg"
        >
          Boka tid
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Öppna meny"
        aria-expanded={open}
        className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white"
      >
        <Menu size={24} aria-hidden="true" />
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
