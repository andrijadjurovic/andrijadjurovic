"use client";

import { motion } from "framer-motion";

export function BeyondTechnologySection() {
  return (
    <section className="w-full py-20 bg-slate-50 dark:bg-slate-900">
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
              Beyond Technology
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                  Policy, leadership & civic impact
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  I see technology as a public tool. My work beyond engineering is grounded in youth leadership, civic participation, and the idea that innovation should serve communities, institutions, and long-term societal change.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  Where I contribute
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span>Youth policy and digital public infrastructure</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span>Environmental action and civic-tech innovation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span>Institutional partnerships and public engagement</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span>Mentorship, ecosystem building and youth participation</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="relative h-full bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col lg:-top-25 lg:h-[calc(100%+6.25rem)]">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
                  Sports & discipline
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  I have been competing in table tennis at the national level since childhood. It has shaped my discipline, resilience, and ability to stay focused under pressure—qualities that directly support my work in software, research and team projects.
                </p>
                <div className="flex-1 min-h-24 mt-6 flex items-center justify-center text-6xl">
                  🏓
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
