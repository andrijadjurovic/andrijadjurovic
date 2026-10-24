import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andrijadjurovic.com"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Andrija Đurović",
    "Andrija Djurovic",
    "developer",
    "innovator",
    "Montenegro",
    "EcoMont",
    "CetiNET",
    "IoT",
    "civic technology",
    "Project Earth",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andrijadjurovic.com",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      {
        url: "https://andrijadjurovic.com/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["https://andrijadjurovic.com/og-image.png"],
    creator: "@andrijadjurovic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              alternateName: siteConfig.nameAlternate,
              url: "https://andrijadjurovic.com",
              jobTitle: siteConfig.title,
              birthPlace: {
                "@type": "Place",
                name: siteConfig.location,
              },
              homeLocation: {
                "@type": "Place",
                name: siteConfig.location,
              },
              email: `mailto:${siteConfig.email}`,
              sameAs: [
                siteConfig.github,
                siteConfig.linkedin,
                siteConfig.projectEarth,
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
