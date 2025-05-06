"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingBag, X } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

import { Button } from "~/components/ui/button"
import { useCart } from "~/components/cart-provider"
import type { Product } from "../../products-data"

interface ProductDetailProps {
  product?: Product
}

export default function ProductDetails({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [currentImage, setCurrentImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addToCart } = useCart()
  const router = useRouter()

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])
 
  if (!product) {
    return <div className="container mx-auto px-4 py-12 text-center">Продуктът не е намерен</div>
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: Number.parseFloat(product.price),
      quantity,
      image: product.image,
    })

    toast.success(`${quantity} ${quantity === 1 ? 'брой' : 'броя'} ${product.name} добавен${quantity === 1 ? '' : 'и'} в кошницата`, {
      action: {
        label: "Виж кошницата",
        onClick: () => router.push("/cart")
      },
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
          Към продуктите
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Gallery */}
        <div className="relative">
          <div className="relative aspect-square bg-gray-100 mb-4 cursor-pointer" onClick={openModal}>
            <Image
              src={product.gallery[currentImage] ?? "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/95 rounded-full p-2 transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/95 rounded-full p-2 transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
            <div className="absolute bottom-4 right-4 bg-white/80 hover:bg-white/95 rounded-full p-2 transition-colors cursor-pointer">
              <span className="sr-only">View full size</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </div>
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
          <p className="text-xl mb-6">{product.price} лв.</p>

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
                className="flex-1 h-10 flex items-center justify-center cursor-pointer group"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4 group-hover:text-gray-600 group-hover:scale-110 transition-transform" />
              </button>
              <span className="flex-1 h-10 flex items-center justify-center border-x">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="flex-1 h-10 flex items-center justify-center cursor-pointer group"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4 group-hover:text-gray-600 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          <Button onClick={handleAddToCart} size="lg" className="w-full mb-4 hover:bg-gray-800 transition-colors cursor-pointer">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Добави в кошницата
          </Button>

          <div className="text-sm text-muted-foreground">
            <p>Безплатна доставка за поръчки над 80 лв.</p>
            <p>14-дневен право на връщане</p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" 
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={handleOverlayClick}>
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors z-10 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            <div className="max-w-5xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
              <Image
                src={product.gallery[currentImage] ?? "/placeholder.svg"}
                alt={product.name}
                width={1200}
                height={1200}
                className="object-contain max-h-[80vh] w-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
