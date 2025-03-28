import { Suspense } from "react"
import Products from "./components/products"

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  )
}
