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
        <div className="icon-chip">💙</div>
        <span className="eyebrow mt-4">O nas</span>
        <h1 className="section-title mt-4 text-4xl">Kim jesteśmy</h1>
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

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="panel p-8">
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
        </article>

        <article className="panel p-8">
          <h3 className="section-title text-2xl">Materiały wizualne</h3>
          <p className="mt-3 text-gray-700">
            W tej sekcji umieścimy fotografie, które wzmacniają przekaz: kod QR na nagrobku
            oraz osobę korzystającą z rozwiązania.
          </p>
          <PhotoPlaceholder label="Miejsce na fotografię kodu QR na nagrobku" />
          <PhotoPlaceholder label="Miejsce na fotografię osoby z kodem QR" />
        </article>
      </section>
    </main>
  );
}
