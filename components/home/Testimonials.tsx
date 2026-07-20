"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { HOME_TESTIMONIALS } from "@/lib/content";

type Source = "Google" | "Facebook";
type Review = { text: string; author: string; source: Source; time: string };

// Placeholder "time ago" labels for the content.ts reviews (no date stored there).
// TODO: client copy — replace with real review dates.
const CONTENT_TIMES = ["2 veckor sedan", "1 månad sedan", "3 veckor sedan"];

const contentReviews: Review[] = HOME_TESTIMONIALS.reviews.map((r, i) => ({
  text: r.text,
  author: r.author,
  source: "Google",
  time: CONTENT_TIMES[i] ?? "nyligen",
}));

// TODO: client copy — placeholder reviews, replace with real Google/Facebook omdömen.
const extraReviews: Review[] = [
  { text: "Snabb och professionell service. Bilen ser ut som ny – kunde inte vara nöjdare!", author: "Anna S.", source: "Google", time: "5 dagar sedan" },
  { text: "Mycket noggrant plåtarbete och priset var rimligt. Kommer definitivt tillbaka.", author: "Erik B.", source: "Facebook", time: "2 månader sedan" },
  { text: "Bästa lackering jag sett. Personalen är vänlig och håller vad de lovar.", author: "Lisa M.", source: "Google", time: "1 vecka sedan" },
  { text: "Fantastiskt resultat på lackeringen, perfekt kulörmatch. Rekommenderar varmt!", author: "Peter H.", source: "Google", time: "3 månader sedan" },
];

// TODO: client copy — placeholder reviews for the second (reverse) row.
const extraReviews2: Review[] = [
  { text: "Bemötandet var förstklassigt och de förklarade hela processen tydligt. Mycket nöjd!", author: "Karin T.", source: "Google", time: "6 dagar sedan" },
  { text: "Lämnade in bilen efter en parkeringsskada – som ny när jag hämtade den. Tack!", author: "Oskar N.", source: "Facebook", time: "3 veckor sedan" },
  { text: "Snabb offert och ärlig prissättning. Inga överraskningar på fakturan.", author: "Emelie R.", source: "Google", time: "1 månad sedan" },
  { text: "Proffsigt utfört arbete från början till slut. Bilen blev helt återställd.", author: "Daniel W.", source: "Google", time: "2 dagar sedan" },
  { text: "Bästa lackeringsverkstaden i Mölndal. Noggranna och pålitliga.", author: "Sofia A.", source: "Facebook", time: "5 veckor sedan" },
  { text: "Hjälpte mig direkt med försäkringsärendet och allt pappersarbete. Smidigt!", author: "Henrik P.", source: "Google", time: "10 dagar sedan" },
  { text: "Otroligt fint resultat på poleringen, lacken ser djup och blank ut.", author: "Camilla G.", source: "Google", time: "4 månader sedan" },
];

// Row 1 scrolls right → left, row 2 scrolls left → right.
const rowOne = [...contentReviews, ...extraReviews];
const rowTwo = extraReviews2;

// Duplicate each row so the marquee loops seamlessly.
const rowOneLoop = [...rowOne, ...rowOne];
const rowTwoLoop = [...rowTwo, ...rowTwo];

// Soft avatar colors, cycled by index (like the reference initials chips).
const AVATAR_COLORS = [
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-purple-100 text-purple-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-teal-100 text-teal-700",
];

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

/** Multi-color Google wordmark. */
function GoogleWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-label="Google"
      className={`font-semibold tracking-tight leading-none select-none ${className}`}
    >
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

/** Facebook circle "f" logo. */
function FacebookLogo({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Facebook" role="img">
      <path
        fill="#1877F2"
        d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z"
      />
    </svg>
  );
}

function RatingStars() {
  return (
    <div className="flex gap-0.5" aria-label="5 av 5 stjärnor">
      {Array.from({ length: 5 }).map((_, j) => (
        <Star key={j} size={16} className="fill-star text-star" aria-hidden="true" />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];
  return (
    <article className="w-80 flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
      {/* Stars + platform logo */}
      <div className="flex items-center justify-between mb-4">
        <RatingStars />
        {review.source === "Google" ? (
          <GoogleWordmark className="text-base" />
        ) : (
          <FacebookLogo size={22} />
        )}
      </div>

      {/* Quote */}
      <blockquote className="flex-1">
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          &ldquo;{review.text}&rdquo;
        </p>
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold uppercase ${color}`}
        >
          {initials(review.author)}
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-slate-900">{review.author}</p>
          <p className="text-xs text-slate-500">{review.time}</p>
        </div>
      </footer>
    </article>
  );
}

// TODO: client copy — confirm real review counts and profile URLs.
const REVIEW_STATS = [
  { platform: "Google" as Source, count: "354+ omdömen", href: "#" },
  { platform: "Facebook" as Source, count: "134+ omdömen", href: "#" },
];

export function Testimonials() {
  return (
    <Section className="bg-navy-950">
      <Container>
        <h2 className="font-heading text-3xl text-white text-center mb-10">
          {HOME_TESTIMONIALS.h2}
        </h2>
      </Container>

      {/* Row 1 — scrolls right → left */}
      <div className="overflow-hidden mb-5 mask-fade-x">
        <div className="animate-marquee flex gap-5 py-2" style={{ width: "max-content" }}>
          {rowOneLoop.map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} index={i} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls left → right */}
      <div className="overflow-hidden mb-10 mask-fade-x">
        <div className="animate-marquee-reverse flex gap-5 py-2" style={{ width: "max-content" }}>
          {rowTwoLoop.map((review, i) => (
            <ReviewCard key={`r2-${i}`} review={review} index={i + 3} />
          ))}
        </div>
      </div>

      {/* Platform summary pills */}
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {REVIEW_STATS.map(({ platform, count, href }) => (
            <Link
              key={platform}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${platform} – ${count} (öppnas i nytt fönster)`}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              {platform === "Google" ? (
                <GoogleWordmark className="text-base" />
              ) : (
                <FacebookLogo size={20} />
              )}
              <span className="text-sm text-slate-600 font-medium">{count}</span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
