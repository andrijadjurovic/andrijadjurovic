"use client";

import { motion } from "framer-motion";
import { awards } from "@/data/experience";

export function AwardsSection() {
  return (
    <section id="recognition" className="w-full py-20 bg-white dark:bg-slate-950">
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
              Recognition & Awards
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Achievements and recognition from international and national programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-emerald-500/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                  {award.title}
                </h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                  {award.organization}
                </p>
                {award.category && (
                  <p className="text-slate-600 dark:text-slate-300 mt-2">
                    {award.category}
                  </p>
                )}
                {award.year && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                    {award.year}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
