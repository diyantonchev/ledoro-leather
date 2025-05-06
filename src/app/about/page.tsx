import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | Ledoro Leather",
  description: "Learn about our story, craftsmanship, and commitment to quality leather goods",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-4xl md:text-5xl tracking-tight">Нашата история</h1>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Създаденo с любов към традиционните умения и съвременния дизайн, Ledoro Leather представя съвършения баланс между старинни и съвременни тенденции.
          </p>
        </div>
        
        <div className="space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="group aspect-[4/5] relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 ease-out hover:-translate-y-2">
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src="/craftmanship.png"
                  alt="Ledoro Leather Workshop"
                  fill
                  className="object-cover brightness-95 transition-all duration-700 group-hover:brightness-105"
                  priority
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-light border-b border-muted pb-4 tracking-tight">Нашaта мисия</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="transition-all duration-300 hover:text-foreground">
                  Ние в Ledoro искаме да предложим висококачествени кожени изделия, които да бъдат с вас за години наред.
                </p>
                <p className="transition-all duration-300 hover:text-foreground">
                  Всички продукти, които напускат нашият цех, преминават през строги контроли за качество, гарантирайки, че когато инвестирате в продукт на Ledoro, вие инвестирате в нещо, което ще бъде с вас за години наред.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:order-1">
              <h2 className="text-2xl font-light border-b border-muted pb-4 tracking-tight">Нашият занаят</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="transition-all duration-300 hover:text-foreground">
                  Нашите майстори носят десетилетия опит в своята професия, комбинират традиционни техники за кожарство с съвременни инновации. От първоначалния разрез до последния шев, всеки етап в нашият процес е изпълнен с точност и грижа.
                </p>
                <p className="transition-all duration-300 hover:text-foreground">
                  Ние вярваме, че създаваме продукти, които разказват история — вашата. Когато използвате вашите кожени изделия на Ledoro, те ще развиват уникален отпечатък, отразявайки вашият път и превръщайки се в нещо, което е все повече и повече ваше.
                </p>
              </div>
            </div>
            
            <div className="group aspect-[4/5] relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 ease-out hover:-translate-y-2 md:order-2">
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src="/craftmanship1.png"
                  alt="Ledoro Leather Craftsmanship"
                  fill
                  className="object-cover brightness-95 transition-all duration-700 group-hover:brightness-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 