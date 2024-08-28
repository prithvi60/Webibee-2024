import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Caveat,League_Gothic,Merriweather_Sans } from "next/font/google";
import FloatingButton from "@/components/FloatingButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { Partytown } from '@builder.io/partytown/react';


// Meta Data
export async function generateMetadata(): Promise<Metadata> {
  return {
  title: "Webibee",
  description: "We deliver industry leading design and technology software services",
  robots: "index, follow",
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
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `https://webibee.com`,
    title: "Webibee",
    description: "We deliver industry leading design and technology software services",
    siteName: "Webibee Agency",
    images: [
      {
        url: "https://ik.imagekit.io/webibee/Agency/brain-logo.svg",
      },
    ],
  },     
}
};

const gothic = League_Gothic({
  subsets: ["latin"],
  variable: "--font-gothic",
  // weight: "600",
});

const merri = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merri",
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
      className={`${merri.variable} ${gothic.variable} ${caveat.variable}`}
    >
      <Head>
           {/* Add Microsoft Clarity script with Partytown */}
             <Partytown debug={true} forward={['dataLayer.push']} />
             <script
  type="text/partytown"
  dangerouslySetInnerHTML={{
    __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)
      })(window, document, "clarity", "script", "nubuveu1h7");
    `,
  }}
/>
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
