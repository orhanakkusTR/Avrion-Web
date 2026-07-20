import type { Metadata } from "next";
import { ShieldCheck, Clock, CheckCircle, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { BOOKING_PAGE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Boka tid",
  description: "Fyll i formuläret så återkommer vi snarast för att bekräfta din bokning.",
};

const whyIcons = [ShieldCheck, CheckCircle, Clock, Users];

export default function BokaPage() {
  return (
    <>
      <section className="bg-navy-900 border-t-2 border-white/20 pt-24 pb-14">
        <Container>
          <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-3">
            {BOOKING_PAGE.h1}
          </h1>
          <p className="text-white/70 text-lg">{BOOKING_PAGE.subtitle}</p>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <InquiryForm submitLabel={BOOKING_PAGE.submitLabel} />
            </div>

            {/* Why us */}
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-xl text-slate-900 mb-5">
                Varför välja oss?
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {BOOKING_PAGE.whyUs.map((item, i) => {
                  const Icon = whyIcons[i] ?? ShieldCheck;
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 p-4 flex flex-col gap-2"
                    >
                      <div className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center">
                        <Icon size={18} className="text-white" aria-hidden="true" />
                      </div>
                      <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                      <p className="text-slate-500 text-xs">{item.sub}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
