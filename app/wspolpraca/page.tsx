import Link from "next/link";

export default function WspolpracaPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
        <h1 className="text-4xl font-bold text-[var(--foreground)]">Zaproszenie do współpracy</h1>
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

      <section className="mt-8 rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Zarejestruj swoją firmę</h2>
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

      <section className="mt-8 rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900/50">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Potrzebujesz więcej informacji?</h2>
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
