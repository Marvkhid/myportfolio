import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavDesktop } from "./Components/Navbar/NavDesktop";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navbar/Navigation";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adeniyi  Marvel | Portfolio",
  description: "My PortFolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
>
  
        <NavDesktop />

        <div className="md:hidden"><Navigation /></div>
        {children}

        <Footer />
      </body>
    </html>
  );
}
