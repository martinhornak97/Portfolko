import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { metadata } from './metadata'
import { ClientLayout } from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout inter={inter}>{children}</ClientLayout>
}
