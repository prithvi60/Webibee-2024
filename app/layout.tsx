import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Caveat, Lato, Montserrat } from 'next/font/google'
import FloatingButton from "@/components/FloatingButton";
export const metadata: Metadata = {
  title: "Webibee",
  description: "Webibee Web Development Agency",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: "600"
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: "400"
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: "500"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${montserrat.variable} ${caveat.variable}`}>
      <body>
        <Providers>
          <NavBar/>
          <main className="relative overflow-hidden">{children}
          </main>
          <FloatingButton />
          <Footer/>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-4ES4NTQ7T8" />
    </html>
  );
}
