import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-light mb-4">LEDORO</h3>
            <p className="text-sm text-muted-foreground">
              {/* Premium leather goods crafted with exceptional attention to detail and sustainable practices. */}
              Луксозни кожени изделия, изработени с изключително внимание към детайла и устойчиви практики.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">
              {/* SHOP */}
              Магазин
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  {/* All Products */}
                  Всички продукти
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=wallets"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {/* Wallets */}
                  Портфейли
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=bags"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {/* Bags */}
                  Чанти
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=accessories"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {/* Accessories */}
                  Аксесоари
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">
              {/* Information */}
              Информация
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  {/* Shipping & Returns */}
                  Доставка и връщане
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  {/* Terms & Conditions */}
                  Условия за ползване
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  {/* Privacy Policy */}
                  Политика за поверителност
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">
              {/* Blog */}
              Блог
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {/* About Us */}
                  За нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {/* Contact */}
                  Контакт
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ledoro Leather. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

