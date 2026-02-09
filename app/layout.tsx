import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import {
  Footer,
  Navbar,
  SuccessModal,
  VendorModal,
  WaitlistModal,
} from "@/components";
import { ContextProvider } from "@/contexts/contextprovider";
import Head from "next/head";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sfpro = localFont({
  src: [
    {
      path: "./fonts/SF Pro Rounded/SF-Pro-Rounded-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro Rounded/SF-Pro-Rounded-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro Rounded/SF-Pro-Rounded-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro Rounded/SF-Pro-Rounded-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro Rounded/SF-Pro-Rounded-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro Rounded/SF-Pro-Rounded-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro Rounded/SF-Pro-Rounded-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro Rounded/SF-Pro-Rounded-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    // Add more weights/styles as needed
  ],
  variable: "--font-sfpro",
});

export const metadata: Metadata = {
  title: "ESCARDIA",
  description:
    "From elite vehicles to trusted escorts, redefine your travel with security and class in one move.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="LM4XZ7o6fPYvqBs5rwqaM6_CZIP-py-ppyfTgt1P2fk"
        />
        <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <ContextProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${sfpro.variable} antialiased max-w-[1800px] mx-auto overflow-x-hidden`}
        >
          <Navbar />
          <main className="mx-[8%] max-md:mx-[5%] max-sm:mx-[3%] font-sfpro min-h-[75vh]">
            {children}
          </main>
          <Footer />
          <VendorModal />
          <WaitlistModal />
          <SuccessModal />
        </body>
      </ContextProvider>
    </html>
  );
  <div id="test"></div>;
}
