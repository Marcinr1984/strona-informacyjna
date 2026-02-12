import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ThemeProvider from "../components/ThemeProvider";
import Breadcrumbs from "../components/Breadcrumbs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dla Bliskich",
  description: "Upamiętnij swoich bliskich w wyjątkowy sposób.",
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden antialiased transition-colors duration-300`}
      >
        <ThemeProvider />
        <Menu />
        <Breadcrumbs />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
