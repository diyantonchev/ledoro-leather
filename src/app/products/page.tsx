import Products from "./components/products"
import { getProducts } from "./products-data";

export const dynamic = 'force-static';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Products products={products} />
  )
}
