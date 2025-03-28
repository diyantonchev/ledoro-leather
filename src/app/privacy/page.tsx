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
        <p className="mb-6">
          [Име на фирма], ЕИК: [xxxxx], Адрес: [адрес], Email: [email]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Какви лични данни събираме</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Име, имейл и съобщение чрез формата за контакт</li>
          <li>Анонимни аналитични данни чрез Vercel Analytics</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Цел на обработване</h2>
        <p className="mb-6">Отговаряне на запитвания и подобряване на потребителското изживяване.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Правно основание</h2>
        <p className="mb-6">Съгласие и легитимен интерес.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Съхранение</h2>
        <p className="mb-6">До 12 месеца, освен ако закон не изисква друго.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Трети страни</h2>
        <p className="mb-6">Не споделяме лични данни, освен при необходимост.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Вашите права</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Право на достъп</li>
          <li>Корекция</li>
          <li>Изтриване</li>
          <li>Ограничаване</li>
          <li>Възражение</li>
          <li>Жалба до КЗЛД</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Контакти</h2>
        <p className="mb-6">[email]</p>
      </div>
    </div>
  );
} 