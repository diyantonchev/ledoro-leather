import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Доставка | Ledoro Leather",
  description: "Информация за доставката на нашите кожани изделия",
}

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Доставка</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Как доставяме?</h2>
        <p className="mb-4">
          В Ledoro Leather се стремим да осигурим бърза и надеждна доставка на всички наши кожани изделия. 
          Използваме проверени куриерски услуги, за да гарантираме, че вашата поръчка ще пристигне безопасно и навреме.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Срокове за доставка</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>В Димитровград: 1-2 работни дни</li>
          <li>В останалите градове: 2-3 работни дни</li>
          <li>В чужбина: 3-5 работни дни</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Такси за доставка</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Безплатна доставка за поръчки над 200 лв.</li>
          <li>Доставка в София: 5 лв.</li>
          <li>Доставка в останалите градове: 7 лв.</li>
          <li>Международна доставка: според избраната куриерска услуга</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Проследяване на поръчката</h2>
        <p className="mb-4">
          След като вашата поръчка бъде изпратена, ще получите имейл с номер за проследяване, 
          който можете да използвате, за да следите статуса на доставката си.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Допълнителна информация</h2>
        <p className="mb-4">
          Всички наши изделия се опаковат внимателно в специална опаковка, 
          която осигурява максимална защита по време на транспортирането.
        </p>
      </div>
    </div>
  )
} 