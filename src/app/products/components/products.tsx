"use client"

import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from 'next/navigation'
import type { Product } from "../products-data"

type ProductsProps = {
  products: Product[]
}

export default function Products({ products }: ProductsProps) {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') ?? ''
  const search = searchParams.get('search') ?? ''

  const filteredProducts = products.filter(product => {
    const matchesCategory = !category || product.category === category
    const matchesSearch = !search || 
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-light mb-8 text-center">
        {category 
          ? categoryTitles[category] ?? `Category: ${category}`
          : "Продуктов каталог"}
      </h1>

      {filteredProducts.length === 0 ? (
        <div className="text-center text-muted-foreground">
          {search ? "Няма продукти, отговарящи на търсенето." : "Няма продукти в тази категория."}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
                <Image
                  src={`${product.image}&height=800&width=800` || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-light text-lg">{product.name}</h3>
              <p className="text-muted-foreground">{product.price} лв.</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

const categoryTitles: Record<string, string> = {
  wallets: "Портфейли",
  accessories: "Аксесоари",
  belts: "Колани"
}
