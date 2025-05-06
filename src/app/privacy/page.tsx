import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Политика за поверителност</h1>

      <div className="prose prose-lg max-w-none">
        <p className="mb-6">
          Настоящата политика за поверителност има за цел да Ви информира какви лични данни събираме чрез този уебсайт, с каква цел и как ги обработваме.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Администратор на лични данни</h2>
        <p className="mb-6 space-y-2">
          <span className="block"><span className="font-semibold">Име на фирма:</span> [Име на фирма]</span>
          <span className="block"><span className="font-semibold">ЕИК:</span> [xxxxx]</span>
          <span className="block"><span className="font-semibold">Адрес:</span> [адрес]</span>
          <span className="block"><span className="font-semibold">Email:</span> <a href="mailto:sistems1001@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">sistems1001@gmail.com</a></span>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Какви лични данни събираме</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Име, фамилия, телефонен номер и имейл адрес чрез формата за контакт</li>
          <li>Анонимни аналитични данни чрез Vercel Analytics (IP адреси, информация за браузъра и устройството)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Цел на обработване</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Отговаряне на запитвания и предоставяне на клиентска поддръжка.</li>
          <li>Анализ на трафика и потребителско поведение.</li>
          <li>Подобряване на функционирането на сайта и потребителското изживяване.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Правно основание</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Съгласие на субекта на данните.</li>
          <li>Легитимен интерес на администратора.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Съхранение</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Личните данни ще бъдат съхранявани до 12 месеца след последния контакт или докато е необходимо за изпълнение на целите, за които са събрани, освен ако по закон не се изисква друго.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Трети страни</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Не споделяме лични данни с трети страни, освен при необходимост за изпълнение на договорни задължения или при законово изискване.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Вашите права</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Право на достъп до личните данни.</li>
          <li>Право на корекция на неточни или непълни данни.</li>
          <li>Право на изтриване на личните данни (&quot;правото да бъдеш забравен&quot;).</li>
          <li>Право на ограничаване на обработването.</li>
          <li>Право на преносимост на данните.</li>
          <li>Право на подаване на жалба до Комисията за защита на личните данни (КЗЛД).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Контакти</h2>
        <ul className="list-disc pl-6 mb-6"> 
          <li>
            За въпроси относно обработването на личните данни можете да се свържете с нас на <a href="mailto:sistems1001@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">sistems1001@gmail.com</a>.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Промени в политиката за поверителност</h2>
        <ul className="list-disc pl-6 mb-6"> 
          <li>
           Ние си запазваме правото да променяме тази политика за поверителност по всяко време. Всякакви промени ще бъдат публикувани на тази страница. Препоръчваме Ви периодично да проверявате тази страница за актуализации.
          </li>
        </ul>
      </div>
    </div>
  );
} 