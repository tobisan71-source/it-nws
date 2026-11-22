import type { MetadataRoute } from "next";
import { SEO_PAGES } from "@/lib/seo-pages";
import { SITE_URL } from "@/lib/site";

/** Statische öffentliche Seiten (ohne Local-SEO-Slugs). */
const STATIC_PATHS = [
  "/",
  "/leistungen",
  "/leistungen/backup-wiederherstellung",
  "/leistungen/cyber-security",
  "/leistungen/hardware",
  "/leistungen/it-support",
  "/leistungen/microsoft-365",
  "/leistungen/remote-support",
  "/kmu",
  "/privatkunden",
  "/kontakt",
  "/datenschutz",
  "/impressum",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/leistungen") ? 0.8 : 0.7,
  }));

  const localEntries: MetadataRoute.Sitemap = SEO_PAGES.map((page) => ({
    url: `${SITE_URL}/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...localEntries];
}
