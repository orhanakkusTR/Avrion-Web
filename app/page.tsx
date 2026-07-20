import { Hero } from "@/components/home/Hero";
import { ServiceCards } from "@/components/home/ServiceCards";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { KvalitetTeaser } from "@/components/home/KvalitetTeaser";
import { VerkstadTeaser } from "@/components/home/VerkstadTeaser";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";

export default function HemPage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <BeforeAfter />
      <KvalitetTeaser />
      <VerkstadTeaser />
      <Process />
      <Testimonials />
    </>
  );
}
