const plans = [
  {
    name: "Start",
    price: "49 zl",
    period: "jednorazowo",
    description: "Dla jednej strony pamieci z podstawowymi opcjami personalizacji.",
    features: [
      "1 strona pamieci",
      "Do 30 zdjec",
      "Podstawowy szablon",
      "Kod QR do udostepnienia",
    ],
    ctaLabel: "Wybierz Start",
    highlighted: false,
  },
  {
    name: "Rodzina",
    price: "99 zl",
    period: "jednorazowo",
    description: "Najlepszy wybor dla rodzin, ktore chca rozbudowac miejsce wspomnien.",
    features: [
      "Do 3 stron pamieci",
      "Do 150 zdjec",
      "Rozszerzone szablony i sekcje",
      "Priorytetowe wsparcie e-mail",
    ],
    ctaLabel: "Wybierz Rodzina",
    highlighted: true,
  },
  {
    name: "Pamiec+",
    price: "149 zl",
    period: "jednorazowo",
    description: "Pakiet dla bardziej rozbudowanych historii i dlugoterminowej opieki.",
    features: [
      "Do 10 stron pamieci",
      "Nielimitowane zdjecia",
      "Wlasna domena (opcjonalnie)",
      "Wsparcie premium",
    ],
    ctaLabel: "Wybierz Pamiec+",
    highlighted: false,
  },
];

export default function CennikPage() {
  return (
    <main className="page-shell">
      <section className="panel mx-auto max-w-3xl p-8 text-center">
        <div className="mx-auto icon-chip">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7" />
            <path d="M9 12h6" />
            <path d="M12 3v9" />
          </svg>
        </div>
        <span className="eyebrow mt-4">Oferta</span>
        <h1 className="section-title mt-4 text-4xl transition-colors duration-300 sm:text-5xl">
          Cennik
        </h1>
        <p className="mt-4 text-base text-gray-700 transition-colors duration-300 sm:text-lg">
          Wybierz plan dopasowany do liczby stron i zakresu wspomnien, ktore chcesz
          zachowac dla bliskich.
        </p>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
              className={`panel p-6 transition-colors duration-300 ${
              plan.highlighted
                ? "border-sky-500 bg-sky-50/65"
                : ""
            }`}
          >
            {plan.highlighted && (
              <p className="mb-4 inline-flex rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Najczesciej wybierany
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
        Potrzebujesz indywidualnej wyceny dla wiekszej liczby stron? Skontaktuj sie z nami
        przez zakladke Kontakt.
      </p>
    </main>
  );
}
