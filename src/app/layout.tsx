import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"
// import CustomCursor from "./components/custom-cursor";
export const metadata: Metadata = {
  title: "Hexpeak - Premium Web Development Agency | Next.js, TypeScript, React",
  description:
    "Hexpeak is a professional web development agency providing custom web solutions for construction, healthcare, and startup companies. We specialize in Next.js, TypeScript, React, and responsive design.",
  keywords:
    "web development agency, nextjs, typescript, react, responsive design, construction website development, healthcare web development, startup website development, custom web solutions, web design, web development services, professional web development company",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {/* <CustomCursor /> */}
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
