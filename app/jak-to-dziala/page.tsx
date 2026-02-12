const steps = [
  {
    title: "1. Tworzysz wspomnienia",
    description:
      "Logujesz się do konfiguratora online i tworzysz przykładowe wspomnienia: dodajesz zdjęcia, historie, cytaty oraz linki do filmów przygotowanych przez siebie (filmy nie są przesyłane do nas).",
  },
  {
    title: "2. Wybierasz pakiet i formę kodu QR",
    description:
      "Wybierasz pakiet trwałości kodu QR, od którego zależy cena podstawowa. Dodatkowo możesz wybrać produkt fizyczny z naniesionym kodem oraz transport produktu.",
  },
  {
    title: "3. Generujesz kod i wskazujesz opiekuna strony",
    description:
      "Po płatności kod QR zostaje wygenerowany. Możesz wskazać opiekuna strony, który będzie wspierał utrzymanie i aktualizację wspomnień po uzyskaniu zgody zamawiającego.",
  },
  {
    title: "4. Odbiór i dostęp do wspomnień",
    description:
      "Kod cyfrowy otrzymujesz od razu, a produkt fizyczny dostarczamy pod wskazany adres (koszt transportu doliczany osobno). Po zeskanowaniu kodu bliscy mogą odwiedzać stronę pamięci.",
  },
];

const extras = [
  "Możliwość zarządzania stroną z dowolnego miejsca na świecie przez wskazanego opiekuna.",
  "Wsparcie przy wyborze materiału i formy produktu fizycznego.",
  "Rekomendacja odbioru osobistego przy produktach fizycznych.",
];

export default function JakToDzialaPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
        <h1 className="text-4xl font-bold text-[var(--foreground)]">Jak to działa</h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Cały proces zaprojektowaliśmy tak, aby był prosty, bezpieczny i wygodny dla rodzin.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <article
            key={step.title}
            className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900/50"
          >
            <h2 className="text-xl font-semibold text-[var(--foreground)]">{step.title}</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">{step.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">Dodatkowe informacje</h3>
        <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          {extras.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <a
          href="https://qr.dlabliskich.pl/auth/login"
          className="mt-6 inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
        >
          Przejdź do konfiguratora
        </a>
      </section>
    </main>
  );
}
