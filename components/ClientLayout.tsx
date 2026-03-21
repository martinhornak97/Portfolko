"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { AnchorLinks } from "@/components/AnchorLinks"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <AnchorLinks />
      <Header />
      <main className="max-w-[1600px] mx-auto">{children}</main>
      <Footer />
    </div>
  )
}
