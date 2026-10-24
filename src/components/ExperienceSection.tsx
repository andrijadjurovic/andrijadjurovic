"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Experience & Programs
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Education, internships, and participation in programs and initiatives
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-600 via-emerald-600 to-transparent hidden md:block"></div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="md:pl-12 relative"
                >
                  {/* Timeline dot - hidden on mobile */}
                  <div className="absolute -left-2.5 top-2 w-5 h-5 bg-emerald-600 rounded-full border-4 border-white dark:border-slate-950 hidden md:block"></div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                          {item.title}
                        </h3>
                        <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                          {item.organization}
                        </p>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        {item.period}
                      </p>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mt-2">
                      {item.role}
                    </p>
                    {item.description && (
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
