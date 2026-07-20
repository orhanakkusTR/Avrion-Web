import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TackRedirect } from "./TackRedirect";

export const metadata: Metadata = {
  title: "Tack för din förfrågan",
  robots: { index: false },
};

export default function TackPage() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-950">
      <Container>
        <div className="max-w-xl mx-auto text-center py-24">
          <div className="mx-auto w-20 h-20 rounded-full bg-success/15 border border-success/40 flex items-center justify-center mb-8">
            <CheckCircle size={40} className="text-success" aria-hidden="true" />
          </div>

          <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4">
            Tack för din förfrågan!
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Vi har tagit emot ditt meddelande och återkommer så snart som
            möjligt – oftast samma arbetsdag.
          </p>

          <div className="mb-10">
            <TackRedirect />
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Till startsidan
          </Link>
        </div>
      </Container>
    </section>
  );
}
