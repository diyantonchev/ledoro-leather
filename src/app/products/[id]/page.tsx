import { Suspense } from "react"
import ProductDetail from "~/app/products/components/product-detail"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetail productId={params.id} />
    </Suspense>
  )
}
