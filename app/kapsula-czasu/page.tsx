function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="mt-4 flex min-h-44 items-center justify-center rounded-xl border border-dashed border-gray-400/70 bg-gray-100/60 p-6 text-center text-sm text-gray-600 dark:border-gray-600 dark:bg-gray-800/40 dark:text-gray-300">
      {label}
    </div>
  );
}

export default function KapsulaCzasuPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
        <h1 className="text-4xl font-bold text-[var(--foreground)]">Kapsuła czasu</h1>
        <p className="mt-5 text-gray-700 dark:text-gray-300">
          Kapsuła czasu to miejsce, w którym wspomnienia mogą przetrwać przez pokolenia.
          Tworzysz zdjęcia, historie, cytaty i linki do filmów, które będą dostępne dla
          bliskich za życia lub po śmierci w eleganckiej, cyfrowej formie kodu QR.
        </p>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          Dla bezpieczeństwa warto wskazać opiekuna kapsuły, który zadba o wspomnienia po
          uzyskaniu Twojej zgody. Kod QR można także zapisać w spadku.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            Dodatkowa usługa: wizytówka z kodem QR
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Dla osób, które nie korzystają z technologii na co dzień, oferujemy eleganckie
            wizytówki z kodem QR i logo Dla Bliskich. To dyskretny sposób przekazania dostępu
            do wspomnień rodzinie i znajomym.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Minimalna ilość zamówienia: 100 sztuk. Opcja będzie dostępna jako dodatek w
            kreatorze podczas płatności.
          </p>
          <PhotoPlaceholder label="Miejsce na poglądowy projekt/fotografię wizytówki z kodem QR" />
        </article>

        <article className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">Bezpieczeństwo wspomnień</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Wszystkie informacje tworzone w konfiguratorze przechowujemy w bezpieczny i
            poufny sposób. Dostęp mają wyłącznie osoby upoważnione: Ty oraz wskazany opiekun.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Twoje zdjęcia, historie, cytaty i linki do filmów są chronione nowoczesnymi
            systemami zabezpieczeń, aby pozostały dostępne dla bliskich przez wiele lat.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Bezpieczeństwo i prywatność traktujemy priorytetowo.
          </p>
        </article>
      </section>
    </main>
  );
}
