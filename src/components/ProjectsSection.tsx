"use client";

import { motion } from "framer-motion";
import { projects, featuredProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="w-full py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Work spanning civic technology, IoT systems, and sustainability solutions
          </p>
        </motion.div>

        {/* Featured Projects - Large cards */}
        <div className="space-y-6 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={project.id}>
              <ProjectCard project={project} featured={true} />
              {index < featuredProjects.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent my-12"
                />
              )}
            </div>
          ))}
        </div>

        {/* Other Projects - Grid */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8"
            >
              Other Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
