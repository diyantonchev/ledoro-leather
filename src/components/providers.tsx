import { getCommonContent } from "~/app/content-data"
import { CommonContentProvider } from "./common-content-provider"
import { CartProvider } from "./cart-provider"

export async function Providers({ children }: { children: React.ReactNode }) {
  const commonContent = await getCommonContent()

  return (
    <CommonContentProvider content={commonContent}>
      <CartProvider>
        {children}
      </CartProvider>
    </CommonContentProvider>
  )
} 