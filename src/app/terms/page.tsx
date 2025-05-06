import React from 'react';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Общи условия за ползване</h1>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Данни за търговеца</h2>
        <p className="mb-6 space-y-2">
          <span className="block"><span className="font-semibold">Име на фирма:</span> [Име на фирма]</span>
          <span className="block"><span className="font-semibold">ЕИК:</span> [xxxxx]</span>
          <span className="block"><span className="font-semibold">Адрес:</span> [адрес]</span>
          <span className="block"><span className="font-semibold">Email:</span> <a href="mailto:sistems1001@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">sistems1001@gmail.com</a></span>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Описание на услугите</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Сайтът предоставя възможност за закупуване на кожени изделия като портфейли, колани и ключодържатели и други. Поръчките могат да се правят чрез съответната функционалност на сайта или чрез формата за контакт.</li>
          <li>Плащането се извършва само с наложен платеж при доставка.</li>
        </ul>


        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Авторски права</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Всички материали, публикувани на сайта, са защитени по Закона за авторското право и сродните му права. Използването им без предварително писмено съгласие е забранено.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Отговорност</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Фирмата не носи отговорност за неточности или прекъсвания на сайта. Информацията на сайта е предоставена &quot;такава, каквато е&quot; и без никакви гаранции.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Поръчки и доставки</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Поръчките се извършват чрез формата за контакт на сайта. След получаване на поръчката, наш представител ще се свърже с клиента по телефона за потвърждение и уточняване на детайлите за доставката.</li>
          <li>Доставките се извършват чрез куриерски фирми като Еконт, Спиди или друг предпочитан куриер на клиента.</li>
          <li>Фиксираната цена за доставка е 3лв., но при поръчки над определена стойност доставката може да бъде безплатна. Подробности за условията за безплатна доставка са описани на страницата за доставка.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Плащане</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Плащането се извършва само с наложен платеж при получаване на стоката. Клиентът заплаща дължимата сума директно на куриера при доставката.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Рекламации и връщане на стоки</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Клиентът има право да върне стоката в срок от 14 дни от датата на получаване, при условие че стоката е в оригиналното си състояние и опаковка. Разходите за връщане са за сметка на клиента.</li>
          <li>При рекламации, моля свържете се с нас на <a href="mailto:sistems1001@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">sistems1001@gmail.com</a> или на телефон <a href="tel:+359898988875" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">+359 89 8988875</a>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Промени</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Запазваме си правото да променяме настоящите Условия за ползване по всяко време. Всякакви промени ще бъдат публикувани на тази страница. Препоръчваме Ви периодично да проверявате тази страница за актуализации.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Спорове</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>При възникване на спорове, страните ще се стремят да ги решат по взаимно съгласие. При неуспех, споровете ще бъдат решавани от компетентните български съдилища съгласно действащото законодателство на Република България.</li>
        </ul>
      </div>
    </div>
  );
} 