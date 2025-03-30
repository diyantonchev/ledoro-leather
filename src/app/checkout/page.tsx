"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { toast } from "sonner"

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Separator } from "~/components/ui/separator"
import { useCart } from "~/components/cart-provider"
import { useRouter } from "next/navigation"
import { sendOrderEmail } from "./actions"
import { Checkbox } from "~/components/ui/checkbox"

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "cash-on-delivery",
  })
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 7
  const total = subtotal + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const result = await sendOrderEmail(
        formState,
        cart,
        subtotal,
        shipping,
        total
      )
      
      if (result.success) {
        router.push(`/checkout/confirmation?orderNumber=${result.orderNumber}`)
        toast.success(`Поръчка #${result.orderNumber} е изпратена успешно!`)
        setTimeout(() => clearCart(), 100)
      } else {
        toast.error(result.error ?? "Неуспешно изпращане на поръчка. Моля, опитайте отново.")
      }
    } catch (error) {
      toast.error("Възникна грешка. Моля, опитайте отново.")
      console.error("Order submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (cart.length === 0 && !isSubmitting) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-light mb-4">
          Кошницата ти е празна
        </h1>
        <p className="text-muted-foreground mb-8">
          Моля, добавете продукти в кошницата си преди да направите поръчка.
          </p>
        <Button asChild>
          <Link href="/products">Пазарувай сега</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/cart" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Обратно към кошницата
        </Link>
      </div>

      <h1 className="text-2xl md:text-3xl font-light mb-8 text-center">Каса</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-medium mb-4">Информация за контакт</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Име</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formState.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formState.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Имейл</Label>
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
                    <Label htmlFor="phone">Телефон</Label>
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
                <h2 className="text-lg font-medium mb-4">Адрес за доставка</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Адрес</Label>
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
                      <Label htmlFor="city">Град</Label>
                      <Input id="city" name="city" value={formState.city} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">Област</Label>
                      <Input id="state" name="state" value={formState.state} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Пощенски код</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formState.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-medium mb-4">Начин на плащане</h2>
                <RadioGroup
                  defaultValue="cash-on-delivery"
                  value={formState.paymentMethod}
                  onValueChange={(value) => setFormState({ ...formState, paymentMethod: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cash-on-delivery" id="cash-on-delivery" />
                    <Label htmlFor="cash-on-delivery">Наложен платеж</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" disabled/>
                    <Label htmlFor="credit-card">Карта</Label>
                  </div>
                </RadioGroup>

                {formState.paymentMethod === "credit-card" && (
                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Номер на карта</Label>
                      <Input id="cardNumber" placeholder="**** **** **** ****" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2 col-span-2">
                        <Label htmlFor="expiry">Валидност до</Label>
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

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) => 
                      setTermsAccepted(checked === true)
                    }
                    required
                  />
                  <Label htmlFor="terms" className="text-sm">
                    Приемам{" "}
                    <Link href="/terms" className="text-gray-500 hover:text-gray-700 hover:underline font-medium">
                      ОБЩИ УСЛОВИЯ
                    </Link>
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={privacyAccepted}
                    onCheckedChange={(checked) => 
                      setPrivacyAccepted(checked === true)
                    }
                    required
                  />
                  <Label htmlFor="privacy" className="text-sm">
                    Прочетох и съм съгласен с
                    <Link href="/privacy" className="text-gray-500 hover:text-gray-700 hover:underline font-medium">
                      Декларация за даване на съгласие за обработка на лични данни
                    </Link>
                  </Label>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting || !termsAccepted || !privacyAccepted}
              >
                {isSubmitting ? "Обработка..." : "Завърши поръчка"}
              </Button>
            </div>
          </form>
        </div>

        <div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">Детайли на поръчка</h2>

            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>{item.price * item.quantity} лв.</span>
                </div>
              ))}
            </div>

            <Separator />

            <div className="space-y-4 mt-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

