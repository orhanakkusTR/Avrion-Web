import { Calendar, Car, ClipboardCheck, KeyRound, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { HOME_PROCESS } from "@/lib/content";

const stepIcons = [Calendar, Car, ClipboardCheck, KeyRound];

export function Process() {
  return (
    <Section className="bg-navy-900 relative">
      {/* Decorative top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      
      <Container>
        <h2 className="font-heading text-3xl lg:text-4xl text-white text-center mb-16">
          {HOME_PROCESS.h2}
        </h2>

        <div className="relative">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-start w-full gap-8 sm:gap-0">
            {HOME_PROCESS.steps.map((step, i) => {
              const Icon = stepIcons[i];
              const isLast = i === HOME_PROCESS.steps.length - 1;
              return (
                <div key={step.n} className="flex items-start flex-1">
                  {/* Step block */}
                  <div className="flex flex-col items-center text-center flex-1 px-2 group">
                    {/* Icon with overlapping number badge */}
                    <div className="relative w-28 h-28 mb-5">
                      <div className="w-full h-full rounded-full border-2 border-white/20 bg-navy-950 flex items-center justify-center shadow-md transition-all duration-300 group-hover:border-brand/60 group-hover:shadow-brand/20 group-hover:shadow-lg">
                        <Icon size={48} className="text-brand transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                      </div>
                      <span className="absolute -top-1 -left-1 w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white font-bold text-base shadow-sm">
                        {step.n}
                      </span>
                    </div>
                    <h3 className="font-heading text-white text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>

                  {/* Arrow connector */}
                  {!isLast && (
                    <div
                      className="hidden sm:flex items-center mt-[46px] shrink-0 text-brand"
                      aria-hidden="true"
                    >
                      <ArrowRight size={26} strokeWidth={2.5} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
