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
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
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
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/andrija_slika.jpg",
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/images/andrija_slika.jpg"],
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
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
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
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${siteConfig.url}/#website`,
                  url: `${siteConfig.url}/`,
                  name: `${siteConfig.name} — Portfolio`,
                  inLanguage: "en",
                },
                {
                  "@type": "ProfilePage",
                  "@id": `${siteConfig.url}/#profilepage`,
                  url: `${siteConfig.url}/`,
                  name: `${siteConfig.name} — ${siteConfig.title}`,
                  isPartOf: { "@id": `${siteConfig.url}/#website` },
                  mainEntity: { "@id": `${siteConfig.url}/#person` },
                },
                {
                  "@type": "Person",
                  "@id": `${siteConfig.url}/#person`,
                  name: siteConfig.name,
                  alternateName: [siteConfig.nameAlternate, "Andrija Đurovic"],
                  url: `${siteConfig.url}/`,
                  image: `${siteConfig.url}/images/andrija_slika.jpg`,
                  description: siteConfig.description,
                  jobTitle: siteConfig.title,
                  homeLocation: {
                    "@type": "Place",
                    name: siteConfig.location,
                  },
                  affiliation: {
                    "@type": "EducationalOrganization",
                    name: "ETŠ Vaso Aligrudić",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Podgorica",
                      addressCountry: "ME",
                    },
                  },
                  email: siteConfig.email,
                  knowsAbout: [
                    "Software development",
                    "Civic technology",
                    "Artificial intelligence",
                    "Internet of Things",
                    "Environmental technology",
                    "Mobile application development",
                  ],
                  sameAs: [
                    siteConfig.github,
                    siteConfig.linkedin,
                    siteConfig.projectEarth,
                  ],
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
