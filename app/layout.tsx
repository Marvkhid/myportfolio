import type { Metadata } from "next";
import "./globals.css";
import { NavDesktop } from "./Components/Navbar/NavDesktop";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navbar/Navigation";


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
