import Link from "next/link";
import { Navigation, Footer } from "@/components";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navigation />
      <main className="flex-1 w-full flex items-center justify-center py-32">
        <div className="text-center space-y-6 max-w-md">
          <div className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            404
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
            Page not found
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
