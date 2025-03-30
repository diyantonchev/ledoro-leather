import type React from "react"
import type { Metadata } from "next"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "~/styles/globals.css"
import Header from "~/components/header"
import HeaderSkeleton from "~/components/header-skeleton"
import Footer from "~/components/footer"
import { CookieConsentBanner } from "~/components/CookieConsent"
import { Toaster } from "~/components/ui/sonner"
import { Providers } from "~/components/providers"

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
        <Providers>
          <Suspense fallback={<HeaderSkeleton />}>
            <Header />
          </Suspense>
          <main>{children}</main>
          <Analytics />
          <SpeedInsights />
          <Toaster />
          <CookieConsentBanner />
        </Providers>
        <Footer />
      </body>
    </html>
  )
}

