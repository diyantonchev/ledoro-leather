"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingBag } from "lucide-react"

import { Button } from "~/components/ui/button"
import { useCart } from "~/components/cart-provider"

interface ProductDetailProps {
  productId: string
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [currentImage, setCurrentImage] = useState(0)
  const { addToCart } = useCart()

  // Find the product based on the ID from the URL
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return <div className="container mx-auto px-4 py-12 text-center">Product not found</div>
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: Number.parseFloat(product.price),
      quantity,
      image: product.image,
    })
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % product.gallery.length)
  }

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + product.gallery.length) % product.gallery.length)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" />
          {/* Back to products */}
          Към продуктите
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Gallery */}
        <div className="relative">
          <div className="relative aspect-square bg-gray-100 mb-4">
            <Image
              src={product.gallery[currentImage] ?? "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {product.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative aspect-square bg-gray-100 ${currentImage === index ? "ring-2 ring-black" : ""}`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-light mb-2">{product.name}</h1>
          <p className="text-xl mb-6">${product.price}</p>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Описание</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Детайли</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">Количество</h3>
            <div className="flex items-center border rounded-md w-32">
              <button
                onClick={decreaseQuantity}
                className="flex-1 h-10 flex items-center justify-center"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="flex-1 h-10 flex items-center justify-center border-x">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="flex-1 h-10 flex items-center justify-center"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <Button onClick={handleAddToCart} size="lg" className="w-full mb-4">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Добави в количката
          </Button>

          <div className="text-sm text-muted-foreground">
            <p>Безплатна доставка за поръчки над 100 лв.</p>
            <p>30-дневен право на връщане</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const products = [
  {
    id: "minimal-wallet",
    // name: "Minimal Wallet",
    name: "Минималистичен портфлейл",
    price: "125.00",
    image: "/placeholder.svg?height=600&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    description:
      "A sleek, minimalist wallet designed to carry your essentials without the bulk. Features our signature vegetable-tanned leather that ages beautifully with use.",
    details: [
      "Vegetable-tanned leather",
      "4 card slots",
      "1 bill compartment",
      "RFID protection",
      'Dimensions: 4"L x 0.25"W x 3"H',
    ],
    category: "wallets",
  },
  {
    id: "card-holder",
    name: "Card Holder",
    price: "85.00",
    image: "/placeholder.svg?height=600&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    description: "A slim card holder for those who prefer to travel light. Holds up to 6 cards plus folded bills.",
    details: [
      "Vegetable-tanned leather",
      "6 card slots",
      "Center slot for folded bills",
      "RFID protection",
      'Dimensions: 4"L x 0.2"W x 3"H',
    ],
    category: "wallets",
  },
  {
    id: "laptop-sleeve",
    // name: "Laptop Sleeve",
    name: "Калъф за лаптоп",
    price: "175.00",
    image: "/placeholder.svg?height=600&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    description:
      "Protect your laptop in style with our premium leather sleeve. Features a soft microfiber lining and secure magnetic closure.",
    details: [
      "Full-grain leather exterior",
      "Soft microfiber lining",
      "Magnetic closure",
      'Fits most 13" laptops',
      'Dimensions: 13.5"L x 1"W x 9.5"H',
    ],
    category: "accessories",
  },
  {
    id: "crossbody-bag",
    // name: "Crossbody Bag",
    name: "Чанта през рамо",
    price: "345.00",
    image: "/placeholder.svg?height=600&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    description:
      "A versatile crossbody bag that transitions effortlessly from day to night. Features an adjustable strap and multiple compartments.",
    details: [
      "Full-grain Italian leather",
      "Cotton twill lining",
      "Adjustable shoulder strap",
      "Interior zip pocket and card slots",
      "Magnetic flap closure",
      'Dimensions: 9"L x 3"W x 6"H',
    ],
    category: "bags",
  },
  {
    id: "engraved-wallet",
    name: "Гравиран портфлейл",
    price: "165.00",
    image: "/placeholder.svg?height=600&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    description:
      "Keep your travel essentials organized with our travel wallet. Features dedicated slots for your passport, boarding passes, cards, and currency.",
    details: [
      "Vegetable-tanned leather",
      "Passport pocket",
      "4 card slots",
      "2 currency compartments",
      "Pen holder",
      "RFID protection",
      'Dimensions: 5.5"L x 0.5"W x 4"H',
    ],
    category: "wallets",
  },
  {
    id: "classic-wallet",
    name: "Класически портфлейл",
    price: "165.00",
    image: "/placeholder.svg?height=600&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    description:
      "A timeless belt crafted from full-grain leather with a solid brass buckle. Designed to age beautifully with wear.",
    details: ["Full-grain leather", "Solid brass buckle", "Width: 1.5 inches", "Available in sizes 30-42"],
    category: "accessories",
  },
  {
    id: "keychain",
    // name: "Leather Keychain",
    name: "Кожен ключодържател",
    price: "45.00",
    image: "/placeholder.svg?height=600&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    description:
      "A stylish and durable keychain crafted from the same premium leather as our bags. Features a solid brass key ring.",
    details: ["Vegetable-tanned leather", "Solid brass hardware", "Hand-stitched detailing", "Length: 4 inches"],
    category: "accessories",
  },
  {
    id: "belt",
    name: "Classic Belt",
    price: "115.00",
    image: "/placeholder.svg?height=600&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    description:
      "A timeless belt crafted from full-grain leather with a solid brass buckle. Designed to age beautifully with wear.",
    details: ["Full-grain leather", "Solid brass buckle", "Width: 1.5 inches", "Available in sizes 30-42"],
    category: "accessories",
  },
]
