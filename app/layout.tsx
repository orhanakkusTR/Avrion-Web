import type { Metadata } from "next";
import { Roboto, Anta } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const anta = Anta({
  variable: "--font-anta",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Avrion Service AB — Lackering, Plåt & Polering i Mölndal",
    template: "%s | Avrion Service AB",
  },
  description:
    "Professionella tjänster inom lackering, plåt och polering. Kvalitet, noggrannhet och service du kan lita på. Boka tid idag.",
  metadataBase: new URL("https://avrionservice.se"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className={`${roboto.variable} ${anta.variable}`}>
      <body className="min-h-full flex flex-col antialiased bg-navy-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
