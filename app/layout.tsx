import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/Navbar";
import { EB_Garamond, Source_Code_Pro } from "next/font/google";
import Head from "next/head";
import { Partytown } from "@builder.io/partytown/react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingButton from "@/components/FloatingButton";

// Meta Data
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Webibee Software Agency | Worldwide ",
    description:
      "Business Tech for Small Medium Enterprises across the globe",
    robots: "index, follow",
    applicationName: "Webibee Software Agency",
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
      title: "Webibee Software Agency",
      description:
        "Business Tech for Small Medium Enterprises across the globe",
      siteName: "Webibee Agency",
      images: [
        {
          url: "https://ik.imagekit.io/webibee/Webibee/webibeepurplelogo.png?updatedAt=1735897013322",
        },
      ],
    },
  };
}

const EbGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-EbGaramond",
  weight: "400",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-sourceCodePro",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${EbGaramond.variable} ${sourceCodePro.variable}`}
    >
      <head>
        {/* Add Microsoft Clarity script with Partytown */}
        <Partytown debug={true} forward={["dataLayer.push"]} />
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
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
      (function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "nubuveu1h7");
    `,
          }}
        />
      </head>
      <body>
        <Providers>
          <NavBar />
          <main>
            <SmoothScroll />
            {children}
          </main>
          <Contact />
          <Footer />
          <FloatingButton />
          <ScrollToTopButton />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-4ES4NTQ7T8" />
    </html>
  );
}
