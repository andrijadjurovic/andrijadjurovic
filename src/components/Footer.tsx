"use client";

import Link from "next/link";
import { siteConfig } from "@/data";

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 dark:bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{siteConfig.name}</h3>
            <p className="text-sm text-slate-400">{siteConfig.title}</p>
            <p className="text-xs text-slate-500">{siteConfig.location}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Links</h4>
            <div className="space-y-2 text-sm">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-50 transition-colors"
              >
                LinkedIn
              </a>
              <br />
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-50 transition-colors"
              >
                GitHub
              </a>
              <br />
              <a
                href={siteConfig.projectEarth}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-50 transition-colors"
              >
                Project Earth
              </a>
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-slate-400 hover:text-slate-50 transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Info</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Web & Mobile Development</p>
              <p>Student at ETŠ "Vaso Aligrudić"</p>
              <p>Podgorica, Montenegro</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>
              <strong className="text-slate-50">Designed & developed by</strong>{" "}
              {siteConfig.name}
            </p>
            <p>© {siteConfig.year} {siteConfig.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
