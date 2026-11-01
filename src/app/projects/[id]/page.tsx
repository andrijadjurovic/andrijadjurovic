import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data";
import { Navigation, Footer } from "@/components";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return { title: "Project not found" };
  }

  const canonical = `/projects/${project.id}`;

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${canonical}`,
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const unwrappedParams = await params;
  const project = projects.find((p) => p.id === unwrappedParams.id);

  if (!project) {
    notFound();
  }

  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteConfig.url}/projects/${project.id}#project`,
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/projects/${project.id}`,
    creator: { "@id": `${siteConfig.url}/#person` },
    keywords: [...project.category, ...project.technology],
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navigation />
      <main className="flex-1 w-full pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(projectStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        {/* Hero */}
        <section className="w-full py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-sm font-medium mb-6"
            >
              <span>←</span> Back to Projects
            </Link>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-50">
                {project.title}
              </h1>
              <p className="text-2xl text-slate-600 dark:text-slate-300">
                {project.subtitle}
              </p>
              {project.year && (
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {project.year}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="w-full py-12 bg-white dark:bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Overview
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem */}
            {project.problem && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  The Problem
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  The Solution
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {/* Technology */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Technology
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technology.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            {project.impact && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  Impact & Recognition
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            )}

            {/* Links */}
            {Object.values(project.links).some((link) => link) && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  Resources
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 rounded-lg font-medium transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg font-medium transition-colors"
                    >
                      Website
                    </a>
                  )}
                  {project.links.googlePlay && (
                    <a
                      href={project.links.googlePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg font-medium transition-colors"
                    >
                      Google Play
                    </a>
                  )}
                  {project.links.devpost && (
                    <a
                      href={project.links.devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg font-medium transition-colors"
                    >
                      Devpost
                    </a>
                  )}
                  {project.links.external && (
                    <a
                      href={project.links.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg font-medium transition-colors"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </div>
            )}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="w-full py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((otherProject) => (
                  <Link
                    key={otherProject.id}
                    href={`/projects/${otherProject.id}`}
                    className="group bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-emerald-500/50 transition-all"
                  >
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                      {otherProject.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {otherProject.subtitle}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
