import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Great_Vibes } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-great-vibes",
})

export const metadata: Metadata = {
  title: "XV Años - Invitación Digital",
  description: "Invitación digital para celebración de XV años con tema de Rapunzel",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${greatVibes.variable}`}>
      <body className="font-serif antialiased">{children}</body>
    </html>
  )
}
