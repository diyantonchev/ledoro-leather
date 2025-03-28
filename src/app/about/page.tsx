import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Ledoro Leather",
  description: "Learn about our story, craftsmanship, and commitment to quality leather goods",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-light mb-8 text-center">Our Story</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <p>
            Founded with a passion for traditional craftsmanship and contemporary design, Ledoro Leather represents the perfect blend of time-honored techniques and modern aesthetics.
          </p>
          
          <p>
            Our journey began with a simple belief: that exceptional leather goods should be both beautiful and enduring. Each Ledoro product is meticulously handcrafted from premium, ethically-sourced leather, ensuring unmatched quality and character that only improves with age.
          </p>
          
          <div className="my-12 aspect-video bg-muted/30 flex items-center justify-center">
            <p className="text-muted-foreground italic">Workshop image placeholder</p>
          </div>
          
          <h2 className="text-2xl font-light mt-12 mb-6">Our Commitment</h2>
          
          <p>
            At Ledoro, we are committed to sustainable practices and responsible production. We carefully select our materials, minimizing waste and environmental impact while maximizing durability and timeless style.
          </p>
          
          <p>
            Each piece that leaves our workshop undergoes rigorous quality control, ensuring that when you invest in a Ledoro product, you&apos;re investing in something that will be with you for years to come.
          </p>
          
          <h2 className="text-2xl font-light mt-12 mb-6">The Craft</h2>
          
          <p>
            Our artisans bring decades of experience to their craft, combining traditional leatherworking techniques with contemporary innovation. From the initial cut to the final stitch, every step in our process is performed with precision and care.
          </p>
          
          <p>
            We believe in creating products that tell a story—yours. As you use your Ledoro leather goods, they will develop a unique patina, reflecting your journey and becoming more distinctly yours with each passing day.
          </p>
        </div>
      </div>
    </div>
  )
} 