import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Martin Hornák - UX Designer",
  description: "UX designer focused on internal tools and design systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-black bg-white">
        <div className="min-h-screen">
          <Header />
          <main className="max-w-[1600px] mx-auto">
        {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
