import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BioZen Energy - Turning Waste Into Wealth",
  description:
    "Exchange segregated waste for blockchain-based ZenDollar tokens. Redeem for eco-friendly gifts while we convert waste into clean Bio-CNG energy.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ cursor: "none" }}>
        {children}
      </body>
    </html>
  )
}
