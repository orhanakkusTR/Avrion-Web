"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuoteModal } from "./QuoteModal";

interface QuoteButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "secondary-dark" | "ghost";
  className?: string;
}

/**
 * Opens the "Få offert" inquiry form in a responsive modal instead of
 * navigating to the contact page. Reusable across hero / service CTAs.
 */
export function QuoteButton({ label, variant = "secondary-dark", className }: QuoteButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        className={className}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <FileText size={variant === "ghost" ? 15 : 18} aria-hidden="true" />
        {label}
      </Button>

      <QuoteModal open={open} onClose={() => setOpen(false)} title={label} />
    </>
  );
}
