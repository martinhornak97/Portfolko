import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { metadata } from "./metadata"
import { ClientLayout } from "@/components/ClientLayout"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-black bg-white">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EZRVJEZB3L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EZRVJEZB3L', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
