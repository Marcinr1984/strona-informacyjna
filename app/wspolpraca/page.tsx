import Link from "next/link";

export default function WspolpracaPage() {
  return (
    <main className="page-shell max-w-5xl">
      <section className="panel p-8">
        <span className="eyebrow">Współpraca B2B</span>
        <h1 className="section-title mt-4 text-4xl">Zaproszenie do współpracy</h1>
        <p className="mt-5 text-gray-700 dark:text-gray-300">
          Dla Bliskich zaprasza firmy i organizacje do oferowania nowoczesnych form
          upamiętnienia: eleganckich kodów QR, które pozwalają zachować wspomnienia,
          zdjęcia i historie życia bliskich w subtelnej, trwałej i godnej formie.
        </p>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          To idealne rozwiązanie dla firm, które chcą poszerzyć ofertę o produkty łączące
          tradycję z nowoczesnością i dać klientom wyjątkowe formy pamięci.
        </p>
      </section>

      <section className="panel mt-8 p-8">
        <h2 className="section-title text-2xl">Zarejestruj swoją firmę</h2>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          Jeśli chcesz dołączyć do grona partnerów Dla Bliskich, wypełnij krótki formularz
          rejestracyjny.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://qr.dlabliskich.pl/auth/register"
            className="inline-flex rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
          >
            Przejdź do rejestracji
          </a>
          <Link
            href="/kontakt"
            className="inline-flex rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
          >
            Kontakt
          </Link>
        </div>
      </section>

      <section className="panel mt-8 p-8">
        <h2 className="section-title text-2xl">Potrzebujesz więcej informacji?</h2>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          Odpowiemy na pytania dotyczące współpracy, materiałów, kosztów i możliwości
          personalizacji.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          E-mail: kontakt@dlabliskich.pl
          <br />
          Tel.: +48 123 456 789
        </p>
      </section>
    </main>
  );
}
