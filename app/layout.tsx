import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Providers } from "./providers";
import { EB_Garamond, Lora, Source_Code_Pro } from "next/font/google";
import { Partytown } from "@builder.io/partytown/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";

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
          url: "/webibeepurplelogo.png",
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

const sourceCodePro = Lora({
  subsets: ["latin"],
  variable: "--font-sourceCodePro",
  weight: "400",
});

// const sourceCodePro = Source_Code_Pro({
//   subsets: ["latin"],
//   variable: "--font-sourceCodePro",
//   weight: "400",
// });

const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID || '';
const ahrefsKey = process.env.NEXT_PUBLIC_AHREFS_KEY || '';
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

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
        {/* Add Calendly widget stylesheet globally */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
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
        <main>
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
      {/* Hotjar Script */}
      {hotjarId && (
        <Script
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:"${hotjarId}",hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
          }}
        />
      )}
      {/* Ahrefs Analytics Script */}
      {ahrefsKey && (
        <Script
          id="ahrefs-analytics"
          strategy="afterInteractive"
          src="https://analytics.ahrefs.com/analytics.js"
          data-key={ahrefsKey}
          async
        />
      )}

      {/* Google Tag Manager (gtag.js) */}
      {gtmId && (
        <>
          <Script
            id="gtag"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
            async
          />
          <Script
            id="gtag-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gtmId}');
                `,
            }}
          />
        </>
      )}
      <GoogleAnalytics gaId="G-4ES4NTQ7T8" />
    </html>
  );
}
