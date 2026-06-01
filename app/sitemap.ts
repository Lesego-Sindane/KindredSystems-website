import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kindredsystems.co.za",
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
