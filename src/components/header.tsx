"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, Search, ShoppingBag, X } from "lucide-react"
import { Button } from "~/components/ui/button"
import { useCart } from "~/components/cart-provider"
import { useCommonContent } from "./common-content-provider"
import { SearchInput } from "./ui/search-input"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const { cart } = useCart()
  const commonContent = useCommonContent()
  const pathname = usePathname()
  const isProductsPage = pathname === "/products"
  const [mounted, setMounted] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  // Ensure hydration completes before showing cart count
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show header when scrolling up or at the top of the page
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsHeaderVisible(true)
      } else {
        // Hide header when scrolling down
        setIsHeaderVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={
        isMenuOpen
          ? 'w-full bg-background' // static header when menu is open
          : `border-b fixed w-full top-0 z-50 bg-background transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`
      }
    >
      <div className="container mx-auto px-4 grid grid-cols-3 h-16 items-center">
        <div className="flex items-center">
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
          <div className="hidden md:flex md:gap-10">
            <div className="group relative flex items-center">
              <Link href="/products" className="text-sm font-light hover:text-muted-foreground transition-colors">
                {commonContent.header_shop}
              </Link>
              <div className="absolute left-0 top-full invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 pt-2 z-10">
                <div className="bg-popover rounded-[6px] border p-2 shadow-md w-[200px]">
                  <div className="space-y-1">
                    <Link href="/products" className="block px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
                      {commonContent.link_all_products}
                    </Link>
                    <Link href="/products?category=wallets" className="block px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-[4px]">
                      {commonContent.link_wallets}
                    </Link>
                    <Link href="/products?category=belts" className="block px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-[4px]">
                      {commonContent.link_belts}
                    </Link>
                    <Link href="/products?category=keychains" className="block px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-[4px]">
                      {commonContent.link_accessories}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-sm font-light hover:text-muted-foreground transition-colors">
              {commonContent.link_about}
            </Link>
            <Link href="/contact" className="text-sm font-light hover:text-muted-foreground transition-colors">
              {commonContent.link_contacts}
            </Link>
          </div>
        </div>

        <div className="justify-self-center">
          <Link href="/" className="text-xl font-light">
            LEDORO
          </Link>
        </div>

        <div className="flex items-center gap-4 justify-self-end">
          {isProductsPage && (
            <>
              <div className="hidden md:flex items-center">
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isSearchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'}`}>
                  <div className="w-64">
                    <SearchInput />
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`transition-all duration-300 ${isSearchOpen ? 'ml-2' : 'ml-0'}`}
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden" 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </>
          )}
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Количка</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white">
          <div className="grid grid-cols-3 h-16 items-center px-4 border-b">
            <div></div>
            <div className="justify-self-center">
              <Link href="/" className="text-xl font-light">
                LEDORO
              </Link>
            </div>
            <div className="justify-self-end">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
          </div>
          <nav className="mt-8 px-4">
            <ul className="space-y-6 text-center">
              <li>
                <Link href="/products" className="text-lg font-light" onClick={() => setIsMenuOpen(false)}>
                  {commonContent.link_all_products}
                </Link>
              </li>
              <li>
                <Link href="/products?category=wallets" className="text-lg font-light" onClick={() => setIsMenuOpen(false)}>
                  {commonContent.link_wallets}
                </Link>
              </li>
              <li>
                <Link href="/products?category=belts" className="text-lg font-light" onClick={() => setIsMenuOpen(false)}>
                  {commonContent.link_belts}
                </Link>
              </li>
              <li>
                <Link href="/products?category=keychains" className="text-lg font-light" onClick={() => setIsMenuOpen(false)}>
                  {commonContent.link_accessories}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-lg font-light" onClick={() => setIsMenuOpen(false)}>
                  {commonContent.link_about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg font-light" onClick={() => setIsMenuOpen(false)}>
                  {commonContent.link_contacts}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Mobile search */}
      {isSearchOpen && isProductsPage && (
        <div className="md:hidden border-b p-4">
          <SearchInput />
        </div>
      )}
    </header>
  )
}

