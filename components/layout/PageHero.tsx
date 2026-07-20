import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  /** Optional CTA row rendered under the subtitle. */
  children?: React.ReactNode;
}

/**
 * Shared inner-page hero: dark background with the car photo fading in on
 * the right, and enough top padding to clear the fixed header.
 */
export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative bg-navy-900 overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-20">
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-1/2 hidden lg:block"
        aria-hidden="true"
      >
        <Image
          src="/hero-car.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/40 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/80 text-lg leading-relaxed">{subtitle}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
