import Link from "next/link"
import Image from "next/image"

export default function ProductsPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const categoryFilter = searchParams.category as string | undefined

  const filteredProducts = categoryFilter
    ? products.filter(product => product.category === categoryFilter)
    : products

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-light mb-8 text-center">
        {categoryFilter 
          ? categoryTitles[categoryFilter] ?? `Category: ${categoryFilter}`
          : "Всички продукти"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="group">
            <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-light text-lg">{product.name}</h3>
            <p className="text-muted-foreground">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

const categoryTitles: Record<string, string> = {
  wallets: "Портфейли",
  accessories: "Аксесоари",
  bags: "Чанти"
}

const products = [
  {
    id: "minimal-wallet",
    // name: "Minimal Wallet",
    name: "Минималистичен портфлейл",
    price: "125.00",
    image: "/placeholder.svg?height=600&width=600",
    category: "wallets",
  },
  {
    id: "card-holder",
    name: "Card Holder",
    price: "85.00",
    image: "/placeholder.svg?height=600&width=600",
    category: "wallets",
  },
  {
    id: "laptop-sleeve",
    // name: "Laptop Sleeve",
    name: "Калъф за лаптоп",
    price: "175.00",
    image: "/placeholder.svg?height=600&width=600",
    category: "accessories",
  },
  {
    id: "crossbody-bag",
    // name: "Crossbody Bag",
    name: "Чанта през рамо",
    price: "345.00",
    image: "/placeholder.svg?height=600&width=600",
    category: "bags",
  },
  {
    id: "classic-wallet",
    // name: "Classic Wallet",
    name: "Класически портфлейл",
    price: "165.00",
    image: "/placeholder.svg?height=600&width=600",
    category: "wallets",
  },
  {
    id: "engraved-wallet",
    // name: "Engraved Wallet",
    name: "Гравиран портфлейл",
    price: "195.00",
    image: "/placeholder.svg?height=600&width=600",
    category: "wallets",
  },
  {
    id: "keychain",
    // name: "Leather Keychain",
    name: "Кожен ключодържател",
    price: "45.00",
    image: "/placeholder.svg?height=600&width=600",
    category: "accessories",
  },
  {
    id: "belt",
    // name: "Classic Belt",
    name: "Колан",
    price: "115.00",
    image: "/placeholder.svg?height=600&width=600",
    category: "accessories",
  },
]

