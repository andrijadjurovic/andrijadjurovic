"use client";

import { motion } from "framer-motion";
import { internationalConnections } from "@/data";

export function InternationalSection() {
  return (
    <section className="w-full py-20 bg-white dark:bg-slate-950">
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
              International Perspective
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Connected with international organizations, programs, and initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internationalConnections.map((connection, index) => (
              <motion.div
                key={connection.organization}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">
                    {connection.organization.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-50">
                    {connection.organization}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {connection.involvement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm connected with organizations working on innovation, sustainability, and youth development. These connections reflect my involvement in international youth innovation programs, research initiatives, and projects aligned with UN/ITU sustainable development goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
