const plans = [
  {
    name: "Start",
    price: "49 zł",
    period: "jednorazowo",
    description: "Dla jednej strony pamięci z podstawowymi opcjami personalizacji.",
    features: [
      "1 strona pamięci",
      "Do 30 zdjęć",
      "Podstawowy szablon",
      "Kod QR do udostępnienia",
    ],
    ctaLabel: "Wybierz Start",
    highlighted: false,
  },
  {
    name: "Rodzina",
    price: "99 zł",
    period: "jednorazowo",
    description: "Najlepszy wybór dla rodzin, które chcą rozbudować miejsce wspomnień.",
    features: [
      "Do 3 stron pamięci",
      "Do 150 zdjęć",
      "Rozszerzone szablony i sekcje",
      "Priorytetowe wsparcie e-mail",
    ],
    ctaLabel: "Wybierz Rodzina",
    highlighted: true,
  },
  {
    name: "Pamięć+",
    price: "149 zł",
    period: "jednorazowo",
    description: "Pakiet dla bardziej rozbudowanych historii i długoterminowej opieki.",
    features: [
      "Do 10 stron pamięci",
      "Nielimitowane zdjęcia",
      "Własna domena (opcjonalnie)",
      "Wsparcie premium",
    ],
    ctaLabel: "Wybierz Pamięć+",
    highlighted: false,
  },
];

export default function CennikPage() {
  return (
    <main className="page-shell">
      <section className="panel bg-white p-8 text-center">
        <h2 className="section-title text-4xl transition-colors duration-300 sm:text-5xl">
          Cennik
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-base text-gray-700 transition-colors duration-300 sm:text-lg">
          Dowiedz się o naszych planach i wybierz pakiet dopasowany do liczby stron oraz
          zakresu wspomnień, które chcesz zachować dla bliskich.
        </p>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
              className={`panel relative overflow-visible p-6 transition-colors duration-300 ${
              plan.highlighted
                ? "border-sky-500 bg-sky-50/65 pt-10"
                : ""
            }`}
          >
            {plan.highlighted && (
              <p className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 whitespace-nowrap rounded-full bg-cyan-500 px-5 py-1.5 text-sm font-semibold text-white shadow-sm">
                Nasz najpopularniejszy plan
              </p>
            )}

            <h2 className="text-2xl font-semibold text-[var(--foreground)]">{plan.name}</h2>
            <p className="mt-2 text-sm text-gray-600">{plan.description}</p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-[var(--foreground)]">{plan.price}</span>
              <span className="ml-2 text-sm text-gray-600">
                / {plan.period}
              </span>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-[var(--foreground)]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://qr.dlabliskich.pl/auth/register"
              className="btn-primary mt-8 w-full px-4 py-3 text-sm"
            >
              {plan.ctaLabel}
            </a>
          </article>
        ))}
      </section>

      <p className="mt-8 text-center text-sm text-gray-600 transition-colors duration-300">
        Potrzebujesz indywidualnej wyceny dla większej liczby stron? Skontaktuj się z nami
        przez zakładkę Kontakt.
      </p>
    </main>
  );
}
