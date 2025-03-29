"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingBag } from "lucide-react"
import { toast } from "sonner"

import { Button } from "~/components/ui/button"
import { useCart } from "~/components/cart-provider"
import type { Product } from "../../products-data"

interface ProductDetailProps {
  product?: Product
}

export default function ProductDetails({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [currentImage, setCurrentImage] = useState(0)
  const { addToCart } = useCart()

 
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

    toast.success(`${quantity} ${quantity === 1 ? 'брой' : 'броя'} ${product.name} добавен${quantity === 1 ? '' : 'и'} в кошницата`)
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
          <p className="text-xl mb-6">лв.{product.price}</p>

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
            Добави в кошницата
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
