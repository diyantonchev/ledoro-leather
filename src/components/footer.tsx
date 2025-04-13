import Link from "next/link"
import { getCommonContent } from "~/app/content-data"

export default async function Footer() {
  const commonContent = await getCommonContent()

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-light mb-4">LEDORO</h3>
            <p className="text-sm text-muted-foreground">
              {commonContent.footer_tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">
              {commonContent.footer_shop}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  {commonContent.link_all_products}
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=wallets"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {commonContent.link_wallets}
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=belts"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {commonContent.link_belts}
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=accessories"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {commonContent.link_accessories}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">
              {commonContent.footer_info}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  {commonContent.link_delivery}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  {commonContent.link_terms}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  {commonContent.link_privacy}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">
              {commonContent.footer_blog}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {commonContent.link_about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {commonContent.link_contacts}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {commonContent.footer_copy_text}</p>
        </div>
      </div>
    </footer>
  )
}

