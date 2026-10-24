"use client";

import { motion } from "framer-motion";

const recognitionItems = [
  { label: "Project Earth", subtitle: "Student Ambassador" },
  { label: "WSIS 2026", subtitle: "Champion Project" },
  { label: "Smart City Challenge", subtitle: "National Runner-Up" },
  { label: "USAII", subtitle: "Global Top 10 Finalist" },
  { label: "The Royal Institution", subtitle: "Speaker · Pitch for the Planet" },
];

export function RecognitionStrip() {
  return (
    <section className="w-full py-12 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {recognitionItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                {item.label}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
