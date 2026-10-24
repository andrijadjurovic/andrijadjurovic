"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data";
import { motion } from "framer-motion";

export function HeroSection() {
  const impactStats = [
    { value: "Speaker", label: "@ The Royal Institution" },
    { value: "2nd", label: "Smart City Challenge" },
    { value: "Top 10", label: "global AI finalist" },
    { value: "WSIS", label: "Champion 2026" },
  ];

  return (
    <section className="relative w-full min-h-screen pt-20 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-100 dark:bg-cyan-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-50 tracking-tight"
              >
                Andrija
                <br />
                Đurović
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-emerald-600 dark:text-emerald-400">
                  Founder of EcoMont · Project Earth Student Ambassador
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Smart City · IoT · Civic Technology · Sustainability
                </p>
                <p className="max-w-xl text-base text-slate-500 dark:text-slate-400">
                  I build civic-tech, AI and IoT systems that turn innovation into real public impact across Montenegro and beyond.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm text-slate-500 dark:text-slate-400"
              >
                {siteConfig.location}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#projects"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
              >
                Explore My Work
              </Link>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-50 rounded-lg font-medium transition-colors"
              >
                View GitHub
              </a>
              <Link
                href="#contact"
                className="px-6 py-3 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-50 rounded-lg font-medium transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {impactStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 p-4 shadow-sm">
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center h-96"
          >
            <div className="relative w-64 h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image sizes="(max-width: 768px) 100vw, 50vw"
                src="/images/andrija_slika.jpg"
                alt="Andrija Đurović"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-sm text-slate-500 dark:text-slate-400 text-center">
            <p className="mb-2">Scroll to explore</p>
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
