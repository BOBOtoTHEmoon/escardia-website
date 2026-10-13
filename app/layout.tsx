import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Motion from "@/components/site/Motion";
import { SITE } from "@/lib/site";

// Poppins is self-hosted (SIL Open Font License), so builds never depend on Google Fonts.
const poppins = localFont({
  variable: "--font-poppins",
  display: "swap",
  src: [
    { path: "./fonts/poppins/Poppins-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/poppins/Poppins-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/poppins/Poppins-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/poppins/Poppins-700.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: ["luxury car rental Lagos", "car hire with driver Lagos", "chauffeur Lagos", "security escort Lagos", "Escardia"],
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    site: "@escardiaco",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
  },
  verification: {
    google: "LM4XZ7o6fPYvqBs5rwqaM6_CZIP-py-ppyfTgt1P2fk",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1530",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#0B1530]"
        >
          Skip to content
        </a>
        <Motion>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </Motion>
      </body>
    </html>
  );
}
