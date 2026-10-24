"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const CardContent = (
    <>
      {featured && (
        <div className="mb-6 h-48 bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              {project.title}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mt-2">
            {project.subtitle}
          </p>
        </div>

        {project.description && (
          <p className="text-slate-600 dark:text-slate-400 line-clamp-3">
            {project.description}
          </p>
        )}

        {/* Technology tags */}
        <div className="flex flex-wrap gap-2 pt-3">
          {project.technology.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technology.length > 3 && (
            <span className="text-xs px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full">
              +{project.technology.length - 3}
            </span>
          )}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex flex-col h-full">
        <Link href={`/projects/${project.id}`}>
          <div
            className={`rounded-xl overflow-hidden transition-all duration-300 cursor-pointer flex-1 ${
              featured
                ? "bg-slate-50 dark:bg-slate-800 p-8"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg hover:border-emerald-500/50"
            }`}
          >
            {CardContent}
          </div>
        </Link>

        {/* External links - Outside the Link to avoid nesting */}
        {!featured && (
          <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 rounded transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 bg-emerald-600 text-white hover:bg-emerald-700 rounded transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Website
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
