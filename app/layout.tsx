'use client'

import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { useAnchorLinks } from '@/hooks/useAnchorLinks'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useAnchorLinks()

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EZRVJEZB3L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EZRVJEZB3L', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
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
  )
}
