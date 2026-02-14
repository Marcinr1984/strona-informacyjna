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

function CennikHeroIllustration() {
  return (
    <div className="relative mx-auto h-64 w-full max-w-[320px] overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-100 via-sky-50 to-violet-100">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-300/60 blur-xl" />
      <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-violet-300/50 blur-xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-2xl border border-cyan-200 bg-white/80 p-6 shadow-lg backdrop-blur">
          <svg viewBox="0 0 64 64" className="h-24 w-24 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="22" cy="18" r="7" />
            <path d="M10 42c1-8 6-13 12-13s11 5 12 13" />
            <rect x="35" y="14" width="20" height="14" rx="3" />
            <path d="M45 18v6M42 21h6" />
            <path d="M37 40h18" />
            <path d="M40 46h12" />
            <path d="M44 34v16" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function CennikPage() {
  return (
    <main className="page-shell">
      <section className="panel overflow-hidden bg-[#f3f5f7] p-8 sm:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className="section-title text-4xl leading-tight sm:text-5xl">
              Stwórz darmowe konto i zacznij od razu
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-gray-700">
              Rozpocznij tworzenie strony pamięci bez kosztów na start. Dodawaj wspomnienia,
              zdjęcia i historie życia, a w dowolnym momencie rozszerz konto o dodatkowe funkcje.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://qr.dlabliskich.pl/auth/register"
                className="btn-primary px-7 py-3 text-sm"
              >
                Stwórz swoje darmowe konto
              </a>
              <a
                href="https://qr.dlabliskich.pl/auth/login"
                className="inline-flex rounded-lg border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Mam już konto
              </a>
            </div>
          </div>
          <CennikHeroIllustration />
        </div>
      </section>

      <section className="panel mx-auto mt-10 max-w-3xl p-8 text-center">
        <h2 className="section-title text-4xl transition-colors duration-300 sm:text-5xl">
          Cennik
        </h2>
        <p className="mt-4 text-base text-gray-700 transition-colors duration-300 sm:text-lg">
          Dowiedz się o naszych planach i wybierz pakiet dopasowany do liczby stron oraz
          zakresu wspomnień, które chcesz zachować dla bliskich.
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
                Najczęściej wybierany
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
