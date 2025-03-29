import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Ledoro Leather",
  description: "Learn about our story, craftsmanship, and commitment to quality leather goods",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-light mb-8 text-center">Нашата история</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <p>
            Създаденo с любов към традиционните умения и съвременния дизайн, Ledoro Leather представя съвършения баланс между старини и съвременни тенденции.
          </p>

          <div className="my-12 aspect-video bg-muted/30 flex items-center justify-center">
            <p className="text-muted-foreground italic">Workshop image placeholder</p>
          </div>
          
          <h2 className="text-2xl font-light mt-12 mb-6">Нашaта мисия</h2>
          
          <p>
            Ние в Ledoro искаме да предложим висококачествени кожени изделия, които да бъдат с вас за години наред.
          </p>
          
          <p>
            Всички продукти, които напускат нашият цех, преминават през строги контроли за качество, гарантирайки, че когато инвестирате в продукт на Ledoro, вие инвестирате в нещо, което ще бъде с вас за години наред.
          </p>
          
          <h2 className="text-2xl font-light mt-12 mb-6">Нашият занаят</h2>
          
          <p>
            Нашите майстори носят десетилетия опит в своята професия, комбинират традиционни техники за кожарство с съвременни инновации. От първоначалния разрез до последната шева, всеки етап в нашият процес е изпълнен с точност и грижа.
          </p>
          
          <p>
            Ние вярваме, че създаваме продукти, които разказват история — вашата. Когато използвате вашите кожени изделия на Ledoro, те ще развиват уникален отпечатък, отразявайки вашият път и превръщайки се в нещо, което е все повече и повече ваше.
          </p>
        </div>
      </div>
    </div>
  )
} 