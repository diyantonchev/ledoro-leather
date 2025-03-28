import { Suspense } from "react"
import ProductDetail from "~/app/products/components/product-detail"


type ProductPageProps = {
  params: Promise<{ id: string }> 
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetail productId={id} />
    </Suspense>
  )
}
