import type { Metadata } from "next";

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
  display: 'swap',
  variable: '--font-montserrat',
  weight: "600"
})

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: "400"
})

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
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
    </html>
  );
}
