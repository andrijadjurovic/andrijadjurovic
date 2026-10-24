"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              Building civic-tech with real public impact.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              I am a young developer and innovator from Montenegro building technology that connects software, public infrastructure, and sustainability. My work spans civic-tech systems, IoT and smart-city platforms, AI-powered monitoring, and digital solutions designed for real communities, not just prototypes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                My focus
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>✓ Civic technology and digital public infrastructure</li>
                <li>✓ Smart city systems and live IoT data</li>
                <li>✓ Environmental monitoring and sustainability</li>
                <li>✓ Applied AI, edge systems and computer vision</li>
                <li>✓ Mobile and cross-platform product development</li>
                <li>✓ Leadership in youth innovation and institutional collaboration</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                From prototypes to systems with reach
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                My projects have moved beyond academic experimentation into real-world systems: smart-city applications, public-facing mobile platforms, environmental monitoring, AI-assisted detection, and initiatives supported by institutions, mentors, and international youth networks.
              </p>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                Founder of EcoMont · Project Earth Student Ambassador
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
