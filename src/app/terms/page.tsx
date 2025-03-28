import React from 'react';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Общи условия за ползване</h1>
      
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Данни за търговеца</h2>
        <p className="mb-6">
          [Име на фирма], ЕИК: [xxxxx], Адрес: [адрес], Email: [email]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Описание на услугите</h2>
        <p className="mb-6">Сайтът предоставя информация за продукти/услуги и форма за контакт.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Авторски права</h2>
        <p className="mb-6">Всички материали са защитени по Закона за авторското право.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Отговорност</h2>
        <p className="mb-6">Не носим отговорност за неточности или прекъсвания на сайта.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Промени</h2>
        <p className="mb-6">Запазваме си правото да променяме условията по всяко време.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Спорове</h2>
        <p className="mb-6">Приложимо е българското законодателство.</p>
      </div>
    </div>
  );
} 