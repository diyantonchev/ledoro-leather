import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "~/styles/globals.css"
import Header from "~/components/header"
import Footer from "~/components/footer"
import { CartProvider } from "~/components/cart-provider"
import { CookieConsentBanner } from "~/components/CookieConsent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ledoro Leather | Premium Leather Goods",
  description: "Handcrafted luxury leather goods for the modern individual",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsentBanner />
        </CartProvider>
      </body>
    </html>
  )
}

