import { Suspense } from "react"
import ProductDetails from "../components/product-details"


type ProductPageProps = {
  params: Promise<{ id: string }> 
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetails productId={id} />
    </Suspense>
  )
}
