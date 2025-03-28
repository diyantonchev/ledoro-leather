"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Separator } from "~/components/ui/separator"
import { useCart } from "~/components/cart-provider"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const router = useRouter()
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    paymentMethod: "credit-card",
  })

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 200 ? 0 : 15
  const total = subtotal + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Process the payment here
    // For this now, we'll just simulate a successful order
    clearCart()
    router.push("/checkout/confirmation")
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-light mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">You need to add items to your cart before checking out.</p>
        <Button asChild>
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/cart" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to cart
        </Link>
      </div>

      <h1 className="text-2xl md:text-3xl font-light mb-8 text-center">CHECKOUT</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-medium mb-4">Contact Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formState.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formState.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formState.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" name="city" value={formState.city} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State / Province</Label>
                      <Input id="state" name="state" value={formState.state} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP / Postal Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formState.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        name="country"
                        value={formState.country}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-medium mb-4">Payment Method</h2>
                <RadioGroup
                  defaultValue="credit-card"
                  value={formState.paymentMethod}
                  onValueChange={(value) => setFormState({ ...formState, paymentMethod: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                </RadioGroup>

                {formState.paymentMethod === "credit-card" && (
                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="**** **** **** ****" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2 col-span-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM / YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="***" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Button type="submit" className="w-full">
                Complete Order
              </Button>
            </div>
          </form>
        </div>

        <div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <Separator />

            <div className="space-y-4 mt-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>

              <Separator />

              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

