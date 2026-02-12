const faqItems = [
  {
    question: "Czym jest DlaBliskich?",
    answer:
      "DlaBliskich to platforma, która pozwala tworzyć cyfrowe miejsca pamięci, dzielić się wspomnieniami i zdjęciami bliskich osób.",
  },
  {
    question: "Czy mogę udostępnić stronę pamięci rodzinie?",
    answer:
      "Tak. Po wygenerowaniu kodu QR możesz przekazać go rodzinie i przyjaciołom, aby wspólnie odwiedzać stronę pamięci.",
  },
  {
    question: "Jak mogę edytować dane strony pamięci?",
    answer:
      "Po zalogowaniu się do konta przejdź do swoich projektów i wybierz stronę, którą chcesz zaktualizować.",
  },
  {
    question: "Czy mogę wskazać opiekuna strony pamięci?",
    answer:
      "Tak. W konfiguratorze możesz wskazać opiekuna, który po uzyskaniu zgody pomoże aktualizować treści.",
  },
];

export default function FAQPage() {
  return (
    <main className="page-shell max-w-4xl">
      <section className="panel p-8">
        <div className="flex items-center gap-3">
          <div className="icon-chip">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-.8.7-1.7 1.2-1.7 2.7" />
              <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <h1 className="section-title text-4xl">Najczesciej zadawane pytania</h1>
        </div>
        <div className="mt-8 space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="panel-muted p-5">
              <h2 className="section-title text-lg">{item.question}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
