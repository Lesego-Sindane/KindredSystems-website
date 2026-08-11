import type { MetadataRoute } from "next";
import { getPublishedPosts } from "./blog/posts";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
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

  return [
    ...staticRoutes,
    ...posts.map((post) => ({
      url: `https://kindredsystems.co.za/blog/${post.slug}`,
      lastModified: new Date(post.publishDate ?? "2026-08-08"),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
