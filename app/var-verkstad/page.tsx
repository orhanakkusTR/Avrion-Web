import type { Metadata } from "next";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { KvalitetTeaser } from "@/components/home/KvalitetTeaser";
import { VerkstadTeaser } from "@/components/home/VerkstadTeaser";
import { OM_OSS_VERKSTAD } from "@/lib/content";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Vår verkstad – Avrion Service AB",
  description:
    "Modern karosseriverkstad i Mölndal med klimatstyrd lackbox, digital kulörmatchning och datoriserat riktningsbord.",
};

export default function VarVerkstadPage() {
  return (
    <>
      {/* Hero */}
      <PageHero title={OM_OSS_VERKSTAD.h2} subtitle={OM_OSS_VERKSTAD.text} />

      {/* Features — shared with home page */}
      <VerkstadTeaser />

      {/* Kvalitet teaser — shared with home page */}
      <KvalitetTeaser />

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
