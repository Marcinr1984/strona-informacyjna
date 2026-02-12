function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="mt-4 flex min-h-44 items-center justify-center rounded-xl border border-dashed border-gray-400/70 bg-gray-100/60 p-6 text-center text-sm text-gray-600 dark:border-gray-600 dark:bg-gray-800/40 dark:text-gray-300">
      {label}
    </div>
  );
}

const memoryFeatures = [
  "Biografię i ważne momenty z życia",
  "Galerię zdjęć i materiałów wideo",
  "Miejsce na wspomnienia i wpisy od bliskich",
  "Dostęp przez zeskanowanie kodu QR smartfonem",
  "Możliwość aktualizacji treści w dowolnym momencie",
];

const benefits = [
  "Trwała pamiątka dla przyszłych pokoleń",
  "Łatwy dostęp dla rodziny, także tej mieszkającej daleko",
  "Elegancka forma upamiętnienia",
  "Prosta obsługa i wsparcie na każdym etapie",
];

export default function ONasPage() {
  return (
    <main className="page-shell">
      <section className="panel p-8">
        <div className="flex items-center gap-3">
          <div className="icon-chip">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 21s-6.7-4.35-9.33-8.23C.65 9.8 2.04 5.5 6 5.5c2.07 0 3.24 1.18 4 2.2.76-1.02 1.93-2.2 4-2.2 3.96 0 5.35 4.3 3.33 7.27C18.7 16.65 12 21 12 21Z" />
            </svg>
          </div>
          <h1 className="section-title text-4xl">Kim jestesmy</h1>
        </div>
        <div className="mt-5 space-y-4 text-gray-700">
          <p>
            Pamięć o bliskich to coś więcej niż imię wyryte w kamieniu. To historie, uśmiechy,
            głosy i chwile, które chcemy zachować na zawsze. Właśnie z tej potrzeby powstała
            nasza firma.
          </p>
          <p>
            Tworzymy kody QR na nagrobki, które pozwalają ocalić wspomnienia i przekazać je
            kolejnym pokoleniom. Po zeskanowaniu kodu telefonem odwiedzający mogą zobaczyć
            zdjęcia, przeczytać wspomnienia i lepiej poznać historię życia bliskiej osoby.
          </p>
          <p>
            Każdy projekt traktujemy z ogromnym szacunkiem i wrażliwością. Dbamy o detale:
            trwałość materiałów, prostotę obsługi i bezpieczeństwo dostępu.
          </p>
          <p>
            Wierzymy, że pamięć nie kończy się wraz z odejściem. Dzięki technologii może trwać
            dalej: cicho, godnie i zawsze wtedy, gdy ktoś zatrzyma się na chwilę wspomnienia.
          </p>
        </div>
      </section>

      <section className="panel mt-8 p-8">
        <h2 className="section-title text-2xl">Co zawiera strona pamięci</h2>
        <ul className="mt-4 space-y-2 text-gray-700">
          {memoryFeatures.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <h3 className="section-title mt-6 text-xl">Dlaczego warto</h3>
        <ul className="mt-3 space-y-2 text-gray-700">
          {benefits.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel mt-8 p-8">
        <PhotoPlaceholder label="Miejsce na fotografię kodu QR na nagrobku" />
        <PhotoPlaceholder label="Miejsce na fotografię osoby z kodem QR" />
      </section>
    </main>
  );
}
