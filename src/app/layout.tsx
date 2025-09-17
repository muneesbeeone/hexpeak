import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hexpeak - Premium Web Development Agency | Next.js, TypeScript, React",
  description:
    "Hexpeak is a professional web development agency providing custom web solutions for construction, healthcare, and startup companies. We specialize in Next.js, TypeScript, React, and responsive design.",
  keywords:
    "web development agency, nextjs, typescript, react, responsive design, construction website development, healthcare web development, startup website development, custom web solutions, web design, web development services, professional web development company",

  alternates: {
    canonical: "https://hexpeak.munees.co.in",
  },

  openGraph: {
    title: "Hexpeak - Premium Web Development Agency",
    description:
      "We craft premium websites using Next.js, TypeScript & React. Serving construction, healthcare, and startups.",
    url: "https://hexpeak.munees.co.in",
    siteName: "Hexpeak",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    site: "@hexpeak", // update/remove if no Twitter
    title: "Hexpeak - Premium Web Development Agency",
    description:
      "Custom web solutions with Next.js, React & TypeScript for startups, construction & healthcare businesses.",
  },

  icons: {
    icon: "./favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hexpeak",
              url: "https://hexpeak.munees.co.in",
              logo: "https://hexpeak.munees.co.in/favicon.ico", // can update later
              description:
                "Hexpeak is a premium web development agency specializing in Next.js, TypeScript, React, and custom web solutions for construction, healthcare, and startups.",
              sameAs: [
                "https://www.linkedin.com/company/hexpeak", // add if you have socials
                "https://twitter.com/hexpeak",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9645732562", // optional
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: "en",
              },
            }),
          }}
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
