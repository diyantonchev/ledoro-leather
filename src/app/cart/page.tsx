"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"
import { useCart } from "~/components/cart-provider"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart()

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 80 ? 0 : 3
  const total = subtotal + shipping

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <h1 className="text-2xl font-light mb-4">Вашата кошница е празна</h1>
        <p className="text-muted-foreground mb-8">Изглежда, че не сте добавили нищо в кошницата си.</p>
        <Button asChild>
          <Link href="/products">Продължи с пазаруването</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-light mb-8 text-center">КОШНИЦА</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 pb-6 border-b">
                <div className="relative aspect-square w-24 h-24 flex-shrink-0 bg-gray-100">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between">
                    <Link href={`/products/${item.id}`} className="font-medium hover:underline">
                      {item.name}
                    </Link>
                    <p className="font-medium">{(item.price * item.quantity).toFixed(2)} лв.</p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{item.price.toFixed(2)} лв.</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border rounded-md w-24 cursor-pointer">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="flex-1 h-8 flex items-center justify-center cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="flex-1 h-8 flex items-center justify-center border-x text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex-1 h-8 flex items-center justify-center cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-foreground cursor-pointer"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">Детайли на поръчка</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Сума</span>
                <span>{subtotal.toFixed(2)} лв.</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Доставка</span>
                <span>{shipping === 0 ? "Безплатно" : `${shipping.toFixed(2)} лв.`}</span>
              </div>

              <Separator />

              <div className="flex justify-between font-medium">
                <span>Обща сума</span>
                <span>{total.toFixed(2)} лв.</span>
              </div>

              {subtotal < 80 && (
                <p className="text-sm text-muted-foreground">
                  Имате нужда от още {((80 - subtotal)).toFixed(2)} лв. за безплатна доставка
                </p>
              )}
            </div>

            <Button asChild className="w-full mt-6">
              <Link href="/checkout">Към касата</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

