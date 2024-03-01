import type { Metadata } from "next";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Caveat, Lato, Montserrat } from "next/font/google";
import FloatingButton from "@/components/FloatingButton";
export const metadata: Metadata = {
  title: "Webibee",
  description: "Webibee crafts stunning websites that help businesses flourish.",
  robots: "",
  applicationName: "Webibee Web Development Agency",
  authors: [{ name: "Prithvi" }],
  generator: "Next.js",
  keywords: [
    "Webibee",
    "Agency",
    "code",
    "web development",
    "javascript",
    "react",
    "node.js",
    "next.js",
    "Shopify",
    "html",
    "css",
    "Figma",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Prithvi, Gokul Gandhi",
  publisher: "Webibee Web Development Agency",
  metadataBase: new URL("https://webibee.com/"),
  alternates: {
    canonical: "/blog/post",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "600",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "400",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: "500",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${montserrat.variable} ${caveat.variable}`}
    >
      <Head>
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
      </Head>
      <body>
        <Providers>
          <NavBar />
          <main className="relative overflow-hidden">{children}</main>
          <FloatingButton />
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-4ES4NTQ7T8" />
    </html>
  );
}
