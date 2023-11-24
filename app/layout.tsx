import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Webibee",
  description: "Webibee Web Development Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body>
        <Providers>
          <NavBar/>
          <main className="relative overflow-hidden">{children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
