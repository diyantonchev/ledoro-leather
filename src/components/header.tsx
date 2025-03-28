"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Search, ShoppingBag, X } from "lucide-react"
import { Button } from "~/components/ui/button"
import { useCart } from "~/components/cart-provider"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>

        <div className="hidden md:flex md:gap-10">
          <Link href="/products" className="text-sm font-light hover:text-muted-foreground transition-colors">
            SHOP
          </Link>
          <Link href="/about" className="text-sm font-light hover:text-muted-foreground transition-colors">
            ABOUT
          </Link>
          <Link href="/contact" className="text-sm font-light hover:text-muted-foreground transition-colors">
            CONTACT
          </Link>
        </div>

        <Link href="/" className="text-xl font-light">
          LEDORO
        </Link>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex h-16 items-center justify-between px-4 border-b">
            <div />
            <Link href="/" className="text-xl font-light">
              LEDORO
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="mt-8 px-4">
            <ul className="space-y-6 text-center">
              <li>
                <Link href="/products" className="text-lg font-light" onClick={() => setIsMenuOpen(false)}>
                  SHOP
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-lg font-light" onClick={() => setIsMenuOpen(false)}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg font-light" onClick={() => setIsMenuOpen(false)}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

