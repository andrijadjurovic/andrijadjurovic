"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data";

export function ContactSection() {
  const contacts = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      label: "LinkedIn",
      value: "andrijadjurovic",
      href: siteConfig.linkedin,
    },
    {
      label: "GitHub",
      value: "andrijadjurovic",
      href: siteConfig.github,
    },
    {
      label: "Project Earth",
      value: "Student Ambassador",
      href: siteConfig.projectEarth,
    },
  ];

  return (
    <section id="contact" className="w-full py-20 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50">
              Let's build something meaningful.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              I'm interested in technology, sustainability, civic innovation, research and ambitious collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel={contact.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-emerald-500/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all text-center"
              >
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                  {contact.label}
                </p>
                <p className="text-lg font-medium text-slate-900 dark:text-slate-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors break-all">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
