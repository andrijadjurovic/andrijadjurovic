import { projects } from "@/data/projects";
import { siteConfig } from "@/data";

export async function GET() {
  const allRoutes = [
    `${siteConfig.url}/`,
    ...projects.map((project) => `${siteConfig.url}/projects/${project.id}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
        .map(
          (url) => `
      <url>
        <loc>${url}</loc>
      </url>
      `,
        )
        .join("")}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
