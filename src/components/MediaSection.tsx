"use client";

import { motion } from "framer-motion";
import { mediaAppearances } from "@/data/experience";

export function MediaSection() {
  return (
    <section id="media" className="w-full py-20 bg-slate-50 dark:bg-slate-900">
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
              Featured in Media
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Press coverage and podcast appearances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaAppearances.map((appearance, index) => (
              <motion.div
                key={appearance.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex h-full flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    {appearance.title}
                  </h3>
                  {appearance.status === "coming-soon" && (
                    <span className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded font-medium whitespace-nowrap">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                  {appearance.organization}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                  {appearance.topic}
                </p>
                {appearance.date && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                    {appearance.date}
                  </p>
                )}
                {appearance.link && (
                  <a
                    href={appearance.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    {appearance.linkLabel ?? "View coverage"}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
