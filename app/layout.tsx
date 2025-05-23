import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import InfoBar from "../components/InfoBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ThemeProvider from "../components/ThemeProvider";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden`}
      >
        <ThemeProvider />
        <InfoBar />
        <Menu />
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
