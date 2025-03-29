import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "~/components/ui/button"
import { getProducts } from "./products/products-data"

export default async function Home() {
  const products = await getProducts()
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[70vh]">
        <Image
          src="/classic-wallet.jpg?height=1080&width=1920"
          alt="Luxury leather goods"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-light text-white mb-4">LEDORO LEATHER</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">Timeless craftsmanship. Modern luxury.</p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href="/products">
              Към продуктите <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            Колекция
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Нашите продукти, изработени с премиум кожи и изключително внимание към детайла.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
                <Image
                  src={`${product.image}&height=800&width=800` || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-light text-lg">{product.name}</h3>
              <p className="text-muted-foreground">{product.price} лв.</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/products">
              Виж всички продукти <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-4">OUR STORY</h2>
            <p className="text-muted-foreground mb-6">
              Ledoro Leather е основана на принципите на ръчна изработка. 
              Всички продукти са изработени с изключително внимание към детайла и устойчиви практики.
            </p>
            <p className="text-muted-foreground mb-6">
              Нашата цел е да гарантираме високо качество и устойчивост, така че всеки продукт на Ledoro да изглежда красиво, 
              но е изграден да продължи да бъде използван за поколения.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">
                Научи повече <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=800&width=800"
              alt="Craftsman working on leather"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4">JOIN OUR COMMUNITY</h2>
          <p className="text-white/80 mb-8">
            Абонирайте се за да получавате известия за нови продукти, специални предложения и намаления.
          </p>
          <form className="flex flex-col items-center sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-transparent border border-white/30 rounded-md text-white placeholder:text-white/50"
              required
            />
            <Button className="bg-white text-black hover:bg-white/90">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}
