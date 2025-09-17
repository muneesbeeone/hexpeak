import { MetadataRoute } from "next";

export const dynamic = "force-static"; // ✅ important for next export

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hexpeak.munees.co.in",
      lastModified: new Date("2025-09-17"),
    },
    {
      url: "https://hexpeak.munees.co.in/about",
      lastModified: new Date("2025-09-17"),
    },
    {
      url: "https://hexpeak.munees.co.in/services",
      lastModified: new Date("2025-09-17"),
    },
    {
      url: "https://hexpeak.munees.co.in/contact",
      lastModified: new Date("2025-09-17"),
    },
    {
      url: "https://hexpeak.munees.co.in/projects",
      lastModified: new Date("2025-09-17"),
    },
  ];
}
