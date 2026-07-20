import { Hero } from "@/components/home/Hero";
import { ServiceCards } from "@/components/home/ServiceCards";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";

export default function HemPage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <BeforeAfter />
      <Process />
      <Testimonials />
    </>
  );
}
