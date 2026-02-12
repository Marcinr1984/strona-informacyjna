function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="mt-4 flex min-h-44 items-center justify-center rounded-xl border border-dashed border-gray-400/70 bg-gray-100/60 p-6 text-center text-sm text-gray-600 dark:border-gray-600 dark:bg-gray-800/40 dark:text-gray-300">
      {label}
    </div>
  );
}

export default function KapsulaCzasuPage() {
  return (
    <main className="page-shell">
      <section className="panel p-8">
        <div className="icon-chip">⏳</div>
        <span className="eyebrow mt-4">Kapsuła czasu</span>
        <h1 className="section-title mt-4 text-4xl">Kapsuła czasu</h1>
        <p className="mt-5 text-gray-700">
          Kapsuła czasu to miejsce, w którym wspomnienia mogą przetrwać przez pokolenia.
          Tworzysz zdjęcia, historie, cytaty i linki do filmów, które będą dostępne dla
          bliskich za życia lub po śmierci w eleganckiej, cyfrowej formie kodu QR.
        </p>
        <p className="mt-3 text-gray-700">
          Dla bezpieczeństwa warto wskazać opiekuna kapsuły, który zadba o wspomnienia po
          uzyskaniu Twojej zgody. Kod QR można także zapisać w spadku.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="panel p-8">
          <h2 className="section-title text-2xl">
            Dodatkowa usługa: wizytówka z kodem QR
          </h2>
          <p className="mt-3 text-gray-700">
            Dla osób, które nie korzystają z technologii na co dzień, oferujemy eleganckie
            wizytówki z kodem QR i logo Dla Bliskich. To dyskretny sposób przekazania dostępu
            do wspomnień rodzinie i znajomym.
          </p>
          <p className="mt-3 text-gray-700">
            Minimalna ilość zamówienia: 100 sztuk. Opcja będzie dostępna jako dodatek w
            kreatorze podczas płatności.
          </p>
          <PhotoPlaceholder label="Miejsce na poglądowy projekt/fotografię wizytówki z kodem QR" />
        </article>

        <article className="panel p-8">
          <h2 className="section-title text-2xl">Bezpieczeństwo wspomnień</h2>
          <p className="mt-3 text-gray-700">
            Wszystkie informacje tworzone w konfiguratorze przechowujemy w bezpieczny i
            poufny sposób. Dostęp mają wyłącznie osoby upoważnione: Ty oraz wskazany opiekun.
          </p>
          <p className="mt-3 text-gray-700">
            Twoje zdjęcia, historie, cytaty i linki do filmów są chronione nowoczesnymi
            systemami zabezpieczeń, aby pozostały dostępne dla bliskich przez wiele lat.
          </p>
          <p className="mt-3 text-gray-700">
            Bezpieczeństwo i prywatność traktujemy priorytetowo.
          </p>
        </article>
      </section>
    </main>
  );
}
