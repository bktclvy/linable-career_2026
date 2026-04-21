import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://linable-career.co.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.9 },
    { path: "/csd", priority: 0.9 },
    { path: "/kit", priority: 0.9 },
    { path: "/kit/mfg", priority: 0.8 },
    { path: "/kit/welfare", priority: 0.8 },
    { path: "/jig", priority: 0.9 },
    { path: "/chiiki", priority: 0.9 },
    { path: "/cases", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/downloads", priority: 0.5 },
    { path: "/privacy", priority: 0.3 },
  ];

  const now = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
