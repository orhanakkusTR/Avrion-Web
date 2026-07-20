import type { MetadataRoute } from "next";

const BASE_URL = "https://avrionservice.se";

// Static last-modified date keeps this route statically cacheable (no request-time API).
const LAST_MODIFIED = "2026-06-16";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const ROUTES: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/tjanster", changeFrequency: "monthly", priority: 0.9 },
  { path: "/tjanster/lackering", changeFrequency: "monthly", priority: 0.8 },
  { path: "/tjanster/plat", changeFrequency: "monthly", priority: 0.8 },
  { path: "/tjanster/polering", changeFrequency: "monthly", priority: 0.8 },
  { path: "/tjanster/skadebesiktning", changeFrequency: "monthly", priority: 0.8 },
  { path: "/boka", changeFrequency: "monthly", priority: 0.7 },
  { path: "/kontakt", changeFrequency: "monthly", priority: 0.7 },
  { path: "/om-oss", changeFrequency: "yearly", priority: 0.6 },
  { path: "/referenser", changeFrequency: "monthly", priority: 0.6 },
  { path: "/integritetspolicy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/villkor", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }));
}
