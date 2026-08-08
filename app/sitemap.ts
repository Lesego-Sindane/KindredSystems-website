import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kindredsystems.co.za",
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://kindredsystems.co.za/blog",
      lastModified: new Date("2026-08-08"),
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];
}
