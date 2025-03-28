"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "~/components/ui/button"

export default function ConfirmationPage() {
  const orderNumber = `LD-${Math.floor(100000 + Math.random() * 900000)}`

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
      <CheckCircle className="h-16 w-16 mx-auto mb-6 text-green-600" />

      <h1 className="text-2xl md:text-3xl font-light mb-4">Order Confirmed</h1>

      <p className="text-muted-foreground mb-8">
        Thank you for your order! We have received your purchase and are preparing it for shipment.
      </p>

      <div className="bg-muted/30 p-6 rounded-lg mb-8">
        <h2 className="text-lg font-medium mb-4">Order Details</h2>

        <div className="space-y-2 text-left">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Order Number:</span>
            <span className="font-medium">{orderNumber}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Date:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Email:</span>
            <span>A confirmation email has been sent</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-8">
        You will receive an email confirmation shortly. If you have any questions about your order, please contact our
        customer service team.
      </p>

      <Button asChild>
        <Link href="/products">Continue Shopping</Link>
      </Button>
    </div>
  )
}

