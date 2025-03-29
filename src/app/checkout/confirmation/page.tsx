"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { useSearchParams } from "next/navigation"

import { Button } from "~/components/ui/button"

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get('orderNumber') ?? `ORD-${Math.floor(100000 + Math.random() * 900000)}`

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
      <CheckCircle className="h-16 w-16 mx-auto mb-6 text-green-600" />

      <h1 className="text-2xl md:text-3xl font-light mb-4">Поръчката е изпратена</h1>

      <p className="text-muted-foreground mb-8">
        Получихме вашата поръчка и я подготвяме за изпращане. Благодарим ви!
      </p>

      <div className="bg-muted/30 p-6 rounded-lg mb-8">
        <h2 className="text-lg font-medium mb-4">Детайли на поръчката</h2>

        <div className="space-y-2 text-left">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Номер на поръчка:</span>
            <span className="font-medium">{orderNumber}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Дата:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Email:</span>
            <span>На вашия имейл е изпратено потвърждение</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-8">
        Ще получите имейл за потвърждение. Ако имате въпроси относно вашата поръчка, моля, свържете се с нашият
        екип за обслужване на клиенти.
      </p>

      <Button asChild>
        <Link href="/products">Продължи пазаруването</Link>
      </Button>
    </div>
  )
}

