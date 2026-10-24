import { projects } from "@/data/projects";

export async function GET() {
  const baseUrl = "https://andrijadjurovic.com";

  const routes = [
    "",
    "/projects",
  ];

  const projectRoutes = projects.map((project) => `/projects/${project.id}`);

  const allRoutes = [...routes, ...projectRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
        .map((route) => {
          return `
      <url>
        <loc>${baseUrl}${route}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${route === "" ? "1.0" : "0.8"}</priority>
      </url>
      `;
        })
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
