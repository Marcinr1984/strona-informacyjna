

import React from 'react';

const FAQPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 dark:text-white">Najczęściej zadawane pytania</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Czym jest DlaBliskich?</h2>
          <p className="text-gray-600 dark:text-gray-400">DlaBliskich to platforma, która pozwala tworzyć cyfrowe miejsca pamięci, dzielić się wspomnieniami i zdjęciami bliskich osób.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Czy mogę udostępnić stronę pamięci rodzinie?</h2>
          <p className="text-gray-600 dark:text-gray-400">Tak, możesz wygenerować link lub kod QR i podzielić się nim z rodziną i przyjaciółmi.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Jak mogę edytować dane strony pamięci?</h2>
          <p className="text-gray-600 dark:text-gray-400">Po zalogowaniu się do swojego konta, przejdź do zakładki „Twoje pamiątki” i wybierz stronę, którą chcesz edytować.</p>
        </div>
      </div>
    </main>
  );
};

export default FAQPage;