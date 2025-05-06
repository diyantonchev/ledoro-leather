import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Доставка | Ledoro Leather",
  description: "Информация за доставката на нашите кожани изделия",
}

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Доставка</h1>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Как доставяме?</h2>
        <p className="mb-4">
          В Ledoro Leather се стремим да осигурим бърза и надеждна доставка на всички наши кожени изделия. Използваме проверени куриерски услуги, за да гарантираме, че вашата поръчка ще пристигне безопасно и навреме. Доставките се извършват чрез куриерски фирми като Еконт, Спиди или друг предпочитан куриер на клиента.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Срокове за доставка</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>2-3 работни дни в цяла България</li>
          <li>В Димитровград: 1-2 работни дни</li>
          <li>Международна доставка: според избраната куриерска услуга</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Такси за доставка</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Стандартна доставка: 3 лв.</li>
          <li>Безплатна доставка за поръчки над 80 лв.</li>
          <li>Доставка в Димитровград: безплатно</li>
          <li>Международна доставка: според избраната куриерска услуга</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Плащане</h2>
        <p className="mb-4">
          Плащането се извършва само с наложен платеж при получаване на стоката. Клиентът заплаща дължимата сума директно на куриера при доставката.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Рекламации и връщане на стоки</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Клиентът има право да върне стоката в срок от 14 дни от датата на получаване, при условие че стоката е в оригиналното си състояние и опаковка. Разходите за връщане са за сметка на клиента.</li>
          <li>При рекламации, моля свържете се с нас на <a href="mailto:sistems1001@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">sistems1001@gmail.com</a> или на телефон <a href="tel:+359898988875" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">+359 89 8988875</a>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Допълнителна информация</h2>
        <p className="mb-4">
          Всички наши изделия се опаковат внимателно в специална опаковка, която осигурява максимална защита по време на транспортирането.
        </p>
      </div>
    </div>
  )
} 