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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.25-3a1.5 1.5 0 1 1 2.37 1.213c-.611.458-1.12 1.103-1.12 2.037a.75.75 0 0 1-1.5 0c0-1.468.805-2.519 1.72-3.204a.002.002 0 0 0 .001-.001A1.5 1.5 0 0 1 10.5 9Zm1.5 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd"/>
            </svg>
          </div>
          <h1 className="section-title text-4xl">Najczęściej zadawane pytania</h1>
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
