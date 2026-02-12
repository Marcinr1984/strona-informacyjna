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
        <div className="icon-chip">❓</div>
        <span className="eyebrow mt-4">FAQ</span>
        <h1 className="section-title mt-4 text-4xl">Najczęściej zadawane pytania</h1>
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
