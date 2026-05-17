import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://glevum.digital",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://glevum.digital/services",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://glevum.digital/who-am-i",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
