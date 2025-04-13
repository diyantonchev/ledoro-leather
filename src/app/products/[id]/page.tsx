import ProductDetails from "./components/product-details"
import { getProducts } from "../products-data"

export const dynamic = 'force-static';

type ProductPageProps = {
  params: Promise<{ id: string }> 
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  const products = await getProducts()
  const product = products.find((product) => product.id === id)

  return (
    <ProductDetails product={product} />
  )
}
